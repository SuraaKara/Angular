import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl='http://localhost:5000/';
  constructor(private httpclient: HttpClient) { }
  getColor():Observable<Color[]> {
    let newPath = this.apiUrl + "Color/GetList"
    return this.httpclient.get<Color[]>(newPath)
  }
  
  add(color:Color):Observable<any>{
    return this.httpclient.post(this.apiUrl+"Color/SubmitChange?name="+color.name,color)
  }
}
