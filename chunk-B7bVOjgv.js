import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,w,d as f,aW as Yp,cK as yfe,c as r$1,b2 as eme,M as Wl,T as tw,bs as dN,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,b0 as Qt,aB as Ex,bd as xx,X as we,av as ql,aw as lo,ax as uo,a3 as pNe,aD as Xy,aE as Qy}from'./main-QNYCBKHQ.js';var me=()=>({property:"name",required:true,showRequired:true}),le=o=>[o],G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,r){a&1&&Wl(0,"po-dynamic-form",0),a&2&&tw("p-fields",dN(2,le,uN(1,me)));},dependencies:[eme],encapsulation:2,changeDetection:1})}return o})();var pe=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dynamic Form Basic"),sg(),Sl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-dynamic-form-basic"),sg(),Wl(23,"hr")),a&2&&(Vp(5),Hx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,pe,r.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,G],encapsulation:2})}return o})();var U=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ce=["dynamicForm"],ee=(()=>{class o{poNotification=f(Yp);registerService=f(U);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:true,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:yfe.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return setTimeout(()=>{let a=this.registerService.getCity(m.value.state);this.updateDynamicFormField("city",{options:a,loading:false});},500),{value:{city:void 0},fields:[{property:"city",gridColumns:6,disabled:false,loading:true}]}}onLoadFields(m){return this.registerService.getUserDocument(m)}updateDynamicFormField(m,a){let r=this.dynamicForm?.fields??this.fields,l=r.findIndex(O=>O.property===m);l>=0&&(r[l]=r$1(r$1({},r[l]),a),this.fields=[...r]);}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register"]],viewQuery:function(a,r){if(a&1&&ql(ce,7),a&2){let l;lo(l=uo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([U])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=Ex();Wl(0,"po-dynamic-form",1,0)(2,"br"),Sl(3,"div",2)(4,"po-button",3),ht("p-click",function(){Xy(l);let I=xx(1);return r.poNotification.success("Data saved successfully!"),Qy(I.form.reset())}),sg()();}if(a&2){let l=xx(1);tw("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Vp(4),tw("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Qt,eme],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dynamic Form - Register"),sg(),Sl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-dynamic-form
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-dynamic-form-register"),sg(),Wl(27,"hr")),a&2&&(Vp(5),Hx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ee,r.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ee],encapsulation:2})}return o})();var K=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=w({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Se=["dynamicForm"],ie=(()=>{class o{poNotification=f(Yp);registerService=f(K);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:true,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:yfe.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:true},customActionClick:m=>{console.log("Iniciar download para o arquivo:",m.name);}}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return {value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(m.value.state),disabled:false}]}}onKeyDown(m,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(m);}onLoadFields(m){return this.registerService.getUserDocument(m)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,r){if(a&1&&ql(Se,7),a&2){let l;lo(l=uo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([K])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=Ex();Wl(0,"po-dynamic-form",1,0)(2,"br"),Sl(3,"div",2)(4,"po-button",3),ht("p-click",function(){Xy(l);let I=xx(1);return r.poNotification.success("Data saved successfully!"),Qy(I.form.reset())}),sg()();}if(a&2){let l=xx(1);tw("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Vp(4),tw("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Qt,eme],encapsulation:2,changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Dynamic Form - Container"),sg(),Sl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-dynamic-form
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Sl(21,"label",6),Jx(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),sg(),Sl(23,"pre",9),Jx(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Sl(25,"div",10),Wl(26,"sample-po-dynamic-form-container"),sg(),Wl(27,"hr")),a&2&&(Vp(5),Hx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ge,r.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ie],encapsulation:2})}return o})();var oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:false,decls:5251,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,r){a&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),sg()(),Wl(4,"div",2),Sl(5,"h3",3),Jx(6,"Componente"),sg(),Sl(7,"h4",4)(8,"code",5),Jx(9,"PoDynamicFormComponent"),sg()(),Sl(10,"div",2)(11,"p"),Jx(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),sg(),Sl(13,"p"),Jx(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),sg()(),Sl(15,"div",6)(16,"h4",7),Jx(17,"Seletor"),sg(),Sl(18,"pre",8),Jx(19,`<po-dynamic-form
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
`),sg()(),Sl(20,"h4",9),Jx(21,"Propriedades"),sg(),Sl(22,"table",10)(23,"tr",11)(24,"th",12),Jx(25,"Nome"),sg(),Sl(26,"th",12),Jx(27,"Tipo"),sg(),Sl(28,"th",12),Jx(29,"Padr\xE3o"),sg(),Sl(30,"th",12),Jx(31,"Descri\xE7\xE3o"),sg()(),Sl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),Jx(36," p-auto-focus"),Wl(37,"br"),sg()()(),Sl(38,"td",17)(39,"code",18),Jx(40,"string"),sg()(),Sl(41,"td",19),Jx(42,"-"),sg(),Sl(43,"td",20)(44,"em")(45,"strong"),Jx(46,"(opcional)"),sg()(),Sl(47,"p"),Jx(48,"Nome da propriedade, atribu\xEDda ao "),Sl(49,"code"),Jx(50,"PoDynamicFormField.property"),sg(),Jx(51,", que iniciar\xE1 o campo com foco."),sg()()(),Sl(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),Jx(56," p-components-size"),Wl(57,"br"),sg()()(),Sl(58,"td",17)(59,"code",18),Jx(60,"string"),sg()(),Sl(61,"td",19)(62,"p")(63,"code"),Jx(64,"medium"),sg()()(),Sl(65,"td",20)(66,"em")(67,"strong"),Jx(68,"(opcional)"),sg()(),Sl(69,"p"),Jx(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Sl(71,"ul")(72,"li")(73,"code"),Jx(74,"small"),sg(),Jx(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(76,"li")(77,"code"),Jx(78,"medium"),sg(),Jx(79,": aplica a medida medium de cada componente."),sg()(),Sl(80,"blockquote")(81,"p"),Jx(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(83,"code"),Jx(84,"medium"),sg(),Jx(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(86,"a",21),Jx(87,"po-theme"),sg(),Jx(88,"."),sg()()()(),Sl(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),Jx(93," p-fields"),Wl(94,"br"),sg()()(),Sl(95,"td",17)(96,"code",22),Jx(97,"Array<PoDynamicFormField>"),sg()(),Sl(98,"td",19)(99,"p")(100,"code"),Jx(101,"[]"),sg()()(),Sl(102,"td",20)(103,"p"),Jx(104,"Cole\xE7\xE3o de objetos que implementam a interface "),Sl(105,"code"),Jx(106,"PoDynamicFormField"),sg(),Jx(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),sg(),Sl(108,"blockquote")(109,"p"),Jx(110,"Ex: "),Sl(111,"code"),Jx(112,"[ { property: 'name' } ]"),sg()()(),Sl(113,"p"),Jx(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),sg(),Sl(115,"ul")(116,"li"),Jx(117,"Caso o "),Sl(118,"em"),Jx(119,"type"),sg(),Jx(120," informado seja "),Sl(121,"em"),Jx(122,"boolean"),sg(),Jx(123," o componente criado ser\xE1 o "),Sl(124,"code"),Jx(125,"po-switch"),sg(),Jx(126,"."),sg(),Sl(127,"li"),Jx(128,"Caso o "),Sl(129,"em"),Jx(130,"type"),sg(),Jx(131," informado seja "),Sl(132,"em"),Jx(133,"currency"),sg(),Jx(134," e n\xE3o seja informado um "),Sl(135,"em"),Jx(136,"mask"),sg(),Jx(137," ou "),Sl(138,"em"),Jx(139,"pattern"),sg(),Jx(140," o componente criado ser\xE1 o "),Sl(141,"code"),Jx(142,"po-decimal"),sg(),Jx(143,`,
caso seja informado um `),Sl(144,"em"),Jx(145,"mask"),sg(),Jx(146," ou "),Sl(147,"em"),Jx(148,"pattern"),sg(),Jx(149," o componente criado ser\xE1 o "),Sl(150,"code"),Jx(151,"po-input"),sg(),Jx(152,"."),sg(),Sl(153,"li"),Jx(154,"Caso o "),Sl(155,"em"),Jx(156,"type"),sg(),Jx(157," informado seja "),Sl(158,"em"),Jx(159,"number"),sg(),Jx(160," e n\xE3o seja informado um "),Sl(161,"em"),Jx(162,"mask"),sg(),Jx(163," ou "),Sl(164,"em"),Jx(165,"pattern"),sg(),Jx(166," o componente criado ser\xE1 o "),Sl(167,"code"),Jx(168,"po-number"),sg(),Jx(169,`, caso seja
informado um `),Sl(170,"em"),Jx(171,"mask"),sg(),Jx(172," ou "),Sl(173,"em"),Jx(174,"pattern"),sg(),Jx(175," o componente criado ser\xE1 o "),Sl(176,"code"),Jx(177,"po-input"),sg(),Jx(178,"."),sg(),Sl(179,"li"),Jx(180,"Caso a lista possua a propriedade "),Sl(181,"code"),Jx(182,"options"),sg(),Jx(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),Sl(184,"code"),Jx(185,"po-radio-group"),sg(),Jx(186,`
ou `),Sl(187,"code"),Jx(188,"po-checkbox-group"),sg(),Jx(189," se informar a propriedade "),Sl(190,"code"),Jx(191,"optionsMulti"),sg(),Jx(192,"."),sg(),Sl(193,"li"),Jx(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),Sl(195,"code"),Jx(196,"po-select"),sg(),Jx(197," ou, "),Sl(198,"code"),Jx(199,"po-multiselect"),sg(),Jx(200," se a propriedade "),Sl(201,"code"),Jx(202,"optionsMulti"),sg(),Jx(203,`
for verdadeira.`),sg(),Sl(204,"li"),Jx(205,"Caso o "),Sl(206,"em"),Jx(207,"type"),sg(),Jx(208," informado seja "),Sl(209,"em"),Jx(210,"date"),sg(),Jx(211," ou "),Sl(212,"em"),Jx(213,"datetime"),sg(),Jx(214," o componente criado ser\xE1 o "),Sl(215,"code"),Jx(216,"po-datepicker"),sg(),Jx(217,"."),sg(),Sl(218,"li"),Jx(219,"Caso seja informado a propriedade "),Sl(220,"code"),Jx(221,"optionsService"),sg(),Jx(222," o componente criado ser\xE1 o "),Sl(223,"code"),Jx(224,"po-combo"),sg(),Jx(225,"."),sg(),Sl(226,"li"),Jx(227,"Caso o "),Sl(228,"em"),Jx(229,"type"),sg(),Jx(230," informado seja "),Sl(231,"em"),Jx(232,"time"),sg(),Jx(233," o componente criado ser\xE1 um "),Sl(234,"code"),Jx(235,"po-input"),sg(),Jx(236," podendo receber um "),Sl(237,"em"),Jx(238,"mask"),sg(),Jx(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),Sl(240,"em"),Jx(241,"mask"),sg(),Jx(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),sg(),Sl(243,"li"),Jx(244,"Caso a lista possua a propriedade "),Sl(245,"code"),Jx(246,"rows"),sg(),Jx(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),Sl(248,"code"),Jx(249,"po-textarea"),sg(),Jx(250,", caso o valor da propriedade "),Sl(251,"code"),Jx(252,"rows"),sg(),Jx(253," seja menor que 3 o componente criado ser\xE1 o "),Sl(254,"code"),Jx(255,"po-input"),sg(),Jx(256,"."),sg(),Sl(257,"li"),Jx(258,"Caso seja informada a propriedade "),Sl(259,"code"),Jx(260,"secret"),sg(),Jx(261," o componente criado ser\xE1 o "),Sl(262,"code"),Jx(263,"po-password"),sg(),Jx(264,"."),sg(),Sl(265,"li"),Jx(266,"Caso o "),Sl(267,"em"),Jx(268,"type"),sg(),Jx(269," informado seja "),Sl(270,"em"),Jx(271,"string"),sg(),Jx(272," o componente criado ser\xE1 o "),Sl(273,"code"),Jx(274,"po-input"),sg(),Jx(275,"."),Sl(276,"blockquote")(277,"p"),Jx(278,"Ao alterar o valor das "),Sl(279,"code"),Jx(280,"properties"),sg(),Jx(281,", visibilidade e/ou agrupamentos via container, os "),Sl(282,"code"),Jx(283,"fields"),sg(),Jx(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),sg()()()()()(),Sl(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),Jx(289," (p-form)"),Wl(290,"br"),sg()()(),Sl(291,"td",17)(292,"code",25),Jx(293,"EventEmitter"),sg()(),Sl(294,"td",19),Jx(295,"-"),sg(),Sl(296,"td",20)(297,"em")(298,"strong"),Jx(299,"(opcional)"),sg()(),Sl(300,"p"),Jx(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),sg(),Sl(302,"p"),Jx(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),Sl(304,"em"),Jx(305,"template reference"),sg(),Jx(306," e atrav\xE9s do "),Sl(307,"em"),Jx(308,"output"),sg(),Jx(309,", veja os exemplos abaixo:"),sg(),Sl(310,"blockquote")(311,"p")(312,"em"),Jx(313,"template reference"),sg()()(),Sl(314,"pre")(315,"code",26),Jx(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),sg()(),Sl(317,"blockquote")(318,"p")(319,"em"),Jx(320,"Output"),sg()()(),Sl(321,"pre")(322,"code",26),Jx(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),sg()(),Sl(324,"pre")(325,"code",27),Jx(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),sg()(),Sl(327,"blockquote")(328,"p"),Jx(329,"Caso a propriedade "),Sl(330,"code"),Jx(331,"p-group-form"),sg(),Jx(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),sg()()()(),Sl(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),Jx(337," p-group-form"),Wl(338,"br"),sg()()(),Sl(339,"td",17)(340,"code",28),Jx(341,"boolean"),sg()(),Sl(342,"td",19),Jx(343,"-"),sg(),Sl(344,"td",20)(345,"em")(346,"strong"),Jx(347,"(opcional)"),sg()(),Sl(348,"p"),Jx(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),Sl(350,"code"),Jx(351,"FormControl"),sg(),Jx(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),sg(),Sl(353,"pre")(354,"code",26),Jx(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),sg()()()(),Sl(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),Jx(360," p-load"),Wl(361,"br"),sg()()(),Sl(362,"td",17)(363,"code",18),Jx(364,"string "),sg(),Sl(365,"code",29),Jx(366," Function"),sg()(),Sl(367,"td",19),Jx(368,"-"),sg(),Sl(369,"td",20)(370,"em")(371,"strong"),Jx(372,"(opcional)"),sg()(),Sl(373,"p"),Jx(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),sg(),Sl(375,"p"),Jx(376,"A propriedade aceita os seguintes tipos:"),sg(),Sl(377,"ul")(378,"li")(379,"code"),Jx(380,"string"),sg(),Jx(381,": "),Sl(382,"em"),Jx(383,"Endpoint"),sg(),Jx(384," usado pelo componente para requisi\xE7\xE3o via "),Sl(385,"code"),Jx(386,"POST"),sg(),Jx(387,"."),sg(),Sl(388,"li")(389,"code"),Jx(390,"function"),sg(),Jx(391,": M\xE9todo que ser\xE1 executado."),sg()(),Sl(392,"p"),Jx(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),Sl(394,"code"),Jx(395,"p-value"),sg(),Jx(396,"."),sg(),Sl(397,"p"),Jx(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Sl(399,"a",30),Jx(400,"PoDynamicFormLoad"),sg(),Jx(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),sg(),Sl(402,"p"),Jx(403,"Por exemplo:"),sg(),Sl(404,"pre")(405,"code"),Jx(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),sg()(),Sl(407,"p"),Jx(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Sl(409,"code"),Jx(410,"bind"),sg(),Jx(411,", por exemplo:"),sg(),Sl(412,"pre")(413,"code"),Jx(414,`[p-load]="onLoadFields.bind(this)"
`),sg()()()(),Sl(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),Jx(419," p-validate"),Wl(420,"br"),sg()()(),Sl(421,"td",17)(422,"code",18),Jx(423,"string "),sg(),Sl(424,"code",29),Jx(425," Function"),sg()(),Sl(426,"td",19),Jx(427,"-"),sg(),Sl(428,"td",20)(429,"em")(430,"strong"),Jx(431,"(opcional)"),sg()(),Sl(432,"p"),Jx(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Sl(434,"strong"),Jx(435,"mudan\xE7as do formul\xE1rio"),sg(),Jx(436,"."),sg(),Sl(437,"p"),Jx(438,"A propriedade aceita os seguintes tipos:"),sg(),Sl(439,"ul")(440,"li")(441,"code"),Jx(442,"string"),sg(),Jx(443,": "),Sl(444,"em"),Jx(445,"Endpoint"),sg(),Jx(446," usado pelo componente para requisi\xE7\xE3o via "),Sl(447,"code"),Jx(448,"POST"),sg(),Jx(449,"."),sg(),Sl(450,"li")(451,"code"),Jx(452,"function"),sg(),Jx(453,": M\xE9todo que ser\xE1 executado."),sg()(),Sl(454,"p"),Jx(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),Sl(456,"code"),Jx(457,"PoDynamicFormFieldChanged"),sg()(),Sl(458,"p"),Jx(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Sl(460,"a",31),Jx(461,"PoDynamicFormValidation"),sg(),Jx(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),sg(),Sl(463,"pre")(464,"code"),Jx(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),sg()(),Sl(466,"p"),Jx(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Sl(468,"code"),Jx(469,"bind"),sg(),Jx(470,", por exemplo:"),sg(),Sl(471,"pre")(472,"code"),Jx(473,`[p-validate]="this.myFunction.bind(this)"
`),sg()(),Sl(474,"blockquote")(475,"p"),Jx(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),Sl(477,"code"),Jx(478,"p-validate-fields"),sg(),Jx(479,", a propriedade "),Sl(480,"code"),Jx(481,"validate"),sg(),Jx(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),sg()()()(),Sl(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),Jx(487," p-validate-fields"),Wl(488,"br"),sg()()(),Sl(489,"td",17)(490,"code",32),Jx(491,"Array<string>"),sg()(),Sl(492,"td",19),Jx(493,"-"),sg(),Sl(494,"td",20)(495,"em")(496,"strong"),Jx(497,"(opcional)"),sg()(),Sl(498,"p"),Jx(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),sg()()(),Sl(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),Jx(504," p-validate-on-input"),Wl(505,"br"),sg()()(),Sl(506,"td",17)(507,"code",28),Jx(508,"boolean"),sg()(),Sl(509,"td",19),Jx(510,"-"),sg(),Sl(511,"td",20)(512,"em")(513,"strong"),Jx(514,"(opcional)"),sg()(),Sl(515,"p"),Jx(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),sg(),Sl(517,"p"),Jx(518,"Pode ser aplicado nos seguintes componentes:"),sg(),Sl(519,"ul")(520,"li"),Jx(521,"po-input"),sg(),Sl(522,"li"),Jx(523,"po-number"),sg(),Sl(524,"li"),Jx(525,"po-decimal"),sg(),Sl(526,"li"),Jx(527,"po-textarea"),sg(),Sl(528,"li"),Jx(529,"po-password"),sg()(),Sl(530,"p"),Jx(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),Sl(532,"code"),Jx(533,"p-validate-fields"),sg(),Jx(534,"."),sg()()(),Sl(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),Jx(539," p-value"),Wl(540,"br"),sg()()(),Sl(541,"td",17)(542,"code",33),Jx(543,"any"),sg()(),Sl(544,"td",19),Jx(545,"-"),sg(),Sl(546,"td",20)(547,"p"),Jx(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),Sl(549,"em"),Jx(550,"property"),sg(),Jx(551,`
dos objetos contidos na propridade `),Sl(552,"code"),Jx(553,"p-fields"),sg(),Jx(554,"."),sg(),Sl(555,"p"),Jx(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),sg(),Sl(557,"blockquote")(558,"p"),Jx(559,"Ex: "),Sl(560,"code"),Jx(561,"{ name: 'po' }"),sg()()()()()(),Sl(562,"h3",9),Jx(563,"M\xE9todos"),sg(),Sl(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),Jx(570," focus "),sg()()()()(),Sl(571,"tr",20)(572,"td",20)(573,"p"),Jx(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),sg(),Sl(575,"p"),Jx(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),Sl(577,"code"),Jx(578,"dynamic form"),sg(),Jx(579,", como por exemplo:"),sg(),Sl(580,"pre")(581,"code",26),Jx(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),sg()(),Sl(583,"pre")(584,"code",36),Jx(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),sg()()()()(),Sl(586,"h5")(587,"b"),Jx(588,"Par\xE2metros"),sg()(),Sl(589,"table",10)(590,"tr",11)(591,"th",12),Jx(592,"Nome"),sg(),Sl(593,"th",12),Jx(594,"Tipo"),sg(),Sl(595,"th",12),Jx(596,"Descri\xE7\xE3o"),sg()(),Sl(597,"tr",13)(598,"td",14),Jx(599," property"),sg(),Sl(600,"td",17)(601,"code",37),Jx(602," string "),sg()(),Sl(603,"td",20)(604,"p"),Jx(605,"Nome da propriedade atribu\xEDda ao "),Sl(606,"code"),Jx(607,"PoDynamicFormField.property"),sg(),Jx(608,"."),sg()()()(),Wl(609,"br"),Sl(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),Jx(616," showAdditionalHelp "),sg()()()()(),Sl(617,"tr",20)(618,"td",20)(619,"p"),Jx(620,"M\xE9todo que exibe "),Sl(621,"code"),Jx(622,"p-helper"),sg(),Jx(623," ou executa a a\xE7\xE3o definida em "),Sl(624,"code"),Jx(625,"p-helper{eventOnClick}"),sg(),Jx(626," ou em "),Sl(627,"code"),Jx(628,"p-additionalHelp"),sg(),Jx(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(630,"code"),Jx(631,"keydown"),sg(),Jx(632,"."),sg(),Sl(633,"pre")(634,"code"),Jx(635,`import { PoDynamicModule } from '@po-ui/ng-components';
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
`),sg()()()()(),Sl(636,"h5")(637,"b"),Jx(638,"Par\xE2metros"),sg()(),Sl(639,"table",10)(640,"tr",11)(641,"th",12),Jx(642,"Nome"),sg(),Sl(643,"th",12),Jx(644,"Tipo"),sg(),Sl(645,"th",12),Jx(646,"Descri\xE7\xE3o"),sg()(),Sl(647,"tr",13)(648,"td",14),Jx(649," property"),sg(),Sl(650,"td",17)(651,"code",37),Jx(652," string "),sg()(),Sl(653,"td",20)(654,"p"),Jx(655,"Identificador da coluna."),sg()()()(),Wl(656,"br"),Sl(657,"h3"),Jx(658,"Interfaces"),sg(),Sl(659,"h4",38)(660,"code",5),Jx(661,"PoDynamicFormField"),sg()(),Sl(662,"div",2)(663,"p"),Jx(664," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),sg()(),Sl(665,"h4",9),Jx(666,"Propriedades"),sg(),Sl(667,"table",10)(668,"tr",11)(669,"th",12),Jx(670,"Nome"),sg(),Sl(671,"th",12),Jx(672,"Tipo"),sg(),Sl(673,"th",12),Jx(674,"Descri\xE7\xE3o"),sg()(),Sl(675,"tr",13)(676,"td",14)(677,"div",15)(678,"span",16),Jx(679," additionalHelp"),Wl(680,"br"),sg()()(),Sl(681,"td",17)(682,"code",29),Jx(683,"Function"),sg()(),Sl(684,"td",20)(685,"em")(686,"strong"),Jx(687,"(opcional)"),sg()(),Sl(688,"p"),Jx(689,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(690,"blockquote")(691,"p"),Jx(692,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),sg()()()(),Sl(693,"tr",13)(694,"td",14)(695,"div",15)(696,"span",16),Jx(697," additionalHelpTooltip"),Wl(698,"br"),sg()()(),Sl(699,"td",17)(700,"code",18),Jx(701,"string"),sg()(),Sl(702,"td",20)(703,"em")(704,"strong"),Jx(705,"(opcional)"),sg()(),Sl(706,"p"),Jx(707,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(708,"code"),Jx(709,"po-helper"),sg(),Jx(710,`.
`),Sl(711,"strong"),Jx(712,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(713,"blockquote")(714,"p"),Jx(715,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),sg()()()(),Sl(716,"tr",13)(717,"td",14)(718,"div",15)(719,"span",16),Jx(720," advancedFilters"),Wl(721,"br"),sg()()(),Sl(722,"td",17)(723,"code",39),Jx(724,"Array<PoLookupAdvancedFilter>"),sg()(),Sl(725,"td",20)(726,"em")(727,"strong"),Jx(728,"(opcional)"),sg()(),Sl(729,"p"),Jx(730,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),sg(),Sl(731,"blockquote")(732,"p"),Jx(733,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),sg()(),Sl(734,"p"),Jx(735,"Exemplo de URL com busca avan\xE7ada:"),sg(),Sl(736,"p")(737,"code"),Jx(738,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),sg()(),Sl(739,"p"),Jx(740,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),sg(),Sl(741,"p")(742,"code"),Jx(743,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),sg()()()(),Sl(744,"tr",13)(745,"td",14)(746,"div",15)(747,"span",16),Jx(748," appendBox"),Wl(749,"br"),sg()()(),Sl(750,"td",17)(751,"code",28),Jx(752,"boolean"),sg()(),Sl(753,"td",20)(754,"em")(755,"strong"),Jx(756,"(opcional)"),sg()(),Sl(757,"p"),Jx(758,"Define que o "),Sl(759,"code"),Jx(760,"listbox"),sg(),Jx(761," e/ou popover ("),Sl(762,"code"),Jx(763,"p-helper"),sg(),Jx(764," e/ou "),Sl(765,"code"),Jx(766,"p-error-limit"),sg(),Jx(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),sg(),Sl(768,"blockquote")(769,"p"),Jx(770,"Quando utilizado com "),Sl(771,"code"),Jx(772,"p-helper"),sg(),Jx(773,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(774,"tr",13)(775,"td",14)(776,"div",15)(777,"span",16),Jx(778," autoHeight"),Wl(779,"br"),sg()()(),Sl(780,"td",17)(781,"code",28),Jx(782,"boolean"),sg()(),Sl(783,"td",20)(784,"em")(785,"strong"),Jx(786,"(opcional)"),sg()(),Sl(787,"p"),Jx(788,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),sg(),Sl(789,"p")(790,"strong"),Jx(791,"Componentes compat\xEDveis:"),sg(),Sl(792,"code"),Jx(793,"po-multiselect"),sg(),Jx(794,", "),Sl(795,"code"),Jx(796,"po-lookup"),sg(),Jx(797,"."),sg()()(),Sl(798,"tr",13)(799,"td",14)(800,"div",15)(801,"span",16),Jx(802," autoUpload"),Wl(803,"br"),sg()()(),Sl(804,"td",17)(805,"code",28),Jx(806,"boolean"),sg()(),Sl(807,"td",20)(808,"em")(809,"strong"),Jx(810,"(opcional)"),sg()(),Sl(811,"p"),Jx(812,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),sg(),Sl(813,"p")(814,"strong"),Jx(815,"Componente compat\xEDvel"),sg(),Jx(816,": "),Sl(817,"code"),Jx(818,"po-upload"),sg()()()(),Sl(819,"tr",13)(820,"td",14)(821,"div",15)(822,"span",16),Jx(823," booleanFalse"),Wl(824,"br"),sg()()(),Sl(825,"td",17)(826,"code",18),Jx(827,"string"),sg()(),Sl(828,"td",20)(829,"em")(830,"strong"),Jx(831,"(opcional)"),sg()(),Sl(832,"p"),Jx(833,"Texto exibido quando o valor do componente for "),Sl(834,"em"),Jx(835,"false"),sg(),Jx(836,"."),sg()()(),Sl(837,"tr",13)(838,"td",14)(839,"div",15)(840,"span",16),Jx(841," booleanTrue"),Wl(842,"br"),sg()()(),Sl(843,"td",17)(844,"code",18),Jx(845,"string"),sg()(),Sl(846,"td",20)(847,"em")(848,"strong"),Jx(849,"(opcional)"),sg()(),Sl(850,"p"),Jx(851,"Texto exibido quando o valor do componente for "),Sl(852,"em"),Jx(853,"true"),sg(),Jx(854,"."),sg()()(),Sl(855,"tr",13)(856,"td",14)(857,"div",15)(858,"span",16),Jx(859," changeOnEnter"),Wl(860,"br"),sg()()(),Sl(861,"td",17)(862,"code",28),Jx(863,"boolean"),sg()(),Sl(864,"td",20)(865,"em")(866,"strong"),Jx(867,"(opcional)"),sg()(),Sl(868,"p"),Jx(869,"Indica que o evento "),Sl(870,"code"),Jx(871,"p-change"),sg(),Jx(872,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),Sl(873,"code"),Jx(874,"po-combo"),sg(),Jx(875,"."),sg()()(),Sl(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),Jx(880," changeVisibleColumns"),Wl(881,"br"),sg()()(),Sl(882,"td",17)(883,"code",29),Jx(884,"Function"),sg()(),Sl(885,"td",20)(886,"em")(887,"strong"),Jx(888,"(opcional)"),sg()(),Sl(889,"p"),Jx(890,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),sg(),Sl(891,"p"),Jx(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg(),Sl(893,"p")(894,"strong"),Jx(895,"Componente compat\xEDvel"),sg(),Jx(896,": "),Sl(897,"code"),Jx(898,"po-lookup"),sg()()()(),Sl(899,"tr",13)(900,"td",14)(901,"div",15)(902,"span",16),Jx(903," clean"),Wl(904,"br"),sg()()(),Sl(905,"td",17)(906,"code",28),Jx(907,"boolean"),sg()(),Sl(908,"td",20)(909,"em")(910,"strong"),Jx(911,"(opcional)"),sg()(),Sl(912,"p"),Jx(913,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg(),Sl(914,"p")(915,"strong"),Jx(916,"Componentes compat\xEDveis:"),sg(),Sl(917,"code"),Jx(918,"po-datepicker"),sg(),Jx(919,", "),Sl(920,"code"),Jx(921,"po-datepicker-range"),sg(),Jx(922,", "),Sl(923,"code"),Jx(924,"po-input"),sg(),Jx(925,", "),Sl(926,"code"),Jx(927,"po-number"),sg(),Jx(928,", "),Sl(929,"code"),Jx(930,"po-decimal"),sg(),Jx(931,`,
`),Sl(932,"code"),Jx(933,"po-combo"),sg(),Jx(934,", "),Sl(935,"code"),Jx(936,"po-lookup"),sg(),Jx(937,", "),Sl(938,"code"),Jx(939,"po-password"),sg(),Jx(940,", "),Sl(941,"code"),Jx(942,"po-timepicker"),sg(),Jx(943,"."),sg()()(),Sl(944,"tr",13)(945,"td",14)(946,"div",15)(947,"span",16),Jx(948," columnRestoreManager"),Wl(949,"br"),sg()()(),Sl(950,"td",17)(951,"code",29),Jx(952,"Function"),sg()(),Sl(953,"td",20)(954,"em")(955,"strong"),Jx(956,"(opcional)"),sg()(),Sl(957,"p"),Jx(958,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),sg(),Sl(959,"p"),Jx(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg(),Sl(961,"p")(962,"strong"),Jx(963,"Componente compat\xEDvel"),sg(),Jx(964,": "),Sl(965,"code"),Jx(966,"po-lookup"),sg()()()(),Sl(967,"tr",13)(968,"td",14)(969,"div",15)(970,"span",16),Jx(971," columns"),Wl(972,"br"),sg()()(),Sl(973,"td",17)(974,"code",40),Jx(975,"Array<PoLookupColumn> "),sg(),Sl(976,"code",41),Jx(977," number"),sg()(),Sl(978,"td",20)(979,"em")(980,"strong"),Jx(981,"(opcional)"),sg()(),Sl(982,"p"),Jx(983,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),Sl(984,"code"),Jx(985,"searchService"),sg(),Jx(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Sl(987,"a",42)(988,"code"),Jx(989,"PoLookupColumn"),sg()(),Jx(990,"."),sg(),Sl(991,"blockquote")(992,"p"),Jx(993,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),Sl(994,"em"),Jx(995,"label"),sg(),Jx(996," e "),Sl(997,"em"),Jx(998,"value"),sg(),Jx(999,` para valores
de tela e do model respectivamente.`),sg()(),Sl(1e3,"p")(1001,"strong"),Jx(1002,"Componentes compat\xEDveis:"),sg(),Sl(1003,"code"),Jx(1004,"po-radio-group"),sg(),Jx(1005,", "),Sl(1006,"code"),Jx(1007,"po-lookup"),sg(),Jx(1008,", "),Sl(1009,"code"),Jx(1010,"po-checkbox-group"),sg(),Jx(1011,"."),sg()()(),Sl(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),Jx(1016," compactLabel"),Wl(1017,"br"),sg()()(),Sl(1018,"td",17)(1019,"code",28),Jx(1020,"boolean"),sg()(),Sl(1021,"td",20)(1022,"em")(1023,"strong"),Jx(1024,"(opcional)"),sg()(),Sl(1025,"p"),Jx(1026,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(1027,"p"),Jx(1028,"Quando habilitado ("),Sl(1029,"code"),Jx(1030,"true"),sg(),Jx(1031,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(1032,"ul")(1033,"li")(1034,"code"),Jx(1035,"po-label"),sg()(),Sl(1036,"li")(1037,"code"),Jx(1038,"p-requirement (showRequired)"),sg()(),Sl(1039,"li")(1040,"code"),Jx(1041,"po-helper"),sg()()(),Sl(1042,"p"),Jx(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(1044,"p"),Jx(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(1046,"ul")(1047,"li")(1048,"code"),Jx(1049,"--field-container-title-justify"),sg()(),Sl(1050,"li")(1051,"code"),Jx(1052,"--field-container-title-flex"),sg()()(),Sl(1053,"p"),Jx(1054,"Exemplo:"),sg(),Sl(1055,"pre")(1056,"code"),Jx(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(1058,"p"),Jx(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(1060,"tr",13)(1061,"td",14)(1062,"div",15)(1063,"span",16),Jx(1064," container"),Wl(1065,"br"),sg()()(),Sl(1066,"td",17)(1067,"code",18),Jx(1068,"string"),sg()(),Sl(1069,"td",20)(1070,"em")(1071,"strong"),Jx(1072,"(opcional)"),sg()(),Sl(1073,"p"),Jx(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),sg(),Sl(1075,"p"),Jx(1076,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),sg()()(),Sl(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),Jx(1081," customAction"),Wl(1082,"br"),sg()()(),Sl(1083,"td",17)(1084,"code",43),Jx(1085,"PoProgressAction"),sg()(),Sl(1086,"td",20)(1087,"em")(1088,"strong"),Jx(1089,"(opcional)"),sg()(),Sl(1090,"p"),Jx(1091,"Define uma a\xE7\xE3o personalizada no componente "),Sl(1092,"code"),Jx(1093,"po-upload"),sg(),Jx(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),sg(),Sl(1095,"p")(1096,"strong"),Jx(1097,"Componente compat\xEDvel"),sg(),Jx(1098,": "),Sl(1099,"code"),Jx(1100,"po-upload"),sg(),Jx(1101,","),sg(),Sl(1102,"p")(1103,"strong"),Jx(1104,"Exemplo de configura\xE7\xE3o"),sg(),Jx(1105,":"),sg(),Sl(1106,"pre")(1107,"code",44),Jx(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),sg()()()(),Sl(1109,"tr",13)(1110,"td",14)(1111,"div",15)(1112,"span",16),Jx(1113," customActionClick"),Wl(1114,"br"),sg()()(),Sl(1115,"td",17)(1116,"code",45),Jx(1117,"(file: PoUploadFile) => void"),sg()(),Sl(1118,"td",20)(1119,"em")(1120,"strong"),Jx(1121,"(opcional)"),sg()(),Sl(1122,"p"),Jx(1123,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Sl(1124,"code"),Jx(1125,"p-custom-action"),sg(),Jx(1126,"."),sg(),Sl(1127,"p")(1128,"strong"),Jx(1129,"Componente compat\xEDvel"),sg(),Jx(1130,": "),Sl(1131,"code"),Jx(1132,"po-upload"),sg(),Jx(1133,","),sg(),Sl(1134,"p"),Jx(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),sg(),Sl(1136,"p")(1137,"strong"),Jx(1138,"Par\xE2metro do evento"),sg(),Jx(1139,":"),sg(),Sl(1140,"ul")(1141,"li")(1142,"code"),Jx(1143,"file"),sg(),Jx(1144,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),Sl(1145,"code"),Jx(1146,"PoUploadFile"),sg(),Jx(1147," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),sg()(),Sl(1148,"p")(1149,"strong"),Jx(1150,"Exemplo de uso"),sg(),Jx(1151,":"),sg(),Sl(1152,"pre")(1153,"code",44),Jx(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),sg()()()(),Sl(1155,"tr",13)(1156,"td",14)(1157,"div",15)(1158,"span",16),Jx(1159," debounceTime"),Wl(1160,"br"),sg()()(),Sl(1161,"td",17)(1162,"code",41),Jx(1163,"number"),sg()(),Sl(1164,"td",20)(1165,"em")(1166,"strong"),Jx(1167,"(opcional)"),sg()(),Sl(1168,"p"),Jx(1169,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Sl(1170,"code"),Jx(1171,"p-filter-service"),sg(),Jx(1172,")."),sg(),Sl(1173,"p")(1174,"strong"),Jx(1175,"Componentes compat\xEDveis:"),sg(),Sl(1176,"code"),Jx(1177,"po-combo"),sg(),Jx(1178,", "),Sl(1179,"code"),Jx(1180,"po-multiselect"),sg(),Jx(1181,"."),sg()()(),Sl(1182,"tr",13)(1183,"td",14)(1184,"div",15)(1185,"span",16),Jx(1186," decimalsLength"),Wl(1187,"br"),sg()()(),Sl(1188,"td",17)(1189,"code",41),Jx(1190,"number"),sg()(),Sl(1191,"td",20)(1192,"em")(1193,"strong"),Jx(1194,"(opcional)"),sg()(),Sl(1195,"p"),Jx(1196,"Quantidade m\xE1xima de casas decimais."),sg(),Sl(1197,"blockquote")(1198,"p"),Jx(1199,"Esta propriedade s\xF3 pode ser utilizada quando o "),Sl(1200,"code"),Jx(1201,"type"),sg(),Jx(1202," for "),Sl(1203,"em"),Jx(1204,"currency"),sg(),Jx(1205," ou "),Sl(1206,"em"),Jx(1207,"decimal"),sg(),Jx(1208,"."),sg()()()(),Sl(1209,"tr",13)(1210,"td",14)(1211,"div",15)(1212,"span",16),Jx(1213," directory"),Wl(1214,"br"),sg()()(),Sl(1215,"td",17)(1216,"code",28),Jx(1217,"boolean"),sg()(),Sl(1218,"td",20)(1219,"em")(1220,"strong"),Jx(1221,"(opcional)"),sg()(),Sl(1222,"p"),Jx(1223,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),sg(),Sl(1224,"blockquote")(1225,"p"),Jx(1226,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),sg()(),Sl(1227,"blockquote")(1228,"p"),Jx(1229,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Sl(1230,"strong"),Jx(1231,"Internet Explorer"),sg(),Jx(1232,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),sg()(),Sl(1233,"p")(1234,"strong"),Jx(1235,"Componente compat\xEDvel"),sg(),Jx(1236,": "),Sl(1237,"code"),Jx(1238,"po-upload"),sg()()()(),Sl(1239,"tr",13)(1240,"td",14)(1241,"div",15)(1242,"span",16),Jx(1243," disabled"),Wl(1244,"br"),sg()()(),Sl(1245,"td",17)(1246,"code",28),Jx(1247,"boolean"),sg()(),Sl(1248,"td",20)(1249,"em")(1250,"strong"),Jx(1251,"(opcional)"),sg()(),Sl(1252,"p"),Jx(1253,"Desabilita o campo caso informar o valor "),Sl(1254,"em"),Jx(1255,"true"),sg(),Jx(1256,"."),sg()()(),Sl(1257,"tr",13)(1258,"td",14)(1259,"div",15)(1260,"span",16),Jx(1261," disabledInitFilter"),Wl(1262,"br"),sg()()(),Sl(1263,"td",17)(1264,"code",28),Jx(1265,"boolean"),sg()(),Sl(1266,"td",20)(1267,"em")(1268,"strong"),Jx(1269,"(opcional)"),sg()(),Sl(1270,"p"),Jx(1271,"Desabilita o filtro inicial no servi\xE7o do "),Sl(1272,"code"),Jx(1273,"po-combo"),sg(),Jx(1274,", que \xE9 executado no primeiro clique no campo."),sg()()(),Sl(1275,"tr",13)(1276,"td",14)(1277,"div",15)(1278,"span",16),Jx(1279," disabledTabFilter"),Wl(1280,"br"),sg()()(),Sl(1281,"td",17)(1282,"code",28),Jx(1283,"boolean"),sg()(),Sl(1284,"td",20)(1285,"em")(1286,"strong"),Jx(1287,"(opcional)"),sg()(),Sl(1288,"p"),Jx(1289,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),Sl(1290,"code"),Jx(1291,"po-combo"),sg(),Jx(1292,"."),sg()()(),Sl(1293,"tr",13)(1294,"td",14)(1295,"div",15)(1296,"span",16),Jx(1297," divider"),Wl(1298,"br"),sg()()(),Sl(1299,"td",17)(1300,"code",18),Jx(1301,"string"),sg()(),Sl(1302,"td",20)(1303,"em")(1304,"strong"),Jx(1305,"(opcional)"),sg()(),Sl(1306,"p"),Jx(1307,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),sg()()(),Sl(1308,"tr",13)(1309,"td",14)(1310,"div",15)(1311,"span",16),Jx(1312," dragDrop"),Wl(1313,"br"),sg()()(),Sl(1314,"td",17)(1315,"code",28),Jx(1316,"boolean"),sg()(),Sl(1317,"td",20)(1318,"em")(1319,"strong"),Jx(1320,"(opcional)"),sg()(),Sl(1321,"p"),Jx(1322,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),sg(),Sl(1323,"blockquote")(1324,"p"),Jx(1325,"Recomendamos utilizar apenas um "),Sl(1326,"code"),Jx(1327,"po-upload"),sg(),Jx(1328," com esta funcionalidade por tela."),sg()(),Sl(1329,"p")(1330,"strong"),Jx(1331,"Componente compat\xEDvel"),sg(),Jx(1332,": "),Sl(1333,"code"),Jx(1334,"po-upload"),sg()()()(),Sl(1335,"tr",13)(1336,"td",14)(1337,"div",15)(1338,"span",16),Jx(1339," dragDropHeight"),Wl(1340,"br"),sg()()(),Sl(1341,"td",17)(1342,"code",41),Jx(1343,"number"),sg()(),Sl(1344,"td",20)(1345,"em")(1346,"strong"),Jx(1347,"(opcional)"),sg()(),Sl(1348,"p"),Jx(1349,"Define em "),Sl(1350,"em"),Jx(1351,"pixels"),sg(),Jx(1352," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Sl(1353,"code"),Jx(1354,"160px"),sg(),Jx(1355,"."),sg(),Sl(1356,"blockquote")(1357,"p"),Jx(1358,"Esta propriedade funciona somente se a propriedade "),Sl(1359,"code"),Jx(1360,"p-drag-drop"),sg(),Jx(1361," estiver habilitada."),sg()(),Sl(1362,"p")(1363,"strong"),Jx(1364,"Componente compat\xEDvel"),sg(),Jx(1365,": "),Sl(1366,"code"),Jx(1367,"po-upload"),sg()()()(),Sl(1368,"tr",13)(1369,"td",14)(1370,"div",15)(1371,"span",16),Jx(1372," errorAsyncFunction"),Wl(1373,"br"),sg()()(),Sl(1374,"td",17)(1375,"code",46),Jx(1376,"(value) => Observable<boolean>"),sg()(),Sl(1377,"td",20)(1378,"em")(1379,"strong"),Jx(1380,"(opcional)"),sg()(),Sl(1381,"p"),Jx(1382,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(1383,"code"),Jx(1384,"change"),sg(),Jx(1385," ou "),Sl(1386,"code"),Jx(1387,"change-model"),sg(),Jx(1388,", dependendo do valor da propriedade "),Sl(1389,"code"),Jx(1390,"triggerMode"),sg(),Jx(1391,"."),sg(),Sl(1392,"blockquote")(1393,"p"),Jx(1394,"Retorna "),Sl(1395,"code"),Jx(1396,"Observable com o valor true"),sg(),Jx(1397," para sinalizar o erro "),Sl(1398,"code"),Jx(1399,"false"),sg(),Jx(1400," para indicar que n\xE3o h\xE1 erro."),sg()(),Sl(1401,"p")(1402,"strong"),Jx(1403,"Componente compat\xEDvel"),sg(),Jx(1404,": "),Sl(1405,"code"),Jx(1406,"po-datepicker"),sg()()()(),Sl(1407,"tr",13)(1408,"td",14)(1409,"div",15)(1410,"span",16),Jx(1411," errorAsyncProperties"),Wl(1412,"br"),sg()()(),Sl(1413,"td",17)(1414,"code",47),Jx(1415,"ErrorAsyncProperties"),sg()(),Sl(1416,"td",20)(1417,"em")(1418,"strong"),Jx(1419,"(opcional)"),sg()(),Sl(1420,"p"),Jx(1421,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),sg(),Sl(1422,"p")(1423,"strong"),Jx(1424,"Componentes compat\xEDveis:"),sg(),Sl(1425,"code"),Jx(1426,"po-input"),sg(),Jx(1427,", "),Sl(1428,"code"),Jx(1429,"po-number"),sg(),Jx(1430,", "),Sl(1431,"code"),Jx(1432,"po-decimal"),sg(),Jx(1433,", "),Sl(1434,"code"),Jx(1435,"po-password"),sg(),Jx(1436,"."),sg()()(),Sl(1437,"tr",13)(1438,"td",14)(1439,"div",15)(1440,"span",16),Jx(1441," errorLimit"),Wl(1442,"br"),sg()()(),Sl(1443,"td",17)(1444,"code",28),Jx(1445,"boolean"),sg()(),Sl(1446,"td",20)(1447,"em")(1448,"strong"),Jx(1449,"(opcional)"),sg()(),Sl(1450,"p"),Jx(1451,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Sl(1452,"blockquote")(1453,"p"),Jx(1454,"Caso essa propriedade seja definida como "),Sl(1455,"code"),Jx(1456,"true"),sg(),Jx(1457,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()(),Sl(1458,"p")(1459,"strong"),Jx(1460,"Componentes compat\xEDveis:"),sg(),Sl(1461,"code"),Jx(1462,"po-checkbox-group"),sg(),Jx(1463,", "),Sl(1464,"code"),Jx(1465,"po-combo"),sg(),Jx(1466,", "),Sl(1467,"code"),Jx(1468,"po-datepicker"),sg(),Jx(1469,", "),Sl(1470,"code"),Jx(1471,"po-datepicker-range"),sg(),Jx(1472,", "),Sl(1473,"code"),Jx(1474,"po-decimal"),sg(),Jx(1475,", "),Sl(1476,"code"),Jx(1477,"po-input"),sg(),Jx(1478,", "),Sl(1479,"code"),Jx(1480,"po-lookup"),sg(),Jx(1481,", "),Sl(1482,"code"),Jx(1483,"po-multiselect"),sg(),Jx(1484,", "),Sl(1485,"code"),Jx(1486,"po-number"),sg(),Jx(1487,", "),Sl(1488,"code"),Jx(1489,"po-password"),sg(),Jx(1490,", "),Sl(1491,"code"),Jx(1492,"po-radio-group"),sg(),Jx(1493,", "),Sl(1494,"code"),Jx(1495,"po-select"),sg(),Jx(1496,`,
`),Sl(1497,"code"),Jx(1498,"po-switch"),sg(),Jx(1499,", "),Sl(1500,"code"),Jx(1501,"po-textarea"),sg(),Jx(1502,", "),Sl(1503,"code"),Jx(1504,"po-timepicker"),sg(),Jx(1505,"."),sg()()(),Sl(1506,"tr",13)(1507,"td",14)(1508,"div",15)(1509,"span",16),Jx(1510," errorMessage"),Wl(1511,"br"),sg()()(),Sl(1512,"td",17)(1513,"code",18),Jx(1514,"string"),sg()(),Sl(1515,"td",20)(1516,"em")(1517,"strong"),Jx(1518,"(opcional)"),sg()(),Sl(1519,"p"),Jx(1520,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),sg(),Sl(1521,"p"),Jx(1522,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),sg(),Sl(1523,"ul")(1524,"li"),Jx(1525,"pattern;"),sg(),Sl(1526,"li"),Jx(1527,"minValue;"),sg(),Sl(1528,"li"),Jx(1529,"maxValue;"),sg(),Sl(1530,"li"),Jx(1531,"required;"),sg()(),Sl(1532,"blockquote")(1533,"p"),Jx(1534,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Sl(1535,"code"),Jx(1536,"po-datepicker"),sg(),Jx(1537,", "),Sl(1538,"code"),Jx(1539,"po-input"),sg(),Jx(1540,", "),Sl(1541,"code"),Jx(1542,"po-number"),sg(),Jx(1543,", "),Sl(1544,"code"),Jx(1545,"po-decimal"),sg(),Jx(1546,", "),Sl(1547,"code"),Jx(1548,"po-password"),sg(),Jx(1549,", "),Sl(1550,"code"),Jx(1551,"po-timepicker"),sg(),Jx(1552,`, \xE9 necess\xE1rio que a propriedade
`),Sl(1553,"code"),Jx(1554,"requiredFieldErrorMessage"),sg(),Jx(1555," esteja como "),Sl(1556,"code"),Jx(1557,"true"),sg(),Jx(1558,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Sl(1559,"code"),Jx(1560,"po-datepicker-range"),sg(),Jx(1561,", "),Sl(1562,"code"),Jx(1563,"po-select"),sg(),Jx(1564,", "),Sl(1565,"code"),Jx(1566,"po-checkbox-group"),sg(),Jx(1567,", "),Sl(1568,"code"),Jx(1569,"po-radio-group"),sg(),Jx(1570,", "),Sl(1571,"code"),Jx(1572,"po-multiselect"),sg(),Jx(1573,", "),Sl(1574,"code"),Jx(1575,"po-combo"),sg(),Jx(1576,`,
`),Sl(1577,"code"),Jx(1578,"po-lookup"),sg(),Jx(1579," e "),Sl(1580,"code"),Jx(1581,"po-textarea"),sg(),Jx(1582," n\xE3o \xE9 necess\xE1rio passar a propriedade "),Sl(1583,"code"),Jx(1584,"requiredFieldErrorMessage"),sg(),Jx(1585,"."),sg()(),Sl(1586,"p")(1587,"strong"),Jx(1588,"Componentes compat\xEDveis:"),sg(),Sl(1589,"code"),Jx(1590,"po-checkbox-group"),sg(),Jx(1591,", "),Sl(1592,"code"),Jx(1593,"po-combo"),sg(),Jx(1594,", "),Sl(1595,"code"),Jx(1596,"po-datepicker"),sg(),Jx(1597,", "),Sl(1598,"code"),Jx(1599,"po-datepicker-range"),sg(),Jx(1600,", "),Sl(1601,"code"),Jx(1602,"po-decimal"),sg(),Jx(1603,", "),Sl(1604,"code"),Jx(1605,"po-input"),sg(),Jx(1606,", "),Sl(1607,"code"),Jx(1608,"po-lookup"),sg(),Jx(1609,", "),Sl(1610,"code"),Jx(1611,"po-multiselect"),sg(),Jx(1612,", "),Sl(1613,"code"),Jx(1614,"po-number"),sg(),Jx(1615,", "),Sl(1616,"code"),Jx(1617,"po-password"),sg(),Jx(1618,", "),Sl(1619,"code"),Jx(1620,"po-radio-group"),sg(),Jx(1621,", "),Sl(1622,"code"),Jx(1623,"po-select"),sg(),Jx(1624,`,
`),Sl(1625,"code"),Jx(1626,"po-switch"),sg(),Jx(1627,", "),Sl(1628,"code"),Jx(1629,"po-textarea"),sg(),Jx(1630,", "),Sl(1631,"code"),Jx(1632,"po-timepicker"),sg(),Jx(1633,"."),sg()()(),Sl(1634,"tr",13)(1635,"td",14)(1636,"div",15)(1637,"span",16),Jx(1638," fieldLabel"),Wl(1639,"br"),sg()()(),Sl(1640,"td",17)(1641,"code",18),Jx(1642,"string"),sg()(),Sl(1643,"td",20)(1644,"em")(1645,"strong"),Jx(1646,"(opcional)"),sg()(),Sl(1647,"p"),Jx(1648,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),sg(),Sl(1649,"p"),Jx(1650,"O valor padr\xE3o \xE9: "),Sl(1651,"code"),Jx(1652,"label"),sg(),Jx(1653,"."),sg(),Sl(1654,"blockquote")(1655,"p"),Jx(1656,"Esta propriedade pode ser utilizada em conjunto com: "),Sl(1657,"code"),Jx(1658,"options"),sg(),Jx(1659,", "),Sl(1660,"code"),Jx(1661,"optionsService"),sg(),Jx(1662," e "),Sl(1663,"code"),Jx(1664,"searchService"),sg(),Jx(1665,"."),sg()()()(),Sl(1666,"tr",13)(1667,"td",14)(1668,"div",15)(1669,"span",16),Jx(1670," fieldValue"),Wl(1671,"br"),sg()()(),Sl(1672,"td",17)(1673,"code",18),Jx(1674,"string"),sg()(),Sl(1675,"td",20)(1676,"em")(1677,"strong"),Jx(1678,"(opcional)"),sg()(),Sl(1679,"p"),Jx(1680,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),sg(),Sl(1681,"p"),Jx(1682,"O valor padr\xE3o \xE9: "),Sl(1683,"code"),Jx(1684,"value"),sg(),Jx(1685,"."),sg(),Sl(1686,"blockquote")(1687,"p"),Jx(1688,"Esta propriedade pode ser utilizada em conjunto com: "),Sl(1689,"code"),Jx(1690,"options"),sg(),Jx(1691,", "),Sl(1692,"code"),Jx(1693,"optionsService"),sg(),Jx(1694," e "),Sl(1695,"code"),Jx(1696,"searchService"),sg(),Jx(1697,"."),sg()()()(),Sl(1698,"tr",13)(1699,"td",14)(1700,"div",15)(1701,"span",16),Jx(1702," filterMinlength"),Wl(1703,"br"),sg()()(),Sl(1704,"td",17)(1705,"code",41),Jx(1706,"number"),sg()(),Sl(1707,"td",20)(1708,"em")(1709,"strong"),Jx(1710,"(opcional)"),sg()(),Sl(1711,"p"),Jx(1712,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),Sl(1713,"code"),Jx(1714,"po-combo"),sg(),Jx(1715,"."),sg()()(),Sl(1716,"tr",13)(1717,"td",14)(1718,"div",15)(1719,"span",16),Jx(1720," filterMode"),Wl(1721,"br"),sg()()(),Sl(1722,"td",17)(1723,"code",48),Jx(1724,"PoMultiselectFilterMode"),sg()(),Sl(1725,"td",20)(1726,"em")(1727,"strong"),Jx(1728,"(opcional)"),sg()(),Sl(1729,"p"),Jx(1730,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Sl(1731,"code"),Jx(1732,"startsWith"),sg(),Jx(1733,", "),Sl(1734,"code"),Jx(1735,"contains"),sg(),Jx(1736," ou "),Sl(1737,"code"),Jx(1738,"endsWith"),sg(),Jx(1739,"."),sg(),Sl(1740,"blockquote")(1741,"p"),Jx(1742,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),sg()(),Sl(1743,"p")(1744,"strong"),Jx(1745,"Componente compat\xEDvel:"),sg(),Sl(1746,"code"),Jx(1747,"po-multiselect"),sg(),Jx(1748,"."),sg()()(),Sl(1749,"tr",13)(1750,"td",14)(1751,"div",15)(1752,"span",16),Jx(1753," forceBooleanComponentType"),Wl(1754,"br"),sg()()(),Sl(1755,"td",17)(1756,"code",49),Jx(1757,"ForceBooleanComponentEnum"),sg()(),Sl(1758,"td",20)(1759,"em")(1760,"strong"),Jx(1761,"(opcional)"),sg()(),Sl(1762,"p"),Jx(1763,"Valores aceitos:"),sg(),Sl(1764,"ul")(1765,"li"),Jx(1766,"ForceBooleanComponentEnum.switch"),sg(),Sl(1767,"li"),Jx(1768,"ForceBooleanComponentEnum.checkbox"),sg()()()(),Sl(1769,"tr",13)(1770,"td",14)(1771,"div",15)(1772,"span",16),Jx(1773," forceOptionsComponentType"),Wl(1774,"br"),sg()()(),Sl(1775,"td",17)(1776,"code",50),Jx(1777,"ForceOptionComponentEnum"),sg()(),Sl(1778,"td",20)(1779,"em")(1780,"strong"),Jx(1781,"(opcional)"),sg()(),Sl(1782,"p"),Jx(1783,"pode ser utilizada em conjunto com a propriedade "),Sl(1784,"code"),Jx(1785,"options"),sg(),Jx(1786," for\xE7ando o componente a renderizar um "),Sl(1787,"code"),Jx(1788,"po-select"),sg(),Jx(1789," ou "),Sl(1790,"code"),Jx(1791,"po-radio-group"),sg(),Jx(1792,"."),sg(),Sl(1793,"p"),Jx(1794,"Valores aceitos:"),sg(),Sl(1795,"ul")(1796,"li"),Jx(1797,"ForceOptionComponentEnum.radioGroup"),sg(),Sl(1798,"li"),Jx(1799,"ForceOptionComponentEnum.select"),sg()(),Sl(1800,"blockquote")(1801,"p"),Jx(1802,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),Sl(1803,"code"),Jx(1804,"optionsMulti"),sg(),Jx(1805," e "),Sl(1806,"code"),Jx(1807,"optionsService"),sg(),Jx(1808,"."),sg()()()(),Sl(1809,"tr",13)(1810,"td",14)(1811,"div",15)(1812,"span",16),Jx(1813," formField"),Wl(1814,"br"),sg()()(),Sl(1815,"td",17)(1816,"code",18),Jx(1817,"string"),sg()(),Sl(1818,"td",20)(1819,"em")(1820,"strong"),Jx(1821,"(opcional)"),sg()(),Sl(1822,"p"),Jx(1823,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Sl(1824,"code"),Jx(1825,"url"),sg(),Jx(1826,"."),sg(),Sl(1827,"blockquote")(1828,"p"),Jx(1829,"O valor default \xE9 "),Sl(1830,"code"),Jx(1831,"files"),sg()()(),Sl(1832,"p")(1833,"strong"),Jx(1834,"Componente compat\xEDvel"),sg(),Jx(1835,": "),Sl(1836,"code"),Jx(1837,"po-upload"),sg()()()(),Sl(1838,"tr",13)(1839,"td",14)(1840,"div",15)(1841,"span",16),Jx(1842," format"),Wl(1843,"br"),sg()()(),Sl(1844,"td",17)(1845,"code",18),Jx(1846,"string "),sg(),Sl(1847,"code",32),Jx(1848," Array<string>"),sg()(),Sl(1849,"td",20)(1850,"em")(1851,"strong"),Jx(1852,"(opcional)"),sg()(),Sl(1853,"p"),Jx(1854,"Formato de exibi\xE7\xE3o no campo."),sg(),Sl(1855,"p"),Jx(1856,"Ao utilizar esta propriedade com o "),Sl(1857,"code"),Jx(1858,"type"),sg(),Sl(1859,"em"),Jx(1860,"PoDynamicFieldType.Date"),sg(),Jx(1861," ou "),Sl(1862,"em"),Jx(1863,"PoDynamicFieldType.DateTime"),sg(),Jx(1864,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),sg(),Sl(1865,"p"),Jx(1866,"Valores v\xE1lidos:"),sg(),Sl(1867,"ul")(1868,"li"),Jx(1869,"dd/mm/yyyy"),sg(),Sl(1870,"li"),Jx(1871,"mm/dd/yyyy"),sg(),Sl(1872,"li"),Jx(1873,"yyyy/mm/dd"),sg()(),Sl(1874,"p"),Jx(1875,"Ao utilizar com o "),Sl(1876,"code"),Jx(1877,"type"),sg(),Sl(1878,"em"),Jx(1879,"PoDynamicFieldType.Time"),sg(),Jx(1880,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),sg(),Sl(1881,"p"),Jx(1882,"Valores v\xE1lidos:"),sg(),Sl(1883,"ul")(1884,"li")(1885,"code"),Jx(1886,"24"),sg(),Jx(1887,": formato de 24 horas (padr\xE3o)"),sg(),Sl(1888,"li")(1889,"code"),Jx(1890,"12"),sg(),Jx(1891,": formato de 12 horas com indicador AM/PM"),sg()(),Sl(1892,"p"),Jx(1893,"Tamb\xE9m pode-se utilizar em conjunto com "),Sl(1894,"code"),Jx(1895,"searchService"),sg(),Jx(1896,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),sg(),Sl(1897,"p")(1898,"strong"),Jx(1899,"Componentes compat\xEDveis:"),sg(),Sl(1900,"code"),Jx(1901,"po-datepicker"),sg(),Jx(1902,", "),Sl(1903,"code"),Jx(1904,"po-timepicker"),sg(),Jx(1905,", "),Sl(1906,"code"),Jx(1907,"po-lookup"),sg(),Jx(1908,"."),sg()()(),Sl(1909,"tr",13)(1910,"td",14)(1911,"div",15)(1912,"span",16),Jx(1913," formatModel"),Wl(1914,"br"),sg()()(),Sl(1915,"td",17)(1916,"code",28),Jx(1917,"boolean"),sg()(),Sl(1918,"td",20)(1919,"em")(1920,"strong"),Jx(1921,"(opcional)"),sg()(),Sl(1922,"p"),Jx(1923,"Indica se o "),Sl(1924,"code"),Jx(1925,"model"),sg(),Jx(1926," receber\xE1 o valor formatado pelas propriedades "),Sl(1927,"code"),Jx(1928,"p-label-on"),sg(),Jx(1929," e "),Sl(1930,"code"),Jx(1931,"p-label-off"),sg(),Jx(1932,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),sg(),Sl(1933,"p"),Jx(1934,"O valor padr\xE3o \xE9: "),Sl(1935,"code"),Jx(1936,"false"),sg(),Jx(1937,"."),sg(),Sl(1938,"blockquote")(1939,"p"),Jx(1940,"Esta propriedade est\xE1 disponivel apenas para o "),Sl(1941,"code"),Jx(1942,"swicth"),sg(),Jx(1943,"."),sg()()()(),Sl(1944,"tr",13)(1945,"td",14)(1946,"div",15)(1947,"span",16),Jx(1948," formatTime"),Wl(1949,"br"),sg()()(),Sl(1950,"td",17)(1951,"code",18),Jx(1952,"string"),sg()(),Sl(1953,"td",20)(1954,"em")(1955,"strong"),Jx(1956,"(opcional)"),sg()(),Sl(1957,"p"),Jx(1958,"Define o formato de exibi\xE7\xE3o do timer ("),Sl(1959,"code"),Jx(1960,"'12'"),sg(),Jx(1961," ou "),Sl(1962,"code"),Jx(1963,"'24'"),sg(),Jx(1964,")."),sg(),Sl(1965,"p")(1966,"strong"),Jx(1967,"Componente compat\xEDvel:"),sg(),Sl(1968,"code"),Jx(1969,"po-datetimepicker"),sg(),Jx(1970,", "),Sl(1971,"code"),Jx(1972,"po-timepicker"),sg()()()(),Sl(1973,"tr",13)(1974,"td",14)(1975,"div",15)(1976,"span",16),Jx(1977," gridColumns"),Wl(1978,"br"),sg()()(),Sl(1979,"td",17)(1980,"code",41),Jx(1981,"number"),sg()(),Sl(1982,"td",20)(1983,"em")(1984,"strong"),Jx(1985,"(opcional)"),sg()(),Sl(1986,"p"),Jx(1987,"Tamanho de exibi\xE7\xE3o do campo em telas."),sg(),Sl(1988,"p"),Jx(1989,"Deve ser usado o sistema de "),Sl(1990,"strong"),Jx(1991,"grid"),sg(),Jx(1992," do PO (1 ... 12 colunas)."),sg(),Sl(1993,"blockquote")(1994,"p"),Jx(1995,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Sl(1996,"tr",13)(1997,"td",14)(1998,"div",15)(1999,"span",16),Jx(2e3," gridLgColumns"),Wl(2001,"br"),sg()()(),Sl(2002,"td",17)(2003,"code",41),Jx(2004,"number"),sg()(),Sl(2005,"td",20)(2006,"em")(2007,"strong"),Jx(2008,"(opcional)"),sg()(),Sl(2009,"p"),Jx(2010,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Sl(2011,"p"),Jx(2012,"Deve ser usado o sistema de "),Sl(2013,"strong"),Jx(2014,"grid"),sg(),Jx(2015," do PO (1 ... 12 colunas)."),sg(),Sl(2016,"blockquote")(2017,"p"),Jx(2018,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2019,"code"),Jx(2020,"gridColumns"),sg(),Jx(2021,"."),sg()()()(),Sl(2022,"tr",13)(2023,"td",14)(2024,"div",15)(2025,"span",16),Jx(2026," gridLgPull"),Wl(2027,"br"),sg()()(),Sl(2028,"td",17)(2029,"code",41),Jx(2030,"number"),sg()(),Sl(2031,"td",20)(2032,"em")(2033,"strong"),Jx(2034,"(opcional)"),sg()(),Sl(2035,"p"),Jx(2036,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),sg(),Sl(2037,"p"),Jx(2038,"Deve ser usado o sistema de "),Sl(2039,"strong"),Jx(2040,"grid"),sg(),Jx(2041," do PO (1 ... 11 colunas)."),sg(),Sl(2042,"blockquote")(2043,"p"),Jx(2044,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2045,"code"),Jx(2046,"gridColumns"),sg(),Jx(2047,". Deve-se especificar o tamanho da tela."),sg()()()(),Sl(2048,"tr",13)(2049,"td",14)(2050,"div",15)(2051,"span",16),Jx(2052," gridMdColumns"),Wl(2053,"br"),sg()()(),Sl(2054,"td",17)(2055,"code",41),Jx(2056,"number"),sg()(),Sl(2057,"td",20)(2058,"em")(2059,"strong"),Jx(2060,"(opcional)"),sg()(),Sl(2061,"p"),Jx(2062,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Sl(2063,"p"),Jx(2064,"Deve ser usado o sistema de "),Sl(2065,"strong"),Jx(2066,"grid"),sg(),Jx(2067," do PO (1 ... 12 colunas)."),sg(),Sl(2068,"blockquote")(2069,"p"),Jx(2070,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2071,"code"),Jx(2072,"gridColumns"),sg(),Jx(2073,"."),sg()()()(),Sl(2074,"tr",13)(2075,"td",14)(2076,"div",15)(2077,"span",16),Jx(2078," gridMdPull"),Wl(2079,"br"),sg()()(),Sl(2080,"td",17)(2081,"code",41),Jx(2082,"number"),sg()(),Sl(2083,"td",20)(2084,"em")(2085,"strong"),Jx(2086,"(opcional)"),sg()(),Sl(2087,"p"),Jx(2088,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),sg(),Sl(2089,"p"),Jx(2090,"Deve ser usado o sistema de "),Sl(2091,"strong"),Jx(2092,"grid"),sg(),Jx(2093," do PO (1 ... 11 colunas)."),sg(),Sl(2094,"blockquote")(2095,"p"),Jx(2096,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2097,"code"),Jx(2098,"gridColumns"),sg(),Jx(2099,". Deve-se especificar o tamanho da tela."),sg()()()(),Sl(2100,"tr",13)(2101,"td",14)(2102,"div",15)(2103,"span",16),Jx(2104," gridSmColumns"),Wl(2105,"br"),sg()()(),Sl(2106,"td",17)(2107,"code",41),Jx(2108,"number"),sg()(),Sl(2109,"td",20)(2110,"em")(2111,"strong"),Jx(2112,"(opcional)"),sg()(),Sl(2113,"p"),Jx(2114,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Sl(2115,"p"),Jx(2116,"Deve ser usado o sistema de "),Sl(2117,"strong"),Jx(2118,"grid"),sg(),Jx(2119," do PO (1 ... 12 colunas)."),sg(),Sl(2120,"blockquote")(2121,"p"),Jx(2122,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2123,"code"),Jx(2124,"gridColumns"),sg(),Jx(2125,"."),sg()()()(),Sl(2126,"tr",13)(2127,"td",14)(2128,"div",15)(2129,"span",16),Jx(2130," gridSmPull"),Wl(2131,"br"),sg()()(),Sl(2132,"td",17)(2133,"code",41),Jx(2134,"number"),sg()(),Sl(2135,"td",20)(2136,"em")(2137,"strong"),Jx(2138,"(opcional)"),sg()(),Sl(2139,"p"),Jx(2140,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),sg(),Sl(2141,"p"),Jx(2142,"Deve ser usado o sistema de "),Sl(2143,"strong"),Jx(2144,"grid"),sg(),Jx(2145," do PO (1 ... 11 colunas)."),sg(),Sl(2146,"blockquote")(2147,"p"),Jx(2148,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2149,"code"),Jx(2150,"gridColumns"),sg(),Jx(2151,". Deve-se especificar o tamanho da tela."),sg()()()(),Sl(2152,"tr",13)(2153,"td",14)(2154,"div",15)(2155,"span",16),Jx(2156," gridXlColumns"),Wl(2157,"br"),sg()()(),Sl(2158,"td",17)(2159,"code",41),Jx(2160,"number"),sg()(),Sl(2161,"td",20)(2162,"em")(2163,"strong"),Jx(2164,"(opcional)"),sg()(),Sl(2165,"p"),Jx(2166,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Sl(2167,"p"),Jx(2168,"Deve ser usado o sistema de "),Sl(2169,"strong"),Jx(2170,"grid"),sg(),Jx(2171," do PO (1 ... 12 colunas)."),sg(),Sl(2172,"blockquote")(2173,"p"),Jx(2174,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(2175,"code"),Jx(2176,"gridColumns"),sg(),Jx(2177,"."),sg()()()(),Sl(2178,"tr",13)(2179,"td",14)(2180,"div",15)(2181,"span",16),Jx(2182," gridXlPull"),Wl(2183,"br"),sg()()(),Sl(2184,"td",17)(2185,"code",41),Jx(2186,"number"),sg()(),Sl(2187,"td",20)(2188,"em")(2189,"strong"),Jx(2190,"(opcional)"),sg()(),Sl(2191,"p"),Jx(2192,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),sg(),Sl(2193,"p"),Jx(2194,"Deve ser usado o sistema de "),Sl(2195,"strong"),Jx(2196,"grid"),sg(),Jx(2197," do PO (1 ... 11 colunas)."),sg(),Sl(2198,"blockquote")(2199,"p"),Jx(2200,"Esta propriedade n\xE3o funciona com a propriedade "),Sl(2201,"code"),Jx(2202,"gridColumns"),sg(),Jx(2203,". Deve-se especificar o tamanho da tela."),sg()()()(),Sl(2204,"tr",13)(2205,"td",14)(2206,"div",15)(2207,"span",16),Jx(2208," headers"),Wl(2209,"br"),sg()()(),Sl(2210,"td",17)(2211,"code",51),Jx(2212,"{ [name: string]: string "),sg(),Sl(2213,"code",52),Jx(2214,` Array<string>;
}`),sg()(),Sl(2215,"td",20)(2216,"em")(2217,"strong"),Jx(2218,"(opcional)"),sg()(),Sl(2219,"p"),Jx(2220,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),sg(),Sl(2221,"p")(2222,"strong"),Jx(2223,"Componente compat\xEDvel"),sg(),Jx(2224,": "),Sl(2225,"code"),Jx(2226,"po-upload"),sg()()()(),Sl(2227,"tr",13)(2228,"td",14)(2229,"div",15)(2230,"span",16),Jx(2231," help"),Wl(2232,"br"),sg()()(),Sl(2233,"td",17)(2234,"code",18),Jx(2235,"string"),sg()(),Sl(2236,"td",20)(2237,"em")(2238,"strong"),Jx(2239,"(opcional)"),sg()(),Sl(2240,"p"),Jx(2241,"Texto de ajuda."),sg()()(),Sl(2242,"tr",13)(2243,"td",14)(2244,"div",15)(2245,"span",16),Jx(2246," helper"),Wl(2247,"br"),sg()()(),Sl(2248,"td",17)(2249,"code",18),Jx(2250,"string "),sg(),Sl(2251,"code",53),Jx(2252," PoHelperOptions"),sg()(),Sl(2253,"td",20)(2254,"em")(2255,"strong"),Jx(2256,"(opcional)"),sg()(),Sl(2257,"p"),Jx(2258,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),sg()()(),Sl(2259,"tr",13)(2260,"td",14)(2261,"div",15)(2262,"span",16),Jx(2263," hideLabelStatus"),Wl(2264,"br"),sg()()(),Sl(2265,"td",17)(2266,"code",28),Jx(2267,"boolean"),sg()(),Sl(2268,"td",20)(2269,"em")(2270,"strong"),Jx(2271,"(opcional)"),sg()(),Sl(2272,"p"),Jx(2273,"Indica se o status do "),Sl(2274,"code"),Jx(2275,"model"),sg(),Jx(2276," ser\xE1 escondido visualmente ao lado do switch"),sg()()(),Sl(2277,"tr",13)(2278,"td",14)(2279,"div",15)(2280,"span",16),Jx(2281," hidePasswordPeek"),Wl(2282,"br"),sg()()(),Sl(2283,"td",17)(2284,"code",28),Jx(2285,"boolean"),sg()(),Sl(2286,"td",20)(2287,"em")(2288,"strong"),Jx(2289,"(opcional)"),sg()(),Sl(2290,"p"),Jx(2291,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),Sl(2292,"code"),Jx(2293,"po-password"),sg(),Jx(2294,"."),sg()()(),Sl(2295,"tr",13)(2296,"td",14)(2297,"div",15)(2298,"span",16),Jx(2299," hideRestrictionsInfo"),Wl(2300,"br"),sg()()(),Sl(2301,"td",17)(2302,"code",28),Jx(2303,"boolean"),sg()(),Sl(2304,"td",20)(2305,"em")(2306,"strong"),Jx(2307,"(opcional)"),sg()(),Sl(2308,"p"),Jx(2309,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),sg(),Sl(2310,"p")(2311,"strong"),Jx(2312,"Componente compat\xEDvel"),sg(),Jx(2313,": "),Sl(2314,"code"),Jx(2315,"po-upload"),sg()()()(),Sl(2316,"tr",13)(2317,"td",14)(2318,"div",15)(2319,"span",16),Jx(2320," hideSearch"),Wl(2321,"br"),sg()()(),Sl(2322,"td",17)(2323,"code",28),Jx(2324,"boolean"),sg()(),Sl(2325,"td",20)(2326,"em")(2327,"strong"),Jx(2328,"(opcional)"),sg()(),Sl(2329,"p"),Jx(2330,"Esconde o campo de pesquisa existente dentro do dropdown do "),Sl(2331,"code"),Jx(2332,"po-multiselect"),sg(),Jx(2333,"."),sg()()(),Sl(2334,"tr",13)(2335,"td",14)(2336,"div",15)(2337,"span",16),Jx(2338," hideSelectAll"),Wl(2339,"br"),sg()()(),Sl(2340,"td",17)(2341,"code",28),Jx(2342,"boolean"),sg()(),Sl(2343,"td",20)(2344,"em")(2345,"strong"),Jx(2346,"(opcional)"),sg()(),Sl(2347,"p"),Jx(2348,'Indica se o campo "Selecionar todos" do '),Sl(2349,"code"),Jx(2350,"po-multiselect"),sg(),Jx(2351," ser\xE1 escondido."),sg()()(),Sl(2352,"tr",13)(2353,"td",14)(2354,"div",15)(2355,"span",16),Jx(2356," hideSelectButton"),Wl(2357,"br"),sg()()(),Sl(2358,"td",17)(2359,"code",28),Jx(2360,"boolean"),sg()(),Sl(2361,"td",20)(2362,"em")(2363,"strong"),Jx(2364,"(opcional)"),sg()(),Sl(2365,"p"),Jx(2366,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),sg(),Sl(2367,"blockquote")(2368,"p"),Jx(2369,"Caso o valor definido seja "),Sl(2370,"code"),Jx(2371,"true"),sg(),Jx(2372,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(2373,"code"),Jx(2374,"selectFiles()"),sg(),Jx(2375," para sele\xE7\xE3o de arquivos."),sg()(),Sl(2376,"p")(2377,"strong"),Jx(2378,"Componente compat\xEDvel"),sg(),Jx(2379,": "),Sl(2380,"code"),Jx(2381,"po-upload"),sg()()()(),Sl(2382,"tr",13)(2383,"td",14)(2384,"div",15)(2385,"span",16),Jx(2386," hideSendButton"),Wl(2387,"br"),sg()()(),Sl(2388,"td",17)(2389,"code",28),Jx(2390,"boolean"),sg()(),Sl(2391,"td",20)(2392,"em")(2393,"strong"),Jx(2394,"(opcional)"),sg()(),Sl(2395,"p"),Jx(2396,"Omite o bot\xE3o de envio de arquivos."),sg(),Sl(2397,"blockquote")(2398,"p"),Jx(2399,"Caso o valor definido seja "),Sl(2400,"code"),Jx(2401,"true"),sg(),Jx(2402,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Sl(2403,"code"),Jx(2404,"sendFiles()"),sg(),Jx(2405," para envio do(s) arquivo(s) selecionado(s)."),sg()(),Sl(2406,"p")(2407,"strong"),Jx(2408,"Componente compat\xEDvel"),sg(),Jx(2409,": "),Sl(2410,"code"),Jx(2411,"po-upload"),sg()()()(),Sl(2412,"tr",13)(2413,"td",14)(2414,"div",15)(2415,"span",16),Jx(2416," icon"),Wl(2417,"br"),sg()()(),Sl(2418,"td",17)(2419,"code",18),Jx(2420,"string "),sg(),Sl(2421,"code",54),Jx(2422," TemplateRef<void>"),sg()(),Sl(2423,"td",20)(2424,"em")(2425,"strong"),Jx(2426,"(opcional)"),sg()(),Sl(2427,"p"),Jx(2428,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Sl(2429,"blockquote")(2430,"p"),Jx(2431,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),sg()(),Sl(2432,"ul")(2433,"li"),Jx(2434,"Input;"),sg(),Sl(2435,"li"),Jx(2436,"Number;"),sg(),Sl(2437,"li"),Jx(2438,"Decimal;"),sg(),Sl(2439,"li"),Jx(2440,"Combo;"),sg(),Sl(2441,"li"),Jx(2442,"Password;"),sg()(),Sl(2443,"blockquote")(2444,"p"),Jx(2445,"Veja a disponibilidade de \xEDcones em "),Sl(2446,"a",55),Jx(2447,"biblioteca de \xEDcones"),sg(),Jx(2448,"."),sg()()()(),Sl(2449,"tr",13)(2450,"td",14)(2451,"div",15)(2452,"span",16),Jx(2453," infiniteScroll"),Wl(2454,"br"),sg()()(),Sl(2455,"td",17)(2456,"code",28),Jx(2457,"boolean"),sg()(),Sl(2458,"td",20)(2459,"em")(2460,"strong"),Jx(2461,"(opcional)"),sg()(),Sl(2462,"p"),Jx(2463,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),sg(),Sl(2464,"p")(2465,"strong"),Jx(2466,"Componentes compat\xEDveis:"),sg(),Sl(2467,"code"),Jx(2468,"po-combo"),sg(),Jx(2469,", "),Sl(2470,"code"),Jx(2471,"po-lookup"),sg(),Jx(2472,"."),sg()()(),Sl(2473,"tr",13)(2474,"td",14)(2475,"div",15)(2476,"span",16),Jx(2477," infiniteScrollDistance"),Wl(2478,"br"),sg()()(),Sl(2479,"td",17)(2480,"code",41),Jx(2481,"number"),sg()(),Sl(2482,"td",20)(2483,"em")(2484,"strong"),Jx(2485,"(opcional)"),sg()(),Sl(2486,"p"),Jx(2487,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Sl(2488,"strong"),Jx(2489,"Exemplos"),sg(),Sl(2490,"code"),Jx(2491,"{ infiniteScrollDistance: 80 }"),sg(),Jx(2492,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),sg(),Sl(2493,"p")(2494,"strong"),Jx(2495,"Componente compat\xEDvel:"),sg(),Sl(2496,"code"),Jx(2497,"po-combo"),sg(),Jx(2498,"."),sg()()(),Sl(2499,"tr",13)(2500,"td",14)(2501,"div",15)(2502,"span",16),Jx(2503," invalidValue"),Wl(2504,"br"),sg()()(),Sl(2505,"td",17)(2506,"code",28),Jx(2507,"boolean"),sg()(),Sl(2508,"td",20)(2509,"em")(2510,"strong"),Jx(2511,"(opcional)"),sg()(),Sl(2512,"p"),Jx(2513,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Sl(2514,"code"),Jx(2515,"p-field-error-message"),sg(),Jx(2516,"."),sg(),Sl(2517,"blockquote")(2518,"p"),Jx(2519,"Caso essa propriedade seja definida como "),Sl(2520,"code"),Jx(2521,"true"),sg(),Jx(2522,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),sg()(),Sl(2523,"p")(2524,"strong"),Jx(2525,"Componente compat\xEDvel"),sg(),Jx(2526,": "),Sl(2527,"code"),Jx(2528,"po-switch"),sg()()()(),Sl(2529,"tr",13)(2530,"td",14)(2531,"div",15)(2532,"span",16),Jx(2533," isoFormat"),Wl(2534,"br"),sg()()(),Sl(2535,"td",17)(2536,"code",56),Jx(2537,"PoDatepickerIsoFormat"),sg()(),Sl(2538,"td",20)(2539,"em")(2540,"strong"),Jx(2541,"(opcional)"),sg()(),Sl(2542,"p"),Jx(2543,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),sg(),Sl(2544,"blockquote")(2545,"p"),Jx(2546,"Veja os valores v\xE1lidos no "),Sl(2547,"code"),Jx(2548,"PoDatepickerIsoFormat"),sg(),Jx(2549,"."),sg()(),Sl(2550,"p")(2551,"strong"),Jx(2552,"Componente compat\xEDvel:"),sg(),Sl(2553,"code"),Jx(2554,"po-datepicker"),sg()()()(),Sl(2555,"tr",13)(2556,"td",14)(2557,"div",15)(2558,"span",16),Jx(2559," key"),Wl(2560,"br"),sg()()(),Sl(2561,"td",17)(2562,"code",28),Jx(2563,"boolean"),sg()(),Sl(2564,"td",20)(2565,"em")(2566,"strong"),Jx(2567,"(opcional)"),sg()(),Sl(2568,"p"),Jx(2569,"Identificador"),sg()()(),Sl(2570,"tr",13)(2571,"td",14)(2572,"div",15)(2573,"span",16),Jx(2574," keydown"),Wl(2575,"br"),sg()()(),Sl(2576,"td",17)(2577,"code",29),Jx(2578,"Function"),sg()(),Sl(2579,"td",20)(2580,"em")(2581,"strong"),Jx(2582,"(opcional)"),sg()(),Sl(2583,"p"),Jx(2584,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(2585,"code"),Jx(2586,"KeyboardEvent"),sg(),Jx(2587," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(2588,"tr",13)(2589,"td",14)(2590,"div",15)(2591,"span",16),Jx(2592," label"),Wl(2593,"br"),sg()()(),Sl(2594,"td",17)(2595,"code",18),Jx(2596,"string"),sg()(),Sl(2597,"td",20)(2598,"em")(2599,"strong"),Jx(2600,"(opcional)"),sg()(),Sl(2601,"p"),Jx(2602,"R\xF3tulo do campo exibido."),sg(),Sl(2603,"p"),Jx(2604,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Sl(2605,"code"),Jx(2606,"label"),sg(),Jx(2607," o valor da propriedade "),Sl(2608,"code"),Jx(2609,"property"),sg(),Jx(2610," com a primeira letra em mai\xFAsculo."),sg()()(),Sl(2611,"tr",13)(2612,"td",14)(2613,"div",15)(2614,"span",16),Jx(2615," labelPosition"),Wl(2616,"br"),sg()()(),Sl(2617,"td",17)(2618,"code",57),Jx(2619,"PoSwitchLabelPosition"),sg()(),Sl(2620,"td",20)(2621,"em")(2622,"strong"),Jx(2623,"(opcional)"),sg()(),Sl(2624,"p"),Jx(2625,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),sg(),Sl(2626,"blockquote")(2627,"p"),Jx(2628,"Por padr\xE3o exibe \xE0 direita."),sg()()()(),Sl(2629,"tr",13)(2630,"td",14)(2631,"div",15)(2632,"span",16),Jx(2633," listboxControlPosition"),Wl(2634,"br"),sg()()(),Sl(2635,"td",17)(2636,"code",58),Jx(2637,"'top' "),sg(),Sl(2638,"code",59),Jx(2639," 'bottom'"),sg()(),Sl(2640,"td",20)(2641,"em")(2642,"strong"),Jx(2643,"(opcional)"),sg()(),Sl(2644,"p"),Jx(2645,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Sl(2646,"code"),Jx(2647,"listbox"),sg(),Jx(2648," em rela\xE7\xE3o ao campo ("),Sl(2649,"code"),Jx(2650,"top"),sg(),Jx(2651," ou "),Sl(2652,"code"),Jx(2653,"bottom"),sg(),Jx(2654,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),sg(),Sl(2655,"p")(2656,"strong"),Jx(2657,"Componentes compat\xEDveis:"),sg(),Sl(2658,"code"),Jx(2659,"po-multiselect"),sg(),Jx(2660,", "),Sl(2661,"code"),Jx(2662,"po-combo"),sg(),Jx(2663,"."),sg()()(),Sl(2664,"tr",13)(2665,"td",14)(2666,"div",15)(2667,"span",16),Jx(2668," literals"),Wl(2669,"br"),sg()()(),Sl(2670,"td",17)(2671,"code",60),Jx(2672,"PoLookupLiterals "),sg(),Sl(2673,"code",61),Jx(2674," PoMultiselectLiterals "),sg(),Sl(2675,"code",62),Jx(2676," PoComboLiterals "),sg(),Sl(2677,"code",63),Jx(2678," PoDatepickerRangeLiterals "),sg(),Sl(2679,"code",64),Jx(2680," PoUploadLiterals"),sg()(),Sl(2681,"td",20)(2682,"em")(2683,"strong"),Jx(2684,"(opcional)"),sg()(),Sl(2685,"p"),Jx(2686,"Objeto com as literais usadas para os seguintes componentes: "),Sl(2687,"code"),Jx(2688,"po-lookup"),sg(),Jx(2689,", "),Sl(2690,"code"),Jx(2691,"po-multiselect"),sg(),Jx(2692,", "),Sl(2693,"code"),Jx(2694,"po-combo"),sg(),Jx(2695," e "),Sl(2696,"code"),Jx(2697,"po-datepicker-range"),sg(),Jx(2698,"."),sg(),Sl(2699,"blockquote")(2700,"p"),Jx(2701,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),sg()(),Sl(2702,"p")(2703,"strong"),Jx(2704,"Componentes compat\xEDveis:"),sg(),Sl(2705,"code"),Jx(2706,"po-lookup"),sg(),Jx(2707,", "),Sl(2708,"code"),Jx(2709,"po-multiselect"),sg(),Jx(2710,", "),Sl(2711,"code"),Jx(2712,"po-combo"),sg(),Jx(2713,", "),Sl(2714,"code"),Jx(2715,"po-datepicker-range"),sg()()()(),Sl(2716,"tr",13)(2717,"td",14)(2718,"div",15)(2719,"span",16),Jx(2720," loading"),Wl(2721,"br"),sg()()(),Sl(2722,"td",17)(2723,"code",28),Jx(2724,"boolean"),sg()(),Sl(2725,"td",20)(2726,"em")(2727,"strong"),Jx(2728,"(opcional)"),sg()(),Sl(2729,"p"),Jx(2730,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),sg(),Sl(2731,"blockquote")(2732,"p"),Jx(2733,"Por padr\xE3o \xE9 "),Sl(2734,"code"),Jx(2735,"false"),sg(),Jx(2736,"."),sg()(),Sl(2737,"p")(2738,"strong"),Jx(2739,"Componentes compat\xEDveis:"),sg(),Sl(2740,"code"),Jx(2741,"po-datepicker"),sg(),Jx(2742,", "),Sl(2743,"code"),Jx(2744,"po-datepicker-range"),sg(),Jx(2745,", "),Sl(2746,"code"),Jx(2747,"po-number"),sg(),Jx(2748,", "),Sl(2749,"code"),Jx(2750,"po-decimal"),sg(),Jx(2751,`,
`),Sl(2752,"code"),Jx(2753,"po-input"),sg(),Jx(2754,", "),Sl(2755,"code"),Jx(2756,"po-select"),sg(),Jx(2757,", "),Sl(2758,"code"),Jx(2759,"po-switch"),sg(),Jx(2760,", "),Sl(2761,"code"),Jx(2762,"po-combo"),sg(),Jx(2763,", "),Sl(2764,"code"),Jx(2765,"po-lookup"),sg(),Jx(2766,", "),Sl(2767,"code"),Jx(2768,"po-multiselect"),sg(),Jx(2769,`,
`),Sl(2770,"code"),Jx(2771,"po-textarea"),sg(),Jx(2772,", "),Sl(2773,"code"),Jx(2774,"po-password"),sg(),Jx(2775,", "),Sl(2776,"code"),Jx(2777,"po-upload"),sg(),Jx(2778,"."),sg()()(),Sl(2779,"tr",13)(2780,"td",14)(2781,"div",15)(2782,"span",16),Jx(2783," locale"),Wl(2784,"br"),sg()()(),Sl(2785,"td",17)(2786,"code",18),Jx(2787,"string"),sg()(),Sl(2788,"td",20)(2789,"em")(2790,"strong"),Jx(2791,"(opcional)"),sg()(),Sl(2792,"p"),Jx(2793,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Sl(2794,"a",65)(2795,"code"),Jx(2796,"I18n"),sg()()(),Sl(2797,"p"),Jx(2798,"Exemplo de utiliza\xE7\xE3o:"),sg(),Sl(2799,"pre")(2800,"code"),Jx(2801,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),sg()(),Sl(2802,"blockquote")(2803,"p"),Jx(2804,"Para ver quais linguagens suportadas acesse "),Sl(2805,"a",65)(2806,"code"),Jx(2807,"I18n"),sg()()()(),Sl(2808,"p")(2809,"strong"),Jx(2810,"Componentes compat\xEDveis:"),sg(),Sl(2811,"code"),Jx(2812,"po-datepicker"),sg(),Jx(2813,", "),Sl(2814,"code"),Jx(2815,"po-decimal"),sg(),Jx(2816,", "),Sl(2817,"code"),Jx(2818,"po-timepicker"),sg(),Jx(2819,"."),sg()()(),Sl(2820,"tr",13)(2821,"td",14)(2822,"div",15)(2823,"span",16),Jx(2824," mask"),Wl(2825,"br"),sg()()(),Sl(2826,"td",17)(2827,"code",18),Jx(2828,"string"),sg()(),Sl(2829,"td",20)(2830,"em")(2831,"strong"),Jx(2832,"(opcional)"),sg()(),Sl(2833,"p"),Jx(2834,"M\xE1scara para o campo."),sg(),Sl(2835,"p")(2836,"strong"),Jx(2837,"Componente compat\xEDvel:"),sg(),Sl(2838,"code"),Jx(2839,"po-input"),sg(),Jx(2840,"."),sg(),Sl(2841,"blockquote")(2842,"p"),Jx(2843,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Sl(2844,"code"),Jx(2845,"type: time"),sg(),Jx(2846,"."),sg()()()(),Sl(2847,"tr",13)(2848,"td",14)(2849,"div",15)(2850,"span",16),Jx(2851," maskFormatModel"),Wl(2852,"br"),sg()()(),Sl(2853,"td",17)(2854,"code",28),Jx(2855,"boolean"),sg()(),Sl(2856,"td",20)(2857,"em")(2858,"strong"),Jx(2859,"(opcional)"),sg()(),Sl(2860,"p"),Jx(2861,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),Sl(2862,"code"),Jx(2863,"false"),sg(),Jx(2864,"."),sg(),Sl(2865,"p")(2866,"strong"),Jx(2867,"Componente compat\xEDvel:"),sg(),Sl(2868,"code"),Jx(2869,"po-input"),sg(),Jx(2870,"."),sg(),Sl(2871,"blockquote")(2872,"p"),Jx(2873,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Sl(2874,"code"),Jx(2875,"type: time"),sg(),Jx(2876,"."),sg()()()(),Sl(2877,"tr",13)(2878,"td",14)(2879,"div",15)(2880,"span",16),Jx(2881," maskNoLengthValidation"),Wl(2882,"br"),sg()()(),Sl(2883,"td",17)(2884,"code",28),Jx(2885,"boolean"),sg()(),Sl(2886,"td",20)(2887,"em")(2888,"strong"),Jx(2889,"(opcional)"),sg()(),Sl(2890,"p"),Jx(2891,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(2892,"code"),Jx(2893,"minLength"),sg(),Jx(2894,") e m\xE1ximo ("),Sl(2895,"code"),Jx(2896,"maxLength"),sg(),Jx(2897,") quando h\xE1 uma m\xE1scara ("),Sl(2898,"code"),Jx(2899,"p-mask"),sg(),Jx(2900,") definida."),sg(),Sl(2901,"ul")(2902,"li"),Jx(2903,"Quando "),Sl(2904,"code"),Jx(2905,"true"),sg(),Jx(2906,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Sl(2907,"li"),Jx(2908,"Quando "),Sl(2909,"code"),Jx(2910,"false"),sg(),Jx(2911,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Sl(2912,"p")(2913,"strong"),Jx(2914,"Componentes compat\xEDveis:"),sg(),Sl(2915,"code"),Jx(2916,"po-input"),sg(),Jx(2917,", "),Sl(2918,"code"),Jx(2919,"po-decimal"),sg(),Jx(2920,"."),sg(),Sl(2921,"blockquote")(2922,"p"),Jx(2923,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(2924,"code"),Jx(2925,"p-mask-format-model"),sg(),Jx(2926,"."),sg()(),Sl(2927,"p"),Jx(2928,"Exemplo:"),sg(),Sl(2929,"pre")(2930,"code"),Jx(2931,`fields:Array<PoDynamicFormField> = [
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
`),sg()(),Sl(2932,"ul")(2933,"li"),Jx(2934,"Entrada: "),Sl(2935,"code"),Jx(2936,"11.111.111/1111-11"),sg(),Jx(2937," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),sg()()()(),Sl(2938,"tr",13)(2939,"td",14)(2940,"div",15)(2941,"span",16),Jx(2942," maxLength"),Wl(2943,"br"),sg()()(),Sl(2944,"td",17)(2945,"code",41),Jx(2946,"number"),sg()(),Sl(2947,"td",20)(2948,"em")(2949,"strong"),Jx(2950,"(opcional)"),sg()(),Sl(2951,"p"),Jx(2952,"Tamanho m\xE1ximo de caracteres."),sg(),Sl(2953,"p")(2954,"strong"),Jx(2955,"Componentes compat\xEDveis:"),sg(),Sl(2956,"code"),Jx(2957,"po-input"),sg(),Jx(2958,", "),Sl(2959,"code"),Jx(2960,"po-number"),sg(),Jx(2961,", "),Sl(2962,"code"),Jx(2963,"po-decimal"),sg(),Jx(2964,", "),Sl(2965,"code"),Jx(2966,"po-textarea"),sg(),Jx(2967,", "),Sl(2968,"code"),Jx(2969,"po-password"),sg(),Jx(2970,"."),sg()()(),Sl(2971,"tr",13)(2972,"td",14)(2973,"div",15)(2974,"span",16),Jx(2975," maxTime"),Wl(2976,"br"),sg()()(),Sl(2977,"td",17)(2978,"code",18),Jx(2979,"string"),sg()(),Sl(2980,"td",20)(2981,"em")(2982,"strong"),Jx(2983,"(opcional)"),sg()(),Sl(2984,"p"),Jx(2985,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Sl(2986,"code"),Jx(2987,"HH:mm"),sg(),Jx(2988," ou "),Sl(2989,"code"),Jx(2990,"HH:mm:ss"),sg(),Jx(2991,"."),sg(),Sl(2992,"p")(2993,"strong"),Jx(2994,"Componente compat\xEDvel:"),sg(),Sl(2995,"code"),Jx(2996,"po-datetimepicker"),sg(),Jx(2997,", "),Sl(2998,"code"),Jx(2999,"po-timepicker"),sg()()()(),Sl(3e3,"tr",13)(3001,"td",14)(3002,"div",15)(3003,"span",16),Jx(3004," maxValue"),Wl(3005,"br"),sg()()(),Sl(3006,"td",17)(3007,"code",18),Jx(3008,"string "),sg(),Sl(3009,"code",41),Jx(3010," number"),sg()(),Sl(3011,"td",20)(3012,"em")(3013,"strong"),Jx(3014,"(opcional)"),sg()(),Sl(3015,"p"),Jx(3016,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Sl(3017,"em"),Jx(3018,"number"),sg(),Jx(3019,", "),Sl(3020,"em"),Jx(3021,"date"),sg(),Jx(3022,", "),Sl(3023,"em"),Jx(3024,"dateTime"),sg(),Jx(3025," ou "),Sl(3026,"em"),Jx(3027,"time"),sg(),Jx(3028,"."),sg(),Sl(3029,"blockquote")(3030,"p"),Jx(3031,"Para "),Sl(3032,"code"),Jx(3033,"po-timepicker"),sg(),Jx(3034,", o valor deve estar no formato "),Sl(3035,"code"),Jx(3036,"HH:mm"),sg(),Jx(3037," ou "),Sl(3038,"code"),Jx(3039,"HH:mm:ss"),sg(),Jx(3040,"."),sg()(),Sl(3041,"p")(3042,"strong"),Jx(3043,"Componentes compat\xEDveis:"),sg(),Sl(3044,"code"),Jx(3045,"po-datepicker"),sg(),Jx(3046,", "),Sl(3047,"code"),Jx(3048,"po-datepicker-range"),sg(),Jx(3049,", "),Sl(3050,"code"),Jx(3051,"po-number"),sg(),Jx(3052,", "),Sl(3053,"code"),Jx(3054,"po-decimal"),sg(),Jx(3055,", "),Sl(3056,"code"),Jx(3057,"po-timepicker"),sg()()()(),Sl(3058,"tr",13)(3059,"td",14)(3060,"div",15)(3061,"span",16),Jx(3062," minLength"),Wl(3063,"br"),sg()()(),Sl(3064,"td",17)(3065,"code",41),Jx(3066,"number"),sg()(),Sl(3067,"td",20)(3068,"em")(3069,"strong"),Jx(3070,"(opcional)"),sg()(),Sl(3071,"p"),Jx(3072,"Tamanho m\xEDnimo de caracteres."),sg(),Sl(3073,"p")(3074,"strong"),Jx(3075,"Componentes compat\xEDveis:"),sg(),Sl(3076,"code"),Jx(3077,"po-input"),sg(),Jx(3078,", "),Sl(3079,"code"),Jx(3080,"po-number"),sg(),Jx(3081,", "),Sl(3082,"code"),Jx(3083,"po-decimal"),sg(),Jx(3084,", "),Sl(3085,"code"),Jx(3086,"po-textarea"),sg(),Jx(3087,", "),Sl(3088,"code"),Jx(3089,"po-password"),sg(),Jx(3090,"."),sg()()(),Sl(3091,"tr",13)(3092,"td",14)(3093,"div",15)(3094,"span",16),Jx(3095," minTime"),Wl(3096,"br"),sg()()(),Sl(3097,"td",17)(3098,"code",18),Jx(3099,"string"),sg()(),Sl(3100,"td",20)(3101,"em")(3102,"strong"),Jx(3103,"(opcional)"),sg()(),Sl(3104,"p"),Jx(3105,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Sl(3106,"code"),Jx(3107,"HH:mm"),sg(),Jx(3108," ou "),Sl(3109,"code"),Jx(3110,"HH:mm:ss"),sg(),Jx(3111,"."),sg(),Sl(3112,"p")(3113,"strong"),Jx(3114,"Componente compat\xEDvel:"),sg(),Sl(3115,"code"),Jx(3116,"po-datetimepicker"),sg(),Jx(3117,", "),Sl(3118,"code"),Jx(3119,"po-timepicker"),sg()()()(),Sl(3120,"tr",13)(3121,"td",14)(3122,"div",15)(3123,"span",16),Jx(3124," minValue"),Wl(3125,"br"),sg()()(),Sl(3126,"td",17)(3127,"code",18),Jx(3128,"string "),sg(),Sl(3129,"code",41),Jx(3130," number"),sg()(),Sl(3131,"td",20)(3132,"em")(3133,"strong"),Jx(3134,"(opcional)"),sg()(),Sl(3135,"p"),Jx(3136,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Sl(3137,"em"),Jx(3138,"number"),sg(),Jx(3139,", "),Sl(3140,"em"),Jx(3141,"date"),sg(),Jx(3142,", "),Sl(3143,"em"),Jx(3144,"dateTime"),sg(),Jx(3145," ou "),Sl(3146,"em"),Jx(3147,"time"),sg(),Jx(3148,"."),sg(),Sl(3149,"blockquote")(3150,"p"),Jx(3151,"Para "),Sl(3152,"code"),Jx(3153,"po-timepicker"),sg(),Jx(3154,", o valor deve estar no formato "),Sl(3155,"code"),Jx(3156,"HH:mm"),sg(),Jx(3157," ou "),Sl(3158,"code"),Jx(3159,"HH:mm:ss"),sg(),Jx(3160,"."),sg()(),Sl(3161,"p")(3162,"strong"),Jx(3163,"Componentes compat\xEDveis:"),sg(),Sl(3164,"code"),Jx(3165,"po-datepicker"),sg(),Jx(3166,", "),Sl(3167,"code"),Jx(3168,"po-datepicker-range"),sg(),Jx(3169,", "),Sl(3170,"code"),Jx(3171,"po-number"),sg(),Jx(3172,", "),Sl(3173,"code"),Jx(3174,"po-decimal"),sg(),Jx(3175,", "),Sl(3176,"code"),Jx(3177,"po-timepicker"),sg()()()(),Sl(3178,"tr",13)(3179,"td",14)(3180,"div",15)(3181,"span",16),Jx(3182," minuteInterval"),Wl(3183,"br"),sg()()(),Sl(3184,"td",17)(3185,"code",41),Jx(3186,"number"),sg()(),Sl(3187,"td",20)(3188,"em")(3189,"strong"),Jx(3190,"(opcional)"),sg()(),Sl(3191,"p"),Jx(3192,"Define o intervalo entre os minutos exibidos no painel do timepicker."),sg()()(),Sl(3193,"tr",13)(3194,"td",14)(3195,"div",15)(3196,"span",16),Jx(3197," mode"),Wl(3198,"br"),sg()()(),Sl(3199,"td",17)(3200,"code",66),Jx(3201,"'month-year' "),sg(),Sl(3202,"code",67),Jx(3203," 'year'"),sg()(),Sl(3204,"td",20)(3205,"em")(3206,"strong"),Jx(3207,"(opcional)"),sg()(),Sl(3208,"p"),Jx(3209,"Define o modo de sele\xE7\xE3o do "),Sl(3210,"code"),Jx(3211,"po-datepicker"),sg(),Jx(3212,"."),sg(),Sl(3213,"p"),Jx(3214,"Valores aceitos:"),sg(),Sl(3215,"ul")(3216,"li")(3217,"code"),Jx(3218,"'month-year'"),sg(),Jx(3219,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),Sl(3220,"code"),Jx(3221,"MM/YYYY"),sg(),Jx(3222,")"),sg(),Sl(3223,"li")(3224,"code"),Jx(3225,"'year'"),sg(),Jx(3226,": exibe sele\xE7\xE3o apenas de ano (formato "),Sl(3227,"code"),Jx(3228,"YYYY"),sg(),Jx(3229,")"),sg()(),Sl(3230,"p")(3231,"strong"),Jx(3232,"Componente compat\xEDvel:"),sg(),Sl(3233,"code"),Jx(3234,"po-datepicker"),sg()()()(),Sl(3235,"tr",13)(3236,"td",14)(3237,"div",15)(3238,"span",16),Jx(3239," modelFormat"),Wl(3240,"br"),sg()()(),Sl(3241,"td",17)(3242,"code",68),Jx(3243,"PoTimepickerModelFormat"),sg()(),Sl(3244,"td",20)(3245,"em")(3246,"strong"),Jx(3247,"(opcional)"),sg()(),Sl(3248,"p"),Jx(3249,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),Sl(3250,"code"),Jx(3251,"po-timepicker"),sg(),Jx(3252,"."),sg(),Sl(3253,"blockquote")(3254,"p"),Jx(3255,"Veja os valores v\xE1lidos no "),Sl(3256,"code"),Jx(3257,"PoTimepickerModelFormat"),sg(),Jx(3258,"."),sg()(),Sl(3259,"p")(3260,"strong"),Jx(3261,"Componente compat\xEDvel:"),sg(),Sl(3262,"code"),Jx(3263,"po-timepicker"),sg()()()(),Sl(3264,"tr",13)(3265,"td",14)(3266,"div",15)(3267,"span",16),Jx(3268," multiple"),Wl(3269,"br"),sg()()(),Sl(3270,"td",17)(3271,"code",28),Jx(3272,"boolean"),sg()(),Sl(3273,"td",20)(3274,"em")(3275,"strong"),Jx(3276,"(opcional)"),sg()(),Sl(3277,"p"),Jx(3278,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),sg(),Sl(3279,"p")(3280,"strong"),Jx(3281,"Componentes compat\xEDveis:"),sg(),Sl(3282,"code"),Jx(3283,"po-lookup"),sg(),Jx(3284,", "),Sl(3285,"code"),Jx(3286,"po-upload"),sg()()()(),Sl(3287,"tr",13)(3288,"td",14)(3289,"div",15)(3290,"span",16),Jx(3291," noAutocomplete"),Wl(3292,"br"),sg()()(),Sl(3293,"td",17)(3294,"code",28),Jx(3295,"boolean"),sg()(),Sl(3296,"td",20)(3297,"em")(3298,"strong"),Jx(3299,"(opcional)"),sg()(),Sl(3300,"p"),Jx(3301,"Define a propriedade nativa "),Sl(3302,"code"),Jx(3303,"autocomplete"),sg(),Jx(3304," do campo como off."),sg(),Sl(3305,"p")(3306,"strong"),Jx(3307,"Componentes compat\xEDveis:"),sg(),Sl(3308,"code"),Jx(3309,"po-datepicker"),sg(),Jx(3310,", "),Sl(3311,"code"),Jx(3312,"po-datepicker-range"),sg(),Jx(3313,", "),Sl(3314,"code"),Jx(3315,"po-input"),sg(),Jx(3316,", "),Sl(3317,"code"),Jx(3318,"po-number"),sg(),Jx(3319,", "),Sl(3320,"code"),Jx(3321,"po-decimal"),sg(),Jx(3322,`,
`),Sl(3323,"code"),Jx(3324,"po-lookup"),sg(),Jx(3325,", "),Sl(3326,"code"),Jx(3327,"po-password"),sg(),Jx(3328,", "),Sl(3329,"code"),Jx(3330,"po-timepicker"),sg(),Jx(3331,"."),sg()()(),Sl(3332,"tr",13)(3333,"td",14)(3334,"div",15)(3335,"span",16),Jx(3336," offsetColumns"),Wl(3337,"br"),sg()()(),Sl(3338,"td",17)(3339,"code",41),Jx(3340,"number"),sg()(),Sl(3341,"td",20)(3342,"em")(3343,"strong"),Jx(3344,"(opcional)"),sg()(),Sl(3345,"p"),Jx(3346,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),sg(),Sl(3347,"p"),Jx(3348,"Deve ser usado o sistema de "),Sl(3349,"strong"),Jx(3350,"grid"),sg(),Jx(3351," do PO (1 ... 12 colunas)."),sg(),Sl(3352,"blockquote")(3353,"p"),Jx(3354,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Sl(3355,"tr",13)(3356,"td",14)(3357,"div",15)(3358,"span",16),Jx(3359," offsetLgColumns"),Wl(3360,"br"),sg()()(),Sl(3361,"td",17)(3362,"code",41),Jx(3363,"number"),sg()(),Sl(3364,"td",20)(3365,"em")(3366,"strong"),Jx(3367,"(opcional)"),sg()(),Sl(3368,"p"),Jx(3369,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Sl(3370,"p"),Jx(3371,"Deve ser usado o sistema de "),Sl(3372,"strong"),Jx(3373,"grid"),sg(),Jx(3374," do PO (1 ... 12 colunas)."),sg(),Sl(3375,"blockquote")(3376,"p"),Jx(3377,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(3378,"code"),Jx(3379,"offsetColumns"),sg(),Jx(3380,"."),sg()()()(),Sl(3381,"tr",13)(3382,"td",14)(3383,"div",15)(3384,"span",16),Jx(3385," offsetMdColumns"),Wl(3386,"br"),sg()()(),Sl(3387,"td",17)(3388,"code",41),Jx(3389,"number"),sg()(),Sl(3390,"td",20)(3391,"em")(3392,"strong"),Jx(3393,"(opcional)"),sg()(),Sl(3394,"p"),Jx(3395,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Sl(3396,"p"),Jx(3397,"Deve ser usado o sistema de "),Sl(3398,"strong"),Jx(3399,"grid"),sg(),Jx(3400," do PO (1 ... 12 colunas)."),sg(),Sl(3401,"blockquote")(3402,"p"),Jx(3403,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(3404,"code"),Jx(3405,"offsetColumns"),sg(),Jx(3406,"."),sg()()()(),Sl(3407,"tr",13)(3408,"td",14)(3409,"div",15)(3410,"span",16),Jx(3411," offsetSmColumns"),Wl(3412,"br"),sg()()(),Sl(3413,"td",17)(3414,"code",41),Jx(3415,"number"),sg()(),Sl(3416,"td",20)(3417,"em")(3418,"strong"),Jx(3419,"(opcional)"),sg()(),Sl(3420,"p"),Jx(3421,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Sl(3422,"p"),Jx(3423,"Deve ser usado o sistema de "),Sl(3424,"strong"),Jx(3425,"grid"),sg(),Jx(3426," do PO (1 ... 12 colunas)."),sg(),Sl(3427,"blockquote")(3428,"p"),Jx(3429,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(3430,"code"),Jx(3431,"offsetColumns"),sg(),Jx(3432,"."),sg()()()(),Sl(3433,"tr",13)(3434,"td",14)(3435,"div",15)(3436,"span",16),Jx(3437," offsetXlColumns"),Wl(3438,"br"),sg()()(),Sl(3439,"td",17)(3440,"code",41),Jx(3441,"number"),sg()(),Sl(3442,"td",20)(3443,"em")(3444,"strong"),Jx(3445,"(opcional)"),sg()(),Sl(3446,"p"),Jx(3447,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Sl(3448,"p"),Jx(3449,"Deve ser usado o sistema de "),Sl(3450,"strong"),Jx(3451,"grid"),sg(),Jx(3452," do PO (1 ... 12 colunas)."),sg(),Sl(3453,"blockquote")(3454,"p"),Jx(3455,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Sl(3456,"code"),Jx(3457,"offsetColumns"),sg(),Jx(3458,"."),sg()()()(),Sl(3459,"tr",13)(3460,"td",14)(3461,"div",15)(3462,"span",16),Jx(3463," onError"),Wl(3464,"br"),sg()()(),Sl(3465,"td",17)(3466,"code",29),Jx(3467,"Function"),sg()(),Sl(3468,"td",20)(3469,"em")(3470,"strong"),Jx(3471,"(opcional)"),sg()(),Sl(3472,"p"),Jx(3473,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),sg(),Sl(3474,"blockquote")(3475,"p"),Jx(3476,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(3477,"code"),Jx(3478,"HttpErrorResponse"),sg(),Jx(3479,"."),sg()(),Sl(3480,"p")(3481,"strong"),Jx(3482,"Componente compat\xEDvel"),sg(),Jx(3483,": "),Sl(3484,"code"),Jx(3485,"po-upload"),sg()()()(),Sl(3486,"tr",13)(3487,"td",14)(3488,"div",15)(3489,"span",16),Jx(3490," onSuccess"),Wl(3491,"br"),sg()()(),Sl(3492,"td",17)(3493,"code",29),Jx(3494,"Function"),sg()(),Sl(3495,"td",20)(3496,"em")(3497,"strong"),Jx(3498,"(opcional)"),sg()(),Sl(3499,"p"),Jx(3500,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),sg(),Sl(3501,"blockquote")(3502,"p"),Jx(3503,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Sl(3504,"code"),Jx(3505,"HttpResponse"),sg(),Jx(3506,"."),sg()(),Sl(3507,"p")(3508,"strong"),Jx(3509,"Componente compat\xEDvel"),sg(),Jx(3510,": "),Sl(3511,"code"),Jx(3512,"po-upload"),sg()()()(),Sl(3513,"tr",13)(3514,"td",14)(3515,"div",15)(3516,"span",16),Jx(3517," onUpload"),Wl(3518,"br"),sg()()(),Sl(3519,"td",17)(3520,"code",29),Jx(3521,"Function"),sg()(),Sl(3522,"td",20)(3523,"em")(3524,"strong"),Jx(3525,"(opcional)"),sg()(),Sl(3526,"p"),Jx(3527,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),sg(),Sl(3528,"pre")(3529,"code"),Jx(3530,`event.data = {id: 'id do usu\xE1rio'};
`),sg()(),Sl(3531,"p")(3532,"strong"),Jx(3533,"Componente compat\xEDvel"),sg(),Jx(3534,": "),Sl(3535,"code"),Jx(3536,"po-upload"),sg()()()(),Sl(3537,"tr",13)(3538,"td",14)(3539,"div",15)(3540,"span",16),Jx(3541," optional"),Wl(3542,"br"),sg()()(),Sl(3543,"td",17)(3544,"code",28),Jx(3545,"boolean"),sg()(),Sl(3546,"td",20)(3547,"em")(3548,"strong"),Jx(3549,"(opcional)"),sg()(),Sl(3550,"p"),Jx(3551,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Sl(3552,"blockquote")(3553,"p"),Jx(3554,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),sg()(),Sl(3555,"ul")(3556,"li"),Jx(3557,"O campo for "),Sl(3558,"code"),Jx(3559,"required"),sg(),Jx(3560,", ou;"),sg(),Sl(3561,"li"),Jx(3562,"N\xE3o possuir "),Sl(3563,"code"),Jx(3564,"help"),sg(),Jx(3565," e "),Sl(3566,"code"),Jx(3567,"label"),sg(),Jx(3568,"."),sg()(),Sl(3569,"p")(3570,"strong"),Jx(3571,"Componentes compat\xEDveis:"),sg(),Sl(3572,"code"),Jx(3573,"po-datepicker"),sg(),Jx(3574,", "),Sl(3575,"code"),Jx(3576,"po-datepicker-range"),sg(),Jx(3577,", "),Sl(3578,"code"),Jx(3579,"po-timepicker"),sg(),Jx(3580,", "),Sl(3581,"code"),Jx(3582,"po-input"),sg(),Jx(3583,", "),Sl(3584,"code"),Jx(3585,"po-number"),sg(),Jx(3586,`,
`),Sl(3587,"code"),Jx(3588,"po-decimal"),sg(),Jx(3589,", "),Sl(3590,"code"),Jx(3591,"po-select"),sg(),Jx(3592,", "),Sl(3593,"code"),Jx(3594,"po-radio-group"),sg(),Jx(3595,", "),Sl(3596,"code"),Jx(3597,"po-combo"),sg(),Jx(3598,", "),Sl(3599,"code"),Jx(3600,"po-lookup"),sg(),Jx(3601,", "),Sl(3602,"code"),Jx(3603,"po-checkbox-group"),sg(),Jx(3604,", "),Sl(3605,"code"),Jx(3606,"po-multiselect"),sg(),Jx(3607,`,
`),Sl(3608,"code"),Jx(3609,"po-textarea"),sg(),Jx(3610,", "),Sl(3611,"code"),Jx(3612,"po-password"),sg(),Jx(3613,"."),sg()()(),Sl(3614,"tr",13)(3615,"td",14)(3616,"div",15)(3617,"span",16),Jx(3618," options"),Wl(3619,"br"),sg()()(),Sl(3620,"td",17)(3621,"code",32),Jx(3622,"Array<string> "),sg(),Sl(3623,"code",69),Jx(3624," Array<PoSelectOption> "),sg(),Sl(3625,"code",70),Jx(3626," Array<PoMultiselectOption> "),sg(),Sl(3627,"code",71),Jx(3628," Array<PoCheckboxGroupOption> "),sg(),Sl(3629,"code",72),Jx(3630," Array<any>"),sg()(),Sl(3631,"td",20)(3632,"em")(3633,"strong"),Jx(3634,"(opcional)"),sg()(),Sl(3635,"p"),Jx(3636,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),sg(),Sl(3637,"p")(3638,"strong"),Jx(3639,"Componentes compat\xEDveis:"),sg(),Sl(3640,"code"),Jx(3641,"po-select"),sg(),Jx(3642,", "),Sl(3643,"code"),Jx(3644,"po-radio-group"),sg(),Jx(3645,", "),Sl(3646,"code"),Jx(3647,"po-checkbox-group"),sg(),Jx(3648,", "),Sl(3649,"code"),Jx(3650,"po-multiselect"),sg(),Jx(3651,"."),sg()()(),Sl(3652,"tr",13)(3653,"td",14)(3654,"div",15)(3655,"span",16),Jx(3656," optionsMulti"),Wl(3657,"br"),sg()()(),Sl(3658,"td",17)(3659,"code",28),Jx(3660,"boolean"),sg()(),Sl(3661,"td",20)(3662,"em")(3663,"strong"),Jx(3664,"(opcional)"),sg()(),Sl(3665,"p"),Jx(3666,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),sg()()(),Sl(3667,"tr",13)(3668,"td",14)(3669,"div",15)(3670,"span",16),Jx(3671," optionsService"),Wl(3672,"br"),sg()()(),Sl(3673,"td",17)(3674,"code",18),Jx(3675,"string "),sg(),Sl(3676,"code",73),Jx(3677," PoComboFilter "),sg(),Sl(3678,"code",74),Jx(3679," PoMultiselectFilter"),sg()(),Sl(3680,"td",20)(3681,"em")(3682,"strong"),Jx(3683,"(opcional)"),sg()(),Sl(3684,"p"),Jx(3685,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Sl(3686,"strong"),Jx(3687,"Importante"),sg()(),Sl(3688,"blockquote")(3689,"p"),Jx(3690,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Sl(3691,"a",75),Jx(3692,"guia de API do PO UI"),sg(),Jx(3693,"."),sg()()()(),Sl(3694,"tr",13)(3695,"td",14)(3696,"div",15)(3697,"span",16),Jx(3698," order"),Wl(3699,"br"),sg()()(),Sl(3700,"td",17)(3701,"code",41),Jx(3702,"number"),sg()(),Sl(3703,"td",20)(3704,"em")(3705,"strong"),Jx(3706,"(opcional)"),sg()(),Sl(3707,"p"),Jx(3708,"Informa a ordem de exibi\xE7\xE3o do campo."),sg(),Sl(3709,"p"),Jx(3710,"Exemplo de utiliza\xE7\xE3o:"),sg(),Sl(3711,"p")(3712,"code"),Jx(3713,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),sg()(),Sl(3714,"p"),Jx(3715,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Sl(3716,"code"),Jx(3717,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),sg()(),Sl(3718,"p"),Jx(3719,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),sg(),Sl(3720,"p"),Jx(3721,"Campos sem "),Sl(3722,"code"),Jx(3723,"order"),sg(),Jx(3724,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),sg()()(),Sl(3725,"tr",13)(3726,"td",14)(3727,"div",15)(3728,"span",16),Jx(3729," params"),Wl(3730,"br"),sg()()(),Sl(3731,"td",17)(3732,"code",33),Jx(3733,"any"),sg()(),Sl(3734,"td",20)(3735,"em")(3736,"strong"),Jx(3737,"(opcional)"),sg()(),Sl(3738,"p"),Jx(3739,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),Sl(3740,"code"),Jx(3741,"po-lookup"),sg(),Jx(3742,` e
`),Sl(3743,"code"),Jx(3744,"po-combo"),sg(),Jx(3745,"."),sg(),Sl(3746,"p"),Jx(3747,"Por exemplo, para o par\xE2metro "),Sl(3748,"code"),Jx(3749,"{ age: 23 }"),sg(),Jx(3750," a URL da requisi\xE7\xE3o ficaria:"),sg(),Sl(3751,"p")(3752,"code"),Jx(3753,"url + ?age=23&filter=Peter"),sg()()()(),Sl(3754,"tr",13)(3755,"td",14)(3756,"div",15)(3757,"span",16),Jx(3758," pattern"),Wl(3759,"br"),sg()()(),Sl(3760,"td",17)(3761,"code",18),Jx(3762,"string"),sg()(),Sl(3763,"td",20)(3764,"em")(3765,"strong"),Jx(3766,"(opcional)"),sg()(),Sl(3767,"p"),Jx(3768,"Regex para valida\xE7\xE3o do campo."),sg(),Sl(3769,"p")(3770,"strong"),Jx(3771,"Componentes compat\xEDveis:"),sg(),Sl(3772,"code"),Jx(3773,"po-input"),sg(),Jx(3774,", "),Sl(3775,"code"),Jx(3776,"po-password"),sg(),Jx(3777,"."),sg()()(),Sl(3778,"tr",13)(3779,"td",14)(3780,"div",15)(3781,"span",16),Jx(3782," placeholder"),Wl(3783,"br"),sg()()(),Sl(3784,"td",17)(3785,"code",18),Jx(3786,"string"),sg()(),Sl(3787,"td",20)(3788,"em")(3789,"strong"),Jx(3790,"(opcional)"),sg()(),Sl(3791,"p"),Jx(3792,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),sg(),Sl(3793,"p")(3794,"strong"),Jx(3795,"Componentes compat\xEDveis:"),sg(),Sl(3796,"code"),Jx(3797,"po-datepicker"),sg(),Jx(3798,", "),Sl(3799,"code"),Jx(3800,"po-datepicker-range"),sg(),Jx(3801,", "),Sl(3802,"code"),Jx(3803,"po-timepicker"),sg(),Jx(3804,", "),Sl(3805,"code"),Jx(3806,"po-input"),sg(),Jx(3807,", "),Sl(3808,"code"),Jx(3809,"po-number"),sg(),Jx(3810,", "),Sl(3811,"code"),Jx(3812,"po-decimal"),sg(),Jx(3813,", "),Sl(3814,"code"),Jx(3815,"po-select"),sg(),Jx(3816,", "),Sl(3817,"code"),Jx(3818,"po-combo"),sg(),Jx(3819,", "),Sl(3820,"code"),Jx(3821,"po-lookup"),sg(),Jx(3822,", "),Sl(3823,"code"),Jx(3824,"po-multiselect"),sg(),Jx(3825,", "),Sl(3826,"code"),Jx(3827,"po-textarea"),sg(),Jx(3828,", "),Sl(3829,"code"),Jx(3830,"po-password"),sg(),Jx(3831,"."),sg()()(),Sl(3832,"tr",13)(3833,"td",14)(3834,"div",15)(3835,"span",16),Jx(3836," placeholderSearch"),Wl(3837,"br"),sg()()(),Sl(3838,"td",17)(3839,"code",18),Jx(3840,"string"),sg()(),Sl(3841,"td",20)(3842,"em")(3843,"strong"),Jx(3844,"(opcional)"),sg()(),Sl(3845,"p"),Jx(3846,"Placeholder do campo de pesquisa do "),Sl(3847,"code"),Jx(3848,"po-multiselect"),sg(),Jx(3849,"."),sg(),Sl(3850,"blockquote")(3851,"p"),Jx(3852,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),sg()()()(),Sl(3853,"tr",13)(3854,"td",14)(3855,"div",15)(3856,"span",16),Jx(3857," property"),Wl(3858,"br"),sg()()(),Sl(3859,"td",17)(3860,"code",18),Jx(3861,"string"),sg()(),Sl(3862,"td",20)(3863,"p"),Jx(3864,"Nome de refer\xEAncia do campo."),sg()()(),Sl(3865,"tr",13)(3866,"td",14)(3867,"div",15)(3868,"span",16),Jx(3869," range"),Wl(3870,"br"),sg()()(),Sl(3871,"td",17)(3872,"code",28),Jx(3873,"boolean"),sg()(),Sl(3874,"td",20)(3875,"em")(3876,"strong"),Jx(3877,"(opcional)"),sg()(),Sl(3878,"p"),Jx(3879,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),sg(),Sl(3880,"blockquote")(3881,"p"),Jx(3882,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),sg()()()(),Sl(3883,"tr",13)(3884,"td",14)(3885,"div",15)(3886,"span",16),Jx(3887," rangePresetOptions"),Wl(3888,"br"),sg()()(),Sl(3889,"td",17)(3890,"code",76),Jx(3891,"Array<PoCalendarRangePreset>"),sg()(),Sl(3892,"td",20)(3893,"em")(3894,"strong"),Jx(3895,"(opcional)"),sg()(),Sl(3896,"p"),Jx(3897,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),sg(),Sl(3898,"p"),Jx(3899,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Sl(3900,"code"),Jx(3901,"PoCalendarRangePreset"),sg(),Jx(3902,"."),sg(),Sl(3903,"p")(3904,"strong"),Jx(3905,"Componente compat\xEDvel:"),sg(),Sl(3906,"code"),Jx(3907,"po-datepicker-range"),sg()()()(),Sl(3908,"tr",13)(3909,"td",14)(3910,"div",15)(3911,"span",16),Jx(3912," rangePresets"),Wl(3913,"br"),sg()()(),Sl(3914,"td",17)(3915,"code",28),Jx(3916,"boolean "),sg(),Sl(3917,"code",32),Jx(3918," Array<string>"),sg()(),Sl(3919,"td",20)(3920,"em")(3921,"strong"),Jx(3922,"(opcional)"),sg()(),Sl(3923,"p"),Jx(3924,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),sg(),Sl(3925,"p"),Jx(3926,"Aceita os seguintes valores:"),sg(),Sl(3927,"ul")(3928,"li")(3929,"code"),Jx(3930,"true"),sg(),Jx(3931,": exibe todos os presets padr\xE3o."),sg(),Sl(3932,"li")(3933,"code"),Jx(3934,"false"),sg(),Jx(3935,": n\xE3o exibe os presets padr\xE3o."),sg(),Sl(3936,"li")(3937,"code"),Jx(3938,"Array<string>"),sg(),Jx(3939,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),sg()(),Sl(3940,"p")(3941,"strong"),Jx(3942,"Componente compat\xEDvel:"),sg(),Sl(3943,"code"),Jx(3944,"po-datepicker-range"),sg()()()(),Sl(3945,"tr",13)(3946,"td",14)(3947,"div",15)(3948,"span",16),Jx(3949," rangePresetsOrder"),Wl(3950,"br"),sg()()(),Sl(3951,"td",17)(3952,"code",77),Jx(3953,"'asc' "),sg(),Sl(3954,"code",78),Jx(3955," 'desc'"),sg()(),Sl(3956,"td",20)(3957,"em")(3958,"strong"),Jx(3959,"(opcional)"),sg()(),Sl(3960,"p"),Jx(3961,"Define a ordena\xE7\xE3o dos presets na lista."),sg(),Sl(3962,"p"),Jx(3963,"Valores aceitos:"),sg(),Sl(3964,"ul")(3965,"li")(3966,"code"),Jx(3967,"'asc'"),sg(),Jx(3968,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),sg(),Sl(3969,"li")(3970,"code"),Jx(3971,"'desc'"),sg(),Jx(3972,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),sg()(),Sl(3973,"p")(3974,"strong"),Jx(3975,"Componente compat\xEDvel:"),sg(),Sl(3976,"code"),Jx(3977,"po-datepicker-range"),sg()()()(),Sl(3978,"tr",13)(3979,"td",14)(3980,"div",15)(3981,"span",16),Jx(3982," readonly"),Wl(3983,"br"),sg()()(),Sl(3984,"td",17)(3985,"code",28),Jx(3986,"boolean"),sg()(),Sl(3987,"td",20)(3988,"em")(3989,"strong"),Jx(3990,"(opcional)"),sg()(),Sl(3991,"p"),Jx(3992,"Indica que o campo ser\xE1 somente leitura."),sg(),Sl(3993,"p")(3994,"strong"),Jx(3995,"Componentes compat\xEDveis:"),sg(),Sl(3996,"code"),Jx(3997,"po-datepicker"),sg(),Jx(3998,", "),Sl(3999,"code"),Jx(4e3,"po-datepicker-range"),sg(),Jx(4001,", "),Sl(4002,"code"),Jx(4003,"po-timepicker"),sg(),Jx(4004,", "),Sl(4005,"code"),Jx(4006,"po-input"),sg(),Jx(4007,", "),Sl(4008,"code"),Jx(4009,"po-number"),sg(),Jx(4010,`,
`),Sl(4011,"code"),Jx(4012,"po-decimal"),sg(),Jx(4013,", "),Sl(4014,"code"),Jx(4015,"po-select"),sg(),Jx(4016,", "),Sl(4017,"code"),Jx(4018,"po-textarea"),sg(),Jx(4019,", "),Sl(4020,"code"),Jx(4021,"po-password"),sg(),Jx(4022,"."),sg()()(),Sl(4023,"tr",13)(4024,"td",14)(4025,"div",15)(4026,"span",16),Jx(4027," removeInitialFilter"),Wl(4028,"br"),sg()()(),Sl(4029,"td",17)(4030,"code",28),Jx(4031,"boolean"),sg()(),Sl(4032,"td",20)(4033,"em")(4034,"strong"),Jx(4035,"(opcional)"),sg()(),Sl(4036,"p"),Jx(4037,"Define que o filtro no primeiro clique ser\xE1 removido."),sg(),Sl(4038,"blockquote")(4039,"p"),Jx(4040,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),sg()(),Sl(4041,"p")(4042,"strong"),Jx(4043,"Componente compat\xEDvel"),sg(),Jx(4044,": "),Sl(4045,"code"),Jx(4046,"po-combo"),sg()()()(),Sl(4047,"tr",13)(4048,"td",14)(4049,"div",15)(4050,"span",16),Jx(4051," required"),Wl(4052,"br"),sg()()(),Sl(4053,"td",17)(4054,"code",28),Jx(4055,"boolean"),sg()(),Sl(4056,"td",20)(4057,"em")(4058,"strong"),Jx(4059,"(opcional)"),sg()(),Sl(4060,"p"),Jx(4061,"Define a obrigatoriedade do campo."),sg(),Sl(4062,"p")(4063,"strong"),Jx(4064,"Componentes compat\xEDveis:"),sg(),Sl(4065,"code"),Jx(4066,"po-datepicker"),sg(),Jx(4067,", "),Sl(4068,"code"),Jx(4069,"po-datepicker-range"),sg(),Jx(4070,", "),Sl(4071,"code"),Jx(4072,"po-timepicker"),sg(),Jx(4073,", "),Sl(4074,"code"),Jx(4075,"po-input"),sg(),Jx(4076,", "),Sl(4077,"code"),Jx(4078,"po-number"),sg(),Jx(4079,`,
`),Sl(4080,"code"),Jx(4081,"po-decimal"),sg(),Jx(4082,", "),Sl(4083,"code"),Jx(4084,"po-select"),sg(),Jx(4085,", "),Sl(4086,"code"),Jx(4087,"po-radio-group"),sg(),Jx(4088,", "),Sl(4089,"code"),Jx(4090,"po-combo"),sg(),Jx(4091,", "),Sl(4092,"code"),Jx(4093,"po-lookup"),sg(),Jx(4094,", "),Sl(4095,"code"),Jx(4096,"po-checkbox-group"),sg(),Jx(4097,", "),Sl(4098,"code"),Jx(4099,"po-multiselect"),sg(),Jx(4100,`,
`),Sl(4101,"code"),Jx(4102,"po-textarea"),sg(),Jx(4103,", "),Sl(4104,"code"),Jx(4105,"po-password``, "),sg(),Jx(4106,"po-upload`."),sg()()(),Sl(4107,"tr",13)(4108,"td",14)(4109,"div",15)(4110,"span",16),Jx(4111," requiredFieldErrorMessage"),Wl(4112,"br"),sg()()(),Sl(4113,"td",17)(4114,"code",28),Jx(4115,"boolean"),sg()(),Sl(4116,"td",20)(4117,"em")(4118,"strong"),Jx(4119,"(opcional)"),sg()(),Sl(4120,"p"),Jx(4121,"Exibe a mensagem setada na propriedade "),Sl(4122,"code"),Jx(4123,"errorMessage"),sg(),Jx(4124," se o campo estiver vazio e for requerido."),sg(),Sl(4125,"blockquote")(4126,"p"),Jx(4127,"Necess\xE1rio que a propriedade "),Sl(4128,"code"),Jx(4129,"required"),sg(),Jx(4130," esteja habilitada."),sg()(),Sl(4131,"p")(4132,"strong"),Jx(4133,"Componentes compat\xEDveis:"),sg(),Sl(4134,"code"),Jx(4135,"po-datepicker"),sg(),Jx(4136,", "),Sl(4137,"code"),Jx(4138,"po-timepicker"),sg(),Jx(4139,", "),Sl(4140,"code"),Jx(4141,"po-input"),sg(),Jx(4142,", "),Sl(4143,"code"),Jx(4144,"po-number"),sg(),Jx(4145,", "),Sl(4146,"code"),Jx(4147,"po-decimal"),sg(),Jx(4148,", "),Sl(4149,"code"),Jx(4150,"po-password"),sg(),Jx(4151,"."),sg()()(),Sl(4152,"tr",13)(4153,"td",14)(4154,"div",15)(4155,"span",16),Jx(4156," restrictions"),Wl(4157,"br"),sg()()(),Sl(4158,"td",17)(4159,"code",79),Jx(4160,"PoUploadFileRestrictions"),sg()(),Sl(4161,"td",20)(4162,"em")(4163,"strong"),Jx(4164,"(opcional)"),sg()(),Sl(4165,"p"),Jx(4166,"Objeto que segue a defini\xE7\xE3o da interface "),Sl(4167,"code"),Jx(4168,"PoUploadFileRestrictions"),sg(),Jx(4169,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),sg(),Sl(4170,"p")(4171,"strong"),Jx(4172,"Componente compat\xEDvel"),sg(),Jx(4173,": "),Sl(4174,"code"),Jx(4175,"po-upload"),sg()()()(),Sl(4176,"tr",13)(4177,"td",14)(4178,"div",15)(4179,"span",16),Jx(4180," rows"),Wl(4181,"br"),sg()()(),Sl(4182,"td",17)(4183,"code",41),Jx(4184,"number"),sg()(),Sl(4185,"td",20)(4186,"em")(4187,"strong"),Jx(4188,"(opcional)"),sg()(),Sl(4189,"p"),Jx(4190,"Quantidade de linhas exibidas no "),Sl(4191,"code"),Jx(4192,"po-textarea"),sg(),Jx(4193,"."),sg()()(),Sl(4194,"tr",13)(4195,"td",14)(4196,"div",15)(4197,"span",16),Jx(4198," searchService"),Wl(4199,"br"),sg()()(),Sl(4200,"td",17)(4201,"code",18),Jx(4202,"string "),sg(),Sl(4203,"code",80),Jx(4204," PoLookupFilter"),sg()(),Sl(4205,"td",20)(4206,"em")(4207,"strong"),Jx(4208,"(opcional)"),sg()(),Sl(4209,"p"),Jx(4210,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),Sl(4211,"code"),Jx(4212,"columns"),sg(),Jx(4213,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Sl(4214,"strong"),Jx(4215,"Importante:"),sg()(),Sl(4216,"blockquote")(4217,"p"),Jx(4218,"Caso utilizar a propriedade "),Sl(4219,"code"),Jx(4220,"optionsService"),sg(),Jx(4221,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Sl(4222,"a",75),Jx(4223,"guia de API do PO UI"),sg(),Jx(4224,"."),sg()()()(),Sl(4225,"tr",13)(4226,"td",14)(4227,"div",15)(4228,"span",16),Jx(4229," secondInterval"),Wl(4230,"br"),sg()()(),Sl(4231,"td",17)(4232,"code",41),Jx(4233,"number"),sg()(),Sl(4234,"td",20)(4235,"em")(4236,"strong"),Jx(4237,"(opcional)"),sg()(),Sl(4238,"p"),Jx(4239,"Define o intervalo entre os segundos exibidos no painel do timepicker."),sg()()(),Sl(4240,"tr",13)(4241,"td",14)(4242,"div",15)(4243,"span",16),Jx(4244," secret"),Wl(4245,"br"),sg()()(),Sl(4246,"td",17)(4247,"code",28),Jx(4248,"boolean"),sg()(),Sl(4249,"td",20)(4250,"em")(4251,"strong"),Jx(4252,"(opcional)"),sg()(),Sl(4253,"p"),Jx(4254,"Esconde a informa\xE7\xE3o estilo "),Sl(4255,"em"),Jx(4256,"password"),sg(),Jx(4257,", pode ser utilizado quando o tipo de dado for "),Sl(4258,"em"),Jx(4259,"string"),sg(),Jx(4260,"."),sg()()(),Sl(4261,"tr",13)(4262,"td",14)(4263,"div",15)(4264,"span",16),Jx(4265," showRequired"),Wl(4266,"br"),sg()()(),Sl(4267,"td",17)(4268,"code",28),Jx(4269,"boolean"),sg()(),Sl(4270,"td",20)(4271,"em")(4272,"strong"),Jx(4273,"(opcional)"),sg()(),Sl(4274,"p"),Jx(4275,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Sl(4276,"blockquote")(4277,"p"),Jx(4278,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(4279,"ul")(4280,"li"),Jx(4281,"N\xE3o possuir "),Sl(4282,"code"),Jx(4283,"p-help"),sg(),Jx(4284," e/ou "),Sl(4285,"code"),Jx(4286,"p-label"),sg(),Jx(4287,"."),sg()(),Sl(4288,"p")(4289,"strong"),Jx(4290,"Componentes compat\xEDveis:"),sg(),Sl(4291,"code"),Jx(4292,"po-datepicker"),sg(),Jx(4293,", "),Sl(4294,"code"),Jx(4295,"po-datepicker-range"),sg(),Jx(4296,", "),Sl(4297,"code"),Jx(4298,"po-timepicker"),sg(),Jx(4299,", "),Sl(4300,"code"),Jx(4301,"po-input"),sg(),Jx(4302,", "),Sl(4303,"code"),Jx(4304,"po-number"),sg(),Jx(4305,`,
`),Sl(4306,"code"),Jx(4307,"po-decimal"),sg(),Jx(4308,", "),Sl(4309,"code"),Jx(4310,"po-select"),sg(),Jx(4311,", "),Sl(4312,"code"),Jx(4313,"po-radio-group"),sg(),Jx(4314,", "),Sl(4315,"code"),Jx(4316,"po-combo"),sg(),Jx(4317,", "),Sl(4318,"code"),Jx(4319,"po-lookup"),sg(),Jx(4320,", "),Sl(4321,"code"),Jx(4322,"po-checkbox-group"),sg(),Jx(4323,", "),Sl(4324,"code"),Jx(4325,"po-multiselect"),sg(),Jx(4326,`,
`),Sl(4327,"code"),Jx(4328,"po-textarea"),sg(),Jx(4329,", "),Sl(4330,"code"),Jx(4331,"po-password"),sg(),Jx(4332,", "),Sl(4333,"code"),Jx(4334,"po-upload"),sg(),Jx(4335,"."),sg()()(),Sl(4336,"tr",13)(4337,"td",14)(4338,"div",15)(4339,"span",16),Jx(4340," showSeconds"),Wl(4341,"br"),sg()()(),Sl(4342,"td",17)(4343,"code",28),Jx(4344,"boolean"),sg()(),Sl(4345,"td",20)(4346,"em")(4347,"strong"),Jx(4348,"(opcional)"),sg()(),Sl(4349,"p"),Jx(4350,"Exibe a coluna de segundos no painel do timepicker."),sg()()(),Sl(4351,"tr",13)(4352,"td",14)(4353,"div",15)(4354,"span",16),Jx(4355," showThumbnail"),Wl(4356,"br"),sg()()(),Sl(4357,"td",17)(4358,"code",28),Jx(4359,"boolean"),sg()(),Sl(4360,"td",20)(4361,"em")(4362,"strong"),Jx(4363,"(opcional)"),sg()(),Sl(4364,"p"),Jx(4365,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),sg(),Sl(4366,"blockquote")(4367,"p"),Jx(4368,"Propriedade funciona apenas em arquivos de formato de imagem ("),Sl(4369,"code"),Jx(4370,".png"),sg(),Jx(4371,", "),Sl(4372,"code"),Jx(4373,".jpg"),sg(),Jx(4374,", "),Sl(4375,"code"),Jx(4376,".jpeg"),sg(),Jx(4377," e "),Sl(4378,"code"),Jx(4379,".gif"),sg(),Jx(4380,")."),sg()(),Sl(4381,"p")(4382,"strong"),Jx(4383,"Componente compat\xEDvel"),sg(),Jx(4384,": "),Sl(4385,"code"),Jx(4386,"po-upload"),sg()()()(),Sl(4387,"tr",13)(4388,"td",14)(4389,"div",15)(4390,"span",16),Jx(4391," size"),Wl(4392,"br"),sg()()(),Sl(4393,"td",17)(4394,"code",18),Jx(4395,"string"),sg()(),Sl(4396,"td",20)(4397,"em")(4398,"strong"),Jx(4399,"(opcional)"),sg()(),Sl(4400,"p"),Jx(4401,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),sg(),Sl(4402,"ul")(4403,"li")(4404,"code"),Jx(4405,"small"),sg(),Jx(4406,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(4407,"li")(4408,"code"),Jx(4409,"medium"),sg(),Jx(4410,": aplica a medida medium de cada componente."),sg(),Sl(4411,"li")(4412,"code"),Jx(4413,"large"),sg(),Jx(4414,": aplica a medida large de cada componente (dispon\xEDvel para "),Sl(4415,"code"),Jx(4416,"po-checkbox"),sg(),Jx(4417," e "),Sl(4418,"code"),Jx(4419,"po-radio-group"),sg(),Jx(4420,")."),Sl(4421,"blockquote")(4422,"p"),Jx(4423,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(4424,"code"),Jx(4425,"medium"),sg(),Jx(4426,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(4427,"a",21),Jx(4428,"po-theme"),sg(),Jx(4429,"."),sg()()()()()(),Sl(4430,"tr",13)(4431,"td",14)(4432,"div",15)(4433,"span",16),Jx(4434," sort"),Wl(4435,"br"),sg()()(),Sl(4436,"td",17)(4437,"code",28),Jx(4438,"boolean"),sg()(),Sl(4439,"td",20)(4440,"em")(4441,"strong"),Jx(4442,"(opcional)"),sg()(),Sl(4443,"p"),Jx(4444,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),sg(),Sl(4445,"p")(4446,"strong"),Jx(4447,"Componentes compat\xEDveis:"),sg(),Sl(4448,"code"),Jx(4449,"po-combo"),sg(),Jx(4450,", po-multiselect"),sg()()(),Sl(4451,"tr",13)(4452,"td",14)(4453,"div",15)(4454,"span",16),Jx(4455," step"),Wl(4456,"br"),sg()()(),Sl(4457,"td",17)(4458,"code",41),Jx(4459,"number"),sg()(),Sl(4460,"td",20)(4461,"em")(4462,"strong"),Jx(4463,"(opcional)"),sg()(),Sl(4464,"p"),Jx(4465,"Intervalo utilizado no "),Sl(4466,"code"),Jx(4467,"po-number"),sg(),Jx(4468,"."),sg()()(),Sl(4469,"tr",13)(4470,"td",14)(4471,"div",15)(4472,"span",16),Jx(4473," thousandMaxlength"),Wl(4474,"br"),sg()()(),Sl(4475,"td",17)(4476,"code",41),Jx(4477,"number"),sg()(),Sl(4478,"td",20)(4479,"em")(4480,"strong"),Jx(4481,"(opcional)"),sg()(),Sl(4482,"p"),Jx(4483,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),sg(),Sl(4484,"blockquote")(4485,"p"),Jx(4486,"Esta propriedade s\xF3 pode ser utilizada quando o "),Sl(4487,"code"),Jx(4488,"type"),sg(),Jx(4489," for "),Sl(4490,"em"),Jx(4491,"currency"),sg(),Jx(4492," ou "),Sl(4493,"em"),Jx(4494,"decimal"),sg(),Jx(4495,"."),sg()()()(),Sl(4496,"tr",13)(4497,"td",14)(4498,"div",15)(4499,"span",16),Jx(4500," type"),Wl(4501,"br"),sg()()(),Sl(4502,"td",17)(4503,"code",18),Jx(4504,"string "),sg(),Sl(4505,"code",81),Jx(4506," PoDynamicFieldType"),sg()(),Sl(4507,"td",20)(4508,"em")(4509,"strong"),Jx(4510,"(opcional)"),sg()(),Sl(4511,"p"),Jx(4512,"Tipo do valor campo."),sg(),Sl(4513,"p"),Jx(4514,"Valores v\xE1lidos:"),sg(),Sl(4515,"ul")(4516,"li")(4517,"code"),Jx(4518,"boolean"),sg(),Jx(4519,": Valores "),Sl(4520,"em"),Jx(4521,"booleanos"),sg(),Jx(4522,"."),sg(),Sl(4523,"li")(4524,"code"),Jx(4525,"currency"),sg(),Jx(4526,": Valores monet\xE1rios."),sg(),Sl(4527,"li")(4528,"code"),Jx(4529,"decimal"),sg(),Jx(4530,": Valores decimais."),sg(),Sl(4531,"li")(4532,"code"),Jx(4533,"date"),sg(),Jx(4534,": Valores de datas."),Sl(4535,"ul")(4536,"li"),Jx(4537,"Aceita os tipos "),Sl(4538,"strong"),Jx(4539,"string"),sg(),Jx(4540," e "),Sl(4541,"strong"),Jx(4542,"Date"),sg(),Jx(4543,` padr\xE3o do Javascript,
por exemplo: `),Sl(4544,"code"),Jx(4545,"'2017-11-28'"),sg(),Jx(4546," ou "),Sl(4547,"code"),Jx(4548,"new Date(2017, 10, 28)"),sg(),Jx(4549,"."),sg()()(),Sl(4550,"li")(4551,"code"),Jx(4552,"dateTime"),sg(),Jx(4553,": Valor de data com hor\xE1rio."),Sl(4554,"ul")(4555,"li"),Jx(4556,"Aceita o tipo "),Sl(4557,"em"),Jx(4558,"string"),sg(),Jx(4559," no formato "),Sl(4560,"strong"),Jx(4561,"ISO-8601"),sg(),Jx(4562," extendido "),Sl(4563,"strong"),Jx(4564,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),sg(),Jx(4565,`
e o tipo `),Sl(4566,"strong"),Jx(4567,"Date"),sg(),Jx(4568," padr\xE3o do Javascript, por exemplo: "),Sl(4569,"code"),Jx(4570,"'2017-11-28T00:00:00-02:00'"),sg(),Jx(4571," ou "),Sl(4572,"code"),Jx(4573,"new Date(2017, 10, 28)"),sg(),Jx(4574,"."),sg()()(),Sl(4575,"li")(4576,"code"),Jx(4577,"number"),sg(),Jx(4578,": Valores num\xE9ricos."),sg(),Sl(4579,"li")(4580,"code"),Jx(4581,"string"),sg(),Jx(4582,": Textos."),sg(),Sl(4583,"li")(4584,"code"),Jx(4585,"time"),sg(),Jx(4586,": Valor do hor\xE1rio."),Sl(4587,"ul")(4588,"li"),Jx(4589,"Aceita o tipo "),Sl(4590,"strong"),Jx(4591,"string"),sg(),Jx(4592," nos formatos "),Sl(4593,"strong"),Jx(4594,"'HH:mm:ss'"),sg(),Jx(4595," ou "),Sl(4596,"strong"),Jx(4597,"'HH:mm:ss.ffffff'"),sg(),Jx(4598,", por exemplo: "),Sl(4599,"code"),Jx(4600,"'23:12:45'"),sg(),Jx(4601,"."),sg()()()()()(),Sl(4602,"tr",13)(4603,"td",14)(4604,"div",15)(4605,"span",16),Jx(4606," url"),Wl(4607,"br"),sg()()(),Sl(4608,"td",17)(4609,"code",18),Jx(4610,"string"),sg()(),Sl(4611,"td",20)(4612,"em")(4613,"strong"),Jx(4614,"(opcional)"),sg()(),Sl(4615,"p"),Jx(4616,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),sg(),Sl(4617,"p")(4618,"strong"),Jx(4619,"Componente compat\xEDvel"),sg(),Jx(4620,": "),Sl(4621,"code"),Jx(4622,"po-upload"),sg()()()(),Sl(4623,"tr",13)(4624,"td",14)(4625,"div",15)(4626,"span",16),Jx(4627," validate"),Wl(4628,"br"),sg()()(),Sl(4629,"td",17)(4630,"code",18),Jx(4631,"string "),sg(),Sl(4632,"code",29),Jx(4633," Function"),sg()(),Sl(4634,"td",20)(4635,"em")(4636,"strong"),Jx(4637,"(opcional)"),sg()(),Sl(4638,"p"),Jx(4639,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Sl(4640,"strong"),Jx(4641,"mudan\xE7as do campo"),sg(),Jx(4642,"."),sg(),Sl(4643,"ul")(4644,"li"),Jx(4645,"A propriedade aceita os seguintes tipos:"),sg()(),Sl(4646,"ul")(4647,"li")(4648,"strong"),Jx(4649,"String"),sg(),Jx(4650,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Sl(4651,"code"),Jx(4652,"POST"),sg(),Jx(4653,"."),sg(),Sl(4654,"li")(4655,"strong"),Jx(4656,"Function"),sg(),Jx(4657,": M\xE9todo que ser\xE1 executado."),sg()(),Sl(4658,"p"),Jx(4659,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Sl(4660,"code"),Jx(4661,"PoDynamicFormFieldChanged"),sg(),Jx(4662,":"),sg(),Sl(4663,"p")(4664,"code"),Jx(4665,"{ property: 'property name', value: 'new value' }"),sg()(),Sl(4666,"p"),Jx(4667,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Sl(4668,"a",82),Jx(4669,"PoDynamicFormFieldValidation"),sg(),Jx(4670,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),sg(),Sl(4671,"pre")(4672,"code"),Jx(4673,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),sg()(),Sl(4674,"p"),Jx(4675,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Sl(4676,"code"),Jx(4677,"bind"),sg(),Jx(4678,`, por exemplo:
`),Sl(4679,"code"),Jx(4680,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),sg()()()(),Sl(4681,"tr",13)(4682,"td",14)(4683,"div",15)(4684,"span",16),Jx(4685," visible"),Wl(4686,"br"),sg()()(),Sl(4687,"td",17)(4688,"code",28),Jx(4689,"boolean"),sg()(),Sl(4690,"td",20)(4691,"em")(4692,"strong"),Jx(4693,"(opcional)"),sg()(),Sl(4694,"p"),Jx(4695,"Indica se o campo ser\xE1 vis\xEDvel."),sg()()(),Sl(4696,"tr",13)(4697,"td",14)(4698,"div",15)(4699,"span",16),Jx(4700," yearRangeLimit"),Wl(4701,"br"),sg()()(),Sl(4702,"td",17)(4703,"code",41),Jx(4704,"number"),sg()(),Sl(4705,"td",20)(4706,"em")(4707,"strong"),Jx(4708,"(opcional)"),sg()(),Sl(4709,"p"),Jx(4710,"Define o limite de anos exibidos na lista de anos do "),Sl(4711,"code"),Jx(4712,"po-datepicker"),sg(),Jx(4713," nos modos "),Sl(4714,"code"),Jx(4715,"month-year"),sg(),Jx(4716," e "),Sl(4717,"code"),Jx(4718,"year"),sg(),Jx(4719,"."),sg()()()(),Sl(4720,"h4",38)(4721,"code",5),Jx(4722,"PoDynamicFormLoad"),sg()(),Sl(4723,"div",2)(4724,"p"),Wl(4725,"a",83),sg(),Sl(4726,"p"),Jx(4727,"Estrutura de retorno no carregamento do formul\xE1rio."),sg()(),Sl(4728,"h4",9),Jx(4729,"Propriedades"),sg(),Sl(4730,"table",10)(4731,"tr",11)(4732,"th",12),Jx(4733,"Nome"),sg(),Sl(4734,"th",12),Jx(4735,"Tipo"),sg(),Sl(4736,"th",12),Jx(4737,"Descri\xE7\xE3o"),sg()(),Sl(4738,"tr",13)(4739,"td",14)(4740,"div",15)(4741,"span",16),Jx(4742," fields"),Wl(4743,"br"),sg()()(),Sl(4744,"td",17)(4745,"code",22),Jx(4746,"Array<PoDynamicFormField>"),sg()(),Sl(4747,"td",20)(4748,"em")(4749,"strong"),Jx(4750,"(opcional)"),sg()(),Sl(4751,"p"),Jx(4752,"Lista com as novas defini\xE7\xF5es dos campos."),sg(),Sl(4753,"blockquote")(4754,"p"),Jx(4755,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),sg()()()(),Sl(4756,"tr",13)(4757,"td",14)(4758,"div",15)(4759,"span",16),Jx(4760," focus"),Wl(4761,"br"),sg()()(),Sl(4762,"td",17)(4763,"code",18),Jx(4764,"string"),sg()(),Sl(4765,"td",20)(4766,"em")(4767,"strong"),Jx(4768,"(opcional)"),sg()(),Sl(4769,"p"),Jx(4770,"Nome do campo que receber\xE1 o foco."),sg(),Sl(4771,"p"),Jx(4772,"Exemplo:"),sg(),Sl(4773,"pre")(4774,"code"),Jx(4775,`focus: 'name'
`),sg()()()(),Sl(4776,"tr",13)(4777,"td",14)(4778,"div",15)(4779,"span",16),Jx(4780," value"),Wl(4781,"br"),sg()()(),Sl(4782,"td",17)(4783,"code",33),Jx(4784,"any"),sg()(),Sl(4785,"td",20)(4786,"em")(4787,"strong"),Jx(4788,"(opcional)"),sg()(),Sl(4789,"p"),Jx(4790,"Objeto contendo os novos valores."),sg(),Sl(4791,"p"),Jx(4792,"Exemplo:"),sg(),Sl(4793,"pre")(4794,"code"),Jx(4795,`{
  name: 'new name',
  age: 10
}
`),sg()(),Sl(4796,"blockquote")(4797,"p"),Jx(4798,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),sg()()()()(),Sl(4799,"h4",38)(4800,"code",5),Jx(4801,"PoDynamicFormFieldChanged"),sg()(),Sl(4802,"div",2)(4803,"p"),Jx(4804,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),sg()(),Sl(4805,"h4",9),Jx(4806,"Propriedades"),sg(),Sl(4807,"table",10)(4808,"tr",11)(4809,"th",12),Jx(4810,"Nome"),sg(),Sl(4811,"th",12),Jx(4812,"Tipo"),sg(),Sl(4813,"th",12),Jx(4814,"Descri\xE7\xE3o"),sg()(),Sl(4815,"tr",13)(4816,"td",14)(4817,"div",15)(4818,"span",16),Jx(4819," property"),Wl(4820,"br"),sg()()(),Sl(4821,"td",17)(4822,"code",18),Jx(4823,"string"),sg()(),Sl(4824,"td",20)(4825,"p"),Jx(4826,"Valor da propriedade do campo."),sg()()(),Sl(4827,"tr",13)(4828,"td",14)(4829,"div",15)(4830,"span",16),Jx(4831," value"),Wl(4832,"br"),sg()()(),Sl(4833,"td",17)(4834,"code",33),Jx(4835,"any"),sg()(),Sl(4836,"td",20)(4837,"p"),Jx(4838,"Novo valor do campo."),sg()()()(),Sl(4839,"h4",38)(4840,"code",5),Jx(4841,"PoDynamicFormFieldValidation"),sg()(),Sl(4842,"div",2)(4843,"p"),Wl(4844,"a",84),sg(),Sl(4845,"p"),Jx(4846,"Estrutura de retorno da valida\xE7\xE3o de um campo."),sg()(),Sl(4847,"h4",9),Jx(4848,"Propriedades"),sg(),Sl(4849,"table",10)(4850,"tr",11)(4851,"th",12),Jx(4852,"Nome"),sg(),Sl(4853,"th",12),Jx(4854,"Tipo"),sg(),Sl(4855,"th",12),Jx(4856,"Descri\xE7\xE3o"),sg()(),Sl(4857,"tr",13)(4858,"td",14)(4859,"div",15)(4860,"span",16),Jx(4861," field"),Wl(4862,"br"),sg()()(),Sl(4863,"td",17)(4864,"code",85),Jx(4865,"PoDynamicFormField"),sg()(),Sl(4866,"td",20)(4867,"em")(4868,"strong"),Jx(4869,"(opcional)"),sg()(),Sl(4870,"p"),Jx(4871,"Novas defini\xE7\xF5es das propriedades do campo."),sg(),Sl(4872,"blockquote")(4873,"p"),Jx(4874,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),sg()()()(),Sl(4875,"tr",13)(4876,"td",14)(4877,"div",15)(4878,"span",16),Jx(4879," focus"),Wl(4880,"br"),sg()()(),Sl(4881,"td",17)(4882,"code",28),Jx(4883,"boolean"),sg()(),Sl(4884,"td",20)(4885,"em")(4886,"strong"),Jx(4887,"(opcional)"),sg()(),Sl(4888,"p"),Jx(4889,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),sg()()(),Sl(4890,"tr",13)(4891,"td",14)(4892,"div",15)(4893,"span",16),Jx(4894," value"),Wl(4895,"br"),sg()()(),Sl(4896,"td",17)(4897,"code",33),Jx(4898,"any"),sg()(),Sl(4899,"td",20)(4900,"em")(4901,"strong"),Jx(4902,"(opcional)"),sg()(),Sl(4903,"p"),Jx(4904,"Novo valor do campo"),sg()()()(),Sl(4905,"h4",38)(4906,"code",5),Jx(4907,"PoDynamicFormValidation"),sg()(),Sl(4908,"div",2)(4909,"p"),Wl(4910,"a",86),sg(),Sl(4911,"p"),Jx(4912,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),sg()(),Sl(4913,"h4",9),Jx(4914,"Propriedades"),sg(),Sl(4915,"table",10)(4916,"tr",11)(4917,"th",12),Jx(4918,"Nome"),sg(),Sl(4919,"th",12),Jx(4920,"Tipo"),sg(),Sl(4921,"th",12),Jx(4922,"Descri\xE7\xE3o"),sg()(),Sl(4923,"tr",13)(4924,"td",14)(4925,"div",15)(4926,"span",16),Jx(4927," fields"),Wl(4928,"br"),sg()()(),Sl(4929,"td",17)(4930,"code",22),Jx(4931,"Array<PoDynamicFormField>"),sg()(),Sl(4932,"td",20)(4933,"em")(4934,"strong"),Jx(4935,"(opcional)"),sg()(),Sl(4936,"p"),Jx(4937,"Lista com as novas defini\xE7\xF5es dos campos."),sg(),Sl(4938,"blockquote")(4939,"p"),Jx(4940,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),sg()()()(),Sl(4941,"tr",13)(4942,"td",14)(4943,"div",15)(4944,"span",16),Jx(4945," focus"),Wl(4946,"br"),sg()()(),Sl(4947,"td",17)(4948,"code",18),Jx(4949,"string"),sg()(),Sl(4950,"td",20)(4951,"em")(4952,"strong"),Jx(4953,"(opcional)"),sg()(),Sl(4954,"p"),Jx(4955,"Nome do campo que receber\xE1 o foco."),sg(),Sl(4956,"p"),Jx(4957,"Exemplo:"),sg(),Sl(4958,"pre")(4959,"code"),Jx(4960,`focus: 'name'
`),sg()()()(),Sl(4961,"tr",13)(4962,"td",14)(4963,"div",15)(4964,"span",16),Jx(4965," value"),Wl(4966,"br"),sg()()(),Sl(4967,"td",17)(4968,"code",33),Jx(4969,"any"),sg()(),Sl(4970,"td",20)(4971,"em")(4972,"strong"),Jx(4973,"(opcional)"),sg()(),Sl(4974,"p"),Jx(4975,"Objeto contendo os novos valores."),sg(),Sl(4976,"p"),Jx(4977,"Exemplo:"),sg(),Sl(4978,"pre")(4979,"code"),Jx(4980,`{
  name: 'new name',
  age: 10
}
`),sg()(),Sl(4981,"blockquote")(4982,"p"),Jx(4983,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),sg()()()()(),Sl(4984,"h4",38)(4985,"code",5),Jx(4986,"ErrorAsyncProperties"),sg()(),Sl(4987,"div",2)(4988,"p"),Jx(4989,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),sg()(),Sl(4990,"h4",9),Jx(4991,"Propriedades"),sg(),Sl(4992,"table",10)(4993,"tr",11)(4994,"th",12),Jx(4995,"Nome"),sg(),Sl(4996,"th",12),Jx(4997,"Tipo"),sg(),Sl(4998,"th",12),Jx(4999,"Descri\xE7\xE3o"),sg()(),Sl(5e3,"tr",13)(5001,"td",14)(5002,"div",15)(5003,"span",16),Jx(5004," errorAsync"),Wl(5005,"br"),sg()()(),Sl(5006,"td",17)(5007,"code",46),Jx(5008,"(value) => Observable<boolean>"),sg()(),Sl(5009,"td",20)(5010,"p"),Jx(5011,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(5012,"code"),Jx(5013,"change"),sg(),Jx(5014," ou "),Sl(5015,"code"),Jx(5016,"change-model"),sg(),Jx(5017,", dependendo do valor da propriedade "),Sl(5018,"code"),Jx(5019,"triggerMode"),sg(),Jx(5020,"."),sg()()(),Sl(5021,"tr",13)(5022,"td",14)(5023,"div",15)(5024,"span",16),Jx(5025," triggerMode"),Wl(5026,"br"),sg()()(),Sl(5027,"td",17)(5028,"code",87),Jx(5029,"'change' "),sg(),Sl(5030,"code",88),Jx(5031," 'changeModel'"),sg()(),Sl(5032,"td",20)(5033,"em")(5034,"strong"),Jx(5035,"(opcional)"),sg()(),Sl(5036,"p"),Jx(5037,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Sl(5038,"code"),Jx(5039,"change"),sg(),Jx(5040," ou "),Sl(5041,"code"),Jx(5042,"change-model"),sg(),Jx(5043,"."),sg()()()(),Sl(5044,"h3"),Jx(5045,"Enums"),sg(),Sl(5046,"h4",4)(5047,"code",5),Jx(5048,"ForceBooleanComponentEnum"),sg()(),Sl(5049,"div",2)(5050,"p"),Jx(5051,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),sg()(),Sl(5052,"h4",9),Jx(5053,"Propriedades"),sg(),Sl(5054,"table",10)(5055,"tr",11)(5056,"th",12),Jx(5057,"Nome"),sg(),Sl(5058,"th",12),Jx(5059,"Descri\xE7\xE3o"),sg()(),Sl(5060,"tr",13)(5061,"td",14)(5062,"div",15)(5063,"span",16),Jx(5064," switch"),Wl(5065,"br"),sg()()(),Sl(5066,"td",20)(5067,"p"),Jx(5068,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),sg()()(),Sl(5069,"tr",13)(5070,"td",14)(5071,"div",15)(5072,"span",16),Jx(5073," checkbox"),Wl(5074,"br"),sg()()(),Sl(5075,"td",20)(5076,"p"),Jx(5077,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),sg()()()(),Sl(5078,"h4",4)(5079,"code",5),Jx(5080,"ForceOptionComponentEnum"),sg()(),Sl(5081,"div",2)(5082,"p"),Jx(5083,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),sg()(),Sl(5084,"h4",9),Jx(5085,"Propriedades"),sg(),Sl(5086,"table",10)(5087,"tr",11)(5088,"th",12),Jx(5089,"Nome"),sg(),Sl(5090,"th",12),Jx(5091,"Descri\xE7\xE3o"),sg()(),Sl(5092,"tr",13)(5093,"td",14)(5094,"div",15)(5095,"span",16),Jx(5096," radioGroup"),Wl(5097,"br"),sg()()(),Sl(5098,"td",20)(5099,"p"),Jx(5100,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),sg()()(),Sl(5101,"tr",13)(5102,"td",14)(5103,"div",15)(5104,"span",16),Jx(5105," select"),Wl(5106,"br"),sg()()(),Sl(5107,"td",20)(5108,"p"),Jx(5109,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),sg()()()(),Sl(5110,"h4",4)(5111,"code",5),Jx(5112,"PoDynamicFieldType"),sg()(),Sl(5113,"div",2)(5114,"p"),Jx(5115,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),sg()(),Sl(5116,"h4",9),Jx(5117,"Propriedades"),sg(),Sl(5118,"table",10)(5119,"tr",11)(5120,"th",12),Jx(5121,"Nome"),sg(),Sl(5122,"th",12),Jx(5123,"Descri\xE7\xE3o"),sg()(),Sl(5124,"tr",13)(5125,"td",14)(5126,"div",15)(5127,"span",16),Jx(5128," Boolean"),Wl(5129,"br"),sg()()(),Sl(5130,"td",20)(5131,"p"),Jx(5132,"Valor booleano."),sg()()(),Sl(5133,"tr",13)(5134,"td",14)(5135,"div",15)(5136,"span",16),Jx(5137," Currency"),Wl(5138,"br"),sg()()(),Sl(5139,"td",20)(5140,"p"),Jx(5141,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),sg()()(),Sl(5142,"tr",13)(5143,"td",14)(5144,"div",15)(5145,"span",16),Jx(5146," Decimal"),Wl(5147,"br"),sg()()(),Sl(5148,"td",20)(5149,"p"),Jx(5150,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),sg()()(),Sl(5151,"tr",13)(5152,"td",14)(5153,"div",15)(5154,"span",16),Jx(5155," Date"),Wl(5156,"br"),sg()()(),Sl(5157,"td",20)(5158,"p"),Jx(5159,"Valor para data."),sg()()(),Sl(5160,"tr",13)(5161,"td",14)(5162,"div",15)(5163,"span",16),Jx(5164," DateTime"),Wl(5165,"br"),sg()()(),Sl(5166,"td",20)(5167,"p"),Jx(5168,"Valor para data e hora."),sg()()(),Sl(5169,"tr",13)(5170,"td",14)(5171,"div",15)(5172,"span",16),Jx(5173," Time"),Wl(5174,"br"),sg()()(),Sl(5175,"td",20)(5176,"p"),Jx(5177,"Utilizado para informar/exibir hora."),sg()()(),Sl(5178,"tr",13)(5179,"td",14)(5180,"div",15)(5181,"span",16),Jx(5182," Number"),Wl(5183,"br"),sg()()(),Sl(5184,"td",20)(5185,"p"),Jx(5186,"Valor num\xE9rico."),sg()()(),Sl(5187,"tr",13)(5188,"td",14)(5189,"div",15)(5190,"span",16),Jx(5191," String"),Wl(5192,"br"),sg()()(),Sl(5193,"td",20)(5194,"p"),Jx(5195,"Texto."),sg()()(),Sl(5196,"tr",13)(5197,"td",14)(5198,"div",15)(5199,"span",16),Jx(5200," Upload"),Wl(5201,"br"),sg()()(),Sl(5202,"td",20)(5203,"p"),Jx(5204,"Utilizado para fazer uploads de arquivos."),sg()()()(),Sl(5205,"h4",4)(5206,"code",5),Jx(5207,"PoTimepickerModelFormat"),sg()(),Sl(5208,"div",2)(5209,"p")(5210,"em"),Jx(5211,"Enum"),sg(),Jx(5212," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),sg()(),Sl(5213,"h4",9),Jx(5214,"Propriedades"),sg(),Sl(5215,"table",10)(5216,"tr",11)(5217,"th",12),Jx(5218,"Nome"),sg(),Sl(5219,"th",12),Jx(5220,"Descri\xE7\xE3o"),sg()(),Sl(5221,"tr",13)(5222,"td",14)(5223,"div",15)(5224,"span",16),Jx(5225," HourMinute"),Wl(5226,"br"),sg()()(),Sl(5227,"td",20)(5228,"p"),Jx(5229,"Formato b\xE1sico "),Sl(5230,"code"),Jx(5231,"HH:mm"),sg(),Jx(5232," (ex: "),Sl(5233,"code"),Jx(5234,"14:30"),sg(),Jx(5235,")."),sg()()(),Sl(5236,"tr",13)(5237,"td",14)(5238,"div",15)(5239,"span",16),Jx(5240," HourMinuteSecond"),Wl(5241,"br"),sg()()(),Sl(5242,"td",20)(5243,"p"),Jx(5244,"Formato com segundos "),Sl(5245,"code"),Jx(5246,"HH:mm:ss"),sg(),Jx(5247," (ex: "),Sl(5248,"code"),Jx(5249,"14:30:00"),sg(),Jx(5250,")."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var ae=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(C(Xn),C(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,r){a&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Wl(3,"sample-po-dynamic-form-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),Wl(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),sg()()()),a&2&&(tw("p-actions",r.actions),Vp(2),tw("p-active",r.activeTab==="doc"),Vp(2),tw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[pNe,Gme,Qme,$,te,ne,oe],encapsulation:2})}return o})();var fe=[{path:"",component:ae}],re=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[pL.forChild(fe),pL]})}return o})();var rt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ar,re]})}return o})();export{rt as DocPoDynamicFormModule};