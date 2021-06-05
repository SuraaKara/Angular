import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 apiUrl='http://localhost:5000/';
  constructor(private httpclient: HttpClient) { }
  getProducts():Observable<Product[]> {
    let newPath = this.apiUrl + "Product/Getlist"
    return this.httpclient.get<Product[]>(newPath)
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "product/GetList?categoryId="+categoryId
    return this.httpclient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<any>{
    return this.httpclient.post(this.apiUrl+"Product/SubmitChange?code="+product.code
    +"&name="+
    product.name+"&description="+
    product.description+"&category="+
    product.category+"&cloth="+
    product.cloth+"&image="+
    product.image+"&color="+
    product.color,null)
  }
}
