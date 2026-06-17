import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,r as rb,cL as yn,W as W$1,w,b3 as oNe,M as Wl,T as tw,bs as dN,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,a3 as pNe,X as we}from'./main-BY5NURRA.js';var Y=()=>({property:"name"}),$=o=>[o],ee=()=>({name:"Jhon"}),_=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-fields","p-value"]],template:function(a,l){a&1&&Wl(0,"po-dynamic-view",0),a&2&&tw("p-fields",dN(3,$,uN(2,Y)))("p-value",uN(5,ee));},dependencies:[oNe],encapsulation:2,changeDetection:1})}return o})();var ie=o=>({"docs-sample-code-tabs":o}),N=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dynamic View Basic"),sg(),Sl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dynamic-view-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ie,l.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,_],encapsulation:2})}return o})();var R=(()=>{class o{fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",divider:"ADDITIONAL DATA",tag:true,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]},{property:"hobbies",label:"Hobbies",gridColumns:12,divider:"Additional Information"}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1",hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee"]],standalone:false,decls:2,vars:3,consts:[["p-title","Employee"],[3,"p-fields","p-value","p-text-wrap"]],template:function(a,l){a&1&&(Sl(0,"po-page-default",0),Wl(1,"po-dynamic-view",1),sg()),a&2&&(Vp(),tw("p-fields",l.fields)("p-value",l.employee)("p-text-wrap",true));},dependencies:[oNe,pNe],encapsulation:2,changeDetection:1})}return o})();var ae=o=>({"docs-sample-code-tabs":o}),G=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dynamic View - Employee"),sg(),Sl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dynamic-view-employee"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ae,l.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,R],encapsulation:2})}return o})();var O=(()=>{class o{httpClient=f(rb);headers=new yn({"X-PO-No-Message":"true"});url;filterParams;getObjectByValue(r,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(W$1(l=>"items"in l?l.items:l))}setConfig(r,a){this.url=r,this.filterParams=a;}static \u0275fac=function(a){return new(a||o)};static \u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var J=(()=>{class o{employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"A",wage:8000.5,availability:"Available",cities:[{city:"S\xE3o Paulo",id:"SP"},{city:"Joinville",id:"SC"},{city:"Belo Horizonte",id:"MG"}],admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",profile:"admin",image:"https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg"};fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"cities",isArrayOrObject:true,fieldLabel:"city",fieldValue:"id",concatLabelValue:true},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"image",divider:"Image",image:true,alt:"image",height:"250"}];_newService=f(O);ngOnInit(){this._newService.setConfig("https://po-sample-api.onrender.com/v1/hotels",{id:1485976673002});}customEmployeeData(){return {value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:"name",divider:"Personal data by load customization",order:1},{property:"cpf",tag:true,color:"color-07",order:2},{property:"rg",tag:true,color:"color-07",order:3},{property:"wage",type:"string",tag:true,color:"color-07"},{property:"genre",visible:false},{property:"job",tag:false},{searchService:this._newService,fieldLabel:"address_city",property:"city"}]}}checkProfile(){if(this.employee.profile==="admin")return "confidential"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-on-load"]],standalone:false,features:[we([O])],decls:2,vars:3,consts:[["p-title","Employee on Load"],[3,"p-fields","p-load","p-value"]],template:function(a,l){a&1&&(Sl(0,"po-page-default",0),Wl(1,"po-dynamic-view",1),sg()),a&2&&(Vp(),tw("p-fields",l.fields)("p-load",l.customEmployeeData.bind(l))("p-value",l.employee));},dependencies:[oNe,pNe],encapsulation:2,changeDetection:1})}return o})();var me=o=>({"docs-sample-code-tabs":o}),W=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-on-load-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dynamic View - Employee on load"),sg(),Sl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
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
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-dynamic-view-employee-on-load"),sg(),Wl(27,"hr")),a&2&&(Vp(5),Hx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,me,l.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,J],encapsulation:2})}return o})();var U=(()=>{class o{fields=[{property:"name",container:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",container:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",container:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",container:"ADDITIONAL DATA",tag:true,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1"};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-container"]],standalone:false,decls:2,vars:2,consts:[["p-title","Employee"],[3,"p-fields","p-value"]],template:function(a,l){a&1&&(Sl(0,"po-page-default",0),Wl(1,"po-dynamic-view",1),sg()),a&2&&(Vp(),tw("p-fields",l.fields)("p-value",l.employee));},dependencies:[oNe,pNe],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o}),Z=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-container-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dynamic View - Employee on load"),sg(),Sl(4,"a",2),ht("click",function(){return l.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dynamic-view-container"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+l.sampleCodeButtonIcon),Vp(),fg(" ",l.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,se,l.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,U],encapsulation:2})}return o})();var X=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-doc"]],standalone:false,decls:1565,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDynamicViewField[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","object"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<string>"],["href","https://angular.io/api/common/CurrencyPipe"],["href","https://angular.io/api/common/DatePipe"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<{","label:","string;","value:","string"],["pan","",1,"docs-api-property-type","number;","}>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoDynamicViewRequest"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"]],template:function(a,l){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),sg()(),Wl(4,"div",2),Sl(5,"h3",3),Jx(6,"Componente"),sg(),Sl(7,"h4",4)(8,"code",5),Jx(9,"PoDynamicViewComponent"),sg()(),Sl(10,"div",2)(11,"p"),Jx(12,"Componente para listar dados dinamicamente a partir de uma lista de objetos."),sg(),Sl(13,"blockquote")(14,"p"),Jx(15,"Por padr\xE3o esse componente cria "),Sl(16,"code"),Jx(17,"po-info"),sg(),Jx(18," para exibi\xE7\xE3o, \xE9 poss\xEDvel criar "),Sl(19,"code"),Jx(20,"po-tag"),sg(),Jx(21," passando a propriedade { tag: true }. "),sg()()(),Sl(22,"div",6)(23,"h4",7),Jx(24,"Seletor"),sg(),Sl(25,"pre",8),Jx(26,`<po-dynamic-view
    p-components-size="string"
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),sg()(),Sl(27,"h4",9),Jx(28,"Propriedades"),sg(),Sl(29,"table",10)(30,"tr",11)(31,"th",12),Jx(32,"Nome"),sg(),Sl(33,"th",12),Jx(34,"Tipo"),sg(),Sl(35,"th",12),Jx(36,"Padr\xE3o"),sg(),Sl(37,"th",12),Jx(38,"Descri\xE7\xE3o"),sg()(),Sl(39,"tr",13)(40,"td",14)(41,"div",15)(42,"span",16),Jx(43," p-components-size"),Wl(44,"br"),sg()()(),Sl(45,"td",17)(46,"code",18),Jx(47,"string"),sg()(),Sl(48,"td",19)(49,"p")(50,"code"),Jx(51,"medium"),sg()()(),Sl(52,"td",20)(53,"em")(54,"strong"),Jx(55,"(opcional)"),sg()(),Sl(56,"p"),Jx(57,"Define o tamanho dos componentes no template entre "),Sl(58,"code"),Jx(59,"small"),sg(),Jx(60," ou "),Sl(61,"code"),Jx(62,"medium"),sg(),Jx(63,"."),sg(),Sl(64,"blockquote")(65,"p"),Jx(66,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(67,"code"),Jx(68,"medium"),sg(),Jx(69,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(70,"a",21),Jx(71,"po-theme"),sg(),Jx(72,"."),sg()()()(),Sl(73,"tr",13)(74,"td",14)(75,"div",15)(76,"span",16),Jx(77," p-fields"),Wl(78,"br"),sg()()(),Sl(79,"td",17)(80,"code",22),Jx(81,"PoDynamicViewField[]"),sg()(),Sl(82,"td",19)(83,"p")(84,"code"),Jx(85,"[]"),sg()()(),Sl(86,"td",20)(87,"em")(88,"strong"),Jx(89,"(opcional)"),sg()(),Sl(90,"p"),Jx(91,"Lista de objetos que implementam a interface "),Sl(92,"code"),Jx(93,"PoDynamicView"),sg(),Jx(94,"."),sg(),Sl(95,"blockquote")(96,"p"),Jx(97,"Ex: "),Sl(98,"code"),Jx(99,"[ { property: 'age' } ]"),sg()()(),Sl(100,"p"),Jx(101,"Regras de tipagem e formata\xE7\xE3o dos valores exibidos:"),sg(),Sl(102,"ul")(103,"li"),Jx(104,"Caso o "),Sl(105,"em"),Jx(106,"type"),sg(),Jx(107," informado seja "),Sl(108,"em"),Jx(109,"currency"),sg(),Jx(110," e n\xE3o seja informado o "),Sl(111,"em"),Jx(112,"format"),sg(),Jx(113,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),sg(),Sl(114,"li"),Jx(115,"Caso o "),Sl(116,"em"),Jx(117,"type"),sg(),Jx(118," informado seja "),Sl(119,"em"),Jx(120,"date"),sg(),Jx(121," e n\xE3o seja informado o "),Sl(122,"em"),Jx(123,"format"),sg(),Jx(124," o mesmo recebe 'dd/MM/yyyy' como formato padr\xE3o."),sg(),Sl(125,"li"),Jx(126,"Caso o "),Sl(127,"em"),Jx(128,"type"),sg(),Jx(129," informado seja "),Sl(130,"em"),Jx(131,"dateTime"),sg(),Jx(132," e n\xE3o seja informado o "),Sl(133,"em"),Jx(134,"format"),sg(),Jx(135," o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padr\xE3o."),sg(),Sl(136,"li"),Jx(137,"Caso o "),Sl(138,"em"),Jx(139,"type"),sg(),Jx(140," informado seja "),Sl(141,"em"),Jx(142,"number"),sg(),Jx(143," e n\xE3o seja informado o "),Sl(144,"em"),Jx(145,"format"),sg(),Jx(146," o mesmo n\xE3o ser\xE1 formatado."),sg(),Sl(147,"li"),Jx(148,"Caso o "),Sl(149,"em"),Jx(150,"type"),sg(),Jx(151," informado seja "),Sl(152,"em"),Jx(153,"time"),sg(),Jx(154," e n\xE3o seja informado o "),Sl(155,"em"),Jx(156,"format"),sg(),Jx(157," o mesmo recebe 'HH:mm:ss.ffffff' como formato padr\xE3o."),sg()(),Sl(158,"blockquote")(159,"p"),Jx(160,"As propriedades informadas ser\xE3o exibidas mesmo n\xE3o contendo valor de refer\xEAncia no objeto da propriedade "),Sl(161,"code"),Jx(162,"p-value"),sg(),Jx(163,"."),sg()()()(),Sl(164,"tr",13)(165,"td",14)(166,"div",15)(167,"span",16),Jx(168," p-load"),Wl(169,"br"),sg()()(),Sl(170,"td",17)(171,"code",18),Jx(172,"string "),sg(),Sl(173,"code",23),Jx(174," Function"),sg()(),Sl(175,"td",19),Jx(176,"-"),sg(),Sl(177,"td",20)(178,"em")(179,"strong"),Jx(180,"(opcional)"),sg()(),Sl(181,"p"),Jx(182,"Possibilita executar uma fun\xE7\xE3o quando o componente \xE9 inicializado."),sg(),Sl(183,"p"),Jx(184,"A propriedade aceita os seguintes tipos:"),sg(),Sl(185,"ul")(186,"li")(187,"strong"),Jx(188,"String"),sg(),Jx(189,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Sl(190,"code"),Jx(191,"POST"),sg(),Jx(192,"."),sg(),Sl(193,"li")(194,"strong"),Jx(195,"Function"),sg(),Jx(196,": M\xE9todo que ser\xE1 executado na inicializa\xE7\xE3o do componente."),sg()(),Sl(197,"p"),Jx(198,"Para os dois tipos de utiliza\xE7\xE3o da propriedade espera-se o seguinte retorno:"),sg(),Sl(199,"pre")(200,"code"),Jx(201,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),sg()(),Sl(202,"blockquote")(203,"p")(204,"strong"),Jx(205,"value"),sg(),Jx(206,": any = atribui novo valor do model."),sg()(),Sl(207,"blockquote")(208,"p")(209,"strong"),Jx(210,"fields"),sg(),Jx(211,": "),Sl(212,"code"),Jx(213,"Array<PoDynamicViewField>"),sg(),Jx(214,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),sg()(),Sl(215,"ul")(216,"li"),Jx(217,"Para esconder/remover campos precisa informar no field a propriedade "),Sl(218,"code"),Jx(219,"visible = false"),sg(),Jx(220,"."),sg()()()(),Sl(221,"tr",13)(222,"td",14)(223,"div",15)(224,"span",16),Jx(225," p-show-all-value"),Wl(226,"br"),sg()()(),Sl(227,"td",17)(228,"code",24),Jx(229,"boolean"),sg()(),Sl(230,"td",19)(231,"p")(232,"code"),Jx(233,"false"),sg()()(),Sl(234,"td",20)(235,"em")(236,"strong"),Jx(237,"(opcional)"),sg()(),Sl(238,"p"),Jx(239,"Indica se exibir\xE1 todas as informa\xE7\xF5es contidas dentro do objeto informado na propriedade "),Sl(240,"code"),Jx(241,"p-value"),sg(),Jx(242,"."),sg()()(),Sl(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),Jx(247," p-text-wrap"),Wl(248,"br"),sg()()(),Sl(249,"td",17)(250,"code",24),Jx(251,"boolean"),sg()(),Sl(252,"td",19)(253,"p")(254,"code"),Jx(255,"false"),sg()()(),Sl(256,"td",20)(257,"em")(258,"strong"),Jx(259,"(opcional)"),sg()(),Sl(260,"p"),Jx(261,"Permite a quebra de linha no texto do "),Sl(262,"code"),Jx(263,"p-value"),sg(),Jx(264,", aplicando-a onde h\xE1 "),Sl(265,"code"),Jx(266,"\\n"),sg(),Jx(267,"."),sg(),Sl(268,"pre")(269,"code"),Jx(270,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),sg()(),Sl(271,"p"),Jx(272,"Sa\xEDda:"),sg(),Sl(273,"pre")(274,"code"),Jx(275,`Primeira linha
Segunda linha
`),sg()()()(),Sl(276,"tr",13)(277,"td",14)(278,"div",15)(279,"span",16),Jx(280," p-value"),Wl(281,"br"),sg()()(),Sl(282,"td",17)(283,"code",25),Jx(284,"object"),sg()(),Sl(285,"td",19),Jx(286,"-"),sg(),Sl(287,"td",20)(288,"p"),Jx(289,"Objeto que ser\xE1 utilizado para exibir as informa\xE7\xF5es din\xE2micas, o valor ser\xE1 recuperado atrav\xE9s do atributo "),Sl(290,"em"),Jx(291,"property"),sg(),Jx(292,`
dos objetos contidos na propridade `),Sl(293,"code"),Jx(294,"p-fields"),sg(),Jx(295,"."),sg(),Sl(296,"blockquote")(297,"p"),Jx(298,"Ex: "),Sl(299,"code"),Jx(300,"{ age: '35' }"),sg()()()()()(),Sl(301,"h3"),Jx(302,"Interfaces"),sg(),Sl(303,"h4",26)(304,"code",5),Jx(305,"PoDynamicViewRequest"),sg()(),Sl(306,"div",2)(307,"p"),Jx(308,"Define o tipo de busca customizada para um campo em espec\xEDfico."),sg()(),Sl(309,"h4",9),Jx(310,"M\xE9todos"),sg(),Sl(311,"table",27)(312,"tr",13)(313,"th",28)(314,"div",15)(315,"h4")(316,"span",16),Jx(317," getObjectByValue "),sg()()()()(),Sl(318,"tr",20)(319,"td",20)(320,"p"),Jx(321,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),sg()()()(),Sl(322,"h5")(323,"b"),Jx(324,"Par\xE2metros"),sg()(),Sl(325,"table",10)(326,"tr",11)(327,"th",12),Jx(328,"Nome"),sg(),Sl(329,"th",12),Jx(330,"Tipo"),sg(),Sl(331,"th",12),Jx(332,"Descri\xE7\xE3o"),sg()(),Sl(333,"tr",13)(334,"td",14),Jx(335," value"),sg(),Sl(336,"td",17)(337,"code",18),Jx(338," string "),sg(),Sl(339,"code",29),Jx(340," Array<any> "),sg()(),Sl(341,"td",20)(342,"p"),Jx(343,"Valor \xFAnico a ser buscado na fonte de dados."),sg()()(),Sl(344,"tr",13)(345,"td",14),Jx(346," filterParams"),sg(),Sl(347,"td",17)(348,"code",30),Jx(349," any "),sg()(),Sl(350,"td",20)(351,"p"),Jx(352,"Valor opcional para informar filtros customizados."),sg()()()(),Wl(353,"br"),Sl(354,"h4",26)(355,"code",5),Jx(356,"PoDynamicViewField"),sg()(),Sl(357,"div",2)(358,"p"),Jx(359," Interface para defini\xE7\xE3o das propriedades dos campos de visualiza\xE7\xE3o que ser\xE3o criados dinamicamente."),sg()(),Sl(360,"h4",9),Jx(361,"Propriedades"),sg(),Sl(362,"table",10)(363,"tr",11)(364,"th",12),Jx(365,"Nome"),sg(),Sl(366,"th",12),Jx(367,"Tipo"),sg(),Sl(368,"th",12),Jx(369,"Descri\xE7\xE3o"),sg()(),Sl(370,"tr",13)(371,"td",14)(372,"div",15)(373,"span",16),Jx(374," alt"),Wl(375,"br"),sg()()(),Sl(376,"td",17)(377,"code",18),Jx(378,"string"),sg()(),Sl(379,"td",20)(380,"em")(381,"strong"),Jx(382,"(opcional)"),sg()(),Sl(383,"p"),Jx(384,"Defini o texto alternativo descrevendo a imagem."),sg(),Sl(385,"p"),Jx(386,"Exemplo de utiliza\xE7\xE3o:"),sg(),Sl(387,"pre")(388,"code"),Jx(389,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),sg()(),Sl(390,"p")(391,"strong"),Jx(392,"Componentes compat\xEDveis:"),sg(),Sl(393,"code"),Jx(394,"po-image"),sg(),Jx(395,"."),sg()()(),Sl(396,"tr",13)(397,"td",14)(398,"div",15)(399,"span",16),Jx(400," booleanFalse"),Wl(401,"br"),sg()()(),Sl(402,"td",17)(403,"code",18),Jx(404,"string"),sg()(),Sl(405,"td",20)(406,"em")(407,"strong"),Jx(408,"(opcional)"),sg()(),Sl(409,"p"),Jx(410,"Texto exibido quando o valor do componente for "),Sl(411,"em"),Jx(412,"false"),sg(),Jx(413,"."),sg()()(),Sl(414,"tr",13)(415,"td",14)(416,"div",15)(417,"span",16),Jx(418," booleanTrue"),Wl(419,"br"),sg()()(),Sl(420,"td",17)(421,"code",18),Jx(422,"string"),sg()(),Sl(423,"td",20)(424,"em")(425,"strong"),Jx(426,"(opcional)"),sg()(),Sl(427,"p"),Jx(428,"Texto exibido quando o valor do componente for "),Sl(429,"em"),Jx(430,"true"),sg(),Jx(431,"."),sg()()(),Sl(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),Jx(436," color"),Wl(437,"br"),sg()()(),Sl(438,"td",17)(439,"code",18),Jx(440,"string"),sg()(),Sl(441,"td",20)(442,"em")(443,"strong"),Jx(444,"(opcional)"),sg()(),Sl(445,"p"),Jx(446,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),sg(),Sl(447,"ul")(448,"li"),Jx(449,"Hexadeximal, por exemplo "),Sl(450,"code"),Jx(451,"#c64840"),sg(),Jx(452,";"),sg(),Sl(453,"li"),Jx(454,"RGB, como "),Sl(455,"code"),Jx(456,"rgb(0, 0, 165)"),sg(),Jx(457,";"),sg(),Sl(458,"li"),Jx(459,"O nome da cor, por exemplo "),Sl(460,"code"),Jx(461,"blue"),sg(),Jx(462,";"),sg(),Sl(463,"li"),Jx(464,"Usando uma das cores do tema do PO:"),sg(),Sl(465,"li"),Jx(466,"Valores v\xE1lidos:"),Sl(467,"ul")(468,"li"),Wl(469,"span",31),Sl(470,"code"),Jx(471,"color-01"),sg()(),Sl(472,"li"),Wl(473,"span",32),Sl(474,"code"),Jx(475,"color-02"),sg()(),Sl(476,"li"),Wl(477,"span",33),Sl(478,"code"),Jx(479,"color-03"),sg()(),Sl(480,"li"),Wl(481,"span",34),Sl(482,"code"),Jx(483,"color-04"),sg()(),Sl(484,"li"),Wl(485,"span",35),Sl(486,"code"),Jx(487,"color-05"),sg()(),Sl(488,"li"),Wl(489,"span",36),Sl(490,"code"),Jx(491,"color-06"),sg()(),Sl(492,"li"),Wl(493,"span",37),Sl(494,"code"),Jx(495,"color-07"),sg()(),Sl(496,"li"),Wl(497,"span",38),Sl(498,"code"),Jx(499,"color-08"),sg()(),Sl(500,"li"),Wl(501,"span",39),Sl(502,"code"),Jx(503,"color-09"),sg()(),Sl(504,"li"),Wl(505,"span",40),Sl(506,"code"),Jx(507,"color-10"),sg()(),Sl(508,"li"),Wl(509,"span",41),Sl(510,"code"),Jx(511,"color-11"),sg()(),Sl(512,"li"),Wl(513,"span",42),Sl(514,"code"),Jx(515,"color-12"),sg()()()()()()(),Sl(516,"tr",13)(517,"td",14)(518,"div",15)(519,"span",16),Jx(520," concatLabelValue"),Wl(521,"br"),sg()()(),Sl(522,"td",17)(523,"code",24),Jx(524,"boolean"),sg()(),Sl(525,"td",20)(526,"em")(527,"strong"),Jx(528,"(opcional)"),sg()(),Sl(529,"p"),Jx(530,"Permite que seja exibido em tela, de forma concatenada as propriedades "),Sl(531,"code"),Jx(532,"fieldLabel"),sg(),Jx(533," + "),Sl(534,"code"),Jx(535,"fieldValue"),sg(),Jx(536,`.
A ordem sempre ser\xE1 `),Sl(537,"code"),Jx(538,"fieldLabel"),sg(),Jx(539," e depois "),Sl(540,"code"),Jx(541,"fieldValue"),sg(),Jx(542,", n\xE3o sendo poss\xEDvel alterar."),sg(),Sl(543,"blockquote")(544,"p"),Jx(545,"Propriedade funciona corretamente caso as propriedades "),Sl(546,"code"),Jx(547,"fieldLabel"),sg(),Jx(548," e "),Sl(549,"code"),Jx(550,"fielValue"),sg(),Jx(551," sejam v\xE1lidas."),sg()()()(),Sl(552,"tr",13)(553,"td",14)(554,"div",15)(555,"span",16),Jx(556," container"),Wl(557,"br"),sg()()(),Sl(558,"td",17)(559,"code",18),Jx(560,"string"),sg()(),Sl(561,"td",20)(562,"em")(563,"strong"),Jx(564,"(opcional)"),sg()(),Sl(565,"p"),Jx(566,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),sg(),Sl(567,"p"),Jx(568,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),sg()()(),Sl(569,"tr",13)(570,"td",14)(571,"div",15)(572,"span",16),Jx(573," divider"),Wl(574,"br"),sg()()(),Sl(575,"td",17)(576,"code",18),Jx(577,"string"),sg()(),Sl(578,"td",20)(579,"em")(580,"strong"),Jx(581,"(opcional)"),sg()(),Sl(582,"p"),Jx(583,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),sg()()(),Sl(584,"tr",13)(585,"td",14)(586,"div",15)(587,"span",16),Jx(588," fieldLabel"),Wl(589,"br"),sg()()(),Sl(590,"td",17)(591,"code",18),Jx(592,"string"),sg()(),Sl(593,"td",20)(594,"em")(595,"strong"),Jx(596,"(opcional)"),sg()(),Sl(597,"p"),Jx(598,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),sg(),Sl(599,"p"),Jx(600,"O valor padr\xE3o \xE9: "),Sl(601,"code"),Jx(602,"label"),sg(),Jx(603,"."),sg()()(),Sl(604,"tr",13)(605,"td",14)(606,"div",15)(607,"span",16),Jx(608," fieldValue"),Wl(609,"br"),sg()()(),Sl(610,"td",17)(611,"code",18),Jx(612,"string"),sg()(),Sl(613,"td",20)(614,"em")(615,"strong"),Jx(616,"(opcional)"),sg()(),Sl(617,"p"),Jx(618,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),sg(),Sl(619,"p"),Jx(620,"O valor padr\xE3o \xE9: "),Sl(621,"code"),Jx(622,"value"),sg(),Jx(623,"."),sg()()(),Sl(624,"tr",13)(625,"td",14)(626,"div",15)(627,"span",16),Jx(628," format"),Wl(629,"br"),sg()()(),Sl(630,"td",17)(631,"code",18),Jx(632,"string "),sg(),Sl(633,"code",43),Jx(634," Array<string>"),sg()(),Sl(635,"td",20)(636,"em")(637,"strong"),Jx(638,"(opcional)"),sg()(),Sl(639,"p"),Jx(640,"Define o formato de exibi\xE7\xE3o para o valor de um campo."),sg(),Sl(641,"ul")(642,"li")(643,"p"),Jx(644,"Quando "),Sl(645,"code"),Jx(646,"format"),sg(),Jx(647," \xE9 uma "),Sl(648,"code"),Jx(649,"string"),sg(),Jx(650,", o formato aplicado depende da propriedade "),Sl(651,"strong"),Jx(652,"type"),sg(),Jx(653," segue como usar cada tipo:"),sg(),Sl(654,"ul")(655,"li")(656,"code"),Jx(657,"currency"),sg(),Jx(658,": Utiliza c\xF3digos de moeda definidos pelo "),Sl(659,"a",44),Jx(660,"CurrencyPipe"),sg(),Jx(661,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),sg(),Sl(662,"li")(663,"code"),Jx(664,"date"),sg(),Jx(665,": Adota formatos de data especificados pelo "),Sl(666,"a",45),Jx(667,"DatePipe"),sg(),Jx(668,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),sg(),Sl(669,"li")(670,"code"),Jx(671,"time"),sg(),Jx(672,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),sg(),Sl(673,"li")(674,"code"),Jx(675,"number"),sg(),Jx(676,": Usa especifica\xE7\xF5es do "),Sl(677,"a",46),Jx(678,"DecimalPipe"),sg(),Jx(679,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),Sl(680,"code"),Jx(681,"50"),sg(),Jx(682,", formato "),Sl(683,"code"),Jx(684,"'1.2-5'"),sg(),Jx(685,", resulta em "),Sl(686,"code"),Jx(687,"50.00"),sg(),Jx(688,"."),sg()()(),Sl(689,"li")(690,"p"),Jx(691,"Quando "),Sl(692,"code"),Jx(693,"format"),sg(),Jx(694," \xE9 um "),Sl(695,"code"),Jx(696,"Array<string>"),sg(),Jx(697,":"),sg(),Sl(698,"ul")(699,"li"),Jx(700,"Cada elemento do array representa uma propriedade do objeto."),sg(),Sl(701,"li"),Jx(702,"Os valores dessas propriedades s\xE3o concatenados, separados pelo padr\xE3o ' - '."),sg(),Sl(703,"li"),Jx(704,"Exemplo: Para "),Sl(705,"code"),Jx(706,'format: ["id", "name"]'),sg(),Jx(707," e um objeto "),Sl(708,"code"),Jx(709,"{ id: 1, name: 'Carlos Diego' }"),sg(),Jx(710,`,
o resultado ser\xE1 `),Sl(711,"code"),Jx(712,"'1 - Carlos Diego'"),sg(),Jx(713,"."),sg()()()()()(),Sl(714,"tr",13)(715,"td",14)(716,"div",15)(717,"span",16),Jx(718," gridColumns"),Wl(719,"br"),sg()()(),Sl(720,"td",17)(721,"code",47),Jx(722,"number"),sg()(),Sl(723,"td",20)(724,"em")(725,"strong"),Jx(726,"(opcional)"),sg()(),Sl(727,"p"),Jx(728,"Tamanho de exibi\xE7\xE3o do campo em telas."),sg(),Sl(729,"p"),Jx(730,"Deve ser usado o sistema de "),Sl(731,"strong"),Jx(732,"grid"),sg(),Jx(733," do PO (1 ... 12 colunas)."),sg(),Sl(734,"blockquote")(735,"p"),Jx(736,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Sl(737,"tr",13)(738,"td",14)(739,"div",15)(740,"span",16),Jx(741," gridLgColumns"),Wl(742,"br"),sg()()(),Sl(743,"td",17)(744,"code",47),Jx(745,"number"),sg()(),Sl(746,"td",20)(747,"em")(748,"strong"),Jx(749,"(opcional)"),sg()(),Sl(750,"p"),Jx(751,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Sl(752,"p"),Jx(753,"Deve ser usado o sistema de "),Sl(754,"strong"),Jx(755,"grid"),sg(),Jx(756," do PO (1 ... 12 colunas)."),sg(),Sl(757,"blockquote")(758,"p"),Jx(759,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(760,"code"),Jx(761,"gridColumns"),sg(),Jx(762,"."),sg()()()(),Sl(763,"tr",13)(764,"td",14)(765,"div",15)(766,"span",16),Jx(767," gridLgPull"),Wl(768,"br"),sg()()(),Sl(769,"td",17)(770,"code",47),Jx(771,"number"),sg()(),Sl(772,"td",20)(773,"em")(774,"strong"),Jx(775,"(opcional)"),sg()(),Sl(776,"p"),Jx(777,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),sg(),Sl(778,"p"),Jx(779,"Deve ser usado o sistema de "),Sl(780,"strong"),Jx(781,"grid"),sg(),Jx(782," do PO (1 ... 11 colunas)."),sg(),Sl(783,"blockquote")(784,"p"),Jx(785,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(786,"code"),Jx(787,"gridColumns"),sg(),Jx(788,". Deve-se especificar o tamanho da tela."),sg()()()(),Sl(789,"tr",13)(790,"td",14)(791,"div",15)(792,"span",16),Jx(793," gridMdColumns"),Wl(794,"br"),sg()()(),Sl(795,"td",17)(796,"code",47),Jx(797,"number"),sg()(),Sl(798,"td",20)(799,"em")(800,"strong"),Jx(801,"(opcional)"),sg()(),Sl(802,"p"),Jx(803,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Sl(804,"p"),Jx(805,"Deve ser usado o sistema de "),Sl(806,"strong"),Jx(807,"grid"),sg(),Jx(808," do PO (1 ... 12 colunas)."),sg(),Sl(809,"blockquote")(810,"p"),Jx(811,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(812,"code"),Jx(813,"gridColumns"),sg(),Jx(814,"."),sg()()()(),Sl(815,"tr",13)(816,"td",14)(817,"div",15)(818,"span",16),Jx(819," gridMdPull"),Wl(820,"br"),sg()()(),Sl(821,"td",17)(822,"code",47),Jx(823,"number"),sg()(),Sl(824,"td",20)(825,"em")(826,"strong"),Jx(827,"(opcional)"),sg()(),Sl(828,"p"),Jx(829,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),sg(),Sl(830,"p"),Jx(831,"Deve ser usado o sistema de "),Sl(832,"strong"),Jx(833,"grid"),sg(),Jx(834," do PO (1 ... 11 colunas)."),sg(),Sl(835,"blockquote")(836,"p"),Jx(837,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(838,"code"),Jx(839,"gridColumns"),sg(),Jx(840,". Deve-se especificar o tamanho da tela."),sg()()()(),Sl(841,"tr",13)(842,"td",14)(843,"div",15)(844,"span",16),Jx(845," gridSmColumns"),Wl(846,"br"),sg()()(),Sl(847,"td",17)(848,"code",47),Jx(849,"number"),sg()(),Sl(850,"td",20)(851,"em")(852,"strong"),Jx(853,"(opcional)"),sg()(),Sl(854,"p"),Jx(855,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Sl(856,"p"),Jx(857,"Deve ser usado o sistema de "),Sl(858,"strong"),Jx(859,"grid"),sg(),Jx(860," do PO (1 ... 12 colunas)."),sg(),Sl(861,"blockquote")(862,"p"),Jx(863,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(864,"code"),Jx(865,"gridColumns"),sg(),Jx(866,"."),sg()()()(),Sl(867,"tr",13)(868,"td",14)(869,"div",15)(870,"span",16),Jx(871," gridSmPull"),Wl(872,"br"),sg()()(),Sl(873,"td",17)(874,"code",47),Jx(875,"number"),sg()(),Sl(876,"td",20)(877,"em")(878,"strong"),Jx(879,"(opcional)"),sg()(),Sl(880,"p"),Jx(881,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),sg(),Sl(882,"p"),Jx(883,"Deve ser usado o sistema de "),Sl(884,"strong"),Jx(885,"grid"),sg(),Jx(886," do PO (1 ... 11 colunas)."),sg(),Sl(887,"blockquote")(888,"p"),Jx(889,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(890,"code"),Jx(891,"gridColumns"),sg(),Jx(892,". Deve-se especificar o tamanho da tela."),sg()()()(),Sl(893,"tr",13)(894,"td",14)(895,"div",15)(896,"span",16),Jx(897," gridXlColumns"),Wl(898,"br"),sg()()(),Sl(899,"td",17)(900,"code",47),Jx(901,"number"),sg()(),Sl(902,"td",20)(903,"em")(904,"strong"),Jx(905,"(opcional)"),sg()(),Sl(906,"p"),Jx(907,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Sl(908,"p"),Jx(909,"Deve ser usado o sistema de "),Sl(910,"strong"),Jx(911,"grid"),sg(),Jx(912," do PO (1 ... 12 colunas)."),sg(),Sl(913,"blockquote")(914,"p"),Jx(915,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(916,"code"),Jx(917,"gridColumns"),sg(),Jx(918,"."),sg()()()(),Sl(919,"tr",13)(920,"td",14)(921,"div",15)(922,"span",16),Jx(923," gridXlPull"),Wl(924,"br"),sg()()(),Sl(925,"td",17)(926,"code",47),Jx(927,"number"),sg()(),Sl(928,"td",20)(929,"em")(930,"strong"),Jx(931,"(opcional)"),sg()(),Sl(932,"p"),Jx(933,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),sg(),Sl(934,"p"),Jx(935,"Deve ser usado o sistema de "),Sl(936,"strong"),Jx(937,"grid"),sg(),Jx(938," do PO (1 ... 11 colunas)."),sg(),Sl(939,"blockquote")(940,"p"),Jx(941,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(942,"code"),Jx(943,"gridColumns"),sg(),Jx(944,". Deve-se especificar o tamanho da tela."),sg()()()(),Sl(945,"tr",13)(946,"td",14)(947,"div",15)(948,"span",16),Jx(949," height"),Wl(950,"br"),sg()()(),Sl(951,"td",17)(952,"code",18),Jx(953,"string"),sg()(),Sl(954,"td",20)(955,"em")(956,"strong"),Jx(957,"(opcional)"),sg()(),Sl(958,"p"),Jx(959,"Defini o texto alternativo descrevendo a imagem."),sg(),Sl(960,"p"),Jx(961,"Exemplo de utiliza\xE7\xE3o:"),sg(),Sl(962,"pre")(963,"code"),Jx(964,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),sg()(),Sl(965,"p")(966,"strong"),Jx(967,"Componentes compat\xEDveis:"),sg(),Sl(968,"code"),Jx(969,"po-image"),sg(),Jx(970,"."),sg()()(),Sl(971,"tr",13)(972,"td",14)(973,"div",15)(974,"span",16),Jx(975," icon"),Wl(976,"br"),sg()()(),Sl(977,"td",17)(978,"code",18),Jx(979,"string"),sg()(),Sl(980,"td",20)(981,"em")(982,"strong"),Jx(983,"(opcional)"),sg()(),Sl(984,"p"),Jx(985,"Define um \xEDcone que ser\xE1 exibido ao lado do valor para o campo do tipo "),Sl(986,"em"),Jx(987,"tag"),sg(),Jx(988,"."),sg(),Sl(989,"blockquote")(990,"p"),Jx(991,"Veja os valores v\xE1lidos na "),Sl(992,"a",48),Jx(993,"biblioteca de \xEDcones"),sg(),Jx(994,"."),sg()()()(),Sl(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),Jx(999," image"),Wl(1e3,"br"),sg()()(),Sl(1001,"td",17)(1002,"code",24),Jx(1003,"boolean"),sg()(),Sl(1004,"td",20)(1005,"em")(1006,"strong"),Jx(1007,"(opcional)"),sg()(),Sl(1008,"p"),Jx(1009,"Possibilita a utiliza\xE7\xE3o de imagem."),sg(),Sl(1010,"p"),Jx(1011,"Exemplo de utiliza\xE7\xE3o:"),sg(),Sl(1012,"pre")(1013,"code"),Jx(1014,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),sg()(),Sl(1015,"ul")(1016,"li"),Jx(1017,"@default "),Sl(1018,"code"),Jx(1019,"false"),sg()()(),Sl(1020,"p")(1021,"strong"),Jx(1022,"Componentes compat\xEDveis:"),sg(),Sl(1023,"code"),Jx(1024,"po-image"),sg(),Jx(1025,"."),sg()()(),Sl(1026,"tr",13)(1027,"td",14)(1028,"div",15)(1029,"span",16),Jx(1030," isArrayOrObject"),Wl(1031,"br"),sg()()(),Sl(1032,"td",17)(1033,"code",24),Jx(1034,"boolean"),sg()(),Sl(1035,"td",20)(1036,"em")(1037,"strong"),Jx(1038,"(opcional)"),sg()(),Sl(1039,"p"),Jx(1040,"Define que a propriedade "),Sl(1041,"code"),Jx(1042,"property"),sg(),Jx(1043," \xE9 uma lista ou um objeto."),sg(),Sl(1044,"blockquote")(1045,"p"),Jx(1046,"Por padr\xE3o, espera-se que a lista ou o objeto esteja com as propriedades "),Sl(1047,"code"),Jx(1048,"label"),sg(),Jx(1049," e "),Sl(1050,"code"),Jx(1051,"value"),sg(),Jx(1052,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),Sl(1053,"code"),Jx(1054,"fieldLabel"),sg(),Jx(1055," e "),Sl(1056,"code"),Jx(1057,"fieldValue"),sg(),Jx(1058,`.
\xC9 ignorada caso a propriedade `),Sl(1059,"code"),Jx(1060,"searchService"),sg(),Jx(1061," esteja sendo utilizada."),sg()()()(),Sl(1062,"tr",13)(1063,"td",14)(1064,"div",15)(1065,"span",16),Jx(1066," key"),Wl(1067,"br"),sg()()(),Sl(1068,"td",17)(1069,"code",24),Jx(1070,"boolean"),sg()(),Sl(1071,"td",20)(1072,"em")(1073,"strong"),Jx(1074,"(opcional)"),sg()(),Sl(1075,"p"),Jx(1076,"Identificador"),sg()()(),Sl(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),Jx(1081," label"),Wl(1082,"br"),sg()()(),Sl(1083,"td",17)(1084,"code",18),Jx(1085,"string"),sg()(),Sl(1086,"td",20)(1087,"em")(1088,"strong"),Jx(1089,"(opcional)"),sg()(),Sl(1090,"p"),Jx(1091,"R\xF3tulo do campo exibido."),sg(),Sl(1092,"p"),Jx(1093,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Sl(1094,"code"),Jx(1095,"label"),sg(),Jx(1096," o valor da propriedade "),Sl(1097,"code"),Jx(1098,"property"),sg(),Jx(1099," com a primeira letra em mai\xFAsculo."),sg()()(),Sl(1100,"tr",13)(1101,"td",14)(1102,"div",15)(1103,"span",16),Jx(1104," offsetColumns"),Wl(1105,"br"),sg()()(),Sl(1106,"td",17)(1107,"code",47),Jx(1108,"number"),sg()(),Sl(1109,"td",20)(1110,"em")(1111,"strong"),Jx(1112,"(opcional)"),sg()(),Sl(1113,"p"),Jx(1114,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),sg(),Sl(1115,"p"),Jx(1116,"Deve ser usado o sistema de "),Sl(1117,"strong"),Jx(1118,"grid"),sg(),Jx(1119," do PO (1 ... 12 colunas)."),sg(),Sl(1120,"blockquote")(1121,"p"),Jx(1122,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Sl(1123,"tr",13)(1124,"td",14)(1125,"div",15)(1126,"span",16),Jx(1127," offsetLgColumns"),Wl(1128,"br"),sg()()(),Sl(1129,"td",17)(1130,"code",47),Jx(1131,"number"),sg()(),Sl(1132,"td",20)(1133,"em")(1134,"strong"),Jx(1135,"(opcional)"),sg()(),Sl(1136,"p"),Jx(1137,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Sl(1138,"p"),Jx(1139,"Deve ser usado o sistema de "),Sl(1140,"strong"),Jx(1141,"grid"),sg(),Jx(1142," do PO (1 ... 12 colunas)."),sg(),Sl(1143,"blockquote")(1144,"p"),Jx(1145,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(1146,"code"),Jx(1147,"offsetColumns"),sg(),Jx(1148,"."),sg()()()(),Sl(1149,"tr",13)(1150,"td",14)(1151,"div",15)(1152,"span",16),Jx(1153," offsetMdColumns"),Wl(1154,"br"),sg()()(),Sl(1155,"td",17)(1156,"code",47),Jx(1157,"number"),sg()(),Sl(1158,"td",20)(1159,"em")(1160,"strong"),Jx(1161,"(opcional)"),sg()(),Sl(1162,"p"),Jx(1163,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Sl(1164,"p"),Jx(1165,"Deve ser usado o sistema de "),Sl(1166,"strong"),Jx(1167,"grid"),sg(),Jx(1168," do PO (1 ... 12 colunas)."),sg(),Sl(1169,"blockquote")(1170,"p"),Jx(1171,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(1172,"code"),Jx(1173,"offsetColumns"),sg(),Jx(1174,"."),sg()()()(),Sl(1175,"tr",13)(1176,"td",14)(1177,"div",15)(1178,"span",16),Jx(1179," offsetSmColumns"),Wl(1180,"br"),sg()()(),Sl(1181,"td",17)(1182,"code",47),Jx(1183,"number"),sg()(),Sl(1184,"td",20)(1185,"em")(1186,"strong"),Jx(1187,"(opcional)"),sg()(),Sl(1188,"p"),Jx(1189,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Sl(1190,"p"),Jx(1191,"Deve ser usado o sistema de "),Sl(1192,"strong"),Jx(1193,"grid"),sg(),Jx(1194," do PO (1 ... 12 colunas)."),sg(),Sl(1195,"blockquote")(1196,"p"),Jx(1197,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(1198,"code"),Jx(1199,"offsetColumns"),sg(),Jx(1200,"."),sg()()()(),Sl(1201,"tr",13)(1202,"td",14)(1203,"div",15)(1204,"span",16),Jx(1205," offsetXlColumns"),Wl(1206,"br"),sg()()(),Sl(1207,"td",17)(1208,"code",47),Jx(1209,"number"),sg()(),Sl(1210,"td",20)(1211,"em")(1212,"strong"),Jx(1213,"(opcional)"),sg()(),Sl(1214,"p"),Jx(1215,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Sl(1216,"p"),Jx(1217,"Deve ser usado o sistema de "),Sl(1218,"strong"),Jx(1219,"grid"),sg(),Jx(1220," do PO (1 ... 12 colunas)."),sg(),Sl(1221,"blockquote")(1222,"p"),Jx(1223,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(1224,"code"),Jx(1225,"offsetColumns"),sg(),Jx(1226,"."),sg()()()(),Sl(1227,"tr",13)(1228,"td",14)(1229,"div",15)(1230,"span",16),Jx(1231," options"),Wl(1232,"br"),sg()()(),Sl(1233,"td",17)(1234,"code",49),Jx(1235,"Array<{ label: string; value: string "),sg(),Sl(1236,"code",50),Jx(1237,` number;
}>`),sg()(),Sl(1238,"td",20)(1239,"em")(1240,"strong"),Jx(1241,"(opcional)"),sg()(),Sl(1242,"p"),Jx(1243,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),sg(),Sl(1244,"p"),Jx(1245,"Exemplo de utiliza\xE7\xE3o:"),sg(),Sl(1246,"pre")(1247,"code"),Jx(1248,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),sg()(),Sl(1249,"pre")(1250,"code"),Jx(1251,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),sg()()()(),Sl(1252,"tr",13)(1253,"td",14)(1254,"div",15)(1255,"span",16),Jx(1256," optionsMulti"),Wl(1257,"br"),sg()()(),Sl(1258,"td",17)(1259,"code",24),Jx(1260,"boolean"),sg()(),Sl(1261,"td",20)(1262,"em")(1263,"strong"),Jx(1264,"(opcional)"),sg()(),Sl(1265,"p"),Jx(1266,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),sg()()(),Sl(1267,"tr",13)(1268,"td",14)(1269,"div",15)(1270,"span",16),Jx(1271," optionsService"),Wl(1272,"br"),sg()()(),Sl(1273,"td",17)(1274,"code",18),Jx(1275,"string "),sg(),Sl(1276,"code",51),Jx(1277," PoComboFilter "),sg(),Sl(1278,"code",52),Jx(1279," PoMultiselectFilter"),sg()(),Sl(1280,"td",20)(1281,"em")(1282,"strong"),Jx(1283,"(opcional)"),sg()(),Sl(1284,"p"),Jx(1285,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Sl(1286,"strong"),Jx(1287,"Importante"),sg()(),Sl(1288,"blockquote")(1289,"p"),Jx(1290,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Sl(1291,"a",53),Jx(1292,"guia de API do PO UI"),sg(),Jx(1293,"."),sg()()()(),Sl(1294,"tr",13)(1295,"td",14)(1296,"div",15)(1297,"span",16),Jx(1298," order"),Wl(1299,"br"),sg()()(),Sl(1300,"td",17)(1301,"code",47),Jx(1302,"number"),sg()(),Sl(1303,"td",20)(1304,"em")(1305,"strong"),Jx(1306,"(opcional)"),sg()(),Sl(1307,"p"),Jx(1308,"Informa a ordem de exibi\xE7\xE3o do campo."),sg(),Sl(1309,"p"),Jx(1310,"Exemplo de utiliza\xE7\xE3o:"),sg(),Sl(1311,"pre")(1312,"code"),Jx(1313,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),sg()(),Sl(1314,"p"),Jx(1315,"Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:"),sg(),Sl(1316,"pre")(1317,"code"),Jx(1318,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),sg()(),Sl(1319,"p"),Jx(1320,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),sg(),Sl(1321,"p"),Jx(1322,"Campos sem "),Sl(1323,"code"),Jx(1324,"order"),sg(),Jx(1325,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),sg()()(),Sl(1326,"tr",13)(1327,"td",14)(1328,"div",15)(1329,"span",16),Jx(1330," params"),Wl(1331,"br"),sg()()(),Sl(1332,"td",17)(1333,"code",54),Jx(1334,"any"),sg()(),Sl(1335,"td",20)(1336,"em")(1337,"strong"),Jx(1338,"(opcional)"),sg()(),Sl(1339,"p"),Jx(1340,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca "),Sl(1341,"code"),Jx(1342,"searchService"),sg(),Jx(1343," ou "),Sl(1344,"code"),Jx(1345,"optionsService"),sg(),Jx(1346,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),sg(),Sl(1347,"p"),Jx(1348,"Por exemplo, para o par\xE2metro "),Sl(1349,"code"),Jx(1350,"{ age: 23 }"),sg(),Jx(1351," a URL da requisi\xE7\xE3o ficaria:"),sg(),Sl(1352,"p")(1353,"code"),Jx(1354,"url + /1?age=23"),sg()()()(),Sl(1355,"tr",13)(1356,"td",14)(1357,"div",15)(1358,"span",16),Jx(1359," property"),Wl(1360,"br"),sg()()(),Sl(1361,"td",17)(1362,"code",18),Jx(1363,"string"),sg()(),Sl(1364,"td",20)(1365,"p"),Jx(1366,"Nome de refer\xEAncia do campo."),sg()()(),Sl(1367,"tr",13)(1368,"td",14)(1369,"div",15)(1370,"span",16),Jx(1371," searchService"),Wl(1372,"br"),sg()()(),Sl(1373,"td",17)(1374,"code",18),Jx(1375,"string "),sg(),Sl(1376,"code",55),Jx(1377," PoDynamicViewRequest"),sg()(),Sl(1378,"td",20)(1379,"em")(1380,"strong"),Jx(1381,"(opcional)"),sg()(),Sl(1382,"p"),Jx(1383,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),Sl(1384,"strong"),Jx(1385,"Importante:"),sg()(),Sl(1386,"blockquote")(1387,"p"),Jx(1388,"A propriedade "),Sl(1389,"code"),Jx(1390,"property"),sg(),Jx(1391,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Sl(1392,"a",53),Jx(1393,"guia de API do PO UI"),sg(),Jx(1394,"."),sg()()()(),Sl(1395,"tr",13)(1396,"td",14)(1397,"div",15)(1398,"span",16),Jx(1399," tag"),Wl(1400,"br"),sg()()(),Sl(1401,"td",17)(1402,"code",24),Jx(1403,"boolean"),sg()(),Sl(1404,"td",20)(1405,"em")(1406,"strong"),Jx(1407,"(opcional)"),sg()(),Sl(1408,"p"),Jx(1409,"Indica se o campo ser\xE1 um "),Sl(1410,"code"),Jx(1411,"po-tag"),sg(),Jx(1412,"."),sg()()(),Sl(1413,"tr",13)(1414,"td",14)(1415,"div",15)(1416,"span",16),Jx(1417," textColor"),Wl(1418,"br"),sg()()(),Sl(1419,"td",17)(1420,"code",18),Jx(1421,"string"),sg()(),Sl(1422,"td",20)(1423,"em")(1424,"strong"),Jx(1425,"(opcional)"),sg()(),Sl(1426,"p"),Jx(1427,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),sg(),Sl(1428,"ul")(1429,"li"),Jx(1430,"Hexadeximal, por exemplo "),Sl(1431,"code"),Jx(1432,"#c64840"),sg(),Jx(1433,";"),sg(),Sl(1434,"li"),Jx(1435,"RGB, como "),Sl(1436,"code"),Jx(1437,"rgb(0, 0, 165)"),sg(),Jx(1438,";"),sg(),Sl(1439,"li"),Jx(1440,"O nome da cor, por exemplo "),Sl(1441,"code"),Jx(1442,"blue"),sg(),Jx(1443,";"),sg()()()(),Sl(1444,"tr",13)(1445,"td",14)(1446,"div",15)(1447,"span",16),Jx(1448," type"),Wl(1449,"br"),sg()()(),Sl(1450,"td",17)(1451,"code",18),Jx(1452,"string "),sg(),Sl(1453,"code",56),Jx(1454," PoDynamicFieldType"),sg()(),Sl(1455,"td",20)(1456,"em")(1457,"strong"),Jx(1458,"(opcional)"),sg()(),Sl(1459,"p"),Jx(1460,"Tipo do valor campo."),sg(),Sl(1461,"p"),Jx(1462,"Valores v\xE1lidos:"),sg(),Sl(1463,"ul")(1464,"li")(1465,"code"),Jx(1466,"boolean"),sg(),Jx(1467,": Valores "),Sl(1468,"em"),Jx(1469,"booleanos"),sg(),Jx(1470,"."),sg(),Sl(1471,"li")(1472,"code"),Jx(1473,"currency"),sg(),Jx(1474,": Valores monet\xE1rios."),sg(),Sl(1475,"li")(1476,"code"),Jx(1477,"decimal"),sg(),Jx(1478,": Valores decimais."),sg(),Sl(1479,"li")(1480,"code"),Jx(1481,"date"),sg(),Jx(1482,": Valores de datas."),Sl(1483,"ul")(1484,"li"),Jx(1485,"Aceita os tipos "),Sl(1486,"strong"),Jx(1487,"string"),sg(),Jx(1488," e "),Sl(1489,"strong"),Jx(1490,"Date"),sg(),Jx(1491,` padr\xE3o do Javascript,
por exemplo: `),Sl(1492,"code"),Jx(1493,"'2017-11-28'"),sg(),Jx(1494," ou "),Sl(1495,"code"),Jx(1496,"new Date(2017, 10, 28)"),sg(),Jx(1497,"."),sg()()(),Sl(1498,"li")(1499,"code"),Jx(1500,"dateTime"),sg(),Jx(1501,": Valor de data com hor\xE1rio."),Sl(1502,"ul")(1503,"li"),Jx(1504,"Aceita o tipo "),Sl(1505,"em"),Jx(1506,"string"),sg(),Jx(1507," no formato "),Sl(1508,"strong"),Jx(1509,"ISO-8601"),sg(),Jx(1510," extendido "),Sl(1511,"strong"),Jx(1512,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),sg(),Jx(1513,`
e o tipo `),Sl(1514,"strong"),Jx(1515,"Date"),sg(),Jx(1516," padr\xE3o do Javascript, por exemplo: "),Sl(1517,"code"),Jx(1518,"'2017-11-28T00:00:00-02:00'"),sg(),Jx(1519," ou "),Sl(1520,"code"),Jx(1521,"new Date(2017, 10, 28)"),sg(),Jx(1522,"."),sg()()(),Sl(1523,"li")(1524,"code"),Jx(1525,"number"),sg(),Jx(1526,": Valores num\xE9ricos."),sg(),Sl(1527,"li")(1528,"code"),Jx(1529,"string"),sg(),Jx(1530,": Textos."),sg(),Sl(1531,"li")(1532,"code"),Jx(1533,"time"),sg(),Jx(1534,": Valor do hor\xE1rio."),Sl(1535,"ul")(1536,"li"),Jx(1537,"Aceita o tipo "),Sl(1538,"strong"),Jx(1539,"string"),sg(),Jx(1540," nos formatos "),Sl(1541,"strong"),Jx(1542,"'HH:mm:ss'"),sg(),Jx(1543," ou "),Sl(1544,"strong"),Jx(1545,"'HH:mm:ss.ffffff'"),sg(),Jx(1546,", por exemplo: "),Sl(1547,"code"),Jx(1548,"'23:12:45'"),sg(),Jx(1549,"."),sg()()()()()(),Sl(1550,"tr",13)(1551,"td",14)(1552,"div",15)(1553,"span",16),Jx(1554," visible"),Wl(1555,"br"),sg()()(),Sl(1556,"td",17)(1557,"code",24),Jx(1558,"boolean"),sg()(),Sl(1559,"td",20)(1560,"em")(1561,"strong"),Jx(1562,"(opcional)"),sg()(),Sl(1563,"p"),Jx(1564,"Indica se o campo ser\xE1 vis\xEDvel."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var Q=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Dynamic View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return l.changeTab("doc")}),Wl(3,"sample-po-dynamic-view-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return l.changeTab("web")}),Wl(5,"sample-po-dynamic-view-basic-view")(6,"sample-po-dynamic-view-employee-view")(7,"sample-po-dynamic-view-employee-on-load-view")(8,"sample-po-dynamic-view-container-view"),sg()()()),a&2&&(tw("p-actions",l.actions),Vp(2),tw("p-active",l.activeTab==="doc"),Vp(2),tw("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[pNe,Gme,Qme,N,G,W,Z,X],encapsulation:2})}return o})();var Ee=[{path:"",component:Q}],K=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[pL.forChild(Ee),pL]})}return o})();var Ke=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ar,K]})}return o})();export{Ke as DocPoDynamicViewModule};