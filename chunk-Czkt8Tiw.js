import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,cg as uY,ch as om,bB as ga,N as Ul,S as YE,bj as eN,a7 as Qx,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bd as na,bC as Vp,al as lx,am as pw,an as $0,aX as _x,ap as hw,aq as G0,ai as ya,ck as vk,cl as gk,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var _e=()=>({label:"Option 1",value:"1"}),Te=()=>({label:"Option 2",value:"2"}),Pe=(i,ye)=>[i,ye],se=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic"]],standalone:false,decls:1,vars:6,consts:[["name","radioGroupBasic","p-label","PO Radio Group",3,"p-options"]],template:function(r,n){r&1&&Ul(0,"po-radio-group",0),r&2&&YE("p-options",eN(3,Pe,Qx(1,_e),Qx(2,Te)));},dependencies:[ga],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Radio Group Basic"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-radio-group-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Re,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,se],encapsulation:2})}return i})();var Ee=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];ngOnInit(){this.restore();}addOption(){this.options.push(this.option),this.option=this.getNewOption();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.event="",this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage="",this.size="medium",this.option=this.getNewOption(),this.options=[];}getNewOption(){return {label:void 0,value:void 0}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs"]],standalone:false,decls:26,vars:31,consts:[["optionForm","ngForm"],["propertiesForm","ngForm"],["name","radioGroupLabs",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-label","p-optional","p-options","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionDisabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"click"]],template:function(r,n){if(r&1){let m=lx();wl(0,"po-radio-group",2),pw("ngModelChange",function(l){return Qy(m),$x(n.radioGroup,l)||(n.radioGroup=l),Jy(l)}),ut("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",3),Ul(3,"po-info",4)(4,"po-info",5),ng(),Ul(5,"po-divider"),wl(6,"form",null,0)(8,"div",3)(9,"po-input",6),pw("ngModelChange",function(l){return Qy(m),$x(n.option.label,l)||(n.option.label=l),Jy(l)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(l){return Qy(m),$x(n.option.value,l)||(n.option.value=l),Jy(l)}),ng(),$0(),wl(11,"po-switch",8),pw("ngModelChange",function(l){return Qy(m),$x(n.option.disabled,l)||(n.option.disabled=l),Jy(l)}),ng(),$0(),ng(),wl(12,"div",3)(13,"po-button",9),ut("p-click",function(){Qy(m);let l=_x(7);return n.addOption(),Jy(l.reset())}),ng()()(),Ul(14,"po-divider"),wl(15,"form",null,1)(17,"po-input",10),pw("ngModelChange",function(l){return Qy(m),$x(n.label,l)||(n.label=l),Jy(l)}),ng(),$0(),wl(18,"po-input",11),pw("ngModelChange",function(l){return Qy(m),$x(n.help,l)||(n.help=l),Jy(l)}),ng(),$0(),wl(19,"po-input",12),pw("ngModelChange",function(l){return Qy(m),$x(n.helperText,l)||(n.helperText=l),Jy(l)}),ng(),$0(),wl(20,"po-input",13),pw("ngModelChange",function(l){return Qy(m),$x(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Jy(l)}),ng(),$0(),wl(21,"po-radio-group",14),pw("ngModelChange",function(l){return Qy(m),$x(n.columns,l)||(n.columns=l),Jy(l)}),ng(),$0(),wl(22,"po-checkbox-group",15),pw("ngModelChange",function(l){return Qy(m),$x(n.properties,l)||(n.properties=l),Jy(l)}),ng(),$0(),wl(23,"po-radio-group",16),pw("ngModelChange",function(l){return Qy(m),$x(n.size,l)||(n.size=l),Jy(l)}),ng(),$0(),wl(24,"div",3)(25,"po-button",17),ut("click",function(){return Qy(m),_x(16).reset(),Jy(n.restore())}),ng()()();}if(r&2){let m=_x(7);hw("ngModel",n.radioGroup),YE("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel")),G0(),Pp(3),YE("p-value",n.radioGroup),Pp(),YE("p-value",n.event),Pp(5),hw("ngModel",n.option.label),G0(),Pp(),hw("ngModel",n.option.value),G0(),Pp(),hw("ngModel",n.option.disabled),G0(),Pp(2),YE("p-disabled",m.invalid),Pp(4),hw("ngModel",n.label),G0(),Pp(),hw("ngModel",n.help),G0(),Pp(),hw("ngModel",n.helperText),G0(),Pp(),hw("ngModel",n.fieldErrorMessage),G0(),Pp(),hw("ngModel",n.columns),YE("p-options",n.columnOptions),G0(),Pp(),hw("ngModel",n.properties),YE("p-options",n.propertiesOptions),G0(),Pp(),hw("ngModel",n.size),YE("p-options",n.sizesOptions),G0();}},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Yo,ga,na,Vp],encapsulation:2,changeDetection:1})}return i})();var Le=i=>({"docs-sample-code-tabs":i}),be=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Radio Group Labs"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-radio-group
  name="radioGroupLabs"
  [(ngModel)]="radioGroup"
  [p-helper]="helperText"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
>
</po-radio-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="radioGroup"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #optionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-4" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>

    <po-switch class="po-lg-4" name="optionDisabled" [(ngModel)]="option.disabled" p-label="Option Disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Option"
      [p-disabled]="optionForm.invalid"
      (p-click)="addOption(); optionForm.reset()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-radio-group
    class="po-md-12"
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
  >
  </po-radio-group>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>
  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    [p-options]="sizesOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (click)="propertiesForm.reset(); restore()">
    </po-button>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-labs',
  templateUrl: './sample-po-radio-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupLabsComponent implements OnInit {
  helperText: string;
  columns: number;
  event: string;
  help: string;
  label: string;
  option: PoRadioGroupOption;
  options: Array<PoRadioGroupOption>;
  properties: Array<string>;
  radioGroup: string;
  fieldErrorMessage: string;
  size: string;

  readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  readonly sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.option = this.getNewOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.radioGroup = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';
    this.option = this.getNewOption();
    this.options = [];
  }

  private getNewOption(): PoRadioGroupOption {
    return {
      label: undefined,
      value: undefined
    };
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-radio-group-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Le,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ee],encapsulation:2})}return i})();var he=(()=>{class i{language="es";original="";translated="";languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language]);}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator"]],standalone:false,decls:6,vars:5,consts:[["f","ngForm"],[1,"po-row"],["name","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let m=lx();wl(0,"form",null,0)(2,"div",1)(3,"po-radio-group",2),pw("ngModelChange",function(l){return Qy(m),$x(n.language,l)||(n.language=l),Jy(l)}),ut("p-change",function(l){return n.changeLanguage(l)}),ng(),$0(),wl(4,"po-select",3),pw("ngModelChange",function(l){return Qy(m),$x(n.original,l)||(n.original=l),Jy(l)}),ut("p-change",function(l){return n.changeLanguage(l)}),ng(),$0(),wl(5,"po-input",4),pw("ngModelChange",function(l){return Qy(m),$x(n.translated,l)||(n.translated=l),Jy(l)}),ng(),$0(),ng()();}r&2&&(Pp(3),hw("ngModel",n.language),YE("p-options",n.languageOptions),G0(),Pp(),hw("ngModel",n.original),YE("p-options",n.optionsList),G0(),Pp(),hw("ngModel",n.translated),G0());},dependencies:[aY,iY,oY,ck,ok,Yo,ga,ya],encapsulation:2,changeDetection:1})}return i})();var qe=i=>({"docs-sample-code-tabs":i}),Se=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Radio Group - Translator"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      [(ngModel)]="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage($event)"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      [(ngModel)]="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage($event)"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      [(ngModel)]="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator',
  templateUrl: './sample-po-radio-group-translator.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupTranslatorComponent {
  language: string = 'es';
  original: string = '';
  translated: string = '';

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  changeLanguage(value) {
    const word = this.wordsOptions.find(item => item.id === this.original);

    if (word) {
      this.translated = word[value || this.language];
    }
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-radio-group-translator"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,qe,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,he],encapsulation:2})}return i})();var fe=(()=>{class i{formBuilder=f(uY);translatorForm;languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:["es",om.required],original:[void 0,om.required],translated:[void 0,om.required]});}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]});}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form"]],standalone:false,decls:5,vars:3,consts:[[3,"formGroup"],[1,"po-row"],["name","language","formControlName","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","original","formControlName","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","translated","formControlName","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4"]],template:function(r,n){r&1&&(wl(0,"form",0)(1,"div",1)(2,"po-radio-group",2),ut("p-change",function(){return n.changeLanguage()}),ng(),$0(),wl(3,"po-select",3),ut("p-change",function(){return n.changeLanguage()}),ng(),$0(),Ul(4,"po-input",4),$0(),ng()()),r&2&&(YE("formGroup",n.translatorForm),Pp(2),YE("p-options",n.languageOptions),G0(),Pp(),YE("p-options",n.optionsList),G0(),Pp(),G0());},dependencies:[aY,iY,oY,vk,gk,Yo,ga,ya],encapsulation:2,changeDetection:1})}return i})();var Ae=i=>({"docs-sample-code-tabs":i}),xe=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Radio Group - Translator Reactive Form"),ng(),wl(4,"a",2),ut("click",function(){return n.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form [formGroup]="translatorForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      formControlName="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage()"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      formControlName="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage()"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      formControlName="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator-reactive-form',
  templateUrl: './sample-po-radio-group-translator-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupTranslatorReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  translatorForm: UntypedFormGroup;

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  ngOnInit() {
    this.translatorForm = this.formBuilder.group({
      language: ['es', Validators.required],
      original: [undefined, Validators.required],
      translated: [undefined, Validators.required]
    });
  }

  changeLanguage() {
    const language = this.translatorForm.value.language;
    const original = this.translatorForm.value.original;

    const word = this.wordsOptions.find(item => item.id === original);

    if (word) {
      this.translatorForm.patchValue({
        translated: word[language]
      });
    }
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-radio-group-translator-reactive-form"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+n.sampleCodeButtonIcon),Pp(),cg(" ",n.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ae,n.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,fe],encapsulation:2})}return i})();var ve=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-doc"]],standalone:false,decls:938,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo"],["href","/documentation/po-select"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://doc.animaliads.io/docs/components/radio"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoRadioGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,n){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoRadioGroupComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,"O componente "),wl(24,"code"),Ux(25,"po-radio-group"),ng(),Ux(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),wl(27,"a",6)(28,"strong"),Ux(29,"po-combo"),ng()(),Ux(30," ou "),wl(31,"a",7)(32,"strong"),Ux(33,"po-select"),ng()(),Ux(34,"."),ng(),wl(35,"p"),Ux(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),wl(37,"a",8)(38,"strong"),Ux(39,"po-checkbox-group"),ng()(),Ux(40,"."),ng(),wl(41,"blockquote")(42,"p"),Ux(43,"Ao passar um valor para o "),wl(44,"em"),Ux(45,"model"),ng(),Ux(46," que n\xE3o esteja na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),wl(47,"code"),Ux(48,"undefined"),ng(),Ux(49,"."),ng()(),wl(50,"h4"),Ux(51,"Acessibilidade tratada no componente interno "),wl(52,"code"),Ux(53,"po-radio"),ng(),Ux(54,":"),ng(),wl(55,"p"),Ux(56,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),ng(),wl(57,"ul")(58,"li"),Ux(59,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),wl(60,"a",9),Ux(61,"WCAG 4.1.2: Name, Role, Value"),ng()(),wl(62,"li"),Ux(63,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferen\xE7a visual entre os estados. "),wl(64,"a",10),Ux(65,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),ng()(),wl(66,"li"),Ux(67,"Quando em foco, o componente \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),wl(68,"a",11),Ux(69,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),ng()(),wl(70,"li"),Ux(71,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),wl(72,"a",12),Ux(73,"(WCAG 2.4.12: Focus Appearance"),ng()()(),wl(74,"p"),Ux(75,"Conforme documenta\xE7\xE3o em: "),wl(76,"a",13),Ux(77,"https://doc.animaliads.io/docs/components/radio"),ng()(),wl(78,"h4"),Ux(79,"Tokens customiz\xE1veis"),ng(),wl(80,"p"),Ux(81,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Ul(82,"br"),Ux(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),wl(84,"code"),Ux(85,"po-radio"),ng(),Ux(86," que comp\xF5em o grupo de op\xE7\xF5es. "),Ul(87,"br"),Ux(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),wl(89,"code"),Ux(90,"po-radio"),ng(),Ux(91," em vez do pr\xF3prio "),wl(92,"code"),Ux(93,"po-radio-group"),ng(),Ux(94,"."),ng(),wl(95,"blockquote")(96,"p"),Ux(97,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(98,"a",14),Ux(99,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(100,"."),ng()(),wl(101,"table")(102,"thead")(103,"tr")(104,"th"),Ux(105,"Propriedade"),ng(),wl(106,"th"),Ux(107,"Descri\xE7\xE3o"),ng(),wl(108,"th"),Ux(109,"Valor Padr\xE3o"),ng()()(),wl(110,"tbody")(111,"tr")(112,"td")(113,"strong"),Ux(114,"Default Values"),ng()(),Ul(115,"td")(116,"td"),ng(),wl(117,"tr")(118,"td")(119,"code"),Ux(120,"--border-color"),ng()(),wl(121,"td"),Ux(122,"Cor da borda"),ng(),wl(123,"td")(124,"code"),Ux(125,"var(--color-neutral-dark-70)"),ng()()(),wl(126,"tr")(127,"td")(128,"code"),Ux(129,"--field-container-title-justify"),ng()(),wl(130,"td"),Ux(131,"Alinhamento horizontal do t\xEDtulo ("),wl(132,"code"),Ux(133,"justify-content"),ng(),Ux(134,")"),ng(),wl(135,"td")(136,"code"),Ux(137,"space-between"),ng()()(),wl(138,"tr")(139,"td")(140,"code"),Ux(141,"--field-container-title-flex"),ng()(),wl(142,"td"),Ux(143,"Flex do t\xEDtulo ("),wl(144,"code"),Ux(145,"flex"),ng(),Ux(146,")"),ng(),wl(147,"td")(148,"code"),Ux(149,"1 auto"),ng()()(),wl(150,"tr")(151,"td")(152,"strong"),Ux(153,"Hover"),ng()(),Ul(154,"td")(155,"td"),ng(),wl(156,"tr")(157,"td")(158,"code"),Ux(159,"--shadow-color-hover"),ng()(),wl(160,"td"),Ux(161,"Cor da sombra no estado hover"),ng(),wl(162,"td")(163,"code"),Ux(164,"var(--color-brand-01-lighter)"),ng()()(),wl(165,"tr")(166,"td")(167,"code"),Ux(168,"--color-hover"),ng()(),wl(169,"td"),Ux(170,"Cor principal no estado hover"),ng(),wl(171,"td")(172,"code"),Ux(173,"var(--color-brand-01-dark)"),ng()()(),wl(174,"tr")(175,"td")(176,"strong"),Ux(177,"Focused"),ng()(),Ul(178,"td")(179,"td"),ng(),wl(180,"tr")(181,"td")(182,"code"),Ux(183,"--outline-color-focused"),ng()(),wl(184,"td"),Ux(185,"Cor do outline do estado de focus"),ng(),wl(186,"td")(187,"code"),Ux(188,"var(--color-brand-01-darkest)"),ng()()(),wl(189,"tr")(190,"td")(191,"strong"),Ux(192,"checked"),ng()(),Ul(193,"td")(194,"td"),ng(),wl(195,"tr")(196,"td")(197,"code"),Ux(198,"--color-unchecked"),ng()(),wl(199,"td"),Ux(200,"Cor quando n\xE3o selecionado"),ng(),wl(201,"td")(202,"code"),Ux(203,"var(--color-neutral-light-00)"),ng()()(),wl(204,"tr")(205,"td")(206,"code"),Ux(207,"--color-checked"),ng()(),wl(208,"td"),Ux(209,"Cor quando selecionado"),ng(),wl(210,"td")(211,"code"),Ux(212,"var(--color-action-default)"),ng()()(),wl(213,"tr")(214,"td")(215,"strong"),Ux(216,"Disabled"),ng()(),Ul(217,"td")(218,"td"),ng(),wl(219,"tr")(220,"td")(221,"code"),Ux(222,"--color-unchecked-disabled"),ng()(),wl(223,"td"),Ux(224,"Cor pricipal quando n\xE3o selecionado no estado disabled"),ng(),wl(225,"td")(226,"code"),Ux(227,"var(--color-neutral-light-30)"),ng()()(),wl(228,"tr")(229,"td")(230,"code"),Ux(231,"--color-checked-disabled"),ng()(),wl(232,"td"),Ux(233,"Cor pricipal quando selecionado no estado disabled"),ng(),wl(234,"td")(235,"code"),Ux(236,"var(--color-neutral-dark-70)"),ng()()()()()(),wl(237,"div",15)(238,"h4",16),Ux(239,"Seletor"),ng(),wl(240,"pre",17),Ux(241,`<po-radio-group
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    p-columns="number"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-optional="boolean"
    p-options="PoRadioGroupOption[]"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-radio-group>
`),ng()(),wl(242,"h4",18),Ux(243,"Propriedades"),ng(),wl(244,"table",19)(245,"tr",20)(246,"th",21),Ux(247,"Nome"),ng(),wl(248,"th",21),Ux(249,"Tipo"),ng(),wl(250,"th",21),Ux(251,"Padr\xE3o"),ng(),wl(252,"th",21),Ux(253,"Descri\xE7\xE3o"),ng()(),wl(254,"tr",22)(255,"td",23)(256,"div",24)(257,"span",25),Ux(258," (p-additional-help)"),Ul(259,"br"),ng()(),wl(260,"div",26),Ux(261,"Deprecated"),ng()(),wl(262,"td",27)(263,"code",28),Ux(264,"EventEmitter"),ng()(),wl(265,"td",29),Ux(266,"-"),ng(),wl(267,"td",30)(268,"em")(269,"strong"),Ux(270,"(opcional)"),ng()(),wl(271,"p"),Ux(272,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(273,"blockquote")(274,"p"),Ux(275,"Essa propriedade est\xE1 "),wl(276,"strong"),Ux(277,"depreciada"),ng(),Ux(278," e ser\xE1 removida na vers\xE3o "),wl(279,"code"),Ux(280,"23.x.x"),ng(),Ux(281,". Recomendamos utilizar a propriedade "),wl(282,"code"),Ux(283,"p-helper"),ng(),Ux(284," que oferece mais recursos e flexibilidade."),ng()()()(),wl(285,"tr",22)(286,"td",23)(287,"div",31)(288,"span",32),Ux(289," p-additional-help-tooltip"),Ul(290,"br"),ng()(),wl(291,"div",26),Ux(292,"Deprecated"),ng()(),wl(293,"td",27)(294,"code",33),Ux(295,"string"),ng()(),wl(296,"td",29),Ux(297,"-"),ng(),wl(298,"td",30)(299,"em")(300,"strong"),Ux(301,"(opcional)"),ng()(),wl(302,"p"),Ux(303,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(304,"code"),Ux(305,"po-helper"),ng(),Ux(306,`.
`),wl(307,"strong"),Ux(308,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(309,"blockquote")(310,"p"),Ux(311,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(312,"blockquote")(313,"p"),Ux(314,"Essa propriedade est\xE1 "),wl(315,"strong"),Ux(316,"depreciada"),ng(),Ux(317," e ser\xE1 removida na vers\xE3o "),wl(318,"code"),Ux(319,"23.x.x"),ng(),Ux(320,". Recomendamos utilizar a propriedade "),wl(321,"code"),Ux(322,"p-helper"),ng(),Ux(323," que oferece mais recursos e flexibilidade."),ng()()()(),wl(324,"tr",22)(325,"td",23)(326,"div",31)(327,"span",32),Ux(328," p-append-in-body"),Ul(329,"br"),ng()()(),wl(330,"td",27)(331,"code",34),Ux(332,"boolean"),ng()(),wl(333,"td",29)(334,"p")(335,"code"),Ux(336,"false"),ng()()(),wl(337,"td",30)(338,"em")(339,"strong"),Ux(340,"(opcional)"),ng()(),wl(341,"p"),Ux(342,"Define que o popover ("),wl(343,"code"),Ux(344,"p-helper"),ng(),Ux(345," e/ou "),wl(346,"code"),Ux(347,"p-error-limit"),ng(),Ux(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ng(),wl(349,"blockquote")(350,"p"),Ux(351,"Quando utilizado com "),wl(352,"code"),Ux(353,"p-helper"),ng(),Ux(354,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(355,"tr",22)(356,"td",23)(357,"div",31)(358,"span",32),Ux(359," p-auto-focus"),Ul(360,"br"),ng()()(),wl(361,"td",27)(362,"code",34),Ux(363,"boolean"),ng()(),wl(364,"td",29)(365,"p")(366,"code"),Ux(367,"false"),ng()()(),wl(368,"td",30)(369,"em")(370,"strong"),Ux(371,"(opcional)"),ng()(),wl(372,"p"),Ux(373,"Aplica foco no elemento ao ser iniciado."),ng(),wl(374,"blockquote")(375,"p"),Ux(376,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),ng()()()(),wl(377,"tr",22)(378,"td",23)(379,"div",24)(380,"span",25),Ux(381," (p-change)"),Ul(382,"br"),ng()()(),wl(383,"td",27)(384,"code",28),Ux(385,"EventEmitter"),ng()(),wl(386,"td",29),Ux(387,"-"),ng(),wl(388,"td",30)(389,"em")(390,"strong"),Ux(391,"(opcional)"),ng()(),wl(392,"p"),Ux(393,"Evento ao alterar valor do campo."),ng()()(),wl(394,"tr",22)(395,"td",23)(396,"div",31)(397,"span",32),Ux(398," p-columns"),Ul(399,"br"),ng()()(),wl(400,"td",27)(401,"code",35),Ux(402,"number"),ng()(),wl(403,"td",29)(404,"p")(405,"code"),Ux(406,"2"),ng()()(),wl(407,"td",30)(408,"em")(409,"strong"),Ux(410,"(opcional)"),ng()(),wl(411,"p"),Ux(412,"Define a quantidade de colunas para exibi\xE7\xE3o das op\xE7\xF5es."),ng(),wl(413,"p")(414,"strong"),Ux(415,"Considera\xE7\xF5es:"),ng()(),wl(416,"ul")(417,"li"),Ux(418,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),wl(419,"code"),Ux(420,"1"),ng(),Ux(421," e "),wl(422,"code"),Ux(423,"4"),ng(),Ux(424," colunas."),ng(),wl(425,"li"),Ux(426,"O n\xFAmero m\xE1ximo de colunas \xE9 invari\xE1vel nas seguintes resolu\xE7\xF5es:"),wl(427,"ul")(428,"li")(429,"code"),Ux(430,"sm"),ng(),Ux(431,": "),wl(432,"code"),Ux(433,"1"),ng()(),wl(434,"li")(435,"code"),Ux(436,"md"),ng(),Ux(437,": "),wl(438,"code"),Ux(439,"2"),ng()()()()()()(),wl(440,"tr",22)(441,"td",23)(442,"div",31)(443,"span",32),Ux(444," p-compact-label"),Ul(445,"br"),ng()()(),wl(446,"td",27)(447,"code",34),Ux(448,"boolean"),ng()(),wl(449,"td",29)(450,"p")(451,"code"),Ux(452,"false"),ng()()(),wl(453,"td",30)(454,"em")(455,"strong"),Ux(456,"(opcional)"),ng()(),wl(457,"p"),Ux(458,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(459,"p"),Ux(460,"Quando habilitado ("),wl(461,"code"),Ux(462,"true"),ng(),Ux(463,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(464,"ul")(465,"li")(466,"code"),Ux(467,"po-label"),ng()(),wl(468,"li")(469,"code"),Ux(470,"p-requirement (showRequired)"),ng()(),wl(471,"li")(472,"code"),Ux(473,"po-helper"),ng()()(),wl(474,"p"),Ux(475,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(476,"p"),Ux(477,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(478,"ul")(479,"li")(480,"code"),Ux(481,"--field-container-title-justify"),ng()(),wl(482,"li")(483,"code"),Ux(484,"--field-container-title-flex"),ng()()(),wl(485,"p"),Ux(486,"Exemplo:"),ng(),wl(487,"pre")(488,"code"),Ux(489,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(490,"p"),Ux(491,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(492,"tr",22)(493,"td",23)(494,"div",31)(495,"span",32),Ux(496," p-disabled"),Ul(497,"br"),ng()()(),wl(498,"td",27)(499,"code",34),Ux(500,"boolean"),ng()(),wl(501,"td",29)(502,"p")(503,"code"),Ux(504,"false"),ng()()(),wl(505,"td",30)(506,"em")(507,"strong"),Ux(508,"(opcional)"),ng()(),wl(509,"p"),Ux(510,"Indica que o campo ser\xE1 desabilitado."),ng()()(),wl(511,"tr",22)(512,"td",23)(513,"div",31)(514,"span",32),Ux(515," p-error-limit"),Ul(516,"br"),ng()()(),wl(517,"td",27)(518,"code",34),Ux(519,"boolean"),ng()(),wl(520,"td",29)(521,"p")(522,"code"),Ux(523,"false"),ng()()(),wl(524,"td",30)(525,"em")(526,"strong"),Ux(527,"(opcional)"),ng()(),wl(528,"p"),Ux(529,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(530,"blockquote")(531,"p"),Ux(532,"Caso essa propriedade seja definida como "),wl(533,"code"),Ux(534,"true"),ng(),Ux(535,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()()()(),wl(536,"tr",22)(537,"td",23)(538,"div",31)(539,"span",32),Ux(540," p-field-error-message"),Ul(541,"br"),ng()()(),wl(542,"td",27)(543,"code",33),Ux(544,"string"),ng()(),wl(545,"td",29),Ux(546,"-"),ng(),wl(547,"td",30)(548,"em")(549,"strong"),Ux(550,"(opcional)"),ng()(),wl(551,"p"),Ux(552,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),ng(),wl(553,"blockquote")(554,"p"),Ux(555,"Necess\xE1rio que a propriedade "),wl(556,"code"),Ux(557,"p-required"),ng(),Ux(558," esteja habilitada."),ng()()()(),wl(559,"tr",22)(560,"td",23)(561,"div",31)(562,"span",32),Ux(563," p-help"),Ul(564,"br"),ng()()(),wl(565,"td",27)(566,"code",33),Ux(567,"string"),ng()(),wl(568,"td",29),Ux(569,"-"),ng(),wl(570,"td",30)(571,"em")(572,"strong"),Ux(573,"(opcional)"),ng()(),wl(574,"p"),Ux(575,"Texto de apoio do campo."),ng()()(),wl(576,"tr",22)(577,"td",23)(578,"div",24)(579,"span",25),Ux(580," (p-keydown)"),Ul(581,"br"),ng()()(),wl(582,"td",27)(583,"code",28),Ux(584,"EventEmitter"),ng()(),wl(585,"td",29),Ux(586,"-"),ng(),wl(587,"td",30)(588,"em")(589,"strong"),Ux(590,"(opcional)"),ng()(),wl(591,"p"),Ux(592,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(593,"code"),Ux(594,"KeyboardEvent"),ng(),Ux(595," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(596,"tr",22)(597,"td",23)(598,"div",31)(599,"span",32),Ux(600," p-label"),Ul(601,"br"),ng()()(),wl(602,"td",27)(603,"code",33),Ux(604,"string"),ng()(),wl(605,"td",29),Ux(606,"-"),ng(),wl(607,"td",30)(608,"em")(609,"strong"),Ux(610,"(opcional)"),ng()(),wl(611,"p"),Ux(612,"Label do campo."),ng()()(),wl(613,"tr",22)(614,"td",23)(615,"div",31)(616,"span",32),Ux(617," p-label-text-wrap"),Ul(618,"br"),ng()()(),wl(619,"td",27)(620,"code",34),Ux(621,"boolean"),ng()(),wl(622,"td",29)(623,"p")(624,"code"),Ux(625,"false"),ng()()(),wl(626,"td",30)(627,"em")(628,"strong"),Ux(629,"(opcional)"),ng()(),wl(630,"p"),Ux(631,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(632,"code"),Ux(633,"p-label"),ng(),Ux(634,". Quando "),wl(635,"code"),Ux(636,"p-label-text-wrap"),ng(),Ux(637,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(638,"tr",22)(639,"td",23)(640,"div",31)(641,"span",32),Ux(642," name"),Ul(643,"br"),ng()()(),wl(644,"td",27)(645,"code",33),Ux(646,"string"),ng()(),wl(647,"td",29),Ux(648,"-"),ng(),wl(649,"td",30)(650,"p"),Ux(651,"Nome das op\xE7\xF5es."),ng()()(),wl(652,"tr",22)(653,"td",23)(654,"div",31)(655,"span",32),Ux(656," p-optional"),Ul(657,"br"),ng()()(),wl(658,"td",27)(659,"code",34),Ux(660,"boolean"),ng()(),wl(661,"td",29)(662,"p")(663,"code"),Ux(664,"false"),ng()()(),wl(665,"td",30)(666,"em")(667,"strong"),Ux(668,"(opcional)"),ng()(),wl(669,"p"),Ux(670,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(671,"blockquote")(672,"p"),Ux(673,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(674,"ul")(675,"li"),Ux(676,"O campo conter "),wl(677,"code"),Ux(678,"p-required"),ng(),Ux(679,";"),ng(),wl(680,"li"),Ux(681,"N\xE3o possuir "),wl(682,"code"),Ux(683,"p-help"),ng(),Ux(684," e/ou "),wl(685,"code"),Ux(686,"p-label"),ng(),Ux(687,"."),ng()()()(),wl(688,"tr",22)(689,"td",23)(690,"div",31)(691,"span",32),Ux(692," p-options"),Ul(693,"br"),ng()()(),wl(694,"td",27)(695,"code",36),Ux(696,"PoRadioGroupOption[]"),ng()(),wl(697,"td",29),Ux(698,"-"),ng(),wl(699,"td",30)(700,"p"),Ux(701,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),ng()()(),wl(702,"tr",22)(703,"td",23)(704,"div",31)(705,"span",32),Ux(706," p-helper"),Ul(707,"br"),ng()()(),wl(708,"td",27)(709,"code",37),Ux(710,"PoHelperOptions "),ng(),wl(711,"code",33),Ux(712," string"),ng()(),wl(713,"td",29),Ux(714,"-"),ng(),wl(715,"td",30)(716,"em")(717,"strong"),Ux(718,"(opcional)"),ng()(),wl(719,"p"),Ux(720,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(721,"code"),Ux(722,"p-label"),ng(),Ux(723," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(724,"code"),Ux(725,"p-label"),ng(),Ux(726,"."),ng(),wl(727,"blockquote")(728,"p"),Ux(729,"Para mais informa\xE7\xF5es acesse: "),wl(730,"a",38),Ux(731,"https://po-ui.io/documentation/po-helper"),ng(),Ux(732,"."),ng()(),wl(733,"blockquote")(734,"p"),Ux(735,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(736,"code"),Ux(737,"p-additional-help-tooltip"),ng(),Ux(738," e "),wl(739,"code"),Ux(740,"p-additional-help"),ng(),Ux(741,") ser\xE1 ignorado."),ng()()()(),wl(742,"tr",22)(743,"td",23)(744,"div",31)(745,"span",32),Ux(746," p-required"),Ul(747,"br"),ng()()(),wl(748,"td",27)(749,"code",34),Ux(750,"boolean"),ng()(),wl(751,"td",29)(752,"p")(753,"code"),Ux(754,"false"),ng()()(),wl(755,"td",30)(756,"em")(757,"strong"),Ux(758,"(opcional)"),ng()(),wl(759,"p"),Ux(760,"Define que o campo ser\xE1 obrigat\xF3rio."),ng()()(),wl(761,"tr",22)(762,"td",23)(763,"div",31)(764,"span",32),Ux(765," p-show-required"),Ul(766,"br"),ng()()(),wl(767,"td",27)(768,"code",34),Ux(769,"boolean"),ng()(),wl(770,"td",29),Ux(771,"-"),ng(),wl(772,"td",30)(773,"p"),Ux(774,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(775,"blockquote")(776,"p"),Ux(777,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(778,"ul")(779,"li"),Ux(780,"N\xE3o possuir "),wl(781,"code"),Ux(782,"p-help"),ng(),Ux(783," e/ou "),wl(784,"code"),Ux(785,"p-label"),ng(),Ux(786,"."),ng()()()(),wl(787,"tr",22)(788,"td",23)(789,"div",31)(790,"span",32),Ux(791," p-size"),Ul(792,"br"),ng()()(),wl(793,"td",27)(794,"code",33),Ux(795,"string"),ng()(),wl(796,"td",29)(797,"p")(798,"code"),Ux(799,"medium"),ng()()(),wl(800,"td",30)(801,"em")(802,"strong"),Ux(803,"(opcional)"),ng()(),wl(804,"p"),Ux(805,"Define o tamanho dos radios do componente:"),ng(),wl(806,"ul")(807,"li")(808,"code"),Ux(809,"small"),ng(),Ux(810,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(811,"li")(812,"code"),Ux(813,"medium"),ng(),Ux(814,": 24x24."),ng()(),wl(815,"blockquote")(816,"p"),Ux(817,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(818,"code"),Ux(819,"medium"),ng(),Ux(820,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(821,"a",39),Ux(822,"po-theme"),ng(),Ux(823,"."),ng()()()()(),wl(824,"h3",18),Ux(825,"M\xE9todos"),ng(),wl(826,"table",40)(827,"tr",22)(828,"th",41)(829,"div",31)(830,"h4")(831,"span",32),Ux(832," focus "),ng()()()()(),wl(833,"tr",30)(834,"td",30)(835,"p"),Ux(836,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(837,"p"),Ux(838,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(839,"pre")(840,"code"),Ux(841,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),ng()()()()(),Ul(842,"br"),wl(843,"table",40)(844,"tr",22)(845,"th",41)(846,"div",31)(847,"h4")(848,"span",32),Ux(849," showAdditionalHelp "),ng()()()()(),wl(850,"tr",30)(851,"td",30)(852,"p"),Ux(853,"M\xE9todo que exibe "),wl(854,"code"),Ux(855,"p-helper"),ng(),Ux(856," ou executa a a\xE7\xE3o definida em "),wl(857,"code"),Ux(858,"p-helper{eventOnClick}"),ng(),Ux(859," ou em "),wl(860,"code"),Ux(861,"p-additionalHelp"),ng(),Ux(862,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(863,"code"),Ux(864,"p-keydown"),ng(),Ux(865,"."),ng(),wl(866,"blockquote")(867,"p"),Ux(868,"Exibe ou oculta o conte\xFAdo do componente "),wl(869,"code"),Ux(870,"po-helper"),ng(),Ux(871," quando o componente estiver com foco."),ng()(),wl(872,"pre")(873,"code"),Ux(874,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),ng()(),wl(875,"pre")(876,"code"),Ux(877,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(878,"br"),wl(879,"h3"),Ux(880,"Interfaces"),ng(),wl(881,"h4",42)(882,"code",5),Ux(883,"PoRadioGroupOption"),ng()(),wl(884,"div",2)(885,"p"),Ux(886,"Interface para as a\xE7\xF5es do componente po-radio-group."),ng()(),wl(887,"h4",18),Ux(888,"Propriedades"),ng(),wl(889,"table",19)(890,"tr",20)(891,"th",21),Ux(892,"Nome"),ng(),wl(893,"th",21),Ux(894,"Tipo"),ng(),wl(895,"th",21),Ux(896,"Descri\xE7\xE3o"),ng()(),wl(897,"tr",22)(898,"td",23)(899,"div",31)(900,"span",32),Ux(901," disabled"),Ul(902,"br"),ng()()(),wl(903,"td",27)(904,"code",34),Ux(905,"boolean"),ng()(),wl(906,"td",30)(907,"em")(908,"strong"),Ux(909,"(opcional)"),ng()(),wl(910,"p"),Ux(911,"Desabilita o radio."),ng()()(),wl(912,"tr",22)(913,"td",23)(914,"div",31)(915,"span",32),Ux(916," label"),Ul(917,"br"),ng()()(),wl(918,"td",27)(919,"code",33),Ux(920,"string"),ng()(),wl(921,"td",30)(922,"p"),Ux(923,"Texto do radio."),ng()()(),wl(924,"tr",22)(925,"td",23)(926,"div",31)(927,"span",32),Ux(928," value"),Ul(929,"br"),ng()()(),wl(930,"td",27)(931,"code",33),Ux(932,"string "),ng(),wl(933,"code",35),Ux(934," number"),ng()(),wl(935,"td",30)(936,"p"),Ux(937,"Valor do radio."),ng()()()()());},dependencies:[fP],encapsulation:2})}return i})();var Ce=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||i)(C(Xn),C(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Radio Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return n.changeTab("doc")}),Ul(3,"sample-po-radio-group-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return n.changeTab("web")}),Ul(5,"sample-po-radio-group-basic-view")(6,"sample-po-radio-group-labs-view")(7,"sample-po-radio-group-translator-view")(8,"sample-po-radio-group-translator-reactive-form-view"),ng()()()),r&2&&(YE("p-actions",n.actions),Pp(2),YE("p-active",n.activeTab==="doc"),Pp(2),YE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[D3,Vd,Rd,ue,be,Se,xe,ve],encapsulation:2})}return i})();var ze=[{path:"",component:Ce}],we=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[vL.forChild(ze),vL]})}return i})();var Tt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[u5,we]})}return i})();export{Tt as DocPoRadioGroupModule};