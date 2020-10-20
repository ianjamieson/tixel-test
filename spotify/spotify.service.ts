import { User } from '../user/user';
import { Playlist } from './spotify.model';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';

/**
 * Facade over Spotify SDk
 */
export class SpotifyService {

  constructor(
    private spotifySdk: SpotifySdk
  ) {
  }

  /**
   * Calls fictional Spotify API and should return a playlist
   * @param user
   */
  public getUserGeneratedPlaylist(user: User): Observable<Playlist> {
    // this could also call a spotify sdk, spotify.getPlaylist

    // return observable instead of promise
    return fromPromise(fetch('http://someApi.com', {
      method: 'GET',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        authKey: 'someAuthKey'
      }
    })).pipe(
      map((response) => {
        // take the api resopnse data and map to get just the playlist
        return response.palylist as Playlist
      })
    );
  }

  public play(playlist: Playlist): Observable<{
    status: string
  }> {
    // call the spotify SDK to start playing
    return spotifySdk.play(playlist);
  }

}
