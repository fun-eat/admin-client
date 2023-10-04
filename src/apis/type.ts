export interface ResponseData {
  id: number;
  [key: string]: string | number | object;
}

export interface RequestQuery {
  id: number | null;
  totalElements: number | null;
  prePage: number;
  [key: string]: string | number | null | undefined;
}
