import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { QuickAddModal } from "@/components/QuickAddModal"
import { useCart } from "@/hooks/useCart"
import { toast } from "sonner"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  isNew?: boolean
  isSale?: boolean
  rating: number
  colors: string[]
  sizes?: string[]
  description?: string
}

export const ProductCard = ({ 
  id,
  name, 
  price, 
  originalPrice, 
  image, 
  isNew, 
  isSale, 
  rating,
  colors,
  sizes,
  description
}: ProductCardProps) => {
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addItem } = useCart()

  const product = {
    id,
    name,
    price,
    originalPrice,
    image,
    isNew,
    isSale,
    rating,
    colors,
    sizes,
    description
  }

  const handleQuickAdd = () => {
    setIsQuickAddOpen(true)
  }

  const handleAddToCart = () => {
    // Quick add with default options
    addItem({
      id,
      name,
      price,
      image,
      size: sizes?.[0] || "M",
      color: colors[0],
      quantity: 1
    })

    toast.success("Added to cart! 🎉", {
      description: `${name} (Default size & color)`
    })
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist! ❤️")
  }

  return (
    <>
      <div className="group relative">
        {/* Comic Frame Border */}
        <div className="bg-white comic-border-orange rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-1">
          
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-pop-cyan/20 to-pop-pink/20">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {isNew && (
                <Badge className="bg-pop-lime text-black font-comic comic-border">
                  NEW!
                </Badge>
              )}
              {isSale && (
                <Badge className="bg-pop-pink text-white font-comic comic-border">
                  SALE!
                </Badge>
              )}
            </div>

            {/* Wishlist Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 rounded-full comic-border"
              onClick={handleWishlist}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'text-pop-pink fill-current' : ''}`} />
            </Button>

            {/* Quick Add Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex flex-col gap-2">
                <Button variant="pop" size="lg" className="font-comic" onClick={handleQuickAdd}>
                  QUICK ADD
                  <ShoppingCart className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="comic" size="sm" className="font-comic text-sm" onClick={handleAddToCart}>
                  ADD WITH DEFAULTS
                </Button>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4 space-y-3">
            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < rating ? 'text-pop-yellow fill-current' : 'text-gray-300'}`} 
                />
              ))}
              <span className="text-sm text-gray-600 ml-1">({rating}.0)</span>
            </div>

            {/* Product Name */}
            <h3 className="font-hand text-lg font-bold text-gray-800 line-clamp-2">
              {name}
            </h3>

            {/* Colors */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 font-hand">Colors:</span>
              <div className="flex gap-1">
                {colors.slice(0, 4).map((color, index) => (
                  <div 
                    key={index}
                    className="w-5 h-5 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
                {colors.length > 4 && (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center">
                    <span className="text-xs text-gray-600">+{colors.length - 4}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-comic text-2xl text-pop-orange">
                  ${price}
                </span>
                {originalPrice && (
                  <span className="font-hand text-lg text-gray-500 line-through">
                    ${originalPrice}
                  </span>
                )}
              </div>
              
              <Button variant="popSecondary" size="sm" className="font-comic" onClick={handleQuickAdd}>
                SELECT OPTIONS
              </Button>
            </div>
          </div>
        </div>

        {/* Pop Art Explosion Effect */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-pop-yellow rounded-full comic-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="font-comic text-xs text-black">POW!</span>
        </div>
      </div>

      {/* Quick Add Modal */}
      <QuickAddModal 
        product={product}
        isOpen={isQuickAddOpen}
        onClose={() => setIsQuickAddOpen(false)}
      />
    </>
  )
}