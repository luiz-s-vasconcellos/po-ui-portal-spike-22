import {f as fe,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,bT as ha,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bB as ga,ai as ya,bC as Vp,al as lx,am as pw,an as $0,ap as hw,aq as G0,aX as _x,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ie=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-basic"]],standalone:false,decls:1,vars:0,consts:[["name","number","p-label","PO Number"]],template:function(r,i){r&1&&Ul(0,"po-number",0);},dependencies:[ha],encapsulation:2,changeDetection:1})}return l})();var Ee=l=>({"docs-sample-code-tabs":l}),ae=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Number Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-number-basic/sample-po-number-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-number-basic/sample-po-number-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-number-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ee,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ie],encapsulation:2})}return l})();var le=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:"an an-currency-circle-dollar",label:"an an-currency-circle-dollar"},{value:"an an-currency-btc",label:"an an-currency-btc"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event="",this.messageErrorPattern="",this.label=void 0,this.placeholder="",this.help="",this.icon="",this.size="medium",this.step=void 0,this.properties=[];}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-labs"]],standalone:false,decls:23,vars:43,consts:[["f","ngForm"],["name","PO number",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-max","p-maxlength","p-min","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-step","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","messageErrorPattern","p-clean","","p-label","Message error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Minlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Maxlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","step","p-clean","","p-label","Step",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=lx();wl(0,"po-number",1),pw("ngModelChange",function(o){return Qy(p),$x(i.number,o)||(i.number=o),Jy(o)}),ut("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3)(4,"po-info",4),ng(),Ul(5,"po-divider"),wl(6,"form",null,0)(8,"po-input",5),pw("ngModelChange",function(o){return Qy(p),$x(i.label,o)||(i.label=o),Jy(o)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(o){return Qy(p),$x(i.help,o)||(i.help=o),Jy(o)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(o){return Qy(p),$x(i.helperText,o)||(i.helperText=o),Jy(o)}),ng(),$0(),wl(11,"po-input",8),pw("ngModelChange",function(o){return Qy(p),$x(i.placeholder,o)||(i.placeholder=o),Jy(o)}),ng(),$0(),wl(12,"po-input",9),pw("ngModelChange",function(o){return Qy(p),$x(i.messageErrorPattern,o)||(i.messageErrorPattern=o),Jy(o)}),ng(),$0(),wl(13,"po-number",10),pw("ngModelChange",function(o){return Qy(p),$x(i.min,o)||(i.min=o),Jy(o)}),ng(),$0(),wl(14,"po-number",11),pw("ngModelChange",function(o){return Qy(p),$x(i.minlength,o)||(i.minlength=o),Jy(o)}),ng(),$0(),wl(15,"po-number",12),pw("ngModelChange",function(o){return Qy(p),$x(i.max,o)||(i.max=o),Jy(o)}),ng(),$0(),wl(16,"po-number",13),pw("ngModelChange",function(o){return Qy(p),$x(i.maxlength,o)||(i.maxlength=o),Jy(o)}),ng(),$0(),wl(17,"po-number",14),pw("ngModelChange",function(o){return Qy(p),$x(i.step,o)||(i.step=o),Jy(o)}),ng(),$0(),wl(18,"po-select",15),pw("ngModelChange",function(o){return Qy(p),$x(i.icon,o)||(i.icon=o),Jy(o)}),ng(),$0(),wl(19,"po-checkbox-group",16),pw("ngModelChange",function(o){return Qy(p),$x(i.properties,o)||(i.properties=o),Jy(o)}),ng(),$0(),wl(20,"po-radio-group",17),pw("ngModelChange",function(o){return Qy(p),$x(i.size,o)||(i.size=o),Jy(o)}),ng(),$0(),wl(21,"div",2)(22,"po-button",18),ut("p-click",function(){return i.restore()}),ng()()();}r&2&&(hw("ngModel",i.number),YE("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.messageErrorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-max",i.max)("p-maxlength",i.maxlength)("p-min",i.min)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-step",i.step)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),G0(),Pp(3),YE("p-value",i.number),Pp(),YE("p-value",i.event),Pp(4),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.help),G0(),Pp(),hw("ngModel",i.helperText),G0(),Pp(),hw("ngModel",i.placeholder),G0(),Pp(),hw("ngModel",i.messageErrorPattern),G0(),Pp(),hw("ngModel",i.min),G0(),Pp(),hw("ngModel",i.minlength),G0(),Pp(),hw("ngModel",i.max),G0(),Pp(),hw("ngModel",i.maxlength),G0(),Pp(),hw("ngModel",i.step),G0(),Pp(),hw("ngModel",i.icon),YE("p-options",i.iconOptions),G0(),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Yo,ha,ga,ya,Vp],encapsulation:2,changeDetection:1})}return l})();var ve=l=>({"docs-sample-code-tabs":l}),re=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Number Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-number-labs/sample-po-number-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-number
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-number-labs/sample-po-number-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-number-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ve,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,le],encapsulation:2})}return l})();var me=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:"S\xE3o Paulo"},{value:17,label:"Alagoas"},{value:15,label:"Cear\xE1"}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100);}loadICMS(){this.icms=this.state;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-calculate"]],standalone:false,decls:16,vars:9,consts:[["f","ngForm"],[1,"po-row"],["name","price","p-label","Price","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantity","p-label","Quantity","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State","p-required","","p-sort","",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],["name","icms","p-label","ICMS %","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","liquid","p-label","Liquid","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","total","p-label","Total","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Calculate",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=lx();wl(0,"h3"),Ux(1,"Calculate Tax"),ng(),Ul(2,"po-divider"),wl(3,"form",null,0)(5,"div",1)(6,"po-number",2),pw("ngModelChange",function(o){return Qy(p),$x(i.price,o)||(i.price=o),Jy(o)}),ng(),$0(),wl(7,"po-number",3),pw("ngModelChange",function(o){return Qy(p),$x(i.quantity,o)||(i.quantity=o),Jy(o)}),ng(),$0(),ng(),wl(8,"div")(9,"po-select",4),pw("ngModelChange",function(o){return Qy(p),$x(i.state,o)||(i.state=o),Jy(o)}),ut("p-change",function(){return i.loadICMS()}),ng(),$0(),wl(10,"po-number",5),pw("ngModelChange",function(o){return Qy(p),$x(i.icms,o)||(i.icms=o),Jy(o)}),ng(),$0(),wl(11,"po-number",6),pw("ngModelChange",function(o){return Qy(p),$x(i.liquid,o)||(i.liquid=o),Jy(o)}),ng(),$0(),wl(12,"po-number",7),pw("ngModelChange",function(o){return Qy(p),$x(i.total,o)||(i.total=o),Jy(o)}),ng(),$0(),ng(),wl(13,"div",1)(14,"po-button",8),ut("p-click",function(){return i.calculate()}),ng(),wl(15,"po-button",9),ut("p-click",function(){Qy(p);let o=_x(4);return Jy(o.reset())}),ng()()();}if(r&2){let p=_x(4);Pp(6),hw("ngModel",i.price),G0(),Pp(),hw("ngModel",i.quantity),G0(),Pp(2),hw("ngModel",i.state),YE("p-options",i.statesOptions),G0(),Pp(),hw("ngModel",i.icms),G0(),Pp(),hw("ngModel",i.liquid),G0(),Pp(),hw("ngModel",i.total),G0(),Pp(2),YE("p-disabled",p.invalid),Pp(),YE("p-disabled",p.invalid);}},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ha,ya],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),de=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-calculate-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Number - Calculate"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-number-calculate/sample-po-number-calculate.component.html"),ng(),wl(13,"pre",7),Ux(14,`<h3>Calculate Tax</h3>

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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-number-calculate/sample-po-number-calculate.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-number-calculate"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,_e,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,me],encapsulation:2})}return l})();var pe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-doc"]],standalone:false,decls:1418,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoNumberComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ng(),wl(24,"p"),Ux(25,"Importante:"),ng(),wl(26,"ul")(27,"li"),Ux(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ng()(),wl(29,"h4"),Ux(30,"Tokens customiz\xE1veis"),ng(),wl(31,"p"),Ux(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Ul(33,"br"),Ux(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),wl(35,"code"),Ux(36,".po-input"),ng()(),wl(37,"blockquote")(38,"p"),Ux(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),wl(40,"a",6),Ux(41,"Grid System"),ng(),Ux(42,"."),ng()(),wl(43,"blockquote")(44,"p"),Ux(45,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(46,"a",7),Ux(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(48,"."),ng()(),wl(49,"table")(50,"thead")(51,"tr")(52,"th"),Ux(53,"Propriedade"),ng(),wl(54,"th"),Ux(55,"Descri\xE7\xE3o"),ng(),wl(56,"th"),Ux(57,"Valor Padr\xE3o"),ng()()(),wl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Ux(62,"Default Values"),ng()(),Ul(63,"td")(64,"td"),ng(),wl(65,"tr")(66,"td")(67,"code"),Ux(68,"--font-family"),ng()(),wl(69,"td"),Ux(70,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(71,"td")(72,"code"),Ux(73,"var(--font-family-theme)"),ng()()(),wl(74,"tr")(75,"td")(76,"code"),Ux(77,"--font-size"),ng()(),wl(78,"td"),Ux(79,"Tamanho da fonte"),ng(),wl(80,"td")(81,"code"),Ux(82,"var(--font-size-default)"),ng()()(),wl(83,"tr")(84,"td")(85,"code"),Ux(86,"--text-color-placeholder"),ng()(),wl(87,"td"),Ux(88,"Cor do texto placeholder"),ng(),wl(89,"td")(90,"code"),Ux(91,"var(--color-neutral-light-30)"),ng()()(),wl(92,"tr")(93,"td")(94,"code"),Ux(95,"--color"),ng()(),wl(96,"td"),Ux(97,"Cor pincipal do input"),ng(),wl(98,"td")(99,"code"),Ux(100,"var(--color-neutral-dark-70)"),ng()()(),wl(101,"tr")(102,"td")(103,"code"),Ux(104,"--background"),ng()(),wl(105,"td"),Ux(106,"Cor de background"),ng(),wl(107,"td")(108,"code"),Ux(109,"var(--color-neutral-light-05)"),ng()()(),wl(110,"tr")(111,"td")(112,"code"),Ux(113,"--padding"),ng()(),wl(114,"td"),Ux(115,"Preenchimento"),ng(),wl(116,"td")(117,"code"),Ux(118,"0 0.5rem"),ng()()(),wl(119,"tr")(120,"td")(121,"code"),Ux(122,"--text-color"),ng()(),wl(123,"td"),Ux(124,"Cor do texto"),ng(),wl(125,"td")(126,"code"),Ux(127,"var(--color-neutral-dark-90)"),ng()()(),wl(128,"tr")(129,"td")(130,"code"),Ux(131,"--field-container-title-justify"),ng()(),wl(132,"td"),Ux(133,"Alinhamento horizontal do t\xEDtulo ("),wl(134,"code"),Ux(135,"justify-content"),ng(),Ux(136,")"),ng(),wl(137,"td")(138,"code"),Ux(139,"space-between"),ng()()(),wl(140,"tr")(141,"td")(142,"code"),Ux(143,"--field-container-title-flex"),ng()(),wl(144,"td"),Ux(145,"Flex do t\xEDtulo ("),wl(146,"code"),Ux(147,"flex"),ng(),Ux(148,")"),ng(),wl(149,"td")(150,"code"),Ux(151,"1 auto"),ng()()(),wl(152,"tr")(153,"td")(154,"strong"),Ux(155,"Hover"),ng()(),Ul(156,"td")(157,"td"),ng(),wl(158,"tr")(159,"td")(160,"code"),Ux(161,"--color-hover"),ng()(),wl(162,"td"),Ux(163,"Cor principal no estado hover"),ng(),wl(164,"td")(165,"code"),Ux(166,"var(--color-brand-01-dark)"),ng()()(),wl(167,"tr")(168,"td")(169,"code"),Ux(170,"--background-hover"),ng()(),wl(171,"td"),Ux(172,"Cor de background no estado hover"),ng(),wl(173,"td")(174,"code"),Ux(175,"var(--color-brand-01-lightest)"),ng()()(),wl(176,"tr")(177,"td")(178,"strong"),Ux(179,"Focused"),ng()(),Ul(180,"td")(181,"td"),ng(),wl(182,"tr")(183,"td")(184,"code"),Ux(185,"--color-focused"),ng()(),wl(186,"td"),Ux(187,"Cor principal no estado de focus"),ng(),wl(188,"td")(189,"code"),Ux(190,"var(--color-action-default)"),ng()()(),wl(191,"tr")(192,"td")(193,"code"),Ux(194,"--outline-color-focused"),ng()(),wl(195,"td"),Ux(196,"Cor do outline do estado de focus"),ng(),wl(197,"td")(198,"code"),Ux(199,"var(--color-action-focus)"),ng()()(),wl(200,"tr")(201,"td")(202,"strong"),Ux(203,"Disabled"),ng()(),Ul(204,"td")(205,"td"),ng(),wl(206,"tr")(207,"td")(208,"code"),Ux(209,"--color-disabled"),ng()(),wl(210,"td"),Ux(211,"Cor principal no estado disabled"),ng(),wl(212,"td")(213,"code"),Ux(214,"var(--color-neutral-light-30)"),ng()()(),wl(215,"tr")(216,"td")(217,"code"),Ux(218,"--background-disabled"),ng()(),wl(219,"td"),Ux(220,"Cor de background no estado disabled"),ng(),wl(221,"td")(222,"code"),Ux(223,"var(--color-neutral-light-20)"),ng()()(),wl(224,"tr")(225,"td")(226,"code"),Ux(227,"--text-color-disabled"),ng()(),wl(228,"td"),Ux(229,"Cor do texto no estado disabled"),ng(),wl(230,"td")(231,"code"),Ux(232,"var(--color-neutral-dark-70)"),ng()()()()(),wl(233,"p"),Ul(234,"br"),Ux(235," O "),wl(236,"code"),Ux(237,"po-number"),ng(),Ux(238,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),ng()(),wl(239,"div",8)(240,"h4",9),Ux(241,"Seletor"),ng(),wl(242,"pre",10),Ux(243,`<po-number
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
`),ng()(),wl(244,"h4",11),Ux(245,"Propriedades"),ng(),wl(246,"table",12)(247,"tr",13)(248,"th",14),Ux(249,"Nome"),ng(),wl(250,"th",14),Ux(251,"Tipo"),ng(),wl(252,"th",14),Ux(253,"Padr\xE3o"),ng(),wl(254,"th",14),Ux(255,"Descri\xE7\xE3o"),ng()(),wl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),Ux(260," (p-additional-help)"),Ul(261,"br"),ng()(),wl(262,"div",19),Ux(263,"Deprecated"),ng()(),wl(264,"td",20)(265,"code",21),Ux(266,"EventEmitter"),ng()(),wl(267,"td",22),Ux(268,"-"),ng(),wl(269,"td",23)(270,"em")(271,"strong"),Ux(272,"(opcional)"),ng()(),wl(273,"p"),Ux(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(275,"blockquote")(276,"p"),Ux(277,"Essa propriedade est\xE1 "),wl(278,"strong"),Ux(279,"depreciada"),ng(),Ux(280," e ser\xE1 removida na vers\xE3o "),wl(281,"code"),Ux(282,"23.x.x"),ng(),Ux(283,". Recomendamos utilizar a propriedade "),wl(284,"code"),Ux(285,"p-helper"),ng(),Ux(286," que oferece mais recursos e flexibilidade."),ng()()()(),wl(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),Ux(291," p-additional-help-tooltip"),Ul(292,"br"),ng()(),wl(293,"div",19),Ux(294,"Deprecated"),ng()(),wl(295,"td",20)(296,"code",26),Ux(297,"string"),ng()(),wl(298,"td",22),Ux(299,"-"),ng(),wl(300,"td",23)(301,"em")(302,"strong"),Ux(303,"(opcional)"),ng()(),wl(304,"p"),Ux(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(306,"code"),Ux(307,"po-helper"),ng(),Ux(308,`.
`),wl(309,"strong"),Ux(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(311,"blockquote")(312,"p"),Ux(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(314,"blockquote")(315,"p"),Ux(316,"Essa propriedade est\xE1 "),wl(317,"strong"),Ux(318,"depreciada"),ng(),Ux(319," e ser\xE1 removida na vers\xE3o "),wl(320,"code"),Ux(321,"23.x.x"),ng(),Ux(322,". Recomendamos utilizar a propriedade "),wl(323,"code"),Ux(324,"p-helper"),ng(),Ux(325," que oferece mais recursos e flexibilidade."),ng()()()(),wl(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),Ux(330," p-append-in-body"),Ul(331,"br"),ng()()(),wl(332,"td",20)(333,"code",27),Ux(334,"boolean"),ng()(),wl(335,"td",22)(336,"p")(337,"code"),Ux(338,"false"),ng()()(),wl(339,"td",23)(340,"em")(341,"strong"),Ux(342,"(opcional)"),ng()(),wl(343,"p"),Ux(344,"Define que o popover ("),wl(345,"code"),Ux(346,"p-helper"),ng(),Ux(347," e/ou "),wl(348,"code"),Ux(349,"p-error-limit"),ng(),Ux(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ng(),wl(351,"blockquote")(352,"p"),Ux(353,"Quando utilizado com "),wl(354,"code"),Ux(355,"p-helper"),ng(),Ux(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),Ux(361," p-auto-focus"),Ul(362,"br"),ng()()(),wl(363,"td",20)(364,"code",27),Ux(365,"boolean"),ng()(),wl(366,"td",22)(367,"p")(368,"code"),Ux(369,"false"),ng()()(),wl(370,"td",23)(371,"em")(372,"strong"),Ux(373,"(opcional)"),ng()(),wl(374,"p"),Ux(375,"Aplica foco no elemento ao ser iniciado."),ng(),wl(376,"blockquote")(377,"p"),Ux(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),ng()()()(),wl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),Ux(383," (p-blur)"),Ul(384,"br"),ng()()(),wl(385,"td",20)(386,"code",21),Ux(387,"EventEmitter"),ng()(),wl(388,"td",22),Ux(389,"-"),ng(),wl(390,"td",23)(391,"em")(392,"strong"),Ux(393,"(opcional)"),ng()(),wl(394,"p"),Ux(395,"Evento disparado ao sair do campo."),ng()()(),wl(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),Ux(400," (p-change)"),Ul(401,"br"),ng()()(),wl(402,"td",20)(403,"code",21),Ux(404,"EventEmitter"),ng()(),wl(405,"td",22),Ux(406,"-"),ng(),wl(407,"td",23)(408,"em")(409,"strong"),Ux(410,"(opcional)"),ng()(),wl(411,"p"),Ux(412,"Evento disparado ao alterar valor e deixar o campo."),ng()()(),wl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),Ux(417," (p-change-model)"),Ul(418,"br"),ng()()(),wl(419,"td",20)(420,"code",21),Ux(421,"EventEmitter"),ng()(),wl(422,"td",22),Ux(423,"-"),ng(),wl(424,"td",23)(425,"em")(426,"strong"),Ux(427,"(opcional)"),ng()(),wl(428,"p"),Ux(429,"Evento disparado ao alterar valor do model."),ng()()(),wl(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),Ux(434,"p-clean"),Ul(435,"br"),ng()()(),wl(436,"td",20)(437,"code",27),Ux(438,"boolean"),ng()(),wl(439,"td",22),Ux(440,"-"),ng(),wl(441,"td",23)(442,"em")(443,"strong"),Ux(444,"(opcional)"),ng()(),wl(445,"p"),Ux(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),ng()()(),wl(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),Ux(451," p-compact-label"),Ul(452,"br"),ng()()(),wl(453,"td",20)(454,"code",27),Ux(455,"boolean"),ng()(),wl(456,"td",22)(457,"p")(458,"code"),Ux(459,"false"),ng()()(),wl(460,"td",23)(461,"em")(462,"strong"),Ux(463,"(opcional)"),ng()(),wl(464,"p"),Ux(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(466,"p"),Ux(467,"Quando habilitado ("),wl(468,"code"),Ux(469,"true"),ng(),Ux(470,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(471,"ul")(472,"li")(473,"code"),Ux(474,"po-label"),ng()(),wl(475,"li")(476,"code"),Ux(477,"p-requirement (showRequired)"),ng()(),wl(478,"li")(479,"code"),Ux(480,"po-helper"),ng()()(),wl(481,"p"),Ux(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(483,"p"),Ux(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(485,"ul")(486,"li")(487,"code"),Ux(488,"--field-container-title-justify"),ng()(),wl(489,"li")(490,"code"),Ux(491,"--field-container-title-flex"),ng()()(),wl(492,"p"),Ux(493,"Exemplo:"),ng(),wl(494,"pre")(495,"code"),Ux(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(497,"p"),Ux(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),Ux(503,"p-disabled"),Ul(504,"br"),ng()()(),wl(505,"td",20)(506,"code",27),Ux(507,"boolean"),ng()(),wl(508,"td",22)(509,"p")(510,"code"),Ux(511,"false"),ng()()(),wl(512,"td",23)(513,"em")(514,"strong"),Ux(515,"(opcional)"),ng()(),wl(516,"p"),Ux(517,"Se verdadeiro, desabilita o campo."),ng()()(),wl(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),Ux(522," p-emit-all-changes"),Ul(523,"br"),ng()()(),wl(524,"td",20)(525,"code",27),Ux(526,"boolean"),ng()(),wl(527,"td",22)(528,"p")(529,"code"),Ux(530,"false"),ng()()(),wl(531,"td",23)(532,"em")(533,"strong"),Ux(534,"(opcional)"),ng()(),wl(535,"p"),Ux(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),ng()()(),wl(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),Ux(541," (p-enter)"),Ul(542,"br"),ng()()(),wl(543,"td",20)(544,"code",21),Ux(545,"EventEmitter"),ng()(),wl(546,"td",22),Ux(547,"-"),ng(),wl(548,"td",23)(549,"em")(550,"strong"),Ux(551,"(opcional)"),ng()(),wl(552,"p"),Ux(553,"Evento disparado ao entrar do campo."),ng()()(),wl(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),Ux(558," p-error-async-properties"),Ul(559,"br"),ng()()(),wl(560,"td",20)(561,"code",28),Ux(562,"ErrorAsyncProperties"),ng()(),wl(563,"td",22),Ux(564,"-"),ng(),wl(565,"td",23)(566,"em")(567,"strong"),Ux(568,"(opcional)"),ng()(),wl(569,"p"),Ux(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),wl(571,"code"),Ux(572,"Reactive Forms"),ng(),Ux(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),wl(574,"code"),Ux(575,"asyncValidators"),ng(),Ux(576,"."),ng()()(),wl(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),Ux(581," p-error-limit"),Ul(582,"br"),ng()()(),wl(583,"td",20)(584,"code",27),Ux(585,"boolean"),ng()(),wl(586,"td",22)(587,"p")(588,"code"),Ux(589,"false"),ng()()(),wl(590,"td",23)(591,"em")(592,"strong"),Ux(593,"(opcional)"),ng()(),wl(594,"p"),Ux(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(596,"blockquote")(597,"p"),Ux(598,"Caso essa propriedade seja definida como "),wl(599,"code"),Ux(600,"true"),ng(),Ux(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()()()(),wl(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),Ux(606," p-error-pattern"),Ul(607,"br"),ng()()(),wl(608,"td",20)(609,"code",26),Ux(610,"string"),ng()(),wl(611,"td",22),Ux(612,"-"),ng(),wl(613,"td",23)(614,"em")(615,"strong"),Ux(616,"(opcional)"),ng()(),wl(617,"p"),Ux(618,"Mensagem que ser\xE1 apresentada quando o "),wl(619,"code"),Ux(620,"pattern"),ng(),Ux(621," ou a m\xE1scara n\xE3o for satisfeita."),ng(),wl(622,"blockquote")(623,"p"),Ux(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),wl(625,"code"),Ux(626,"p-required-field-error-message"),ng(),Ux(627," em conjunto."),ng()()()(),wl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),Ux(632," p-help"),Ul(633,"br"),ng()()(),wl(634,"td",20)(635,"code",26),Ux(636,"string"),ng()(),wl(637,"td",22),Ux(638,"-"),ng(),wl(639,"td",23)(640,"em")(641,"strong"),Ux(642,"(opcional)"),ng()(),wl(643,"p"),Ux(644,"Texto de apoio do campo."),ng()()(),wl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),Ux(649," p-icon"),Ul(650,"br"),ng()()(),wl(651,"td",20)(652,"code",26),Ux(653,"string "),ng(),wl(654,"code",29),Ux(655," TemplateRef<void>"),ng()(),wl(656,"td",22),Ux(657,"-"),ng(),wl(658,"td",23)(659,"em")(660,"strong"),Ux(661,"(opcional)"),ng()(),wl(662,"p"),Ux(663,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),ng(),wl(664,"p"),Ux(665,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(666,"a",30),Ux(667,"Biblioteca de \xEDcones"),ng(),Ux(668,". conforme exemplo abaixo:"),ng(),wl(669,"pre")(670,"code"),Ux(671,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),ng()(),wl(672,"p"),Ux(673,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(674,"em"),Ux(675,"Font Awesome"),ng(),Ux(676,", da seguinte forma:"),ng(),wl(677,"pre")(678,"code"),Ux(679,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),ng()(),wl(680,"p"),Ux(681,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(682,"code"),Ux(683,"TemplateRef"),ng(),Ux(684,", conforme exemplo abaixo:"),ng(),wl(685,"pre")(686,"code"),Ux(687,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ng()(),wl(688,"blockquote")(689,"p"),Ux(690,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),wl(691,"code"),Ux(692,"font-size: inherit"),ng(),Ux(693," caso o \xEDcone utilizado n\xE3o aplique-o."),ng()()()(),wl(694,"tr",15)(695,"td",16)(696,"div",17)(697,"span",18),Ux(698," (p-keydown)"),Ul(699,"br"),ng()()(),wl(700,"td",20)(701,"code",21),Ux(702,"EventEmitter"),ng()(),wl(703,"td",22),Ux(704,"-"),ng(),wl(705,"td",23)(706,"em")(707,"strong"),Ux(708,"(opcional)"),ng()(),wl(709,"p"),Ux(710,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(711,"code"),Ux(712,"KeyboardEvent"),ng(),Ux(713," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),Ux(718," p-label"),Ul(719,"br"),ng()()(),wl(720,"td",20)(721,"code",26),Ux(722,"string"),ng()(),wl(723,"td",22),Ux(724,"-"),ng(),wl(725,"td",23)(726,"em")(727,"strong"),Ux(728,"(opcional)"),ng()(),wl(729,"p"),Ux(730,"R\xF3tulo do campo."),ng()()(),wl(731,"tr",15)(732,"td",16)(733,"div",24)(734,"span",25),Ux(735," p-label-text-wrap"),Ul(736,"br"),ng()()(),wl(737,"td",20)(738,"code",27),Ux(739,"boolean"),ng()(),wl(740,"td",22)(741,"p")(742,"code"),Ux(743,"false"),ng()()(),wl(744,"td",23)(745,"em")(746,"strong"),Ux(747,"(opcional)"),ng()(),wl(748,"p"),Ux(749,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(750,"code"),Ux(751,"p-label"),ng(),Ux(752,". Quando "),wl(753,"code"),Ux(754,"p-label-text-wrap"),ng(),Ux(755,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),Ux(760," p-loading"),Ul(761,"br"),ng()()(),wl(762,"td",20)(763,"code",27),Ux(764,"boolean"),ng()(),wl(765,"td",22)(766,"p")(767,"code"),Ux(768,"false"),ng()()(),wl(769,"td",23)(770,"em")(771,"strong"),Ux(772,"(opcional)"),ng()(),wl(773,"p"),Ux(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng()()(),wl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),Ux(779,"p-mask"),Ul(780,"br"),ng()()(),wl(781,"td",20)(782,"code",26),Ux(783,"string"),ng()(),wl(784,"td",22),Ux(785,"-"),ng(),wl(786,"td",23)(787,"em")(788,"strong"),Ux(789,"(opcional)"),ng()(),wl(790,"p"),Ux(791,"Indica uma m\xE1scara para o campo, por\xE9m \xE9 incompat\xEDvel com o "),wl(792,"code"),Ux(793,"po-number"),ng(),Ux(794,"."),ng(),wl(795,"blockquote")(796,"p")(797,"strong"),Ux(798,"Componentes compat\xEDveis:"),ng(),wl(799,"code"),Ux(800,"po-input"),ng(),Ux(801,","),wl(802,"code"),Ux(803,"po-decimal"),ng(),Ux(804,"."),ng()()()(),wl(805,"tr",15)(806,"td",16)(807,"div",24)(808,"span",25),Ux(809,"p-mask-format-model"),Ul(810,"br"),ng()()(),wl(811,"td",20)(812,"code",27),Ux(813,"boolean"),ng()(),wl(814,"td",22)(815,"p")(816,"code"),Ux(817,"false"),ng()()(),wl(818,"td",23)(819,"em")(820,"strong"),Ux(821,"(opcional)"),ng()(),wl(822,"p"),Ux(823,"Indica se o "),wl(824,"code"),Ux(825,"model"),ng(),Ux(826," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),ng()()(),wl(827,"tr",15)(828,"td",16)(829,"div",24)(830,"span",25),Ux(831," p-mask-no-length-validation"),Ul(832,"br"),ng()()(),wl(833,"td",20)(834,"code",27),Ux(835,"boolean"),ng()(),wl(836,"td",22)(837,"p")(838,"code"),Ux(839,"false"),ng()()(),wl(840,"td",23)(841,"p"),Ux(842,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),wl(843,"code"),Ux(844,"minLength"),ng(),Ux(845,") e m\xE1ximo ("),wl(846,"code"),Ux(847,"maxLength"),ng(),Ux(848,") quando h\xE1 uma m\xE1scara ("),wl(849,"code"),Ux(850,"p-mask"),ng(),Ux(851,") definida."),ng(),wl(852,"ul")(853,"li"),Ux(854,"Quando "),wl(855,"code"),Ux(856,"true"),ng(),Ux(857,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),ng(),wl(858,"li"),Ux(859,"Quando "),wl(860,"code"),Ux(861,"false"),ng(),Ux(862,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),ng()(),wl(863,"blockquote")(864,"p"),Ux(865,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),wl(866,"code"),Ux(867,"p-mask-format-model"),ng(),Ux(868,"."),ng()(),wl(869,"p"),Ux(870,"Exemplo:"),ng(),wl(871,"pre")(872,"code"),Ux(873,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ng()(),wl(874,"ul")(875,"li"),Ux(876,"Entrada: "),wl(877,"code"),Ux(878,"123-456"),ng(),Ux(879," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),wl(880,"code"),Ux(881,"-"),ng(),Ux(882,"."),ng()()()(),wl(883,"tr",15)(884,"td",16)(885,"div",24)(886,"span",25),Ux(887,"p-max"),Ul(888,"br"),ng()()(),wl(889,"td",20)(890,"code",31),Ux(891,"number"),ng()(),wl(892,"td",22),Ux(893,"-"),ng(),wl(894,"td",23)(895,"em")(896,"strong"),Ux(897,"(opcional)"),ng()(),wl(898,"p"),Ux(899,"Valor m\xE1ximo."),ng(),wl(900,"blockquote")(901,"p"),Ux(902,"Quando o valor m\xE1ximo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),wl(903,"code"),Ux(904,"p-step"),ng(),Ux(905," tamb\xE9m passando a ela um valor decimal."),ng()()()(),wl(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),Ux(910," p-maxlength"),Ul(911,"br"),ng()()(),wl(912,"td",20)(913,"code",31),Ux(914,"number"),ng()(),wl(915,"td",22),Ux(916,"-"),ng(),wl(917,"td",23)(918,"em")(919,"strong"),Ux(920,"(opcional)"),ng()(),wl(921,"p"),Ux(922,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),ng()()(),wl(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),Ux(927,"p-min"),Ul(928,"br"),ng()()(),wl(929,"td",20)(930,"code",31),Ux(931,"number"),ng()(),wl(932,"td",22),Ux(933,"-"),ng(),wl(934,"td",23)(935,"em")(936,"strong"),Ux(937,"(opcional)"),ng()(),wl(938,"p"),Ux(939,"Valor m\xEDnimo."),ng(),wl(940,"blockquote")(941,"p"),Ux(942,"Quando o valor m\xEDnimo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),wl(943,"code"),Ux(944,"p-step"),ng(),Ux(945," tamb\xE9m passando a ela um valor decimal."),ng()()()(),wl(946,"tr",15)(947,"td",16)(948,"div",24)(949,"span",25),Ux(950," p-minlength"),Ul(951,"br"),ng()()(),wl(952,"td",20)(953,"code",31),Ux(954,"number"),ng()(),wl(955,"td",22),Ux(956,"-"),ng(),wl(957,"td",23)(958,"em")(959,"strong"),Ux(960,"(opcional)"),ng()(),wl(961,"p"),Ux(962,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),ng()()(),wl(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),Ux(967," name"),Ul(968,"br"),ng()()(),wl(969,"td",20)(970,"code",26),Ux(971,"string"),ng()(),wl(972,"td",22),Ux(973,"-"),ng(),wl(974,"td",23)(975,"p"),Ux(976,"Nome e identificador do campo."),ng()()(),wl(977,"tr",15)(978,"td",16)(979,"div",24)(980,"span",25),Ux(981," p-no-autocomplete"),Ul(982,"br"),ng()()(),wl(983,"td",20)(984,"code",27),Ux(985,"boolean"),ng()(),wl(986,"td",22)(987,"p")(988,"code"),Ux(989,"false"),ng()()(),wl(990,"td",23)(991,"em")(992,"strong"),Ux(993,"(opcional)"),ng()(),wl(994,"p"),Ux(995,"Define a propriedade nativa "),wl(996,"code"),Ux(997,"autocomplete"),ng(),Ux(998," do campo como "),wl(999,"code"),Ux(1e3,"off"),ng(),Ux(1001,"."),ng(),wl(1002,"blockquote")(1003,"p"),Ux(1004,"No componente "),wl(1005,"code"),Ux(1006,"po-password"),ng(),Ux(1007," ser\xE1 definido como "),wl(1008,"code"),Ux(1009,"new-password"),ng(),Ux(1010,"."),ng()(),wl(1011,"p"),Ux(1012,"Nos componentes "),wl(1013,"code"),Ux(1014,"po-password"),ng(),Ux(1015," e "),wl(1016,"code"),Ux(1017,"po-login"),ng(),Ux(1018," o valor padr\xE3o ser\xE1 "),wl(1019,"code"),Ux(1020,"true"),ng(),Ux(1021,"."),ng()()(),wl(1022,"tr",15)(1023,"td",16)(1024,"div",24)(1025,"span",25),Ux(1026," p-optional"),Ul(1027,"br"),ng()()(),wl(1028,"td",20)(1029,"code",27),Ux(1030,"boolean"),ng()(),wl(1031,"td",22)(1032,"p")(1033,"code"),Ux(1034,"false"),ng()()(),wl(1035,"td",23)(1036,"em")(1037,"strong"),Ux(1038,"(opcional)"),ng()(),wl(1039,"p"),Ux(1040,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(1041,"blockquote")(1042,"p"),Ux(1043,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1044,"ul")(1045,"li"),Ux(1046,"O campo conter "),wl(1047,"code"),Ux(1048,"p-required"),ng(),Ux(1049,";"),ng(),wl(1050,"li"),Ux(1051,"N\xE3o possuir "),wl(1052,"code"),Ux(1053,"p-help"),ng(),Ux(1054," e/ou "),wl(1055,"code"),Ux(1056,"p-label"),ng(),Ux(1057,"."),ng()()()(),wl(1058,"tr",15)(1059,"td",16)(1060,"div",24)(1061,"span",25),Ux(1062,"p-pattern"),Ul(1063,"br"),ng()()(),wl(1064,"td",20)(1065,"code",26),Ux(1066,"string"),ng()(),wl(1067,"td",22),Ux(1068,"-"),ng(),wl(1069,"td",23)(1070,"em")(1071,"strong"),Ux(1072,"(opcional)"),ng()(),wl(1073,"p"),Ux(1074,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),wl(1075,"code"),Ux(1076,"(p-mask)"),ng(),Ux(1077,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ng()()(),wl(1078,"tr",15)(1079,"td",16)(1080,"div",24)(1081,"span",25),Ux(1082," p-placeholder"),Ul(1083,"br"),ng()()(),wl(1084,"td",20)(1085,"code",26),Ux(1086,"string"),ng()(),wl(1087,"td",22)(1088,"p"),Ux(1089,"''"),ng()(),wl(1090,"td",23)(1091,"em")(1092,"strong"),Ux(1093,"(opcional)"),ng()(),wl(1094,"p"),Ux(1095,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),ng()()(),wl(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),Ux(1100," p-helper"),Ul(1101,"br"),ng()()(),wl(1102,"td",20)(1103,"code",32),Ux(1104,"PoHelperOptions "),ng(),wl(1105,"code",26),Ux(1106," string"),ng()(),wl(1107,"td",22),Ux(1108,"-"),ng(),wl(1109,"td",23)(1110,"em")(1111,"strong"),Ux(1112,"(opcional)"),ng()(),wl(1113,"p"),Ux(1114,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(1115,"code"),Ux(1116,"p-label"),ng(),Ux(1117," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(1118,"code"),Ux(1119,"p-label"),ng(),Ux(1120,"."),ng(),wl(1121,"blockquote")(1122,"p"),Ux(1123,"Para mais informa\xE7\xF5es acesse: "),wl(1124,"a",33),Ux(1125,"https://po-ui.io/documentation/po-helper"),ng(),Ux(1126,"."),ng()(),wl(1127,"blockquote")(1128,"p"),Ux(1129,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(1130,"code"),Ux(1131,"p-additional-help-tooltip"),ng(),Ux(1132," e "),wl(1133,"code"),Ux(1134,"p-additional-help"),ng(),Ux(1135,") ser\xE1 ignorado."),ng()()()(),wl(1136,"tr",15)(1137,"td",16)(1138,"div",24)(1139,"span",25),Ux(1140,"p-readonly"),Ul(1141,"br"),ng()()(),wl(1142,"td",20)(1143,"code",27),Ux(1144,"boolean"),ng()(),wl(1145,"td",22),Ux(1146,"-"),ng(),wl(1147,"td",23)(1148,"em")(1149,"strong"),Ux(1150,"(opcional)"),ng()(),wl(1151,"p"),Ux(1152,"Indica que o campo ser\xE1 somente leitura."),ng()()(),wl(1153,"tr",15)(1154,"td",16)(1155,"div",24)(1156,"span",25),Ux(1157,"p-required"),Ul(1158,"br"),ng()()(),wl(1159,"td",20)(1160,"code",27),Ux(1161,"boolean"),ng()(),wl(1162,"td",22)(1163,"p")(1164,"code"),Ux(1165,"false"),ng()()(),wl(1166,"td",23)(1167,"em")(1168,"strong"),Ux(1169,"(opcional)"),ng()(),wl(1170,"p"),Ux(1171,"Define que o campo ser\xE1 obrigat\xF3rio."),ng(),wl(1172,"blockquote")(1173,"p"),Ux(1174,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),wl(1175,"code"),Ux(1176,"(p-disabled)"),ng(),Ux(1177,"."),ng()()()(),wl(1178,"tr",15)(1179,"td",16)(1180,"div",24)(1181,"span",25),Ux(1182," p-required-field-error-message"),Ul(1183,"br"),ng()()(),wl(1184,"td",20)(1185,"code",27),Ux(1186,"boolean"),ng()(),wl(1187,"td",22)(1188,"p")(1189,"code"),Ux(1190,"false"),ng()()(),wl(1191,"td",23)(1192,"em")(1193,"strong"),Ux(1194,"(opcional)"),ng()(),wl(1195,"p"),Ux(1196,"Exibe a mensagem setada na propriedade "),wl(1197,"code"),Ux(1198,"p-error-pattern"),ng(),Ux(1199," se o campo estiver vazio e for requerido."),ng(),wl(1200,"blockquote")(1201,"p"),Ux(1202,"Necess\xE1rio que a propriedade "),wl(1203,"code"),Ux(1204,"p-required"),ng(),Ux(1205," esteja habilitada."),ng()()()(),wl(1206,"tr",15)(1207,"td",16)(1208,"div",24)(1209,"span",25),Ux(1210," p-show-required"),Ul(1211,"br"),ng()()(),wl(1212,"td",20)(1213,"code",27),Ux(1214,"boolean"),ng()(),wl(1215,"td",22),Ux(1216,"-"),ng(),wl(1217,"td",23)(1218,"p"),Ux(1219,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(1220,"blockquote")(1221,"p"),Ux(1222,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1223,"ul")(1224,"li"),Ux(1225,"N\xE3o possuir "),wl(1226,"code"),Ux(1227,"p-help"),ng(),Ux(1228," e/ou "),wl(1229,"code"),Ux(1230,"p-label"),ng(),Ux(1231,"."),ng()()()(),wl(1232,"tr",15)(1233,"td",16)(1234,"div",24)(1235,"span",25),Ux(1236," p-size"),Ul(1237,"br"),ng()()(),wl(1238,"td",20)(1239,"code",26),Ux(1240,"string"),ng()(),wl(1241,"td",22)(1242,"p")(1243,"code"),Ux(1244,"medium"),ng()()(),wl(1245,"td",23)(1246,"em")(1247,"strong"),Ux(1248,"(opcional)"),ng()(),wl(1249,"p"),Ux(1250,"Define o tamanho do componente:"),ng(),wl(1251,"ul")(1252,"li")(1253,"code"),Ux(1254,"small"),ng(),Ux(1255,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(1256,"li")(1257,"code"),Ux(1258,"medium"),ng(),Ux(1259,": altura do input como 44px."),ng()(),wl(1260,"blockquote")(1261,"p"),Ux(1262,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(1263,"code"),Ux(1264,"medium"),ng(),Ux(1265,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(1266,"a",34),Ux(1267,"po-theme"),ng(),Ux(1268,"."),ng()()()(),wl(1269,"tr",15)(1270,"td",16)(1271,"div",24)(1272,"span",25),Ux(1273," p-step"),Ul(1274,"br"),ng()()(),wl(1275,"td",20)(1276,"code",26),Ux(1277,"string"),ng()(),wl(1278,"td",22)(1279,"p"),Ux(1280,"1"),ng()(),wl(1281,"td",23)(1282,"em")(1283,"strong"),Ux(1284,"(opcional)"),ng()(),wl(1285,"p"),Ux(1286,"Intervalo."),ng()()(),wl(1287,"tr",15)(1288,"td",16)(1289,"div",24)(1290,"span",25),Ux(1291," p-upper-case"),Ul(1292,"br"),ng()()(),wl(1293,"td",20)(1294,"code",27),Ux(1295,"boolean"),ng()(),wl(1296,"td",22),Ux(1297,"-"),ng(),wl(1298,"td",23)(1299,"p"),Ux(1300,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),ng()()()(),wl(1301,"h3",11),Ux(1302,"M\xE9todos"),ng(),wl(1303,"table",35)(1304,"tr",15)(1305,"th",36)(1306,"div",24)(1307,"h4")(1308,"span",25),Ux(1309," showAdditionalHelp "),ng()()()()(),wl(1310,"tr",23)(1311,"td",23)(1312,"p"),Ux(1313,"M\xE9todo que exibe "),wl(1314,"code"),Ux(1315,"p-helper"),ng(),Ux(1316," ou executa a a\xE7\xE3o definida em "),wl(1317,"code"),Ux(1318,"p-helper{eventOnClick}"),ng(),Ux(1319," ou em "),wl(1320,"code"),Ux(1321,"p-additionalHelp"),ng(),Ux(1322,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(1323,"code"),Ux(1324,"p-keydown"),ng(),Ux(1325,"."),ng(),wl(1326,"blockquote")(1327,"p"),Ux(1328,"Exibe ou oculta o conte\xFAdo do componente "),wl(1329,"code"),Ux(1330,"po-helper"),ng(),Ux(1331," quando o componente estiver com foco."),ng()(),wl(1332,"pre")(1333,"code"),Ux(1334,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ng()(),wl(1335,"pre")(1336,"code"),Ux(1337,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(1338,"br"),wl(1339,"table",35)(1340,"tr",15)(1341,"th",36)(1342,"div",24)(1343,"h4")(1344,"span",25),Ux(1345," focus "),ng()()()()(),wl(1346,"tr",23)(1347,"td",23)(1348,"p"),Ux(1349,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(1350,"p"),Ux(1351,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(1352,"pre")(1353,"code"),Ux(1354,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ng()()()()(),Ul(1355,"br"),wl(1356,"h3"),Ux(1357,"Interfaces"),ng(),wl(1358,"h4",37)(1359,"code",5),Ux(1360,"ErrorAsyncProperties"),ng()(),wl(1361,"div",2)(1362,"p"),Ux(1363,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),ng()(),wl(1364,"h4",11),Ux(1365,"Propriedades"),ng(),wl(1366,"table",12)(1367,"tr",13)(1368,"th",14),Ux(1369,"Nome"),ng(),wl(1370,"th",14),Ux(1371,"Tipo"),ng(),wl(1372,"th",14),Ux(1373,"Descri\xE7\xE3o"),ng()(),wl(1374,"tr",15)(1375,"td",16)(1376,"div",24)(1377,"span",25),Ux(1378," errorAsync"),Ul(1379,"br"),ng()()(),wl(1380,"td",20)(1381,"code",38),Ux(1382,"(value) => Observable<boolean>"),ng()(),wl(1383,"td",23)(1384,"p"),Ux(1385,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),wl(1386,"code"),Ux(1387,"change"),ng(),Ux(1388," ou "),wl(1389,"code"),Ux(1390,"change-model"),ng(),Ux(1391,", dependendo do valor da propriedade "),wl(1392,"code"),Ux(1393,"triggerMode"),ng(),Ux(1394,"."),ng()()(),wl(1395,"tr",15)(1396,"td",16)(1397,"div",24)(1398,"span",25),Ux(1399," triggerMode"),Ul(1400,"br"),ng()()(),wl(1401,"td",20)(1402,"code",39),Ux(1403,"'change' "),ng(),wl(1404,"code",40),Ux(1405," 'changeModel'"),ng()(),wl(1406,"td",23)(1407,"em")(1408,"strong"),Ux(1409,"(opcional)"),ng()(),wl(1410,"p"),Ux(1411,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),wl(1412,"code"),Ux(1413,"change"),ng(),Ux(1414," ou "),wl(1415,"code"),Ux(1416,"change-model"),ng(),Ux(1417,"."),ng()()()()());},dependencies:[fP],encapsulation:2})}return l})();var se=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Number",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-number-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-number-basic-view")(6,"sample-po-number-labs-view")(7,"sample-po-number-calculate-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ae,re,de,pe],encapsulation:2})}return l})();var Pe=[{path:"",component:se}],ce=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[vL.forChild(Pe),vL]})}return l})();var nt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[u5,ce]})}return l})();export{nt as DocPoNumberModule};