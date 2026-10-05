import{$i as pt,Ca as zO,Cr as Kc,Gi as mg,Hr as RN,Mi as hw,Oi as he,Ri as kL,Rt as cae,T as Cze,Un as AN,Wn as Ac,Xt as gze,_a as wn,ca as ue,ea as q,fr as Hp,i as _a,in as mae,ir as E,li as be,mr as I,oi as aN,pa as vN,r as Ta,rr as Dn,ua as ug,ui as cE,ur as Hn,yi as f,zr as Qn}from"./main-DRZDQSOK.js";var Y=()=>({property:`name`});var $=o=>[o];var ee=()=>({name:`Jhon`});var _=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-view-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-fields`,`p-value`]],template:function(a,r){a&1&&Kc(0,`po-dynamic-view`,0),a&2&&cE(`p-fields`,AN(3,$,RN(2,Y)))(`p-value`,RN(5,ee))},dependencies:[gze],encapsulation:2,changeDetection:1})}return o})();var ie=o=>({"docs-sample-code-tabs":o});var N=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Dynamic View Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return r.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-dynamic-view-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+r.sampleCodeButtonIcon),Hp(),mg(` `,r.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ie,r.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,_],encapsulation:2,changeDetection:1})}return o})();var R=(()=>{class o{fields=[{property:`name`,divider:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,divider:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`city`,label:`City`,divider:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`marriedStatus`,options:[{label:`MARRIED`,value:`1`}],label:`Marital status`,divider:`ADDITIONAL DATA`,tag:!0,color:`#C596E7`},{property:`children`,options:[{label:`yes `,value:`1`},{label:`no`,value:`2`}]},{property:`hobbies`,label:`Hobbies`,gridColumns:12,divider:`Additional Information`}];employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`São Paulo`,wage:8000.5,availability:`Available`,admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,marriedStatus:`1`,children:`1`,hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-view-employee`]],standalone:!1,decls:2,vars:3,consts:[[`p-title`,`Employee`],[3,`p-fields`,`p-value`,`p-text-wrap`]],template:function(a,r){a&1&&(Ac(0,`po-page-default`,0),Kc(1,`po-dynamic-view`,1),ug()),a&2&&(Hp(),cE(`p-fields`,r.fields)(`p-value`,r.employee)(`p-text-wrap`,!0))},dependencies:[gze,Cze],encapsulation:2,changeDetection:1})}return o})();var ae=o=>({"docs-sample-code-tabs":o});var G=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-view-employee-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Dynamic View - Employee`),ug(),Ac(4,`a`,2),pt(`click`,function(){return r.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-dynamic-view-employee`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+r.sampleCodeButtonIcon),Hp(),mg(` `,r.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ae,r.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,R],encapsulation:2,changeDetection:1})}return o})();var O=(()=>{class o{httpClient=f(hw);headers=new Dn({"X-PO-No-Message":`true`});url;filterParams;getObjectByValue(l,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(q(r=>`items`in r?r.items:r))}setConfig(l,a){this.url=l,this.filterParams=a}static ɵfac=function(a){return new(a||o)};static ɵprov=I({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var J=(()=>{class o{employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`A`,wage:8000.5,availability:`Available`,cities:[{city:`São Paulo`,id:`SP`},{city:`Joinville`,id:`SC`},{city:`Belo Horizonte`,id:`MG`}],admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,profile:`admin`,image:`https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg`};fields=[{property:`name`,divider:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,divider:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`cities`,isArrayOrObject:!0,fieldLabel:`city`,fieldValue:`id`,concatLabelValue:!0},{property:`city`,label:`City`,divider:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`image`,divider:`Image`,image:!0,alt:`image`,height:`250`}];_newService=f(O);ngOnInit(){this._newService.setConfig(`https://po-sample-api.onrender.com/v1/hotels`,{id:1485976673002})}customEmployeeData(){return{value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:`name`,divider:`Personal data by load customization`,order:1},{property:`cpf`,tag:!0,color:`color-07`,order:2},{property:`rg`,tag:!0,color:`color-07`,order:3},{property:`wage`,type:`string`,tag:!0,color:`color-07`},{property:`genre`,visible:!1},{property:`job`,tag:!1},{searchService:this._newService,fieldLabel:`address_city`,property:`city`}]}}checkProfile(){if(this.employee.profile===`admin`)return`confidential`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-view-employee-on-load`]],standalone:!1,features:[be([O])],decls:2,vars:3,consts:[[`p-title`,`Employee on Load`],[3,`p-fields`,`p-load`,`p-value`]],template:function(a,r){a&1&&(Ac(0,`po-page-default`,0),Kc(1,`po-dynamic-view`,1),ug()),a&2&&(Hp(),cE(`p-fields`,r.fields)(`p-load`,r.customEmployeeData.bind(r))(`p-value`,r.employee))},dependencies:[gze,Cze],encapsulation:2,changeDetection:1})}return o})();var me=o=>({"docs-sample-code-tabs":o});var W=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-view-employee-on-load-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Dynamic View - Employee on load`),ug(),Ac(4,`a`,2),pt(`click`,function(){return r.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-dynamic-view-employee-on-load`),ug(),Kc(27,`hr`)),a&2&&(Hp(5),aN(`po-icon `+r.sampleCodeButtonIcon),Hp(),mg(` `,r.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,me,r.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,J],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{fields=[{property:`name`,container:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,container:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`city`,label:`City`,container:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`marriedStatus`,options:[{label:`MARRIED`,value:`1`}],label:`Marital status`,container:`ADDITIONAL DATA`,tag:!0,color:`#C596E7`},{property:`children`,options:[{label:`yes `,value:`1`},{label:`no`,value:`2`}]}];employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`São Paulo`,wage:8000.5,availability:`Available`,admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,marriedStatus:`1`,children:`1`};static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-view-container`]],standalone:!1,decls:2,vars:2,consts:[[`p-title`,`Employee`],[3,`p-fields`,`p-value`]],template:function(a,r){a&1&&(Ac(0,`po-page-default`,0),Kc(1,`po-dynamic-view`,1),ug()),a&2&&(Hp(),cE(`p-fields`,r.fields)(`p-value`,r.employee))},dependencies:[gze,Cze],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o});var Z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-view-container-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Dynamic View - Employee on load`),ug(),Ac(4,`a`,2),pt(`click`,function(){return r.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-dynamic-view-container`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+r.sampleCodeButtonIcon),Hp(),mg(` `,r.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,se,r.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,U],encapsulation:2,changeDetection:1})}return o})();var X=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-view-doc`]],standalone:!1,decls:1565,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicViewField[]`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`object`],[1,`docs-api-h4`,`docs-api-class-name`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`href`,`https://angular.io/api/common/CurrencyPipe`],[`href`,`https://angular.io/api/common/DatePipe`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<{`,`label:`,`string;`,`value:`,`string`],[`pan`,``,1,`docs-api-property-type`,`number;`,`}>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicViewRequest`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`]],template:function(a,r){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoDynamicModule } from '@po-ui/ng-components';`),ug()(),Kc(4,`div`,2),Ac(5,`h3`,3),vN(6,`Componente`),ug(),Ac(7,`h4`,4)(8,`code`,5),vN(9,`PoDynamicViewComponent`),ug()(),Ac(10,`div`,2)(11,`p`),vN(12,`Componente para listar dados dinamicamente a partir de uma lista de objetos.`),ug(),Ac(13,`blockquote`)(14,`p`),vN(15,`Por padrão esse componente cria `),Ac(16,`code`),vN(17,`po-info`),ug(),vN(18,` para exibição, é possível criar `),Ac(19,`code`),vN(20,`po-tag`),ug(),vN(21,` passando a propriedade { tag: true }. `),ug()()(),Ac(22,`div`,6)(23,`h4`,7),vN(24,`Seletor`),ug(),Ac(25,`pre`,8),vN(26,`<po-dynamic-view
    p-components-size="string"
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),ug()(),Ac(27,`h4`,9),vN(28,`Propriedades`),ug(),Ac(29,`table`,10)(30,`tr`,11)(31,`th`,12),vN(32,`Nome`),ug(),Ac(33,`th`,12),vN(34,`Tipo`),ug(),Ac(35,`th`,12),vN(36,`Padrão`),ug(),Ac(37,`th`,12),vN(38,`Descrição`),ug()(),Ac(39,`tr`,13)(40,`td`,14)(41,`div`,15)(42,`span`,16),vN(43,` p-components-size`),Kc(44,`br`),ug()()(),Ac(45,`td`,17)(46,`code`,18),vN(47,`string`),ug()(),Ac(48,`td`,19)(49,`p`)(50,`code`),vN(51,`medium`),ug()()(),Ac(52,`td`,20)(53,`em`)(54,`strong`),vN(55,`(opcional)`),ug()(),Ac(56,`p`),vN(57,`Define o tamanho dos componentes no template entre `),Ac(58,`code`),vN(59,`small`),ug(),vN(60,` ou `),Ac(61,`code`),vN(62,`medium`),ug(),vN(63,`.`),ug(),Ac(64,`blockquote`)(65,`p`),vN(66,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(67,`code`),vN(68,`medium`),ug(),vN(69,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(70,`a`,21),vN(71,`po-theme`),ug(),vN(72,`.`),ug()()()(),Ac(73,`tr`,13)(74,`td`,14)(75,`div`,15)(76,`span`,16),vN(77,` p-fields`),Kc(78,`br`),ug()()(),Ac(79,`td`,17)(80,`code`,22),vN(81,`PoDynamicViewField[]`),ug()(),Ac(82,`td`,19)(83,`p`)(84,`code`),vN(85,`[]`),ug()()(),Ac(86,`td`,20)(87,`em`)(88,`strong`),vN(89,`(opcional)`),ug()(),Ac(90,`p`),vN(91,`Lista de objetos que implementam a interface `),Ac(92,`code`),vN(93,`PoDynamicView`),ug(),vN(94,`.`),ug(),Ac(95,`blockquote`)(96,`p`),vN(97,`Ex: `),Ac(98,`code`),vN(99,`[ { property: 'age' } ]`),ug()()(),Ac(100,`p`),vN(101,`Regras de tipagem e formatação dos valores exibidos:`),ug(),Ac(102,`ul`)(103,`li`),vN(104,`Caso o `),Ac(105,`em`),vN(106,`type`),ug(),vN(107,` informado seja `),Ac(108,`em`),vN(109,`currency`),ug(),vN(110,` e não seja informado o `),Ac(111,`em`),vN(112,`format`),ug(),vN(113,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),ug(),Ac(114,`li`),vN(115,`Caso o `),Ac(116,`em`),vN(117,`type`),ug(),vN(118,` informado seja `),Ac(119,`em`),vN(120,`date`),ug(),vN(121,` e não seja informado o `),Ac(122,`em`),vN(123,`format`),ug(),vN(124,` o mesmo recebe 'dd/MM/yyyy' como formato padrão.`),ug(),Ac(125,`li`),vN(126,`Caso o `),Ac(127,`em`),vN(128,`type`),ug(),vN(129,` informado seja `),Ac(130,`em`),vN(131,`dateTime`),ug(),vN(132,` e não seja informado o `),Ac(133,`em`),vN(134,`format`),ug(),vN(135,` o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padrão.`),ug(),Ac(136,`li`),vN(137,`Caso o `),Ac(138,`em`),vN(139,`type`),ug(),vN(140,` informado seja `),Ac(141,`em`),vN(142,`number`),ug(),vN(143,` e não seja informado o `),Ac(144,`em`),vN(145,`format`),ug(),vN(146,` o mesmo não será formatado.`),ug(),Ac(147,`li`),vN(148,`Caso o `),Ac(149,`em`),vN(150,`type`),ug(),vN(151,` informado seja `),Ac(152,`em`),vN(153,`time`),ug(),vN(154,` e não seja informado o `),Ac(155,`em`),vN(156,`format`),ug(),vN(157,` o mesmo recebe 'HH:mm:ss.ffffff' como formato padrão.`),ug()(),Ac(158,`blockquote`)(159,`p`),vN(160,`As propriedades informadas serão exibidas mesmo não contendo valor de referência no objeto da propriedade `),Ac(161,`code`),vN(162,`p-value`),ug(),vN(163,`.`),ug()()()(),Ac(164,`tr`,13)(165,`td`,14)(166,`div`,15)(167,`span`,16),vN(168,` p-load`),Kc(169,`br`),ug()()(),Ac(170,`td`,17)(171,`code`,18),vN(172,`string `),ug(),Ac(173,`code`,23),vN(174,` Function`),ug()(),Ac(175,`td`,19),vN(176,`-`),ug(),Ac(177,`td`,20)(178,`em`)(179,`strong`),vN(180,`(opcional)`),ug()(),Ac(181,`p`),vN(182,`Possibilita executar uma função quando o componente é inicializado.`),ug(),Ac(183,`p`),vN(184,`A propriedade aceita os seguintes tipos:`),ug(),Ac(185,`ul`)(186,`li`)(187,`strong`),vN(188,`String`),ug(),vN(189,`: Endpoint usado pelo componente para requisição via `),Ac(190,`code`),vN(191,`POST`),ug(),vN(192,`.`),ug(),Ac(193,`li`)(194,`strong`),vN(195,`Function`),ug(),vN(196,`: Método que será executado na inicialização do componente.`),ug()(),Ac(197,`p`),vN(198,`Para os dois tipos de utilização da propriedade espera-se o seguinte retorno:`),ug(),Ac(199,`pre`)(200,`code`),vN(201,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),ug()(),Ac(202,`blockquote`)(203,`p`)(204,`strong`),vN(205,`value`),ug(),vN(206,`: any = atribui novo valor do model.`),ug()(),Ac(207,`blockquote`)(208,`p`)(209,`strong`),vN(210,`fields`),ug(),vN(211,`: `),Ac(212,`code`),vN(213,`Array<PoDynamicViewField>`),ug(),vN(214,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),ug()(),Ac(215,`ul`)(216,`li`),vN(217,`Para esconder/remover campos precisa informar no field a propriedade `),Ac(218,`code`),vN(219,`visible = false`),ug(),vN(220,`.`),ug()()()(),Ac(221,`tr`,13)(222,`td`,14)(223,`div`,15)(224,`span`,16),vN(225,` p-show-all-value`),Kc(226,`br`),ug()()(),Ac(227,`td`,17)(228,`code`,24),vN(229,`boolean`),ug()(),Ac(230,`td`,19)(231,`p`)(232,`code`),vN(233,`false`),ug()()(),Ac(234,`td`,20)(235,`em`)(236,`strong`),vN(237,`(opcional)`),ug()(),Ac(238,`p`),vN(239,`Indica se exibirá todas as informações contidas dentro do objeto informado na propriedade `),Ac(240,`code`),vN(241,`p-value`),ug(),vN(242,`.`),ug()()(),Ac(243,`tr`,13)(244,`td`,14)(245,`div`,15)(246,`span`,16),vN(247,` p-text-wrap`),Kc(248,`br`),ug()()(),Ac(249,`td`,17)(250,`code`,24),vN(251,`boolean`),ug()(),Ac(252,`td`,19)(253,`p`)(254,`code`),vN(255,`false`),ug()()(),Ac(256,`td`,20)(257,`em`)(258,`strong`),vN(259,`(opcional)`),ug()(),Ac(260,`p`),vN(261,`Permite a quebra de linha no texto do `),Ac(262,`code`),vN(263,`p-value`),ug(),vN(264,`, aplicando-a onde há `),Ac(265,`code`),vN(266,`\\n`),ug(),vN(267,`.`),ug(),Ac(268,`pre`)(269,`code`),vN(270,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),ug()(),Ac(271,`p`),vN(272,`Saída:`),ug(),Ac(273,`pre`)(274,`code`),vN(275,`Primeira linha
Segunda linha
`),ug()()()(),Ac(276,`tr`,13)(277,`td`,14)(278,`div`,15)(279,`span`,16),vN(280,` p-value`),Kc(281,`br`),ug()()(),Ac(282,`td`,17)(283,`code`,25),vN(284,`object`),ug()(),Ac(285,`td`,19),vN(286,`-`),ug(),Ac(287,`td`,20)(288,`p`),vN(289,`Objeto que será utilizado para exibir as informações dinâmicas, o valor será recuperado através do atributo `),Ac(290,`em`),vN(291,`property`),ug(),vN(292,`
dos objetos contidos na propridade `),Ac(293,`code`),vN(294,`p-fields`),ug(),vN(295,`.`),ug(),Ac(296,`blockquote`)(297,`p`),vN(298,`Ex: `),Ac(299,`code`),vN(300,`{ age: '35' }`),ug()()()()()(),Ac(301,`h3`),vN(302,`Interfaces`),ug(),Ac(303,`h4`,26)(304,`code`,5),vN(305,`PoDynamicViewRequest`),ug()(),Ac(306,`div`,2)(307,`p`),vN(308,`Define o tipo de busca customizada para um campo em específico.`),ug()(),Ac(309,`h4`,9),vN(310,`Métodos`),ug(),Ac(311,`table`,27)(312,`tr`,13)(313,`th`,28)(314,`div`,15)(315,`h4`)(316,`span`,16),vN(317,` getObjectByValue `),ug()()()()(),Ac(318,`tr`,20)(319,`td`,20)(320,`p`),vN(321,`Método responsável por enviar um valor que será buscado no serviço.`),ug()()()(),Ac(322,`h5`)(323,`b`),vN(324,`Parâmetros`),ug()(),Ac(325,`table`,10)(326,`tr`,11)(327,`th`,12),vN(328,`Nome`),ug(),Ac(329,`th`,12),vN(330,`Tipo`),ug(),Ac(331,`th`,12),vN(332,`Descrição`),ug()(),Ac(333,`tr`,13)(334,`td`,14),vN(335,` value`),ug(),Ac(336,`td`,17)(337,`code`,18),vN(338,` string `),ug(),Ac(339,`code`,29),vN(340,` Array<any> `),ug()(),Ac(341,`td`,20)(342,`p`),vN(343,`Valor único a ser buscado na fonte de dados.`),ug()()(),Ac(344,`tr`,13)(345,`td`,14),vN(346,` filterParams`),ug(),Ac(347,`td`,17)(348,`code`,30),vN(349,` any `),ug()(),Ac(350,`td`,20)(351,`p`),vN(352,`Valor opcional para informar filtros customizados.`),ug()()()(),Kc(353,`br`),Ac(354,`h4`,26)(355,`code`,5),vN(356,`PoDynamicViewField`),ug()(),Ac(357,`div`,2)(358,`p`),vN(359,` Interface para definição das propriedades dos campos de visualização que serão criados dinamicamente.`),ug()(),Ac(360,`h4`,9),vN(361,`Propriedades`),ug(),Ac(362,`table`,10)(363,`tr`,11)(364,`th`,12),vN(365,`Nome`),ug(),Ac(366,`th`,12),vN(367,`Tipo`),ug(),Ac(368,`th`,12),vN(369,`Descrição`),ug()(),Ac(370,`tr`,13)(371,`td`,14)(372,`div`,15)(373,`span`,16),vN(374,` alt`),Kc(375,`br`),ug()()(),Ac(376,`td`,17)(377,`code`,18),vN(378,`string`),ug()(),Ac(379,`td`,20)(380,`em`)(381,`strong`),vN(382,`(opcional)`),ug()(),Ac(383,`p`),vN(384,`Defini o texto alternativo descrevendo a imagem.`),ug(),Ac(385,`p`),vN(386,`Exemplo de utilização:`),ug(),Ac(387,`pre`)(388,`code`),vN(389,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),ug()(),Ac(390,`p`)(391,`strong`),vN(392,`Componentes compatíveis:`),ug(),Ac(393,`code`),vN(394,`po-image`),ug(),vN(395,`.`),ug()()(),Ac(396,`tr`,13)(397,`td`,14)(398,`div`,15)(399,`span`,16),vN(400,` booleanFalse`),Kc(401,`br`),ug()()(),Ac(402,`td`,17)(403,`code`,18),vN(404,`string`),ug()(),Ac(405,`td`,20)(406,`em`)(407,`strong`),vN(408,`(opcional)`),ug()(),Ac(409,`p`),vN(410,`Texto exibido quando o valor do componente for `),Ac(411,`em`),vN(412,`false`),ug(),vN(413,`.`),ug()()(),Ac(414,`tr`,13)(415,`td`,14)(416,`div`,15)(417,`span`,16),vN(418,` booleanTrue`),Kc(419,`br`),ug()()(),Ac(420,`td`,17)(421,`code`,18),vN(422,`string`),ug()(),Ac(423,`td`,20)(424,`em`)(425,`strong`),vN(426,`(opcional)`),ug()(),Ac(427,`p`),vN(428,`Texto exibido quando o valor do componente for `),Ac(429,`em`),vN(430,`true`),ug(),vN(431,`.`),ug()()(),Ac(432,`tr`,13)(433,`td`,14)(434,`div`,15)(435,`span`,16),vN(436,` color`),Kc(437,`br`),ug()()(),Ac(438,`td`,17)(439,`code`,18),vN(440,`string`),ug()(),Ac(441,`td`,20)(442,`em`)(443,`strong`),vN(444,`(opcional)`),ug()(),Ac(445,`p`),vN(446,`Determina a cor da tag. As maneiras de customizar as cores são:`),ug(),Ac(447,`ul`)(448,`li`),vN(449,`Hexadeximal, por exemplo `),Ac(450,`code`),vN(451,`#c64840`),ug(),vN(452,`;`),ug(),Ac(453,`li`),vN(454,`RGB, como `),Ac(455,`code`),vN(456,`rgb(0, 0, 165)`),ug(),vN(457,`;`),ug(),Ac(458,`li`),vN(459,`O nome da cor, por exemplo `),Ac(460,`code`),vN(461,`blue`),ug(),vN(462,`;`),ug(),Ac(463,`li`),vN(464,`Usando uma das cores do tema do PO:`),ug(),Ac(465,`li`),vN(466,`Valores válidos:`),Ac(467,`ul`)(468,`li`),Kc(469,`span`,31),Ac(470,`code`),vN(471,`color-01`),ug()(),Ac(472,`li`),Kc(473,`span`,32),Ac(474,`code`),vN(475,`color-02`),ug()(),Ac(476,`li`),Kc(477,`span`,33),Ac(478,`code`),vN(479,`color-03`),ug()(),Ac(480,`li`),Kc(481,`span`,34),Ac(482,`code`),vN(483,`color-04`),ug()(),Ac(484,`li`),Kc(485,`span`,35),Ac(486,`code`),vN(487,`color-05`),ug()(),Ac(488,`li`),Kc(489,`span`,36),Ac(490,`code`),vN(491,`color-06`),ug()(),Ac(492,`li`),Kc(493,`span`,37),Ac(494,`code`),vN(495,`color-07`),ug()(),Ac(496,`li`),Kc(497,`span`,38),Ac(498,`code`),vN(499,`color-08`),ug()(),Ac(500,`li`),Kc(501,`span`,39),Ac(502,`code`),vN(503,`color-09`),ug()(),Ac(504,`li`),Kc(505,`span`,40),Ac(506,`code`),vN(507,`color-10`),ug()(),Ac(508,`li`),Kc(509,`span`,41),Ac(510,`code`),vN(511,`color-11`),ug()(),Ac(512,`li`),Kc(513,`span`,42),Ac(514,`code`),vN(515,`color-12`),ug()()()()()()(),Ac(516,`tr`,13)(517,`td`,14)(518,`div`,15)(519,`span`,16),vN(520,` concatLabelValue`),Kc(521,`br`),ug()()(),Ac(522,`td`,17)(523,`code`,24),vN(524,`boolean`),ug()(),Ac(525,`td`,20)(526,`em`)(527,`strong`),vN(528,`(opcional)`),ug()(),Ac(529,`p`),vN(530,`Permite que seja exibido em tela, de forma concatenada as propriedades `),Ac(531,`code`),vN(532,`fieldLabel`),ug(),vN(533,` + `),Ac(534,`code`),vN(535,`fieldValue`),ug(),vN(536,`.
A ordem sempre ser\xE1 `),Ac(537,`code`),vN(538,`fieldLabel`),ug(),vN(539,` e depois `),Ac(540,`code`),vN(541,`fieldValue`),ug(),vN(542,`, não sendo possível alterar.`),ug(),Ac(543,`blockquote`)(544,`p`),vN(545,`Propriedade funciona corretamente caso as propriedades `),Ac(546,`code`),vN(547,`fieldLabel`),ug(),vN(548,` e `),Ac(549,`code`),vN(550,`fielValue`),ug(),vN(551,` sejam válidas.`),ug()()()(),Ac(552,`tr`,13)(553,`td`,14)(554,`div`,15)(555,`span`,16),vN(556,` container`),Kc(557,`br`),ug()()(),Ac(558,`td`,17)(559,`code`,18),vN(560,`string`),ug()(),Ac(561,`td`,20)(562,`em`)(563,`strong`),vN(564,`(opcional)`),ug()(),Ac(565,`p`),vN(566,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),ug(),Ac(567,`p`),vN(568,`Está propriedade é do tipo string, o valor que será titulo do contianer`),ug()()(),Ac(569,`tr`,13)(570,`td`,14)(571,`div`,15)(572,`span`,16),vN(573,` divider`),Kc(574,`br`),ug()()(),Ac(575,`td`,17)(576,`code`,18),vN(577,`string`),ug()(),Ac(578,`td`,20)(579,`em`)(580,`strong`),vN(581,`(opcional)`),ug()(),Ac(582,`p`),vN(583,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),ug()()(),Ac(584,`tr`,13)(585,`td`,14)(586,`div`,15)(587,`span`,16),vN(588,` fieldLabel`),Kc(589,`br`),ug()()(),Ac(590,`td`,17)(591,`code`,18),vN(592,`string`),ug()(),Ac(593,`td`,20)(594,`em`)(595,`strong`),vN(596,`(opcional)`),ug()(),Ac(597,`p`),vN(598,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),ug(),Ac(599,`p`),vN(600,`O valor padrão é: `),Ac(601,`code`),vN(602,`label`),ug(),vN(603,`.`),ug()()(),Ac(604,`tr`,13)(605,`td`,14)(606,`div`,15)(607,`span`,16),vN(608,` fieldValue`),Kc(609,`br`),ug()()(),Ac(610,`td`,17)(611,`code`,18),vN(612,`string`),ug()(),Ac(613,`td`,20)(614,`em`)(615,`strong`),vN(616,`(opcional)`),ug()(),Ac(617,`p`),vN(618,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),ug(),Ac(619,`p`),vN(620,`O valor padrão é: `),Ac(621,`code`),vN(622,`value`),ug(),vN(623,`.`),ug()()(),Ac(624,`tr`,13)(625,`td`,14)(626,`div`,15)(627,`span`,16),vN(628,` format`),Kc(629,`br`),ug()()(),Ac(630,`td`,17)(631,`code`,18),vN(632,`string `),ug(),Ac(633,`code`,43),vN(634,` Array<string>`),ug()(),Ac(635,`td`,20)(636,`em`)(637,`strong`),vN(638,`(opcional)`),ug()(),Ac(639,`p`),vN(640,`Define o formato de exibição para o valor de um campo.`),ug(),Ac(641,`ul`)(642,`li`)(643,`p`),vN(644,`Quando `),Ac(645,`code`),vN(646,`format`),ug(),vN(647,` é uma `),Ac(648,`code`),vN(649,`string`),ug(),vN(650,`, o formato aplicado depende da propriedade `),Ac(651,`strong`),vN(652,`type`),ug(),vN(653,` segue como usar cada tipo:`),ug(),Ac(654,`ul`)(655,`li`)(656,`code`),vN(657,`currency`),ug(),vN(658,`: Utiliza códigos de moeda definidos pelo `),Ac(659,`a`,44),vN(660,`CurrencyPipe`),ug(),vN(661,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),ug(),Ac(662,`li`)(663,`code`),vN(664,`date`),ug(),vN(665,`: Adota formatos de data especificados pelo `),Ac(666,`a`,45),vN(667,`DatePipe`),ug(),vN(668,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),ug(),Ac(669,`li`)(670,`code`),vN(671,`time`),ug(),vN(672,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),ug(),Ac(673,`li`)(674,`code`),vN(675,`number`),ug(),vN(676,`: Usa especificações do `),Ac(677,`a`,46),vN(678,`DecimalPipe`),ug(),vN(679,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),Ac(680,`code`),vN(681,`50`),ug(),vN(682,`, formato `),Ac(683,`code`),vN(684,`'1.2-5'`),ug(),vN(685,`, resulta em `),Ac(686,`code`),vN(687,`50.00`),ug(),vN(688,`.`),ug()()(),Ac(689,`li`)(690,`p`),vN(691,`Quando `),Ac(692,`code`),vN(693,`format`),ug(),vN(694,` é um `),Ac(695,`code`),vN(696,`Array<string>`),ug(),vN(697,`:`),ug(),Ac(698,`ul`)(699,`li`),vN(700,`Cada elemento do array representa uma propriedade do objeto.`),ug(),Ac(701,`li`),vN(702,`Os valores dessas propriedades são concatenados, separados pelo padrão ' - '.`),ug(),Ac(703,`li`),vN(704,`Exemplo: Para `),Ac(705,`code`),vN(706,`format: ["id", "name"]`),ug(),vN(707,` e um objeto `),Ac(708,`code`),vN(709,`{ id: 1, name: 'Carlos Diego' }`),ug(),vN(710,`,
o resultado ser\xE1 `),Ac(711,`code`),vN(712,`'1 - Carlos Diego'`),ug(),vN(713,`.`),ug()()()()()(),Ac(714,`tr`,13)(715,`td`,14)(716,`div`,15)(717,`span`,16),vN(718,` gridColumns`),Kc(719,`br`),ug()()(),Ac(720,`td`,17)(721,`code`,47),vN(722,`number`),ug()(),Ac(723,`td`,20)(724,`em`)(725,`strong`),vN(726,`(opcional)`),ug()(),Ac(727,`p`),vN(728,`Tamanho de exibição do campo em telas.`),ug(),Ac(729,`p`),vN(730,`Deve ser usado o sistema de `),Ac(731,`strong`),vN(732,`grid`),ug(),vN(733,` do PO (1 ... 12 colunas).`),ug(),Ac(734,`blockquote`)(735,`p`),vN(736,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),ug()()()(),Ac(737,`tr`,13)(738,`td`,14)(739,`div`,15)(740,`span`,16),vN(741,` gridLgColumns`),Kc(742,`br`),ug()()(),Ac(743,`td`,17)(744,`code`,47),vN(745,`number`),ug()(),Ac(746,`td`,20)(747,`em`)(748,`strong`),vN(749,`(opcional)`),ug()(),Ac(750,`p`),vN(751,`Tamanho de exibição do campo em telas grandes (lg).`),ug(),Ac(752,`p`),vN(753,`Deve ser usado o sistema de `),Ac(754,`strong`),vN(755,`grid`),ug(),vN(756,` do PO (1 ... 12 colunas).`),ug(),Ac(757,`blockquote`)(758,`p`),vN(759,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(760,`code`),vN(761,`gridColumns`),ug(),vN(762,`.`),ug()()()(),Ac(763,`tr`,13)(764,`td`,14)(765,`div`,15)(766,`span`,16),vN(767,` gridLgPull`),Kc(768,`br`),ug()()(),Ac(769,`td`,17)(770,`code`,47),vN(771,`number`),ug()(),Ac(772,`td`,20)(773,`em`)(774,`strong`),vN(775,`(opcional)`),ug()(),Ac(776,`p`),vN(777,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),ug(),Ac(778,`p`),vN(779,`Deve ser usado o sistema de `),Ac(780,`strong`),vN(781,`grid`),ug(),vN(782,` do PO (1 ... 11 colunas).`),ug(),Ac(783,`blockquote`)(784,`p`),vN(785,`Esta propriedade não funciona com a propriedade `),Ac(786,`code`),vN(787,`gridColumns`),ug(),vN(788,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(789,`tr`,13)(790,`td`,14)(791,`div`,15)(792,`span`,16),vN(793,` gridMdColumns`),Kc(794,`br`),ug()()(),Ac(795,`td`,17)(796,`code`,47),vN(797,`number`),ug()(),Ac(798,`td`,20)(799,`em`)(800,`strong`),vN(801,`(opcional)`),ug()(),Ac(802,`p`),vN(803,`Tamanho de exibição do campo em telas médias (md).`),ug(),Ac(804,`p`),vN(805,`Deve ser usado o sistema de `),Ac(806,`strong`),vN(807,`grid`),ug(),vN(808,` do PO (1 ... 12 colunas).`),ug(),Ac(809,`blockquote`)(810,`p`),vN(811,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(812,`code`),vN(813,`gridColumns`),ug(),vN(814,`.`),ug()()()(),Ac(815,`tr`,13)(816,`td`,14)(817,`div`,15)(818,`span`,16),vN(819,` gridMdPull`),Kc(820,`br`),ug()()(),Ac(821,`td`,17)(822,`code`,47),vN(823,`number`),ug()(),Ac(824,`td`,20)(825,`em`)(826,`strong`),vN(827,`(opcional)`),ug()(),Ac(828,`p`),vN(829,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),ug(),Ac(830,`p`),vN(831,`Deve ser usado o sistema de `),Ac(832,`strong`),vN(833,`grid`),ug(),vN(834,` do PO (1 ... 11 colunas).`),ug(),Ac(835,`blockquote`)(836,`p`),vN(837,`Esta propriedade não funciona com a propriedade `),Ac(838,`code`),vN(839,`gridColumns`),ug(),vN(840,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(841,`tr`,13)(842,`td`,14)(843,`div`,15)(844,`span`,16),vN(845,` gridSmColumns`),Kc(846,`br`),ug()()(),Ac(847,`td`,17)(848,`code`,47),vN(849,`number`),ug()(),Ac(850,`td`,20)(851,`em`)(852,`strong`),vN(853,`(opcional)`),ug()(),Ac(854,`p`),vN(855,`Tamanho de exibição do campo em telas menores (sm).`),ug(),Ac(856,`p`),vN(857,`Deve ser usado o sistema de `),Ac(858,`strong`),vN(859,`grid`),ug(),vN(860,` do PO (1 ... 12 colunas).`),ug(),Ac(861,`blockquote`)(862,`p`),vN(863,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(864,`code`),vN(865,`gridColumns`),ug(),vN(866,`.`),ug()()()(),Ac(867,`tr`,13)(868,`td`,14)(869,`div`,15)(870,`span`,16),vN(871,` gridSmPull`),Kc(872,`br`),ug()()(),Ac(873,`td`,17)(874,`code`,47),vN(875,`number`),ug()(),Ac(876,`td`,20)(877,`em`)(878,`strong`),vN(879,`(opcional)`),ug()(),Ac(880,`p`),vN(881,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),ug(),Ac(882,`p`),vN(883,`Deve ser usado o sistema de `),Ac(884,`strong`),vN(885,`grid`),ug(),vN(886,` do PO (1 ... 11 colunas).`),ug(),Ac(887,`blockquote`)(888,`p`),vN(889,`Esta propriedade não funciona com a propriedade `),Ac(890,`code`),vN(891,`gridColumns`),ug(),vN(892,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(893,`tr`,13)(894,`td`,14)(895,`div`,15)(896,`span`,16),vN(897,` gridXlColumns`),Kc(898,`br`),ug()()(),Ac(899,`td`,17)(900,`code`,47),vN(901,`number`),ug()(),Ac(902,`td`,20)(903,`em`)(904,`strong`),vN(905,`(opcional)`),ug()(),Ac(906,`p`),vN(907,`Tamanho de exibição do campo em telas extra grandes (xl).`),ug(),Ac(908,`p`),vN(909,`Deve ser usado o sistema de `),Ac(910,`strong`),vN(911,`grid`),ug(),vN(912,` do PO (1 ... 12 colunas).`),ug(),Ac(913,`blockquote`)(914,`p`),vN(915,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(916,`code`),vN(917,`gridColumns`),ug(),vN(918,`.`),ug()()()(),Ac(919,`tr`,13)(920,`td`,14)(921,`div`,15)(922,`span`,16),vN(923,` gridXlPull`),Kc(924,`br`),ug()()(),Ac(925,`td`,17)(926,`code`,47),vN(927,`number`),ug()(),Ac(928,`td`,20)(929,`em`)(930,`strong`),vN(931,`(opcional)`),ug()(),Ac(932,`p`),vN(933,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),ug(),Ac(934,`p`),vN(935,`Deve ser usado o sistema de `),Ac(936,`strong`),vN(937,`grid`),ug(),vN(938,` do PO (1 ... 11 colunas).`),ug(),Ac(939,`blockquote`)(940,`p`),vN(941,`Esta propriedade não funciona com a propriedade `),Ac(942,`code`),vN(943,`gridColumns`),ug(),vN(944,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(945,`tr`,13)(946,`td`,14)(947,`div`,15)(948,`span`,16),vN(949,` height`),Kc(950,`br`),ug()()(),Ac(951,`td`,17)(952,`code`,18),vN(953,`string`),ug()(),Ac(954,`td`,20)(955,`em`)(956,`strong`),vN(957,`(opcional)`),ug()(),Ac(958,`p`),vN(959,`Defini o texto alternativo descrevendo a imagem.`),ug(),Ac(960,`p`),vN(961,`Exemplo de utilização:`),ug(),Ac(962,`pre`)(963,`code`),vN(964,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),ug()(),Ac(965,`p`)(966,`strong`),vN(967,`Componentes compatíveis:`),ug(),Ac(968,`code`),vN(969,`po-image`),ug(),vN(970,`.`),ug()()(),Ac(971,`tr`,13)(972,`td`,14)(973,`div`,15)(974,`span`,16),vN(975,` icon`),Kc(976,`br`),ug()()(),Ac(977,`td`,17)(978,`code`,18),vN(979,`string`),ug()(),Ac(980,`td`,20)(981,`em`)(982,`strong`),vN(983,`(opcional)`),ug()(),Ac(984,`p`),vN(985,`Define um ícone que será exibido ao lado do valor para o campo do tipo `),Ac(986,`em`),vN(987,`tag`),ug(),vN(988,`.`),ug(),Ac(989,`blockquote`)(990,`p`),vN(991,`Veja os valores válidos na `),Ac(992,`a`,48),vN(993,`biblioteca de ícones`),ug(),vN(994,`.`),ug()()()(),Ac(995,`tr`,13)(996,`td`,14)(997,`div`,15)(998,`span`,16),vN(999,` image`),Kc(1e3,`br`),ug()()(),Ac(1001,`td`,17)(1002,`code`,24),vN(1003,`boolean`),ug()(),Ac(1004,`td`,20)(1005,`em`)(1006,`strong`),vN(1007,`(opcional)`),ug()(),Ac(1008,`p`),vN(1009,`Possibilita a utilização de imagem.`),ug(),Ac(1010,`p`),vN(1011,`Exemplo de utilização:`),ug(),Ac(1012,`pre`)(1013,`code`),vN(1014,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),ug()(),Ac(1015,`ul`)(1016,`li`),vN(1017,`@default `),Ac(1018,`code`),vN(1019,`false`),ug()()(),Ac(1020,`p`)(1021,`strong`),vN(1022,`Componentes compatíveis:`),ug(),Ac(1023,`code`),vN(1024,`po-image`),ug(),vN(1025,`.`),ug()()(),Ac(1026,`tr`,13)(1027,`td`,14)(1028,`div`,15)(1029,`span`,16),vN(1030,` isArrayOrObject`),Kc(1031,`br`),ug()()(),Ac(1032,`td`,17)(1033,`code`,24),vN(1034,`boolean`),ug()(),Ac(1035,`td`,20)(1036,`em`)(1037,`strong`),vN(1038,`(opcional)`),ug()(),Ac(1039,`p`),vN(1040,`Define que a propriedade `),Ac(1041,`code`),vN(1042,`property`),ug(),vN(1043,` é uma lista ou um objeto.`),ug(),Ac(1044,`blockquote`)(1045,`p`),vN(1046,`Por padrão, espera-se que a lista ou o objeto esteja com as propriedades `),Ac(1047,`code`),vN(1048,`label`),ug(),vN(1049,` e `),Ac(1050,`code`),vN(1051,`value`),ug(),vN(1052,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),Ac(1053,`code`),vN(1054,`fieldLabel`),ug(),vN(1055,` e `),Ac(1056,`code`),vN(1057,`fieldValue`),ug(),vN(1058,`.
\xC9 ignorada caso a propriedade `),Ac(1059,`code`),vN(1060,`searchService`),ug(),vN(1061,` esteja sendo utilizada.`),ug()()()(),Ac(1062,`tr`,13)(1063,`td`,14)(1064,`div`,15)(1065,`span`,16),vN(1066,` key`),Kc(1067,`br`),ug()()(),Ac(1068,`td`,17)(1069,`code`,24),vN(1070,`boolean`),ug()(),Ac(1071,`td`,20)(1072,`em`)(1073,`strong`),vN(1074,`(opcional)`),ug()(),Ac(1075,`p`),vN(1076,`Identificador`),ug()()(),Ac(1077,`tr`,13)(1078,`td`,14)(1079,`div`,15)(1080,`span`,16),vN(1081,` label`),Kc(1082,`br`),ug()()(),Ac(1083,`td`,17)(1084,`code`,18),vN(1085,`string`),ug()(),Ac(1086,`td`,20)(1087,`em`)(1088,`strong`),vN(1089,`(opcional)`),ug()(),Ac(1090,`p`),vN(1091,`Rótulo do campo exibido.`),ug(),Ac(1092,`p`),vN(1093,`Caso não seja informado, será utilizado como `),Ac(1094,`code`),vN(1095,`label`),ug(),vN(1096,` o valor da propriedade `),Ac(1097,`code`),vN(1098,`property`),ug(),vN(1099,` com a primeira letra em maiúsculo.`),ug()()(),Ac(1100,`tr`,13)(1101,`td`,14)(1102,`div`,15)(1103,`span`,16),vN(1104,` offsetColumns`),Kc(1105,`br`),ug()()(),Ac(1106,`td`,17)(1107,`code`,47),vN(1108,`number`),ug()(),Ac(1109,`td`,20)(1110,`em`)(1111,`strong`),vN(1112,`(opcional)`),ug()(),Ac(1113,`p`),vN(1114,`Tamanho do espaço de exibição do campo em telas.`),ug(),Ac(1115,`p`),vN(1116,`Deve ser usado o sistema de `),Ac(1117,`strong`),vN(1118,`grid`),ug(),vN(1119,` do PO (1 ... 12 colunas).`),ug(),Ac(1120,`blockquote`)(1121,`p`),vN(1122,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),ug()()()(),Ac(1123,`tr`,13)(1124,`td`,14)(1125,`div`,15)(1126,`span`,16),vN(1127,` offsetLgColumns`),Kc(1128,`br`),ug()()(),Ac(1129,`td`,17)(1130,`code`,47),vN(1131,`number`),ug()(),Ac(1132,`td`,20)(1133,`em`)(1134,`strong`),vN(1135,`(opcional)`),ug()(),Ac(1136,`p`),vN(1137,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),ug(),Ac(1138,`p`),vN(1139,`Deve ser usado o sistema de `),Ac(1140,`strong`),vN(1141,`grid`),ug(),vN(1142,` do PO (1 ... 12 colunas).`),ug(),Ac(1143,`blockquote`)(1144,`p`),vN(1145,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(1146,`code`),vN(1147,`offsetColumns`),ug(),vN(1148,`.`),ug()()()(),Ac(1149,`tr`,13)(1150,`td`,14)(1151,`div`,15)(1152,`span`,16),vN(1153,` offsetMdColumns`),Kc(1154,`br`),ug()()(),Ac(1155,`td`,17)(1156,`code`,47),vN(1157,`number`),ug()(),Ac(1158,`td`,20)(1159,`em`)(1160,`strong`),vN(1161,`(opcional)`),ug()(),Ac(1162,`p`),vN(1163,`Tamanho do espaço de exibição do campo em telas médias (md).`),ug(),Ac(1164,`p`),vN(1165,`Deve ser usado o sistema de `),Ac(1166,`strong`),vN(1167,`grid`),ug(),vN(1168,` do PO (1 ... 12 colunas).`),ug(),Ac(1169,`blockquote`)(1170,`p`),vN(1171,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(1172,`code`),vN(1173,`offsetColumns`),ug(),vN(1174,`.`),ug()()()(),Ac(1175,`tr`,13)(1176,`td`,14)(1177,`div`,15)(1178,`span`,16),vN(1179,` offsetSmColumns`),Kc(1180,`br`),ug()()(),Ac(1181,`td`,17)(1182,`code`,47),vN(1183,`number`),ug()(),Ac(1184,`td`,20)(1185,`em`)(1186,`strong`),vN(1187,`(opcional)`),ug()(),Ac(1188,`p`),vN(1189,`Tamanho do espaço de exibição do campo em telas menores (sm).`),ug(),Ac(1190,`p`),vN(1191,`Deve ser usado o sistema de `),Ac(1192,`strong`),vN(1193,`grid`),ug(),vN(1194,` do PO (1 ... 12 colunas).`),ug(),Ac(1195,`blockquote`)(1196,`p`),vN(1197,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(1198,`code`),vN(1199,`offsetColumns`),ug(),vN(1200,`.`),ug()()()(),Ac(1201,`tr`,13)(1202,`td`,14)(1203,`div`,15)(1204,`span`,16),vN(1205,` offsetXlColumns`),Kc(1206,`br`),ug()()(),Ac(1207,`td`,17)(1208,`code`,47),vN(1209,`number`),ug()(),Ac(1210,`td`,20)(1211,`em`)(1212,`strong`),vN(1213,`(opcional)`),ug()(),Ac(1214,`p`),vN(1215,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),ug(),Ac(1216,`p`),vN(1217,`Deve ser usado o sistema de `),Ac(1218,`strong`),vN(1219,`grid`),ug(),vN(1220,` do PO (1 ... 12 colunas).`),ug(),Ac(1221,`blockquote`)(1222,`p`),vN(1223,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(1224,`code`),vN(1225,`offsetColumns`),ug(),vN(1226,`.`),ug()()()(),Ac(1227,`tr`,13)(1228,`td`,14)(1229,`div`,15)(1230,`span`,16),vN(1231,` options`),Kc(1232,`br`),ug()()(),Ac(1233,`td`,17)(1234,`code`,49),vN(1235,`Array<{ label: string; value: string `),ug(),Ac(1236,`code`,50),vN(1237,` number;
}>`),ug()(),Ac(1238,`td`,20)(1239,`em`)(1240,`strong`),vN(1241,`(opcional)`),ug()(),Ac(1242,`p`),vN(1243,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),ug(),Ac(1244,`p`),vN(1245,`Exemplo de utilização:`),ug(),Ac(1246,`pre`)(1247,`code`),vN(1248,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),ug()(),Ac(1249,`pre`)(1250,`code`),vN(1251,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),ug()()()(),Ac(1252,`tr`,13)(1253,`td`,14)(1254,`div`,15)(1255,`span`,16),vN(1256,` optionsMulti`),Kc(1257,`br`),ug()()(),Ac(1258,`td`,17)(1259,`code`,24),vN(1260,`boolean`),ug()(),Ac(1261,`td`,20)(1262,`em`)(1263,`strong`),vN(1264,`(opcional)`),ug()(),Ac(1265,`p`),vN(1266,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),ug()()(),Ac(1267,`tr`,13)(1268,`td`,14)(1269,`div`,15)(1270,`span`,16),vN(1271,` optionsService`),Kc(1272,`br`),ug()()(),Ac(1273,`td`,17)(1274,`code`,18),vN(1275,`string `),ug(),Ac(1276,`code`,51),vN(1277,` PoComboFilter `),ug(),Ac(1278,`code`,52),vN(1279,` PoMultiselectFilter`),ug()(),Ac(1280,`td`,20)(1281,`em`)(1282,`strong`),vN(1283,`(opcional)`),ug()(),Ac(1284,`p`),vN(1285,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Ac(1286,`strong`),vN(1287,`Importante`),ug()(),Ac(1288,`blockquote`)(1289,`p`),vN(1290,`Para que funcione corretamente, é importante que o serviço siga o `),Ac(1291,`a`,53),vN(1292,`guia de API do PO UI`),ug(),vN(1293,`.`),ug()()()(),Ac(1294,`tr`,13)(1295,`td`,14)(1296,`div`,15)(1297,`span`,16),vN(1298,` order`),Kc(1299,`br`),ug()()(),Ac(1300,`td`,17)(1301,`code`,47),vN(1302,`number`),ug()(),Ac(1303,`td`,20)(1304,`em`)(1305,`strong`),vN(1306,`(opcional)`),ug()(),Ac(1307,`p`),vN(1308,`Informa a ordem de exibição do campo.`),ug(),Ac(1309,`p`),vN(1310,`Exemplo de utilização:`),ug(),Ac(1311,`pre`)(1312,`code`),vN(1313,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),ug()(),Ac(1314,`p`),vN(1315,`Na exibição a ordem ficará dessa forma:`),ug(),Ac(1316,`pre`)(1317,`code`),vN(1318,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),ug()(),Ac(1319,`p`),vN(1320,`Só serão aceitos valores com números inteiros maiores do que zero.`),ug(),Ac(1321,`p`),vN(1322,`Campos sem `),Ac(1323,`code`),vN(1324,`order`),ug(),vN(1325,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),ug()()(),Ac(1326,`tr`,13)(1327,`td`,14)(1328,`div`,15)(1329,`span`,16),vN(1330,` params`),Kc(1331,`br`),ug()()(),Ac(1332,`td`,17)(1333,`code`,54),vN(1334,`any`),ug()(),Ac(1335,`td`,20)(1336,`em`)(1337,`strong`),vN(1338,`(opcional)`),ug()(),Ac(1339,`p`),vN(1340,`Objeto que será enviado como parâmetro nas requisições de busca `),Ac(1341,`code`),vN(1342,`searchService`),ug(),vN(1343,` ou `),Ac(1344,`code`),vN(1345,`optionsService`),ug(),vN(1346,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),ug(),Ac(1347,`p`),vN(1348,`Por exemplo, para o parâmetro `),Ac(1349,`code`),vN(1350,`{ age: 23 }`),ug(),vN(1351,` a URL da requisição ficaria:`),ug(),Ac(1352,`p`)(1353,`code`),vN(1354,`url + /1?age=23`),ug()()()(),Ac(1355,`tr`,13)(1356,`td`,14)(1357,`div`,15)(1358,`span`,16),vN(1359,` property`),Kc(1360,`br`),ug()()(),Ac(1361,`td`,17)(1362,`code`,18),vN(1363,`string`),ug()(),Ac(1364,`td`,20)(1365,`p`),vN(1366,`Nome de referência do campo.`),ug()()(),Ac(1367,`tr`,13)(1368,`td`,14)(1369,`div`,15)(1370,`span`,16),vN(1371,` searchService`),Kc(1372,`br`),ug()()(),Ac(1373,`td`,17)(1374,`code`,18),vN(1375,`string `),ug(),Ac(1376,`code`,55),vN(1377,` PoDynamicViewRequest`),ug()(),Ac(1378,`td`,20)(1379,`em`)(1380,`strong`),vN(1381,`(opcional)`),ug()(),Ac(1382,`p`),vN(1383,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),Ac(1384,`strong`),vN(1385,`Importante:`),ug()(),Ac(1386,`blockquote`)(1387,`p`),vN(1388,`A propriedade `),Ac(1389,`code`),vN(1390,`property`),ug(),vN(1391,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Ac(1392,`a`,53),vN(1393,`guia de API do PO UI`),ug(),vN(1394,`.`),ug()()()(),Ac(1395,`tr`,13)(1396,`td`,14)(1397,`div`,15)(1398,`span`,16),vN(1399,` tag`),Kc(1400,`br`),ug()()(),Ac(1401,`td`,17)(1402,`code`,24),vN(1403,`boolean`),ug()(),Ac(1404,`td`,20)(1405,`em`)(1406,`strong`),vN(1407,`(opcional)`),ug()(),Ac(1408,`p`),vN(1409,`Indica se o campo será um `),Ac(1410,`code`),vN(1411,`po-tag`),ug(),vN(1412,`.`),ug()()(),Ac(1413,`tr`,13)(1414,`td`,14)(1415,`div`,15)(1416,`span`,16),vN(1417,` textColor`),Kc(1418,`br`),ug()()(),Ac(1419,`td`,17)(1420,`code`,18),vN(1421,`string`),ug()(),Ac(1422,`td`,20)(1423,`em`)(1424,`strong`),vN(1425,`(opcional)`),ug()(),Ac(1426,`p`),vN(1427,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),ug(),Ac(1428,`ul`)(1429,`li`),vN(1430,`Hexadeximal, por exemplo `),Ac(1431,`code`),vN(1432,`#c64840`),ug(),vN(1433,`;`),ug(),Ac(1434,`li`),vN(1435,`RGB, como `),Ac(1436,`code`),vN(1437,`rgb(0, 0, 165)`),ug(),vN(1438,`;`),ug(),Ac(1439,`li`),vN(1440,`O nome da cor, por exemplo `),Ac(1441,`code`),vN(1442,`blue`),ug(),vN(1443,`;`),ug()()()(),Ac(1444,`tr`,13)(1445,`td`,14)(1446,`div`,15)(1447,`span`,16),vN(1448,` type`),Kc(1449,`br`),ug()()(),Ac(1450,`td`,17)(1451,`code`,18),vN(1452,`string `),ug(),Ac(1453,`code`,56),vN(1454,` PoDynamicFieldType`),ug()(),Ac(1455,`td`,20)(1456,`em`)(1457,`strong`),vN(1458,`(opcional)`),ug()(),Ac(1459,`p`),vN(1460,`Tipo do valor campo.`),ug(),Ac(1461,`p`),vN(1462,`Valores válidos:`),ug(),Ac(1463,`ul`)(1464,`li`)(1465,`code`),vN(1466,`boolean`),ug(),vN(1467,`: Valores `),Ac(1468,`em`),vN(1469,`booleanos`),ug(),vN(1470,`.`),ug(),Ac(1471,`li`)(1472,`code`),vN(1473,`currency`),ug(),vN(1474,`: Valores monetários.`),ug(),Ac(1475,`li`)(1476,`code`),vN(1477,`decimal`),ug(),vN(1478,`: Valores decimais.`),ug(),Ac(1479,`li`)(1480,`code`),vN(1481,`date`),ug(),vN(1482,`: Valores de datas.`),Ac(1483,`ul`)(1484,`li`),vN(1485,`Aceita os tipos `),Ac(1486,`strong`),vN(1487,`string`),ug(),vN(1488,` e `),Ac(1489,`strong`),vN(1490,`Date`),ug(),vN(1491,` padr\xE3o do Javascript,
por exemplo: `),Ac(1492,`code`),vN(1493,`'2017-11-28'`),ug(),vN(1494,` ou `),Ac(1495,`code`),vN(1496,`new Date(2017, 10, 28)`),ug(),vN(1497,`.`),ug()()(),Ac(1498,`li`)(1499,`code`),vN(1500,`dateTime`),ug(),vN(1501,`: Valor de data com horário.`),Ac(1502,`ul`)(1503,`li`),vN(1504,`Aceita o tipo `),Ac(1505,`em`),vN(1506,`string`),ug(),vN(1507,` no formato `),Ac(1508,`strong`),vN(1509,`ISO-8601`),ug(),vN(1510,` extendido `),Ac(1511,`strong`),vN(1512,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),ug(),vN(1513,`
e o tipo `),Ac(1514,`strong`),vN(1515,`Date`),ug(),vN(1516,` padrão do Javascript, por exemplo: `),Ac(1517,`code`),vN(1518,`'2017-11-28T00:00:00-02:00'`),ug(),vN(1519,` ou `),Ac(1520,`code`),vN(1521,`new Date(2017, 10, 28)`),ug(),vN(1522,`.`),ug()()(),Ac(1523,`li`)(1524,`code`),vN(1525,`number`),ug(),vN(1526,`: Valores numéricos.`),ug(),Ac(1527,`li`)(1528,`code`),vN(1529,`string`),ug(),vN(1530,`: Textos.`),ug(),Ac(1531,`li`)(1532,`code`),vN(1533,`time`),ug(),vN(1534,`: Valor do horário.`),Ac(1535,`ul`)(1536,`li`),vN(1537,`Aceita o tipo `),Ac(1538,`strong`),vN(1539,`string`),ug(),vN(1540,` nos formatos `),Ac(1541,`strong`),vN(1542,`'HH:mm:ss'`),ug(),vN(1543,` ou `),Ac(1544,`strong`),vN(1545,`'HH:mm:ss.ffffff'`),ug(),vN(1546,`, por exemplo: `),Ac(1547,`code`),vN(1548,`'23:12:45'`),ug(),vN(1549,`.`),ug()()()()()(),Ac(1550,`tr`,13)(1551,`td`,14)(1552,`div`,15)(1553,`span`,16),vN(1554,` visible`),Kc(1555,`br`),ug()()(),Ac(1556,`td`,17)(1557,`code`,24),vN(1558,`boolean`),ug()(),Ac(1559,`td`,20)(1560,`em`)(1561,`strong`),vN(1562,`(opcional)`),ug()(),Ac(1563,`p`),vN(1564,`Indica se o campo será visível.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Ee=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Dynamic View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,r){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return r.changeTab(`doc`)}),Kc(3,`sample-po-dynamic-view-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return r.changeTab(`web`)}),Kc(5,`sample-po-dynamic-view-basic-view`)(6,`sample-po-dynamic-view-employee-view`)(7,`sample-po-dynamic-view-employee-on-load-view`)(8,`sample-po-dynamic-view-container-view`),ug()()()),a&2&&(cE(`p-actions`,r.actions),Hp(2),cE(`p-active`,r.activeTab===`doc`),Hp(2),cE(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[Cze,cae,mae,N,G,W,Z,X],encapsulation:2,changeDetection:1})}return o})()}];var K=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[kL.forChild(Ee),kL]})}return o})();var Ke=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[Ta,K]})}return o})();export{Ke as DocPoDynamicViewModule};