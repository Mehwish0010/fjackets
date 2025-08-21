// app/components/Benefits.tsx
'use client';

import Image from 'next/image';

const benefits = [
  {
    id: 1,
    icon: '/Shipping-updated.webp',
    title: 'Free Shipping & Free',
    subtitle: 'Returns & Exchanges',
  },
  {
    id: 2,
    icon: '/Dollar-sign-icon-updated.webp',
    title: 'Shop Now Pay Later with',
    subtitle: <span><strong>PayPal</strong> or <strong>Klarna</strong></span>,
  },
  {
    id: 3,
    icon: '/protected-updated.webp',
    title: 'Free Insurance! We Guarantee',
    subtitle: 'Protection & Free Replacement.',
  },
  {
    id: 4,
    icon: '/Product-Icon-updated.webp',
    title: 'Safe Payments Via Cards,',
    subtitle: <span><strong>Apple Pay</strong> or <strong>G Pay</strong></span>,
  },
  {
    id: 5,
    icon: '/communication.webp',
    title: '24/7 Live Support',
    subtitle: <span className="underline text-gray-500 cursor-pointer">Chat Now</span>,
  },
];

export default function Benefits() {
  return (
    <div className="bg-gray-100 py-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        {benefits.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="w-16 h-16 relative">
              <Image src={item.icon} alt="icon" width={120} height={90} className="object-fill" />
            </div>
            <p className="text-sm mt-5 font-medium text-gray-700 leading-4">{item.title}</p>
            <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
