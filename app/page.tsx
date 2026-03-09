import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProductsSection from "@/components/products-section";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
