import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { Slider } from '../models/slider';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  apiUrl='http://localhost:5000/';
  constructor(private httpclient: HttpClient) { }
  getSlider():Observable<Slider[]> {
    let newPath = this.apiUrl + "/GetList"
    return this.httpclient.get<Slider[]>(newPath)
  }
  add(slider:Slider):Observable<any>{
    return this.httpclient.post(this.apiUrl+"/SubmitChange?title="+slider.title+"&content="+slider.content
    +"&image="+slider.image,slider)
  }
}
