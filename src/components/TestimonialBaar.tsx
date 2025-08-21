'use client';
import React from 'react';
import Image from 'next/image';

const TestimonialsBar = () => {
  const users = [
    '/testti1.webp',
    '/review-image2.webp',
    '/review-image3.webp',
    '/review-image4.webp',
    '/review-image5.webp',
    '/review-image6.webp',
  ];

  return (
    <div className="bg-[#e8e8e8] py-10 px-4 sm:px-10 rounded-full shadow-md mb-6 max-w-6xl mx-auto mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
      {/* LEFT TEXT */}
      <div className="flex flex-col sm:flex-row items-center gap-5">
        <div className="text-5xl font-extrabold text-black">35,000</div>
        <div className="flex items-center text-yellow-500 text-4xl">
          {'★'.repeat(5)}
        </div>
        <p className="text-gray-700 text-center sm:text-left text-sm font-semibold sm:text-base sm:ml-4">
          Customer satisfaction isn’t a goal—it’s our promise, proven by real reviews.
        </p>
      </div>

      {/* USER IMAGES */}
      <div className="flex items-center space-x-[-8px]">
        {users.map((src, idx) => (
          <div key={idx} className="w-12 h-12 rounded-full overflow-hidden  border-white shadow">
            <Image src={src} alt={`user-${idx}`} width={40} height={40} className="object-cover w-full h-full" />
          </div>
        ))}
        {/* Total Count */}
        <div className="w-12 h-12 rounded-full bg-blue-900 text-white text-xs font-semibold flex items-center justify-center  border-white shadow">
          34,994
        </div>
      </div>
    </div>
  );
};

export default TestimonialsBar;
