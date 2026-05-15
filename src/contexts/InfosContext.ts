import type { ApiResponse } from "../types";

import { createContext } from "react";

type InfosContextType = {
  infos: ApiResponse[];
};

const InfosContext = createContext<InfosContextType | null>(null);
InfosContext.displayName = "InfosContext";
export default InfosContext;
