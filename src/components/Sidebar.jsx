export default function Sidebar() {
  const links = ["Home", "Explore", "Notifications", "Bookmarks", "Profile"];
  const icons = ["⌂", "◎", "◉", "⊙", "○"];

  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logo-mark">⬡</span>
        <span className="logo-text">Nexus</span>
      </div>
      <nav className="nav">
        {links.map((link, i) => (
          <button key={link} className={`nav-item ${i === 0 ? "active" : ""}`}>
            <span className="nav-icon">{icons[i]}</span>
            {link}
          </button>
        ))}
      </nav>
      <div className="profile-chip">
        <div className="profile-avatar">G</div>
        <div className="profile-info">
          <span className="profile-name">Garrett Walker</span>
          <span className="profile-handle">@gwdev904</span>
        </div>
      </div>
    </aside>
  );
}
