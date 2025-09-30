"use client"

import { Link } from "react-router-dom"
import { useState } from "react"

const RoomCard = ({ room }) => {
  const { images, description, pricePerNight, _id } = room
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl">
      <Link to={`/details/${_id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={images[currentImageIndex] || "/placeholder.svg"}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt={`${description} - Image ${currentImageIndex + 1}`}
          />

          {/* Carousel Navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white hover:scale-110 opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <svg className="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all hover:bg-white hover:scale-110 opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <svg className="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link to={`/details/${_id}`}>
          <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors hover:text-primary line-clamp-2">
            {description}
          </h3>
        </Link>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-primary">${pricePerNight}</span>
          <span className="text-sm text-muted-foreground">per night</span>
        </div>

        <Link
          to={`/review/${_id}`}
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border border-border bg-transparent text-foreground font-medium transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          See Reviews
        </Link>
      </div>
    </div>
  )
}

export default RoomCard
