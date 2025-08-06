export interface AppEnvironment {
  production: boolean;
  endpoints: {
    auth: string;
    listing: string;
  }
}