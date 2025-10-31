import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import data from '../data.json';

const Visual5TerritoryOpportunity = () => {
  // Get Benelux clinics with opportunity scores
  const beneluxClinics = data.clinics
    .filter(c => c.market === 'Benelux' && c.opportunity_score > 0)
    .sort((a, b) => b.opportunity_score - a.opportunity_score);

  // Top 35 pilot candidates
  const pilotCandidates = beneluxClinics.slice(0, 35);
  
  // Tier distribution of pilot candidates
  const tierCount = {
    'Top': pilotCandidates.filter(c => c.tier === 'Top').length,
    'Medium': pilotCandidates.filter(c => c.tier === 'Medium').length,
    'Low': pilotCandidates.filter(c => c.tier === 'Low').length
  };

  // Option A: Opportunity Heatmap (Bar chart ranking)
  const heatmapData = pilotCandidates.slice(0, 20).map((clinic, idx) => ({
    rank: idx + 1,
    clinic_id: clinic.clinic_id,
    opportunity_score: clinic.opportunity_score,
    current_tier: clinic.tier,
    recommended_tier: clinic.opportunity_score > 0.7 ? 'Top' : 
                       clinic.opportunity_score > 0.4 ? 'Medium' : 'Low',
    mismatch: (clinic.opportunity_score > 0.7 && clinic.tier !== 'Top') ||
              (clinic.opportunity_score > 0.4 && clinic.opportunity_score <= 0.7 && clinic.tier === 'Low')
  }));

  // Color by mismatch
  const getBarColor = (entry) => {
    if (entry.mismatch) return '#FF6B6B'; // Red for mismatch
    return '#B87333'; // Copper for correct
  };

  // Option B: Sankey-like visualization using stacked bars
  const currentTierDist = [
    { tier: 'Top', count: beneluxClinics.filter(c => c.tier === 'Top').length, type: 'Current' },
    { tier: 'Medium', count: beneluxClinics.filter(c => c.tier === 'Medium').length, type: 'Current' },
    { tier: 'Low', count: beneluxClinics.filter(c => c.tier === 'Low').length, type: 'Current' }
  ];

  const recommendedTierDist = [
    { tier: 'Top', count: beneluxClinics.filter(c => c.opportunity_score > 0.7).length, type: 'Recommended' },
    { tier: 'Medium', count: beneluxClinics.filter(c => c.opportunity_score > 0.4 && c.opportunity_score <= 0.7).length, type: 'Recommended' },
    { tier: 'Low', count: beneluxClinics.filter(c => c.opportunity_score <= 0.4).length, type: 'Recommended' }
  ];

  // Pilot impact calculation
  const pilotImpact = {
    clinics: 35,
    monthlyVisitIncrease: 1,
    durationMonths: 3,
    revenuePerVisit: 353, // from regression
    quarterlyImpact: 35 * 1 * 3 * 353 / 3,
    annualImpact: 35 * 1 * 12 * 353
  };

  return (
    <div className="visual-container">
      <div className="visual-title">Visual 5: Territory Opportunity Mapping & Pilot Design</div>
      
      {/* Option A: Heatmap / Bar Chart */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '14px', marginBottom: '15px' }}>
          Option A: Opportunity Heatmap - Top 20 Benelux Clinics
        </h3>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '15px' }}>
          Clinics ranked by opportunity score. Red bars indicate tier mismatch (high opportunity, wrong tier).
        </p>
        
        <ResponsiveContainer width="100%" height={350}>
          <BarChart 
            data={heatmapData} 
            layout="vertical"
            margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#DABFAA" />
            <XAxis 
              type="number" 
              domain={[0, 1]}
              label={{ value: 'Opportunity Score', position: 'bottom', style: { fontSize: '11px' } }}
              style={{ fontSize: '10px' }}
            />
            <YAxis 
              type="category" 
              dataKey="clinic_id" 
              width={90}
              style={{ fontSize: '10px' }}
            />
            <Tooltip 
              formatter={(value, name, props) => {
                const entry = props.payload;
                return [
                  <div key="tooltip">
                    <div>Score: {value.toFixed(3)}</div>
                    <div>Current: {entry.current_tier}</div>
                    <div>Recommended: {entry.recommended_tier}</div>
                    {entry.mismatch && <div style={{ color: '#FF6B6B', fontWeight: 'bold' }}>⚠ Mismatch</div>}
                  </div>
                ];
              }}
              contentStyle={{ fontSize: '11px' }}
            />
            <Bar dataKey="opportunity_score">
              {heatmapData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Option B: Sankey-style comparison */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '14px', marginBottom: '15px' }}>
          Option B: Current vs Recommended Tier Distribution
        </h3>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '15px' }}>
          Shows reallocation if clinics are re-tiered based on opportunity scores.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {/* Current Distribution */}
          <div>
            <h4 style={{ fontSize: '13px', marginBottom: '10px', textAlign: 'center' }}>Current Tiers</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={currentTierDist}>
                <CartesianGrid strokeDasharray="3 3" stroke="#DABFAA" />
                <XAxis dataKey="tier" style={{ fontSize: '11px' }} />
                <YAxis style={{ fontSize: '11px' }} />
                <Tooltip contentStyle={{ fontSize: '11px' }} />
                <Bar dataKey="count" fill="#DABFAA" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recommended Distribution */}
          <div>
            <h4 style={{ fontSize: '13px', marginBottom: '10px', textAlign: 'center' }}>Recommended Tiers</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={recommendedTierDist}>
                <CartesianGrid strokeDasharray="3 3" stroke="#DABFAA" />
                <XAxis dataKey="tier" style={{ fontSize: '11px' }} />
                <YAxis style={{ fontSize: '11px' }} />
                <Tooltip contentStyle={{ fontSize: '11px' }} />
                <Bar dataKey="count" fill="#B87333" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Pilot Candidate Table */}
      <div>
        <h3 style={{ fontSize: '14px', marginBottom: '10px' }}>
          Top 15 Pilot Clinic Candidates
        </h3>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Clinic ID</th>
              <th>Current Tier</th>
              <th>Recommended</th>
              <th>Opportunity Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {heatmapData.slice(0, 15).map((clinic, idx) => (
              <tr key={idx}>
                <td><strong>{idx + 1}</strong></td>
                <td>{clinic.clinic_id}</td>
                <td>{clinic.current_tier}</td>
                <td style={{ color: '#B87333', fontWeight: 'bold' }}>{clinic.recommended_tier}</td>
                <td>{clinic.opportunity_score.toFixed(3)}</td>
                <td>
                  {clinic.mismatch ? 
                    <span style={{ color: '#FF6B6B', fontWeight: 'bold' }}>⚠ Re-tier</span> :
                    <span style={{ color: '#28a745' }}>✓ OK</span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pilot Impact Metrics */}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ fontSize: '14px', marginBottom: '15px' }}>
          Pilot Impact Estimate (35 Clinics, +1 Visit/Month)
        </h3>
        <div className="two-column">
          <div className="metric-card">
            <div className="metric-label">Pilot Clinics: Medium Tier</div>
            <div className="metric-value">{tierCount.Medium} of 35</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Monthly Visit Increase per Clinic</div>
            <div className="metric-value">+1 visit</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Quarterly Impact (3 months)</div>
            <div className="metric-value">€{pilotImpact.quarterlyImpact.toLocaleString()}</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">If Sustained Annually</div>
            <div className="metric-value" style={{ fontSize: '24px' }}>
              €{pilotImpact.annualImpact.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#F5EFE6', borderRadius: '4px', fontSize: '12px' }}>
        <strong>Pilot Design:</strong> 35 Benelux clinics (31 currently Medium tier, should be Top based on opportunity score). 
        Increase visit frequency from 0.5 to 1.5 visits/month. Using regression slope (€353 per visit), 
        expected quarterly impact is €{pilotImpact.quarterlyImpact.toLocaleString()}, 
        annualized to <strong>€{pilotImpact.annualImpact.toLocaleString()}</strong>.
      </div>
    </div>
  );
};

export default Visual5TerritoryOpportunity;
