import React from 'react'

export default function Request_Service() {
  return (
    <>
      <div class="px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:max-w-screen-xl lg:px-8 mx-auto">
          <section class="mb-10">
              <h1 class="text-5xl font-bold mb-4">Service Name</h1>
              <p class="text-xl font-bold mb-2">
              Welcome user
              </p>
              <p class="text-m mb-4">
              You can monitor your current request here, or start new request
              </p>
          </section>

          <button className="bg-[#15305b] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">New Request</button>

          

        </div>
    </>
  )
}
