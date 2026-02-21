export const CATEGORIES = ["All", "Tech", "Design", "Career", "General"];

export const initialPosts = [
  {
    id: 1, author: "Maya Chen", handle: "@mayabuilds", avatar: "M",
    avatarColor: "#7c6af5", category: "Tech",
    content: "Just shipped a feature using React Context API for the first time instead of prop-drilling five levels deep. The difference is night and day. If you haven't made the switch yet — do it.",
    likes: 42, liked: false, comments: 7,
    time: "2h ago", tags: ["React", "Frontend"]
  },
  {
    id: 2, author: "Jordan Lee", handle: "@jlee_dev", avatar: "J",
    avatarColor: "#4ade80", category: "Career",
    content: "Got my first junior dev offer today after 8 months of self-study. The thing that got me the interview was having 3 deployed projects on GitHub with solid READMEs. Not the 100 LeetCode problems. The projects.",
    likes: 218, liked: false, comments: 34,
    time: "4h ago", tags: ["Career", "Jobs"]
  },
  {
    id: 3, author: "Sam Torres", handle: "@samtorres_ux", avatar: "S",
    avatarColor: "#f472b6", category: "Design",
    content: "Hot take: Most developer portfolios look the same because everyone copies the same tutorial. Your portfolio should show how YOU think — not that you followed someone else's layout.",
    likes: 97, liked: false, comments: 22,
    time: "5h ago", tags: ["Design", "Portfolio"]
  },
  {
    id: 4, author: "Alex Pham", handle: "@alexpham_io", avatar: "A",
    avatarColor: "#fb923c", category: "Tech",
    content: "Tailwind CSS tip: Stop using arbitrary values like w-[347px]. If you're doing that in more than one or two places, just create a CSS variable. Your future self will thank you.",
    likes: 63, liked: false, comments: 11,
    time: "6h ago", tags: ["CSS", "Tailwind"]
  },
  {
    id: 5, author: "Riley Stone", handle: "@rileystone_dev", avatar: "R",
    avatarColor: "#60a5fa", category: "General",
    content: "Reminder that a polished, working to-do app demonstrates more React skill than a half-finished e-commerce clone with 20 broken components. Finish things.",
    likes: 154, liked: false, comments: 18,
    time: "8h ago", tags: ["Advice"]
  },
  {
    id: 6, author: "Dana Kim", handle: "@danakim_builds", avatar: "D",
    avatarColor: "#34d399", category: "Tech",
    content: "useEffect cleanup functions are one of those things nobody teaches you until you have a memory leak in production. Always return a cleanup from your effects when you're setting up subscriptions or timers.",
    likes: 88, liked: false, comments: 9,
    time: "10h ago", tags: ["React", "Hooks"]
  },
];
