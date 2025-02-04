export enum AppRoutes {
  Default = '/',
  Home = '/home',
  Projects = '/projects',
  Callback = '/callback',

  // Error Routes
  Unauthorized = '/unauthorized',
  Forbidden = '/forbidden',
  RequestTimeout = '/request-timeout',
  InternalServerError = '/internal-server-error',
  ServiceUnavailable = '/service-unavailable',
}
