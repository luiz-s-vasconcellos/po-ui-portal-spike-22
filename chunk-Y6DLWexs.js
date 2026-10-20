import{t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Bn as zu,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Pn as woe,Pr as R,Ri as nu,Si as iu,Vi as p,Y as Kze,Yi as rg,aa as v_,ai as b,dt as Sae,fa as we,i as _a,ji as mO,mi as gO,mn as ni,ni as _o,pa as wg,r as Ta,sa as vo,ta as ue,ur as Fx,va as y_,wi as jE,xi as ir,xt as Wae,yi as iO,zr as Sn}from"./main-ADAH4OB5.js";var me=()=>({property:`name`,required:!0,showRequired:!0});var le=o=>[o];var G=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-basic`]],standalone:!1,decls:1,vars:4,consts:[[3,`p-fields`]],template:function(a,r){a&1&&nu(0,`po-dynamic-form`,0),a&2&&jE(`p-fields`,mO(2,le,gO(1,me)))},dependencies:[woe],encapsulation:2,changeDetection:1})}return o})();var pe=o=>({"docs-sample-code-tabs":o});var $=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dynamic Form Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return r.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dynamic-form-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+r.sampleCodeButtonIcon),rg(),Ag(` `,r.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,pe,r.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,G],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{getCity(m){switch(m){case 1:return[{city:`Palhoça`,code:5},{city:`Lages`,code:6},{city:`Balneário Camboriú`,code:7},{city:`Brusque`,code:8}];case 2:return[{city:`São Paulo`,code:9},{city:`Guarulhos`,code:10},{city:`Campinas`,code:11},{city:`São Bernardo do Campo`,code:12}];case 3:return[{city:`Rio de Janeiro`,code:13},{city:`São Gonçalo`,code:14},{city:`Duque de Caxias`,code:15},{city:`Nova Iguaçu`,code:16}];case 4:return[{city:`Belo Horizonte`,code:17},{city:`Uberlândia`,code:18},{city:`Contagem`,code:19},{city:`Juiz de Fora`,code:20}]}return[]}getUserDocument(m){return{fields:[m.isJuridicPerson?{property:`cnpj`,visible:!0}:{property:`cpf`,visible:!0}]}}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var ce=[`dynamicForm`];var ee=(()=>{class o{poNotification=p(zu);registerService=p(U);dynamicForm;person={};validateFields=[`state`];fields=[{property:`name`,divider:`PERSONAL DATA`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,divider:`CONTACTS`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6},{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`},{property:`vacation`,type:`date`,divider:`Work data`,range:!0,gridColumns:5,gridSmColumns:12},{property:`entryTime`,label:`Entry time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`exitTime`,label:`Exit time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`wage`,type:`currency`,gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,displayFormat:`>>>,>>>,>>9.99`,icon:`an an-currency-circle-dollar`},{property:`employeeCode`,label:`Employee code`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`999`,decimalsLength:0},{property:`overtime`,label:`Overtime hours`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`>>9.9<<`,decimalsLength:3,optional:!0},{property:`hobbies`,divider:`MORE INFO`,gridColumns:6,gridSmColumns:12,optional:!0,options:[`Soccer`,`Basketball`,`Bike`,`Yoga`,`Travel`,`Run`],optionsMulti:!0},{property:`favoriteHero`,gridColumns:6,gridSmColumns:12,label:`Favorite hero`,optional:!0,searchService:`https://po-sample-api.onrender.com/v1/heroes`,columns:[{property:`nickname`,label:`Hero`},{property:`label`,label:`Name`}],format:[`id`,`nickname`],fieldLabel:`nickname`,fieldValue:`email`},{property:`partner`,gridColumns:6,gridSmColumns:12,optionsService:`https://po-sample-api.onrender.com/v1/people`,fieldLabel:`name`,fieldValue:`id`,optional:!0},{property:`videogame`,gridColumns:6,gridSmColumns:12,label:`Video game console`,optional:!0,fieldValue:`code`,fieldLabel:`console`,options:[{console:`Nintendo Wii U`,code:`NWU`},{console:`Playstation 4`,code:`PS4`},{console:`Xbox One`,code:`XONE`},{console:`Nintendo Switch`,code:`NSW`},{console:`Playstation 5`,code:`PS5`},{console:`Xbox Series S|X`,code:`XSSX`}],optionsMulti:!0},{property:`agree`,gridColumns:12,label:`Do you agree?`,type:`boolean`,forceBooleanComponentType:Wae.checkbox},{property:`image`,type:`upload`,gridColumns:12,gridSmColumns:12,label:`Upload your background`,optional:!0,url:`https://po-sample-api.onrender.com/v1/uploads/addFile`}];ngOnInit(){this.person={name:`Tony Stark`,birthday:`1970-05-29`,isJuridicPerson:!1,videogame:[`PS4`,`NSW`,`XSSX`],rememberSecretKey:`no`,status:`active`}}onChangeFields(m){return setTimeout(()=>{let a=this.registerService.getCity(m.value.state);this.updateDynamicFormField(`city`,{options:a,loading:!1})},500),{value:{city:void 0},fields:[{property:`city`,gridColumns:6,disabled:!1,loading:!0}]}}onLoadFields(m){return this.registerService.getUserDocument(m)}updateDynamicFormField(m,a){let r$1=this.dynamicForm?.fields??this.fields,l=r$1.findIndex(O=>O.property===m);l>=0&&(r$1[l]=r(r({},r$1[l]),a),this.fields=[...r$1])}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-register`]],viewQuery:function(a,r){if(a&1&&iu(ce,7),a&2){let l;vo(l=_o())&&(r.dynamicForm=l.first)}},standalone:!1,features:[we([U])],decls:5,vars:6,consts:[[`dynamicForm`,``],[`p-auto-focus`,`name`,3,`p-fields`,`p-load`,`p-validate`,`p-validate-fields`,`p-value`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(a,r){if(a&1){let l=Sx();nu(0,`po-dynamic-form`,1,0)(2,`br`),jc(3,`div`,2)(4,`po-button`,3),mt(`p-click`,function(){y_(l);let I=Fx(1);return r.poNotification.success(`Data saved successfully!`),v_(I.form.reset())}),wg()()}if(a&2){let l=Fx(1);jE(`p-fields`,r.fields)(`p-load`,r.onLoadFields.bind(r))(`p-validate`,r.onChangeFields.bind(r))(`p-validate-fields`,r.validateFields)(`p-value`,r.person),rg(4),jE(`p-disabled`,l?.form.invalid)}},dependencies:[ni,woe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o});var te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-register-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dynamic Form - Register`),wg(),jc(4,`a`,2),mt(`click`,function(){return r.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-dynamic-form
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { Injectable } from '@angular/core';

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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-dynamic-form-register`),wg(),nu(27,`hr`)),a&2&&(rg(5),qx(`po-icon `+r.sampleCodeButtonIcon),rg(),Ag(` `,r.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ee,r.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ee],encapsulation:2,changeDetection:1})}return o})();var K=(()=>{class o{getCity(m){switch(m){case 1:return[{city:`Palhoça`,code:5},{city:`Lages`,code:6},{city:`Balneário Camboriú`,code:7},{city:`Brusque`,code:8}];case 2:return[{city:`São Paulo`,code:9},{city:`Guarulhos`,code:10},{city:`Campinas`,code:11},{city:`São Bernardo do Campo`,code:12}];case 3:return[{city:`Rio de Janeiro`,code:13},{city:`São Gonçalo`,code:14},{city:`Duque de Caxias`,code:15},{city:`Nova Iguaçu`,code:16}];case 4:return[{city:`Belo Horizonte`,code:17},{city:`Uberlândia`,code:18},{city:`Contagem`,code:19},{city:`Juiz de Fora`,code:20}]}return[]}getUserDocument(m){return{fields:[m.isJuridicPerson?{property:`cnpj`,visible:!0}:{property:`cpf`,visible:!0}]}}static ɵfac=function(a){return new(a||o)};static ɵprov=R({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var Se=[`dynamicForm`];var ie=(()=>{class o{poNotification=p(zu);registerService=p(K);dynamicForm;person={};validateFields=[`state`];fields=[{property:`name`,container:`PERSONAL DATA`,required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:`Type your name`},{property:`birthday`,label:`Date of birth`,type:`date`,format:`mm/dd/yyyy`,gridColumns:6,gridSmColumns:12,maxValue:`2010-01-01`,errorMessage:`The date must be before the year 2010.`,order:-1,help:`Enter or select a valid date.`,additionalHelpTooltip:`Please enter a valid date in the format MMDDYYYY.`,keydown:this.onKeyDown.bind(this,`birthday`)},{property:`cpf`,label:`CPF`,mask:`999.999.999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`cnpj`,label:`CNPJ`,mask:`99.999.999/9999-99`,gridColumns:6,gridSmColumns:12,visible:!1},{property:`genre`,gridColumns:6,gridSmColumns:12,options:[`Male`,`Female`,`Other`],order:2},{property:`shortDescription`,label:`Short Description`,gridColumns:12,gridSmColumns:12,rows:5,placeholder:`Type short description`},{property:`secretKey`,label:`Secret Key`,gridColumns:6,secret:!0,pattern:`[a-zA]{5}[Z0-9]{3}`,errorMessage:`At least 5 alphabetic and 3 numeric characters are required.`,placeholder:`Type your password`,help:`Password must include a combination of letters and numbers.`,additionalHelpTooltip:`At least 5 alphabetic and 3 numeric characters are required.`,keydown:this.onKeyDown.bind(this,`secretKey`)},{property:`rememberSecretKey`,label:`Remember Secret Key`,gridColumns:3,type:`boolean`,booleanTrue:`yes`,booleanFalse:`no`,formatModel:!0},{property:`status`,label:`Status`,gridColumns:3,type:`boolean`,booleanTrue:`Active`,booleanFalse:`Inactive`,formatModel:!0},{property:`email`,container:`CONTACTS`,gridColumns:6,icon:`an an-envelope`},{property:`phone`,mask:`(99) 99999-9999`,gridColumns:6},{property:`address`,gridColumns:6},{property:`addressNumber`,label:`Address number`,type:`number`,gridColumns:6,maxValue:1e4,errorMessage:`Invalid number.`},{property:`state`,gridColumns:6,options:[{state:`Santa Catarina`,code:1},{state:`São Paulo`,code:2},{state:`Rio de Janeiro`,code:3},{state:`Minas Gerais`,code:4}],fieldLabel:`state`,fieldValue:`code`},{property:`city`,disabled:!0,gridColumns:6,fieldValue:`code`,fieldLabel:`city`},{property:`vacation`,type:`date`,container:`Work data`,range:!0,gridColumns:5,gridSmColumns:12,help:`Enter or select a valid date range.`,additionalHelpTooltip:`Ensure the start date is earlier than or equal to the end date.`,keydown:this.onKeyDown.bind(this,`vacation`)},{property:`entryTime`,label:`Entry time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`exitTime`,label:`Exit time`,type:`time`,gridColumns:2,gridSmColumns:6},{property:`wage`,type:`currency`,gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,displayFormat:`>>>,>>>,>>9.99`,icon:`an an-currency-circle-dollar`},{property:`revenue`,label:`Revenue`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`->>,>,>>>,>>9`,decimalsLength:0},{property:`adjustment`,label:`Adjustment`,type:`currency`,gridColumns:3,gridSmColumns:6,displayFormat:`->>9.99`,optional:!0},{property:`hobbies`,container:`MORE INFO`,gridColumns:6,gridSmColumns:12,optional:!0,options:[`Soccer`,`Basketball`,`Bike`,`Yoga`,`Travel`,`Run`],optionsMulti:!0,listboxControlPosition:`top`},{property:`favoriteHero`,gridColumns:6,gridSmColumns:12,label:`Favorite hero`,optional:!0,searchService:`https://po-sample-api.onrender.com/v1/heroes`,columns:[{property:`nickname`,label:`Hero`},{property:`label`,label:`Name`}],format:[`id`,`nickname`],fieldLabel:`nickname`,fieldValue:`email`},{property:`partner`,gridColumns:6,gridSmColumns:12,optionsService:`https://po-sample-api.onrender.com/v1/people`,fieldLabel:`name`,fieldValue:`id`,optional:!0,listboxControlPosition:`top`},{property:`videogame`,gridColumns:6,gridSmColumns:12,label:`Video game console`,optional:!0,fieldValue:`code`,fieldLabel:`console`,options:[{console:`Nintendo Wii U`,code:`NWU`},{console:`Playstation 4`,code:`PS4`},{console:`Xbox One`,code:`XONE`},{console:`Nintendo Switch`,code:`NSW`},{console:`Playstation 5`,code:`PS5`},{console:`Xbox Series S|X`,code:`XSSX`}],optionsMulti:!0,listboxControlPosition:`top`},{property:`agree`,gridColumns:12,label:`Do you agree?`,type:`boolean`,forceBooleanComponentType:Wae.checkbox},{property:`image`,type:`upload`,gridColumns:12,gridSmColumns:12,label:`Upload your background`,optional:!0,url:`https://po-sample-api.onrender.com/v1/uploads/addFile`,customAction:{icon:`an an-download`,visible:!0},customActionClick:m=>{console.log(`Iniciar download para o arquivo:`,m.name)}}];ngOnInit(){this.person={name:`Tony Stark`,birthday:`1970-05-29`,isJuridicPerson:!1,videogame:[`PS4`,`NSW`,`XSSX`],rememberSecretKey:`no`,status:`active`}}onChangeFields(m){return{value:{city:void 0},fields:[{property:`city`,gridColumns:6,options:this.registerService.getCity(m.value.state),disabled:!1}]}}onKeyDown(m,a){a.code===`F9`&&this.dynamicForm.showAdditionalHelp(m)}onLoadFields(m){return this.registerService.getUserDocument(m)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-container`]],viewQuery:function(a,r){if(a&1&&iu(Se,7),a&2){let l;vo(l=_o())&&(r.dynamicForm=l.first)}},standalone:!1,features:[we([K])],decls:5,vars:6,consts:[[`dynamicForm`,``],[`p-auto-focus`,`name`,3,`p-fields`,`p-load`,`p-validate`,`p-validate-fields`,`p-value`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(a,r){if(a&1){let l=Sx();nu(0,`po-dynamic-form`,1,0)(2,`br`),jc(3,`div`,2)(4,`po-button`,3),mt(`p-click`,function(){y_(l);let I=Fx(1);return r.poNotification.success(`Data saved successfully!`),v_(I.form.reset())}),wg()()}if(a&2){let l=Fx(1);jE(`p-fields`,r.fields)(`p-load`,r.onLoadFields.bind(r))(`p-validate`,r.onChangeFields.bind(r))(`p-validate-fields`,r.validateFields)(`p-value`,r.person),rg(4),jE(`p-disabled`,l?.form.invalid)}},dependencies:[ni,woe],encapsulation:2,changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o});var ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-container-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,r){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dynamic Form - Container`),wg(),jc(4,`a`,2),mt(`click`,function(){return r.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-dynamic-form
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg(),jc(21,`label`,6),iO(22,`sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts`),wg(),jc(23,`pre`,9),iO(24,`import { Injectable } from '@angular/core';

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
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-dynamic-form-container`),wg(),nu(27,`hr`)),a&2&&(rg(5),qx(`po-icon `+r.sampleCodeButtonIcon),rg(),Ag(` `,r.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ge,r.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ie],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-dynamic-form-doc`]],standalone:!1,decls:5363,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDynamicFormField>`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`language-html`],[1,`language-ts`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-load`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-validation`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`any`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`language-javascript`],[`pan`,``,1,`docs-api-property-type`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupAdvancedFilter>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoLookupColumn>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`/documentation/po-lookup`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`(file:`,`PoUploadFile)`,`=>`,`void`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilterMode`],[`pan`,``,1,`docs-api-property-type`,`ForceBooleanComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`ForceOptionComponentEnum`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`PoSwitchLabelPosition`],[`pan`,``,1,`docs-api-property-type`,`'top'`],[`pan`,``,1,`docs-api-property-type`,`'bottom'`],[`pan`,``,1,`docs-api-property-type`,`PoLookupLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoComboLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerRangeLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`Array<PoSelectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoMultiselectOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCheckboxGroupOption>`],[`pan`,``,1,`docs-api-property-type`,`Array<any>`],[`pan`,``,1,`docs-api-property-type`,`PoComboFilter`],[`pan`,``,1,`docs-api-property-type`,`PoMultiselectFilter`],[`href`,`https://po-ui.io/guides/api`],[`pan`,``,1,`docs-api-property-type`,`Array<PoCalendarRangePreset>`],[`pan`,``,1,`docs-api-property-type`,`'asc'`],[`pan`,``,1,`docs-api-property-type`,`'desc'`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`PoLookupFilter`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFieldType`],[`href`,`documentation/po-dynamic-form#po-dynamic-form-field-validation`],[`id`,`po-dynamic-form-load`],[`id`,`po-dynamic-form-field-validation`],[`pan`,``,1,`docs-api-property-type`,`PoDynamicFormField`],[`id`,`po-dynamic-form-validation`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(a,r){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoDynamicModule } from '@po-ui/ng-components';`),wg()(),nu(4,`div`,2),jc(5,`h3`,3),iO(6,`Componente`),wg(),jc(7,`h4`,4)(8,`code`,5),iO(9,`PoDynamicFormComponent`),wg()(),jc(10,`div`,2)(11,`p`),iO(12,`Componente para criação de formulários dinâmicos a partir de uma lista de objetos.`),wg(),jc(13,`p`),iO(14,`Também é possível verificar se o formulário está válido e informar valores para a exibição de informações. `),wg()(),jc(15,`div`,6)(16,`h4`,7),iO(17,`Seletor`),wg(),jc(18,`pre`,8),iO(19,`<po-dynamic-form
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
`),wg()(),jc(20,`h4`,9),iO(21,`Propriedades`),wg(),jc(22,`table`,10)(23,`tr`,11)(24,`th`,12),iO(25,`Nome`),wg(),jc(26,`th`,12),iO(27,`Tipo`),wg(),jc(28,`th`,12),iO(29,`Padrão`),wg(),jc(30,`th`,12),iO(31,`Descrição`),wg()(),jc(32,`tr`,13)(33,`td`,14)(34,`div`,15)(35,`span`,16),iO(36,` p-auto-focus`),nu(37,`br`),wg()()(),jc(38,`td`,17)(39,`code`,18),iO(40,`string`),wg()(),jc(41,`td`,19),iO(42,`-`),wg(),jc(43,`td`,20)(44,`em`)(45,`strong`),iO(46,`(opcional)`),wg()(),jc(47,`p`),iO(48,`Nome da propriedade, atribuída ao `),jc(49,`code`),iO(50,`PoDynamicFormField.property`),wg(),iO(51,`, que iniciará o campo com foco.`),wg()()(),jc(52,`tr`,13)(53,`td`,14)(54,`div`,15)(55,`span`,16),iO(56,` p-components-size`),nu(57,`br`),wg()()(),jc(58,`td`,17)(59,`code`,18),iO(60,`string`),wg()(),jc(61,`td`,19)(62,`p`)(63,`code`),iO(64,`medium`),wg()()(),jc(65,`td`,20)(66,`em`)(67,`strong`),iO(68,`(opcional)`),wg()(),jc(69,`p`),iO(70,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(71,`ul`)(72,`li`)(73,`code`),iO(74,`small`),wg(),iO(75,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(76,`li`)(77,`code`),iO(78,`medium`),wg(),iO(79,`: aplica a medida medium de cada componente.`),wg()(),jc(80,`blockquote`)(81,`p`),iO(82,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(83,`code`),iO(84,`medium`),wg(),iO(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(86,`a`,21),iO(87,`po-theme`),wg(),iO(88,`.`),wg()()()(),jc(89,`tr`,13)(90,`td`,14)(91,`div`,15)(92,`span`,16),iO(93,` p-fields`),nu(94,`br`),wg()()(),jc(95,`td`,17)(96,`code`,22),iO(97,`Array<PoDynamicFormField>`),wg()(),jc(98,`td`,19)(99,`p`)(100,`code`),iO(101,`[]`),wg()()(),jc(102,`td`,20)(103,`p`),iO(104,`Coleção de objetos que implementam a interface `),jc(105,`code`),iO(106,`PoDynamicFormField`),wg(),iO(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),wg(),jc(108,`blockquote`)(109,`p`),iO(110,`Ex: `),jc(111,`code`),iO(112,`[ { property: 'name' } ]`),wg()()(),jc(113,`p`),iO(114,`Regras de tipagem e criação dos componentes:`),wg(),jc(115,`ul`)(116,`li`),iO(117,`Caso o `),jc(118,`em`),iO(119,`type`),wg(),iO(120,` informado seja `),jc(121,`em`),iO(122,`boolean`),wg(),iO(123,` o componente criado será o `),jc(124,`code`),iO(125,`po-switch`),wg(),iO(126,`.`),wg(),jc(127,`li`),iO(128,`Caso o `),jc(129,`em`),iO(130,`type`),wg(),iO(131,` informado seja `),jc(132,`em`),iO(133,`currency`),wg(),iO(134,` e não seja informado um `),jc(135,`em`),iO(136,`mask`),wg(),iO(137,` ou `),jc(138,`em`),iO(139,`pattern`),wg(),iO(140,` o componente criado será o `),jc(141,`code`),iO(142,`po-decimal`),wg(),iO(143,`,
caso seja informado um `),jc(144,`em`),iO(145,`mask`),wg(),iO(146,` ou `),jc(147,`em`),iO(148,`pattern`),wg(),iO(149,` o componente criado será o `),jc(150,`code`),iO(151,`po-input`),wg(),iO(152,`.`),wg(),jc(153,`li`),iO(154,`Caso o `),jc(155,`em`),iO(156,`type`),wg(),iO(157,` informado seja `),jc(158,`em`),iO(159,`number`),wg(),iO(160,` e não seja informado um `),jc(161,`em`),iO(162,`mask`),wg(),iO(163,` ou `),jc(164,`em`),iO(165,`pattern`),wg(),iO(166,` o componente criado será o `),jc(167,`code`),iO(168,`po-number`),wg(),iO(169,`, caso seja
informado um `),jc(170,`em`),iO(171,`mask`),wg(),iO(172,` ou `),jc(173,`em`),iO(174,`pattern`),wg(),iO(175,` o componente criado será o `),jc(176,`code`),iO(177,`po-input`),wg(),iO(178,`.`),wg(),jc(179,`li`),iO(180,`Caso a lista possua a propriedade `),jc(181,`code`),iO(182,`options`),wg(),iO(183,` e a mesma possua até 3 itens o componente criado será o `),jc(184,`code`),iO(185,`po-radio-group`),wg(),iO(186,`
ou `),jc(187,`code`),iO(188,`po-checkbox-group`),wg(),iO(189,` se informar a propriedade `),jc(190,`code`),iO(191,`optionsMulti`),wg(),iO(192,`.`),wg(),jc(193,`li`),iO(194,`Caso a mesma possua 3 ou mais itens, será criado o componente `),jc(195,`code`),iO(196,`po-select`),wg(),iO(197,` ou, `),jc(198,`code`),iO(199,`po-multiselect`),wg(),iO(200,` se a propriedade `),jc(201,`code`),iO(202,`optionsMulti`),wg(),iO(203,`
for verdadeira.`),wg(),jc(204,`li`),iO(205,`Caso o `),jc(206,`em`),iO(207,`type`),wg(),iO(208,` informado seja `),jc(209,`em`),iO(210,`date`),wg(),iO(211,` ou `),jc(212,`em`),iO(213,`datetime`),wg(),iO(214,` o componente criado será o `),jc(215,`code`),iO(216,`po-datepicker`),wg(),iO(217,`.`),wg(),jc(218,`li`),iO(219,`Caso seja informado a propriedade `),jc(220,`code`),iO(221,`optionsService`),wg(),iO(222,` o componente criado será o `),jc(223,`code`),iO(224,`po-combo`),wg(),iO(225,`.`),wg(),jc(226,`li`),iO(227,`Caso o `),jc(228,`em`),iO(229,`type`),wg(),iO(230,` informado seja `),jc(231,`em`),iO(232,`time`),wg(),iO(233,` o componente criado será um `),jc(234,`code`),iO(235,`po-input`),wg(),iO(236,` podendo receber um `),jc(237,`em`),iO(238,`mask`),wg(),iO(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),jc(240,`em`),iO(241,`mask`),wg(),iO(242,` o componente será criado com a máscara '99:99' por padrão.`),wg(),jc(243,`li`),iO(244,`Caso a lista possua a propriedade `),jc(245,`code`),iO(246,`rows`),wg(),iO(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),jc(248,`code`),iO(249,`po-textarea`),wg(),iO(250,`, caso o valor da propriedade `),jc(251,`code`),iO(252,`rows`),wg(),iO(253,` seja menor que 3 o componente criado será o `),jc(254,`code`),iO(255,`po-input`),wg(),iO(256,`.`),wg(),jc(257,`li`),iO(258,`Caso seja informada a propriedade `),jc(259,`code`),iO(260,`secret`),wg(),iO(261,` o componente criado será o `),jc(262,`code`),iO(263,`po-password`),wg(),iO(264,`.`),wg(),jc(265,`li`),iO(266,`Caso o `),jc(267,`em`),iO(268,`type`),wg(),iO(269,` informado seja `),jc(270,`em`),iO(271,`string`),wg(),iO(272,` o componente criado será o `),jc(273,`code`),iO(274,`po-input`),wg(),iO(275,`.`),jc(276,`blockquote`)(277,`p`),iO(278,`Ao alterar o valor das `),jc(279,`code`),iO(280,`properties`),wg(),iO(281,`, visibilidade e/ou agrupamentos via container, os `),jc(282,`code`),iO(283,`fields`),wg(),iO(284,` que utilizam serviço podem refazer as chamadas para as API's.`),wg()()()()()(),jc(285,`tr`,13)(286,`td`,14)(287,`div`,23)(288,`span`,24),iO(289,` (p-form)`),nu(290,`br`),wg()()(),jc(291,`td`,17)(292,`code`,25),iO(293,`EventEmitter`),wg()(),jc(294,`td`,19),iO(295,`-`),wg(),jc(296,`td`,20)(297,`em`)(298,`strong`),iO(299,`(opcional)`),wg()(),jc(300,`p`),iO(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),wg(),jc(302,`p`),iO(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),jc(304,`em`),iO(305,`template reference`),wg(),iO(306,` e através do `),jc(307,`em`),iO(308,`output`),wg(),iO(309,`, veja os exemplos abaixo:`),wg(),jc(310,`blockquote`)(311,`p`)(312,`em`),iO(313,`template reference`),wg()()(),jc(314,`pre`)(315,`code`,26),iO(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),wg()(),jc(317,`blockquote`)(318,`p`)(319,`em`),iO(320,`Output`),wg()()(),jc(321,`pre`)(322,`code`,26),iO(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),wg()(),jc(324,`pre`)(325,`code`,27),iO(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),wg()(),jc(327,`blockquote`)(328,`p`),iO(329,`Caso a propriedade `),jc(330,`code`),iO(331,`p-group-form`),wg(),iO(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),wg()()()(),jc(333,`tr`,13)(334,`td`,14)(335,`div`,15)(336,`span`,16),iO(337,` p-group-form`),nu(338,`br`),wg()()(),jc(339,`td`,17)(340,`code`,28),iO(341,`boolean`),wg()(),jc(342,`td`,19),iO(343,`-`),wg(),jc(344,`td`,20)(345,`em`)(346,`strong`),iO(347,`(opcional)`),wg()(),jc(348,`p`),iO(349,`Ao informar esta propriedade, o componente passará a utilizar o formulário pai para criar os `),jc(350,`code`),iO(351,`FormControl`),wg(),iO(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),wg(),jc(353,`pre`)(354,`code`,26),iO(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),wg()()()(),jc(356,`tr`,13)(357,`td`,14)(358,`div`,15)(359,`span`,16),iO(360,` p-load`),nu(361,`br`),wg()()(),jc(362,`td`,17)(363,`code`,18),iO(364,`string `),wg(),jc(365,`code`,29),iO(366,` Function`),wg()(),jc(367,`td`,19),iO(368,`-`),wg(),jc(369,`td`,20)(370,`em`)(371,`strong`),iO(372,`(opcional)`),wg()(),jc(373,`p`),iO(374,`Função ou serviço que será executado na inicialização do componente.`),wg(),jc(375,`p`),iO(376,`A propriedade aceita os seguintes tipos:`),wg(),jc(377,`ul`)(378,`li`)(379,`code`),iO(380,`string`),wg(),iO(381,`: `),jc(382,`em`),iO(383,`Endpoint`),wg(),iO(384,` usado pelo componente para requisição via `),jc(385,`code`),iO(386,`POST`),wg(),iO(387,`.`),wg(),jc(388,`li`)(389,`code`),iO(390,`function`),wg(),iO(391,`: Método que será executado.`),wg()(),jc(392,`p`),iO(393,`Ao ser executado, irá receber como parâmetro o objeto informado no `),jc(394,`code`),iO(395,`p-value`),wg(),iO(396,`.`),wg(),jc(397,`p`),iO(398,`O retorno desta função deve ser do tipo `),jc(399,`a`,30),iO(400,`PoDynamicFormLoad`),wg(),iO(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),wg(),jc(402,`p`),iO(403,`Por exemplo:`),wg(),jc(404,`pre`)(405,`code`),iO(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),wg()(),jc(407,`p`),iO(408,`Para referenciar a sua função utilize a propriedade `),jc(409,`code`),iO(410,`bind`),wg(),iO(411,`, por exemplo:`),wg(),jc(412,`pre`)(413,`code`),iO(414,`[p-load]="onLoadFields.bind(this)"
`),wg()()()(),jc(415,`tr`,13)(416,`td`,14)(417,`div`,15)(418,`span`,16),iO(419,` p-validate`),nu(420,`br`),wg()()(),jc(421,`td`,17)(422,`code`,18),iO(423,`string `),wg(),jc(424,`code`,29),iO(425,` Function`),wg()(),jc(426,`td`,19),iO(427,`-`),wg(),jc(428,`td`,20)(429,`em`)(430,`strong`),iO(431,`(opcional)`),wg()(),jc(432,`p`),iO(433,`Função ou serviço para validar as `),jc(434,`strong`),iO(435,`mudanças do formulário`),wg(),iO(436,`.`),wg(),jc(437,`p`),iO(438,`A propriedade aceita os seguintes tipos:`),wg(),jc(439,`ul`)(440,`li`)(441,`code`),iO(442,`string`),wg(),iO(443,`: `),jc(444,`em`),iO(445,`Endpoint`),wg(),iO(446,` usado pelo componente para requisição via `),jc(447,`code`),iO(448,`POST`),wg(),iO(449,`.`),wg(),jc(450,`li`)(451,`code`),iO(452,`function`),wg(),iO(453,`: Método que será executado.`),wg()(),jc(454,`p`),iO(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),jc(456,`code`),iO(457,`PoDynamicFormFieldChanged`),wg()(),jc(458,`p`),iO(459,`O retorno desta função deve ser do tipo `),jc(460,`a`,31),iO(461,`PoDynamicFormValidation`),wg(),iO(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),wg(),jc(463,`pre`)(464,`code`),iO(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),wg()(),jc(466,`p`),iO(467,`Para referenciar a sua função utilize a propriedade `),jc(468,`code`),iO(469,`bind`),wg(),iO(470,`, por exemplo:`),wg(),jc(471,`pre`)(472,`code`),iO(473,`[p-validate]="this.myFunction.bind(this)"
`),wg()(),jc(474,`blockquote`)(475,`p`),iO(476,`Se houver uma lista de campos para validação definida em `),jc(477,`code`),iO(478,`p-validate-fields`),wg(),iO(479,`, a propriedade `),jc(480,`code`),iO(481,`validate`),wg(),iO(482,` só receberá o disparo para os campos equivalentes.`),wg()()()(),jc(483,`tr`,13)(484,`td`,14)(485,`div`,15)(486,`span`,16),iO(487,` p-validate-fields`),nu(488,`br`),wg()()(),jc(489,`td`,17)(490,`code`,32),iO(491,`Array<string>`),wg()(),jc(492,`td`,19),iO(493,`-`),wg(),jc(494,`td`,20)(495,`em`)(496,`strong`),iO(497,`(opcional)`),wg()(),jc(498,`p`),iO(499,`Lista que define os campos que irão disparar o validate do form.`),wg()()(),jc(500,`tr`,13)(501,`td`,14)(502,`div`,15)(503,`span`,16),iO(504,` p-validate-on-input`),nu(505,`br`),wg()()(),jc(506,`td`,17)(507,`code`,28),iO(508,`boolean`),wg()(),jc(509,`td`,19),iO(510,`-`),wg(),jc(511,`td`,20)(512,`em`)(513,`strong`),iO(514,`(opcional)`),wg()(),jc(515,`p`),iO(516,`Ao informar esta propriedade, o componente passará a emitir o valor a cada caractere digitado.`),wg(),jc(517,`p`),iO(518,`Pode ser aplicado nos seguintes componentes:`),wg(),jc(519,`ul`)(520,`li`),iO(521,`po-input`),wg(),jc(522,`li`),iO(523,`po-number`),wg(),jc(524,`li`),iO(525,`po-decimal`),wg(),jc(526,`li`),iO(527,`po-textarea`),wg(),jc(528,`li`),iO(529,`po-password`),wg()(),jc(530,`p`),iO(531,`Deve informar os campos que deseja receber as emissões na propriedade `),jc(532,`code`),iO(533,`p-validate-fields`),wg(),iO(534,`.`),wg()()(),jc(535,`tr`,13)(536,`td`,14)(537,`div`,15)(538,`span`,16),iO(539,` p-value`),nu(540,`br`),wg()()(),jc(541,`td`,17)(542,`code`,33),iO(543,`any`),wg()(),jc(544,`td`,19),iO(545,`-`),wg(),jc(546,`td`,20)(547,`p`),iO(548,`Objeto que será utilizado como valor para exibir as informações, será recuperado e preenchido através do atributo `),jc(549,`em`),iO(550,`property`),wg(),iO(551,`
dos objetos contidos na propridade `),jc(552,`code`),iO(553,`p-fields`),wg(),iO(554,`.`),wg(),jc(555,`p`),iO(556,`Pode iniciar com valor ou apenas com um objeto vazio que será preenchido conforme descrito acima.`),wg(),jc(557,`blockquote`)(558,`p`),iO(559,`Ex: `),jc(560,`code`),iO(561,`{ name: 'po' }`),wg()()()()()(),jc(562,`h3`,9),iO(563,`Métodos`),wg(),jc(564,`table`,34)(565,`tr`,13)(566,`th`,35)(567,`div`,15)(568,`h4`)(569,`span`,16),iO(570,` focus `),wg()()()()(),jc(571,`tr`,20)(572,`td`,20)(573,`p`),iO(574,`Função que atribui foco ao campo desejado.`),wg(),jc(575,`p`),iO(576,`Para utilizá-la é necessário capturar a instância do `),jc(577,`code`),iO(578,`dynamic form`),wg(),iO(579,`, como por exemplo:`),wg(),jc(580,`pre`)(581,`code`,26),iO(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),wg()(),jc(583,`pre`)(584,`code`,36),iO(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),wg()()()()(),jc(586,`h5`)(587,`b`),iO(588,`Parâmetros`),wg()(),jc(589,`table`,10)(590,`tr`,11)(591,`th`,12),iO(592,`Nome`),wg(),jc(593,`th`,12),iO(594,`Tipo`),wg(),jc(595,`th`,12),iO(596,`Descrição`),wg()(),jc(597,`tr`,13)(598,`td`,14),iO(599,` property`),wg(),jc(600,`td`,17)(601,`code`,37),iO(602,` string `),wg()(),jc(603,`td`,20)(604,`p`),iO(605,`Nome da propriedade atribuída ao `),jc(606,`code`),iO(607,`PoDynamicFormField.property`),wg(),iO(608,`.`),wg()()()(),nu(609,`br`),jc(610,`table`,34)(611,`tr`,13)(612,`th`,35)(613,`div`,15)(614,`h4`)(615,`span`,16),iO(616,` showAdditionalHelp `),wg()()()()(),jc(617,`tr`,20)(618,`td`,20)(619,`p`),iO(620,`Método que exibe `),jc(621,`code`),iO(622,`p-helper`),wg(),iO(623,` ou executa a ação definida em `),jc(624,`code`),iO(625,`p-helper{eventOnClick}`),wg(),iO(626,` ou em `),jc(627,`code`),iO(628,`p-additionalHelp`),wg(),iO(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(630,`code`),iO(631,`keydown`),wg(),iO(632,`.`),wg(),jc(633,`pre`)(634,`code`),iO(635,`import { PoDynamicModule } from '@po-ui/ng-components';
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
`),wg()()()()(),jc(636,`h5`)(637,`b`),iO(638,`Parâmetros`),wg()(),jc(639,`table`,10)(640,`tr`,11)(641,`th`,12),iO(642,`Nome`),wg(),jc(643,`th`,12),iO(644,`Tipo`),wg(),jc(645,`th`,12),iO(646,`Descrição`),wg()(),jc(647,`tr`,13)(648,`td`,14),iO(649,` property`),wg(),jc(650,`td`,17)(651,`code`,37),iO(652,` string `),wg()(),jc(653,`td`,20)(654,`p`),iO(655,`Identificador da coluna.`),wg()()()(),nu(656,`br`),jc(657,`h3`),iO(658,`Interfaces`),wg(),jc(659,`h4`,38)(660,`code`,5),iO(661,`PoDynamicFormField`),wg()(),jc(662,`div`,2)(663,`p`),iO(664,` Interface para definição das propriedades dos campos de entrada que serão criados dinamicamente.`),wg()(),jc(665,`h4`,9),iO(666,`Propriedades`),wg(),jc(667,`table`,10)(668,`tr`,11)(669,`th`,12),iO(670,`Nome`),wg(),jc(671,`th`,12),iO(672,`Tipo`),wg(),jc(673,`th`,12),iO(674,`Descrição`),wg()(),jc(675,`tr`,13)(676,`td`,14)(677,`div`,15)(678,`span`,16),iO(679,` additionalHelp`),nu(680,`br`),wg()()(),jc(681,`td`,17)(682,`code`,29),iO(683,`Function`),wg()(),jc(684,`td`,20)(685,`em`)(686,`strong`),iO(687,`(opcional)`),wg()(),jc(688,`p`),iO(689,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(690,`blockquote`)(691,`p`),iO(692,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),wg()()()(),jc(693,`tr`,13)(694,`td`,14)(695,`div`,15)(696,`span`,16),iO(697,` additionalHelpTooltip`),nu(698,`br`),wg()()(),jc(699,`td`,17)(700,`code`,18),iO(701,`string`),wg()(),jc(702,`td`,20)(703,`em`)(704,`strong`),iO(705,`(opcional)`),wg()(),jc(706,`p`),iO(707,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(708,`code`),iO(709,`po-helper`),wg(),iO(710,`.
`),jc(711,`strong`),iO(712,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(713,`blockquote`)(714,`p`),iO(715,`Essa propriedade está depreciada e será removida na versão 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade.`),wg()()()(),jc(716,`tr`,13)(717,`td`,14)(718,`div`,15)(719,`span`,16),iO(720,` advancedFilters`),nu(721,`br`),wg()()(),jc(722,`td`,17)(723,`code`,39),iO(724,`Array<PoLookupAdvancedFilter>`),wg()(),jc(725,`td`,20)(726,`em`)(727,`strong`),iO(728,`(opcional)`),wg()(),jc(729,`p`),iO(730,`Lista de objetos dos campos que serão criados na busca avançada.`),wg(),jc(731,`blockquote`)(732,`p`),iO(733,`Caso não seja passado um objeto ou então ele esteja em branco o link de busca avançada ficará escondido.`),wg()(),jc(734,`p`),iO(735,`Exemplo de URL com busca avançada:`),wg(),jc(736,`p`)(737,`code`),iO(738,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro`),wg()(),jc(739,`p`),iO(740,`Caso algum parâmetro seja uma lista, a concatenação é feita utilizando vírgula. Exemplo:`),wg(),jc(741,`p`)(742,`code`),iO(743,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan`),wg()()()(),jc(744,`tr`,13)(745,`td`,14)(746,`div`,15)(747,`span`,16),iO(748,` appendBox`),nu(749,`br`),wg()()(),jc(750,`td`,17)(751,`code`,28),iO(752,`boolean`),wg()(),jc(753,`td`,20)(754,`em`)(755,`strong`),iO(756,`(opcional)`),wg()(),jc(757,`p`),iO(758,`Define que o `),jc(759,`code`),iO(760,`listbox`),wg(),iO(761,` e/ou popover (`),jc(762,`code`),iO(763,`p-helper`),wg(),iO(764,` e/ou `),jc(765,`code`),iO(766,`p-error-limit`),wg(),iO(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),wg(),jc(768,`blockquote`)(769,`p`),iO(770,`Quando utilizado com `),jc(771,`code`),iO(772,`p-helper`),wg(),iO(773,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(774,`tr`,13)(775,`td`,14)(776,`div`,15)(777,`span`,16),iO(778,` autoHeight`),nu(779,`br`),wg()()(),jc(780,`td`,17)(781,`code`,28),iO(782,`boolean`),wg()(),jc(783,`td`,20)(784,`em`)(785,`strong`),iO(786,`(opcional)`),wg()(),jc(787,`p`),iO(788,`Define que a altura do componente será auto ajustável, possuindo uma altura minima porém a altura máxima será de acordo com o número de itens selecionados e a extensão dos mesmos, mantendo-os sempre visíveis.`),wg(),jc(789,`p`)(790,`strong`),iO(791,`Componentes compatíveis:`),wg(),jc(792,`code`),iO(793,`po-multiselect`),wg(),iO(794,`, `),jc(795,`code`),iO(796,`po-lookup`),wg(),iO(797,`.`),wg()()(),jc(798,`tr`,13)(799,`td`,14)(800,`div`,15)(801,`span`,16),iO(802,` autoUpload`),nu(803,`br`),wg()()(),jc(804,`td`,17)(805,`code`,28),iO(806,`boolean`),wg()(),jc(807,`td`,20)(808,`em`)(809,`strong`),iO(810,`(opcional)`),wg()(),jc(811,`p`),iO(812,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),wg(),jc(813,`p`)(814,`strong`),iO(815,`Componente compatível`),wg(),iO(816,`: `),jc(817,`code`),iO(818,`po-upload`),wg()()()(),jc(819,`tr`,13)(820,`td`,14)(821,`div`,15)(822,`span`,16),iO(823,` booleanFalse`),nu(824,`br`),wg()()(),jc(825,`td`,17)(826,`code`,18),iO(827,`string`),wg()(),jc(828,`td`,20)(829,`em`)(830,`strong`),iO(831,`(opcional)`),wg()(),jc(832,`p`),iO(833,`Texto exibido quando o valor do componente for `),jc(834,`em`),iO(835,`false`),wg(),iO(836,`.`),wg()()(),jc(837,`tr`,13)(838,`td`,14)(839,`div`,15)(840,`span`,16),iO(841,` booleanTrue`),nu(842,`br`),wg()()(),jc(843,`td`,17)(844,`code`,18),iO(845,`string`),wg()(),jc(846,`td`,20)(847,`em`)(848,`strong`),iO(849,`(opcional)`),wg()(),jc(850,`p`),iO(851,`Texto exibido quando o valor do componente for `),jc(852,`em`),iO(853,`true`),wg(),iO(854,`.`),wg()()(),jc(855,`tr`,13)(856,`td`,14)(857,`div`,15)(858,`span`,16),iO(859,` changeOnEnter`),nu(860,`br`),wg()()(),jc(861,`td`,17)(862,`code`,28),iO(863,`boolean`),wg()(),jc(864,`td`,20)(865,`em`)(866,`strong`),iO(867,`(opcional)`),wg()(),jc(868,`p`),iO(869,`Indica que o evento `),jc(870,`code`),iO(871,`p-change`),wg(),iO(872,` só será disparado ao clicar ou pressionar a tecla "Enter" sobre uma opção selecionada no `),jc(873,`code`),iO(874,`po-combo`),wg(),iO(875,`.`),wg()()(),jc(876,`tr`,13)(877,`td`,14)(878,`div`,15)(879,`span`,16),iO(880,` changeVisibleColumns`),nu(881,`br`),wg()()(),jc(882,`td`,17)(883,`code`,29),iO(884,`Function`),wg()(),jc(885,`td`,20)(886,`em`)(887,`strong`),iO(888,`(opcional)`),wg()(),jc(889,`p`),iO(890,`Evento disparado ao fechar o popover do gerenciador de colunas após alterar as colunas visíveis.`),wg(),jc(891,`p`),iO(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg(),jc(893,`p`)(894,`strong`),iO(895,`Componente compatível`),wg(),iO(896,`: `),jc(897,`code`),iO(898,`po-lookup`),wg()()()(),jc(899,`tr`,13)(900,`td`,14)(901,`div`,15)(902,`span`,16),iO(903,` clean`),nu(904,`br`),wg()()(),jc(905,`td`,17)(906,`code`,28),iO(907,`boolean`),wg()(),jc(908,`td`,20)(909,`em`)(910,`strong`),iO(911,`(opcional)`),wg()(),jc(912,`p`),iO(913,`Se verdadeiro, o campo receberá um botão para ser limpo.`),wg(),jc(914,`p`)(915,`strong`),iO(916,`Componentes compatíveis:`),wg(),jc(917,`code`),iO(918,`po-datepicker`),wg(),iO(919,`, `),jc(920,`code`),iO(921,`po-datepicker-range`),wg(),iO(922,`, `),jc(923,`code`),iO(924,`po-input`),wg(),iO(925,`, `),jc(926,`code`),iO(927,`po-number`),wg(),iO(928,`, `),jc(929,`code`),iO(930,`po-decimal`),wg(),iO(931,`,
`),jc(932,`code`),iO(933,`po-combo`),wg(),iO(934,`, `),jc(935,`code`),iO(936,`po-lookup`),wg(),iO(937,`, `),jc(938,`code`),iO(939,`po-password`),wg(),iO(940,`, `),jc(941,`code`),iO(942,`po-timepicker`),wg(),iO(943,`.`),wg()()(),jc(944,`tr`,13)(945,`td`,14)(946,`div`,15)(947,`span`,16),iO(948,` columnRestoreManager`),nu(949,`br`),wg()()(),jc(950,`td`,17)(951,`code`,29),iO(952,`Function`),wg()(),jc(953,`td`,20)(954,`em`)(955,`strong`),iO(956,`(opcional)`),wg()(),jc(957,`p`),iO(958,`Evento disparado ao clicar no botão de restaurar padrão no gerenciador de colunas.`),wg(),jc(959,`p`),iO(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),wg(),jc(961,`p`)(962,`strong`),iO(963,`Componente compatível`),wg(),iO(964,`: `),jc(965,`code`),iO(966,`po-lookup`),wg()()()(),jc(967,`tr`,13)(968,`td`,14)(969,`div`,15)(970,`span`,16),iO(971,` columns`),nu(972,`br`),wg()()(),jc(973,`td`,17)(974,`code`,40),iO(975,`Array<PoLookupColumn> `),wg(),jc(976,`code`,41),iO(977,` number`),wg()(),jc(978,`td`,20)(979,`em`)(980,`strong`),iO(981,`(opcional)`),wg()(),jc(982,`p`),iO(983,`Define as colunas para utilização da busca avançada. Usada somente em conjunto com a propriedade `),jc(984,`code`),iO(985,`searchService`),wg(),iO(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),jc(987,`a`,42)(988,`code`),iO(989,`PoLookupColumn`),wg()(),iO(990,`.`),wg(),jc(991,`blockquote`)(992,`p`),iO(993,`Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como `),jc(994,`em`),iO(995,`label`),wg(),iO(996,` e `),jc(997,`em`),iO(998,`value`),wg(),iO(999,` para valores
de tela e do model respectivamente.`),wg()(),jc(1e3,`p`)(1001,`strong`),iO(1002,`Componentes compatíveis:`),wg(),jc(1003,`code`),iO(1004,`po-radio-group`),wg(),iO(1005,`, `),jc(1006,`code`),iO(1007,`po-lookup`),wg(),iO(1008,`, `),jc(1009,`code`),iO(1010,`po-checkbox-group`),wg(),iO(1011,`.`),wg()()(),jc(1012,`tr`,13)(1013,`td`,14)(1014,`div`,15)(1015,`span`,16),iO(1016,` compactLabel`),nu(1017,`br`),wg()()(),jc(1018,`td`,17)(1019,`code`,28),iO(1020,`boolean`),wg()(),jc(1021,`td`,20)(1022,`em`)(1023,`strong`),iO(1024,`(opcional)`),wg()(),jc(1025,`p`),iO(1026,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(1027,`p`),iO(1028,`Quando habilitado (`),jc(1029,`code`),iO(1030,`true`),wg(),iO(1031,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(1032,`ul`)(1033,`li`)(1034,`code`),iO(1035,`po-label`),wg()(),jc(1036,`li`)(1037,`code`),iO(1038,`p-requirement (showRequired)`),wg()(),jc(1039,`li`)(1040,`code`),iO(1041,`po-helper`),wg()()(),jc(1042,`p`),iO(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(1044,`p`),iO(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(1046,`ul`)(1047,`li`)(1048,`code`),iO(1049,`--field-container-title-justify`),wg()(),jc(1050,`li`)(1051,`code`),iO(1052,`--field-container-title-flex`),wg()()(),jc(1053,`p`),iO(1054,`Exemplo:`),wg(),jc(1055,`pre`)(1056,`code`),iO(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(1058,`p`),iO(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(1060,`tr`,13)(1061,`td`,14)(1062,`div`,15)(1063,`span`,16),iO(1064,` container`),nu(1065,`br`),wg()()(),jc(1066,`td`,17)(1067,`code`,18),iO(1068,`string`),wg()(),jc(1069,`td`,20)(1070,`em`)(1071,`strong`),iO(1072,`(opcional)`),wg()(),jc(1073,`p`),iO(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),wg(),jc(1075,`p`),iO(1076,`Está propriedade é do tipo string, o valor que será titulo do contianer`),wg()()(),jc(1077,`tr`,13)(1078,`td`,14)(1079,`div`,15)(1080,`span`,16),iO(1081,` customAction`),nu(1082,`br`),wg()()(),jc(1083,`td`,17)(1084,`code`,43),iO(1085,`PoProgressAction`),wg()(),jc(1086,`td`,20)(1087,`em`)(1088,`strong`),iO(1089,`(opcional)`),wg()(),jc(1090,`p`),iO(1091,`Define uma ação personalizada no componente `),jc(1092,`code`),iO(1093,`po-upload`),wg(),iO(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),wg(),jc(1095,`p`)(1096,`strong`),iO(1097,`Componente compatível`),wg(),iO(1098,`: `),jc(1099,`code`),iO(1100,`po-upload`),wg(),iO(1101,`,`),wg(),jc(1102,`p`)(1103,`strong`),iO(1104,`Exemplo de configuração`),wg(),iO(1105,`:`),wg(),jc(1106,`pre`)(1107,`code`,44),iO(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),wg()()()(),jc(1109,`tr`,13)(1110,`td`,14)(1111,`div`,15)(1112,`span`,16),iO(1113,` customActionClick`),nu(1114,`br`),wg()()(),jc(1115,`td`,17)(1116,`code`,45),iO(1117,`(file: PoUploadFile) => void`),wg()(),jc(1118,`td`,20)(1119,`em`)(1120,`strong`),iO(1121,`(opcional)`),wg()(),jc(1122,`p`),iO(1123,`Evento emitido ao clicar na ação personalizada configurada no `),jc(1124,`code`),iO(1125,`p-custom-action`),wg(),iO(1126,`.`),wg(),jc(1127,`p`)(1128,`strong`),iO(1129,`Componente compatível`),wg(),iO(1130,`: `),jc(1131,`code`),iO(1132,`po-upload`),wg(),iO(1133,`,`),wg(),jc(1134,`p`),iO(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),wg(),jc(1136,`p`)(1137,`strong`),iO(1138,`Parâmetro do evento`),wg(),iO(1139,`:`),wg(),jc(1140,`ul`)(1141,`li`)(1142,`code`),iO(1143,`file`),wg(),iO(1144,`: O arquivo associado ao botão de ação. Este objeto é da classe `),jc(1145,`code`),iO(1146,`PoUploadFile`),wg(),iO(1147,` e contém informações sobre o arquivo, como nome, status e progresso.`),wg()(),jc(1148,`p`)(1149,`strong`),iO(1150,`Exemplo de uso`),wg(),iO(1151,`:`),wg(),jc(1152,`pre`)(1153,`code`,44),iO(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),wg()()()(),jc(1155,`tr`,13)(1156,`td`,14)(1157,`div`,15)(1158,`span`,16),iO(1159,` debounceTime`),nu(1160,`br`),wg()()(),jc(1161,`td`,17)(1162,`code`,41),iO(1163,`number`),wg()(),jc(1164,`td`,20)(1165,`em`)(1166,`strong`),iO(1167,`(opcional)`),wg()(),jc(1168,`p`),iO(1169,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro após cada pressionamento de tecla. Será utilizada apenas quando houver serviço (`),jc(1170,`code`),iO(1171,`p-filter-service`),wg(),iO(1172,`).`),wg(),jc(1173,`p`)(1174,`strong`),iO(1175,`Componentes compatíveis:`),wg(),jc(1176,`code`),iO(1177,`po-combo`),wg(),iO(1178,`, `),jc(1179,`code`),iO(1180,`po-multiselect`),wg(),iO(1181,`.`),wg()()(),jc(1182,`tr`,13)(1183,`td`,14)(1184,`div`,15)(1185,`span`,16),iO(1186,` decimalsLength`),nu(1187,`br`),wg()()(),jc(1188,`td`,17)(1189,`code`,41),iO(1190,`number`),wg()(),jc(1191,`td`,20)(1192,`em`)(1193,`strong`),iO(1194,`(opcional)`),wg()(),jc(1195,`p`),iO(1196,`Quantidade máxima de casas decimais.`),wg(),jc(1197,`blockquote`)(1198,`p`),iO(1199,`Esta propriedade só pode ser utilizada quando o `),jc(1200,`code`),iO(1201,`type`),wg(),iO(1202,` for `),jc(1203,`em`),iO(1204,`currency`),wg(),iO(1205,` ou `),jc(1206,`em`),iO(1207,`decimal`),wg(),iO(1208,`.`),wg()(),jc(1209,`blockquote`)(1210,`p`),iO(1211,`Quando utilizado com `),jc(1212,`code`),iO(1213,`displayFormat`),wg(),iO(1214,`, será respeitado o valor `),jc(1215,`strong`),iO(1216,`mais restritivo`),wg(),iO(1217,` entre esta propriedade e o número de casas decimais definido no formato.`),wg()()()(),jc(1218,`tr`,13)(1219,`td`,14)(1220,`div`,15)(1221,`span`,16),iO(1222,` directory`),nu(1223,`br`),wg()()(),jc(1224,`td`,17)(1225,`code`,28),iO(1226,`boolean`),wg()(),jc(1227,`td`,20)(1228,`em`)(1229,`strong`),iO(1230,`(opcional)`),wg()(),jc(1231,`p`),iO(1232,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),wg(),jc(1233,`blockquote`)(1234,`p`),iO(1235,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),wg()(),jc(1236,`blockquote`)(1237,`p`),iO(1238,`Definição não suportada pelo browser `),jc(1239,`strong`),iO(1240,`Internet Explorer`),wg(),iO(1241,`, todavia será possível a seleção de arquivos padrão.`),wg()(),jc(1242,`p`)(1243,`strong`),iO(1244,`Componente compatível`),wg(),iO(1245,`: `),jc(1246,`code`),iO(1247,`po-upload`),wg()()()(),jc(1248,`tr`,13)(1249,`td`,14)(1250,`div`,15)(1251,`span`,16),iO(1252,` disabled`),nu(1253,`br`),wg()()(),jc(1254,`td`,17)(1255,`code`,28),iO(1256,`boolean`),wg()(),jc(1257,`td`,20)(1258,`em`)(1259,`strong`),iO(1260,`(opcional)`),wg()(),jc(1261,`p`),iO(1262,`Desabilita o campo caso informar o valor `),jc(1263,`em`),iO(1264,`true`),wg(),iO(1265,`.`),wg()()(),jc(1266,`tr`,13)(1267,`td`,14)(1268,`div`,15)(1269,`span`,16),iO(1270,` disabledInitFilter`),nu(1271,`br`),wg()()(),jc(1272,`td`,17)(1273,`code`,28),iO(1274,`boolean`),wg()(),jc(1275,`td`,20)(1276,`em`)(1277,`strong`),iO(1278,`(opcional)`),wg()(),jc(1279,`p`),iO(1280,`Desabilita o filtro inicial no serviço do `),jc(1281,`code`),iO(1282,`po-combo`),wg(),iO(1283,`, que é executado no primeiro clique no campo.`),wg()()(),jc(1284,`tr`,13)(1285,`td`,14)(1286,`div`,15)(1287,`span`,16),iO(1288,` disabledTabFilter`),nu(1289,`br`),wg()()(),jc(1290,`td`,17)(1291,`code`,28),iO(1292,`boolean`),wg()(),jc(1293,`td`,20)(1294,`em`)(1295,`strong`),iO(1296,`(opcional)`),wg()(),jc(1297,`p`),iO(1298,`Se verdadeiro, desabilitará a busca de um item via TAB no `),jc(1299,`code`),iO(1300,`po-combo`),wg(),iO(1301,`.`),wg()()(),jc(1302,`tr`,13)(1303,`td`,14)(1304,`div`,15)(1305,`span`,16),iO(1306,` displayFormat`),nu(1307,`br`),wg()()(),jc(1308,`td`,17)(1309,`code`,18),iO(1310,`string`),wg()(),jc(1311,`td`,20)(1312,`em`)(1313,`strong`),iO(1314,`(opcional)`),wg()(),jc(1315,`p`),iO(1316,`Define uma máscara de formatação numérica avançada para o campo.`),wg(),jc(1317,`p`),iO(1318,`Simbologia suportada:`),wg(),jc(1319,`ul`)(1320,`li`)(1321,`code`),iO(1322,`9`),wg(),iO(1323,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),wg(),jc(1324,`li`)(1325,`code`),iO(1326,`>`),wg(),iO(1327,`: Supressão de zero à esquerda (dígito não obrigatório);`),wg(),jc(1328,`li`)(1329,`code`),iO(1330,`<`),wg(),iO(1331,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),wg(),jc(1332,`li`)(1333,`code`),iO(1334,`.`),wg(),iO(1335,`: Separador decimal (convertido conforme locale);`),wg(),jc(1336,`li`)(1337,`code`),iO(1338,`,`),wg(),iO(1339,`: Separador de milhar/grupo (convertido conforme locale);`),wg(),jc(1340,`li`)(1341,`code`),iO(1342,`-`),wg(),iO(1343,`: Sinal negativo (deve ser o primeiro caractere do formato).`),wg()(),jc(1344,`blockquote`)(1345,`p`),iO(1346,`Quando utilizado com `),jc(1347,`code`),iO(1348,`decimalsLength`),wg(),iO(1349,` ou `),jc(1350,`code`),iO(1351,`thousandMaxlength`),wg(),iO(1352,`, será respeitado o valor `),jc(1353,`strong`),iO(1354,`mais restritivo`),wg(),iO(1355,` entre a propriedade e o formato.`),wg()(),jc(1356,`p`),iO(1357,`Exemplos: `),jc(1358,`code`),iO(1359,`'>>>,>>>,>>9.99'`),wg(),iO(1360,`, `),jc(1361,`code`),iO(1362,`'->>9.99'`),wg(),iO(1363,`, `),jc(1364,`code`),iO(1365,`'999.9'`),wg()(),jc(1366,`blockquote`)(1367,`p`),iO(1368,`Esta propriedade só pode ser utilizada quando o `),jc(1369,`code`),iO(1370,`type`),wg(),iO(1371,` for `),jc(1372,`em`),iO(1373,`currency`),wg(),iO(1374,` ou `),jc(1375,`em`),iO(1376,`decimal`),wg(),iO(1377,`.`),wg()(),jc(1378,`p`)(1379,`strong`),iO(1380,`Componente compatível:`),wg(),jc(1381,`code`),iO(1382,`po-decimal`),wg(),iO(1383,`.`),wg()()(),jc(1384,`tr`,13)(1385,`td`,14)(1386,`div`,15)(1387,`span`,16),iO(1388,` divider`),nu(1389,`br`),wg()()(),jc(1390,`td`,17)(1391,`code`,18),iO(1392,`string`),wg()(),jc(1393,`td`,20)(1394,`em`)(1395,`strong`),iO(1396,`(opcional)`),wg()(),jc(1397,`p`),iO(1398,`Exibirá um divisor acima, utilizando o seu conteudo como título.`),wg()()(),jc(1399,`tr`,13)(1400,`td`,14)(1401,`div`,15)(1402,`span`,16),iO(1403,` dragDrop`),nu(1404,`br`),wg()()(),jc(1405,`td`,17)(1406,`code`,28),iO(1407,`boolean`),wg()(),jc(1408,`td`,20)(1409,`em`)(1410,`strong`),iO(1411,`(opcional)`),wg()(),jc(1412,`p`),iO(1413,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),wg(),jc(1414,`blockquote`)(1415,`p`),iO(1416,`Recomendamos utilizar apenas um `),jc(1417,`code`),iO(1418,`po-upload`),wg(),iO(1419,` com esta funcionalidade por tela.`),wg()(),jc(1420,`p`)(1421,`strong`),iO(1422,`Componente compatível`),wg(),iO(1423,`: `),jc(1424,`code`),iO(1425,`po-upload`),wg()()()(),jc(1426,`tr`,13)(1427,`td`,14)(1428,`div`,15)(1429,`span`,16),iO(1430,` dragDropHeight`),nu(1431,`br`),wg()()(),jc(1432,`td`,17)(1433,`code`,41),iO(1434,`number`),wg()(),jc(1435,`td`,20)(1436,`em`)(1437,`strong`),iO(1438,`(opcional)`),wg()(),jc(1439,`p`),iO(1440,`Define em `),jc(1441,`em`),iO(1442,`pixels`),wg(),iO(1443,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),jc(1444,`code`),iO(1445,`160px`),wg(),iO(1446,`.`),wg(),jc(1447,`blockquote`)(1448,`p`),iO(1449,`Esta propriedade funciona somente se a propriedade `),jc(1450,`code`),iO(1451,`p-drag-drop`),wg(),iO(1452,` estiver habilitada.`),wg()(),jc(1453,`p`)(1454,`strong`),iO(1455,`Componente compatível`),wg(),iO(1456,`: `),jc(1457,`code`),iO(1458,`po-upload`),wg()()()(),jc(1459,`tr`,13)(1460,`td`,14)(1461,`div`,15)(1462,`span`,16),iO(1463,` errorAsyncFunction`),nu(1464,`br`),wg()()(),jc(1465,`td`,17)(1466,`code`,46),iO(1467,`(value) => Observable<boolean>`),wg()(),jc(1468,`td`,20)(1469,`em`)(1470,`strong`),iO(1471,`(opcional)`),wg()(),jc(1472,`p`),iO(1473,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),jc(1474,`code`),iO(1475,`change`),wg(),iO(1476,` ou `),jc(1477,`code`),iO(1478,`change-model`),wg(),iO(1479,`, dependendo do valor da propriedade `),jc(1480,`code`),iO(1481,`triggerMode`),wg(),iO(1482,`.`),wg(),jc(1483,`blockquote`)(1484,`p`),iO(1485,`Retorna `),jc(1486,`code`),iO(1487,`Observable com o valor true`),wg(),iO(1488,` para sinalizar o erro `),jc(1489,`code`),iO(1490,`false`),wg(),iO(1491,` para indicar que não há erro.`),wg()(),jc(1492,`p`)(1493,`strong`),iO(1494,`Componente compatível`),wg(),iO(1495,`: `),jc(1496,`code`),iO(1497,`po-datepicker`),wg()()()(),jc(1498,`tr`,13)(1499,`td`,14)(1500,`div`,15)(1501,`span`,16),iO(1502,` errorAsyncProperties`),nu(1503,`br`),wg()()(),jc(1504,`td`,17)(1505,`code`,47),iO(1506,`ErrorAsyncProperties`),wg()(),jc(1507,`td`,20)(1508,`em`)(1509,`strong`),iO(1510,`(opcional)`),wg()(),jc(1511,`p`),iO(1512,`Realiza alguma validação customizada assíncrona no componente.`),wg(),jc(1513,`p`)(1514,`strong`),iO(1515,`Componentes compatíveis:`),wg(),jc(1516,`code`),iO(1517,`po-input`),wg(),iO(1518,`, `),jc(1519,`code`),iO(1520,`po-number`),wg(),iO(1521,`, `),jc(1522,`code`),iO(1523,`po-decimal`),wg(),iO(1524,`, `),jc(1525,`code`),iO(1526,`po-password`),wg(),iO(1527,`.`),wg()()(),jc(1528,`tr`,13)(1529,`td`,14)(1530,`div`,15)(1531,`span`,16),iO(1532,` errorLimit`),nu(1533,`br`),wg()()(),jc(1534,`td`,17)(1535,`code`,28),iO(1536,`boolean`),wg()(),jc(1537,`td`,20)(1538,`em`)(1539,`strong`),iO(1540,`(opcional)`),wg()(),jc(1541,`p`),iO(1542,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(1543,`blockquote`)(1544,`p`),iO(1545,`Caso essa propriedade seja definida como `),jc(1546,`code`),iO(1547,`true`),wg(),iO(1548,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()(),jc(1549,`p`)(1550,`strong`),iO(1551,`Componentes compatíveis:`),wg(),jc(1552,`code`),iO(1553,`po-checkbox-group`),wg(),iO(1554,`, `),jc(1555,`code`),iO(1556,`po-combo`),wg(),iO(1557,`, `),jc(1558,`code`),iO(1559,`po-datepicker`),wg(),iO(1560,`, `),jc(1561,`code`),iO(1562,`po-datepicker-range`),wg(),iO(1563,`, `),jc(1564,`code`),iO(1565,`po-decimal`),wg(),iO(1566,`, `),jc(1567,`code`),iO(1568,`po-input`),wg(),iO(1569,`, `),jc(1570,`code`),iO(1571,`po-lookup`),wg(),iO(1572,`, `),jc(1573,`code`),iO(1574,`po-multiselect`),wg(),iO(1575,`, `),jc(1576,`code`),iO(1577,`po-number`),wg(),iO(1578,`, `),jc(1579,`code`),iO(1580,`po-password`),wg(),iO(1581,`, `),jc(1582,`code`),iO(1583,`po-radio-group`),wg(),iO(1584,`, `),jc(1585,`code`),iO(1586,`po-select`),wg(),iO(1587,`,
`),jc(1588,`code`),iO(1589,`po-switch`),wg(),iO(1590,`, `),jc(1591,`code`),iO(1592,`po-textarea`),wg(),iO(1593,`, `),jc(1594,`code`),iO(1595,`po-timepicker`),wg(),iO(1596,`.`),wg()()(),jc(1597,`tr`,13)(1598,`td`,14)(1599,`div`,15)(1600,`span`,16),iO(1601,` errorMessage`),nu(1602,`br`),wg()()(),jc(1603,`td`,17)(1604,`code`,18),iO(1605,`string`),wg()(),jc(1606,`td`,20)(1607,`em`)(1608,`strong`),iO(1609,`(opcional)`),wg()(),jc(1610,`p`),iO(1611,`Mensagem que será apresentada quando o campo ficar inválido.`),wg(),jc(1612,`p`),iO(1613,`O campo fica inválido quando as seguintes propriedades não forem respeitadas:`),wg(),jc(1614,`ul`)(1615,`li`),iO(1616,`pattern;`),wg(),jc(1617,`li`),iO(1618,`minValue;`),wg(),jc(1619,`li`),iO(1620,`maxValue;`),wg(),jc(1621,`li`),iO(1622,`required;`),wg()(),jc(1623,`blockquote`)(1624,`p`),iO(1625,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),jc(1626,`code`),iO(1627,`po-datepicker`),wg(),iO(1628,`, `),jc(1629,`code`),iO(1630,`po-input`),wg(),iO(1631,`, `),jc(1632,`code`),iO(1633,`po-number`),wg(),iO(1634,`, `),jc(1635,`code`),iO(1636,`po-decimal`),wg(),iO(1637,`, `),jc(1638,`code`),iO(1639,`po-password`),wg(),iO(1640,`, `),jc(1641,`code`),iO(1642,`po-timepicker`),wg(),iO(1643,`, \xE9 necess\xE1rio que a propriedade
`),jc(1644,`code`),iO(1645,`requiredFieldErrorMessage`),wg(),iO(1646,` esteja como `),jc(1647,`code`),iO(1648,`true`),wg(),iO(1649,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),jc(1650,`code`),iO(1651,`po-datepicker-range`),wg(),iO(1652,`, `),jc(1653,`code`),iO(1654,`po-select`),wg(),iO(1655,`, `),jc(1656,`code`),iO(1657,`po-checkbox-group`),wg(),iO(1658,`, `),jc(1659,`code`),iO(1660,`po-radio-group`),wg(),iO(1661,`, `),jc(1662,`code`),iO(1663,`po-multiselect`),wg(),iO(1664,`, `),jc(1665,`code`),iO(1666,`po-combo`),wg(),iO(1667,`,
`),jc(1668,`code`),iO(1669,`po-lookup`),wg(),iO(1670,` e `),jc(1671,`code`),iO(1672,`po-textarea`),wg(),iO(1673,` não é necessário passar a propriedade `),jc(1674,`code`),iO(1675,`requiredFieldErrorMessage`),wg(),iO(1676,`.`),wg()(),jc(1677,`p`)(1678,`strong`),iO(1679,`Componentes compatíveis:`),wg(),jc(1680,`code`),iO(1681,`po-checkbox-group`),wg(),iO(1682,`, `),jc(1683,`code`),iO(1684,`po-combo`),wg(),iO(1685,`, `),jc(1686,`code`),iO(1687,`po-datepicker`),wg(),iO(1688,`, `),jc(1689,`code`),iO(1690,`po-datepicker-range`),wg(),iO(1691,`, `),jc(1692,`code`),iO(1693,`po-decimal`),wg(),iO(1694,`, `),jc(1695,`code`),iO(1696,`po-input`),wg(),iO(1697,`, `),jc(1698,`code`),iO(1699,`po-lookup`),wg(),iO(1700,`, `),jc(1701,`code`),iO(1702,`po-multiselect`),wg(),iO(1703,`, `),jc(1704,`code`),iO(1705,`po-number`),wg(),iO(1706,`, `),jc(1707,`code`),iO(1708,`po-password`),wg(),iO(1709,`, `),jc(1710,`code`),iO(1711,`po-radio-group`),wg(),iO(1712,`, `),jc(1713,`code`),iO(1714,`po-select`),wg(),iO(1715,`,
`),jc(1716,`code`),iO(1717,`po-switch`),wg(),iO(1718,`, `),jc(1719,`code`),iO(1720,`po-textarea`),wg(),iO(1721,`, `),jc(1722,`code`),iO(1723,`po-timepicker`),wg(),iO(1724,`.`),wg()()(),jc(1725,`tr`,13)(1726,`td`,14)(1727,`div`,15)(1728,`span`,16),iO(1729,` fieldLabel`),nu(1730,`br`),wg()()(),jc(1731,`td`,17)(1732,`code`,18),iO(1733,`string`),wg()(),jc(1734,`td`,20)(1735,`em`)(1736,`strong`),iO(1737,`(opcional)`),wg()(),jc(1738,`p`),iO(1739,`Nome da propriedade do objeto retornado que será utilizado como descrição do campo.`),wg(),jc(1740,`p`),iO(1741,`O valor padrão é: `),jc(1742,`code`),iO(1743,`label`),wg(),iO(1744,`.`),wg(),jc(1745,`blockquote`)(1746,`p`),iO(1747,`Esta propriedade pode ser utilizada em conjunto com: `),jc(1748,`code`),iO(1749,`options`),wg(),iO(1750,`, `),jc(1751,`code`),iO(1752,`optionsService`),wg(),iO(1753,` e `),jc(1754,`code`),iO(1755,`searchService`),wg(),iO(1756,`.`),wg()()()(),jc(1757,`tr`,13)(1758,`td`,14)(1759,`div`,15)(1760,`span`,16),iO(1761,` fieldValue`),nu(1762,`br`),wg()()(),jc(1763,`td`,17)(1764,`code`,18),iO(1765,`string`),wg()(),jc(1766,`td`,20)(1767,`em`)(1768,`strong`),iO(1769,`(opcional)`),wg()(),jc(1770,`p`),iO(1771,`Nome da propriedade do objeto retornado que será utilizado como valor do campo.`),wg(),jc(1772,`p`),iO(1773,`O valor padrão é: `),jc(1774,`code`),iO(1775,`value`),wg(),iO(1776,`.`),wg(),jc(1777,`blockquote`)(1778,`p`),iO(1779,`Esta propriedade pode ser utilizada em conjunto com: `),jc(1780,`code`),iO(1781,`options`),wg(),iO(1782,`, `),jc(1783,`code`),iO(1784,`optionsService`),wg(),iO(1785,` e `),jc(1786,`code`),iO(1787,`searchService`),wg(),iO(1788,`.`),wg()()()(),jc(1789,`tr`,13)(1790,`td`,14)(1791,`div`,15)(1792,`span`,16),iO(1793,` filterMinlength`),nu(1794,`br`),wg()()(),jc(1795,`td`,17)(1796,`code`,41),iO(1797,`number`),wg()(),jc(1798,`td`,20)(1799,`em`)(1800,`strong`),iO(1801,`(opcional)`),wg()(),jc(1802,`p`),iO(1803,`Valor mínimo de caracteres para realizar o filtro no serviço do `),jc(1804,`code`),iO(1805,`po-combo`),wg(),iO(1806,`.`),wg()()(),jc(1807,`tr`,13)(1808,`td`,14)(1809,`div`,15)(1810,`span`,16),iO(1811,` filterMode`),nu(1812,`br`),wg()()(),jc(1813,`td`,17)(1814,`code`,48),iO(1815,`PoMultiselectFilterMode`),wg()(),jc(1816,`td`,20)(1817,`em`)(1818,`strong`),iO(1819,`(opcional)`),wg()(),jc(1820,`p`),iO(1821,`Define o modo de pesquisa utilizado no filtro da lista de seleção: `),jc(1822,`code`),iO(1823,`startsWith`),wg(),iO(1824,`, `),jc(1825,`code`),iO(1826,`contains`),wg(),iO(1827,` ou `),jc(1828,`code`),iO(1829,`endsWith`),wg(),iO(1830,`.`),wg(),jc(1831,`blockquote`)(1832,`p`),iO(1833,`Quando utilizar a propriedade p-filter-service esta propriedade será ignorada.`),wg()(),jc(1834,`p`)(1835,`strong`),iO(1836,`Componente compatível:`),wg(),jc(1837,`code`),iO(1838,`po-multiselect`),wg(),iO(1839,`.`),wg()()(),jc(1840,`tr`,13)(1841,`td`,14)(1842,`div`,15)(1843,`span`,16),iO(1844,` forceBooleanComponentType`),nu(1845,`br`),wg()()(),jc(1846,`td`,17)(1847,`code`,49),iO(1848,`ForceBooleanComponentEnum`),wg()(),jc(1849,`td`,20)(1850,`em`)(1851,`strong`),iO(1852,`(opcional)`),wg()(),jc(1853,`p`),iO(1854,`Valores aceitos:`),wg(),jc(1855,`ul`)(1856,`li`),iO(1857,`ForceBooleanComponentEnum.switch`),wg(),jc(1858,`li`),iO(1859,`ForceBooleanComponentEnum.checkbox`),wg()()()(),jc(1860,`tr`,13)(1861,`td`,14)(1862,`div`,15)(1863,`span`,16),iO(1864,` forceOptionsComponentType`),nu(1865,`br`),wg()()(),jc(1866,`td`,17)(1867,`code`,50),iO(1868,`ForceOptionComponentEnum`),wg()(),jc(1869,`td`,20)(1870,`em`)(1871,`strong`),iO(1872,`(opcional)`),wg()(),jc(1873,`p`),iO(1874,`pode ser utilizada em conjunto com a propriedade `),jc(1875,`code`),iO(1876,`options`),wg(),iO(1877,` forçando o componente a renderizar um `),jc(1878,`code`),iO(1879,`po-select`),wg(),iO(1880,` ou `),jc(1881,`code`),iO(1882,`po-radio-group`),wg(),iO(1883,`.`),wg(),jc(1884,`p`),iO(1885,`Valores aceitos:`),wg(),jc(1886,`ul`)(1887,`li`),iO(1888,`ForceOptionComponentEnum.radioGroup`),wg(),jc(1889,`li`),iO(1890,`ForceOptionComponentEnum.select`),wg()(),jc(1891,`blockquote`)(1892,`p`),iO(1893,`Essa propriedade será ignorada caso seja utilizada em conjunto com a propriedade `),jc(1894,`code`),iO(1895,`optionsMulti`),wg(),iO(1896,` e `),jc(1897,`code`),iO(1898,`optionsService`),wg(),iO(1899,`.`),wg()()()(),jc(1900,`tr`,13)(1901,`td`,14)(1902,`div`,15)(1903,`span`,16),iO(1904,` formField`),nu(1905,`br`),wg()()(),jc(1906,`td`,17)(1907,`code`,18),iO(1908,`string`),wg()(),jc(1909,`td`,20)(1910,`em`)(1911,`strong`),iO(1912,`(opcional)`),wg()(),jc(1913,`p`),iO(1914,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),jc(1915,`code`),iO(1916,`url`),wg(),iO(1917,`.`),wg(),jc(1918,`blockquote`)(1919,`p`),iO(1920,`O valor default é `),jc(1921,`code`),iO(1922,`files`),wg()()(),jc(1923,`p`)(1924,`strong`),iO(1925,`Componente compatível`),wg(),iO(1926,`: `),jc(1927,`code`),iO(1928,`po-upload`),wg()()()(),jc(1929,`tr`,13)(1930,`td`,14)(1931,`div`,15)(1932,`span`,16),iO(1933,` format`),nu(1934,`br`),wg()()(),jc(1935,`td`,17)(1936,`code`,18),iO(1937,`string `),wg(),jc(1938,`code`,32),iO(1939,` Array<string>`),wg()(),jc(1940,`td`,20)(1941,`em`)(1942,`strong`),iO(1943,`(opcional)`),wg()(),jc(1944,`p`),iO(1945,`Formato de exibição no campo.`),wg(),jc(1946,`p`),iO(1947,`Ao utilizar esta propriedade com o `),jc(1948,`code`),iO(1949,`type`),wg(),jc(1950,`em`),iO(1951,`PoDynamicFieldType.Date`),wg(),iO(1952,` ou `),jc(1953,`em`),iO(1954,`PoDynamicFieldType.DateTime`),wg(),iO(1955,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),wg(),jc(1956,`p`),iO(1957,`Valores válidos:`),wg(),jc(1958,`ul`)(1959,`li`),iO(1960,`dd/mm/yyyy`),wg(),jc(1961,`li`),iO(1962,`mm/dd/yyyy`),wg(),jc(1963,`li`),iO(1964,`yyyy/mm/dd`),wg()(),jc(1965,`p`),iO(1966,`Ao utilizar com o `),jc(1967,`code`),iO(1968,`type`),wg(),jc(1969,`em`),iO(1970,`PoDynamicFieldType.Time`),wg(),iO(1971,`, define o formato de exibição do horário:`),wg(),jc(1972,`p`),iO(1973,`Valores válidos:`),wg(),jc(1974,`ul`)(1975,`li`)(1976,`code`),iO(1977,`24`),wg(),iO(1978,`: formato de 24 horas (padrão)`),wg(),jc(1979,`li`)(1980,`code`),iO(1981,`12`),wg(),iO(1982,`: formato de 12 horas com indicador AM/PM`),wg()(),jc(1983,`p`),iO(1984,`Também pode-se utilizar em conjunto com `),jc(1985,`code`),iO(1986,`searchService`),wg(),iO(1987,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),wg(),jc(1988,`p`)(1989,`strong`),iO(1990,`Componentes compatíveis:`),wg(),jc(1991,`code`),iO(1992,`po-datepicker`),wg(),iO(1993,`, `),jc(1994,`code`),iO(1995,`po-datetimepicker`),wg(),iO(1996,`, `),jc(1997,`code`),iO(1998,`po-timepicker`),wg(),iO(1999,`, `),jc(2e3,`code`),iO(2001,`po-lookup`),wg(),iO(2002,`.`),wg()()(),jc(2003,`tr`,13)(2004,`td`,14)(2005,`div`,15)(2006,`span`,16),iO(2007,` formatModel`),nu(2008,`br`),wg()()(),jc(2009,`td`,17)(2010,`code`,28),iO(2011,`boolean`),wg()(),jc(2012,`td`,20)(2013,`em`)(2014,`strong`),iO(2015,`(opcional)`),wg()(),jc(2016,`p`),iO(2017,`Indica se o `),jc(2018,`code`),iO(2019,`model`),wg(),iO(2020,` receberá o valor formatado pelas propriedades `),jc(2021,`code`),iO(2022,`p-label-on`),wg(),iO(2023,` e `),jc(2024,`code`),iO(2025,`p-label-off`),wg(),iO(2026,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),wg(),jc(2027,`p`),iO(2028,`O valor padrão é: `),jc(2029,`code`),iO(2030,`false`),wg(),iO(2031,`.`),wg(),jc(2032,`blockquote`)(2033,`p`),iO(2034,`Esta propriedade está disponivel apenas para o `),jc(2035,`code`),iO(2036,`swicth`),wg(),iO(2037,`.`),wg()()()(),jc(2038,`tr`,13)(2039,`td`,14)(2040,`div`,15)(2041,`span`,16),iO(2042,` formatTime`),nu(2043,`br`),wg()()(),jc(2044,`td`,17)(2045,`code`,18),iO(2046,`string`),wg()(),jc(2047,`td`,20)(2048,`em`)(2049,`strong`),iO(2050,`(opcional)`),wg()(),jc(2051,`p`),iO(2052,`Define o formato de exibição do timer (`),jc(2053,`code`),iO(2054,`'12'`),wg(),iO(2055,` ou `),jc(2056,`code`),iO(2057,`'24'`),wg(),iO(2058,`).`),wg(),jc(2059,`p`)(2060,`strong`),iO(2061,`Componente compatível:`),wg(),jc(2062,`code`),iO(2063,`po-datetimepicker`),wg()()()(),jc(2064,`tr`,13)(2065,`td`,14)(2066,`div`,15)(2067,`span`,16),iO(2068,` gridColumns`),nu(2069,`br`),wg()()(),jc(2070,`td`,17)(2071,`code`,41),iO(2072,`number`),wg()(),jc(2073,`td`,20)(2074,`em`)(2075,`strong`),iO(2076,`(opcional)`),wg()(),jc(2077,`p`),iO(2078,`Tamanho de exibição do campo em telas.`),wg(),jc(2079,`p`),iO(2080,`Deve ser usado o sistema de `),jc(2081,`strong`),iO(2082,`grid`),wg(),iO(2083,` do PO (1 ... 12 colunas).`),wg(),jc(2084,`blockquote`)(2085,`p`),iO(2086,`Esta propriedade é generica, aplica o valor em todos os tamanhos de telas.`),wg()()()(),jc(2087,`tr`,13)(2088,`td`,14)(2089,`div`,15)(2090,`span`,16),iO(2091,` gridLgColumns`),nu(2092,`br`),wg()()(),jc(2093,`td`,17)(2094,`code`,41),iO(2095,`number`),wg()(),jc(2096,`td`,20)(2097,`em`)(2098,`strong`),iO(2099,`(opcional)`),wg()(),jc(2100,`p`),iO(2101,`Tamanho de exibição do campo em telas grandes (lg).`),wg(),jc(2102,`p`),iO(2103,`Deve ser usado o sistema de `),jc(2104,`strong`),iO(2105,`grid`),wg(),iO(2106,` do PO (1 ... 12 colunas).`),wg(),jc(2107,`blockquote`)(2108,`p`),iO(2109,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(2110,`code`),iO(2111,`gridColumns`),wg(),iO(2112,`.`),wg()()()(),jc(2113,`tr`,13)(2114,`td`,14)(2115,`div`,15)(2116,`span`,16),iO(2117,` gridLgPull`),nu(2118,`br`),wg()()(),jc(2119,`td`,17)(2120,`code`,41),iO(2121,`number`),wg()(),jc(2122,`td`,20)(2123,`em`)(2124,`strong`),iO(2125,`(opcional)`),wg()(),jc(2126,`p`),iO(2127,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas grandes (lg).`),wg(),jc(2128,`p`),iO(2129,`Deve ser usado o sistema de `),jc(2130,`strong`),iO(2131,`grid`),wg(),iO(2132,` do PO (1 ... 11 colunas).`),wg(),jc(2133,`blockquote`)(2134,`p`),iO(2135,`Esta propriedade não funciona com a propriedade `),jc(2136,`code`),iO(2137,`gridColumns`),wg(),iO(2138,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(2139,`tr`,13)(2140,`td`,14)(2141,`div`,15)(2142,`span`,16),iO(2143,` gridMdColumns`),nu(2144,`br`),wg()()(),jc(2145,`td`,17)(2146,`code`,41),iO(2147,`number`),wg()(),jc(2148,`td`,20)(2149,`em`)(2150,`strong`),iO(2151,`(opcional)`),wg()(),jc(2152,`p`),iO(2153,`Tamanho de exibição do campo em telas médias (md).`),wg(),jc(2154,`p`),iO(2155,`Deve ser usado o sistema de `),jc(2156,`strong`),iO(2157,`grid`),wg(),iO(2158,` do PO (1 ... 12 colunas).`),wg(),jc(2159,`blockquote`)(2160,`p`),iO(2161,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(2162,`code`),iO(2163,`gridColumns`),wg(),iO(2164,`.`),wg()()()(),jc(2165,`tr`,13)(2166,`td`,14)(2167,`div`,15)(2168,`span`,16),iO(2169,` gridMdPull`),nu(2170,`br`),wg()()(),jc(2171,`td`,17)(2172,`code`,41),iO(2173,`number`),wg()(),jc(2174,`td`,20)(2175,`em`)(2176,`strong`),iO(2177,`(opcional)`),wg()(),jc(2178,`p`),iO(2179,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas médias (md).`),wg(),jc(2180,`p`),iO(2181,`Deve ser usado o sistema de `),jc(2182,`strong`),iO(2183,`grid`),wg(),iO(2184,` do PO (1 ... 11 colunas).`),wg(),jc(2185,`blockquote`)(2186,`p`),iO(2187,`Esta propriedade não funciona com a propriedade `),jc(2188,`code`),iO(2189,`gridColumns`),wg(),iO(2190,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(2191,`tr`,13)(2192,`td`,14)(2193,`div`,15)(2194,`span`,16),iO(2195,` gridSmColumns`),nu(2196,`br`),wg()()(),jc(2197,`td`,17)(2198,`code`,41),iO(2199,`number`),wg()(),jc(2200,`td`,20)(2201,`em`)(2202,`strong`),iO(2203,`(opcional)`),wg()(),jc(2204,`p`),iO(2205,`Tamanho de exibição do campo em telas menores (sm).`),wg(),jc(2206,`p`),iO(2207,`Deve ser usado o sistema de `),jc(2208,`strong`),iO(2209,`grid`),wg(),iO(2210,` do PO (1 ... 12 colunas).`),wg(),jc(2211,`blockquote`)(2212,`p`),iO(2213,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(2214,`code`),iO(2215,`gridColumns`),wg(),iO(2216,`.`),wg()()()(),jc(2217,`tr`,13)(2218,`td`,14)(2219,`div`,15)(2220,`span`,16),iO(2221,` gridSmPull`),nu(2222,`br`),wg()()(),jc(2223,`td`,17)(2224,`code`,41),iO(2225,`number`),wg()(),jc(2226,`td`,20)(2227,`em`)(2228,`strong`),iO(2229,`(opcional)`),wg()(),jc(2230,`p`),iO(2231,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas menores (sm).`),wg(),jc(2232,`p`),iO(2233,`Deve ser usado o sistema de `),jc(2234,`strong`),iO(2235,`grid`),wg(),iO(2236,` do PO (1 ... 11 colunas).`),wg(),jc(2237,`blockquote`)(2238,`p`),iO(2239,`Esta propriedade não funciona com a propriedade `),jc(2240,`code`),iO(2241,`gridColumns`),wg(),iO(2242,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(2243,`tr`,13)(2244,`td`,14)(2245,`div`,15)(2246,`span`,16),iO(2247,` gridXlColumns`),nu(2248,`br`),wg()()(),jc(2249,`td`,17)(2250,`code`,41),iO(2251,`number`),wg()(),jc(2252,`td`,20)(2253,`em`)(2254,`strong`),iO(2255,`(opcional)`),wg()(),jc(2256,`p`),iO(2257,`Tamanho de exibição do campo em telas extra grandes (xl).`),wg(),jc(2258,`p`),iO(2259,`Deve ser usado o sistema de `),jc(2260,`strong`),iO(2261,`grid`),wg(),iO(2262,` do PO (1 ... 12 colunas).`),wg(),jc(2263,`blockquote`)(2264,`p`),iO(2265,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(2266,`code`),iO(2267,`gridColumns`),wg(),iO(2268,`.`),wg()()()(),jc(2269,`tr`,13)(2270,`td`,14)(2271,`div`,15)(2272,`span`,16),iO(2273,` gridXlPull`),nu(2274,`br`),wg()()(),jc(2275,`td`,17)(2276,`code`,41),iO(2277,`number`),wg()(),jc(2278,`td`,20)(2279,`em`)(2280,`strong`),iO(2281,`(opcional)`),wg()(),jc(2282,`p`),iO(2283,`Tamanho do espaçamento após o campo antes da exibição do próximo campo em telas extra grandes (xl).`),wg(),jc(2284,`p`),iO(2285,`Deve ser usado o sistema de `),jc(2286,`strong`),iO(2287,`grid`),wg(),iO(2288,` do PO (1 ... 11 colunas).`),wg(),jc(2289,`blockquote`)(2290,`p`),iO(2291,`Esta propriedade não funciona com a propriedade `),jc(2292,`code`),iO(2293,`gridColumns`),wg(),iO(2294,`. Deve-se especificar o tamanho da tela.`),wg()()()(),jc(2295,`tr`,13)(2296,`td`,14)(2297,`div`,15)(2298,`span`,16),iO(2299,` headers`),nu(2300,`br`),wg()()(),jc(2301,`td`,17)(2302,`code`,51),iO(2303,`{ [name: string]: string `),wg(),jc(2304,`code`,52),iO(2305,` Array<string>;
}`),wg()(),jc(2306,`td`,20)(2307,`em`)(2308,`strong`),iO(2309,`(opcional)`),wg()(),jc(2310,`p`),iO(2311,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),wg(),jc(2312,`p`)(2313,`strong`),iO(2314,`Componente compatível`),wg(),iO(2315,`: `),jc(2316,`code`),iO(2317,`po-upload`),wg()()()(),jc(2318,`tr`,13)(2319,`td`,14)(2320,`div`,15)(2321,`span`,16),iO(2322,` help`),nu(2323,`br`),wg()()(),jc(2324,`td`,17)(2325,`code`,18),iO(2326,`string`),wg()(),jc(2327,`td`,20)(2328,`em`)(2329,`strong`),iO(2330,`(opcional)`),wg()(),jc(2331,`p`),iO(2332,`Texto de ajuda.`),wg()()(),jc(2333,`tr`,13)(2334,`td`,14)(2335,`div`,15)(2336,`span`,16),iO(2337,` helper`),nu(2338,`br`),wg()()(),jc(2339,`td`,17)(2340,`code`,18),iO(2341,`string `),wg(),jc(2342,`code`,53),iO(2343,` PoHelperOptions`),wg()(),jc(2344,`td`,20)(2345,`em`)(2346,`strong`),iO(2347,`(opcional)`),wg()(),jc(2348,`p`),iO(2349,`Texto simples que será apresentado como auxílio ao campo ou objeto com as definições do po-helper.`),wg()()(),jc(2350,`tr`,13)(2351,`td`,14)(2352,`div`,15)(2353,`span`,16),iO(2354,` hideLabelStatus`),nu(2355,`br`),wg()()(),jc(2356,`td`,17)(2357,`code`,28),iO(2358,`boolean`),wg()(),jc(2359,`td`,20)(2360,`em`)(2361,`strong`),iO(2362,`(opcional)`),wg()(),jc(2363,`p`),iO(2364,`Indica se o status do `),jc(2365,`code`),iO(2366,`model`),wg(),iO(2367,` será escondido visualmente ao lado do switch`),wg()()(),jc(2368,`tr`,13)(2369,`td`,14)(2370,`div`,15)(2371,`span`,16),iO(2372,` hidePasswordPeek`),nu(2373,`br`),wg()()(),jc(2374,`td`,17)(2375,`code`,28),iO(2376,`boolean`),wg()(),jc(2377,`td`,20)(2378,`em`)(2379,`strong`),iO(2380,`(opcional)`),wg()(),jc(2381,`p`),iO(2382,`Permite esconder a função de espiar a senha digitada no `),jc(2383,`code`),iO(2384,`po-password`),wg(),iO(2385,`.`),wg()()(),jc(2386,`tr`,13)(2387,`td`,14)(2388,`div`,15)(2389,`span`,16),iO(2390,` hideRestrictionsInfo`),nu(2391,`br`),wg()()(),jc(2392,`td`,17)(2393,`code`,28),iO(2394,`boolean`),wg()(),jc(2395,`td`,20)(2396,`em`)(2397,`strong`),iO(2398,`(opcional)`),wg()(),jc(2399,`p`),iO(2400,`Oculta visualmente as informações de restrições para o upload.`),wg(),jc(2401,`p`)(2402,`strong`),iO(2403,`Componente compatível`),wg(),iO(2404,`: `),jc(2405,`code`),iO(2406,`po-upload`),wg()()()(),jc(2407,`tr`,13)(2408,`td`,14)(2409,`div`,15)(2410,`span`,16),iO(2411,` hideSearch`),nu(2412,`br`),wg()()(),jc(2413,`td`,17)(2414,`code`,28),iO(2415,`boolean`),wg()(),jc(2416,`td`,20)(2417,`em`)(2418,`strong`),iO(2419,`(opcional)`),wg()(),jc(2420,`p`),iO(2421,`Esconde o campo de pesquisa existente dentro do dropdown do `),jc(2422,`code`),iO(2423,`po-multiselect`),wg(),iO(2424,`.`),wg()()(),jc(2425,`tr`,13)(2426,`td`,14)(2427,`div`,15)(2428,`span`,16),iO(2429,` hideSelectAll`),nu(2430,`br`),wg()()(),jc(2431,`td`,17)(2432,`code`,28),iO(2433,`boolean`),wg()(),jc(2434,`td`,20)(2435,`em`)(2436,`strong`),iO(2437,`(opcional)`),wg()(),jc(2438,`p`),iO(2439,`Indica se o campo "Selecionar todos" do `),jc(2440,`code`),iO(2441,`po-multiselect`),wg(),iO(2442,` será escondido.`),wg()()(),jc(2443,`tr`,13)(2444,`td`,14)(2445,`div`,15)(2446,`span`,16),iO(2447,` hideSelectButton`),nu(2448,`br`),wg()()(),jc(2449,`td`,17)(2450,`code`,28),iO(2451,`boolean`),wg()(),jc(2452,`td`,20)(2453,`em`)(2454,`strong`),iO(2455,`(opcional)`),wg()(),jc(2456,`p`),iO(2457,`Omite o botão de seleção de arquivos.`),wg(),jc(2458,`blockquote`)(2459,`p`),iO(2460,`Caso o valor definido seja `),jc(2461,`code`),iO(2462,`true`),wg(),iO(2463,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),jc(2464,`code`),iO(2465,`selectFiles()`),wg(),iO(2466,` para seleção de arquivos.`),wg()(),jc(2467,`p`)(2468,`strong`),iO(2469,`Componente compatível`),wg(),iO(2470,`: `),jc(2471,`code`),iO(2472,`po-upload`),wg()()()(),jc(2473,`tr`,13)(2474,`td`,14)(2475,`div`,15)(2476,`span`,16),iO(2477,` hideSendButton`),nu(2478,`br`),wg()()(),jc(2479,`td`,17)(2480,`code`,28),iO(2481,`boolean`),wg()(),jc(2482,`td`,20)(2483,`em`)(2484,`strong`),iO(2485,`(opcional)`),wg()(),jc(2486,`p`),iO(2487,`Omite o botão de envio de arquivos.`),wg(),jc(2488,`blockquote`)(2489,`p`),iO(2490,`Caso o valor definido seja `),jc(2491,`code`),iO(2492,`true`),wg(),iO(2493,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),jc(2494,`code`),iO(2495,`sendFiles()`),wg(),iO(2496,` para envio do(s) arquivo(s) selecionado(s).`),wg()(),jc(2497,`p`)(2498,`strong`),iO(2499,`Componente compatível`),wg(),iO(2500,`: `),jc(2501,`code`),iO(2502,`po-upload`),wg()()()(),jc(2503,`tr`,13)(2504,`td`,14)(2505,`div`,15)(2506,`span`,16),iO(2507,` icon`),nu(2508,`br`),wg()()(),jc(2509,`td`,17)(2510,`code`,18),iO(2511,`string `),wg(),jc(2512,`code`,54),iO(2513,` TemplateRef<void>`),wg()(),jc(2514,`td`,20)(2515,`em`)(2516,`strong`),iO(2517,`(opcional)`),wg()(),jc(2518,`p`),iO(2519,`Define o ícone que será exibido no início do campo.`),wg(),jc(2520,`blockquote`)(2521,`p`),iO(2522,`Esta propriedade só pode ser utilizado nos campos:`),wg()(),jc(2523,`ul`)(2524,`li`),iO(2525,`Input;`),wg(),jc(2526,`li`),iO(2527,`Number;`),wg(),jc(2528,`li`),iO(2529,`Decimal;`),wg(),jc(2530,`li`),iO(2531,`Combo;`),wg(),jc(2532,`li`),iO(2533,`Password;`),wg()(),jc(2534,`blockquote`)(2535,`p`),iO(2536,`Veja a disponibilidade de ícones em `),jc(2537,`a`,55),iO(2538,`biblioteca de ícones`),wg(),iO(2539,`.`),wg()()()(),jc(2540,`tr`,13)(2541,`td`,14)(2542,`div`,15)(2543,`span`,16),iO(2544,` infiniteScroll`),nu(2545,`br`),wg()()(),jc(2546,`td`,17)(2547,`code`,28),iO(2548,`boolean`),wg()(),jc(2549,`td`,20)(2550,`em`)(2551,`strong`),iO(2552,`(opcional)`),wg()(),jc(2553,`p`),iO(2554,`Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executará nova busca dos dados conforme paginação.`),wg(),jc(2555,`p`)(2556,`strong`),iO(2557,`Componentes compatíveis:`),wg(),jc(2558,`code`),iO(2559,`po-combo`),wg(),iO(2560,`, `),jc(2561,`code`),iO(2562,`po-lookup`),wg(),iO(2563,`.`),wg()()(),jc(2564,`tr`,13)(2565,`td`,14)(2566,`div`,15)(2567,`span`,16),iO(2568,` infiniteScrollDistance`),nu(2569,`br`),wg()()(),jc(2570,`td`,17)(2571,`code`,41),iO(2572,`number`),wg()(),jc(2573,`td`,20)(2574,`em`)(2575,`strong`),iO(2576,`(opcional)`),wg()(),jc(2577,`p`),iO(2578,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),jc(2579,`strong`),iO(2580,`Exemplos`),wg(),jc(2581,`code`),iO(2582,`{ infiniteScrollDistance: 80 }`),wg(),iO(2583,`: Quando atingir 80% do scroll do combo, o show-more será disparado.`),wg(),jc(2584,`p`)(2585,`strong`),iO(2586,`Componente compatível:`),wg(),jc(2587,`code`),iO(2588,`po-combo`),wg(),iO(2589,`.`),wg()()(),jc(2590,`tr`,13)(2591,`td`,14)(2592,`div`,15)(2593,`span`,16),iO(2594,` invalidValue`),nu(2595,`br`),wg()()(),jc(2596,`td`,17)(2597,`code`,28),iO(2598,`boolean`),wg()(),jc(2599,`td`,20)(2600,`em`)(2601,`strong`),iO(2602,`(opcional)`),wg()(),jc(2603,`p`),iO(2604,`Define qual valor será considerado como inválido para exibir a mensagem da propriedade `),jc(2605,`code`),iO(2606,`p-field-error-message`),wg(),iO(2607,`.`),wg(),jc(2608,`blockquote`)(2609,`p`),iO(2610,`Caso essa propriedade seja definida como `),jc(2611,`code`),iO(2612,`true`),wg(),iO(2613,`, a mensagem de erro será exibida quando o campo estiver ligado(on/true).`),wg()(),jc(2614,`p`)(2615,`strong`),iO(2616,`Componente compatível`),wg(),iO(2617,`: `),jc(2618,`code`),iO(2619,`po-switch`),wg()()()(),jc(2620,`tr`,13)(2621,`td`,14)(2622,`div`,15)(2623,`span`,16),iO(2624,` isoFormat`),nu(2625,`br`),wg()()(),jc(2626,`td`,17)(2627,`code`,56),iO(2628,`PoDatepickerIsoFormat`),wg()(),jc(2629,`td`,20)(2630,`em`)(2631,`strong`),iO(2632,`(opcional)`),wg()(),jc(2633,`p`),iO(2634,`Padrão de formatação para saída do model, independentemente do formato de entrada.`),wg(),jc(2635,`blockquote`)(2636,`p`),iO(2637,`Veja os valores válidos no `),jc(2638,`code`),iO(2639,`PoDatepickerIsoFormat`),wg(),iO(2640,`.`),wg()(),jc(2641,`p`)(2642,`strong`),iO(2643,`Componente compatível:`),wg(),jc(2644,`code`),iO(2645,`po-datepicker`),wg()()()(),jc(2646,`tr`,13)(2647,`td`,14)(2648,`div`,15)(2649,`span`,16),iO(2650,` key`),nu(2651,`br`),wg()()(),jc(2652,`td`,17)(2653,`code`,28),iO(2654,`boolean`),wg()(),jc(2655,`td`,20)(2656,`em`)(2657,`strong`),iO(2658,`(opcional)`),wg()(),jc(2659,`p`),iO(2660,`Identificador`),wg()()(),jc(2661,`tr`,13)(2662,`td`,14)(2663,`div`,15)(2664,`span`,16),iO(2665,` keydown`),nu(2666,`br`),wg()()(),jc(2667,`td`,17)(2668,`code`,29),iO(2669,`Function`),wg()(),jc(2670,`td`,20)(2671,`em`)(2672,`strong`),iO(2673,`(opcional)`),wg()(),jc(2674,`p`),iO(2675,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(2676,`code`),iO(2677,`KeyboardEvent`),wg(),iO(2678,` com informações sobre a tecla.`),wg()()(),jc(2679,`tr`,13)(2680,`td`,14)(2681,`div`,15)(2682,`span`,16),iO(2683,` label`),nu(2684,`br`),wg()()(),jc(2685,`td`,17)(2686,`code`,18),iO(2687,`string`),wg()(),jc(2688,`td`,20)(2689,`em`)(2690,`strong`),iO(2691,`(opcional)`),wg()(),jc(2692,`p`),iO(2693,`Rótulo do campo exibido.`),wg(),jc(2694,`p`),iO(2695,`Caso não seja informado, será utilizado como `),jc(2696,`code`),iO(2697,`label`),wg(),iO(2698,` o valor da propriedade `),jc(2699,`code`),iO(2700,`property`),wg(),iO(2701,` com a primeira letra em maiúsculo.`),wg()()(),jc(2702,`tr`,13)(2703,`td`,14)(2704,`div`,15)(2705,`span`,16),iO(2706,` labelPosition`),nu(2707,`br`),wg()()(),jc(2708,`td`,17)(2709,`code`,57),iO(2710,`PoSwitchLabelPosition`),wg()(),jc(2711,`td`,20)(2712,`em`)(2713,`strong`),iO(2714,`(opcional)`),wg()(),jc(2715,`p`),iO(2716,`Posição de exibição do rótulo do PoSwitch.`),wg(),jc(2717,`blockquote`)(2718,`p`),iO(2719,`Por padrão exibe à direita.`),wg()()()(),jc(2720,`tr`,13)(2721,`td`,14)(2722,`div`,15)(2723,`span`,16),iO(2724,` listboxControlPosition`),nu(2725,`br`),wg()()(),jc(2726,`td`,17)(2727,`code`,58),iO(2728,`'top' `),wg(),jc(2729,`code`,59),iO(2730,` 'bottom'`),wg()(),jc(2731,`td`,20)(2732,`em`)(2733,`strong`),iO(2734,`(opcional)`),wg()(),jc(2735,`p`),iO(2736,`Define a direção preferida para exibição do `),jc(2737,`code`),iO(2738,`listbox`),wg(),iO(2739,` em relação ao campo (`),jc(2740,`code`),iO(2741,`top`),wg(),iO(2742,` ou `),jc(2743,`code`),iO(2744,`bottom`),wg(),iO(2745,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),wg(),jc(2746,`p`)(2747,`strong`),iO(2748,`Componentes compatíveis:`),wg(),jc(2749,`code`),iO(2750,`po-multiselect`),wg(),iO(2751,`, `),jc(2752,`code`),iO(2753,`po-combo`),wg(),iO(2754,`.`),wg()()(),jc(2755,`tr`,13)(2756,`td`,14)(2757,`div`,15)(2758,`span`,16),iO(2759,` literals`),nu(2760,`br`),wg()()(),jc(2761,`td`,17)(2762,`code`,60),iO(2763,`PoLookupLiterals `),wg(),jc(2764,`code`,61),iO(2765,` PoMultiselectLiterals `),wg(),jc(2766,`code`,62),iO(2767,` PoComboLiterals `),wg(),jc(2768,`code`,63),iO(2769,` PoDatepickerRangeLiterals `),wg(),jc(2770,`code`,64),iO(2771,` PoUploadLiterals`),wg()(),jc(2772,`td`,20)(2773,`em`)(2774,`strong`),iO(2775,`(opcional)`),wg()(),jc(2776,`p`),iO(2777,`Objeto com as literais usadas para os seguintes componentes: `),jc(2778,`code`),iO(2779,`po-lookup`),wg(),iO(2780,`, `),jc(2781,`code`),iO(2782,`po-multiselect`),wg(),iO(2783,`, `),jc(2784,`code`),iO(2785,`po-combo`),wg(),iO(2786,` e `),jc(2787,`code`),iO(2788,`po-datepicker-range`),wg(),iO(2789,`.`),wg(),jc(2790,`blockquote`)(2791,`p`),iO(2792,`O objeto padrão de literais será traduzido de acordo com o idioma do PoI18nService ou do browser.`),wg()(),jc(2793,`p`)(2794,`strong`),iO(2795,`Componentes compatíveis:`),wg(),jc(2796,`code`),iO(2797,`po-lookup`),wg(),iO(2798,`, `),jc(2799,`code`),iO(2800,`po-multiselect`),wg(),iO(2801,`, `),jc(2802,`code`),iO(2803,`po-combo`),wg(),iO(2804,`, `),jc(2805,`code`),iO(2806,`po-datepicker-range`),wg()()()(),jc(2807,`tr`,13)(2808,`td`,14)(2809,`div`,15)(2810,`span`,16),iO(2811,` loading`),nu(2812,`br`),wg()()(),jc(2813,`td`,17)(2814,`code`,28),iO(2815,`boolean`),wg()(),jc(2816,`td`,20)(2817,`em`)(2818,`strong`),iO(2819,`(opcional)`),wg()(),jc(2820,`p`),iO(2821,`Habilita um estado de carregamento no componente, desabilitando-o e exibindo um ícone de carregamento.`),wg(),jc(2822,`blockquote`)(2823,`p`),iO(2824,`Por padrão é `),jc(2825,`code`),iO(2826,`false`),wg(),iO(2827,`.`),wg()(),jc(2828,`p`)(2829,`strong`),iO(2830,`Componentes compatíveis:`),wg(),jc(2831,`code`),iO(2832,`po-datepicker`),wg(),iO(2833,`, `),jc(2834,`code`),iO(2835,`po-datepicker-range`),wg(),iO(2836,`, `),jc(2837,`code`),iO(2838,`po-number`),wg(),iO(2839,`, `),jc(2840,`code`),iO(2841,`po-decimal`),wg(),iO(2842,`,
`),jc(2843,`code`),iO(2844,`po-input`),wg(),iO(2845,`, `),jc(2846,`code`),iO(2847,`po-select`),wg(),iO(2848,`, `),jc(2849,`code`),iO(2850,`po-switch`),wg(),iO(2851,`, `),jc(2852,`code`),iO(2853,`po-combo`),wg(),iO(2854,`, `),jc(2855,`code`),iO(2856,`po-lookup`),wg(),iO(2857,`, `),jc(2858,`code`),iO(2859,`po-multiselect`),wg(),iO(2860,`,
`),jc(2861,`code`),iO(2862,`po-textarea`),wg(),iO(2863,`, `),jc(2864,`code`),iO(2865,`po-password`),wg(),iO(2866,`, `),jc(2867,`code`),iO(2868,`po-upload`),wg(),iO(2869,`.`),wg()()(),jc(2870,`tr`,13)(2871,`td`,14)(2872,`div`,15)(2873,`span`,16),iO(2874,` locale`),nu(2875,`br`),wg()()(),jc(2876,`td`,17)(2877,`code`,18),iO(2878,`string`),wg()(),jc(2879,`td`,20)(2880,`em`)(2881,`strong`),iO(2882,`(opcional)`),wg()(),jc(2883,`p`),iO(2884,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),jc(2885,`a`,65)(2886,`code`),iO(2887,`I18n`),wg()()(),jc(2888,`p`),iO(2889,`Exemplo de utilização:`),wg(),jc(2890,`pre`)(2891,`code`),iO(2892,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),wg()(),jc(2893,`blockquote`)(2894,`p`),iO(2895,`Para ver quais linguagens suportadas acesse `),jc(2896,`a`,65)(2897,`code`),iO(2898,`I18n`),wg()()()(),jc(2899,`p`)(2900,`strong`),iO(2901,`Componentes compatíveis:`),wg(),jc(2902,`code`),iO(2903,`po-datepicker`),wg(),iO(2904,`, `),jc(2905,`code`),iO(2906,`po-decimal`),wg(),iO(2907,`, `),jc(2908,`code`),iO(2909,`po-timepicker`),wg(),iO(2910,`.`),wg()()(),jc(2911,`tr`,13)(2912,`td`,14)(2913,`div`,15)(2914,`span`,16),iO(2915,` mask`),nu(2916,`br`),wg()()(),jc(2917,`td`,17)(2918,`code`,18),iO(2919,`string`),wg()(),jc(2920,`td`,20)(2921,`em`)(2922,`strong`),iO(2923,`(opcional)`),wg()(),jc(2924,`p`),iO(2925,`Máscara para o campo.`),wg(),jc(2926,`p`)(2927,`strong`),iO(2928,`Componente compatível:`),wg(),jc(2929,`code`),iO(2930,`po-input`),wg(),iO(2931,`.`),wg(),jc(2932,`blockquote`)(2933,`p`),iO(2934,`também é atribuído ao utilizar a propriedade `),jc(2935,`code`),iO(2936,`type: time`),wg(),iO(2937,`.`),wg()(),jc(2938,`blockquote`)(2939,`p`),iO(2940,`Incompatível com `),jc(2941,`code`),iO(2942,`po-decimal`),wg(),iO(2943,`.`),wg()()()(),jc(2944,`tr`,13)(2945,`td`,14)(2946,`div`,15)(2947,`span`,16),iO(2948,` maskFormatModel`),nu(2949,`br`),wg()()(),jc(2950,`td`,17)(2951,`code`,28),iO(2952,`boolean`),wg()(),jc(2953,`td`,20)(2954,`em`)(2955,`strong`),iO(2956,`(opcional)`),wg()(),jc(2957,`p`),iO(2958,`Define que o valor do componente será conforme especificado na mascára. O valor padrão é `),jc(2959,`code`),iO(2960,`false`),wg(),iO(2961,`.`),wg(),jc(2962,`p`)(2963,`strong`),iO(2964,`Componente compatível:`),wg(),jc(2965,`code`),iO(2966,`po-input`),wg(),iO(2967,`.`),wg(),jc(2968,`blockquote`)(2969,`p`),iO(2970,`também é atribuído ao utilizar a propriedade `),jc(2971,`code`),iO(2972,`type: time`),wg(),iO(2973,`.`),wg()()()(),jc(2974,`tr`,13)(2975,`td`,14)(2976,`div`,15)(2977,`span`,16),iO(2978,` maskNoLengthValidation`),nu(2979,`br`),wg()()(),jc(2980,`td`,17)(2981,`code`,28),iO(2982,`boolean`),wg()(),jc(2983,`td`,20)(2984,`em`)(2985,`strong`),iO(2986,`(opcional)`),wg()(),jc(2987,`p`),iO(2988,`Controla como o componente aplica as validações de comprimento mínimo (`),jc(2989,`code`),iO(2990,`minLength`),wg(),iO(2991,`) e máximo (`),jc(2992,`code`),iO(2993,`maxLength`),wg(),iO(2994,`) quando há uma máscara (`),jc(2995,`code`),iO(2996,`p-mask`),wg(),iO(2997,`) definida.`),wg(),jc(2998,`ul`)(2999,`li`),iO(3e3,`Quando `),jc(3001,`code`),iO(3002,`true`),wg(),iO(3003,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),wg(),jc(3004,`li`),iO(3005,`Quando `),jc(3006,`code`),iO(3007,`false`),wg(),iO(3008,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),wg()(),jc(3009,`p`)(3010,`strong`),iO(3011,`Componentes compatíveis:`),wg(),jc(3012,`code`),iO(3013,`po-input`),wg(),iO(3014,`, `),jc(3015,`code`),iO(3016,`po-decimal`),wg(),iO(3017,`.`),wg(),jc(3018,`blockquote`)(3019,`p`),iO(3020,`Esta propriedade é ignorada quando utilizada em conjunto com `),jc(3021,`code`),iO(3022,`p-mask-format-model`),wg(),iO(3023,`.`),wg()(),jc(3024,`p`),iO(3025,`Exemplo:`),wg(),jc(3026,`pre`)(3027,`code`),iO(3028,`fields:Array<PoDynamicFormField> = [
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
`),wg()(),jc(3029,`ul`)(3030,`li`),iO(3031,`Entrada: `),jc(3032,`code`),iO(3033,`11.111.111/1111-11`),wg(),iO(3034,` → Validação será aplicada somente aos números, ignorando os caracteres especiais.`),wg()()()(),jc(3035,`tr`,13)(3036,`td`,14)(3037,`div`,15)(3038,`span`,16),iO(3039,` maxLength`),nu(3040,`br`),wg()()(),jc(3041,`td`,17)(3042,`code`,41),iO(3043,`number`),wg()(),jc(3044,`td`,20)(3045,`em`)(3046,`strong`),iO(3047,`(opcional)`),wg()(),jc(3048,`p`),iO(3049,`Tamanho máximo de caracteres.`),wg(),jc(3050,`p`)(3051,`strong`),iO(3052,`Componentes compatíveis:`),wg(),jc(3053,`code`),iO(3054,`po-input`),wg(),iO(3055,`, `),jc(3056,`code`),iO(3057,`po-number`),wg(),iO(3058,`, `),jc(3059,`code`),iO(3060,`po-decimal`),wg(),iO(3061,`, `),jc(3062,`code`),iO(3063,`po-textarea`),wg(),iO(3064,`, `),jc(3065,`code`),iO(3066,`po-password`),wg(),iO(3067,`.`),wg()()(),jc(3068,`tr`,13)(3069,`td`,14)(3070,`div`,15)(3071,`span`,16),iO(3072,` maxTime`),nu(3073,`br`),wg()()(),jc(3074,`td`,17)(3075,`code`,18),iO(3076,`string`),wg()(),jc(3077,`td`,20)(3078,`em`)(3079,`strong`),iO(3080,`(opcional)`),wg()(),jc(3081,`p`),iO(3082,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),jc(3083,`code`),iO(3084,`HH:mm`),wg(),iO(3085,` ou `),jc(3086,`code`),iO(3087,`HH:mm:ss`),wg(),iO(3088,`.`),wg(),jc(3089,`p`)(3090,`strong`),iO(3091,`Componente compatível:`),wg(),jc(3092,`code`),iO(3093,`po-datetimepicker`),wg(),iO(3094,`, `),jc(3095,`code`),iO(3096,`po-timepicker`),wg()()()(),jc(3097,`tr`,13)(3098,`td`,14)(3099,`div`,15)(3100,`span`,16),iO(3101,` maxValue`),nu(3102,`br`),wg()()(),jc(3103,`td`,17)(3104,`code`,18),iO(3105,`string `),wg(),jc(3106,`code`,41),iO(3107,` number`),wg()(),jc(3108,`td`,20)(3109,`em`)(3110,`strong`),iO(3111,`(opcional)`),wg()(),jc(3112,`p`),iO(3113,`Valor máximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),jc(3114,`em`),iO(3115,`number`),wg(),iO(3116,`, `),jc(3117,`em`),iO(3118,`date`),wg(),iO(3119,`, `),jc(3120,`em`),iO(3121,`dateTime`),wg(),iO(3122,` ou `),jc(3123,`em`),iO(3124,`time`),wg(),iO(3125,`.`),wg(),jc(3126,`blockquote`)(3127,`p`),iO(3128,`Para `),jc(3129,`code`),iO(3130,`po-timepicker`),wg(),iO(3131,`, o valor deve estar no formato `),jc(3132,`code`),iO(3133,`HH:mm`),wg(),iO(3134,` ou `),jc(3135,`code`),iO(3136,`HH:mm:ss`),wg(),iO(3137,`.`),wg()(),jc(3138,`p`)(3139,`strong`),iO(3140,`Componentes compatíveis:`),wg(),jc(3141,`code`),iO(3142,`po-datepicker`),wg(),iO(3143,`, `),jc(3144,`code`),iO(3145,`po-datepicker-range`),wg(),iO(3146,`, `),jc(3147,`code`),iO(3148,`po-number`),wg(),iO(3149,`, `),jc(3150,`code`),iO(3151,`po-decimal`),wg(),iO(3152,`, `),jc(3153,`code`),iO(3154,`po-timepicker`),wg()()()(),jc(3155,`tr`,13)(3156,`td`,14)(3157,`div`,15)(3158,`span`,16),iO(3159,` minLength`),nu(3160,`br`),wg()()(),jc(3161,`td`,17)(3162,`code`,41),iO(3163,`number`),wg()(),jc(3164,`td`,20)(3165,`em`)(3166,`strong`),iO(3167,`(opcional)`),wg()(),jc(3168,`p`),iO(3169,`Tamanho mínimo de caracteres.`),wg(),jc(3170,`p`)(3171,`strong`),iO(3172,`Componentes compatíveis:`),wg(),jc(3173,`code`),iO(3174,`po-input`),wg(),iO(3175,`, `),jc(3176,`code`),iO(3177,`po-number`),wg(),iO(3178,`, `),jc(3179,`code`),iO(3180,`po-decimal`),wg(),iO(3181,`, `),jc(3182,`code`),iO(3183,`po-textarea`),wg(),iO(3184,`, `),jc(3185,`code`),iO(3186,`po-password`),wg(),iO(3187,`.`),wg()()(),jc(3188,`tr`,13)(3189,`td`,14)(3190,`div`,15)(3191,`span`,16),iO(3192,` minTime`),nu(3193,`br`),wg()()(),jc(3194,`td`,17)(3195,`code`,18),iO(3196,`string`),wg()(),jc(3197,`td`,20)(3198,`em`)(3199,`strong`),iO(3200,`(opcional)`),wg()(),jc(3201,`p`),iO(3202,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),jc(3203,`code`),iO(3204,`HH:mm`),wg(),iO(3205,` ou `),jc(3206,`code`),iO(3207,`HH:mm:ss`),wg(),iO(3208,`.`),wg(),jc(3209,`p`)(3210,`strong`),iO(3211,`Componente compatível:`),wg(),jc(3212,`code`),iO(3213,`po-datetimepicker`),wg(),iO(3214,`, `),jc(3215,`code`),iO(3216,`po-timepicker`),wg()()()(),jc(3217,`tr`,13)(3218,`td`,14)(3219,`div`,15)(3220,`span`,16),iO(3221,` minValue`),nu(3222,`br`),wg()()(),jc(3223,`td`,17)(3224,`code`,18),iO(3225,`string `),wg(),jc(3226,`code`,41),iO(3227,` number`),wg()(),jc(3228,`td`,20)(3229,`em`)(3230,`strong`),iO(3231,`(opcional)`),wg()(),jc(3232,`p`),iO(3233,`Valor mínimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por `),jc(3234,`em`),iO(3235,`number`),wg(),iO(3236,`, `),jc(3237,`em`),iO(3238,`date`),wg(),iO(3239,`, `),jc(3240,`em`),iO(3241,`dateTime`),wg(),iO(3242,` ou `),jc(3243,`em`),iO(3244,`time`),wg(),iO(3245,`.`),wg(),jc(3246,`blockquote`)(3247,`p`),iO(3248,`Para `),jc(3249,`code`),iO(3250,`po-timepicker`),wg(),iO(3251,`, o valor deve estar no formato `),jc(3252,`code`),iO(3253,`HH:mm`),wg(),iO(3254,` ou `),jc(3255,`code`),iO(3256,`HH:mm:ss`),wg(),iO(3257,`.`),wg()(),jc(3258,`p`)(3259,`strong`),iO(3260,`Componentes compatíveis:`),wg(),jc(3261,`code`),iO(3262,`po-datepicker`),wg(),iO(3263,`, `),jc(3264,`code`),iO(3265,`po-datepicker-range`),wg(),iO(3266,`, `),jc(3267,`code`),iO(3268,`po-number`),wg(),iO(3269,`, `),jc(3270,`code`),iO(3271,`po-decimal`),wg(),iO(3272,`, `),jc(3273,`code`),iO(3274,`po-timepicker`),wg()()()(),jc(3275,`tr`,13)(3276,`td`,14)(3277,`div`,15)(3278,`span`,16),iO(3279,` minuteInterval`),nu(3280,`br`),wg()()(),jc(3281,`td`,17)(3282,`code`,41),iO(3283,`number`),wg()(),jc(3284,`td`,20)(3285,`em`)(3286,`strong`),iO(3287,`(opcional)`),wg()(),jc(3288,`p`),iO(3289,`Define o intervalo entre os minutos exibidos no painel do timepicker.`),wg()()(),jc(3290,`tr`,13)(3291,`td`,14)(3292,`div`,15)(3293,`span`,16),iO(3294,` mode`),nu(3295,`br`),wg()()(),jc(3296,`td`,17)(3297,`code`,66),iO(3298,`'month-year' `),wg(),jc(3299,`code`,67),iO(3300,` 'year'`),wg()(),jc(3301,`td`,20)(3302,`em`)(3303,`strong`),iO(3304,`(opcional)`),wg()(),jc(3305,`p`),iO(3306,`Define o modo de seleção do `),jc(3307,`code`),iO(3308,`po-datepicker`),wg(),iO(3309,`.`),wg(),jc(3310,`p`),iO(3311,`Valores aceitos:`),wg(),jc(3312,`ul`)(3313,`li`)(3314,`code`),iO(3315,`'month-year'`),wg(),iO(3316,`: exibe seleção de mês e ano (formato `),jc(3317,`code`),iO(3318,`MM/YYYY`),wg(),iO(3319,`)`),wg(),jc(3320,`li`)(3321,`code`),iO(3322,`'year'`),wg(),iO(3323,`: exibe seleção apenas de ano (formato `),jc(3324,`code`),iO(3325,`YYYY`),wg(),iO(3326,`)`),wg()(),jc(3327,`p`)(3328,`strong`),iO(3329,`Componente compatível:`),wg(),jc(3330,`code`),iO(3331,`po-datepicker`),wg()()()(),jc(3332,`tr`,13)(3333,`td`,14)(3334,`div`,15)(3335,`span`,16),iO(3336,` modelFormat`),nu(3337,`br`),wg()()(),jc(3338,`td`,17)(3339,`code`,68),iO(3340,`PoTimepickerModelFormat`),wg()(),jc(3341,`td`,20)(3342,`em`)(3343,`strong`),iO(3344,`(opcional)`),wg()(),jc(3345,`p`),iO(3346,`Define o formato do valor do horário a ser utilizado no model do `),jc(3347,`code`),iO(3348,`po-timepicker`),wg(),iO(3349,`.`),wg(),jc(3350,`blockquote`)(3351,`p`),iO(3352,`Veja os valores válidos no `),jc(3353,`code`),iO(3354,`PoTimepickerModelFormat`),wg(),iO(3355,`.`),wg()(),jc(3356,`p`)(3357,`strong`),iO(3358,`Componente compatível:`),wg(),jc(3359,`code`),iO(3360,`po-timepicker`),wg()()()(),jc(3361,`tr`,13)(3362,`td`,14)(3363,`div`,15)(3364,`span`,16),iO(3365,` multiple`),nu(3366,`br`),wg()()(),jc(3367,`td`,17)(3368,`code`,28),iO(3369,`boolean`),wg()(),jc(3370,`td`,20)(3371,`em`)(3372,`strong`),iO(3373,`(opcional)`),wg()(),jc(3374,`p`),iO(3375,`Permite a seleção de múltiplos itens.`),wg(),jc(3376,`p`)(3377,`strong`),iO(3378,`Componentes compatíveis:`),wg(),jc(3379,`code`),iO(3380,`po-lookup`),wg(),iO(3381,`, `),jc(3382,`code`),iO(3383,`po-upload`),wg()()()(),jc(3384,`tr`,13)(3385,`td`,14)(3386,`div`,15)(3387,`span`,16),iO(3388,` noAutocomplete`),nu(3389,`br`),wg()()(),jc(3390,`td`,17)(3391,`code`,28),iO(3392,`boolean`),wg()(),jc(3393,`td`,20)(3394,`em`)(3395,`strong`),iO(3396,`(opcional)`),wg()(),jc(3397,`p`),iO(3398,`Define a propriedade nativa `),jc(3399,`code`),iO(3400,`autocomplete`),wg(),iO(3401,` do campo como off.`),wg(),jc(3402,`p`)(3403,`strong`),iO(3404,`Componentes compatíveis:`),wg(),jc(3405,`code`),iO(3406,`po-datepicker`),wg(),iO(3407,`, `),jc(3408,`code`),iO(3409,`po-datepicker-range`),wg(),iO(3410,`, `),jc(3411,`code`),iO(3412,`po-input`),wg(),iO(3413,`, `),jc(3414,`code`),iO(3415,`po-number`),wg(),iO(3416,`, `),jc(3417,`code`),iO(3418,`po-decimal`),wg(),iO(3419,`,
`),jc(3420,`code`),iO(3421,`po-lookup`),wg(),iO(3422,`, `),jc(3423,`code`),iO(3424,`po-password`),wg(),iO(3425,`, `),jc(3426,`code`),iO(3427,`po-timepicker`),wg(),iO(3428,`.`),wg()()(),jc(3429,`tr`,13)(3430,`td`,14)(3431,`div`,15)(3432,`span`,16),iO(3433,` offsetColumns`),nu(3434,`br`),wg()()(),jc(3435,`td`,17)(3436,`code`,41),iO(3437,`number`),wg()(),jc(3438,`td`,20)(3439,`em`)(3440,`strong`),iO(3441,`(opcional)`),wg()(),jc(3442,`p`),iO(3443,`Tamanho do espaço de exibição do campo em telas.`),wg(),jc(3444,`p`),iO(3445,`Deve ser usado o sistema de `),jc(3446,`strong`),iO(3447,`grid`),wg(),iO(3448,` do PO (1 ... 12 colunas).`),wg(),jc(3449,`blockquote`)(3450,`p`),iO(3451,`Esta propriedade é genérica, aplica o valor em todos os tamanhos de telas.`),wg()()()(),jc(3452,`tr`,13)(3453,`td`,14)(3454,`div`,15)(3455,`span`,16),iO(3456,` offsetLgColumns`),nu(3457,`br`),wg()()(),jc(3458,`td`,17)(3459,`code`,41),iO(3460,`number`),wg()(),jc(3461,`td`,20)(3462,`em`)(3463,`strong`),iO(3464,`(opcional)`),wg()(),jc(3465,`p`),iO(3466,`Tamanho do espaço de exibição do campo em telas grandes (lg).`),wg(),jc(3467,`p`),iO(3468,`Deve ser usado o sistema de `),jc(3469,`strong`),iO(3470,`grid`),wg(),iO(3471,` do PO (1 ... 12 colunas).`),wg(),jc(3472,`blockquote`)(3473,`p`),iO(3474,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3475,`code`),iO(3476,`offsetColumns`),wg(),iO(3477,`.`),wg()()()(),jc(3478,`tr`,13)(3479,`td`,14)(3480,`div`,15)(3481,`span`,16),iO(3482,` offsetMdColumns`),nu(3483,`br`),wg()()(),jc(3484,`td`,17)(3485,`code`,41),iO(3486,`number`),wg()(),jc(3487,`td`,20)(3488,`em`)(3489,`strong`),iO(3490,`(opcional)`),wg()(),jc(3491,`p`),iO(3492,`Tamanho do espaço de exibição do campo em telas médias (md).`),wg(),jc(3493,`p`),iO(3494,`Deve ser usado o sistema de `),jc(3495,`strong`),iO(3496,`grid`),wg(),iO(3497,` do PO (1 ... 12 colunas).`),wg(),jc(3498,`blockquote`)(3499,`p`),iO(3500,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3501,`code`),iO(3502,`offsetColumns`),wg(),iO(3503,`.`),wg()()()(),jc(3504,`tr`,13)(3505,`td`,14)(3506,`div`,15)(3507,`span`,16),iO(3508,` offsetSmColumns`),nu(3509,`br`),wg()()(),jc(3510,`td`,17)(3511,`code`,41),iO(3512,`number`),wg()(),jc(3513,`td`,20)(3514,`em`)(3515,`strong`),iO(3516,`(opcional)`),wg()(),jc(3517,`p`),iO(3518,`Tamanho do espaço de exibição do campo em telas menores (sm).`),wg(),jc(3519,`p`),iO(3520,`Deve ser usado o sistema de `),jc(3521,`strong`),iO(3522,`grid`),wg(),iO(3523,` do PO (1 ... 12 colunas).`),wg(),jc(3524,`blockquote`)(3525,`p`),iO(3526,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3527,`code`),iO(3528,`offsetColumns`),wg(),iO(3529,`.`),wg()()()(),jc(3530,`tr`,13)(3531,`td`,14)(3532,`div`,15)(3533,`span`,16),iO(3534,` offsetXlColumns`),nu(3535,`br`),wg()()(),jc(3536,`td`,17)(3537,`code`,41),iO(3538,`number`),wg()(),jc(3539,`td`,20)(3540,`em`)(3541,`strong`),iO(3542,`(opcional)`),wg()(),jc(3543,`p`),iO(3544,`Tamanho do espaço de exibição do campo em telas extra grandes (xl).`),wg(),jc(3545,`p`),iO(3546,`Deve ser usado o sistema de `),jc(3547,`strong`),iO(3548,`grid`),wg(),iO(3549,` do PO (1 ... 12 colunas).`),wg(),jc(3550,`blockquote`)(3551,`p`),iO(3552,`Esta propriedade sobrescreve o valor definido para o tamanho dela na `),jc(3553,`code`),iO(3554,`offsetColumns`),wg(),iO(3555,`.`),wg()()()(),jc(3556,`tr`,13)(3557,`td`,14)(3558,`div`,15)(3559,`span`,16),iO(3560,` onError`),nu(3561,`br`),wg()()(),jc(3562,`td`,17)(3563,`code`,29),iO(3564,`Function`),wg()(),jc(3565,`td`,20)(3566,`em`)(3567,`strong`),iO(3568,`(opcional)`),wg()(),jc(3569,`p`),iO(3570,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),wg(),jc(3571,`blockquote`)(3572,`p`),iO(3573,`Por parâmetro será passado o objeto do retorno que é do tipo `),jc(3574,`code`),iO(3575,`HttpErrorResponse`),wg(),iO(3576,`.`),wg()(),jc(3577,`p`)(3578,`strong`),iO(3579,`Componente compatível`),wg(),iO(3580,`: `),jc(3581,`code`),iO(3582,`po-upload`),wg()()()(),jc(3583,`tr`,13)(3584,`td`,14)(3585,`div`,15)(3586,`span`,16),iO(3587,` onSuccess`),nu(3588,`br`),wg()()(),jc(3589,`td`,17)(3590,`code`,29),iO(3591,`Function`),wg()(),jc(3592,`td`,20)(3593,`em`)(3594,`strong`),iO(3595,`(opcional)`),wg()(),jc(3596,`p`),iO(3597,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),wg(),jc(3598,`blockquote`)(3599,`p`),iO(3600,`Por parâmetro será passado o objeto do retorno que é do tipo `),jc(3601,`code`),iO(3602,`HttpResponse`),wg(),iO(3603,`.`),wg()(),jc(3604,`p`)(3605,`strong`),iO(3606,`Componente compatível`),wg(),iO(3607,`: `),jc(3608,`code`),iO(3609,`po-upload`),wg()()()(),jc(3610,`tr`,13)(3611,`td`,14)(3612,`div`,15)(3613,`span`,16),iO(3614,` onUpload`),nu(3615,`br`),wg()()(),jc(3616,`td`,17)(3617,`code`,29),iO(3618,`Function`),wg()(),jc(3619,`td`,20)(3620,`em`)(3621,`strong`),iO(3622,`(opcional)`),wg()(),jc(3623,`p`),iO(3624,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),wg(),jc(3625,`pre`)(3626,`code`),iO(3627,`event.data = {id: 'id do usu\xE1rio'};
`),wg()(),jc(3628,`p`)(3629,`strong`),iO(3630,`Componente compatível`),wg(),iO(3631,`: `),jc(3632,`code`),iO(3633,`po-upload`),wg()()()(),jc(3634,`tr`,13)(3635,`td`,14)(3636,`div`,15)(3637,`span`,16),iO(3638,` optional`),nu(3639,`br`),wg()()(),jc(3640,`td`,17)(3641,`code`,28),iO(3642,`boolean`),wg()(),jc(3643,`td`,20)(3644,`em`)(3645,`strong`),iO(3646,`(opcional)`),wg()(),jc(3647,`p`),iO(3648,`Define se a indicação de campo opcional será exibida.`),wg(),jc(3649,`blockquote`)(3650,`p`),iO(3651,`A indicação não será exibida, se:`),wg()(),jc(3652,`ul`)(3653,`li`),iO(3654,`O campo for `),jc(3655,`code`),iO(3656,`required`),wg(),iO(3657,`, ou;`),wg(),jc(3658,`li`),iO(3659,`Não possuir `),jc(3660,`code`),iO(3661,`help`),wg(),iO(3662,` e `),jc(3663,`code`),iO(3664,`label`),wg(),iO(3665,`.`),wg()(),jc(3666,`p`)(3667,`strong`),iO(3668,`Componentes compatíveis:`),wg(),jc(3669,`code`),iO(3670,`po-datepicker`),wg(),iO(3671,`, `),jc(3672,`code`),iO(3673,`po-datepicker-range`),wg(),iO(3674,`, `),jc(3675,`code`),iO(3676,`po-timepicker`),wg(),iO(3677,`, `),jc(3678,`code`),iO(3679,`po-input`),wg(),iO(3680,`, `),jc(3681,`code`),iO(3682,`po-number`),wg(),iO(3683,`,
`),jc(3684,`code`),iO(3685,`po-decimal`),wg(),iO(3686,`, `),jc(3687,`code`),iO(3688,`po-select`),wg(),iO(3689,`, `),jc(3690,`code`),iO(3691,`po-radio-group`),wg(),iO(3692,`, `),jc(3693,`code`),iO(3694,`po-combo`),wg(),iO(3695,`, `),jc(3696,`code`),iO(3697,`po-lookup`),wg(),iO(3698,`, `),jc(3699,`code`),iO(3700,`po-checkbox-group`),wg(),iO(3701,`, `),jc(3702,`code`),iO(3703,`po-multiselect`),wg(),iO(3704,`,
`),jc(3705,`code`),iO(3706,`po-textarea`),wg(),iO(3707,`, `),jc(3708,`code`),iO(3709,`po-password`),wg(),iO(3710,`.`),wg()()(),jc(3711,`tr`,13)(3712,`td`,14)(3713,`div`,15)(3714,`span`,16),iO(3715,` options`),nu(3716,`br`),wg()()(),jc(3717,`td`,17)(3718,`code`,32),iO(3719,`Array<string> `),wg(),jc(3720,`code`,69),iO(3721,` Array<PoSelectOption> `),wg(),jc(3722,`code`,70),iO(3723,` Array<PoMultiselectOption> `),wg(),jc(3724,`code`,71),iO(3725,` Array<PoCheckboxGroupOption> `),wg(),jc(3726,`code`,72),iO(3727,` Array<any>`),wg()(),jc(3728,`td`,20)(3729,`em`)(3730,`strong`),iO(3731,`(opcional)`),wg()(),jc(3732,`p`),iO(3733,`Lista de opções que serão exibidos em um componente, podendo selecionar uma opção.`),wg(),jc(3734,`p`)(3735,`strong`),iO(3736,`Componentes compatíveis:`),wg(),jc(3737,`code`),iO(3738,`po-select`),wg(),iO(3739,`, `),jc(3740,`code`),iO(3741,`po-radio-group`),wg(),iO(3742,`, `),jc(3743,`code`),iO(3744,`po-checkbox-group`),wg(),iO(3745,`, `),jc(3746,`code`),iO(3747,`po-multiselect`),wg(),iO(3748,`.`),wg()()(),jc(3749,`tr`,13)(3750,`td`,14)(3751,`div`,15)(3752,`span`,16),iO(3753,` optionsMulti`),nu(3754,`br`),wg()()(),jc(3755,`td`,17)(3756,`code`,28),iO(3757,`boolean`),wg()(),jc(3758,`td`,20)(3759,`em`)(3760,`strong`),iO(3761,`(opcional)`),wg()(),jc(3762,`p`),iO(3763,`Permite que o usuário faça múltipla seleção dentro da lista de opções.`),wg()()(),jc(3764,`tr`,13)(3765,`td`,14)(3766,`div`,15)(3767,`span`,16),iO(3768,` optionsService`),nu(3769,`br`),wg()()(),jc(3770,`td`,17)(3771,`code`,18),iO(3772,`string `),wg(),jc(3773,`code`,73),iO(3774,` PoComboFilter `),wg(),jc(3775,`code`,74),iO(3776,` PoMultiselectFilter`),wg()(),jc(3777,`td`,20)(3778,`em`)(3779,`strong`),iO(3780,`(opcional)`),wg()(),jc(3781,`p`),iO(3782,`Serviço que será utilizado para buscar os itens e preencher a lista de opções dinamicamente. Pode ser informada uma URL ou uma instancia do serviço baseado em PoComboFilter. `),jc(3783,`strong`),iO(3784,`Importante`),wg()(),jc(3785,`blockquote`)(3786,`p`),iO(3787,`Para que funcione corretamente, é importante que o serviço siga o `),jc(3788,`a`,75),iO(3789,`guia de API do PO UI`),wg(),iO(3790,`.`),wg()()()(),jc(3791,`tr`,13)(3792,`td`,14)(3793,`div`,15)(3794,`span`,16),iO(3795,` order`),nu(3796,`br`),wg()()(),jc(3797,`td`,17)(3798,`code`,41),iO(3799,`number`),wg()(),jc(3800,`td`,20)(3801,`em`)(3802,`strong`),iO(3803,`(opcional)`),wg()(),jc(3804,`p`),iO(3805,`Informa a ordem de exibição do campo.`),wg(),jc(3806,`p`),iO(3807,`Exemplo de utilização:`),wg(),jc(3808,`p`)(3809,`code`),iO(3810,`[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];`),wg()(),jc(3811,`p`),iO(3812,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),jc(3813,`code`),iO(3814,`[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];`),wg()(),jc(3815,`p`),iO(3816,`Só serão aceitos valores com números inteiros maiores do que zero.`),wg(),jc(3817,`p`),iO(3818,`Campos sem `),jc(3819,`code`),iO(3820,`order`),wg(),iO(3821,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),wg()()(),jc(3822,`tr`,13)(3823,`td`,14)(3824,`div`,15)(3825,`span`,16),iO(3826,` params`),nu(3827,`br`),wg()()(),jc(3828,`td`,17)(3829,`code`,33),iO(3830,`any`),wg()(),jc(3831,`td`,20)(3832,`em`)(3833,`strong`),iO(3834,`(opcional)`),wg()(),jc(3835,`p`),iO(3836,`Objeto que será enviado como parâmetro nas requisições de busca usados pelos componentes `),jc(3837,`code`),iO(3838,`po-lookup`),wg(),iO(3839,` e
`),jc(3840,`code`),iO(3841,`po-combo`),wg(),iO(3842,`.`),wg(),jc(3843,`p`),iO(3844,`Por exemplo, para o parâmetro `),jc(3845,`code`),iO(3846,`{ age: 23 }`),wg(),iO(3847,` a URL da requisição ficaria:`),wg(),jc(3848,`p`)(3849,`code`),iO(3850,`url + ?age=23&filter=Peter`),wg()()()(),jc(3851,`tr`,13)(3852,`td`,14)(3853,`div`,15)(3854,`span`,16),iO(3855,` pattern`),nu(3856,`br`),wg()()(),jc(3857,`td`,17)(3858,`code`,18),iO(3859,`string`),wg()(),jc(3860,`td`,20)(3861,`em`)(3862,`strong`),iO(3863,`(opcional)`),wg()(),jc(3864,`p`),iO(3865,`Regex para validação do campo.`),wg(),jc(3866,`p`)(3867,`strong`),iO(3868,`Componentes compatíveis:`),wg(),jc(3869,`code`),iO(3870,`po-input`),wg(),iO(3871,`, `),jc(3872,`code`),iO(3873,`po-password`),wg(),iO(3874,`.`),wg(),jc(3875,`blockquote`)(3876,`p`),iO(3877,`Incompatível com `),jc(3878,`code`),iO(3879,`po-decimal`),wg(),iO(3880,`.`),wg()()()(),jc(3881,`tr`,13)(3882,`td`,14)(3883,`div`,15)(3884,`span`,16),iO(3885,` placeholder`),nu(3886,`br`),wg()()(),jc(3887,`td`,17)(3888,`code`,18),iO(3889,`string`),wg()(),jc(3890,`td`,20)(3891,`em`)(3892,`strong`),iO(3893,`(opcional)`),wg()(),jc(3894,`p`),iO(3895,`Mensagem que será exibida enquanto o campo não estiver preenchido.`),wg(),jc(3896,`p`)(3897,`strong`),iO(3898,`Componentes compatíveis:`),wg(),jc(3899,`code`),iO(3900,`po-datepicker`),wg(),iO(3901,`, `),jc(3902,`code`),iO(3903,`po-datepicker-range`),wg(),iO(3904,`, `),jc(3905,`code`),iO(3906,`po-timepicker`),wg(),iO(3907,`, `),jc(3908,`code`),iO(3909,`po-input`),wg(),iO(3910,`, `),jc(3911,`code`),iO(3912,`po-number`),wg(),iO(3913,`, `),jc(3914,`code`),iO(3915,`po-decimal`),wg(),iO(3916,`, `),jc(3917,`code`),iO(3918,`po-select`),wg(),iO(3919,`, `),jc(3920,`code`),iO(3921,`po-combo`),wg(),iO(3922,`, `),jc(3923,`code`),iO(3924,`po-lookup`),wg(),iO(3925,`, `),jc(3926,`code`),iO(3927,`po-multiselect`),wg(),iO(3928,`, `),jc(3929,`code`),iO(3930,`po-textarea`),wg(),iO(3931,`, `),jc(3932,`code`),iO(3933,`po-password`),wg(),iO(3934,`.`),wg()()(),jc(3935,`tr`,13)(3936,`td`,14)(3937,`div`,15)(3938,`span`,16),iO(3939,` placeholderSearch`),nu(3940,`br`),wg()()(),jc(3941,`td`,17)(3942,`code`,18),iO(3943,`string`),wg()(),jc(3944,`td`,20)(3945,`em`)(3946,`strong`),iO(3947,`(opcional)`),wg()(),jc(3948,`p`),iO(3949,`Placeholder do campo de pesquisa do `),jc(3950,`code`),iO(3951,`po-multiselect`),wg(),iO(3952,`.`),wg(),jc(3953,`blockquote`)(3954,`p`),iO(3955,`Caso o mesmo não seja informado, o valor padrão será traduzido com base no idioma do navegador (pt, es e en).`),wg()()()(),jc(3956,`tr`,13)(3957,`td`,14)(3958,`div`,15)(3959,`span`,16),iO(3960,` property`),nu(3961,`br`),wg()()(),jc(3962,`td`,17)(3963,`code`,18),iO(3964,`string`),wg()(),jc(3965,`td`,20)(3966,`p`),iO(3967,`Nome de referência do campo.`),wg()()(),jc(3968,`tr`,13)(3969,`td`,14)(3970,`div`,15)(3971,`span`,16),iO(3972,` range`),nu(3973,`br`),wg()()(),jc(3974,`td`,17)(3975,`code`,28),iO(3976,`boolean`),wg()(),jc(3977,`td`,20)(3978,`em`)(3979,`strong`),iO(3980,`(opcional)`),wg()(),jc(3981,`p`),iO(3982,`O controle passa a permitir a entrada de um intervalo ao invés de um único valor.`),wg(),jc(3983,`blockquote`)(3984,`p`),iO(3985,`Atualmente essa propriedade está disponível apenas para o tipo 'date' e 'dateTime'.`),wg()()()(),jc(3986,`tr`,13)(3987,`td`,14)(3988,`div`,15)(3989,`span`,16),iO(3990,` rangePresetOptions`),nu(3991,`br`),wg()()(),jc(3992,`td`,17)(3993,`code`,76),iO(3994,`Array<PoCalendarRangePreset>`),wg()(),jc(3995,`td`,20)(3996,`em`)(3997,`strong`),iO(3998,`(opcional)`),wg()(),jc(3999,`p`),iO(4e3,`Lista de presets customizados de intervalos de data exibidos no painel lateral do calendário.`),wg(),jc(4001,`p`),iO(4002,`Para utilizar presets customizados, informe um array de objetos que implementam a interface `),jc(4003,`code`),iO(4004,`PoCalendarRangePreset`),wg(),iO(4005,`.`),wg(),jc(4006,`p`)(4007,`strong`),iO(4008,`Componente compatível:`),wg(),jc(4009,`code`),iO(4010,`po-datepicker-range`),wg()()()(),jc(4011,`tr`,13)(4012,`td`,14)(4013,`div`,15)(4014,`span`,16),iO(4015,` rangePresets`),nu(4016,`br`),wg()()(),jc(4017,`td`,17)(4018,`code`,28),iO(4019,`boolean `),wg(),jc(4020,`code`,32),iO(4021,` Array<string>`),wg()(),jc(4022,`td`,20)(4023,`em`)(4024,`strong`),iO(4025,`(opcional)`),wg()(),jc(4026,`p`),iO(4027,`Habilita a exibição dos presets padrão de intervalos de data no painel lateral do calendário.`),wg(),jc(4028,`p`),iO(4029,`Aceita os seguintes valores:`),wg(),jc(4030,`ul`)(4031,`li`)(4032,`code`),iO(4033,`true`),wg(),iO(4034,`: exibe todos os presets padrão.`),wg(),jc(4035,`li`)(4036,`code`),iO(4037,`false`),wg(),iO(4038,`: não exibe os presets padrão.`),wg(),jc(4039,`li`)(4040,`code`),iO(4041,`Array<string>`),wg(),iO(4042,`: exibe apenas os presets padrão cujos labels estejam no array informado.`),wg()(),jc(4043,`p`)(4044,`strong`),iO(4045,`Componente compatível:`),wg(),jc(4046,`code`),iO(4047,`po-datepicker-range`),wg()()()(),jc(4048,`tr`,13)(4049,`td`,14)(4050,`div`,15)(4051,`span`,16),iO(4052,` rangePresetsOrder`),nu(4053,`br`),wg()()(),jc(4054,`td`,17)(4055,`code`,77),iO(4056,`'asc' `),wg(),jc(4057,`code`,78),iO(4058,` 'desc'`),wg()(),jc(4059,`td`,20)(4060,`em`)(4061,`strong`),iO(4062,`(opcional)`),wg()(),jc(4063,`p`),iO(4064,`Define a ordenação dos presets na lista.`),wg(),jc(4065,`p`),iO(4066,`Valores aceitos:`),wg(),jc(4067,`ul`)(4068,`li`)(4069,`code`),iO(4070,`'asc'`),wg(),iO(4071,`: ordenação crescente (passado → futuro)`),wg(),jc(4072,`li`)(4073,`code`),iO(4074,`'desc'`),wg(),iO(4075,`: ordenação decrescente (futuro → passado)`),wg()(),jc(4076,`p`)(4077,`strong`),iO(4078,`Componente compatível:`),wg(),jc(4079,`code`),iO(4080,`po-datepicker-range`),wg()()()(),jc(4081,`tr`,13)(4082,`td`,14)(4083,`div`,15)(4084,`span`,16),iO(4085,` readonly`),nu(4086,`br`),wg()()(),jc(4087,`td`,17)(4088,`code`,28),iO(4089,`boolean`),wg()(),jc(4090,`td`,20)(4091,`em`)(4092,`strong`),iO(4093,`(opcional)`),wg()(),jc(4094,`p`),iO(4095,`Indica que o campo será somente leitura.`),wg(),jc(4096,`p`)(4097,`strong`),iO(4098,`Componentes compatíveis:`),wg(),jc(4099,`code`),iO(4100,`po-datepicker`),wg(),iO(4101,`, `),jc(4102,`code`),iO(4103,`po-datepicker-range`),wg(),iO(4104,`, `),jc(4105,`code`),iO(4106,`po-timepicker`),wg(),iO(4107,`, `),jc(4108,`code`),iO(4109,`po-input`),wg(),iO(4110,`, `),jc(4111,`code`),iO(4112,`po-number`),wg(),iO(4113,`,
`),jc(4114,`code`),iO(4115,`po-decimal`),wg(),iO(4116,`, `),jc(4117,`code`),iO(4118,`po-select`),wg(),iO(4119,`, `),jc(4120,`code`),iO(4121,`po-textarea`),wg(),iO(4122,`, `),jc(4123,`code`),iO(4124,`po-password`),wg(),iO(4125,`.`),wg()()(),jc(4126,`tr`,13)(4127,`td`,14)(4128,`div`,15)(4129,`span`,16),iO(4130,` removeInitialFilter`),nu(4131,`br`),wg()()(),jc(4132,`td`,17)(4133,`code`,28),iO(4134,`boolean`),wg()(),jc(4135,`td`,20)(4136,`em`)(4137,`strong`),iO(4138,`(opcional)`),wg()(),jc(4139,`p`),iO(4140,`Define que o filtro no primeiro clique será removido.`),wg(),jc(4141,`blockquote`)(4142,`p`),iO(4143,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),wg()(),jc(4144,`p`)(4145,`strong`),iO(4146,`Componente compatível`),wg(),iO(4147,`: `),jc(4148,`code`),iO(4149,`po-combo`),wg()()()(),jc(4150,`tr`,13)(4151,`td`,14)(4152,`div`,15)(4153,`span`,16),iO(4154,` required`),nu(4155,`br`),wg()()(),jc(4156,`td`,17)(4157,`code`,28),iO(4158,`boolean`),wg()(),jc(4159,`td`,20)(4160,`em`)(4161,`strong`),iO(4162,`(opcional)`),wg()(),jc(4163,`p`),iO(4164,`Define a obrigatoriedade do campo.`),wg(),jc(4165,`p`)(4166,`strong`),iO(4167,`Componentes compatíveis:`),wg(),jc(4168,`code`),iO(4169,`po-datepicker`),wg(),iO(4170,`, `),jc(4171,`code`),iO(4172,`po-datepicker-range`),wg(),iO(4173,`, `),jc(4174,`code`),iO(4175,`po-timepicker`),wg(),iO(4176,`, `),jc(4177,`code`),iO(4178,`po-input`),wg(),iO(4179,`, `),jc(4180,`code`),iO(4181,`po-number`),wg(),iO(4182,`,
`),jc(4183,`code`),iO(4184,`po-decimal`),wg(),iO(4185,`, `),jc(4186,`code`),iO(4187,`po-select`),wg(),iO(4188,`, `),jc(4189,`code`),iO(4190,`po-radio-group`),wg(),iO(4191,`, `),jc(4192,`code`),iO(4193,`po-combo`),wg(),iO(4194,`, `),jc(4195,`code`),iO(4196,`po-lookup`),wg(),iO(4197,`, `),jc(4198,`code`),iO(4199,`po-checkbox-group`),wg(),iO(4200,`, `),jc(4201,`code`),iO(4202,`po-multiselect`),wg(),iO(4203,`,
`),jc(4204,`code`),iO(4205,`po-textarea`),wg(),iO(4206,`, `),jc(4207,`code`),iO(4208,"po-password``, "),wg(),iO(4209,"po-upload`."),wg()()(),jc(4210,`tr`,13)(4211,`td`,14)(4212,`div`,15)(4213,`span`,16),iO(4214,` requiredFieldErrorMessage`),nu(4215,`br`),wg()()(),jc(4216,`td`,17)(4217,`code`,28),iO(4218,`boolean`),wg()(),jc(4219,`td`,20)(4220,`em`)(4221,`strong`),iO(4222,`(opcional)`),wg()(),jc(4223,`p`),iO(4224,`Exibe a mensagem setada na propriedade `),jc(4225,`code`),iO(4226,`errorMessage`),wg(),iO(4227,` se o campo estiver vazio e for requerido.`),wg(),jc(4228,`blockquote`)(4229,`p`),iO(4230,`Necessário que a propriedade `),jc(4231,`code`),iO(4232,`required`),wg(),iO(4233,` esteja habilitada.`),wg()(),jc(4234,`p`)(4235,`strong`),iO(4236,`Componentes compatíveis:`),wg(),jc(4237,`code`),iO(4238,`po-datepicker`),wg(),iO(4239,`, `),jc(4240,`code`),iO(4241,`po-timepicker`),wg(),iO(4242,`, `),jc(4243,`code`),iO(4244,`po-input`),wg(),iO(4245,`, `),jc(4246,`code`),iO(4247,`po-number`),wg(),iO(4248,`, `),jc(4249,`code`),iO(4250,`po-decimal`),wg(),iO(4251,`, `),jc(4252,`code`),iO(4253,`po-password`),wg(),iO(4254,`.`),wg()()(),jc(4255,`tr`,13)(4256,`td`,14)(4257,`div`,15)(4258,`span`,16),iO(4259,` restrictions`),nu(4260,`br`),wg()()(),jc(4261,`td`,17)(4262,`code`,79),iO(4263,`PoUploadFileRestrictions`),wg()(),jc(4264,`td`,20)(4265,`em`)(4266,`strong`),iO(4267,`(opcional)`),wg()(),jc(4268,`p`),iO(4269,`Objeto que segue a definição da interface `),jc(4270,`code`),iO(4271,`PoUploadFileRestrictions`),wg(),iO(4272,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),wg(),jc(4273,`p`)(4274,`strong`),iO(4275,`Componente compatível`),wg(),iO(4276,`: `),jc(4277,`code`),iO(4278,`po-upload`),wg()()()(),jc(4279,`tr`,13)(4280,`td`,14)(4281,`div`,15)(4282,`span`,16),iO(4283,` rows`),nu(4284,`br`),wg()()(),jc(4285,`td`,17)(4286,`code`,41),iO(4287,`number`),wg()(),jc(4288,`td`,20)(4289,`em`)(4290,`strong`),iO(4291,`(opcional)`),wg()(),jc(4292,`p`),iO(4293,`Quantidade de linhas exibidas no `),jc(4294,`code`),iO(4295,`po-textarea`),wg(),iO(4296,`.`),wg()()(),jc(4297,`tr`,13)(4298,`td`,14)(4299,`div`,15)(4300,`span`,16),iO(4301,` searchService`),nu(4302,`br`),wg()()(),jc(4303,`td`,17)(4304,`code`,18),iO(4305,`string `),wg(),jc(4306,`code`,80),iO(4307,` PoLookupFilter`),wg()(),jc(4308,`td`,20)(4309,`em`)(4310,`strong`),iO(4311,`(opcional)`),wg()(),jc(4312,`p`),iO(4313,`Serviço que será utilizado para realizar a busca avançada. Pode ser utilizado em conjunto com a propriedade `),jc(4314,`code`),iO(4315,`columns`),wg(),iO(4316,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),jc(4317,`strong`),iO(4318,`Importante:`),wg()(),jc(4319,`blockquote`)(4320,`p`),iO(4321,`Caso utilizar a propriedade `),jc(4322,`code`),iO(4323,`optionsService`),wg(),iO(4324,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),jc(4325,`a`,75),iO(4326,`guia de API do PO UI`),wg(),iO(4327,`.`),wg()()()(),jc(4328,`tr`,13)(4329,`td`,14)(4330,`div`,15)(4331,`span`,16),iO(4332,` secondInterval`),nu(4333,`br`),wg()()(),jc(4334,`td`,17)(4335,`code`,41),iO(4336,`number`),wg()(),jc(4337,`td`,20)(4338,`em`)(4339,`strong`),iO(4340,`(opcional)`),wg()(),jc(4341,`p`),iO(4342,`Define o intervalo entre os segundos exibidos no painel do timepicker.`),wg()()(),jc(4343,`tr`,13)(4344,`td`,14)(4345,`div`,15)(4346,`span`,16),iO(4347,` secret`),nu(4348,`br`),wg()()(),jc(4349,`td`,17)(4350,`code`,28),iO(4351,`boolean`),wg()(),jc(4352,`td`,20)(4353,`em`)(4354,`strong`),iO(4355,`(opcional)`),wg()(),jc(4356,`p`),iO(4357,`Esconde a informação estilo `),jc(4358,`em`),iO(4359,`password`),wg(),iO(4360,`, pode ser utilizado quando o tipo de dado for `),jc(4361,`em`),iO(4362,`string`),wg(),iO(4363,`.`),wg()()(),jc(4364,`tr`,13)(4365,`td`,14)(4366,`div`,15)(4367,`span`,16),iO(4368,` showRequired`),nu(4369,`br`),wg()()(),jc(4370,`td`,17)(4371,`code`,28),iO(4372,`boolean`),wg()(),jc(4373,`td`,20)(4374,`em`)(4375,`strong`),iO(4376,`(opcional)`),wg()(),jc(4377,`p`),iO(4378,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(4379,`blockquote`)(4380,`p`),iO(4381,`Não será exibida a indicação se:`),wg()(),jc(4382,`ul`)(4383,`li`),iO(4384,`Não possuir `),jc(4385,`code`),iO(4386,`p-help`),wg(),iO(4387,` e/ou `),jc(4388,`code`),iO(4389,`p-label`),wg(),iO(4390,`.`),wg()(),jc(4391,`p`)(4392,`strong`),iO(4393,`Componentes compatíveis:`),wg(),jc(4394,`code`),iO(4395,`po-datepicker`),wg(),iO(4396,`, `),jc(4397,`code`),iO(4398,`po-datepicker-range`),wg(),iO(4399,`, `),jc(4400,`code`),iO(4401,`po-timepicker`),wg(),iO(4402,`, `),jc(4403,`code`),iO(4404,`po-input`),wg(),iO(4405,`, `),jc(4406,`code`),iO(4407,`po-number`),wg(),iO(4408,`,
`),jc(4409,`code`),iO(4410,`po-decimal`),wg(),iO(4411,`, `),jc(4412,`code`),iO(4413,`po-select`),wg(),iO(4414,`, `),jc(4415,`code`),iO(4416,`po-radio-group`),wg(),iO(4417,`, `),jc(4418,`code`),iO(4419,`po-combo`),wg(),iO(4420,`, `),jc(4421,`code`),iO(4422,`po-lookup`),wg(),iO(4423,`, `),jc(4424,`code`),iO(4425,`po-checkbox-group`),wg(),iO(4426,`, `),jc(4427,`code`),iO(4428,`po-multiselect`),wg(),iO(4429,`,
`),jc(4430,`code`),iO(4431,`po-textarea`),wg(),iO(4432,`, `),jc(4433,`code`),iO(4434,`po-password`),wg(),iO(4435,`, `),jc(4436,`code`),iO(4437,`po-upload`),wg(),iO(4438,`.`),wg()()(),jc(4439,`tr`,13)(4440,`td`,14)(4441,`div`,15)(4442,`span`,16),iO(4443,` showSeconds`),nu(4444,`br`),wg()()(),jc(4445,`td`,17)(4446,`code`,28),iO(4447,`boolean`),wg()(),jc(4448,`td`,20)(4449,`em`)(4450,`strong`),iO(4451,`(opcional)`),wg()(),jc(4452,`p`),iO(4453,`Exibe a coluna de segundos no painel do timepicker.`),wg()()(),jc(4454,`tr`,13)(4455,`td`,14)(4456,`div`,15)(4457,`span`,16),iO(4458,` showThumbnail`),nu(4459,`br`),wg()()(),jc(4460,`td`,17)(4461,`code`,28),iO(4462,`boolean`),wg()(),jc(4463,`td`,20)(4464,`em`)(4465,`strong`),iO(4466,`(opcional)`),wg()(),jc(4467,`p`),iO(4468,`Exibe a pré-visualização de imagens ao anexá-las.`),wg(),jc(4469,`blockquote`)(4470,`p`),iO(4471,`Propriedade funciona apenas em arquivos de formato de imagem (`),jc(4472,`code`),iO(4473,`.png`),wg(),iO(4474,`, `),jc(4475,`code`),iO(4476,`.jpg`),wg(),iO(4477,`, `),jc(4478,`code`),iO(4479,`.jpeg`),wg(),iO(4480,` e `),jc(4481,`code`),iO(4482,`.gif`),wg(),iO(4483,`).`),wg()(),jc(4484,`p`)(4485,`strong`),iO(4486,`Componente compatível`),wg(),iO(4487,`: `),jc(4488,`code`),iO(4489,`po-upload`),wg()()()(),jc(4490,`tr`,13)(4491,`td`,14)(4492,`div`,15)(4493,`span`,16),iO(4494,` size`),nu(4495,`br`),wg()()(),jc(4496,`td`,17)(4497,`code`,18),iO(4498,`string`),wg()(),jc(4499,`td`,20)(4500,`em`)(4501,`strong`),iO(4502,`(opcional)`),wg()(),jc(4503,`p`),iO(4504,`Define o tamanho dos componentes de formulário no template conforme suas respectivas documentações:`),wg(),jc(4505,`ul`)(4506,`li`)(4507,`code`),iO(4508,`small`),wg(),iO(4509,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(4510,`li`)(4511,`code`),iO(4512,`medium`),wg(),iO(4513,`: aplica a medida medium de cada componente.`),wg(),jc(4514,`li`)(4515,`code`),iO(4516,`large`),wg(),iO(4517,`: aplica a medida large de cada componente (disponível para `),jc(4518,`code`),iO(4519,`po-checkbox`),wg(),iO(4520,` e `),jc(4521,`code`),iO(4522,`po-radio-group`),wg(),iO(4523,`).`),jc(4524,`blockquote`)(4525,`p`),iO(4526,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(4527,`code`),iO(4528,`medium`),wg(),iO(4529,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(4530,`a`,21),iO(4531,`po-theme`),wg(),iO(4532,`.`),wg()()()()()(),jc(4533,`tr`,13)(4534,`td`,14)(4535,`div`,15)(4536,`span`,16),iO(4537,` sort`),nu(4538,`br`),wg()()(),jc(4539,`td`,17)(4540,`code`,28),iO(4541,`boolean`),wg()(),jc(4542,`td`,20)(4543,`em`)(4544,`strong`),iO(4545,`(opcional)`),wg()(),jc(4546,`p`),iO(4547,`Indica que a lista definida na propriedade p-options será ordenada pela descrição.`),wg(),jc(4548,`p`)(4549,`strong`),iO(4550,`Componentes compatíveis:`),wg(),jc(4551,`code`),iO(4552,`po-combo`),wg(),iO(4553,`, po-multiselect`),wg()()(),jc(4554,`tr`,13)(4555,`td`,14)(4556,`div`,15)(4557,`span`,16),iO(4558,` step`),nu(4559,`br`),wg()()(),jc(4560,`td`,17)(4561,`code`,41),iO(4562,`number`),wg()(),jc(4563,`td`,20)(4564,`em`)(4565,`strong`),iO(4566,`(opcional)`),wg()(),jc(4567,`p`),iO(4568,`Intervalo utilizado no `),jc(4569,`code`),iO(4570,`po-number`),wg(),iO(4571,`.`),wg()()(),jc(4572,`tr`,13)(4573,`td`,14)(4574,`div`,15)(4575,`span`,16),iO(4576,` thousandMaxlength`),nu(4577,`br`),wg()()(),jc(4578,`td`,17)(4579,`code`,41),iO(4580,`number`),wg()(),jc(4581,`td`,20)(4582,`em`)(4583,`strong`),iO(4584,`(opcional)`),wg()(),jc(4585,`p`),iO(4586,`Quantidade máxima de dígitos antes do separador decimal. O valor máximo permitido é 13`),wg(),jc(4587,`blockquote`)(4588,`p`),iO(4589,`Esta propriedade só pode ser utilizada quando o `),jc(4590,`code`),iO(4591,`type`),wg(),iO(4592,` for `),jc(4593,`em`),iO(4594,`currency`),wg(),iO(4595,` ou `),jc(4596,`em`),iO(4597,`decimal`),wg(),iO(4598,`.`),wg()(),jc(4599,`blockquote`)(4600,`p`),iO(4601,`Quando utilizado com `),jc(4602,`code`),iO(4603,`displayFormat`),wg(),iO(4604,`, será respeitado o valor `),jc(4605,`strong`),iO(4606,`mais restritivo`),wg(),iO(4607,` entre esta propriedade e o número de dígitos inteiros definido no formato.`),wg()()()(),jc(4608,`tr`,13)(4609,`td`,14)(4610,`div`,15)(4611,`span`,16),iO(4612,` type`),nu(4613,`br`),wg()()(),jc(4614,`td`,17)(4615,`code`,18),iO(4616,`string `),wg(),jc(4617,`code`,81),iO(4618,` PoDynamicFieldType`),wg()(),jc(4619,`td`,20)(4620,`em`)(4621,`strong`),iO(4622,`(opcional)`),wg()(),jc(4623,`p`),iO(4624,`Tipo do valor campo.`),wg(),jc(4625,`p`),iO(4626,`Valores válidos:`),wg(),jc(4627,`ul`)(4628,`li`)(4629,`code`),iO(4630,`boolean`),wg(),iO(4631,`: Valores `),jc(4632,`em`),iO(4633,`booleanos`),wg(),iO(4634,`.`),wg(),jc(4635,`li`)(4636,`code`),iO(4637,`currency`),wg(),iO(4638,`: Valores monetários.`),wg(),jc(4639,`li`)(4640,`code`),iO(4641,`decimal`),wg(),iO(4642,`: Valores decimais.`),wg(),jc(4643,`li`)(4644,`code`),iO(4645,`date`),wg(),iO(4646,`: Valores de datas.`),jc(4647,`ul`)(4648,`li`),iO(4649,`Aceita os tipos `),jc(4650,`strong`),iO(4651,`string`),wg(),iO(4652,` e `),jc(4653,`strong`),iO(4654,`Date`),wg(),iO(4655,` padr\xE3o do Javascript,
por exemplo: `),jc(4656,`code`),iO(4657,`'2017-11-28'`),wg(),iO(4658,` ou `),jc(4659,`code`),iO(4660,`new Date(2017, 10, 28)`),wg(),iO(4661,`.`),wg()()(),jc(4662,`li`)(4663,`code`),iO(4664,`dateTime`),wg(),iO(4665,`: Valor de data com horário.`),jc(4666,`ul`)(4667,`li`),iO(4668,`Aceita o tipo `),jc(4669,`em`),iO(4670,`string`),wg(),iO(4671,` no formato `),jc(4672,`strong`),iO(4673,`ISO-8601`),wg(),iO(4674,` extendido `),jc(4675,`strong`),iO(4676,`'yyyy-mm-ddThh:mm:ss+|-hh:mm'`),wg(),iO(4677,`
e o tipo `),jc(4678,`strong`),iO(4679,`Date`),wg(),iO(4680,` padrão do Javascript, por exemplo: `),jc(4681,`code`),iO(4682,`'2017-11-28T00:00:00-02:00'`),wg(),iO(4683,` ou `),jc(4684,`code`),iO(4685,`new Date(2017, 10, 28)`),wg(),iO(4686,`.`),wg()()(),jc(4687,`li`)(4688,`code`),iO(4689,`number`),wg(),iO(4690,`: Valores numéricos.`),wg(),jc(4691,`li`)(4692,`code`),iO(4693,`string`),wg(),iO(4694,`: Textos.`),wg(),jc(4695,`li`)(4696,`code`),iO(4697,`time`),wg(),iO(4698,`: Valor do horário.`),jc(4699,`ul`)(4700,`li`),iO(4701,`Aceita o tipo `),jc(4702,`strong`),iO(4703,`string`),wg(),iO(4704,` nos formatos `),jc(4705,`strong`),iO(4706,`'HH:mm:ss'`),wg(),iO(4707,` ou `),jc(4708,`strong`),iO(4709,`'HH:mm:ss.ffffff'`),wg(),iO(4710,`, por exemplo: `),jc(4711,`code`),iO(4712,`'23:12:45'`),wg(),iO(4713,`.`),wg()()()()()(),jc(4714,`tr`,13)(4715,`td`,14)(4716,`div`,15)(4717,`span`,16),iO(4718,` url`),nu(4719,`br`),wg()()(),jc(4720,`td`,17)(4721,`code`,18),iO(4722,`string`),wg()(),jc(4723,`td`,20)(4724,`em`)(4725,`strong`),iO(4726,`(opcional)`),wg()(),jc(4727,`p`),iO(4728,`URL que deve ser feita a requisição com os arquivos selecionados.`),wg(),jc(4729,`p`)(4730,`strong`),iO(4731,`Componente compatível`),wg(),iO(4732,`: `),jc(4733,`code`),iO(4734,`po-upload`),wg()()()(),jc(4735,`tr`,13)(4736,`td`,14)(4737,`div`,15)(4738,`span`,16),iO(4739,` validate`),nu(4740,`br`),wg()()(),jc(4741,`td`,17)(4742,`code`,18),iO(4743,`string `),wg(),jc(4744,`code`,29),iO(4745,` Function`),wg()(),jc(4746,`td`,20)(4747,`em`)(4748,`strong`),iO(4749,`(opcional)`),wg()(),jc(4750,`p`),iO(4751,`Função ou serviço para validar as `),jc(4752,`strong`),iO(4753,`mudanças do campo`),wg(),iO(4754,`.`),wg(),jc(4755,`ul`)(4756,`li`),iO(4757,`A propriedade aceita os seguintes tipos:`),wg()(),jc(4758,`ul`)(4759,`li`)(4760,`strong`),iO(4761,`String`),wg(),iO(4762,`: Endpoint usado pelo componente para requisição via `),jc(4763,`code`),iO(4764,`POST`),wg(),iO(4765,`.`),wg(),jc(4766,`li`)(4767,`strong`),iO(4768,`Function`),wg(),iO(4769,`: Método que será executado.`),wg()(),jc(4770,`p`),iO(4771,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),jc(4772,`code`),iO(4773,`PoDynamicFormFieldChanged`),wg(),iO(4774,`:`),wg(),jc(4775,`p`)(4776,`code`),iO(4777,`{ property: 'property name', value: 'new value' }`),wg()(),jc(4778,`p`),iO(4779,`O retorno desta função deve ser do tipo `),jc(4780,`a`,82),iO(4781,`PoDynamicFormFieldValidation`),wg(),iO(4782,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),wg(),jc(4783,`pre`)(4784,`code`),iO(4785,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),wg()(),jc(4786,`p`),iO(4787,`Para referenciar a sua função utilize a propriedade `),jc(4788,`code`),iO(4789,`bind`),wg(),iO(4790,`, por exemplo:
`),jc(4791,`code`),iO(4792,`{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }`),wg()()()(),jc(4793,`tr`,13)(4794,`td`,14)(4795,`div`,15)(4796,`span`,16),iO(4797,` visible`),nu(4798,`br`),wg()()(),jc(4799,`td`,17)(4800,`code`,28),iO(4801,`boolean`),wg()(),jc(4802,`td`,20)(4803,`em`)(4804,`strong`),iO(4805,`(opcional)`),wg()(),jc(4806,`p`),iO(4807,`Indica se o campo será visível.`),wg()()(),jc(4808,`tr`,13)(4809,`td`,14)(4810,`div`,15)(4811,`span`,16),iO(4812,` yearRangeLimit`),nu(4813,`br`),wg()()(),jc(4814,`td`,17)(4815,`code`,41),iO(4816,`number`),wg()(),jc(4817,`td`,20)(4818,`em`)(4819,`strong`),iO(4820,`(opcional)`),wg()(),jc(4821,`p`),iO(4822,`Define o limite de anos exibidos na lista de anos do `),jc(4823,`code`),iO(4824,`po-datepicker`),wg(),iO(4825,` nos modos `),jc(4826,`code`),iO(4827,`month-year`),wg(),iO(4828,` e `),jc(4829,`code`),iO(4830,`year`),wg(),iO(4831,`.`),wg()()()(),jc(4832,`h4`,38)(4833,`code`,5),iO(4834,`PoDynamicFormLoad`),wg()(),jc(4835,`div`,2)(4836,`p`),nu(4837,`a`,83),wg(),jc(4838,`p`),iO(4839,`Estrutura de retorno no carregamento do formulário.`),wg()(),jc(4840,`h4`,9),iO(4841,`Propriedades`),wg(),jc(4842,`table`,10)(4843,`tr`,11)(4844,`th`,12),iO(4845,`Nome`),wg(),jc(4846,`th`,12),iO(4847,`Tipo`),wg(),jc(4848,`th`,12),iO(4849,`Descrição`),wg()(),jc(4850,`tr`,13)(4851,`td`,14)(4852,`div`,15)(4853,`span`,16),iO(4854,` fields`),nu(4855,`br`),wg()()(),jc(4856,`td`,17)(4857,`code`,22),iO(4858,`Array<PoDynamicFormField>`),wg()(),jc(4859,`td`,20)(4860,`em`)(4861,`strong`),iO(4862,`(opcional)`),wg()(),jc(4863,`p`),iO(4864,`Lista com as novas definições dos campos.`),wg(),jc(4865,`blockquote`)(4866,`p`),iO(4867,`Não é necessário colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas.`),wg()()()(),jc(4868,`tr`,13)(4869,`td`,14)(4870,`div`,15)(4871,`span`,16),iO(4872,` focus`),nu(4873,`br`),wg()()(),jc(4874,`td`,17)(4875,`code`,18),iO(4876,`string`),wg()(),jc(4877,`td`,20)(4878,`em`)(4879,`strong`),iO(4880,`(opcional)`),wg()(),jc(4881,`p`),iO(4882,`Nome do campo que receberá o foco.`),wg(),jc(4883,`p`),iO(4884,`Exemplo:`),wg(),jc(4885,`pre`)(4886,`code`),iO(4887,`focus: 'name'
`),wg()()()(),jc(4888,`tr`,13)(4889,`td`,14)(4890,`div`,15)(4891,`span`,16),iO(4892,` value`),nu(4893,`br`),wg()()(),jc(4894,`td`,17)(4895,`code`,33),iO(4896,`any`),wg()(),jc(4897,`td`,20)(4898,`em`)(4899,`strong`),iO(4900,`(opcional)`),wg()(),jc(4901,`p`),iO(4902,`Objeto contendo os novos valores.`),wg(),jc(4903,`p`),iO(4904,`Exemplo:`),wg(),jc(4905,`pre`)(4906,`code`),iO(4907,`{
  name: 'new name',
  age: 10
}
`),wg()(),jc(4908,`blockquote`)(4909,`p`),iO(4910,`Não é necessário colocar os valores de todos os campos, apenas os que foram alterados.`),wg()()()()(),jc(4911,`h4`,38)(4912,`code`,5),iO(4913,`PoDynamicFormFieldChanged`),wg()(),jc(4914,`div`,2)(4915,`p`),iO(4916,`Estrutura dos valores que serão disparados quando houver uma mudança em um campo ou no formulário.`),wg()(),jc(4917,`h4`,9),iO(4918,`Propriedades`),wg(),jc(4919,`table`,10)(4920,`tr`,11)(4921,`th`,12),iO(4922,`Nome`),wg(),jc(4923,`th`,12),iO(4924,`Tipo`),wg(),jc(4925,`th`,12),iO(4926,`Descrição`),wg()(),jc(4927,`tr`,13)(4928,`td`,14)(4929,`div`,15)(4930,`span`,16),iO(4931,` property`),nu(4932,`br`),wg()()(),jc(4933,`td`,17)(4934,`code`,18),iO(4935,`string`),wg()(),jc(4936,`td`,20)(4937,`p`),iO(4938,`Valor da propriedade do campo.`),wg()()(),jc(4939,`tr`,13)(4940,`td`,14)(4941,`div`,15)(4942,`span`,16),iO(4943,` value`),nu(4944,`br`),wg()()(),jc(4945,`td`,17)(4946,`code`,33),iO(4947,`any`),wg()(),jc(4948,`td`,20)(4949,`p`),iO(4950,`Novo valor do campo.`),wg()()()(),jc(4951,`h4`,38)(4952,`code`,5),iO(4953,`PoDynamicFormFieldValidation`),wg()(),jc(4954,`div`,2)(4955,`p`),nu(4956,`a`,84),wg(),jc(4957,`p`),iO(4958,`Estrutura de retorno da validação de um campo.`),wg()(),jc(4959,`h4`,9),iO(4960,`Propriedades`),wg(),jc(4961,`table`,10)(4962,`tr`,11)(4963,`th`,12),iO(4964,`Nome`),wg(),jc(4965,`th`,12),iO(4966,`Tipo`),wg(),jc(4967,`th`,12),iO(4968,`Descrição`),wg()(),jc(4969,`tr`,13)(4970,`td`,14)(4971,`div`,15)(4972,`span`,16),iO(4973,` field`),nu(4974,`br`),wg()()(),jc(4975,`td`,17)(4976,`code`,85),iO(4977,`PoDynamicFormField`),wg()(),jc(4978,`td`,20)(4979,`em`)(4980,`strong`),iO(4981,`(opcional)`),wg()(),jc(4982,`p`),iO(4983,`Novas definições das propriedades do campo.`),wg(),jc(4984,`blockquote`)(4985,`p`),iO(4986,`Não é necessário colocar todas as propriedades, apenas as que foram alteradas.`),wg()()()(),jc(4987,`tr`,13)(4988,`td`,14)(4989,`div`,15)(4990,`span`,16),iO(4991,` focus`),nu(4992,`br`),wg()()(),jc(4993,`td`,17)(4994,`code`,28),iO(4995,`boolean`),wg()(),jc(4996,`td`,20)(4997,`em`)(4998,`strong`),iO(4999,`(opcional)`),wg()(),jc(5e3,`p`),iO(5001,`Coloca o foco no campo após a validação.`),wg()()(),jc(5002,`tr`,13)(5003,`td`,14)(5004,`div`,15)(5005,`span`,16),iO(5006,` value`),nu(5007,`br`),wg()()(),jc(5008,`td`,17)(5009,`code`,33),iO(5010,`any`),wg()(),jc(5011,`td`,20)(5012,`em`)(5013,`strong`),iO(5014,`(opcional)`),wg()(),jc(5015,`p`),iO(5016,`Novo valor do campo`),wg()()()(),jc(5017,`h4`,38)(5018,`code`,5),iO(5019,`PoDynamicFormValidation`),wg()(),jc(5020,`div`,2)(5021,`p`),nu(5022,`a`,86),wg(),jc(5023,`p`),iO(5024,`Estrutura de retorno da validação do formulário.`),wg()(),jc(5025,`h4`,9),iO(5026,`Propriedades`),wg(),jc(5027,`table`,10)(5028,`tr`,11)(5029,`th`,12),iO(5030,`Nome`),wg(),jc(5031,`th`,12),iO(5032,`Tipo`),wg(),jc(5033,`th`,12),iO(5034,`Descrição`),wg()(),jc(5035,`tr`,13)(5036,`td`,14)(5037,`div`,15)(5038,`span`,16),iO(5039,` fields`),nu(5040,`br`),wg()()(),jc(5041,`td`,17)(5042,`code`,22),iO(5043,`Array<PoDynamicFormField>`),wg()(),jc(5044,`td`,20)(5045,`em`)(5046,`strong`),iO(5047,`(opcional)`),wg()(),jc(5048,`p`),iO(5049,`Lista com as novas definições dos campos.`),wg(),jc(5050,`blockquote`)(5051,`p`),iO(5052,`Não é necessário colocar todas as propriedades e campos, apenas as que foram alteradas.`),wg()()()(),jc(5053,`tr`,13)(5054,`td`,14)(5055,`div`,15)(5056,`span`,16),iO(5057,` focus`),nu(5058,`br`),wg()()(),jc(5059,`td`,17)(5060,`code`,18),iO(5061,`string`),wg()(),jc(5062,`td`,20)(5063,`em`)(5064,`strong`),iO(5065,`(opcional)`),wg()(),jc(5066,`p`),iO(5067,`Nome do campo que receberá o foco.`),wg(),jc(5068,`p`),iO(5069,`Exemplo:`),wg(),jc(5070,`pre`)(5071,`code`),iO(5072,`focus: 'name'
`),wg()()()(),jc(5073,`tr`,13)(5074,`td`,14)(5075,`div`,15)(5076,`span`,16),iO(5077,` value`),nu(5078,`br`),wg()()(),jc(5079,`td`,17)(5080,`code`,33),iO(5081,`any`),wg()(),jc(5082,`td`,20)(5083,`em`)(5084,`strong`),iO(5085,`(opcional)`),wg()(),jc(5086,`p`),iO(5087,`Objeto contendo os novos valores.`),wg(),jc(5088,`p`),iO(5089,`Exemplo:`),wg(),jc(5090,`pre`)(5091,`code`),iO(5092,`{
  name: 'new name',
  age: 10
}
`),wg()(),jc(5093,`blockquote`)(5094,`p`),iO(5095,`Não é necessário colocar os valores de todos os campos, apenas os que foram alterados.`),wg()()()()(),jc(5096,`h4`,38)(5097,`code`,5),iO(5098,`ErrorAsyncProperties`),wg()(),jc(5099,`div`,2)(5100,`p`),iO(5101,`Interface para realizar uma validação assíncrona no componente.`),wg()(),jc(5102,`h4`,9),iO(5103,`Propriedades`),wg(),jc(5104,`table`,10)(5105,`tr`,11)(5106,`th`,12),iO(5107,`Nome`),wg(),jc(5108,`th`,12),iO(5109,`Tipo`),wg(),jc(5110,`th`,12),iO(5111,`Descrição`),wg()(),jc(5112,`tr`,13)(5113,`td`,14)(5114,`div`,15)(5115,`span`,16),iO(5116,` errorAsync`),nu(5117,`br`),wg()()(),jc(5118,`td`,17)(5119,`code`,46),iO(5120,`(value) => Observable<boolean>`),wg()(),jc(5121,`td`,20)(5122,`p`),iO(5123,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),jc(5124,`code`),iO(5125,`change`),wg(),iO(5126,` ou `),jc(5127,`code`),iO(5128,`change-model`),wg(),iO(5129,`, dependendo do valor da propriedade `),jc(5130,`code`),iO(5131,`triggerMode`),wg(),iO(5132,`.`),wg()()(),jc(5133,`tr`,13)(5134,`td`,14)(5135,`div`,15)(5136,`span`,16),iO(5137,` triggerMode`),nu(5138,`br`),wg()()(),jc(5139,`td`,17)(5140,`code`,87),iO(5141,`'change' `),wg(),jc(5142,`code`,88),iO(5143,` 'changeModel'`),wg()(),jc(5144,`td`,20)(5145,`em`)(5146,`strong`),iO(5147,`(opcional)`),wg()(),jc(5148,`p`),iO(5149,`Controla se o método será executado no disparo do output `),jc(5150,`code`),iO(5151,`change`),wg(),iO(5152,` ou `),jc(5153,`code`),iO(5154,`change-model`),wg(),iO(5155,`.`),wg()()()(),jc(5156,`h3`),iO(5157,`Enums`),wg(),jc(5158,`h4`,4)(5159,`code`,5),iO(5160,`ForceBooleanComponentEnum`),wg()(),jc(5161,`div`,2)(5162,`p`),iO(5163,`Enum para definição do tipo de componente a ser renderizado.`),wg()(),jc(5164,`h4`,9),iO(5165,`Propriedades`),wg(),jc(5166,`table`,10)(5167,`tr`,11)(5168,`th`,12),iO(5169,`Nome`),wg(),jc(5170,`th`,12),iO(5171,`Descrição`),wg()(),jc(5172,`tr`,13)(5173,`td`,14)(5174,`div`,15)(5175,`span`,16),iO(5176,` switch`),nu(5177,`br`),wg()()(),jc(5178,`td`,20)(5179,`p`),iO(5180,`Força a renderização de um po-switch`),wg()()(),jc(5181,`tr`,13)(5182,`td`,14)(5183,`div`,15)(5184,`span`,16),iO(5185,` checkbox`),nu(5186,`br`),wg()()(),jc(5187,`td`,20)(5188,`p`),iO(5189,`Força a renderização de um po-checkbox`),wg()()()(),jc(5190,`h4`,4)(5191,`code`,5),iO(5192,`ForceOptionComponentEnum`),wg()(),jc(5193,`div`,2)(5194,`p`),iO(5195,`Enum para definição do tipo de componente a ser renderizado.`),wg()(),jc(5196,`h4`,9),iO(5197,`Propriedades`),wg(),jc(5198,`table`,10)(5199,`tr`,11)(5200,`th`,12),iO(5201,`Nome`),wg(),jc(5202,`th`,12),iO(5203,`Descrição`),wg()(),jc(5204,`tr`,13)(5205,`td`,14)(5206,`div`,15)(5207,`span`,16),iO(5208,` radioGroup`),nu(5209,`br`),wg()()(),jc(5210,`td`,20)(5211,`p`),iO(5212,`Força a renderização de um po-radio-group independente da quantidade do opções`),wg()()(),jc(5213,`tr`,13)(5214,`td`,14)(5215,`div`,15)(5216,`span`,16),iO(5217,` select`),nu(5218,`br`),wg()()(),jc(5219,`td`,20)(5220,`p`),iO(5221,`Força a renderização de um po-select independente da quantidade do opções`),wg()()()(),jc(5222,`h4`,4)(5223,`code`,5),iO(5224,`PoDynamicFieldType`),wg()(),jc(5225,`div`,2)(5226,`p`),iO(5227,`Enum para definição do tipo de campo que será criado dinamicamente.`),wg()(),jc(5228,`h4`,9),iO(5229,`Propriedades`),wg(),jc(5230,`table`,10)(5231,`tr`,11)(5232,`th`,12),iO(5233,`Nome`),wg(),jc(5234,`th`,12),iO(5235,`Descrição`),wg()(),jc(5236,`tr`,13)(5237,`td`,14)(5238,`div`,15)(5239,`span`,16),iO(5240,` Boolean`),nu(5241,`br`),wg()()(),jc(5242,`td`,20)(5243,`p`),iO(5244,`Valor booleano.`),wg()()(),jc(5245,`tr`,13)(5246,`td`,14)(5247,`div`,15)(5248,`span`,16),iO(5249,` Currency`),nu(5250,`br`),wg()()(),jc(5251,`td`,20)(5252,`p`),iO(5253,`Valor numérico que contém casas decimais e milhar.`),wg()()(),jc(5254,`tr`,13)(5255,`td`,14)(5256,`div`,15)(5257,`span`,16),iO(5258,` Decimal`),nu(5259,`br`),wg()()(),jc(5260,`td`,20)(5261,`p`),iO(5262,`Valor numérico que contém casas decimais e milhar.`),wg()()(),jc(5263,`tr`,13)(5264,`td`,14)(5265,`div`,15)(5266,`span`,16),iO(5267,` Date`),nu(5268,`br`),wg()()(),jc(5269,`td`,20)(5270,`p`),iO(5271,`Valor para data.`),wg()()(),jc(5272,`tr`,13)(5273,`td`,14)(5274,`div`,15)(5275,`span`,16),iO(5276,` DateTime`),nu(5277,`br`),wg()()(),jc(5278,`td`,20)(5279,`p`),iO(5280,`Valor para data e hora.`),wg()()(),jc(5281,`tr`,13)(5282,`td`,14)(5283,`div`,15)(5284,`span`,16),iO(5285,` Time`),nu(5286,`br`),wg()()(),jc(5287,`td`,20)(5288,`p`),iO(5289,`Utilizado para informar/exibir hora.`),wg()()(),jc(5290,`tr`,13)(5291,`td`,14)(5292,`div`,15)(5293,`span`,16),iO(5294,` Number`),nu(5295,`br`),wg()()(),jc(5296,`td`,20)(5297,`p`),iO(5298,`Valor numérico.`),wg()()(),jc(5299,`tr`,13)(5300,`td`,14)(5301,`div`,15)(5302,`span`,16),iO(5303,` String`),nu(5304,`br`),wg()()(),jc(5305,`td`,20)(5306,`p`),iO(5307,`Texto.`),wg()()(),jc(5308,`tr`,13)(5309,`td`,14)(5310,`div`,15)(5311,`span`,16),iO(5312,` Upload`),nu(5313,`br`),wg()()(),jc(5314,`td`,20)(5315,`p`),iO(5316,`Utilizado para fazer uploads de arquivos.`),wg()()()(),jc(5317,`h4`,4)(5318,`code`,5),iO(5319,`PoTimepickerModelFormat`),wg()(),jc(5320,`div`,2)(5321,`p`)(5322,`em`),iO(5323,`Enum`),wg(),iO(5324,` que define o padrão de formatação do model de saída do timepicker.`),wg()(),jc(5325,`h4`,9),iO(5326,`Propriedades`),wg(),jc(5327,`table`,10)(5328,`tr`,11)(5329,`th`,12),iO(5330,`Nome`),wg(),jc(5331,`th`,12),iO(5332,`Descrição`),wg()(),jc(5333,`tr`,13)(5334,`td`,14)(5335,`div`,15)(5336,`span`,16),iO(5337,` HourMinute`),nu(5338,`br`),wg()()(),jc(5339,`td`,20)(5340,`p`),iO(5341,`Formato básico `),jc(5342,`code`),iO(5343,`HH:mm`),wg(),iO(5344,` (ex: `),jc(5345,`code`),iO(5346,`14:30`),wg(),iO(5347,`).`),wg()()(),jc(5348,`tr`,13)(5349,`td`,14)(5350,`div`,15)(5351,`span`,16),iO(5352,` HourMinuteSecond`),nu(5353,`br`),wg()()(),jc(5354,`td`,20)(5355,`p`),iO(5356,`Formato com segundos `),jc(5357,`code`),iO(5358,`HH:mm:ss`),wg(),iO(5359,` (ex: `),jc(5360,`code`),iO(5361,`14:30:00`),wg(),iO(5362,`).`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var fe=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Dynamic Form`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,r){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return r.changeTab(`doc`)}),nu(3,`sample-po-dynamic-form-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return r.changeTab(`web`)}),nu(5,`sample-po-dynamic-form-basic-view`)(6,`sample-po-dynamic-form-register-view`)(7,`sample-po-dynamic-form-container-view`),wg()()()),a&2&&(jE(`p-actions`,r.actions),rg(2),jE(`p-active`,r.activeTab===`doc`),rg(2),jE(`p-hide`,r.hidePoWebSample)(`p-active`,r.activeTab===`web`))},dependencies:[Kze,bae,Sae,$,te,ne,oe],encapsulation:2,changeDetection:1})}return o})()}];var re=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[C1.forChild(fe),C1]})}return o})();var rt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[Ta,re]})}return o})();export{rt as DocPoDynamicFormModule};