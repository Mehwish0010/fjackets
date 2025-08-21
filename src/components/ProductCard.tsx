import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-50 rounded-2xl  flex flex-col md:flex-row items-center max-w-6xl w-full p-8 gap-10">
        
        {/* Left Side Image */}
        <div className="flex-shrink-0 bg-white shadow-xl">
          <Image
            src="/productcard.webp" // replace with your image path
            alt="FJackets"
            width={400}
            height={300}
            className="rounded-xl"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-center max-w-xl">
          <h2 className="text-[#112e7d] text-3xl  font-sans font-extrabold tracking-wide uppercase mb-4">
            FJACKETS DIFFERENCE
          </h2>

          {/* Tabs */}
          <div className="flex gap-2 mb-5">
            <button className="bg-[#112e7d] text-white px-4 py-2 rounded-md text-sm font-medium">
              Sustainable Style
            </button>
            <button className="border border-[#112e7d] text-[#112e7d] px-4 py-2 rounded-md text-sm font-medium">
              12 Years Of Expertise
            </button>
          </div>

          {/* Title */}
          <h3 className="text-xl font-extrabold mb-3 border-b-[3px] border-[#1d4ed8] inline-block pb-1">
            Sustainable Style
          </h3>

          {/* Paragraph */}
          <p className="text-gray-700 text-[21px] leading-relaxed mb-5 font-sans">
            Minimal Waste. Maximum Impact. Every jacket tells a story of thoughtful
            craftsmanship and responsible sourcing. Made from locally sourced leather—
            ethically obtained as a natural by-product of the food industry—we transform
            what could be wasted into timeless fashion. Style you can wear proudly,
            knowing you're making an impact.
          </p>

          {/* Icons Row */}
          <div className="flex flex-wrap gap-2 text-lg font-medium mb-6 font-sans">
            <div className="flex items-center gap-2">
              <span className="text-green-600">🌿</span>
              Sustainable from start to finish
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">♻️</span>
              Recycled by-product leather
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-700">📦</span>
              Eco-friendly packaging
            </div>
          </div>

          {/* Read More Button */}
          <button className="bg-blue-900 text-white px-8 py-3 rounded text-lg font-medium hover:bg-[#1d4ed8] hover:text-white transition w-auto min-w-[80px] max-w-fit">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
