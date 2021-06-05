import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { SmallText } from '../models/smallText';

@Injectable({
  providedIn: 'root'
})
export class SmallTextService {
  apiUrl='http://localhost:5000/';
  constructor(private httpclient: HttpClient) { }
  getSmallText():Observable<SmallText[]> {
    let newPath = this.apiUrl + "/GetList"
    return this.httpclient.get<SmallText[]>(newPath)
  }
  add(smallText:SmallText):Observable<any>{
    return this.httpclient.post(this.apiUrl+"/SubmitChange?title="+smallText.title+"&content="+smallText.content,smallText)
  }
}
