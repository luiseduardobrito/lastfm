import { ITrack } from "../../common/common.interface";
import { ITrackGetInfoParams } from "./params.interface";

export interface ITrackMethod {
  getInfo(params: ITrackGetInfoParams): Promise<ITrackGetInfo>;
}

export interface ITrackGetInfo {
  track: ITrack;
}
