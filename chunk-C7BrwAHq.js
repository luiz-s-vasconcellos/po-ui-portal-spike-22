import {f as fe$1,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,cM as nY,cN as lm,c8 as Pde,M as Wl,T as tw,bM as fN,a7 as uN,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,bH as E3,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,bd as xx,aO as Dw,aP as t0,aJ as Ghe,cQ as Rk,cR as Tk,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var Ce=()=>({label:"Option 1",value:"1"}),we=()=>({label:"Option 2",value:"2"}),ye=(i,ve)=>[i,ve],de=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic"]],standalone:false,decls:1,vars:6,consts:[["name","radioGroupBasic","p-label","PO Radio Group",3,"p-options"]],template:function(r,n){r&1&&Wl(0,"po-radio-group",0),r&2&&tw("p-options",fN(3,ye,uN(1,Ce),uN(2,we)));},dependencies:[Pde],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Radio Group Basic"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-radio-group-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Te,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,de],encapsulation:2})}return i})();var ue=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];ngOnInit(){this.restore();}addOption(){this.options.push(this.option),this.option=this.getNewOption();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.event="",this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage="",this.size="medium",this.option=this.getNewOption(),this.options=[];}getNewOption(){return {label:void 0,value:void 0}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs"]],standalone:false,decls:26,vars:31,consts:[["optionForm","ngForm"],["propertiesForm","ngForm"],["name","radioGroupLabs",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-label","p-optional","p-options","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionDisabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"click"]],template:function(r,n){if(r&1){let m=Ex();Sl(0,"po-radio-group",2),Ew("ngModelChange",function(l){return Xy(m),tN(n.radioGroup,l)||(n.radioGroup=l),Qy(l)}),ht("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",3),Wl(3,"po-info",4)(4,"po-info",5),sg(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"div",3)(9,"po-input",6),Ew("ngModelChange",function(l){return Xy(m),tN(n.option.label,l)||(n.option.label=l),Qy(l)}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(l){return Xy(m),tN(n.option.value,l)||(n.option.value=l),Qy(l)}),sg(),JA(),Sl(11,"po-switch",8),Ew("ngModelChange",function(l){return Xy(m),tN(n.option.disabled,l)||(n.option.disabled=l),Qy(l)}),sg(),JA(),sg(),Sl(12,"div",3)(13,"po-button",9),ht("p-click",function(){Xy(m);let l=xx(7);return n.addOption(),Qy(l.reset())}),sg()()(),Wl(14,"po-divider"),Sl(15,"form",null,1)(17,"po-input",10),Ew("ngModelChange",function(l){return Xy(m),tN(n.label,l)||(n.label=l),Qy(l)}),sg(),JA(),Sl(18,"po-input",11),Ew("ngModelChange",function(l){return Xy(m),tN(n.help,l)||(n.help=l),Qy(l)}),sg(),JA(),Sl(19,"po-input",12),Ew("ngModelChange",function(l){return Xy(m),tN(n.helperText,l)||(n.helperText=l),Qy(l)}),sg(),JA(),Sl(20,"po-input",13),Ew("ngModelChange",function(l){return Xy(m),tN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Qy(l)}),sg(),JA(),Sl(21,"po-radio-group",14),Ew("ngModelChange",function(l){return Xy(m),tN(n.columns,l)||(n.columns=l),Qy(l)}),sg(),JA(),Sl(22,"po-checkbox-group",15),Ew("ngModelChange",function(l){return Xy(m),tN(n.properties,l)||(n.properties=l),Qy(l)}),sg(),JA(),Sl(23,"po-radio-group",16),Ew("ngModelChange",function(l){return Xy(m),tN(n.size,l)||(n.size=l),Qy(l)}),sg(),JA(),Sl(24,"div",3)(25,"po-button",17),ht("click",function(){return Xy(m),xx(16).reset(),Qy(n.restore())}),sg()()();}if(r&2){let m=xx(7);Dw("ngModel",n.radioGroup),tw("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel")),t0(),Vp(3),tw("p-value",n.radioGroup),Vp(),tw("p-value",n.event),Vp(5),Dw("ngModel",n.option.label),t0(),Vp(),Dw("ngModel",n.option.value),t0(),Vp(),Dw("ngModel",n.option.disabled),t0(),Vp(2),tw("p-disabled",m.invalid),Vp(4),Dw("ngModel",n.label),t0(),Vp(),Dw("ngModel",n.help),t0(),Vp(),Dw("ngModel",n.helperText),t0(),Vp(),Dw("ngModel",n.fieldErrorMessage),t0(),Vp(),Dw("ngModel",n.columns),tw("p-options",n.columnOptions),t0(),Vp(),Dw("ngModel",n.properties),tw("p-options",n.propertiesOptions),t0(),Vp(),Dw("ngModel",n.size),tw("p-options",n.sizesOptions),t0();}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Pde,E3,Qhe],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Radio Group Labs"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-radio-group
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-radio-group-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Re,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ue],encapsulation:2})}return i})();var ge=(()=>{class i{language="es";original="";translated="";languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language]);}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator"]],standalone:false,decls:6,vars:5,consts:[["f","ngForm"],[1,"po-row"],["name","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let m=Ex();Sl(0,"form",null,0)(2,"div",1)(3,"po-radio-group",2),Ew("ngModelChange",function(l){return Xy(m),tN(n.language,l)||(n.language=l),Qy(l)}),ht("p-change",function(l){return n.changeLanguage(l)}),sg(),JA(),Sl(4,"po-select",3),Ew("ngModelChange",function(l){return Xy(m),tN(n.original,l)||(n.original=l),Qy(l)}),ht("p-change",function(l){return n.changeLanguage(l)}),sg(),JA(),Sl(5,"po-input",4),Ew("ngModelChange",function(l){return Xy(m),tN(n.translated,l)||(n.translated=l),Qy(l)}),sg(),JA(),sg()();}r&2&&(Vp(3),Dw("ngModel",n.language),tw("p-options",n.languageOptions),t0(),Vp(),Dw("ngModel",n.original),tw("p-options",n.optionsList),t0(),Vp(),Dw("ngModel",n.translated),t0());},dependencies:[J9,K9,X9,Dk,vk,F3,Pde,Ghe],encapsulation:2,changeDetection:1})}return i})();var Le=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Radio Group - Translator"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<form #f="ngForm">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-radio-group-translator"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Le,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ge],encapsulation:2})}return i})();var be=(()=>{class i{formBuilder=f(nY);translatorForm;languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:["es",lm.required],original:[void 0,lm.required],translated:[void 0,lm.required]});}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]});}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form"]],standalone:false,decls:5,vars:3,consts:[[3,"formGroup"],[1,"po-row"],["name","language","formControlName","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","original","formControlName","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","translated","formControlName","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4"]],template:function(r,n){r&1&&(Sl(0,"form",0)(1,"div",1)(2,"po-radio-group",2),ht("p-change",function(){return n.changeLanguage()}),sg(),JA(),Sl(3,"po-select",3),ht("p-change",function(){return n.changeLanguage()}),sg(),JA(),Wl(4,"po-input",4),JA(),sg()()),r&2&&(tw("formGroup",n.translatorForm),Vp(2),tw("p-options",n.languageOptions),t0(),Vp(),tw("p-options",n.optionsList),t0(),Vp(),t0());},dependencies:[J9,K9,X9,Rk,Tk,F3,Pde,Ghe],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Radio Group - Translator Reactive Form"),sg(),Sl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<form [formGroup]="translatorForm">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-radio-group-translator-reactive-form"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,De,n.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,be],encapsulation:2})}return i})();var Se=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-doc"]],standalone:false,decls:938,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo"],["href","/documentation/po-select"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://doc.animaliads.io/docs/components/radio"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoRadioGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,n){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoRadioGroupComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,"O componente "),Sl(24,"code"),Jx(25,"po-radio-group"),sg(),Jx(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),Sl(27,"a",6)(28,"strong"),Jx(29,"po-combo"),sg()(),Jx(30," ou "),Sl(31,"a",7)(32,"strong"),Jx(33,"po-select"),sg()(),Jx(34,"."),sg(),Sl(35,"p"),Jx(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),Sl(37,"a",8)(38,"strong"),Jx(39,"po-checkbox-group"),sg()(),Jx(40,"."),sg(),Sl(41,"blockquote")(42,"p"),Jx(43,"Ao passar um valor para o "),Sl(44,"em"),Jx(45,"model"),sg(),Jx(46," que n\xE3o esteja na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),Sl(47,"code"),Jx(48,"undefined"),sg(),Jx(49,"."),sg()(),Sl(50,"h4"),Jx(51,"Acessibilidade tratada no componente interno "),Sl(52,"code"),Jx(53,"po-radio"),sg(),Jx(54,":"),sg(),Sl(55,"p"),Jx(56,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Sl(57,"ul")(58,"li"),Jx(59,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),Sl(60,"a",9),Jx(61,"WCAG 4.1.2: Name, Role, Value"),sg()(),Sl(62,"li"),Jx(63,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferen\xE7a visual entre os estados. "),Sl(64,"a",10),Jx(65,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),sg()(),Sl(66,"li"),Jx(67,"Quando em foco, o componente \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Sl(68,"a",11),Jx(69,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),sg()(),Sl(70,"li"),Jx(71,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Sl(72,"a",12),Jx(73,"(WCAG 2.4.12: Focus Appearance"),sg()()(),Sl(74,"p"),Jx(75,"Conforme documenta\xE7\xE3o em: "),Sl(76,"a",13),Jx(77,"https://doc.animaliads.io/docs/components/radio"),sg()(),Sl(78,"h4"),Jx(79,"Tokens customiz\xE1veis"),sg(),Sl(80,"p"),Jx(81,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(82,"br"),Jx(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),Sl(84,"code"),Jx(85,"po-radio"),sg(),Jx(86," que comp\xF5em o grupo de op\xE7\xF5es. "),Wl(87,"br"),Jx(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),Sl(89,"code"),Jx(90,"po-radio"),sg(),Jx(91," em vez do pr\xF3prio "),Sl(92,"code"),Jx(93,"po-radio-group"),sg(),Jx(94,"."),sg(),Sl(95,"blockquote")(96,"p"),Jx(97,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(98,"a",14),Jx(99,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(100,"."),sg()(),Sl(101,"table")(102,"thead")(103,"tr")(104,"th"),Jx(105,"Propriedade"),sg(),Sl(106,"th"),Jx(107,"Descri\xE7\xE3o"),sg(),Sl(108,"th"),Jx(109,"Valor Padr\xE3o"),sg()()(),Sl(110,"tbody")(111,"tr")(112,"td")(113,"strong"),Jx(114,"Default Values"),sg()(),Wl(115,"td")(116,"td"),sg(),Sl(117,"tr")(118,"td")(119,"code"),Jx(120,"--border-color"),sg()(),Sl(121,"td"),Jx(122,"Cor da borda"),sg(),Sl(123,"td")(124,"code"),Jx(125,"var(--color-neutral-dark-70)"),sg()()(),Sl(126,"tr")(127,"td")(128,"code"),Jx(129,"--field-container-title-justify"),sg()(),Sl(130,"td"),Jx(131,"Alinhamento horizontal do t\xEDtulo ("),Sl(132,"code"),Jx(133,"justify-content"),sg(),Jx(134,")"),sg(),Sl(135,"td")(136,"code"),Jx(137,"space-between"),sg()()(),Sl(138,"tr")(139,"td")(140,"code"),Jx(141,"--field-container-title-flex"),sg()(),Sl(142,"td"),Jx(143,"Flex do t\xEDtulo ("),Sl(144,"code"),Jx(145,"flex"),sg(),Jx(146,")"),sg(),Sl(147,"td")(148,"code"),Jx(149,"1 auto"),sg()()(),Sl(150,"tr")(151,"td")(152,"strong"),Jx(153,"Hover"),sg()(),Wl(154,"td")(155,"td"),sg(),Sl(156,"tr")(157,"td")(158,"code"),Jx(159,"--shadow-color-hover"),sg()(),Sl(160,"td"),Jx(161,"Cor da sombra no estado hover"),sg(),Sl(162,"td")(163,"code"),Jx(164,"var(--color-brand-01-lighter)"),sg()()(),Sl(165,"tr")(166,"td")(167,"code"),Jx(168,"--color-hover"),sg()(),Sl(169,"td"),Jx(170,"Cor principal no estado hover"),sg(),Sl(171,"td")(172,"code"),Jx(173,"var(--color-brand-01-dark)"),sg()()(),Sl(174,"tr")(175,"td")(176,"strong"),Jx(177,"Focused"),sg()(),Wl(178,"td")(179,"td"),sg(),Sl(180,"tr")(181,"td")(182,"code"),Jx(183,"--outline-color-focused"),sg()(),Sl(184,"td"),Jx(185,"Cor do outline do estado de focus"),sg(),Sl(186,"td")(187,"code"),Jx(188,"var(--color-brand-01-darkest)"),sg()()(),Sl(189,"tr")(190,"td")(191,"strong"),Jx(192,"checked"),sg()(),Wl(193,"td")(194,"td"),sg(),Sl(195,"tr")(196,"td")(197,"code"),Jx(198,"--color-unchecked"),sg()(),Sl(199,"td"),Jx(200,"Cor quando n\xE3o selecionado"),sg(),Sl(201,"td")(202,"code"),Jx(203,"var(--color-neutral-light-00)"),sg()()(),Sl(204,"tr")(205,"td")(206,"code"),Jx(207,"--color-checked"),sg()(),Sl(208,"td"),Jx(209,"Cor quando selecionado"),sg(),Sl(210,"td")(211,"code"),Jx(212,"var(--color-action-default)"),sg()()(),Sl(213,"tr")(214,"td")(215,"strong"),Jx(216,"Disabled"),sg()(),Wl(217,"td")(218,"td"),sg(),Sl(219,"tr")(220,"td")(221,"code"),Jx(222,"--color-unchecked-disabled"),sg()(),Sl(223,"td"),Jx(224,"Cor pricipal quando n\xE3o selecionado no estado disabled"),sg(),Sl(225,"td")(226,"code"),Jx(227,"var(--color-neutral-light-30)"),sg()()(),Sl(228,"tr")(229,"td")(230,"code"),Jx(231,"--color-checked-disabled"),sg()(),Sl(232,"td"),Jx(233,"Cor pricipal quando selecionado no estado disabled"),sg(),Sl(234,"td")(235,"code"),Jx(236,"var(--color-neutral-dark-70)"),sg()()()()()(),Sl(237,"div",15)(238,"h4",16),Jx(239,"Seletor"),sg(),Sl(240,"pre",17),Jx(241,`<po-radio-group
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
`),sg()(),Sl(242,"h4",18),Jx(243,"Propriedades"),sg(),Sl(244,"table",19)(245,"tr",20)(246,"th",21),Jx(247,"Nome"),sg(),Sl(248,"th",21),Jx(249,"Tipo"),sg(),Sl(250,"th",21),Jx(251,"Padr\xE3o"),sg(),Sl(252,"th",21),Jx(253,"Descri\xE7\xE3o"),sg()(),Sl(254,"tr",22)(255,"td",23)(256,"div",24)(257,"span",25),Jx(258," (p-additional-help)"),Wl(259,"br"),sg()(),Sl(260,"div",26),Jx(261,"Deprecated"),sg()(),Sl(262,"td",27)(263,"code",28),Jx(264,"EventEmitter"),sg()(),Sl(265,"td",29),Jx(266,"-"),sg(),Sl(267,"td",30)(268,"em")(269,"strong"),Jx(270,"(opcional)"),sg()(),Sl(271,"p"),Jx(272,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(273,"blockquote")(274,"p"),Jx(275,"Essa propriedade est\xE1 "),Sl(276,"strong"),Jx(277,"depreciada"),sg(),Jx(278," e ser\xE1 removida na vers\xE3o "),Sl(279,"code"),Jx(280,"23.x.x"),sg(),Jx(281,". Recomendamos utilizar a propriedade "),Sl(282,"code"),Jx(283,"p-helper"),sg(),Jx(284," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(285,"tr",22)(286,"td",23)(287,"div",31)(288,"span",32),Jx(289," p-additional-help-tooltip"),Wl(290,"br"),sg()(),Sl(291,"div",26),Jx(292,"Deprecated"),sg()(),Sl(293,"td",27)(294,"code",33),Jx(295,"string"),sg()(),Sl(296,"td",29),Jx(297,"-"),sg(),Sl(298,"td",30)(299,"em")(300,"strong"),Jx(301,"(opcional)"),sg()(),Sl(302,"p"),Jx(303,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(304,"code"),Jx(305,"po-helper"),sg(),Jx(306,`.
`),Sl(307,"strong"),Jx(308,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(309,"blockquote")(310,"p"),Jx(311,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Sl(312,"blockquote")(313,"p"),Jx(314,"Essa propriedade est\xE1 "),Sl(315,"strong"),Jx(316,"depreciada"),sg(),Jx(317," e ser\xE1 removida na vers\xE3o "),Sl(318,"code"),Jx(319,"23.x.x"),sg(),Jx(320,". Recomendamos utilizar a propriedade "),Sl(321,"code"),Jx(322,"p-helper"),sg(),Jx(323," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(324,"tr",22)(325,"td",23)(326,"div",31)(327,"span",32),Jx(328," p-append-in-body"),Wl(329,"br"),sg()()(),Sl(330,"td",27)(331,"code",34),Jx(332,"boolean"),sg()(),Sl(333,"td",29)(334,"p")(335,"code"),Jx(336,"false"),sg()()(),Sl(337,"td",30)(338,"em")(339,"strong"),Jx(340,"(opcional)"),sg()(),Sl(341,"p"),Jx(342,"Define que o popover ("),Sl(343,"code"),Jx(344,"p-helper"),sg(),Jx(345," e/ou "),Sl(346,"code"),Jx(347,"p-error-limit"),sg(),Jx(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Sl(349,"blockquote")(350,"p"),Jx(351,"Quando utilizado com "),Sl(352,"code"),Jx(353,"p-helper"),sg(),Jx(354,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(355,"tr",22)(356,"td",23)(357,"div",31)(358,"span",32),Jx(359," p-auto-focus"),Wl(360,"br"),sg()()(),Sl(361,"td",27)(362,"code",34),Jx(363,"boolean"),sg()(),Sl(364,"td",29)(365,"p")(366,"code"),Jx(367,"false"),sg()()(),Sl(368,"td",30)(369,"em")(370,"strong"),Jx(371,"(opcional)"),sg()(),Sl(372,"p"),Jx(373,"Aplica foco no elemento ao ser iniciado."),sg(),Sl(374,"blockquote")(375,"p"),Jx(376,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Sl(377,"tr",22)(378,"td",23)(379,"div",24)(380,"span",25),Jx(381," (p-change)"),Wl(382,"br"),sg()()(),Sl(383,"td",27)(384,"code",28),Jx(385,"EventEmitter"),sg()(),Sl(386,"td",29),Jx(387,"-"),sg(),Sl(388,"td",30)(389,"em")(390,"strong"),Jx(391,"(opcional)"),sg()(),Sl(392,"p"),Jx(393,"Evento ao alterar valor do campo."),sg()()(),Sl(394,"tr",22)(395,"td",23)(396,"div",31)(397,"span",32),Jx(398," p-columns"),Wl(399,"br"),sg()()(),Sl(400,"td",27)(401,"code",35),Jx(402,"number"),sg()(),Sl(403,"td",29)(404,"p")(405,"code"),Jx(406,"2"),sg()()(),Sl(407,"td",30)(408,"em")(409,"strong"),Jx(410,"(opcional)"),sg()(),Sl(411,"p"),Jx(412,"Define a quantidade de colunas para exibi\xE7\xE3o das op\xE7\xF5es."),sg(),Sl(413,"p")(414,"strong"),Jx(415,"Considera\xE7\xF5es:"),sg()(),Sl(416,"ul")(417,"li"),Jx(418,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),Sl(419,"code"),Jx(420,"1"),sg(),Jx(421," e "),Sl(422,"code"),Jx(423,"4"),sg(),Jx(424," colunas."),sg(),Sl(425,"li"),Jx(426,"O n\xFAmero m\xE1ximo de colunas \xE9 invari\xE1vel nas seguintes resolu\xE7\xF5es:"),Sl(427,"ul")(428,"li")(429,"code"),Jx(430,"sm"),sg(),Jx(431,": "),Sl(432,"code"),Jx(433,"1"),sg()(),Sl(434,"li")(435,"code"),Jx(436,"md"),sg(),Jx(437,": "),Sl(438,"code"),Jx(439,"2"),sg()()()()()()(),Sl(440,"tr",22)(441,"td",23)(442,"div",31)(443,"span",32),Jx(444," p-compact-label"),Wl(445,"br"),sg()()(),Sl(446,"td",27)(447,"code",34),Jx(448,"boolean"),sg()(),Sl(449,"td",29)(450,"p")(451,"code"),Jx(452,"false"),sg()()(),Sl(453,"td",30)(454,"em")(455,"strong"),Jx(456,"(opcional)"),sg()(),Sl(457,"p"),Jx(458,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(459,"p"),Jx(460,"Quando habilitado ("),Sl(461,"code"),Jx(462,"true"),sg(),Jx(463,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(464,"ul")(465,"li")(466,"code"),Jx(467,"po-label"),sg()(),Sl(468,"li")(469,"code"),Jx(470,"p-requirement (showRequired)"),sg()(),Sl(471,"li")(472,"code"),Jx(473,"po-helper"),sg()()(),Sl(474,"p"),Jx(475,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(476,"p"),Jx(477,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(478,"ul")(479,"li")(480,"code"),Jx(481,"--field-container-title-justify"),sg()(),Sl(482,"li")(483,"code"),Jx(484,"--field-container-title-flex"),sg()()(),Sl(485,"p"),Jx(486,"Exemplo:"),sg(),Sl(487,"pre")(488,"code"),Jx(489,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(490,"p"),Jx(491,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(492,"tr",22)(493,"td",23)(494,"div",31)(495,"span",32),Jx(496," p-disabled"),Wl(497,"br"),sg()()(),Sl(498,"td",27)(499,"code",34),Jx(500,"boolean"),sg()(),Sl(501,"td",29)(502,"p")(503,"code"),Jx(504,"false"),sg()()(),Sl(505,"td",30)(506,"em")(507,"strong"),Jx(508,"(opcional)"),sg()(),Sl(509,"p"),Jx(510,"Indica que o campo ser\xE1 desabilitado."),sg()()(),Sl(511,"tr",22)(512,"td",23)(513,"div",31)(514,"span",32),Jx(515," p-error-limit"),Wl(516,"br"),sg()()(),Sl(517,"td",27)(518,"code",34),Jx(519,"boolean"),sg()(),Sl(520,"td",29)(521,"p")(522,"code"),Jx(523,"false"),sg()()(),Sl(524,"td",30)(525,"em")(526,"strong"),Jx(527,"(opcional)"),sg()(),Sl(528,"p"),Jx(529,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Sl(530,"blockquote")(531,"p"),Jx(532,"Caso essa propriedade seja definida como "),Sl(533,"code"),Jx(534,"true"),sg(),Jx(535,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Sl(536,"tr",22)(537,"td",23)(538,"div",31)(539,"span",32),Jx(540," p-field-error-message"),Wl(541,"br"),sg()()(),Sl(542,"td",27)(543,"code",33),Jx(544,"string"),sg()(),Sl(545,"td",29),Jx(546,"-"),sg(),Sl(547,"td",30)(548,"em")(549,"strong"),Jx(550,"(opcional)"),sg()(),Sl(551,"p"),Jx(552,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),sg(),Sl(553,"blockquote")(554,"p"),Jx(555,"Necess\xE1rio que a propriedade "),Sl(556,"code"),Jx(557,"p-required"),sg(),Jx(558," esteja habilitada."),sg()()()(),Sl(559,"tr",22)(560,"td",23)(561,"div",31)(562,"span",32),Jx(563," p-help"),Wl(564,"br"),sg()()(),Sl(565,"td",27)(566,"code",33),Jx(567,"string"),sg()(),Sl(568,"td",29),Jx(569,"-"),sg(),Sl(570,"td",30)(571,"em")(572,"strong"),Jx(573,"(opcional)"),sg()(),Sl(574,"p"),Jx(575,"Texto de apoio do campo."),sg()()(),Sl(576,"tr",22)(577,"td",23)(578,"div",24)(579,"span",25),Jx(580," (p-keydown)"),Wl(581,"br"),sg()()(),Sl(582,"td",27)(583,"code",28),Jx(584,"EventEmitter"),sg()(),Sl(585,"td",29),Jx(586,"-"),sg(),Sl(587,"td",30)(588,"em")(589,"strong"),Jx(590,"(opcional)"),sg()(),Sl(591,"p"),Jx(592,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(593,"code"),Jx(594,"KeyboardEvent"),sg(),Jx(595," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(596,"tr",22)(597,"td",23)(598,"div",31)(599,"span",32),Jx(600," p-label"),Wl(601,"br"),sg()()(),Sl(602,"td",27)(603,"code",33),Jx(604,"string"),sg()(),Sl(605,"td",29),Jx(606,"-"),sg(),Sl(607,"td",30)(608,"em")(609,"strong"),Jx(610,"(opcional)"),sg()(),Sl(611,"p"),Jx(612,"Label do campo."),sg()()(),Sl(613,"tr",22)(614,"td",23)(615,"div",31)(616,"span",32),Jx(617," p-label-text-wrap"),Wl(618,"br"),sg()()(),Sl(619,"td",27)(620,"code",34),Jx(621,"boolean"),sg()(),Sl(622,"td",29)(623,"p")(624,"code"),Jx(625,"false"),sg()()(),Sl(626,"td",30)(627,"em")(628,"strong"),Jx(629,"(opcional)"),sg()(),Sl(630,"p"),Jx(631,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(632,"code"),Jx(633,"p-label"),sg(),Jx(634,". Quando "),Sl(635,"code"),Jx(636,"p-label-text-wrap"),sg(),Jx(637,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Sl(638,"tr",22)(639,"td",23)(640,"div",31)(641,"span",32),Jx(642," name"),Wl(643,"br"),sg()()(),Sl(644,"td",27)(645,"code",33),Jx(646,"string"),sg()(),Sl(647,"td",29),Jx(648,"-"),sg(),Sl(649,"td",30)(650,"p"),Jx(651,"Nome das op\xE7\xF5es."),sg()()(),Sl(652,"tr",22)(653,"td",23)(654,"div",31)(655,"span",32),Jx(656," p-optional"),Wl(657,"br"),sg()()(),Sl(658,"td",27)(659,"code",34),Jx(660,"boolean"),sg()(),Sl(661,"td",29)(662,"p")(663,"code"),Jx(664,"false"),sg()()(),Sl(665,"td",30)(666,"em")(667,"strong"),Jx(668,"(opcional)"),sg()(),Sl(669,"p"),Jx(670,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Sl(671,"blockquote")(672,"p"),Jx(673,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(674,"ul")(675,"li"),Jx(676,"O campo conter "),Sl(677,"code"),Jx(678,"p-required"),sg(),Jx(679,";"),sg(),Sl(680,"li"),Jx(681,"N\xE3o possuir "),Sl(682,"code"),Jx(683,"p-help"),sg(),Jx(684," e/ou "),Sl(685,"code"),Jx(686,"p-label"),sg(),Jx(687,"."),sg()()()(),Sl(688,"tr",22)(689,"td",23)(690,"div",31)(691,"span",32),Jx(692," p-options"),Wl(693,"br"),sg()()(),Sl(694,"td",27)(695,"code",36),Jx(696,"PoRadioGroupOption[]"),sg()(),Sl(697,"td",29),Jx(698,"-"),sg(),Sl(699,"td",30)(700,"p"),Jx(701,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),sg()()(),Sl(702,"tr",22)(703,"td",23)(704,"div",31)(705,"span",32),Jx(706," p-helper"),Wl(707,"br"),sg()()(),Sl(708,"td",27)(709,"code",37),Jx(710,"PoHelperOptions "),sg(),Sl(711,"code",33),Jx(712," string"),sg()(),Sl(713,"td",29),Jx(714,"-"),sg(),Sl(715,"td",30)(716,"em")(717,"strong"),Jx(718,"(opcional)"),sg()(),Sl(719,"p"),Jx(720,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(721,"code"),Jx(722,"p-label"),sg(),Jx(723," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(724,"code"),Jx(725,"p-label"),sg(),Jx(726,"."),sg(),Sl(727,"blockquote")(728,"p"),Jx(729,"Para mais informa\xE7\xF5es acesse: "),Sl(730,"a",38),Jx(731,"https://po-ui.io/documentation/po-helper"),sg(),Jx(732,"."),sg()(),Sl(733,"blockquote")(734,"p"),Jx(735,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(736,"code"),Jx(737,"p-additional-help-tooltip"),sg(),Jx(738," e "),Sl(739,"code"),Jx(740,"p-additional-help"),sg(),Jx(741,") ser\xE1 ignorado."),sg()()()(),Sl(742,"tr",22)(743,"td",23)(744,"div",31)(745,"span",32),Jx(746," p-required"),Wl(747,"br"),sg()()(),Sl(748,"td",27)(749,"code",34),Jx(750,"boolean"),sg()(),Sl(751,"td",29)(752,"p")(753,"code"),Jx(754,"false"),sg()()(),Sl(755,"td",30)(756,"em")(757,"strong"),Jx(758,"(opcional)"),sg()(),Sl(759,"p"),Jx(760,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Sl(761,"tr",22)(762,"td",23)(763,"div",31)(764,"span",32),Jx(765," p-show-required"),Wl(766,"br"),sg()()(),Sl(767,"td",27)(768,"code",34),Jx(769,"boolean"),sg()(),Sl(770,"td",29),Jx(771,"-"),sg(),Sl(772,"td",30)(773,"p"),Jx(774,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Sl(775,"blockquote")(776,"p"),Jx(777,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(778,"ul")(779,"li"),Jx(780,"N\xE3o possuir "),Sl(781,"code"),Jx(782,"p-help"),sg(),Jx(783," e/ou "),Sl(784,"code"),Jx(785,"p-label"),sg(),Jx(786,"."),sg()()()(),Sl(787,"tr",22)(788,"td",23)(789,"div",31)(790,"span",32),Jx(791," p-size"),Wl(792,"br"),sg()()(),Sl(793,"td",27)(794,"code",33),Jx(795,"string"),sg()(),Sl(796,"td",29)(797,"p")(798,"code"),Jx(799,"medium"),sg()()(),Sl(800,"td",30)(801,"em")(802,"strong"),Jx(803,"(opcional)"),sg()(),Sl(804,"p"),Jx(805,"Define o tamanho dos radios do componente:"),sg(),Sl(806,"ul")(807,"li")(808,"code"),Jx(809,"small"),sg(),Jx(810,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(811,"li")(812,"code"),Jx(813,"medium"),sg(),Jx(814,": 24x24."),sg()(),Sl(815,"blockquote")(816,"p"),Jx(817,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(818,"code"),Jx(819,"medium"),sg(),Jx(820,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(821,"a",39),Jx(822,"po-theme"),sg(),Jx(823,"."),sg()()()()(),Sl(824,"h3",18),Jx(825,"M\xE9todos"),sg(),Sl(826,"table",40)(827,"tr",22)(828,"th",41)(829,"div",31)(830,"h4")(831,"span",32),Jx(832," focus "),sg()()()()(),Sl(833,"tr",30)(834,"td",30)(835,"p"),Jx(836,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(837,"p"),Jx(838,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(839,"pre")(840,"code"),Jx(841,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),sg()()()()(),Wl(842,"br"),Sl(843,"table",40)(844,"tr",22)(845,"th",41)(846,"div",31)(847,"h4")(848,"span",32),Jx(849," showAdditionalHelp "),sg()()()()(),Sl(850,"tr",30)(851,"td",30)(852,"p"),Jx(853,"M\xE9todo que exibe "),Sl(854,"code"),Jx(855,"p-helper"),sg(),Jx(856," ou executa a a\xE7\xE3o definida em "),Sl(857,"code"),Jx(858,"p-helper{eventOnClick}"),sg(),Jx(859," ou em "),Sl(860,"code"),Jx(861,"p-additionalHelp"),sg(),Jx(862,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(863,"code"),Jx(864,"p-keydown"),sg(),Jx(865,"."),sg(),Sl(866,"blockquote")(867,"p"),Jx(868,"Exibe ou oculta o conte\xFAdo do componente "),Sl(869,"code"),Jx(870,"po-helper"),sg(),Jx(871," quando o componente estiver com foco."),sg()(),Sl(872,"pre")(873,"code"),Jx(874,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),sg()(),Sl(875,"pre")(876,"code"),Jx(877,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(878,"br"),Sl(879,"h3"),Jx(880,"Interfaces"),sg(),Sl(881,"h4",42)(882,"code",5),Jx(883,"PoRadioGroupOption"),sg()(),Sl(884,"div",2)(885,"p"),Jx(886,"Interface para as a\xE7\xF5es do componente po-radio-group."),sg()(),Sl(887,"h4",18),Jx(888,"Propriedades"),sg(),Sl(889,"table",19)(890,"tr",20)(891,"th",21),Jx(892,"Nome"),sg(),Sl(893,"th",21),Jx(894,"Tipo"),sg(),Sl(895,"th",21),Jx(896,"Descri\xE7\xE3o"),sg()(),Sl(897,"tr",22)(898,"td",23)(899,"div",31)(900,"span",32),Jx(901," disabled"),Wl(902,"br"),sg()()(),Sl(903,"td",27)(904,"code",34),Jx(905,"boolean"),sg()(),Sl(906,"td",30)(907,"em")(908,"strong"),Jx(909,"(opcional)"),sg()(),Sl(910,"p"),Jx(911,"Desabilita o radio."),sg()()(),Sl(912,"tr",22)(913,"td",23)(914,"div",31)(915,"span",32),Jx(916," label"),Wl(917,"br"),sg()()(),Sl(918,"td",27)(919,"code",33),Jx(920,"string"),sg()(),Sl(921,"td",30)(922,"p"),Jx(923,"Texto do radio."),sg()()(),Sl(924,"tr",22)(925,"td",23)(926,"div",31)(927,"span",32),Jx(928," value"),Wl(929,"br"),sg()()(),Sl(930,"td",27)(931,"code",33),Jx(932,"string "),sg(),Sl(933,"code",35),Jx(934," number"),sg()(),Sl(935,"td",30)(936,"p"),Jx(937,"Valor do radio."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return i})();var fe=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||i)(C(Xn),C(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Radio Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Wl(3,"sample-po-radio-group-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Wl(5,"sample-po-radio-group-basic-view")(6,"sample-po-radio-group-labs-view")(7,"sample-po-radio-group-translator-view")(8,"sample-po-radio-group-translator-reactive-form-view"),sg()()()),r&2&&(tw("p-actions",n.actions),Vp(2),tw("p-active",n.activeTab==="doc"),Vp(2),tw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[pNe,Gme,Qme,me,ce,Ee,he,Se],encapsulation:2})}return i})();var Be=[{path:"",component:fe}],xe=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[pL.forChild(Be),pL]})}return i})();var bt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[ar,xe]})}return i})();export{bt as DocPoRadioGroupModule};