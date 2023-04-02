import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import {Template} from 'src/models/template.model';

@Injectable({
  providedIn: 'root'
})
export class ModelserviceService {
  controllerName:any;

  private baseUrl ="http://localhost:5108/api/Templates";
  constructor(private http:HttpClient) { }

  getAllTemplatesControllerName(){
    const parts = this.baseUrl.split('/');
    this.controllerName = parts.pop();
    console.log("AllTemplates Controller name:",this.controllerName);
    return this.controllerName;
    
     }

  getAllTemplates() : Observable<Template[]>  {
    return this.http.get<Template[]>(this.baseUrl);
   }

   getDetailsById(id:any): Observable<Template[]>  {
    return this.http.get<Template[]>(this.baseUrl+'/'+id);
   }

}
