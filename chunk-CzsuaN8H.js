import {f as fe$1,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,cR as fY,cS as am,cc as Nde,R as Hl,Z as ZE,bQ as sN,a7 as iN,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,bL as H3,cd as sme,aB as gx,aM as gw,aN as Z0,bc as Sx,aO as pw,aP as X0,aJ as nme,cV as bk,cW as wk,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var Ce=()=>({label:"Option 1",value:"1"}),we=()=>({label:"Option 2",value:"2"}),ye=(i,ve)=>[i,ve],de=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic"]],standalone:false,decls:1,vars:6,consts:[["name","radioGroupBasic","p-label","PO Radio Group",3,"p-options"]],template:function(r,n){r&1&&Hl(0,"po-radio-group",0),r&2&&ZE("p-options",sN(3,ye,iN(1,Ce),iN(2,we)));},dependencies:[Nde],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Radio Group Basic"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-radio-group-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Te,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,de],encapsulation:2})}return i})();var ue=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];ngOnInit(){this.restore();}addOption(){this.options.push(this.option),this.option=this.getNewOption();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.event="",this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage="",this.size="medium",this.option=this.getNewOption(),this.options=[];}getNewOption(){return {label:void 0,value:void 0}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs"]],standalone:false,decls:26,vars:31,consts:[["optionForm","ngForm"],["propertiesForm","ngForm"],["name","radioGroupLabs",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-label","p-optional","p-options","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionDisabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"click"]],template:function(r,n){if(r&1){let m=gx();Cl(0,"po-radio-group",2),gw("ngModelChange",function(l){return Jy(m),Zx(n.radioGroup,l)||(n.radioGroup=l),e_(l)}),dt("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",3),Hl(3,"po-info",4)(4,"po-info",5),og(),Hl(5,"po-divider"),Cl(6,"form",null,0)(8,"div",3)(9,"po-input",6),gw("ngModelChange",function(l){return Jy(m),Zx(n.option.label,l)||(n.option.label=l),e_(l)}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(l){return Jy(m),Zx(n.option.value,l)||(n.option.value=l),e_(l)}),og(),Z0(),Cl(11,"po-switch",8),gw("ngModelChange",function(l){return Jy(m),Zx(n.option.disabled,l)||(n.option.disabled=l),e_(l)}),og(),Z0(),og(),Cl(12,"div",3)(13,"po-button",9),dt("p-click",function(){Jy(m);let l=Sx(7);return n.addOption(),e_(l.reset())}),og()()(),Hl(14,"po-divider"),Cl(15,"form",null,1)(17,"po-input",10),gw("ngModelChange",function(l){return Jy(m),Zx(n.label,l)||(n.label=l),e_(l)}),og(),Z0(),Cl(18,"po-input",11),gw("ngModelChange",function(l){return Jy(m),Zx(n.help,l)||(n.help=l),e_(l)}),og(),Z0(),Cl(19,"po-input",12),gw("ngModelChange",function(l){return Jy(m),Zx(n.helperText,l)||(n.helperText=l),e_(l)}),og(),Z0(),Cl(20,"po-input",13),gw("ngModelChange",function(l){return Jy(m),Zx(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),e_(l)}),og(),Z0(),Cl(21,"po-radio-group",14),gw("ngModelChange",function(l){return Jy(m),Zx(n.columns,l)||(n.columns=l),e_(l)}),og(),Z0(),Cl(22,"po-checkbox-group",15),gw("ngModelChange",function(l){return Jy(m),Zx(n.properties,l)||(n.properties=l),e_(l)}),og(),Z0(),Cl(23,"po-radio-group",16),gw("ngModelChange",function(l){return Jy(m),Zx(n.size,l)||(n.size=l),e_(l)}),og(),Z0(),Cl(24,"div",3)(25,"po-button",17),dt("click",function(){return Jy(m),Sx(16).reset(),e_(n.restore())}),og()()();}if(r&2){let m=Sx(7);pw("ngModel",n.radioGroup),ZE("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel")),X0(),Lp(3),ZE("p-value",n.radioGroup),Lp(),ZE("p-value",n.event),Lp(5),pw("ngModel",n.option.label),X0(),Lp(),pw("ngModel",n.option.value),X0(),Lp(),pw("ngModel",n.option.disabled),X0(),Lp(2),ZE("p-disabled",m.invalid),Lp(4),pw("ngModel",n.label),X0(),Lp(),pw("ngModel",n.help),X0(),Lp(),pw("ngModel",n.helperText),X0(),Lp(),pw("ngModel",n.fieldErrorMessage),X0(),Lp(),pw("ngModel",n.columns),ZE("p-options",n.columnOptions),X0(),Lp(),pw("ngModel",n.properties),ZE("p-options",n.propertiesOptions),X0(),Lp(),pw("ngModel",n.size),ZE("p-options",n.sizesOptions),X0();}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Nde,H3,sme],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Radio Group Labs"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-radio-group
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-radio-group-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Re,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ue],encapsulation:2})}return i})();var ge=(()=>{class i{language="es";original="";translated="";languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language]);}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator"]],standalone:false,decls:6,vars:5,consts:[["f","ngForm"],[1,"po-row"],["name","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let m=gx();Cl(0,"form",null,0)(2,"div",1)(3,"po-radio-group",2),gw("ngModelChange",function(l){return Jy(m),Zx(n.language,l)||(n.language=l),e_(l)}),dt("p-change",function(l){return n.changeLanguage(l)}),og(),Z0(),Cl(4,"po-select",3),gw("ngModelChange",function(l){return Jy(m),Zx(n.original,l)||(n.original=l),e_(l)}),dt("p-change",function(l){return n.changeLanguage(l)}),og(),Z0(),Cl(5,"po-input",4),gw("ngModelChange",function(l){return Jy(m),Zx(n.translated,l)||(n.translated=l),e_(l)}),og(),Z0(),og()();}r&2&&(Lp(3),pw("ngModel",n.language),ZE("p-options",n.languageOptions),X0(),Lp(),pw("ngModel",n.original),ZE("p-options",n.optionsList),X0(),Lp(),pw("ngModel",n.translated),X0());},dependencies:[lY,sY,aY,gk,fk,q3,Nde,nme],encapsulation:2,changeDetection:1})}return i})();var Le=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Radio Group - Translator"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"),og(),Cl(13,"pre",7),qx(14,`<form #f="ngForm">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-radio-group-translator"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Le,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ge],encapsulation:2})}return i})();var be=(()=>{class i{formBuilder=f(fY);translatorForm;languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:["es",am.required],original:[void 0,am.required],translated:[void 0,am.required]});}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]});}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form"]],standalone:false,decls:5,vars:3,consts:[[3,"formGroup"],[1,"po-row"],["name","language","formControlName","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","original","formControlName","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","translated","formControlName","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4"]],template:function(r,n){r&1&&(Cl(0,"form",0)(1,"div",1)(2,"po-radio-group",2),dt("p-change",function(){return n.changeLanguage()}),og(),Z0(),Cl(3,"po-select",3),dt("p-change",function(){return n.changeLanguage()}),og(),Z0(),Hl(4,"po-input",4),Z0(),og()()),r&2&&(ZE("formGroup",n.translatorForm),Lp(2),ZE("p-options",n.languageOptions),X0(),Lp(),ZE("p-options",n.optionsList),X0(),Lp(),X0());},dependencies:[lY,sY,aY,bk,wk,q3,Nde,nme],encapsulation:2,changeDetection:1})}return i})();var De=i=>({"docs-sample-code-tabs":i}),he=(()=>{class i{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-translator-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Radio Group - Translator Reactive Form"),og(),Cl(4,"a",2),dt("click",function(){return n.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"),og(),Cl(13,"pre",7),qx(14,`<form [formGroup]="translatorForm">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-radio-group-translator-reactive-form"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+n.sampleCodeButtonIcon),Lp(),dg(" ",n.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,De,n.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,be],encapsulation:2})}return i})();var Se=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=Un({type:i,selectors:[["sample-po-radio-group-doc"]],standalone:false,decls:938,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo"],["href","/documentation/po-select"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://doc.animaliads.io/docs/components/radio"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoRadioGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,n){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoRadioGroupComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,"O componente "),Cl(24,"code"),qx(25,"po-radio-group"),og(),qx(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),Cl(27,"a",6)(28,"strong"),qx(29,"po-combo"),og()(),qx(30," ou "),Cl(31,"a",7)(32,"strong"),qx(33,"po-select"),og()(),qx(34,"."),og(),Cl(35,"p"),qx(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),Cl(37,"a",8)(38,"strong"),qx(39,"po-checkbox-group"),og()(),qx(40,"."),og(),Cl(41,"blockquote")(42,"p"),qx(43,"Ao passar um valor para o "),Cl(44,"em"),qx(45,"model"),og(),qx(46," que n\xE3o esteja na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),Cl(47,"code"),qx(48,"undefined"),og(),qx(49,"."),og()(),Cl(50,"h4"),qx(51,"Acessibilidade tratada no componente interno "),Cl(52,"code"),qx(53,"po-radio"),og(),qx(54,":"),og(),Cl(55,"p"),qx(56,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),og(),Cl(57,"ul")(58,"li"),qx(59,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),Cl(60,"a",9),qx(61,"WCAG 4.1.2: Name, Role, Value"),og()(),Cl(62,"li"),qx(63,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferen\xE7a visual entre os estados. "),Cl(64,"a",10),qx(65,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),og()(),Cl(66,"li"),qx(67,"Quando em foco, o componente \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),Cl(68,"a",11),qx(69,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),og()(),Cl(70,"li"),qx(71,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),Cl(72,"a",12),qx(73,"(WCAG 2.4.12: Focus Appearance"),og()()(),Cl(74,"p"),qx(75,"Conforme documenta\xE7\xE3o em: "),Cl(76,"a",13),qx(77,"https://doc.animaliads.io/docs/components/radio"),og()(),Cl(78,"h4"),qx(79,"Tokens customiz\xE1veis"),og(),Cl(80,"p"),qx(81,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Hl(82,"br"),qx(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),Cl(84,"code"),qx(85,"po-radio"),og(),qx(86," que comp\xF5em o grupo de op\xE7\xF5es. "),Hl(87,"br"),qx(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),Cl(89,"code"),qx(90,"po-radio"),og(),qx(91," em vez do pr\xF3prio "),Cl(92,"code"),qx(93,"po-radio-group"),og(),qx(94,"."),og(),Cl(95,"blockquote")(96,"p"),qx(97,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(98,"a",14),qx(99,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(100,"."),og()(),Cl(101,"table")(102,"thead")(103,"tr")(104,"th"),qx(105,"Propriedade"),og(),Cl(106,"th"),qx(107,"Descri\xE7\xE3o"),og(),Cl(108,"th"),qx(109,"Valor Padr\xE3o"),og()()(),Cl(110,"tbody")(111,"tr")(112,"td")(113,"strong"),qx(114,"Default Values"),og()(),Hl(115,"td")(116,"td"),og(),Cl(117,"tr")(118,"td")(119,"code"),qx(120,"--border-color"),og()(),Cl(121,"td"),qx(122,"Cor da borda"),og(),Cl(123,"td")(124,"code"),qx(125,"var(--color-neutral-dark-70)"),og()()(),Cl(126,"tr")(127,"td")(128,"code"),qx(129,"--field-container-title-justify"),og()(),Cl(130,"td"),qx(131,"Alinhamento horizontal do t\xEDtulo ("),Cl(132,"code"),qx(133,"justify-content"),og(),qx(134,")"),og(),Cl(135,"td")(136,"code"),qx(137,"space-between"),og()()(),Cl(138,"tr")(139,"td")(140,"code"),qx(141,"--field-container-title-flex"),og()(),Cl(142,"td"),qx(143,"Flex do t\xEDtulo ("),Cl(144,"code"),qx(145,"flex"),og(),qx(146,")"),og(),Cl(147,"td")(148,"code"),qx(149,"1 auto"),og()()(),Cl(150,"tr")(151,"td")(152,"strong"),qx(153,"Hover"),og()(),Hl(154,"td")(155,"td"),og(),Cl(156,"tr")(157,"td")(158,"code"),qx(159,"--shadow-color-hover"),og()(),Cl(160,"td"),qx(161,"Cor da sombra no estado hover"),og(),Cl(162,"td")(163,"code"),qx(164,"var(--color-brand-01-lighter)"),og()()(),Cl(165,"tr")(166,"td")(167,"code"),qx(168,"--color-hover"),og()(),Cl(169,"td"),qx(170,"Cor principal no estado hover"),og(),Cl(171,"td")(172,"code"),qx(173,"var(--color-brand-01-dark)"),og()()(),Cl(174,"tr")(175,"td")(176,"strong"),qx(177,"Focused"),og()(),Hl(178,"td")(179,"td"),og(),Cl(180,"tr")(181,"td")(182,"code"),qx(183,"--outline-color-focused"),og()(),Cl(184,"td"),qx(185,"Cor do outline do estado de focus"),og(),Cl(186,"td")(187,"code"),qx(188,"var(--color-brand-01-darkest)"),og()()(),Cl(189,"tr")(190,"td")(191,"strong"),qx(192,"checked"),og()(),Hl(193,"td")(194,"td"),og(),Cl(195,"tr")(196,"td")(197,"code"),qx(198,"--color-unchecked"),og()(),Cl(199,"td"),qx(200,"Cor quando n\xE3o selecionado"),og(),Cl(201,"td")(202,"code"),qx(203,"var(--color-neutral-light-00)"),og()()(),Cl(204,"tr")(205,"td")(206,"code"),qx(207,"--color-checked"),og()(),Cl(208,"td"),qx(209,"Cor quando selecionado"),og(),Cl(210,"td")(211,"code"),qx(212,"var(--color-action-default)"),og()()(),Cl(213,"tr")(214,"td")(215,"strong"),qx(216,"Disabled"),og()(),Hl(217,"td")(218,"td"),og(),Cl(219,"tr")(220,"td")(221,"code"),qx(222,"--color-unchecked-disabled"),og()(),Cl(223,"td"),qx(224,"Cor pricipal quando n\xE3o selecionado no estado disabled"),og(),Cl(225,"td")(226,"code"),qx(227,"var(--color-neutral-light-30)"),og()()(),Cl(228,"tr")(229,"td")(230,"code"),qx(231,"--color-checked-disabled"),og()(),Cl(232,"td"),qx(233,"Cor pricipal quando selecionado no estado disabled"),og(),Cl(234,"td")(235,"code"),qx(236,"var(--color-neutral-dark-70)"),og()()()()()(),Cl(237,"div",15)(238,"h4",16),qx(239,"Seletor"),og(),Cl(240,"pre",17),qx(241,`<po-radio-group
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
`),og()(),Cl(242,"h4",18),qx(243,"Propriedades"),og(),Cl(244,"table",19)(245,"tr",20)(246,"th",21),qx(247,"Nome"),og(),Cl(248,"th",21),qx(249,"Tipo"),og(),Cl(250,"th",21),qx(251,"Padr\xE3o"),og(),Cl(252,"th",21),qx(253,"Descri\xE7\xE3o"),og()(),Cl(254,"tr",22)(255,"td",23)(256,"div",24)(257,"span",25),qx(258," (p-additional-help)"),Hl(259,"br"),og()(),Cl(260,"div",26),qx(261,"Deprecated"),og()(),Cl(262,"td",27)(263,"code",28),qx(264,"EventEmitter"),og()(),Cl(265,"td",29),qx(266,"-"),og(),Cl(267,"td",30)(268,"em")(269,"strong"),qx(270,"(opcional)"),og()(),Cl(271,"p"),qx(272,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(273,"blockquote")(274,"p"),qx(275,"Essa propriedade est\xE1 "),Cl(276,"strong"),qx(277,"depreciada"),og(),qx(278," e ser\xE1 removida na vers\xE3o "),Cl(279,"code"),qx(280,"23.x.x"),og(),qx(281,". Recomendamos utilizar a propriedade "),Cl(282,"code"),qx(283,"p-helper"),og(),qx(284," que oferece mais recursos e flexibilidade."),og()()()(),Cl(285,"tr",22)(286,"td",23)(287,"div",31)(288,"span",32),qx(289," p-additional-help-tooltip"),Hl(290,"br"),og()(),Cl(291,"div",26),qx(292,"Deprecated"),og()(),Cl(293,"td",27)(294,"code",33),qx(295,"string"),og()(),Cl(296,"td",29),qx(297,"-"),og(),Cl(298,"td",30)(299,"em")(300,"strong"),qx(301,"(opcional)"),og()(),Cl(302,"p"),qx(303,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(304,"code"),qx(305,"po-helper"),og(),qx(306,`.
`),Cl(307,"strong"),qx(308,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(309,"blockquote")(310,"p"),qx(311,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(312,"blockquote")(313,"p"),qx(314,"Essa propriedade est\xE1 "),Cl(315,"strong"),qx(316,"depreciada"),og(),qx(317," e ser\xE1 removida na vers\xE3o "),Cl(318,"code"),qx(319,"23.x.x"),og(),qx(320,". Recomendamos utilizar a propriedade "),Cl(321,"code"),qx(322,"p-helper"),og(),qx(323," que oferece mais recursos e flexibilidade."),og()()()(),Cl(324,"tr",22)(325,"td",23)(326,"div",31)(327,"span",32),qx(328," p-append-in-body"),Hl(329,"br"),og()()(),Cl(330,"td",27)(331,"code",34),qx(332,"boolean"),og()(),Cl(333,"td",29)(334,"p")(335,"code"),qx(336,"false"),og()()(),Cl(337,"td",30)(338,"em")(339,"strong"),qx(340,"(opcional)"),og()(),Cl(341,"p"),qx(342,"Define que o popover ("),Cl(343,"code"),qx(344,"p-helper"),og(),qx(345," e/ou "),Cl(346,"code"),qx(347,"p-error-limit"),og(),qx(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Cl(349,"blockquote")(350,"p"),qx(351,"Quando utilizado com "),Cl(352,"code"),qx(353,"p-helper"),og(),qx(354,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(355,"tr",22)(356,"td",23)(357,"div",31)(358,"span",32),qx(359," p-auto-focus"),Hl(360,"br"),og()()(),Cl(361,"td",27)(362,"code",34),qx(363,"boolean"),og()(),Cl(364,"td",29)(365,"p")(366,"code"),qx(367,"false"),og()()(),Cl(368,"td",30)(369,"em")(370,"strong"),qx(371,"(opcional)"),og()(),Cl(372,"p"),qx(373,"Aplica foco no elemento ao ser iniciado."),og(),Cl(374,"blockquote")(375,"p"),qx(376,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Cl(377,"tr",22)(378,"td",23)(379,"div",24)(380,"span",25),qx(381," (p-change)"),Hl(382,"br"),og()()(),Cl(383,"td",27)(384,"code",28),qx(385,"EventEmitter"),og()(),Cl(386,"td",29),qx(387,"-"),og(),Cl(388,"td",30)(389,"em")(390,"strong"),qx(391,"(opcional)"),og()(),Cl(392,"p"),qx(393,"Evento ao alterar valor do campo."),og()()(),Cl(394,"tr",22)(395,"td",23)(396,"div",31)(397,"span",32),qx(398," p-columns"),Hl(399,"br"),og()()(),Cl(400,"td",27)(401,"code",35),qx(402,"number"),og()(),Cl(403,"td",29)(404,"p")(405,"code"),qx(406,"2"),og()()(),Cl(407,"td",30)(408,"em")(409,"strong"),qx(410,"(opcional)"),og()(),Cl(411,"p"),qx(412,"Define a quantidade de colunas para exibi\xE7\xE3o das op\xE7\xF5es."),og(),Cl(413,"p")(414,"strong"),qx(415,"Considera\xE7\xF5es:"),og()(),Cl(416,"ul")(417,"li"),qx(418,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),Cl(419,"code"),qx(420,"1"),og(),qx(421," e "),Cl(422,"code"),qx(423,"4"),og(),qx(424," colunas."),og(),Cl(425,"li"),qx(426,"O n\xFAmero m\xE1ximo de colunas \xE9 invari\xE1vel nas seguintes resolu\xE7\xF5es:"),Cl(427,"ul")(428,"li")(429,"code"),qx(430,"sm"),og(),qx(431,": "),Cl(432,"code"),qx(433,"1"),og()(),Cl(434,"li")(435,"code"),qx(436,"md"),og(),qx(437,": "),Cl(438,"code"),qx(439,"2"),og()()()()()()(),Cl(440,"tr",22)(441,"td",23)(442,"div",31)(443,"span",32),qx(444," p-compact-label"),Hl(445,"br"),og()()(),Cl(446,"td",27)(447,"code",34),qx(448,"boolean"),og()(),Cl(449,"td",29)(450,"p")(451,"code"),qx(452,"false"),og()()(),Cl(453,"td",30)(454,"em")(455,"strong"),qx(456,"(opcional)"),og()(),Cl(457,"p"),qx(458,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(459,"p"),qx(460,"Quando habilitado ("),Cl(461,"code"),qx(462,"true"),og(),qx(463,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(464,"ul")(465,"li")(466,"code"),qx(467,"po-label"),og()(),Cl(468,"li")(469,"code"),qx(470,"p-requirement (showRequired)"),og()(),Cl(471,"li")(472,"code"),qx(473,"po-helper"),og()()(),Cl(474,"p"),qx(475,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(476,"p"),qx(477,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(478,"ul")(479,"li")(480,"code"),qx(481,"--field-container-title-justify"),og()(),Cl(482,"li")(483,"code"),qx(484,"--field-container-title-flex"),og()()(),Cl(485,"p"),qx(486,"Exemplo:"),og(),Cl(487,"pre")(488,"code"),qx(489,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(490,"p"),qx(491,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(492,"tr",22)(493,"td",23)(494,"div",31)(495,"span",32),qx(496," p-disabled"),Hl(497,"br"),og()()(),Cl(498,"td",27)(499,"code",34),qx(500,"boolean"),og()(),Cl(501,"td",29)(502,"p")(503,"code"),qx(504,"false"),og()()(),Cl(505,"td",30)(506,"em")(507,"strong"),qx(508,"(opcional)"),og()(),Cl(509,"p"),qx(510,"Indica que o campo ser\xE1 desabilitado."),og()()(),Cl(511,"tr",22)(512,"td",23)(513,"div",31)(514,"span",32),qx(515," p-error-limit"),Hl(516,"br"),og()()(),Cl(517,"td",27)(518,"code",34),qx(519,"boolean"),og()(),Cl(520,"td",29)(521,"p")(522,"code"),qx(523,"false"),og()()(),Cl(524,"td",30)(525,"em")(526,"strong"),qx(527,"(opcional)"),og()(),Cl(528,"p"),qx(529,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(530,"blockquote")(531,"p"),qx(532,"Caso essa propriedade seja definida como "),Cl(533,"code"),qx(534,"true"),og(),qx(535,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Cl(536,"tr",22)(537,"td",23)(538,"div",31)(539,"span",32),qx(540," p-field-error-message"),Hl(541,"br"),og()()(),Cl(542,"td",27)(543,"code",33),qx(544,"string"),og()(),Cl(545,"td",29),qx(546,"-"),og(),Cl(547,"td",30)(548,"em")(549,"strong"),qx(550,"(opcional)"),og()(),Cl(551,"p"),qx(552,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),og(),Cl(553,"blockquote")(554,"p"),qx(555,"Necess\xE1rio que a propriedade "),Cl(556,"code"),qx(557,"p-required"),og(),qx(558," esteja habilitada."),og()()()(),Cl(559,"tr",22)(560,"td",23)(561,"div",31)(562,"span",32),qx(563," p-help"),Hl(564,"br"),og()()(),Cl(565,"td",27)(566,"code",33),qx(567,"string"),og()(),Cl(568,"td",29),qx(569,"-"),og(),Cl(570,"td",30)(571,"em")(572,"strong"),qx(573,"(opcional)"),og()(),Cl(574,"p"),qx(575,"Texto de apoio do campo."),og()()(),Cl(576,"tr",22)(577,"td",23)(578,"div",24)(579,"span",25),qx(580," (p-keydown)"),Hl(581,"br"),og()()(),Cl(582,"td",27)(583,"code",28),qx(584,"EventEmitter"),og()(),Cl(585,"td",29),qx(586,"-"),og(),Cl(587,"td",30)(588,"em")(589,"strong"),qx(590,"(opcional)"),og()(),Cl(591,"p"),qx(592,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(593,"code"),qx(594,"KeyboardEvent"),og(),qx(595," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(596,"tr",22)(597,"td",23)(598,"div",31)(599,"span",32),qx(600," p-label"),Hl(601,"br"),og()()(),Cl(602,"td",27)(603,"code",33),qx(604,"string"),og()(),Cl(605,"td",29),qx(606,"-"),og(),Cl(607,"td",30)(608,"em")(609,"strong"),qx(610,"(opcional)"),og()(),Cl(611,"p"),qx(612,"Label do campo."),og()()(),Cl(613,"tr",22)(614,"td",23)(615,"div",31)(616,"span",32),qx(617," p-label-text-wrap"),Hl(618,"br"),og()()(),Cl(619,"td",27)(620,"code",34),qx(621,"boolean"),og()(),Cl(622,"td",29)(623,"p")(624,"code"),qx(625,"false"),og()()(),Cl(626,"td",30)(627,"em")(628,"strong"),qx(629,"(opcional)"),og()(),Cl(630,"p"),qx(631,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(632,"code"),qx(633,"p-label"),og(),qx(634,". Quando "),Cl(635,"code"),qx(636,"p-label-text-wrap"),og(),qx(637,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(638,"tr",22)(639,"td",23)(640,"div",31)(641,"span",32),qx(642," name"),Hl(643,"br"),og()()(),Cl(644,"td",27)(645,"code",33),qx(646,"string"),og()(),Cl(647,"td",29),qx(648,"-"),og(),Cl(649,"td",30)(650,"p"),qx(651,"Nome das op\xE7\xF5es."),og()()(),Cl(652,"tr",22)(653,"td",23)(654,"div",31)(655,"span",32),qx(656," p-optional"),Hl(657,"br"),og()()(),Cl(658,"td",27)(659,"code",34),qx(660,"boolean"),og()(),Cl(661,"td",29)(662,"p")(663,"code"),qx(664,"false"),og()()(),Cl(665,"td",30)(666,"em")(667,"strong"),qx(668,"(opcional)"),og()(),Cl(669,"p"),qx(670,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(671,"blockquote")(672,"p"),qx(673,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(674,"ul")(675,"li"),qx(676,"O campo conter "),Cl(677,"code"),qx(678,"p-required"),og(),qx(679,";"),og(),Cl(680,"li"),qx(681,"N\xE3o possuir "),Cl(682,"code"),qx(683,"p-help"),og(),qx(684," e/ou "),Cl(685,"code"),qx(686,"p-label"),og(),qx(687,"."),og()()()(),Cl(688,"tr",22)(689,"td",23)(690,"div",31)(691,"span",32),qx(692," p-options"),Hl(693,"br"),og()()(),Cl(694,"td",27)(695,"code",36),qx(696,"PoRadioGroupOption[]"),og()(),Cl(697,"td",29),qx(698,"-"),og(),Cl(699,"td",30)(700,"p"),qx(701,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),og()()(),Cl(702,"tr",22)(703,"td",23)(704,"div",31)(705,"span",32),qx(706," p-helper"),Hl(707,"br"),og()()(),Cl(708,"td",27)(709,"code",37),qx(710,"PoHelperOptions "),og(),Cl(711,"code",33),qx(712," string"),og()(),Cl(713,"td",29),qx(714,"-"),og(),Cl(715,"td",30)(716,"em")(717,"strong"),qx(718,"(opcional)"),og()(),Cl(719,"p"),qx(720,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(721,"code"),qx(722,"p-label"),og(),qx(723," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(724,"code"),qx(725,"p-label"),og(),qx(726,"."),og(),Cl(727,"blockquote")(728,"p"),qx(729,"Para mais informa\xE7\xF5es acesse: "),Cl(730,"a",38),qx(731,"https://po-ui.io/documentation/po-helper"),og(),qx(732,"."),og()(),Cl(733,"blockquote")(734,"p"),qx(735,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(736,"code"),qx(737,"p-additional-help-tooltip"),og(),qx(738," e "),Cl(739,"code"),qx(740,"p-additional-help"),og(),qx(741,") ser\xE1 ignorado."),og()()()(),Cl(742,"tr",22)(743,"td",23)(744,"div",31)(745,"span",32),qx(746," p-required"),Hl(747,"br"),og()()(),Cl(748,"td",27)(749,"code",34),qx(750,"boolean"),og()(),Cl(751,"td",29)(752,"p")(753,"code"),qx(754,"false"),og()()(),Cl(755,"td",30)(756,"em")(757,"strong"),qx(758,"(opcional)"),og()(),Cl(759,"p"),qx(760,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Cl(761,"tr",22)(762,"td",23)(763,"div",31)(764,"span",32),qx(765," p-show-required"),Hl(766,"br"),og()()(),Cl(767,"td",27)(768,"code",34),qx(769,"boolean"),og()(),Cl(770,"td",29),qx(771,"-"),og(),Cl(772,"td",30)(773,"p"),qx(774,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(775,"blockquote")(776,"p"),qx(777,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(778,"ul")(779,"li"),qx(780,"N\xE3o possuir "),Cl(781,"code"),qx(782,"p-help"),og(),qx(783," e/ou "),Cl(784,"code"),qx(785,"p-label"),og(),qx(786,"."),og()()()(),Cl(787,"tr",22)(788,"td",23)(789,"div",31)(790,"span",32),qx(791," p-size"),Hl(792,"br"),og()()(),Cl(793,"td",27)(794,"code",33),qx(795,"string"),og()(),Cl(796,"td",29)(797,"p")(798,"code"),qx(799,"medium"),og()()(),Cl(800,"td",30)(801,"em")(802,"strong"),qx(803,"(opcional)"),og()(),Cl(804,"p"),qx(805,"Define o tamanho dos radios do componente:"),og(),Cl(806,"ul")(807,"li")(808,"code"),qx(809,"small"),og(),qx(810,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(811,"li")(812,"code"),qx(813,"medium"),og(),qx(814,": 24x24."),og()(),Cl(815,"blockquote")(816,"p"),qx(817,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(818,"code"),qx(819,"medium"),og(),qx(820,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(821,"a",39),qx(822,"po-theme"),og(),qx(823,"."),og()()()()(),Cl(824,"h3",18),qx(825,"M\xE9todos"),og(),Cl(826,"table",40)(827,"tr",22)(828,"th",41)(829,"div",31)(830,"h4")(831,"span",32),qx(832," focus "),og()()()()(),Cl(833,"tr",30)(834,"td",30)(835,"p"),qx(836,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(837,"p"),qx(838,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(839,"pre")(840,"code"),qx(841,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),og()()()()(),Hl(842,"br"),Cl(843,"table",40)(844,"tr",22)(845,"th",41)(846,"div",31)(847,"h4")(848,"span",32),qx(849," showAdditionalHelp "),og()()()()(),Cl(850,"tr",30)(851,"td",30)(852,"p"),qx(853,"M\xE9todo que exibe "),Cl(854,"code"),qx(855,"p-helper"),og(),qx(856," ou executa a a\xE7\xE3o definida em "),Cl(857,"code"),qx(858,"p-helper{eventOnClick}"),og(),qx(859," ou em "),Cl(860,"code"),qx(861,"p-additionalHelp"),og(),qx(862,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(863,"code"),qx(864,"p-keydown"),og(),qx(865,"."),og(),Cl(866,"blockquote")(867,"p"),qx(868,"Exibe ou oculta o conte\xFAdo do componente "),Cl(869,"code"),qx(870,"po-helper"),og(),qx(871," quando o componente estiver com foco."),og()(),Cl(872,"pre")(873,"code"),qx(874,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),og()(),Cl(875,"pre")(876,"code"),qx(877,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(878,"br"),Cl(879,"h3"),qx(880,"Interfaces"),og(),Cl(881,"h4",42)(882,"code",5),qx(883,"PoRadioGroupOption"),og()(),Cl(884,"div",2)(885,"p"),qx(886,"Interface para as a\xE7\xF5es do componente po-radio-group."),og()(),Cl(887,"h4",18),qx(888,"Propriedades"),og(),Cl(889,"table",19)(890,"tr",20)(891,"th",21),qx(892,"Nome"),og(),Cl(893,"th",21),qx(894,"Tipo"),og(),Cl(895,"th",21),qx(896,"Descri\xE7\xE3o"),og()(),Cl(897,"tr",22)(898,"td",23)(899,"div",31)(900,"span",32),qx(901," disabled"),Hl(902,"br"),og()()(),Cl(903,"td",27)(904,"code",34),qx(905,"boolean"),og()(),Cl(906,"td",30)(907,"em")(908,"strong"),qx(909,"(opcional)"),og()(),Cl(910,"p"),qx(911,"Desabilita o radio."),og()()(),Cl(912,"tr",22)(913,"td",23)(914,"div",31)(915,"span",32),qx(916," label"),Hl(917,"br"),og()()(),Cl(918,"td",27)(919,"code",33),qx(920,"string"),og()(),Cl(921,"td",30)(922,"p"),qx(923,"Texto do radio."),og()()(),Cl(924,"tr",22)(925,"td",23)(926,"div",31)(927,"span",32),qx(928," value"),Hl(929,"br"),og()()(),Cl(930,"td",27)(931,"code",33),qx(932,"string "),og(),Cl(933,"code",35),qx(934," number"),og()(),Cl(935,"td",30)(936,"p"),qx(937,"Valor do radio."),og()()()()());},dependencies:[Zr],encapsulation:2})}return i})();var fe=(()=>{class i{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||i)(w(Xn),w(Cn))};static \u0275cmp=Un({type:i,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Radio Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return n.changeTab("doc")}),Hl(3,"sample-po-radio-group-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return n.changeTab("web")}),Hl(5,"sample-po-radio-group-basic-view")(6,"sample-po-radio-group-labs-view")(7,"sample-po-radio-group-translator-view")(8,"sample-po-radio-group-translator-reactive-form-view"),og()()()),r&2&&(ZE("p-actions",n.actions),Lp(2),ZE("p-active",n.activeTab==="doc"),Lp(2),ZE("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"));},dependencies:[SNe,ofe,lfe,me,ce,Ee,he,Se],encapsulation:2})}return i})();var Be=[{path:"",component:fe}],xe=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[bL.forChild(Be),bL]})}return i})();var bt=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=fe$1({type:i});static \u0275inj=ue$1({imports:[ca,xe]})}return i})();export{bt as DocPoRadioGroupModule};