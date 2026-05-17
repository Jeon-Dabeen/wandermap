import { createContext } from "react";
import type { Coordinates } from "../types";

type PositionContextType = {
  currentPosition: Coordinates | undefined;
  setCurrentPosition: (coordinates: Coordinates) => void;
};

const PositionContext = createContext<PositionContextType | null>(null);
PositionContext.displayName = "PositionContext";
export default PositionContext;
