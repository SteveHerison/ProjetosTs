import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export const usePosts = () => {
  return useContext(PostContext);
};
