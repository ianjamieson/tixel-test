export enum Environment {
  Dev = 'Dev',
  Prod = 'Prod',
}

export interface Context {
  env: Environment;
  route: string;
  data: any;
}
