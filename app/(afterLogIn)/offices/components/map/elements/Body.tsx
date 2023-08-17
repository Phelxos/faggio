"use client";

import { FC } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import useOffice from "../../../../../../stores/SOffices";
import {
  EOfficesEnglishToGerman,
  TOfficeCityEnglish,
} from "../../../../../../typings/types/TOfficeCity";

interface IMarker {
  markerOffset: {
    x: number;
    y: number;
  };
  name: TOfficeCityEnglish;
  officeId: number;
  coordinates: [number, number];
}

const markers: IMarker[] = [
  {
    markerOffset: { x: 1, y: 13 },
    name: "cologne",
    officeId: 14,
    coordinates: [6.953101, 50.935173],
  },
  {
    markerOffset: { x: 0, y: -6 },
    name: "dortmund",
    officeId: 10,
    coordinates: [7.466, 51.51494],
  },
  {
    markerOffset: { x: 0, y: -6 },
    name: "munich",
    officeId: 16,
    coordinates: [11.57549, 48.13743],
  },
  {
    markerOffset: { x: 0, y: -6 },
    name: "hamburg",
    officeId: 11,
    coordinates: [9.99302, 53.55073],
  },
  {
    markerOffset: { x: 0, y: 12 },
    name: "frankfurt",
    officeId: 17,
    coordinates: [8.68417, 50.11552],
  },
  {
    markerOffset: { x: 0, y: -6 },
    name: "berlin",
    officeId: 13,
    coordinates: [13.41053, 52.52437],
  },
  {
    markerOffset: { x: 0, y: 12 },
    name: "leipzig",
    officeId: 15,
    coordinates: [12.360103, 51.340199],
  },
  {
    markerOffset: { x: 0, y: 11 },
    name: "bremen",
    officeId: 12,
    coordinates: [8.806422, 53.073635],
  },
];

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json";

const Body: FC = () => {
  const globallySelectedOfficeId = useOffice((s) => s.globallySelectedOfficeId);
  const setGloballySelectedOfficeId = useOffice(
    (s) => s.setGloballySelectedOfficeId
  );
  const setGloballySelectedOffice = useOffice(
    (s) => s.setGloballySelectedOffice
  );

  function handleMarkerClick(officeId: number) {
    setGloballySelectedOfficeId(officeId);
    setGloballySelectedOffice(officeId);
  }

  function isCurrentlyDisplayedOffice(chosenOfficeId: number) {
    return chosenOfficeId === globallySelectedOfficeId;
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
      {markers.map(({ name, officeId, coordinates, markerOffset }) => (
        <Marker
          key={name}
          coordinates={coordinates}
          onClick={() => handleMarkerClick(officeId)}
          style={{
            default: { fill: "#06F" },
            hover: { fontSize: "16px", cursor: "pointer" },
          }}
        >
          <circle
            r={4}
            fill={`${
              isCurrentlyDisplayedOffice(officeId) ? "#fef3c7" : "#92400e"
            }`}
            stroke={`${
              isCurrentlyDisplayedOffice(officeId) ? "#92400e" : "#fef3c7"
            }`}
            strokeWidth={0.5}
            className={`${
              !isCurrentlyDisplayedOffice(officeId) ? "animate-pulse" : ""
            }`}
          />
          <text
            textAnchor="middle"
            x={markerOffset.x}
            y={markerOffset.y}
            style={{
              fontSize: `${
                isCurrentlyDisplayedOffice(officeId) ? "8px" : "5px"
              }`,
              fill: "#fef3c7",
              textTransform: "uppercase",
              fontWeight: `${
                isCurrentlyDisplayedOffice(officeId) ? "bold" : "300"
              }`,
              opacity: `${isCurrentlyDisplayedOffice(officeId) ? "1" : "0.5"}`,
              transition: "all 0.25s",
            }}
          >
            {EOfficesEnglishToGerman[name]}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default Body;
