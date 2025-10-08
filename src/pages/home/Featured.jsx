import { Link } from "react-router-dom"

const Featured = () => {
  const features = [
    {
      title: "Luxury Suites",
      description: "Spacious rooms with premium amenities and stunning ocean views",
      image: "https://i.ibb.co/47ft2yC/single-gallery-image-1.jpg",
      icon: "🏨",
    },
    {
      title: "Fine Dining",
      description: "World-class cuisine prepared by renowned chefs",
      image: "https://i.ibb.co/wwgZCGr/rooms-list-image-15.jpg",
      icon: "🍽️",
    },
    {
      title: "Spa & Wellness",
      description: "Rejuvenate your body and mind with our premium spa services",
      image: "https://i.ibb.co/m9bQzDN/rooms-list-image-16.jpg",
      icon: "🧘",
    },
  ]

  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Featured Experiences</h2>
          <p className="text-lg text-red-700 max-w-2xl mx-auto">
            Discover the exceptional amenities and services that make StayZen your perfect getaway destination
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <Link to="/rooms" className="mt-4 text-red-700 font-medium hover:text-red-600 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
