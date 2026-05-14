import useGeoLocation from "../hooks/useGeoLocation";

import RadarIcon from "@mui/icons-material/Radar";

export default function ResetPositionButton() {
  return (
    <button onClick={() => console.log("클릭")}>
      <RadarIcon />
    </button>
  );
}
