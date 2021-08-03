import { RestangularModule } from "ngx-restangular";

// Function for setting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('https://baopham-dev.club/api');
  RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
}

// Importing RestangularModule and making default configs for restanglar
export const resful = RestangularModule.forRoot(RestangularConfigFactory);