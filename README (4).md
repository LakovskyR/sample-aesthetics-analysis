# Sample Aesthetics — France vs Benelux Commercial Performance

<div align="center">

![Sample Aesthetics](https://img.shields.io/badge/Sample_Aesthetics-Performance_Analysis-B87333?style=for-the-badge)
![Analysis Period](https://img.shields.io/badge/Period-36_Months-F5EFE6?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Insight_Ready-success?style=for-the-badge)

**Identifying €148K+ annual revenue opportunity through targeting optimization**

*Visual design inspired by Allergan Aesthetics brand guidelines*

</div>

---

## Client Background

**Sample Aesthetics** operates across France and Benelux (Belgium, Netherlands, Luxembourg) with a focused portfolio of facial injectables, dermal fillers, and skincare products. Over 36 months (Nov 2022–Oct 2025), the company generated €20.8M through 641 clinics served by 51 sales representatives. Despite similar coverage rates, France outperforms Benelux by 4.3x in absolute revenue—revealing a targeting quality issue, not an effort problem.

### North Star Metrics

- **Coverage & Frequency**: Visits per clinic and territory call plan compliance
- **Conversion Quality**: Revenue generated per rep visit (€1,186 France vs €467 Benelux)
- **Market Share**: Our units vs estimated competitor activity  
- **Rep Productivity**: Visit-to-revenue correlation and lagged impact analysis
- **Territory Opportunity**: Clinic potential scores vs actual revenue performance

---

## Executive Summary

### The Bottom Line

France generates €16.9M (4.3x Benelux) with accelerating momentum (+14% H1→H2 growth), while Benelux plateaus at €3.9M (+7.2% growth). **The root cause isn't market size—it's targeting precision.** Benelux has 67% coverage (similar to France's 65%), but visits convert at 2.5x lower rates. Fix targeting, and we unlock €148K+ annually with zero new headcount.

[insert visual 1]

<table>
<tr>
<td width="50%" valign="top">

### Market Comparison — Headline Findings

- **France dominance**: €42,345 revenue per clinic vs Benelux's €16,206 (2.6x gap)
- **Coverage paradox**: Benelux 67% coverage but only €467 per visit (France: €1,186)
- **Tier mismatch**: Benelux "Top" tier generates €30K vs France Top tier's €291K (10x gap)
- **Growth divergence**: France accelerating (+14% H1→H2), Benelux plateauing (+7.2%)

</td>
<td width="50%" valign="top">

### Pilot-Ready Recommendations

- **Territory realignment pilot**: 35 high-opportunity Benelux clinics, +1 visit/month → **€148K annual impact**
- **Re-tier Benelux clinics**: 31 of top 35 opportunity clinics are currently Medium tier (should be Top)
- **Rep coaching program**: Deploy French best practices → close 2.5x revenue-per-visit gap
- **SIP redesign**: Shift from visit-based to opportunity-adjusted payouts (Gini 0.299, fairest model)

</td>
</tr>
</table>

---

## Dataset Overview

Analysis leverages synthetic data seeded with public anchors (ISAPS, DREES, national registries):

- **sales_transactions_monthly.csv**: 69,120 records | `date`, `clinic_id`, `country`, `product_sku`, `product_family`, `units`, `revenue`
- **clinics.csv**: 640 clinics | `clinic_id`, `country`, `region`, `tier`, `potential_score`  
- **physicians.csv**: Physician demographics and specialty mix
- **reps.csv**: 50 sales representatives | `rep_id`, `country`, `region`
- **rep_activity_monthly.csv**: 22,536 records | `date`, `rep_id`, `clinic_id`, `visits`, `samples`
- **promotions_calendar.csv**: 3 promotional campaigns with observed uplift
- **regulatory-events.csv**: 10 regulatory events across FR/BE/NL/LU (2023–2025)
- **competitor_estimates_monthly.csv**: Estimated competitor revenue by product family

---

## Insights Deep Dive

### 1. Revenue Trajectory with Regulatory Impact

[insert visual 1]

<table>
<tr>
<td width="33%" valign="top">

**What**

Revenue time series (Nov 2022–Oct 2025) shows France revenue growing from €436K/month (H1) to €497K/month (H2), while Benelux grows slowly from €108K to €116K. Three major regulatory events are annotated on the timeline.

</td>
<td width="33%" valign="top">

**Why**

France's growth momentum builds consistently across the period (+14.0% H1→H2). Benelux growth is constrained (+7.2%), with the 2024-06 Netherlands advertising restriction causing an 8% revenue decline in the following quarter. The 2024-02 France safety advisory had minimal negative impact (actually +19% post-event, likely due to increased transparency boosting confidence).

</td>
<td width="34%" valign="top">

**So What**

Benelux's slower growth isn't just market dynamics—regulatory headwinds and weaker targeting compound the problem. Immediate action: launch territory reallocation pilot in Benelux focusing on top 35 clinics with **estimated €148K annual incremental revenue**. The France playbook is working—replicate it.

</td>
</tr>
</table>

**Recommendations**:
- Implement quarterly regulatory scanning and contingency planning for ad restrictions
- Use France's post-safety-advisory messaging as template for transparency-builds-trust positioning
- Track growth momentum monthly; Benelux needs intervention before plateau becomes decline

---

### 2. Coverage vs Opportunity: The Targeting Quality Gap

[insert visual 2]

<table>
<tr>
<td width="33%" valign="top">

**What**

Scatter plot of clinics by potential score vs actual revenue, colored by tier and faceted by France/Benelux. Benelux shows high coverage (67% of clinics visited) but weak correlation between potential scores and actual revenue. Many "Medium" tier clinics in Benelux rank in top 35 by opportunity score.

</td>
<td width="33%" valign="top">

**Why**

Benelux clinic tiering appears miscalibrated—current tier assignments don't predict revenue performance. France has tight correlation (0.446) between visits and revenue; Benelux correlation is only 0.200. This suggests Benelux reps visit broadly but without strategic prioritization, diluting impact per visit.

</td>
<td width="34%" valign="top">

**So What**

**Re-tier all Benelux clinics** using actual 12-month revenue (50% weight), 6-month growth trend (20%), and potential score (30%). Of the top 35 opportunity clinics, 31 are currently Medium tier—should be Top. Reallocating rep time to these 35 clinics (+1 visit/month) yields **€148K annual impact** based on regression analysis.

</td>
</tr>
</table>

**Recommendations**:
- Rebuild Benelux tiering model (implement in Month 1)
- Pilot with 35 clinics in Q1 2026: +1 visit/month, track monthly revenue uplift  
- Set visit frequency standards: Top tier 2x/month, Medium 1x/month, Low 1x/quarter

---

### 3. Rep Productivity: Visit-to-Revenue Correlation

[insert visual 3]

<table>
<tr>
<td width="33%" valign="top">

**What**

Scatter plots faceted by tier (Top/Medium/Low) show lagged visits (t-1) vs current revenue (t), with regression lines. Top tier shows strongest correlation (R²=0.253, slope €353 per visit). France points cluster tighter than Benelux, indicating more predictable rep impact.

</td>
<td width="33%" valign="top">

**Why**

Top-tier clinics respond linearly to rep engagement: each additional visit in month t yields €353 incremental revenue in month t+1. Medium and Low tiers show near-zero correlation (R²<0.05), suggesting visits are maintenance rather than revenue drivers. France correlation (0.446) far exceeds Benelux (0.200) due to better targeting and higher-value conversations per visit.

</td>
<td width="34%" valign="top">

**So What**

Focus rep time on Top-tier clinics where visits demonstrably drive revenue. **Pilot impact model**: 35 Benelux clinics × +1 visit/month × €353 per visit × 12 months = **€148,260 annual incremental revenue**. Deploy French rep coaching program to close 2.5x revenue-per-visit gap in Benelux (target: +€360K annual by Year 2).

</td>
</tr>
</table>

**Recommendations**:
- Mandate minimum visit frequencies by tier, tracked in CRM weekly
- Quarterly rep shadows: Benelux reps observe France top performers (2 days/quarter)
- Implement prescription follow-through metrics to track conversion beyond the visit

---

### 4. Promotion Event Study: Diff-in-Diff Analysis

[insert visual 4]

<table>
<tr>
<td width="33%" valign="top">

**What**

Three-panel event study showing pre/during/post revenue for promotional campaigns: (1) FR Filler May–Jul 2023, (2) NL Neuro Sep–Nov 2024, (3) BE SkinCare Mar–Apr 2025. Each panel compares treated clinics vs matched controls. Panel 3 is shaded lighter due to smaller sample size.

</td>
<td width="33%" valign="top">

**Why**

Promotions show clear uplift: FR +10.4% (€72K incremental), NL +13.1% (€8.4K incremental), BE +39.2% (€3.7K incremental). Belgium skincare promo has highest percentage uplift but smallest absolute impact due to lower baseline. Post-promo revenue shows partial persistence (BE sustained +18.8% three months after promo end).

</td>
<td width="34%" valign="top">

**So What**

Promotions work, especially when targeted at high-opportunity clinics. **Implement quarterly promotional calendar** with pre-planned targeting, inventory prep, and matched-control measurement. Expected annual impact: **+€2.1M France, +€540K Benelux** (assumes 4 promos/year with 15% average uplift).

</td>
</tr>
</table>

**Recommendations**:
- Q1 2026: "New Year Confidence" campaign (combat seasonal low in Jan–Feb)
- Build matched-control framework into campaign design (enables clean ROI measurement)
- Reserve 30% of promo budget for Benelux to accelerate growth trajectory

---

### 5. Territory Opportunity Mapping & Pilot Design

[insert visual 5]

<table>
<tr>
<td width="33%" valign="top">

**What**

Two visualizations offered: **(A) Opportunity heatmap** showing Benelux clinics ranked by opportunity score (color gradient from low to high), with current tier vs recommended tier mismatches highlighted; **(B) Sankey diagram** showing flow from current tier distribution to recommended tier distribution. Both include a table of top 15 pilot clinic candidates.

</td>
<td width="33%" valign="top">

**Why**

Opportunity scoring formula (30% potential, 50% 12-month revenue, 20% 6-month growth) identifies 35 Benelux clinics that are high-opportunity but under-resourced. Of these, 31 are currently Medium tier despite ranking in top 15% overall. Current potential scores don't predict actual revenue (correlation <0.2 in Benelux), indicating the scoring model needs recalibration.

</td>
<td width="34%" valign="top">

**So What**

Launch **Q1 2026 pilot: 35 Benelux clinics, +1 visit/month, 3-month duration**. Using regression slope (€353 per visit), expected quarterly impact is €37K, annualized to **€148K**. Track weekly KPIs: revenue per clinic, visit-to-revenue correlation, rep attainment. If pilot succeeds (>20% revenue uplift), scale to full Benelux rollout in Q2 2026.

</td>
</tr>
</table>

**Recommendations**:
- Week 1-2: Re-tier Benelux using opportunity score model, validate with field leadership
- Week 3-4: Select pilot participants (35 clinics, 4 reps in Netherlands region)  
- Month 2-3: Execute pilot with weekly monitoring dashboard
- Q2 2026: Go/No-Go decision based on pilot results (target: +€37K incremental in Q1)

---

### 6. Sales Incentive Plan Simulation

[insert visual 6]

<table>
<tr>
<td width="33%" valign="top">

**What**

Payout curves for three SIP variants plotted against rep performance percentile (0-100%). Variant A (visit-based, current) shows flat curve. Variant B (conversion-weighted) rewards revenue-per-visit. Variant C (opportunity-adjusted) normalizes by territory difficulty. Metrics cards display Gini coefficients, variance, and attainment rates.

</td>
<td width="33%" valign="top">

**Why**

Current SIP (Variant A) rewards raw visit volume, encouraging breadth over depth. Gini coefficient is low (0.151) but only because payouts are compressed—doesn't differentiate high performers. Variant B increases differentiation (Gini 0.309) but penalizes reps in harder territories. Variant C balances fairness and performance (Gini 0.299) by adjusting for territory potential.

</td>
<td width="34%" valign="top">

**So What**

**Recommend Variant C (opportunity-adjusted)** for implementation in H2 2026. Pilot with transparent communication: show reps their territory potential score and how it affects quotas. Expected outcome: reps focus on conversion quality (not just visit quantity), closing the 2.5x revenue-per-visit gap between France and Benelux. Estimated impact: **+€360K annual** by Year 2 through improved targeting.

</td>
</tr>
</table>

**Recommendations**:
- Design Variant C formula with field leadership input (transparency builds trust)
- Pilot in Q3 2026 with 10 reps (5 France, 5 Benelux) to test fairness perception
- Full rollout in 2027 if Gini stays <0.35 and rep satisfaction scores remain high

---

## Visual Styling Guide (for Webapp)

**Color Palette** (Allergan Aesthetics-inspired):
- **Copper accent**: `#B87333` — use for KPIs, highlights, regression lines, key data points
- **Pale Peach background**: `#F5EFE6` — cards, backgrounds, secondary areas
- **Light Tan**: `#DABFAA` — tertiary accents, borders
- **Dark text**: `#212121` — primary text, labels
- **White**: `#FFFFFF` — clean backgrounds, contrast areas

**Typography**:
- Font family: Helvetica Neue or system sans-serif
- Heading: 24–28px bold
- Subheading: 18–20px medium  
- Body text: 12–14px regular
- Chart labels: 10–12px

**Chart Guidelines**:
- Use varied chart types across the 6 visuals (line, scatter, heatmap, event study, Sankey, curves)
- Copper should be the hero color (highlights, callouts, key series)
- Minimize gridlines and non-data ink
- Include clear legends and axis labels
- Ensure accessibility: sufficient contrast, readable labels

---

## Methodology & Caveats

This analysis uses **synthetic data seeded with public anchors** (ISAPS global aesthetic procedure volumes, DREES French healthcare data, national clinic registries). All patterns reflect realistic commercial dynamics but are not actual company data.

**Analytical methods**:
- **H1 vs H2 growth**: First 6 months vs last 6 months of dataset (Nov 2022–Apr 2023 vs May–Oct 2025)
- **Lagged regression**: Linear model with 1-month lag on visits, controlled for tier and market
- **Event study**: Diff-in-diff using matched controls (same country type, tier, pre-period revenue ±20%)
- **Opportunity scoring**: Weighted formula (30% potential, 50% revenue, 20% growth), MinMax normalized
- **Gini coefficient**: Standard inequality measure; <0.30 = relatively equal, >0.40 = high inequality

**Caveats**: Correlation ≠ causation. Event study and pilot designs estimate incremental impacts but cannot eliminate all confounders. Recommend phased rollout with A/B testing where feasible.

---

## Next Steps & Deliverables

**Immediate Actions (Next 30 Days)**:
- ✅ Present findings to Sales Leadership  
- ✅ Gain approval for Q1 2026 Benelux pilot (35 clinics, €148K target)
- ✅ Build re-tiering model and validate with field teams
- ✅ Identify pilot participants (4 reps, Netherlands region)

**Q1 2026 Priorities**:
- Launch pilot with weekly KPI tracking dashboard
- Initiate rep coaching program (French best practices)
- Design promotional calendar for full-year 2026
- Develop SIP Variant C prototype with leadership input

**Q2 2026 Review**:
- Evaluate pilot results (target: +€37K quarterly incremental)
- Go/No-Go decision on full Benelux rollout
- Scale rep coaching program if pilot shows >15% conversion improvement
- Finalize SIP Variant C for H2 2026 pilot

---

<div align="center">

**Built by an analyst who finds money, not just dashboards** 💊

![Made with Python](https://img.shields.io/badge/Python-Analysis-3776AB?style=flat-square&logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-Visualizations-61DAFB?style=flat-square&logo=react&logoColor=black)
![Impact](https://img.shields.io/badge/Impact-€148K_Identified-B87333?style=flat-square)

**€148K+ Annual Opportunity | Zero New Headcount | Data-Driven Targeting**

</div>
