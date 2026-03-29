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
    {name:"American Ninja Warrior",network:"NBC",nominations:40,wins:8,years:"2013–2024",type:"show",link:"past-winners.html"},
    {name:"RuPaul's Drag Race",network:"MTV",nominations:35,wins:7,years:"2013–2024",type:"show",link:"past-winners.html"},
    {name:"Hell's Kitchen",network:"FOX",nominations:30,wins:5,years:"2013–2024",type:"show",link:"past-winners.html"},
    {name:"Jersey Shore Family Vacation",network:"MTV",nominations:25,wins:6,years:"2018–2024",type:"show",link:"past-winners.html"},
    {name:"Shark Tank",network:"ABC",nominations:22,wins:3,years:"2013–2024",type:"show",link:"past-winners.html"},
    {name:"The Voice",network:"NBC",nominations:20,wins:4,years:"2013–2023",type:"show",link:"past-winners.html"},
    {name:"Dancing With The Stars",network:"ABC",nominations:18,wins:2,years:"2013–2024",type:"show",link:"past-winners.html"},
    {name:"America's Got Talent",network:"NBC",nominations:18,wins:3,years:"2014–2024",type:"show",link:"past-winners.html"},
    {name:"The Masked Singer",network:"FOX",nominations:15,wins:4,years:"2019–2024",type:"show",link:"past-winners.html"},
    {name:"Vanderpump Rules",network:"Bravo",nominations:14,wins:3,years:"2015–2024",type:"show",link:"past-winners.html"},
    {name:"Deadliest Catch",network:"Discovery",nominations:12,wins:7,years:"2013–2020",type:"show",link:"past-winners.html"},
    {name:"The Challenge",network:"MTV",nominations:12,wins:2,years:"2018–2024",type:"show",link:"past-winners.html"},
    {name:"Survivor",network:"CBS",nominations:12,wins:1,years:"2013–2024",type:"show",link:"past-winners.html"},
    {name:"Celebrity Family Feud",network:"ABC",nominations:10,wins:3,years:"2019–2024",type:"show",link:"past-winners.html"},
    {name:"Big Brother",network:"CBS",nominations:10,wins:2,years:"2013–2024",type:"show",link:"past-winners.html"},
    {name:"The Amazing Race",network:"CBS",nominations:10,wins:2,years:"2013–2024",type:"show",link:"past-winners.html"},
    {name:"90 Day Fiancé",network:"TLC",nominations:10,wins:2,years:"2019–2024",type:"show",link:"past-winners.html"},
    {name:"Sister Wives",network:"TLC",nominations:8,wins:0,years:"2019–2024",type:"show",link:"nominees.html"},
    {name:"The Kardashians",network:"Hulu",nominations:8,wins:0,years:"2013–2024",type:"show",link:"nominees.html"},
    {name:"Welcome to Plathville",network:"TLC",nominations:8,wins:0,years:"2021–2024",type:"show",link:"nominees.html"},
    {name:"Love & Marriage: Huntsville",network:"OWN",nominations:5,wins:1,years:"2022–2024",type:"show",link:"past-winners.html"},
    {name:"The Golden Bachelorette",network:"ABC",nominations:6,wins:2,years:"2024",type:"show",link:"past-winners.html"},
    {name:"Curious Case of Natalia Grace",network:"ID",nominations:7,wins:2,years:"2024",type:"show",link:"past-winners.html"},
    {name:"Ridiculousness",network:"MTV",nominations:6,wins:2,years:"2022–2024",type:"show",link:"past-winners.html"},
    {name:"The Price Is Right At Night",network:"CBS",nominations:5,wins:2,years:"2023–2024",type:"show",link:"past-winners.html"},
    {name:"Evil Lives Here",network:"ID",nominations:6,wins:2,years:"2022–2024",type:"show",link:"past-winners.html"},
    {name:"Jeopardy!",network:"ABC",nominations:4,wins:1,years:"2021–2024",type:"show",link:"past-winners.html"},
    {name:"The Bachelor",network:"ABC",nominations:5,wins:1,years:"2014–2022",type:"show",link:"past-winners.html"},
    {name:"Catfish: The TV Show",network:"MTV",nominations:4,wins:1,years:"2013–2024",type:"show",link:"past-winners.html"},
    {name:"Opportunity Knock$",network:"PBS",nominations:3,wins:2,years:"2023–2024",type:"show",link:"past-winners.html"},
    {name:"Ms. Pat Settles It",network:"BET",nominations:5,wins:1,years:"2024",type:"show",link:"past-winners.html"},
    {name:"Scare Tactics",network:"USA",nominations:2,wins:0,years:"2024",type:"show",link:"nominees.html"},
    {name:"The Traitors",network:"Peacock",nominations:3,wins:0,years:"2024",type:"show",link:"nominees.html"},
    {name:"Duck Dynasty",network:"A&E",nominations:6,wins:3,years:"2013–2015",type:"show",link:"past-winners.html"},
    {name:"Pitbulls & Parolees",network:"Animal Planet",nominations:8,wins:5,years:"2013–2019",type:"show",link:"past-winners.html"},
    {name:"The Great British Baking Show",network:"Netflix",nominations:4,wins:2,years:"2022–2024",type:"show",link:"past-winners.html"},
    {name:"Lego Masters",network:"FOX",nominations:2,wins:1,years:"2022",type:"show",link:"past-winners.html"},
    {name:"Trixie Motel",network:"Discovery+",nominations:2,wins:1,years:"2023",type:"show",link:"past-winners.html"},
    {name:"Quiet on Set",network:"ID",nominations:2,wins:0,years:"2024",type:"show",link:"nominees.html"},
    {name:"Snapped",network:"Oxygen",nominations:3,wins:1,years:"2024",type:"show",link:"past-winners.html"},
    {name:"Below Deck",network:"Bravo",nominations:9,wins:2,years:"2015–2024",type:"show",link:"past-winners.html"},
    {name:"Real Housewives of Atlanta",network:"Bravo",nominations:8,wins:1,years:"2013–2024",type:"show",link:"past-winners.html"},
    {name:"Real Housewives of New Jersey",network:"Bravo",nominations:7,wins:1,years:"2013–2024",type:"show",link:"past-winners.html"},
    {name:"Real Housewives of Beverly Hills",network:"Bravo",nominations:7,wins:1,years:"2013–2024",type:"show",link:"past-winners.html"},
    {name:"MasterChef",network:"FOX",nominations:6,wins:1,years:"2013–2023",type:"show",link:"past-winners.html"},
    {name:"Project Runway",network:"Bravo",nominations:5,wins:1,years:"2013–2022",type:"show",link:"past-winners.html"},
    {name:"Top Chef",network:"Bravo",nominations:5,wins:1,years:"2013–2024",type:"show",link:"past-winners.html"},
    {name:"Love Island USA",network:"Peacock",nominations:4,wins:1,years:"2022–2024",type:"show",link:"past-winners.html"},
    {name:"The Bachelorette",network:"ABC",nominations:4,wins:1,years:"2014–2023",type:"show",link:"past-winners.html"},
    {name:"Dance Moms",network:"Lifetime",nominations:7,wins:3,years:"2013–2019",type:"show",link:"past-winners.html"},
    {name:"Storage Wars",network:"A&E",nominations:5,wins:2,years:"2013–2023",type:"show",link:"past-winners.html"},
    {name:"Pawn Stars",network:"History",nominations:4,wins:1,years:"2013–2023",type:"show",link:"past-winners.html"},
    {name:"Gold Rush",network:"Discovery",nominations:4,wins:1,years:"2013–2023",type:"show",link:"past-winners.html"},
    {name:"My 600-lb Life",network:"TLC",nominations:5,wins:0,years:"2014–2024",type:"show",link:"nominees.html"},

    // PEOPLE
    {name:"RuPaul Charles",shows:"RuPaul's Drag Race",nominations:10,wins:4,type:"person",link:"past-winners.html"},
    {name:"Gordon Ramsay",shows:"Hell's Kitchen",nominations:5,wins:1,type:"person",link:"past-winners.html"},
    {name:"Jeff Probst",shows:"Survivor",nominations:4,wins:2,type:"person",link:"past-winners.html"},
    {name:"Steve Harvey",shows:"Celebrity Family Feud",nominations:4,wins:2,type:"person",link:"past-winners.html"},
    {name:"Wayne Brady",shows:"Let's Make A Deal",nominations:3,wins:2,type:"person",link:"past-winners.html"},
    {name:"Abby Lee Miller",shows:"Dance Moms",nominations:4,wins:3,type:"person",link:"past-winners.html"},
    {name:"Selena Gomez",shows:"Selena + Chef",nominations:2,wins:1,type:"person",link:"reality-royalty.html"},
    {name:"Jennifer Lopez",shows:"World of Dance",nominations:1,wins:1,type:"person",link:"reality-royalty.html"},
    {name:"Derek Hough",shows:"Dancing With The Stars",nominations:1,wins:1,type:"person",link:"reality-royalty.html"},
    {name:"Khloé Kardashian",shows:"Keeping Up With The Kardashians",nominations:1,wins:1,type:"person",link:"reality-royalty.html"},
    {name:"Lisa Vanderpump",shows:"RHOBH, Vanderpump Rules",nominations:2,wins:1,type:"person",link:"reality-royalty.html"},
    {name:"Blake Shelton",shows:"The Voice",nominations:3,wins:2,type:"person",link:"reality-royalty.html"},
    {name:"Leah Remini",shows:"Scientology and the Aftermath",nominations:2,wins:2,type:"person",link:"reality-royalty.html"},
    {name:"Snoop Dogg",shows:"Martha & Snoop's Potluck Dinner Party",nominations:1,wins:1,type:"person",link:"reality-royalty.html"},
    {name:"Tamar Braxton",shows:"Celebrity Big Brother",nominations:1,wins:1,type:"person",link:"reality-royalty.html"},
    {name:"Dr. Sandra Lee",shows:"Dr. Pimple Popper",nominations:2,wins:1,type:"person",link:"reality-royalty.html"},
    {name:"Pauly D",shows:"Jersey Shore Family Vacation",nominations:3,wins:2,type:"person",link:"reality-royalty.html"},
    {name:"Melody Rogers",shows:"Love & Marriage: Huntsville",nominations:2,wins:1,type:"person",link:"reality-royalty.html"},
    {name:"Heather McDonald",shows:"Juicy Scoop, 11th Annual Host",nominations:2,wins:1,type:"person",link:"past-winners.html"},
    {name:"Tiffany 'New York' Pollard",shows:"Flavor of Love, I Love New York",nominations:1,wins:1,type:"person",link:"past-winners.html"},
    {name:"Todd Chrisley",shows:"Chrisley Knows Best",nominations:1,wins:1,type:"person",link:"reality-royalty.html"},
    {name:"Vicki Gunvalson",shows:"RHOC",nominations:1,wins:1,type:"person",link:"reality-royalty.html"},
    {name:"Ryan Seacrest",shows:"American Idol",nominations:2,wins:1,type:"person",link:"past-winners.html"},
    {name:"Betty White",shows:"Off Their Rockers",nominations:2,wins:1,type:"person",link:"past-winners.html"},
    {name:"Nick Cannon",shows:"The Masked Singer",nominations:2,wins:0,type:"person",link:"nominees.html"},
    {name:"Alfonso Ribeiro",shows:"AFV",nominations:2,wins:0,type:"person",link:"nominees.html"},
    {name:"Darcey & Stacey Silva",shows:"Darcey & Stacey",nominations:1,wins:1,type:"person",link:"reality-royalty.html"},
    {name:"Omarosa",shows:"House of Villains",nominations:2,wins:0,type:"person",link:"nominees.html"},
    {name:"Big Ed",shows:"90 Day Fiancé",nominations:2,wins:0,type:"person",link:"nominees.html"},
    {name:"Tom Bergeron",shows:"Dancing With The Stars",nominations:3,wins:2,type:"person",link:"past-winners.html"},
    {name:"Phil Keoghan",shows:"The Amazing Race",nominations:3,wins:1,type:"person",link:"past-winners.html"},
    {name:"Julie Chen Moonves",shows:"Big Brother",nominations:2,wins:1,type:"person",link:"past-winners.html"},

    // PAGES
    {name:"12th Annual Winners",description:"Winners rolling out April 2026",type:"page",link:"winners.html"},
    {name:"12th Annual Nominees",description:"All 26 categories",type:"page",link:"nominees.html"},
    {name:"Past Winners",description:"11 years of ARTAS winners",type:"page",link:"past-winners.html"},
    {name:"Submit Your Show",description:"13th Annual submissions",type:"page",link:"submit.html"},
    {name:"The Buzz",description:"News and press releases",type:"page",link:"the-buzz.html"},
    {name:"Gallery",description:"Photos from ARTAS ceremonies",type:"page",link:"gallery.html"},
    {name:"Reality Royalty",description:"Hall of Fame winners",type:"page",link:"reality-royalty.html"},
    {name:"Academy of Reality Television",description:"Free membership for TV professionals",type:"page",link:"academy.html"},
    {name:"About Us",description:"History of The ARTAS",type:"page",link:"about.html"},
    {name:"Awards Show",description:"12th Annual ARTAS",type:"page",link:"awards-show.html"},
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
