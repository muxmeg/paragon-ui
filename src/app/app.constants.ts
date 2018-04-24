export class Constants {
  constructor() {
  }

  public static readonly BACKEND_URL: string = "//192.168.0.185:8080/";
  public static readonly REST_SUFFIX: string = "rest/";
  public static readonly HTTP_PREFIX: string = "http:";
  public static readonly WS_PREFIX: string = "ws:";
  public static readonly WS_SUFFIX: string = "ws/websocket";
  public static readonly REST_URL: string = Constants.HTTP_PREFIX + Constants.BACKEND_URL + Constants.REST_SUFFIX;
  public static readonly WS_URL: string = Constants.WS_PREFIX +  Constants.BACKEND_URL + Constants.WS_SUFFIX;
}
