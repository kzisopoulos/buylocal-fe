import { AppEnvironment } from "./environment.models";


const apiBaseUrl = 'http://localhost:3000/api/v1'

export const environment : AppEnvironment = {
  production: false,
  endpoints: {
    auth: `${apiBaseUrl}/auth`,
    listing: `${apiBaseUrl}`
  }
};
