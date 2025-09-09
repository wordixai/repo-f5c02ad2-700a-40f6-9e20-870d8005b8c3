import { ProductCard } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { Zap, Sparkles } from "lucide-react"

const products = [
  {
    id: "1",
    name: "Pop Art Lightning Tee",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    isNew: true,
    isSale: true,
    rating: 5,
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Express your electric personality with this vibrant lightning bolt tee! Perfect for festivals, concerts, or making a statement anywhere you go."
  },
  {
    id: "2", 
    name: "Comic Boom Hoodie",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    isNew: false,
    isSale: false,
    rating: 4,
    colors: ["#FF1493", "#00CED1", "#FFD700"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Stay cozy while making a bold statement! This hoodie features comic book-inspired graphics that pop off the fabric."
  },
  {
    id: "3",
    name: "Retro Pop Sneakers",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    isNew: false,
    isSale: true,
    rating: 5,
    colors: ["#FF4500", "#FF1493", "#00FFFF", "#ADFF2F", "#FFD700"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    description: "Step into the future with these retro-inspired sneakers! Comfortable, stylish, and guaranteed to turn heads wherever you walk."
  },
  {
    id: "4",
    name: "Neon Dreams Jacket",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
    isNew: true,
    isSale: false,
    rating: 4,
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Light up the night with this electrifying jacket! Features glow-in-the-dark accents and bold geometric patterns."
  },
  {
    id: "5",
    name: "Pop Art Print Dress",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop",
    isNew: false,
    isSale: true,
    rating: 5,
    colors: ["#FF1493", "#00CED1", "#FFD700", "#FF4500"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Turn heads with this stunning pop art dress! Perfect for parties, dates, or any time you want to make an artistic impression."
  },
  {
    id: "6",
    name: "Cartoon Character Bag",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    isNew: true,
    isSale: false,
    rating: 4,
    colors: ["#FF6B6B", "#4ECDC4"],
    sizes: ["One Size"],
    description: "Carry your essentials in style! This adorable bag features cartoon-inspired designs and plenty of space for all your daily needs."
  }
]

export const ProductGrid = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-pop-yellow/10">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Zap className="h-8 w-8 text-pop-orange bounce-fun" />
            <h2 className="font-comic text-5xl text-gray-800 comic-text">
              TRENDING NOW!
            </h2>
            <Sparkles className="h-8 w-8 text-pop-pink wiggle" />
          </div>
          
          <p className="font-hand text-xl text-gray-600 font-bold max-w-2xl mx-auto">
            Check out our hottest pop art fashion pieces that are flying off the shelves!
          </p>

          {/* Comic Speech Bubble */}
          <div className="relative mt-8 inline-block">
            <div className="bg-pop-cyan comic-border-pink p-4 rounded-2xl">
              <p className="font-comic text-lg text-white">
                LIMITED TIME OFFERS!
              </p>
            </div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-pop-cyan"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center">
          <Button variant="bounce" size="xl" className="min-w-[250px]">
            LOAD MORE AWESOME STUFF!
          </Button>
          
          <p className="font-hand text-gray-600 mt-4">
            Over 500+ amazing products waiting for you! 🎨
          </p>
        </div>
      </div>
    </section>
  )
}