import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("token");
    let newRequest : HttpRequest<any>;
    console.log(token);
    newRequest = request.clone({
      headers: request.headers.set("Authorization","Basic " + token)
    })
    return next.handle(newRequest);
  }
}
