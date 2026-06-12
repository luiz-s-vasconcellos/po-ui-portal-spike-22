import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,t as tb,cQ as _n,q,S,b2 as _Ne,R as Hl,Z as ZE,bw as oN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,a3 as SNe,W as we}from'./main-OS7VVRJY.js';var Y=()=>({property:"name"}),$=o=>[o],ee=()=>({name:"Jhon"}),_=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-basic"]],standalone:false,decls:1,vars:6,consts:[[3,"p-fields","p-value"]],template:function(a,l){a&1&&Hl(0,"po-dynamic-view",0),a&2&&ZE("p-fields",oN(3,$,iN(2,Y)))("p-value",iN(5,ee));},dependencies:[_Ne],encapsulation:2,changeDetection:1})}return o})();var ie=o=>({"docs-sample-code-tabs":o}),N=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Dynamic View Basic"),og(),Cl(4,"a",2),dt("click",function(){return l.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-dynamic-view-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ie,l.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,_],encapsulation:2})}return o})();var R=(()=>{class o{fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",divider:"ADDITIONAL DATA",tag:true,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]},{property:"hobbies",label:"Hobbies",gridColumns:12,divider:"Additional Information"}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1",hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee"]],standalone:false,decls:2,vars:3,consts:[["p-title","Employee"],[3,"p-fields","p-value","p-text-wrap"]],template:function(a,l){a&1&&(Cl(0,"po-page-default",0),Hl(1,"po-dynamic-view",1),og()),a&2&&(Lp(),ZE("p-fields",l.fields)("p-value",l.employee)("p-text-wrap",true));},dependencies:[_Ne,SNe],encapsulation:2,changeDetection:1})}return o})();var ae=o=>({"docs-sample-code-tabs":o}),G=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Dynamic View - Employee"),og(),Cl(4,"a",2),dt("click",function(){return l.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-dynamic-view-employee"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ae,l.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,R],encapsulation:2})}return o})();var O=(()=>{class o{httpClient=f(tb);headers=new _n({"X-PO-No-Message":"true"});url;filterParams;getObjectByValue(r,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(q(l=>"items"in l?l.items:l))}setConfig(r,a){this.url=r,this.filterParams=a;}static \u0275fac=function(a){return new(a||o)};static \u0275prov=S({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var J=(()=>{class o{employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"A",wage:8000.5,availability:"Available",cities:[{city:"S\xE3o Paulo",id:"SP"},{city:"Joinville",id:"SC"},{city:"Belo Horizonte",id:"MG"}],admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",profile:"admin",image:"https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg"};fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"cities",isArrayOrObject:true,fieldLabel:"city",fieldValue:"id",concatLabelValue:true},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"image",divider:"Image",image:true,alt:"image",height:"250"}];_newService=f(O);ngOnInit(){this._newService.setConfig("https://po-sample-api.onrender.com/v1/hotels",{id:1485976673002});}customEmployeeData(){return {value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:"name",divider:"Personal data by load customization",order:1},{property:"cpf",tag:true,color:"color-07",order:2},{property:"rg",tag:true,color:"color-07",order:3},{property:"wage",type:"string",tag:true,color:"color-07"},{property:"genre",visible:false},{property:"job",tag:false},{searchService:this._newService,fieldLabel:"address_city",property:"city"}]}}checkProfile(){if(this.employee.profile==="admin")return "confidential"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-on-load"]],standalone:false,features:[we([O])],decls:2,vars:3,consts:[["p-title","Employee on Load"],[3,"p-fields","p-load","p-value"]],template:function(a,l){a&1&&(Cl(0,"po-page-default",0),Hl(1,"po-dynamic-view",1),og()),a&2&&(Lp(),ZE("p-fields",l.fields)("p-load",l.customEmployeeData.bind(l))("p-value",l.employee));},dependencies:[_Ne,SNe],encapsulation:2,changeDetection:1})}return o})();var me=o=>({"docs-sample-code-tabs":o}),W=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-employee-on-load-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Dynamic View - Employee on load"),og(),Cl(4,"a",2),dt("click",function(){return l.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Cl(21,"label",6),qx(22,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-dynamic-view-employee-on-load"),og(),Hl(27,"hr")),a&2&&(Lp(5),Fx("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,me,l.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,J],encapsulation:2})}return o})();var U=(()=>{class o{fields=[{property:"name",container:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",container:"Work Data"},{property:"job",tag:true,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:true,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",container:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",container:"ADDITIONAL DATA",tag:true,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1"};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-container"]],standalone:false,decls:2,vars:2,consts:[["p-title","Employee"],[3,"p-fields","p-value"]],template:function(a,l){a&1&&(Cl(0,"po-page-default",0),Hl(1,"po-dynamic-view",1),og()),a&2&&(Lp(),ZE("p-fields",l.fields)("p-value",l.employee));},dependencies:[_Ne,SNe],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o}),Z=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-container-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Dynamic View - Employee on load"),og(),Cl(4,"a",2),dt("click",function(){return l.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-dynamic-view-container"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+l.sampleCodeButtonIcon),Lp(),dg(" ",l.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,se,l.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,U],encapsulation:2})}return o})();var X=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-view-doc"]],standalone:false,decls:1565,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDynamicViewField[]"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","object"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<string>"],["href","https://angular.io/api/common/CurrencyPipe"],["href","https://angular.io/api/common/DatePipe"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<{","label:","string;","value:","string"],["pan","",1,"docs-api-property-type","number;","}>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoDynamicViewRequest"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"]],template:function(a,l){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),og()(),Hl(4,"div",2),Cl(5,"h3",3),qx(6,"Componente"),og(),Cl(7,"h4",4)(8,"code",5),qx(9,"PoDynamicViewComponent"),og()(),Cl(10,"div",2)(11,"p"),qx(12,"Componente para listar dados dinamicamente a partir de uma lista de objetos."),og(),Cl(13,"blockquote")(14,"p"),qx(15,"Por padr\xE3o esse componente cria "),Cl(16,"code"),qx(17,"po-info"),og(),qx(18," para exibi\xE7\xE3o, \xE9 poss\xEDvel criar "),Cl(19,"code"),qx(20,"po-tag"),og(),qx(21," passando a propriedade { tag: true }. "),og()()(),Cl(22,"div",6)(23,"h4",7),qx(24,"Seletor"),og(),Cl(25,"pre",8),qx(26,`<po-dynamic-view
    p-components-size="string"
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),og()(),Cl(27,"h4",9),qx(28,"Propriedades"),og(),Cl(29,"table",10)(30,"tr",11)(31,"th",12),qx(32,"Nome"),og(),Cl(33,"th",12),qx(34,"Tipo"),og(),Cl(35,"th",12),qx(36,"Padr\xE3o"),og(),Cl(37,"th",12),qx(38,"Descri\xE7\xE3o"),og()(),Cl(39,"tr",13)(40,"td",14)(41,"div",15)(42,"span",16),qx(43," p-components-size"),Hl(44,"br"),og()()(),Cl(45,"td",17)(46,"code",18),qx(47,"string"),og()(),Cl(48,"td",19)(49,"p")(50,"code"),qx(51,"medium"),og()()(),Cl(52,"td",20)(53,"em")(54,"strong"),qx(55,"(opcional)"),og()(),Cl(56,"p"),qx(57,"Define o tamanho dos componentes no template entre "),Cl(58,"code"),qx(59,"small"),og(),qx(60," ou "),Cl(61,"code"),qx(62,"medium"),og(),qx(63,"."),og(),Cl(64,"blockquote")(65,"p"),qx(66,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(67,"code"),qx(68,"medium"),og(),qx(69,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(70,"a",21),qx(71,"po-theme"),og(),qx(72,"."),og()()()(),Cl(73,"tr",13)(74,"td",14)(75,"div",15)(76,"span",16),qx(77," p-fields"),Hl(78,"br"),og()()(),Cl(79,"td",17)(80,"code",22),qx(81,"PoDynamicViewField[]"),og()(),Cl(82,"td",19)(83,"p")(84,"code"),qx(85,"[]"),og()()(),Cl(86,"td",20)(87,"em")(88,"strong"),qx(89,"(opcional)"),og()(),Cl(90,"p"),qx(91,"Lista de objetos que implementam a interface "),Cl(92,"code"),qx(93,"PoDynamicView"),og(),qx(94,"."),og(),Cl(95,"blockquote")(96,"p"),qx(97,"Ex: "),Cl(98,"code"),qx(99,"[ { property: 'age' } ]"),og()()(),Cl(100,"p"),qx(101,"Regras de tipagem e formata\xE7\xE3o dos valores exibidos:"),og(),Cl(102,"ul")(103,"li"),qx(104,"Caso o "),Cl(105,"em"),qx(106,"type"),og(),qx(107," informado seja "),Cl(108,"em"),qx(109,"currency"),og(),qx(110," e n\xE3o seja informado o "),Cl(111,"em"),qx(112,"format"),og(),qx(113,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),og(),Cl(114,"li"),qx(115,"Caso o "),Cl(116,"em"),qx(117,"type"),og(),qx(118," informado seja "),Cl(119,"em"),qx(120,"date"),og(),qx(121," e n\xE3o seja informado o "),Cl(122,"em"),qx(123,"format"),og(),qx(124," o mesmo recebe 'dd/MM/yyyy' como formato padr\xE3o."),og(),Cl(125,"li"),qx(126,"Caso o "),Cl(127,"em"),qx(128,"type"),og(),qx(129," informado seja "),Cl(130,"em"),qx(131,"dateTime"),og(),qx(132," e n\xE3o seja informado o "),Cl(133,"em"),qx(134,"format"),og(),qx(135," o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padr\xE3o."),og(),Cl(136,"li"),qx(137,"Caso o "),Cl(138,"em"),qx(139,"type"),og(),qx(140," informado seja "),Cl(141,"em"),qx(142,"number"),og(),qx(143," e n\xE3o seja informado o "),Cl(144,"em"),qx(145,"format"),og(),qx(146," o mesmo n\xE3o ser\xE1 formatado."),og(),Cl(147,"li"),qx(148,"Caso o "),Cl(149,"em"),qx(150,"type"),og(),qx(151," informado seja "),Cl(152,"em"),qx(153,"time"),og(),qx(154," e n\xE3o seja informado o "),Cl(155,"em"),qx(156,"format"),og(),qx(157," o mesmo recebe 'HH:mm:ss.ffffff' como formato padr\xE3o."),og()(),Cl(158,"blockquote")(159,"p"),qx(160,"As propriedades informadas ser\xE3o exibidas mesmo n\xE3o contendo valor de refer\xEAncia no objeto da propriedade "),Cl(161,"code"),qx(162,"p-value"),og(),qx(163,"."),og()()()(),Cl(164,"tr",13)(165,"td",14)(166,"div",15)(167,"span",16),qx(168," p-load"),Hl(169,"br"),og()()(),Cl(170,"td",17)(171,"code",18),qx(172,"string "),og(),Cl(173,"code",23),qx(174," Function"),og()(),Cl(175,"td",19),qx(176,"-"),og(),Cl(177,"td",20)(178,"em")(179,"strong"),qx(180,"(opcional)"),og()(),Cl(181,"p"),qx(182,"Possibilita executar uma fun\xE7\xE3o quando o componente \xE9 inicializado."),og(),Cl(183,"p"),qx(184,"A propriedade aceita os seguintes tipos:"),og(),Cl(185,"ul")(186,"li")(187,"strong"),qx(188,"String"),og(),qx(189,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Cl(190,"code"),qx(191,"POST"),og(),qx(192,"."),og(),Cl(193,"li")(194,"strong"),qx(195,"Function"),og(),qx(196,": M\xE9todo que ser\xE1 executado na inicializa\xE7\xE3o do componente."),og()(),Cl(197,"p"),qx(198,"Para os dois tipos de utiliza\xE7\xE3o da propriedade espera-se o seguinte retorno:"),og(),Cl(199,"pre")(200,"code"),qx(201,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),og()(),Cl(202,"blockquote")(203,"p")(204,"strong"),qx(205,"value"),og(),qx(206,": any = atribui novo valor do model."),og()(),Cl(207,"blockquote")(208,"p")(209,"strong"),qx(210,"fields"),og(),qx(211,": "),Cl(212,"code"),qx(213,"Array<PoDynamicViewField>"),og(),qx(214,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),og()(),Cl(215,"ul")(216,"li"),qx(217,"Para esconder/remover campos precisa informar no field a propriedade "),Cl(218,"code"),qx(219,"visible = false"),og(),qx(220,"."),og()()()(),Cl(221,"tr",13)(222,"td",14)(223,"div",15)(224,"span",16),qx(225," p-show-all-value"),Hl(226,"br"),og()()(),Cl(227,"td",17)(228,"code",24),qx(229,"boolean"),og()(),Cl(230,"td",19)(231,"p")(232,"code"),qx(233,"false"),og()()(),Cl(234,"td",20)(235,"em")(236,"strong"),qx(237,"(opcional)"),og()(),Cl(238,"p"),qx(239,"Indica se exibir\xE1 todas as informa\xE7\xF5es contidas dentro do objeto informado na propriedade "),Cl(240,"code"),qx(241,"p-value"),og(),qx(242,"."),og()()(),Cl(243,"tr",13)(244,"td",14)(245,"div",15)(246,"span",16),qx(247," p-text-wrap"),Hl(248,"br"),og()()(),Cl(249,"td",17)(250,"code",24),qx(251,"boolean"),og()(),Cl(252,"td",19)(253,"p")(254,"code"),qx(255,"false"),og()()(),Cl(256,"td",20)(257,"em")(258,"strong"),qx(259,"(opcional)"),og()(),Cl(260,"p"),qx(261,"Permite a quebra de linha no texto do "),Cl(262,"code"),qx(263,"p-value"),og(),qx(264,", aplicando-a onde h\xE1 "),Cl(265,"code"),qx(266,"\\n"),og(),qx(267,"."),og(),Cl(268,"pre")(269,"code"),qx(270,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),og()(),Cl(271,"p"),qx(272,"Sa\xEDda:"),og(),Cl(273,"pre")(274,"code"),qx(275,`Primeira linha
Segunda linha
`),og()()()(),Cl(276,"tr",13)(277,"td",14)(278,"div",15)(279,"span",16),qx(280," p-value"),Hl(281,"br"),og()()(),Cl(282,"td",17)(283,"code",25),qx(284,"object"),og()(),Cl(285,"td",19),qx(286,"-"),og(),Cl(287,"td",20)(288,"p"),qx(289,"Objeto que ser\xE1 utilizado para exibir as informa\xE7\xF5es din\xE2micas, o valor ser\xE1 recuperado atrav\xE9s do atributo "),Cl(290,"em"),qx(291,"property"),og(),qx(292,`
dos objetos contidos na propridade `),Cl(293,"code"),qx(294,"p-fields"),og(),qx(295,"."),og(),Cl(296,"blockquote")(297,"p"),qx(298,"Ex: "),Cl(299,"code"),qx(300,"{ age: '35' }"),og()()()()()(),Cl(301,"h3"),qx(302,"Interfaces"),og(),Cl(303,"h4",26)(304,"code",5),qx(305,"PoDynamicViewRequest"),og()(),Cl(306,"div",2)(307,"p"),qx(308,"Define o tipo de busca customizada para um campo em espec\xEDfico."),og()(),Cl(309,"h4",9),qx(310,"M\xE9todos"),og(),Cl(311,"table",27)(312,"tr",13)(313,"th",28)(314,"div",15)(315,"h4")(316,"span",16),qx(317," getObjectByValue "),og()()()()(),Cl(318,"tr",20)(319,"td",20)(320,"p"),qx(321,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),og()()()(),Cl(322,"h5")(323,"b"),qx(324,"Par\xE2metros"),og()(),Cl(325,"table",10)(326,"tr",11)(327,"th",12),qx(328,"Nome"),og(),Cl(329,"th",12),qx(330,"Tipo"),og(),Cl(331,"th",12),qx(332,"Descri\xE7\xE3o"),og()(),Cl(333,"tr",13)(334,"td",14),qx(335," value"),og(),Cl(336,"td",17)(337,"code",18),qx(338," string "),og(),Cl(339,"code",29),qx(340," Array<any> "),og()(),Cl(341,"td",20)(342,"p"),qx(343,"Valor \xFAnico a ser buscado na fonte de dados."),og()()(),Cl(344,"tr",13)(345,"td",14),qx(346," filterParams"),og(),Cl(347,"td",17)(348,"code",30),qx(349," any "),og()(),Cl(350,"td",20)(351,"p"),qx(352,"Valor opcional para informar filtros customizados."),og()()()(),Hl(353,"br"),Cl(354,"h4",26)(355,"code",5),qx(356,"PoDynamicViewField"),og()(),Cl(357,"div",2)(358,"p"),qx(359," Interface para defini\xE7\xE3o das propriedades dos campos de visualiza\xE7\xE3o que ser\xE3o criados dinamicamente."),og()(),Cl(360,"h4",9),qx(361,"Propriedades"),og(),Cl(362,"table",10)(363,"tr",11)(364,"th",12),qx(365,"Nome"),og(),Cl(366,"th",12),qx(367,"Tipo"),og(),Cl(368,"th",12),qx(369,"Descri\xE7\xE3o"),og()(),Cl(370,"tr",13)(371,"td",14)(372,"div",15)(373,"span",16),qx(374," alt"),Hl(375,"br"),og()()(),Cl(376,"td",17)(377,"code",18),qx(378,"string"),og()(),Cl(379,"td",20)(380,"em")(381,"strong"),qx(382,"(opcional)"),og()(),Cl(383,"p"),qx(384,"Defini o texto alternativo descrevendo a imagem."),og(),Cl(385,"p"),qx(386,"Exemplo de utiliza\xE7\xE3o:"),og(),Cl(387,"pre")(388,"code"),qx(389,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),og()(),Cl(390,"p")(391,"strong"),qx(392,"Componentes compat\xEDveis:"),og(),Cl(393,"code"),qx(394,"po-image"),og(),qx(395,"."),og()()(),Cl(396,"tr",13)(397,"td",14)(398,"div",15)(399,"span",16),qx(400," booleanFalse"),Hl(401,"br"),og()()(),Cl(402,"td",17)(403,"code",18),qx(404,"string"),og()(),Cl(405,"td",20)(406,"em")(407,"strong"),qx(408,"(opcional)"),og()(),Cl(409,"p"),qx(410,"Texto exibido quando o valor do componente for "),Cl(411,"em"),qx(412,"false"),og(),qx(413,"."),og()()(),Cl(414,"tr",13)(415,"td",14)(416,"div",15)(417,"span",16),qx(418," booleanTrue"),Hl(419,"br"),og()()(),Cl(420,"td",17)(421,"code",18),qx(422,"string"),og()(),Cl(423,"td",20)(424,"em")(425,"strong"),qx(426,"(opcional)"),og()(),Cl(427,"p"),qx(428,"Texto exibido quando o valor do componente for "),Cl(429,"em"),qx(430,"true"),og(),qx(431,"."),og()()(),Cl(432,"tr",13)(433,"td",14)(434,"div",15)(435,"span",16),qx(436," color"),Hl(437,"br"),og()()(),Cl(438,"td",17)(439,"code",18),qx(440,"string"),og()(),Cl(441,"td",20)(442,"em")(443,"strong"),qx(444,"(opcional)"),og()(),Cl(445,"p"),qx(446,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),og(),Cl(447,"ul")(448,"li"),qx(449,"Hexadeximal, por exemplo "),Cl(450,"code"),qx(451,"#c64840"),og(),qx(452,";"),og(),Cl(453,"li"),qx(454,"RGB, como "),Cl(455,"code"),qx(456,"rgb(0, 0, 165)"),og(),qx(457,";"),og(),Cl(458,"li"),qx(459,"O nome da cor, por exemplo "),Cl(460,"code"),qx(461,"blue"),og(),qx(462,";"),og(),Cl(463,"li"),qx(464,"Usando uma das cores do tema do PO:"),og(),Cl(465,"li"),qx(466,"Valores v\xE1lidos:"),Cl(467,"ul")(468,"li"),Hl(469,"span",31),Cl(470,"code"),qx(471,"color-01"),og()(),Cl(472,"li"),Hl(473,"span",32),Cl(474,"code"),qx(475,"color-02"),og()(),Cl(476,"li"),Hl(477,"span",33),Cl(478,"code"),qx(479,"color-03"),og()(),Cl(480,"li"),Hl(481,"span",34),Cl(482,"code"),qx(483,"color-04"),og()(),Cl(484,"li"),Hl(485,"span",35),Cl(486,"code"),qx(487,"color-05"),og()(),Cl(488,"li"),Hl(489,"span",36),Cl(490,"code"),qx(491,"color-06"),og()(),Cl(492,"li"),Hl(493,"span",37),Cl(494,"code"),qx(495,"color-07"),og()(),Cl(496,"li"),Hl(497,"span",38),Cl(498,"code"),qx(499,"color-08"),og()(),Cl(500,"li"),Hl(501,"span",39),Cl(502,"code"),qx(503,"color-09"),og()(),Cl(504,"li"),Hl(505,"span",40),Cl(506,"code"),qx(507,"color-10"),og()(),Cl(508,"li"),Hl(509,"span",41),Cl(510,"code"),qx(511,"color-11"),og()(),Cl(512,"li"),Hl(513,"span",42),Cl(514,"code"),qx(515,"color-12"),og()()()()()()(),Cl(516,"tr",13)(517,"td",14)(518,"div",15)(519,"span",16),qx(520," concatLabelValue"),Hl(521,"br"),og()()(),Cl(522,"td",17)(523,"code",24),qx(524,"boolean"),og()(),Cl(525,"td",20)(526,"em")(527,"strong"),qx(528,"(opcional)"),og()(),Cl(529,"p"),qx(530,"Permite que seja exibido em tela, de forma concatenada as propriedades "),Cl(531,"code"),qx(532,"fieldLabel"),og(),qx(533," + "),Cl(534,"code"),qx(535,"fieldValue"),og(),qx(536,`.
A ordem sempre ser\xE1 `),Cl(537,"code"),qx(538,"fieldLabel"),og(),qx(539," e depois "),Cl(540,"code"),qx(541,"fieldValue"),og(),qx(542,", n\xE3o sendo poss\xEDvel alterar."),og(),Cl(543,"blockquote")(544,"p"),qx(545,"Propriedade funciona corretamente caso as propriedades "),Cl(546,"code"),qx(547,"fieldLabel"),og(),qx(548," e "),Cl(549,"code"),qx(550,"fielValue"),og(),qx(551," sejam v\xE1lidas."),og()()()(),Cl(552,"tr",13)(553,"td",14)(554,"div",15)(555,"span",16),qx(556," container"),Hl(557,"br"),og()()(),Cl(558,"td",17)(559,"code",18),qx(560,"string"),og()(),Cl(561,"td",20)(562,"em")(563,"strong"),qx(564,"(opcional)"),og()(),Cl(565,"p"),qx(566,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),og(),Cl(567,"p"),qx(568,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),og()()(),Cl(569,"tr",13)(570,"td",14)(571,"div",15)(572,"span",16),qx(573," divider"),Hl(574,"br"),og()()(),Cl(575,"td",17)(576,"code",18),qx(577,"string"),og()(),Cl(578,"td",20)(579,"em")(580,"strong"),qx(581,"(opcional)"),og()(),Cl(582,"p"),qx(583,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),og()()(),Cl(584,"tr",13)(585,"td",14)(586,"div",15)(587,"span",16),qx(588," fieldLabel"),Hl(589,"br"),og()()(),Cl(590,"td",17)(591,"code",18),qx(592,"string"),og()(),Cl(593,"td",20)(594,"em")(595,"strong"),qx(596,"(opcional)"),og()(),Cl(597,"p"),qx(598,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),og(),Cl(599,"p"),qx(600,"O valor padr\xE3o \xE9: "),Cl(601,"code"),qx(602,"label"),og(),qx(603,"."),og()()(),Cl(604,"tr",13)(605,"td",14)(606,"div",15)(607,"span",16),qx(608," fieldValue"),Hl(609,"br"),og()()(),Cl(610,"td",17)(611,"code",18),qx(612,"string"),og()(),Cl(613,"td",20)(614,"em")(615,"strong"),qx(616,"(opcional)"),og()(),Cl(617,"p"),qx(618,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),og(),Cl(619,"p"),qx(620,"O valor padr\xE3o \xE9: "),Cl(621,"code"),qx(622,"value"),og(),qx(623,"."),og()()(),Cl(624,"tr",13)(625,"td",14)(626,"div",15)(627,"span",16),qx(628," format"),Hl(629,"br"),og()()(),Cl(630,"td",17)(631,"code",18),qx(632,"string "),og(),Cl(633,"code",43),qx(634," Array<string>"),og()(),Cl(635,"td",20)(636,"em")(637,"strong"),qx(638,"(opcional)"),og()(),Cl(639,"p"),qx(640,"Define o formato de exibi\xE7\xE3o para o valor de um campo."),og(),Cl(641,"ul")(642,"li")(643,"p"),qx(644,"Quando "),Cl(645,"code"),qx(646,"format"),og(),qx(647," \xE9 uma "),Cl(648,"code"),qx(649,"string"),og(),qx(650,", o formato aplicado depende da propriedade "),Cl(651,"strong"),qx(652,"type"),og(),qx(653," segue como usar cada tipo:"),og(),Cl(654,"ul")(655,"li")(656,"code"),qx(657,"currency"),og(),qx(658,": Utiliza c\xF3digos de moeda definidos pelo "),Cl(659,"a",44),qx(660,"CurrencyPipe"),og(),qx(661,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),og(),Cl(662,"li")(663,"code"),qx(664,"date"),og(),qx(665,": Adota formatos de data especificados pelo "),Cl(666,"a",45),qx(667,"DatePipe"),og(),qx(668,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),og(),Cl(669,"li")(670,"code"),qx(671,"time"),og(),qx(672,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),og(),Cl(673,"li")(674,"code"),qx(675,"number"),og(),qx(676,": Usa especifica\xE7\xF5es do "),Cl(677,"a",46),qx(678,"DecimalPipe"),og(),qx(679,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),Cl(680,"code"),qx(681,"50"),og(),qx(682,", formato "),Cl(683,"code"),qx(684,"'1.2-5'"),og(),qx(685,", resulta em "),Cl(686,"code"),qx(687,"50.00"),og(),qx(688,"."),og()()(),Cl(689,"li")(690,"p"),qx(691,"Quando "),Cl(692,"code"),qx(693,"format"),og(),qx(694," \xE9 um "),Cl(695,"code"),qx(696,"Array<string>"),og(),qx(697,":"),og(),Cl(698,"ul")(699,"li"),qx(700,"Cada elemento do array representa uma propriedade do objeto."),og(),Cl(701,"li"),qx(702,"Os valores dessas propriedades s\xE3o concatenados, separados pelo padr\xE3o ' - '."),og(),Cl(703,"li"),qx(704,"Exemplo: Para "),Cl(705,"code"),qx(706,'format: ["id", "name"]'),og(),qx(707," e um objeto "),Cl(708,"code"),qx(709,"{ id: 1, name: 'Carlos Diego' }"),og(),qx(710,`,
o resultado ser\xE1 `),Cl(711,"code"),qx(712,"'1 - Carlos Diego'"),og(),qx(713,"."),og()()()()()(),Cl(714,"tr",13)(715,"td",14)(716,"div",15)(717,"span",16),qx(718," gridColumns"),Hl(719,"br"),og()()(),Cl(720,"td",17)(721,"code",47),qx(722,"number"),og()(),Cl(723,"td",20)(724,"em")(725,"strong"),qx(726,"(opcional)"),og()(),Cl(727,"p"),qx(728,"Tamanho de exibi\xE7\xE3o do campo em telas."),og(),Cl(729,"p"),qx(730,"Deve ser usado o sistema de "),Cl(731,"strong"),qx(732,"grid"),og(),qx(733," do PO (1 ... 12 colunas)."),og(),Cl(734,"blockquote")(735,"p"),qx(736,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),og()()()(),Cl(737,"tr",13)(738,"td",14)(739,"div",15)(740,"span",16),qx(741," gridLgColumns"),Hl(742,"br"),og()()(),Cl(743,"td",17)(744,"code",47),qx(745,"number"),og()(),Cl(746,"td",20)(747,"em")(748,"strong"),qx(749,"(opcional)"),og()(),Cl(750,"p"),qx(751,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Cl(752,"p"),qx(753,"Deve ser usado o sistema de "),Cl(754,"strong"),qx(755,"grid"),og(),qx(756," do PO (1 ... 12 colunas)."),og(),Cl(757,"blockquote")(758,"p"),qx(759,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(760,"code"),qx(761,"gridColumns"),og(),qx(762,"."),og()()()(),Cl(763,"tr",13)(764,"td",14)(765,"div",15)(766,"span",16),qx(767," gridLgPull"),Hl(768,"br"),og()()(),Cl(769,"td",17)(770,"code",47),qx(771,"number"),og()(),Cl(772,"td",20)(773,"em")(774,"strong"),qx(775,"(opcional)"),og()(),Cl(776,"p"),qx(777,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),og(),Cl(778,"p"),qx(779,"Deve ser usado o sistema de "),Cl(780,"strong"),qx(781,"grid"),og(),qx(782," do PO (1 ... 11 colunas)."),og(),Cl(783,"blockquote")(784,"p"),qx(785,"Esta propriedade n\xE3o funciona com a propriedade "),Cl(786,"code"),qx(787,"gridColumns"),og(),qx(788,". Deve-se especificar o tamanho da tela."),og()()()(),Cl(789,"tr",13)(790,"td",14)(791,"div",15)(792,"span",16),qx(793," gridMdColumns"),Hl(794,"br"),og()()(),Cl(795,"td",17)(796,"code",47),qx(797,"number"),og()(),Cl(798,"td",20)(799,"em")(800,"strong"),qx(801,"(opcional)"),og()(),Cl(802,"p"),qx(803,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Cl(804,"p"),qx(805,"Deve ser usado o sistema de "),Cl(806,"strong"),qx(807,"grid"),og(),qx(808," do PO (1 ... 12 colunas)."),og(),Cl(809,"blockquote")(810,"p"),qx(811,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(812,"code"),qx(813,"gridColumns"),og(),qx(814,"."),og()()()(),Cl(815,"tr",13)(816,"td",14)(817,"div",15)(818,"span",16),qx(819," gridMdPull"),Hl(820,"br"),og()()(),Cl(821,"td",17)(822,"code",47),qx(823,"number"),og()(),Cl(824,"td",20)(825,"em")(826,"strong"),qx(827,"(opcional)"),og()(),Cl(828,"p"),qx(829,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),og(),Cl(830,"p"),qx(831,"Deve ser usado o sistema de "),Cl(832,"strong"),qx(833,"grid"),og(),qx(834," do PO (1 ... 11 colunas)."),og(),Cl(835,"blockquote")(836,"p"),qx(837,"Esta propriedade n\xE3o funciona com a propriedade "),Cl(838,"code"),qx(839,"gridColumns"),og(),qx(840,". Deve-se especificar o tamanho da tela."),og()()()(),Cl(841,"tr",13)(842,"td",14)(843,"div",15)(844,"span",16),qx(845," gridSmColumns"),Hl(846,"br"),og()()(),Cl(847,"td",17)(848,"code",47),qx(849,"number"),og()(),Cl(850,"td",20)(851,"em")(852,"strong"),qx(853,"(opcional)"),og()(),Cl(854,"p"),qx(855,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Cl(856,"p"),qx(857,"Deve ser usado o sistema de "),Cl(858,"strong"),qx(859,"grid"),og(),qx(860," do PO (1 ... 12 colunas)."),og(),Cl(861,"blockquote")(862,"p"),qx(863,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(864,"code"),qx(865,"gridColumns"),og(),qx(866,"."),og()()()(),Cl(867,"tr",13)(868,"td",14)(869,"div",15)(870,"span",16),qx(871," gridSmPull"),Hl(872,"br"),og()()(),Cl(873,"td",17)(874,"code",47),qx(875,"number"),og()(),Cl(876,"td",20)(877,"em")(878,"strong"),qx(879,"(opcional)"),og()(),Cl(880,"p"),qx(881,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),og(),Cl(882,"p"),qx(883,"Deve ser usado o sistema de "),Cl(884,"strong"),qx(885,"grid"),og(),qx(886," do PO (1 ... 11 colunas)."),og(),Cl(887,"blockquote")(888,"p"),qx(889,"Esta propriedade n\xE3o funciona com a propriedade "),Cl(890,"code"),qx(891,"gridColumns"),og(),qx(892,". Deve-se especificar o tamanho da tela."),og()()()(),Cl(893,"tr",13)(894,"td",14)(895,"div",15)(896,"span",16),qx(897," gridXlColumns"),Hl(898,"br"),og()()(),Cl(899,"td",17)(900,"code",47),qx(901,"number"),og()(),Cl(902,"td",20)(903,"em")(904,"strong"),qx(905,"(opcional)"),og()(),Cl(906,"p"),qx(907,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Cl(908,"p"),qx(909,"Deve ser usado o sistema de "),Cl(910,"strong"),qx(911,"grid"),og(),qx(912," do PO (1 ... 12 colunas)."),og(),Cl(913,"blockquote")(914,"p"),qx(915,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(916,"code"),qx(917,"gridColumns"),og(),qx(918,"."),og()()()(),Cl(919,"tr",13)(920,"td",14)(921,"div",15)(922,"span",16),qx(923," gridXlPull"),Hl(924,"br"),og()()(),Cl(925,"td",17)(926,"code",47),qx(927,"number"),og()(),Cl(928,"td",20)(929,"em")(930,"strong"),qx(931,"(opcional)"),og()(),Cl(932,"p"),qx(933,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),og(),Cl(934,"p"),qx(935,"Deve ser usado o sistema de "),Cl(936,"strong"),qx(937,"grid"),og(),qx(938," do PO (1 ... 11 colunas)."),og(),Cl(939,"blockquote")(940,"p"),qx(941,"Esta propriedade n\xE3o funciona com a propriedade "),Cl(942,"code"),qx(943,"gridColumns"),og(),qx(944,". Deve-se especificar o tamanho da tela."),og()()()(),Cl(945,"tr",13)(946,"td",14)(947,"div",15)(948,"span",16),qx(949," height"),Hl(950,"br"),og()()(),Cl(951,"td",17)(952,"code",18),qx(953,"string"),og()(),Cl(954,"td",20)(955,"em")(956,"strong"),qx(957,"(opcional)"),og()(),Cl(958,"p"),qx(959,"Defini o texto alternativo descrevendo a imagem."),og(),Cl(960,"p"),qx(961,"Exemplo de utiliza\xE7\xE3o:"),og(),Cl(962,"pre")(963,"code"),qx(964,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),og()(),Cl(965,"p")(966,"strong"),qx(967,"Componentes compat\xEDveis:"),og(),Cl(968,"code"),qx(969,"po-image"),og(),qx(970,"."),og()()(),Cl(971,"tr",13)(972,"td",14)(973,"div",15)(974,"span",16),qx(975," icon"),Hl(976,"br"),og()()(),Cl(977,"td",17)(978,"code",18),qx(979,"string"),og()(),Cl(980,"td",20)(981,"em")(982,"strong"),qx(983,"(opcional)"),og()(),Cl(984,"p"),qx(985,"Define um \xEDcone que ser\xE1 exibido ao lado do valor para o campo do tipo "),Cl(986,"em"),qx(987,"tag"),og(),qx(988,"."),og(),Cl(989,"blockquote")(990,"p"),qx(991,"Veja os valores v\xE1lidos na "),Cl(992,"a",48),qx(993,"biblioteca de \xEDcones"),og(),qx(994,"."),og()()()(),Cl(995,"tr",13)(996,"td",14)(997,"div",15)(998,"span",16),qx(999," image"),Hl(1e3,"br"),og()()(),Cl(1001,"td",17)(1002,"code",24),qx(1003,"boolean"),og()(),Cl(1004,"td",20)(1005,"em")(1006,"strong"),qx(1007,"(opcional)"),og()(),Cl(1008,"p"),qx(1009,"Possibilita a utiliza\xE7\xE3o de imagem."),og(),Cl(1010,"p"),qx(1011,"Exemplo de utiliza\xE7\xE3o:"),og(),Cl(1012,"pre")(1013,"code"),qx(1014,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),og()(),Cl(1015,"ul")(1016,"li"),qx(1017,"@default "),Cl(1018,"code"),qx(1019,"false"),og()()(),Cl(1020,"p")(1021,"strong"),qx(1022,"Componentes compat\xEDveis:"),og(),Cl(1023,"code"),qx(1024,"po-image"),og(),qx(1025,"."),og()()(),Cl(1026,"tr",13)(1027,"td",14)(1028,"div",15)(1029,"span",16),qx(1030," isArrayOrObject"),Hl(1031,"br"),og()()(),Cl(1032,"td",17)(1033,"code",24),qx(1034,"boolean"),og()(),Cl(1035,"td",20)(1036,"em")(1037,"strong"),qx(1038,"(opcional)"),og()(),Cl(1039,"p"),qx(1040,"Define que a propriedade "),Cl(1041,"code"),qx(1042,"property"),og(),qx(1043," \xE9 uma lista ou um objeto."),og(),Cl(1044,"blockquote")(1045,"p"),qx(1046,"Por padr\xE3o, espera-se que a lista ou o objeto esteja com as propriedades "),Cl(1047,"code"),qx(1048,"label"),og(),qx(1049," e "),Cl(1050,"code"),qx(1051,"value"),og(),qx(1052,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),Cl(1053,"code"),qx(1054,"fieldLabel"),og(),qx(1055," e "),Cl(1056,"code"),qx(1057,"fieldValue"),og(),qx(1058,`.
\xC9 ignorada caso a propriedade `),Cl(1059,"code"),qx(1060,"searchService"),og(),qx(1061," esteja sendo utilizada."),og()()()(),Cl(1062,"tr",13)(1063,"td",14)(1064,"div",15)(1065,"span",16),qx(1066," key"),Hl(1067,"br"),og()()(),Cl(1068,"td",17)(1069,"code",24),qx(1070,"boolean"),og()(),Cl(1071,"td",20)(1072,"em")(1073,"strong"),qx(1074,"(opcional)"),og()(),Cl(1075,"p"),qx(1076,"Identificador"),og()()(),Cl(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),qx(1081," label"),Hl(1082,"br"),og()()(),Cl(1083,"td",17)(1084,"code",18),qx(1085,"string"),og()(),Cl(1086,"td",20)(1087,"em")(1088,"strong"),qx(1089,"(opcional)"),og()(),Cl(1090,"p"),qx(1091,"R\xF3tulo do campo exibido."),og(),Cl(1092,"p"),qx(1093,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Cl(1094,"code"),qx(1095,"label"),og(),qx(1096," o valor da propriedade "),Cl(1097,"code"),qx(1098,"property"),og(),qx(1099," com a primeira letra em mai\xFAsculo."),og()()(),Cl(1100,"tr",13)(1101,"td",14)(1102,"div",15)(1103,"span",16),qx(1104," offsetColumns"),Hl(1105,"br"),og()()(),Cl(1106,"td",17)(1107,"code",47),qx(1108,"number"),og()(),Cl(1109,"td",20)(1110,"em")(1111,"strong"),qx(1112,"(opcional)"),og()(),Cl(1113,"p"),qx(1114,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),og(),Cl(1115,"p"),qx(1116,"Deve ser usado o sistema de "),Cl(1117,"strong"),qx(1118,"grid"),og(),qx(1119," do PO (1 ... 12 colunas)."),og(),Cl(1120,"blockquote")(1121,"p"),qx(1122,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),og()()()(),Cl(1123,"tr",13)(1124,"td",14)(1125,"div",15)(1126,"span",16),qx(1127," offsetLgColumns"),Hl(1128,"br"),og()()(),Cl(1129,"td",17)(1130,"code",47),qx(1131,"number"),og()(),Cl(1132,"td",20)(1133,"em")(1134,"strong"),qx(1135,"(opcional)"),og()(),Cl(1136,"p"),qx(1137,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Cl(1138,"p"),qx(1139,"Deve ser usado o sistema de "),Cl(1140,"strong"),qx(1141,"grid"),og(),qx(1142," do PO (1 ... 12 colunas)."),og(),Cl(1143,"blockquote")(1144,"p"),qx(1145,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(1146,"code"),qx(1147,"offsetColumns"),og(),qx(1148,"."),og()()()(),Cl(1149,"tr",13)(1150,"td",14)(1151,"div",15)(1152,"span",16),qx(1153," offsetMdColumns"),Hl(1154,"br"),og()()(),Cl(1155,"td",17)(1156,"code",47),qx(1157,"number"),og()(),Cl(1158,"td",20)(1159,"em")(1160,"strong"),qx(1161,"(opcional)"),og()(),Cl(1162,"p"),qx(1163,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Cl(1164,"p"),qx(1165,"Deve ser usado o sistema de "),Cl(1166,"strong"),qx(1167,"grid"),og(),qx(1168," do PO (1 ... 12 colunas)."),og(),Cl(1169,"blockquote")(1170,"p"),qx(1171,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(1172,"code"),qx(1173,"offsetColumns"),og(),qx(1174,"."),og()()()(),Cl(1175,"tr",13)(1176,"td",14)(1177,"div",15)(1178,"span",16),qx(1179," offsetSmColumns"),Hl(1180,"br"),og()()(),Cl(1181,"td",17)(1182,"code",47),qx(1183,"number"),og()(),Cl(1184,"td",20)(1185,"em")(1186,"strong"),qx(1187,"(opcional)"),og()(),Cl(1188,"p"),qx(1189,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Cl(1190,"p"),qx(1191,"Deve ser usado o sistema de "),Cl(1192,"strong"),qx(1193,"grid"),og(),qx(1194," do PO (1 ... 12 colunas)."),og(),Cl(1195,"blockquote")(1196,"p"),qx(1197,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(1198,"code"),qx(1199,"offsetColumns"),og(),qx(1200,"."),og()()()(),Cl(1201,"tr",13)(1202,"td",14)(1203,"div",15)(1204,"span",16),qx(1205," offsetXlColumns"),Hl(1206,"br"),og()()(),Cl(1207,"td",17)(1208,"code",47),qx(1209,"number"),og()(),Cl(1210,"td",20)(1211,"em")(1212,"strong"),qx(1213,"(opcional)"),og()(),Cl(1214,"p"),qx(1215,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Cl(1216,"p"),qx(1217,"Deve ser usado o sistema de "),Cl(1218,"strong"),qx(1219,"grid"),og(),qx(1220," do PO (1 ... 12 colunas)."),og(),Cl(1221,"blockquote")(1222,"p"),qx(1223,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(1224,"code"),qx(1225,"offsetColumns"),og(),qx(1226,"."),og()()()(),Cl(1227,"tr",13)(1228,"td",14)(1229,"div",15)(1230,"span",16),qx(1231," options"),Hl(1232,"br"),og()()(),Cl(1233,"td",17)(1234,"code",49),qx(1235,"Array<{ label: string; value: string "),og(),Cl(1236,"code",50),qx(1237,` number;
}>`),og()(),Cl(1238,"td",20)(1239,"em")(1240,"strong"),qx(1241,"(opcional)"),og()(),Cl(1242,"p"),qx(1243,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),og(),Cl(1244,"p"),qx(1245,"Exemplo de utiliza\xE7\xE3o:"),og(),Cl(1246,"pre")(1247,"code"),qx(1248,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),og()(),Cl(1249,"pre")(1250,"code"),qx(1251,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),og()()()(),Cl(1252,"tr",13)(1253,"td",14)(1254,"div",15)(1255,"span",16),qx(1256," optionsMulti"),Hl(1257,"br"),og()()(),Cl(1258,"td",17)(1259,"code",24),qx(1260,"boolean"),og()(),Cl(1261,"td",20)(1262,"em")(1263,"strong"),qx(1264,"(opcional)"),og()(),Cl(1265,"p"),qx(1266,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),og()()(),Cl(1267,"tr",13)(1268,"td",14)(1269,"div",15)(1270,"span",16),qx(1271," optionsService"),Hl(1272,"br"),og()()(),Cl(1273,"td",17)(1274,"code",18),qx(1275,"string "),og(),Cl(1276,"code",51),qx(1277," PoComboFilter "),og(),Cl(1278,"code",52),qx(1279," PoMultiselectFilter"),og()(),Cl(1280,"td",20)(1281,"em")(1282,"strong"),qx(1283,"(opcional)"),og()(),Cl(1284,"p"),qx(1285,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Cl(1286,"strong"),qx(1287,"Importante"),og()(),Cl(1288,"blockquote")(1289,"p"),qx(1290,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Cl(1291,"a",53),qx(1292,"guia de API do PO UI"),og(),qx(1293,"."),og()()()(),Cl(1294,"tr",13)(1295,"td",14)(1296,"div",15)(1297,"span",16),qx(1298," order"),Hl(1299,"br"),og()()(),Cl(1300,"td",17)(1301,"code",47),qx(1302,"number"),og()(),Cl(1303,"td",20)(1304,"em")(1305,"strong"),qx(1306,"(opcional)"),og()(),Cl(1307,"p"),qx(1308,"Informa a ordem de exibi\xE7\xE3o do campo."),og(),Cl(1309,"p"),qx(1310,"Exemplo de utiliza\xE7\xE3o:"),og(),Cl(1311,"pre")(1312,"code"),qx(1313,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),og()(),Cl(1314,"p"),qx(1315,"Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:"),og(),Cl(1316,"pre")(1317,"code"),qx(1318,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),og()(),Cl(1319,"p"),qx(1320,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),og(),Cl(1321,"p"),qx(1322,"Campos sem "),Cl(1323,"code"),qx(1324,"order"),og(),qx(1325,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),og()()(),Cl(1326,"tr",13)(1327,"td",14)(1328,"div",15)(1329,"span",16),qx(1330," params"),Hl(1331,"br"),og()()(),Cl(1332,"td",17)(1333,"code",54),qx(1334,"any"),og()(),Cl(1335,"td",20)(1336,"em")(1337,"strong"),qx(1338,"(opcional)"),og()(),Cl(1339,"p"),qx(1340,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca "),Cl(1341,"code"),qx(1342,"searchService"),og(),qx(1343," ou "),Cl(1344,"code"),qx(1345,"optionsService"),og(),qx(1346,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),og(),Cl(1347,"p"),qx(1348,"Por exemplo, para o par\xE2metro "),Cl(1349,"code"),qx(1350,"{ age: 23 }"),og(),qx(1351," a URL da requisi\xE7\xE3o ficaria:"),og(),Cl(1352,"p")(1353,"code"),qx(1354,"url + /1?age=23"),og()()()(),Cl(1355,"tr",13)(1356,"td",14)(1357,"div",15)(1358,"span",16),qx(1359," property"),Hl(1360,"br"),og()()(),Cl(1361,"td",17)(1362,"code",18),qx(1363,"string"),og()(),Cl(1364,"td",20)(1365,"p"),qx(1366,"Nome de refer\xEAncia do campo."),og()()(),Cl(1367,"tr",13)(1368,"td",14)(1369,"div",15)(1370,"span",16),qx(1371," searchService"),Hl(1372,"br"),og()()(),Cl(1373,"td",17)(1374,"code",18),qx(1375,"string "),og(),Cl(1376,"code",55),qx(1377," PoDynamicViewRequest"),og()(),Cl(1378,"td",20)(1379,"em")(1380,"strong"),qx(1381,"(opcional)"),og()(),Cl(1382,"p"),qx(1383,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),Cl(1384,"strong"),qx(1385,"Importante:"),og()(),Cl(1386,"blockquote")(1387,"p"),qx(1388,"A propriedade "),Cl(1389,"code"),qx(1390,"property"),og(),qx(1391,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Cl(1392,"a",53),qx(1393,"guia de API do PO UI"),og(),qx(1394,"."),og()()()(),Cl(1395,"tr",13)(1396,"td",14)(1397,"div",15)(1398,"span",16),qx(1399," tag"),Hl(1400,"br"),og()()(),Cl(1401,"td",17)(1402,"code",24),qx(1403,"boolean"),og()(),Cl(1404,"td",20)(1405,"em")(1406,"strong"),qx(1407,"(opcional)"),og()(),Cl(1408,"p"),qx(1409,"Indica se o campo ser\xE1 um "),Cl(1410,"code"),qx(1411,"po-tag"),og(),qx(1412,"."),og()()(),Cl(1413,"tr",13)(1414,"td",14)(1415,"div",15)(1416,"span",16),qx(1417," textColor"),Hl(1418,"br"),og()()(),Cl(1419,"td",17)(1420,"code",18),qx(1421,"string"),og()(),Cl(1422,"td",20)(1423,"em")(1424,"strong"),qx(1425,"(opcional)"),og()(),Cl(1426,"p"),qx(1427,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),og(),Cl(1428,"ul")(1429,"li"),qx(1430,"Hexadeximal, por exemplo "),Cl(1431,"code"),qx(1432,"#c64840"),og(),qx(1433,";"),og(),Cl(1434,"li"),qx(1435,"RGB, como "),Cl(1436,"code"),qx(1437,"rgb(0, 0, 165)"),og(),qx(1438,";"),og(),Cl(1439,"li"),qx(1440,"O nome da cor, por exemplo "),Cl(1441,"code"),qx(1442,"blue"),og(),qx(1443,";"),og()()()(),Cl(1444,"tr",13)(1445,"td",14)(1446,"div",15)(1447,"span",16),qx(1448," type"),Hl(1449,"br"),og()()(),Cl(1450,"td",17)(1451,"code",18),qx(1452,"string "),og(),Cl(1453,"code",56),qx(1454," PoDynamicFieldType"),og()(),Cl(1455,"td",20)(1456,"em")(1457,"strong"),qx(1458,"(opcional)"),og()(),Cl(1459,"p"),qx(1460,"Tipo do valor campo."),og(),Cl(1461,"p"),qx(1462,"Valores v\xE1lidos:"),og(),Cl(1463,"ul")(1464,"li")(1465,"code"),qx(1466,"boolean"),og(),qx(1467,": Valores "),Cl(1468,"em"),qx(1469,"booleanos"),og(),qx(1470,"."),og(),Cl(1471,"li")(1472,"code"),qx(1473,"currency"),og(),qx(1474,": Valores monet\xE1rios."),og(),Cl(1475,"li")(1476,"code"),qx(1477,"decimal"),og(),qx(1478,": Valores decimais."),og(),Cl(1479,"li")(1480,"code"),qx(1481,"date"),og(),qx(1482,": Valores de datas."),Cl(1483,"ul")(1484,"li"),qx(1485,"Aceita os tipos "),Cl(1486,"strong"),qx(1487,"string"),og(),qx(1488," e "),Cl(1489,"strong"),qx(1490,"Date"),og(),qx(1491,` padr\xE3o do Javascript,
por exemplo: `),Cl(1492,"code"),qx(1493,"'2017-11-28'"),og(),qx(1494," ou "),Cl(1495,"code"),qx(1496,"new Date(2017, 10, 28)"),og(),qx(1497,"."),og()()(),Cl(1498,"li")(1499,"code"),qx(1500,"dateTime"),og(),qx(1501,": Valor de data com hor\xE1rio."),Cl(1502,"ul")(1503,"li"),qx(1504,"Aceita o tipo "),Cl(1505,"em"),qx(1506,"string"),og(),qx(1507," no formato "),Cl(1508,"strong"),qx(1509,"ISO-8601"),og(),qx(1510," extendido "),Cl(1511,"strong"),qx(1512,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),qx(1513,`
e o tipo `),Cl(1514,"strong"),qx(1515,"Date"),og(),qx(1516," padr\xE3o do Javascript, por exemplo: "),Cl(1517,"code"),qx(1518,"'2017-11-28T00:00:00-02:00'"),og(),qx(1519," ou "),Cl(1520,"code"),qx(1521,"new Date(2017, 10, 28)"),og(),qx(1522,"."),og()()(),Cl(1523,"li")(1524,"code"),qx(1525,"number"),og(),qx(1526,": Valores num\xE9ricos."),og(),Cl(1527,"li")(1528,"code"),qx(1529,"string"),og(),qx(1530,": Textos."),og(),Cl(1531,"li")(1532,"code"),qx(1533,"time"),og(),qx(1534,": Valor do hor\xE1rio."),Cl(1535,"ul")(1536,"li"),qx(1537,"Aceita o tipo "),Cl(1538,"strong"),qx(1539,"string"),og(),qx(1540," nos formatos "),Cl(1541,"strong"),qx(1542,"'HH:mm:ss'"),og(),qx(1543," ou "),Cl(1544,"strong"),qx(1545,"'HH:mm:ss.ffffff'"),og(),qx(1546,", por exemplo: "),Cl(1547,"code"),qx(1548,"'23:12:45'"),og(),qx(1549,"."),og()()()()()(),Cl(1550,"tr",13)(1551,"td",14)(1552,"div",15)(1553,"span",16),qx(1554," visible"),Hl(1555,"br"),og()()(),Cl(1556,"td",17)(1557,"code",24),qx(1558,"boolean"),og()(),Cl(1559,"td",20)(1560,"em")(1561,"strong"),qx(1562,"(opcional)"),og()(),Cl(1563,"p"),qx(1564,"Indica se o campo ser\xE1 vis\xEDvel."),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var Q=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Dynamic View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return l.changeTab("doc")}),Hl(3,"sample-po-dynamic-view-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return l.changeTab("web")}),Hl(5,"sample-po-dynamic-view-basic-view")(6,"sample-po-dynamic-view-employee-view")(7,"sample-po-dynamic-view-employee-on-load-view")(8,"sample-po-dynamic-view-container-view"),og()()()),a&2&&(ZE("p-actions",l.actions),Lp(2),ZE("p-active",l.activeTab==="doc"),Lp(2),ZE("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"));},dependencies:[SNe,ofe,lfe,N,G,W,Z,X],encapsulation:2})}return o})();var Ee=[{path:"",component:Q}],K=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[bL.forChild(Ee),bL]})}return o})();var Ke=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe({type:o});static \u0275inj=ue({imports:[ca,K]})}return o})();export{Ke as DocPoDynamicViewModule};