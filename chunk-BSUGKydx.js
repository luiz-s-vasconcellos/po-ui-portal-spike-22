import {f as fe$1,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,I,d as f,aW as Yp,cK as vfe,r as r$1,b2 as Jhe,L as Gl,O as nw,bs as mN,a7 as gN,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,b0 as Qt,aB as Sx,bd as Fx,Y as we,av as Yl,aw as uo,ax as fo,a3 as lNe,aD as Ky,aE as Xy}from'./main-P7IRR5MZ.js';var me=()=>({property:"name",required:true,showRequired:true}),le=o=>[o],G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:false,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,r){a&1&&Gl(0,"po-dynamic-form",0),a&2&&nw("p-fields",mN(2,le,gN(1,me)));},dependencies:[Jhe],encapsulation:2,changeDetection:1})}return o})();var pe=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Dynamic Form Basic"),sg(),Tl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-dynamic-form-basic"),sg(),Gl(23,"hr")),a&2&&(Vp(5),qx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,pe,r.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,G],encapsulation:2,changeDetection:1})}return o})();var U=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=I({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ce=["dynamicForm"],ee=(()=>{class o{poNotification=f(Yp);registerService=f(U);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:true,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:vfe.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return setTimeout(()=>{let a=this.registerService.getCity(m.value.state);this.updateDynamicFormField("city",{options:a,loading:false});},500),{value:{city:void 0},fields:[{property:"city",gridColumns:6,disabled:false,loading:true}]}}onLoadFields(m){return this.registerService.getUserDocument(m)}updateDynamicFormField(m,a){let r=this.dynamicForm?.fields??this.fields,l=r.findIndex(O=>O.property===m);l>=0&&(r[l]=r$1(r$1({},r[l]),a),this.fields=[...r]);}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register"]],viewQuery:function(a,r){if(a&1&&Yl(ce,7),a&2){let l;uo(l=fo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([U])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=Sx();Gl(0,"po-dynamic-form",1,0)(2,"br"),Tl(3,"div",2)(4,"po-button",3),ht("p-click",function(){Ky(l);let I=Fx(1);return r.poNotification.success("Data saved successfully!"),Xy(I.form.reset())}),sg()();}if(a&2){let l=Fx(1);nw("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Vp(4),nw("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Qt,Jhe],encapsulation:2,changeDetection:1})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Dynamic Form - Register"),sg(),Tl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-dynamic-form
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-dynamic-form-register"),sg(),Gl(27,"hr")),a&2&&(Vp(5),qx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Ee,r.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ee],encapsulation:2,changeDetection:1})}return o})();var K=(()=>{class o{getCity(m){switch(m){case 1:return [{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return [{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return [{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return [{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return []}getUserDocument(m){let a={property:"cpf",visible:true},r={property:"cnpj",visible:true};return {fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=I({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Se=["dynamicForm"],ie=(()=>{class o{poNotification=f(Yp);registerService=f(K);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:true,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:false},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:true,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:true},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:true},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:true,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:true,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:true,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:true,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:true,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:true,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:true,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:true,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:vfe.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:true,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:true},customActionClick:m=>{console.log("Iniciar download para o arquivo:",m.name);}}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:false,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"};}onChangeFields(m){return {value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(m.value.state),disabled:false}]}}onKeyDown(m,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(m);}onLoadFields(m){return this.registerService.getUserDocument(m)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,r){if(a&1&&Yl(Se,7),a&2){let l;uo(l=fo())&&(r.dynamicForm=l.first);}},standalone:false,features:[we([K])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=Sx();Gl(0,"po-dynamic-form",1,0)(2,"br"),Tl(3,"div",2)(4,"po-button",3),ht("p-click",function(){Ky(l);let I=Fx(1);return r.poNotification.success("Data saved successfully!"),Xy(I.form.reset())}),sg()();}if(a&2){let l=Fx(1);nw("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),Vp(4),nw("p-disabled",l==null?null:l.form.invalid);}},dependencies:[Qt,Jhe],encapsulation:2,changeDetection:1})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:false,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Dynamic Form - Container"),sg(),Tl(4,"a",2),ht("click",function(){return r.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-dynamic-form
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg(),Tl(21,"label",6),iN(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),sg(),Tl(23,"pre",9),iN(24,`import { Injectable } from '@angular/core';

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
`),sg()()()()(),Tl(25,"div",10),Gl(26,"sample-po-dynamic-form-container"),sg(),Gl(27,"hr")),a&2&&(Vp(5),qx("po-icon "+r.sampleCodeButtonIcon),Vp(),fg(" ",r.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ge,r.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ie],encapsulation:2,changeDetection:1})}return o})();var oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=Un({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:false,decls:5251,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,r){a&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),sg()(),Gl(4,"div",2),Tl(5,"h3",3),iN(6,"Componente"),sg(),Tl(7,"h4",4)(8,"code",5),iN(9,"PoDynamicFormComponent"),sg()(),Tl(10,"div",2)(11,"p"),iN(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),sg(),Tl(13,"p"),iN(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),sg()(),Tl(15,"div",6)(16,"h4",7),iN(17,"Seletor"),sg(),Tl(18,"pre",8),iN(19,`<po-dynamic-form
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
`),sg()(),Tl(20,"h4",9),iN(21,"Propriedades"),sg(),Tl(22,"table",10)(23,"tr",11)(24,"th",12),iN(25,"Nome"),sg(),Tl(26,"th",12),iN(27,"Tipo"),sg(),Tl(28,"th",12),iN(29,"Padr\xE3o"),sg(),Tl(30,"th",12),iN(31,"Descri\xE7\xE3o"),sg()(),Tl(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),iN(36," p-auto-focus"),Gl(37,"br"),sg()()(),Tl(38,"td",17)(39,"code",18),iN(40,"string"),sg()(),Tl(41,"td",19),iN(42,"-"),sg(),Tl(43,"td",20)(44,"em")(45,"strong"),iN(46,"(opcional)"),sg()(),Tl(47,"p"),iN(48,"Nome da propriedade, atribu\xEDda ao "),Tl(49,"code"),iN(50,"PoDynamicFormField.property"),sg(),iN(51,", que iniciar\xE1 o campo com foco."),sg()()(),Tl(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),iN(56," p-components-size"),Gl(57,"br"),sg()()(),Tl(58,"td",17)(59,"code",18),iN(60,"string"),sg()(),Tl(61,"td",19)(62,"p")(63,"code"),iN(64,"medium"),sg()()(),Tl(65,"td",20)(66,"em")(67,"strong"),iN(68,"(opcional)"),sg()(),Tl(69,"p"),iN(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),sg(),Tl(71,"ul")(72,"li")(73,"code"),iN(74,"small"),sg(),iN(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(76,"li")(77,"code"),iN(78,"medium"),sg(),iN(79,": aplica a medida medium de cada componente."),sg()(),Tl(80,"blockquote")(81,"p"),iN(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(83,"code"),iN(84,"medium"),sg(),iN(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(86,"a",21),iN(87,"po-theme"),sg(),iN(88,"."),sg()()()(),Tl(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),iN(93," p-fields"),Gl(94,"br"),sg()()(),Tl(95,"td",17)(96,"code",22),iN(97,"Array<PoDynamicFormField>"),sg()(),Tl(98,"td",19)(99,"p")(100,"code"),iN(101,"[]"),sg()()(),Tl(102,"td",20)(103,"p"),iN(104,"Cole\xE7\xE3o de objetos que implementam a interface "),Tl(105,"code"),iN(106,"PoDynamicFormField"),sg(),iN(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),sg(),Tl(108,"blockquote")(109,"p"),iN(110,"Ex: "),Tl(111,"code"),iN(112,"[ { property: 'name' } ]"),sg()()(),Tl(113,"p"),iN(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),sg(),Tl(115,"ul")(116,"li"),iN(117,"Caso o "),Tl(118,"em"),iN(119,"type"),sg(),iN(120," informado seja "),Tl(121,"em"),iN(122,"boolean"),sg(),iN(123," o componente criado ser\xE1 o "),Tl(124,"code"),iN(125,"po-switch"),sg(),iN(126,"."),sg(),Tl(127,"li"),iN(128,"Caso o "),Tl(129,"em"),iN(130,"type"),sg(),iN(131," informado seja "),Tl(132,"em"),iN(133,"currency"),sg(),iN(134," e n\xE3o seja informado um "),Tl(135,"em"),iN(136,"mask"),sg(),iN(137," ou "),Tl(138,"em"),iN(139,"pattern"),sg(),iN(140," o componente criado ser\xE1 o "),Tl(141,"code"),iN(142,"po-decimal"),sg(),iN(143,`,
caso seja informado um `),Tl(144,"em"),iN(145,"mask"),sg(),iN(146," ou "),Tl(147,"em"),iN(148,"pattern"),sg(),iN(149," o componente criado ser\xE1 o "),Tl(150,"code"),iN(151,"po-input"),sg(),iN(152,"."),sg(),Tl(153,"li"),iN(154,"Caso o "),Tl(155,"em"),iN(156,"type"),sg(),iN(157," informado seja "),Tl(158,"em"),iN(159,"number"),sg(),iN(160," e n\xE3o seja informado um "),Tl(161,"em"),iN(162,"mask"),sg(),iN(163," ou "),Tl(164,"em"),iN(165,"pattern"),sg(),iN(166," o componente criado ser\xE1 o "),Tl(167,"code"),iN(168,"po-number"),sg(),iN(169,`, caso seja
informado um `),Tl(170,"em"),iN(171,"mask"),sg(),iN(172," ou "),Tl(173,"em"),iN(174,"pattern"),sg(),iN(175," o componente criado ser\xE1 o "),Tl(176,"code"),iN(177,"po-input"),sg(),iN(178,"."),sg(),Tl(179,"li"),iN(180,"Caso a lista possua a propriedade "),Tl(181,"code"),iN(182,"options"),sg(),iN(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),Tl(184,"code"),iN(185,"po-radio-group"),sg(),iN(186,`
ou `),Tl(187,"code"),iN(188,"po-checkbox-group"),sg(),iN(189," se informar a propriedade "),Tl(190,"code"),iN(191,"optionsMulti"),sg(),iN(192,"."),sg(),Tl(193,"li"),iN(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),Tl(195,"code"),iN(196,"po-select"),sg(),iN(197," ou, "),Tl(198,"code"),iN(199,"po-multiselect"),sg(),iN(200," se a propriedade "),Tl(201,"code"),iN(202,"optionsMulti"),sg(),iN(203,`
for verdadeira.`),sg(),Tl(204,"li"),iN(205,"Caso o "),Tl(206,"em"),iN(207,"type"),sg(),iN(208," informado seja "),Tl(209,"em"),iN(210,"date"),sg(),iN(211," ou "),Tl(212,"em"),iN(213,"datetime"),sg(),iN(214," o componente criado ser\xE1 o "),Tl(215,"code"),iN(216,"po-datepicker"),sg(),iN(217,"."),sg(),Tl(218,"li"),iN(219,"Caso seja informado a propriedade "),Tl(220,"code"),iN(221,"optionsService"),sg(),iN(222," o componente criado ser\xE1 o "),Tl(223,"code"),iN(224,"po-combo"),sg(),iN(225,"."),sg(),Tl(226,"li"),iN(227,"Caso o "),Tl(228,"em"),iN(229,"type"),sg(),iN(230," informado seja "),Tl(231,"em"),iN(232,"time"),sg(),iN(233," o componente criado ser\xE1 um "),Tl(234,"code"),iN(235,"po-input"),sg(),iN(236," podendo receber um "),Tl(237,"em"),iN(238,"mask"),sg(),iN(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),Tl(240,"em"),iN(241,"mask"),sg(),iN(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),sg(),Tl(243,"li"),iN(244,"Caso a lista possua a propriedade "),Tl(245,"code"),iN(246,"rows"),sg(),iN(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),Tl(248,"code"),iN(249,"po-textarea"),sg(),iN(250,", caso o valor da propriedade "),Tl(251,"code"),iN(252,"rows"),sg(),iN(253," seja menor que 3 o componente criado ser\xE1 o "),Tl(254,"code"),iN(255,"po-input"),sg(),iN(256,"."),sg(),Tl(257,"li"),iN(258,"Caso seja informada a propriedade "),Tl(259,"code"),iN(260,"secret"),sg(),iN(261," o componente criado ser\xE1 o "),Tl(262,"code"),iN(263,"po-password"),sg(),iN(264,"."),sg(),Tl(265,"li"),iN(266,"Caso o "),Tl(267,"em"),iN(268,"type"),sg(),iN(269," informado seja "),Tl(270,"em"),iN(271,"string"),sg(),iN(272," o componente criado ser\xE1 o "),Tl(273,"code"),iN(274,"po-input"),sg(),iN(275,"."),Tl(276,"blockquote")(277,"p"),iN(278,"Ao alterar o valor das "),Tl(279,"code"),iN(280,"properties"),sg(),iN(281,", visibilidade e/ou agrupamentos via container, os "),Tl(282,"code"),iN(283,"fields"),sg(),iN(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),sg()()()()()(),Tl(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),iN(289," (p-form)"),Gl(290,"br"),sg()()(),Tl(291,"td",17)(292,"code",25),iN(293,"EventEmitter"),sg()(),Tl(294,"td",19),iN(295,"-"),sg(),Tl(296,"td",20)(297,"em")(298,"strong"),iN(299,"(opcional)"),sg()(),Tl(300,"p"),iN(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),sg(),Tl(302,"p"),iN(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),Tl(304,"em"),iN(305,"template reference"),sg(),iN(306," e atrav\xE9s do "),Tl(307,"em"),iN(308,"output"),sg(),iN(309,", veja os exemplos abaixo:"),sg(),Tl(310,"blockquote")(311,"p")(312,"em"),iN(313,"template reference"),sg()()(),Tl(314,"pre")(315,"code",26),iN(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),sg()(),Tl(317,"blockquote")(318,"p")(319,"em"),iN(320,"Output"),sg()()(),Tl(321,"pre")(322,"code",26),iN(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),sg()(),Tl(324,"pre")(325,"code",27),iN(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),sg()(),Tl(327,"blockquote")(328,"p"),iN(329,"Caso a propriedade "),Tl(330,"code"),iN(331,"p-group-form"),sg(),iN(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),sg()()()(),Tl(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),iN(337," p-group-form"),Gl(338,"br"),sg()()(),Tl(339,"td",17)(340,"code",28),iN(341,"boolean"),sg()(),Tl(342,"td",19),iN(343,"-"),sg(),Tl(344,"td",20)(345,"em")(346,"strong"),iN(347,"(opcional)"),sg()(),Tl(348,"p"),iN(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),Tl(350,"code"),iN(351,"FormControl"),sg(),iN(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),sg(),Tl(353,"pre")(354,"code",26),iN(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),sg()()()(),Tl(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),iN(360," p-load"),Gl(361,"br"),sg()()(),Tl(362,"td",17)(363,"code",18),iN(364,"string "),sg(),Tl(365,"code",29),iN(366," Function"),sg()(),Tl(367,"td",19),iN(368,"-"),sg(),Tl(369,"td",20)(370,"em")(371,"strong"),iN(372,"(opcional)"),sg()(),Tl(373,"p"),iN(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),sg(),Tl(375,"p"),iN(376,"A propriedade aceita os seguintes tipos:"),sg(),Tl(377,"ul")(378,"li")(379,"code"),iN(380,"string"),sg(),iN(381,": "),Tl(382,"em"),iN(383,"Endpoint"),sg(),iN(384," usado pelo componente para requisi\xE7\xE3o via "),Tl(385,"code"),iN(386,"POST"),sg(),iN(387,"."),sg(),Tl(388,"li")(389,"code"),iN(390,"function"),sg(),iN(391,": M\xE9todo que ser\xE1 executado."),sg()(),Tl(392,"p"),iN(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),Tl(394,"code"),iN(395,"p-value"),sg(),iN(396,"."),sg(),Tl(397,"p"),iN(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Tl(399,"a",30),iN(400,"PoDynamicFormLoad"),sg(),iN(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),sg(),Tl(402,"p"),iN(403,"Por exemplo:"),sg(),Tl(404,"pre")(405,"code"),iN(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),sg()(),Tl(407,"p"),iN(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Tl(409,"code"),iN(410,"bind"),sg(),iN(411,", por exemplo:"),sg(),Tl(412,"pre")(413,"code"),iN(414,`[p-load]="onLoadFields.bind(this)"
`),sg()()()(),Tl(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),iN(419," p-validate"),Gl(420,"br"),sg()()(),Tl(421,"td",17)(422,"code",18),iN(423,"string "),sg(),Tl(424,"code",29),iN(425," Function"),sg()(),Tl(426,"td",19),iN(427,"-"),sg(),Tl(428,"td",20)(429,"em")(430,"strong"),iN(431,"(opcional)"),sg()(),Tl(432,"p"),iN(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Tl(434,"strong"),iN(435,"mudan\xE7as do formul\xE1rio"),sg(),iN(436,"."),sg(),Tl(437,"p"),iN(438,"A propriedade aceita os seguintes tipos:"),sg(),Tl(439,"ul")(440,"li")(441,"code"),iN(442,"string"),sg(),iN(443,": "),Tl(444,"em"),iN(445,"Endpoint"),sg(),iN(446," usado pelo componente para requisi\xE7\xE3o via "),Tl(447,"code"),iN(448,"POST"),sg(),iN(449,"."),sg(),Tl(450,"li")(451,"code"),iN(452,"function"),sg(),iN(453,": M\xE9todo que ser\xE1 executado."),sg()(),Tl(454,"p"),iN(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),Tl(456,"code"),iN(457,"PoDynamicFormFieldChanged"),sg()(),Tl(458,"p"),iN(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Tl(460,"a",31),iN(461,"PoDynamicFormValidation"),sg(),iN(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),sg(),Tl(463,"pre")(464,"code"),iN(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),sg()(),Tl(466,"p"),iN(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Tl(468,"code"),iN(469,"bind"),sg(),iN(470,", por exemplo:"),sg(),Tl(471,"pre")(472,"code"),iN(473,`[p-validate]="this.myFunction.bind(this)"
`),sg()(),Tl(474,"blockquote")(475,"p"),iN(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),Tl(477,"code"),iN(478,"p-validate-fields"),sg(),iN(479,", a propriedade "),Tl(480,"code"),iN(481,"validate"),sg(),iN(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),sg()()()(),Tl(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),iN(487," p-validate-fields"),Gl(488,"br"),sg()()(),Tl(489,"td",17)(490,"code",32),iN(491,"Array<string>"),sg()(),Tl(492,"td",19),iN(493,"-"),sg(),Tl(494,"td",20)(495,"em")(496,"strong"),iN(497,"(opcional)"),sg()(),Tl(498,"p"),iN(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),sg()()(),Tl(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),iN(504," p-validate-on-input"),Gl(505,"br"),sg()()(),Tl(506,"td",17)(507,"code",28),iN(508,"boolean"),sg()(),Tl(509,"td",19),iN(510,"-"),sg(),Tl(511,"td",20)(512,"em")(513,"strong"),iN(514,"(opcional)"),sg()(),Tl(515,"p"),iN(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),sg(),Tl(517,"p"),iN(518,"Pode ser aplicado nos seguintes componentes:"),sg(),Tl(519,"ul")(520,"li"),iN(521,"po-input"),sg(),Tl(522,"li"),iN(523,"po-number"),sg(),Tl(524,"li"),iN(525,"po-decimal"),sg(),Tl(526,"li"),iN(527,"po-textarea"),sg(),Tl(528,"li"),iN(529,"po-password"),sg()(),Tl(530,"p"),iN(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),Tl(532,"code"),iN(533,"p-validate-fields"),sg(),iN(534,"."),sg()()(),Tl(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),iN(539," p-value"),Gl(540,"br"),sg()()(),Tl(541,"td",17)(542,"code",33),iN(543,"any"),sg()(),Tl(544,"td",19),iN(545,"-"),sg(),Tl(546,"td",20)(547,"p"),iN(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),Tl(549,"em"),iN(550,"property"),sg(),iN(551,`
dos objetos contidos na propridade `),Tl(552,"code"),iN(553,"p-fields"),sg(),iN(554,"."),sg(),Tl(555,"p"),iN(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),sg(),Tl(557,"blockquote")(558,"p"),iN(559,"Ex: "),Tl(560,"code"),iN(561,"{ name: 'po' }"),sg()()()()()(),Tl(562,"h3",9),iN(563,"M\xE9todos"),sg(),Tl(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),iN(570," focus "),sg()()()()(),Tl(571,"tr",20)(572,"td",20)(573,"p"),iN(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),sg(),Tl(575,"p"),iN(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),Tl(577,"code"),iN(578,"dynamic form"),sg(),iN(579,", como por exemplo:"),sg(),Tl(580,"pre")(581,"code",26),iN(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),sg()(),Tl(583,"pre")(584,"code",36),iN(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),sg()()()()(),Tl(586,"h5")(587,"b"),iN(588,"Par\xE2metros"),sg()(),Tl(589,"table",10)(590,"tr",11)(591,"th",12),iN(592,"Nome"),sg(),Tl(593,"th",12),iN(594,"Tipo"),sg(),Tl(595,"th",12),iN(596,"Descri\xE7\xE3o"),sg()(),Tl(597,"tr",13)(598,"td",14),iN(599," property"),sg(),Tl(600,"td",17)(601,"code",37),iN(602," string "),sg()(),Tl(603,"td",20)(604,"p"),iN(605,"Nome da propriedade atribu\xEDda ao "),Tl(606,"code"),iN(607,"PoDynamicFormField.property"),sg(),iN(608,"."),sg()()()(),Gl(609,"br"),Tl(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),iN(616," showAdditionalHelp "),sg()()()()(),Tl(617,"tr",20)(618,"td",20)(619,"p"),iN(620,"M\xE9todo que exibe "),Tl(621,"code"),iN(622,"p-helper"),sg(),iN(623," ou executa a a\xE7\xE3o definida em "),Tl(624,"code"),iN(625,"p-helper{eventOnClick}"),sg(),iN(626," ou em "),Tl(627,"code"),iN(628,"p-additionalHelp"),sg(),iN(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(630,"code"),iN(631,"keydown"),sg(),iN(632,"."),sg(),Tl(633,"pre")(634,"code"),iN(635,`import { PoDynamicModule } from '@po-ui/ng-components';
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
`),sg()()()()(),Tl(636,"h5")(637,"b"),iN(638,"Par\xE2metros"),sg()(),Tl(639,"table",10)(640,"tr",11)(641,"th",12),iN(642,"Nome"),sg(),Tl(643,"th",12),iN(644,"Tipo"),sg(),Tl(645,"th",12),iN(646,"Descri\xE7\xE3o"),sg()(),Tl(647,"tr",13)(648,"td",14),iN(649," property"),sg(),Tl(650,"td",17)(651,"code",37),iN(652," string "),sg()(),Tl(653,"td",20)(654,"p"),iN(655,"Identificador da coluna."),sg()()()(),Gl(656,"br"),Tl(657,"h3"),iN(658,"Interfaces"),sg(),Tl(659,"h4",38)(660,"code",5),iN(661,"PoDynamicFormField"),sg()(),Tl(662,"div",2)(663,"p"),iN(664," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),sg()(),Tl(665,"h4",9),iN(666,"Propriedades"),sg(),Tl(667,"table",10)(668,"tr",11)(669,"th",12),iN(670,"Nome"),sg(),Tl(671,"th",12),iN(672,"Tipo"),sg(),Tl(673,"th",12),iN(674,"Descri\xE7\xE3o"),sg()(),Tl(675,"tr",13)(676,"td",14)(677,"div",15)(678,"span",16),iN(679," additionalHelp"),Gl(680,"br"),sg()()(),Tl(681,"td",17)(682,"code",29),iN(683,"Function"),sg()(),Tl(684,"td",20)(685,"em")(686,"strong"),iN(687,"(opcional)"),sg()(),Tl(688,"p"),iN(689,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(690,"blockquote")(691,"p"),iN(692,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),sg()()()(),Tl(693,"tr",13)(694,"td",14)(695,"div",15)(696,"span",16),iN(697," additionalHelpTooltip"),Gl(698,"br"),sg()()(),Tl(699,"td",17)(700,"code",18),iN(701,"string"),sg()(),Tl(702,"td",20)(703,"em")(704,"strong"),iN(705,"(opcional)"),sg()(),Tl(706,"p"),iN(707,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(708,"code"),iN(709,"po-helper"),sg(),iN(710,`.
`),Tl(711,"strong"),iN(712,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(713,"blockquote")(714,"p"),iN(715,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),sg()()()(),Tl(716,"tr",13)(717,"td",14)(718,"div",15)(719,"span",16),iN(720," advancedFilters"),Gl(721,"br"),sg()()(),Tl(722,"td",17)(723,"code",39),iN(724,"Array<PoLookupAdvancedFilter>"),sg()(),Tl(725,"td",20)(726,"em")(727,"strong"),iN(728,"(opcional)"),sg()(),Tl(729,"p"),iN(730,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),sg(),Tl(731,"blockquote")(732,"p"),iN(733,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),sg()(),Tl(734,"p"),iN(735,"Exemplo de URL com busca avan\xE7ada:"),sg(),Tl(736,"p")(737,"code"),iN(738,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),sg()(),Tl(739,"p"),iN(740,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),sg(),Tl(741,"p")(742,"code"),iN(743,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),sg()()()(),Tl(744,"tr",13)(745,"td",14)(746,"div",15)(747,"span",16),iN(748," appendBox"),Gl(749,"br"),sg()()(),Tl(750,"td",17)(751,"code",28),iN(752,"boolean"),sg()(),Tl(753,"td",20)(754,"em")(755,"strong"),iN(756,"(opcional)"),sg()(),Tl(757,"p"),iN(758,"Define que o "),Tl(759,"code"),iN(760,"listbox"),sg(),iN(761," e/ou popover ("),Tl(762,"code"),iN(763,"p-helper"),sg(),iN(764," e/ou "),Tl(765,"code"),iN(766,"p-error-limit"),sg(),iN(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),sg(),Tl(768,"blockquote")(769,"p"),iN(770,"Quando utilizado com "),Tl(771,"code"),iN(772,"p-helper"),sg(),iN(773,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(774,"tr",13)(775,"td",14)(776,"div",15)(777,"span",16),iN(778," autoHeight"),Gl(779,"br"),sg()()(),Tl(780,"td",17)(781,"code",28),iN(782,"boolean"),sg()(),Tl(783,"td",20)(784,"em")(785,"strong"),iN(786,"(opcional)"),sg()(),Tl(787,"p"),iN(788,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),sg(),Tl(789,"p")(790,"strong"),iN(791,"Componentes compat\xEDveis:"),sg(),Tl(792,"code"),iN(793,"po-multiselect"),sg(),iN(794,", "),Tl(795,"code"),iN(796,"po-lookup"),sg(),iN(797,"."),sg()()(),Tl(798,"tr",13)(799,"td",14)(800,"div",15)(801,"span",16),iN(802," autoUpload"),Gl(803,"br"),sg()()(),Tl(804,"td",17)(805,"code",28),iN(806,"boolean"),sg()(),Tl(807,"td",20)(808,"em")(809,"strong"),iN(810,"(opcional)"),sg()(),Tl(811,"p"),iN(812,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),sg(),Tl(813,"p")(814,"strong"),iN(815,"Componente compat\xEDvel"),sg(),iN(816,": "),Tl(817,"code"),iN(818,"po-upload"),sg()()()(),Tl(819,"tr",13)(820,"td",14)(821,"div",15)(822,"span",16),iN(823," booleanFalse"),Gl(824,"br"),sg()()(),Tl(825,"td",17)(826,"code",18),iN(827,"string"),sg()(),Tl(828,"td",20)(829,"em")(830,"strong"),iN(831,"(opcional)"),sg()(),Tl(832,"p"),iN(833,"Texto exibido quando o valor do componente for "),Tl(834,"em"),iN(835,"false"),sg(),iN(836,"."),sg()()(),Tl(837,"tr",13)(838,"td",14)(839,"div",15)(840,"span",16),iN(841," booleanTrue"),Gl(842,"br"),sg()()(),Tl(843,"td",17)(844,"code",18),iN(845,"string"),sg()(),Tl(846,"td",20)(847,"em")(848,"strong"),iN(849,"(opcional)"),sg()(),Tl(850,"p"),iN(851,"Texto exibido quando o valor do componente for "),Tl(852,"em"),iN(853,"true"),sg(),iN(854,"."),sg()()(),Tl(855,"tr",13)(856,"td",14)(857,"div",15)(858,"span",16),iN(859," changeOnEnter"),Gl(860,"br"),sg()()(),Tl(861,"td",17)(862,"code",28),iN(863,"boolean"),sg()(),Tl(864,"td",20)(865,"em")(866,"strong"),iN(867,"(opcional)"),sg()(),Tl(868,"p"),iN(869,"Indica que o evento "),Tl(870,"code"),iN(871,"p-change"),sg(),iN(872,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),Tl(873,"code"),iN(874,"po-combo"),sg(),iN(875,"."),sg()()(),Tl(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),iN(880," changeVisibleColumns"),Gl(881,"br"),sg()()(),Tl(882,"td",17)(883,"code",29),iN(884,"Function"),sg()(),Tl(885,"td",20)(886,"em")(887,"strong"),iN(888,"(opcional)"),sg()(),Tl(889,"p"),iN(890,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),sg(),Tl(891,"p"),iN(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg(),Tl(893,"p")(894,"strong"),iN(895,"Componente compat\xEDvel"),sg(),iN(896,": "),Tl(897,"code"),iN(898,"po-lookup"),sg()()()(),Tl(899,"tr",13)(900,"td",14)(901,"div",15)(902,"span",16),iN(903," clean"),Gl(904,"br"),sg()()(),Tl(905,"td",17)(906,"code",28),iN(907,"boolean"),sg()(),Tl(908,"td",20)(909,"em")(910,"strong"),iN(911,"(opcional)"),sg()(),Tl(912,"p"),iN(913,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg(),Tl(914,"p")(915,"strong"),iN(916,"Componentes compat\xEDveis:"),sg(),Tl(917,"code"),iN(918,"po-datepicker"),sg(),iN(919,", "),Tl(920,"code"),iN(921,"po-datepicker-range"),sg(),iN(922,", "),Tl(923,"code"),iN(924,"po-input"),sg(),iN(925,", "),Tl(926,"code"),iN(927,"po-number"),sg(),iN(928,", "),Tl(929,"code"),iN(930,"po-decimal"),sg(),iN(931,`,
`),Tl(932,"code"),iN(933,"po-combo"),sg(),iN(934,", "),Tl(935,"code"),iN(936,"po-lookup"),sg(),iN(937,", "),Tl(938,"code"),iN(939,"po-password"),sg(),iN(940,", "),Tl(941,"code"),iN(942,"po-timepicker"),sg(),iN(943,"."),sg()()(),Tl(944,"tr",13)(945,"td",14)(946,"div",15)(947,"span",16),iN(948," columnRestoreManager"),Gl(949,"br"),sg()()(),Tl(950,"td",17)(951,"code",29),iN(952,"Function"),sg()(),Tl(953,"td",20)(954,"em")(955,"strong"),iN(956,"(opcional)"),sg()(),Tl(957,"p"),iN(958,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),sg(),Tl(959,"p"),iN(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),sg(),Tl(961,"p")(962,"strong"),iN(963,"Componente compat\xEDvel"),sg(),iN(964,": "),Tl(965,"code"),iN(966,"po-lookup"),sg()()()(),Tl(967,"tr",13)(968,"td",14)(969,"div",15)(970,"span",16),iN(971," columns"),Gl(972,"br"),sg()()(),Tl(973,"td",17)(974,"code",40),iN(975,"Array<PoLookupColumn> "),sg(),Tl(976,"code",41),iN(977," number"),sg()(),Tl(978,"td",20)(979,"em")(980,"strong"),iN(981,"(opcional)"),sg()(),Tl(982,"p"),iN(983,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),Tl(984,"code"),iN(985,"searchService"),sg(),iN(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),Tl(987,"a",42)(988,"code"),iN(989,"PoLookupColumn"),sg()(),iN(990,"."),sg(),Tl(991,"blockquote")(992,"p"),iN(993,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),Tl(994,"em"),iN(995,"label"),sg(),iN(996," e "),Tl(997,"em"),iN(998,"value"),sg(),iN(999,` para valores
de tela e do model respectivamente.`),sg()(),Tl(1e3,"p")(1001,"strong"),iN(1002,"Componentes compat\xEDveis:"),sg(),Tl(1003,"code"),iN(1004,"po-radio-group"),sg(),iN(1005,", "),Tl(1006,"code"),iN(1007,"po-lookup"),sg(),iN(1008,", "),Tl(1009,"code"),iN(1010,"po-checkbox-group"),sg(),iN(1011,"."),sg()()(),Tl(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),iN(1016," compactLabel"),Gl(1017,"br"),sg()()(),Tl(1018,"td",17)(1019,"code",28),iN(1020,"boolean"),sg()(),Tl(1021,"td",20)(1022,"em")(1023,"strong"),iN(1024,"(opcional)"),sg()(),Tl(1025,"p"),iN(1026,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(1027,"p"),iN(1028,"Quando habilitado ("),Tl(1029,"code"),iN(1030,"true"),sg(),iN(1031,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(1032,"ul")(1033,"li")(1034,"code"),iN(1035,"po-label"),sg()(),Tl(1036,"li")(1037,"code"),iN(1038,"p-requirement (showRequired)"),sg()(),Tl(1039,"li")(1040,"code"),iN(1041,"po-helper"),sg()()(),Tl(1042,"p"),iN(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(1044,"p"),iN(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(1046,"ul")(1047,"li")(1048,"code"),iN(1049,"--field-container-title-justify"),sg()(),Tl(1050,"li")(1051,"code"),iN(1052,"--field-container-title-flex"),sg()()(),Tl(1053,"p"),iN(1054,"Exemplo:"),sg(),Tl(1055,"pre")(1056,"code"),iN(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(1058,"p"),iN(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(1060,"tr",13)(1061,"td",14)(1062,"div",15)(1063,"span",16),iN(1064," container"),Gl(1065,"br"),sg()()(),Tl(1066,"td",17)(1067,"code",18),iN(1068,"string"),sg()(),Tl(1069,"td",20)(1070,"em")(1071,"strong"),iN(1072,"(opcional)"),sg()(),Tl(1073,"p"),iN(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),sg(),Tl(1075,"p"),iN(1076,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),sg()()(),Tl(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),iN(1081," customAction"),Gl(1082,"br"),sg()()(),Tl(1083,"td",17)(1084,"code",43),iN(1085,"PoProgressAction"),sg()(),Tl(1086,"td",20)(1087,"em")(1088,"strong"),iN(1089,"(opcional)"),sg()(),Tl(1090,"p"),iN(1091,"Define uma a\xE7\xE3o personalizada no componente "),Tl(1092,"code"),iN(1093,"po-upload"),sg(),iN(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),sg(),Tl(1095,"p")(1096,"strong"),iN(1097,"Componente compat\xEDvel"),sg(),iN(1098,": "),Tl(1099,"code"),iN(1100,"po-upload"),sg(),iN(1101,","),sg(),Tl(1102,"p")(1103,"strong"),iN(1104,"Exemplo de configura\xE7\xE3o"),sg(),iN(1105,":"),sg(),Tl(1106,"pre")(1107,"code",44),iN(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),sg()()()(),Tl(1109,"tr",13)(1110,"td",14)(1111,"div",15)(1112,"span",16),iN(1113," customActionClick"),Gl(1114,"br"),sg()()(),Tl(1115,"td",17)(1116,"code",45),iN(1117,"(file: PoUploadFile) => void"),sg()(),Tl(1118,"td",20)(1119,"em")(1120,"strong"),iN(1121,"(opcional)"),sg()(),Tl(1122,"p"),iN(1123,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),Tl(1124,"code"),iN(1125,"p-custom-action"),sg(),iN(1126,"."),sg(),Tl(1127,"p")(1128,"strong"),iN(1129,"Componente compat\xEDvel"),sg(),iN(1130,": "),Tl(1131,"code"),iN(1132,"po-upload"),sg(),iN(1133,","),sg(),Tl(1134,"p"),iN(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),sg(),Tl(1136,"p")(1137,"strong"),iN(1138,"Par\xE2metro do evento"),sg(),iN(1139,":"),sg(),Tl(1140,"ul")(1141,"li")(1142,"code"),iN(1143,"file"),sg(),iN(1144,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),Tl(1145,"code"),iN(1146,"PoUploadFile"),sg(),iN(1147," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),sg()(),Tl(1148,"p")(1149,"strong"),iN(1150,"Exemplo de uso"),sg(),iN(1151,":"),sg(),Tl(1152,"pre")(1153,"code",44),iN(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),sg()()()(),Tl(1155,"tr",13)(1156,"td",14)(1157,"div",15)(1158,"span",16),iN(1159," debounceTime"),Gl(1160,"br"),sg()()(),Tl(1161,"td",17)(1162,"code",41),iN(1163,"number"),sg()(),Tl(1164,"td",20)(1165,"em")(1166,"strong"),iN(1167,"(opcional)"),sg()(),Tl(1168,"p"),iN(1169,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),Tl(1170,"code"),iN(1171,"p-filter-service"),sg(),iN(1172,")."),sg(),Tl(1173,"p")(1174,"strong"),iN(1175,"Componentes compat\xEDveis:"),sg(),Tl(1176,"code"),iN(1177,"po-combo"),sg(),iN(1178,", "),Tl(1179,"code"),iN(1180,"po-multiselect"),sg(),iN(1181,"."),sg()()(),Tl(1182,"tr",13)(1183,"td",14)(1184,"div",15)(1185,"span",16),iN(1186," decimalsLength"),Gl(1187,"br"),sg()()(),Tl(1188,"td",17)(1189,"code",41),iN(1190,"number"),sg()(),Tl(1191,"td",20)(1192,"em")(1193,"strong"),iN(1194,"(opcional)"),sg()(),Tl(1195,"p"),iN(1196,"Quantidade m\xE1xima de casas decimais."),sg(),Tl(1197,"blockquote")(1198,"p"),iN(1199,"Esta propriedade s\xF3 pode ser utilizada quando o "),Tl(1200,"code"),iN(1201,"type"),sg(),iN(1202," for "),Tl(1203,"em"),iN(1204,"currency"),sg(),iN(1205," ou "),Tl(1206,"em"),iN(1207,"decimal"),sg(),iN(1208,"."),sg()()()(),Tl(1209,"tr",13)(1210,"td",14)(1211,"div",15)(1212,"span",16),iN(1213," directory"),Gl(1214,"br"),sg()()(),Tl(1215,"td",17)(1216,"code",28),iN(1217,"boolean"),sg()(),Tl(1218,"td",20)(1219,"em")(1220,"strong"),iN(1221,"(opcional)"),sg()(),Tl(1222,"p"),iN(1223,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),sg(),Tl(1224,"blockquote")(1225,"p"),iN(1226,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),sg()(),Tl(1227,"blockquote")(1228,"p"),iN(1229,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),Tl(1230,"strong"),iN(1231,"Internet Explorer"),sg(),iN(1232,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),sg()(),Tl(1233,"p")(1234,"strong"),iN(1235,"Componente compat\xEDvel"),sg(),iN(1236,": "),Tl(1237,"code"),iN(1238,"po-upload"),sg()()()(),Tl(1239,"tr",13)(1240,"td",14)(1241,"div",15)(1242,"span",16),iN(1243," disabled"),Gl(1244,"br"),sg()()(),Tl(1245,"td",17)(1246,"code",28),iN(1247,"boolean"),sg()(),Tl(1248,"td",20)(1249,"em")(1250,"strong"),iN(1251,"(opcional)"),sg()(),Tl(1252,"p"),iN(1253,"Desabilita o campo caso informar o valor "),Tl(1254,"em"),iN(1255,"true"),sg(),iN(1256,"."),sg()()(),Tl(1257,"tr",13)(1258,"td",14)(1259,"div",15)(1260,"span",16),iN(1261," disabledInitFilter"),Gl(1262,"br"),sg()()(),Tl(1263,"td",17)(1264,"code",28),iN(1265,"boolean"),sg()(),Tl(1266,"td",20)(1267,"em")(1268,"strong"),iN(1269,"(opcional)"),sg()(),Tl(1270,"p"),iN(1271,"Desabilita o filtro inicial no servi\xE7o do "),Tl(1272,"code"),iN(1273,"po-combo"),sg(),iN(1274,", que \xE9 executado no primeiro clique no campo."),sg()()(),Tl(1275,"tr",13)(1276,"td",14)(1277,"div",15)(1278,"span",16),iN(1279," disabledTabFilter"),Gl(1280,"br"),sg()()(),Tl(1281,"td",17)(1282,"code",28),iN(1283,"boolean"),sg()(),Tl(1284,"td",20)(1285,"em")(1286,"strong"),iN(1287,"(opcional)"),sg()(),Tl(1288,"p"),iN(1289,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),Tl(1290,"code"),iN(1291,"po-combo"),sg(),iN(1292,"."),sg()()(),Tl(1293,"tr",13)(1294,"td",14)(1295,"div",15)(1296,"span",16),iN(1297," divider"),Gl(1298,"br"),sg()()(),Tl(1299,"td",17)(1300,"code",18),iN(1301,"string"),sg()(),Tl(1302,"td",20)(1303,"em")(1304,"strong"),iN(1305,"(opcional)"),sg()(),Tl(1306,"p"),iN(1307,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),sg()()(),Tl(1308,"tr",13)(1309,"td",14)(1310,"div",15)(1311,"span",16),iN(1312," dragDrop"),Gl(1313,"br"),sg()()(),Tl(1314,"td",17)(1315,"code",28),iN(1316,"boolean"),sg()(),Tl(1317,"td",20)(1318,"em")(1319,"strong"),iN(1320,"(opcional)"),sg()(),Tl(1321,"p"),iN(1322,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),sg(),Tl(1323,"blockquote")(1324,"p"),iN(1325,"Recomendamos utilizar apenas um "),Tl(1326,"code"),iN(1327,"po-upload"),sg(),iN(1328," com esta funcionalidade por tela."),sg()(),Tl(1329,"p")(1330,"strong"),iN(1331,"Componente compat\xEDvel"),sg(),iN(1332,": "),Tl(1333,"code"),iN(1334,"po-upload"),sg()()()(),Tl(1335,"tr",13)(1336,"td",14)(1337,"div",15)(1338,"span",16),iN(1339," dragDropHeight"),Gl(1340,"br"),sg()()(),Tl(1341,"td",17)(1342,"code",41),iN(1343,"number"),sg()(),Tl(1344,"td",20)(1345,"em")(1346,"strong"),iN(1347,"(opcional)"),sg()(),Tl(1348,"p"),iN(1349,"Define em "),Tl(1350,"em"),iN(1351,"pixels"),sg(),iN(1352," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),Tl(1353,"code"),iN(1354,"160px"),sg(),iN(1355,"."),sg(),Tl(1356,"blockquote")(1357,"p"),iN(1358,"Esta propriedade funciona somente se a propriedade "),Tl(1359,"code"),iN(1360,"p-drag-drop"),sg(),iN(1361," estiver habilitada."),sg()(),Tl(1362,"p")(1363,"strong"),iN(1364,"Componente compat\xEDvel"),sg(),iN(1365,": "),Tl(1366,"code"),iN(1367,"po-upload"),sg()()()(),Tl(1368,"tr",13)(1369,"td",14)(1370,"div",15)(1371,"span",16),iN(1372," errorAsyncFunction"),Gl(1373,"br"),sg()()(),Tl(1374,"td",17)(1375,"code",46),iN(1376,"(value) => Observable<boolean>"),sg()(),Tl(1377,"td",20)(1378,"em")(1379,"strong"),iN(1380,"(opcional)"),sg()(),Tl(1381,"p"),iN(1382,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(1383,"code"),iN(1384,"change"),sg(),iN(1385," ou "),Tl(1386,"code"),iN(1387,"change-model"),sg(),iN(1388,", dependendo do valor da propriedade "),Tl(1389,"code"),iN(1390,"triggerMode"),sg(),iN(1391,"."),sg(),Tl(1392,"blockquote")(1393,"p"),iN(1394,"Retorna "),Tl(1395,"code"),iN(1396,"Observable com o valor true"),sg(),iN(1397," para sinalizar o erro "),Tl(1398,"code"),iN(1399,"false"),sg(),iN(1400," para indicar que n\xE3o h\xE1 erro."),sg()(),Tl(1401,"p")(1402,"strong"),iN(1403,"Componente compat\xEDvel"),sg(),iN(1404,": "),Tl(1405,"code"),iN(1406,"po-datepicker"),sg()()()(),Tl(1407,"tr",13)(1408,"td",14)(1409,"div",15)(1410,"span",16),iN(1411," errorAsyncProperties"),Gl(1412,"br"),sg()()(),Tl(1413,"td",17)(1414,"code",47),iN(1415,"ErrorAsyncProperties"),sg()(),Tl(1416,"td",20)(1417,"em")(1418,"strong"),iN(1419,"(opcional)"),sg()(),Tl(1420,"p"),iN(1421,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),sg(),Tl(1422,"p")(1423,"strong"),iN(1424,"Componentes compat\xEDveis:"),sg(),Tl(1425,"code"),iN(1426,"po-input"),sg(),iN(1427,", "),Tl(1428,"code"),iN(1429,"po-number"),sg(),iN(1430,", "),Tl(1431,"code"),iN(1432,"po-decimal"),sg(),iN(1433,", "),Tl(1434,"code"),iN(1435,"po-password"),sg(),iN(1436,"."),sg()()(),Tl(1437,"tr",13)(1438,"td",14)(1439,"div",15)(1440,"span",16),iN(1441," errorLimit"),Gl(1442,"br"),sg()()(),Tl(1443,"td",17)(1444,"code",28),iN(1445,"boolean"),sg()(),Tl(1446,"td",20)(1447,"em")(1448,"strong"),iN(1449,"(opcional)"),sg()(),Tl(1450,"p"),iN(1451,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(1452,"blockquote")(1453,"p"),iN(1454,"Caso essa propriedade seja definida como "),Tl(1455,"code"),iN(1456,"true"),sg(),iN(1457,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()(),Tl(1458,"p")(1459,"strong"),iN(1460,"Componentes compat\xEDveis:"),sg(),Tl(1461,"code"),iN(1462,"po-checkbox-group"),sg(),iN(1463,", "),Tl(1464,"code"),iN(1465,"po-combo"),sg(),iN(1466,", "),Tl(1467,"code"),iN(1468,"po-datepicker"),sg(),iN(1469,", "),Tl(1470,"code"),iN(1471,"po-datepicker-range"),sg(),iN(1472,", "),Tl(1473,"code"),iN(1474,"po-decimal"),sg(),iN(1475,", "),Tl(1476,"code"),iN(1477,"po-input"),sg(),iN(1478,", "),Tl(1479,"code"),iN(1480,"po-lookup"),sg(),iN(1481,", "),Tl(1482,"code"),iN(1483,"po-multiselect"),sg(),iN(1484,", "),Tl(1485,"code"),iN(1486,"po-number"),sg(),iN(1487,", "),Tl(1488,"code"),iN(1489,"po-password"),sg(),iN(1490,", "),Tl(1491,"code"),iN(1492,"po-radio-group"),sg(),iN(1493,", "),Tl(1494,"code"),iN(1495,"po-select"),sg(),iN(1496,`,
`),Tl(1497,"code"),iN(1498,"po-switch"),sg(),iN(1499,", "),Tl(1500,"code"),iN(1501,"po-textarea"),sg(),iN(1502,", "),Tl(1503,"code"),iN(1504,"po-timepicker"),sg(),iN(1505,"."),sg()()(),Tl(1506,"tr",13)(1507,"td",14)(1508,"div",15)(1509,"span",16),iN(1510," errorMessage"),Gl(1511,"br"),sg()()(),Tl(1512,"td",17)(1513,"code",18),iN(1514,"string"),sg()(),Tl(1515,"td",20)(1516,"em")(1517,"strong"),iN(1518,"(opcional)"),sg()(),Tl(1519,"p"),iN(1520,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),sg(),Tl(1521,"p"),iN(1522,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),sg(),Tl(1523,"ul")(1524,"li"),iN(1525,"pattern;"),sg(),Tl(1526,"li"),iN(1527,"minValue;"),sg(),Tl(1528,"li"),iN(1529,"maxValue;"),sg(),Tl(1530,"li"),iN(1531,"required;"),sg()(),Tl(1532,"blockquote")(1533,"p"),iN(1534,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),Tl(1535,"code"),iN(1536,"po-datepicker"),sg(),iN(1537,", "),Tl(1538,"code"),iN(1539,"po-input"),sg(),iN(1540,", "),Tl(1541,"code"),iN(1542,"po-number"),sg(),iN(1543,", "),Tl(1544,"code"),iN(1545,"po-decimal"),sg(),iN(1546,", "),Tl(1547,"code"),iN(1548,"po-password"),sg(),iN(1549,", "),Tl(1550,"code"),iN(1551,"po-timepicker"),sg(),iN(1552,`, \xE9 necess\xE1rio que a propriedade
`),Tl(1553,"code"),iN(1554,"requiredFieldErrorMessage"),sg(),iN(1555," esteja como "),Tl(1556,"code"),iN(1557,"true"),sg(),iN(1558,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),Tl(1559,"code"),iN(1560,"po-datepicker-range"),sg(),iN(1561,", "),Tl(1562,"code"),iN(1563,"po-select"),sg(),iN(1564,", "),Tl(1565,"code"),iN(1566,"po-checkbox-group"),sg(),iN(1567,", "),Tl(1568,"code"),iN(1569,"po-radio-group"),sg(),iN(1570,", "),Tl(1571,"code"),iN(1572,"po-multiselect"),sg(),iN(1573,", "),Tl(1574,"code"),iN(1575,"po-combo"),sg(),iN(1576,`,
`),Tl(1577,"code"),iN(1578,"po-lookup"),sg(),iN(1579," e "),Tl(1580,"code"),iN(1581,"po-textarea"),sg(),iN(1582," n\xE3o \xE9 necess\xE1rio passar a propriedade "),Tl(1583,"code"),iN(1584,"requiredFieldErrorMessage"),sg(),iN(1585,"."),sg()(),Tl(1586,"p")(1587,"strong"),iN(1588,"Componentes compat\xEDveis:"),sg(),Tl(1589,"code"),iN(1590,"po-checkbox-group"),sg(),iN(1591,", "),Tl(1592,"code"),iN(1593,"po-combo"),sg(),iN(1594,", "),Tl(1595,"code"),iN(1596,"po-datepicker"),sg(),iN(1597,", "),Tl(1598,"code"),iN(1599,"po-datepicker-range"),sg(),iN(1600,", "),Tl(1601,"code"),iN(1602,"po-decimal"),sg(),iN(1603,", "),Tl(1604,"code"),iN(1605,"po-input"),sg(),iN(1606,", "),Tl(1607,"code"),iN(1608,"po-lookup"),sg(),iN(1609,", "),Tl(1610,"code"),iN(1611,"po-multiselect"),sg(),iN(1612,", "),Tl(1613,"code"),iN(1614,"po-number"),sg(),iN(1615,", "),Tl(1616,"code"),iN(1617,"po-password"),sg(),iN(1618,", "),Tl(1619,"code"),iN(1620,"po-radio-group"),sg(),iN(1621,", "),Tl(1622,"code"),iN(1623,"po-select"),sg(),iN(1624,`,
`),Tl(1625,"code"),iN(1626,"po-switch"),sg(),iN(1627,", "),Tl(1628,"code"),iN(1629,"po-textarea"),sg(),iN(1630,", "),Tl(1631,"code"),iN(1632,"po-timepicker"),sg(),iN(1633,"."),sg()()(),Tl(1634,"tr",13)(1635,"td",14)(1636,"div",15)(1637,"span",16),iN(1638," fieldLabel"),Gl(1639,"br"),sg()()(),Tl(1640,"td",17)(1641,"code",18),iN(1642,"string"),sg()(),Tl(1643,"td",20)(1644,"em")(1645,"strong"),iN(1646,"(opcional)"),sg()(),Tl(1647,"p"),iN(1648,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),sg(),Tl(1649,"p"),iN(1650,"O valor padr\xE3o \xE9: "),Tl(1651,"code"),iN(1652,"label"),sg(),iN(1653,"."),sg(),Tl(1654,"blockquote")(1655,"p"),iN(1656,"Esta propriedade pode ser utilizada em conjunto com: "),Tl(1657,"code"),iN(1658,"options"),sg(),iN(1659,", "),Tl(1660,"code"),iN(1661,"optionsService"),sg(),iN(1662," e "),Tl(1663,"code"),iN(1664,"searchService"),sg(),iN(1665,"."),sg()()()(),Tl(1666,"tr",13)(1667,"td",14)(1668,"div",15)(1669,"span",16),iN(1670," fieldValue"),Gl(1671,"br"),sg()()(),Tl(1672,"td",17)(1673,"code",18),iN(1674,"string"),sg()(),Tl(1675,"td",20)(1676,"em")(1677,"strong"),iN(1678,"(opcional)"),sg()(),Tl(1679,"p"),iN(1680,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),sg(),Tl(1681,"p"),iN(1682,"O valor padr\xE3o \xE9: "),Tl(1683,"code"),iN(1684,"value"),sg(),iN(1685,"."),sg(),Tl(1686,"blockquote")(1687,"p"),iN(1688,"Esta propriedade pode ser utilizada em conjunto com: "),Tl(1689,"code"),iN(1690,"options"),sg(),iN(1691,", "),Tl(1692,"code"),iN(1693,"optionsService"),sg(),iN(1694," e "),Tl(1695,"code"),iN(1696,"searchService"),sg(),iN(1697,"."),sg()()()(),Tl(1698,"tr",13)(1699,"td",14)(1700,"div",15)(1701,"span",16),iN(1702," filterMinlength"),Gl(1703,"br"),sg()()(),Tl(1704,"td",17)(1705,"code",41),iN(1706,"number"),sg()(),Tl(1707,"td",20)(1708,"em")(1709,"strong"),iN(1710,"(opcional)"),sg()(),Tl(1711,"p"),iN(1712,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),Tl(1713,"code"),iN(1714,"po-combo"),sg(),iN(1715,"."),sg()()(),Tl(1716,"tr",13)(1717,"td",14)(1718,"div",15)(1719,"span",16),iN(1720," filterMode"),Gl(1721,"br"),sg()()(),Tl(1722,"td",17)(1723,"code",48),iN(1724,"PoMultiselectFilterMode"),sg()(),Tl(1725,"td",20)(1726,"em")(1727,"strong"),iN(1728,"(opcional)"),sg()(),Tl(1729,"p"),iN(1730,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),Tl(1731,"code"),iN(1732,"startsWith"),sg(),iN(1733,", "),Tl(1734,"code"),iN(1735,"contains"),sg(),iN(1736," ou "),Tl(1737,"code"),iN(1738,"endsWith"),sg(),iN(1739,"."),sg(),Tl(1740,"blockquote")(1741,"p"),iN(1742,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),sg()(),Tl(1743,"p")(1744,"strong"),iN(1745,"Componente compat\xEDvel:"),sg(),Tl(1746,"code"),iN(1747,"po-multiselect"),sg(),iN(1748,"."),sg()()(),Tl(1749,"tr",13)(1750,"td",14)(1751,"div",15)(1752,"span",16),iN(1753," forceBooleanComponentType"),Gl(1754,"br"),sg()()(),Tl(1755,"td",17)(1756,"code",49),iN(1757,"ForceBooleanComponentEnum"),sg()(),Tl(1758,"td",20)(1759,"em")(1760,"strong"),iN(1761,"(opcional)"),sg()(),Tl(1762,"p"),iN(1763,"Valores aceitos:"),sg(),Tl(1764,"ul")(1765,"li"),iN(1766,"ForceBooleanComponentEnum.switch"),sg(),Tl(1767,"li"),iN(1768,"ForceBooleanComponentEnum.checkbox"),sg()()()(),Tl(1769,"tr",13)(1770,"td",14)(1771,"div",15)(1772,"span",16),iN(1773," forceOptionsComponentType"),Gl(1774,"br"),sg()()(),Tl(1775,"td",17)(1776,"code",50),iN(1777,"ForceOptionComponentEnum"),sg()(),Tl(1778,"td",20)(1779,"em")(1780,"strong"),iN(1781,"(opcional)"),sg()(),Tl(1782,"p"),iN(1783,"pode ser utilizada em conjunto com a propriedade "),Tl(1784,"code"),iN(1785,"options"),sg(),iN(1786," for\xE7ando o componente a renderizar um "),Tl(1787,"code"),iN(1788,"po-select"),sg(),iN(1789," ou "),Tl(1790,"code"),iN(1791,"po-radio-group"),sg(),iN(1792,"."),sg(),Tl(1793,"p"),iN(1794,"Valores aceitos:"),sg(),Tl(1795,"ul")(1796,"li"),iN(1797,"ForceOptionComponentEnum.radioGroup"),sg(),Tl(1798,"li"),iN(1799,"ForceOptionComponentEnum.select"),sg()(),Tl(1800,"blockquote")(1801,"p"),iN(1802,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),Tl(1803,"code"),iN(1804,"optionsMulti"),sg(),iN(1805," e "),Tl(1806,"code"),iN(1807,"optionsService"),sg(),iN(1808,"."),sg()()()(),Tl(1809,"tr",13)(1810,"td",14)(1811,"div",15)(1812,"span",16),iN(1813," formField"),Gl(1814,"br"),sg()()(),Tl(1815,"td",17)(1816,"code",18),iN(1817,"string"),sg()(),Tl(1818,"td",20)(1819,"em")(1820,"strong"),iN(1821,"(opcional)"),sg()(),Tl(1822,"p"),iN(1823,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),Tl(1824,"code"),iN(1825,"url"),sg(),iN(1826,"."),sg(),Tl(1827,"blockquote")(1828,"p"),iN(1829,"O valor default \xE9 "),Tl(1830,"code"),iN(1831,"files"),sg()()(),Tl(1832,"p")(1833,"strong"),iN(1834,"Componente compat\xEDvel"),sg(),iN(1835,": "),Tl(1836,"code"),iN(1837,"po-upload"),sg()()()(),Tl(1838,"tr",13)(1839,"td",14)(1840,"div",15)(1841,"span",16),iN(1842," format"),Gl(1843,"br"),sg()()(),Tl(1844,"td",17)(1845,"code",18),iN(1846,"string "),sg(),Tl(1847,"code",32),iN(1848," Array<string>"),sg()(),Tl(1849,"td",20)(1850,"em")(1851,"strong"),iN(1852,"(opcional)"),sg()(),Tl(1853,"p"),iN(1854,"Formato de exibi\xE7\xE3o no campo."),sg(),Tl(1855,"p"),iN(1856,"Ao utilizar esta propriedade com o "),Tl(1857,"code"),iN(1858,"type"),sg(),Tl(1859,"em"),iN(1860,"PoDynamicFieldType.Date"),sg(),iN(1861," ou "),Tl(1862,"em"),iN(1863,"PoDynamicFieldType.DateTime"),sg(),iN(1864,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),sg(),Tl(1865,"p"),iN(1866,"Valores v\xE1lidos:"),sg(),Tl(1867,"ul")(1868,"li"),iN(1869,"dd/mm/yyyy"),sg(),Tl(1870,"li"),iN(1871,"mm/dd/yyyy"),sg(),Tl(1872,"li"),iN(1873,"yyyy/mm/dd"),sg()(),Tl(1874,"p"),iN(1875,"Ao utilizar com o "),Tl(1876,"code"),iN(1877,"type"),sg(),Tl(1878,"em"),iN(1879,"PoDynamicFieldType.Time"),sg(),iN(1880,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),sg(),Tl(1881,"p"),iN(1882,"Valores v\xE1lidos:"),sg(),Tl(1883,"ul")(1884,"li")(1885,"code"),iN(1886,"24"),sg(),iN(1887,": formato de 24 horas (padr\xE3o)"),sg(),Tl(1888,"li")(1889,"code"),iN(1890,"12"),sg(),iN(1891,": formato de 12 horas com indicador AM/PM"),sg()(),Tl(1892,"p"),iN(1893,"Tamb\xE9m pode-se utilizar em conjunto com "),Tl(1894,"code"),iN(1895,"searchService"),sg(),iN(1896,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),sg(),Tl(1897,"p")(1898,"strong"),iN(1899,"Componentes compat\xEDveis:"),sg(),Tl(1900,"code"),iN(1901,"po-datepicker"),sg(),iN(1902,", "),Tl(1903,"code"),iN(1904,"po-datetimepicker"),sg(),iN(1905,", "),Tl(1906,"code"),iN(1907,"po-timepicker"),sg(),iN(1908,", "),Tl(1909,"code"),iN(1910,"po-lookup"),sg(),iN(1911,"."),sg()()(),Tl(1912,"tr",13)(1913,"td",14)(1914,"div",15)(1915,"span",16),iN(1916," formatModel"),Gl(1917,"br"),sg()()(),Tl(1918,"td",17)(1919,"code",28),iN(1920,"boolean"),sg()(),Tl(1921,"td",20)(1922,"em")(1923,"strong"),iN(1924,"(opcional)"),sg()(),Tl(1925,"p"),iN(1926,"Indica se o "),Tl(1927,"code"),iN(1928,"model"),sg(),iN(1929," receber\xE1 o valor formatado pelas propriedades "),Tl(1930,"code"),iN(1931,"p-label-on"),sg(),iN(1932," e "),Tl(1933,"code"),iN(1934,"p-label-off"),sg(),iN(1935,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),sg(),Tl(1936,"p"),iN(1937,"O valor padr\xE3o \xE9: "),Tl(1938,"code"),iN(1939,"false"),sg(),iN(1940,"."),sg(),Tl(1941,"blockquote")(1942,"p"),iN(1943,"Esta propriedade est\xE1 disponivel apenas para o "),Tl(1944,"code"),iN(1945,"swicth"),sg(),iN(1946,"."),sg()()()(),Tl(1947,"tr",13)(1948,"td",14)(1949,"div",15)(1950,"span",16),iN(1951," formatTime"),Gl(1952,"br"),sg()()(),Tl(1953,"td",17)(1954,"code",18),iN(1955,"string"),sg()(),Tl(1956,"td",20)(1957,"em")(1958,"strong"),iN(1959,"(opcional)"),sg()(),Tl(1960,"p"),iN(1961,"Define o formato de exibi\xE7\xE3o do timer ("),Tl(1962,"code"),iN(1963,"'12'"),sg(),iN(1964," ou "),Tl(1965,"code"),iN(1966,"'24'"),sg(),iN(1967,")."),sg(),Tl(1968,"p")(1969,"strong"),iN(1970,"Componente compat\xEDvel:"),sg(),Tl(1971,"code"),iN(1972,"po-datetimepicker"),sg()()()(),Tl(1973,"tr",13)(1974,"td",14)(1975,"div",15)(1976,"span",16),iN(1977," gridColumns"),Gl(1978,"br"),sg()()(),Tl(1979,"td",17)(1980,"code",41),iN(1981,"number"),sg()(),Tl(1982,"td",20)(1983,"em")(1984,"strong"),iN(1985,"(opcional)"),sg()(),Tl(1986,"p"),iN(1987,"Tamanho de exibi\xE7\xE3o do campo em telas."),sg(),Tl(1988,"p"),iN(1989,"Deve ser usado o sistema de "),Tl(1990,"strong"),iN(1991,"grid"),sg(),iN(1992," do PO (1 ... 12 colunas)."),sg(),Tl(1993,"blockquote")(1994,"p"),iN(1995,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Tl(1996,"tr",13)(1997,"td",14)(1998,"div",15)(1999,"span",16),iN(2e3," gridLgColumns"),Gl(2001,"br"),sg()()(),Tl(2002,"td",17)(2003,"code",41),iN(2004,"number"),sg()(),Tl(2005,"td",20)(2006,"em")(2007,"strong"),iN(2008,"(opcional)"),sg()(),Tl(2009,"p"),iN(2010,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Tl(2011,"p"),iN(2012,"Deve ser usado o sistema de "),Tl(2013,"strong"),iN(2014,"grid"),sg(),iN(2015," do PO (1 ... 12 colunas)."),sg(),Tl(2016,"blockquote")(2017,"p"),iN(2018,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2019,"code"),iN(2020,"gridColumns"),sg(),iN(2021,"."),sg()()()(),Tl(2022,"tr",13)(2023,"td",14)(2024,"div",15)(2025,"span",16),iN(2026," gridLgPull"),Gl(2027,"br"),sg()()(),Tl(2028,"td",17)(2029,"code",41),iN(2030,"number"),sg()(),Tl(2031,"td",20)(2032,"em")(2033,"strong"),iN(2034,"(opcional)"),sg()(),Tl(2035,"p"),iN(2036,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),sg(),Tl(2037,"p"),iN(2038,"Deve ser usado o sistema de "),Tl(2039,"strong"),iN(2040,"grid"),sg(),iN(2041," do PO (1 ... 11 colunas)."),sg(),Tl(2042,"blockquote")(2043,"p"),iN(2044,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2045,"code"),iN(2046,"gridColumns"),sg(),iN(2047,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2048,"tr",13)(2049,"td",14)(2050,"div",15)(2051,"span",16),iN(2052," gridMdColumns"),Gl(2053,"br"),sg()()(),Tl(2054,"td",17)(2055,"code",41),iN(2056,"number"),sg()(),Tl(2057,"td",20)(2058,"em")(2059,"strong"),iN(2060,"(opcional)"),sg()(),Tl(2061,"p"),iN(2062,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Tl(2063,"p"),iN(2064,"Deve ser usado o sistema de "),Tl(2065,"strong"),iN(2066,"grid"),sg(),iN(2067," do PO (1 ... 12 colunas)."),sg(),Tl(2068,"blockquote")(2069,"p"),iN(2070,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2071,"code"),iN(2072,"gridColumns"),sg(),iN(2073,"."),sg()()()(),Tl(2074,"tr",13)(2075,"td",14)(2076,"div",15)(2077,"span",16),iN(2078," gridMdPull"),Gl(2079,"br"),sg()()(),Tl(2080,"td",17)(2081,"code",41),iN(2082,"number"),sg()(),Tl(2083,"td",20)(2084,"em")(2085,"strong"),iN(2086,"(opcional)"),sg()(),Tl(2087,"p"),iN(2088,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),sg(),Tl(2089,"p"),iN(2090,"Deve ser usado o sistema de "),Tl(2091,"strong"),iN(2092,"grid"),sg(),iN(2093," do PO (1 ... 11 colunas)."),sg(),Tl(2094,"blockquote")(2095,"p"),iN(2096,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2097,"code"),iN(2098,"gridColumns"),sg(),iN(2099,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2100,"tr",13)(2101,"td",14)(2102,"div",15)(2103,"span",16),iN(2104," gridSmColumns"),Gl(2105,"br"),sg()()(),Tl(2106,"td",17)(2107,"code",41),iN(2108,"number"),sg()(),Tl(2109,"td",20)(2110,"em")(2111,"strong"),iN(2112,"(opcional)"),sg()(),Tl(2113,"p"),iN(2114,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Tl(2115,"p"),iN(2116,"Deve ser usado o sistema de "),Tl(2117,"strong"),iN(2118,"grid"),sg(),iN(2119," do PO (1 ... 12 colunas)."),sg(),Tl(2120,"blockquote")(2121,"p"),iN(2122,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2123,"code"),iN(2124,"gridColumns"),sg(),iN(2125,"."),sg()()()(),Tl(2126,"tr",13)(2127,"td",14)(2128,"div",15)(2129,"span",16),iN(2130," gridSmPull"),Gl(2131,"br"),sg()()(),Tl(2132,"td",17)(2133,"code",41),iN(2134,"number"),sg()(),Tl(2135,"td",20)(2136,"em")(2137,"strong"),iN(2138,"(opcional)"),sg()(),Tl(2139,"p"),iN(2140,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),sg(),Tl(2141,"p"),iN(2142,"Deve ser usado o sistema de "),Tl(2143,"strong"),iN(2144,"grid"),sg(),iN(2145," do PO (1 ... 11 colunas)."),sg(),Tl(2146,"blockquote")(2147,"p"),iN(2148,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2149,"code"),iN(2150,"gridColumns"),sg(),iN(2151,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2152,"tr",13)(2153,"td",14)(2154,"div",15)(2155,"span",16),iN(2156," gridXlColumns"),Gl(2157,"br"),sg()()(),Tl(2158,"td",17)(2159,"code",41),iN(2160,"number"),sg()(),Tl(2161,"td",20)(2162,"em")(2163,"strong"),iN(2164,"(opcional)"),sg()(),Tl(2165,"p"),iN(2166,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Tl(2167,"p"),iN(2168,"Deve ser usado o sistema de "),Tl(2169,"strong"),iN(2170,"grid"),sg(),iN(2171," do PO (1 ... 12 colunas)."),sg(),Tl(2172,"blockquote")(2173,"p"),iN(2174,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(2175,"code"),iN(2176,"gridColumns"),sg(),iN(2177,"."),sg()()()(),Tl(2178,"tr",13)(2179,"td",14)(2180,"div",15)(2181,"span",16),iN(2182," gridXlPull"),Gl(2183,"br"),sg()()(),Tl(2184,"td",17)(2185,"code",41),iN(2186,"number"),sg()(),Tl(2187,"td",20)(2188,"em")(2189,"strong"),iN(2190,"(opcional)"),sg()(),Tl(2191,"p"),iN(2192,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),sg(),Tl(2193,"p"),iN(2194,"Deve ser usado o sistema de "),Tl(2195,"strong"),iN(2196,"grid"),sg(),iN(2197," do PO (1 ... 11 colunas)."),sg(),Tl(2198,"blockquote")(2199,"p"),iN(2200,"Esta propriedade n\xE3o funciona com a propriedade "),Tl(2201,"code"),iN(2202,"gridColumns"),sg(),iN(2203,". Deve-se especificar o tamanho da tela."),sg()()()(),Tl(2204,"tr",13)(2205,"td",14)(2206,"div",15)(2207,"span",16),iN(2208," headers"),Gl(2209,"br"),sg()()(),Tl(2210,"td",17)(2211,"code",51),iN(2212,"{ [name: string]: string "),sg(),Tl(2213,"code",52),iN(2214,` Array<string>;
}`),sg()(),Tl(2215,"td",20)(2216,"em")(2217,"strong"),iN(2218,"(opcional)"),sg()(),Tl(2219,"p"),iN(2220,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),sg(),Tl(2221,"p")(2222,"strong"),iN(2223,"Componente compat\xEDvel"),sg(),iN(2224,": "),Tl(2225,"code"),iN(2226,"po-upload"),sg()()()(),Tl(2227,"tr",13)(2228,"td",14)(2229,"div",15)(2230,"span",16),iN(2231," help"),Gl(2232,"br"),sg()()(),Tl(2233,"td",17)(2234,"code",18),iN(2235,"string"),sg()(),Tl(2236,"td",20)(2237,"em")(2238,"strong"),iN(2239,"(opcional)"),sg()(),Tl(2240,"p"),iN(2241,"Texto de ajuda."),sg()()(),Tl(2242,"tr",13)(2243,"td",14)(2244,"div",15)(2245,"span",16),iN(2246," helper"),Gl(2247,"br"),sg()()(),Tl(2248,"td",17)(2249,"code",18),iN(2250,"string "),sg(),Tl(2251,"code",53),iN(2252," PoHelperOptions"),sg()(),Tl(2253,"td",20)(2254,"em")(2255,"strong"),iN(2256,"(opcional)"),sg()(),Tl(2257,"p"),iN(2258,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),sg()()(),Tl(2259,"tr",13)(2260,"td",14)(2261,"div",15)(2262,"span",16),iN(2263," hideLabelStatus"),Gl(2264,"br"),sg()()(),Tl(2265,"td",17)(2266,"code",28),iN(2267,"boolean"),sg()(),Tl(2268,"td",20)(2269,"em")(2270,"strong"),iN(2271,"(opcional)"),sg()(),Tl(2272,"p"),iN(2273,"Indica se o status do "),Tl(2274,"code"),iN(2275,"model"),sg(),iN(2276," ser\xE1 escondido visualmente ao lado do switch"),sg()()(),Tl(2277,"tr",13)(2278,"td",14)(2279,"div",15)(2280,"span",16),iN(2281," hidePasswordPeek"),Gl(2282,"br"),sg()()(),Tl(2283,"td",17)(2284,"code",28),iN(2285,"boolean"),sg()(),Tl(2286,"td",20)(2287,"em")(2288,"strong"),iN(2289,"(opcional)"),sg()(),Tl(2290,"p"),iN(2291,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),Tl(2292,"code"),iN(2293,"po-password"),sg(),iN(2294,"."),sg()()(),Tl(2295,"tr",13)(2296,"td",14)(2297,"div",15)(2298,"span",16),iN(2299," hideRestrictionsInfo"),Gl(2300,"br"),sg()()(),Tl(2301,"td",17)(2302,"code",28),iN(2303,"boolean"),sg()(),Tl(2304,"td",20)(2305,"em")(2306,"strong"),iN(2307,"(opcional)"),sg()(),Tl(2308,"p"),iN(2309,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),sg(),Tl(2310,"p")(2311,"strong"),iN(2312,"Componente compat\xEDvel"),sg(),iN(2313,": "),Tl(2314,"code"),iN(2315,"po-upload"),sg()()()(),Tl(2316,"tr",13)(2317,"td",14)(2318,"div",15)(2319,"span",16),iN(2320," hideSearch"),Gl(2321,"br"),sg()()(),Tl(2322,"td",17)(2323,"code",28),iN(2324,"boolean"),sg()(),Tl(2325,"td",20)(2326,"em")(2327,"strong"),iN(2328,"(opcional)"),sg()(),Tl(2329,"p"),iN(2330,"Esconde o campo de pesquisa existente dentro do dropdown do "),Tl(2331,"code"),iN(2332,"po-multiselect"),sg(),iN(2333,"."),sg()()(),Tl(2334,"tr",13)(2335,"td",14)(2336,"div",15)(2337,"span",16),iN(2338," hideSelectAll"),Gl(2339,"br"),sg()()(),Tl(2340,"td",17)(2341,"code",28),iN(2342,"boolean"),sg()(),Tl(2343,"td",20)(2344,"em")(2345,"strong"),iN(2346,"(opcional)"),sg()(),Tl(2347,"p"),iN(2348,'Indica se o campo "Selecionar todos" do '),Tl(2349,"code"),iN(2350,"po-multiselect"),sg(),iN(2351," ser\xE1 escondido."),sg()()(),Tl(2352,"tr",13)(2353,"td",14)(2354,"div",15)(2355,"span",16),iN(2356," hideSelectButton"),Gl(2357,"br"),sg()()(),Tl(2358,"td",17)(2359,"code",28),iN(2360,"boolean"),sg()(),Tl(2361,"td",20)(2362,"em")(2363,"strong"),iN(2364,"(opcional)"),sg()(),Tl(2365,"p"),iN(2366,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),sg(),Tl(2367,"blockquote")(2368,"p"),iN(2369,"Caso o valor definido seja "),Tl(2370,"code"),iN(2371,"true"),sg(),iN(2372,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(2373,"code"),iN(2374,"selectFiles()"),sg(),iN(2375," para sele\xE7\xE3o de arquivos."),sg()(),Tl(2376,"p")(2377,"strong"),iN(2378,"Componente compat\xEDvel"),sg(),iN(2379,": "),Tl(2380,"code"),iN(2381,"po-upload"),sg()()()(),Tl(2382,"tr",13)(2383,"td",14)(2384,"div",15)(2385,"span",16),iN(2386," hideSendButton"),Gl(2387,"br"),sg()()(),Tl(2388,"td",17)(2389,"code",28),iN(2390,"boolean"),sg()(),Tl(2391,"td",20)(2392,"em")(2393,"strong"),iN(2394,"(opcional)"),sg()(),Tl(2395,"p"),iN(2396,"Omite o bot\xE3o de envio de arquivos."),sg(),Tl(2397,"blockquote")(2398,"p"),iN(2399,"Caso o valor definido seja "),Tl(2400,"code"),iN(2401,"true"),sg(),iN(2402,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Tl(2403,"code"),iN(2404,"sendFiles()"),sg(),iN(2405," para envio do(s) arquivo(s) selecionado(s)."),sg()(),Tl(2406,"p")(2407,"strong"),iN(2408,"Componente compat\xEDvel"),sg(),iN(2409,": "),Tl(2410,"code"),iN(2411,"po-upload"),sg()()()(),Tl(2412,"tr",13)(2413,"td",14)(2414,"div",15)(2415,"span",16),iN(2416," icon"),Gl(2417,"br"),sg()()(),Tl(2418,"td",17)(2419,"code",18),iN(2420,"string "),sg(),Tl(2421,"code",54),iN(2422," TemplateRef<void>"),sg()(),Tl(2423,"td",20)(2424,"em")(2425,"strong"),iN(2426,"(opcional)"),sg()(),Tl(2427,"p"),iN(2428,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Tl(2429,"blockquote")(2430,"p"),iN(2431,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),sg()(),Tl(2432,"ul")(2433,"li"),iN(2434,"Input;"),sg(),Tl(2435,"li"),iN(2436,"Number;"),sg(),Tl(2437,"li"),iN(2438,"Decimal;"),sg(),Tl(2439,"li"),iN(2440,"Combo;"),sg(),Tl(2441,"li"),iN(2442,"Password;"),sg()(),Tl(2443,"blockquote")(2444,"p"),iN(2445,"Veja a disponibilidade de \xEDcones em "),Tl(2446,"a",55),iN(2447,"biblioteca de \xEDcones"),sg(),iN(2448,"."),sg()()()(),Tl(2449,"tr",13)(2450,"td",14)(2451,"div",15)(2452,"span",16),iN(2453," infiniteScroll"),Gl(2454,"br"),sg()()(),Tl(2455,"td",17)(2456,"code",28),iN(2457,"boolean"),sg()(),Tl(2458,"td",20)(2459,"em")(2460,"strong"),iN(2461,"(opcional)"),sg()(),Tl(2462,"p"),iN(2463,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),sg(),Tl(2464,"p")(2465,"strong"),iN(2466,"Componentes compat\xEDveis:"),sg(),Tl(2467,"code"),iN(2468,"po-combo"),sg(),iN(2469,", "),Tl(2470,"code"),iN(2471,"po-lookup"),sg(),iN(2472,"."),sg()()(),Tl(2473,"tr",13)(2474,"td",14)(2475,"div",15)(2476,"span",16),iN(2477," infiniteScrollDistance"),Gl(2478,"br"),sg()()(),Tl(2479,"td",17)(2480,"code",41),iN(2481,"number"),sg()(),Tl(2482,"td",20)(2483,"em")(2484,"strong"),iN(2485,"(opcional)"),sg()(),Tl(2486,"p"),iN(2487,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),Tl(2488,"strong"),iN(2489,"Exemplos"),sg(),Tl(2490,"code"),iN(2491,"{ infiniteScrollDistance: 80 }"),sg(),iN(2492,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),sg(),Tl(2493,"p")(2494,"strong"),iN(2495,"Componente compat\xEDvel:"),sg(),Tl(2496,"code"),iN(2497,"po-combo"),sg(),iN(2498,"."),sg()()(),Tl(2499,"tr",13)(2500,"td",14)(2501,"div",15)(2502,"span",16),iN(2503," invalidValue"),Gl(2504,"br"),sg()()(),Tl(2505,"td",17)(2506,"code",28),iN(2507,"boolean"),sg()(),Tl(2508,"td",20)(2509,"em")(2510,"strong"),iN(2511,"(opcional)"),sg()(),Tl(2512,"p"),iN(2513,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),Tl(2514,"code"),iN(2515,"p-field-error-message"),sg(),iN(2516,"."),sg(),Tl(2517,"blockquote")(2518,"p"),iN(2519,"Caso essa propriedade seja definida como "),Tl(2520,"code"),iN(2521,"true"),sg(),iN(2522,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),sg()(),Tl(2523,"p")(2524,"strong"),iN(2525,"Componente compat\xEDvel"),sg(),iN(2526,": "),Tl(2527,"code"),iN(2528,"po-switch"),sg()()()(),Tl(2529,"tr",13)(2530,"td",14)(2531,"div",15)(2532,"span",16),iN(2533," isoFormat"),Gl(2534,"br"),sg()()(),Tl(2535,"td",17)(2536,"code",56),iN(2537,"PoDatepickerIsoFormat"),sg()(),Tl(2538,"td",20)(2539,"em")(2540,"strong"),iN(2541,"(opcional)"),sg()(),Tl(2542,"p"),iN(2543,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),sg(),Tl(2544,"blockquote")(2545,"p"),iN(2546,"Veja os valores v\xE1lidos no "),Tl(2547,"code"),iN(2548,"PoDatepickerIsoFormat"),sg(),iN(2549,"."),sg()(),Tl(2550,"p")(2551,"strong"),iN(2552,"Componente compat\xEDvel:"),sg(),Tl(2553,"code"),iN(2554,"po-datepicker"),sg()()()(),Tl(2555,"tr",13)(2556,"td",14)(2557,"div",15)(2558,"span",16),iN(2559," key"),Gl(2560,"br"),sg()()(),Tl(2561,"td",17)(2562,"code",28),iN(2563,"boolean"),sg()(),Tl(2564,"td",20)(2565,"em")(2566,"strong"),iN(2567,"(opcional)"),sg()(),Tl(2568,"p"),iN(2569,"Identificador"),sg()()(),Tl(2570,"tr",13)(2571,"td",14)(2572,"div",15)(2573,"span",16),iN(2574," keydown"),Gl(2575,"br"),sg()()(),Tl(2576,"td",17)(2577,"code",29),iN(2578,"Function"),sg()(),Tl(2579,"td",20)(2580,"em")(2581,"strong"),iN(2582,"(opcional)"),sg()(),Tl(2583,"p"),iN(2584,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(2585,"code"),iN(2586,"KeyboardEvent"),sg(),iN(2587," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(2588,"tr",13)(2589,"td",14)(2590,"div",15)(2591,"span",16),iN(2592," label"),Gl(2593,"br"),sg()()(),Tl(2594,"td",17)(2595,"code",18),iN(2596,"string"),sg()(),Tl(2597,"td",20)(2598,"em")(2599,"strong"),iN(2600,"(opcional)"),sg()(),Tl(2601,"p"),iN(2602,"R\xF3tulo do campo exibido."),sg(),Tl(2603,"p"),iN(2604,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),Tl(2605,"code"),iN(2606,"label"),sg(),iN(2607," o valor da propriedade "),Tl(2608,"code"),iN(2609,"property"),sg(),iN(2610," com a primeira letra em mai\xFAsculo."),sg()()(),Tl(2611,"tr",13)(2612,"td",14)(2613,"div",15)(2614,"span",16),iN(2615," labelPosition"),Gl(2616,"br"),sg()()(),Tl(2617,"td",17)(2618,"code",57),iN(2619,"PoSwitchLabelPosition"),sg()(),Tl(2620,"td",20)(2621,"em")(2622,"strong"),iN(2623,"(opcional)"),sg()(),Tl(2624,"p"),iN(2625,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),sg(),Tl(2626,"blockquote")(2627,"p"),iN(2628,"Por padr\xE3o exibe \xE0 direita."),sg()()()(),Tl(2629,"tr",13)(2630,"td",14)(2631,"div",15)(2632,"span",16),iN(2633," listboxControlPosition"),Gl(2634,"br"),sg()()(),Tl(2635,"td",17)(2636,"code",58),iN(2637,"'top' "),sg(),Tl(2638,"code",59),iN(2639," 'bottom'"),sg()(),Tl(2640,"td",20)(2641,"em")(2642,"strong"),iN(2643,"(opcional)"),sg()(),Tl(2644,"p"),iN(2645,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),Tl(2646,"code"),iN(2647,"listbox"),sg(),iN(2648," em rela\xE7\xE3o ao campo ("),Tl(2649,"code"),iN(2650,"top"),sg(),iN(2651," ou "),Tl(2652,"code"),iN(2653,"bottom"),sg(),iN(2654,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),sg(),Tl(2655,"p")(2656,"strong"),iN(2657,"Componentes compat\xEDveis:"),sg(),Tl(2658,"code"),iN(2659,"po-multiselect"),sg(),iN(2660,", "),Tl(2661,"code"),iN(2662,"po-combo"),sg(),iN(2663,"."),sg()()(),Tl(2664,"tr",13)(2665,"td",14)(2666,"div",15)(2667,"span",16),iN(2668," literals"),Gl(2669,"br"),sg()()(),Tl(2670,"td",17)(2671,"code",60),iN(2672,"PoLookupLiterals "),sg(),Tl(2673,"code",61),iN(2674," PoMultiselectLiterals "),sg(),Tl(2675,"code",62),iN(2676," PoComboLiterals "),sg(),Tl(2677,"code",63),iN(2678," PoDatepickerRangeLiterals "),sg(),Tl(2679,"code",64),iN(2680," PoUploadLiterals"),sg()(),Tl(2681,"td",20)(2682,"em")(2683,"strong"),iN(2684,"(opcional)"),sg()(),Tl(2685,"p"),iN(2686,"Objeto com as literais usadas para os seguintes componentes: "),Tl(2687,"code"),iN(2688,"po-lookup"),sg(),iN(2689,", "),Tl(2690,"code"),iN(2691,"po-multiselect"),sg(),iN(2692,", "),Tl(2693,"code"),iN(2694,"po-combo"),sg(),iN(2695," e "),Tl(2696,"code"),iN(2697,"po-datepicker-range"),sg(),iN(2698,"."),sg(),Tl(2699,"blockquote")(2700,"p"),iN(2701,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),sg()(),Tl(2702,"p")(2703,"strong"),iN(2704,"Componentes compat\xEDveis:"),sg(),Tl(2705,"code"),iN(2706,"po-lookup"),sg(),iN(2707,", "),Tl(2708,"code"),iN(2709,"po-multiselect"),sg(),iN(2710,", "),Tl(2711,"code"),iN(2712,"po-combo"),sg(),iN(2713,", "),Tl(2714,"code"),iN(2715,"po-datepicker-range"),sg()()()(),Tl(2716,"tr",13)(2717,"td",14)(2718,"div",15)(2719,"span",16),iN(2720," loading"),Gl(2721,"br"),sg()()(),Tl(2722,"td",17)(2723,"code",28),iN(2724,"boolean"),sg()(),Tl(2725,"td",20)(2726,"em")(2727,"strong"),iN(2728,"(opcional)"),sg()(),Tl(2729,"p"),iN(2730,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),sg(),Tl(2731,"blockquote")(2732,"p"),iN(2733,"Por padr\xE3o \xE9 "),Tl(2734,"code"),iN(2735,"false"),sg(),iN(2736,"."),sg()(),Tl(2737,"p")(2738,"strong"),iN(2739,"Componentes compat\xEDveis:"),sg(),Tl(2740,"code"),iN(2741,"po-datepicker"),sg(),iN(2742,", "),Tl(2743,"code"),iN(2744,"po-datepicker-range"),sg(),iN(2745,", "),Tl(2746,"code"),iN(2747,"po-number"),sg(),iN(2748,", "),Tl(2749,"code"),iN(2750,"po-decimal"),sg(),iN(2751,`,
`),Tl(2752,"code"),iN(2753,"po-input"),sg(),iN(2754,", "),Tl(2755,"code"),iN(2756,"po-select"),sg(),iN(2757,", "),Tl(2758,"code"),iN(2759,"po-switch"),sg(),iN(2760,", "),Tl(2761,"code"),iN(2762,"po-combo"),sg(),iN(2763,", "),Tl(2764,"code"),iN(2765,"po-lookup"),sg(),iN(2766,", "),Tl(2767,"code"),iN(2768,"po-multiselect"),sg(),iN(2769,`,
`),Tl(2770,"code"),iN(2771,"po-textarea"),sg(),iN(2772,", "),Tl(2773,"code"),iN(2774,"po-password"),sg(),iN(2775,", "),Tl(2776,"code"),iN(2777,"po-upload"),sg(),iN(2778,"."),sg()()(),Tl(2779,"tr",13)(2780,"td",14)(2781,"div",15)(2782,"span",16),iN(2783," locale"),Gl(2784,"br"),sg()()(),Tl(2785,"td",17)(2786,"code",18),iN(2787,"string"),sg()(),Tl(2788,"td",20)(2789,"em")(2790,"strong"),iN(2791,"(opcional)"),sg()(),Tl(2792,"p"),iN(2793,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),Tl(2794,"a",65)(2795,"code"),iN(2796,"I18n"),sg()()(),Tl(2797,"p"),iN(2798,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(2799,"pre")(2800,"code"),iN(2801,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),sg()(),Tl(2802,"blockquote")(2803,"p"),iN(2804,"Para ver quais linguagens suportadas acesse "),Tl(2805,"a",65)(2806,"code"),iN(2807,"I18n"),sg()()()(),Tl(2808,"p")(2809,"strong"),iN(2810,"Componentes compat\xEDveis:"),sg(),Tl(2811,"code"),iN(2812,"po-datepicker"),sg(),iN(2813,", "),Tl(2814,"code"),iN(2815,"po-decimal"),sg(),iN(2816,", "),Tl(2817,"code"),iN(2818,"po-timepicker"),sg(),iN(2819,"."),sg()()(),Tl(2820,"tr",13)(2821,"td",14)(2822,"div",15)(2823,"span",16),iN(2824," mask"),Gl(2825,"br"),sg()()(),Tl(2826,"td",17)(2827,"code",18),iN(2828,"string"),sg()(),Tl(2829,"td",20)(2830,"em")(2831,"strong"),iN(2832,"(opcional)"),sg()(),Tl(2833,"p"),iN(2834,"M\xE1scara para o campo."),sg(),Tl(2835,"p")(2836,"strong"),iN(2837,"Componente compat\xEDvel:"),sg(),Tl(2838,"code"),iN(2839,"po-input"),sg(),iN(2840,"."),sg(),Tl(2841,"blockquote")(2842,"p"),iN(2843,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Tl(2844,"code"),iN(2845,"type: time"),sg(),iN(2846,"."),sg()()()(),Tl(2847,"tr",13)(2848,"td",14)(2849,"div",15)(2850,"span",16),iN(2851," maskFormatModel"),Gl(2852,"br"),sg()()(),Tl(2853,"td",17)(2854,"code",28),iN(2855,"boolean"),sg()(),Tl(2856,"td",20)(2857,"em")(2858,"strong"),iN(2859,"(opcional)"),sg()(),Tl(2860,"p"),iN(2861,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),Tl(2862,"code"),iN(2863,"false"),sg(),iN(2864,"."),sg(),Tl(2865,"p")(2866,"strong"),iN(2867,"Componente compat\xEDvel:"),sg(),Tl(2868,"code"),iN(2869,"po-input"),sg(),iN(2870,"."),sg(),Tl(2871,"blockquote")(2872,"p"),iN(2873,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),Tl(2874,"code"),iN(2875,"type: time"),sg(),iN(2876,"."),sg()()()(),Tl(2877,"tr",13)(2878,"td",14)(2879,"div",15)(2880,"span",16),iN(2881," maskNoLengthValidation"),Gl(2882,"br"),sg()()(),Tl(2883,"td",17)(2884,"code",28),iN(2885,"boolean"),sg()(),Tl(2886,"td",20)(2887,"em")(2888,"strong"),iN(2889,"(opcional)"),sg()(),Tl(2890,"p"),iN(2891,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Tl(2892,"code"),iN(2893,"minLength"),sg(),iN(2894,") e m\xE1ximo ("),Tl(2895,"code"),iN(2896,"maxLength"),sg(),iN(2897,") quando h\xE1 uma m\xE1scara ("),Tl(2898,"code"),iN(2899,"p-mask"),sg(),iN(2900,") definida."),sg(),Tl(2901,"ul")(2902,"li"),iN(2903,"Quando "),Tl(2904,"code"),iN(2905,"true"),sg(),iN(2906,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Tl(2907,"li"),iN(2908,"Quando "),Tl(2909,"code"),iN(2910,"false"),sg(),iN(2911,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Tl(2912,"p")(2913,"strong"),iN(2914,"Componentes compat\xEDveis:"),sg(),Tl(2915,"code"),iN(2916,"po-input"),sg(),iN(2917,", "),Tl(2918,"code"),iN(2919,"po-decimal"),sg(),iN(2920,"."),sg(),Tl(2921,"blockquote")(2922,"p"),iN(2923,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Tl(2924,"code"),iN(2925,"p-mask-format-model"),sg(),iN(2926,"."),sg()(),Tl(2927,"p"),iN(2928,"Exemplo:"),sg(),Tl(2929,"pre")(2930,"code"),iN(2931,`fields:Array<PoDynamicFormField> = [
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
`),sg()(),Tl(2932,"ul")(2933,"li"),iN(2934,"Entrada: "),Tl(2935,"code"),iN(2936,"11.111.111/1111-11"),sg(),iN(2937," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),sg()()()(),Tl(2938,"tr",13)(2939,"td",14)(2940,"div",15)(2941,"span",16),iN(2942," maxLength"),Gl(2943,"br"),sg()()(),Tl(2944,"td",17)(2945,"code",41),iN(2946,"number"),sg()(),Tl(2947,"td",20)(2948,"em")(2949,"strong"),iN(2950,"(opcional)"),sg()(),Tl(2951,"p"),iN(2952,"Tamanho m\xE1ximo de caracteres."),sg(),Tl(2953,"p")(2954,"strong"),iN(2955,"Componentes compat\xEDveis:"),sg(),Tl(2956,"code"),iN(2957,"po-input"),sg(),iN(2958,", "),Tl(2959,"code"),iN(2960,"po-number"),sg(),iN(2961,", "),Tl(2962,"code"),iN(2963,"po-decimal"),sg(),iN(2964,", "),Tl(2965,"code"),iN(2966,"po-textarea"),sg(),iN(2967,", "),Tl(2968,"code"),iN(2969,"po-password"),sg(),iN(2970,"."),sg()()(),Tl(2971,"tr",13)(2972,"td",14)(2973,"div",15)(2974,"span",16),iN(2975," maxTime"),Gl(2976,"br"),sg()()(),Tl(2977,"td",17)(2978,"code",18),iN(2979,"string"),sg()(),Tl(2980,"td",20)(2981,"em")(2982,"strong"),iN(2983,"(opcional)"),sg()(),Tl(2984,"p"),iN(2985,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Formato: `),Tl(2986,"code"),iN(2987,"HH:mm"),sg(),iN(2988," ou "),Tl(2989,"code"),iN(2990,"HH:mm:ss"),sg(),iN(2991,"."),sg(),Tl(2992,"p")(2993,"strong"),iN(2994,"Componente compat\xEDvel:"),sg(),Tl(2995,"code"),iN(2996,"po-datetimepicker"),sg(),iN(2997,", "),Tl(2998,"code"),iN(2999,"po-timepicker"),sg()()()(),Tl(3e3,"tr",13)(3001,"td",14)(3002,"div",15)(3003,"span",16),iN(3004," maxValue"),Gl(3005,"br"),sg()()(),Tl(3006,"td",17)(3007,"code",18),iN(3008,"string "),sg(),Tl(3009,"code",41),iN(3010," number"),sg()(),Tl(3011,"td",20)(3012,"em")(3013,"strong"),iN(3014,"(opcional)"),sg()(),Tl(3015,"p"),iN(3016,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Tl(3017,"em"),iN(3018,"number"),sg(),iN(3019,", "),Tl(3020,"em"),iN(3021,"date"),sg(),iN(3022,", "),Tl(3023,"em"),iN(3024,"dateTime"),sg(),iN(3025," ou "),Tl(3026,"em"),iN(3027,"time"),sg(),iN(3028,"."),sg(),Tl(3029,"blockquote")(3030,"p"),iN(3031,"Para "),Tl(3032,"code"),iN(3033,"po-timepicker"),sg(),iN(3034,", o valor deve estar no formato "),Tl(3035,"code"),iN(3036,"HH:mm"),sg(),iN(3037," ou "),Tl(3038,"code"),iN(3039,"HH:mm:ss"),sg(),iN(3040,"."),sg()(),Tl(3041,"p")(3042,"strong"),iN(3043,"Componentes compat\xEDveis:"),sg(),Tl(3044,"code"),iN(3045,"po-datepicker"),sg(),iN(3046,", "),Tl(3047,"code"),iN(3048,"po-datepicker-range"),sg(),iN(3049,", "),Tl(3050,"code"),iN(3051,"po-number"),sg(),iN(3052,", "),Tl(3053,"code"),iN(3054,"po-decimal"),sg(),iN(3055,", "),Tl(3056,"code"),iN(3057,"po-timepicker"),sg()()()(),Tl(3058,"tr",13)(3059,"td",14)(3060,"div",15)(3061,"span",16),iN(3062," minLength"),Gl(3063,"br"),sg()()(),Tl(3064,"td",17)(3065,"code",41),iN(3066,"number"),sg()(),Tl(3067,"td",20)(3068,"em")(3069,"strong"),iN(3070,"(opcional)"),sg()(),Tl(3071,"p"),iN(3072,"Tamanho m\xEDnimo de caracteres."),sg(),Tl(3073,"p")(3074,"strong"),iN(3075,"Componentes compat\xEDveis:"),sg(),Tl(3076,"code"),iN(3077,"po-input"),sg(),iN(3078,", "),Tl(3079,"code"),iN(3080,"po-number"),sg(),iN(3081,", "),Tl(3082,"code"),iN(3083,"po-decimal"),sg(),iN(3084,", "),Tl(3085,"code"),iN(3086,"po-textarea"),sg(),iN(3087,", "),Tl(3088,"code"),iN(3089,"po-password"),sg(),iN(3090,"."),sg()()(),Tl(3091,"tr",13)(3092,"td",14)(3093,"div",15)(3094,"span",16),iN(3095," minTime"),Gl(3096,"br"),sg()()(),Tl(3097,"td",17)(3098,"code",18),iN(3099,"string"),sg()(),Tl(3100,"td",20)(3101,"em")(3102,"strong"),iN(3103,"(opcional)"),sg()(),Tl(3104,"p"),iN(3105,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Formato: `),Tl(3106,"code"),iN(3107,"HH:mm"),sg(),iN(3108," ou "),Tl(3109,"code"),iN(3110,"HH:mm:ss"),sg(),iN(3111,"."),sg(),Tl(3112,"p")(3113,"strong"),iN(3114,"Componente compat\xEDvel:"),sg(),Tl(3115,"code"),iN(3116,"po-datetimepicker"),sg(),iN(3117,", "),Tl(3118,"code"),iN(3119,"po-timepicker"),sg()()()(),Tl(3120,"tr",13)(3121,"td",14)(3122,"div",15)(3123,"span",16),iN(3124," minValue"),Gl(3125,"br"),sg()()(),Tl(3126,"td",17)(3127,"code",18),iN(3128,"string "),sg(),Tl(3129,"code",41),iN(3130," number"),sg()(),Tl(3131,"td",20)(3132,"em")(3133,"strong"),iN(3134,"(opcional)"),sg()(),Tl(3135,"p"),iN(3136,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),Tl(3137,"em"),iN(3138,"number"),sg(),iN(3139,", "),Tl(3140,"em"),iN(3141,"date"),sg(),iN(3142,", "),Tl(3143,"em"),iN(3144,"dateTime"),sg(),iN(3145," ou "),Tl(3146,"em"),iN(3147,"time"),sg(),iN(3148,"."),sg(),Tl(3149,"blockquote")(3150,"p"),iN(3151,"Para "),Tl(3152,"code"),iN(3153,"po-timepicker"),sg(),iN(3154,", o valor deve estar no formato "),Tl(3155,"code"),iN(3156,"HH:mm"),sg(),iN(3157," ou "),Tl(3158,"code"),iN(3159,"HH:mm:ss"),sg(),iN(3160,"."),sg()(),Tl(3161,"p")(3162,"strong"),iN(3163,"Componentes compat\xEDveis:"),sg(),Tl(3164,"code"),iN(3165,"po-datepicker"),sg(),iN(3166,", "),Tl(3167,"code"),iN(3168,"po-datepicker-range"),sg(),iN(3169,", "),Tl(3170,"code"),iN(3171,"po-number"),sg(),iN(3172,", "),Tl(3173,"code"),iN(3174,"po-decimal"),sg(),iN(3175,", "),Tl(3176,"code"),iN(3177,"po-timepicker"),sg()()()(),Tl(3178,"tr",13)(3179,"td",14)(3180,"div",15)(3181,"span",16),iN(3182," minuteInterval"),Gl(3183,"br"),sg()()(),Tl(3184,"td",17)(3185,"code",41),iN(3186,"number"),sg()(),Tl(3187,"td",20)(3188,"em")(3189,"strong"),iN(3190,"(opcional)"),sg()(),Tl(3191,"p"),iN(3192,"Define o intervalo entre os minutos exibidos no painel do timepicker."),sg()()(),Tl(3193,"tr",13)(3194,"td",14)(3195,"div",15)(3196,"span",16),iN(3197," mode"),Gl(3198,"br"),sg()()(),Tl(3199,"td",17)(3200,"code",66),iN(3201,"'month-year' "),sg(),Tl(3202,"code",67),iN(3203," 'year'"),sg()(),Tl(3204,"td",20)(3205,"em")(3206,"strong"),iN(3207,"(opcional)"),sg()(),Tl(3208,"p"),iN(3209,"Define o modo de sele\xE7\xE3o do "),Tl(3210,"code"),iN(3211,"po-datepicker"),sg(),iN(3212,"."),sg(),Tl(3213,"p"),iN(3214,"Valores aceitos:"),sg(),Tl(3215,"ul")(3216,"li")(3217,"code"),iN(3218,"'month-year'"),sg(),iN(3219,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),Tl(3220,"code"),iN(3221,"MM/YYYY"),sg(),iN(3222,")"),sg(),Tl(3223,"li")(3224,"code"),iN(3225,"'year'"),sg(),iN(3226,": exibe sele\xE7\xE3o apenas de ano (formato "),Tl(3227,"code"),iN(3228,"YYYY"),sg(),iN(3229,")"),sg()(),Tl(3230,"p")(3231,"strong"),iN(3232,"Componente compat\xEDvel:"),sg(),Tl(3233,"code"),iN(3234,"po-datepicker"),sg()()()(),Tl(3235,"tr",13)(3236,"td",14)(3237,"div",15)(3238,"span",16),iN(3239," modelFormat"),Gl(3240,"br"),sg()()(),Tl(3241,"td",17)(3242,"code",68),iN(3243,"PoTimepickerModelFormat"),sg()(),Tl(3244,"td",20)(3245,"em")(3246,"strong"),iN(3247,"(opcional)"),sg()(),Tl(3248,"p"),iN(3249,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),Tl(3250,"code"),iN(3251,"po-timepicker"),sg(),iN(3252,"."),sg(),Tl(3253,"blockquote")(3254,"p"),iN(3255,"Veja os valores v\xE1lidos no "),Tl(3256,"code"),iN(3257,"PoTimepickerModelFormat"),sg(),iN(3258,"."),sg()(),Tl(3259,"p")(3260,"strong"),iN(3261,"Componente compat\xEDvel:"),sg(),Tl(3262,"code"),iN(3263,"po-timepicker"),sg()()()(),Tl(3264,"tr",13)(3265,"td",14)(3266,"div",15)(3267,"span",16),iN(3268," multiple"),Gl(3269,"br"),sg()()(),Tl(3270,"td",17)(3271,"code",28),iN(3272,"boolean"),sg()(),Tl(3273,"td",20)(3274,"em")(3275,"strong"),iN(3276,"(opcional)"),sg()(),Tl(3277,"p"),iN(3278,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),sg(),Tl(3279,"p")(3280,"strong"),iN(3281,"Componentes compat\xEDveis:"),sg(),Tl(3282,"code"),iN(3283,"po-lookup"),sg(),iN(3284,", "),Tl(3285,"code"),iN(3286,"po-upload"),sg()()()(),Tl(3287,"tr",13)(3288,"td",14)(3289,"div",15)(3290,"span",16),iN(3291," noAutocomplete"),Gl(3292,"br"),sg()()(),Tl(3293,"td",17)(3294,"code",28),iN(3295,"boolean"),sg()(),Tl(3296,"td",20)(3297,"em")(3298,"strong"),iN(3299,"(opcional)"),sg()(),Tl(3300,"p"),iN(3301,"Define a propriedade nativa "),Tl(3302,"code"),iN(3303,"autocomplete"),sg(),iN(3304," do campo como off."),sg(),Tl(3305,"p")(3306,"strong"),iN(3307,"Componentes compat\xEDveis:"),sg(),Tl(3308,"code"),iN(3309,"po-datepicker"),sg(),iN(3310,", "),Tl(3311,"code"),iN(3312,"po-datepicker-range"),sg(),iN(3313,", "),Tl(3314,"code"),iN(3315,"po-input"),sg(),iN(3316,", "),Tl(3317,"code"),iN(3318,"po-number"),sg(),iN(3319,", "),Tl(3320,"code"),iN(3321,"po-decimal"),sg(),iN(3322,`,
`),Tl(3323,"code"),iN(3324,"po-lookup"),sg(),iN(3325,", "),Tl(3326,"code"),iN(3327,"po-password"),sg(),iN(3328,", "),Tl(3329,"code"),iN(3330,"po-timepicker"),sg(),iN(3331,"."),sg()()(),Tl(3332,"tr",13)(3333,"td",14)(3334,"div",15)(3335,"span",16),iN(3336," offsetColumns"),Gl(3337,"br"),sg()()(),Tl(3338,"td",17)(3339,"code",41),iN(3340,"number"),sg()(),Tl(3341,"td",20)(3342,"em")(3343,"strong"),iN(3344,"(opcional)"),sg()(),Tl(3345,"p"),iN(3346,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),sg(),Tl(3347,"p"),iN(3348,"Deve ser usado o sistema de "),Tl(3349,"strong"),iN(3350,"grid"),sg(),iN(3351," do PO (1 ... 12 colunas)."),sg(),Tl(3352,"blockquote")(3353,"p"),iN(3354,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),sg()()()(),Tl(3355,"tr",13)(3356,"td",14)(3357,"div",15)(3358,"span",16),iN(3359," offsetLgColumns"),Gl(3360,"br"),sg()()(),Tl(3361,"td",17)(3362,"code",41),iN(3363,"number"),sg()(),Tl(3364,"td",20)(3365,"em")(3366,"strong"),iN(3367,"(opcional)"),sg()(),Tl(3368,"p"),iN(3369,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),sg(),Tl(3370,"p"),iN(3371,"Deve ser usado o sistema de "),Tl(3372,"strong"),iN(3373,"grid"),sg(),iN(3374," do PO (1 ... 12 colunas)."),sg(),Tl(3375,"blockquote")(3376,"p"),iN(3377,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(3378,"code"),iN(3379,"offsetColumns"),sg(),iN(3380,"."),sg()()()(),Tl(3381,"tr",13)(3382,"td",14)(3383,"div",15)(3384,"span",16),iN(3385," offsetMdColumns"),Gl(3386,"br"),sg()()(),Tl(3387,"td",17)(3388,"code",41),iN(3389,"number"),sg()(),Tl(3390,"td",20)(3391,"em")(3392,"strong"),iN(3393,"(opcional)"),sg()(),Tl(3394,"p"),iN(3395,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),sg(),Tl(3396,"p"),iN(3397,"Deve ser usado o sistema de "),Tl(3398,"strong"),iN(3399,"grid"),sg(),iN(3400," do PO (1 ... 12 colunas)."),sg(),Tl(3401,"blockquote")(3402,"p"),iN(3403,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(3404,"code"),iN(3405,"offsetColumns"),sg(),iN(3406,"."),sg()()()(),Tl(3407,"tr",13)(3408,"td",14)(3409,"div",15)(3410,"span",16),iN(3411," offsetSmColumns"),Gl(3412,"br"),sg()()(),Tl(3413,"td",17)(3414,"code",41),iN(3415,"number"),sg()(),Tl(3416,"td",20)(3417,"em")(3418,"strong"),iN(3419,"(opcional)"),sg()(),Tl(3420,"p"),iN(3421,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),sg(),Tl(3422,"p"),iN(3423,"Deve ser usado o sistema de "),Tl(3424,"strong"),iN(3425,"grid"),sg(),iN(3426," do PO (1 ... 12 colunas)."),sg(),Tl(3427,"blockquote")(3428,"p"),iN(3429,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(3430,"code"),iN(3431,"offsetColumns"),sg(),iN(3432,"."),sg()()()(),Tl(3433,"tr",13)(3434,"td",14)(3435,"div",15)(3436,"span",16),iN(3437," offsetXlColumns"),Gl(3438,"br"),sg()()(),Tl(3439,"td",17)(3440,"code",41),iN(3441,"number"),sg()(),Tl(3442,"td",20)(3443,"em")(3444,"strong"),iN(3445,"(opcional)"),sg()(),Tl(3446,"p"),iN(3447,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),sg(),Tl(3448,"p"),iN(3449,"Deve ser usado o sistema de "),Tl(3450,"strong"),iN(3451,"grid"),sg(),iN(3452," do PO (1 ... 12 colunas)."),sg(),Tl(3453,"blockquote")(3454,"p"),iN(3455,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),Tl(3456,"code"),iN(3457,"offsetColumns"),sg(),iN(3458,"."),sg()()()(),Tl(3459,"tr",13)(3460,"td",14)(3461,"div",15)(3462,"span",16),iN(3463," onError"),Gl(3464,"br"),sg()()(),Tl(3465,"td",17)(3466,"code",29),iN(3467,"Function"),sg()(),Tl(3468,"td",20)(3469,"em")(3470,"strong"),iN(3471,"(opcional)"),sg()(),Tl(3472,"p"),iN(3473,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),sg(),Tl(3474,"blockquote")(3475,"p"),iN(3476,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Tl(3477,"code"),iN(3478,"HttpErrorResponse"),sg(),iN(3479,"."),sg()(),Tl(3480,"p")(3481,"strong"),iN(3482,"Componente compat\xEDvel"),sg(),iN(3483,": "),Tl(3484,"code"),iN(3485,"po-upload"),sg()()()(),Tl(3486,"tr",13)(3487,"td",14)(3488,"div",15)(3489,"span",16),iN(3490," onSuccess"),Gl(3491,"br"),sg()()(),Tl(3492,"td",17)(3493,"code",29),iN(3494,"Function"),sg()(),Tl(3495,"td",20)(3496,"em")(3497,"strong"),iN(3498,"(opcional)"),sg()(),Tl(3499,"p"),iN(3500,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),sg(),Tl(3501,"blockquote")(3502,"p"),iN(3503,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),Tl(3504,"code"),iN(3505,"HttpResponse"),sg(),iN(3506,"."),sg()(),Tl(3507,"p")(3508,"strong"),iN(3509,"Componente compat\xEDvel"),sg(),iN(3510,": "),Tl(3511,"code"),iN(3512,"po-upload"),sg()()()(),Tl(3513,"tr",13)(3514,"td",14)(3515,"div",15)(3516,"span",16),iN(3517," onUpload"),Gl(3518,"br"),sg()()(),Tl(3519,"td",17)(3520,"code",29),iN(3521,"Function"),sg()(),Tl(3522,"td",20)(3523,"em")(3524,"strong"),iN(3525,"(opcional)"),sg()(),Tl(3526,"p"),iN(3527,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),sg(),Tl(3528,"pre")(3529,"code"),iN(3530,`event.data = {id: 'id do usu\xE1rio'};
`),sg()(),Tl(3531,"p")(3532,"strong"),iN(3533,"Componente compat\xEDvel"),sg(),iN(3534,": "),Tl(3535,"code"),iN(3536,"po-upload"),sg()()()(),Tl(3537,"tr",13)(3538,"td",14)(3539,"div",15)(3540,"span",16),iN(3541," optional"),Gl(3542,"br"),sg()()(),Tl(3543,"td",17)(3544,"code",28),iN(3545,"boolean"),sg()(),Tl(3546,"td",20)(3547,"em")(3548,"strong"),iN(3549,"(opcional)"),sg()(),Tl(3550,"p"),iN(3551,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(3552,"blockquote")(3553,"p"),iN(3554,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),sg()(),Tl(3555,"ul")(3556,"li"),iN(3557,"O campo for "),Tl(3558,"code"),iN(3559,"required"),sg(),iN(3560,", ou;"),sg(),Tl(3561,"li"),iN(3562,"N\xE3o possuir "),Tl(3563,"code"),iN(3564,"help"),sg(),iN(3565," e "),Tl(3566,"code"),iN(3567,"label"),sg(),iN(3568,"."),sg()(),Tl(3569,"p")(3570,"strong"),iN(3571,"Componentes compat\xEDveis:"),sg(),Tl(3572,"code"),iN(3573,"po-datepicker"),sg(),iN(3574,", "),Tl(3575,"code"),iN(3576,"po-datepicker-range"),sg(),iN(3577,", "),Tl(3578,"code"),iN(3579,"po-timepicker"),sg(),iN(3580,", "),Tl(3581,"code"),iN(3582,"po-input"),sg(),iN(3583,", "),Tl(3584,"code"),iN(3585,"po-number"),sg(),iN(3586,`,
`),Tl(3587,"code"),iN(3588,"po-decimal"),sg(),iN(3589,", "),Tl(3590,"code"),iN(3591,"po-select"),sg(),iN(3592,", "),Tl(3593,"code"),iN(3594,"po-radio-group"),sg(),iN(3595,", "),Tl(3596,"code"),iN(3597,"po-combo"),sg(),iN(3598,", "),Tl(3599,"code"),iN(3600,"po-lookup"),sg(),iN(3601,", "),Tl(3602,"code"),iN(3603,"po-checkbox-group"),sg(),iN(3604,", "),Tl(3605,"code"),iN(3606,"po-multiselect"),sg(),iN(3607,`,
`),Tl(3608,"code"),iN(3609,"po-textarea"),sg(),iN(3610,", "),Tl(3611,"code"),iN(3612,"po-password"),sg(),iN(3613,"."),sg()()(),Tl(3614,"tr",13)(3615,"td",14)(3616,"div",15)(3617,"span",16),iN(3618," options"),Gl(3619,"br"),sg()()(),Tl(3620,"td",17)(3621,"code",32),iN(3622,"Array<string> "),sg(),Tl(3623,"code",69),iN(3624," Array<PoSelectOption> "),sg(),Tl(3625,"code",70),iN(3626," Array<PoMultiselectOption> "),sg(),Tl(3627,"code",71),iN(3628," Array<PoCheckboxGroupOption> "),sg(),Tl(3629,"code",72),iN(3630," Array<any>"),sg()(),Tl(3631,"td",20)(3632,"em")(3633,"strong"),iN(3634,"(opcional)"),sg()(),Tl(3635,"p"),iN(3636,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),sg(),Tl(3637,"p")(3638,"strong"),iN(3639,"Componentes compat\xEDveis:"),sg(),Tl(3640,"code"),iN(3641,"po-select"),sg(),iN(3642,", "),Tl(3643,"code"),iN(3644,"po-radio-group"),sg(),iN(3645,", "),Tl(3646,"code"),iN(3647,"po-checkbox-group"),sg(),iN(3648,", "),Tl(3649,"code"),iN(3650,"po-multiselect"),sg(),iN(3651,"."),sg()()(),Tl(3652,"tr",13)(3653,"td",14)(3654,"div",15)(3655,"span",16),iN(3656," optionsMulti"),Gl(3657,"br"),sg()()(),Tl(3658,"td",17)(3659,"code",28),iN(3660,"boolean"),sg()(),Tl(3661,"td",20)(3662,"em")(3663,"strong"),iN(3664,"(opcional)"),sg()(),Tl(3665,"p"),iN(3666,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),sg()()(),Tl(3667,"tr",13)(3668,"td",14)(3669,"div",15)(3670,"span",16),iN(3671," optionsService"),Gl(3672,"br"),sg()()(),Tl(3673,"td",17)(3674,"code",18),iN(3675,"string "),sg(),Tl(3676,"code",73),iN(3677," PoComboFilter "),sg(),Tl(3678,"code",74),iN(3679," PoMultiselectFilter"),sg()(),Tl(3680,"td",20)(3681,"em")(3682,"strong"),iN(3683,"(opcional)"),sg()(),Tl(3684,"p"),iN(3685,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),Tl(3686,"strong"),iN(3687,"Importante"),sg()(),Tl(3688,"blockquote")(3689,"p"),iN(3690,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),Tl(3691,"a",75),iN(3692,"guia de API do PO UI"),sg(),iN(3693,"."),sg()()()(),Tl(3694,"tr",13)(3695,"td",14)(3696,"div",15)(3697,"span",16),iN(3698," order"),Gl(3699,"br"),sg()()(),Tl(3700,"td",17)(3701,"code",41),iN(3702,"number"),sg()(),Tl(3703,"td",20)(3704,"em")(3705,"strong"),iN(3706,"(opcional)"),sg()(),Tl(3707,"p"),iN(3708,"Informa a ordem de exibi\xE7\xE3o do campo."),sg(),Tl(3709,"p"),iN(3710,"Exemplo de utiliza\xE7\xE3o:"),sg(),Tl(3711,"p")(3712,"code"),iN(3713,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),sg()(),Tl(3714,"p"),iN(3715,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),Tl(3716,"code"),iN(3717,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),sg()(),Tl(3718,"p"),iN(3719,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),sg(),Tl(3720,"p"),iN(3721,"Campos sem "),Tl(3722,"code"),iN(3723,"order"),sg(),iN(3724,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),sg()()(),Tl(3725,"tr",13)(3726,"td",14)(3727,"div",15)(3728,"span",16),iN(3729," params"),Gl(3730,"br"),sg()()(),Tl(3731,"td",17)(3732,"code",33),iN(3733,"any"),sg()(),Tl(3734,"td",20)(3735,"em")(3736,"strong"),iN(3737,"(opcional)"),sg()(),Tl(3738,"p"),iN(3739,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),Tl(3740,"code"),iN(3741,"po-lookup"),sg(),iN(3742,` e
`),Tl(3743,"code"),iN(3744,"po-combo"),sg(),iN(3745,"."),sg(),Tl(3746,"p"),iN(3747,"Por exemplo, para o par\xE2metro "),Tl(3748,"code"),iN(3749,"{ age: 23 }"),sg(),iN(3750," a URL da requisi\xE7\xE3o ficaria:"),sg(),Tl(3751,"p")(3752,"code"),iN(3753,"url + ?age=23&filter=Peter"),sg()()()(),Tl(3754,"tr",13)(3755,"td",14)(3756,"div",15)(3757,"span",16),iN(3758," pattern"),Gl(3759,"br"),sg()()(),Tl(3760,"td",17)(3761,"code",18),iN(3762,"string"),sg()(),Tl(3763,"td",20)(3764,"em")(3765,"strong"),iN(3766,"(opcional)"),sg()(),Tl(3767,"p"),iN(3768,"Regex para valida\xE7\xE3o do campo."),sg(),Tl(3769,"p")(3770,"strong"),iN(3771,"Componentes compat\xEDveis:"),sg(),Tl(3772,"code"),iN(3773,"po-input"),sg(),iN(3774,", "),Tl(3775,"code"),iN(3776,"po-password"),sg(),iN(3777,"."),sg()()(),Tl(3778,"tr",13)(3779,"td",14)(3780,"div",15)(3781,"span",16),iN(3782," placeholder"),Gl(3783,"br"),sg()()(),Tl(3784,"td",17)(3785,"code",18),iN(3786,"string"),sg()(),Tl(3787,"td",20)(3788,"em")(3789,"strong"),iN(3790,"(opcional)"),sg()(),Tl(3791,"p"),iN(3792,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),sg(),Tl(3793,"p")(3794,"strong"),iN(3795,"Componentes compat\xEDveis:"),sg(),Tl(3796,"code"),iN(3797,"po-datepicker"),sg(),iN(3798,", "),Tl(3799,"code"),iN(3800,"po-datepicker-range"),sg(),iN(3801,", "),Tl(3802,"code"),iN(3803,"po-timepicker"),sg(),iN(3804,", "),Tl(3805,"code"),iN(3806,"po-input"),sg(),iN(3807,", "),Tl(3808,"code"),iN(3809,"po-number"),sg(),iN(3810,", "),Tl(3811,"code"),iN(3812,"po-decimal"),sg(),iN(3813,", "),Tl(3814,"code"),iN(3815,"po-select"),sg(),iN(3816,", "),Tl(3817,"code"),iN(3818,"po-combo"),sg(),iN(3819,", "),Tl(3820,"code"),iN(3821,"po-lookup"),sg(),iN(3822,", "),Tl(3823,"code"),iN(3824,"po-multiselect"),sg(),iN(3825,", "),Tl(3826,"code"),iN(3827,"po-textarea"),sg(),iN(3828,", "),Tl(3829,"code"),iN(3830,"po-password"),sg(),iN(3831,"."),sg()()(),Tl(3832,"tr",13)(3833,"td",14)(3834,"div",15)(3835,"span",16),iN(3836," placeholderSearch"),Gl(3837,"br"),sg()()(),Tl(3838,"td",17)(3839,"code",18),iN(3840,"string"),sg()(),Tl(3841,"td",20)(3842,"em")(3843,"strong"),iN(3844,"(opcional)"),sg()(),Tl(3845,"p"),iN(3846,"Placeholder do campo de pesquisa do "),Tl(3847,"code"),iN(3848,"po-multiselect"),sg(),iN(3849,"."),sg(),Tl(3850,"blockquote")(3851,"p"),iN(3852,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),sg()()()(),Tl(3853,"tr",13)(3854,"td",14)(3855,"div",15)(3856,"span",16),iN(3857," property"),Gl(3858,"br"),sg()()(),Tl(3859,"td",17)(3860,"code",18),iN(3861,"string"),sg()(),Tl(3862,"td",20)(3863,"p"),iN(3864,"Nome de refer\xEAncia do campo."),sg()()(),Tl(3865,"tr",13)(3866,"td",14)(3867,"div",15)(3868,"span",16),iN(3869," range"),Gl(3870,"br"),sg()()(),Tl(3871,"td",17)(3872,"code",28),iN(3873,"boolean"),sg()(),Tl(3874,"td",20)(3875,"em")(3876,"strong"),iN(3877,"(opcional)"),sg()(),Tl(3878,"p"),iN(3879,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),sg(),Tl(3880,"blockquote")(3881,"p"),iN(3882,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),sg()()()(),Tl(3883,"tr",13)(3884,"td",14)(3885,"div",15)(3886,"span",16),iN(3887," rangePresetOptions"),Gl(3888,"br"),sg()()(),Tl(3889,"td",17)(3890,"code",76),iN(3891,"Array<PoCalendarRangePreset>"),sg()(),Tl(3892,"td",20)(3893,"em")(3894,"strong"),iN(3895,"(opcional)"),sg()(),Tl(3896,"p"),iN(3897,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),sg(),Tl(3898,"p"),iN(3899,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),Tl(3900,"code"),iN(3901,"PoCalendarRangePreset"),sg(),iN(3902,"."),sg(),Tl(3903,"p")(3904,"strong"),iN(3905,"Componente compat\xEDvel:"),sg(),Tl(3906,"code"),iN(3907,"po-datepicker-range"),sg()()()(),Tl(3908,"tr",13)(3909,"td",14)(3910,"div",15)(3911,"span",16),iN(3912," rangePresets"),Gl(3913,"br"),sg()()(),Tl(3914,"td",17)(3915,"code",28),iN(3916,"boolean "),sg(),Tl(3917,"code",32),iN(3918," Array<string>"),sg()(),Tl(3919,"td",20)(3920,"em")(3921,"strong"),iN(3922,"(opcional)"),sg()(),Tl(3923,"p"),iN(3924,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),sg(),Tl(3925,"p"),iN(3926,"Aceita os seguintes valores:"),sg(),Tl(3927,"ul")(3928,"li")(3929,"code"),iN(3930,"true"),sg(),iN(3931,": exibe todos os presets padr\xE3o."),sg(),Tl(3932,"li")(3933,"code"),iN(3934,"false"),sg(),iN(3935,": n\xE3o exibe os presets padr\xE3o."),sg(),Tl(3936,"li")(3937,"code"),iN(3938,"Array<string>"),sg(),iN(3939,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),sg()(),Tl(3940,"p")(3941,"strong"),iN(3942,"Componente compat\xEDvel:"),sg(),Tl(3943,"code"),iN(3944,"po-datepicker-range"),sg()()()(),Tl(3945,"tr",13)(3946,"td",14)(3947,"div",15)(3948,"span",16),iN(3949," rangePresetsOrder"),Gl(3950,"br"),sg()()(),Tl(3951,"td",17)(3952,"code",77),iN(3953,"'asc' "),sg(),Tl(3954,"code",78),iN(3955," 'desc'"),sg()(),Tl(3956,"td",20)(3957,"em")(3958,"strong"),iN(3959,"(opcional)"),sg()(),Tl(3960,"p"),iN(3961,"Define a ordena\xE7\xE3o dos presets na lista."),sg(),Tl(3962,"p"),iN(3963,"Valores aceitos:"),sg(),Tl(3964,"ul")(3965,"li")(3966,"code"),iN(3967,"'asc'"),sg(),iN(3968,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),sg(),Tl(3969,"li")(3970,"code"),iN(3971,"'desc'"),sg(),iN(3972,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),sg()(),Tl(3973,"p")(3974,"strong"),iN(3975,"Componente compat\xEDvel:"),sg(),Tl(3976,"code"),iN(3977,"po-datepicker-range"),sg()()()(),Tl(3978,"tr",13)(3979,"td",14)(3980,"div",15)(3981,"span",16),iN(3982," readonly"),Gl(3983,"br"),sg()()(),Tl(3984,"td",17)(3985,"code",28),iN(3986,"boolean"),sg()(),Tl(3987,"td",20)(3988,"em")(3989,"strong"),iN(3990,"(opcional)"),sg()(),Tl(3991,"p"),iN(3992,"Indica que o campo ser\xE1 somente leitura."),sg(),Tl(3993,"p")(3994,"strong"),iN(3995,"Componentes compat\xEDveis:"),sg(),Tl(3996,"code"),iN(3997,"po-datepicker"),sg(),iN(3998,", "),Tl(3999,"code"),iN(4e3,"po-datepicker-range"),sg(),iN(4001,", "),Tl(4002,"code"),iN(4003,"po-timepicker"),sg(),iN(4004,", "),Tl(4005,"code"),iN(4006,"po-input"),sg(),iN(4007,", "),Tl(4008,"code"),iN(4009,"po-number"),sg(),iN(4010,`,
`),Tl(4011,"code"),iN(4012,"po-decimal"),sg(),iN(4013,", "),Tl(4014,"code"),iN(4015,"po-select"),sg(),iN(4016,", "),Tl(4017,"code"),iN(4018,"po-textarea"),sg(),iN(4019,", "),Tl(4020,"code"),iN(4021,"po-password"),sg(),iN(4022,"."),sg()()(),Tl(4023,"tr",13)(4024,"td",14)(4025,"div",15)(4026,"span",16),iN(4027," removeInitialFilter"),Gl(4028,"br"),sg()()(),Tl(4029,"td",17)(4030,"code",28),iN(4031,"boolean"),sg()(),Tl(4032,"td",20)(4033,"em")(4034,"strong"),iN(4035,"(opcional)"),sg()(),Tl(4036,"p"),iN(4037,"Define que o filtro no primeiro clique ser\xE1 removido."),sg(),Tl(4038,"blockquote")(4039,"p"),iN(4040,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),sg()(),Tl(4041,"p")(4042,"strong"),iN(4043,"Componente compat\xEDvel"),sg(),iN(4044,": "),Tl(4045,"code"),iN(4046,"po-combo"),sg()()()(),Tl(4047,"tr",13)(4048,"td",14)(4049,"div",15)(4050,"span",16),iN(4051," required"),Gl(4052,"br"),sg()()(),Tl(4053,"td",17)(4054,"code",28),iN(4055,"boolean"),sg()(),Tl(4056,"td",20)(4057,"em")(4058,"strong"),iN(4059,"(opcional)"),sg()(),Tl(4060,"p"),iN(4061,"Define a obrigatoriedade do campo."),sg(),Tl(4062,"p")(4063,"strong"),iN(4064,"Componentes compat\xEDveis:"),sg(),Tl(4065,"code"),iN(4066,"po-datepicker"),sg(),iN(4067,", "),Tl(4068,"code"),iN(4069,"po-datepicker-range"),sg(),iN(4070,", "),Tl(4071,"code"),iN(4072,"po-timepicker"),sg(),iN(4073,", "),Tl(4074,"code"),iN(4075,"po-input"),sg(),iN(4076,", "),Tl(4077,"code"),iN(4078,"po-number"),sg(),iN(4079,`,
`),Tl(4080,"code"),iN(4081,"po-decimal"),sg(),iN(4082,", "),Tl(4083,"code"),iN(4084,"po-select"),sg(),iN(4085,", "),Tl(4086,"code"),iN(4087,"po-radio-group"),sg(),iN(4088,", "),Tl(4089,"code"),iN(4090,"po-combo"),sg(),iN(4091,", "),Tl(4092,"code"),iN(4093,"po-lookup"),sg(),iN(4094,", "),Tl(4095,"code"),iN(4096,"po-checkbox-group"),sg(),iN(4097,", "),Tl(4098,"code"),iN(4099,"po-multiselect"),sg(),iN(4100,`,
`),Tl(4101,"code"),iN(4102,"po-textarea"),sg(),iN(4103,", "),Tl(4104,"code"),iN(4105,"po-password``, "),sg(),iN(4106,"po-upload`."),sg()()(),Tl(4107,"tr",13)(4108,"td",14)(4109,"div",15)(4110,"span",16),iN(4111," requiredFieldErrorMessage"),Gl(4112,"br"),sg()()(),Tl(4113,"td",17)(4114,"code",28),iN(4115,"boolean"),sg()(),Tl(4116,"td",20)(4117,"em")(4118,"strong"),iN(4119,"(opcional)"),sg()(),Tl(4120,"p"),iN(4121,"Exibe a mensagem setada na propriedade "),Tl(4122,"code"),iN(4123,"errorMessage"),sg(),iN(4124," se o campo estiver vazio e for requerido."),sg(),Tl(4125,"blockquote")(4126,"p"),iN(4127,"Necess\xE1rio que a propriedade "),Tl(4128,"code"),iN(4129,"required"),sg(),iN(4130," esteja habilitada."),sg()(),Tl(4131,"p")(4132,"strong"),iN(4133,"Componentes compat\xEDveis:"),sg(),Tl(4134,"code"),iN(4135,"po-datepicker"),sg(),iN(4136,", "),Tl(4137,"code"),iN(4138,"po-timepicker"),sg(),iN(4139,", "),Tl(4140,"code"),iN(4141,"po-input"),sg(),iN(4142,", "),Tl(4143,"code"),iN(4144,"po-number"),sg(),iN(4145,", "),Tl(4146,"code"),iN(4147,"po-decimal"),sg(),iN(4148,", "),Tl(4149,"code"),iN(4150,"po-password"),sg(),iN(4151,"."),sg()()(),Tl(4152,"tr",13)(4153,"td",14)(4154,"div",15)(4155,"span",16),iN(4156," restrictions"),Gl(4157,"br"),sg()()(),Tl(4158,"td",17)(4159,"code",79),iN(4160,"PoUploadFileRestrictions"),sg()(),Tl(4161,"td",20)(4162,"em")(4163,"strong"),iN(4164,"(opcional)"),sg()(),Tl(4165,"p"),iN(4166,"Objeto que segue a defini\xE7\xE3o da interface "),Tl(4167,"code"),iN(4168,"PoUploadFileRestrictions"),sg(),iN(4169,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),sg(),Tl(4170,"p")(4171,"strong"),iN(4172,"Componente compat\xEDvel"),sg(),iN(4173,": "),Tl(4174,"code"),iN(4175,"po-upload"),sg()()()(),Tl(4176,"tr",13)(4177,"td",14)(4178,"div",15)(4179,"span",16),iN(4180," rows"),Gl(4181,"br"),sg()()(),Tl(4182,"td",17)(4183,"code",41),iN(4184,"number"),sg()(),Tl(4185,"td",20)(4186,"em")(4187,"strong"),iN(4188,"(opcional)"),sg()(),Tl(4189,"p"),iN(4190,"Quantidade de linhas exibidas no "),Tl(4191,"code"),iN(4192,"po-textarea"),sg(),iN(4193,"."),sg()()(),Tl(4194,"tr",13)(4195,"td",14)(4196,"div",15)(4197,"span",16),iN(4198," searchService"),Gl(4199,"br"),sg()()(),Tl(4200,"td",17)(4201,"code",18),iN(4202,"string "),sg(),Tl(4203,"code",80),iN(4204," PoLookupFilter"),sg()(),Tl(4205,"td",20)(4206,"em")(4207,"strong"),iN(4208,"(opcional)"),sg()(),Tl(4209,"p"),iN(4210,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),Tl(4211,"code"),iN(4212,"columns"),sg(),iN(4213,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),Tl(4214,"strong"),iN(4215,"Importante:"),sg()(),Tl(4216,"blockquote")(4217,"p"),iN(4218,"Caso utilizar a propriedade "),Tl(4219,"code"),iN(4220,"optionsService"),sg(),iN(4221,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),Tl(4222,"a",75),iN(4223,"guia de API do PO UI"),sg(),iN(4224,"."),sg()()()(),Tl(4225,"tr",13)(4226,"td",14)(4227,"div",15)(4228,"span",16),iN(4229," secondInterval"),Gl(4230,"br"),sg()()(),Tl(4231,"td",17)(4232,"code",41),iN(4233,"number"),sg()(),Tl(4234,"td",20)(4235,"em")(4236,"strong"),iN(4237,"(opcional)"),sg()(),Tl(4238,"p"),iN(4239,"Define o intervalo entre os segundos exibidos no painel do timepicker."),sg()()(),Tl(4240,"tr",13)(4241,"td",14)(4242,"div",15)(4243,"span",16),iN(4244," secret"),Gl(4245,"br"),sg()()(),Tl(4246,"td",17)(4247,"code",28),iN(4248,"boolean"),sg()(),Tl(4249,"td",20)(4250,"em")(4251,"strong"),iN(4252,"(opcional)"),sg()(),Tl(4253,"p"),iN(4254,"Esconde a informa\xE7\xE3o estilo "),Tl(4255,"em"),iN(4256,"password"),sg(),iN(4257,", pode ser utilizado quando o tipo de dado for "),Tl(4258,"em"),iN(4259,"string"),sg(),iN(4260,"."),sg()()(),Tl(4261,"tr",13)(4262,"td",14)(4263,"div",15)(4264,"span",16),iN(4265," showRequired"),Gl(4266,"br"),sg()()(),Tl(4267,"td",17)(4268,"code",28),iN(4269,"boolean"),sg()(),Tl(4270,"td",20)(4271,"em")(4272,"strong"),iN(4273,"(opcional)"),sg()(),Tl(4274,"p"),iN(4275,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(4276,"blockquote")(4277,"p"),iN(4278,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(4279,"ul")(4280,"li"),iN(4281,"N\xE3o possuir "),Tl(4282,"code"),iN(4283,"p-help"),sg(),iN(4284," e/ou "),Tl(4285,"code"),iN(4286,"p-label"),sg(),iN(4287,"."),sg()(),Tl(4288,"p")(4289,"strong"),iN(4290,"Componentes compat\xEDveis:"),sg(),Tl(4291,"code"),iN(4292,"po-datepicker"),sg(),iN(4293,", "),Tl(4294,"code"),iN(4295,"po-datepicker-range"),sg(),iN(4296,", "),Tl(4297,"code"),iN(4298,"po-timepicker"),sg(),iN(4299,", "),Tl(4300,"code"),iN(4301,"po-input"),sg(),iN(4302,", "),Tl(4303,"code"),iN(4304,"po-number"),sg(),iN(4305,`,
`),Tl(4306,"code"),iN(4307,"po-decimal"),sg(),iN(4308,", "),Tl(4309,"code"),iN(4310,"po-select"),sg(),iN(4311,", "),Tl(4312,"code"),iN(4313,"po-radio-group"),sg(),iN(4314,", "),Tl(4315,"code"),iN(4316,"po-combo"),sg(),iN(4317,", "),Tl(4318,"code"),iN(4319,"po-lookup"),sg(),iN(4320,", "),Tl(4321,"code"),iN(4322,"po-checkbox-group"),sg(),iN(4323,", "),Tl(4324,"code"),iN(4325,"po-multiselect"),sg(),iN(4326,`,
`),Tl(4327,"code"),iN(4328,"po-textarea"),sg(),iN(4329,", "),Tl(4330,"code"),iN(4331,"po-password"),sg(),iN(4332,", "),Tl(4333,"code"),iN(4334,"po-upload"),sg(),iN(4335,"."),sg()()(),Tl(4336,"tr",13)(4337,"td",14)(4338,"div",15)(4339,"span",16),iN(4340," showSeconds"),Gl(4341,"br"),sg()()(),Tl(4342,"td",17)(4343,"code",28),iN(4344,"boolean"),sg()(),Tl(4345,"td",20)(4346,"em")(4347,"strong"),iN(4348,"(opcional)"),sg()(),Tl(4349,"p"),iN(4350,"Exibe a coluna de segundos no painel do timepicker."),sg()()(),Tl(4351,"tr",13)(4352,"td",14)(4353,"div",15)(4354,"span",16),iN(4355," showThumbnail"),Gl(4356,"br"),sg()()(),Tl(4357,"td",17)(4358,"code",28),iN(4359,"boolean"),sg()(),Tl(4360,"td",20)(4361,"em")(4362,"strong"),iN(4363,"(opcional)"),sg()(),Tl(4364,"p"),iN(4365,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),sg(),Tl(4366,"blockquote")(4367,"p"),iN(4368,"Propriedade funciona apenas em arquivos de formato de imagem ("),Tl(4369,"code"),iN(4370,".png"),sg(),iN(4371,", "),Tl(4372,"code"),iN(4373,".jpg"),sg(),iN(4374,", "),Tl(4375,"code"),iN(4376,".jpeg"),sg(),iN(4377," e "),Tl(4378,"code"),iN(4379,".gif"),sg(),iN(4380,")."),sg()(),Tl(4381,"p")(4382,"strong"),iN(4383,"Componente compat\xEDvel"),sg(),iN(4384,": "),Tl(4385,"code"),iN(4386,"po-upload"),sg()()()(),Tl(4387,"tr",13)(4388,"td",14)(4389,"div",15)(4390,"span",16),iN(4391," size"),Gl(4392,"br"),sg()()(),Tl(4393,"td",17)(4394,"code",18),iN(4395,"string"),sg()(),Tl(4396,"td",20)(4397,"em")(4398,"strong"),iN(4399,"(opcional)"),sg()(),Tl(4400,"p"),iN(4401,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),sg(),Tl(4402,"ul")(4403,"li")(4404,"code"),iN(4405,"small"),sg(),iN(4406,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(4407,"li")(4408,"code"),iN(4409,"medium"),sg(),iN(4410,": aplica a medida medium de cada componente."),sg(),Tl(4411,"li")(4412,"code"),iN(4413,"large"),sg(),iN(4414,": aplica a medida large de cada componente (dispon\xEDvel para "),Tl(4415,"code"),iN(4416,"po-checkbox"),sg(),iN(4417," e "),Tl(4418,"code"),iN(4419,"po-radio-group"),sg(),iN(4420,")."),Tl(4421,"blockquote")(4422,"p"),iN(4423,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(4424,"code"),iN(4425,"medium"),sg(),iN(4426,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(4427,"a",21),iN(4428,"po-theme"),sg(),iN(4429,"."),sg()()()()()(),Tl(4430,"tr",13)(4431,"td",14)(4432,"div",15)(4433,"span",16),iN(4434," sort"),Gl(4435,"br"),sg()()(),Tl(4436,"td",17)(4437,"code",28),iN(4438,"boolean"),sg()(),Tl(4439,"td",20)(4440,"em")(4441,"strong"),iN(4442,"(opcional)"),sg()(),Tl(4443,"p"),iN(4444,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),sg(),Tl(4445,"p")(4446,"strong"),iN(4447,"Componentes compat\xEDveis:"),sg(),Tl(4448,"code"),iN(4449,"po-combo"),sg(),iN(4450,", po-multiselect"),sg()()(),Tl(4451,"tr",13)(4452,"td",14)(4453,"div",15)(4454,"span",16),iN(4455," step"),Gl(4456,"br"),sg()()(),Tl(4457,"td",17)(4458,"code",41),iN(4459,"number"),sg()(),Tl(4460,"td",20)(4461,"em")(4462,"strong"),iN(4463,"(opcional)"),sg()(),Tl(4464,"p"),iN(4465,"Intervalo utilizado no "),Tl(4466,"code"),iN(4467,"po-number"),sg(),iN(4468,"."),sg()()(),Tl(4469,"tr",13)(4470,"td",14)(4471,"div",15)(4472,"span",16),iN(4473," thousandMaxlength"),Gl(4474,"br"),sg()()(),Tl(4475,"td",17)(4476,"code",41),iN(4477,"number"),sg()(),Tl(4478,"td",20)(4479,"em")(4480,"strong"),iN(4481,"(opcional)"),sg()(),Tl(4482,"p"),iN(4483,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),sg(),Tl(4484,"blockquote")(4485,"p"),iN(4486,"Esta propriedade s\xF3 pode ser utilizada quando o "),Tl(4487,"code"),iN(4488,"type"),sg(),iN(4489," for "),Tl(4490,"em"),iN(4491,"currency"),sg(),iN(4492," ou "),Tl(4493,"em"),iN(4494,"decimal"),sg(),iN(4495,"."),sg()()()(),Tl(4496,"tr",13)(4497,"td",14)(4498,"div",15)(4499,"span",16),iN(4500," type"),Gl(4501,"br"),sg()()(),Tl(4502,"td",17)(4503,"code",18),iN(4504,"string "),sg(),Tl(4505,"code",81),iN(4506," PoDynamicFieldType"),sg()(),Tl(4507,"td",20)(4508,"em")(4509,"strong"),iN(4510,"(opcional)"),sg()(),Tl(4511,"p"),iN(4512,"Tipo do valor campo."),sg(),Tl(4513,"p"),iN(4514,"Valores v\xE1lidos:"),sg(),Tl(4515,"ul")(4516,"li")(4517,"code"),iN(4518,"boolean"),sg(),iN(4519,": Valores "),Tl(4520,"em"),iN(4521,"booleanos"),sg(),iN(4522,"."),sg(),Tl(4523,"li")(4524,"code"),iN(4525,"currency"),sg(),iN(4526,": Valores monet\xE1rios."),sg(),Tl(4527,"li")(4528,"code"),iN(4529,"decimal"),sg(),iN(4530,": Valores decimais."),sg(),Tl(4531,"li")(4532,"code"),iN(4533,"date"),sg(),iN(4534,": Valores de datas."),Tl(4535,"ul")(4536,"li"),iN(4537,"Aceita os tipos "),Tl(4538,"strong"),iN(4539,"string"),sg(),iN(4540," e "),Tl(4541,"strong"),iN(4542,"Date"),sg(),iN(4543,` padr\xE3o do Javascript,
por exemplo: `),Tl(4544,"code"),iN(4545,"'2017-11-28'"),sg(),iN(4546," ou "),Tl(4547,"code"),iN(4548,"new Date(2017, 10, 28)"),sg(),iN(4549,"."),sg()()(),Tl(4550,"li")(4551,"code"),iN(4552,"dateTime"),sg(),iN(4553,": Valor de data com hor\xE1rio."),Tl(4554,"ul")(4555,"li"),iN(4556,"Aceita o tipo "),Tl(4557,"em"),iN(4558,"string"),sg(),iN(4559," no formato "),Tl(4560,"strong"),iN(4561,"ISO-8601"),sg(),iN(4562," extendido "),Tl(4563,"strong"),iN(4564,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),sg(),iN(4565,`
e o tipo `),Tl(4566,"strong"),iN(4567,"Date"),sg(),iN(4568," padr\xE3o do Javascript, por exemplo: "),Tl(4569,"code"),iN(4570,"'2017-11-28T00:00:00-02:00'"),sg(),iN(4571," ou "),Tl(4572,"code"),iN(4573,"new Date(2017, 10, 28)"),sg(),iN(4574,"."),sg()()(),Tl(4575,"li")(4576,"code"),iN(4577,"number"),sg(),iN(4578,": Valores num\xE9ricos."),sg(),Tl(4579,"li")(4580,"code"),iN(4581,"string"),sg(),iN(4582,": Textos."),sg(),Tl(4583,"li")(4584,"code"),iN(4585,"time"),sg(),iN(4586,": Valor do hor\xE1rio."),Tl(4587,"ul")(4588,"li"),iN(4589,"Aceita o tipo "),Tl(4590,"strong"),iN(4591,"string"),sg(),iN(4592," nos formatos "),Tl(4593,"strong"),iN(4594,"'HH:mm:ss'"),sg(),iN(4595," ou "),Tl(4596,"strong"),iN(4597,"'HH:mm:ss.ffffff'"),sg(),iN(4598,", por exemplo: "),Tl(4599,"code"),iN(4600,"'23:12:45'"),sg(),iN(4601,"."),sg()()()()()(),Tl(4602,"tr",13)(4603,"td",14)(4604,"div",15)(4605,"span",16),iN(4606," url"),Gl(4607,"br"),sg()()(),Tl(4608,"td",17)(4609,"code",18),iN(4610,"string"),sg()(),Tl(4611,"td",20)(4612,"em")(4613,"strong"),iN(4614,"(opcional)"),sg()(),Tl(4615,"p"),iN(4616,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),sg(),Tl(4617,"p")(4618,"strong"),iN(4619,"Componente compat\xEDvel"),sg(),iN(4620,": "),Tl(4621,"code"),iN(4622,"po-upload"),sg()()()(),Tl(4623,"tr",13)(4624,"td",14)(4625,"div",15)(4626,"span",16),iN(4627," validate"),Gl(4628,"br"),sg()()(),Tl(4629,"td",17)(4630,"code",18),iN(4631,"string "),sg(),Tl(4632,"code",29),iN(4633," Function"),sg()(),Tl(4634,"td",20)(4635,"em")(4636,"strong"),iN(4637,"(opcional)"),sg()(),Tl(4638,"p"),iN(4639,"Fun\xE7\xE3o ou servi\xE7o para validar as "),Tl(4640,"strong"),iN(4641,"mudan\xE7as do campo"),sg(),iN(4642,"."),sg(),Tl(4643,"ul")(4644,"li"),iN(4645,"A propriedade aceita os seguintes tipos:"),sg()(),Tl(4646,"ul")(4647,"li")(4648,"strong"),iN(4649,"String"),sg(),iN(4650,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),Tl(4651,"code"),iN(4652,"POST"),sg(),iN(4653,"."),sg(),Tl(4654,"li")(4655,"strong"),iN(4656,"Function"),sg(),iN(4657,": M\xE9todo que ser\xE1 executado."),sg()(),Tl(4658,"p"),iN(4659,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),Tl(4660,"code"),iN(4661,"PoDynamicFormFieldChanged"),sg(),iN(4662,":"),sg(),Tl(4663,"p")(4664,"code"),iN(4665,"{ property: 'property name', value: 'new value' }"),sg()(),Tl(4666,"p"),iN(4667,"O retorno desta fun\xE7\xE3o deve ser do tipo "),Tl(4668,"a",82),iN(4669,"PoDynamicFormFieldValidation"),sg(),iN(4670,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),sg(),Tl(4671,"pre")(4672,"code"),iN(4673,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),sg()(),Tl(4674,"p"),iN(4675,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),Tl(4676,"code"),iN(4677,"bind"),sg(),iN(4678,`, por exemplo:
`),Tl(4679,"code"),iN(4680,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),sg()()()(),Tl(4681,"tr",13)(4682,"td",14)(4683,"div",15)(4684,"span",16),iN(4685," visible"),Gl(4686,"br"),sg()()(),Tl(4687,"td",17)(4688,"code",28),iN(4689,"boolean"),sg()(),Tl(4690,"td",20)(4691,"em")(4692,"strong"),iN(4693,"(opcional)"),sg()(),Tl(4694,"p"),iN(4695,"Indica se o campo ser\xE1 vis\xEDvel."),sg()()(),Tl(4696,"tr",13)(4697,"td",14)(4698,"div",15)(4699,"span",16),iN(4700," yearRangeLimit"),Gl(4701,"br"),sg()()(),Tl(4702,"td",17)(4703,"code",41),iN(4704,"number"),sg()(),Tl(4705,"td",20)(4706,"em")(4707,"strong"),iN(4708,"(opcional)"),sg()(),Tl(4709,"p"),iN(4710,"Define o limite de anos exibidos na lista de anos do "),Tl(4711,"code"),iN(4712,"po-datepicker"),sg(),iN(4713," nos modos "),Tl(4714,"code"),iN(4715,"month-year"),sg(),iN(4716," e "),Tl(4717,"code"),iN(4718,"year"),sg(),iN(4719,"."),sg()()()(),Tl(4720,"h4",38)(4721,"code",5),iN(4722,"PoDynamicFormLoad"),sg()(),Tl(4723,"div",2)(4724,"p"),Gl(4725,"a",83),sg(),Tl(4726,"p"),iN(4727,"Estrutura de retorno no carregamento do formul\xE1rio."),sg()(),Tl(4728,"h4",9),iN(4729,"Propriedades"),sg(),Tl(4730,"table",10)(4731,"tr",11)(4732,"th",12),iN(4733,"Nome"),sg(),Tl(4734,"th",12),iN(4735,"Tipo"),sg(),Tl(4736,"th",12),iN(4737,"Descri\xE7\xE3o"),sg()(),Tl(4738,"tr",13)(4739,"td",14)(4740,"div",15)(4741,"span",16),iN(4742," fields"),Gl(4743,"br"),sg()()(),Tl(4744,"td",17)(4745,"code",22),iN(4746,"Array<PoDynamicFormField>"),sg()(),Tl(4747,"td",20)(4748,"em")(4749,"strong"),iN(4750,"(opcional)"),sg()(),Tl(4751,"p"),iN(4752,"Lista com as novas defini\xE7\xF5es dos campos."),sg(),Tl(4753,"blockquote")(4754,"p"),iN(4755,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),sg()()()(),Tl(4756,"tr",13)(4757,"td",14)(4758,"div",15)(4759,"span",16),iN(4760," focus"),Gl(4761,"br"),sg()()(),Tl(4762,"td",17)(4763,"code",18),iN(4764,"string"),sg()(),Tl(4765,"td",20)(4766,"em")(4767,"strong"),iN(4768,"(opcional)"),sg()(),Tl(4769,"p"),iN(4770,"Nome do campo que receber\xE1 o foco."),sg(),Tl(4771,"p"),iN(4772,"Exemplo:"),sg(),Tl(4773,"pre")(4774,"code"),iN(4775,`focus: 'name'
`),sg()()()(),Tl(4776,"tr",13)(4777,"td",14)(4778,"div",15)(4779,"span",16),iN(4780," value"),Gl(4781,"br"),sg()()(),Tl(4782,"td",17)(4783,"code",33),iN(4784,"any"),sg()(),Tl(4785,"td",20)(4786,"em")(4787,"strong"),iN(4788,"(opcional)"),sg()(),Tl(4789,"p"),iN(4790,"Objeto contendo os novos valores."),sg(),Tl(4791,"p"),iN(4792,"Exemplo:"),sg(),Tl(4793,"pre")(4794,"code"),iN(4795,`{
  name: 'new name',
  age: 10
}
`),sg()(),Tl(4796,"blockquote")(4797,"p"),iN(4798,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),sg()()()()(),Tl(4799,"h4",38)(4800,"code",5),iN(4801,"PoDynamicFormFieldChanged"),sg()(),Tl(4802,"div",2)(4803,"p"),iN(4804,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),sg()(),Tl(4805,"h4",9),iN(4806,"Propriedades"),sg(),Tl(4807,"table",10)(4808,"tr",11)(4809,"th",12),iN(4810,"Nome"),sg(),Tl(4811,"th",12),iN(4812,"Tipo"),sg(),Tl(4813,"th",12),iN(4814,"Descri\xE7\xE3o"),sg()(),Tl(4815,"tr",13)(4816,"td",14)(4817,"div",15)(4818,"span",16),iN(4819," property"),Gl(4820,"br"),sg()()(),Tl(4821,"td",17)(4822,"code",18),iN(4823,"string"),sg()(),Tl(4824,"td",20)(4825,"p"),iN(4826,"Valor da propriedade do campo."),sg()()(),Tl(4827,"tr",13)(4828,"td",14)(4829,"div",15)(4830,"span",16),iN(4831," value"),Gl(4832,"br"),sg()()(),Tl(4833,"td",17)(4834,"code",33),iN(4835,"any"),sg()(),Tl(4836,"td",20)(4837,"p"),iN(4838,"Novo valor do campo."),sg()()()(),Tl(4839,"h4",38)(4840,"code",5),iN(4841,"PoDynamicFormFieldValidation"),sg()(),Tl(4842,"div",2)(4843,"p"),Gl(4844,"a",84),sg(),Tl(4845,"p"),iN(4846,"Estrutura de retorno da valida\xE7\xE3o de um campo."),sg()(),Tl(4847,"h4",9),iN(4848,"Propriedades"),sg(),Tl(4849,"table",10)(4850,"tr",11)(4851,"th",12),iN(4852,"Nome"),sg(),Tl(4853,"th",12),iN(4854,"Tipo"),sg(),Tl(4855,"th",12),iN(4856,"Descri\xE7\xE3o"),sg()(),Tl(4857,"tr",13)(4858,"td",14)(4859,"div",15)(4860,"span",16),iN(4861," field"),Gl(4862,"br"),sg()()(),Tl(4863,"td",17)(4864,"code",85),iN(4865,"PoDynamicFormField"),sg()(),Tl(4866,"td",20)(4867,"em")(4868,"strong"),iN(4869,"(opcional)"),sg()(),Tl(4870,"p"),iN(4871,"Novas defini\xE7\xF5es das propriedades do campo."),sg(),Tl(4872,"blockquote")(4873,"p"),iN(4874,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),sg()()()(),Tl(4875,"tr",13)(4876,"td",14)(4877,"div",15)(4878,"span",16),iN(4879," focus"),Gl(4880,"br"),sg()()(),Tl(4881,"td",17)(4882,"code",28),iN(4883,"boolean"),sg()(),Tl(4884,"td",20)(4885,"em")(4886,"strong"),iN(4887,"(opcional)"),sg()(),Tl(4888,"p"),iN(4889,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),sg()()(),Tl(4890,"tr",13)(4891,"td",14)(4892,"div",15)(4893,"span",16),iN(4894," value"),Gl(4895,"br"),sg()()(),Tl(4896,"td",17)(4897,"code",33),iN(4898,"any"),sg()(),Tl(4899,"td",20)(4900,"em")(4901,"strong"),iN(4902,"(opcional)"),sg()(),Tl(4903,"p"),iN(4904,"Novo valor do campo"),sg()()()(),Tl(4905,"h4",38)(4906,"code",5),iN(4907,"PoDynamicFormValidation"),sg()(),Tl(4908,"div",2)(4909,"p"),Gl(4910,"a",86),sg(),Tl(4911,"p"),iN(4912,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),sg()(),Tl(4913,"h4",9),iN(4914,"Propriedades"),sg(),Tl(4915,"table",10)(4916,"tr",11)(4917,"th",12),iN(4918,"Nome"),sg(),Tl(4919,"th",12),iN(4920,"Tipo"),sg(),Tl(4921,"th",12),iN(4922,"Descri\xE7\xE3o"),sg()(),Tl(4923,"tr",13)(4924,"td",14)(4925,"div",15)(4926,"span",16),iN(4927," fields"),Gl(4928,"br"),sg()()(),Tl(4929,"td",17)(4930,"code",22),iN(4931,"Array<PoDynamicFormField>"),sg()(),Tl(4932,"td",20)(4933,"em")(4934,"strong"),iN(4935,"(opcional)"),sg()(),Tl(4936,"p"),iN(4937,"Lista com as novas defini\xE7\xF5es dos campos."),sg(),Tl(4938,"blockquote")(4939,"p"),iN(4940,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),sg()()()(),Tl(4941,"tr",13)(4942,"td",14)(4943,"div",15)(4944,"span",16),iN(4945," focus"),Gl(4946,"br"),sg()()(),Tl(4947,"td",17)(4948,"code",18),iN(4949,"string"),sg()(),Tl(4950,"td",20)(4951,"em")(4952,"strong"),iN(4953,"(opcional)"),sg()(),Tl(4954,"p"),iN(4955,"Nome do campo que receber\xE1 o foco."),sg(),Tl(4956,"p"),iN(4957,"Exemplo:"),sg(),Tl(4958,"pre")(4959,"code"),iN(4960,`focus: 'name'
`),sg()()()(),Tl(4961,"tr",13)(4962,"td",14)(4963,"div",15)(4964,"span",16),iN(4965," value"),Gl(4966,"br"),sg()()(),Tl(4967,"td",17)(4968,"code",33),iN(4969,"any"),sg()(),Tl(4970,"td",20)(4971,"em")(4972,"strong"),iN(4973,"(opcional)"),sg()(),Tl(4974,"p"),iN(4975,"Objeto contendo os novos valores."),sg(),Tl(4976,"p"),iN(4977,"Exemplo:"),sg(),Tl(4978,"pre")(4979,"code"),iN(4980,`{
  name: 'new name',
  age: 10
}
`),sg()(),Tl(4981,"blockquote")(4982,"p"),iN(4983,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),sg()()()()(),Tl(4984,"h4",38)(4985,"code",5),iN(4986,"ErrorAsyncProperties"),sg()(),Tl(4987,"div",2)(4988,"p"),iN(4989,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),sg()(),Tl(4990,"h4",9),iN(4991,"Propriedades"),sg(),Tl(4992,"table",10)(4993,"tr",11)(4994,"th",12),iN(4995,"Nome"),sg(),Tl(4996,"th",12),iN(4997,"Tipo"),sg(),Tl(4998,"th",12),iN(4999,"Descri\xE7\xE3o"),sg()(),Tl(5e3,"tr",13)(5001,"td",14)(5002,"div",15)(5003,"span",16),iN(5004," errorAsync"),Gl(5005,"br"),sg()()(),Tl(5006,"td",17)(5007,"code",46),iN(5008,"(value) => Observable<boolean>"),sg()(),Tl(5009,"td",20)(5010,"p"),iN(5011,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(5012,"code"),iN(5013,"change"),sg(),iN(5014," ou "),Tl(5015,"code"),iN(5016,"change-model"),sg(),iN(5017,", dependendo do valor da propriedade "),Tl(5018,"code"),iN(5019,"triggerMode"),sg(),iN(5020,"."),sg()()(),Tl(5021,"tr",13)(5022,"td",14)(5023,"div",15)(5024,"span",16),iN(5025," triggerMode"),Gl(5026,"br"),sg()()(),Tl(5027,"td",17)(5028,"code",87),iN(5029,"'change' "),sg(),Tl(5030,"code",88),iN(5031," 'changeModel'"),sg()(),Tl(5032,"td",20)(5033,"em")(5034,"strong"),iN(5035,"(opcional)"),sg()(),Tl(5036,"p"),iN(5037,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Tl(5038,"code"),iN(5039,"change"),sg(),iN(5040," ou "),Tl(5041,"code"),iN(5042,"change-model"),sg(),iN(5043,"."),sg()()()(),Tl(5044,"h3"),iN(5045,"Enums"),sg(),Tl(5046,"h4",4)(5047,"code",5),iN(5048,"ForceBooleanComponentEnum"),sg()(),Tl(5049,"div",2)(5050,"p"),iN(5051,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),sg()(),Tl(5052,"h4",9),iN(5053,"Propriedades"),sg(),Tl(5054,"table",10)(5055,"tr",11)(5056,"th",12),iN(5057,"Nome"),sg(),Tl(5058,"th",12),iN(5059,"Descri\xE7\xE3o"),sg()(),Tl(5060,"tr",13)(5061,"td",14)(5062,"div",15)(5063,"span",16),iN(5064," switch"),Gl(5065,"br"),sg()()(),Tl(5066,"td",20)(5067,"p"),iN(5068,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),sg()()(),Tl(5069,"tr",13)(5070,"td",14)(5071,"div",15)(5072,"span",16),iN(5073," checkbox"),Gl(5074,"br"),sg()()(),Tl(5075,"td",20)(5076,"p"),iN(5077,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),sg()()()(),Tl(5078,"h4",4)(5079,"code",5),iN(5080,"ForceOptionComponentEnum"),sg()(),Tl(5081,"div",2)(5082,"p"),iN(5083,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),sg()(),Tl(5084,"h4",9),iN(5085,"Propriedades"),sg(),Tl(5086,"table",10)(5087,"tr",11)(5088,"th",12),iN(5089,"Nome"),sg(),Tl(5090,"th",12),iN(5091,"Descri\xE7\xE3o"),sg()(),Tl(5092,"tr",13)(5093,"td",14)(5094,"div",15)(5095,"span",16),iN(5096," radioGroup"),Gl(5097,"br"),sg()()(),Tl(5098,"td",20)(5099,"p"),iN(5100,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),sg()()(),Tl(5101,"tr",13)(5102,"td",14)(5103,"div",15)(5104,"span",16),iN(5105," select"),Gl(5106,"br"),sg()()(),Tl(5107,"td",20)(5108,"p"),iN(5109,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),sg()()()(),Tl(5110,"h4",4)(5111,"code",5),iN(5112,"PoDynamicFieldType"),sg()(),Tl(5113,"div",2)(5114,"p"),iN(5115,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),sg()(),Tl(5116,"h4",9),iN(5117,"Propriedades"),sg(),Tl(5118,"table",10)(5119,"tr",11)(5120,"th",12),iN(5121,"Nome"),sg(),Tl(5122,"th",12),iN(5123,"Descri\xE7\xE3o"),sg()(),Tl(5124,"tr",13)(5125,"td",14)(5126,"div",15)(5127,"span",16),iN(5128," Boolean"),Gl(5129,"br"),sg()()(),Tl(5130,"td",20)(5131,"p"),iN(5132,"Valor booleano."),sg()()(),Tl(5133,"tr",13)(5134,"td",14)(5135,"div",15)(5136,"span",16),iN(5137," Currency"),Gl(5138,"br"),sg()()(),Tl(5139,"td",20)(5140,"p"),iN(5141,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),sg()()(),Tl(5142,"tr",13)(5143,"td",14)(5144,"div",15)(5145,"span",16),iN(5146," Decimal"),Gl(5147,"br"),sg()()(),Tl(5148,"td",20)(5149,"p"),iN(5150,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),sg()()(),Tl(5151,"tr",13)(5152,"td",14)(5153,"div",15)(5154,"span",16),iN(5155," Date"),Gl(5156,"br"),sg()()(),Tl(5157,"td",20)(5158,"p"),iN(5159,"Valor para data."),sg()()(),Tl(5160,"tr",13)(5161,"td",14)(5162,"div",15)(5163,"span",16),iN(5164," DateTime"),Gl(5165,"br"),sg()()(),Tl(5166,"td",20)(5167,"p"),iN(5168,"Valor para data e hora."),sg()()(),Tl(5169,"tr",13)(5170,"td",14)(5171,"div",15)(5172,"span",16),iN(5173," Time"),Gl(5174,"br"),sg()()(),Tl(5175,"td",20)(5176,"p"),iN(5177,"Utilizado para informar/exibir hora."),sg()()(),Tl(5178,"tr",13)(5179,"td",14)(5180,"div",15)(5181,"span",16),iN(5182," Number"),Gl(5183,"br"),sg()()(),Tl(5184,"td",20)(5185,"p"),iN(5186,"Valor num\xE9rico."),sg()()(),Tl(5187,"tr",13)(5188,"td",14)(5189,"div",15)(5190,"span",16),iN(5191," String"),Gl(5192,"br"),sg()()(),Tl(5193,"td",20)(5194,"p"),iN(5195,"Texto."),sg()()(),Tl(5196,"tr",13)(5197,"td",14)(5198,"div",15)(5199,"span",16),iN(5200," Upload"),Gl(5201,"br"),sg()()(),Tl(5202,"td",20)(5203,"p"),iN(5204,"Utilizado para fazer uploads de arquivos."),sg()()()(),Tl(5205,"h4",4)(5206,"code",5),iN(5207,"PoTimepickerModelFormat"),sg()(),Tl(5208,"div",2)(5209,"p")(5210,"em"),iN(5211,"Enum"),sg(),iN(5212," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),sg()(),Tl(5213,"h4",9),iN(5214,"Propriedades"),sg(),Tl(5215,"table",10)(5216,"tr",11)(5217,"th",12),iN(5218,"Nome"),sg(),Tl(5219,"th",12),iN(5220,"Descri\xE7\xE3o"),sg()(),Tl(5221,"tr",13)(5222,"td",14)(5223,"div",15)(5224,"span",16),iN(5225," HourMinute"),Gl(5226,"br"),sg()()(),Tl(5227,"td",20)(5228,"p"),iN(5229,"Formato b\xE1sico "),Tl(5230,"code"),iN(5231,"HH:mm"),sg(),iN(5232," (ex: "),Tl(5233,"code"),iN(5234,"14:30"),sg(),iN(5235,")."),sg()()(),Tl(5236,"tr",13)(5237,"td",14)(5238,"div",15)(5239,"span",16),iN(5240," HourMinuteSecond"),Gl(5241,"br"),sg()()(),Tl(5242,"td",20)(5243,"p"),iN(5244,"Formato com segundos "),Tl(5245,"code"),iN(5246,"HH:mm:ss"),sg(),iN(5247," (ex: "),Tl(5248,"code"),iN(5249,"14:30:00"),sg(),iN(5250,")."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return o})();var ae=(()=>{class o{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(a){return new(a||o)(w(Xn),w(wn))};static \u0275cmp=Un({type:o,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,r){a&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return r.changeTab("doc")}),Gl(3,"sample-po-dynamic-form-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return r.changeTab("web")}),Gl(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),sg()()()),a&2&&(nw("p-actions",r.actions),Vp(2),nw("p-active",r.activeTab==="doc"),Vp(2),nw("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"));},dependencies:[lNe,Wme,jme,$,te,ne,oe],encapsulation:2,changeDetection:1})}return o})();var fe=[{path:"",component:ae}],re=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[DL.forChild(fe),DL]})}return o})();var rt=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=fe$1({type:o});static \u0275inj=ue({imports:[ar,re]})}return o})();export{rt as DocPoDynamicFormModule};