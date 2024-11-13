import React from 'react';

const Card = () => {
  return (
    <div className="card m-auto text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
      <div className="px-8 py-10">
        <div className="bg-[#dcd8d7] w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-blue-900 transition-all" />
        <div className="uppercase font-bold text-xl">
          CHAMONILLE
        </div>
        <div className="text-gray-300 uppercase tracking-widest">
          NATURAL, OIL
        </div>
        <div className="text-gray-400 mt-8">
          <p className="font-bold">39.00 MLC</p>
          <p>Perfect everywhere</p>
        </div>
      </div>
      <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
      <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all" />
    </div>
  );
}

export default Card;