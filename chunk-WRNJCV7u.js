import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,S,d as f,aV as Xp,cP as Ife,r as r$1,b1 as ume,R as Hl,Z as ZE,bw as oN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,a$ as Qt,aB as gx,bc as Sx,W as we,av as zl,aw as uo,ax as fo,a3 as SNe,aD as Jy,aE as e_}from'./main-OS7VVRJY.js';var me=()=>({property:"name",required:true,showRequired:true}),le=o=>[o],G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,r){a&1&&Hl(0,"po-dynamic-form",0),a&2&&ZE("p-fields",oN(2,le,iN(1,me)));},dependencies:[ume],encapsulation:2,changeDetection:1})}return o})();var pe=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Dynamic Form Basic"),og(),Cl(4,"a",2),dt("click",function(){return r.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-dynamic-form-basic"),og(),Hl(23,"hr")),a&2&&(Lp(5),Fx("po-icon "+r.sampleCodeButtonIcon),Lp(),dg(" ",r.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,pe,r.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,G],encapsulation:2})}return o})();var U=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=S({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ce=["dynamicForm"],ee=(()=>{class o{poNotification=f(Xp);registerService=f(U);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:true,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:Ife.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return setTimeout(()=>{let a=this.registerService.getCity(m.value.state);this.updateDynamicFormField("city",{options:a,loading:false});},500),{value:{city:void 0},fields:[{property:"city",gridColumns:6,disabled:false,loading:true}]}}onLoadFields(m){return this.registerService.getUserDocument(m)}updateDynamicFormField(m,a){let r=this.dynamicForm?.fields??this.fields,l=r.findIndex(O=>O.property===m);l>=0&&(r[l]=r$1(r$1({},r[l]),a),this.fields=[...r]);}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register"]],viewQuery:function(a,r){if(a&1&&zl(ce,7),a&2){let l;uo(l=fo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([U])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=gx();Hl(0,"po-dynamic-form",1,0)(2,"br"),Cl(3,"div",2)(4,"po-button",3),dt("p-click",function(){Jy(l);let I=Sx(1);return r.poNotification.success("Data saved successfully!"),e_(I.form.reset())}),og()();}if(a&2){let l=Sx(1);ZE("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Lp(4),ZE("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Qt,ume],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Dynamic Form - Register"),og(),Cl(4,"a",2),dt("click",function(){return r.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-dynamic-form
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Cl(21,"label",6),qx(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-dynamic-form-register"),og(),Hl(27,"hr")),a&2&&(Lp(5),Fx("po-icon "+r.sampleCodeButtonIcon),Lp(),dg(" ",r.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Ee,r.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ee],encapsulation:2})}return o})();var K=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=S({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Se=["dynamicForm"],ie=(()=>{class o{poNotification=f(Xp);registerService=f(K);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:true,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:Ife.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:true},customActionClick:m=>{console.log("Iniciar download para o arquivo:",m.name);}}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return {value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(m.value.state),disabled:false}]}}onKeyDown(m,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(m);}onLoadFields(m){return this.registerService.getUserDocument(m)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,r){if(a&1&&zl(Se,7),a&2){let l;uo(l=fo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([K])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=gx();Hl(0,"po-dynamic-form",1,0)(2,"br"),Cl(3,"div",2)(4,"po-button",3),dt("p-click",function(){Jy(l);let I=Sx(1);return r.poNotification.success("Data saved successfully!"),e_(I.form.reset())}),og()();}if(a&2){let l=Sx(1);ZE("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Lp(4),ZE("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Qt,ume],encapsulation:2,changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Dynamic Form - Container"),og(),Cl(4,"a",2),dt("click",function(){return r.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-dynamic-form
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og(),Cl(21,"label",6),qx(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),og(),Cl(23,"pre",9),qx(24,`import { Injectable } from '@angular/core';

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
`),og()()()()(),Cl(25,"div",10),Hl(26,"sample-po-dynamic-form-container"),og(),Hl(27,"hr")),a&2&&(Lp(5),Fx("po-icon "+r.sampleCodeButtonIcon),Lp(),dg(" ",r.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ge,r.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ie],encapsulation:2})}return o})();var oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:false,decls:5251,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,r){a&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),og()(),Hl(4,"div",2),Cl(5,"h3",3),qx(6,"Componente"),og(),Cl(7,"h4",4)(8,"code",5),qx(9,"PoDynamicFormComponent"),og()(),Cl(10,"div",2)(11,"p"),qx(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),og(),Cl(13,"p"),qx(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),og()(),Cl(15,"div",6)(16,"h4",7),qx(17,"Seletor"),og(),Cl(18,"pre",8),qx(19,`<po-dynamic-form
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
`),og()(),Cl(20,"h4",9),qx(21,"Propriedades"),og(),Cl(22,"table",10)(23,"tr",11)(24,"th",12),qx(25,"Nome"),og(),Cl(26,"th",12),qx(27,"Tipo"),og(),Cl(28,"th",12),qx(29,"Padr\xE3o"),og(),Cl(30,"th",12),qx(31,"Descri\xE7\xE3o"),og()(),Cl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),qx(36," p-auto-focus"),Hl(37,"br"),og()()(),Cl(38,"td",17)(39,"code",18),qx(40,"string"),og()(),Cl(41,"td",19),qx(42,"-"),og(),Cl(43,"td",20)(44,"em")(45,"strong"),qx(46,"(opcional)"),og()(),Cl(47,"p"),qx(48,"Nome da propriedade, atribu\xEDda ao "),Cl(49,"code"),qx(50,"PoDynamicFormField.property"),og(),qx(51,", que iniciar\xE1 o campo com foco."),og()()(),Cl(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),qx(56," p-components-size"),Hl(57,"br"),og()()(),Cl(58,"td",17)(59,"code",18),qx(60,"string"),og()(),Cl(61,"td",19)(62,"p")(63,"code"),qx(64,"medium"),og()()(),Cl(65,"td",20)(66,"em")(67,"strong"),qx(68,"(opcional)"),og()(),Cl(69,"p"),qx(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),og(),Cl(71,"ul")(72,"li")(73,"code"),qx(74,"small"),og(),qx(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(76,"li")(77,"code"),qx(78,"medium"),og(),qx(79,": aplica a medida medium de cada componente."),og()(),Cl(80,"blockquote")(81,"p"),qx(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(83,"code"),qx(84,"medium"),og(),qx(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(86,"a",21),qx(87,"po-theme"),og(),qx(88,"."),og()()()(),Cl(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),qx(93," p-fields"),Hl(94,"br"),og()()(),Cl(95,"td",17)(96,"code",22),qx(97,"Array<PoDynamicFormField>"),og()(),Cl(98,"td",19)(99,"p")(100,"code"),qx(101,"[]"),og()()(),Cl(102,"td",20)(103,"p"),qx(104,"Cole\xE7\xE3o de objetos que implementam a interface "),Cl(105,"code"),qx(106,"PoDynamicFormField"),og(),qx(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),og(),Cl(108,"blockquote")(109,"p"),qx(110,"Ex: "),Cl(111,"code"),qx(112,"[ { property: 'name' } ]"),og()()(),Cl(113,"p"),qx(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),og(),Cl(115,"ul")(116,"li"),qx(117,"Caso o "),Cl(118,"em"),qx(119,"type"),og(),qx(120," informado seja "),Cl(121,"em"),qx(122,"boolean"),og(),qx(123," o componente criado ser\xE1 o "),Cl(124,"code"),qx(125,"po-switch"),og(),qx(126,"."),og(),Cl(127,"li"),qx(128,"Caso o "),Cl(129,"em"),qx(130,"type"),og(),qx(131," informado seja "),Cl(132,"em"),qx(133,"currency"),og(),qx(134," e n\xE3o seja informado um "),Cl(135,"em"),qx(136,"mask"),og(),qx(137," ou "),Cl(138,"em"),qx(139,"pattern"),og(),qx(140," o componente criado ser\xE1 o "),Cl(141,"code"),qx(142,"po-decimal"),og(),qx(143,`,
caso seja informado um `),Cl(144,"em"),qx(145,"mask"),og(),qx(146," ou "),Cl(147,"em"),qx(148,"pattern"),og(),qx(149," o componente criado ser\xE1 o "),Cl(150,"code"),qx(151,"po-input"),og(),qx(152,"."),og(),Cl(153,"li"),qx(154,"Caso o "),Cl(155,"em"),qx(156,"type"),og(),qx(157," informado seja "),Cl(158,"em"),qx(159,"number"),og(),qx(160," e n\xE3o seja informado um "),Cl(161,"em"),qx(162,"mask"),og(),qx(163," ou "),Cl(164,"em"),qx(165,"pattern"),og(),qx(166," o componente criado ser\xE1 o "),Cl(167,"code"),qx(168,"po-number"),og(),qx(169,`, caso seja
informado um `),Cl(170,"em"),qx(171,"mask"),og(),qx(172," ou "),Cl(173,"em"),qx(174,"pattern"),og(),qx(175," o componente criado ser\xE1 o "),Cl(176,"code"),qx(177,"po-input"),og(),qx(178,"."),og(),Cl(179,"li"),qx(180,"Caso a lista possua a propriedade "),Cl(181,"code"),qx(182,"options"),og(),qx(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),Cl(184,"code"),qx(185,"po-radio-group"),og(),qx(186,`
ou `),Cl(187,"code"),qx(188,"po-checkbox-group"),og(),qx(189," se informar a propriedade "),Cl(190,"code"),qx(191,"optionsMulti"),og(),qx(192,"."),og(),Cl(193,"li"),qx(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),Cl(195,"code"),qx(196,"po-select"),og(),qx(197," ou, "),Cl(198,"code"),qx(199,"po-multiselect"),og(),qx(200," se a propriedade "),Cl(201,"code"),qx(202,"optionsMulti"),og(),qx(203,`
for verdadeira.`),og(),Cl(204,"li"),qx(205,"Caso o "),Cl(206,"em"),qx(207,"type"),og(),qx(208," informado seja "),Cl(209,"em"),qx(210,"date"),og(),qx(211," ou "),Cl(212,"em"),qx(213,"datetime"),og(),qx(214," o componente criado ser\xE1 o "),Cl(215,"code"),qx(216,"po-datepicker"),og(),qx(217,"."),og(),Cl(218,"li"),qx(219,"Caso seja informado a propriedade "),Cl(220,"code"),qx(221,"optionsService"),og(),qx(222," o componente criado ser\xE1 o "),Cl(223,"code"),qx(224,"po-combo"),og(),qx(225,"."),og(),Cl(226,"li"),qx(227,"Caso o "),Cl(228,"em"),qx(229,"type"),og(),qx(230," informado seja "),Cl(231,"em"),qx(232,"time"),og(),qx(233," o componente criado ser\xE1 um "),Cl(234,"code"),qx(235,"po-input"),og(),qx(236," podendo receber um "),Cl(237,"em"),qx(238,"mask"),og(),qx(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),Cl(240,"em"),qx(241,"mask"),og(),qx(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),og(),Cl(243,"li"),qx(244,"Caso a lista possua a propriedade "),Cl(245,"code"),qx(246,"rows"),og(),qx(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),Cl(248,"code"),qx(249,"po-textarea"),og(),qx(250,", caso o valor da propriedade "),Cl(251,"code"),qx(252,"rows"),og(),qx(253," seja menor que 3 o componente criado ser\xE1 o "),Cl(254,"code"),qx(255,"po-input"),og(),qx(256,"."),og(),Cl(257,"li"),qx(258,"Caso seja informada a propriedade "),Cl(259,"code"),qx(260,"secret"),og(),qx(261," o componente criado ser\xE1 o "),Cl(262,"code"),qx(263,"po-password"),og(),qx(264,"."),og(),Cl(265,"li"),qx(266,"Caso o "),Cl(267,"em"),qx(268,"type"),og(),qx(269," informado seja "),Cl(270,"em"),qx(271,"string"),og(),qx(272," o componente criado ser\xE1 o "),Cl(273,"code"),qx(274,"po-input"),og(),qx(275,"."),Cl(276,"blockquote")(277,"p"),qx(278,"Ao alterar o valor das "),Cl(279,"code"),qx(280,"properties"),og(),qx(281,", visibilidade e/ou agrupamentos via container, os "),Cl(282,"code"),qx(283,"fields"),og(),qx(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),og()()()()()(),Cl(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),qx(289," (p-form)"),Hl(290,"br"),og()()(),Cl(291,"td",17)(292,"code",25),qx(293,"EventEmitter"),og()(),Cl(294,"td",19),qx(295,"-"),og(),Cl(296,"td",20)(297,"em")(298,"strong"),qx(299,"(opcional)"),og()(),Cl(300,"p"),qx(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),og(),Cl(302,"p"),qx(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),Cl(304,"em"),qx(305,"template reference"),og(),qx(306," e atrav\xE9s do "),Cl(307,"em"),qx(308,"output"),og(),qx(309,", veja os exemplos abaixo:"),og(),Cl(310,"blockquote")(311,"p")(312,"em"),qx(313,"template reference"),og()()(),Cl(314,"pre")(315,"code",26),qx(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),og()(),Cl(317,"blockquote")(318,"p")(319,"em"),qx(320,"Output"),og()()(),Cl(321,"pre")(322,"code",26),qx(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),og()(),Cl(324,"pre")(325,"code",27),qx(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),og()(),Cl(327,"blockquote")(328,"p"),qx(329,"Caso a propriedade "),Cl(330,"code"),qx(331,"p-group-form"),og(),qx(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),og()()()(),Cl(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),qx(337," p-group-form"),Hl(338,"br"),og()()(),Cl(339,"td",17)(340,"code",28),qx(341,"boolean"),og()(),Cl(342,"td",19),qx(343,"-"),og(),Cl(344,"td",20)(345,"em")(346,"strong"),qx(347,"(opcional)"),og()(),Cl(348,"p"),qx(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),Cl(350,"code"),qx(351,"FormControl"),og(),qx(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),og(),Cl(353,"pre")(354,"code",26),qx(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),og()()()(),Cl(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),qx(360," p-load"),Hl(361,"br"),og()()(),Cl(362,"td",17)(363,"code",18),qx(364,"string "),og(),Cl(365,"code",29),qx(366," Function"),og()(),Cl(367,"td",19),qx(368,"-"),og(),Cl(369,"td",20)(370,"em")(371,"strong"),qx(372,"(opcional)"),og()(),Cl(373,"p"),qx(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),og(),Cl(375,"p"),qx(376,"A propriedade aceita os seguintes tipos:"),og(),Cl(377,"ul")(378,"li")(379,"code"),qx(380,"string"),og(),qx(381,": "),Cl(382,"em"),qx(383,"Endpoint"),og(),qx(384," usado pelo componente para requisi\xE7\xE3o via "),Cl(385,"code"),qx(386,"POST"),og(),qx(387,"."),og(),Cl(388,"li")(389,"code"),qx(390,"function"),og(),qx(391,": M\xE9todo que ser\xE1 executado."),og()(),Cl(392,"p"),qx(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),Cl(394,"code"),qx(395,"p-value"),og(),qx(396,"."),og(),Cl(397,"p"),qx(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Cl(399,"a",30),qx(400,"PoDynamicFormLoad"),og(),qx(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),og(),Cl(402,"p"),qx(403,"Por exemplo:"),og(),Cl(404,"pre")(405,"code"),qx(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),og()(),Cl(407,"p"),qx(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Cl(409,"code"),qx(410,"bind"),og(),qx(411,", por exemplo:"),og(),Cl(412,"pre")(413,"code"),qx(414,`[p-load]="onLoadFields.bind(this)"
`),og()()()(),Cl(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),qx(419," p-validate"),Hl(420,"br"),og()()(),Cl(421,"td",17)(422,"code",18),qx(423,"string "),og(),Cl(424,"code",29),qx(425," Function"),og()(),Cl(426,"td",19),qx(427,"-"),og(),Cl(428,"td",20)(429,"em")(430,"strong"),qx(431,"(opcional)"),og()(),Cl(432,"p"),qx(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Cl(434,"strong"),qx(435,"mudan\xE7as do formul\xE1rio"),og(),qx(436,"."),og(),Cl(437,"p"),qx(438,"A propriedade aceita os seguintes tipos:"),og(),Cl(439,"ul")(440,"li")(441,"code"),qx(442,"string"),og(),qx(443,": "),Cl(444,"em"),qx(445,"Endpoint"),og(),qx(446," usado pelo componente para requisi\xE7\xE3o via "),Cl(447,"code"),qx(448,"POST"),og(),qx(449,"."),og(),Cl(450,"li")(451,"code"),qx(452,"function"),og(),qx(453,": M\xE9todo que ser\xE1 executado."),og()(),Cl(454,"p"),qx(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),Cl(456,"code"),qx(457,"PoDynamicFormFieldChanged"),og()(),Cl(458,"p"),qx(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Cl(460,"a",31),qx(461,"PoDynamicFormValidation"),og(),qx(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),og(),Cl(463,"pre")(464,"code"),qx(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),og()(),Cl(466,"p"),qx(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Cl(468,"code"),qx(469,"bind"),og(),qx(470,", por exemplo:"),og(),Cl(471,"pre")(472,"code"),qx(473,`[p-validate]="this.myFunction.bind(this)"
`),og()(),Cl(474,"blockquote")(475,"p"),qx(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),Cl(477,"code"),qx(478,"p-validate-fields"),og(),qx(479,", a propriedade "),Cl(480,"code"),qx(481,"validate"),og(),qx(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),og()()()(),Cl(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),qx(487," p-validate-fields"),Hl(488,"br"),og()()(),Cl(489,"td",17)(490,"code",32),qx(491,"Array<string>"),og()(),Cl(492,"td",19),qx(493,"-"),og(),Cl(494,"td",20)(495,"em")(496,"strong"),qx(497,"(opcional)"),og()(),Cl(498,"p"),qx(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),og()()(),Cl(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),qx(504," p-validate-on-input"),Hl(505,"br"),og()()(),Cl(506,"td",17)(507,"code",28),qx(508,"boolean"),og()(),Cl(509,"td",19),qx(510,"-"),og(),Cl(511,"td",20)(512,"em")(513,"strong"),qx(514,"(opcional)"),og()(),Cl(515,"p"),qx(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),og(),Cl(517,"p"),qx(518,"Pode ser aplicado nos seguintes componentes:"),og(),Cl(519,"ul")(520,"li"),qx(521,"po-input"),og(),Cl(522,"li"),qx(523,"po-number"),og(),Cl(524,"li"),qx(525,"po-decimal"),og(),Cl(526,"li"),qx(527,"po-textarea"),og(),Cl(528,"li"),qx(529,"po-password"),og()(),Cl(530,"p"),qx(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),Cl(532,"code"),qx(533,"p-validate-fields"),og(),qx(534,"."),og()()(),Cl(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),qx(539," p-value"),Hl(540,"br"),og()()(),Cl(541,"td",17)(542,"code",33),qx(543,"any"),og()(),Cl(544,"td",19),qx(545,"-"),og(),Cl(546,"td",20)(547,"p"),qx(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),Cl(549,"em"),qx(550,"property"),og(),qx(551,`
dos objetos contidos na propridade `),Cl(552,"code"),qx(553,"p-fields"),og(),qx(554,"."),og(),Cl(555,"p"),qx(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),og(),Cl(557,"blockquote")(558,"p"),qx(559,"Ex: "),Cl(560,"code"),qx(561,"{ name: 'po' }"),og()()()()()(),Cl(562,"h3",9),qx(563,"M\xE9todos"),og(),Cl(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),qx(570," focus "),og()()()()(),Cl(571,"tr",20)(572,"td",20)(573,"p"),qx(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),og(),Cl(575,"p"),qx(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),Cl(577,"code"),qx(578,"dynamic form"),og(),qx(579,", como por exemplo:"),og(),Cl(580,"pre")(581,"code",26),qx(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),og()(),Cl(583,"pre")(584,"code",36),qx(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),og()()()()(),Cl(586,"h5")(587,"b"),qx(588,"Par\xE2metros"),og()(),Cl(589,"table",10)(590,"tr",11)(591,"th",12),qx(592,"Nome"),og(),Cl(593,"th",12),qx(594,"Tipo"),og(),Cl(595,"th",12),qx(596,"Descri\xE7\xE3o"),og()(),Cl(597,"tr",13)(598,"td",14),qx(599," property"),og(),Cl(600,"td",17)(601,"code",37),qx(602," string "),og()(),Cl(603,"td",20)(604,"p"),qx(605,"Nome da propriedade atribu\xEDda ao "),Cl(606,"code"),qx(607,"PoDynamicFormField.property"),og(),qx(608,"."),og()()()(),Hl(609,"br"),Cl(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),qx(616," showAdditionalHelp "),og()()()()(),Cl(617,"tr",20)(618,"td",20)(619,"p"),qx(620,"M\xE9todo que exibe "),Cl(621,"code"),qx(622,"p-helper"),og(),qx(623," ou executa a a\xE7\xE3o definida em "),Cl(624,"code"),qx(625,"p-helper{eventOnClick}"),og(),qx(626," ou em "),Cl(627,"code"),qx(628,"p-additionalHelp"),og(),qx(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(630,"code"),qx(631,"keydown"),og(),qx(632,"."),og(),Cl(633,"pre")(634,"code"),qx(635,`import { PoDynamicModule } from '@po-ui/ng-components';
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
`),og()()()()(),Cl(636,"h5")(637,"b"),qx(638,"Par\xE2metros"),og()(),Cl(639,"table",10)(640,"tr",11)(641,"th",12),qx(642,"Nome"),og(),Cl(643,"th",12),qx(644,"Tipo"),og(),Cl(645,"th",12),qx(646,"Descri\xE7\xE3o"),og()(),Cl(647,"tr",13)(648,"td",14),qx(649," property"),og(),Cl(650,"td",17)(651,"code",37),qx(652," string "),og()(),Cl(653,"td",20)(654,"p"),qx(655,"Identificador da coluna."),og()()()(),Hl(656,"br"),Cl(657,"h3"),qx(658,"Interfaces"),og(),Cl(659,"h4",38)(660,"code",5),qx(661,"PoDynamicFormField"),og()(),Cl(662,"div",2)(663,"p"),qx(664," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),og()(),Cl(665,"h4",9),qx(666,"Propriedades"),og(),Cl(667,"table",10)(668,"tr",11)(669,"th",12),qx(670,"Nome"),og(),Cl(671,"th",12),qx(672,"Tipo"),og(),Cl(673,"th",12),qx(674,"Descri\xE7\xE3o"),og()(),Cl(675,"tr",13)(676,"td",14)(677,"div",15)(678,"span",16),qx(679," additionalHelp"),Hl(680,"br"),og()()(),Cl(681,"td",17)(682,"code",29),qx(683,"Function"),og()(),Cl(684,"td",20)(685,"em")(686,"strong"),qx(687,"(opcional)"),og()(),Cl(688,"p"),qx(689,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(690,"blockquote")(691,"p"),qx(692,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Cl(693,"tr",13)(694,"td",14)(695,"div",15)(696,"span",16),qx(697," additionalHelpTooltip"),Hl(698,"br"),og()()(),Cl(699,"td",17)(700,"code",18),qx(701,"string"),og()(),Cl(702,"td",20)(703,"em")(704,"strong"),qx(705,"(opcional)"),og()(),Cl(706,"p"),qx(707,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(708,"code"),qx(709,"po-helper"),og(),qx(710,`.
`),Cl(711,"strong"),qx(712,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(713,"blockquote")(714,"p"),qx(715,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),og()()()(),Cl(716,"tr",13)(717,"td",14)(718,"div",15)(719,"span",16),qx(720," advancedFilters"),Hl(721,"br"),og()()(),Cl(722,"td",17)(723,"code",39),qx(724,"Array<PoLookupAdvancedFilter>"),og()(),Cl(725,"td",20)(726,"em")(727,"strong"),qx(728,"(opcional)"),og()(),Cl(729,"p"),qx(730,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),og(),Cl(731,"blockquote")(732,"p"),qx(733,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),og()(),Cl(734,"p"),qx(735,"Exemplo de URL com busca avan\xE7ada:"),og(),Cl(736,"p")(737,"code"),qx(738,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),og()(),Cl(739,"p"),qx(740,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),og(),Cl(741,"p")(742,"code"),qx(743,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),og()()()(),Cl(744,"tr",13)(745,"td",14)(746,"div",15)(747,"span",16),qx(748," appendBox"),Hl(749,"br"),og()()(),Cl(750,"td",17)(751,"code",28),qx(752,"boolean"),og()(),Cl(753,"td",20)(754,"em")(755,"strong"),qx(756,"(opcional)"),og()(),Cl(757,"p"),qx(758,"Define que o "),Cl(759,"code"),qx(760,"listbox"),og(),qx(761," e/ou popover ("),Cl(762,"code"),qx(763,"p-helper"),og(),qx(764," e/ou "),Cl(765,"code"),qx(766,"p-error-limit"),og(),qx(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),og(),Cl(768,"blockquote")(769,"p"),qx(770,"Quando utilizado com "),Cl(771,"code"),qx(772,"p-helper"),og(),qx(773,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(774,"tr",13)(775,"td",14)(776,"div",15)(777,"span",16),qx(778," autoHeight"),Hl(779,"br"),og()()(),Cl(780,"td",17)(781,"code",28),qx(782,"boolean"),og()(),Cl(783,"td",20)(784,"em")(785,"strong"),qx(786,"(opcional)"),og()(),Cl(787,"p"),qx(788,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),og(),Cl(789,"p")(790,"strong"),qx(791,"Componentes compat\xEDveis:"),og(),Cl(792,"code"),qx(793,"po-multiselect"),og(),qx(794,", "),Cl(795,"code"),qx(796,"po-lookup"),og(),qx(797,"."),og()()(),Cl(798,"tr",13)(799,"td",14)(800,"div",15)(801,"span",16),qx(802," autoUpload"),Hl(803,"br"),og()()(),Cl(804,"td",17)(805,"code",28),qx(806,"boolean"),og()(),Cl(807,"td",20)(808,"em")(809,"strong"),qx(810,"(opcional)"),og()(),Cl(811,"p"),qx(812,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),og(),Cl(813,"p")(814,"strong"),qx(815,"Componente compat\xEDvel"),og(),qx(816,": "),Cl(817,"code"),qx(818,"po-upload"),og()()()(),Cl(819,"tr",13)(820,"td",14)(821,"div",15)(822,"span",16),qx(823," booleanFalse"),Hl(824,"br"),og()()(),Cl(825,"td",17)(826,"code",18),qx(827,"string"),og()(),Cl(828,"td",20)(829,"em")(830,"strong"),qx(831,"(opcional)"),og()(),Cl(832,"p"),qx(833,"Texto exibido quando o valor do componente for "),Cl(834,"em"),qx(835,"false"),og(),qx(836,"."),og()()(),Cl(837,"tr",13)(838,"td",14)(839,"div",15)(840,"span",16),qx(841," booleanTrue"),Hl(842,"br"),og()()(),Cl(843,"td",17)(844,"code",18),qx(845,"string"),og()(),Cl(846,"td",20)(847,"em")(848,"strong"),qx(849,"(opcional)"),og()(),Cl(850,"p"),qx(851,"Texto exibido quando o valor do componente for "),Cl(852,"em"),qx(853,"true"),og(),qx(854,"."),og()()(),Cl(855,"tr",13)(856,"td",14)(857,"div",15)(858,"span",16),qx(859," changeOnEnter"),Hl(860,"br"),og()()(),Cl(861,"td",17)(862,"code",28),qx(863,"boolean"),og()(),Cl(864,"td",20)(865,"em")(866,"strong"),qx(867,"(opcional)"),og()(),Cl(868,"p"),qx(869,"Indica que o evento "),Cl(870,"code"),qx(871,"p-change"),og(),qx(872,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),Cl(873,"code"),qx(874,"po-combo"),og(),qx(875,"."),og()()(),Cl(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),qx(880," changeVisibleColumns"),Hl(881,"br"),og()()(),Cl(882,"td",17)(883,"code",29),qx(884,"Function"),og()(),Cl(885,"td",20)(886,"em")(887,"strong"),qx(888,"(opcional)"),og()(),Cl(889,"p"),qx(890,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),og(),Cl(891,"p"),qx(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Cl(893,"p")(894,"strong"),qx(895,"Componente compat\xEDvel"),og(),qx(896,": "),Cl(897,"code"),qx(898,"po-lookup"),og()()()(),Cl(899,"tr",13)(900,"td",14)(901,"div",15)(902,"span",16),qx(903," clean"),Hl(904,"br"),og()()(),Cl(905,"td",17)(906,"code",28),qx(907,"boolean"),og()(),Cl(908,"td",20)(909,"em")(910,"strong"),qx(911,"(opcional)"),og()(),Cl(912,"p"),qx(913,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og(),Cl(914,"p")(915,"strong"),qx(916,"Componentes compat\xEDveis:"),og(),Cl(917,"code"),qx(918,"po-datepicker"),og(),qx(919,", "),Cl(920,"code"),qx(921,"po-datepicker-range"),og(),qx(922,", "),Cl(923,"code"),qx(924,"po-input"),og(),qx(925,", "),Cl(926,"code"),qx(927,"po-number"),og(),qx(928,", "),Cl(929,"code"),qx(930,"po-decimal"),og(),qx(931,`,
`),Cl(932,"code"),qx(933,"po-combo"),og(),qx(934,", "),Cl(935,"code"),qx(936,"po-lookup"),og(),qx(937,", "),Cl(938,"code"),qx(939,"po-password"),og(),qx(940,", "),Cl(941,"code"),qx(942,"po-timepicker"),og(),qx(943,"."),og()()(),Cl(944,"tr",13)(945,"td",14)(946,"div",15)(947,"span",16),qx(948," columnRestoreManager"),Hl(949,"br"),og()()(),Cl(950,"td",17)(951,"code",29),qx(952,"Function"),og()(),Cl(953,"td",20)(954,"em")(955,"strong"),qx(956,"(opcional)"),og()(),Cl(957,"p"),qx(958,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),og(),Cl(959,"p"),qx(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),og(),Cl(961,"p")(962,"strong"),qx(963,"Componente compat\xEDvel"),og(),qx(964,": "),Cl(965,"code"),qx(966,"po-lookup"),og()()()(),Cl(967,"tr",13)(968,"td",14)(969,"div",15)(970,"span",16),qx(971," columns"),Hl(972,"br"),og()()(),Cl(973,"td",17)(974,"code",40),qx(975,"Array<PoLookupColumn> "),og(),Cl(976,"code",41),qx(977," number"),og()(),Cl(978,"td",20)(979,"em")(980,"strong"),qx(981,"(opcional)"),og()(),Cl(982,"p"),qx(983,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),Cl(984,"code"),qx(985,"searchService"),og(),qx(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Cl(987,"a",42)(988,"code"),qx(989,"PoLookupColumn"),og()(),qx(990,"."),og(),Cl(991,"blockquote")(992,"p"),qx(993,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),Cl(994,"em"),qx(995,"label"),og(),qx(996," e "),Cl(997,"em"),qx(998,"value"),og(),qx(999,` para valores
de tela e do model respectivamente.`),og()(),Cl(1e3,"p")(1001,"strong"),qx(1002,"Componentes compat\xEDveis:"),og(),Cl(1003,"code"),qx(1004,"po-radio-group"),og(),qx(1005,", "),Cl(1006,"code"),qx(1007,"po-lookup"),og(),qx(1008,", "),Cl(1009,"code"),qx(1010,"po-checkbox-group"),og(),qx(1011,"."),og()()(),Cl(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),qx(1016," compactLabel"),Hl(1017,"br"),og()()(),Cl(1018,"td",17)(1019,"code",28),qx(1020,"boolean"),og()(),Cl(1021,"td",20)(1022,"em")(1023,"strong"),qx(1024,"(opcional)"),og()(),Cl(1025,"p"),qx(1026,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(1027,"p"),qx(1028,"Quando habilitado ("),Cl(1029,"code"),qx(1030,"true"),og(),qx(1031,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(1032,"ul")(1033,"li")(1034,"code"),qx(1035,"po-label"),og()(),Cl(1036,"li")(1037,"code"),qx(1038,"p-requirement (showRequired)"),og()(),Cl(1039,"li")(1040,"code"),qx(1041,"po-helper"),og()()(),Cl(1042,"p"),qx(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(1044,"p"),qx(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(1046,"ul")(1047,"li")(1048,"code"),qx(1049,"--field-container-title-justify"),og()(),Cl(1050,"li")(1051,"code"),qx(1052,"--field-container-title-flex"),og()()(),Cl(1053,"p"),qx(1054,"Exemplo:"),og(),Cl(1055,"pre")(1056,"code"),qx(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(1058,"p"),qx(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(1060,"tr",13)(1061,"td",14)(1062,"div",15)(1063,"span",16),qx(1064," container"),Hl(1065,"br"),og()()(),Cl(1066,"td",17)(1067,"code",18),qx(1068,"string"),og()(),Cl(1069,"td",20)(1070,"em")(1071,"strong"),qx(1072,"(opcional)"),og()(),Cl(1073,"p"),qx(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),og(),Cl(1075,"p"),qx(1076,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),og()()(),Cl(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),qx(1081," customAction"),Hl(1082,"br"),og()()(),Cl(1083,"td",17)(1084,"code",43),qx(1085,"PoProgressAction"),og()(),Cl(1086,"td",20)(1087,"em")(1088,"strong"),qx(1089,"(opcional)"),og()(),Cl(1090,"p"),qx(1091,"Define uma a\xE7\xE3o personalizada no componente "),Cl(1092,"code"),qx(1093,"po-upload"),og(),qx(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),og(),Cl(1095,"p")(1096,"strong"),qx(1097,"Componente compat\xEDvel"),og(),qx(1098,": "),Cl(1099,"code"),qx(1100,"po-upload"),og(),qx(1101,","),og(),Cl(1102,"p")(1103,"strong"),qx(1104,"Exemplo de configura\xE7\xE3o"),og(),qx(1105,":"),og(),Cl(1106,"pre")(1107,"code",44),qx(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),og()()()(),Cl(1109,"tr",13)(1110,"td",14)(1111,"div",15)(1112,"span",16),qx(1113," customActionClick"),Hl(1114,"br"),og()()(),Cl(1115,"td",17)(1116,"code",45),qx(1117,"(file: PoUploadFile) => void"),og()(),Cl(1118,"td",20)(1119,"em")(1120,"strong"),qx(1121,"(opcional)"),og()(),Cl(1122,"p"),qx(1123,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Cl(1124,"code"),qx(1125,"p-custom-action"),og(),qx(1126,"."),og(),Cl(1127,"p")(1128,"strong"),qx(1129,"Componente compat\xEDvel"),og(),qx(1130,": "),Cl(1131,"code"),qx(1132,"po-upload"),og(),qx(1133,","),og(),Cl(1134,"p"),qx(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),og(),Cl(1136,"p")(1137,"strong"),qx(1138,"Par\xE2metro do evento"),og(),qx(1139,":"),og(),Cl(1140,"ul")(1141,"li")(1142,"code"),qx(1143,"file"),og(),qx(1144,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),Cl(1145,"code"),qx(1146,"PoUploadFile"),og(),qx(1147," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),og()(),Cl(1148,"p")(1149,"strong"),qx(1150,"Exemplo de uso"),og(),qx(1151,":"),og(),Cl(1152,"pre")(1153,"code",44),qx(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),og()()()(),Cl(1155,"tr",13)(1156,"td",14)(1157,"div",15)(1158,"span",16),qx(1159," debounceTime"),Hl(1160,"br"),og()()(),Cl(1161,"td",17)(1162,"code",41),qx(1163,"number"),og()(),Cl(1164,"td",20)(1165,"em")(1166,"strong"),qx(1167,"(opcional)"),og()(),Cl(1168,"p"),qx(1169,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Cl(1170,"code"),qx(1171,"p-filter-service"),og(),qx(1172,")."),og(),Cl(1173,"p")(1174,"strong"),qx(1175,"Componentes compat\xEDveis:"),og(),Cl(1176,"code"),qx(1177,"po-combo"),og(),qx(1178,", "),Cl(1179,"code"),qx(1180,"po-multiselect"),og(),qx(1181,"."),og()()(),Cl(1182,"tr",13)(1183,"td",14)(1184,"div",15)(1185,"span",16),qx(1186," decimalsLength"),Hl(1187,"br"),og()()(),Cl(1188,"td",17)(1189,"code",41),qx(1190,"number"),og()(),Cl(1191,"td",20)(1192,"em")(1193,"strong"),qx(1194,"(opcional)"),og()(),Cl(1195,"p"),qx(1196,"Quantidade m\xE1xima de casas decimais."),og(),Cl(1197,"blockquote")(1198,"p"),qx(1199,"Esta propriedade s\xF3 pode ser utilizada quando o "),Cl(1200,"code"),qx(1201,"type"),og(),qx(1202," for "),Cl(1203,"em"),qx(1204,"currency"),og(),qx(1205," ou "),Cl(1206,"em"),qx(1207,"decimal"),og(),qx(1208,"."),og()()()(),Cl(1209,"tr",13)(1210,"td",14)(1211,"div",15)(1212,"span",16),qx(1213," directory"),Hl(1214,"br"),og()()(),Cl(1215,"td",17)(1216,"code",28),qx(1217,"boolean"),og()(),Cl(1218,"td",20)(1219,"em")(1220,"strong"),qx(1221,"(opcional)"),og()(),Cl(1222,"p"),qx(1223,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),og(),Cl(1224,"blockquote")(1225,"p"),qx(1226,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),og()(),Cl(1227,"blockquote")(1228,"p"),qx(1229,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Cl(1230,"strong"),qx(1231,"Internet Explorer"),og(),qx(1232,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),og()(),Cl(1233,"p")(1234,"strong"),qx(1235,"Componente compat\xEDvel"),og(),qx(1236,": "),Cl(1237,"code"),qx(1238,"po-upload"),og()()()(),Cl(1239,"tr",13)(1240,"td",14)(1241,"div",15)(1242,"span",16),qx(1243," disabled"),Hl(1244,"br"),og()()(),Cl(1245,"td",17)(1246,"code",28),qx(1247,"boolean"),og()(),Cl(1248,"td",20)(1249,"em")(1250,"strong"),qx(1251,"(opcional)"),og()(),Cl(1252,"p"),qx(1253,"Desabilita o campo caso informar o valor "),Cl(1254,"em"),qx(1255,"true"),og(),qx(1256,"."),og()()(),Cl(1257,"tr",13)(1258,"td",14)(1259,"div",15)(1260,"span",16),qx(1261," disabledInitFilter"),Hl(1262,"br"),og()()(),Cl(1263,"td",17)(1264,"code",28),qx(1265,"boolean"),og()(),Cl(1266,"td",20)(1267,"em")(1268,"strong"),qx(1269,"(opcional)"),og()(),Cl(1270,"p"),qx(1271,"Desabilita o filtro inicial no servi\xE7o do "),Cl(1272,"code"),qx(1273,"po-combo"),og(),qx(1274,", que \xE9 executado no primeiro clique no campo."),og()()(),Cl(1275,"tr",13)(1276,"td",14)(1277,"div",15)(1278,"span",16),qx(1279," disabledTabFilter"),Hl(1280,"br"),og()()(),Cl(1281,"td",17)(1282,"code",28),qx(1283,"boolean"),og()(),Cl(1284,"td",20)(1285,"em")(1286,"strong"),qx(1287,"(opcional)"),og()(),Cl(1288,"p"),qx(1289,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),Cl(1290,"code"),qx(1291,"po-combo"),og(),qx(1292,"."),og()()(),Cl(1293,"tr",13)(1294,"td",14)(1295,"div",15)(1296,"span",16),qx(1297," divider"),Hl(1298,"br"),og()()(),Cl(1299,"td",17)(1300,"code",18),qx(1301,"string"),og()(),Cl(1302,"td",20)(1303,"em")(1304,"strong"),qx(1305,"(opcional)"),og()(),Cl(1306,"p"),qx(1307,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),og()()(),Cl(1308,"tr",13)(1309,"td",14)(1310,"div",15)(1311,"span",16),qx(1312," dragDrop"),Hl(1313,"br"),og()()(),Cl(1314,"td",17)(1315,"code",28),qx(1316,"boolean"),og()(),Cl(1317,"td",20)(1318,"em")(1319,"strong"),qx(1320,"(opcional)"),og()(),Cl(1321,"p"),qx(1322,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),og(),Cl(1323,"blockquote")(1324,"p"),qx(1325,"Recomendamos utilizar apenas um "),Cl(1326,"code"),qx(1327,"po-upload"),og(),qx(1328," com esta funcionalidade por tela."),og()(),Cl(1329,"p")(1330,"strong"),qx(1331,"Componente compat\xEDvel"),og(),qx(1332,": "),Cl(1333,"code"),qx(1334,"po-upload"),og()()()(),Cl(1335,"tr",13)(1336,"td",14)(1337,"div",15)(1338,"span",16),qx(1339," dragDropHeight"),Hl(1340,"br"),og()()(),Cl(1341,"td",17)(1342,"code",41),qx(1343,"number"),og()(),Cl(1344,"td",20)(1345,"em")(1346,"strong"),qx(1347,"(opcional)"),og()(),Cl(1348,"p"),qx(1349,"Define em "),Cl(1350,"em"),qx(1351,"pixels"),og(),qx(1352," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Cl(1353,"code"),qx(1354,"160px"),og(),qx(1355,"."),og(),Cl(1356,"blockquote")(1357,"p"),qx(1358,"Esta propriedade funciona somente se a propriedade "),Cl(1359,"code"),qx(1360,"p-drag-drop"),og(),qx(1361," estiver habilitada."),og()(),Cl(1362,"p")(1363,"strong"),qx(1364,"Componente compat\xEDvel"),og(),qx(1365,": "),Cl(1366,"code"),qx(1367,"po-upload"),og()()()(),Cl(1368,"tr",13)(1369,"td",14)(1370,"div",15)(1371,"span",16),qx(1372," errorAsyncFunction"),Hl(1373,"br"),og()()(),Cl(1374,"td",17)(1375,"code",46),qx(1376,"(value) => Observable<boolean>"),og()(),Cl(1377,"td",20)(1378,"em")(1379,"strong"),qx(1380,"(opcional)"),og()(),Cl(1381,"p"),qx(1382,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Cl(1383,"code"),qx(1384,"change"),og(),qx(1385," ou "),Cl(1386,"code"),qx(1387,"change-model"),og(),qx(1388,", dependendo do valor da propriedade "),Cl(1389,"code"),qx(1390,"triggerMode"),og(),qx(1391,"."),og(),Cl(1392,"blockquote")(1393,"p"),qx(1394,"Retorna "),Cl(1395,"code"),qx(1396,"Observable com o valor true"),og(),qx(1397," para sinalizar o erro "),Cl(1398,"code"),qx(1399,"false"),og(),qx(1400," para indicar que n\xE3o h\xE1 erro."),og()(),Cl(1401,"p")(1402,"strong"),qx(1403,"Componente compat\xEDvel"),og(),qx(1404,": "),Cl(1405,"code"),qx(1406,"po-datepicker"),og()()()(),Cl(1407,"tr",13)(1408,"td",14)(1409,"div",15)(1410,"span",16),qx(1411," errorAsyncProperties"),Hl(1412,"br"),og()()(),Cl(1413,"td",17)(1414,"code",47),qx(1415,"ErrorAsyncProperties"),og()(),Cl(1416,"td",20)(1417,"em")(1418,"strong"),qx(1419,"(opcional)"),og()(),Cl(1420,"p"),qx(1421,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),og(),Cl(1422,"p")(1423,"strong"),qx(1424,"Componentes compat\xEDveis:"),og(),Cl(1425,"code"),qx(1426,"po-input"),og(),qx(1427,", "),Cl(1428,"code"),qx(1429,"po-number"),og(),qx(1430,", "),Cl(1431,"code"),qx(1432,"po-decimal"),og(),qx(1433,", "),Cl(1434,"code"),qx(1435,"po-password"),og(),qx(1436,"."),og()()(),Cl(1437,"tr",13)(1438,"td",14)(1439,"div",15)(1440,"span",16),qx(1441," errorLimit"),Hl(1442,"br"),og()()(),Cl(1443,"td",17)(1444,"code",28),qx(1445,"boolean"),og()(),Cl(1446,"td",20)(1447,"em")(1448,"strong"),qx(1449,"(opcional)"),og()(),Cl(1450,"p"),qx(1451,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(1452,"blockquote")(1453,"p"),qx(1454,"Caso essa propriedade seja definida como "),Cl(1455,"code"),qx(1456,"true"),og(),qx(1457,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()(),Cl(1458,"p")(1459,"strong"),qx(1460,"Componentes compat\xEDveis:"),og(),Cl(1461,"code"),qx(1462,"po-checkbox-group"),og(),qx(1463,", "),Cl(1464,"code"),qx(1465,"po-combo"),og(),qx(1466,", "),Cl(1467,"code"),qx(1468,"po-datepicker"),og(),qx(1469,", "),Cl(1470,"code"),qx(1471,"po-datepicker-range"),og(),qx(1472,", "),Cl(1473,"code"),qx(1474,"po-decimal"),og(),qx(1475,", "),Cl(1476,"code"),qx(1477,"po-input"),og(),qx(1478,", "),Cl(1479,"code"),qx(1480,"po-lookup"),og(),qx(1481,", "),Cl(1482,"code"),qx(1483,"po-multiselect"),og(),qx(1484,", "),Cl(1485,"code"),qx(1486,"po-number"),og(),qx(1487,", "),Cl(1488,"code"),qx(1489,"po-password"),og(),qx(1490,", "),Cl(1491,"code"),qx(1492,"po-radio-group"),og(),qx(1493,", "),Cl(1494,"code"),qx(1495,"po-select"),og(),qx(1496,`,
`),Cl(1497,"code"),qx(1498,"po-switch"),og(),qx(1499,", "),Cl(1500,"code"),qx(1501,"po-textarea"),og(),qx(1502,", "),Cl(1503,"code"),qx(1504,"po-timepicker"),og(),qx(1505,"."),og()()(),Cl(1506,"tr",13)(1507,"td",14)(1508,"div",15)(1509,"span",16),qx(1510," errorMessage"),Hl(1511,"br"),og()()(),Cl(1512,"td",17)(1513,"code",18),qx(1514,"string"),og()(),Cl(1515,"td",20)(1516,"em")(1517,"strong"),qx(1518,"(opcional)"),og()(),Cl(1519,"p"),qx(1520,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),og(),Cl(1521,"p"),qx(1522,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),og(),Cl(1523,"ul")(1524,"li"),qx(1525,"pattern;"),og(),Cl(1526,"li"),qx(1527,"minValue;"),og(),Cl(1528,"li"),qx(1529,"maxValue;"),og(),Cl(1530,"li"),qx(1531,"required;"),og()(),Cl(1532,"blockquote")(1533,"p"),qx(1534,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Cl(1535,"code"),qx(1536,"po-datepicker"),og(),qx(1537,", "),Cl(1538,"code"),qx(1539,"po-input"),og(),qx(1540,", "),Cl(1541,"code"),qx(1542,"po-number"),og(),qx(1543,", "),Cl(1544,"code"),qx(1545,"po-decimal"),og(),qx(1546,", "),Cl(1547,"code"),qx(1548,"po-password"),og(),qx(1549,", "),Cl(1550,"code"),qx(1551,"po-timepicker"),og(),qx(1552,`, \xE9 necess\xE1rio que a propriedade
`),Cl(1553,"code"),qx(1554,"requiredFieldErrorMessage"),og(),qx(1555," esteja como "),Cl(1556,"code"),qx(1557,"true"),og(),qx(1558,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Cl(1559,"code"),qx(1560,"po-datepicker-range"),og(),qx(1561,", "),Cl(1562,"code"),qx(1563,"po-select"),og(),qx(1564,", "),Cl(1565,"code"),qx(1566,"po-checkbox-group"),og(),qx(1567,", "),Cl(1568,"code"),qx(1569,"po-radio-group"),og(),qx(1570,", "),Cl(1571,"code"),qx(1572,"po-multiselect"),og(),qx(1573,", "),Cl(1574,"code"),qx(1575,"po-combo"),og(),qx(1576,`,
`),Cl(1577,"code"),qx(1578,"po-lookup"),og(),qx(1579," e "),Cl(1580,"code"),qx(1581,"po-textarea"),og(),qx(1582," n\xE3o \xE9 necess\xE1rio passar a propriedade "),Cl(1583,"code"),qx(1584,"requiredFieldErrorMessage"),og(),qx(1585,"."),og()(),Cl(1586,"p")(1587,"strong"),qx(1588,"Componentes compat\xEDveis:"),og(),Cl(1589,"code"),qx(1590,"po-checkbox-group"),og(),qx(1591,", "),Cl(1592,"code"),qx(1593,"po-combo"),og(),qx(1594,", "),Cl(1595,"code"),qx(1596,"po-datepicker"),og(),qx(1597,", "),Cl(1598,"code"),qx(1599,"po-datepicker-range"),og(),qx(1600,", "),Cl(1601,"code"),qx(1602,"po-decimal"),og(),qx(1603,", "),Cl(1604,"code"),qx(1605,"po-input"),og(),qx(1606,", "),Cl(1607,"code"),qx(1608,"po-lookup"),og(),qx(1609,", "),Cl(1610,"code"),qx(1611,"po-multiselect"),og(),qx(1612,", "),Cl(1613,"code"),qx(1614,"po-number"),og(),qx(1615,", "),Cl(1616,"code"),qx(1617,"po-password"),og(),qx(1618,", "),Cl(1619,"code"),qx(1620,"po-radio-group"),og(),qx(1621,", "),Cl(1622,"code"),qx(1623,"po-select"),og(),qx(1624,`,
`),Cl(1625,"code"),qx(1626,"po-switch"),og(),qx(1627,", "),Cl(1628,"code"),qx(1629,"po-textarea"),og(),qx(1630,", "),Cl(1631,"code"),qx(1632,"po-timepicker"),og(),qx(1633,"."),og()()(),Cl(1634,"tr",13)(1635,"td",14)(1636,"div",15)(1637,"span",16),qx(1638," fieldLabel"),Hl(1639,"br"),og()()(),Cl(1640,"td",17)(1641,"code",18),qx(1642,"string"),og()(),Cl(1643,"td",20)(1644,"em")(1645,"strong"),qx(1646,"(opcional)"),og()(),Cl(1647,"p"),qx(1648,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),og(),Cl(1649,"p"),qx(1650,"O valor padr\xE3o \xE9: "),Cl(1651,"code"),qx(1652,"label"),og(),qx(1653,"."),og(),Cl(1654,"blockquote")(1655,"p"),qx(1656,"Esta propriedade pode ser utilizada em conjunto com: "),Cl(1657,"code"),qx(1658,"options"),og(),qx(1659,", "),Cl(1660,"code"),qx(1661,"optionsService"),og(),qx(1662," e "),Cl(1663,"code"),qx(1664,"searchService"),og(),qx(1665,"."),og()()()(),Cl(1666,"tr",13)(1667,"td",14)(1668,"div",15)(1669,"span",16),qx(1670," fieldValue"),Hl(1671,"br"),og()()(),Cl(1672,"td",17)(1673,"code",18),qx(1674,"string"),og()(),Cl(1675,"td",20)(1676,"em")(1677,"strong"),qx(1678,"(opcional)"),og()(),Cl(1679,"p"),qx(1680,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),og(),Cl(1681,"p"),qx(1682,"O valor padr\xE3o \xE9: "),Cl(1683,"code"),qx(1684,"value"),og(),qx(1685,"."),og(),Cl(1686,"blockquote")(1687,"p"),qx(1688,"Esta propriedade pode ser utilizada em conjunto com: "),Cl(1689,"code"),qx(1690,"options"),og(),qx(1691,", "),Cl(1692,"code"),qx(1693,"optionsService"),og(),qx(1694," e "),Cl(1695,"code"),qx(1696,"searchService"),og(),qx(1697,"."),og()()()(),Cl(1698,"tr",13)(1699,"td",14)(1700,"div",15)(1701,"span",16),qx(1702," filterMinlength"),Hl(1703,"br"),og()()(),Cl(1704,"td",17)(1705,"code",41),qx(1706,"number"),og()(),Cl(1707,"td",20)(1708,"em")(1709,"strong"),qx(1710,"(opcional)"),og()(),Cl(1711,"p"),qx(1712,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),Cl(1713,"code"),qx(1714,"po-combo"),og(),qx(1715,"."),og()()(),Cl(1716,"tr",13)(1717,"td",14)(1718,"div",15)(1719,"span",16),qx(1720," filterMode"),Hl(1721,"br"),og()()(),Cl(1722,"td",17)(1723,"code",48),qx(1724,"PoMultiselectFilterMode"),og()(),Cl(1725,"td",20)(1726,"em")(1727,"strong"),qx(1728,"(opcional)"),og()(),Cl(1729,"p"),qx(1730,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Cl(1731,"code"),qx(1732,"startsWith"),og(),qx(1733,", "),Cl(1734,"code"),qx(1735,"contains"),og(),qx(1736," ou "),Cl(1737,"code"),qx(1738,"endsWith"),og(),qx(1739,"."),og(),Cl(1740,"blockquote")(1741,"p"),qx(1742,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),og()(),Cl(1743,"p")(1744,"strong"),qx(1745,"Componente compat\xEDvel:"),og(),Cl(1746,"code"),qx(1747,"po-multiselect"),og(),qx(1748,"."),og()()(),Cl(1749,"tr",13)(1750,"td",14)(1751,"div",15)(1752,"span",16),qx(1753," forceBooleanComponentType"),Hl(1754,"br"),og()()(),Cl(1755,"td",17)(1756,"code",49),qx(1757,"ForceBooleanComponentEnum"),og()(),Cl(1758,"td",20)(1759,"em")(1760,"strong"),qx(1761,"(opcional)"),og()(),Cl(1762,"p"),qx(1763,"Valores aceitos:"),og(),Cl(1764,"ul")(1765,"li"),qx(1766,"ForceBooleanComponentEnum.switch"),og(),Cl(1767,"li"),qx(1768,"ForceBooleanComponentEnum.checkbox"),og()()()(),Cl(1769,"tr",13)(1770,"td",14)(1771,"div",15)(1772,"span",16),qx(1773," forceOptionsComponentType"),Hl(1774,"br"),og()()(),Cl(1775,"td",17)(1776,"code",50),qx(1777,"ForceOptionComponentEnum"),og()(),Cl(1778,"td",20)(1779,"em")(1780,"strong"),qx(1781,"(opcional)"),og()(),Cl(1782,"p"),qx(1783,"pode ser utilizada em conjunto com a propriedade "),Cl(1784,"code"),qx(1785,"options"),og(),qx(1786," for\xE7ando o componente a renderizar um "),Cl(1787,"code"),qx(1788,"po-select"),og(),qx(1789," ou "),Cl(1790,"code"),qx(1791,"po-radio-group"),og(),qx(1792,"."),og(),Cl(1793,"p"),qx(1794,"Valores aceitos:"),og(),Cl(1795,"ul")(1796,"li"),qx(1797,"ForceOptionComponentEnum.radioGroup"),og(),Cl(1798,"li"),qx(1799,"ForceOptionComponentEnum.select"),og()(),Cl(1800,"blockquote")(1801,"p"),qx(1802,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),Cl(1803,"code"),qx(1804,"optionsMulti"),og(),qx(1805," e "),Cl(1806,"code"),qx(1807,"optionsService"),og(),qx(1808,"."),og()()()(),Cl(1809,"tr",13)(1810,"td",14)(1811,"div",15)(1812,"span",16),qx(1813," formField"),Hl(1814,"br"),og()()(),Cl(1815,"td",17)(1816,"code",18),qx(1817,"string"),og()(),Cl(1818,"td",20)(1819,"em")(1820,"strong"),qx(1821,"(opcional)"),og()(),Cl(1822,"p"),qx(1823,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Cl(1824,"code"),qx(1825,"url"),og(),qx(1826,"."),og(),Cl(1827,"blockquote")(1828,"p"),qx(1829,"O valor default \xE9 "),Cl(1830,"code"),qx(1831,"files"),og()()(),Cl(1832,"p")(1833,"strong"),qx(1834,"Componente compat\xEDvel"),og(),qx(1835,": "),Cl(1836,"code"),qx(1837,"po-upload"),og()()()(),Cl(1838,"tr",13)(1839,"td",14)(1840,"div",15)(1841,"span",16),qx(1842," format"),Hl(1843,"br"),og()()(),Cl(1844,"td",17)(1845,"code",18),qx(1846,"string "),og(),Cl(1847,"code",32),qx(1848," Array<string>"),og()(),Cl(1849,"td",20)(1850,"em")(1851,"strong"),qx(1852,"(opcional)"),og()(),Cl(1853,"p"),qx(1854,"Formato de exibi\xE7\xE3o no campo."),og(),Cl(1855,"p"),qx(1856,"Ao utilizar esta propriedade com o "),Cl(1857,"code"),qx(1858,"type"),og(),Cl(1859,"em"),qx(1860,"PoDynamicFieldType.Date"),og(),qx(1861," ou "),Cl(1862,"em"),qx(1863,"PoDynamicFieldType.DateTime"),og(),qx(1864,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),og(),Cl(1865,"p"),qx(1866,"Valores v\xE1lidos:"),og(),Cl(1867,"ul")(1868,"li"),qx(1869,"dd/mm/yyyy"),og(),Cl(1870,"li"),qx(1871,"mm/dd/yyyy"),og(),Cl(1872,"li"),qx(1873,"yyyy/mm/dd"),og()(),Cl(1874,"p"),qx(1875,"Ao utilizar com o "),Cl(1876,"code"),qx(1877,"type"),og(),Cl(1878,"em"),qx(1879,"PoDynamicFieldType.Time"),og(),qx(1880,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),og(),Cl(1881,"p"),qx(1882,"Valores v\xE1lidos:"),og(),Cl(1883,"ul")(1884,"li")(1885,"code"),qx(1886,"24"),og(),qx(1887,": formato de 24 horas (padr\xE3o)"),og(),Cl(1888,"li")(1889,"code"),qx(1890,"12"),og(),qx(1891,": formato de 12 horas com indicador AM/PM"),og()(),Cl(1892,"p"),qx(1893,"Tamb\xE9m pode-se utilizar em conjunto com "),Cl(1894,"code"),qx(1895,"searchService"),og(),qx(1896,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),og(),Cl(1897,"p")(1898,"strong"),qx(1899,"Componentes compat\xEDveis:"),og(),Cl(1900,"code"),qx(1901,"po-datepicker"),og(),qx(1902,", "),Cl(1903,"code"),qx(1904,"po-timepicker"),og(),qx(1905,", "),Cl(1906,"code"),qx(1907,"po-lookup"),og(),qx(1908,"."),og()()(),Cl(1909,"tr",13)(1910,"td",14)(1911,"div",15)(1912,"span",16),qx(1913," formatModel"),Hl(1914,"br"),og()()(),Cl(1915,"td",17)(1916,"code",28),qx(1917,"boolean"),og()(),Cl(1918,"td",20)(1919,"em")(1920,"strong"),qx(1921,"(opcional)"),og()(),Cl(1922,"p"),qx(1923,"Indica se o "),Cl(1924,"code"),qx(1925,"model"),og(),qx(1926," receber\xE1 o valor formatado pelas propriedades "),Cl(1927,"code"),qx(1928,"p-label-on"),og(),qx(1929," e "),Cl(1930,"code"),qx(1931,"p-label-off"),og(),qx(1932,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),og(),Cl(1933,"p"),qx(1934,"O valor padr\xE3o \xE9: "),Cl(1935,"code"),qx(1936,"false"),og(),qx(1937,"."),og(),Cl(1938,"blockquote")(1939,"p"),qx(1940,"Esta propriedade est\xE1 disponivel apenas para o "),Cl(1941,"code"),qx(1942,"swicth"),og(),qx(1943,"."),og()()()(),Cl(1944,"tr",13)(1945,"td",14)(1946,"div",15)(1947,"span",16),qx(1948," formatTime"),Hl(1949,"br"),og()()(),Cl(1950,"td",17)(1951,"code",18),qx(1952,"string"),og()(),Cl(1953,"td",20)(1954,"em")(1955,"strong"),qx(1956,"(opcional)"),og()(),Cl(1957,"p"),qx(1958,"Define o formato de exibi\xE7\xE3o do timer ("),Cl(1959,"code"),qx(1960,"'12'"),og(),qx(1961," ou "),Cl(1962,"code"),qx(1963,"'24'"),og(),qx(1964,")."),og(),Cl(1965,"p")(1966,"strong"),qx(1967,"Componente compat\xEDvel:"),og(),Cl(1968,"code"),qx(1969,"po-datetimepicker"),og(),qx(1970,", "),Cl(1971,"code"),qx(1972,"po-timepicker"),og()()()(),Cl(1973,"tr",13)(1974,"td",14)(1975,"div",15)(1976,"span",16),qx(1977," gridColumns"),Hl(1978,"br"),og()()(),Cl(1979,"td",17)(1980,"code",41),qx(1981,"number"),og()(),Cl(1982,"td",20)(1983,"em")(1984,"strong"),qx(1985,"(opcional)"),og()(),Cl(1986,"p"),qx(1987,"Tamanho de exibi\xE7\xE3o do campo em telas."),og(),Cl(1988,"p"),qx(1989,"Deve ser usado o sistema de "),Cl(1990,"strong"),qx(1991,"grid"),og(),qx(1992," do PO (1 ... 12 colunas)."),og(),Cl(1993,"blockquote")(1994,"p"),qx(1995,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),og()()()(),Cl(1996,"tr",13)(1997,"td",14)(1998,"div",15)(1999,"span",16),qx(2e3," gridLgColumns"),Hl(2001,"br"),og()()(),Cl(2002,"td",17)(2003,"code",41),qx(2004,"number"),og()(),Cl(2005,"td",20)(2006,"em")(2007,"strong"),qx(2008,"(opcional)"),og()(),Cl(2009,"p"),qx(2010,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Cl(2011,"p"),qx(2012,"Deve ser usado o sistema de "),Cl(2013,"strong"),qx(2014,"grid"),og(),qx(2015," do PO (1 ... 12 colunas)."),og(),Cl(2016,"blockquote")(2017,"p"),qx(2018,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(2019,"code"),qx(2020,"gridColumns"),og(),qx(2021,"."),og()()()(),Cl(2022,"tr",13)(2023,"td",14)(2024,"div",15)(2025,"span",16),qx(2026," gridLgPull"),Hl(2027,"br"),og()()(),Cl(2028,"td",17)(2029,"code",41),qx(2030,"number"),og()(),Cl(2031,"td",20)(2032,"em")(2033,"strong"),qx(2034,"(opcional)"),og()(),Cl(2035,"p"),qx(2036,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),og(),Cl(2037,"p"),qx(2038,"Deve ser usado o sistema de "),Cl(2039,"strong"),qx(2040,"grid"),og(),qx(2041," do PO (1 ... 11 colunas)."),og(),Cl(2042,"blockquote")(2043,"p"),qx(2044,"Esta propriedade n\xE3o funciona com a propriedade "),Cl(2045,"code"),qx(2046,"gridColumns"),og(),qx(2047,". Deve-se especificar o tamanho da tela."),og()()()(),Cl(2048,"tr",13)(2049,"td",14)(2050,"div",15)(2051,"span",16),qx(2052," gridMdColumns"),Hl(2053,"br"),og()()(),Cl(2054,"td",17)(2055,"code",41),qx(2056,"number"),og()(),Cl(2057,"td",20)(2058,"em")(2059,"strong"),qx(2060,"(opcional)"),og()(),Cl(2061,"p"),qx(2062,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Cl(2063,"p"),qx(2064,"Deve ser usado o sistema de "),Cl(2065,"strong"),qx(2066,"grid"),og(),qx(2067," do PO (1 ... 12 colunas)."),og(),Cl(2068,"blockquote")(2069,"p"),qx(2070,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(2071,"code"),qx(2072,"gridColumns"),og(),qx(2073,"."),og()()()(),Cl(2074,"tr",13)(2075,"td",14)(2076,"div",15)(2077,"span",16),qx(2078," gridMdPull"),Hl(2079,"br"),og()()(),Cl(2080,"td",17)(2081,"code",41),qx(2082,"number"),og()(),Cl(2083,"td",20)(2084,"em")(2085,"strong"),qx(2086,"(opcional)"),og()(),Cl(2087,"p"),qx(2088,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),og(),Cl(2089,"p"),qx(2090,"Deve ser usado o sistema de "),Cl(2091,"strong"),qx(2092,"grid"),og(),qx(2093," do PO (1 ... 11 colunas)."),og(),Cl(2094,"blockquote")(2095,"p"),qx(2096,"Esta propriedade n\xE3o funciona com a propriedade "),Cl(2097,"code"),qx(2098,"gridColumns"),og(),qx(2099,". Deve-se especificar o tamanho da tela."),og()()()(),Cl(2100,"tr",13)(2101,"td",14)(2102,"div",15)(2103,"span",16),qx(2104," gridSmColumns"),Hl(2105,"br"),og()()(),Cl(2106,"td",17)(2107,"code",41),qx(2108,"number"),og()(),Cl(2109,"td",20)(2110,"em")(2111,"strong"),qx(2112,"(opcional)"),og()(),Cl(2113,"p"),qx(2114,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Cl(2115,"p"),qx(2116,"Deve ser usado o sistema de "),Cl(2117,"strong"),qx(2118,"grid"),og(),qx(2119," do PO (1 ... 12 colunas)."),og(),Cl(2120,"blockquote")(2121,"p"),qx(2122,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(2123,"code"),qx(2124,"gridColumns"),og(),qx(2125,"."),og()()()(),Cl(2126,"tr",13)(2127,"td",14)(2128,"div",15)(2129,"span",16),qx(2130," gridSmPull"),Hl(2131,"br"),og()()(),Cl(2132,"td",17)(2133,"code",41),qx(2134,"number"),og()(),Cl(2135,"td",20)(2136,"em")(2137,"strong"),qx(2138,"(opcional)"),og()(),Cl(2139,"p"),qx(2140,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),og(),Cl(2141,"p"),qx(2142,"Deve ser usado o sistema de "),Cl(2143,"strong"),qx(2144,"grid"),og(),qx(2145," do PO (1 ... 11 colunas)."),og(),Cl(2146,"blockquote")(2147,"p"),qx(2148,"Esta propriedade n\xE3o funciona com a propriedade "),Cl(2149,"code"),qx(2150,"gridColumns"),og(),qx(2151,". Deve-se especificar o tamanho da tela."),og()()()(),Cl(2152,"tr",13)(2153,"td",14)(2154,"div",15)(2155,"span",16),qx(2156," gridXlColumns"),Hl(2157,"br"),og()()(),Cl(2158,"td",17)(2159,"code",41),qx(2160,"number"),og()(),Cl(2161,"td",20)(2162,"em")(2163,"strong"),qx(2164,"(opcional)"),og()(),Cl(2165,"p"),qx(2166,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Cl(2167,"p"),qx(2168,"Deve ser usado o sistema de "),Cl(2169,"strong"),qx(2170,"grid"),og(),qx(2171," do PO (1 ... 12 colunas)."),og(),Cl(2172,"blockquote")(2173,"p"),qx(2174,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(2175,"code"),qx(2176,"gridColumns"),og(),qx(2177,"."),og()()()(),Cl(2178,"tr",13)(2179,"td",14)(2180,"div",15)(2181,"span",16),qx(2182," gridXlPull"),Hl(2183,"br"),og()()(),Cl(2184,"td",17)(2185,"code",41),qx(2186,"number"),og()(),Cl(2187,"td",20)(2188,"em")(2189,"strong"),qx(2190,"(opcional)"),og()(),Cl(2191,"p"),qx(2192,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),og(),Cl(2193,"p"),qx(2194,"Deve ser usado o sistema de "),Cl(2195,"strong"),qx(2196,"grid"),og(),qx(2197," do PO (1 ... 11 colunas)."),og(),Cl(2198,"blockquote")(2199,"p"),qx(2200,"Esta propriedade n\xE3o funciona com a propriedade "),Cl(2201,"code"),qx(2202,"gridColumns"),og(),qx(2203,". Deve-se especificar o tamanho da tela."),og()()()(),Cl(2204,"tr",13)(2205,"td",14)(2206,"div",15)(2207,"span",16),qx(2208," headers"),Hl(2209,"br"),og()()(),Cl(2210,"td",17)(2211,"code",51),qx(2212,"{ [name: string]: string "),og(),Cl(2213,"code",52),qx(2214,` Array<string>;
}`),og()(),Cl(2215,"td",20)(2216,"em")(2217,"strong"),qx(2218,"(opcional)"),og()(),Cl(2219,"p"),qx(2220,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),og(),Cl(2221,"p")(2222,"strong"),qx(2223,"Componente compat\xEDvel"),og(),qx(2224,": "),Cl(2225,"code"),qx(2226,"po-upload"),og()()()(),Cl(2227,"tr",13)(2228,"td",14)(2229,"div",15)(2230,"span",16),qx(2231," help"),Hl(2232,"br"),og()()(),Cl(2233,"td",17)(2234,"code",18),qx(2235,"string"),og()(),Cl(2236,"td",20)(2237,"em")(2238,"strong"),qx(2239,"(opcional)"),og()(),Cl(2240,"p"),qx(2241,"Texto de ajuda."),og()()(),Cl(2242,"tr",13)(2243,"td",14)(2244,"div",15)(2245,"span",16),qx(2246," helper"),Hl(2247,"br"),og()()(),Cl(2248,"td",17)(2249,"code",18),qx(2250,"string "),og(),Cl(2251,"code",53),qx(2252," PoHelperOptions"),og()(),Cl(2253,"td",20)(2254,"em")(2255,"strong"),qx(2256,"(opcional)"),og()(),Cl(2257,"p"),qx(2258,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),og()()(),Cl(2259,"tr",13)(2260,"td",14)(2261,"div",15)(2262,"span",16),qx(2263," hideLabelStatus"),Hl(2264,"br"),og()()(),Cl(2265,"td",17)(2266,"code",28),qx(2267,"boolean"),og()(),Cl(2268,"td",20)(2269,"em")(2270,"strong"),qx(2271,"(opcional)"),og()(),Cl(2272,"p"),qx(2273,"Indica se o status do "),Cl(2274,"code"),qx(2275,"model"),og(),qx(2276," ser\xE1 escondido visualmente ao lado do switch"),og()()(),Cl(2277,"tr",13)(2278,"td",14)(2279,"div",15)(2280,"span",16),qx(2281," hidePasswordPeek"),Hl(2282,"br"),og()()(),Cl(2283,"td",17)(2284,"code",28),qx(2285,"boolean"),og()(),Cl(2286,"td",20)(2287,"em")(2288,"strong"),qx(2289,"(opcional)"),og()(),Cl(2290,"p"),qx(2291,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),Cl(2292,"code"),qx(2293,"po-password"),og(),qx(2294,"."),og()()(),Cl(2295,"tr",13)(2296,"td",14)(2297,"div",15)(2298,"span",16),qx(2299," hideRestrictionsInfo"),Hl(2300,"br"),og()()(),Cl(2301,"td",17)(2302,"code",28),qx(2303,"boolean"),og()(),Cl(2304,"td",20)(2305,"em")(2306,"strong"),qx(2307,"(opcional)"),og()(),Cl(2308,"p"),qx(2309,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),og(),Cl(2310,"p")(2311,"strong"),qx(2312,"Componente compat\xEDvel"),og(),qx(2313,": "),Cl(2314,"code"),qx(2315,"po-upload"),og()()()(),Cl(2316,"tr",13)(2317,"td",14)(2318,"div",15)(2319,"span",16),qx(2320," hideSearch"),Hl(2321,"br"),og()()(),Cl(2322,"td",17)(2323,"code",28),qx(2324,"boolean"),og()(),Cl(2325,"td",20)(2326,"em")(2327,"strong"),qx(2328,"(opcional)"),og()(),Cl(2329,"p"),qx(2330,"Esconde o campo de pesquisa existente dentro do dropdown do "),Cl(2331,"code"),qx(2332,"po-multiselect"),og(),qx(2333,"."),og()()(),Cl(2334,"tr",13)(2335,"td",14)(2336,"div",15)(2337,"span",16),qx(2338," hideSelectAll"),Hl(2339,"br"),og()()(),Cl(2340,"td",17)(2341,"code",28),qx(2342,"boolean"),og()(),Cl(2343,"td",20)(2344,"em")(2345,"strong"),qx(2346,"(opcional)"),og()(),Cl(2347,"p"),qx(2348,'Indica se o campo "Selecionar todos" do '),Cl(2349,"code"),qx(2350,"po-multiselect"),og(),qx(2351," ser\xE1 escondido."),og()()(),Cl(2352,"tr",13)(2353,"td",14)(2354,"div",15)(2355,"span",16),qx(2356," hideSelectButton"),Hl(2357,"br"),og()()(),Cl(2358,"td",17)(2359,"code",28),qx(2360,"boolean"),og()(),Cl(2361,"td",20)(2362,"em")(2363,"strong"),qx(2364,"(opcional)"),og()(),Cl(2365,"p"),qx(2366,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),og(),Cl(2367,"blockquote")(2368,"p"),qx(2369,"Caso o valor definido seja "),Cl(2370,"code"),qx(2371,"true"),og(),qx(2372,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Cl(2373,"code"),qx(2374,"selectFiles()"),og(),qx(2375," para sele\xE7\xE3o de arquivos."),og()(),Cl(2376,"p")(2377,"strong"),qx(2378,"Componente compat\xEDvel"),og(),qx(2379,": "),Cl(2380,"code"),qx(2381,"po-upload"),og()()()(),Cl(2382,"tr",13)(2383,"td",14)(2384,"div",15)(2385,"span",16),qx(2386," hideSendButton"),Hl(2387,"br"),og()()(),Cl(2388,"td",17)(2389,"code",28),qx(2390,"boolean"),og()(),Cl(2391,"td",20)(2392,"em")(2393,"strong"),qx(2394,"(opcional)"),og()(),Cl(2395,"p"),qx(2396,"Omite o bot\xE3o de envio de arquivos."),og(),Cl(2397,"blockquote")(2398,"p"),qx(2399,"Caso o valor definido seja "),Cl(2400,"code"),qx(2401,"true"),og(),qx(2402,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Cl(2403,"code"),qx(2404,"sendFiles()"),og(),qx(2405," para envio do(s) arquivo(s) selecionado(s)."),og()(),Cl(2406,"p")(2407,"strong"),qx(2408,"Componente compat\xEDvel"),og(),qx(2409,": "),Cl(2410,"code"),qx(2411,"po-upload"),og()()()(),Cl(2412,"tr",13)(2413,"td",14)(2414,"div",15)(2415,"span",16),qx(2416," icon"),Hl(2417,"br"),og()()(),Cl(2418,"td",17)(2419,"code",18),qx(2420,"string "),og(),Cl(2421,"code",54),qx(2422," TemplateRef<void>"),og()(),Cl(2423,"td",20)(2424,"em")(2425,"strong"),qx(2426,"(opcional)"),og()(),Cl(2427,"p"),qx(2428,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Cl(2429,"blockquote")(2430,"p"),qx(2431,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),og()(),Cl(2432,"ul")(2433,"li"),qx(2434,"Input;"),og(),Cl(2435,"li"),qx(2436,"Number;"),og(),Cl(2437,"li"),qx(2438,"Decimal;"),og(),Cl(2439,"li"),qx(2440,"Combo;"),og(),Cl(2441,"li"),qx(2442,"Password;"),og()(),Cl(2443,"blockquote")(2444,"p"),qx(2445,"Veja a disponibilidade de \xEDcones em "),Cl(2446,"a",55),qx(2447,"biblioteca de \xEDcones"),og(),qx(2448,"."),og()()()(),Cl(2449,"tr",13)(2450,"td",14)(2451,"div",15)(2452,"span",16),qx(2453," infiniteScroll"),Hl(2454,"br"),og()()(),Cl(2455,"td",17)(2456,"code",28),qx(2457,"boolean"),og()(),Cl(2458,"td",20)(2459,"em")(2460,"strong"),qx(2461,"(opcional)"),og()(),Cl(2462,"p"),qx(2463,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),og(),Cl(2464,"p")(2465,"strong"),qx(2466,"Componentes compat\xEDveis:"),og(),Cl(2467,"code"),qx(2468,"po-combo"),og(),qx(2469,", "),Cl(2470,"code"),qx(2471,"po-lookup"),og(),qx(2472,"."),og()()(),Cl(2473,"tr",13)(2474,"td",14)(2475,"div",15)(2476,"span",16),qx(2477," infiniteScrollDistance"),Hl(2478,"br"),og()()(),Cl(2479,"td",17)(2480,"code",41),qx(2481,"number"),og()(),Cl(2482,"td",20)(2483,"em")(2484,"strong"),qx(2485,"(opcional)"),og()(),Cl(2486,"p"),qx(2487,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Cl(2488,"strong"),qx(2489,"Exemplos"),og(),Cl(2490,"code"),qx(2491,"{ infiniteScrollDistance: 80 }"),og(),qx(2492,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),og(),Cl(2493,"p")(2494,"strong"),qx(2495,"Componente compat\xEDvel:"),og(),Cl(2496,"code"),qx(2497,"po-combo"),og(),qx(2498,"."),og()()(),Cl(2499,"tr",13)(2500,"td",14)(2501,"div",15)(2502,"span",16),qx(2503," invalidValue"),Hl(2504,"br"),og()()(),Cl(2505,"td",17)(2506,"code",28),qx(2507,"boolean"),og()(),Cl(2508,"td",20)(2509,"em")(2510,"strong"),qx(2511,"(opcional)"),og()(),Cl(2512,"p"),qx(2513,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Cl(2514,"code"),qx(2515,"p-field-error-message"),og(),qx(2516,"."),og(),Cl(2517,"blockquote")(2518,"p"),qx(2519,"Caso essa propriedade seja definida como "),Cl(2520,"code"),qx(2521,"true"),og(),qx(2522,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),og()(),Cl(2523,"p")(2524,"strong"),qx(2525,"Componente compat\xEDvel"),og(),qx(2526,": "),Cl(2527,"code"),qx(2528,"po-switch"),og()()()(),Cl(2529,"tr",13)(2530,"td",14)(2531,"div",15)(2532,"span",16),qx(2533," isoFormat"),Hl(2534,"br"),og()()(),Cl(2535,"td",17)(2536,"code",56),qx(2537,"PoDatepickerIsoFormat"),og()(),Cl(2538,"td",20)(2539,"em")(2540,"strong"),qx(2541,"(opcional)"),og()(),Cl(2542,"p"),qx(2543,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),og(),Cl(2544,"blockquote")(2545,"p"),qx(2546,"Veja os valores v\xE1lidos no "),Cl(2547,"code"),qx(2548,"PoDatepickerIsoFormat"),og(),qx(2549,"."),og()(),Cl(2550,"p")(2551,"strong"),qx(2552,"Componente compat\xEDvel:"),og(),Cl(2553,"code"),qx(2554,"po-datepicker"),og()()()(),Cl(2555,"tr",13)(2556,"td",14)(2557,"div",15)(2558,"span",16),qx(2559," key"),Hl(2560,"br"),og()()(),Cl(2561,"td",17)(2562,"code",28),qx(2563,"boolean"),og()(),Cl(2564,"td",20)(2565,"em")(2566,"strong"),qx(2567,"(opcional)"),og()(),Cl(2568,"p"),qx(2569,"Identificador"),og()()(),Cl(2570,"tr",13)(2571,"td",14)(2572,"div",15)(2573,"span",16),qx(2574," keydown"),Hl(2575,"br"),og()()(),Cl(2576,"td",17)(2577,"code",29),qx(2578,"Function"),og()(),Cl(2579,"td",20)(2580,"em")(2581,"strong"),qx(2582,"(opcional)"),og()(),Cl(2583,"p"),qx(2584,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(2585,"code"),qx(2586,"KeyboardEvent"),og(),qx(2587," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(2588,"tr",13)(2589,"td",14)(2590,"div",15)(2591,"span",16),qx(2592," label"),Hl(2593,"br"),og()()(),Cl(2594,"td",17)(2595,"code",18),qx(2596,"string"),og()(),Cl(2597,"td",20)(2598,"em")(2599,"strong"),qx(2600,"(opcional)"),og()(),Cl(2601,"p"),qx(2602,"R\xF3tulo do campo exibido."),og(),Cl(2603,"p"),qx(2604,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Cl(2605,"code"),qx(2606,"label"),og(),qx(2607," o valor da propriedade "),Cl(2608,"code"),qx(2609,"property"),og(),qx(2610," com a primeira letra em mai\xFAsculo."),og()()(),Cl(2611,"tr",13)(2612,"td",14)(2613,"div",15)(2614,"span",16),qx(2615," labelPosition"),Hl(2616,"br"),og()()(),Cl(2617,"td",17)(2618,"code",57),qx(2619,"PoSwitchLabelPosition"),og()(),Cl(2620,"td",20)(2621,"em")(2622,"strong"),qx(2623,"(opcional)"),og()(),Cl(2624,"p"),qx(2625,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),og(),Cl(2626,"blockquote")(2627,"p"),qx(2628,"Por padr\xE3o exibe \xE0 direita."),og()()()(),Cl(2629,"tr",13)(2630,"td",14)(2631,"div",15)(2632,"span",16),qx(2633," listboxControlPosition"),Hl(2634,"br"),og()()(),Cl(2635,"td",17)(2636,"code",58),qx(2637,"'top' "),og(),Cl(2638,"code",59),qx(2639," 'bottom'"),og()(),Cl(2640,"td",20)(2641,"em")(2642,"strong"),qx(2643,"(opcional)"),og()(),Cl(2644,"p"),qx(2645,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Cl(2646,"code"),qx(2647,"listbox"),og(),qx(2648," em rela\xE7\xE3o ao campo ("),Cl(2649,"code"),qx(2650,"top"),og(),qx(2651," ou "),Cl(2652,"code"),qx(2653,"bottom"),og(),qx(2654,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),og(),Cl(2655,"p")(2656,"strong"),qx(2657,"Componentes compat\xEDveis:"),og(),Cl(2658,"code"),qx(2659,"po-multiselect"),og(),qx(2660,", "),Cl(2661,"code"),qx(2662,"po-combo"),og(),qx(2663,"."),og()()(),Cl(2664,"tr",13)(2665,"td",14)(2666,"div",15)(2667,"span",16),qx(2668," literals"),Hl(2669,"br"),og()()(),Cl(2670,"td",17)(2671,"code",60),qx(2672,"PoLookupLiterals "),og(),Cl(2673,"code",61),qx(2674," PoMultiselectLiterals "),og(),Cl(2675,"code",62),qx(2676," PoComboLiterals "),og(),Cl(2677,"code",63),qx(2678," PoDatepickerRangeLiterals "),og(),Cl(2679,"code",64),qx(2680," PoUploadLiterals"),og()(),Cl(2681,"td",20)(2682,"em")(2683,"strong"),qx(2684,"(opcional)"),og()(),Cl(2685,"p"),qx(2686,"Objeto com as literais usadas para os seguintes componentes: "),Cl(2687,"code"),qx(2688,"po-lookup"),og(),qx(2689,", "),Cl(2690,"code"),qx(2691,"po-multiselect"),og(),qx(2692,", "),Cl(2693,"code"),qx(2694,"po-combo"),og(),qx(2695," e "),Cl(2696,"code"),qx(2697,"po-datepicker-range"),og(),qx(2698,"."),og(),Cl(2699,"blockquote")(2700,"p"),qx(2701,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),og()(),Cl(2702,"p")(2703,"strong"),qx(2704,"Componentes compat\xEDveis:"),og(),Cl(2705,"code"),qx(2706,"po-lookup"),og(),qx(2707,", "),Cl(2708,"code"),qx(2709,"po-multiselect"),og(),qx(2710,", "),Cl(2711,"code"),qx(2712,"po-combo"),og(),qx(2713,", "),Cl(2714,"code"),qx(2715,"po-datepicker-range"),og()()()(),Cl(2716,"tr",13)(2717,"td",14)(2718,"div",15)(2719,"span",16),qx(2720," loading"),Hl(2721,"br"),og()()(),Cl(2722,"td",17)(2723,"code",28),qx(2724,"boolean"),og()(),Cl(2725,"td",20)(2726,"em")(2727,"strong"),qx(2728,"(opcional)"),og()(),Cl(2729,"p"),qx(2730,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),og(),Cl(2731,"blockquote")(2732,"p"),qx(2733,"Por padr\xE3o \xE9 "),Cl(2734,"code"),qx(2735,"false"),og(),qx(2736,"."),og()(),Cl(2737,"p")(2738,"strong"),qx(2739,"Componentes compat\xEDveis:"),og(),Cl(2740,"code"),qx(2741,"po-datepicker"),og(),qx(2742,", "),Cl(2743,"code"),qx(2744,"po-datepicker-range"),og(),qx(2745,", "),Cl(2746,"code"),qx(2747,"po-number"),og(),qx(2748,", "),Cl(2749,"code"),qx(2750,"po-decimal"),og(),qx(2751,`,
`),Cl(2752,"code"),qx(2753,"po-input"),og(),qx(2754,", "),Cl(2755,"code"),qx(2756,"po-select"),og(),qx(2757,", "),Cl(2758,"code"),qx(2759,"po-switch"),og(),qx(2760,", "),Cl(2761,"code"),qx(2762,"po-combo"),og(),qx(2763,", "),Cl(2764,"code"),qx(2765,"po-lookup"),og(),qx(2766,", "),Cl(2767,"code"),qx(2768,"po-multiselect"),og(),qx(2769,`,
`),Cl(2770,"code"),qx(2771,"po-textarea"),og(),qx(2772,", "),Cl(2773,"code"),qx(2774,"po-password"),og(),qx(2775,", "),Cl(2776,"code"),qx(2777,"po-upload"),og(),qx(2778,"."),og()()(),Cl(2779,"tr",13)(2780,"td",14)(2781,"div",15)(2782,"span",16),qx(2783," locale"),Hl(2784,"br"),og()()(),Cl(2785,"td",17)(2786,"code",18),qx(2787,"string"),og()(),Cl(2788,"td",20)(2789,"em")(2790,"strong"),qx(2791,"(opcional)"),og()(),Cl(2792,"p"),qx(2793,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Cl(2794,"a",65)(2795,"code"),qx(2796,"I18n"),og()()(),Cl(2797,"p"),qx(2798,"Exemplo de utiliza\xE7\xE3o:"),og(),Cl(2799,"pre")(2800,"code"),qx(2801,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),og()(),Cl(2802,"blockquote")(2803,"p"),qx(2804,"Para ver quais linguagens suportadas acesse "),Cl(2805,"a",65)(2806,"code"),qx(2807,"I18n"),og()()()(),Cl(2808,"p")(2809,"strong"),qx(2810,"Componentes compat\xEDveis:"),og(),Cl(2811,"code"),qx(2812,"po-datepicker"),og(),qx(2813,", "),Cl(2814,"code"),qx(2815,"po-decimal"),og(),qx(2816,", "),Cl(2817,"code"),qx(2818,"po-timepicker"),og(),qx(2819,"."),og()()(),Cl(2820,"tr",13)(2821,"td",14)(2822,"div",15)(2823,"span",16),qx(2824," mask"),Hl(2825,"br"),og()()(),Cl(2826,"td",17)(2827,"code",18),qx(2828,"string"),og()(),Cl(2829,"td",20)(2830,"em")(2831,"strong"),qx(2832,"(opcional)"),og()(),Cl(2833,"p"),qx(2834,"M\xE1scara para o campo."),og(),Cl(2835,"p")(2836,"strong"),qx(2837,"Componente compat\xEDvel:"),og(),Cl(2838,"code"),qx(2839,"po-input"),og(),qx(2840,"."),og(),Cl(2841,"blockquote")(2842,"p"),qx(2843,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Cl(2844,"code"),qx(2845,"type: time"),og(),qx(2846,"."),og()()()(),Cl(2847,"tr",13)(2848,"td",14)(2849,"div",15)(2850,"span",16),qx(2851," maskFormatModel"),Hl(2852,"br"),og()()(),Cl(2853,"td",17)(2854,"code",28),qx(2855,"boolean"),og()(),Cl(2856,"td",20)(2857,"em")(2858,"strong"),qx(2859,"(opcional)"),og()(),Cl(2860,"p"),qx(2861,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),Cl(2862,"code"),qx(2863,"false"),og(),qx(2864,"."),og(),Cl(2865,"p")(2866,"strong"),qx(2867,"Componente compat\xEDvel:"),og(),Cl(2868,"code"),qx(2869,"po-input"),og(),qx(2870,"."),og(),Cl(2871,"blockquote")(2872,"p"),qx(2873,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Cl(2874,"code"),qx(2875,"type: time"),og(),qx(2876,"."),og()()()(),Cl(2877,"tr",13)(2878,"td",14)(2879,"div",15)(2880,"span",16),qx(2881," maskNoLengthValidation"),Hl(2882,"br"),og()()(),Cl(2883,"td",17)(2884,"code",28),qx(2885,"boolean"),og()(),Cl(2886,"td",20)(2887,"em")(2888,"strong"),qx(2889,"(opcional)"),og()(),Cl(2890,"p"),qx(2891,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Cl(2892,"code"),qx(2893,"minLength"),og(),qx(2894,") e m\xE1ximo ("),Cl(2895,"code"),qx(2896,"maxLength"),og(),qx(2897,") quando h\xE1 uma m\xE1scara ("),Cl(2898,"code"),qx(2899,"p-mask"),og(),qx(2900,") definida."),og(),Cl(2901,"ul")(2902,"li"),qx(2903,"Quando "),Cl(2904,"code"),qx(2905,"true"),og(),qx(2906,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Cl(2907,"li"),qx(2908,"Quando "),Cl(2909,"code"),qx(2910,"false"),og(),qx(2911,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Cl(2912,"p")(2913,"strong"),qx(2914,"Componentes compat\xEDveis:"),og(),Cl(2915,"code"),qx(2916,"po-input"),og(),qx(2917,", "),Cl(2918,"code"),qx(2919,"po-decimal"),og(),qx(2920,"."),og(),Cl(2921,"blockquote")(2922,"p"),qx(2923,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Cl(2924,"code"),qx(2925,"p-mask-format-model"),og(),qx(2926,"."),og()(),Cl(2927,"p"),qx(2928,"Exemplo:"),og(),Cl(2929,"pre")(2930,"code"),qx(2931,`fields:Array<PoDynamicFormField> = [
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
`),og()(),Cl(2932,"ul")(2933,"li"),qx(2934,"Entrada: "),Cl(2935,"code"),qx(2936,"11.111.111/1111-11"),og(),qx(2937," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),og()()()(),Cl(2938,"tr",13)(2939,"td",14)(2940,"div",15)(2941,"span",16),qx(2942," maxLength"),Hl(2943,"br"),og()()(),Cl(2944,"td",17)(2945,"code",41),qx(2946,"number"),og()(),Cl(2947,"td",20)(2948,"em")(2949,"strong"),qx(2950,"(opcional)"),og()(),Cl(2951,"p"),qx(2952,"Tamanho m\xE1ximo de caracteres."),og(),Cl(2953,"p")(2954,"strong"),qx(2955,"Componentes compat\xEDveis:"),og(),Cl(2956,"code"),qx(2957,"po-input"),og(),qx(2958,", "),Cl(2959,"code"),qx(2960,"po-number"),og(),qx(2961,", "),Cl(2962,"code"),qx(2963,"po-decimal"),og(),qx(2964,", "),Cl(2965,"code"),qx(2966,"po-textarea"),og(),qx(2967,", "),Cl(2968,"code"),qx(2969,"po-password"),og(),qx(2970,"."),og()()(),Cl(2971,"tr",13)(2972,"td",14)(2973,"div",15)(2974,"span",16),qx(2975," maxTime"),Hl(2976,"br"),og()()(),Cl(2977,"td",17)(2978,"code",18),qx(2979,"string"),og()(),Cl(2980,"td",20)(2981,"em")(2982,"strong"),qx(2983,"(opcional)"),og()(),Cl(2984,"p"),qx(2985,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Cl(2986,"code"),qx(2987,"HH:mm"),og(),qx(2988," ou "),Cl(2989,"code"),qx(2990,"HH:mm:ss"),og(),qx(2991,"."),og(),Cl(2992,"p")(2993,"strong"),qx(2994,"Componente compat\xEDvel:"),og(),Cl(2995,"code"),qx(2996,"po-datetimepicker"),og(),qx(2997,", "),Cl(2998,"code"),qx(2999,"po-timepicker"),og()()()(),Cl(3e3,"tr",13)(3001,"td",14)(3002,"div",15)(3003,"span",16),qx(3004," maxValue"),Hl(3005,"br"),og()()(),Cl(3006,"td",17)(3007,"code",18),qx(3008,"string "),og(),Cl(3009,"code",41),qx(3010," number"),og()(),Cl(3011,"td",20)(3012,"em")(3013,"strong"),qx(3014,"(opcional)"),og()(),Cl(3015,"p"),qx(3016,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Cl(3017,"em"),qx(3018,"number"),og(),qx(3019,", "),Cl(3020,"em"),qx(3021,"date"),og(),qx(3022,", "),Cl(3023,"em"),qx(3024,"dateTime"),og(),qx(3025," ou "),Cl(3026,"em"),qx(3027,"time"),og(),qx(3028,"."),og(),Cl(3029,"blockquote")(3030,"p"),qx(3031,"Para "),Cl(3032,"code"),qx(3033,"po-timepicker"),og(),qx(3034,", o valor deve estar no formato "),Cl(3035,"code"),qx(3036,"HH:mm"),og(),qx(3037," ou "),Cl(3038,"code"),qx(3039,"HH:mm:ss"),og(),qx(3040,"."),og()(),Cl(3041,"p")(3042,"strong"),qx(3043,"Componentes compat\xEDveis:"),og(),Cl(3044,"code"),qx(3045,"po-datepicker"),og(),qx(3046,", "),Cl(3047,"code"),qx(3048,"po-datepicker-range"),og(),qx(3049,", "),Cl(3050,"code"),qx(3051,"po-number"),og(),qx(3052,", "),Cl(3053,"code"),qx(3054,"po-decimal"),og(),qx(3055,", "),Cl(3056,"code"),qx(3057,"po-timepicker"),og()()()(),Cl(3058,"tr",13)(3059,"td",14)(3060,"div",15)(3061,"span",16),qx(3062," minLength"),Hl(3063,"br"),og()()(),Cl(3064,"td",17)(3065,"code",41),qx(3066,"number"),og()(),Cl(3067,"td",20)(3068,"em")(3069,"strong"),qx(3070,"(opcional)"),og()(),Cl(3071,"p"),qx(3072,"Tamanho m\xEDnimo de caracteres."),og(),Cl(3073,"p")(3074,"strong"),qx(3075,"Componentes compat\xEDveis:"),og(),Cl(3076,"code"),qx(3077,"po-input"),og(),qx(3078,", "),Cl(3079,"code"),qx(3080,"po-number"),og(),qx(3081,", "),Cl(3082,"code"),qx(3083,"po-decimal"),og(),qx(3084,", "),Cl(3085,"code"),qx(3086,"po-textarea"),og(),qx(3087,", "),Cl(3088,"code"),qx(3089,"po-password"),og(),qx(3090,"."),og()()(),Cl(3091,"tr",13)(3092,"td",14)(3093,"div",15)(3094,"span",16),qx(3095," minTime"),Hl(3096,"br"),og()()(),Cl(3097,"td",17)(3098,"code",18),qx(3099,"string"),og()(),Cl(3100,"td",20)(3101,"em")(3102,"strong"),qx(3103,"(opcional)"),og()(),Cl(3104,"p"),qx(3105,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Cl(3106,"code"),qx(3107,"HH:mm"),og(),qx(3108," ou "),Cl(3109,"code"),qx(3110,"HH:mm:ss"),og(),qx(3111,"."),og(),Cl(3112,"p")(3113,"strong"),qx(3114,"Componente compat\xEDvel:"),og(),Cl(3115,"code"),qx(3116,"po-datetimepicker"),og(),qx(3117,", "),Cl(3118,"code"),qx(3119,"po-timepicker"),og()()()(),Cl(3120,"tr",13)(3121,"td",14)(3122,"div",15)(3123,"span",16),qx(3124," minValue"),Hl(3125,"br"),og()()(),Cl(3126,"td",17)(3127,"code",18),qx(3128,"string "),og(),Cl(3129,"code",41),qx(3130," number"),og()(),Cl(3131,"td",20)(3132,"em")(3133,"strong"),qx(3134,"(opcional)"),og()(),Cl(3135,"p"),qx(3136,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Cl(3137,"em"),qx(3138,"number"),og(),qx(3139,", "),Cl(3140,"em"),qx(3141,"date"),og(),qx(3142,", "),Cl(3143,"em"),qx(3144,"dateTime"),og(),qx(3145," ou "),Cl(3146,"em"),qx(3147,"time"),og(),qx(3148,"."),og(),Cl(3149,"blockquote")(3150,"p"),qx(3151,"Para "),Cl(3152,"code"),qx(3153,"po-timepicker"),og(),qx(3154,", o valor deve estar no formato "),Cl(3155,"code"),qx(3156,"HH:mm"),og(),qx(3157," ou "),Cl(3158,"code"),qx(3159,"HH:mm:ss"),og(),qx(3160,"."),og()(),Cl(3161,"p")(3162,"strong"),qx(3163,"Componentes compat\xEDveis:"),og(),Cl(3164,"code"),qx(3165,"po-datepicker"),og(),qx(3166,", "),Cl(3167,"code"),qx(3168,"po-datepicker-range"),og(),qx(3169,", "),Cl(3170,"code"),qx(3171,"po-number"),og(),qx(3172,", "),Cl(3173,"code"),qx(3174,"po-decimal"),og(),qx(3175,", "),Cl(3176,"code"),qx(3177,"po-timepicker"),og()()()(),Cl(3178,"tr",13)(3179,"td",14)(3180,"div",15)(3181,"span",16),qx(3182," minuteInterval"),Hl(3183,"br"),og()()(),Cl(3184,"td",17)(3185,"code",41),qx(3186,"number"),og()(),Cl(3187,"td",20)(3188,"em")(3189,"strong"),qx(3190,"(opcional)"),og()(),Cl(3191,"p"),qx(3192,"Define o intervalo entre os minutos exibidos no painel do timepicker."),og()()(),Cl(3193,"tr",13)(3194,"td",14)(3195,"div",15)(3196,"span",16),qx(3197," mode"),Hl(3198,"br"),og()()(),Cl(3199,"td",17)(3200,"code",66),qx(3201,"'month-year' "),og(),Cl(3202,"code",67),qx(3203," 'year'"),og()(),Cl(3204,"td",20)(3205,"em")(3206,"strong"),qx(3207,"(opcional)"),og()(),Cl(3208,"p"),qx(3209,"Define o modo de sele\xE7\xE3o do "),Cl(3210,"code"),qx(3211,"po-datepicker"),og(),qx(3212,"."),og(),Cl(3213,"p"),qx(3214,"Valores aceitos:"),og(),Cl(3215,"ul")(3216,"li")(3217,"code"),qx(3218,"'month-year'"),og(),qx(3219,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),Cl(3220,"code"),qx(3221,"MM/YYYY"),og(),qx(3222,")"),og(),Cl(3223,"li")(3224,"code"),qx(3225,"'year'"),og(),qx(3226,": exibe sele\xE7\xE3o apenas de ano (formato "),Cl(3227,"code"),qx(3228,"YYYY"),og(),qx(3229,")"),og()(),Cl(3230,"p")(3231,"strong"),qx(3232,"Componente compat\xEDvel:"),og(),Cl(3233,"code"),qx(3234,"po-datepicker"),og()()()(),Cl(3235,"tr",13)(3236,"td",14)(3237,"div",15)(3238,"span",16),qx(3239," modelFormat"),Hl(3240,"br"),og()()(),Cl(3241,"td",17)(3242,"code",68),qx(3243,"PoTimepickerModelFormat"),og()(),Cl(3244,"td",20)(3245,"em")(3246,"strong"),qx(3247,"(opcional)"),og()(),Cl(3248,"p"),qx(3249,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),Cl(3250,"code"),qx(3251,"po-timepicker"),og(),qx(3252,"."),og(),Cl(3253,"blockquote")(3254,"p"),qx(3255,"Veja os valores v\xE1lidos no "),Cl(3256,"code"),qx(3257,"PoTimepickerModelFormat"),og(),qx(3258,"."),og()(),Cl(3259,"p")(3260,"strong"),qx(3261,"Componente compat\xEDvel:"),og(),Cl(3262,"code"),qx(3263,"po-timepicker"),og()()()(),Cl(3264,"tr",13)(3265,"td",14)(3266,"div",15)(3267,"span",16),qx(3268," multiple"),Hl(3269,"br"),og()()(),Cl(3270,"td",17)(3271,"code",28),qx(3272,"boolean"),og()(),Cl(3273,"td",20)(3274,"em")(3275,"strong"),qx(3276,"(opcional)"),og()(),Cl(3277,"p"),qx(3278,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),og(),Cl(3279,"p")(3280,"strong"),qx(3281,"Componentes compat\xEDveis:"),og(),Cl(3282,"code"),qx(3283,"po-lookup"),og(),qx(3284,", "),Cl(3285,"code"),qx(3286,"po-upload"),og()()()(),Cl(3287,"tr",13)(3288,"td",14)(3289,"div",15)(3290,"span",16),qx(3291," noAutocomplete"),Hl(3292,"br"),og()()(),Cl(3293,"td",17)(3294,"code",28),qx(3295,"boolean"),og()(),Cl(3296,"td",20)(3297,"em")(3298,"strong"),qx(3299,"(opcional)"),og()(),Cl(3300,"p"),qx(3301,"Define a propriedade nativa "),Cl(3302,"code"),qx(3303,"autocomplete"),og(),qx(3304," do campo como off."),og(),Cl(3305,"p")(3306,"strong"),qx(3307,"Componentes compat\xEDveis:"),og(),Cl(3308,"code"),qx(3309,"po-datepicker"),og(),qx(3310,", "),Cl(3311,"code"),qx(3312,"po-datepicker-range"),og(),qx(3313,", "),Cl(3314,"code"),qx(3315,"po-input"),og(),qx(3316,", "),Cl(3317,"code"),qx(3318,"po-number"),og(),qx(3319,", "),Cl(3320,"code"),qx(3321,"po-decimal"),og(),qx(3322,`,
`),Cl(3323,"code"),qx(3324,"po-lookup"),og(),qx(3325,", "),Cl(3326,"code"),qx(3327,"po-password"),og(),qx(3328,", "),Cl(3329,"code"),qx(3330,"po-timepicker"),og(),qx(3331,"."),og()()(),Cl(3332,"tr",13)(3333,"td",14)(3334,"div",15)(3335,"span",16),qx(3336," offsetColumns"),Hl(3337,"br"),og()()(),Cl(3338,"td",17)(3339,"code",41),qx(3340,"number"),og()(),Cl(3341,"td",20)(3342,"em")(3343,"strong"),qx(3344,"(opcional)"),og()(),Cl(3345,"p"),qx(3346,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),og(),Cl(3347,"p"),qx(3348,"Deve ser usado o sistema de "),Cl(3349,"strong"),qx(3350,"grid"),og(),qx(3351," do PO (1 ... 12 colunas)."),og(),Cl(3352,"blockquote")(3353,"p"),qx(3354,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),og()()()(),Cl(3355,"tr",13)(3356,"td",14)(3357,"div",15)(3358,"span",16),qx(3359," offsetLgColumns"),Hl(3360,"br"),og()()(),Cl(3361,"td",17)(3362,"code",41),qx(3363,"number"),og()(),Cl(3364,"td",20)(3365,"em")(3366,"strong"),qx(3367,"(opcional)"),og()(),Cl(3368,"p"),qx(3369,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),og(),Cl(3370,"p"),qx(3371,"Deve ser usado o sistema de "),Cl(3372,"strong"),qx(3373,"grid"),og(),qx(3374," do PO (1 ... 12 colunas)."),og(),Cl(3375,"blockquote")(3376,"p"),qx(3377,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(3378,"code"),qx(3379,"offsetColumns"),og(),qx(3380,"."),og()()()(),Cl(3381,"tr",13)(3382,"td",14)(3383,"div",15)(3384,"span",16),qx(3385," offsetMdColumns"),Hl(3386,"br"),og()()(),Cl(3387,"td",17)(3388,"code",41),qx(3389,"number"),og()(),Cl(3390,"td",20)(3391,"em")(3392,"strong"),qx(3393,"(opcional)"),og()(),Cl(3394,"p"),qx(3395,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),og(),Cl(3396,"p"),qx(3397,"Deve ser usado o sistema de "),Cl(3398,"strong"),qx(3399,"grid"),og(),qx(3400," do PO (1 ... 12 colunas)."),og(),Cl(3401,"blockquote")(3402,"p"),qx(3403,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(3404,"code"),qx(3405,"offsetColumns"),og(),qx(3406,"."),og()()()(),Cl(3407,"tr",13)(3408,"td",14)(3409,"div",15)(3410,"span",16),qx(3411," offsetSmColumns"),Hl(3412,"br"),og()()(),Cl(3413,"td",17)(3414,"code",41),qx(3415,"number"),og()(),Cl(3416,"td",20)(3417,"em")(3418,"strong"),qx(3419,"(opcional)"),og()(),Cl(3420,"p"),qx(3421,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),og(),Cl(3422,"p"),qx(3423,"Deve ser usado o sistema de "),Cl(3424,"strong"),qx(3425,"grid"),og(),qx(3426," do PO (1 ... 12 colunas)."),og(),Cl(3427,"blockquote")(3428,"p"),qx(3429,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(3430,"code"),qx(3431,"offsetColumns"),og(),qx(3432,"."),og()()()(),Cl(3433,"tr",13)(3434,"td",14)(3435,"div",15)(3436,"span",16),qx(3437," offsetXlColumns"),Hl(3438,"br"),og()()(),Cl(3439,"td",17)(3440,"code",41),qx(3441,"number"),og()(),Cl(3442,"td",20)(3443,"em")(3444,"strong"),qx(3445,"(opcional)"),og()(),Cl(3446,"p"),qx(3447,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),og(),Cl(3448,"p"),qx(3449,"Deve ser usado o sistema de "),Cl(3450,"strong"),qx(3451,"grid"),og(),qx(3452," do PO (1 ... 12 colunas)."),og(),Cl(3453,"blockquote")(3454,"p"),qx(3455,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Cl(3456,"code"),qx(3457,"offsetColumns"),og(),qx(3458,"."),og()()()(),Cl(3459,"tr",13)(3460,"td",14)(3461,"div",15)(3462,"span",16),qx(3463," onError"),Hl(3464,"br"),og()()(),Cl(3465,"td",17)(3466,"code",29),qx(3467,"Function"),og()(),Cl(3468,"td",20)(3469,"em")(3470,"strong"),qx(3471,"(opcional)"),og()(),Cl(3472,"p"),qx(3473,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),og(),Cl(3474,"blockquote")(3475,"p"),qx(3476,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Cl(3477,"code"),qx(3478,"HttpErrorResponse"),og(),qx(3479,"."),og()(),Cl(3480,"p")(3481,"strong"),qx(3482,"Componente compat\xEDvel"),og(),qx(3483,": "),Cl(3484,"code"),qx(3485,"po-upload"),og()()()(),Cl(3486,"tr",13)(3487,"td",14)(3488,"div",15)(3489,"span",16),qx(3490," onSuccess"),Hl(3491,"br"),og()()(),Cl(3492,"td",17)(3493,"code",29),qx(3494,"Function"),og()(),Cl(3495,"td",20)(3496,"em")(3497,"strong"),qx(3498,"(opcional)"),og()(),Cl(3499,"p"),qx(3500,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),og(),Cl(3501,"blockquote")(3502,"p"),qx(3503,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Cl(3504,"code"),qx(3505,"HttpResponse"),og(),qx(3506,"."),og()(),Cl(3507,"p")(3508,"strong"),qx(3509,"Componente compat\xEDvel"),og(),qx(3510,": "),Cl(3511,"code"),qx(3512,"po-upload"),og()()()(),Cl(3513,"tr",13)(3514,"td",14)(3515,"div",15)(3516,"span",16),qx(3517," onUpload"),Hl(3518,"br"),og()()(),Cl(3519,"td",17)(3520,"code",29),qx(3521,"Function"),og()(),Cl(3522,"td",20)(3523,"em")(3524,"strong"),qx(3525,"(opcional)"),og()(),Cl(3526,"p"),qx(3527,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),og(),Cl(3528,"pre")(3529,"code"),qx(3530,`event.data = {id: 'id do usu\xE1rio'};
`),og()(),Cl(3531,"p")(3532,"strong"),qx(3533,"Componente compat\xEDvel"),og(),qx(3534,": "),Cl(3535,"code"),qx(3536,"po-upload"),og()()()(),Cl(3537,"tr",13)(3538,"td",14)(3539,"div",15)(3540,"span",16),qx(3541," optional"),Hl(3542,"br"),og()()(),Cl(3543,"td",17)(3544,"code",28),qx(3545,"boolean"),og()(),Cl(3546,"td",20)(3547,"em")(3548,"strong"),qx(3549,"(opcional)"),og()(),Cl(3550,"p"),qx(3551,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(3552,"blockquote")(3553,"p"),qx(3554,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),og()(),Cl(3555,"ul")(3556,"li"),qx(3557,"O campo for "),Cl(3558,"code"),qx(3559,"required"),og(),qx(3560,", ou;"),og(),Cl(3561,"li"),qx(3562,"N\xE3o possuir "),Cl(3563,"code"),qx(3564,"help"),og(),qx(3565," e "),Cl(3566,"code"),qx(3567,"label"),og(),qx(3568,"."),og()(),Cl(3569,"p")(3570,"strong"),qx(3571,"Componentes compat\xEDveis:"),og(),Cl(3572,"code"),qx(3573,"po-datepicker"),og(),qx(3574,", "),Cl(3575,"code"),qx(3576,"po-datepicker-range"),og(),qx(3577,", "),Cl(3578,"code"),qx(3579,"po-timepicker"),og(),qx(3580,", "),Cl(3581,"code"),qx(3582,"po-input"),og(),qx(3583,", "),Cl(3584,"code"),qx(3585,"po-number"),og(),qx(3586,`,
`),Cl(3587,"code"),qx(3588,"po-decimal"),og(),qx(3589,", "),Cl(3590,"code"),qx(3591,"po-select"),og(),qx(3592,", "),Cl(3593,"code"),qx(3594,"po-radio-group"),og(),qx(3595,", "),Cl(3596,"code"),qx(3597,"po-combo"),og(),qx(3598,", "),Cl(3599,"code"),qx(3600,"po-lookup"),og(),qx(3601,", "),Cl(3602,"code"),qx(3603,"po-checkbox-group"),og(),qx(3604,", "),Cl(3605,"code"),qx(3606,"po-multiselect"),og(),qx(3607,`,
`),Cl(3608,"code"),qx(3609,"po-textarea"),og(),qx(3610,", "),Cl(3611,"code"),qx(3612,"po-password"),og(),qx(3613,"."),og()()(),Cl(3614,"tr",13)(3615,"td",14)(3616,"div",15)(3617,"span",16),qx(3618," options"),Hl(3619,"br"),og()()(),Cl(3620,"td",17)(3621,"code",32),qx(3622,"Array<string> "),og(),Cl(3623,"code",69),qx(3624," Array<PoSelectOption> "),og(),Cl(3625,"code",70),qx(3626," Array<PoMultiselectOption> "),og(),Cl(3627,"code",71),qx(3628," Array<PoCheckboxGroupOption> "),og(),Cl(3629,"code",72),qx(3630," Array<any>"),og()(),Cl(3631,"td",20)(3632,"em")(3633,"strong"),qx(3634,"(opcional)"),og()(),Cl(3635,"p"),qx(3636,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),og(),Cl(3637,"p")(3638,"strong"),qx(3639,"Componentes compat\xEDveis:"),og(),Cl(3640,"code"),qx(3641,"po-select"),og(),qx(3642,", "),Cl(3643,"code"),qx(3644,"po-radio-group"),og(),qx(3645,", "),Cl(3646,"code"),qx(3647,"po-checkbox-group"),og(),qx(3648,", "),Cl(3649,"code"),qx(3650,"po-multiselect"),og(),qx(3651,"."),og()()(),Cl(3652,"tr",13)(3653,"td",14)(3654,"div",15)(3655,"span",16),qx(3656," optionsMulti"),Hl(3657,"br"),og()()(),Cl(3658,"td",17)(3659,"code",28),qx(3660,"boolean"),og()(),Cl(3661,"td",20)(3662,"em")(3663,"strong"),qx(3664,"(opcional)"),og()(),Cl(3665,"p"),qx(3666,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),og()()(),Cl(3667,"tr",13)(3668,"td",14)(3669,"div",15)(3670,"span",16),qx(3671," optionsService"),Hl(3672,"br"),og()()(),Cl(3673,"td",17)(3674,"code",18),qx(3675,"string "),og(),Cl(3676,"code",73),qx(3677," PoComboFilter "),og(),Cl(3678,"code",74),qx(3679," PoMultiselectFilter"),og()(),Cl(3680,"td",20)(3681,"em")(3682,"strong"),qx(3683,"(opcional)"),og()(),Cl(3684,"p"),qx(3685,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Cl(3686,"strong"),qx(3687,"Importante"),og()(),Cl(3688,"blockquote")(3689,"p"),qx(3690,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Cl(3691,"a",75),qx(3692,"guia de API do PO UI"),og(),qx(3693,"."),og()()()(),Cl(3694,"tr",13)(3695,"td",14)(3696,"div",15)(3697,"span",16),qx(3698," order"),Hl(3699,"br"),og()()(),Cl(3700,"td",17)(3701,"code",41),qx(3702,"number"),og()(),Cl(3703,"td",20)(3704,"em")(3705,"strong"),qx(3706,"(opcional)"),og()(),Cl(3707,"p"),qx(3708,"Informa a ordem de exibi\xE7\xE3o do campo."),og(),Cl(3709,"p"),qx(3710,"Exemplo de utiliza\xE7\xE3o:"),og(),Cl(3711,"p")(3712,"code"),qx(3713,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),og()(),Cl(3714,"p"),qx(3715,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Cl(3716,"code"),qx(3717,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),og()(),Cl(3718,"p"),qx(3719,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),og(),Cl(3720,"p"),qx(3721,"Campos sem "),Cl(3722,"code"),qx(3723,"order"),og(),qx(3724,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),og()()(),Cl(3725,"tr",13)(3726,"td",14)(3727,"div",15)(3728,"span",16),qx(3729," params"),Hl(3730,"br"),og()()(),Cl(3731,"td",17)(3732,"code",33),qx(3733,"any"),og()(),Cl(3734,"td",20)(3735,"em")(3736,"strong"),qx(3737,"(opcional)"),og()(),Cl(3738,"p"),qx(3739,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),Cl(3740,"code"),qx(3741,"po-lookup"),og(),qx(3742,` e
`),Cl(3743,"code"),qx(3744,"po-combo"),og(),qx(3745,"."),og(),Cl(3746,"p"),qx(3747,"Por exemplo, para o par\xE2metro "),Cl(3748,"code"),qx(3749,"{ age: 23 }"),og(),qx(3750," a URL da requisi\xE7\xE3o ficaria:"),og(),Cl(3751,"p")(3752,"code"),qx(3753,"url + ?age=23&filter=Peter"),og()()()(),Cl(3754,"tr",13)(3755,"td",14)(3756,"div",15)(3757,"span",16),qx(3758," pattern"),Hl(3759,"br"),og()()(),Cl(3760,"td",17)(3761,"code",18),qx(3762,"string"),og()(),Cl(3763,"td",20)(3764,"em")(3765,"strong"),qx(3766,"(opcional)"),og()(),Cl(3767,"p"),qx(3768,"Regex para valida\xE7\xE3o do campo."),og(),Cl(3769,"p")(3770,"strong"),qx(3771,"Componentes compat\xEDveis:"),og(),Cl(3772,"code"),qx(3773,"po-input"),og(),qx(3774,", "),Cl(3775,"code"),qx(3776,"po-password"),og(),qx(3777,"."),og()()(),Cl(3778,"tr",13)(3779,"td",14)(3780,"div",15)(3781,"span",16),qx(3782," placeholder"),Hl(3783,"br"),og()()(),Cl(3784,"td",17)(3785,"code",18),qx(3786,"string"),og()(),Cl(3787,"td",20)(3788,"em")(3789,"strong"),qx(3790,"(opcional)"),og()(),Cl(3791,"p"),qx(3792,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),og(),Cl(3793,"p")(3794,"strong"),qx(3795,"Componentes compat\xEDveis:"),og(),Cl(3796,"code"),qx(3797,"po-datepicker"),og(),qx(3798,", "),Cl(3799,"code"),qx(3800,"po-datepicker-range"),og(),qx(3801,", "),Cl(3802,"code"),qx(3803,"po-timepicker"),og(),qx(3804,", "),Cl(3805,"code"),qx(3806,"po-input"),og(),qx(3807,", "),Cl(3808,"code"),qx(3809,"po-number"),og(),qx(3810,", "),Cl(3811,"code"),qx(3812,"po-decimal"),og(),qx(3813,", "),Cl(3814,"code"),qx(3815,"po-select"),og(),qx(3816,", "),Cl(3817,"code"),qx(3818,"po-combo"),og(),qx(3819,", "),Cl(3820,"code"),qx(3821,"po-lookup"),og(),qx(3822,", "),Cl(3823,"code"),qx(3824,"po-multiselect"),og(),qx(3825,", "),Cl(3826,"code"),qx(3827,"po-textarea"),og(),qx(3828,", "),Cl(3829,"code"),qx(3830,"po-password"),og(),qx(3831,"."),og()()(),Cl(3832,"tr",13)(3833,"td",14)(3834,"div",15)(3835,"span",16),qx(3836," placeholderSearch"),Hl(3837,"br"),og()()(),Cl(3838,"td",17)(3839,"code",18),qx(3840,"string"),og()(),Cl(3841,"td",20)(3842,"em")(3843,"strong"),qx(3844,"(opcional)"),og()(),Cl(3845,"p"),qx(3846,"Placeholder do campo de pesquisa do "),Cl(3847,"code"),qx(3848,"po-multiselect"),og(),qx(3849,"."),og(),Cl(3850,"blockquote")(3851,"p"),qx(3852,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),og()()()(),Cl(3853,"tr",13)(3854,"td",14)(3855,"div",15)(3856,"span",16),qx(3857," property"),Hl(3858,"br"),og()()(),Cl(3859,"td",17)(3860,"code",18),qx(3861,"string"),og()(),Cl(3862,"td",20)(3863,"p"),qx(3864,"Nome de refer\xEAncia do campo."),og()()(),Cl(3865,"tr",13)(3866,"td",14)(3867,"div",15)(3868,"span",16),qx(3869," range"),Hl(3870,"br"),og()()(),Cl(3871,"td",17)(3872,"code",28),qx(3873,"boolean"),og()(),Cl(3874,"td",20)(3875,"em")(3876,"strong"),qx(3877,"(opcional)"),og()(),Cl(3878,"p"),qx(3879,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),og(),Cl(3880,"blockquote")(3881,"p"),qx(3882,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),og()()()(),Cl(3883,"tr",13)(3884,"td",14)(3885,"div",15)(3886,"span",16),qx(3887," rangePresetOptions"),Hl(3888,"br"),og()()(),Cl(3889,"td",17)(3890,"code",76),qx(3891,"Array<PoCalendarRangePreset>"),og()(),Cl(3892,"td",20)(3893,"em")(3894,"strong"),qx(3895,"(opcional)"),og()(),Cl(3896,"p"),qx(3897,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),og(),Cl(3898,"p"),qx(3899,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Cl(3900,"code"),qx(3901,"PoCalendarRangePreset"),og(),qx(3902,"."),og(),Cl(3903,"p")(3904,"strong"),qx(3905,"Componente compat\xEDvel:"),og(),Cl(3906,"code"),qx(3907,"po-datepicker-range"),og()()()(),Cl(3908,"tr",13)(3909,"td",14)(3910,"div",15)(3911,"span",16),qx(3912," rangePresets"),Hl(3913,"br"),og()()(),Cl(3914,"td",17)(3915,"code",28),qx(3916,"boolean "),og(),Cl(3917,"code",32),qx(3918," Array<string>"),og()(),Cl(3919,"td",20)(3920,"em")(3921,"strong"),qx(3922,"(opcional)"),og()(),Cl(3923,"p"),qx(3924,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),og(),Cl(3925,"p"),qx(3926,"Aceita os seguintes valores:"),og(),Cl(3927,"ul")(3928,"li")(3929,"code"),qx(3930,"true"),og(),qx(3931,": exibe todos os presets padr\xE3o."),og(),Cl(3932,"li")(3933,"code"),qx(3934,"false"),og(),qx(3935,": n\xE3o exibe os presets padr\xE3o."),og(),Cl(3936,"li")(3937,"code"),qx(3938,"Array<string>"),og(),qx(3939,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),og()(),Cl(3940,"p")(3941,"strong"),qx(3942,"Componente compat\xEDvel:"),og(),Cl(3943,"code"),qx(3944,"po-datepicker-range"),og()()()(),Cl(3945,"tr",13)(3946,"td",14)(3947,"div",15)(3948,"span",16),qx(3949," rangePresetsOrder"),Hl(3950,"br"),og()()(),Cl(3951,"td",17)(3952,"code",77),qx(3953,"'asc' "),og(),Cl(3954,"code",78),qx(3955," 'desc'"),og()(),Cl(3956,"td",20)(3957,"em")(3958,"strong"),qx(3959,"(opcional)"),og()(),Cl(3960,"p"),qx(3961,"Define a ordena\xE7\xE3o dos presets na lista."),og(),Cl(3962,"p"),qx(3963,"Valores aceitos:"),og(),Cl(3964,"ul")(3965,"li")(3966,"code"),qx(3967,"'asc'"),og(),qx(3968,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),og(),Cl(3969,"li")(3970,"code"),qx(3971,"'desc'"),og(),qx(3972,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),og()(),Cl(3973,"p")(3974,"strong"),qx(3975,"Componente compat\xEDvel:"),og(),Cl(3976,"code"),qx(3977,"po-datepicker-range"),og()()()(),Cl(3978,"tr",13)(3979,"td",14)(3980,"div",15)(3981,"span",16),qx(3982," readonly"),Hl(3983,"br"),og()()(),Cl(3984,"td",17)(3985,"code",28),qx(3986,"boolean"),og()(),Cl(3987,"td",20)(3988,"em")(3989,"strong"),qx(3990,"(opcional)"),og()(),Cl(3991,"p"),qx(3992,"Indica que o campo ser\xE1 somente leitura."),og(),Cl(3993,"p")(3994,"strong"),qx(3995,"Componentes compat\xEDveis:"),og(),Cl(3996,"code"),qx(3997,"po-datepicker"),og(),qx(3998,", "),Cl(3999,"code"),qx(4e3,"po-datepicker-range"),og(),qx(4001,", "),Cl(4002,"code"),qx(4003,"po-timepicker"),og(),qx(4004,", "),Cl(4005,"code"),qx(4006,"po-input"),og(),qx(4007,", "),Cl(4008,"code"),qx(4009,"po-number"),og(),qx(4010,`,
`),Cl(4011,"code"),qx(4012,"po-decimal"),og(),qx(4013,", "),Cl(4014,"code"),qx(4015,"po-select"),og(),qx(4016,", "),Cl(4017,"code"),qx(4018,"po-textarea"),og(),qx(4019,", "),Cl(4020,"code"),qx(4021,"po-password"),og(),qx(4022,"."),og()()(),Cl(4023,"tr",13)(4024,"td",14)(4025,"div",15)(4026,"span",16),qx(4027," removeInitialFilter"),Hl(4028,"br"),og()()(),Cl(4029,"td",17)(4030,"code",28),qx(4031,"boolean"),og()(),Cl(4032,"td",20)(4033,"em")(4034,"strong"),qx(4035,"(opcional)"),og()(),Cl(4036,"p"),qx(4037,"Define que o filtro no primeiro clique ser\xE1 removido."),og(),Cl(4038,"blockquote")(4039,"p"),qx(4040,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),og()(),Cl(4041,"p")(4042,"strong"),qx(4043,"Componente compat\xEDvel"),og(),qx(4044,": "),Cl(4045,"code"),qx(4046,"po-combo"),og()()()(),Cl(4047,"tr",13)(4048,"td",14)(4049,"div",15)(4050,"span",16),qx(4051," required"),Hl(4052,"br"),og()()(),Cl(4053,"td",17)(4054,"code",28),qx(4055,"boolean"),og()(),Cl(4056,"td",20)(4057,"em")(4058,"strong"),qx(4059,"(opcional)"),og()(),Cl(4060,"p"),qx(4061,"Define a obrigatoriedade do campo."),og(),Cl(4062,"p")(4063,"strong"),qx(4064,"Componentes compat\xEDveis:"),og(),Cl(4065,"code"),qx(4066,"po-datepicker"),og(),qx(4067,", "),Cl(4068,"code"),qx(4069,"po-datepicker-range"),og(),qx(4070,", "),Cl(4071,"code"),qx(4072,"po-timepicker"),og(),qx(4073,", "),Cl(4074,"code"),qx(4075,"po-input"),og(),qx(4076,", "),Cl(4077,"code"),qx(4078,"po-number"),og(),qx(4079,`,
`),Cl(4080,"code"),qx(4081,"po-decimal"),og(),qx(4082,", "),Cl(4083,"code"),qx(4084,"po-select"),og(),qx(4085,", "),Cl(4086,"code"),qx(4087,"po-radio-group"),og(),qx(4088,", "),Cl(4089,"code"),qx(4090,"po-combo"),og(),qx(4091,", "),Cl(4092,"code"),qx(4093,"po-lookup"),og(),qx(4094,", "),Cl(4095,"code"),qx(4096,"po-checkbox-group"),og(),qx(4097,", "),Cl(4098,"code"),qx(4099,"po-multiselect"),og(),qx(4100,`,
`),Cl(4101,"code"),qx(4102,"po-textarea"),og(),qx(4103,", "),Cl(4104,"code"),qx(4105,"po-password``, "),og(),qx(4106,"po-upload`."),og()()(),Cl(4107,"tr",13)(4108,"td",14)(4109,"div",15)(4110,"span",16),qx(4111," requiredFieldErrorMessage"),Hl(4112,"br"),og()()(),Cl(4113,"td",17)(4114,"code",28),qx(4115,"boolean"),og()(),Cl(4116,"td",20)(4117,"em")(4118,"strong"),qx(4119,"(opcional)"),og()(),Cl(4120,"p"),qx(4121,"Exibe a mensagem setada na propriedade "),Cl(4122,"code"),qx(4123,"errorMessage"),og(),qx(4124," se o campo estiver vazio e for requerido."),og(),Cl(4125,"blockquote")(4126,"p"),qx(4127,"Necess\xE1rio que a propriedade "),Cl(4128,"code"),qx(4129,"required"),og(),qx(4130," esteja habilitada."),og()(),Cl(4131,"p")(4132,"strong"),qx(4133,"Componentes compat\xEDveis:"),og(),Cl(4134,"code"),qx(4135,"po-datepicker"),og(),qx(4136,", "),Cl(4137,"code"),qx(4138,"po-timepicker"),og(),qx(4139,", "),Cl(4140,"code"),qx(4141,"po-input"),og(),qx(4142,", "),Cl(4143,"code"),qx(4144,"po-number"),og(),qx(4145,", "),Cl(4146,"code"),qx(4147,"po-decimal"),og(),qx(4148,", "),Cl(4149,"code"),qx(4150,"po-password"),og(),qx(4151,"."),og()()(),Cl(4152,"tr",13)(4153,"td",14)(4154,"div",15)(4155,"span",16),qx(4156," restrictions"),Hl(4157,"br"),og()()(),Cl(4158,"td",17)(4159,"code",79),qx(4160,"PoUploadFileRestrictions"),og()(),Cl(4161,"td",20)(4162,"em")(4163,"strong"),qx(4164,"(opcional)"),og()(),Cl(4165,"p"),qx(4166,"Objeto que segue a defini\xE7\xE3o da interface "),Cl(4167,"code"),qx(4168,"PoUploadFileRestrictions"),og(),qx(4169,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),og(),Cl(4170,"p")(4171,"strong"),qx(4172,"Componente compat\xEDvel"),og(),qx(4173,": "),Cl(4174,"code"),qx(4175,"po-upload"),og()()()(),Cl(4176,"tr",13)(4177,"td",14)(4178,"div",15)(4179,"span",16),qx(4180," rows"),Hl(4181,"br"),og()()(),Cl(4182,"td",17)(4183,"code",41),qx(4184,"number"),og()(),Cl(4185,"td",20)(4186,"em")(4187,"strong"),qx(4188,"(opcional)"),og()(),Cl(4189,"p"),qx(4190,"Quantidade de linhas exibidas no "),Cl(4191,"code"),qx(4192,"po-textarea"),og(),qx(4193,"."),og()()(),Cl(4194,"tr",13)(4195,"td",14)(4196,"div",15)(4197,"span",16),qx(4198," searchService"),Hl(4199,"br"),og()()(),Cl(4200,"td",17)(4201,"code",18),qx(4202,"string "),og(),Cl(4203,"code",80),qx(4204," PoLookupFilter"),og()(),Cl(4205,"td",20)(4206,"em")(4207,"strong"),qx(4208,"(opcional)"),og()(),Cl(4209,"p"),qx(4210,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),Cl(4211,"code"),qx(4212,"columns"),og(),qx(4213,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Cl(4214,"strong"),qx(4215,"Importante:"),og()(),Cl(4216,"blockquote")(4217,"p"),qx(4218,"Caso utilizar a propriedade "),Cl(4219,"code"),qx(4220,"optionsService"),og(),qx(4221,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Cl(4222,"a",75),qx(4223,"guia de API do PO UI"),og(),qx(4224,"."),og()()()(),Cl(4225,"tr",13)(4226,"td",14)(4227,"div",15)(4228,"span",16),qx(4229," secondInterval"),Hl(4230,"br"),og()()(),Cl(4231,"td",17)(4232,"code",41),qx(4233,"number"),og()(),Cl(4234,"td",20)(4235,"em")(4236,"strong"),qx(4237,"(opcional)"),og()(),Cl(4238,"p"),qx(4239,"Define o intervalo entre os segundos exibidos no painel do timepicker."),og()()(),Cl(4240,"tr",13)(4241,"td",14)(4242,"div",15)(4243,"span",16),qx(4244," secret"),Hl(4245,"br"),og()()(),Cl(4246,"td",17)(4247,"code",28),qx(4248,"boolean"),og()(),Cl(4249,"td",20)(4250,"em")(4251,"strong"),qx(4252,"(opcional)"),og()(),Cl(4253,"p"),qx(4254,"Esconde a informa\xE7\xE3o estilo "),Cl(4255,"em"),qx(4256,"password"),og(),qx(4257,", pode ser utilizado quando o tipo de dado for "),Cl(4258,"em"),qx(4259,"string"),og(),qx(4260,"."),og()()(),Cl(4261,"tr",13)(4262,"td",14)(4263,"div",15)(4264,"span",16),qx(4265," showRequired"),Hl(4266,"br"),og()()(),Cl(4267,"td",17)(4268,"code",28),qx(4269,"boolean"),og()(),Cl(4270,"td",20)(4271,"em")(4272,"strong"),qx(4273,"(opcional)"),og()(),Cl(4274,"p"),qx(4275,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(4276,"blockquote")(4277,"p"),qx(4278,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(4279,"ul")(4280,"li"),qx(4281,"N\xE3o possuir "),Cl(4282,"code"),qx(4283,"p-help"),og(),qx(4284," e/ou "),Cl(4285,"code"),qx(4286,"p-label"),og(),qx(4287,"."),og()(),Cl(4288,"p")(4289,"strong"),qx(4290,"Componentes compat\xEDveis:"),og(),Cl(4291,"code"),qx(4292,"po-datepicker"),og(),qx(4293,", "),Cl(4294,"code"),qx(4295,"po-datepicker-range"),og(),qx(4296,", "),Cl(4297,"code"),qx(4298,"po-timepicker"),og(),qx(4299,", "),Cl(4300,"code"),qx(4301,"po-input"),og(),qx(4302,", "),Cl(4303,"code"),qx(4304,"po-number"),og(),qx(4305,`,
`),Cl(4306,"code"),qx(4307,"po-decimal"),og(),qx(4308,", "),Cl(4309,"code"),qx(4310,"po-select"),og(),qx(4311,", "),Cl(4312,"code"),qx(4313,"po-radio-group"),og(),qx(4314,", "),Cl(4315,"code"),qx(4316,"po-combo"),og(),qx(4317,", "),Cl(4318,"code"),qx(4319,"po-lookup"),og(),qx(4320,", "),Cl(4321,"code"),qx(4322,"po-checkbox-group"),og(),qx(4323,", "),Cl(4324,"code"),qx(4325,"po-multiselect"),og(),qx(4326,`,
`),Cl(4327,"code"),qx(4328,"po-textarea"),og(),qx(4329,", "),Cl(4330,"code"),qx(4331,"po-password"),og(),qx(4332,", "),Cl(4333,"code"),qx(4334,"po-upload"),og(),qx(4335,"."),og()()(),Cl(4336,"tr",13)(4337,"td",14)(4338,"div",15)(4339,"span",16),qx(4340," showSeconds"),Hl(4341,"br"),og()()(),Cl(4342,"td",17)(4343,"code",28),qx(4344,"boolean"),og()(),Cl(4345,"td",20)(4346,"em")(4347,"strong"),qx(4348,"(opcional)"),og()(),Cl(4349,"p"),qx(4350,"Exibe a coluna de segundos no painel do timepicker."),og()()(),Cl(4351,"tr",13)(4352,"td",14)(4353,"div",15)(4354,"span",16),qx(4355," showThumbnail"),Hl(4356,"br"),og()()(),Cl(4357,"td",17)(4358,"code",28),qx(4359,"boolean"),og()(),Cl(4360,"td",20)(4361,"em")(4362,"strong"),qx(4363,"(opcional)"),og()(),Cl(4364,"p"),qx(4365,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),og(),Cl(4366,"blockquote")(4367,"p"),qx(4368,"Propriedade funciona apenas em arquivos de formato de imagem ("),Cl(4369,"code"),qx(4370,".png"),og(),qx(4371,", "),Cl(4372,"code"),qx(4373,".jpg"),og(),qx(4374,", "),Cl(4375,"code"),qx(4376,".jpeg"),og(),qx(4377," e "),Cl(4378,"code"),qx(4379,".gif"),og(),qx(4380,")."),og()(),Cl(4381,"p")(4382,"strong"),qx(4383,"Componente compat\xEDvel"),og(),qx(4384,": "),Cl(4385,"code"),qx(4386,"po-upload"),og()()()(),Cl(4387,"tr",13)(4388,"td",14)(4389,"div",15)(4390,"span",16),qx(4391," size"),Hl(4392,"br"),og()()(),Cl(4393,"td",17)(4394,"code",18),qx(4395,"string"),og()(),Cl(4396,"td",20)(4397,"em")(4398,"strong"),qx(4399,"(opcional)"),og()(),Cl(4400,"p"),qx(4401,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),og(),Cl(4402,"ul")(4403,"li")(4404,"code"),qx(4405,"small"),og(),qx(4406,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(4407,"li")(4408,"code"),qx(4409,"medium"),og(),qx(4410,": aplica a medida medium de cada componente."),og(),Cl(4411,"li")(4412,"code"),qx(4413,"large"),og(),qx(4414,": aplica a medida large de cada componente (dispon\xEDvel para "),Cl(4415,"code"),qx(4416,"po-checkbox"),og(),qx(4417," e "),Cl(4418,"code"),qx(4419,"po-radio-group"),og(),qx(4420,")."),Cl(4421,"blockquote")(4422,"p"),qx(4423,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(4424,"code"),qx(4425,"medium"),og(),qx(4426,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(4427,"a",21),qx(4428,"po-theme"),og(),qx(4429,"."),og()()()()()(),Cl(4430,"tr",13)(4431,"td",14)(4432,"div",15)(4433,"span",16),qx(4434," sort"),Hl(4435,"br"),og()()(),Cl(4436,"td",17)(4437,"code",28),qx(4438,"boolean"),og()(),Cl(4439,"td",20)(4440,"em")(4441,"strong"),qx(4442,"(opcional)"),og()(),Cl(4443,"p"),qx(4444,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),og(),Cl(4445,"p")(4446,"strong"),qx(4447,"Componentes compat\xEDveis:"),og(),Cl(4448,"code"),qx(4449,"po-combo"),og(),qx(4450,", po-multiselect"),og()()(),Cl(4451,"tr",13)(4452,"td",14)(4453,"div",15)(4454,"span",16),qx(4455," step"),Hl(4456,"br"),og()()(),Cl(4457,"td",17)(4458,"code",41),qx(4459,"number"),og()(),Cl(4460,"td",20)(4461,"em")(4462,"strong"),qx(4463,"(opcional)"),og()(),Cl(4464,"p"),qx(4465,"Intervalo utilizado no "),Cl(4466,"code"),qx(4467,"po-number"),og(),qx(4468,"."),og()()(),Cl(4469,"tr",13)(4470,"td",14)(4471,"div",15)(4472,"span",16),qx(4473," thousandMaxlength"),Hl(4474,"br"),og()()(),Cl(4475,"td",17)(4476,"code",41),qx(4477,"number"),og()(),Cl(4478,"td",20)(4479,"em")(4480,"strong"),qx(4481,"(opcional)"),og()(),Cl(4482,"p"),qx(4483,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),og(),Cl(4484,"blockquote")(4485,"p"),qx(4486,"Esta propriedade s\xF3 pode ser utilizada quando o "),Cl(4487,"code"),qx(4488,"type"),og(),qx(4489," for "),Cl(4490,"em"),qx(4491,"currency"),og(),qx(4492," ou "),Cl(4493,"em"),qx(4494,"decimal"),og(),qx(4495,"."),og()()()(),Cl(4496,"tr",13)(4497,"td",14)(4498,"div",15)(4499,"span",16),qx(4500," type"),Hl(4501,"br"),og()()(),Cl(4502,"td",17)(4503,"code",18),qx(4504,"string "),og(),Cl(4505,"code",81),qx(4506," PoDynamicFieldType"),og()(),Cl(4507,"td",20)(4508,"em")(4509,"strong"),qx(4510,"(opcional)"),og()(),Cl(4511,"p"),qx(4512,"Tipo do valor campo."),og(),Cl(4513,"p"),qx(4514,"Valores v\xE1lidos:"),og(),Cl(4515,"ul")(4516,"li")(4517,"code"),qx(4518,"boolean"),og(),qx(4519,": Valores "),Cl(4520,"em"),qx(4521,"booleanos"),og(),qx(4522,"."),og(),Cl(4523,"li")(4524,"code"),qx(4525,"currency"),og(),qx(4526,": Valores monet\xE1rios."),og(),Cl(4527,"li")(4528,"code"),qx(4529,"decimal"),og(),qx(4530,": Valores decimais."),og(),Cl(4531,"li")(4532,"code"),qx(4533,"date"),og(),qx(4534,": Valores de datas."),Cl(4535,"ul")(4536,"li"),qx(4537,"Aceita os tipos "),Cl(4538,"strong"),qx(4539,"string"),og(),qx(4540," e "),Cl(4541,"strong"),qx(4542,"Date"),og(),qx(4543,` padr\xE3o do Javascript,
por exemplo: `),Cl(4544,"code"),qx(4545,"'2017-11-28'"),og(),qx(4546," ou "),Cl(4547,"code"),qx(4548,"new Date(2017, 10, 28)"),og(),qx(4549,"."),og()()(),Cl(4550,"li")(4551,"code"),qx(4552,"dateTime"),og(),qx(4553,": Valor de data com hor\xE1rio."),Cl(4554,"ul")(4555,"li"),qx(4556,"Aceita o tipo "),Cl(4557,"em"),qx(4558,"string"),og(),qx(4559," no formato "),Cl(4560,"strong"),qx(4561,"ISO-8601"),og(),qx(4562," extendido "),Cl(4563,"strong"),qx(4564,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),og(),qx(4565,`
e o tipo `),Cl(4566,"strong"),qx(4567,"Date"),og(),qx(4568," padr\xE3o do Javascript, por exemplo: "),Cl(4569,"code"),qx(4570,"'2017-11-28T00:00:00-02:00'"),og(),qx(4571," ou "),Cl(4572,"code"),qx(4573,"new Date(2017, 10, 28)"),og(),qx(4574,"."),og()()(),Cl(4575,"li")(4576,"code"),qx(4577,"number"),og(),qx(4578,": Valores num\xE9ricos."),og(),Cl(4579,"li")(4580,"code"),qx(4581,"string"),og(),qx(4582,": Textos."),og(),Cl(4583,"li")(4584,"code"),qx(4585,"time"),og(),qx(4586,": Valor do hor\xE1rio."),Cl(4587,"ul")(4588,"li"),qx(4589,"Aceita o tipo "),Cl(4590,"strong"),qx(4591,"string"),og(),qx(4592," nos formatos "),Cl(4593,"strong"),qx(4594,"'HH:mm:ss'"),og(),qx(4595," ou "),Cl(4596,"strong"),qx(4597,"'HH:mm:ss.ffffff'"),og(),qx(4598,", por exemplo: "),Cl(4599,"code"),qx(4600,"'23:12:45'"),og(),qx(4601,"."),og()()()()()(),Cl(4602,"tr",13)(4603,"td",14)(4604,"div",15)(4605,"span",16),qx(4606," url"),Hl(4607,"br"),og()()(),Cl(4608,"td",17)(4609,"code",18),qx(4610,"string"),og()(),Cl(4611,"td",20)(4612,"em")(4613,"strong"),qx(4614,"(opcional)"),og()(),Cl(4615,"p"),qx(4616,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),og(),Cl(4617,"p")(4618,"strong"),qx(4619,"Componente compat\xEDvel"),og(),qx(4620,": "),Cl(4621,"code"),qx(4622,"po-upload"),og()()()(),Cl(4623,"tr",13)(4624,"td",14)(4625,"div",15)(4626,"span",16),qx(4627," validate"),Hl(4628,"br"),og()()(),Cl(4629,"td",17)(4630,"code",18),qx(4631,"string "),og(),Cl(4632,"code",29),qx(4633," Function"),og()(),Cl(4634,"td",20)(4635,"em")(4636,"strong"),qx(4637,"(opcional)"),og()(),Cl(4638,"p"),qx(4639,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Cl(4640,"strong"),qx(4641,"mudan\xE7as do campo"),og(),qx(4642,"."),og(),Cl(4643,"ul")(4644,"li"),qx(4645,"A propriedade aceita os seguintes tipos:"),og()(),Cl(4646,"ul")(4647,"li")(4648,"strong"),qx(4649,"String"),og(),qx(4650,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Cl(4651,"code"),qx(4652,"POST"),og(),qx(4653,"."),og(),Cl(4654,"li")(4655,"strong"),qx(4656,"Function"),og(),qx(4657,": M\xE9todo que ser\xE1 executado."),og()(),Cl(4658,"p"),qx(4659,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Cl(4660,"code"),qx(4661,"PoDynamicFormFieldChanged"),og(),qx(4662,":"),og(),Cl(4663,"p")(4664,"code"),qx(4665,"{ property: 'property name', value: 'new value' }"),og()(),Cl(4666,"p"),qx(4667,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Cl(4668,"a",82),qx(4669,"PoDynamicFormFieldValidation"),og(),qx(4670,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),og(),Cl(4671,"pre")(4672,"code"),qx(4673,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),og()(),Cl(4674,"p"),qx(4675,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Cl(4676,"code"),qx(4677,"bind"),og(),qx(4678,`, por exemplo:
`),Cl(4679,"code"),qx(4680,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),og()()()(),Cl(4681,"tr",13)(4682,"td",14)(4683,"div",15)(4684,"span",16),qx(4685," visible"),Hl(4686,"br"),og()()(),Cl(4687,"td",17)(4688,"code",28),qx(4689,"boolean"),og()(),Cl(4690,"td",20)(4691,"em")(4692,"strong"),qx(4693,"(opcional)"),og()(),Cl(4694,"p"),qx(4695,"Indica se o campo ser\xE1 vis\xEDvel."),og()()(),Cl(4696,"tr",13)(4697,"td",14)(4698,"div",15)(4699,"span",16),qx(4700," yearRangeLimit"),Hl(4701,"br"),og()()(),Cl(4702,"td",17)(4703,"code",41),qx(4704,"number"),og()(),Cl(4705,"td",20)(4706,"em")(4707,"strong"),qx(4708,"(opcional)"),og()(),Cl(4709,"p"),qx(4710,"Define o limite de anos exibidos na lista de anos do "),Cl(4711,"code"),qx(4712,"po-datepicker"),og(),qx(4713," nos modos "),Cl(4714,"code"),qx(4715,"month-year"),og(),qx(4716," e "),Cl(4717,"code"),qx(4718,"year"),og(),qx(4719,"."),og()()()(),Cl(4720,"h4",38)(4721,"code",5),qx(4722,"PoDynamicFormLoad"),og()(),Cl(4723,"div",2)(4724,"p"),Hl(4725,"a",83),og(),Cl(4726,"p"),qx(4727,"Estrutura de retorno no carregamento do formul\xE1rio."),og()(),Cl(4728,"h4",9),qx(4729,"Propriedades"),og(),Cl(4730,"table",10)(4731,"tr",11)(4732,"th",12),qx(4733,"Nome"),og(),Cl(4734,"th",12),qx(4735,"Tipo"),og(),Cl(4736,"th",12),qx(4737,"Descri\xE7\xE3o"),og()(),Cl(4738,"tr",13)(4739,"td",14)(4740,"div",15)(4741,"span",16),qx(4742," fields"),Hl(4743,"br"),og()()(),Cl(4744,"td",17)(4745,"code",22),qx(4746,"Array<PoDynamicFormField>"),og()(),Cl(4747,"td",20)(4748,"em")(4749,"strong"),qx(4750,"(opcional)"),og()(),Cl(4751,"p"),qx(4752,"Lista com as novas defini\xE7\xF5es dos campos."),og(),Cl(4753,"blockquote")(4754,"p"),qx(4755,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),og()()()(),Cl(4756,"tr",13)(4757,"td",14)(4758,"div",15)(4759,"span",16),qx(4760," focus"),Hl(4761,"br"),og()()(),Cl(4762,"td",17)(4763,"code",18),qx(4764,"string"),og()(),Cl(4765,"td",20)(4766,"em")(4767,"strong"),qx(4768,"(opcional)"),og()(),Cl(4769,"p"),qx(4770,"Nome do campo que receber\xE1 o foco."),og(),Cl(4771,"p"),qx(4772,"Exemplo:"),og(),Cl(4773,"pre")(4774,"code"),qx(4775,`focus: 'name'
`),og()()()(),Cl(4776,"tr",13)(4777,"td",14)(4778,"div",15)(4779,"span",16),qx(4780," value"),Hl(4781,"br"),og()()(),Cl(4782,"td",17)(4783,"code",33),qx(4784,"any"),og()(),Cl(4785,"td",20)(4786,"em")(4787,"strong"),qx(4788,"(opcional)"),og()(),Cl(4789,"p"),qx(4790,"Objeto contendo os novos valores."),og(),Cl(4791,"p"),qx(4792,"Exemplo:"),og(),Cl(4793,"pre")(4794,"code"),qx(4795,`{
  name: 'new name',
  age: 10
}
`),og()(),Cl(4796,"blockquote")(4797,"p"),qx(4798,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),og()()()()(),Cl(4799,"h4",38)(4800,"code",5),qx(4801,"PoDynamicFormFieldChanged"),og()(),Cl(4802,"div",2)(4803,"p"),qx(4804,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),og()(),Cl(4805,"h4",9),qx(4806,"Propriedades"),og(),Cl(4807,"table",10)(4808,"tr",11)(4809,"th",12),qx(4810,"Nome"),og(),Cl(4811,"th",12),qx(4812,"Tipo"),og(),Cl(4813,"th",12),qx(4814,"Descri\xE7\xE3o"),og()(),Cl(4815,"tr",13)(4816,"td",14)(4817,"div",15)(4818,"span",16),qx(4819," property"),Hl(4820,"br"),og()()(),Cl(4821,"td",17)(4822,"code",18),qx(4823,"string"),og()(),Cl(4824,"td",20)(4825,"p"),qx(4826,"Valor da propriedade do campo."),og()()(),Cl(4827,"tr",13)(4828,"td",14)(4829,"div",15)(4830,"span",16),qx(4831," value"),Hl(4832,"br"),og()()(),Cl(4833,"td",17)(4834,"code",33),qx(4835,"any"),og()(),Cl(4836,"td",20)(4837,"p"),qx(4838,"Novo valor do campo."),og()()()(),Cl(4839,"h4",38)(4840,"code",5),qx(4841,"PoDynamicFormFieldValidation"),og()(),Cl(4842,"div",2)(4843,"p"),Hl(4844,"a",84),og(),Cl(4845,"p"),qx(4846,"Estrutura de retorno da valida\xE7\xE3o de um campo."),og()(),Cl(4847,"h4",9),qx(4848,"Propriedades"),og(),Cl(4849,"table",10)(4850,"tr",11)(4851,"th",12),qx(4852,"Nome"),og(),Cl(4853,"th",12),qx(4854,"Tipo"),og(),Cl(4855,"th",12),qx(4856,"Descri\xE7\xE3o"),og()(),Cl(4857,"tr",13)(4858,"td",14)(4859,"div",15)(4860,"span",16),qx(4861," field"),Hl(4862,"br"),og()()(),Cl(4863,"td",17)(4864,"code",85),qx(4865,"PoDynamicFormField"),og()(),Cl(4866,"td",20)(4867,"em")(4868,"strong"),qx(4869,"(opcional)"),og()(),Cl(4870,"p"),qx(4871,"Novas defini\xE7\xF5es das propriedades do campo."),og(),Cl(4872,"blockquote")(4873,"p"),qx(4874,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),og()()()(),Cl(4875,"tr",13)(4876,"td",14)(4877,"div",15)(4878,"span",16),qx(4879," focus"),Hl(4880,"br"),og()()(),Cl(4881,"td",17)(4882,"code",28),qx(4883,"boolean"),og()(),Cl(4884,"td",20)(4885,"em")(4886,"strong"),qx(4887,"(opcional)"),og()(),Cl(4888,"p"),qx(4889,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),og()()(),Cl(4890,"tr",13)(4891,"td",14)(4892,"div",15)(4893,"span",16),qx(4894," value"),Hl(4895,"br"),og()()(),Cl(4896,"td",17)(4897,"code",33),qx(4898,"any"),og()(),Cl(4899,"td",20)(4900,"em")(4901,"strong"),qx(4902,"(opcional)"),og()(),Cl(4903,"p"),qx(4904,"Novo valor do campo"),og()()()(),Cl(4905,"h4",38)(4906,"code",5),qx(4907,"PoDynamicFormValidation"),og()(),Cl(4908,"div",2)(4909,"p"),Hl(4910,"a",86),og(),Cl(4911,"p"),qx(4912,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),og()(),Cl(4913,"h4",9),qx(4914,"Propriedades"),og(),Cl(4915,"table",10)(4916,"tr",11)(4917,"th",12),qx(4918,"Nome"),og(),Cl(4919,"th",12),qx(4920,"Tipo"),og(),Cl(4921,"th",12),qx(4922,"Descri\xE7\xE3o"),og()(),Cl(4923,"tr",13)(4924,"td",14)(4925,"div",15)(4926,"span",16),qx(4927," fields"),Hl(4928,"br"),og()()(),Cl(4929,"td",17)(4930,"code",22),qx(4931,"Array<PoDynamicFormField>"),og()(),Cl(4932,"td",20)(4933,"em")(4934,"strong"),qx(4935,"(opcional)"),og()(),Cl(4936,"p"),qx(4937,"Lista com as novas defini\xE7\xF5es dos campos."),og(),Cl(4938,"blockquote")(4939,"p"),qx(4940,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),og()()()(),Cl(4941,"tr",13)(4942,"td",14)(4943,"div",15)(4944,"span",16),qx(4945," focus"),Hl(4946,"br"),og()()(),Cl(4947,"td",17)(4948,"code",18),qx(4949,"string"),og()(),Cl(4950,"td",20)(4951,"em")(4952,"strong"),qx(4953,"(opcional)"),og()(),Cl(4954,"p"),qx(4955,"Nome do campo que receber\xE1 o foco."),og(),Cl(4956,"p"),qx(4957,"Exemplo:"),og(),Cl(4958,"pre")(4959,"code"),qx(4960,`focus: 'name'
`),og()()()(),Cl(4961,"tr",13)(4962,"td",14)(4963,"div",15)(4964,"span",16),qx(4965," value"),Hl(4966,"br"),og()()(),Cl(4967,"td",17)(4968,"code",33),qx(4969,"any"),og()(),Cl(4970,"td",20)(4971,"em")(4972,"strong"),qx(4973,"(opcional)"),og()(),Cl(4974,"p"),qx(4975,"Objeto contendo os novos valores."),og(),Cl(4976,"p"),qx(4977,"Exemplo:"),og(),Cl(4978,"pre")(4979,"code"),qx(4980,`{
  name: 'new name',
  age: 10
}
`),og()(),Cl(4981,"blockquote")(4982,"p"),qx(4983,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),og()()()()(),Cl(4984,"h4",38)(4985,"code",5),qx(4986,"ErrorAsyncProperties"),og()(),Cl(4987,"div",2)(4988,"p"),qx(4989,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Cl(4990,"h4",9),qx(4991,"Propriedades"),og(),Cl(4992,"table",10)(4993,"tr",11)(4994,"th",12),qx(4995,"Nome"),og(),Cl(4996,"th",12),qx(4997,"Tipo"),og(),Cl(4998,"th",12),qx(4999,"Descri\xE7\xE3o"),og()(),Cl(5e3,"tr",13)(5001,"td",14)(5002,"div",15)(5003,"span",16),qx(5004," errorAsync"),Hl(5005,"br"),og()()(),Cl(5006,"td",17)(5007,"code",46),qx(5008,"(value) => Observable<boolean>"),og()(),Cl(5009,"td",20)(5010,"p"),qx(5011,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Cl(5012,"code"),qx(5013,"change"),og(),qx(5014," ou "),Cl(5015,"code"),qx(5016,"change-model"),og(),qx(5017,", dependendo do valor da propriedade "),Cl(5018,"code"),qx(5019,"triggerMode"),og(),qx(5020,"."),og()()(),Cl(5021,"tr",13)(5022,"td",14)(5023,"div",15)(5024,"span",16),qx(5025," triggerMode"),Hl(5026,"br"),og()()(),Cl(5027,"td",17)(5028,"code",87),qx(5029,"'change' "),og(),Cl(5030,"code",88),qx(5031," 'changeModel'"),og()(),Cl(5032,"td",20)(5033,"em")(5034,"strong"),qx(5035,"(opcional)"),og()(),Cl(5036,"p"),qx(5037,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Cl(5038,"code"),qx(5039,"change"),og(),qx(5040," ou "),Cl(5041,"code"),qx(5042,"change-model"),og(),qx(5043,"."),og()()()(),Cl(5044,"h3"),qx(5045,"Enums"),og(),Cl(5046,"h4",4)(5047,"code",5),qx(5048,"ForceBooleanComponentEnum"),og()(),Cl(5049,"div",2)(5050,"p"),qx(5051,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),og()(),Cl(5052,"h4",9),qx(5053,"Propriedades"),og(),Cl(5054,"table",10)(5055,"tr",11)(5056,"th",12),qx(5057,"Nome"),og(),Cl(5058,"th",12),qx(5059,"Descri\xE7\xE3o"),og()(),Cl(5060,"tr",13)(5061,"td",14)(5062,"div",15)(5063,"span",16),qx(5064," switch"),Hl(5065,"br"),og()()(),Cl(5066,"td",20)(5067,"p"),qx(5068,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),og()()(),Cl(5069,"tr",13)(5070,"td",14)(5071,"div",15)(5072,"span",16),qx(5073," checkbox"),Hl(5074,"br"),og()()(),Cl(5075,"td",20)(5076,"p"),qx(5077,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),og()()()(),Cl(5078,"h4",4)(5079,"code",5),qx(5080,"ForceOptionComponentEnum"),og()(),Cl(5081,"div",2)(5082,"p"),qx(5083,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),og()(),Cl(5084,"h4",9),qx(5085,"Propriedades"),og(),Cl(5086,"table",10)(5087,"tr",11)(5088,"th",12),qx(5089,"Nome"),og(),Cl(5090,"th",12),qx(5091,"Descri\xE7\xE3o"),og()(),Cl(5092,"tr",13)(5093,"td",14)(5094,"div",15)(5095,"span",16),qx(5096," radioGroup"),Hl(5097,"br"),og()()(),Cl(5098,"td",20)(5099,"p"),qx(5100,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),og()()(),Cl(5101,"tr",13)(5102,"td",14)(5103,"div",15)(5104,"span",16),qx(5105," select"),Hl(5106,"br"),og()()(),Cl(5107,"td",20)(5108,"p"),qx(5109,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),og()()()(),Cl(5110,"h4",4)(5111,"code",5),qx(5112,"PoDynamicFieldType"),og()(),Cl(5113,"div",2)(5114,"p"),qx(5115,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),og()(),Cl(5116,"h4",9),qx(5117,"Propriedades"),og(),Cl(5118,"table",10)(5119,"tr",11)(5120,"th",12),qx(5121,"Nome"),og(),Cl(5122,"th",12),qx(5123,"Descri\xE7\xE3o"),og()(),Cl(5124,"tr",13)(5125,"td",14)(5126,"div",15)(5127,"span",16),qx(5128," Boolean"),Hl(5129,"br"),og()()(),Cl(5130,"td",20)(5131,"p"),qx(5132,"Valor booleano."),og()()(),Cl(5133,"tr",13)(5134,"td",14)(5135,"div",15)(5136,"span",16),qx(5137," Currency"),Hl(5138,"br"),og()()(),Cl(5139,"td",20)(5140,"p"),qx(5141,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),og()()(),Cl(5142,"tr",13)(5143,"td",14)(5144,"div",15)(5145,"span",16),qx(5146," Decimal"),Hl(5147,"br"),og()()(),Cl(5148,"td",20)(5149,"p"),qx(5150,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),og()()(),Cl(5151,"tr",13)(5152,"td",14)(5153,"div",15)(5154,"span",16),qx(5155," Date"),Hl(5156,"br"),og()()(),Cl(5157,"td",20)(5158,"p"),qx(5159,"Valor para data."),og()()(),Cl(5160,"tr",13)(5161,"td",14)(5162,"div",15)(5163,"span",16),qx(5164," DateTime"),Hl(5165,"br"),og()()(),Cl(5166,"td",20)(5167,"p"),qx(5168,"Valor para data e hora."),og()()(),Cl(5169,"tr",13)(5170,"td",14)(5171,"div",15)(5172,"span",16),qx(5173," Time"),Hl(5174,"br"),og()()(),Cl(5175,"td",20)(5176,"p"),qx(5177,"Utilizado para informar/exibir hora."),og()()(),Cl(5178,"tr",13)(5179,"td",14)(5180,"div",15)(5181,"span",16),qx(5182," Number"),Hl(5183,"br"),og()()(),Cl(5184,"td",20)(5185,"p"),qx(5186,"Valor num\xE9rico."),og()()(),Cl(5187,"tr",13)(5188,"td",14)(5189,"div",15)(5190,"span",16),qx(5191," String"),Hl(5192,"br"),og()()(),Cl(5193,"td",20)(5194,"p"),qx(5195,"Texto."),og()()(),Cl(5196,"tr",13)(5197,"td",14)(5198,"div",15)(5199,"span",16),qx(5200," Upload"),Hl(5201,"br"),og()()(),Cl(5202,"td",20)(5203,"p"),qx(5204,"Utilizado para fazer uploads de arquivos."),og()()()(),Cl(5205,"h4",4)(5206,"code",5),qx(5207,"PoTimepickerModelFormat"),og()(),Cl(5208,"div",2)(5209,"p")(5210,"em"),qx(5211,"Enum"),og(),qx(5212," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),og()(),Cl(5213,"h4",9),qx(5214,"Propriedades"),og(),Cl(5215,"table",10)(5216,"tr",11)(5217,"th",12),qx(5218,"Nome"),og(),Cl(5219,"th",12),qx(5220,"Descri\xE7\xE3o"),og()(),Cl(5221,"tr",13)(5222,"td",14)(5223,"div",15)(5224,"span",16),qx(5225," HourMinute"),Hl(5226,"br"),og()()(),Cl(5227,"td",20)(5228,"p"),qx(5229,"Formato b\xE1sico "),Cl(5230,"code"),qx(5231,"HH:mm"),og(),qx(5232," (ex: "),Cl(5233,"code"),qx(5234,"14:30"),og(),qx(5235,")."),og()()(),Cl(5236,"tr",13)(5237,"td",14)(5238,"div",15)(5239,"span",16),qx(5240," HourMinuteSecond"),Hl(5241,"br"),og()()(),Cl(5242,"td",20)(5243,"p"),qx(5244,"Formato com segundos "),Cl(5245,"code"),qx(5246,"HH:mm:ss"),og(),qx(5247," (ex: "),Cl(5248,"code"),qx(5249,"14:30:00"),og(),qx(5250,")."),og()()()()());},dependencies:[Zr],encapsulation:2})}return o})();var ae=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(Cn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,r){a&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return r.changeTab("doc")}),Hl(3,"sample-po-dynamic-form-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return r.changeTab("web")}),Hl(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),og()()()),a&2&&(ZE("p-actions",r.actions),Lp(2),ZE("p-active",r.activeTab==="doc"),Lp(2),ZE("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[SNe,ofe,lfe,$,te,ne,oe],encapsulation:2})}return o})();var fe=[{path:"",component:ae}],re=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[bL.forChild(fe),bL]})}return o})();var rt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ca,re]})}return o})();export{rt as DocPoDynamicFormModule};