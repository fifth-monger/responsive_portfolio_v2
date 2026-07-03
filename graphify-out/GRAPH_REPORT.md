# Graph Report - /Users/Victoria/Desktop/Projects/responsive_portfolio_v2  (2026-07-03)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 35 nodes · 39 edges · 10 communities (4 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `abe26fbd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_package.json|package.json]]
- [[_COMMUNITY_App.jsx|App.jsx]]
- [[_COMMUNITY_devDependencies|devDependencies]]
- [[_COMMUNITY_scripts|scripts]]
- [[_COMMUNITY_App|App]]
- [[_COMMUNITY_Nav.jsx|Nav.jsx]]
- [[_COMMUNITY_Contact.jsx|Contact.jsx]]
- [[_COMMUNITY_Home.jsx|Home.jsx]]
- [[_COMMUNITY_Work.jsx|Work.jsx]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 4 edges
2. `App()` - 2 edges
3. `Footer()` - 2 edges
4. `Nav()` - 2 edges
5. `About()` - 2 edges
6. `Contact()` - 2 edges
7. `Home()` - 2 edges
8. `Work()` - 2 edges
9. `private` - 1 edges
10. `dev` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 6 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.22
Nodes (8): dependencies, react, react-dom, react-router-dom, name, private, type, version

### Community 2 - "devDependencies"
Cohesion: 0.40
Nodes (5): devDependencies, @types/react, @types/react-dom, vite, @vitejs/plugin-react

### Community 3 - "scripts"
Cohesion: 0.50
Nodes (4): scripts, build, dev, preview

## Knowledge Gaps
- **14 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._