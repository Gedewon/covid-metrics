import React, { useState } from 'react'
import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule,
    Sphere,
    ZoomableGroup,
  } from "react-simple-maps"
import ReactTooltip from "react-tooltip";

const Map = () => {
    const [position , setPosition] =useState({coordinates:[0,0],zoom:1})
    const [content,setTooltipContent] = useState('')
    
    const handleMoveEnd = (position)=>{
        setPosition(position);
    }
    
  return (
    <div>
      <ComposableMap  className="h-[400px] w-full cursor-pointer"
        projectionConfig={{
            rotate:[-10,0,0],
            scale:147
        }}
        data-tip="tooltip">

            <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
        
            >
                <Sphere stroke='#000' strokeWidth={0.3} />
                <Graticule stroke='#000' strokeWidth={0.3} />


        <Geographies geography="/features.json" >
          {({geographies}) => geographies.map(geo =>
            <Geography 
         
            key={geo.rsmKey}
            geography={geo}
            fill=""
            onMouseEnter={() => {
                setTooltipContent(`${geo.properties.name}`);
            }}
            onMouseLeave={() => {
                setTooltipContent("");
            }}
            style={{
                default: {
                    fill: "#D6D6DA",
                    outline: "none"
                },
                hover: {
                    fill: "#EC4C8A",
                    outline: "none"
                },
                pressed: {
                    fill: "#E42",
                    outline: "none"
                }
            }}
            
            />
            )}
        </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip >{content}</ReactTooltip>
    </div>
  )
}

export default Map