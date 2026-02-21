# ⬡ Nexus — Community Feed

A responsive community feed app built with React and Context API. Create posts, like content, filter by category, and sort by newest or top — all managed through global state without prop drilling.

**[🚀 Live Demo](https://nexus-community-feed.vercel.app/)** &nbsp;|&nbsp; Built by [Garrett Walker](https://github.com/GWDev904)

---

## Features

- ✍️ **Create posts** with category tagging
- ♥ **Like / unlike** posts with live count updates
- 🗂️ **Filter by category** — Tech, Design, Career, General
- 🔥 **Sort by** Newest or Top (most liked)
- 📱 Responsive layout — sidebar collapses on mobile
- ✨ Smooth fade-up animations on new posts

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Context API + useReducer | Global state management |
| useMemo | Optimized filtering & sorting |
| CSS Custom Properties | Design system & theming |
| Vite | Build tooling |

## Getting Started

```bash
git clone https://github.com/GWDev904/nexus-community-feed.git
cd nexus-community-feed
npm install
npm run dev
```

## Key React Concepts Demonstrated

- **Context API** — global state shared across the component tree without prop drilling
- **useReducer** — predictable state transitions with action/reducer pattern (mirrors Redux)
- **useMemo** — derived state (filtered + sorted posts) only recomputed when dependencies change
- **Component composition** — layout assembled from focused, single-responsibility components
- **Controlled forms** — textarea and select inputs driven entirely by React state
- **Conditional rendering** — post form expands/collapses based on interaction state
- **List rendering** — dynamic post feed with stable keys and entry animations

## Architecture

```
src/
├── App.jsx                       # Root — wires Provider to layout
├── index.css                     # Full design system
├── context/
│   └── FeedContext.jsx           # Global state: posts, filter, sort
├── data/
│   └── posts.js                  # Mock posts & categories
└── components/
    ├── Sidebar.jsx               # Nav + profile chip
    ├── FeedHeader.jsx            # Category tabs + sort controls
    ├── NewPostForm.jsx           # Expandable post composer
    └── PostCard.jsx              # Individual post with like/share actions
```

## State Management Pattern

This app uses **Context API + useReducer** as a lightweight alternative to Redux — the same pattern, lower overhead. All state lives in `FeedContext`, dispatched via named actions:

```js
dispatch({ type: "TOGGLE_LIKE", id: post.id })
dispatch({ type: "SET_FILTER", filter: "Tech" })
dispatch({ type: "ADD_POST", payload: newPost })
```

---

*Part of a 3-project React portfolio. See also: [Focus Task Manager](https://focus-task-manager.vercel.app/) · [Ledger Finance Dashboard](https://ledger-finance-dashboard.vercel.app/)*
