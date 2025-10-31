import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import data from '../data.json';

const Visual1TimeSeriesRegulatory = () => {
  // Aggregate sales by month and market
  const salesByMonth = data.sales_monthly.reduce((acc, row) => {
    const key = `${row.date}_${row.market}`;
    if (!acc[key]) {
      acc[key] = {
        date: row.date,
        month: new Date(row.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }),
        market: row.market,
        revenue: 0
      };
    }
    acc[key].revenue += row.revenue;
    return acc;
  }, {});

  const salesArray = Object.values(salesByMonth);
  
  // Pivot to get France and Benelux as separate columns
  const chartData = [];
  const dates = [...new Set(salesArray.map(d => d.date))].sort();
  
  dates.forEach(date => {
    const france = salesArray.find(d => d.date === date && d.market === 'France');
    const benelux = salesArray.find(d => d.date === date && d.market === 'Benelux');
    const month = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    
    chartData.push({
      month,
      date,
      France: france ? france.revenue / 1000 : 0, // in thousands
      Benelux: benelux ? benelux.revenue / 1000 : 0
    });
  });

  // Major regulatory events to annotate
  const majorEvents = [
    { date: '2024-02-01', label: 'FR Safety Advisory', color: '#FF6B6B' },
    { date: '2024-06-01', label: 'NL Ad Restriction', color: '#FF9F1C' },
    { date: '2025-04-01', label: 'FR Supply Alert', color: '#FFD23F' }
  ];

  // Product family small multiples data
  const familyData = {};
  data.sales_monthly.forEach(row => {
    const key = `${row.date}_${row.product_family}_${row.market}`;
    if (!familyData[key]) {
      familyData[key] = {
        date: row.date,
        product_family: row.product_family,
        market: row.market,
        revenue: 0
      };
    }
    familyData[key].revenue += row.revenue;
  });

  const families = ['Filler', 'Neuromodulator', 'SkinCare_Product'];
  
  return (
    <div className="visual-container">
      <div className="visual-title">Visual 1: Revenue Time Series with Regulatory Impact</div>
      
      {/* Main time series */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#DABFAA" />
          <XAxis 
            dataKey="month" 
            angle={-45} 
            textAnchor="end" 
            height={100}
            style={{ fontSize: '11px' }}
          />
          <YAxis 
            label={{ value: 'Revenue (€K)', angle: -90, position: 'insideLeft', style: { fontSize: '12px' } }}
            style={{ fontSize: '11px' }}
          />
          <Tooltip 
            formatter={(value) => `€${value.toFixed(0)}K`}
            contentStyle={{ backgroundColor: '#F5EFE6', border: '1px solid #B87333' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          
          {/* Regulatory event markers */}
          {majorEvents.map(event => {
            const eventData = chartData.find(d => d.date >= event.date);
            if (eventData) {
              return (
                <ReferenceLine 
                  key={event.date}
                  x={eventData.month}
                  stroke={event.color}
                  strokeDasharray="5 5"
                  label={{ 
                    value: event.label, 
                    position: 'top',
                    fill: event.color,
                    fontSize: 10
                  }}
                />
              );
            }
            return null;
          })}
          
          <Line 
            type="monotone" 
            dataKey="France" 
            stroke="#B87333" 
            strokeWidth={3}
            dot={false}
            name="France"
          />
          <Line 
            type="monotone" 
            dataKey="Benelux" 
            stroke="#DABFAA" 
            strokeWidth={3}
            dot={false}
            name="Benelux"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Small multiples by product family */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '14px' }}>Revenue by Product Family</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {families.map(family => {
            // Prepare data for this family
            const familyChartData = dates.map(date => {
              const month = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
              const franceData = Object.values(familyData).find(
                d => d.date === date && d.product_family === family && d.market === 'France'
              );
              const beneluxData = Object.values(familyData).find(
                d => d.date === date && d.product_family === family && d.market === 'Benelux'
              );
              
              return {
                month,
                France: franceData ? franceData.revenue / 1000 : 0,
                Benelux: beneluxData ? beneluxData.revenue / 1000 : 0
              };
            });

            return (
              <div key={family}>
                <h4 style={{ fontSize: '12px', marginBottom: '10px', color: '#B87333' }}>
                  {family.replace('_', ' ')}
                </h4>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={familyChartData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                    <XAxis dataKey="month" hide />
                    <YAxis style={{ fontSize: '10px' }} width={40} />
                    <Tooltip 
                      formatter={(value) => `€${value.toFixed(0)}K`}
                      contentStyle={{ fontSize: '11px' }}
                    />
                    <Line type="monotone" dataKey="France" stroke="#B87333" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="Benelux" stroke="#DABFAA" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key metrics */}
      <div className="two-column" style={{ marginTop: '30px' }}>
        <div className="metric-card">
          <div className="metric-label">France H1→H2 Growth</div>
          <div className="metric-value">+14.0%</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Benelux H1→H2 Growth</div>
          <div className="metric-value">+7.2%</div>
        </div>
      </div>
    </div>
  );
};

export default Visual1TimeSeriesRegulatory;
