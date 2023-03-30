import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from 'src/models/template.model';
import { ModelserviceService } from '../modelservice.service';
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

  constructor(private modelservice:ModelserviceService,private router:Router){
    this.getData();
  }

  getData()
  {
    this.modelservice.getAllTemplates().subscribe((data: any)=>
    {
      this.data=data;
       console.log(this.data);

       this.data.forEach((item: any) => {
        console.log(item.templates);
        const variable = $('#eachtemplate').html(item.templates);
        
        this.CSStemplates.push(variable.html());
        console.log("Templates", this.CSStemplates);
      });
      
    });
  }

  redirectToDestination(id:any) {
    this.router.navigate(['/formgenerate/'+id]);
  }

}
