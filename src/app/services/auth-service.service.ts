import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Token } from '../models/token';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  loggedIn = false;
  constructor(private httpClient: HttpClient) { }
  apiUrl = 'http://localhost:5000/User/';
  

  login(user: User):Observable<any> {
    return this.httpClient.post(this.apiUrl + "SignIn?username=" + user.username+"&password="+user.password,null)
  }


  logOut() {
    localStorage.removeItem('token');//kullanıcı çıkış yaparsa sessiondan siliyoruz.
    this.loggedIn = false;
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}

