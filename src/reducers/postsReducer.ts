import { Post } from "../types/Post";

type AddAction = {
  type: "ADD";
  payload: {
    title: string;
    body: string;
  };
};

type RemoveAction = {
  type: "REMOVE";
  pyload: {
    id: number;
  };
};

type PostAction = AddAction | RemoveAction;

export const postRducer = (posts: Post[], action: PostAction) => {
  switch (action.type) {
    case "ADD":
      return [
        ...posts,
        {
          id: posts.length,
          title: action.payload.title,
          body: action.payload.body,
        },
      ];
    case "REMOVE":
      return posts.filter((p) => p.id !== action.pyload.id);

    default:
      return posts;
  }
};
