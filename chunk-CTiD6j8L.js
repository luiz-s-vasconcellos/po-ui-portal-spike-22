import {f as fe,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,i as ib,cL as yn,G as G$1,I,b3 as nNe,L as Gl,O as nw,bs as mN,a7 as gN,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,a3 as lNe,Y as we}from'./main-56B5DD5U.js';var Y=()=>({property:"name"}),$=o=>[o],ee=()=>({name:"Jhon"}),_=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-fields","p-value"]],template:function(a,r){a&1&&Gl(0,"po-dynamic-view",0),a&2&&nw("p-fields",mN(3,$,gN(2,Y)))("p-value",gN(5,ee));},dependencies:[nNe],encapsulation:2,changeDetection:1})}return o})();var ie=o=>({"docs-sample-code-tabs":o}),N=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Dynamic View Basic"),sg(),Tl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-dynamic-view-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ie,r.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,_],encapsulation:2,changeDetection:1})}return o})();var R=(()=>{class o{fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",divider:"ADDITIONAL DATA",tag:true,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]},{property:"hobbies",label:"Hobbies",gridColumns:12,divider:"Additional Information"}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1",hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee"]],standalone:false,decls:2,vars:3,consts:[["p-title","Employee"],[3,"p-fields","p-value","p-text-wrap"]],template:function(a,r){a&1&&(Tl(0,"po-page-default",0),Gl(1,"po-dynamic-view",1),sg()),a&2&&(Vp(),nw("p-fields",r.fields)("p-value",r.employee)("p-text-wrap",true));},dependencies:[nNe,lNe],encapsulation:2,changeDetection:1})}return o})();var ae=o=>({"docs-sample-code-tabs":o}),G=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Dynamic View - Employee"),sg(),Tl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-dynamic-view-employee"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ae,r.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,R],encapsulation:2,changeDetection:1})}return o})();var O=(()=>{class o{httpClient=f(ib);headers=new yn({"X-PO-No-Message":"true"});url;filterParams;getObjectByValue(l,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(G$1(r=>"items"in r?r.items:r))}setConfig(l,a){this.url=l,this.filterParams=a;}static \u0275fac=function(a){return new(a||o)};static \u0275prov=I({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var J=(()=>{class o{employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"A",wage:8000.5,availability:"Available",cities:[{city:"S\xE3o Paulo",id:"SP"},{city:"Joinville",id:"SC"},{city:"Belo Horizonte",id:"MG"}],admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",profile:"admin",image:"https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg"};fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"cities",isArrayOrObject:true,fieldLabel:"city",fieldValue:"id",concatLabelValue:true},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"image",divider:"Image",image:true,alt:"image",height:"250"}];_newService=f(O);ngOnInit(){this._newService.setConfig("https://po-sample-api.onrender.com/v1/hotels",{id:1485976673002});}customEmployeeData(){return {value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:"name",divider:"Personal data by load customization",order:1},{property:"cpf",tag:true,color:"color-07",order:2},{property:"rg",tag:true,color:"color-07",order:3},{property:"wage",type:"string",tag:true,color:"color-07"},{property:"genre",visible:false},{property:"job",tag:false},{searchService:this._newService,fieldLabel:"address_city",property:"city"}]}}checkProfile(){if(this.employee.profile==="admin")return "confidential"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-on-load"]],standalone:false,features:[we([O])],decls:2,vars:3,consts:[["p-title","Employee on Load"],[3,"p-fields","p-load","p-value"]],template:function(a,r){a&1&&(Tl(0,"po-page-default",0),Gl(1,"po-dynamic-view",1),sg()),a&2&&(Vp(),nw("p-fields",r.fields)("p-load",r.customEmployeeData.bind(r))("p-value",r.employee));},dependencies:[nNe,lNe],encapsulation:2,changeDetection:1})}return o})();var me=o=>({"docs-sample-code-tabs":o}),W=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-on-load-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Dynamic View - Employee on load"),sg(),Tl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-dynamic-view-employee-on-load"),sg(),Gl(27,"hr")),a&2&&(Vp(5),qx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,me,r.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,J],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{fields=[{property:"name",container:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",container:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",container:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",container:"ADDITIONAL DATA",tag:true,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1"};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-container"]],standalone:false,decls:2,vars:2,consts:[["p-title","Employee"],[3,"p-fields","p-value"]],template:function(a,r){a&1&&(Tl(0,"po-page-default",0),Gl(1,"po-dynamic-view",1),sg()),a&2&&(Vp(),nw("p-fields",r.fields)("p-value",r.employee));},dependencies:[nNe,lNe],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o}),Z=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-container-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Dynamic View - Employee on load"),sg(),Tl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-dynamic-view-container"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,se,r.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,U],encapsulation:2,changeDetection:1})}return o})();var X=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-doc"]],standalone:false,decls:1565,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDynamicViewField[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","object"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<string>"],["href","https://angular.io/api/common/CurrencyPipe"],["href","https://angular.io/api/common/DatePipe"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<{","label:","string;","value:","string"],["pan","",1,"docs-api-property-type","number;","}>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoDynamicViewRequest"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"]],template:function(a,r){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),sg()(),Gl(4,"div",2),Tl(5,"h3",3),iN(6,"Componente"),sg(),Tl(7,"h4",4)(8,"code",5),iN(9,"PoDynamicViewComponent"),sg()(),Tl(10,"div",2)(11,"p"),iN(12,"Componente para listar dados dinamicamente a partir de uma lista de objetos."),sg(),Tl(13,"blockquote")(14,"p"),iN(15,"Por padr\xE3o esse componente cria "),Tl(16,"code"),iN(17,"po-info"),sg(),iN(18," para exibi\xE7\xE3o, \xE9 poss\xEDvel criar "),Tl(19,"code"),iN(20,"po-tag"),sg(),iN(21," passando a propriedade { tag: true }. "),sg()()(),Tl(22,"div",6)(23,"h4",7),iN(24,"Seletor"),sg(),Tl(25,"pre",8),iN(26,`<po-dynamic-view
    p-components-size="string"
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),sg()(),Tl(27,"h4",9),iN(28,"Propriedades"),sg(),Tl(29,"table",10)(30,"tr",11)(31,"th",12),iN(32,"Nome"),sg(),Tl(33,"th",12),iN(34,"Tipo"),sg(),Tl(35,"th",12),iN(36,"Padr\xE3o"),sg(),Tl(37,"th",12),iN(38,"Descri\xE7\xE3o"),sg()(),Tl(39,"tr",13)(40,"td",14)(41,"div",15)(42,"span",16),iN(43," p-components-size"),Gl(44,"br"),sg()()(),Tl(45,"td",17)(46,"code",18),iN(47,"string"),sg()(),Tl(48,"td",19)(49,"p")(50,"code"),iN(51,"medium"),sg()()(),Tl(52,"td",20)(53,"em")(54,"strong"),iN(55,"(opcional)"),sg()(),Tl(56,"p"),iN(57,"Define o tamanho dos componentes no template entre "),Tl(58,"code"),iN(59,"small"),sg(),iN(60," ou "),Tl(61,"code"),iN(62,"medium"),sg(),iN(63,"."),sg(),Tl(64,"blockquote")(65,"p"),iN(66,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(67,"code"),iN(68,"medium"),sg(),iN(69,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(70,"a",21),iN(71,"po-theme"),sg(),iN(72,"."),sg()()()(),Tl(73,"tr",13)(74,"td",14)(75,"div",15)(76,"span",16),iN(77," p-fields"),Gl(78,"br"),sg()()(),Tl(79,"td",17)(80,"code",22),iN(81,"PoDynamicViewField[]"),sg()(),Tl(82,"td",19)(83,"p")(84,"code"),iN(85,"[]"),sg()()(),Tl(86,"td",20)(87,"em")(88,"strong"),iN(89,"(opcional)"),sg()(),Tl(90,"p"),iN(91,"Lista de objetos que implementam a interface "),Tl(92,"code"),iN(93,"PoDynamicView"),sg(),iN(94,"."),sg(),Tl(95,"blockquote")(96,"p"),iN(97,"Ex: "),Tl(98,"code"),iN(99,"[ { property: 'age' } ]"),sg()()(),Tl(100,"p"),iN(101,"Regras de tipagem e formata\xE7\xE3o dos valores exibidos:"),sg(),Tl(102,"ul")(103,"li"),iN(104,"Caso o "),Tl(105,"em"),iN(106,"type"),sg(),iN(107," informado seja "),Tl(108,"em"),iN(109,"currency"),sg(),iN(110," e n\xE3o seja informado o "),Tl(111,"em"),iN(112,"format"),sg(),iN(113,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),sg(),Tl(114,"li"),iN(115,"Caso o "),Tl(116,"em"),iN(117,"type"),sg(),iN(118," informado seja "),Tl(119,"em"),iN(120,"date"),sg(),iN(121," e n\xE3o seja informado o "),Tl(122,"em"),iN(123,"format"),sg(),iN(124," o mesmo recebe 'dd/MM/yyyy' como formato padr\xE3o."),sg(),Tl(125,"li"),iN(126,"Caso o "),Tl(127,"em"),iN(128,"type"),sg(),iN(129," informado seja "),Tl(130,"em"),iN(131,"dateTime"),sg(),iN(132," e n\xE3o seja informado o "),Tl(133,"em"),iN(134,"format"),sg(),iN(135," o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padr\xE3o."),sg(),Tl(136,"li"),iN(137,"Caso o "),Tl(138,"em"),iN(139,"type"),sg(),iN(140," informado seja "),Tl(141,"em"),iN(142,"number"),sg(),iN(143," e n\xE3o seja informado o "),Tl(144,"em"),iN(145,"format"),sg(),iN(146," o mesmo n\xE3o ser\xE1 formatado."),sg(),Tl(147,"li"),iN(148,"Caso o "),Tl(149,"em"),iN(150,"type"),sg(),iN(151," informado seja "),Tl(152,"em"),iN(153,"time"),sg(),iN(154," e n\xE3o seja informado o "),Tl(155,"em"),iN(156,"format"),sg(),iN(157," o mesmo recebe 'HH:mm:ss.ffffff' como formato padr\xE3o."),sg()(),Tl(158,"blockquote")(159,"p"),iN(160,"As propriedades informadas ser\xE3o exibidas mesmo n\xE3o contendo valor de refer\xEAncia no objeto da propriedade "),Tl(161,"code"),iN(162,"p-value"),sg(),iN(163,"."),sg()()()(),Tl(164,"tr",13)(165,"td",14)(166,"div",15)(167,"span",16),iN(168," p-load"),Gl(169,"br"),sg()()(),Tl(170,"td",17)(171,"code",18),iN(172,"string "),sg(),Tl(173,"code",23),iN(174," Function"),sg()(),Tl(175,"td",19),iN(176,"-"),sg(),Tl(177,"td",20)(178,"em")(179,"strong"),iN(180,"(opcional)"),sg()(),Tl(181,"p"),iN(182,"Possibilita executar uma fun\xE7\xE3o quando o componente \xE9 inicializado."),sg(),Tl(183,"p"),iN(184,"A propriedade aceita os seguintes tipos:"),sg(),Tl(185,"ul")(186,"li")(187,"strong"),iN(188,"String"),sg(),iN(189,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Tl(190,"code"),iN(191,"POST"),sg(),iN(192,"."),sg(),Tl(193,"li")(194,"strong"),iN(195,"Function"),sg(),iN(196,": M\xE9todo que ser\xE1 executado na inicializa\xE7\xE3o do componente."),sg()(),Tl(197,"p"),iN(198,"Para os dois tipos de utiliza\xE7\xE3o da propriedade espera-se o seguinte retorno:"),sg(),Tl(199,"pre")(200,"code"),iN(201,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),sg()(),Tl(202,"blockquote")(203,"p")(204,"strong"),iN(205,"value"),sg(),iN(206,": any = atribui novo valor do model."),sg()(),Tl(207,"blockquote")(208,"p")(209,"strong"),iN(210,"fields"),sg(),iN(211,": "),Tl(212,"code"),iN(213,"Array<PoDynamicViewField>"),sg(),iN(214,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),sg()(),Tl(215,"ul")(216,"li"),iN(217,"Para esconder/remover campos precisa informar no field a propriedade "),Tl(218,"code"),iN(219,"visible = false"),sg(),iN(220,"."),sg()()()(),Tl(221,"tr",13)(222,"td",14)(223,"div",15)(224,"span",16),iN(225," p-show-all-value"),Gl(226,"br"),sg()()(),Tl(227,"td",17)(228,"code",24),iN(229,"boolean"),sg()(),Tl(230,"td",19)(231,"p")(232,"code"),iN(233,"false"),sg()()(),Tl(234,"td",20)(235,"em")(236,"strong"),iN(237,"(opcional)"),sg()(),Tl(238,"p"),iN(239,"Indica se exibir\xE1 todas as informa\xE7\xF5es contidas dentro do objeto informado na propriedade "),Tl(240,"code"),iN(241,"p-value"),sg(),iN(242,"."),sg()()(),Tl(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),iN(247," p-text-wrap"),Gl(248,"br"),sg()()(),Tl(249,"td",17)(250,"code",24),iN(251,"boolean"),sg()(),Tl(252,"td",19)(253,"p")(254,"code"),iN(255,"false"),sg()()(),Tl(256,"td",20)(257,"em")(258,"strong"),iN(259,"(opcional)"),sg()(),Tl(260,"p"),iN(261,"Permite a quebra de linha no texto do "),Tl(262,"code"),iN(263,"p-value"),sg(),iN(264,", aplicando-a onde h\xE1 "),Tl(265,"code"),iN(266,"\\n"),sg(),iN(267,"."),sg(),Tl(268,"pre")(269,"code"),iN(270,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),sg()(),Tl(271,"p"),iN(272,"Sa\xEDda:"),sg(),Tl(273,"pre")(274,"code"),iN(275,`Primeira linha
Segunda linha
`),sg()()()(),Tl(276,"tr",13)(277,"td",14)(278,"div",15)(279,"span",16),iN(280," p-value"),Gl(281,"br"),sg()()(),Tl(282,"td",17)(283,"code",25),iN(284,"object"),sg()(),Tl(285,"td",19),iN(286,"-"),sg(),Tl(287,"td",20)(288,"p"),iN(289,"Objeto que ser\xE1 utilizado para exibir as informa\xE7\xF5es din\xE2micas, o valor ser\xE1 recuperado atrav\xE9s do atributo "),Tl(290,"em"),iN(291,"property"),sg(),iN(292,`
dos objetos contidos na propridade `),Tl(293,"code"),iN(294,"p-fields"),sg(),iN(295,"."),sg(),Tl(296,"blockquote")(297,"p"),iN(298,"Ex: "),Tl(299,"code"),iN(300,"{ age: '35' }"),sg()()()()()(),Tl(301,"h3"),iN(302,"Interfaces"),sg(),Tl(303,"h4",26)(304,"code",5),iN(305,"PoDynamicViewRequest"),sg()(),Tl(306,"div",2)(307,"p"),iN(308,"Define o tipo de busca customizada para um campo em espec\xEDfico."),sg()(),Tl(309,"h4",9),iN(310,"M\xE9todos"),sg(),Tl(311,"table",27)(312,"tr",13)(313,"th",28)(314,"div",15)(315,"h4")(316,"span",16),iN(317," getObjectByValue "),sg()()()()(),Tl(318,"tr",20)(319,"td",20)(320,"p"),iN(321,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),sg()()()(),Tl(322,"h5")(323,"b"),iN(324,"Par\xE2metros"),sg()(),Tl(325,"table",10)(326,"tr",11)(327,"th",12),iN(328,"Nome"),sg(),Tl(329,"th",12),iN(330,"Tipo"),sg(),Tl(331,"th",12),iN(332,"Descri\xE7\xE3o"),sg()(),Tl(333,"tr",13)(334,"td",14),iN(335," value"),sg(),Tl(336,"td",17)(337,"code",18),iN(338," string "),sg(),Tl(339,"code",29),iN(340," Array<any> "),sg()(),Tl(341,"td",20)(342,"p"),iN(343,"Valor \xFAnico a ser buscado na fonte de dados."),sg()()(),Tl(344,"tr",13)(345,"td",14),iN(346," filterParams"),sg(),Tl(347,"td",17)(348,"code",30),iN(349," any "),sg()(),Tl(350,"td",20)(351,"p"),iN(352,"Valor opcional para informar filtros customizados."),sg()()()(),Gl(353,"br"),Tl(354,"h4",26)(355,"code",5),iN(356,"PoDynamicViewField"),sg()(),Tl(357,"div",2)(358,"p"),iN(359," Interface para defini\xE7\xE3o das propriedades dos campos de visualiza\xE7\xE3o que ser\xE3o criados dinamicamente."),sg()(),Tl(360,"h4",9),iN(361,"Propriedades"),sg(),Tl(362,"table",10)(363,"tr",11)(364,"th",12),iN(365,"Nome"),sg(),Tl(366,"th",12),iN(367,"Tipo"),sg(),Tl(368,"th",12),iN(369,"Descri\xE7\xE3o"),sg()(),Tl(370,"tr",13)(371,"td",14)(372,"div",15)(373,"span",16),iN(374," alt"),Gl(375,"br"),sg()()(),Tl(376,"td",17)(377,"code",18),iN(378,"string"),sg()(),Tl(379,"td",20)(380,"em")(381,"strong"),iN(382,"(opcional)"),sg()(),Tl(383,"p"),iN(384,"Defini o texto alternativo descrevendo a imagem."),sg(),Tl(385,"p"),iN(386,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(387,"pre")(388,"code"),iN(389,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),sg()(),Tl(390,"p")(391,"strong"),iN(392,"Componentes compat\xEDveis:"),sg(),Tl(393,"code"),iN(394,"po-image"),sg(),iN(395,"."),sg()()(),Tl(396,"tr",13)(397,"td",14)(398,"div",15)(399,"span",16),iN(400," booleanFalse"),Gl(401,"br"),sg()()(),Tl(402,"td",17)(403,"code",18),iN(404,"string"),sg()(),Tl(405,"td",20)(406,"em")(407,"strong"),iN(408,"(opcional)"),sg()(),Tl(409,"p"),iN(410,"Texto exibido quando o valor do componente for "),Tl(411,"em"),iN(412,"false"),sg(),iN(413,"."),sg()()(),Tl(414,"tr",13)(415,"td",14)(416,"div",15)(417,"span",16),iN(418," booleanTrue"),Gl(419,"br"),sg()()(),Tl(420,"td",17)(421,"code",18),iN(422,"string"),sg()(),Tl(423,"td",20)(424,"em")(425,"strong"),iN(426,"(opcional)"),sg()(),Tl(427,"p"),iN(428,"Texto exibido quando o valor do componente for "),Tl(429,"em"),iN(430,"true"),sg(),iN(431,"."),sg()()(),Tl(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),iN(436," color"),Gl(437,"br"),sg()()(),Tl(438,"td",17)(439,"code",18),iN(440,"string"),sg()(),Tl(441,"td",20)(442,"em")(443,"strong"),iN(444,"(opcional)"),sg()(),Tl(445,"p"),iN(446,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),sg(),Tl(447,"ul")(448,"li"),iN(449,"Hexadeximal, por exemplo "),Tl(450,"code"),iN(451,"#c64840"),sg(),iN(452,";"),sg(),Tl(453,"li"),iN(454,"RGB, como "),Tl(455,"code"),iN(456,"rgb(0, 0, 165)"),sg(),iN(457,";"),sg(),Tl(458,"li"),iN(459,"O nome da cor, por exemplo "),Tl(460,"code"),iN(461,"blue"),sg(),iN(462,";"),sg(),Tl(463,"li"),iN(464,"Usando uma das cores do tema do PO:"),sg(),Tl(465,"li"),iN(466,"Valores v\xE1lidos:"),Tl(467,"ul")(468,"li"),Gl(469,"span",31),Tl(470,"code"),iN(471,"color-01"),sg()(),Tl(472,"li"),Gl(473,"span",32),Tl(474,"code"),iN(475,"color-02"),sg()(),Tl(476,"li"),Gl(477,"span",33),Tl(478,"code"),iN(479,"color-03"),sg()(),Tl(480,"li"),Gl(481,"span",34),Tl(482,"code"),iN(483,"color-04"),sg()(),Tl(484,"li"),Gl(485,"span",35),Tl(486,"code"),iN(487,"color-05"),sg()(),Tl(488,"li"),Gl(489,"span",36),Tl(490,"code"),iN(491,"color-06"),sg()(),Tl(492,"li"),Gl(493,"span",37),Tl(494,"code"),iN(495,"color-07"),sg()(),Tl(496,"li"),Gl(497,"span",38),Tl(498,"code"),iN(499,"color-08"),sg()(),Tl(500,"li"),Gl(501,"span",39),Tl(502,"code"),iN(503,"color-09"),sg()(),Tl(504,"li"),Gl(505,"span",40),Tl(506,"code"),iN(507,"color-10"),sg()(),Tl(508,"li"),Gl(509,"span",41),Tl(510,"code"),iN(511,"color-11"),sg()(),Tl(512,"li"),Gl(513,"span",42),Tl(514,"code"),iN(515,"color-12"),sg()()()()()()(),Tl(516,"tr",13)(517,"td",14)(518,"div",15)(519,"span",16),iN(520," concatLabelValue"),Gl(521,"br"),sg()()(),Tl(522,"td",17)(523,"code",24),iN(524,"boolean"),sg()(),Tl(525,"td",20)(526,"em")(527,"strong"),iN(528,"(opcional)"),sg()(),Tl(529,"p"),iN(530,"Permite que seja exibido em tela, de forma concatenada as propriedades "),Tl(531,"code"),iN(532,"fieldLabel"),sg(),iN(533," + "),Tl(534,"code"),iN(535,"fieldValue"),sg(),iN(536,`.
A ordem sempre ser\xE1 `),Tl(537,"code"),iN(538,"fieldLabel"),sg(),iN(539," e depois "),Tl(540,"code"),iN(541,"fieldValue"),sg(),iN(542,", n\xE3o sendo poss\xEDvel alterar."),sg(),Tl(543,"blockquote")(544,"p"),iN(545,"Propriedade funciona corretamente caso as propriedades "),Tl(546,"code"),iN(547,"fieldLabel"),sg(),iN(548," e "),Tl(549,"code"),iN(550,"fielValue"),sg(),iN(551," sejam v\xE1lidas."),sg()()()(),Tl(552,"tr",13)(553,"td",14)(554,"div",15)(555,"span",16),iN(556," container"),Gl(557,"br"),sg()()(),Tl(558,"td",17)(559,"code",18),iN(560,"string"),sg()(),Tl(561,"td",20)(562,"em")(563,"strong"),iN(564,"(opcional)"),sg()(),Tl(565,"p"),iN(566,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),sg(),Tl(567,"p"),iN(568,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),sg()()(),Tl(569,"tr",13)(570,"td",14)(571,"div",15)(572,"span",16),iN(573," divider"),Gl(574,"br"),sg()()(),Tl(575,"td",17)(576,"code",18),iN(577,"string"),sg()(),Tl(578,"td",20)(579,"em")(580,"strong"),iN(581,"(opcional)"),sg()(),Tl(582,"p"),iN(583,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),sg()()(),Tl(584,"tr",13)(585,"td",14)(586,"div",15)(587,"span",16),iN(588," fieldLabel"),Gl(589,"br"),sg()()(),Tl(590,"td",17)(591,"code",18),iN(592,"string"),sg()(),Tl(593,"td",20)(594,"em")(595,"strong"),iN(596,"(opcional)"),sg()(),Tl(597,"p"),iN(598,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),sg(),Tl(599,"p"),iN(600,"O valor padr\xE3o \xE9: "),Tl(601,"code"),iN(602,"label"),sg(),iN(603,"."),sg()()(),Tl(604,"tr",13)(605,"td",14)(606,"div",15)(607,"span",16),iN(608," fieldValue"),Gl(609,"br"),sg()()(),Tl(610,"td",17)(611,"code",18),iN(612,"string"),sg()(),Tl(613,"td",20)(614,"em")(615,"strong"),iN(616,"(opcional)"),sg()(),Tl(617,"p"),iN(618,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),sg(),Tl(619,"p"),iN(620,"O valor padr\xE3o \xE9: "),Tl(621,"code"),iN(622,"value"),sg(),iN(623,"."),sg()()(),Tl(624,"tr",13)(625,"td",14)(626,"div",15)(627,"span",16),iN(628," format"),Gl(629,"br"),sg()()(),Tl(630,"td",17)(631,"code",18),iN(632,"string "),sg(),Tl(633,"code",43),iN(634," Array<string>"),sg()(),Tl(635,"td",20)(636,"em")(637,"strong"),iN(638,"(opcional)"),sg()(),Tl(639,"p"),iN(640,"Define o formato de exibi\xE7\xE3o para o valor de um campo."),sg(),Tl(641,"ul")(642,"li")(643,"p"),iN(644,"Quando "),Tl(645,"code"),iN(646,"format"),sg(),iN(647," \xE9 uma "),Tl(648,"code"),iN(649,"string"),sg(),iN(650,", o formato aplicado depende da propriedade "),Tl(651,"strong"),iN(652,"type"),sg(),iN(653," segue como usar cada tipo:"),sg(),Tl(654,"ul")(655,"li")(656,"code"),iN(657,"currency"),sg(),iN(658,": Utiliza c\xF3digos de moeda definidos pelo "),Tl(659,"a",44),iN(660,"CurrencyPipe"),sg(),iN(661,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),sg(),Tl(662,"li")(663,"code"),iN(664,"date"),sg(),iN(665,": Adota formatos de data especificados pelo "),Tl(666,"a",45),iN(667,"DatePipe"),sg(),iN(668,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),sg(),Tl(669,"li")(670,"code"),iN(671,"time"),sg(),iN(672,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),sg(),Tl(673,"li")(674,"code"),iN(675,"number"),sg(),iN(676,": Usa especifica\xE7\xF5es do "),Tl(677,"a",46),iN(678,"DecimalPipe"),sg(),iN(679,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),Tl(680,"code"),iN(681,"50"),sg(),iN(682,", formato "),Tl(683,"code"),iN(684,"'1.2-5'"),sg(),iN(685,", resulta em "),Tl(686,"code"),iN(687,"50.00"),sg(),iN(688,"."),sg()()(),Tl(689,"li")(690,"p"),iN(691,"Quando "),Tl(692,"code"),iN(693,"format"),sg(),iN(694," \xE9 um "),Tl(695,"code"),iN(696,"Array<string>"),sg(),iN(697,":"),sg(),Tl(698,"ul")(699,"li"),iN(700,"Cada elemento do array representa uma propriedade do objeto."),sg(),Tl(701,"li"),iN(702,"Os valores dessas propriedades s\xE3o concatenados, separados pelo padr\xE3o ' - '."),sg(),Tl(703,"li"),iN(704,"Exemplo: Para "),Tl(705,"code"),iN(706,'format: ["id", "name"]'),sg(),iN(707," e um objeto "),Tl(708,"code"),iN(709,"{ id: 1, name: 'Carlos Diego' }"),sg(),iN(710,`,
o resultado ser\xE1 `),Tl(711,"code"),iN(712,"'1 - Carlos Diego'"),sg(),iN(713,"."),sg()()()()()(),Tl(714,"tr",13)(715,"td",14)(716,"div",15)(717,"span",16),iN(718," gridColumns"),Gl(719,"br"),sg()()(),Tl(720,"td",17)(721,"code",47),iN(722,"number"),sg()(),Tl(723,"td",20)(724,"em")(725,"strong"),iN(726,"(opcional)"),sg()(),Tl(727,"p"),iN(728,"Tamanho de exibi\xE7\xE3o do campo em telas."),sg(),Tl(729,"p"),iN(730,"Deve ser usado o sistema de "),Tl(731,"strong"),iN(732,"grid"),sg(),iN(733," do PO (1 ... 12 colunas)."),sg(),Tl(734,"blockquote")(735,"p"),iN(736,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Tl(737,"tr",13)(738,"td",14)(739,"div",15)(740,"span",16),iN(741," gridLgColumns"),Gl(742,"br"),sg()()(),Tl(743,"td",17)(744,"code",47),iN(745,"number"),sg()(),Tl(746,"td",20)(747,"em")(748,"strong"),iN(749,"(opcional)"),sg()(),Tl(750,"p"),iN(751,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Tl(752,"p"),iN(753,"Deve ser usado o sistema de "),Tl(754,"strong"),iN(755,"grid"),sg(),iN(756," do PO (1 ... 12 colunas)."),sg(),Tl(757,"blockquote")(758,"p"),iN(759,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(760,"code"),iN(761,"gridColumns"),sg(),iN(762,"."),sg()()()(),Tl(763,"tr",13)(764,"td",14)(765,"div",15)(766,"span",16),iN(767," gridLgPull"),Gl(768,"br"),sg()()(),Tl(769,"td",17)(770,"code",47),iN(771,"number"),sg()(),Tl(772,"td",20)(773,"em")(774,"strong"),iN(775,"(opcional)"),sg()(),Tl(776,"p"),iN(777,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),sg(),Tl(778,"p"),iN(779,"Deve ser usado o sistema de "),Tl(780,"strong"),iN(781,"grid"),sg(),iN(782," do PO (1 ... 11 colunas)."),sg(),Tl(783,"blockquote")(784,"p"),iN(785,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(786,"code"),iN(787,"gridColumns"),sg(),iN(788,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(789,"tr",13)(790,"td",14)(791,"div",15)(792,"span",16),iN(793," gridMdColumns"),Gl(794,"br"),sg()()(),Tl(795,"td",17)(796,"code",47),iN(797,"number"),sg()(),Tl(798,"td",20)(799,"em")(800,"strong"),iN(801,"(opcional)"),sg()(),Tl(802,"p"),iN(803,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Tl(804,"p"),iN(805,"Deve ser usado o sistema de "),Tl(806,"strong"),iN(807,"grid"),sg(),iN(808," do PO (1 ... 12 colunas)."),sg(),Tl(809,"blockquote")(810,"p"),iN(811,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(812,"code"),iN(813,"gridColumns"),sg(),iN(814,"."),sg()()()(),Tl(815,"tr",13)(816,"td",14)(817,"div",15)(818,"span",16),iN(819," gridMdPull"),Gl(820,"br"),sg()()(),Tl(821,"td",17)(822,"code",47),iN(823,"number"),sg()(),Tl(824,"td",20)(825,"em")(826,"strong"),iN(827,"(opcional)"),sg()(),Tl(828,"p"),iN(829,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),sg(),Tl(830,"p"),iN(831,"Deve ser usado o sistema de "),Tl(832,"strong"),iN(833,"grid"),sg(),iN(834," do PO (1 ... 11 colunas)."),sg(),Tl(835,"blockquote")(836,"p"),iN(837,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(838,"code"),iN(839,"gridColumns"),sg(),iN(840,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(841,"tr",13)(842,"td",14)(843,"div",15)(844,"span",16),iN(845," gridSmColumns"),Gl(846,"br"),sg()()(),Tl(847,"td",17)(848,"code",47),iN(849,"number"),sg()(),Tl(850,"td",20)(851,"em")(852,"strong"),iN(853,"(opcional)"),sg()(),Tl(854,"p"),iN(855,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Tl(856,"p"),iN(857,"Deve ser usado o sistema de "),Tl(858,"strong"),iN(859,"grid"),sg(),iN(860," do PO (1 ... 12 colunas)."),sg(),Tl(861,"blockquote")(862,"p"),iN(863,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(864,"code"),iN(865,"gridColumns"),sg(),iN(866,"."),sg()()()(),Tl(867,"tr",13)(868,"td",14)(869,"div",15)(870,"span",16),iN(871," gridSmPull"),Gl(872,"br"),sg()()(),Tl(873,"td",17)(874,"code",47),iN(875,"number"),sg()(),Tl(876,"td",20)(877,"em")(878,"strong"),iN(879,"(opcional)"),sg()(),Tl(880,"p"),iN(881,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),sg(),Tl(882,"p"),iN(883,"Deve ser usado o sistema de "),Tl(884,"strong"),iN(885,"grid"),sg(),iN(886," do PO (1 ... 11 colunas)."),sg(),Tl(887,"blockquote")(888,"p"),iN(889,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(890,"code"),iN(891,"gridColumns"),sg(),iN(892,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(893,"tr",13)(894,"td",14)(895,"div",15)(896,"span",16),iN(897," gridXlColumns"),Gl(898,"br"),sg()()(),Tl(899,"td",17)(900,"code",47),iN(901,"number"),sg()(),Tl(902,"td",20)(903,"em")(904,"strong"),iN(905,"(opcional)"),sg()(),Tl(906,"p"),iN(907,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Tl(908,"p"),iN(909,"Deve ser usado o sistema de "),Tl(910,"strong"),iN(911,"grid"),sg(),iN(912," do PO (1 ... 12 colunas)."),sg(),Tl(913,"blockquote")(914,"p"),iN(915,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(916,"code"),iN(917,"gridColumns"),sg(),iN(918,"."),sg()()()(),Tl(919,"tr",13)(920,"td",14)(921,"div",15)(922,"span",16),iN(923," gridXlPull"),Gl(924,"br"),sg()()(),Tl(925,"td",17)(926,"code",47),iN(927,"number"),sg()(),Tl(928,"td",20)(929,"em")(930,"strong"),iN(931,"(opcional)"),sg()(),Tl(932,"p"),iN(933,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),sg(),Tl(934,"p"),iN(935,"Deve ser usado o sistema de "),Tl(936,"strong"),iN(937,"grid"),sg(),iN(938," do PO (1 ... 11 colunas)."),sg(),Tl(939,"blockquote")(940,"p"),iN(941,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(942,"code"),iN(943,"gridColumns"),sg(),iN(944,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(945,"tr",13)(946,"td",14)(947,"div",15)(948,"span",16),iN(949," height"),Gl(950,"br"),sg()()(),Tl(951,"td",17)(952,"code",18),iN(953,"string"),sg()(),Tl(954,"td",20)(955,"em")(956,"strong"),iN(957,"(opcional)"),sg()(),Tl(958,"p"),iN(959,"Defini o texto alternativo descrevendo a imagem."),sg(),Tl(960,"p"),iN(961,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(962,"pre")(963,"code"),iN(964,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),sg()(),Tl(965,"p")(966,"strong"),iN(967,"Componentes compat\xEDveis:"),sg(),Tl(968,"code"),iN(969,"po-image"),sg(),iN(970,"."),sg()()(),Tl(971,"tr",13)(972,"td",14)(973,"div",15)(974,"span",16),iN(975," icon"),Gl(976,"br"),sg()()(),Tl(977,"td",17)(978,"code",18),iN(979,"string"),sg()(),Tl(980,"td",20)(981,"em")(982,"strong"),iN(983,"(opcional)"),sg()(),Tl(984,"p"),iN(985,"Define um \xEDcone que ser\xE1 exibido ao lado do valor para o campo do tipo "),Tl(986,"em"),iN(987,"tag"),sg(),iN(988,"."),sg(),Tl(989,"blockquote")(990,"p"),iN(991,"Veja os valores v\xE1lidos na "),Tl(992,"a",48),iN(993,"biblioteca de \xEDcones"),sg(),iN(994,"."),sg()()()(),Tl(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),iN(999," image"),Gl(1e3,"br"),sg()()(),Tl(1001,"td",17)(1002,"code",24),iN(1003,"boolean"),sg()(),Tl(1004,"td",20)(1005,"em")(1006,"strong"),iN(1007,"(opcional)"),sg()(),Tl(1008,"p"),iN(1009,"Possibilita a utiliza\xE7\xE3o de imagem."),sg(),Tl(1010,"p"),iN(1011,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(1012,"pre")(1013,"code"),iN(1014,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),sg()(),Tl(1015,"ul")(1016,"li"),iN(1017,"@default "),Tl(1018,"code"),iN(1019,"false"),sg()()(),Tl(1020,"p")(1021,"strong"),iN(1022,"Componentes compat\xEDveis:"),sg(),Tl(1023,"code"),iN(1024,"po-image"),sg(),iN(1025,"."),sg()()(),Tl(1026,"tr",13)(1027,"td",14)(1028,"div",15)(1029,"span",16),iN(1030," isArrayOrObject"),Gl(1031,"br"),sg()()(),Tl(1032,"td",17)(1033,"code",24),iN(1034,"boolean"),sg()(),Tl(1035,"td",20)(1036,"em")(1037,"strong"),iN(1038,"(opcional)"),sg()(),Tl(1039,"p"),iN(1040,"Define que a propriedade "),Tl(1041,"code"),iN(1042,"property"),sg(),iN(1043," \xE9 uma lista ou um objeto."),sg(),Tl(1044,"blockquote")(1045,"p"),iN(1046,"Por padr\xE3o, espera-se que a lista ou o objeto esteja com as propriedades "),Tl(1047,"code"),iN(1048,"label"),sg(),iN(1049," e "),Tl(1050,"code"),iN(1051,"value"),sg(),iN(1052,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),Tl(1053,"code"),iN(1054,"fieldLabel"),sg(),iN(1055," e "),Tl(1056,"code"),iN(1057,"fieldValue"),sg(),iN(1058,`.
\xC9 ignorada caso a propriedade `),Tl(1059,"code"),iN(1060,"searchService"),sg(),iN(1061," esteja sendo utilizada."),sg()()()(),Tl(1062,"tr",13)(1063,"td",14)(1064,"div",15)(1065,"span",16),iN(1066," key"),Gl(1067,"br"),sg()()(),Tl(1068,"td",17)(1069,"code",24),iN(1070,"boolean"),sg()(),Tl(1071,"td",20)(1072,"em")(1073,"strong"),iN(1074,"(opcional)"),sg()(),Tl(1075,"p"),iN(1076,"Identificador"),sg()()(),Tl(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),iN(1081," label"),Gl(1082,"br"),sg()()(),Tl(1083,"td",17)(1084,"code",18),iN(1085,"string"),sg()(),Tl(1086,"td",20)(1087,"em")(1088,"strong"),iN(1089,"(opcional)"),sg()(),Tl(1090,"p"),iN(1091,"R\xF3tulo do campo exibido."),sg(),Tl(1092,"p"),iN(1093,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Tl(1094,"code"),iN(1095,"label"),sg(),iN(1096," o valor da propriedade "),Tl(1097,"code"),iN(1098,"property"),sg(),iN(1099," com a primeira letra em mai\xFAsculo."),sg()()(),Tl(1100,"tr",13)(1101,"td",14)(1102,"div",15)(1103,"span",16),iN(1104," offsetColumns"),Gl(1105,"br"),sg()()(),Tl(1106,"td",17)(1107,"code",47),iN(1108,"number"),sg()(),Tl(1109,"td",20)(1110,"em")(1111,"strong"),iN(1112,"(opcional)"),sg()(),Tl(1113,"p"),iN(1114,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),sg(),Tl(1115,"p"),iN(1116,"Deve ser usado o sistema de "),Tl(1117,"strong"),iN(1118,"grid"),sg(),iN(1119," do PO (1 ... 12 colunas)."),sg(),Tl(1120,"blockquote")(1121,"p"),iN(1122,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Tl(1123,"tr",13)(1124,"td",14)(1125,"div",15)(1126,"span",16),iN(1127," offsetLgColumns"),Gl(1128,"br"),sg()()(),Tl(1129,"td",17)(1130,"code",47),iN(1131,"number"),sg()(),Tl(1132,"td",20)(1133,"em")(1134,"strong"),iN(1135,"(opcional)"),sg()(),Tl(1136,"p"),iN(1137,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Tl(1138,"p"),iN(1139,"Deve ser usado o sistema de "),Tl(1140,"strong"),iN(1141,"grid"),sg(),iN(1142," do PO (1 ... 12 colunas)."),sg(),Tl(1143,"blockquote")(1144,"p"),iN(1145,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(1146,"code"),iN(1147,"offsetColumns"),sg(),iN(1148,"."),sg()()()(),Tl(1149,"tr",13)(1150,"td",14)(1151,"div",15)(1152,"span",16),iN(1153," offsetMdColumns"),Gl(1154,"br"),sg()()(),Tl(1155,"td",17)(1156,"code",47),iN(1157,"number"),sg()(),Tl(1158,"td",20)(1159,"em")(1160,"strong"),iN(1161,"(opcional)"),sg()(),Tl(1162,"p"),iN(1163,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Tl(1164,"p"),iN(1165,"Deve ser usado o sistema de "),Tl(1166,"strong"),iN(1167,"grid"),sg(),iN(1168," do PO (1 ... 12 colunas)."),sg(),Tl(1169,"blockquote")(1170,"p"),iN(1171,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(1172,"code"),iN(1173,"offsetColumns"),sg(),iN(1174,"."),sg()()()(),Tl(1175,"tr",13)(1176,"td",14)(1177,"div",15)(1178,"span",16),iN(1179," offsetSmColumns"),Gl(1180,"br"),sg()()(),Tl(1181,"td",17)(1182,"code",47),iN(1183,"number"),sg()(),Tl(1184,"td",20)(1185,"em")(1186,"strong"),iN(1187,"(opcional)"),sg()(),Tl(1188,"p"),iN(1189,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Tl(1190,"p"),iN(1191,"Deve ser usado o sistema de "),Tl(1192,"strong"),iN(1193,"grid"),sg(),iN(1194," do PO (1 ... 12 colunas)."),sg(),Tl(1195,"blockquote")(1196,"p"),iN(1197,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(1198,"code"),iN(1199,"offsetColumns"),sg(),iN(1200,"."),sg()()()(),Tl(1201,"tr",13)(1202,"td",14)(1203,"div",15)(1204,"span",16),iN(1205," offsetXlColumns"),Gl(1206,"br"),sg()()(),Tl(1207,"td",17)(1208,"code",47),iN(1209,"number"),sg()(),Tl(1210,"td",20)(1211,"em")(1212,"strong"),iN(1213,"(opcional)"),sg()(),Tl(1214,"p"),iN(1215,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Tl(1216,"p"),iN(1217,"Deve ser usado o sistema de "),Tl(1218,"strong"),iN(1219,"grid"),sg(),iN(1220," do PO (1 ... 12 colunas)."),sg(),Tl(1221,"blockquote")(1222,"p"),iN(1223,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(1224,"code"),iN(1225,"offsetColumns"),sg(),iN(1226,"."),sg()()()(),Tl(1227,"tr",13)(1228,"td",14)(1229,"div",15)(1230,"span",16),iN(1231," options"),Gl(1232,"br"),sg()()(),Tl(1233,"td",17)(1234,"code",49),iN(1235,"Array<{ label: string; value: string "),sg(),Tl(1236,"code",50),iN(1237,` number;
}>`),sg()(),Tl(1238,"td",20)(1239,"em")(1240,"strong"),iN(1241,"(opcional)"),sg()(),Tl(1242,"p"),iN(1243,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),sg(),Tl(1244,"p"),iN(1245,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(1246,"pre")(1247,"code"),iN(1248,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),sg()(),Tl(1249,"pre")(1250,"code"),iN(1251,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),sg()()()(),Tl(1252,"tr",13)(1253,"td",14)(1254,"div",15)(1255,"span",16),iN(1256," optionsMulti"),Gl(1257,"br"),sg()()(),Tl(1258,"td",17)(1259,"code",24),iN(1260,"boolean"),sg()(),Tl(1261,"td",20)(1262,"em")(1263,"strong"),iN(1264,"(opcional)"),sg()(),Tl(1265,"p"),iN(1266,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),sg()()(),Tl(1267,"tr",13)(1268,"td",14)(1269,"div",15)(1270,"span",16),iN(1271," optionsService"),Gl(1272,"br"),sg()()(),Tl(1273,"td",17)(1274,"code",18),iN(1275,"string "),sg(),Tl(1276,"code",51),iN(1277," PoComboFilter "),sg(),Tl(1278,"code",52),iN(1279," PoMultiselectFilter"),sg()(),Tl(1280,"td",20)(1281,"em")(1282,"strong"),iN(1283,"(opcional)"),sg()(),Tl(1284,"p"),iN(1285,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Tl(1286,"strong"),iN(1287,"Importante"),sg()(),Tl(1288,"blockquote")(1289,"p"),iN(1290,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Tl(1291,"a",53),iN(1292,"guia de API do PO UI"),sg(),iN(1293,"."),sg()()()(),Tl(1294,"tr",13)(1295,"td",14)(1296,"div",15)(1297,"span",16),iN(1298," order"),Gl(1299,"br"),sg()()(),Tl(1300,"td",17)(1301,"code",47),iN(1302,"number"),sg()(),Tl(1303,"td",20)(1304,"em")(1305,"strong"),iN(1306,"(opcional)"),sg()(),Tl(1307,"p"),iN(1308,"Informa a ordem de exibi\xE7\xE3o do campo."),sg(),Tl(1309,"p"),iN(1310,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(1311,"pre")(1312,"code"),iN(1313,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),sg()(),Tl(1314,"p"),iN(1315,"Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:"),sg(),Tl(1316,"pre")(1317,"code"),iN(1318,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),sg()(),Tl(1319,"p"),iN(1320,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),sg(),Tl(1321,"p"),iN(1322,"Campos sem "),Tl(1323,"code"),iN(1324,"order"),sg(),iN(1325,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),sg()()(),Tl(1326,"tr",13)(1327,"td",14)(1328,"div",15)(1329,"span",16),iN(1330," params"),Gl(1331,"br"),sg()()(),Tl(1332,"td",17)(1333,"code",54),iN(1334,"any"),sg()(),Tl(1335,"td",20)(1336,"em")(1337,"strong"),iN(1338,"(opcional)"),sg()(),Tl(1339,"p"),iN(1340,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca "),Tl(1341,"code"),iN(1342,"searchService"),sg(),iN(1343," ou "),Tl(1344,"code"),iN(1345,"optionsService"),sg(),iN(1346,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),sg(),Tl(1347,"p"),iN(1348,"Por exemplo, para o par\xE2metro "),Tl(1349,"code"),iN(1350,"{ age: 23 }"),sg(),iN(1351," a URL da requisi\xE7\xE3o ficaria:"),sg(),Tl(1352,"p")(1353,"code"),iN(1354,"url + /1?age=23"),sg()()()(),Tl(1355,"tr",13)(1356,"td",14)(1357,"div",15)(1358,"span",16),iN(1359," property"),Gl(1360,"br"),sg()()(),Tl(1361,"td",17)(1362,"code",18),iN(1363,"string"),sg()(),Tl(1364,"td",20)(1365,"p"),iN(1366,"Nome de refer\xEAncia do campo."),sg()()(),Tl(1367,"tr",13)(1368,"td",14)(1369,"div",15)(1370,"span",16),iN(1371," searchService"),Gl(1372,"br"),sg()()(),Tl(1373,"td",17)(1374,"code",18),iN(1375,"string "),sg(),Tl(1376,"code",55),iN(1377," PoDynamicViewRequest"),sg()(),Tl(1378,"td",20)(1379,"em")(1380,"strong"),iN(1381,"(opcional)"),sg()(),Tl(1382,"p"),iN(1383,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),Tl(1384,"strong"),iN(1385,"Importante:"),sg()(),Tl(1386,"blockquote")(1387,"p"),iN(1388,"A propriedade "),Tl(1389,"code"),iN(1390,"property"),sg(),iN(1391,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Tl(1392,"a",53),iN(1393,"guia de API do PO UI"),sg(),iN(1394,"."),sg()()()(),Tl(1395,"tr",13)(1396,"td",14)(1397,"div",15)(1398,"span",16),iN(1399," tag"),Gl(1400,"br"),sg()()(),Tl(1401,"td",17)(1402,"code",24),iN(1403,"boolean"),sg()(),Tl(1404,"td",20)(1405,"em")(1406,"strong"),iN(1407,"(opcional)"),sg()(),Tl(1408,"p"),iN(1409,"Indica se o campo ser\xE1 um "),Tl(1410,"code"),iN(1411,"po-tag"),sg(),iN(1412,"."),sg()()(),Tl(1413,"tr",13)(1414,"td",14)(1415,"div",15)(1416,"span",16),iN(1417," textColor"),Gl(1418,"br"),sg()()(),Tl(1419,"td",17)(1420,"code",18),iN(1421,"string"),sg()(),Tl(1422,"td",20)(1423,"em")(1424,"strong"),iN(1425,"(opcional)"),sg()(),Tl(1426,"p"),iN(1427,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),sg(),Tl(1428,"ul")(1429,"li"),iN(1430,"Hexadeximal, por exemplo "),Tl(1431,"code"),iN(1432,"#c64840"),sg(),iN(1433,";"),sg(),Tl(1434,"li"),iN(1435,"RGB, como "),Tl(1436,"code"),iN(1437,"rgb(0, 0, 165)"),sg(),iN(1438,";"),sg(),Tl(1439,"li"),iN(1440,"O nome da cor, por exemplo "),Tl(1441,"code"),iN(1442,"blue"),sg(),iN(1443,";"),sg()()()(),Tl(1444,"tr",13)(1445,"td",14)(1446,"div",15)(1447,"span",16),iN(1448," type"),Gl(1449,"br"),sg()()(),Tl(1450,"td",17)(1451,"code",18),iN(1452,"string "),sg(),Tl(1453,"code",56),iN(1454," PoDynamicFieldType"),sg()(),Tl(1455,"td",20)(1456,"em")(1457,"strong"),iN(1458,"(opcional)"),sg()(),Tl(1459,"p"),iN(1460,"Tipo do valor campo."),sg(),Tl(1461,"p"),iN(1462,"Valores v\xE1lidos:"),sg(),Tl(1463,"ul")(1464,"li")(1465,"code"),iN(1466,"boolean"),sg(),iN(1467,": Valores "),Tl(1468,"em"),iN(1469,"booleanos"),sg(),iN(1470,"."),sg(),Tl(1471,"li")(1472,"code"),iN(1473,"currency"),sg(),iN(1474,": Valores monet\xE1rios."),sg(),Tl(1475,"li")(1476,"code"),iN(1477,"decimal"),sg(),iN(1478,": Valores decimais."),sg(),Tl(1479,"li")(1480,"code"),iN(1481,"date"),sg(),iN(1482,": Valores de datas."),Tl(1483,"ul")(1484,"li"),iN(1485,"Aceita os tipos "),Tl(1486,"strong"),iN(1487,"string"),sg(),iN(1488," e "),Tl(1489,"strong"),iN(1490,"Date"),sg(),iN(1491,` padr\xE3o do Javascript,
por exemplo: `),Tl(1492,"code"),iN(1493,"'2017-11-28'"),sg(),iN(1494," ou "),Tl(1495,"code"),iN(1496,"new Date(2017, 10, 28)"),sg(),iN(1497,"."),sg()()(),Tl(1498,"li")(1499,"code"),iN(1500,"dateTime"),sg(),iN(1501,": Valor de data com hor\xE1rio."),Tl(1502,"ul")(1503,"li"),iN(1504,"Aceita o tipo "),Tl(1505,"em"),iN(1506,"string"),sg(),iN(1507," no formato "),Tl(1508,"strong"),iN(1509,"ISO-8601"),sg(),iN(1510," extendido "),Tl(1511,"strong"),iN(1512,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),sg(),iN(1513,`
e o tipo `),Tl(1514,"strong"),iN(1515,"Date"),sg(),iN(1516," padr\xE3o do Javascript, por exemplo: "),Tl(1517,"code"),iN(1518,"'2017-11-28T00:00:00-02:00'"),sg(),iN(1519," ou "),Tl(1520,"code"),iN(1521,"new Date(2017, 10, 28)"),sg(),iN(1522,"."),sg()()(),Tl(1523,"li")(1524,"code"),iN(1525,"number"),sg(),iN(1526,": Valores num\xE9ricos."),sg(),Tl(1527,"li")(1528,"code"),iN(1529,"string"),sg(),iN(1530,": Textos."),sg(),Tl(1531,"li")(1532,"code"),iN(1533,"time"),sg(),iN(1534,": Valor do hor\xE1rio."),Tl(1535,"ul")(1536,"li"),iN(1537,"Aceita o tipo "),Tl(1538,"strong"),iN(1539,"string"),sg(),iN(1540," nos formatos "),Tl(1541,"strong"),iN(1542,"'HH:mm:ss'"),sg(),iN(1543," ou "),Tl(1544,"strong"),iN(1545,"'HH:mm:ss.ffffff'"),sg(),iN(1546,", por exemplo: "),Tl(1547,"code"),iN(1548,"'23:12:45'"),sg(),iN(1549,"."),sg()()()()()(),Tl(1550,"tr",13)(1551,"td",14)(1552,"div",15)(1553,"span",16),iN(1554," visible"),Gl(1555,"br"),sg()()(),Tl(1556,"td",17)(1557,"code",24),iN(1558,"boolean"),sg()(),Tl(1559,"td",20)(1560,"em")(1561,"strong"),iN(1562,"(opcional)"),sg()(),Tl(1563,"p"),iN(1564,"Indica se o campo ser\xE1 vis\xEDvel."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Q=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Dynamic View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,r){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Gl(3,"sample-po-dynamic-view-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),Gl(5,"sample-po-dynamic-view-basic-view")(6,"sample-po-dynamic-view-employee-view")(7,"sample-po-dynamic-view-employee-on-load-view")(8,"sample-po-dynamic-view-container-view"),sg()()()),a&2&&(nw("p-actions",r.actions),Vp(2),nw("p-active",r.activeTab==="doc"),Vp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[lNe,Wme,jme,N,G,W,Z,X],encapsulation:2,changeDetection:1})}return o})();var Ee=[{path:"",component:Q}],K=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[DL.forChild(Ee),DL]})}return o})();var Ke=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ar,K]})}return o})();export{Ke as DocPoDynamicViewModule};