"use client"

import { useState } from "react"
import { Map, Marker } from "pigeon-maps"

export function MyMap() {
  const [hue, setHue] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Find Us on Map</h2>
          <p className="text-lg text-red-700 max-w-2xl mx-auto">
            Located in the heart of paradise, StayZen offers easy access to all the attractions and amenities you need.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <Map height={400} defaultCenter={[21.4512, 92.0085]} defaultZoom={11}>
            <Marker width={50} anchor={[21.4512, 92.0085]} color="#991b1b" onClick={() => setHue(hue + 20)} />
          </Map>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-red-50 px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <span className="text-red-800 font-medium">StayZen Hotel Location</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyMap
