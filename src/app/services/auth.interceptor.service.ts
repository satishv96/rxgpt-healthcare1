import { HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //const token = localStorage.getItem('token');
  const authToken = 'your-global-auth-token'; 

  if (authToken) {
    req = req.clone({
      setHeaders: {
         Authorization: `Bearer ${authToken}`,
      'userId': 'X102345',
      'X-Custom-Header': 'MyCustomValue',
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning':'true'
      }
    });
  }
  
  return next(req);
};