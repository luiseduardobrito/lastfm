/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */

import { Track } from "../../src/modules/track/track.service";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Track tests", () => {
  describe("Constructor tests", () => {
    it("Should set API_KEY", () => {
      const trackService = new Track("SOME_NICE_API_KEY");

      expect((trackService as any).API_KEY).toEqual("SOME_NICE_API_KEY");
    });

    it("Should throws error if API_KEY is not set", () => {
      // @ts-ignore
      expect(() => new Track()).toThrowError(new Error("API key has not set"));
    });
  });

  describe("Methods tests", () => {
    let trackService: Track;

    beforeAll(() => {
      trackService = new Track("SOME_NICE_API_KEY");
    });

    describe("Params tests", () => {
      const defaultParams = { api_key: "SOME_NICE_API_KEY", format: "json" };

      beforeEach(() => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: {} }));
      });

      it("Should call getInfo with the right params", async () => {
        await trackService.getInfo({ track: 'Bom-Senso', artist: "Tim Maia" });

        expect(mockedAxios.get).toHaveBeenLastCalledWith("/2.0", {
          params: {
            method: "track.getInfo",
            artist: "Tim Maia",
            track: "Bom-Senso",
            ...defaultParams
          }
        });
      });
    });
  });
});
