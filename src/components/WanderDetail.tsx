import PositionContext from "../contexts/PositionContext";
import InfosContext from "../contexts/InfosContext";
import MapDetail from "./MapDetail";
import type { ApiResponse, Coordinates } from "../types";

import mock from "../mock/mock.json";

import { useState } from "react";
import useFetch from "../hooks/useFetch";
import useGeoLocation from "../hooks/useGeoLocation";

export default function WanderDetail() {
  const [currentPosition, setCurrentPosition] = useState<Coordinates>();
  useGeoLocation(setCurrentPosition);

  // const infos = useFetch(currentPosition!);
  const infos: ApiResponse[] = mock.item;
  console.log(infos);

  return (
    <div>
      <header>Wandermap</header>
      <main>
        <PositionContext.Provider
          value={{ currentPosition, setCurrentPosition }}
        >
          <InfosContext.Provider value={{ infos }}>
            <MapDetail />
          </InfosContext.Provider>
        </PositionContext.Provider>
      </main>
      <footer>&copy;다빈</footer>
    </div>
  );
}
