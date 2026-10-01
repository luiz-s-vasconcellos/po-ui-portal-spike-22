import{t as r}from"./chunk-zystk1pz.js";import{Di as he,Dt as aae,Hn as AN,Li as kL,Nt as doe,Qi as pt,Rr as Qn,Sa as zO,Sr as Kc,Tn as vze,Un as Ac,Vr as RN,Wi as mg,Yn as Bx,ai as aN,b as Au,ci as be,dr as Hp,ei as Xc,en as ni,fa as vN,ga as wn,gn as tae,hi as e_,i as _a,ii as Zx,ki as ho,la as ug,li as cE,lr as Hn,pr as I,qt as kae,r as Ta,rr as E,sa as ue,vi as f,vr as Jv,xi as fo}from"./main-LIMZAZLW.js";var me=()=>({property:`name`,required:!0,showRequired:!0});var le=o=>[o];var G=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-form-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-fields`]],template:function(a,r){a&1&&Kc(0,`po-dynamic-form`,0),a&2&&cE(`p-fields`,AN(2,le,RN(1,me)))},dependencies:[doe],encapsulation:2,changeDetection:1})}return o})();var pe=o=>({"docs-sample-code-tabs":o});var $=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-form-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Dynamic Form Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return r.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-dynamic-form-basic`),ug(),Kc(23,`hr`)),a&2&&(Hp(5),aN(`po-icon `+r.sampleCodeButtonIcon),Hp(),mg(` `,r.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,pe,r.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,G],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{getCity(m){switch(m){case 1:return[{city:`Palhoça`,code:5},{city:`Lages`,code:6},{city:`Balneário Camboriú`,code:7},{city:`Brusque`,code:8}];case 2:return[{city:`São Paulo`,code:9},{city:`Guarulhos`,code:10},{city:`Campinas`,code:11},{city:`São Bernardo do Campo`,code:12}];case 3:return[{city:`Rio de Janeiro`,code:13},{city:`São Gonçalo`,code:14},{city:`Duque de Caxias`,code:15},{city:`Nova Iguaçu`,code:16}];case 4:return[{city:`Belo Horizonte`,code:17},{city:`Uberlândia`,code:18},{city:`Contagem`,code:19},{city:`Juiz de Fora`,code:20}]}return[]}getUserDocument(m){return{fields:[m.isJuridicPerson?{property:`cnpj`,visible:!0}:{property:`cpf`,visible:!0}]}}static ɵfac=function(a){return new(a||o)};static ɵprov=I({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var ce=[`dynamicForm`];var ee=(()=>{class o{poNotification=f(Au);registerService=f(U);dynamicForm;person={};validateFields=[`state`];fields=[{property:`name`,divider:`PERSONAL DATA`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,divider:`CONTACTS`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6},{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`},{property:`vacation`,type:`date`,divider:`Work data`,range:!0,gridColumns:5,gridSmColumns:12},{property:`entryTime`,label:`Entry time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`exitTime`,label:`Exit time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`wage`,type:`currency`,gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,displayFormat:`>>>,>>>,>>9.99`,icon:`an an-currency-circle-dollar`},{property:`employeeCode`,label:`Employee code`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`999`,decimalsLength:0},{property:`overtime`,label:`Overtime hours`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`>>9.9<<`,decimalsLength:3,optional:!0},{property:`hobbies`,divider:`MORE INFO`,gridColumns:6,gridSmColumns:12,optional:!0,options:[`Soccer`,`Basketball`,`Bike`,`Yoga`,`Travel`,`Run`],optionsMulti:!0},{property:`favoriteHero`,gridColumns:6,gridSmColumns:12,label:`Favorite hero`,optional:!0,searchService:`https://po-sample-api.onrender.com/v1/heroes`,columns:[{property:`nickname`,label:`Hero`},{property:`label`,label:`Name`}],format:[`id`,`nickname`],fieldLabel:`nickname`,fieldValue:`email`},{property:`partner`,gridColumns:6,gridSmColumns:12,optionsService:`https://po-sample-api.onrender.com/v1/people`,fieldLabel:`name`,fieldValue:`id`,optional:!0},{property:`videogame`,gridColumns:6,gridSmColumns:12,label:`Video game console`,optional:!0,fieldValue:`code`,fieldLabel:`console`,options:[{console:`Nintendo Wii U`,code:`NWU`},{console:`Playstation 4`,code:`PS4`},{console:`Xbox One`,code:`XONE`},{console:`Nintendo Switch`,code:`NSW`},{console:`Playstation 5`,code:`PS5`},{console:`Xbox Series S|X`,code:`XSSX`}],optionsMulti:!0},{property:`agree`,gridColumns:12,label:`Do you agree?`,type:`boolean`,forceBooleanComponentType:kae.checkbox},{property:`image`,type:`upload`,gridColumns:12,gridSmColumns:12,label:`Upload your background`,optional:!0,url:`https://po-sample-api.onrender.com/v1/uploads/addFile`}];ngOnInit(){this.person={name:`Tony Stark`,birthday:`1970-05-29`,isJuridicPerson:!1,videogame:[`PS4`,`NSW`,`XSSX`],rememberSecretKey:`no`,status:`active`}}onChangeFields(m){return setTimeout(()=>{let a=this.registerService.getCity(m.value.state);this.updateDynamicFormField(`city`,{options:a,loading:!1})},500),{value:{city:void 0},fields:[{property:`city`,gridColumns:6,disabled:!1,loading:!0}]}}onLoadFields(m){return this.registerService.getUserDocument(m)}updateDynamicFormField(m,a){let r$1=this.dynamicForm?.fields??this.fields,l=r$1.findIndex(O=>O.property===m);l>=0&&(r$1[l]=r(r({},r$1[l]),a),this.fields=[...r$1])}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-form-register`]],viewQuery:function(a,r){if(a&1&&Xc(ce,7),a&2){let l;fo(l=ho())&&(r.dynamicForm=l.first)}},standalone:!1,features:[be([U])],decls:5,vars:6,consts:[[`dynamicForm`,``],[`p-auto-focus`,`name`,3,`p-fields`,`p-load`,`p-validate`,`p-validate-fields`,`p-value`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(a,r){if(a&1){let l=Bx();Kc(0,`po-dynamic-form`,1,0)(2,`br`),Ac(3,`div`,2)(4,`po-button`,3),pt(`p-click`,function(){Jv(l);let I=Zx(1);return r.poNotification.success(`Data saved successfully!`),e_(I.form.reset())}),ug()()}if(a&2){let l=Zx(1);cE(`p-fields`,r.fields)(`p-load`,r.onLoadFields.bind(r))(`p-validate`,r.onChangeFields.bind(r))(`p-validate-fields`,r.validateFields)(`p-value`,r.person),Hp(4),cE(`p-disabled`,l?.form.invalid)}},dependencies:[ni,doe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o});var te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-form-register-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Dynamic Form - Register`),ug(),Ac(4,`a`,2),pt(`click`,function(){return r.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-dynamic-form
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable } from '@angular/core';

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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-dynamic-form-register`),ug(),Kc(27,`hr`)),a&2&&(Hp(5),aN(`po-icon `+r.sampleCodeButtonIcon),Hp(),mg(` `,r.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ee,r.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ee],encapsulation:2,changeDetection:1})}return o})();var K=(()=>{class o{getCity(m){switch(m){case 1:return[{city:`Palhoça`,code:5},{city:`Lages`,code:6},{city:`Balneário Camboriú`,code:7},{city:`Brusque`,code:8}];case 2:return[{city:`São Paulo`,code:9},{city:`Guarulhos`,code:10},{city:`Campinas`,code:11},{city:`São Bernardo do Campo`,code:12}];case 3:return[{city:`Rio de Janeiro`,code:13},{city:`São Gonçalo`,code:14},{city:`Duque de Caxias`,code:15},{city:`Nova Iguaçu`,code:16}];case 4:return[{city:`Belo Horizonte`,code:17},{city:`Uberlândia`,code:18},{city:`Contagem`,code:19},{city:`Juiz de Fora`,code:20}]}return[]}getUserDocument(m){return{fields:[m.isJuridicPerson?{property:`cnpj`,visible:!0}:{property:`cpf`,visible:!0}]}}static ɵfac=function(a){return new(a||o)};static ɵprov=I({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Se=[`dynamicForm`];var ie=(()=>{class o{poNotification=f(Au);registerService=f(K);dynamicForm;person={};validateFields=[`state`];fields=[{property:`name`,container:`PERSONAL DATA`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`,keydown:this.onKeyDown.bind(this,`birthday`)},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`,keydown:this.onKeyDown.bind(this,`secretKey`)},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,container:`CONTACTS`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6},{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`},{property:`vacation`,type:`date`,container:`Work data`,range:!0,gridColumns:5,gridSmColumns:12,help:`Enter or select a valid date range.`,additionalHelpTooltip:`Ensure the start date is earlier than or equal to the end date.`,keydown:this.onKeyDown.bind(this,`vacation`)},{property:`entryTime`,label:`Entry time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`exitTime`,label:`Exit time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`wage`,type:`currency`,gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,displayFormat:`>>>,>>>,>>9.99`,icon:`an an-currency-circle-dollar`},{property:`revenue`,label:`Revenue`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`->>,>,>>>,>>9`,decimalsLength:0},{property:`adjustment`,label:`Adjustment`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`->>9.99`,optional:!0},{property:`hobbies`,container:`MORE INFO`,gridColumns:6,gridSmColumns:12,optional:!0,options:[`Soccer`,`Basketball`,`Bike`,`Yoga`,`Travel`,`Run`],optionsMulti:!0,listboxControlPosition:`top`},{property:`favoriteHero`,gridColumns:6,gridSmColumns:12,label:`Favorite hero`,optional:!0,searchService:`https://po-sample-api.onrender.com/v1/heroes`,columns:[{property:`nickname`,label:`Hero`},{property:`label`,label:`Name`}],format:[`id`,`nickname`],fieldLabel:`nickname`,fieldValue:`email`},{property:`partner`,gridColumns:6,gridSmColumns:12,optionsService:`https://po-sample-api.onrender.com/v1/people`,fieldLabel:`name`,fieldValue:`id`,optional:!0,listboxControlPosition:`top`},{property:`videogame`,gridColumns:6,gridSmColumns:12,label:`Video game console`,optional:!0,fieldValue:`code`,fieldLabel:`console`,options:[{console:`Nintendo Wii U`,code:`NWU`},{console:`Playstation 4`,code:`PS4`},{console:`Xbox One`,code:`XONE`},{console:`Nintendo Switch`,code:`NSW`},{console:`Playstation 5`,code:`PS5`},{console:`Xbox Series S|X`,code:`XSSX`}],optionsMulti:!0,listboxControlPosition:`top`},{property:`agree`,gridColumns:12,label:`Do you agree?`,type:`boolean`,forceBooleanComponentType:kae.checkbox},{property:`image`,type:`upload`,gridColumns:12,gridSmColumns:12,label:`Upload your background`,optional:!0,url:`https://po-sample-api.onrender.com/v1/uploads/addFile`,customAction:{icon:`an an-download`,visible:!0},customActionClick:m=>{console.log(`Iniciar download para o arquivo:`,m.name)}}];ngOnInit(){this.person={name:`Tony Stark`,birthday:`1970-05-29`,isJuridicPerson:!1,videogame:[`PS4`,`NSW`,`XSSX`],rememberSecretKey:`no`,status:`active`}}onChangeFields(m){return{value:{city:void 0},fields:[{property:`city`,gridColumns:6,options:this.registerService.getCity(m.value.state),disabled:!1}]}}onKeyDown(m,a){a.code===`F9`&&this.dynamicForm.showAdditionalHelp(m)}onLoadFields(m){return this.registerService.getUserDocument(m)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-form-container`]],viewQuery:function(a,r){if(a&1&&Xc(Se,7),a&2){let l;fo(l=ho())&&(r.dynamicForm=l.first)}},standalone:!1,features:[be([K])],decls:5,vars:6,consts:[[`dynamicForm`,``],[`p-auto-focus`,`name`,3,`p-fields`,`p-load`,`p-validate`,`p-validate-fields`,`p-value`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(a,r){if(a&1){let l=Bx();Kc(0,`po-dynamic-form`,1,0)(2,`br`),Ac(3,`div`,2)(4,`po-button`,3),pt(`p-click`,function(){Jv(l);let I=Zx(1);return r.poNotification.success(`Data saved successfully!`),e_(I.form.reset())}),ug()()}if(a&2){let l=Zx(1);cE(`p-fields`,r.fields)(`p-load`,r.onLoadFields.bind(r))(`p-validate`,r.onChangeFields.bind(r))(`p-validate-fields`,r.validateFields)(`p-value`,r.person),Hp(4),cE(`p-disabled`,l?.form.invalid)}},dependencies:[ni,doe],encapsulation:2,changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o});var ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-form-container-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Dynamic Form - Container`),ug(),Ac(4,`a`,2),pt(`click`,function(){return r.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-dynamic-form
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts`),ug(),Ac(23,`pre`,9),vN(24,`import { Injectable } from '@angular/core';

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
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-dynamic-form-container`),ug(),Kc(27,`hr`)),a&2&&(Hp(5),aN(`po-icon `+r.sampleCodeButtonIcon),Hp(),mg(` `,r.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ge,r.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ie],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Hn({type:o,selectors:[[`sample-po-dynamic-form-doc`]],standalone:!1,decls:5363,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[1,`language-ts`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-load`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-validation`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`any`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-javascript`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`id`,`po-dynamic-form-load`],[`id`,`po-dynamic-form-field-validation`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFormField`],[`id`,`po-dynamic-form-validation`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(a,r){a&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoDynamicModule } from '@po-ui/ng-components';`),ug()(),Kc(4,`div`,2),Ac(5,`h3`,3),vN(6,`Componente`),ug(),Ac(7,`h4`,4)(8,`code`,5),vN(9,`PoDynamicFormComponent`),ug()(),Ac(10,`div`,2)(11,`p`),vN(12,`Componente para criação de formulários dinâmicos a partir de uma lista de objetos.`),ug(),Ac(13,`p`),vN(14,`Também é possível verificar se o formulário está válido e informar valores para a exibição de informações. `),ug()(),Ac(15,`div`,6)(16,`h4`,7),vN(17,`Seletor`),ug(),Ac(18,`pre`,8),vN(19,`<po-dynamic-form
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
`),ug()(),Ac(20,`h4`,9),vN(21,`Propriedades`),ug(),Ac(22,`table`,10)(23,`tr`,11)(24,`th`,12),vN(25,`Nome`),ug(),Ac(26,`th`,12),vN(27,`Tipo`),ug(),Ac(28,`th`,12),vN(29,`Padrão`),ug(),Ac(30,`th`,12),vN(31,`Descrição`),ug()(),Ac(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),vN(36,` p-auto-focus`),Kc(37,`br`),ug()()(),Ac(38,`td`,17)(39,`code`,18),vN(40,`string`),ug()(),Ac(41,`td`,19),vN(42,`-`),ug(),Ac(43,`td`,20)(44,`em`)(45,`strong`),vN(46,`(opcional)`),ug()(),Ac(47,`p`),vN(48,`Nome da propriedade, atribuída ao `),Ac(49,`code`),vN(50,`PoDynamicFormField.property`),ug(),vN(51,`, que iniciará o campo com foco.`),ug()()(),Ac(52,`tr`,13)(53,`td`,14)(54,`div`,15)(55,`span`,16),vN(56,` p-components-size`),Kc(57,`br`),ug()()(),Ac(58,`td`,17)(59,`code`,18),vN(60,`string`),ug()(),Ac(61,`td`,19)(62,`p`)(63,`code`),vN(64,`medium`),ug()()(),Ac(65,`td`,20)(66,`em`)(67,`strong`),vN(68,`(opcional)`),ug()(),Ac(69,`p`),vN(70,`Define o tamanho dos componentes de formulário no template:`),ug(),Ac(71,`ul`)(72,`li`)(73,`code`),vN(74,`small`),ug(),vN(75,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(76,`li`)(77,`code`),vN(78,`medium`),ug(),vN(79,`: aplica a medida medium de cada componente.`),ug()(),Ac(80,`blockquote`)(81,`p`),vN(82,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(83,`code`),vN(84,`medium`),ug(),vN(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(86,`a`,21),vN(87,`po-theme`),ug(),vN(88,`.`),ug()()()(),Ac(89,`tr`,13)(90,`td`,14)(91,`div`,15)(92,`span`,16),vN(93,` p-fields`),Kc(94,`br`),ug()()(),Ac(95,`td`,17)(96,`code`,22),vN(97,`Array<PoDynamicFormField>`),ug()(),Ac(98,`td`,19)(99,`p`)(100,`code`),vN(101,`[]`),ug()()(),Ac(102,`td`,20)(103,`p`),vN(104,`Coleção de objetos que implementam a interface `),Ac(105,`code`),vN(106,`PoDynamicFormField`),ug(),vN(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),ug(),Ac(108,`blockquote`)(109,`p`),vN(110,`Ex: `),Ac(111,`code`),vN(112,`[ { property: 'name' } ]`),ug()()(),Ac(113,`p`),vN(114,`Regras de tipagem e criação dos componentes:`),ug(),Ac(115,`ul`)(116,`li`),vN(117,`Caso o `),Ac(118,`em`),vN(119,`type`),ug(),vN(120,` informado seja `),Ac(121,`em`),vN(122,`boolean`),ug(),vN(123,` o componente criado será o `),Ac(124,`code`),vN(125,`po-switch`),ug(),vN(126,`.`),ug(),Ac(127,`li`),vN(128,`Caso o `),Ac(129,`em`),vN(130,`type`),ug(),vN(131,` informado seja `),Ac(132,`em`),vN(133,`currency`),ug(),vN(134,` e não seja informado um `),Ac(135,`em`),vN(136,`mask`),ug(),vN(137,` ou `),Ac(138,`em`),vN(139,`pattern`),ug(),vN(140,` o componente criado será o `),Ac(141,`code`),vN(142,`po-decimal`),ug(),vN(143,`,
caso seja informado um `),Ac(144,`em`),vN(145,`mask`),ug(),vN(146,` ou `),Ac(147,`em`),vN(148,`pattern`),ug(),vN(149,` o componente criado será o `),Ac(150,`code`),vN(151,`po-input`),ug(),vN(152,`.`),ug(),Ac(153,`li`),vN(154,`Caso o `),Ac(155,`em`),vN(156,`type`),ug(),vN(157,` informado seja `),Ac(158,`em`),vN(159,`number`),ug(),vN(160,` e não seja informado um `),Ac(161,`em`),vN(162,`mask`),ug(),vN(163,` ou `),Ac(164,`em`),vN(165,`pattern`),ug(),vN(166,` o componente criado será o `),Ac(167,`code`),vN(168,`po-number`),ug(),vN(169,`, caso seja
informado um `),Ac(170,`em`),vN(171,`mask`),ug(),vN(172,` ou `),Ac(173,`em`),vN(174,`pattern`),ug(),vN(175,` o componente criado será o `),Ac(176,`code`),vN(177,`po-input`),ug(),vN(178,`.`),ug(),Ac(179,`li`),vN(180,`Caso a lista possua a propriedade `),Ac(181,`code`),vN(182,`options`),ug(),vN(183,` e a mesma possua até 3 itens o componente criado será o `),Ac(184,`code`),vN(185,`po-radio-group`),ug(),vN(186,`
ou `),Ac(187,`code`),vN(188,`po-checkbox-group`),ug(),vN(189,` se informar a propriedade `),Ac(190,`code`),vN(191,`optionsMulti`),ug(),vN(192,`.`),ug(),Ac(193,`li`),vN(194,`Caso a mesma possua 3 ou mais itens, será criado o componente `),Ac(195,`code`),vN(196,`po-select`),ug(),vN(197,` ou, `),Ac(198,`code`),vN(199,`po-multiselect`),ug(),vN(200,` se a propriedade `),Ac(201,`code`),vN(202,`optionsMulti`),ug(),vN(203,`
for verdadeira.`),ug(),Ac(204,`li`),vN(205,`Caso o `),Ac(206,`em`),vN(207,`type`),ug(),vN(208,` informado seja `),Ac(209,`em`),vN(210,`date`),ug(),vN(211,` ou `),Ac(212,`em`),vN(213,`datetime`),ug(),vN(214,` o componente criado será o `),Ac(215,`code`),vN(216,`po-datepicker`),ug(),vN(217,`.`),ug(),Ac(218,`li`),vN(219,`Caso seja informado a propriedade `),Ac(220,`code`),vN(221,`optionsService`),ug(),vN(222,` o componente criado será o `),Ac(223,`code`),vN(224,`po-combo`),ug(),vN(225,`.`),ug(),Ac(226,`li`),vN(227,`Caso o `),Ac(228,`em`),vN(229,`type`),ug(),vN(230,` informado seja `),Ac(231,`em`),vN(232,`time`),ug(),vN(233,` o componente criado será um `),Ac(234,`code`),vN(235,`po-input`),ug(),vN(236,` podendo receber um `),Ac(237,`em`),vN(238,`mask`),ug(),vN(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),Ac(240,`em`),vN(241,`mask`),ug(),vN(242,` o componente será criado com a máscara '99:99' por padrão.`),ug(),Ac(243,`li`),vN(244,`Caso a lista possua a propriedade `),Ac(245,`code`),vN(246,`rows`),ug(),vN(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),Ac(248,`code`),vN(249,`po-textarea`),ug(),vN(250,`, caso o valor da propriedade `),Ac(251,`code`),vN(252,`rows`),ug(),vN(253,` seja menor que 3 o componente criado será o `),Ac(254,`code`),vN(255,`po-input`),ug(),vN(256,`.`),ug(),Ac(257,`li`),vN(258,`Caso seja informada a propriedade `),Ac(259,`code`),vN(260,`secret`),ug(),vN(261,` o componente criado será o `),Ac(262,`code`),vN(263,`po-password`),ug(),vN(264,`.`),ug(),Ac(265,`li`),vN(266,`Caso o `),Ac(267,`em`),vN(268,`type`),ug(),vN(269,` informado seja `),Ac(270,`em`),vN(271,`string`),ug(),vN(272,` o componente criado será o `),Ac(273,`code`),vN(274,`po-input`),ug(),vN(275,`.`),Ac(276,`blockquote`)(277,`p`),vN(278,`Ao alterar o valor das `),Ac(279,`code`),vN(280,`properties`),ug(),vN(281,`, visibilidade e/ou agrupamentos via container, os `),Ac(282,`code`),vN(283,`fields`),ug(),vN(284,` que utilizam serviço podem refazer as chamadas para as API's.`),ug()()()()()(),Ac(285,`tr`,13)(286,`td`,14)(287,`div`,23)(288,`span`,24),vN(289,` (p-form)`),Kc(290,`br`),ug()()(),Ac(291,`td`,17)(292,`code`,25),vN(293,`EventEmitter`),ug()(),Ac(294,`td`,19),vN(295,`-`),ug(),Ac(296,`td`,20)(297,`em`)(298,`strong`),vN(299,`(opcional)`),ug()(),Ac(300,`p`),vN(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),ug(),Ac(302,`p`),vN(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),Ac(304,`em`),vN(305,`template reference`),ug(),vN(306,` e através do `),Ac(307,`em`),vN(308,`output`),ug(),vN(309,`, veja os exemplos abaixo:`),ug(),Ac(310,`blockquote`)(311,`p`)(312,`em`),vN(313,`template reference`),ug()()(),Ac(314,`pre`)(315,`code`,26),vN(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),ug()(),Ac(317,`blockquote`)(318,`p`)(319,`em`),vN(320,`Output`),ug()()(),Ac(321,`pre`)(322,`code`,26),vN(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),ug()(),Ac(324,`pre`)(325,`code`,27),vN(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),ug()(),Ac(327,`blockquote`)(328,`p`),vN(329,`Caso a propriedade `),Ac(330,`code`),vN(331,`p-group-form`),ug(),vN(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),ug()()()(),Ac(333,`tr`,13)(334,`td`,14)(335,`div`,15)(336,`span`,16),vN(337,` p-group-form`),Kc(338,`br`),ug()()(),Ac(339,`td`,17)(340,`code`,28),vN(341,`boolean`),ug()(),Ac(342,`td`,19),vN(343,`-`),ug(),Ac(344,`td`,20)(345,`em`)(346,`strong`),vN(347,`(opcional)`),ug()(),Ac(348,`p`),vN(349,`Ao informar esta propriedade, o componente passará a utilizar o formulário pai para criar os `),Ac(350,`code`),vN(351,`FormControl`),ug(),vN(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),ug(),Ac(353,`pre`)(354,`code`,26),vN(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),ug()()()(),Ac(356,`tr`,13)(357,`td`,14)(358,`div`,15)(359,`span`,16),vN(360,` p-load`),Kc(361,`br`),ug()()(),Ac(362,`td`,17)(363,`code`,18),vN(364,`string `),ug(),Ac(365,`code`,29),vN(366,` Function`),ug()(),Ac(367,`td`,19),vN(368,`-`),ug(),Ac(369,`td`,20)(370,`em`)(371,`strong`),vN(372,`(opcional)`),ug()(),Ac(373,`p`),vN(374,`Função ou serviço que será executado na inicialização do componente.`),ug(),Ac(375,`p`),vN(376,`A propriedade aceita os seguintes tipos:`),ug(),Ac(377,`ul`)(378,`li`)(379,`code`),vN(380,`string`),ug(),vN(381,`: `),Ac(382,`em`),vN(383,`Endpoint`),ug(),vN(384,` usado pelo componente para requisição via `),Ac(385,`code`),vN(386,`POST`),ug(),vN(387,`.`),ug(),Ac(388,`li`)(389,`code`),vN(390,`function`),ug(),vN(391,`: Método que será executado.`),ug()(),Ac(392,`p`),vN(393,`Ao ser executado, irá receber como parâmetro o objeto informado no `),Ac(394,`code`),vN(395,`p-value`),ug(),vN(396,`.`),ug(),Ac(397,`p`),vN(398,`O retorno desta função deve ser do tipo `),Ac(399,`a`,30),vN(400,`PoDynamicFormLoad`),ug(),vN(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),ug(),Ac(402,`p`),vN(403,`Por exemplo:`),ug(),Ac(404,`pre`)(405,`code`),vN(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),ug()(),Ac(407,`p`),vN(408,`Para referenciar a sua função utilize a propriedade `),Ac(409,`code`),vN(410,`bind`),ug(),vN(411,`, por exemplo:`),ug(),Ac(412,`pre`)(413,`code`),vN(414,`[p-load]="onLoadFields.bind(this)"
`),ug()()()(),Ac(415,`tr`,13)(416,`td`,14)(417,`div`,15)(418,`span`,16),vN(419,` p-validate`),Kc(420,`br`),ug()()(),Ac(421,`td`,17)(422,`code`,18),vN(423,`string `),ug(),Ac(424,`code`,29),vN(425,` Function`),ug()(),Ac(426,`td`,19),vN(427,`-`),ug(),Ac(428,`td`,20)(429,`em`)(430,`strong`),vN(431,`(opcional)`),ug()(),Ac(432,`p`),vN(433,`Função ou serviço para validar as `),Ac(434,`strong`),vN(435,`mudanças do formulário`),ug(),vN(436,`.`),ug(),Ac(437,`p`),vN(438,`A propriedade aceita os seguintes tipos:`),ug(),Ac(439,`ul`)(440,`li`)(441,`code`),vN(442,`string`),ug(),vN(443,`: `),Ac(444,`em`),vN(445,`Endpoint`),ug(),vN(446,` usado pelo componente para requisição via `),Ac(447,`code`),vN(448,`POST`),ug(),vN(449,`.`),ug(),Ac(450,`li`)(451,`code`),vN(452,`function`),ug(),vN(453,`: Método que será executado.`),ug()(),Ac(454,`p`),vN(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),Ac(456,`code`),vN(457,`PoDynamicFormFieldChanged`),ug()(),Ac(458,`p`),vN(459,`O retorno desta função deve ser do tipo `),Ac(460,`a`,31),vN(461,`PoDynamicFormValidation`),ug(),vN(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),ug(),Ac(463,`pre`)(464,`code`),vN(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),ug()(),Ac(466,`p`),vN(467,`Para referenciar a sua função utilize a propriedade `),Ac(468,`code`),vN(469,`bind`),ug(),vN(470,`, por exemplo:`),ug(),Ac(471,`pre`)(472,`code`),vN(473,`[p-validate]="this.myFunction.bind(this)"
`),ug()(),Ac(474,`blockquote`)(475,`p`),vN(476,`Se houver uma lista de campos para validação definida em `),Ac(477,`code`),vN(478,`p-validate-fields`),ug(),vN(479,`, a propriedade `),Ac(480,`code`),vN(481,`validate`),ug(),vN(482,` só receberá o disparo para os campos equivalentes.`),ug()()()(),Ac(483,`tr`,13)(484,`td`,14)(485,`div`,15)(486,`span`,16),vN(487,` p-validate-fields`),Kc(488,`br`),ug()()(),Ac(489,`td`,17)(490,`code`,32),vN(491,`Array<string>`),ug()(),Ac(492,`td`,19),vN(493,`-`),ug(),Ac(494,`td`,20)(495,`em`)(496,`strong`),vN(497,`(opcional)`),ug()(),Ac(498,`p`),vN(499,`Lista que define os campos que irão disparar o validate do form.`),ug()()(),Ac(500,`tr`,13)(501,`td`,14)(502,`div`,15)(503,`span`,16),vN(504,` p-validate-on-input`),Kc(505,`br`),ug()()(),Ac(506,`td`,17)(507,`code`,28),vN(508,`boolean`),ug()(),Ac(509,`td`,19),vN(510,`-`),ug(),Ac(511,`td`,20)(512,`em`)(513,`strong`),vN(514,`(opcional)`),ug()(),Ac(515,`p`),vN(516,`Ao informar esta propriedade, o componente passará a emitir o valor a cada caractere digitado.`),ug(),Ac(517,`p`),vN(518,`Pode ser aplicado nos seguintes componentes:`),ug(),Ac(519,`ul`)(520,`li`),vN(521,`po-input`),ug(),Ac(522,`li`),vN(523,`po-number`),ug(),Ac(524,`li`),vN(525,`po-decimal`),ug(),Ac(526,`li`),vN(527,`po-textarea`),ug(),Ac(528,`li`),vN(529,`po-password`),ug()(),Ac(530,`p`),vN(531,`Deve informar os campos que deseja receber as emissões na propriedade `),Ac(532,`code`),vN(533,`p-validate-fields`),ug(),vN(534,`.`),ug()()(),Ac(535,`tr`,13)(536,`td`,14)(537,`div`,15)(538,`span`,16),vN(539,` p-value`),Kc(540,`br`),ug()()(),Ac(541,`td`,17)(542,`code`,33),vN(543,`any`),ug()(),Ac(544,`td`,19),vN(545,`-`),ug(),Ac(546,`td`,20)(547,`p`),vN(548,`Objeto que será utilizado como valor para exibir as informações, será recuperado e preenchido através do atributo `),Ac(549,`em`),vN(550,`property`),ug(),vN(551,`
dos objetos contidos na propridade `),Ac(552,`code`),vN(553,`p-fields`),ug(),vN(554,`.`),ug(),Ac(555,`p`),vN(556,`Pode iniciar com valor ou apenas com um objeto vazio que será preenchido conforme descrito acima.`),ug(),Ac(557,`blockquote`)(558,`p`),vN(559,`Ex: `),Ac(560,`code`),vN(561,`{ name: 'po' }`),ug()()()()()(),Ac(562,`h3`,9),vN(563,`Métodos`),ug(),Ac(564,`table`,34)(565,`tr`,13)(566,`th`,35)(567,`div`,15)(568,`h4`)(569,`span`,16),vN(570,` focus `),ug()()()()(),Ac(571,`tr`,20)(572,`td`,20)(573,`p`),vN(574,`Função que atribui foco ao campo desejado.`),ug(),Ac(575,`p`),vN(576,`Para utilizá-la é necessário capturar a instância do `),Ac(577,`code`),vN(578,`dynamic form`),ug(),vN(579,`, como por exemplo:`),ug(),Ac(580,`pre`)(581,`code`,26),vN(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),ug()(),Ac(583,`pre`)(584,`code`,36),vN(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),ug()()()()(),Ac(586,`h5`)(587,`b`),vN(588,`Parâmetros`),ug()(),Ac(589,`table`,10)(590,`tr`,11)(591,`th`,12),vN(592,`Nome`),ug(),Ac(593,`th`,12),vN(594,`Tipo`),ug(),Ac(595,`th`,12),vN(596,`Descrição`),ug()(),Ac(597,`tr`,13)(598,`td`,14),vN(599,` property`),ug(),Ac(600,`td`,17)(601,`code`,37),vN(602,` string `),ug()(),Ac(603,`td`,20)(604,`p`),vN(605,`Nome da propriedade atribuída ao `),Ac(606,`code`),vN(607,`PoDynamicFormField.property`),ug(),vN(608,`.`),ug()()()(),Kc(609,`br`),Ac(610,`table`,34)(611,`tr`,13)(612,`th`,35)(613,`div`,15)(614,`h4`)(615,`span`,16),vN(616,` showAdditionalHelp `),ug()()()()(),Ac(617,`tr`,20)(618,`td`,20)(619,`p`),vN(620,`Método que exibe `),Ac(621,`code`),vN(622,`p-helper`),ug(),vN(623,` ou executa a ação definida em `),Ac(624,`code`),vN(625,`p-helper{eventOnClick}`),ug(),vN(626,` ou em `),Ac(627,`code`),vN(628,`p-additionalHelp`),ug(),vN(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(630,`code`),vN(631,`keydown`),ug(),vN(632,`.`),ug(),Ac(633,`pre`)(634,`code`),vN(635,`import { PoDynamicModule } from '@po-ui/ng-components';
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
`),ug()()()()(),Ac(636,`h5`)(637,`b`),vN(638,`Parâmetros`),ug()(),Ac(639,`table`,10)(640,`tr`,11)(641,`th`,12),vN(642,`Nome`),ug(),Ac(643,`th`,12),vN(644,`Tipo`),ug(),Ac(645,`th`,12),vN(646,`Descrição`),ug()(),Ac(647,`tr`,13)(648,`td`,14),vN(649,` property`),ug(),Ac(650,`td`,17)(651,`code`,37),vN(652,` string `),ug()(),Ac(653,`td`,20)(654,`p`),vN(655,`Identificador da coluna.`),ug()()()(),Kc(656,`br`),Ac(657,`h3`),vN(658,`Interfaces`),ug(),Ac(659,`h4`,38)(660,`code`,5),vN(661,`PoDynamicFormField`),ug()(),Ac(662,`div`,2)(663,`p`),vN(664,` Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente.`),ug()(),Ac(665,`h4`,9),vN(666,`Propriedades`),ug(),Ac(667,`table`,10)(668,`tr`,11)(669,`th`,12),vN(670,`Nome`),ug(),Ac(671,`th`,12),vN(672,`Tipo`),ug(),Ac(673,`th`,12),vN(674,`Descrição`),ug()(),Ac(675,`tr`,13)(676,`td`,14)(677,`div`,15)(678,`span`,16),vN(679,` additionalHelp`),Kc(680,`br`),ug()()(),Ac(681,`td`,17)(682,`code`,29),vN(683,`Function`),ug()(),Ac(684,`td`,20)(685,`em`)(686,`strong`),vN(687,`(opcional)`),ug()(),Ac(688,`p`),vN(689,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(690,`blockquote`)(691,`p`),vN(692,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(693,`tr`,13)(694,`td`,14)(695,`div`,15)(696,`span`,16),vN(697,` additionalHelpTooltip`),Kc(698,`br`),ug()()(),Ac(699,`td`,17)(700,`code`,18),vN(701,`string`),ug()(),Ac(702,`td`,20)(703,`em`)(704,`strong`),vN(705,`(opcional)`),ug()(),Ac(706,`p`),vN(707,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(708,`code`),vN(709,`po-helper`),ug(),vN(710,`.
`),Ac(711,`strong`),vN(712,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(713,`blockquote`)(714,`p`),vN(715,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(716,`tr`,13)(717,`td`,14)(718,`div`,15)(719,`span`,16),vN(720,` advancedFilters`),Kc(721,`br`),ug()()(),Ac(722,`td`,17)(723,`code`,39),vN(724,`Array<PoLookupAdvancedFilter>`),ug()(),Ac(725,`td`,20)(726,`em`)(727,`strong`),vN(728,`(opcional)`),ug()(),Ac(729,`p`),vN(730,`Lista de objetos dos campos que serão criados na busca avançada.`),ug(),Ac(731,`blockquote`)(732,`p`),vN(733,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),ug()(),Ac(734,`p`),vN(735,`Exemplo de URL com busca avançada:`),ug(),Ac(736,`p`)(737,`code`),vN(738,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),ug()(),Ac(739,`p`),vN(740,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),ug(),Ac(741,`p`)(742,`code`),vN(743,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),ug()()()(),Ac(744,`tr`,13)(745,`td`,14)(746,`div`,15)(747,`span`,16),vN(748,` appendBox`),Kc(749,`br`),ug()()(),Ac(750,`td`,17)(751,`code`,28),vN(752,`boolean`),ug()(),Ac(753,`td`,20)(754,`em`)(755,`strong`),vN(756,`(opcional)`),ug()(),Ac(757,`p`),vN(758,`Define que o `),Ac(759,`code`),vN(760,`listbox`),ug(),vN(761,` e/ou popover (`),Ac(762,`code`),vN(763,`p-helper`),ug(),vN(764,` e/ou `),Ac(765,`code`),vN(766,`p-error-limit`),ug(),vN(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ug(),Ac(768,`blockquote`)(769,`p`),vN(770,`Quando utilizado com `),Ac(771,`code`),vN(772,`p-helper`),ug(),vN(773,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(774,`tr`,13)(775,`td`,14)(776,`div`,15)(777,`span`,16),vN(778,` autoHeight`),Kc(779,`br`),ug()()(),Ac(780,`td`,17)(781,`code`,28),vN(782,`boolean`),ug()(),Ac(783,`td`,20)(784,`em`)(785,`strong`),vN(786,`(opcional)`),ug()(),Ac(787,`p`),vN(788,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),ug(),Ac(789,`p`)(790,`strong`),vN(791,`Componentes compatíveis:`),ug(),Ac(792,`code`),vN(793,`po-multiselect`),ug(),vN(794,`, `),Ac(795,`code`),vN(796,`po-lookup`),ug(),vN(797,`.`),ug()()(),Ac(798,`tr`,13)(799,`td`,14)(800,`div`,15)(801,`span`,16),vN(802,` autoUpload`),Kc(803,`br`),ug()()(),Ac(804,`td`,17)(805,`code`,28),vN(806,`boolean`),ug()(),Ac(807,`td`,20)(808,`em`)(809,`strong`),vN(810,`(opcional)`),ug()(),Ac(811,`p`),vN(812,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),ug(),Ac(813,`p`)(814,`strong`),vN(815,`Componente compatível`),ug(),vN(816,`: `),Ac(817,`code`),vN(818,`po-upload`),ug()()()(),Ac(819,`tr`,13)(820,`td`,14)(821,`div`,15)(822,`span`,16),vN(823,` booleanFalse`),Kc(824,`br`),ug()()(),Ac(825,`td`,17)(826,`code`,18),vN(827,`string`),ug()(),Ac(828,`td`,20)(829,`em`)(830,`strong`),vN(831,`(opcional)`),ug()(),Ac(832,`p`),vN(833,`Texto exibido quando o valor do componente for `),Ac(834,`em`),vN(835,`false`),ug(),vN(836,`.`),ug()()(),Ac(837,`tr`,13)(838,`td`,14)(839,`div`,15)(840,`span`,16),vN(841,` booleanTrue`),Kc(842,`br`),ug()()(),Ac(843,`td`,17)(844,`code`,18),vN(845,`string`),ug()(),Ac(846,`td`,20)(847,`em`)(848,`strong`),vN(849,`(opcional)`),ug()(),Ac(850,`p`),vN(851,`Texto exibido quando o valor do componente for `),Ac(852,`em`),vN(853,`true`),ug(),vN(854,`.`),ug()()(),Ac(855,`tr`,13)(856,`td`,14)(857,`div`,15)(858,`span`,16),vN(859,` changeOnEnter`),Kc(860,`br`),ug()()(),Ac(861,`td`,17)(862,`code`,28),vN(863,`boolean`),ug()(),Ac(864,`td`,20)(865,`em`)(866,`strong`),vN(867,`(opcional)`),ug()(),Ac(868,`p`),vN(869,`Indica que o evento `),Ac(870,`code`),vN(871,`p-change`),ug(),vN(872,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),Ac(873,`code`),vN(874,`po-combo`),ug(),vN(875,`.`),ug()()(),Ac(876,`tr`,13)(877,`td`,14)(878,`div`,15)(879,`span`,16),vN(880,` changeVisibleColumns`),Kc(881,`br`),ug()()(),Ac(882,`td`,17)(883,`code`,29),vN(884,`Function`),ug()(),Ac(885,`td`,20)(886,`em`)(887,`strong`),vN(888,`(opcional)`),ug()(),Ac(889,`p`),vN(890,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),ug(),Ac(891,`p`),vN(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ug(),Ac(893,`p`)(894,`strong`),vN(895,`Componente compatível`),ug(),vN(896,`: `),Ac(897,`code`),vN(898,`po-lookup`),ug()()()(),Ac(899,`tr`,13)(900,`td`,14)(901,`div`,15)(902,`span`,16),vN(903,` clean`),Kc(904,`br`),ug()()(),Ac(905,`td`,17)(906,`code`,28),vN(907,`boolean`),ug()(),Ac(908,`td`,20)(909,`em`)(910,`strong`),vN(911,`(opcional)`),ug()(),Ac(912,`p`),vN(913,`Se verdadeiro, o campo receberá um botão para ser limpo.`),ug(),Ac(914,`p`)(915,`strong`),vN(916,`Componentes compatíveis:`),ug(),Ac(917,`code`),vN(918,`po-datepicker`),ug(),vN(919,`, `),Ac(920,`code`),vN(921,`po-datepicker-range`),ug(),vN(922,`, `),Ac(923,`code`),vN(924,`po-input`),ug(),vN(925,`, `),Ac(926,`code`),vN(927,`po-number`),ug(),vN(928,`, `),Ac(929,`code`),vN(930,`po-decimal`),ug(),vN(931,`,
`),Ac(932,`code`),vN(933,`po-combo`),ug(),vN(934,`, `),Ac(935,`code`),vN(936,`po-lookup`),ug(),vN(937,`, `),Ac(938,`code`),vN(939,`po-password`),ug(),vN(940,`, `),Ac(941,`code`),vN(942,`po-timepicker`),ug(),vN(943,`.`),ug()()(),Ac(944,`tr`,13)(945,`td`,14)(946,`div`,15)(947,`span`,16),vN(948,` columnRestoreManager`),Kc(949,`br`),ug()()(),Ac(950,`td`,17)(951,`code`,29),vN(952,`Function`),ug()(),Ac(953,`td`,20)(954,`em`)(955,`strong`),vN(956,`(opcional)`),ug()(),Ac(957,`p`),vN(958,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),ug(),Ac(959,`p`),vN(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ug(),Ac(961,`p`)(962,`strong`),vN(963,`Componente compatível`),ug(),vN(964,`: `),Ac(965,`code`),vN(966,`po-lookup`),ug()()()(),Ac(967,`tr`,13)(968,`td`,14)(969,`div`,15)(970,`span`,16),vN(971,` columns`),Kc(972,`br`),ug()()(),Ac(973,`td`,17)(974,`code`,40),vN(975,`Array<PoLookupColumn> `),ug(),Ac(976,`code`,41),vN(977,` number`),ug()(),Ac(978,`td`,20)(979,`em`)(980,`strong`),vN(981,`(opcional)`),ug()(),Ac(982,`p`),vN(983,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),Ac(984,`code`),vN(985,`searchService`),ug(),vN(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Ac(987,`a`,42)(988,`code`),vN(989,`PoLookupColumn`),ug()(),vN(990,`.`),ug(),Ac(991,`blockquote`)(992,`p`),vN(993,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),Ac(994,`em`),vN(995,`label`),ug(),vN(996,` e `),Ac(997,`em`),vN(998,`value`),ug(),vN(999,` para valores
de tela e do model respectivamente.`),ug()(),Ac(1e3,`p`)(1001,`strong`),vN(1002,`Componentes compatíveis:`),ug(),Ac(1003,`code`),vN(1004,`po-radio-group`),ug(),vN(1005,`, `),Ac(1006,`code`),vN(1007,`po-lookup`),ug(),vN(1008,`, `),Ac(1009,`code`),vN(1010,`po-checkbox-group`),ug(),vN(1011,`.`),ug()()(),Ac(1012,`tr`,13)(1013,`td`,14)(1014,`div`,15)(1015,`span`,16),vN(1016,` compactLabel`),Kc(1017,`br`),ug()()(),Ac(1018,`td`,17)(1019,`code`,28),vN(1020,`boolean`),ug()(),Ac(1021,`td`,20)(1022,`em`)(1023,`strong`),vN(1024,`(opcional)`),ug()(),Ac(1025,`p`),vN(1026,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(1027,`p`),vN(1028,`Quando habilitado (`),Ac(1029,`code`),vN(1030,`true`),ug(),vN(1031,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(1032,`ul`)(1033,`li`)(1034,`code`),vN(1035,`po-label`),ug()(),Ac(1036,`li`)(1037,`code`),vN(1038,`p-requirement (showRequired)`),ug()(),Ac(1039,`li`)(1040,`code`),vN(1041,`po-helper`),ug()()(),Ac(1042,`p`),vN(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(1044,`p`),vN(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(1046,`ul`)(1047,`li`)(1048,`code`),vN(1049,`--field-container-title-justify`),ug()(),Ac(1050,`li`)(1051,`code`),vN(1052,`--field-container-title-flex`),ug()()(),Ac(1053,`p`),vN(1054,`Exemplo:`),ug(),Ac(1055,`pre`)(1056,`code`),vN(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(1058,`p`),vN(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(1060,`tr`,13)(1061,`td`,14)(1062,`div`,15)(1063,`span`,16),vN(1064,` container`),Kc(1065,`br`),ug()()(),Ac(1066,`td`,17)(1067,`code`,18),vN(1068,`string`),ug()(),Ac(1069,`td`,20)(1070,`em`)(1071,`strong`),vN(1072,`(opcional)`),ug()(),Ac(1073,`p`),vN(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),ug(),Ac(1075,`p`),vN(1076,`Está propriedade é do tipo string, o valor que será titulo do contianer`),ug()()(),Ac(1077,`tr`,13)(1078,`td`,14)(1079,`div`,15)(1080,`span`,16),vN(1081,` customAction`),Kc(1082,`br`),ug()()(),Ac(1083,`td`,17)(1084,`code`,43),vN(1085,`PoProgressAction`),ug()(),Ac(1086,`td`,20)(1087,`em`)(1088,`strong`),vN(1089,`(opcional)`),ug()(),Ac(1090,`p`),vN(1091,`Define uma ação personalizada no componente `),Ac(1092,`code`),vN(1093,`po-upload`),ug(),vN(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),ug(),Ac(1095,`p`)(1096,`strong`),vN(1097,`Componente compatível`),ug(),vN(1098,`: `),Ac(1099,`code`),vN(1100,`po-upload`),ug(),vN(1101,`,`),ug(),Ac(1102,`p`)(1103,`strong`),vN(1104,`Exemplo de configuração`),ug(),vN(1105,`:`),ug(),Ac(1106,`pre`)(1107,`code`,44),vN(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),ug()()()(),Ac(1109,`tr`,13)(1110,`td`,14)(1111,`div`,15)(1112,`span`,16),vN(1113,` customActionClick`),Kc(1114,`br`),ug()()(),Ac(1115,`td`,17)(1116,`code`,45),vN(1117,`(file: PoUploadFile) => void`),ug()(),Ac(1118,`td`,20)(1119,`em`)(1120,`strong`),vN(1121,`(opcional)`),ug()(),Ac(1122,`p`),vN(1123,`Evento emitido ao clicar na ação personalizada configurada no `),Ac(1124,`code`),vN(1125,`p-custom-action`),ug(),vN(1126,`.`),ug(),Ac(1127,`p`)(1128,`strong`),vN(1129,`Componente compatível`),ug(),vN(1130,`: `),Ac(1131,`code`),vN(1132,`po-upload`),ug(),vN(1133,`,`),ug(),Ac(1134,`p`),vN(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),ug(),Ac(1136,`p`)(1137,`strong`),vN(1138,`Parâmetro do evento`),ug(),vN(1139,`:`),ug(),Ac(1140,`ul`)(1141,`li`)(1142,`code`),vN(1143,`file`),ug(),vN(1144,`: O arquivo associado ao botão de ação. Este objeto é da classe `),Ac(1145,`code`),vN(1146,`PoUploadFile`),ug(),vN(1147,` e contém informações sobre o arquivo, como nome, status e progresso.`),ug()(),Ac(1148,`p`)(1149,`strong`),vN(1150,`Exemplo de uso`),ug(),vN(1151,`:`),ug(),Ac(1152,`pre`)(1153,`code`,44),vN(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),ug()()()(),Ac(1155,`tr`,13)(1156,`td`,14)(1157,`div`,15)(1158,`span`,16),vN(1159,` debounceTime`),Kc(1160,`br`),ug()()(),Ac(1161,`td`,17)(1162,`code`,41),vN(1163,`number`),ug()(),Ac(1164,`td`,20)(1165,`em`)(1166,`strong`),vN(1167,`(opcional)`),ug()(),Ac(1168,`p`),vN(1169,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),Ac(1170,`code`),vN(1171,`p-filter-service`),ug(),vN(1172,`).`),ug(),Ac(1173,`p`)(1174,`strong`),vN(1175,`Componentes compatíveis:`),ug(),Ac(1176,`code`),vN(1177,`po-combo`),ug(),vN(1178,`, `),Ac(1179,`code`),vN(1180,`po-multiselect`),ug(),vN(1181,`.`),ug()()(),Ac(1182,`tr`,13)(1183,`td`,14)(1184,`div`,15)(1185,`span`,16),vN(1186,` decimalsLength`),Kc(1187,`br`),ug()()(),Ac(1188,`td`,17)(1189,`code`,41),vN(1190,`number`),ug()(),Ac(1191,`td`,20)(1192,`em`)(1193,`strong`),vN(1194,`(opcional)`),ug()(),Ac(1195,`p`),vN(1196,`Quantidade máxima de casas decimais.`),ug(),Ac(1197,`blockquote`)(1198,`p`),vN(1199,`Esta propriedade só pode ser utilizada quando o `),Ac(1200,`code`),vN(1201,`type`),ug(),vN(1202,` for `),Ac(1203,`em`),vN(1204,`currency`),ug(),vN(1205,` ou `),Ac(1206,`em`),vN(1207,`decimal`),ug(),vN(1208,`.`),ug()(),Ac(1209,`blockquote`)(1210,`p`),vN(1211,`Quando utilizado com `),Ac(1212,`code`),vN(1213,`displayFormat`),ug(),vN(1214,`, será respeitado o valor `),Ac(1215,`strong`),vN(1216,`mais restritivo`),ug(),vN(1217,` entre esta propriedade e o número de casas decimais definido no formato.`),ug()()()(),Ac(1218,`tr`,13)(1219,`td`,14)(1220,`div`,15)(1221,`span`,16),vN(1222,` directory`),Kc(1223,`br`),ug()()(),Ac(1224,`td`,17)(1225,`code`,28),vN(1226,`boolean`),ug()(),Ac(1227,`td`,20)(1228,`em`)(1229,`strong`),vN(1230,`(opcional)`),ug()(),Ac(1231,`p`),vN(1232,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),ug(),Ac(1233,`blockquote`)(1234,`p`),vN(1235,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),ug()(),Ac(1236,`blockquote`)(1237,`p`),vN(1238,`Definição não suportada pelo browser `),Ac(1239,`strong`),vN(1240,`Internet Explorer`),ug(),vN(1241,`, todavia será possível a seleção de arquivos padrão.`),ug()(),Ac(1242,`p`)(1243,`strong`),vN(1244,`Componente compatível`),ug(),vN(1245,`: `),Ac(1246,`code`),vN(1247,`po-upload`),ug()()()(),Ac(1248,`tr`,13)(1249,`td`,14)(1250,`div`,15)(1251,`span`,16),vN(1252,` disabled`),Kc(1253,`br`),ug()()(),Ac(1254,`td`,17)(1255,`code`,28),vN(1256,`boolean`),ug()(),Ac(1257,`td`,20)(1258,`em`)(1259,`strong`),vN(1260,`(opcional)`),ug()(),Ac(1261,`p`),vN(1262,`Desabilita o campo caso informar o valor `),Ac(1263,`em`),vN(1264,`true`),ug(),vN(1265,`.`),ug()()(),Ac(1266,`tr`,13)(1267,`td`,14)(1268,`div`,15)(1269,`span`,16),vN(1270,` disabledInitFilter`),Kc(1271,`br`),ug()()(),Ac(1272,`td`,17)(1273,`code`,28),vN(1274,`boolean`),ug()(),Ac(1275,`td`,20)(1276,`em`)(1277,`strong`),vN(1278,`(opcional)`),ug()(),Ac(1279,`p`),vN(1280,`Desabilita o filtro inicial no serviço do `),Ac(1281,`code`),vN(1282,`po-combo`),ug(),vN(1283,`, que é executado no primeiro clique no campo.`),ug()()(),Ac(1284,`tr`,13)(1285,`td`,14)(1286,`div`,15)(1287,`span`,16),vN(1288,` disabledTabFilter`),Kc(1289,`br`),ug()()(),Ac(1290,`td`,17)(1291,`code`,28),vN(1292,`boolean`),ug()(),Ac(1293,`td`,20)(1294,`em`)(1295,`strong`),vN(1296,`(opcional)`),ug()(),Ac(1297,`p`),vN(1298,`Se verdadeiro, desabilitará a busca de um item via TAB no `),Ac(1299,`code`),vN(1300,`po-combo`),ug(),vN(1301,`.`),ug()()(),Ac(1302,`tr`,13)(1303,`td`,14)(1304,`div`,15)(1305,`span`,16),vN(1306,` displayFormat`),Kc(1307,`br`),ug()()(),Ac(1308,`td`,17)(1309,`code`,18),vN(1310,`string`),ug()(),Ac(1311,`td`,20)(1312,`em`)(1313,`strong`),vN(1314,`(opcional)`),ug()(),Ac(1315,`p`),vN(1316,`Define uma máscara de formatação numérica avançada para o campo.`),ug(),Ac(1317,`p`),vN(1318,`Simbologia suportada:`),ug(),Ac(1319,`ul`)(1320,`li`)(1321,`code`),vN(1322,`9`),ug(),vN(1323,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),ug(),Ac(1324,`li`)(1325,`code`),vN(1326,`>`),ug(),vN(1327,`: Supressão de zero à esquerda (dígito não obrigatório);`),ug(),Ac(1328,`li`)(1329,`code`),vN(1330,`<`),ug(),vN(1331,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),ug(),Ac(1332,`li`)(1333,`code`),vN(1334,`.`),ug(),vN(1335,`: Separador decimal (convertido conforme locale);`),ug(),Ac(1336,`li`)(1337,`code`),vN(1338,`,`),ug(),vN(1339,`: Separador de milhar/grupo (convertido conforme locale);`),ug(),Ac(1340,`li`)(1341,`code`),vN(1342,`-`),ug(),vN(1343,`: Sinal negativo (deve ser o primeiro caractere do formato).`),ug()(),Ac(1344,`blockquote`)(1345,`p`),vN(1346,`Quando utilizado com `),Ac(1347,`code`),vN(1348,`decimalsLength`),ug(),vN(1349,` ou `),Ac(1350,`code`),vN(1351,`thousandMaxlength`),ug(),vN(1352,`, será respeitado o valor `),Ac(1353,`strong`),vN(1354,`mais restritivo`),ug(),vN(1355,` entre a propriedade e o formato.`),ug()(),Ac(1356,`p`),vN(1357,`Exemplos: `),Ac(1358,`code`),vN(1359,`'>>>,>>>,>>9.99'`),ug(),vN(1360,`, `),Ac(1361,`code`),vN(1362,`'->>9.99'`),ug(),vN(1363,`, `),Ac(1364,`code`),vN(1365,`'999.9'`),ug()(),Ac(1366,`blockquote`)(1367,`p`),vN(1368,`Esta propriedade só pode ser utilizada quando o `),Ac(1369,`code`),vN(1370,`type`),ug(),vN(1371,` for `),Ac(1372,`em`),vN(1373,`currency`),ug(),vN(1374,` ou `),Ac(1375,`em`),vN(1376,`decimal`),ug(),vN(1377,`.`),ug()(),Ac(1378,`p`)(1379,`strong`),vN(1380,`Componente compatível:`),ug(),Ac(1381,`code`),vN(1382,`po-decimal`),ug(),vN(1383,`.`),ug()()(),Ac(1384,`tr`,13)(1385,`td`,14)(1386,`div`,15)(1387,`span`,16),vN(1388,` divider`),Kc(1389,`br`),ug()()(),Ac(1390,`td`,17)(1391,`code`,18),vN(1392,`string`),ug()(),Ac(1393,`td`,20)(1394,`em`)(1395,`strong`),vN(1396,`(opcional)`),ug()(),Ac(1397,`p`),vN(1398,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),ug()()(),Ac(1399,`tr`,13)(1400,`td`,14)(1401,`div`,15)(1402,`span`,16),vN(1403,` dragDrop`),Kc(1404,`br`),ug()()(),Ac(1405,`td`,17)(1406,`code`,28),vN(1407,`boolean`),ug()(),Ac(1408,`td`,20)(1409,`em`)(1410,`strong`),vN(1411,`(opcional)`),ug()(),Ac(1412,`p`),vN(1413,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),ug(),Ac(1414,`blockquote`)(1415,`p`),vN(1416,`Recomendamos utilizar apenas um `),Ac(1417,`code`),vN(1418,`po-upload`),ug(),vN(1419,` com esta funcionalidade por tela.`),ug()(),Ac(1420,`p`)(1421,`strong`),vN(1422,`Componente compatível`),ug(),vN(1423,`: `),Ac(1424,`code`),vN(1425,`po-upload`),ug()()()(),Ac(1426,`tr`,13)(1427,`td`,14)(1428,`div`,15)(1429,`span`,16),vN(1430,` dragDropHeight`),Kc(1431,`br`),ug()()(),Ac(1432,`td`,17)(1433,`code`,41),vN(1434,`number`),ug()(),Ac(1435,`td`,20)(1436,`em`)(1437,`strong`),vN(1438,`(opcional)`),ug()(),Ac(1439,`p`),vN(1440,`Define em `),Ac(1441,`em`),vN(1442,`pixels`),ug(),vN(1443,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Ac(1444,`code`),vN(1445,`160px`),ug(),vN(1446,`.`),ug(),Ac(1447,`blockquote`)(1448,`p`),vN(1449,`Esta propriedade funciona somente se a propriedade `),Ac(1450,`code`),vN(1451,`p-drag-drop`),ug(),vN(1452,` estiver habilitada.`),ug()(),Ac(1453,`p`)(1454,`strong`),vN(1455,`Componente compatível`),ug(),vN(1456,`: `),Ac(1457,`code`),vN(1458,`po-upload`),ug()()()(),Ac(1459,`tr`,13)(1460,`td`,14)(1461,`div`,15)(1462,`span`,16),vN(1463,` errorAsyncFunction`),Kc(1464,`br`),ug()()(),Ac(1465,`td`,17)(1466,`code`,46),vN(1467,`(value) => Observable<boolean>`),ug()(),Ac(1468,`td`,20)(1469,`em`)(1470,`strong`),vN(1471,`(opcional)`),ug()(),Ac(1472,`p`),vN(1473,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ac(1474,`code`),vN(1475,`change`),ug(),vN(1476,` ou `),Ac(1477,`code`),vN(1478,`change-model`),ug(),vN(1479,`, dependendo do valor da propriedade `),Ac(1480,`code`),vN(1481,`triggerMode`),ug(),vN(1482,`.`),ug(),Ac(1483,`blockquote`)(1484,`p`),vN(1485,`Retorna `),Ac(1486,`code`),vN(1487,`Observable com o valor true`),ug(),vN(1488,` para sinalizar o erro `),Ac(1489,`code`),vN(1490,`false`),ug(),vN(1491,` para indicar que não há erro.`),ug()(),Ac(1492,`p`)(1493,`strong`),vN(1494,`Componente compatível`),ug(),vN(1495,`: `),Ac(1496,`code`),vN(1497,`po-datepicker`),ug()()()(),Ac(1498,`tr`,13)(1499,`td`,14)(1500,`div`,15)(1501,`span`,16),vN(1502,` errorAsyncProperties`),Kc(1503,`br`),ug()()(),Ac(1504,`td`,17)(1505,`code`,47),vN(1506,`ErrorAsyncProperties`),ug()(),Ac(1507,`td`,20)(1508,`em`)(1509,`strong`),vN(1510,`(opcional)`),ug()(),Ac(1511,`p`),vN(1512,`Realiza alguma validação customizada assíncrona no componente.`),ug(),Ac(1513,`p`)(1514,`strong`),vN(1515,`Componentes compatíveis:`),ug(),Ac(1516,`code`),vN(1517,`po-input`),ug(),vN(1518,`, `),Ac(1519,`code`),vN(1520,`po-number`),ug(),vN(1521,`, `),Ac(1522,`code`),vN(1523,`po-decimal`),ug(),vN(1524,`, `),Ac(1525,`code`),vN(1526,`po-password`),ug(),vN(1527,`.`),ug()()(),Ac(1528,`tr`,13)(1529,`td`,14)(1530,`div`,15)(1531,`span`,16),vN(1532,` errorLimit`),Kc(1533,`br`),ug()()(),Ac(1534,`td`,17)(1535,`code`,28),vN(1536,`boolean`),ug()(),Ac(1537,`td`,20)(1538,`em`)(1539,`strong`),vN(1540,`(opcional)`),ug()(),Ac(1541,`p`),vN(1542,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(1543,`blockquote`)(1544,`p`),vN(1545,`Caso essa propriedade seja definida como `),Ac(1546,`code`),vN(1547,`true`),ug(),vN(1548,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()(),Ac(1549,`p`)(1550,`strong`),vN(1551,`Componentes compatíveis:`),ug(),Ac(1552,`code`),vN(1553,`po-checkbox-group`),ug(),vN(1554,`, `),Ac(1555,`code`),vN(1556,`po-combo`),ug(),vN(1557,`, `),Ac(1558,`code`),vN(1559,`po-datepicker`),ug(),vN(1560,`, `),Ac(1561,`code`),vN(1562,`po-datepicker-range`),ug(),vN(1563,`, `),Ac(1564,`code`),vN(1565,`po-decimal`),ug(),vN(1566,`, `),Ac(1567,`code`),vN(1568,`po-input`),ug(),vN(1569,`, `),Ac(1570,`code`),vN(1571,`po-lookup`),ug(),vN(1572,`, `),Ac(1573,`code`),vN(1574,`po-multiselect`),ug(),vN(1575,`, `),Ac(1576,`code`),vN(1577,`po-number`),ug(),vN(1578,`, `),Ac(1579,`code`),vN(1580,`po-password`),ug(),vN(1581,`, `),Ac(1582,`code`),vN(1583,`po-radio-group`),ug(),vN(1584,`, `),Ac(1585,`code`),vN(1586,`po-select`),ug(),vN(1587,`,
`),Ac(1588,`code`),vN(1589,`po-switch`),ug(),vN(1590,`, `),Ac(1591,`code`),vN(1592,`po-textarea`),ug(),vN(1593,`, `),Ac(1594,`code`),vN(1595,`po-timepicker`),ug(),vN(1596,`.`),ug()()(),Ac(1597,`tr`,13)(1598,`td`,14)(1599,`div`,15)(1600,`span`,16),vN(1601,` errorMessage`),Kc(1602,`br`),ug()()(),Ac(1603,`td`,17)(1604,`code`,18),vN(1605,`string`),ug()(),Ac(1606,`td`,20)(1607,`em`)(1608,`strong`),vN(1609,`(opcional)`),ug()(),Ac(1610,`p`),vN(1611,`Mensagem que será apresentada quando o campo ficar inválido.`),ug(),Ac(1612,`p`),vN(1613,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),ug(),Ac(1614,`ul`)(1615,`li`),vN(1616,`pattern;`),ug(),Ac(1617,`li`),vN(1618,`minValue;`),ug(),Ac(1619,`li`),vN(1620,`maxValue;`),ug(),Ac(1621,`li`),vN(1622,`required;`),ug()(),Ac(1623,`blockquote`)(1624,`p`),vN(1625,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Ac(1626,`code`),vN(1627,`po-datepicker`),ug(),vN(1628,`, `),Ac(1629,`code`),vN(1630,`po-input`),ug(),vN(1631,`, `),Ac(1632,`code`),vN(1633,`po-number`),ug(),vN(1634,`, `),Ac(1635,`code`),vN(1636,`po-decimal`),ug(),vN(1637,`, `),Ac(1638,`code`),vN(1639,`po-password`),ug(),vN(1640,`, `),Ac(1641,`code`),vN(1642,`po-timepicker`),ug(),vN(1643,`, \xE9 necess\xE1rio que a propriedade
`),Ac(1644,`code`),vN(1645,`requiredFieldErrorMessage`),ug(),vN(1646,` esteja como `),Ac(1647,`code`),vN(1648,`true`),ug(),vN(1649,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Ac(1650,`code`),vN(1651,`po-datepicker-range`),ug(),vN(1652,`, `),Ac(1653,`code`),vN(1654,`po-select`),ug(),vN(1655,`, `),Ac(1656,`code`),vN(1657,`po-checkbox-group`),ug(),vN(1658,`, `),Ac(1659,`code`),vN(1660,`po-radio-group`),ug(),vN(1661,`, `),Ac(1662,`code`),vN(1663,`po-multiselect`),ug(),vN(1664,`, `),Ac(1665,`code`),vN(1666,`po-combo`),ug(),vN(1667,`,
`),Ac(1668,`code`),vN(1669,`po-lookup`),ug(),vN(1670,` e `),Ac(1671,`code`),vN(1672,`po-textarea`),ug(),vN(1673,` não é necessário passar a propriedade `),Ac(1674,`code`),vN(1675,`requiredFieldErrorMessage`),ug(),vN(1676,`.`),ug()(),Ac(1677,`p`)(1678,`strong`),vN(1679,`Componentes compatíveis:`),ug(),Ac(1680,`code`),vN(1681,`po-checkbox-group`),ug(),vN(1682,`, `),Ac(1683,`code`),vN(1684,`po-combo`),ug(),vN(1685,`, `),Ac(1686,`code`),vN(1687,`po-datepicker`),ug(),vN(1688,`, `),Ac(1689,`code`),vN(1690,`po-datepicker-range`),ug(),vN(1691,`, `),Ac(1692,`code`),vN(1693,`po-decimal`),ug(),vN(1694,`, `),Ac(1695,`code`),vN(1696,`po-input`),ug(),vN(1697,`, `),Ac(1698,`code`),vN(1699,`po-lookup`),ug(),vN(1700,`, `),Ac(1701,`code`),vN(1702,`po-multiselect`),ug(),vN(1703,`, `),Ac(1704,`code`),vN(1705,`po-number`),ug(),vN(1706,`, `),Ac(1707,`code`),vN(1708,`po-password`),ug(),vN(1709,`, `),Ac(1710,`code`),vN(1711,`po-radio-group`),ug(),vN(1712,`, `),Ac(1713,`code`),vN(1714,`po-select`),ug(),vN(1715,`,
`),Ac(1716,`code`),vN(1717,`po-switch`),ug(),vN(1718,`, `),Ac(1719,`code`),vN(1720,`po-textarea`),ug(),vN(1721,`, `),Ac(1722,`code`),vN(1723,`po-timepicker`),ug(),vN(1724,`.`),ug()()(),Ac(1725,`tr`,13)(1726,`td`,14)(1727,`div`,15)(1728,`span`,16),vN(1729,` fieldLabel`),Kc(1730,`br`),ug()()(),Ac(1731,`td`,17)(1732,`code`,18),vN(1733,`string`),ug()(),Ac(1734,`td`,20)(1735,`em`)(1736,`strong`),vN(1737,`(opcional)`),ug()(),Ac(1738,`p`),vN(1739,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),ug(),Ac(1740,`p`),vN(1741,`O valor padrão é: `),Ac(1742,`code`),vN(1743,`label`),ug(),vN(1744,`.`),ug(),Ac(1745,`blockquote`)(1746,`p`),vN(1747,`Esta propriedade pode ser utilizada em conjunto com: `),Ac(1748,`code`),vN(1749,`options`),ug(),vN(1750,`, `),Ac(1751,`code`),vN(1752,`optionsService`),ug(),vN(1753,` e `),Ac(1754,`code`),vN(1755,`searchService`),ug(),vN(1756,`.`),ug()()()(),Ac(1757,`tr`,13)(1758,`td`,14)(1759,`div`,15)(1760,`span`,16),vN(1761,` fieldValue`),Kc(1762,`br`),ug()()(),Ac(1763,`td`,17)(1764,`code`,18),vN(1765,`string`),ug()(),Ac(1766,`td`,20)(1767,`em`)(1768,`strong`),vN(1769,`(opcional)`),ug()(),Ac(1770,`p`),vN(1771,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),ug(),Ac(1772,`p`),vN(1773,`O valor padrão é: `),Ac(1774,`code`),vN(1775,`value`),ug(),vN(1776,`.`),ug(),Ac(1777,`blockquote`)(1778,`p`),vN(1779,`Esta propriedade pode ser utilizada em conjunto com: `),Ac(1780,`code`),vN(1781,`options`),ug(),vN(1782,`, `),Ac(1783,`code`),vN(1784,`optionsService`),ug(),vN(1785,` e `),Ac(1786,`code`),vN(1787,`searchService`),ug(),vN(1788,`.`),ug()()()(),Ac(1789,`tr`,13)(1790,`td`,14)(1791,`div`,15)(1792,`span`,16),vN(1793,` filterMinlength`),Kc(1794,`br`),ug()()(),Ac(1795,`td`,17)(1796,`code`,41),vN(1797,`number`),ug()(),Ac(1798,`td`,20)(1799,`em`)(1800,`strong`),vN(1801,`(opcional)`),ug()(),Ac(1802,`p`),vN(1803,`Valor mínimo de caracteres para realizar o filtro no serviço do `),Ac(1804,`code`),vN(1805,`po-combo`),ug(),vN(1806,`.`),ug()()(),Ac(1807,`tr`,13)(1808,`td`,14)(1809,`div`,15)(1810,`span`,16),vN(1811,` filterMode`),Kc(1812,`br`),ug()()(),Ac(1813,`td`,17)(1814,`code`,48),vN(1815,`PoMultiselectFilterMode`),ug()(),Ac(1816,`td`,20)(1817,`em`)(1818,`strong`),vN(1819,`(opcional)`),ug()(),Ac(1820,`p`),vN(1821,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),Ac(1822,`code`),vN(1823,`startsWith`),ug(),vN(1824,`, `),Ac(1825,`code`),vN(1826,`contains`),ug(),vN(1827,` ou `),Ac(1828,`code`),vN(1829,`endsWith`),ug(),vN(1830,`.`),ug(),Ac(1831,`blockquote`)(1832,`p`),vN(1833,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),ug()(),Ac(1834,`p`)(1835,`strong`),vN(1836,`Componente compatível:`),ug(),Ac(1837,`code`),vN(1838,`po-multiselect`),ug(),vN(1839,`.`),ug()()(),Ac(1840,`tr`,13)(1841,`td`,14)(1842,`div`,15)(1843,`span`,16),vN(1844,` forceBooleanComponentType`),Kc(1845,`br`),ug()()(),Ac(1846,`td`,17)(1847,`code`,49),vN(1848,`ForceBooleanComponentEnum`),ug()(),Ac(1849,`td`,20)(1850,`em`)(1851,`strong`),vN(1852,`(opcional)`),ug()(),Ac(1853,`p`),vN(1854,`Valores aceitos:`),ug(),Ac(1855,`ul`)(1856,`li`),vN(1857,`ForceBooleanComponentEnum.switch`),ug(),Ac(1858,`li`),vN(1859,`ForceBooleanComponentEnum.checkbox`),ug()()()(),Ac(1860,`tr`,13)(1861,`td`,14)(1862,`div`,15)(1863,`span`,16),vN(1864,` forceOptionsComponentType`),Kc(1865,`br`),ug()()(),Ac(1866,`td`,17)(1867,`code`,50),vN(1868,`ForceOptionComponentEnum`),ug()(),Ac(1869,`td`,20)(1870,`em`)(1871,`strong`),vN(1872,`(opcional)`),ug()(),Ac(1873,`p`),vN(1874,`pode ser utilizada em conjunto com a propriedade `),Ac(1875,`code`),vN(1876,`options`),ug(),vN(1877,` forçando o componente a renderizar um `),Ac(1878,`code`),vN(1879,`po-select`),ug(),vN(1880,` ou `),Ac(1881,`code`),vN(1882,`po-radio-group`),ug(),vN(1883,`.`),ug(),Ac(1884,`p`),vN(1885,`Valores aceitos:`),ug(),Ac(1886,`ul`)(1887,`li`),vN(1888,`ForceOptionComponentEnum.radioGroup`),ug(),Ac(1889,`li`),vN(1890,`ForceOptionComponentEnum.select`),ug()(),Ac(1891,`blockquote`)(1892,`p`),vN(1893,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),Ac(1894,`code`),vN(1895,`optionsMulti`),ug(),vN(1896,` e `),Ac(1897,`code`),vN(1898,`optionsService`),ug(),vN(1899,`.`),ug()()()(),Ac(1900,`tr`,13)(1901,`td`,14)(1902,`div`,15)(1903,`span`,16),vN(1904,` formField`),Kc(1905,`br`),ug()()(),Ac(1906,`td`,17)(1907,`code`,18),vN(1908,`string`),ug()(),Ac(1909,`td`,20)(1910,`em`)(1911,`strong`),vN(1912,`(opcional)`),ug()(),Ac(1913,`p`),vN(1914,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Ac(1915,`code`),vN(1916,`url`),ug(),vN(1917,`.`),ug(),Ac(1918,`blockquote`)(1919,`p`),vN(1920,`O valor default é `),Ac(1921,`code`),vN(1922,`files`),ug()()(),Ac(1923,`p`)(1924,`strong`),vN(1925,`Componente compatível`),ug(),vN(1926,`: `),Ac(1927,`code`),vN(1928,`po-upload`),ug()()()(),Ac(1929,`tr`,13)(1930,`td`,14)(1931,`div`,15)(1932,`span`,16),vN(1933,` format`),Kc(1934,`br`),ug()()(),Ac(1935,`td`,17)(1936,`code`,18),vN(1937,`string `),ug(),Ac(1938,`code`,32),vN(1939,` Array<string>`),ug()(),Ac(1940,`td`,20)(1941,`em`)(1942,`strong`),vN(1943,`(opcional)`),ug()(),Ac(1944,`p`),vN(1945,`Formato de exibição no campo.`),ug(),Ac(1946,`p`),vN(1947,`Ao utilizar esta propriedade com o `),Ac(1948,`code`),vN(1949,`type`),ug(),Ac(1950,`em`),vN(1951,`PoDynamicFieldType.Date`),ug(),vN(1952,` ou `),Ac(1953,`em`),vN(1954,`PoDynamicFieldType.DateTime`),ug(),vN(1955,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),ug(),Ac(1956,`p`),vN(1957,`Valores válidos:`),ug(),Ac(1958,`ul`)(1959,`li`),vN(1960,`dd/mm/yyyy`),ug(),Ac(1961,`li`),vN(1962,`mm/dd/yyyy`),ug(),Ac(1963,`li`),vN(1964,`yyyy/mm/dd`),ug()(),Ac(1965,`p`),vN(1966,`Ao utilizar com o `),Ac(1967,`code`),vN(1968,`type`),ug(),Ac(1969,`em`),vN(1970,`PoDynamicFieldType.Time`),ug(),vN(1971,`, define o formato de exibição do horário:`),ug(),Ac(1972,`p`),vN(1973,`Valores válidos:`),ug(),Ac(1974,`ul`)(1975,`li`)(1976,`code`),vN(1977,`24`),ug(),vN(1978,`: formato de 24 horas (padrão)`),ug(),Ac(1979,`li`)(1980,`code`),vN(1981,`12`),ug(),vN(1982,`: formato de 12 horas com indicador AM/PM`),ug()(),Ac(1983,`p`),vN(1984,`Também pode-se utilizar em conjunto com `),Ac(1985,`code`),vN(1986,`searchService`),ug(),vN(1987,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),ug(),Ac(1988,`p`)(1989,`strong`),vN(1990,`Componentes compatíveis:`),ug(),Ac(1991,`code`),vN(1992,`po-datepicker`),ug(),vN(1993,`, `),Ac(1994,`code`),vN(1995,`po-datetimepicker`),ug(),vN(1996,`, `),Ac(1997,`code`),vN(1998,`po-timepicker`),ug(),vN(1999,`, `),Ac(2e3,`code`),vN(2001,`po-lookup`),ug(),vN(2002,`.`),ug()()(),Ac(2003,`tr`,13)(2004,`td`,14)(2005,`div`,15)(2006,`span`,16),vN(2007,` formatModel`),Kc(2008,`br`),ug()()(),Ac(2009,`td`,17)(2010,`code`,28),vN(2011,`boolean`),ug()(),Ac(2012,`td`,20)(2013,`em`)(2014,`strong`),vN(2015,`(opcional)`),ug()(),Ac(2016,`p`),vN(2017,`Indica se o `),Ac(2018,`code`),vN(2019,`model`),ug(),vN(2020,` receberá o valor formatado pelas propriedades `),Ac(2021,`code`),vN(2022,`p-label-on`),ug(),vN(2023,` e `),Ac(2024,`code`),vN(2025,`p-label-off`),ug(),vN(2026,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),ug(),Ac(2027,`p`),vN(2028,`O valor padrão é: `),Ac(2029,`code`),vN(2030,`false`),ug(),vN(2031,`.`),ug(),Ac(2032,`blockquote`)(2033,`p`),vN(2034,`Esta propriedade está disponivel apenas para o `),Ac(2035,`code`),vN(2036,`swicth`),ug(),vN(2037,`.`),ug()()()(),Ac(2038,`tr`,13)(2039,`td`,14)(2040,`div`,15)(2041,`span`,16),vN(2042,` formatTime`),Kc(2043,`br`),ug()()(),Ac(2044,`td`,17)(2045,`code`,18),vN(2046,`string`),ug()(),Ac(2047,`td`,20)(2048,`em`)(2049,`strong`),vN(2050,`(opcional)`),ug()(),Ac(2051,`p`),vN(2052,`Define o formato de exibição do timer (`),Ac(2053,`code`),vN(2054,`'12'`),ug(),vN(2055,` ou `),Ac(2056,`code`),vN(2057,`'24'`),ug(),vN(2058,`).`),ug(),Ac(2059,`p`)(2060,`strong`),vN(2061,`Componente compatível:`),ug(),Ac(2062,`code`),vN(2063,`po-datetimepicker`),ug()()()(),Ac(2064,`tr`,13)(2065,`td`,14)(2066,`div`,15)(2067,`span`,16),vN(2068,` gridColumns`),Kc(2069,`br`),ug()()(),Ac(2070,`td`,17)(2071,`code`,41),vN(2072,`number`),ug()(),Ac(2073,`td`,20)(2074,`em`)(2075,`strong`),vN(2076,`(opcional)`),ug()(),Ac(2077,`p`),vN(2078,`Tamanho de exibição do campo em telas.`),ug(),Ac(2079,`p`),vN(2080,`Deve ser usado o sistema de `),Ac(2081,`strong`),vN(2082,`grid`),ug(),vN(2083,` do PO (1 ... 12 colunas).`),ug(),Ac(2084,`blockquote`)(2085,`p`),vN(2086,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),ug()()()(),Ac(2087,`tr`,13)(2088,`td`,14)(2089,`div`,15)(2090,`span`,16),vN(2091,` gridLgColumns`),Kc(2092,`br`),ug()()(),Ac(2093,`td`,17)(2094,`code`,41),vN(2095,`number`),ug()(),Ac(2096,`td`,20)(2097,`em`)(2098,`strong`),vN(2099,`(opcional)`),ug()(),Ac(2100,`p`),vN(2101,`Tamanho de exibição do campo em telas grandes (lg).`),ug(),Ac(2102,`p`),vN(2103,`Deve ser usado o sistema de `),Ac(2104,`strong`),vN(2105,`grid`),ug(),vN(2106,` do PO (1 ... 12 colunas).`),ug(),Ac(2107,`blockquote`)(2108,`p`),vN(2109,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(2110,`code`),vN(2111,`gridColumns`),ug(),vN(2112,`.`),ug()()()(),Ac(2113,`tr`,13)(2114,`td`,14)(2115,`div`,15)(2116,`span`,16),vN(2117,` gridLgPull`),Kc(2118,`br`),ug()()(),Ac(2119,`td`,17)(2120,`code`,41),vN(2121,`number`),ug()(),Ac(2122,`td`,20)(2123,`em`)(2124,`strong`),vN(2125,`(opcional)`),ug()(),Ac(2126,`p`),vN(2127,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),ug(),Ac(2128,`p`),vN(2129,`Deve ser usado o sistema de `),Ac(2130,`strong`),vN(2131,`grid`),ug(),vN(2132,` do PO (1 ... 11 colunas).`),ug(),Ac(2133,`blockquote`)(2134,`p`),vN(2135,`Esta propriedade não funciona com a propriedade `),Ac(2136,`code`),vN(2137,`gridColumns`),ug(),vN(2138,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(2139,`tr`,13)(2140,`td`,14)(2141,`div`,15)(2142,`span`,16),vN(2143,` gridMdColumns`),Kc(2144,`br`),ug()()(),Ac(2145,`td`,17)(2146,`code`,41),vN(2147,`number`),ug()(),Ac(2148,`td`,20)(2149,`em`)(2150,`strong`),vN(2151,`(opcional)`),ug()(),Ac(2152,`p`),vN(2153,`Tamanho de exibição do campo em telas médias (md).`),ug(),Ac(2154,`p`),vN(2155,`Deve ser usado o sistema de `),Ac(2156,`strong`),vN(2157,`grid`),ug(),vN(2158,` do PO (1 ... 12 colunas).`),ug(),Ac(2159,`blockquote`)(2160,`p`),vN(2161,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(2162,`code`),vN(2163,`gridColumns`),ug(),vN(2164,`.`),ug()()()(),Ac(2165,`tr`,13)(2166,`td`,14)(2167,`div`,15)(2168,`span`,16),vN(2169,` gridMdPull`),Kc(2170,`br`),ug()()(),Ac(2171,`td`,17)(2172,`code`,41),vN(2173,`number`),ug()(),Ac(2174,`td`,20)(2175,`em`)(2176,`strong`),vN(2177,`(opcional)`),ug()(),Ac(2178,`p`),vN(2179,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),ug(),Ac(2180,`p`),vN(2181,`Deve ser usado o sistema de `),Ac(2182,`strong`),vN(2183,`grid`),ug(),vN(2184,` do PO (1 ... 11 colunas).`),ug(),Ac(2185,`blockquote`)(2186,`p`),vN(2187,`Esta propriedade não funciona com a propriedade `),Ac(2188,`code`),vN(2189,`gridColumns`),ug(),vN(2190,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(2191,`tr`,13)(2192,`td`,14)(2193,`div`,15)(2194,`span`,16),vN(2195,` gridSmColumns`),Kc(2196,`br`),ug()()(),Ac(2197,`td`,17)(2198,`code`,41),vN(2199,`number`),ug()(),Ac(2200,`td`,20)(2201,`em`)(2202,`strong`),vN(2203,`(opcional)`),ug()(),Ac(2204,`p`),vN(2205,`Tamanho de exibição do campo em telas menores (sm).`),ug(),Ac(2206,`p`),vN(2207,`Deve ser usado o sistema de `),Ac(2208,`strong`),vN(2209,`grid`),ug(),vN(2210,` do PO (1 ... 12 colunas).`),ug(),Ac(2211,`blockquote`)(2212,`p`),vN(2213,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(2214,`code`),vN(2215,`gridColumns`),ug(),vN(2216,`.`),ug()()()(),Ac(2217,`tr`,13)(2218,`td`,14)(2219,`div`,15)(2220,`span`,16),vN(2221,` gridSmPull`),Kc(2222,`br`),ug()()(),Ac(2223,`td`,17)(2224,`code`,41),vN(2225,`number`),ug()(),Ac(2226,`td`,20)(2227,`em`)(2228,`strong`),vN(2229,`(opcional)`),ug()(),Ac(2230,`p`),vN(2231,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),ug(),Ac(2232,`p`),vN(2233,`Deve ser usado o sistema de `),Ac(2234,`strong`),vN(2235,`grid`),ug(),vN(2236,` do PO (1 ... 11 colunas).`),ug(),Ac(2237,`blockquote`)(2238,`p`),vN(2239,`Esta propriedade não funciona com a propriedade `),Ac(2240,`code`),vN(2241,`gridColumns`),ug(),vN(2242,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(2243,`tr`,13)(2244,`td`,14)(2245,`div`,15)(2246,`span`,16),vN(2247,` gridXlColumns`),Kc(2248,`br`),ug()()(),Ac(2249,`td`,17)(2250,`code`,41),vN(2251,`number`),ug()(),Ac(2252,`td`,20)(2253,`em`)(2254,`strong`),vN(2255,`(opcional)`),ug()(),Ac(2256,`p`),vN(2257,`Tamanho de exibição do campo em telas extra grandes (xl).`),ug(),Ac(2258,`p`),vN(2259,`Deve ser usado o sistema de `),Ac(2260,`strong`),vN(2261,`grid`),ug(),vN(2262,` do PO (1 ... 12 colunas).`),ug(),Ac(2263,`blockquote`)(2264,`p`),vN(2265,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(2266,`code`),vN(2267,`gridColumns`),ug(),vN(2268,`.`),ug()()()(),Ac(2269,`tr`,13)(2270,`td`,14)(2271,`div`,15)(2272,`span`,16),vN(2273,` gridXlPull`),Kc(2274,`br`),ug()()(),Ac(2275,`td`,17)(2276,`code`,41),vN(2277,`number`),ug()(),Ac(2278,`td`,20)(2279,`em`)(2280,`strong`),vN(2281,`(opcional)`),ug()(),Ac(2282,`p`),vN(2283,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),ug(),Ac(2284,`p`),vN(2285,`Deve ser usado o sistema de `),Ac(2286,`strong`),vN(2287,`grid`),ug(),vN(2288,` do PO (1 ... 11 colunas).`),ug(),Ac(2289,`blockquote`)(2290,`p`),vN(2291,`Esta propriedade não funciona com a propriedade `),Ac(2292,`code`),vN(2293,`gridColumns`),ug(),vN(2294,`. Deve-se especificar o tamanho da tela.`),ug()()()(),Ac(2295,`tr`,13)(2296,`td`,14)(2297,`div`,15)(2298,`span`,16),vN(2299,` headers`),Kc(2300,`br`),ug()()(),Ac(2301,`td`,17)(2302,`code`,51),vN(2303,`{ [name: string]: string `),ug(),Ac(2304,`code`,52),vN(2305,` Array<string>;
}`),ug()(),Ac(2306,`td`,20)(2307,`em`)(2308,`strong`),vN(2309,`(opcional)`),ug()(),Ac(2310,`p`),vN(2311,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),ug(),Ac(2312,`p`)(2313,`strong`),vN(2314,`Componente compatível`),ug(),vN(2315,`: `),Ac(2316,`code`),vN(2317,`po-upload`),ug()()()(),Ac(2318,`tr`,13)(2319,`td`,14)(2320,`div`,15)(2321,`span`,16),vN(2322,` help`),Kc(2323,`br`),ug()()(),Ac(2324,`td`,17)(2325,`code`,18),vN(2326,`string`),ug()(),Ac(2327,`td`,20)(2328,`em`)(2329,`strong`),vN(2330,`(opcional)`),ug()(),Ac(2331,`p`),vN(2332,`Texto de ajuda.`),ug()()(),Ac(2333,`tr`,13)(2334,`td`,14)(2335,`div`,15)(2336,`span`,16),vN(2337,` helper`),Kc(2338,`br`),ug()()(),Ac(2339,`td`,17)(2340,`code`,18),vN(2341,`string `),ug(),Ac(2342,`code`,53),vN(2343,` PoHelperOptions`),ug()(),Ac(2344,`td`,20)(2345,`em`)(2346,`strong`),vN(2347,`(opcional)`),ug()(),Ac(2348,`p`),vN(2349,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),ug()()(),Ac(2350,`tr`,13)(2351,`td`,14)(2352,`div`,15)(2353,`span`,16),vN(2354,` hideLabelStatus`),Kc(2355,`br`),ug()()(),Ac(2356,`td`,17)(2357,`code`,28),vN(2358,`boolean`),ug()(),Ac(2359,`td`,20)(2360,`em`)(2361,`strong`),vN(2362,`(opcional)`),ug()(),Ac(2363,`p`),vN(2364,`Indica se o status do `),Ac(2365,`code`),vN(2366,`model`),ug(),vN(2367,` será escondido visualmente ao lado do switch`),ug()()(),Ac(2368,`tr`,13)(2369,`td`,14)(2370,`div`,15)(2371,`span`,16),vN(2372,` hidePasswordPeek`),Kc(2373,`br`),ug()()(),Ac(2374,`td`,17)(2375,`code`,28),vN(2376,`boolean`),ug()(),Ac(2377,`td`,20)(2378,`em`)(2379,`strong`),vN(2380,`(opcional)`),ug()(),Ac(2381,`p`),vN(2382,`Permite esconder a função de espiar a senha digitada no `),Ac(2383,`code`),vN(2384,`po-password`),ug(),vN(2385,`.`),ug()()(),Ac(2386,`tr`,13)(2387,`td`,14)(2388,`div`,15)(2389,`span`,16),vN(2390,` hideRestrictionsInfo`),Kc(2391,`br`),ug()()(),Ac(2392,`td`,17)(2393,`code`,28),vN(2394,`boolean`),ug()(),Ac(2395,`td`,20)(2396,`em`)(2397,`strong`),vN(2398,`(opcional)`),ug()(),Ac(2399,`p`),vN(2400,`Oculta visualmente as informações de restrições para o upload.`),ug(),Ac(2401,`p`)(2402,`strong`),vN(2403,`Componente compatível`),ug(),vN(2404,`: `),Ac(2405,`code`),vN(2406,`po-upload`),ug()()()(),Ac(2407,`tr`,13)(2408,`td`,14)(2409,`div`,15)(2410,`span`,16),vN(2411,` hideSearch`),Kc(2412,`br`),ug()()(),Ac(2413,`td`,17)(2414,`code`,28),vN(2415,`boolean`),ug()(),Ac(2416,`td`,20)(2417,`em`)(2418,`strong`),vN(2419,`(opcional)`),ug()(),Ac(2420,`p`),vN(2421,`Esconde o campo de pesquisa existente dentro do dropdown do `),Ac(2422,`code`),vN(2423,`po-multiselect`),ug(),vN(2424,`.`),ug()()(),Ac(2425,`tr`,13)(2426,`td`,14)(2427,`div`,15)(2428,`span`,16),vN(2429,` hideSelectAll`),Kc(2430,`br`),ug()()(),Ac(2431,`td`,17)(2432,`code`,28),vN(2433,`boolean`),ug()(),Ac(2434,`td`,20)(2435,`em`)(2436,`strong`),vN(2437,`(opcional)`),ug()(),Ac(2438,`p`),vN(2439,`Indica se o campo "Selecionar todos" do `),Ac(2440,`code`),vN(2441,`po-multiselect`),ug(),vN(2442,` será escondido.`),ug()()(),Ac(2443,`tr`,13)(2444,`td`,14)(2445,`div`,15)(2446,`span`,16),vN(2447,` hideSelectButton`),Kc(2448,`br`),ug()()(),Ac(2449,`td`,17)(2450,`code`,28),vN(2451,`boolean`),ug()(),Ac(2452,`td`,20)(2453,`em`)(2454,`strong`),vN(2455,`(opcional)`),ug()(),Ac(2456,`p`),vN(2457,`Omite o botão de seleção de arquivos.`),ug(),Ac(2458,`blockquote`)(2459,`p`),vN(2460,`Caso o valor definido seja `),Ac(2461,`code`),vN(2462,`true`),ug(),vN(2463,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ac(2464,`code`),vN(2465,`selectFiles()`),ug(),vN(2466,` para seleção de arquivos.`),ug()(),Ac(2467,`p`)(2468,`strong`),vN(2469,`Componente compatível`),ug(),vN(2470,`: `),Ac(2471,`code`),vN(2472,`po-upload`),ug()()()(),Ac(2473,`tr`,13)(2474,`td`,14)(2475,`div`,15)(2476,`span`,16),vN(2477,` hideSendButton`),Kc(2478,`br`),ug()()(),Ac(2479,`td`,17)(2480,`code`,28),vN(2481,`boolean`),ug()(),Ac(2482,`td`,20)(2483,`em`)(2484,`strong`),vN(2485,`(opcional)`),ug()(),Ac(2486,`p`),vN(2487,`Omite o botão de envio de arquivos.`),ug(),Ac(2488,`blockquote`)(2489,`p`),vN(2490,`Caso o valor definido seja `),Ac(2491,`code`),vN(2492,`true`),ug(),vN(2493,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Ac(2494,`code`),vN(2495,`sendFiles()`),ug(),vN(2496,` para envio do(s) arquivo(s) selecionado(s).`),ug()(),Ac(2497,`p`)(2498,`strong`),vN(2499,`Componente compatível`),ug(),vN(2500,`: `),Ac(2501,`code`),vN(2502,`po-upload`),ug()()()(),Ac(2503,`tr`,13)(2504,`td`,14)(2505,`div`,15)(2506,`span`,16),vN(2507,` icon`),Kc(2508,`br`),ug()()(),Ac(2509,`td`,17)(2510,`code`,18),vN(2511,`string `),ug(),Ac(2512,`code`,54),vN(2513,` TemplateRef<void>`),ug()(),Ac(2514,`td`,20)(2515,`em`)(2516,`strong`),vN(2517,`(opcional)`),ug()(),Ac(2518,`p`),vN(2519,`Define o ícone que será exibido no início do campo.`),ug(),Ac(2520,`blockquote`)(2521,`p`),vN(2522,`Esta propriedade só pode ser utilizado nos campos:`),ug()(),Ac(2523,`ul`)(2524,`li`),vN(2525,`Input;`),ug(),Ac(2526,`li`),vN(2527,`Number;`),ug(),Ac(2528,`li`),vN(2529,`Decimal;`),ug(),Ac(2530,`li`),vN(2531,`Combo;`),ug(),Ac(2532,`li`),vN(2533,`Password;`),ug()(),Ac(2534,`blockquote`)(2535,`p`),vN(2536,`Veja a disponibilidade de ícones em `),Ac(2537,`a`,55),vN(2538,`biblioteca de ícones`),ug(),vN(2539,`.`),ug()()()(),Ac(2540,`tr`,13)(2541,`td`,14)(2542,`div`,15)(2543,`span`,16),vN(2544,` infiniteScroll`),Kc(2545,`br`),ug()()(),Ac(2546,`td`,17)(2547,`code`,28),vN(2548,`boolean`),ug()(),Ac(2549,`td`,20)(2550,`em`)(2551,`strong`),vN(2552,`(opcional)`),ug()(),Ac(2553,`p`),vN(2554,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),ug(),Ac(2555,`p`)(2556,`strong`),vN(2557,`Componentes compatíveis:`),ug(),Ac(2558,`code`),vN(2559,`po-combo`),ug(),vN(2560,`, `),Ac(2561,`code`),vN(2562,`po-lookup`),ug(),vN(2563,`.`),ug()()(),Ac(2564,`tr`,13)(2565,`td`,14)(2566,`div`,15)(2567,`span`,16),vN(2568,` infiniteScrollDistance`),Kc(2569,`br`),ug()()(),Ac(2570,`td`,17)(2571,`code`,41),vN(2572,`number`),ug()(),Ac(2573,`td`,20)(2574,`em`)(2575,`strong`),vN(2576,`(opcional)`),ug()(),Ac(2577,`p`),vN(2578,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Ac(2579,`strong`),vN(2580,`Exemplos`),ug(),Ac(2581,`code`),vN(2582,`{ infiniteScrollDistance: 80 }`),ug(),vN(2583,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),ug(),Ac(2584,`p`)(2585,`strong`),vN(2586,`Componente compatível:`),ug(),Ac(2587,`code`),vN(2588,`po-combo`),ug(),vN(2589,`.`),ug()()(),Ac(2590,`tr`,13)(2591,`td`,14)(2592,`div`,15)(2593,`span`,16),vN(2594,` invalidValue`),Kc(2595,`br`),ug()()(),Ac(2596,`td`,17)(2597,`code`,28),vN(2598,`boolean`),ug()(),Ac(2599,`td`,20)(2600,`em`)(2601,`strong`),vN(2602,`(opcional)`),ug()(),Ac(2603,`p`),vN(2604,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),Ac(2605,`code`),vN(2606,`p-field-error-message`),ug(),vN(2607,`.`),ug(),Ac(2608,`blockquote`)(2609,`p`),vN(2610,`Caso essa propriedade seja definida como `),Ac(2611,`code`),vN(2612,`true`),ug(),vN(2613,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),ug()(),Ac(2614,`p`)(2615,`strong`),vN(2616,`Componente compatível`),ug(),vN(2617,`: `),Ac(2618,`code`),vN(2619,`po-switch`),ug()()()(),Ac(2620,`tr`,13)(2621,`td`,14)(2622,`div`,15)(2623,`span`,16),vN(2624,` isoFormat`),Kc(2625,`br`),ug()()(),Ac(2626,`td`,17)(2627,`code`,56),vN(2628,`PoDatepickerIsoFormat`),ug()(),Ac(2629,`td`,20)(2630,`em`)(2631,`strong`),vN(2632,`(opcional)`),ug()(),Ac(2633,`p`),vN(2634,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),ug(),Ac(2635,`blockquote`)(2636,`p`),vN(2637,`Veja os valores válidos no `),Ac(2638,`code`),vN(2639,`PoDatepickerIsoFormat`),ug(),vN(2640,`.`),ug()(),Ac(2641,`p`)(2642,`strong`),vN(2643,`Componente compatível:`),ug(),Ac(2644,`code`),vN(2645,`po-datepicker`),ug()()()(),Ac(2646,`tr`,13)(2647,`td`,14)(2648,`div`,15)(2649,`span`,16),vN(2650,` key`),Kc(2651,`br`),ug()()(),Ac(2652,`td`,17)(2653,`code`,28),vN(2654,`boolean`),ug()(),Ac(2655,`td`,20)(2656,`em`)(2657,`strong`),vN(2658,`(opcional)`),ug()(),Ac(2659,`p`),vN(2660,`Identificador`),ug()()(),Ac(2661,`tr`,13)(2662,`td`,14)(2663,`div`,15)(2664,`span`,16),vN(2665,` keydown`),Kc(2666,`br`),ug()()(),Ac(2667,`td`,17)(2668,`code`,29),vN(2669,`Function`),ug()(),Ac(2670,`td`,20)(2671,`em`)(2672,`strong`),vN(2673,`(opcional)`),ug()(),Ac(2674,`p`),vN(2675,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(2676,`code`),vN(2677,`KeyboardEvent`),ug(),vN(2678,` com informações sobre a tecla.`),ug()()(),Ac(2679,`tr`,13)(2680,`td`,14)(2681,`div`,15)(2682,`span`,16),vN(2683,` label`),Kc(2684,`br`),ug()()(),Ac(2685,`td`,17)(2686,`code`,18),vN(2687,`string`),ug()(),Ac(2688,`td`,20)(2689,`em`)(2690,`strong`),vN(2691,`(opcional)`),ug()(),Ac(2692,`p`),vN(2693,`Rótulo do campo exibido.`),ug(),Ac(2694,`p`),vN(2695,`Caso não seja informado, será utilizado como `),Ac(2696,`code`),vN(2697,`label`),ug(),vN(2698,` o valor da propriedade `),Ac(2699,`code`),vN(2700,`property`),ug(),vN(2701,` com a primeira letra em maiúsculo.`),ug()()(),Ac(2702,`tr`,13)(2703,`td`,14)(2704,`div`,15)(2705,`span`,16),vN(2706,` labelPosition`),Kc(2707,`br`),ug()()(),Ac(2708,`td`,17)(2709,`code`,57),vN(2710,`PoSwitchLabelPosition`),ug()(),Ac(2711,`td`,20)(2712,`em`)(2713,`strong`),vN(2714,`(opcional)`),ug()(),Ac(2715,`p`),vN(2716,`Posição de exibição do rótulo do PoSwitch.`),ug(),Ac(2717,`blockquote`)(2718,`p`),vN(2719,`Por padrão exibe à direita.`),ug()()()(),Ac(2720,`tr`,13)(2721,`td`,14)(2722,`div`,15)(2723,`span`,16),vN(2724,` listboxControlPosition`),Kc(2725,`br`),ug()()(),Ac(2726,`td`,17)(2727,`code`,58),vN(2728,`'top' `),ug(),Ac(2729,`code`,59),vN(2730,` 'bottom'`),ug()(),Ac(2731,`td`,20)(2732,`em`)(2733,`strong`),vN(2734,`(opcional)`),ug()(),Ac(2735,`p`),vN(2736,`Define a direção preferida para exibição do `),Ac(2737,`code`),vN(2738,`listbox`),ug(),vN(2739,` em relação ao campo (`),Ac(2740,`code`),vN(2741,`top`),ug(),vN(2742,` ou `),Ac(2743,`code`),vN(2744,`bottom`),ug(),vN(2745,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),ug(),Ac(2746,`p`)(2747,`strong`),vN(2748,`Componentes compatíveis:`),ug(),Ac(2749,`code`),vN(2750,`po-multiselect`),ug(),vN(2751,`, `),Ac(2752,`code`),vN(2753,`po-combo`),ug(),vN(2754,`.`),ug()()(),Ac(2755,`tr`,13)(2756,`td`,14)(2757,`div`,15)(2758,`span`,16),vN(2759,` literals`),Kc(2760,`br`),ug()()(),Ac(2761,`td`,17)(2762,`code`,60),vN(2763,`PoLookupLiterals `),ug(),Ac(2764,`code`,61),vN(2765,` PoMultiselectLiterals `),ug(),Ac(2766,`code`,62),vN(2767,` PoComboLiterals `),ug(),Ac(2768,`code`,63),vN(2769,` PoDatepickerRangeLiterals `),ug(),Ac(2770,`code`,64),vN(2771,` PoUploadLiterals`),ug()(),Ac(2772,`td`,20)(2773,`em`)(2774,`strong`),vN(2775,`(opcional)`),ug()(),Ac(2776,`p`),vN(2777,`Objeto com as literais usadas para os seguintes componentes: `),Ac(2778,`code`),vN(2779,`po-lookup`),ug(),vN(2780,`, `),Ac(2781,`code`),vN(2782,`po-multiselect`),ug(),vN(2783,`, `),Ac(2784,`code`),vN(2785,`po-combo`),ug(),vN(2786,` e `),Ac(2787,`code`),vN(2788,`po-datepicker-range`),ug(),vN(2789,`.`),ug(),Ac(2790,`blockquote`)(2791,`p`),vN(2792,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),ug()(),Ac(2793,`p`)(2794,`strong`),vN(2795,`Componentes compatíveis:`),ug(),Ac(2796,`code`),vN(2797,`po-lookup`),ug(),vN(2798,`, `),Ac(2799,`code`),vN(2800,`po-multiselect`),ug(),vN(2801,`, `),Ac(2802,`code`),vN(2803,`po-combo`),ug(),vN(2804,`, `),Ac(2805,`code`),vN(2806,`po-datepicker-range`),ug()()()(),Ac(2807,`tr`,13)(2808,`td`,14)(2809,`div`,15)(2810,`span`,16),vN(2811,` loading`),Kc(2812,`br`),ug()()(),Ac(2813,`td`,17)(2814,`code`,28),vN(2815,`boolean`),ug()(),Ac(2816,`td`,20)(2817,`em`)(2818,`strong`),vN(2819,`(opcional)`),ug()(),Ac(2820,`p`),vN(2821,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),ug(),Ac(2822,`blockquote`)(2823,`p`),vN(2824,`Por padrão é `),Ac(2825,`code`),vN(2826,`false`),ug(),vN(2827,`.`),ug()(),Ac(2828,`p`)(2829,`strong`),vN(2830,`Componentes compatíveis:`),ug(),Ac(2831,`code`),vN(2832,`po-datepicker`),ug(),vN(2833,`, `),Ac(2834,`code`),vN(2835,`po-datepicker-range`),ug(),vN(2836,`, `),Ac(2837,`code`),vN(2838,`po-number`),ug(),vN(2839,`, `),Ac(2840,`code`),vN(2841,`po-decimal`),ug(),vN(2842,`,
`),Ac(2843,`code`),vN(2844,`po-input`),ug(),vN(2845,`, `),Ac(2846,`code`),vN(2847,`po-select`),ug(),vN(2848,`, `),Ac(2849,`code`),vN(2850,`po-switch`),ug(),vN(2851,`, `),Ac(2852,`code`),vN(2853,`po-combo`),ug(),vN(2854,`, `),Ac(2855,`code`),vN(2856,`po-lookup`),ug(),vN(2857,`, `),Ac(2858,`code`),vN(2859,`po-multiselect`),ug(),vN(2860,`,
`),Ac(2861,`code`),vN(2862,`po-textarea`),ug(),vN(2863,`, `),Ac(2864,`code`),vN(2865,`po-password`),ug(),vN(2866,`, `),Ac(2867,`code`),vN(2868,`po-upload`),ug(),vN(2869,`.`),ug()()(),Ac(2870,`tr`,13)(2871,`td`,14)(2872,`div`,15)(2873,`span`,16),vN(2874,` locale`),Kc(2875,`br`),ug()()(),Ac(2876,`td`,17)(2877,`code`,18),vN(2878,`string`),ug()(),Ac(2879,`td`,20)(2880,`em`)(2881,`strong`),vN(2882,`(opcional)`),ug()(),Ac(2883,`p`),vN(2884,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Ac(2885,`a`,65)(2886,`code`),vN(2887,`I18n`),ug()()(),Ac(2888,`p`),vN(2889,`Exemplo de utilização:`),ug(),Ac(2890,`pre`)(2891,`code`),vN(2892,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),ug()(),Ac(2893,`blockquote`)(2894,`p`),vN(2895,`Para ver quais linguagens suportadas acesse `),Ac(2896,`a`,65)(2897,`code`),vN(2898,`I18n`),ug()()()(),Ac(2899,`p`)(2900,`strong`),vN(2901,`Componentes compatíveis:`),ug(),Ac(2902,`code`),vN(2903,`po-datepicker`),ug(),vN(2904,`, `),Ac(2905,`code`),vN(2906,`po-decimal`),ug(),vN(2907,`, `),Ac(2908,`code`),vN(2909,`po-timepicker`),ug(),vN(2910,`.`),ug()()(),Ac(2911,`tr`,13)(2912,`td`,14)(2913,`div`,15)(2914,`span`,16),vN(2915,` mask`),Kc(2916,`br`),ug()()(),Ac(2917,`td`,17)(2918,`code`,18),vN(2919,`string`),ug()(),Ac(2920,`td`,20)(2921,`em`)(2922,`strong`),vN(2923,`(opcional)`),ug()(),Ac(2924,`p`),vN(2925,`Máscara para o campo.`),ug(),Ac(2926,`p`)(2927,`strong`),vN(2928,`Componente compatível:`),ug(),Ac(2929,`code`),vN(2930,`po-input`),ug(),vN(2931,`.`),ug(),Ac(2932,`blockquote`)(2933,`p`),vN(2934,`também é atribuído ao utilizar a propriedade `),Ac(2935,`code`),vN(2936,`type: time`),ug(),vN(2937,`.`),ug()(),Ac(2938,`blockquote`)(2939,`p`),vN(2940,`Incompatível com `),Ac(2941,`code`),vN(2942,`po-decimal`),ug(),vN(2943,`.`),ug()()()(),Ac(2944,`tr`,13)(2945,`td`,14)(2946,`div`,15)(2947,`span`,16),vN(2948,` maskFormatModel`),Kc(2949,`br`),ug()()(),Ac(2950,`td`,17)(2951,`code`,28),vN(2952,`boolean`),ug()(),Ac(2953,`td`,20)(2954,`em`)(2955,`strong`),vN(2956,`(opcional)`),ug()(),Ac(2957,`p`),vN(2958,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),Ac(2959,`code`),vN(2960,`false`),ug(),vN(2961,`.`),ug(),Ac(2962,`p`)(2963,`strong`),vN(2964,`Componente compatível:`),ug(),Ac(2965,`code`),vN(2966,`po-input`),ug(),vN(2967,`.`),ug(),Ac(2968,`blockquote`)(2969,`p`),vN(2970,`também é atribuído ao utilizar a propriedade `),Ac(2971,`code`),vN(2972,`type: time`),ug(),vN(2973,`.`),ug()()()(),Ac(2974,`tr`,13)(2975,`td`,14)(2976,`div`,15)(2977,`span`,16),vN(2978,` maskNoLengthValidation`),Kc(2979,`br`),ug()()(),Ac(2980,`td`,17)(2981,`code`,28),vN(2982,`boolean`),ug()(),Ac(2983,`td`,20)(2984,`em`)(2985,`strong`),vN(2986,`(opcional)`),ug()(),Ac(2987,`p`),vN(2988,`Controla como o componente aplica as validações de comprimento mínimo (`),Ac(2989,`code`),vN(2990,`minLength`),ug(),vN(2991,`) e máximo (`),Ac(2992,`code`),vN(2993,`maxLength`),ug(),vN(2994,`) quando há uma máscara (`),Ac(2995,`code`),vN(2996,`p-mask`),ug(),vN(2997,`) definida.`),ug(),Ac(2998,`ul`)(2999,`li`),vN(3e3,`Quando `),Ac(3001,`code`),vN(3002,`true`),ug(),vN(3003,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ug(),Ac(3004,`li`),vN(3005,`Quando `),Ac(3006,`code`),vN(3007,`false`),ug(),vN(3008,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ug()(),Ac(3009,`p`)(3010,`strong`),vN(3011,`Componentes compatíveis:`),ug(),Ac(3012,`code`),vN(3013,`po-input`),ug(),vN(3014,`, `),Ac(3015,`code`),vN(3016,`po-decimal`),ug(),vN(3017,`.`),ug(),Ac(3018,`blockquote`)(3019,`p`),vN(3020,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ac(3021,`code`),vN(3022,`p-mask-format-model`),ug(),vN(3023,`.`),ug()(),Ac(3024,`p`),vN(3025,`Exemplo:`),ug(),Ac(3026,`pre`)(3027,`code`),vN(3028,`fields:Array<PoDynamicFormField> = [
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
`),ug()(),Ac(3029,`ul`)(3030,`li`),vN(3031,`Entrada: `),Ac(3032,`code`),vN(3033,`11.111.111/1111-11`),ug(),vN(3034,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),ug()()()(),Ac(3035,`tr`,13)(3036,`td`,14)(3037,`div`,15)(3038,`span`,16),vN(3039,` maxLength`),Kc(3040,`br`),ug()()(),Ac(3041,`td`,17)(3042,`code`,41),vN(3043,`number`),ug()(),Ac(3044,`td`,20)(3045,`em`)(3046,`strong`),vN(3047,`(opcional)`),ug()(),Ac(3048,`p`),vN(3049,`Tamanho máximo de caracteres.`),ug(),Ac(3050,`p`)(3051,`strong`),vN(3052,`Componentes compatíveis:`),ug(),Ac(3053,`code`),vN(3054,`po-input`),ug(),vN(3055,`, `),Ac(3056,`code`),vN(3057,`po-number`),ug(),vN(3058,`, `),Ac(3059,`code`),vN(3060,`po-decimal`),ug(),vN(3061,`, `),Ac(3062,`code`),vN(3063,`po-textarea`),ug(),vN(3064,`, `),Ac(3065,`code`),vN(3066,`po-password`),ug(),vN(3067,`.`),ug()()(),Ac(3068,`tr`,13)(3069,`td`,14)(3070,`div`,15)(3071,`span`,16),vN(3072,` maxTime`),Kc(3073,`br`),ug()()(),Ac(3074,`td`,17)(3075,`code`,18),vN(3076,`string`),ug()(),Ac(3077,`td`,20)(3078,`em`)(3079,`strong`),vN(3080,`(opcional)`),ug()(),Ac(3081,`p`),vN(3082,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Ac(3083,`code`),vN(3084,`HH:mm`),ug(),vN(3085,` ou `),Ac(3086,`code`),vN(3087,`HH:mm:ss`),ug(),vN(3088,`.`),ug(),Ac(3089,`p`)(3090,`strong`),vN(3091,`Componente compatível:`),ug(),Ac(3092,`code`),vN(3093,`po-datetimepicker`),ug(),vN(3094,`, `),Ac(3095,`code`),vN(3096,`po-timepicker`),ug()()()(),Ac(3097,`tr`,13)(3098,`td`,14)(3099,`div`,15)(3100,`span`,16),vN(3101,` maxValue`),Kc(3102,`br`),ug()()(),Ac(3103,`td`,17)(3104,`code`,18),vN(3105,`string `),ug(),Ac(3106,`code`,41),vN(3107,` number`),ug()(),Ac(3108,`td`,20)(3109,`em`)(3110,`strong`),vN(3111,`(opcional)`),ug()(),Ac(3112,`p`),vN(3113,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Ac(3114,`em`),vN(3115,`number`),ug(),vN(3116,`, `),Ac(3117,`em`),vN(3118,`date`),ug(),vN(3119,`, `),Ac(3120,`em`),vN(3121,`dateTime`),ug(),vN(3122,` ou `),Ac(3123,`em`),vN(3124,`time`),ug(),vN(3125,`.`),ug(),Ac(3126,`blockquote`)(3127,`p`),vN(3128,`Para `),Ac(3129,`code`),vN(3130,`po-timepicker`),ug(),vN(3131,`, o valor deve estar no formato `),Ac(3132,`code`),vN(3133,`HH:mm`),ug(),vN(3134,` ou `),Ac(3135,`code`),vN(3136,`HH:mm:ss`),ug(),vN(3137,`.`),ug()(),Ac(3138,`p`)(3139,`strong`),vN(3140,`Componentes compatíveis:`),ug(),Ac(3141,`code`),vN(3142,`po-datepicker`),ug(),vN(3143,`, `),Ac(3144,`code`),vN(3145,`po-datepicker-range`),ug(),vN(3146,`, `),Ac(3147,`code`),vN(3148,`po-number`),ug(),vN(3149,`, `),Ac(3150,`code`),vN(3151,`po-decimal`),ug(),vN(3152,`, `),Ac(3153,`code`),vN(3154,`po-timepicker`),ug()()()(),Ac(3155,`tr`,13)(3156,`td`,14)(3157,`div`,15)(3158,`span`,16),vN(3159,` minLength`),Kc(3160,`br`),ug()()(),Ac(3161,`td`,17)(3162,`code`,41),vN(3163,`number`),ug()(),Ac(3164,`td`,20)(3165,`em`)(3166,`strong`),vN(3167,`(opcional)`),ug()(),Ac(3168,`p`),vN(3169,`Tamanho mínimo de caracteres.`),ug(),Ac(3170,`p`)(3171,`strong`),vN(3172,`Componentes compatíveis:`),ug(),Ac(3173,`code`),vN(3174,`po-input`),ug(),vN(3175,`, `),Ac(3176,`code`),vN(3177,`po-number`),ug(),vN(3178,`, `),Ac(3179,`code`),vN(3180,`po-decimal`),ug(),vN(3181,`, `),Ac(3182,`code`),vN(3183,`po-textarea`),ug(),vN(3184,`, `),Ac(3185,`code`),vN(3186,`po-password`),ug(),vN(3187,`.`),ug()()(),Ac(3188,`tr`,13)(3189,`td`,14)(3190,`div`,15)(3191,`span`,16),vN(3192,` minTime`),Kc(3193,`br`),ug()()(),Ac(3194,`td`,17)(3195,`code`,18),vN(3196,`string`),ug()(),Ac(3197,`td`,20)(3198,`em`)(3199,`strong`),vN(3200,`(opcional)`),ug()(),Ac(3201,`p`),vN(3202,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Ac(3203,`code`),vN(3204,`HH:mm`),ug(),vN(3205,` ou `),Ac(3206,`code`),vN(3207,`HH:mm:ss`),ug(),vN(3208,`.`),ug(),Ac(3209,`p`)(3210,`strong`),vN(3211,`Componente compatível:`),ug(),Ac(3212,`code`),vN(3213,`po-datetimepicker`),ug(),vN(3214,`, `),Ac(3215,`code`),vN(3216,`po-timepicker`),ug()()()(),Ac(3217,`tr`,13)(3218,`td`,14)(3219,`div`,15)(3220,`span`,16),vN(3221,` minValue`),Kc(3222,`br`),ug()()(),Ac(3223,`td`,17)(3224,`code`,18),vN(3225,`string `),ug(),Ac(3226,`code`,41),vN(3227,` number`),ug()(),Ac(3228,`td`,20)(3229,`em`)(3230,`strong`),vN(3231,`(opcional)`),ug()(),Ac(3232,`p`),vN(3233,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),Ac(3234,`em`),vN(3235,`number`),ug(),vN(3236,`, `),Ac(3237,`em`),vN(3238,`date`),ug(),vN(3239,`, `),Ac(3240,`em`),vN(3241,`dateTime`),ug(),vN(3242,` ou `),Ac(3243,`em`),vN(3244,`time`),ug(),vN(3245,`.`),ug(),Ac(3246,`blockquote`)(3247,`p`),vN(3248,`Para `),Ac(3249,`code`),vN(3250,`po-timepicker`),ug(),vN(3251,`, o valor deve estar no formato `),Ac(3252,`code`),vN(3253,`HH:mm`),ug(),vN(3254,` ou `),Ac(3255,`code`),vN(3256,`HH:mm:ss`),ug(),vN(3257,`.`),ug()(),Ac(3258,`p`)(3259,`strong`),vN(3260,`Componentes compatíveis:`),ug(),Ac(3261,`code`),vN(3262,`po-datepicker`),ug(),vN(3263,`, `),Ac(3264,`code`),vN(3265,`po-datepicker-range`),ug(),vN(3266,`, `),Ac(3267,`code`),vN(3268,`po-number`),ug(),vN(3269,`, `),Ac(3270,`code`),vN(3271,`po-decimal`),ug(),vN(3272,`, `),Ac(3273,`code`),vN(3274,`po-timepicker`),ug()()()(),Ac(3275,`tr`,13)(3276,`td`,14)(3277,`div`,15)(3278,`span`,16),vN(3279,` minuteInterval`),Kc(3280,`br`),ug()()(),Ac(3281,`td`,17)(3282,`code`,41),vN(3283,`number`),ug()(),Ac(3284,`td`,20)(3285,`em`)(3286,`strong`),vN(3287,`(opcional)`),ug()(),Ac(3288,`p`),vN(3289,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),ug()()(),Ac(3290,`tr`,13)(3291,`td`,14)(3292,`div`,15)(3293,`span`,16),vN(3294,` mode`),Kc(3295,`br`),ug()()(),Ac(3296,`td`,17)(3297,`code`,66),vN(3298,`'month-year' `),ug(),Ac(3299,`code`,67),vN(3300,` 'year'`),ug()(),Ac(3301,`td`,20)(3302,`em`)(3303,`strong`),vN(3304,`(opcional)`),ug()(),Ac(3305,`p`),vN(3306,`Define o modo de seleção do `),Ac(3307,`code`),vN(3308,`po-datepicker`),ug(),vN(3309,`.`),ug(),Ac(3310,`p`),vN(3311,`Valores aceitos:`),ug(),Ac(3312,`ul`)(3313,`li`)(3314,`code`),vN(3315,`'month-year'`),ug(),vN(3316,`: exibe seleção de mês e ano (formato `),Ac(3317,`code`),vN(3318,`MM/YYYY`),ug(),vN(3319,`)`),ug(),Ac(3320,`li`)(3321,`code`),vN(3322,`'year'`),ug(),vN(3323,`: exibe seleção apenas de ano (formato `),Ac(3324,`code`),vN(3325,`YYYY`),ug(),vN(3326,`)`),ug()(),Ac(3327,`p`)(3328,`strong`),vN(3329,`Componente compatível:`),ug(),Ac(3330,`code`),vN(3331,`po-datepicker`),ug()()()(),Ac(3332,`tr`,13)(3333,`td`,14)(3334,`div`,15)(3335,`span`,16),vN(3336,` modelFormat`),Kc(3337,`br`),ug()()(),Ac(3338,`td`,17)(3339,`code`,68),vN(3340,`PoTimepickerModelFormat`),ug()(),Ac(3341,`td`,20)(3342,`em`)(3343,`strong`),vN(3344,`(opcional)`),ug()(),Ac(3345,`p`),vN(3346,`Define o formato do valor do horário a ser utilizado no model do `),Ac(3347,`code`),vN(3348,`po-timepicker`),ug(),vN(3349,`.`),ug(),Ac(3350,`blockquote`)(3351,`p`),vN(3352,`Veja os valores válidos no `),Ac(3353,`code`),vN(3354,`PoTimepickerModelFormat`),ug(),vN(3355,`.`),ug()(),Ac(3356,`p`)(3357,`strong`),vN(3358,`Componente compatível:`),ug(),Ac(3359,`code`),vN(3360,`po-timepicker`),ug()()()(),Ac(3361,`tr`,13)(3362,`td`,14)(3363,`div`,15)(3364,`span`,16),vN(3365,` multiple`),Kc(3366,`br`),ug()()(),Ac(3367,`td`,17)(3368,`code`,28),vN(3369,`boolean`),ug()(),Ac(3370,`td`,20)(3371,`em`)(3372,`strong`),vN(3373,`(opcional)`),ug()(),Ac(3374,`p`),vN(3375,`Permite a seleção de múltiplos itens.`),ug(),Ac(3376,`p`)(3377,`strong`),vN(3378,`Componentes compatíveis:`),ug(),Ac(3379,`code`),vN(3380,`po-lookup`),ug(),vN(3381,`, `),Ac(3382,`code`),vN(3383,`po-upload`),ug()()()(),Ac(3384,`tr`,13)(3385,`td`,14)(3386,`div`,15)(3387,`span`,16),vN(3388,` noAutocomplete`),Kc(3389,`br`),ug()()(),Ac(3390,`td`,17)(3391,`code`,28),vN(3392,`boolean`),ug()(),Ac(3393,`td`,20)(3394,`em`)(3395,`strong`),vN(3396,`(opcional)`),ug()(),Ac(3397,`p`),vN(3398,`Define a propriedade nativa `),Ac(3399,`code`),vN(3400,`autocomplete`),ug(),vN(3401,` do campo como off.`),ug(),Ac(3402,`p`)(3403,`strong`),vN(3404,`Componentes compatíveis:`),ug(),Ac(3405,`code`),vN(3406,`po-datepicker`),ug(),vN(3407,`, `),Ac(3408,`code`),vN(3409,`po-datepicker-range`),ug(),vN(3410,`, `),Ac(3411,`code`),vN(3412,`po-input`),ug(),vN(3413,`, `),Ac(3414,`code`),vN(3415,`po-number`),ug(),vN(3416,`, `),Ac(3417,`code`),vN(3418,`po-decimal`),ug(),vN(3419,`,
`),Ac(3420,`code`),vN(3421,`po-lookup`),ug(),vN(3422,`, `),Ac(3423,`code`),vN(3424,`po-password`),ug(),vN(3425,`, `),Ac(3426,`code`),vN(3427,`po-timepicker`),ug(),vN(3428,`.`),ug()()(),Ac(3429,`tr`,13)(3430,`td`,14)(3431,`div`,15)(3432,`span`,16),vN(3433,` offsetColumns`),Kc(3434,`br`),ug()()(),Ac(3435,`td`,17)(3436,`code`,41),vN(3437,`number`),ug()(),Ac(3438,`td`,20)(3439,`em`)(3440,`strong`),vN(3441,`(opcional)`),ug()(),Ac(3442,`p`),vN(3443,`Tamanho do espaço de exibição do campo em telas.`),ug(),Ac(3444,`p`),vN(3445,`Deve ser usado o sistema de `),Ac(3446,`strong`),vN(3447,`grid`),ug(),vN(3448,` do PO (1 ... 12 colunas).`),ug(),Ac(3449,`blockquote`)(3450,`p`),vN(3451,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),ug()()()(),Ac(3452,`tr`,13)(3453,`td`,14)(3454,`div`,15)(3455,`span`,16),vN(3456,` offsetLgColumns`),Kc(3457,`br`),ug()()(),Ac(3458,`td`,17)(3459,`code`,41),vN(3460,`number`),ug()(),Ac(3461,`td`,20)(3462,`em`)(3463,`strong`),vN(3464,`(opcional)`),ug()(),Ac(3465,`p`),vN(3466,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),ug(),Ac(3467,`p`),vN(3468,`Deve ser usado o sistema de `),Ac(3469,`strong`),vN(3470,`grid`),ug(),vN(3471,` do PO (1 ... 12 colunas).`),ug(),Ac(3472,`blockquote`)(3473,`p`),vN(3474,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(3475,`code`),vN(3476,`offsetColumns`),ug(),vN(3477,`.`),ug()()()(),Ac(3478,`tr`,13)(3479,`td`,14)(3480,`div`,15)(3481,`span`,16),vN(3482,` offsetMdColumns`),Kc(3483,`br`),ug()()(),Ac(3484,`td`,17)(3485,`code`,41),vN(3486,`number`),ug()(),Ac(3487,`td`,20)(3488,`em`)(3489,`strong`),vN(3490,`(opcional)`),ug()(),Ac(3491,`p`),vN(3492,`Tamanho do espaço de exibição do campo em telas médias (md).`),ug(),Ac(3493,`p`),vN(3494,`Deve ser usado o sistema de `),Ac(3495,`strong`),vN(3496,`grid`),ug(),vN(3497,` do PO (1 ... 12 colunas).`),ug(),Ac(3498,`blockquote`)(3499,`p`),vN(3500,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(3501,`code`),vN(3502,`offsetColumns`),ug(),vN(3503,`.`),ug()()()(),Ac(3504,`tr`,13)(3505,`td`,14)(3506,`div`,15)(3507,`span`,16),vN(3508,` offsetSmColumns`),Kc(3509,`br`),ug()()(),Ac(3510,`td`,17)(3511,`code`,41),vN(3512,`number`),ug()(),Ac(3513,`td`,20)(3514,`em`)(3515,`strong`),vN(3516,`(opcional)`),ug()(),Ac(3517,`p`),vN(3518,`Tamanho do espaço de exibição do campo em telas menores (sm).`),ug(),Ac(3519,`p`),vN(3520,`Deve ser usado o sistema de `),Ac(3521,`strong`),vN(3522,`grid`),ug(),vN(3523,` do PO (1 ... 12 colunas).`),ug(),Ac(3524,`blockquote`)(3525,`p`),vN(3526,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(3527,`code`),vN(3528,`offsetColumns`),ug(),vN(3529,`.`),ug()()()(),Ac(3530,`tr`,13)(3531,`td`,14)(3532,`div`,15)(3533,`span`,16),vN(3534,` offsetXlColumns`),Kc(3535,`br`),ug()()(),Ac(3536,`td`,17)(3537,`code`,41),vN(3538,`number`),ug()(),Ac(3539,`td`,20)(3540,`em`)(3541,`strong`),vN(3542,`(opcional)`),ug()(),Ac(3543,`p`),vN(3544,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),ug(),Ac(3545,`p`),vN(3546,`Deve ser usado o sistema de `),Ac(3547,`strong`),vN(3548,`grid`),ug(),vN(3549,` do PO (1 ... 12 colunas).`),ug(),Ac(3550,`blockquote`)(3551,`p`),vN(3552,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),Ac(3553,`code`),vN(3554,`offsetColumns`),ug(),vN(3555,`.`),ug()()()(),Ac(3556,`tr`,13)(3557,`td`,14)(3558,`div`,15)(3559,`span`,16),vN(3560,` onError`),Kc(3561,`br`),ug()()(),Ac(3562,`td`,17)(3563,`code`,29),vN(3564,`Function`),ug()(),Ac(3565,`td`,20)(3566,`em`)(3567,`strong`),vN(3568,`(opcional)`),ug()(),Ac(3569,`p`),vN(3570,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),ug(),Ac(3571,`blockquote`)(3572,`p`),vN(3573,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ac(3574,`code`),vN(3575,`HttpErrorResponse`),ug(),vN(3576,`.`),ug()(),Ac(3577,`p`)(3578,`strong`),vN(3579,`Componente compatível`),ug(),vN(3580,`: `),Ac(3581,`code`),vN(3582,`po-upload`),ug()()()(),Ac(3583,`tr`,13)(3584,`td`,14)(3585,`div`,15)(3586,`span`,16),vN(3587,` onSuccess`),Kc(3588,`br`),ug()()(),Ac(3589,`td`,17)(3590,`code`,29),vN(3591,`Function`),ug()(),Ac(3592,`td`,20)(3593,`em`)(3594,`strong`),vN(3595,`(opcional)`),ug()(),Ac(3596,`p`),vN(3597,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),ug(),Ac(3598,`blockquote`)(3599,`p`),vN(3600,`Por parâmetro será passado o objeto do retorno que é do tipo `),Ac(3601,`code`),vN(3602,`HttpResponse`),ug(),vN(3603,`.`),ug()(),Ac(3604,`p`)(3605,`strong`),vN(3606,`Componente compatível`),ug(),vN(3607,`: `),Ac(3608,`code`),vN(3609,`po-upload`),ug()()()(),Ac(3610,`tr`,13)(3611,`td`,14)(3612,`div`,15)(3613,`span`,16),vN(3614,` onUpload`),Kc(3615,`br`),ug()()(),Ac(3616,`td`,17)(3617,`code`,29),vN(3618,`Function`),ug()(),Ac(3619,`td`,20)(3620,`em`)(3621,`strong`),vN(3622,`(opcional)`),ug()(),Ac(3623,`p`),vN(3624,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),ug(),Ac(3625,`pre`)(3626,`code`),vN(3627,`event.data = {id: 'id do usu\xE1rio'};
`),ug()(),Ac(3628,`p`)(3629,`strong`),vN(3630,`Componente compatível`),ug(),vN(3631,`: `),Ac(3632,`code`),vN(3633,`po-upload`),ug()()()(),Ac(3634,`tr`,13)(3635,`td`,14)(3636,`div`,15)(3637,`span`,16),vN(3638,` optional`),Kc(3639,`br`),ug()()(),Ac(3640,`td`,17)(3641,`code`,28),vN(3642,`boolean`),ug()(),Ac(3643,`td`,20)(3644,`em`)(3645,`strong`),vN(3646,`(opcional)`),ug()(),Ac(3647,`p`),vN(3648,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(3649,`blockquote`)(3650,`p`),vN(3651,`A indicação não será exibida, se:`),ug()(),Ac(3652,`ul`)(3653,`li`),vN(3654,`O campo for `),Ac(3655,`code`),vN(3656,`required`),ug(),vN(3657,`, ou;`),ug(),Ac(3658,`li`),vN(3659,`Não possuir `),Ac(3660,`code`),vN(3661,`help`),ug(),vN(3662,` e `),Ac(3663,`code`),vN(3664,`label`),ug(),vN(3665,`.`),ug()(),Ac(3666,`p`)(3667,`strong`),vN(3668,`Componentes compatíveis:`),ug(),Ac(3669,`code`),vN(3670,`po-datepicker`),ug(),vN(3671,`, `),Ac(3672,`code`),vN(3673,`po-datepicker-range`),ug(),vN(3674,`, `),Ac(3675,`code`),vN(3676,`po-timepicker`),ug(),vN(3677,`, `),Ac(3678,`code`),vN(3679,`po-input`),ug(),vN(3680,`, `),Ac(3681,`code`),vN(3682,`po-number`),ug(),vN(3683,`,
`),Ac(3684,`code`),vN(3685,`po-decimal`),ug(),vN(3686,`, `),Ac(3687,`code`),vN(3688,`po-select`),ug(),vN(3689,`, `),Ac(3690,`code`),vN(3691,`po-radio-group`),ug(),vN(3692,`, `),Ac(3693,`code`),vN(3694,`po-combo`),ug(),vN(3695,`, `),Ac(3696,`code`),vN(3697,`po-lookup`),ug(),vN(3698,`, `),Ac(3699,`code`),vN(3700,`po-checkbox-group`),ug(),vN(3701,`, `),Ac(3702,`code`),vN(3703,`po-multiselect`),ug(),vN(3704,`,
`),Ac(3705,`code`),vN(3706,`po-textarea`),ug(),vN(3707,`, `),Ac(3708,`code`),vN(3709,`po-password`),ug(),vN(3710,`.`),ug()()(),Ac(3711,`tr`,13)(3712,`td`,14)(3713,`div`,15)(3714,`span`,16),vN(3715,` options`),Kc(3716,`br`),ug()()(),Ac(3717,`td`,17)(3718,`code`,32),vN(3719,`Array<string> `),ug(),Ac(3720,`code`,69),vN(3721,` Array<PoSelectOption> `),ug(),Ac(3722,`code`,70),vN(3723,` Array<PoMultiselectOption> `),ug(),Ac(3724,`code`,71),vN(3725,` Array<PoCheckboxGroupOption> `),ug(),Ac(3726,`code`,72),vN(3727,` Array<any>`),ug()(),Ac(3728,`td`,20)(3729,`em`)(3730,`strong`),vN(3731,`(opcional)`),ug()(),Ac(3732,`p`),vN(3733,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),ug(),Ac(3734,`p`)(3735,`strong`),vN(3736,`Componentes compatíveis:`),ug(),Ac(3737,`code`),vN(3738,`po-select`),ug(),vN(3739,`, `),Ac(3740,`code`),vN(3741,`po-radio-group`),ug(),vN(3742,`, `),Ac(3743,`code`),vN(3744,`po-checkbox-group`),ug(),vN(3745,`, `),Ac(3746,`code`),vN(3747,`po-multiselect`),ug(),vN(3748,`.`),ug()()(),Ac(3749,`tr`,13)(3750,`td`,14)(3751,`div`,15)(3752,`span`,16),vN(3753,` optionsMulti`),Kc(3754,`br`),ug()()(),Ac(3755,`td`,17)(3756,`code`,28),vN(3757,`boolean`),ug()(),Ac(3758,`td`,20)(3759,`em`)(3760,`strong`),vN(3761,`(opcional)`),ug()(),Ac(3762,`p`),vN(3763,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),ug()()(),Ac(3764,`tr`,13)(3765,`td`,14)(3766,`div`,15)(3767,`span`,16),vN(3768,` optionsService`),Kc(3769,`br`),ug()()(),Ac(3770,`td`,17)(3771,`code`,18),vN(3772,`string `),ug(),Ac(3773,`code`,73),vN(3774,` PoComboFilter `),ug(),Ac(3775,`code`,74),vN(3776,` PoMultiselectFilter`),ug()(),Ac(3777,`td`,20)(3778,`em`)(3779,`strong`),vN(3780,`(opcional)`),ug()(),Ac(3781,`p`),vN(3782,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),Ac(3783,`strong`),vN(3784,`Importante`),ug()(),Ac(3785,`blockquote`)(3786,`p`),vN(3787,`Para que funcione corretamente, é importante que o serviço siga o `),Ac(3788,`a`,75),vN(3789,`guia de API do PO UI`),ug(),vN(3790,`.`),ug()()()(),Ac(3791,`tr`,13)(3792,`td`,14)(3793,`div`,15)(3794,`span`,16),vN(3795,` order`),Kc(3796,`br`),ug()()(),Ac(3797,`td`,17)(3798,`code`,41),vN(3799,`number`),ug()(),Ac(3800,`td`,20)(3801,`em`)(3802,`strong`),vN(3803,`(opcional)`),ug()(),Ac(3804,`p`),vN(3805,`Informa a ordem de exibição do campo.`),ug(),Ac(3806,`p`),vN(3807,`Exemplo de utilização:`),ug(),Ac(3808,`p`)(3809,`code`),vN(3810,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),ug()(),Ac(3811,`p`),vN(3812,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Ac(3813,`code`),vN(3814,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),ug()(),Ac(3815,`p`),vN(3816,`Só serão aceitos valores com números inteiros maiores do que zero.`),ug(),Ac(3817,`p`),vN(3818,`Campos sem `),Ac(3819,`code`),vN(3820,`order`),ug(),vN(3821,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),ug()()(),Ac(3822,`tr`,13)(3823,`td`,14)(3824,`div`,15)(3825,`span`,16),vN(3826,` params`),Kc(3827,`br`),ug()()(),Ac(3828,`td`,17)(3829,`code`,33),vN(3830,`any`),ug()(),Ac(3831,`td`,20)(3832,`em`)(3833,`strong`),vN(3834,`(opcional)`),ug()(),Ac(3835,`p`),vN(3836,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),Ac(3837,`code`),vN(3838,`po-lookup`),ug(),vN(3839,` e
`),Ac(3840,`code`),vN(3841,`po-combo`),ug(),vN(3842,`.`),ug(),Ac(3843,`p`),vN(3844,`Por exemplo, para o parâmetro `),Ac(3845,`code`),vN(3846,`{ age: 23 }`),ug(),vN(3847,` a URL da requisição ficaria:`),ug(),Ac(3848,`p`)(3849,`code`),vN(3850,`url + ?age=23&filter=Peter`),ug()()()(),Ac(3851,`tr`,13)(3852,`td`,14)(3853,`div`,15)(3854,`span`,16),vN(3855,` pattern`),Kc(3856,`br`),ug()()(),Ac(3857,`td`,17)(3858,`code`,18),vN(3859,`string`),ug()(),Ac(3860,`td`,20)(3861,`em`)(3862,`strong`),vN(3863,`(opcional)`),ug()(),Ac(3864,`p`),vN(3865,`Regex para validação do campo.`),ug(),Ac(3866,`p`)(3867,`strong`),vN(3868,`Componentes compatíveis:`),ug(),Ac(3869,`code`),vN(3870,`po-input`),ug(),vN(3871,`, `),Ac(3872,`code`),vN(3873,`po-password`),ug(),vN(3874,`.`),ug(),Ac(3875,`blockquote`)(3876,`p`),vN(3877,`Incompatível com `),Ac(3878,`code`),vN(3879,`po-decimal`),ug(),vN(3880,`.`),ug()()()(),Ac(3881,`tr`,13)(3882,`td`,14)(3883,`div`,15)(3884,`span`,16),vN(3885,` placeholder`),Kc(3886,`br`),ug()()(),Ac(3887,`td`,17)(3888,`code`,18),vN(3889,`string`),ug()(),Ac(3890,`td`,20)(3891,`em`)(3892,`strong`),vN(3893,`(opcional)`),ug()(),Ac(3894,`p`),vN(3895,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),ug(),Ac(3896,`p`)(3897,`strong`),vN(3898,`Componentes compatíveis:`),ug(),Ac(3899,`code`),vN(3900,`po-datepicker`),ug(),vN(3901,`, `),Ac(3902,`code`),vN(3903,`po-datepicker-range`),ug(),vN(3904,`, `),Ac(3905,`code`),vN(3906,`po-timepicker`),ug(),vN(3907,`, `),Ac(3908,`code`),vN(3909,`po-input`),ug(),vN(3910,`, `),Ac(3911,`code`),vN(3912,`po-number`),ug(),vN(3913,`, `),Ac(3914,`code`),vN(3915,`po-decimal`),ug(),vN(3916,`, `),Ac(3917,`code`),vN(3918,`po-select`),ug(),vN(3919,`, `),Ac(3920,`code`),vN(3921,`po-combo`),ug(),vN(3922,`, `),Ac(3923,`code`),vN(3924,`po-lookup`),ug(),vN(3925,`, `),Ac(3926,`code`),vN(3927,`po-multiselect`),ug(),vN(3928,`, `),Ac(3929,`code`),vN(3930,`po-textarea`),ug(),vN(3931,`, `),Ac(3932,`code`),vN(3933,`po-password`),ug(),vN(3934,`.`),ug()()(),Ac(3935,`tr`,13)(3936,`td`,14)(3937,`div`,15)(3938,`span`,16),vN(3939,` placeholderSearch`),Kc(3940,`br`),ug()()(),Ac(3941,`td`,17)(3942,`code`,18),vN(3943,`string`),ug()(),Ac(3944,`td`,20)(3945,`em`)(3946,`strong`),vN(3947,`(opcional)`),ug()(),Ac(3948,`p`),vN(3949,`Placeholder do campo de pesquisa do `),Ac(3950,`code`),vN(3951,`po-multiselect`),ug(),vN(3952,`.`),ug(),Ac(3953,`blockquote`)(3954,`p`),vN(3955,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),ug()()()(),Ac(3956,`tr`,13)(3957,`td`,14)(3958,`div`,15)(3959,`span`,16),vN(3960,` property`),Kc(3961,`br`),ug()()(),Ac(3962,`td`,17)(3963,`code`,18),vN(3964,`string`),ug()(),Ac(3965,`td`,20)(3966,`p`),vN(3967,`Nome de referência do campo.`),ug()()(),Ac(3968,`tr`,13)(3969,`td`,14)(3970,`div`,15)(3971,`span`,16),vN(3972,` range`),Kc(3973,`br`),ug()()(),Ac(3974,`td`,17)(3975,`code`,28),vN(3976,`boolean`),ug()(),Ac(3977,`td`,20)(3978,`em`)(3979,`strong`),vN(3980,`(opcional)`),ug()(),Ac(3981,`p`),vN(3982,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),ug(),Ac(3983,`blockquote`)(3984,`p`),vN(3985,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),ug()()()(),Ac(3986,`tr`,13)(3987,`td`,14)(3988,`div`,15)(3989,`span`,16),vN(3990,` rangePresetOptions`),Kc(3991,`br`),ug()()(),Ac(3992,`td`,17)(3993,`code`,76),vN(3994,`Array<PoCalendarRangePreset>`),ug()(),Ac(3995,`td`,20)(3996,`em`)(3997,`strong`),vN(3998,`(opcional)`),ug()(),Ac(3999,`p`),vN(4e3,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),ug(),Ac(4001,`p`),vN(4002,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),Ac(4003,`code`),vN(4004,`PoCalendarRangePreset`),ug(),vN(4005,`.`),ug(),Ac(4006,`p`)(4007,`strong`),vN(4008,`Componente compatível:`),ug(),Ac(4009,`code`),vN(4010,`po-datepicker-range`),ug()()()(),Ac(4011,`tr`,13)(4012,`td`,14)(4013,`div`,15)(4014,`span`,16),vN(4015,` rangePresets`),Kc(4016,`br`),ug()()(),Ac(4017,`td`,17)(4018,`code`,28),vN(4019,`boolean `),ug(),Ac(4020,`code`,32),vN(4021,` Array<string>`),ug()(),Ac(4022,`td`,20)(4023,`em`)(4024,`strong`),vN(4025,`(opcional)`),ug()(),Ac(4026,`p`),vN(4027,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),ug(),Ac(4028,`p`),vN(4029,`Aceita os seguintes valores:`),ug(),Ac(4030,`ul`)(4031,`li`)(4032,`code`),vN(4033,`true`),ug(),vN(4034,`: exibe todos os presets padrão.`),ug(),Ac(4035,`li`)(4036,`code`),vN(4037,`false`),ug(),vN(4038,`: não exibe os presets padrão.`),ug(),Ac(4039,`li`)(4040,`code`),vN(4041,`Array<string>`),ug(),vN(4042,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),ug()(),Ac(4043,`p`)(4044,`strong`),vN(4045,`Componente compatível:`),ug(),Ac(4046,`code`),vN(4047,`po-datepicker-range`),ug()()()(),Ac(4048,`tr`,13)(4049,`td`,14)(4050,`div`,15)(4051,`span`,16),vN(4052,` rangePresetsOrder`),Kc(4053,`br`),ug()()(),Ac(4054,`td`,17)(4055,`code`,77),vN(4056,`'asc' `),ug(),Ac(4057,`code`,78),vN(4058,` 'desc'`),ug()(),Ac(4059,`td`,20)(4060,`em`)(4061,`strong`),vN(4062,`(opcional)`),ug()(),Ac(4063,`p`),vN(4064,`Define a ordenação dos presets na lista.`),ug(),Ac(4065,`p`),vN(4066,`Valores aceitos:`),ug(),Ac(4067,`ul`)(4068,`li`)(4069,`code`),vN(4070,`'asc'`),ug(),vN(4071,`: ordenação crescente (passado → futuro)`),ug(),Ac(4072,`li`)(4073,`code`),vN(4074,`'desc'`),ug(),vN(4075,`: ordenação decrescente (futuro → passado)`),ug()(),Ac(4076,`p`)(4077,`strong`),vN(4078,`Componente compatível:`),ug(),Ac(4079,`code`),vN(4080,`po-datepicker-range`),ug()()()(),Ac(4081,`tr`,13)(4082,`td`,14)(4083,`div`,15)(4084,`span`,16),vN(4085,` readonly`),Kc(4086,`br`),ug()()(),Ac(4087,`td`,17)(4088,`code`,28),vN(4089,`boolean`),ug()(),Ac(4090,`td`,20)(4091,`em`)(4092,`strong`),vN(4093,`(opcional)`),ug()(),Ac(4094,`p`),vN(4095,`Indica que o campo será somente leitura.`),ug(),Ac(4096,`p`)(4097,`strong`),vN(4098,`Componentes compatíveis:`),ug(),Ac(4099,`code`),vN(4100,`po-datepicker`),ug(),vN(4101,`, `),Ac(4102,`code`),vN(4103,`po-datepicker-range`),ug(),vN(4104,`, `),Ac(4105,`code`),vN(4106,`po-timepicker`),ug(),vN(4107,`, `),Ac(4108,`code`),vN(4109,`po-input`),ug(),vN(4110,`, `),Ac(4111,`code`),vN(4112,`po-number`),ug(),vN(4113,`,
`),Ac(4114,`code`),vN(4115,`po-decimal`),ug(),vN(4116,`, `),Ac(4117,`code`),vN(4118,`po-select`),ug(),vN(4119,`, `),Ac(4120,`code`),vN(4121,`po-textarea`),ug(),vN(4122,`, `),Ac(4123,`code`),vN(4124,`po-password`),ug(),vN(4125,`.`),ug()()(),Ac(4126,`tr`,13)(4127,`td`,14)(4128,`div`,15)(4129,`span`,16),vN(4130,` removeInitialFilter`),Kc(4131,`br`),ug()()(),Ac(4132,`td`,17)(4133,`code`,28),vN(4134,`boolean`),ug()(),Ac(4135,`td`,20)(4136,`em`)(4137,`strong`),vN(4138,`(opcional)`),ug()(),Ac(4139,`p`),vN(4140,`Define que o filtro no primeiro clique será removido.`),ug(),Ac(4141,`blockquote`)(4142,`p`),vN(4143,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),ug()(),Ac(4144,`p`)(4145,`strong`),vN(4146,`Componente compatível`),ug(),vN(4147,`: `),Ac(4148,`code`),vN(4149,`po-combo`),ug()()()(),Ac(4150,`tr`,13)(4151,`td`,14)(4152,`div`,15)(4153,`span`,16),vN(4154,` required`),Kc(4155,`br`),ug()()(),Ac(4156,`td`,17)(4157,`code`,28),vN(4158,`boolean`),ug()(),Ac(4159,`td`,20)(4160,`em`)(4161,`strong`),vN(4162,`(opcional)`),ug()(),Ac(4163,`p`),vN(4164,`Define a obrigatoriedade do campo.`),ug(),Ac(4165,`p`)(4166,`strong`),vN(4167,`Componentes compatíveis:`),ug(),Ac(4168,`code`),vN(4169,`po-datepicker`),ug(),vN(4170,`, `),Ac(4171,`code`),vN(4172,`po-datepicker-range`),ug(),vN(4173,`, `),Ac(4174,`code`),vN(4175,`po-timepicker`),ug(),vN(4176,`, `),Ac(4177,`code`),vN(4178,`po-input`),ug(),vN(4179,`, `),Ac(4180,`code`),vN(4181,`po-number`),ug(),vN(4182,`,
`),Ac(4183,`code`),vN(4184,`po-decimal`),ug(),vN(4185,`, `),Ac(4186,`code`),vN(4187,`po-select`),ug(),vN(4188,`, `),Ac(4189,`code`),vN(4190,`po-radio-group`),ug(),vN(4191,`, `),Ac(4192,`code`),vN(4193,`po-combo`),ug(),vN(4194,`, `),Ac(4195,`code`),vN(4196,`po-lookup`),ug(),vN(4197,`, `),Ac(4198,`code`),vN(4199,`po-checkbox-group`),ug(),vN(4200,`, `),Ac(4201,`code`),vN(4202,`po-multiselect`),ug(),vN(4203,`,
`),Ac(4204,`code`),vN(4205,`po-textarea`),ug(),vN(4206,`, `),Ac(4207,`code`),vN(4208,"po-password``, "),ug(),vN(4209,"po-upload`."),ug()()(),Ac(4210,`tr`,13)(4211,`td`,14)(4212,`div`,15)(4213,`span`,16),vN(4214,` requiredFieldErrorMessage`),Kc(4215,`br`),ug()()(),Ac(4216,`td`,17)(4217,`code`,28),vN(4218,`boolean`),ug()(),Ac(4219,`td`,20)(4220,`em`)(4221,`strong`),vN(4222,`(opcional)`),ug()(),Ac(4223,`p`),vN(4224,`Exibe a mensagem setada na propriedade `),Ac(4225,`code`),vN(4226,`errorMessage`),ug(),vN(4227,` se o campo estiver vazio e for requerido.`),ug(),Ac(4228,`blockquote`)(4229,`p`),vN(4230,`Necessário que a propriedade `),Ac(4231,`code`),vN(4232,`required`),ug(),vN(4233,` esteja habilitada.`),ug()(),Ac(4234,`p`)(4235,`strong`),vN(4236,`Componentes compatíveis:`),ug(),Ac(4237,`code`),vN(4238,`po-datepicker`),ug(),vN(4239,`, `),Ac(4240,`code`),vN(4241,`po-timepicker`),ug(),vN(4242,`, `),Ac(4243,`code`),vN(4244,`po-input`),ug(),vN(4245,`, `),Ac(4246,`code`),vN(4247,`po-number`),ug(),vN(4248,`, `),Ac(4249,`code`),vN(4250,`po-decimal`),ug(),vN(4251,`, `),Ac(4252,`code`),vN(4253,`po-password`),ug(),vN(4254,`.`),ug()()(),Ac(4255,`tr`,13)(4256,`td`,14)(4257,`div`,15)(4258,`span`,16),vN(4259,` restrictions`),Kc(4260,`br`),ug()()(),Ac(4261,`td`,17)(4262,`code`,79),vN(4263,`PoUploadFileRestrictions`),ug()(),Ac(4264,`td`,20)(4265,`em`)(4266,`strong`),vN(4267,`(opcional)`),ug()(),Ac(4268,`p`),vN(4269,`Objeto que segue a definição da interface `),Ac(4270,`code`),vN(4271,`PoUploadFileRestrictions`),ug(),vN(4272,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),ug(),Ac(4273,`p`)(4274,`strong`),vN(4275,`Componente compatível`),ug(),vN(4276,`: `),Ac(4277,`code`),vN(4278,`po-upload`),ug()()()(),Ac(4279,`tr`,13)(4280,`td`,14)(4281,`div`,15)(4282,`span`,16),vN(4283,` rows`),Kc(4284,`br`),ug()()(),Ac(4285,`td`,17)(4286,`code`,41),vN(4287,`number`),ug()(),Ac(4288,`td`,20)(4289,`em`)(4290,`strong`),vN(4291,`(opcional)`),ug()(),Ac(4292,`p`),vN(4293,`Quantidade de linhas exibidas no `),Ac(4294,`code`),vN(4295,`po-textarea`),ug(),vN(4296,`.`),ug()()(),Ac(4297,`tr`,13)(4298,`td`,14)(4299,`div`,15)(4300,`span`,16),vN(4301,` searchService`),Kc(4302,`br`),ug()()(),Ac(4303,`td`,17)(4304,`code`,18),vN(4305,`string `),ug(),Ac(4306,`code`,80),vN(4307,` PoLookupFilter`),ug()(),Ac(4308,`td`,20)(4309,`em`)(4310,`strong`),vN(4311,`(opcional)`),ug()(),Ac(4312,`p`),vN(4313,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),Ac(4314,`code`),vN(4315,`columns`),ug(),vN(4316,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Ac(4317,`strong`),vN(4318,`Importante:`),ug()(),Ac(4319,`blockquote`)(4320,`p`),vN(4321,`Caso utilizar a propriedade `),Ac(4322,`code`),vN(4323,`optionsService`),ug(),vN(4324,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Ac(4325,`a`,75),vN(4326,`guia de API do PO UI`),ug(),vN(4327,`.`),ug()()()(),Ac(4328,`tr`,13)(4329,`td`,14)(4330,`div`,15)(4331,`span`,16),vN(4332,` secondInterval`),Kc(4333,`br`),ug()()(),Ac(4334,`td`,17)(4335,`code`,41),vN(4336,`number`),ug()(),Ac(4337,`td`,20)(4338,`em`)(4339,`strong`),vN(4340,`(opcional)`),ug()(),Ac(4341,`p`),vN(4342,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),ug()()(),Ac(4343,`tr`,13)(4344,`td`,14)(4345,`div`,15)(4346,`span`,16),vN(4347,` secret`),Kc(4348,`br`),ug()()(),Ac(4349,`td`,17)(4350,`code`,28),vN(4351,`boolean`),ug()(),Ac(4352,`td`,20)(4353,`em`)(4354,`strong`),vN(4355,`(opcional)`),ug()(),Ac(4356,`p`),vN(4357,`Esconde a informação estilo `),Ac(4358,`em`),vN(4359,`password`),ug(),vN(4360,`, pode ser utilizado quando o tipo de dado for `),Ac(4361,`em`),vN(4362,`string`),ug(),vN(4363,`.`),ug()()(),Ac(4364,`tr`,13)(4365,`td`,14)(4366,`div`,15)(4367,`span`,16),vN(4368,` showRequired`),Kc(4369,`br`),ug()()(),Ac(4370,`td`,17)(4371,`code`,28),vN(4372,`boolean`),ug()(),Ac(4373,`td`,20)(4374,`em`)(4375,`strong`),vN(4376,`(opcional)`),ug()(),Ac(4377,`p`),vN(4378,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(4379,`blockquote`)(4380,`p`),vN(4381,`Não será exibida a indicação se:`),ug()(),Ac(4382,`ul`)(4383,`li`),vN(4384,`Não possuir `),Ac(4385,`code`),vN(4386,`p-help`),ug(),vN(4387,` e/ou `),Ac(4388,`code`),vN(4389,`p-label`),ug(),vN(4390,`.`),ug()(),Ac(4391,`p`)(4392,`strong`),vN(4393,`Componentes compatíveis:`),ug(),Ac(4394,`code`),vN(4395,`po-datepicker`),ug(),vN(4396,`, `),Ac(4397,`code`),vN(4398,`po-datepicker-range`),ug(),vN(4399,`, `),Ac(4400,`code`),vN(4401,`po-timepicker`),ug(),vN(4402,`, `),Ac(4403,`code`),vN(4404,`po-input`),ug(),vN(4405,`, `),Ac(4406,`code`),vN(4407,`po-number`),ug(),vN(4408,`,
`),Ac(4409,`code`),vN(4410,`po-decimal`),ug(),vN(4411,`, `),Ac(4412,`code`),vN(4413,`po-select`),ug(),vN(4414,`, `),Ac(4415,`code`),vN(4416,`po-radio-group`),ug(),vN(4417,`, `),Ac(4418,`code`),vN(4419,`po-combo`),ug(),vN(4420,`, `),Ac(4421,`code`),vN(4422,`po-lookup`),ug(),vN(4423,`, `),Ac(4424,`code`),vN(4425,`po-checkbox-group`),ug(),vN(4426,`, `),Ac(4427,`code`),vN(4428,`po-multiselect`),ug(),vN(4429,`,
`),Ac(4430,`code`),vN(4431,`po-textarea`),ug(),vN(4432,`, `),Ac(4433,`code`),vN(4434,`po-password`),ug(),vN(4435,`, `),Ac(4436,`code`),vN(4437,`po-upload`),ug(),vN(4438,`.`),ug()()(),Ac(4439,`tr`,13)(4440,`td`,14)(4441,`div`,15)(4442,`span`,16),vN(4443,` showSeconds`),Kc(4444,`br`),ug()()(),Ac(4445,`td`,17)(4446,`code`,28),vN(4447,`boolean`),ug()(),Ac(4448,`td`,20)(4449,`em`)(4450,`strong`),vN(4451,`(opcional)`),ug()(),Ac(4452,`p`),vN(4453,`Exibe a coluna de segundos no painel do timepicker.`),ug()()(),Ac(4454,`tr`,13)(4455,`td`,14)(4456,`div`,15)(4457,`span`,16),vN(4458,` showThumbnail`),Kc(4459,`br`),ug()()(),Ac(4460,`td`,17)(4461,`code`,28),vN(4462,`boolean`),ug()(),Ac(4463,`td`,20)(4464,`em`)(4465,`strong`),vN(4466,`(opcional)`),ug()(),Ac(4467,`p`),vN(4468,`Exibe a pré-visualização de imagens ao anexá-las.`),ug(),Ac(4469,`blockquote`)(4470,`p`),vN(4471,`Propriedade funciona apenas em arquivos de formato de imagem (`),Ac(4472,`code`),vN(4473,`.png`),ug(),vN(4474,`, `),Ac(4475,`code`),vN(4476,`.jpg`),ug(),vN(4477,`, `),Ac(4478,`code`),vN(4479,`.jpeg`),ug(),vN(4480,` e `),Ac(4481,`code`),vN(4482,`.gif`),ug(),vN(4483,`).`),ug()(),Ac(4484,`p`)(4485,`strong`),vN(4486,`Componente compatível`),ug(),vN(4487,`: `),Ac(4488,`code`),vN(4489,`po-upload`),ug()()()(),Ac(4490,`tr`,13)(4491,`td`,14)(4492,`div`,15)(4493,`span`,16),vN(4494,` size`),Kc(4495,`br`),ug()()(),Ac(4496,`td`,17)(4497,`code`,18),vN(4498,`string`),ug()(),Ac(4499,`td`,20)(4500,`em`)(4501,`strong`),vN(4502,`(opcional)`),ug()(),Ac(4503,`p`),vN(4504,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),ug(),Ac(4505,`ul`)(4506,`li`)(4507,`code`),vN(4508,`small`),ug(),vN(4509,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),ug(),Ac(4510,`li`)(4511,`code`),vN(4512,`medium`),ug(),vN(4513,`: aplica a medida medium de cada componente.`),ug(),Ac(4514,`li`)(4515,`code`),vN(4516,`large`),ug(),vN(4517,`: aplica a medida large de cada componente (disponível para `),Ac(4518,`code`),vN(4519,`po-checkbox`),ug(),vN(4520,` e `),Ac(4521,`code`),vN(4522,`po-radio-group`),ug(),vN(4523,`).`),Ac(4524,`blockquote`)(4525,`p`),vN(4526,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(4527,`code`),vN(4528,`medium`),ug(),vN(4529,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(4530,`a`,21),vN(4531,`po-theme`),ug(),vN(4532,`.`),ug()()()()()(),Ac(4533,`tr`,13)(4534,`td`,14)(4535,`div`,15)(4536,`span`,16),vN(4537,` sort`),Kc(4538,`br`),ug()()(),Ac(4539,`td`,17)(4540,`code`,28),vN(4541,`boolean`),ug()(),Ac(4542,`td`,20)(4543,`em`)(4544,`strong`),vN(4545,`(opcional)`),ug()(),Ac(4546,`p`),vN(4547,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),ug(),Ac(4548,`p`)(4549,`strong`),vN(4550,`Componentes compatíveis:`),ug(),Ac(4551,`code`),vN(4552,`po-combo`),ug(),vN(4553,`, po-multiselect`),ug()()(),Ac(4554,`tr`,13)(4555,`td`,14)(4556,`div`,15)(4557,`span`,16),vN(4558,` step`),Kc(4559,`br`),ug()()(),Ac(4560,`td`,17)(4561,`code`,41),vN(4562,`number`),ug()(),Ac(4563,`td`,20)(4564,`em`)(4565,`strong`),vN(4566,`(opcional)`),ug()(),Ac(4567,`p`),vN(4568,`Intervalo utilizado no `),Ac(4569,`code`),vN(4570,`po-number`),ug(),vN(4571,`.`),ug()()(),Ac(4572,`tr`,13)(4573,`td`,14)(4574,`div`,15)(4575,`span`,16),vN(4576,` thousandMaxlength`),Kc(4577,`br`),ug()()(),Ac(4578,`td`,17)(4579,`code`,41),vN(4580,`number`),ug()(),Ac(4581,`td`,20)(4582,`em`)(4583,`strong`),vN(4584,`(opcional)`),ug()(),Ac(4585,`p`),vN(4586,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),ug(),Ac(4587,`blockquote`)(4588,`p`),vN(4589,`Esta propriedade só pode ser utilizada quando o `),Ac(4590,`code`),vN(4591,`type`),ug(),vN(4592,` for `),Ac(4593,`em`),vN(4594,`currency`),ug(),vN(4595,` ou `),Ac(4596,`em`),vN(4597,`decimal`),ug(),vN(4598,`.`),ug()(),Ac(4599,`blockquote`)(4600,`p`),vN(4601,`Quando utilizado com `),Ac(4602,`code`),vN(4603,`displayFormat`),ug(),vN(4604,`, será respeitado o valor `),Ac(4605,`strong`),vN(4606,`mais restritivo`),ug(),vN(4607,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),ug()()()(),Ac(4608,`tr`,13)(4609,`td`,14)(4610,`div`,15)(4611,`span`,16),vN(4612,` type`),Kc(4613,`br`),ug()()(),Ac(4614,`td`,17)(4615,`code`,18),vN(4616,`string `),ug(),Ac(4617,`code`,81),vN(4618,` PoDynamicFieldType`),ug()(),Ac(4619,`td`,20)(4620,`em`)(4621,`strong`),vN(4622,`(opcional)`),ug()(),Ac(4623,`p`),vN(4624,`Tipo do valor campo.`),ug(),Ac(4625,`p`),vN(4626,`Valores válidos:`),ug(),Ac(4627,`ul`)(4628,`li`)(4629,`code`),vN(4630,`boolean`),ug(),vN(4631,`: Valores `),Ac(4632,`em`),vN(4633,`booleanos`),ug(),vN(4634,`.`),ug(),Ac(4635,`li`)(4636,`code`),vN(4637,`currency`),ug(),vN(4638,`: Valores monetários.`),ug(),Ac(4639,`li`)(4640,`code`),vN(4641,`decimal`),ug(),vN(4642,`: Valores decimais.`),ug(),Ac(4643,`li`)(4644,`code`),vN(4645,`date`),ug(),vN(4646,`: Valores de datas.`),Ac(4647,`ul`)(4648,`li`),vN(4649,`Aceita os tipos `),Ac(4650,`strong`),vN(4651,`string`),ug(),vN(4652,` e `),Ac(4653,`strong`),vN(4654,`Date`),ug(),vN(4655,` padr\xE3o do Javascript,
por exemplo: `),Ac(4656,`code`),vN(4657,`'2017-11-28'`),ug(),vN(4658,` ou `),Ac(4659,`code`),vN(4660,`new Date(2017, 10, 28)`),ug(),vN(4661,`.`),ug()()(),Ac(4662,`li`)(4663,`code`),vN(4664,`dateTime`),ug(),vN(4665,`: Valor de data com horário.`),Ac(4666,`ul`)(4667,`li`),vN(4668,`Aceita o tipo `),Ac(4669,`em`),vN(4670,`string`),ug(),vN(4671,` no formato `),Ac(4672,`strong`),vN(4673,`ISO-8601`),ug(),vN(4674,` extendido `),Ac(4675,`strong`),vN(4676,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),ug(),vN(4677,`
e o tipo `),Ac(4678,`strong`),vN(4679,`Date`),ug(),vN(4680,` padrão do Javascript, por exemplo: `),Ac(4681,`code`),vN(4682,`'2017-11-28T00:00:00-02:00'`),ug(),vN(4683,` ou `),Ac(4684,`code`),vN(4685,`new Date(2017, 10, 28)`),ug(),vN(4686,`.`),ug()()(),Ac(4687,`li`)(4688,`code`),vN(4689,`number`),ug(),vN(4690,`: Valores numéricos.`),ug(),Ac(4691,`li`)(4692,`code`),vN(4693,`string`),ug(),vN(4694,`: Textos.`),ug(),Ac(4695,`li`)(4696,`code`),vN(4697,`time`),ug(),vN(4698,`: Valor do horário.`),Ac(4699,`ul`)(4700,`li`),vN(4701,`Aceita o tipo `),Ac(4702,`strong`),vN(4703,`string`),ug(),vN(4704,` nos formatos `),Ac(4705,`strong`),vN(4706,`'HH:mm:ss'`),ug(),vN(4707,` ou `),Ac(4708,`strong`),vN(4709,`'HH:mm:ss.ffffff'`),ug(),vN(4710,`, por exemplo: `),Ac(4711,`code`),vN(4712,`'23:12:45'`),ug(),vN(4713,`.`),ug()()()()()(),Ac(4714,`tr`,13)(4715,`td`,14)(4716,`div`,15)(4717,`span`,16),vN(4718,` url`),Kc(4719,`br`),ug()()(),Ac(4720,`td`,17)(4721,`code`,18),vN(4722,`string`),ug()(),Ac(4723,`td`,20)(4724,`em`)(4725,`strong`),vN(4726,`(opcional)`),ug()(),Ac(4727,`p`),vN(4728,`URL que deve ser feita a requisição com os arquivos selecionados.`),ug(),Ac(4729,`p`)(4730,`strong`),vN(4731,`Componente compatível`),ug(),vN(4732,`: `),Ac(4733,`code`),vN(4734,`po-upload`),ug()()()(),Ac(4735,`tr`,13)(4736,`td`,14)(4737,`div`,15)(4738,`span`,16),vN(4739,` validate`),Kc(4740,`br`),ug()()(),Ac(4741,`td`,17)(4742,`code`,18),vN(4743,`string `),ug(),Ac(4744,`code`,29),vN(4745,` Function`),ug()(),Ac(4746,`td`,20)(4747,`em`)(4748,`strong`),vN(4749,`(opcional)`),ug()(),Ac(4750,`p`),vN(4751,`Função ou serviço para validar as `),Ac(4752,`strong`),vN(4753,`mudanças do campo`),ug(),vN(4754,`.`),ug(),Ac(4755,`ul`)(4756,`li`),vN(4757,`A propriedade aceita os seguintes tipos:`),ug()(),Ac(4758,`ul`)(4759,`li`)(4760,`strong`),vN(4761,`String`),ug(),vN(4762,`: Endpoint usado pelo componente para requisição via `),Ac(4763,`code`),vN(4764,`POST`),ug(),vN(4765,`.`),ug(),Ac(4766,`li`)(4767,`strong`),vN(4768,`Function`),ug(),vN(4769,`: Método que será executado.`),ug()(),Ac(4770,`p`),vN(4771,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Ac(4772,`code`),vN(4773,`PoDynamicFormFieldChanged`),ug(),vN(4774,`:`),ug(),Ac(4775,`p`)(4776,`code`),vN(4777,`{ property: 'property name', value: 'new value' }`),ug()(),Ac(4778,`p`),vN(4779,`O retorno desta função deve ser do tipo `),Ac(4780,`a`,82),vN(4781,`PoDynamicFormFieldValidation`),ug(),vN(4782,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),ug(),Ac(4783,`pre`)(4784,`code`),vN(4785,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),ug()(),Ac(4786,`p`),vN(4787,`Para referenciar a sua função utilize a propriedade `),Ac(4788,`code`),vN(4789,`bind`),ug(),vN(4790,`, por exemplo:
`),Ac(4791,`code`),vN(4792,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),ug()()()(),Ac(4793,`tr`,13)(4794,`td`,14)(4795,`div`,15)(4796,`span`,16),vN(4797,` visible`),Kc(4798,`br`),ug()()(),Ac(4799,`td`,17)(4800,`code`,28),vN(4801,`boolean`),ug()(),Ac(4802,`td`,20)(4803,`em`)(4804,`strong`),vN(4805,`(opcional)`),ug()(),Ac(4806,`p`),vN(4807,`Indica se o campo será visível.`),ug()()(),Ac(4808,`tr`,13)(4809,`td`,14)(4810,`div`,15)(4811,`span`,16),vN(4812,` yearRangeLimit`),Kc(4813,`br`),ug()()(),Ac(4814,`td`,17)(4815,`code`,41),vN(4816,`number`),ug()(),Ac(4817,`td`,20)(4818,`em`)(4819,`strong`),vN(4820,`(opcional)`),ug()(),Ac(4821,`p`),vN(4822,`Define o limite de anos exibidos na lista de anos do `),Ac(4823,`code`),vN(4824,`po-datepicker`),ug(),vN(4825,` nos modos `),Ac(4826,`code`),vN(4827,`month-year`),ug(),vN(4828,` e `),Ac(4829,`code`),vN(4830,`year`),ug(),vN(4831,`.`),ug()()()(),Ac(4832,`h4`,38)(4833,`code`,5),vN(4834,`PoDynamicFormLoad`),ug()(),Ac(4835,`div`,2)(4836,`p`),Kc(4837,`a`,83),ug(),Ac(4838,`p`),vN(4839,`Estrutura de retorno no carregamento do formulário.`),ug()(),Ac(4840,`h4`,9),vN(4841,`Propriedades`),ug(),Ac(4842,`table`,10)(4843,`tr`,11)(4844,`th`,12),vN(4845,`Nome`),ug(),Ac(4846,`th`,12),vN(4847,`Tipo`),ug(),Ac(4848,`th`,12),vN(4849,`Descrição`),ug()(),Ac(4850,`tr`,13)(4851,`td`,14)(4852,`div`,15)(4853,`span`,16),vN(4854,` fields`),Kc(4855,`br`),ug()()(),Ac(4856,`td`,17)(4857,`code`,22),vN(4858,`Array<PoDynamicFormField>`),ug()(),Ac(4859,`td`,20)(4860,`em`)(4861,`strong`),vN(4862,`(opcional)`),ug()(),Ac(4863,`p`),vN(4864,`Lista com as novas definições dos campos.`),ug(),Ac(4865,`blockquote`)(4866,`p`),vN(4867,`Não é necessário colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas.`),ug()()()(),Ac(4868,`tr`,13)(4869,`td`,14)(4870,`div`,15)(4871,`span`,16),vN(4872,` focus`),Kc(4873,`br`),ug()()(),Ac(4874,`td`,17)(4875,`code`,18),vN(4876,`string`),ug()(),Ac(4877,`td`,20)(4878,`em`)(4879,`strong`),vN(4880,`(opcional)`),ug()(),Ac(4881,`p`),vN(4882,`Nome do campo que receberá o foco.`),ug(),Ac(4883,`p`),vN(4884,`Exemplo:`),ug(),Ac(4885,`pre`)(4886,`code`),vN(4887,`focus: 'name'
`),ug()()()(),Ac(4888,`tr`,13)(4889,`td`,14)(4890,`div`,15)(4891,`span`,16),vN(4892,` value`),Kc(4893,`br`),ug()()(),Ac(4894,`td`,17)(4895,`code`,33),vN(4896,`any`),ug()(),Ac(4897,`td`,20)(4898,`em`)(4899,`strong`),vN(4900,`(opcional)`),ug()(),Ac(4901,`p`),vN(4902,`Objeto contendo os novos valores.`),ug(),Ac(4903,`p`),vN(4904,`Exemplo:`),ug(),Ac(4905,`pre`)(4906,`code`),vN(4907,`{
  name: 'new name',
  age: 10
}
`),ug()(),Ac(4908,`blockquote`)(4909,`p`),vN(4910,`Não é necessário colocar os valores de todos os campos, apenas os que foram alterados.`),ug()()()()(),Ac(4911,`h4`,38)(4912,`code`,5),vN(4913,`PoDynamicFormFieldChanged`),ug()(),Ac(4914,`div`,2)(4915,`p`),vN(4916,`Estrutura dos valores que serão disparados quando houver uma mudança em um campo ou no formulário.`),ug()(),Ac(4917,`h4`,9),vN(4918,`Propriedades`),ug(),Ac(4919,`table`,10)(4920,`tr`,11)(4921,`th`,12),vN(4922,`Nome`),ug(),Ac(4923,`th`,12),vN(4924,`Tipo`),ug(),Ac(4925,`th`,12),vN(4926,`Descrição`),ug()(),Ac(4927,`tr`,13)(4928,`td`,14)(4929,`div`,15)(4930,`span`,16),vN(4931,` property`),Kc(4932,`br`),ug()()(),Ac(4933,`td`,17)(4934,`code`,18),vN(4935,`string`),ug()(),Ac(4936,`td`,20)(4937,`p`),vN(4938,`Valor da propriedade do campo.`),ug()()(),Ac(4939,`tr`,13)(4940,`td`,14)(4941,`div`,15)(4942,`span`,16),vN(4943,` value`),Kc(4944,`br`),ug()()(),Ac(4945,`td`,17)(4946,`code`,33),vN(4947,`any`),ug()(),Ac(4948,`td`,20)(4949,`p`),vN(4950,`Novo valor do campo.`),ug()()()(),Ac(4951,`h4`,38)(4952,`code`,5),vN(4953,`PoDynamicFormFieldValidation`),ug()(),Ac(4954,`div`,2)(4955,`p`),Kc(4956,`a`,84),ug(),Ac(4957,`p`),vN(4958,`Estrutura de retorno da validação de um campo.`),ug()(),Ac(4959,`h4`,9),vN(4960,`Propriedades`),ug(),Ac(4961,`table`,10)(4962,`tr`,11)(4963,`th`,12),vN(4964,`Nome`),ug(),Ac(4965,`th`,12),vN(4966,`Tipo`),ug(),Ac(4967,`th`,12),vN(4968,`Descrição`),ug()(),Ac(4969,`tr`,13)(4970,`td`,14)(4971,`div`,15)(4972,`span`,16),vN(4973,` field`),Kc(4974,`br`),ug()()(),Ac(4975,`td`,17)(4976,`code`,85),vN(4977,`PoDynamicFormField`),ug()(),Ac(4978,`td`,20)(4979,`em`)(4980,`strong`),vN(4981,`(opcional)`),ug()(),Ac(4982,`p`),vN(4983,`Novas definições das propriedades do campo.`),ug(),Ac(4984,`blockquote`)(4985,`p`),vN(4986,`Não é necessário colocar todas as propriedades, apenas as que foram alteradas.`),ug()()()(),Ac(4987,`tr`,13)(4988,`td`,14)(4989,`div`,15)(4990,`span`,16),vN(4991,` focus`),Kc(4992,`br`),ug()()(),Ac(4993,`td`,17)(4994,`code`,28),vN(4995,`boolean`),ug()(),Ac(4996,`td`,20)(4997,`em`)(4998,`strong`),vN(4999,`(opcional)`),ug()(),Ac(5e3,`p`),vN(5001,`Coloca o foco no campo após a validação.`),ug()()(),Ac(5002,`tr`,13)(5003,`td`,14)(5004,`div`,15)(5005,`span`,16),vN(5006,` value`),Kc(5007,`br`),ug()()(),Ac(5008,`td`,17)(5009,`code`,33),vN(5010,`any`),ug()(),Ac(5011,`td`,20)(5012,`em`)(5013,`strong`),vN(5014,`(opcional)`),ug()(),Ac(5015,`p`),vN(5016,`Novo valor do campo`),ug()()()(),Ac(5017,`h4`,38)(5018,`code`,5),vN(5019,`PoDynamicFormValidation`),ug()(),Ac(5020,`div`,2)(5021,`p`),Kc(5022,`a`,86),ug(),Ac(5023,`p`),vN(5024,`Estrutura de retorno da validação do formulário.`),ug()(),Ac(5025,`h4`,9),vN(5026,`Propriedades`),ug(),Ac(5027,`table`,10)(5028,`tr`,11)(5029,`th`,12),vN(5030,`Nome`),ug(),Ac(5031,`th`,12),vN(5032,`Tipo`),ug(),Ac(5033,`th`,12),vN(5034,`Descrição`),ug()(),Ac(5035,`tr`,13)(5036,`td`,14)(5037,`div`,15)(5038,`span`,16),vN(5039,` fields`),Kc(5040,`br`),ug()()(),Ac(5041,`td`,17)(5042,`code`,22),vN(5043,`Array<PoDynamicFormField>`),ug()(),Ac(5044,`td`,20)(5045,`em`)(5046,`strong`),vN(5047,`(opcional)`),ug()(),Ac(5048,`p`),vN(5049,`Lista com as novas definições dos campos.`),ug(),Ac(5050,`blockquote`)(5051,`p`),vN(5052,`Não é necessário colocar todas as propriedades e campos, apenas as que foram alteradas.`),ug()()()(),Ac(5053,`tr`,13)(5054,`td`,14)(5055,`div`,15)(5056,`span`,16),vN(5057,` focus`),Kc(5058,`br`),ug()()(),Ac(5059,`td`,17)(5060,`code`,18),vN(5061,`string`),ug()(),Ac(5062,`td`,20)(5063,`em`)(5064,`strong`),vN(5065,`(opcional)`),ug()(),Ac(5066,`p`),vN(5067,`Nome do campo que receberá o foco.`),ug(),Ac(5068,`p`),vN(5069,`Exemplo:`),ug(),Ac(5070,`pre`)(5071,`code`),vN(5072,`focus: 'name'
`),ug()()()(),Ac(5073,`tr`,13)(5074,`td`,14)(5075,`div`,15)(5076,`span`,16),vN(5077,` value`),Kc(5078,`br`),ug()()(),Ac(5079,`td`,17)(5080,`code`,33),vN(5081,`any`),ug()(),Ac(5082,`td`,20)(5083,`em`)(5084,`strong`),vN(5085,`(opcional)`),ug()(),Ac(5086,`p`),vN(5087,`Objeto contendo os novos valores.`),ug(),Ac(5088,`p`),vN(5089,`Exemplo:`),ug(),Ac(5090,`pre`)(5091,`code`),vN(5092,`{
  name: 'new name',
  age: 10
}
`),ug()(),Ac(5093,`blockquote`)(5094,`p`),vN(5095,`Não é necessário colocar os valores de todos os campos, apenas os que foram alterados.`),ug()()()()(),Ac(5096,`h4`,38)(5097,`code`,5),vN(5098,`ErrorAsyncProperties`),ug()(),Ac(5099,`div`,2)(5100,`p`),vN(5101,`Interface para realizar uma validação assíncrona no componente.`),ug()(),Ac(5102,`h4`,9),vN(5103,`Propriedades`),ug(),Ac(5104,`table`,10)(5105,`tr`,11)(5106,`th`,12),vN(5107,`Nome`),ug(),Ac(5108,`th`,12),vN(5109,`Tipo`),ug(),Ac(5110,`th`,12),vN(5111,`Descrição`),ug()(),Ac(5112,`tr`,13)(5113,`td`,14)(5114,`div`,15)(5115,`span`,16),vN(5116,` errorAsync`),Kc(5117,`br`),ug()()(),Ac(5118,`td`,17)(5119,`code`,46),vN(5120,`(value) => Observable<boolean>`),ug()(),Ac(5121,`td`,20)(5122,`p`),vN(5123,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ac(5124,`code`),vN(5125,`change`),ug(),vN(5126,` ou `),Ac(5127,`code`),vN(5128,`change-model`),ug(),vN(5129,`, dependendo do valor da propriedade `),Ac(5130,`code`),vN(5131,`triggerMode`),ug(),vN(5132,`.`),ug()()(),Ac(5133,`tr`,13)(5134,`td`,14)(5135,`div`,15)(5136,`span`,16),vN(5137,` triggerMode`),Kc(5138,`br`),ug()()(),Ac(5139,`td`,17)(5140,`code`,87),vN(5141,`'change' `),ug(),Ac(5142,`code`,88),vN(5143,` 'changeModel'`),ug()(),Ac(5144,`td`,20)(5145,`em`)(5146,`strong`),vN(5147,`(opcional)`),ug()(),Ac(5148,`p`),vN(5149,`Controla se o método será executado no disparo do output `),Ac(5150,`code`),vN(5151,`change`),ug(),vN(5152,` ou `),Ac(5153,`code`),vN(5154,`change-model`),ug(),vN(5155,`.`),ug()()()(),Ac(5156,`h3`),vN(5157,`Enums`),ug(),Ac(5158,`h4`,4)(5159,`code`,5),vN(5160,`ForceBooleanComponentEnum`),ug()(),Ac(5161,`div`,2)(5162,`p`),vN(5163,`Enum para definição do tipo de componente a ser renderizado.`),ug()(),Ac(5164,`h4`,9),vN(5165,`Propriedades`),ug(),Ac(5166,`table`,10)(5167,`tr`,11)(5168,`th`,12),vN(5169,`Nome`),ug(),Ac(5170,`th`,12),vN(5171,`Descrição`),ug()(),Ac(5172,`tr`,13)(5173,`td`,14)(5174,`div`,15)(5175,`span`,16),vN(5176,` switch`),Kc(5177,`br`),ug()()(),Ac(5178,`td`,20)(5179,`p`),vN(5180,`Força a renderização de um po-switch`),ug()()(),Ac(5181,`tr`,13)(5182,`td`,14)(5183,`div`,15)(5184,`span`,16),vN(5185,` checkbox`),Kc(5186,`br`),ug()()(),Ac(5187,`td`,20)(5188,`p`),vN(5189,`Força a renderização de um po-checkbox`),ug()()()(),Ac(5190,`h4`,4)(5191,`code`,5),vN(5192,`ForceOptionComponentEnum`),ug()(),Ac(5193,`div`,2)(5194,`p`),vN(5195,`Enum para definição do tipo de componente a ser renderizado.`),ug()(),Ac(5196,`h4`,9),vN(5197,`Propriedades`),ug(),Ac(5198,`table`,10)(5199,`tr`,11)(5200,`th`,12),vN(5201,`Nome`),ug(),Ac(5202,`th`,12),vN(5203,`Descrição`),ug()(),Ac(5204,`tr`,13)(5205,`td`,14)(5206,`div`,15)(5207,`span`,16),vN(5208,` radioGroup`),Kc(5209,`br`),ug()()(),Ac(5210,`td`,20)(5211,`p`),vN(5212,`Força a renderização de um po-radio-group independente da quantidade do opções`),ug()()(),Ac(5213,`tr`,13)(5214,`td`,14)(5215,`div`,15)(5216,`span`,16),vN(5217,` select`),Kc(5218,`br`),ug()()(),Ac(5219,`td`,20)(5220,`p`),vN(5221,`Força a renderização de um po-select independente da quantidade do opções`),ug()()()(),Ac(5222,`h4`,4)(5223,`code`,5),vN(5224,`PoDynamicFieldType`),ug()(),Ac(5225,`div`,2)(5226,`p`),vN(5227,`Enum para definição do tipo de campo que será criado dinamicamente.`),ug()(),Ac(5228,`h4`,9),vN(5229,`Propriedades`),ug(),Ac(5230,`table`,10)(5231,`tr`,11)(5232,`th`,12),vN(5233,`Nome`),ug(),Ac(5234,`th`,12),vN(5235,`Descrição`),ug()(),Ac(5236,`tr`,13)(5237,`td`,14)(5238,`div`,15)(5239,`span`,16),vN(5240,` Boolean`),Kc(5241,`br`),ug()()(),Ac(5242,`td`,20)(5243,`p`),vN(5244,`Valor booleano.`),ug()()(),Ac(5245,`tr`,13)(5246,`td`,14)(5247,`div`,15)(5248,`span`,16),vN(5249,` Currency`),Kc(5250,`br`),ug()()(),Ac(5251,`td`,20)(5252,`p`),vN(5253,`Valor numérico que contém casas decimais e milhar.`),ug()()(),Ac(5254,`tr`,13)(5255,`td`,14)(5256,`div`,15)(5257,`span`,16),vN(5258,` Decimal`),Kc(5259,`br`),ug()()(),Ac(5260,`td`,20)(5261,`p`),vN(5262,`Valor numérico que contém casas decimais e milhar.`),ug()()(),Ac(5263,`tr`,13)(5264,`td`,14)(5265,`div`,15)(5266,`span`,16),vN(5267,` Date`),Kc(5268,`br`),ug()()(),Ac(5269,`td`,20)(5270,`p`),vN(5271,`Valor para data.`),ug()()(),Ac(5272,`tr`,13)(5273,`td`,14)(5274,`div`,15)(5275,`span`,16),vN(5276,` DateTime`),Kc(5277,`br`),ug()()(),Ac(5278,`td`,20)(5279,`p`),vN(5280,`Valor para data e hora.`),ug()()(),Ac(5281,`tr`,13)(5282,`td`,14)(5283,`div`,15)(5284,`span`,16),vN(5285,` Time`),Kc(5286,`br`),ug()()(),Ac(5287,`td`,20)(5288,`p`),vN(5289,`Utilizado para informar/exibir hora.`),ug()()(),Ac(5290,`tr`,13)(5291,`td`,14)(5292,`div`,15)(5293,`span`,16),vN(5294,` Number`),Kc(5295,`br`),ug()()(),Ac(5296,`td`,20)(5297,`p`),vN(5298,`Valor numérico.`),ug()()(),Ac(5299,`tr`,13)(5300,`td`,14)(5301,`div`,15)(5302,`span`,16),vN(5303,` String`),Kc(5304,`br`),ug()()(),Ac(5305,`td`,20)(5306,`p`),vN(5307,`Texto.`),ug()()(),Ac(5308,`tr`,13)(5309,`td`,14)(5310,`div`,15)(5311,`span`,16),vN(5312,` Upload`),Kc(5313,`br`),ug()()(),Ac(5314,`td`,20)(5315,`p`),vN(5316,`Utilizado para fazer uploads de arquivos.`),ug()()()(),Ac(5317,`h4`,4)(5318,`code`,5),vN(5319,`PoTimepickerModelFormat`),ug()(),Ac(5320,`div`,2)(5321,`p`)(5322,`em`),vN(5323,`Enum`),ug(),vN(5324,` que define o padrão de formatação do model de saída do timepicker.`),ug()(),Ac(5325,`h4`,9),vN(5326,`Propriedades`),ug(),Ac(5327,`table`,10)(5328,`tr`,11)(5329,`th`,12),vN(5330,`Nome`),ug(),Ac(5331,`th`,12),vN(5332,`Descrição`),ug()(),Ac(5333,`tr`,13)(5334,`td`,14)(5335,`div`,15)(5336,`span`,16),vN(5337,` HourMinute`),Kc(5338,`br`),ug()()(),Ac(5339,`td`,20)(5340,`p`),vN(5341,`Formato básico `),Ac(5342,`code`),vN(5343,`HH:mm`),ug(),vN(5344,` (ex: `),Ac(5345,`code`),vN(5346,`14:30`),ug(),vN(5347,`).`),ug()()(),Ac(5348,`tr`,13)(5349,`td`,14)(5350,`div`,15)(5351,`span`,16),vN(5352,` HourMinuteSecond`),Kc(5353,`br`),ug()()(),Ac(5354,`td`,20)(5355,`p`),vN(5356,`Formato com segundos `),Ac(5357,`code`),vN(5358,`HH:mm:ss`),ug(),vN(5359,` (ex: `),Ac(5360,`code`),vN(5361,`14:30:00`),ug(),vN(5362,`).`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var fe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(E(Qn),E(wn))};static ɵcmp=Hn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Dynamic Form`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,r){a&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return r.changeTab(`doc`)}),Kc(3,`sample-po-dynamic-form-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return r.changeTab(`web`)}),Kc(5,`sample-po-dynamic-form-basic-view`)(6,`sample-po-dynamic-form-register-view`)(7,`sample-po-dynamic-form-container-view`),ug()()()),a&2&&(cE(`p-actions`,r.actions),Hp(2),cE(`p-active`,r.activeTab===`doc`),Hp(2),cE(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[vze,tae,aae,$,te,ne,oe],encapsulation:2,changeDetection:1})}return o})()}];var re=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[kL.forChild(fe),kL]})}return o})();var rt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=he({type:o});static ɵinj=ue({imports:[Ta,re]})}return o})();export{rt as DocPoDynamicFormModule};