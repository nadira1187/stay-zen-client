"use client"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()

const Banner = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Parallax */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('https://i.ibb.co/Df8sT8G/banner-slider.jpg')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="bg-red-200/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-900 mb-6">
              Where Every Stay is a<span className="text-red-700 block mt-2">Special Occasion</span>
            </h1>
            <p className="text-lg md:text-xl text-red-800 mb-8 max-w-2xl mx-auto leading-relaxed">
              Immerse yourself in a world of luxury and convenience at our exquisite hotel. Experience the perfect blend
              of comfort and style during your stay with us.
            </p>
            <Link
              to="/login"
              className="inline-block px-8 py-4 bg-red-900 text-white rounded-xl hover:bg-red-800 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image Gallery */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://i.ibb.co/47ft2yC/single-gallery-image-1.jpg"
                    alt="Luxury Room"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                  <img
                    src="https://i.ibb.co/wwgZCGr/rooms-list-image-15.jpg"
                    alt="Hotel Amenities"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="pt-8">
                  <img
                    src="https://i.ibb.co/m9bQzDN/rooms-list-image-16.jpg"
                    alt="Hotel Interior"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-red-700 font-medium text-lg">Welcome to StayZen</p>
                <h2 className="text-4xl md:text-5xl font-bold text-red-900">
                  A New Vision of
                  <span className="text-red-700 block">Luxury</span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Where the art of hospitality meets the lap of luxury. Nestled in the heart of the ocean, our hotel
                offers a sanctuary of comfort and elegance for travelers seeking a remarkable stay.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                  <span className="text-sm text-gray-600">Luxury Accommodations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                  <span className="text-sm text-gray-600">Premium Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                  <span className="text-sm text-gray-600">Ocean Views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section with Parallax */}
      <section
        className="relative py-32 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('https://i.ibb.co/8xjxJxL/img.jpg')",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Special Offers
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                src="https://i.ibb.co/P66bKqj/promotional.jpg"
                alt="Special Offer"
              />
            </div>

            <div className="bg-red-200/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">
                Stay & Dine Special
                <span className="text-red-700 block text-2xl md:text-3xl mt-2">Now only 50% off</span>
              </h3>
              <h4 className="text-xl font-medium text-red-800 mb-6">Deluxe hotel room & meal for two</h4>
              <p className="text-red-800 leading-relaxed mb-8">
                Introducing our Stay & Dine Special, a perfect combination of luxury and culinary delight. Treat
                yourself and a loved one to an unforgettable experience with our deluxe hotel room and exquisite meal
                for two.
              </p>
              <button className="px-8 py-4 bg-red-900 text-white rounded-xl hover:bg-red-800 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
