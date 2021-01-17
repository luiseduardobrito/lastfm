import { Artist } from "./modules/artist/artist.service";
import { Tag } from "./modules/tag/tag.service";
import { User } from "./modules/user/user.service";
import { Track } from "./modules/track/track.service";

export default class LastFm {
  public readonly user: User;
  public readonly tag: Tag;
  public readonly artist: Artist;
  public readonly track: Track;
  private readonly API_KEY: string;

  constructor(API_KEY: string) {
    if (!API_KEY) {
      throw new Error("API key has not set");
    }

    this.API_KEY = API_KEY;

    this.user = new User(this.API_KEY);
    this.tag = new Tag(this.API_KEY);
    this.artist = new Artist(this.API_KEY);
    this.track = new Track(this.API_KEY);
  }
}
