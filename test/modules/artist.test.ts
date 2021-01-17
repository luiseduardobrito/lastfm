/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */

import { Artist } from "../../src/modules/artist/artist.service";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Artist tests", () => {
  describe("Constructor tests", () => {
    it("Should set API_KEY", () => {
      const artistService = new Artist("SOME_NICE_API_KEY");

      expect((artistService as any).API_KEY).toEqual("SOME_NICE_API_KEY");
    });

    it("Should throws error if API_KEY is not set", () => {
      // @ts-ignore
      expect(() => new Artist()).toThrowError(new Error("API key has not set"));
    });
  });

  describe("Methods tests", () => {
    let artistService: Artist;

    beforeAll(() => {
      artistService = new Artist("SOME_NICE_API_KEY");
    });

    describe("Params tests", () => {
      const defaultParams = { api_key: "SOME_NICE_API_KEY", format: "json" };

      beforeEach(() => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: {} }));
      });

      it("Should call getInfo with the right params", async () => {
        await artistService.getInfo({ artist: "Tim Maia" });

        expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
          params: {
            method: "artist.getInfo",
            artist: "Tim Maia",
            ...defaultParams
          }
        });
      });
    });
  });
});
