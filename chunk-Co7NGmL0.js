import {f as fe$1,u as ue$1,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,cM as cY,cN as lm,c8 as Dde,L as Gl,O as nw,bM as vN,a7 as gN,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,bH as M3,c9 as Yhe,aB as Sx,aM as ww,aN as r0,bd as Fx,aO as Ew,aP as o0,aJ as qhe,cQ as kk,cR as Ok,a3 as lNe,aD as Ky,aT as sN,aE as Xy}from'./main-P7IRR5MZ.js';var Ce=()=>({label:"Option 1",value:"1"}),we=()=>({label:"Option 2",value:"2"}),ye=(i,ve)=>[i,ve],de=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic"]],standalone:false,decls:1,vars:6,consts:[["name","radioGroupBasic","p-label","PO Radio Group",3,"p-options"]],template:function(r,n){r&1&&Gl(0,"po-radio-group",0),r&2&&nw("p-options",vN(3,ye,gN(1,Ce),gN(2,we)));},dependencies:[Dde],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Radio Group Basic"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-radio-group-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Te,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,de],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];ngOnInit(){this.restore();}addOption(){this.options.push(this.option),this.option=this.getNewOption();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.event="",this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage="",this.size="medium",this.option=this.getNewOption(),this.options=[];}getNewOption(){return {label:void 0,value:void 0}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs"]],standalone:false,decls:26,vars:31,consts:[["optionForm","ngForm"],["propertiesForm","ngForm"],["name","radioGroupLabs",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-label","p-optional","p-options","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionDisabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"click"]],template:function(r,n){if(r&1){let m=Sx();Tl(0,"po-radio-group",2),ww("ngModelChange",function(l){return Ky(m),sN(n.radioGroup,l)||(n.radioGroup=l),Xy(l)}),ht("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),sg(),r0(),Gl(1,"po-divider"),Tl(2,"div",3),Gl(3,"po-info",4)(4,"po-info",5),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0)(8,"div",3)(9,"po-input",6),ww("ngModelChange",function(l){return Ky(m),sN(n.option.label,l)||(n.option.label=l),Xy(l)}),sg(),r0(),Tl(10,"po-input",7),ww("ngModelChange",function(l){return Ky(m),sN(n.option.value,l)||(n.option.value=l),Xy(l)}),sg(),r0(),Tl(11,"po-switch",8),ww("ngModelChange",function(l){return Ky(m),sN(n.option.disabled,l)||(n.option.disabled=l),Xy(l)}),sg(),r0(),sg(),Tl(12,"div",3)(13,"po-button",9),ht("p-click",function(){Ky(m);let l=Fx(7);return n.addOption(),Xy(l.reset())}),sg()()(),Gl(14,"po-divider"),Tl(15,"form",null,1)(17,"po-input",10),ww("ngModelChange",function(l){return Ky(m),sN(n.label,l)||(n.label=l),Xy(l)}),sg(),r0(),Tl(18,"po-input",11),ww("ngModelChange",function(l){return Ky(m),sN(n.help,l)||(n.help=l),Xy(l)}),sg(),r0(),Tl(19,"po-input",12),ww("ngModelChange",function(l){return Ky(m),sN(n.helperText,l)||(n.helperText=l),Xy(l)}),sg(),r0(),Tl(20,"po-input",13),ww("ngModelChange",function(l){return Ky(m),sN(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),Xy(l)}),sg(),r0(),Tl(21,"po-radio-group",14),ww("ngModelChange",function(l){return Ky(m),sN(n.columns,l)||(n.columns=l),Xy(l)}),sg(),r0(),Tl(22,"po-checkbox-group",15),ww("ngModelChange",function(l){return Ky(m),sN(n.properties,l)||(n.properties=l),Xy(l)}),sg(),r0(),Tl(23,"po-radio-group",16),ww("ngModelChange",function(l){return Ky(m),sN(n.size,l)||(n.size=l),Xy(l)}),sg(),r0(),Tl(24,"div",3)(25,"po-button",17),ht("click",function(){return Ky(m),Fx(16).reset(),Xy(n.restore())}),sg()()();}if(r&2){let m=Fx(7);Ew("ngModel",n.radioGroup),nw("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel")),o0(),Vp(3),nw("p-value",n.radioGroup),Vp(),nw("p-value",n.event),Vp(5),Ew("ngModel",n.option.label),o0(),Vp(),Ew("ngModel",n.option.value),o0(),Vp(),Ew("ngModel",n.option.disabled),o0(),Vp(2),nw("p-disabled",m.invalid),Vp(4),Ew("ngModel",n.label),o0(),Vp(),Ew("ngModel",n.help),o0(),Vp(),Ew("ngModel",n.helperText),o0(),Vp(),Ew("ngModel",n.fieldErrorMessage),o0(),Vp(),Ew("ngModel",n.columns),nw("p-options",n.columnOptions),o0(),Vp(),Ew("ngModel",n.properties),nw("p-options",n.propertiesOptions),o0(),Vp(),Ew("ngModel",n.size),nw("p-options",n.sizesOptions),o0();}},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,C3,O3,Dde,M3,Yhe],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Radio Group Labs"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-radio-group
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-radio-group-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Re,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ue],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{language="es";original="";translated="";languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language]);}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator"]],standalone:false,decls:6,vars:5,consts:[["f","ngForm"],[1,"po-row"],["name","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let m=Sx();Tl(0,"form",null,0)(2,"div",1)(3,"po-radio-group",2),ww("ngModelChange",function(l){return Ky(m),sN(n.language,l)||(n.language=l),Xy(l)}),ht("p-change",function(l){return n.changeLanguage(l)}),sg(),r0(),Tl(4,"po-select",3),ww("ngModelChange",function(l){return Ky(m),sN(n.original,l)||(n.original=l),Xy(l)}),ht("p-change",function(l){return n.changeLanguage(l)}),sg(),r0(),Tl(5,"po-input",4),ww("ngModelChange",function(l){return Ky(m),sN(n.translated,l)||(n.translated=l),Xy(l)}),sg(),r0(),sg()();}r&2&&(Vp(3),Ew("ngModel",n.language),nw("p-options",n.languageOptions),o0(),Vp(),Ew("ngModel",n.original),nw("p-options",n.optionsList),o0(),Vp(),Ew("ngModel",n.translated),o0());},dependencies:[oY,nY,rY,Sk,Ck,O3,Dde,qhe],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Radio Group - Translator"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"),sg(),Tl(13,"pre",7),iN(14,`<form #f="ngForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-radio-group-translator"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,De,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ge],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{formBuilder=f(cY);translatorForm;languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:["es",lm.required],original:[void 0,lm.required],translated:[void 0,lm.required]});}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]});}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form"]],standalone:false,decls:5,vars:3,consts:[[3,"formGroup"],[1,"po-row"],["name","language","formControlName","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","original","formControlName","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","translated","formControlName","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4"]],template:function(r,n){r&1&&(Tl(0,"form",0)(1,"div",1)(2,"po-radio-group",2),ht("p-change",function(){return n.changeLanguage()}),sg(),r0(),Tl(3,"po-select",3),ht("p-change",function(){return n.changeLanguage()}),sg(),r0(),Gl(4,"po-input",4),r0(),sg()()),r&2&&(nw("formGroup",n.translatorForm),Vp(2),nw("p-options",n.languageOptions),o0(),Vp(),nw("p-options",n.optionsList),o0(),Vp(),o0());},dependencies:[oY,nY,rY,kk,Ok,O3,Dde,qhe],encapsulation:2,changeDetection:1})}return i})();var ke=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Radio Group - Translator Reactive Form"),sg(),Tl(4,"a",2),ht("click",function(){return n.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"),sg(),Tl(13,"pre",7),iN(14,`<form [formGroup]="translatorForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-radio-group-translator-reactive-form"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+n.sampleCodeButtonIcon),Vp(),fg(" ",n.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,ke,n.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-doc"]],standalone:false,decls:938,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo"],["href","/documentation/po-select"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://doc.animaliads.io/docs/components/radio"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoRadioGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,n){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),iN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),iN(11,"FormsModule"),sg(),iN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),iN(14,"ReactiveFormsModule"),sg(),iN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),iN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),iN(20,"PoRadioGroupComponent"),sg()(),Tl(21,"div",2)(22,"p"),iN(23,"O componente "),Tl(24,"code"),iN(25,"po-radio-group"),sg(),iN(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),Tl(27,"a",6)(28,"strong"),iN(29,"po-combo"),sg()(),iN(30," ou "),Tl(31,"a",7)(32,"strong"),iN(33,"po-select"),sg()(),iN(34,"."),sg(),Tl(35,"p"),iN(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),Tl(37,"a",8)(38,"strong"),iN(39,"po-checkbox-group"),sg()(),iN(40,"."),sg(),Tl(41,"blockquote")(42,"p"),iN(43,"Ao passar um valor para o "),Tl(44,"em"),iN(45,"model"),sg(),iN(46," que n\xE3o esteja na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),Tl(47,"code"),iN(48,"undefined"),sg(),iN(49,"."),sg()(),Tl(50,"h4"),iN(51,"Acessibilidade tratada no componente interno "),Tl(52,"code"),iN(53,"po-radio"),sg(),iN(54,":"),sg(),Tl(55,"p"),iN(56,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),sg(),Tl(57,"ul")(58,"li"),iN(59,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),Tl(60,"a",9),iN(61,"WCAG 4.1.2: Name, Role, Value"),sg()(),Tl(62,"li"),iN(63,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferen\xE7a visual entre os estados. "),Tl(64,"a",10),iN(65,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),sg()(),Tl(66,"li"),iN(67,"Quando em foco, o componente \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Tl(68,"a",11),iN(69,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),sg()(),Tl(70,"li"),iN(71,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Tl(72,"a",12),iN(73,"(WCAG 2.4.12: Focus Appearance"),sg()()(),Tl(74,"p"),iN(75,"Conforme documenta\xE7\xE3o em: "),Tl(76,"a",13),iN(77,"https://doc.animaliads.io/docs/components/radio"),sg()(),Tl(78,"h4"),iN(79,"Tokens customiz\xE1veis"),sg(),Tl(80,"p"),iN(81,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Gl(82,"br"),iN(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),Tl(84,"code"),iN(85,"po-radio"),sg(),iN(86," que comp\xF5em o grupo de op\xE7\xF5es. "),Gl(87,"br"),iN(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),Tl(89,"code"),iN(90,"po-radio"),sg(),iN(91," em vez do pr\xF3prio "),Tl(92,"code"),iN(93,"po-radio-group"),sg(),iN(94,"."),sg(),Tl(95,"blockquote")(96,"p"),iN(97,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(98,"a",14),iN(99,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(100,"."),sg()(),Tl(101,"table")(102,"thead")(103,"tr")(104,"th"),iN(105,"Propriedade"),sg(),Tl(106,"th"),iN(107,"Descri\xE7\xE3o"),sg(),Tl(108,"th"),iN(109,"Valor Padr\xE3o"),sg()()(),Tl(110,"tbody")(111,"tr")(112,"td")(113,"strong"),iN(114,"Default Values"),sg()(),Gl(115,"td")(116,"td"),sg(),Tl(117,"tr")(118,"td")(119,"code"),iN(120,"--border-color"),sg()(),Tl(121,"td"),iN(122,"Cor da borda"),sg(),Tl(123,"td")(124,"code"),iN(125,"var(--color-neutral-dark-70)"),sg()()(),Tl(126,"tr")(127,"td")(128,"code"),iN(129,"--field-container-title-justify"),sg()(),Tl(130,"td"),iN(131,"Alinhamento horizontal do t\xEDtulo ("),Tl(132,"code"),iN(133,"justify-content"),sg(),iN(134,")"),sg(),Tl(135,"td")(136,"code"),iN(137,"space-between"),sg()()(),Tl(138,"tr")(139,"td")(140,"code"),iN(141,"--field-container-title-flex"),sg()(),Tl(142,"td"),iN(143,"Flex do t\xEDtulo ("),Tl(144,"code"),iN(145,"flex"),sg(),iN(146,")"),sg(),Tl(147,"td")(148,"code"),iN(149,"1 auto"),sg()()(),Tl(150,"tr")(151,"td")(152,"strong"),iN(153,"Hover"),sg()(),Gl(154,"td")(155,"td"),sg(),Tl(156,"tr")(157,"td")(158,"code"),iN(159,"--shadow-color-hover"),sg()(),Tl(160,"td"),iN(161,"Cor da sombra no estado hover"),sg(),Tl(162,"td")(163,"code"),iN(164,"var(--color-brand-01-lighter)"),sg()()(),Tl(165,"tr")(166,"td")(167,"code"),iN(168,"--color-hover"),sg()(),Tl(169,"td"),iN(170,"Cor principal no estado hover"),sg(),Tl(171,"td")(172,"code"),iN(173,"var(--color-brand-01-dark)"),sg()()(),Tl(174,"tr")(175,"td")(176,"strong"),iN(177,"Focused"),sg()(),Gl(178,"td")(179,"td"),sg(),Tl(180,"tr")(181,"td")(182,"code"),iN(183,"--outline-color-focused"),sg()(),Tl(184,"td"),iN(185,"Cor do outline do estado de focus"),sg(),Tl(186,"td")(187,"code"),iN(188,"var(--color-brand-01-darkest)"),sg()()(),Tl(189,"tr")(190,"td")(191,"strong"),iN(192,"checked"),sg()(),Gl(193,"td")(194,"td"),sg(),Tl(195,"tr")(196,"td")(197,"code"),iN(198,"--color-unchecked"),sg()(),Tl(199,"td"),iN(200,"Cor quando n\xE3o selecionado"),sg(),Tl(201,"td")(202,"code"),iN(203,"var(--color-neutral-light-00)"),sg()()(),Tl(204,"tr")(205,"td")(206,"code"),iN(207,"--color-checked"),sg()(),Tl(208,"td"),iN(209,"Cor quando selecionado"),sg(),Tl(210,"td")(211,"code"),iN(212,"var(--color-action-default)"),sg()()(),Tl(213,"tr")(214,"td")(215,"strong"),iN(216,"Disabled"),sg()(),Gl(217,"td")(218,"td"),sg(),Tl(219,"tr")(220,"td")(221,"code"),iN(222,"--color-unchecked-disabled"),sg()(),Tl(223,"td"),iN(224,"Cor pricipal quando n\xE3o selecionado no estado disabled"),sg(),Tl(225,"td")(226,"code"),iN(227,"var(--color-neutral-light-30)"),sg()()(),Tl(228,"tr")(229,"td")(230,"code"),iN(231,"--color-checked-disabled"),sg()(),Tl(232,"td"),iN(233,"Cor pricipal quando selecionado no estado disabled"),sg(),Tl(234,"td")(235,"code"),iN(236,"var(--color-neutral-dark-70)"),sg()()()()()(),Tl(237,"div",15)(238,"h4",16),iN(239,"Seletor"),sg(),Tl(240,"pre",17),iN(241,`<po-radio-group
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
`),sg()(),Tl(242,"h4",18),iN(243,"Propriedades"),sg(),Tl(244,"table",19)(245,"tr",20)(246,"th",21),iN(247,"Nome"),sg(),Tl(248,"th",21),iN(249,"Tipo"),sg(),Tl(250,"th",21),iN(251,"Padr\xE3o"),sg(),Tl(252,"th",21),iN(253,"Descri\xE7\xE3o"),sg()(),Tl(254,"tr",22)(255,"td",23)(256,"div",24)(257,"span",25),iN(258," (p-additional-help)"),Gl(259,"br"),sg()(),Tl(260,"div",26),iN(261,"Deprecated"),sg()(),Tl(262,"td",27)(263,"code",28),iN(264,"EventEmitter"),sg()(),Tl(265,"td",29),iN(266,"-"),sg(),Tl(267,"td",30)(268,"em")(269,"strong"),iN(270,"(opcional)"),sg()(),Tl(271,"p"),iN(272,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(273,"blockquote")(274,"p"),iN(275,"Essa propriedade est\xE1 "),Tl(276,"strong"),iN(277,"depreciada"),sg(),iN(278," e ser\xE1 removida na vers\xE3o "),Tl(279,"code"),iN(280,"23.x.x"),sg(),iN(281,". Recomendamos utilizar a propriedade "),Tl(282,"code"),iN(283,"p-helper"),sg(),iN(284," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(285,"tr",22)(286,"td",23)(287,"div",31)(288,"span",32),iN(289," p-additional-help-tooltip"),Gl(290,"br"),sg()(),Tl(291,"div",26),iN(292,"Deprecated"),sg()(),Tl(293,"td",27)(294,"code",33),iN(295,"string"),sg()(),Tl(296,"td",29),iN(297,"-"),sg(),Tl(298,"td",30)(299,"em")(300,"strong"),iN(301,"(opcional)"),sg()(),Tl(302,"p"),iN(303,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(304,"code"),iN(305,"po-helper"),sg(),iN(306,`.
`),Tl(307,"strong"),iN(308,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(309,"blockquote")(310,"p"),iN(311,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(312,"blockquote")(313,"p"),iN(314,"Essa propriedade est\xE1 "),Tl(315,"strong"),iN(316,"depreciada"),sg(),iN(317," e ser\xE1 removida na vers\xE3o "),Tl(318,"code"),iN(319,"23.x.x"),sg(),iN(320,". Recomendamos utilizar a propriedade "),Tl(321,"code"),iN(322,"p-helper"),sg(),iN(323," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(324,"tr",22)(325,"td",23)(326,"div",31)(327,"span",32),iN(328," p-append-in-body"),Gl(329,"br"),sg()()(),Tl(330,"td",27)(331,"code",34),iN(332,"boolean"),sg()(),Tl(333,"td",29)(334,"p")(335,"code"),iN(336,"false"),sg()()(),Tl(337,"td",30)(338,"em")(339,"strong"),iN(340,"(opcional)"),sg()(),Tl(341,"p"),iN(342,"Define que o popover ("),Tl(343,"code"),iN(344,"p-helper"),sg(),iN(345," e/ou "),Tl(346,"code"),iN(347,"p-error-limit"),sg(),iN(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(349,"blockquote")(350,"p"),iN(351,"Quando utilizado com "),Tl(352,"code"),iN(353,"p-helper"),sg(),iN(354,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(355,"tr",22)(356,"td",23)(357,"div",31)(358,"span",32),iN(359," p-auto-focus"),Gl(360,"br"),sg()()(),Tl(361,"td",27)(362,"code",34),iN(363,"boolean"),sg()(),Tl(364,"td",29)(365,"p")(366,"code"),iN(367,"false"),sg()()(),Tl(368,"td",30)(369,"em")(370,"strong"),iN(371,"(opcional)"),sg()(),Tl(372,"p"),iN(373,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(374,"blockquote")(375,"p"),iN(376,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(377,"tr",22)(378,"td",23)(379,"div",24)(380,"span",25),iN(381," (p-change)"),Gl(382,"br"),sg()()(),Tl(383,"td",27)(384,"code",28),iN(385,"EventEmitter"),sg()(),Tl(386,"td",29),iN(387,"-"),sg(),Tl(388,"td",30)(389,"em")(390,"strong"),iN(391,"(opcional)"),sg()(),Tl(392,"p"),iN(393,"Evento ao alterar valor do campo."),sg()()(),Tl(394,"tr",22)(395,"td",23)(396,"div",31)(397,"span",32),iN(398," p-columns"),Gl(399,"br"),sg()()(),Tl(400,"td",27)(401,"code",35),iN(402,"number"),sg()(),Tl(403,"td",29)(404,"p")(405,"code"),iN(406,"2"),sg()()(),Tl(407,"td",30)(408,"em")(409,"strong"),iN(410,"(opcional)"),sg()(),Tl(411,"p"),iN(412,"Define a quantidade de colunas para exibi\xE7\xE3o das op\xE7\xF5es."),sg(),Tl(413,"p")(414,"strong"),iN(415,"Considera\xE7\xF5es:"),sg()(),Tl(416,"ul")(417,"li"),iN(418,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),Tl(419,"code"),iN(420,"1"),sg(),iN(421," e "),Tl(422,"code"),iN(423,"4"),sg(),iN(424," colunas."),sg(),Tl(425,"li"),iN(426,"O n\xFAmero m\xE1ximo de colunas \xE9 invari\xE1vel nas seguintes resolu\xE7\xF5es:"),Tl(427,"ul")(428,"li")(429,"code"),iN(430,"sm"),sg(),iN(431,": "),Tl(432,"code"),iN(433,"1"),sg()(),Tl(434,"li")(435,"code"),iN(436,"md"),sg(),iN(437,": "),Tl(438,"code"),iN(439,"2"),sg()()()()()()(),Tl(440,"tr",22)(441,"td",23)(442,"div",31)(443,"span",32),iN(444," p-compact-label"),Gl(445,"br"),sg()()(),Tl(446,"td",27)(447,"code",34),iN(448,"boolean"),sg()(),Tl(449,"td",29)(450,"p")(451,"code"),iN(452,"false"),sg()()(),Tl(453,"td",30)(454,"em")(455,"strong"),iN(456,"(opcional)"),sg()(),Tl(457,"p"),iN(458,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(459,"p"),iN(460,"Quando habilitado ("),Tl(461,"code"),iN(462,"true"),sg(),iN(463,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(464,"ul")(465,"li")(466,"code"),iN(467,"po-label"),sg()(),Tl(468,"li")(469,"code"),iN(470,"p-requirement (showRequired)"),sg()(),Tl(471,"li")(472,"code"),iN(473,"po-helper"),sg()()(),Tl(474,"p"),iN(475,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(476,"p"),iN(477,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(478,"ul")(479,"li")(480,"code"),iN(481,"--field-container-title-justify"),sg()(),Tl(482,"li")(483,"code"),iN(484,"--field-container-title-flex"),sg()()(),Tl(485,"p"),iN(486,"Exemplo:"),sg(),Tl(487,"pre")(488,"code"),iN(489,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(490,"p"),iN(491,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(492,"tr",22)(493,"td",23)(494,"div",31)(495,"span",32),iN(496," p-disabled"),Gl(497,"br"),sg()()(),Tl(498,"td",27)(499,"code",34),iN(500,"boolean"),sg()(),Tl(501,"td",29)(502,"p")(503,"code"),iN(504,"false"),sg()()(),Tl(505,"td",30)(506,"em")(507,"strong"),iN(508,"(opcional)"),sg()(),Tl(509,"p"),iN(510,"Indica que o campo ser\xE1 desabilitado."),sg()()(),Tl(511,"tr",22)(512,"td",23)(513,"div",31)(514,"span",32),iN(515," p-error-limit"),Gl(516,"br"),sg()()(),Tl(517,"td",27)(518,"code",34),iN(519,"boolean"),sg()(),Tl(520,"td",29)(521,"p")(522,"code"),iN(523,"false"),sg()()(),Tl(524,"td",30)(525,"em")(526,"strong"),iN(527,"(opcional)"),sg()(),Tl(528,"p"),iN(529,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(530,"blockquote")(531,"p"),iN(532,"Caso essa propriedade seja definida como "),Tl(533,"code"),iN(534,"true"),sg(),iN(535,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(536,"tr",22)(537,"td",23)(538,"div",31)(539,"span",32),iN(540," p-field-error-message"),Gl(541,"br"),sg()()(),Tl(542,"td",27)(543,"code",33),iN(544,"string"),sg()(),Tl(545,"td",29),iN(546,"-"),sg(),Tl(547,"td",30)(548,"em")(549,"strong"),iN(550,"(opcional)"),sg()(),Tl(551,"p"),iN(552,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),sg(),Tl(553,"blockquote")(554,"p"),iN(555,"Necess\xE1rio que a propriedade "),Tl(556,"code"),iN(557,"p-required"),sg(),iN(558," esteja habilitada."),sg()()()(),Tl(559,"tr",22)(560,"td",23)(561,"div",31)(562,"span",32),iN(563," p-help"),Gl(564,"br"),sg()()(),Tl(565,"td",27)(566,"code",33),iN(567,"string"),sg()(),Tl(568,"td",29),iN(569,"-"),sg(),Tl(570,"td",30)(571,"em")(572,"strong"),iN(573,"(opcional)"),sg()(),Tl(574,"p"),iN(575,"Texto de apoio do campo."),sg()()(),Tl(576,"tr",22)(577,"td",23)(578,"div",24)(579,"span",25),iN(580," (p-keydown)"),Gl(581,"br"),sg()()(),Tl(582,"td",27)(583,"code",28),iN(584,"EventEmitter"),sg()(),Tl(585,"td",29),iN(586,"-"),sg(),Tl(587,"td",30)(588,"em")(589,"strong"),iN(590,"(opcional)"),sg()(),Tl(591,"p"),iN(592,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(593,"code"),iN(594,"KeyboardEvent"),sg(),iN(595," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(596,"tr",22)(597,"td",23)(598,"div",31)(599,"span",32),iN(600," p-label"),Gl(601,"br"),sg()()(),Tl(602,"td",27)(603,"code",33),iN(604,"string"),sg()(),Tl(605,"td",29),iN(606,"-"),sg(),Tl(607,"td",30)(608,"em")(609,"strong"),iN(610,"(opcional)"),sg()(),Tl(611,"p"),iN(612,"Label do campo."),sg()()(),Tl(613,"tr",22)(614,"td",23)(615,"div",31)(616,"span",32),iN(617," p-label-text-wrap"),Gl(618,"br"),sg()()(),Tl(619,"td",27)(620,"code",34),iN(621,"boolean"),sg()(),Tl(622,"td",29)(623,"p")(624,"code"),iN(625,"false"),sg()()(),Tl(626,"td",30)(627,"em")(628,"strong"),iN(629,"(opcional)"),sg()(),Tl(630,"p"),iN(631,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(632,"code"),iN(633,"p-label"),sg(),iN(634,". Quando "),Tl(635,"code"),iN(636,"p-label-text-wrap"),sg(),iN(637,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(638,"tr",22)(639,"td",23)(640,"div",31)(641,"span",32),iN(642," name"),Gl(643,"br"),sg()()(),Tl(644,"td",27)(645,"code",33),iN(646,"string"),sg()(),Tl(647,"td",29),iN(648,"-"),sg(),Tl(649,"td",30)(650,"p"),iN(651,"Nome das op\xE7\xF5es."),sg()()(),Tl(652,"tr",22)(653,"td",23)(654,"div",31)(655,"span",32),iN(656," p-optional"),Gl(657,"br"),sg()()(),Tl(658,"td",27)(659,"code",34),iN(660,"boolean"),sg()(),Tl(661,"td",29)(662,"p")(663,"code"),iN(664,"false"),sg()()(),Tl(665,"td",30)(666,"em")(667,"strong"),iN(668,"(opcional)"),sg()(),Tl(669,"p"),iN(670,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(671,"blockquote")(672,"p"),iN(673,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(674,"ul")(675,"li"),iN(676,"O campo conter "),Tl(677,"code"),iN(678,"p-required"),sg(),iN(679,";"),sg(),Tl(680,"li"),iN(681,"N\xE3o possuir "),Tl(682,"code"),iN(683,"p-help"),sg(),iN(684," e/ou "),Tl(685,"code"),iN(686,"p-label"),sg(),iN(687,"."),sg()()()(),Tl(688,"tr",22)(689,"td",23)(690,"div",31)(691,"span",32),iN(692," p-options"),Gl(693,"br"),sg()()(),Tl(694,"td",27)(695,"code",36),iN(696,"PoRadioGroupOption[]"),sg()(),Tl(697,"td",29),iN(698,"-"),sg(),Tl(699,"td",30)(700,"p"),iN(701,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),sg()()(),Tl(702,"tr",22)(703,"td",23)(704,"div",31)(705,"span",32),iN(706," p-helper"),Gl(707,"br"),sg()()(),Tl(708,"td",27)(709,"code",37),iN(710,"PoHelperOptions "),sg(),Tl(711,"code",33),iN(712," string"),sg()(),Tl(713,"td",29),iN(714,"-"),sg(),Tl(715,"td",30)(716,"em")(717,"strong"),iN(718,"(opcional)"),sg()(),Tl(719,"p"),iN(720,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(721,"code"),iN(722,"p-label"),sg(),iN(723," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(724,"code"),iN(725,"p-label"),sg(),iN(726,"."),sg(),Tl(727,"blockquote")(728,"p"),iN(729,"Para mais informa\xE7\xF5es acesse: "),Tl(730,"a",38),iN(731,"https://po-ui.io/documentation/po-helper"),sg(),iN(732,"."),sg()(),Tl(733,"blockquote")(734,"p"),iN(735,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(736,"code"),iN(737,"p-additional-help-tooltip"),sg(),iN(738," e "),Tl(739,"code"),iN(740,"p-additional-help"),sg(),iN(741,") ser\xE1 ignorado."),sg()()()(),Tl(742,"tr",22)(743,"td",23)(744,"div",31)(745,"span",32),iN(746," p-required"),Gl(747,"br"),sg()()(),Tl(748,"td",27)(749,"code",34),iN(750,"boolean"),sg()(),Tl(751,"td",29)(752,"p")(753,"code"),iN(754,"false"),sg()()(),Tl(755,"td",30)(756,"em")(757,"strong"),iN(758,"(opcional)"),sg()(),Tl(759,"p"),iN(760,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Tl(761,"tr",22)(762,"td",23)(763,"div",31)(764,"span",32),iN(765," p-show-required"),Gl(766,"br"),sg()()(),Tl(767,"td",27)(768,"code",34),iN(769,"boolean"),sg()(),Tl(770,"td",29),iN(771,"-"),sg(),Tl(772,"td",30)(773,"p"),iN(774,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(775,"blockquote")(776,"p"),iN(777,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(778,"ul")(779,"li"),iN(780,"N\xE3o possuir "),Tl(781,"code"),iN(782,"p-help"),sg(),iN(783," e/ou "),Tl(784,"code"),iN(785,"p-label"),sg(),iN(786,"."),sg()()()(),Tl(787,"tr",22)(788,"td",23)(789,"div",31)(790,"span",32),iN(791," p-size"),Gl(792,"br"),sg()()(),Tl(793,"td",27)(794,"code",33),iN(795,"string"),sg()(),Tl(796,"td",29)(797,"p")(798,"code"),iN(799,"medium"),sg()()(),Tl(800,"td",30)(801,"em")(802,"strong"),iN(803,"(opcional)"),sg()(),Tl(804,"p"),iN(805,"Define o tamanho dos radios do componente:"),sg(),Tl(806,"ul")(807,"li")(808,"code"),iN(809,"small"),sg(),iN(810,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(811,"li")(812,"code"),iN(813,"medium"),sg(),iN(814,": 24x24."),sg()(),Tl(815,"blockquote")(816,"p"),iN(817,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(818,"code"),iN(819,"medium"),sg(),iN(820,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(821,"a",39),iN(822,"po-theme"),sg(),iN(823,"."),sg()()()()(),Tl(824,"h3",18),iN(825,"M\xE9todos"),sg(),Tl(826,"table",40)(827,"tr",22)(828,"th",41)(829,"div",31)(830,"h4")(831,"span",32),iN(832," focus "),sg()()()()(),Tl(833,"tr",30)(834,"td",30)(835,"p"),iN(836,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(837,"p"),iN(838,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(839,"pre")(840,"code"),iN(841,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),sg()()()()(),Gl(842,"br"),Tl(843,"table",40)(844,"tr",22)(845,"th",41)(846,"div",31)(847,"h4")(848,"span",32),iN(849," showAdditionalHelp "),sg()()()()(),Tl(850,"tr",30)(851,"td",30)(852,"p"),iN(853,"M\xE9todo que exibe "),Tl(854,"code"),iN(855,"p-helper"),sg(),iN(856," ou executa a a\xE7\xE3o definida em "),Tl(857,"code"),iN(858,"p-helper{eventOnClick}"),sg(),iN(859," ou em "),Tl(860,"code"),iN(861,"p-additionalHelp"),sg(),iN(862,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(863,"code"),iN(864,"p-keydown"),sg(),iN(865,"."),sg(),Tl(866,"blockquote")(867,"p"),iN(868,"Exibe ou oculta o conte\xFAdo do componente "),Tl(869,"code"),iN(870,"po-helper"),sg(),iN(871," quando o componente estiver com foco."),sg()(),Tl(872,"pre")(873,"code"),iN(874,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),sg()(),Tl(875,"pre")(876,"code"),iN(877,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(878,"br"),Tl(879,"h3"),iN(880,"Interfaces"),sg(),Tl(881,"h4",42)(882,"code",5),iN(883,"PoRadioGroupOption"),sg()(),Tl(884,"div",2)(885,"p"),iN(886,"Interface para as a\xE7\xF5es do componente po-radio-group."),sg()(),Tl(887,"h4",18),iN(888,"Propriedades"),sg(),Tl(889,"table",19)(890,"tr",20)(891,"th",21),iN(892,"Nome"),sg(),Tl(893,"th",21),iN(894,"Tipo"),sg(),Tl(895,"th",21),iN(896,"Descri\xE7\xE3o"),sg()(),Tl(897,"tr",22)(898,"td",23)(899,"div",31)(900,"span",32),iN(901," disabled"),Gl(902,"br"),sg()()(),Tl(903,"td",27)(904,"code",34),iN(905,"boolean"),sg()(),Tl(906,"td",30)(907,"em")(908,"strong"),iN(909,"(opcional)"),sg()(),Tl(910,"p"),iN(911,"Desabilita o radio."),sg()()(),Tl(912,"tr",22)(913,"td",23)(914,"div",31)(915,"span",32),iN(916," label"),Gl(917,"br"),sg()()(),Tl(918,"td",27)(919,"code",33),iN(920,"string"),sg()(),Tl(921,"td",30)(922,"p"),iN(923,"Texto do radio."),sg()()(),Tl(924,"tr",22)(925,"td",23)(926,"div",31)(927,"span",32),iN(928," value"),Gl(929,"br"),sg()()(),Tl(930,"td",27)(931,"code",33),iN(932,"string "),sg(),Tl(933,"code",35),iN(934," number"),sg()(),Tl(935,"td",30)(936,"p"),iN(937,"Valor do radio."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return i})();var fe=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||i)(w(Xn),w(wn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Radio Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return n.changeTab("doc")}),Gl(3,"sample-po-radio-group-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return n.changeTab("web")}),Gl(5,"sample-po-radio-group-basic-view")(6,"sample-po-radio-group-labs-view")(7,"sample-po-radio-group-translator-view")(8,"sample-po-radio-group-translator-reactive-form-view"),sg()()()),r&2&&(nw("p-actions",n.actions),Vp(2),nw("p-active",n.activeTab==="doc"),Vp(2),nw("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[lNe,Wme,jme,me,ce,Ee,he,Se],encapsulation:2,changeDetection:1})}return i})();var Be=[{path:"",component:fe}],xe=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[DL.forChild(Be),DL]})}return i})();var bt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[ar,xe]})}return i})();export{bt as DocPoRadioGroupModule};