import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from 'src/models/template.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  controllerName:any;
  private baseUrl ="http://localhost:5108/api/Professional";
  constructor(private http:HttpClient) { }

  getProfessionalControllerName(){
    const parts = this.baseUrl.split('/');
    this.controllerName = parts.pop();
    console.log("Professional Controller name:",this.controllerName);
    return this.controllerName;
    
     }

  getAllTemplates() : Observable<Template[]>  {
    return this.http.get<Template[]>(this.baseUrl);
   }

   getDetailsById(id:any): Observable<Template[]>  {
    return this.http.get<Template[]>(this.baseUrl+'/'+id);
   }
}
