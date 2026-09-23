import{t as r}from"./chunk-zystk1pz.js";import{$r as Vx,At as XCe,Br as TN,Et as V8e,Ii as ht,Ir as Qy,It as Zt,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he,P as Eu,Qi as oN,Ui as lg,Xn as Cn,Yi as mN,Yn as Ce,_r as Ml,bi as cw,br as NL,ci as Yx,da as uo,ga as w,ir as I,l as ar,mr as MN,nr as HO,oa as ql,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,ui as Zl,ut as Obe,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var me=()=>({property:`name`,required:!0,showRequired:!0});var le=o=>[o];var G=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-fields`]],template:function(a,r){a&1&&ql(0,`po-dynamic-form`,0),a&2&&cw(`p-fields`,MN(2,le,TN(1,me)))},dependencies:[Obe],encapsulation:2,changeDetection:1})}return o})();var pe=o=>({"docs-sample-code-tabs":o});var $=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Dynamic Form Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-dynamic-form-basic`),lg(),ql(23,`hr`)),a&2&&(Up(5),oN(`po-icon `+r.sampleCodeButtonIcon),Up(),gg(` `,r.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,pe,r.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,G],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{getCity(m){switch(m){case 1:return[{city:`Palhoça`,code:5},{city:`Lages`,code:6},{city:`Balneário Camboriú`,code:7},{city:`Brusque`,code:8}];case 2:return[{city:`São Paulo`,code:9},{city:`Guarulhos`,code:10},{city:`Campinas`,code:11},{city:`São Bernardo do Campo`,code:12}];case 3:return[{city:`Rio de Janeiro`,code:13},{city:`São Gonçalo`,code:14},{city:`Duque de Caxias`,code:15},{city:`Nova Iguaçu`,code:16}];case 4:return[{city:`Belo Horizonte`,code:17},{city:`Uberlândia`,code:18},{city:`Contagem`,code:19},{city:`Juiz de Fora`,code:20}]}return[]}getUserDocument(m){return{fields:[m.isJuridicPerson?{property:`cnpj`,visible:!0}:{property:`cpf`,visible:!0}]}}static ɵfac=function(a){return new(a||o)};static ɵprov=I({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var ce=[`dynamicForm`];var ee=(()=>{class o{poNotification=f(Eu);registerService=f(U);dynamicForm;person={};validateFields=[`state`];fields=[{property:`name`,divider:`PERSONAL DATA`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,divider:`CONTACTS`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6},{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`},{property:`vacation`,type:`date`,divider:`Work data`,range:!0,gridColumns:5,gridSmColumns:12},{property:`entryTime`,label:`Entry time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`exitTime`,label:`Exit time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`wage`,type:`currency`,gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,displayFormat:`>>>,>>>,>>9.99`,icon:`an an-currency-circle-dollar`},{property:`employeeCode`,label:`Employee code`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`999`,decimalsLength:0},{property:`overtime`,label:`Overtime hours`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`>>9.9<<`,decimalsLength:3,optional:!0},{property:`hobbies`,divider:`MORE INFO`,gridColumns:6,gridSmColumns:12,optional:!0,options:[`Soccer`,`Basketball`,`Bike`,`Yoga`,`Travel`,`Run`],optionsMulti:!0},{property:`favoriteHero`,gridColumns:6,gridSmColumns:12,label:`Favorite hero`,optional:!0,searchService:`https://po-sample-api.onrender.com/v1/heroes`,columns:[{property:`nickname`,label:`Hero`},{property:`label`,label:`Name`}],format:[`id`,`nickname`],fieldLabel:`nickname`,fieldValue:`email`},{property:`partner`,gridColumns:6,gridSmColumns:12,optionsService:`https://po-sample-api.onrender.com/v1/people`,fieldLabel:`name`,fieldValue:`id`,optional:!0},{property:`videogame`,gridColumns:6,gridSmColumns:12,label:`Video game console`,optional:!0,fieldValue:`code`,fieldLabel:`console`,options:[{console:`Nintendo Wii U`,code:`NWU`},{console:`Playstation 4`,code:`PS4`},{console:`Xbox One`,code:`XONE`},{console:`Nintendo Switch`,code:`NSW`},{console:`Playstation 5`,code:`PS5`},{console:`Xbox Series S|X`,code:`XSSX`}],optionsMulti:!0},{property:`agree`,gridColumns:12,label:`Do you agree?`,type:`boolean`,forceBooleanComponentType:XCe.checkbox},{property:`image`,type:`upload`,gridColumns:12,gridSmColumns:12,label:`Upload your background`,optional:!0,url:`https://po-sample-api.onrender.com/v1/uploads/addFile`}];ngOnInit(){this.person={name:`Tony Stark`,birthday:`1970-05-29`,isJuridicPerson:!1,videogame:[`PS4`,`NSW`,`XSSX`],rememberSecretKey:`no`,status:`active`}}onChangeFields(m){return setTimeout(()=>{let a=this.registerService.getCity(m.value.state);this.updateDynamicFormField(`city`,{options:a,loading:!1})},500),{value:{city:void 0},fields:[{property:`city`,gridColumns:6,disabled:!1,loading:!0}]}}onLoadFields(m){return this.registerService.getUserDocument(m)}updateDynamicFormField(m,a){let r$1=this.dynamicForm?.fields??this.fields,l=r$1.findIndex(O=>O.property===m);l>=0&&(r$1[l]=r(r({},r$1[l]),a),this.fields=[...r$1])}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-register`]],viewQuery:function(a,r){if(a&1&&Zl(ce,7),a&2){let l;lo(l=uo())&&(r.dynamicForm=l.first)}},standalone:!1,features:[Ce([U])],decls:5,vars:6,consts:[[`dynamicForm`,``],[`p-auto-focus`,`name`,3,`p-fields`,`p-load`,`p-validate`,`p-validate-fields`,`p-value`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(a,r){if(a&1){let l=Vx();ql(0,`po-dynamic-form`,1,0)(2,`br`),Ml(3,`div`,2)(4,`po-button`,3),ht(`p-click`,function(){Qy(l);let I=Yx(1);return r.poNotification.success(`Data saved successfully!`),Jy(I.form.reset())}),lg()()}if(a&2){let l=Yx(1);cw(`p-fields`,r.fields)(`p-load`,r.onLoadFields.bind(r))(`p-validate`,r.onChangeFields.bind(r))(`p-validate-fields`,r.validateFields)(`p-value`,r.person),Up(4),cw(`p-disabled`,l?.form.invalid)}},dependencies:[Zt,Obe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o});var te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-register-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Dynamic Form - Register`),lg(),Ml(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum,
  PoDynamicFormComponent
} from '@po-ui/ng-components';
import { PoDynamicFormRegisterService } from './sample-po-dynamic-form-register.service';

@Component({
  selector: 'sample-po-dynamic-form-register',
  templateUrl: './sample-po-dynamic-form-register.component.html',
  providers: [PoDynamicFormRegisterService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormRegisterComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormRegisterService);
  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      divider: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      displayFormat: '>>>,>>>,>>9.99',
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'employeeCode',
      label: 'Employee code',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 6,
      displayFormat: '999',
      decimalsLength: 0
    },
    {
      property: 'overtime',
      label: 'Overtime hours',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 6,
      displayFormat: '>>9.9<<',
      decimalsLength: 3,
      optional: true
    },
    {
      property: 'hobbies',
      divider: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile'
    }
  ];
  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    setTimeout(() => {
      const options = this.registerService.getCity(changedValue.value.state);
      this.updateDynamicFormField('city', { options, loading: false });
    }, 500);
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          disabled: false,
          loading: true
        }
      ]
    };
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }

  private updateDynamicFormField(property: string, updates: Partial<PoDynamicFormField>): void {
    const currentFields = this.dynamicForm?.fields ?? this.fields;
    const index = currentFields.findIndex(field => field.property === property);
    if (index >= 0) {
      currentFields[index] = { ...currentFields[index], ...updates };
      this.fields = [...currentFields];
    }
  }
}
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormRegisterService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-dynamic-form-register`),lg(),ql(27,`hr`)),a&2&&(Up(5),oN(`po-icon `+r.sampleCodeButtonIcon),Up(),gg(` `,r.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ee,r.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ee],encapsulation:2,changeDetection:1})}return o})();var K=(()=>{class o{getCity(m){switch(m){case 1:return[{city:`Palhoça`,code:5},{city:`Lages`,code:6},{city:`Balneário Camboriú`,code:7},{city:`Brusque`,code:8}];case 2:return[{city:`São Paulo`,code:9},{city:`Guarulhos`,code:10},{city:`Campinas`,code:11},{city:`São Bernardo do Campo`,code:12}];case 3:return[{city:`Rio de Janeiro`,code:13},{city:`São Gonçalo`,code:14},{city:`Duque de Caxias`,code:15},{city:`Nova Iguaçu`,code:16}];case 4:return[{city:`Belo Horizonte`,code:17},{city:`Uberlândia`,code:18},{city:`Contagem`,code:19},{city:`Juiz de Fora`,code:20}]}return[]}getUserDocument(m){return{fields:[m.isJuridicPerson?{property:`cnpj`,visible:!0}:{property:`cpf`,visible:!0}]}}static ɵfac=function(a){return new(a||o)};static ɵprov=I({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Se=[`dynamicForm`];var ie=(()=>{class o{poNotification=f(Eu);registerService=f(K);dynamicForm;person={};validateFields=[`state`];fields=[{property:`name`,container:`PERSONAL DATA`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`,keydown:this.onKeyDown.bind(this,`birthday`)},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`,keydown:this.onKeyDown.bind(this,`secretKey`)},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,container:`CONTACTS`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6},{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`},{property:`vacation`,type:`date`,container:`Work data`,range:!0,gridColumns:5,gridSmColumns:12,help:`Enter or select a valid date range.`,additionalHelpTooltip:`Ensure the start date is earlier than or equal to the end date.`,keydown:this.onKeyDown.bind(this,`vacation`)},{property:`entryTime`,label:`Entry time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`exitTime`,label:`Exit time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`wage`,type:`currency`,gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,displayFormat:`>>>,>>>,>>9.99`,icon:`an an-currency-circle-dollar`},{property:`revenue`,label:`Revenue`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`->>,>,>>>,>>9`,decimalsLength:0},{property:`adjustment`,label:`Adjustment`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`->>9.99`,optional:!0},{property:`hobbies`,container:`MORE INFO`,gridColumns:6,gridSmColumns:12,optional:!0,options:[`Soccer`,`Basketball`,`Bike`,`Yoga`,`Travel`,`Run`],optionsMulti:!0,listboxControlPosition:`top`},{property:`favoriteHero`,gridColumns:6,gridSmColumns:12,label:`Favorite hero`,optional:!0,searchService:`https://po-sample-api.onrender.com/v1/heroes`,columns:[{property:`nickname`,label:`Hero`},{property:`label`,label:`Name`}],format:[`id`,`nickname`],fieldLabel:`nickname`,fieldValue:`email`},{property:`partner`,gridColumns:6,gridSmColumns:12,optionsService:`https://po-sample-api.onrender.com/v1/people`,fieldLabel:`name`,fieldValue:`id`,optional:!0,listboxControlPosition:`top`},{property:`videogame`,gridColumns:6,gridSmColumns:12,label:`Video game console`,optional:!0,fieldValue:`code`,fieldLabel:`console`,options:[{console:`Nintendo Wii U`,code:`NWU`},{console:`Playstation 4`,code:`PS4`},{console:`Xbox One`,code:`XONE`},{console:`Nintendo Switch`,code:`NSW`},{console:`Playstation 5`,code:`PS5`},{console:`Xbox Series S|X`,code:`XSSX`}],optionsMulti:!0,listboxControlPosition:`top`},{property:`agree`,gridColumns:12,label:`Do you agree?`,type:`boolean`,forceBooleanComponentType:XCe.checkbox},{property:`image`,type:`upload`,gridColumns:12,gridSmColumns:12,label:`Upload your background`,optional:!0,url:`https://po-sample-api.onrender.com/v1/uploads/addFile`,customAction:{icon:`an an-download`,visible:!0},customActionClick:m=>{console.log(`Iniciar download para o arquivo:`,m.name)}}];ngOnInit(){this.person={name:`Tony Stark`,birthday:`1970-05-29`,isJuridicPerson:!1,videogame:[`PS4`,`NSW`,`XSSX`],rememberSecretKey:`no`,status:`active`}}onChangeFields(m){return{value:{city:void 0},fields:[{property:`city`,gridColumns:6,options:this.registerService.getCity(m.value.state),disabled:!1}]}}onKeyDown(m,a){a.code===`F9`&&this.dynamicForm.showAdditionalHelp(m)}onLoadFields(m){return this.registerService.getUserDocument(m)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-container`]],viewQuery:function(a,r){if(a&1&&Zl(Se,7),a&2){let l;lo(l=uo())&&(r.dynamicForm=l.first)}},standalone:!1,features:[Ce([K])],decls:5,vars:6,consts:[[`dynamicForm`,``],[`p-auto-focus`,`name`,3,`p-fields`,`p-load`,`p-validate`,`p-validate-fields`,`p-value`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(a,r){if(a&1){let l=Vx();ql(0,`po-dynamic-form`,1,0)(2,`br`),Ml(3,`div`,2)(4,`po-button`,3),ht(`p-click`,function(){Qy(l);let I=Yx(1);return r.poNotification.success(`Data saved successfully!`),Jy(I.form.reset())}),lg()()}if(a&2){let l=Yx(1);cw(`p-fields`,r.fields)(`p-load`,r.onLoadFields.bind(r))(`p-validate`,r.onChangeFields.bind(r))(`p-validate-fields`,r.validateFields)(`p-value`,r.person),Up(4),cw(`p-disabled`,l?.form.invalid)}},dependencies:[Zt,Obe],encapsulation:2,changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o});var ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-container-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Dynamic Form - Container`),lg(),Ml(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  ForceBooleanComponentEnum,
  PoDynamicFormComponent,
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  PoUploadFile
} from '@po-ui/ng-components';
import { PoDynamicFormContainerService } from './sample-po-dynamic-form-container.service';

@Component({
  selector: 'sample-po-dynamic-form-container',
  templateUrl: './sample-po-dynamic-form-container.component.html',
  providers: [PoDynamicFormContainerService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormContainerComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormContainerService);

  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      container: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthday')
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.',
      keydown: this.onKeyDown.bind(this, 'secretKey')
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', container: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      container: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12,
      help: 'Enter or select a valid date range.',
      additionalHelpTooltip: 'Ensure the start date is earlier than or equal to the end date.',
      keydown: this.onKeyDown.bind(this, 'vacation')
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      displayFormat: '>>>,>>>,>>9.99',
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'revenue',
      label: 'Revenue',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 6,
      displayFormat: '->>,>,>>>,>>9',
      decimalsLength: 0
    },
    {
      property: 'adjustment',
      label: 'Adjustment',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 6,
      displayFormat: '->>9.99',
      optional: true
    },
    {
      property: 'hobbies',
      container: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile',
      customAction: { icon: 'an an-download', visible: true },
      customActionClick: (file: PoUploadFile) => {
        console.log('Iniciar download para o arquivo:', file.name);
      }
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicForm.showAdditionalHelp(property);
    }
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts`),lg(),Ml(23,`pre`,9),mN(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormContainerService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-dynamic-form-container`),lg(),ql(27,`hr`)),a&2&&(Up(5),oN(`po-icon `+r.sampleCodeButtonIcon),Up(),gg(` `,r.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ge,r.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ie],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-doc`]],standalone:!1,decls:5363,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[1,`language-ts`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-load`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-validation`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`any`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-javascript`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`id`,`po-dynamic-form-load`],[`id`,`po-dynamic-form-field-validation`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFormField`],[`id`,`po-dynamic-form-validation`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(a,r){a&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoDynamicModule } from '@po-ui/ng-components';`),lg()(),ql(4,`div`,2),Ml(5,`h3`,3),mN(6,`Componente`),lg(),Ml(7,`h4`,4)(8,`code`,5),mN(9,`PoDynamicFormComponent`),lg()(),Ml(10,`div`,2)(11,`p`),mN(12,`Componente para criação de formulários dinâmicos a partir de uma lista de objetos.`),lg(),Ml(13,`p`),mN(14,`Também é possível verificar se o formulário está válido e informar valores para a exibição de informações. `),lg()(),Ml(15,`div`,6)(16,`h4`,7),mN(17,`Seletor`),lg(),Ml(18,`pre`,8),mN(19,`<po-dynamic-form
    p-auto-focus="string"
    p-components-size="string"
    p-fields="Array<PoDynamicFormField>"
    (p-form)="EventEmitter"
    p-group-form="boolean"
    p-load="string | Function"
    p-validate="string | Function"
    p-validate-fields="Array<string>"
    p-validate-on-input="boolean"
    p-value="any" >
</po-dynamic-form>
`),lg()(),Ml(20,`h4`,9),mN(21,`Propriedades`),lg(),Ml(22,`table`,10)(23,`tr`,11)(24,`th`,12),mN(25,`Nome`),lg(),Ml(26,`th`,12),mN(27,`Tipo`),lg(),Ml(28,`th`,12),mN(29,`Padrão`),lg(),Ml(30,`th`,12),mN(31,`Descrição`),lg()(),Ml(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),mN(36,` p-auto-focus`),ql(37,`br`),lg()()(),Ml(38,`td`,17)(39,`code`,18),mN(40,`string`),lg()(),Ml(41,`td`,19),mN(42,`-`),lg(),Ml(43,`td`,20)(44,`em`)(45,`strong`),mN(46,`(opcional)`),lg()(),Ml(47,`p`),mN(48,`Nome da propriedade, atribuída ao `),Ml(49,`code`),mN(50,`PoDynamicFormField.property`),lg(),mN(51,`, que iniciará o campo com foco.`),lg()()(),Ml(52,`tr`,13)(53,`td`,14)(54,`div`,15)(55,`span`,16),mN(56,` p-components-size`),ql(57,`br`),lg()()(),Ml(58,`td`,17)(59,`code`,18),mN(60,`string`),lg()(),Ml(61,`td`,19)(62,`p`)(63,`code`),mN(64,`medium`),lg()()(),Ml(65,`td`,20)(66,`em`)(67,`strong`),mN(68,`(opcional)`),lg()(),Ml(69,`p`),mN(70,`Define o tamanho dos componentes de formulário no template:`),lg(),Ml(71,`ul`)(72,`li`)(73,`code`),mN(74,`small`),lg(),mN(75,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(76,`li`)(77,`code`),mN(78,`medium`),lg(),mN(79,`: aplica a medida medium de cada componente.`),lg()(),Ml(80,`blockquote`)(81,`p`),mN(82,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(83,`code`),mN(84,`medium`),lg(),mN(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(86,`a`,21),mN(87,`po-theme`),lg(),mN(88,`.`),lg()()()(),Ml(89,`tr`,13)(90,`td`,14)(91,`div`,15)(92,`span`,16),mN(93,` p-fields`),ql(94,`br`),lg()()(),Ml(95,`td`,17)(96,`code`,22),mN(97,`Array<PoDynamicFormField>`),lg()(),Ml(98,`td`,19)(99,`p`)(100,`code`),mN(101,`[]`),lg()()(),Ml(102,`td`,20)(103,`p`),mN(104,`Coleção de objetos que implementam a interface `),Ml(105,`code`),mN(106,`PoDynamicFormField`),lg(),mN(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),lg(),Ml(108,`blockquote`)(109,`p`),mN(110,`Ex: `),Ml(111,`code`),mN(112,`[ { property: 'name' } ]`),lg()()(),Ml(113,`p`),mN(114,`Regras de tipagem e criação dos componentes:`),lg(),Ml(115,`ul`)(116,`li`),mN(117,`Caso o `),Ml(118,`em`),mN(119,`type`),lg(),mN(120,` informado seja `),Ml(121,`em`),mN(122,`boolean`),lg(),mN(123,` o componente criado será o `),Ml(124,`code`),mN(125,`po-switch`),lg(),mN(126,`.`),lg(),Ml(127,`li`),mN(128,`Caso o `),Ml(129,`em`),mN(130,`type`),lg(),mN(131,` informado seja `),Ml(132,`em`),mN(133,`currency`),lg(),mN(134,` e não seja informado um `),Ml(135,`em`),mN(136,`mask`),lg(),mN(137,` ou `),Ml(138,`em`),mN(139,`pattern`),lg(),mN(140,` o componente criado será o `),Ml(141,`code`),mN(142,`po-decimal`),lg(),mN(143,`,
caso seja informado um `),Ml(144,`em`),mN(145,`mask`),lg(),mN(146,` ou `),Ml(147,`em`),mN(148,`pattern`),lg(),mN(149,` o componente criado será o `),Ml(150,`code`),mN(151,`po-input`),lg(),mN(152,`.`),lg(),Ml(153,`li`),mN(154,`Caso o `),Ml(155,`em`),mN(156,`type`),lg(),mN(157,` informado seja `),Ml(158,`em`),mN(159,`number`),lg(),mN(160,` e não seja informado um `),Ml(161,`em`),mN(162,`mask`),lg(),mN(163,` ou `),Ml(164,`em`),mN(165,`pattern`),lg(),mN(166,` o componente criado será o `),Ml(167,`code`),mN(168,`po-number`),lg(),mN(169,`, caso seja
informado um `),Ml(170,`em`),mN(171,`mask`),lg(),mN(172,` ou `),Ml(173,`em`),mN(174,`pattern`),lg(),mN(175,` o componente criado será o `),Ml(176,`code`),mN(177,`po-input`),lg(),mN(178,`.`),lg(),Ml(179,`li`),mN(180,`Caso a lista possua a propriedade `),Ml(181,`code`),mN(182,`options`),lg(),mN(183,` e a mesma possua até 3 itens o componente criado será o `),Ml(184,`code`),mN(185,`po-radio-group`),lg(),mN(186,`
ou `),Ml(187,`code`),mN(188,`po-checkbox-group`),lg(),mN(189,` se informar a propriedade `),Ml(190,`code`),mN(191,`optionsMulti`),lg(),mN(192,`.`),lg(),Ml(193,`li`),mN(194,`Caso a mesma possua 3 ou mais itens, será criado o componente `),Ml(195,`code`),mN(196,`po-select`),lg(),mN(197,` ou, `),Ml(198,`code`),mN(199,`po-multiselect`),lg(),mN(200,` se a propriedade `),Ml(201,`code`),mN(202,`optionsMulti`),lg(),mN(203,`
for verdadeira.`),lg(),Ml(204,`li`),mN(205,`Caso o `),Ml(206,`em`),mN(207,`type`),lg(),mN(208,` informado seja `),Ml(209,`em`),mN(210,`date`),lg(),mN(211,` ou `),Ml(212,`em`),mN(213,`datetime`),lg(),mN(214,` o componente criado será o `),Ml(215,`code`),mN(216,`po-datepicker`),lg(),mN(217,`.`),lg(),Ml(218,`li`),mN(219,`Caso seja informado a propriedade `),Ml(220,`code`),mN(221,`optionsService`),lg(),mN(222,` o componente criado será o `),Ml(223,`code`),mN(224,`po-combo`),lg(),mN(225,`.`),lg(),Ml(226,`li`),mN(227,`Caso o `),Ml(228,`em`),mN(229,`type`),lg(),mN(230,` informado seja `),Ml(231,`em`),mN(232,`time`),lg(),mN(233,` o componente criado será um `),Ml(234,`code`),mN(235,`po-input`),lg(),mN(236,` podendo receber um `),Ml(237,`em`),mN(238,`mask`),lg(),mN(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),Ml(240,`em`),mN(241,`mask`),lg(),mN(242,` o componente será criado com a máscara '99:99' por padrão.`),lg(),Ml(243,`li`),mN(244,`Caso a lista possua a propriedade `),Ml(245,`code`),mN(246,`rows`),lg(),mN(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),Ml(248,`code`),mN(249,`po-textarea`),lg(),mN(250,`, caso o valor da propriedade `),Ml(251,`code`),mN(252,`rows`),lg(),mN(253,` seja menor que 3 o componente criado será o `),Ml(254,`code`),mN(255,`po-input`),lg(),mN(256,`.`),lg(),Ml(257,`li`),mN(258,`Caso seja informada a propriedade `),Ml(259,`code`),mN(260,`secret`),lg(),mN(261,` o componente criado será o `),Ml(262,`code`),mN(263,`po-password`),lg(),mN(264,`.`),lg(),Ml(265,`li`),mN(266,`Caso o `),Ml(267,`em`),mN(268,`type`),lg(),mN(269,` informado seja `),Ml(270,`em`),mN(271,`string`),lg(),mN(272,` o componente criado será o `),Ml(273,`code`),mN(274,`po-input`),lg(),mN(275,`.`),Ml(276,`blockquote`)(277,`p`),mN(278,`Ao alterar o valor das `),Ml(279,`code`),mN(280,`properties`),lg(),mN(281,`, visibilidade e/ou agrupamentos via container, os `),Ml(282,`code`),mN(283,`fields`),lg(),mN(284,` que utilizam serviço podem refazer as chamadas para as API's.`),lg()()()()()(),Ml(285,`tr`,13)(286,`td`,14)(287,`div`,23)(288,`span`,24),mN(289,` (p-form)`),ql(290,`br`),lg()()(),Ml(291,`td`,17)(292,`code`,25),mN(293,`EventEmitter`),lg()(),Ml(294,`td`,19),mN(295,`-`),lg(),Ml(296,`td`,20)(297,`em`)(298,`strong`),mN(299,`(opcional)`),lg()(),Ml(300,`p`),mN(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),lg(),Ml(302,`p`),mN(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),Ml(304,`em`),mN(305,`template reference`),lg(),mN(306,` e através do `),Ml(307,`em`),mN(308,`output`),lg(),mN(309,`, veja os exemplos abaixo:`),lg(),Ml(310,`blockquote`)(311,`p`)(312,`em`),mN(313,`template reference`),lg()()(),Ml(314,`pre`)(315,`code`,26),mN(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),lg()(),Ml(317,`blockquote`)(318,`p`)(319,`em`),mN(320,`Output`),lg()()(),Ml(321,`pre`)(322,`code`,26),mN(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),lg()(),Ml(324,`pre`)(325,`code`,27),mN(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),lg()(),Ml(327,`blockquote`)(328,`p`),mN(329,`Caso a propriedade `),Ml(330,`code`),mN(331,`p-group-form`),lg(),mN(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),lg()()()(),Ml(333,`tr`,13)(334,`td`,14)(335,`div`,15)(336,`span`,16),mN(337,` p-group-form`),ql(338,`br`),lg()()(),Ml(339,`td`,17)(340,`code`,28),mN(341,`boolean`),lg()(),Ml(342,`td`,19),mN(343,`-`),lg(),Ml(344,`td`,20)(345,`em`)(346,`strong`),mN(347,`(opcional)`),lg()(),Ml(348,`p`),mN(349,`Ao informar esta propriedade, o componente passará a utilizar o formulário pai para criar os `),Ml(350,`code`),mN(351,`FormControl`),lg(),mN(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),lg(),Ml(353,`pre`)(354,`code`,26),mN(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),lg()()()(),Ml(356,`tr`,13)(357,`td`,14)(358,`div`,15)(359,`span`,16),mN(360,` p-load`),ql(361,`br`),lg()()(),Ml(362,`td`,17)(363,`code`,18),mN(364,`string `),lg(),Ml(365,`code`,29),mN(366,` Function`),lg()(),Ml(367,`td`,19),mN(368,`-`),lg(),Ml(369,`td`,20)(370,`em`)(371,`strong`),mN(372,`(opcional)`),lg()(),Ml(373,`p`),mN(374,`Função ou serviço que será executado na inicialização do componente.`),lg(),Ml(375,`p`),mN(376,`A propriedade aceita os seguintes tipos:`),lg(),Ml(377,`ul`)(378,`li`)(379,`code`),mN(380,`string`),lg(),mN(381,`: `),Ml(382,`em`),mN(383,`Endpoint`),lg(),mN(384,` usado pelo componente para requisição via `),Ml(385,`code`),mN(386,`POST`),lg(),mN(387,`.`),lg(),Ml(388,`li`)(389,`code`),mN(390,`function`),lg(),mN(391,`: Método que será executado.`),lg()(),Ml(392,`p`),mN(393,`Ao ser executado, irá receber como parâmetro o objeto informado no `),Ml(394,`code`),mN(395,`p-value`),lg(),mN(396,`.`),lg(),Ml(397,`p`),mN(398,`O retorno desta função deve ser do tipo `),Ml(399,`a`,30),mN(400,`PoDynamicFormLoad`),lg(),mN(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),lg(),Ml(402,`p`),mN(403,`Por exemplo:`),lg(),Ml(404,`pre`)(405,`code`),mN(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),lg()(),Ml(407,`p`),mN(408,`Para referenciar a sua função utilize a propriedade `),Ml(409,`code`),mN(410,`bind`),lg(),mN(411,`, por exemplo:`),lg(),Ml(412,`pre`)(413,`code`),mN(414,`[p-load]="onLoadFields.bind(this)"
`),lg()()()(),Ml(415,`tr`,13)(416,`td`,14)(417,`div`,15)(418,`span`,16),mN(419,` p-validate`),ql(420,`br`),lg()()(),Ml(421,`td`,17)(422,`code`,18),mN(423,`string `),lg(),Ml(424,`code`,29),mN(425,` Function`),lg()(),Ml(426,`td`,19),mN(427,`-`),lg(),Ml(428,`td`,20)(429,`em`)(430,`strong`),mN(431,`(opcional)`),lg()(),Ml(432,`p`),mN(433,`Função ou serviço para validar as `),Ml(434,`strong`),mN(435,`mudanças do formulário`),lg(),mN(436,`.`),lg(),Ml(437,`p`),mN(438,`A propriedade aceita os seguintes tipos:`),lg(),Ml(439,`ul`)(440,`li`)(441,`code`),mN(442,`string`),lg(),mN(443,`: `),Ml(444,`em`),mN(445,`Endpoint`),lg(),mN(446,` usado pelo componente para requisição via `),Ml(447,`code`),mN(448,`POST`),lg(),mN(449,`.`),lg(),Ml(450,`li`)(451,`code`),mN(452,`function`),lg(),mN(453,`: Método que será executado.`),lg()(),Ml(454,`p`),mN(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),Ml(456,`code`),mN(457,`PoDynamicFormFieldChanged`),lg()(),Ml(458,`p`),mN(459,`O retorno desta função deve ser do tipo `),Ml(460,`a`,31),mN(461,`PoDynamicFormValidation`),lg(),mN(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),lg(),Ml(463,`pre`)(464,`code`),mN(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),lg()(),Ml(466,`p`),mN(467,`Para referenciar a sua função utilize a propriedade `),Ml(468,`code`),mN(469,`bind`),lg(),mN(470,`, por exemplo:`),lg(),Ml(471,`pre`)(472,`code`),mN(473,`[p-validate]="this.myFunction.bind(this)"
`),lg()(),Ml(474,`blockquote`)(475,`p`),mN(476,`Se houver uma lista de campos para validação definida em `),Ml(477,`code`),mN(478,`p-validate-fields`),lg(),mN(479,`, a propriedade `),Ml(480,`code`),mN(481,`validate`),lg(),mN(482,` só receberá o disparo para os campos equivalentes.`),lg()()()(),Ml(483,`tr`,13)(484,`td`,14)(485,`div`,15)(486,`span`,16),mN(487,` p-validate-fields`),ql(488,`br`),lg()()(),Ml(489,`td`,17)(490,`code`,32),mN(491,`Array<string>`),lg()(),Ml(492,`td`,19),mN(493,`-`),lg(),Ml(494,`td`,20)(495,`em`)(496,`strong`),mN(497,`(opcional)`),lg()(),Ml(498,`p`),mN(499,`Lista que define os campos que irão disparar o validate do form.`),lg()()(),Ml(500,`tr`,13)(501,`td`,14)(502,`div`,15)(503,`span`,16),mN(504,` p-validate-on-input`),ql(505,`br`),lg()()(),Ml(506,`td`,17)(507,`code`,28),mN(508,`boolean`),lg()(),Ml(509,`td`,19),mN(510,`-`),lg(),Ml(511,`td`,20)(512,`em`)(513,`strong`),mN(514,`(opcional)`),lg()(),Ml(515,`p`),mN(516,`Ao informar esta propriedade, o componente passará a emitir o valor a cada caractere digitado.`),lg(),Ml(517,`p`),mN(518,`Pode ser aplicado nos seguintes componentes:`),lg(),Ml(519,`ul`)(520,`li`),mN(521,`po-input`),lg(),Ml(522,`li`),mN(523,`po-number`),lg(),Ml(524,`li`),mN(525,`po-decimal`),lg(),Ml(526,`li`),mN(527,`po-textarea`),lg(),Ml(528,`li`),mN(529,`po-password`),lg()(),Ml(530,`p`),mN(531,`Deve informar os campos que deseja receber as emissões na propriedade `),Ml(532,`code`),mN(533,`p-validate-fields`),lg(),mN(534,`.`),lg()()(),Ml(535,`tr`,13)(536,`td`,14)(537,`div`,15)(538,`span`,16),mN(539,` p-value`),ql(540,`br`),lg()()(),Ml(541,`td`,17)(542,`code`,33),mN(543,`any`),lg()(),Ml(544,`td`,19),mN(545,`-`),lg(),Ml(546,`td`,20)(547,`p`),mN(548,`Objeto que será utilizado como valor para exibir as informações, será recuperado e preenchido através do atributo `),Ml(549,`em`),mN(550,`property`),lg(),mN(551,`
dos objetos contidos na propridade `),Ml(552,`code`),mN(553,`p-fields`),lg(),mN(554,`.`),lg(),Ml(555,`p`),mN(556,`Pode iniciar com valor ou apenas com um objeto vazio que será preenchido conforme descrito acima.`),lg(),Ml(557,`blockquote`)(558,`p`),mN(559,`Ex: `),Ml(560,`code`),mN(561,`{ name: 'po' }`),lg()()()()()(),Ml(562,`h3`,9),mN(563,`Métodos`),lg(),Ml(564,`table`,34)(565,`tr`,13)(566,`th`,35)(567,`div`,15)(568,`h4`)(569,`span`,16),mN(570,` focus `),lg()()()()(),Ml(571,`tr`,20)(572,`td`,20)(573,`p`),mN(574,`Função que atribui foco ao campo desejado.`),lg(),Ml(575,`p`),mN(576,`Para utilizá-la é necessário capturar a instância do `),Ml(577,`code`),mN(578,`dynamic form`),lg(),mN(579,`, como por exemplo:`),lg(),Ml(580,`pre`)(581,`code`,26),mN(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),lg()(),Ml(583,`pre`)(584,`code`,36),mN(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),lg()()()()(),Ml(586,`h5`)(587,`b`),mN(588,`Parâmetros`),lg()(),Ml(589,`table`,10)(590,`tr`,11)(591,`th`,12),mN(592,`Nome`),lg(),Ml(593,`th`,12),mN(594,`Tipo`),lg(),Ml(595,`th`,12),mN(596,`Descrição`),lg()(),Ml(597,`tr`,13)(598,`td`,14),mN(599,` property`),lg(),Ml(600,`td`,17)(601,`code`,37),mN(602,` string `),lg()(),Ml(603,`td`,20)(604,`p`),mN(605,`Nome da propriedade atribuída ao `),Ml(606,`code`),mN(607,`PoDynamicFormField.property`),lg(),mN(608,`.`),lg()()()(),ql(609,`br`),Ml(610,`table`,34)(611,`tr`,13)(612,`th`,35)(613,`div`,15)(614,`h4`)(615,`span`,16),mN(616,` showAdditionalHelp `),lg()()()()(),Ml(617,`tr`,20)(618,`td`,20)(619,`p`),mN(620,`Método que exibe `),Ml(621,`code`),mN(622,`p-helper`),lg(),mN(623,` ou executa a ação definida em `),Ml(624,`code`),mN(625,`p-helper{eventOnClick}`),lg(),mN(626,` ou em `),Ml(627,`code`),mN(628,`p-additionalHelp`),lg(),mN(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(630,`code`),mN(631,`keydown`),lg(),mN(632,`.`),lg(),Ml(633,`pre`)(634,`code`),mN(635,`import { PoDynamicModule } from '@po-ui/ng-components';
...
@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicForm.showAdditionalHelp(property);
 }
}
`),lg()()()()(),Ml(636,`h5`)(637,`b`),mN(638,`Parâmetros`),lg()(),Ml(639,`table`,10)(640,`tr`,11)(641,`th`,12),mN(642,`Nome`),lg(),Ml(643,`th`,12),mN(644,`Tipo`),lg(),Ml(645,`th`,12),mN(646,`Descrição`),lg()(),Ml(647,`tr`,13)(648,`td`,14),mN(649,` property`),lg(),Ml(650,`td`,17)(651,`code`,37),mN(652,` string `),lg()(),Ml(653,`td`,20)(654,`p`),mN(655,`Identificador da coluna.`),lg()()()(),ql(656,`br`),Ml(657,`h3`),mN(658,`Interfaces`),lg(),Ml(659,`h4`,38)(660,`code`,5),mN(661,`PoDynamicFormField`),lg()(),Ml(662,`div`,2)(663,`p`),mN(664,` Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente.`),lg()(),Ml(665,`h4`,9),mN(666,`Propriedades`),lg(),Ml(667,`table`,10)(668,`tr`,11)(669,`th`,12),mN(670,`Nome`),lg(),Ml(671,`th`,12),mN(672,`Tipo`),lg(),Ml(673,`th`,12),mN(674,`Descrição`),lg()(),Ml(675,`tr`,13)(676,`td`,14)(677,`div`,15)(678,`span`,16),mN(679,` additionalHelp`),ql(680,`br`),lg()()(),Ml(681,`td`,17)(682,`code`,29),mN(683,`Function`),lg()(),Ml(684,`td`,20)(685,`em`)(686,`strong`),mN(687,`(opcional)`),lg()(),Ml(688,`p`),mN(689,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(690,`blockquote`)(691,`p`),mN(692,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(693,`tr`,13)(694,`td`,14)(695,`div`,15)(696,`span`,16),mN(697,` additionalHelpTooltip`),ql(698,`br`),lg()()(),Ml(699,`td`,17)(700,`code`,18),mN(701,`string`),lg()(),Ml(702,`td`,20)(703,`em`)(704,`strong`),mN(705,`(opcional)`),lg()(),Ml(706,`p`),mN(707,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(708,`code`),mN(709,`po-helper`),lg(),mN(710,`.
`),Ml(711,`strong`),mN(712,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(713,`blockquote`)(714,`p`),mN(715,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(716,`tr`,13)(717,`td`,14)(718,`div`,15)(719,`span`,16),mN(720,` advancedFilters`),ql(721,`br`),lg()()(),Ml(722,`td`,17)(723,`code`,39),mN(724,`Array<PoLookupAdvancedFilter>`),lg()(),Ml(725,`td`,20)(726,`em`)(727,`strong`),mN(728,`(opcional)`),lg()(),Ml(729,`p`),mN(730,`Lista de objetos dos campos que serão criados na busca avançada.`),lg(),Ml(731,`blockquote`)(732,`p`),mN(733,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),lg()(),Ml(734,`p`),mN(735,`Exemplo de URL com busca avançada:`),lg(),Ml(736,`p`)(737,`code`),mN(738,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),lg()(),Ml(739,`p`),mN(740,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),lg(),Ml(741,`p`)(742,`code`),mN(743,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),lg()()()(),Ml(744,`tr`,13)(745,`td`,14)(746,`div`,15)(747,`span`,16),mN(748,` appendBox`),ql(749,`br`),lg()()(),Ml(750,`td`,17)(751,`code`,28),mN(752,`boolean`),lg()(),Ml(753,`td`,20)(754,`em`)(755,`strong`),mN(756,`(opcional)`),lg()(),Ml(757,`p`),mN(758,`Define que o `),Ml(759,`code`),mN(760,`listbox`),lg(),mN(761,` e/ou popover (`),Ml(762,`code`),mN(763,`p-helper`),lg(),mN(764,` e/ou `),Ml(765,`code`),mN(766,`p-error-limit`),lg(),mN(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),lg(),Ml(768,`blockquote`)(769,`p`),mN(770,`Quando utilizado com `),Ml(771,`code`),mN(772,`p-helper`),lg(),mN(773,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(774,`tr`,13)(775,`td`,14)(776,`div`,15)(777,`span`,16),mN(778,` autoHeight`),ql(779,`br`),lg()()(),Ml(780,`td`,17)(781,`code`,28),mN(782,`boolean`),lg()(),Ml(783,`td`,20)(784,`em`)(785,`strong`),mN(786,`(opcional)`),lg()(),Ml(787,`p`),mN(788,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),lg(),Ml(789,`p`)(790,`strong`),mN(791,`Componentes compatíveis:`),lg(),Ml(792,`code`),mN(793,`po-multiselect`),lg(),mN(794,`, `),Ml(795,`code`),mN(796,`po-lookup`),lg(),mN(797,`.`),lg()()(),Ml(798,`tr`,13)(799,`td`,14)(800,`div`,15)(801,`span`,16),mN(802,` autoUpload`),ql(803,`br`),lg()()(),Ml(804,`td`,17)(805,`code`,28),mN(806,`boolean`),lg()(),Ml(807,`td`,20)(808,`em`)(809,`strong`),mN(810,`(opcional)`),lg()(),Ml(811,`p`),mN(812,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),lg(),Ml(813,`p`)(814,`strong`),mN(815,`Componente compatível`),lg(),mN(816,`: `),Ml(817,`code`),mN(818,`po-upload`),lg()()()(),Ml(819,`tr`,13)(820,`td`,14)(821,`div`,15)(822,`span`,16),mN(823,` booleanFalse`),ql(824,`br`),lg()()(),Ml(825,`td`,17)(826,`code`,18),mN(827,`string`),lg()(),Ml(828,`td`,20)(829,`em`)(830,`strong`),mN(831,`(opcional)`),lg()(),Ml(832,`p`),mN(833,`Texto exibido quando o valor do componente for `),Ml(834,`em`),mN(835,`false`),lg(),mN(836,`.`),lg()()(),Ml(837,`tr`,13)(838,`td`,14)(839,`div`,15)(840,`span`,16),mN(841,` booleanTrue`),ql(842,`br`),lg()()(),Ml(843,`td`,17)(844,`code`,18),mN(845,`string`),lg()(),Ml(846,`td`,20)(847,`em`)(848,`strong`),mN(849,`(opcional)`),lg()(),Ml(850,`p`),mN(851,`Texto exibido quando o valor do componente for `),Ml(852,`em`),mN(853,`true`),lg(),mN(854,`.`),lg()()(),Ml(855,`tr`,13)(856,`td`,14)(857,`div`,15)(858,`span`,16),mN(859,` changeOnEnter`),ql(860,`br`),lg()()(),Ml(861,`td`,17)(862,`code`,28),mN(863,`boolean`),lg()(),Ml(864,`td`,20)(865,`em`)(866,`strong`),mN(867,`(opcional)`),lg()(),Ml(868,`p`),mN(869,`Indica que o evento `),Ml(870,`code`),mN(871,`p-change`),lg(),mN(872,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),Ml(873,`code`),mN(874,`po-combo`),lg(),mN(875,`.`),lg()()(),Ml(876,`tr`,13)(877,`td`,14)(878,`div`,15)(879,`span`,16),mN(880,` changeVisibleColumns`),ql(881,`br`),lg()()(),Ml(882,`td`,17)(883,`code`,29),mN(884,`Function`),lg()(),Ml(885,`td`,20)(886,`em`)(887,`strong`),mN(888,`(opcional)`),lg()(),Ml(889,`p`),mN(890,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),lg(),Ml(891,`p`),mN(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),lg(),Ml(893,`p`)(894,`strong`),mN(895,`Componente compatível`),lg(),mN(896,`: `),Ml(897,`code`),mN(898,`po-lookup`),lg()()()(),Ml(899,`tr`,13)(900,`td`,14)(901,`div`,15)(902,`span`,16),mN(903,` clean`),ql(904,`br`),lg()()(),Ml(905,`td`,17)(906,`code`,28),mN(907,`boolean`),lg()(),Ml(908,`td`,20)(909,`em`)(910,`strong`),mN(911,`(opcional)`),lg()(),Ml(912,`p`),mN(913,`Se verdadeiro, o campo receberá um botão para ser limpo.`),lg(),Ml(914,`p`)(915,`strong`),mN(916,`Componentes compatíveis:`),lg(),Ml(917,`code`),mN(918,`po-datepicker`),lg(),mN(919,`, `),Ml(920,`code`),mN(921,`po-datepicker-range`),lg(),mN(922,`, `),Ml(923,`code`),mN(924,`po-input`),lg(),mN(925,`, `),Ml(926,`code`),mN(927,`po-number`),lg(),mN(928,`, `),Ml(929,`code`),mN(930,`po-decimal`),lg(),mN(931,`,
`),Ml(932,`code`),mN(933,`po-combo`),lg(),mN(934,`, `),Ml(935,`code`),mN(936,`po-lookup`),lg(),mN(937,`, `),Ml(938,`code`),mN(939,`po-password`),lg(),mN(940,`, `),Ml(941,`code`),mN(942,`po-timepicker`),lg(),mN(943,`.`),lg()()(),Ml(944,`tr`,13)(945,`td`,14)(946,`div`,15)(947,`span`,16),mN(948,` columnRestoreManager`),ql(949,`br`),lg()()(),Ml(950,`td`,17)(951,`code`,29),mN(952,`Function`),lg()(),Ml(953,`td`,20)(954,`em`)(955,`strong`),mN(956,`(opcional)`),lg()(),Ml(957,`p`),mN(958,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),lg(),Ml(959,`p`),mN(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),lg(),Ml(961,`p`)(962,`strong`),mN(963,`Componente compatível`),lg(),mN(964,`: `),Ml(965,`code`),mN(966,`po-lookup`),lg()()()(),Ml(967,`tr`,13)(968,`td`,14)(969,`div`,15)(970,`span`,16),mN(971,` columns`),ql(972,`br`),lg()()(),Ml(973,`td`,17)(974,`code`,40),mN(975,`Array<PoLookupColumn> `),lg(),Ml(976,`code`,41),mN(977,` number`),lg()(),Ml(978,`td`,20)(979,`em`)(980,`strong`),mN(981,`(opcional)`),lg()(),Ml(982,`p`),mN(983,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),Ml(984,`code`),mN(985,`searchService`),lg(),mN(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Ml(987,`a`,42)(988,`code`),mN(989,`PoLookupColumn`),lg()(),mN(990,`.`),lg(),Ml(991,`blockquote`)(992,`p`),mN(993,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),Ml(994,`em`),mN(995,`label`),lg(),mN(996,` e `),Ml(997,`em`),mN(998,`value`),lg(),mN(999,` para valores
de tela e do model respectivamente.`),lg()(),Ml(1e3,`p`)(1001,`strong`),mN(1002,`Componentes compatíveis:`),lg(),Ml(1003,`code`),mN(1004,`po-radio-group`),lg(),mN(1005,`, `),Ml(1006,`code`),mN(1007,`po-lookup`),lg(),mN(1008,`, `),Ml(1009,`code`),mN(1010,`po-checkbox-group`),lg(),mN(1011,`.`),lg()()(),Ml(1012,`tr`,13)(1013,`td`,14)(1014,`div`,15)(1015,`span`,16),mN(1016,` compactLabel`),ql(1017,`br`),lg()()(),Ml(1018,`td`,17)(1019,`code`,28),mN(1020,`boolean`),lg()(),Ml(1021,`td`,20)(1022,`em`)(1023,`strong`),mN(1024,`(opcional)`),lg()(),Ml(1025,`p`),mN(1026,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(1027,`p`),mN(1028,`Quando habilitado (`),Ml(1029,`code`),mN(1030,`true`),lg(),mN(1031,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(1032,`ul`)(1033,`li`)(1034,`code`),mN(1035,`po-label`),lg()(),Ml(1036,`li`)(1037,`code`),mN(1038,`p-requirement (showRequired)`),lg()(),Ml(1039,`li`)(1040,`code`),mN(1041,`po-helper`),lg()()(),Ml(1042,`p`),mN(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(1044,`p`),mN(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(1046,`ul`)(1047,`li`)(1048,`code`),mN(1049,`--field-container-title-justify`),lg()(),Ml(1050,`li`)(1051,`code`),mN(1052,`--field-container-title-flex`),lg()()(),Ml(1053,`p`),mN(1054,`Exemplo:`),lg(),Ml(1055,`pre`)(1056,`code`),mN(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(1058,`p`),mN(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(1060,`tr`,13)(1061,`td`,14)(1062,`div`,15)(1063,`span`,16),mN(1064,` container`),ql(1065,`br`),lg()()(),Ml(1066,`td`,17)(1067,`code`,18),mN(1068,`string`),lg()(),Ml(1069,`td`,20)(1070,`em`)(1071,`strong`),mN(1072,`(opcional)`),lg()(),Ml(1073,`p`),mN(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),lg(),Ml(1075,`p`),mN(1076,`Está propriedade é do tipo string, o valor que será titulo do contianer`),lg()()(),Ml(1077,`tr`,13)(1078,`td`,14)(1079,`div`,15)(1080,`span`,16),mN(1081,` customAction`),ql(1082,`br`),lg()()(),Ml(1083,`td`,17)(1084,`code`,43),mN(1085,`PoProgressAction`),lg()(),Ml(1086,`td`,20)(1087,`em`)(1088,`strong`),mN(1089,`(opcional)`),lg()(),Ml(1090,`p`),mN(1091,`Define uma ação personalizada no componente `),Ml(1092,`code`),mN(1093,`po-upload`),lg(),mN(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),lg(),Ml(1095,`p`)(1096,`strong`),mN(1097,`Componente compatível`),lg(),mN(1098,`: `),Ml(1099,`code`),mN(1100,`po-upload`),lg(),mN(1101,`,`),lg(),Ml(1102,`p`)(1103,`strong`),mN(1104,`Exemplo de configuração`),lg(),mN(1105,`:`),lg(),Ml(1106,`pre`)(1107,`code`,44),mN(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),lg()()()(),Ml(1109,`tr`,13)(1110,`td`,14)(1111,`div`,15)(1112,`span`,16),mN(1113,` customActionClick`),ql(1114,`br`),lg()()(),Ml(1115,`td`,17)(1116,`code`,45),mN(1117,`(file: PoUploadFile) => void`),lg()(),Ml(1118,`td`,20)(1119,`em`)(1120,`strong`),mN(1121,`(opcional)`),lg()(),Ml(1122,`p`),mN(1123,`Evento emitido ao clicar na ação personalizada configurada no `),Ml(1124,`code`),mN(1125,`p-custom-action`),lg(),mN(1126,`.`),lg(),Ml(1127,`p`)(1128,`strong`),mN(1129,`Componente compatível`),lg(),mN(1130,`: `),Ml(1131,`code`),mN(1132,`po-upload`),lg(),mN(1133,`,`),lg(),Ml(1134,`p`),mN(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),lg(),Ml(1136,`p`)(1137,`strong`),mN(1138,`Parâmetro do evento`),lg(),mN(1139,`:`),lg(),Ml(1140,`ul`)(1141,`li`)(1142,`code`),mN(1143,`file`),lg(),mN(1144,`: O arquivo associado ao botão de ação. Este objeto é da classe `),Ml(1145,`code`),mN(1146,`PoUploadFile`),lg(),mN(1147,` e contém informações sobre o arquivo, como nome, status e progresso.`),lg()(),Ml(1148,`p`)(1149,`strong`),mN(1150,`Exemplo de uso`),lg(),mN(1151,`:`),lg(),Ml(1152,`pre`)(1153,`code`,44),mN(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),lg()()()(),Ml(1155,`tr`,13)(1156,`td`,14)(1157,`div`,15)(1158,`span`,16),mN(1159,` debounceTime`),ql(1160,`br`),lg()()(),Ml(1161,`td`,17)(1162,`code`,41),mN(1163,`number`),lg()(),Ml(1164,`td`,20)(1165,`em`)(1166,`strong`),mN(1167,`(opcional)`),lg()(),Ml(1168,`p`),mN(1169,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),Ml(1170,`code`),mN(1171,`p-filter-service`),lg(),mN(1172,`).`),lg(),Ml(1173,`p`)(1174,`strong`),mN(1175,`Componentes compatíveis:`),lg(),Ml(1176,`code`),mN(1177,`po-combo`),lg(),mN(1178,`, `),Ml(1179,`code`),mN(1180,`po-multiselect`),lg(),mN(1181,`.`),lg()()(),Ml(1182,`tr`,13)(1183,`td`,14)(1184,`div`,15)(1185,`span`,16),mN(1186,` decimalsLength`),ql(1187,`br`),lg()()(),Ml(1188,`td`,17)(1189,`code`,41),mN(1190,`number`),lg()(),Ml(1191,`td`,20)(1192,`em`)(1193,`strong`),mN(1194,`(opcional)`),lg()(),Ml(1195,`p`),mN(1196,`Quantidade máxima de casas decimais.`),lg(),Ml(1197,`blockquote`)(1198,`p`),mN(1199,`Esta propriedade só pode ser utilizada quando o `),Ml(1200,`code`),mN(1201,`type`),lg(),mN(1202,` for `),Ml(1203,`em`),mN(1204,`currency`),lg(),mN(1205,` ou `),Ml(1206,`em`),mN(1207,`decimal`),lg(),mN(1208,`.`),lg()(),Ml(1209,`blockquote`)(1210,`p`),mN(1211,`Quando utilizado com `),Ml(1212,`code`),mN(1213,`displayFormat`),lg(),mN(1214,`, será respeitado o valor `),Ml(1215,`strong`),mN(1216,`mais restritivo`),lg(),mN(1217,` entre esta propriedade e o número de casas decimais definido no formato.`),lg()()()(),Ml(1218,`tr`,13)(1219,`td`,14)(1220,`div`,15)(1221,`span`,16),mN(1222,` directory`),ql(1223,`br`),lg()()(),Ml(1224,`td`,17)(1225,`code`,28),mN(1226,`boolean`),lg()(),Ml(1227,`td`,20)(1228,`em`)(1229,`strong`),mN(1230,`(opcional)`),lg()(),Ml(1231,`p`),mN(1232,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),lg(),Ml(1233,`blockquote`)(1234,`p`),mN(1235,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),lg()(),Ml(1236,`blockquote`)(1237,`p`),mN(1238,`Definição não suportada pelo browser `),Ml(1239,`strong`),mN(1240,`Internet Explorer`),lg(),mN(1241,`, todavia será possível a seleção de arquivos padrão.`),lg()(),Ml(1242,`p`)(1243,`strong`),mN(1244,`Componente compatível`),lg(),mN(1245,`: `),Ml(1246,`code`),mN(1247,`po-upload`),lg()()()(),Ml(1248,`tr`,13)(1249,`td`,14)(1250,`div`,15)(1251,`span`,16),mN(1252,` disabled`),ql(1253,`br`),lg()()(),Ml(1254,`td`,17)(1255,`code`,28),mN(1256,`boolean`),lg()(),Ml(1257,`td`,20)(1258,`em`)(1259,`strong`),mN(1260,`(opcional)`),lg()(),Ml(1261,`p`),mN(1262,`Desabilita o campo caso informar o valor `),Ml(1263,`em`),mN(1264,`true`),lg(),mN(1265,`.`),lg()()(),Ml(1266,`tr`,13)(1267,`td`,14)(1268,`div`,15)(1269,`span`,16),mN(1270,` disabledInitFilter`),ql(1271,`br`),lg()()(),Ml(1272,`td`,17)(1273,`code`,28),mN(1274,`boolean`),lg()(),Ml(1275,`td`,20)(1276,`em`)(1277,`strong`),mN(1278,`(opcional)`),lg()(),Ml(1279,`p`),mN(1280,`Desabilita o filtro inicial no serviço do `),Ml(1281,`code`),mN(1282,`po-combo`),lg(),mN(1283,`, que é executado no primeiro clique no campo.`),lg()()(),Ml(1284,`tr`,13)(1285,`td`,14)(1286,`div`,15)(1287,`span`,16),mN(1288,` disabledTabFilter`),ql(1289,`br`),lg()()(),Ml(1290,`td`,17)(1291,`code`,28),mN(1292,`boolean`),lg()(),Ml(1293,`td`,20)(1294,`em`)(1295,`strong`),mN(1296,`(opcional)`),lg()(),Ml(1297,`p`),mN(1298,`Se verdadeiro, desabilitará a busca de um item via TAB no `),Ml(1299,`code`),mN(1300,`po-combo`),lg(),mN(1301,`.`),lg()()(),Ml(1302,`tr`,13)(1303,`td`,14)(1304,`div`,15)(1305,`span`,16),mN(1306,` displayFormat`),ql(1307,`br`),lg()()(),Ml(1308,`td`,17)(1309,`code`,18),mN(1310,`string`),lg()(),Ml(1311,`td`,20)(1312,`em`)(1313,`strong`),mN(1314,`(opcional)`),lg()(),Ml(1315,`p`),mN(1316,`Define uma máscara de formatação numérica avançada para o campo.`),lg(),Ml(1317,`p`),mN(1318,`Simbologia suportada:`),lg(),Ml(1319,`ul`)(1320,`li`)(1321,`code`),mN(1322,`9`),lg(),mN(1323,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),lg(),Ml(1324,`li`)(1325,`code`),mN(1326,`>`),lg(),mN(1327,`: Supressão de zero à esquerda (dígito não obrigatório);`),lg(),Ml(1328,`li`)(1329,`code`),mN(1330,`<`),lg(),mN(1331,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),lg(),Ml(1332,`li`)(1333,`code`),mN(1334,`.`),lg(),mN(1335,`: Separador decimal (convertido conforme locale);`),lg(),Ml(1336,`li`)(1337,`code`),mN(1338,`,`),lg(),mN(1339,`: Separador de milhar/grupo (convertido conforme locale);`),lg(),Ml(1340,`li`)(1341,`code`),mN(1342,`-`),lg(),mN(1343,`: Sinal negativo (deve ser o primeiro caractere do formato).`),lg()(),Ml(1344,`blockquote`)(1345,`p`),mN(1346,`Quando utilizado com `),Ml(1347,`code`),mN(1348,`decimalsLength`),lg(),mN(1349,` ou `),Ml(1350,`code`),mN(1351,`thousandMaxlength`),lg(),mN(1352,`, será respeitado o valor `),Ml(1353,`strong`),mN(1354,`mais restritivo`),lg(),mN(1355,` entre a propriedade e o formato.`),lg()(),Ml(1356,`p`),mN(1357,`Exemplos: `),Ml(1358,`code`),mN(1359,`'>>>,>>>,>>9.99'`),lg(),mN(1360,`, `),Ml(1361,`code`),mN(1362,`'->>9.99'`),lg(),mN(1363,`, `),Ml(1364,`code`),mN(1365,`'999.9'`),lg()(),Ml(1366,`blockquote`)(1367,`p`),mN(1368,`Esta propriedade só pode ser utilizada quando o `),Ml(1369,`code`),mN(1370,`type`),lg(),mN(1371,` for `),Ml(1372,`em`),mN(1373,`currency`),lg(),mN(1374,` ou `),Ml(1375,`em`),mN(1376,`decimal`),lg(),mN(1377,`.`),lg()(),Ml(1378,`p`)(1379,`strong`),mN(1380,`Componente compatível:`),lg(),Ml(1381,`code`),mN(1382,`po-decimal`),lg(),mN(1383,`.`),lg()()(),Ml(1384,`tr`,13)(1385,`td`,14)(1386,`div`,15)(1387,`span`,16),mN(1388,` divider`),ql(1389,`br`),lg()()(),Ml(1390,`td`,17)(1391,`code`,18),mN(1392,`string`),lg()(),Ml(1393,`td`,20)(1394,`em`)(1395,`strong`),mN(1396,`(opcional)`),lg()(),Ml(1397,`p`),mN(1398,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),lg()()(),Ml(1399,`tr`,13)(1400,`td`,14)(1401,`div`,15)(1402,`span`,16),mN(1403,` dragDrop`),ql(1404,`br`),lg()()(),Ml(1405,`td`,17)(1406,`code`,28),mN(1407,`boolean`),lg()(),Ml(1408,`td`,20)(1409,`em`)(1410,`strong`),mN(1411,`(opcional)`),lg()(),Ml(1412,`p`),mN(1413,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),lg(),Ml(1414,`blockquote`)(1415,`p`),mN(1416,`Recomendamos utilizar apenas um `),Ml(1417,`code`),mN(1418,`po-upload`),lg(),mN(1419,` com esta funcionalidade por tela.`),lg()(),Ml(1420,`p`)(1421,`strong`),mN(1422,`Componente compatível`),lg(),mN(1423,`: `),Ml(1424,`code`),mN(1425,`po-upload`),lg()()()(),Ml(1426,`tr`,13)(1427,`td`,14)(1428,`div`,15)(1429,`span`,16),mN(1430,` dragDropHeight`),ql(1431,`br`),lg()()(),Ml(1432,`td`,17)(1433,`code`,41),mN(1434,`number`),lg()(),Ml(1435,`td`,20)(1436,`em`)(1437,`strong`),mN(1438,`(opcional)`),lg()(),Ml(1439,`p`),mN(1440,`Define em `),Ml(1441,`em`),mN(1442,`pixels`),lg(),mN(1443,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Ml(1444,`code`),mN(1445,`160px`),lg(),mN(1446,`.`),lg(),Ml(1447,`blockquote`)(1448,`p`),mN(1449,`Esta propriedade funciona somente se a propriedade `),Ml(1450,`code`),mN(1451,`p-drag-drop`),lg(),mN(1452,` estiver habilitada.`),lg()(),Ml(1453,`p`)(1454,`strong`),mN(1455,`Componente compatível`),lg(),mN(1456,`: `),Ml(1457,`code`),mN(1458,`po-upload`),lg()()()(),Ml(1459,`tr`,13)(1460,`td`,14)(1461,`div`,15)(1462,`span`,16),mN(1463,` errorAsyncFunction`),ql(1464,`br`),lg()()(),Ml(1465,`td`,17)(1466,`code`,46),mN(1467,`(value) => Observable<boolean>`),lg()(),Ml(1468,`td`,20)(1469,`em`)(1470,`strong`),mN(1471,`(opcional)`),lg()(),Ml(1472,`p`),mN(1473,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ml(1474,`code`),mN(1475,`change`),lg(),mN(1476,` ou `),Ml(1477,`code`),mN(1478,`change-model`),lg(),mN(1479,`, dependendo do valor da propriedade `),Ml(1480,`code`),mN(1481,`triggerMode`),lg(),mN(1482,`.`),lg(),Ml(1483,`blockquote`)(1484,`p`),mN(1485,`Retorna `),Ml(1486,`code`),mN(1487,`Observable com o valor true`),lg(),mN(1488,` para sinalizar o erro `),Ml(1489,`code`),mN(1490,`false`),lg(),mN(1491,` para indicar que não há erro.`),lg()(),Ml(1492,`p`)(1493,`strong`),mN(1494,`Componente compatível`),lg(),mN(1495,`: `),Ml(1496,`code`),mN(1497,`po-datepicker`),lg()()()(),Ml(1498,`tr`,13)(1499,`td`,14)(1500,`div`,15)(1501,`span`,16),mN(1502,` errorAsyncProperties`),ql(1503,`br`),lg()()(),Ml(1504,`td`,17)(1505,`code`,47),mN(1506,`ErrorAsyncProperties`),lg()(),Ml(1507,`td`,20)(1508,`em`)(1509,`strong`),mN(1510,`(opcional)`),lg()(),Ml(1511,`p`),mN(1512,`Realiza alguma validação customizada assíncrona no componente.`),lg(),Ml(1513,`p`)(1514,`strong`),mN(1515,`Componentes compatíveis:`),lg(),Ml(1516,`code`),mN(1517,`po-input`),lg(),mN(1518,`, `),Ml(1519,`code`),mN(1520,`po-number`),lg(),mN(1521,`, `),Ml(1522,`code`),mN(1523,`po-decimal`),lg(),mN(1524,`, `),Ml(1525,`code`),mN(1526,`po-password`),lg(),mN(1527,`.`),lg()()(),Ml(1528,`tr`,13)(1529,`td`,14)(1530,`div`,15)(1531,`span`,16),mN(1532,` errorLimit`),ql(1533,`br`),lg()()(),Ml(1534,`td`,17)(1535,`code`,28),mN(1536,`boolean`),lg()(),Ml(1537,`td`,20)(1538,`em`)(1539,`strong`),mN(1540,`(opcional)`),lg()(),Ml(1541,`p`),mN(1542,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg(),Ml(1543,`blockquote`)(1544,`p`),mN(1545,`Caso essa propriedade seja definida como `),Ml(1546,`code`),mN(1547,`true`),lg(),mN(1548,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),lg()(),Ml(1549,`p`)(1550,`strong`),mN(1551,`Componentes compatíveis:`),lg(),Ml(1552,`code`),mN(1553,`po-checkbox-group`),lg(),mN(1554,`, `),Ml(1555,`code`),mN(1556,`po-combo`),lg(),mN(1557,`, `),Ml(1558,`code`),mN(1559,`po-datepicker`),lg(),mN(1560,`, `),Ml(1561,`code`),mN(1562,`po-datepicker-range`),lg(),mN(1563,`, `),Ml(1564,`code`),mN(1565,`po-decimal`),lg(),mN(1566,`, `),Ml(1567,`code`),mN(1568,`po-input`),lg(),mN(1569,`, `),Ml(1570,`code`),mN(1571,`po-lookup`),lg(),mN(1572,`, `),Ml(1573,`code`),mN(1574,`po-multiselect`),lg(),mN(1575,`, `),Ml(1576,`code`),mN(1577,`po-number`),lg(),mN(1578,`, `),Ml(1579,`code`),mN(1580,`po-password`),lg(),mN(1581,`, `),Ml(1582,`code`),mN(1583,`po-radio-group`),lg(),mN(1584,`, `),Ml(1585,`code`),mN(1586,`po-select`),lg(),mN(1587,`,
`),Ml(1588,`code`),mN(1589,`po-switch`),lg(),mN(1590,`, `),Ml(1591,`code`),mN(1592,`po-textarea`),lg(),mN(1593,`, `),Ml(1594,`code`),mN(1595,`po-timepicker`),lg(),mN(1596,`.`),lg()()(),Ml(1597,`tr`,13)(1598,`td`,14)(1599,`div`,15)(1600,`span`,16),mN(1601,` errorMessage`),ql(1602,`br`),lg()()(),Ml(1603,`td`,17)(1604,`code`,18),mN(1605,`string`),lg()(),Ml(1606,`td`,20)(1607,`em`)(1608,`strong`),mN(1609,`(opcional)`),lg()(),Ml(1610,`p`),mN(1611,`Mensagem que será apresentada quando o campo ficar inválido.`),lg(),Ml(1612,`p`),mN(1613,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),lg(),Ml(1614,`ul`)(1615,`li`),mN(1616,`pattern;`),lg(),Ml(1617,`li`),mN(1618,`minValue;`),lg(),Ml(1619,`li`),mN(1620,`maxValue;`),lg(),Ml(1621,`li`),mN(1622,`required;`),lg()(),Ml(1623,`blockquote`)(1624,`p`),mN(1625,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Ml(1626,`code`),mN(1627,`po-datepicker`),lg(),mN(1628,`, `),Ml(1629,`code`),mN(1630,`po-input`),lg(),mN(1631,`, `),Ml(1632,`code`),mN(1633,`po-number`),lg(),mN(1634,`, `),Ml(1635,`code`),mN(1636,`po-decimal`),lg(),mN(1637,`, `),Ml(1638,`code`),mN(1639,`po-password`),lg(),mN(1640,`, `),Ml(1641,`code`),mN(1642,`po-timepicker`),lg(),mN(1643,`, \xE9 necess\xE1rio que a propriedade
`),Ml(1644,`code`),mN(1645,`requiredFieldErrorMessage`),lg(),mN(1646,` esteja como `),Ml(1647,`code`),mN(1648,`true`),lg(),mN(1649,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Ml(1650,`code`),mN(1651,`po-datepicker-range`),lg(),mN(1652,`, `),Ml(1653,`code`),mN(1654,`po-select`),lg(),mN(1655,`, `),Ml(1656,`code`),mN(1657,`po-checkbox-group`),lg(),mN(1658,`, `),Ml(1659,`code`),mN(1660,`po-radio-group`),lg(),mN(1661,`, `),Ml(1662,`code`),mN(1663,`po-multiselect`),lg(),mN(1664,`, `),Ml(1665,`code`),mN(1666,`po-combo`),lg(),mN(1667,`,
`),Ml(1668,`code`),mN(1669,`po-lookup`),lg(),mN(1670,` e `),Ml(1671,`code`),mN(1672,`po-textarea`),lg(),mN(1673,` não é necessário passar a propriedade `),Ml(1674,`code`),mN(1675,`requiredFieldErrorMessage`),lg(),mN(1676,`.`),lg()(),Ml(1677,`p`)(1678,`strong`),mN(1679,`Componentes compatíveis:`),lg(),Ml(1680,`code`),mN(1681,`po-checkbox-group`),lg(),mN(1682,`, `),Ml(1683,`code`),mN(1684,`po-combo`),lg(),mN(1685,`, `),Ml(1686,`code`),mN(1687,`po-datepicker`),lg(),mN(1688,`, `),Ml(1689,`code`),mN(1690,`po-datepicker-range`),lg(),mN(1691,`, `),Ml(1692,`code`),mN(1693,`po-decimal`),lg(),mN(1694,`, `),Ml(1695,`code`),mN(1696,`po-input`),lg(),mN(1697,`, `),Ml(1698,`code`),mN(1699,`po-lookup`),lg(),mN(1700,`, `),Ml(1701,`code`),mN(1702,`po-multiselect`),lg(),mN(1703,`, `),Ml(1704,`code`),mN(1705,`po-number`),lg(),mN(1706,`, `),Ml(1707,`code`),mN(1708,`po-password`),lg(),mN(1709,`, `),Ml(1710,`code`),mN(1711,`po-radio-group`),lg(),mN(1712,`, `),Ml(1713,`code`),mN(1714,`po-select`),lg(),mN(1715,`,
`),Ml(1716,`code`),mN(1717,`po-switch`),lg(),mN(1718,`, `),Ml(1719,`code`),mN(1720,`po-textarea`),lg(),mN(1721,`, `),Ml(1722,`code`),mN(1723,`po-timepicker`),lg(),mN(1724,`.`),lg()()(),Ml(1725,`tr`,13)(1726,`td`,14)(1727,`div`,15)(1728,`span`,16),mN(1729,` fieldLabel`),ql(1730,`br`),lg()()(),Ml(1731,`td`,17)(1732,`code`,18),mN(1733,`string`),lg()(),Ml(1734,`td`,20)(1735,`em`)(1736,`strong`),mN(1737,`(opcional)`),lg()(),Ml(1738,`p`),mN(1739,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),lg(),Ml(1740,`p`),mN(1741,`O valor padrão é: `),Ml(1742,`code`),mN(1743,`label`),lg(),mN(1744,`.`),lg(),Ml(1745,`blockquote`)(1746,`p`),mN(1747,`Esta propriedade pode ser utilizada em conjunto com: `),Ml(1748,`code`),mN(1749,`options`),lg(),mN(1750,`, `),Ml(1751,`code`),mN(1752,`optionsService`),lg(),mN(1753,` e `),Ml(1754,`code`),mN(1755,`searchService`),lg(),mN(1756,`.`),lg()()()(),Ml(1757,`tr`,13)(1758,`td`,14)(1759,`div`,15)(1760,`span`,16),mN(1761,` fieldValue`),ql(1762,`br`),lg()()(),Ml(1763,`td`,17)(1764,`code`,18),mN(1765,`string`),lg()(),Ml(1766,`td`,20)(1767,`em`)(1768,`strong`),mN(1769,`(opcional)`),lg()(),Ml(1770,`p`),mN(1771,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),lg(),Ml(1772,`p`),mN(1773,`O valor padrão é: `),Ml(1774,`code`),mN(1775,`value`),lg(),mN(1776,`.`),lg(),Ml(1777,`blockquote`)(1778,`p`),mN(1779,`Esta propriedade pode ser utilizada em conjunto com: `),Ml(1780,`code`),mN(1781,`options`),lg(),mN(1782,`, `),Ml(1783,`code`),mN(1784,`optionsService`),lg(),mN(1785,` e `),Ml(1786,`code`),mN(1787,`searchService`),lg(),mN(1788,`.`),lg()()()(),Ml(1789,`tr`,13)(1790,`td`,14)(1791,`div`,15)(1792,`span`,16),mN(1793,` filterMinlength`),ql(1794,`br`),lg()()(),Ml(1795,`td`,17)(1796,`code`,41),mN(1797,`number`),lg()(),Ml(1798,`td`,20)(1799,`em`)(1800,`strong`),mN(1801,`(opcional)`),lg()(),Ml(1802,`p`),mN(1803,`Valor mínimo de caracteres para realizar o filtro no serviço do `),Ml(1804,`code`),mN(1805,`po-combo`),lg(),mN(1806,`.`),lg()()(),Ml(1807,`tr`,13)(1808,`td`,14)(1809,`div`,15)(1810,`span`,16),mN(1811,` filterMode`),ql(1812,`br`),lg()()(),Ml(1813,`td`,17)(1814,`code`,48),mN(1815,`PoMultiselectFilterMode`),lg()(),Ml(1816,`td`,20)(1817,`em`)(1818,`strong`),mN(1819,`(opcional)`),lg()(),Ml(1820,`p`),mN(1821,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Ml(1822,`code`),mN(1823,`startsWith`),lg(),mN(1824,`, `),Ml(1825,`code`),mN(1826,`contains`),lg(),mN(1827,` ou `),Ml(1828,`code`),mN(1829,`endsWith`),lg(),mN(1830,`.`),lg(),Ml(1831,`blockquote`)(1832,`p`),mN(1833,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),lg()(),Ml(1834,`p`)(1835,`strong`),mN(1836,`Componente compatível:`),lg(),Ml(1837,`code`),mN(1838,`po-multiselect`),lg(),mN(1839,`.`),lg()()(),Ml(1840,`tr`,13)(1841,`td`,14)(1842,`div`,15)(1843,`span`,16),mN(1844,` forceBooleanComponentType`),ql(1845,`br`),lg()()(),Ml(1846,`td`,17)(1847,`code`,49),mN(1848,`ForceBooleanComponentEnum`),lg()(),Ml(1849,`td`,20)(1850,`em`)(1851,`strong`),mN(1852,`(opcional)`),lg()(),Ml(1853,`p`),mN(1854,`Valores aceitos:`),lg(),Ml(1855,`ul`)(1856,`li`),mN(1857,`ForceBooleanComponentEnum.switch`),lg(),Ml(1858,`li`),mN(1859,`ForceBooleanComponentEnum.checkbox`),lg()()()(),Ml(1860,`tr`,13)(1861,`td`,14)(1862,`div`,15)(1863,`span`,16),mN(1864,` forceOptionsComponentType`),ql(1865,`br`),lg()()(),Ml(1866,`td`,17)(1867,`code`,50),mN(1868,`ForceOptionComponentEnum`),lg()(),Ml(1869,`td`,20)(1870,`em`)(1871,`strong`),mN(1872,`(opcional)`),lg()(),Ml(1873,`p`),mN(1874,`pode ser utilizada em conjunto com a propriedade `),Ml(1875,`code`),mN(1876,`options`),lg(),mN(1877,` forçando o componente a renderizar um `),Ml(1878,`code`),mN(1879,`po-select`),lg(),mN(1880,` ou `),Ml(1881,`code`),mN(1882,`po-radio-group`),lg(),mN(1883,`.`),lg(),Ml(1884,`p`),mN(1885,`Valores aceitos:`),lg(),Ml(1886,`ul`)(1887,`li`),mN(1888,`ForceOptionComponentEnum.radioGroup`),lg(),Ml(1889,`li`),mN(1890,`ForceOptionComponentEnum.select`),lg()(),Ml(1891,`blockquote`)(1892,`p`),mN(1893,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),Ml(1894,`code`),mN(1895,`optionsMulti`),lg(),mN(1896,` e `),Ml(1897,`code`),mN(1898,`optionsService`),lg(),mN(1899,`.`),lg()()()(),Ml(1900,`tr`,13)(1901,`td`,14)(1902,`div`,15)(1903,`span`,16),mN(1904,` formField`),ql(1905,`br`),lg()()(),Ml(1906,`td`,17)(1907,`code`,18),mN(1908,`string`),lg()(),Ml(1909,`td`,20)(1910,`em`)(1911,`strong`),mN(1912,`(opcional)`),lg()(),Ml(1913,`p`),mN(1914,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Ml(1915,`code`),mN(1916,`url`),lg(),mN(1917,`.`),lg(),Ml(1918,`blockquote`)(1919,`p`),mN(1920,`O valor default é `),Ml(1921,`code`),mN(1922,`files`),lg()()(),Ml(1923,`p`)(1924,`strong`),mN(1925,`Componente compatível`),lg(),mN(1926,`: `),Ml(1927,`code`),mN(1928,`po-upload`),lg()()()(),Ml(1929,`tr`,13)(1930,`td`,14)(1931,`div`,15)(1932,`span`,16),mN(1933,` format`),ql(1934,`br`),lg()()(),Ml(1935,`td`,17)(1936,`code`,18),mN(1937,`string `),lg(),Ml(1938,`code`,32),mN(1939,` Array<string>`),lg()(),Ml(1940,`td`,20)(1941,`em`)(1942,`strong`),mN(1943,`(opcional)`),lg()(),Ml(1944,`p`),mN(1945,`Formato de exibição no campo.`),lg(),Ml(1946,`p`),mN(1947,`Ao utilizar esta propriedade com o `),Ml(1948,`code`),mN(1949,`type`),lg(),Ml(1950,`em`),mN(1951,`PoDynamicFieldType.Date`),lg(),mN(1952,` ou `),Ml(1953,`em`),mN(1954,`PoDynamicFieldType.DateTime`),lg(),mN(1955,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),lg(),Ml(1956,`p`),mN(1957,`Valores válidos:`),lg(),Ml(1958,`ul`)(1959,`li`),mN(1960,`dd/mm/yyyy`),lg(),Ml(1961,`li`),mN(1962,`mm/dd/yyyy`),lg(),Ml(1963,`li`),mN(1964,`yyyy/mm/dd`),lg()(),Ml(1965,`p`),mN(1966,`Ao utilizar com o `),Ml(1967,`code`),mN(1968,`type`),lg(),Ml(1969,`em`),mN(1970,`PoDynamicFieldType.Time`),lg(),mN(1971,`, define o formato de exibição do horário:`),lg(),Ml(1972,`p`),mN(1973,`Valores válidos:`),lg(),Ml(1974,`ul`)(1975,`li`)(1976,`code`),mN(1977,`24`),lg(),mN(1978,`: formato de 24 horas (padrão)`),lg(),Ml(1979,`li`)(1980,`code`),mN(1981,`12`),lg(),mN(1982,`: formato de 12 horas com indicador AM/PM`),lg()(),Ml(1983,`p`),mN(1984,`Também pode-se utilizar em conjunto com `),Ml(1985,`code`),mN(1986,`searchService`),lg(),mN(1987,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),lg(),Ml(1988,`p`)(1989,`strong`),mN(1990,`Componentes compatíveis:`),lg(),Ml(1991,`code`),mN(1992,`po-datepicker`),lg(),mN(1993,`, `),Ml(1994,`code`),mN(1995,`po-datetimepicker`),lg(),mN(1996,`, `),Ml(1997,`code`),mN(1998,`po-timepicker`),lg(),mN(1999,`, `),Ml(2e3,`code`),mN(2001,`po-lookup`),lg(),mN(2002,`.`),lg()()(),Ml(2003,`tr`,13)(2004,`td`,14)(2005,`div`,15)(2006,`span`,16),mN(2007,` formatModel`),ql(2008,`br`),lg()()(),Ml(2009,`td`,17)(2010,`code`,28),mN(2011,`boolean`),lg()(),Ml(2012,`td`,20)(2013,`em`)(2014,`strong`),mN(2015,`(opcional)`),lg()(),Ml(2016,`p`),mN(2017,`Indica se o `),Ml(2018,`code`),mN(2019,`model`),lg(),mN(2020,` receberá o valor formatado pelas propriedades `),Ml(2021,`code`),mN(2022,`p-label-on`),lg(),mN(2023,` e `),Ml(2024,`code`),mN(2025,`p-label-off`),lg(),mN(2026,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),lg(),Ml(2027,`p`),mN(2028,`O valor padrão é: `),Ml(2029,`code`),mN(2030,`false`),lg(),mN(2031,`.`),lg(),Ml(2032,`blockquote`)(2033,`p`),mN(2034,`Esta propriedade está disponivel apenas para o `),Ml(2035,`code`),mN(2036,`swicth`),lg(),mN(2037,`.`),lg()()()(),Ml(2038,`tr`,13)(2039,`td`,14)(2040,`div`,15)(2041,`span`,16),mN(2042,` formatTime`),ql(2043,`br`),lg()()(),Ml(2044,`td`,17)(2045,`code`,18),mN(2046,`string`),lg()(),Ml(2047,`td`,20)(2048,`em`)(2049,`strong`),mN(2050,`(opcional)`),lg()(),Ml(2051,`p`),mN(2052,`Define o formato de exibição do timer (`),Ml(2053,`code`),mN(2054,`'12'`),lg(),mN(2055,` ou `),Ml(2056,`code`),mN(2057,`'24'`),lg(),mN(2058,`).`),lg(),Ml(2059,`p`)(2060,`strong`),mN(2061,`Componente compatível:`),lg(),Ml(2062,`code`),mN(2063,`po-datetimepicker`),lg()()()(),Ml(2064,`tr`,13)(2065,`td`,14)(2066,`div`,15)(2067,`span`,16),mN(2068,` gridColumns`),ql(2069,`br`),lg()()(),Ml(2070,`td`,17)(2071,`code`,41),mN(2072,`number`),lg()(),Ml(2073,`td`,20)(2074,`em`)(2075,`strong`),mN(2076,`(opcional)`),lg()(),Ml(2077,`p`),mN(2078,`Tamanho de exibição do campo em telas.`),lg(),Ml(2079,`p`),mN(2080,`Deve ser usado o sistema de `),Ml(2081,`strong`),mN(2082,`grid`),lg(),mN(2083,` do PO (1 ... 12 colunas).`),lg(),Ml(2084,`blockquote`)(2085,`p`),mN(2086,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),lg()()()(),Ml(2087,`tr`,13)(2088,`td`,14)(2089,`div`,15)(2090,`span`,16),mN(2091,` gridLgColumns`),ql(2092,`br`),lg()()(),Ml(2093,`td`,17)(2094,`code`,41),mN(2095,`number`),lg()(),Ml(2096,`td`,20)(2097,`em`)(2098,`strong`),mN(2099,`(opcional)`),lg()(),Ml(2100,`p`),mN(2101,`Tamanho de exibição do campo em telas grandes (lg).`),lg(),Ml(2102,`p`),mN(2103,`Deve ser usado o sistema de `),Ml(2104,`strong`),mN(2105,`grid`),lg(),mN(2106,` do PO (1 ... 12 colunas).`),lg(),Ml(2107,`blockquote`)(2108,`p`),mN(2109,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(2110,`code`),mN(2111,`gridColumns`),lg(),mN(2112,`.`),lg()()()(),Ml(2113,`tr`,13)(2114,`td`,14)(2115,`div`,15)(2116,`span`,16),mN(2117,` gridLgPull`),ql(2118,`br`),lg()()(),Ml(2119,`td`,17)(2120,`code`,41),mN(2121,`number`),lg()(),Ml(2122,`td`,20)(2123,`em`)(2124,`strong`),mN(2125,`(opcional)`),lg()(),Ml(2126,`p`),mN(2127,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),lg(),Ml(2128,`p`),mN(2129,`Deve ser usado o sistema de `),Ml(2130,`strong`),mN(2131,`grid`),lg(),mN(2132,` do PO (1 ... 11 colunas).`),lg(),Ml(2133,`blockquote`)(2134,`p`),mN(2135,`Esta propriedade não funciona com a propriedade `),Ml(2136,`code`),mN(2137,`gridColumns`),lg(),mN(2138,`. Deve-se especificar o tamanho da tela.`),lg()()()(),Ml(2139,`tr`,13)(2140,`td`,14)(2141,`div`,15)(2142,`span`,16),mN(2143,` gridMdColumns`),ql(2144,`br`),lg()()(),Ml(2145,`td`,17)(2146,`code`,41),mN(2147,`number`),lg()(),Ml(2148,`td`,20)(2149,`em`)(2150,`strong`),mN(2151,`(opcional)`),lg()(),Ml(2152,`p`),mN(2153,`Tamanho de exibição do campo em telas médias (md).`),lg(),Ml(2154,`p`),mN(2155,`Deve ser usado o sistema de `),Ml(2156,`strong`),mN(2157,`grid`),lg(),mN(2158,` do PO (1 ... 12 colunas).`),lg(),Ml(2159,`blockquote`)(2160,`p`),mN(2161,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(2162,`code`),mN(2163,`gridColumns`),lg(),mN(2164,`.`),lg()()()(),Ml(2165,`tr`,13)(2166,`td`,14)(2167,`div`,15)(2168,`span`,16),mN(2169,` gridMdPull`),ql(2170,`br`),lg()()(),Ml(2171,`td`,17)(2172,`code`,41),mN(2173,`number`),lg()(),Ml(2174,`td`,20)(2175,`em`)(2176,`strong`),mN(2177,`(opcional)`),lg()(),Ml(2178,`p`),mN(2179,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),lg(),Ml(2180,`p`),mN(2181,`Deve ser usado o sistema de `),Ml(2182,`strong`),mN(2183,`grid`),lg(),mN(2184,` do PO (1 ... 11 colunas).`),lg(),Ml(2185,`blockquote`)(2186,`p`),mN(2187,`Esta propriedade não funciona com a propriedade `),Ml(2188,`code`),mN(2189,`gridColumns`),lg(),mN(2190,`. Deve-se especificar o tamanho da tela.`),lg()()()(),Ml(2191,`tr`,13)(2192,`td`,14)(2193,`div`,15)(2194,`span`,16),mN(2195,` gridSmColumns`),ql(2196,`br`),lg()()(),Ml(2197,`td`,17)(2198,`code`,41),mN(2199,`number`),lg()(),Ml(2200,`td`,20)(2201,`em`)(2202,`strong`),mN(2203,`(opcional)`),lg()(),Ml(2204,`p`),mN(2205,`Tamanho de exibição do campo em telas menores (sm).`),lg(),Ml(2206,`p`),mN(2207,`Deve ser usado o sistema de `),Ml(2208,`strong`),mN(2209,`grid`),lg(),mN(2210,` do PO (1 ... 12 colunas).`),lg(),Ml(2211,`blockquote`)(2212,`p`),mN(2213,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(2214,`code`),mN(2215,`gridColumns`),lg(),mN(2216,`.`),lg()()()(),Ml(2217,`tr`,13)(2218,`td`,14)(2219,`div`,15)(2220,`span`,16),mN(2221,` gridSmPull`),ql(2222,`br`),lg()()(),Ml(2223,`td`,17)(2224,`code`,41),mN(2225,`number`),lg()(),Ml(2226,`td`,20)(2227,`em`)(2228,`strong`),mN(2229,`(opcional)`),lg()(),Ml(2230,`p`),mN(2231,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),lg(),Ml(2232,`p`),mN(2233,`Deve ser usado o sistema de `),Ml(2234,`strong`),mN(2235,`grid`),lg(),mN(2236,` do PO (1 ... 11 colunas).`),lg(),Ml(2237,`blockquote`)(2238,`p`),mN(2239,`Esta propriedade não funciona com a propriedade `),Ml(2240,`code`),mN(2241,`gridColumns`),lg(),mN(2242,`. Deve-se especificar o tamanho da tela.`),lg()()()(),Ml(2243,`tr`,13)(2244,`td`,14)(2245,`div`,15)(2246,`span`,16),mN(2247,` gridXlColumns`),ql(2248,`br`),lg()()(),Ml(2249,`td`,17)(2250,`code`,41),mN(2251,`number`),lg()(),Ml(2252,`td`,20)(2253,`em`)(2254,`strong`),mN(2255,`(opcional)`),lg()(),Ml(2256,`p`),mN(2257,`Tamanho de exibição do campo em telas extra grandes (xl).`),lg(),Ml(2258,`p`),mN(2259,`Deve ser usado o sistema de `),Ml(2260,`strong`),mN(2261,`grid`),lg(),mN(2262,` do PO (1 ... 12 colunas).`),lg(),Ml(2263,`blockquote`)(2264,`p`),mN(2265,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(2266,`code`),mN(2267,`gridColumns`),lg(),mN(2268,`.`),lg()()()(),Ml(2269,`tr`,13)(2270,`td`,14)(2271,`div`,15)(2272,`span`,16),mN(2273,` gridXlPull`),ql(2274,`br`),lg()()(),Ml(2275,`td`,17)(2276,`code`,41),mN(2277,`number`),lg()(),Ml(2278,`td`,20)(2279,`em`)(2280,`strong`),mN(2281,`(opcional)`),lg()(),Ml(2282,`p`),mN(2283,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),lg(),Ml(2284,`p`),mN(2285,`Deve ser usado o sistema de `),Ml(2286,`strong`),mN(2287,`grid`),lg(),mN(2288,` do PO (1 ... 11 colunas).`),lg(),Ml(2289,`blockquote`)(2290,`p`),mN(2291,`Esta propriedade não funciona com a propriedade `),Ml(2292,`code`),mN(2293,`gridColumns`),lg(),mN(2294,`. Deve-se especificar o tamanho da tela.`),lg()()()(),Ml(2295,`tr`,13)(2296,`td`,14)(2297,`div`,15)(2298,`span`,16),mN(2299,` headers`),ql(2300,`br`),lg()()(),Ml(2301,`td`,17)(2302,`code`,51),mN(2303,`{ [name: string]: string `),lg(),Ml(2304,`code`,52),mN(2305,` Array<string>;
}`),lg()(),Ml(2306,`td`,20)(2307,`em`)(2308,`strong`),mN(2309,`(opcional)`),lg()(),Ml(2310,`p`),mN(2311,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),lg(),Ml(2312,`p`)(2313,`strong`),mN(2314,`Componente compatível`),lg(),mN(2315,`: `),Ml(2316,`code`),mN(2317,`po-upload`),lg()()()(),Ml(2318,`tr`,13)(2319,`td`,14)(2320,`div`,15)(2321,`span`,16),mN(2322,` help`),ql(2323,`br`),lg()()(),Ml(2324,`td`,17)(2325,`code`,18),mN(2326,`string`),lg()(),Ml(2327,`td`,20)(2328,`em`)(2329,`strong`),mN(2330,`(opcional)`),lg()(),Ml(2331,`p`),mN(2332,`Texto de ajuda.`),lg()()(),Ml(2333,`tr`,13)(2334,`td`,14)(2335,`div`,15)(2336,`span`,16),mN(2337,` helper`),ql(2338,`br`),lg()()(),Ml(2339,`td`,17)(2340,`code`,18),mN(2341,`string `),lg(),Ml(2342,`code`,53),mN(2343,` PoHelperOptions`),lg()(),Ml(2344,`td`,20)(2345,`em`)(2346,`strong`),mN(2347,`(opcional)`),lg()(),Ml(2348,`p`),mN(2349,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),lg()()(),Ml(2350,`tr`,13)(2351,`td`,14)(2352,`div`,15)(2353,`span`,16),mN(2354,` hideLabelStatus`),ql(2355,`br`),lg()()(),Ml(2356,`td`,17)(2357,`code`,28),mN(2358,`boolean`),lg()(),Ml(2359,`td`,20)(2360,`em`)(2361,`strong`),mN(2362,`(opcional)`),lg()(),Ml(2363,`p`),mN(2364,`Indica se o status do `),Ml(2365,`code`),mN(2366,`model`),lg(),mN(2367,` será escondido visualmente ao lado do switch`),lg()()(),Ml(2368,`tr`,13)(2369,`td`,14)(2370,`div`,15)(2371,`span`,16),mN(2372,` hidePasswordPeek`),ql(2373,`br`),lg()()(),Ml(2374,`td`,17)(2375,`code`,28),mN(2376,`boolean`),lg()(),Ml(2377,`td`,20)(2378,`em`)(2379,`strong`),mN(2380,`(opcional)`),lg()(),Ml(2381,`p`),mN(2382,`Permite esconder a função de espiar a senha digitada no `),Ml(2383,`code`),mN(2384,`po-password`),lg(),mN(2385,`.`),lg()()(),Ml(2386,`tr`,13)(2387,`td`,14)(2388,`div`,15)(2389,`span`,16),mN(2390,` hideRestrictionsInfo`),ql(2391,`br`),lg()()(),Ml(2392,`td`,17)(2393,`code`,28),mN(2394,`boolean`),lg()(),Ml(2395,`td`,20)(2396,`em`)(2397,`strong`),mN(2398,`(opcional)`),lg()(),Ml(2399,`p`),mN(2400,`Oculta visualmente as informações de restrições para o upload.`),lg(),Ml(2401,`p`)(2402,`strong`),mN(2403,`Componente compatível`),lg(),mN(2404,`: `),Ml(2405,`code`),mN(2406,`po-upload`),lg()()()(),Ml(2407,`tr`,13)(2408,`td`,14)(2409,`div`,15)(2410,`span`,16),mN(2411,` hideSearch`),ql(2412,`br`),lg()()(),Ml(2413,`td`,17)(2414,`code`,28),mN(2415,`boolean`),lg()(),Ml(2416,`td`,20)(2417,`em`)(2418,`strong`),mN(2419,`(opcional)`),lg()(),Ml(2420,`p`),mN(2421,`Esconde o campo de pesquisa existente dentro do dropdown do `),Ml(2422,`code`),mN(2423,`po-multiselect`),lg(),mN(2424,`.`),lg()()(),Ml(2425,`tr`,13)(2426,`td`,14)(2427,`div`,15)(2428,`span`,16),mN(2429,` hideSelectAll`),ql(2430,`br`),lg()()(),Ml(2431,`td`,17)(2432,`code`,28),mN(2433,`boolean`),lg()(),Ml(2434,`td`,20)(2435,`em`)(2436,`strong`),mN(2437,`(opcional)`),lg()(),Ml(2438,`p`),mN(2439,`Indica se o campo "Selecionar todos" do `),Ml(2440,`code`),mN(2441,`po-multiselect`),lg(),mN(2442,` será escondido.`),lg()()(),Ml(2443,`tr`,13)(2444,`td`,14)(2445,`div`,15)(2446,`span`,16),mN(2447,` hideSelectButton`),ql(2448,`br`),lg()()(),Ml(2449,`td`,17)(2450,`code`,28),mN(2451,`boolean`),lg()(),Ml(2452,`td`,20)(2453,`em`)(2454,`strong`),mN(2455,`(opcional)`),lg()(),Ml(2456,`p`),mN(2457,`Omite o botão de seleção de arquivos.`),lg(),Ml(2458,`blockquote`)(2459,`p`),mN(2460,`Caso o valor definido seja `),Ml(2461,`code`),mN(2462,`true`),lg(),mN(2463,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ml(2464,`code`),mN(2465,`selectFiles()`),lg(),mN(2466,` para seleção de arquivos.`),lg()(),Ml(2467,`p`)(2468,`strong`),mN(2469,`Componente compatível`),lg(),mN(2470,`: `),Ml(2471,`code`),mN(2472,`po-upload`),lg()()()(),Ml(2473,`tr`,13)(2474,`td`,14)(2475,`div`,15)(2476,`span`,16),mN(2477,` hideSendButton`),ql(2478,`br`),lg()()(),Ml(2479,`td`,17)(2480,`code`,28),mN(2481,`boolean`),lg()(),Ml(2482,`td`,20)(2483,`em`)(2484,`strong`),mN(2485,`(opcional)`),lg()(),Ml(2486,`p`),mN(2487,`Omite o botão de envio de arquivos.`),lg(),Ml(2488,`blockquote`)(2489,`p`),mN(2490,`Caso o valor definido seja `),Ml(2491,`code`),mN(2492,`true`),lg(),mN(2493,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ml(2494,`code`),mN(2495,`sendFiles()`),lg(),mN(2496,` para envio do(s) arquivo(s) selecionado(s).`),lg()(),Ml(2497,`p`)(2498,`strong`),mN(2499,`Componente compatível`),lg(),mN(2500,`: `),Ml(2501,`code`),mN(2502,`po-upload`),lg()()()(),Ml(2503,`tr`,13)(2504,`td`,14)(2505,`div`,15)(2506,`span`,16),mN(2507,` icon`),ql(2508,`br`),lg()()(),Ml(2509,`td`,17)(2510,`code`,18),mN(2511,`string `),lg(),Ml(2512,`code`,54),mN(2513,` TemplateRef<void>`),lg()(),Ml(2514,`td`,20)(2515,`em`)(2516,`strong`),mN(2517,`(opcional)`),lg()(),Ml(2518,`p`),mN(2519,`Define o ícone que será exibido no início do campo.`),lg(),Ml(2520,`blockquote`)(2521,`p`),mN(2522,`Esta propriedade só pode ser utilizado nos campos:`),lg()(),Ml(2523,`ul`)(2524,`li`),mN(2525,`Input;`),lg(),Ml(2526,`li`),mN(2527,`Number;`),lg(),Ml(2528,`li`),mN(2529,`Decimal;`),lg(),Ml(2530,`li`),mN(2531,`Combo;`),lg(),Ml(2532,`li`),mN(2533,`Password;`),lg()(),Ml(2534,`blockquote`)(2535,`p`),mN(2536,`Veja a disponibilidade de ícones em `),Ml(2537,`a`,55),mN(2538,`biblioteca de ícones`),lg(),mN(2539,`.`),lg()()()(),Ml(2540,`tr`,13)(2541,`td`,14)(2542,`div`,15)(2543,`span`,16),mN(2544,` infiniteScroll`),ql(2545,`br`),lg()()(),Ml(2546,`td`,17)(2547,`code`,28),mN(2548,`boolean`),lg()(),Ml(2549,`td`,20)(2550,`em`)(2551,`strong`),mN(2552,`(opcional)`),lg()(),Ml(2553,`p`),mN(2554,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),lg(),Ml(2555,`p`)(2556,`strong`),mN(2557,`Componentes compatíveis:`),lg(),Ml(2558,`code`),mN(2559,`po-combo`),lg(),mN(2560,`, `),Ml(2561,`code`),mN(2562,`po-lookup`),lg(),mN(2563,`.`),lg()()(),Ml(2564,`tr`,13)(2565,`td`,14)(2566,`div`,15)(2567,`span`,16),mN(2568,` infiniteScrollDistance`),ql(2569,`br`),lg()()(),Ml(2570,`td`,17)(2571,`code`,41),mN(2572,`number`),lg()(),Ml(2573,`td`,20)(2574,`em`)(2575,`strong`),mN(2576,`(opcional)`),lg()(),Ml(2577,`p`),mN(2578,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Ml(2579,`strong`),mN(2580,`Exemplos`),lg(),Ml(2581,`code`),mN(2582,`{ infiniteScrollDistance: 80 }`),lg(),mN(2583,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),lg(),Ml(2584,`p`)(2585,`strong`),mN(2586,`Componente compatível:`),lg(),Ml(2587,`code`),mN(2588,`po-combo`),lg(),mN(2589,`.`),lg()()(),Ml(2590,`tr`,13)(2591,`td`,14)(2592,`div`,15)(2593,`span`,16),mN(2594,` invalidValue`),ql(2595,`br`),lg()()(),Ml(2596,`td`,17)(2597,`code`,28),mN(2598,`boolean`),lg()(),Ml(2599,`td`,20)(2600,`em`)(2601,`strong`),mN(2602,`(opcional)`),lg()(),Ml(2603,`p`),mN(2604,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Ml(2605,`code`),mN(2606,`p-field-error-message`),lg(),mN(2607,`.`),lg(),Ml(2608,`blockquote`)(2609,`p`),mN(2610,`Caso essa propriedade seja definida como `),Ml(2611,`code`),mN(2612,`true`),lg(),mN(2613,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),lg()(),Ml(2614,`p`)(2615,`strong`),mN(2616,`Componente compatível`),lg(),mN(2617,`: `),Ml(2618,`code`),mN(2619,`po-switch`),lg()()()(),Ml(2620,`tr`,13)(2621,`td`,14)(2622,`div`,15)(2623,`span`,16),mN(2624,` isoFormat`),ql(2625,`br`),lg()()(),Ml(2626,`td`,17)(2627,`code`,56),mN(2628,`PoDatepickerIsoFormat`),lg()(),Ml(2629,`td`,20)(2630,`em`)(2631,`strong`),mN(2632,`(opcional)`),lg()(),Ml(2633,`p`),mN(2634,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),lg(),Ml(2635,`blockquote`)(2636,`p`),mN(2637,`Veja os valores válidos no `),Ml(2638,`code`),mN(2639,`PoDatepickerIsoFormat`),lg(),mN(2640,`.`),lg()(),Ml(2641,`p`)(2642,`strong`),mN(2643,`Componente compatível:`),lg(),Ml(2644,`code`),mN(2645,`po-datepicker`),lg()()()(),Ml(2646,`tr`,13)(2647,`td`,14)(2648,`div`,15)(2649,`span`,16),mN(2650,` key`),ql(2651,`br`),lg()()(),Ml(2652,`td`,17)(2653,`code`,28),mN(2654,`boolean`),lg()(),Ml(2655,`td`,20)(2656,`em`)(2657,`strong`),mN(2658,`(opcional)`),lg()(),Ml(2659,`p`),mN(2660,`Identificador`),lg()()(),Ml(2661,`tr`,13)(2662,`td`,14)(2663,`div`,15)(2664,`span`,16),mN(2665,` keydown`),ql(2666,`br`),lg()()(),Ml(2667,`td`,17)(2668,`code`,29),mN(2669,`Function`),lg()(),Ml(2670,`td`,20)(2671,`em`)(2672,`strong`),mN(2673,`(opcional)`),lg()(),Ml(2674,`p`),mN(2675,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(2676,`code`),mN(2677,`KeyboardEvent`),lg(),mN(2678,` com informações sobre a tecla.`),lg()()(),Ml(2679,`tr`,13)(2680,`td`,14)(2681,`div`,15)(2682,`span`,16),mN(2683,` label`),ql(2684,`br`),lg()()(),Ml(2685,`td`,17)(2686,`code`,18),mN(2687,`string`),lg()(),Ml(2688,`td`,20)(2689,`em`)(2690,`strong`),mN(2691,`(opcional)`),lg()(),Ml(2692,`p`),mN(2693,`Rótulo do campo exibido.`),lg(),Ml(2694,`p`),mN(2695,`Caso não seja informado, será utilizado como `),Ml(2696,`code`),mN(2697,`label`),lg(),mN(2698,` o valor da propriedade `),Ml(2699,`code`),mN(2700,`property`),lg(),mN(2701,` com a primeira letra em maiúsculo.`),lg()()(),Ml(2702,`tr`,13)(2703,`td`,14)(2704,`div`,15)(2705,`span`,16),mN(2706,` labelPosition`),ql(2707,`br`),lg()()(),Ml(2708,`td`,17)(2709,`code`,57),mN(2710,`PoSwitchLabelPosition`),lg()(),Ml(2711,`td`,20)(2712,`em`)(2713,`strong`),mN(2714,`(opcional)`),lg()(),Ml(2715,`p`),mN(2716,`Posição de exibição do rótulo do PoSwitch.`),lg(),Ml(2717,`blockquote`)(2718,`p`),mN(2719,`Por padrão exibe à direita.`),lg()()()(),Ml(2720,`tr`,13)(2721,`td`,14)(2722,`div`,15)(2723,`span`,16),mN(2724,` listboxControlPosition`),ql(2725,`br`),lg()()(),Ml(2726,`td`,17)(2727,`code`,58),mN(2728,`'top' `),lg(),Ml(2729,`code`,59),mN(2730,` 'bottom'`),lg()(),Ml(2731,`td`,20)(2732,`em`)(2733,`strong`),mN(2734,`(opcional)`),lg()(),Ml(2735,`p`),mN(2736,`Define a direção preferida para exibição do `),Ml(2737,`code`),mN(2738,`listbox`),lg(),mN(2739,` em relação ao campo (`),Ml(2740,`code`),mN(2741,`top`),lg(),mN(2742,` ou `),Ml(2743,`code`),mN(2744,`bottom`),lg(),mN(2745,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),lg(),Ml(2746,`p`)(2747,`strong`),mN(2748,`Componentes compatíveis:`),lg(),Ml(2749,`code`),mN(2750,`po-multiselect`),lg(),mN(2751,`, `),Ml(2752,`code`),mN(2753,`po-combo`),lg(),mN(2754,`.`),lg()()(),Ml(2755,`tr`,13)(2756,`td`,14)(2757,`div`,15)(2758,`span`,16),mN(2759,` literals`),ql(2760,`br`),lg()()(),Ml(2761,`td`,17)(2762,`code`,60),mN(2763,`PoLookupLiterals `),lg(),Ml(2764,`code`,61),mN(2765,` PoMultiselectLiterals `),lg(),Ml(2766,`code`,62),mN(2767,` PoComboLiterals `),lg(),Ml(2768,`code`,63),mN(2769,` PoDatepickerRangeLiterals `),lg(),Ml(2770,`code`,64),mN(2771,` PoUploadLiterals`),lg()(),Ml(2772,`td`,20)(2773,`em`)(2774,`strong`),mN(2775,`(opcional)`),lg()(),Ml(2776,`p`),mN(2777,`Objeto com as literais usadas para os seguintes componentes: `),Ml(2778,`code`),mN(2779,`po-lookup`),lg(),mN(2780,`, `),Ml(2781,`code`),mN(2782,`po-multiselect`),lg(),mN(2783,`, `),Ml(2784,`code`),mN(2785,`po-combo`),lg(),mN(2786,` e `),Ml(2787,`code`),mN(2788,`po-datepicker-range`),lg(),mN(2789,`.`),lg(),Ml(2790,`blockquote`)(2791,`p`),mN(2792,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),lg()(),Ml(2793,`p`)(2794,`strong`),mN(2795,`Componentes compatíveis:`),lg(),Ml(2796,`code`),mN(2797,`po-lookup`),lg(),mN(2798,`, `),Ml(2799,`code`),mN(2800,`po-multiselect`),lg(),mN(2801,`, `),Ml(2802,`code`),mN(2803,`po-combo`),lg(),mN(2804,`, `),Ml(2805,`code`),mN(2806,`po-datepicker-range`),lg()()()(),Ml(2807,`tr`,13)(2808,`td`,14)(2809,`div`,15)(2810,`span`,16),mN(2811,` loading`),ql(2812,`br`),lg()()(),Ml(2813,`td`,17)(2814,`code`,28),mN(2815,`boolean`),lg()(),Ml(2816,`td`,20)(2817,`em`)(2818,`strong`),mN(2819,`(opcional)`),lg()(),Ml(2820,`p`),mN(2821,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),lg(),Ml(2822,`blockquote`)(2823,`p`),mN(2824,`Por padrão é `),Ml(2825,`code`),mN(2826,`false`),lg(),mN(2827,`.`),lg()(),Ml(2828,`p`)(2829,`strong`),mN(2830,`Componentes compatíveis:`),lg(),Ml(2831,`code`),mN(2832,`po-datepicker`),lg(),mN(2833,`, `),Ml(2834,`code`),mN(2835,`po-datepicker-range`),lg(),mN(2836,`, `),Ml(2837,`code`),mN(2838,`po-number`),lg(),mN(2839,`, `),Ml(2840,`code`),mN(2841,`po-decimal`),lg(),mN(2842,`,
`),Ml(2843,`code`),mN(2844,`po-input`),lg(),mN(2845,`, `),Ml(2846,`code`),mN(2847,`po-select`),lg(),mN(2848,`, `),Ml(2849,`code`),mN(2850,`po-switch`),lg(),mN(2851,`, `),Ml(2852,`code`),mN(2853,`po-combo`),lg(),mN(2854,`, `),Ml(2855,`code`),mN(2856,`po-lookup`),lg(),mN(2857,`, `),Ml(2858,`code`),mN(2859,`po-multiselect`),lg(),mN(2860,`,
`),Ml(2861,`code`),mN(2862,`po-textarea`),lg(),mN(2863,`, `),Ml(2864,`code`),mN(2865,`po-password`),lg(),mN(2866,`, `),Ml(2867,`code`),mN(2868,`po-upload`),lg(),mN(2869,`.`),lg()()(),Ml(2870,`tr`,13)(2871,`td`,14)(2872,`div`,15)(2873,`span`,16),mN(2874,` locale`),ql(2875,`br`),lg()()(),Ml(2876,`td`,17)(2877,`code`,18),mN(2878,`string`),lg()(),Ml(2879,`td`,20)(2880,`em`)(2881,`strong`),mN(2882,`(opcional)`),lg()(),Ml(2883,`p`),mN(2884,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Ml(2885,`a`,65)(2886,`code`),mN(2887,`I18n`),lg()()(),Ml(2888,`p`),mN(2889,`Exemplo de utilização:`),lg(),Ml(2890,`pre`)(2891,`code`),mN(2892,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),lg()(),Ml(2893,`blockquote`)(2894,`p`),mN(2895,`Para ver quais linguagens suportadas acesse `),Ml(2896,`a`,65)(2897,`code`),mN(2898,`I18n`),lg()()()(),Ml(2899,`p`)(2900,`strong`),mN(2901,`Componentes compatíveis:`),lg(),Ml(2902,`code`),mN(2903,`po-datepicker`),lg(),mN(2904,`, `),Ml(2905,`code`),mN(2906,`po-decimal`),lg(),mN(2907,`, `),Ml(2908,`code`),mN(2909,`po-timepicker`),lg(),mN(2910,`.`),lg()()(),Ml(2911,`tr`,13)(2912,`td`,14)(2913,`div`,15)(2914,`span`,16),mN(2915,` mask`),ql(2916,`br`),lg()()(),Ml(2917,`td`,17)(2918,`code`,18),mN(2919,`string`),lg()(),Ml(2920,`td`,20)(2921,`em`)(2922,`strong`),mN(2923,`(opcional)`),lg()(),Ml(2924,`p`),mN(2925,`Máscara para o campo.`),lg(),Ml(2926,`p`)(2927,`strong`),mN(2928,`Componente compatível:`),lg(),Ml(2929,`code`),mN(2930,`po-input`),lg(),mN(2931,`.`),lg(),Ml(2932,`blockquote`)(2933,`p`),mN(2934,`também é atribuído ao utilizar a propriedade `),Ml(2935,`code`),mN(2936,`type: time`),lg(),mN(2937,`.`),lg()(),Ml(2938,`blockquote`)(2939,`p`),mN(2940,`Incompatível com `),Ml(2941,`code`),mN(2942,`po-decimal`),lg(),mN(2943,`.`),lg()()()(),Ml(2944,`tr`,13)(2945,`td`,14)(2946,`div`,15)(2947,`span`,16),mN(2948,` maskFormatModel`),ql(2949,`br`),lg()()(),Ml(2950,`td`,17)(2951,`code`,28),mN(2952,`boolean`),lg()(),Ml(2953,`td`,20)(2954,`em`)(2955,`strong`),mN(2956,`(opcional)`),lg()(),Ml(2957,`p`),mN(2958,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),Ml(2959,`code`),mN(2960,`false`),lg(),mN(2961,`.`),lg(),Ml(2962,`p`)(2963,`strong`),mN(2964,`Componente compatível:`),lg(),Ml(2965,`code`),mN(2966,`po-input`),lg(),mN(2967,`.`),lg(),Ml(2968,`blockquote`)(2969,`p`),mN(2970,`também é atribuído ao utilizar a propriedade `),Ml(2971,`code`),mN(2972,`type: time`),lg(),mN(2973,`.`),lg()()()(),Ml(2974,`tr`,13)(2975,`td`,14)(2976,`div`,15)(2977,`span`,16),mN(2978,` maskNoLengthValidation`),ql(2979,`br`),lg()()(),Ml(2980,`td`,17)(2981,`code`,28),mN(2982,`boolean`),lg()(),Ml(2983,`td`,20)(2984,`em`)(2985,`strong`),mN(2986,`(opcional)`),lg()(),Ml(2987,`p`),mN(2988,`Controla como o componente aplica as validações de comprimento mínimo (`),Ml(2989,`code`),mN(2990,`minLength`),lg(),mN(2991,`) e máximo (`),Ml(2992,`code`),mN(2993,`maxLength`),lg(),mN(2994,`) quando há uma máscara (`),Ml(2995,`code`),mN(2996,`p-mask`),lg(),mN(2997,`) definida.`),lg(),Ml(2998,`ul`)(2999,`li`),mN(3e3,`Quando `),Ml(3001,`code`),mN(3002,`true`),lg(),mN(3003,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),lg(),Ml(3004,`li`),mN(3005,`Quando `),Ml(3006,`code`),mN(3007,`false`),lg(),mN(3008,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),lg()(),Ml(3009,`p`)(3010,`strong`),mN(3011,`Componentes compatíveis:`),lg(),Ml(3012,`code`),mN(3013,`po-input`),lg(),mN(3014,`, `),Ml(3015,`code`),mN(3016,`po-decimal`),lg(),mN(3017,`.`),lg(),Ml(3018,`blockquote`)(3019,`p`),mN(3020,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ml(3021,`code`),mN(3022,`p-mask-format-model`),lg(),mN(3023,`.`),lg()(),Ml(3024,`p`),mN(3025,`Exemplo:`),lg(),Ml(3026,`pre`)(3027,`code`),mN(3028,`fields:Array<PoDynamicFormField> = [
{
  property: 'CNPJ maskNoLengthValidation TRUE',
  required: true,
  showRequired: true,
  mask: '99.999.999/9999-99',
  pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
  maskNoLengthValidation: true,
  maxLength: 14,
  minLength: 0
}
`),lg()(),Ml(3029,`ul`)(3030,`li`),mN(3031,`Entrada: `),Ml(3032,`code`),mN(3033,`11.111.111/1111-11`),lg(),mN(3034,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),lg()()()(),Ml(3035,`tr`,13)(3036,`td`,14)(3037,`div`,15)(3038,`span`,16),mN(3039,` maxLength`),ql(3040,`br`),lg()()(),Ml(3041,`td`,17)(3042,`code`,41),mN(3043,`number`),lg()(),Ml(3044,`td`,20)(3045,`em`)(3046,`strong`),mN(3047,`(opcional)`),lg()(),Ml(3048,`p`),mN(3049,`Tamanho máximo de caracteres.`),lg(),Ml(3050,`p`)(3051,`strong`),mN(3052,`Componentes compatíveis:`),lg(),Ml(3053,`code`),mN(3054,`po-input`),lg(),mN(3055,`, `),Ml(3056,`code`),mN(3057,`po-number`),lg(),mN(3058,`, `),Ml(3059,`code`),mN(3060,`po-decimal`),lg(),mN(3061,`, `),Ml(3062,`code`),mN(3063,`po-textarea`),lg(),mN(3064,`, `),Ml(3065,`code`),mN(3066,`po-password`),lg(),mN(3067,`.`),lg()()(),Ml(3068,`tr`,13)(3069,`td`,14)(3070,`div`,15)(3071,`span`,16),mN(3072,` maxTime`),ql(3073,`br`),lg()()(),Ml(3074,`td`,17)(3075,`code`,18),mN(3076,`string`),lg()(),Ml(3077,`td`,20)(3078,`em`)(3079,`strong`),mN(3080,`(opcional)`),lg()(),Ml(3081,`p`),mN(3082,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Ml(3083,`code`),mN(3084,`HH:mm`),lg(),mN(3085,` ou `),Ml(3086,`code`),mN(3087,`HH:mm:ss`),lg(),mN(3088,`.`),lg(),Ml(3089,`p`)(3090,`strong`),mN(3091,`Componente compatível:`),lg(),Ml(3092,`code`),mN(3093,`po-datetimepicker`),lg(),mN(3094,`, `),Ml(3095,`code`),mN(3096,`po-timepicker`),lg()()()(),Ml(3097,`tr`,13)(3098,`td`,14)(3099,`div`,15)(3100,`span`,16),mN(3101,` maxValue`),ql(3102,`br`),lg()()(),Ml(3103,`td`,17)(3104,`code`,18),mN(3105,`string `),lg(),Ml(3106,`code`,41),mN(3107,` number`),lg()(),Ml(3108,`td`,20)(3109,`em`)(3110,`strong`),mN(3111,`(opcional)`),lg()(),Ml(3112,`p`),mN(3113,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Ml(3114,`em`),mN(3115,`number`),lg(),mN(3116,`, `),Ml(3117,`em`),mN(3118,`date`),lg(),mN(3119,`, `),Ml(3120,`em`),mN(3121,`dateTime`),lg(),mN(3122,` ou `),Ml(3123,`em`),mN(3124,`time`),lg(),mN(3125,`.`),lg(),Ml(3126,`blockquote`)(3127,`p`),mN(3128,`Para `),Ml(3129,`code`),mN(3130,`po-timepicker`),lg(),mN(3131,`, o valor deve estar no formato `),Ml(3132,`code`),mN(3133,`HH:mm`),lg(),mN(3134,` ou `),Ml(3135,`code`),mN(3136,`HH:mm:ss`),lg(),mN(3137,`.`),lg()(),Ml(3138,`p`)(3139,`strong`),mN(3140,`Componentes compatíveis:`),lg(),Ml(3141,`code`),mN(3142,`po-datepicker`),lg(),mN(3143,`, `),Ml(3144,`code`),mN(3145,`po-datepicker-range`),lg(),mN(3146,`, `),Ml(3147,`code`),mN(3148,`po-number`),lg(),mN(3149,`, `),Ml(3150,`code`),mN(3151,`po-decimal`),lg(),mN(3152,`, `),Ml(3153,`code`),mN(3154,`po-timepicker`),lg()()()(),Ml(3155,`tr`,13)(3156,`td`,14)(3157,`div`,15)(3158,`span`,16),mN(3159,` minLength`),ql(3160,`br`),lg()()(),Ml(3161,`td`,17)(3162,`code`,41),mN(3163,`number`),lg()(),Ml(3164,`td`,20)(3165,`em`)(3166,`strong`),mN(3167,`(opcional)`),lg()(),Ml(3168,`p`),mN(3169,`Tamanho mínimo de caracteres.`),lg(),Ml(3170,`p`)(3171,`strong`),mN(3172,`Componentes compatíveis:`),lg(),Ml(3173,`code`),mN(3174,`po-input`),lg(),mN(3175,`, `),Ml(3176,`code`),mN(3177,`po-number`),lg(),mN(3178,`, `),Ml(3179,`code`),mN(3180,`po-decimal`),lg(),mN(3181,`, `),Ml(3182,`code`),mN(3183,`po-textarea`),lg(),mN(3184,`, `),Ml(3185,`code`),mN(3186,`po-password`),lg(),mN(3187,`.`),lg()()(),Ml(3188,`tr`,13)(3189,`td`,14)(3190,`div`,15)(3191,`span`,16),mN(3192,` minTime`),ql(3193,`br`),lg()()(),Ml(3194,`td`,17)(3195,`code`,18),mN(3196,`string`),lg()(),Ml(3197,`td`,20)(3198,`em`)(3199,`strong`),mN(3200,`(opcional)`),lg()(),Ml(3201,`p`),mN(3202,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Ml(3203,`code`),mN(3204,`HH:mm`),lg(),mN(3205,` ou `),Ml(3206,`code`),mN(3207,`HH:mm:ss`),lg(),mN(3208,`.`),lg(),Ml(3209,`p`)(3210,`strong`),mN(3211,`Componente compatível:`),lg(),Ml(3212,`code`),mN(3213,`po-datetimepicker`),lg(),mN(3214,`, `),Ml(3215,`code`),mN(3216,`po-timepicker`),lg()()()(),Ml(3217,`tr`,13)(3218,`td`,14)(3219,`div`,15)(3220,`span`,16),mN(3221,` minValue`),ql(3222,`br`),lg()()(),Ml(3223,`td`,17)(3224,`code`,18),mN(3225,`string `),lg(),Ml(3226,`code`,41),mN(3227,` number`),lg()(),Ml(3228,`td`,20)(3229,`em`)(3230,`strong`),mN(3231,`(opcional)`),lg()(),Ml(3232,`p`),mN(3233,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Ml(3234,`em`),mN(3235,`number`),lg(),mN(3236,`, `),Ml(3237,`em`),mN(3238,`date`),lg(),mN(3239,`, `),Ml(3240,`em`),mN(3241,`dateTime`),lg(),mN(3242,` ou `),Ml(3243,`em`),mN(3244,`time`),lg(),mN(3245,`.`),lg(),Ml(3246,`blockquote`)(3247,`p`),mN(3248,`Para `),Ml(3249,`code`),mN(3250,`po-timepicker`),lg(),mN(3251,`, o valor deve estar no formato `),Ml(3252,`code`),mN(3253,`HH:mm`),lg(),mN(3254,` ou `),Ml(3255,`code`),mN(3256,`HH:mm:ss`),lg(),mN(3257,`.`),lg()(),Ml(3258,`p`)(3259,`strong`),mN(3260,`Componentes compatíveis:`),lg(),Ml(3261,`code`),mN(3262,`po-datepicker`),lg(),mN(3263,`, `),Ml(3264,`code`),mN(3265,`po-datepicker-range`),lg(),mN(3266,`, `),Ml(3267,`code`),mN(3268,`po-number`),lg(),mN(3269,`, `),Ml(3270,`code`),mN(3271,`po-decimal`),lg(),mN(3272,`, `),Ml(3273,`code`),mN(3274,`po-timepicker`),lg()()()(),Ml(3275,`tr`,13)(3276,`td`,14)(3277,`div`,15)(3278,`span`,16),mN(3279,` minuteInterval`),ql(3280,`br`),lg()()(),Ml(3281,`td`,17)(3282,`code`,41),mN(3283,`number`),lg()(),Ml(3284,`td`,20)(3285,`em`)(3286,`strong`),mN(3287,`(opcional)`),lg()(),Ml(3288,`p`),mN(3289,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),lg()()(),Ml(3290,`tr`,13)(3291,`td`,14)(3292,`div`,15)(3293,`span`,16),mN(3294,` mode`),ql(3295,`br`),lg()()(),Ml(3296,`td`,17)(3297,`code`,66),mN(3298,`'month-year' `),lg(),Ml(3299,`code`,67),mN(3300,` 'year'`),lg()(),Ml(3301,`td`,20)(3302,`em`)(3303,`strong`),mN(3304,`(opcional)`),lg()(),Ml(3305,`p`),mN(3306,`Define o modo de seleção do `),Ml(3307,`code`),mN(3308,`po-datepicker`),lg(),mN(3309,`.`),lg(),Ml(3310,`p`),mN(3311,`Valores aceitos:`),lg(),Ml(3312,`ul`)(3313,`li`)(3314,`code`),mN(3315,`'month-year'`),lg(),mN(3316,`: exibe seleção de mês e ano (formato `),Ml(3317,`code`),mN(3318,`MM/YYYY`),lg(),mN(3319,`)`),lg(),Ml(3320,`li`)(3321,`code`),mN(3322,`'year'`),lg(),mN(3323,`: exibe seleção apenas de ano (formato `),Ml(3324,`code`),mN(3325,`YYYY`),lg(),mN(3326,`)`),lg()(),Ml(3327,`p`)(3328,`strong`),mN(3329,`Componente compatível:`),lg(),Ml(3330,`code`),mN(3331,`po-datepicker`),lg()()()(),Ml(3332,`tr`,13)(3333,`td`,14)(3334,`div`,15)(3335,`span`,16),mN(3336,` modelFormat`),ql(3337,`br`),lg()()(),Ml(3338,`td`,17)(3339,`code`,68),mN(3340,`PoTimepickerModelFormat`),lg()(),Ml(3341,`td`,20)(3342,`em`)(3343,`strong`),mN(3344,`(opcional)`),lg()(),Ml(3345,`p`),mN(3346,`Define o formato do valor do horário a ser utilizado no model do `),Ml(3347,`code`),mN(3348,`po-timepicker`),lg(),mN(3349,`.`),lg(),Ml(3350,`blockquote`)(3351,`p`),mN(3352,`Veja os valores válidos no `),Ml(3353,`code`),mN(3354,`PoTimepickerModelFormat`),lg(),mN(3355,`.`),lg()(),Ml(3356,`p`)(3357,`strong`),mN(3358,`Componente compatível:`),lg(),Ml(3359,`code`),mN(3360,`po-timepicker`),lg()()()(),Ml(3361,`tr`,13)(3362,`td`,14)(3363,`div`,15)(3364,`span`,16),mN(3365,` multiple`),ql(3366,`br`),lg()()(),Ml(3367,`td`,17)(3368,`code`,28),mN(3369,`boolean`),lg()(),Ml(3370,`td`,20)(3371,`em`)(3372,`strong`),mN(3373,`(opcional)`),lg()(),Ml(3374,`p`),mN(3375,`Permite a seleção de múltiplos itens.`),lg(),Ml(3376,`p`)(3377,`strong`),mN(3378,`Componentes compatíveis:`),lg(),Ml(3379,`code`),mN(3380,`po-lookup`),lg(),mN(3381,`, `),Ml(3382,`code`),mN(3383,`po-upload`),lg()()()(),Ml(3384,`tr`,13)(3385,`td`,14)(3386,`div`,15)(3387,`span`,16),mN(3388,` noAutocomplete`),ql(3389,`br`),lg()()(),Ml(3390,`td`,17)(3391,`code`,28),mN(3392,`boolean`),lg()(),Ml(3393,`td`,20)(3394,`em`)(3395,`strong`),mN(3396,`(opcional)`),lg()(),Ml(3397,`p`),mN(3398,`Define a propriedade nativa `),Ml(3399,`code`),mN(3400,`autocomplete`),lg(),mN(3401,` do campo como off.`),lg(),Ml(3402,`p`)(3403,`strong`),mN(3404,`Componentes compatíveis:`),lg(),Ml(3405,`code`),mN(3406,`po-datepicker`),lg(),mN(3407,`, `),Ml(3408,`code`),mN(3409,`po-datepicker-range`),lg(),mN(3410,`, `),Ml(3411,`code`),mN(3412,`po-input`),lg(),mN(3413,`, `),Ml(3414,`code`),mN(3415,`po-number`),lg(),mN(3416,`, `),Ml(3417,`code`),mN(3418,`po-decimal`),lg(),mN(3419,`,
`),Ml(3420,`code`),mN(3421,`po-lookup`),lg(),mN(3422,`, `),Ml(3423,`code`),mN(3424,`po-password`),lg(),mN(3425,`, `),Ml(3426,`code`),mN(3427,`po-timepicker`),lg(),mN(3428,`.`),lg()()(),Ml(3429,`tr`,13)(3430,`td`,14)(3431,`div`,15)(3432,`span`,16),mN(3433,` offsetColumns`),ql(3434,`br`),lg()()(),Ml(3435,`td`,17)(3436,`code`,41),mN(3437,`number`),lg()(),Ml(3438,`td`,20)(3439,`em`)(3440,`strong`),mN(3441,`(opcional)`),lg()(),Ml(3442,`p`),mN(3443,`Tamanho do espaço de exibição do campo em telas.`),lg(),Ml(3444,`p`),mN(3445,`Deve ser usado o sistema de `),Ml(3446,`strong`),mN(3447,`grid`),lg(),mN(3448,` do PO (1 ... 12 colunas).`),lg(),Ml(3449,`blockquote`)(3450,`p`),mN(3451,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),lg()()()(),Ml(3452,`tr`,13)(3453,`td`,14)(3454,`div`,15)(3455,`span`,16),mN(3456,` offsetLgColumns`),ql(3457,`br`),lg()()(),Ml(3458,`td`,17)(3459,`code`,41),mN(3460,`number`),lg()(),Ml(3461,`td`,20)(3462,`em`)(3463,`strong`),mN(3464,`(opcional)`),lg()(),Ml(3465,`p`),mN(3466,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),lg(),Ml(3467,`p`),mN(3468,`Deve ser usado o sistema de `),Ml(3469,`strong`),mN(3470,`grid`),lg(),mN(3471,` do PO (1 ... 12 colunas).`),lg(),Ml(3472,`blockquote`)(3473,`p`),mN(3474,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(3475,`code`),mN(3476,`offsetColumns`),lg(),mN(3477,`.`),lg()()()(),Ml(3478,`tr`,13)(3479,`td`,14)(3480,`div`,15)(3481,`span`,16),mN(3482,` offsetMdColumns`),ql(3483,`br`),lg()()(),Ml(3484,`td`,17)(3485,`code`,41),mN(3486,`number`),lg()(),Ml(3487,`td`,20)(3488,`em`)(3489,`strong`),mN(3490,`(opcional)`),lg()(),Ml(3491,`p`),mN(3492,`Tamanho do espaço de exibição do campo em telas médias (md).`),lg(),Ml(3493,`p`),mN(3494,`Deve ser usado o sistema de `),Ml(3495,`strong`),mN(3496,`grid`),lg(),mN(3497,` do PO (1 ... 12 colunas).`),lg(),Ml(3498,`blockquote`)(3499,`p`),mN(3500,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(3501,`code`),mN(3502,`offsetColumns`),lg(),mN(3503,`.`),lg()()()(),Ml(3504,`tr`,13)(3505,`td`,14)(3506,`div`,15)(3507,`span`,16),mN(3508,` offsetSmColumns`),ql(3509,`br`),lg()()(),Ml(3510,`td`,17)(3511,`code`,41),mN(3512,`number`),lg()(),Ml(3513,`td`,20)(3514,`em`)(3515,`strong`),mN(3516,`(opcional)`),lg()(),Ml(3517,`p`),mN(3518,`Tamanho do espaço de exibição do campo em telas menores (sm).`),lg(),Ml(3519,`p`),mN(3520,`Deve ser usado o sistema de `),Ml(3521,`strong`),mN(3522,`grid`),lg(),mN(3523,` do PO (1 ... 12 colunas).`),lg(),Ml(3524,`blockquote`)(3525,`p`),mN(3526,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(3527,`code`),mN(3528,`offsetColumns`),lg(),mN(3529,`.`),lg()()()(),Ml(3530,`tr`,13)(3531,`td`,14)(3532,`div`,15)(3533,`span`,16),mN(3534,` offsetXlColumns`),ql(3535,`br`),lg()()(),Ml(3536,`td`,17)(3537,`code`,41),mN(3538,`number`),lg()(),Ml(3539,`td`,20)(3540,`em`)(3541,`strong`),mN(3542,`(opcional)`),lg()(),Ml(3543,`p`),mN(3544,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),lg(),Ml(3545,`p`),mN(3546,`Deve ser usado o sistema de `),Ml(3547,`strong`),mN(3548,`grid`),lg(),mN(3549,` do PO (1 ... 12 colunas).`),lg(),Ml(3550,`blockquote`)(3551,`p`),mN(3552,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ml(3553,`code`),mN(3554,`offsetColumns`),lg(),mN(3555,`.`),lg()()()(),Ml(3556,`tr`,13)(3557,`td`,14)(3558,`div`,15)(3559,`span`,16),mN(3560,` onError`),ql(3561,`br`),lg()()(),Ml(3562,`td`,17)(3563,`code`,29),mN(3564,`Function`),lg()(),Ml(3565,`td`,20)(3566,`em`)(3567,`strong`),mN(3568,`(opcional)`),lg()(),Ml(3569,`p`),mN(3570,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),lg(),Ml(3571,`blockquote`)(3572,`p`),mN(3573,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ml(3574,`code`),mN(3575,`HttpErrorResponse`),lg(),mN(3576,`.`),lg()(),Ml(3577,`p`)(3578,`strong`),mN(3579,`Componente compatível`),lg(),mN(3580,`: `),Ml(3581,`code`),mN(3582,`po-upload`),lg()()()(),Ml(3583,`tr`,13)(3584,`td`,14)(3585,`div`,15)(3586,`span`,16),mN(3587,` onSuccess`),ql(3588,`br`),lg()()(),Ml(3589,`td`,17)(3590,`code`,29),mN(3591,`Function`),lg()(),Ml(3592,`td`,20)(3593,`em`)(3594,`strong`),mN(3595,`(opcional)`),lg()(),Ml(3596,`p`),mN(3597,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),lg(),Ml(3598,`blockquote`)(3599,`p`),mN(3600,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ml(3601,`code`),mN(3602,`HttpResponse`),lg(),mN(3603,`.`),lg()(),Ml(3604,`p`)(3605,`strong`),mN(3606,`Componente compatível`),lg(),mN(3607,`: `),Ml(3608,`code`),mN(3609,`po-upload`),lg()()()(),Ml(3610,`tr`,13)(3611,`td`,14)(3612,`div`,15)(3613,`span`,16),mN(3614,` onUpload`),ql(3615,`br`),lg()()(),Ml(3616,`td`,17)(3617,`code`,29),mN(3618,`Function`),lg()(),Ml(3619,`td`,20)(3620,`em`)(3621,`strong`),mN(3622,`(opcional)`),lg()(),Ml(3623,`p`),mN(3624,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),lg(),Ml(3625,`pre`)(3626,`code`),mN(3627,`event.data = {id: 'id do usu\xE1rio'};
`),lg()(),Ml(3628,`p`)(3629,`strong`),mN(3630,`Componente compatível`),lg(),mN(3631,`: `),Ml(3632,`code`),mN(3633,`po-upload`),lg()()()(),Ml(3634,`tr`,13)(3635,`td`,14)(3636,`div`,15)(3637,`span`,16),mN(3638,` optional`),ql(3639,`br`),lg()()(),Ml(3640,`td`,17)(3641,`code`,28),mN(3642,`boolean`),lg()(),Ml(3643,`td`,20)(3644,`em`)(3645,`strong`),mN(3646,`(opcional)`),lg()(),Ml(3647,`p`),mN(3648,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(3649,`blockquote`)(3650,`p`),mN(3651,`A indicação não será exibida, se:`),lg()(),Ml(3652,`ul`)(3653,`li`),mN(3654,`O campo for `),Ml(3655,`code`),mN(3656,`required`),lg(),mN(3657,`, ou;`),lg(),Ml(3658,`li`),mN(3659,`Não possuir `),Ml(3660,`code`),mN(3661,`help`),lg(),mN(3662,` e `),Ml(3663,`code`),mN(3664,`label`),lg(),mN(3665,`.`),lg()(),Ml(3666,`p`)(3667,`strong`),mN(3668,`Componentes compatíveis:`),lg(),Ml(3669,`code`),mN(3670,`po-datepicker`),lg(),mN(3671,`, `),Ml(3672,`code`),mN(3673,`po-datepicker-range`),lg(),mN(3674,`, `),Ml(3675,`code`),mN(3676,`po-timepicker`),lg(),mN(3677,`, `),Ml(3678,`code`),mN(3679,`po-input`),lg(),mN(3680,`, `),Ml(3681,`code`),mN(3682,`po-number`),lg(),mN(3683,`,
`),Ml(3684,`code`),mN(3685,`po-decimal`),lg(),mN(3686,`, `),Ml(3687,`code`),mN(3688,`po-select`),lg(),mN(3689,`, `),Ml(3690,`code`),mN(3691,`po-radio-group`),lg(),mN(3692,`, `),Ml(3693,`code`),mN(3694,`po-combo`),lg(),mN(3695,`, `),Ml(3696,`code`),mN(3697,`po-lookup`),lg(),mN(3698,`, `),Ml(3699,`code`),mN(3700,`po-checkbox-group`),lg(),mN(3701,`, `),Ml(3702,`code`),mN(3703,`po-multiselect`),lg(),mN(3704,`,
`),Ml(3705,`code`),mN(3706,`po-textarea`),lg(),mN(3707,`, `),Ml(3708,`code`),mN(3709,`po-password`),lg(),mN(3710,`.`),lg()()(),Ml(3711,`tr`,13)(3712,`td`,14)(3713,`div`,15)(3714,`span`,16),mN(3715,` options`),ql(3716,`br`),lg()()(),Ml(3717,`td`,17)(3718,`code`,32),mN(3719,`Array<string> `),lg(),Ml(3720,`code`,69),mN(3721,` Array<PoSelectOption> `),lg(),Ml(3722,`code`,70),mN(3723,` Array<PoMultiselectOption> `),lg(),Ml(3724,`code`,71),mN(3725,` Array<PoCheckboxGroupOption> `),lg(),Ml(3726,`code`,72),mN(3727,` Array<any>`),lg()(),Ml(3728,`td`,20)(3729,`em`)(3730,`strong`),mN(3731,`(opcional)`),lg()(),Ml(3732,`p`),mN(3733,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),lg(),Ml(3734,`p`)(3735,`strong`),mN(3736,`Componentes compatíveis:`),lg(),Ml(3737,`code`),mN(3738,`po-select`),lg(),mN(3739,`, `),Ml(3740,`code`),mN(3741,`po-radio-group`),lg(),mN(3742,`, `),Ml(3743,`code`),mN(3744,`po-checkbox-group`),lg(),mN(3745,`, `),Ml(3746,`code`),mN(3747,`po-multiselect`),lg(),mN(3748,`.`),lg()()(),Ml(3749,`tr`,13)(3750,`td`,14)(3751,`div`,15)(3752,`span`,16),mN(3753,` optionsMulti`),ql(3754,`br`),lg()()(),Ml(3755,`td`,17)(3756,`code`,28),mN(3757,`boolean`),lg()(),Ml(3758,`td`,20)(3759,`em`)(3760,`strong`),mN(3761,`(opcional)`),lg()(),Ml(3762,`p`),mN(3763,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),lg()()(),Ml(3764,`tr`,13)(3765,`td`,14)(3766,`div`,15)(3767,`span`,16),mN(3768,` optionsService`),ql(3769,`br`),lg()()(),Ml(3770,`td`,17)(3771,`code`,18),mN(3772,`string `),lg(),Ml(3773,`code`,73),mN(3774,` PoComboFilter `),lg(),Ml(3775,`code`,74),mN(3776,` PoMultiselectFilter`),lg()(),Ml(3777,`td`,20)(3778,`em`)(3779,`strong`),mN(3780,`(opcional)`),lg()(),Ml(3781,`p`),mN(3782,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Ml(3783,`strong`),mN(3784,`Importante`),lg()(),Ml(3785,`blockquote`)(3786,`p`),mN(3787,`Para que funcione corretamente, é importante que o serviço siga o `),Ml(3788,`a`,75),mN(3789,`guia de API do PO UI`),lg(),mN(3790,`.`),lg()()()(),Ml(3791,`tr`,13)(3792,`td`,14)(3793,`div`,15)(3794,`span`,16),mN(3795,` order`),ql(3796,`br`),lg()()(),Ml(3797,`td`,17)(3798,`code`,41),mN(3799,`number`),lg()(),Ml(3800,`td`,20)(3801,`em`)(3802,`strong`),mN(3803,`(opcional)`),lg()(),Ml(3804,`p`),mN(3805,`Informa a ordem de exibição do campo.`),lg(),Ml(3806,`p`),mN(3807,`Exemplo de utilização:`),lg(),Ml(3808,`p`)(3809,`code`),mN(3810,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),lg()(),Ml(3811,`p`),mN(3812,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Ml(3813,`code`),mN(3814,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),lg()(),Ml(3815,`p`),mN(3816,`Só serão aceitos valores com números inteiros maiores do que zero.`),lg(),Ml(3817,`p`),mN(3818,`Campos sem `),Ml(3819,`code`),mN(3820,`order`),lg(),mN(3821,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),lg()()(),Ml(3822,`tr`,13)(3823,`td`,14)(3824,`div`,15)(3825,`span`,16),mN(3826,` params`),ql(3827,`br`),lg()()(),Ml(3828,`td`,17)(3829,`code`,33),mN(3830,`any`),lg()(),Ml(3831,`td`,20)(3832,`em`)(3833,`strong`),mN(3834,`(opcional)`),lg()(),Ml(3835,`p`),mN(3836,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),Ml(3837,`code`),mN(3838,`po-lookup`),lg(),mN(3839,` e
`),Ml(3840,`code`),mN(3841,`po-combo`),lg(),mN(3842,`.`),lg(),Ml(3843,`p`),mN(3844,`Por exemplo, para o parâmetro `),Ml(3845,`code`),mN(3846,`{ age: 23 }`),lg(),mN(3847,` a URL da requisição ficaria:`),lg(),Ml(3848,`p`)(3849,`code`),mN(3850,`url + ?age=23&filter=Peter`),lg()()()(),Ml(3851,`tr`,13)(3852,`td`,14)(3853,`div`,15)(3854,`span`,16),mN(3855,` pattern`),ql(3856,`br`),lg()()(),Ml(3857,`td`,17)(3858,`code`,18),mN(3859,`string`),lg()(),Ml(3860,`td`,20)(3861,`em`)(3862,`strong`),mN(3863,`(opcional)`),lg()(),Ml(3864,`p`),mN(3865,`Regex para validação do campo.`),lg(),Ml(3866,`p`)(3867,`strong`),mN(3868,`Componentes compatíveis:`),lg(),Ml(3869,`code`),mN(3870,`po-input`),lg(),mN(3871,`, `),Ml(3872,`code`),mN(3873,`po-password`),lg(),mN(3874,`.`),lg(),Ml(3875,`blockquote`)(3876,`p`),mN(3877,`Incompatível com `),Ml(3878,`code`),mN(3879,`po-decimal`),lg(),mN(3880,`.`),lg()()()(),Ml(3881,`tr`,13)(3882,`td`,14)(3883,`div`,15)(3884,`span`,16),mN(3885,` placeholder`),ql(3886,`br`),lg()()(),Ml(3887,`td`,17)(3888,`code`,18),mN(3889,`string`),lg()(),Ml(3890,`td`,20)(3891,`em`)(3892,`strong`),mN(3893,`(opcional)`),lg()(),Ml(3894,`p`),mN(3895,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),lg(),Ml(3896,`p`)(3897,`strong`),mN(3898,`Componentes compatíveis:`),lg(),Ml(3899,`code`),mN(3900,`po-datepicker`),lg(),mN(3901,`, `),Ml(3902,`code`),mN(3903,`po-datepicker-range`),lg(),mN(3904,`, `),Ml(3905,`code`),mN(3906,`po-timepicker`),lg(),mN(3907,`, `),Ml(3908,`code`),mN(3909,`po-input`),lg(),mN(3910,`, `),Ml(3911,`code`),mN(3912,`po-number`),lg(),mN(3913,`, `),Ml(3914,`code`),mN(3915,`po-decimal`),lg(),mN(3916,`, `),Ml(3917,`code`),mN(3918,`po-select`),lg(),mN(3919,`, `),Ml(3920,`code`),mN(3921,`po-combo`),lg(),mN(3922,`, `),Ml(3923,`code`),mN(3924,`po-lookup`),lg(),mN(3925,`, `),Ml(3926,`code`),mN(3927,`po-multiselect`),lg(),mN(3928,`, `),Ml(3929,`code`),mN(3930,`po-textarea`),lg(),mN(3931,`, `),Ml(3932,`code`),mN(3933,`po-password`),lg(),mN(3934,`.`),lg()()(),Ml(3935,`tr`,13)(3936,`td`,14)(3937,`div`,15)(3938,`span`,16),mN(3939,` placeholderSearch`),ql(3940,`br`),lg()()(),Ml(3941,`td`,17)(3942,`code`,18),mN(3943,`string`),lg()(),Ml(3944,`td`,20)(3945,`em`)(3946,`strong`),mN(3947,`(opcional)`),lg()(),Ml(3948,`p`),mN(3949,`Placeholder do campo de pesquisa do `),Ml(3950,`code`),mN(3951,`po-multiselect`),lg(),mN(3952,`.`),lg(),Ml(3953,`blockquote`)(3954,`p`),mN(3955,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),lg()()()(),Ml(3956,`tr`,13)(3957,`td`,14)(3958,`div`,15)(3959,`span`,16),mN(3960,` property`),ql(3961,`br`),lg()()(),Ml(3962,`td`,17)(3963,`code`,18),mN(3964,`string`),lg()(),Ml(3965,`td`,20)(3966,`p`),mN(3967,`Nome de referência do campo.`),lg()()(),Ml(3968,`tr`,13)(3969,`td`,14)(3970,`div`,15)(3971,`span`,16),mN(3972,` range`),ql(3973,`br`),lg()()(),Ml(3974,`td`,17)(3975,`code`,28),mN(3976,`boolean`),lg()(),Ml(3977,`td`,20)(3978,`em`)(3979,`strong`),mN(3980,`(opcional)`),lg()(),Ml(3981,`p`),mN(3982,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),lg(),Ml(3983,`blockquote`)(3984,`p`),mN(3985,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),lg()()()(),Ml(3986,`tr`,13)(3987,`td`,14)(3988,`div`,15)(3989,`span`,16),mN(3990,` rangePresetOptions`),ql(3991,`br`),lg()()(),Ml(3992,`td`,17)(3993,`code`,76),mN(3994,`Array<PoCalendarRangePreset>`),lg()(),Ml(3995,`td`,20)(3996,`em`)(3997,`strong`),mN(3998,`(opcional)`),lg()(),Ml(3999,`p`),mN(4e3,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),lg(),Ml(4001,`p`),mN(4002,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),Ml(4003,`code`),mN(4004,`PoCalendarRangePreset`),lg(),mN(4005,`.`),lg(),Ml(4006,`p`)(4007,`strong`),mN(4008,`Componente compatível:`),lg(),Ml(4009,`code`),mN(4010,`po-datepicker-range`),lg()()()(),Ml(4011,`tr`,13)(4012,`td`,14)(4013,`div`,15)(4014,`span`,16),mN(4015,` rangePresets`),ql(4016,`br`),lg()()(),Ml(4017,`td`,17)(4018,`code`,28),mN(4019,`boolean `),lg(),Ml(4020,`code`,32),mN(4021,` Array<string>`),lg()(),Ml(4022,`td`,20)(4023,`em`)(4024,`strong`),mN(4025,`(opcional)`),lg()(),Ml(4026,`p`),mN(4027,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),lg(),Ml(4028,`p`),mN(4029,`Aceita os seguintes valores:`),lg(),Ml(4030,`ul`)(4031,`li`)(4032,`code`),mN(4033,`true`),lg(),mN(4034,`: exibe todos os presets padrão.`),lg(),Ml(4035,`li`)(4036,`code`),mN(4037,`false`),lg(),mN(4038,`: não exibe os presets padrão.`),lg(),Ml(4039,`li`)(4040,`code`),mN(4041,`Array<string>`),lg(),mN(4042,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),lg()(),Ml(4043,`p`)(4044,`strong`),mN(4045,`Componente compatível:`),lg(),Ml(4046,`code`),mN(4047,`po-datepicker-range`),lg()()()(),Ml(4048,`tr`,13)(4049,`td`,14)(4050,`div`,15)(4051,`span`,16),mN(4052,` rangePresetsOrder`),ql(4053,`br`),lg()()(),Ml(4054,`td`,17)(4055,`code`,77),mN(4056,`'asc' `),lg(),Ml(4057,`code`,78),mN(4058,` 'desc'`),lg()(),Ml(4059,`td`,20)(4060,`em`)(4061,`strong`),mN(4062,`(opcional)`),lg()(),Ml(4063,`p`),mN(4064,`Define a ordenação dos presets na lista.`),lg(),Ml(4065,`p`),mN(4066,`Valores aceitos:`),lg(),Ml(4067,`ul`)(4068,`li`)(4069,`code`),mN(4070,`'asc'`),lg(),mN(4071,`: ordenação crescente (passado → futuro)`),lg(),Ml(4072,`li`)(4073,`code`),mN(4074,`'desc'`),lg(),mN(4075,`: ordenação decrescente (futuro → passado)`),lg()(),Ml(4076,`p`)(4077,`strong`),mN(4078,`Componente compatível:`),lg(),Ml(4079,`code`),mN(4080,`po-datepicker-range`),lg()()()(),Ml(4081,`tr`,13)(4082,`td`,14)(4083,`div`,15)(4084,`span`,16),mN(4085,` readonly`),ql(4086,`br`),lg()()(),Ml(4087,`td`,17)(4088,`code`,28),mN(4089,`boolean`),lg()(),Ml(4090,`td`,20)(4091,`em`)(4092,`strong`),mN(4093,`(opcional)`),lg()(),Ml(4094,`p`),mN(4095,`Indica que o campo será somente leitura.`),lg(),Ml(4096,`p`)(4097,`strong`),mN(4098,`Componentes compatíveis:`),lg(),Ml(4099,`code`),mN(4100,`po-datepicker`),lg(),mN(4101,`, `),Ml(4102,`code`),mN(4103,`po-datepicker-range`),lg(),mN(4104,`, `),Ml(4105,`code`),mN(4106,`po-timepicker`),lg(),mN(4107,`, `),Ml(4108,`code`),mN(4109,`po-input`),lg(),mN(4110,`, `),Ml(4111,`code`),mN(4112,`po-number`),lg(),mN(4113,`,
`),Ml(4114,`code`),mN(4115,`po-decimal`),lg(),mN(4116,`, `),Ml(4117,`code`),mN(4118,`po-select`),lg(),mN(4119,`, `),Ml(4120,`code`),mN(4121,`po-textarea`),lg(),mN(4122,`, `),Ml(4123,`code`),mN(4124,`po-password`),lg(),mN(4125,`.`),lg()()(),Ml(4126,`tr`,13)(4127,`td`,14)(4128,`div`,15)(4129,`span`,16),mN(4130,` removeInitialFilter`),ql(4131,`br`),lg()()(),Ml(4132,`td`,17)(4133,`code`,28),mN(4134,`boolean`),lg()(),Ml(4135,`td`,20)(4136,`em`)(4137,`strong`),mN(4138,`(opcional)`),lg()(),Ml(4139,`p`),mN(4140,`Define que o filtro no primeiro clique será removido.`),lg(),Ml(4141,`blockquote`)(4142,`p`),mN(4143,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),lg()(),Ml(4144,`p`)(4145,`strong`),mN(4146,`Componente compatível`),lg(),mN(4147,`: `),Ml(4148,`code`),mN(4149,`po-combo`),lg()()()(),Ml(4150,`tr`,13)(4151,`td`,14)(4152,`div`,15)(4153,`span`,16),mN(4154,` required`),ql(4155,`br`),lg()()(),Ml(4156,`td`,17)(4157,`code`,28),mN(4158,`boolean`),lg()(),Ml(4159,`td`,20)(4160,`em`)(4161,`strong`),mN(4162,`(opcional)`),lg()(),Ml(4163,`p`),mN(4164,`Define a obrigatoriedade do campo.`),lg(),Ml(4165,`p`)(4166,`strong`),mN(4167,`Componentes compatíveis:`),lg(),Ml(4168,`code`),mN(4169,`po-datepicker`),lg(),mN(4170,`, `),Ml(4171,`code`),mN(4172,`po-datepicker-range`),lg(),mN(4173,`, `),Ml(4174,`code`),mN(4175,`po-timepicker`),lg(),mN(4176,`, `),Ml(4177,`code`),mN(4178,`po-input`),lg(),mN(4179,`, `),Ml(4180,`code`),mN(4181,`po-number`),lg(),mN(4182,`,
`),Ml(4183,`code`),mN(4184,`po-decimal`),lg(),mN(4185,`, `),Ml(4186,`code`),mN(4187,`po-select`),lg(),mN(4188,`, `),Ml(4189,`code`),mN(4190,`po-radio-group`),lg(),mN(4191,`, `),Ml(4192,`code`),mN(4193,`po-combo`),lg(),mN(4194,`, `),Ml(4195,`code`),mN(4196,`po-lookup`),lg(),mN(4197,`, `),Ml(4198,`code`),mN(4199,`po-checkbox-group`),lg(),mN(4200,`, `),Ml(4201,`code`),mN(4202,`po-multiselect`),lg(),mN(4203,`,
`),Ml(4204,`code`),mN(4205,`po-textarea`),lg(),mN(4206,`, `),Ml(4207,`code`),mN(4208,"po-password``, "),lg(),mN(4209,"po-upload`."),lg()()(),Ml(4210,`tr`,13)(4211,`td`,14)(4212,`div`,15)(4213,`span`,16),mN(4214,` requiredFieldErrorMessage`),ql(4215,`br`),lg()()(),Ml(4216,`td`,17)(4217,`code`,28),mN(4218,`boolean`),lg()(),Ml(4219,`td`,20)(4220,`em`)(4221,`strong`),mN(4222,`(opcional)`),lg()(),Ml(4223,`p`),mN(4224,`Exibe a mensagem setada na propriedade `),Ml(4225,`code`),mN(4226,`errorMessage`),lg(),mN(4227,` se o campo estiver vazio e for requerido.`),lg(),Ml(4228,`blockquote`)(4229,`p`),mN(4230,`Necessário que a propriedade `),Ml(4231,`code`),mN(4232,`required`),lg(),mN(4233,` esteja habilitada.`),lg()(),Ml(4234,`p`)(4235,`strong`),mN(4236,`Componentes compatíveis:`),lg(),Ml(4237,`code`),mN(4238,`po-datepicker`),lg(),mN(4239,`, `),Ml(4240,`code`),mN(4241,`po-timepicker`),lg(),mN(4242,`, `),Ml(4243,`code`),mN(4244,`po-input`),lg(),mN(4245,`, `),Ml(4246,`code`),mN(4247,`po-number`),lg(),mN(4248,`, `),Ml(4249,`code`),mN(4250,`po-decimal`),lg(),mN(4251,`, `),Ml(4252,`code`),mN(4253,`po-password`),lg(),mN(4254,`.`),lg()()(),Ml(4255,`tr`,13)(4256,`td`,14)(4257,`div`,15)(4258,`span`,16),mN(4259,` restrictions`),ql(4260,`br`),lg()()(),Ml(4261,`td`,17)(4262,`code`,79),mN(4263,`PoUploadFileRestrictions`),lg()(),Ml(4264,`td`,20)(4265,`em`)(4266,`strong`),mN(4267,`(opcional)`),lg()(),Ml(4268,`p`),mN(4269,`Objeto que segue a definição da interface `),Ml(4270,`code`),mN(4271,`PoUploadFileRestrictions`),lg(),mN(4272,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),lg(),Ml(4273,`p`)(4274,`strong`),mN(4275,`Componente compatível`),lg(),mN(4276,`: `),Ml(4277,`code`),mN(4278,`po-upload`),lg()()()(),Ml(4279,`tr`,13)(4280,`td`,14)(4281,`div`,15)(4282,`span`,16),mN(4283,` rows`),ql(4284,`br`),lg()()(),Ml(4285,`td`,17)(4286,`code`,41),mN(4287,`number`),lg()(),Ml(4288,`td`,20)(4289,`em`)(4290,`strong`),mN(4291,`(opcional)`),lg()(),Ml(4292,`p`),mN(4293,`Quantidade de linhas exibidas no `),Ml(4294,`code`),mN(4295,`po-textarea`),lg(),mN(4296,`.`),lg()()(),Ml(4297,`tr`,13)(4298,`td`,14)(4299,`div`,15)(4300,`span`,16),mN(4301,` searchService`),ql(4302,`br`),lg()()(),Ml(4303,`td`,17)(4304,`code`,18),mN(4305,`string `),lg(),Ml(4306,`code`,80),mN(4307,` PoLookupFilter`),lg()(),Ml(4308,`td`,20)(4309,`em`)(4310,`strong`),mN(4311,`(opcional)`),lg()(),Ml(4312,`p`),mN(4313,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),Ml(4314,`code`),mN(4315,`columns`),lg(),mN(4316,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Ml(4317,`strong`),mN(4318,`Importante:`),lg()(),Ml(4319,`blockquote`)(4320,`p`),mN(4321,`Caso utilizar a propriedade `),Ml(4322,`code`),mN(4323,`optionsService`),lg(),mN(4324,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Ml(4325,`a`,75),mN(4326,`guia de API do PO UI`),lg(),mN(4327,`.`),lg()()()(),Ml(4328,`tr`,13)(4329,`td`,14)(4330,`div`,15)(4331,`span`,16),mN(4332,` secondInterval`),ql(4333,`br`),lg()()(),Ml(4334,`td`,17)(4335,`code`,41),mN(4336,`number`),lg()(),Ml(4337,`td`,20)(4338,`em`)(4339,`strong`),mN(4340,`(opcional)`),lg()(),Ml(4341,`p`),mN(4342,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),lg()()(),Ml(4343,`tr`,13)(4344,`td`,14)(4345,`div`,15)(4346,`span`,16),mN(4347,` secret`),ql(4348,`br`),lg()()(),Ml(4349,`td`,17)(4350,`code`,28),mN(4351,`boolean`),lg()(),Ml(4352,`td`,20)(4353,`em`)(4354,`strong`),mN(4355,`(opcional)`),lg()(),Ml(4356,`p`),mN(4357,`Esconde a informação estilo `),Ml(4358,`em`),mN(4359,`password`),lg(),mN(4360,`, pode ser utilizado quando o tipo de dado for `),Ml(4361,`em`),mN(4362,`string`),lg(),mN(4363,`.`),lg()()(),Ml(4364,`tr`,13)(4365,`td`,14)(4366,`div`,15)(4367,`span`,16),mN(4368,` showRequired`),ql(4369,`br`),lg()()(),Ml(4370,`td`,17)(4371,`code`,28),mN(4372,`boolean`),lg()(),Ml(4373,`td`,20)(4374,`em`)(4375,`strong`),mN(4376,`(opcional)`),lg()(),Ml(4377,`p`),mN(4378,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(4379,`blockquote`)(4380,`p`),mN(4381,`Não será exibida a indicação se:`),lg()(),Ml(4382,`ul`)(4383,`li`),mN(4384,`Não possuir `),Ml(4385,`code`),mN(4386,`p-help`),lg(),mN(4387,` e/ou `),Ml(4388,`code`),mN(4389,`p-label`),lg(),mN(4390,`.`),lg()(),Ml(4391,`p`)(4392,`strong`),mN(4393,`Componentes compatíveis:`),lg(),Ml(4394,`code`),mN(4395,`po-datepicker`),lg(),mN(4396,`, `),Ml(4397,`code`),mN(4398,`po-datepicker-range`),lg(),mN(4399,`, `),Ml(4400,`code`),mN(4401,`po-timepicker`),lg(),mN(4402,`, `),Ml(4403,`code`),mN(4404,`po-input`),lg(),mN(4405,`, `),Ml(4406,`code`),mN(4407,`po-number`),lg(),mN(4408,`,
`),Ml(4409,`code`),mN(4410,`po-decimal`),lg(),mN(4411,`, `),Ml(4412,`code`),mN(4413,`po-select`),lg(),mN(4414,`, `),Ml(4415,`code`),mN(4416,`po-radio-group`),lg(),mN(4417,`, `),Ml(4418,`code`),mN(4419,`po-combo`),lg(),mN(4420,`, `),Ml(4421,`code`),mN(4422,`po-lookup`),lg(),mN(4423,`, `),Ml(4424,`code`),mN(4425,`po-checkbox-group`),lg(),mN(4426,`, `),Ml(4427,`code`),mN(4428,`po-multiselect`),lg(),mN(4429,`,
`),Ml(4430,`code`),mN(4431,`po-textarea`),lg(),mN(4432,`, `),Ml(4433,`code`),mN(4434,`po-password`),lg(),mN(4435,`, `),Ml(4436,`code`),mN(4437,`po-upload`),lg(),mN(4438,`.`),lg()()(),Ml(4439,`tr`,13)(4440,`td`,14)(4441,`div`,15)(4442,`span`,16),mN(4443,` showSeconds`),ql(4444,`br`),lg()()(),Ml(4445,`td`,17)(4446,`code`,28),mN(4447,`boolean`),lg()(),Ml(4448,`td`,20)(4449,`em`)(4450,`strong`),mN(4451,`(opcional)`),lg()(),Ml(4452,`p`),mN(4453,`Exibe a coluna de segundos no painel do timepicker.`),lg()()(),Ml(4454,`tr`,13)(4455,`td`,14)(4456,`div`,15)(4457,`span`,16),mN(4458,` showThumbnail`),ql(4459,`br`),lg()()(),Ml(4460,`td`,17)(4461,`code`,28),mN(4462,`boolean`),lg()(),Ml(4463,`td`,20)(4464,`em`)(4465,`strong`),mN(4466,`(opcional)`),lg()(),Ml(4467,`p`),mN(4468,`Exibe a pré-visualização de imagens ao anexá-las.`),lg(),Ml(4469,`blockquote`)(4470,`p`),mN(4471,`Propriedade funciona apenas em arquivos de formato de imagem (`),Ml(4472,`code`),mN(4473,`.png`),lg(),mN(4474,`, `),Ml(4475,`code`),mN(4476,`.jpg`),lg(),mN(4477,`, `),Ml(4478,`code`),mN(4479,`.jpeg`),lg(),mN(4480,` e `),Ml(4481,`code`),mN(4482,`.gif`),lg(),mN(4483,`).`),lg()(),Ml(4484,`p`)(4485,`strong`),mN(4486,`Componente compatível`),lg(),mN(4487,`: `),Ml(4488,`code`),mN(4489,`po-upload`),lg()()()(),Ml(4490,`tr`,13)(4491,`td`,14)(4492,`div`,15)(4493,`span`,16),mN(4494,` size`),ql(4495,`br`),lg()()(),Ml(4496,`td`,17)(4497,`code`,18),mN(4498,`string`),lg()(),Ml(4499,`td`,20)(4500,`em`)(4501,`strong`),mN(4502,`(opcional)`),lg()(),Ml(4503,`p`),mN(4504,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),lg(),Ml(4505,`ul`)(4506,`li`)(4507,`code`),mN(4508,`small`),lg(),mN(4509,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),lg(),Ml(4510,`li`)(4511,`code`),mN(4512,`medium`),lg(),mN(4513,`: aplica a medida medium de cada componente.`),lg(),Ml(4514,`li`)(4515,`code`),mN(4516,`large`),lg(),mN(4517,`: aplica a medida large de cada componente (disponível para `),Ml(4518,`code`),mN(4519,`po-checkbox`),lg(),mN(4520,` e `),Ml(4521,`code`),mN(4522,`po-radio-group`),lg(),mN(4523,`).`),Ml(4524,`blockquote`)(4525,`p`),mN(4526,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(4527,`code`),mN(4528,`medium`),lg(),mN(4529,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(4530,`a`,21),mN(4531,`po-theme`),lg(),mN(4532,`.`),lg()()()()()(),Ml(4533,`tr`,13)(4534,`td`,14)(4535,`div`,15)(4536,`span`,16),mN(4537,` sort`),ql(4538,`br`),lg()()(),Ml(4539,`td`,17)(4540,`code`,28),mN(4541,`boolean`),lg()(),Ml(4542,`td`,20)(4543,`em`)(4544,`strong`),mN(4545,`(opcional)`),lg()(),Ml(4546,`p`),mN(4547,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),lg(),Ml(4548,`p`)(4549,`strong`),mN(4550,`Componentes compatíveis:`),lg(),Ml(4551,`code`),mN(4552,`po-combo`),lg(),mN(4553,`, po-multiselect`),lg()()(),Ml(4554,`tr`,13)(4555,`td`,14)(4556,`div`,15)(4557,`span`,16),mN(4558,` step`),ql(4559,`br`),lg()()(),Ml(4560,`td`,17)(4561,`code`,41),mN(4562,`number`),lg()(),Ml(4563,`td`,20)(4564,`em`)(4565,`strong`),mN(4566,`(opcional)`),lg()(),Ml(4567,`p`),mN(4568,`Intervalo utilizado no `),Ml(4569,`code`),mN(4570,`po-number`),lg(),mN(4571,`.`),lg()()(),Ml(4572,`tr`,13)(4573,`td`,14)(4574,`div`,15)(4575,`span`,16),mN(4576,` thousandMaxlength`),ql(4577,`br`),lg()()(),Ml(4578,`td`,17)(4579,`code`,41),mN(4580,`number`),lg()(),Ml(4581,`td`,20)(4582,`em`)(4583,`strong`),mN(4584,`(opcional)`),lg()(),Ml(4585,`p`),mN(4586,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),lg(),Ml(4587,`blockquote`)(4588,`p`),mN(4589,`Esta propriedade só pode ser utilizada quando o `),Ml(4590,`code`),mN(4591,`type`),lg(),mN(4592,` for `),Ml(4593,`em`),mN(4594,`currency`),lg(),mN(4595,` ou `),Ml(4596,`em`),mN(4597,`decimal`),lg(),mN(4598,`.`),lg()(),Ml(4599,`blockquote`)(4600,`p`),mN(4601,`Quando utilizado com `),Ml(4602,`code`),mN(4603,`displayFormat`),lg(),mN(4604,`, será respeitado o valor `),Ml(4605,`strong`),mN(4606,`mais restritivo`),lg(),mN(4607,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),lg()()()(),Ml(4608,`tr`,13)(4609,`td`,14)(4610,`div`,15)(4611,`span`,16),mN(4612,` type`),ql(4613,`br`),lg()()(),Ml(4614,`td`,17)(4615,`code`,18),mN(4616,`string `),lg(),Ml(4617,`code`,81),mN(4618,` PoDynamicFieldType`),lg()(),Ml(4619,`td`,20)(4620,`em`)(4621,`strong`),mN(4622,`(opcional)`),lg()(),Ml(4623,`p`),mN(4624,`Tipo do valor campo.`),lg(),Ml(4625,`p`),mN(4626,`Valores válidos:`),lg(),Ml(4627,`ul`)(4628,`li`)(4629,`code`),mN(4630,`boolean`),lg(),mN(4631,`: Valores `),Ml(4632,`em`),mN(4633,`booleanos`),lg(),mN(4634,`.`),lg(),Ml(4635,`li`)(4636,`code`),mN(4637,`currency`),lg(),mN(4638,`: Valores monetários.`),lg(),Ml(4639,`li`)(4640,`code`),mN(4641,`decimal`),lg(),mN(4642,`: Valores decimais.`),lg(),Ml(4643,`li`)(4644,`code`),mN(4645,`date`),lg(),mN(4646,`: Valores de datas.`),Ml(4647,`ul`)(4648,`li`),mN(4649,`Aceita os tipos `),Ml(4650,`strong`),mN(4651,`string`),lg(),mN(4652,` e `),Ml(4653,`strong`),mN(4654,`Date`),lg(),mN(4655,` padr\xE3o do Javascript,
por exemplo: `),Ml(4656,`code`),mN(4657,`'2017-11-28'`),lg(),mN(4658,` ou `),Ml(4659,`code`),mN(4660,`new Date(2017, 10, 28)`),lg(),mN(4661,`.`),lg()()(),Ml(4662,`li`)(4663,`code`),mN(4664,`dateTime`),lg(),mN(4665,`: Valor de data com horário.`),Ml(4666,`ul`)(4667,`li`),mN(4668,`Aceita o tipo `),Ml(4669,`em`),mN(4670,`string`),lg(),mN(4671,` no formato `),Ml(4672,`strong`),mN(4673,`ISO-8601`),lg(),mN(4674,` extendido `),Ml(4675,`strong`),mN(4676,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),lg(),mN(4677,`
e o tipo `),Ml(4678,`strong`),mN(4679,`Date`),lg(),mN(4680,` padrão do Javascript, por exemplo: `),Ml(4681,`code`),mN(4682,`'2017-11-28T00:00:00-02:00'`),lg(),mN(4683,` ou `),Ml(4684,`code`),mN(4685,`new Date(2017, 10, 28)`),lg(),mN(4686,`.`),lg()()(),Ml(4687,`li`)(4688,`code`),mN(4689,`number`),lg(),mN(4690,`: Valores numéricos.`),lg(),Ml(4691,`li`)(4692,`code`),mN(4693,`string`),lg(),mN(4694,`: Textos.`),lg(),Ml(4695,`li`)(4696,`code`),mN(4697,`time`),lg(),mN(4698,`: Valor do horário.`),Ml(4699,`ul`)(4700,`li`),mN(4701,`Aceita o tipo `),Ml(4702,`strong`),mN(4703,`string`),lg(),mN(4704,` nos formatos `),Ml(4705,`strong`),mN(4706,`'HH:mm:ss'`),lg(),mN(4707,` ou `),Ml(4708,`strong`),mN(4709,`'HH:mm:ss.ffffff'`),lg(),mN(4710,`, por exemplo: `),Ml(4711,`code`),mN(4712,`'23:12:45'`),lg(),mN(4713,`.`),lg()()()()()(),Ml(4714,`tr`,13)(4715,`td`,14)(4716,`div`,15)(4717,`span`,16),mN(4718,` url`),ql(4719,`br`),lg()()(),Ml(4720,`td`,17)(4721,`code`,18),mN(4722,`string`),lg()(),Ml(4723,`td`,20)(4724,`em`)(4725,`strong`),mN(4726,`(opcional)`),lg()(),Ml(4727,`p`),mN(4728,`URL que deve ser feita a requisição com os arquivos selecionados.`),lg(),Ml(4729,`p`)(4730,`strong`),mN(4731,`Componente compatível`),lg(),mN(4732,`: `),Ml(4733,`code`),mN(4734,`po-upload`),lg()()()(),Ml(4735,`tr`,13)(4736,`td`,14)(4737,`div`,15)(4738,`span`,16),mN(4739,` validate`),ql(4740,`br`),lg()()(),Ml(4741,`td`,17)(4742,`code`,18),mN(4743,`string `),lg(),Ml(4744,`code`,29),mN(4745,` Function`),lg()(),Ml(4746,`td`,20)(4747,`em`)(4748,`strong`),mN(4749,`(opcional)`),lg()(),Ml(4750,`p`),mN(4751,`Função ou serviço para validar as `),Ml(4752,`strong`),mN(4753,`mudanças do campo`),lg(),mN(4754,`.`),lg(),Ml(4755,`ul`)(4756,`li`),mN(4757,`A propriedade aceita os seguintes tipos:`),lg()(),Ml(4758,`ul`)(4759,`li`)(4760,`strong`),mN(4761,`String`),lg(),mN(4762,`: Endpoint usado pelo componente para requisição via `),Ml(4763,`code`),mN(4764,`POST`),lg(),mN(4765,`.`),lg(),Ml(4766,`li`)(4767,`strong`),mN(4768,`Function`),lg(),mN(4769,`: Método que será executado.`),lg()(),Ml(4770,`p`),mN(4771,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Ml(4772,`code`),mN(4773,`PoDynamicFormFieldChanged`),lg(),mN(4774,`:`),lg(),Ml(4775,`p`)(4776,`code`),mN(4777,`{ property: 'property name', value: 'new value' }`),lg()(),Ml(4778,`p`),mN(4779,`O retorno desta função deve ser do tipo `),Ml(4780,`a`,82),mN(4781,`PoDynamicFormFieldValidation`),lg(),mN(4782,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),lg(),Ml(4783,`pre`)(4784,`code`),mN(4785,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),lg()(),Ml(4786,`p`),mN(4787,`Para referenciar a sua função utilize a propriedade `),Ml(4788,`code`),mN(4789,`bind`),lg(),mN(4790,`, por exemplo:
`),Ml(4791,`code`),mN(4792,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),lg()()()(),Ml(4793,`tr`,13)(4794,`td`,14)(4795,`div`,15)(4796,`span`,16),mN(4797,` visible`),ql(4798,`br`),lg()()(),Ml(4799,`td`,17)(4800,`code`,28),mN(4801,`boolean`),lg()(),Ml(4802,`td`,20)(4803,`em`)(4804,`strong`),mN(4805,`(opcional)`),lg()(),Ml(4806,`p`),mN(4807,`Indica se o campo será visível.`),lg()()(),Ml(4808,`tr`,13)(4809,`td`,14)(4810,`div`,15)(4811,`span`,16),mN(4812,` yearRangeLimit`),ql(4813,`br`),lg()()(),Ml(4814,`td`,17)(4815,`code`,41),mN(4816,`number`),lg()(),Ml(4817,`td`,20)(4818,`em`)(4819,`strong`),mN(4820,`(opcional)`),lg()(),Ml(4821,`p`),mN(4822,`Define o limite de anos exibidos na lista de anos do `),Ml(4823,`code`),mN(4824,`po-datepicker`),lg(),mN(4825,` nos modos `),Ml(4826,`code`),mN(4827,`month-year`),lg(),mN(4828,` e `),Ml(4829,`code`),mN(4830,`year`),lg(),mN(4831,`.`),lg()()()(),Ml(4832,`h4`,38)(4833,`code`,5),mN(4834,`PoDynamicFormLoad`),lg()(),Ml(4835,`div`,2)(4836,`p`),ql(4837,`a`,83),lg(),Ml(4838,`p`),mN(4839,`Estrutura de retorno no carregamento do formulário.`),lg()(),Ml(4840,`h4`,9),mN(4841,`Propriedades`),lg(),Ml(4842,`table`,10)(4843,`tr`,11)(4844,`th`,12),mN(4845,`Nome`),lg(),Ml(4846,`th`,12),mN(4847,`Tipo`),lg(),Ml(4848,`th`,12),mN(4849,`Descrição`),lg()(),Ml(4850,`tr`,13)(4851,`td`,14)(4852,`div`,15)(4853,`span`,16),mN(4854,` fields`),ql(4855,`br`),lg()()(),Ml(4856,`td`,17)(4857,`code`,22),mN(4858,`Array<PoDynamicFormField>`),lg()(),Ml(4859,`td`,20)(4860,`em`)(4861,`strong`),mN(4862,`(opcional)`),lg()(),Ml(4863,`p`),mN(4864,`Lista com as novas definições dos campos.`),lg(),Ml(4865,`blockquote`)(4866,`p`),mN(4867,`Não é necessário colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas.`),lg()()()(),Ml(4868,`tr`,13)(4869,`td`,14)(4870,`div`,15)(4871,`span`,16),mN(4872,` focus`),ql(4873,`br`),lg()()(),Ml(4874,`td`,17)(4875,`code`,18),mN(4876,`string`),lg()(),Ml(4877,`td`,20)(4878,`em`)(4879,`strong`),mN(4880,`(opcional)`),lg()(),Ml(4881,`p`),mN(4882,`Nome do campo que receberá o foco.`),lg(),Ml(4883,`p`),mN(4884,`Exemplo:`),lg(),Ml(4885,`pre`)(4886,`code`),mN(4887,`focus: 'name'
`),lg()()()(),Ml(4888,`tr`,13)(4889,`td`,14)(4890,`div`,15)(4891,`span`,16),mN(4892,` value`),ql(4893,`br`),lg()()(),Ml(4894,`td`,17)(4895,`code`,33),mN(4896,`any`),lg()(),Ml(4897,`td`,20)(4898,`em`)(4899,`strong`),mN(4900,`(opcional)`),lg()(),Ml(4901,`p`),mN(4902,`Objeto contendo os novos valores.`),lg(),Ml(4903,`p`),mN(4904,`Exemplo:`),lg(),Ml(4905,`pre`)(4906,`code`),mN(4907,`{
  name: 'new name',
  age: 10
}
`),lg()(),Ml(4908,`blockquote`)(4909,`p`),mN(4910,`Não é necessário colocar os valores de todos os campos, apenas os que foram alterados.`),lg()()()()(),Ml(4911,`h4`,38)(4912,`code`,5),mN(4913,`PoDynamicFormFieldChanged`),lg()(),Ml(4914,`div`,2)(4915,`p`),mN(4916,`Estrutura dos valores que serão disparados quando houver uma mudança em um campo ou no formulário.`),lg()(),Ml(4917,`h4`,9),mN(4918,`Propriedades`),lg(),Ml(4919,`table`,10)(4920,`tr`,11)(4921,`th`,12),mN(4922,`Nome`),lg(),Ml(4923,`th`,12),mN(4924,`Tipo`),lg(),Ml(4925,`th`,12),mN(4926,`Descrição`),lg()(),Ml(4927,`tr`,13)(4928,`td`,14)(4929,`div`,15)(4930,`span`,16),mN(4931,` property`),ql(4932,`br`),lg()()(),Ml(4933,`td`,17)(4934,`code`,18),mN(4935,`string`),lg()(),Ml(4936,`td`,20)(4937,`p`),mN(4938,`Valor da propriedade do campo.`),lg()()(),Ml(4939,`tr`,13)(4940,`td`,14)(4941,`div`,15)(4942,`span`,16),mN(4943,` value`),ql(4944,`br`),lg()()(),Ml(4945,`td`,17)(4946,`code`,33),mN(4947,`any`),lg()(),Ml(4948,`td`,20)(4949,`p`),mN(4950,`Novo valor do campo.`),lg()()()(),Ml(4951,`h4`,38)(4952,`code`,5),mN(4953,`PoDynamicFormFieldValidation`),lg()(),Ml(4954,`div`,2)(4955,`p`),ql(4956,`a`,84),lg(),Ml(4957,`p`),mN(4958,`Estrutura de retorno da validação de um campo.`),lg()(),Ml(4959,`h4`,9),mN(4960,`Propriedades`),lg(),Ml(4961,`table`,10)(4962,`tr`,11)(4963,`th`,12),mN(4964,`Nome`),lg(),Ml(4965,`th`,12),mN(4966,`Tipo`),lg(),Ml(4967,`th`,12),mN(4968,`Descrição`),lg()(),Ml(4969,`tr`,13)(4970,`td`,14)(4971,`div`,15)(4972,`span`,16),mN(4973,` field`),ql(4974,`br`),lg()()(),Ml(4975,`td`,17)(4976,`code`,85),mN(4977,`PoDynamicFormField`),lg()(),Ml(4978,`td`,20)(4979,`em`)(4980,`strong`),mN(4981,`(opcional)`),lg()(),Ml(4982,`p`),mN(4983,`Novas definições das propriedades do campo.`),lg(),Ml(4984,`blockquote`)(4985,`p`),mN(4986,`Não é necessário colocar todas as propriedades, apenas as que foram alteradas.`),lg()()()(),Ml(4987,`tr`,13)(4988,`td`,14)(4989,`div`,15)(4990,`span`,16),mN(4991,` focus`),ql(4992,`br`),lg()()(),Ml(4993,`td`,17)(4994,`code`,28),mN(4995,`boolean`),lg()(),Ml(4996,`td`,20)(4997,`em`)(4998,`strong`),mN(4999,`(opcional)`),lg()(),Ml(5e3,`p`),mN(5001,`Coloca o foco no campo após a validação.`),lg()()(),Ml(5002,`tr`,13)(5003,`td`,14)(5004,`div`,15)(5005,`span`,16),mN(5006,` value`),ql(5007,`br`),lg()()(),Ml(5008,`td`,17)(5009,`code`,33),mN(5010,`any`),lg()(),Ml(5011,`td`,20)(5012,`em`)(5013,`strong`),mN(5014,`(opcional)`),lg()(),Ml(5015,`p`),mN(5016,`Novo valor do campo`),lg()()()(),Ml(5017,`h4`,38)(5018,`code`,5),mN(5019,`PoDynamicFormValidation`),lg()(),Ml(5020,`div`,2)(5021,`p`),ql(5022,`a`,86),lg(),Ml(5023,`p`),mN(5024,`Estrutura de retorno da validação do formulário.`),lg()(),Ml(5025,`h4`,9),mN(5026,`Propriedades`),lg(),Ml(5027,`table`,10)(5028,`tr`,11)(5029,`th`,12),mN(5030,`Nome`),lg(),Ml(5031,`th`,12),mN(5032,`Tipo`),lg(),Ml(5033,`th`,12),mN(5034,`Descrição`),lg()(),Ml(5035,`tr`,13)(5036,`td`,14)(5037,`div`,15)(5038,`span`,16),mN(5039,` fields`),ql(5040,`br`),lg()()(),Ml(5041,`td`,17)(5042,`code`,22),mN(5043,`Array<PoDynamicFormField>`),lg()(),Ml(5044,`td`,20)(5045,`em`)(5046,`strong`),mN(5047,`(opcional)`),lg()(),Ml(5048,`p`),mN(5049,`Lista com as novas definições dos campos.`),lg(),Ml(5050,`blockquote`)(5051,`p`),mN(5052,`Não é necessário colocar todas as propriedades e campos, apenas as que foram alteradas.`),lg()()()(),Ml(5053,`tr`,13)(5054,`td`,14)(5055,`div`,15)(5056,`span`,16),mN(5057,` focus`),ql(5058,`br`),lg()()(),Ml(5059,`td`,17)(5060,`code`,18),mN(5061,`string`),lg()(),Ml(5062,`td`,20)(5063,`em`)(5064,`strong`),mN(5065,`(opcional)`),lg()(),Ml(5066,`p`),mN(5067,`Nome do campo que receberá o foco.`),lg(),Ml(5068,`p`),mN(5069,`Exemplo:`),lg(),Ml(5070,`pre`)(5071,`code`),mN(5072,`focus: 'name'
`),lg()()()(),Ml(5073,`tr`,13)(5074,`td`,14)(5075,`div`,15)(5076,`span`,16),mN(5077,` value`),ql(5078,`br`),lg()()(),Ml(5079,`td`,17)(5080,`code`,33),mN(5081,`any`),lg()(),Ml(5082,`td`,20)(5083,`em`)(5084,`strong`),mN(5085,`(opcional)`),lg()(),Ml(5086,`p`),mN(5087,`Objeto contendo os novos valores.`),lg(),Ml(5088,`p`),mN(5089,`Exemplo:`),lg(),Ml(5090,`pre`)(5091,`code`),mN(5092,`{
  name: 'new name',
  age: 10
}
`),lg()(),Ml(5093,`blockquote`)(5094,`p`),mN(5095,`Não é necessário colocar os valores de todos os campos, apenas os que foram alterados.`),lg()()()()(),Ml(5096,`h4`,38)(5097,`code`,5),mN(5098,`ErrorAsyncProperties`),lg()(),Ml(5099,`div`,2)(5100,`p`),mN(5101,`Interface para realizar uma validação assíncrona no componente.`),lg()(),Ml(5102,`h4`,9),mN(5103,`Propriedades`),lg(),Ml(5104,`table`,10)(5105,`tr`,11)(5106,`th`,12),mN(5107,`Nome`),lg(),Ml(5108,`th`,12),mN(5109,`Tipo`),lg(),Ml(5110,`th`,12),mN(5111,`Descrição`),lg()(),Ml(5112,`tr`,13)(5113,`td`,14)(5114,`div`,15)(5115,`span`,16),mN(5116,` errorAsync`),ql(5117,`br`),lg()()(),Ml(5118,`td`,17)(5119,`code`,46),mN(5120,`(value) => Observable<boolean>`),lg()(),Ml(5121,`td`,20)(5122,`p`),mN(5123,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ml(5124,`code`),mN(5125,`change`),lg(),mN(5126,` ou `),Ml(5127,`code`),mN(5128,`change-model`),lg(),mN(5129,`, dependendo do valor da propriedade `),Ml(5130,`code`),mN(5131,`triggerMode`),lg(),mN(5132,`.`),lg()()(),Ml(5133,`tr`,13)(5134,`td`,14)(5135,`div`,15)(5136,`span`,16),mN(5137,` triggerMode`),ql(5138,`br`),lg()()(),Ml(5139,`td`,17)(5140,`code`,87),mN(5141,`'change' `),lg(),Ml(5142,`code`,88),mN(5143,` 'changeModel'`),lg()(),Ml(5144,`td`,20)(5145,`em`)(5146,`strong`),mN(5147,`(opcional)`),lg()(),Ml(5148,`p`),mN(5149,`Controla se o método será executado no disparo do output `),Ml(5150,`code`),mN(5151,`change`),lg(),mN(5152,` ou `),Ml(5153,`code`),mN(5154,`change-model`),lg(),mN(5155,`.`),lg()()()(),Ml(5156,`h3`),mN(5157,`Enums`),lg(),Ml(5158,`h4`,4)(5159,`code`,5),mN(5160,`ForceBooleanComponentEnum`),lg()(),Ml(5161,`div`,2)(5162,`p`),mN(5163,`Enum para definição do tipo de componente a ser renderizado.`),lg()(),Ml(5164,`h4`,9),mN(5165,`Propriedades`),lg(),Ml(5166,`table`,10)(5167,`tr`,11)(5168,`th`,12),mN(5169,`Nome`),lg(),Ml(5170,`th`,12),mN(5171,`Descrição`),lg()(),Ml(5172,`tr`,13)(5173,`td`,14)(5174,`div`,15)(5175,`span`,16),mN(5176,` switch`),ql(5177,`br`),lg()()(),Ml(5178,`td`,20)(5179,`p`),mN(5180,`Força a renderização de um po-switch`),lg()()(),Ml(5181,`tr`,13)(5182,`td`,14)(5183,`div`,15)(5184,`span`,16),mN(5185,` checkbox`),ql(5186,`br`),lg()()(),Ml(5187,`td`,20)(5188,`p`),mN(5189,`Força a renderização de um po-checkbox`),lg()()()(),Ml(5190,`h4`,4)(5191,`code`,5),mN(5192,`ForceOptionComponentEnum`),lg()(),Ml(5193,`div`,2)(5194,`p`),mN(5195,`Enum para definição do tipo de componente a ser renderizado.`),lg()(),Ml(5196,`h4`,9),mN(5197,`Propriedades`),lg(),Ml(5198,`table`,10)(5199,`tr`,11)(5200,`th`,12),mN(5201,`Nome`),lg(),Ml(5202,`th`,12),mN(5203,`Descrição`),lg()(),Ml(5204,`tr`,13)(5205,`td`,14)(5206,`div`,15)(5207,`span`,16),mN(5208,` radioGroup`),ql(5209,`br`),lg()()(),Ml(5210,`td`,20)(5211,`p`),mN(5212,`Força a renderização de um po-radio-group independente da quantidade do opções`),lg()()(),Ml(5213,`tr`,13)(5214,`td`,14)(5215,`div`,15)(5216,`span`,16),mN(5217,` select`),ql(5218,`br`),lg()()(),Ml(5219,`td`,20)(5220,`p`),mN(5221,`Força a renderização de um po-select independente da quantidade do opções`),lg()()()(),Ml(5222,`h4`,4)(5223,`code`,5),mN(5224,`PoDynamicFieldType`),lg()(),Ml(5225,`div`,2)(5226,`p`),mN(5227,`Enum para definição do tipo de campo que será criado dinamicamente.`),lg()(),Ml(5228,`h4`,9),mN(5229,`Propriedades`),lg(),Ml(5230,`table`,10)(5231,`tr`,11)(5232,`th`,12),mN(5233,`Nome`),lg(),Ml(5234,`th`,12),mN(5235,`Descrição`),lg()(),Ml(5236,`tr`,13)(5237,`td`,14)(5238,`div`,15)(5239,`span`,16),mN(5240,` Boolean`),ql(5241,`br`),lg()()(),Ml(5242,`td`,20)(5243,`p`),mN(5244,`Valor booleano.`),lg()()(),Ml(5245,`tr`,13)(5246,`td`,14)(5247,`div`,15)(5248,`span`,16),mN(5249,` Currency`),ql(5250,`br`),lg()()(),Ml(5251,`td`,20)(5252,`p`),mN(5253,`Valor numérico que contém casas decimais e milhar.`),lg()()(),Ml(5254,`tr`,13)(5255,`td`,14)(5256,`div`,15)(5257,`span`,16),mN(5258,` Decimal`),ql(5259,`br`),lg()()(),Ml(5260,`td`,20)(5261,`p`),mN(5262,`Valor numérico que contém casas decimais e milhar.`),lg()()(),Ml(5263,`tr`,13)(5264,`td`,14)(5265,`div`,15)(5266,`span`,16),mN(5267,` Date`),ql(5268,`br`),lg()()(),Ml(5269,`td`,20)(5270,`p`),mN(5271,`Valor para data.`),lg()()(),Ml(5272,`tr`,13)(5273,`td`,14)(5274,`div`,15)(5275,`span`,16),mN(5276,` DateTime`),ql(5277,`br`),lg()()(),Ml(5278,`td`,20)(5279,`p`),mN(5280,`Valor para data e hora.`),lg()()(),Ml(5281,`tr`,13)(5282,`td`,14)(5283,`div`,15)(5284,`span`,16),mN(5285,` Time`),ql(5286,`br`),lg()()(),Ml(5287,`td`,20)(5288,`p`),mN(5289,`Utilizado para informar/exibir hora.`),lg()()(),Ml(5290,`tr`,13)(5291,`td`,14)(5292,`div`,15)(5293,`span`,16),mN(5294,` Number`),ql(5295,`br`),lg()()(),Ml(5296,`td`,20)(5297,`p`),mN(5298,`Valor numérico.`),lg()()(),Ml(5299,`tr`,13)(5300,`td`,14)(5301,`div`,15)(5302,`span`,16),mN(5303,` String`),ql(5304,`br`),lg()()(),Ml(5305,`td`,20)(5306,`p`),mN(5307,`Texto.`),lg()()(),Ml(5308,`tr`,13)(5309,`td`,14)(5310,`div`,15)(5311,`span`,16),mN(5312,` Upload`),ql(5313,`br`),lg()()(),Ml(5314,`td`,20)(5315,`p`),mN(5316,`Utilizado para fazer uploads de arquivos.`),lg()()()(),Ml(5317,`h4`,4)(5318,`code`,5),mN(5319,`PoTimepickerModelFormat`),lg()(),Ml(5320,`div`,2)(5321,`p`)(5322,`em`),mN(5323,`Enum`),lg(),mN(5324,` que define o padrão de formatação do model de saída do timepicker.`),lg()(),Ml(5325,`h4`,9),mN(5326,`Propriedades`),lg(),Ml(5327,`table`,10)(5328,`tr`,11)(5329,`th`,12),mN(5330,`Nome`),lg(),Ml(5331,`th`,12),mN(5332,`Descrição`),lg()(),Ml(5333,`tr`,13)(5334,`td`,14)(5335,`div`,15)(5336,`span`,16),mN(5337,` HourMinute`),ql(5338,`br`),lg()()(),Ml(5339,`td`,20)(5340,`p`),mN(5341,`Formato básico `),Ml(5342,`code`),mN(5343,`HH:mm`),lg(),mN(5344,` (ex: `),Ml(5345,`code`),mN(5346,`14:30`),lg(),mN(5347,`).`),lg()()(),Ml(5348,`tr`,13)(5349,`td`,14)(5350,`div`,15)(5351,`span`,16),mN(5352,` HourMinuteSecond`),ql(5353,`br`),lg()()(),Ml(5354,`td`,20)(5355,`p`),mN(5356,`Formato com segundos `),Ml(5357,`code`),mN(5358,`HH:mm:ss`),lg(),mN(5359,` (ex: `),Ml(5360,`code`),mN(5361,`14:30:00`),lg(),mN(5362,`).`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var fe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Dynamic Form`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,r){a&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return r.changeTab(`doc`)}),ql(3,`sample-po-dynamic-form-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return r.changeTab(`web`)}),ql(5,`sample-po-dynamic-form-basic-view`)(6,`sample-po-dynamic-form-register-view`)(7,`sample-po-dynamic-form-container-view`),lg()()()),a&2&&(cw(`p-actions`,r.actions),Up(2),cw(`p-active`,r.activeTab===`doc`),Up(2),cw(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[V8e,SCe,ECe,$,te,ne,oe],encapsulation:2,changeDetection:1})}return o})()}];var re=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[NL.forChild(fe),NL]})}return o})();var rt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,re]})}return o})();export{rt as DocPoDynamicFormModule};