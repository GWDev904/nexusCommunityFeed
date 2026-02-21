import { useFeed } from "../context/FeedContext";

export default function PostCard({ post }) {
  const { dispatch } = useFeed();

  return (
    <article className="post-card">
      <div className="post-avatar" style={{ background: post.avatarColor + "22", color: post.avatarColor }}>
        {post.avatar}
      </div>
      <div className="post-body">
        <div className="post-meta">
          <span className="post-author">{post.author}</span>
          <span className="post-handle">{post.handle}</span>
          <span className="post-dot">·</span>
          <span className="post-time">{post.time}</span>
          <span className="post-category">{post.category}</span>
        </div>
        <p className="post-content">{post.content}</p>
        <div className="post-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="post-tag">#{tag}</span>
          ))}
        </div>
        <div className="post-actions">
          <button
            className={`action-btn like-btn ${post.liked ? "liked" : ""}`}
            onClick={() => dispatch({ type: "TOGGLE_LIKE", id: post.id })}
          >
            {post.liked ? "♥" : "♡"} {post.likes}
          </button>
          <button className="action-btn">
            ◎ {post.comments}
          </button>
          <button className="action-btn">
            ⇧ Share
          </button>
        </div>
      </div>
    </article>
  );
}
