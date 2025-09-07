import { Button } from "@/components/ui/button"
import { Heart, Instagram, Twitter, Facebook, Youtube, Zap } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 comic-dots-orange opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-8 w-8 text-pop-orange wiggle" />
              <h3 className="font-comic text-2xl text-white">POP SHOP</h3>
            </div>
            <p className="font-hand text-gray-300 mb-6 font-bold">
              Your ultimate destination for pop art fashion and streetwear that makes a statement!
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-pop-pink hover:bg-pop-pink/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-pop-cyan hover:bg-pop-cyan/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-pop-orange hover:bg-pop-orange/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-pop-yellow hover:bg-pop-yellow/20">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-comic text-lg text-pop-orange mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['New Arrivals', 'Best Sellers', 'Sale Items', 'Gift Cards', 'Size Guide'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-hand text-gray-300 hover:text-pop-pink transition-colors font-bold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-comic text-lg text-pop-cyan mb-4">CATEGORIES</h4>
            <ul className="space-y-2">
              {['T-Shirts', 'Hoodies', 'Dresses', 'Sneakers', 'Accessories'].map((category) => (
                <li key={category}>
                  <a href="#" className="font-hand text-gray-300 hover:text-pop-cyan transition-colors font-bold">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-comic text-lg text-pop-lime mb-4">HELP & SUPPORT</h4>
            <ul className="space-y-2">
              {['Contact Us', 'FAQ', 'Shipping Info', 'Returns', 'Track Order'].map((help) => (
                <li key={help}>
                  <a href="#" className="font-hand text-gray-300 hover:text-pop-lime transition-colors font-bold">
                    {help}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <p className="font-hand text-gray-400 font-bold">
                © 2024 Pop Shop. Made with
              </p>
              <Heart className="h-4 w-4 text-pop-pink fill-current" />
              <p className="font-hand text-gray-400 font-bold">
                for pop art lovers everywhere!
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              <a href="#" className="font-hand text-gray-400 hover:text-white transition-colors text-sm font-bold">
                Privacy Policy
              </a>
              <a href="#" className="font-hand text-gray-400 hover:text-white transition-colors text-sm font-bold">
                Terms of Service
              </a>
              <a href="#" className="font-hand text-gray-400 hover:text-white transition-colors text-sm font-bold">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}