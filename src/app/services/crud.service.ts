import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }
  fetchData(collectionName:any){
    var ans=this.http.get(environment.apiURL+collectionName);
    return ans;
  }
   postData(collectionName:any,dataForPost:any){
     var ans=this.http.post(environment.apiURL+collectionName,dataForPost);
     return ans;
   }
   putData(collectionName:any,dataForPost:any){
    var ans=this.http.put(environment.apiURL+collectionName,dataForPost);
    return ans;
  }
}
