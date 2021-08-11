import { isDevelopmentMode } from "./helpers/helpers";

export const configUrl = {
  baseURL: isDevelopmentMode()
    ? `http://192.168.60.46:8081`
    : `http://${window.location.hostname}:8081`,
};
