import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  ZoomableGroup,
} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import 'flag-icons';

export const numberWithCommas = (x) => {
  if (!x) return '';
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const Map = () => {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const [content, setTooltipContent] = useState('');
  const contentList = useSelector((state) => state.Continent);

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  return (
    <div>
      <ComposableMap
        className="h-auto w-full cursor-pointer "
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
        data-tip="tooltip"
        onClick={(e) => { e.preventDefault(); }}
      >

        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Sphere stroke="#444" strokeWidth={0.35} />
          <Graticule stroke="#000" strokeWidth={0.3} />

          <Geographies geography="/features.json">
            {({ geographies }) => geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill=""
                onMouseEnter={() => {
                  setTooltipContent(contentList[`${geo.properties.name}`]?.All);
                }}
                onMouseLeave={() => {
                  setTooltipContent('');
                }}
                style={{
                  default: {
                    fill: '#000234',
                    outline: 'none',
                  },
                  hover: {
                    fill: '#EC4C8A',
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#E42',
                    outline: 'none',
                  },
                }}
              />
            ))}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip>
        {
          content
            ? (
              <>
                <span className={`'w-min   px-auto fi fi-${content?.abbreviation?.toLowerCase()}`} />
                <p className="text-lg">
                  Country:
                  {content?.country}
                </p>
                <p className="text-lg">
                  Confirmed:
                  {numberWithCommas(content?.confirmed)}
                </p>
                <p className="text-lg">
                  Death:
                  {numberWithCommas(content?.deaths)}
                </p>
                <p className="text-lg">
                  Population:
                  {numberWithCommas(content?.population)}
                </p>
              </>
            )
            : <p>No data available!!</p>
        }
      </ReactTooltip>
    </div>
  );
};

export default Map;
