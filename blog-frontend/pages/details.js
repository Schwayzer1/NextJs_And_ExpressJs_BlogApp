import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Details = () => {
  const router = useRouter();
  const data = router.query;
  console.log(data, "details");

  return (
    <div className="height">
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <img
              alt="ecommerce"
              className="lg:w-96 w-full object-cover  rounded border-2 border-gray-400 mb-5"
              src={data.image}
            />
            <div className="lg:w-full w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-center">
              <h1 className="text-gray-900 text-6xl title-font font-medium mb-5">
                {data.title}
              </h1>
              <h4 className="text-gray-900 text-2xl title-font font-medium mb-5">
                {data.subTitle}
              </h4>

              <p className="leading-relaxed text-lg">{data.content}</p>

              <div className="flex justify-center items-end mt-24">
                <Link
                  href="/"
                  className=" text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
