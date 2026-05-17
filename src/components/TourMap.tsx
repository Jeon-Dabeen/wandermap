import useGeoLocation from "../hooks/useGeoLocation";
import useFetch from "../hooks/useFetch";
import PositionContext from "../contexts/PositionContext";
import InfosContext from "../contexts/InfosContext";
import EventMapMarker from "./EventMapMarker";
import type { ApiResponse, Positions } from "../types";
import { ENV } from "../env";

import mock from "../mock/mock.json";

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

  // const positionContext = useContext(PositionContext);
  const infosContext = useContext(InfosContext);
  const mapRef = useRef<kakao.maps.Map>(null);
  const [level, setLevel] = useState(1);

  const { infos } = infosContext;

  useEffect(() => {
    if (!mapRef) throw new Error("Map 에러");
    setLevel(mapRef.current?.getLevel() || 1);
  }, [level]);

  const temp = { lat: 37.5794343, lng: 126.9818277 };

  if (loading) return <div>로딩</div>;
  if (error) return <div>지도 불러오기 실패</div>;

  return (
    <Map
      // center={currentPosition}
      center={temp}
      level={level}
      style={{ width: "1000px", height: "700px" }}
    >
      {/* <MapMarker position={currentPosition} key={0} /> */}
      <MapMarker position={temp} key={0} />
      {infos.map((info: ApiResponse) => (
        <EventMapMarker key={info.contentid} info={info} />
      ))}
      <ZoomControl position={"BOTTOMLEFT"} />
    </Map>
  );
}
