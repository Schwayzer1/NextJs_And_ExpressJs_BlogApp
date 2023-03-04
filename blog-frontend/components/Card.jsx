import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Card = ({ data, setData }) => {
  console.log(data, "CARD");
  const { data: session } = useSession();

  const handleDelete = () => {};

  return (
    <>
      {data?.map((item) => {
        return (
          <article
            id={item.id}
            className="shadow-md max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer m-5 border-4"
          >
            <div className="overflow-hidden" bis_skin_checked={1}>
              <img className="max-h-60 p-5 max-w-sm " src={item.image} alt="" />
            </div>
            <div className="p-7 my-auto pb-12 " bis_skin_checked={1}>
              <h1 className="text-4xl font-semibold text-gray-700">
                {item.title}
              </h1>
              <h6 className="text-xl font-semibold text-gray-700">
                {item.subTitle}
              </h6>
              <p className="text-xl font-light leading-relaxed text-gray-400 mt-5">
                {item.content}
              </p>
            </div>
            {session ? (
              <div className="flex justify-center items-end m-4">
                <button
                  onClick={handleDelete}
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full my-auto"
                >
                  Delete Post
                </button>
              </div>
            ) : null}
          </article>
        );
      })}
    </>
  );
};

export default Card;
