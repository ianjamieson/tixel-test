import { AppController } from './app/app.controller';
import { Context, Environment } from './app/app.model';

const handler = (context: Context, callback) => {
  AppController.route(context).subscribe((response) => {
    // call the callback
    callback(response);
  });
}


/**
 * Perhaps some controller or router has called handler(), like below
 */
handler(
  {
    env: Environment.Prod,
    route: 'account/accessWifi',
    data: {
      user: {
        id: 12,
        likes: [
          {
            id: 1,
            name: 'Taylor Swuift'
          },
          {
            id: 2,
            name: 'Motorhead'
          }
        ]
      }
    }
  },
  (response) => {
    console.log('You are now playing the following playlist')
    console.log(response)
  }
)
