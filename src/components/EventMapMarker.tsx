import { useState } from "react";
import type { ApiResponse } from "../types";

import { MapMarker, useMap } from "react-kakao-maps-sdk";

interface EventMapMarkerProps {
  info: ApiResponse;
}

export default function EventMapMarker({ info }: EventMapMarkerProps) {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <MapMarker
      position={{ lat: Number(info.mapy), lng: Number(info.mapx) }}
      title={info.title}
      onClick={(marker) => map.panTo(marker.getPosition())}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      {isVisible && <div className="marker-contents">{info.title}</div>}
    </MapMarker>
  );
}
