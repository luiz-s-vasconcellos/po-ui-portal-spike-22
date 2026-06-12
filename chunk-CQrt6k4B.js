import {f as fe,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,ct as Hhe,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,cc as Nde,aJ as nme,cd as sme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,bc as Sx,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var te=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-basic"]],standalone:false,decls:1,vars:0,consts:[["name","number","p-label","PO Number"]],template:function(r,i){r&1&&Hl(0,"po-number",0);},dependencies:[Hhe],encapsulation:2,changeDetection:1})}return l})();var ce=l=>({"docs-sample-code-tabs":l}),ie=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Number Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-number-basic/sample-po-number-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-number-basic/sample-po-number-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-number-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ce,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,te],encapsulation:2})}return l})();var oe=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:"an an-currency-circle-dollar",label:"an an-currency-circle-dollar"},{value:"an an-currency-btc",label:"an an-currency-btc"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event="",this.messageErrorPattern="",this.label=void 0,this.placeholder="",this.help="",this.icon="",this.size="medium",this.step=void 0,this.properties=[];}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-labs"]],standalone:false,decls:23,vars:43,consts:[["f","ngForm"],["name","PO number",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-max","p-maxlength","p-min","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-step","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","messageErrorPattern","p-clean","","p-label","Message error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Minlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Maxlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","step","p-clean","","p-label","Step",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=gx();Cl(0,"po-number",1),gw("ngModelChange",function(o){return Jy(p),Zx(i.number,o)||(i.number=o),e_(o)}),dt("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3)(4,"po-info",4),og(),Hl(5,"po-divider"),Cl(6,"form",null,0)(8,"po-input",5),gw("ngModelChange",function(o){return Jy(p),Zx(i.label,o)||(i.label=o),e_(o)}),og(),Z0(),Cl(9,"po-input",6),gw("ngModelChange",function(o){return Jy(p),Zx(i.help,o)||(i.help=o),e_(o)}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(o){return Jy(p),Zx(i.helperText,o)||(i.helperText=o),e_(o)}),og(),Z0(),Cl(11,"po-input",8),gw("ngModelChange",function(o){return Jy(p),Zx(i.placeholder,o)||(i.placeholder=o),e_(o)}),og(),Z0(),Cl(12,"po-input",9),gw("ngModelChange",function(o){return Jy(p),Zx(i.messageErrorPattern,o)||(i.messageErrorPattern=o),e_(o)}),og(),Z0(),Cl(13,"po-number",10),gw("ngModelChange",function(o){return Jy(p),Zx(i.min,o)||(i.min=o),e_(o)}),og(),Z0(),Cl(14,"po-number",11),gw("ngModelChange",function(o){return Jy(p),Zx(i.minlength,o)||(i.minlength=o),e_(o)}),og(),Z0(),Cl(15,"po-number",12),gw("ngModelChange",function(o){return Jy(p),Zx(i.max,o)||(i.max=o),e_(o)}),og(),Z0(),Cl(16,"po-number",13),gw("ngModelChange",function(o){return Jy(p),Zx(i.maxlength,o)||(i.maxlength=o),e_(o)}),og(),Z0(),Cl(17,"po-number",14),gw("ngModelChange",function(o){return Jy(p),Zx(i.step,o)||(i.step=o),e_(o)}),og(),Z0(),Cl(18,"po-select",15),gw("ngModelChange",function(o){return Jy(p),Zx(i.icon,o)||(i.icon=o),e_(o)}),og(),Z0(),Cl(19,"po-checkbox-group",16),gw("ngModelChange",function(o){return Jy(p),Zx(i.properties,o)||(i.properties=o),e_(o)}),og(),Z0(),Cl(20,"po-radio-group",17),gw("ngModelChange",function(o){return Jy(p),Zx(i.size,o)||(i.size=o),e_(o)}),og(),Z0(),Cl(21,"div",2)(22,"po-button",18),dt("p-click",function(){return i.restore()}),og()()();}r&2&&(pw("ngModel",i.number),ZE("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.messageErrorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-max",i.max)("p-maxlength",i.maxlength)("p-min",i.min)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-step",i.step)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),X0(),Lp(3),ZE("p-value",i.number),Lp(),ZE("p-value",i.event),Lp(4),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.help),X0(),Lp(),pw("ngModel",i.helperText),X0(),Lp(),pw("ngModel",i.placeholder),X0(),Lp(),pw("ngModel",i.messageErrorPattern),X0(),Lp(),pw("ngModel",i.min),X0(),Lp(),pw("ngModel",i.minlength),X0(),Lp(),pw("ngModel",i.max),X0(),Lp(),pw("ngModel",i.maxlength),X0(),Lp(),pw("ngModel",i.step),X0(),Lp(),pw("ngModel",i.icon),ZE("p-options",i.iconOptions),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Hhe,Nde,nme,sme],encapsulation:2,changeDetection:1})}return l})();var ge=l=>({"docs-sample-code-tabs":l}),ae=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Number Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-number-labs/sample-po-number-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-number
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-number-labs/sample-po-number-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-number-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ge,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,oe],encapsulation:2})}return l})();var le=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:"S\xE3o Paulo"},{value:17,label:"Alagoas"},{value:15,label:"Cear\xE1"}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100);}loadICMS(){this.icms=this.state;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-calculate"]],standalone:false,decls:16,vars:9,consts:[["f","ngForm"],[1,"po-row"],["name","price","p-label","Price","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantity","p-label","Quantity","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State","p-required","","p-sort","",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],["name","icms","p-label","ICMS %","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","liquid","p-label","Liquid","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","total","p-label","Total","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Calculate",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=gx();Cl(0,"h3"),qx(1,"Calculate Tax"),og(),Hl(2,"po-divider"),Cl(3,"form",null,0)(5,"div",1)(6,"po-number",2),gw("ngModelChange",function(o){return Jy(p),Zx(i.price,o)||(i.price=o),e_(o)}),og(),Z0(),Cl(7,"po-number",3),gw("ngModelChange",function(o){return Jy(p),Zx(i.quantity,o)||(i.quantity=o),e_(o)}),og(),Z0(),og(),Cl(8,"div")(9,"po-select",4),gw("ngModelChange",function(o){return Jy(p),Zx(i.state,o)||(i.state=o),e_(o)}),dt("p-change",function(){return i.loadICMS()}),og(),Z0(),Cl(10,"po-number",5),gw("ngModelChange",function(o){return Jy(p),Zx(i.icms,o)||(i.icms=o),e_(o)}),og(),Z0(),Cl(11,"po-number",6),gw("ngModelChange",function(o){return Jy(p),Zx(i.liquid,o)||(i.liquid=o),e_(o)}),og(),Z0(),Cl(12,"po-number",7),gw("ngModelChange",function(o){return Jy(p),Zx(i.total,o)||(i.total=o),e_(o)}),og(),Z0(),og(),Cl(13,"div",1)(14,"po-button",8),dt("p-click",function(){return i.calculate()}),og(),Cl(15,"po-button",9),dt("p-click",function(){Jy(p);let o=Sx(4);return e_(o.reset())}),og()()();}if(r&2){let p=Sx(4);Lp(6),pw("ngModel",i.price),X0(),Lp(),pw("ngModel",i.quantity),X0(),Lp(2),pw("ngModel",i.state),ZE("p-options",i.statesOptions),X0(),Lp(),pw("ngModel",i.icms),X0(),Lp(),pw("ngModel",i.liquid),X0(),Lp(),pw("ngModel",i.total),X0(),Lp(2),ZE("p-disabled",p.invalid),Lp(),ZE("p-disabled",p.invalid);}},dependencies:[lY,sY,aY,gk,fk,Qt,_v,Hhe,nme],encapsulation:2,changeDetection:1})}return l})();var he=l=>({"docs-sample-code-tabs":l}),re=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-calculate-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Number - Calculate"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-number-calculate/sample-po-number-calculate.component.html"),og(),Cl(13,"pre",7),qx(14,`<h3>Calculate Tax</h3>

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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-number-calculate/sample-po-number-calculate.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-number-calculate"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,he,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,le],encapsulation:2})}return l})();var me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-number-doc"]],standalone:false,decls:1418,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoNumberComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Cl(24,"p"),qx(25,"Importante:"),og(),Cl(26,"ul")(27,"li"),qx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Cl(29,"h4"),qx(30,"Tokens customiz\xE1veis"),og(),Cl(31,"p"),qx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Hl(33,"br"),qx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Cl(35,"code"),qx(36,".po-input"),og()(),Cl(37,"blockquote")(38,"p"),qx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Cl(40,"a",6),qx(41,"Grid System"),og(),qx(42,"."),og()(),Cl(43,"blockquote")(44,"p"),qx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(46,"a",7),qx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(48,"."),og()(),Cl(49,"table")(50,"thead")(51,"tr")(52,"th"),qx(53,"Propriedade"),og(),Cl(54,"th"),qx(55,"Descri\xE7\xE3o"),og(),Cl(56,"th"),qx(57,"Valor Padr\xE3o"),og()()(),Cl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),qx(62,"Default Values"),og()(),Hl(63,"td")(64,"td"),og(),Cl(65,"tr")(66,"td")(67,"code"),qx(68,"--font-family"),og()(),Cl(69,"td"),qx(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(71,"td")(72,"code"),qx(73,"var(--font-family-theme)"),og()()(),Cl(74,"tr")(75,"td")(76,"code"),qx(77,"--font-size"),og()(),Cl(78,"td"),qx(79,"Tamanho da fonte"),og(),Cl(80,"td")(81,"code"),qx(82,"var(--font-size-default)"),og()()(),Cl(83,"tr")(84,"td")(85,"code"),qx(86,"--text-color-placeholder"),og()(),Cl(87,"td"),qx(88,"Cor do texto placeholder"),og(),Cl(89,"td")(90,"code"),qx(91,"var(--color-neutral-light-30)"),og()()(),Cl(92,"tr")(93,"td")(94,"code"),qx(95,"--color"),og()(),Cl(96,"td"),qx(97,"Cor pincipal do input"),og(),Cl(98,"td")(99,"code"),qx(100,"var(--color-neutral-dark-70)"),og()()(),Cl(101,"tr")(102,"td")(103,"code"),qx(104,"--background"),og()(),Cl(105,"td"),qx(106,"Cor de background"),og(),Cl(107,"td")(108,"code"),qx(109,"var(--color-neutral-light-05)"),og()()(),Cl(110,"tr")(111,"td")(112,"code"),qx(113,"--padding"),og()(),Cl(114,"td"),qx(115,"Preenchimento"),og(),Cl(116,"td")(117,"code"),qx(118,"0 0.5rem"),og()()(),Cl(119,"tr")(120,"td")(121,"code"),qx(122,"--text-color"),og()(),Cl(123,"td"),qx(124,"Cor do texto"),og(),Cl(125,"td")(126,"code"),qx(127,"var(--color-neutral-dark-90)"),og()()(),Cl(128,"tr")(129,"td")(130,"code"),qx(131,"--field-container-title-justify"),og()(),Cl(132,"td"),qx(133,"Alinhamento horizontal do t\xEDtulo ("),Cl(134,"code"),qx(135,"justify-content"),og(),qx(136,")"),og(),Cl(137,"td")(138,"code"),qx(139,"space-between"),og()()(),Cl(140,"tr")(141,"td")(142,"code"),qx(143,"--field-container-title-flex"),og()(),Cl(144,"td"),qx(145,"Flex do t\xEDtulo ("),Cl(146,"code"),qx(147,"flex"),og(),qx(148,")"),og(),Cl(149,"td")(150,"code"),qx(151,"1 auto"),og()()(),Cl(152,"tr")(153,"td")(154,"strong"),qx(155,"Hover"),og()(),Hl(156,"td")(157,"td"),og(),Cl(158,"tr")(159,"td")(160,"code"),qx(161,"--color-hover"),og()(),Cl(162,"td"),qx(163,"Cor principal no estado hover"),og(),Cl(164,"td")(165,"code"),qx(166,"var(--color-brand-01-dark)"),og()()(),Cl(167,"tr")(168,"td")(169,"code"),qx(170,"--background-hover"),og()(),Cl(171,"td"),qx(172,"Cor de background no estado hover"),og(),Cl(173,"td")(174,"code"),qx(175,"var(--color-brand-01-lightest)"),og()()(),Cl(176,"tr")(177,"td")(178,"strong"),qx(179,"Focused"),og()(),Hl(180,"td")(181,"td"),og(),Cl(182,"tr")(183,"td")(184,"code"),qx(185,"--color-focused"),og()(),Cl(186,"td"),qx(187,"Cor principal no estado de focus"),og(),Cl(188,"td")(189,"code"),qx(190,"var(--color-action-default)"),og()()(),Cl(191,"tr")(192,"td")(193,"code"),qx(194,"--outline-color-focused"),og()(),Cl(195,"td"),qx(196,"Cor do outline do estado de focus"),og(),Cl(197,"td")(198,"code"),qx(199,"var(--color-action-focus)"),og()()(),Cl(200,"tr")(201,"td")(202,"strong"),qx(203,"Disabled"),og()(),Hl(204,"td")(205,"td"),og(),Cl(206,"tr")(207,"td")(208,"code"),qx(209,"--color-disabled"),og()(),Cl(210,"td"),qx(211,"Cor principal no estado disabled"),og(),Cl(212,"td")(213,"code"),qx(214,"var(--color-neutral-light-30)"),og()()(),Cl(215,"tr")(216,"td")(217,"code"),qx(218,"--background-disabled"),og()(),Cl(219,"td"),qx(220,"Cor de background no estado disabled"),og(),Cl(221,"td")(222,"code"),qx(223,"var(--color-neutral-light-20)"),og()()(),Cl(224,"tr")(225,"td")(226,"code"),qx(227,"--text-color-disabled"),og()(),Cl(228,"td"),qx(229,"Cor do texto no estado disabled"),og(),Cl(230,"td")(231,"code"),qx(232,"var(--color-neutral-dark-70)"),og()()()()(),Cl(233,"p"),Hl(234,"br"),qx(235," O "),Cl(236,"code"),qx(237,"po-number"),og(),qx(238,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),og()(),Cl(239,"div",8)(240,"h4",9),qx(241,"Seletor"),og(),Cl(242,"pre",10),qx(243,`<po-number
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
`),og()(),Cl(244,"h4",11),qx(245,"Propriedades"),og(),Cl(246,"table",12)(247,"tr",13)(248,"th",14),qx(249,"Nome"),og(),Cl(250,"th",14),qx(251,"Tipo"),og(),Cl(252,"th",14),qx(253,"Padr\xE3o"),og(),Cl(254,"th",14),qx(255,"Descri\xE7\xE3o"),og()(),Cl(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),qx(260," (p-additional-help)"),Hl(261,"br"),og()(),Cl(262,"div",19),qx(263,"Deprecated"),og()(),Cl(264,"td",20)(265,"code",21),qx(266,"EventEmitter"),og()(),Cl(267,"td",22),qx(268,"-"),og(),Cl(269,"td",23)(270,"em")(271,"strong"),qx(272,"(opcional)"),og()(),Cl(273,"p"),qx(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(275,"blockquote")(276,"p"),qx(277,"Essa propriedade est\xE1 "),Cl(278,"strong"),qx(279,"depreciada"),og(),qx(280," e ser\xE1 removida na vers\xE3o "),Cl(281,"code"),qx(282,"23.x.x"),og(),qx(283,". Recomendamos utilizar a propriedade "),Cl(284,"code"),qx(285,"p-helper"),og(),qx(286," que oferece mais recursos e flexibilidade."),og()()()(),Cl(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),qx(291," p-additional-help-tooltip"),Hl(292,"br"),og()(),Cl(293,"div",19),qx(294,"Deprecated"),og()(),Cl(295,"td",20)(296,"code",26),qx(297,"string"),og()(),Cl(298,"td",22),qx(299,"-"),og(),Cl(300,"td",23)(301,"em")(302,"strong"),qx(303,"(opcional)"),og()(),Cl(304,"p"),qx(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(306,"code"),qx(307,"po-helper"),og(),qx(308,`.
`),Cl(309,"strong"),qx(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(311,"blockquote")(312,"p"),qx(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(314,"blockquote")(315,"p"),qx(316,"Essa propriedade est\xE1 "),Cl(317,"strong"),qx(318,"depreciada"),og(),qx(319," e ser\xE1 removida na vers\xE3o "),Cl(320,"code"),qx(321,"23.x.x"),og(),qx(322,". Recomendamos utilizar a propriedade "),Cl(323,"code"),qx(324,"p-helper"),og(),qx(325," que oferece mais recursos e flexibilidade."),og()()()(),Cl(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),qx(330," p-append-in-body"),Hl(331,"br"),og()()(),Cl(332,"td",20)(333,"code",27),qx(334,"boolean"),og()(),Cl(335,"td",22)(336,"p")(337,"code"),qx(338,"false"),og()()(),Cl(339,"td",23)(340,"em")(341,"strong"),qx(342,"(opcional)"),og()(),Cl(343,"p"),qx(344,"Define que o popover ("),Cl(345,"code"),qx(346,"p-helper"),og(),qx(347," e/ou "),Cl(348,"code"),qx(349,"p-error-limit"),og(),qx(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Cl(351,"blockquote")(352,"p"),qx(353,"Quando utilizado com "),Cl(354,"code"),qx(355,"p-helper"),og(),qx(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),qx(361," p-auto-focus"),Hl(362,"br"),og()()(),Cl(363,"td",20)(364,"code",27),qx(365,"boolean"),og()(),Cl(366,"td",22)(367,"p")(368,"code"),qx(369,"false"),og()()(),Cl(370,"td",23)(371,"em")(372,"strong"),qx(373,"(opcional)"),og()(),Cl(374,"p"),qx(375,"Aplica foco no elemento ao ser iniciado."),og(),Cl(376,"blockquote")(377,"p"),qx(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Cl(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),qx(383," (p-blur)"),Hl(384,"br"),og()()(),Cl(385,"td",20)(386,"code",21),qx(387,"EventEmitter"),og()(),Cl(388,"td",22),qx(389,"-"),og(),Cl(390,"td",23)(391,"em")(392,"strong"),qx(393,"(opcional)"),og()(),Cl(394,"p"),qx(395,"Evento disparado ao sair do campo."),og()()(),Cl(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),qx(400," (p-change)"),Hl(401,"br"),og()()(),Cl(402,"td",20)(403,"code",21),qx(404,"EventEmitter"),og()(),Cl(405,"td",22),qx(406,"-"),og(),Cl(407,"td",23)(408,"em")(409,"strong"),qx(410,"(opcional)"),og()(),Cl(411,"p"),qx(412,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Cl(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),qx(417," (p-change-model)"),Hl(418,"br"),og()()(),Cl(419,"td",20)(420,"code",21),qx(421,"EventEmitter"),og()(),Cl(422,"td",22),qx(423,"-"),og(),Cl(424,"td",23)(425,"em")(426,"strong"),qx(427,"(opcional)"),og()(),Cl(428,"p"),qx(429,"Evento disparado ao alterar valor do model."),og()()(),Cl(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),qx(434,"p-clean"),Hl(435,"br"),og()()(),Cl(436,"td",20)(437,"code",27),qx(438,"boolean"),og()(),Cl(439,"td",22),qx(440,"-"),og(),Cl(441,"td",23)(442,"em")(443,"strong"),qx(444,"(opcional)"),og()(),Cl(445,"p"),qx(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Cl(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),qx(451," p-compact-label"),Hl(452,"br"),og()()(),Cl(453,"td",20)(454,"code",27),qx(455,"boolean"),og()(),Cl(456,"td",22)(457,"p")(458,"code"),qx(459,"false"),og()()(),Cl(460,"td",23)(461,"em")(462,"strong"),qx(463,"(opcional)"),og()(),Cl(464,"p"),qx(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(466,"p"),qx(467,"Quando habilitado ("),Cl(468,"code"),qx(469,"true"),og(),qx(470,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(471,"ul")(472,"li")(473,"code"),qx(474,"po-label"),og()(),Cl(475,"li")(476,"code"),qx(477,"p-requirement (showRequired)"),og()(),Cl(478,"li")(479,"code"),qx(480,"po-helper"),og()()(),Cl(481,"p"),qx(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(483,"p"),qx(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(485,"ul")(486,"li")(487,"code"),qx(488,"--field-container-title-justify"),og()(),Cl(489,"li")(490,"code"),qx(491,"--field-container-title-flex"),og()()(),Cl(492,"p"),qx(493,"Exemplo:"),og(),Cl(494,"pre")(495,"code"),qx(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(497,"p"),qx(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),qx(503,"p-disabled"),Hl(504,"br"),og()()(),Cl(505,"td",20)(506,"code",27),qx(507,"boolean"),og()(),Cl(508,"td",22)(509,"p")(510,"code"),qx(511,"false"),og()()(),Cl(512,"td",23)(513,"em")(514,"strong"),qx(515,"(opcional)"),og()(),Cl(516,"p"),qx(517,"Se verdadeiro, desabilita o campo."),og()()(),Cl(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),qx(522," p-emit-all-changes"),Hl(523,"br"),og()()(),Cl(524,"td",20)(525,"code",27),qx(526,"boolean"),og()(),Cl(527,"td",22)(528,"p")(529,"code"),qx(530,"false"),og()()(),Cl(531,"td",23)(532,"em")(533,"strong"),qx(534,"(opcional)"),og()(),Cl(535,"p"),qx(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),og()()(),Cl(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),qx(541," (p-enter)"),Hl(542,"br"),og()()(),Cl(543,"td",20)(544,"code",21),qx(545,"EventEmitter"),og()(),Cl(546,"td",22),qx(547,"-"),og(),Cl(548,"td",23)(549,"em")(550,"strong"),qx(551,"(opcional)"),og()(),Cl(552,"p"),qx(553,"Evento disparado ao entrar do campo."),og()()(),Cl(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),qx(558," p-error-async-properties"),Hl(559,"br"),og()()(),Cl(560,"td",20)(561,"code",28),qx(562,"ErrorAsyncProperties"),og()(),Cl(563,"td",22),qx(564,"-"),og(),Cl(565,"td",23)(566,"em")(567,"strong"),qx(568,"(opcional)"),og()(),Cl(569,"p"),qx(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Cl(571,"code"),qx(572,"Reactive Forms"),og(),qx(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Cl(574,"code"),qx(575,"asyncValidators"),og(),qx(576,"."),og()()(),Cl(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),qx(581," p-error-limit"),Hl(582,"br"),og()()(),Cl(583,"td",20)(584,"code",27),qx(585,"boolean"),og()(),Cl(586,"td",22)(587,"p")(588,"code"),qx(589,"false"),og()()(),Cl(590,"td",23)(591,"em")(592,"strong"),qx(593,"(opcional)"),og()(),Cl(594,"p"),qx(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(596,"blockquote")(597,"p"),qx(598,"Caso essa propriedade seja definida como "),Cl(599,"code"),qx(600,"true"),og(),qx(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Cl(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),qx(606," p-error-pattern"),Hl(607,"br"),og()()(),Cl(608,"td",20)(609,"code",26),qx(610,"string"),og()(),Cl(611,"td",22),qx(612,"-"),og(),Cl(613,"td",23)(614,"em")(615,"strong"),qx(616,"(opcional)"),og()(),Cl(617,"p"),qx(618,"Mensagem que ser\xE1 apresentada quando o "),Cl(619,"code"),qx(620,"pattern"),og(),qx(621," ou a m\xE1scara n\xE3o for satisfeita."),og(),Cl(622,"blockquote")(623,"p"),qx(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Cl(625,"code"),qx(626,"p-required-field-error-message"),og(),qx(627," em conjunto."),og()()()(),Cl(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),qx(632," p-help"),Hl(633,"br"),og()()(),Cl(634,"td",20)(635,"code",26),qx(636,"string"),og()(),Cl(637,"td",22),qx(638,"-"),og(),Cl(639,"td",23)(640,"em")(641,"strong"),qx(642,"(opcional)"),og()(),Cl(643,"p"),qx(644,"Texto de apoio do campo."),og()()(),Cl(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),qx(649," p-icon"),Hl(650,"br"),og()()(),Cl(651,"td",20)(652,"code",26),qx(653,"string "),og(),Cl(654,"code",29),qx(655," TemplateRef<void>"),og()(),Cl(656,"td",22),qx(657,"-"),og(),Cl(658,"td",23)(659,"em")(660,"strong"),qx(661,"(opcional)"),og()(),Cl(662,"p"),qx(663,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Cl(664,"p"),qx(665,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(666,"a",30),qx(667,"Biblioteca de \xEDcones"),og(),qx(668,". conforme exemplo abaixo:"),og(),Cl(669,"pre")(670,"code"),qx(671,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Cl(672,"p"),qx(673,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(674,"em"),qx(675,"Font Awesome"),og(),qx(676,", da seguinte forma:"),og(),Cl(677,"pre")(678,"code"),qx(679,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Cl(680,"p"),qx(681,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(682,"code"),qx(683,"TemplateRef"),og(),qx(684,", conforme exemplo abaixo:"),og(),Cl(685,"pre")(686,"code"),qx(687,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Cl(688,"blockquote")(689,"p"),qx(690,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Cl(691,"code"),qx(692,"font-size: inherit"),og(),qx(693," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Cl(694,"tr",15)(695,"td",16)(696,"div",17)(697,"span",18),qx(698," (p-keydown)"),Hl(699,"br"),og()()(),Cl(700,"td",20)(701,"code",21),qx(702,"EventEmitter"),og()(),Cl(703,"td",22),qx(704,"-"),og(),Cl(705,"td",23)(706,"em")(707,"strong"),qx(708,"(opcional)"),og()(),Cl(709,"p"),qx(710,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(711,"code"),qx(712,"KeyboardEvent"),og(),qx(713," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),qx(718," p-label"),Hl(719,"br"),og()()(),Cl(720,"td",20)(721,"code",26),qx(722,"string"),og()(),Cl(723,"td",22),qx(724,"-"),og(),Cl(725,"td",23)(726,"em")(727,"strong"),qx(728,"(opcional)"),og()(),Cl(729,"p"),qx(730,"R\xF3tulo do campo."),og()()(),Cl(731,"tr",15)(732,"td",16)(733,"div",24)(734,"span",25),qx(735," p-label-text-wrap"),Hl(736,"br"),og()()(),Cl(737,"td",20)(738,"code",27),qx(739,"boolean"),og()(),Cl(740,"td",22)(741,"p")(742,"code"),qx(743,"false"),og()()(),Cl(744,"td",23)(745,"em")(746,"strong"),qx(747,"(opcional)"),og()(),Cl(748,"p"),qx(749,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(750,"code"),qx(751,"p-label"),og(),qx(752,". Quando "),Cl(753,"code"),qx(754,"p-label-text-wrap"),og(),qx(755,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),qx(760," p-loading"),Hl(761,"br"),og()()(),Cl(762,"td",20)(763,"code",27),qx(764,"boolean"),og()(),Cl(765,"td",22)(766,"p")(767,"code"),qx(768,"false"),og()()(),Cl(769,"td",23)(770,"em")(771,"strong"),qx(772,"(opcional)"),og()(),Cl(773,"p"),qx(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Cl(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),qx(779,"p-mask"),Hl(780,"br"),og()()(),Cl(781,"td",20)(782,"code",26),qx(783,"string"),og()(),Cl(784,"td",22),qx(785,"-"),og(),Cl(786,"td",23)(787,"em")(788,"strong"),qx(789,"(opcional)"),og()(),Cl(790,"p"),qx(791,"Indica uma m\xE1scara para o campo, por\xE9m \xE9 incompat\xEDvel com o "),Cl(792,"code"),qx(793,"po-number"),og(),qx(794,"."),og(),Cl(795,"blockquote")(796,"p")(797,"strong"),qx(798,"Componentes compat\xEDveis:"),og(),Cl(799,"code"),qx(800,"po-input"),og(),qx(801,","),Cl(802,"code"),qx(803,"po-decimal"),og(),qx(804,"."),og()()()(),Cl(805,"tr",15)(806,"td",16)(807,"div",24)(808,"span",25),qx(809,"p-mask-format-model"),Hl(810,"br"),og()()(),Cl(811,"td",20)(812,"code",27),qx(813,"boolean"),og()(),Cl(814,"td",22)(815,"p")(816,"code"),qx(817,"false"),og()()(),Cl(818,"td",23)(819,"em")(820,"strong"),qx(821,"(opcional)"),og()(),Cl(822,"p"),qx(823,"Indica se o "),Cl(824,"code"),qx(825,"model"),og(),qx(826," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Cl(827,"tr",15)(828,"td",16)(829,"div",24)(830,"span",25),qx(831," p-mask-no-length-validation"),Hl(832,"br"),og()()(),Cl(833,"td",20)(834,"code",27),qx(835,"boolean"),og()(),Cl(836,"td",22)(837,"p")(838,"code"),qx(839,"false"),og()()(),Cl(840,"td",23)(841,"p"),qx(842,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Cl(843,"code"),qx(844,"minLength"),og(),qx(845,") e m\xE1ximo ("),Cl(846,"code"),qx(847,"maxLength"),og(),qx(848,") quando h\xE1 uma m\xE1scara ("),Cl(849,"code"),qx(850,"p-mask"),og(),qx(851,") definida."),og(),Cl(852,"ul")(853,"li"),qx(854,"Quando "),Cl(855,"code"),qx(856,"true"),og(),qx(857,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Cl(858,"li"),qx(859,"Quando "),Cl(860,"code"),qx(861,"false"),og(),qx(862,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Cl(863,"blockquote")(864,"p"),qx(865,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Cl(866,"code"),qx(867,"p-mask-format-model"),og(),qx(868,"."),og()(),Cl(869,"p"),qx(870,"Exemplo:"),og(),Cl(871,"pre")(872,"code"),qx(873,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Cl(874,"ul")(875,"li"),qx(876,"Entrada: "),Cl(877,"code"),qx(878,"123-456"),og(),qx(879," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Cl(880,"code"),qx(881,"-"),og(),qx(882,"."),og()()()(),Cl(883,"tr",15)(884,"td",16)(885,"div",24)(886,"span",25),qx(887,"p-max"),Hl(888,"br"),og()()(),Cl(889,"td",20)(890,"code",31),qx(891,"number"),og()(),Cl(892,"td",22),qx(893,"-"),og(),Cl(894,"td",23)(895,"em")(896,"strong"),qx(897,"(opcional)"),og()(),Cl(898,"p"),qx(899,"Valor m\xE1ximo."),og(),Cl(900,"blockquote")(901,"p"),qx(902,"Quando o valor m\xE1ximo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),Cl(903,"code"),qx(904,"p-step"),og(),qx(905," tamb\xE9m passando a ela um valor decimal."),og()()()(),Cl(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),qx(910," p-maxlength"),Hl(911,"br"),og()()(),Cl(912,"td",20)(913,"code",31),qx(914,"number"),og()(),Cl(915,"td",22),qx(916,"-"),og(),Cl(917,"td",23)(918,"em")(919,"strong"),qx(920,"(opcional)"),og()(),Cl(921,"p"),qx(922,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Cl(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),qx(927,"p-min"),Hl(928,"br"),og()()(),Cl(929,"td",20)(930,"code",31),qx(931,"number"),og()(),Cl(932,"td",22),qx(933,"-"),og(),Cl(934,"td",23)(935,"em")(936,"strong"),qx(937,"(opcional)"),og()(),Cl(938,"p"),qx(939,"Valor m\xEDnimo."),og(),Cl(940,"blockquote")(941,"p"),qx(942,"Quando o valor m\xEDnimo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),Cl(943,"code"),qx(944,"p-step"),og(),qx(945," tamb\xE9m passando a ela um valor decimal."),og()()()(),Cl(946,"tr",15)(947,"td",16)(948,"div",24)(949,"span",25),qx(950," p-minlength"),Hl(951,"br"),og()()(),Cl(952,"td",20)(953,"code",31),qx(954,"number"),og()(),Cl(955,"td",22),qx(956,"-"),og(),Cl(957,"td",23)(958,"em")(959,"strong"),qx(960,"(opcional)"),og()(),Cl(961,"p"),qx(962,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Cl(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),qx(967," name"),Hl(968,"br"),og()()(),Cl(969,"td",20)(970,"code",26),qx(971,"string"),og()(),Cl(972,"td",22),qx(973,"-"),og(),Cl(974,"td",23)(975,"p"),qx(976,"Nome e identificador do campo."),og()()(),Cl(977,"tr",15)(978,"td",16)(979,"div",24)(980,"span",25),qx(981," p-no-autocomplete"),Hl(982,"br"),og()()(),Cl(983,"td",20)(984,"code",27),qx(985,"boolean"),og()(),Cl(986,"td",22)(987,"p")(988,"code"),qx(989,"false"),og()()(),Cl(990,"td",23)(991,"em")(992,"strong"),qx(993,"(opcional)"),og()(),Cl(994,"p"),qx(995,"Define a propriedade nativa "),Cl(996,"code"),qx(997,"autocomplete"),og(),qx(998," do campo como "),Cl(999,"code"),qx(1e3,"off"),og(),qx(1001,"."),og(),Cl(1002,"blockquote")(1003,"p"),qx(1004,"No componente "),Cl(1005,"code"),qx(1006,"po-password"),og(),qx(1007," ser\xE1 definido como "),Cl(1008,"code"),qx(1009,"new-password"),og(),qx(1010,"."),og()(),Cl(1011,"p"),qx(1012,"Nos componentes "),Cl(1013,"code"),qx(1014,"po-password"),og(),qx(1015," e "),Cl(1016,"code"),qx(1017,"po-login"),og(),qx(1018," o valor padr\xE3o ser\xE1 "),Cl(1019,"code"),qx(1020,"true"),og(),qx(1021,"."),og()()(),Cl(1022,"tr",15)(1023,"td",16)(1024,"div",24)(1025,"span",25),qx(1026," p-optional"),Hl(1027,"br"),og()()(),Cl(1028,"td",20)(1029,"code",27),qx(1030,"boolean"),og()(),Cl(1031,"td",22)(1032,"p")(1033,"code"),qx(1034,"false"),og()()(),Cl(1035,"td",23)(1036,"em")(1037,"strong"),qx(1038,"(opcional)"),og()(),Cl(1039,"p"),qx(1040,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(1041,"blockquote")(1042,"p"),qx(1043,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1044,"ul")(1045,"li"),qx(1046,"O campo conter "),Cl(1047,"code"),qx(1048,"p-required"),og(),qx(1049,";"),og(),Cl(1050,"li"),qx(1051,"N\xE3o possuir "),Cl(1052,"code"),qx(1053,"p-help"),og(),qx(1054," e/ou "),Cl(1055,"code"),qx(1056,"p-label"),og(),qx(1057,"."),og()()()(),Cl(1058,"tr",15)(1059,"td",16)(1060,"div",24)(1061,"span",25),qx(1062,"p-pattern"),Hl(1063,"br"),og()()(),Cl(1064,"td",20)(1065,"code",26),qx(1066,"string"),og()(),Cl(1067,"td",22),qx(1068,"-"),og(),Cl(1069,"td",23)(1070,"em")(1071,"strong"),qx(1072,"(opcional)"),og()(),Cl(1073,"p"),qx(1074,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Cl(1075,"code"),qx(1076,"(p-mask)"),og(),qx(1077,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Cl(1078,"tr",15)(1079,"td",16)(1080,"div",24)(1081,"span",25),qx(1082," p-placeholder"),Hl(1083,"br"),og()()(),Cl(1084,"td",20)(1085,"code",26),qx(1086,"string"),og()(),Cl(1087,"td",22)(1088,"p"),qx(1089,"''"),og()(),Cl(1090,"td",23)(1091,"em")(1092,"strong"),qx(1093,"(opcional)"),og()(),Cl(1094,"p"),qx(1095,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Cl(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),qx(1100," p-helper"),Hl(1101,"br"),og()()(),Cl(1102,"td",20)(1103,"code",32),qx(1104,"PoHelperOptions "),og(),Cl(1105,"code",26),qx(1106," string"),og()(),Cl(1107,"td",22),qx(1108,"-"),og(),Cl(1109,"td",23)(1110,"em")(1111,"strong"),qx(1112,"(opcional)"),og()(),Cl(1113,"p"),qx(1114,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(1115,"code"),qx(1116,"p-label"),og(),qx(1117," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(1118,"code"),qx(1119,"p-label"),og(),qx(1120,"."),og(),Cl(1121,"blockquote")(1122,"p"),qx(1123,"Para mais informa\xE7\xF5es acesse: "),Cl(1124,"a",33),qx(1125,"https://po-ui.io/documentation/po-helper"),og(),qx(1126,"."),og()(),Cl(1127,"blockquote")(1128,"p"),qx(1129,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(1130,"code"),qx(1131,"p-additional-help-tooltip"),og(),qx(1132," e "),Cl(1133,"code"),qx(1134,"p-additional-help"),og(),qx(1135,") ser\xE1 ignorado."),og()()()(),Cl(1136,"tr",15)(1137,"td",16)(1138,"div",24)(1139,"span",25),qx(1140,"p-readonly"),Hl(1141,"br"),og()()(),Cl(1142,"td",20)(1143,"code",27),qx(1144,"boolean"),og()(),Cl(1145,"td",22),qx(1146,"-"),og(),Cl(1147,"td",23)(1148,"em")(1149,"strong"),qx(1150,"(opcional)"),og()(),Cl(1151,"p"),qx(1152,"Indica que o campo ser\xE1 somente leitura."),og()()(),Cl(1153,"tr",15)(1154,"td",16)(1155,"div",24)(1156,"span",25),qx(1157,"p-required"),Hl(1158,"br"),og()()(),Cl(1159,"td",20)(1160,"code",27),qx(1161,"boolean"),og()(),Cl(1162,"td",22)(1163,"p")(1164,"code"),qx(1165,"false"),og()()(),Cl(1166,"td",23)(1167,"em")(1168,"strong"),qx(1169,"(opcional)"),og()(),Cl(1170,"p"),qx(1171,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Cl(1172,"blockquote")(1173,"p"),qx(1174,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Cl(1175,"code"),qx(1176,"(p-disabled)"),og(),qx(1177,"."),og()()()(),Cl(1178,"tr",15)(1179,"td",16)(1180,"div",24)(1181,"span",25),qx(1182," p-required-field-error-message"),Hl(1183,"br"),og()()(),Cl(1184,"td",20)(1185,"code",27),qx(1186,"boolean"),og()(),Cl(1187,"td",22)(1188,"p")(1189,"code"),qx(1190,"false"),og()()(),Cl(1191,"td",23)(1192,"em")(1193,"strong"),qx(1194,"(opcional)"),og()(),Cl(1195,"p"),qx(1196,"Exibe a mensagem setada na propriedade "),Cl(1197,"code"),qx(1198,"p-error-pattern"),og(),qx(1199," se o campo estiver vazio e for requerido."),og(),Cl(1200,"blockquote")(1201,"p"),qx(1202,"Necess\xE1rio que a propriedade "),Cl(1203,"code"),qx(1204,"p-required"),og(),qx(1205," esteja habilitada."),og()()()(),Cl(1206,"tr",15)(1207,"td",16)(1208,"div",24)(1209,"span",25),qx(1210," p-show-required"),Hl(1211,"br"),og()()(),Cl(1212,"td",20)(1213,"code",27),qx(1214,"boolean"),og()(),Cl(1215,"td",22),qx(1216,"-"),og(),Cl(1217,"td",23)(1218,"p"),qx(1219,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(1220,"blockquote")(1221,"p"),qx(1222,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1223,"ul")(1224,"li"),qx(1225,"N\xE3o possuir "),Cl(1226,"code"),qx(1227,"p-help"),og(),qx(1228," e/ou "),Cl(1229,"code"),qx(1230,"p-label"),og(),qx(1231,"."),og()()()(),Cl(1232,"tr",15)(1233,"td",16)(1234,"div",24)(1235,"span",25),qx(1236," p-size"),Hl(1237,"br"),og()()(),Cl(1238,"td",20)(1239,"code",26),qx(1240,"string"),og()(),Cl(1241,"td",22)(1242,"p")(1243,"code"),qx(1244,"medium"),og()()(),Cl(1245,"td",23)(1246,"em")(1247,"strong"),qx(1248,"(opcional)"),og()(),Cl(1249,"p"),qx(1250,"Define o tamanho do componente:"),og(),Cl(1251,"ul")(1252,"li")(1253,"code"),qx(1254,"small"),og(),qx(1255,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(1256,"li")(1257,"code"),qx(1258,"medium"),og(),qx(1259,": altura do input como 44px."),og()(),Cl(1260,"blockquote")(1261,"p"),qx(1262,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(1263,"code"),qx(1264,"medium"),og(),qx(1265,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(1266,"a",34),qx(1267,"po-theme"),og(),qx(1268,"."),og()()()(),Cl(1269,"tr",15)(1270,"td",16)(1271,"div",24)(1272,"span",25),qx(1273," p-step"),Hl(1274,"br"),og()()(),Cl(1275,"td",20)(1276,"code",26),qx(1277,"string"),og()(),Cl(1278,"td",22)(1279,"p"),qx(1280,"1"),og()(),Cl(1281,"td",23)(1282,"em")(1283,"strong"),qx(1284,"(opcional)"),og()(),Cl(1285,"p"),qx(1286,"Intervalo."),og()()(),Cl(1287,"tr",15)(1288,"td",16)(1289,"div",24)(1290,"span",25),qx(1291," p-upper-case"),Hl(1292,"br"),og()()(),Cl(1293,"td",20)(1294,"code",27),qx(1295,"boolean"),og()(),Cl(1296,"td",22),qx(1297,"-"),og(),Cl(1298,"td",23)(1299,"p"),qx(1300,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Cl(1301,"h3",11),qx(1302,"M\xE9todos"),og(),Cl(1303,"table",35)(1304,"tr",15)(1305,"th",36)(1306,"div",24)(1307,"h4")(1308,"span",25),qx(1309," showAdditionalHelp "),og()()()()(),Cl(1310,"tr",23)(1311,"td",23)(1312,"p"),qx(1313,"M\xE9todo que exibe "),Cl(1314,"code"),qx(1315,"p-helper"),og(),qx(1316," ou executa a a\xE7\xE3o definida em "),Cl(1317,"code"),qx(1318,"p-helper{eventOnClick}"),og(),qx(1319," ou em "),Cl(1320,"code"),qx(1321,"p-additionalHelp"),og(),qx(1322,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(1323,"code"),qx(1324,"p-keydown"),og(),qx(1325,"."),og(),Cl(1326,"blockquote")(1327,"p"),qx(1328,"Exibe ou oculta o conte\xFAdo do componente "),Cl(1329,"code"),qx(1330,"po-helper"),og(),qx(1331," quando o componente estiver com foco."),og()(),Cl(1332,"pre")(1333,"code"),qx(1334,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Cl(1335,"pre")(1336,"code"),qx(1337,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(1338,"br"),Cl(1339,"table",35)(1340,"tr",15)(1341,"th",36)(1342,"div",24)(1343,"h4")(1344,"span",25),qx(1345," focus "),og()()()()(),Cl(1346,"tr",23)(1347,"td",23)(1348,"p"),qx(1349,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(1350,"p"),qx(1351,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(1352,"pre")(1353,"code"),qx(1354,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),Hl(1355,"br"),Cl(1356,"h3"),qx(1357,"Interfaces"),og(),Cl(1358,"h4",37)(1359,"code",5),qx(1360,"ErrorAsyncProperties"),og()(),Cl(1361,"div",2)(1362,"p"),qx(1363,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Cl(1364,"h4",11),qx(1365,"Propriedades"),og(),Cl(1366,"table",12)(1367,"tr",13)(1368,"th",14),qx(1369,"Nome"),og(),Cl(1370,"th",14),qx(1371,"Tipo"),og(),Cl(1372,"th",14),qx(1373,"Descri\xE7\xE3o"),og()(),Cl(1374,"tr",15)(1375,"td",16)(1376,"div",24)(1377,"span",25),qx(1378," errorAsync"),Hl(1379,"br"),og()()(),Cl(1380,"td",20)(1381,"code",38),qx(1382,"(value) => Observable<boolean>"),og()(),Cl(1383,"td",23)(1384,"p"),qx(1385,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Cl(1386,"code"),qx(1387,"change"),og(),qx(1388," ou "),Cl(1389,"code"),qx(1390,"change-model"),og(),qx(1391,", dependendo do valor da propriedade "),Cl(1392,"code"),qx(1393,"triggerMode"),og(),qx(1394,"."),og()()(),Cl(1395,"tr",15)(1396,"td",16)(1397,"div",24)(1398,"span",25),qx(1399," triggerMode"),Hl(1400,"br"),og()()(),Cl(1401,"td",20)(1402,"code",39),qx(1403,"'change' "),og(),Cl(1404,"code",40),qx(1405," 'changeModel'"),og()(),Cl(1406,"td",23)(1407,"em")(1408,"strong"),qx(1409,"(opcional)"),og()(),Cl(1410,"p"),qx(1411,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Cl(1412,"code"),qx(1413,"change"),og(),qx(1414," ou "),Cl(1415,"code"),qx(1416,"change-model"),og(),qx(1417,"."),og()()()()());},dependencies:[Zr],encapsulation:2})}return l})();var de=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:8,vars:4,consts:[["p-title","Number",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-number-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-number-basic-view")(6,"sample-po-number-labs-view")(7,"sample-po-number-calculate-view"),og()()()),r&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ie,ae,re,me],encapsulation:2})}return l})();var Ce=[{path:"",component:de}],pe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[bL.forChild(Ce),bL]})}return l})();var Ge=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue({imports:[ca,pe]})}return l})();export{Ge as DocPoNumberModule};