#!/usr/bin/env python3
"""
Patch all ARTAS HTML files (except 200.html) to add:
1. global-search.js script tag before </body>
2. Search toggle button before nav-mobile-toggle button
3. nav-search-toggle CSS after nav-mobile-toggle CSS definition
"""

import os
import re

HTML_DIR = '/home/user/workspace/artas-test'
SKIP_FILES = {'200.html'}

SCRIPT_TAG = '<script src="global-search.js"></script>'

SEARCH_BUTTON = (
    '<button class="nav-search-toggle" id="searchToggle" aria-label="Search">'
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">'
    '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></button>'
)

NAV_SEARCH_CSS = (
    '.nav-search-toggle { background: none; border: none; cursor: pointer; '
    'padding: 8px; color: var(--text-secondary); transition: color 0.2s; margin-left: 0.5rem; }\n'
    '.nav-search-toggle:hover { color: var(--rose); }'
)

def patch_file(filepath):
    filename = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    changes = []

    # 1. Add script tag before </body> if not already present
    if SCRIPT_TAG not in content:
        content = content.replace('</body>', f'{SCRIPT_TAG}\n</body>', 1)
        changes.append('Added script tag')
    else:
        changes.append('Script tag already present')

    # 2. Add search button before nav-mobile-toggle button
    # The button starts with <button class="nav-mobile-toggle"
    # We need to insert SEARCH_BUTTON immediately before it.
    # Use regex to find first occurrence of the button tag
    mobile_toggle_pattern = r'(<button\s[^>]*class="nav-mobile-toggle"[^>]*>)'
    match = re.search(mobile_toggle_pattern, content)
    if match and 'nav-search-toggle' not in content:
        insert_pos = match.start()
        content = content[:insert_pos] + SEARCH_BUTTON + '\n  ' + content[insert_pos:]
        changes.append('Added search button')
    elif 'nav-search-toggle' in content:
        changes.append('Search button already present')
    else:
        changes.append('WARNING: nav-mobile-toggle not found!')

    # 3. Add nav-search-toggle CSS after nav-mobile-toggle CSS
    # Find the line: .nav-mobile-toggle span { ... }
    # and insert our CSS after it.
    # The pattern: .nav-mobile-toggle span { ... }
    css_anchor_pattern = r'(\.nav-mobile-toggle\s+span\s*\{[^}]+\})'
    css_match = re.search(css_anchor_pattern, content)
    if css_match and 'nav-search-toggle' not in content[:css_match.end() + 300]:
        insert_pos = css_match.end()
        content = content[:insert_pos] + '\n' + NAV_SEARCH_CSS + content[insert_pos:]
        changes.append('Added nav-search-toggle CSS')
    elif 'nav-search-toggle' in content:
        changes.append('nav-search-toggle CSS already present')
    else:
        changes.append('WARNING: CSS anchor not found!')

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'[PATCHED] {filename}: {", ".join(changes)}')
    else:
        print(f'[SKIPPED] {filename}: no changes needed')

def main():
    html_files = [
        f for f in os.listdir(HTML_DIR)
        if f.endswith('.html') and f not in SKIP_FILES
    ]
    html_files.sort()

    print(f'Processing {len(html_files)} HTML files (skipping: {SKIP_FILES})\n')
    for fname in html_files:
        patch_file(os.path.join(HTML_DIR, fname))

    print('\nDone.')

if __name__ == '__main__':
    main()
