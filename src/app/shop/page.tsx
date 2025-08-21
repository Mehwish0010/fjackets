"use client"
import { ShoppingCart, Heart, Search, ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import Link from "@/components/Link";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { getAllProducts, Product } from "@/data/products";

export default function ProductsPage() {
    const { addItem } = useCart();
    const saleEndDate = new Date("2025-08-20T23:59:59");
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const allProducts = getAllProducts();
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = saleEndDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Filter products based on search and category
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="bg-gray-100 text-center py-2 font-semibold text-sm">
        Free Shipping + Free Return & Exchange
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
            <Link href="/shop" className="text-gray-600 font-medium hover:text-gray-900">
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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

      <section className="w-full">
        {/* Top Blue Bar */}
        <div className="bg-[#001B52] text-white flex flex-wrap items-center justify-center text-center font-semibold text-lg py-3 px-4">
          <span className="mr-6">LIMITED TIME SPECIAL</span>
          <span className="bg-[#D31E37] px-4 py-1 font-bold text-white text-xl">
            UPTO 47% OFF
          </span>
          <span className="ml-6">
            EXTRA $25 OFF + FREE SHIPPING, CODE:{" "}
            <span className="font-bold">WD25</span>
          </span>
        </div>

        {/* Middle Text */}
        <div className="text-center py-6">
          <h2 className="text-[#001B52] font-extrabold text-xl tracking-wide uppercase">
            Biggest Discounts
          </h2>
          <p className="mt-2 text-gray-700 max-w-3xl mx-auto">
            The biggest leather jacket sale is live — don't miss your chance to save big!
          </p>
          <p className="mt-2 text-gray-700 max-w-4xl mx-auto">
            FJackets has launched its Mega-deals, through which you can enjoy huge
            discounts by applying coupon code, offer valid for a limited time.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center items-center py-6">
          <div className="bg-gray-100 px-6 py-4 rounded-full flex gap-4 text-[#D31E37] font-bold text-3xl">
            <span>{timeLeft.days.toString().padStart(2, "0")}</span> :
            <span>{timeLeft.hours.toString().padStart(2, "0")}</span> :
            <span>{timeLeft.minutes.toString().padStart(2, "0")}</span> :
            <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === "all"
                ? "bg-[#001B52] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setSelectedCategory("mens")}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === "mens"
                ? "bg-[#001B52] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Men's Jackets
          </button>
          <button
            onClick={() => setSelectedCategory("womens")}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === "womens"
                ? "bg-[#001B52] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Women's Jackets
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                  {product.discount}
                </div>
                <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                  <Heart className="w-4 h-4 text-gray-600" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2 group-hover:text-[#001B52] transition-colors">
                  {product.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-[#001B52]">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">(4.5)</span>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Shop page: Adding to cart', product);
                    addItem({ productId: product.id, title: product.title, price: product.price, img: product.img });
                    alert('Item added to cart!');
                  }}
                  className="w-full bg-[#001B52] text-white py-2 rounded-md font-medium hover:bg-[#D31E37] transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* No products found message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
