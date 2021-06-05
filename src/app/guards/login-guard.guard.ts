import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate{
  constructor(
    private authService:AuthServiceService,
    private toastrService:ToastrService,
     private router:Router){

 }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isAuthenticated()){
        return true;
      }else{
        this.router.navigate(["login"])
        this.toastrService.info("Sisteme giriş yapmalısınız")
        return false;
      }
  }
  
}
