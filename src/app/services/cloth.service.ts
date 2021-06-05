import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cloth } from '../models/cloth';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ClothService {
  apiUrl='http://localhost:5000/';
  constructor(private httpclient: HttpClient) { }
  getCloths():Observable<Cloth[]> {
    let newPath = this.apiUrl + "ClothType/GetList"
    return this.httpclient.get<Cloth[]>(newPath)
  }
  
  add(cloth:Cloth):Observable<any>{
    return this.httpclient.post(this.apiUrl+"ClothType/SubmitChange?name="+cloth.name,cloth)
  }
}
