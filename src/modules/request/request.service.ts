/* eslint-disable @typescript-eslint/camelcase */
import axios from "axios";
import { IArtistGetInfo } from "../artist/artist.interface";
import { IArtistGetInfoParams } from "../artist/params.interface";
import { ITagGetInfoParams, ITagGetSimilarParams, ITagGetTopAlbumsParams, ITagGetTopArtistsParams, ITagGetTopTracksParams, ITagGetWeeklyChartListParams } from "../tag/params.interface";
import { ITagGetInfo, ITagGetSimilar, ITagGetTopAlbums, ITagGetTopArtists, ITagGetTopTags, ITagGetTopTracks, ITagGetWeeklyChartList } from "../tag/tag.interface";
import { IUserGetFriendsParams, IUserGetInfoParams, IUserGetLovedTracksParams, IUserGetPersonalTagsParams, IUserGetRecentTracksParams, IUserGetTopAlbumsParams, IUserGetTopArtistsParams, IUserGetTopTagsParams, IUserGetTopTracksParams, IUserGetWeeklyAlbumChartParams, IUserGetWeeklyArtistChartParams, IUserGetWeeklyChartListParams, IUserGetWeeklyTrackChartParams } from "../user/params.interface";
import { IUserGetFriends, IUserGetInfo, IUserGetLovedTracks, IUserGetPersonalTags, IUserGetRecentTracks, IUserGetTopAlbums, IUserGetTopArtists, IUserGetTopTags, IUserGetTopTracks, IUserGetWeeklyAlbumChart, IUserGetWeeklyArtistChart, IUserGetWeeklyChartList, IUserGetWeeklyTrackChart } from "../user/user.interface";

axios.defaults.baseURL = "https://ws.audioscrobbler.com";

type Params =
  | ITagGetInfoParams
  | ITagGetSimilarParams
  | ITagGetTopAlbumsParams
  | ITagGetTopArtistsParams
  | ITagGetTopTracksParams
  | ITagGetWeeklyChartListParams
  | IUserGetFriendsParams
  | IUserGetInfoParams
  | IUserGetLovedTracksParams
  | IUserGetPersonalTagsParams
  | IUserGetRecentTracksParams
  | IUserGetTopAlbumsParams
  | IUserGetTopArtistsParams
  | IUserGetTopTagsParams
  | IUserGetTopTracksParams
  | IUserGetWeeklyAlbumChartParams
  | IUserGetWeeklyArtistChartParams
  | IUserGetWeeklyChartListParams
  | IUserGetWeeklyTrackChartParams
  | IArtistGetInfoParams;
type Response =
  | ITagGetInfo
  | ITagGetSimilar
  | ITagGetTopAlbums
  | ITagGetTopArtists
  | ITagGetTopTags
  | ITagGetTopTracks
  | ITagGetWeeklyChartList
  | IUserGetFriends
  | IUserGetInfo
  | IUserGetLovedTracks
  | IUserGetPersonalTags
  | IUserGetRecentTracks
  | IUserGetTopAlbums
  | IUserGetTopArtists
  | IUserGetTopTags
  | IUserGetTopTracks
  | IUserGetWeeklyAlbumChart
  | IUserGetWeeklyArtistChart
  | IUserGetWeeklyChartList
  | IUserGetWeeklyTrackChart
  | IArtistGetInfo;

export class ApiRequest {
  public async lastFm(
    method: string,
    apiKey: string,
    params?: Params,
  ): Promise<Response> {
    try {
      const { data } = await axios.get("/2.0", {
        params: {
          ...params,
          method,
          format: "json",
          api_key: apiKey,
        },
      });

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
