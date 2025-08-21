"use client"
import Image from "next/image"
import Link from "@/components/Link"
import { useCart } from "@/context/CartContext"
import { useState } from "react"

import { Minus, Plus, Trash2, ShoppingBag, Sparkles } from "lucide-react"

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, totalItems, clear } = useCart()

  if (items.length === 0) { 
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-24 h-24 mx-auto bg-[#001B52] rounded-full flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#001B52]">Your cart is empty</h2>
            <p className="text-gray-600">Add some amazing products to get started!</p>
          </div>
          <Link href="/shop" className="inline-block bg-[#001B52] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D31E37] transition-all duration-200 shadow-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-lg border border-gray-200 mb-4">
            <ShoppingBag className="w-8 h-8 text-[#001B52]" />
            <h1 className="text-3xl font-bold text-[#001B52]">
              Shopping Cart
            </h1>
            <div className="bg-[#D31E37] text-white px-3 py-1 rounded-full text-sm font-semibold">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </div>
          </div>
          <p className="text-gray-600">Review your selected items and proceed to checkout</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Cart Items */}
          <div className="xl:col-span-3 space-y-6">
            {items.map((item, index) => (
              <div
                key={`${item.productId}-${item.size || "na"}`}
                className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6 items-center">
                  {/* Product Image */}
                  <div className="relative w-28 h-28 flex-shrink-0">
                    <div className="absolute inset-0 bg-gray-100 rounded-lg"></div>
                    <Image
                      src={item.img || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg relative z-10"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D31E37] rounded-full flex items-center justify-center z-20">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-2">
                    <h3 className="font-bold text-lg text-[#001B52] group-hover:text-[#D31E37] transition-colors">
                      {item.title}
                    </h3>
                    {item.size && (
                      <div className="inline-flex items-center gap-2">
                        <span className="text-sm text-gray-500">Size:</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-lg text-sm font-medium text-gray-700">
                          {item.size}
                        </span>
                      </div>
                    )}
                    <div className="text-2xl font-bold text-[#001B52]">${item.price}.00</div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-2">
                      <button
                        onClick={() => updateQuantity(Number(item.productId), item.quantity - 1, item.size)}
                        className="w-10 h-10 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center hover:bg-red-50 hover:text-[#D31E37] group/btn"
                      >
                        <Minus className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      </button>
                      <span className="w-12 text-center font-bold text-lg text-[#001B52]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(Number(item.productId), item.quantity + 1, item.size)}
                        className="w-10 h-10 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center hover:bg-green-50 hover:text-green-600 group/btn"
                      >
                        <Plus className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(Number(item.productId), item.size)}
                      className="w-10 h-10 bg-red-50 text-[#D31E37] rounded-lg hover:bg-red-100 hover:scale-110 transition-all duration-200 flex items-center justify-center group/remove"
                    >
                      <Trash2 className="w-4 h-4 group-hover/remove:scale-110 transition-transform" />
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#001B52]">${item.price * item.quantity}.00</div>
                    <div className="text-sm text-gray-500">
                      ${item.price} × {item.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="xl:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <h2 className="text-xl font-bold text-[#001B52] mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#D31E37] rounded-full"></div>
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                    <span className="font-bold text-lg text-[#001B52]">${subtotal}.00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600 font-semibold">FREE</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-[#001B52]">Total</span>
                      <span className="text-2xl font-bold text-[#D31E37]">
                        ${subtotal}.00
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/checkout" className="w-full bg-[#001B52] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#D31E37] transition-all duration-200 shadow-lg hover:shadow-xl inline-block text-center">
                    Proceed to Checkout
                  </Link>

                  <button
                    onClick={clear}
                    className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200"
                  >
                    Clear Cart
                  </button>
                </div>

                <div className="mt-6 p-4 bg-[#001B52] rounded-lg">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-semibold text-sm">Free Shipping</span>
                  </div>
                  <p className="text-xs text-gray-300">Enjoy free shipping on all orders over $100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}