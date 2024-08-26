import { createContext, ReactNode, useState } from "react";
import { Post } from "../types/Post";

type PostContextType = {
  posts: Post[];
  addPost: (title: string, body: string) => void;
};

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (title: string, body: string) => {
    if (title && body === "") return false;
    setPosts([
      ...posts,
      {
        id: posts.length,
        title,
        body,
      },
    ]);
  };
  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};
