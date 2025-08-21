'use client'
import Image from 'next/image'

export default function DualBannerSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-2 p-2 bg-gray-100">
      {/* ====== LEFT BANNER ====== */}
      <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-[400px] lg:min-h-[500px] rounded-xl">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-700/30 to-transparent transform skew-x-12 origin-top-right" />
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-r from-gray-800/40 to-transparent transform -skew-x-12 origin-bottom-left" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-10 mt-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:h-[400px]"> {/* Increased height for bigger images */}
            {/* Text */}
            <div className="text-white space-y-4 max-w-xl flex flex-col justify-center h-full">
              <p className="text-base font-medium tracking-wide">Find your perfect Style!</p>
              <h1 className="text-2xl lg:text-4xl font-extrabold leading-tight">
                MOTORCYCLE
                <br />
                <span className="text-white">LEATHER JACKETS</span>
              </h1>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-base font-semibold transition-colors duration-200 rounded-sm">
                Shop Now
              </button>
            </div>

            {/* Images */}
            <div className="flex flex-row lg:flex-col items-center justify-center space-x-4 lg:space-x-0 lg:space-y-6 p-4 h-full"> {/* Stack vertically on large screens */}
              {['/banner3.gif', '/banner1.gif', '/banner4.gif'].map((src, i) => (
                <div key={i} className="transform hover:scale-105 transition-transform duration-300 flex items-center">
                  <Image
                    src={src}
                    alt={`Jacket ${i + 1}`}
                    width={80}
                    height={110}
                    className="object-cover rounded-lg shadow-2xl w-[80px] h-[110px] lg:w-[110px] lg:h-[150px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorations */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gray-400/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg" />
      </div>

      {/* ====== RIGHT BANNER (Duplicate Section) ====== */}
      <div className="flex-1 relative overflow-hidden bg-red-700 min-h-[400px] lg:min-h-[500px] rounded-xl">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-700/30 to-transparent transform skew-x-12 origin-top-right" />
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-r from-gray-800/40 to-transparent transform -skew-x-12 origin-bottom-left" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-10 mt-4 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:h-[400px]"> {/* Increased height for bigger images */}
            {/* Text */}
            <div className="text-white space-y-4 max-w-xl flex flex-col justify-center h-full w-full ml-20">
              <p className="text-base font-medium tracking-wide">Find your perfect style!</p>
              <h1 className="text-2xl lg:text-4xl font-extrabold leading-tight">
             SUITS &
                <br />
                <span className="text-white">TUXEDOS</span>
              </h1>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-10 mr-6 py-2 text-base font-semibold transition-colors duration-200 rounded-sm">
                Shop Now
              </button>
            </div>

            {/* Images */}
            <div className="flex flex-row lg:flex-col items-center justify-center space-x-4 lg:space-x-0 lg:space-y-6 p-4 h-full"> {/* Stack vertically on large screens */}
              {['/2banner1.gif', '/2banner2.gif', '/2banner3.gif'].map((src, i) => (
                <div key={i} className="transform hover:scale-105 transition-transform duration-300 flex items-center">
                  <Image
                    src={src}
                    alt={`Puffer ${i + 1}`}
                    width={80}
                    height={110}
                    className="object-cover rounded-lg shadow-2xl w-[80px] h-[110px] lg:w-[110px] lg:h-[150px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorations */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gray-400/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg" />
      </div>
    </div>
  )
}
