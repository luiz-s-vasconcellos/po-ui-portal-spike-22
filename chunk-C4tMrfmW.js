import {f as fe,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,cp as Uhe,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,aJ as Ghe,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,bd as xx,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var te=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-basic"]],standalone:false,decls:1,vars:0,consts:[["name","number","p-label","PO Number"]],template:function(r,i){r&1&&Wl(0,"po-number",0);},dependencies:[Uhe],encapsulation:2,changeDetection:1})}return l})();var ce=l=>({"docs-sample-code-tabs":l}),ie=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Number Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-number-basic/sample-po-number-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-number-basic/sample-po-number-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-number-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ce,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,te],encapsulation:2})}return l})();var oe=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:"an an-currency-circle-dollar",label:"an an-currency-circle-dollar"},{value:"an an-currency-btc",label:"an an-currency-btc"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event="",this.messageErrorPattern="",this.label=void 0,this.placeholder="",this.help="",this.icon="",this.size="medium",this.step=void 0,this.properties=[];}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-labs"]],standalone:false,decls:23,vars:43,consts:[["f","ngForm"],["name","PO number",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-max","p-maxlength","p-min","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-step","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","messageErrorPattern","p-clean","","p-label","Message error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Minlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Maxlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","step","p-clean","","p-label","Step",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=Ex();Sl(0,"po-number",1),Ew("ngModelChange",function(o){return Xy(p),tN(i.number,o)||(i.number=o),Qy(o)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),sg(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(o){return Xy(p),tN(i.label,o)||(i.label=o),Qy(o)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(o){return Xy(p),tN(i.help,o)||(i.help=o),Qy(o)}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(o){return Xy(p),tN(i.helperText,o)||(i.helperText=o),Qy(o)}),sg(),JA(),Sl(11,"po-input",8),Ew("ngModelChange",function(o){return Xy(p),tN(i.placeholder,o)||(i.placeholder=o),Qy(o)}),sg(),JA(),Sl(12,"po-input",9),Ew("ngModelChange",function(o){return Xy(p),tN(i.messageErrorPattern,o)||(i.messageErrorPattern=o),Qy(o)}),sg(),JA(),Sl(13,"po-number",10),Ew("ngModelChange",function(o){return Xy(p),tN(i.min,o)||(i.min=o),Qy(o)}),sg(),JA(),Sl(14,"po-number",11),Ew("ngModelChange",function(o){return Xy(p),tN(i.minlength,o)||(i.minlength=o),Qy(o)}),sg(),JA(),Sl(15,"po-number",12),Ew("ngModelChange",function(o){return Xy(p),tN(i.max,o)||(i.max=o),Qy(o)}),sg(),JA(),Sl(16,"po-number",13),Ew("ngModelChange",function(o){return Xy(p),tN(i.maxlength,o)||(i.maxlength=o),Qy(o)}),sg(),JA(),Sl(17,"po-number",14),Ew("ngModelChange",function(o){return Xy(p),tN(i.step,o)||(i.step=o),Qy(o)}),sg(),JA(),Sl(18,"po-select",15),Ew("ngModelChange",function(o){return Xy(p),tN(i.icon,o)||(i.icon=o),Qy(o)}),sg(),JA(),Sl(19,"po-checkbox-group",16),Ew("ngModelChange",function(o){return Xy(p),tN(i.properties,o)||(i.properties=o),Qy(o)}),sg(),JA(),Sl(20,"po-radio-group",17),Ew("ngModelChange",function(o){return Xy(p),tN(i.size,o)||(i.size=o),Qy(o)}),sg(),JA(),Sl(21,"div",2)(22,"po-button",18),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(Dw("ngModel",i.number),tw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.messageErrorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-max",i.max)("p-maxlength",i.maxlength)("p-min",i.min)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-step",i.step)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),t0(),Vp(3),tw("p-value",i.number),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.help),t0(),Vp(),Dw("ngModel",i.helperText),t0(),Vp(),Dw("ngModel",i.placeholder),t0(),Vp(),Dw("ngModel",i.messageErrorPattern),t0(),Vp(),Dw("ngModel",i.min),t0(),Vp(),Dw("ngModel",i.minlength),t0(),Vp(),Dw("ngModel",i.max),t0(),Vp(),Dw("ngModel",i.maxlength),t0(),Vp(),Dw("ngModel",i.step),t0(),Vp(),Dw("ngModel",i.icon),tw("p-options",i.iconOptions),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Uhe,Pde,Ghe,Qhe],encapsulation:2,changeDetection:1})}return l})();var ge=l=>({"docs-sample-code-tabs":l}),ae=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Number Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-number-labs/sample-po-number-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-number
  class="po-md-12"
  name="PO number"
  [(ngModel)]="number"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="messageErrorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="$safeNavigationMigration(properties?.includes('loading'))"
  [p-max]="max"
  [p-maxlength]="maxlength"
  [p-min]="min"
  [p-minlength]="minlength"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-step]="step"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
>
</po-number>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="number"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="messageErrorPattern"
    [(ngModel)]="messageErrorPattern"
    p-clean
    p-label="Message error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Minlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Maxlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="step" [(ngModel)]="step" p-clean p-label="Step"> </po-number>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

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
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-number-labs/sample-po-number-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-labs',
  templateUrl: './sample-po-number-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberLabsComponent implements OnInit {
  helperText: string;
  event: string;
  messageErrorPattern: string;
  help: string;
  icon: string;
  label: string;
  max: number;
  maxlength: number;
  min: number;
  minlength: number;
  number: number;
  placeholder: string;
  properties: Array<string>;
  size: string;
  step: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-currency-circle-dollar', label: 'an an-currency-circle-dollar' },
    { value: 'an an-currency-btc', label: 'an an-currency-btc' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.number = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.event = '';
    this.messageErrorPattern = '';
    this.label = undefined;
    this.placeholder = '';
    this.help = '';
    this.icon = '';
    this.size = 'medium';
    this.step = undefined;
    this.properties = [];
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-number-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ge,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,oe],encapsulation:2})}return l})();var le=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:"S\xE3o Paulo"},{value:17,label:"Alagoas"},{value:15,label:"Cear\xE1"}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100);}loadICMS(){this.icms=this.state;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-calculate"]],standalone:false,decls:16,vars:9,consts:[["f","ngForm"],[1,"po-row"],["name","price","p-label","Price","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantity","p-label","Quantity","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State","p-required","","p-sort","",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],["name","icms","p-label","ICMS %","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","liquid","p-label","Liquid","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","total","p-label","Total","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Calculate",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=Ex();Sl(0,"h3"),Jx(1,"Calculate Tax"),sg(),Wl(2,"po-divider"),Sl(3,"form",null,0)(5,"div",1)(6,"po-number",2),Ew("ngModelChange",function(o){return Xy(p),tN(i.price,o)||(i.price=o),Qy(o)}),sg(),JA(),Sl(7,"po-number",3),Ew("ngModelChange",function(o){return Xy(p),tN(i.quantity,o)||(i.quantity=o),Qy(o)}),sg(),JA(),sg(),Sl(8,"div")(9,"po-select",4),Ew("ngModelChange",function(o){return Xy(p),tN(i.state,o)||(i.state=o),Qy(o)}),ht("p-change",function(){return i.loadICMS()}),sg(),JA(),Sl(10,"po-number",5),Ew("ngModelChange",function(o){return Xy(p),tN(i.icms,o)||(i.icms=o),Qy(o)}),sg(),JA(),Sl(11,"po-number",6),Ew("ngModelChange",function(o){return Xy(p),tN(i.liquid,o)||(i.liquid=o),Qy(o)}),sg(),JA(),Sl(12,"po-number",7),Ew("ngModelChange",function(o){return Xy(p),tN(i.total,o)||(i.total=o),Qy(o)}),sg(),JA(),sg(),Sl(13,"div",1)(14,"po-button",8),ht("p-click",function(){return i.calculate()}),sg(),Sl(15,"po-button",9),ht("p-click",function(){Xy(p);let o=xx(4);return Qy(o.reset())}),sg()()();}if(r&2){let p=xx(4);Vp(6),Dw("ngModel",i.price),t0(),Vp(),Dw("ngModel",i.quantity),t0(),Vp(2),Dw("ngModel",i.state),tw("p-options",i.statesOptions),t0(),Vp(),Dw("ngModel",i.icms),t0(),Vp(),Dw("ngModel",i.liquid),t0(),Vp(),Dw("ngModel",i.total),t0(),Vp(2),tw("p-disabled",p.invalid),Vp(),tw("p-disabled",p.invalid);}},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,Uhe,Ghe],encapsulation:2,changeDetection:1})}return l})();var he=l=>({"docs-sample-code-tabs":l}),re=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-calculate-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Number - Calculate"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-number-calculate/sample-po-number-calculate.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<h3>Calculate Tax</h3>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-6" name="price" [(ngModel)]="price" p-label="Price" p-required> </po-number>

    <po-number class="po-md-6" name="quantity" [(ngModel)]="quantity" p-label="Quantity" p-required> </po-number>
  </div>

  <div>
    <po-select
      class="po-md-6 po-lg-3"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      p-required
      p-sort
      [p-options]="statesOptions"
      (p-change)="loadICMS()"
    >
    </po-select>

    <po-number class="po-md-6 po-lg-3" name="icms" [(ngModel)]="icms" p-label="ICMS %" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="liquid" [(ngModel)]="liquid" p-label="Liquid" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="total" [(ngModel)]="total" p-label="Total" p-disabled> </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Calculate" [p-disabled]="f.invalid" (p-click)="calculate()"> </po-button>

    <po-button class="po-md-3" p-label="Clean" [p-disabled]="f.invalid" (p-click)="f.reset()"> </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-number-calculate/sample-po-number-calculate.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-calculate',
  templateUrl: './sample-po-number-calculate.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberCalculateComponent {
  icms: number;
  liquid: number;
  price: number;
  quantity: number;
  state: number;
  total: number;

  public readonly statesOptions: Array<PoSelectOption> = [
    { value: 18, label: 'S\xE3o Paulo' },
    { value: 17, label: 'Alagoas' },
    { value: 15, label: 'Cear\xE1' }
  ];

  calculate() {
    const realPrice = this.price * this.quantity;
    this.liquid = realPrice;
    this.total = realPrice + realPrice * (this.state / 100);
  }

  loadICMS() {
    this.icms = this.state;
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-number-calculate"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,he,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,le],encapsulation:2})}return l})();var me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-doc"]],standalone:false,decls:1418,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoNumberComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),sg(),Sl(24,"p"),Jx(25,"Importante:"),sg(),Sl(26,"ul")(27,"li"),Jx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),sg()(),Sl(29,"h4"),Jx(30,"Tokens customiz\xE1veis"),sg(),Sl(31,"p"),Jx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(33,"br"),Jx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(35,"code"),Jx(36,".po-input"),sg()(),Sl(37,"blockquote")(38,"p"),Jx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Sl(40,"a",6),Jx(41,"Grid System"),sg(),Jx(42,"."),sg()(),Sl(43,"blockquote")(44,"p"),Jx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(46,"a",7),Jx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(48,"."),sg()(),Sl(49,"table")(50,"thead")(51,"tr")(52,"th"),Jx(53,"Propriedade"),sg(),Sl(54,"th"),Jx(55,"Descri\xE7\xE3o"),sg(),Sl(56,"th"),Jx(57,"Valor Padr\xE3o"),sg()()(),Sl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Jx(62,"Default Values"),sg()(),Wl(63,"td")(64,"td"),sg(),Sl(65,"tr")(66,"td")(67,"code"),Jx(68,"--font-family"),sg()(),Sl(69,"td"),Jx(70,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(71,"td")(72,"code"),Jx(73,"var(--font-family-theme)"),sg()()(),Sl(74,"tr")(75,"td")(76,"code"),Jx(77,"--font-size"),sg()(),Sl(78,"td"),Jx(79,"Tamanho da fonte"),sg(),Sl(80,"td")(81,"code"),Jx(82,"var(--font-size-default)"),sg()()(),Sl(83,"tr")(84,"td")(85,"code"),Jx(86,"--text-color-placeholder"),sg()(),Sl(87,"td"),Jx(88,"Cor do texto placeholder"),sg(),Sl(89,"td")(90,"code"),Jx(91,"var(--color-neutral-light-30)"),sg()()(),Sl(92,"tr")(93,"td")(94,"code"),Jx(95,"--color"),sg()(),Sl(96,"td"),Jx(97,"Cor pincipal do input"),sg(),Sl(98,"td")(99,"code"),Jx(100,"var(--color-neutral-dark-70)"),sg()()(),Sl(101,"tr")(102,"td")(103,"code"),Jx(104,"--background"),sg()(),Sl(105,"td"),Jx(106,"Cor de background"),sg(),Sl(107,"td")(108,"code"),Jx(109,"var(--color-neutral-light-05)"),sg()()(),Sl(110,"tr")(111,"td")(112,"code"),Jx(113,"--padding"),sg()(),Sl(114,"td"),Jx(115,"Preenchimento"),sg(),Sl(116,"td")(117,"code"),Jx(118,"0 0.5rem"),sg()()(),Sl(119,"tr")(120,"td")(121,"code"),Jx(122,"--text-color"),sg()(),Sl(123,"td"),Jx(124,"Cor do texto"),sg(),Sl(125,"td")(126,"code"),Jx(127,"var(--color-neutral-dark-90)"),sg()()(),Sl(128,"tr")(129,"td")(130,"code"),Jx(131,"--field-container-title-justify"),sg()(),Sl(132,"td"),Jx(133,"Alinhamento horizontal do t\xEDtulo ("),Sl(134,"code"),Jx(135,"justify-content"),sg(),Jx(136,")"),sg(),Sl(137,"td")(138,"code"),Jx(139,"space-between"),sg()()(),Sl(140,"tr")(141,"td")(142,"code"),Jx(143,"--field-container-title-flex"),sg()(),Sl(144,"td"),Jx(145,"Flex do t\xEDtulo ("),Sl(146,"code"),Jx(147,"flex"),sg(),Jx(148,")"),sg(),Sl(149,"td")(150,"code"),Jx(151,"1 auto"),sg()()(),Sl(152,"tr")(153,"td")(154,"strong"),Jx(155,"Hover"),sg()(),Wl(156,"td")(157,"td"),sg(),Sl(158,"tr")(159,"td")(160,"code"),Jx(161,"--color-hover"),sg()(),Sl(162,"td"),Jx(163,"Cor principal no estado hover"),sg(),Sl(164,"td")(165,"code"),Jx(166,"var(--color-brand-01-dark)"),sg()()(),Sl(167,"tr")(168,"td")(169,"code"),Jx(170,"--background-hover"),sg()(),Sl(171,"td"),Jx(172,"Cor de background no estado hover"),sg(),Sl(173,"td")(174,"code"),Jx(175,"var(--color-brand-01-lightest)"),sg()()(),Sl(176,"tr")(177,"td")(178,"strong"),Jx(179,"Focused"),sg()(),Wl(180,"td")(181,"td"),sg(),Sl(182,"tr")(183,"td")(184,"code"),Jx(185,"--color-focused"),sg()(),Sl(186,"td"),Jx(187,"Cor principal no estado de focus"),sg(),Sl(188,"td")(189,"code"),Jx(190,"var(--color-action-default)"),sg()()(),Sl(191,"tr")(192,"td")(193,"code"),Jx(194,"--outline-color-focused"),sg()(),Sl(195,"td"),Jx(196,"Cor do outline do estado de focus"),sg(),Sl(197,"td")(198,"code"),Jx(199,"var(--color-action-focus)"),sg()()(),Sl(200,"tr")(201,"td")(202,"strong"),Jx(203,"Disabled"),sg()(),Wl(204,"td")(205,"td"),sg(),Sl(206,"tr")(207,"td")(208,"code"),Jx(209,"--color-disabled"),sg()(),Sl(210,"td"),Jx(211,"Cor principal no estado disabled"),sg(),Sl(212,"td")(213,"code"),Jx(214,"var(--color-neutral-light-30)"),sg()()(),Sl(215,"tr")(216,"td")(217,"code"),Jx(218,"--background-disabled"),sg()(),Sl(219,"td"),Jx(220,"Cor de background no estado disabled"),sg(),Sl(221,"td")(222,"code"),Jx(223,"var(--color-neutral-light-20)"),sg()()(),Sl(224,"tr")(225,"td")(226,"code"),Jx(227,"--text-color-disabled"),sg()(),Sl(228,"td"),Jx(229,"Cor do texto no estado disabled"),sg(),Sl(230,"td")(231,"code"),Jx(232,"var(--color-neutral-dark-70)"),sg()()()()(),Sl(233,"p"),Wl(234,"br"),Jx(235," O "),Sl(236,"code"),Jx(237,"po-number"),sg(),Jx(238,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),sg()(),Sl(239,"div",8)(240,"h4",9),Jx(241,"Seletor"),sg(),Sl(242,"pre",10),Jx(243,`<po-number
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-max="number"
    p-maxlength="number"
    p-min="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-step="string"
    p-upper-case="boolean" >
</po-number>
`),sg()(),Sl(244,"h4",11),Jx(245,"Propriedades"),sg(),Sl(246,"table",12)(247,"tr",13)(248,"th",14),Jx(249,"Nome"),sg(),Sl(250,"th",14),Jx(251,"Tipo"),sg(),Sl(252,"th",14),Jx(253,"Padr\xE3o"),sg(),Sl(254,"th",14),Jx(255,"Descri\xE7\xE3o"),sg()(),Sl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),Jx(260," (p-additional-help)"),Wl(261,"br"),sg()(),Sl(262,"div",19),Jx(263,"Deprecated"),sg()(),Sl(264,"td",20)(265,"code",21),Jx(266,"EventEmitter"),sg()(),Sl(267,"td",22),Jx(268,"-"),sg(),Sl(269,"td",23)(270,"em")(271,"strong"),Jx(272,"(opcional)"),sg()(),Sl(273,"p"),Jx(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(275,"blockquote")(276,"p"),Jx(277,"Essa propriedade est\xE1 "),Sl(278,"strong"),Jx(279,"depreciada"),sg(),Jx(280," e ser\xE1 removida na vers\xE3o "),Sl(281,"code"),Jx(282,"23.x.x"),sg(),Jx(283,". Recomendamos utilizar a propriedade "),Sl(284,"code"),Jx(285,"p-helper"),sg(),Jx(286," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),Jx(291," p-additional-help-tooltip"),Wl(292,"br"),sg()(),Sl(293,"div",19),Jx(294,"Deprecated"),sg()(),Sl(295,"td",20)(296,"code",26),Jx(297,"string"),sg()(),Sl(298,"td",22),Jx(299,"-"),sg(),Sl(300,"td",23)(301,"em")(302,"strong"),Jx(303,"(opcional)"),sg()(),Sl(304,"p"),Jx(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(306,"code"),Jx(307,"po-helper"),sg(),Jx(308,`.
`),Sl(309,"strong"),Jx(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(311,"blockquote")(312,"p"),Jx(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Sl(314,"blockquote")(315,"p"),Jx(316,"Essa propriedade est\xE1 "),Sl(317,"strong"),Jx(318,"depreciada"),sg(),Jx(319," e ser\xE1 removida na vers\xE3o "),Sl(320,"code"),Jx(321,"23.x.x"),sg(),Jx(322,". Recomendamos utilizar a propriedade "),Sl(323,"code"),Jx(324,"p-helper"),sg(),Jx(325," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),Jx(330," p-append-in-body"),Wl(331,"br"),sg()()(),Sl(332,"td",20)(333,"code",27),Jx(334,"boolean"),sg()(),Sl(335,"td",22)(336,"p")(337,"code"),Jx(338,"false"),sg()()(),Sl(339,"td",23)(340,"em")(341,"strong"),Jx(342,"(opcional)"),sg()(),Sl(343,"p"),Jx(344,"Define que o popover ("),Sl(345,"code"),Jx(346,"p-helper"),sg(),Jx(347," e/ou "),Sl(348,"code"),Jx(349,"p-error-limit"),sg(),Jx(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Sl(351,"blockquote")(352,"p"),Jx(353,"Quando utilizado com "),Sl(354,"code"),Jx(355,"p-helper"),sg(),Jx(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),Jx(361," p-auto-focus"),Wl(362,"br"),sg()()(),Sl(363,"td",20)(364,"code",27),Jx(365,"boolean"),sg()(),Sl(366,"td",22)(367,"p")(368,"code"),Jx(369,"false"),sg()()(),Sl(370,"td",23)(371,"em")(372,"strong"),Jx(373,"(opcional)"),sg()(),Sl(374,"p"),Jx(375,"Aplica foco no elemento ao ser iniciado."),sg(),Sl(376,"blockquote")(377,"p"),Jx(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Sl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),Jx(383," (p-blur)"),Wl(384,"br"),sg()()(),Sl(385,"td",20)(386,"code",21),Jx(387,"EventEmitter"),sg()(),Sl(388,"td",22),Jx(389,"-"),sg(),Sl(390,"td",23)(391,"em")(392,"strong"),Jx(393,"(opcional)"),sg()(),Sl(394,"p"),Jx(395,"Evento disparado ao sair do campo."),sg()()(),Sl(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),Jx(400," (p-change)"),Wl(401,"br"),sg()()(),Sl(402,"td",20)(403,"code",21),Jx(404,"EventEmitter"),sg()(),Sl(405,"td",22),Jx(406,"-"),sg(),Sl(407,"td",23)(408,"em")(409,"strong"),Jx(410,"(opcional)"),sg()(),Sl(411,"p"),Jx(412,"Evento disparado ao alterar valor e deixar o campo."),sg()()(),Sl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),Jx(417," (p-change-model)"),Wl(418,"br"),sg()()(),Sl(419,"td",20)(420,"code",21),Jx(421,"EventEmitter"),sg()(),Sl(422,"td",22),Jx(423,"-"),sg(),Sl(424,"td",23)(425,"em")(426,"strong"),Jx(427,"(opcional)"),sg()(),Sl(428,"p"),Jx(429,"Evento disparado ao alterar valor do model."),sg()()(),Sl(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),Jx(434,"p-clean"),Wl(435,"br"),sg()()(),Sl(436,"td",20)(437,"code",27),Jx(438,"boolean"),sg()(),Sl(439,"td",22),Jx(440,"-"),sg(),Sl(441,"td",23)(442,"em")(443,"strong"),Jx(444,"(opcional)"),sg()(),Sl(445,"p"),Jx(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg()()(),Sl(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),Jx(451," p-compact-label"),Wl(452,"br"),sg()()(),Sl(453,"td",20)(454,"code",27),Jx(455,"boolean"),sg()(),Sl(456,"td",22)(457,"p")(458,"code"),Jx(459,"false"),sg()()(),Sl(460,"td",23)(461,"em")(462,"strong"),Jx(463,"(opcional)"),sg()(),Sl(464,"p"),Jx(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(466,"p"),Jx(467,"Quando habilitado ("),Sl(468,"code"),Jx(469,"true"),sg(),Jx(470,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(471,"ul")(472,"li")(473,"code"),Jx(474,"po-label"),sg()(),Sl(475,"li")(476,"code"),Jx(477,"p-requirement (showRequired)"),sg()(),Sl(478,"li")(479,"code"),Jx(480,"po-helper"),sg()()(),Sl(481,"p"),Jx(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(483,"p"),Jx(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(485,"ul")(486,"li")(487,"code"),Jx(488,"--field-container-title-justify"),sg()(),Sl(489,"li")(490,"code"),Jx(491,"--field-container-title-flex"),sg()()(),Sl(492,"p"),Jx(493,"Exemplo:"),sg(),Sl(494,"pre")(495,"code"),Jx(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(497,"p"),Jx(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),Jx(503,"p-disabled"),Wl(504,"br"),sg()()(),Sl(505,"td",20)(506,"code",27),Jx(507,"boolean"),sg()(),Sl(508,"td",22)(509,"p")(510,"code"),Jx(511,"false"),sg()()(),Sl(512,"td",23)(513,"em")(514,"strong"),Jx(515,"(opcional)"),sg()(),Sl(516,"p"),Jx(517,"Se verdadeiro, desabilita o campo."),sg()()(),Sl(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),Jx(522," p-emit-all-changes"),Wl(523,"br"),sg()()(),Sl(524,"td",20)(525,"code",27),Jx(526,"boolean"),sg()(),Sl(527,"td",22)(528,"p")(529,"code"),Jx(530,"false"),sg()()(),Sl(531,"td",23)(532,"em")(533,"strong"),Jx(534,"(opcional)"),sg()(),Sl(535,"p"),Jx(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),sg()()(),Sl(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),Jx(541," (p-enter)"),Wl(542,"br"),sg()()(),Sl(543,"td",20)(544,"code",21),Jx(545,"EventEmitter"),sg()(),Sl(546,"td",22),Jx(547,"-"),sg(),Sl(548,"td",23)(549,"em")(550,"strong"),Jx(551,"(opcional)"),sg()(),Sl(552,"p"),Jx(553,"Evento disparado ao entrar do campo."),sg()()(),Sl(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),Jx(558," p-error-async-properties"),Wl(559,"br"),sg()()(),Sl(560,"td",20)(561,"code",28),Jx(562,"ErrorAsyncProperties"),sg()(),Sl(563,"td",22),Jx(564,"-"),sg(),Sl(565,"td",23)(566,"em")(567,"strong"),Jx(568,"(opcional)"),sg()(),Sl(569,"p"),Jx(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Sl(571,"code"),Jx(572,"Reactive Forms"),sg(),Jx(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Sl(574,"code"),Jx(575,"asyncValidators"),sg(),Jx(576,"."),sg()()(),Sl(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),Jx(581," p-error-limit"),Wl(582,"br"),sg()()(),Sl(583,"td",20)(584,"code",27),Jx(585,"boolean"),sg()(),Sl(586,"td",22)(587,"p")(588,"code"),Jx(589,"false"),sg()()(),Sl(590,"td",23)(591,"em")(592,"strong"),Jx(593,"(opcional)"),sg()(),Sl(594,"p"),Jx(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Sl(596,"blockquote")(597,"p"),Jx(598,"Caso essa propriedade seja definida como "),Sl(599,"code"),Jx(600,"true"),sg(),Jx(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Sl(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),Jx(606," p-error-pattern"),Wl(607,"br"),sg()()(),Sl(608,"td",20)(609,"code",26),Jx(610,"string"),sg()(),Sl(611,"td",22),Jx(612,"-"),sg(),Sl(613,"td",23)(614,"em")(615,"strong"),Jx(616,"(opcional)"),sg()(),Sl(617,"p"),Jx(618,"Mensagem que ser\xE1 apresentada quando o "),Sl(619,"code"),Jx(620,"pattern"),sg(),Jx(621," ou a m\xE1scara n\xE3o for satisfeita."),sg(),Sl(622,"blockquote")(623,"p"),Jx(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Sl(625,"code"),Jx(626,"p-required-field-error-message"),sg(),Jx(627," em conjunto."),sg()()()(),Sl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),Jx(632," p-help"),Wl(633,"br"),sg()()(),Sl(634,"td",20)(635,"code",26),Jx(636,"string"),sg()(),Sl(637,"td",22),Jx(638,"-"),sg(),Sl(639,"td",23)(640,"em")(641,"strong"),Jx(642,"(opcional)"),sg()(),Sl(643,"p"),Jx(644,"Texto de apoio do campo."),sg()()(),Sl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),Jx(649," p-icon"),Wl(650,"br"),sg()()(),Sl(651,"td",20)(652,"code",26),Jx(653,"string "),sg(),Sl(654,"code",29),Jx(655," TemplateRef<void>"),sg()(),Sl(656,"td",22),Jx(657,"-"),sg(),Sl(658,"td",23)(659,"em")(660,"strong"),Jx(661,"(opcional)"),sg()(),Sl(662,"p"),Jx(663,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Sl(664,"p"),Jx(665,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(666,"a",30),Jx(667,"Biblioteca de \xEDcones"),sg(),Jx(668,". conforme exemplo abaixo:"),sg(),Sl(669,"pre")(670,"code"),Jx(671,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),sg()(),Sl(672,"p"),Jx(673,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(674,"em"),Jx(675,"Font Awesome"),sg(),Jx(676,", da seguinte forma:"),sg(),Sl(677,"pre")(678,"code"),Jx(679,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),sg()(),Sl(680,"p"),Jx(681,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(682,"code"),Jx(683,"TemplateRef"),sg(),Jx(684,", conforme exemplo abaixo:"),sg(),Sl(685,"pre")(686,"code"),Jx(687,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Sl(688,"blockquote")(689,"p"),Jx(690,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(691,"code"),Jx(692,"font-size: inherit"),sg(),Jx(693," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Sl(694,"tr",15)(695,"td",16)(696,"div",17)(697,"span",18),Jx(698," (p-keydown)"),Wl(699,"br"),sg()()(),Sl(700,"td",20)(701,"code",21),Jx(702,"EventEmitter"),sg()(),Sl(703,"td",22),Jx(704,"-"),sg(),Sl(705,"td",23)(706,"em")(707,"strong"),Jx(708,"(opcional)"),sg()(),Sl(709,"p"),Jx(710,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(711,"code"),Jx(712,"KeyboardEvent"),sg(),Jx(713," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),Jx(718," p-label"),Wl(719,"br"),sg()()(),Sl(720,"td",20)(721,"code",26),Jx(722,"string"),sg()(),Sl(723,"td",22),Jx(724,"-"),sg(),Sl(725,"td",23)(726,"em")(727,"strong"),Jx(728,"(opcional)"),sg()(),Sl(729,"p"),Jx(730,"R\xF3tulo do campo."),sg()()(),Sl(731,"tr",15)(732,"td",16)(733,"div",24)(734,"span",25),Jx(735," p-label-text-wrap"),Wl(736,"br"),sg()()(),Sl(737,"td",20)(738,"code",27),Jx(739,"boolean"),sg()(),Sl(740,"td",22)(741,"p")(742,"code"),Jx(743,"false"),sg()()(),Sl(744,"td",23)(745,"em")(746,"strong"),Jx(747,"(opcional)"),sg()(),Sl(748,"p"),Jx(749,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(750,"code"),Jx(751,"p-label"),sg(),Jx(752,". Quando "),Sl(753,"code"),Jx(754,"p-label-text-wrap"),sg(),Jx(755,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Sl(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),Jx(760," p-loading"),Wl(761,"br"),sg()()(),Sl(762,"td",20)(763,"code",27),Jx(764,"boolean"),sg()(),Sl(765,"td",22)(766,"p")(767,"code"),Jx(768,"false"),sg()()(),Sl(769,"td",23)(770,"em")(771,"strong"),Jx(772,"(opcional)"),sg()(),Sl(773,"p"),Jx(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Sl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),Jx(779,"p-mask"),Wl(780,"br"),sg()()(),Sl(781,"td",20)(782,"code",26),Jx(783,"string"),sg()(),Sl(784,"td",22),Jx(785,"-"),sg(),Sl(786,"td",23)(787,"em")(788,"strong"),Jx(789,"(opcional)"),sg()(),Sl(790,"p"),Jx(791,"Indica uma m\xE1scara para o campo, por\xE9m \xE9 incompat\xEDvel com o "),Sl(792,"code"),Jx(793,"po-number"),sg(),Jx(794,"."),sg(),Sl(795,"blockquote")(796,"p")(797,"strong"),Jx(798,"Componentes compat\xEDveis:"),sg(),Sl(799,"code"),Jx(800,"po-input"),sg(),Jx(801,","),Sl(802,"code"),Jx(803,"po-decimal"),sg(),Jx(804,"."),sg()()()(),Sl(805,"tr",15)(806,"td",16)(807,"div",24)(808,"span",25),Jx(809,"p-mask-format-model"),Wl(810,"br"),sg()()(),Sl(811,"td",20)(812,"code",27),Jx(813,"boolean"),sg()(),Sl(814,"td",22)(815,"p")(816,"code"),Jx(817,"false"),sg()()(),Sl(818,"td",23)(819,"em")(820,"strong"),Jx(821,"(opcional)"),sg()(),Sl(822,"p"),Jx(823,"Indica se o "),Sl(824,"code"),Jx(825,"model"),sg(),Jx(826," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),sg()()(),Sl(827,"tr",15)(828,"td",16)(829,"div",24)(830,"span",25),Jx(831," p-mask-no-length-validation"),Wl(832,"br"),sg()()(),Sl(833,"td",20)(834,"code",27),Jx(835,"boolean"),sg()(),Sl(836,"td",22)(837,"p")(838,"code"),Jx(839,"false"),sg()()(),Sl(840,"td",23)(841,"p"),Jx(842,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(843,"code"),Jx(844,"minLength"),sg(),Jx(845,") e m\xE1ximo ("),Sl(846,"code"),Jx(847,"maxLength"),sg(),Jx(848,") quando h\xE1 uma m\xE1scara ("),Sl(849,"code"),Jx(850,"p-mask"),sg(),Jx(851,") definida."),sg(),Sl(852,"ul")(853,"li"),Jx(854,"Quando "),Sl(855,"code"),Jx(856,"true"),sg(),Jx(857,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Sl(858,"li"),Jx(859,"Quando "),Sl(860,"code"),Jx(861,"false"),sg(),Jx(862,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Sl(863,"blockquote")(864,"p"),Jx(865,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(866,"code"),Jx(867,"p-mask-format-model"),sg(),Jx(868,"."),sg()(),Sl(869,"p"),Jx(870,"Exemplo:"),sg(),Sl(871,"pre")(872,"code"),Jx(873,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),sg()(),Sl(874,"ul")(875,"li"),Jx(876,"Entrada: "),Sl(877,"code"),Jx(878,"123-456"),sg(),Jx(879," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Sl(880,"code"),Jx(881,"-"),sg(),Jx(882,"."),sg()()()(),Sl(883,"tr",15)(884,"td",16)(885,"div",24)(886,"span",25),Jx(887,"p-max"),Wl(888,"br"),sg()()(),Sl(889,"td",20)(890,"code",31),Jx(891,"number"),sg()(),Sl(892,"td",22),Jx(893,"-"),sg(),Sl(894,"td",23)(895,"em")(896,"strong"),Jx(897,"(opcional)"),sg()(),Sl(898,"p"),Jx(899,"Valor m\xE1ximo."),sg(),Sl(900,"blockquote")(901,"p"),Jx(902,"Quando o valor m\xE1ximo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),Sl(903,"code"),Jx(904,"p-step"),sg(),Jx(905," tamb\xE9m passando a ela um valor decimal."),sg()()()(),Sl(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),Jx(910," p-maxlength"),Wl(911,"br"),sg()()(),Sl(912,"td",20)(913,"code",31),Jx(914,"number"),sg()(),Sl(915,"td",22),Jx(916,"-"),sg(),Sl(917,"td",23)(918,"em")(919,"strong"),Jx(920,"(opcional)"),sg()(),Sl(921,"p"),Jx(922,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),sg()()(),Sl(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),Jx(927,"p-min"),Wl(928,"br"),sg()()(),Sl(929,"td",20)(930,"code",31),Jx(931,"number"),sg()(),Sl(932,"td",22),Jx(933,"-"),sg(),Sl(934,"td",23)(935,"em")(936,"strong"),Jx(937,"(opcional)"),sg()(),Sl(938,"p"),Jx(939,"Valor m\xEDnimo."),sg(),Sl(940,"blockquote")(941,"p"),Jx(942,"Quando o valor m\xEDnimo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),Sl(943,"code"),Jx(944,"p-step"),sg(),Jx(945," tamb\xE9m passando a ela um valor decimal."),sg()()()(),Sl(946,"tr",15)(947,"td",16)(948,"div",24)(949,"span",25),Jx(950," p-minlength"),Wl(951,"br"),sg()()(),Sl(952,"td",20)(953,"code",31),Jx(954,"number"),sg()(),Sl(955,"td",22),Jx(956,"-"),sg(),Sl(957,"td",23)(958,"em")(959,"strong"),Jx(960,"(opcional)"),sg()(),Sl(961,"p"),Jx(962,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),sg()()(),Sl(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),Jx(967," name"),Wl(968,"br"),sg()()(),Sl(969,"td",20)(970,"code",26),Jx(971,"string"),sg()(),Sl(972,"td",22),Jx(973,"-"),sg(),Sl(974,"td",23)(975,"p"),Jx(976,"Nome e identificador do campo."),sg()()(),Sl(977,"tr",15)(978,"td",16)(979,"div",24)(980,"span",25),Jx(981," p-no-autocomplete"),Wl(982,"br"),sg()()(),Sl(983,"td",20)(984,"code",27),Jx(985,"boolean"),sg()(),Sl(986,"td",22)(987,"p")(988,"code"),Jx(989,"false"),sg()()(),Sl(990,"td",23)(991,"em")(992,"strong"),Jx(993,"(opcional)"),sg()(),Sl(994,"p"),Jx(995,"Define a propriedade nativa "),Sl(996,"code"),Jx(997,"autocomplete"),sg(),Jx(998," do campo como "),Sl(999,"code"),Jx(1e3,"off"),sg(),Jx(1001,"."),sg(),Sl(1002,"blockquote")(1003,"p"),Jx(1004,"No componente "),Sl(1005,"code"),Jx(1006,"po-password"),sg(),Jx(1007," ser\xE1 definido como "),Sl(1008,"code"),Jx(1009,"new-password"),sg(),Jx(1010,"."),sg()(),Sl(1011,"p"),Jx(1012,"Nos componentes "),Sl(1013,"code"),Jx(1014,"po-password"),sg(),Jx(1015," e "),Sl(1016,"code"),Jx(1017,"po-login"),sg(),Jx(1018," o valor padr\xE3o ser\xE1 "),Sl(1019,"code"),Jx(1020,"true"),sg(),Jx(1021,"."),sg()()(),Sl(1022,"tr",15)(1023,"td",16)(1024,"div",24)(1025,"span",25),Jx(1026," p-optional"),Wl(1027,"br"),sg()()(),Sl(1028,"td",20)(1029,"code",27),Jx(1030,"boolean"),sg()(),Sl(1031,"td",22)(1032,"p")(1033,"code"),Jx(1034,"false"),sg()()(),Sl(1035,"td",23)(1036,"em")(1037,"strong"),Jx(1038,"(opcional)"),sg()(),Sl(1039,"p"),Jx(1040,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Sl(1041,"blockquote")(1042,"p"),Jx(1043,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(1044,"ul")(1045,"li"),Jx(1046,"O campo conter "),Sl(1047,"code"),Jx(1048,"p-required"),sg(),Jx(1049,";"),sg(),Sl(1050,"li"),Jx(1051,"N\xE3o possuir "),Sl(1052,"code"),Jx(1053,"p-help"),sg(),Jx(1054," e/ou "),Sl(1055,"code"),Jx(1056,"p-label"),sg(),Jx(1057,"."),sg()()()(),Sl(1058,"tr",15)(1059,"td",16)(1060,"div",24)(1061,"span",25),Jx(1062,"p-pattern"),Wl(1063,"br"),sg()()(),Sl(1064,"td",20)(1065,"code",26),Jx(1066,"string"),sg()(),Sl(1067,"td",22),Jx(1068,"-"),sg(),Sl(1069,"td",23)(1070,"em")(1071,"strong"),Jx(1072,"(opcional)"),sg()(),Sl(1073,"p"),Jx(1074,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Sl(1075,"code"),Jx(1076,"(p-mask)"),sg(),Jx(1077,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),sg()()(),Sl(1078,"tr",15)(1079,"td",16)(1080,"div",24)(1081,"span",25),Jx(1082," p-placeholder"),Wl(1083,"br"),sg()()(),Sl(1084,"td",20)(1085,"code",26),Jx(1086,"string"),sg()(),Sl(1087,"td",22)(1088,"p"),Jx(1089,"''"),sg()(),Sl(1090,"td",23)(1091,"em")(1092,"strong"),Jx(1093,"(opcional)"),sg()(),Sl(1094,"p"),Jx(1095,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Sl(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),Jx(1100," p-helper"),Wl(1101,"br"),sg()()(),Sl(1102,"td",20)(1103,"code",32),Jx(1104,"PoHelperOptions "),sg(),Sl(1105,"code",26),Jx(1106," string"),sg()(),Sl(1107,"td",22),Jx(1108,"-"),sg(),Sl(1109,"td",23)(1110,"em")(1111,"strong"),Jx(1112,"(opcional)"),sg()(),Sl(1113,"p"),Jx(1114,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1115,"code"),Jx(1116,"p-label"),sg(),Jx(1117," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1118,"code"),Jx(1119,"p-label"),sg(),Jx(1120,"."),sg(),Sl(1121,"blockquote")(1122,"p"),Jx(1123,"Para mais informa\xE7\xF5es acesse: "),Sl(1124,"a",33),Jx(1125,"https://po-ui.io/documentation/po-helper"),sg(),Jx(1126,"."),sg()(),Sl(1127,"blockquote")(1128,"p"),Jx(1129,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1130,"code"),Jx(1131,"p-additional-help-tooltip"),sg(),Jx(1132," e "),Sl(1133,"code"),Jx(1134,"p-additional-help"),sg(),Jx(1135,") ser\xE1 ignorado."),sg()()()(),Sl(1136,"tr",15)(1137,"td",16)(1138,"div",24)(1139,"span",25),Jx(1140,"p-readonly"),Wl(1141,"br"),sg()()(),Sl(1142,"td",20)(1143,"code",27),Jx(1144,"boolean"),sg()(),Sl(1145,"td",22),Jx(1146,"-"),sg(),Sl(1147,"td",23)(1148,"em")(1149,"strong"),Jx(1150,"(opcional)"),sg()(),Sl(1151,"p"),Jx(1152,"Indica que o campo ser\xE1 somente leitura."),sg()()(),Sl(1153,"tr",15)(1154,"td",16)(1155,"div",24)(1156,"span",25),Jx(1157,"p-required"),Wl(1158,"br"),sg()()(),Sl(1159,"td",20)(1160,"code",27),Jx(1161,"boolean"),sg()(),Sl(1162,"td",22)(1163,"p")(1164,"code"),Jx(1165,"false"),sg()()(),Sl(1166,"td",23)(1167,"em")(1168,"strong"),Jx(1169,"(opcional)"),sg()(),Sl(1170,"p"),Jx(1171,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Sl(1172,"blockquote")(1173,"p"),Jx(1174,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1175,"code"),Jx(1176,"(p-disabled)"),sg(),Jx(1177,"."),sg()()()(),Sl(1178,"tr",15)(1179,"td",16)(1180,"div",24)(1181,"span",25),Jx(1182," p-required-field-error-message"),Wl(1183,"br"),sg()()(),Sl(1184,"td",20)(1185,"code",27),Jx(1186,"boolean"),sg()(),Sl(1187,"td",22)(1188,"p")(1189,"code"),Jx(1190,"false"),sg()()(),Sl(1191,"td",23)(1192,"em")(1193,"strong"),Jx(1194,"(opcional)"),sg()(),Sl(1195,"p"),Jx(1196,"Exibe a mensagem setada na propriedade "),Sl(1197,"code"),Jx(1198,"p-error-pattern"),sg(),Jx(1199," se o campo estiver vazio e for requerido."),sg(),Sl(1200,"blockquote")(1201,"p"),Jx(1202,"Necess\xE1rio que a propriedade "),Sl(1203,"code"),Jx(1204,"p-required"),sg(),Jx(1205," esteja habilitada."),sg()()()(),Sl(1206,"tr",15)(1207,"td",16)(1208,"div",24)(1209,"span",25),Jx(1210," p-show-required"),Wl(1211,"br"),sg()()(),Sl(1212,"td",20)(1213,"code",27),Jx(1214,"boolean"),sg()(),Sl(1215,"td",22),Jx(1216,"-"),sg(),Sl(1217,"td",23)(1218,"p"),Jx(1219,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Sl(1220,"blockquote")(1221,"p"),Jx(1222,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(1223,"ul")(1224,"li"),Jx(1225,"N\xE3o possuir "),Sl(1226,"code"),Jx(1227,"p-help"),sg(),Jx(1228," e/ou "),Sl(1229,"code"),Jx(1230,"p-label"),sg(),Jx(1231,"."),sg()()()(),Sl(1232,"tr",15)(1233,"td",16)(1234,"div",24)(1235,"span",25),Jx(1236," p-size"),Wl(1237,"br"),sg()()(),Sl(1238,"td",20)(1239,"code",26),Jx(1240,"string"),sg()(),Sl(1241,"td",22)(1242,"p")(1243,"code"),Jx(1244,"medium"),sg()()(),Sl(1245,"td",23)(1246,"em")(1247,"strong"),Jx(1248,"(opcional)"),sg()(),Sl(1249,"p"),Jx(1250,"Define o tamanho do componente:"),sg(),Sl(1251,"ul")(1252,"li")(1253,"code"),Jx(1254,"small"),sg(),Jx(1255,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(1256,"li")(1257,"code"),Jx(1258,"medium"),sg(),Jx(1259,": altura do input como 44px."),sg()(),Sl(1260,"blockquote")(1261,"p"),Jx(1262,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1263,"code"),Jx(1264,"medium"),sg(),Jx(1265,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1266,"a",34),Jx(1267,"po-theme"),sg(),Jx(1268,"."),sg()()()(),Sl(1269,"tr",15)(1270,"td",16)(1271,"div",24)(1272,"span",25),Jx(1273," p-step"),Wl(1274,"br"),sg()()(),Sl(1275,"td",20)(1276,"code",26),Jx(1277,"string"),sg()(),Sl(1278,"td",22)(1279,"p"),Jx(1280,"1"),sg()(),Sl(1281,"td",23)(1282,"em")(1283,"strong"),Jx(1284,"(opcional)"),sg()(),Sl(1285,"p"),Jx(1286,"Intervalo."),sg()()(),Sl(1287,"tr",15)(1288,"td",16)(1289,"div",24)(1290,"span",25),Jx(1291," p-upper-case"),Wl(1292,"br"),sg()()(),Sl(1293,"td",20)(1294,"code",27),Jx(1295,"boolean"),sg()(),Sl(1296,"td",22),Jx(1297,"-"),sg(),Sl(1298,"td",23)(1299,"p"),Jx(1300,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),sg()()()(),Sl(1301,"h3",11),Jx(1302,"M\xE9todos"),sg(),Sl(1303,"table",35)(1304,"tr",15)(1305,"th",36)(1306,"div",24)(1307,"h4")(1308,"span",25),Jx(1309," showAdditionalHelp "),sg()()()()(),Sl(1310,"tr",23)(1311,"td",23)(1312,"p"),Jx(1313,"M\xE9todo que exibe "),Sl(1314,"code"),Jx(1315,"p-helper"),sg(),Jx(1316," ou executa a a\xE7\xE3o definida em "),Sl(1317,"code"),Jx(1318,"p-helper{eventOnClick}"),sg(),Jx(1319," ou em "),Sl(1320,"code"),Jx(1321,"p-additionalHelp"),sg(),Jx(1322,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1323,"code"),Jx(1324,"p-keydown"),sg(),Jx(1325,"."),sg(),Sl(1326,"blockquote")(1327,"p"),Jx(1328,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1329,"code"),Jx(1330,"po-helper"),sg(),Jx(1331," quando o componente estiver com foco."),sg()(),Sl(1332,"pre")(1333,"code"),Jx(1334,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),sg()(),Sl(1335,"pre")(1336,"code"),Jx(1337,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(1338,"br"),Sl(1339,"table",35)(1340,"tr",15)(1341,"th",36)(1342,"div",24)(1343,"h4")(1344,"span",25),Jx(1345," focus "),sg()()()()(),Sl(1346,"tr",23)(1347,"td",23)(1348,"p"),Jx(1349,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(1350,"p"),Jx(1351,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(1352,"pre")(1353,"code"),Jx(1354,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),sg()()()()(),Wl(1355,"br"),Sl(1356,"h3"),Jx(1357,"Interfaces"),sg(),Sl(1358,"h4",37)(1359,"code",5),Jx(1360,"ErrorAsyncProperties"),sg()(),Sl(1361,"div",2)(1362,"p"),Jx(1363,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),sg()(),Sl(1364,"h4",11),Jx(1365,"Propriedades"),sg(),Sl(1366,"table",12)(1367,"tr",13)(1368,"th",14),Jx(1369,"Nome"),sg(),Sl(1370,"th",14),Jx(1371,"Tipo"),sg(),Sl(1372,"th",14),Jx(1373,"Descri\xE7\xE3o"),sg()(),Sl(1374,"tr",15)(1375,"td",16)(1376,"div",24)(1377,"span",25),Jx(1378," errorAsync"),Wl(1379,"br"),sg()()(),Sl(1380,"td",20)(1381,"code",38),Jx(1382,"(value) => Observable<boolean>"),sg()(),Sl(1383,"td",23)(1384,"p"),Jx(1385,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(1386,"code"),Jx(1387,"change"),sg(),Jx(1388," ou "),Sl(1389,"code"),Jx(1390,"change-model"),sg(),Jx(1391,", dependendo do valor da propriedade "),Sl(1392,"code"),Jx(1393,"triggerMode"),sg(),Jx(1394,"."),sg()()(),Sl(1395,"tr",15)(1396,"td",16)(1397,"div",24)(1398,"span",25),Jx(1399," triggerMode"),Wl(1400,"br"),sg()()(),Sl(1401,"td",20)(1402,"code",39),Jx(1403,"'change' "),sg(),Sl(1404,"code",40),Jx(1405," 'changeModel'"),sg()(),Sl(1406,"td",23)(1407,"em")(1408,"strong"),Jx(1409,"(opcional)"),sg()(),Sl(1410,"p"),Jx(1411,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Sl(1412,"code"),Jx(1413,"change"),sg(),Jx(1414," ou "),Sl(1415,"code"),Jx(1416,"change-model"),sg(),Jx(1417,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return l})();var de=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(wn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Number",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-number-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-number-basic-view")(6,"sample-po-number-labs-view")(7,"sample-po-number-calculate-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ie,ae,re,me],encapsulation:2})}return l})();var Ce=[{path:"",component:de}],pe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[pL.forChild(Ce),pL]})}return l})();var Ge=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[ar,pe]})}return l})();export{Ge as DocPoNumberModule};