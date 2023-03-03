import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

function Register() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <div className="height flex justify-center items-center text-center flex-col">
        <p>Welcome, {session.user.name},you can add new post 😊</p>
        <div className=""></div>
        <Link
          href="/"
          type="button"
          className=" bg-gray-800 text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium mx-5 focus:ring-gray-300 mt-5"
        >
          {" "}
          Go Home{" "}
        </Link>
      </div>
    );
  } else {
    return (
      <div className="">
        <div className=" height flex justify-center items-center my-auto flex-col">
          <h1 className="text-4xl p-4 m-4 ">
            You are not sign in If you want to add a post, please sign in 😊{" "}
          </h1>
          <button
            onClick={() => signIn()}
            type="button"
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 m-4 p-2"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
