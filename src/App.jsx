import { FeedProvider } from "./context/FeedContext";
import Sidebar from "./components/Sidebar";
import FeedHeader from "./components/FeedHeader";
import NewPostForm from "./components/NewPostForm";
import PostCard from "./components/PostCard";
import { useFeed } from "./context/FeedContext";
import { useMemo } from "react";

function FeedContent() {
  const { state } = useFeed();
  const { posts, filter, sort } = state;

  const visible = useMemo(() => {
    let list = filter === "All" ? posts : posts.filter((p) => p.category === filter);
    if (sort === "top") list = [...list].sort((a, b) => b.likes - a.likes);
    return list;
  }, [posts, filter, sort]);

  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <FeedHeader />
        <NewPostForm />
        <div className="feed">
          {visible.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
      <aside className="right-panel">
        <div className="trending-card">
          <h3 className="trending-title">Trending Tags</h3>
          {["#React", "#Frontend", "#Career", "#CSS", "#Portfolio", "#Hooks"].map((tag) => (
            <div key={tag} className="trending-tag">{tag}</div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default function App() {
  return (
    <FeedProvider>
      <FeedContent />
    </FeedProvider>
  );
}
