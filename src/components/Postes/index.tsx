import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";

interface PostsProps {
  handleAbrir: () => void;
}

const Posts: React.FC<PostsProps> = ({ handleAbrir }) => {
  const postCtx = useContext(PostContext);

  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-between items-center p-2">
        <p>Division</p>
        <h1 className="text-2xl ">titulo</h1>
        <button
          className="bg-zinc-600 px-3 py-2 rounded-xl"
          onClick={handleAbrir}
        >
          Criar
        </button>
      </div>
      <div className=" justify-center items-center flex flex-col h-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 p-3 overflow-y-auto ">
          {postCtx?.posts.map(({ id, title, body }) => (
            <div
              key={id}
              className="p-4 bg-gray-100 text-black rounded-md border"
            >
              <h2 className="text-xl font-bold text-ellipsis overflow-hidden">
                {title}
              </h2>
              <p className="text-ellipsis overflow-hidden">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
