import  { useState } from "react"
import { Map, Marker } from "pigeon-maps"
//import {HiMapPin} from 'react-icons/hi2'

export function MyMap() {
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`

  return (
    <div>
      <h2 className="text-4xl text-red-900 text-center my-5 font-mono font-bold">Find us on map</h2>
      <Map height={300} defaultCenter={[21.4512, 92.0085]} defaultZoom={11}>
      <Marker 
        width={50}
        anchor={[21.4512,92.0085]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      />
      <Marker 
        width={50}
        anchor={[21.4512, 92.0085]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      >
          {/* <CustomIcon /> */}
          {/* <HiMapPin></HiMapPin> */}
      </Marker>
    </Map>
    </div>
    
  )
}