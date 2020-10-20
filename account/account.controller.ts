import { Observable } from 'rxjs';
import { Context } from '../app/app.model';
import { ControllerResponse } from '../controller.model';
import { SpotifyService } from '../spotify/spotify.service';
import { User } from '../user/user';
import { map, switchMap, filter } from 'rxjs/operators';

export class AccountController {

  /**
   * With dependency injection
   */
  constructor(
    private spotify: SpotifyService
  ) {}

  public accessWifi(context: Context): Observable<ControllerResponse> {
    return this.spotify.getUserGeneratedPlaylist((context.data as { user: User }).user).pipe(
      switchMap((playlist) => {
        // switch observable streams to sdk playing
        return this.spotify.play(playlist)
      }),
      filter((playingInfo) => playingInfo.status === 'Playing'), // wait for playlist to be playing
      map((playlist) => {
        return {
          message: `Playlist name: ${playlist.name}`
        }
      })
    );
  }

}
