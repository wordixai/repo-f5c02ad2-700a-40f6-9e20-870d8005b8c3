import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Minus, Plus, ShoppingCart, Heart, Star, X } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import { toast } from "sonner"

interface Product {
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

interface QuickAddModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

const defaultSizes = ["XS", "S", "M", "L", "XL"]
const colorNames: { [key: string]: string } = {
  "#FF6B6B": "Hot Pink",
  "#4ECDC4": "Turquoise", 
  "#45B7D1": "Sky Blue",
  "#FFA07A": "Coral",
  "#FF1493": "Deep Pink",
  "#00CED1": "Dark Turquoise",
  "#FFD700": "Gold",
  "#FF4500": "Orange Red",
  "#ADFF2F": "Green Yellow"
}

export const QuickAddModal = ({ product, isOpen, onClose }: QuickAddModalProps) => {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  
  const { addItem } = useCart()

  if (!product) return null

  const sizes = product.sizes || defaultSizes
  const colors = product.colors || []

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size!", {
        description: "Size selection is required to add to cart"
      })
      return
    }
    
    if (!selectedColor) {
      toast.error("Please select a color!", {
        description: "Color selection is required to add to cart"
      })
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity
    })

    toast.success("Added to cart! 🎉", {
      description: `${product.name} (${selectedSize}, ${colorNames[selectedColor] || selectedColor})`
    })

    onClose()
    resetForm()
  }

  const resetForm = () => {
    setSelectedSize("")
    setSelectedColor("")
    setQuantity(1)
  }

  const handleClose = () => {
    onClose()
    resetForm()
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist! ❤️")
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto comic-border bg-white">
        <DialogHeader>
          <DialogTitle className="font-comic text-2xl text-gray-800 flex items-center gap-2">
            QUICK ADD
            <div className="w-6 h-6 bg-pop-orange rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden comic-border-pink bg-gradient-to-br from-pop-cyan/20 to-pop-pink/20">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-pop-lime text-black font-comic comic-border">
                    NEW!
                  </Badge>
                )}
                {product.isSale && (
                  <Badge className="bg-pop-pink text-white font-comic comic-border">
                    SALE!
                  </Badge>
                )}
              </div>

              {/* Wishlist Button */}
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full comic-border"
                onClick={handleWishlist}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'text-pop-pink fill-current' : 'text-gray-700'}`} />
              </Button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < product.rating ? 'text-pop-yellow fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-hand">({product.rating}.0)</span>
            </div>

            {/* Product Name */}
            <h2 className="font-hand text-2xl font-bold text-gray-800">
              {product.name}
            </h2>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="font-comic text-3xl text-pop-orange">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="font-hand text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.isSale && product.originalPrice && (
                <Badge className="bg-pop-pink text-white font-comic">
                  SAVE ${(product.originalPrice - product.price).toFixed(2)}
                </Badge>
              )}
            </div>

            {/* Description */}
            <p className="font-hand text-gray-600 font-bold">
              {product.description || "Express yourself with this amazing pop art piece! Perfect for making a bold statement wherever you go."}
            </p>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="font-comic text-lg text-gray-800">SIZE:</h3>
              <div className="grid grid-cols-5 gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "pop" : "outline"}
                    size="sm"
                    className={`font-comic ${selectedSize === size ? '' : 'hover:bg-pop-orange/10'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="font-comic text-lg text-gray-800">COLOR:</h3>
              <div className="flex flex-wrap gap-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-full border-4 transition-all duration-200 ${
                      selectedColor === color 
                        ? 'border-gray-800 scale-110' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                    title={colorNames[color] || color}
                  />
                ))}
              </div>
              {selectedColor && (
                <p className="font-hand text-sm text-gray-600">
                  Selected: <span className="font-bold">{colorNames[selectedColor] || selectedColor}</span>
                </p>
              )}
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-comic text-lg text-gray-800">QUANTITY:</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="comic-border"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                
                <div className="w-16 h-10 bg-gray-100 rounded-lg flex items-center justify-center comic-border">
                  <span className="font-comic text-lg text-gray-800">{quantity}</span>
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="comic-border"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button 
              variant="pop" 
              size="comic" 
              className="w-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              ADD TO CART - ${(product.price * quantity).toFixed(2)}
            </Button>

            {/* Additional Info */}
            <div className="bg-pop-yellow/10 p-4 rounded-lg comic-border-orange">
              <p className="font-hand text-sm text-gray-700 font-bold">
                🚚 <strong>Free shipping</strong> on orders over $50<br/>
                💝 <strong>Free returns</strong> within 30 days<br/>
                ⚡ <strong>Fast delivery</strong> in 2-3 business days
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}