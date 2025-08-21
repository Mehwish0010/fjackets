"use client";
import { ShoppingCart, Heart, Search, ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import Link from "@/components/Link";
import { useCart } from "@/context/CartContext";

export default function FJacketsWebsite() {
    const { totalItems, subtotal } = useCart()
    return (
      <div className="bg-white">
        {/* Top Banner */}
        <div className="bg-gray-100 text-center py-2 font-semibold text-sm">Free Shipping + Free Return & Exchange</div>
  
        {/* Promotional Banner */}
        <div className="bg-red-700 text-white text-center py-1 text-md font-medium">
        <span className="font-bold"> Prime  Sale! </span>   $30 OFF + Free Shipping, code: <span className="font-bold">PRIME30</span>
        </div>
  
        {/* Header */}
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
              <Link href="/cart" className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
                  {totalItems}
                </span>
              </Link>
              {/* Debug button - remove this later */}
              <button 
                onClick={() => {
                  const { items } = useCart();
                  console.log('Current cart state:', { items, totalItems, subtotal });
                }}
                className="text-xs bg-blue-500 text-white px-2 py-1 rounded"
              >
                Debug Cart
              </button>
            </div>
          </div>
        </header>
  
  </div>
  )
}