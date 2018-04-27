// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // HTTP_PREFIX: "http:",
  // REST_SUFFIX: "rest/",
  // BACKEND_URL: "//localhost:8080/",
  // WS_PREFIX: "ws:",
  // WS_SUFFIX: "ws/websocket",
  HTTP_PREFIX: "http://",
  REST_SUFFIX: "/rest/",
  // BACKEND_URL: "//[2a02:a317:e040:1700:31c2:abc1:e4b1:47b9]:8080/",
  BACKEND_URL: "localhost:8080",
  WS_PREFIX: "ws://",
  WS_SUFFIX: "/ws/websocket",
};
