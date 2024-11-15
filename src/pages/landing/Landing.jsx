import React from 'react'

export default function Landing() {
  return (
<div className="relative bg-[#15305b]">
    <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 224 12" fill="#bdc2c9" className="w-full -mb-1 text-white" preserveAspectRatio="none">
            <path
                d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
            </path>
        </svg>
    </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              FAT Registered Company
            </h2>
            <p className="mb-6 text-base text-indigo-200 md:text-lg">
                We Provide all the sevices related to accounts like VAT filings, bookkeeping services, financial audit services corporate tax services
            </p>
        </div>
    </div>
</div>
  )
}
