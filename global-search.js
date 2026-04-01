/**
 * ARTAS Global Search
 * Injects a search overlay into every page via a single JS file.
 * No external dependencies, no stylesheet modifications needed.
 */
(function () {
  'use strict';

  // ─── DATABASE ────────────────────────────────────────────────────────────────

  const DATABASE = [
    // SHOWS
    {name:"American Ninja Warrior",network:"NBC",nominations:40,wins:8,years:"2013–2024",type:"show",link:"/past-winners/"},
    {name:"RuPaul's Drag Race",network:"MTV",nominations:35,wins:7,years:"2013–2024",type:"show",link:"/past-winners/"},
    {name:"Hell's Kitchen",network:"FOX",nominations:30,wins:5,years:"2013–2024",type:"show",link:"/past-winners/"},
    {name:"Jersey Shore Family Vacation",network:"MTV",nominations:25,wins:6,years:"2018–2024",type:"show",link:"/past-winners/"},
    {name:"Shark Tank",network:"ABC",nominations:22,wins:3,years:"2013–2024",type:"show",link:"/past-winners/"},
    {name:"The Voice",network:"NBC",nominations:20,wins:4,years:"2013–2023",type:"show",link:"/past-winners/"},
    {name:"Dancing With The Stars",network:"ABC",nominations:18,wins:2,years:"2013–2024",type:"show",link:"/past-winners/"},
    {name:"America's Got Talent",network:"NBC",nominations:18,wins:3,years:"2014–2024",type:"show",link:"/past-winners/"},
    {name:"The Masked Singer",network:"FOX",nominations:15,wins:4,years:"2019–2024",type:"show",link:"/past-winners/"},
    {name:"Vanderpump Rules",network:"Bravo",nominations:14,wins:3,years:"2015–2024",type:"show",link:"/past-winners/"},
    {name:"Deadliest Catch",network:"Discovery",nominations:12,wins:7,years:"2013–2020",type:"show",link:"/past-winners/"},
    {name:"The Challenge",network:"MTV",nominations:12,wins:2,years:"2018–2024",type:"show",link:"/past-winners/"},
    {name:"Survivor",network:"CBS",nominations:12,wins:1,years:"2013–2024",type:"show",link:"/past-winners/"},
    {name:"Celebrity Family Feud",network:"ABC",nominations:10,wins:3,years:"2019–2024",type:"show",link:"/past-winners/"},
    {name:"Big Brother",network:"CBS",nominations:10,wins:2,years:"2013–2024",type:"show",link:"/past-winners/"},
    {name:"The Amazing Race",network:"CBS",nominations:10,wins:2,years:"2013–2024",type:"show",link:"/past-winners/"},
    {name:"90 Day Fiancé",network:"TLC",nominations:10,wins:2,years:"2019–2024",type:"show",link:"/past-winners/"},
    {name:"Sister Wives",network:"TLC",nominations:8,wins:0,years:"2019–2024",type:"show",link:"/12th-annual-nominees-list/"},
    {name:"The Kardashians",network:"Hulu",nominations:8,wins:0,years:"2013–2024",type:"show",link:"/12th-annual-nominees-list/"},
    {name:"Welcome to Plathville",network:"TLC",nominations:8,wins:0,years:"2021–2024",type:"show",link:"/12th-annual-nominees-list/"},
    {name:"Love & Marriage: Huntsville",network:"OWN",nominations:5,wins:1,years:"2022–2024",type:"show",link:"/past-winners/"},
    {name:"The Golden Bachelorette",network:"ABC",nominations:6,wins:2,years:"2024",type:"show",link:"/past-winners/"},
    {name:"Curious Case of Natalia Grace",network:"ID",nominations:7,wins:2,years:"2024",type:"show",link:"/past-winners/"},
    {name:"Ridiculousness",network:"MTV",nominations:6,wins:2,years:"2022–2024",type:"show",link:"/past-winners/"},
    {name:"The Price Is Right At Night",network:"CBS",nominations:5,wins:2,years:"2023–2024",type:"show",link:"/past-winners/"},
    {name:"Evil Lives Here",network:"ID",nominations:6,wins:2,years:"2022–2024",type:"show",link:"/past-winners/"},
    {name:"Jeopardy!",network:"ABC",nominations:4,wins:1,years:"2021–2024",type:"show",link:"/past-winners/"},
    {name:"The Bachelor",network:"ABC",nominations:5,wins:1,years:"2014–2022",type:"show",link:"/past-winners/"},
    {name:"Catfish: The TV Show",network:"MTV",nominations:4,wins:1,years:"2013–2024",type:"show",link:"/past-winners/"},
    {name:"Opportunity Knock$",network:"PBS",nominations:3,wins:2,years:"2023–2024",type:"show",link:"/past-winners/"},
    {name:"Ms. Pat Settles It",network:"BET",nominations:5,wins:1,years:"2024",type:"show",link:"/past-winners/"},
    {name:"Scare Tactics",network:"USA",nominations:2,wins:0,years:"2024",type:"show",link:"/12th-annual-nominees-list/"},
    {name:"The Traitors",network:"Peacock",nominations:3,wins:0,years:"2024",type:"show",link:"/12th-annual-nominees-list/"},
    {name:"Duck Dynasty",network:"A&E",nominations:6,wins:3,years:"2013–2015",type:"show",link:"/past-winners/"},
    {name:"Pitbulls & Parolees",network:"Animal Planet",nominations:8,wins:5,years:"2013–2019",type:"show",link:"/past-winners/"},
    {name:"The Great British Baking Show",network:"Netflix",nominations:4,wins:2,years:"2022–2024",type:"show",link:"/past-winners/"},
    {name:"Lego Masters",network:"FOX",nominations:2,wins:1,years:"2022",type:"show",link:"/past-winners/"},
    {name:"Trixie Motel",network:"Discovery+",nominations:2,wins:1,years:"2023",type:"show",link:"/past-winners/"},
    {name:"Quiet on Set",network:"ID",nominations:2,wins:0,years:"2024",type:"show",link:"/12th-annual-nominees-list/"},
    {name:"Snapped",network:"Oxygen",nominations:3,wins:1,years:"2024",type:"show",link:"/past-winners/"},
    {name:"Below Deck",network:"Bravo",nominations:9,wins:2,years:"2015–2024",type:"show",link:"/past-winners/"},
    {name:"Real Housewives of Atlanta",network:"Bravo",nominations:8,wins:1,years:"2013–2024",type:"show",link:"/past-winners/"},
    {name:"Real Housewives of New Jersey",network:"Bravo",nominations:7,wins:1,years:"2013–2024",type:"show",link:"/past-winners/"},
    {name:"Real Housewives of Beverly Hills",network:"Bravo",nominations:7,wins:1,years:"2013–2024",type:"show",link:"/past-winners/"},
    {name:"MasterChef",network:"FOX",nominations:6,wins:1,years:"2013–2023",type:"show",link:"/past-winners/"},
    {name:"Project Runway",network:"Bravo",nominations:5,wins:1,years:"2013–2022",type:"show",link:"/past-winners/"},
    {name:"Top Chef",network:"Bravo",nominations:5,wins:1,years:"2013–2024",type:"show",link:"/past-winners/"},
    {name:"Love Island USA",network:"Peacock",nominations:4,wins:1,years:"2022–2024",type:"show",link:"/past-winners/"},
    {name:"The Bachelorette",network:"ABC",nominations:4,wins:1,years:"2014–2023",type:"show",link:"/past-winners/"},
    {name:"Dance Moms",network:"Lifetime",nominations:7,wins:3,years:"2013–2019",type:"show",link:"/past-winners/"},
    {name:"Storage Wars",network:"A&E",nominations:5,wins:2,years:"2013–2023",type:"show",link:"/past-winners/"},
    {name:"Pawn Stars",network:"History",nominations:4,wins:1,years:"2013–2023",type:"show",link:"/past-winners/"},
    {name:"Gold Rush",network:"Discovery",nominations:4,wins:1,years:"2013–2023",type:"show",link:"/past-winners/"},
    {name:"My 600-lb Life",network:"TLC",nominations:5,wins:0,years:"2014–2024",type:"show",link:"/12th-annual-nominees-list/"},

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

    return { shows, people, pages, total: shows.length + people.length + pages.length };
  }

  // ─── RENDER RESULTS ──────────────────────────────────────────────────────────

  function badgeClass(type) {
    return type === 'show' ? 'artas-badge-show' : type === 'person' ? 'artas-badge-person' : 'artas-badge-page';
  }

  function badgeLabel(type) {
    return type === 'show' ? 'Show' : type === 'person' ? 'Person' : 'Page';
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

  function updateResults(results, query) {
    results.innerHTML = '';

    if (!query || query.trim().length < 2) {
      const hint = document.createElement('div');
      hint.id = 'artas-search-hint';
      hint.textContent = 'Type at least 2 characters to search…';
      results.appendChild(hint);
      return;
    }

    const data = search(query);

    if (!data || data.total === 0) {
      const empty = document.createElement('div');
      empty.id = 'artas-search-empty';
      empty.innerHTML = `<strong>No results for "${query}"</strong><span>Try a show name, person, or network</span>`;
      results.appendChild(empty);
      return;
    }

    if (data.shows.length)  results.appendChild(renderGroup('Shows', data.shows));
    if (data.people.length) results.appendChild(renderGroup('People', data.people));
    if (data.pages.length)  results.appendChild(renderGroup('Pages', data.pages));
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

  function init() {
    const { overlay, closeBtn, input, results } = buildOverlay();
    overlayEl = overlay;
    inputEl   = input;
    resultsEl = results;

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

    // Wire up the toggle button injected into the nav
    document.addEventListener('click', function (e) {
      const trigger = e.target.closest('#searchToggle, .nav-search-toggle');
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

/* ARTAS Side Photos - Scroll with page, different per page */
(function(){
  var photos = ["https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/JoJo-Siwa-scaled.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/Omorosa-scaled.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/Nev-Schulman-scaled.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/Heather-McDonald-Host.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/Kristen-Doute-Vanderpump-Rules.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/Ariana-and-Scheana-Vanderpump-Rules.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/AJ-McClean-and-Howie-Backstreet-Boys.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/Abby-Lee-Miller-on-RC.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/Drag-Queens-RuPauls-Drag-Race.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/Jag-Bains-Big-Brother.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/Ridiculousness-scaled.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/The-Challenge-Big-Brother-ARTAS-scaled.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/Salina-Estitties-scaled.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/Brittany-Martinez.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/Abi-Maria-Gomes-Survivor.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2024/11/Big-Ed-1.png", "https://www.realitytelevisionawards.com/wp-content/uploads/2024/11/Chelsea-Lazkani.png", "https://www.realitytelevisionawards.com/wp-content/uploads/2024/11/Gleb-Savchenko-1.png", "https://www.realitytelevisionawards.com/wp-content/uploads/2024/11/Chandler-Kinney-1.png", "https://www.realitytelevisionawards.com/wp-content/uploads/2024/11/Vance-Walker.png", "https://www.realitytelevisionawards.com/wp-content/uploads/2026/03/JIMBO-scaled.webp", "https://www.realitytelevisionawards.com/wp-content/uploads/2024/11/Dr.-Sandra-Lee-1.png", "https://www.realitytelevisionawards.com/wp-content/uploads/2024/11/Tamra-Judge.png", "https://www.realitytelevisionawards.com/wp-content/uploads/2024/11/Kendra-Wilkinson.png", "https://www.realitytelevisionawards.com/wp-content/uploads/2024/11/Omarosa.png", "https://www.realitytelevisionawards.com/wp-content/uploads/2024/11/Heather-McDonald.png", "https://www.realitytelevisionawards.com/wp-content/uploads/2024/11/Nev-Schulman.png", "https://www.realitytelevisionawards.com/wp-content/uploads/2024/11/JoJo-Siwa.png"];
  if(document.querySelector('.artas-gallery-wrap'))return;if(document.body.classList.contains('home')||document.body.classList.contains('page-id-7')||document.querySelector('.artas-home-wrap'))return;
  var seed=0;var path=window.location.pathname;
  for(var i=0;i<path.length;i++)seed+=path.charCodeAt(i);
  function sr(){seed=(seed*9301+49297)%233280;return seed/233280;}
  var s=photos.slice();
  for(var i=s.length-1;i>0;i--){var j=Math.floor(sr()*(i+1));var t=s[i];s[i]=s[j];s[j]=t;}
  var picked=s.slice(0,5+Math.floor(sr()*3));
  
  function addPhotos(){
    var pageH=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
    var startY=0;
    var hero=document.querySelector('.artas-home-hero,.aw-hero,.page-hero,[class*="-hero"]');
    if(hero)startY=hero.getBoundingClientRect().height+window.scrollY;
    else startY=400;
    
    var spacing=(pageH-startY)/(picked.length+1);
    if(spacing<400)spacing=400;
    
    picked.forEach(function(url,i){
      var img=document.createElement('img');
      img.src=url;img.alt='ARTAS';img.loading='lazy';
      var isLeft=i%2===0;
      var yPos=startY+100+(i*spacing);
      img.style.cssText='position:absolute;'+
        (isLeft?'left:15px;':'right:15px;')+
        'top:'+yPos+'px;'+
        'width:140px;max-height:200px;object-fit:cover;border-radius:8px;'+
        'opacity:0.5;filter:grayscale(15%) brightness(0.8);'+
        'pointer-events:none;z-index:0;'+
        'border:1px solid rgba(193,137,122,0.12);'+
        'box-shadow:0 4px 20px rgba(0,0,0,0.4);';
      document.body.appendChild(img);
    });
  }
  
  document.body.style.position='relative';
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){setTimeout(addPhotos,500);});
  }else{setTimeout(addPhotos,500);}
  
  var mq=document.createElement('style');
  mq.textContent='@media(max-width:1024px){img[style*="position:absolute"][alt="ARTAS"],img[alt="ARTAS"][style*="left:"],img[alt="ARTAS"][style*="right:"]{display:none !important;visibility:hidden !important;width:0 !important;height:0 !important;overflow:hidden !important}}';
  document.head.appendChild(mq);
})();

/* ARTAS Winner Card Countdown Timers */
(function(){
  var ci='<span class="aw-countdown-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>';
  function bld(diff){
    if(diff<=0)return null;
    var d=Math.floor(diff/864e5),h=Math.floor((diff%864e5)/36e5),m=Math.floor((diff%36e5)/6e4),s=Math.floor((diff%6e4)/1e3);
    var p=ci;
    if(d>0){p+='<div class="aw-countdown-unit"><span class="aw-countdown-num">'+d+'</span><span class="aw-countdown-label">day'+(d!==1?'s':'')+'</span></div><span class="aw-countdown-sep">:</span>';}
    p+='<div class="aw-countdown-unit"><span class="aw-countdown-num">'+String(h).padStart(2,'0')+'</span><span class="aw-countdown-label">hrs</span></div><span class="aw-countdown-sep">:</span>';
    p+='<div class="aw-countdown-unit"><span class="aw-countdown-num">'+String(m).padStart(2,'0')+'</span><span class="aw-countdown-label">min</span></div><span class="aw-countdown-sep">:</span>';
    p+='<div class="aw-countdown-unit"><span class="aw-countdown-num">'+String(s).padStart(2,'0')+'</span><span class="aw-countdown-label">sec</span></div>';
    return p;
  }
  function init(){
    var cards=document.querySelectorAll('.aw-card[data-reveal-date]:not(.announced)');
    if(!cards.length)return;
    cards.forEach(function(c){
      var t=new Date(c.getAttribute('data-reveal-date')).getTime();
      var el=document.createElement('div');el.className='aw-countdown';
      var tba=c.querySelector('.aw-card-tba');
      if(tba){tba.style.display='none';tba.parentNode.insertBefore(el,tba.nextSibling);}
      else{c.appendChild(el);}
      c._cdEl=el;c._cdT=t;
    });
    function tick(){
      var now=Date.now();
      cards.forEach(function(c){
        if(c.classList.contains('announced')){if(c._cdEl)c._cdEl.style.display='none';return;}
        var diff=c._cdT-now,el=c._cdEl;if(!el)return;
        if(diff<=0){el.innerHTML=ci+'<span style="font-size:0.7rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#D4A853;">Revealing Soon\u2026</span>';return;}
        var h=bld(diff);if(h)el.innerHTML=h;
      });
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