import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

interface IMarker {
  markerOffset: number;
  name: string;
  coordinates: [number, number];
}

const markers: IMarker[] = [
  {
    markerOffset: -20,
    name: "Köln",
    coordinates: [6.953101, 50.935173],
  },
  {
    markerOffset: -20,
    name: "Dortmund",
    coordinates: [7.466, 51.51494],
  },
  {
    markerOffset: -20,
    name: "München",
    coordinates: [11.57549, 48.13743],
  },
  {
    markerOffset: -20,
    name: "Hamburg",
    coordinates: [9.99302, 53.55073],
  },
  {
    markerOffset: -20,
    name: "Frankfurt",
    coordinates: [8.68417, 50.11552],
  },
  {
    markerOffset: -20,
    name: "Berlin",
    coordinates: [13.41053, 52.52437],
  },
];

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json";

export default function MapOffices() {
  return (
    <ComposableMap
      width={120}
      height={200}
      projection="geoMercator"
      projectionConfig={{
        rotate: [-10.5, -51.0, 0],
        scale: 1000,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#9998A3"
              stroke="white"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{
              fontSize: "8px",
              fill: "skyblue",
            }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}
