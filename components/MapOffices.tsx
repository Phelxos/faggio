import React, { useContext } from "react";
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
  name: string;
  coordinates: [number, number];
}

const markers: IMarker[] = [
  {
    markerOffset: 13,
    name: "köln",
    coordinates: [6.953101, 50.935173],
  },
  {
    markerOffset: -6,
    name: "dortmund",
    coordinates: [7.466, 51.51494],
  },
  {
    markerOffset: -5,
    name: "münchen",
    coordinates: [11.57549, 48.13743],
  },
  {
    markerOffset: -5,
    name: "hamburg",
    coordinates: [9.99302, 53.55073],
  },
  {
    markerOffset: 12,
    name: "frankfurt",
    coordinates: [8.68417, 50.11552],
  },
  {
    markerOffset: -5,
    name: "berlin",
    coordinates: [13.41053, 52.52437],
  },
];

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-regions.json";

export default function MapOffices() {
  const context = useContext(ContextTeams);
  function handleMarkerClick(office: TOfficesGerman) {
    const germanOfficeNameInLowerCase: TOfficesGerman =
      office.toLowerCase() as TOfficesGerman;
    context?.setDisplayedOffice(
      EOfficesGermanToEnglish[germanOfficeNameInLowerCase]
    );
  }

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
              fill="#0284c7"
              stroke="#0369a1"
              strokeOpacity={0.25}
              strokeWidth={0.125}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker
          key={name}
          coordinates={coordinates}
          onClick={() => handleMarkerClick(name as TOfficesGerman)}
        >
          <circle r={3} fill="#e1f5fe" stroke="#01579b" strokeWidth={0.5} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{
              fontSize: "8px",
              fill: "#e1f5fe",
              textTransform: "uppercase",
              fontWeight: `${
                name === EOfficesEnglishToGerman[context?.displayedOffice!]
                  ? "bold"
                  : "lighter"
              }`,
            }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}
