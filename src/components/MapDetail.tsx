import PositionContext from "../contexts/PositionContext";
import type { Coordinates } from "../types";
import ResetPositionButton from "./ResetPositionButton";
import TourMap from "./TourMap";

import { useState } from "react";

export default function MapDetail() {
  const [currentPosition, setCurrentPosition] = useState<Coordinates>();

  const changePosition = (coordinates: Coordinates) => {
    setCurrentPosition(coordinates);
  };

  return (
    <div>
      <PositionContext.Provider value={{ changePosition, currentPosition }}>
        <TourMap />
        <ResetPositionButton />
      </PositionContext.Provider>
    </div>
  );
}
