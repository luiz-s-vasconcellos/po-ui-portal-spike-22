import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,K as KC,cf as _n,W as W$1,E,aN as sD,N as Ul,S as YE,bi as Jx,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,a3 as D3,X as we}from'./main-6SPFG3VI.js';var te=()=>({property:"name"}),ie=o=>[o],ne=()=>({name:"Jhon"}),G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-fields","p-value"]],template:function(a,r){a&1&&Ul(0,"po-dynamic-view",0),a&2&&YE("p-fields",Jx(3,ie,Qx(2,te)))("p-value",Qx(5,ne));},dependencies:[sD],encapsulation:2,changeDetection:1})}return o})();var ae=o=>({"docs-sample-code-tabs":o}),J=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dynamic View Basic"),ng(),wl(4,"a",2),ut("click",function(){return r.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-dynamic-view-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+r.sampleCodeButtonIcon),Pp(),cg(" ",r.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ae,r.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,G],encapsulation:2})}return o})();var W=(()=>{class o{fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",divider:"ADDITIONAL DATA",tag:true,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]},{property:"hobbies",label:"Hobbies",gridColumns:12,divider:"Additional Information"}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1",hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee"]],standalone:false,decls:2,vars:3,consts:[["p-title","Employee"],[3,"p-fields","p-value","p-text-wrap"]],template:function(a,r){a&1&&(wl(0,"po-page-default",0),Ul(1,"po-dynamic-view",1),ng()),a&2&&(Pp(),YE("p-fields",r.fields)("p-value",r.employee)("p-text-wrap",true));},dependencies:[sD,D3],encapsulation:2,changeDetection:1})}return o})();var me=o=>({"docs-sample-code-tabs":o}),U=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dynamic View - Employee"),ng(),wl(4,"a",2),ut("click",function(){return r.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-employee',
  templateUrl: './sample-po-dynamic-view-employee.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewEmployeeComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      divider: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    },
    {
      property: 'hobbies',
      label: 'Hobbies',
      gridColumns: 12,
      divider: 'Additional Information'
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1',
    hobbies:
      'Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.\\n' +
      'Pr\xE1tica de corrida ao ar livre.\\n' +
      'Jogos de tabuleiro e videogames.\\n' +
      'Culin\xE1ria, especialmente cozinha italiana.'
  };
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-dynamic-view-employee"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+r.sampleCodeButtonIcon),Pp(),cg(" ",r.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,me,r.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,W],encapsulation:2})}return o})();var q=(()=>{class o{httpClient=f(KC);headers=new _n({"X-PO-No-Message":"true"});url;filterParams;getObjectByValue(l,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(W$1(r=>"items"in r?r.items:r))}setConfig(l,a){this.url=l,this.filterParams=a;}static \u0275fac=function(a){return new(a||o)};static \u0275prov=E({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Z=(()=>{class o{employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"A",wage:8000.5,availability:"Available",cities:[{city:"S\xE3o Paulo",id:"SP"},{city:"Joinville",id:"SC"},{city:"Belo Horizonte",id:"MG"}],admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",profile:"admin",image:"https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg"};fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"cities",isArrayOrObject:true,fieldLabel:"city",fieldValue:"id",concatLabelValue:true},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"image",divider:"Image",image:true,alt:"image",height:"250"}];_newService=f(q);ngOnInit(){this._newService.setConfig("https://po-sample-api.onrender.com/v1/hotels",{id:1485976673002});}customEmployeeData(){return {value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:"name",divider:"Personal data by load customization",order:1},{property:"cpf",tag:true,color:"color-07",order:2},{property:"rg",tag:true,color:"color-07",order:3},{property:"wage",type:"string",tag:true,color:"color-07"},{property:"genre",visible:false},{property:"job",tag:false},{searchService:this._newService,fieldLabel:"address_city",property:"city"}]}}checkProfile(){if(this.employee.profile==="admin")return "confidential"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-on-load"]],standalone:false,features:[we([q])],decls:2,vars:3,consts:[["p-title","Employee on Load"],[3,"p-fields","p-load","p-value"]],template:function(a,r){a&1&&(wl(0,"po-page-default",0),Ul(1,"po-dynamic-view",1),ng()),a&2&&(Pp(),YE("p-fields",r.fields)("p-load",r.customEmployeeData.bind(r))("p-value",r.employee));},dependencies:[sD,D3],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o}),X=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-on-load-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dynamic View - Employee on load"),ng(),wl(4,"a",2),ut("click",function(){return r.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';
import { SamplePoDynamicViewEmployeeOnLoadService } from './sample-po-dynamic-view-employee-on-load.service';

@Component({
  selector: 'sample-po-dynamic-view-employee-on-load',
  templateUrl: './sample-po-dynamic-view-employee-on-load.component.html',
  providers: [SamplePoDynamicViewEmployeeOnLoadService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewEmployeeOnLoadComponent implements OnInit {
  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'A',
    wage: 8000.5,
    availability: 'Available',
    cities: [
      {
        city: 'S\xE3o Paulo',
        id: 'SP'
      },
      {
        city: 'Joinville',
        id: 'SC'
      },
      {
        city: 'Belo Horizonte',
        id: 'MG'
      }
    ],
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    profile: 'admin',
    image: 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg'
  };

  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'cities', isArrayOrObject: true, fieldLabel: 'city', fieldValue: 'id', concatLabelValue: true },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    { property: 'image', divider: 'Image', image: true, alt: 'image', height: '250' }
  ];

  private _newService = inject(SamplePoDynamicViewEmployeeOnLoadService);

  ngOnInit(): void {
    this._newService.setConfig('https://po-sample-api.onrender.com/v1/hotels', { id: 1485976673002 });
  }

  customEmployeeData() {
    return {
      value: {
        cpf: this.checkProfile(),
        rg: this.checkProfile(),
        wage: this.checkProfile()
      },
      fields: [
        { property: 'name', divider: 'Personal data by load customization', order: 1 },
        { property: 'cpf', tag: true, color: 'color-07', order: 2 },
        { property: 'rg', tag: true, color: 'color-07', order: 3 },
        { property: 'wage', type: 'string', tag: true, color: 'color-07' },
        { property: 'genre', visible: false },
        { property: 'job', tag: false },
        {
          searchService: this._newService,
          fieldLabel: 'address_city',
          property: 'city'
        }
      ]
    };
  }

  private checkProfile(): string {
    if (this.employee.profile === 'admin') {
      return 'confidential';
    }
  }
}
`),ng(),wl(21,"label",6),Ux(22,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamplePoDynamicViewEmployeeOnLoadService {
  private httpClient = inject(HttpClient);

  readonly headers: HttpHeaders = new HttpHeaders({
    'X-PO-No-Message': 'true'
  });

  url: string;
  filterParams;

  getObjectByValue(value: string | Array<any>, filterParams?: any): Observable<Array<any> | { [key: string]: any }> {
    return this.httpClient
      .get(this.url, {
        headers: this.headers,
        params: this.filterParams
      })
      .pipe(map((response: any) => ('items' in response ? response.items : response)));
  }

  setConfig(url: string, filterParams) {
    this.url = url;
    this.filterParams = filterParams;
  }
}
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-dynamic-view-employee-on-load"),ng(),Ul(27,"hr")),a&2&&(Pp(5),Ax("po-icon "+r.sampleCodeButtonIcon),Pp(),cg(" ",r.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,se,r.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Z],encapsulation:2})}return o})();var Q=(()=>{class o{fields=[{property:"name",container:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",container:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",container:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",container:"ADDITIONAL DATA",tag:true,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1"};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-container"]],standalone:false,decls:2,vars:2,consts:[["p-title","Employee"],[3,"p-fields","p-value"]],template:function(a,r){a&1&&(wl(0,"po-page-default",0),Ul(1,"po-dynamic-view",1),ng()),a&2&&(Pp(),YE("p-fields",r.fields)("p-value",r.employee));},dependencies:[sD,D3],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),K=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-container-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dynamic View - Employee on load"),ng(),wl(4,"a",2),ut("click",function(){return r.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-container',
  templateUrl: './sample-po-dynamic-view-container.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewContainerComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', container: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', container: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', container: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      container: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1'
  };
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-dynamic-view-container"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+r.sampleCodeButtonIcon),Pp(),cg(" ",r.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ee,r.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Q],encapsulation:2})}return o})();var Y=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-doc"]],standalone:false,decls:1565,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDynamicViewField[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","object"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<string>"],["href","https://angular.io/api/common/CurrencyPipe"],["href","https://angular.io/api/common/DatePipe"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<{","label:","string;","value:","string"],["pan","",1,"docs-api-property-type","number;","}>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoDynamicViewRequest"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"]],template:function(a,r){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),ng()(),Ul(4,"div",2),wl(5,"h3",3),Ux(6,"Componente"),ng(),wl(7,"h4",4)(8,"code",5),Ux(9,"PoDynamicViewComponent"),ng()(),wl(10,"div",2)(11,"p"),Ux(12,"Componente para listar dados dinamicamente a partir de uma lista de objetos."),ng(),wl(13,"blockquote")(14,"p"),Ux(15,"Por padr\xE3o esse componente cria "),wl(16,"code"),Ux(17,"po-info"),ng(),Ux(18," para exibi\xE7\xE3o, \xE9 poss\xEDvel criar "),wl(19,"code"),Ux(20,"po-tag"),ng(),Ux(21," passando a propriedade { tag: true }. "),ng()()(),wl(22,"div",6)(23,"h4",7),Ux(24,"Seletor"),ng(),wl(25,"pre",8),Ux(26,`<po-dynamic-view
    p-components-size="string"
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),ng()(),wl(27,"h4",9),Ux(28,"Propriedades"),ng(),wl(29,"table",10)(30,"tr",11)(31,"th",12),Ux(32,"Nome"),ng(),wl(33,"th",12),Ux(34,"Tipo"),ng(),wl(35,"th",12),Ux(36,"Padr\xE3o"),ng(),wl(37,"th",12),Ux(38,"Descri\xE7\xE3o"),ng()(),wl(39,"tr",13)(40,"td",14)(41,"div",15)(42,"span",16),Ux(43," p-components-size"),Ul(44,"br"),ng()()(),wl(45,"td",17)(46,"code",18),Ux(47,"string"),ng()(),wl(48,"td",19)(49,"p")(50,"code"),Ux(51,"medium"),ng()()(),wl(52,"td",20)(53,"em")(54,"strong"),Ux(55,"(opcional)"),ng()(),wl(56,"p"),Ux(57,"Define o tamanho dos componentes no template entre "),wl(58,"code"),Ux(59,"small"),ng(),Ux(60," ou "),wl(61,"code"),Ux(62,"medium"),ng(),Ux(63,"."),ng(),wl(64,"blockquote")(65,"p"),Ux(66,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(67,"code"),Ux(68,"medium"),ng(),Ux(69,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(70,"a",21),Ux(71,"po-theme"),ng(),Ux(72,"."),ng()()()(),wl(73,"tr",13)(74,"td",14)(75,"div",15)(76,"span",16),Ux(77," p-fields"),Ul(78,"br"),ng()()(),wl(79,"td",17)(80,"code",22),Ux(81,"PoDynamicViewField[]"),ng()(),wl(82,"td",19)(83,"p")(84,"code"),Ux(85,"[]"),ng()()(),wl(86,"td",20)(87,"em")(88,"strong"),Ux(89,"(opcional)"),ng()(),wl(90,"p"),Ux(91,"Lista de objetos que implementam a interface "),wl(92,"code"),Ux(93,"PoDynamicView"),ng(),Ux(94,"."),ng(),wl(95,"blockquote")(96,"p"),Ux(97,"Ex: "),wl(98,"code"),Ux(99,"[ { property: 'age' } ]"),ng()()(),wl(100,"p"),Ux(101,"Regras de tipagem e formata\xE7\xE3o dos valores exibidos:"),ng(),wl(102,"ul")(103,"li"),Ux(104,"Caso o "),wl(105,"em"),Ux(106,"type"),ng(),Ux(107," informado seja "),wl(108,"em"),Ux(109,"currency"),ng(),Ux(110," e n\xE3o seja informado o "),wl(111,"em"),Ux(112,"format"),ng(),Ux(113,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),ng(),wl(114,"li"),Ux(115,"Caso o "),wl(116,"em"),Ux(117,"type"),ng(),Ux(118," informado seja "),wl(119,"em"),Ux(120,"date"),ng(),Ux(121," e n\xE3o seja informado o "),wl(122,"em"),Ux(123,"format"),ng(),Ux(124," o mesmo recebe 'dd/MM/yyyy' como formato padr\xE3o."),ng(),wl(125,"li"),Ux(126,"Caso o "),wl(127,"em"),Ux(128,"type"),ng(),Ux(129," informado seja "),wl(130,"em"),Ux(131,"dateTime"),ng(),Ux(132," e n\xE3o seja informado o "),wl(133,"em"),Ux(134,"format"),ng(),Ux(135," o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padr\xE3o."),ng(),wl(136,"li"),Ux(137,"Caso o "),wl(138,"em"),Ux(139,"type"),ng(),Ux(140," informado seja "),wl(141,"em"),Ux(142,"number"),ng(),Ux(143," e n\xE3o seja informado o "),wl(144,"em"),Ux(145,"format"),ng(),Ux(146," o mesmo n\xE3o ser\xE1 formatado."),ng(),wl(147,"li"),Ux(148,"Caso o "),wl(149,"em"),Ux(150,"type"),ng(),Ux(151," informado seja "),wl(152,"em"),Ux(153,"time"),ng(),Ux(154," e n\xE3o seja informado o "),wl(155,"em"),Ux(156,"format"),ng(),Ux(157," o mesmo recebe 'HH:mm:ss.ffffff' como formato padr\xE3o."),ng()(),wl(158,"blockquote")(159,"p"),Ux(160,"As propriedades informadas ser\xE3o exibidas mesmo n\xE3o contendo valor de refer\xEAncia no objeto da propriedade "),wl(161,"code"),Ux(162,"p-value"),ng(),Ux(163,"."),ng()()()(),wl(164,"tr",13)(165,"td",14)(166,"div",15)(167,"span",16),Ux(168," p-load"),Ul(169,"br"),ng()()(),wl(170,"td",17)(171,"code",18),Ux(172,"string "),ng(),wl(173,"code",23),Ux(174," Function"),ng()(),wl(175,"td",19),Ux(176,"-"),ng(),wl(177,"td",20)(178,"em")(179,"strong"),Ux(180,"(opcional)"),ng()(),wl(181,"p"),Ux(182,"Possibilita executar uma fun\xE7\xE3o quando o componente \xE9 inicializado."),ng(),wl(183,"p"),Ux(184,"A propriedade aceita os seguintes tipos:"),ng(),wl(185,"ul")(186,"li")(187,"strong"),Ux(188,"String"),ng(),Ux(189,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),wl(190,"code"),Ux(191,"POST"),ng(),Ux(192,"."),ng(),wl(193,"li")(194,"strong"),Ux(195,"Function"),ng(),Ux(196,": M\xE9todo que ser\xE1 executado na inicializa\xE7\xE3o do componente."),ng()(),wl(197,"p"),Ux(198,"Para os dois tipos de utiliza\xE7\xE3o da propriedade espera-se o seguinte retorno:"),ng(),wl(199,"pre")(200,"code"),Ux(201,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),ng()(),wl(202,"blockquote")(203,"p")(204,"strong"),Ux(205,"value"),ng(),Ux(206,": any = atribui novo valor do model."),ng()(),wl(207,"blockquote")(208,"p")(209,"strong"),Ux(210,"fields"),ng(),Ux(211,": "),wl(212,"code"),Ux(213,"Array<PoDynamicViewField>"),ng(),Ux(214,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),ng()(),wl(215,"ul")(216,"li"),Ux(217,"Para esconder/remover campos precisa informar no field a propriedade "),wl(218,"code"),Ux(219,"visible = false"),ng(),Ux(220,"."),ng()()()(),wl(221,"tr",13)(222,"td",14)(223,"div",15)(224,"span",16),Ux(225," p-show-all-value"),Ul(226,"br"),ng()()(),wl(227,"td",17)(228,"code",24),Ux(229,"boolean"),ng()(),wl(230,"td",19)(231,"p")(232,"code"),Ux(233,"false"),ng()()(),wl(234,"td",20)(235,"em")(236,"strong"),Ux(237,"(opcional)"),ng()(),wl(238,"p"),Ux(239,"Indica se exibir\xE1 todas as informa\xE7\xF5es contidas dentro do objeto informado na propriedade "),wl(240,"code"),Ux(241,"p-value"),ng(),Ux(242,"."),ng()()(),wl(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),Ux(247," p-text-wrap"),Ul(248,"br"),ng()()(),wl(249,"td",17)(250,"code",24),Ux(251,"boolean"),ng()(),wl(252,"td",19)(253,"p")(254,"code"),Ux(255,"false"),ng()()(),wl(256,"td",20)(257,"em")(258,"strong"),Ux(259,"(opcional)"),ng()(),wl(260,"p"),Ux(261,"Permite a quebra de linha no texto do "),wl(262,"code"),Ux(263,"p-value"),ng(),Ux(264,", aplicando-a onde h\xE1 "),wl(265,"code"),Ux(266,"\\n"),ng(),Ux(267,"."),ng(),wl(268,"pre")(269,"code"),Ux(270,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),ng()(),wl(271,"p"),Ux(272,"Sa\xEDda:"),ng(),wl(273,"pre")(274,"code"),Ux(275,`Primeira linha
Segunda linha
`),ng()()()(),wl(276,"tr",13)(277,"td",14)(278,"div",15)(279,"span",16),Ux(280," p-value"),Ul(281,"br"),ng()()(),wl(282,"td",17)(283,"code",25),Ux(284,"object"),ng()(),wl(285,"td",19),Ux(286,"-"),ng(),wl(287,"td",20)(288,"p"),Ux(289,"Objeto que ser\xE1 utilizado para exibir as informa\xE7\xF5es din\xE2micas, o valor ser\xE1 recuperado atrav\xE9s do atributo "),wl(290,"em"),Ux(291,"property"),ng(),Ux(292,`
dos objetos contidos na propridade `),wl(293,"code"),Ux(294,"p-fields"),ng(),Ux(295,"."),ng(),wl(296,"blockquote")(297,"p"),Ux(298,"Ex: "),wl(299,"code"),Ux(300,"{ age: '35' }"),ng()()()()()(),wl(301,"h3"),Ux(302,"Interfaces"),ng(),wl(303,"h4",26)(304,"code",5),Ux(305,"PoDynamicViewRequest"),ng()(),wl(306,"div",2)(307,"p"),Ux(308,"Define o tipo de busca customizada para um campo em espec\xEDfico."),ng()(),wl(309,"h4",9),Ux(310,"M\xE9todos"),ng(),wl(311,"table",27)(312,"tr",13)(313,"th",28)(314,"div",15)(315,"h4")(316,"span",16),Ux(317," getObjectByValue "),ng()()()()(),wl(318,"tr",20)(319,"td",20)(320,"p"),Ux(321,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),ng()()()(),wl(322,"h5")(323,"b"),Ux(324,"Par\xE2metros"),ng()(),wl(325,"table",10)(326,"tr",11)(327,"th",12),Ux(328,"Nome"),ng(),wl(329,"th",12),Ux(330,"Tipo"),ng(),wl(331,"th",12),Ux(332,"Descri\xE7\xE3o"),ng()(),wl(333,"tr",13)(334,"td",14),Ux(335," value"),ng(),wl(336,"td",17)(337,"code",18),Ux(338," string "),ng(),wl(339,"code",29),Ux(340," Array<any> "),ng()(),wl(341,"td",20)(342,"p"),Ux(343,"Valor \xFAnico a ser buscado na fonte de dados."),ng()()(),wl(344,"tr",13)(345,"td",14),Ux(346," filterParams"),ng(),wl(347,"td",17)(348,"code",30),Ux(349," any "),ng()(),wl(350,"td",20)(351,"p"),Ux(352,"Valor opcional para informar filtros customizados."),ng()()()(),Ul(353,"br"),wl(354,"h4",26)(355,"code",5),Ux(356,"PoDynamicViewField"),ng()(),wl(357,"div",2)(358,"p"),Ux(359," Interface para defini\xE7\xE3o das propriedades dos campos de visualiza\xE7\xE3o que ser\xE3o criados dinamicamente."),ng()(),wl(360,"h4",9),Ux(361,"Propriedades"),ng(),wl(362,"table",10)(363,"tr",11)(364,"th",12),Ux(365,"Nome"),ng(),wl(366,"th",12),Ux(367,"Tipo"),ng(),wl(368,"th",12),Ux(369,"Descri\xE7\xE3o"),ng()(),wl(370,"tr",13)(371,"td",14)(372,"div",15)(373,"span",16),Ux(374," alt"),Ul(375,"br"),ng()()(),wl(376,"td",17)(377,"code",18),Ux(378,"string"),ng()(),wl(379,"td",20)(380,"em")(381,"strong"),Ux(382,"(opcional)"),ng()(),wl(383,"p"),Ux(384,"Defini o texto alternativo descrevendo a imagem."),ng(),wl(385,"p"),Ux(386,"Exemplo de utiliza\xE7\xE3o:"),ng(),wl(387,"pre")(388,"code"),Ux(389,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),ng()(),wl(390,"p")(391,"strong"),Ux(392,"Componentes compat\xEDveis:"),ng(),wl(393,"code"),Ux(394,"po-image"),ng(),Ux(395,"."),ng()()(),wl(396,"tr",13)(397,"td",14)(398,"div",15)(399,"span",16),Ux(400," booleanFalse"),Ul(401,"br"),ng()()(),wl(402,"td",17)(403,"code",18),Ux(404,"string"),ng()(),wl(405,"td",20)(406,"em")(407,"strong"),Ux(408,"(opcional)"),ng()(),wl(409,"p"),Ux(410,"Texto exibido quando o valor do componente for "),wl(411,"em"),Ux(412,"false"),ng(),Ux(413,"."),ng()()(),wl(414,"tr",13)(415,"td",14)(416,"div",15)(417,"span",16),Ux(418," booleanTrue"),Ul(419,"br"),ng()()(),wl(420,"td",17)(421,"code",18),Ux(422,"string"),ng()(),wl(423,"td",20)(424,"em")(425,"strong"),Ux(426,"(opcional)"),ng()(),wl(427,"p"),Ux(428,"Texto exibido quando o valor do componente for "),wl(429,"em"),Ux(430,"true"),ng(),Ux(431,"."),ng()()(),wl(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),Ux(436," color"),Ul(437,"br"),ng()()(),wl(438,"td",17)(439,"code",18),Ux(440,"string"),ng()(),wl(441,"td",20)(442,"em")(443,"strong"),Ux(444,"(opcional)"),ng()(),wl(445,"p"),Ux(446,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),ng(),wl(447,"ul")(448,"li"),Ux(449,"Hexadeximal, por exemplo "),wl(450,"code"),Ux(451,"#c64840"),ng(),Ux(452,";"),ng(),wl(453,"li"),Ux(454,"RGB, como "),wl(455,"code"),Ux(456,"rgb(0, 0, 165)"),ng(),Ux(457,";"),ng(),wl(458,"li"),Ux(459,"O nome da cor, por exemplo "),wl(460,"code"),Ux(461,"blue"),ng(),Ux(462,";"),ng(),wl(463,"li"),Ux(464,"Usando uma das cores do tema do PO:"),ng(),wl(465,"li"),Ux(466,"Valores v\xE1lidos:"),wl(467,"ul")(468,"li"),Ul(469,"span",31),wl(470,"code"),Ux(471,"color-01"),ng()(),wl(472,"li"),Ul(473,"span",32),wl(474,"code"),Ux(475,"color-02"),ng()(),wl(476,"li"),Ul(477,"span",33),wl(478,"code"),Ux(479,"color-03"),ng()(),wl(480,"li"),Ul(481,"span",34),wl(482,"code"),Ux(483,"color-04"),ng()(),wl(484,"li"),Ul(485,"span",35),wl(486,"code"),Ux(487,"color-05"),ng()(),wl(488,"li"),Ul(489,"span",36),wl(490,"code"),Ux(491,"color-06"),ng()(),wl(492,"li"),Ul(493,"span",37),wl(494,"code"),Ux(495,"color-07"),ng()(),wl(496,"li"),Ul(497,"span",38),wl(498,"code"),Ux(499,"color-08"),ng()(),wl(500,"li"),Ul(501,"span",39),wl(502,"code"),Ux(503,"color-09"),ng()(),wl(504,"li"),Ul(505,"span",40),wl(506,"code"),Ux(507,"color-10"),ng()(),wl(508,"li"),Ul(509,"span",41),wl(510,"code"),Ux(511,"color-11"),ng()(),wl(512,"li"),Ul(513,"span",42),wl(514,"code"),Ux(515,"color-12"),ng()()()()()()(),wl(516,"tr",13)(517,"td",14)(518,"div",15)(519,"span",16),Ux(520," concatLabelValue"),Ul(521,"br"),ng()()(),wl(522,"td",17)(523,"code",24),Ux(524,"boolean"),ng()(),wl(525,"td",20)(526,"em")(527,"strong"),Ux(528,"(opcional)"),ng()(),wl(529,"p"),Ux(530,"Permite que seja exibido em tela, de forma concatenada as propriedades "),wl(531,"code"),Ux(532,"fieldLabel"),ng(),Ux(533," + "),wl(534,"code"),Ux(535,"fieldValue"),ng(),Ux(536,`.
A ordem sempre ser\xE1 `),wl(537,"code"),Ux(538,"fieldLabel"),ng(),Ux(539," e depois "),wl(540,"code"),Ux(541,"fieldValue"),ng(),Ux(542,", n\xE3o sendo poss\xEDvel alterar."),ng(),wl(543,"blockquote")(544,"p"),Ux(545,"Propriedade funciona corretamente caso as propriedades "),wl(546,"code"),Ux(547,"fieldLabel"),ng(),Ux(548," e "),wl(549,"code"),Ux(550,"fielValue"),ng(),Ux(551," sejam v\xE1lidas."),ng()()()(),wl(552,"tr",13)(553,"td",14)(554,"div",15)(555,"span",16),Ux(556," container"),Ul(557,"br"),ng()()(),wl(558,"td",17)(559,"code",18),Ux(560,"string"),ng()(),wl(561,"td",20)(562,"em")(563,"strong"),Ux(564,"(opcional)"),ng()(),wl(565,"p"),Ux(566,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),ng(),wl(567,"p"),Ux(568,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),ng()()(),wl(569,"tr",13)(570,"td",14)(571,"div",15)(572,"span",16),Ux(573," divider"),Ul(574,"br"),ng()()(),wl(575,"td",17)(576,"code",18),Ux(577,"string"),ng()(),wl(578,"td",20)(579,"em")(580,"strong"),Ux(581,"(opcional)"),ng()(),wl(582,"p"),Ux(583,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),ng()()(),wl(584,"tr",13)(585,"td",14)(586,"div",15)(587,"span",16),Ux(588," fieldLabel"),Ul(589,"br"),ng()()(),wl(590,"td",17)(591,"code",18),Ux(592,"string"),ng()(),wl(593,"td",20)(594,"em")(595,"strong"),Ux(596,"(opcional)"),ng()(),wl(597,"p"),Ux(598,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),ng(),wl(599,"p"),Ux(600,"O valor padr\xE3o \xE9: "),wl(601,"code"),Ux(602,"label"),ng(),Ux(603,"."),ng()()(),wl(604,"tr",13)(605,"td",14)(606,"div",15)(607,"span",16),Ux(608," fieldValue"),Ul(609,"br"),ng()()(),wl(610,"td",17)(611,"code",18),Ux(612,"string"),ng()(),wl(613,"td",20)(614,"em")(615,"strong"),Ux(616,"(opcional)"),ng()(),wl(617,"p"),Ux(618,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),ng(),wl(619,"p"),Ux(620,"O valor padr\xE3o \xE9: "),wl(621,"code"),Ux(622,"value"),ng(),Ux(623,"."),ng()()(),wl(624,"tr",13)(625,"td",14)(626,"div",15)(627,"span",16),Ux(628," format"),Ul(629,"br"),ng()()(),wl(630,"td",17)(631,"code",18),Ux(632,"string "),ng(),wl(633,"code",43),Ux(634," Array<string>"),ng()(),wl(635,"td",20)(636,"em")(637,"strong"),Ux(638,"(opcional)"),ng()(),wl(639,"p"),Ux(640,"Define o formato de exibi\xE7\xE3o para o valor de um campo."),ng(),wl(641,"ul")(642,"li")(643,"p"),Ux(644,"Quando "),wl(645,"code"),Ux(646,"format"),ng(),Ux(647," \xE9 uma "),wl(648,"code"),Ux(649,"string"),ng(),Ux(650,", o formato aplicado depende da propriedade "),wl(651,"strong"),Ux(652,"type"),ng(),Ux(653," segue como usar cada tipo:"),ng(),wl(654,"ul")(655,"li")(656,"code"),Ux(657,"currency"),ng(),Ux(658,": Utiliza c\xF3digos de moeda definidos pelo "),wl(659,"a",44),Ux(660,"CurrencyPipe"),ng(),Ux(661,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),ng(),wl(662,"li")(663,"code"),Ux(664,"date"),ng(),Ux(665,": Adota formatos de data especificados pelo "),wl(666,"a",45),Ux(667,"DatePipe"),ng(),Ux(668,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),ng(),wl(669,"li")(670,"code"),Ux(671,"time"),ng(),Ux(672,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),ng(),wl(673,"li")(674,"code"),Ux(675,"number"),ng(),Ux(676,": Usa especifica\xE7\xF5es do "),wl(677,"a",46),Ux(678,"DecimalPipe"),ng(),Ux(679,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),wl(680,"code"),Ux(681,"50"),ng(),Ux(682,", formato "),wl(683,"code"),Ux(684,"'1.2-5'"),ng(),Ux(685,", resulta em "),wl(686,"code"),Ux(687,"50.00"),ng(),Ux(688,"."),ng()()(),wl(689,"li")(690,"p"),Ux(691,"Quando "),wl(692,"code"),Ux(693,"format"),ng(),Ux(694," \xE9 um "),wl(695,"code"),Ux(696,"Array<string>"),ng(),Ux(697,":"),ng(),wl(698,"ul")(699,"li"),Ux(700,"Cada elemento do array representa uma propriedade do objeto."),ng(),wl(701,"li"),Ux(702,"Os valores dessas propriedades s\xE3o concatenados, separados pelo padr\xE3o ' - '."),ng(),wl(703,"li"),Ux(704,"Exemplo: Para "),wl(705,"code"),Ux(706,'format: ["id", "name"]'),ng(),Ux(707," e um objeto "),wl(708,"code"),Ux(709,"{ id: 1, name: 'Carlos Diego' }"),ng(),Ux(710,`,
o resultado ser\xE1 `),wl(711,"code"),Ux(712,"'1 - Carlos Diego'"),ng(),Ux(713,"."),ng()()()()()(),wl(714,"tr",13)(715,"td",14)(716,"div",15)(717,"span",16),Ux(718," gridColumns"),Ul(719,"br"),ng()()(),wl(720,"td",17)(721,"code",47),Ux(722,"number"),ng()(),wl(723,"td",20)(724,"em")(725,"strong"),Ux(726,"(opcional)"),ng()(),wl(727,"p"),Ux(728,"Tamanho de exibi\xE7\xE3o do campo em telas."),ng(),wl(729,"p"),Ux(730,"Deve ser usado o sistema de "),wl(731,"strong"),Ux(732,"grid"),ng(),Ux(733," do PO (1 ... 12 colunas)."),ng(),wl(734,"blockquote")(735,"p"),Ux(736,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),ng()()()(),wl(737,"tr",13)(738,"td",14)(739,"div",15)(740,"span",16),Ux(741," gridLgColumns"),Ul(742,"br"),ng()()(),wl(743,"td",17)(744,"code",47),Ux(745,"number"),ng()(),wl(746,"td",20)(747,"em")(748,"strong"),Ux(749,"(opcional)"),ng()(),wl(750,"p"),Ux(751,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),ng(),wl(752,"p"),Ux(753,"Deve ser usado o sistema de "),wl(754,"strong"),Ux(755,"grid"),ng(),Ux(756," do PO (1 ... 12 colunas)."),ng(),wl(757,"blockquote")(758,"p"),Ux(759,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(760,"code"),Ux(761,"gridColumns"),ng(),Ux(762,"."),ng()()()(),wl(763,"tr",13)(764,"td",14)(765,"div",15)(766,"span",16),Ux(767," gridLgPull"),Ul(768,"br"),ng()()(),wl(769,"td",17)(770,"code",47),Ux(771,"number"),ng()(),wl(772,"td",20)(773,"em")(774,"strong"),Ux(775,"(opcional)"),ng()(),wl(776,"p"),Ux(777,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),ng(),wl(778,"p"),Ux(779,"Deve ser usado o sistema de "),wl(780,"strong"),Ux(781,"grid"),ng(),Ux(782," do PO (1 ... 11 colunas)."),ng(),wl(783,"blockquote")(784,"p"),Ux(785,"Esta propriedade n\xE3o funciona com a propriedade "),wl(786,"code"),Ux(787,"gridColumns"),ng(),Ux(788,". Deve-se especificar o tamanho da tela."),ng()()()(),wl(789,"tr",13)(790,"td",14)(791,"div",15)(792,"span",16),Ux(793," gridMdColumns"),Ul(794,"br"),ng()()(),wl(795,"td",17)(796,"code",47),Ux(797,"number"),ng()(),wl(798,"td",20)(799,"em")(800,"strong"),Ux(801,"(opcional)"),ng()(),wl(802,"p"),Ux(803,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),ng(),wl(804,"p"),Ux(805,"Deve ser usado o sistema de "),wl(806,"strong"),Ux(807,"grid"),ng(),Ux(808," do PO (1 ... 12 colunas)."),ng(),wl(809,"blockquote")(810,"p"),Ux(811,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(812,"code"),Ux(813,"gridColumns"),ng(),Ux(814,"."),ng()()()(),wl(815,"tr",13)(816,"td",14)(817,"div",15)(818,"span",16),Ux(819," gridMdPull"),Ul(820,"br"),ng()()(),wl(821,"td",17)(822,"code",47),Ux(823,"number"),ng()(),wl(824,"td",20)(825,"em")(826,"strong"),Ux(827,"(opcional)"),ng()(),wl(828,"p"),Ux(829,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),ng(),wl(830,"p"),Ux(831,"Deve ser usado o sistema de "),wl(832,"strong"),Ux(833,"grid"),ng(),Ux(834," do PO (1 ... 11 colunas)."),ng(),wl(835,"blockquote")(836,"p"),Ux(837,"Esta propriedade n\xE3o funciona com a propriedade "),wl(838,"code"),Ux(839,"gridColumns"),ng(),Ux(840,". Deve-se especificar o tamanho da tela."),ng()()()(),wl(841,"tr",13)(842,"td",14)(843,"div",15)(844,"span",16),Ux(845," gridSmColumns"),Ul(846,"br"),ng()()(),wl(847,"td",17)(848,"code",47),Ux(849,"number"),ng()(),wl(850,"td",20)(851,"em")(852,"strong"),Ux(853,"(opcional)"),ng()(),wl(854,"p"),Ux(855,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),ng(),wl(856,"p"),Ux(857,"Deve ser usado o sistema de "),wl(858,"strong"),Ux(859,"grid"),ng(),Ux(860," do PO (1 ... 12 colunas)."),ng(),wl(861,"blockquote")(862,"p"),Ux(863,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(864,"code"),Ux(865,"gridColumns"),ng(),Ux(866,"."),ng()()()(),wl(867,"tr",13)(868,"td",14)(869,"div",15)(870,"span",16),Ux(871," gridSmPull"),Ul(872,"br"),ng()()(),wl(873,"td",17)(874,"code",47),Ux(875,"number"),ng()(),wl(876,"td",20)(877,"em")(878,"strong"),Ux(879,"(opcional)"),ng()(),wl(880,"p"),Ux(881,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),ng(),wl(882,"p"),Ux(883,"Deve ser usado o sistema de "),wl(884,"strong"),Ux(885,"grid"),ng(),Ux(886," do PO (1 ... 11 colunas)."),ng(),wl(887,"blockquote")(888,"p"),Ux(889,"Esta propriedade n\xE3o funciona com a propriedade "),wl(890,"code"),Ux(891,"gridColumns"),ng(),Ux(892,". Deve-se especificar o tamanho da tela."),ng()()()(),wl(893,"tr",13)(894,"td",14)(895,"div",15)(896,"span",16),Ux(897," gridXlColumns"),Ul(898,"br"),ng()()(),wl(899,"td",17)(900,"code",47),Ux(901,"number"),ng()(),wl(902,"td",20)(903,"em")(904,"strong"),Ux(905,"(opcional)"),ng()(),wl(906,"p"),Ux(907,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),ng(),wl(908,"p"),Ux(909,"Deve ser usado o sistema de "),wl(910,"strong"),Ux(911,"grid"),ng(),Ux(912," do PO (1 ... 12 colunas)."),ng(),wl(913,"blockquote")(914,"p"),Ux(915,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(916,"code"),Ux(917,"gridColumns"),ng(),Ux(918,"."),ng()()()(),wl(919,"tr",13)(920,"td",14)(921,"div",15)(922,"span",16),Ux(923," gridXlPull"),Ul(924,"br"),ng()()(),wl(925,"td",17)(926,"code",47),Ux(927,"number"),ng()(),wl(928,"td",20)(929,"em")(930,"strong"),Ux(931,"(opcional)"),ng()(),wl(932,"p"),Ux(933,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),ng(),wl(934,"p"),Ux(935,"Deve ser usado o sistema de "),wl(936,"strong"),Ux(937,"grid"),ng(),Ux(938," do PO (1 ... 11 colunas)."),ng(),wl(939,"blockquote")(940,"p"),Ux(941,"Esta propriedade n\xE3o funciona com a propriedade "),wl(942,"code"),Ux(943,"gridColumns"),ng(),Ux(944,". Deve-se especificar o tamanho da tela."),ng()()()(),wl(945,"tr",13)(946,"td",14)(947,"div",15)(948,"span",16),Ux(949," height"),Ul(950,"br"),ng()()(),wl(951,"td",17)(952,"code",18),Ux(953,"string"),ng()(),wl(954,"td",20)(955,"em")(956,"strong"),Ux(957,"(opcional)"),ng()(),wl(958,"p"),Ux(959,"Defini o texto alternativo descrevendo a imagem."),ng(),wl(960,"p"),Ux(961,"Exemplo de utiliza\xE7\xE3o:"),ng(),wl(962,"pre")(963,"code"),Ux(964,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),ng()(),wl(965,"p")(966,"strong"),Ux(967,"Componentes compat\xEDveis:"),ng(),wl(968,"code"),Ux(969,"po-image"),ng(),Ux(970,"."),ng()()(),wl(971,"tr",13)(972,"td",14)(973,"div",15)(974,"span",16),Ux(975," icon"),Ul(976,"br"),ng()()(),wl(977,"td",17)(978,"code",18),Ux(979,"string"),ng()(),wl(980,"td",20)(981,"em")(982,"strong"),Ux(983,"(opcional)"),ng()(),wl(984,"p"),Ux(985,"Define um \xEDcone que ser\xE1 exibido ao lado do valor para o campo do tipo "),wl(986,"em"),Ux(987,"tag"),ng(),Ux(988,"."),ng(),wl(989,"blockquote")(990,"p"),Ux(991,"Veja os valores v\xE1lidos na "),wl(992,"a",48),Ux(993,"biblioteca de \xEDcones"),ng(),Ux(994,"."),ng()()()(),wl(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),Ux(999," image"),Ul(1e3,"br"),ng()()(),wl(1001,"td",17)(1002,"code",24),Ux(1003,"boolean"),ng()(),wl(1004,"td",20)(1005,"em")(1006,"strong"),Ux(1007,"(opcional)"),ng()(),wl(1008,"p"),Ux(1009,"Possibilita a utiliza\xE7\xE3o de imagem."),ng(),wl(1010,"p"),Ux(1011,"Exemplo de utiliza\xE7\xE3o:"),ng(),wl(1012,"pre")(1013,"code"),Ux(1014,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),ng()(),wl(1015,"ul")(1016,"li"),Ux(1017,"@default "),wl(1018,"code"),Ux(1019,"false"),ng()()(),wl(1020,"p")(1021,"strong"),Ux(1022,"Componentes compat\xEDveis:"),ng(),wl(1023,"code"),Ux(1024,"po-image"),ng(),Ux(1025,"."),ng()()(),wl(1026,"tr",13)(1027,"td",14)(1028,"div",15)(1029,"span",16),Ux(1030," isArrayOrObject"),Ul(1031,"br"),ng()()(),wl(1032,"td",17)(1033,"code",24),Ux(1034,"boolean"),ng()(),wl(1035,"td",20)(1036,"em")(1037,"strong"),Ux(1038,"(opcional)"),ng()(),wl(1039,"p"),Ux(1040,"Define que a propriedade "),wl(1041,"code"),Ux(1042,"property"),ng(),Ux(1043," \xE9 uma lista ou um objeto."),ng(),wl(1044,"blockquote")(1045,"p"),Ux(1046,"Por padr\xE3o, espera-se que a lista ou o objeto esteja com as propriedades "),wl(1047,"code"),Ux(1048,"label"),ng(),Ux(1049," e "),wl(1050,"code"),Ux(1051,"value"),ng(),Ux(1052,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),wl(1053,"code"),Ux(1054,"fieldLabel"),ng(),Ux(1055," e "),wl(1056,"code"),Ux(1057,"fieldValue"),ng(),Ux(1058,`.
\xC9 ignorada caso a propriedade `),wl(1059,"code"),Ux(1060,"searchService"),ng(),Ux(1061," esteja sendo utilizada."),ng()()()(),wl(1062,"tr",13)(1063,"td",14)(1064,"div",15)(1065,"span",16),Ux(1066," key"),Ul(1067,"br"),ng()()(),wl(1068,"td",17)(1069,"code",24),Ux(1070,"boolean"),ng()(),wl(1071,"td",20)(1072,"em")(1073,"strong"),Ux(1074,"(opcional)"),ng()(),wl(1075,"p"),Ux(1076,"Identificador"),ng()()(),wl(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),Ux(1081," label"),Ul(1082,"br"),ng()()(),wl(1083,"td",17)(1084,"code",18),Ux(1085,"string"),ng()(),wl(1086,"td",20)(1087,"em")(1088,"strong"),Ux(1089,"(opcional)"),ng()(),wl(1090,"p"),Ux(1091,"R\xF3tulo do campo exibido."),ng(),wl(1092,"p"),Ux(1093,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),wl(1094,"code"),Ux(1095,"label"),ng(),Ux(1096," o valor da propriedade "),wl(1097,"code"),Ux(1098,"property"),ng(),Ux(1099," com a primeira letra em mai\xFAsculo."),ng()()(),wl(1100,"tr",13)(1101,"td",14)(1102,"div",15)(1103,"span",16),Ux(1104," offsetColumns"),Ul(1105,"br"),ng()()(),wl(1106,"td",17)(1107,"code",47),Ux(1108,"number"),ng()(),wl(1109,"td",20)(1110,"em")(1111,"strong"),Ux(1112,"(opcional)"),ng()(),wl(1113,"p"),Ux(1114,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),ng(),wl(1115,"p"),Ux(1116,"Deve ser usado o sistema de "),wl(1117,"strong"),Ux(1118,"grid"),ng(),Ux(1119," do PO (1 ... 12 colunas)."),ng(),wl(1120,"blockquote")(1121,"p"),Ux(1122,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),ng()()()(),wl(1123,"tr",13)(1124,"td",14)(1125,"div",15)(1126,"span",16),Ux(1127," offsetLgColumns"),Ul(1128,"br"),ng()()(),wl(1129,"td",17)(1130,"code",47),Ux(1131,"number"),ng()(),wl(1132,"td",20)(1133,"em")(1134,"strong"),Ux(1135,"(opcional)"),ng()(),wl(1136,"p"),Ux(1137,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),ng(),wl(1138,"p"),Ux(1139,"Deve ser usado o sistema de "),wl(1140,"strong"),Ux(1141,"grid"),ng(),Ux(1142," do PO (1 ... 12 colunas)."),ng(),wl(1143,"blockquote")(1144,"p"),Ux(1145,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(1146,"code"),Ux(1147,"offsetColumns"),ng(),Ux(1148,"."),ng()()()(),wl(1149,"tr",13)(1150,"td",14)(1151,"div",15)(1152,"span",16),Ux(1153," offsetMdColumns"),Ul(1154,"br"),ng()()(),wl(1155,"td",17)(1156,"code",47),Ux(1157,"number"),ng()(),wl(1158,"td",20)(1159,"em")(1160,"strong"),Ux(1161,"(opcional)"),ng()(),wl(1162,"p"),Ux(1163,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),ng(),wl(1164,"p"),Ux(1165,"Deve ser usado o sistema de "),wl(1166,"strong"),Ux(1167,"grid"),ng(),Ux(1168," do PO (1 ... 12 colunas)."),ng(),wl(1169,"blockquote")(1170,"p"),Ux(1171,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(1172,"code"),Ux(1173,"offsetColumns"),ng(),Ux(1174,"."),ng()()()(),wl(1175,"tr",13)(1176,"td",14)(1177,"div",15)(1178,"span",16),Ux(1179," offsetSmColumns"),Ul(1180,"br"),ng()()(),wl(1181,"td",17)(1182,"code",47),Ux(1183,"number"),ng()(),wl(1184,"td",20)(1185,"em")(1186,"strong"),Ux(1187,"(opcional)"),ng()(),wl(1188,"p"),Ux(1189,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),ng(),wl(1190,"p"),Ux(1191,"Deve ser usado o sistema de "),wl(1192,"strong"),Ux(1193,"grid"),ng(),Ux(1194," do PO (1 ... 12 colunas)."),ng(),wl(1195,"blockquote")(1196,"p"),Ux(1197,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(1198,"code"),Ux(1199,"offsetColumns"),ng(),Ux(1200,"."),ng()()()(),wl(1201,"tr",13)(1202,"td",14)(1203,"div",15)(1204,"span",16),Ux(1205," offsetXlColumns"),Ul(1206,"br"),ng()()(),wl(1207,"td",17)(1208,"code",47),Ux(1209,"number"),ng()(),wl(1210,"td",20)(1211,"em")(1212,"strong"),Ux(1213,"(opcional)"),ng()(),wl(1214,"p"),Ux(1215,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),ng(),wl(1216,"p"),Ux(1217,"Deve ser usado o sistema de "),wl(1218,"strong"),Ux(1219,"grid"),ng(),Ux(1220," do PO (1 ... 12 colunas)."),ng(),wl(1221,"blockquote")(1222,"p"),Ux(1223,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(1224,"code"),Ux(1225,"offsetColumns"),ng(),Ux(1226,"."),ng()()()(),wl(1227,"tr",13)(1228,"td",14)(1229,"div",15)(1230,"span",16),Ux(1231," options"),Ul(1232,"br"),ng()()(),wl(1233,"td",17)(1234,"code",49),Ux(1235,"Array<{ label: string; value: string "),ng(),wl(1236,"code",50),Ux(1237,` number;
}>`),ng()(),wl(1238,"td",20)(1239,"em")(1240,"strong"),Ux(1241,"(opcional)"),ng()(),wl(1242,"p"),Ux(1243,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),ng(),wl(1244,"p"),Ux(1245,"Exemplo de utiliza\xE7\xE3o:"),ng(),wl(1246,"pre")(1247,"code"),Ux(1248,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),ng()(),wl(1249,"pre")(1250,"code"),Ux(1251,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),ng()()()(),wl(1252,"tr",13)(1253,"td",14)(1254,"div",15)(1255,"span",16),Ux(1256," optionsMulti"),Ul(1257,"br"),ng()()(),wl(1258,"td",17)(1259,"code",24),Ux(1260,"boolean"),ng()(),wl(1261,"td",20)(1262,"em")(1263,"strong"),Ux(1264,"(opcional)"),ng()(),wl(1265,"p"),Ux(1266,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),ng()()(),wl(1267,"tr",13)(1268,"td",14)(1269,"div",15)(1270,"span",16),Ux(1271," optionsService"),Ul(1272,"br"),ng()()(),wl(1273,"td",17)(1274,"code",18),Ux(1275,"string "),ng(),wl(1276,"code",51),Ux(1277," PoComboFilter "),ng(),wl(1278,"code",52),Ux(1279," PoMultiselectFilter"),ng()(),wl(1280,"td",20)(1281,"em")(1282,"strong"),Ux(1283,"(opcional)"),ng()(),wl(1284,"p"),Ux(1285,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),wl(1286,"strong"),Ux(1287,"Importante"),ng()(),wl(1288,"blockquote")(1289,"p"),Ux(1290,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),wl(1291,"a",53),Ux(1292,"guia de API do PO UI"),ng(),Ux(1293,"."),ng()()()(),wl(1294,"tr",13)(1295,"td",14)(1296,"div",15)(1297,"span",16),Ux(1298," order"),Ul(1299,"br"),ng()()(),wl(1300,"td",17)(1301,"code",47),Ux(1302,"number"),ng()(),wl(1303,"td",20)(1304,"em")(1305,"strong"),Ux(1306,"(opcional)"),ng()(),wl(1307,"p"),Ux(1308,"Informa a ordem de exibi\xE7\xE3o do campo."),ng(),wl(1309,"p"),Ux(1310,"Exemplo de utiliza\xE7\xE3o:"),ng(),wl(1311,"pre")(1312,"code"),Ux(1313,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),ng()(),wl(1314,"p"),Ux(1315,"Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:"),ng(),wl(1316,"pre")(1317,"code"),Ux(1318,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),ng()(),wl(1319,"p"),Ux(1320,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),ng(),wl(1321,"p"),Ux(1322,"Campos sem "),wl(1323,"code"),Ux(1324,"order"),ng(),Ux(1325,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),ng()()(),wl(1326,"tr",13)(1327,"td",14)(1328,"div",15)(1329,"span",16),Ux(1330," params"),Ul(1331,"br"),ng()()(),wl(1332,"td",17)(1333,"code",54),Ux(1334,"any"),ng()(),wl(1335,"td",20)(1336,"em")(1337,"strong"),Ux(1338,"(opcional)"),ng()(),wl(1339,"p"),Ux(1340,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca "),wl(1341,"code"),Ux(1342,"searchService"),ng(),Ux(1343," ou "),wl(1344,"code"),Ux(1345,"optionsService"),ng(),Ux(1346,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),ng(),wl(1347,"p"),Ux(1348,"Por exemplo, para o par\xE2metro "),wl(1349,"code"),Ux(1350,"{ age: 23 }"),ng(),Ux(1351," a URL da requisi\xE7\xE3o ficaria:"),ng(),wl(1352,"p")(1353,"code"),Ux(1354,"url + /1?age=23"),ng()()()(),wl(1355,"tr",13)(1356,"td",14)(1357,"div",15)(1358,"span",16),Ux(1359," property"),Ul(1360,"br"),ng()()(),wl(1361,"td",17)(1362,"code",18),Ux(1363,"string"),ng()(),wl(1364,"td",20)(1365,"p"),Ux(1366,"Nome de refer\xEAncia do campo."),ng()()(),wl(1367,"tr",13)(1368,"td",14)(1369,"div",15)(1370,"span",16),Ux(1371," searchService"),Ul(1372,"br"),ng()()(),wl(1373,"td",17)(1374,"code",18),Ux(1375,"string "),ng(),wl(1376,"code",55),Ux(1377," PoDynamicViewRequest"),ng()(),wl(1378,"td",20)(1379,"em")(1380,"strong"),Ux(1381,"(opcional)"),ng()(),wl(1382,"p"),Ux(1383,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),wl(1384,"strong"),Ux(1385,"Importante:"),ng()(),wl(1386,"blockquote")(1387,"p"),Ux(1388,"A propriedade "),wl(1389,"code"),Ux(1390,"property"),ng(),Ux(1391,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),wl(1392,"a",53),Ux(1393,"guia de API do PO UI"),ng(),Ux(1394,"."),ng()()()(),wl(1395,"tr",13)(1396,"td",14)(1397,"div",15)(1398,"span",16),Ux(1399," tag"),Ul(1400,"br"),ng()()(),wl(1401,"td",17)(1402,"code",24),Ux(1403,"boolean"),ng()(),wl(1404,"td",20)(1405,"em")(1406,"strong"),Ux(1407,"(opcional)"),ng()(),wl(1408,"p"),Ux(1409,"Indica se o campo ser\xE1 um "),wl(1410,"code"),Ux(1411,"po-tag"),ng(),Ux(1412,"."),ng()()(),wl(1413,"tr",13)(1414,"td",14)(1415,"div",15)(1416,"span",16),Ux(1417," textColor"),Ul(1418,"br"),ng()()(),wl(1419,"td",17)(1420,"code",18),Ux(1421,"string"),ng()(),wl(1422,"td",20)(1423,"em")(1424,"strong"),Ux(1425,"(opcional)"),ng()(),wl(1426,"p"),Ux(1427,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),ng(),wl(1428,"ul")(1429,"li"),Ux(1430,"Hexadeximal, por exemplo "),wl(1431,"code"),Ux(1432,"#c64840"),ng(),Ux(1433,";"),ng(),wl(1434,"li"),Ux(1435,"RGB, como "),wl(1436,"code"),Ux(1437,"rgb(0, 0, 165)"),ng(),Ux(1438,";"),ng(),wl(1439,"li"),Ux(1440,"O nome da cor, por exemplo "),wl(1441,"code"),Ux(1442,"blue"),ng(),Ux(1443,";"),ng()()()(),wl(1444,"tr",13)(1445,"td",14)(1446,"div",15)(1447,"span",16),Ux(1448," type"),Ul(1449,"br"),ng()()(),wl(1450,"td",17)(1451,"code",18),Ux(1452,"string "),ng(),wl(1453,"code",56),Ux(1454," PoDynamicFieldType"),ng()(),wl(1455,"td",20)(1456,"em")(1457,"strong"),Ux(1458,"(opcional)"),ng()(),wl(1459,"p"),Ux(1460,"Tipo do valor campo."),ng(),wl(1461,"p"),Ux(1462,"Valores v\xE1lidos:"),ng(),wl(1463,"ul")(1464,"li")(1465,"code"),Ux(1466,"boolean"),ng(),Ux(1467,": Valores "),wl(1468,"em"),Ux(1469,"booleanos"),ng(),Ux(1470,"."),ng(),wl(1471,"li")(1472,"code"),Ux(1473,"currency"),ng(),Ux(1474,": Valores monet\xE1rios."),ng(),wl(1475,"li")(1476,"code"),Ux(1477,"decimal"),ng(),Ux(1478,": Valores decimais."),ng(),wl(1479,"li")(1480,"code"),Ux(1481,"date"),ng(),Ux(1482,": Valores de datas."),wl(1483,"ul")(1484,"li"),Ux(1485,"Aceita os tipos "),wl(1486,"strong"),Ux(1487,"string"),ng(),Ux(1488," e "),wl(1489,"strong"),Ux(1490,"Date"),ng(),Ux(1491,` padr\xE3o do Javascript,
por exemplo: `),wl(1492,"code"),Ux(1493,"'2017-11-28'"),ng(),Ux(1494," ou "),wl(1495,"code"),Ux(1496,"new Date(2017, 10, 28)"),ng(),Ux(1497,"."),ng()()(),wl(1498,"li")(1499,"code"),Ux(1500,"dateTime"),ng(),Ux(1501,": Valor de data com hor\xE1rio."),wl(1502,"ul")(1503,"li"),Ux(1504,"Aceita o tipo "),wl(1505,"em"),Ux(1506,"string"),ng(),Ux(1507," no formato "),wl(1508,"strong"),Ux(1509,"ISO-8601"),ng(),Ux(1510," extendido "),wl(1511,"strong"),Ux(1512,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),ng(),Ux(1513,`
e o tipo `),wl(1514,"strong"),Ux(1515,"Date"),ng(),Ux(1516," padr\xE3o do Javascript, por exemplo: "),wl(1517,"code"),Ux(1518,"'2017-11-28T00:00:00-02:00'"),ng(),Ux(1519," ou "),wl(1520,"code"),Ux(1521,"new Date(2017, 10, 28)"),ng(),Ux(1522,"."),ng()()(),wl(1523,"li")(1524,"code"),Ux(1525,"number"),ng(),Ux(1526,": Valores num\xE9ricos."),ng(),wl(1527,"li")(1528,"code"),Ux(1529,"string"),ng(),Ux(1530,": Textos."),ng(),wl(1531,"li")(1532,"code"),Ux(1533,"time"),ng(),Ux(1534,": Valor do hor\xE1rio."),wl(1535,"ul")(1536,"li"),Ux(1537,"Aceita o tipo "),wl(1538,"strong"),Ux(1539,"string"),ng(),Ux(1540," nos formatos "),wl(1541,"strong"),Ux(1542,"'HH:mm:ss'"),ng(),Ux(1543," ou "),wl(1544,"strong"),Ux(1545,"'HH:mm:ss.ffffff'"),ng(),Ux(1546,", por exemplo: "),wl(1547,"code"),Ux(1548,"'23:12:45'"),ng(),Ux(1549,"."),ng()()()()()(),wl(1550,"tr",13)(1551,"td",14)(1552,"div",15)(1553,"span",16),Ux(1554," visible"),Ul(1555,"br"),ng()()(),wl(1556,"td",17)(1557,"code",24),Ux(1558,"boolean"),ng()(),wl(1559,"td",20)(1560,"em")(1561,"strong"),Ux(1562,"(opcional)"),ng()(),wl(1563,"p"),Ux(1564,"Indica se o campo ser\xE1 vis\xEDvel."),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var $=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Dynamic View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,r){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return r.changeTab("doc")}),Ul(3,"sample-po-dynamic-view-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return r.changeTab("web")}),Ul(5,"sample-po-dynamic-view-basic-view")(6,"sample-po-dynamic-view-employee-view")(7,"sample-po-dynamic-view-employee-on-load-view")(8,"sample-po-dynamic-view-container-view"),ng()()()),a&2&&(YE("p-actions",r.actions),Pp(2),YE("p-active",r.activeTab==="doc"),Pp(2),YE("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[D3,Vd,Rd,J,U,X,K,Y],encapsulation:2})}return o})();var ye=[{path:"",component:$}],ee=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[vL.forChild(ye),vL]})}return o})();var et=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[u5,ee]})}return o})();export{et as DocPoDynamicViewModule};