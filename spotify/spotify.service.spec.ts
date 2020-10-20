import { Playlist } from './spotify.model';
import { SpotifyService } from './spotify.service';

describe('SpotifyService', () => {
  const instance;
  beforeEach(() => {
    // set up tests

    // create a test instance
    instance = new SpotifyService()
  })

  describe('#getUserGeneratedPlaylist', () => {
    it('should call fetch', () => {
      // data
      const somePlaylistData: Playlist = {
        name: 'Dummy Playlist',
        tracks: [
          {
            id: 1,
            artist: 'Track artist',
            title: 'Track title'
          }
        ]
      };
      const response = {
        playlist: somePlaylistData
      };
      const user = {};


      // i like to use jasmine marbles for obseravble testing
      spyOn(fetch).and.return(hot('---a', {
        a: response
      }));

      expect(instance.getUserGeneratedPlaylist(user)).toBeObservable(cold('---a', {
        a: somePlaylistData // should be mapped
      }))

      expect(fetch).toHaveBeenCalledWith(theSameDataAsTheMethod)
    });
  });
});
