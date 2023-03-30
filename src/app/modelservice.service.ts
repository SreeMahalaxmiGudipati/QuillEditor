import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import {Template} from 'src/models/template.model';

@Injectable({
  providedIn: 'root'
})
export class ModelserviceService {

  private baseUrl ="http://localhost:5108/api/Templates";
  constructor(private http:HttpClient) { }

  getAllTemplates() : Observable<Template[]>  {
    return this.http.get<Template[]>(this.baseUrl);
   }


}
