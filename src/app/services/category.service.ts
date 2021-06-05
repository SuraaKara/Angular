import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'http://localhost:5000/';

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiUrl+"ProductCategory/GetList");
  }
  
  add(category:Category){
    return this.httpClient.post(this.apiUrl+"ProductCategory/SubmitChange",category)
  }
}
