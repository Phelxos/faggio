import React, { useContext, useState } from "react";
import { ContextTeams } from "./contexts/ContextTeams";
import {
  EOfficesGermanToEnglish,
  EOfficesEnglishToGerman,
  TOfficesGerman,
} from "../typings/types/TOffices";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

interface IMarker {
  markerOffset: number;
  name: TOfficesGerman;
  coordinates: [number, number];
}

const markers: IMarker[] = [
  {
    markerOffset: 12,
    name: "köln",
    coordinates: [6.953101, 50.935173],
  },
  {
    markerOffset: -6,
    name: "dortmund",
    coordinates: [7.466, 51.51494],
  },
  {
    markerOffset: -6,
    name: "münchen",
    coordinates: [11.57549, 48.13743],
  },
  {
    markerOffset: -6,
    name: "hamburg",
    coordinates: [9.99302, 53.55073],
  },
  {
    markerOffset: 12,
    name: "frankfurt",
    coordinates: [8.68417, 50.11552],
  },
  {
    markerOffset: -6,
    name: "berlin",
    coordinates: [13.41053, 52.52437],
  },
  {
    markerOffset: 12,
    name: "leipzig",
    coordinates: [12.360103, 51.340199],
  },
  {
    markerOffset: 11,
    name: "bremen",
    coordinates: [8.806422, 53.073635],
  },
];

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json";

export default function MapOffices() {
  const context = useContext(ContextTeams);
  const [dynClassCircle, setDynClassCircle] = useState("");

  function handleMarkerClick(office: TOfficesGerman) {
    const germanOfficeNameInLowerCase: TOfficesGerman =
      office.toLowerCase() as TOfficesGerman;
    context?.setDisplayedOffice(
      EOfficesGermanToEnglish[germanOfficeNameInLowerCase]
    );
  }

  function isCurrentlyDisplayedOffice(chosenOffice: TOfficesGerman) {
    return chosenOffice === EOfficesEnglishToGerman[context?.displayedOffice!];
  }

  return (
    <ComposableMap
      width={120}
      height={160}
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
              fill="#0284c7"
              stroke="#0284c7"
              className="outline-none"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker
          key={name}
          coordinates={coordinates}
          onClick={() => handleMarkerClick(name)}
          style={{
            default: { fill: "#06F" },
            hover: { fontSize: "16px" },
          }}
        >
          <circle
            r={4}
            fill={`${isCurrentlyDisplayedOffice(name) ? "#7dd3fc" : "#0369a1"}`}
            stroke="#01579b"
            strokeWidth={0.5}
            className={`${
              !isCurrentlyDisplayedOffice(name) ? "animate-pulse" : ""
            }`}
          />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{
              fontSize: "6px",
              fill: "#e1f5fe",
              textTransform: "uppercase",
              fontWeight: `${
                isCurrentlyDisplayedOffice(name) ? "bold" : "300"
              }`,
              opacity: `${isCurrentlyDisplayedOffice(name) ? "1" : "0.5"}`,
            }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}
