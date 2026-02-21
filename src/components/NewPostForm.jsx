import { useState } from "react";
import { useFeed } from "../context/FeedContext";
import { CATEGORIES } from "../data/posts";

export default function NewPostForm() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("General");
  const [open, setOpen] = useState(false);
  const { dispatch } = useFeed();

  const submit = () => {
    if (!text.trim()) return;
    dispatch({
      type: "ADD_POST",
      payload: {
        id: Date.now(), author: "Garrett Walker", handle: "@gwdev904",
        avatar: "G", avatarColor: "#7c6af5", category,
        content: text.trim(), likes: 0, liked: false,
        comments: 0, time: "just now", tags: [category],
      },
    });
    setText("");
    setOpen(false);
  };

  return (
    <div className="new-post">
      <div className="new-post-top" onClick={() => setOpen(true)}>
        <div className="new-post-avatar">G</div>
        <div className="new-post-placeholder">
          {open ? (
            <textarea
              className="post-textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What's on your mind?"
              autoFocus
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <span>What's on your mind?</span>
          )}
        </div>
      </div>
      {open && (
        <div className="post-actions">
          <select
            className="cat-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.filter((c) => c !== "All").map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <div className="post-btns">
            <button className="cancel-btn" onClick={() => { setOpen(false); setText(""); }}>Cancel</button>
            <button className="post-btn" onClick={submit} disabled={!text.trim()}>Post</button>
          </div>
        </div>
      )}
    </div>
  );
}
