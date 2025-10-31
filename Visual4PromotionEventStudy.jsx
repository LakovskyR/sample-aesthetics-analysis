import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const Visual4PromotionEventStudy = () => {
  // Promotion data from analysis
  const promoResults = [
    {
      id: 1,
      name: 'FR Filler (May-Jul 2023)',
      country: 'FR',
      product: 'Filler',
      prePeriod: [
        { period: 'Feb', revenue: 230, type: 'Pre' },
        { period: 'Mar', revenue: 235, type: 'Pre' },
        { period: 'Apr', revenue: 233, type: 'Pre' }
      ],
      duringPeriod: [
        { period: 'May', revenue: 250, type: 'During' },
        { period: 'Jun', revenue: 258, type: 'During' },
        { period: 'Jul', revenue: 262, type: 'During' }
      ],
      postPeriod: [
        { period: 'Aug', revenue: 225, type: 'Post' },
        { period: 'Sep', revenue: 220, type: 'Post' },
        { period: 'Oct', revenue: 223, type: 'Post' }
      ],
      uplift: '+10.4%',
      incremental: '€72K',
      sustained: '-4.2%'
    },
    {
      id: 2,
      name: 'NL Neuro (Sep-Nov 2024)',
      country: 'NL',
      product: 'Neuromodulator',
      prePeriod: [
        { period: 'Jun', revenue: 21, type: 'Pre' },
        { period: 'Jul', revenue: 22, type: 'Pre' },
        { period: 'Aug', revenue: 21, type: 'Pre' }
      ],
      duringPeriod: [
        { period: 'Sep', revenue: 24, type: 'During' },
        { period: 'Oct', revenue: 24, type: 'During' },
        { period: 'Nov', revenue: 25, type: 'During' }
      ],
      postPeriod: [
        { period: 'Dec', revenue: 23, type: 'Post' },
        { period: 'Jan', revenue: 22, type: 'Post' },
        { period: 'Feb', revenue: 23, type: 'Post' }
      ],
      uplift: '+13.1%',
      incremental: '€8.4K',
      sustained: '+6.0%'
    },
    {
      id: 3,
      name: 'BE SkinCare (Mar-Apr 2025)',
      country: 'BE',
      product: 'SkinCare',
      prePeriod: [
        { period: 'Dec', revenue: 4.5, type: 'Pre' },
        { period: 'Jan', revenue: 4.8, type: 'Pre' },
        { period: 'Feb', revenue: 4.7, type: 'Pre' }
      ],
      duringPeriod: [
        { period: 'Mar', revenue: 6.5, type: 'During' },
        { period: 'Apr', revenue: 6.5, type: 'During' }
      ],
      postPeriod: [
        { period: 'May', revenue: 5.6, type: 'Post' },
        { period: 'Jun', revenue: 5.5, type: 'Post' },
        { period: 'Jul', revenue: 5.6, type: 'Post' }
      ],
      uplift: '+39.2%',
      incremental: '€3.7K',
      sustained: '+18.8%',
      shaded: true // Smaller sample
    }
  ];

  return (
    <div className="visual-container">
      <div className="visual-title">Visual 4: Promotion Event Study Analysis</div>
      
      <p style={{ fontSize: '12px', color: '#666', marginBottom: '20px' }}>
        Pre/During/Post analysis for three promotional campaigns. Belgium SkinCare (Panel 3) is shaded lighter due to smaller sample size.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
        {promoResults.map((promo) => {
          // Combine all periods
          const chartData = [
            ...promo.prePeriod,
            ...promo.duringPeriod,
            ...promo.postPeriod
          ];

          const avgPre = promo.prePeriod.reduce((sum, d) => sum + d.revenue, 0) / promo.prePeriod.length;
          const avgDuring = promo.duringPeriod.reduce((sum, d) => sum + d.revenue, 0) / promo.duringPeriod.length;

          return (
            <div 
              key={promo.id} 
              style={{ 
                opacity: promo.shaded ? 0.7 : 1,
                padding: '15px',
                backgroundColor: promo.shaded ? '#F5EFE6' : 'white',
                borderRadius: '8px',
                border: promo.shaded ? '1px dashed #DABFAA' : '1px solid #DABFAA'
              }}
            >
              <h4 style={{ fontSize: '13px', marginBottom: '10px', color: '#B87333' }}>
                {promo.name}
              </h4>
              
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={chartData} margin={{ top: 10, right: 5, bottom: 30, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#DABFAA" />
                  <XAxis 
                    dataKey="period" 
                    angle={-45}
                    textAnchor="end"
                    height={60}
                    style={{ fontSize: '10px' }}
                  />
                  <YAxis 
                    style={{ fontSize: '10px' }}
                    width={35}
                    label={{ 
                      value: '€K', 
                      angle: -90, 
                      position: 'insideLeft', 
                      style: { fontSize: '10px' } 
                    }}
                  />
                  <Tooltip 
                    formatter={(value) => [`€${value.toFixed(1)}K`, 'Revenue']}
                    contentStyle={{ fontSize: '11px' }}
                  />
                  <ReferenceLine 
                    y={avgPre} 
                    stroke="#999" 
                    strokeDasharray="3 3"
                    label={{ 
                      value: 'Pre-avg', 
                      position: 'right',
                      fill: '#999',
                      fontSize: 9
                    }}
                  />
                  <Bar 
                    dataKey="revenue" 
                    fill="#B87333"
                  >
                    {chartData.map((entry, index) => (
                      <cell 
                        key={`cell-${index}`}
                        fill={
                          entry.type === 'Pre' ? '#DABFAA' :
                          entry.type === 'During' ? '#B87333' :
                          '#F5EFE6'
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              {/* Metrics */}
              <div style={{ marginTop: '15px', fontSize: '11px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ color: '#666' }}>Uplift during:</span>
                  <strong style={{ color: '#B87333' }}>{promo.uplift}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ color: '#666' }}>Incremental:</span>
                  <strong>{promo.incremental}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666' }}>Sustained post:</span>
                  <strong style={{ color: promo.sustained.includes('-') ? '#999' : '#B87333' }}>
                    {promo.sustained}
                  </strong>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary metrics */}
      <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
        {promoResults.map(promo => (
          <div key={promo.id} className="metric-card">
            <div className="metric-label">{promo.name.split('(')[0]}</div>
            <div className="metric-value">{promo.uplift}</div>
            <div style={{ fontSize: '11px', marginTop: '5px', color: '#666' }}>
              Incremental: {promo.incremental}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#F5EFE6', borderRadius: '4px', fontSize: '12px' }}>
        <strong>Key Insight:</strong> All three promotions show clear uplift during campaign periods (10-39%). 
        Belgium SkinCare has highest percentage uplift (+39%) but smallest absolute impact due to lower baseline. 
        Netherlands Neuro shows best sustained effect (+6% three months post-promo). 
        Recommendation: quarterly promo calendar targeting high-opportunity clinics → estimated +€2.6M annual.
      </div>
    </div>
  );
};

export default Visual4PromotionEventStudy;
