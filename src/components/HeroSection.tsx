"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Star, Zap, Truck } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative bg-blue-900 overflow-hidden py-0 min-h-[500px] flex items-center justify-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-12 py-10">
        {/* Left: Text Block */}
        <div className="flex-1 flex flex-col items-start justify-center text-left text-white gap-6 max-w-lg">
          <p className="uppercase tracking-widest text-sm font-semibold mb-2">Save, Shop & Gift</p>
          <div className="flex items-end mb-2">
            <span className="text-6xl md:text-7xl lg:text-8xl  font-extrabold leading-none">PRIME</span>
            <span className="ml-2 mb-2 text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 font-[cursive] italic relative -left-4">Sale</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="flex flex-col items-center mr-4">
              <span className="uppercase text-xs font-bold tracking-wider rotate-[-90deg] text-white mb-2">Extra</span>
              <span className="text-5xl md:text-6xl font-extrabold text-orange-400 leading-none">$30</span>
              <span className="uppercase text-xs font-bold tracking-wider rotate-[-90deg] text-white mt-2">Off</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="uppercase text-base font-semibold tracking-widest text-white mb-2">2 - 4 Days</span>
              <span className="uppercase text-base font-semibold tracking-widest text-white">Fastest Delivery</span>
            </div>
          </div>
          <button className="mt-4 border border-white text-white px-8 py-3 rounded font-semibold tracking-wide flex items-center gap-2 hover:bg-white hover:text-blue-900 transition">
            Shop the Collection
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        {/* Right: Images Block */}
        <div className="flex-1 flex items-center justify-center relative w-full mt-10 md:mt-0">
          {/* Blue radial background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[600px] rounded-full bg-gray-100" />
          </div>
          <div className="relative flex items-end justify-center gap-0 w-full z-20 ">
            <div className="w-68 md:w-56 lg:w-58 flex-shrink-0 flex flex-col items-center">
              <Image src="/brownimage.jpg" alt="Brown Jacket Left" width={700} height={700} className=" rounded-b-4xl  rounded-t-4xl object-contain w-full h-auto" />
              <div className="w-34 h-4 bg-blue-800 opacity-40 mt-2" />
            </div>
            <div className="w-52 md:w-64 lg:w-86 mt-12 flex-shrink-0 flex flex-col items-center">
              <Image src="/blackjacket.gif" alt="Black Jacket Center" width={340} height={440} className="object-contain w-full h-auto mt-6" />
              <div className="w-28 h-5 bg-blue-800 rounded-full blur-md opacity-40 mt-2" />
            </div>
            <div className="w-68 md:w-56 lg:w-58 flex-shrink-0 flex flex-col items-center">
              <Image src="/leatherimage3.gif" alt="Brown Jacket Right" width={300} height={400} className="object-contain ml-4 rounded-b-4xl rounded-t-4xl mr-8 w-full h-auto" />
              <div className="w-24 h-4 bg-blue-800 rounded-full blur-md opacity-40 mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", { email, password })
  }

  const slides = [
    {
      title: "New car type in London",
      description:
        "We have a great news for our dear customers! Now you can use our branded black cars around the London city.",
      buttonText: "Get details",
    },
    {
      title: "Premium Service Available",
      description: "Experience luxury travel with our premium fleet of vehicles available 24/7 across the city.",
      buttonText: "Learn more",
    },
    {
      title: "Book Your Ride Today",
      description: "Quick and easy booking process with instant confirmation and real-time tracking.",
      buttonText: "Book now",
    },
  ]

  return <HeroSection />
}
