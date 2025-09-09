import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart, Minus, Plus, Trash2, X } from "lucide-react"
import { useCart } from "@/hooks/useCart"
import { toast } from "sonner"

export const CartDrawer = () => {
  const { items, removeItem, updateQuantity, getTotalItems, getTotalPrice, isOpen, setIsOpen } = useCart()

  const handleQuantityChange = (id: string, size: string, color: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id, size, color)
      toast.success("Item removed from cart")
    } else {
      updateQuantity(id, size, color, newQuantity)
    }
  }

  const handleRemoveItem = (id: string, size: string, color: string) => {
    removeItem(id, size, color)
    toast.success("Item removed from cart")
  }

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

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="comic" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-pop-pink text-white font-bold h-6 w-6 rounded-full flex items-center justify-center text-xs">
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg comic-border bg-white">
        <SheetHeader>
          <SheetTitle className="font-comic text-2xl text-gray-800 flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-pop-orange" />
            YOUR CART
            <div className="w-6 h-6 bg-pop-pink rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{getTotalItems()}</span>
            </div>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-pop-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4 comic-border">
                  <ShoppingCart className="h-12 w-12 text-pop-cyan" />
                </div>
                <h3 className="font-comic text-xl text-gray-800 mb-2">CART IS EMPTY!</h3>
                <p className="font-hand text-gray-600 font-bold">
                  Add some awesome pop art pieces to get started! 🎨
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="bg-gray-50 rounded-lg p-4 comic-border">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden comic-border-pink bg-gradient-to-br from-pop-cyan/20 to-pop-pink/20">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <h4 className="font-hand text-lg font-bold text-gray-800 line-clamp-1">
                        {item.name}
                      </h4>
                      
                      <div className="flex items-center gap-3 text-sm">
                        <span className="font-hand text-gray-600">
                          <strong>Size:</strong> {item.size}
                        </span>
                        <span className="font-hand text-gray-600 flex items-center gap-1">
                          <strong>Color:</strong>
                          <div 
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: item.color }}
                          />
                          {colorNames[item.color] || item.color}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.id, item.size, item.color, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          
                          <span className="font-comic text-lg text-gray-800 min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.id, item.size, item.color, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        {/* Price and Remove */}
                        <div className="flex items-center gap-2">
                          <span className="font-comic text-lg text-pop-orange">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:bg-red-50"
                            onClick={() => handleRemoveItem(item.id, item.size, item.color)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="border-t pt-6 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between text-xl">
                <span className="font-comic text-gray-800">TOTAL:</span>
                <span className="font-comic text-2xl text-pop-orange">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>

              {/* Checkout Buttons */}
              <div className="space-y-3">
                <Button variant="pop" size="comic" className="w-full">
                  CHECKOUT NOW!
                </Button>
                <Button variant="popSecondary" size="lg" className="w-full">
                  VIEW FULL CART
                </Button>
              </div>

              {/* Shipping Info */}
              <div className="bg-pop-yellow/10 p-3 rounded-lg comic-border-orange text-center">
                <p className="font-hand text-sm text-gray-700 font-bold">
                  🚚 {getTotalPrice() >= 50 ? "Free shipping included!" : `Add $${(50 - getTotalPrice()).toFixed(2)} more for free shipping!`}
                </p>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}