import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,E,d as f,aE as Bp,ce as Sde,r as r$1,aM as lT,N as Ul,S as YE,bi as Jx,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,aK as Pe,al as lx,aX as _x,X as we,as as $l,at as uo,au as fo,a3 as D3,az as Qy,aA as Jy}from'./main-6SPFG3VI.js';var de=()=>({property:"name",required:true,showRequired:true}),pe=o=>[o],$=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,r){a&1&&Ul(0,"po-dynamic-form",0),a&2&&YE("p-fields",Jx(2,pe,Qx(1,de)));},dependencies:[lT],encapsulation:2,changeDetection:1})}return o})();var ce=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dynamic Form Basic"),ng(),wl(4,"a",2),ut("click",function(){return r.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-dynamic-form-basic"),ng(),Ul(23,"hr")),a&2&&(Pp(5),Ax("po-icon "+r.sampleCodeButtonIcon),Pp(),cg(" ",r.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ce,r.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,$],encapsulation:2})}return o})();var K=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=E({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var xe=["dynamicForm"],ie=(()=>{class o{poNotification=f(Bp);registerService=f(K);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:true,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:Sde.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return setTimeout(()=>{let a=this.registerService.getCity(m.value.state);this.updateDynamicFormField("city",{options:a,loading:false});},500),{value:{city:void 0},fields:[{property:"city",gridColumns:6,disabled:false,loading:true}]}}onLoadFields(m){return this.registerService.getUserDocument(m)}updateDynamicFormField(m,a){let r=this.dynamicForm?.fields??this.fields,l=r.findIndex(V=>V.property===m);l>=0&&(r[l]=r$1(r$1({},r[l]),a),this.fields=[...r]);}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register"]],viewQuery:function(a,r){if(a&1&&$l(xe,7),a&2){let l;uo(l=fo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([K])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=lx();Ul(0,"po-dynamic-form",1,0)(2,"br"),wl(3,"div",2)(4,"po-button",3),ut("p-click",function(){Qy(l);let O=_x(1);return r.poNotification.success("Data saved successfully!"),Jy(O.form.reset())}),ng()();}if(a&2){let l=_x(1);YE("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Pp(4),YE("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Pe,lT],encapsulation:2,changeDetection:1})}return o})();var be=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dynamic Form - Register"),ng(),wl(4,"a",2),ut("click",function(){return r.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-dynamic-form
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
    [p-disabled]="$safeNavigationMigration(dynamicForm?.form.invalid)"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
      icon: 'an an-currency-circle-dollar'
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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { Injectable } from '@angular/core';

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
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-dynamic-form-register"),ng(),Ul(27,"hr")),a&2&&(Pp(5),Ax("po-icon "+r.sampleCodeButtonIcon),Pp(),cg(" ",r.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,be,r.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ie],encapsulation:2})}return o})();var X=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=E({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ye=["dynamicForm"],oe=(()=>{class o{poNotification=f(Bp);registerService=f(X);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:true,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:Sde.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:true},customActionClick:m=>{console.log("Iniciar download para o arquivo:",m.name);}}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return {value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(m.value.state),disabled:false}]}}onKeyDown(m,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(m);}onLoadFields(m){return this.registerService.getUserDocument(m)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,r){if(a&1&&$l(ye,7),a&2){let l;uo(l=fo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([X])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=lx();Ul(0,"po-dynamic-form",1,0)(2,"br"),wl(3,"div",2)(4,"po-button",3),ut("p-click",function(){Qy(l);let O=_x(1);return r.poNotification.success("Data saved successfully!"),Jy(O.form.reset())}),ng()();}if(a&2){let l=_x(1);YE("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Pp(4),YE("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Pe,lT],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Dynamic Form - Container"),ng(),wl(4,"a",2),ut("click",function(){return r.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-dynamic-form
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
    [p-disabled]="$safeNavigationMigration(dynamicForm?.form.invalid)"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
      icon: 'an an-currency-circle-dollar'
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
`),ng(),wl(21,"label",6),Ux(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),ng(),wl(23,"pre",9),Ux(24,`import { Injectable } from '@angular/core';

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
`),ng()()()()(),wl(25,"div",10),Ul(26,"sample-po-dynamic-form-container"),ng(),Ul(27,"hr")),a&2&&(Pp(5),Ax("po-icon "+r.sampleCodeButtonIcon),Pp(),cg(" ",r.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,fe,r.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,oe],encapsulation:2})}return o})();var re=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:false,decls:5251,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,r){a&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),ng()(),Ul(4,"div",2),wl(5,"h3",3),Ux(6,"Componente"),ng(),wl(7,"h4",4)(8,"code",5),Ux(9,"PoDynamicFormComponent"),ng()(),wl(10,"div",2)(11,"p"),Ux(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),ng(),wl(13,"p"),Ux(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),ng()(),wl(15,"div",6)(16,"h4",7),Ux(17,"Seletor"),ng(),wl(18,"pre",8),Ux(19,`<po-dynamic-form
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
`),ng()(),wl(20,"h4",9),Ux(21,"Propriedades"),ng(),wl(22,"table",10)(23,"tr",11)(24,"th",12),Ux(25,"Nome"),ng(),wl(26,"th",12),Ux(27,"Tipo"),ng(),wl(28,"th",12),Ux(29,"Padr\xE3o"),ng(),wl(30,"th",12),Ux(31,"Descri\xE7\xE3o"),ng()(),wl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),Ux(36," p-auto-focus"),Ul(37,"br"),ng()()(),wl(38,"td",17)(39,"code",18),Ux(40,"string"),ng()(),wl(41,"td",19),Ux(42,"-"),ng(),wl(43,"td",20)(44,"em")(45,"strong"),Ux(46,"(opcional)"),ng()(),wl(47,"p"),Ux(48,"Nome da propriedade, atribu\xEDda ao "),wl(49,"code"),Ux(50,"PoDynamicFormField.property"),ng(),Ux(51,", que iniciar\xE1 o campo com foco."),ng()()(),wl(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),Ux(56," p-components-size"),Ul(57,"br"),ng()()(),wl(58,"td",17)(59,"code",18),Ux(60,"string"),ng()(),wl(61,"td",19)(62,"p")(63,"code"),Ux(64,"medium"),ng()()(),wl(65,"td",20)(66,"em")(67,"strong"),Ux(68,"(opcional)"),ng()(),wl(69,"p"),Ux(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),ng(),wl(71,"ul")(72,"li")(73,"code"),Ux(74,"small"),ng(),Ux(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(76,"li")(77,"code"),Ux(78,"medium"),ng(),Ux(79,": aplica a medida medium de cada componente."),ng()(),wl(80,"blockquote")(81,"p"),Ux(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(83,"code"),Ux(84,"medium"),ng(),Ux(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(86,"a",21),Ux(87,"po-theme"),ng(),Ux(88,"."),ng()()()(),wl(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),Ux(93," p-fields"),Ul(94,"br"),ng()()(),wl(95,"td",17)(96,"code",22),Ux(97,"Array<PoDynamicFormField>"),ng()(),wl(98,"td",19)(99,"p")(100,"code"),Ux(101,"[]"),ng()()(),wl(102,"td",20)(103,"p"),Ux(104,"Cole\xE7\xE3o de objetos que implementam a interface "),wl(105,"code"),Ux(106,"PoDynamicFormField"),ng(),Ux(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),ng(),wl(108,"blockquote")(109,"p"),Ux(110,"Ex: "),wl(111,"code"),Ux(112,"[ { property: 'name' } ]"),ng()()(),wl(113,"p"),Ux(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),ng(),wl(115,"ul")(116,"li"),Ux(117,"Caso o "),wl(118,"em"),Ux(119,"type"),ng(),Ux(120," informado seja "),wl(121,"em"),Ux(122,"boolean"),ng(),Ux(123," o componente criado ser\xE1 o "),wl(124,"code"),Ux(125,"po-switch"),ng(),Ux(126,"."),ng(),wl(127,"li"),Ux(128,"Caso o "),wl(129,"em"),Ux(130,"type"),ng(),Ux(131," informado seja "),wl(132,"em"),Ux(133,"currency"),ng(),Ux(134," e n\xE3o seja informado um "),wl(135,"em"),Ux(136,"mask"),ng(),Ux(137," ou "),wl(138,"em"),Ux(139,"pattern"),ng(),Ux(140," o componente criado ser\xE1 o "),wl(141,"code"),Ux(142,"po-decimal"),ng(),Ux(143,`,
caso seja informado um `),wl(144,"em"),Ux(145,"mask"),ng(),Ux(146," ou "),wl(147,"em"),Ux(148,"pattern"),ng(),Ux(149," o componente criado ser\xE1 o "),wl(150,"code"),Ux(151,"po-input"),ng(),Ux(152,"."),ng(),wl(153,"li"),Ux(154,"Caso o "),wl(155,"em"),Ux(156,"type"),ng(),Ux(157," informado seja "),wl(158,"em"),Ux(159,"number"),ng(),Ux(160," e n\xE3o seja informado um "),wl(161,"em"),Ux(162,"mask"),ng(),Ux(163," ou "),wl(164,"em"),Ux(165,"pattern"),ng(),Ux(166," o componente criado ser\xE1 o "),wl(167,"code"),Ux(168,"po-number"),ng(),Ux(169,`, caso seja
informado um `),wl(170,"em"),Ux(171,"mask"),ng(),Ux(172," ou "),wl(173,"em"),Ux(174,"pattern"),ng(),Ux(175," o componente criado ser\xE1 o "),wl(176,"code"),Ux(177,"po-input"),ng(),Ux(178,"."),ng(),wl(179,"li"),Ux(180,"Caso a lista possua a propriedade "),wl(181,"code"),Ux(182,"options"),ng(),Ux(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),wl(184,"code"),Ux(185,"po-radio-group"),ng(),Ux(186,`
ou `),wl(187,"code"),Ux(188,"po-checkbox-group"),ng(),Ux(189," se informar a propriedade "),wl(190,"code"),Ux(191,"optionsMulti"),ng(),Ux(192,"."),ng(),wl(193,"li"),Ux(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),wl(195,"code"),Ux(196,"po-select"),ng(),Ux(197," ou, "),wl(198,"code"),Ux(199,"po-multiselect"),ng(),Ux(200," se a propriedade "),wl(201,"code"),Ux(202,"optionsMulti"),ng(),Ux(203,`
for verdadeira.`),ng(),wl(204,"li"),Ux(205,"Caso o "),wl(206,"em"),Ux(207,"type"),ng(),Ux(208," informado seja "),wl(209,"em"),Ux(210,"date"),ng(),Ux(211," ou "),wl(212,"em"),Ux(213,"datetime"),ng(),Ux(214," o componente criado ser\xE1 o "),wl(215,"code"),Ux(216,"po-datepicker"),ng(),Ux(217,"."),ng(),wl(218,"li"),Ux(219,"Caso seja informado a propriedade "),wl(220,"code"),Ux(221,"optionsService"),ng(),Ux(222," o componente criado ser\xE1 o "),wl(223,"code"),Ux(224,"po-combo"),ng(),Ux(225,"."),ng(),wl(226,"li"),Ux(227,"Caso o "),wl(228,"em"),Ux(229,"type"),ng(),Ux(230," informado seja "),wl(231,"em"),Ux(232,"time"),ng(),Ux(233," o componente criado ser\xE1 um "),wl(234,"code"),Ux(235,"po-input"),ng(),Ux(236," podendo receber um "),wl(237,"em"),Ux(238,"mask"),ng(),Ux(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),wl(240,"em"),Ux(241,"mask"),ng(),Ux(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),ng(),wl(243,"li"),Ux(244,"Caso a lista possua a propriedade "),wl(245,"code"),Ux(246,"rows"),ng(),Ux(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),wl(248,"code"),Ux(249,"po-textarea"),ng(),Ux(250,", caso o valor da propriedade "),wl(251,"code"),Ux(252,"rows"),ng(),Ux(253," seja menor que 3 o componente criado ser\xE1 o "),wl(254,"code"),Ux(255,"po-input"),ng(),Ux(256,"."),ng(),wl(257,"li"),Ux(258,"Caso seja informada a propriedade "),wl(259,"code"),Ux(260,"secret"),ng(),Ux(261," o componente criado ser\xE1 o "),wl(262,"code"),Ux(263,"po-password"),ng(),Ux(264,"."),ng(),wl(265,"li"),Ux(266,"Caso o "),wl(267,"em"),Ux(268,"type"),ng(),Ux(269," informado seja "),wl(270,"em"),Ux(271,"string"),ng(),Ux(272," o componente criado ser\xE1 o "),wl(273,"code"),Ux(274,"po-input"),ng(),Ux(275,"."),wl(276,"blockquote")(277,"p"),Ux(278,"Ao alterar o valor das "),wl(279,"code"),Ux(280,"properties"),ng(),Ux(281,", visibilidade e/ou agrupamentos via container, os "),wl(282,"code"),Ux(283,"fields"),ng(),Ux(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),ng()()()()()(),wl(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),Ux(289," (p-form)"),Ul(290,"br"),ng()()(),wl(291,"td",17)(292,"code",25),Ux(293,"EventEmitter"),ng()(),wl(294,"td",19),Ux(295,"-"),ng(),wl(296,"td",20)(297,"em")(298,"strong"),Ux(299,"(opcional)"),ng()(),wl(300,"p"),Ux(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),ng(),wl(302,"p"),Ux(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),wl(304,"em"),Ux(305,"template reference"),ng(),Ux(306," e atrav\xE9s do "),wl(307,"em"),Ux(308,"output"),ng(),Ux(309,", veja os exemplos abaixo:"),ng(),wl(310,"blockquote")(311,"p")(312,"em"),Ux(313,"template reference"),ng()()(),wl(314,"pre")(315,"code",26),Ux(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),ng()(),wl(317,"blockquote")(318,"p")(319,"em"),Ux(320,"Output"),ng()()(),wl(321,"pre")(322,"code",26),Ux(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),ng()(),wl(324,"pre")(325,"code",27),Ux(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),ng()(),wl(327,"blockquote")(328,"p"),Ux(329,"Caso a propriedade "),wl(330,"code"),Ux(331,"p-group-form"),ng(),Ux(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),ng()()()(),wl(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),Ux(337," p-group-form"),Ul(338,"br"),ng()()(),wl(339,"td",17)(340,"code",28),Ux(341,"boolean"),ng()(),wl(342,"td",19),Ux(343,"-"),ng(),wl(344,"td",20)(345,"em")(346,"strong"),Ux(347,"(opcional)"),ng()(),wl(348,"p"),Ux(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),wl(350,"code"),Ux(351,"FormControl"),ng(),Ux(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),ng(),wl(353,"pre")(354,"code",26),Ux(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),ng()()()(),wl(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),Ux(360," p-load"),Ul(361,"br"),ng()()(),wl(362,"td",17)(363,"code",18),Ux(364,"string "),ng(),wl(365,"code",29),Ux(366," Function"),ng()(),wl(367,"td",19),Ux(368,"-"),ng(),wl(369,"td",20)(370,"em")(371,"strong"),Ux(372,"(opcional)"),ng()(),wl(373,"p"),Ux(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),ng(),wl(375,"p"),Ux(376,"A propriedade aceita os seguintes tipos:"),ng(),wl(377,"ul")(378,"li")(379,"code"),Ux(380,"string"),ng(),Ux(381,": "),wl(382,"em"),Ux(383,"Endpoint"),ng(),Ux(384," usado pelo componente para requisi\xE7\xE3o via "),wl(385,"code"),Ux(386,"POST"),ng(),Ux(387,"."),ng(),wl(388,"li")(389,"code"),Ux(390,"function"),ng(),Ux(391,": M\xE9todo que ser\xE1 executado."),ng()(),wl(392,"p"),Ux(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),wl(394,"code"),Ux(395,"p-value"),ng(),Ux(396,"."),ng(),wl(397,"p"),Ux(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),wl(399,"a",30),Ux(400,"PoDynamicFormLoad"),ng(),Ux(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),ng(),wl(402,"p"),Ux(403,"Por exemplo:"),ng(),wl(404,"pre")(405,"code"),Ux(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),ng()(),wl(407,"p"),Ux(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),wl(409,"code"),Ux(410,"bind"),ng(),Ux(411,", por exemplo:"),ng(),wl(412,"pre")(413,"code"),Ux(414,`[p-load]="onLoadFields.bind(this)"
`),ng()()()(),wl(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),Ux(419," p-validate"),Ul(420,"br"),ng()()(),wl(421,"td",17)(422,"code",18),Ux(423,"string "),ng(),wl(424,"code",29),Ux(425," Function"),ng()(),wl(426,"td",19),Ux(427,"-"),ng(),wl(428,"td",20)(429,"em")(430,"strong"),Ux(431,"(opcional)"),ng()(),wl(432,"p"),Ux(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),wl(434,"strong"),Ux(435,"mudan\xE7as do formul\xE1rio"),ng(),Ux(436,"."),ng(),wl(437,"p"),Ux(438,"A propriedade aceita os seguintes tipos:"),ng(),wl(439,"ul")(440,"li")(441,"code"),Ux(442,"string"),ng(),Ux(443,": "),wl(444,"em"),Ux(445,"Endpoint"),ng(),Ux(446," usado pelo componente para requisi\xE7\xE3o via "),wl(447,"code"),Ux(448,"POST"),ng(),Ux(449,"."),ng(),wl(450,"li")(451,"code"),Ux(452,"function"),ng(),Ux(453,": M\xE9todo que ser\xE1 executado."),ng()(),wl(454,"p"),Ux(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),wl(456,"code"),Ux(457,"PoDynamicFormFieldChanged"),ng()(),wl(458,"p"),Ux(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),wl(460,"a",31),Ux(461,"PoDynamicFormValidation"),ng(),Ux(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),ng(),wl(463,"pre")(464,"code"),Ux(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),ng()(),wl(466,"p"),Ux(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),wl(468,"code"),Ux(469,"bind"),ng(),Ux(470,", por exemplo:"),ng(),wl(471,"pre")(472,"code"),Ux(473,`[p-validate]="this.myFunction.bind(this)"
`),ng()(),wl(474,"blockquote")(475,"p"),Ux(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),wl(477,"code"),Ux(478,"p-validate-fields"),ng(),Ux(479,", a propriedade "),wl(480,"code"),Ux(481,"validate"),ng(),Ux(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),ng()()()(),wl(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),Ux(487," p-validate-fields"),Ul(488,"br"),ng()()(),wl(489,"td",17)(490,"code",32),Ux(491,"Array<string>"),ng()(),wl(492,"td",19),Ux(493,"-"),ng(),wl(494,"td",20)(495,"em")(496,"strong"),Ux(497,"(opcional)"),ng()(),wl(498,"p"),Ux(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),ng()()(),wl(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),Ux(504," p-validate-on-input"),Ul(505,"br"),ng()()(),wl(506,"td",17)(507,"code",28),Ux(508,"boolean"),ng()(),wl(509,"td",19),Ux(510,"-"),ng(),wl(511,"td",20)(512,"em")(513,"strong"),Ux(514,"(opcional)"),ng()(),wl(515,"p"),Ux(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),ng(),wl(517,"p"),Ux(518,"Pode ser aplicado nos seguintes componentes:"),ng(),wl(519,"ul")(520,"li"),Ux(521,"po-input"),ng(),wl(522,"li"),Ux(523,"po-number"),ng(),wl(524,"li"),Ux(525,"po-decimal"),ng(),wl(526,"li"),Ux(527,"po-textarea"),ng(),wl(528,"li"),Ux(529,"po-password"),ng()(),wl(530,"p"),Ux(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),wl(532,"code"),Ux(533,"p-validate-fields"),ng(),Ux(534,"."),ng()()(),wl(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),Ux(539," p-value"),Ul(540,"br"),ng()()(),wl(541,"td",17)(542,"code",33),Ux(543,"any"),ng()(),wl(544,"td",19),Ux(545,"-"),ng(),wl(546,"td",20)(547,"p"),Ux(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),wl(549,"em"),Ux(550,"property"),ng(),Ux(551,`
dos objetos contidos na propridade `),wl(552,"code"),Ux(553,"p-fields"),ng(),Ux(554,"."),ng(),wl(555,"p"),Ux(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),ng(),wl(557,"blockquote")(558,"p"),Ux(559,"Ex: "),wl(560,"code"),Ux(561,"{ name: 'po' }"),ng()()()()()(),wl(562,"h3",9),Ux(563,"M\xE9todos"),ng(),wl(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),Ux(570," focus "),ng()()()()(),wl(571,"tr",20)(572,"td",20)(573,"p"),Ux(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),ng(),wl(575,"p"),Ux(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),wl(577,"code"),Ux(578,"dynamic form"),ng(),Ux(579,", como por exemplo:"),ng(),wl(580,"pre")(581,"code",26),Ux(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),ng()(),wl(583,"pre")(584,"code",36),Ux(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),ng()()()()(),wl(586,"h5")(587,"b"),Ux(588,"Par\xE2metros"),ng()(),wl(589,"table",10)(590,"tr",11)(591,"th",12),Ux(592,"Nome"),ng(),wl(593,"th",12),Ux(594,"Tipo"),ng(),wl(595,"th",12),Ux(596,"Descri\xE7\xE3o"),ng()(),wl(597,"tr",13)(598,"td",14),Ux(599," property"),ng(),wl(600,"td",17)(601,"code",37),Ux(602," string "),ng()(),wl(603,"td",20)(604,"p"),Ux(605,"Nome da propriedade atribu\xEDda ao "),wl(606,"code"),Ux(607,"PoDynamicFormField.property"),ng(),Ux(608,"."),ng()()()(),Ul(609,"br"),wl(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),Ux(616," showAdditionalHelp "),ng()()()()(),wl(617,"tr",20)(618,"td",20)(619,"p"),Ux(620,"M\xE9todo que exibe "),wl(621,"code"),Ux(622,"p-helper"),ng(),Ux(623," ou executa a a\xE7\xE3o definida em "),wl(624,"code"),Ux(625,"p-helper{eventOnClick}"),ng(),Ux(626," ou em "),wl(627,"code"),Ux(628,"p-additionalHelp"),ng(),Ux(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(630,"code"),Ux(631,"keydown"),ng(),Ux(632,"."),ng(),wl(633,"pre")(634,"code"),Ux(635,`import { PoDynamicModule } from '@po-ui/ng-components';
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
`),ng()()()()(),wl(636,"h5")(637,"b"),Ux(638,"Par\xE2metros"),ng()(),wl(639,"table",10)(640,"tr",11)(641,"th",12),Ux(642,"Nome"),ng(),wl(643,"th",12),Ux(644,"Tipo"),ng(),wl(645,"th",12),Ux(646,"Descri\xE7\xE3o"),ng()(),wl(647,"tr",13)(648,"td",14),Ux(649," property"),ng(),wl(650,"td",17)(651,"code",37),Ux(652," string "),ng()(),wl(653,"td",20)(654,"p"),Ux(655,"Identificador da coluna."),ng()()()(),Ul(656,"br"),wl(657,"h3"),Ux(658,"Interfaces"),ng(),wl(659,"h4",38)(660,"code",5),Ux(661,"PoDynamicFormField"),ng()(),wl(662,"div",2)(663,"p"),Ux(664," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),ng()(),wl(665,"h4",9),Ux(666,"Propriedades"),ng(),wl(667,"table",10)(668,"tr",11)(669,"th",12),Ux(670,"Nome"),ng(),wl(671,"th",12),Ux(672,"Tipo"),ng(),wl(673,"th",12),Ux(674,"Descri\xE7\xE3o"),ng()(),wl(675,"tr",13)(676,"td",14)(677,"div",15)(678,"span",16),Ux(679," additionalHelp"),Ul(680,"br"),ng()()(),wl(681,"td",17)(682,"code",29),Ux(683,"Function"),ng()(),wl(684,"td",20)(685,"em")(686,"strong"),Ux(687,"(opcional)"),ng()(),wl(688,"p"),Ux(689,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(690,"blockquote")(691,"p"),Ux(692,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),ng()()()(),wl(693,"tr",13)(694,"td",14)(695,"div",15)(696,"span",16),Ux(697," additionalHelpTooltip"),Ul(698,"br"),ng()()(),wl(699,"td",17)(700,"code",18),Ux(701,"string"),ng()(),wl(702,"td",20)(703,"em")(704,"strong"),Ux(705,"(opcional)"),ng()(),wl(706,"p"),Ux(707,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(708,"code"),Ux(709,"po-helper"),ng(),Ux(710,`.
`),wl(711,"strong"),Ux(712,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(713,"blockquote")(714,"p"),Ux(715,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),ng()()()(),wl(716,"tr",13)(717,"td",14)(718,"div",15)(719,"span",16),Ux(720," advancedFilters"),Ul(721,"br"),ng()()(),wl(722,"td",17)(723,"code",39),Ux(724,"Array<PoLookupAdvancedFilter>"),ng()(),wl(725,"td",20)(726,"em")(727,"strong"),Ux(728,"(opcional)"),ng()(),wl(729,"p"),Ux(730,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),ng(),wl(731,"blockquote")(732,"p"),Ux(733,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),ng()(),wl(734,"p"),Ux(735,"Exemplo de URL com busca avan\xE7ada:"),ng(),wl(736,"p")(737,"code"),Ux(738,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),ng()(),wl(739,"p"),Ux(740,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),ng(),wl(741,"p")(742,"code"),Ux(743,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),ng()()()(),wl(744,"tr",13)(745,"td",14)(746,"div",15)(747,"span",16),Ux(748," appendBox"),Ul(749,"br"),ng()()(),wl(750,"td",17)(751,"code",28),Ux(752,"boolean"),ng()(),wl(753,"td",20)(754,"em")(755,"strong"),Ux(756,"(opcional)"),ng()(),wl(757,"p"),Ux(758,"Define que o "),wl(759,"code"),Ux(760,"listbox"),ng(),Ux(761," e/ou popover ("),wl(762,"code"),Ux(763,"p-helper"),ng(),Ux(764," e/ou "),wl(765,"code"),Ux(766,"p-error-limit"),ng(),Ux(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ng(),wl(768,"blockquote")(769,"p"),Ux(770,"Quando utilizado com "),wl(771,"code"),Ux(772,"p-helper"),ng(),Ux(773,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(774,"tr",13)(775,"td",14)(776,"div",15)(777,"span",16),Ux(778," autoHeight"),Ul(779,"br"),ng()()(),wl(780,"td",17)(781,"code",28),Ux(782,"boolean"),ng()(),wl(783,"td",20)(784,"em")(785,"strong"),Ux(786,"(opcional)"),ng()(),wl(787,"p"),Ux(788,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),ng(),wl(789,"p")(790,"strong"),Ux(791,"Componentes compat\xEDveis:"),ng(),wl(792,"code"),Ux(793,"po-multiselect"),ng(),Ux(794,", "),wl(795,"code"),Ux(796,"po-lookup"),ng(),Ux(797,"."),ng()()(),wl(798,"tr",13)(799,"td",14)(800,"div",15)(801,"span",16),Ux(802," autoUpload"),Ul(803,"br"),ng()()(),wl(804,"td",17)(805,"code",28),Ux(806,"boolean"),ng()(),wl(807,"td",20)(808,"em")(809,"strong"),Ux(810,"(opcional)"),ng()(),wl(811,"p"),Ux(812,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),ng(),wl(813,"p")(814,"strong"),Ux(815,"Componente compat\xEDvel"),ng(),Ux(816,": "),wl(817,"code"),Ux(818,"po-upload"),ng()()()(),wl(819,"tr",13)(820,"td",14)(821,"div",15)(822,"span",16),Ux(823," booleanFalse"),Ul(824,"br"),ng()()(),wl(825,"td",17)(826,"code",18),Ux(827,"string"),ng()(),wl(828,"td",20)(829,"em")(830,"strong"),Ux(831,"(opcional)"),ng()(),wl(832,"p"),Ux(833,"Texto exibido quando o valor do componente for "),wl(834,"em"),Ux(835,"false"),ng(),Ux(836,"."),ng()()(),wl(837,"tr",13)(838,"td",14)(839,"div",15)(840,"span",16),Ux(841," booleanTrue"),Ul(842,"br"),ng()()(),wl(843,"td",17)(844,"code",18),Ux(845,"string"),ng()(),wl(846,"td",20)(847,"em")(848,"strong"),Ux(849,"(opcional)"),ng()(),wl(850,"p"),Ux(851,"Texto exibido quando o valor do componente for "),wl(852,"em"),Ux(853,"true"),ng(),Ux(854,"."),ng()()(),wl(855,"tr",13)(856,"td",14)(857,"div",15)(858,"span",16),Ux(859," changeOnEnter"),Ul(860,"br"),ng()()(),wl(861,"td",17)(862,"code",28),Ux(863,"boolean"),ng()(),wl(864,"td",20)(865,"em")(866,"strong"),Ux(867,"(opcional)"),ng()(),wl(868,"p"),Ux(869,"Indica que o evento "),wl(870,"code"),Ux(871,"p-change"),ng(),Ux(872,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),wl(873,"code"),Ux(874,"po-combo"),ng(),Ux(875,"."),ng()()(),wl(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),Ux(880," changeVisibleColumns"),Ul(881,"br"),ng()()(),wl(882,"td",17)(883,"code",29),Ux(884,"Function"),ng()(),wl(885,"td",20)(886,"em")(887,"strong"),Ux(888,"(opcional)"),ng()(),wl(889,"p"),Ux(890,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),ng(),wl(891,"p"),Ux(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ng(),wl(893,"p")(894,"strong"),Ux(895,"Componente compat\xEDvel"),ng(),Ux(896,": "),wl(897,"code"),Ux(898,"po-lookup"),ng()()()(),wl(899,"tr",13)(900,"td",14)(901,"div",15)(902,"span",16),Ux(903," clean"),Ul(904,"br"),ng()()(),wl(905,"td",17)(906,"code",28),Ux(907,"boolean"),ng()(),wl(908,"td",20)(909,"em")(910,"strong"),Ux(911,"(opcional)"),ng()(),wl(912,"p"),Ux(913,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),ng(),wl(914,"p")(915,"strong"),Ux(916,"Componentes compat\xEDveis:"),ng(),wl(917,"code"),Ux(918,"po-datepicker"),ng(),Ux(919,", "),wl(920,"code"),Ux(921,"po-datepicker-range"),ng(),Ux(922,", "),wl(923,"code"),Ux(924,"po-input"),ng(),Ux(925,", "),wl(926,"code"),Ux(927,"po-number"),ng(),Ux(928,", "),wl(929,"code"),Ux(930,"po-decimal"),ng(),Ux(931,`,
`),wl(932,"code"),Ux(933,"po-combo"),ng(),Ux(934,", "),wl(935,"code"),Ux(936,"po-lookup"),ng(),Ux(937,", "),wl(938,"code"),Ux(939,"po-password"),ng(),Ux(940,", "),wl(941,"code"),Ux(942,"po-timepicker"),ng(),Ux(943,"."),ng()()(),wl(944,"tr",13)(945,"td",14)(946,"div",15)(947,"span",16),Ux(948," columnRestoreManager"),Ul(949,"br"),ng()()(),wl(950,"td",17)(951,"code",29),Ux(952,"Function"),ng()(),wl(953,"td",20)(954,"em")(955,"strong"),Ux(956,"(opcional)"),ng()(),wl(957,"p"),Ux(958,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),ng(),wl(959,"p"),Ux(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),ng(),wl(961,"p")(962,"strong"),Ux(963,"Componente compat\xEDvel"),ng(),Ux(964,": "),wl(965,"code"),Ux(966,"po-lookup"),ng()()()(),wl(967,"tr",13)(968,"td",14)(969,"div",15)(970,"span",16),Ux(971," columns"),Ul(972,"br"),ng()()(),wl(973,"td",17)(974,"code",40),Ux(975,"Array<PoLookupColumn> "),ng(),wl(976,"code",41),Ux(977," number"),ng()(),wl(978,"td",20)(979,"em")(980,"strong"),Ux(981,"(opcional)"),ng()(),wl(982,"p"),Ux(983,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),wl(984,"code"),Ux(985,"searchService"),ng(),Ux(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),wl(987,"a",42)(988,"code"),Ux(989,"PoLookupColumn"),ng()(),Ux(990,"."),ng(),wl(991,"blockquote")(992,"p"),Ux(993,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),wl(994,"em"),Ux(995,"label"),ng(),Ux(996," e "),wl(997,"em"),Ux(998,"value"),ng(),Ux(999,` para valores
de tela e do model respectivamente.`),ng()(),wl(1e3,"p")(1001,"strong"),Ux(1002,"Componentes compat\xEDveis:"),ng(),wl(1003,"code"),Ux(1004,"po-radio-group"),ng(),Ux(1005,", "),wl(1006,"code"),Ux(1007,"po-lookup"),ng(),Ux(1008,", "),wl(1009,"code"),Ux(1010,"po-checkbox-group"),ng(),Ux(1011,"."),ng()()(),wl(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),Ux(1016," compactLabel"),Ul(1017,"br"),ng()()(),wl(1018,"td",17)(1019,"code",28),Ux(1020,"boolean"),ng()(),wl(1021,"td",20)(1022,"em")(1023,"strong"),Ux(1024,"(opcional)"),ng()(),wl(1025,"p"),Ux(1026,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(1027,"p"),Ux(1028,"Quando habilitado ("),wl(1029,"code"),Ux(1030,"true"),ng(),Ux(1031,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(1032,"ul")(1033,"li")(1034,"code"),Ux(1035,"po-label"),ng()(),wl(1036,"li")(1037,"code"),Ux(1038,"p-requirement (showRequired)"),ng()(),wl(1039,"li")(1040,"code"),Ux(1041,"po-helper"),ng()()(),wl(1042,"p"),Ux(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(1044,"p"),Ux(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(1046,"ul")(1047,"li")(1048,"code"),Ux(1049,"--field-container-title-justify"),ng()(),wl(1050,"li")(1051,"code"),Ux(1052,"--field-container-title-flex"),ng()()(),wl(1053,"p"),Ux(1054,"Exemplo:"),ng(),wl(1055,"pre")(1056,"code"),Ux(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(1058,"p"),Ux(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(1060,"tr",13)(1061,"td",14)(1062,"div",15)(1063,"span",16),Ux(1064," container"),Ul(1065,"br"),ng()()(),wl(1066,"td",17)(1067,"code",18),Ux(1068,"string"),ng()(),wl(1069,"td",20)(1070,"em")(1071,"strong"),Ux(1072,"(opcional)"),ng()(),wl(1073,"p"),Ux(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),ng(),wl(1075,"p"),Ux(1076,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),ng()()(),wl(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),Ux(1081," customAction"),Ul(1082,"br"),ng()()(),wl(1083,"td",17)(1084,"code",43),Ux(1085,"PoProgressAction"),ng()(),wl(1086,"td",20)(1087,"em")(1088,"strong"),Ux(1089,"(opcional)"),ng()(),wl(1090,"p"),Ux(1091,"Define uma a\xE7\xE3o personalizada no componente "),wl(1092,"code"),Ux(1093,"po-upload"),ng(),Ux(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),ng(),wl(1095,"p")(1096,"strong"),Ux(1097,"Componente compat\xEDvel"),ng(),Ux(1098,": "),wl(1099,"code"),Ux(1100,"po-upload"),ng(),Ux(1101,","),ng(),wl(1102,"p")(1103,"strong"),Ux(1104,"Exemplo de configura\xE7\xE3o"),ng(),Ux(1105,":"),ng(),wl(1106,"pre")(1107,"code",44),Ux(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),ng()()()(),wl(1109,"tr",13)(1110,"td",14)(1111,"div",15)(1112,"span",16),Ux(1113," customActionClick"),Ul(1114,"br"),ng()()(),wl(1115,"td",17)(1116,"code",45),Ux(1117,"(file: PoUploadFile) => void"),ng()(),wl(1118,"td",20)(1119,"em")(1120,"strong"),Ux(1121,"(opcional)"),ng()(),wl(1122,"p"),Ux(1123,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),wl(1124,"code"),Ux(1125,"p-custom-action"),ng(),Ux(1126,"."),ng(),wl(1127,"p")(1128,"strong"),Ux(1129,"Componente compat\xEDvel"),ng(),Ux(1130,": "),wl(1131,"code"),Ux(1132,"po-upload"),ng(),Ux(1133,","),ng(),wl(1134,"p"),Ux(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),ng(),wl(1136,"p")(1137,"strong"),Ux(1138,"Par\xE2metro do evento"),ng(),Ux(1139,":"),ng(),wl(1140,"ul")(1141,"li")(1142,"code"),Ux(1143,"file"),ng(),Ux(1144,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),wl(1145,"code"),Ux(1146,"PoUploadFile"),ng(),Ux(1147," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),ng()(),wl(1148,"p")(1149,"strong"),Ux(1150,"Exemplo de uso"),ng(),Ux(1151,":"),ng(),wl(1152,"pre")(1153,"code",44),Ux(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),ng()()()(),wl(1155,"tr",13)(1156,"td",14)(1157,"div",15)(1158,"span",16),Ux(1159," debounceTime"),Ul(1160,"br"),ng()()(),wl(1161,"td",17)(1162,"code",41),Ux(1163,"number"),ng()(),wl(1164,"td",20)(1165,"em")(1166,"strong"),Ux(1167,"(opcional)"),ng()(),wl(1168,"p"),Ux(1169,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),wl(1170,"code"),Ux(1171,"p-filter-service"),ng(),Ux(1172,")."),ng(),wl(1173,"p")(1174,"strong"),Ux(1175,"Componentes compat\xEDveis:"),ng(),wl(1176,"code"),Ux(1177,"po-combo"),ng(),Ux(1178,", "),wl(1179,"code"),Ux(1180,"po-multiselect"),ng(),Ux(1181,"."),ng()()(),wl(1182,"tr",13)(1183,"td",14)(1184,"div",15)(1185,"span",16),Ux(1186," decimalsLength"),Ul(1187,"br"),ng()()(),wl(1188,"td",17)(1189,"code",41),Ux(1190,"number"),ng()(),wl(1191,"td",20)(1192,"em")(1193,"strong"),Ux(1194,"(opcional)"),ng()(),wl(1195,"p"),Ux(1196,"Quantidade m\xE1xima de casas decimais."),ng(),wl(1197,"blockquote")(1198,"p"),Ux(1199,"Esta propriedade s\xF3 pode ser utilizada quando o "),wl(1200,"code"),Ux(1201,"type"),ng(),Ux(1202," for "),wl(1203,"em"),Ux(1204,"currency"),ng(),Ux(1205," ou "),wl(1206,"em"),Ux(1207,"decimal"),ng(),Ux(1208,"."),ng()()()(),wl(1209,"tr",13)(1210,"td",14)(1211,"div",15)(1212,"span",16),Ux(1213," directory"),Ul(1214,"br"),ng()()(),wl(1215,"td",17)(1216,"code",28),Ux(1217,"boolean"),ng()(),wl(1218,"td",20)(1219,"em")(1220,"strong"),Ux(1221,"(opcional)"),ng()(),wl(1222,"p"),Ux(1223,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),ng(),wl(1224,"blockquote")(1225,"p"),Ux(1226,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),ng()(),wl(1227,"blockquote")(1228,"p"),Ux(1229,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),wl(1230,"strong"),Ux(1231,"Internet Explorer"),ng(),Ux(1232,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),ng()(),wl(1233,"p")(1234,"strong"),Ux(1235,"Componente compat\xEDvel"),ng(),Ux(1236,": "),wl(1237,"code"),Ux(1238,"po-upload"),ng()()()(),wl(1239,"tr",13)(1240,"td",14)(1241,"div",15)(1242,"span",16),Ux(1243," disabled"),Ul(1244,"br"),ng()()(),wl(1245,"td",17)(1246,"code",28),Ux(1247,"boolean"),ng()(),wl(1248,"td",20)(1249,"em")(1250,"strong"),Ux(1251,"(opcional)"),ng()(),wl(1252,"p"),Ux(1253,"Desabilita o campo caso informar o valor "),wl(1254,"em"),Ux(1255,"true"),ng(),Ux(1256,"."),ng()()(),wl(1257,"tr",13)(1258,"td",14)(1259,"div",15)(1260,"span",16),Ux(1261," disabledInitFilter"),Ul(1262,"br"),ng()()(),wl(1263,"td",17)(1264,"code",28),Ux(1265,"boolean"),ng()(),wl(1266,"td",20)(1267,"em")(1268,"strong"),Ux(1269,"(opcional)"),ng()(),wl(1270,"p"),Ux(1271,"Desabilita o filtro inicial no servi\xE7o do "),wl(1272,"code"),Ux(1273,"po-combo"),ng(),Ux(1274,", que \xE9 executado no primeiro clique no campo."),ng()()(),wl(1275,"tr",13)(1276,"td",14)(1277,"div",15)(1278,"span",16),Ux(1279," disabledTabFilter"),Ul(1280,"br"),ng()()(),wl(1281,"td",17)(1282,"code",28),Ux(1283,"boolean"),ng()(),wl(1284,"td",20)(1285,"em")(1286,"strong"),Ux(1287,"(opcional)"),ng()(),wl(1288,"p"),Ux(1289,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),wl(1290,"code"),Ux(1291,"po-combo"),ng(),Ux(1292,"."),ng()()(),wl(1293,"tr",13)(1294,"td",14)(1295,"div",15)(1296,"span",16),Ux(1297," divider"),Ul(1298,"br"),ng()()(),wl(1299,"td",17)(1300,"code",18),Ux(1301,"string"),ng()(),wl(1302,"td",20)(1303,"em")(1304,"strong"),Ux(1305,"(opcional)"),ng()(),wl(1306,"p"),Ux(1307,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),ng()()(),wl(1308,"tr",13)(1309,"td",14)(1310,"div",15)(1311,"span",16),Ux(1312," dragDrop"),Ul(1313,"br"),ng()()(),wl(1314,"td",17)(1315,"code",28),Ux(1316,"boolean"),ng()(),wl(1317,"td",20)(1318,"em")(1319,"strong"),Ux(1320,"(opcional)"),ng()(),wl(1321,"p"),Ux(1322,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),ng(),wl(1323,"blockquote")(1324,"p"),Ux(1325,"Recomendamos utilizar apenas um "),wl(1326,"code"),Ux(1327,"po-upload"),ng(),Ux(1328," com esta funcionalidade por tela."),ng()(),wl(1329,"p")(1330,"strong"),Ux(1331,"Componente compat\xEDvel"),ng(),Ux(1332,": "),wl(1333,"code"),Ux(1334,"po-upload"),ng()()()(),wl(1335,"tr",13)(1336,"td",14)(1337,"div",15)(1338,"span",16),Ux(1339," dragDropHeight"),Ul(1340,"br"),ng()()(),wl(1341,"td",17)(1342,"code",41),Ux(1343,"number"),ng()(),wl(1344,"td",20)(1345,"em")(1346,"strong"),Ux(1347,"(opcional)"),ng()(),wl(1348,"p"),Ux(1349,"Define em "),wl(1350,"em"),Ux(1351,"pixels"),ng(),Ux(1352," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),wl(1353,"code"),Ux(1354,"160px"),ng(),Ux(1355,"."),ng(),wl(1356,"blockquote")(1357,"p"),Ux(1358,"Esta propriedade funciona somente se a propriedade "),wl(1359,"code"),Ux(1360,"p-drag-drop"),ng(),Ux(1361," estiver habilitada."),ng()(),wl(1362,"p")(1363,"strong"),Ux(1364,"Componente compat\xEDvel"),ng(),Ux(1365,": "),wl(1366,"code"),Ux(1367,"po-upload"),ng()()()(),wl(1368,"tr",13)(1369,"td",14)(1370,"div",15)(1371,"span",16),Ux(1372," errorAsyncFunction"),Ul(1373,"br"),ng()()(),wl(1374,"td",17)(1375,"code",46),Ux(1376,"(value) => Observable<boolean>"),ng()(),wl(1377,"td",20)(1378,"em")(1379,"strong"),Ux(1380,"(opcional)"),ng()(),wl(1381,"p"),Ux(1382,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),wl(1383,"code"),Ux(1384,"change"),ng(),Ux(1385," ou "),wl(1386,"code"),Ux(1387,"change-model"),ng(),Ux(1388,", dependendo do valor da propriedade "),wl(1389,"code"),Ux(1390,"triggerMode"),ng(),Ux(1391,"."),ng(),wl(1392,"blockquote")(1393,"p"),Ux(1394,"Retorna "),wl(1395,"code"),Ux(1396,"Observable com o valor true"),ng(),Ux(1397," para sinalizar o erro "),wl(1398,"code"),Ux(1399,"false"),ng(),Ux(1400," para indicar que n\xE3o h\xE1 erro."),ng()(),wl(1401,"p")(1402,"strong"),Ux(1403,"Componente compat\xEDvel"),ng(),Ux(1404,": "),wl(1405,"code"),Ux(1406,"po-datepicker"),ng()()()(),wl(1407,"tr",13)(1408,"td",14)(1409,"div",15)(1410,"span",16),Ux(1411," errorAsyncProperties"),Ul(1412,"br"),ng()()(),wl(1413,"td",17)(1414,"code",47),Ux(1415,"ErrorAsyncProperties"),ng()(),wl(1416,"td",20)(1417,"em")(1418,"strong"),Ux(1419,"(opcional)"),ng()(),wl(1420,"p"),Ux(1421,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),ng(),wl(1422,"p")(1423,"strong"),Ux(1424,"Componentes compat\xEDveis:"),ng(),wl(1425,"code"),Ux(1426,"po-input"),ng(),Ux(1427,", "),wl(1428,"code"),Ux(1429,"po-number"),ng(),Ux(1430,", "),wl(1431,"code"),Ux(1432,"po-decimal"),ng(),Ux(1433,", "),wl(1434,"code"),Ux(1435,"po-password"),ng(),Ux(1436,"."),ng()()(),wl(1437,"tr",13)(1438,"td",14)(1439,"div",15)(1440,"span",16),Ux(1441," errorLimit"),Ul(1442,"br"),ng()()(),wl(1443,"td",17)(1444,"code",28),Ux(1445,"boolean"),ng()(),wl(1446,"td",20)(1447,"em")(1448,"strong"),Ux(1449,"(opcional)"),ng()(),wl(1450,"p"),Ux(1451,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(1452,"blockquote")(1453,"p"),Ux(1454,"Caso essa propriedade seja definida como "),wl(1455,"code"),Ux(1456,"true"),ng(),Ux(1457,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()(),wl(1458,"p")(1459,"strong"),Ux(1460,"Componentes compat\xEDveis:"),ng(),wl(1461,"code"),Ux(1462,"po-checkbox-group"),ng(),Ux(1463,", "),wl(1464,"code"),Ux(1465,"po-combo"),ng(),Ux(1466,", "),wl(1467,"code"),Ux(1468,"po-datepicker"),ng(),Ux(1469,", "),wl(1470,"code"),Ux(1471,"po-datepicker-range"),ng(),Ux(1472,", "),wl(1473,"code"),Ux(1474,"po-decimal"),ng(),Ux(1475,", "),wl(1476,"code"),Ux(1477,"po-input"),ng(),Ux(1478,", "),wl(1479,"code"),Ux(1480,"po-lookup"),ng(),Ux(1481,", "),wl(1482,"code"),Ux(1483,"po-multiselect"),ng(),Ux(1484,", "),wl(1485,"code"),Ux(1486,"po-number"),ng(),Ux(1487,", "),wl(1488,"code"),Ux(1489,"po-password"),ng(),Ux(1490,", "),wl(1491,"code"),Ux(1492,"po-radio-group"),ng(),Ux(1493,", "),wl(1494,"code"),Ux(1495,"po-select"),ng(),Ux(1496,`,
`),wl(1497,"code"),Ux(1498,"po-switch"),ng(),Ux(1499,", "),wl(1500,"code"),Ux(1501,"po-textarea"),ng(),Ux(1502,", "),wl(1503,"code"),Ux(1504,"po-timepicker"),ng(),Ux(1505,"."),ng()()(),wl(1506,"tr",13)(1507,"td",14)(1508,"div",15)(1509,"span",16),Ux(1510," errorMessage"),Ul(1511,"br"),ng()()(),wl(1512,"td",17)(1513,"code",18),Ux(1514,"string"),ng()(),wl(1515,"td",20)(1516,"em")(1517,"strong"),Ux(1518,"(opcional)"),ng()(),wl(1519,"p"),Ux(1520,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),ng(),wl(1521,"p"),Ux(1522,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),ng(),wl(1523,"ul")(1524,"li"),Ux(1525,"pattern;"),ng(),wl(1526,"li"),Ux(1527,"minValue;"),ng(),wl(1528,"li"),Ux(1529,"maxValue;"),ng(),wl(1530,"li"),Ux(1531,"required;"),ng()(),wl(1532,"blockquote")(1533,"p"),Ux(1534,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),wl(1535,"code"),Ux(1536,"po-datepicker"),ng(),Ux(1537,", "),wl(1538,"code"),Ux(1539,"po-input"),ng(),Ux(1540,", "),wl(1541,"code"),Ux(1542,"po-number"),ng(),Ux(1543,", "),wl(1544,"code"),Ux(1545,"po-decimal"),ng(),Ux(1546,", "),wl(1547,"code"),Ux(1548,"po-password"),ng(),Ux(1549,", "),wl(1550,"code"),Ux(1551,"po-timepicker"),ng(),Ux(1552,`, \xE9 necess\xE1rio que a propriedade
`),wl(1553,"code"),Ux(1554,"requiredFieldErrorMessage"),ng(),Ux(1555," esteja como "),wl(1556,"code"),Ux(1557,"true"),ng(),Ux(1558,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),wl(1559,"code"),Ux(1560,"po-datepicker-range"),ng(),Ux(1561,", "),wl(1562,"code"),Ux(1563,"po-select"),ng(),Ux(1564,", "),wl(1565,"code"),Ux(1566,"po-checkbox-group"),ng(),Ux(1567,", "),wl(1568,"code"),Ux(1569,"po-radio-group"),ng(),Ux(1570,", "),wl(1571,"code"),Ux(1572,"po-multiselect"),ng(),Ux(1573,", "),wl(1574,"code"),Ux(1575,"po-combo"),ng(),Ux(1576,`,
`),wl(1577,"code"),Ux(1578,"po-lookup"),ng(),Ux(1579," e "),wl(1580,"code"),Ux(1581,"po-textarea"),ng(),Ux(1582," n\xE3o \xE9 necess\xE1rio passar a propriedade "),wl(1583,"code"),Ux(1584,"requiredFieldErrorMessage"),ng(),Ux(1585,"."),ng()(),wl(1586,"p")(1587,"strong"),Ux(1588,"Componentes compat\xEDveis:"),ng(),wl(1589,"code"),Ux(1590,"po-checkbox-group"),ng(),Ux(1591,", "),wl(1592,"code"),Ux(1593,"po-combo"),ng(),Ux(1594,", "),wl(1595,"code"),Ux(1596,"po-datepicker"),ng(),Ux(1597,", "),wl(1598,"code"),Ux(1599,"po-datepicker-range"),ng(),Ux(1600,", "),wl(1601,"code"),Ux(1602,"po-decimal"),ng(),Ux(1603,", "),wl(1604,"code"),Ux(1605,"po-input"),ng(),Ux(1606,", "),wl(1607,"code"),Ux(1608,"po-lookup"),ng(),Ux(1609,", "),wl(1610,"code"),Ux(1611,"po-multiselect"),ng(),Ux(1612,", "),wl(1613,"code"),Ux(1614,"po-number"),ng(),Ux(1615,", "),wl(1616,"code"),Ux(1617,"po-password"),ng(),Ux(1618,", "),wl(1619,"code"),Ux(1620,"po-radio-group"),ng(),Ux(1621,", "),wl(1622,"code"),Ux(1623,"po-select"),ng(),Ux(1624,`,
`),wl(1625,"code"),Ux(1626,"po-switch"),ng(),Ux(1627,", "),wl(1628,"code"),Ux(1629,"po-textarea"),ng(),Ux(1630,", "),wl(1631,"code"),Ux(1632,"po-timepicker"),ng(),Ux(1633,"."),ng()()(),wl(1634,"tr",13)(1635,"td",14)(1636,"div",15)(1637,"span",16),Ux(1638," fieldLabel"),Ul(1639,"br"),ng()()(),wl(1640,"td",17)(1641,"code",18),Ux(1642,"string"),ng()(),wl(1643,"td",20)(1644,"em")(1645,"strong"),Ux(1646,"(opcional)"),ng()(),wl(1647,"p"),Ux(1648,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),ng(),wl(1649,"p"),Ux(1650,"O valor padr\xE3o \xE9: "),wl(1651,"code"),Ux(1652,"label"),ng(),Ux(1653,"."),ng(),wl(1654,"blockquote")(1655,"p"),Ux(1656,"Esta propriedade pode ser utilizada em conjunto com: "),wl(1657,"code"),Ux(1658,"options"),ng(),Ux(1659,", "),wl(1660,"code"),Ux(1661,"optionsService"),ng(),Ux(1662," e "),wl(1663,"code"),Ux(1664,"searchService"),ng(),Ux(1665,"."),ng()()()(),wl(1666,"tr",13)(1667,"td",14)(1668,"div",15)(1669,"span",16),Ux(1670," fieldValue"),Ul(1671,"br"),ng()()(),wl(1672,"td",17)(1673,"code",18),Ux(1674,"string"),ng()(),wl(1675,"td",20)(1676,"em")(1677,"strong"),Ux(1678,"(opcional)"),ng()(),wl(1679,"p"),Ux(1680,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),ng(),wl(1681,"p"),Ux(1682,"O valor padr\xE3o \xE9: "),wl(1683,"code"),Ux(1684,"value"),ng(),Ux(1685,"."),ng(),wl(1686,"blockquote")(1687,"p"),Ux(1688,"Esta propriedade pode ser utilizada em conjunto com: "),wl(1689,"code"),Ux(1690,"options"),ng(),Ux(1691,", "),wl(1692,"code"),Ux(1693,"optionsService"),ng(),Ux(1694," e "),wl(1695,"code"),Ux(1696,"searchService"),ng(),Ux(1697,"."),ng()()()(),wl(1698,"tr",13)(1699,"td",14)(1700,"div",15)(1701,"span",16),Ux(1702," filterMinlength"),Ul(1703,"br"),ng()()(),wl(1704,"td",17)(1705,"code",41),Ux(1706,"number"),ng()(),wl(1707,"td",20)(1708,"em")(1709,"strong"),Ux(1710,"(opcional)"),ng()(),wl(1711,"p"),Ux(1712,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),wl(1713,"code"),Ux(1714,"po-combo"),ng(),Ux(1715,"."),ng()()(),wl(1716,"tr",13)(1717,"td",14)(1718,"div",15)(1719,"span",16),Ux(1720," filterMode"),Ul(1721,"br"),ng()()(),wl(1722,"td",17)(1723,"code",48),Ux(1724,"PoMultiselectFilterMode"),ng()(),wl(1725,"td",20)(1726,"em")(1727,"strong"),Ux(1728,"(opcional)"),ng()(),wl(1729,"p"),Ux(1730,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),wl(1731,"code"),Ux(1732,"startsWith"),ng(),Ux(1733,", "),wl(1734,"code"),Ux(1735,"contains"),ng(),Ux(1736," ou "),wl(1737,"code"),Ux(1738,"endsWith"),ng(),Ux(1739,"."),ng(),wl(1740,"blockquote")(1741,"p"),Ux(1742,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),ng()(),wl(1743,"p")(1744,"strong"),Ux(1745,"Componente compat\xEDvel:"),ng(),wl(1746,"code"),Ux(1747,"po-multiselect"),ng(),Ux(1748,"."),ng()()(),wl(1749,"tr",13)(1750,"td",14)(1751,"div",15)(1752,"span",16),Ux(1753," forceBooleanComponentType"),Ul(1754,"br"),ng()()(),wl(1755,"td",17)(1756,"code",49),Ux(1757,"ForceBooleanComponentEnum"),ng()(),wl(1758,"td",20)(1759,"em")(1760,"strong"),Ux(1761,"(opcional)"),ng()(),wl(1762,"p"),Ux(1763,"Valores aceitos:"),ng(),wl(1764,"ul")(1765,"li"),Ux(1766,"ForceBooleanComponentEnum.switch"),ng(),wl(1767,"li"),Ux(1768,"ForceBooleanComponentEnum.checkbox"),ng()()()(),wl(1769,"tr",13)(1770,"td",14)(1771,"div",15)(1772,"span",16),Ux(1773," forceOptionsComponentType"),Ul(1774,"br"),ng()()(),wl(1775,"td",17)(1776,"code",50),Ux(1777,"ForceOptionComponentEnum"),ng()(),wl(1778,"td",20)(1779,"em")(1780,"strong"),Ux(1781,"(opcional)"),ng()(),wl(1782,"p"),Ux(1783,"pode ser utilizada em conjunto com a propriedade "),wl(1784,"code"),Ux(1785,"options"),ng(),Ux(1786," for\xE7ando o componente a renderizar um "),wl(1787,"code"),Ux(1788,"po-select"),ng(),Ux(1789," ou "),wl(1790,"code"),Ux(1791,"po-radio-group"),ng(),Ux(1792,"."),ng(),wl(1793,"p"),Ux(1794,"Valores aceitos:"),ng(),wl(1795,"ul")(1796,"li"),Ux(1797,"ForceOptionComponentEnum.radioGroup"),ng(),wl(1798,"li"),Ux(1799,"ForceOptionComponentEnum.select"),ng()(),wl(1800,"blockquote")(1801,"p"),Ux(1802,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),wl(1803,"code"),Ux(1804,"optionsMulti"),ng(),Ux(1805," e "),wl(1806,"code"),Ux(1807,"optionsService"),ng(),Ux(1808,"."),ng()()()(),wl(1809,"tr",13)(1810,"td",14)(1811,"div",15)(1812,"span",16),Ux(1813," formField"),Ul(1814,"br"),ng()()(),wl(1815,"td",17)(1816,"code",18),Ux(1817,"string"),ng()(),wl(1818,"td",20)(1819,"em")(1820,"strong"),Ux(1821,"(opcional)"),ng()(),wl(1822,"p"),Ux(1823,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),wl(1824,"code"),Ux(1825,"url"),ng(),Ux(1826,"."),ng(),wl(1827,"blockquote")(1828,"p"),Ux(1829,"O valor default \xE9 "),wl(1830,"code"),Ux(1831,"files"),ng()()(),wl(1832,"p")(1833,"strong"),Ux(1834,"Componente compat\xEDvel"),ng(),Ux(1835,": "),wl(1836,"code"),Ux(1837,"po-upload"),ng()()()(),wl(1838,"tr",13)(1839,"td",14)(1840,"div",15)(1841,"span",16),Ux(1842," format"),Ul(1843,"br"),ng()()(),wl(1844,"td",17)(1845,"code",18),Ux(1846,"string "),ng(),wl(1847,"code",32),Ux(1848," Array<string>"),ng()(),wl(1849,"td",20)(1850,"em")(1851,"strong"),Ux(1852,"(opcional)"),ng()(),wl(1853,"p"),Ux(1854,"Formato de exibi\xE7\xE3o no campo."),ng(),wl(1855,"p"),Ux(1856,"Ao utilizar esta propriedade com o "),wl(1857,"code"),Ux(1858,"type"),ng(),wl(1859,"em"),Ux(1860,"PoDynamicFieldType.Date"),ng(),Ux(1861," ou "),wl(1862,"em"),Ux(1863,"PoDynamicFieldType.DateTime"),ng(),Ux(1864,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),ng(),wl(1865,"p"),Ux(1866,"Valores v\xE1lidos:"),ng(),wl(1867,"ul")(1868,"li"),Ux(1869,"dd/mm/yyyy"),ng(),wl(1870,"li"),Ux(1871,"mm/dd/yyyy"),ng(),wl(1872,"li"),Ux(1873,"yyyy/mm/dd"),ng()(),wl(1874,"p"),Ux(1875,"Ao utilizar com o "),wl(1876,"code"),Ux(1877,"type"),ng(),wl(1878,"em"),Ux(1879,"PoDynamicFieldType.Time"),ng(),Ux(1880,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),ng(),wl(1881,"p"),Ux(1882,"Valores v\xE1lidos:"),ng(),wl(1883,"ul")(1884,"li")(1885,"code"),Ux(1886,"24"),ng(),Ux(1887,": formato de 24 horas (padr\xE3o)"),ng(),wl(1888,"li")(1889,"code"),Ux(1890,"12"),ng(),Ux(1891,": formato de 12 horas com indicador AM/PM"),ng()(),wl(1892,"p"),Ux(1893,"Tamb\xE9m pode-se utilizar em conjunto com "),wl(1894,"code"),Ux(1895,"searchService"),ng(),Ux(1896,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),ng(),wl(1897,"p")(1898,"strong"),Ux(1899,"Componentes compat\xEDveis:"),ng(),wl(1900,"code"),Ux(1901,"po-datepicker"),ng(),Ux(1902,", "),wl(1903,"code"),Ux(1904,"po-timepicker"),ng(),Ux(1905,", "),wl(1906,"code"),Ux(1907,"po-lookup"),ng(),Ux(1908,"."),ng()()(),wl(1909,"tr",13)(1910,"td",14)(1911,"div",15)(1912,"span",16),Ux(1913," formatModel"),Ul(1914,"br"),ng()()(),wl(1915,"td",17)(1916,"code",28),Ux(1917,"boolean"),ng()(),wl(1918,"td",20)(1919,"em")(1920,"strong"),Ux(1921,"(opcional)"),ng()(),wl(1922,"p"),Ux(1923,"Indica se o "),wl(1924,"code"),Ux(1925,"model"),ng(),Ux(1926," receber\xE1 o valor formatado pelas propriedades "),wl(1927,"code"),Ux(1928,"p-label-on"),ng(),Ux(1929," e "),wl(1930,"code"),Ux(1931,"p-label-off"),ng(),Ux(1932,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),ng(),wl(1933,"p"),Ux(1934,"O valor padr\xE3o \xE9: "),wl(1935,"code"),Ux(1936,"false"),ng(),Ux(1937,"."),ng(),wl(1938,"blockquote")(1939,"p"),Ux(1940,"Esta propriedade est\xE1 disponivel apenas para o "),wl(1941,"code"),Ux(1942,"swicth"),ng(),Ux(1943,"."),ng()()()(),wl(1944,"tr",13)(1945,"td",14)(1946,"div",15)(1947,"span",16),Ux(1948," formatTime"),Ul(1949,"br"),ng()()(),wl(1950,"td",17)(1951,"code",18),Ux(1952,"string"),ng()(),wl(1953,"td",20)(1954,"em")(1955,"strong"),Ux(1956,"(opcional)"),ng()(),wl(1957,"p"),Ux(1958,"Define o formato de exibi\xE7\xE3o do timer ("),wl(1959,"code"),Ux(1960,"'12'"),ng(),Ux(1961," ou "),wl(1962,"code"),Ux(1963,"'24'"),ng(),Ux(1964,")."),ng(),wl(1965,"p")(1966,"strong"),Ux(1967,"Componente compat\xEDvel:"),ng(),wl(1968,"code"),Ux(1969,"po-datetimepicker"),ng(),Ux(1970,", "),wl(1971,"code"),Ux(1972,"po-timepicker"),ng()()()(),wl(1973,"tr",13)(1974,"td",14)(1975,"div",15)(1976,"span",16),Ux(1977," gridColumns"),Ul(1978,"br"),ng()()(),wl(1979,"td",17)(1980,"code",41),Ux(1981,"number"),ng()(),wl(1982,"td",20)(1983,"em")(1984,"strong"),Ux(1985,"(opcional)"),ng()(),wl(1986,"p"),Ux(1987,"Tamanho de exibi\xE7\xE3o do campo em telas."),ng(),wl(1988,"p"),Ux(1989,"Deve ser usado o sistema de "),wl(1990,"strong"),Ux(1991,"grid"),ng(),Ux(1992," do PO (1 ... 12 colunas)."),ng(),wl(1993,"blockquote")(1994,"p"),Ux(1995,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),ng()()()(),wl(1996,"tr",13)(1997,"td",14)(1998,"div",15)(1999,"span",16),Ux(2e3," gridLgColumns"),Ul(2001,"br"),ng()()(),wl(2002,"td",17)(2003,"code",41),Ux(2004,"number"),ng()(),wl(2005,"td",20)(2006,"em")(2007,"strong"),Ux(2008,"(opcional)"),ng()(),wl(2009,"p"),Ux(2010,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),ng(),wl(2011,"p"),Ux(2012,"Deve ser usado o sistema de "),wl(2013,"strong"),Ux(2014,"grid"),ng(),Ux(2015," do PO (1 ... 12 colunas)."),ng(),wl(2016,"blockquote")(2017,"p"),Ux(2018,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(2019,"code"),Ux(2020,"gridColumns"),ng(),Ux(2021,"."),ng()()()(),wl(2022,"tr",13)(2023,"td",14)(2024,"div",15)(2025,"span",16),Ux(2026," gridLgPull"),Ul(2027,"br"),ng()()(),wl(2028,"td",17)(2029,"code",41),Ux(2030,"number"),ng()(),wl(2031,"td",20)(2032,"em")(2033,"strong"),Ux(2034,"(opcional)"),ng()(),wl(2035,"p"),Ux(2036,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),ng(),wl(2037,"p"),Ux(2038,"Deve ser usado o sistema de "),wl(2039,"strong"),Ux(2040,"grid"),ng(),Ux(2041," do PO (1 ... 11 colunas)."),ng(),wl(2042,"blockquote")(2043,"p"),Ux(2044,"Esta propriedade n\xE3o funciona com a propriedade "),wl(2045,"code"),Ux(2046,"gridColumns"),ng(),Ux(2047,". Deve-se especificar o tamanho da tela."),ng()()()(),wl(2048,"tr",13)(2049,"td",14)(2050,"div",15)(2051,"span",16),Ux(2052," gridMdColumns"),Ul(2053,"br"),ng()()(),wl(2054,"td",17)(2055,"code",41),Ux(2056,"number"),ng()(),wl(2057,"td",20)(2058,"em")(2059,"strong"),Ux(2060,"(opcional)"),ng()(),wl(2061,"p"),Ux(2062,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),ng(),wl(2063,"p"),Ux(2064,"Deve ser usado o sistema de "),wl(2065,"strong"),Ux(2066,"grid"),ng(),Ux(2067," do PO (1 ... 12 colunas)."),ng(),wl(2068,"blockquote")(2069,"p"),Ux(2070,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(2071,"code"),Ux(2072,"gridColumns"),ng(),Ux(2073,"."),ng()()()(),wl(2074,"tr",13)(2075,"td",14)(2076,"div",15)(2077,"span",16),Ux(2078," gridMdPull"),Ul(2079,"br"),ng()()(),wl(2080,"td",17)(2081,"code",41),Ux(2082,"number"),ng()(),wl(2083,"td",20)(2084,"em")(2085,"strong"),Ux(2086,"(opcional)"),ng()(),wl(2087,"p"),Ux(2088,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),ng(),wl(2089,"p"),Ux(2090,"Deve ser usado o sistema de "),wl(2091,"strong"),Ux(2092,"grid"),ng(),Ux(2093," do PO (1 ... 11 colunas)."),ng(),wl(2094,"blockquote")(2095,"p"),Ux(2096,"Esta propriedade n\xE3o funciona com a propriedade "),wl(2097,"code"),Ux(2098,"gridColumns"),ng(),Ux(2099,". Deve-se especificar o tamanho da tela."),ng()()()(),wl(2100,"tr",13)(2101,"td",14)(2102,"div",15)(2103,"span",16),Ux(2104," gridSmColumns"),Ul(2105,"br"),ng()()(),wl(2106,"td",17)(2107,"code",41),Ux(2108,"number"),ng()(),wl(2109,"td",20)(2110,"em")(2111,"strong"),Ux(2112,"(opcional)"),ng()(),wl(2113,"p"),Ux(2114,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),ng(),wl(2115,"p"),Ux(2116,"Deve ser usado o sistema de "),wl(2117,"strong"),Ux(2118,"grid"),ng(),Ux(2119," do PO (1 ... 12 colunas)."),ng(),wl(2120,"blockquote")(2121,"p"),Ux(2122,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(2123,"code"),Ux(2124,"gridColumns"),ng(),Ux(2125,"."),ng()()()(),wl(2126,"tr",13)(2127,"td",14)(2128,"div",15)(2129,"span",16),Ux(2130," gridSmPull"),Ul(2131,"br"),ng()()(),wl(2132,"td",17)(2133,"code",41),Ux(2134,"number"),ng()(),wl(2135,"td",20)(2136,"em")(2137,"strong"),Ux(2138,"(opcional)"),ng()(),wl(2139,"p"),Ux(2140,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),ng(),wl(2141,"p"),Ux(2142,"Deve ser usado o sistema de "),wl(2143,"strong"),Ux(2144,"grid"),ng(),Ux(2145," do PO (1 ... 11 colunas)."),ng(),wl(2146,"blockquote")(2147,"p"),Ux(2148,"Esta propriedade n\xE3o funciona com a propriedade "),wl(2149,"code"),Ux(2150,"gridColumns"),ng(),Ux(2151,". Deve-se especificar o tamanho da tela."),ng()()()(),wl(2152,"tr",13)(2153,"td",14)(2154,"div",15)(2155,"span",16),Ux(2156," gridXlColumns"),Ul(2157,"br"),ng()()(),wl(2158,"td",17)(2159,"code",41),Ux(2160,"number"),ng()(),wl(2161,"td",20)(2162,"em")(2163,"strong"),Ux(2164,"(opcional)"),ng()(),wl(2165,"p"),Ux(2166,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),ng(),wl(2167,"p"),Ux(2168,"Deve ser usado o sistema de "),wl(2169,"strong"),Ux(2170,"grid"),ng(),Ux(2171," do PO (1 ... 12 colunas)."),ng(),wl(2172,"blockquote")(2173,"p"),Ux(2174,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(2175,"code"),Ux(2176,"gridColumns"),ng(),Ux(2177,"."),ng()()()(),wl(2178,"tr",13)(2179,"td",14)(2180,"div",15)(2181,"span",16),Ux(2182," gridXlPull"),Ul(2183,"br"),ng()()(),wl(2184,"td",17)(2185,"code",41),Ux(2186,"number"),ng()(),wl(2187,"td",20)(2188,"em")(2189,"strong"),Ux(2190,"(opcional)"),ng()(),wl(2191,"p"),Ux(2192,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),ng(),wl(2193,"p"),Ux(2194,"Deve ser usado o sistema de "),wl(2195,"strong"),Ux(2196,"grid"),ng(),Ux(2197," do PO (1 ... 11 colunas)."),ng(),wl(2198,"blockquote")(2199,"p"),Ux(2200,"Esta propriedade n\xE3o funciona com a propriedade "),wl(2201,"code"),Ux(2202,"gridColumns"),ng(),Ux(2203,". Deve-se especificar o tamanho da tela."),ng()()()(),wl(2204,"tr",13)(2205,"td",14)(2206,"div",15)(2207,"span",16),Ux(2208," headers"),Ul(2209,"br"),ng()()(),wl(2210,"td",17)(2211,"code",51),Ux(2212,"{ [name: string]: string "),ng(),wl(2213,"code",52),Ux(2214,` Array<string>;
}`),ng()(),wl(2215,"td",20)(2216,"em")(2217,"strong"),Ux(2218,"(opcional)"),ng()(),wl(2219,"p"),Ux(2220,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),ng(),wl(2221,"p")(2222,"strong"),Ux(2223,"Componente compat\xEDvel"),ng(),Ux(2224,": "),wl(2225,"code"),Ux(2226,"po-upload"),ng()()()(),wl(2227,"tr",13)(2228,"td",14)(2229,"div",15)(2230,"span",16),Ux(2231," help"),Ul(2232,"br"),ng()()(),wl(2233,"td",17)(2234,"code",18),Ux(2235,"string"),ng()(),wl(2236,"td",20)(2237,"em")(2238,"strong"),Ux(2239,"(opcional)"),ng()(),wl(2240,"p"),Ux(2241,"Texto de ajuda."),ng()()(),wl(2242,"tr",13)(2243,"td",14)(2244,"div",15)(2245,"span",16),Ux(2246," helper"),Ul(2247,"br"),ng()()(),wl(2248,"td",17)(2249,"code",18),Ux(2250,"string "),ng(),wl(2251,"code",53),Ux(2252," PoHelperOptions"),ng()(),wl(2253,"td",20)(2254,"em")(2255,"strong"),Ux(2256,"(opcional)"),ng()(),wl(2257,"p"),Ux(2258,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),ng()()(),wl(2259,"tr",13)(2260,"td",14)(2261,"div",15)(2262,"span",16),Ux(2263," hideLabelStatus"),Ul(2264,"br"),ng()()(),wl(2265,"td",17)(2266,"code",28),Ux(2267,"boolean"),ng()(),wl(2268,"td",20)(2269,"em")(2270,"strong"),Ux(2271,"(opcional)"),ng()(),wl(2272,"p"),Ux(2273,"Indica se o status do "),wl(2274,"code"),Ux(2275,"model"),ng(),Ux(2276," ser\xE1 escondido visualmente ao lado do switch"),ng()()(),wl(2277,"tr",13)(2278,"td",14)(2279,"div",15)(2280,"span",16),Ux(2281," hidePasswordPeek"),Ul(2282,"br"),ng()()(),wl(2283,"td",17)(2284,"code",28),Ux(2285,"boolean"),ng()(),wl(2286,"td",20)(2287,"em")(2288,"strong"),Ux(2289,"(opcional)"),ng()(),wl(2290,"p"),Ux(2291,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),wl(2292,"code"),Ux(2293,"po-password"),ng(),Ux(2294,"."),ng()()(),wl(2295,"tr",13)(2296,"td",14)(2297,"div",15)(2298,"span",16),Ux(2299," hideRestrictionsInfo"),Ul(2300,"br"),ng()()(),wl(2301,"td",17)(2302,"code",28),Ux(2303,"boolean"),ng()(),wl(2304,"td",20)(2305,"em")(2306,"strong"),Ux(2307,"(opcional)"),ng()(),wl(2308,"p"),Ux(2309,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),ng(),wl(2310,"p")(2311,"strong"),Ux(2312,"Componente compat\xEDvel"),ng(),Ux(2313,": "),wl(2314,"code"),Ux(2315,"po-upload"),ng()()()(),wl(2316,"tr",13)(2317,"td",14)(2318,"div",15)(2319,"span",16),Ux(2320," hideSearch"),Ul(2321,"br"),ng()()(),wl(2322,"td",17)(2323,"code",28),Ux(2324,"boolean"),ng()(),wl(2325,"td",20)(2326,"em")(2327,"strong"),Ux(2328,"(opcional)"),ng()(),wl(2329,"p"),Ux(2330,"Esconde o campo de pesquisa existente dentro do dropdown do "),wl(2331,"code"),Ux(2332,"po-multiselect"),ng(),Ux(2333,"."),ng()()(),wl(2334,"tr",13)(2335,"td",14)(2336,"div",15)(2337,"span",16),Ux(2338," hideSelectAll"),Ul(2339,"br"),ng()()(),wl(2340,"td",17)(2341,"code",28),Ux(2342,"boolean"),ng()(),wl(2343,"td",20)(2344,"em")(2345,"strong"),Ux(2346,"(opcional)"),ng()(),wl(2347,"p"),Ux(2348,'Indica se o campo "Selecionar todos" do '),wl(2349,"code"),Ux(2350,"po-multiselect"),ng(),Ux(2351," ser\xE1 escondido."),ng()()(),wl(2352,"tr",13)(2353,"td",14)(2354,"div",15)(2355,"span",16),Ux(2356," hideSelectButton"),Ul(2357,"br"),ng()()(),wl(2358,"td",17)(2359,"code",28),Ux(2360,"boolean"),ng()(),wl(2361,"td",20)(2362,"em")(2363,"strong"),Ux(2364,"(opcional)"),ng()(),wl(2365,"p"),Ux(2366,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),ng(),wl(2367,"blockquote")(2368,"p"),Ux(2369,"Caso o valor definido seja "),wl(2370,"code"),Ux(2371,"true"),ng(),Ux(2372,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),wl(2373,"code"),Ux(2374,"selectFiles()"),ng(),Ux(2375," para sele\xE7\xE3o de arquivos."),ng()(),wl(2376,"p")(2377,"strong"),Ux(2378,"Componente compat\xEDvel"),ng(),Ux(2379,": "),wl(2380,"code"),Ux(2381,"po-upload"),ng()()()(),wl(2382,"tr",13)(2383,"td",14)(2384,"div",15)(2385,"span",16),Ux(2386," hideSendButton"),Ul(2387,"br"),ng()()(),wl(2388,"td",17)(2389,"code",28),Ux(2390,"boolean"),ng()(),wl(2391,"td",20)(2392,"em")(2393,"strong"),Ux(2394,"(opcional)"),ng()(),wl(2395,"p"),Ux(2396,"Omite o bot\xE3o de envio de arquivos."),ng(),wl(2397,"blockquote")(2398,"p"),Ux(2399,"Caso o valor definido seja "),wl(2400,"code"),Ux(2401,"true"),ng(),Ux(2402,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),wl(2403,"code"),Ux(2404,"sendFiles()"),ng(),Ux(2405," para envio do(s) arquivo(s) selecionado(s)."),ng()(),wl(2406,"p")(2407,"strong"),Ux(2408,"Componente compat\xEDvel"),ng(),Ux(2409,": "),wl(2410,"code"),Ux(2411,"po-upload"),ng()()()(),wl(2412,"tr",13)(2413,"td",14)(2414,"div",15)(2415,"span",16),Ux(2416," icon"),Ul(2417,"br"),ng()()(),wl(2418,"td",17)(2419,"code",18),Ux(2420,"string "),ng(),wl(2421,"code",54),Ux(2422," TemplateRef<void>"),ng()(),wl(2423,"td",20)(2424,"em")(2425,"strong"),Ux(2426,"(opcional)"),ng()(),wl(2427,"p"),Ux(2428,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),ng(),wl(2429,"blockquote")(2430,"p"),Ux(2431,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),ng()(),wl(2432,"ul")(2433,"li"),Ux(2434,"Input;"),ng(),wl(2435,"li"),Ux(2436,"Number;"),ng(),wl(2437,"li"),Ux(2438,"Decimal;"),ng(),wl(2439,"li"),Ux(2440,"Combo;"),ng(),wl(2441,"li"),Ux(2442,"Password;"),ng()(),wl(2443,"blockquote")(2444,"p"),Ux(2445,"Veja a disponibilidade de \xEDcones em "),wl(2446,"a",55),Ux(2447,"biblioteca de \xEDcones"),ng(),Ux(2448,"."),ng()()()(),wl(2449,"tr",13)(2450,"td",14)(2451,"div",15)(2452,"span",16),Ux(2453," infiniteScroll"),Ul(2454,"br"),ng()()(),wl(2455,"td",17)(2456,"code",28),Ux(2457,"boolean"),ng()(),wl(2458,"td",20)(2459,"em")(2460,"strong"),Ux(2461,"(opcional)"),ng()(),wl(2462,"p"),Ux(2463,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),ng(),wl(2464,"p")(2465,"strong"),Ux(2466,"Componentes compat\xEDveis:"),ng(),wl(2467,"code"),Ux(2468,"po-combo"),ng(),Ux(2469,", "),wl(2470,"code"),Ux(2471,"po-lookup"),ng(),Ux(2472,"."),ng()()(),wl(2473,"tr",13)(2474,"td",14)(2475,"div",15)(2476,"span",16),Ux(2477," infiniteScrollDistance"),Ul(2478,"br"),ng()()(),wl(2479,"td",17)(2480,"code",41),Ux(2481,"number"),ng()(),wl(2482,"td",20)(2483,"em")(2484,"strong"),Ux(2485,"(opcional)"),ng()(),wl(2486,"p"),Ux(2487,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),wl(2488,"strong"),Ux(2489,"Exemplos"),ng(),wl(2490,"code"),Ux(2491,"{ infiniteScrollDistance: 80 }"),ng(),Ux(2492,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),ng(),wl(2493,"p")(2494,"strong"),Ux(2495,"Componente compat\xEDvel:"),ng(),wl(2496,"code"),Ux(2497,"po-combo"),ng(),Ux(2498,"."),ng()()(),wl(2499,"tr",13)(2500,"td",14)(2501,"div",15)(2502,"span",16),Ux(2503," invalidValue"),Ul(2504,"br"),ng()()(),wl(2505,"td",17)(2506,"code",28),Ux(2507,"boolean"),ng()(),wl(2508,"td",20)(2509,"em")(2510,"strong"),Ux(2511,"(opcional)"),ng()(),wl(2512,"p"),Ux(2513,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),wl(2514,"code"),Ux(2515,"p-field-error-message"),ng(),Ux(2516,"."),ng(),wl(2517,"blockquote")(2518,"p"),Ux(2519,"Caso essa propriedade seja definida como "),wl(2520,"code"),Ux(2521,"true"),ng(),Ux(2522,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),ng()(),wl(2523,"p")(2524,"strong"),Ux(2525,"Componente compat\xEDvel"),ng(),Ux(2526,": "),wl(2527,"code"),Ux(2528,"po-switch"),ng()()()(),wl(2529,"tr",13)(2530,"td",14)(2531,"div",15)(2532,"span",16),Ux(2533," isoFormat"),Ul(2534,"br"),ng()()(),wl(2535,"td",17)(2536,"code",56),Ux(2537,"PoDatepickerIsoFormat"),ng()(),wl(2538,"td",20)(2539,"em")(2540,"strong"),Ux(2541,"(opcional)"),ng()(),wl(2542,"p"),Ux(2543,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),ng(),wl(2544,"blockquote")(2545,"p"),Ux(2546,"Veja os valores v\xE1lidos no "),wl(2547,"code"),Ux(2548,"PoDatepickerIsoFormat"),ng(),Ux(2549,"."),ng()(),wl(2550,"p")(2551,"strong"),Ux(2552,"Componente compat\xEDvel:"),ng(),wl(2553,"code"),Ux(2554,"po-datepicker"),ng()()()(),wl(2555,"tr",13)(2556,"td",14)(2557,"div",15)(2558,"span",16),Ux(2559," key"),Ul(2560,"br"),ng()()(),wl(2561,"td",17)(2562,"code",28),Ux(2563,"boolean"),ng()(),wl(2564,"td",20)(2565,"em")(2566,"strong"),Ux(2567,"(opcional)"),ng()(),wl(2568,"p"),Ux(2569,"Identificador"),ng()()(),wl(2570,"tr",13)(2571,"td",14)(2572,"div",15)(2573,"span",16),Ux(2574," keydown"),Ul(2575,"br"),ng()()(),wl(2576,"td",17)(2577,"code",29),Ux(2578,"Function"),ng()(),wl(2579,"td",20)(2580,"em")(2581,"strong"),Ux(2582,"(opcional)"),ng()(),wl(2583,"p"),Ux(2584,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(2585,"code"),Ux(2586,"KeyboardEvent"),ng(),Ux(2587," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(2588,"tr",13)(2589,"td",14)(2590,"div",15)(2591,"span",16),Ux(2592," label"),Ul(2593,"br"),ng()()(),wl(2594,"td",17)(2595,"code",18),Ux(2596,"string"),ng()(),wl(2597,"td",20)(2598,"em")(2599,"strong"),Ux(2600,"(opcional)"),ng()(),wl(2601,"p"),Ux(2602,"R\xF3tulo do campo exibido."),ng(),wl(2603,"p"),Ux(2604,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),wl(2605,"code"),Ux(2606,"label"),ng(),Ux(2607," o valor da propriedade "),wl(2608,"code"),Ux(2609,"property"),ng(),Ux(2610," com a primeira letra em mai\xFAsculo."),ng()()(),wl(2611,"tr",13)(2612,"td",14)(2613,"div",15)(2614,"span",16),Ux(2615," labelPosition"),Ul(2616,"br"),ng()()(),wl(2617,"td",17)(2618,"code",57),Ux(2619,"PoSwitchLabelPosition"),ng()(),wl(2620,"td",20)(2621,"em")(2622,"strong"),Ux(2623,"(opcional)"),ng()(),wl(2624,"p"),Ux(2625,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),ng(),wl(2626,"blockquote")(2627,"p"),Ux(2628,"Por padr\xE3o exibe \xE0 direita."),ng()()()(),wl(2629,"tr",13)(2630,"td",14)(2631,"div",15)(2632,"span",16),Ux(2633," listboxControlPosition"),Ul(2634,"br"),ng()()(),wl(2635,"td",17)(2636,"code",58),Ux(2637,"'top' "),ng(),wl(2638,"code",59),Ux(2639," 'bottom'"),ng()(),wl(2640,"td",20)(2641,"em")(2642,"strong"),Ux(2643,"(opcional)"),ng()(),wl(2644,"p"),Ux(2645,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),wl(2646,"code"),Ux(2647,"listbox"),ng(),Ux(2648," em rela\xE7\xE3o ao campo ("),wl(2649,"code"),Ux(2650,"top"),ng(),Ux(2651," ou "),wl(2652,"code"),Ux(2653,"bottom"),ng(),Ux(2654,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),ng(),wl(2655,"p")(2656,"strong"),Ux(2657,"Componentes compat\xEDveis:"),ng(),wl(2658,"code"),Ux(2659,"po-multiselect"),ng(),Ux(2660,", "),wl(2661,"code"),Ux(2662,"po-combo"),ng(),Ux(2663,"."),ng()()(),wl(2664,"tr",13)(2665,"td",14)(2666,"div",15)(2667,"span",16),Ux(2668," literals"),Ul(2669,"br"),ng()()(),wl(2670,"td",17)(2671,"code",60),Ux(2672,"PoLookupLiterals "),ng(),wl(2673,"code",61),Ux(2674," PoMultiselectLiterals "),ng(),wl(2675,"code",62),Ux(2676," PoComboLiterals "),ng(),wl(2677,"code",63),Ux(2678," PoDatepickerRangeLiterals "),ng(),wl(2679,"code",64),Ux(2680," PoUploadLiterals"),ng()(),wl(2681,"td",20)(2682,"em")(2683,"strong"),Ux(2684,"(opcional)"),ng()(),wl(2685,"p"),Ux(2686,"Objeto com as literais usadas para os seguintes componentes: "),wl(2687,"code"),Ux(2688,"po-lookup"),ng(),Ux(2689,", "),wl(2690,"code"),Ux(2691,"po-multiselect"),ng(),Ux(2692,", "),wl(2693,"code"),Ux(2694,"po-combo"),ng(),Ux(2695," e "),wl(2696,"code"),Ux(2697,"po-datepicker-range"),ng(),Ux(2698,"."),ng(),wl(2699,"blockquote")(2700,"p"),Ux(2701,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),ng()(),wl(2702,"p")(2703,"strong"),Ux(2704,"Componentes compat\xEDveis:"),ng(),wl(2705,"code"),Ux(2706,"po-lookup"),ng(),Ux(2707,", "),wl(2708,"code"),Ux(2709,"po-multiselect"),ng(),Ux(2710,", "),wl(2711,"code"),Ux(2712,"po-combo"),ng(),Ux(2713,", "),wl(2714,"code"),Ux(2715,"po-datepicker-range"),ng()()()(),wl(2716,"tr",13)(2717,"td",14)(2718,"div",15)(2719,"span",16),Ux(2720," loading"),Ul(2721,"br"),ng()()(),wl(2722,"td",17)(2723,"code",28),Ux(2724,"boolean"),ng()(),wl(2725,"td",20)(2726,"em")(2727,"strong"),Ux(2728,"(opcional)"),ng()(),wl(2729,"p"),Ux(2730,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),ng(),wl(2731,"blockquote")(2732,"p"),Ux(2733,"Por padr\xE3o \xE9 "),wl(2734,"code"),Ux(2735,"false"),ng(),Ux(2736,"."),ng()(),wl(2737,"p")(2738,"strong"),Ux(2739,"Componentes compat\xEDveis:"),ng(),wl(2740,"code"),Ux(2741,"po-datepicker"),ng(),Ux(2742,", "),wl(2743,"code"),Ux(2744,"po-datepicker-range"),ng(),Ux(2745,", "),wl(2746,"code"),Ux(2747,"po-number"),ng(),Ux(2748,", "),wl(2749,"code"),Ux(2750,"po-decimal"),ng(),Ux(2751,`,
`),wl(2752,"code"),Ux(2753,"po-input"),ng(),Ux(2754,", "),wl(2755,"code"),Ux(2756,"po-select"),ng(),Ux(2757,", "),wl(2758,"code"),Ux(2759,"po-switch"),ng(),Ux(2760,", "),wl(2761,"code"),Ux(2762,"po-combo"),ng(),Ux(2763,", "),wl(2764,"code"),Ux(2765,"po-lookup"),ng(),Ux(2766,", "),wl(2767,"code"),Ux(2768,"po-multiselect"),ng(),Ux(2769,`,
`),wl(2770,"code"),Ux(2771,"po-textarea"),ng(),Ux(2772,", "),wl(2773,"code"),Ux(2774,"po-password"),ng(),Ux(2775,", "),wl(2776,"code"),Ux(2777,"po-upload"),ng(),Ux(2778,"."),ng()()(),wl(2779,"tr",13)(2780,"td",14)(2781,"div",15)(2782,"span",16),Ux(2783," locale"),Ul(2784,"br"),ng()()(),wl(2785,"td",17)(2786,"code",18),Ux(2787,"string"),ng()(),wl(2788,"td",20)(2789,"em")(2790,"strong"),Ux(2791,"(opcional)"),ng()(),wl(2792,"p"),Ux(2793,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),wl(2794,"a",65)(2795,"code"),Ux(2796,"I18n"),ng()()(),wl(2797,"p"),Ux(2798,"Exemplo de utiliza\xE7\xE3o:"),ng(),wl(2799,"pre")(2800,"code"),Ux(2801,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),ng()(),wl(2802,"blockquote")(2803,"p"),Ux(2804,"Para ver quais linguagens suportadas acesse "),wl(2805,"a",65)(2806,"code"),Ux(2807,"I18n"),ng()()()(),wl(2808,"p")(2809,"strong"),Ux(2810,"Componentes compat\xEDveis:"),ng(),wl(2811,"code"),Ux(2812,"po-datepicker"),ng(),Ux(2813,", "),wl(2814,"code"),Ux(2815,"po-decimal"),ng(),Ux(2816,", "),wl(2817,"code"),Ux(2818,"po-timepicker"),ng(),Ux(2819,"."),ng()()(),wl(2820,"tr",13)(2821,"td",14)(2822,"div",15)(2823,"span",16),Ux(2824," mask"),Ul(2825,"br"),ng()()(),wl(2826,"td",17)(2827,"code",18),Ux(2828,"string"),ng()(),wl(2829,"td",20)(2830,"em")(2831,"strong"),Ux(2832,"(opcional)"),ng()(),wl(2833,"p"),Ux(2834,"M\xE1scara para o campo."),ng(),wl(2835,"p")(2836,"strong"),Ux(2837,"Componente compat\xEDvel:"),ng(),wl(2838,"code"),Ux(2839,"po-input"),ng(),Ux(2840,"."),ng(),wl(2841,"blockquote")(2842,"p"),Ux(2843,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),wl(2844,"code"),Ux(2845,"type: time"),ng(),Ux(2846,"."),ng()()()(),wl(2847,"tr",13)(2848,"td",14)(2849,"div",15)(2850,"span",16),Ux(2851," maskFormatModel"),Ul(2852,"br"),ng()()(),wl(2853,"td",17)(2854,"code",28),Ux(2855,"boolean"),ng()(),wl(2856,"td",20)(2857,"em")(2858,"strong"),Ux(2859,"(opcional)"),ng()(),wl(2860,"p"),Ux(2861,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),wl(2862,"code"),Ux(2863,"false"),ng(),Ux(2864,"."),ng(),wl(2865,"p")(2866,"strong"),Ux(2867,"Componente compat\xEDvel:"),ng(),wl(2868,"code"),Ux(2869,"po-input"),ng(),Ux(2870,"."),ng(),wl(2871,"blockquote")(2872,"p"),Ux(2873,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),wl(2874,"code"),Ux(2875,"type: time"),ng(),Ux(2876,"."),ng()()()(),wl(2877,"tr",13)(2878,"td",14)(2879,"div",15)(2880,"span",16),Ux(2881," maskNoLengthValidation"),Ul(2882,"br"),ng()()(),wl(2883,"td",17)(2884,"code",28),Ux(2885,"boolean"),ng()(),wl(2886,"td",20)(2887,"em")(2888,"strong"),Ux(2889,"(opcional)"),ng()(),wl(2890,"p"),Ux(2891,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),wl(2892,"code"),Ux(2893,"minLength"),ng(),Ux(2894,") e m\xE1ximo ("),wl(2895,"code"),Ux(2896,"maxLength"),ng(),Ux(2897,") quando h\xE1 uma m\xE1scara ("),wl(2898,"code"),Ux(2899,"p-mask"),ng(),Ux(2900,") definida."),ng(),wl(2901,"ul")(2902,"li"),Ux(2903,"Quando "),wl(2904,"code"),Ux(2905,"true"),ng(),Ux(2906,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),ng(),wl(2907,"li"),Ux(2908,"Quando "),wl(2909,"code"),Ux(2910,"false"),ng(),Ux(2911,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),ng()(),wl(2912,"p")(2913,"strong"),Ux(2914,"Componentes compat\xEDveis:"),ng(),wl(2915,"code"),Ux(2916,"po-input"),ng(),Ux(2917,", "),wl(2918,"code"),Ux(2919,"po-decimal"),ng(),Ux(2920,"."),ng(),wl(2921,"blockquote")(2922,"p"),Ux(2923,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),wl(2924,"code"),Ux(2925,"p-mask-format-model"),ng(),Ux(2926,"."),ng()(),wl(2927,"p"),Ux(2928,"Exemplo:"),ng(),wl(2929,"pre")(2930,"code"),Ux(2931,`fields:Array<PoDynamicFormField> = [
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
`),ng()(),wl(2932,"ul")(2933,"li"),Ux(2934,"Entrada: "),wl(2935,"code"),Ux(2936,"11.111.111/1111-11"),ng(),Ux(2937," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),ng()()()(),wl(2938,"tr",13)(2939,"td",14)(2940,"div",15)(2941,"span",16),Ux(2942," maxLength"),Ul(2943,"br"),ng()()(),wl(2944,"td",17)(2945,"code",41),Ux(2946,"number"),ng()(),wl(2947,"td",20)(2948,"em")(2949,"strong"),Ux(2950,"(opcional)"),ng()(),wl(2951,"p"),Ux(2952,"Tamanho m\xE1ximo de caracteres."),ng(),wl(2953,"p")(2954,"strong"),Ux(2955,"Componentes compat\xEDveis:"),ng(),wl(2956,"code"),Ux(2957,"po-input"),ng(),Ux(2958,", "),wl(2959,"code"),Ux(2960,"po-number"),ng(),Ux(2961,", "),wl(2962,"code"),Ux(2963,"po-decimal"),ng(),Ux(2964,", "),wl(2965,"code"),Ux(2966,"po-textarea"),ng(),Ux(2967,", "),wl(2968,"code"),Ux(2969,"po-password"),ng(),Ux(2970,"."),ng()()(),wl(2971,"tr",13)(2972,"td",14)(2973,"div",15)(2974,"span",16),Ux(2975," maxTime"),Ul(2976,"br"),ng()()(),wl(2977,"td",17)(2978,"code",18),Ux(2979,"string"),ng()(),wl(2980,"td",20)(2981,"em")(2982,"strong"),Ux(2983,"(opcional)"),ng()(),wl(2984,"p"),Ux(2985,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),wl(2986,"code"),Ux(2987,"HH:mm"),ng(),Ux(2988," ou "),wl(2989,"code"),Ux(2990,"HH:mm:ss"),ng(),Ux(2991,"."),ng(),wl(2992,"p")(2993,"strong"),Ux(2994,"Componente compat\xEDvel:"),ng(),wl(2995,"code"),Ux(2996,"po-datetimepicker"),ng(),Ux(2997,", "),wl(2998,"code"),Ux(2999,"po-timepicker"),ng()()()(),wl(3e3,"tr",13)(3001,"td",14)(3002,"div",15)(3003,"span",16),Ux(3004," maxValue"),Ul(3005,"br"),ng()()(),wl(3006,"td",17)(3007,"code",18),Ux(3008,"string "),ng(),wl(3009,"code",41),Ux(3010," number"),ng()(),wl(3011,"td",20)(3012,"em")(3013,"strong"),Ux(3014,"(opcional)"),ng()(),wl(3015,"p"),Ux(3016,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),wl(3017,"em"),Ux(3018,"number"),ng(),Ux(3019,", "),wl(3020,"em"),Ux(3021,"date"),ng(),Ux(3022,", "),wl(3023,"em"),Ux(3024,"dateTime"),ng(),Ux(3025," ou "),wl(3026,"em"),Ux(3027,"time"),ng(),Ux(3028,"."),ng(),wl(3029,"blockquote")(3030,"p"),Ux(3031,"Para "),wl(3032,"code"),Ux(3033,"po-timepicker"),ng(),Ux(3034,", o valor deve estar no formato "),wl(3035,"code"),Ux(3036,"HH:mm"),ng(),Ux(3037," ou "),wl(3038,"code"),Ux(3039,"HH:mm:ss"),ng(),Ux(3040,"."),ng()(),wl(3041,"p")(3042,"strong"),Ux(3043,"Componentes compat\xEDveis:"),ng(),wl(3044,"code"),Ux(3045,"po-datepicker"),ng(),Ux(3046,", "),wl(3047,"code"),Ux(3048,"po-datepicker-range"),ng(),Ux(3049,", "),wl(3050,"code"),Ux(3051,"po-number"),ng(),Ux(3052,", "),wl(3053,"code"),Ux(3054,"po-decimal"),ng(),Ux(3055,", "),wl(3056,"code"),Ux(3057,"po-timepicker"),ng()()()(),wl(3058,"tr",13)(3059,"td",14)(3060,"div",15)(3061,"span",16),Ux(3062," minLength"),Ul(3063,"br"),ng()()(),wl(3064,"td",17)(3065,"code",41),Ux(3066,"number"),ng()(),wl(3067,"td",20)(3068,"em")(3069,"strong"),Ux(3070,"(opcional)"),ng()(),wl(3071,"p"),Ux(3072,"Tamanho m\xEDnimo de caracteres."),ng(),wl(3073,"p")(3074,"strong"),Ux(3075,"Componentes compat\xEDveis:"),ng(),wl(3076,"code"),Ux(3077,"po-input"),ng(),Ux(3078,", "),wl(3079,"code"),Ux(3080,"po-number"),ng(),Ux(3081,", "),wl(3082,"code"),Ux(3083,"po-decimal"),ng(),Ux(3084,", "),wl(3085,"code"),Ux(3086,"po-textarea"),ng(),Ux(3087,", "),wl(3088,"code"),Ux(3089,"po-password"),ng(),Ux(3090,"."),ng()()(),wl(3091,"tr",13)(3092,"td",14)(3093,"div",15)(3094,"span",16),Ux(3095," minTime"),Ul(3096,"br"),ng()()(),wl(3097,"td",17)(3098,"code",18),Ux(3099,"string"),ng()(),wl(3100,"td",20)(3101,"em")(3102,"strong"),Ux(3103,"(opcional)"),ng()(),wl(3104,"p"),Ux(3105,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),wl(3106,"code"),Ux(3107,"HH:mm"),ng(),Ux(3108," ou "),wl(3109,"code"),Ux(3110,"HH:mm:ss"),ng(),Ux(3111,"."),ng(),wl(3112,"p")(3113,"strong"),Ux(3114,"Componente compat\xEDvel:"),ng(),wl(3115,"code"),Ux(3116,"po-datetimepicker"),ng(),Ux(3117,", "),wl(3118,"code"),Ux(3119,"po-timepicker"),ng()()()(),wl(3120,"tr",13)(3121,"td",14)(3122,"div",15)(3123,"span",16),Ux(3124," minValue"),Ul(3125,"br"),ng()()(),wl(3126,"td",17)(3127,"code",18),Ux(3128,"string "),ng(),wl(3129,"code",41),Ux(3130," number"),ng()(),wl(3131,"td",20)(3132,"em")(3133,"strong"),Ux(3134,"(opcional)"),ng()(),wl(3135,"p"),Ux(3136,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),wl(3137,"em"),Ux(3138,"number"),ng(),Ux(3139,", "),wl(3140,"em"),Ux(3141,"date"),ng(),Ux(3142,", "),wl(3143,"em"),Ux(3144,"dateTime"),ng(),Ux(3145," ou "),wl(3146,"em"),Ux(3147,"time"),ng(),Ux(3148,"."),ng(),wl(3149,"blockquote")(3150,"p"),Ux(3151,"Para "),wl(3152,"code"),Ux(3153,"po-timepicker"),ng(),Ux(3154,", o valor deve estar no formato "),wl(3155,"code"),Ux(3156,"HH:mm"),ng(),Ux(3157," ou "),wl(3158,"code"),Ux(3159,"HH:mm:ss"),ng(),Ux(3160,"."),ng()(),wl(3161,"p")(3162,"strong"),Ux(3163,"Componentes compat\xEDveis:"),ng(),wl(3164,"code"),Ux(3165,"po-datepicker"),ng(),Ux(3166,", "),wl(3167,"code"),Ux(3168,"po-datepicker-range"),ng(),Ux(3169,", "),wl(3170,"code"),Ux(3171,"po-number"),ng(),Ux(3172,", "),wl(3173,"code"),Ux(3174,"po-decimal"),ng(),Ux(3175,", "),wl(3176,"code"),Ux(3177,"po-timepicker"),ng()()()(),wl(3178,"tr",13)(3179,"td",14)(3180,"div",15)(3181,"span",16),Ux(3182," minuteInterval"),Ul(3183,"br"),ng()()(),wl(3184,"td",17)(3185,"code",41),Ux(3186,"number"),ng()(),wl(3187,"td",20)(3188,"em")(3189,"strong"),Ux(3190,"(opcional)"),ng()(),wl(3191,"p"),Ux(3192,"Define o intervalo entre os minutos exibidos no painel do timepicker."),ng()()(),wl(3193,"tr",13)(3194,"td",14)(3195,"div",15)(3196,"span",16),Ux(3197," mode"),Ul(3198,"br"),ng()()(),wl(3199,"td",17)(3200,"code",66),Ux(3201,"'month-year' "),ng(),wl(3202,"code",67),Ux(3203," 'year'"),ng()(),wl(3204,"td",20)(3205,"em")(3206,"strong"),Ux(3207,"(opcional)"),ng()(),wl(3208,"p"),Ux(3209,"Define o modo de sele\xE7\xE3o do "),wl(3210,"code"),Ux(3211,"po-datepicker"),ng(),Ux(3212,"."),ng(),wl(3213,"p"),Ux(3214,"Valores aceitos:"),ng(),wl(3215,"ul")(3216,"li")(3217,"code"),Ux(3218,"'month-year'"),ng(),Ux(3219,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),wl(3220,"code"),Ux(3221,"MM/YYYY"),ng(),Ux(3222,")"),ng(),wl(3223,"li")(3224,"code"),Ux(3225,"'year'"),ng(),Ux(3226,": exibe sele\xE7\xE3o apenas de ano (formato "),wl(3227,"code"),Ux(3228,"YYYY"),ng(),Ux(3229,")"),ng()(),wl(3230,"p")(3231,"strong"),Ux(3232,"Componente compat\xEDvel:"),ng(),wl(3233,"code"),Ux(3234,"po-datepicker"),ng()()()(),wl(3235,"tr",13)(3236,"td",14)(3237,"div",15)(3238,"span",16),Ux(3239," modelFormat"),Ul(3240,"br"),ng()()(),wl(3241,"td",17)(3242,"code",68),Ux(3243,"PoTimepickerModelFormat"),ng()(),wl(3244,"td",20)(3245,"em")(3246,"strong"),Ux(3247,"(opcional)"),ng()(),wl(3248,"p"),Ux(3249,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),wl(3250,"code"),Ux(3251,"po-timepicker"),ng(),Ux(3252,"."),ng(),wl(3253,"blockquote")(3254,"p"),Ux(3255,"Veja os valores v\xE1lidos no "),wl(3256,"code"),Ux(3257,"PoTimepickerModelFormat"),ng(),Ux(3258,"."),ng()(),wl(3259,"p")(3260,"strong"),Ux(3261,"Componente compat\xEDvel:"),ng(),wl(3262,"code"),Ux(3263,"po-timepicker"),ng()()()(),wl(3264,"tr",13)(3265,"td",14)(3266,"div",15)(3267,"span",16),Ux(3268," multiple"),Ul(3269,"br"),ng()()(),wl(3270,"td",17)(3271,"code",28),Ux(3272,"boolean"),ng()(),wl(3273,"td",20)(3274,"em")(3275,"strong"),Ux(3276,"(opcional)"),ng()(),wl(3277,"p"),Ux(3278,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),ng(),wl(3279,"p")(3280,"strong"),Ux(3281,"Componentes compat\xEDveis:"),ng(),wl(3282,"code"),Ux(3283,"po-lookup"),ng(),Ux(3284,", "),wl(3285,"code"),Ux(3286,"po-upload"),ng()()()(),wl(3287,"tr",13)(3288,"td",14)(3289,"div",15)(3290,"span",16),Ux(3291," noAutocomplete"),Ul(3292,"br"),ng()()(),wl(3293,"td",17)(3294,"code",28),Ux(3295,"boolean"),ng()(),wl(3296,"td",20)(3297,"em")(3298,"strong"),Ux(3299,"(opcional)"),ng()(),wl(3300,"p"),Ux(3301,"Define a propriedade nativa "),wl(3302,"code"),Ux(3303,"autocomplete"),ng(),Ux(3304," do campo como off."),ng(),wl(3305,"p")(3306,"strong"),Ux(3307,"Componentes compat\xEDveis:"),ng(),wl(3308,"code"),Ux(3309,"po-datepicker"),ng(),Ux(3310,", "),wl(3311,"code"),Ux(3312,"po-datepicker-range"),ng(),Ux(3313,", "),wl(3314,"code"),Ux(3315,"po-input"),ng(),Ux(3316,", "),wl(3317,"code"),Ux(3318,"po-number"),ng(),Ux(3319,", "),wl(3320,"code"),Ux(3321,"po-decimal"),ng(),Ux(3322,`,
`),wl(3323,"code"),Ux(3324,"po-lookup"),ng(),Ux(3325,", "),wl(3326,"code"),Ux(3327,"po-password"),ng(),Ux(3328,", "),wl(3329,"code"),Ux(3330,"po-timepicker"),ng(),Ux(3331,"."),ng()()(),wl(3332,"tr",13)(3333,"td",14)(3334,"div",15)(3335,"span",16),Ux(3336," offsetColumns"),Ul(3337,"br"),ng()()(),wl(3338,"td",17)(3339,"code",41),Ux(3340,"number"),ng()(),wl(3341,"td",20)(3342,"em")(3343,"strong"),Ux(3344,"(opcional)"),ng()(),wl(3345,"p"),Ux(3346,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),ng(),wl(3347,"p"),Ux(3348,"Deve ser usado o sistema de "),wl(3349,"strong"),Ux(3350,"grid"),ng(),Ux(3351," do PO (1 ... 12 colunas)."),ng(),wl(3352,"blockquote")(3353,"p"),Ux(3354,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),ng()()()(),wl(3355,"tr",13)(3356,"td",14)(3357,"div",15)(3358,"span",16),Ux(3359," offsetLgColumns"),Ul(3360,"br"),ng()()(),wl(3361,"td",17)(3362,"code",41),Ux(3363,"number"),ng()(),wl(3364,"td",20)(3365,"em")(3366,"strong"),Ux(3367,"(opcional)"),ng()(),wl(3368,"p"),Ux(3369,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),ng(),wl(3370,"p"),Ux(3371,"Deve ser usado o sistema de "),wl(3372,"strong"),Ux(3373,"grid"),ng(),Ux(3374," do PO (1 ... 12 colunas)."),ng(),wl(3375,"blockquote")(3376,"p"),Ux(3377,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(3378,"code"),Ux(3379,"offsetColumns"),ng(),Ux(3380,"."),ng()()()(),wl(3381,"tr",13)(3382,"td",14)(3383,"div",15)(3384,"span",16),Ux(3385," offsetMdColumns"),Ul(3386,"br"),ng()()(),wl(3387,"td",17)(3388,"code",41),Ux(3389,"number"),ng()(),wl(3390,"td",20)(3391,"em")(3392,"strong"),Ux(3393,"(opcional)"),ng()(),wl(3394,"p"),Ux(3395,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),ng(),wl(3396,"p"),Ux(3397,"Deve ser usado o sistema de "),wl(3398,"strong"),Ux(3399,"grid"),ng(),Ux(3400," do PO (1 ... 12 colunas)."),ng(),wl(3401,"blockquote")(3402,"p"),Ux(3403,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(3404,"code"),Ux(3405,"offsetColumns"),ng(),Ux(3406,"."),ng()()()(),wl(3407,"tr",13)(3408,"td",14)(3409,"div",15)(3410,"span",16),Ux(3411," offsetSmColumns"),Ul(3412,"br"),ng()()(),wl(3413,"td",17)(3414,"code",41),Ux(3415,"number"),ng()(),wl(3416,"td",20)(3417,"em")(3418,"strong"),Ux(3419,"(opcional)"),ng()(),wl(3420,"p"),Ux(3421,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),ng(),wl(3422,"p"),Ux(3423,"Deve ser usado o sistema de "),wl(3424,"strong"),Ux(3425,"grid"),ng(),Ux(3426," do PO (1 ... 12 colunas)."),ng(),wl(3427,"blockquote")(3428,"p"),Ux(3429,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(3430,"code"),Ux(3431,"offsetColumns"),ng(),Ux(3432,"."),ng()()()(),wl(3433,"tr",13)(3434,"td",14)(3435,"div",15)(3436,"span",16),Ux(3437," offsetXlColumns"),Ul(3438,"br"),ng()()(),wl(3439,"td",17)(3440,"code",41),Ux(3441,"number"),ng()(),wl(3442,"td",20)(3443,"em")(3444,"strong"),Ux(3445,"(opcional)"),ng()(),wl(3446,"p"),Ux(3447,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),ng(),wl(3448,"p"),Ux(3449,"Deve ser usado o sistema de "),wl(3450,"strong"),Ux(3451,"grid"),ng(),Ux(3452," do PO (1 ... 12 colunas)."),ng(),wl(3453,"blockquote")(3454,"p"),Ux(3455,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),wl(3456,"code"),Ux(3457,"offsetColumns"),ng(),Ux(3458,"."),ng()()()(),wl(3459,"tr",13)(3460,"td",14)(3461,"div",15)(3462,"span",16),Ux(3463," onError"),Ul(3464,"br"),ng()()(),wl(3465,"td",17)(3466,"code",29),Ux(3467,"Function"),ng()(),wl(3468,"td",20)(3469,"em")(3470,"strong"),Ux(3471,"(opcional)"),ng()(),wl(3472,"p"),Ux(3473,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),ng(),wl(3474,"blockquote")(3475,"p"),Ux(3476,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),wl(3477,"code"),Ux(3478,"HttpErrorResponse"),ng(),Ux(3479,"."),ng()(),wl(3480,"p")(3481,"strong"),Ux(3482,"Componente compat\xEDvel"),ng(),Ux(3483,": "),wl(3484,"code"),Ux(3485,"po-upload"),ng()()()(),wl(3486,"tr",13)(3487,"td",14)(3488,"div",15)(3489,"span",16),Ux(3490," onSuccess"),Ul(3491,"br"),ng()()(),wl(3492,"td",17)(3493,"code",29),Ux(3494,"Function"),ng()(),wl(3495,"td",20)(3496,"em")(3497,"strong"),Ux(3498,"(opcional)"),ng()(),wl(3499,"p"),Ux(3500,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),ng(),wl(3501,"blockquote")(3502,"p"),Ux(3503,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),wl(3504,"code"),Ux(3505,"HttpResponse"),ng(),Ux(3506,"."),ng()(),wl(3507,"p")(3508,"strong"),Ux(3509,"Componente compat\xEDvel"),ng(),Ux(3510,": "),wl(3511,"code"),Ux(3512,"po-upload"),ng()()()(),wl(3513,"tr",13)(3514,"td",14)(3515,"div",15)(3516,"span",16),Ux(3517," onUpload"),Ul(3518,"br"),ng()()(),wl(3519,"td",17)(3520,"code",29),Ux(3521,"Function"),ng()(),wl(3522,"td",20)(3523,"em")(3524,"strong"),Ux(3525,"(opcional)"),ng()(),wl(3526,"p"),Ux(3527,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),ng(),wl(3528,"pre")(3529,"code"),Ux(3530,`event.data = {id: 'id do usu\xE1rio'};
`),ng()(),wl(3531,"p")(3532,"strong"),Ux(3533,"Componente compat\xEDvel"),ng(),Ux(3534,": "),wl(3535,"code"),Ux(3536,"po-upload"),ng()()()(),wl(3537,"tr",13)(3538,"td",14)(3539,"div",15)(3540,"span",16),Ux(3541," optional"),Ul(3542,"br"),ng()()(),wl(3543,"td",17)(3544,"code",28),Ux(3545,"boolean"),ng()(),wl(3546,"td",20)(3547,"em")(3548,"strong"),Ux(3549,"(opcional)"),ng()(),wl(3550,"p"),Ux(3551,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(3552,"blockquote")(3553,"p"),Ux(3554,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),ng()(),wl(3555,"ul")(3556,"li"),Ux(3557,"O campo for "),wl(3558,"code"),Ux(3559,"required"),ng(),Ux(3560,", ou;"),ng(),wl(3561,"li"),Ux(3562,"N\xE3o possuir "),wl(3563,"code"),Ux(3564,"help"),ng(),Ux(3565," e "),wl(3566,"code"),Ux(3567,"label"),ng(),Ux(3568,"."),ng()(),wl(3569,"p")(3570,"strong"),Ux(3571,"Componentes compat\xEDveis:"),ng(),wl(3572,"code"),Ux(3573,"po-datepicker"),ng(),Ux(3574,", "),wl(3575,"code"),Ux(3576,"po-datepicker-range"),ng(),Ux(3577,", "),wl(3578,"code"),Ux(3579,"po-timepicker"),ng(),Ux(3580,", "),wl(3581,"code"),Ux(3582,"po-input"),ng(),Ux(3583,", "),wl(3584,"code"),Ux(3585,"po-number"),ng(),Ux(3586,`,
`),wl(3587,"code"),Ux(3588,"po-decimal"),ng(),Ux(3589,", "),wl(3590,"code"),Ux(3591,"po-select"),ng(),Ux(3592,", "),wl(3593,"code"),Ux(3594,"po-radio-group"),ng(),Ux(3595,", "),wl(3596,"code"),Ux(3597,"po-combo"),ng(),Ux(3598,", "),wl(3599,"code"),Ux(3600,"po-lookup"),ng(),Ux(3601,", "),wl(3602,"code"),Ux(3603,"po-checkbox-group"),ng(),Ux(3604,", "),wl(3605,"code"),Ux(3606,"po-multiselect"),ng(),Ux(3607,`,
`),wl(3608,"code"),Ux(3609,"po-textarea"),ng(),Ux(3610,", "),wl(3611,"code"),Ux(3612,"po-password"),ng(),Ux(3613,"."),ng()()(),wl(3614,"tr",13)(3615,"td",14)(3616,"div",15)(3617,"span",16),Ux(3618," options"),Ul(3619,"br"),ng()()(),wl(3620,"td",17)(3621,"code",32),Ux(3622,"Array<string> "),ng(),wl(3623,"code",69),Ux(3624," Array<PoSelectOption> "),ng(),wl(3625,"code",70),Ux(3626," Array<PoMultiselectOption> "),ng(),wl(3627,"code",71),Ux(3628," Array<PoCheckboxGroupOption> "),ng(),wl(3629,"code",72),Ux(3630," Array<any>"),ng()(),wl(3631,"td",20)(3632,"em")(3633,"strong"),Ux(3634,"(opcional)"),ng()(),wl(3635,"p"),Ux(3636,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),ng(),wl(3637,"p")(3638,"strong"),Ux(3639,"Componentes compat\xEDveis:"),ng(),wl(3640,"code"),Ux(3641,"po-select"),ng(),Ux(3642,", "),wl(3643,"code"),Ux(3644,"po-radio-group"),ng(),Ux(3645,", "),wl(3646,"code"),Ux(3647,"po-checkbox-group"),ng(),Ux(3648,", "),wl(3649,"code"),Ux(3650,"po-multiselect"),ng(),Ux(3651,"."),ng()()(),wl(3652,"tr",13)(3653,"td",14)(3654,"div",15)(3655,"span",16),Ux(3656," optionsMulti"),Ul(3657,"br"),ng()()(),wl(3658,"td",17)(3659,"code",28),Ux(3660,"boolean"),ng()(),wl(3661,"td",20)(3662,"em")(3663,"strong"),Ux(3664,"(opcional)"),ng()(),wl(3665,"p"),Ux(3666,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),ng()()(),wl(3667,"tr",13)(3668,"td",14)(3669,"div",15)(3670,"span",16),Ux(3671," optionsService"),Ul(3672,"br"),ng()()(),wl(3673,"td",17)(3674,"code",18),Ux(3675,"string "),ng(),wl(3676,"code",73),Ux(3677," PoComboFilter "),ng(),wl(3678,"code",74),Ux(3679," PoMultiselectFilter"),ng()(),wl(3680,"td",20)(3681,"em")(3682,"strong"),Ux(3683,"(opcional)"),ng()(),wl(3684,"p"),Ux(3685,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),wl(3686,"strong"),Ux(3687,"Importante"),ng()(),wl(3688,"blockquote")(3689,"p"),Ux(3690,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),wl(3691,"a",75),Ux(3692,"guia de API do PO UI"),ng(),Ux(3693,"."),ng()()()(),wl(3694,"tr",13)(3695,"td",14)(3696,"div",15)(3697,"span",16),Ux(3698," order"),Ul(3699,"br"),ng()()(),wl(3700,"td",17)(3701,"code",41),Ux(3702,"number"),ng()(),wl(3703,"td",20)(3704,"em")(3705,"strong"),Ux(3706,"(opcional)"),ng()(),wl(3707,"p"),Ux(3708,"Informa a ordem de exibi\xE7\xE3o do campo."),ng(),wl(3709,"p"),Ux(3710,"Exemplo de utiliza\xE7\xE3o:"),ng(),wl(3711,"p")(3712,"code"),Ux(3713,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),ng()(),wl(3714,"p"),Ux(3715,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),wl(3716,"code"),Ux(3717,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),ng()(),wl(3718,"p"),Ux(3719,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),ng(),wl(3720,"p"),Ux(3721,"Campos sem "),wl(3722,"code"),Ux(3723,"order"),ng(),Ux(3724,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),ng()()(),wl(3725,"tr",13)(3726,"td",14)(3727,"div",15)(3728,"span",16),Ux(3729," params"),Ul(3730,"br"),ng()()(),wl(3731,"td",17)(3732,"code",33),Ux(3733,"any"),ng()(),wl(3734,"td",20)(3735,"em")(3736,"strong"),Ux(3737,"(opcional)"),ng()(),wl(3738,"p"),Ux(3739,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),wl(3740,"code"),Ux(3741,"po-lookup"),ng(),Ux(3742,` e
`),wl(3743,"code"),Ux(3744,"po-combo"),ng(),Ux(3745,"."),ng(),wl(3746,"p"),Ux(3747,"Por exemplo, para o par\xE2metro "),wl(3748,"code"),Ux(3749,"{ age: 23 }"),ng(),Ux(3750," a URL da requisi\xE7\xE3o ficaria:"),ng(),wl(3751,"p")(3752,"code"),Ux(3753,"url + ?age=23&filter=Peter"),ng()()()(),wl(3754,"tr",13)(3755,"td",14)(3756,"div",15)(3757,"span",16),Ux(3758," pattern"),Ul(3759,"br"),ng()()(),wl(3760,"td",17)(3761,"code",18),Ux(3762,"string"),ng()(),wl(3763,"td",20)(3764,"em")(3765,"strong"),Ux(3766,"(opcional)"),ng()(),wl(3767,"p"),Ux(3768,"Regex para valida\xE7\xE3o do campo."),ng(),wl(3769,"p")(3770,"strong"),Ux(3771,"Componentes compat\xEDveis:"),ng(),wl(3772,"code"),Ux(3773,"po-input"),ng(),Ux(3774,", "),wl(3775,"code"),Ux(3776,"po-password"),ng(),Ux(3777,"."),ng()()(),wl(3778,"tr",13)(3779,"td",14)(3780,"div",15)(3781,"span",16),Ux(3782," placeholder"),Ul(3783,"br"),ng()()(),wl(3784,"td",17)(3785,"code",18),Ux(3786,"string"),ng()(),wl(3787,"td",20)(3788,"em")(3789,"strong"),Ux(3790,"(opcional)"),ng()(),wl(3791,"p"),Ux(3792,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),ng(),wl(3793,"p")(3794,"strong"),Ux(3795,"Componentes compat\xEDveis:"),ng(),wl(3796,"code"),Ux(3797,"po-datepicker"),ng(),Ux(3798,", "),wl(3799,"code"),Ux(3800,"po-datepicker-range"),ng(),Ux(3801,", "),wl(3802,"code"),Ux(3803,"po-timepicker"),ng(),Ux(3804,", "),wl(3805,"code"),Ux(3806,"po-input"),ng(),Ux(3807,", "),wl(3808,"code"),Ux(3809,"po-number"),ng(),Ux(3810,", "),wl(3811,"code"),Ux(3812,"po-decimal"),ng(),Ux(3813,", "),wl(3814,"code"),Ux(3815,"po-select"),ng(),Ux(3816,", "),wl(3817,"code"),Ux(3818,"po-combo"),ng(),Ux(3819,", "),wl(3820,"code"),Ux(3821,"po-lookup"),ng(),Ux(3822,", "),wl(3823,"code"),Ux(3824,"po-multiselect"),ng(),Ux(3825,", "),wl(3826,"code"),Ux(3827,"po-textarea"),ng(),Ux(3828,", "),wl(3829,"code"),Ux(3830,"po-password"),ng(),Ux(3831,"."),ng()()(),wl(3832,"tr",13)(3833,"td",14)(3834,"div",15)(3835,"span",16),Ux(3836," placeholderSearch"),Ul(3837,"br"),ng()()(),wl(3838,"td",17)(3839,"code",18),Ux(3840,"string"),ng()(),wl(3841,"td",20)(3842,"em")(3843,"strong"),Ux(3844,"(opcional)"),ng()(),wl(3845,"p"),Ux(3846,"Placeholder do campo de pesquisa do "),wl(3847,"code"),Ux(3848,"po-multiselect"),ng(),Ux(3849,"."),ng(),wl(3850,"blockquote")(3851,"p"),Ux(3852,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),ng()()()(),wl(3853,"tr",13)(3854,"td",14)(3855,"div",15)(3856,"span",16),Ux(3857," property"),Ul(3858,"br"),ng()()(),wl(3859,"td",17)(3860,"code",18),Ux(3861,"string"),ng()(),wl(3862,"td",20)(3863,"p"),Ux(3864,"Nome de refer\xEAncia do campo."),ng()()(),wl(3865,"tr",13)(3866,"td",14)(3867,"div",15)(3868,"span",16),Ux(3869," range"),Ul(3870,"br"),ng()()(),wl(3871,"td",17)(3872,"code",28),Ux(3873,"boolean"),ng()(),wl(3874,"td",20)(3875,"em")(3876,"strong"),Ux(3877,"(opcional)"),ng()(),wl(3878,"p"),Ux(3879,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),ng(),wl(3880,"blockquote")(3881,"p"),Ux(3882,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),ng()()()(),wl(3883,"tr",13)(3884,"td",14)(3885,"div",15)(3886,"span",16),Ux(3887," rangePresetOptions"),Ul(3888,"br"),ng()()(),wl(3889,"td",17)(3890,"code",76),Ux(3891,"Array<PoCalendarRangePreset>"),ng()(),wl(3892,"td",20)(3893,"em")(3894,"strong"),Ux(3895,"(opcional)"),ng()(),wl(3896,"p"),Ux(3897,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),ng(),wl(3898,"p"),Ux(3899,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),wl(3900,"code"),Ux(3901,"PoCalendarRangePreset"),ng(),Ux(3902,"."),ng(),wl(3903,"p")(3904,"strong"),Ux(3905,"Componente compat\xEDvel:"),ng(),wl(3906,"code"),Ux(3907,"po-datepicker-range"),ng()()()(),wl(3908,"tr",13)(3909,"td",14)(3910,"div",15)(3911,"span",16),Ux(3912," rangePresets"),Ul(3913,"br"),ng()()(),wl(3914,"td",17)(3915,"code",28),Ux(3916,"boolean "),ng(),wl(3917,"code",32),Ux(3918," Array<string>"),ng()(),wl(3919,"td",20)(3920,"em")(3921,"strong"),Ux(3922,"(opcional)"),ng()(),wl(3923,"p"),Ux(3924,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),ng(),wl(3925,"p"),Ux(3926,"Aceita os seguintes valores:"),ng(),wl(3927,"ul")(3928,"li")(3929,"code"),Ux(3930,"true"),ng(),Ux(3931,": exibe todos os presets padr\xE3o."),ng(),wl(3932,"li")(3933,"code"),Ux(3934,"false"),ng(),Ux(3935,": n\xE3o exibe os presets padr\xE3o."),ng(),wl(3936,"li")(3937,"code"),Ux(3938,"Array<string>"),ng(),Ux(3939,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),ng()(),wl(3940,"p")(3941,"strong"),Ux(3942,"Componente compat\xEDvel:"),ng(),wl(3943,"code"),Ux(3944,"po-datepicker-range"),ng()()()(),wl(3945,"tr",13)(3946,"td",14)(3947,"div",15)(3948,"span",16),Ux(3949," rangePresetsOrder"),Ul(3950,"br"),ng()()(),wl(3951,"td",17)(3952,"code",77),Ux(3953,"'asc' "),ng(),wl(3954,"code",78),Ux(3955," 'desc'"),ng()(),wl(3956,"td",20)(3957,"em")(3958,"strong"),Ux(3959,"(opcional)"),ng()(),wl(3960,"p"),Ux(3961,"Define a ordena\xE7\xE3o dos presets na lista."),ng(),wl(3962,"p"),Ux(3963,"Valores aceitos:"),ng(),wl(3964,"ul")(3965,"li")(3966,"code"),Ux(3967,"'asc'"),ng(),Ux(3968,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),ng(),wl(3969,"li")(3970,"code"),Ux(3971,"'desc'"),ng(),Ux(3972,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),ng()(),wl(3973,"p")(3974,"strong"),Ux(3975,"Componente compat\xEDvel:"),ng(),wl(3976,"code"),Ux(3977,"po-datepicker-range"),ng()()()(),wl(3978,"tr",13)(3979,"td",14)(3980,"div",15)(3981,"span",16),Ux(3982," readonly"),Ul(3983,"br"),ng()()(),wl(3984,"td",17)(3985,"code",28),Ux(3986,"boolean"),ng()(),wl(3987,"td",20)(3988,"em")(3989,"strong"),Ux(3990,"(opcional)"),ng()(),wl(3991,"p"),Ux(3992,"Indica que o campo ser\xE1 somente leitura."),ng(),wl(3993,"p")(3994,"strong"),Ux(3995,"Componentes compat\xEDveis:"),ng(),wl(3996,"code"),Ux(3997,"po-datepicker"),ng(),Ux(3998,", "),wl(3999,"code"),Ux(4e3,"po-datepicker-range"),ng(),Ux(4001,", "),wl(4002,"code"),Ux(4003,"po-timepicker"),ng(),Ux(4004,", "),wl(4005,"code"),Ux(4006,"po-input"),ng(),Ux(4007,", "),wl(4008,"code"),Ux(4009,"po-number"),ng(),Ux(4010,`,
`),wl(4011,"code"),Ux(4012,"po-decimal"),ng(),Ux(4013,", "),wl(4014,"code"),Ux(4015,"po-select"),ng(),Ux(4016,", "),wl(4017,"code"),Ux(4018,"po-textarea"),ng(),Ux(4019,", "),wl(4020,"code"),Ux(4021,"po-password"),ng(),Ux(4022,"."),ng()()(),wl(4023,"tr",13)(4024,"td",14)(4025,"div",15)(4026,"span",16),Ux(4027," removeInitialFilter"),Ul(4028,"br"),ng()()(),wl(4029,"td",17)(4030,"code",28),Ux(4031,"boolean"),ng()(),wl(4032,"td",20)(4033,"em")(4034,"strong"),Ux(4035,"(opcional)"),ng()(),wl(4036,"p"),Ux(4037,"Define que o filtro no primeiro clique ser\xE1 removido."),ng(),wl(4038,"blockquote")(4039,"p"),Ux(4040,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),ng()(),wl(4041,"p")(4042,"strong"),Ux(4043,"Componente compat\xEDvel"),ng(),Ux(4044,": "),wl(4045,"code"),Ux(4046,"po-combo"),ng()()()(),wl(4047,"tr",13)(4048,"td",14)(4049,"div",15)(4050,"span",16),Ux(4051," required"),Ul(4052,"br"),ng()()(),wl(4053,"td",17)(4054,"code",28),Ux(4055,"boolean"),ng()(),wl(4056,"td",20)(4057,"em")(4058,"strong"),Ux(4059,"(opcional)"),ng()(),wl(4060,"p"),Ux(4061,"Define a obrigatoriedade do campo."),ng(),wl(4062,"p")(4063,"strong"),Ux(4064,"Componentes compat\xEDveis:"),ng(),wl(4065,"code"),Ux(4066,"po-datepicker"),ng(),Ux(4067,", "),wl(4068,"code"),Ux(4069,"po-datepicker-range"),ng(),Ux(4070,", "),wl(4071,"code"),Ux(4072,"po-timepicker"),ng(),Ux(4073,", "),wl(4074,"code"),Ux(4075,"po-input"),ng(),Ux(4076,", "),wl(4077,"code"),Ux(4078,"po-number"),ng(),Ux(4079,`,
`),wl(4080,"code"),Ux(4081,"po-decimal"),ng(),Ux(4082,", "),wl(4083,"code"),Ux(4084,"po-select"),ng(),Ux(4085,", "),wl(4086,"code"),Ux(4087,"po-radio-group"),ng(),Ux(4088,", "),wl(4089,"code"),Ux(4090,"po-combo"),ng(),Ux(4091,", "),wl(4092,"code"),Ux(4093,"po-lookup"),ng(),Ux(4094,", "),wl(4095,"code"),Ux(4096,"po-checkbox-group"),ng(),Ux(4097,", "),wl(4098,"code"),Ux(4099,"po-multiselect"),ng(),Ux(4100,`,
`),wl(4101,"code"),Ux(4102,"po-textarea"),ng(),Ux(4103,", "),wl(4104,"code"),Ux(4105,"po-password``, "),ng(),Ux(4106,"po-upload`."),ng()()(),wl(4107,"tr",13)(4108,"td",14)(4109,"div",15)(4110,"span",16),Ux(4111," requiredFieldErrorMessage"),Ul(4112,"br"),ng()()(),wl(4113,"td",17)(4114,"code",28),Ux(4115,"boolean"),ng()(),wl(4116,"td",20)(4117,"em")(4118,"strong"),Ux(4119,"(opcional)"),ng()(),wl(4120,"p"),Ux(4121,"Exibe a mensagem setada na propriedade "),wl(4122,"code"),Ux(4123,"errorMessage"),ng(),Ux(4124," se o campo estiver vazio e for requerido."),ng(),wl(4125,"blockquote")(4126,"p"),Ux(4127,"Necess\xE1rio que a propriedade "),wl(4128,"code"),Ux(4129,"required"),ng(),Ux(4130," esteja habilitada."),ng()(),wl(4131,"p")(4132,"strong"),Ux(4133,"Componentes compat\xEDveis:"),ng(),wl(4134,"code"),Ux(4135,"po-datepicker"),ng(),Ux(4136,", "),wl(4137,"code"),Ux(4138,"po-timepicker"),ng(),Ux(4139,", "),wl(4140,"code"),Ux(4141,"po-input"),ng(),Ux(4142,", "),wl(4143,"code"),Ux(4144,"po-number"),ng(),Ux(4145,", "),wl(4146,"code"),Ux(4147,"po-decimal"),ng(),Ux(4148,", "),wl(4149,"code"),Ux(4150,"po-password"),ng(),Ux(4151,"."),ng()()(),wl(4152,"tr",13)(4153,"td",14)(4154,"div",15)(4155,"span",16),Ux(4156," restrictions"),Ul(4157,"br"),ng()()(),wl(4158,"td",17)(4159,"code",79),Ux(4160,"PoUploadFileRestrictions"),ng()(),wl(4161,"td",20)(4162,"em")(4163,"strong"),Ux(4164,"(opcional)"),ng()(),wl(4165,"p"),Ux(4166,"Objeto que segue a defini\xE7\xE3o da interface "),wl(4167,"code"),Ux(4168,"PoUploadFileRestrictions"),ng(),Ux(4169,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),ng(),wl(4170,"p")(4171,"strong"),Ux(4172,"Componente compat\xEDvel"),ng(),Ux(4173,": "),wl(4174,"code"),Ux(4175,"po-upload"),ng()()()(),wl(4176,"tr",13)(4177,"td",14)(4178,"div",15)(4179,"span",16),Ux(4180," rows"),Ul(4181,"br"),ng()()(),wl(4182,"td",17)(4183,"code",41),Ux(4184,"number"),ng()(),wl(4185,"td",20)(4186,"em")(4187,"strong"),Ux(4188,"(opcional)"),ng()(),wl(4189,"p"),Ux(4190,"Quantidade de linhas exibidas no "),wl(4191,"code"),Ux(4192,"po-textarea"),ng(),Ux(4193,"."),ng()()(),wl(4194,"tr",13)(4195,"td",14)(4196,"div",15)(4197,"span",16),Ux(4198," searchService"),Ul(4199,"br"),ng()()(),wl(4200,"td",17)(4201,"code",18),Ux(4202,"string "),ng(),wl(4203,"code",80),Ux(4204," PoLookupFilter"),ng()(),wl(4205,"td",20)(4206,"em")(4207,"strong"),Ux(4208,"(opcional)"),ng()(),wl(4209,"p"),Ux(4210,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),wl(4211,"code"),Ux(4212,"columns"),ng(),Ux(4213,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),wl(4214,"strong"),Ux(4215,"Importante:"),ng()(),wl(4216,"blockquote")(4217,"p"),Ux(4218,"Caso utilizar a propriedade "),wl(4219,"code"),Ux(4220,"optionsService"),ng(),Ux(4221,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),wl(4222,"a",75),Ux(4223,"guia de API do PO UI"),ng(),Ux(4224,"."),ng()()()(),wl(4225,"tr",13)(4226,"td",14)(4227,"div",15)(4228,"span",16),Ux(4229," secondInterval"),Ul(4230,"br"),ng()()(),wl(4231,"td",17)(4232,"code",41),Ux(4233,"number"),ng()(),wl(4234,"td",20)(4235,"em")(4236,"strong"),Ux(4237,"(opcional)"),ng()(),wl(4238,"p"),Ux(4239,"Define o intervalo entre os segundos exibidos no painel do timepicker."),ng()()(),wl(4240,"tr",13)(4241,"td",14)(4242,"div",15)(4243,"span",16),Ux(4244," secret"),Ul(4245,"br"),ng()()(),wl(4246,"td",17)(4247,"code",28),Ux(4248,"boolean"),ng()(),wl(4249,"td",20)(4250,"em")(4251,"strong"),Ux(4252,"(opcional)"),ng()(),wl(4253,"p"),Ux(4254,"Esconde a informa\xE7\xE3o estilo "),wl(4255,"em"),Ux(4256,"password"),ng(),Ux(4257,", pode ser utilizado quando o tipo de dado for "),wl(4258,"em"),Ux(4259,"string"),ng(),Ux(4260,"."),ng()()(),wl(4261,"tr",13)(4262,"td",14)(4263,"div",15)(4264,"span",16),Ux(4265," showRequired"),Ul(4266,"br"),ng()()(),wl(4267,"td",17)(4268,"code",28),Ux(4269,"boolean"),ng()(),wl(4270,"td",20)(4271,"em")(4272,"strong"),Ux(4273,"(opcional)"),ng()(),wl(4274,"p"),Ux(4275,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(4276,"blockquote")(4277,"p"),Ux(4278,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(4279,"ul")(4280,"li"),Ux(4281,"N\xE3o possuir "),wl(4282,"code"),Ux(4283,"p-help"),ng(),Ux(4284," e/ou "),wl(4285,"code"),Ux(4286,"p-label"),ng(),Ux(4287,"."),ng()(),wl(4288,"p")(4289,"strong"),Ux(4290,"Componentes compat\xEDveis:"),ng(),wl(4291,"code"),Ux(4292,"po-datepicker"),ng(),Ux(4293,", "),wl(4294,"code"),Ux(4295,"po-datepicker-range"),ng(),Ux(4296,", "),wl(4297,"code"),Ux(4298,"po-timepicker"),ng(),Ux(4299,", "),wl(4300,"code"),Ux(4301,"po-input"),ng(),Ux(4302,", "),wl(4303,"code"),Ux(4304,"po-number"),ng(),Ux(4305,`,
`),wl(4306,"code"),Ux(4307,"po-decimal"),ng(),Ux(4308,", "),wl(4309,"code"),Ux(4310,"po-select"),ng(),Ux(4311,", "),wl(4312,"code"),Ux(4313,"po-radio-group"),ng(),Ux(4314,", "),wl(4315,"code"),Ux(4316,"po-combo"),ng(),Ux(4317,", "),wl(4318,"code"),Ux(4319,"po-lookup"),ng(),Ux(4320,", "),wl(4321,"code"),Ux(4322,"po-checkbox-group"),ng(),Ux(4323,", "),wl(4324,"code"),Ux(4325,"po-multiselect"),ng(),Ux(4326,`,
`),wl(4327,"code"),Ux(4328,"po-textarea"),ng(),Ux(4329,", "),wl(4330,"code"),Ux(4331,"po-password"),ng(),Ux(4332,", "),wl(4333,"code"),Ux(4334,"po-upload"),ng(),Ux(4335,"."),ng()()(),wl(4336,"tr",13)(4337,"td",14)(4338,"div",15)(4339,"span",16),Ux(4340," showSeconds"),Ul(4341,"br"),ng()()(),wl(4342,"td",17)(4343,"code",28),Ux(4344,"boolean"),ng()(),wl(4345,"td",20)(4346,"em")(4347,"strong"),Ux(4348,"(opcional)"),ng()(),wl(4349,"p"),Ux(4350,"Exibe a coluna de segundos no painel do timepicker."),ng()()(),wl(4351,"tr",13)(4352,"td",14)(4353,"div",15)(4354,"span",16),Ux(4355," showThumbnail"),Ul(4356,"br"),ng()()(),wl(4357,"td",17)(4358,"code",28),Ux(4359,"boolean"),ng()(),wl(4360,"td",20)(4361,"em")(4362,"strong"),Ux(4363,"(opcional)"),ng()(),wl(4364,"p"),Ux(4365,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),ng(),wl(4366,"blockquote")(4367,"p"),Ux(4368,"Propriedade funciona apenas em arquivos de formato de imagem ("),wl(4369,"code"),Ux(4370,".png"),ng(),Ux(4371,", "),wl(4372,"code"),Ux(4373,".jpg"),ng(),Ux(4374,", "),wl(4375,"code"),Ux(4376,".jpeg"),ng(),Ux(4377," e "),wl(4378,"code"),Ux(4379,".gif"),ng(),Ux(4380,")."),ng()(),wl(4381,"p")(4382,"strong"),Ux(4383,"Componente compat\xEDvel"),ng(),Ux(4384,": "),wl(4385,"code"),Ux(4386,"po-upload"),ng()()()(),wl(4387,"tr",13)(4388,"td",14)(4389,"div",15)(4390,"span",16),Ux(4391," size"),Ul(4392,"br"),ng()()(),wl(4393,"td",17)(4394,"code",18),Ux(4395,"string"),ng()(),wl(4396,"td",20)(4397,"em")(4398,"strong"),Ux(4399,"(opcional)"),ng()(),wl(4400,"p"),Ux(4401,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),ng(),wl(4402,"ul")(4403,"li")(4404,"code"),Ux(4405,"small"),ng(),Ux(4406,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(4407,"li")(4408,"code"),Ux(4409,"medium"),ng(),Ux(4410,": aplica a medida medium de cada componente."),ng(),wl(4411,"li")(4412,"code"),Ux(4413,"large"),ng(),Ux(4414,": aplica a medida large de cada componente (dispon\xEDvel para "),wl(4415,"code"),Ux(4416,"po-checkbox"),ng(),Ux(4417," e "),wl(4418,"code"),Ux(4419,"po-radio-group"),ng(),Ux(4420,")."),wl(4421,"blockquote")(4422,"p"),Ux(4423,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(4424,"code"),Ux(4425,"medium"),ng(),Ux(4426,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(4427,"a",21),Ux(4428,"po-theme"),ng(),Ux(4429,"."),ng()()()()()(),wl(4430,"tr",13)(4431,"td",14)(4432,"div",15)(4433,"span",16),Ux(4434," sort"),Ul(4435,"br"),ng()()(),wl(4436,"td",17)(4437,"code",28),Ux(4438,"boolean"),ng()(),wl(4439,"td",20)(4440,"em")(4441,"strong"),Ux(4442,"(opcional)"),ng()(),wl(4443,"p"),Ux(4444,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),ng(),wl(4445,"p")(4446,"strong"),Ux(4447,"Componentes compat\xEDveis:"),ng(),wl(4448,"code"),Ux(4449,"po-combo"),ng(),Ux(4450,", po-multiselect"),ng()()(),wl(4451,"tr",13)(4452,"td",14)(4453,"div",15)(4454,"span",16),Ux(4455," step"),Ul(4456,"br"),ng()()(),wl(4457,"td",17)(4458,"code",41),Ux(4459,"number"),ng()(),wl(4460,"td",20)(4461,"em")(4462,"strong"),Ux(4463,"(opcional)"),ng()(),wl(4464,"p"),Ux(4465,"Intervalo utilizado no "),wl(4466,"code"),Ux(4467,"po-number"),ng(),Ux(4468,"."),ng()()(),wl(4469,"tr",13)(4470,"td",14)(4471,"div",15)(4472,"span",16),Ux(4473," thousandMaxlength"),Ul(4474,"br"),ng()()(),wl(4475,"td",17)(4476,"code",41),Ux(4477,"number"),ng()(),wl(4478,"td",20)(4479,"em")(4480,"strong"),Ux(4481,"(opcional)"),ng()(),wl(4482,"p"),Ux(4483,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),ng(),wl(4484,"blockquote")(4485,"p"),Ux(4486,"Esta propriedade s\xF3 pode ser utilizada quando o "),wl(4487,"code"),Ux(4488,"type"),ng(),Ux(4489," for "),wl(4490,"em"),Ux(4491,"currency"),ng(),Ux(4492," ou "),wl(4493,"em"),Ux(4494,"decimal"),ng(),Ux(4495,"."),ng()()()(),wl(4496,"tr",13)(4497,"td",14)(4498,"div",15)(4499,"span",16),Ux(4500," type"),Ul(4501,"br"),ng()()(),wl(4502,"td",17)(4503,"code",18),Ux(4504,"string "),ng(),wl(4505,"code",81),Ux(4506," PoDynamicFieldType"),ng()(),wl(4507,"td",20)(4508,"em")(4509,"strong"),Ux(4510,"(opcional)"),ng()(),wl(4511,"p"),Ux(4512,"Tipo do valor campo."),ng(),wl(4513,"p"),Ux(4514,"Valores v\xE1lidos:"),ng(),wl(4515,"ul")(4516,"li")(4517,"code"),Ux(4518,"boolean"),ng(),Ux(4519,": Valores "),wl(4520,"em"),Ux(4521,"booleanos"),ng(),Ux(4522,"."),ng(),wl(4523,"li")(4524,"code"),Ux(4525,"currency"),ng(),Ux(4526,": Valores monet\xE1rios."),ng(),wl(4527,"li")(4528,"code"),Ux(4529,"decimal"),ng(),Ux(4530,": Valores decimais."),ng(),wl(4531,"li")(4532,"code"),Ux(4533,"date"),ng(),Ux(4534,": Valores de datas."),wl(4535,"ul")(4536,"li"),Ux(4537,"Aceita os tipos "),wl(4538,"strong"),Ux(4539,"string"),ng(),Ux(4540," e "),wl(4541,"strong"),Ux(4542,"Date"),ng(),Ux(4543,` padr\xE3o do Javascript,
por exemplo: `),wl(4544,"code"),Ux(4545,"'2017-11-28'"),ng(),Ux(4546," ou "),wl(4547,"code"),Ux(4548,"new Date(2017, 10, 28)"),ng(),Ux(4549,"."),ng()()(),wl(4550,"li")(4551,"code"),Ux(4552,"dateTime"),ng(),Ux(4553,": Valor de data com hor\xE1rio."),wl(4554,"ul")(4555,"li"),Ux(4556,"Aceita o tipo "),wl(4557,"em"),Ux(4558,"string"),ng(),Ux(4559," no formato "),wl(4560,"strong"),Ux(4561,"ISO-8601"),ng(),Ux(4562," extendido "),wl(4563,"strong"),Ux(4564,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),ng(),Ux(4565,`
e o tipo `),wl(4566,"strong"),Ux(4567,"Date"),ng(),Ux(4568," padr\xE3o do Javascript, por exemplo: "),wl(4569,"code"),Ux(4570,"'2017-11-28T00:00:00-02:00'"),ng(),Ux(4571," ou "),wl(4572,"code"),Ux(4573,"new Date(2017, 10, 28)"),ng(),Ux(4574,"."),ng()()(),wl(4575,"li")(4576,"code"),Ux(4577,"number"),ng(),Ux(4578,": Valores num\xE9ricos."),ng(),wl(4579,"li")(4580,"code"),Ux(4581,"string"),ng(),Ux(4582,": Textos."),ng(),wl(4583,"li")(4584,"code"),Ux(4585,"time"),ng(),Ux(4586,": Valor do hor\xE1rio."),wl(4587,"ul")(4588,"li"),Ux(4589,"Aceita o tipo "),wl(4590,"strong"),Ux(4591,"string"),ng(),Ux(4592," nos formatos "),wl(4593,"strong"),Ux(4594,"'HH:mm:ss'"),ng(),Ux(4595," ou "),wl(4596,"strong"),Ux(4597,"'HH:mm:ss.ffffff'"),ng(),Ux(4598,", por exemplo: "),wl(4599,"code"),Ux(4600,"'23:12:45'"),ng(),Ux(4601,"."),ng()()()()()(),wl(4602,"tr",13)(4603,"td",14)(4604,"div",15)(4605,"span",16),Ux(4606," url"),Ul(4607,"br"),ng()()(),wl(4608,"td",17)(4609,"code",18),Ux(4610,"string"),ng()(),wl(4611,"td",20)(4612,"em")(4613,"strong"),Ux(4614,"(opcional)"),ng()(),wl(4615,"p"),Ux(4616,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),ng(),wl(4617,"p")(4618,"strong"),Ux(4619,"Componente compat\xEDvel"),ng(),Ux(4620,": "),wl(4621,"code"),Ux(4622,"po-upload"),ng()()()(),wl(4623,"tr",13)(4624,"td",14)(4625,"div",15)(4626,"span",16),Ux(4627," validate"),Ul(4628,"br"),ng()()(),wl(4629,"td",17)(4630,"code",18),Ux(4631,"string "),ng(),wl(4632,"code",29),Ux(4633," Function"),ng()(),wl(4634,"td",20)(4635,"em")(4636,"strong"),Ux(4637,"(opcional)"),ng()(),wl(4638,"p"),Ux(4639,"Fun\xE7\xE3o ou servi\xE7o para validar as "),wl(4640,"strong"),Ux(4641,"mudan\xE7as do campo"),ng(),Ux(4642,"."),ng(),wl(4643,"ul")(4644,"li"),Ux(4645,"A propriedade aceita os seguintes tipos:"),ng()(),wl(4646,"ul")(4647,"li")(4648,"strong"),Ux(4649,"String"),ng(),Ux(4650,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),wl(4651,"code"),Ux(4652,"POST"),ng(),Ux(4653,"."),ng(),wl(4654,"li")(4655,"strong"),Ux(4656,"Function"),ng(),Ux(4657,": M\xE9todo que ser\xE1 executado."),ng()(),wl(4658,"p"),Ux(4659,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),wl(4660,"code"),Ux(4661,"PoDynamicFormFieldChanged"),ng(),Ux(4662,":"),ng(),wl(4663,"p")(4664,"code"),Ux(4665,"{ property: 'property name', value: 'new value' }"),ng()(),wl(4666,"p"),Ux(4667,"O retorno desta fun\xE7\xE3o deve ser do tipo "),wl(4668,"a",82),Ux(4669,"PoDynamicFormFieldValidation"),ng(),Ux(4670,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),ng(),wl(4671,"pre")(4672,"code"),Ux(4673,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),ng()(),wl(4674,"p"),Ux(4675,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),wl(4676,"code"),Ux(4677,"bind"),ng(),Ux(4678,`, por exemplo:
`),wl(4679,"code"),Ux(4680,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),ng()()()(),wl(4681,"tr",13)(4682,"td",14)(4683,"div",15)(4684,"span",16),Ux(4685," visible"),Ul(4686,"br"),ng()()(),wl(4687,"td",17)(4688,"code",28),Ux(4689,"boolean"),ng()(),wl(4690,"td",20)(4691,"em")(4692,"strong"),Ux(4693,"(opcional)"),ng()(),wl(4694,"p"),Ux(4695,"Indica se o campo ser\xE1 vis\xEDvel."),ng()()(),wl(4696,"tr",13)(4697,"td",14)(4698,"div",15)(4699,"span",16),Ux(4700," yearRangeLimit"),Ul(4701,"br"),ng()()(),wl(4702,"td",17)(4703,"code",41),Ux(4704,"number"),ng()(),wl(4705,"td",20)(4706,"em")(4707,"strong"),Ux(4708,"(opcional)"),ng()(),wl(4709,"p"),Ux(4710,"Define o limite de anos exibidos na lista de anos do "),wl(4711,"code"),Ux(4712,"po-datepicker"),ng(),Ux(4713," nos modos "),wl(4714,"code"),Ux(4715,"month-year"),ng(),Ux(4716," e "),wl(4717,"code"),Ux(4718,"year"),ng(),Ux(4719,"."),ng()()()(),wl(4720,"h4",38)(4721,"code",5),Ux(4722,"PoDynamicFormLoad"),ng()(),wl(4723,"div",2)(4724,"p"),Ul(4725,"a",83),ng(),wl(4726,"p"),Ux(4727,"Estrutura de retorno no carregamento do formul\xE1rio."),ng()(),wl(4728,"h4",9),Ux(4729,"Propriedades"),ng(),wl(4730,"table",10)(4731,"tr",11)(4732,"th",12),Ux(4733,"Nome"),ng(),wl(4734,"th",12),Ux(4735,"Tipo"),ng(),wl(4736,"th",12),Ux(4737,"Descri\xE7\xE3o"),ng()(),wl(4738,"tr",13)(4739,"td",14)(4740,"div",15)(4741,"span",16),Ux(4742," fields"),Ul(4743,"br"),ng()()(),wl(4744,"td",17)(4745,"code",22),Ux(4746,"Array<PoDynamicFormField>"),ng()(),wl(4747,"td",20)(4748,"em")(4749,"strong"),Ux(4750,"(opcional)"),ng()(),wl(4751,"p"),Ux(4752,"Lista com as novas defini\xE7\xF5es dos campos."),ng(),wl(4753,"blockquote")(4754,"p"),Ux(4755,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),ng()()()(),wl(4756,"tr",13)(4757,"td",14)(4758,"div",15)(4759,"span",16),Ux(4760," focus"),Ul(4761,"br"),ng()()(),wl(4762,"td",17)(4763,"code",18),Ux(4764,"string"),ng()(),wl(4765,"td",20)(4766,"em")(4767,"strong"),Ux(4768,"(opcional)"),ng()(),wl(4769,"p"),Ux(4770,"Nome do campo que receber\xE1 o foco."),ng(),wl(4771,"p"),Ux(4772,"Exemplo:"),ng(),wl(4773,"pre")(4774,"code"),Ux(4775,`focus: 'name'
`),ng()()()(),wl(4776,"tr",13)(4777,"td",14)(4778,"div",15)(4779,"span",16),Ux(4780," value"),Ul(4781,"br"),ng()()(),wl(4782,"td",17)(4783,"code",33),Ux(4784,"any"),ng()(),wl(4785,"td",20)(4786,"em")(4787,"strong"),Ux(4788,"(opcional)"),ng()(),wl(4789,"p"),Ux(4790,"Objeto contendo os novos valores."),ng(),wl(4791,"p"),Ux(4792,"Exemplo:"),ng(),wl(4793,"pre")(4794,"code"),Ux(4795,`{
  name: 'new name',
  age: 10
}
`),ng()(),wl(4796,"blockquote")(4797,"p"),Ux(4798,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),ng()()()()(),wl(4799,"h4",38)(4800,"code",5),Ux(4801,"PoDynamicFormFieldChanged"),ng()(),wl(4802,"div",2)(4803,"p"),Ux(4804,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),ng()(),wl(4805,"h4",9),Ux(4806,"Propriedades"),ng(),wl(4807,"table",10)(4808,"tr",11)(4809,"th",12),Ux(4810,"Nome"),ng(),wl(4811,"th",12),Ux(4812,"Tipo"),ng(),wl(4813,"th",12),Ux(4814,"Descri\xE7\xE3o"),ng()(),wl(4815,"tr",13)(4816,"td",14)(4817,"div",15)(4818,"span",16),Ux(4819," property"),Ul(4820,"br"),ng()()(),wl(4821,"td",17)(4822,"code",18),Ux(4823,"string"),ng()(),wl(4824,"td",20)(4825,"p"),Ux(4826,"Valor da propriedade do campo."),ng()()(),wl(4827,"tr",13)(4828,"td",14)(4829,"div",15)(4830,"span",16),Ux(4831," value"),Ul(4832,"br"),ng()()(),wl(4833,"td",17)(4834,"code",33),Ux(4835,"any"),ng()(),wl(4836,"td",20)(4837,"p"),Ux(4838,"Novo valor do campo."),ng()()()(),wl(4839,"h4",38)(4840,"code",5),Ux(4841,"PoDynamicFormFieldValidation"),ng()(),wl(4842,"div",2)(4843,"p"),Ul(4844,"a",84),ng(),wl(4845,"p"),Ux(4846,"Estrutura de retorno da valida\xE7\xE3o de um campo."),ng()(),wl(4847,"h4",9),Ux(4848,"Propriedades"),ng(),wl(4849,"table",10)(4850,"tr",11)(4851,"th",12),Ux(4852,"Nome"),ng(),wl(4853,"th",12),Ux(4854,"Tipo"),ng(),wl(4855,"th",12),Ux(4856,"Descri\xE7\xE3o"),ng()(),wl(4857,"tr",13)(4858,"td",14)(4859,"div",15)(4860,"span",16),Ux(4861," field"),Ul(4862,"br"),ng()()(),wl(4863,"td",17)(4864,"code",85),Ux(4865,"PoDynamicFormField"),ng()(),wl(4866,"td",20)(4867,"em")(4868,"strong"),Ux(4869,"(opcional)"),ng()(),wl(4870,"p"),Ux(4871,"Novas defini\xE7\xF5es das propriedades do campo."),ng(),wl(4872,"blockquote")(4873,"p"),Ux(4874,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),ng()()()(),wl(4875,"tr",13)(4876,"td",14)(4877,"div",15)(4878,"span",16),Ux(4879," focus"),Ul(4880,"br"),ng()()(),wl(4881,"td",17)(4882,"code",28),Ux(4883,"boolean"),ng()(),wl(4884,"td",20)(4885,"em")(4886,"strong"),Ux(4887,"(opcional)"),ng()(),wl(4888,"p"),Ux(4889,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),ng()()(),wl(4890,"tr",13)(4891,"td",14)(4892,"div",15)(4893,"span",16),Ux(4894," value"),Ul(4895,"br"),ng()()(),wl(4896,"td",17)(4897,"code",33),Ux(4898,"any"),ng()(),wl(4899,"td",20)(4900,"em")(4901,"strong"),Ux(4902,"(opcional)"),ng()(),wl(4903,"p"),Ux(4904,"Novo valor do campo"),ng()()()(),wl(4905,"h4",38)(4906,"code",5),Ux(4907,"PoDynamicFormValidation"),ng()(),wl(4908,"div",2)(4909,"p"),Ul(4910,"a",86),ng(),wl(4911,"p"),Ux(4912,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),ng()(),wl(4913,"h4",9),Ux(4914,"Propriedades"),ng(),wl(4915,"table",10)(4916,"tr",11)(4917,"th",12),Ux(4918,"Nome"),ng(),wl(4919,"th",12),Ux(4920,"Tipo"),ng(),wl(4921,"th",12),Ux(4922,"Descri\xE7\xE3o"),ng()(),wl(4923,"tr",13)(4924,"td",14)(4925,"div",15)(4926,"span",16),Ux(4927," fields"),Ul(4928,"br"),ng()()(),wl(4929,"td",17)(4930,"code",22),Ux(4931,"Array<PoDynamicFormField>"),ng()(),wl(4932,"td",20)(4933,"em")(4934,"strong"),Ux(4935,"(opcional)"),ng()(),wl(4936,"p"),Ux(4937,"Lista com as novas defini\xE7\xF5es dos campos."),ng(),wl(4938,"blockquote")(4939,"p"),Ux(4940,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),ng()()()(),wl(4941,"tr",13)(4942,"td",14)(4943,"div",15)(4944,"span",16),Ux(4945," focus"),Ul(4946,"br"),ng()()(),wl(4947,"td",17)(4948,"code",18),Ux(4949,"string"),ng()(),wl(4950,"td",20)(4951,"em")(4952,"strong"),Ux(4953,"(opcional)"),ng()(),wl(4954,"p"),Ux(4955,"Nome do campo que receber\xE1 o foco."),ng(),wl(4956,"p"),Ux(4957,"Exemplo:"),ng(),wl(4958,"pre")(4959,"code"),Ux(4960,`focus: 'name'
`),ng()()()(),wl(4961,"tr",13)(4962,"td",14)(4963,"div",15)(4964,"span",16),Ux(4965," value"),Ul(4966,"br"),ng()()(),wl(4967,"td",17)(4968,"code",33),Ux(4969,"any"),ng()(),wl(4970,"td",20)(4971,"em")(4972,"strong"),Ux(4973,"(opcional)"),ng()(),wl(4974,"p"),Ux(4975,"Objeto contendo os novos valores."),ng(),wl(4976,"p"),Ux(4977,"Exemplo:"),ng(),wl(4978,"pre")(4979,"code"),Ux(4980,`{
  name: 'new name',
  age: 10
}
`),ng()(),wl(4981,"blockquote")(4982,"p"),Ux(4983,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),ng()()()()(),wl(4984,"h4",38)(4985,"code",5),Ux(4986,"ErrorAsyncProperties"),ng()(),wl(4987,"div",2)(4988,"p"),Ux(4989,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),ng()(),wl(4990,"h4",9),Ux(4991,"Propriedades"),ng(),wl(4992,"table",10)(4993,"tr",11)(4994,"th",12),Ux(4995,"Nome"),ng(),wl(4996,"th",12),Ux(4997,"Tipo"),ng(),wl(4998,"th",12),Ux(4999,"Descri\xE7\xE3o"),ng()(),wl(5e3,"tr",13)(5001,"td",14)(5002,"div",15)(5003,"span",16),Ux(5004," errorAsync"),Ul(5005,"br"),ng()()(),wl(5006,"td",17)(5007,"code",46),Ux(5008,"(value) => Observable<boolean>"),ng()(),wl(5009,"td",20)(5010,"p"),Ux(5011,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),wl(5012,"code"),Ux(5013,"change"),ng(),Ux(5014," ou "),wl(5015,"code"),Ux(5016,"change-model"),ng(),Ux(5017,", dependendo do valor da propriedade "),wl(5018,"code"),Ux(5019,"triggerMode"),ng(),Ux(5020,"."),ng()()(),wl(5021,"tr",13)(5022,"td",14)(5023,"div",15)(5024,"span",16),Ux(5025," triggerMode"),Ul(5026,"br"),ng()()(),wl(5027,"td",17)(5028,"code",87),Ux(5029,"'change' "),ng(),wl(5030,"code",88),Ux(5031," 'changeModel'"),ng()(),wl(5032,"td",20)(5033,"em")(5034,"strong"),Ux(5035,"(opcional)"),ng()(),wl(5036,"p"),Ux(5037,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),wl(5038,"code"),Ux(5039,"change"),ng(),Ux(5040," ou "),wl(5041,"code"),Ux(5042,"change-model"),ng(),Ux(5043,"."),ng()()()(),wl(5044,"h3"),Ux(5045,"Enums"),ng(),wl(5046,"h4",4)(5047,"code",5),Ux(5048,"ForceBooleanComponentEnum"),ng()(),wl(5049,"div",2)(5050,"p"),Ux(5051,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),ng()(),wl(5052,"h4",9),Ux(5053,"Propriedades"),ng(),wl(5054,"table",10)(5055,"tr",11)(5056,"th",12),Ux(5057,"Nome"),ng(),wl(5058,"th",12),Ux(5059,"Descri\xE7\xE3o"),ng()(),wl(5060,"tr",13)(5061,"td",14)(5062,"div",15)(5063,"span",16),Ux(5064," switch"),Ul(5065,"br"),ng()()(),wl(5066,"td",20)(5067,"p"),Ux(5068,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),ng()()(),wl(5069,"tr",13)(5070,"td",14)(5071,"div",15)(5072,"span",16),Ux(5073," checkbox"),Ul(5074,"br"),ng()()(),wl(5075,"td",20)(5076,"p"),Ux(5077,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),ng()()()(),wl(5078,"h4",4)(5079,"code",5),Ux(5080,"ForceOptionComponentEnum"),ng()(),wl(5081,"div",2)(5082,"p"),Ux(5083,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),ng()(),wl(5084,"h4",9),Ux(5085,"Propriedades"),ng(),wl(5086,"table",10)(5087,"tr",11)(5088,"th",12),Ux(5089,"Nome"),ng(),wl(5090,"th",12),Ux(5091,"Descri\xE7\xE3o"),ng()(),wl(5092,"tr",13)(5093,"td",14)(5094,"div",15)(5095,"span",16),Ux(5096," radioGroup"),Ul(5097,"br"),ng()()(),wl(5098,"td",20)(5099,"p"),Ux(5100,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),ng()()(),wl(5101,"tr",13)(5102,"td",14)(5103,"div",15)(5104,"span",16),Ux(5105," select"),Ul(5106,"br"),ng()()(),wl(5107,"td",20)(5108,"p"),Ux(5109,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),ng()()()(),wl(5110,"h4",4)(5111,"code",5),Ux(5112,"PoDynamicFieldType"),ng()(),wl(5113,"div",2)(5114,"p"),Ux(5115,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),ng()(),wl(5116,"h4",9),Ux(5117,"Propriedades"),ng(),wl(5118,"table",10)(5119,"tr",11)(5120,"th",12),Ux(5121,"Nome"),ng(),wl(5122,"th",12),Ux(5123,"Descri\xE7\xE3o"),ng()(),wl(5124,"tr",13)(5125,"td",14)(5126,"div",15)(5127,"span",16),Ux(5128," Boolean"),Ul(5129,"br"),ng()()(),wl(5130,"td",20)(5131,"p"),Ux(5132,"Valor booleano."),ng()()(),wl(5133,"tr",13)(5134,"td",14)(5135,"div",15)(5136,"span",16),Ux(5137," Currency"),Ul(5138,"br"),ng()()(),wl(5139,"td",20)(5140,"p"),Ux(5141,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),ng()()(),wl(5142,"tr",13)(5143,"td",14)(5144,"div",15)(5145,"span",16),Ux(5146," Decimal"),Ul(5147,"br"),ng()()(),wl(5148,"td",20)(5149,"p"),Ux(5150,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),ng()()(),wl(5151,"tr",13)(5152,"td",14)(5153,"div",15)(5154,"span",16),Ux(5155," Date"),Ul(5156,"br"),ng()()(),wl(5157,"td",20)(5158,"p"),Ux(5159,"Valor para data."),ng()()(),wl(5160,"tr",13)(5161,"td",14)(5162,"div",15)(5163,"span",16),Ux(5164," DateTime"),Ul(5165,"br"),ng()()(),wl(5166,"td",20)(5167,"p"),Ux(5168,"Valor para data e hora."),ng()()(),wl(5169,"tr",13)(5170,"td",14)(5171,"div",15)(5172,"span",16),Ux(5173," Time"),Ul(5174,"br"),ng()()(),wl(5175,"td",20)(5176,"p"),Ux(5177,"Utilizado para informar/exibir hora."),ng()()(),wl(5178,"tr",13)(5179,"td",14)(5180,"div",15)(5181,"span",16),Ux(5182," Number"),Ul(5183,"br"),ng()()(),wl(5184,"td",20)(5185,"p"),Ux(5186,"Valor num\xE9rico."),ng()()(),wl(5187,"tr",13)(5188,"td",14)(5189,"div",15)(5190,"span",16),Ux(5191," String"),Ul(5192,"br"),ng()()(),wl(5193,"td",20)(5194,"p"),Ux(5195,"Texto."),ng()()(),wl(5196,"tr",13)(5197,"td",14)(5198,"div",15)(5199,"span",16),Ux(5200," Upload"),Ul(5201,"br"),ng()()(),wl(5202,"td",20)(5203,"p"),Ux(5204,"Utilizado para fazer uploads de arquivos."),ng()()()(),wl(5205,"h4",4)(5206,"code",5),Ux(5207,"PoTimepickerModelFormat"),ng()(),wl(5208,"div",2)(5209,"p")(5210,"em"),Ux(5211,"Enum"),ng(),Ux(5212," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),ng()(),wl(5213,"h4",9),Ux(5214,"Propriedades"),ng(),wl(5215,"table",10)(5216,"tr",11)(5217,"th",12),Ux(5218,"Nome"),ng(),wl(5219,"th",12),Ux(5220,"Descri\xE7\xE3o"),ng()(),wl(5221,"tr",13)(5222,"td",14)(5223,"div",15)(5224,"span",16),Ux(5225," HourMinute"),Ul(5226,"br"),ng()()(),wl(5227,"td",20)(5228,"p"),Ux(5229,"Formato b\xE1sico "),wl(5230,"code"),Ux(5231,"HH:mm"),ng(),Ux(5232," (ex: "),wl(5233,"code"),Ux(5234,"14:30"),ng(),Ux(5235,")."),ng()()(),wl(5236,"tr",13)(5237,"td",14)(5238,"div",15)(5239,"span",16),Ux(5240," HourMinuteSecond"),Ul(5241,"br"),ng()()(),wl(5242,"td",20)(5243,"p"),Ux(5244,"Formato com segundos "),wl(5245,"code"),Ux(5246,"HH:mm:ss"),ng(),Ux(5247," (ex: "),wl(5248,"code"),Ux(5249,"14:30:00"),ng(),Ux(5250,")."),ng()()()()());},dependencies:[fP],encapsulation:2})}return o})();var me=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,r){a&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return r.changeTab("doc")}),Ul(3,"sample-po-dynamic-form-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return r.changeTab("web")}),Ul(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),ng()()()),a&2&&(YE("p-actions",r.actions),Pp(2),YE("p-active",r.activeTab==="doc"),Pp(2),YE("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[D3,Vd,Rd,te,ne,ae,re],encapsulation:2})}return o})();var Fe=[{path:"",component:me}],le=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[vL.forChild(Fe),vL]})}return o})();var pt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[u5,le]})}return o})();export{pt as DocPoDynamicFormModule};