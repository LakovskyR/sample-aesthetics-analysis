import React from 'react';
import Visual1TimeSeriesRegulatory from './components/Visual1TimeSeriesRegulatory';
import Visual2CoverageOpportunity from './components/Visual2CoverageOpportunity';
import Visual3RepProductivity from './components/Visual3RepProductivity';
import Visual4PromotionEventStudy from './components/Visual4PromotionEventStudy';
import Visual5TerritoryOpportunity from './components/Visual5TerritoryOpportunity';
import Visual6SIPSimulation from './components/Visual6SIPSimulation';

function App() {
  return (
    <div className="container">
      <h1>Sample Aesthetics — Performance Visualizations</h1>
      <p style={{ marginBottom: '40px', color: '#666' }}>
        France vs Benelux Market Comparison | 36 Months (Nov 2022–Oct 2025)
      </p>

      <Visual1TimeSeriesRegulatory />
      <Visual2CoverageOpportunity />
      <Visual3RepProductivity />
      <Visual4PromotionEventStudy />
      <Visual5TerritoryOpportunity />
      <Visual6SIPSimulation />

      <div style={{ marginTop: '60px', padding: '20px', backgroundColor: '#F5EFE6', borderRadius: '8px' }}>
        <h3>Visual Design Guidelines</h3>
        <p style={{ fontSize: '13px', marginTop: '10px' }}>
          <strong>Color Palette:</strong> Copper (#B87333), Pale Peach (#F5EFE6), Light Tan (#DABFAA), Dark (#212121)
        </p>
        <p style={{ fontSize: '13px', marginTop: '10px' }}>
          <strong>Typography:</strong> Helvetica Neue | Heading 24-28px bold, Body 12-14px regular
        </p>
        <p style={{ fontSize: '13px', marginTop: '10px' }}>
          <strong>Instructions:</strong> Screenshot each visual and insert into README.md at the corresponding placeholder flag.
        </p>
      </div>
    </div>
  );
}

export default App;
