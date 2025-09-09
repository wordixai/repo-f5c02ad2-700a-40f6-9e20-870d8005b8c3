import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ProductGrid } from "@/components/ProductGrid"
import { Features } from "@/components/Features"
import { Newsletter } from "@/components/Newsletter"
import { Footer } from "@/components/Footer"
import { Toaster } from "sonner"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductGrid />
      <Features />
      <Newsletter />
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default Index;