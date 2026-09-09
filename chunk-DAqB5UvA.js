import{t as r}from"./chunk-zystk1pz.js";import{$r as Xy,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Jn as Ce,Ki as lo,Kn as Bx,Li as ht,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,_t as UCe,ai as _N,dr as I,dt as Sbe,ei as Yl,fi as ag,gi as bL,k as Eu,l as ar,la as uo,lr as Gl,on as mCe,pa as w,r as Ga,sa as ue,ut as S8e,yi as cN}from"./main-3EWTGE7T.js";var me=()=>({property:`name`,required:!0,showRequired:!0});var le=o=>[o];var G=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-fields`]],template:function(a,r){a&1&&Gl(0,`po-dynamic-form`,0),a&2&&nw(`p-fields`,DN(2,le,_N(1,me)))},dependencies:[Sbe],encapsulation:2,changeDetection:1})}return o})();var pe=o=>({"docs-sample-code-tabs":o});var $=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Dynamic Form Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-dynamic-form-basic`),ag(),Gl(23,`hr`)),a&2&&(jp(5),Xx(`po-icon `+r.sampleCodeButtonIcon),jp(),hg(` `,r.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,pe,r.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,G],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{getCity(m){switch(m){case 1:return[{city:`Palhoça`,code:5},{city:`Lages`,code:6},{city:`Balneário Camboriú`,code:7},{city:`Brusque`,code:8}];case 2:return[{city:`São Paulo`,code:9},{city:`Guarulhos`,code:10},{city:`Campinas`,code:11},{city:`São Bernardo do Campo`,code:12}];case 3:return[{city:`Rio de Janeiro`,code:13},{city:`São Gonçalo`,code:14},{city:`Duque de Caxias`,code:15},{city:`Nova Iguaçu`,code:16}];case 4:return[{city:`Belo Horizonte`,code:17},{city:`Uberlândia`,code:18},{city:`Contagem`,code:19},{city:`Juiz de Fora`,code:20}]}return[]}getUserDocument(m){return{fields:[m.isJuridicPerson?{property:`cnpj`,visible:!0}:{property:`cpf`,visible:!0}]}}static ɵfac=function(a){return new(a||o)};static ɵprov=I({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var ce=[`dynamicForm`];var ee=(()=>{class o{poNotification=f(Eu);registerService=f(U);dynamicForm;person={};validateFields=[`state`];fields=[{property:`name`,divider:`PERSONAL DATA`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,divider:`CONTACTS`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6},{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`},{property:`vacation`,type:`date`,divider:`Work data`,range:!0,gridColumns:5,gridSmColumns:12},{property:`entryTime`,label:`Entry time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`exitTime`,label:`Exit time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`wage`,type:`currency`,gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,displayFormat:`>>>,>>>,>>9.99`,icon:`an an-currency-circle-dollar`},{property:`employeeCode`,label:`Employee code`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`999`,decimalsLength:0},{property:`overtime`,label:`Overtime hours`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`>>9.9<<`,decimalsLength:3,optional:!0},{property:`hobbies`,divider:`MORE INFO`,gridColumns:6,gridSmColumns:12,optional:!0,options:[`Soccer`,`Basketball`,`Bike`,`Yoga`,`Travel`,`Run`],optionsMulti:!0},{property:`favoriteHero`,gridColumns:6,gridSmColumns:12,label:`Favorite hero`,optional:!0,searchService:`https://po-sample-api.onrender.com/v1/heroes`,columns:[{property:`nickname`,label:`Hero`},{property:`label`,label:`Name`}],format:[`id`,`nickname`],fieldLabel:`nickname`,fieldValue:`email`},{property:`partner`,gridColumns:6,gridSmColumns:12,optionsService:`https://po-sample-api.onrender.com/v1/people`,fieldLabel:`name`,fieldValue:`id`,optional:!0},{property:`videogame`,gridColumns:6,gridSmColumns:12,label:`Video game console`,optional:!0,fieldValue:`code`,fieldLabel:`console`,options:[{console:`Nintendo Wii U`,code:`NWU`},{console:`Playstation 4`,code:`PS4`},{console:`Xbox One`,code:`XONE`},{console:`Nintendo Switch`,code:`NSW`},{console:`Playstation 5`,code:`PS5`},{console:`Xbox Series S|X`,code:`XSSX`}],optionsMulti:!0},{property:`agree`,gridColumns:12,label:`Do you agree?`,type:`boolean`,forceBooleanComponentType:UCe.checkbox},{property:`image`,type:`upload`,gridColumns:12,gridSmColumns:12,label:`Upload your background`,optional:!0,url:`https://po-sample-api.onrender.com/v1/uploads/addFile`}];ngOnInit(){this.person={name:`Tony Stark`,birthday:`1970-05-29`,isJuridicPerson:!1,videogame:[`PS4`,`NSW`,`XSSX`],rememberSecretKey:`no`,status:`active`}}onChangeFields(m){return setTimeout(()=>{let a=this.registerService.getCity(m.value.state);this.updateDynamicFormField(`city`,{options:a,loading:!1})},500),{value:{city:void 0},fields:[{property:`city`,gridColumns:6,disabled:!1,loading:!0}]}}onLoadFields(m){return this.registerService.getUserDocument(m)}updateDynamicFormField(m,a){let r$1=this.dynamicForm?.fields??this.fields,l=r$1.findIndex(O=>O.property===m);l>=0&&(r$1[l]=r(r({},r$1[l]),a),this.fields=[...r$1])}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-register`]],viewQuery:function(a,r){if(a&1&&Yl(ce,7),a&2){let l;lo(l=uo())&&(r.dynamicForm=l.first)}},standalone:!1,features:[Ce([U])],decls:5,vars:6,consts:[[`dynamicForm`,``],[`p-auto-focus`,`name`,3,`p-fields`,`p-load`,`p-validate`,`p-validate-fields`,`p-value`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(a,r){if(a&1){let l=Ax();Gl(0,`po-dynamic-form`,1,0)(2,`br`),Tl(3,`div`,2)(4,`po-button`,3),ht(`p-click`,function(){Ky(l);let I=Bx(1);return r.poNotification.success(`Data saved successfully!`),Xy(I.form.reset())}),ag()()}if(a&2){let l=Bx(1);nw(`p-fields`,r.fields)(`p-load`,r.onLoadFields.bind(r))(`p-validate`,r.onChangeFields.bind(r))(`p-validate-fields`,r.validateFields)(`p-value`,r.person),jp(4),nw(`p-disabled`,l?.form.invalid)}},dependencies:[Zt,Sbe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o});var te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-register-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Dynamic Form - Register`),ag(),Tl(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-dynamic-form
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { Injectable } from '@angular/core';

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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-dynamic-form-register`),ag(),Gl(27,`hr`)),a&2&&(jp(5),Xx(`po-icon `+r.sampleCodeButtonIcon),jp(),hg(` `,r.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ee,r.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ee],encapsulation:2,changeDetection:1})}return o})();var K=(()=>{class o{getCity(m){switch(m){case 1:return[{city:`Palhoça`,code:5},{city:`Lages`,code:6},{city:`Balneário Camboriú`,code:7},{city:`Brusque`,code:8}];case 2:return[{city:`São Paulo`,code:9},{city:`Guarulhos`,code:10},{city:`Campinas`,code:11},{city:`São Bernardo do Campo`,code:12}];case 3:return[{city:`Rio de Janeiro`,code:13},{city:`São Gonçalo`,code:14},{city:`Duque de Caxias`,code:15},{city:`Nova Iguaçu`,code:16}];case 4:return[{city:`Belo Horizonte`,code:17},{city:`Uberlândia`,code:18},{city:`Contagem`,code:19},{city:`Juiz de Fora`,code:20}]}return[]}getUserDocument(m){return{fields:[m.isJuridicPerson?{property:`cnpj`,visible:!0}:{property:`cpf`,visible:!0}]}}static ɵfac=function(a){return new(a||o)};static ɵprov=I({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Se=[`dynamicForm`];var ie=(()=>{class o{poNotification=f(Eu);registerService=f(K);dynamicForm;person={};validateFields=[`state`];fields=[{property:`name`,container:`PERSONAL DATA`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`,keydown:this.onKeyDown.bind(this,`birthday`)},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`,keydown:this.onKeyDown.bind(this,`secretKey`)},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,container:`CONTACTS`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6},{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`},{property:`vacation`,type:`date`,container:`Work data`,range:!0,gridColumns:5,gridSmColumns:12,help:`Enter or select a valid date range.`,additionalHelpTooltip:`Ensure the start date is earlier than or equal to the end date.`,keydown:this.onKeyDown.bind(this,`vacation`)},{property:`entryTime`,label:`Entry time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`exitTime`,label:`Exit time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`wage`,type:`currency`,gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,displayFormat:`>>>,>>>,>>9.99`,icon:`an an-currency-circle-dollar`},{property:`revenue`,label:`Revenue`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`->>,>,>>>,>>9`,decimalsLength:0},{property:`adjustment`,label:`Adjustment`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`->>9.99`,optional:!0},{property:`hobbies`,container:`MORE INFO`,gridColumns:6,gridSmColumns:12,optional:!0,options:[`Soccer`,`Basketball`,`Bike`,`Yoga`,`Travel`,`Run`],optionsMulti:!0,listboxControlPosition:`top`},{property:`favoriteHero`,gridColumns:6,gridSmColumns:12,label:`Favorite hero`,optional:!0,searchService:`https://po-sample-api.onrender.com/v1/heroes`,columns:[{property:`nickname`,label:`Hero`},{property:`label`,label:`Name`}],format:[`id`,`nickname`],fieldLabel:`nickname`,fieldValue:`email`},{property:`partner`,gridColumns:6,gridSmColumns:12,optionsService:`https://po-sample-api.onrender.com/v1/people`,fieldLabel:`name`,fieldValue:`id`,optional:!0,listboxControlPosition:`top`},{property:`videogame`,gridColumns:6,gridSmColumns:12,label:`Video game console`,optional:!0,fieldValue:`code`,fieldLabel:`console`,options:[{console:`Nintendo Wii U`,code:`NWU`},{console:`Playstation 4`,code:`PS4`},{console:`Xbox One`,code:`XONE`},{console:`Nintendo Switch`,code:`NSW`},{console:`Playstation 5`,code:`PS5`},{console:`Xbox Series S|X`,code:`XSSX`}],optionsMulti:!0,listboxControlPosition:`top`},{property:`agree`,gridColumns:12,label:`Do you agree?`,type:`boolean`,forceBooleanComponentType:UCe.checkbox},{property:`image`,type:`upload`,gridColumns:12,gridSmColumns:12,label:`Upload your background`,optional:!0,url:`https://po-sample-api.onrender.com/v1/uploads/addFile`,customAction:{icon:`an an-download`,visible:!0},customActionClick:m=>{console.log(`Iniciar download para o arquivo:`,m.name)}}];ngOnInit(){this.person={name:`Tony Stark`,birthday:`1970-05-29`,isJuridicPerson:!1,videogame:[`PS4`,`NSW`,`XSSX`],rememberSecretKey:`no`,status:`active`}}onChangeFields(m){return{value:{city:void 0},fields:[{property:`city`,gridColumns:6,options:this.registerService.getCity(m.value.state),disabled:!1}]}}onKeyDown(m,a){a.code===`F9`&&this.dynamicForm.showAdditionalHelp(m)}onLoadFields(m){return this.registerService.getUserDocument(m)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-container`]],viewQuery:function(a,r){if(a&1&&Yl(Se,7),a&2){let l;lo(l=uo())&&(r.dynamicForm=l.first)}},standalone:!1,features:[Ce([K])],decls:5,vars:6,consts:[[`dynamicForm`,``],[`p-auto-focus`,`name`,3,`p-fields`,`p-load`,`p-validate`,`p-validate-fields`,`p-value`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(a,r){if(a&1){let l=Ax();Gl(0,`po-dynamic-form`,1,0)(2,`br`),Tl(3,`div`,2)(4,`po-button`,3),ht(`p-click`,function(){Ky(l);let I=Bx(1);return r.poNotification.success(`Data saved successfully!`),Xy(I.form.reset())}),ag()()}if(a&2){let l=Bx(1);nw(`p-fields`,r.fields)(`p-load`,r.onLoadFields.bind(r))(`p-validate`,r.onChangeFields.bind(r))(`p-validate-fields`,r.validateFields)(`p-value`,r.person),jp(4),nw(`p-disabled`,l?.form.invalid)}},dependencies:[Zt,Sbe],encapsulation:2,changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o});var ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-container-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Dynamic Form - Container`),ag(),Tl(4,`a`,2),ht(`click`,function(){return r.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-dynamic-form
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts`),ag(),Tl(23,`pre`,9),cN(24,`import { Injectable } from '@angular/core';

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
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-dynamic-form-container`),ag(),Gl(27,`hr`)),a&2&&(jp(5),Xx(`po-icon `+r.sampleCodeButtonIcon),jp(),hg(` `,r.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ge,r.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ie],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Un({type:o,selectors:[[`sample-po-dynamic-form-doc`]],standalone:!1,decls:5363,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[1,`language-ts`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-load`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-validation`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`any`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-javascript`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`id`,`po-dynamic-form-load`],[`id`,`po-dynamic-form-field-validation`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFormField`],[`id`,`po-dynamic-form-validation`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(a,r){a&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoDynamicModule } from '@po-ui/ng-components';`),ag()(),Gl(4,`div`,2),Tl(5,`h3`,3),cN(6,`Componente`),ag(),Tl(7,`h4`,4)(8,`code`,5),cN(9,`PoDynamicFormComponent`),ag()(),Tl(10,`div`,2)(11,`p`),cN(12,`Componente para criação de formulários dinâmicos a partir de uma lista de objetos.`),ag(),Tl(13,`p`),cN(14,`Também é possível verificar se o formulário está válido e informar valores para a exibição de informações. `),ag()(),Tl(15,`div`,6)(16,`h4`,7),cN(17,`Seletor`),ag(),Tl(18,`pre`,8),cN(19,`<po-dynamic-form
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
`),ag()(),Tl(20,`h4`,9),cN(21,`Propriedades`),ag(),Tl(22,`table`,10)(23,`tr`,11)(24,`th`,12),cN(25,`Nome`),ag(),Tl(26,`th`,12),cN(27,`Tipo`),ag(),Tl(28,`th`,12),cN(29,`Padrão`),ag(),Tl(30,`th`,12),cN(31,`Descrição`),ag()(),Tl(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),cN(36,` p-auto-focus`),Gl(37,`br`),ag()()(),Tl(38,`td`,17)(39,`code`,18),cN(40,`string`),ag()(),Tl(41,`td`,19),cN(42,`-`),ag(),Tl(43,`td`,20)(44,`em`)(45,`strong`),cN(46,`(opcional)`),ag()(),Tl(47,`p`),cN(48,`Nome da propriedade, atribuída ao `),Tl(49,`code`),cN(50,`PoDynamicFormField.property`),ag(),cN(51,`, que iniciará o campo com foco.`),ag()()(),Tl(52,`tr`,13)(53,`td`,14)(54,`div`,15)(55,`span`,16),cN(56,` p-components-size`),Gl(57,`br`),ag()()(),Tl(58,`td`,17)(59,`code`,18),cN(60,`string`),ag()(),Tl(61,`td`,19)(62,`p`)(63,`code`),cN(64,`medium`),ag()()(),Tl(65,`td`,20)(66,`em`)(67,`strong`),cN(68,`(opcional)`),ag()(),Tl(69,`p`),cN(70,`Define o tamanho dos componentes de formulário no template:`),ag(),Tl(71,`ul`)(72,`li`)(73,`code`),cN(74,`small`),ag(),cN(75,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(76,`li`)(77,`code`),cN(78,`medium`),ag(),cN(79,`: aplica a medida medium de cada componente.`),ag()(),Tl(80,`blockquote`)(81,`p`),cN(82,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(83,`code`),cN(84,`medium`),ag(),cN(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(86,`a`,21),cN(87,`po-theme`),ag(),cN(88,`.`),ag()()()(),Tl(89,`tr`,13)(90,`td`,14)(91,`div`,15)(92,`span`,16),cN(93,` p-fields`),Gl(94,`br`),ag()()(),Tl(95,`td`,17)(96,`code`,22),cN(97,`Array<PoDynamicFormField>`),ag()(),Tl(98,`td`,19)(99,`p`)(100,`code`),cN(101,`[]`),ag()()(),Tl(102,`td`,20)(103,`p`),cN(104,`Coleção de objetos que implementam a interface `),Tl(105,`code`),cN(106,`PoDynamicFormField`),ag(),cN(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),ag(),Tl(108,`blockquote`)(109,`p`),cN(110,`Ex: `),Tl(111,`code`),cN(112,`[ { property: 'name' } ]`),ag()()(),Tl(113,`p`),cN(114,`Regras de tipagem e criação dos componentes:`),ag(),Tl(115,`ul`)(116,`li`),cN(117,`Caso o `),Tl(118,`em`),cN(119,`type`),ag(),cN(120,` informado seja `),Tl(121,`em`),cN(122,`boolean`),ag(),cN(123,` o componente criado será o `),Tl(124,`code`),cN(125,`po-switch`),ag(),cN(126,`.`),ag(),Tl(127,`li`),cN(128,`Caso o `),Tl(129,`em`),cN(130,`type`),ag(),cN(131,` informado seja `),Tl(132,`em`),cN(133,`currency`),ag(),cN(134,` e não seja informado um `),Tl(135,`em`),cN(136,`mask`),ag(),cN(137,` ou `),Tl(138,`em`),cN(139,`pattern`),ag(),cN(140,` o componente criado será o `),Tl(141,`code`),cN(142,`po-decimal`),ag(),cN(143,`,
caso seja informado um `),Tl(144,`em`),cN(145,`mask`),ag(),cN(146,` ou `),Tl(147,`em`),cN(148,`pattern`),ag(),cN(149,` o componente criado será o `),Tl(150,`code`),cN(151,`po-input`),ag(),cN(152,`.`),ag(),Tl(153,`li`),cN(154,`Caso o `),Tl(155,`em`),cN(156,`type`),ag(),cN(157,` informado seja `),Tl(158,`em`),cN(159,`number`),ag(),cN(160,` e não seja informado um `),Tl(161,`em`),cN(162,`mask`),ag(),cN(163,` ou `),Tl(164,`em`),cN(165,`pattern`),ag(),cN(166,` o componente criado será o `),Tl(167,`code`),cN(168,`po-number`),ag(),cN(169,`, caso seja
informado um `),Tl(170,`em`),cN(171,`mask`),ag(),cN(172,` ou `),Tl(173,`em`),cN(174,`pattern`),ag(),cN(175,` o componente criado será o `),Tl(176,`code`),cN(177,`po-input`),ag(),cN(178,`.`),ag(),Tl(179,`li`),cN(180,`Caso a lista possua a propriedade `),Tl(181,`code`),cN(182,`options`),ag(),cN(183,` e a mesma possua até 3 itens o componente criado será o `),Tl(184,`code`),cN(185,`po-radio-group`),ag(),cN(186,`
ou `),Tl(187,`code`),cN(188,`po-checkbox-group`),ag(),cN(189,` se informar a propriedade `),Tl(190,`code`),cN(191,`optionsMulti`),ag(),cN(192,`.`),ag(),Tl(193,`li`),cN(194,`Caso a mesma possua 3 ou mais itens, será criado o componente `),Tl(195,`code`),cN(196,`po-select`),ag(),cN(197,` ou, `),Tl(198,`code`),cN(199,`po-multiselect`),ag(),cN(200,` se a propriedade `),Tl(201,`code`),cN(202,`optionsMulti`),ag(),cN(203,`
for verdadeira.`),ag(),Tl(204,`li`),cN(205,`Caso o `),Tl(206,`em`),cN(207,`type`),ag(),cN(208,` informado seja `),Tl(209,`em`),cN(210,`date`),ag(),cN(211,` ou `),Tl(212,`em`),cN(213,`datetime`),ag(),cN(214,` o componente criado será o `),Tl(215,`code`),cN(216,`po-datepicker`),ag(),cN(217,`.`),ag(),Tl(218,`li`),cN(219,`Caso seja informado a propriedade `),Tl(220,`code`),cN(221,`optionsService`),ag(),cN(222,` o componente criado será o `),Tl(223,`code`),cN(224,`po-combo`),ag(),cN(225,`.`),ag(),Tl(226,`li`),cN(227,`Caso o `),Tl(228,`em`),cN(229,`type`),ag(),cN(230,` informado seja `),Tl(231,`em`),cN(232,`time`),ag(),cN(233,` o componente criado será um `),Tl(234,`code`),cN(235,`po-input`),ag(),cN(236,` podendo receber um `),Tl(237,`em`),cN(238,`mask`),ag(),cN(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),Tl(240,`em`),cN(241,`mask`),ag(),cN(242,` o componente será criado com a máscara '99:99' por padrão.`),ag(),Tl(243,`li`),cN(244,`Caso a lista possua a propriedade `),Tl(245,`code`),cN(246,`rows`),ag(),cN(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),Tl(248,`code`),cN(249,`po-textarea`),ag(),cN(250,`, caso o valor da propriedade `),Tl(251,`code`),cN(252,`rows`),ag(),cN(253,` seja menor que 3 o componente criado será o `),Tl(254,`code`),cN(255,`po-input`),ag(),cN(256,`.`),ag(),Tl(257,`li`),cN(258,`Caso seja informada a propriedade `),Tl(259,`code`),cN(260,`secret`),ag(),cN(261,` o componente criado será o `),Tl(262,`code`),cN(263,`po-password`),ag(),cN(264,`.`),ag(),Tl(265,`li`),cN(266,`Caso o `),Tl(267,`em`),cN(268,`type`),ag(),cN(269,` informado seja `),Tl(270,`em`),cN(271,`string`),ag(),cN(272,` o componente criado será o `),Tl(273,`code`),cN(274,`po-input`),ag(),cN(275,`.`),Tl(276,`blockquote`)(277,`p`),cN(278,`Ao alterar o valor das `),Tl(279,`code`),cN(280,`properties`),ag(),cN(281,`, visibilidade e/ou agrupamentos via container, os `),Tl(282,`code`),cN(283,`fields`),ag(),cN(284,` que utilizam serviço podem refazer as chamadas para as API's.`),ag()()()()()(),Tl(285,`tr`,13)(286,`td`,14)(287,`div`,23)(288,`span`,24),cN(289,` (p-form)`),Gl(290,`br`),ag()()(),Tl(291,`td`,17)(292,`code`,25),cN(293,`EventEmitter`),ag()(),Tl(294,`td`,19),cN(295,`-`),ag(),Tl(296,`td`,20)(297,`em`)(298,`strong`),cN(299,`(opcional)`),ag()(),Tl(300,`p`),cN(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),ag(),Tl(302,`p`),cN(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),Tl(304,`em`),cN(305,`template reference`),ag(),cN(306,` e através do `),Tl(307,`em`),cN(308,`output`),ag(),cN(309,`, veja os exemplos abaixo:`),ag(),Tl(310,`blockquote`)(311,`p`)(312,`em`),cN(313,`template reference`),ag()()(),Tl(314,`pre`)(315,`code`,26),cN(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),ag()(),Tl(317,`blockquote`)(318,`p`)(319,`em`),cN(320,`Output`),ag()()(),Tl(321,`pre`)(322,`code`,26),cN(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),ag()(),Tl(324,`pre`)(325,`code`,27),cN(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),ag()(),Tl(327,`blockquote`)(328,`p`),cN(329,`Caso a propriedade `),Tl(330,`code`),cN(331,`p-group-form`),ag(),cN(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),ag()()()(),Tl(333,`tr`,13)(334,`td`,14)(335,`div`,15)(336,`span`,16),cN(337,` p-group-form`),Gl(338,`br`),ag()()(),Tl(339,`td`,17)(340,`code`,28),cN(341,`boolean`),ag()(),Tl(342,`td`,19),cN(343,`-`),ag(),Tl(344,`td`,20)(345,`em`)(346,`strong`),cN(347,`(opcional)`),ag()(),Tl(348,`p`),cN(349,`Ao informar esta propriedade, o componente passará a utilizar o formulário pai para criar os `),Tl(350,`code`),cN(351,`FormControl`),ag(),cN(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),ag(),Tl(353,`pre`)(354,`code`,26),cN(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),ag()()()(),Tl(356,`tr`,13)(357,`td`,14)(358,`div`,15)(359,`span`,16),cN(360,` p-load`),Gl(361,`br`),ag()()(),Tl(362,`td`,17)(363,`code`,18),cN(364,`string `),ag(),Tl(365,`code`,29),cN(366,` Function`),ag()(),Tl(367,`td`,19),cN(368,`-`),ag(),Tl(369,`td`,20)(370,`em`)(371,`strong`),cN(372,`(opcional)`),ag()(),Tl(373,`p`),cN(374,`Função ou serviço que será executado na inicialização do componente.`),ag(),Tl(375,`p`),cN(376,`A propriedade aceita os seguintes tipos:`),ag(),Tl(377,`ul`)(378,`li`)(379,`code`),cN(380,`string`),ag(),cN(381,`: `),Tl(382,`em`),cN(383,`Endpoint`),ag(),cN(384,` usado pelo componente para requisição via `),Tl(385,`code`),cN(386,`POST`),ag(),cN(387,`.`),ag(),Tl(388,`li`)(389,`code`),cN(390,`function`),ag(),cN(391,`: Método que será executado.`),ag()(),Tl(392,`p`),cN(393,`Ao ser executado, irá receber como parâmetro o objeto informado no `),Tl(394,`code`),cN(395,`p-value`),ag(),cN(396,`.`),ag(),Tl(397,`p`),cN(398,`O retorno desta função deve ser do tipo `),Tl(399,`a`,30),cN(400,`PoDynamicFormLoad`),ag(),cN(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),ag(),Tl(402,`p`),cN(403,`Por exemplo:`),ag(),Tl(404,`pre`)(405,`code`),cN(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),ag()(),Tl(407,`p`),cN(408,`Para referenciar a sua função utilize a propriedade `),Tl(409,`code`),cN(410,`bind`),ag(),cN(411,`, por exemplo:`),ag(),Tl(412,`pre`)(413,`code`),cN(414,`[p-load]="onLoadFields.bind(this)"
`),ag()()()(),Tl(415,`tr`,13)(416,`td`,14)(417,`div`,15)(418,`span`,16),cN(419,` p-validate`),Gl(420,`br`),ag()()(),Tl(421,`td`,17)(422,`code`,18),cN(423,`string `),ag(),Tl(424,`code`,29),cN(425,` Function`),ag()(),Tl(426,`td`,19),cN(427,`-`),ag(),Tl(428,`td`,20)(429,`em`)(430,`strong`),cN(431,`(opcional)`),ag()(),Tl(432,`p`),cN(433,`Função ou serviço para validar as `),Tl(434,`strong`),cN(435,`mudanças do formulário`),ag(),cN(436,`.`),ag(),Tl(437,`p`),cN(438,`A propriedade aceita os seguintes tipos:`),ag(),Tl(439,`ul`)(440,`li`)(441,`code`),cN(442,`string`),ag(),cN(443,`: `),Tl(444,`em`),cN(445,`Endpoint`),ag(),cN(446,` usado pelo componente para requisição via `),Tl(447,`code`),cN(448,`POST`),ag(),cN(449,`.`),ag(),Tl(450,`li`)(451,`code`),cN(452,`function`),ag(),cN(453,`: Método que será executado.`),ag()(),Tl(454,`p`),cN(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),Tl(456,`code`),cN(457,`PoDynamicFormFieldChanged`),ag()(),Tl(458,`p`),cN(459,`O retorno desta função deve ser do tipo `),Tl(460,`a`,31),cN(461,`PoDynamicFormValidation`),ag(),cN(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),ag(),Tl(463,`pre`)(464,`code`),cN(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),ag()(),Tl(466,`p`),cN(467,`Para referenciar a sua função utilize a propriedade `),Tl(468,`code`),cN(469,`bind`),ag(),cN(470,`, por exemplo:`),ag(),Tl(471,`pre`)(472,`code`),cN(473,`[p-validate]="this.myFunction.bind(this)"
`),ag()(),Tl(474,`blockquote`)(475,`p`),cN(476,`Se houver uma lista de campos para validação definida em `),Tl(477,`code`),cN(478,`p-validate-fields`),ag(),cN(479,`, a propriedade `),Tl(480,`code`),cN(481,`validate`),ag(),cN(482,` só receberá o disparo para os campos equivalentes.`),ag()()()(),Tl(483,`tr`,13)(484,`td`,14)(485,`div`,15)(486,`span`,16),cN(487,` p-validate-fields`),Gl(488,`br`),ag()()(),Tl(489,`td`,17)(490,`code`,32),cN(491,`Array<string>`),ag()(),Tl(492,`td`,19),cN(493,`-`),ag(),Tl(494,`td`,20)(495,`em`)(496,`strong`),cN(497,`(opcional)`),ag()(),Tl(498,`p`),cN(499,`Lista que define os campos que irão disparar o validate do form.`),ag()()(),Tl(500,`tr`,13)(501,`td`,14)(502,`div`,15)(503,`span`,16),cN(504,` p-validate-on-input`),Gl(505,`br`),ag()()(),Tl(506,`td`,17)(507,`code`,28),cN(508,`boolean`),ag()(),Tl(509,`td`,19),cN(510,`-`),ag(),Tl(511,`td`,20)(512,`em`)(513,`strong`),cN(514,`(opcional)`),ag()(),Tl(515,`p`),cN(516,`Ao informar esta propriedade, o componente passará a emitir o valor a cada caractere digitado.`),ag(),Tl(517,`p`),cN(518,`Pode ser aplicado nos seguintes componentes:`),ag(),Tl(519,`ul`)(520,`li`),cN(521,`po-input`),ag(),Tl(522,`li`),cN(523,`po-number`),ag(),Tl(524,`li`),cN(525,`po-decimal`),ag(),Tl(526,`li`),cN(527,`po-textarea`),ag(),Tl(528,`li`),cN(529,`po-password`),ag()(),Tl(530,`p`),cN(531,`Deve informar os campos que deseja receber as emissões na propriedade `),Tl(532,`code`),cN(533,`p-validate-fields`),ag(),cN(534,`.`),ag()()(),Tl(535,`tr`,13)(536,`td`,14)(537,`div`,15)(538,`span`,16),cN(539,` p-value`),Gl(540,`br`),ag()()(),Tl(541,`td`,17)(542,`code`,33),cN(543,`any`),ag()(),Tl(544,`td`,19),cN(545,`-`),ag(),Tl(546,`td`,20)(547,`p`),cN(548,`Objeto que será utilizado como valor para exibir as informações, será recuperado e preenchido através do atributo `),Tl(549,`em`),cN(550,`property`),ag(),cN(551,`
dos objetos contidos na propridade `),Tl(552,`code`),cN(553,`p-fields`),ag(),cN(554,`.`),ag(),Tl(555,`p`),cN(556,`Pode iniciar com valor ou apenas com um objeto vazio que será preenchido conforme descrito acima.`),ag(),Tl(557,`blockquote`)(558,`p`),cN(559,`Ex: `),Tl(560,`code`),cN(561,`{ name: 'po' }`),ag()()()()()(),Tl(562,`h3`,9),cN(563,`Métodos`),ag(),Tl(564,`table`,34)(565,`tr`,13)(566,`th`,35)(567,`div`,15)(568,`h4`)(569,`span`,16),cN(570,` focus `),ag()()()()(),Tl(571,`tr`,20)(572,`td`,20)(573,`p`),cN(574,`Função que atribui foco ao campo desejado.`),ag(),Tl(575,`p`),cN(576,`Para utilizá-la é necessário capturar a instância do `),Tl(577,`code`),cN(578,`dynamic form`),ag(),cN(579,`, como por exemplo:`),ag(),Tl(580,`pre`)(581,`code`,26),cN(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),ag()(),Tl(583,`pre`)(584,`code`,36),cN(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),ag()()()()(),Tl(586,`h5`)(587,`b`),cN(588,`Parâmetros`),ag()(),Tl(589,`table`,10)(590,`tr`,11)(591,`th`,12),cN(592,`Nome`),ag(),Tl(593,`th`,12),cN(594,`Tipo`),ag(),Tl(595,`th`,12),cN(596,`Descrição`),ag()(),Tl(597,`tr`,13)(598,`td`,14),cN(599,` property`),ag(),Tl(600,`td`,17)(601,`code`,37),cN(602,` string `),ag()(),Tl(603,`td`,20)(604,`p`),cN(605,`Nome da propriedade atribuída ao `),Tl(606,`code`),cN(607,`PoDynamicFormField.property`),ag(),cN(608,`.`),ag()()()(),Gl(609,`br`),Tl(610,`table`,34)(611,`tr`,13)(612,`th`,35)(613,`div`,15)(614,`h4`)(615,`span`,16),cN(616,` showAdditionalHelp `),ag()()()()(),Tl(617,`tr`,20)(618,`td`,20)(619,`p`),cN(620,`Método que exibe `),Tl(621,`code`),cN(622,`p-helper`),ag(),cN(623,` ou executa a ação definida em `),Tl(624,`code`),cN(625,`p-helper{eventOnClick}`),ag(),cN(626,` ou em `),Tl(627,`code`),cN(628,`p-additionalHelp`),ag(),cN(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(630,`code`),cN(631,`keydown`),ag(),cN(632,`.`),ag(),Tl(633,`pre`)(634,`code`),cN(635,`import { PoDynamicModule } from '@po-ui/ng-components';
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
`),ag()()()()(),Tl(636,`h5`)(637,`b`),cN(638,`Parâmetros`),ag()(),Tl(639,`table`,10)(640,`tr`,11)(641,`th`,12),cN(642,`Nome`),ag(),Tl(643,`th`,12),cN(644,`Tipo`),ag(),Tl(645,`th`,12),cN(646,`Descrição`),ag()(),Tl(647,`tr`,13)(648,`td`,14),cN(649,` property`),ag(),Tl(650,`td`,17)(651,`code`,37),cN(652,` string `),ag()(),Tl(653,`td`,20)(654,`p`),cN(655,`Identificador da coluna.`),ag()()()(),Gl(656,`br`),Tl(657,`h3`),cN(658,`Interfaces`),ag(),Tl(659,`h4`,38)(660,`code`,5),cN(661,`PoDynamicFormField`),ag()(),Tl(662,`div`,2)(663,`p`),cN(664,` Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente.`),ag()(),Tl(665,`h4`,9),cN(666,`Propriedades`),ag(),Tl(667,`table`,10)(668,`tr`,11)(669,`th`,12),cN(670,`Nome`),ag(),Tl(671,`th`,12),cN(672,`Tipo`),ag(),Tl(673,`th`,12),cN(674,`Descrição`),ag()(),Tl(675,`tr`,13)(676,`td`,14)(677,`div`,15)(678,`span`,16),cN(679,` additionalHelp`),Gl(680,`br`),ag()()(),Tl(681,`td`,17)(682,`code`,29),cN(683,`Function`),ag()(),Tl(684,`td`,20)(685,`em`)(686,`strong`),cN(687,`(opcional)`),ag()(),Tl(688,`p`),cN(689,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(690,`blockquote`)(691,`p`),cN(692,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(693,`tr`,13)(694,`td`,14)(695,`div`,15)(696,`span`,16),cN(697,` additionalHelpTooltip`),Gl(698,`br`),ag()()(),Tl(699,`td`,17)(700,`code`,18),cN(701,`string`),ag()(),Tl(702,`td`,20)(703,`em`)(704,`strong`),cN(705,`(opcional)`),ag()(),Tl(706,`p`),cN(707,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(708,`code`),cN(709,`po-helper`),ag(),cN(710,`.
`),Tl(711,`strong`),cN(712,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(713,`blockquote`)(714,`p`),cN(715,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(716,`tr`,13)(717,`td`,14)(718,`div`,15)(719,`span`,16),cN(720,` advancedFilters`),Gl(721,`br`),ag()()(),Tl(722,`td`,17)(723,`code`,39),cN(724,`Array<PoLookupAdvancedFilter>`),ag()(),Tl(725,`td`,20)(726,`em`)(727,`strong`),cN(728,`(opcional)`),ag()(),Tl(729,`p`),cN(730,`Lista de objetos dos campos que serão criados na busca avançada.`),ag(),Tl(731,`blockquote`)(732,`p`),cN(733,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),ag()(),Tl(734,`p`),cN(735,`Exemplo de URL com busca avançada:`),ag(),Tl(736,`p`)(737,`code`),cN(738,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),ag()(),Tl(739,`p`),cN(740,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),ag(),Tl(741,`p`)(742,`code`),cN(743,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),ag()()()(),Tl(744,`tr`,13)(745,`td`,14)(746,`div`,15)(747,`span`,16),cN(748,` appendBox`),Gl(749,`br`),ag()()(),Tl(750,`td`,17)(751,`code`,28),cN(752,`boolean`),ag()(),Tl(753,`td`,20)(754,`em`)(755,`strong`),cN(756,`(opcional)`),ag()(),Tl(757,`p`),cN(758,`Define que o `),Tl(759,`code`),cN(760,`listbox`),ag(),cN(761,` e/ou popover (`),Tl(762,`code`),cN(763,`p-helper`),ag(),cN(764,` e/ou `),Tl(765,`code`),cN(766,`p-error-limit`),ag(),cN(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ag(),Tl(768,`blockquote`)(769,`p`),cN(770,`Quando utilizado com `),Tl(771,`code`),cN(772,`p-helper`),ag(),cN(773,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(774,`tr`,13)(775,`td`,14)(776,`div`,15)(777,`span`,16),cN(778,` autoHeight`),Gl(779,`br`),ag()()(),Tl(780,`td`,17)(781,`code`,28),cN(782,`boolean`),ag()(),Tl(783,`td`,20)(784,`em`)(785,`strong`),cN(786,`(opcional)`),ag()(),Tl(787,`p`),cN(788,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),ag(),Tl(789,`p`)(790,`strong`),cN(791,`Componentes compatíveis:`),ag(),Tl(792,`code`),cN(793,`po-multiselect`),ag(),cN(794,`, `),Tl(795,`code`),cN(796,`po-lookup`),ag(),cN(797,`.`),ag()()(),Tl(798,`tr`,13)(799,`td`,14)(800,`div`,15)(801,`span`,16),cN(802,` autoUpload`),Gl(803,`br`),ag()()(),Tl(804,`td`,17)(805,`code`,28),cN(806,`boolean`),ag()(),Tl(807,`td`,20)(808,`em`)(809,`strong`),cN(810,`(opcional)`),ag()(),Tl(811,`p`),cN(812,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),ag(),Tl(813,`p`)(814,`strong`),cN(815,`Componente compatível`),ag(),cN(816,`: `),Tl(817,`code`),cN(818,`po-upload`),ag()()()(),Tl(819,`tr`,13)(820,`td`,14)(821,`div`,15)(822,`span`,16),cN(823,` booleanFalse`),Gl(824,`br`),ag()()(),Tl(825,`td`,17)(826,`code`,18),cN(827,`string`),ag()(),Tl(828,`td`,20)(829,`em`)(830,`strong`),cN(831,`(opcional)`),ag()(),Tl(832,`p`),cN(833,`Texto exibido quando o valor do componente for `),Tl(834,`em`),cN(835,`false`),ag(),cN(836,`.`),ag()()(),Tl(837,`tr`,13)(838,`td`,14)(839,`div`,15)(840,`span`,16),cN(841,` booleanTrue`),Gl(842,`br`),ag()()(),Tl(843,`td`,17)(844,`code`,18),cN(845,`string`),ag()(),Tl(846,`td`,20)(847,`em`)(848,`strong`),cN(849,`(opcional)`),ag()(),Tl(850,`p`),cN(851,`Texto exibido quando o valor do componente for `),Tl(852,`em`),cN(853,`true`),ag(),cN(854,`.`),ag()()(),Tl(855,`tr`,13)(856,`td`,14)(857,`div`,15)(858,`span`,16),cN(859,` changeOnEnter`),Gl(860,`br`),ag()()(),Tl(861,`td`,17)(862,`code`,28),cN(863,`boolean`),ag()(),Tl(864,`td`,20)(865,`em`)(866,`strong`),cN(867,`(opcional)`),ag()(),Tl(868,`p`),cN(869,`Indica que o evento `),Tl(870,`code`),cN(871,`p-change`),ag(),cN(872,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),Tl(873,`code`),cN(874,`po-combo`),ag(),cN(875,`.`),ag()()(),Tl(876,`tr`,13)(877,`td`,14)(878,`div`,15)(879,`span`,16),cN(880,` changeVisibleColumns`),Gl(881,`br`),ag()()(),Tl(882,`td`,17)(883,`code`,29),cN(884,`Function`),ag()(),Tl(885,`td`,20)(886,`em`)(887,`strong`),cN(888,`(opcional)`),ag()(),Tl(889,`p`),cN(890,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),ag(),Tl(891,`p`),cN(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ag(),Tl(893,`p`)(894,`strong`),cN(895,`Componente compatível`),ag(),cN(896,`: `),Tl(897,`code`),cN(898,`po-lookup`),ag()()()(),Tl(899,`tr`,13)(900,`td`,14)(901,`div`,15)(902,`span`,16),cN(903,` clean`),Gl(904,`br`),ag()()(),Tl(905,`td`,17)(906,`code`,28),cN(907,`boolean`),ag()(),Tl(908,`td`,20)(909,`em`)(910,`strong`),cN(911,`(opcional)`),ag()(),Tl(912,`p`),cN(913,`Se verdadeiro, o campo receberá um botão para ser limpo.`),ag(),Tl(914,`p`)(915,`strong`),cN(916,`Componentes compatíveis:`),ag(),Tl(917,`code`),cN(918,`po-datepicker`),ag(),cN(919,`, `),Tl(920,`code`),cN(921,`po-datepicker-range`),ag(),cN(922,`, `),Tl(923,`code`),cN(924,`po-input`),ag(),cN(925,`, `),Tl(926,`code`),cN(927,`po-number`),ag(),cN(928,`, `),Tl(929,`code`),cN(930,`po-decimal`),ag(),cN(931,`,
`),Tl(932,`code`),cN(933,`po-combo`),ag(),cN(934,`, `),Tl(935,`code`),cN(936,`po-lookup`),ag(),cN(937,`, `),Tl(938,`code`),cN(939,`po-password`),ag(),cN(940,`, `),Tl(941,`code`),cN(942,`po-timepicker`),ag(),cN(943,`.`),ag()()(),Tl(944,`tr`,13)(945,`td`,14)(946,`div`,15)(947,`span`,16),cN(948,` columnRestoreManager`),Gl(949,`br`),ag()()(),Tl(950,`td`,17)(951,`code`,29),cN(952,`Function`),ag()(),Tl(953,`td`,20)(954,`em`)(955,`strong`),cN(956,`(opcional)`),ag()(),Tl(957,`p`),cN(958,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),ag(),Tl(959,`p`),cN(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ag(),Tl(961,`p`)(962,`strong`),cN(963,`Componente compatível`),ag(),cN(964,`: `),Tl(965,`code`),cN(966,`po-lookup`),ag()()()(),Tl(967,`tr`,13)(968,`td`,14)(969,`div`,15)(970,`span`,16),cN(971,` columns`),Gl(972,`br`),ag()()(),Tl(973,`td`,17)(974,`code`,40),cN(975,`Array<PoLookupColumn> `),ag(),Tl(976,`code`,41),cN(977,` number`),ag()(),Tl(978,`td`,20)(979,`em`)(980,`strong`),cN(981,`(opcional)`),ag()(),Tl(982,`p`),cN(983,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),Tl(984,`code`),cN(985,`searchService`),ag(),cN(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Tl(987,`a`,42)(988,`code`),cN(989,`PoLookupColumn`),ag()(),cN(990,`.`),ag(),Tl(991,`blockquote`)(992,`p`),cN(993,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),Tl(994,`em`),cN(995,`label`),ag(),cN(996,` e `),Tl(997,`em`),cN(998,`value`),ag(),cN(999,` para valores
de tela e do model respectivamente.`),ag()(),Tl(1e3,`p`)(1001,`strong`),cN(1002,`Componentes compatíveis:`),ag(),Tl(1003,`code`),cN(1004,`po-radio-group`),ag(),cN(1005,`, `),Tl(1006,`code`),cN(1007,`po-lookup`),ag(),cN(1008,`, `),Tl(1009,`code`),cN(1010,`po-checkbox-group`),ag(),cN(1011,`.`),ag()()(),Tl(1012,`tr`,13)(1013,`td`,14)(1014,`div`,15)(1015,`span`,16),cN(1016,` compactLabel`),Gl(1017,`br`),ag()()(),Tl(1018,`td`,17)(1019,`code`,28),cN(1020,`boolean`),ag()(),Tl(1021,`td`,20)(1022,`em`)(1023,`strong`),cN(1024,`(opcional)`),ag()(),Tl(1025,`p`),cN(1026,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(1027,`p`),cN(1028,`Quando habilitado (`),Tl(1029,`code`),cN(1030,`true`),ag(),cN(1031,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(1032,`ul`)(1033,`li`)(1034,`code`),cN(1035,`po-label`),ag()(),Tl(1036,`li`)(1037,`code`),cN(1038,`p-requirement (showRequired)`),ag()(),Tl(1039,`li`)(1040,`code`),cN(1041,`po-helper`),ag()()(),Tl(1042,`p`),cN(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(1044,`p`),cN(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(1046,`ul`)(1047,`li`)(1048,`code`),cN(1049,`--field-container-title-justify`),ag()(),Tl(1050,`li`)(1051,`code`),cN(1052,`--field-container-title-flex`),ag()()(),Tl(1053,`p`),cN(1054,`Exemplo:`),ag(),Tl(1055,`pre`)(1056,`code`),cN(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(1058,`p`),cN(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(1060,`tr`,13)(1061,`td`,14)(1062,`div`,15)(1063,`span`,16),cN(1064,` container`),Gl(1065,`br`),ag()()(),Tl(1066,`td`,17)(1067,`code`,18),cN(1068,`string`),ag()(),Tl(1069,`td`,20)(1070,`em`)(1071,`strong`),cN(1072,`(opcional)`),ag()(),Tl(1073,`p`),cN(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),ag(),Tl(1075,`p`),cN(1076,`Está propriedade é do tipo string, o valor que será titulo do contianer`),ag()()(),Tl(1077,`tr`,13)(1078,`td`,14)(1079,`div`,15)(1080,`span`,16),cN(1081,` customAction`),Gl(1082,`br`),ag()()(),Tl(1083,`td`,17)(1084,`code`,43),cN(1085,`PoProgressAction`),ag()(),Tl(1086,`td`,20)(1087,`em`)(1088,`strong`),cN(1089,`(opcional)`),ag()(),Tl(1090,`p`),cN(1091,`Define uma ação personalizada no componente `),Tl(1092,`code`),cN(1093,`po-upload`),ag(),cN(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),ag(),Tl(1095,`p`)(1096,`strong`),cN(1097,`Componente compatível`),ag(),cN(1098,`: `),Tl(1099,`code`),cN(1100,`po-upload`),ag(),cN(1101,`,`),ag(),Tl(1102,`p`)(1103,`strong`),cN(1104,`Exemplo de configuração`),ag(),cN(1105,`:`),ag(),Tl(1106,`pre`)(1107,`code`,44),cN(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),ag()()()(),Tl(1109,`tr`,13)(1110,`td`,14)(1111,`div`,15)(1112,`span`,16),cN(1113,` customActionClick`),Gl(1114,`br`),ag()()(),Tl(1115,`td`,17)(1116,`code`,45),cN(1117,`(file: PoUploadFile) => void`),ag()(),Tl(1118,`td`,20)(1119,`em`)(1120,`strong`),cN(1121,`(opcional)`),ag()(),Tl(1122,`p`),cN(1123,`Evento emitido ao clicar na ação personalizada configurada no `),Tl(1124,`code`),cN(1125,`p-custom-action`),ag(),cN(1126,`.`),ag(),Tl(1127,`p`)(1128,`strong`),cN(1129,`Componente compatível`),ag(),cN(1130,`: `),Tl(1131,`code`),cN(1132,`po-upload`),ag(),cN(1133,`,`),ag(),Tl(1134,`p`),cN(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),ag(),Tl(1136,`p`)(1137,`strong`),cN(1138,`Parâmetro do evento`),ag(),cN(1139,`:`),ag(),Tl(1140,`ul`)(1141,`li`)(1142,`code`),cN(1143,`file`),ag(),cN(1144,`: O arquivo associado ao botão de ação. Este objeto é da classe `),Tl(1145,`code`),cN(1146,`PoUploadFile`),ag(),cN(1147,` e contém informações sobre o arquivo, como nome, status e progresso.`),ag()(),Tl(1148,`p`)(1149,`strong`),cN(1150,`Exemplo de uso`),ag(),cN(1151,`:`),ag(),Tl(1152,`pre`)(1153,`code`,44),cN(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),ag()()()(),Tl(1155,`tr`,13)(1156,`td`,14)(1157,`div`,15)(1158,`span`,16),cN(1159,` debounceTime`),Gl(1160,`br`),ag()()(),Tl(1161,`td`,17)(1162,`code`,41),cN(1163,`number`),ag()(),Tl(1164,`td`,20)(1165,`em`)(1166,`strong`),cN(1167,`(opcional)`),ag()(),Tl(1168,`p`),cN(1169,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),Tl(1170,`code`),cN(1171,`p-filter-service`),ag(),cN(1172,`).`),ag(),Tl(1173,`p`)(1174,`strong`),cN(1175,`Componentes compatíveis:`),ag(),Tl(1176,`code`),cN(1177,`po-combo`),ag(),cN(1178,`, `),Tl(1179,`code`),cN(1180,`po-multiselect`),ag(),cN(1181,`.`),ag()()(),Tl(1182,`tr`,13)(1183,`td`,14)(1184,`div`,15)(1185,`span`,16),cN(1186,` decimalsLength`),Gl(1187,`br`),ag()()(),Tl(1188,`td`,17)(1189,`code`,41),cN(1190,`number`),ag()(),Tl(1191,`td`,20)(1192,`em`)(1193,`strong`),cN(1194,`(opcional)`),ag()(),Tl(1195,`p`),cN(1196,`Quantidade máxima de casas decimais.`),ag(),Tl(1197,`blockquote`)(1198,`p`),cN(1199,`Esta propriedade só pode ser utilizada quando o `),Tl(1200,`code`),cN(1201,`type`),ag(),cN(1202,` for `),Tl(1203,`em`),cN(1204,`currency`),ag(),cN(1205,` ou `),Tl(1206,`em`),cN(1207,`decimal`),ag(),cN(1208,`.`),ag()(),Tl(1209,`blockquote`)(1210,`p`),cN(1211,`Quando utilizado com `),Tl(1212,`code`),cN(1213,`displayFormat`),ag(),cN(1214,`, será respeitado o valor `),Tl(1215,`strong`),cN(1216,`mais restritivo`),ag(),cN(1217,` entre esta propriedade e o número de casas decimais definido no formato.`),ag()()()(),Tl(1218,`tr`,13)(1219,`td`,14)(1220,`div`,15)(1221,`span`,16),cN(1222,` directory`),Gl(1223,`br`),ag()()(),Tl(1224,`td`,17)(1225,`code`,28),cN(1226,`boolean`),ag()(),Tl(1227,`td`,20)(1228,`em`)(1229,`strong`),cN(1230,`(opcional)`),ag()(),Tl(1231,`p`),cN(1232,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),ag(),Tl(1233,`blockquote`)(1234,`p`),cN(1235,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),ag()(),Tl(1236,`blockquote`)(1237,`p`),cN(1238,`Definição não suportada pelo browser `),Tl(1239,`strong`),cN(1240,`Internet Explorer`),ag(),cN(1241,`, todavia será possível a seleção de arquivos padrão.`),ag()(),Tl(1242,`p`)(1243,`strong`),cN(1244,`Componente compatível`),ag(),cN(1245,`: `),Tl(1246,`code`),cN(1247,`po-upload`),ag()()()(),Tl(1248,`tr`,13)(1249,`td`,14)(1250,`div`,15)(1251,`span`,16),cN(1252,` disabled`),Gl(1253,`br`),ag()()(),Tl(1254,`td`,17)(1255,`code`,28),cN(1256,`boolean`),ag()(),Tl(1257,`td`,20)(1258,`em`)(1259,`strong`),cN(1260,`(opcional)`),ag()(),Tl(1261,`p`),cN(1262,`Desabilita o campo caso informar o valor `),Tl(1263,`em`),cN(1264,`true`),ag(),cN(1265,`.`),ag()()(),Tl(1266,`tr`,13)(1267,`td`,14)(1268,`div`,15)(1269,`span`,16),cN(1270,` disabledInitFilter`),Gl(1271,`br`),ag()()(),Tl(1272,`td`,17)(1273,`code`,28),cN(1274,`boolean`),ag()(),Tl(1275,`td`,20)(1276,`em`)(1277,`strong`),cN(1278,`(opcional)`),ag()(),Tl(1279,`p`),cN(1280,`Desabilita o filtro inicial no serviço do `),Tl(1281,`code`),cN(1282,`po-combo`),ag(),cN(1283,`, que é executado no primeiro clique no campo.`),ag()()(),Tl(1284,`tr`,13)(1285,`td`,14)(1286,`div`,15)(1287,`span`,16),cN(1288,` disabledTabFilter`),Gl(1289,`br`),ag()()(),Tl(1290,`td`,17)(1291,`code`,28),cN(1292,`boolean`),ag()(),Tl(1293,`td`,20)(1294,`em`)(1295,`strong`),cN(1296,`(opcional)`),ag()(),Tl(1297,`p`),cN(1298,`Se verdadeiro, desabilitará a busca de um item via TAB no `),Tl(1299,`code`),cN(1300,`po-combo`),ag(),cN(1301,`.`),ag()()(),Tl(1302,`tr`,13)(1303,`td`,14)(1304,`div`,15)(1305,`span`,16),cN(1306,` displayFormat`),Gl(1307,`br`),ag()()(),Tl(1308,`td`,17)(1309,`code`,18),cN(1310,`string`),ag()(),Tl(1311,`td`,20)(1312,`em`)(1313,`strong`),cN(1314,`(opcional)`),ag()(),Tl(1315,`p`),cN(1316,`Define uma máscara de formatação numérica avançada para o campo.`),ag(),Tl(1317,`p`),cN(1318,`Simbologia suportada:`),ag(),Tl(1319,`ul`)(1320,`li`)(1321,`code`),cN(1322,`9`),ag(),cN(1323,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),ag(),Tl(1324,`li`)(1325,`code`),cN(1326,`>`),ag(),cN(1327,`: Supressão de zero à esquerda (dígito não obrigatório);`),ag(),Tl(1328,`li`)(1329,`code`),cN(1330,`<`),ag(),cN(1331,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),ag(),Tl(1332,`li`)(1333,`code`),cN(1334,`.`),ag(),cN(1335,`: Separador decimal (convertido conforme locale);`),ag(),Tl(1336,`li`)(1337,`code`),cN(1338,`,`),ag(),cN(1339,`: Separador de milhar/grupo (convertido conforme locale);`),ag(),Tl(1340,`li`)(1341,`code`),cN(1342,`-`),ag(),cN(1343,`: Sinal negativo (deve ser o primeiro caractere do formato).`),ag()(),Tl(1344,`blockquote`)(1345,`p`),cN(1346,`Quando utilizado com `),Tl(1347,`code`),cN(1348,`decimalsLength`),ag(),cN(1349,` ou `),Tl(1350,`code`),cN(1351,`thousandMaxlength`),ag(),cN(1352,`, será respeitado o valor `),Tl(1353,`strong`),cN(1354,`mais restritivo`),ag(),cN(1355,` entre a propriedade e o formato.`),ag()(),Tl(1356,`p`),cN(1357,`Exemplos: `),Tl(1358,`code`),cN(1359,`'>>>,>>>,>>9.99'`),ag(),cN(1360,`, `),Tl(1361,`code`),cN(1362,`'->>9.99'`),ag(),cN(1363,`, `),Tl(1364,`code`),cN(1365,`'999.9'`),ag()(),Tl(1366,`blockquote`)(1367,`p`),cN(1368,`Esta propriedade só pode ser utilizada quando o `),Tl(1369,`code`),cN(1370,`type`),ag(),cN(1371,` for `),Tl(1372,`em`),cN(1373,`currency`),ag(),cN(1374,` ou `),Tl(1375,`em`),cN(1376,`decimal`),ag(),cN(1377,`.`),ag()(),Tl(1378,`p`)(1379,`strong`),cN(1380,`Componente compatível:`),ag(),Tl(1381,`code`),cN(1382,`po-decimal`),ag(),cN(1383,`.`),ag()()(),Tl(1384,`tr`,13)(1385,`td`,14)(1386,`div`,15)(1387,`span`,16),cN(1388,` divider`),Gl(1389,`br`),ag()()(),Tl(1390,`td`,17)(1391,`code`,18),cN(1392,`string`),ag()(),Tl(1393,`td`,20)(1394,`em`)(1395,`strong`),cN(1396,`(opcional)`),ag()(),Tl(1397,`p`),cN(1398,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),ag()()(),Tl(1399,`tr`,13)(1400,`td`,14)(1401,`div`,15)(1402,`span`,16),cN(1403,` dragDrop`),Gl(1404,`br`),ag()()(),Tl(1405,`td`,17)(1406,`code`,28),cN(1407,`boolean`),ag()(),Tl(1408,`td`,20)(1409,`em`)(1410,`strong`),cN(1411,`(opcional)`),ag()(),Tl(1412,`p`),cN(1413,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),ag(),Tl(1414,`blockquote`)(1415,`p`),cN(1416,`Recomendamos utilizar apenas um `),Tl(1417,`code`),cN(1418,`po-upload`),ag(),cN(1419,` com esta funcionalidade por tela.`),ag()(),Tl(1420,`p`)(1421,`strong`),cN(1422,`Componente compatível`),ag(),cN(1423,`: `),Tl(1424,`code`),cN(1425,`po-upload`),ag()()()(),Tl(1426,`tr`,13)(1427,`td`,14)(1428,`div`,15)(1429,`span`,16),cN(1430,` dragDropHeight`),Gl(1431,`br`),ag()()(),Tl(1432,`td`,17)(1433,`code`,41),cN(1434,`number`),ag()(),Tl(1435,`td`,20)(1436,`em`)(1437,`strong`),cN(1438,`(opcional)`),ag()(),Tl(1439,`p`),cN(1440,`Define em `),Tl(1441,`em`),cN(1442,`pixels`),ag(),cN(1443,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Tl(1444,`code`),cN(1445,`160px`),ag(),cN(1446,`.`),ag(),Tl(1447,`blockquote`)(1448,`p`),cN(1449,`Esta propriedade funciona somente se a propriedade `),Tl(1450,`code`),cN(1451,`p-drag-drop`),ag(),cN(1452,` estiver habilitada.`),ag()(),Tl(1453,`p`)(1454,`strong`),cN(1455,`Componente compatível`),ag(),cN(1456,`: `),Tl(1457,`code`),cN(1458,`po-upload`),ag()()()(),Tl(1459,`tr`,13)(1460,`td`,14)(1461,`div`,15)(1462,`span`,16),cN(1463,` errorAsyncFunction`),Gl(1464,`br`),ag()()(),Tl(1465,`td`,17)(1466,`code`,46),cN(1467,`(value) => Observable<boolean>`),ag()(),Tl(1468,`td`,20)(1469,`em`)(1470,`strong`),cN(1471,`(opcional)`),ag()(),Tl(1472,`p`),cN(1473,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(1474,`code`),cN(1475,`change`),ag(),cN(1476,` ou `),Tl(1477,`code`),cN(1478,`change-model`),ag(),cN(1479,`, dependendo do valor da propriedade `),Tl(1480,`code`),cN(1481,`triggerMode`),ag(),cN(1482,`.`),ag(),Tl(1483,`blockquote`)(1484,`p`),cN(1485,`Retorna `),Tl(1486,`code`),cN(1487,`Observable com o valor true`),ag(),cN(1488,` para sinalizar o erro `),Tl(1489,`code`),cN(1490,`false`),ag(),cN(1491,` para indicar que não há erro.`),ag()(),Tl(1492,`p`)(1493,`strong`),cN(1494,`Componente compatível`),ag(),cN(1495,`: `),Tl(1496,`code`),cN(1497,`po-datepicker`),ag()()()(),Tl(1498,`tr`,13)(1499,`td`,14)(1500,`div`,15)(1501,`span`,16),cN(1502,` errorAsyncProperties`),Gl(1503,`br`),ag()()(),Tl(1504,`td`,17)(1505,`code`,47),cN(1506,`ErrorAsyncProperties`),ag()(),Tl(1507,`td`,20)(1508,`em`)(1509,`strong`),cN(1510,`(opcional)`),ag()(),Tl(1511,`p`),cN(1512,`Realiza alguma validação customizada assíncrona no componente.`),ag(),Tl(1513,`p`)(1514,`strong`),cN(1515,`Componentes compatíveis:`),ag(),Tl(1516,`code`),cN(1517,`po-input`),ag(),cN(1518,`, `),Tl(1519,`code`),cN(1520,`po-number`),ag(),cN(1521,`, `),Tl(1522,`code`),cN(1523,`po-decimal`),ag(),cN(1524,`, `),Tl(1525,`code`),cN(1526,`po-password`),ag(),cN(1527,`.`),ag()()(),Tl(1528,`tr`,13)(1529,`td`,14)(1530,`div`,15)(1531,`span`,16),cN(1532,` errorLimit`),Gl(1533,`br`),ag()()(),Tl(1534,`td`,17)(1535,`code`,28),cN(1536,`boolean`),ag()(),Tl(1537,`td`,20)(1538,`em`)(1539,`strong`),cN(1540,`(opcional)`),ag()(),Tl(1541,`p`),cN(1542,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(1543,`blockquote`)(1544,`p`),cN(1545,`Caso essa propriedade seja definida como `),Tl(1546,`code`),cN(1547,`true`),ag(),cN(1548,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()(),Tl(1549,`p`)(1550,`strong`),cN(1551,`Componentes compatíveis:`),ag(),Tl(1552,`code`),cN(1553,`po-checkbox-group`),ag(),cN(1554,`, `),Tl(1555,`code`),cN(1556,`po-combo`),ag(),cN(1557,`, `),Tl(1558,`code`),cN(1559,`po-datepicker`),ag(),cN(1560,`, `),Tl(1561,`code`),cN(1562,`po-datepicker-range`),ag(),cN(1563,`, `),Tl(1564,`code`),cN(1565,`po-decimal`),ag(),cN(1566,`, `),Tl(1567,`code`),cN(1568,`po-input`),ag(),cN(1569,`, `),Tl(1570,`code`),cN(1571,`po-lookup`),ag(),cN(1572,`, `),Tl(1573,`code`),cN(1574,`po-multiselect`),ag(),cN(1575,`, `),Tl(1576,`code`),cN(1577,`po-number`),ag(),cN(1578,`, `),Tl(1579,`code`),cN(1580,`po-password`),ag(),cN(1581,`, `),Tl(1582,`code`),cN(1583,`po-radio-group`),ag(),cN(1584,`, `),Tl(1585,`code`),cN(1586,`po-select`),ag(),cN(1587,`,
`),Tl(1588,`code`),cN(1589,`po-switch`),ag(),cN(1590,`, `),Tl(1591,`code`),cN(1592,`po-textarea`),ag(),cN(1593,`, `),Tl(1594,`code`),cN(1595,`po-timepicker`),ag(),cN(1596,`.`),ag()()(),Tl(1597,`tr`,13)(1598,`td`,14)(1599,`div`,15)(1600,`span`,16),cN(1601,` errorMessage`),Gl(1602,`br`),ag()()(),Tl(1603,`td`,17)(1604,`code`,18),cN(1605,`string`),ag()(),Tl(1606,`td`,20)(1607,`em`)(1608,`strong`),cN(1609,`(opcional)`),ag()(),Tl(1610,`p`),cN(1611,`Mensagem que será apresentada quando o campo ficar inválido.`),ag(),Tl(1612,`p`),cN(1613,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),ag(),Tl(1614,`ul`)(1615,`li`),cN(1616,`pattern;`),ag(),Tl(1617,`li`),cN(1618,`minValue;`),ag(),Tl(1619,`li`),cN(1620,`maxValue;`),ag(),Tl(1621,`li`),cN(1622,`required;`),ag()(),Tl(1623,`blockquote`)(1624,`p`),cN(1625,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Tl(1626,`code`),cN(1627,`po-datepicker`),ag(),cN(1628,`, `),Tl(1629,`code`),cN(1630,`po-input`),ag(),cN(1631,`, `),Tl(1632,`code`),cN(1633,`po-number`),ag(),cN(1634,`, `),Tl(1635,`code`),cN(1636,`po-decimal`),ag(),cN(1637,`, `),Tl(1638,`code`),cN(1639,`po-password`),ag(),cN(1640,`, `),Tl(1641,`code`),cN(1642,`po-timepicker`),ag(),cN(1643,`, \xE9 necess\xE1rio que a propriedade
`),Tl(1644,`code`),cN(1645,`requiredFieldErrorMessage`),ag(),cN(1646,` esteja como `),Tl(1647,`code`),cN(1648,`true`),ag(),cN(1649,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Tl(1650,`code`),cN(1651,`po-datepicker-range`),ag(),cN(1652,`, `),Tl(1653,`code`),cN(1654,`po-select`),ag(),cN(1655,`, `),Tl(1656,`code`),cN(1657,`po-checkbox-group`),ag(),cN(1658,`, `),Tl(1659,`code`),cN(1660,`po-radio-group`),ag(),cN(1661,`, `),Tl(1662,`code`),cN(1663,`po-multiselect`),ag(),cN(1664,`, `),Tl(1665,`code`),cN(1666,`po-combo`),ag(),cN(1667,`,
`),Tl(1668,`code`),cN(1669,`po-lookup`),ag(),cN(1670,` e `),Tl(1671,`code`),cN(1672,`po-textarea`),ag(),cN(1673,` não é necessário passar a propriedade `),Tl(1674,`code`),cN(1675,`requiredFieldErrorMessage`),ag(),cN(1676,`.`),ag()(),Tl(1677,`p`)(1678,`strong`),cN(1679,`Componentes compatíveis:`),ag(),Tl(1680,`code`),cN(1681,`po-checkbox-group`),ag(),cN(1682,`, `),Tl(1683,`code`),cN(1684,`po-combo`),ag(),cN(1685,`, `),Tl(1686,`code`),cN(1687,`po-datepicker`),ag(),cN(1688,`, `),Tl(1689,`code`),cN(1690,`po-datepicker-range`),ag(),cN(1691,`, `),Tl(1692,`code`),cN(1693,`po-decimal`),ag(),cN(1694,`, `),Tl(1695,`code`),cN(1696,`po-input`),ag(),cN(1697,`, `),Tl(1698,`code`),cN(1699,`po-lookup`),ag(),cN(1700,`, `),Tl(1701,`code`),cN(1702,`po-multiselect`),ag(),cN(1703,`, `),Tl(1704,`code`),cN(1705,`po-number`),ag(),cN(1706,`, `),Tl(1707,`code`),cN(1708,`po-password`),ag(),cN(1709,`, `),Tl(1710,`code`),cN(1711,`po-radio-group`),ag(),cN(1712,`, `),Tl(1713,`code`),cN(1714,`po-select`),ag(),cN(1715,`,
`),Tl(1716,`code`),cN(1717,`po-switch`),ag(),cN(1718,`, `),Tl(1719,`code`),cN(1720,`po-textarea`),ag(),cN(1721,`, `),Tl(1722,`code`),cN(1723,`po-timepicker`),ag(),cN(1724,`.`),ag()()(),Tl(1725,`tr`,13)(1726,`td`,14)(1727,`div`,15)(1728,`span`,16),cN(1729,` fieldLabel`),Gl(1730,`br`),ag()()(),Tl(1731,`td`,17)(1732,`code`,18),cN(1733,`string`),ag()(),Tl(1734,`td`,20)(1735,`em`)(1736,`strong`),cN(1737,`(opcional)`),ag()(),Tl(1738,`p`),cN(1739,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),ag(),Tl(1740,`p`),cN(1741,`O valor padrão é: `),Tl(1742,`code`),cN(1743,`label`),ag(),cN(1744,`.`),ag(),Tl(1745,`blockquote`)(1746,`p`),cN(1747,`Esta propriedade pode ser utilizada em conjunto com: `),Tl(1748,`code`),cN(1749,`options`),ag(),cN(1750,`, `),Tl(1751,`code`),cN(1752,`optionsService`),ag(),cN(1753,` e `),Tl(1754,`code`),cN(1755,`searchService`),ag(),cN(1756,`.`),ag()()()(),Tl(1757,`tr`,13)(1758,`td`,14)(1759,`div`,15)(1760,`span`,16),cN(1761,` fieldValue`),Gl(1762,`br`),ag()()(),Tl(1763,`td`,17)(1764,`code`,18),cN(1765,`string`),ag()(),Tl(1766,`td`,20)(1767,`em`)(1768,`strong`),cN(1769,`(opcional)`),ag()(),Tl(1770,`p`),cN(1771,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),ag(),Tl(1772,`p`),cN(1773,`O valor padrão é: `),Tl(1774,`code`),cN(1775,`value`),ag(),cN(1776,`.`),ag(),Tl(1777,`blockquote`)(1778,`p`),cN(1779,`Esta propriedade pode ser utilizada em conjunto com: `),Tl(1780,`code`),cN(1781,`options`),ag(),cN(1782,`, `),Tl(1783,`code`),cN(1784,`optionsService`),ag(),cN(1785,` e `),Tl(1786,`code`),cN(1787,`searchService`),ag(),cN(1788,`.`),ag()()()(),Tl(1789,`tr`,13)(1790,`td`,14)(1791,`div`,15)(1792,`span`,16),cN(1793,` filterMinlength`),Gl(1794,`br`),ag()()(),Tl(1795,`td`,17)(1796,`code`,41),cN(1797,`number`),ag()(),Tl(1798,`td`,20)(1799,`em`)(1800,`strong`),cN(1801,`(opcional)`),ag()(),Tl(1802,`p`),cN(1803,`Valor mínimo de caracteres para realizar o filtro no serviço do `),Tl(1804,`code`),cN(1805,`po-combo`),ag(),cN(1806,`.`),ag()()(),Tl(1807,`tr`,13)(1808,`td`,14)(1809,`div`,15)(1810,`span`,16),cN(1811,` filterMode`),Gl(1812,`br`),ag()()(),Tl(1813,`td`,17)(1814,`code`,48),cN(1815,`PoMultiselectFilterMode`),ag()(),Tl(1816,`td`,20)(1817,`em`)(1818,`strong`),cN(1819,`(opcional)`),ag()(),Tl(1820,`p`),cN(1821,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Tl(1822,`code`),cN(1823,`startsWith`),ag(),cN(1824,`, `),Tl(1825,`code`),cN(1826,`contains`),ag(),cN(1827,` ou `),Tl(1828,`code`),cN(1829,`endsWith`),ag(),cN(1830,`.`),ag(),Tl(1831,`blockquote`)(1832,`p`),cN(1833,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),ag()(),Tl(1834,`p`)(1835,`strong`),cN(1836,`Componente compatível:`),ag(),Tl(1837,`code`),cN(1838,`po-multiselect`),ag(),cN(1839,`.`),ag()()(),Tl(1840,`tr`,13)(1841,`td`,14)(1842,`div`,15)(1843,`span`,16),cN(1844,` forceBooleanComponentType`),Gl(1845,`br`),ag()()(),Tl(1846,`td`,17)(1847,`code`,49),cN(1848,`ForceBooleanComponentEnum`),ag()(),Tl(1849,`td`,20)(1850,`em`)(1851,`strong`),cN(1852,`(opcional)`),ag()(),Tl(1853,`p`),cN(1854,`Valores aceitos:`),ag(),Tl(1855,`ul`)(1856,`li`),cN(1857,`ForceBooleanComponentEnum.switch`),ag(),Tl(1858,`li`),cN(1859,`ForceBooleanComponentEnum.checkbox`),ag()()()(),Tl(1860,`tr`,13)(1861,`td`,14)(1862,`div`,15)(1863,`span`,16),cN(1864,` forceOptionsComponentType`),Gl(1865,`br`),ag()()(),Tl(1866,`td`,17)(1867,`code`,50),cN(1868,`ForceOptionComponentEnum`),ag()(),Tl(1869,`td`,20)(1870,`em`)(1871,`strong`),cN(1872,`(opcional)`),ag()(),Tl(1873,`p`),cN(1874,`pode ser utilizada em conjunto com a propriedade `),Tl(1875,`code`),cN(1876,`options`),ag(),cN(1877,` forçando o componente a renderizar um `),Tl(1878,`code`),cN(1879,`po-select`),ag(),cN(1880,` ou `),Tl(1881,`code`),cN(1882,`po-radio-group`),ag(),cN(1883,`.`),ag(),Tl(1884,`p`),cN(1885,`Valores aceitos:`),ag(),Tl(1886,`ul`)(1887,`li`),cN(1888,`ForceOptionComponentEnum.radioGroup`),ag(),Tl(1889,`li`),cN(1890,`ForceOptionComponentEnum.select`),ag()(),Tl(1891,`blockquote`)(1892,`p`),cN(1893,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),Tl(1894,`code`),cN(1895,`optionsMulti`),ag(),cN(1896,` e `),Tl(1897,`code`),cN(1898,`optionsService`),ag(),cN(1899,`.`),ag()()()(),Tl(1900,`tr`,13)(1901,`td`,14)(1902,`div`,15)(1903,`span`,16),cN(1904,` formField`),Gl(1905,`br`),ag()()(),Tl(1906,`td`,17)(1907,`code`,18),cN(1908,`string`),ag()(),Tl(1909,`td`,20)(1910,`em`)(1911,`strong`),cN(1912,`(opcional)`),ag()(),Tl(1913,`p`),cN(1914,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Tl(1915,`code`),cN(1916,`url`),ag(),cN(1917,`.`),ag(),Tl(1918,`blockquote`)(1919,`p`),cN(1920,`O valor default é `),Tl(1921,`code`),cN(1922,`files`),ag()()(),Tl(1923,`p`)(1924,`strong`),cN(1925,`Componente compatível`),ag(),cN(1926,`: `),Tl(1927,`code`),cN(1928,`po-upload`),ag()()()(),Tl(1929,`tr`,13)(1930,`td`,14)(1931,`div`,15)(1932,`span`,16),cN(1933,` format`),Gl(1934,`br`),ag()()(),Tl(1935,`td`,17)(1936,`code`,18),cN(1937,`string `),ag(),Tl(1938,`code`,32),cN(1939,` Array<string>`),ag()(),Tl(1940,`td`,20)(1941,`em`)(1942,`strong`),cN(1943,`(opcional)`),ag()(),Tl(1944,`p`),cN(1945,`Formato de exibição no campo.`),ag(),Tl(1946,`p`),cN(1947,`Ao utilizar esta propriedade com o `),Tl(1948,`code`),cN(1949,`type`),ag(),Tl(1950,`em`),cN(1951,`PoDynamicFieldType.Date`),ag(),cN(1952,` ou `),Tl(1953,`em`),cN(1954,`PoDynamicFieldType.DateTime`),ag(),cN(1955,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),ag(),Tl(1956,`p`),cN(1957,`Valores válidos:`),ag(),Tl(1958,`ul`)(1959,`li`),cN(1960,`dd/mm/yyyy`),ag(),Tl(1961,`li`),cN(1962,`mm/dd/yyyy`),ag(),Tl(1963,`li`),cN(1964,`yyyy/mm/dd`),ag()(),Tl(1965,`p`),cN(1966,`Ao utilizar com o `),Tl(1967,`code`),cN(1968,`type`),ag(),Tl(1969,`em`),cN(1970,`PoDynamicFieldType.Time`),ag(),cN(1971,`, define o formato de exibição do horário:`),ag(),Tl(1972,`p`),cN(1973,`Valores válidos:`),ag(),Tl(1974,`ul`)(1975,`li`)(1976,`code`),cN(1977,`24`),ag(),cN(1978,`: formato de 24 horas (padrão)`),ag(),Tl(1979,`li`)(1980,`code`),cN(1981,`12`),ag(),cN(1982,`: formato de 12 horas com indicador AM/PM`),ag()(),Tl(1983,`p`),cN(1984,`Também pode-se utilizar em conjunto com `),Tl(1985,`code`),cN(1986,`searchService`),ag(),cN(1987,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),ag(),Tl(1988,`p`)(1989,`strong`),cN(1990,`Componentes compatíveis:`),ag(),Tl(1991,`code`),cN(1992,`po-datepicker`),ag(),cN(1993,`, `),Tl(1994,`code`),cN(1995,`po-datetimepicker`),ag(),cN(1996,`, `),Tl(1997,`code`),cN(1998,`po-timepicker`),ag(),cN(1999,`, `),Tl(2e3,`code`),cN(2001,`po-lookup`),ag(),cN(2002,`.`),ag()()(),Tl(2003,`tr`,13)(2004,`td`,14)(2005,`div`,15)(2006,`span`,16),cN(2007,` formatModel`),Gl(2008,`br`),ag()()(),Tl(2009,`td`,17)(2010,`code`,28),cN(2011,`boolean`),ag()(),Tl(2012,`td`,20)(2013,`em`)(2014,`strong`),cN(2015,`(opcional)`),ag()(),Tl(2016,`p`),cN(2017,`Indica se o `),Tl(2018,`code`),cN(2019,`model`),ag(),cN(2020,` receberá o valor formatado pelas propriedades `),Tl(2021,`code`),cN(2022,`p-label-on`),ag(),cN(2023,` e `),Tl(2024,`code`),cN(2025,`p-label-off`),ag(),cN(2026,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),ag(),Tl(2027,`p`),cN(2028,`O valor padrão é: `),Tl(2029,`code`),cN(2030,`false`),ag(),cN(2031,`.`),ag(),Tl(2032,`blockquote`)(2033,`p`),cN(2034,`Esta propriedade está disponivel apenas para o `),Tl(2035,`code`),cN(2036,`swicth`),ag(),cN(2037,`.`),ag()()()(),Tl(2038,`tr`,13)(2039,`td`,14)(2040,`div`,15)(2041,`span`,16),cN(2042,` formatTime`),Gl(2043,`br`),ag()()(),Tl(2044,`td`,17)(2045,`code`,18),cN(2046,`string`),ag()(),Tl(2047,`td`,20)(2048,`em`)(2049,`strong`),cN(2050,`(opcional)`),ag()(),Tl(2051,`p`),cN(2052,`Define o formato de exibição do timer (`),Tl(2053,`code`),cN(2054,`'12'`),ag(),cN(2055,` ou `),Tl(2056,`code`),cN(2057,`'24'`),ag(),cN(2058,`).`),ag(),Tl(2059,`p`)(2060,`strong`),cN(2061,`Componente compatível:`),ag(),Tl(2062,`code`),cN(2063,`po-datetimepicker`),ag()()()(),Tl(2064,`tr`,13)(2065,`td`,14)(2066,`div`,15)(2067,`span`,16),cN(2068,` gridColumns`),Gl(2069,`br`),ag()()(),Tl(2070,`td`,17)(2071,`code`,41),cN(2072,`number`),ag()(),Tl(2073,`td`,20)(2074,`em`)(2075,`strong`),cN(2076,`(opcional)`),ag()(),Tl(2077,`p`),cN(2078,`Tamanho de exibição do campo em telas.`),ag(),Tl(2079,`p`),cN(2080,`Deve ser usado o sistema de `),Tl(2081,`strong`),cN(2082,`grid`),ag(),cN(2083,` do PO (1 ... 12 colunas).`),ag(),Tl(2084,`blockquote`)(2085,`p`),cN(2086,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),ag()()()(),Tl(2087,`tr`,13)(2088,`td`,14)(2089,`div`,15)(2090,`span`,16),cN(2091,` gridLgColumns`),Gl(2092,`br`),ag()()(),Tl(2093,`td`,17)(2094,`code`,41),cN(2095,`number`),ag()(),Tl(2096,`td`,20)(2097,`em`)(2098,`strong`),cN(2099,`(opcional)`),ag()(),Tl(2100,`p`),cN(2101,`Tamanho de exibição do campo em telas grandes (lg).`),ag(),Tl(2102,`p`),cN(2103,`Deve ser usado o sistema de `),Tl(2104,`strong`),cN(2105,`grid`),ag(),cN(2106,` do PO (1 ... 12 colunas).`),ag(),Tl(2107,`blockquote`)(2108,`p`),cN(2109,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(2110,`code`),cN(2111,`gridColumns`),ag(),cN(2112,`.`),ag()()()(),Tl(2113,`tr`,13)(2114,`td`,14)(2115,`div`,15)(2116,`span`,16),cN(2117,` gridLgPull`),Gl(2118,`br`),ag()()(),Tl(2119,`td`,17)(2120,`code`,41),cN(2121,`number`),ag()(),Tl(2122,`td`,20)(2123,`em`)(2124,`strong`),cN(2125,`(opcional)`),ag()(),Tl(2126,`p`),cN(2127,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),ag(),Tl(2128,`p`),cN(2129,`Deve ser usado o sistema de `),Tl(2130,`strong`),cN(2131,`grid`),ag(),cN(2132,` do PO (1 ... 11 colunas).`),ag(),Tl(2133,`blockquote`)(2134,`p`),cN(2135,`Esta propriedade não funciona com a propriedade `),Tl(2136,`code`),cN(2137,`gridColumns`),ag(),cN(2138,`. Deve-se especificar o tamanho da tela.`),ag()()()(),Tl(2139,`tr`,13)(2140,`td`,14)(2141,`div`,15)(2142,`span`,16),cN(2143,` gridMdColumns`),Gl(2144,`br`),ag()()(),Tl(2145,`td`,17)(2146,`code`,41),cN(2147,`number`),ag()(),Tl(2148,`td`,20)(2149,`em`)(2150,`strong`),cN(2151,`(opcional)`),ag()(),Tl(2152,`p`),cN(2153,`Tamanho de exibição do campo em telas médias (md).`),ag(),Tl(2154,`p`),cN(2155,`Deve ser usado o sistema de `),Tl(2156,`strong`),cN(2157,`grid`),ag(),cN(2158,` do PO (1 ... 12 colunas).`),ag(),Tl(2159,`blockquote`)(2160,`p`),cN(2161,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(2162,`code`),cN(2163,`gridColumns`),ag(),cN(2164,`.`),ag()()()(),Tl(2165,`tr`,13)(2166,`td`,14)(2167,`div`,15)(2168,`span`,16),cN(2169,` gridMdPull`),Gl(2170,`br`),ag()()(),Tl(2171,`td`,17)(2172,`code`,41),cN(2173,`number`),ag()(),Tl(2174,`td`,20)(2175,`em`)(2176,`strong`),cN(2177,`(opcional)`),ag()(),Tl(2178,`p`),cN(2179,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),ag(),Tl(2180,`p`),cN(2181,`Deve ser usado o sistema de `),Tl(2182,`strong`),cN(2183,`grid`),ag(),cN(2184,` do PO (1 ... 11 colunas).`),ag(),Tl(2185,`blockquote`)(2186,`p`),cN(2187,`Esta propriedade não funciona com a propriedade `),Tl(2188,`code`),cN(2189,`gridColumns`),ag(),cN(2190,`. Deve-se especificar o tamanho da tela.`),ag()()()(),Tl(2191,`tr`,13)(2192,`td`,14)(2193,`div`,15)(2194,`span`,16),cN(2195,` gridSmColumns`),Gl(2196,`br`),ag()()(),Tl(2197,`td`,17)(2198,`code`,41),cN(2199,`number`),ag()(),Tl(2200,`td`,20)(2201,`em`)(2202,`strong`),cN(2203,`(opcional)`),ag()(),Tl(2204,`p`),cN(2205,`Tamanho de exibição do campo em telas menores (sm).`),ag(),Tl(2206,`p`),cN(2207,`Deve ser usado o sistema de `),Tl(2208,`strong`),cN(2209,`grid`),ag(),cN(2210,` do PO (1 ... 12 colunas).`),ag(),Tl(2211,`blockquote`)(2212,`p`),cN(2213,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(2214,`code`),cN(2215,`gridColumns`),ag(),cN(2216,`.`),ag()()()(),Tl(2217,`tr`,13)(2218,`td`,14)(2219,`div`,15)(2220,`span`,16),cN(2221,` gridSmPull`),Gl(2222,`br`),ag()()(),Tl(2223,`td`,17)(2224,`code`,41),cN(2225,`number`),ag()(),Tl(2226,`td`,20)(2227,`em`)(2228,`strong`),cN(2229,`(opcional)`),ag()(),Tl(2230,`p`),cN(2231,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),ag(),Tl(2232,`p`),cN(2233,`Deve ser usado o sistema de `),Tl(2234,`strong`),cN(2235,`grid`),ag(),cN(2236,` do PO (1 ... 11 colunas).`),ag(),Tl(2237,`blockquote`)(2238,`p`),cN(2239,`Esta propriedade não funciona com a propriedade `),Tl(2240,`code`),cN(2241,`gridColumns`),ag(),cN(2242,`. Deve-se especificar o tamanho da tela.`),ag()()()(),Tl(2243,`tr`,13)(2244,`td`,14)(2245,`div`,15)(2246,`span`,16),cN(2247,` gridXlColumns`),Gl(2248,`br`),ag()()(),Tl(2249,`td`,17)(2250,`code`,41),cN(2251,`number`),ag()(),Tl(2252,`td`,20)(2253,`em`)(2254,`strong`),cN(2255,`(opcional)`),ag()(),Tl(2256,`p`),cN(2257,`Tamanho de exibição do campo em telas extra grandes (xl).`),ag(),Tl(2258,`p`),cN(2259,`Deve ser usado o sistema de `),Tl(2260,`strong`),cN(2261,`grid`),ag(),cN(2262,` do PO (1 ... 12 colunas).`),ag(),Tl(2263,`blockquote`)(2264,`p`),cN(2265,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(2266,`code`),cN(2267,`gridColumns`),ag(),cN(2268,`.`),ag()()()(),Tl(2269,`tr`,13)(2270,`td`,14)(2271,`div`,15)(2272,`span`,16),cN(2273,` gridXlPull`),Gl(2274,`br`),ag()()(),Tl(2275,`td`,17)(2276,`code`,41),cN(2277,`number`),ag()(),Tl(2278,`td`,20)(2279,`em`)(2280,`strong`),cN(2281,`(opcional)`),ag()(),Tl(2282,`p`),cN(2283,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),ag(),Tl(2284,`p`),cN(2285,`Deve ser usado o sistema de `),Tl(2286,`strong`),cN(2287,`grid`),ag(),cN(2288,` do PO (1 ... 11 colunas).`),ag(),Tl(2289,`blockquote`)(2290,`p`),cN(2291,`Esta propriedade não funciona com a propriedade `),Tl(2292,`code`),cN(2293,`gridColumns`),ag(),cN(2294,`. Deve-se especificar o tamanho da tela.`),ag()()()(),Tl(2295,`tr`,13)(2296,`td`,14)(2297,`div`,15)(2298,`span`,16),cN(2299,` headers`),Gl(2300,`br`),ag()()(),Tl(2301,`td`,17)(2302,`code`,51),cN(2303,`{ [name: string]: string `),ag(),Tl(2304,`code`,52),cN(2305,` Array<string>;
}`),ag()(),Tl(2306,`td`,20)(2307,`em`)(2308,`strong`),cN(2309,`(opcional)`),ag()(),Tl(2310,`p`),cN(2311,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),ag(),Tl(2312,`p`)(2313,`strong`),cN(2314,`Componente compatível`),ag(),cN(2315,`: `),Tl(2316,`code`),cN(2317,`po-upload`),ag()()()(),Tl(2318,`tr`,13)(2319,`td`,14)(2320,`div`,15)(2321,`span`,16),cN(2322,` help`),Gl(2323,`br`),ag()()(),Tl(2324,`td`,17)(2325,`code`,18),cN(2326,`string`),ag()(),Tl(2327,`td`,20)(2328,`em`)(2329,`strong`),cN(2330,`(opcional)`),ag()(),Tl(2331,`p`),cN(2332,`Texto de ajuda.`),ag()()(),Tl(2333,`tr`,13)(2334,`td`,14)(2335,`div`,15)(2336,`span`,16),cN(2337,` helper`),Gl(2338,`br`),ag()()(),Tl(2339,`td`,17)(2340,`code`,18),cN(2341,`string `),ag(),Tl(2342,`code`,53),cN(2343,` PoHelperOptions`),ag()(),Tl(2344,`td`,20)(2345,`em`)(2346,`strong`),cN(2347,`(opcional)`),ag()(),Tl(2348,`p`),cN(2349,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),ag()()(),Tl(2350,`tr`,13)(2351,`td`,14)(2352,`div`,15)(2353,`span`,16),cN(2354,` hideLabelStatus`),Gl(2355,`br`),ag()()(),Tl(2356,`td`,17)(2357,`code`,28),cN(2358,`boolean`),ag()(),Tl(2359,`td`,20)(2360,`em`)(2361,`strong`),cN(2362,`(opcional)`),ag()(),Tl(2363,`p`),cN(2364,`Indica se o status do `),Tl(2365,`code`),cN(2366,`model`),ag(),cN(2367,` será escondido visualmente ao lado do switch`),ag()()(),Tl(2368,`tr`,13)(2369,`td`,14)(2370,`div`,15)(2371,`span`,16),cN(2372,` hidePasswordPeek`),Gl(2373,`br`),ag()()(),Tl(2374,`td`,17)(2375,`code`,28),cN(2376,`boolean`),ag()(),Tl(2377,`td`,20)(2378,`em`)(2379,`strong`),cN(2380,`(opcional)`),ag()(),Tl(2381,`p`),cN(2382,`Permite esconder a função de espiar a senha digitada no `),Tl(2383,`code`),cN(2384,`po-password`),ag(),cN(2385,`.`),ag()()(),Tl(2386,`tr`,13)(2387,`td`,14)(2388,`div`,15)(2389,`span`,16),cN(2390,` hideRestrictionsInfo`),Gl(2391,`br`),ag()()(),Tl(2392,`td`,17)(2393,`code`,28),cN(2394,`boolean`),ag()(),Tl(2395,`td`,20)(2396,`em`)(2397,`strong`),cN(2398,`(opcional)`),ag()(),Tl(2399,`p`),cN(2400,`Oculta visualmente as informações de restrições para o upload.`),ag(),Tl(2401,`p`)(2402,`strong`),cN(2403,`Componente compatível`),ag(),cN(2404,`: `),Tl(2405,`code`),cN(2406,`po-upload`),ag()()()(),Tl(2407,`tr`,13)(2408,`td`,14)(2409,`div`,15)(2410,`span`,16),cN(2411,` hideSearch`),Gl(2412,`br`),ag()()(),Tl(2413,`td`,17)(2414,`code`,28),cN(2415,`boolean`),ag()(),Tl(2416,`td`,20)(2417,`em`)(2418,`strong`),cN(2419,`(opcional)`),ag()(),Tl(2420,`p`),cN(2421,`Esconde o campo de pesquisa existente dentro do dropdown do `),Tl(2422,`code`),cN(2423,`po-multiselect`),ag(),cN(2424,`.`),ag()()(),Tl(2425,`tr`,13)(2426,`td`,14)(2427,`div`,15)(2428,`span`,16),cN(2429,` hideSelectAll`),Gl(2430,`br`),ag()()(),Tl(2431,`td`,17)(2432,`code`,28),cN(2433,`boolean`),ag()(),Tl(2434,`td`,20)(2435,`em`)(2436,`strong`),cN(2437,`(opcional)`),ag()(),Tl(2438,`p`),cN(2439,`Indica se o campo "Selecionar todos" do `),Tl(2440,`code`),cN(2441,`po-multiselect`),ag(),cN(2442,` será escondido.`),ag()()(),Tl(2443,`tr`,13)(2444,`td`,14)(2445,`div`,15)(2446,`span`,16),cN(2447,` hideSelectButton`),Gl(2448,`br`),ag()()(),Tl(2449,`td`,17)(2450,`code`,28),cN(2451,`boolean`),ag()(),Tl(2452,`td`,20)(2453,`em`)(2454,`strong`),cN(2455,`(opcional)`),ag()(),Tl(2456,`p`),cN(2457,`Omite o botão de seleção de arquivos.`),ag(),Tl(2458,`blockquote`)(2459,`p`),cN(2460,`Caso o valor definido seja `),Tl(2461,`code`),cN(2462,`true`),ag(),cN(2463,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(2464,`code`),cN(2465,`selectFiles()`),ag(),cN(2466,` para seleção de arquivos.`),ag()(),Tl(2467,`p`)(2468,`strong`),cN(2469,`Componente compatível`),ag(),cN(2470,`: `),Tl(2471,`code`),cN(2472,`po-upload`),ag()()()(),Tl(2473,`tr`,13)(2474,`td`,14)(2475,`div`,15)(2476,`span`,16),cN(2477,` hideSendButton`),Gl(2478,`br`),ag()()(),Tl(2479,`td`,17)(2480,`code`,28),cN(2481,`boolean`),ag()(),Tl(2482,`td`,20)(2483,`em`)(2484,`strong`),cN(2485,`(opcional)`),ag()(),Tl(2486,`p`),cN(2487,`Omite o botão de envio de arquivos.`),ag(),Tl(2488,`blockquote`)(2489,`p`),cN(2490,`Caso o valor definido seja `),Tl(2491,`code`),cN(2492,`true`),ag(),cN(2493,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(2494,`code`),cN(2495,`sendFiles()`),ag(),cN(2496,` para envio do(s) arquivo(s) selecionado(s).`),ag()(),Tl(2497,`p`)(2498,`strong`),cN(2499,`Componente compatível`),ag(),cN(2500,`: `),Tl(2501,`code`),cN(2502,`po-upload`),ag()()()(),Tl(2503,`tr`,13)(2504,`td`,14)(2505,`div`,15)(2506,`span`,16),cN(2507,` icon`),Gl(2508,`br`),ag()()(),Tl(2509,`td`,17)(2510,`code`,18),cN(2511,`string `),ag(),Tl(2512,`code`,54),cN(2513,` TemplateRef<void>`),ag()(),Tl(2514,`td`,20)(2515,`em`)(2516,`strong`),cN(2517,`(opcional)`),ag()(),Tl(2518,`p`),cN(2519,`Define o ícone que será exibido no início do campo.`),ag(),Tl(2520,`blockquote`)(2521,`p`),cN(2522,`Esta propriedade só pode ser utilizado nos campos:`),ag()(),Tl(2523,`ul`)(2524,`li`),cN(2525,`Input;`),ag(),Tl(2526,`li`),cN(2527,`Number;`),ag(),Tl(2528,`li`),cN(2529,`Decimal;`),ag(),Tl(2530,`li`),cN(2531,`Combo;`),ag(),Tl(2532,`li`),cN(2533,`Password;`),ag()(),Tl(2534,`blockquote`)(2535,`p`),cN(2536,`Veja a disponibilidade de ícones em `),Tl(2537,`a`,55),cN(2538,`biblioteca de ícones`),ag(),cN(2539,`.`),ag()()()(),Tl(2540,`tr`,13)(2541,`td`,14)(2542,`div`,15)(2543,`span`,16),cN(2544,` infiniteScroll`),Gl(2545,`br`),ag()()(),Tl(2546,`td`,17)(2547,`code`,28),cN(2548,`boolean`),ag()(),Tl(2549,`td`,20)(2550,`em`)(2551,`strong`),cN(2552,`(opcional)`),ag()(),Tl(2553,`p`),cN(2554,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),ag(),Tl(2555,`p`)(2556,`strong`),cN(2557,`Componentes compatíveis:`),ag(),Tl(2558,`code`),cN(2559,`po-combo`),ag(),cN(2560,`, `),Tl(2561,`code`),cN(2562,`po-lookup`),ag(),cN(2563,`.`),ag()()(),Tl(2564,`tr`,13)(2565,`td`,14)(2566,`div`,15)(2567,`span`,16),cN(2568,` infiniteScrollDistance`),Gl(2569,`br`),ag()()(),Tl(2570,`td`,17)(2571,`code`,41),cN(2572,`number`),ag()(),Tl(2573,`td`,20)(2574,`em`)(2575,`strong`),cN(2576,`(opcional)`),ag()(),Tl(2577,`p`),cN(2578,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Tl(2579,`strong`),cN(2580,`Exemplos`),ag(),Tl(2581,`code`),cN(2582,`{ infiniteScrollDistance: 80 }`),ag(),cN(2583,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),ag(),Tl(2584,`p`)(2585,`strong`),cN(2586,`Componente compatível:`),ag(),Tl(2587,`code`),cN(2588,`po-combo`),ag(),cN(2589,`.`),ag()()(),Tl(2590,`tr`,13)(2591,`td`,14)(2592,`div`,15)(2593,`span`,16),cN(2594,` invalidValue`),Gl(2595,`br`),ag()()(),Tl(2596,`td`,17)(2597,`code`,28),cN(2598,`boolean`),ag()(),Tl(2599,`td`,20)(2600,`em`)(2601,`strong`),cN(2602,`(opcional)`),ag()(),Tl(2603,`p`),cN(2604,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Tl(2605,`code`),cN(2606,`p-field-error-message`),ag(),cN(2607,`.`),ag(),Tl(2608,`blockquote`)(2609,`p`),cN(2610,`Caso essa propriedade seja definida como `),Tl(2611,`code`),cN(2612,`true`),ag(),cN(2613,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),ag()(),Tl(2614,`p`)(2615,`strong`),cN(2616,`Componente compatível`),ag(),cN(2617,`: `),Tl(2618,`code`),cN(2619,`po-switch`),ag()()()(),Tl(2620,`tr`,13)(2621,`td`,14)(2622,`div`,15)(2623,`span`,16),cN(2624,` isoFormat`),Gl(2625,`br`),ag()()(),Tl(2626,`td`,17)(2627,`code`,56),cN(2628,`PoDatepickerIsoFormat`),ag()(),Tl(2629,`td`,20)(2630,`em`)(2631,`strong`),cN(2632,`(opcional)`),ag()(),Tl(2633,`p`),cN(2634,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),ag(),Tl(2635,`blockquote`)(2636,`p`),cN(2637,`Veja os valores válidos no `),Tl(2638,`code`),cN(2639,`PoDatepickerIsoFormat`),ag(),cN(2640,`.`),ag()(),Tl(2641,`p`)(2642,`strong`),cN(2643,`Componente compatível:`),ag(),Tl(2644,`code`),cN(2645,`po-datepicker`),ag()()()(),Tl(2646,`tr`,13)(2647,`td`,14)(2648,`div`,15)(2649,`span`,16),cN(2650,` key`),Gl(2651,`br`),ag()()(),Tl(2652,`td`,17)(2653,`code`,28),cN(2654,`boolean`),ag()(),Tl(2655,`td`,20)(2656,`em`)(2657,`strong`),cN(2658,`(opcional)`),ag()(),Tl(2659,`p`),cN(2660,`Identificador`),ag()()(),Tl(2661,`tr`,13)(2662,`td`,14)(2663,`div`,15)(2664,`span`,16),cN(2665,` keydown`),Gl(2666,`br`),ag()()(),Tl(2667,`td`,17)(2668,`code`,29),cN(2669,`Function`),ag()(),Tl(2670,`td`,20)(2671,`em`)(2672,`strong`),cN(2673,`(opcional)`),ag()(),Tl(2674,`p`),cN(2675,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(2676,`code`),cN(2677,`KeyboardEvent`),ag(),cN(2678,` com informações sobre a tecla.`),ag()()(),Tl(2679,`tr`,13)(2680,`td`,14)(2681,`div`,15)(2682,`span`,16),cN(2683,` label`),Gl(2684,`br`),ag()()(),Tl(2685,`td`,17)(2686,`code`,18),cN(2687,`string`),ag()(),Tl(2688,`td`,20)(2689,`em`)(2690,`strong`),cN(2691,`(opcional)`),ag()(),Tl(2692,`p`),cN(2693,`Rótulo do campo exibido.`),ag(),Tl(2694,`p`),cN(2695,`Caso não seja informado, será utilizado como `),Tl(2696,`code`),cN(2697,`label`),ag(),cN(2698,` o valor da propriedade `),Tl(2699,`code`),cN(2700,`property`),ag(),cN(2701,` com a primeira letra em maiúsculo.`),ag()()(),Tl(2702,`tr`,13)(2703,`td`,14)(2704,`div`,15)(2705,`span`,16),cN(2706,` labelPosition`),Gl(2707,`br`),ag()()(),Tl(2708,`td`,17)(2709,`code`,57),cN(2710,`PoSwitchLabelPosition`),ag()(),Tl(2711,`td`,20)(2712,`em`)(2713,`strong`),cN(2714,`(opcional)`),ag()(),Tl(2715,`p`),cN(2716,`Posição de exibição do rótulo do PoSwitch.`),ag(),Tl(2717,`blockquote`)(2718,`p`),cN(2719,`Por padrão exibe à direita.`),ag()()()(),Tl(2720,`tr`,13)(2721,`td`,14)(2722,`div`,15)(2723,`span`,16),cN(2724,` listboxControlPosition`),Gl(2725,`br`),ag()()(),Tl(2726,`td`,17)(2727,`code`,58),cN(2728,`'top' `),ag(),Tl(2729,`code`,59),cN(2730,` 'bottom'`),ag()(),Tl(2731,`td`,20)(2732,`em`)(2733,`strong`),cN(2734,`(opcional)`),ag()(),Tl(2735,`p`),cN(2736,`Define a direção preferida para exibição do `),Tl(2737,`code`),cN(2738,`listbox`),ag(),cN(2739,` em relação ao campo (`),Tl(2740,`code`),cN(2741,`top`),ag(),cN(2742,` ou `),Tl(2743,`code`),cN(2744,`bottom`),ag(),cN(2745,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),ag(),Tl(2746,`p`)(2747,`strong`),cN(2748,`Componentes compatíveis:`),ag(),Tl(2749,`code`),cN(2750,`po-multiselect`),ag(),cN(2751,`, `),Tl(2752,`code`),cN(2753,`po-combo`),ag(),cN(2754,`.`),ag()()(),Tl(2755,`tr`,13)(2756,`td`,14)(2757,`div`,15)(2758,`span`,16),cN(2759,` literals`),Gl(2760,`br`),ag()()(),Tl(2761,`td`,17)(2762,`code`,60),cN(2763,`PoLookupLiterals `),ag(),Tl(2764,`code`,61),cN(2765,` PoMultiselectLiterals `),ag(),Tl(2766,`code`,62),cN(2767,` PoComboLiterals `),ag(),Tl(2768,`code`,63),cN(2769,` PoDatepickerRangeLiterals `),ag(),Tl(2770,`code`,64),cN(2771,` PoUploadLiterals`),ag()(),Tl(2772,`td`,20)(2773,`em`)(2774,`strong`),cN(2775,`(opcional)`),ag()(),Tl(2776,`p`),cN(2777,`Objeto com as literais usadas para os seguintes componentes: `),Tl(2778,`code`),cN(2779,`po-lookup`),ag(),cN(2780,`, `),Tl(2781,`code`),cN(2782,`po-multiselect`),ag(),cN(2783,`, `),Tl(2784,`code`),cN(2785,`po-combo`),ag(),cN(2786,` e `),Tl(2787,`code`),cN(2788,`po-datepicker-range`),ag(),cN(2789,`.`),ag(),Tl(2790,`blockquote`)(2791,`p`),cN(2792,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),ag()(),Tl(2793,`p`)(2794,`strong`),cN(2795,`Componentes compatíveis:`),ag(),Tl(2796,`code`),cN(2797,`po-lookup`),ag(),cN(2798,`, `),Tl(2799,`code`),cN(2800,`po-multiselect`),ag(),cN(2801,`, `),Tl(2802,`code`),cN(2803,`po-combo`),ag(),cN(2804,`, `),Tl(2805,`code`),cN(2806,`po-datepicker-range`),ag()()()(),Tl(2807,`tr`,13)(2808,`td`,14)(2809,`div`,15)(2810,`span`,16),cN(2811,` loading`),Gl(2812,`br`),ag()()(),Tl(2813,`td`,17)(2814,`code`,28),cN(2815,`boolean`),ag()(),Tl(2816,`td`,20)(2817,`em`)(2818,`strong`),cN(2819,`(opcional)`),ag()(),Tl(2820,`p`),cN(2821,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),ag(),Tl(2822,`blockquote`)(2823,`p`),cN(2824,`Por padrão é `),Tl(2825,`code`),cN(2826,`false`),ag(),cN(2827,`.`),ag()(),Tl(2828,`p`)(2829,`strong`),cN(2830,`Componentes compatíveis:`),ag(),Tl(2831,`code`),cN(2832,`po-datepicker`),ag(),cN(2833,`, `),Tl(2834,`code`),cN(2835,`po-datepicker-range`),ag(),cN(2836,`, `),Tl(2837,`code`),cN(2838,`po-number`),ag(),cN(2839,`, `),Tl(2840,`code`),cN(2841,`po-decimal`),ag(),cN(2842,`,
`),Tl(2843,`code`),cN(2844,`po-input`),ag(),cN(2845,`, `),Tl(2846,`code`),cN(2847,`po-select`),ag(),cN(2848,`, `),Tl(2849,`code`),cN(2850,`po-switch`),ag(),cN(2851,`, `),Tl(2852,`code`),cN(2853,`po-combo`),ag(),cN(2854,`, `),Tl(2855,`code`),cN(2856,`po-lookup`),ag(),cN(2857,`, `),Tl(2858,`code`),cN(2859,`po-multiselect`),ag(),cN(2860,`,
`),Tl(2861,`code`),cN(2862,`po-textarea`),ag(),cN(2863,`, `),Tl(2864,`code`),cN(2865,`po-password`),ag(),cN(2866,`, `),Tl(2867,`code`),cN(2868,`po-upload`),ag(),cN(2869,`.`),ag()()(),Tl(2870,`tr`,13)(2871,`td`,14)(2872,`div`,15)(2873,`span`,16),cN(2874,` locale`),Gl(2875,`br`),ag()()(),Tl(2876,`td`,17)(2877,`code`,18),cN(2878,`string`),ag()(),Tl(2879,`td`,20)(2880,`em`)(2881,`strong`),cN(2882,`(opcional)`),ag()(),Tl(2883,`p`),cN(2884,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Tl(2885,`a`,65)(2886,`code`),cN(2887,`I18n`),ag()()(),Tl(2888,`p`),cN(2889,`Exemplo de utilização:`),ag(),Tl(2890,`pre`)(2891,`code`),cN(2892,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),ag()(),Tl(2893,`blockquote`)(2894,`p`),cN(2895,`Para ver quais linguagens suportadas acesse `),Tl(2896,`a`,65)(2897,`code`),cN(2898,`I18n`),ag()()()(),Tl(2899,`p`)(2900,`strong`),cN(2901,`Componentes compatíveis:`),ag(),Tl(2902,`code`),cN(2903,`po-datepicker`),ag(),cN(2904,`, `),Tl(2905,`code`),cN(2906,`po-decimal`),ag(),cN(2907,`, `),Tl(2908,`code`),cN(2909,`po-timepicker`),ag(),cN(2910,`.`),ag()()(),Tl(2911,`tr`,13)(2912,`td`,14)(2913,`div`,15)(2914,`span`,16),cN(2915,` mask`),Gl(2916,`br`),ag()()(),Tl(2917,`td`,17)(2918,`code`,18),cN(2919,`string`),ag()(),Tl(2920,`td`,20)(2921,`em`)(2922,`strong`),cN(2923,`(opcional)`),ag()(),Tl(2924,`p`),cN(2925,`Máscara para o campo.`),ag(),Tl(2926,`p`)(2927,`strong`),cN(2928,`Componente compatível:`),ag(),Tl(2929,`code`),cN(2930,`po-input`),ag(),cN(2931,`.`),ag(),Tl(2932,`blockquote`)(2933,`p`),cN(2934,`também é atribuído ao utilizar a propriedade `),Tl(2935,`code`),cN(2936,`type: time`),ag(),cN(2937,`.`),ag()(),Tl(2938,`blockquote`)(2939,`p`),cN(2940,`Incompatível com `),Tl(2941,`code`),cN(2942,`po-decimal`),ag(),cN(2943,`.`),ag()()()(),Tl(2944,`tr`,13)(2945,`td`,14)(2946,`div`,15)(2947,`span`,16),cN(2948,` maskFormatModel`),Gl(2949,`br`),ag()()(),Tl(2950,`td`,17)(2951,`code`,28),cN(2952,`boolean`),ag()(),Tl(2953,`td`,20)(2954,`em`)(2955,`strong`),cN(2956,`(opcional)`),ag()(),Tl(2957,`p`),cN(2958,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),Tl(2959,`code`),cN(2960,`false`),ag(),cN(2961,`.`),ag(),Tl(2962,`p`)(2963,`strong`),cN(2964,`Componente compatível:`),ag(),Tl(2965,`code`),cN(2966,`po-input`),ag(),cN(2967,`.`),ag(),Tl(2968,`blockquote`)(2969,`p`),cN(2970,`também é atribuído ao utilizar a propriedade `),Tl(2971,`code`),cN(2972,`type: time`),ag(),cN(2973,`.`),ag()()()(),Tl(2974,`tr`,13)(2975,`td`,14)(2976,`div`,15)(2977,`span`,16),cN(2978,` maskNoLengthValidation`),Gl(2979,`br`),ag()()(),Tl(2980,`td`,17)(2981,`code`,28),cN(2982,`boolean`),ag()(),Tl(2983,`td`,20)(2984,`em`)(2985,`strong`),cN(2986,`(opcional)`),ag()(),Tl(2987,`p`),cN(2988,`Controla como o componente aplica as validações de comprimento mínimo (`),Tl(2989,`code`),cN(2990,`minLength`),ag(),cN(2991,`) e máximo (`),Tl(2992,`code`),cN(2993,`maxLength`),ag(),cN(2994,`) quando há uma máscara (`),Tl(2995,`code`),cN(2996,`p-mask`),ag(),cN(2997,`) definida.`),ag(),Tl(2998,`ul`)(2999,`li`),cN(3e3,`Quando `),Tl(3001,`code`),cN(3002,`true`),ag(),cN(3003,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ag(),Tl(3004,`li`),cN(3005,`Quando `),Tl(3006,`code`),cN(3007,`false`),ag(),cN(3008,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ag()(),Tl(3009,`p`)(3010,`strong`),cN(3011,`Componentes compatíveis:`),ag(),Tl(3012,`code`),cN(3013,`po-input`),ag(),cN(3014,`, `),Tl(3015,`code`),cN(3016,`po-decimal`),ag(),cN(3017,`.`),ag(),Tl(3018,`blockquote`)(3019,`p`),cN(3020,`Esta propriedade é ignorada quando utilizada em conjunto com `),Tl(3021,`code`),cN(3022,`p-mask-format-model`),ag(),cN(3023,`.`),ag()(),Tl(3024,`p`),cN(3025,`Exemplo:`),ag(),Tl(3026,`pre`)(3027,`code`),cN(3028,`fields:Array<PoDynamicFormField> = [
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
`),ag()(),Tl(3029,`ul`)(3030,`li`),cN(3031,`Entrada: `),Tl(3032,`code`),cN(3033,`11.111.111/1111-11`),ag(),cN(3034,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),ag()()()(),Tl(3035,`tr`,13)(3036,`td`,14)(3037,`div`,15)(3038,`span`,16),cN(3039,` maxLength`),Gl(3040,`br`),ag()()(),Tl(3041,`td`,17)(3042,`code`,41),cN(3043,`number`),ag()(),Tl(3044,`td`,20)(3045,`em`)(3046,`strong`),cN(3047,`(opcional)`),ag()(),Tl(3048,`p`),cN(3049,`Tamanho máximo de caracteres.`),ag(),Tl(3050,`p`)(3051,`strong`),cN(3052,`Componentes compatíveis:`),ag(),Tl(3053,`code`),cN(3054,`po-input`),ag(),cN(3055,`, `),Tl(3056,`code`),cN(3057,`po-number`),ag(),cN(3058,`, `),Tl(3059,`code`),cN(3060,`po-decimal`),ag(),cN(3061,`, `),Tl(3062,`code`),cN(3063,`po-textarea`),ag(),cN(3064,`, `),Tl(3065,`code`),cN(3066,`po-password`),ag(),cN(3067,`.`),ag()()(),Tl(3068,`tr`,13)(3069,`td`,14)(3070,`div`,15)(3071,`span`,16),cN(3072,` maxTime`),Gl(3073,`br`),ag()()(),Tl(3074,`td`,17)(3075,`code`,18),cN(3076,`string`),ag()(),Tl(3077,`td`,20)(3078,`em`)(3079,`strong`),cN(3080,`(opcional)`),ag()(),Tl(3081,`p`),cN(3082,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Tl(3083,`code`),cN(3084,`HH:mm`),ag(),cN(3085,` ou `),Tl(3086,`code`),cN(3087,`HH:mm:ss`),ag(),cN(3088,`.`),ag(),Tl(3089,`p`)(3090,`strong`),cN(3091,`Componente compatível:`),ag(),Tl(3092,`code`),cN(3093,`po-datetimepicker`),ag(),cN(3094,`, `),Tl(3095,`code`),cN(3096,`po-timepicker`),ag()()()(),Tl(3097,`tr`,13)(3098,`td`,14)(3099,`div`,15)(3100,`span`,16),cN(3101,` maxValue`),Gl(3102,`br`),ag()()(),Tl(3103,`td`,17)(3104,`code`,18),cN(3105,`string `),ag(),Tl(3106,`code`,41),cN(3107,` number`),ag()(),Tl(3108,`td`,20)(3109,`em`)(3110,`strong`),cN(3111,`(opcional)`),ag()(),Tl(3112,`p`),cN(3113,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Tl(3114,`em`),cN(3115,`number`),ag(),cN(3116,`, `),Tl(3117,`em`),cN(3118,`date`),ag(),cN(3119,`, `),Tl(3120,`em`),cN(3121,`dateTime`),ag(),cN(3122,` ou `),Tl(3123,`em`),cN(3124,`time`),ag(),cN(3125,`.`),ag(),Tl(3126,`blockquote`)(3127,`p`),cN(3128,`Para `),Tl(3129,`code`),cN(3130,`po-timepicker`),ag(),cN(3131,`, o valor deve estar no formato `),Tl(3132,`code`),cN(3133,`HH:mm`),ag(),cN(3134,` ou `),Tl(3135,`code`),cN(3136,`HH:mm:ss`),ag(),cN(3137,`.`),ag()(),Tl(3138,`p`)(3139,`strong`),cN(3140,`Componentes compatíveis:`),ag(),Tl(3141,`code`),cN(3142,`po-datepicker`),ag(),cN(3143,`, `),Tl(3144,`code`),cN(3145,`po-datepicker-range`),ag(),cN(3146,`, `),Tl(3147,`code`),cN(3148,`po-number`),ag(),cN(3149,`, `),Tl(3150,`code`),cN(3151,`po-decimal`),ag(),cN(3152,`, `),Tl(3153,`code`),cN(3154,`po-timepicker`),ag()()()(),Tl(3155,`tr`,13)(3156,`td`,14)(3157,`div`,15)(3158,`span`,16),cN(3159,` minLength`),Gl(3160,`br`),ag()()(),Tl(3161,`td`,17)(3162,`code`,41),cN(3163,`number`),ag()(),Tl(3164,`td`,20)(3165,`em`)(3166,`strong`),cN(3167,`(opcional)`),ag()(),Tl(3168,`p`),cN(3169,`Tamanho mínimo de caracteres.`),ag(),Tl(3170,`p`)(3171,`strong`),cN(3172,`Componentes compatíveis:`),ag(),Tl(3173,`code`),cN(3174,`po-input`),ag(),cN(3175,`, `),Tl(3176,`code`),cN(3177,`po-number`),ag(),cN(3178,`, `),Tl(3179,`code`),cN(3180,`po-decimal`),ag(),cN(3181,`, `),Tl(3182,`code`),cN(3183,`po-textarea`),ag(),cN(3184,`, `),Tl(3185,`code`),cN(3186,`po-password`),ag(),cN(3187,`.`),ag()()(),Tl(3188,`tr`,13)(3189,`td`,14)(3190,`div`,15)(3191,`span`,16),cN(3192,` minTime`),Gl(3193,`br`),ag()()(),Tl(3194,`td`,17)(3195,`code`,18),cN(3196,`string`),ag()(),Tl(3197,`td`,20)(3198,`em`)(3199,`strong`),cN(3200,`(opcional)`),ag()(),Tl(3201,`p`),cN(3202,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Tl(3203,`code`),cN(3204,`HH:mm`),ag(),cN(3205,` ou `),Tl(3206,`code`),cN(3207,`HH:mm:ss`),ag(),cN(3208,`.`),ag(),Tl(3209,`p`)(3210,`strong`),cN(3211,`Componente compatível:`),ag(),Tl(3212,`code`),cN(3213,`po-datetimepicker`),ag(),cN(3214,`, `),Tl(3215,`code`),cN(3216,`po-timepicker`),ag()()()(),Tl(3217,`tr`,13)(3218,`td`,14)(3219,`div`,15)(3220,`span`,16),cN(3221,` minValue`),Gl(3222,`br`),ag()()(),Tl(3223,`td`,17)(3224,`code`,18),cN(3225,`string `),ag(),Tl(3226,`code`,41),cN(3227,` number`),ag()(),Tl(3228,`td`,20)(3229,`em`)(3230,`strong`),cN(3231,`(opcional)`),ag()(),Tl(3232,`p`),cN(3233,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Tl(3234,`em`),cN(3235,`number`),ag(),cN(3236,`, `),Tl(3237,`em`),cN(3238,`date`),ag(),cN(3239,`, `),Tl(3240,`em`),cN(3241,`dateTime`),ag(),cN(3242,` ou `),Tl(3243,`em`),cN(3244,`time`),ag(),cN(3245,`.`),ag(),Tl(3246,`blockquote`)(3247,`p`),cN(3248,`Para `),Tl(3249,`code`),cN(3250,`po-timepicker`),ag(),cN(3251,`, o valor deve estar no formato `),Tl(3252,`code`),cN(3253,`HH:mm`),ag(),cN(3254,` ou `),Tl(3255,`code`),cN(3256,`HH:mm:ss`),ag(),cN(3257,`.`),ag()(),Tl(3258,`p`)(3259,`strong`),cN(3260,`Componentes compatíveis:`),ag(),Tl(3261,`code`),cN(3262,`po-datepicker`),ag(),cN(3263,`, `),Tl(3264,`code`),cN(3265,`po-datepicker-range`),ag(),cN(3266,`, `),Tl(3267,`code`),cN(3268,`po-number`),ag(),cN(3269,`, `),Tl(3270,`code`),cN(3271,`po-decimal`),ag(),cN(3272,`, `),Tl(3273,`code`),cN(3274,`po-timepicker`),ag()()()(),Tl(3275,`tr`,13)(3276,`td`,14)(3277,`div`,15)(3278,`span`,16),cN(3279,` minuteInterval`),Gl(3280,`br`),ag()()(),Tl(3281,`td`,17)(3282,`code`,41),cN(3283,`number`),ag()(),Tl(3284,`td`,20)(3285,`em`)(3286,`strong`),cN(3287,`(opcional)`),ag()(),Tl(3288,`p`),cN(3289,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),ag()()(),Tl(3290,`tr`,13)(3291,`td`,14)(3292,`div`,15)(3293,`span`,16),cN(3294,` mode`),Gl(3295,`br`),ag()()(),Tl(3296,`td`,17)(3297,`code`,66),cN(3298,`'month-year' `),ag(),Tl(3299,`code`,67),cN(3300,` 'year'`),ag()(),Tl(3301,`td`,20)(3302,`em`)(3303,`strong`),cN(3304,`(opcional)`),ag()(),Tl(3305,`p`),cN(3306,`Define o modo de seleção do `),Tl(3307,`code`),cN(3308,`po-datepicker`),ag(),cN(3309,`.`),ag(),Tl(3310,`p`),cN(3311,`Valores aceitos:`),ag(),Tl(3312,`ul`)(3313,`li`)(3314,`code`),cN(3315,`'month-year'`),ag(),cN(3316,`: exibe seleção de mês e ano (formato `),Tl(3317,`code`),cN(3318,`MM/YYYY`),ag(),cN(3319,`)`),ag(),Tl(3320,`li`)(3321,`code`),cN(3322,`'year'`),ag(),cN(3323,`: exibe seleção apenas de ano (formato `),Tl(3324,`code`),cN(3325,`YYYY`),ag(),cN(3326,`)`),ag()(),Tl(3327,`p`)(3328,`strong`),cN(3329,`Componente compatível:`),ag(),Tl(3330,`code`),cN(3331,`po-datepicker`),ag()()()(),Tl(3332,`tr`,13)(3333,`td`,14)(3334,`div`,15)(3335,`span`,16),cN(3336,` modelFormat`),Gl(3337,`br`),ag()()(),Tl(3338,`td`,17)(3339,`code`,68),cN(3340,`PoTimepickerModelFormat`),ag()(),Tl(3341,`td`,20)(3342,`em`)(3343,`strong`),cN(3344,`(opcional)`),ag()(),Tl(3345,`p`),cN(3346,`Define o formato do valor do horário a ser utilizado no model do `),Tl(3347,`code`),cN(3348,`po-timepicker`),ag(),cN(3349,`.`),ag(),Tl(3350,`blockquote`)(3351,`p`),cN(3352,`Veja os valores válidos no `),Tl(3353,`code`),cN(3354,`PoTimepickerModelFormat`),ag(),cN(3355,`.`),ag()(),Tl(3356,`p`)(3357,`strong`),cN(3358,`Componente compatível:`),ag(),Tl(3359,`code`),cN(3360,`po-timepicker`),ag()()()(),Tl(3361,`tr`,13)(3362,`td`,14)(3363,`div`,15)(3364,`span`,16),cN(3365,` multiple`),Gl(3366,`br`),ag()()(),Tl(3367,`td`,17)(3368,`code`,28),cN(3369,`boolean`),ag()(),Tl(3370,`td`,20)(3371,`em`)(3372,`strong`),cN(3373,`(opcional)`),ag()(),Tl(3374,`p`),cN(3375,`Permite a seleção de múltiplos itens.`),ag(),Tl(3376,`p`)(3377,`strong`),cN(3378,`Componentes compatíveis:`),ag(),Tl(3379,`code`),cN(3380,`po-lookup`),ag(),cN(3381,`, `),Tl(3382,`code`),cN(3383,`po-upload`),ag()()()(),Tl(3384,`tr`,13)(3385,`td`,14)(3386,`div`,15)(3387,`span`,16),cN(3388,` noAutocomplete`),Gl(3389,`br`),ag()()(),Tl(3390,`td`,17)(3391,`code`,28),cN(3392,`boolean`),ag()(),Tl(3393,`td`,20)(3394,`em`)(3395,`strong`),cN(3396,`(opcional)`),ag()(),Tl(3397,`p`),cN(3398,`Define a propriedade nativa `),Tl(3399,`code`),cN(3400,`autocomplete`),ag(),cN(3401,` do campo como off.`),ag(),Tl(3402,`p`)(3403,`strong`),cN(3404,`Componentes compatíveis:`),ag(),Tl(3405,`code`),cN(3406,`po-datepicker`),ag(),cN(3407,`, `),Tl(3408,`code`),cN(3409,`po-datepicker-range`),ag(),cN(3410,`, `),Tl(3411,`code`),cN(3412,`po-input`),ag(),cN(3413,`, `),Tl(3414,`code`),cN(3415,`po-number`),ag(),cN(3416,`, `),Tl(3417,`code`),cN(3418,`po-decimal`),ag(),cN(3419,`,
`),Tl(3420,`code`),cN(3421,`po-lookup`),ag(),cN(3422,`, `),Tl(3423,`code`),cN(3424,`po-password`),ag(),cN(3425,`, `),Tl(3426,`code`),cN(3427,`po-timepicker`),ag(),cN(3428,`.`),ag()()(),Tl(3429,`tr`,13)(3430,`td`,14)(3431,`div`,15)(3432,`span`,16),cN(3433,` offsetColumns`),Gl(3434,`br`),ag()()(),Tl(3435,`td`,17)(3436,`code`,41),cN(3437,`number`),ag()(),Tl(3438,`td`,20)(3439,`em`)(3440,`strong`),cN(3441,`(opcional)`),ag()(),Tl(3442,`p`),cN(3443,`Tamanho do espaço de exibição do campo em telas.`),ag(),Tl(3444,`p`),cN(3445,`Deve ser usado o sistema de `),Tl(3446,`strong`),cN(3447,`grid`),ag(),cN(3448,` do PO (1 ... 12 colunas).`),ag(),Tl(3449,`blockquote`)(3450,`p`),cN(3451,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),ag()()()(),Tl(3452,`tr`,13)(3453,`td`,14)(3454,`div`,15)(3455,`span`,16),cN(3456,` offsetLgColumns`),Gl(3457,`br`),ag()()(),Tl(3458,`td`,17)(3459,`code`,41),cN(3460,`number`),ag()(),Tl(3461,`td`,20)(3462,`em`)(3463,`strong`),cN(3464,`(opcional)`),ag()(),Tl(3465,`p`),cN(3466,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),ag(),Tl(3467,`p`),cN(3468,`Deve ser usado o sistema de `),Tl(3469,`strong`),cN(3470,`grid`),ag(),cN(3471,` do PO (1 ... 12 colunas).`),ag(),Tl(3472,`blockquote`)(3473,`p`),cN(3474,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(3475,`code`),cN(3476,`offsetColumns`),ag(),cN(3477,`.`),ag()()()(),Tl(3478,`tr`,13)(3479,`td`,14)(3480,`div`,15)(3481,`span`,16),cN(3482,` offsetMdColumns`),Gl(3483,`br`),ag()()(),Tl(3484,`td`,17)(3485,`code`,41),cN(3486,`number`),ag()(),Tl(3487,`td`,20)(3488,`em`)(3489,`strong`),cN(3490,`(opcional)`),ag()(),Tl(3491,`p`),cN(3492,`Tamanho do espaço de exibição do campo em telas médias (md).`),ag(),Tl(3493,`p`),cN(3494,`Deve ser usado o sistema de `),Tl(3495,`strong`),cN(3496,`grid`),ag(),cN(3497,` do PO (1 ... 12 colunas).`),ag(),Tl(3498,`blockquote`)(3499,`p`),cN(3500,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(3501,`code`),cN(3502,`offsetColumns`),ag(),cN(3503,`.`),ag()()()(),Tl(3504,`tr`,13)(3505,`td`,14)(3506,`div`,15)(3507,`span`,16),cN(3508,` offsetSmColumns`),Gl(3509,`br`),ag()()(),Tl(3510,`td`,17)(3511,`code`,41),cN(3512,`number`),ag()(),Tl(3513,`td`,20)(3514,`em`)(3515,`strong`),cN(3516,`(opcional)`),ag()(),Tl(3517,`p`),cN(3518,`Tamanho do espaço de exibição do campo em telas menores (sm).`),ag(),Tl(3519,`p`),cN(3520,`Deve ser usado o sistema de `),Tl(3521,`strong`),cN(3522,`grid`),ag(),cN(3523,` do PO (1 ... 12 colunas).`),ag(),Tl(3524,`blockquote`)(3525,`p`),cN(3526,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(3527,`code`),cN(3528,`offsetColumns`),ag(),cN(3529,`.`),ag()()()(),Tl(3530,`tr`,13)(3531,`td`,14)(3532,`div`,15)(3533,`span`,16),cN(3534,` offsetXlColumns`),Gl(3535,`br`),ag()()(),Tl(3536,`td`,17)(3537,`code`,41),cN(3538,`number`),ag()(),Tl(3539,`td`,20)(3540,`em`)(3541,`strong`),cN(3542,`(opcional)`),ag()(),Tl(3543,`p`),cN(3544,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),ag(),Tl(3545,`p`),cN(3546,`Deve ser usado o sistema de `),Tl(3547,`strong`),cN(3548,`grid`),ag(),cN(3549,` do PO (1 ... 12 colunas).`),ag(),Tl(3550,`blockquote`)(3551,`p`),cN(3552,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Tl(3553,`code`),cN(3554,`offsetColumns`),ag(),cN(3555,`.`),ag()()()(),Tl(3556,`tr`,13)(3557,`td`,14)(3558,`div`,15)(3559,`span`,16),cN(3560,` onError`),Gl(3561,`br`),ag()()(),Tl(3562,`td`,17)(3563,`code`,29),cN(3564,`Function`),ag()(),Tl(3565,`td`,20)(3566,`em`)(3567,`strong`),cN(3568,`(opcional)`),ag()(),Tl(3569,`p`),cN(3570,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),ag(),Tl(3571,`blockquote`)(3572,`p`),cN(3573,`Por parâmetro será passado o objeto do retorno que é do tipo `),Tl(3574,`code`),cN(3575,`HttpErrorResponse`),ag(),cN(3576,`.`),ag()(),Tl(3577,`p`)(3578,`strong`),cN(3579,`Componente compatível`),ag(),cN(3580,`: `),Tl(3581,`code`),cN(3582,`po-upload`),ag()()()(),Tl(3583,`tr`,13)(3584,`td`,14)(3585,`div`,15)(3586,`span`,16),cN(3587,` onSuccess`),Gl(3588,`br`),ag()()(),Tl(3589,`td`,17)(3590,`code`,29),cN(3591,`Function`),ag()(),Tl(3592,`td`,20)(3593,`em`)(3594,`strong`),cN(3595,`(opcional)`),ag()(),Tl(3596,`p`),cN(3597,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),ag(),Tl(3598,`blockquote`)(3599,`p`),cN(3600,`Por parâmetro será passado o objeto do retorno que é do tipo `),Tl(3601,`code`),cN(3602,`HttpResponse`),ag(),cN(3603,`.`),ag()(),Tl(3604,`p`)(3605,`strong`),cN(3606,`Componente compatível`),ag(),cN(3607,`: `),Tl(3608,`code`),cN(3609,`po-upload`),ag()()()(),Tl(3610,`tr`,13)(3611,`td`,14)(3612,`div`,15)(3613,`span`,16),cN(3614,` onUpload`),Gl(3615,`br`),ag()()(),Tl(3616,`td`,17)(3617,`code`,29),cN(3618,`Function`),ag()(),Tl(3619,`td`,20)(3620,`em`)(3621,`strong`),cN(3622,`(opcional)`),ag()(),Tl(3623,`p`),cN(3624,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),ag(),Tl(3625,`pre`)(3626,`code`),cN(3627,`event.data = {id: 'id do usu\xE1rio'};
`),ag()(),Tl(3628,`p`)(3629,`strong`),cN(3630,`Componente compatível`),ag(),cN(3631,`: `),Tl(3632,`code`),cN(3633,`po-upload`),ag()()()(),Tl(3634,`tr`,13)(3635,`td`,14)(3636,`div`,15)(3637,`span`,16),cN(3638,` optional`),Gl(3639,`br`),ag()()(),Tl(3640,`td`,17)(3641,`code`,28),cN(3642,`boolean`),ag()(),Tl(3643,`td`,20)(3644,`em`)(3645,`strong`),cN(3646,`(opcional)`),ag()(),Tl(3647,`p`),cN(3648,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(3649,`blockquote`)(3650,`p`),cN(3651,`A indicação não será exibida, se:`),ag()(),Tl(3652,`ul`)(3653,`li`),cN(3654,`O campo for `),Tl(3655,`code`),cN(3656,`required`),ag(),cN(3657,`, ou;`),ag(),Tl(3658,`li`),cN(3659,`Não possuir `),Tl(3660,`code`),cN(3661,`help`),ag(),cN(3662,` e `),Tl(3663,`code`),cN(3664,`label`),ag(),cN(3665,`.`),ag()(),Tl(3666,`p`)(3667,`strong`),cN(3668,`Componentes compatíveis:`),ag(),Tl(3669,`code`),cN(3670,`po-datepicker`),ag(),cN(3671,`, `),Tl(3672,`code`),cN(3673,`po-datepicker-range`),ag(),cN(3674,`, `),Tl(3675,`code`),cN(3676,`po-timepicker`),ag(),cN(3677,`, `),Tl(3678,`code`),cN(3679,`po-input`),ag(),cN(3680,`, `),Tl(3681,`code`),cN(3682,`po-number`),ag(),cN(3683,`,
`),Tl(3684,`code`),cN(3685,`po-decimal`),ag(),cN(3686,`, `),Tl(3687,`code`),cN(3688,`po-select`),ag(),cN(3689,`, `),Tl(3690,`code`),cN(3691,`po-radio-group`),ag(),cN(3692,`, `),Tl(3693,`code`),cN(3694,`po-combo`),ag(),cN(3695,`, `),Tl(3696,`code`),cN(3697,`po-lookup`),ag(),cN(3698,`, `),Tl(3699,`code`),cN(3700,`po-checkbox-group`),ag(),cN(3701,`, `),Tl(3702,`code`),cN(3703,`po-multiselect`),ag(),cN(3704,`,
`),Tl(3705,`code`),cN(3706,`po-textarea`),ag(),cN(3707,`, `),Tl(3708,`code`),cN(3709,`po-password`),ag(),cN(3710,`.`),ag()()(),Tl(3711,`tr`,13)(3712,`td`,14)(3713,`div`,15)(3714,`span`,16),cN(3715,` options`),Gl(3716,`br`),ag()()(),Tl(3717,`td`,17)(3718,`code`,32),cN(3719,`Array<string> `),ag(),Tl(3720,`code`,69),cN(3721,` Array<PoSelectOption> `),ag(),Tl(3722,`code`,70),cN(3723,` Array<PoMultiselectOption> `),ag(),Tl(3724,`code`,71),cN(3725,` Array<PoCheckboxGroupOption> `),ag(),Tl(3726,`code`,72),cN(3727,` Array<any>`),ag()(),Tl(3728,`td`,20)(3729,`em`)(3730,`strong`),cN(3731,`(opcional)`),ag()(),Tl(3732,`p`),cN(3733,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),ag(),Tl(3734,`p`)(3735,`strong`),cN(3736,`Componentes compatíveis:`),ag(),Tl(3737,`code`),cN(3738,`po-select`),ag(),cN(3739,`, `),Tl(3740,`code`),cN(3741,`po-radio-group`),ag(),cN(3742,`, `),Tl(3743,`code`),cN(3744,`po-checkbox-group`),ag(),cN(3745,`, `),Tl(3746,`code`),cN(3747,`po-multiselect`),ag(),cN(3748,`.`),ag()()(),Tl(3749,`tr`,13)(3750,`td`,14)(3751,`div`,15)(3752,`span`,16),cN(3753,` optionsMulti`),Gl(3754,`br`),ag()()(),Tl(3755,`td`,17)(3756,`code`,28),cN(3757,`boolean`),ag()(),Tl(3758,`td`,20)(3759,`em`)(3760,`strong`),cN(3761,`(opcional)`),ag()(),Tl(3762,`p`),cN(3763,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),ag()()(),Tl(3764,`tr`,13)(3765,`td`,14)(3766,`div`,15)(3767,`span`,16),cN(3768,` optionsService`),Gl(3769,`br`),ag()()(),Tl(3770,`td`,17)(3771,`code`,18),cN(3772,`string `),ag(),Tl(3773,`code`,73),cN(3774,` PoComboFilter `),ag(),Tl(3775,`code`,74),cN(3776,` PoMultiselectFilter`),ag()(),Tl(3777,`td`,20)(3778,`em`)(3779,`strong`),cN(3780,`(opcional)`),ag()(),Tl(3781,`p`),cN(3782,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Tl(3783,`strong`),cN(3784,`Importante`),ag()(),Tl(3785,`blockquote`)(3786,`p`),cN(3787,`Para que funcione corretamente, é importante que o serviço siga o `),Tl(3788,`a`,75),cN(3789,`guia de API do PO UI`),ag(),cN(3790,`.`),ag()()()(),Tl(3791,`tr`,13)(3792,`td`,14)(3793,`div`,15)(3794,`span`,16),cN(3795,` order`),Gl(3796,`br`),ag()()(),Tl(3797,`td`,17)(3798,`code`,41),cN(3799,`number`),ag()(),Tl(3800,`td`,20)(3801,`em`)(3802,`strong`),cN(3803,`(opcional)`),ag()(),Tl(3804,`p`),cN(3805,`Informa a ordem de exibição do campo.`),ag(),Tl(3806,`p`),cN(3807,`Exemplo de utilização:`),ag(),Tl(3808,`p`)(3809,`code`),cN(3810,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),ag()(),Tl(3811,`p`),cN(3812,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Tl(3813,`code`),cN(3814,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),ag()(),Tl(3815,`p`),cN(3816,`Só serão aceitos valores com números inteiros maiores do que zero.`),ag(),Tl(3817,`p`),cN(3818,`Campos sem `),Tl(3819,`code`),cN(3820,`order`),ag(),cN(3821,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),ag()()(),Tl(3822,`tr`,13)(3823,`td`,14)(3824,`div`,15)(3825,`span`,16),cN(3826,` params`),Gl(3827,`br`),ag()()(),Tl(3828,`td`,17)(3829,`code`,33),cN(3830,`any`),ag()(),Tl(3831,`td`,20)(3832,`em`)(3833,`strong`),cN(3834,`(opcional)`),ag()(),Tl(3835,`p`),cN(3836,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),Tl(3837,`code`),cN(3838,`po-lookup`),ag(),cN(3839,` e
`),Tl(3840,`code`),cN(3841,`po-combo`),ag(),cN(3842,`.`),ag(),Tl(3843,`p`),cN(3844,`Por exemplo, para o parâmetro `),Tl(3845,`code`),cN(3846,`{ age: 23 }`),ag(),cN(3847,` a URL da requisição ficaria:`),ag(),Tl(3848,`p`)(3849,`code`),cN(3850,`url + ?age=23&filter=Peter`),ag()()()(),Tl(3851,`tr`,13)(3852,`td`,14)(3853,`div`,15)(3854,`span`,16),cN(3855,` pattern`),Gl(3856,`br`),ag()()(),Tl(3857,`td`,17)(3858,`code`,18),cN(3859,`string`),ag()(),Tl(3860,`td`,20)(3861,`em`)(3862,`strong`),cN(3863,`(opcional)`),ag()(),Tl(3864,`p`),cN(3865,`Regex para validação do campo.`),ag(),Tl(3866,`p`)(3867,`strong`),cN(3868,`Componentes compatíveis:`),ag(),Tl(3869,`code`),cN(3870,`po-input`),ag(),cN(3871,`, `),Tl(3872,`code`),cN(3873,`po-password`),ag(),cN(3874,`.`),ag(),Tl(3875,`blockquote`)(3876,`p`),cN(3877,`Incompatível com `),Tl(3878,`code`),cN(3879,`po-decimal`),ag(),cN(3880,`.`),ag()()()(),Tl(3881,`tr`,13)(3882,`td`,14)(3883,`div`,15)(3884,`span`,16),cN(3885,` placeholder`),Gl(3886,`br`),ag()()(),Tl(3887,`td`,17)(3888,`code`,18),cN(3889,`string`),ag()(),Tl(3890,`td`,20)(3891,`em`)(3892,`strong`),cN(3893,`(opcional)`),ag()(),Tl(3894,`p`),cN(3895,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),ag(),Tl(3896,`p`)(3897,`strong`),cN(3898,`Componentes compatíveis:`),ag(),Tl(3899,`code`),cN(3900,`po-datepicker`),ag(),cN(3901,`, `),Tl(3902,`code`),cN(3903,`po-datepicker-range`),ag(),cN(3904,`, `),Tl(3905,`code`),cN(3906,`po-timepicker`),ag(),cN(3907,`, `),Tl(3908,`code`),cN(3909,`po-input`),ag(),cN(3910,`, `),Tl(3911,`code`),cN(3912,`po-number`),ag(),cN(3913,`, `),Tl(3914,`code`),cN(3915,`po-decimal`),ag(),cN(3916,`, `),Tl(3917,`code`),cN(3918,`po-select`),ag(),cN(3919,`, `),Tl(3920,`code`),cN(3921,`po-combo`),ag(),cN(3922,`, `),Tl(3923,`code`),cN(3924,`po-lookup`),ag(),cN(3925,`, `),Tl(3926,`code`),cN(3927,`po-multiselect`),ag(),cN(3928,`, `),Tl(3929,`code`),cN(3930,`po-textarea`),ag(),cN(3931,`, `),Tl(3932,`code`),cN(3933,`po-password`),ag(),cN(3934,`.`),ag()()(),Tl(3935,`tr`,13)(3936,`td`,14)(3937,`div`,15)(3938,`span`,16),cN(3939,` placeholderSearch`),Gl(3940,`br`),ag()()(),Tl(3941,`td`,17)(3942,`code`,18),cN(3943,`string`),ag()(),Tl(3944,`td`,20)(3945,`em`)(3946,`strong`),cN(3947,`(opcional)`),ag()(),Tl(3948,`p`),cN(3949,`Placeholder do campo de pesquisa do `),Tl(3950,`code`),cN(3951,`po-multiselect`),ag(),cN(3952,`.`),ag(),Tl(3953,`blockquote`)(3954,`p`),cN(3955,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),ag()()()(),Tl(3956,`tr`,13)(3957,`td`,14)(3958,`div`,15)(3959,`span`,16),cN(3960,` property`),Gl(3961,`br`),ag()()(),Tl(3962,`td`,17)(3963,`code`,18),cN(3964,`string`),ag()(),Tl(3965,`td`,20)(3966,`p`),cN(3967,`Nome de referência do campo.`),ag()()(),Tl(3968,`tr`,13)(3969,`td`,14)(3970,`div`,15)(3971,`span`,16),cN(3972,` range`),Gl(3973,`br`),ag()()(),Tl(3974,`td`,17)(3975,`code`,28),cN(3976,`boolean`),ag()(),Tl(3977,`td`,20)(3978,`em`)(3979,`strong`),cN(3980,`(opcional)`),ag()(),Tl(3981,`p`),cN(3982,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),ag(),Tl(3983,`blockquote`)(3984,`p`),cN(3985,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),ag()()()(),Tl(3986,`tr`,13)(3987,`td`,14)(3988,`div`,15)(3989,`span`,16),cN(3990,` rangePresetOptions`),Gl(3991,`br`),ag()()(),Tl(3992,`td`,17)(3993,`code`,76),cN(3994,`Array<PoCalendarRangePreset>`),ag()(),Tl(3995,`td`,20)(3996,`em`)(3997,`strong`),cN(3998,`(opcional)`),ag()(),Tl(3999,`p`),cN(4e3,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),ag(),Tl(4001,`p`),cN(4002,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),Tl(4003,`code`),cN(4004,`PoCalendarRangePreset`),ag(),cN(4005,`.`),ag(),Tl(4006,`p`)(4007,`strong`),cN(4008,`Componente compatível:`),ag(),Tl(4009,`code`),cN(4010,`po-datepicker-range`),ag()()()(),Tl(4011,`tr`,13)(4012,`td`,14)(4013,`div`,15)(4014,`span`,16),cN(4015,` rangePresets`),Gl(4016,`br`),ag()()(),Tl(4017,`td`,17)(4018,`code`,28),cN(4019,`boolean `),ag(),Tl(4020,`code`,32),cN(4021,` Array<string>`),ag()(),Tl(4022,`td`,20)(4023,`em`)(4024,`strong`),cN(4025,`(opcional)`),ag()(),Tl(4026,`p`),cN(4027,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),ag(),Tl(4028,`p`),cN(4029,`Aceita os seguintes valores:`),ag(),Tl(4030,`ul`)(4031,`li`)(4032,`code`),cN(4033,`true`),ag(),cN(4034,`: exibe todos os presets padrão.`),ag(),Tl(4035,`li`)(4036,`code`),cN(4037,`false`),ag(),cN(4038,`: não exibe os presets padrão.`),ag(),Tl(4039,`li`)(4040,`code`),cN(4041,`Array<string>`),ag(),cN(4042,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),ag()(),Tl(4043,`p`)(4044,`strong`),cN(4045,`Componente compatível:`),ag(),Tl(4046,`code`),cN(4047,`po-datepicker-range`),ag()()()(),Tl(4048,`tr`,13)(4049,`td`,14)(4050,`div`,15)(4051,`span`,16),cN(4052,` rangePresetsOrder`),Gl(4053,`br`),ag()()(),Tl(4054,`td`,17)(4055,`code`,77),cN(4056,`'asc' `),ag(),Tl(4057,`code`,78),cN(4058,` 'desc'`),ag()(),Tl(4059,`td`,20)(4060,`em`)(4061,`strong`),cN(4062,`(opcional)`),ag()(),Tl(4063,`p`),cN(4064,`Define a ordenação dos presets na lista.`),ag(),Tl(4065,`p`),cN(4066,`Valores aceitos:`),ag(),Tl(4067,`ul`)(4068,`li`)(4069,`code`),cN(4070,`'asc'`),ag(),cN(4071,`: ordenação crescente (passado → futuro)`),ag(),Tl(4072,`li`)(4073,`code`),cN(4074,`'desc'`),ag(),cN(4075,`: ordenação decrescente (futuro → passado)`),ag()(),Tl(4076,`p`)(4077,`strong`),cN(4078,`Componente compatível:`),ag(),Tl(4079,`code`),cN(4080,`po-datepicker-range`),ag()()()(),Tl(4081,`tr`,13)(4082,`td`,14)(4083,`div`,15)(4084,`span`,16),cN(4085,` readonly`),Gl(4086,`br`),ag()()(),Tl(4087,`td`,17)(4088,`code`,28),cN(4089,`boolean`),ag()(),Tl(4090,`td`,20)(4091,`em`)(4092,`strong`),cN(4093,`(opcional)`),ag()(),Tl(4094,`p`),cN(4095,`Indica que o campo será somente leitura.`),ag(),Tl(4096,`p`)(4097,`strong`),cN(4098,`Componentes compatíveis:`),ag(),Tl(4099,`code`),cN(4100,`po-datepicker`),ag(),cN(4101,`, `),Tl(4102,`code`),cN(4103,`po-datepicker-range`),ag(),cN(4104,`, `),Tl(4105,`code`),cN(4106,`po-timepicker`),ag(),cN(4107,`, `),Tl(4108,`code`),cN(4109,`po-input`),ag(),cN(4110,`, `),Tl(4111,`code`),cN(4112,`po-number`),ag(),cN(4113,`,
`),Tl(4114,`code`),cN(4115,`po-decimal`),ag(),cN(4116,`, `),Tl(4117,`code`),cN(4118,`po-select`),ag(),cN(4119,`, `),Tl(4120,`code`),cN(4121,`po-textarea`),ag(),cN(4122,`, `),Tl(4123,`code`),cN(4124,`po-password`),ag(),cN(4125,`.`),ag()()(),Tl(4126,`tr`,13)(4127,`td`,14)(4128,`div`,15)(4129,`span`,16),cN(4130,` removeInitialFilter`),Gl(4131,`br`),ag()()(),Tl(4132,`td`,17)(4133,`code`,28),cN(4134,`boolean`),ag()(),Tl(4135,`td`,20)(4136,`em`)(4137,`strong`),cN(4138,`(opcional)`),ag()(),Tl(4139,`p`),cN(4140,`Define que o filtro no primeiro clique será removido.`),ag(),Tl(4141,`blockquote`)(4142,`p`),cN(4143,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),ag()(),Tl(4144,`p`)(4145,`strong`),cN(4146,`Componente compatível`),ag(),cN(4147,`: `),Tl(4148,`code`),cN(4149,`po-combo`),ag()()()(),Tl(4150,`tr`,13)(4151,`td`,14)(4152,`div`,15)(4153,`span`,16),cN(4154,` required`),Gl(4155,`br`),ag()()(),Tl(4156,`td`,17)(4157,`code`,28),cN(4158,`boolean`),ag()(),Tl(4159,`td`,20)(4160,`em`)(4161,`strong`),cN(4162,`(opcional)`),ag()(),Tl(4163,`p`),cN(4164,`Define a obrigatoriedade do campo.`),ag(),Tl(4165,`p`)(4166,`strong`),cN(4167,`Componentes compatíveis:`),ag(),Tl(4168,`code`),cN(4169,`po-datepicker`),ag(),cN(4170,`, `),Tl(4171,`code`),cN(4172,`po-datepicker-range`),ag(),cN(4173,`, `),Tl(4174,`code`),cN(4175,`po-timepicker`),ag(),cN(4176,`, `),Tl(4177,`code`),cN(4178,`po-input`),ag(),cN(4179,`, `),Tl(4180,`code`),cN(4181,`po-number`),ag(),cN(4182,`,
`),Tl(4183,`code`),cN(4184,`po-decimal`),ag(),cN(4185,`, `),Tl(4186,`code`),cN(4187,`po-select`),ag(),cN(4188,`, `),Tl(4189,`code`),cN(4190,`po-radio-group`),ag(),cN(4191,`, `),Tl(4192,`code`),cN(4193,`po-combo`),ag(),cN(4194,`, `),Tl(4195,`code`),cN(4196,`po-lookup`),ag(),cN(4197,`, `),Tl(4198,`code`),cN(4199,`po-checkbox-group`),ag(),cN(4200,`, `),Tl(4201,`code`),cN(4202,`po-multiselect`),ag(),cN(4203,`,
`),Tl(4204,`code`),cN(4205,`po-textarea`),ag(),cN(4206,`, `),Tl(4207,`code`),cN(4208,"po-password``, "),ag(),cN(4209,"po-upload`."),ag()()(),Tl(4210,`tr`,13)(4211,`td`,14)(4212,`div`,15)(4213,`span`,16),cN(4214,` requiredFieldErrorMessage`),Gl(4215,`br`),ag()()(),Tl(4216,`td`,17)(4217,`code`,28),cN(4218,`boolean`),ag()(),Tl(4219,`td`,20)(4220,`em`)(4221,`strong`),cN(4222,`(opcional)`),ag()(),Tl(4223,`p`),cN(4224,`Exibe a mensagem setada na propriedade `),Tl(4225,`code`),cN(4226,`errorMessage`),ag(),cN(4227,` se o campo estiver vazio e for requerido.`),ag(),Tl(4228,`blockquote`)(4229,`p`),cN(4230,`Necessário que a propriedade `),Tl(4231,`code`),cN(4232,`required`),ag(),cN(4233,` esteja habilitada.`),ag()(),Tl(4234,`p`)(4235,`strong`),cN(4236,`Componentes compatíveis:`),ag(),Tl(4237,`code`),cN(4238,`po-datepicker`),ag(),cN(4239,`, `),Tl(4240,`code`),cN(4241,`po-timepicker`),ag(),cN(4242,`, `),Tl(4243,`code`),cN(4244,`po-input`),ag(),cN(4245,`, `),Tl(4246,`code`),cN(4247,`po-number`),ag(),cN(4248,`, `),Tl(4249,`code`),cN(4250,`po-decimal`),ag(),cN(4251,`, `),Tl(4252,`code`),cN(4253,`po-password`),ag(),cN(4254,`.`),ag()()(),Tl(4255,`tr`,13)(4256,`td`,14)(4257,`div`,15)(4258,`span`,16),cN(4259,` restrictions`),Gl(4260,`br`),ag()()(),Tl(4261,`td`,17)(4262,`code`,79),cN(4263,`PoUploadFileRestrictions`),ag()(),Tl(4264,`td`,20)(4265,`em`)(4266,`strong`),cN(4267,`(opcional)`),ag()(),Tl(4268,`p`),cN(4269,`Objeto que segue a definição da interface `),Tl(4270,`code`),cN(4271,`PoUploadFileRestrictions`),ag(),cN(4272,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),ag(),Tl(4273,`p`)(4274,`strong`),cN(4275,`Componente compatível`),ag(),cN(4276,`: `),Tl(4277,`code`),cN(4278,`po-upload`),ag()()()(),Tl(4279,`tr`,13)(4280,`td`,14)(4281,`div`,15)(4282,`span`,16),cN(4283,` rows`),Gl(4284,`br`),ag()()(),Tl(4285,`td`,17)(4286,`code`,41),cN(4287,`number`),ag()(),Tl(4288,`td`,20)(4289,`em`)(4290,`strong`),cN(4291,`(opcional)`),ag()(),Tl(4292,`p`),cN(4293,`Quantidade de linhas exibidas no `),Tl(4294,`code`),cN(4295,`po-textarea`),ag(),cN(4296,`.`),ag()()(),Tl(4297,`tr`,13)(4298,`td`,14)(4299,`div`,15)(4300,`span`,16),cN(4301,` searchService`),Gl(4302,`br`),ag()()(),Tl(4303,`td`,17)(4304,`code`,18),cN(4305,`string `),ag(),Tl(4306,`code`,80),cN(4307,` PoLookupFilter`),ag()(),Tl(4308,`td`,20)(4309,`em`)(4310,`strong`),cN(4311,`(opcional)`),ag()(),Tl(4312,`p`),cN(4313,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),Tl(4314,`code`),cN(4315,`columns`),ag(),cN(4316,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Tl(4317,`strong`),cN(4318,`Importante:`),ag()(),Tl(4319,`blockquote`)(4320,`p`),cN(4321,`Caso utilizar a propriedade `),Tl(4322,`code`),cN(4323,`optionsService`),ag(),cN(4324,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Tl(4325,`a`,75),cN(4326,`guia de API do PO UI`),ag(),cN(4327,`.`),ag()()()(),Tl(4328,`tr`,13)(4329,`td`,14)(4330,`div`,15)(4331,`span`,16),cN(4332,` secondInterval`),Gl(4333,`br`),ag()()(),Tl(4334,`td`,17)(4335,`code`,41),cN(4336,`number`),ag()(),Tl(4337,`td`,20)(4338,`em`)(4339,`strong`),cN(4340,`(opcional)`),ag()(),Tl(4341,`p`),cN(4342,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),ag()()(),Tl(4343,`tr`,13)(4344,`td`,14)(4345,`div`,15)(4346,`span`,16),cN(4347,` secret`),Gl(4348,`br`),ag()()(),Tl(4349,`td`,17)(4350,`code`,28),cN(4351,`boolean`),ag()(),Tl(4352,`td`,20)(4353,`em`)(4354,`strong`),cN(4355,`(opcional)`),ag()(),Tl(4356,`p`),cN(4357,`Esconde a informação estilo `),Tl(4358,`em`),cN(4359,`password`),ag(),cN(4360,`, pode ser utilizado quando o tipo de dado for `),Tl(4361,`em`),cN(4362,`string`),ag(),cN(4363,`.`),ag()()(),Tl(4364,`tr`,13)(4365,`td`,14)(4366,`div`,15)(4367,`span`,16),cN(4368,` showRequired`),Gl(4369,`br`),ag()()(),Tl(4370,`td`,17)(4371,`code`,28),cN(4372,`boolean`),ag()(),Tl(4373,`td`,20)(4374,`em`)(4375,`strong`),cN(4376,`(opcional)`),ag()(),Tl(4377,`p`),cN(4378,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(4379,`blockquote`)(4380,`p`),cN(4381,`Não será exibida a indicação se:`),ag()(),Tl(4382,`ul`)(4383,`li`),cN(4384,`Não possuir `),Tl(4385,`code`),cN(4386,`p-help`),ag(),cN(4387,` e/ou `),Tl(4388,`code`),cN(4389,`p-label`),ag(),cN(4390,`.`),ag()(),Tl(4391,`p`)(4392,`strong`),cN(4393,`Componentes compatíveis:`),ag(),Tl(4394,`code`),cN(4395,`po-datepicker`),ag(),cN(4396,`, `),Tl(4397,`code`),cN(4398,`po-datepicker-range`),ag(),cN(4399,`, `),Tl(4400,`code`),cN(4401,`po-timepicker`),ag(),cN(4402,`, `),Tl(4403,`code`),cN(4404,`po-input`),ag(),cN(4405,`, `),Tl(4406,`code`),cN(4407,`po-number`),ag(),cN(4408,`,
`),Tl(4409,`code`),cN(4410,`po-decimal`),ag(),cN(4411,`, `),Tl(4412,`code`),cN(4413,`po-select`),ag(),cN(4414,`, `),Tl(4415,`code`),cN(4416,`po-radio-group`),ag(),cN(4417,`, `),Tl(4418,`code`),cN(4419,`po-combo`),ag(),cN(4420,`, `),Tl(4421,`code`),cN(4422,`po-lookup`),ag(),cN(4423,`, `),Tl(4424,`code`),cN(4425,`po-checkbox-group`),ag(),cN(4426,`, `),Tl(4427,`code`),cN(4428,`po-multiselect`),ag(),cN(4429,`,
`),Tl(4430,`code`),cN(4431,`po-textarea`),ag(),cN(4432,`, `),Tl(4433,`code`),cN(4434,`po-password`),ag(),cN(4435,`, `),Tl(4436,`code`),cN(4437,`po-upload`),ag(),cN(4438,`.`),ag()()(),Tl(4439,`tr`,13)(4440,`td`,14)(4441,`div`,15)(4442,`span`,16),cN(4443,` showSeconds`),Gl(4444,`br`),ag()()(),Tl(4445,`td`,17)(4446,`code`,28),cN(4447,`boolean`),ag()(),Tl(4448,`td`,20)(4449,`em`)(4450,`strong`),cN(4451,`(opcional)`),ag()(),Tl(4452,`p`),cN(4453,`Exibe a coluna de segundos no painel do timepicker.`),ag()()(),Tl(4454,`tr`,13)(4455,`td`,14)(4456,`div`,15)(4457,`span`,16),cN(4458,` showThumbnail`),Gl(4459,`br`),ag()()(),Tl(4460,`td`,17)(4461,`code`,28),cN(4462,`boolean`),ag()(),Tl(4463,`td`,20)(4464,`em`)(4465,`strong`),cN(4466,`(opcional)`),ag()(),Tl(4467,`p`),cN(4468,`Exibe a pré-visualização de imagens ao anexá-las.`),ag(),Tl(4469,`blockquote`)(4470,`p`),cN(4471,`Propriedade funciona apenas em arquivos de formato de imagem (`),Tl(4472,`code`),cN(4473,`.png`),ag(),cN(4474,`, `),Tl(4475,`code`),cN(4476,`.jpg`),ag(),cN(4477,`, `),Tl(4478,`code`),cN(4479,`.jpeg`),ag(),cN(4480,` e `),Tl(4481,`code`),cN(4482,`.gif`),ag(),cN(4483,`).`),ag()(),Tl(4484,`p`)(4485,`strong`),cN(4486,`Componente compatível`),ag(),cN(4487,`: `),Tl(4488,`code`),cN(4489,`po-upload`),ag()()()(),Tl(4490,`tr`,13)(4491,`td`,14)(4492,`div`,15)(4493,`span`,16),cN(4494,` size`),Gl(4495,`br`),ag()()(),Tl(4496,`td`,17)(4497,`code`,18),cN(4498,`string`),ag()(),Tl(4499,`td`,20)(4500,`em`)(4501,`strong`),cN(4502,`(opcional)`),ag()(),Tl(4503,`p`),cN(4504,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),ag(),Tl(4505,`ul`)(4506,`li`)(4507,`code`),cN(4508,`small`),ag(),cN(4509,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ag(),Tl(4510,`li`)(4511,`code`),cN(4512,`medium`),ag(),cN(4513,`: aplica a medida medium de cada componente.`),ag(),Tl(4514,`li`)(4515,`code`),cN(4516,`large`),ag(),cN(4517,`: aplica a medida large de cada componente (disponível para `),Tl(4518,`code`),cN(4519,`po-checkbox`),ag(),cN(4520,` e `),Tl(4521,`code`),cN(4522,`po-radio-group`),ag(),cN(4523,`).`),Tl(4524,`blockquote`)(4525,`p`),cN(4526,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(4527,`code`),cN(4528,`medium`),ag(),cN(4529,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(4530,`a`,21),cN(4531,`po-theme`),ag(),cN(4532,`.`),ag()()()()()(),Tl(4533,`tr`,13)(4534,`td`,14)(4535,`div`,15)(4536,`span`,16),cN(4537,` sort`),Gl(4538,`br`),ag()()(),Tl(4539,`td`,17)(4540,`code`,28),cN(4541,`boolean`),ag()(),Tl(4542,`td`,20)(4543,`em`)(4544,`strong`),cN(4545,`(opcional)`),ag()(),Tl(4546,`p`),cN(4547,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),ag(),Tl(4548,`p`)(4549,`strong`),cN(4550,`Componentes compatíveis:`),ag(),Tl(4551,`code`),cN(4552,`po-combo`),ag(),cN(4553,`, po-multiselect`),ag()()(),Tl(4554,`tr`,13)(4555,`td`,14)(4556,`div`,15)(4557,`span`,16),cN(4558,` step`),Gl(4559,`br`),ag()()(),Tl(4560,`td`,17)(4561,`code`,41),cN(4562,`number`),ag()(),Tl(4563,`td`,20)(4564,`em`)(4565,`strong`),cN(4566,`(opcional)`),ag()(),Tl(4567,`p`),cN(4568,`Intervalo utilizado no `),Tl(4569,`code`),cN(4570,`po-number`),ag(),cN(4571,`.`),ag()()(),Tl(4572,`tr`,13)(4573,`td`,14)(4574,`div`,15)(4575,`span`,16),cN(4576,` thousandMaxlength`),Gl(4577,`br`),ag()()(),Tl(4578,`td`,17)(4579,`code`,41),cN(4580,`number`),ag()(),Tl(4581,`td`,20)(4582,`em`)(4583,`strong`),cN(4584,`(opcional)`),ag()(),Tl(4585,`p`),cN(4586,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),ag(),Tl(4587,`blockquote`)(4588,`p`),cN(4589,`Esta propriedade só pode ser utilizada quando o `),Tl(4590,`code`),cN(4591,`type`),ag(),cN(4592,` for `),Tl(4593,`em`),cN(4594,`currency`),ag(),cN(4595,` ou `),Tl(4596,`em`),cN(4597,`decimal`),ag(),cN(4598,`.`),ag()(),Tl(4599,`blockquote`)(4600,`p`),cN(4601,`Quando utilizado com `),Tl(4602,`code`),cN(4603,`displayFormat`),ag(),cN(4604,`, será respeitado o valor `),Tl(4605,`strong`),cN(4606,`mais restritivo`),ag(),cN(4607,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),ag()()()(),Tl(4608,`tr`,13)(4609,`td`,14)(4610,`div`,15)(4611,`span`,16),cN(4612,` type`),Gl(4613,`br`),ag()()(),Tl(4614,`td`,17)(4615,`code`,18),cN(4616,`string `),ag(),Tl(4617,`code`,81),cN(4618,` PoDynamicFieldType`),ag()(),Tl(4619,`td`,20)(4620,`em`)(4621,`strong`),cN(4622,`(opcional)`),ag()(),Tl(4623,`p`),cN(4624,`Tipo do valor campo.`),ag(),Tl(4625,`p`),cN(4626,`Valores válidos:`),ag(),Tl(4627,`ul`)(4628,`li`)(4629,`code`),cN(4630,`boolean`),ag(),cN(4631,`: Valores `),Tl(4632,`em`),cN(4633,`booleanos`),ag(),cN(4634,`.`),ag(),Tl(4635,`li`)(4636,`code`),cN(4637,`currency`),ag(),cN(4638,`: Valores monetários.`),ag(),Tl(4639,`li`)(4640,`code`),cN(4641,`decimal`),ag(),cN(4642,`: Valores decimais.`),ag(),Tl(4643,`li`)(4644,`code`),cN(4645,`date`),ag(),cN(4646,`: Valores de datas.`),Tl(4647,`ul`)(4648,`li`),cN(4649,`Aceita os tipos `),Tl(4650,`strong`),cN(4651,`string`),ag(),cN(4652,` e `),Tl(4653,`strong`),cN(4654,`Date`),ag(),cN(4655,` padr\xE3o do Javascript,
por exemplo: `),Tl(4656,`code`),cN(4657,`'2017-11-28'`),ag(),cN(4658,` ou `),Tl(4659,`code`),cN(4660,`new Date(2017, 10, 28)`),ag(),cN(4661,`.`),ag()()(),Tl(4662,`li`)(4663,`code`),cN(4664,`dateTime`),ag(),cN(4665,`: Valor de data com horário.`),Tl(4666,`ul`)(4667,`li`),cN(4668,`Aceita o tipo `),Tl(4669,`em`),cN(4670,`string`),ag(),cN(4671,` no formato `),Tl(4672,`strong`),cN(4673,`ISO-8601`),ag(),cN(4674,` extendido `),Tl(4675,`strong`),cN(4676,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),ag(),cN(4677,`
e o tipo `),Tl(4678,`strong`),cN(4679,`Date`),ag(),cN(4680,` padrão do Javascript, por exemplo: `),Tl(4681,`code`),cN(4682,`'2017-11-28T00:00:00-02:00'`),ag(),cN(4683,` ou `),Tl(4684,`code`),cN(4685,`new Date(2017, 10, 28)`),ag(),cN(4686,`.`),ag()()(),Tl(4687,`li`)(4688,`code`),cN(4689,`number`),ag(),cN(4690,`: Valores numéricos.`),ag(),Tl(4691,`li`)(4692,`code`),cN(4693,`string`),ag(),cN(4694,`: Textos.`),ag(),Tl(4695,`li`)(4696,`code`),cN(4697,`time`),ag(),cN(4698,`: Valor do horário.`),Tl(4699,`ul`)(4700,`li`),cN(4701,`Aceita o tipo `),Tl(4702,`strong`),cN(4703,`string`),ag(),cN(4704,` nos formatos `),Tl(4705,`strong`),cN(4706,`'HH:mm:ss'`),ag(),cN(4707,` ou `),Tl(4708,`strong`),cN(4709,`'HH:mm:ss.ffffff'`),ag(),cN(4710,`, por exemplo: `),Tl(4711,`code`),cN(4712,`'23:12:45'`),ag(),cN(4713,`.`),ag()()()()()(),Tl(4714,`tr`,13)(4715,`td`,14)(4716,`div`,15)(4717,`span`,16),cN(4718,` url`),Gl(4719,`br`),ag()()(),Tl(4720,`td`,17)(4721,`code`,18),cN(4722,`string`),ag()(),Tl(4723,`td`,20)(4724,`em`)(4725,`strong`),cN(4726,`(opcional)`),ag()(),Tl(4727,`p`),cN(4728,`URL que deve ser feita a requisição com os arquivos selecionados.`),ag(),Tl(4729,`p`)(4730,`strong`),cN(4731,`Componente compatível`),ag(),cN(4732,`: `),Tl(4733,`code`),cN(4734,`po-upload`),ag()()()(),Tl(4735,`tr`,13)(4736,`td`,14)(4737,`div`,15)(4738,`span`,16),cN(4739,` validate`),Gl(4740,`br`),ag()()(),Tl(4741,`td`,17)(4742,`code`,18),cN(4743,`string `),ag(),Tl(4744,`code`,29),cN(4745,` Function`),ag()(),Tl(4746,`td`,20)(4747,`em`)(4748,`strong`),cN(4749,`(opcional)`),ag()(),Tl(4750,`p`),cN(4751,`Função ou serviço para validar as `),Tl(4752,`strong`),cN(4753,`mudanças do campo`),ag(),cN(4754,`.`),ag(),Tl(4755,`ul`)(4756,`li`),cN(4757,`A propriedade aceita os seguintes tipos:`),ag()(),Tl(4758,`ul`)(4759,`li`)(4760,`strong`),cN(4761,`String`),ag(),cN(4762,`: Endpoint usado pelo componente para requisição via `),Tl(4763,`code`),cN(4764,`POST`),ag(),cN(4765,`.`),ag(),Tl(4766,`li`)(4767,`strong`),cN(4768,`Function`),ag(),cN(4769,`: Método que será executado.`),ag()(),Tl(4770,`p`),cN(4771,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Tl(4772,`code`),cN(4773,`PoDynamicFormFieldChanged`),ag(),cN(4774,`:`),ag(),Tl(4775,`p`)(4776,`code`),cN(4777,`{ property: 'property name', value: 'new value' }`),ag()(),Tl(4778,`p`),cN(4779,`O retorno desta função deve ser do tipo `),Tl(4780,`a`,82),cN(4781,`PoDynamicFormFieldValidation`),ag(),cN(4782,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),ag(),Tl(4783,`pre`)(4784,`code`),cN(4785,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),ag()(),Tl(4786,`p`),cN(4787,`Para referenciar a sua função utilize a propriedade `),Tl(4788,`code`),cN(4789,`bind`),ag(),cN(4790,`, por exemplo:
`),Tl(4791,`code`),cN(4792,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),ag()()()(),Tl(4793,`tr`,13)(4794,`td`,14)(4795,`div`,15)(4796,`span`,16),cN(4797,` visible`),Gl(4798,`br`),ag()()(),Tl(4799,`td`,17)(4800,`code`,28),cN(4801,`boolean`),ag()(),Tl(4802,`td`,20)(4803,`em`)(4804,`strong`),cN(4805,`(opcional)`),ag()(),Tl(4806,`p`),cN(4807,`Indica se o campo será visível.`),ag()()(),Tl(4808,`tr`,13)(4809,`td`,14)(4810,`div`,15)(4811,`span`,16),cN(4812,` yearRangeLimit`),Gl(4813,`br`),ag()()(),Tl(4814,`td`,17)(4815,`code`,41),cN(4816,`number`),ag()(),Tl(4817,`td`,20)(4818,`em`)(4819,`strong`),cN(4820,`(opcional)`),ag()(),Tl(4821,`p`),cN(4822,`Define o limite de anos exibidos na lista de anos do `),Tl(4823,`code`),cN(4824,`po-datepicker`),ag(),cN(4825,` nos modos `),Tl(4826,`code`),cN(4827,`month-year`),ag(),cN(4828,` e `),Tl(4829,`code`),cN(4830,`year`),ag(),cN(4831,`.`),ag()()()(),Tl(4832,`h4`,38)(4833,`code`,5),cN(4834,`PoDynamicFormLoad`),ag()(),Tl(4835,`div`,2)(4836,`p`),Gl(4837,`a`,83),ag(),Tl(4838,`p`),cN(4839,`Estrutura de retorno no carregamento do formulário.`),ag()(),Tl(4840,`h4`,9),cN(4841,`Propriedades`),ag(),Tl(4842,`table`,10)(4843,`tr`,11)(4844,`th`,12),cN(4845,`Nome`),ag(),Tl(4846,`th`,12),cN(4847,`Tipo`),ag(),Tl(4848,`th`,12),cN(4849,`Descrição`),ag()(),Tl(4850,`tr`,13)(4851,`td`,14)(4852,`div`,15)(4853,`span`,16),cN(4854,` fields`),Gl(4855,`br`),ag()()(),Tl(4856,`td`,17)(4857,`code`,22),cN(4858,`Array<PoDynamicFormField>`),ag()(),Tl(4859,`td`,20)(4860,`em`)(4861,`strong`),cN(4862,`(opcional)`),ag()(),Tl(4863,`p`),cN(4864,`Lista com as novas definições dos campos.`),ag(),Tl(4865,`blockquote`)(4866,`p`),cN(4867,`Não é necessário colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas.`),ag()()()(),Tl(4868,`tr`,13)(4869,`td`,14)(4870,`div`,15)(4871,`span`,16),cN(4872,` focus`),Gl(4873,`br`),ag()()(),Tl(4874,`td`,17)(4875,`code`,18),cN(4876,`string`),ag()(),Tl(4877,`td`,20)(4878,`em`)(4879,`strong`),cN(4880,`(opcional)`),ag()(),Tl(4881,`p`),cN(4882,`Nome do campo que receberá o foco.`),ag(),Tl(4883,`p`),cN(4884,`Exemplo:`),ag(),Tl(4885,`pre`)(4886,`code`),cN(4887,`focus: 'name'
`),ag()()()(),Tl(4888,`tr`,13)(4889,`td`,14)(4890,`div`,15)(4891,`span`,16),cN(4892,` value`),Gl(4893,`br`),ag()()(),Tl(4894,`td`,17)(4895,`code`,33),cN(4896,`any`),ag()(),Tl(4897,`td`,20)(4898,`em`)(4899,`strong`),cN(4900,`(opcional)`),ag()(),Tl(4901,`p`),cN(4902,`Objeto contendo os novos valores.`),ag(),Tl(4903,`p`),cN(4904,`Exemplo:`),ag(),Tl(4905,`pre`)(4906,`code`),cN(4907,`{
  name: 'new name',
  age: 10
}
`),ag()(),Tl(4908,`blockquote`)(4909,`p`),cN(4910,`Não é necessário colocar os valores de todos os campos, apenas os que foram alterados.`),ag()()()()(),Tl(4911,`h4`,38)(4912,`code`,5),cN(4913,`PoDynamicFormFieldChanged`),ag()(),Tl(4914,`div`,2)(4915,`p`),cN(4916,`Estrutura dos valores que serão disparados quando houver uma mudança em um campo ou no formulário.`),ag()(),Tl(4917,`h4`,9),cN(4918,`Propriedades`),ag(),Tl(4919,`table`,10)(4920,`tr`,11)(4921,`th`,12),cN(4922,`Nome`),ag(),Tl(4923,`th`,12),cN(4924,`Tipo`),ag(),Tl(4925,`th`,12),cN(4926,`Descrição`),ag()(),Tl(4927,`tr`,13)(4928,`td`,14)(4929,`div`,15)(4930,`span`,16),cN(4931,` property`),Gl(4932,`br`),ag()()(),Tl(4933,`td`,17)(4934,`code`,18),cN(4935,`string`),ag()(),Tl(4936,`td`,20)(4937,`p`),cN(4938,`Valor da propriedade do campo.`),ag()()(),Tl(4939,`tr`,13)(4940,`td`,14)(4941,`div`,15)(4942,`span`,16),cN(4943,` value`),Gl(4944,`br`),ag()()(),Tl(4945,`td`,17)(4946,`code`,33),cN(4947,`any`),ag()(),Tl(4948,`td`,20)(4949,`p`),cN(4950,`Novo valor do campo.`),ag()()()(),Tl(4951,`h4`,38)(4952,`code`,5),cN(4953,`PoDynamicFormFieldValidation`),ag()(),Tl(4954,`div`,2)(4955,`p`),Gl(4956,`a`,84),ag(),Tl(4957,`p`),cN(4958,`Estrutura de retorno da validação de um campo.`),ag()(),Tl(4959,`h4`,9),cN(4960,`Propriedades`),ag(),Tl(4961,`table`,10)(4962,`tr`,11)(4963,`th`,12),cN(4964,`Nome`),ag(),Tl(4965,`th`,12),cN(4966,`Tipo`),ag(),Tl(4967,`th`,12),cN(4968,`Descrição`),ag()(),Tl(4969,`tr`,13)(4970,`td`,14)(4971,`div`,15)(4972,`span`,16),cN(4973,` field`),Gl(4974,`br`),ag()()(),Tl(4975,`td`,17)(4976,`code`,85),cN(4977,`PoDynamicFormField`),ag()(),Tl(4978,`td`,20)(4979,`em`)(4980,`strong`),cN(4981,`(opcional)`),ag()(),Tl(4982,`p`),cN(4983,`Novas definições das propriedades do campo.`),ag(),Tl(4984,`blockquote`)(4985,`p`),cN(4986,`Não é necessário colocar todas as propriedades, apenas as que foram alteradas.`),ag()()()(),Tl(4987,`tr`,13)(4988,`td`,14)(4989,`div`,15)(4990,`span`,16),cN(4991,` focus`),Gl(4992,`br`),ag()()(),Tl(4993,`td`,17)(4994,`code`,28),cN(4995,`boolean`),ag()(),Tl(4996,`td`,20)(4997,`em`)(4998,`strong`),cN(4999,`(opcional)`),ag()(),Tl(5e3,`p`),cN(5001,`Coloca o foco no campo após a validação.`),ag()()(),Tl(5002,`tr`,13)(5003,`td`,14)(5004,`div`,15)(5005,`span`,16),cN(5006,` value`),Gl(5007,`br`),ag()()(),Tl(5008,`td`,17)(5009,`code`,33),cN(5010,`any`),ag()(),Tl(5011,`td`,20)(5012,`em`)(5013,`strong`),cN(5014,`(opcional)`),ag()(),Tl(5015,`p`),cN(5016,`Novo valor do campo`),ag()()()(),Tl(5017,`h4`,38)(5018,`code`,5),cN(5019,`PoDynamicFormValidation`),ag()(),Tl(5020,`div`,2)(5021,`p`),Gl(5022,`a`,86),ag(),Tl(5023,`p`),cN(5024,`Estrutura de retorno da validação do formulário.`),ag()(),Tl(5025,`h4`,9),cN(5026,`Propriedades`),ag(),Tl(5027,`table`,10)(5028,`tr`,11)(5029,`th`,12),cN(5030,`Nome`),ag(),Tl(5031,`th`,12),cN(5032,`Tipo`),ag(),Tl(5033,`th`,12),cN(5034,`Descrição`),ag()(),Tl(5035,`tr`,13)(5036,`td`,14)(5037,`div`,15)(5038,`span`,16),cN(5039,` fields`),Gl(5040,`br`),ag()()(),Tl(5041,`td`,17)(5042,`code`,22),cN(5043,`Array<PoDynamicFormField>`),ag()(),Tl(5044,`td`,20)(5045,`em`)(5046,`strong`),cN(5047,`(opcional)`),ag()(),Tl(5048,`p`),cN(5049,`Lista com as novas definições dos campos.`),ag(),Tl(5050,`blockquote`)(5051,`p`),cN(5052,`Não é necessário colocar todas as propriedades e campos, apenas as que foram alteradas.`),ag()()()(),Tl(5053,`tr`,13)(5054,`td`,14)(5055,`div`,15)(5056,`span`,16),cN(5057,` focus`),Gl(5058,`br`),ag()()(),Tl(5059,`td`,17)(5060,`code`,18),cN(5061,`string`),ag()(),Tl(5062,`td`,20)(5063,`em`)(5064,`strong`),cN(5065,`(opcional)`),ag()(),Tl(5066,`p`),cN(5067,`Nome do campo que receberá o foco.`),ag(),Tl(5068,`p`),cN(5069,`Exemplo:`),ag(),Tl(5070,`pre`)(5071,`code`),cN(5072,`focus: 'name'
`),ag()()()(),Tl(5073,`tr`,13)(5074,`td`,14)(5075,`div`,15)(5076,`span`,16),cN(5077,` value`),Gl(5078,`br`),ag()()(),Tl(5079,`td`,17)(5080,`code`,33),cN(5081,`any`),ag()(),Tl(5082,`td`,20)(5083,`em`)(5084,`strong`),cN(5085,`(opcional)`),ag()(),Tl(5086,`p`),cN(5087,`Objeto contendo os novos valores.`),ag(),Tl(5088,`p`),cN(5089,`Exemplo:`),ag(),Tl(5090,`pre`)(5091,`code`),cN(5092,`{
  name: 'new name',
  age: 10
}
`),ag()(),Tl(5093,`blockquote`)(5094,`p`),cN(5095,`Não é necessário colocar os valores de todos os campos, apenas os que foram alterados.`),ag()()()()(),Tl(5096,`h4`,38)(5097,`code`,5),cN(5098,`ErrorAsyncProperties`),ag()(),Tl(5099,`div`,2)(5100,`p`),cN(5101,`Interface para realizar uma validação assíncrona no componente.`),ag()(),Tl(5102,`h4`,9),cN(5103,`Propriedades`),ag(),Tl(5104,`table`,10)(5105,`tr`,11)(5106,`th`,12),cN(5107,`Nome`),ag(),Tl(5108,`th`,12),cN(5109,`Tipo`),ag(),Tl(5110,`th`,12),cN(5111,`Descrição`),ag()(),Tl(5112,`tr`,13)(5113,`td`,14)(5114,`div`,15)(5115,`span`,16),cN(5116,` errorAsync`),Gl(5117,`br`),ag()()(),Tl(5118,`td`,17)(5119,`code`,46),cN(5120,`(value) => Observable<boolean>`),ag()(),Tl(5121,`td`,20)(5122,`p`),cN(5123,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(5124,`code`),cN(5125,`change`),ag(),cN(5126,` ou `),Tl(5127,`code`),cN(5128,`change-model`),ag(),cN(5129,`, dependendo do valor da propriedade `),Tl(5130,`code`),cN(5131,`triggerMode`),ag(),cN(5132,`.`),ag()()(),Tl(5133,`tr`,13)(5134,`td`,14)(5135,`div`,15)(5136,`span`,16),cN(5137,` triggerMode`),Gl(5138,`br`),ag()()(),Tl(5139,`td`,17)(5140,`code`,87),cN(5141,`'change' `),ag(),Tl(5142,`code`,88),cN(5143,` 'changeModel'`),ag()(),Tl(5144,`td`,20)(5145,`em`)(5146,`strong`),cN(5147,`(opcional)`),ag()(),Tl(5148,`p`),cN(5149,`Controla se o método será executado no disparo do output `),Tl(5150,`code`),cN(5151,`change`),ag(),cN(5152,` ou `),Tl(5153,`code`),cN(5154,`change-model`),ag(),cN(5155,`.`),ag()()()(),Tl(5156,`h3`),cN(5157,`Enums`),ag(),Tl(5158,`h4`,4)(5159,`code`,5),cN(5160,`ForceBooleanComponentEnum`),ag()(),Tl(5161,`div`,2)(5162,`p`),cN(5163,`Enum para definição do tipo de componente a ser renderizado.`),ag()(),Tl(5164,`h4`,9),cN(5165,`Propriedades`),ag(),Tl(5166,`table`,10)(5167,`tr`,11)(5168,`th`,12),cN(5169,`Nome`),ag(),Tl(5170,`th`,12),cN(5171,`Descrição`),ag()(),Tl(5172,`tr`,13)(5173,`td`,14)(5174,`div`,15)(5175,`span`,16),cN(5176,` switch`),Gl(5177,`br`),ag()()(),Tl(5178,`td`,20)(5179,`p`),cN(5180,`Força a renderização de um po-switch`),ag()()(),Tl(5181,`tr`,13)(5182,`td`,14)(5183,`div`,15)(5184,`span`,16),cN(5185,` checkbox`),Gl(5186,`br`),ag()()(),Tl(5187,`td`,20)(5188,`p`),cN(5189,`Força a renderização de um po-checkbox`),ag()()()(),Tl(5190,`h4`,4)(5191,`code`,5),cN(5192,`ForceOptionComponentEnum`),ag()(),Tl(5193,`div`,2)(5194,`p`),cN(5195,`Enum para definição do tipo de componente a ser renderizado.`),ag()(),Tl(5196,`h4`,9),cN(5197,`Propriedades`),ag(),Tl(5198,`table`,10)(5199,`tr`,11)(5200,`th`,12),cN(5201,`Nome`),ag(),Tl(5202,`th`,12),cN(5203,`Descrição`),ag()(),Tl(5204,`tr`,13)(5205,`td`,14)(5206,`div`,15)(5207,`span`,16),cN(5208,` radioGroup`),Gl(5209,`br`),ag()()(),Tl(5210,`td`,20)(5211,`p`),cN(5212,`Força a renderização de um po-radio-group independente da quantidade do opções`),ag()()(),Tl(5213,`tr`,13)(5214,`td`,14)(5215,`div`,15)(5216,`span`,16),cN(5217,` select`),Gl(5218,`br`),ag()()(),Tl(5219,`td`,20)(5220,`p`),cN(5221,`Força a renderização de um po-select independente da quantidade do opções`),ag()()()(),Tl(5222,`h4`,4)(5223,`code`,5),cN(5224,`PoDynamicFieldType`),ag()(),Tl(5225,`div`,2)(5226,`p`),cN(5227,`Enum para definição do tipo de campo que será criado dinamicamente.`),ag()(),Tl(5228,`h4`,9),cN(5229,`Propriedades`),ag(),Tl(5230,`table`,10)(5231,`tr`,11)(5232,`th`,12),cN(5233,`Nome`),ag(),Tl(5234,`th`,12),cN(5235,`Descrição`),ag()(),Tl(5236,`tr`,13)(5237,`td`,14)(5238,`div`,15)(5239,`span`,16),cN(5240,` Boolean`),Gl(5241,`br`),ag()()(),Tl(5242,`td`,20)(5243,`p`),cN(5244,`Valor booleano.`),ag()()(),Tl(5245,`tr`,13)(5246,`td`,14)(5247,`div`,15)(5248,`span`,16),cN(5249,` Currency`),Gl(5250,`br`),ag()()(),Tl(5251,`td`,20)(5252,`p`),cN(5253,`Valor numérico que contém casas decimais e milhar.`),ag()()(),Tl(5254,`tr`,13)(5255,`td`,14)(5256,`div`,15)(5257,`span`,16),cN(5258,` Decimal`),Gl(5259,`br`),ag()()(),Tl(5260,`td`,20)(5261,`p`),cN(5262,`Valor numérico que contém casas decimais e milhar.`),ag()()(),Tl(5263,`tr`,13)(5264,`td`,14)(5265,`div`,15)(5266,`span`,16),cN(5267,` Date`),Gl(5268,`br`),ag()()(),Tl(5269,`td`,20)(5270,`p`),cN(5271,`Valor para data.`),ag()()(),Tl(5272,`tr`,13)(5273,`td`,14)(5274,`div`,15)(5275,`span`,16),cN(5276,` DateTime`),Gl(5277,`br`),ag()()(),Tl(5278,`td`,20)(5279,`p`),cN(5280,`Valor para data e hora.`),ag()()(),Tl(5281,`tr`,13)(5282,`td`,14)(5283,`div`,15)(5284,`span`,16),cN(5285,` Time`),Gl(5286,`br`),ag()()(),Tl(5287,`td`,20)(5288,`p`),cN(5289,`Utilizado para informar/exibir hora.`),ag()()(),Tl(5290,`tr`,13)(5291,`td`,14)(5292,`div`,15)(5293,`span`,16),cN(5294,` Number`),Gl(5295,`br`),ag()()(),Tl(5296,`td`,20)(5297,`p`),cN(5298,`Valor numérico.`),ag()()(),Tl(5299,`tr`,13)(5300,`td`,14)(5301,`div`,15)(5302,`span`,16),cN(5303,` String`),Gl(5304,`br`),ag()()(),Tl(5305,`td`,20)(5306,`p`),cN(5307,`Texto.`),ag()()(),Tl(5308,`tr`,13)(5309,`td`,14)(5310,`div`,15)(5311,`span`,16),cN(5312,` Upload`),Gl(5313,`br`),ag()()(),Tl(5314,`td`,20)(5315,`p`),cN(5316,`Utilizado para fazer uploads de arquivos.`),ag()()()(),Tl(5317,`h4`,4)(5318,`code`,5),cN(5319,`PoTimepickerModelFormat`),ag()(),Tl(5320,`div`,2)(5321,`p`)(5322,`em`),cN(5323,`Enum`),ag(),cN(5324,` que define o padrão de formatação do model de saída do timepicker.`),ag()(),Tl(5325,`h4`,9),cN(5326,`Propriedades`),ag(),Tl(5327,`table`,10)(5328,`tr`,11)(5329,`th`,12),cN(5330,`Nome`),ag(),Tl(5331,`th`,12),cN(5332,`Descrição`),ag()(),Tl(5333,`tr`,13)(5334,`td`,14)(5335,`div`,15)(5336,`span`,16),cN(5337,` HourMinute`),Gl(5338,`br`),ag()()(),Tl(5339,`td`,20)(5340,`p`),cN(5341,`Formato básico `),Tl(5342,`code`),cN(5343,`HH:mm`),ag(),cN(5344,` (ex: `),Tl(5345,`code`),cN(5346,`14:30`),ag(),cN(5347,`).`),ag()()(),Tl(5348,`tr`,13)(5349,`td`,14)(5350,`div`,15)(5351,`span`,16),cN(5352,` HourMinuteSecond`),Gl(5353,`br`),ag()()(),Tl(5354,`td`,20)(5355,`p`),cN(5356,`Formato com segundos `),Tl(5357,`code`),cN(5358,`HH:mm:ss`),ag(),cN(5359,` (ex: `),Tl(5360,`code`),cN(5361,`14:30:00`),ag(),cN(5362,`).`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var fe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(w(Xn),w(Cn))};static ɵcmp=Un({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Dynamic Form`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,r){a&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return r.changeTab(`doc`)}),Gl(3,`sample-po-dynamic-form-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return r.changeTab(`web`)}),Gl(5,`sample-po-dynamic-form-basic-view`)(6,`sample-po-dynamic-form-register-view`)(7,`sample-po-dynamic-form-container-view`),ag()()()),a&2&&(nw(`p-actions`,r.actions),jp(2),nw(`p-active`,r.activeTab===`doc`),jp(2),nw(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,$,te,ne,oe],encapsulation:2,changeDetection:1})}return o})()}];var re=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[bL.forChild(fe),bL]})}return o})();var rt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[ar,re]})}return o})();export{rt as DocPoDynamicFormModule};