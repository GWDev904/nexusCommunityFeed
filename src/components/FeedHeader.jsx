import { useFeed } from "../context/FeedContext";
import { CATEGORIES } from "../data/posts";

export default function FeedHeader() {
  const { state, dispatch } = useFeed();

  return (
    <div className="feed-header">
      <div className="category-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`cat-tab ${state.filter === cat ? "active" : ""}`}
            onClick={() => dispatch({ type: "SET_FILTER", filter: cat })}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="sort-row">
        {["newest", "top"].map((s) => (
          <button
            key={s}
            className={`sort-btn ${state.sort === s ? "active" : ""}`}
            onClick={() => dispatch({ type: "SET_SORT", sort: s })}
          >
            {s === "newest" ? "⏱ Newest" : "🔥 Top"}
          </button>
        ))}
      </div>
    </div>
  );
}
