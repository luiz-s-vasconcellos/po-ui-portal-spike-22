import{Br as TN,Et as V8e,Ii as ht,Kr as Un,M as ECe,Mi as gg,Ni as he,Qi as oN,Si as db,Ui as lg,Xn as Cn,Yi as mN,Yn as Ce,_r as Ml,bi as cw,br as NL,di as _n,ga as w,ia as q,ir as I,l as ar,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,ua as ue,vt as SCe,wi as f,x as A8e}from"./main-NT5YGKBQ.js";var Y=()=>({property:`name`});var $=o=>[o];var ee=()=>({name:`Jhon`});var _=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-fields`,`p-value`]],template:function(a,r){a&1&&ql(0,`po-dynamic-view`,0),a&2&&cw(`p-fields`,MN(3,$,TN(2,Y)))(`p-value`,TN(5,ee))},dependencies:[A8e],encapsulation:2,changeDetection:1})}return o})();var ie=o=>({"docs-sample-code-tabs":o});var N=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Dynamic View Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-dynamic-view-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+r.sampleCodeButtonIcon),Up(),gg(` `,r.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ie,r.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,_],encapsulation:2,changeDetection:1})}return o})();var R=(()=>{class o{fields=[{property:`name`,divider:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,divider:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`city`,label:`City`,divider:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`marriedStatus`,options:[{label:`MARRIED`,value:`1`}],label:`Marital status`,divider:`ADDITIONAL DATA`,tag:!0,color:`#C596E7`},{property:`children`,options:[{label:`yes `,value:`1`},{label:`no`,value:`2`}]},{property:`hobbies`,label:`Hobbies`,gridColumns:12,divider:`Additional Information`}];employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`São Paulo`,wage:8000.5,availability:`Available`,admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,marriedStatus:`1`,children:`1`,hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-employee`]],standalone:!1,decls:2,vars:3,consts:[[`p-title`,`Employee`],[3,`p-fields`,`p-value`,`p-text-wrap`]],template:function(a,r){a&1&&(Ml(0,`po-page-default`,0),ql(1,`po-dynamic-view`,1),lg()),a&2&&(Up(),cw(`p-fields`,r.fields)(`p-value`,r.employee)(`p-text-wrap`,!0))},dependencies:[A8e,V8e],encapsulation:2,changeDetection:1})}return o})();var ae=o=>({"docs-sample-code-tabs":o});var G=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-employee-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Dynamic View - Employee`),lg(),Ml(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-dynamic-view-employee`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+r.sampleCodeButtonIcon),Up(),gg(` `,r.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ae,r.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,R],encapsulation:2,changeDetection:1})}return o})();var O=(()=>{class o{httpClient=f(db);headers=new _n({"X-PO-No-Message":`true`});url;filterParams;getObjectByValue(l,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(q(r=>`items`in r?r.items:r))}setConfig(l,a){this.url=l,this.filterParams=a}static ɵfac=function(a){return new(a||o)};static ɵprov=I({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var J=(()=>{class o{employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`A`,wage:8000.5,availability:`Available`,cities:[{city:`São Paulo`,id:`SP`},{city:`Joinville`,id:`SC`},{city:`Belo Horizonte`,id:`MG`}],admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,profile:`admin`,image:`https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg`};fields=[{property:`name`,divider:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,divider:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`cities`,isArrayOrObject:!0,fieldLabel:`city`,fieldValue:`id`,concatLabelValue:!0},{property:`city`,label:`City`,divider:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`image`,divider:`Image`,image:!0,alt:`image`,height:`250`}];_newService=f(O);ngOnInit(){this._newService.setConfig(`https://po-sample-api.onrender.com/v1/hotels`,{id:1485976673002})}customEmployeeData(){return{value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:`name`,divider:`Personal data by load customization`,order:1},{property:`cpf`,tag:!0,color:`color-07`,order:2},{property:`rg`,tag:!0,color:`color-07`,order:3},{property:`wage`,type:`string`,tag:!0,color:`color-07`},{property:`genre`,visible:!1},{property:`job`,tag:!1},{searchService:this._newService,fieldLabel:`address_city`,property:`city`}]}}checkProfile(){if(this.employee.profile===`admin`)return`confidential`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-employee-on-load`]],standalone:!1,features:[Ce([O])],decls:2,vars:3,consts:[[`p-title`,`Employee on Load`],[3,`p-fields`,`p-load`,`p-value`]],template:function(a,r){a&1&&(Ml(0,`po-page-default`,0),ql(1,`po-dynamic-view`,1),lg()),a&2&&(Up(),cw(`p-fields`,r.fields)(`p-load`,r.customEmployeeData.bind(r))(`p-value`,r.employee))},dependencies:[A8e,V8e],encapsulation:2,changeDetection:1})}return o})();var me=o=>({"docs-sample-code-tabs":o});var W=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-employee-on-load-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Dynamic View - Employee on load`),lg(),Ml(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
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
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-dynamic-view-employee-on-load`),lg(),ql(27,`hr`)),a&2&&(Up(5),oN(`po-icon `+r.sampleCodeButtonIcon),Up(),gg(` `,r.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,me,r.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,J],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{fields=[{property:`name`,container:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,container:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`city`,label:`City`,container:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`marriedStatus`,options:[{label:`MARRIED`,value:`1`}],label:`Marital status`,container:`ADDITIONAL DATA`,tag:!0,color:`#C596E7`},{property:`children`,options:[{label:`yes `,value:`1`},{label:`no`,value:`2`}]}];employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`São Paulo`,wage:8000.5,availability:`Available`,admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,marriedStatus:`1`,children:`1`};static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-container`]],standalone:!1,decls:2,vars:2,consts:[[`p-title`,`Employee`],[3,`p-fields`,`p-value`]],template:function(a,r){a&1&&(Ml(0,`po-page-default`,0),ql(1,`po-dynamic-view`,1),lg()),a&2&&(Up(),cw(`p-fields`,r.fields)(`p-value`,r.employee))},dependencies:[A8e,V8e],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o});var Z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-container-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Dynamic View - Employee on load`),lg(),Ml(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-dynamic-view-container`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+r.sampleCodeButtonIcon),Up(),gg(` `,r.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,se,r.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,U],encapsulation:2,changeDetection:1})}return o})();var X=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-doc`]],standalone:!1,decls:1565,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicViewField[]`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`object`],[1,`docs-api-h4`,`docs-api-class-name`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`href`,`https://angular.io/api/common/CurrencyPipe`],[`href`,`https://angular.io/api/common/DatePipe`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<{`,`label:`,`string;`,`value:`,`string`],[`pan`,``,1,`docs-api-property-type`,`number;`,`}>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicViewRequest`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`]],template:function(a,r){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoDynamicModule } from '@po-ui/ng-components';`),lg()(),ql(4,`div`,2),Ml(5,`h3`,3),mN(6,`Componente`),lg(),Ml(7,`h4`,4)(8,`code`,5),mN(9,`PoDynamicViewComponent`),lg()(),Ml(10,`div`,2)(11,`p`),mN(12,`Componente para listar dados dinamicamente a partir de uma lista de objetos.`),lg(),Ml(13,`blockquote`)(14,`p`),mN(15,`Por padrão esse componente cria `),Ml(16,`code`),mN(17,`po-info`),lg(),mN(18,` para exibição, é possível criar `),Ml(19,`code`),mN(20,`po-tag`),lg(),mN(21,` passando a propriedade { tag: true }. `),lg()()(),Ml(22,`div`,6)(23,`h4`,7),mN(24,`Seletor`),lg(),Ml(25,`pre`,8),mN(26,`<po-dynamic-view
    p-components-size="string"
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),lg()(),Ml(27,`h4`,9),mN(28,`Propriedades`),lg(),Ml(29,`table`,10)(30,`tr`,11)(31,`th`,12),mN(32,`Nome`),lg(),Ml(33,`th`,12),mN(34,`Tipo`),lg(),Ml(35,`th`,12),mN(36,`Padrão`),lg(),Ml(37,`th`,12),mN(38,`Descrição`),lg()(),Ml(39,`tr`,13)(40,`td`,14)(41,`div`,15)(42,`span`,16),mN(43,` p-components-size`),ql(44,`br`),lg()()(),Ml(45,`td`,17)(46,`code`,18),mN(47,`string`),lg()(),Ml(48,`td`,19)(49,`p`)(50,`code`),mN(51,`medium`),lg()()(),Ml(52,`td`,20)(53,`em`)(54,`strong`),mN(55,`(opcional)`),lg()(),Ml(56,`p`),mN(57,`Define o tamanho dos componentes no template entre `),Ml(58,`code`),mN(59,`small`),lg(),mN(60,` ou `),Ml(61,`code`),mN(62,`medium`),lg(),mN(63,`.`),lg(),Ml(64,`blockquote`)(65,`p`),mN(66,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(67,`code`),mN(68,`medium`),lg(),mN(69,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(70,`a`,21),mN(71,`po-theme`),lg(),mN(72,`.`),lg()()()(),Ml(73,`tr`,13)(74,`td`,14)(75,`div`,15)(76,`span`,16),mN(77,` p-fields`),ql(78,`br`),lg()()(),Ml(79,`td`,17)(80,`code`,22),mN(81,`PoDynamicViewField[]`),lg()(),Ml(82,`td`,19)(83,`p`)(84,`code`),mN(85,`[]`),lg()()(),Ml(86,`td`,20)(87,`em`)(88,`strong`),mN(89,`(opcional)`),lg()(),Ml(90,`p`),mN(91,`Lista de objetos que implementam a interface `),Ml(92,`code`),mN(93,`PoDynamicView`),lg(),mN(94,`.`),lg(),Ml(95,`blockquote`)(96,`p`),mN(97,`Ex: `),Ml(98,`code`),mN(99,`[ { property: 'age' } ]`),lg()()(),Ml(100,`p`),mN(101,`Regras de tipagem e formatação dos valores exibidos:`),lg(),Ml(102,`ul`)(103,`li`),mN(104,`Caso o `),Ml(105,`em`),mN(106,`type`),lg(),mN(107,` informado seja `),Ml(108,`em`),mN(109,`currency`),lg(),mN(110,` e não seja informado o `),Ml(111,`em`),mN(112,`format`),lg(),mN(113,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),lg(),Ml(114,`li`),mN(115,`Caso o `),Ml(116,`em`),mN(117,`type`),lg(),mN(118,` informado seja `),Ml(119,`em`),mN(120,`date`),lg(),mN(121,` e não seja informado o `),Ml(122,`em`),mN(123,`format`),lg(),mN(124,` o mesmo recebe 'dd/MM/yyyy' como formato padrão.`),lg(),Ml(125,`li`),mN(126,`Caso o `),Ml(127,`em`),mN(128,`type`),lg(),mN(129,` informado seja `),Ml(130,`em`),mN(131,`dateTime`),lg(),mN(132,` e não seja informado o `),Ml(133,`em`),mN(134,`format`),lg(),mN(135,` o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padrão.`),lg(),Ml(136,`li`),mN(137,`Caso o `),Ml(138,`em`),mN(139,`type`),lg(),mN(140,` informado seja `),Ml(141,`em`),mN(142,`number`),lg(),mN(143,` e não seja informado o `),Ml(144,`em`),mN(145,`format`),lg(),mN(146,` o mesmo não será formatado.`),lg(),Ml(147,`li`),mN(148,`Caso o `),Ml(149,`em`),mN(150,`type`),lg(),mN(151,` informado seja `),Ml(152,`em`),mN(153,`time`),lg(),mN(154,` e não seja informado o `),Ml(155,`em`),mN(156,`format`),lg(),mN(157,` o mesmo recebe 'HH:mm:ss.ffffff' como formato padrão.`),lg()(),Ml(158,`blockquote`)(159,`p`),mN(160,`As propriedades informadas serão exibidas mesmo não contendo valor de referência no objeto da propriedade `),Ml(161,`code`),mN(162,`p-value`),lg(),mN(163,`.`),lg()()()(),Ml(164,`tr`,13)(165,`td`,14)(166,`div`,15)(167,`span`,16),mN(168,` p-load`),ql(169,`br`),lg()()(),Ml(170,`td`,17)(171,`code`,18),mN(172,`string `),lg(),Ml(173,`code`,23),mN(174,` Function`),lg()(),Ml(175,`td`,19),mN(176,`-`),lg(),Ml(177,`td`,20)(178,`em`)(179,`strong`),mN(180,`(opcional)`),lg()(),Ml(181,`p`),mN(182,`Possibilita executar uma função quando o componente é inicializado.`),lg(),Ml(183,`p`),mN(184,`A propriedade aceita os seguintes tipos:`),lg(),Ml(185,`ul`)(186,`li`)(187,`strong`),mN(188,`String`),lg(),mN(189,`: Endpoint usado pelo componente para requisição via `),Ml(190,`code`),mN(191,`POST`),lg(),mN(192,`.`),lg(),Ml(193,`li`)(194,`strong`),mN(195,`Function`),lg(),mN(196,`: Método que será executado na inicialização do componente.`),lg()(),Ml(197,`p`),mN(198,`Para os dois tipos de utilização da propriedade espera-se o seguinte retorno:`),lg(),Ml(199,`pre`)(200,`code`),mN(201,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),lg()(),Ml(202,`blockquote`)(203,`p`)(204,`strong`),mN(205,`value`),lg(),mN(206,`: any = atribui novo valor do model.`),lg()(),Ml(207,`blockquote`)(208,`p`)(209,`strong`),mN(210,`fields`),lg(),mN(211,`: `),Ml(212,`code`),mN(213,`Array<PoDynamicViewField>`),lg(),mN(214,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),lg()(),Ml(215,`ul`)(216,`li`),mN(217,`Para esconder/remover campos precisa informar no field a propriedade `),Ml(218,`code`),mN(219,`visible = false`),lg(),mN(220,`.`),lg()()()(),Ml(221,`tr`,13)(222,`td`,14)(223,`div`,15)(224,`span`,16),mN(225,` p-show-all-value`),ql(226,`br`),lg()()(),Ml(227,`td`,17)(228,`code`,24),mN(229,`boolean`),lg()(),Ml(230,`td`,19)(231,`p`)(232,`code`),mN(233,`false`),lg()()(),Ml(234,`td`,20)(235,`em`)(236,`strong`),mN(237,`(opcional)`),lg()(),Ml(238,`p`),mN(239,`Indica se exibirá todas as informações contidas dentro do objeto informado na propriedade `),Ml(240,`code`),mN(241,`p-value`),lg(),mN(242,`.`),lg()()(),Ml(243,`tr`,13)(244,`td`,14)(245,`div`,15)(246,`span`,16),mN(247,` p-text-wrap`),ql(248,`br`),lg()()(),Ml(249,`td`,17)(250,`code`,24),mN(251,`boolean`),lg()(),Ml(252,`td`,19)(253,`p`)(254,`code`),mN(255,`false`),lg()()(),Ml(256,`td`,20)(257,`em`)(258,`strong`),mN(259,`(opcional)`),lg()(),Ml(260,`p`),mN(261,`Permite a quebra de linha no texto do `),Ml(262,`code`),mN(263,`p-value`),lg(),mN(264,`, aplicando-a onde há `),Ml(265,`code`),mN(266,`\\n`),lg(),mN(267,`.`),lg(),Ml(268,`pre`)(269,`code`),mN(270,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),lg()(),Ml(271,`p`),mN(272,`Saída:`),lg(),Ml(273,`pre`)(274,`code`),mN(275,`Primeira linha
Segunda linha
`),lg()()()(),Ml(276,`tr`,13)(277,`td`,14)(278,`div`,15)(279,`span`,16),mN(280,` p-value`),ql(281,`br`),lg()()(),Ml(282,`td`,17)(283,`code`,25),mN(284,`object`),lg()(),Ml(285,`td`,19),mN(286,`-`),lg(),Ml(287,`td`,20)(288,`p`),mN(289,`Objeto que será utilizado para exibir as informações dinâmicas, o valor será recuperado através do atributo `),Ml(290,`em`),mN(291,`property`),lg(),mN(292,`
dos objetos contidos na propridade `),Ml(293,`code`),mN(294,`p-fields`),lg(),mN(295,`.`),lg(),Ml(296,`blockquote`)(297,`p`),mN(298,`Ex: `),Ml(299,`code`),mN(300,`{ age: '35' }`),lg()()()()()(),Ml(301,`h3`),mN(302,`Interfaces`),lg(),Ml(303,`h4`,26)(304,`code`,5),mN(305,`PoDynamicViewRequest`),lg()(),Ml(306,`div`,2)(307,`p`),mN(308,`Define o tipo de busca customizada para um campo em específico.`),lg()(),Ml(309,`h4`,9),mN(310,`Métodos`),lg(),Ml(311,`table`,27)(312,`tr`,13)(313,`th`,28)(314,`div`,15)(315,`h4`)(316,`span`,16),mN(317,` getObjectByValue `),lg()()()()(),Ml(318,`tr`,20)(319,`td`,20)(320,`p`),mN(321,`Método responsável por enviar um valor que será buscado no serviço.`),lg()()()(),Ml(322,`h5`)(323,`b`),mN(324,`Parâmetros`),lg()(),Ml(325,`table`,10)(326,`tr`,11)(327,`th`,12),mN(328,`Nome`),lg(),Ml(329,`th`,12),mN(330,`Tipo`),lg(),Ml(331,`th`,12),mN(332,`Descrição`),lg()(),Ml(333,`tr`,13)(334,`td`,14),mN(335,` value`),lg(),Ml(336,`td`,17)(337,`code`,18),mN(338,` string `),lg(),Ml(339,`code`,29),mN(340,` Array<any> `),lg()(),Ml(341,`td`,20)(342,`p`),mN(343,`Valor único a ser buscado na fonte de dados.`),lg()()(),Ml(344,`tr`,13)(345,`td`,14),mN(346,` filterParams`),lg(),Ml(347,`td`,17)(348,`code`,30),mN(349,` any `),lg()(),Ml(350,`td`,20)(351,`p`),mN(352,`Valor opcional para informar filtros customizados.`),lg()()()(),ql(353,`br`),Ml(354,`h4`,26)(355,`code`,5),mN(356,`PoDynamicViewField`),lg()(),Ml(357,`div`,2)(358,`p`),mN(359,` Interface para definição das propriedades dos campos de visualização que serão criados dinamicamente.`),lg()(),Ml(360,`h4`,9),mN(361,`Propriedades`),lg(),Ml(362,`table`,10)(363,`tr`,11)(364,`th`,12),mN(365,`Nome`),lg(),Ml(366,`th`,12),mN(367,`Tipo`),lg(),Ml(368,`th`,12),mN(369,`Descrição`),lg()(),Ml(370,`tr`,13)(371,`td`,14)(372,`div`,15)(373,`span`,16),mN(374,` alt`),ql(375,`br`),lg()()(),Ml(376,`td`,17)(377,`code`,18),mN(378,`string`),lg()(),Ml(379,`td`,20)(380,`em`)(381,`strong`),mN(382,`(opcional)`),lg()(),Ml(383,`p`),mN(384,`Defini o texto alternativo descrevendo a imagem.`),lg(),Ml(385,`p`),mN(386,`Exemplo de utilização:`),lg(),Ml(387,`pre`)(388,`code`),mN(389,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),lg()(),Ml(390,`p`)(391,`strong`),mN(392,`Componentes compatíveis:`),lg(),Ml(393,`code`),mN(394,`po-image`),lg(),mN(395,`.`),lg()()(),Ml(396,`tr`,13)(397,`td`,14)(398,`div`,15)(399,`span`,16),mN(400,` booleanFalse`),ql(401,`br`),lg()()(),Ml(402,`td`,17)(403,`code`,18),mN(404,`string`),lg()(),Ml(405,`td`,20)(406,`em`)(407,`strong`),mN(408,`(opcional)`),lg()(),Ml(409,`p`),mN(410,`Texto exibido quando o valor do componente for `),Ml(411,`em`),mN(412,`false`),lg(),mN(413,`.`),lg()()(),Ml(414,`tr`,13)(415,`td`,14)(416,`div`,15)(417,`span`,16),mN(418,` booleanTrue`),ql(419,`br`),lg()()(),Ml(420,`td`,17)(421,`code`,18),mN(422,`string`),lg()(),Ml(423,`td`,20)(424,`em`)(425,`strong`),mN(426,`(opcional)`),lg()(),Ml(427,`p`),mN(428,`Texto exibido quando o valor do componente for `),Ml(429,`em`),mN(430,`true`),lg(),mN(431,`.`),lg()()(),Ml(432,`tr`,13)(433,`td`,14)(434,`div`,15)(435,`span`,16),mN(436,` color`),ql(437,`br`),lg()()(),Ml(438,`td`,17)(439,`code`,18),mN(440,`string`),lg()(),Ml(441,`td`,20)(442,`em`)(443,`strong`),mN(444,`(opcional)`),lg()(),Ml(445,`p`),mN(446,`Determina a cor da tag. As maneiras de customizar as cores são:`),lg(),Ml(447,`ul`)(448,`li`),mN(449,`Hexadeximal, por exemplo `),Ml(450,`code`),mN(451,`#c64840`),lg(),mN(452,`;`),lg(),Ml(453,`li`),mN(454,`RGB, como `),Ml(455,`code`),mN(456,`rgb(0, 0, 165)`),lg(),mN(457,`;`),lg(),Ml(458,`li`),mN(459,`O nome da cor, por exemplo `),Ml(460,`code`),mN(461,`blue`),lg(),mN(462,`;`),lg(),Ml(463,`li`),mN(464,`Usando uma das cores do tema do PO:`),lg(),Ml(465,`li`),mN(466,`Valores válidos:`),Ml(467,`ul`)(468,`li`),ql(469,`span`,31),Ml(470,`code`),mN(471,`color-01`),lg()(),Ml(472,`li`),ql(473,`span`,32),Ml(474,`code`),mN(475,`color-02`),lg()(),Ml(476,`li`),ql(477,`span`,33),Ml(478,`code`),mN(479,`color-03`),lg()(),Ml(480,`li`),ql(481,`span`,34),Ml(482,`code`),mN(483,`color-04`),lg()(),Ml(484,`li`),ql(485,`span`,35),Ml(486,`code`),mN(487,`color-05`),lg()(),Ml(488,`li`),ql(489,`span`,36),Ml(490,`code`),mN(491,`color-06`),lg()(),Ml(492,`li`),ql(493,`span`,37),Ml(494,`code`),mN(495,`color-07`),lg()(),Ml(496,`li`),ql(497,`span`,38),Ml(498,`code`),mN(499,`color-08`),lg()(),Ml(500,`li`),ql(501,`span`,39),Ml(502,`code`),mN(503,`color-09`),lg()(),Ml(504,`li`),ql(505,`span`,40),Ml(506,`code`),mN(507,`color-10`),lg()(),Ml(508,`li`),ql(509,`span`,41),Ml(510,`code`),mN(511,`color-11`),lg()(),Ml(512,`li`),ql(513,`span`,42),Ml(514,`code`),mN(515,`color-12`),lg()()()()()()(),Ml(516,`tr`,13)(517,`td`,14)(518,`div`,15)(519,`span`,16),mN(520,` concatLabelValue`),ql(521,`br`),lg()()(),Ml(522,`td`,17)(523,`code`,24),mN(524,`boolean`),lg()(),Ml(525,`td`,20)(526,`em`)(527,`strong`),mN(528,`(opcional)`),lg()(),Ml(529,`p`),mN(530,`Permite que seja exibido em tela, de forma concatenada as propriedades `),Ml(531,`code`),mN(532,`fieldLabel`),lg(),mN(533,` + `),Ml(534,`code`),mN(535,`fieldValue`),lg(),mN(536,`.
A ordem sempre ser\xE1 `),Ml(537,`code`),mN(538,`fieldLabel`),lg(),mN(539,` e depois `),Ml(540,`code`),mN(541,`fieldValue`),lg(),mN(542,`, não sendo possível alterar.`),lg(),Ml(543,`blockquote`)(544,`p`),mN(545,`Propriedade funciona corretamente caso as propriedades `),Ml(546,`code`),mN(547,`fieldLabel`),lg(),mN(548,` e `),Ml(549,`code`),mN(550,`fielValue`),lg(),mN(551,` sejam válidas.`),lg()()()(),Ml(552,`tr`,13)(553,`td`,14)(554,`div`,15)(555,`span`,16),mN(556,` container`),ql(557,`br`),lg()()(),Ml(558,`td`,17)(559,`code`,18),mN(560,`string`),lg()(),Ml(561,`td`,20)(562,`em`)(563,`strong`),mN(564,`(opcional)`),lg()(),Ml(565,`p`),mN(566,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),lg(),Ml(567,`p`),mN(568,`Está propriedade é do tipo string, o valor que será titulo do contianer`),lg()()(),Ml(569,`tr`,13)(570,`td`,14)(571,`div`,15)(572,`span`,16),mN(573,` divider`),ql(574,`br`),lg()()(),Ml(575,`td`,17)(576,`code`,18),mN(577,`string`),lg()(),Ml(578,`td`,20)(579,`em`)(580,`strong`),mN(581,`(opcional)`),lg()(),Ml(582,`p`),mN(583,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),lg()()(),Ml(584,`tr`,13)(585,`td`,14)(586,`div`,15)(587,`span`,16),mN(588,` fieldLabel`),ql(589,`br`),lg()()(),Ml(590,`td`,17)(591,`code`,18),mN(592,`string`),lg()(),Ml(593,`td`,20)(594,`em`)(595,`strong`),mN(596,`(opcional)`),lg()(),Ml(597,`p`),mN(598,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),lg(),Ml(599,`p`),mN(600,`O valor padrão é: `),Ml(601,`code`),mN(602,`label`),lg(),mN(603,`.`),lg()()(),Ml(604,`tr`,13)(605,`td`,14)(606,`div`,15)(607,`span`,16),mN(608,` fieldValue`),ql(609,`br`),lg()()(),Ml(610,`td`,17)(611,`code`,18),mN(612,`string`),lg()(),Ml(613,`td`,20)(614,`em`)(615,`strong`),mN(616,`(opcional)`),lg()(),Ml(617,`p`),mN(618,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),lg(),Ml(619,`p`),mN(620,`O valor padrão é: `),Ml(621,`code`),mN(622,`value`),lg(),mN(623,`.`),lg()()(),Ml(624,`tr`,13)(625,`td`,14)(626,`div`,15)(627,`span`,16),mN(628,` format`),ql(629,`br`),lg()()(),Ml(630,`td`,17)(631,`code`,18),mN(632,`string `),lg(),Ml(633,`code`,43),mN(634,` Array<string>`),lg()(),Ml(635,`td`,20)(636,`em`)(637,`strong`),mN(638,`(opcional)`),lg()(),Ml(639,`p`),mN(640,`Define o formato de exibição para o valor de um campo.`),lg(),Ml(641,`ul`)(642,`li`)(643,`p`),mN(644,`Quando `),Ml(645,`code`),mN(646,`format`),lg(),mN(647,` é uma `),Ml(648,`code`),mN(649,`string`),lg(),mN(650,`, o formato aplicado depende da propriedade `),Ml(651,`strong`),mN(652,`type`),lg(),mN(653,` segue como usar cada tipo:`),lg(),Ml(654,`ul`)(655,`li`)(656,`code`),mN(657,`currency`),lg(),mN(658,`: Utiliza códigos de moeda definidos pelo `),Ml(659,`a`,44),mN(660,`CurrencyPipe`),lg(),mN(661,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),lg(),Ml(662,`li`)(663,`code`),mN(664,`date`),lg(),mN(665,`: Adota formatos de data especificados pelo `),Ml(666,`a`,45),mN(667,`DatePipe`),lg(),mN(668,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),lg(),Ml(669,`li`)(670,`code`),mN(671,`time`),lg(),mN(672,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),lg(),Ml(673,`li`)(674,`code`),mN(675,`number`),lg(),mN(676,`: Usa especificações do `),Ml(677,`a`,46),mN(678,`DecimalPipe`),lg(),mN(679,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),Ml(680,`code`),mN(681,`50`),lg(),mN(682,`, formato `),Ml(683,`code`),mN(684,`'1.2-5'`),lg(),mN(685,`, resulta em `),Ml(686,`code`),mN(687,`50.00`),lg(),mN(688,`.`),lg()()(),Ml(689,`li`)(690,`p`),mN(691,`Quando `),Ml(692,`code`),mN(693,`format`),lg(),mN(694,` é um `),Ml(695,`code`),mN(696,`Array<string>`),lg(),mN(697,`:`),lg(),Ml(698,`ul`)(699,`li`),mN(700,`Cada elemento do array representa uma propriedade do objeto.`),lg(),Ml(701,`li`),mN(702,`Os valores dessas propriedades são concatenados, separados pelo padrão ' - '.`),lg(),Ml(703,`li`),mN(704,`Exemplo: Para `),Ml(705,`code`),mN(706,`format: ["id", "name"]`),lg(),mN(707,` e um objeto `),Ml(708,`code`),mN(709,`{ id: 1, name: 'Carlos Diego' }`),lg(),mN(710,`,
o resultado ser\xE1 `),Ml(711,`code`),mN(712,`'1 - Carlos Diego'`),lg(),mN(713,`.`),lg()()()()()(),Ml(714,`tr`,13)(715,`td`,14)(716,`div`,15)(717,`span`,16),mN(718,` gridColumns`),ql(719,`br`),lg()()(),Ml(720,`td`,17)(721,`code`,47),mN(722,`number`),lg()(),Ml(723,`td`,20)(724,`em`)(725,`strong`),mN(726,`(opcional)`),lg()(),Ml(727,`p`),mN(728,`Tamanho de exibição do campo em telas.`),lg(),Ml(729,`p`),mN(730,`Deve ser usado o sistema de `),Ml(731,`strong`),mN(732,`grid`),lg(),mN(733,` do PO (1 ... 12 colunas).`),lg(),Ml(734,`blockquote`)(735,`p`),mN(736,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),lg()()()(),Ml(737,`tr`,13)(738,`td`,14)(739,`div`,15)(740,`span`,16),mN(741,` gridLgColumns`),ql(742,`br`),lg()()(),Ml(743,`td`,17)(744,`code`,47),mN(745,`number`),lg()(),Ml(746,`td`,20)(747,`em`)(748,`strong`),mN(749,`(opcional)`),lg()(),Ml(750,`p`),mN(751,`Tamanho de exibição do campo em telas grandes (lg).`),lg(),Ml(752,`p`),mN(753,`Deve ser usado o sistema de `),Ml(754,`strong`),mN(755,`grid`),lg(),mN(756,` do PO (1 ... 12 colunas).`),lg(),Ml(757,`blockquote`)(758,`p`),mN(759,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(760,`code`),mN(761,`gridColumns`),lg(),mN(762,`.`),lg()()()(),Ml(763,`tr`,13)(764,`td`,14)(765,`div`,15)(766,`span`,16),mN(767,` gridLgPull`),ql(768,`br`),lg()()(),Ml(769,`td`,17)(770,`code`,47),mN(771,`number`),lg()(),Ml(772,`td`,20)(773,`em`)(774,`strong`),mN(775,`(opcional)`),lg()(),Ml(776,`p`),mN(777,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),lg(),Ml(778,`p`),mN(779,`Deve ser usado o sistema de `),Ml(780,`strong`),mN(781,`grid`),lg(),mN(782,` do PO (1 ... 11 colunas).`),lg(),Ml(783,`blockquote`)(784,`p`),mN(785,`Esta propriedade não funciona com a propriedade `),Ml(786,`code`),mN(787,`gridColumns`),lg(),mN(788,`. Deve-se especificar o tamanho da tela.`),lg()()()(),Ml(789,`tr`,13)(790,`td`,14)(791,`div`,15)(792,`span`,16),mN(793,` gridMdColumns`),ql(794,`br`),lg()()(),Ml(795,`td`,17)(796,`code`,47),mN(797,`number`),lg()(),Ml(798,`td`,20)(799,`em`)(800,`strong`),mN(801,`(opcional)`),lg()(),Ml(802,`p`),mN(803,`Tamanho de exibição do campo em telas médias (md).`),lg(),Ml(804,`p`),mN(805,`Deve ser usado o sistema de `),Ml(806,`strong`),mN(807,`grid`),lg(),mN(808,` do PO (1 ... 12 colunas).`),lg(),Ml(809,`blockquote`)(810,`p`),mN(811,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(812,`code`),mN(813,`gridColumns`),lg(),mN(814,`.`),lg()()()(),Ml(815,`tr`,13)(816,`td`,14)(817,`div`,15)(818,`span`,16),mN(819,` gridMdPull`),ql(820,`br`),lg()()(),Ml(821,`td`,17)(822,`code`,47),mN(823,`number`),lg()(),Ml(824,`td`,20)(825,`em`)(826,`strong`),mN(827,`(opcional)`),lg()(),Ml(828,`p`),mN(829,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),lg(),Ml(830,`p`),mN(831,`Deve ser usado o sistema de `),Ml(832,`strong`),mN(833,`grid`),lg(),mN(834,` do PO (1 ... 11 colunas).`),lg(),Ml(835,`blockquote`)(836,`p`),mN(837,`Esta propriedade não funciona com a propriedade `),Ml(838,`code`),mN(839,`gridColumns`),lg(),mN(840,`. Deve-se especificar o tamanho da tela.`),lg()()()(),Ml(841,`tr`,13)(842,`td`,14)(843,`div`,15)(844,`span`,16),mN(845,` gridSmColumns`),ql(846,`br`),lg()()(),Ml(847,`td`,17)(848,`code`,47),mN(849,`number`),lg()(),Ml(850,`td`,20)(851,`em`)(852,`strong`),mN(853,`(opcional)`),lg()(),Ml(854,`p`),mN(855,`Tamanho de exibição do campo em telas menores (sm).`),lg(),Ml(856,`p`),mN(857,`Deve ser usado o sistema de `),Ml(858,`strong`),mN(859,`grid`),lg(),mN(860,` do PO (1 ... 12 colunas).`),lg(),Ml(861,`blockquote`)(862,`p`),mN(863,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(864,`code`),mN(865,`gridColumns`),lg(),mN(866,`.`),lg()()()(),Ml(867,`tr`,13)(868,`td`,14)(869,`div`,15)(870,`span`,16),mN(871,` gridSmPull`),ql(872,`br`),lg()()(),Ml(873,`td`,17)(874,`code`,47),mN(875,`number`),lg()(),Ml(876,`td`,20)(877,`em`)(878,`strong`),mN(879,`(opcional)`),lg()(),Ml(880,`p`),mN(881,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),lg(),Ml(882,`p`),mN(883,`Deve ser usado o sistema de `),Ml(884,`strong`),mN(885,`grid`),lg(),mN(886,` do PO (1 ... 11 colunas).`),lg(),Ml(887,`blockquote`)(888,`p`),mN(889,`Esta propriedade não funciona com a propriedade `),Ml(890,`code`),mN(891,`gridColumns`),lg(),mN(892,`. Deve-se especificar o tamanho da tela.`),lg()()()(),Ml(893,`tr`,13)(894,`td`,14)(895,`div`,15)(896,`span`,16),mN(897,` gridXlColumns`),ql(898,`br`),lg()()(),Ml(899,`td`,17)(900,`code`,47),mN(901,`number`),lg()(),Ml(902,`td`,20)(903,`em`)(904,`strong`),mN(905,`(opcional)`),lg()(),Ml(906,`p`),mN(907,`Tamanho de exibição do campo em telas extra grandes (xl).`),lg(),Ml(908,`p`),mN(909,`Deve ser usado o sistema de `),Ml(910,`strong`),mN(911,`grid`),lg(),mN(912,` do PO (1 ... 12 colunas).`),lg(),Ml(913,`blockquote`)(914,`p`),mN(915,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(916,`code`),mN(917,`gridColumns`),lg(),mN(918,`.`),lg()()()(),Ml(919,`tr`,13)(920,`td`,14)(921,`div`,15)(922,`span`,16),mN(923,` gridXlPull`),ql(924,`br`),lg()()(),Ml(925,`td`,17)(926,`code`,47),mN(927,`number`),lg()(),Ml(928,`td`,20)(929,`em`)(930,`strong`),mN(931,`(opcional)`),lg()(),Ml(932,`p`),mN(933,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),lg(),Ml(934,`p`),mN(935,`Deve ser usado o sistema de `),Ml(936,`strong`),mN(937,`grid`),lg(),mN(938,` do PO (1 ... 11 colunas).`),lg(),Ml(939,`blockquote`)(940,`p`),mN(941,`Esta propriedade não funciona com a propriedade `),Ml(942,`code`),mN(943,`gridColumns`),lg(),mN(944,`. Deve-se especificar o tamanho da tela.`),lg()()()(),Ml(945,`tr`,13)(946,`td`,14)(947,`div`,15)(948,`span`,16),mN(949,` height`),ql(950,`br`),lg()()(),Ml(951,`td`,17)(952,`code`,18),mN(953,`string`),lg()(),Ml(954,`td`,20)(955,`em`)(956,`strong`),mN(957,`(opcional)`),lg()(),Ml(958,`p`),mN(959,`Defini o texto alternativo descrevendo a imagem.`),lg(),Ml(960,`p`),mN(961,`Exemplo de utilização:`),lg(),Ml(962,`pre`)(963,`code`),mN(964,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),lg()(),Ml(965,`p`)(966,`strong`),mN(967,`Componentes compatíveis:`),lg(),Ml(968,`code`),mN(969,`po-image`),lg(),mN(970,`.`),lg()()(),Ml(971,`tr`,13)(972,`td`,14)(973,`div`,15)(974,`span`,16),mN(975,` icon`),ql(976,`br`),lg()()(),Ml(977,`td`,17)(978,`code`,18),mN(979,`string`),lg()(),Ml(980,`td`,20)(981,`em`)(982,`strong`),mN(983,`(opcional)`),lg()(),Ml(984,`p`),mN(985,`Define um ícone que será exibido ao lado do valor para o campo do tipo `),Ml(986,`em`),mN(987,`tag`),lg(),mN(988,`.`),lg(),Ml(989,`blockquote`)(990,`p`),mN(991,`Veja os valores válidos na `),Ml(992,`a`,48),mN(993,`biblioteca de ícones`),lg(),mN(994,`.`),lg()()()(),Ml(995,`tr`,13)(996,`td`,14)(997,`div`,15)(998,`span`,16),mN(999,` image`),ql(1e3,`br`),lg()()(),Ml(1001,`td`,17)(1002,`code`,24),mN(1003,`boolean`),lg()(),Ml(1004,`td`,20)(1005,`em`)(1006,`strong`),mN(1007,`(opcional)`),lg()(),Ml(1008,`p`),mN(1009,`Possibilita a utilização de imagem.`),lg(),Ml(1010,`p`),mN(1011,`Exemplo de utilização:`),lg(),Ml(1012,`pre`)(1013,`code`),mN(1014,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),lg()(),Ml(1015,`ul`)(1016,`li`),mN(1017,`@default `),Ml(1018,`code`),mN(1019,`false`),lg()()(),Ml(1020,`p`)(1021,`strong`),mN(1022,`Componentes compatíveis:`),lg(),Ml(1023,`code`),mN(1024,`po-image`),lg(),mN(1025,`.`),lg()()(),Ml(1026,`tr`,13)(1027,`td`,14)(1028,`div`,15)(1029,`span`,16),mN(1030,` isArrayOrObject`),ql(1031,`br`),lg()()(),Ml(1032,`td`,17)(1033,`code`,24),mN(1034,`boolean`),lg()(),Ml(1035,`td`,20)(1036,`em`)(1037,`strong`),mN(1038,`(opcional)`),lg()(),Ml(1039,`p`),mN(1040,`Define que a propriedade `),Ml(1041,`code`),mN(1042,`property`),lg(),mN(1043,` é uma lista ou um objeto.`),lg(),Ml(1044,`blockquote`)(1045,`p`),mN(1046,`Por padrão, espera-se que a lista ou o objeto esteja com as propriedades `),Ml(1047,`code`),mN(1048,`label`),lg(),mN(1049,` e `),Ml(1050,`code`),mN(1051,`value`),lg(),mN(1052,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),Ml(1053,`code`),mN(1054,`fieldLabel`),lg(),mN(1055,` e `),Ml(1056,`code`),mN(1057,`fieldValue`),lg(),mN(1058,`.
\xC9 ignorada caso a propriedade `),Ml(1059,`code`),mN(1060,`searchService`),lg(),mN(1061,` esteja sendo utilizada.`),lg()()()(),Ml(1062,`tr`,13)(1063,`td`,14)(1064,`div`,15)(1065,`span`,16),mN(1066,` key`),ql(1067,`br`),lg()()(),Ml(1068,`td`,17)(1069,`code`,24),mN(1070,`boolean`),lg()(),Ml(1071,`td`,20)(1072,`em`)(1073,`strong`),mN(1074,`(opcional)`),lg()(),Ml(1075,`p`),mN(1076,`Identificador`),lg()()(),Ml(1077,`tr`,13)(1078,`td`,14)(1079,`div`,15)(1080,`span`,16),mN(1081,` label`),ql(1082,`br`),lg()()(),Ml(1083,`td`,17)(1084,`code`,18),mN(1085,`string`),lg()(),Ml(1086,`td`,20)(1087,`em`)(1088,`strong`),mN(1089,`(opcional)`),lg()(),Ml(1090,`p`),mN(1091,`Rótulo do campo exibido.`),lg(),Ml(1092,`p`),mN(1093,`Caso não seja informado, será utilizado como `),Ml(1094,`code`),mN(1095,`label`),lg(),mN(1096,` o valor da propriedade `),Ml(1097,`code`),mN(1098,`property`),lg(),mN(1099,` com a primeira letra em maiúsculo.`),lg()()(),Ml(1100,`tr`,13)(1101,`td`,14)(1102,`div`,15)(1103,`span`,16),mN(1104,` offsetColumns`),ql(1105,`br`),lg()()(),Ml(1106,`td`,17)(1107,`code`,47),mN(1108,`number`),lg()(),Ml(1109,`td`,20)(1110,`em`)(1111,`strong`),mN(1112,`(opcional)`),lg()(),Ml(1113,`p`),mN(1114,`Tamanho do espaço de exibição do campo em telas.`),lg(),Ml(1115,`p`),mN(1116,`Deve ser usado o sistema de `),Ml(1117,`strong`),mN(1118,`grid`),lg(),mN(1119,` do PO (1 ... 12 colunas).`),lg(),Ml(1120,`blockquote`)(1121,`p`),mN(1122,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),lg()()()(),Ml(1123,`tr`,13)(1124,`td`,14)(1125,`div`,15)(1126,`span`,16),mN(1127,` offsetLgColumns`),ql(1128,`br`),lg()()(),Ml(1129,`td`,17)(1130,`code`,47),mN(1131,`number`),lg()(),Ml(1132,`td`,20)(1133,`em`)(1134,`strong`),mN(1135,`(opcional)`),lg()(),Ml(1136,`p`),mN(1137,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),lg(),Ml(1138,`p`),mN(1139,`Deve ser usado o sistema de `),Ml(1140,`strong`),mN(1141,`grid`),lg(),mN(1142,` do PO (1 ... 12 colunas).`),lg(),Ml(1143,`blockquote`)(1144,`p`),mN(1145,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(1146,`code`),mN(1147,`offsetColumns`),lg(),mN(1148,`.`),lg()()()(),Ml(1149,`tr`,13)(1150,`td`,14)(1151,`div`,15)(1152,`span`,16),mN(1153,` offsetMdColumns`),ql(1154,`br`),lg()()(),Ml(1155,`td`,17)(1156,`code`,47),mN(1157,`number`),lg()(),Ml(1158,`td`,20)(1159,`em`)(1160,`strong`),mN(1161,`(opcional)`),lg()(),Ml(1162,`p`),mN(1163,`Tamanho do espaço de exibição do campo em telas médias (md).`),lg(),Ml(1164,`p`),mN(1165,`Deve ser usado o sistema de `),Ml(1166,`strong`),mN(1167,`grid`),lg(),mN(1168,` do PO (1 ... 12 colunas).`),lg(),Ml(1169,`blockquote`)(1170,`p`),mN(1171,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(1172,`code`),mN(1173,`offsetColumns`),lg(),mN(1174,`.`),lg()()()(),Ml(1175,`tr`,13)(1176,`td`,14)(1177,`div`,15)(1178,`span`,16),mN(1179,` offsetSmColumns`),ql(1180,`br`),lg()()(),Ml(1181,`td`,17)(1182,`code`,47),mN(1183,`number`),lg()(),Ml(1184,`td`,20)(1185,`em`)(1186,`strong`),mN(1187,`(opcional)`),lg()(),Ml(1188,`p`),mN(1189,`Tamanho do espaço de exibição do campo em telas menores (sm).`),lg(),Ml(1190,`p`),mN(1191,`Deve ser usado o sistema de `),Ml(1192,`strong`),mN(1193,`grid`),lg(),mN(1194,` do PO (1 ... 12 colunas).`),lg(),Ml(1195,`blockquote`)(1196,`p`),mN(1197,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(1198,`code`),mN(1199,`offsetColumns`),lg(),mN(1200,`.`),lg()()()(),Ml(1201,`tr`,13)(1202,`td`,14)(1203,`div`,15)(1204,`span`,16),mN(1205,` offsetXlColumns`),ql(1206,`br`),lg()()(),Ml(1207,`td`,17)(1208,`code`,47),mN(1209,`number`),lg()(),Ml(1210,`td`,20)(1211,`em`)(1212,`strong`),mN(1213,`(opcional)`),lg()(),Ml(1214,`p`),mN(1215,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),lg(),Ml(1216,`p`),mN(1217,`Deve ser usado o sistema de `),Ml(1218,`strong`),mN(1219,`grid`),lg(),mN(1220,` do PO (1 ... 12 colunas).`),lg(),Ml(1221,`blockquote`)(1222,`p`),mN(1223,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(1224,`code`),mN(1225,`offsetColumns`),lg(),mN(1226,`.`),lg()()()(),Ml(1227,`tr`,13)(1228,`td`,14)(1229,`div`,15)(1230,`span`,16),mN(1231,` options`),ql(1232,`br`),lg()()(),Ml(1233,`td`,17)(1234,`code`,49),mN(1235,`Array<{ label: string; value: string `),lg(),Ml(1236,`code`,50),mN(1237,` number;
}>`),lg()(),Ml(1238,`td`,20)(1239,`em`)(1240,`strong`),mN(1241,`(opcional)`),lg()(),Ml(1242,`p`),mN(1243,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),lg(),Ml(1244,`p`),mN(1245,`Exemplo de utilização:`),lg(),Ml(1246,`pre`)(1247,`code`),mN(1248,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),lg()(),Ml(1249,`pre`)(1250,`code`),mN(1251,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),lg()()()(),Ml(1252,`tr`,13)(1253,`td`,14)(1254,`div`,15)(1255,`span`,16),mN(1256,` optionsMulti`),ql(1257,`br`),lg()()(),Ml(1258,`td`,17)(1259,`code`,24),mN(1260,`boolean`),lg()(),Ml(1261,`td`,20)(1262,`em`)(1263,`strong`),mN(1264,`(opcional)`),lg()(),Ml(1265,`p`),mN(1266,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),lg()()(),Ml(1267,`tr`,13)(1268,`td`,14)(1269,`div`,15)(1270,`span`,16),mN(1271,` optionsService`),ql(1272,`br`),lg()()(),Ml(1273,`td`,17)(1274,`code`,18),mN(1275,`string `),lg(),Ml(1276,`code`,51),mN(1277,` PoComboFilter `),lg(),Ml(1278,`code`,52),mN(1279,` PoMultiselectFilter`),lg()(),Ml(1280,`td`,20)(1281,`em`)(1282,`strong`),mN(1283,`(opcional)`),lg()(),Ml(1284,`p`),mN(1285,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Ml(1286,`strong`),mN(1287,`Importante`),lg()(),Ml(1288,`blockquote`)(1289,`p`),mN(1290,`Para que funcione corretamente, é importante que o serviço siga o `),Ml(1291,`a`,53),mN(1292,`guia de API do PO UI`),lg(),mN(1293,`.`),lg()()()(),Ml(1294,`tr`,13)(1295,`td`,14)(1296,`div`,15)(1297,`span`,16),mN(1298,` order`),ql(1299,`br`),lg()()(),Ml(1300,`td`,17)(1301,`code`,47),mN(1302,`number`),lg()(),Ml(1303,`td`,20)(1304,`em`)(1305,`strong`),mN(1306,`(opcional)`),lg()(),Ml(1307,`p`),mN(1308,`Informa a ordem de exibição do campo.`),lg(),Ml(1309,`p`),mN(1310,`Exemplo de utilização:`),lg(),Ml(1311,`pre`)(1312,`code`),mN(1313,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),lg()(),Ml(1314,`p`),mN(1315,`Na exibição a ordem ficará dessa forma:`),lg(),Ml(1316,`pre`)(1317,`code`),mN(1318,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),lg()(),Ml(1319,`p`),mN(1320,`Só serão aceitos valores com números inteiros maiores do que zero.`),lg(),Ml(1321,`p`),mN(1322,`Campos sem `),Ml(1323,`code`),mN(1324,`order`),lg(),mN(1325,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),lg()()(),Ml(1326,`tr`,13)(1327,`td`,14)(1328,`div`,15)(1329,`span`,16),mN(1330,` params`),ql(1331,`br`),lg()()(),Ml(1332,`td`,17)(1333,`code`,54),mN(1334,`any`),lg()(),Ml(1335,`td`,20)(1336,`em`)(1337,`strong`),mN(1338,`(opcional)`),lg()(),Ml(1339,`p`),mN(1340,`Objeto que será enviado como parâmetro nas requisições de busca `),Ml(1341,`code`),mN(1342,`searchService`),lg(),mN(1343,` ou `),Ml(1344,`code`),mN(1345,`optionsService`),lg(),mN(1346,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),lg(),Ml(1347,`p`),mN(1348,`Por exemplo, para o parâmetro `),Ml(1349,`code`),mN(1350,`{ age: 23 }`),lg(),mN(1351,` a URL da requisição ficaria:`),lg(),Ml(1352,`p`)(1353,`code`),mN(1354,`url + /1?age=23`),lg()()()(),Ml(1355,`tr`,13)(1356,`td`,14)(1357,`div`,15)(1358,`span`,16),mN(1359,` property`),ql(1360,`br`),lg()()(),Ml(1361,`td`,17)(1362,`code`,18),mN(1363,`string`),lg()(),Ml(1364,`td`,20)(1365,`p`),mN(1366,`Nome de referência do campo.`),lg()()(),Ml(1367,`tr`,13)(1368,`td`,14)(1369,`div`,15)(1370,`span`,16),mN(1371,` searchService`),ql(1372,`br`),lg()()(),Ml(1373,`td`,17)(1374,`code`,18),mN(1375,`string `),lg(),Ml(1376,`code`,55),mN(1377,` PoDynamicViewRequest`),lg()(),Ml(1378,`td`,20)(1379,`em`)(1380,`strong`),mN(1381,`(opcional)`),lg()(),Ml(1382,`p`),mN(1383,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),Ml(1384,`strong`),mN(1385,`Importante:`),lg()(),Ml(1386,`blockquote`)(1387,`p`),mN(1388,`A propriedade `),Ml(1389,`code`),mN(1390,`property`),lg(),mN(1391,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Ml(1392,`a`,53),mN(1393,`guia de API do PO UI`),lg(),mN(1394,`.`),lg()()()(),Ml(1395,`tr`,13)(1396,`td`,14)(1397,`div`,15)(1398,`span`,16),mN(1399,` tag`),ql(1400,`br`),lg()()(),Ml(1401,`td`,17)(1402,`code`,24),mN(1403,`boolean`),lg()(),Ml(1404,`td`,20)(1405,`em`)(1406,`strong`),mN(1407,`(opcional)`),lg()(),Ml(1408,`p`),mN(1409,`Indica se o campo será um `),Ml(1410,`code`),mN(1411,`po-tag`),lg(),mN(1412,`.`),lg()()(),Ml(1413,`tr`,13)(1414,`td`,14)(1415,`div`,15)(1416,`span`,16),mN(1417,` textColor`),ql(1418,`br`),lg()()(),Ml(1419,`td`,17)(1420,`code`,18),mN(1421,`string`),lg()(),Ml(1422,`td`,20)(1423,`em`)(1424,`strong`),mN(1425,`(opcional)`),lg()(),Ml(1426,`p`),mN(1427,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),lg(),Ml(1428,`ul`)(1429,`li`),mN(1430,`Hexadeximal, por exemplo `),Ml(1431,`code`),mN(1432,`#c64840`),lg(),mN(1433,`;`),lg(),Ml(1434,`li`),mN(1435,`RGB, como `),Ml(1436,`code`),mN(1437,`rgb(0, 0, 165)`),lg(),mN(1438,`;`),lg(),Ml(1439,`li`),mN(1440,`O nome da cor, por exemplo `),Ml(1441,`code`),mN(1442,`blue`),lg(),mN(1443,`;`),lg()()()(),Ml(1444,`tr`,13)(1445,`td`,14)(1446,`div`,15)(1447,`span`,16),mN(1448,` type`),ql(1449,`br`),lg()()(),Ml(1450,`td`,17)(1451,`code`,18),mN(1452,`string `),lg(),Ml(1453,`code`,56),mN(1454,` PoDynamicFieldType`),lg()(),Ml(1455,`td`,20)(1456,`em`)(1457,`strong`),mN(1458,`(opcional)`),lg()(),Ml(1459,`p`),mN(1460,`Tipo do valor campo.`),lg(),Ml(1461,`p`),mN(1462,`Valores válidos:`),lg(),Ml(1463,`ul`)(1464,`li`)(1465,`code`),mN(1466,`boolean`),lg(),mN(1467,`: Valores `),Ml(1468,`em`),mN(1469,`booleanos`),lg(),mN(1470,`.`),lg(),Ml(1471,`li`)(1472,`code`),mN(1473,`currency`),lg(),mN(1474,`: Valores monetários.`),lg(),Ml(1475,`li`)(1476,`code`),mN(1477,`decimal`),lg(),mN(1478,`: Valores decimais.`),lg(),Ml(1479,`li`)(1480,`code`),mN(1481,`date`),lg(),mN(1482,`: Valores de datas.`),Ml(1483,`ul`)(1484,`li`),mN(1485,`Aceita os tipos `),Ml(1486,`strong`),mN(1487,`string`),lg(),mN(1488,` e `),Ml(1489,`strong`),mN(1490,`Date`),lg(),mN(1491,` padr\xE3o do Javascript,
por exemplo: `),Ml(1492,`code`),mN(1493,`'2017-11-28'`),lg(),mN(1494,` ou `),Ml(1495,`code`),mN(1496,`new Date(2017, 10, 28)`),lg(),mN(1497,`.`),lg()()(),Ml(1498,`li`)(1499,`code`),mN(1500,`dateTime`),lg(),mN(1501,`: Valor de data com horário.`),Ml(1502,`ul`)(1503,`li`),mN(1504,`Aceita o tipo `),Ml(1505,`em`),mN(1506,`string`),lg(),mN(1507,` no formato `),Ml(1508,`strong`),mN(1509,`ISO-8601`),lg(),mN(1510,` extendido `),Ml(1511,`strong`),mN(1512,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),lg(),mN(1513,`
e o tipo `),Ml(1514,`strong`),mN(1515,`Date`),lg(),mN(1516,` padrão do Javascript, por exemplo: `),Ml(1517,`code`),mN(1518,`'2017-11-28T00:00:00-02:00'`),lg(),mN(1519,` ou `),Ml(1520,`code`),mN(1521,`new Date(2017, 10, 28)`),lg(),mN(1522,`.`),lg()()(),Ml(1523,`li`)(1524,`code`),mN(1525,`number`),lg(),mN(1526,`: Valores numéricos.`),lg(),Ml(1527,`li`)(1528,`code`),mN(1529,`string`),lg(),mN(1530,`: Textos.`),lg(),Ml(1531,`li`)(1532,`code`),mN(1533,`time`),lg(),mN(1534,`: Valor do horário.`),Ml(1535,`ul`)(1536,`li`),mN(1537,`Aceita o tipo `),Ml(1538,`strong`),mN(1539,`string`),lg(),mN(1540,` nos formatos `),Ml(1541,`strong`),mN(1542,`'HH:mm:ss'`),lg(),mN(1543,` ou `),Ml(1544,`strong`),mN(1545,`'HH:mm:ss.ffffff'`),lg(),mN(1546,`, por exemplo: `),Ml(1547,`code`),mN(1548,`'23:12:45'`),lg(),mN(1549,`.`),lg()()()()()(),Ml(1550,`tr`,13)(1551,`td`,14)(1552,`div`,15)(1553,`span`,16),mN(1554,` visible`),ql(1555,`br`),lg()()(),Ml(1556,`td`,17)(1557,`code`,24),mN(1558,`boolean`),lg()(),Ml(1559,`td`,20)(1560,`em`)(1561,`strong`),mN(1562,`(opcional)`),lg()(),Ml(1563,`p`),mN(1564,`Indica se o campo será visível.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ee=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Dynamic View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,r){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return r.changeTab(`doc`)}),ql(3,`sample-po-dynamic-view-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return r.changeTab(`web`)}),ql(5,`sample-po-dynamic-view-basic-view`)(6,`sample-po-dynamic-view-employee-view`)(7,`sample-po-dynamic-view-employee-on-load-view`)(8,`sample-po-dynamic-view-container-view`),lg()()()),a&2&&(cw(`p-actions`,r.actions),Up(2),cw(`p-active`,r.activeTab===`doc`),Up(2),cw(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[V8e,SCe,ECe,N,G,W,Z,X],encapsulation:2,changeDetection:1})}return o})()}];var K=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[NL.forChild(Ee),NL]})}return o})();var Ke=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,K]})}return o})();export{Ke as DocPoDynamicViewModule};