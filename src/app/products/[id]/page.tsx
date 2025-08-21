"use client"
import { useState } from "react";
import { use } from "react";
// app/products/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById, getAllProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Link from "@/components/Link";
import { ShoppingCart, Heart, Star, Truck, Shield, RotateCcw, Search, User, Globe, ChevronDown, Clock, DollarSign, Lock } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Benefits from "@/components/Benefits";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}
const reviews = [
  {
    id: 1,
    name: "Alex M.",
    rating: 5,
    title: "Perfect jacket and Service",
    review:
      "Absolutely love this jacket! The quality is exceptional and it fits perfectly. The leather is soft yet durable, and the craftsmanship is top-notch. I've received so many compliments wearing it. The delivery was fast and the packaging was excellent. Highly recommend this jacket to anyone looking for a premium leather jacket.",
    date: "January 15, 2024",
    verified: true,
    images: ["/placeholder.svg?height=300&width=300"],
  },
  {
    id: 2,
    name: "Sarah K.",
    rating: 5,
    title: "Amazing quality",
    review:
      "I bought this jacket for my husband and he absolutely loves it! The cognac brown color is beautiful and the leather feels premium. The fit is true to size and the jacket looks exactly like the photos. Great customer service too - they answered all my questions promptly.",
    date: "January 12, 2024",
    verified: true,
    images: [],
  },
  {
    id: 3,
    name: "Michael R.",
    rating: 4,
    title: "Great jacket, fast delivery",
    review:
      "Really impressed with this jacket. The leather quality is excellent and it's very comfortable to wear. The only minor issue is that it's slightly tighter around the shoulders than expected, but overall I'm very happy with the purchase. Would definitely buy from this company again.",
    date: "January 10, 2024",
    verified: true,
    images: ["/placeholder.svg?height=300&width=300"],
  },
  {
    id: 4,
    name: "David L.",
    rating: 5,
    title: "Excellent craftsmanship",
    review:
      "This jacket exceeded my expectations. The attention to detail is remarkable - from the stitching to the hardware, everything is perfectly executed. The leather has a nice weight to it and the color is rich and even. I've been wearing it for a few weeks now and it's already starting to develop a nice patina.",
    date: "January 8, 2024",
    verified: true,
    images: [],
  },
  {
    id: 5,
    name: "Jennifer W.",
    rating: 5,
    title: "Perfect gift",
    review:
      "Bought this as a birthday gift for my boyfriend and he was thrilled! The jacket is beautifully made and the cognac color is gorgeous. The sizing was perfect based on the size chart. Fast shipping and excellent packaging. Will definitely shop here again.",
    date: "January 5, 2024",
    verified: true,
    images: ["/placeholder.svg?height=300&width=300"],
  },
  {
    id: 6,
    name: "Robert T.",
    rating: 4,
    title: "Good quality jacket",
    review:
      "Overall very satisfied with this purchase. The jacket is well-made and the leather feels authentic. The fit is good and it's comfortable to wear. The only reason I'm giving 4 stars instead of 5 is that the delivery took a bit longer than expected, but the quality makes up for it.",
    date: "January 3, 2024",
    verified: true,
    images: [],
  },
]
export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const product = getProductById(parseInt(resolvedParams.id));

  if (!product) return notFound();
  // Fix: import and use useState from React
 
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState<string | undefined>(undefined)
  const { addItem } = useCart()

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg className={`w-4 h-4 ${filled ? "text-yellow-400 fill-current" : "text-gray-300"}`} viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => <StarIcon key={i} filled={i < rating} />)
  }
  return (
    <div className="bg-white min-h-screen">
      {/* Top Sale Banner */}
      <div className="bg-red-600 text-white text-center py-2 font-semibold">
        Friday Special! $25 OFF
      </div>

      {/* Imported Navbar */}
      <header className="bg-white border-b border-gray-200 px-4 py-5">
          <div className="max-w-8xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="/fjackets-d-logo.webp"
                alt="F Jackets Logo"
                width={120}
                height={60}
              />
             </div>
             
  
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-md ml-10 text-gray-200 font-semibold">
              <Link href="/shop" className="text-gray-600 font-medium hover:text-gray-900">
               Sale
              </Link>
              <Link href="/shop" className="text-gray-600 font-medium  hover:text-gray-900">
                Men
              </Link>
              <Link href="/shop" className="text-gray-600 font-medium hover:text-gray-900">
                Women
              </Link>
              <Link href="/shop" className="text-gray-600 font-medium hover:text-gray-900">
                New Arrivals
              </Link>
              <Link href="/shop" className="text-gray-600 font-medium hover:text-gray-900">
                Best Seller
              </Link>
              <Link href="/shop" className="text-gray-600 font-medium hover:text-gray-900">
                Prom
              </Link>
              <Link href="/shop" className="text-gray-600 font-medium hover:text-gray-900">
                Care & Tips
              </Link>
              <Link href="/shop" className="text-gray-600 font-medium hover:text-gray-900">
                Brand & Support
              </Link>
            </nav>
  
            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative border border-gray-300 p-2 rounded-lg">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="w-70 pr-10 text-sm font-medium"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
  
              {/* Country Flag */}
              <div className="flex items-center space-x-1">
                <div className="w-6 h-4 bg-red-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-white to-blue-500"></div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
  
              {/* Icons */}
              <Heart className="w-6 h-6 text-gray-600 cursor-pointer" />
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>
            </div>
          </div>
        </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Product Images */}
          <div className="space-y-4">
            {/* Thumbnail Images */}
            <div className="grid grid-cols-6 gap-2 mb-4">
              {[
                { position: "center", alt: "Front View" },
                { position: "left", alt: "Left Side" },
                { position: "right", alt: "Right Side" },
                { position: "top", alt: "Top View" },
                { position: "bottom", alt: "Bottom View" },
                { position: "center", alt: "Detail View" }
              ].map((thumbnail, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-gray-400 transition-colors">
                  <Image
                    src={product.img}
                    alt={`${product.title} - ${thumbnail.alt}`}
                    width={80}
                    height={100}
                    className="w-full h-20 object-cover"
                    style={{ objectPosition: thumbnail.position }}
                  />
                </div>
              ))}
            </div>
            
            {/* Main Product Image */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <Image
                src={product.img}
                alt={product.title}
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-6">
            {/* Product Title */}
            <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-600">(78 reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}.00
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice}.00
                </span>
                <span className="bg-green-500 text-white px-3 py-1 rounded text-sm font-bold">
                  {product.discount}
                </span>
              </div>
              <p className="text-gray-600">4 interest-free payments of ${(product.price / 4).toFixed(2)} with PayPal</p>
            </div>

            {/* Sale Timer */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="flex items-center gap-2 text-red-600">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Friday special, sale ends tonight at 11:59pm</span>
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Size</label>
              <select value={size || ''} onChange={(e) => setSize(e.target.value || undefined)} className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700">
                <option value="">Choose a Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <div className="flex items-center gap-3">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100">
                  -
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100">
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  console.log('Add to cart clicked', { product, quantity, size });
                  try {
                    addItem({ productId: product.id, title: product.title, price: product.price, img: product.img, size }, quantity);
                    console.log('Item added to cart successfully');
                    // Optional: Show a success message
                    alert('Item added to cart!');
                  } catch (error) {
                    console.error('Error adding item to cart:', error);
                    alert('Error adding item to cart');
                  }
                }}
                className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Add To Cart
              </button>
              <div className="flex gap-4 text-sm">
                <Link href="/wishlist" className="text-gray-600 hover:text-gray-900">Add to Wishlist</Link>
                <Link href="/compare" className="text-gray-600 hover:text-gray-900">Compare</Link>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold">Product Details</h3>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Material:</span>
                  <span>100% Real Lambskin Leather</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Lining:</span>
                  <span>Inside Plush Polyester Lining</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Fit:</span>
                  <span>Regular</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Collar:</span>
                  <span>Buckle Snap Collar</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sleeves:</span>
                  <span>Front Zip Closure (right side)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Cuffs:</span>
                  <span>Zipper Cuffs</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Pockets:</span>
                  <span>2 Chest, 2 Side & 3 inside (1 for cellphone)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Color:</span>
                  <span>Cognac</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Care:</span>
                  <span>Recommended Professional Leather Clean Only</span>
                </div>
              </div>
            </div>

            {/* Please Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 space-y-2">
              <h4 className="font-semibold text-yellow-800">Please Note:</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Biker-inspired Design - Classic cafe racer style, and bold silhouettes.</li>
                <li>• No Protective Armor - Designed purely for fashion, Not intended for motorcycle riding.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section - Full Width */}
        <div className="mt-12">
          <Benefits/>
        </div>

        {/* Customer Reviews Section */}
        <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Reviews Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Reviews with Images</h2>
        </div>

        {/* Reviews List */}
        <div className="space-y-8">
          {displayedReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-8 last:border-b-0">
              {/* Review Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* Customer Image/Avatar */}
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold flex-shrink-0">
                  {review.name.charAt(0)}
                </div>

                <div className="flex-1">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-1">{renderStars(review.rating)}</div>

                  {/* Customer Name and Verification */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900">{review.name}</span>
                    {review.verified && <span className="text-green-600 text-sm font-medium">Verified Purchase</span>}
                  </div>

                  {/* Review Title */}
                  <h3 className="font-semibold text-gray-900 mb-2">{review.title}</h3>
                </div>

                {/* Date */}
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              {/* Review Text */}
              <div className="ml-16">
                <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>

                {/* Review Images */}
                {review.images.length > 0 && (
                  <div className="flex gap-3 mb-4">
                    {review.images.map((image, index) => (
                      <div key={index} className="relative">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Customer photo ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAllReviews && (
          <div className="text-center mt-8">
            <button onClick={() => setShowAllReviews(true)} className="text-blue-600 hover:text-blue-800 font-medium">
              Show more reviews
            </button>
          </div>
        )}
      </div>
    </div>

        {/* FJACKETS DIFFERENCE Section - Full Width */}
        <div className="mt-16">
          <ProductCard/>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    {/* Footer */}
    </div>
  );
}
