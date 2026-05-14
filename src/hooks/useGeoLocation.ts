import { useEffect } from "react";
import type { Coordinates } from "../types";

export default function useGeoLocation(
  getCoordinates: ({ lat, lng }: Coordinates) => void,
) {
  // Hook은 절대로 조건문/반복문/try/catch 안에 넣으면 안됨
  // Rules of Hooks 위반
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("위치 불러오기 실패", error);
      },
    );
  }, [getCoordinates]);
}
