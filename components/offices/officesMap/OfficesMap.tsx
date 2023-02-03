import React from "react";
import useOffice from "../../../stores/SOffices";
import {
  EOfficesEnglishToGerman,
  TOfficeCityEnglish,
} from "../../../typings/types/TOfficeCity";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

interface IMarker {
  markerOffset: {
    x: number;
    y: number;
  };
  name: TOfficeCityEnglish;
  coordinates: [number, number];
}

const markers: IMarker[] = [
  {
    markerOffset: { x: 1, y: 13 },
    name: "cologne",
    coordinates: [6.953101, 50.935173],
  },
  {
    markerOffset: { x: 0, y: -6 },
    name: "dortmund",
    coordinates: [7.466, 51.51494],
  },
  {
    markerOffset: { x: 0, y: -6 },
    name: "munich",
    coordinates: [11.57549, 48.13743],
  },
  {
    markerOffset: { x: 0, y: -6 },
    name: "hamburg",
    coordinates: [9.99302, 53.55073],
  },
  {
    markerOffset: { x: 0, y: 12 },
    name: "frankfurt",
    coordinates: [8.68417, 50.11552],
  },
  {
    markerOffset: { x: 0, y: -6 },
    name: "berlin",
    coordinates: [13.41053, 52.52437],
  },
  {
    markerOffset: { x: 0, y: 12 },
    name: "leipzig",
    coordinates: [12.360103, 51.340199],
  },
  {
    markerOffset: { x: 0, y: 11 },
    name: "bremen",
    coordinates: [8.806422, 53.073635],
  },
];

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json";

export default function MapOffices() {
  const globallySelectedOfficeName = useOffice(
    (s) => s.globallySelectedOfficeName
  );
  const setGloballySelectedOfficeName = useOffice(
    (s) => s.setGloballySelectedOfficeName
  );
  const setGloballySelectedOffice = useOffice(
    (s) => s.setGloballySelectedOffice
  );

  function handleMarkerClick(office: TOfficeCityEnglish) {
    const officeNameInLowerCase: TOfficeCityEnglish =
      office.toLowerCase() as TOfficeCityEnglish;
    setGloballySelectedOfficeName(officeNameInLowerCase);
    setGloballySelectedOffice(officeNameInLowerCase);
  }

  function isCurrentlyDisplayedOffice(chosenOffice: TOfficeCityEnglish) {
    return chosenOffice === globallySelectedOfficeName!;
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
              fill="#d97706"
              stroke="#d97706"
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
            fill={`${isCurrentlyDisplayedOffice(name) ? "#fef3c7" : "#92400e"}`}
            stroke={`${
              isCurrentlyDisplayedOffice(name) ? "#92400e" : "#fef3c7"
            }`}
            strokeWidth={0.5}
            className={`${
              !isCurrentlyDisplayedOffice(name) ? "animate-pulse" : ""
            }`}
          />
          <text
            textAnchor="middle"
            x={markerOffset.x}
            y={markerOffset.y}
            style={{
              fontSize: `${isCurrentlyDisplayedOffice(name) ? "8px" : "5px"}`,
              fill: "#fef3c7",
              textTransform: "uppercase",
              fontWeight: `${
                isCurrentlyDisplayedOffice(name) ? "bold" : "300"
              }`,
              opacity: `${isCurrentlyDisplayedOffice(name) ? "1" : "0.5"}`,
              transition: "all 0.25s",
            }}
          >
            {EOfficesEnglishToGerman[name]}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}
