import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import data from '../data.json';

const Visual2CoverageOpportunity = () => {
  // Prepare scatter data
  const clinics = data.clinics.filter(c => c.revenue_12mo > 0);
  
  const scatterData = clinics.map(clinic => ({
    clinic_id: clinic.clinic_id,
    potential_score: clinic.potential_score,
    revenue_12mo: clinic.revenue_12mo / 1000, // in thousands
    tier: clinic.tier,
    market: clinic.market,
    opportunity_score: clinic.opportunity_score || 0
  }));

  // Separate by market
  const franceData = scatterData.filter(d => d.market === 'France');
  const beneluxData = scatterData.filter(d => d.market === 'Benelux');

  // Color mapping by tier
  const tierColors = {
    'Top': '#B87333',
    'Medium': '#DABFAA',
    'Low': '#E5E5E5'
  };

  // Calculate coverage percentages
  const totalClinics = data.clinics.length;
  const franceClinics = data.clinics.filter(c => c.market === 'France').length;
  const beneluxClinics = data.clinics.filter(c => c.market === 'Benelux').length;
  
  const franceCoverage = (franceData.length / franceClinics * 100).toFixed(1);
  const beneluxCoverage = (beneluxData.length / beneluxClinics * 100).toFixed(1);

  // Revenue per visit metrics (from analysis)
  const franceRevPerVisit = 1186;
  const beneluxRevPerVisit = 467;

  return (
    <div className="visual-container">
      <div className="visual-title">Visual 2: Coverage vs Opportunity Analysis</div>
      
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '14px', marginBottom: '15px' }}>
          Option A: Scatter Plot - Potential Score vs Actual Revenue
        </h3>
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '20px' }}>
          Each dot represents a clinic. Color indicates tier. France shows tight clustering, 
          Benelux shows wider dispersion (weak tier-revenue correlation).
        </p>
        
        <div className="two-column">
          {/* France scatter */}
          <div>
            <h4 style={{ fontSize: '13px', marginBottom: '10px', color: '#B87333' }}>
              France (n={franceData.length})
            </h4>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#DABFAA" />
                <XAxis 
                  type="number" 
                  dataKey="potential_score" 
                  name="Potential Score"
                  label={{ value: 'Potential Score', position: 'bottom', style: { fontSize: '11px' } }}
                  style={{ fontSize: '10px' }}
                />
                <YAxis 
                  type="number" 
                  dataKey="revenue_12mo" 
                  name="Revenue (€K)"
                  label={{ value: 'Revenue 12mo (€K)', angle: -90, position: 'insideLeft', style: { fontSize: '11px' } }}
                  style={{ fontSize: '10px' }}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  formatter={(value, name) => {
                    if (name === 'Revenue (€K)') return `€${value.toFixed(0)}K`;
                    return value.toFixed(3);
                  }}
                  contentStyle={{ backgroundColor: '#F5EFE6', border: '1px solid #B87333', fontSize: '11px' }}
                />
                <Scatter data={franceData} fill="#B87333">
                  {franceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={tierColors[entry.tier]} opacity={0.7} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          {/* Benelux scatter */}
          <div>
            <h4 style={{ fontSize: '13px', marginBottom: '10px', color: '#B87333' }}>
              Benelux (n={beneluxData.length})
            </h4>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#DABFAA" />
                <XAxis 
                  type="number" 
                  dataKey="potential_score" 
                  name="Potential Score"
                  label={{ value: 'Potential Score', position: 'bottom', style: { fontSize: '11px' } }}
                  style={{ fontSize: '10px' }}
                />
                <YAxis 
                  type="number" 
                  dataKey="revenue_12mo" 
                  name="Revenue (€K)"
                  label={{ value: 'Revenue 12mo (€K)', angle: -90, position: 'insideLeft', style: { fontSize: '11px' } }}
                  style={{ fontSize: '10px' }}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  formatter={(value, name) => {
                    if (name === 'Revenue (€K)') return `€${value.toFixed(0)}K`;
                    return value.toFixed(3);
                  }}
                  contentStyle={{ backgroundColor: '#F5EFE6', border: '1px solid #B87333', fontSize: '11px' }}
                />
                <Scatter data={beneluxData} fill="#DABFAA">
                  {beneluxData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={tierColors[entry.tier]} opacity={0.7} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '20px', marginTop: '15px', fontSize: '12px', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#B87333', borderRadius: '50%' }}></div>
            <span>Top Tier</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#DABFAA', borderRadius: '50%' }}></div>
            <span>Medium Tier</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#E5E5E5', borderRadius: '50%' }}></div>
            <span>Low Tier</span>
          </div>
        </div>
      </div>

      {/* Key metrics */}
      <div className="two-column">
        <div>
          <div className="metric-card">
            <div className="metric-label">France Coverage</div>
            <div className="metric-value">{franceCoverage}%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">France Revenue per Visit</div>
            <div className="metric-value">€{franceRevPerVisit.toLocaleString()}</div>
          </div>
        </div>
        <div>
          <div className="metric-card">
            <div className="metric-label">Benelux Coverage</div>
            <div className="metric-value">{beneluxCoverage}%</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Benelux Revenue per Visit</div>
            <div className="metric-value">€{beneluxRevPerVisit.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#F5EFE6', borderRadius: '4px', fontSize: '12px' }}>
        <strong>Insight:</strong> Similar coverage (65% vs 67%) but 2.5x gap in revenue per visit. 
        Benelux visits are spread thinly across clinics without revenue correlation—classic quality over quantity problem.
      </div>
    </div>
  );
};

export default Visual2CoverageOpportunity;
