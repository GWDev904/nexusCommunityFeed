import { createContext, useContext, useReducer } from "react";
import { initialPosts } from "../data/posts";

const FeedContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, posts: [action.payload, ...state.posts] };
    case "TOGGLE_LIKE":
      return {
        ...state,
        posts: state.posts.map((p) =>
          p.id === action.id
            ? { ...p, likes: p.liked ? p.likes - 1 : p.likes + 1, liked: !p.liked }
            : p
        ),
      };
    case "SET_FILTER":
      return { ...state, filter: action.filter };
    case "SET_SORT":
      return { ...state, sort: action.sort };
    default:
      return state;
  }
};

export function FeedProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    posts: initialPosts,
    filter: "All",
    sort: "newest",
  });

  return <FeedContext.Provider value={{ state, dispatch }}>{children}</FeedContext.Provider>;
}

export const useFeed = () => useContext(FeedContext);
