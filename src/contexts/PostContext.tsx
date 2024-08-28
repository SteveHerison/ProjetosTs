import { createContext, ReactNode, useEffect, useReducer } from "react";
import { Post } from "../types/Post";
import { postRducer } from "../reducers/postsReducer";

const STORAGE_KEY = "postContextContente";
type PostContextType = {
  posts: Post[];
  addPost: (title: string, body: string) => void;
  removePost: (id: number) => void;
};

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(
    postRducer,
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );

  const addPost = (title: string, body: string) => {
    if (title && body === "") return false;
    dispatch({
      type: "ADD",
      payload: { title, body },
    });
  };
  const removePost = (id: number) => {
    dispatch({ type: "REMOVE", pyload: { id } });
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  // setPosts([
  //   ...posts,
  //   {
  //     id: posts.length,
  //     title,
  //     body,
  //   },
  // ]);

  return (
    <PostContext.Provider value={{ posts, addPost, removePost }}>
      {children}
    </PostContext.Provider>
  );
};
