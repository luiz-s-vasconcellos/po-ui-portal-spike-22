import {f as fe$1,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,I,g as f,aW as Yp,cK as ffe,e as r$1,b2 as Zhe,J as Gl,M as tw,bs as hN,a7 as fN,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,b0 as Qt,aB as Cx,bd as Ox,O as we,av as Yl,aw as uo,ax as fo,a3 as aNe,aD as Ky,aE as Xy}from'./main-LUSFEIN7.js';var me=()=>({property:"name",required:true,showRequired:true}),le=o=>[o],G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,r){a&1&&Gl(0,"po-dynamic-form",0),a&2&&tw("p-fields",hN(2,le,fN(1,me)));},dependencies:[Zhe],encapsulation:2,changeDetection:1})}return o})();var pe=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Dynamic Form Basic"),sg(),Tl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-dynamic-form-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),zx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,pe,r.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,G],encapsulation:2})}return o})();var U=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=I({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ce=["dynamicForm"],ee=(()=>{class o{poNotification=f(Yp);registerService=f(U);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:true,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:ffe.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return setTimeout(()=>{let a=this.registerService.getCity(m.value.state);this.updateDynamicFormField("city",{options:a,loading:false});},500),{value:{city:void 0},fields:[{property:"city",gridColumns:6,disabled:false,loading:true}]}}onLoadFields(m){return this.registerService.getUserDocument(m)}updateDynamicFormField(m,a){let r=this.dynamicForm?.fields??this.fields,l=r.findIndex(O=>O.property===m);l>=0&&(r[l]=r$1(r$1({},r[l]),a),this.fields=[...r]);}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register"]],viewQuery:function(a,r){if(a&1&&Yl(ce,7),a&2){let l;uo(l=fo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([U])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=Cx();Gl(0,"po-dynamic-form",1,0)(2,"br"),Tl(3,"div",2)(4,"po-button",3),ht("p-click",function(){Ky(l);let I=Ox(1);return r.poNotification.success("Data saved successfully!"),Xy(I.form.reset())}),sg()();}if(a&2){let l=Ox(1);tw("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Vp(4),tw("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Qt,Zhe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Dynamic Form - Register"),sg(),Tl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-dynamic-form
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-dynamic-form-register"),sg(),Gl(27,"hr")),a&2&&(Vp(5),zx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ee,r.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ee],encapsulation:2})}return o})();var K=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=I({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Se=["dynamicForm"],ie=(()=>{class o{poNotification=f(Yp);registerService=f(K);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:true,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:ffe.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:true},customActionClick:m=>{console.log("Iniciar download para o arquivo:",m.name);}}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return {value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(m.value.state),disabled:false}]}}onKeyDown(m,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(m);}onLoadFields(m){return this.registerService.getUserDocument(m)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,r){if(a&1&&Yl(Se,7),a&2){let l;uo(l=fo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([K])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=Cx();Gl(0,"po-dynamic-form",1,0)(2,"br"),Tl(3,"div",2)(4,"po-button",3),ht("p-click",function(){Ky(l);let I=Ox(1);return r.poNotification.success("Data saved successfully!"),Xy(I.form.reset())}),sg()();}if(a&2){let l=Ox(1);tw("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Vp(4),tw("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Qt,Zhe],encapsulation:2,changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Dynamic Form - Container"),sg(),Tl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-dynamic-form
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),tN(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),sg(),Tl(23,"pre",9),tN(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-dynamic-form-container"),sg(),Gl(27,"hr")),a&2&&(Vp(5),zx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ge,r.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ie],encapsulation:2})}return o})();var oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:false,decls:5251,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,r){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),sg()(),Gl(4,"div",2),Tl(5,"h3",3),tN(6,"Componente"),sg(),Tl(7,"h4",4)(8,"code",5),tN(9,"PoDynamicFormComponent"),sg()(),Tl(10,"div",2)(11,"p"),tN(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),sg(),Tl(13,"p"),tN(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),sg()(),Tl(15,"div",6)(16,"h4",7),tN(17,"Seletor"),sg(),Tl(18,"pre",8),tN(19,`<po-dynamic-form
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
`),sg()(),Tl(20,"h4",9),tN(21,"Propriedades"),sg(),Tl(22,"table",10)(23,"tr",11)(24,"th",12),tN(25,"Nome"),sg(),Tl(26,"th",12),tN(27,"Tipo"),sg(),Tl(28,"th",12),tN(29,"Padr\xE3o"),sg(),Tl(30,"th",12),tN(31,"Descri\xE7\xE3o"),sg()(),Tl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),tN(36," p-auto-focus"),Gl(37,"br"),sg()()(),Tl(38,"td",17)(39,"code",18),tN(40,"string"),sg()(),Tl(41,"td",19),tN(42,"-"),sg(),Tl(43,"td",20)(44,"em")(45,"strong"),tN(46,"(opcional)"),sg()(),Tl(47,"p"),tN(48,"Nome da propriedade, atribu\xEDda ao "),Tl(49,"code"),tN(50,"PoDynamicFormField.property"),sg(),tN(51,", que iniciar\xE1 o campo com foco."),sg()()(),Tl(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),tN(56," p-components-size"),Gl(57,"br"),sg()()(),Tl(58,"td",17)(59,"code",18),tN(60,"string"),sg()(),Tl(61,"td",19)(62,"p")(63,"code"),tN(64,"medium"),sg()()(),Tl(65,"td",20)(66,"em")(67,"strong"),tN(68,"(opcional)"),sg()(),Tl(69,"p"),tN(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(71,"ul")(72,"li")(73,"code"),tN(74,"small"),sg(),tN(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(76,"li")(77,"code"),tN(78,"medium"),sg(),tN(79,": aplica a medida medium de cada componente."),sg()(),Tl(80,"blockquote")(81,"p"),tN(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(83,"code"),tN(84,"medium"),sg(),tN(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(86,"a",21),tN(87,"po-theme"),sg(),tN(88,"."),sg()()()(),Tl(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),tN(93," p-fields"),Gl(94,"br"),sg()()(),Tl(95,"td",17)(96,"code",22),tN(97,"Array<PoDynamicFormField>"),sg()(),Tl(98,"td",19)(99,"p")(100,"code"),tN(101,"[]"),sg()()(),Tl(102,"td",20)(103,"p"),tN(104,"Cole\xE7\xE3o de objetos que implementam a interface "),Tl(105,"code"),tN(106,"PoDynamicFormField"),sg(),tN(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),sg(),Tl(108,"blockquote")(109,"p"),tN(110,"Ex: "),Tl(111,"code"),tN(112,"[ { property: 'name' } ]"),sg()()(),Tl(113,"p"),tN(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),sg(),Tl(115,"ul")(116,"li"),tN(117,"Caso o "),Tl(118,"em"),tN(119,"type"),sg(),tN(120," informado seja "),Tl(121,"em"),tN(122,"boolean"),sg(),tN(123," o componente criado ser\xE1 o "),Tl(124,"code"),tN(125,"po-switch"),sg(),tN(126,"."),sg(),Tl(127,"li"),tN(128,"Caso o "),Tl(129,"em"),tN(130,"type"),sg(),tN(131," informado seja "),Tl(132,"em"),tN(133,"currency"),sg(),tN(134," e n\xE3o seja informado um "),Tl(135,"em"),tN(136,"mask"),sg(),tN(137," ou "),Tl(138,"em"),tN(139,"pattern"),sg(),tN(140," o componente criado ser\xE1 o "),Tl(141,"code"),tN(142,"po-decimal"),sg(),tN(143,`,
caso seja informado um `),Tl(144,"em"),tN(145,"mask"),sg(),tN(146," ou "),Tl(147,"em"),tN(148,"pattern"),sg(),tN(149," o componente criado ser\xE1 o "),Tl(150,"code"),tN(151,"po-input"),sg(),tN(152,"."),sg(),Tl(153,"li"),tN(154,"Caso o "),Tl(155,"em"),tN(156,"type"),sg(),tN(157," informado seja "),Tl(158,"em"),tN(159,"number"),sg(),tN(160," e n\xE3o seja informado um "),Tl(161,"em"),tN(162,"mask"),sg(),tN(163," ou "),Tl(164,"em"),tN(165,"pattern"),sg(),tN(166," o componente criado ser\xE1 o "),Tl(167,"code"),tN(168,"po-number"),sg(),tN(169,`, caso seja
informado um `),Tl(170,"em"),tN(171,"mask"),sg(),tN(172," ou "),Tl(173,"em"),tN(174,"pattern"),sg(),tN(175," o componente criado ser\xE1 o "),Tl(176,"code"),tN(177,"po-input"),sg(),tN(178,"."),sg(),Tl(179,"li"),tN(180,"Caso a lista possua a propriedade "),Tl(181,"code"),tN(182,"options"),sg(),tN(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),Tl(184,"code"),tN(185,"po-radio-group"),sg(),tN(186,`
ou `),Tl(187,"code"),tN(188,"po-checkbox-group"),sg(),tN(189," se informar a propriedade "),Tl(190,"code"),tN(191,"optionsMulti"),sg(),tN(192,"."),sg(),Tl(193,"li"),tN(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),Tl(195,"code"),tN(196,"po-select"),sg(),tN(197," ou, "),Tl(198,"code"),tN(199,"po-multiselect"),sg(),tN(200," se a propriedade "),Tl(201,"code"),tN(202,"optionsMulti"),sg(),tN(203,`
for verdadeira.`),sg(),Tl(204,"li"),tN(205,"Caso o "),Tl(206,"em"),tN(207,"type"),sg(),tN(208," informado seja "),Tl(209,"em"),tN(210,"date"),sg(),tN(211," ou "),Tl(212,"em"),tN(213,"datetime"),sg(),tN(214," o componente criado ser\xE1 o "),Tl(215,"code"),tN(216,"po-datepicker"),sg(),tN(217,"."),sg(),Tl(218,"li"),tN(219,"Caso seja informado a propriedade "),Tl(220,"code"),tN(221,"optionsService"),sg(),tN(222," o componente criado ser\xE1 o "),Tl(223,"code"),tN(224,"po-combo"),sg(),tN(225,"."),sg(),Tl(226,"li"),tN(227,"Caso o "),Tl(228,"em"),tN(229,"type"),sg(),tN(230," informado seja "),Tl(231,"em"),tN(232,"time"),sg(),tN(233," o componente criado ser\xE1 um "),Tl(234,"code"),tN(235,"po-input"),sg(),tN(236," podendo receber um "),Tl(237,"em"),tN(238,"mask"),sg(),tN(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),Tl(240,"em"),tN(241,"mask"),sg(),tN(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),sg(),Tl(243,"li"),tN(244,"Caso a lista possua a propriedade "),Tl(245,"code"),tN(246,"rows"),sg(),tN(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),Tl(248,"code"),tN(249,"po-textarea"),sg(),tN(250,", caso o valor da propriedade "),Tl(251,"code"),tN(252,"rows"),sg(),tN(253," seja menor que 3 o componente criado ser\xE1 o "),Tl(254,"code"),tN(255,"po-input"),sg(),tN(256,"."),sg(),Tl(257,"li"),tN(258,"Caso seja informada a propriedade "),Tl(259,"code"),tN(260,"secret"),sg(),tN(261," o componente criado ser\xE1 o "),Tl(262,"code"),tN(263,"po-password"),sg(),tN(264,"."),sg(),Tl(265,"li"),tN(266,"Caso o "),Tl(267,"em"),tN(268,"type"),sg(),tN(269," informado seja "),Tl(270,"em"),tN(271,"string"),sg(),tN(272," o componente criado ser\xE1 o "),Tl(273,"code"),tN(274,"po-input"),sg(),tN(275,"."),Tl(276,"blockquote")(277,"p"),tN(278,"Ao alterar o valor das "),Tl(279,"code"),tN(280,"properties"),sg(),tN(281,", visibilidade e/ou agrupamentos via container, os "),Tl(282,"code"),tN(283,"fields"),sg(),tN(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),sg()()()()()(),Tl(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),tN(289," (p-form)"),Gl(290,"br"),sg()()(),Tl(291,"td",17)(292,"code",25),tN(293,"EventEmitter"),sg()(),Tl(294,"td",19),tN(295,"-"),sg(),Tl(296,"td",20)(297,"em")(298,"strong"),tN(299,"(opcional)"),sg()(),Tl(300,"p"),tN(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),sg(),Tl(302,"p"),tN(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),Tl(304,"em"),tN(305,"template reference"),sg(),tN(306," e atrav\xE9s do "),Tl(307,"em"),tN(308,"output"),sg(),tN(309,", veja os exemplos abaixo:"),sg(),Tl(310,"blockquote")(311,"p")(312,"em"),tN(313,"template reference"),sg()()(),Tl(314,"pre")(315,"code",26),tN(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),sg()(),Tl(317,"blockquote")(318,"p")(319,"em"),tN(320,"Output"),sg()()(),Tl(321,"pre")(322,"code",26),tN(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),sg()(),Tl(324,"pre")(325,"code",27),tN(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),sg()(),Tl(327,"blockquote")(328,"p"),tN(329,"Caso a propriedade "),Tl(330,"code"),tN(331,"p-group-form"),sg(),tN(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),sg()()()(),Tl(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),tN(337," p-group-form"),Gl(338,"br"),sg()()(),Tl(339,"td",17)(340,"code",28),tN(341,"boolean"),sg()(),Tl(342,"td",19),tN(343,"-"),sg(),Tl(344,"td",20)(345,"em")(346,"strong"),tN(347,"(opcional)"),sg()(),Tl(348,"p"),tN(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),Tl(350,"code"),tN(351,"FormControl"),sg(),tN(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),sg(),Tl(353,"pre")(354,"code",26),tN(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),sg()()()(),Tl(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),tN(360," p-load"),Gl(361,"br"),sg()()(),Tl(362,"td",17)(363,"code",18),tN(364,"string "),sg(),Tl(365,"code",29),tN(366," Function"),sg()(),Tl(367,"td",19),tN(368,"-"),sg(),Tl(369,"td",20)(370,"em")(371,"strong"),tN(372,"(opcional)"),sg()(),Tl(373,"p"),tN(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),sg(),Tl(375,"p"),tN(376,"A propriedade aceita os seguintes tipos:"),sg(),Tl(377,"ul")(378,"li")(379,"code"),tN(380,"string"),sg(),tN(381,": "),Tl(382,"em"),tN(383,"Endpoint"),sg(),tN(384," usado pelo componente para requisi\xE7\xE3o via "),Tl(385,"code"),tN(386,"POST"),sg(),tN(387,"."),sg(),Tl(388,"li")(389,"code"),tN(390,"function"),sg(),tN(391,": M\xE9todo que ser\xE1 executado."),sg()(),Tl(392,"p"),tN(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),Tl(394,"code"),tN(395,"p-value"),sg(),tN(396,"."),sg(),Tl(397,"p"),tN(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Tl(399,"a",30),tN(400,"PoDynamicFormLoad"),sg(),tN(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),sg(),Tl(402,"p"),tN(403,"Por exemplo:"),sg(),Tl(404,"pre")(405,"code"),tN(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),sg()(),Tl(407,"p"),tN(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Tl(409,"code"),tN(410,"bind"),sg(),tN(411,", por exemplo:"),sg(),Tl(412,"pre")(413,"code"),tN(414,`[p-load]="onLoadFields.bind(this)"
`),sg()()()(),Tl(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),tN(419," p-validate"),Gl(420,"br"),sg()()(),Tl(421,"td",17)(422,"code",18),tN(423,"string "),sg(),Tl(424,"code",29),tN(425," Function"),sg()(),Tl(426,"td",19),tN(427,"-"),sg(),Tl(428,"td",20)(429,"em")(430,"strong"),tN(431,"(opcional)"),sg()(),Tl(432,"p"),tN(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Tl(434,"strong"),tN(435,"mudan\xE7as do formul\xE1rio"),sg(),tN(436,"."),sg(),Tl(437,"p"),tN(438,"A propriedade aceita os seguintes tipos:"),sg(),Tl(439,"ul")(440,"li")(441,"code"),tN(442,"string"),sg(),tN(443,": "),Tl(444,"em"),tN(445,"Endpoint"),sg(),tN(446," usado pelo componente para requisi\xE7\xE3o via "),Tl(447,"code"),tN(448,"POST"),sg(),tN(449,"."),sg(),Tl(450,"li")(451,"code"),tN(452,"function"),sg(),tN(453,": M\xE9todo que ser\xE1 executado."),sg()(),Tl(454,"p"),tN(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),Tl(456,"code"),tN(457,"PoDynamicFormFieldChanged"),sg()(),Tl(458,"p"),tN(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Tl(460,"a",31),tN(461,"PoDynamicFormValidation"),sg(),tN(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),sg(),Tl(463,"pre")(464,"code"),tN(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),sg()(),Tl(466,"p"),tN(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Tl(468,"code"),tN(469,"bind"),sg(),tN(470,", por exemplo:"),sg(),Tl(471,"pre")(472,"code"),tN(473,`[p-validate]="this.myFunction.bind(this)"
`),sg()(),Tl(474,"blockquote")(475,"p"),tN(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),Tl(477,"code"),tN(478,"p-validate-fields"),sg(),tN(479,", a propriedade "),Tl(480,"code"),tN(481,"validate"),sg(),tN(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),sg()()()(),Tl(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),tN(487," p-validate-fields"),Gl(488,"br"),sg()()(),Tl(489,"td",17)(490,"code",32),tN(491,"Array<string>"),sg()(),Tl(492,"td",19),tN(493,"-"),sg(),Tl(494,"td",20)(495,"em")(496,"strong"),tN(497,"(opcional)"),sg()(),Tl(498,"p"),tN(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),sg()()(),Tl(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),tN(504," p-validate-on-input"),Gl(505,"br"),sg()()(),Tl(506,"td",17)(507,"code",28),tN(508,"boolean"),sg()(),Tl(509,"td",19),tN(510,"-"),sg(),Tl(511,"td",20)(512,"em")(513,"strong"),tN(514,"(opcional)"),sg()(),Tl(515,"p"),tN(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),sg(),Tl(517,"p"),tN(518,"Pode ser aplicado nos seguintes componentes:"),sg(),Tl(519,"ul")(520,"li"),tN(521,"po-input"),sg(),Tl(522,"li"),tN(523,"po-number"),sg(),Tl(524,"li"),tN(525,"po-decimal"),sg(),Tl(526,"li"),tN(527,"po-textarea"),sg(),Tl(528,"li"),tN(529,"po-password"),sg()(),Tl(530,"p"),tN(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),Tl(532,"code"),tN(533,"p-validate-fields"),sg(),tN(534,"."),sg()()(),Tl(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),tN(539," p-value"),Gl(540,"br"),sg()()(),Tl(541,"td",17)(542,"code",33),tN(543,"any"),sg()(),Tl(544,"td",19),tN(545,"-"),sg(),Tl(546,"td",20)(547,"p"),tN(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),Tl(549,"em"),tN(550,"property"),sg(),tN(551,`
dos objetos contidos na propridade `),Tl(552,"code"),tN(553,"p-fields"),sg(),tN(554,"."),sg(),Tl(555,"p"),tN(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),sg(),Tl(557,"blockquote")(558,"p"),tN(559,"Ex: "),Tl(560,"code"),tN(561,"{ name: 'po' }"),sg()()()()()(),Tl(562,"h3",9),tN(563,"M\xE9todos"),sg(),Tl(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),tN(570," focus "),sg()()()()(),Tl(571,"tr",20)(572,"td",20)(573,"p"),tN(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),sg(),Tl(575,"p"),tN(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),Tl(577,"code"),tN(578,"dynamic form"),sg(),tN(579,", como por exemplo:"),sg(),Tl(580,"pre")(581,"code",26),tN(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),sg()(),Tl(583,"pre")(584,"code",36),tN(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),sg()()()()(),Tl(586,"h5")(587,"b"),tN(588,"Par\xE2metros"),sg()(),Tl(589,"table",10)(590,"tr",11)(591,"th",12),tN(592,"Nome"),sg(),Tl(593,"th",12),tN(594,"Tipo"),sg(),Tl(595,"th",12),tN(596,"Descri\xE7\xE3o"),sg()(),Tl(597,"tr",13)(598,"td",14),tN(599," property"),sg(),Tl(600,"td",17)(601,"code",37),tN(602," string "),sg()(),Tl(603,"td",20)(604,"p"),tN(605,"Nome da propriedade atribu\xEDda ao "),Tl(606,"code"),tN(607,"PoDynamicFormField.property"),sg(),tN(608,"."),sg()()()(),Gl(609,"br"),Tl(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),tN(616," showAdditionalHelp "),sg()()()()(),Tl(617,"tr",20)(618,"td",20)(619,"p"),tN(620,"M\xE9todo que exibe "),Tl(621,"code"),tN(622,"p-helper"),sg(),tN(623," ou executa a a\xE7\xE3o definida em "),Tl(624,"code"),tN(625,"p-helper{eventOnClick}"),sg(),tN(626," ou em "),Tl(627,"code"),tN(628,"p-additionalHelp"),sg(),tN(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(630,"code"),tN(631,"keydown"),sg(),tN(632,"."),sg(),Tl(633,"pre")(634,"code"),tN(635,`import { PoDynamicModule } from '@po-ui/ng-components';
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
`),sg()()()()(),Tl(636,"h5")(637,"b"),tN(638,"Par\xE2metros"),sg()(),Tl(639,"table",10)(640,"tr",11)(641,"th",12),tN(642,"Nome"),sg(),Tl(643,"th",12),tN(644,"Tipo"),sg(),Tl(645,"th",12),tN(646,"Descri\xE7\xE3o"),sg()(),Tl(647,"tr",13)(648,"td",14),tN(649," property"),sg(),Tl(650,"td",17)(651,"code",37),tN(652," string "),sg()(),Tl(653,"td",20)(654,"p"),tN(655,"Identificador da coluna."),sg()()()(),Gl(656,"br"),Tl(657,"h3"),tN(658,"Interfaces"),sg(),Tl(659,"h4",38)(660,"code",5),tN(661,"PoDynamicFormField"),sg()(),Tl(662,"div",2)(663,"p"),tN(664," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),sg()(),Tl(665,"h4",9),tN(666,"Propriedades"),sg(),Tl(667,"table",10)(668,"tr",11)(669,"th",12),tN(670,"Nome"),sg(),Tl(671,"th",12),tN(672,"Tipo"),sg(),Tl(673,"th",12),tN(674,"Descri\xE7\xE3o"),sg()(),Tl(675,"tr",13)(676,"td",14)(677,"div",15)(678,"span",16),tN(679," additionalHelp"),Gl(680,"br"),sg()()(),Tl(681,"td",17)(682,"code",29),tN(683,"Function"),sg()(),Tl(684,"td",20)(685,"em")(686,"strong"),tN(687,"(opcional)"),sg()(),Tl(688,"p"),tN(689,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(690,"blockquote")(691,"p"),tN(692,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),sg()()()(),Tl(693,"tr",13)(694,"td",14)(695,"div",15)(696,"span",16),tN(697," additionalHelpTooltip"),Gl(698,"br"),sg()()(),Tl(699,"td",17)(700,"code",18),tN(701,"string"),sg()(),Tl(702,"td",20)(703,"em")(704,"strong"),tN(705,"(opcional)"),sg()(),Tl(706,"p"),tN(707,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(708,"code"),tN(709,"po-helper"),sg(),tN(710,`.
`),Tl(711,"strong"),tN(712,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(713,"blockquote")(714,"p"),tN(715,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),sg()()()(),Tl(716,"tr",13)(717,"td",14)(718,"div",15)(719,"span",16),tN(720," advancedFilters"),Gl(721,"br"),sg()()(),Tl(722,"td",17)(723,"code",39),tN(724,"Array<PoLookupAdvancedFilter>"),sg()(),Tl(725,"td",20)(726,"em")(727,"strong"),tN(728,"(opcional)"),sg()(),Tl(729,"p"),tN(730,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),sg(),Tl(731,"blockquote")(732,"p"),tN(733,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),sg()(),Tl(734,"p"),tN(735,"Exemplo de URL com busca avan\xE7ada:"),sg(),Tl(736,"p")(737,"code"),tN(738,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),sg()(),Tl(739,"p"),tN(740,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),sg(),Tl(741,"p")(742,"code"),tN(743,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),sg()()()(),Tl(744,"tr",13)(745,"td",14)(746,"div",15)(747,"span",16),tN(748," appendBox"),Gl(749,"br"),sg()()(),Tl(750,"td",17)(751,"code",28),tN(752,"boolean"),sg()(),Tl(753,"td",20)(754,"em")(755,"strong"),tN(756,"(opcional)"),sg()(),Tl(757,"p"),tN(758,"Define que o "),Tl(759,"code"),tN(760,"listbox"),sg(),tN(761," e/ou popover ("),Tl(762,"code"),tN(763,"p-helper"),sg(),tN(764," e/ou "),Tl(765,"code"),tN(766,"p-error-limit"),sg(),tN(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),sg(),Tl(768,"blockquote")(769,"p"),tN(770,"Quando utilizado com "),Tl(771,"code"),tN(772,"p-helper"),sg(),tN(773,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(774,"tr",13)(775,"td",14)(776,"div",15)(777,"span",16),tN(778," autoHeight"),Gl(779,"br"),sg()()(),Tl(780,"td",17)(781,"code",28),tN(782,"boolean"),sg()(),Tl(783,"td",20)(784,"em")(785,"strong"),tN(786,"(opcional)"),sg()(),Tl(787,"p"),tN(788,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),sg(),Tl(789,"p")(790,"strong"),tN(791,"Componentes compat\xEDveis:"),sg(),Tl(792,"code"),tN(793,"po-multiselect"),sg(),tN(794,", "),Tl(795,"code"),tN(796,"po-lookup"),sg(),tN(797,"."),sg()()(),Tl(798,"tr",13)(799,"td",14)(800,"div",15)(801,"span",16),tN(802," autoUpload"),Gl(803,"br"),sg()()(),Tl(804,"td",17)(805,"code",28),tN(806,"boolean"),sg()(),Tl(807,"td",20)(808,"em")(809,"strong"),tN(810,"(opcional)"),sg()(),Tl(811,"p"),tN(812,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),sg(),Tl(813,"p")(814,"strong"),tN(815,"Componente compat\xEDvel"),sg(),tN(816,": "),Tl(817,"code"),tN(818,"po-upload"),sg()()()(),Tl(819,"tr",13)(820,"td",14)(821,"div",15)(822,"span",16),tN(823," booleanFalse"),Gl(824,"br"),sg()()(),Tl(825,"td",17)(826,"code",18),tN(827,"string"),sg()(),Tl(828,"td",20)(829,"em")(830,"strong"),tN(831,"(opcional)"),sg()(),Tl(832,"p"),tN(833,"Texto exibido quando o valor do componente for "),Tl(834,"em"),tN(835,"false"),sg(),tN(836,"."),sg()()(),Tl(837,"tr",13)(838,"td",14)(839,"div",15)(840,"span",16),tN(841," booleanTrue"),Gl(842,"br"),sg()()(),Tl(843,"td",17)(844,"code",18),tN(845,"string"),sg()(),Tl(846,"td",20)(847,"em")(848,"strong"),tN(849,"(opcional)"),sg()(),Tl(850,"p"),tN(851,"Texto exibido quando o valor do componente for "),Tl(852,"em"),tN(853,"true"),sg(),tN(854,"."),sg()()(),Tl(855,"tr",13)(856,"td",14)(857,"div",15)(858,"span",16),tN(859," changeOnEnter"),Gl(860,"br"),sg()()(),Tl(861,"td",17)(862,"code",28),tN(863,"boolean"),sg()(),Tl(864,"td",20)(865,"em")(866,"strong"),tN(867,"(opcional)"),sg()(),Tl(868,"p"),tN(869,"Indica que o evento "),Tl(870,"code"),tN(871,"p-change"),sg(),tN(872,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),Tl(873,"code"),tN(874,"po-combo"),sg(),tN(875,"."),sg()()(),Tl(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),tN(880," changeVisibleColumns"),Gl(881,"br"),sg()()(),Tl(882,"td",17)(883,"code",29),tN(884,"Function"),sg()(),Tl(885,"td",20)(886,"em")(887,"strong"),tN(888,"(opcional)"),sg()(),Tl(889,"p"),tN(890,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),sg(),Tl(891,"p"),tN(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg(),Tl(893,"p")(894,"strong"),tN(895,"Componente compat\xEDvel"),sg(),tN(896,": "),Tl(897,"code"),tN(898,"po-lookup"),sg()()()(),Tl(899,"tr",13)(900,"td",14)(901,"div",15)(902,"span",16),tN(903," clean"),Gl(904,"br"),sg()()(),Tl(905,"td",17)(906,"code",28),tN(907,"boolean"),sg()(),Tl(908,"td",20)(909,"em")(910,"strong"),tN(911,"(opcional)"),sg()(),Tl(912,"p"),tN(913,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg(),Tl(914,"p")(915,"strong"),tN(916,"Componentes compat\xEDveis:"),sg(),Tl(917,"code"),tN(918,"po-datepicker"),sg(),tN(919,", "),Tl(920,"code"),tN(921,"po-datepicker-range"),sg(),tN(922,", "),Tl(923,"code"),tN(924,"po-input"),sg(),tN(925,", "),Tl(926,"code"),tN(927,"po-number"),sg(),tN(928,", "),Tl(929,"code"),tN(930,"po-decimal"),sg(),tN(931,`,
`),Tl(932,"code"),tN(933,"po-combo"),sg(),tN(934,", "),Tl(935,"code"),tN(936,"po-lookup"),sg(),tN(937,", "),Tl(938,"code"),tN(939,"po-password"),sg(),tN(940,", "),Tl(941,"code"),tN(942,"po-timepicker"),sg(),tN(943,"."),sg()()(),Tl(944,"tr",13)(945,"td",14)(946,"div",15)(947,"span",16),tN(948," columnRestoreManager"),Gl(949,"br"),sg()()(),Tl(950,"td",17)(951,"code",29),tN(952,"Function"),sg()(),Tl(953,"td",20)(954,"em")(955,"strong"),tN(956,"(opcional)"),sg()(),Tl(957,"p"),tN(958,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),sg(),Tl(959,"p"),tN(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg(),Tl(961,"p")(962,"strong"),tN(963,"Componente compat\xEDvel"),sg(),tN(964,": "),Tl(965,"code"),tN(966,"po-lookup"),sg()()()(),Tl(967,"tr",13)(968,"td",14)(969,"div",15)(970,"span",16),tN(971," columns"),Gl(972,"br"),sg()()(),Tl(973,"td",17)(974,"code",40),tN(975,"Array<PoLookupColumn> "),sg(),Tl(976,"code",41),tN(977," number"),sg()(),Tl(978,"td",20)(979,"em")(980,"strong"),tN(981,"(opcional)"),sg()(),Tl(982,"p"),tN(983,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),Tl(984,"code"),tN(985,"searchService"),sg(),tN(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Tl(987,"a",42)(988,"code"),tN(989,"PoLookupColumn"),sg()(),tN(990,"."),sg(),Tl(991,"blockquote")(992,"p"),tN(993,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),Tl(994,"em"),tN(995,"label"),sg(),tN(996," e "),Tl(997,"em"),tN(998,"value"),sg(),tN(999,` para valores
de tela e do model respectivamente.`),sg()(),Tl(1e3,"p")(1001,"strong"),tN(1002,"Componentes compat\xEDveis:"),sg(),Tl(1003,"code"),tN(1004,"po-radio-group"),sg(),tN(1005,", "),Tl(1006,"code"),tN(1007,"po-lookup"),sg(),tN(1008,", "),Tl(1009,"code"),tN(1010,"po-checkbox-group"),sg(),tN(1011,"."),sg()()(),Tl(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),tN(1016," compactLabel"),Gl(1017,"br"),sg()()(),Tl(1018,"td",17)(1019,"code",28),tN(1020,"boolean"),sg()(),Tl(1021,"td",20)(1022,"em")(1023,"strong"),tN(1024,"(opcional)"),sg()(),Tl(1025,"p"),tN(1026,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(1027,"p"),tN(1028,"Quando habilitado ("),Tl(1029,"code"),tN(1030,"true"),sg(),tN(1031,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(1032,"ul")(1033,"li")(1034,"code"),tN(1035,"po-label"),sg()(),Tl(1036,"li")(1037,"code"),tN(1038,"p-requirement (showRequired)"),sg()(),Tl(1039,"li")(1040,"code"),tN(1041,"po-helper"),sg()()(),Tl(1042,"p"),tN(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(1044,"p"),tN(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(1046,"ul")(1047,"li")(1048,"code"),tN(1049,"--field-container-title-justify"),sg()(),Tl(1050,"li")(1051,"code"),tN(1052,"--field-container-title-flex"),sg()()(),Tl(1053,"p"),tN(1054,"Exemplo:"),sg(),Tl(1055,"pre")(1056,"code"),tN(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(1058,"p"),tN(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(1060,"tr",13)(1061,"td",14)(1062,"div",15)(1063,"span",16),tN(1064," container"),Gl(1065,"br"),sg()()(),Tl(1066,"td",17)(1067,"code",18),tN(1068,"string"),sg()(),Tl(1069,"td",20)(1070,"em")(1071,"strong"),tN(1072,"(opcional)"),sg()(),Tl(1073,"p"),tN(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),sg(),Tl(1075,"p"),tN(1076,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),sg()()(),Tl(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),tN(1081," customAction"),Gl(1082,"br"),sg()()(),Tl(1083,"td",17)(1084,"code",43),tN(1085,"PoProgressAction"),sg()(),Tl(1086,"td",20)(1087,"em")(1088,"strong"),tN(1089,"(opcional)"),sg()(),Tl(1090,"p"),tN(1091,"Define uma a\xE7\xE3o personalizada no componente "),Tl(1092,"code"),tN(1093,"po-upload"),sg(),tN(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),sg(),Tl(1095,"p")(1096,"strong"),tN(1097,"Componente compat\xEDvel"),sg(),tN(1098,": "),Tl(1099,"code"),tN(1100,"po-upload"),sg(),tN(1101,","),sg(),Tl(1102,"p")(1103,"strong"),tN(1104,"Exemplo de configura\xE7\xE3o"),sg(),tN(1105,":"),sg(),Tl(1106,"pre")(1107,"code",44),tN(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),sg()()()(),Tl(1109,"tr",13)(1110,"td",14)(1111,"div",15)(1112,"span",16),tN(1113," customActionClick"),Gl(1114,"br"),sg()()(),Tl(1115,"td",17)(1116,"code",45),tN(1117,"(file: PoUploadFile) => void"),sg()(),Tl(1118,"td",20)(1119,"em")(1120,"strong"),tN(1121,"(opcional)"),sg()(),Tl(1122,"p"),tN(1123,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Tl(1124,"code"),tN(1125,"p-custom-action"),sg(),tN(1126,"."),sg(),Tl(1127,"p")(1128,"strong"),tN(1129,"Componente compat\xEDvel"),sg(),tN(1130,": "),Tl(1131,"code"),tN(1132,"po-upload"),sg(),tN(1133,","),sg(),Tl(1134,"p"),tN(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),sg(),Tl(1136,"p")(1137,"strong"),tN(1138,"Par\xE2metro do evento"),sg(),tN(1139,":"),sg(),Tl(1140,"ul")(1141,"li")(1142,"code"),tN(1143,"file"),sg(),tN(1144,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),Tl(1145,"code"),tN(1146,"PoUploadFile"),sg(),tN(1147," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),sg()(),Tl(1148,"p")(1149,"strong"),tN(1150,"Exemplo de uso"),sg(),tN(1151,":"),sg(),Tl(1152,"pre")(1153,"code",44),tN(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),sg()()()(),Tl(1155,"tr",13)(1156,"td",14)(1157,"div",15)(1158,"span",16),tN(1159," debounceTime"),Gl(1160,"br"),sg()()(),Tl(1161,"td",17)(1162,"code",41),tN(1163,"number"),sg()(),Tl(1164,"td",20)(1165,"em")(1166,"strong"),tN(1167,"(opcional)"),sg()(),Tl(1168,"p"),tN(1169,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Tl(1170,"code"),tN(1171,"p-filter-service"),sg(),tN(1172,")."),sg(),Tl(1173,"p")(1174,"strong"),tN(1175,"Componentes compat\xEDveis:"),sg(),Tl(1176,"code"),tN(1177,"po-combo"),sg(),tN(1178,", "),Tl(1179,"code"),tN(1180,"po-multiselect"),sg(),tN(1181,"."),sg()()(),Tl(1182,"tr",13)(1183,"td",14)(1184,"div",15)(1185,"span",16),tN(1186," decimalsLength"),Gl(1187,"br"),sg()()(),Tl(1188,"td",17)(1189,"code",41),tN(1190,"number"),sg()(),Tl(1191,"td",20)(1192,"em")(1193,"strong"),tN(1194,"(opcional)"),sg()(),Tl(1195,"p"),tN(1196,"Quantidade m\xE1xima de casas decimais."),sg(),Tl(1197,"blockquote")(1198,"p"),tN(1199,"Esta propriedade s\xF3 pode ser utilizada quando o "),Tl(1200,"code"),tN(1201,"type"),sg(),tN(1202," for "),Tl(1203,"em"),tN(1204,"currency"),sg(),tN(1205," ou "),Tl(1206,"em"),tN(1207,"decimal"),sg(),tN(1208,"."),sg()()()(),Tl(1209,"tr",13)(1210,"td",14)(1211,"div",15)(1212,"span",16),tN(1213," directory"),Gl(1214,"br"),sg()()(),Tl(1215,"td",17)(1216,"code",28),tN(1217,"boolean"),sg()(),Tl(1218,"td",20)(1219,"em")(1220,"strong"),tN(1221,"(opcional)"),sg()(),Tl(1222,"p"),tN(1223,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),sg(),Tl(1224,"blockquote")(1225,"p"),tN(1226,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),sg()(),Tl(1227,"blockquote")(1228,"p"),tN(1229,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Tl(1230,"strong"),tN(1231,"Internet Explorer"),sg(),tN(1232,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),sg()(),Tl(1233,"p")(1234,"strong"),tN(1235,"Componente compat\xEDvel"),sg(),tN(1236,": "),Tl(1237,"code"),tN(1238,"po-upload"),sg()()()(),Tl(1239,"tr",13)(1240,"td",14)(1241,"div",15)(1242,"span",16),tN(1243," disabled"),Gl(1244,"br"),sg()()(),Tl(1245,"td",17)(1246,"code",28),tN(1247,"boolean"),sg()(),Tl(1248,"td",20)(1249,"em")(1250,"strong"),tN(1251,"(opcional)"),sg()(),Tl(1252,"p"),tN(1253,"Desabilita o campo caso informar o valor "),Tl(1254,"em"),tN(1255,"true"),sg(),tN(1256,"."),sg()()(),Tl(1257,"tr",13)(1258,"td",14)(1259,"div",15)(1260,"span",16),tN(1261," disabledInitFilter"),Gl(1262,"br"),sg()()(),Tl(1263,"td",17)(1264,"code",28),tN(1265,"boolean"),sg()(),Tl(1266,"td",20)(1267,"em")(1268,"strong"),tN(1269,"(opcional)"),sg()(),Tl(1270,"p"),tN(1271,"Desabilita o filtro inicial no servi\xE7o do "),Tl(1272,"code"),tN(1273,"po-combo"),sg(),tN(1274,", que \xE9 executado no primeiro clique no campo."),sg()()(),Tl(1275,"tr",13)(1276,"td",14)(1277,"div",15)(1278,"span",16),tN(1279," disabledTabFilter"),Gl(1280,"br"),sg()()(),Tl(1281,"td",17)(1282,"code",28),tN(1283,"boolean"),sg()(),Tl(1284,"td",20)(1285,"em")(1286,"strong"),tN(1287,"(opcional)"),sg()(),Tl(1288,"p"),tN(1289,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),Tl(1290,"code"),tN(1291,"po-combo"),sg(),tN(1292,"."),sg()()(),Tl(1293,"tr",13)(1294,"td",14)(1295,"div",15)(1296,"span",16),tN(1297," divider"),Gl(1298,"br"),sg()()(),Tl(1299,"td",17)(1300,"code",18),tN(1301,"string"),sg()(),Tl(1302,"td",20)(1303,"em")(1304,"strong"),tN(1305,"(opcional)"),sg()(),Tl(1306,"p"),tN(1307,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),sg()()(),Tl(1308,"tr",13)(1309,"td",14)(1310,"div",15)(1311,"span",16),tN(1312," dragDrop"),Gl(1313,"br"),sg()()(),Tl(1314,"td",17)(1315,"code",28),tN(1316,"boolean"),sg()(),Tl(1317,"td",20)(1318,"em")(1319,"strong"),tN(1320,"(opcional)"),sg()(),Tl(1321,"p"),tN(1322,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),sg(),Tl(1323,"blockquote")(1324,"p"),tN(1325,"Recomendamos utilizar apenas um "),Tl(1326,"code"),tN(1327,"po-upload"),sg(),tN(1328," com esta funcionalidade por tela."),sg()(),Tl(1329,"p")(1330,"strong"),tN(1331,"Componente compat\xEDvel"),sg(),tN(1332,": "),Tl(1333,"code"),tN(1334,"po-upload"),sg()()()(),Tl(1335,"tr",13)(1336,"td",14)(1337,"div",15)(1338,"span",16),tN(1339," dragDropHeight"),Gl(1340,"br"),sg()()(),Tl(1341,"td",17)(1342,"code",41),tN(1343,"number"),sg()(),Tl(1344,"td",20)(1345,"em")(1346,"strong"),tN(1347,"(opcional)"),sg()(),Tl(1348,"p"),tN(1349,"Define em "),Tl(1350,"em"),tN(1351,"pixels"),sg(),tN(1352," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Tl(1353,"code"),tN(1354,"160px"),sg(),tN(1355,"."),sg(),Tl(1356,"blockquote")(1357,"p"),tN(1358,"Esta propriedade funciona somente se a propriedade "),Tl(1359,"code"),tN(1360,"p-drag-drop"),sg(),tN(1361," estiver habilitada."),sg()(),Tl(1362,"p")(1363,"strong"),tN(1364,"Componente compat\xEDvel"),sg(),tN(1365,": "),Tl(1366,"code"),tN(1367,"po-upload"),sg()()()(),Tl(1368,"tr",13)(1369,"td",14)(1370,"div",15)(1371,"span",16),tN(1372," errorAsyncFunction"),Gl(1373,"br"),sg()()(),Tl(1374,"td",17)(1375,"code",46),tN(1376,"(value) => Observable<boolean>"),sg()(),Tl(1377,"td",20)(1378,"em")(1379,"strong"),tN(1380,"(opcional)"),sg()(),Tl(1381,"p"),tN(1382,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(1383,"code"),tN(1384,"change"),sg(),tN(1385," ou "),Tl(1386,"code"),tN(1387,"change-model"),sg(),tN(1388,", dependendo do valor da propriedade "),Tl(1389,"code"),tN(1390,"triggerMode"),sg(),tN(1391,"."),sg(),Tl(1392,"blockquote")(1393,"p"),tN(1394,"Retorna "),Tl(1395,"code"),tN(1396,"Observable com o valor true"),sg(),tN(1397," para sinalizar o erro "),Tl(1398,"code"),tN(1399,"false"),sg(),tN(1400," para indicar que n\xE3o h\xE1 erro."),sg()(),Tl(1401,"p")(1402,"strong"),tN(1403,"Componente compat\xEDvel"),sg(),tN(1404,": "),Tl(1405,"code"),tN(1406,"po-datepicker"),sg()()()(),Tl(1407,"tr",13)(1408,"td",14)(1409,"div",15)(1410,"span",16),tN(1411," errorAsyncProperties"),Gl(1412,"br"),sg()()(),Tl(1413,"td",17)(1414,"code",47),tN(1415,"ErrorAsyncProperties"),sg()(),Tl(1416,"td",20)(1417,"em")(1418,"strong"),tN(1419,"(opcional)"),sg()(),Tl(1420,"p"),tN(1421,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),sg(),Tl(1422,"p")(1423,"strong"),tN(1424,"Componentes compat\xEDveis:"),sg(),Tl(1425,"code"),tN(1426,"po-input"),sg(),tN(1427,", "),Tl(1428,"code"),tN(1429,"po-number"),sg(),tN(1430,", "),Tl(1431,"code"),tN(1432,"po-decimal"),sg(),tN(1433,", "),Tl(1434,"code"),tN(1435,"po-password"),sg(),tN(1436,"."),sg()()(),Tl(1437,"tr",13)(1438,"td",14)(1439,"div",15)(1440,"span",16),tN(1441," errorLimit"),Gl(1442,"br"),sg()()(),Tl(1443,"td",17)(1444,"code",28),tN(1445,"boolean"),sg()(),Tl(1446,"td",20)(1447,"em")(1448,"strong"),tN(1449,"(opcional)"),sg()(),Tl(1450,"p"),tN(1451,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(1452,"blockquote")(1453,"p"),tN(1454,"Caso essa propriedade seja definida como "),Tl(1455,"code"),tN(1456,"true"),sg(),tN(1457,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()(),Tl(1458,"p")(1459,"strong"),tN(1460,"Componentes compat\xEDveis:"),sg(),Tl(1461,"code"),tN(1462,"po-checkbox-group"),sg(),tN(1463,", "),Tl(1464,"code"),tN(1465,"po-combo"),sg(),tN(1466,", "),Tl(1467,"code"),tN(1468,"po-datepicker"),sg(),tN(1469,", "),Tl(1470,"code"),tN(1471,"po-datepicker-range"),sg(),tN(1472,", "),Tl(1473,"code"),tN(1474,"po-decimal"),sg(),tN(1475,", "),Tl(1476,"code"),tN(1477,"po-input"),sg(),tN(1478,", "),Tl(1479,"code"),tN(1480,"po-lookup"),sg(),tN(1481,", "),Tl(1482,"code"),tN(1483,"po-multiselect"),sg(),tN(1484,", "),Tl(1485,"code"),tN(1486,"po-number"),sg(),tN(1487,", "),Tl(1488,"code"),tN(1489,"po-password"),sg(),tN(1490,", "),Tl(1491,"code"),tN(1492,"po-radio-group"),sg(),tN(1493,", "),Tl(1494,"code"),tN(1495,"po-select"),sg(),tN(1496,`,
`),Tl(1497,"code"),tN(1498,"po-switch"),sg(),tN(1499,", "),Tl(1500,"code"),tN(1501,"po-textarea"),sg(),tN(1502,", "),Tl(1503,"code"),tN(1504,"po-timepicker"),sg(),tN(1505,"."),sg()()(),Tl(1506,"tr",13)(1507,"td",14)(1508,"div",15)(1509,"span",16),tN(1510," errorMessage"),Gl(1511,"br"),sg()()(),Tl(1512,"td",17)(1513,"code",18),tN(1514,"string"),sg()(),Tl(1515,"td",20)(1516,"em")(1517,"strong"),tN(1518,"(opcional)"),sg()(),Tl(1519,"p"),tN(1520,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),sg(),Tl(1521,"p"),tN(1522,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),sg(),Tl(1523,"ul")(1524,"li"),tN(1525,"pattern;"),sg(),Tl(1526,"li"),tN(1527,"minValue;"),sg(),Tl(1528,"li"),tN(1529,"maxValue;"),sg(),Tl(1530,"li"),tN(1531,"required;"),sg()(),Tl(1532,"blockquote")(1533,"p"),tN(1534,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Tl(1535,"code"),tN(1536,"po-datepicker"),sg(),tN(1537,", "),Tl(1538,"code"),tN(1539,"po-input"),sg(),tN(1540,", "),Tl(1541,"code"),tN(1542,"po-number"),sg(),tN(1543,", "),Tl(1544,"code"),tN(1545,"po-decimal"),sg(),tN(1546,", "),Tl(1547,"code"),tN(1548,"po-password"),sg(),tN(1549,", "),Tl(1550,"code"),tN(1551,"po-timepicker"),sg(),tN(1552,`, \xE9 necess\xE1rio que a propriedade
`),Tl(1553,"code"),tN(1554,"requiredFieldErrorMessage"),sg(),tN(1555," esteja como "),Tl(1556,"code"),tN(1557,"true"),sg(),tN(1558,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Tl(1559,"code"),tN(1560,"po-datepicker-range"),sg(),tN(1561,", "),Tl(1562,"code"),tN(1563,"po-select"),sg(),tN(1564,", "),Tl(1565,"code"),tN(1566,"po-checkbox-group"),sg(),tN(1567,", "),Tl(1568,"code"),tN(1569,"po-radio-group"),sg(),tN(1570,", "),Tl(1571,"code"),tN(1572,"po-multiselect"),sg(),tN(1573,", "),Tl(1574,"code"),tN(1575,"po-combo"),sg(),tN(1576,`,
`),Tl(1577,"code"),tN(1578,"po-lookup"),sg(),tN(1579," e "),Tl(1580,"code"),tN(1581,"po-textarea"),sg(),tN(1582," n\xE3o \xE9 necess\xE1rio passar a propriedade "),Tl(1583,"code"),tN(1584,"requiredFieldErrorMessage"),sg(),tN(1585,"."),sg()(),Tl(1586,"p")(1587,"strong"),tN(1588,"Componentes compat\xEDveis:"),sg(),Tl(1589,"code"),tN(1590,"po-checkbox-group"),sg(),tN(1591,", "),Tl(1592,"code"),tN(1593,"po-combo"),sg(),tN(1594,", "),Tl(1595,"code"),tN(1596,"po-datepicker"),sg(),tN(1597,", "),Tl(1598,"code"),tN(1599,"po-datepicker-range"),sg(),tN(1600,", "),Tl(1601,"code"),tN(1602,"po-decimal"),sg(),tN(1603,", "),Tl(1604,"code"),tN(1605,"po-input"),sg(),tN(1606,", "),Tl(1607,"code"),tN(1608,"po-lookup"),sg(),tN(1609,", "),Tl(1610,"code"),tN(1611,"po-multiselect"),sg(),tN(1612,", "),Tl(1613,"code"),tN(1614,"po-number"),sg(),tN(1615,", "),Tl(1616,"code"),tN(1617,"po-password"),sg(),tN(1618,", "),Tl(1619,"code"),tN(1620,"po-radio-group"),sg(),tN(1621,", "),Tl(1622,"code"),tN(1623,"po-select"),sg(),tN(1624,`,
`),Tl(1625,"code"),tN(1626,"po-switch"),sg(),tN(1627,", "),Tl(1628,"code"),tN(1629,"po-textarea"),sg(),tN(1630,", "),Tl(1631,"code"),tN(1632,"po-timepicker"),sg(),tN(1633,"."),sg()()(),Tl(1634,"tr",13)(1635,"td",14)(1636,"div",15)(1637,"span",16),tN(1638," fieldLabel"),Gl(1639,"br"),sg()()(),Tl(1640,"td",17)(1641,"code",18),tN(1642,"string"),sg()(),Tl(1643,"td",20)(1644,"em")(1645,"strong"),tN(1646,"(opcional)"),sg()(),Tl(1647,"p"),tN(1648,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),sg(),Tl(1649,"p"),tN(1650,"O valor padr\xE3o \xE9: "),Tl(1651,"code"),tN(1652,"label"),sg(),tN(1653,"."),sg(),Tl(1654,"blockquote")(1655,"p"),tN(1656,"Esta propriedade pode ser utilizada em conjunto com: "),Tl(1657,"code"),tN(1658,"options"),sg(),tN(1659,", "),Tl(1660,"code"),tN(1661,"optionsService"),sg(),tN(1662," e "),Tl(1663,"code"),tN(1664,"searchService"),sg(),tN(1665,"."),sg()()()(),Tl(1666,"tr",13)(1667,"td",14)(1668,"div",15)(1669,"span",16),tN(1670," fieldValue"),Gl(1671,"br"),sg()()(),Tl(1672,"td",17)(1673,"code",18),tN(1674,"string"),sg()(),Tl(1675,"td",20)(1676,"em")(1677,"strong"),tN(1678,"(opcional)"),sg()(),Tl(1679,"p"),tN(1680,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),sg(),Tl(1681,"p"),tN(1682,"O valor padr\xE3o \xE9: "),Tl(1683,"code"),tN(1684,"value"),sg(),tN(1685,"."),sg(),Tl(1686,"blockquote")(1687,"p"),tN(1688,"Esta propriedade pode ser utilizada em conjunto com: "),Tl(1689,"code"),tN(1690,"options"),sg(),tN(1691,", "),Tl(1692,"code"),tN(1693,"optionsService"),sg(),tN(1694," e "),Tl(1695,"code"),tN(1696,"searchService"),sg(),tN(1697,"."),sg()()()(),Tl(1698,"tr",13)(1699,"td",14)(1700,"div",15)(1701,"span",16),tN(1702," filterMinlength"),Gl(1703,"br"),sg()()(),Tl(1704,"td",17)(1705,"code",41),tN(1706,"number"),sg()(),Tl(1707,"td",20)(1708,"em")(1709,"strong"),tN(1710,"(opcional)"),sg()(),Tl(1711,"p"),tN(1712,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),Tl(1713,"code"),tN(1714,"po-combo"),sg(),tN(1715,"."),sg()()(),Tl(1716,"tr",13)(1717,"td",14)(1718,"div",15)(1719,"span",16),tN(1720," filterMode"),Gl(1721,"br"),sg()()(),Tl(1722,"td",17)(1723,"code",48),tN(1724,"PoMultiselectFilterMode"),sg()(),Tl(1725,"td",20)(1726,"em")(1727,"strong"),tN(1728,"(opcional)"),sg()(),Tl(1729,"p"),tN(1730,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Tl(1731,"code"),tN(1732,"startsWith"),sg(),tN(1733,", "),Tl(1734,"code"),tN(1735,"contains"),sg(),tN(1736," ou "),Tl(1737,"code"),tN(1738,"endsWith"),sg(),tN(1739,"."),sg(),Tl(1740,"blockquote")(1741,"p"),tN(1742,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),sg()(),Tl(1743,"p")(1744,"strong"),tN(1745,"Componente compat\xEDvel:"),sg(),Tl(1746,"code"),tN(1747,"po-multiselect"),sg(),tN(1748,"."),sg()()(),Tl(1749,"tr",13)(1750,"td",14)(1751,"div",15)(1752,"span",16),tN(1753," forceBooleanComponentType"),Gl(1754,"br"),sg()()(),Tl(1755,"td",17)(1756,"code",49),tN(1757,"ForceBooleanComponentEnum"),sg()(),Tl(1758,"td",20)(1759,"em")(1760,"strong"),tN(1761,"(opcional)"),sg()(),Tl(1762,"p"),tN(1763,"Valores aceitos:"),sg(),Tl(1764,"ul")(1765,"li"),tN(1766,"ForceBooleanComponentEnum.switch"),sg(),Tl(1767,"li"),tN(1768,"ForceBooleanComponentEnum.checkbox"),sg()()()(),Tl(1769,"tr",13)(1770,"td",14)(1771,"div",15)(1772,"span",16),tN(1773," forceOptionsComponentType"),Gl(1774,"br"),sg()()(),Tl(1775,"td",17)(1776,"code",50),tN(1777,"ForceOptionComponentEnum"),sg()(),Tl(1778,"td",20)(1779,"em")(1780,"strong"),tN(1781,"(opcional)"),sg()(),Tl(1782,"p"),tN(1783,"pode ser utilizada em conjunto com a propriedade "),Tl(1784,"code"),tN(1785,"options"),sg(),tN(1786," for\xE7ando o componente a renderizar um "),Tl(1787,"code"),tN(1788,"po-select"),sg(),tN(1789," ou "),Tl(1790,"code"),tN(1791,"po-radio-group"),sg(),tN(1792,"."),sg(),Tl(1793,"p"),tN(1794,"Valores aceitos:"),sg(),Tl(1795,"ul")(1796,"li"),tN(1797,"ForceOptionComponentEnum.radioGroup"),sg(),Tl(1798,"li"),tN(1799,"ForceOptionComponentEnum.select"),sg()(),Tl(1800,"blockquote")(1801,"p"),tN(1802,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),Tl(1803,"code"),tN(1804,"optionsMulti"),sg(),tN(1805," e "),Tl(1806,"code"),tN(1807,"optionsService"),sg(),tN(1808,"."),sg()()()(),Tl(1809,"tr",13)(1810,"td",14)(1811,"div",15)(1812,"span",16),tN(1813," formField"),Gl(1814,"br"),sg()()(),Tl(1815,"td",17)(1816,"code",18),tN(1817,"string"),sg()(),Tl(1818,"td",20)(1819,"em")(1820,"strong"),tN(1821,"(opcional)"),sg()(),Tl(1822,"p"),tN(1823,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Tl(1824,"code"),tN(1825,"url"),sg(),tN(1826,"."),sg(),Tl(1827,"blockquote")(1828,"p"),tN(1829,"O valor default \xE9 "),Tl(1830,"code"),tN(1831,"files"),sg()()(),Tl(1832,"p")(1833,"strong"),tN(1834,"Componente compat\xEDvel"),sg(),tN(1835,": "),Tl(1836,"code"),tN(1837,"po-upload"),sg()()()(),Tl(1838,"tr",13)(1839,"td",14)(1840,"div",15)(1841,"span",16),tN(1842," format"),Gl(1843,"br"),sg()()(),Tl(1844,"td",17)(1845,"code",18),tN(1846,"string "),sg(),Tl(1847,"code",32),tN(1848," Array<string>"),sg()(),Tl(1849,"td",20)(1850,"em")(1851,"strong"),tN(1852,"(opcional)"),sg()(),Tl(1853,"p"),tN(1854,"Formato de exibi\xE7\xE3o no campo."),sg(),Tl(1855,"p"),tN(1856,"Ao utilizar esta propriedade com o "),Tl(1857,"code"),tN(1858,"type"),sg(),Tl(1859,"em"),tN(1860,"PoDynamicFieldType.Date"),sg(),tN(1861," ou "),Tl(1862,"em"),tN(1863,"PoDynamicFieldType.DateTime"),sg(),tN(1864,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),sg(),Tl(1865,"p"),tN(1866,"Valores v\xE1lidos:"),sg(),Tl(1867,"ul")(1868,"li"),tN(1869,"dd/mm/yyyy"),sg(),Tl(1870,"li"),tN(1871,"mm/dd/yyyy"),sg(),Tl(1872,"li"),tN(1873,"yyyy/mm/dd"),sg()(),Tl(1874,"p"),tN(1875,"Ao utilizar com o "),Tl(1876,"code"),tN(1877,"type"),sg(),Tl(1878,"em"),tN(1879,"PoDynamicFieldType.Time"),sg(),tN(1880,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),sg(),Tl(1881,"p"),tN(1882,"Valores v\xE1lidos:"),sg(),Tl(1883,"ul")(1884,"li")(1885,"code"),tN(1886,"24"),sg(),tN(1887,": formato de 24 horas (padr\xE3o)"),sg(),Tl(1888,"li")(1889,"code"),tN(1890,"12"),sg(),tN(1891,": formato de 12 horas com indicador AM/PM"),sg()(),Tl(1892,"p"),tN(1893,"Tamb\xE9m pode-se utilizar em conjunto com "),Tl(1894,"code"),tN(1895,"searchService"),sg(),tN(1896,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),sg(),Tl(1897,"p")(1898,"strong"),tN(1899,"Componentes compat\xEDveis:"),sg(),Tl(1900,"code"),tN(1901,"po-datepicker"),sg(),tN(1902,", "),Tl(1903,"code"),tN(1904,"po-timepicker"),sg(),tN(1905,", "),Tl(1906,"code"),tN(1907,"po-lookup"),sg(),tN(1908,"."),sg()()(),Tl(1909,"tr",13)(1910,"td",14)(1911,"div",15)(1912,"span",16),tN(1913," formatModel"),Gl(1914,"br"),sg()()(),Tl(1915,"td",17)(1916,"code",28),tN(1917,"boolean"),sg()(),Tl(1918,"td",20)(1919,"em")(1920,"strong"),tN(1921,"(opcional)"),sg()(),Tl(1922,"p"),tN(1923,"Indica se o "),Tl(1924,"code"),tN(1925,"model"),sg(),tN(1926," receber\xE1 o valor formatado pelas propriedades "),Tl(1927,"code"),tN(1928,"p-label-on"),sg(),tN(1929," e "),Tl(1930,"code"),tN(1931,"p-label-off"),sg(),tN(1932,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),sg(),Tl(1933,"p"),tN(1934,"O valor padr\xE3o \xE9: "),Tl(1935,"code"),tN(1936,"false"),sg(),tN(1937,"."),sg(),Tl(1938,"blockquote")(1939,"p"),tN(1940,"Esta propriedade est\xE1 disponivel apenas para o "),Tl(1941,"code"),tN(1942,"swicth"),sg(),tN(1943,"."),sg()()()(),Tl(1944,"tr",13)(1945,"td",14)(1946,"div",15)(1947,"span",16),tN(1948," formatTime"),Gl(1949,"br"),sg()()(),Tl(1950,"td",17)(1951,"code",18),tN(1952,"string"),sg()(),Tl(1953,"td",20)(1954,"em")(1955,"strong"),tN(1956,"(opcional)"),sg()(),Tl(1957,"p"),tN(1958,"Define o formato de exibi\xE7\xE3o do timer ("),Tl(1959,"code"),tN(1960,"'12'"),sg(),tN(1961," ou "),Tl(1962,"code"),tN(1963,"'24'"),sg(),tN(1964,")."),sg(),Tl(1965,"p")(1966,"strong"),tN(1967,"Componente compat\xEDvel:"),sg(),Tl(1968,"code"),tN(1969,"po-datetimepicker"),sg(),tN(1970,", "),Tl(1971,"code"),tN(1972,"po-timepicker"),sg()()()(),Tl(1973,"tr",13)(1974,"td",14)(1975,"div",15)(1976,"span",16),tN(1977," gridColumns"),Gl(1978,"br"),sg()()(),Tl(1979,"td",17)(1980,"code",41),tN(1981,"number"),sg()(),Tl(1982,"td",20)(1983,"em")(1984,"strong"),tN(1985,"(opcional)"),sg()(),Tl(1986,"p"),tN(1987,"Tamanho de exibi\xE7\xE3o do campo em telas."),sg(),Tl(1988,"p"),tN(1989,"Deve ser usado o sistema de "),Tl(1990,"strong"),tN(1991,"grid"),sg(),tN(1992," do PO (1 ... 12 colunas)."),sg(),Tl(1993,"blockquote")(1994,"p"),tN(1995,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Tl(1996,"tr",13)(1997,"td",14)(1998,"div",15)(1999,"span",16),tN(2e3," gridLgColumns"),Gl(2001,"br"),sg()()(),Tl(2002,"td",17)(2003,"code",41),tN(2004,"number"),sg()(),Tl(2005,"td",20)(2006,"em")(2007,"strong"),tN(2008,"(opcional)"),sg()(),Tl(2009,"p"),tN(2010,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Tl(2011,"p"),tN(2012,"Deve ser usado o sistema de "),Tl(2013,"strong"),tN(2014,"grid"),sg(),tN(2015," do PO (1 ... 12 colunas)."),sg(),Tl(2016,"blockquote")(2017,"p"),tN(2018,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2019,"code"),tN(2020,"gridColumns"),sg(),tN(2021,"."),sg()()()(),Tl(2022,"tr",13)(2023,"td",14)(2024,"div",15)(2025,"span",16),tN(2026," gridLgPull"),Gl(2027,"br"),sg()()(),Tl(2028,"td",17)(2029,"code",41),tN(2030,"number"),sg()(),Tl(2031,"td",20)(2032,"em")(2033,"strong"),tN(2034,"(opcional)"),sg()(),Tl(2035,"p"),tN(2036,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),sg(),Tl(2037,"p"),tN(2038,"Deve ser usado o sistema de "),Tl(2039,"strong"),tN(2040,"grid"),sg(),tN(2041," do PO (1 ... 11 colunas)."),sg(),Tl(2042,"blockquote")(2043,"p"),tN(2044,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2045,"code"),tN(2046,"gridColumns"),sg(),tN(2047,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2048,"tr",13)(2049,"td",14)(2050,"div",15)(2051,"span",16),tN(2052," gridMdColumns"),Gl(2053,"br"),sg()()(),Tl(2054,"td",17)(2055,"code",41),tN(2056,"number"),sg()(),Tl(2057,"td",20)(2058,"em")(2059,"strong"),tN(2060,"(opcional)"),sg()(),Tl(2061,"p"),tN(2062,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Tl(2063,"p"),tN(2064,"Deve ser usado o sistema de "),Tl(2065,"strong"),tN(2066,"grid"),sg(),tN(2067," do PO (1 ... 12 colunas)."),sg(),Tl(2068,"blockquote")(2069,"p"),tN(2070,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2071,"code"),tN(2072,"gridColumns"),sg(),tN(2073,"."),sg()()()(),Tl(2074,"tr",13)(2075,"td",14)(2076,"div",15)(2077,"span",16),tN(2078," gridMdPull"),Gl(2079,"br"),sg()()(),Tl(2080,"td",17)(2081,"code",41),tN(2082,"number"),sg()(),Tl(2083,"td",20)(2084,"em")(2085,"strong"),tN(2086,"(opcional)"),sg()(),Tl(2087,"p"),tN(2088,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),sg(),Tl(2089,"p"),tN(2090,"Deve ser usado o sistema de "),Tl(2091,"strong"),tN(2092,"grid"),sg(),tN(2093," do PO (1 ... 11 colunas)."),sg(),Tl(2094,"blockquote")(2095,"p"),tN(2096,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2097,"code"),tN(2098,"gridColumns"),sg(),tN(2099,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2100,"tr",13)(2101,"td",14)(2102,"div",15)(2103,"span",16),tN(2104," gridSmColumns"),Gl(2105,"br"),sg()()(),Tl(2106,"td",17)(2107,"code",41),tN(2108,"number"),sg()(),Tl(2109,"td",20)(2110,"em")(2111,"strong"),tN(2112,"(opcional)"),sg()(),Tl(2113,"p"),tN(2114,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Tl(2115,"p"),tN(2116,"Deve ser usado o sistema de "),Tl(2117,"strong"),tN(2118,"grid"),sg(),tN(2119," do PO (1 ... 12 colunas)."),sg(),Tl(2120,"blockquote")(2121,"p"),tN(2122,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2123,"code"),tN(2124,"gridColumns"),sg(),tN(2125,"."),sg()()()(),Tl(2126,"tr",13)(2127,"td",14)(2128,"div",15)(2129,"span",16),tN(2130," gridSmPull"),Gl(2131,"br"),sg()()(),Tl(2132,"td",17)(2133,"code",41),tN(2134,"number"),sg()(),Tl(2135,"td",20)(2136,"em")(2137,"strong"),tN(2138,"(opcional)"),sg()(),Tl(2139,"p"),tN(2140,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),sg(),Tl(2141,"p"),tN(2142,"Deve ser usado o sistema de "),Tl(2143,"strong"),tN(2144,"grid"),sg(),tN(2145," do PO (1 ... 11 colunas)."),sg(),Tl(2146,"blockquote")(2147,"p"),tN(2148,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2149,"code"),tN(2150,"gridColumns"),sg(),tN(2151,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2152,"tr",13)(2153,"td",14)(2154,"div",15)(2155,"span",16),tN(2156," gridXlColumns"),Gl(2157,"br"),sg()()(),Tl(2158,"td",17)(2159,"code",41),tN(2160,"number"),sg()(),Tl(2161,"td",20)(2162,"em")(2163,"strong"),tN(2164,"(opcional)"),sg()(),Tl(2165,"p"),tN(2166,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Tl(2167,"p"),tN(2168,"Deve ser usado o sistema de "),Tl(2169,"strong"),tN(2170,"grid"),sg(),tN(2171," do PO (1 ... 12 colunas)."),sg(),Tl(2172,"blockquote")(2173,"p"),tN(2174,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2175,"code"),tN(2176,"gridColumns"),sg(),tN(2177,"."),sg()()()(),Tl(2178,"tr",13)(2179,"td",14)(2180,"div",15)(2181,"span",16),tN(2182," gridXlPull"),Gl(2183,"br"),sg()()(),Tl(2184,"td",17)(2185,"code",41),tN(2186,"number"),sg()(),Tl(2187,"td",20)(2188,"em")(2189,"strong"),tN(2190,"(opcional)"),sg()(),Tl(2191,"p"),tN(2192,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),sg(),Tl(2193,"p"),tN(2194,"Deve ser usado o sistema de "),Tl(2195,"strong"),tN(2196,"grid"),sg(),tN(2197," do PO (1 ... 11 colunas)."),sg(),Tl(2198,"blockquote")(2199,"p"),tN(2200,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2201,"code"),tN(2202,"gridColumns"),sg(),tN(2203,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2204,"tr",13)(2205,"td",14)(2206,"div",15)(2207,"span",16),tN(2208," headers"),Gl(2209,"br"),sg()()(),Tl(2210,"td",17)(2211,"code",51),tN(2212,"{ [name: string]: string "),sg(),Tl(2213,"code",52),tN(2214,` Array<string>;
}`),sg()(),Tl(2215,"td",20)(2216,"em")(2217,"strong"),tN(2218,"(opcional)"),sg()(),Tl(2219,"p"),tN(2220,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),sg(),Tl(2221,"p")(2222,"strong"),tN(2223,"Componente compat\xEDvel"),sg(),tN(2224,": "),Tl(2225,"code"),tN(2226,"po-upload"),sg()()()(),Tl(2227,"tr",13)(2228,"td",14)(2229,"div",15)(2230,"span",16),tN(2231," help"),Gl(2232,"br"),sg()()(),Tl(2233,"td",17)(2234,"code",18),tN(2235,"string"),sg()(),Tl(2236,"td",20)(2237,"em")(2238,"strong"),tN(2239,"(opcional)"),sg()(),Tl(2240,"p"),tN(2241,"Texto de ajuda."),sg()()(),Tl(2242,"tr",13)(2243,"td",14)(2244,"div",15)(2245,"span",16),tN(2246," helper"),Gl(2247,"br"),sg()()(),Tl(2248,"td",17)(2249,"code",18),tN(2250,"string "),sg(),Tl(2251,"code",53),tN(2252," PoHelperOptions"),sg()(),Tl(2253,"td",20)(2254,"em")(2255,"strong"),tN(2256,"(opcional)"),sg()(),Tl(2257,"p"),tN(2258,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),sg()()(),Tl(2259,"tr",13)(2260,"td",14)(2261,"div",15)(2262,"span",16),tN(2263," hideLabelStatus"),Gl(2264,"br"),sg()()(),Tl(2265,"td",17)(2266,"code",28),tN(2267,"boolean"),sg()(),Tl(2268,"td",20)(2269,"em")(2270,"strong"),tN(2271,"(opcional)"),sg()(),Tl(2272,"p"),tN(2273,"Indica se o status do "),Tl(2274,"code"),tN(2275,"model"),sg(),tN(2276," ser\xE1 escondido visualmente ao lado do switch"),sg()()(),Tl(2277,"tr",13)(2278,"td",14)(2279,"div",15)(2280,"span",16),tN(2281," hidePasswordPeek"),Gl(2282,"br"),sg()()(),Tl(2283,"td",17)(2284,"code",28),tN(2285,"boolean"),sg()(),Tl(2286,"td",20)(2287,"em")(2288,"strong"),tN(2289,"(opcional)"),sg()(),Tl(2290,"p"),tN(2291,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),Tl(2292,"code"),tN(2293,"po-password"),sg(),tN(2294,"."),sg()()(),Tl(2295,"tr",13)(2296,"td",14)(2297,"div",15)(2298,"span",16),tN(2299," hideRestrictionsInfo"),Gl(2300,"br"),sg()()(),Tl(2301,"td",17)(2302,"code",28),tN(2303,"boolean"),sg()(),Tl(2304,"td",20)(2305,"em")(2306,"strong"),tN(2307,"(opcional)"),sg()(),Tl(2308,"p"),tN(2309,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),sg(),Tl(2310,"p")(2311,"strong"),tN(2312,"Componente compat\xEDvel"),sg(),tN(2313,": "),Tl(2314,"code"),tN(2315,"po-upload"),sg()()()(),Tl(2316,"tr",13)(2317,"td",14)(2318,"div",15)(2319,"span",16),tN(2320," hideSearch"),Gl(2321,"br"),sg()()(),Tl(2322,"td",17)(2323,"code",28),tN(2324,"boolean"),sg()(),Tl(2325,"td",20)(2326,"em")(2327,"strong"),tN(2328,"(opcional)"),sg()(),Tl(2329,"p"),tN(2330,"Esconde o campo de pesquisa existente dentro do dropdown do "),Tl(2331,"code"),tN(2332,"po-multiselect"),sg(),tN(2333,"."),sg()()(),Tl(2334,"tr",13)(2335,"td",14)(2336,"div",15)(2337,"span",16),tN(2338," hideSelectAll"),Gl(2339,"br"),sg()()(),Tl(2340,"td",17)(2341,"code",28),tN(2342,"boolean"),sg()(),Tl(2343,"td",20)(2344,"em")(2345,"strong"),tN(2346,"(opcional)"),sg()(),Tl(2347,"p"),tN(2348,'Indica se o campo "Selecionar todos" do '),Tl(2349,"code"),tN(2350,"po-multiselect"),sg(),tN(2351," ser\xE1 escondido."),sg()()(),Tl(2352,"tr",13)(2353,"td",14)(2354,"div",15)(2355,"span",16),tN(2356," hideSelectButton"),Gl(2357,"br"),sg()()(),Tl(2358,"td",17)(2359,"code",28),tN(2360,"boolean"),sg()(),Tl(2361,"td",20)(2362,"em")(2363,"strong"),tN(2364,"(opcional)"),sg()(),Tl(2365,"p"),tN(2366,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),sg(),Tl(2367,"blockquote")(2368,"p"),tN(2369,"Caso o valor definido seja "),Tl(2370,"code"),tN(2371,"true"),sg(),tN(2372,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(2373,"code"),tN(2374,"selectFiles()"),sg(),tN(2375," para sele\xE7\xE3o de arquivos."),sg()(),Tl(2376,"p")(2377,"strong"),tN(2378,"Componente compat\xEDvel"),sg(),tN(2379,": "),Tl(2380,"code"),tN(2381,"po-upload"),sg()()()(),Tl(2382,"tr",13)(2383,"td",14)(2384,"div",15)(2385,"span",16),tN(2386," hideSendButton"),Gl(2387,"br"),sg()()(),Tl(2388,"td",17)(2389,"code",28),tN(2390,"boolean"),sg()(),Tl(2391,"td",20)(2392,"em")(2393,"strong"),tN(2394,"(opcional)"),sg()(),Tl(2395,"p"),tN(2396,"Omite o bot\xE3o de envio de arquivos."),sg(),Tl(2397,"blockquote")(2398,"p"),tN(2399,"Caso o valor definido seja "),Tl(2400,"code"),tN(2401,"true"),sg(),tN(2402,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(2403,"code"),tN(2404,"sendFiles()"),sg(),tN(2405," para envio do(s) arquivo(s) selecionado(s)."),sg()(),Tl(2406,"p")(2407,"strong"),tN(2408,"Componente compat\xEDvel"),sg(),tN(2409,": "),Tl(2410,"code"),tN(2411,"po-upload"),sg()()()(),Tl(2412,"tr",13)(2413,"td",14)(2414,"div",15)(2415,"span",16),tN(2416," icon"),Gl(2417,"br"),sg()()(),Tl(2418,"td",17)(2419,"code",18),tN(2420,"string "),sg(),Tl(2421,"code",54),tN(2422," TemplateRef<void>"),sg()(),Tl(2423,"td",20)(2424,"em")(2425,"strong"),tN(2426,"(opcional)"),sg()(),Tl(2427,"p"),tN(2428,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Tl(2429,"blockquote")(2430,"p"),tN(2431,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),sg()(),Tl(2432,"ul")(2433,"li"),tN(2434,"Input;"),sg(),Tl(2435,"li"),tN(2436,"Number;"),sg(),Tl(2437,"li"),tN(2438,"Decimal;"),sg(),Tl(2439,"li"),tN(2440,"Combo;"),sg(),Tl(2441,"li"),tN(2442,"Password;"),sg()(),Tl(2443,"blockquote")(2444,"p"),tN(2445,"Veja a disponibilidade de \xEDcones em "),Tl(2446,"a",55),tN(2447,"biblioteca de \xEDcones"),sg(),tN(2448,"."),sg()()()(),Tl(2449,"tr",13)(2450,"td",14)(2451,"div",15)(2452,"span",16),tN(2453," infiniteScroll"),Gl(2454,"br"),sg()()(),Tl(2455,"td",17)(2456,"code",28),tN(2457,"boolean"),sg()(),Tl(2458,"td",20)(2459,"em")(2460,"strong"),tN(2461,"(opcional)"),sg()(),Tl(2462,"p"),tN(2463,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),sg(),Tl(2464,"p")(2465,"strong"),tN(2466,"Componentes compat\xEDveis:"),sg(),Tl(2467,"code"),tN(2468,"po-combo"),sg(),tN(2469,", "),Tl(2470,"code"),tN(2471,"po-lookup"),sg(),tN(2472,"."),sg()()(),Tl(2473,"tr",13)(2474,"td",14)(2475,"div",15)(2476,"span",16),tN(2477," infiniteScrollDistance"),Gl(2478,"br"),sg()()(),Tl(2479,"td",17)(2480,"code",41),tN(2481,"number"),sg()(),Tl(2482,"td",20)(2483,"em")(2484,"strong"),tN(2485,"(opcional)"),sg()(),Tl(2486,"p"),tN(2487,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Tl(2488,"strong"),tN(2489,"Exemplos"),sg(),Tl(2490,"code"),tN(2491,"{ infiniteScrollDistance: 80 }"),sg(),tN(2492,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),sg(),Tl(2493,"p")(2494,"strong"),tN(2495,"Componente compat\xEDvel:"),sg(),Tl(2496,"code"),tN(2497,"po-combo"),sg(),tN(2498,"."),sg()()(),Tl(2499,"tr",13)(2500,"td",14)(2501,"div",15)(2502,"span",16),tN(2503," invalidValue"),Gl(2504,"br"),sg()()(),Tl(2505,"td",17)(2506,"code",28),tN(2507,"boolean"),sg()(),Tl(2508,"td",20)(2509,"em")(2510,"strong"),tN(2511,"(opcional)"),sg()(),Tl(2512,"p"),tN(2513,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Tl(2514,"code"),tN(2515,"p-field-error-message"),sg(),tN(2516,"."),sg(),Tl(2517,"blockquote")(2518,"p"),tN(2519,"Caso essa propriedade seja definida como "),Tl(2520,"code"),tN(2521,"true"),sg(),tN(2522,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),sg()(),Tl(2523,"p")(2524,"strong"),tN(2525,"Componente compat\xEDvel"),sg(),tN(2526,": "),Tl(2527,"code"),tN(2528,"po-switch"),sg()()()(),Tl(2529,"tr",13)(2530,"td",14)(2531,"div",15)(2532,"span",16),tN(2533," isoFormat"),Gl(2534,"br"),sg()()(),Tl(2535,"td",17)(2536,"code",56),tN(2537,"PoDatepickerIsoFormat"),sg()(),Tl(2538,"td",20)(2539,"em")(2540,"strong"),tN(2541,"(opcional)"),sg()(),Tl(2542,"p"),tN(2543,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),sg(),Tl(2544,"blockquote")(2545,"p"),tN(2546,"Veja os valores v\xE1lidos no "),Tl(2547,"code"),tN(2548,"PoDatepickerIsoFormat"),sg(),tN(2549,"."),sg()(),Tl(2550,"p")(2551,"strong"),tN(2552,"Componente compat\xEDvel:"),sg(),Tl(2553,"code"),tN(2554,"po-datepicker"),sg()()()(),Tl(2555,"tr",13)(2556,"td",14)(2557,"div",15)(2558,"span",16),tN(2559," key"),Gl(2560,"br"),sg()()(),Tl(2561,"td",17)(2562,"code",28),tN(2563,"boolean"),sg()(),Tl(2564,"td",20)(2565,"em")(2566,"strong"),tN(2567,"(opcional)"),sg()(),Tl(2568,"p"),tN(2569,"Identificador"),sg()()(),Tl(2570,"tr",13)(2571,"td",14)(2572,"div",15)(2573,"span",16),tN(2574," keydown"),Gl(2575,"br"),sg()()(),Tl(2576,"td",17)(2577,"code",29),tN(2578,"Function"),sg()(),Tl(2579,"td",20)(2580,"em")(2581,"strong"),tN(2582,"(opcional)"),sg()(),Tl(2583,"p"),tN(2584,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(2585,"code"),tN(2586,"KeyboardEvent"),sg(),tN(2587," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(2588,"tr",13)(2589,"td",14)(2590,"div",15)(2591,"span",16),tN(2592," label"),Gl(2593,"br"),sg()()(),Tl(2594,"td",17)(2595,"code",18),tN(2596,"string"),sg()(),Tl(2597,"td",20)(2598,"em")(2599,"strong"),tN(2600,"(opcional)"),sg()(),Tl(2601,"p"),tN(2602,"R\xF3tulo do campo exibido."),sg(),Tl(2603,"p"),tN(2604,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Tl(2605,"code"),tN(2606,"label"),sg(),tN(2607," o valor da propriedade "),Tl(2608,"code"),tN(2609,"property"),sg(),tN(2610," com a primeira letra em mai\xFAsculo."),sg()()(),Tl(2611,"tr",13)(2612,"td",14)(2613,"div",15)(2614,"span",16),tN(2615," labelPosition"),Gl(2616,"br"),sg()()(),Tl(2617,"td",17)(2618,"code",57),tN(2619,"PoSwitchLabelPosition"),sg()(),Tl(2620,"td",20)(2621,"em")(2622,"strong"),tN(2623,"(opcional)"),sg()(),Tl(2624,"p"),tN(2625,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),sg(),Tl(2626,"blockquote")(2627,"p"),tN(2628,"Por padr\xE3o exibe \xE0 direita."),sg()()()(),Tl(2629,"tr",13)(2630,"td",14)(2631,"div",15)(2632,"span",16),tN(2633," listboxControlPosition"),Gl(2634,"br"),sg()()(),Tl(2635,"td",17)(2636,"code",58),tN(2637,"'top' "),sg(),Tl(2638,"code",59),tN(2639," 'bottom'"),sg()(),Tl(2640,"td",20)(2641,"em")(2642,"strong"),tN(2643,"(opcional)"),sg()(),Tl(2644,"p"),tN(2645,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Tl(2646,"code"),tN(2647,"listbox"),sg(),tN(2648," em rela\xE7\xE3o ao campo ("),Tl(2649,"code"),tN(2650,"top"),sg(),tN(2651," ou "),Tl(2652,"code"),tN(2653,"bottom"),sg(),tN(2654,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),sg(),Tl(2655,"p")(2656,"strong"),tN(2657,"Componentes compat\xEDveis:"),sg(),Tl(2658,"code"),tN(2659,"po-multiselect"),sg(),tN(2660,", "),Tl(2661,"code"),tN(2662,"po-combo"),sg(),tN(2663,"."),sg()()(),Tl(2664,"tr",13)(2665,"td",14)(2666,"div",15)(2667,"span",16),tN(2668," literals"),Gl(2669,"br"),sg()()(),Tl(2670,"td",17)(2671,"code",60),tN(2672,"PoLookupLiterals "),sg(),Tl(2673,"code",61),tN(2674," PoMultiselectLiterals "),sg(),Tl(2675,"code",62),tN(2676," PoComboLiterals "),sg(),Tl(2677,"code",63),tN(2678," PoDatepickerRangeLiterals "),sg(),Tl(2679,"code",64),tN(2680," PoUploadLiterals"),sg()(),Tl(2681,"td",20)(2682,"em")(2683,"strong"),tN(2684,"(opcional)"),sg()(),Tl(2685,"p"),tN(2686,"Objeto com as literais usadas para os seguintes componentes: "),Tl(2687,"code"),tN(2688,"po-lookup"),sg(),tN(2689,", "),Tl(2690,"code"),tN(2691,"po-multiselect"),sg(),tN(2692,", "),Tl(2693,"code"),tN(2694,"po-combo"),sg(),tN(2695," e "),Tl(2696,"code"),tN(2697,"po-datepicker-range"),sg(),tN(2698,"."),sg(),Tl(2699,"blockquote")(2700,"p"),tN(2701,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),sg()(),Tl(2702,"p")(2703,"strong"),tN(2704,"Componentes compat\xEDveis:"),sg(),Tl(2705,"code"),tN(2706,"po-lookup"),sg(),tN(2707,", "),Tl(2708,"code"),tN(2709,"po-multiselect"),sg(),tN(2710,", "),Tl(2711,"code"),tN(2712,"po-combo"),sg(),tN(2713,", "),Tl(2714,"code"),tN(2715,"po-datepicker-range"),sg()()()(),Tl(2716,"tr",13)(2717,"td",14)(2718,"div",15)(2719,"span",16),tN(2720," loading"),Gl(2721,"br"),sg()()(),Tl(2722,"td",17)(2723,"code",28),tN(2724,"boolean"),sg()(),Tl(2725,"td",20)(2726,"em")(2727,"strong"),tN(2728,"(opcional)"),sg()(),Tl(2729,"p"),tN(2730,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),sg(),Tl(2731,"blockquote")(2732,"p"),tN(2733,"Por padr\xE3o \xE9 "),Tl(2734,"code"),tN(2735,"false"),sg(),tN(2736,"."),sg()(),Tl(2737,"p")(2738,"strong"),tN(2739,"Componentes compat\xEDveis:"),sg(),Tl(2740,"code"),tN(2741,"po-datepicker"),sg(),tN(2742,", "),Tl(2743,"code"),tN(2744,"po-datepicker-range"),sg(),tN(2745,", "),Tl(2746,"code"),tN(2747,"po-number"),sg(),tN(2748,", "),Tl(2749,"code"),tN(2750,"po-decimal"),sg(),tN(2751,`,
`),Tl(2752,"code"),tN(2753,"po-input"),sg(),tN(2754,", "),Tl(2755,"code"),tN(2756,"po-select"),sg(),tN(2757,", "),Tl(2758,"code"),tN(2759,"po-switch"),sg(),tN(2760,", "),Tl(2761,"code"),tN(2762,"po-combo"),sg(),tN(2763,", "),Tl(2764,"code"),tN(2765,"po-lookup"),sg(),tN(2766,", "),Tl(2767,"code"),tN(2768,"po-multiselect"),sg(),tN(2769,`,
`),Tl(2770,"code"),tN(2771,"po-textarea"),sg(),tN(2772,", "),Tl(2773,"code"),tN(2774,"po-password"),sg(),tN(2775,", "),Tl(2776,"code"),tN(2777,"po-upload"),sg(),tN(2778,"."),sg()()(),Tl(2779,"tr",13)(2780,"td",14)(2781,"div",15)(2782,"span",16),tN(2783," locale"),Gl(2784,"br"),sg()()(),Tl(2785,"td",17)(2786,"code",18),tN(2787,"string"),sg()(),Tl(2788,"td",20)(2789,"em")(2790,"strong"),tN(2791,"(opcional)"),sg()(),Tl(2792,"p"),tN(2793,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Tl(2794,"a",65)(2795,"code"),tN(2796,"I18n"),sg()()(),Tl(2797,"p"),tN(2798,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(2799,"pre")(2800,"code"),tN(2801,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),sg()(),Tl(2802,"blockquote")(2803,"p"),tN(2804,"Para ver quais linguagens suportadas acesse "),Tl(2805,"a",65)(2806,"code"),tN(2807,"I18n"),sg()()()(),Tl(2808,"p")(2809,"strong"),tN(2810,"Componentes compat\xEDveis:"),sg(),Tl(2811,"code"),tN(2812,"po-datepicker"),sg(),tN(2813,", "),Tl(2814,"code"),tN(2815,"po-decimal"),sg(),tN(2816,", "),Tl(2817,"code"),tN(2818,"po-timepicker"),sg(),tN(2819,"."),sg()()(),Tl(2820,"tr",13)(2821,"td",14)(2822,"div",15)(2823,"span",16),tN(2824," mask"),Gl(2825,"br"),sg()()(),Tl(2826,"td",17)(2827,"code",18),tN(2828,"string"),sg()(),Tl(2829,"td",20)(2830,"em")(2831,"strong"),tN(2832,"(opcional)"),sg()(),Tl(2833,"p"),tN(2834,"M\xE1scara para o campo."),sg(),Tl(2835,"p")(2836,"strong"),tN(2837,"Componente compat\xEDvel:"),sg(),Tl(2838,"code"),tN(2839,"po-input"),sg(),tN(2840,"."),sg(),Tl(2841,"blockquote")(2842,"p"),tN(2843,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Tl(2844,"code"),tN(2845,"type: time"),sg(),tN(2846,"."),sg()()()(),Tl(2847,"tr",13)(2848,"td",14)(2849,"div",15)(2850,"span",16),tN(2851," maskFormatModel"),Gl(2852,"br"),sg()()(),Tl(2853,"td",17)(2854,"code",28),tN(2855,"boolean"),sg()(),Tl(2856,"td",20)(2857,"em")(2858,"strong"),tN(2859,"(opcional)"),sg()(),Tl(2860,"p"),tN(2861,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),Tl(2862,"code"),tN(2863,"false"),sg(),tN(2864,"."),sg(),Tl(2865,"p")(2866,"strong"),tN(2867,"Componente compat\xEDvel:"),sg(),Tl(2868,"code"),tN(2869,"po-input"),sg(),tN(2870,"."),sg(),Tl(2871,"blockquote")(2872,"p"),tN(2873,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Tl(2874,"code"),tN(2875,"type: time"),sg(),tN(2876,"."),sg()()()(),Tl(2877,"tr",13)(2878,"td",14)(2879,"div",15)(2880,"span",16),tN(2881," maskNoLengthValidation"),Gl(2882,"br"),sg()()(),Tl(2883,"td",17)(2884,"code",28),tN(2885,"boolean"),sg()(),Tl(2886,"td",20)(2887,"em")(2888,"strong"),tN(2889,"(opcional)"),sg()(),Tl(2890,"p"),tN(2891,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Tl(2892,"code"),tN(2893,"minLength"),sg(),tN(2894,") e m\xE1ximo ("),Tl(2895,"code"),tN(2896,"maxLength"),sg(),tN(2897,") quando h\xE1 uma m\xE1scara ("),Tl(2898,"code"),tN(2899,"p-mask"),sg(),tN(2900,") definida."),sg(),Tl(2901,"ul")(2902,"li"),tN(2903,"Quando "),Tl(2904,"code"),tN(2905,"true"),sg(),tN(2906,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Tl(2907,"li"),tN(2908,"Quando "),Tl(2909,"code"),tN(2910,"false"),sg(),tN(2911,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Tl(2912,"p")(2913,"strong"),tN(2914,"Componentes compat\xEDveis:"),sg(),Tl(2915,"code"),tN(2916,"po-input"),sg(),tN(2917,", "),Tl(2918,"code"),tN(2919,"po-decimal"),sg(),tN(2920,"."),sg(),Tl(2921,"blockquote")(2922,"p"),tN(2923,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Tl(2924,"code"),tN(2925,"p-mask-format-model"),sg(),tN(2926,"."),sg()(),Tl(2927,"p"),tN(2928,"Exemplo:"),sg(),Tl(2929,"pre")(2930,"code"),tN(2931,`fields:Array<PoDynamicFormField> = [
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
`),sg()(),Tl(2932,"ul")(2933,"li"),tN(2934,"Entrada: "),Tl(2935,"code"),tN(2936,"11.111.111/1111-11"),sg(),tN(2937," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),sg()()()(),Tl(2938,"tr",13)(2939,"td",14)(2940,"div",15)(2941,"span",16),tN(2942," maxLength"),Gl(2943,"br"),sg()()(),Tl(2944,"td",17)(2945,"code",41),tN(2946,"number"),sg()(),Tl(2947,"td",20)(2948,"em")(2949,"strong"),tN(2950,"(opcional)"),sg()(),Tl(2951,"p"),tN(2952,"Tamanho m\xE1ximo de caracteres."),sg(),Tl(2953,"p")(2954,"strong"),tN(2955,"Componentes compat\xEDveis:"),sg(),Tl(2956,"code"),tN(2957,"po-input"),sg(),tN(2958,", "),Tl(2959,"code"),tN(2960,"po-number"),sg(),tN(2961,", "),Tl(2962,"code"),tN(2963,"po-decimal"),sg(),tN(2964,", "),Tl(2965,"code"),tN(2966,"po-textarea"),sg(),tN(2967,", "),Tl(2968,"code"),tN(2969,"po-password"),sg(),tN(2970,"."),sg()()(),Tl(2971,"tr",13)(2972,"td",14)(2973,"div",15)(2974,"span",16),tN(2975," maxTime"),Gl(2976,"br"),sg()()(),Tl(2977,"td",17)(2978,"code",18),tN(2979,"string"),sg()(),Tl(2980,"td",20)(2981,"em")(2982,"strong"),tN(2983,"(opcional)"),sg()(),Tl(2984,"p"),tN(2985,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Tl(2986,"code"),tN(2987,"HH:mm"),sg(),tN(2988," ou "),Tl(2989,"code"),tN(2990,"HH:mm:ss"),sg(),tN(2991,"."),sg(),Tl(2992,"p")(2993,"strong"),tN(2994,"Componente compat\xEDvel:"),sg(),Tl(2995,"code"),tN(2996,"po-datetimepicker"),sg(),tN(2997,", "),Tl(2998,"code"),tN(2999,"po-timepicker"),sg()()()(),Tl(3e3,"tr",13)(3001,"td",14)(3002,"div",15)(3003,"span",16),tN(3004," maxValue"),Gl(3005,"br"),sg()()(),Tl(3006,"td",17)(3007,"code",18),tN(3008,"string "),sg(),Tl(3009,"code",41),tN(3010," number"),sg()(),Tl(3011,"td",20)(3012,"em")(3013,"strong"),tN(3014,"(opcional)"),sg()(),Tl(3015,"p"),tN(3016,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Tl(3017,"em"),tN(3018,"number"),sg(),tN(3019,", "),Tl(3020,"em"),tN(3021,"date"),sg(),tN(3022,", "),Tl(3023,"em"),tN(3024,"dateTime"),sg(),tN(3025," ou "),Tl(3026,"em"),tN(3027,"time"),sg(),tN(3028,"."),sg(),Tl(3029,"blockquote")(3030,"p"),tN(3031,"Para "),Tl(3032,"code"),tN(3033,"po-timepicker"),sg(),tN(3034,", o valor deve estar no formato "),Tl(3035,"code"),tN(3036,"HH:mm"),sg(),tN(3037," ou "),Tl(3038,"code"),tN(3039,"HH:mm:ss"),sg(),tN(3040,"."),sg()(),Tl(3041,"p")(3042,"strong"),tN(3043,"Componentes compat\xEDveis:"),sg(),Tl(3044,"code"),tN(3045,"po-datepicker"),sg(),tN(3046,", "),Tl(3047,"code"),tN(3048,"po-datepicker-range"),sg(),tN(3049,", "),Tl(3050,"code"),tN(3051,"po-number"),sg(),tN(3052,", "),Tl(3053,"code"),tN(3054,"po-decimal"),sg(),tN(3055,", "),Tl(3056,"code"),tN(3057,"po-timepicker"),sg()()()(),Tl(3058,"tr",13)(3059,"td",14)(3060,"div",15)(3061,"span",16),tN(3062," minLength"),Gl(3063,"br"),sg()()(),Tl(3064,"td",17)(3065,"code",41),tN(3066,"number"),sg()(),Tl(3067,"td",20)(3068,"em")(3069,"strong"),tN(3070,"(opcional)"),sg()(),Tl(3071,"p"),tN(3072,"Tamanho m\xEDnimo de caracteres."),sg(),Tl(3073,"p")(3074,"strong"),tN(3075,"Componentes compat\xEDveis:"),sg(),Tl(3076,"code"),tN(3077,"po-input"),sg(),tN(3078,", "),Tl(3079,"code"),tN(3080,"po-number"),sg(),tN(3081,", "),Tl(3082,"code"),tN(3083,"po-decimal"),sg(),tN(3084,", "),Tl(3085,"code"),tN(3086,"po-textarea"),sg(),tN(3087,", "),Tl(3088,"code"),tN(3089,"po-password"),sg(),tN(3090,"."),sg()()(),Tl(3091,"tr",13)(3092,"td",14)(3093,"div",15)(3094,"span",16),tN(3095," minTime"),Gl(3096,"br"),sg()()(),Tl(3097,"td",17)(3098,"code",18),tN(3099,"string"),sg()(),Tl(3100,"td",20)(3101,"em")(3102,"strong"),tN(3103,"(opcional)"),sg()(),Tl(3104,"p"),tN(3105,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Tl(3106,"code"),tN(3107,"HH:mm"),sg(),tN(3108," ou "),Tl(3109,"code"),tN(3110,"HH:mm:ss"),sg(),tN(3111,"."),sg(),Tl(3112,"p")(3113,"strong"),tN(3114,"Componente compat\xEDvel:"),sg(),Tl(3115,"code"),tN(3116,"po-datetimepicker"),sg(),tN(3117,", "),Tl(3118,"code"),tN(3119,"po-timepicker"),sg()()()(),Tl(3120,"tr",13)(3121,"td",14)(3122,"div",15)(3123,"span",16),tN(3124," minValue"),Gl(3125,"br"),sg()()(),Tl(3126,"td",17)(3127,"code",18),tN(3128,"string "),sg(),Tl(3129,"code",41),tN(3130," number"),sg()(),Tl(3131,"td",20)(3132,"em")(3133,"strong"),tN(3134,"(opcional)"),sg()(),Tl(3135,"p"),tN(3136,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Tl(3137,"em"),tN(3138,"number"),sg(),tN(3139,", "),Tl(3140,"em"),tN(3141,"date"),sg(),tN(3142,", "),Tl(3143,"em"),tN(3144,"dateTime"),sg(),tN(3145," ou "),Tl(3146,"em"),tN(3147,"time"),sg(),tN(3148,"."),sg(),Tl(3149,"blockquote")(3150,"p"),tN(3151,"Para "),Tl(3152,"code"),tN(3153,"po-timepicker"),sg(),tN(3154,", o valor deve estar no formato "),Tl(3155,"code"),tN(3156,"HH:mm"),sg(),tN(3157," ou "),Tl(3158,"code"),tN(3159,"HH:mm:ss"),sg(),tN(3160,"."),sg()(),Tl(3161,"p")(3162,"strong"),tN(3163,"Componentes compat\xEDveis:"),sg(),Tl(3164,"code"),tN(3165,"po-datepicker"),sg(),tN(3166,", "),Tl(3167,"code"),tN(3168,"po-datepicker-range"),sg(),tN(3169,", "),Tl(3170,"code"),tN(3171,"po-number"),sg(),tN(3172,", "),Tl(3173,"code"),tN(3174,"po-decimal"),sg(),tN(3175,", "),Tl(3176,"code"),tN(3177,"po-timepicker"),sg()()()(),Tl(3178,"tr",13)(3179,"td",14)(3180,"div",15)(3181,"span",16),tN(3182," minuteInterval"),Gl(3183,"br"),sg()()(),Tl(3184,"td",17)(3185,"code",41),tN(3186,"number"),sg()(),Tl(3187,"td",20)(3188,"em")(3189,"strong"),tN(3190,"(opcional)"),sg()(),Tl(3191,"p"),tN(3192,"Define o intervalo entre os minutos exibidos no painel do timepicker."),sg()()(),Tl(3193,"tr",13)(3194,"td",14)(3195,"div",15)(3196,"span",16),tN(3197," mode"),Gl(3198,"br"),sg()()(),Tl(3199,"td",17)(3200,"code",66),tN(3201,"'month-year' "),sg(),Tl(3202,"code",67),tN(3203," 'year'"),sg()(),Tl(3204,"td",20)(3205,"em")(3206,"strong"),tN(3207,"(opcional)"),sg()(),Tl(3208,"p"),tN(3209,"Define o modo de sele\xE7\xE3o do "),Tl(3210,"code"),tN(3211,"po-datepicker"),sg(),tN(3212,"."),sg(),Tl(3213,"p"),tN(3214,"Valores aceitos:"),sg(),Tl(3215,"ul")(3216,"li")(3217,"code"),tN(3218,"'month-year'"),sg(),tN(3219,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),Tl(3220,"code"),tN(3221,"MM/YYYY"),sg(),tN(3222,")"),sg(),Tl(3223,"li")(3224,"code"),tN(3225,"'year'"),sg(),tN(3226,": exibe sele\xE7\xE3o apenas de ano (formato "),Tl(3227,"code"),tN(3228,"YYYY"),sg(),tN(3229,")"),sg()(),Tl(3230,"p")(3231,"strong"),tN(3232,"Componente compat\xEDvel:"),sg(),Tl(3233,"code"),tN(3234,"po-datepicker"),sg()()()(),Tl(3235,"tr",13)(3236,"td",14)(3237,"div",15)(3238,"span",16),tN(3239," modelFormat"),Gl(3240,"br"),sg()()(),Tl(3241,"td",17)(3242,"code",68),tN(3243,"PoTimepickerModelFormat"),sg()(),Tl(3244,"td",20)(3245,"em")(3246,"strong"),tN(3247,"(opcional)"),sg()(),Tl(3248,"p"),tN(3249,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),Tl(3250,"code"),tN(3251,"po-timepicker"),sg(),tN(3252,"."),sg(),Tl(3253,"blockquote")(3254,"p"),tN(3255,"Veja os valores v\xE1lidos no "),Tl(3256,"code"),tN(3257,"PoTimepickerModelFormat"),sg(),tN(3258,"."),sg()(),Tl(3259,"p")(3260,"strong"),tN(3261,"Componente compat\xEDvel:"),sg(),Tl(3262,"code"),tN(3263,"po-timepicker"),sg()()()(),Tl(3264,"tr",13)(3265,"td",14)(3266,"div",15)(3267,"span",16),tN(3268," multiple"),Gl(3269,"br"),sg()()(),Tl(3270,"td",17)(3271,"code",28),tN(3272,"boolean"),sg()(),Tl(3273,"td",20)(3274,"em")(3275,"strong"),tN(3276,"(opcional)"),sg()(),Tl(3277,"p"),tN(3278,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),sg(),Tl(3279,"p")(3280,"strong"),tN(3281,"Componentes compat\xEDveis:"),sg(),Tl(3282,"code"),tN(3283,"po-lookup"),sg(),tN(3284,", "),Tl(3285,"code"),tN(3286,"po-upload"),sg()()()(),Tl(3287,"tr",13)(3288,"td",14)(3289,"div",15)(3290,"span",16),tN(3291," noAutocomplete"),Gl(3292,"br"),sg()()(),Tl(3293,"td",17)(3294,"code",28),tN(3295,"boolean"),sg()(),Tl(3296,"td",20)(3297,"em")(3298,"strong"),tN(3299,"(opcional)"),sg()(),Tl(3300,"p"),tN(3301,"Define a propriedade nativa "),Tl(3302,"code"),tN(3303,"autocomplete"),sg(),tN(3304," do campo como off."),sg(),Tl(3305,"p")(3306,"strong"),tN(3307,"Componentes compat\xEDveis:"),sg(),Tl(3308,"code"),tN(3309,"po-datepicker"),sg(),tN(3310,", "),Tl(3311,"code"),tN(3312,"po-datepicker-range"),sg(),tN(3313,", "),Tl(3314,"code"),tN(3315,"po-input"),sg(),tN(3316,", "),Tl(3317,"code"),tN(3318,"po-number"),sg(),tN(3319,", "),Tl(3320,"code"),tN(3321,"po-decimal"),sg(),tN(3322,`,
`),Tl(3323,"code"),tN(3324,"po-lookup"),sg(),tN(3325,", "),Tl(3326,"code"),tN(3327,"po-password"),sg(),tN(3328,", "),Tl(3329,"code"),tN(3330,"po-timepicker"),sg(),tN(3331,"."),sg()()(),Tl(3332,"tr",13)(3333,"td",14)(3334,"div",15)(3335,"span",16),tN(3336," offsetColumns"),Gl(3337,"br"),sg()()(),Tl(3338,"td",17)(3339,"code",41),tN(3340,"number"),sg()(),Tl(3341,"td",20)(3342,"em")(3343,"strong"),tN(3344,"(opcional)"),sg()(),Tl(3345,"p"),tN(3346,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),sg(),Tl(3347,"p"),tN(3348,"Deve ser usado o sistema de "),Tl(3349,"strong"),tN(3350,"grid"),sg(),tN(3351," do PO (1 ... 12 colunas)."),sg(),Tl(3352,"blockquote")(3353,"p"),tN(3354,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Tl(3355,"tr",13)(3356,"td",14)(3357,"div",15)(3358,"span",16),tN(3359," offsetLgColumns"),Gl(3360,"br"),sg()()(),Tl(3361,"td",17)(3362,"code",41),tN(3363,"number"),sg()(),Tl(3364,"td",20)(3365,"em")(3366,"strong"),tN(3367,"(opcional)"),sg()(),Tl(3368,"p"),tN(3369,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Tl(3370,"p"),tN(3371,"Deve ser usado o sistema de "),Tl(3372,"strong"),tN(3373,"grid"),sg(),tN(3374," do PO (1 ... 12 colunas)."),sg(),Tl(3375,"blockquote")(3376,"p"),tN(3377,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(3378,"code"),tN(3379,"offsetColumns"),sg(),tN(3380,"."),sg()()()(),Tl(3381,"tr",13)(3382,"td",14)(3383,"div",15)(3384,"span",16),tN(3385," offsetMdColumns"),Gl(3386,"br"),sg()()(),Tl(3387,"td",17)(3388,"code",41),tN(3389,"number"),sg()(),Tl(3390,"td",20)(3391,"em")(3392,"strong"),tN(3393,"(opcional)"),sg()(),Tl(3394,"p"),tN(3395,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Tl(3396,"p"),tN(3397,"Deve ser usado o sistema de "),Tl(3398,"strong"),tN(3399,"grid"),sg(),tN(3400," do PO (1 ... 12 colunas)."),sg(),Tl(3401,"blockquote")(3402,"p"),tN(3403,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(3404,"code"),tN(3405,"offsetColumns"),sg(),tN(3406,"."),sg()()()(),Tl(3407,"tr",13)(3408,"td",14)(3409,"div",15)(3410,"span",16),tN(3411," offsetSmColumns"),Gl(3412,"br"),sg()()(),Tl(3413,"td",17)(3414,"code",41),tN(3415,"number"),sg()(),Tl(3416,"td",20)(3417,"em")(3418,"strong"),tN(3419,"(opcional)"),sg()(),Tl(3420,"p"),tN(3421,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Tl(3422,"p"),tN(3423,"Deve ser usado o sistema de "),Tl(3424,"strong"),tN(3425,"grid"),sg(),tN(3426," do PO (1 ... 12 colunas)."),sg(),Tl(3427,"blockquote")(3428,"p"),tN(3429,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(3430,"code"),tN(3431,"offsetColumns"),sg(),tN(3432,"."),sg()()()(),Tl(3433,"tr",13)(3434,"td",14)(3435,"div",15)(3436,"span",16),tN(3437," offsetXlColumns"),Gl(3438,"br"),sg()()(),Tl(3439,"td",17)(3440,"code",41),tN(3441,"number"),sg()(),Tl(3442,"td",20)(3443,"em")(3444,"strong"),tN(3445,"(opcional)"),sg()(),Tl(3446,"p"),tN(3447,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Tl(3448,"p"),tN(3449,"Deve ser usado o sistema de "),Tl(3450,"strong"),tN(3451,"grid"),sg(),tN(3452," do PO (1 ... 12 colunas)."),sg(),Tl(3453,"blockquote")(3454,"p"),tN(3455,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(3456,"code"),tN(3457,"offsetColumns"),sg(),tN(3458,"."),sg()()()(),Tl(3459,"tr",13)(3460,"td",14)(3461,"div",15)(3462,"span",16),tN(3463," onError"),Gl(3464,"br"),sg()()(),Tl(3465,"td",17)(3466,"code",29),tN(3467,"Function"),sg()(),Tl(3468,"td",20)(3469,"em")(3470,"strong"),tN(3471,"(opcional)"),sg()(),Tl(3472,"p"),tN(3473,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),sg(),Tl(3474,"blockquote")(3475,"p"),tN(3476,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Tl(3477,"code"),tN(3478,"HttpErrorResponse"),sg(),tN(3479,"."),sg()(),Tl(3480,"p")(3481,"strong"),tN(3482,"Componente compat\xEDvel"),sg(),tN(3483,": "),Tl(3484,"code"),tN(3485,"po-upload"),sg()()()(),Tl(3486,"tr",13)(3487,"td",14)(3488,"div",15)(3489,"span",16),tN(3490," onSuccess"),Gl(3491,"br"),sg()()(),Tl(3492,"td",17)(3493,"code",29),tN(3494,"Function"),sg()(),Tl(3495,"td",20)(3496,"em")(3497,"strong"),tN(3498,"(opcional)"),sg()(),Tl(3499,"p"),tN(3500,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),sg(),Tl(3501,"blockquote")(3502,"p"),tN(3503,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Tl(3504,"code"),tN(3505,"HttpResponse"),sg(),tN(3506,"."),sg()(),Tl(3507,"p")(3508,"strong"),tN(3509,"Componente compat\xEDvel"),sg(),tN(3510,": "),Tl(3511,"code"),tN(3512,"po-upload"),sg()()()(),Tl(3513,"tr",13)(3514,"td",14)(3515,"div",15)(3516,"span",16),tN(3517," onUpload"),Gl(3518,"br"),sg()()(),Tl(3519,"td",17)(3520,"code",29),tN(3521,"Function"),sg()(),Tl(3522,"td",20)(3523,"em")(3524,"strong"),tN(3525,"(opcional)"),sg()(),Tl(3526,"p"),tN(3527,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),sg(),Tl(3528,"pre")(3529,"code"),tN(3530,`event.data = {id: 'id do usu\xE1rio'};
`),sg()(),Tl(3531,"p")(3532,"strong"),tN(3533,"Componente compat\xEDvel"),sg(),tN(3534,": "),Tl(3535,"code"),tN(3536,"po-upload"),sg()()()(),Tl(3537,"tr",13)(3538,"td",14)(3539,"div",15)(3540,"span",16),tN(3541," optional"),Gl(3542,"br"),sg()()(),Tl(3543,"td",17)(3544,"code",28),tN(3545,"boolean"),sg()(),Tl(3546,"td",20)(3547,"em")(3548,"strong"),tN(3549,"(opcional)"),sg()(),Tl(3550,"p"),tN(3551,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(3552,"blockquote")(3553,"p"),tN(3554,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),sg()(),Tl(3555,"ul")(3556,"li"),tN(3557,"O campo for "),Tl(3558,"code"),tN(3559,"required"),sg(),tN(3560,", ou;"),sg(),Tl(3561,"li"),tN(3562,"N\xE3o possuir "),Tl(3563,"code"),tN(3564,"help"),sg(),tN(3565," e "),Tl(3566,"code"),tN(3567,"label"),sg(),tN(3568,"."),sg()(),Tl(3569,"p")(3570,"strong"),tN(3571,"Componentes compat\xEDveis:"),sg(),Tl(3572,"code"),tN(3573,"po-datepicker"),sg(),tN(3574,", "),Tl(3575,"code"),tN(3576,"po-datepicker-range"),sg(),tN(3577,", "),Tl(3578,"code"),tN(3579,"po-timepicker"),sg(),tN(3580,", "),Tl(3581,"code"),tN(3582,"po-input"),sg(),tN(3583,", "),Tl(3584,"code"),tN(3585,"po-number"),sg(),tN(3586,`,
`),Tl(3587,"code"),tN(3588,"po-decimal"),sg(),tN(3589,", "),Tl(3590,"code"),tN(3591,"po-select"),sg(),tN(3592,", "),Tl(3593,"code"),tN(3594,"po-radio-group"),sg(),tN(3595,", "),Tl(3596,"code"),tN(3597,"po-combo"),sg(),tN(3598,", "),Tl(3599,"code"),tN(3600,"po-lookup"),sg(),tN(3601,", "),Tl(3602,"code"),tN(3603,"po-checkbox-group"),sg(),tN(3604,", "),Tl(3605,"code"),tN(3606,"po-multiselect"),sg(),tN(3607,`,
`),Tl(3608,"code"),tN(3609,"po-textarea"),sg(),tN(3610,", "),Tl(3611,"code"),tN(3612,"po-password"),sg(),tN(3613,"."),sg()()(),Tl(3614,"tr",13)(3615,"td",14)(3616,"div",15)(3617,"span",16),tN(3618," options"),Gl(3619,"br"),sg()()(),Tl(3620,"td",17)(3621,"code",32),tN(3622,"Array<string> "),sg(),Tl(3623,"code",69),tN(3624," Array<PoSelectOption> "),sg(),Tl(3625,"code",70),tN(3626," Array<PoMultiselectOption> "),sg(),Tl(3627,"code",71),tN(3628," Array<PoCheckboxGroupOption> "),sg(),Tl(3629,"code",72),tN(3630," Array<any>"),sg()(),Tl(3631,"td",20)(3632,"em")(3633,"strong"),tN(3634,"(opcional)"),sg()(),Tl(3635,"p"),tN(3636,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),sg(),Tl(3637,"p")(3638,"strong"),tN(3639,"Componentes compat\xEDveis:"),sg(),Tl(3640,"code"),tN(3641,"po-select"),sg(),tN(3642,", "),Tl(3643,"code"),tN(3644,"po-radio-group"),sg(),tN(3645,", "),Tl(3646,"code"),tN(3647,"po-checkbox-group"),sg(),tN(3648,", "),Tl(3649,"code"),tN(3650,"po-multiselect"),sg(),tN(3651,"."),sg()()(),Tl(3652,"tr",13)(3653,"td",14)(3654,"div",15)(3655,"span",16),tN(3656," optionsMulti"),Gl(3657,"br"),sg()()(),Tl(3658,"td",17)(3659,"code",28),tN(3660,"boolean"),sg()(),Tl(3661,"td",20)(3662,"em")(3663,"strong"),tN(3664,"(opcional)"),sg()(),Tl(3665,"p"),tN(3666,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),sg()()(),Tl(3667,"tr",13)(3668,"td",14)(3669,"div",15)(3670,"span",16),tN(3671," optionsService"),Gl(3672,"br"),sg()()(),Tl(3673,"td",17)(3674,"code",18),tN(3675,"string "),sg(),Tl(3676,"code",73),tN(3677," PoComboFilter "),sg(),Tl(3678,"code",74),tN(3679," PoMultiselectFilter"),sg()(),Tl(3680,"td",20)(3681,"em")(3682,"strong"),tN(3683,"(opcional)"),sg()(),Tl(3684,"p"),tN(3685,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Tl(3686,"strong"),tN(3687,"Importante"),sg()(),Tl(3688,"blockquote")(3689,"p"),tN(3690,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Tl(3691,"a",75),tN(3692,"guia de API do PO UI"),sg(),tN(3693,"."),sg()()()(),Tl(3694,"tr",13)(3695,"td",14)(3696,"div",15)(3697,"span",16),tN(3698," order"),Gl(3699,"br"),sg()()(),Tl(3700,"td",17)(3701,"code",41),tN(3702,"number"),sg()(),Tl(3703,"td",20)(3704,"em")(3705,"strong"),tN(3706,"(opcional)"),sg()(),Tl(3707,"p"),tN(3708,"Informa a ordem de exibi\xE7\xE3o do campo."),sg(),Tl(3709,"p"),tN(3710,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(3711,"p")(3712,"code"),tN(3713,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),sg()(),Tl(3714,"p"),tN(3715,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Tl(3716,"code"),tN(3717,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),sg()(),Tl(3718,"p"),tN(3719,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),sg(),Tl(3720,"p"),tN(3721,"Campos sem "),Tl(3722,"code"),tN(3723,"order"),sg(),tN(3724,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),sg()()(),Tl(3725,"tr",13)(3726,"td",14)(3727,"div",15)(3728,"span",16),tN(3729," params"),Gl(3730,"br"),sg()()(),Tl(3731,"td",17)(3732,"code",33),tN(3733,"any"),sg()(),Tl(3734,"td",20)(3735,"em")(3736,"strong"),tN(3737,"(opcional)"),sg()(),Tl(3738,"p"),tN(3739,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),Tl(3740,"code"),tN(3741,"po-lookup"),sg(),tN(3742,` e
`),Tl(3743,"code"),tN(3744,"po-combo"),sg(),tN(3745,"."),sg(),Tl(3746,"p"),tN(3747,"Por exemplo, para o par\xE2metro "),Tl(3748,"code"),tN(3749,"{ age: 23 }"),sg(),tN(3750," a URL da requisi\xE7\xE3o ficaria:"),sg(),Tl(3751,"p")(3752,"code"),tN(3753,"url + ?age=23&filter=Peter"),sg()()()(),Tl(3754,"tr",13)(3755,"td",14)(3756,"div",15)(3757,"span",16),tN(3758," pattern"),Gl(3759,"br"),sg()()(),Tl(3760,"td",17)(3761,"code",18),tN(3762,"string"),sg()(),Tl(3763,"td",20)(3764,"em")(3765,"strong"),tN(3766,"(opcional)"),sg()(),Tl(3767,"p"),tN(3768,"Regex para valida\xE7\xE3o do campo."),sg(),Tl(3769,"p")(3770,"strong"),tN(3771,"Componentes compat\xEDveis:"),sg(),Tl(3772,"code"),tN(3773,"po-input"),sg(),tN(3774,", "),Tl(3775,"code"),tN(3776,"po-password"),sg(),tN(3777,"."),sg()()(),Tl(3778,"tr",13)(3779,"td",14)(3780,"div",15)(3781,"span",16),tN(3782," placeholder"),Gl(3783,"br"),sg()()(),Tl(3784,"td",17)(3785,"code",18),tN(3786,"string"),sg()(),Tl(3787,"td",20)(3788,"em")(3789,"strong"),tN(3790,"(opcional)"),sg()(),Tl(3791,"p"),tN(3792,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),sg(),Tl(3793,"p")(3794,"strong"),tN(3795,"Componentes compat\xEDveis:"),sg(),Tl(3796,"code"),tN(3797,"po-datepicker"),sg(),tN(3798,", "),Tl(3799,"code"),tN(3800,"po-datepicker-range"),sg(),tN(3801,", "),Tl(3802,"code"),tN(3803,"po-timepicker"),sg(),tN(3804,", "),Tl(3805,"code"),tN(3806,"po-input"),sg(),tN(3807,", "),Tl(3808,"code"),tN(3809,"po-number"),sg(),tN(3810,", "),Tl(3811,"code"),tN(3812,"po-decimal"),sg(),tN(3813,", "),Tl(3814,"code"),tN(3815,"po-select"),sg(),tN(3816,", "),Tl(3817,"code"),tN(3818,"po-combo"),sg(),tN(3819,", "),Tl(3820,"code"),tN(3821,"po-lookup"),sg(),tN(3822,", "),Tl(3823,"code"),tN(3824,"po-multiselect"),sg(),tN(3825,", "),Tl(3826,"code"),tN(3827,"po-textarea"),sg(),tN(3828,", "),Tl(3829,"code"),tN(3830,"po-password"),sg(),tN(3831,"."),sg()()(),Tl(3832,"tr",13)(3833,"td",14)(3834,"div",15)(3835,"span",16),tN(3836," placeholderSearch"),Gl(3837,"br"),sg()()(),Tl(3838,"td",17)(3839,"code",18),tN(3840,"string"),sg()(),Tl(3841,"td",20)(3842,"em")(3843,"strong"),tN(3844,"(opcional)"),sg()(),Tl(3845,"p"),tN(3846,"Placeholder do campo de pesquisa do "),Tl(3847,"code"),tN(3848,"po-multiselect"),sg(),tN(3849,"."),sg(),Tl(3850,"blockquote")(3851,"p"),tN(3852,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),sg()()()(),Tl(3853,"tr",13)(3854,"td",14)(3855,"div",15)(3856,"span",16),tN(3857," property"),Gl(3858,"br"),sg()()(),Tl(3859,"td",17)(3860,"code",18),tN(3861,"string"),sg()(),Tl(3862,"td",20)(3863,"p"),tN(3864,"Nome de refer\xEAncia do campo."),sg()()(),Tl(3865,"tr",13)(3866,"td",14)(3867,"div",15)(3868,"span",16),tN(3869," range"),Gl(3870,"br"),sg()()(),Tl(3871,"td",17)(3872,"code",28),tN(3873,"boolean"),sg()(),Tl(3874,"td",20)(3875,"em")(3876,"strong"),tN(3877,"(opcional)"),sg()(),Tl(3878,"p"),tN(3879,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),sg(),Tl(3880,"blockquote")(3881,"p"),tN(3882,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),sg()()()(),Tl(3883,"tr",13)(3884,"td",14)(3885,"div",15)(3886,"span",16),tN(3887," rangePresetOptions"),Gl(3888,"br"),sg()()(),Tl(3889,"td",17)(3890,"code",76),tN(3891,"Array<PoCalendarRangePreset>"),sg()(),Tl(3892,"td",20)(3893,"em")(3894,"strong"),tN(3895,"(opcional)"),sg()(),Tl(3896,"p"),tN(3897,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),sg(),Tl(3898,"p"),tN(3899,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Tl(3900,"code"),tN(3901,"PoCalendarRangePreset"),sg(),tN(3902,"."),sg(),Tl(3903,"p")(3904,"strong"),tN(3905,"Componente compat\xEDvel:"),sg(),Tl(3906,"code"),tN(3907,"po-datepicker-range"),sg()()()(),Tl(3908,"tr",13)(3909,"td",14)(3910,"div",15)(3911,"span",16),tN(3912," rangePresets"),Gl(3913,"br"),sg()()(),Tl(3914,"td",17)(3915,"code",28),tN(3916,"boolean "),sg(),Tl(3917,"code",32),tN(3918," Array<string>"),sg()(),Tl(3919,"td",20)(3920,"em")(3921,"strong"),tN(3922,"(opcional)"),sg()(),Tl(3923,"p"),tN(3924,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),sg(),Tl(3925,"p"),tN(3926,"Aceita os seguintes valores:"),sg(),Tl(3927,"ul")(3928,"li")(3929,"code"),tN(3930,"true"),sg(),tN(3931,": exibe todos os presets padr\xE3o."),sg(),Tl(3932,"li")(3933,"code"),tN(3934,"false"),sg(),tN(3935,": n\xE3o exibe os presets padr\xE3o."),sg(),Tl(3936,"li")(3937,"code"),tN(3938,"Array<string>"),sg(),tN(3939,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),sg()(),Tl(3940,"p")(3941,"strong"),tN(3942,"Componente compat\xEDvel:"),sg(),Tl(3943,"code"),tN(3944,"po-datepicker-range"),sg()()()(),Tl(3945,"tr",13)(3946,"td",14)(3947,"div",15)(3948,"span",16),tN(3949," rangePresetsOrder"),Gl(3950,"br"),sg()()(),Tl(3951,"td",17)(3952,"code",77),tN(3953,"'asc' "),sg(),Tl(3954,"code",78),tN(3955," 'desc'"),sg()(),Tl(3956,"td",20)(3957,"em")(3958,"strong"),tN(3959,"(opcional)"),sg()(),Tl(3960,"p"),tN(3961,"Define a ordena\xE7\xE3o dos presets na lista."),sg(),Tl(3962,"p"),tN(3963,"Valores aceitos:"),sg(),Tl(3964,"ul")(3965,"li")(3966,"code"),tN(3967,"'asc'"),sg(),tN(3968,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),sg(),Tl(3969,"li")(3970,"code"),tN(3971,"'desc'"),sg(),tN(3972,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),sg()(),Tl(3973,"p")(3974,"strong"),tN(3975,"Componente compat\xEDvel:"),sg(),Tl(3976,"code"),tN(3977,"po-datepicker-range"),sg()()()(),Tl(3978,"tr",13)(3979,"td",14)(3980,"div",15)(3981,"span",16),tN(3982," readonly"),Gl(3983,"br"),sg()()(),Tl(3984,"td",17)(3985,"code",28),tN(3986,"boolean"),sg()(),Tl(3987,"td",20)(3988,"em")(3989,"strong"),tN(3990,"(opcional)"),sg()(),Tl(3991,"p"),tN(3992,"Indica que o campo ser\xE1 somente leitura."),sg(),Tl(3993,"p")(3994,"strong"),tN(3995,"Componentes compat\xEDveis:"),sg(),Tl(3996,"code"),tN(3997,"po-datepicker"),sg(),tN(3998,", "),Tl(3999,"code"),tN(4e3,"po-datepicker-range"),sg(),tN(4001,", "),Tl(4002,"code"),tN(4003,"po-timepicker"),sg(),tN(4004,", "),Tl(4005,"code"),tN(4006,"po-input"),sg(),tN(4007,", "),Tl(4008,"code"),tN(4009,"po-number"),sg(),tN(4010,`,
`),Tl(4011,"code"),tN(4012,"po-decimal"),sg(),tN(4013,", "),Tl(4014,"code"),tN(4015,"po-select"),sg(),tN(4016,", "),Tl(4017,"code"),tN(4018,"po-textarea"),sg(),tN(4019,", "),Tl(4020,"code"),tN(4021,"po-password"),sg(),tN(4022,"."),sg()()(),Tl(4023,"tr",13)(4024,"td",14)(4025,"div",15)(4026,"span",16),tN(4027," removeInitialFilter"),Gl(4028,"br"),sg()()(),Tl(4029,"td",17)(4030,"code",28),tN(4031,"boolean"),sg()(),Tl(4032,"td",20)(4033,"em")(4034,"strong"),tN(4035,"(opcional)"),sg()(),Tl(4036,"p"),tN(4037,"Define que o filtro no primeiro clique ser\xE1 removido."),sg(),Tl(4038,"blockquote")(4039,"p"),tN(4040,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),sg()(),Tl(4041,"p")(4042,"strong"),tN(4043,"Componente compat\xEDvel"),sg(),tN(4044,": "),Tl(4045,"code"),tN(4046,"po-combo"),sg()()()(),Tl(4047,"tr",13)(4048,"td",14)(4049,"div",15)(4050,"span",16),tN(4051," required"),Gl(4052,"br"),sg()()(),Tl(4053,"td",17)(4054,"code",28),tN(4055,"boolean"),sg()(),Tl(4056,"td",20)(4057,"em")(4058,"strong"),tN(4059,"(opcional)"),sg()(),Tl(4060,"p"),tN(4061,"Define a obrigatoriedade do campo."),sg(),Tl(4062,"p")(4063,"strong"),tN(4064,"Componentes compat\xEDveis:"),sg(),Tl(4065,"code"),tN(4066,"po-datepicker"),sg(),tN(4067,", "),Tl(4068,"code"),tN(4069,"po-datepicker-range"),sg(),tN(4070,", "),Tl(4071,"code"),tN(4072,"po-timepicker"),sg(),tN(4073,", "),Tl(4074,"code"),tN(4075,"po-input"),sg(),tN(4076,", "),Tl(4077,"code"),tN(4078,"po-number"),sg(),tN(4079,`,
`),Tl(4080,"code"),tN(4081,"po-decimal"),sg(),tN(4082,", "),Tl(4083,"code"),tN(4084,"po-select"),sg(),tN(4085,", "),Tl(4086,"code"),tN(4087,"po-radio-group"),sg(),tN(4088,", "),Tl(4089,"code"),tN(4090,"po-combo"),sg(),tN(4091,", "),Tl(4092,"code"),tN(4093,"po-lookup"),sg(),tN(4094,", "),Tl(4095,"code"),tN(4096,"po-checkbox-group"),sg(),tN(4097,", "),Tl(4098,"code"),tN(4099,"po-multiselect"),sg(),tN(4100,`,
`),Tl(4101,"code"),tN(4102,"po-textarea"),sg(),tN(4103,", "),Tl(4104,"code"),tN(4105,"po-password``, "),sg(),tN(4106,"po-upload`."),sg()()(),Tl(4107,"tr",13)(4108,"td",14)(4109,"div",15)(4110,"span",16),tN(4111," requiredFieldErrorMessage"),Gl(4112,"br"),sg()()(),Tl(4113,"td",17)(4114,"code",28),tN(4115,"boolean"),sg()(),Tl(4116,"td",20)(4117,"em")(4118,"strong"),tN(4119,"(opcional)"),sg()(),Tl(4120,"p"),tN(4121,"Exibe a mensagem setada na propriedade "),Tl(4122,"code"),tN(4123,"errorMessage"),sg(),tN(4124," se o campo estiver vazio e for requerido."),sg(),Tl(4125,"blockquote")(4126,"p"),tN(4127,"Necess\xE1rio que a propriedade "),Tl(4128,"code"),tN(4129,"required"),sg(),tN(4130," esteja habilitada."),sg()(),Tl(4131,"p")(4132,"strong"),tN(4133,"Componentes compat\xEDveis:"),sg(),Tl(4134,"code"),tN(4135,"po-datepicker"),sg(),tN(4136,", "),Tl(4137,"code"),tN(4138,"po-timepicker"),sg(),tN(4139,", "),Tl(4140,"code"),tN(4141,"po-input"),sg(),tN(4142,", "),Tl(4143,"code"),tN(4144,"po-number"),sg(),tN(4145,", "),Tl(4146,"code"),tN(4147,"po-decimal"),sg(),tN(4148,", "),Tl(4149,"code"),tN(4150,"po-password"),sg(),tN(4151,"."),sg()()(),Tl(4152,"tr",13)(4153,"td",14)(4154,"div",15)(4155,"span",16),tN(4156," restrictions"),Gl(4157,"br"),sg()()(),Tl(4158,"td",17)(4159,"code",79),tN(4160,"PoUploadFileRestrictions"),sg()(),Tl(4161,"td",20)(4162,"em")(4163,"strong"),tN(4164,"(opcional)"),sg()(),Tl(4165,"p"),tN(4166,"Objeto que segue a defini\xE7\xE3o da interface "),Tl(4167,"code"),tN(4168,"PoUploadFileRestrictions"),sg(),tN(4169,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),sg(),Tl(4170,"p")(4171,"strong"),tN(4172,"Componente compat\xEDvel"),sg(),tN(4173,": "),Tl(4174,"code"),tN(4175,"po-upload"),sg()()()(),Tl(4176,"tr",13)(4177,"td",14)(4178,"div",15)(4179,"span",16),tN(4180," rows"),Gl(4181,"br"),sg()()(),Tl(4182,"td",17)(4183,"code",41),tN(4184,"number"),sg()(),Tl(4185,"td",20)(4186,"em")(4187,"strong"),tN(4188,"(opcional)"),sg()(),Tl(4189,"p"),tN(4190,"Quantidade de linhas exibidas no "),Tl(4191,"code"),tN(4192,"po-textarea"),sg(),tN(4193,"."),sg()()(),Tl(4194,"tr",13)(4195,"td",14)(4196,"div",15)(4197,"span",16),tN(4198," searchService"),Gl(4199,"br"),sg()()(),Tl(4200,"td",17)(4201,"code",18),tN(4202,"string "),sg(),Tl(4203,"code",80),tN(4204," PoLookupFilter"),sg()(),Tl(4205,"td",20)(4206,"em")(4207,"strong"),tN(4208,"(opcional)"),sg()(),Tl(4209,"p"),tN(4210,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),Tl(4211,"code"),tN(4212,"columns"),sg(),tN(4213,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Tl(4214,"strong"),tN(4215,"Importante:"),sg()(),Tl(4216,"blockquote")(4217,"p"),tN(4218,"Caso utilizar a propriedade "),Tl(4219,"code"),tN(4220,"optionsService"),sg(),tN(4221,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Tl(4222,"a",75),tN(4223,"guia de API do PO UI"),sg(),tN(4224,"."),sg()()()(),Tl(4225,"tr",13)(4226,"td",14)(4227,"div",15)(4228,"span",16),tN(4229," secondInterval"),Gl(4230,"br"),sg()()(),Tl(4231,"td",17)(4232,"code",41),tN(4233,"number"),sg()(),Tl(4234,"td",20)(4235,"em")(4236,"strong"),tN(4237,"(opcional)"),sg()(),Tl(4238,"p"),tN(4239,"Define o intervalo entre os segundos exibidos no painel do timepicker."),sg()()(),Tl(4240,"tr",13)(4241,"td",14)(4242,"div",15)(4243,"span",16),tN(4244," secret"),Gl(4245,"br"),sg()()(),Tl(4246,"td",17)(4247,"code",28),tN(4248,"boolean"),sg()(),Tl(4249,"td",20)(4250,"em")(4251,"strong"),tN(4252,"(opcional)"),sg()(),Tl(4253,"p"),tN(4254,"Esconde a informa\xE7\xE3o estilo "),Tl(4255,"em"),tN(4256,"password"),sg(),tN(4257,", pode ser utilizado quando o tipo de dado for "),Tl(4258,"em"),tN(4259,"string"),sg(),tN(4260,"."),sg()()(),Tl(4261,"tr",13)(4262,"td",14)(4263,"div",15)(4264,"span",16),tN(4265," showRequired"),Gl(4266,"br"),sg()()(),Tl(4267,"td",17)(4268,"code",28),tN(4269,"boolean"),sg()(),Tl(4270,"td",20)(4271,"em")(4272,"strong"),tN(4273,"(opcional)"),sg()(),Tl(4274,"p"),tN(4275,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(4276,"blockquote")(4277,"p"),tN(4278,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(4279,"ul")(4280,"li"),tN(4281,"N\xE3o possuir "),Tl(4282,"code"),tN(4283,"p-help"),sg(),tN(4284," e/ou "),Tl(4285,"code"),tN(4286,"p-label"),sg(),tN(4287,"."),sg()(),Tl(4288,"p")(4289,"strong"),tN(4290,"Componentes compat\xEDveis:"),sg(),Tl(4291,"code"),tN(4292,"po-datepicker"),sg(),tN(4293,", "),Tl(4294,"code"),tN(4295,"po-datepicker-range"),sg(),tN(4296,", "),Tl(4297,"code"),tN(4298,"po-timepicker"),sg(),tN(4299,", "),Tl(4300,"code"),tN(4301,"po-input"),sg(),tN(4302,", "),Tl(4303,"code"),tN(4304,"po-number"),sg(),tN(4305,`,
`),Tl(4306,"code"),tN(4307,"po-decimal"),sg(),tN(4308,", "),Tl(4309,"code"),tN(4310,"po-select"),sg(),tN(4311,", "),Tl(4312,"code"),tN(4313,"po-radio-group"),sg(),tN(4314,", "),Tl(4315,"code"),tN(4316,"po-combo"),sg(),tN(4317,", "),Tl(4318,"code"),tN(4319,"po-lookup"),sg(),tN(4320,", "),Tl(4321,"code"),tN(4322,"po-checkbox-group"),sg(),tN(4323,", "),Tl(4324,"code"),tN(4325,"po-multiselect"),sg(),tN(4326,`,
`),Tl(4327,"code"),tN(4328,"po-textarea"),sg(),tN(4329,", "),Tl(4330,"code"),tN(4331,"po-password"),sg(),tN(4332,", "),Tl(4333,"code"),tN(4334,"po-upload"),sg(),tN(4335,"."),sg()()(),Tl(4336,"tr",13)(4337,"td",14)(4338,"div",15)(4339,"span",16),tN(4340," showSeconds"),Gl(4341,"br"),sg()()(),Tl(4342,"td",17)(4343,"code",28),tN(4344,"boolean"),sg()(),Tl(4345,"td",20)(4346,"em")(4347,"strong"),tN(4348,"(opcional)"),sg()(),Tl(4349,"p"),tN(4350,"Exibe a coluna de segundos no painel do timepicker."),sg()()(),Tl(4351,"tr",13)(4352,"td",14)(4353,"div",15)(4354,"span",16),tN(4355," showThumbnail"),Gl(4356,"br"),sg()()(),Tl(4357,"td",17)(4358,"code",28),tN(4359,"boolean"),sg()(),Tl(4360,"td",20)(4361,"em")(4362,"strong"),tN(4363,"(opcional)"),sg()(),Tl(4364,"p"),tN(4365,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),sg(),Tl(4366,"blockquote")(4367,"p"),tN(4368,"Propriedade funciona apenas em arquivos de formato de imagem ("),Tl(4369,"code"),tN(4370,".png"),sg(),tN(4371,", "),Tl(4372,"code"),tN(4373,".jpg"),sg(),tN(4374,", "),Tl(4375,"code"),tN(4376,".jpeg"),sg(),tN(4377," e "),Tl(4378,"code"),tN(4379,".gif"),sg(),tN(4380,")."),sg()(),Tl(4381,"p")(4382,"strong"),tN(4383,"Componente compat\xEDvel"),sg(),tN(4384,": "),Tl(4385,"code"),tN(4386,"po-upload"),sg()()()(),Tl(4387,"tr",13)(4388,"td",14)(4389,"div",15)(4390,"span",16),tN(4391," size"),Gl(4392,"br"),sg()()(),Tl(4393,"td",17)(4394,"code",18),tN(4395,"string"),sg()(),Tl(4396,"td",20)(4397,"em")(4398,"strong"),tN(4399,"(opcional)"),sg()(),Tl(4400,"p"),tN(4401,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),sg(),Tl(4402,"ul")(4403,"li")(4404,"code"),tN(4405,"small"),sg(),tN(4406,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(4407,"li")(4408,"code"),tN(4409,"medium"),sg(),tN(4410,": aplica a medida medium de cada componente."),sg(),Tl(4411,"li")(4412,"code"),tN(4413,"large"),sg(),tN(4414,": aplica a medida large de cada componente (dispon\xEDvel para "),Tl(4415,"code"),tN(4416,"po-checkbox"),sg(),tN(4417," e "),Tl(4418,"code"),tN(4419,"po-radio-group"),sg(),tN(4420,")."),Tl(4421,"blockquote")(4422,"p"),tN(4423,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(4424,"code"),tN(4425,"medium"),sg(),tN(4426,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(4427,"a",21),tN(4428,"po-theme"),sg(),tN(4429,"."),sg()()()()()(),Tl(4430,"tr",13)(4431,"td",14)(4432,"div",15)(4433,"span",16),tN(4434," sort"),Gl(4435,"br"),sg()()(),Tl(4436,"td",17)(4437,"code",28),tN(4438,"boolean"),sg()(),Tl(4439,"td",20)(4440,"em")(4441,"strong"),tN(4442,"(opcional)"),sg()(),Tl(4443,"p"),tN(4444,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),sg(),Tl(4445,"p")(4446,"strong"),tN(4447,"Componentes compat\xEDveis:"),sg(),Tl(4448,"code"),tN(4449,"po-combo"),sg(),tN(4450,", po-multiselect"),sg()()(),Tl(4451,"tr",13)(4452,"td",14)(4453,"div",15)(4454,"span",16),tN(4455," step"),Gl(4456,"br"),sg()()(),Tl(4457,"td",17)(4458,"code",41),tN(4459,"number"),sg()(),Tl(4460,"td",20)(4461,"em")(4462,"strong"),tN(4463,"(opcional)"),sg()(),Tl(4464,"p"),tN(4465,"Intervalo utilizado no "),Tl(4466,"code"),tN(4467,"po-number"),sg(),tN(4468,"."),sg()()(),Tl(4469,"tr",13)(4470,"td",14)(4471,"div",15)(4472,"span",16),tN(4473," thousandMaxlength"),Gl(4474,"br"),sg()()(),Tl(4475,"td",17)(4476,"code",41),tN(4477,"number"),sg()(),Tl(4478,"td",20)(4479,"em")(4480,"strong"),tN(4481,"(opcional)"),sg()(),Tl(4482,"p"),tN(4483,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),sg(),Tl(4484,"blockquote")(4485,"p"),tN(4486,"Esta propriedade s\xF3 pode ser utilizada quando o "),Tl(4487,"code"),tN(4488,"type"),sg(),tN(4489," for "),Tl(4490,"em"),tN(4491,"currency"),sg(),tN(4492," ou "),Tl(4493,"em"),tN(4494,"decimal"),sg(),tN(4495,"."),sg()()()(),Tl(4496,"tr",13)(4497,"td",14)(4498,"div",15)(4499,"span",16),tN(4500," type"),Gl(4501,"br"),sg()()(),Tl(4502,"td",17)(4503,"code",18),tN(4504,"string "),sg(),Tl(4505,"code",81),tN(4506," PoDynamicFieldType"),sg()(),Tl(4507,"td",20)(4508,"em")(4509,"strong"),tN(4510,"(opcional)"),sg()(),Tl(4511,"p"),tN(4512,"Tipo do valor campo."),sg(),Tl(4513,"p"),tN(4514,"Valores v\xE1lidos:"),sg(),Tl(4515,"ul")(4516,"li")(4517,"code"),tN(4518,"boolean"),sg(),tN(4519,": Valores "),Tl(4520,"em"),tN(4521,"booleanos"),sg(),tN(4522,"."),sg(),Tl(4523,"li")(4524,"code"),tN(4525,"currency"),sg(),tN(4526,": Valores monet\xE1rios."),sg(),Tl(4527,"li")(4528,"code"),tN(4529,"decimal"),sg(),tN(4530,": Valores decimais."),sg(),Tl(4531,"li")(4532,"code"),tN(4533,"date"),sg(),tN(4534,": Valores de datas."),Tl(4535,"ul")(4536,"li"),tN(4537,"Aceita os tipos "),Tl(4538,"strong"),tN(4539,"string"),sg(),tN(4540," e "),Tl(4541,"strong"),tN(4542,"Date"),sg(),tN(4543,` padr\xE3o do Javascript,
por exemplo: `),Tl(4544,"code"),tN(4545,"'2017-11-28'"),sg(),tN(4546," ou "),Tl(4547,"code"),tN(4548,"new Date(2017, 10, 28)"),sg(),tN(4549,"."),sg()()(),Tl(4550,"li")(4551,"code"),tN(4552,"dateTime"),sg(),tN(4553,": Valor de data com hor\xE1rio."),Tl(4554,"ul")(4555,"li"),tN(4556,"Aceita o tipo "),Tl(4557,"em"),tN(4558,"string"),sg(),tN(4559," no formato "),Tl(4560,"strong"),tN(4561,"ISO-8601"),sg(),tN(4562," extendido "),Tl(4563,"strong"),tN(4564,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),sg(),tN(4565,`
e o tipo `),Tl(4566,"strong"),tN(4567,"Date"),sg(),tN(4568," padr\xE3o do Javascript, por exemplo: "),Tl(4569,"code"),tN(4570,"'2017-11-28T00:00:00-02:00'"),sg(),tN(4571," ou "),Tl(4572,"code"),tN(4573,"new Date(2017, 10, 28)"),sg(),tN(4574,"."),sg()()(),Tl(4575,"li")(4576,"code"),tN(4577,"number"),sg(),tN(4578,": Valores num\xE9ricos."),sg(),Tl(4579,"li")(4580,"code"),tN(4581,"string"),sg(),tN(4582,": Textos."),sg(),Tl(4583,"li")(4584,"code"),tN(4585,"time"),sg(),tN(4586,": Valor do hor\xE1rio."),Tl(4587,"ul")(4588,"li"),tN(4589,"Aceita o tipo "),Tl(4590,"strong"),tN(4591,"string"),sg(),tN(4592," nos formatos "),Tl(4593,"strong"),tN(4594,"'HH:mm:ss'"),sg(),tN(4595," ou "),Tl(4596,"strong"),tN(4597,"'HH:mm:ss.ffffff'"),sg(),tN(4598,", por exemplo: "),Tl(4599,"code"),tN(4600,"'23:12:45'"),sg(),tN(4601,"."),sg()()()()()(),Tl(4602,"tr",13)(4603,"td",14)(4604,"div",15)(4605,"span",16),tN(4606," url"),Gl(4607,"br"),sg()()(),Tl(4608,"td",17)(4609,"code",18),tN(4610,"string"),sg()(),Tl(4611,"td",20)(4612,"em")(4613,"strong"),tN(4614,"(opcional)"),sg()(),Tl(4615,"p"),tN(4616,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),sg(),Tl(4617,"p")(4618,"strong"),tN(4619,"Componente compat\xEDvel"),sg(),tN(4620,": "),Tl(4621,"code"),tN(4622,"po-upload"),sg()()()(),Tl(4623,"tr",13)(4624,"td",14)(4625,"div",15)(4626,"span",16),tN(4627," validate"),Gl(4628,"br"),sg()()(),Tl(4629,"td",17)(4630,"code",18),tN(4631,"string "),sg(),Tl(4632,"code",29),tN(4633," Function"),sg()(),Tl(4634,"td",20)(4635,"em")(4636,"strong"),tN(4637,"(opcional)"),sg()(),Tl(4638,"p"),tN(4639,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Tl(4640,"strong"),tN(4641,"mudan\xE7as do campo"),sg(),tN(4642,"."),sg(),Tl(4643,"ul")(4644,"li"),tN(4645,"A propriedade aceita os seguintes tipos:"),sg()(),Tl(4646,"ul")(4647,"li")(4648,"strong"),tN(4649,"String"),sg(),tN(4650,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Tl(4651,"code"),tN(4652,"POST"),sg(),tN(4653,"."),sg(),Tl(4654,"li")(4655,"strong"),tN(4656,"Function"),sg(),tN(4657,": M\xE9todo que ser\xE1 executado."),sg()(),Tl(4658,"p"),tN(4659,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Tl(4660,"code"),tN(4661,"PoDynamicFormFieldChanged"),sg(),tN(4662,":"),sg(),Tl(4663,"p")(4664,"code"),tN(4665,"{ property: 'property name', value: 'new value' }"),sg()(),Tl(4666,"p"),tN(4667,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Tl(4668,"a",82),tN(4669,"PoDynamicFormFieldValidation"),sg(),tN(4670,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),sg(),Tl(4671,"pre")(4672,"code"),tN(4673,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),sg()(),Tl(4674,"p"),tN(4675,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Tl(4676,"code"),tN(4677,"bind"),sg(),tN(4678,`, por exemplo:
`),Tl(4679,"code"),tN(4680,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),sg()()()(),Tl(4681,"tr",13)(4682,"td",14)(4683,"div",15)(4684,"span",16),tN(4685," visible"),Gl(4686,"br"),sg()()(),Tl(4687,"td",17)(4688,"code",28),tN(4689,"boolean"),sg()(),Tl(4690,"td",20)(4691,"em")(4692,"strong"),tN(4693,"(opcional)"),sg()(),Tl(4694,"p"),tN(4695,"Indica se o campo ser\xE1 vis\xEDvel."),sg()()(),Tl(4696,"tr",13)(4697,"td",14)(4698,"div",15)(4699,"span",16),tN(4700," yearRangeLimit"),Gl(4701,"br"),sg()()(),Tl(4702,"td",17)(4703,"code",41),tN(4704,"number"),sg()(),Tl(4705,"td",20)(4706,"em")(4707,"strong"),tN(4708,"(opcional)"),sg()(),Tl(4709,"p"),tN(4710,"Define o limite de anos exibidos na lista de anos do "),Tl(4711,"code"),tN(4712,"po-datepicker"),sg(),tN(4713," nos modos "),Tl(4714,"code"),tN(4715,"month-year"),sg(),tN(4716," e "),Tl(4717,"code"),tN(4718,"year"),sg(),tN(4719,"."),sg()()()(),Tl(4720,"h4",38)(4721,"code",5),tN(4722,"PoDynamicFormLoad"),sg()(),Tl(4723,"div",2)(4724,"p"),Gl(4725,"a",83),sg(),Tl(4726,"p"),tN(4727,"Estrutura de retorno no carregamento do formul\xE1rio."),sg()(),Tl(4728,"h4",9),tN(4729,"Propriedades"),sg(),Tl(4730,"table",10)(4731,"tr",11)(4732,"th",12),tN(4733,"Nome"),sg(),Tl(4734,"th",12),tN(4735,"Tipo"),sg(),Tl(4736,"th",12),tN(4737,"Descri\xE7\xE3o"),sg()(),Tl(4738,"tr",13)(4739,"td",14)(4740,"div",15)(4741,"span",16),tN(4742," fields"),Gl(4743,"br"),sg()()(),Tl(4744,"td",17)(4745,"code",22),tN(4746,"Array<PoDynamicFormField>"),sg()(),Tl(4747,"td",20)(4748,"em")(4749,"strong"),tN(4750,"(opcional)"),sg()(),Tl(4751,"p"),tN(4752,"Lista com as novas defini\xE7\xF5es dos campos."),sg(),Tl(4753,"blockquote")(4754,"p"),tN(4755,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),sg()()()(),Tl(4756,"tr",13)(4757,"td",14)(4758,"div",15)(4759,"span",16),tN(4760," focus"),Gl(4761,"br"),sg()()(),Tl(4762,"td",17)(4763,"code",18),tN(4764,"string"),sg()(),Tl(4765,"td",20)(4766,"em")(4767,"strong"),tN(4768,"(opcional)"),sg()(),Tl(4769,"p"),tN(4770,"Nome do campo que receber\xE1 o foco."),sg(),Tl(4771,"p"),tN(4772,"Exemplo:"),sg(),Tl(4773,"pre")(4774,"code"),tN(4775,`focus: 'name'
`),sg()()()(),Tl(4776,"tr",13)(4777,"td",14)(4778,"div",15)(4779,"span",16),tN(4780," value"),Gl(4781,"br"),sg()()(),Tl(4782,"td",17)(4783,"code",33),tN(4784,"any"),sg()(),Tl(4785,"td",20)(4786,"em")(4787,"strong"),tN(4788,"(opcional)"),sg()(),Tl(4789,"p"),tN(4790,"Objeto contendo os novos valores."),sg(),Tl(4791,"p"),tN(4792,"Exemplo:"),sg(),Tl(4793,"pre")(4794,"code"),tN(4795,`{
  name: 'new name',
  age: 10
}
`),sg()(),Tl(4796,"blockquote")(4797,"p"),tN(4798,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),sg()()()()(),Tl(4799,"h4",38)(4800,"code",5),tN(4801,"PoDynamicFormFieldChanged"),sg()(),Tl(4802,"div",2)(4803,"p"),tN(4804,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),sg()(),Tl(4805,"h4",9),tN(4806,"Propriedades"),sg(),Tl(4807,"table",10)(4808,"tr",11)(4809,"th",12),tN(4810,"Nome"),sg(),Tl(4811,"th",12),tN(4812,"Tipo"),sg(),Tl(4813,"th",12),tN(4814,"Descri\xE7\xE3o"),sg()(),Tl(4815,"tr",13)(4816,"td",14)(4817,"div",15)(4818,"span",16),tN(4819," property"),Gl(4820,"br"),sg()()(),Tl(4821,"td",17)(4822,"code",18),tN(4823,"string"),sg()(),Tl(4824,"td",20)(4825,"p"),tN(4826,"Valor da propriedade do campo."),sg()()(),Tl(4827,"tr",13)(4828,"td",14)(4829,"div",15)(4830,"span",16),tN(4831," value"),Gl(4832,"br"),sg()()(),Tl(4833,"td",17)(4834,"code",33),tN(4835,"any"),sg()(),Tl(4836,"td",20)(4837,"p"),tN(4838,"Novo valor do campo."),sg()()()(),Tl(4839,"h4",38)(4840,"code",5),tN(4841,"PoDynamicFormFieldValidation"),sg()(),Tl(4842,"div",2)(4843,"p"),Gl(4844,"a",84),sg(),Tl(4845,"p"),tN(4846,"Estrutura de retorno da valida\xE7\xE3o de um campo."),sg()(),Tl(4847,"h4",9),tN(4848,"Propriedades"),sg(),Tl(4849,"table",10)(4850,"tr",11)(4851,"th",12),tN(4852,"Nome"),sg(),Tl(4853,"th",12),tN(4854,"Tipo"),sg(),Tl(4855,"th",12),tN(4856,"Descri\xE7\xE3o"),sg()(),Tl(4857,"tr",13)(4858,"td",14)(4859,"div",15)(4860,"span",16),tN(4861," field"),Gl(4862,"br"),sg()()(),Tl(4863,"td",17)(4864,"code",85),tN(4865,"PoDynamicFormField"),sg()(),Tl(4866,"td",20)(4867,"em")(4868,"strong"),tN(4869,"(opcional)"),sg()(),Tl(4870,"p"),tN(4871,"Novas defini\xE7\xF5es das propriedades do campo."),sg(),Tl(4872,"blockquote")(4873,"p"),tN(4874,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),sg()()()(),Tl(4875,"tr",13)(4876,"td",14)(4877,"div",15)(4878,"span",16),tN(4879," focus"),Gl(4880,"br"),sg()()(),Tl(4881,"td",17)(4882,"code",28),tN(4883,"boolean"),sg()(),Tl(4884,"td",20)(4885,"em")(4886,"strong"),tN(4887,"(opcional)"),sg()(),Tl(4888,"p"),tN(4889,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),sg()()(),Tl(4890,"tr",13)(4891,"td",14)(4892,"div",15)(4893,"span",16),tN(4894," value"),Gl(4895,"br"),sg()()(),Tl(4896,"td",17)(4897,"code",33),tN(4898,"any"),sg()(),Tl(4899,"td",20)(4900,"em")(4901,"strong"),tN(4902,"(opcional)"),sg()(),Tl(4903,"p"),tN(4904,"Novo valor do campo"),sg()()()(),Tl(4905,"h4",38)(4906,"code",5),tN(4907,"PoDynamicFormValidation"),sg()(),Tl(4908,"div",2)(4909,"p"),Gl(4910,"a",86),sg(),Tl(4911,"p"),tN(4912,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),sg()(),Tl(4913,"h4",9),tN(4914,"Propriedades"),sg(),Tl(4915,"table",10)(4916,"tr",11)(4917,"th",12),tN(4918,"Nome"),sg(),Tl(4919,"th",12),tN(4920,"Tipo"),sg(),Tl(4921,"th",12),tN(4922,"Descri\xE7\xE3o"),sg()(),Tl(4923,"tr",13)(4924,"td",14)(4925,"div",15)(4926,"span",16),tN(4927," fields"),Gl(4928,"br"),sg()()(),Tl(4929,"td",17)(4930,"code",22),tN(4931,"Array<PoDynamicFormField>"),sg()(),Tl(4932,"td",20)(4933,"em")(4934,"strong"),tN(4935,"(opcional)"),sg()(),Tl(4936,"p"),tN(4937,"Lista com as novas defini\xE7\xF5es dos campos."),sg(),Tl(4938,"blockquote")(4939,"p"),tN(4940,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),sg()()()(),Tl(4941,"tr",13)(4942,"td",14)(4943,"div",15)(4944,"span",16),tN(4945," focus"),Gl(4946,"br"),sg()()(),Tl(4947,"td",17)(4948,"code",18),tN(4949,"string"),sg()(),Tl(4950,"td",20)(4951,"em")(4952,"strong"),tN(4953,"(opcional)"),sg()(),Tl(4954,"p"),tN(4955,"Nome do campo que receber\xE1 o foco."),sg(),Tl(4956,"p"),tN(4957,"Exemplo:"),sg(),Tl(4958,"pre")(4959,"code"),tN(4960,`focus: 'name'
`),sg()()()(),Tl(4961,"tr",13)(4962,"td",14)(4963,"div",15)(4964,"span",16),tN(4965," value"),Gl(4966,"br"),sg()()(),Tl(4967,"td",17)(4968,"code",33),tN(4969,"any"),sg()(),Tl(4970,"td",20)(4971,"em")(4972,"strong"),tN(4973,"(opcional)"),sg()(),Tl(4974,"p"),tN(4975,"Objeto contendo os novos valores."),sg(),Tl(4976,"p"),tN(4977,"Exemplo:"),sg(),Tl(4978,"pre")(4979,"code"),tN(4980,`{
  name: 'new name',
  age: 10
}
`),sg()(),Tl(4981,"blockquote")(4982,"p"),tN(4983,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),sg()()()()(),Tl(4984,"h4",38)(4985,"code",5),tN(4986,"ErrorAsyncProperties"),sg()(),Tl(4987,"div",2)(4988,"p"),tN(4989,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),sg()(),Tl(4990,"h4",9),tN(4991,"Propriedades"),sg(),Tl(4992,"table",10)(4993,"tr",11)(4994,"th",12),tN(4995,"Nome"),sg(),Tl(4996,"th",12),tN(4997,"Tipo"),sg(),Tl(4998,"th",12),tN(4999,"Descri\xE7\xE3o"),sg()(),Tl(5e3,"tr",13)(5001,"td",14)(5002,"div",15)(5003,"span",16),tN(5004," errorAsync"),Gl(5005,"br"),sg()()(),Tl(5006,"td",17)(5007,"code",46),tN(5008,"(value) => Observable<boolean>"),sg()(),Tl(5009,"td",20)(5010,"p"),tN(5011,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(5012,"code"),tN(5013,"change"),sg(),tN(5014," ou "),Tl(5015,"code"),tN(5016,"change-model"),sg(),tN(5017,", dependendo do valor da propriedade "),Tl(5018,"code"),tN(5019,"triggerMode"),sg(),tN(5020,"."),sg()()(),Tl(5021,"tr",13)(5022,"td",14)(5023,"div",15)(5024,"span",16),tN(5025," triggerMode"),Gl(5026,"br"),sg()()(),Tl(5027,"td",17)(5028,"code",87),tN(5029,"'change' "),sg(),Tl(5030,"code",88),tN(5031," 'changeModel'"),sg()(),Tl(5032,"td",20)(5033,"em")(5034,"strong"),tN(5035,"(opcional)"),sg()(),Tl(5036,"p"),tN(5037,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Tl(5038,"code"),tN(5039,"change"),sg(),tN(5040," ou "),Tl(5041,"code"),tN(5042,"change-model"),sg(),tN(5043,"."),sg()()()(),Tl(5044,"h3"),tN(5045,"Enums"),sg(),Tl(5046,"h4",4)(5047,"code",5),tN(5048,"ForceBooleanComponentEnum"),sg()(),Tl(5049,"div",2)(5050,"p"),tN(5051,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),sg()(),Tl(5052,"h4",9),tN(5053,"Propriedades"),sg(),Tl(5054,"table",10)(5055,"tr",11)(5056,"th",12),tN(5057,"Nome"),sg(),Tl(5058,"th",12),tN(5059,"Descri\xE7\xE3o"),sg()(),Tl(5060,"tr",13)(5061,"td",14)(5062,"div",15)(5063,"span",16),tN(5064," switch"),Gl(5065,"br"),sg()()(),Tl(5066,"td",20)(5067,"p"),tN(5068,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),sg()()(),Tl(5069,"tr",13)(5070,"td",14)(5071,"div",15)(5072,"span",16),tN(5073," checkbox"),Gl(5074,"br"),sg()()(),Tl(5075,"td",20)(5076,"p"),tN(5077,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),sg()()()(),Tl(5078,"h4",4)(5079,"code",5),tN(5080,"ForceOptionComponentEnum"),sg()(),Tl(5081,"div",2)(5082,"p"),tN(5083,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),sg()(),Tl(5084,"h4",9),tN(5085,"Propriedades"),sg(),Tl(5086,"table",10)(5087,"tr",11)(5088,"th",12),tN(5089,"Nome"),sg(),Tl(5090,"th",12),tN(5091,"Descri\xE7\xE3o"),sg()(),Tl(5092,"tr",13)(5093,"td",14)(5094,"div",15)(5095,"span",16),tN(5096," radioGroup"),Gl(5097,"br"),sg()()(),Tl(5098,"td",20)(5099,"p"),tN(5100,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),sg()()(),Tl(5101,"tr",13)(5102,"td",14)(5103,"div",15)(5104,"span",16),tN(5105," select"),Gl(5106,"br"),sg()()(),Tl(5107,"td",20)(5108,"p"),tN(5109,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),sg()()()(),Tl(5110,"h4",4)(5111,"code",5),tN(5112,"PoDynamicFieldType"),sg()(),Tl(5113,"div",2)(5114,"p"),tN(5115,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),sg()(),Tl(5116,"h4",9),tN(5117,"Propriedades"),sg(),Tl(5118,"table",10)(5119,"tr",11)(5120,"th",12),tN(5121,"Nome"),sg(),Tl(5122,"th",12),tN(5123,"Descri\xE7\xE3o"),sg()(),Tl(5124,"tr",13)(5125,"td",14)(5126,"div",15)(5127,"span",16),tN(5128," Boolean"),Gl(5129,"br"),sg()()(),Tl(5130,"td",20)(5131,"p"),tN(5132,"Valor booleano."),sg()()(),Tl(5133,"tr",13)(5134,"td",14)(5135,"div",15)(5136,"span",16),tN(5137," Currency"),Gl(5138,"br"),sg()()(),Tl(5139,"td",20)(5140,"p"),tN(5141,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),sg()()(),Tl(5142,"tr",13)(5143,"td",14)(5144,"div",15)(5145,"span",16),tN(5146," Decimal"),Gl(5147,"br"),sg()()(),Tl(5148,"td",20)(5149,"p"),tN(5150,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),sg()()(),Tl(5151,"tr",13)(5152,"td",14)(5153,"div",15)(5154,"span",16),tN(5155," Date"),Gl(5156,"br"),sg()()(),Tl(5157,"td",20)(5158,"p"),tN(5159,"Valor para data."),sg()()(),Tl(5160,"tr",13)(5161,"td",14)(5162,"div",15)(5163,"span",16),tN(5164," DateTime"),Gl(5165,"br"),sg()()(),Tl(5166,"td",20)(5167,"p"),tN(5168,"Valor para data e hora."),sg()()(),Tl(5169,"tr",13)(5170,"td",14)(5171,"div",15)(5172,"span",16),tN(5173," Time"),Gl(5174,"br"),sg()()(),Tl(5175,"td",20)(5176,"p"),tN(5177,"Utilizado para informar/exibir hora."),sg()()(),Tl(5178,"tr",13)(5179,"td",14)(5180,"div",15)(5181,"span",16),tN(5182," Number"),Gl(5183,"br"),sg()()(),Tl(5184,"td",20)(5185,"p"),tN(5186,"Valor num\xE9rico."),sg()()(),Tl(5187,"tr",13)(5188,"td",14)(5189,"div",15)(5190,"span",16),tN(5191," String"),Gl(5192,"br"),sg()()(),Tl(5193,"td",20)(5194,"p"),tN(5195,"Texto."),sg()()(),Tl(5196,"tr",13)(5197,"td",14)(5198,"div",15)(5199,"span",16),tN(5200," Upload"),Gl(5201,"br"),sg()()(),Tl(5202,"td",20)(5203,"p"),tN(5204,"Utilizado para fazer uploads de arquivos."),sg()()()(),Tl(5205,"h4",4)(5206,"code",5),tN(5207,"PoTimepickerModelFormat"),sg()(),Tl(5208,"div",2)(5209,"p")(5210,"em"),tN(5211,"Enum"),sg(),tN(5212," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),sg()(),Tl(5213,"h4",9),tN(5214,"Propriedades"),sg(),Tl(5215,"table",10)(5216,"tr",11)(5217,"th",12),tN(5218,"Nome"),sg(),Tl(5219,"th",12),tN(5220,"Descri\xE7\xE3o"),sg()(),Tl(5221,"tr",13)(5222,"td",14)(5223,"div",15)(5224,"span",16),tN(5225," HourMinute"),Gl(5226,"br"),sg()()(),Tl(5227,"td",20)(5228,"p"),tN(5229,"Formato b\xE1sico "),Tl(5230,"code"),tN(5231,"HH:mm"),sg(),tN(5232," (ex: "),Tl(5233,"code"),tN(5234,"14:30"),sg(),tN(5235,")."),sg()()(),Tl(5236,"tr",13)(5237,"td",14)(5238,"div",15)(5239,"span",16),tN(5240," HourMinuteSecond"),Gl(5241,"br"),sg()()(),Tl(5242,"td",20)(5243,"p"),tN(5244,"Formato com segundos "),Tl(5245,"code"),tN(5246,"HH:mm:ss"),sg(),tN(5247," (ex: "),Tl(5248,"code"),tN(5249,"14:30:00"),sg(),tN(5250,")."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return o})();var ae=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,r){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Gl(3,"sample-po-dynamic-form-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),Gl(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),sg()()()),a&2&&(tw("p-actions",r.actions),Vp(2),tw("p-active",r.activeTab==="doc"),Vp(2),tw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[aNe,Hme,Gme,$,te,ne,oe],encapsulation:2})}return o})();var fe=[{path:"",component:ae}],re=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[vL.forChild(fe),vL]})}return o})();var rt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ar,re]})}return o})();export{rt as DocPoDynamicFormModule};