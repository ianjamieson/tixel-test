import { Observable } from 'rxjs';
import { ControllerResponse } from '../controller.model';
import { LoaderService } from '../loader/loader.service';
import { Context } from './app.model';

export class AppController {

  /**
   * App Controller routes
   * @param context
   */
  public route(context: Context): Observable<ControllerResponse> {
    // Dynamically load controllers based on predefined format
    // eg. module/action
    // todo handle complex routes
    const [module, action] = context.route.split('/');

    // loader controller
    const loader = new LoaderService();
    loader.setAction(action);
    loader.setModule(module);
    return loader.exec();
  }

}
