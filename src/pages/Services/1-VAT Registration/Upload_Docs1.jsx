import React from 'react';

export default function UploadDocs() {
    return (
        <div class="px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:max-w-screen-xl lg:px-8 mx-auto">
            <section class="mb-10">
                <h1 class="text-5xl font-bold mb-4">VAT Registration</h1>
                <p class="text-xl font-bold mb-2">
                    Request Details
                </p>
                <p class="text-m mb-4">
                    Please fill all required fields
                </p>
            </section>

            <section className="flex flex-col mb-4">
                <p class="text-xl font-bold mb-2">
                    Verify the applicant's contact information
                </p>
                <hr />

                <label className="flex flex-col mb-4 mt-4"> Full Name 
                    <input className="h-10 rounded-md border border-gray-300 p-3" id="name" type="text" placeholder="Enter your full name" />
                </label>

                <label className="flex flex-col mb-4">Email Address 
                    <input className="h-10 rounded-md border border-gray-300 p-3" id="email" type="email" placeholder="Enter your email address" />
                </label>

                <label className="flex flex-col mb-4">Phone Number 
                    <input className="h-10 rounded-md border border-gray-300 p-3" id="phone" type="phone" placeholder="Enter your phone number" />
                </label>

            </section>

            <div className="flex flex-col">
                <h2 class="text-xl font-bold mb-2">Upload Required Documents</h2>
                <hr />
                {/* Label for the Upload Section */}
                <label className="mt-4 mb-2 text-sm font-semibold text-gray-700">
                    Copy of the license
                </label>

                {/* Upload Box */}
                <label
                    className="flex cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                    tabIndex="0">
                    {/* Icon and Upload Prompt */}
                    <span className="flex items-center space-x-2">
                        <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                            <path
                                d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></path>
                            <path
                                d="M80,128a80,80,0,1,1,144,48"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></path>
                            <polyline
                                points="118.1 161.9 152 128 185.9 161.9"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></polyline>
                            <line
                                x1="152"
                                y1="208"
                                x2="152"
                                y2="128"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></line>
                        </svg>

                        {/* Text inside the Upload Box */}
                        <span className="text-xs font-medium text-gray-600">
                            Drop files to Attach, or{' '}
                            <span className="text-blue-600 underline">browse</span>
                        </span>
                    </span>

                    {/* Hidden File Input */}
                    <input
                        id="photo-dropbox"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.jpg,.jpeg,.png"  // Accepted file formats
                    />
                </label>

                {/* Supported Formats and File Size Limit Note */}
                <div className="mt-2 flex justify-between w-full text-xs text-gray-500 mb-10">
                    <span>Supported formats: PDF, JPG, PNG</span>
                    <span>Max file size: 1.91MB</span>
                </div>

            </div>

            <div className="flex flex-col">
                {/* Label for the Upload Section */}
                <label className="mb-2 text-sm font-semibold text-gray-700">
                    Bank account details of the company or its manager
                </label>

                {/* Upload Box */}
                <label
                    className="flex cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                    tabIndex="0">
                    {/* Icon and Upload Prompt */}
                    <span className="flex items-center space-x-2">
                        <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                            <path
                                d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></path>
                            <path
                                d="M80,128a80,80,0,1,1,144,48"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></path>
                            <polyline
                                points="118.1 161.9 152 128 185.9 161.9"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></polyline>
                            <line
                                x1="152"
                                y1="208"
                                x2="152"
                                y2="128"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></line>
                        </svg>

                        {/* Text inside the Upload Box */}
                        <span className="text-xs font-medium text-gray-600">
                            Drop files to Attach, or{' '}
                            <span className="text-blue-600 underline">browse</span>
                        </span>
                    </span>

                    {/* Hidden File Input */}
                    <input
                        id="photo-dropbox"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.jpg,.jpeg,.png"  // Accepted file formats
                    />
                </label>

                {/* Supported Formats and File Size Limit Note */}
                <div className="mt-2 flex justify-between w-full text-xs text-gray-500 mb-10">
                    <span>Supported formats: PDF, JPG, PNG</span>
                    <span>Max file size: 1.91MB</span>
                </div>
            </div>

            <div className="flex flex-col">
                {/* Label for the Upload Section */}
                <label className="mb-2 text-sm font-semibold text-gray-700">
                    Copy of passport for partners and manager
                </label>

                {/* Upload Box */}
                <label
                    className="flex cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                    tabIndex="0">
                    {/* Icon and Upload Prompt */}
                    <span className="flex items-center space-x-2">
                        <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                            <path
                                d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></path>
                            <path
                                d="M80,128a80,80,0,1,1,144,48"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></path>
                            <polyline
                                points="118.1 161.9 152 128 185.9 161.9"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></polyline>
                            <line
                                x1="152"
                                y1="208"
                                x2="152"
                                y2="128"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></line>
                        </svg>

                        {/* Text inside the Upload Box */}
                        <span className="text-xs font-medium text-gray-600">
                            Drop files to Attach, or{' '}
                            <span className="text-blue-600 underline">browse</span>
                        </span>
                    </span>

                    {/* Hidden File Input */}
                    <input
                        id="photo-dropbox"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.jpg,.jpeg,.png"  // Accepted file formats
                    />
                </label>

                {/* Supported Formats and File Size Limit Note */}
                <div className="mt-2 flex justify-between w-full text-xs text-gray-500 mb-10">
                    <span>Supported formats: PDF, JPG, PNG</span>
                    <span>Max file size: 1.91MB</span>
                </div>
            </div>

            <div className="flex flex-col">
                {/* Label for the Upload Section */}
                <label className="mb-2 text-sm font-semibold text-gray-700">
                    Copy of ID for partners and manager
                </label>

                {/* Upload Box */}
                <label
                    className="flex cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                    tabIndex="0">
                    {/* Icon and Upload Prompt */}
                    <span className="flex items-center space-x-2">
                        <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                            <path
                                d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></path>
                            <path
                                d="M80,128a80,80,0,1,1,144,48"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></path>
                            <polyline
                                points="118.1 161.9 152 128 185.9 161.9"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></polyline>
                            <line
                                x1="152"
                                y1="208"
                                x2="152"
                                y2="128"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></line>
                        </svg>

                        {/* Text inside the Upload Box */}
                        <span className="text-xs font-medium text-gray-600">
                            Drop files to Attach, or{' '}
                            <span className="text-blue-600 underline">browse</span>
                        </span>
                    </span>

                    {/* Hidden File Input */}
                    <input
                        id="photo-dropbox"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.jpg,.jpeg,.png"  // Accepted file formats
                    />
                </label>

                {/* Supported Formats and File Size Limit Note */}
                <div className="mt-2 flex justify-between w-full text-xs text-gray-500 mb-10">
                    <span>Supported formats: PDF, JPG, PNG</span>
                    <span>Max file size: 1.91MB</span>
                </div>
            </div>

            <div className="flex flex-col">
                {/* Label for the Upload Section */}
                <label className="mb-2 text-sm font-semibold text-gray-700">
                    Table showing company income, stamped and signed by the company manager
                </label>

                {/* Upload Box */}
                <label
                    className="flex cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                    tabIndex="0">
                    {/* Icon and Upload Prompt */}
                    <span className="flex items-center space-x-2">
                        <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                            <path
                                d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></path>
                            <path
                                d="M80,128a80,80,0,1,1,144,48"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></path>
                            <polyline
                                points="118.1 161.9 152 128 185.9 161.9"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></polyline>
                            <line
                                x1="152"
                                y1="208"
                                x2="152"
                                y2="128"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></line>
                        </svg>

                        {/* Text inside the Upload Box */}
                        <span className="text-xs font-medium text-gray-600">
                            Drop files to Attach, or{' '}
                            <span className="text-blue-600 underline">browse</span>
                        </span>
                    </span>

                    {/* Hidden File Input */}
                    <input
                        id="photo-dropbox"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.jpg,.jpeg,.png"  // Accepted file formats
                    />
                </label>

                {/* Supported Formats and File Size Limit Note */}
                <div className="mt-2 flex justify-between w-full text-xs text-gray-500 mb-10">
                    <span>Supported formats: PDF, JPG, PNG</span>
                    <span>Max file size: 1.91MB</span>
                </div>
            </div>


            <div>
                <h2 class="text-xl font-bold mb-2">Fee Summary</h2>
                <hr />
                <p>
                    Please review the fee summary below before proceeding wih your application. These dees are calculated based on your current choices.
                </p>

                <table class="w-full border-collapse border border-gray-200 max-w-lg mt-10 mb-10 mx-auto">
                    <thead>
                        <tr class="bg-gray-400 text-white">
                            <th class="py-2 px-4 text-left">Statement</th>
                            <th class="py-2 px-4 text-right">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-gray-200">
                            <td class="py-2 px-4">VAT Registration</td>
                            <td class="py-2 px-4 text-right">AED 500</td>
                        </tr>
                        <tr class="border-b border-gray-200">
                            <td class="py-2 px-4">Total Amount</td>
                            <td class="py-2 px-4 text-right">AED 500</td>
                        </tr>
                    </tbody>
                </table>

                <div class="text-xl font-semibold">
                    <div class="flex items-center space-x-2 rounded p-2 ">
                        <input type="checkbox" id="htmlCheckbox" name="languageCheckbox" class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                        <label for="htmlCheckbox" class="flex w-full space-x-2 text-sm"> I certify that I have read and accept the Terms of Use and Privacy Statement. </label>
                    </div>
                </div>
            </div>


            <div class="flex gap-3 max-w-sm mt-5">
                <button class="py-2.5 px-6 rounded-lg text-sm font-medium bg-[#15305b] text-white">Submit</button>
                <button class="py-2.5 px-6 rounded-lg text-sm font-medium bg-[#F00] text-white">Cancel</button>
            </div>

        </div>
    );
}
