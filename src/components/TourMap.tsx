import type { Coordinates } from "../types";
import useGeoLocation from "../hooks/useGeoLocation";
import PositionContext from "../contexts/PositionContext";

import { useContext } from "react";
import { useKakaoLoader, Map } from "react-kakao-maps-sdk";

export default function TourMap() {
  const [loading, error] = useKakaoLoader({
    // VITE로 프로젝트를 빌드할 경우 환경변수 불어오는 방법
    appkey: import.meta.env.VITE_KAKAO_API_KEY,
    libraries: ["clusterer", "drawing", "services"],
  });

  const context = useContext(PositionContext);
  if (!context) throw new Error("Context 에러");

  const { changePosition, currentPosition } = context;
  useGeoLocation(changePosition);

  if (loading) return <div>로딩</div>;
  if (error) return <div>지도 불러오기 실패</div>;
  if (!currentPosition) return <div>위치 불러오기 싪패</div>;
  return (
    <Map
      center={currentPosition}
      level={3}
      style={{ width: "500px", height: "500px" }}
    />
  );
}
