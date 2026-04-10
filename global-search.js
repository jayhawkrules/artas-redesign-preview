/**
 * ARTAS Global Search
 * Injects a search overlay into every page via a single JS file.
 * No external dependencies, no stylesheet modifications needed.
 */
(function () {
  'use strict';

  // ─── DATABASE ────────────────────────────────────────────────────────────────

  window.DATABASE = window.DATABASE || [];
  const DATABASE = window.DATABASE = [
    // SHOWS
    {name:"American Ninja Warrior",network:"NBC",nominations:40,wins:8,years:"1st–12th Annual",type:"show",link:"/past-winners/"},
    {name:"RuPaul's Drag Race",network:"MTV",nominations:35,wins:7,years:"1st–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Hell's Kitchen",network:"FOX",nominations:30,wins:5,years:"1st–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Jersey Shore Family Vacation",network:"MTV",nominations:25,wins:6,years:"6th–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Shark Tank",network:"ABC",nominations:22,wins:3,years:"1st–12th Annual",type:"show",link:"/past-winners/"},
    {name:"The Voice",network:"NBC",nominations:20,wins:4,years:"1st–11th Annual",type:"show",link:"/past-winners/"},
    {name:"Dancing With The Stars",network:"ABC",nominations:18,wins:2,years:"1st–12th Annual",type:"show",link:"/past-winners/"},
    {name:"America's Got Talent",network:"NBC",nominations:18,wins:3,years:"2nd–12th Annual",type:"show",link:"/past-winners/"},
    {name:"The Masked Singer",network:"FOX",nominations:15,wins:4,years:"7th–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Vanderpump Rules",network:"Bravo",nominations:14,wins:3,years:"3rd–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Deadliest Catch",network:"Discovery",nominations:12,wins:7,years:"1st–8th Annual",type:"show",link:"/past-winners/"},
    {name:"The Challenge",network:"MTV",nominations:12,wins:2,years:"6th–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Survivor",network:"CBS",nominations:12,wins:1,years:"1st–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Celebrity Family Feud",network:"ABC",nominations:10,wins:3,years:"7th–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Big Brother",network:"CBS",nominations:10,wins:2,years:"1st–12th Annual",type:"show",link:"/past-winners/"},
    {name:"The Amazing Race",network:"CBS",nominations:10,wins:2,years:"1st–12th Annual",type:"show",link:"/past-winners/"},
    {name:"90 Day Fiancé",network:"TLC",nominations:10,wins:2,years:"7th–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Sister Wives",network:"TLC",nominations:8,wins:0,years:"7th–12th Annual",type:"show",link:"/12th-annual-nominees-list/"},
    {name:"The Kardashians",network:"Hulu",nominations:8,wins:0,years:"1st–12th Annual",type:"show",link:"/12th-annual-nominees-list/"},
    {name:"Welcome to Plathville",network:"TLC",nominations:8,wins:0,years:"9th–12th Annual",type:"show",link:"/12th-annual-nominees-list/"},
    {name:"Love & Marriage: Huntsville",network:"OWN",nominations:5,wins:1,years:"10th–12th Annual",type:"show",link:"/past-winners/"},
    {name:"The Golden Bachelorette",network:"ABC",nominations:6,wins:2,years:"2024",type:"show",link:"/past-winners/"},
    {name:"Curious Case of Natalia Grace",network:"ID",nominations:7,wins:2,years:"2024",type:"show",link:"/past-winners/"},
    {name:"Ridiculousness",network:"MTV",nominations:6,wins:2,years:"10th–12th Annual",type:"show",link:"/past-winners/"},
    {name:"The Price Is Right At Night",network:"CBS",nominations:5,wins:2,years:"2023–2024",type:"show",link:"/past-winners/"},
    {name:"Evil Lives Here",network:"ID",nominations:6,wins:2,years:"10th–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Jeopardy!",network:"ABC",nominations:4,wins:1,years:"9th–12th Annual",type:"show",link:"/past-winners/"},
    {name:"The Bachelor",network:"ABC",nominations:5,wins:1,years:"2014–2022",type:"show",link:"/past-winners/"},
    {name:"Catfish: The TV Show",network:"MTV",nominations:4,wins:1,years:"1st–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Opportunity Knock$",network:"PBS",nominations:3,wins:2,years:"2023–2024",type:"show",link:"/past-winners/"},
    {name:"Ms. Pat Settles It",network:"BET",nominations:5,wins:1,years:"2024",type:"show",link:"/past-winners/"},
    {name:"Scare Tactics",network:"USA",nominations:2,wins:0,years:"2024",type:"show",link:"/12th-annual-nominees-list/"},
    {name:"The Traitors",network:"Peacock",nominations:3,wins:0,years:"2024",type:"show",link:"/12th-annual-nominees-list/"},
    {name:"Duck Dynasty",network:"A&E",nominations:6,wins:3,years:"2013–2015",type:"show",link:"/past-winners/"},
    {name:"Pitbulls & Parolees",network:"Animal Planet",nominations:8,wins:5,years:"2013–2019",type:"show",link:"/past-winners/"},
    {name:"The Great British Baking Show",network:"Netflix",nominations:4,wins:2,years:"10th–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Lego Masters",network:"FOX",nominations:2,wins:1,years:"2022",type:"show",link:"/past-winners/"},
    {name:"Trixie Motel",network:"Discovery+",nominations:2,wins:1,years:"2023",type:"show",link:"/past-winners/"},
    {name:"Quiet on Set",network:"ID",nominations:2,wins:0,years:"2024",type:"show",link:"/12th-annual-nominees-list/"},
    {name:"Snapped",network:"Oxygen",nominations:3,wins:1,years:"2024",type:"show",link:"/past-winners/"},
    {name:"Below Deck",network:"Bravo",nominations:9,wins:2,years:"3rd–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Real Housewives of Atlanta",network:"Bravo",nominations:8,wins:1,years:"1st–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Real Housewives of New Jersey",network:"Bravo",nominations:7,wins:1,years:"1st–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Real Housewives of Beverly Hills",network:"Bravo",nominations:7,wins:1,years:"1st–12th Annual",type:"show",link:"/past-winners/"},
    {name:"MasterChef",network:"FOX",nominations:6,wins:1,years:"1st–11th Annual",type:"show",link:"/past-winners/"},
    {name:"Project Runway",network:"Bravo",nominations:5,wins:1,years:"2013–2022",type:"show",link:"/past-winners/"},
    {name:"Top Chef",network:"Bravo",nominations:5,wins:1,years:"1st–12th Annual",type:"show",link:"/past-winners/"},
    {name:"Love Island USA",network:"Peacock",nominations:4,wins:1,years:"10th–12th Annual",type:"show",link:"/past-winners/"},
    {name:"The Bachelorette",network:"ABC",nominations:4,wins:1,years:"2014–2023",type:"show",link:"/past-winners/"},
    {name:"Dance Moms",network:"Lifetime",nominations:7,wins:3,years:"2013–2019",type:"show",link:"/past-winners/"},
    {name:"Storage Wars",network:"A&E",nominations:5,wins:2,years:"1st–11th Annual",type:"show",link:"/past-winners/"},
    {name:"Pawn Stars",network:"History",nominations:4,wins:1,years:"1st–11th Annual",type:"show",link:"/past-winners/"},
    {name:"Gold Rush",network:"Discovery",nominations:4,wins:1,years:"1st–11th Annual",type:"show",link:"/past-winners/"},
    {name:"My 600-lb Life",network:"TLC",nominations:5,wins:0,years:"2nd–12th Annual",type:"show",link:"/12th-annual-nominees-list/"},

    // PEOPLE
    {name:"RuPaul Charles",shows:"RuPaul's Drag Race",nominations:10,wins:4,type:"person",link:"/past-winners/"},
    {name:"Gordon Ramsay",shows:"Hell's Kitchen",nominations:5,wins:1,type:"person",link:"/past-winners/"},
    {name:"Jeff Probst",shows:"Survivor",nominations:4,wins:2,type:"person",link:"/past-winners/"},
    {name:"Steve Harvey",shows:"Celebrity Family Feud",nominations:4,wins:2,type:"person",link:"/past-winners/"},
    {name:"Wayne Brady",shows:"Let's Make A Deal",nominations:3,wins:2,type:"person",link:"/past-winners/"},
    {name:"Abby Lee Miller",shows:"Dance Moms",nominations:4,wins:3,type:"person",link:"/past-winners/"},
    {name:"Selena Gomez",shows:"Selena + Chef",nominations:2,wins:1,type:"person",link:"/reality-royalty/"},
    {name:"Jennifer Lopez",shows:"World of Dance",nominations:1,wins:1,type:"person",link:"/reality-royalty/"},
    {name:"Derek Hough",shows:"Dancing With The Stars",nominations:1,wins:1,type:"person",link:"/reality-royalty/"},
    {name:"Khloé Kardashian",shows:"Keeping Up With The Kardashians",nominations:1,wins:1,type:"person",link:"/reality-royalty/"},
    {name:"Lisa Vanderpump",shows:"RHOBH, Vanderpump Rules",nominations:2,wins:1,type:"person",link:"/reality-royalty/"},
    {name:"Blake Shelton",shows:"The Voice",nominations:3,wins:2,type:"person",link:"/reality-royalty/"},
    {name:"Leah Remini",shows:"Scientology and the Aftermath",nominations:2,wins:2,type:"person",link:"/reality-royalty/"},
    {name:"Snoop Dogg",shows:"Martha & Snoop's Potluck Dinner Party",nominations:1,wins:1,type:"person",link:"/reality-royalty/"},
    {name:"Tamar Braxton",shows:"Celebrity Big Brother",nominations:1,wins:1,type:"person",link:"/reality-royalty/"},
    {name:"Dr. Sandra Lee",shows:"Dr. Pimple Popper",nominations:2,wins:1,type:"person",link:"/reality-royalty/"},
    {name:"Pauly D",shows:"Jersey Shore Family Vacation",nominations:3,wins:2,type:"person",link:"/reality-royalty/"},
    {name:"Melody Rogers",shows:"Love & Marriage: Huntsville",nominations:2,wins:1,type:"person",link:"/reality-royalty/"},
    {name:"Heather McDonald",shows:"Juicy Scoop, 11th Annual Host",nominations:2,wins:1,type:"person",link:"/past-winners/"},
    {name:"Tiffany 'New York' Pollard",shows:"Flavor of Love, I Love New York",nominations:1,wins:1,type:"person",link:"/past-winners/"},
    {name:"Todd Chrisley",shows:"Chrisley Knows Best",nominations:1,wins:1,type:"person",link:"/reality-royalty/"},
    {name:"Vicki Gunvalson",shows:"RHOC",nominations:1,wins:1,type:"person",link:"/reality-royalty/"},
    {name:"Ryan Seacrest",shows:"American Idol",nominations:2,wins:1,type:"person",link:"/past-winners/"},
    {name:"Betty White",shows:"Off Their Rockers",nominations:2,wins:1,type:"person",link:"/past-winners/"},
    {name:"Nick Cannon",shows:"The Masked Singer",nominations:2,wins:0,type:"person",link:"/12th-annual-nominees-list/"},
    {name:"Alfonso Ribeiro",shows:"AFV",nominations:2,wins:0,type:"person",link:"/12th-annual-nominees-list/"},
    {name:"Darcey & Stacey Silva",shows:"Darcey & Stacey",nominations:1,wins:1,type:"person",link:"/reality-royalty/"},
    {name:"Omarosa",shows:"House of Villains",nominations:2,wins:0,type:"person",link:"/12th-annual-nominees-list/"},
    {name:"Big Ed",shows:"90 Day Fiancé",nominations:2,wins:0,type:"person",link:"/12th-annual-nominees-list/"},
    {name:"Tom Bergeron",shows:"Dancing With The Stars",nominations:3,wins:2,type:"person",link:"/past-winners/"},
    {name:"Phil Keoghan",shows:"The Amazing Race",nominations:3,wins:1,type:"person",link:"/past-winners/"},
    {name:"Julie Chen Moonves",shows:"Big Brother",nominations:2,wins:1,type:"person",link:"/past-winners/"},

    // PAGES
    {name:"12th Annual Winners",description:"Winners rolling out April 2026",type:"page",link:"/12th-annual-winners/"},
    {name:"12th Annual Nominees",description:"All 26 categories",type:"page",link:"/12th-annual-nominees-list/"},
    {name:"Past Winners",description:"11 years of ARTAS winners",type:"page",link:"/past-winners/"},
    {name:"Submit Your Show",description:"13th Annual submissions",type:"page",link:"/submit-your-show/"},
    {name:"The Buzz",description:"News and press releases",type:"page",link:"/the-buzz/"},
    {name:"Gallery",description:"Photos from ARTAS ceremonies",type:"page",link:"/gallery/"},
    {name:"Reality Royalty",description:"Hall of Fame winners",type:"page",link:"/reality-royalty/"},
    {name:"Academy of Reality Television",description:"Free membership for TV professionals",type:"page",link:"/reality-academy/"},
    {name:"About Us",description:"History of The ARTAS",type:"page",link:"/about-us/"},
    {name:"Awards Show",description:"12th Annual ARTAS",type:"page",link:"/awards-show/"},
    // NETWORKS
    {name:"ABC",nominations:17,wins:5,years:"1st–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"MTV",nominations:16,wins:8,years:"1st–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"NBC",nominations:14,wins:6,years:"1st–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"FOX",nominations:11,wins:5,years:"1st–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"ID",nominations:11,wins:0,years:"8th–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"TLC",nominations:8,wins:3,years:"7th–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"Hulu",nominations:7,wins:0,years:"8th–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"OWN",nominations:6,wins:1,years:"6th–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"Netflix",nominations:5,wins:1,years:"8th–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"CBS",nominations:3,wins:2,years:"1st–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"Prime Video",nominations:3,wins:0,years:"10th–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"YouTube",nominations:3,wins:1,years:"10th–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"Bravo",nominations:2,wins:3,years:"3rd–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"Discovery",nominations:2,wins:7,years:"1st–8th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"Food Network",nominations:2,wins:1,years:"7th–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"Brandon TV",nominations:2,wins:0,years:"12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"USA",nominations:2,wins:0,years:"11th–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"CW",nominations:2,wins:0,years:"12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"MAX",nominations:2,wins:0,years:"12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"Tubi",nominations:2,wins:0,years:"12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"Paramount+",nominations:1,wins:0,years:"12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"BET",nominations:1,wins:1,years:"6th–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"CBC",nominations:1,wins:1,years:"12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"Comedy Central",nominations:1,wins:0,years:"12th Annual",type:"network",link:"/12th-annual-nominees-list/"},
    {name:"PBS",nominations:1,wins:1,years:"10th–12th Annual",type:"network",link:"/12th-annual-nominees-list/"},

    // PRODUCTION COMPANIES
    {name:"A. Smith & Co. Productions",network:"NBC",nominations:1,wins:1,type:"company",link:"/12th-annual-nominees-list/"},
    {name:"495 Productions",network:"MTV",nominations:1,wins:0,type:"company",link:"/12th-annual-nominees-list/"},
    {name:"FOX Alternative Entertainment",network:"FOX",nominations:1,wins:0,type:"company",link:"/12th-annual-nominees-list/"},
    {name:"Fremantle",network:"Multiple",nominations:1,wins:0,type:"company",link:"/12th-annual-nominees-list/"},
    {name:"Hot Snakes Media",network:"Multiple",nominations:1,wins:0,type:"company",link:"/12th-annual-nominees-list/"},
    {name:"MTV Entertainment Studios",network:"MTV",nominations:1,wins:0,type:"company",link:"/12th-annual-nominees-list/"},
    {name:"Sony Pictures Television",network:"Multiple",nominations:1,wins:0,type:"company",link:"/12th-annual-nominees-list/"},
    {name:"Universal Television Alternative Studio",network:"NBC",nominations:1,wins:0,type:"company",link:"/12th-annual-nominees-list/"},
    {name:"Warner Bros. Unscripted Television",network:"Multiple",nominations:1,wins:0,type:"company",link:"/12th-annual-nominees-list/"},

  ];

  // ─── STYLES ──────────────────────────────────────────────────────────────────

  const CSS = `
    /* Search overlay */
    #artas-search-overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: rgba(8, 8, 10, 0.97);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 80px 20px 40px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.25s ease, visibility 0.25s ease;
      overflow-y: auto;
    }
    #artas-search-overlay.is-open {
      opacity: 1;
      visibility: visible;
    }

    /* Close button */
    #artas-search-close {
      position: fixed;
      top: 20px;
      right: 24px;
      background: none;
      border: none;
      cursor: pointer;
      color: #888;
      padding: 8px;
      line-height: 1;
      transition: color 0.2s;
      z-index: 10000;
    }
    #artas-search-close:hover { color: #fff; }
    #artas-search-close svg { display: block; }

    /* Search input wrapper */
    #artas-search-inner {
      width: 100%;
      max-width: 700px;
    }

    #artas-search-label {
      display: block;
      font-family: inherit;
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 12px;
    }

    #artas-search-input-wrap {
      position: relative;
      display: flex;
      align-items: center;
      border-bottom: 2px solid #c9a84c;
      margin-bottom: 32px;
    }
    #artas-search-input-wrap svg {
      flex-shrink: 0;
      color: #c9a84c;
      margin-right: 12px;
    }
    #artas-search-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      font-size: 1.5rem;
      color: #fff;
      padding: 10px 0;
      font-family: inherit;
    }
    #artas-search-input::placeholder { color: #444; }

    /* Results */
    #artas-search-results {
      width: 100%;
      max-width: 700px;
    }

    .artas-result-group-title {
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #c9a84c;
      margin: 0 0 10px;
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(201,168,76,0.2);
    }

    .artas-result-group { margin-bottom: 28px; }

    .artas-result-card {
      display: block;
      background: #141418;
      border: 1px solid #222;
      border-radius: 6px;
      padding: 14px 16px;
      margin-bottom: 8px;
      text-decoration: none;
      color: #fff;
      transition: border-color 0.2s, background 0.2s, transform 0.15s;
      cursor: pointer;
    }
    .artas-result-card:hover {
      border-color: #c9a84c;
      background: #1a1a1f;
      transform: translateY(-1px);
      text-decoration: none;
      color: #fff;
    }

    .artas-result-top {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 4px;
    }

    .artas-result-name {
      font-size: 0.95rem;
      font-weight: 600;
      color: #fff;
      flex: 1;
    }

    .artas-result-badge {
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 3px;
      flex-shrink: 0;
    }
    .artas-badge-show   { background: rgba(201,168,76,0.15); color: #c9a84c; border: 1px solid rgba(201,168,76,0.3); }
    .artas-badge-person { background: rgba(176,40,90,0.15);  color: #d4527a; border: 1px solid rgba(176,40,90,0.3);  }
    .artas-badge-page   { background: rgba(80,80,120,0.2);   color: #9a9abf; border: 1px solid rgba(80,80,120,0.3);  }
    .artas-badge-post   { background: rgba(80,160,120,0.2);  color: #50c090; border: 1px solid rgba(80,160,120,0.3); }
    .artas-badge-network { background: rgba(100,140,220,0.15); color: #6490DC; border: 1px solid rgba(100,140,220,0.3); }
    .artas-badge-company { background: rgba(180,130,200,0.15); color: #B482C8; border: 1px solid rgba(180,130,200,0.3); }

    .artas-result-meta {
      font-size: 0.8rem;
      color: #888;
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .artas-result-stats {
      color: #c9a84c;
      font-weight: 500;
    }

    .artas-result-network {
      background: rgba(255,255,255,0.06);
      border-radius: 3px;
      padding: 1px 6px;
      font-size: 0.72rem;
      color: #aaa;
    }

    /* Empty state */
    #artas-search-empty {
      text-align: center;
      padding: 48px 0;
      color: #555;
    }
    #artas-search-empty strong {
      display: block;
      color: #888;
      font-size: 1rem;
      margin-bottom: 6px;
    }
    #artas-search-empty span { font-size: 0.85rem; }

    /* Hint shown before typing */
    #artas-search-hint {
      text-align: center;
      padding: 32px 0;
      color: #444;
      font-size: 0.85rem;
    }
  `;

  // ─── BUILD DOM ───────────────────────────────────────────────────────────────

  function buildOverlay() {
    // Inject styles
    const style = document.createElement('style');
    style.id = 'artas-search-styles';
    style.textContent = CSS;
    document.head.appendChild(style);

    // Overlay shell
    const overlay = document.createElement('div');
    overlay.id = 'artas-search-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Site search');

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.id = 'artas-search-close';
    closeBtn.setAttribute('aria-label', 'Close search');
    closeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>`;
    overlay.appendChild(closeBtn);

    // Inner container
    const inner = document.createElement('div');
    inner.id = 'artas-search-inner';

    const label = document.createElement('span');
    label.id = 'artas-search-label';
    label.textContent = 'ARTAS Search';
    inner.appendChild(label);

    // Input wrapper
    const inputWrap = document.createElement('div');
    inputWrap.id = 'artas-search-input-wrap';
    inputWrap.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;

    const input = document.createElement('input');
    input.id = 'artas-search-input';
    input.type = 'text';
    input.placeholder = 'Search shows, people, categories…';
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('spellcheck', 'false');
    inputWrap.appendChild(input);
    inner.appendChild(inputWrap);

    overlay.appendChild(inner);

    // Results container
    const results = document.createElement('div');
    results.id = 'artas-search-results';
    overlay.appendChild(results);

    document.body.appendChild(overlay);

    return { overlay, closeBtn, input, results };
  }

  // ─── SEARCH LOGIC ────────────────────────────────────────────────────────────

  function normalize(str) {
    return str.toLowerCase().replace(/['']/g, "'").replace(/[–—]/g, '-');
  }

  function score(item, query) {
    const q = normalize(query);
    const name = normalize(item.name);
    const extra = item.shows ? normalize(item.shows) : (item.network ? normalize(item.network) : '');

    if (name === q) return 100;
    if (name.startsWith(q)) return 90;
    if (name.includes(q)) return 75;
    if (extra.includes(q)) return 50;

    // word-level matching
    const words = q.split(/\s+/).filter(Boolean);
    if (words.length > 1) {
      const matched = words.filter(w => name.includes(w) || extra.includes(w));
      if (matched.length === words.length) return 65;
      if (matched.length > 0) return 40 + (matched.length / words.length) * 20;
    }

    return 0;
  }

  function search(query) {
    if (!query || query.trim().length < 2) return null;
    const q = query.trim();

    const scored = DATABASE
      .map(item => ({ item, s: score(item, q) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s || (b.item.nominations || 0) - (a.item.nominations || 0));

    const shows   = scored.filter(x => x.item.type === 'show').slice(0, 8).map(x => x.item);
    const people  = scored.filter(x => x.item.type === 'person').slice(0, 6).map(x => x.item);
    const pages   = scored.filter(x => x.item.type === 'page').slice(0, 4).map(x => x.item);

    const networks = scored.filter(x => x.item.type === 'network').slice(0, 5).map(x => x.item);
    const companies = scored.filter(x => x.item.type === 'company').slice(0, 4).map(x => x.item);

    return { shows, people, networks, companies, pages, total: shows.length + people.length + networks.length + companies.length + pages.length };
  }

  // ─── RENDER RESULTS ──────────────────────────────────────────────────────────

  function badgeClass(type) {
    if (type === 'show')   return 'artas-badge-show';
    if (type === 'person') return 'artas-badge-person';
    if (type === 'post')   return 'artas-badge-post';
    if (type === 'network') return 'artas-badge-network';
    if (type === 'company') return 'artas-badge-company';
    return 'artas-badge-page';
  }

  function badgeLabel(type) {
    if (type === 'show')   return 'Show';
    if (type === 'person') return 'Person';
    if (type === 'post')   return 'Blog';
    if (type === 'network') return 'Network';
    if (type === 'company') return 'Production Co.';
    return 'Page';
  }

  function renderCard(item) {
    const a = document.createElement('a');
    a.className = 'artas-result-card';
    a.href = item.link;

    const top = document.createElement('div');
    top.className = 'artas-result-top';

    const nameEl = document.createElement('span');
    nameEl.className = 'artas-result-name';
    nameEl.textContent = item.name;
    top.appendChild(nameEl);

    const badge = document.createElement('span');
    badge.className = `artas-result-badge ${badgeClass(item.type)}`;
    badge.textContent = badgeLabel(item.type);
    top.appendChild(badge);

    a.appendChild(top);

    const meta = document.createElement('div');
    meta.className = 'artas-result-meta';

    if (item.type === 'show') {
      const net = document.createElement('span');
      net.className = 'artas-result-network';
      net.textContent = item.network;
      meta.appendChild(net);

      const stats = document.createElement('span');
      stats.className = 'artas-result-stats';
      stats.textContent = `${item.nominations} nominations · ${item.wins} wins`;
      meta.appendChild(stats);

      const years = document.createElement('span');
      years.textContent = item.years;
      meta.appendChild(years);
    } else if (item.type === 'person') {
      const shows = document.createElement('span');
      shows.textContent = item.shows;
      meta.appendChild(shows);

      const stats = document.createElement('span');
      stats.className = 'artas-result-stats';
      stats.textContent = `${item.nominations} nominations · ${item.wins} wins`;
      meta.appendChild(stats);
    } else if (item.type === 'network' || item.type === 'company') {
      if (item.network) {
        const net = document.createElement('span');
        net.className = 'artas-result-network';
        net.textContent = item.network;
        meta.appendChild(net);
      }
      const stats = document.createElement('span');
      stats.className = 'artas-result-stats';
      stats.textContent = item.nominations + ' nomination' + (item.nominations !== 1 ? 's' : '') + (item.wins ? ' \u00b7 ' + item.wins + ' win' + (item.wins !== 1 ? 's' : '') : '') + (item.years ? ' \u00b7 ' + item.years : '');
      meta.appendChild(stats);
    } else if (item.type === 'post') {
      if (item.date) {
        const dateEl = document.createElement('span');
        dateEl.className = 'artas-result-stats';
        dateEl.textContent = item.date;
        meta.appendChild(dateEl);
      }
      if (item.excerpt) {
        const exc = document.createElement('span');
        exc.textContent = item.excerpt;
        meta.appendChild(exc);
      }
    } else {
      const desc = document.createElement('span');
      desc.textContent = item.description;
      meta.appendChild(desc);
    }

    a.appendChild(meta);
    return a;
  }

  function renderGroup(title, items) {
    const group = document.createElement('div');
    group.className = 'artas-result-group';

    const heading = document.createElement('p');
    heading.className = 'artas-result-group-title';
    heading.textContent = title;
    group.appendChild(heading);

    items.forEach(item => group.appendChild(renderCard(item)));
    return group;
  }

  async function fetchPosts(query) {
    try {
      const host = window.location.origin;
      const url = `${host}/wp-json/wp/v2/posts?search=${encodeURIComponent(query)}&per_page=5&_fields=id,title,excerpt,link,date`;
      const res = await fetch(url);
      if (!res.ok) return [];
      const posts = await res.json();
      return posts.map(p => ({
        name: (p.title && p.title.rendered ? p.title.rendered : '').replace(/<[^>]+>/g, ''),
        excerpt: (p.excerpt && p.excerpt.rendered ? p.excerpt.rendered : '').replace(/<[^>]+>/g, '').replace(/\[&hellip;\]/g, '…').replace(/&[a-z]+;/g, ' ').trim().substring(0, 130),
        link: p.link,
        type: 'post',
        date: p.date ? new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
      }));
    } catch(e) { return []; }
  }

  async function updateResults(results, query) {
    results.innerHTML = '';

    if (!query || query.trim().length < 2) {
      const hint = document.createElement('div');
      hint.id = 'artas-search-hint';
      hint.textContent = 'Type at least 2 characters to search…';
      results.appendChild(hint);
      return;
    }

    // Show loading state while fetching posts
    const loading = document.createElement('div');
    loading.id = 'artas-search-hint';
    loading.textContent = 'Searching…';
    results.appendChild(loading);

    // Run static search and live post search in parallel
    const [data, posts] = await Promise.all([search(query), fetchPosts(query)]);

    results.innerHTML = '';

    const totalStatic = data ? data.total : 0;
    const totalPosts  = posts ? posts.length : 0;

    if (totalStatic === 0 && totalPosts === 0) {
      const empty = document.createElement('div');
      empty.id = 'artas-search-empty';
      empty.innerHTML = `<strong>No results for \"${query}\"</strong><span>Try a show name, person, category, or blog topic</span>`;
      results.appendChild(empty);
      return;
    }

    if (data && data.shows.length)     results.appendChild(renderGroup('Shows', data.shows));
    if (data && data.people.length)    results.appendChild(renderGroup('People', data.people));
    if (data && data.networks.length)  results.appendChild(renderGroup('Networks', data.networks));
    if (data && data.companies.length) results.appendChild(renderGroup('Production Companies', data.companies));
    if (posts && posts.length)         results.appendChild(renderGroup('Blog Posts', posts));
    if (data && data.pages.length)     results.appendChild(renderGroup('Pages', data.pages));
  }

  // ─── OPEN / CLOSE ────────────────────────────────────────────────────────────

  let isOpen = false;
  let overlayEl, inputEl, resultsEl;

  function openSearch() {
    if (!overlayEl) return;
    overlayEl.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    isOpen = true;
    // Small delay so the transition is visible
    setTimeout(() => inputEl.focus(), 50);
  }

  function closeSearch() {
    if (!overlayEl) return;
    overlayEl.classList.remove('is-open');
    document.body.style.overflow = '';
    isOpen = false;
    inputEl.value = '';
    resultsEl.innerHTML = '';
    const hint = document.createElement('div');
    hint.id = 'artas-search-hint';
    hint.textContent = 'Type at least 2 characters to search…';
    resultsEl.appendChild(hint);
  }

  // ─── INIT ────────────────────────────────────────────────────────────────────

  function injectSearchToggle() {
    if (document.getElementById('searchToggle')) return; // Already exists
    const btn = document.createElement('button');
    btn.id = 'searchToggle';
    btn.setAttribute('aria-label', 'Search');
    btn.style.cssText = 'background:none;border:none;cursor:pointer;padding:6px 10px;color:#B0B0B8;display:inline-flex;align-items:center;justify-content:center;';
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';

    // On desktop: inject into the right section of the header nav
    var desktopRight = document.querySelector('.site-header-primary-section-right, .site-header-section-right');
    if (!desktopRight) {
      // Fallback: find the nav and inject after it
      desktopRight = document.querySelector('.ast-builder-grid-row-has-sides .ast-flex.site-header-section-left');
      if (desktopRight) desktopRight = desktopRight.parentElement;
    }
    if (desktopRight) {
      var wrap = document.createElement('div');
      wrap.className = 'ast-builder-layout-element ast-flex site-header-focus-item';
      wrap.style.cssText = 'display:flex;align-items:center;';
      wrap.appendChild(btn);
      desktopRight.appendChild(wrap);
    } else {
      // Last resort: absolute position in header
      var headerBar = document.querySelector('.ast-primary-header-bar');
      if (headerBar) {
        btn.style.cssText += 'position:absolute;right:20px;top:50%;transform:translateY(-50%);z-index:100;';
        headerBar.style.position = 'relative';
        headerBar.appendChild(btn);
      }
    }

    // On mobile: inject BEFORE the hamburger button wrapper
    const btnWrap = document.querySelector('.ast-button-wrap');
    if (btnWrap && btnWrap.parentNode) {
      const mobileBtn = document.createElement('button');
      mobileBtn.id = 'searchToggleMobile';
      mobileBtn.setAttribute('aria-label', 'Search');
      mobileBtn.style.cssText = 'background:none;border:none;cursor:pointer;padding:8px 10px;color:#B0B0B8;display:inline-flex;align-items:center;justify-content:center;z-index:100;position:relative;';
      mobileBtn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" style="pointer-events:none;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';
      // Store reference to open/close functions on window so mobile button can call them
      mobileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        if (window._artasSearch) {
          window._artasSearch.isOpen ? window._artasSearch.close() : window._artasSearch.open();
        }
      });
      btnWrap.parentNode.insertBefore(mobileBtn, btnWrap);
    }
  }

  function init() {
    const { overlay, closeBtn, input, results } = buildOverlay();
    overlayEl = overlay;
    inputEl   = input;
    resultsEl = results;

    injectSearchToggle();

    // Initial hint
    const hint = document.createElement('div');
    hint.id = 'artas-search-hint';
    hint.textContent = 'Type at least 2 characters to search…';
    results.appendChild(hint);

    // Debounced input handler
    let debounceTimer;
    input.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => updateResults(results, this.value), 120);
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) { closeSearch(); return; }
      // Cmd/Ctrl + K opens search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? closeSearch() : openSearch();
      }
    });

    // Close on overlay backdrop click (not on inner content)
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeSearch();
    });

    // Close button
    closeBtn.addEventListener('click', closeSearch);

    // Expose open/close on window for mobile button
    window._artasSearch = {
      open: openSearch,
      close: closeSearch,
      get isOpen() { return isOpen; }
    };

    // Wire up the toggle button injected into the nav
    document.addEventListener('click', function (e) {
      const trigger = e.target.closest('#searchToggle, #searchToggleMobile, .nav-search-toggle');
      if (trigger) {
        e.preventDefault();
        isOpen ? closeSearch() : openSearch();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

/* ARTAS Universal Countdown Handler */
(function(){
  var openDate = new Date('2026-04-01T00:00:00-07:00');
  var closeDate = new Date('2026-07-01T23:59:59-07:00');
  
  // Map of page-specific countdown element IDs
  var countdowns = [
    // Submit Your Show page
    { days: 'asw-cd-days', hours: 'asw-cd-hours', mins: 'asw-cd-mins', secs: 'asw-cd-secs', label: 'asw-countdown-label', wrapper: 'asw-countdown' },
    // Awards Show page
    { days: 'artasShowCdDays', hours: 'artasShowCdHours', mins: 'artasShowCdMins', secs: 'artasShowCdSecs', label: null, wrapper: 'artasShowCountdown' },
    // Homepage
    { days: 'artasHomeCdDays', hours: 'artasHomeCdHours', mins: 'artasHomeCdMins', secs: 'artasHomeCdSecs', label: 'artasHomeCountdownLabel', wrapper: null },
  ];
  
  function updateCountdown() {
    var now = new Date();
    
    countdowns.forEach(function(cd) {
      var dEl = document.getElementById(cd.days);
      var hEl = document.getElementById(cd.hours);
      var mEl = document.getElementById(cd.mins);
      var sEl = document.getElementById(cd.secs);
      
      if (!dEl) return; // This countdown isn't on this page
      
      var target, labelText;
      if (now < openDate) {
        target = openDate;
        labelText = 'Until Submissions Open';
      } else if (now < closeDate) {
        target = closeDate;
        labelText = 'Until Submissions Close';
      } else {
        dEl.textContent = '0';
        hEl.textContent = '0';
        mEl.textContent = '0';
        sEl.textContent = '0';
        if (cd.label) {
          var lEl = document.getElementById(cd.label);
          if (lEl) lEl.textContent = 'Submissions Closed';
        }
        // Replace countdown with "Now Open" message if before close
        if (cd.wrapper && now >= openDate && now < closeDate) {
          var wrapper = document.getElementById(cd.wrapper);
          if (wrapper) {
            wrapper.innerHTML = '<div style="text-align:center;padding:30px;"><span style="font-family:Playfair Display,serif;font-size:2rem;font-weight:700;color:#D4A853;">Submissions Now Open!</span><p style="color:#B0B0B8;margin-top:10px;">Submit your show for the 13th Annual ARTAS</p></div>';
          }
        }
        return;
      }
      
      var diff = target - now;
      dEl.textContent = Math.floor(diff / 864e5);
      hEl.textContent = String(Math.floor((diff % 864e5) / 36e5)).padStart(2, '0');
      mEl.textContent = String(Math.floor((diff % 36e5) / 6e4)).padStart(2, '0');
      sEl.textContent = String(Math.floor((diff % 6e4) / 1e3)).padStart(2, '0');
      
      if (cd.label) {
        var lEl = document.getElementById(cd.label);
        if (lEl) lEl.textContent = labelText;
      }
    });
  }
  
  // Also handle generic countdown elements (class-based)
  function updateGenericCountdowns() {
    var numbers = document.querySelectorAll('[class*="countdown-number"]');
    if (numbers.length === 0) return;
    
    var now = new Date();
    var target = now < openDate ? openDate : closeDate;
    var diff = target - now;
    
    if (diff <= 0) {
      numbers.forEach(function(el) { el.textContent = '0'; });
      return;
    }
    
    var vals = [
      Math.floor(diff / 864e5),
      String(Math.floor((diff % 864e5) / 36e5)).padStart(2, '0'),
      String(Math.floor((diff % 36e5) / 6e4)).padStart(2, '0'),
      String(Math.floor((diff % 6e4) / 1e3)).padStart(2, '0')
    ];
    
    numbers.forEach(function(el, i) {
      if (i < vals.length) el.textContent = vals[i];
    });
  }
  
  function tick() {
    updateCountdown();
    updateGenericCountdowns();
  }
  
  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { tick(); setInterval(tick, 1000); });
  } else {
    tick();
    setInterval(tick, 1000);
  }
})();

/* ARTAS Blog Category Filter */
(function(){
  // Only run on the blog/posts page
  if (!document.body.classList.contains('blog') && !document.body.classList.contains('archive')) return;
  
  var categories = [
    { name: 'All Posts', slug: '', url: '/the-buzz/' },
    { name: 'Reality TV This Week', slug: 'reality-tv-this-week', url: '/category/reality-tv-this-week/' },
    { name: 'Industry Beats', slug: 'industry-beats', url: '/category/industry-beats/' },
    { name: 'Casting Calls', slug: 'casting-calls', url: '/category/casting-calls/' }
  ];
  
  // Determine current category from URL
  var currentSlug = '';
  var path = window.location.pathname;
  categories.forEach(function(cat) {
    if (cat.slug && path.indexOf(cat.slug) > -1) currentSlug = cat.slug;
  });
  
  // Build the filter bar
  var filterBar = document.createElement('div');
  filterBar.id = 'artas-blog-filter';
  filterBar.style.cssText = 'max-width:1200px;margin:0 auto 2rem;padding:1.5rem clamp(1rem,3vw,2rem);display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:center;';
  
  // Add heading
  var heading = document.createElement('span');
  heading.textContent = 'Filter:';
  heading.style.cssText = 'font-family:Inter,sans-serif;font-size:0.72rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#6E6E78;margin-right:8px;';
  filterBar.appendChild(heading);
  
  categories.forEach(function(cat) {
    var btn = document.createElement('a');
    btn.href = cat.url;
    btn.textContent = cat.name;
    var isActive = (cat.slug === currentSlug) || (cat.slug === '' && currentSlug === '');
    btn.style.cssText = 'padding:8px 18px;border-radius:2px;font-family:Inter,sans-serif;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;transition:all 0.2s;' + 
      (isActive ? 'background:#C1897A;color:#FFFFFF;' : 'background:rgba(193,137,122,0.1);color:#B0B0B8;border:1px solid rgba(193,137,122,0.2);');
    btn.addEventListener('mouseenter', function() { if (!isActive) { btn.style.background = 'rgba(193,137,122,0.2)'; btn.style.color = '#F2F2F2'; }});
    btn.addEventListener('mouseleave', function() { if (!isActive) { btn.style.background = 'rgba(193,137,122,0.1)'; btn.style.color = '#B0B0B8'; }});
    filterBar.appendChild(btn);
  });
  
  // Insert at top of content area
  var content = document.querySelector('#primary, #main, .site-main, .ast-container');
  if (content) {
    content.insertBefore(filterBar, content.firstChild);
  }
})();

/* ARTAS Winner Card System: Countdown + Auto-Reveal + Sort + Next-Reveal Banner */
(function(){
  var ci='<span class="aw-countdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>';
  var dayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function formatRevealDate(isoDate){
    var dt=new Date(isoDate);
    return dayNames[dt.getDay()]+', '+monthNames[dt.getMonth()]+' '+dt.getDate();
  }
  function bld(diff,revealDate){
    if(diff<=0)return null;
    var d=Math.floor(diff/864e5),h=Math.floor((diff%864e5)/36e5),m=Math.floor((diff%36e5)/6e4),s=Math.floor((diff%6e4)/1e3);
    var p='';
    if(revealDate){p+='<div class="aw-countdown-date">'+formatRevealDate(revealDate)+' at 9:00 AM PT</div>';}
    p+='<div class="aw-countdown-timer">';
    p+=ci;
    if(d>0){p+='<div class="aw-countdown-unit"><span class="aw-countdown-num">'+d+'</span><span class="aw-countdown-label">day'+(d!==1?'s':'')+'</span></div><span class="aw-countdown-sep">:</span>';}
    p+='<div class="aw-countdown-unit"><span class="aw-countdown-num">'+String(h).padStart(2,'0')+'</span><span class="aw-countdown-label">hrs</span></div><span class="aw-countdown-sep">:</span>';
    p+='<div class="aw-countdown-unit"><span class="aw-countdown-num">'+String(m).padStart(2,'0')+'</span><span class="aw-countdown-label">min</span></div><span class="aw-countdown-sep">:</span>';
    p+='<div class="aw-countdown-unit"><span class="aw-countdown-num">'+String(s).padStart(2,'0')+'</span><span class="aw-countdown-label">sec</span></div>';
    p+='</div>';
    return p;
  }
  function bldBanner(diff){
    if(diff<=0)return null;
    var d=Math.floor(diff/864e5),h=Math.floor((diff%864e5)/36e5),m=Math.floor((diff%36e5)/6e4),s=Math.floor((diff%6e4)/1e3);
    var p='';
    if(d>0){p+='<span class="aw-next-num">'+d+'</span><span class="aw-next-lbl">d</span> ';}
    p+='<span class="aw-next-num">'+String(h).padStart(2,'0')+'</span><span class="aw-next-lbl">h</span> ';
    p+='<span class="aw-next-num">'+String(m).padStart(2,'0')+'</span><span class="aw-next-lbl">m</span> ';
    p+='<span class="aw-next-num">'+String(s).padStart(2,'0')+'</span><span class="aw-next-lbl">s</span>';
    return p;
  }
  /* Reveal a winner card client-side */
  function revealCard(c){
    if(c.classList.contains('announced'))return;
    var winnerName=c.getAttribute('data-winner');
    var winnerNet=c.getAttribute('data-winner-network');
    if(!winnerName)return;
    c.classList.add('announced');
    var nameEl=c.querySelector('.aw-card-name');
    var showEl=c.querySelector('.aw-card-show');
    var tba=c.querySelector('.aw-card-tba');
    var badge=c.querySelector('.aw-card-winner-badge');
    if(nameEl)nameEl.textContent=winnerName;
    if(showEl)showEl.textContent=winnerNet||'';
    if(tba)tba.style.display='none';
    if(badge)badge.style.display='inline-block';
    if(c._cdEl)c._cdEl.style.display='none';
    updateProgress();
    sortCards();
  }
  function updateProgress(){
    var total=document.querySelectorAll('.aw-card').length;
    var ann=document.querySelectorAll('.aw-card.announced').length;
    var pct=total>0?Math.round(ann/total*100):0;
    var countEl=document.getElementById('aw-announced-count');
    var fillEl=document.getElementById('aw-progress-fill');
    var pctEl=document.getElementById('aw-progress-pct');
    if(countEl)countEl.textContent=ann;
    if(fillEl)fillEl.style.width=pct+'%';
    if(pctEl)pctEl.textContent=pct+'%';
  }
  /* Sort cards: 1) announced, 2) scheduled (by date), 3) unscheduled (alpha) */
  function sortCards(){
    var grid=document.getElementById('aw-winners-grid');
    if(!grid)return;
    var cards=Array.from(grid.querySelectorAll('.aw-card'));
    var announced=[],scheduled=[],unscheduled=[];
    cards.forEach(function(c){
      if(c.classList.contains('announced'))announced.push(c);
      else if(c.getAttribute('data-reveal-date'))scheduled.push(c);
      else unscheduled.push(c);
    });
    scheduled.sort(function(a,b){return(a._cdT||0)-(b._cdT||0);});
    unscheduled.sort(function(a,b){
      var aa=a.getAttribute('data-category')||'',bb=b.getAttribute('data-category')||'';
      return aa.localeCompare(bb);
    });
    var sorted=announced.concat(scheduled,unscheduled);
    sorted.forEach(function(c){grid.appendChild(c);});
  }
  /* Next-Reveal Banner */
  function createBanner(){
    var grid=document.getElementById('aw-winners-grid');
    if(!grid)return null;
    var banner=document.createElement('div');
    banner.id='aw-next-reveal-banner';
    banner.style.cssText='max-width:1200px;margin:0 auto 2rem;padding:1.2rem 2rem;background:linear-gradient(135deg,rgba(212,168,83,0.08) 0%,rgba(193,137,122,0.06) 100%);border:1px solid rgba(212,168,83,0.2);border-radius:6px;display:flex;align-items:center;justify-content:center;gap:1.2rem;flex-wrap:wrap;text-align:center;';
    grid.parentNode.insertBefore(banner,grid);
    return banner;
  }
  var bannerEl=null;
  function updateBanner(now){
    var cards=document.querySelectorAll('.aw-card[data-reveal-date]:not(.announced)');
    var next=null,nextT=Infinity;
    cards.forEach(function(c){
      var t=c._cdT||new Date(c.getAttribute('data-reveal-date')).getTime();
      if(t>now&&t<nextT){nextT=t;next=c;}
    });
    if(!next){
      if(bannerEl)bannerEl.style.display='none';
      return;
    }
    if(!bannerEl)bannerEl=createBanner();
    if(!bannerEl)return;
    bannerEl.style.display='flex';
    var cat=next.querySelector('.aw-card-category');
    var catName=cat?cat.textContent:'Next Winner';
    var diff=nextT-now;
    var countdownHtml=bldBanner(diff);
    if(!countdownHtml)countdownHtml='<span style="color:#D4A853;font-weight:700;">Revealing Now</span>';
    bannerEl.innerHTML='<span style="font-family:Inter,-apple-system,sans-serif;font-size:0.65rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#6E6E78;">Next Reveal</span>'+
      '<span style="font-family:Playfair Display,Georgia,serif;font-size:1.05rem;font-weight:700;color:#F2F2F2;">'+catName+'</span>'+
      '<span style="display:flex;align-items:center;gap:4px;font-family:Inter,sans-serif;">'+countdownHtml+'</span>';
  }
  function init(){
    var allCards=document.querySelectorAll('.aw-card[data-reveal-date]');
    if(!allCards.length)return;
    allCards.forEach(function(c){
      if(c.classList.contains('announced'))return;
      var t=new Date(c.getAttribute('data-reveal-date')).getTime();
      c._cdT=t;
      var el=document.createElement('div');el.className='aw-countdown';
      var tba=c.querySelector('.aw-card-tba');
      if(tba){tba.style.display='none';tba.parentNode.insertBefore(el,tba.nextSibling);}
      else{c.appendChild(el);}
      c._cdEl=el;
    });
    /* Initial sort */
    sortCards();
    function tick(){
      var now=Date.now();
      allCards.forEach(function(c){
        if(c.classList.contains('announced')){if(c._cdEl)c._cdEl.style.display='none';return;}
        var diff=c._cdT-now,el=c._cdEl;if(!el)return;
        if(diff<=0){revealCard(c);return;}
        var h=bld(diff,c.getAttribute('data-reveal-date'));if(h)el.innerHTML=h;
      });
      updateBanner(now);
    }
    tick();setInterval(tick,1000);
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}
  else{init();}
})();

/* Fix hamburger menu button — replace thick SVG with clean 3-line SVG */
(function(){
  var cleanHamburger='<svg class="artas-hamburger-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C1897A" stroke-width="2" stroke-linecap="round" style="fill:none!important;stroke:#C1897A!important;"><line x1="3" y1="6" x2="21" y2="6" style="fill:none!important;stroke:#C1897A!important;"/><line x1="3" y1="12" x2="21" y2="12" style="fill:none!important;stroke:#C1897A!important;"/><line x1="3" y1="18" x2="21" y2="18" style="fill:none!important;stroke:#C1897A!important;"/></svg>';
  function fixHamburger(){
    var btn=document.querySelector('button.menu-toggle');
    if(!btn)return;
    btn.style.cssText='background:rgba(193,137,122,0.1)!important;border:1.5px solid #C1897A!important;color:#C1897A!important;border-radius:4px!important;padding:6px 8px!important;box-shadow:none!important;width:auto!important;height:auto!important;';
    /* Replace the hamburger SVG with a clean stroke-based one */
    var menuSvg=btn.querySelector('.ast-menu2-svg');
    if(menuSvg&&!menuSvg.dataset.artasFixed){
      menuSvg.dataset.artasFixed='1';
      var wrapper=menuSvg.parentElement;
      var newSvg=document.createElement('span');
      newSvg.innerHTML=cleanHamburger;
      newSvg.style.cssText='display:inline-flex;align-items:center;';
      newSvg.className=wrapper.className;
      wrapper.style.display='none';
      wrapper.parentElement.insertBefore(newSvg,wrapper);
    }
    /* Also fix close SVG color */
    var closeSvg=btn.querySelector('.ast-close-svg');
    if(closeSvg){
      closeSvg.setAttribute('fill','#C1897A');
      closeSvg.style.fill='#C1897A';
      closeSvg.style.color='#C1897A';
    }
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',fixHamburger);
  } else {
    fixHamburger();
  }
  setTimeout(fixHamburger,300);
  setTimeout(fixHamburger,800);
  setTimeout(fixHamburger,2000);
})();
/* Past Winners Rich Search Dropdown */
(function(){
  function initPWSearch(){
    var input=document.getElementById('pwSearch');
    if(!input||!window.DATABASE)return;
    var wrap=input.closest('.pw-search-wrap');
    if(!wrap)return;
    wrap.style.position='relative';
    var dd=document.createElement('div');
    dd.id='pw-search-dropdown';
    dd.style.cssText='position:absolute;top:100%;left:0;right:0;max-height:400px;overflow-y:auto;background:#0E0E12;border:1px solid #2A2A34;border-top:none;border-radius:0 0 6px 6px;z-index:50;display:none;box-shadow:0 8px 24px rgba(0,0,0,0.4);';
    wrap.appendChild(dd);
    function doSearch(q){
      if(!q||q.length<2){dd.style.display='none';return;}
      var ql=q.toLowerCase();
      var matches=window.DATABASE.filter(function(it){
        var n=(it.name||'').toLowerCase();
        var net=(it.network||'').toLowerCase();
        var sh=(it.shows||'').toLowerCase();
        return n.includes(ql)||net.includes(ql)||sh.includes(ql);
      }).slice(0,8);
      if(!matches.length){dd.style.display='none';return;}
      var h='';
      matches.forEach(function(it){
        var badge=it.type==='show'?'<span style="font-size:0.55rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:2px 6px;border-radius:2px;background:rgba(193,137,122,0.15);color:#C1897A;">Show</span>':it.type==='person'?'<span style="font-size:0.55rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:2px 6px;border-radius:2px;background:rgba(212,168,83,0.15);color:#D4A853;">Person</span>':'';
        var meta='';
        if(it.type==='show')meta='<div style="font-size:0.75rem;color:#6E6E78;margin-top:3px;">'+(it.network||'')+(it.nominations?' &middot; '+it.nominations+' nominations':'')+(it.wins?' &middot; '+it.wins+' wins':'')+(it.years?' &middot; '+it.years:'')+'</div>';
        else if(it.type==='person')meta='<div style="font-size:0.75rem;color:#6E6E78;margin-top:3px;">'+(it.shows||'')+'</div>';
        h+='<a href="'+(it.link||'#')+'" style="display:block;padding:12px 16px;border-bottom:1px solid #1F1F26;text-decoration:none;" onmouseover="this.style.background=\'rgba(193,137,122,0.06)\'" onmouseout="this.style.background=\'transparent\'">'+'<div style="display:flex;align-items:center;gap:8px;"><span style="font-size:0.9rem;font-weight:600;color:#F2F2F2;">'+it.name+'</span>'+badge+'</div>'+meta+'</a>';
      });
      dd.innerHTML=h;
      dd.style.display='block';
    }
    input.addEventListener('input',function(){doSearch(this.value.trim().toLowerCase());});
    input.addEventListener('blur',function(){setTimeout(function(){dd.style.display='none';},200);});
    input.addEventListener('focus',function(){if(this.value.trim().length>=2)doSearch(this.value.trim().toLowerCase());});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initPWSearch);
  else initPWSearch();
})();

/* ARTAS Winners Progress Bar — count .announced cards and update counter */
(function(){
  function updateWinnersProgress(){
    var total = document.querySelectorAll('.aw-card').length;
    if(!total) return;
    var announced = document.querySelectorAll('.aw-card.announced').length;
    var pct = Math.round(announced / total * 100);
    var countEl = document.getElementById('aw-announced-count');
    var fillEl  = document.getElementById('aw-progress-fill');
    var pctEl   = document.getElementById('aw-progress-pct');
    if(countEl) countEl.textContent = announced;
    if(fillEl)  fillEl.style.width  = pct + '%';
    if(pctEl)   pctEl.textContent   = pct + '%';
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', updateWinnersProgress);
  } else {
    updateWinnersProgress();
  }
  // Run again after a short delay in case cards are sorted/moved by other JS
  setTimeout(updateWinnersProgress, 1000);
  setTimeout(updateWinnersProgress, 2500);
})();

/* ARTAS Winners Progress Bar — count .announced cards and update counter */
(function(){
  function updateWinnersProgress(){
    var total = document.querySelectorAll('.aw-card').length;
    if(!total) return;
    var announced = document.querySelectorAll('.aw-card.announced').length;
    var pct = Math.round(announced / total * 100);
    var countEl = document.getElementById('aw-announced-count');
    var fillEl  = document.getElementById('aw-progress-fill');
    var pctEl   = document.getElementById('aw-progress-pct');
    if(countEl) countEl.textContent = announced;
    if(fillEl)  fillEl.style.width  = pct + '%';
    if(pctEl)   pctEl.textContent   = pct + '%';
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', updateWinnersProgress);
  } else {
    updateWinnersProgress();
  }
  // Run again after a short delay in case cards are sorted/moved by other JS
  setTimeout(updateWinnersProgress, 1000);
  setTimeout(updateWinnersProgress, 2500);
})();
