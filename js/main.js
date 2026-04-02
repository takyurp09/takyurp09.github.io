/* ============================================================
   TAKY TAHMID SITE — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- NAVBAR active link on scroll ---- */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const navbar    = document.getElementById('navbar');
  const backTop   = document.getElementById('back-top');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');

  /* Mobile toggle */
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  /* Scroll spy */
  const onScroll = () => {
    const y = window.scrollY;

    /* Highlight active nav link */
    let current = '';
    sections.forEach(s => {
      if (y >= s.offsetTop - 80) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });

    /* Back-to-top button */
    backTop.classList.toggle('show', y > 400);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Back to top */
  if (backTop) {
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---- SKILL BAR ANIMATION (Intersection Observer) ---- */
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.dataset.width;
        skillObserver.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(el => skillObserver.observe(el));

  /* ---- CONTACT FORM (mailto fallback) ---- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name    = form.querySelector('#cf-name').value.trim();
      const email   = form.querySelector('#cf-email').value.trim();
      const subject = form.querySelector('#cf-subject').value.trim();
      const message = form.querySelector('#cf-message').value.trim();
      const mailto  = `mailto:takyurp09@gmail.com?subject=${encodeURIComponent(subject + ' (from ' + name + ')')}&body=${encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
      window.location.href = mailto;
    });
  }

  /* ---- FADE-IN on scroll ---- */
  const fadeEls = document.querySelectorAll('.research-card, .service-card, .contact-link');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    fadeObserver.observe(el);
  });

  /* ============================================================
     RESEARCH TOPICS MODAL — with Chart.js visualizations
     ============================================================ */

  const TOPIC_DATA = {

    'Climate Damages': {
      icon: '📉',
      category: 'Meta-Analysis · Under Review',
      summary: 'A first meta-analysis of divergent economic damage estimates from climate change, synthesizing 58 statistical models across 8 landmark papers using machine learning (gradient boosting) to derive a unified "best estimate." Also integrates damage persistence, sea-level rise, trade spillovers, and capital loss dynamics.',
      facts: [
        { label: '58', desc: 'Statistical models synthesized' },
        { label: '8', desc: 'Key papers analyzed' },
        { label: 'ML', desc: 'Gradient boosting ensemble' }
      ],
      chart: {
        type: 'bar',
        title: 'Climate Damage Components as % of GDP (Estimated contributions)',
        labels: ['Direct Productivity', 'Damage Persistence', 'Sea-Level Rise', 'Trade Spillovers', 'Capital Loss'],
        data: [2.1, 1.4, 0.8, 0.6, 0.9],
        colors: ['rgba(231,76,60,0.85)', 'rgba(231,76,60,0.70)', 'rgba(231,76,60,0.55)', 'rgba(231,76,60,0.40)', 'rgba(231,76,60,0.30)']
      }
    },

    'Agricultural Productivity': {
      icon: '🌾',
      category: 'Climate-Agriculture · In Progress',
      summary: 'Empirical analysis of how temperature anomalies dynamically affect agricultural GDP growth across 33 countries (1961–2022). A +1°C anomaly causes a sharp immediate decline followed by a multi-year rebound — consistent with "recovery" dynamics hypothesized in the climate-agriculture literature.',
      facts: [
        { label: '−140pp', desc: 'Ag GDP impact at Lag 0 per +1°C' },
        { label: '+180pp', desc: 'Rebound effect at Lag 1 (1yr)' },
        { label: '33', desc: 'Countries · 1961–2022' }
      ],
      chart: {
        type: 'bar',
        title: 'Temperature Anomaly Effect on Agricultural GDP Growth by Lag (percentage points, per +1°C)',
        labels: ['Lag 0\n(current yr)', 'Lag 1\n(1yr later)', 'Lag 2\n(2yr later)', 'Lag 3+'],
        data: [-140, 180, 177, 20],
        colors: ['rgba(231,76,60,0.88)', 'rgba(39,174,96,0.88)', 'rgba(39,174,96,0.75)', 'rgba(149,165,166,0.7)']
      }
    },

    'Food Security': {
      icon: '🥘',
      category: 'Development Economics · ASSA 2027',
      summary: 'Two-stage IV framework examining how persistent climate shocks propagate through agricultural productivity to household food security. Using lagged climate anomalies as instruments for agricultural GDP growth, with undernourishment and FIES as outcomes. Sample: 33 countries, 1,164 country-year observations.',
      facts: [
        { label: '1,164', desc: 'Country-year observations' },
        { label: '33', desc: 'Countries in sample' },
        { label: '2SLS', desc: 'Instrumental variables approach' }
      ],
      chart: {
        type: 'bar',
        title: 'Prevalence of Undernourishment by Region (%, average 2015–2022, FAOSTAT)',
        labels: ['Sub-Saharan\nAfrica', 'South\nAsia', 'SE\nAsia', 'Latin\nAmerica', 'Near\nEast', 'East\nAsia'],
        data: [22.4, 15.8, 8.3, 7.2, 9.1, 2.5],
        colors: ['rgba(230,126,34,0.85)', 'rgba(230,126,34,0.75)', 'rgba(230,126,34,0.65)', 'rgba(230,126,34,0.55)', 'rgba(230,126,34,0.45)', 'rgba(230,126,34,0.35)']
      }
    },

    'Social Cost of Carbon': {
      icon: '💰',
      category: 'Climate Policy · CCAC',
      summary: 'Extending MimiGIVE and MimiPAGE 2020/2025 integrated assessment models with updated national damage functions, mortality effects (Cromar et al.), and prior-to-posterior calibration. Work conducted under the Climate Cost Assessment Coalition (CCAC) research program in Julia using the Mimi framework.',
      facts: [
        { label: 'GIVE', desc: 'MimiGIVE model extended' },
        { label: 'PAGE', desc: 'MimiPAGE 2020 & 2025' },
        { label: 'Julia', desc: 'Mimi IAM framework' }
      ],
      chart: {
        type: 'bar',
        title: 'SCC Estimates by Model Variant ($/tCO₂, 2020 USD, illustrative central estimates)',
        labels: ['PAGE2020\nLow', 'PAGE2020\nCentral', 'GIVE\nLow', 'GIVE\nCentral', 'PAGE2025\nCentral'],
        data: [51, 120, 68, 145, 178],
        colors: ['rgba(142,68,173,0.5)', 'rgba(142,68,173,0.7)', 'rgba(142,68,173,0.55)', 'rgba(142,68,173,0.85)', 'rgba(142,68,173,0.95)']
      }
    },

    'Crop Yields': {
      icon: '🌡️',
      category: 'Climate Projections · ci26 Project',
      summary: 'Bias-adjusting CMIP6 climate model outputs against ERA5 reanalysis to produce credible crop yield impact projections. Includes metrics evaluation, spatial mapping across global agricultural regions, and visualization across GCM ensemble members — contributing to the ci26 bias-adjustment dataset release.',
      facts: [
        { label: 'CMIP6', desc: 'Latest generation GCMs' },
        { label: 'ERA5', desc: 'Observational baseline' },
        { label: '5-min', desc: 'Spatial resolution grid' }
      ],
      chart: {
        type: 'line',
        title: 'Projected Crop Yield Change (%) under Global Warming Scenarios (illustrative CMIP6-based estimates)',
        labels: ['1.5°C', '2°C', '2.5°C', '3°C', '4°C'],
        datasets: [
          { label: 'Wheat',  data: [-2.1, -5.3, -8.8, -13.2, -18.7], color: '#e67e22' },
          { label: 'Maize',  data: [-3.4, -7.2, -11.5, -17.1, -24.3], color: '#e74c3c' },
          { label: 'Rice',   data: [-1.2, -3.5,  -6.1,  -9.8, -14.2], color: '#3498db' },
          { label: 'Soybean',data: [-1.8, -4.1,  -7.3, -11.4, -16.9], color: '#27ae60' }
        ]
      }
    },

    'Machine Learning': {
      icon: '🤖',
      category: 'Methods · Applied ML',
      summary: 'Applying machine learning to synthesize heterogeneous economic damage estimates and identify key moderators in climate-economy relationships. Methods include gradient boosting (XGBoost), LASSO, random forests, and SHAP values for interpretability — bridging econometrics and ML in climate damage meta-analysis.',
      facts: [
        { label: 'XGBoost', desc: 'Primary ensemble method' },
        { label: 'SHAP', desc: 'Feature importance & interpretation' },
        { label: 'k-fold', desc: 'Cross-validation across studies' }
      ],
      chart: {
        type: 'bar',
        title: 'Model Performance: Out-of-Sample R² in Climate Damage Prediction (illustrative comparison)',
        labels: ['OLS', 'Ridge', 'LASSO', 'Random\nForest', 'XGBoost'],
        data: [0.41, 0.48, 0.51, 0.67, 0.73],
        colors: ['rgba(41,128,185,0.4)', 'rgba(41,128,185,0.55)', 'rgba(41,128,185,0.65)', 'rgba(41,128,185,0.80)', 'rgba(41,128,185,0.95)']
      }
    },

    'Causal Inference': {
      icon: '🔬',
      category: 'Econometrics · Methods',
      summary: 'Using two-stage least squares (2SLS) with lagged climate anomalies as instruments to establish causal pathways: temperature shocks → agricultural GDP → food security. Includes country and year fixed effects, robustness checks, and heterogeneous effects analysis by region (Sub-Saharan Africa vs. non-SSA).',
      facts: [
        { label: '2SLS', desc: 'Instrumental variables design' },
        { label: 'FE', desc: 'Country & year fixed effects' },
        { label: 'Lags 0–5', desc: 'Climate instrument window' }
      ],
      chart: {
        type: 'bar',
        title: 'First Stage Joint F-statistic by Instrument Set (threshold F>10 = strong)',
        labels: ['Temp\nLag 0', 'Temp\nLags 0-1', 'Temp\nLags 0-2', 'Temp\nLags 0-3', 'All Climate\nInstruments'],
        data: [2.10, 1.85, 1.52, 1.31, 0.14],
        colors: ['rgba(22,160,133,0.5)', 'rgba(22,160,133,0.6)', 'rgba(22,160,133,0.65)', 'rgba(22,160,133,0.7)', 'rgba(22,160,133,0.85)']
      }
    },

    'Ocean & Coastal Policy': {
      icon: '🦞',
      category: 'Environmental Policy · DNREC',
      summary: 'Data gap analysis for the Delaware Bay and Ocean Spatial Plan — assessing 130+ datasets across six activity categories to identify critical data needs for coastal management. Work conducted in partnership with the Delaware Department of Natural Resources and Environmental Control (DNREC).',
      facts: [
        { label: '130+', desc: 'Datasets evaluated' },
        { label: '6', desc: 'Ocean activity categories' },
        { label: 'DNREC', desc: 'State of Delaware partnership' }
      ],
      chart: {
        type: 'doughnut',
        title: 'Dataset Distribution by Ocean Activity Category (Delaware Bay & Ocean Spatial Plan)',
        labels: ['Fisheries & Aquaculture', 'Shipping & Navigation', 'Renewable Energy', 'Recreation & Tourism', 'Conservation & Habitat', 'Water Quality'],
        data: [28, 22, 18, 24, 21, 19],
        colors: ['#1e8a8a', '#1B2A4A', '#C9922A', '#27ae60', '#e74c3c', '#8e44ad']
      }
    },

    'Wage Effects': {
      icon: '💼',
      category: 'Labor Economics · In Progress',
      summary: 'Empirical investigation of how climate variability and long-run warming trends affect labor productivity and real wages. Particular focus on outdoor and physically demanding sectors where climate directly constrains work capacity — using panel econometrics across multiple countries and sectors.',
      facts: [
        { label: 'Panel', desc: 'Multi-country panel econometrics' },
        { label: 'Sectors', desc: 'Agriculture, construction, services' },
        { label: 'Climate', desc: 'Temp, humidity, extreme heat days' }
      ],
      chart: {
        type: 'bar',
        title: 'Estimated Temperature-Wage Elasticity by Sector (% wage change per +1°C, illustrative)',
        labels: ['Agriculture', 'Construction', 'Mining', 'Manufacturing', 'Transport', 'Services'],
        data: [-0.18, -0.12, -0.09, -0.05, -0.04, -0.02],
        colors: ['rgba(211,84,0,0.90)', 'rgba(211,84,0,0.75)', 'rgba(211,84,0,0.65)', 'rgba(211,84,0,0.52)', 'rgba(211,84,0,0.42)', 'rgba(211,84,0,0.30)']
      }
    }

  }; // end TOPIC_DATA

  let activeChart = null;

  function openTopic(name) {
    const d = TOPIC_DATA[name];
    if (!d) return;

    // Populate text
    document.getElementById('modal-icon').textContent     = d.icon;
    document.getElementById('modal-category').textContent = d.category;
    document.getElementById('modal-title').textContent    = name;
    document.getElementById('modal-summary').textContent  = d.summary;

    // Key facts
    document.getElementById('modal-facts').innerHTML = d.facts.map(f =>
      `<div class="fact-box">
        <span class="fact-value">${f.label}</span>
        <span class="fact-desc">${f.desc}</span>
      </div>`
    ).join('');

    // Chart title
    document.getElementById('chart-title').textContent = d.chart.title;

    // Destroy previous chart instance
    if (activeChart) { activeChart.destroy(); activeChart = null; }

    const ctx = document.getElementById('modal-chart').getContext('2d');
    const chartDefaults = {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => ' ' + ctx.formattedValue } }
      },
      scales: {
        y: { grid: { color: 'rgba(0,0,0,0.06)' }, ticks: { font: { size: 11 } } },
        x: { grid: { display: false }, ticks: { font: { size: 10 } } }
      }
    };

    if (d.chart.type === 'line') {
      activeChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: d.chart.labels,
          datasets: d.chart.datasets.map(ds => ({
            label: ds.label,
            data: ds.data,
            borderColor: ds.color,
            backgroundColor: ds.color + '22',
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 7
          }))
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'top', labels: { font: { size: 11 } } } },
          scales: chartDefaults.scales
        }
      });

    } else if (d.chart.type === 'doughnut') {
      activeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: d.chart.labels,
          datasets: [{ data: d.chart.data, backgroundColor: d.chart.colors, borderWidth: 3, borderColor: '#fff' }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'right', labels: { font: { size: 10 }, boxWidth: 14 } }
          }
        }
      });

    } else {
      // bar
      activeChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: d.chart.labels,
          datasets: [{
            data: d.chart.data,
            backgroundColor: d.chart.colors,
            borderRadius: 6,
            borderSkipped: false
          }]
        },
        options: chartDefaults
      });
    }

    // Highlight active chip
    document.querySelectorAll('.topic-chip').forEach(c =>
      c.classList.toggle('active', c.dataset.topic === name)
    );

    // Open overlay
    const overlay = document.getElementById('topic-modal');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeTopicModal() {
    const overlay = document.getElementById('topic-modal');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.querySelectorAll('.topic-chip').forEach(c => c.classList.remove('active'));
    if (activeChart) { activeChart.destroy(); activeChart = null; }
  }

  // Chip click listeners
  document.querySelectorAll('.topic-chip').forEach(chip => {
    chip.addEventListener('click', () => openTopic(chip.dataset.topic));
  });

  // Close button
  const modalCloseBtn = document.getElementById('modal-close');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeTopicModal);

  // Click outside modal box
  const topicOverlay = document.getElementById('topic-modal');
  if (topicOverlay) {
    topicOverlay.addEventListener('click', e => {
      if (e.target === topicOverlay) closeTopicModal();
    });
  }

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeTopicModal();
  });

});
