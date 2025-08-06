import { AppEnvironment } from "./environment.models";


const apiBaseUrl = 'https://buylocal-be.onrender.com/api/v1';

export const environment : AppEnvironment = {
  production: false,
  endpoints: {
    auth: `${apiBaseUrl}/auth`,
    listing: `${apiBaseUrl}/listing`
  }
};
