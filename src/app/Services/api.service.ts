import { CookieService } from "ngx-cookie-service";
import { RestangularModule } from "ngx-restangular";
import { environment } from "src/environments/environment";

// Function for setting the default restangular configuration

export function RestangularConfigFactory (RestangularProvider,cookieService) {
  let token = cookieService.get('token-x');
  
  const headers = {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Access-Control-Allow-Origin':  'http://127.0.0.1:8000/',
  };
  RestangularProvider.setBaseUrl(environment.apiUrl);
  RestangularProvider.setDefaultHeaders(headers);
}

// Importing RestangularModule and making default configs for restanglar
export const resful = RestangularModule.forRoot([CookieService],RestangularConfigFactory);
