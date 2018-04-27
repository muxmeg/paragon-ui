import {environment} from "../environments/environment";

export class Constants {
  constructor() {
  }

  public static readonly REST_URL: string = environment.HTTP_PREFIX + environment.BACKEND_URL + environment.REST_SUFFIX;
  public static readonly WS_URL: string = environment.WS_PREFIX +  environment.BACKEND_URL + environment.WS_SUFFIX;
}
