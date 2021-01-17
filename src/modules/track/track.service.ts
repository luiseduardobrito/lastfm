/* eslint-disable @typescript-eslint/camelcase */
import { ApiRequest } from "../request/request.service";
import { ITrackGetInfo, ITrackMethod } from "./track.interface";
import { ITrackGetInfoParams } from "./params.interface";

export class Track implements ITrackMethod {
  private readonly API_KEY: string;
  private readonly REQUEST: ApiRequest;

  constructor(API_KEY: string) {
    if (!API_KEY) {
      throw new Error("API key has not set");
    }

    this.REQUEST = new ApiRequest();
    this.API_KEY = API_KEY;
  }

  public async getInfo(params: ITrackGetInfoParams): Promise<ITrackGetInfo> {
    const data = await this.REQUEST.lastFm(
      "track.getInfo",
      this.API_KEY,
      params,
    );

    return data as ITrackGetInfo;
  }
}
