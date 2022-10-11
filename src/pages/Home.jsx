import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Home() {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              projection={geo.projection}
              onClick={(geography) => {
                console.log(geography);
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}
