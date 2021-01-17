import { IArtist } from "../../common/common.interface";
import { IArtistGetInfoParams } from "./params.interface";

export interface IArtistMethod {
  getInfo(params: IArtistGetInfoParams): Promise<IArtistGetInfo>;
}

export interface IArtistGetInfo {
  artist: IArtist;
}
