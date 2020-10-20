import { Observable } from 'rxjs';
import { ControllerResponse } from '../controller.model';

export class LoaderService {

  private action: string;
  private module: string;

  constructor(
    private moduleLoader: ModuleLoader // some module loader that returns observables
  ) {

  }

  public setAction(action: string): void {
    this.action = action;
  }
  public setModule(module: string): void {
    this.module = module;
  }

  /**
   * Should dynamically load a module and execute its action
   */
  public exec(): Observable<ControllerResponse>  {
    return this.moduleLoader.load(this.module, this.action);
  }
}
