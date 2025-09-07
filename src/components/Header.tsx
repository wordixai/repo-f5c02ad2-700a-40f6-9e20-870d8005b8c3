import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Search, Menu, Zap, Star } from "lucide-react"

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full pop-gradient comic-dots-orange">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Zap className="h-8 w-8 text-pop-yellow wiggle" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-pop-cyan rounded-full"></div>
            </div>
            <h1 className="font-comic text-3xl text-white comic-outline">
              POP SHOP
            </h1>
            <Star className="h-6 w-6 text-pop-yellow bounce-fun" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-hand text-white text-lg hover:text-pop-yellow transition-colors font-bold">
              NEW!
            </a>
            <a href="#" className="font-hand text-white text-lg hover:text-pop-yellow transition-colors font-bold">
              CLOTHING
            </a>
            <a href="#" className="font-hand text-white text-lg hover:text-pop-yellow transition-colors font-bold">
              ART
            </a>
            <a href="#" className="font-hand text-white text-lg hover:text-pop-yellow transition-colors font-bold">
              SALE!
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="comic" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 bg-pop-pink text-white font-bold h-6 w-6 rounded-full flex items-center justify-center text-xs">
                3
              </Badge>
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/20">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}