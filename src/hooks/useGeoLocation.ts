import type { Coordinates } from "../types";

import { useEffect } from "react";

export default function useGeoLocation(
  setCoordinates: ({}: Coordinates) => void,
) {
  // Hook은 절대로 조건문/반복문/try/catch 안에 넣으면 안됨
  // Rules of Hooks 위반
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("위치 불러오기 실패", error);
      },
    );
  }, []);
}
