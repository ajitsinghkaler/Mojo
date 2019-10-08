import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, Injector } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  auth: any;
  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return next.handle(request);
  }
}
