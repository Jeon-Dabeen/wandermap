import type { ApiResponse, Coordinates } from "../types";
import { ENV } from "../env";

import { useEffect, useState } from "react";

export default function useFetch(currentPosition: Coordinates) {
  const [infos, setInfos] = useState<ApiResponse[]>([]);

  useEffect(() => {
    if (!currentPosition) return;

    const fetchInfos = async () => {
      const url =
        ENV.TOUR_OPEN_API_URL +
        `?MobileOS=WEB&MobileApp=Wandermap&MapX=${currentPosition.lng}&MapY=${currentPosition.lat}&radius=1000&serviceKey=${ENV.TOUR_API_KEY}&_type=json`;

      const response = await fetch(url);
      const data = await response.json();
      setInfos(data.response.body.items.item);
    };
    fetchInfos();
  }, [currentPosition]);

  return infos;
}
