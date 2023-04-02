import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Template } from 'src/models/template.model';
import { ModelserviceService } from '../modelservice.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FriendlyService } from '../friendly.service';
import { ProfessionalService } from '../professional.service';
import { ModernService } from '../modern.service';
import { ElegantService } from '../elegant.service';
import { CreativeService } from '../creative.service';
declare var $: any;

@Component({
  selector: 'app-all-templates',
  templateUrl: './all-templates.component.html',
  styleUrls: ['./all-templates.component.css']
})
export class AllTemplatesComponent {

  data:any;
  professionaldata:any;
  friendlydata:any;
  elegantdata:any;
  creativedata:any;
  moderndata:any;
  allcategory:any;
  professionalcategory:any;
  friendlycategory:any;
  moderncategory:any;
  elegantcategory:any;
  creativecategory:any;

  // htmlSnippet: string = '<div style="display: flex; align-items: center;"><img src="{{ ImageURL }}" alt="User Image" height="120px" style="margin-right: 10px;"><div><div style="font-size:20px; color:#008000"><b>{{ Firstname }}</b> <b>{{ Lastname }}</b></div><div>{{ Role }}</div><div style="display: inline-block;"><h6>Mob: </h6></div><span style="display: inline-block;">{{ ContactNo }}</span><div><i class="fab fa-twitter"></i><a> {{ TwitterLink }}</a></div><div><i class="fab fa-facebook"></i> {{ FacebookLink }}</div></div></div>';

  constructor(private modelservice:ModelserviceService,private router:Router,private friendlyservice:FriendlyService
    ,private professionalservice:ProfessionalService,private modernservice:ModernService,
    private elegantservice:ElegantService,private creativeservice:CreativeService)

  {
    this.getAllTemplatesData();
     this.getProfessionalTemplatesData();
    this.getFriendlyTemplatesData();
    this.getModernTemplatesData();
    this.getElegantTemplatesData();
    this.getCreativeTemplatesData();
    this.allcategory=modelservice.getAllTemplatesControllerName();
    this.professionalcategory=professionalservice.getProfessionalControllerName();
    this.friendlycategory = friendlyservice.getFriendlyControllerName();
    this.moderncategory=modernservice.getModernControllerName();
    this.elegantcategory=elegantservice.getElegantControllerName();
    this.creativecategory=creativeservice.getCreativeControllerName();
  }

  getAllTemplatesData()
  {
    this.modelservice.getAllTemplates().subscribe((data: any)=>
    {
      this.data=data;
       console.log("All templates",this.data);
    });
  }

  redirectToDestination(category:any,id:any) {
    if(category=='Templates')
    {
      this.getAllTemplatesData();
    }
    if(category=='Professional')
    {
      this.getFriendlyTemplatesData();
    }
    if(category=='Friendly')
    {
      this.getProfessionalTemplatesData();
    }
    if(category=='Modern')
    {
      this.getModernTemplatesData();
    }
    if(category=='Elegant')
    {
      this.getElegantTemplatesData();
    }
    if(category=='Creative')
    {
      this.getCreativeTemplatesData();
    }
    this.router.navigate(['/both/'+category+'/'+id]);
   
  }

  getProfessionalTemplatesData()
  {
    this.professionalservice.getAllTemplates().subscribe((data: any)=>
    {
      this.professionaldata=data;
       console.log("Professional Templates",this.professionaldata);
       
    });
  }

  getFriendlyTemplatesData()
  {
    this.friendlyservice.getAllTemplates().subscribe((data: any)=>
    {
      this.friendlydata=data;
       console.log("Friendly Templates",this.friendlydata);
      
    });
  }


  getModernTemplatesData()
  {
    this.modernservice.getAllTemplates().subscribe((data: any)=>
    {
      this.moderndata=data;
       console.log("Modern Templates",this.moderndata);
      
    });
  }

  getElegantTemplatesData()
  {
    this.elegantservice.getAllTemplates().subscribe((data: any)=>
    {
      this.elegantdata=data;
       console.log("Elegant Templates",this.elegantdata);
      
    });
  }

  getCreativeTemplatesData()
  {
    this.creativeservice.getAllTemplates().subscribe((data: any)=>
    {
      this.creativedata=data;
       console.log("Creative Templates",this.creativedata);
      
    });
  }

}
