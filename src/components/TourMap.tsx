import useGeoLocation from "../hooks/useGeoLocation";
import useFetch from "../hooks/useFetch";
import PositionContext from "../contexts/PositionContext";
import type { Positions } from "../types";
import { ENV } from "../env";

import { useContext, useEffect, useRef, useState } from "react";
import {
  useKakaoLoader,
  Map,
  MapMarker,
  ZoomControl,
} from "react-kakao-maps-sdk";

export default function TourMap() {
  const [loading, error] = useKakaoLoader({
    // VITE로 프로젝트를 빌드할 경우 환경변수 불어오는 방법
    appkey: ENV.KAKAO_API_KEY,
    libraries: ["clusterer", "drawing", "services"],
  });

  const context = useContext(PositionContext);
  const mapRef = useRef<kakao.maps.Map>(null);
  const [level, setLevel] = useState(1);

  if (!context) throw new Error("Context 에러");
  const { changePosition, currentPosition } = context;

  useGeoLocation(changePosition);

  useEffect(() => {
    if (!mapRef) throw new Error("Map 에러");
    setLevel(mapRef.current?.getLevel() || 1);
  }, [level]);

  const positions: Positions[] = useFetch(currentPosition!).map((d) => ({
    title: d.title,
    coordinates: {
      lat: Number(d.mapy),
      lng: Number(d.mapx),
    },
    contentId: Number(d.contentid),
  }));

  if (loading) return <div>로딩</div>;
  if (error) return <div>지도 불러오기 실패</div>;
  if (!currentPosition) return <div>현재 위치 실패</div>;

  return (
    <Map
      center={currentPosition}
      level={level}
      style={{ width: "1000px", height: "700px" }}
    >
      {/* <MapMarker position={currentPosition} key={0} /> */}
      <MapMarker position={{ lat: 37.57925, lng: 126.97925 }} key={0} />
      {positions.map((position) => (
        <MapMarker
          position={position.coordinates}
          title={position.title}
          key={position.contentId}
        />
      ))}
      <ZoomControl position={"BOTTOMLEFT"} />
    </Map>
  );
}
