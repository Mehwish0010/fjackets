import Aibanner from "@/components/Aibanner";
import MotorcycleBanner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";
import DualImageSection from "@/components/DualImageSection";
import Navbar from "@/components/Navbar";
import TestimonialsBar from "@/components/TestimonialBaar";
import ProductsPage from "./shop/page";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import FeaturedIn from "@/components/Feature";
import ScrollingLogos from "@/components/Scrollbar";
import ProductCard from "@/components/ProductCard";
import ProductsPages from "@/components/Products";

export default function Home() {
  return (
  
  <>
  <Navbar />
  <Aibanner/>
  <DualImageSection/>
 
  <ProductsPages/>
  <Benefits/>
  
  <TestimonialsBar/>
  <MotorcycleBanner/>
  <FeaturedIn/>
  <ScrollingLogos/>
  <ProductCard/>
  <Footer/>
  </>
  );
}
