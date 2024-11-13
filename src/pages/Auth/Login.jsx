import React from "react";
import { RiFingerprintFill } from "react-icons/ri";
import { IoIosFingerPrint } from "react-icons/io";
import { IoFingerPrintSharp } from "react-icons/io5";

export default function Login() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <IoFingerPrintSharp
              fontSize={"5em"}
              className="mb-2 text-[#15305b]"
            />
            <h1 className="text-2xl xl:text-3xl font-bold">
              Login to UAE PASS
            </h1>

            <div className="w-full flex-1 mt-8">
              <div className="mx-auto ">
                <input
                  placeholder="Emirates ID, email, or phone eg. 971500000000"
                  className="w-full py-5 p-3 rounded-lg font-medium bg-gray-100 border border-gray-200  text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                />
                <button className="mt-5 tracking-wide font-semibold bg-black text-gray-100 w-full py-5 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="text-xl">Login</span>
                </button>
              </div>

              <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
                <a
                  className="pr-3.5 inline-flex items-center text-sm text-gray-600 decoration-2 hover:underline dark:text-gray-500 dark:hover:text-[#15305b]"
                  href="#"
                  target="_blank"
                >
                  Create account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
