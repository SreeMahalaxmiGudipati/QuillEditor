import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from 'src/models/template.model';
import { ModelserviceService } from '../modelservice.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-all-templates',
  templateUrl: './all-templates.component.html',
  styleUrls: ['./all-templates.component.css']
})
export class AllTemplatesComponent {

  data:any;
  searchValue:  string = '';
  CSStemplates: string[] = [];

  htmlSnippet: string = '<div style="display: flex; align-items: center;"><img src="{{ ImageURL }}" alt="User Image" height="120px" style="margin-right: 10px;"><div><div style="font-size:20px; color:#008000"><b>{{ Firstname }}</b> <b>{{ Lastname }}</b></div><div>{{ Role }}</div><div style="display: inline-block;"><h6>Mob: </h6></div><span style="display: inline-block;">{{ ContactNo }}</span><div><i class="fab fa-twitter"></i><a> {{ TwitterLink }}</a></div><div><i class="fab fa-facebook"></i> {{ FacebookLink }}</div></div></div>';

  constructor(private modelservice:ModelserviceService,private router:Router){
    this.getData();
  }

  getData()
  {
    this.modelservice.getAllTemplates().subscribe((data: any)=>
    {
      this.data=data;
       console.log(this.data);
      
    });
  }

  redirectToDestination(id:any) {
    this.router.navigate(['/both/'+id]);
  }

}
