export type Coordinates = {
  lat: number;
  lng: number;
};

export type ApiResponse = {
  addr1: string;
  addr2: string;
  contentid: string;
  contenttypeid: string;
  dist: string;
  firstimage: string;
  firstimage2: string;
  cpyrhtDivCd: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  title: string;
  lDongRegnCd: string;
  lDongSignguCd: string;
  lclsSystm1: string;
  lclsSystm2: string;
};

export type Positions = {
  title: string;
  coordinates: Coordinates;
  contentId: number;
};
