import useGeoLocation from "../hooks/useGeoLocation";
import PositionContext from "../contexts/PositionContext";

import { useContext } from "react";
import RadarIcon from "@mui/icons-material/Radar";

export default function ResetPositionButton() {
  const context = useContext(PositionContext);
  if (!context) throw new Error("Context 에러");
  const { changePosition } = context;

  const resetToCurrentPosition = () => {
    useGeoLocation(changePosition);
  };
  return (
    <button onClick={resetToCurrentPosition}>
      <RadarIcon />
    </button>
  );
}
