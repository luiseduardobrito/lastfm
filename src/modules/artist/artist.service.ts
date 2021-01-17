/* eslint-disable @typescript-eslint/camelcase */
import { ApiRequest } from "../request/request.service";
import { IArtistGetInfo, IArtistMethod } from "./artist.interface";
import { IArtistGetInfoParams } from "./params.interface";

export class Artist implements IArtistMethod {
  private readonly API_KEY: string;
  private readonly REQUEST: ApiRequest;

  constructor(API_KEY: string) {
    if (!API_KEY) {
      throw new Error("API key has not set");
    }

    this.REQUEST = new ApiRequest();
    this.API_KEY = API_KEY;
  }

  public async getInfo(params: IArtistGetInfoParams): Promise<IArtistGetInfo> {
    const data = await this.REQUEST.lastFm(
      "artist.getInfo",
      this.API_KEY,
      params,
    );

    return data as IArtistGetInfo;
  }
}
