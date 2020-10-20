export interface Track {
  id: number;
  artist: string;
  title: string;
}

export interface Playlist {
  name: string;
  tracks: Array<Track>;
}
