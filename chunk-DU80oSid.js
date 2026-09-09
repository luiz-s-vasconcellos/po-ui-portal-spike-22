import{$i as q,An as y8e,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,Hr as Tl,Ii as hg,Jn as Ce,Li as ht,Nr as PO,Qn as DN,Qr as Xx,Xi as nw,Xr as Xn,Yn as Cn,Zi as ob,ai as _N,dr as I,fi as ag,gi as bL,l as ar,lr as Gl,oi as _n,on as mCe,pa as w,r as Ga,sa as ue,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var Y=()=>({property:`name`});var $=o=>[o];var ee=()=>({name:`Jhon`});var _=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-fields`,`p-value`]],template:function(a,r){a&1&&Gl(0,`po-dynamic-view`,0),a&2&&nw(`p-fields`,DN(3,$,_N(2,Y)))(`p-value`,_N(5,ee))},dependencies:[y8e],encapsulation:2,changeDetection:1})}return o})();var ie=o=>({"docs-sample-code-tabs":o});var N=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Dynamic View Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-dynamic-view-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+r.sampleCodeButtonIcon),jp(),hg(` `,r.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ie,r.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,_],encapsulation:2,changeDetection:1})}return o})();var R=(()=>{class o{fields=[{property:`name`,divider:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,divider:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`city`,label:`City`,divider:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`marriedStatus`,options:[{label:`MARRIED`,value:`1`}],label:`Marital status`,divider:`ADDITIONAL DATA`,tag:!0,color:`#C596E7`},{property:`children`,options:[{label:`yes `,value:`1`},{label:`no`,value:`2`}]},{property:`hobbies`,label:`Hobbies`,gridColumns:12,divider:`Additional Information`}];employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`São Paulo`,wage:8000.5,availability:`Available`,admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,marriedStatus:`1`,children:`1`,hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-employee`]],standalone:!1,decls:2,vars:3,consts:[[`p-title`,`Employee`],[3,`p-fields`,`p-value`,`p-text-wrap`]],template:function(a,r){a&1&&(Tl(0,`po-page-default`,0),Gl(1,`po-dynamic-view`,1),ag()),a&2&&(jp(),nw(`p-fields`,r.fields)(`p-value`,r.employee)(`p-text-wrap`,!0))},dependencies:[y8e,S8e],encapsulation:2,changeDetection:1})}return o})();var ae=o=>({"docs-sample-code-tabs":o});var G=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-employee-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Dynamic View - Employee`),ag(),Tl(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-dynamic-view-employee`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+r.sampleCodeButtonIcon),jp(),hg(` `,r.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ae,r.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,R],encapsulation:2,changeDetection:1})}return o})();var O=(()=>{class o{httpClient=f(ob);headers=new _n({"X-PO-No-Message":`true`});url;filterParams;getObjectByValue(l,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(q(r=>`items`in r?r.items:r))}setConfig(l,a){this.url=l,this.filterParams=a}static ɵfac=function(a){return new(a||o)};static ɵprov=I({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var J=(()=>{class o{employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`A`,wage:8000.5,availability:`Available`,cities:[{city:`São Paulo`,id:`SP`},{city:`Joinville`,id:`SC`},{city:`Belo Horizonte`,id:`MG`}],admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,profile:`admin`,image:`https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg`};fields=[{property:`name`,divider:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,divider:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`cities`,isArrayOrObject:!0,fieldLabel:`city`,fieldValue:`id`,concatLabelValue:!0},{property:`city`,label:`City`,divider:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`image`,divider:`Image`,image:!0,alt:`image`,height:`250`}];_newService=f(O);ngOnInit(){this._newService.setConfig(`https://po-sample-api.onrender.com/v1/hotels`,{id:1485976673002})}customEmployeeData(){return{value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:`name`,divider:`Personal data by load customization`,order:1},{property:`cpf`,tag:!0,color:`color-07`,order:2},{property:`rg`,tag:!0,color:`color-07`,order:3},{property:`wage`,type:`string`,tag:!0,color:`color-07`},{property:`genre`,visible:!1},{property:`job`,tag:!1},{searchService:this._newService,fieldLabel:`address_city`,property:`city`}]}}checkProfile(){if(this.employee.profile===`admin`)return`confidential`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-employee-on-load`]],standalone:!1,features:[Ce([O])],decls:2,vars:3,consts:[[`p-title`,`Employee on Load`],[3,`p-fields`,`p-load`,`p-value`]],template:function(a,r){a&1&&(Tl(0,`po-page-default`,0),Gl(1,`po-dynamic-view`,1),ag()),a&2&&(jp(),nw(`p-fields`,r.fields)(`p-load`,r.customEmployeeData.bind(r))(`p-value`,r.employee))},dependencies:[y8e,S8e],encapsulation:2,changeDetection:1})}return o})();var me=o=>({"docs-sample-code-tabs":o});var W=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-employee-on-load-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Dynamic View - Employee on load`),ag(),Tl(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-dynamic-view-employee-on-load`),ag(),Gl(27,`hr`)),a&2&&(jp(5),Xx(`po-icon `+r.sampleCodeButtonIcon),jp(),hg(` `,r.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,me,r.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,J],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{fields=[{property:`name`,container:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,container:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`city`,label:`City`,container:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`marriedStatus`,options:[{label:`MARRIED`,value:`1`}],label:`Marital status`,container:`ADDITIONAL DATA`,tag:!0,color:`#C596E7`},{property:`children`,options:[{label:`yes `,value:`1`},{label:`no`,value:`2`}]}];employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`São Paulo`,wage:8000.5,availability:`Available`,admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,marriedStatus:`1`,children:`1`};static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-container`]],standalone:!1,decls:2,vars:2,consts:[[`p-title`,`Employee`],[3,`p-fields`,`p-value`]],template:function(a,r){a&1&&(Tl(0,`po-page-default`,0),Gl(1,`po-dynamic-view`,1),ag()),a&2&&(jp(),nw(`p-fields`,r.fields)(`p-value`,r.employee))},dependencies:[y8e,S8e],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o});var Z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-container-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Dynamic View - Employee on load`),ag(),Tl(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-dynamic-view-container`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+r.sampleCodeButtonIcon),jp(),hg(` `,r.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,se,r.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,U],encapsulation:2,changeDetection:1})}return o})();var X=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-view-doc`]],standalone:!1,decls:1565,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicViewField[]`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`object`],[1,`docs-api-h4`,`docs-api-class-name`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`href`,`https://angular.io/api/common/CurrencyPipe`],[`href`,`https://angular.io/api/common/DatePipe`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<{`,`label:`,`string;`,`value:`,`string`],[`pan`,``,1,`docs-api-property-type`,`number;`,`}>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicViewRequest`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`]],template:function(a,r){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoDynamicModule } from '@po-ui/ng-components';`),ag()(),Gl(4,`div`,2),Tl(5,`h3`,3),cN(6,`Componente`),ag(),Tl(7,`h4`,4)(8,`code`,5),cN(9,`PoDynamicViewComponent`),ag()(),Tl(10,`div`,2)(11,`p`),cN(12,`Componente para listar dados dinamicamente a partir de uma lista de objetos.`),ag(),Tl(13,`blockquote`)(14,`p`),cN(15,`Por padrão esse componente cria `),Tl(16,`code`),cN(17,`po-info`),ag(),cN(18,` para exibição, é possível criar `),Tl(19,`code`),cN(20,`po-tag`),ag(),cN(21,` passando a propriedade { tag: true }. `),ag()()(),Tl(22,`div`,6)(23,`h4`,7),cN(24,`Seletor`),ag(),Tl(25,`pre`,8),cN(26,`<po-dynamic-view
    p-components-size="string"
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),ag()(),Tl(27,`h4`,9),cN(28,`Propriedades`),ag(),Tl(29,`table`,10)(30,`tr`,11)(31,`th`,12),cN(32,`Nome`),ag(),Tl(33,`th`,12),cN(34,`Tipo`),ag(),Tl(35,`th`,12),cN(36,`Padrão`),ag(),Tl(37,`th`,12),cN(38,`Descrição`),ag()(),Tl(39,`tr`,13)(40,`td`,14)(41,`div`,15)(42,`span`,16),cN(43,` p-components-size`),Gl(44,`br`),ag()()(),Tl(45,`td`,17)(46,`code`,18),cN(47,`string`),ag()(),Tl(48,`td`,19)(49,`p`)(50,`code`),cN(51,`medium`),ag()()(),Tl(52,`td`,20)(53,`em`)(54,`strong`),cN(55,`(opcional)`),ag()(),Tl(56,`p`),cN(57,`Define o tamanho dos componentes no template entre `),Tl(58,`code`),cN(59,`small`),ag(),cN(60,` ou `),Tl(61,`code`),cN(62,`medium`),ag(),cN(63,`.`),ag(),Tl(64,`blockquote`)(65,`p`),cN(66,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(67,`code`),cN(68,`medium`),ag(),cN(69,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(70,`a`,21),cN(71,`po-theme`),ag(),cN(72,`.`),ag()()()(),Tl(73,`tr`,13)(74,`td`,14)(75,`div`,15)(76,`span`,16),cN(77,` p-fields`),Gl(78,`br`),ag()()(),Tl(79,`td`,17)(80,`code`,22),cN(81,`PoDynamicViewField[]`),ag()(),Tl(82,`td`,19)(83,`p`)(84,`code`),cN(85,`[]`),ag()()(),Tl(86,`td`,20)(87,`em`)(88,`strong`),cN(89,`(opcional)`),ag()(),Tl(90,`p`),cN(91,`Lista de objetos que implementam a interface `),Tl(92,`code`),cN(93,`PoDynamicView`),ag(),cN(94,`.`),ag(),Tl(95,`blockquote`)(96,`p`),cN(97,`Ex: `),Tl(98,`code`),cN(99,`[ { property: 'age' } ]`),ag()()(),Tl(100,`p`),cN(101,`Regras de tipagem e formatação dos valores exibidos:`),ag(),Tl(102,`ul`)(103,`li`),cN(104,`Caso o `),Tl(105,`em`),cN(106,`type`),ag(),cN(107,` informado seja `),Tl(108,`em`),cN(109,`currency`),ag(),cN(110,` e não seja informado o `),Tl(111,`em`),cN(112,`format`),ag(),cN(113,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),ag(),Tl(114,`li`),cN(115,`Caso o `),Tl(116,`em`),cN(117,`type`),ag(),cN(118,` informado seja `),Tl(119,`em`),cN(120,`date`),ag(),cN(121,` e não seja informado o `),Tl(122,`em`),cN(123,`format`),ag(),cN(124,` o mesmo recebe 'dd/MM/yyyy' como formato padrão.`),ag(),Tl(125,`li`),cN(126,`Caso o `),Tl(127,`em`),cN(128,`type`),ag(),cN(129,` informado seja `),Tl(130,`em`),cN(131,`dateTime`),ag(),cN(132,` e não seja informado o `),Tl(133,`em`),cN(134,`format`),ag(),cN(135,` o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padrão.`),ag(),Tl(136,`li`),cN(137,`Caso o `),Tl(138,`em`),cN(139,`type`),ag(),cN(140,` informado seja `),Tl(141,`em`),cN(142,`number`),ag(),cN(143,` e não seja informado o `),Tl(144,`em`),cN(145,`format`),ag(),cN(146,` o mesmo não será formatado.`),ag(),Tl(147,`li`),cN(148,`Caso o `),Tl(149,`em`),cN(150,`type`),ag(),cN(151,` informado seja `),Tl(152,`em`),cN(153,`time`),ag(),cN(154,` e não seja informado o `),Tl(155,`em`),cN(156,`format`),ag(),cN(157,` o mesmo recebe 'HH:mm:ss.ffffff' como formato padrão.`),ag()(),Tl(158,`blockquote`)(159,`p`),cN(160,`As propriedades informadas serão exibidas mesmo não contendo valor de referência no objeto da propriedade `),Tl(161,`code`),cN(162,`p-value`),ag(),cN(163,`.`),ag()()()(),Tl(164,`tr`,13)(165,`td`,14)(166,`div`,15)(167,`span`,16),cN(168,` p-load`),Gl(169,`br`),ag()()(),Tl(170,`td`,17)(171,`code`,18),cN(172,`string `),ag(),Tl(173,`code`,23),cN(174,` Function`),ag()(),Tl(175,`td`,19),cN(176,`-`),ag(),Tl(177,`td`,20)(178,`em`)(179,`strong`),cN(180,`(opcional)`),ag()(),Tl(181,`p`),cN(182,`Possibilita executar uma função quando o componente é inicializado.`),ag(),Tl(183,`p`),cN(184,`A propriedade aceita os seguintes tipos:`),ag(),Tl(185,`ul`)(186,`li`)(187,`strong`),cN(188,`String`),ag(),cN(189,`: Endpoint usado pelo componente para requisição via `),Tl(190,`code`),cN(191,`POST`),ag(),cN(192,`.`),ag(),Tl(193,`li`)(194,`strong`),cN(195,`Function`),ag(),cN(196,`: Método que será executado na inicialização do componente.`),ag()(),Tl(197,`p`),cN(198,`Para os dois tipos de utilização da propriedade espera-se o seguinte retorno:`),ag(),Tl(199,`pre`)(200,`code`),cN(201,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),ag()(),Tl(202,`blockquote`)(203,`p`)(204,`strong`),cN(205,`value`),ag(),cN(206,`: any = atribui novo valor do model.`),ag()(),Tl(207,`blockquote`)(208,`p`)(209,`strong`),cN(210,`fields`),ag(),cN(211,`: `),Tl(212,`code`),cN(213,`Array<PoDynamicViewField>`),ag(),cN(214,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),ag()(),Tl(215,`ul`)(216,`li`),cN(217,`Para esconder/remover campos precisa informar no field a propriedade `),Tl(218,`code`),cN(219,`visible = false`),ag(),cN(220,`.`),ag()()()(),Tl(221,`tr`,13)(222,`td`,14)(223,`div`,15)(224,`span`,16),cN(225,` p-show-all-value`),Gl(226,`br`),ag()()(),Tl(227,`td`,17)(228,`code`,24),cN(229,`boolean`),ag()(),Tl(230,`td`,19)(231,`p`)(232,`code`),cN(233,`false`),ag()()(),Tl(234,`td`,20)(235,`em`)(236,`strong`),cN(237,`(opcional)`),ag()(),Tl(238,`p`),cN(239,`Indica se exibirá todas as informações contidas dentro do objeto informado na propriedade `),Tl(240,`code`),cN(241,`p-value`),ag(),cN(242,`.`),ag()()(),Tl(243,`tr`,13)(244,`td`,14)(245,`div`,15)(246,`span`,16),cN(247,` p-text-wrap`),Gl(248,`br`),ag()()(),Tl(249,`td`,17)(250,`code`,24),cN(251,`boolean`),ag()(),Tl(252,`td`,19)(253,`p`)(254,`code`),cN(255,`false`),ag()()(),Tl(256,`td`,20)(257,`em`)(258,`strong`),cN(259,`(opcional)`),ag()(),Tl(260,`p`),cN(261,`Permite a quebra de linha no texto do `),Tl(262,`code`),cN(263,`p-value`),ag(),cN(264,`, aplicando-a onde há `),Tl(265,`code`),cN(266,`\\n`),ag(),cN(267,`.`),ag(),Tl(268,`pre`)(269,`code`),cN(270,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),ag()(),Tl(271,`p`),cN(272,`Saída:`),ag(),Tl(273,`pre`)(274,`code`),cN(275,`Primeira linha
Segunda linha
`),ag()()()(),Tl(276,`tr`,13)(277,`td`,14)(278,`div`,15)(279,`span`,16),cN(280,` p-value`),Gl(281,`br`),ag()()(),Tl(282,`td`,17)(283,`code`,25),cN(284,`object`),ag()(),Tl(285,`td`,19),cN(286,`-`),ag(),Tl(287,`td`,20)(288,`p`),cN(289,`Objeto que será utilizado para exibir as informações dinâmicas, o valor será recuperado através do atributo `),Tl(290,`em`),cN(291,`property`),ag(),cN(292,`
dos objetos contidos na propridade `),Tl(293,`code`),cN(294,`p-fields`),ag(),cN(295,`.`),ag(),Tl(296,`blockquote`)(297,`p`),cN(298,`Ex: `),Tl(299,`code`),cN(300,`{ age: '35' }`),ag()()()()()(),Tl(301,`h3`),cN(302,`Interfaces`),ag(),Tl(303,`h4`,26)(304,`code`,5),cN(305,`PoDynamicViewRequest`),ag()(),Tl(306,`div`,2)(307,`p`),cN(308,`Define o tipo de busca customizada para um campo em específico.`),ag()(),Tl(309,`h4`,9),cN(310,`Métodos`),ag(),Tl(311,`table`,27)(312,`tr`,13)(313,`th`,28)(314,`div`,15)(315,`h4`)(316,`span`,16),cN(317,` getObjectByValue `),ag()()()()(),Tl(318,`tr`,20)(319,`td`,20)(320,`p`),cN(321,`Método responsável por enviar um valor que será buscado no serviço.`),ag()()()(),Tl(322,`h5`)(323,`b`),cN(324,`Parâmetros`),ag()(),Tl(325,`table`,10)(326,`tr`,11)(327,`th`,12),cN(328,`Nome`),ag(),Tl(329,`th`,12),cN(330,`Tipo`),ag(),Tl(331,`th`,12),cN(332,`Descrição`),ag()(),Tl(333,`tr`,13)(334,`td`,14),cN(335,` value`),ag(),Tl(336,`td`,17)(337,`code`,18),cN(338,` string `),ag(),Tl(339,`code`,29),cN(340,` Array<any> `),ag()(),Tl(341,`td`,20)(342,`p`),cN(343,`Valor único a ser buscado na fonte de dados.`),ag()()(),Tl(344,`tr`,13)(345,`td`,14),cN(346,` filterParams`),ag(),Tl(347,`td`,17)(348,`code`,30),cN(349,` any `),ag()(),Tl(350,`td`,20)(351,`p`),cN(352,`Valor opcional para informar filtros customizados.`),ag()()()(),Gl(353,`br`),Tl(354,`h4`,26)(355,`code`,5),cN(356,`PoDynamicViewField`),ag()(),Tl(357,`div`,2)(358,`p`),cN(359,` Interface para definição das propriedades dos campos de visualização que serão criados dinamicamente.`),ag()(),Tl(360,`h4`,9),cN(361,`Propriedades`),ag(),Tl(362,`table`,10)(363,`tr`,11)(364,`th`,12),cN(365,`Nome`),ag(),Tl(366,`th`,12),cN(367,`Tipo`),ag(),Tl(368,`th`,12),cN(369,`Descrição`),ag()(),Tl(370,`tr`,13)(371,`td`,14)(372,`div`,15)(373,`span`,16),cN(374,` alt`),Gl(375,`br`),ag()()(),Tl(376,`td`,17)(377,`code`,18),cN(378,`string`),ag()(),Tl(379,`td`,20)(380,`em`)(381,`strong`),cN(382,`(opcional)`),ag()(),Tl(383,`p`),cN(384,`Defini o texto alternativo descrevendo a imagem.`),ag(),Tl(385,`p`),cN(386,`Exemplo de utilização:`),ag(),Tl(387,`pre`)(388,`code`),cN(389,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),ag()(),Tl(390,`p`)(391,`strong`),cN(392,`Componentes compatíveis:`),ag(),Tl(393,`code`),cN(394,`po-image`),ag(),cN(395,`.`),ag()()(),Tl(396,`tr`,13)(397,`td`,14)(398,`div`,15)(399,`span`,16),cN(400,` booleanFalse`),Gl(401,`br`),ag()()(),Tl(402,`td`,17)(403,`code`,18),cN(404,`string`),ag()(),Tl(405,`td`,20)(406,`em`)(407,`strong`),cN(408,`(opcional)`),ag()(),Tl(409,`p`),cN(410,`Texto exibido quando o valor do componente for `),Tl(411,`em`),cN(412,`false`),ag(),cN(413,`.`),ag()()(),Tl(414,`tr`,13)(415,`td`,14)(416,`div`,15)(417,`span`,16),cN(418,` booleanTrue`),Gl(419,`br`),ag()()(),Tl(420,`td`,17)(421,`code`,18),cN(422,`string`),ag()(),Tl(423,`td`,20)(424,`em`)(425,`strong`),cN(426,`(opcional)`),ag()(),Tl(427,`p`),cN(428,`Texto exibido quando o valor do componente for `),Tl(429,`em`),cN(430,`true`),ag(),cN(431,`.`),ag()()(),Tl(432,`tr`,13)(433,`td`,14)(434,`div`,15)(435,`span`,16),cN(436,` color`),Gl(437,`br`),ag()()(),Tl(438,`td`,17)(439,`code`,18),cN(440,`string`),ag()(),Tl(441,`td`,20)(442,`em`)(443,`strong`),cN(444,`(opcional)`),ag()(),Tl(445,`p`),cN(446,`Determina a cor da tag. As maneiras de customizar as cores são:`),ag(),Tl(447,`ul`)(448,`li`),cN(449,`Hexadeximal, por exemplo `),Tl(450,`code`),cN(451,`#c64840`),ag(),cN(452,`;`),ag(),Tl(453,`li`),cN(454,`RGB, como `),Tl(455,`code`),cN(456,`rgb(0, 0, 165)`),ag(),cN(457,`;`),ag(),Tl(458,`li`),cN(459,`O nome da cor, por exemplo `),Tl(460,`code`),cN(461,`blue`),ag(),cN(462,`;`),ag(),Tl(463,`li`),cN(464,`Usando uma das cores do tema do PO:`),ag(),Tl(465,`li`),cN(466,`Valores válidos:`),Tl(467,`ul`)(468,`li`),Gl(469,`span`,31),Tl(470,`code`),cN(471,`color-01`),ag()(),Tl(472,`li`),Gl(473,`span`,32),Tl(474,`code`),cN(475,`color-02`),ag()(),Tl(476,`li`),Gl(477,`span`,33),Tl(478,`code`),cN(479,`color-03`),ag()(),Tl(480,`li`),Gl(481,`span`,34),Tl(482,`code`),cN(483,`color-04`),ag()(),Tl(484,`li`),Gl(485,`span`,35),Tl(486,`code`),cN(487,`color-05`),ag()(),Tl(488,`li`),Gl(489,`span`,36),Tl(490,`code`),cN(491,`color-06`),ag()(),Tl(492,`li`),Gl(493,`span`,37),Tl(494,`code`),cN(495,`color-07`),ag()(),Tl(496,`li`),Gl(497,`span`,38),Tl(498,`code`),cN(499,`color-08`),ag()(),Tl(500,`li`),Gl(501,`span`,39),Tl(502,`code`),cN(503,`color-09`),ag()(),Tl(504,`li`),Gl(505,`span`,40),Tl(506,`code`),cN(507,`color-10`),ag()(),Tl(508,`li`),Gl(509,`span`,41),Tl(510,`code`),cN(511,`color-11`),ag()(),Tl(512,`li`),Gl(513,`span`,42),Tl(514,`code`),cN(515,`color-12`),ag()()()()()()(),Tl(516,`tr`,13)(517,`td`,14)(518,`div`,15)(519,`span`,16),cN(520,` concatLabelValue`),Gl(521,`br`),ag()()(),Tl(522,`td`,17)(523,`code`,24),cN(524,`boolean`),ag()(),Tl(525,`td`,20)(526,`em`)(527,`strong`),cN(528,`(opcional)`),ag()(),Tl(529,`p`),cN(530,`Permite que seja exibido em tela, de forma concatenada as propriedades `),Tl(531,`code`),cN(532,`fieldLabel`),ag(),cN(533,` + `),Tl(534,`code`),cN(535,`fieldValue`),ag(),cN(536,`.
A ordem sempre ser\xE1 `),Tl(537,`code`),cN(538,`fieldLabel`),ag(),cN(539,` e depois `),Tl(540,`code`),cN(541,`fieldValue`),ag(),cN(542,`, não sendo possível alterar.`),ag(),Tl(543,`blockquote`)(544,`p`),cN(545,`Propriedade funciona corretamente caso as propriedades `),Tl(546,`code`),cN(547,`fieldLabel`),ag(),cN(548,` e `),Tl(549,`code`),cN(550,`fielValue`),ag(),cN(551,` sejam válidas.`),ag()()()(),Tl(552,`tr`,13)(553,`td`,14)(554,`div`,15)(555,`span`,16),cN(556,` container`),Gl(557,`br`),ag()()(),Tl(558,`td`,17)(559,`code`,18),cN(560,`string`),ag()(),Tl(561,`td`,20)(562,`em`)(563,`strong`),cN(564,`(opcional)`),ag()(),Tl(565,`p`),cN(566,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),ag(),Tl(567,`p`),cN(568,`Está propriedade é do tipo string, o valor que será titulo do contianer`),ag()()(),Tl(569,`tr`,13)(570,`td`,14)(571,`div`,15)(572,`span`,16),cN(573,` divider`),Gl(574,`br`),ag()()(),Tl(575,`td`,17)(576,`code`,18),cN(577,`string`),ag()(),Tl(578,`td`,20)(579,`em`)(580,`strong`),cN(581,`(opcional)`),ag()(),Tl(582,`p`),cN(583,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),ag()()(),Tl(584,`tr`,13)(585,`td`,14)(586,`div`,15)(587,`span`,16),cN(588,` fieldLabel`),Gl(589,`br`),ag()()(),Tl(590,`td`,17)(591,`code`,18),cN(592,`string`),ag()(),Tl(593,`td`,20)(594,`em`)(595,`strong`),cN(596,`(opcional)`),ag()(),Tl(597,`p`),cN(598,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),ag(),Tl(599,`p`),cN(600,`O valor padrão é: `),Tl(601,`code`),cN(602,`label`),ag(),cN(603,`.`),ag()()(),Tl(604,`tr`,13)(605,`td`,14)(606,`div`,15)(607,`span`,16),cN(608,` fieldValue`),Gl(609,`br`),ag()()(),Tl(610,`td`,17)(611,`code`,18),cN(612,`string`),ag()(),Tl(613,`td`,20)(614,`em`)(615,`strong`),cN(616,`(opcional)`),ag()(),Tl(617,`p`),cN(618,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),ag(),Tl(619,`p`),cN(620,`O valor padrão é: `),Tl(621,`code`),cN(622,`value`),ag(),cN(623,`.`),ag()()(),Tl(624,`tr`,13)(625,`td`,14)(626,`div`,15)(627,`span`,16),cN(628,` format`),Gl(629,`br`),ag()()(),Tl(630,`td`,17)(631,`code`,18),cN(632,`string `),ag(),Tl(633,`code`,43),cN(634,` Array<string>`),ag()(),Tl(635,`td`,20)(636,`em`)(637,`strong`),cN(638,`(opcional)`),ag()(),Tl(639,`p`),cN(640,`Define o formato de exibição para o valor de um campo.`),ag(),Tl(641,`ul`)(642,`li`)(643,`p`),cN(644,`Quando `),Tl(645,`code`),cN(646,`format`),ag(),cN(647,` é uma `),Tl(648,`code`),cN(649,`string`),ag(),cN(650,`, o formato aplicado depende da propriedade `),Tl(651,`strong`),cN(652,`type`),ag(),cN(653,` segue como usar cada tipo:`),ag(),Tl(654,`ul`)(655,`li`)(656,`code`),cN(657,`currency`),ag(),cN(658,`: Utiliza códigos de moeda definidos pelo `),Tl(659,`a`,44),cN(660,`CurrencyPipe`),ag(),cN(661,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),ag(),Tl(662,`li`)(663,`code`),cN(664,`date`),ag(),cN(665,`: Adota formatos de data especificados pelo `),Tl(666,`a`,45),cN(667,`DatePipe`),ag(),cN(668,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),ag(),Tl(669,`li`)(670,`code`),cN(671,`time`),ag(),cN(672,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),ag(),Tl(673,`li`)(674,`code`),cN(675,`number`),ag(),cN(676,`: Usa especificações do `),Tl(677,`a`,46),cN(678,`DecimalPipe`),ag(),cN(679,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),Tl(680,`code`),cN(681,`50`),ag(),cN(682,`, formato `),Tl(683,`code`),cN(684,`'1.2-5'`),ag(),cN(685,`, resulta em `),Tl(686,`code`),cN(687,`50.00`),ag(),cN(688,`.`),ag()()(),Tl(689,`li`)(690,`p`),cN(691,`Quando `),Tl(692,`code`),cN(693,`format`),ag(),cN(694,` é um `),Tl(695,`code`),cN(696,`Array<string>`),ag(),cN(697,`:`),ag(),Tl(698,`ul`)(699,`li`),cN(700,`Cada elemento do array representa uma propriedade do objeto.`),ag(),Tl(701,`li`),cN(702,`Os valores dessas propriedades são concatenados, separados pelo padrão ' - '.`),ag(),Tl(703,`li`),cN(704,`Exemplo: Para `),Tl(705,`code`),cN(706,`format: ["id", "name"]`),ag(),cN(707,` e um objeto `),Tl(708,`code`),cN(709,`{ id: 1, name: 'Carlos Diego' }`),ag(),cN(710,`,
o resultado ser\xE1 `),Tl(711,`code`),cN(712,`'1 - Carlos Diego'`),ag(),cN(713,`.`),ag()()()()()(),Tl(714,`tr`,13)(715,`td`,14)(716,`div`,15)(717,`span`,16),cN(718,` gridColumns`),Gl(719,`br`),ag()()(),Tl(720,`td`,17)(721,`code`,47),cN(722,`number`),ag()(),Tl(723,`td`,20)(724,`em`)(725,`strong`),cN(726,`(opcional)`),ag()(),Tl(727,`p`),cN(728,`Tamanho de exibição do campo em telas.`),ag(),Tl(729,`p`),cN(730,`Deve ser usado o sistema de `),Tl(731,`strong`),cN(732,`grid`),ag(),cN(733,` do PO (1 ... 12 colunas).`),ag(),Tl(734,`blockquote`)(735,`p`),cN(736,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),ag()()()(),Tl(737,`tr`,13)(738,`td`,14)(739,`div`,15)(740,`span`,16),cN(741,` gridLgColumns`),Gl(742,`br`),ag()()(),Tl(743,`td`,17)(744,`code`,47),cN(745,`number`),ag()(),Tl(746,`td`,20)(747,`em`)(748,`strong`),cN(749,`(opcional)`),ag()(),Tl(750,`p`),cN(751,`Tamanho de exibição do campo em telas grandes (lg).`),ag(),Tl(752,`p`),cN(753,`Deve ser usado o sistema de `),Tl(754,`strong`),cN(755,`grid`),ag(),cN(756,` do PO (1 ... 12 colunas).`),ag(),Tl(757,`blockquote`)(758,`p`),cN(759,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(760,`code`),cN(761,`gridColumns`),ag(),cN(762,`.`),ag()()()(),Tl(763,`tr`,13)(764,`td`,14)(765,`div`,15)(766,`span`,16),cN(767,` gridLgPull`),Gl(768,`br`),ag()()(),Tl(769,`td`,17)(770,`code`,47),cN(771,`number`),ag()(),Tl(772,`td`,20)(773,`em`)(774,`strong`),cN(775,`(opcional)`),ag()(),Tl(776,`p`),cN(777,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),ag(),Tl(778,`p`),cN(779,`Deve ser usado o sistema de `),Tl(780,`strong`),cN(781,`grid`),ag(),cN(782,` do PO (1 ... 11 colunas).`),ag(),Tl(783,`blockquote`)(784,`p`),cN(785,`Esta propriedade não funciona com a propriedade `),Tl(786,`code`),cN(787,`gridColumns`),ag(),cN(788,`. Deve-se especificar o tamanho da tela.`),ag()()()(),Tl(789,`tr`,13)(790,`td`,14)(791,`div`,15)(792,`span`,16),cN(793,` gridMdColumns`),Gl(794,`br`),ag()()(),Tl(795,`td`,17)(796,`code`,47),cN(797,`number`),ag()(),Tl(798,`td`,20)(799,`em`)(800,`strong`),cN(801,`(opcional)`),ag()(),Tl(802,`p`),cN(803,`Tamanho de exibição do campo em telas médias (md).`),ag(),Tl(804,`p`),cN(805,`Deve ser usado o sistema de `),Tl(806,`strong`),cN(807,`grid`),ag(),cN(808,` do PO (1 ... 12 colunas).`),ag(),Tl(809,`blockquote`)(810,`p`),cN(811,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(812,`code`),cN(813,`gridColumns`),ag(),cN(814,`.`),ag()()()(),Tl(815,`tr`,13)(816,`td`,14)(817,`div`,15)(818,`span`,16),cN(819,` gridMdPull`),Gl(820,`br`),ag()()(),Tl(821,`td`,17)(822,`code`,47),cN(823,`number`),ag()(),Tl(824,`td`,20)(825,`em`)(826,`strong`),cN(827,`(opcional)`),ag()(),Tl(828,`p`),cN(829,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),ag(),Tl(830,`p`),cN(831,`Deve ser usado o sistema de `),Tl(832,`strong`),cN(833,`grid`),ag(),cN(834,` do PO (1 ... 11 colunas).`),ag(),Tl(835,`blockquote`)(836,`p`),cN(837,`Esta propriedade não funciona com a propriedade `),Tl(838,`code`),cN(839,`gridColumns`),ag(),cN(840,`. Deve-se especificar o tamanho da tela.`),ag()()()(),Tl(841,`tr`,13)(842,`td`,14)(843,`div`,15)(844,`span`,16),cN(845,` gridSmColumns`),Gl(846,`br`),ag()()(),Tl(847,`td`,17)(848,`code`,47),cN(849,`number`),ag()(),Tl(850,`td`,20)(851,`em`)(852,`strong`),cN(853,`(opcional)`),ag()(),Tl(854,`p`),cN(855,`Tamanho de exibição do campo em telas menores (sm).`),ag(),Tl(856,`p`),cN(857,`Deve ser usado o sistema de `),Tl(858,`strong`),cN(859,`grid`),ag(),cN(860,` do PO (1 ... 12 colunas).`),ag(),Tl(861,`blockquote`)(862,`p`),cN(863,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(864,`code`),cN(865,`gridColumns`),ag(),cN(866,`.`),ag()()()(),Tl(867,`tr`,13)(868,`td`,14)(869,`div`,15)(870,`span`,16),cN(871,` gridSmPull`),Gl(872,`br`),ag()()(),Tl(873,`td`,17)(874,`code`,47),cN(875,`number`),ag()(),Tl(876,`td`,20)(877,`em`)(878,`strong`),cN(879,`(opcional)`),ag()(),Tl(880,`p`),cN(881,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),ag(),Tl(882,`p`),cN(883,`Deve ser usado o sistema de `),Tl(884,`strong`),cN(885,`grid`),ag(),cN(886,` do PO (1 ... 11 colunas).`),ag(),Tl(887,`blockquote`)(888,`p`),cN(889,`Esta propriedade não funciona com a propriedade `),Tl(890,`code`),cN(891,`gridColumns`),ag(),cN(892,`. Deve-se especificar o tamanho da tela.`),ag()()()(),Tl(893,`tr`,13)(894,`td`,14)(895,`div`,15)(896,`span`,16),cN(897,` gridXlColumns`),Gl(898,`br`),ag()()(),Tl(899,`td`,17)(900,`code`,47),cN(901,`number`),ag()(),Tl(902,`td`,20)(903,`em`)(904,`strong`),cN(905,`(opcional)`),ag()(),Tl(906,`p`),cN(907,`Tamanho de exibição do campo em telas extra grandes (xl).`),ag(),Tl(908,`p`),cN(909,`Deve ser usado o sistema de `),Tl(910,`strong`),cN(911,`grid`),ag(),cN(912,` do PO (1 ... 12 colunas).`),ag(),Tl(913,`blockquote`)(914,`p`),cN(915,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(916,`code`),cN(917,`gridColumns`),ag(),cN(918,`.`),ag()()()(),Tl(919,`tr`,13)(920,`td`,14)(921,`div`,15)(922,`span`,16),cN(923,` gridXlPull`),Gl(924,`br`),ag()()(),Tl(925,`td`,17)(926,`code`,47),cN(927,`number`),ag()(),Tl(928,`td`,20)(929,`em`)(930,`strong`),cN(931,`(opcional)`),ag()(),Tl(932,`p`),cN(933,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),ag(),Tl(934,`p`),cN(935,`Deve ser usado o sistema de `),Tl(936,`strong`),cN(937,`grid`),ag(),cN(938,` do PO (1 ... 11 colunas).`),ag(),Tl(939,`blockquote`)(940,`p`),cN(941,`Esta propriedade não funciona com a propriedade `),Tl(942,`code`),cN(943,`gridColumns`),ag(),cN(944,`. Deve-se especificar o tamanho da tela.`),ag()()()(),Tl(945,`tr`,13)(946,`td`,14)(947,`div`,15)(948,`span`,16),cN(949,` height`),Gl(950,`br`),ag()()(),Tl(951,`td`,17)(952,`code`,18),cN(953,`string`),ag()(),Tl(954,`td`,20)(955,`em`)(956,`strong`),cN(957,`(opcional)`),ag()(),Tl(958,`p`),cN(959,`Defini o texto alternativo descrevendo a imagem.`),ag(),Tl(960,`p`),cN(961,`Exemplo de utilização:`),ag(),Tl(962,`pre`)(963,`code`),cN(964,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),ag()(),Tl(965,`p`)(966,`strong`),cN(967,`Componentes compatíveis:`),ag(),Tl(968,`code`),cN(969,`po-image`),ag(),cN(970,`.`),ag()()(),Tl(971,`tr`,13)(972,`td`,14)(973,`div`,15)(974,`span`,16),cN(975,` icon`),Gl(976,`br`),ag()()(),Tl(977,`td`,17)(978,`code`,18),cN(979,`string`),ag()(),Tl(980,`td`,20)(981,`em`)(982,`strong`),cN(983,`(opcional)`),ag()(),Tl(984,`p`),cN(985,`Define um ícone que será exibido ao lado do valor para o campo do tipo `),Tl(986,`em`),cN(987,`tag`),ag(),cN(988,`.`),ag(),Tl(989,`blockquote`)(990,`p`),cN(991,`Veja os valores válidos na `),Tl(992,`a`,48),cN(993,`biblioteca de ícones`),ag(),cN(994,`.`),ag()()()(),Tl(995,`tr`,13)(996,`td`,14)(997,`div`,15)(998,`span`,16),cN(999,` image`),Gl(1e3,`br`),ag()()(),Tl(1001,`td`,17)(1002,`code`,24),cN(1003,`boolean`),ag()(),Tl(1004,`td`,20)(1005,`em`)(1006,`strong`),cN(1007,`(opcional)`),ag()(),Tl(1008,`p`),cN(1009,`Possibilita a utilização de imagem.`),ag(),Tl(1010,`p`),cN(1011,`Exemplo de utilização:`),ag(),Tl(1012,`pre`)(1013,`code`),cN(1014,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),ag()(),Tl(1015,`ul`)(1016,`li`),cN(1017,`@default `),Tl(1018,`code`),cN(1019,`false`),ag()()(),Tl(1020,`p`)(1021,`strong`),cN(1022,`Componentes compatíveis:`),ag(),Tl(1023,`code`),cN(1024,`po-image`),ag(),cN(1025,`.`),ag()()(),Tl(1026,`tr`,13)(1027,`td`,14)(1028,`div`,15)(1029,`span`,16),cN(1030,` isArrayOrObject`),Gl(1031,`br`),ag()()(),Tl(1032,`td`,17)(1033,`code`,24),cN(1034,`boolean`),ag()(),Tl(1035,`td`,20)(1036,`em`)(1037,`strong`),cN(1038,`(opcional)`),ag()(),Tl(1039,`p`),cN(1040,`Define que a propriedade `),Tl(1041,`code`),cN(1042,`property`),ag(),cN(1043,` é uma lista ou um objeto.`),ag(),Tl(1044,`blockquote`)(1045,`p`),cN(1046,`Por padrão, espera-se que a lista ou o objeto esteja com as propriedades `),Tl(1047,`code`),cN(1048,`label`),ag(),cN(1049,` e `),Tl(1050,`code`),cN(1051,`value`),ag(),cN(1052,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),Tl(1053,`code`),cN(1054,`fieldLabel`),ag(),cN(1055,` e `),Tl(1056,`code`),cN(1057,`fieldValue`),ag(),cN(1058,`.
\xC9 ignorada caso a propriedade `),Tl(1059,`code`),cN(1060,`searchService`),ag(),cN(1061,` esteja sendo utilizada.`),ag()()()(),Tl(1062,`tr`,13)(1063,`td`,14)(1064,`div`,15)(1065,`span`,16),cN(1066,` key`),Gl(1067,`br`),ag()()(),Tl(1068,`td`,17)(1069,`code`,24),cN(1070,`boolean`),ag()(),Tl(1071,`td`,20)(1072,`em`)(1073,`strong`),cN(1074,`(opcional)`),ag()(),Tl(1075,`p`),cN(1076,`Identificador`),ag()()(),Tl(1077,`tr`,13)(1078,`td`,14)(1079,`div`,15)(1080,`span`,16),cN(1081,` label`),Gl(1082,`br`),ag()()(),Tl(1083,`td`,17)(1084,`code`,18),cN(1085,`string`),ag()(),Tl(1086,`td`,20)(1087,`em`)(1088,`strong`),cN(1089,`(opcional)`),ag()(),Tl(1090,`p`),cN(1091,`Rótulo do campo exibido.`),ag(),Tl(1092,`p`),cN(1093,`Caso não seja informado, será utilizado como `),Tl(1094,`code`),cN(1095,`label`),ag(),cN(1096,` o valor da propriedade `),Tl(1097,`code`),cN(1098,`property`),ag(),cN(1099,` com a primeira letra em maiúsculo.`),ag()()(),Tl(1100,`tr`,13)(1101,`td`,14)(1102,`div`,15)(1103,`span`,16),cN(1104,` offsetColumns`),Gl(1105,`br`),ag()()(),Tl(1106,`td`,17)(1107,`code`,47),cN(1108,`number`),ag()(),Tl(1109,`td`,20)(1110,`em`)(1111,`strong`),cN(1112,`(opcional)`),ag()(),Tl(1113,`p`),cN(1114,`Tamanho do espaço de exibição do campo em telas.`),ag(),Tl(1115,`p`),cN(1116,`Deve ser usado o sistema de `),Tl(1117,`strong`),cN(1118,`grid`),ag(),cN(1119,` do PO (1 ... 12 colunas).`),ag(),Tl(1120,`blockquote`)(1121,`p`),cN(1122,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),ag()()()(),Tl(1123,`tr`,13)(1124,`td`,14)(1125,`div`,15)(1126,`span`,16),cN(1127,` offsetLgColumns`),Gl(1128,`br`),ag()()(),Tl(1129,`td`,17)(1130,`code`,47),cN(1131,`number`),ag()(),Tl(1132,`td`,20)(1133,`em`)(1134,`strong`),cN(1135,`(opcional)`),ag()(),Tl(1136,`p`),cN(1137,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),ag(),Tl(1138,`p`),cN(1139,`Deve ser usado o sistema de `),Tl(1140,`strong`),cN(1141,`grid`),ag(),cN(1142,` do PO (1 ... 12 colunas).`),ag(),Tl(1143,`blockquote`)(1144,`p`),cN(1145,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(1146,`code`),cN(1147,`offsetColumns`),ag(),cN(1148,`.`),ag()()()(),Tl(1149,`tr`,13)(1150,`td`,14)(1151,`div`,15)(1152,`span`,16),cN(1153,` offsetMdColumns`),Gl(1154,`br`),ag()()(),Tl(1155,`td`,17)(1156,`code`,47),cN(1157,`number`),ag()(),Tl(1158,`td`,20)(1159,`em`)(1160,`strong`),cN(1161,`(opcional)`),ag()(),Tl(1162,`p`),cN(1163,`Tamanho do espaço de exibição do campo em telas médias (md).`),ag(),Tl(1164,`p`),cN(1165,`Deve ser usado o sistema de `),Tl(1166,`strong`),cN(1167,`grid`),ag(),cN(1168,` do PO (1 ... 12 colunas).`),ag(),Tl(1169,`blockquote`)(1170,`p`),cN(1171,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(1172,`code`),cN(1173,`offsetColumns`),ag(),cN(1174,`.`),ag()()()(),Tl(1175,`tr`,13)(1176,`td`,14)(1177,`div`,15)(1178,`span`,16),cN(1179,` offsetSmColumns`),Gl(1180,`br`),ag()()(),Tl(1181,`td`,17)(1182,`code`,47),cN(1183,`number`),ag()(),Tl(1184,`td`,20)(1185,`em`)(1186,`strong`),cN(1187,`(opcional)`),ag()(),Tl(1188,`p`),cN(1189,`Tamanho do espaço de exibição do campo em telas menores (sm).`),ag(),Tl(1190,`p`),cN(1191,`Deve ser usado o sistema de `),Tl(1192,`strong`),cN(1193,`grid`),ag(),cN(1194,` do PO (1 ... 12 colunas).`),ag(),Tl(1195,`blockquote`)(1196,`p`),cN(1197,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(1198,`code`),cN(1199,`offsetColumns`),ag(),cN(1200,`.`),ag()()()(),Tl(1201,`tr`,13)(1202,`td`,14)(1203,`div`,15)(1204,`span`,16),cN(1205,` offsetXlColumns`),Gl(1206,`br`),ag()()(),Tl(1207,`td`,17)(1208,`code`,47),cN(1209,`number`),ag()(),Tl(1210,`td`,20)(1211,`em`)(1212,`strong`),cN(1213,`(opcional)`),ag()(),Tl(1214,`p`),cN(1215,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),ag(),Tl(1216,`p`),cN(1217,`Deve ser usado o sistema de `),Tl(1218,`strong`),cN(1219,`grid`),ag(),cN(1220,` do PO (1 ... 12 colunas).`),ag(),Tl(1221,`blockquote`)(1222,`p`),cN(1223,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(1224,`code`),cN(1225,`offsetColumns`),ag(),cN(1226,`.`),ag()()()(),Tl(1227,`tr`,13)(1228,`td`,14)(1229,`div`,15)(1230,`span`,16),cN(1231,` options`),Gl(1232,`br`),ag()()(),Tl(1233,`td`,17)(1234,`code`,49),cN(1235,`Array<{ label: string; value: string `),ag(),Tl(1236,`code`,50),cN(1237,` number;
}>`),ag()(),Tl(1238,`td`,20)(1239,`em`)(1240,`strong`),cN(1241,`(opcional)`),ag()(),Tl(1242,`p`),cN(1243,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),ag(),Tl(1244,`p`),cN(1245,`Exemplo de utilização:`),ag(),Tl(1246,`pre`)(1247,`code`),cN(1248,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),ag()(),Tl(1249,`pre`)(1250,`code`),cN(1251,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),ag()()()(),Tl(1252,`tr`,13)(1253,`td`,14)(1254,`div`,15)(1255,`span`,16),cN(1256,` optionsMulti`),Gl(1257,`br`),ag()()(),Tl(1258,`td`,17)(1259,`code`,24),cN(1260,`boolean`),ag()(),Tl(1261,`td`,20)(1262,`em`)(1263,`strong`),cN(1264,`(opcional)`),ag()(),Tl(1265,`p`),cN(1266,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),ag()()(),Tl(1267,`tr`,13)(1268,`td`,14)(1269,`div`,15)(1270,`span`,16),cN(1271,` optionsService`),Gl(1272,`br`),ag()()(),Tl(1273,`td`,17)(1274,`code`,18),cN(1275,`string `),ag(),Tl(1276,`code`,51),cN(1277,` PoComboFilter `),ag(),Tl(1278,`code`,52),cN(1279,` PoMultiselectFilter`),ag()(),Tl(1280,`td`,20)(1281,`em`)(1282,`strong`),cN(1283,`(opcional)`),ag()(),Tl(1284,`p`),cN(1285,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Tl(1286,`strong`),cN(1287,`Importante`),ag()(),Tl(1288,`blockquote`)(1289,`p`),cN(1290,`Para que funcione corretamente, é importante que o serviço siga o `),Tl(1291,`a`,53),cN(1292,`guia de API do PO UI`),ag(),cN(1293,`.`),ag()()()(),Tl(1294,`tr`,13)(1295,`td`,14)(1296,`div`,15)(1297,`span`,16),cN(1298,` order`),Gl(1299,`br`),ag()()(),Tl(1300,`td`,17)(1301,`code`,47),cN(1302,`number`),ag()(),Tl(1303,`td`,20)(1304,`em`)(1305,`strong`),cN(1306,`(opcional)`),ag()(),Tl(1307,`p`),cN(1308,`Informa a ordem de exibição do campo.`),ag(),Tl(1309,`p`),cN(1310,`Exemplo de utilização:`),ag(),Tl(1311,`pre`)(1312,`code`),cN(1313,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),ag()(),Tl(1314,`p`),cN(1315,`Na exibição a ordem ficará dessa forma:`),ag(),Tl(1316,`pre`)(1317,`code`),cN(1318,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),ag()(),Tl(1319,`p`),cN(1320,`Só serão aceitos valores com números inteiros maiores do que zero.`),ag(),Tl(1321,`p`),cN(1322,`Campos sem `),Tl(1323,`code`),cN(1324,`order`),ag(),cN(1325,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),ag()()(),Tl(1326,`tr`,13)(1327,`td`,14)(1328,`div`,15)(1329,`span`,16),cN(1330,` params`),Gl(1331,`br`),ag()()(),Tl(1332,`td`,17)(1333,`code`,54),cN(1334,`any`),ag()(),Tl(1335,`td`,20)(1336,`em`)(1337,`strong`),cN(1338,`(opcional)`),ag()(),Tl(1339,`p`),cN(1340,`Objeto que será enviado como parâmetro nas requisições de busca `),Tl(1341,`code`),cN(1342,`searchService`),ag(),cN(1343,` ou `),Tl(1344,`code`),cN(1345,`optionsService`),ag(),cN(1346,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),ag(),Tl(1347,`p`),cN(1348,`Por exemplo, para o parâmetro `),Tl(1349,`code`),cN(1350,`{ age: 23 }`),ag(),cN(1351,` a URL da requisição ficaria:`),ag(),Tl(1352,`p`)(1353,`code`),cN(1354,`url + /1?age=23`),ag()()()(),Tl(1355,`tr`,13)(1356,`td`,14)(1357,`div`,15)(1358,`span`,16),cN(1359,` property`),Gl(1360,`br`),ag()()(),Tl(1361,`td`,17)(1362,`code`,18),cN(1363,`string`),ag()(),Tl(1364,`td`,20)(1365,`p`),cN(1366,`Nome de referência do campo.`),ag()()(),Tl(1367,`tr`,13)(1368,`td`,14)(1369,`div`,15)(1370,`span`,16),cN(1371,` searchService`),Gl(1372,`br`),ag()()(),Tl(1373,`td`,17)(1374,`code`,18),cN(1375,`string `),ag(),Tl(1376,`code`,55),cN(1377,` PoDynamicViewRequest`),ag()(),Tl(1378,`td`,20)(1379,`em`)(1380,`strong`),cN(1381,`(opcional)`),ag()(),Tl(1382,`p`),cN(1383,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),Tl(1384,`strong`),cN(1385,`Importante:`),ag()(),Tl(1386,`blockquote`)(1387,`p`),cN(1388,`A propriedade `),Tl(1389,`code`),cN(1390,`property`),ag(),cN(1391,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Tl(1392,`a`,53),cN(1393,`guia de API do PO UI`),ag(),cN(1394,`.`),ag()()()(),Tl(1395,`tr`,13)(1396,`td`,14)(1397,`div`,15)(1398,`span`,16),cN(1399,` tag`),Gl(1400,`br`),ag()()(),Tl(1401,`td`,17)(1402,`code`,24),cN(1403,`boolean`),ag()(),Tl(1404,`td`,20)(1405,`em`)(1406,`strong`),cN(1407,`(opcional)`),ag()(),Tl(1408,`p`),cN(1409,`Indica se o campo será um `),Tl(1410,`code`),cN(1411,`po-tag`),ag(),cN(1412,`.`),ag()()(),Tl(1413,`tr`,13)(1414,`td`,14)(1415,`div`,15)(1416,`span`,16),cN(1417,` textColor`),Gl(1418,`br`),ag()()(),Tl(1419,`td`,17)(1420,`code`,18),cN(1421,`string`),ag()(),Tl(1422,`td`,20)(1423,`em`)(1424,`strong`),cN(1425,`(opcional)`),ag()(),Tl(1426,`p`),cN(1427,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),ag(),Tl(1428,`ul`)(1429,`li`),cN(1430,`Hexadeximal, por exemplo `),Tl(1431,`code`),cN(1432,`#c64840`),ag(),cN(1433,`;`),ag(),Tl(1434,`li`),cN(1435,`RGB, como `),Tl(1436,`code`),cN(1437,`rgb(0, 0, 165)`),ag(),cN(1438,`;`),ag(),Tl(1439,`li`),cN(1440,`O nome da cor, por exemplo `),Tl(1441,`code`),cN(1442,`blue`),ag(),cN(1443,`;`),ag()()()(),Tl(1444,`tr`,13)(1445,`td`,14)(1446,`div`,15)(1447,`span`,16),cN(1448,` type`),Gl(1449,`br`),ag()()(),Tl(1450,`td`,17)(1451,`code`,18),cN(1452,`string `),ag(),Tl(1453,`code`,56),cN(1454,` PoDynamicFieldType`),ag()(),Tl(1455,`td`,20)(1456,`em`)(1457,`strong`),cN(1458,`(opcional)`),ag()(),Tl(1459,`p`),cN(1460,`Tipo do valor campo.`),ag(),Tl(1461,`p`),cN(1462,`Valores válidos:`),ag(),Tl(1463,`ul`)(1464,`li`)(1465,`code`),cN(1466,`boolean`),ag(),cN(1467,`: Valores `),Tl(1468,`em`),cN(1469,`booleanos`),ag(),cN(1470,`.`),ag(),Tl(1471,`li`)(1472,`code`),cN(1473,`currency`),ag(),cN(1474,`: Valores monetários.`),ag(),Tl(1475,`li`)(1476,`code`),cN(1477,`decimal`),ag(),cN(1478,`: Valores decimais.`),ag(),Tl(1479,`li`)(1480,`code`),cN(1481,`date`),ag(),cN(1482,`: Valores de datas.`),Tl(1483,`ul`)(1484,`li`),cN(1485,`Aceita os tipos `),Tl(1486,`strong`),cN(1487,`string`),ag(),cN(1488,` e `),Tl(1489,`strong`),cN(1490,`Date`),ag(),cN(1491,` padr\xE3o do Javascript,
por exemplo: `),Tl(1492,`code`),cN(1493,`'2017-11-28'`),ag(),cN(1494,` ou `),Tl(1495,`code`),cN(1496,`new Date(2017, 10, 28)`),ag(),cN(1497,`.`),ag()()(),Tl(1498,`li`)(1499,`code`),cN(1500,`dateTime`),ag(),cN(1501,`: Valor de data com horário.`),Tl(1502,`ul`)(1503,`li`),cN(1504,`Aceita o tipo `),Tl(1505,`em`),cN(1506,`string`),ag(),cN(1507,` no formato `),Tl(1508,`strong`),cN(1509,`ISO-8601`),ag(),cN(1510,` extendido `),Tl(1511,`strong`),cN(1512,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),ag(),cN(1513,`
e o tipo `),Tl(1514,`strong`),cN(1515,`Date`),ag(),cN(1516,` padrão do Javascript, por exemplo: `),Tl(1517,`code`),cN(1518,`'2017-11-28T00:00:00-02:00'`),ag(),cN(1519,` ou `),Tl(1520,`code`),cN(1521,`new Date(2017, 10, 28)`),ag(),cN(1522,`.`),ag()()(),Tl(1523,`li`)(1524,`code`),cN(1525,`number`),ag(),cN(1526,`: Valores numéricos.`),ag(),Tl(1527,`li`)(1528,`code`),cN(1529,`string`),ag(),cN(1530,`: Textos.`),ag(),Tl(1531,`li`)(1532,`code`),cN(1533,`time`),ag(),cN(1534,`: Valor do horário.`),Tl(1535,`ul`)(1536,`li`),cN(1537,`Aceita o tipo `),Tl(1538,`strong`),cN(1539,`string`),ag(),cN(1540,` nos formatos `),Tl(1541,`strong`),cN(1542,`'HH:mm:ss'`),ag(),cN(1543,` ou `),Tl(1544,`strong`),cN(1545,`'HH:mm:ss.ffffff'`),ag(),cN(1546,`, por exemplo: `),Tl(1547,`code`),cN(1548,`'23:12:45'`),ag(),cN(1549,`.`),ag()()()()()(),Tl(1550,`tr`,13)(1551,`td`,14)(1552,`div`,15)(1553,`span`,16),cN(1554,` visible`),Gl(1555,`br`),ag()()(),Tl(1556,`td`,17)(1557,`code`,24),cN(1558,`boolean`),ag()(),Tl(1559,`td`,20)(1560,`em`)(1561,`strong`),cN(1562,`(opcional)`),ag()(),Tl(1563,`p`),cN(1564,`Indica se o campo será visível.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var Ee=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Dynamic View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,r){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return r.changeTab(`doc`)}),Gl(3,`sample-po-dynamic-view-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return r.changeTab(`web`)}),Gl(5,`sample-po-dynamic-view-basic-view`)(6,`sample-po-dynamic-view-employee-view`)(7,`sample-po-dynamic-view-employee-on-load-view`)(8,`sample-po-dynamic-view-container-view`),ag()()()),a&2&&(nw(`p-actions`,r.actions),jp(2),nw(`p-active`,r.activeTab===`doc`),jp(2),nw(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,N,G,W,Z,X],encapsulation:2,changeDetection:1})}return o})()}];var K=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[bL.forChild(Ee),bL]})}return o})();var Ke=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,K]})}return o})();export{Ke as DocPoDynamicViewModule};