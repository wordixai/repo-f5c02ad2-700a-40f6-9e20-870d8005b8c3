import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Gift, Sparkles } from "lucide-react"

export const Newsletter = () => {
  return (
    <section className="py-16 pop-gradient-reverse relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 comic-dots opacity-20"></div>
      <div className="absolute top-10 left-10 w-16 h-16 bg-pop-yellow rounded-full comic-border opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-pop-cyan rounded-full comic-border opacity-60"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pop-lime rounded-full comic-border opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Mail className="h-10 w-10 text-white bounce-fun" />
            <h2 className="font-comic text-5xl text-white comic-outline">
              JOIN THE POP SQUAD!
            </h2>
            <Gift className="h-10 w-10 text-white wiggle" />
          </div>

          <p className="font-hand text-xl text-white font-bold mb-8 max-w-2xl mx-auto">
            Get exclusive access to new drops, special discounts, and pop art inspiration delivered straight to your inbox!
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 comic-border">
              <Sparkles className="h-6 w-6 text-pop-yellow mx-auto mb-2" />
              <p className="font-comic text-white text-sm">EXCLUSIVE PREVIEWS</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 comic-border">
              <Gift className="h-6 w-6 text-pop-cyan mx-auto mb-2" />
              <p className="font-comic text-white text-sm">SPECIAL DISCOUNTS</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 comic-border">
              <Mail className="h-6 w-6 text-pop-lime mx-auto mb-2" />
              <p className="font-comic text-white text-sm">POP ART TIPS</p>
            </div>
          </div>

          {/* Signup Form */}
          <div className="max-w-md mx-auto">
            <div className="bg-white comic-border-orange rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email..."
                  className="flex-1 font-hand text-lg border-2 border-gray-300 rounded-lg focus:border-pop-orange"
                />
                <Button variant="pop" size="lg" className="font-comic whitespace-nowrap">
                  SIGN ME UP!
                </Button>
              </div>
              
              <p className="font-hand text-sm text-gray-600 mt-3">
                ✨ Get 20% off your first order when you subscribe!
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pop-yellow rounded-full"></div>
              <span className="font-hand text-sm">No spam, ever!</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pop-cyan rounded-full"></div>
              <span className="font-hand text-sm">Unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pop-lime rounded-full"></div>
              <span className="font-hand text-sm">10k+ happy subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}