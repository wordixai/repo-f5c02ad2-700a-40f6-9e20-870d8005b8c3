import { Truck, Shield, Zap, Heart, Star, Gift } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "FREE SHIPPING",
    description: "On orders over $50",
    color: "text-pop-orange",
    bgColor: "bg-pop-orange/10"
  },
  {
    icon: Shield,
    title: "SECURE PAYMENT",
    description: "100% safe & secure",
    color: "text-pop-pink",
    bgColor: "bg-pop-pink/10"
  },
  {
    icon: Zap,
    title: "FAST DELIVERY",
    description: "2-3 business days",
    color: "text-pop-cyan",
    bgColor: "bg-pop-cyan/10"
  },
  {
    icon: Heart,
    title: "LOVE GUARANTEE",
    description: "30-day returns",
    color: "text-pop-purple",
    bgColor: "bg-pop-purple/10"
  },
  {
    icon: Star,
    title: "5-STAR RATED",
    description: "By 10k+ customers",
    color: "text-pop-yellow",
    bgColor: "bg-pop-yellow/10"
  },
  {
    icon: Gift,
    title: "SURPRISE GIFTS",
    description: "With every order",
    color: "text-pop-lime",
    bgColor: "bg-pop-lime/10"
  }
]

export const Features = () => {
  return (
    <section className="py-16 bg-white comic-dots-cyan">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-comic text-4xl text-gray-800 mb-4">
            WHY CHOOSE POP SHOP?
          </h2>
          <p className="font-hand text-lg text-gray-600 font-bold">
            We're not just another store - we're your pop art fashion adventure!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="group text-center p-6 rounded-2xl comic-border hover:scale-105 transform transition-all duration-300 bg-white"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} mb-4 group-hover:bounce-fun`}>
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>

                {/* Title */}
                <h3 className="font-comic text-lg text-gray-800 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-hand text-sm text-gray-600 font-bold">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-pop-pink rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs">!</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-block bg-pop-gradient p-6 rounded-3xl comic-border-orange">
            <p className="font-bubble text-2xl text-white mb-2">
              Ready to Pop?
            </p>
            <p className="font-hand text-white font-bold">
              Join thousands of happy customers! 🎉
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}