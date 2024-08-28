import { useEffect, useState } from "react";

import Alert from "../Alert";
import { usePosts } from "../../hooks/usePosts";

interface PostsProps {
  handleAbrir: () => void;
}

const Posts: React.FC<PostsProps> = ({ handleAbrir }) => {
  const [alertDelet, setAlertDelet] = useState(false);
  const postCtx = usePosts();

  const handleRemove = (id: number) => {
    postCtx?.removePost(id);
    setAlertDelet(true);
  };

  useEffect(() => {
    if (alertDelet) {
      const timer = setTimeout(() => {
        setAlertDelet(false);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [alertDelet]);

  return (
    <div className="w-full h-full relative">
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
        <div className="w-full grid grid-cols-1 md:col-auto gap-4 p-3 overflow-y-auto ">
          {postCtx?.posts.map(({ id, title, body }) => (
            <div
              key={id}
              className="relative pt-4 pb-1 px-2 bg-gray-100 text-black rounded-md border flex flex-col justify-between "
            >
              <div className="flex flex-col  text-ellipsis overflow-hidden gap-2">
                <h2 className="text-xl font-bold text-ellipsis overflow-hidden px-1">
                  {title}
                </h2>
                <p className="break-words bg-yellow-50 rounded-xl p-2">
                  <span className="border-b pb-1 border-zinc-600/20 ">
                    {body}
                  </span>
                </p>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => handleRemove(id)}
                  className="bg-red-300 rounded-full p-1 w-20 text-red-600 "
                >
                  Delet
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {alertDelet && <Alert />}
    </div>
  );
};

export default Posts;
