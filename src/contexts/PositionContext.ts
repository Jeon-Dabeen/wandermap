import { createContext } from "react";
import type { Coordinates } from "../types";

type PositionContextType = {
  changePosition: (coordinates: Coordinates) => void;
  currentPosition: Coordinates | undefined;
};

const PositionContext = createContext<PositionContextType | null>(null);
PositionContext.displayName = "PositionContext";
export default PositionContext;
