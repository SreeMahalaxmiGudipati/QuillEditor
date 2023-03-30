import { Component } from '@angular/core';
import { Template } from 'src/models/template.model';
import { ModelserviceService } from '../modelservice.service';

@Component({
  selector: 'app-all-templates',
  templateUrl: './all-templates.component.html',
  styleUrls: ['./all-templates.component.css']
})
export class AllTemplatesComponent {

  data:any;
  searchValue:  string = '';
  templates!: Template[];

  constructor(private modelservice:ModelserviceService){
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
}
