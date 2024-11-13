import React from "react";

export default function Signup() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <div className="text-black">
          <h1 className="text-4xl font-bold">Create new UAE PASS account</h1>
        </div>
        <div className="mt-8">
          {/* add QR code here */}
          <p className="mt-2 text-gray-400 text-sm">
            We'll get back to you as soon as possible!
          </p>
          <div className="mt-4 text-black-500 text-m">
            <div
              className=""
            >
              On the initial start-up screen, tap Sign Up button to create new account
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
