import { Button } from "@/components/ui/button"
import { Sparkles, Heart } from "lucide-react"

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pop-gradient-triple">
      {/* Background Elements */}
      <div className="absolute inset-0 comic-dots opacity-30"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-pop-yellow rounded-full comic-border opacity-80"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-pop-pink rounded-full comic-border opacity-80"></div>
      <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-pop-cyan rounded-full comic-border opacity-80"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-pop-lime rounded-full comic-border opacity-80"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="relative mb-8">
            <h1 className="font-comic text-6xl md:text-8xl text-white comic-text mb-4">
              BOOM!
            </h1>
            <p className="font-bubble text-3xl md:text-4xl text-white mb-2">
              Pop Art Fashion
            </p>
            <p className="font-hand text-xl md:text-2xl text-white/90 font-bold">
              Express Yourself in Color!
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Sparkles className="h-8 w-8 text-pop-yellow bounce-fun" />
            <div className="w-16 h-1 bg-white rounded-full"></div>
            <Heart className="h-8 w-8 text-pop-pink wiggle" />
            <div className="w-16 h-1 bg-white rounded-full"></div>
            <Sparkles className="h-8 w-8 text-pop-cyan bounce-fun" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="pop" size="comic" className="min-w-[200px]">
              SHOP NOW!
            </Button>
            <Button variant="comic" size="comic" className="min-w-[200px]">
              NEW ARRIVALS
            </Button>
          </div>

          {/* Speech Bubble */}
          <div className="relative mt-12">
            <div className="inline-block bg-white comic-border-pink p-6 rounded-3xl max-w-md">
              <p className="font-hand text-lg text-gray-800 font-bold">
                "OMG! These designs are totally RAD!" 
              </p>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-white"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[24px] border-r-[24px] border-t-[24px] border-l-transparent border-r-transparent border-t-pop-pink"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}