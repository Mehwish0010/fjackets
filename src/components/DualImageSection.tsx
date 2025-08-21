'use client';
import React from 'react';
import Link from '@/components/Link';

const DualImageSection = () => {
  return (
    <section className="w-full  max-w-full  bg-gray-100">
      <div className="flex flex-col lg:flex-row  max-w-full mx-auto">
        {/* LEFT BOX */}
        <div className="relative flex-1 h-96 lg:h-[500px]  overflow-hidden ">
          <img
            src="/Men-Jacket.webp" // replace with actual path
            alt="First Section"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY LINK BOX */}
          <div className="absolute bottom-6 left-6 bg-gray-400 px-10 py-4  ml-50 ">
            <Link href="/shop" className="text-white font-semibold hover:underline">
              ➤ SHOP MEN
            </Link>
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="relative flex-1 h-96 lg:h-[500px]  overflow-hidden ">
          <img
            src="/Women-Jacket.webp" // replace with actual path
            alt="Second Section"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY LINK BOX */}
          <div className="absolute bottom-6 left-6 bg-gray-400 px-10 py-4  ml-50 ">
            <Link href="/shop" className="text-white font-semibold hover:underline">
              ➤ SHOP WOMEN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualImageSection;
