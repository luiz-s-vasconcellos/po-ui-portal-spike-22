import{$r as Zn,Ca as zw,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Pr as R$1,Qn as Cn,Ri as nu,Vi as p,Xr as Y$1,Y as Kze,Yi as rg,ai as b,dt as Sae,fa as we,i as _a,ji as mO,mi as gO,pa as wg,r as Ta,ta as ue,wi as jE,wt as Wze,xi as ir,yi as iO,zr as Sn}from"./main-ADAH4OB5.js";var Y=()=>({property:`name`});var $=o=>[o];var ee=()=>({name:`Jhon`});var _=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-view-basic`]],standalone:!1,decls:1,vars:6,consts:[[3,`p-fields`,`p-value`]],template:function(a,r){a&1&&nu(0,`po-dynamic-view`,0),a&2&&jE(`p-fields`,mO(3,$,gO(2,Y)))(`p-value`,gO(5,ee))},dependencies:[Wze],encapsulation:2,changeDetection:1})}return o})();var ie=o=>({"docs-sample-code-tabs":o});var N=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-view-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dynamic View Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return r.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dynamic-view-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+r.sampleCodeButtonIcon),rg(),Ag(` `,r.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ie,r.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,_],encapsulation:2,changeDetection:1})}return o})();var R=(()=>{class o{fields=[{property:`name`,divider:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,divider:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`city`,label:`City`,divider:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`marriedStatus`,options:[{label:`MARRIED`,value:`1`}],label:`Marital status`,divider:`ADDITIONAL DATA`,tag:!0,color:`#C596E7`},{property:`children`,options:[{label:`yes `,value:`1`},{label:`no`,value:`2`}]},{property:`hobbies`,label:`Hobbies`,gridColumns:12,divider:`Additional Information`}];employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`São Paulo`,wage:8000.5,availability:`Available`,admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,marriedStatus:`1`,children:`1`,hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-view-employee`]],standalone:!1,decls:2,vars:3,consts:[[`p-title`,`Employee`],[3,`p-fields`,`p-value`,`p-text-wrap`]],template:function(a,r){a&1&&(jc(0,`po-page-default`,0),nu(1,`po-dynamic-view`,1),wg()),a&2&&(rg(),jE(`p-fields`,r.fields)(`p-value`,r.employee)(`p-text-wrap`,!0))},dependencies:[Wze,Kze],encapsulation:2,changeDetection:1})}return o})();var ae=o=>({"docs-sample-code-tabs":o});var G=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-view-employee-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dynamic View - Employee`),wg(),jc(4,`a`,2),mt(`click`,function(){return r.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dynamic-view-employee`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+r.sampleCodeButtonIcon),rg(),Ag(` `,r.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ae,r.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,R],encapsulation:2,changeDetection:1})}return o})();var O=(()=>{class o{httpClient=p(zw);headers=new Cn({"X-PO-No-Message":`true`});url;filterParams;getObjectByValue(l,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(Y$1(r=>`items`in r?r.items:r))}setConfig(l,a){this.url=l,this.filterParams=a}static ɵfac=function(a){return new(a||o)};static ɵprov=R$1({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var J=(()=>{class o{employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`A`,wage:8000.5,availability:`Available`,cities:[{city:`São Paulo`,id:`SP`},{city:`Joinville`,id:`SC`},{city:`Belo Horizonte`,id:`MG`}],admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,profile:`admin`,image:`https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg`};fields=[{property:`name`,divider:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,divider:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`cities`,isArrayOrObject:!0,fieldLabel:`city`,fieldValue:`id`,concatLabelValue:!0},{property:`city`,label:`City`,divider:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`image`,divider:`Image`,image:!0,alt:`image`,height:`250`}];_newService=p(O);ngOnInit(){this._newService.setConfig(`https://po-sample-api.onrender.com/v1/hotels`,{id:1485976673002})}customEmployeeData(){return{value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:`name`,divider:`Personal data by load customization`,order:1},{property:`cpf`,tag:!0,color:`color-07`,order:2},{property:`rg`,tag:!0,color:`color-07`,order:3},{property:`wage`,type:`string`,tag:!0,color:`color-07`},{property:`genre`,visible:!1},{property:`job`,tag:!1},{searchService:this._newService,fieldLabel:`address_city`,property:`city`}]}}checkProfile(){if(this.employee.profile===`admin`)return`confidential`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-view-employee-on-load`]],standalone:!1,features:[we([O])],decls:2,vars:3,consts:[[`p-title`,`Employee on Load`],[3,`p-fields`,`p-load`,`p-value`]],template:function(a,r){a&1&&(jc(0,`po-page-default`,0),nu(1,`po-dynamic-view`,1),wg()),a&2&&(rg(),jE(`p-fields`,r.fields)(`p-load`,r.customEmployeeData.bind(r))(`p-value`,r.employee))},dependencies:[Wze,Kze],encapsulation:2,changeDetection:1})}return o})();var me=o=>({"docs-sample-code-tabs":o});var W=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-view-employee-on-load-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dynamic View - Employee on load`),wg(),jc(4,`a`,2),mt(`click`,function(){return r.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-dynamic-view-employee-on-load`),wg(),nu(27,`hr`)),a&2&&(rg(5),qx(`po-icon `+r.sampleCodeButtonIcon),rg(),Ag(` `,r.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,me,r.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,J],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{fields=[{property:`name`,container:`Personal data`,gridColumns:4,order:1},{property:`age`,label:`Age`,gridColumns:4},{property:`genre`,gridColumns:4},{property:`cpf`,label:`CPF`,gridColumns:4,order:2},{property:`rg`,label:`RG`,gridColumns:4,order:3},{property:`graduation`,label:`Graduation`,gridColumns:4},{property:`company`,label:`Company`,container:`Work Data`},{property:`job`,tag:!0,icon:`an an-copy`},{property:`admissionDate`,label:`Admission date`,type:`date`},{property:`hoursPerDay`,label:`Hours per day`,type:`time`},{property:`wage`,label:`Wage`,type:`currency`},{property:`availability`,tag:!0,color:`#C596E7`,icon:`an an-check`},{property:`city`,label:`City`,container:`Address`},{property:`addressStreet`,label:`Street`},{property:`addressNumber`,label:`Number`},{property:`zipCode`,label:`Zip Code`},{property:`marriedStatus`,options:[{label:`MARRIED`,value:`1`}],label:`Marital status`,container:`ADDITIONAL DATA`,tag:!0,color:`#C596E7`},{property:`children`,options:[{label:`yes `,value:`1`},{label:`no`,value:`2`}]}];employee={name:`Jhon Doe`,age:`20`,rg:`9999999`,email:`jhon.doe@po-ui.com`,cpf:`999.999.999-99`,birthday:`1998-03-14T00:00:01-00:00`,graduation:`College Degree`,genre:`male`,company:`PO`,job:`Software Engineer`,addressStreet:`Avenida Braz Leme`,addressNumber:`1000`,zipCode:`02511-000`,city:`São Paulo`,wage:8000.5,availability:`Available`,admissionDate:`2014-10-14T13:45:00-00:00`,hoursPerDay:`08:30:00`,marriedStatus:`1`,children:`1`};static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-view-container`]],standalone:!1,decls:2,vars:2,consts:[[`p-title`,`Employee`],[3,`p-fields`,`p-value`]],template:function(a,r){a&1&&(jc(0,`po-page-default`,0),nu(1,`po-dynamic-view`,1),wg()),a&2&&(rg(),jE(`p-fields`,r.fields)(`p-value`,r.employee))},dependencies:[Wze,Kze],encapsulation:2,changeDetection:1})}return o})();var se=o=>({"docs-sample-code-tabs":o});var Z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-view-container-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dynamic View - Employee on load`),wg(),jc(4,`a`,2),mt(`click`,function(){return r.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dynamic-view-container`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+r.sampleCodeButtonIcon),rg(),Ag(` `,r.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,se,r.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,U],encapsulation:2,changeDetection:1})}return o})();var X=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-view-doc`]],standalone:!1,decls:1565,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicViewField[]`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`object`],[1,`docs-api-h4`,`docs-api-class-name`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`],[1,`dot`,`po-color-01`],[1,`dot`,`po-color-02`],[1,`dot`,`po-color-03`],[1,`dot`,`po-color-04`],[1,`dot`,`po-color-05`],[1,`dot`,`po-color-06`],[1,`dot`,`po-color-07`],[1,`dot`,`po-color-08`],[1,`dot`,`po-color-09`],[1,`dot`,`po-color-10`],[1,`dot`,`po-color-11`],[1,`dot`,`po-color-12`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`href`,`https://angular.io/api/common/CurrencyPipe`],[`href`,`https://angular.io/api/common/DatePipe`],[`href`,`https://angular.io/api/common/DecimalPipe`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<{`,`label:`,`string;`,`value:`,`string`],[`pan`,``,1,`docs-api-property-type`,`number;`,`}>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`any`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicViewRequest`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`]],template:function(a,r){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoDynamicModule } from '@po-ui/ng-components';`),wg()(),nu(4,`div`,2),jc(5,`h3`,3),iO(6,`Componente`),wg(),jc(7,`h4`,4)(8,`code`,5),iO(9,`PoDynamicViewComponent`),wg()(),jc(10,`div`,2)(11,`p`),iO(12,`Componente para listar dados dinamicamente a partir de uma lista de objetos.`),wg(),jc(13,`blockquote`)(14,`p`),iO(15,`Por padrão esse componente cria `),jc(16,`code`),iO(17,`po-info`),wg(),iO(18,` para exibição, é possível criar `),jc(19,`code`),iO(20,`po-tag`),wg(),iO(21,` passando a propriedade { tag: true }. `),wg()()(),jc(22,`div`,6)(23,`h4`,7),iO(24,`Seletor`),wg(),jc(25,`pre`,8),iO(26,`<po-dynamic-view
    p-components-size="string"
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),wg()(),jc(27,`h4`,9),iO(28,`Propriedades`),wg(),jc(29,`table`,10)(30,`tr`,11)(31,`th`,12),iO(32,`Nome`),wg(),jc(33,`th`,12),iO(34,`Tipo`),wg(),jc(35,`th`,12),iO(36,`Padrão`),wg(),jc(37,`th`,12),iO(38,`Descrição`),wg()(),jc(39,`tr`,13)(40,`td`,14)(41,`div`,15)(42,`span`,16),iO(43,` p-components-size`),nu(44,`br`),wg()()(),jc(45,`td`,17)(46,`code`,18),iO(47,`string`),wg()(),jc(48,`td`,19)(49,`p`)(50,`code`),iO(51,`medium`),wg()()(),jc(52,`td`,20)(53,`em`)(54,`strong`),iO(55,`(opcional)`),wg()(),jc(56,`p`),iO(57,`Define o tamanho dos componentes no template entre `),jc(58,`code`),iO(59,`small`),wg(),iO(60,` ou `),jc(61,`code`),iO(62,`medium`),wg(),iO(63,`.`),wg(),jc(64,`blockquote`)(65,`p`),iO(66,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(67,`code`),iO(68,`medium`),wg(),iO(69,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(70,`a`,21),iO(71,`po-theme`),wg(),iO(72,`.`),wg()()()(),jc(73,`tr`,13)(74,`td`,14)(75,`div`,15)(76,`span`,16),iO(77,` p-fields`),nu(78,`br`),wg()()(),jc(79,`td`,17)(80,`code`,22),iO(81,`PoDynamicViewField[]`),wg()(),jc(82,`td`,19)(83,`p`)(84,`code`),iO(85,`[]`),wg()()(),jc(86,`td`,20)(87,`em`)(88,`strong`),iO(89,`(opcional)`),wg()(),jc(90,`p`),iO(91,`Lista de objetos que implementam a interface `),jc(92,`code`),iO(93,`PoDynamicView`),wg(),iO(94,`.`),wg(),jc(95,`blockquote`)(96,`p`),iO(97,`Ex: `),jc(98,`code`),iO(99,`[ { property: 'age' } ]`),wg()()(),jc(100,`p`),iO(101,`Regras de tipagem e formatação dos valores exibidos:`),wg(),jc(102,`ul`)(103,`li`),iO(104,`Caso o `),jc(105,`em`),iO(106,`type`),wg(),iO(107,` informado seja `),jc(108,`em`),iO(109,`currency`),wg(),iO(110,` e não seja informado o `),jc(111,`em`),iO(112,`format`),wg(),iO(113,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),wg(),jc(114,`li`),iO(115,`Caso o `),jc(116,`em`),iO(117,`type`),wg(),iO(118,` informado seja `),jc(119,`em`),iO(120,`date`),wg(),iO(121,` e não seja informado o `),jc(122,`em`),iO(123,`format`),wg(),iO(124,` o mesmo recebe 'dd/MM/yyyy' como formato padrão.`),wg(),jc(125,`li`),iO(126,`Caso o `),jc(127,`em`),iO(128,`type`),wg(),iO(129,` informado seja `),jc(130,`em`),iO(131,`dateTime`),wg(),iO(132,` e não seja informado o `),jc(133,`em`),iO(134,`format`),wg(),iO(135,` o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padrão.`),wg(),jc(136,`li`),iO(137,`Caso o `),jc(138,`em`),iO(139,`type`),wg(),iO(140,` informado seja `),jc(141,`em`),iO(142,`number`),wg(),iO(143,` e não seja informado o `),jc(144,`em`),iO(145,`format`),wg(),iO(146,` o mesmo não será formatado.`),wg(),jc(147,`li`),iO(148,`Caso o `),jc(149,`em`),iO(150,`type`),wg(),iO(151,` informado seja `),jc(152,`em`),iO(153,`time`),wg(),iO(154,` e não seja informado o `),jc(155,`em`),iO(156,`format`),wg(),iO(157,` o mesmo recebe 'HH:mm:ss.ffffff' como formato padrão.`),wg()(),jc(158,`blockquote`)(159,`p`),iO(160,`As propriedades informadas serão exibidas mesmo não contendo valor de referência no objeto da propriedade `),jc(161,`code`),iO(162,`p-value`),wg(),iO(163,`.`),wg()()()(),jc(164,`tr`,13)(165,`td`,14)(166,`div`,15)(167,`span`,16),iO(168,` p-load`),nu(169,`br`),wg()()(),jc(170,`td`,17)(171,`code`,18),iO(172,`string `),wg(),jc(173,`code`,23),iO(174,` Function`),wg()(),jc(175,`td`,19),iO(176,`-`),wg(),jc(177,`td`,20)(178,`em`)(179,`strong`),iO(180,`(opcional)`),wg()(),jc(181,`p`),iO(182,`Possibilita executar uma função quando o componente é inicializado.`),wg(),jc(183,`p`),iO(184,`A propriedade aceita os seguintes tipos:`),wg(),jc(185,`ul`)(186,`li`)(187,`strong`),iO(188,`String`),wg(),iO(189,`: Endpoint usado pelo componente para requisição via `),jc(190,`code`),iO(191,`POST`),wg(),iO(192,`.`),wg(),jc(193,`li`)(194,`strong`),iO(195,`Function`),wg(),iO(196,`: Método que será executado na inicialização do componente.`),wg()(),jc(197,`p`),iO(198,`Para os dois tipos de utilização da propriedade espera-se o seguinte retorno:`),wg(),jc(199,`pre`)(200,`code`),iO(201,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),wg()(),jc(202,`blockquote`)(203,`p`)(204,`strong`),iO(205,`value`),wg(),iO(206,`: any = atribui novo valor do model.`),wg()(),jc(207,`blockquote`)(208,`p`)(209,`strong`),iO(210,`fields`),wg(),iO(211,`: `),jc(212,`code`),iO(213,`Array<PoDynamicViewField>`),wg(),iO(214,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),wg()(),jc(215,`ul`)(216,`li`),iO(217,`Para esconder/remover campos precisa informar no field a propriedade `),jc(218,`code`),iO(219,`visible = false`),wg(),iO(220,`.`),wg()()()(),jc(221,`tr`,13)(222,`td`,14)(223,`div`,15)(224,`span`,16),iO(225,` p-show-all-value`),nu(226,`br`),wg()()(),jc(227,`td`,17)(228,`code`,24),iO(229,`boolean`),wg()(),jc(230,`td`,19)(231,`p`)(232,`code`),iO(233,`false`),wg()()(),jc(234,`td`,20)(235,`em`)(236,`strong`),iO(237,`(opcional)`),wg()(),jc(238,`p`),iO(239,`Indica se exibirá todas as informações contidas dentro do objeto informado na propriedade `),jc(240,`code`),iO(241,`p-value`),wg(),iO(242,`.`),wg()()(),jc(243,`tr`,13)(244,`td`,14)(245,`div`,15)(246,`span`,16),iO(247,` p-text-wrap`),nu(248,`br`),wg()()(),jc(249,`td`,17)(250,`code`,24),iO(251,`boolean`),wg()(),jc(252,`td`,19)(253,`p`)(254,`code`),iO(255,`false`),wg()()(),jc(256,`td`,20)(257,`em`)(258,`strong`),iO(259,`(opcional)`),wg()(),jc(260,`p`),iO(261,`Permite a quebra de linha no texto do `),jc(262,`code`),iO(263,`p-value`),wg(),iO(264,`, aplicando-a onde há `),jc(265,`code`),iO(266,`\\n`),wg(),iO(267,`.`),wg(),jc(268,`pre`)(269,`code`),iO(270,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),wg()(),jc(271,`p`),iO(272,`Saída:`),wg(),jc(273,`pre`)(274,`code`),iO(275,`Primeira linha
Segunda linha
`),wg()()()(),jc(276,`tr`,13)(277,`td`,14)(278,`div`,15)(279,`span`,16),iO(280,` p-value`),nu(281,`br`),wg()()(),jc(282,`td`,17)(283,`code`,25),iO(284,`object`),wg()(),jc(285,`td`,19),iO(286,`-`),wg(),jc(287,`td`,20)(288,`p`),iO(289,`Objeto que será utilizado para exibir as informações dinâmicas, o valor será recuperado através do atributo `),jc(290,`em`),iO(291,`property`),wg(),iO(292,`
dos objetos contidos na propridade `),jc(293,`code`),iO(294,`p-fields`),wg(),iO(295,`.`),wg(),jc(296,`blockquote`)(297,`p`),iO(298,`Ex: `),jc(299,`code`),iO(300,`{ age: '35' }`),wg()()()()()(),jc(301,`h3`),iO(302,`Interfaces`),wg(),jc(303,`h4`,26)(304,`code`,5),iO(305,`PoDynamicViewRequest`),wg()(),jc(306,`div`,2)(307,`p`),iO(308,`Define o tipo de busca customizada para um campo em específico.`),wg()(),jc(309,`h4`,9),iO(310,`Métodos`),wg(),jc(311,`table`,27)(312,`tr`,13)(313,`th`,28)(314,`div`,15)(315,`h4`)(316,`span`,16),iO(317,` getObjectByValue `),wg()()()()(),jc(318,`tr`,20)(319,`td`,20)(320,`p`),iO(321,`Método responsável por enviar um valor que será buscado no serviço.`),wg()()()(),jc(322,`h5`)(323,`b`),iO(324,`Parâmetros`),wg()(),jc(325,`table`,10)(326,`tr`,11)(327,`th`,12),iO(328,`Nome`),wg(),jc(329,`th`,12),iO(330,`Tipo`),wg(),jc(331,`th`,12),iO(332,`Descrição`),wg()(),jc(333,`tr`,13)(334,`td`,14),iO(335,` value`),wg(),jc(336,`td`,17)(337,`code`,18),iO(338,` string `),wg(),jc(339,`code`,29),iO(340,` Array<any> `),wg()(),jc(341,`td`,20)(342,`p`),iO(343,`Valor único a ser buscado na fonte de dados.`),wg()()(),jc(344,`tr`,13)(345,`td`,14),iO(346,` filterParams`),wg(),jc(347,`td`,17)(348,`code`,30),iO(349,` any `),wg()(),jc(350,`td`,20)(351,`p`),iO(352,`Valor opcional para informar filtros customizados.`),wg()()()(),nu(353,`br`),jc(354,`h4`,26)(355,`code`,5),iO(356,`PoDynamicViewField`),wg()(),jc(357,`div`,2)(358,`p`),iO(359,` Interface para definição das propriedades dos campos de visualização que serão criados dinamicamente.`),wg()(),jc(360,`h4`,9),iO(361,`Propriedades`),wg(),jc(362,`table`,10)(363,`tr`,11)(364,`th`,12),iO(365,`Nome`),wg(),jc(366,`th`,12),iO(367,`Tipo`),wg(),jc(368,`th`,12),iO(369,`Descrição`),wg()(),jc(370,`tr`,13)(371,`td`,14)(372,`div`,15)(373,`span`,16),iO(374,` alt`),nu(375,`br`),wg()()(),jc(376,`td`,17)(377,`code`,18),iO(378,`string`),wg()(),jc(379,`td`,20)(380,`em`)(381,`strong`),iO(382,`(opcional)`),wg()(),jc(383,`p`),iO(384,`Defini o texto alternativo descrevendo a imagem.`),wg(),jc(385,`p`),iO(386,`Exemplo de utilização:`),wg(),jc(387,`pre`)(388,`code`),iO(389,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),wg()(),jc(390,`p`)(391,`strong`),iO(392,`Componentes compatíveis:`),wg(),jc(393,`code`),iO(394,`po-image`),wg(),iO(395,`.`),wg()()(),jc(396,`tr`,13)(397,`td`,14)(398,`div`,15)(399,`span`,16),iO(400,` booleanFalse`),nu(401,`br`),wg()()(),jc(402,`td`,17)(403,`code`,18),iO(404,`string`),wg()(),jc(405,`td`,20)(406,`em`)(407,`strong`),iO(408,`(opcional)`),wg()(),jc(409,`p`),iO(410,`Texto exibido quando o valor do componente for `),jc(411,`em`),iO(412,`false`),wg(),iO(413,`.`),wg()()(),jc(414,`tr`,13)(415,`td`,14)(416,`div`,15)(417,`span`,16),iO(418,` booleanTrue`),nu(419,`br`),wg()()(),jc(420,`td`,17)(421,`code`,18),iO(422,`string`),wg()(),jc(423,`td`,20)(424,`em`)(425,`strong`),iO(426,`(opcional)`),wg()(),jc(427,`p`),iO(428,`Texto exibido quando o valor do componente for `),jc(429,`em`),iO(430,`true`),wg(),iO(431,`.`),wg()()(),jc(432,`tr`,13)(433,`td`,14)(434,`div`,15)(435,`span`,16),iO(436,` color`),nu(437,`br`),wg()()(),jc(438,`td`,17)(439,`code`,18),iO(440,`string`),wg()(),jc(441,`td`,20)(442,`em`)(443,`strong`),iO(444,`(opcional)`),wg()(),jc(445,`p`),iO(446,`Determina a cor da tag. As maneiras de customizar as cores são:`),wg(),jc(447,`ul`)(448,`li`),iO(449,`Hexadeximal, por exemplo `),jc(450,`code`),iO(451,`#c64840`),wg(),iO(452,`;`),wg(),jc(453,`li`),iO(454,`RGB, como `),jc(455,`code`),iO(456,`rgb(0, 0, 165)`),wg(),iO(457,`;`),wg(),jc(458,`li`),iO(459,`O nome da cor, por exemplo `),jc(460,`code`),iO(461,`blue`),wg(),iO(462,`;`),wg(),jc(463,`li`),iO(464,`Usando uma das cores do tema do PO:`),wg(),jc(465,`li`),iO(466,`Valores válidos:`),jc(467,`ul`)(468,`li`),nu(469,`span`,31),jc(470,`code`),iO(471,`color-01`),wg()(),jc(472,`li`),nu(473,`span`,32),jc(474,`code`),iO(475,`color-02`),wg()(),jc(476,`li`),nu(477,`span`,33),jc(478,`code`),iO(479,`color-03`),wg()(),jc(480,`li`),nu(481,`span`,34),jc(482,`code`),iO(483,`color-04`),wg()(),jc(484,`li`),nu(485,`span`,35),jc(486,`code`),iO(487,`color-05`),wg()(),jc(488,`li`),nu(489,`span`,36),jc(490,`code`),iO(491,`color-06`),wg()(),jc(492,`li`),nu(493,`span`,37),jc(494,`code`),iO(495,`color-07`),wg()(),jc(496,`li`),nu(497,`span`,38),jc(498,`code`),iO(499,`color-08`),wg()(),jc(500,`li`),nu(501,`span`,39),jc(502,`code`),iO(503,`color-09`),wg()(),jc(504,`li`),nu(505,`span`,40),jc(506,`code`),iO(507,`color-10`),wg()(),jc(508,`li`),nu(509,`span`,41),jc(510,`code`),iO(511,`color-11`),wg()(),jc(512,`li`),nu(513,`span`,42),jc(514,`code`),iO(515,`color-12`),wg()()()()()()(),jc(516,`tr`,13)(517,`td`,14)(518,`div`,15)(519,`span`,16),iO(520,` concatLabelValue`),nu(521,`br`),wg()()(),jc(522,`td`,17)(523,`code`,24),iO(524,`boolean`),wg()(),jc(525,`td`,20)(526,`em`)(527,`strong`),iO(528,`(opcional)`),wg()(),jc(529,`p`),iO(530,`Permite que seja exibido em tela, de forma concatenada as propriedades `),jc(531,`code`),iO(532,`fieldLabel`),wg(),iO(533,` + `),jc(534,`code`),iO(535,`fieldValue`),wg(),iO(536,`.
A ordem sempre ser\xE1 `),jc(537,`code`),iO(538,`fieldLabel`),wg(),iO(539,` e depois `),jc(540,`code`),iO(541,`fieldValue`),wg(),iO(542,`, não sendo possível alterar.`),wg(),jc(543,`blockquote`)(544,`p`),iO(545,`Propriedade funciona corretamente caso as propriedades `),jc(546,`code`),iO(547,`fieldLabel`),wg(),iO(548,` e `),jc(549,`code`),iO(550,`fielValue`),wg(),iO(551,` sejam válidas.`),wg()()()(),jc(552,`tr`,13)(553,`td`,14)(554,`div`,15)(555,`span`,16),iO(556,` container`),nu(557,`br`),wg()()(),jc(558,`td`,17)(559,`code`,18),iO(560,`string`),wg()(),jc(561,`td`,20)(562,`em`)(563,`strong`),iO(564,`(opcional)`),wg()(),jc(565,`p`),iO(566,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),wg(),jc(567,`p`),iO(568,`Está propriedade é do tipo string, o valor que será titulo do contianer`),wg()()(),jc(569,`tr`,13)(570,`td`,14)(571,`div`,15)(572,`span`,16),iO(573,` divider`),nu(574,`br`),wg()()(),jc(575,`td`,17)(576,`code`,18),iO(577,`string`),wg()(),jc(578,`td`,20)(579,`em`)(580,`strong`),iO(581,`(opcional)`),wg()(),jc(582,`p`),iO(583,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),wg()()(),jc(584,`tr`,13)(585,`td`,14)(586,`div`,15)(587,`span`,16),iO(588,` fieldLabel`),nu(589,`br`),wg()()(),jc(590,`td`,17)(591,`code`,18),iO(592,`string`),wg()(),jc(593,`td`,20)(594,`em`)(595,`strong`),iO(596,`(opcional)`),wg()(),jc(597,`p`),iO(598,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),wg(),jc(599,`p`),iO(600,`O valor padrão é: `),jc(601,`code`),iO(602,`label`),wg(),iO(603,`.`),wg()()(),jc(604,`tr`,13)(605,`td`,14)(606,`div`,15)(607,`span`,16),iO(608,` fieldValue`),nu(609,`br`),wg()()(),jc(610,`td`,17)(611,`code`,18),iO(612,`string`),wg()(),jc(613,`td`,20)(614,`em`)(615,`strong`),iO(616,`(opcional)`),wg()(),jc(617,`p`),iO(618,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),wg(),jc(619,`p`),iO(620,`O valor padrão é: `),jc(621,`code`),iO(622,`value`),wg(),iO(623,`.`),wg()()(),jc(624,`tr`,13)(625,`td`,14)(626,`div`,15)(627,`span`,16),iO(628,` format`),nu(629,`br`),wg()()(),jc(630,`td`,17)(631,`code`,18),iO(632,`string `),wg(),jc(633,`code`,43),iO(634,` Array<string>`),wg()(),jc(635,`td`,20)(636,`em`)(637,`strong`),iO(638,`(opcional)`),wg()(),jc(639,`p`),iO(640,`Define o formato de exibição para o valor de um campo.`),wg(),jc(641,`ul`)(642,`li`)(643,`p`),iO(644,`Quando `),jc(645,`code`),iO(646,`format`),wg(),iO(647,` é uma `),jc(648,`code`),iO(649,`string`),wg(),iO(650,`, o formato aplicado depende da propriedade `),jc(651,`strong`),iO(652,`type`),wg(),iO(653,` segue como usar cada tipo:`),wg(),jc(654,`ul`)(655,`li`)(656,`code`),iO(657,`currency`),wg(),iO(658,`: Utiliza códigos de moeda definidos pelo `),jc(659,`a`,44),iO(660,`CurrencyPipe`),wg(),iO(661,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),wg(),jc(662,`li`)(663,`code`),iO(664,`date`),wg(),iO(665,`: Adota formatos de data especificados pelo `),jc(666,`a`,45),iO(667,`DatePipe`),wg(),iO(668,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),wg(),jc(669,`li`)(670,`code`),iO(671,`time`),wg(),iO(672,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),wg(),jc(673,`li`)(674,`code`),iO(675,`number`),wg(),iO(676,`: Usa especificações do `),jc(677,`a`,46),iO(678,`DecimalPipe`),wg(),iO(679,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),jc(680,`code`),iO(681,`50`),wg(),iO(682,`, formato `),jc(683,`code`),iO(684,`'1.2-5'`),wg(),iO(685,`, resulta em `),jc(686,`code`),iO(687,`50.00`),wg(),iO(688,`.`),wg()()(),jc(689,`li`)(690,`p`),iO(691,`Quando `),jc(692,`code`),iO(693,`format`),wg(),iO(694,` é um `),jc(695,`code`),iO(696,`Array<string>`),wg(),iO(697,`:`),wg(),jc(698,`ul`)(699,`li`),iO(700,`Cada elemento do array representa uma propriedade do objeto.`),wg(),jc(701,`li`),iO(702,`Os valores dessas propriedades são concatenados, separados pelo padrão ' - '.`),wg(),jc(703,`li`),iO(704,`Exemplo: Para `),jc(705,`code`),iO(706,`format: ["id", "name"]`),wg(),iO(707,` e um objeto `),jc(708,`code`),iO(709,`{ id: 1, name: 'Carlos Diego' }`),wg(),iO(710,`,
o resultado ser\xE1 `),jc(711,`code`),iO(712,`'1 - Carlos Diego'`),wg(),iO(713,`.`),wg()()()()()(),jc(714,`tr`,13)(715,`td`,14)(716,`div`,15)(717,`span`,16),iO(718,` gridColumns`),nu(719,`br`),wg()()(),jc(720,`td`,17)(721,`code`,47),iO(722,`number`),wg()(),jc(723,`td`,20)(724,`em`)(725,`strong`),iO(726,`(opcional)`),wg()(),jc(727,`p`),iO(728,`Tamanho de exibição do campo em telas.`),wg(),jc(729,`p`),iO(730,`Deve ser usado o sistema de `),jc(731,`strong`),iO(732,`grid`),wg(),iO(733,` do PO (1 ... 12 colunas).`),wg(),jc(734,`blockquote`)(735,`p`),iO(736,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),wg()()()(),jc(737,`tr`,13)(738,`td`,14)(739,`div`,15)(740,`span`,16),iO(741,` gridLgColumns`),nu(742,`br`),wg()()(),jc(743,`td`,17)(744,`code`,47),iO(745,`number`),wg()(),jc(746,`td`,20)(747,`em`)(748,`strong`),iO(749,`(opcional)`),wg()(),jc(750,`p`),iO(751,`Tamanho de exibição do campo em telas grandes (lg).`),wg(),jc(752,`p`),iO(753,`Deve ser usado o sistema de `),jc(754,`strong`),iO(755,`grid`),wg(),iO(756,` do PO (1 ... 12 colunas).`),wg(),jc(757,`blockquote`)(758,`p`),iO(759,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(760,`code`),iO(761,`gridColumns`),wg(),iO(762,`.`),wg()()()(),jc(763,`tr`,13)(764,`td`,14)(765,`div`,15)(766,`span`,16),iO(767,` gridLgPull`),nu(768,`br`),wg()()(),jc(769,`td`,17)(770,`code`,47),iO(771,`number`),wg()(),jc(772,`td`,20)(773,`em`)(774,`strong`),iO(775,`(opcional)`),wg()(),jc(776,`p`),iO(777,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),wg(),jc(778,`p`),iO(779,`Deve ser usado o sistema de `),jc(780,`strong`),iO(781,`grid`),wg(),iO(782,` do PO (1 ... 11 colunas).`),wg(),jc(783,`blockquote`)(784,`p`),iO(785,`Esta propriedade não funciona com a propriedade `),jc(786,`code`),iO(787,`gridColumns`),wg(),iO(788,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(789,`tr`,13)(790,`td`,14)(791,`div`,15)(792,`span`,16),iO(793,` gridMdColumns`),nu(794,`br`),wg()()(),jc(795,`td`,17)(796,`code`,47),iO(797,`number`),wg()(),jc(798,`td`,20)(799,`em`)(800,`strong`),iO(801,`(opcional)`),wg()(),jc(802,`p`),iO(803,`Tamanho de exibição do campo em telas médias (md).`),wg(),jc(804,`p`),iO(805,`Deve ser usado o sistema de `),jc(806,`strong`),iO(807,`grid`),wg(),iO(808,` do PO (1 ... 12 colunas).`),wg(),jc(809,`blockquote`)(810,`p`),iO(811,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(812,`code`),iO(813,`gridColumns`),wg(),iO(814,`.`),wg()()()(),jc(815,`tr`,13)(816,`td`,14)(817,`div`,15)(818,`span`,16),iO(819,` gridMdPull`),nu(820,`br`),wg()()(),jc(821,`td`,17)(822,`code`,47),iO(823,`number`),wg()(),jc(824,`td`,20)(825,`em`)(826,`strong`),iO(827,`(opcional)`),wg()(),jc(828,`p`),iO(829,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),wg(),jc(830,`p`),iO(831,`Deve ser usado o sistema de `),jc(832,`strong`),iO(833,`grid`),wg(),iO(834,` do PO (1 ... 11 colunas).`),wg(),jc(835,`blockquote`)(836,`p`),iO(837,`Esta propriedade não funciona com a propriedade `),jc(838,`code`),iO(839,`gridColumns`),wg(),iO(840,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(841,`tr`,13)(842,`td`,14)(843,`div`,15)(844,`span`,16),iO(845,` gridSmColumns`),nu(846,`br`),wg()()(),jc(847,`td`,17)(848,`code`,47),iO(849,`number`),wg()(),jc(850,`td`,20)(851,`em`)(852,`strong`),iO(853,`(opcional)`),wg()(),jc(854,`p`),iO(855,`Tamanho de exibição do campo em telas menores (sm).`),wg(),jc(856,`p`),iO(857,`Deve ser usado o sistema de `),jc(858,`strong`),iO(859,`grid`),wg(),iO(860,` do PO (1 ... 12 colunas).`),wg(),jc(861,`blockquote`)(862,`p`),iO(863,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(864,`code`),iO(865,`gridColumns`),wg(),iO(866,`.`),wg()()()(),jc(867,`tr`,13)(868,`td`,14)(869,`div`,15)(870,`span`,16),iO(871,` gridSmPull`),nu(872,`br`),wg()()(),jc(873,`td`,17)(874,`code`,47),iO(875,`number`),wg()(),jc(876,`td`,20)(877,`em`)(878,`strong`),iO(879,`(opcional)`),wg()(),jc(880,`p`),iO(881,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),wg(),jc(882,`p`),iO(883,`Deve ser usado o sistema de `),jc(884,`strong`),iO(885,`grid`),wg(),iO(886,` do PO (1 ... 11 colunas).`),wg(),jc(887,`blockquote`)(888,`p`),iO(889,`Esta propriedade não funciona com a propriedade `),jc(890,`code`),iO(891,`gridColumns`),wg(),iO(892,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(893,`tr`,13)(894,`td`,14)(895,`div`,15)(896,`span`,16),iO(897,` gridXlColumns`),nu(898,`br`),wg()()(),jc(899,`td`,17)(900,`code`,47),iO(901,`number`),wg()(),jc(902,`td`,20)(903,`em`)(904,`strong`),iO(905,`(opcional)`),wg()(),jc(906,`p`),iO(907,`Tamanho de exibição do campo em telas extra grandes (xl).`),wg(),jc(908,`p`),iO(909,`Deve ser usado o sistema de `),jc(910,`strong`),iO(911,`grid`),wg(),iO(912,` do PO (1 ... 12 colunas).`),wg(),jc(913,`blockquote`)(914,`p`),iO(915,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(916,`code`),iO(917,`gridColumns`),wg(),iO(918,`.`),wg()()()(),jc(919,`tr`,13)(920,`td`,14)(921,`div`,15)(922,`span`,16),iO(923,` gridXlPull`),nu(924,`br`),wg()()(),jc(925,`td`,17)(926,`code`,47),iO(927,`number`),wg()(),jc(928,`td`,20)(929,`em`)(930,`strong`),iO(931,`(opcional)`),wg()(),jc(932,`p`),iO(933,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),wg(),jc(934,`p`),iO(935,`Deve ser usado o sistema de `),jc(936,`strong`),iO(937,`grid`),wg(),iO(938,` do PO (1 ... 11 colunas).`),wg(),jc(939,`blockquote`)(940,`p`),iO(941,`Esta propriedade não funciona com a propriedade `),jc(942,`code`),iO(943,`gridColumns`),wg(),iO(944,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(945,`tr`,13)(946,`td`,14)(947,`div`,15)(948,`span`,16),iO(949,` height`),nu(950,`br`),wg()()(),jc(951,`td`,17)(952,`code`,18),iO(953,`string`),wg()(),jc(954,`td`,20)(955,`em`)(956,`strong`),iO(957,`(opcional)`),wg()(),jc(958,`p`),iO(959,`Defini o texto alternativo descrevendo a imagem.`),wg(),jc(960,`p`),iO(961,`Exemplo de utilização:`),wg(),jc(962,`pre`)(963,`code`),iO(964,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),wg()(),jc(965,`p`)(966,`strong`),iO(967,`Componentes compatíveis:`),wg(),jc(968,`code`),iO(969,`po-image`),wg(),iO(970,`.`),wg()()(),jc(971,`tr`,13)(972,`td`,14)(973,`div`,15)(974,`span`,16),iO(975,` icon`),nu(976,`br`),wg()()(),jc(977,`td`,17)(978,`code`,18),iO(979,`string`),wg()(),jc(980,`td`,20)(981,`em`)(982,`strong`),iO(983,`(opcional)`),wg()(),jc(984,`p`),iO(985,`Define um ícone que será exibido ao lado do valor para o campo do tipo `),jc(986,`em`),iO(987,`tag`),wg(),iO(988,`.`),wg(),jc(989,`blockquote`)(990,`p`),iO(991,`Veja os valores válidos na `),jc(992,`a`,48),iO(993,`biblioteca de ícones`),wg(),iO(994,`.`),wg()()()(),jc(995,`tr`,13)(996,`td`,14)(997,`div`,15)(998,`span`,16),iO(999,` image`),nu(1e3,`br`),wg()()(),jc(1001,`td`,17)(1002,`code`,24),iO(1003,`boolean`),wg()(),jc(1004,`td`,20)(1005,`em`)(1006,`strong`),iO(1007,`(opcional)`),wg()(),jc(1008,`p`),iO(1009,`Possibilita a utilização de imagem.`),wg(),jc(1010,`p`),iO(1011,`Exemplo de utilização:`),wg(),jc(1012,`pre`)(1013,`code`),iO(1014,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),wg()(),jc(1015,`ul`)(1016,`li`),iO(1017,`@default `),jc(1018,`code`),iO(1019,`false`),wg()()(),jc(1020,`p`)(1021,`strong`),iO(1022,`Componentes compatíveis:`),wg(),jc(1023,`code`),iO(1024,`po-image`),wg(),iO(1025,`.`),wg()()(),jc(1026,`tr`,13)(1027,`td`,14)(1028,`div`,15)(1029,`span`,16),iO(1030,` isArrayOrObject`),nu(1031,`br`),wg()()(),jc(1032,`td`,17)(1033,`code`,24),iO(1034,`boolean`),wg()(),jc(1035,`td`,20)(1036,`em`)(1037,`strong`),iO(1038,`(opcional)`),wg()(),jc(1039,`p`),iO(1040,`Define que a propriedade `),jc(1041,`code`),iO(1042,`property`),wg(),iO(1043,` é uma lista ou um objeto.`),wg(),jc(1044,`blockquote`)(1045,`p`),iO(1046,`Por padrão, espera-se que a lista ou o objeto esteja com as propriedades `),jc(1047,`code`),iO(1048,`label`),wg(),iO(1049,` e `),jc(1050,`code`),iO(1051,`value`),wg(),iO(1052,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),jc(1053,`code`),iO(1054,`fieldLabel`),wg(),iO(1055,` e `),jc(1056,`code`),iO(1057,`fieldValue`),wg(),iO(1058,`.
\xC9 ignorada caso a propriedade `),jc(1059,`code`),iO(1060,`searchService`),wg(),iO(1061,` esteja sendo utilizada.`),wg()()()(),jc(1062,`tr`,13)(1063,`td`,14)(1064,`div`,15)(1065,`span`,16),iO(1066,` key`),nu(1067,`br`),wg()()(),jc(1068,`td`,17)(1069,`code`,24),iO(1070,`boolean`),wg()(),jc(1071,`td`,20)(1072,`em`)(1073,`strong`),iO(1074,`(opcional)`),wg()(),jc(1075,`p`),iO(1076,`Identificador`),wg()()(),jc(1077,`tr`,13)(1078,`td`,14)(1079,`div`,15)(1080,`span`,16),iO(1081,` label`),nu(1082,`br`),wg()()(),jc(1083,`td`,17)(1084,`code`,18),iO(1085,`string`),wg()(),jc(1086,`td`,20)(1087,`em`)(1088,`strong`),iO(1089,`(opcional)`),wg()(),jc(1090,`p`),iO(1091,`Rótulo do campo exibido.`),wg(),jc(1092,`p`),iO(1093,`Caso não seja informado, será utilizado como `),jc(1094,`code`),iO(1095,`label`),wg(),iO(1096,` o valor da propriedade `),jc(1097,`code`),iO(1098,`property`),wg(),iO(1099,` com a primeira letra em maiúsculo.`),wg()()(),jc(1100,`tr`,13)(1101,`td`,14)(1102,`div`,15)(1103,`span`,16),iO(1104,` offsetColumns`),nu(1105,`br`),wg()()(),jc(1106,`td`,17)(1107,`code`,47),iO(1108,`number`),wg()(),jc(1109,`td`,20)(1110,`em`)(1111,`strong`),iO(1112,`(opcional)`),wg()(),jc(1113,`p`),iO(1114,`Tamanho do espaço de exibição do campo em telas.`),wg(),jc(1115,`p`),iO(1116,`Deve ser usado o sistema de `),jc(1117,`strong`),iO(1118,`grid`),wg(),iO(1119,` do PO (1 ... 12 colunas).`),wg(),jc(1120,`blockquote`)(1121,`p`),iO(1122,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),wg()()()(),jc(1123,`tr`,13)(1124,`td`,14)(1125,`div`,15)(1126,`span`,16),iO(1127,` offsetLgColumns`),nu(1128,`br`),wg()()(),jc(1129,`td`,17)(1130,`code`,47),iO(1131,`number`),wg()(),jc(1132,`td`,20)(1133,`em`)(1134,`strong`),iO(1135,`(opcional)`),wg()(),jc(1136,`p`),iO(1137,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),wg(),jc(1138,`p`),iO(1139,`Deve ser usado o sistema de `),jc(1140,`strong`),iO(1141,`grid`),wg(),iO(1142,` do PO (1 ... 12 colunas).`),wg(),jc(1143,`blockquote`)(1144,`p`),iO(1145,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(1146,`code`),iO(1147,`offsetColumns`),wg(),iO(1148,`.`),wg()()()(),jc(1149,`tr`,13)(1150,`td`,14)(1151,`div`,15)(1152,`span`,16),iO(1153,` offsetMdColumns`),nu(1154,`br`),wg()()(),jc(1155,`td`,17)(1156,`code`,47),iO(1157,`number`),wg()(),jc(1158,`td`,20)(1159,`em`)(1160,`strong`),iO(1161,`(opcional)`),wg()(),jc(1162,`p`),iO(1163,`Tamanho do espaço de exibição do campo em telas médias (md).`),wg(),jc(1164,`p`),iO(1165,`Deve ser usado o sistema de `),jc(1166,`strong`),iO(1167,`grid`),wg(),iO(1168,` do PO (1 ... 12 colunas).`),wg(),jc(1169,`blockquote`)(1170,`p`),iO(1171,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(1172,`code`),iO(1173,`offsetColumns`),wg(),iO(1174,`.`),wg()()()(),jc(1175,`tr`,13)(1176,`td`,14)(1177,`div`,15)(1178,`span`,16),iO(1179,` offsetSmColumns`),nu(1180,`br`),wg()()(),jc(1181,`td`,17)(1182,`code`,47),iO(1183,`number`),wg()(),jc(1184,`td`,20)(1185,`em`)(1186,`strong`),iO(1187,`(opcional)`),wg()(),jc(1188,`p`),iO(1189,`Tamanho do espaço de exibição do campo em telas menores (sm).`),wg(),jc(1190,`p`),iO(1191,`Deve ser usado o sistema de `),jc(1192,`strong`),iO(1193,`grid`),wg(),iO(1194,` do PO (1 ... 12 colunas).`),wg(),jc(1195,`blockquote`)(1196,`p`),iO(1197,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(1198,`code`),iO(1199,`offsetColumns`),wg(),iO(1200,`.`),wg()()()(),jc(1201,`tr`,13)(1202,`td`,14)(1203,`div`,15)(1204,`span`,16),iO(1205,` offsetXlColumns`),nu(1206,`br`),wg()()(),jc(1207,`td`,17)(1208,`code`,47),iO(1209,`number`),wg()(),jc(1210,`td`,20)(1211,`em`)(1212,`strong`),iO(1213,`(opcional)`),wg()(),jc(1214,`p`),iO(1215,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),wg(),jc(1216,`p`),iO(1217,`Deve ser usado o sistema de `),jc(1218,`strong`),iO(1219,`grid`),wg(),iO(1220,` do PO (1 ... 12 colunas).`),wg(),jc(1221,`blockquote`)(1222,`p`),iO(1223,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(1224,`code`),iO(1225,`offsetColumns`),wg(),iO(1226,`.`),wg()()()(),jc(1227,`tr`,13)(1228,`td`,14)(1229,`div`,15)(1230,`span`,16),iO(1231,` options`),nu(1232,`br`),wg()()(),jc(1233,`td`,17)(1234,`code`,49),iO(1235,`Array<{ label: string; value: string `),wg(),jc(1236,`code`,50),iO(1237,` number;
}>`),wg()(),jc(1238,`td`,20)(1239,`em`)(1240,`strong`),iO(1241,`(opcional)`),wg()(),jc(1242,`p`),iO(1243,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),wg(),jc(1244,`p`),iO(1245,`Exemplo de utilização:`),wg(),jc(1246,`pre`)(1247,`code`),iO(1248,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),wg()(),jc(1249,`pre`)(1250,`code`),iO(1251,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),wg()()()(),jc(1252,`tr`,13)(1253,`td`,14)(1254,`div`,15)(1255,`span`,16),iO(1256,` optionsMulti`),nu(1257,`br`),wg()()(),jc(1258,`td`,17)(1259,`code`,24),iO(1260,`boolean`),wg()(),jc(1261,`td`,20)(1262,`em`)(1263,`strong`),iO(1264,`(opcional)`),wg()(),jc(1265,`p`),iO(1266,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),wg()()(),jc(1267,`tr`,13)(1268,`td`,14)(1269,`div`,15)(1270,`span`,16),iO(1271,` optionsService`),nu(1272,`br`),wg()()(),jc(1273,`td`,17)(1274,`code`,18),iO(1275,`string `),wg(),jc(1276,`code`,51),iO(1277,` PoComboFilter `),wg(),jc(1278,`code`,52),iO(1279,` PoMultiselectFilter`),wg()(),jc(1280,`td`,20)(1281,`em`)(1282,`strong`),iO(1283,`(opcional)`),wg()(),jc(1284,`p`),iO(1285,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),jc(1286,`strong`),iO(1287,`Importante`),wg()(),jc(1288,`blockquote`)(1289,`p`),iO(1290,`Para que funcione corretamente, é importante que o serviço siga o `),jc(1291,`a`,53),iO(1292,`guia de API do PO UI`),wg(),iO(1293,`.`),wg()()()(),jc(1294,`tr`,13)(1295,`td`,14)(1296,`div`,15)(1297,`span`,16),iO(1298,` order`),nu(1299,`br`),wg()()(),jc(1300,`td`,17)(1301,`code`,47),iO(1302,`number`),wg()(),jc(1303,`td`,20)(1304,`em`)(1305,`strong`),iO(1306,`(opcional)`),wg()(),jc(1307,`p`),iO(1308,`Informa a ordem de exibição do campo.`),wg(),jc(1309,`p`),iO(1310,`Exemplo de utilização:`),wg(),jc(1311,`pre`)(1312,`code`),iO(1313,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),wg()(),jc(1314,`p`),iO(1315,`Na exibição a ordem ficará dessa forma:`),wg(),jc(1316,`pre`)(1317,`code`),iO(1318,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),wg()(),jc(1319,`p`),iO(1320,`Só serão aceitos valores com números inteiros maiores do que zero.`),wg(),jc(1321,`p`),iO(1322,`Campos sem `),jc(1323,`code`),iO(1324,`order`),wg(),iO(1325,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),wg()()(),jc(1326,`tr`,13)(1327,`td`,14)(1328,`div`,15)(1329,`span`,16),iO(1330,` params`),nu(1331,`br`),wg()()(),jc(1332,`td`,17)(1333,`code`,54),iO(1334,`any`),wg()(),jc(1335,`td`,20)(1336,`em`)(1337,`strong`),iO(1338,`(opcional)`),wg()(),jc(1339,`p`),iO(1340,`Objeto que será enviado como parâmetro nas requisições de busca `),jc(1341,`code`),iO(1342,`searchService`),wg(),iO(1343,` ou `),jc(1344,`code`),iO(1345,`optionsService`),wg(),iO(1346,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),wg(),jc(1347,`p`),iO(1348,`Por exemplo, para o parâmetro `),jc(1349,`code`),iO(1350,`{ age: 23 }`),wg(),iO(1351,` a URL da requisição ficaria:`),wg(),jc(1352,`p`)(1353,`code`),iO(1354,`url + /1?age=23`),wg()()()(),jc(1355,`tr`,13)(1356,`td`,14)(1357,`div`,15)(1358,`span`,16),iO(1359,` property`),nu(1360,`br`),wg()()(),jc(1361,`td`,17)(1362,`code`,18),iO(1363,`string`),wg()(),jc(1364,`td`,20)(1365,`p`),iO(1366,`Nome de referência do campo.`),wg()()(),jc(1367,`tr`,13)(1368,`td`,14)(1369,`div`,15)(1370,`span`,16),iO(1371,` searchService`),nu(1372,`br`),wg()()(),jc(1373,`td`,17)(1374,`code`,18),iO(1375,`string `),wg(),jc(1376,`code`,55),iO(1377,` PoDynamicViewRequest`),wg()(),jc(1378,`td`,20)(1379,`em`)(1380,`strong`),iO(1381,`(opcional)`),wg()(),jc(1382,`p`),iO(1383,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),jc(1384,`strong`),iO(1385,`Importante:`),wg()(),jc(1386,`blockquote`)(1387,`p`),iO(1388,`A propriedade `),jc(1389,`code`),iO(1390,`property`),wg(),iO(1391,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),jc(1392,`a`,53),iO(1393,`guia de API do PO UI`),wg(),iO(1394,`.`),wg()()()(),jc(1395,`tr`,13)(1396,`td`,14)(1397,`div`,15)(1398,`span`,16),iO(1399,` tag`),nu(1400,`br`),wg()()(),jc(1401,`td`,17)(1402,`code`,24),iO(1403,`boolean`),wg()(),jc(1404,`td`,20)(1405,`em`)(1406,`strong`),iO(1407,`(opcional)`),wg()(),jc(1408,`p`),iO(1409,`Indica se o campo será um `),jc(1410,`code`),iO(1411,`po-tag`),wg(),iO(1412,`.`),wg()()(),jc(1413,`tr`,13)(1414,`td`,14)(1415,`div`,15)(1416,`span`,16),iO(1417,` textColor`),nu(1418,`br`),wg()()(),jc(1419,`td`,17)(1420,`code`,18),iO(1421,`string`),wg()(),jc(1422,`td`,20)(1423,`em`)(1424,`strong`),iO(1425,`(opcional)`),wg()(),jc(1426,`p`),iO(1427,`Determina a cor do texto da tag. As maneiras de customizar as cores são:`),wg(),jc(1428,`ul`)(1429,`li`),iO(1430,`Hexadeximal, por exemplo `),jc(1431,`code`),iO(1432,`#c64840`),wg(),iO(1433,`;`),wg(),jc(1434,`li`),iO(1435,`RGB, como `),jc(1436,`code`),iO(1437,`rgb(0, 0, 165)`),wg(),iO(1438,`;`),wg(),jc(1439,`li`),iO(1440,`O nome da cor, por exemplo `),jc(1441,`code`),iO(1442,`blue`),wg(),iO(1443,`;`),wg()()()(),jc(1444,`tr`,13)(1445,`td`,14)(1446,`div`,15)(1447,`span`,16),iO(1448,` type`),nu(1449,`br`),wg()()(),jc(1450,`td`,17)(1451,`code`,18),iO(1452,`string `),wg(),jc(1453,`code`,56),iO(1454,` PoDynamicFieldType`),wg()(),jc(1455,`td`,20)(1456,`em`)(1457,`strong`),iO(1458,`(opcional)`),wg()(),jc(1459,`p`),iO(1460,`Tipo do valor campo.`),wg(),jc(1461,`p`),iO(1462,`Valores válidos:`),wg(),jc(1463,`ul`)(1464,`li`)(1465,`code`),iO(1466,`boolean`),wg(),iO(1467,`: Valores `),jc(1468,`em`),iO(1469,`booleanos`),wg(),iO(1470,`.`),wg(),jc(1471,`li`)(1472,`code`),iO(1473,`currency`),wg(),iO(1474,`: Valores monetários.`),wg(),jc(1475,`li`)(1476,`code`),iO(1477,`decimal`),wg(),iO(1478,`: Valores decimais.`),wg(),jc(1479,`li`)(1480,`code`),iO(1481,`date`),wg(),iO(1482,`: Valores de datas.`),jc(1483,`ul`)(1484,`li`),iO(1485,`Aceita os tipos `),jc(1486,`strong`),iO(1487,`string`),wg(),iO(1488,` e `),jc(1489,`strong`),iO(1490,`Date`),wg(),iO(1491,` padr\xE3o do Javascript,
por exemplo: `),jc(1492,`code`),iO(1493,`'2017-11-28'`),wg(),iO(1494,` ou `),jc(1495,`code`),iO(1496,`new Date(2017, 10, 28)`),wg(),iO(1497,`.`),wg()()(),jc(1498,`li`)(1499,`code`),iO(1500,`dateTime`),wg(),iO(1501,`: Valor de data com horário.`),jc(1502,`ul`)(1503,`li`),iO(1504,`Aceita o tipo `),jc(1505,`em`),iO(1506,`string`),wg(),iO(1507,` no formato `),jc(1508,`strong`),iO(1509,`ISO-8601`),wg(),iO(1510,` extendido `),jc(1511,`strong`),iO(1512,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),wg(),iO(1513,`
e o tipo `),jc(1514,`strong`),iO(1515,`Date`),wg(),iO(1516,` padrão do Javascript, por exemplo: `),jc(1517,`code`),iO(1518,`'2017-11-28T00:00:00-02:00'`),wg(),iO(1519,` ou `),jc(1520,`code`),iO(1521,`new Date(2017, 10, 28)`),wg(),iO(1522,`.`),wg()()(),jc(1523,`li`)(1524,`code`),iO(1525,`number`),wg(),iO(1526,`: Valores numéricos.`),wg(),jc(1527,`li`)(1528,`code`),iO(1529,`string`),wg(),iO(1530,`: Textos.`),wg(),jc(1531,`li`)(1532,`code`),iO(1533,`time`),wg(),iO(1534,`: Valor do horário.`),jc(1535,`ul`)(1536,`li`),iO(1537,`Aceita o tipo `),jc(1538,`strong`),iO(1539,`string`),wg(),iO(1540,` nos formatos `),jc(1541,`strong`),iO(1542,`'HH:mm:ss'`),wg(),iO(1543,` ou `),jc(1544,`strong`),iO(1545,`'HH:mm:ss.ffffff'`),wg(),iO(1546,`, por exemplo: `),jc(1547,`code`),iO(1548,`'23:12:45'`),wg(),iO(1549,`.`),wg()()()()()(),jc(1550,`tr`,13)(1551,`td`,14)(1552,`div`,15)(1553,`span`,16),iO(1554,` visible`),nu(1555,`br`),wg()()(),jc(1556,`td`,17)(1557,`code`,24),iO(1558,`boolean`),wg()(),jc(1559,`td`,20)(1560,`em`)(1561,`strong`),iO(1562,`(opcional)`),wg()(),jc(1563,`p`),iO(1564,`Indica se o campo será visível.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Ee=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Dynamic View`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,r){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return r.changeTab(`doc`)}),nu(3,`sample-po-dynamic-view-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return r.changeTab(`web`)}),nu(5,`sample-po-dynamic-view-basic-view`)(6,`sample-po-dynamic-view-employee-view`)(7,`sample-po-dynamic-view-employee-on-load-view`)(8,`sample-po-dynamic-view-container-view`),wg()()()),a&2&&(jE(`p-actions`,r.actions),rg(2),jE(`p-active`,r.activeTab===`doc`),rg(2),jE(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[Kze,bae,Sae,N,G,W,Z,X],encapsulation:2,changeDetection:1})}return o})()}];var K=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[C1.forChild(Ee),C1]})}return o})();var Ke=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[Ta,K]})}return o})();export{Ke as DocPoDynamicViewModule};