// app/products/page.tsx
'use client';

import Image from 'next/image';

const products = [
  {
    id: 1,
    title: 'Mens Cognac Harrington Leather Jacket',
    price: 189,
    originalPrice: 280,
    discount: '32% OFF',
    img: '/pp1.gif'
  },
  {
    id: 5,
    title: 'Womens Black Biker Leather Jacket',
    price: 199,
    originalPrice: 320,
    discount: '38% OFF',
    img: '/pp5.gif'
  },
  {
    id: 6,
    title: 'Mens Brown Bomber Leather Jacket',
    price: 179,
    originalPrice: 270,
    discount: '34% OFF',
    img: '/pp6.gif'
  },
  {
    id: 7,
    title: 'Womens Red Moto Leather Jacket',
    price: 209,
    originalPrice: 340,
    discount: '39% OFF',
    img: '/pp7.jpg'
  },
  {
    id: 8,
    title: 'Mens Suede Trucker Jacket',
    price: 219,
    originalPrice: 350,
    discount: '37% OFF',
    img: '/pp8.gif'
  },
  {
    id: 9,
    title: 'Womens Tan Shearling Leather Jacket',
    price: 229,
    originalPrice: 370,
    discount: '38% OFF',
    img: '/pp9.gif'
  },
  {
    id: 10,
    title: 'Mens Classic Black Leather Blazer',
    price: 199,
    originalPrice: 310,
    discount: '36% OFF',
    img: '/pp10.gif'
  },
  {
    id: 11,
    title: 'Womens Cropped Brown Leather Jacket',
    price: 189,
    originalPrice: 295,
    discount: '36% OFF',
    img: '/p11.gif'
  },
  {
    id: 12,
    title: 'Mens Vintage Distressed Leather Jacket',
    price: 209,
    originalPrice: 340,
    discount: '39% OFF',
    img: '/pp12.gif'
  },
  {
    id: 13,
    title: 'Womens White Leather Moto Jacket',
    price: 219,
    originalPrice: 360,
    discount: '39% OFF',
    img: '/pp13.gif'
  },
  {
    id: 14,
    title: 'Mens Blue Suede Bomber Jacket',
    price: 229,
    originalPrice: 370,
    discount: '38% OFF',
    img: '/pp14.gif'
  },
  {
    id: 15,
    title: 'Womens Green Biker Leather Jacket',
    price: 199,
    originalPrice: 320,
    discount: '38% OFF',
    img: '/pp15.gif'
  },
  {
    id: 16,
    title: 'Mens Grey Cafe Racer Leather Jacket',
    price: 189,
    originalPrice: 280,
    discount: '32% OFF',
    img: '/pp16.gif'
  },
  {
    id: 17,
    title: 'Womens Burgundy Leather Blazer',
    price: 209,
    originalPrice: 340,
    discount: '39% OFF',
    img: '/pp17.gif'
  },
  {
    id: 18,
    title: 'Mens Tan Aviator Shearling Jacket',
    price: 239,
    originalPrice: 390,
    discount: '39% OFF',
    img: '/pp18.gif'
  },
  {
    id: 19,
    title: 'Womens Classic Black Leather Trench',
    price: 249,
    originalPrice: 400,
    discount: '38% OFF',
    img: '/pp19.gif'
  },
  {
    id: 20,
    title: 'Mens Olive Green Leather Bomber',
    price: 199,
    originalPrice: 320,
    discount: '38% OFF',
    img: '/pp20.gif'
  },
  {
    id: 21,
    title: 'Womens Pink Suede Moto Jacket',
    price: 219,
    originalPrice: 350,
    discount: '37% OFF',
    img: '/pp21.gif'
  },
  {
    id: 22,
    title: 'Mens Maroon Leather Biker Jacket',
    price: 209,
    originalPrice: 340,
    discount: '39% OFF',
    img: '/pp22.gif'
  },
  {
    id: 23,
    title: 'Womens Navy Blue Leather Jacket',
    price: 199,
    originalPrice: 320,
    discount: '38% OFF',
    img: '/pp23.gif'
  },
  {
    id: 24,
    title: 'Mens Black Hooded Leather Jacket',
    price: 219,
    originalPrice: 350,
    discount: '37% OFF',
    img: '/pp24.gif'
  },
 
  {
    id: 2,
    title: 'Mens Classic Cognac Harrington Leather Jacket',
    price: 189,
    originalPrice: 280,
    discount: '32% OFF',
    img: '/pp2.gif',
  },
  {
    id: 3,
    title: 'Mens Cognac Shirt Collar Leather Jacket',
    price: 189,
    originalPrice: 320,
    discount: '41% OFF',
    img: '/pp3.gif',
  },
  {
    id: 4,
    title: 'Mens Black Cafe Racer Leather Jacket With White Stripes',
    price: 189,
    originalPrice: 300,
    discount: '37% OFF',
    img: '/pp4.gif',
  },
 
];

export default function ProductsPage() {
  return (
    <div className="py-4 px-4 sm:px-8 max-w-8xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">New Edits</h2>
      <p className="text-center text-blue-600 font-semibold mb-8 cursor-pointer text-xl">View More →</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative  border-2 border-gray-200  shadow-sm p-4 rounded-lg hover:shadow-md transition"
          >
            {/* Discount Badge */}
            <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded">
              {product.discount}
            </div>

            {/* Image */}
            <div className="w-full h-86 relative mt-4">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-contain max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Delivery Badge */}
            <div className="mt-2 ">
              <span className="bg-blue-950 text-white text-xs font-semibold px-2 py-1 rounded">
                Fastest Delivery
              </span>
            </div>

            {/* Title */}
            <h3 className="text-sm font-medium mt-2">{product.title}</h3>

            {/* Price */}
            <div className="mt-1 text-sm">
              <span className="line-through text-gray-500">${product.originalPrice}</span>{' '}
              <span className="text-black font-semibold">${product.price}</span>
            </div>

            {/* Stars */}
            <div className="text-orange-500 text-sm">★★★★★ <span className="text-black">32</span></div>

            {/* Coupon Code */}
            <p className="text-red-700 text-sm font-semibold font-poppins">
              Get It For ${product.price - 25} Code: WD25
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
