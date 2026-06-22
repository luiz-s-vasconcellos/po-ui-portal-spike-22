import {f as fe,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,cp as Nhe,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Sde,aJ as Uhe,c9 as $he,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,bd as Ox,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var te=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-basic"]],standalone:false,decls:1,vars:0,consts:[["name","number","p-label","PO Number"]],template:function(r,i){r&1&&Gl(0,"po-number",0);},dependencies:[Nhe],encapsulation:2,changeDetection:1})}return l})();var ce=l=>({"docs-sample-code-tabs":l}),ie=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Number Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-number-basic/sample-po-number-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-number-basic/sample-po-number-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-number-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ce,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,te],encapsulation:2})}return l})();var oe=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:"an an-currency-circle-dollar",label:"an an-currency-circle-dollar"},{value:"an an-currency-btc",label:"an an-currency-btc"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event="",this.messageErrorPattern="",this.label=void 0,this.placeholder="",this.help="",this.icon="",this.size="medium",this.step=void 0,this.properties=[];}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-labs"]],standalone:false,decls:23,vars:43,consts:[["f","ngForm"],["name","PO number",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-max","p-maxlength","p-min","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-step","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","messageErrorPattern","p-clean","","p-label","Message error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Minlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Maxlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","step","p-clean","","p-label","Step",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=Cx();Tl(0,"po-number",1),Ew("ngModelChange",function(o){return Ky(p),rN(i.number,o)||(i.number=o),Xy(o)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),t0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3)(4,"po-info",4),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(o){return Ky(p),rN(i.label,o)||(i.label=o),Xy(o)}),sg(),t0(),Tl(9,"po-input",6),Ew("ngModelChange",function(o){return Ky(p),rN(i.help,o)||(i.help=o),Xy(o)}),sg(),t0(),Tl(10,"po-input",7),Ew("ngModelChange",function(o){return Ky(p),rN(i.helperText,o)||(i.helperText=o),Xy(o)}),sg(),t0(),Tl(11,"po-input",8),Ew("ngModelChange",function(o){return Ky(p),rN(i.placeholder,o)||(i.placeholder=o),Xy(o)}),sg(),t0(),Tl(12,"po-input",9),Ew("ngModelChange",function(o){return Ky(p),rN(i.messageErrorPattern,o)||(i.messageErrorPattern=o),Xy(o)}),sg(),t0(),Tl(13,"po-number",10),Ew("ngModelChange",function(o){return Ky(p),rN(i.min,o)||(i.min=o),Xy(o)}),sg(),t0(),Tl(14,"po-number",11),Ew("ngModelChange",function(o){return Ky(p),rN(i.minlength,o)||(i.minlength=o),Xy(o)}),sg(),t0(),Tl(15,"po-number",12),Ew("ngModelChange",function(o){return Ky(p),rN(i.max,o)||(i.max=o),Xy(o)}),sg(),t0(),Tl(16,"po-number",13),Ew("ngModelChange",function(o){return Ky(p),rN(i.maxlength,o)||(i.maxlength=o),Xy(o)}),sg(),t0(),Tl(17,"po-number",14),Ew("ngModelChange",function(o){return Ky(p),rN(i.step,o)||(i.step=o),Xy(o)}),sg(),t0(),Tl(18,"po-select",15),Ew("ngModelChange",function(o){return Ky(p),rN(i.icon,o)||(i.icon=o),Xy(o)}),sg(),t0(),Tl(19,"po-checkbox-group",16),Ew("ngModelChange",function(o){return Ky(p),rN(i.properties,o)||(i.properties=o),Xy(o)}),sg(),t0(),Tl(20,"po-radio-group",17),Ew("ngModelChange",function(o){return Ky(p),rN(i.size,o)||(i.size=o),Xy(o)}),sg(),t0(),Tl(21,"div",2)(22,"po-button",18),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(Dw("ngModel",i.number),tw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.messageErrorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-max",i.max)("p-maxlength",i.maxlength)("p-min",i.min)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-step",i.step)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),r0(),Vp(3),tw("p-value",i.number),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),r0(),Vp(),Dw("ngModel",i.help),r0(),Vp(),Dw("ngModel",i.helperText),r0(),Vp(),Dw("ngModel",i.placeholder),r0(),Vp(),Dw("ngModel",i.messageErrorPattern),r0(),Vp(),Dw("ngModel",i.min),r0(),Vp(),Dw("ngModel",i.minlength),r0(),Vp(),Dw("ngModel",i.max),r0(),Vp(),Dw("ngModel",i.maxlength),r0(),Vp(),Dw("ngModel",i.step),r0(),Vp(),Dw("ngModel",i.icon),tw("p-options",i.iconOptions),r0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),r0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,O3,Nhe,Sde,Uhe,$he],encapsulation:2,changeDetection:1})}return l})();var ge=l=>({"docs-sample-code-tabs":l}),ae=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Number Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-number-labs/sample-po-number-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-number
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-number-labs/sample-po-number-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-number-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ge,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,oe],encapsulation:2})}return l})();var le=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:"S\xE3o Paulo"},{value:17,label:"Alagoas"},{value:15,label:"Cear\xE1"}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100);}loadICMS(){this.icms=this.state;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-calculate"]],standalone:false,decls:16,vars:9,consts:[["f","ngForm"],[1,"po-row"],["name","price","p-label","Price","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantity","p-label","Quantity","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State","p-required","","p-sort","",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],["name","icms","p-label","ICMS %","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","liquid","p-label","Liquid","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","total","p-label","Total","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Calculate",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=Cx();Tl(0,"h3"),tN(1,"Calculate Tax"),sg(),Gl(2,"po-divider"),Tl(3,"form",null,0)(5,"div",1)(6,"po-number",2),Ew("ngModelChange",function(o){return Ky(p),rN(i.price,o)||(i.price=o),Xy(o)}),sg(),t0(),Tl(7,"po-number",3),Ew("ngModelChange",function(o){return Ky(p),rN(i.quantity,o)||(i.quantity=o),Xy(o)}),sg(),t0(),sg(),Tl(8,"div")(9,"po-select",4),Ew("ngModelChange",function(o){return Ky(p),rN(i.state,o)||(i.state=o),Xy(o)}),ht("p-change",function(){return i.loadICMS()}),sg(),t0(),Tl(10,"po-number",5),Ew("ngModelChange",function(o){return Ky(p),rN(i.icms,o)||(i.icms=o),Xy(o)}),sg(),t0(),Tl(11,"po-number",6),Ew("ngModelChange",function(o){return Ky(p),rN(i.liquid,o)||(i.liquid=o),Xy(o)}),sg(),t0(),Tl(12,"po-number",7),Ew("ngModelChange",function(o){return Ky(p),rN(i.total,o)||(i.total=o),Xy(o)}),sg(),t0(),sg(),Tl(13,"div",1)(14,"po-button",8),ht("p-click",function(){return i.calculate()}),sg(),Tl(15,"po-button",9),ht("p-click",function(){Ky(p);let o=Ox(4);return Xy(o.reset())}),sg()()();}if(r&2){let p=Ox(4);Vp(6),Dw("ngModel",i.price),r0(),Vp(),Dw("ngModel",i.quantity),r0(),Vp(2),Dw("ngModel",i.state),tw("p-options",i.statesOptions),r0(),Vp(),Dw("ngModel",i.icms),r0(),Vp(),Dw("ngModel",i.liquid),r0(),Vp(),Dw("ngModel",i.total),r0(),Vp(2),tw("p-disabled",p.invalid),Vp(),tw("p-disabled",p.invalid);}},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,Nhe,Uhe],encapsulation:2,changeDetection:1})}return l})();var he=l=>({"docs-sample-code-tabs":l}),re=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-calculate-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Number - Calculate"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-number-calculate/sample-po-number-calculate.component.html"),sg(),Tl(13,"pre",7),tN(14,`<h3>Calculate Tax</h3>

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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-number-calculate/sample-po-number-calculate.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-number-calculate"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,he,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,le],encapsulation:2})}return l})();var me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-doc"]],standalone:false,decls:1418,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),tN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),tN(11,"FormsModule"),sg(),tN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),tN(14,"ReactiveFormsModule"),sg(),tN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),tN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),tN(20,"PoNumberComponent"),sg()(),Tl(21,"div",2)(22,"p"),tN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),sg(),Tl(24,"p"),tN(25,"Importante:"),sg(),Tl(26,"ul")(27,"li"),tN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),sg()(),Tl(29,"h4"),tN(30,"Tokens customiz\xE1veis"),sg(),Tl(31,"p"),tN(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Gl(33,"br"),tN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(35,"code"),tN(36,".po-input"),sg()(),Tl(37,"blockquote")(38,"p"),tN(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Tl(40,"a",6),tN(41,"Grid System"),sg(),tN(42,"."),sg()(),Tl(43,"blockquote")(44,"p"),tN(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(46,"a",7),tN(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(48,"."),sg()(),Tl(49,"table")(50,"thead")(51,"tr")(52,"th"),tN(53,"Propriedade"),sg(),Tl(54,"th"),tN(55,"Descri\xE7\xE3o"),sg(),Tl(56,"th"),tN(57,"Valor Padr\xE3o"),sg()()(),Tl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),tN(62,"Default Values"),sg()(),Gl(63,"td")(64,"td"),sg(),Tl(65,"tr")(66,"td")(67,"code"),tN(68,"--font-family"),sg()(),Tl(69,"td"),tN(70,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(71,"td")(72,"code"),tN(73,"var(--font-family-theme)"),sg()()(),Tl(74,"tr")(75,"td")(76,"code"),tN(77,"--font-size"),sg()(),Tl(78,"td"),tN(79,"Tamanho da fonte"),sg(),Tl(80,"td")(81,"code"),tN(82,"var(--font-size-default)"),sg()()(),Tl(83,"tr")(84,"td")(85,"code"),tN(86,"--text-color-placeholder"),sg()(),Tl(87,"td"),tN(88,"Cor do texto placeholder"),sg(),Tl(89,"td")(90,"code"),tN(91,"var(--color-neutral-light-30)"),sg()()(),Tl(92,"tr")(93,"td")(94,"code"),tN(95,"--color"),sg()(),Tl(96,"td"),tN(97,"Cor pincipal do input"),sg(),Tl(98,"td")(99,"code"),tN(100,"var(--color-neutral-dark-70)"),sg()()(),Tl(101,"tr")(102,"td")(103,"code"),tN(104,"--background"),sg()(),Tl(105,"td"),tN(106,"Cor de background"),sg(),Tl(107,"td")(108,"code"),tN(109,"var(--color-neutral-light-05)"),sg()()(),Tl(110,"tr")(111,"td")(112,"code"),tN(113,"--padding"),sg()(),Tl(114,"td"),tN(115,"Preenchimento"),sg(),Tl(116,"td")(117,"code"),tN(118,"0 0.5rem"),sg()()(),Tl(119,"tr")(120,"td")(121,"code"),tN(122,"--text-color"),sg()(),Tl(123,"td"),tN(124,"Cor do texto"),sg(),Tl(125,"td")(126,"code"),tN(127,"var(--color-neutral-dark-90)"),sg()()(),Tl(128,"tr")(129,"td")(130,"code"),tN(131,"--field-container-title-justify"),sg()(),Tl(132,"td"),tN(133,"Alinhamento horizontal do t\xEDtulo ("),Tl(134,"code"),tN(135,"justify-content"),sg(),tN(136,")"),sg(),Tl(137,"td")(138,"code"),tN(139,"space-between"),sg()()(),Tl(140,"tr")(141,"td")(142,"code"),tN(143,"--field-container-title-flex"),sg()(),Tl(144,"td"),tN(145,"Flex do t\xEDtulo ("),Tl(146,"code"),tN(147,"flex"),sg(),tN(148,")"),sg(),Tl(149,"td")(150,"code"),tN(151,"1 auto"),sg()()(),Tl(152,"tr")(153,"td")(154,"strong"),tN(155,"Hover"),sg()(),Gl(156,"td")(157,"td"),sg(),Tl(158,"tr")(159,"td")(160,"code"),tN(161,"--color-hover"),sg()(),Tl(162,"td"),tN(163,"Cor principal no estado hover"),sg(),Tl(164,"td")(165,"code"),tN(166,"var(--color-brand-01-dark)"),sg()()(),Tl(167,"tr")(168,"td")(169,"code"),tN(170,"--background-hover"),sg()(),Tl(171,"td"),tN(172,"Cor de background no estado hover"),sg(),Tl(173,"td")(174,"code"),tN(175,"var(--color-brand-01-lightest)"),sg()()(),Tl(176,"tr")(177,"td")(178,"strong"),tN(179,"Focused"),sg()(),Gl(180,"td")(181,"td"),sg(),Tl(182,"tr")(183,"td")(184,"code"),tN(185,"--color-focused"),sg()(),Tl(186,"td"),tN(187,"Cor principal no estado de focus"),sg(),Tl(188,"td")(189,"code"),tN(190,"var(--color-action-default)"),sg()()(),Tl(191,"tr")(192,"td")(193,"code"),tN(194,"--outline-color-focused"),sg()(),Tl(195,"td"),tN(196,"Cor do outline do estado de focus"),sg(),Tl(197,"td")(198,"code"),tN(199,"var(--color-action-focus)"),sg()()(),Tl(200,"tr")(201,"td")(202,"strong"),tN(203,"Disabled"),sg()(),Gl(204,"td")(205,"td"),sg(),Tl(206,"tr")(207,"td")(208,"code"),tN(209,"--color-disabled"),sg()(),Tl(210,"td"),tN(211,"Cor principal no estado disabled"),sg(),Tl(212,"td")(213,"code"),tN(214,"var(--color-neutral-light-30)"),sg()()(),Tl(215,"tr")(216,"td")(217,"code"),tN(218,"--background-disabled"),sg()(),Tl(219,"td"),tN(220,"Cor de background no estado disabled"),sg(),Tl(221,"td")(222,"code"),tN(223,"var(--color-neutral-light-20)"),sg()()(),Tl(224,"tr")(225,"td")(226,"code"),tN(227,"--text-color-disabled"),sg()(),Tl(228,"td"),tN(229,"Cor do texto no estado disabled"),sg(),Tl(230,"td")(231,"code"),tN(232,"var(--color-neutral-dark-70)"),sg()()()()(),Tl(233,"p"),Gl(234,"br"),tN(235," O "),Tl(236,"code"),tN(237,"po-number"),sg(),tN(238,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),sg()(),Tl(239,"div",8)(240,"h4",9),tN(241,"Seletor"),sg(),Tl(242,"pre",10),tN(243,`<po-number
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
`),sg()(),Tl(244,"h4",11),tN(245,"Propriedades"),sg(),Tl(246,"table",12)(247,"tr",13)(248,"th",14),tN(249,"Nome"),sg(),Tl(250,"th",14),tN(251,"Tipo"),sg(),Tl(252,"th",14),tN(253,"Padr\xE3o"),sg(),Tl(254,"th",14),tN(255,"Descri\xE7\xE3o"),sg()(),Tl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),tN(260," (p-additional-help)"),Gl(261,"br"),sg()(),Tl(262,"div",19),tN(263,"Deprecated"),sg()(),Tl(264,"td",20)(265,"code",21),tN(266,"EventEmitter"),sg()(),Tl(267,"td",22),tN(268,"-"),sg(),Tl(269,"td",23)(270,"em")(271,"strong"),tN(272,"(opcional)"),sg()(),Tl(273,"p"),tN(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(275,"blockquote")(276,"p"),tN(277,"Essa propriedade est\xE1 "),Tl(278,"strong"),tN(279,"depreciada"),sg(),tN(280," e ser\xE1 removida na vers\xE3o "),Tl(281,"code"),tN(282,"23.x.x"),sg(),tN(283,". Recomendamos utilizar a propriedade "),Tl(284,"code"),tN(285,"p-helper"),sg(),tN(286," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),tN(291," p-additional-help-tooltip"),Gl(292,"br"),sg()(),Tl(293,"div",19),tN(294,"Deprecated"),sg()(),Tl(295,"td",20)(296,"code",26),tN(297,"string"),sg()(),Tl(298,"td",22),tN(299,"-"),sg(),Tl(300,"td",23)(301,"em")(302,"strong"),tN(303,"(opcional)"),sg()(),Tl(304,"p"),tN(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(306,"code"),tN(307,"po-helper"),sg(),tN(308,`.
`),Tl(309,"strong"),tN(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(311,"blockquote")(312,"p"),tN(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(314,"blockquote")(315,"p"),tN(316,"Essa propriedade est\xE1 "),Tl(317,"strong"),tN(318,"depreciada"),sg(),tN(319," e ser\xE1 removida na vers\xE3o "),Tl(320,"code"),tN(321,"23.x.x"),sg(),tN(322,". Recomendamos utilizar a propriedade "),Tl(323,"code"),tN(324,"p-helper"),sg(),tN(325," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),tN(330," p-append-in-body"),Gl(331,"br"),sg()()(),Tl(332,"td",20)(333,"code",27),tN(334,"boolean"),sg()(),Tl(335,"td",22)(336,"p")(337,"code"),tN(338,"false"),sg()()(),Tl(339,"td",23)(340,"em")(341,"strong"),tN(342,"(opcional)"),sg()(),Tl(343,"p"),tN(344,"Define que o popover ("),Tl(345,"code"),tN(346,"p-helper"),sg(),tN(347," e/ou "),Tl(348,"code"),tN(349,"p-error-limit"),sg(),tN(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(351,"blockquote")(352,"p"),tN(353,"Quando utilizado com "),Tl(354,"code"),tN(355,"p-helper"),sg(),tN(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),tN(361," p-auto-focus"),Gl(362,"br"),sg()()(),Tl(363,"td",20)(364,"code",27),tN(365,"boolean"),sg()(),Tl(366,"td",22)(367,"p")(368,"code"),tN(369,"false"),sg()()(),Tl(370,"td",23)(371,"em")(372,"strong"),tN(373,"(opcional)"),sg()(),Tl(374,"p"),tN(375,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(376,"blockquote")(377,"p"),tN(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),tN(383," (p-blur)"),Gl(384,"br"),sg()()(),Tl(385,"td",20)(386,"code",21),tN(387,"EventEmitter"),sg()(),Tl(388,"td",22),tN(389,"-"),sg(),Tl(390,"td",23)(391,"em")(392,"strong"),tN(393,"(opcional)"),sg()(),Tl(394,"p"),tN(395,"Evento disparado ao sair do campo."),sg()()(),Tl(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),tN(400," (p-change)"),Gl(401,"br"),sg()()(),Tl(402,"td",20)(403,"code",21),tN(404,"EventEmitter"),sg()(),Tl(405,"td",22),tN(406,"-"),sg(),Tl(407,"td",23)(408,"em")(409,"strong"),tN(410,"(opcional)"),sg()(),Tl(411,"p"),tN(412,"Evento disparado ao alterar valor e deixar o campo."),sg()()(),Tl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),tN(417," (p-change-model)"),Gl(418,"br"),sg()()(),Tl(419,"td",20)(420,"code",21),tN(421,"EventEmitter"),sg()(),Tl(422,"td",22),tN(423,"-"),sg(),Tl(424,"td",23)(425,"em")(426,"strong"),tN(427,"(opcional)"),sg()(),Tl(428,"p"),tN(429,"Evento disparado ao alterar valor do model."),sg()()(),Tl(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),tN(434,"p-clean"),Gl(435,"br"),sg()()(),Tl(436,"td",20)(437,"code",27),tN(438,"boolean"),sg()(),Tl(439,"td",22),tN(440,"-"),sg(),Tl(441,"td",23)(442,"em")(443,"strong"),tN(444,"(opcional)"),sg()(),Tl(445,"p"),tN(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg()()(),Tl(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),tN(451," p-compact-label"),Gl(452,"br"),sg()()(),Tl(453,"td",20)(454,"code",27),tN(455,"boolean"),sg()(),Tl(456,"td",22)(457,"p")(458,"code"),tN(459,"false"),sg()()(),Tl(460,"td",23)(461,"em")(462,"strong"),tN(463,"(opcional)"),sg()(),Tl(464,"p"),tN(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(466,"p"),tN(467,"Quando habilitado ("),Tl(468,"code"),tN(469,"true"),sg(),tN(470,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(471,"ul")(472,"li")(473,"code"),tN(474,"po-label"),sg()(),Tl(475,"li")(476,"code"),tN(477,"p-requirement (showRequired)"),sg()(),Tl(478,"li")(479,"code"),tN(480,"po-helper"),sg()()(),Tl(481,"p"),tN(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(483,"p"),tN(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(485,"ul")(486,"li")(487,"code"),tN(488,"--field-container-title-justify"),sg()(),Tl(489,"li")(490,"code"),tN(491,"--field-container-title-flex"),sg()()(),Tl(492,"p"),tN(493,"Exemplo:"),sg(),Tl(494,"pre")(495,"code"),tN(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(497,"p"),tN(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),tN(503,"p-disabled"),Gl(504,"br"),sg()()(),Tl(505,"td",20)(506,"code",27),tN(507,"boolean"),sg()(),Tl(508,"td",22)(509,"p")(510,"code"),tN(511,"false"),sg()()(),Tl(512,"td",23)(513,"em")(514,"strong"),tN(515,"(opcional)"),sg()(),Tl(516,"p"),tN(517,"Se verdadeiro, desabilita o campo."),sg()()(),Tl(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),tN(522," p-emit-all-changes"),Gl(523,"br"),sg()()(),Tl(524,"td",20)(525,"code",27),tN(526,"boolean"),sg()(),Tl(527,"td",22)(528,"p")(529,"code"),tN(530,"false"),sg()()(),Tl(531,"td",23)(532,"em")(533,"strong"),tN(534,"(opcional)"),sg()(),Tl(535,"p"),tN(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),sg()()(),Tl(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),tN(541," (p-enter)"),Gl(542,"br"),sg()()(),Tl(543,"td",20)(544,"code",21),tN(545,"EventEmitter"),sg()(),Tl(546,"td",22),tN(547,"-"),sg(),Tl(548,"td",23)(549,"em")(550,"strong"),tN(551,"(opcional)"),sg()(),Tl(552,"p"),tN(553,"Evento disparado ao entrar do campo."),sg()()(),Tl(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),tN(558," p-error-async-properties"),Gl(559,"br"),sg()()(),Tl(560,"td",20)(561,"code",28),tN(562,"ErrorAsyncProperties"),sg()(),Tl(563,"td",22),tN(564,"-"),sg(),Tl(565,"td",23)(566,"em")(567,"strong"),tN(568,"(opcional)"),sg()(),Tl(569,"p"),tN(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Tl(571,"code"),tN(572,"Reactive Forms"),sg(),tN(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Tl(574,"code"),tN(575,"asyncValidators"),sg(),tN(576,"."),sg()()(),Tl(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),tN(581," p-error-limit"),Gl(582,"br"),sg()()(),Tl(583,"td",20)(584,"code",27),tN(585,"boolean"),sg()(),Tl(586,"td",22)(587,"p")(588,"code"),tN(589,"false"),sg()()(),Tl(590,"td",23)(591,"em")(592,"strong"),tN(593,"(opcional)"),sg()(),Tl(594,"p"),tN(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(596,"blockquote")(597,"p"),tN(598,"Caso essa propriedade seja definida como "),Tl(599,"code"),tN(600,"true"),sg(),tN(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),tN(606," p-error-pattern"),Gl(607,"br"),sg()()(),Tl(608,"td",20)(609,"code",26),tN(610,"string"),sg()(),Tl(611,"td",22),tN(612,"-"),sg(),Tl(613,"td",23)(614,"em")(615,"strong"),tN(616,"(opcional)"),sg()(),Tl(617,"p"),tN(618,"Mensagem que ser\xE1 apresentada quando o "),Tl(619,"code"),tN(620,"pattern"),sg(),tN(621," ou a m\xE1scara n\xE3o for satisfeita."),sg(),Tl(622,"blockquote")(623,"p"),tN(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Tl(625,"code"),tN(626,"p-required-field-error-message"),sg(),tN(627," em conjunto."),sg()()()(),Tl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),tN(632," p-help"),Gl(633,"br"),sg()()(),Tl(634,"td",20)(635,"code",26),tN(636,"string"),sg()(),Tl(637,"td",22),tN(638,"-"),sg(),Tl(639,"td",23)(640,"em")(641,"strong"),tN(642,"(opcional)"),sg()(),Tl(643,"p"),tN(644,"Texto de apoio do campo."),sg()()(),Tl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),tN(649," p-icon"),Gl(650,"br"),sg()()(),Tl(651,"td",20)(652,"code",26),tN(653,"string "),sg(),Tl(654,"code",29),tN(655," TemplateRef<void>"),sg()(),Tl(656,"td",22),tN(657,"-"),sg(),Tl(658,"td",23)(659,"em")(660,"strong"),tN(661,"(opcional)"),sg()(),Tl(662,"p"),tN(663,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Tl(664,"p"),tN(665,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(666,"a",30),tN(667,"Biblioteca de \xEDcones"),sg(),tN(668,". conforme exemplo abaixo:"),sg(),Tl(669,"pre")(670,"code"),tN(671,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),sg()(),Tl(672,"p"),tN(673,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(674,"em"),tN(675,"Font Awesome"),sg(),tN(676,", da seguinte forma:"),sg(),Tl(677,"pre")(678,"code"),tN(679,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),sg()(),Tl(680,"p"),tN(681,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(682,"code"),tN(683,"TemplateRef"),sg(),tN(684,", conforme exemplo abaixo:"),sg(),Tl(685,"pre")(686,"code"),tN(687,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Tl(688,"blockquote")(689,"p"),tN(690,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Tl(691,"code"),tN(692,"font-size: inherit"),sg(),tN(693," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Tl(694,"tr",15)(695,"td",16)(696,"div",17)(697,"span",18),tN(698," (p-keydown)"),Gl(699,"br"),sg()()(),Tl(700,"td",20)(701,"code",21),tN(702,"EventEmitter"),sg()(),Tl(703,"td",22),tN(704,"-"),sg(),Tl(705,"td",23)(706,"em")(707,"strong"),tN(708,"(opcional)"),sg()(),Tl(709,"p"),tN(710,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(711,"code"),tN(712,"KeyboardEvent"),sg(),tN(713," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),tN(718," p-label"),Gl(719,"br"),sg()()(),Tl(720,"td",20)(721,"code",26),tN(722,"string"),sg()(),Tl(723,"td",22),tN(724,"-"),sg(),Tl(725,"td",23)(726,"em")(727,"strong"),tN(728,"(opcional)"),sg()(),Tl(729,"p"),tN(730,"R\xF3tulo do campo."),sg()()(),Tl(731,"tr",15)(732,"td",16)(733,"div",24)(734,"span",25),tN(735," p-label-text-wrap"),Gl(736,"br"),sg()()(),Tl(737,"td",20)(738,"code",27),tN(739,"boolean"),sg()(),Tl(740,"td",22)(741,"p")(742,"code"),tN(743,"false"),sg()()(),Tl(744,"td",23)(745,"em")(746,"strong"),tN(747,"(opcional)"),sg()(),Tl(748,"p"),tN(749,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(750,"code"),tN(751,"p-label"),sg(),tN(752,". Quando "),Tl(753,"code"),tN(754,"p-label-text-wrap"),sg(),tN(755,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),tN(760," p-loading"),Gl(761,"br"),sg()()(),Tl(762,"td",20)(763,"code",27),tN(764,"boolean"),sg()(),Tl(765,"td",22)(766,"p")(767,"code"),tN(768,"false"),sg()()(),Tl(769,"td",23)(770,"em")(771,"strong"),tN(772,"(opcional)"),sg()(),Tl(773,"p"),tN(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),tN(779,"p-mask"),Gl(780,"br"),sg()()(),Tl(781,"td",20)(782,"code",26),tN(783,"string"),sg()(),Tl(784,"td",22),tN(785,"-"),sg(),Tl(786,"td",23)(787,"em")(788,"strong"),tN(789,"(opcional)"),sg()(),Tl(790,"p"),tN(791,"Indica uma m\xE1scara para o campo, por\xE9m \xE9 incompat\xEDvel com o "),Tl(792,"code"),tN(793,"po-number"),sg(),tN(794,"."),sg(),Tl(795,"blockquote")(796,"p")(797,"strong"),tN(798,"Componentes compat\xEDveis:"),sg(),Tl(799,"code"),tN(800,"po-input"),sg(),tN(801,","),Tl(802,"code"),tN(803,"po-decimal"),sg(),tN(804,"."),sg()()()(),Tl(805,"tr",15)(806,"td",16)(807,"div",24)(808,"span",25),tN(809,"p-mask-format-model"),Gl(810,"br"),sg()()(),Tl(811,"td",20)(812,"code",27),tN(813,"boolean"),sg()(),Tl(814,"td",22)(815,"p")(816,"code"),tN(817,"false"),sg()()(),Tl(818,"td",23)(819,"em")(820,"strong"),tN(821,"(opcional)"),sg()(),Tl(822,"p"),tN(823,"Indica se o "),Tl(824,"code"),tN(825,"model"),sg(),tN(826," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),sg()()(),Tl(827,"tr",15)(828,"td",16)(829,"div",24)(830,"span",25),tN(831," p-mask-no-length-validation"),Gl(832,"br"),sg()()(),Tl(833,"td",20)(834,"code",27),tN(835,"boolean"),sg()(),Tl(836,"td",22)(837,"p")(838,"code"),tN(839,"false"),sg()()(),Tl(840,"td",23)(841,"p"),tN(842,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Tl(843,"code"),tN(844,"minLength"),sg(),tN(845,") e m\xE1ximo ("),Tl(846,"code"),tN(847,"maxLength"),sg(),tN(848,") quando h\xE1 uma m\xE1scara ("),Tl(849,"code"),tN(850,"p-mask"),sg(),tN(851,") definida."),sg(),Tl(852,"ul")(853,"li"),tN(854,"Quando "),Tl(855,"code"),tN(856,"true"),sg(),tN(857,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Tl(858,"li"),tN(859,"Quando "),Tl(860,"code"),tN(861,"false"),sg(),tN(862,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Tl(863,"blockquote")(864,"p"),tN(865,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Tl(866,"code"),tN(867,"p-mask-format-model"),sg(),tN(868,"."),sg()(),Tl(869,"p"),tN(870,"Exemplo:"),sg(),Tl(871,"pre")(872,"code"),tN(873,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),sg()(),Tl(874,"ul")(875,"li"),tN(876,"Entrada: "),Tl(877,"code"),tN(878,"123-456"),sg(),tN(879," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Tl(880,"code"),tN(881,"-"),sg(),tN(882,"."),sg()()()(),Tl(883,"tr",15)(884,"td",16)(885,"div",24)(886,"span",25),tN(887,"p-max"),Gl(888,"br"),sg()()(),Tl(889,"td",20)(890,"code",31),tN(891,"number"),sg()(),Tl(892,"td",22),tN(893,"-"),sg(),Tl(894,"td",23)(895,"em")(896,"strong"),tN(897,"(opcional)"),sg()(),Tl(898,"p"),tN(899,"Valor m\xE1ximo."),sg(),Tl(900,"blockquote")(901,"p"),tN(902,"Quando o valor m\xE1ximo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),Tl(903,"code"),tN(904,"p-step"),sg(),tN(905," tamb\xE9m passando a ela um valor decimal."),sg()()()(),Tl(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),tN(910," p-maxlength"),Gl(911,"br"),sg()()(),Tl(912,"td",20)(913,"code",31),tN(914,"number"),sg()(),Tl(915,"td",22),tN(916,"-"),sg(),Tl(917,"td",23)(918,"em")(919,"strong"),tN(920,"(opcional)"),sg()(),Tl(921,"p"),tN(922,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),sg()()(),Tl(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),tN(927,"p-min"),Gl(928,"br"),sg()()(),Tl(929,"td",20)(930,"code",31),tN(931,"number"),sg()(),Tl(932,"td",22),tN(933,"-"),sg(),Tl(934,"td",23)(935,"em")(936,"strong"),tN(937,"(opcional)"),sg()(),Tl(938,"p"),tN(939,"Valor m\xEDnimo."),sg(),Tl(940,"blockquote")(941,"p"),tN(942,"Quando o valor m\xEDnimo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),Tl(943,"code"),tN(944,"p-step"),sg(),tN(945," tamb\xE9m passando a ela um valor decimal."),sg()()()(),Tl(946,"tr",15)(947,"td",16)(948,"div",24)(949,"span",25),tN(950," p-minlength"),Gl(951,"br"),sg()()(),Tl(952,"td",20)(953,"code",31),tN(954,"number"),sg()(),Tl(955,"td",22),tN(956,"-"),sg(),Tl(957,"td",23)(958,"em")(959,"strong"),tN(960,"(opcional)"),sg()(),Tl(961,"p"),tN(962,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),sg()()(),Tl(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),tN(967," name"),Gl(968,"br"),sg()()(),Tl(969,"td",20)(970,"code",26),tN(971,"string"),sg()(),Tl(972,"td",22),tN(973,"-"),sg(),Tl(974,"td",23)(975,"p"),tN(976,"Nome e identificador do campo."),sg()()(),Tl(977,"tr",15)(978,"td",16)(979,"div",24)(980,"span",25),tN(981," p-no-autocomplete"),Gl(982,"br"),sg()()(),Tl(983,"td",20)(984,"code",27),tN(985,"boolean"),sg()(),Tl(986,"td",22)(987,"p")(988,"code"),tN(989,"false"),sg()()(),Tl(990,"td",23)(991,"em")(992,"strong"),tN(993,"(opcional)"),sg()(),Tl(994,"p"),tN(995,"Define a propriedade nativa "),Tl(996,"code"),tN(997,"autocomplete"),sg(),tN(998," do campo como "),Tl(999,"code"),tN(1e3,"off"),sg(),tN(1001,"."),sg(),Tl(1002,"blockquote")(1003,"p"),tN(1004,"No componente "),Tl(1005,"code"),tN(1006,"po-password"),sg(),tN(1007," ser\xE1 definido como "),Tl(1008,"code"),tN(1009,"new-password"),sg(),tN(1010,"."),sg()(),Tl(1011,"p"),tN(1012,"Nos componentes "),Tl(1013,"code"),tN(1014,"po-password"),sg(),tN(1015," e "),Tl(1016,"code"),tN(1017,"po-login"),sg(),tN(1018," o valor padr\xE3o ser\xE1 "),Tl(1019,"code"),tN(1020,"true"),sg(),tN(1021,"."),sg()()(),Tl(1022,"tr",15)(1023,"td",16)(1024,"div",24)(1025,"span",25),tN(1026," p-optional"),Gl(1027,"br"),sg()()(),Tl(1028,"td",20)(1029,"code",27),tN(1030,"boolean"),sg()(),Tl(1031,"td",22)(1032,"p")(1033,"code"),tN(1034,"false"),sg()()(),Tl(1035,"td",23)(1036,"em")(1037,"strong"),tN(1038,"(opcional)"),sg()(),Tl(1039,"p"),tN(1040,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(1041,"blockquote")(1042,"p"),tN(1043,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1044,"ul")(1045,"li"),tN(1046,"O campo conter "),Tl(1047,"code"),tN(1048,"p-required"),sg(),tN(1049,";"),sg(),Tl(1050,"li"),tN(1051,"N\xE3o possuir "),Tl(1052,"code"),tN(1053,"p-help"),sg(),tN(1054," e/ou "),Tl(1055,"code"),tN(1056,"p-label"),sg(),tN(1057,"."),sg()()()(),Tl(1058,"tr",15)(1059,"td",16)(1060,"div",24)(1061,"span",25),tN(1062,"p-pattern"),Gl(1063,"br"),sg()()(),Tl(1064,"td",20)(1065,"code",26),tN(1066,"string"),sg()(),Tl(1067,"td",22),tN(1068,"-"),sg(),Tl(1069,"td",23)(1070,"em")(1071,"strong"),tN(1072,"(opcional)"),sg()(),Tl(1073,"p"),tN(1074,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Tl(1075,"code"),tN(1076,"(p-mask)"),sg(),tN(1077,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),sg()()(),Tl(1078,"tr",15)(1079,"td",16)(1080,"div",24)(1081,"span",25),tN(1082," p-placeholder"),Gl(1083,"br"),sg()()(),Tl(1084,"td",20)(1085,"code",26),tN(1086,"string"),sg()(),Tl(1087,"td",22)(1088,"p"),tN(1089,"''"),sg()(),Tl(1090,"td",23)(1091,"em")(1092,"strong"),tN(1093,"(opcional)"),sg()(),Tl(1094,"p"),tN(1095,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Tl(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),tN(1100," p-helper"),Gl(1101,"br"),sg()()(),Tl(1102,"td",20)(1103,"code",32),tN(1104,"PoHelperOptions "),sg(),Tl(1105,"code",26),tN(1106," string"),sg()(),Tl(1107,"td",22),tN(1108,"-"),sg(),Tl(1109,"td",23)(1110,"em")(1111,"strong"),tN(1112,"(opcional)"),sg()(),Tl(1113,"p"),tN(1114,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(1115,"code"),tN(1116,"p-label"),sg(),tN(1117," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(1118,"code"),tN(1119,"p-label"),sg(),tN(1120,"."),sg(),Tl(1121,"blockquote")(1122,"p"),tN(1123,"Para mais informa\xE7\xF5es acesse: "),Tl(1124,"a",33),tN(1125,"https://po-ui.io/documentation/po-helper"),sg(),tN(1126,"."),sg()(),Tl(1127,"blockquote")(1128,"p"),tN(1129,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(1130,"code"),tN(1131,"p-additional-help-tooltip"),sg(),tN(1132," e "),Tl(1133,"code"),tN(1134,"p-additional-help"),sg(),tN(1135,") ser\xE1 ignorado."),sg()()()(),Tl(1136,"tr",15)(1137,"td",16)(1138,"div",24)(1139,"span",25),tN(1140,"p-readonly"),Gl(1141,"br"),sg()()(),Tl(1142,"td",20)(1143,"code",27),tN(1144,"boolean"),sg()(),Tl(1145,"td",22),tN(1146,"-"),sg(),Tl(1147,"td",23)(1148,"em")(1149,"strong"),tN(1150,"(opcional)"),sg()(),Tl(1151,"p"),tN(1152,"Indica que o campo ser\xE1 somente leitura."),sg()()(),Tl(1153,"tr",15)(1154,"td",16)(1155,"div",24)(1156,"span",25),tN(1157,"p-required"),Gl(1158,"br"),sg()()(),Tl(1159,"td",20)(1160,"code",27),tN(1161,"boolean"),sg()(),Tl(1162,"td",22)(1163,"p")(1164,"code"),tN(1165,"false"),sg()()(),Tl(1166,"td",23)(1167,"em")(1168,"strong"),tN(1169,"(opcional)"),sg()(),Tl(1170,"p"),tN(1171,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Tl(1172,"blockquote")(1173,"p"),tN(1174,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Tl(1175,"code"),tN(1176,"(p-disabled)"),sg(),tN(1177,"."),sg()()()(),Tl(1178,"tr",15)(1179,"td",16)(1180,"div",24)(1181,"span",25),tN(1182," p-required-field-error-message"),Gl(1183,"br"),sg()()(),Tl(1184,"td",20)(1185,"code",27),tN(1186,"boolean"),sg()(),Tl(1187,"td",22)(1188,"p")(1189,"code"),tN(1190,"false"),sg()()(),Tl(1191,"td",23)(1192,"em")(1193,"strong"),tN(1194,"(opcional)"),sg()(),Tl(1195,"p"),tN(1196,"Exibe a mensagem setada na propriedade "),Tl(1197,"code"),tN(1198,"p-error-pattern"),sg(),tN(1199," se o campo estiver vazio e for requerido."),sg(),Tl(1200,"blockquote")(1201,"p"),tN(1202,"Necess\xE1rio que a propriedade "),Tl(1203,"code"),tN(1204,"p-required"),sg(),tN(1205," esteja habilitada."),sg()()()(),Tl(1206,"tr",15)(1207,"td",16)(1208,"div",24)(1209,"span",25),tN(1210," p-show-required"),Gl(1211,"br"),sg()()(),Tl(1212,"td",20)(1213,"code",27),tN(1214,"boolean"),sg()(),Tl(1215,"td",22),tN(1216,"-"),sg(),Tl(1217,"td",23)(1218,"p"),tN(1219,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(1220,"blockquote")(1221,"p"),tN(1222,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1223,"ul")(1224,"li"),tN(1225,"N\xE3o possuir "),Tl(1226,"code"),tN(1227,"p-help"),sg(),tN(1228," e/ou "),Tl(1229,"code"),tN(1230,"p-label"),sg(),tN(1231,"."),sg()()()(),Tl(1232,"tr",15)(1233,"td",16)(1234,"div",24)(1235,"span",25),tN(1236," p-size"),Gl(1237,"br"),sg()()(),Tl(1238,"td",20)(1239,"code",26),tN(1240,"string"),sg()(),Tl(1241,"td",22)(1242,"p")(1243,"code"),tN(1244,"medium"),sg()()(),Tl(1245,"td",23)(1246,"em")(1247,"strong"),tN(1248,"(opcional)"),sg()(),Tl(1249,"p"),tN(1250,"Define o tamanho do componente:"),sg(),Tl(1251,"ul")(1252,"li")(1253,"code"),tN(1254,"small"),sg(),tN(1255,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(1256,"li")(1257,"code"),tN(1258,"medium"),sg(),tN(1259,": altura do input como 44px."),sg()(),Tl(1260,"blockquote")(1261,"p"),tN(1262,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(1263,"code"),tN(1264,"medium"),sg(),tN(1265,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1266,"a",34),tN(1267,"po-theme"),sg(),tN(1268,"."),sg()()()(),Tl(1269,"tr",15)(1270,"td",16)(1271,"div",24)(1272,"span",25),tN(1273," p-step"),Gl(1274,"br"),sg()()(),Tl(1275,"td",20)(1276,"code",26),tN(1277,"string"),sg()(),Tl(1278,"td",22)(1279,"p"),tN(1280,"1"),sg()(),Tl(1281,"td",23)(1282,"em")(1283,"strong"),tN(1284,"(opcional)"),sg()(),Tl(1285,"p"),tN(1286,"Intervalo."),sg()()(),Tl(1287,"tr",15)(1288,"td",16)(1289,"div",24)(1290,"span",25),tN(1291," p-upper-case"),Gl(1292,"br"),sg()()(),Tl(1293,"td",20)(1294,"code",27),tN(1295,"boolean"),sg()(),Tl(1296,"td",22),tN(1297,"-"),sg(),Tl(1298,"td",23)(1299,"p"),tN(1300,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),sg()()()(),Tl(1301,"h3",11),tN(1302,"M\xE9todos"),sg(),Tl(1303,"table",35)(1304,"tr",15)(1305,"th",36)(1306,"div",24)(1307,"h4")(1308,"span",25),tN(1309," showAdditionalHelp "),sg()()()()(),Tl(1310,"tr",23)(1311,"td",23)(1312,"p"),tN(1313,"M\xE9todo que exibe "),Tl(1314,"code"),tN(1315,"p-helper"),sg(),tN(1316," ou executa a a\xE7\xE3o definida em "),Tl(1317,"code"),tN(1318,"p-helper{eventOnClick}"),sg(),tN(1319," ou em "),Tl(1320,"code"),tN(1321,"p-additionalHelp"),sg(),tN(1322,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1323,"code"),tN(1324,"p-keydown"),sg(),tN(1325,"."),sg(),Tl(1326,"blockquote")(1327,"p"),tN(1328,"Exibe ou oculta o conte\xFAdo do componente "),Tl(1329,"code"),tN(1330,"po-helper"),sg(),tN(1331," quando o componente estiver com foco."),sg()(),Tl(1332,"pre")(1333,"code"),tN(1334,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),sg()(),Tl(1335,"pre")(1336,"code"),tN(1337,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(1338,"br"),Tl(1339,"table",35)(1340,"tr",15)(1341,"th",36)(1342,"div",24)(1343,"h4")(1344,"span",25),tN(1345," focus "),sg()()()()(),Tl(1346,"tr",23)(1347,"td",23)(1348,"p"),tN(1349,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(1350,"p"),tN(1351,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(1352,"pre")(1353,"code"),tN(1354,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),sg()()()()(),Gl(1355,"br"),Tl(1356,"h3"),tN(1357,"Interfaces"),sg(),Tl(1358,"h4",37)(1359,"code",5),tN(1360,"ErrorAsyncProperties"),sg()(),Tl(1361,"div",2)(1362,"p"),tN(1363,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),sg()(),Tl(1364,"h4",11),tN(1365,"Propriedades"),sg(),Tl(1366,"table",12)(1367,"tr",13)(1368,"th",14),tN(1369,"Nome"),sg(),Tl(1370,"th",14),tN(1371,"Tipo"),sg(),Tl(1372,"th",14),tN(1373,"Descri\xE7\xE3o"),sg()(),Tl(1374,"tr",15)(1375,"td",16)(1376,"div",24)(1377,"span",25),tN(1378," errorAsync"),Gl(1379,"br"),sg()()(),Tl(1380,"td",20)(1381,"code",38),tN(1382,"(value) => Observable<boolean>"),sg()(),Tl(1383,"td",23)(1384,"p"),tN(1385,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(1386,"code"),tN(1387,"change"),sg(),tN(1388," ou "),Tl(1389,"code"),tN(1390,"change-model"),sg(),tN(1391,", dependendo do valor da propriedade "),Tl(1392,"code"),tN(1393,"triggerMode"),sg(),tN(1394,"."),sg()()(),Tl(1395,"tr",15)(1396,"td",16)(1397,"div",24)(1398,"span",25),tN(1399," triggerMode"),Gl(1400,"br"),sg()()(),Tl(1401,"td",20)(1402,"code",39),tN(1403,"'change' "),sg(),Tl(1404,"code",40),tN(1405," 'changeModel'"),sg()(),Tl(1406,"td",23)(1407,"em")(1408,"strong"),tN(1409,"(opcional)"),sg()(),Tl(1410,"p"),tN(1411,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Tl(1412,"code"),tN(1413,"change"),sg(),tN(1414," ou "),Tl(1415,"code"),tN(1416,"change-model"),sg(),tN(1417,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return l})();var de=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(wn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Number",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-number-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-number-basic-view")(6,"sample-po-number-labs-view")(7,"sample-po-number-calculate-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ie,ae,re,me],encapsulation:2})}return l})();var Ce=[{path:"",component:de}],pe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[vL.forChild(Ce),vL]})}return l})();var Ge=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[ar,pe]})}return l})();export{Ge as DocPoNumberModule};