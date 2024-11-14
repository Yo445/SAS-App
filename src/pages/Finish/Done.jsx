import React from 'react'

export default function Done() {
  return (
    <>
        <body class="bg-gray-100 flex flex-col items-center justify-center h-screen w-full dark:bg-gray-300">
            <div class="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-200">
                <h1 class="text-2xl font-semibold text-center mb-6">Thank You! </h1>
                <p class="text-center mb-4">Documents are submitted successfully and are under review within 10 days from the date of the application submission.</p>
                <button class="w-full px-4 py-2 text-lg font-medium text-white bg-[#15305b] rounded-md hover:bg-blue-700">Done</button>
            </div>
        </body>
    </>
  );
}
