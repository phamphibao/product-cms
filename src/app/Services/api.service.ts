import { CookieService } from "ngx-cookie-service";
import { RestangularModule } from "ngx-restangular";

// Function for setting the default restangular configuration

export function RestangularConfigFactory (RestangularProvider,CookieService) {
  const token = CookieService.get('token-x');
  
  const headers = {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache'
};
  RestangularProvider.setBaseUrl('https://baopham-dev.club/api/admin/');
  RestangularProvider.setDefaultHeaders(headers);
}

// Importing RestangularModule and making default configs for restanglar
export const resful = RestangularModule.forRoot([CookieService],RestangularConfigFactory);