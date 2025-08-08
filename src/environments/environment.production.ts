import { AppEnvironment } from './environment.models';

const apiBaseUrl = 'https://buylocal-be.onrender.com/api/v1';

export const environment: AppEnvironment = {
  production: true,
  endpoints: {
    auth: `${apiBaseUrl}/auth`,
    listing: `${apiBaseUrl}`,
  },
};
