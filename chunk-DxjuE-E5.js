import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,cg as uY,ch as om,cj as Ko,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bT as ha,bB as ga,ai as ya,bC as Vp,al as lx,am as pw,an as $0,ap as hw,aq as G0,ck as vk,cl as gk,a3 as D3,az as Qy,aB as $x,aA as Jy,aX as _x}from'./main-6SPFG3VI.js';var pe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-basic"]],standalone:false,decls:1,vars:0,consts:[["name","decimal","p-label","PO Decimal"]],template:function(r,i){r&1&&Ul(0,"po-decimal",0);},dependencies:[Ko],encapsulation:2,changeDetection:1})}return l})();var Pe=l=>({"docs-sample-code-tabs":l}),se=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Decimal Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-decimal-basic/sample-po-decimal-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-decimal-basic/sample-po-decimal-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-decimal-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Pe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,pe],encapsulation:2})}return l})();var he=(()=>{class l{helperText;decimal;decimalsLength;event;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:"pt",label:"Portuguese"},{value:"en",label:"English"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"}];iconOptions=[{value:"an an-shopping-cart-simple",label:"an an-shopping-cart-simple"},{value:"an an-currency-dollar-simple",label:"an an-currency-dollar-simple"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.decimal=void 0,this.decimalsLength=void 0,this.event="",this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder="",this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size="medium",this.properties=[];}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-labs"]],standalone:false,decls:23,vars:46,consts:[["f","ngForm"],["name","decimal",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-decimals-length","p-disabled","p-help","p-icon","p-label","p-loading","p-locale","p-error-pattern","p-max","p-min","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-thousand-maxlength","p-label-text-wrap","p-compact-label","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","locale","p-clean","","p-label","Locale",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","decimalsLength","p-clean","","p-help","M\xE1ximo 15","p-label","Decimals max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","thousandMaxlength","p-clean","","p-help","M\xE1ximo 13","p-label","Thousand max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=lx();wl(0,"po-decimal",1),pw("ngModelChange",function(a){return Qy(p),$x(i.decimal,a)||(i.decimal=a),Jy(a)}),ut("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3)(4,"po-info",4),ng(),Ul(5,"po-divider"),wl(6,"form",null,0)(8,"po-input",5),pw("ngModelChange",function(a){return Qy(p),$x(i.label,a)||(i.label=a),Jy(a)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(a){return Qy(p),$x(i.help,a)||(i.help=a),Jy(a)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(a){return Qy(p),$x(i.helperText,a)||(i.helperText=a),Jy(a)}),ng(),$0(),wl(11,"po-input",8),pw("ngModelChange",function(a){return Qy(p),$x(i.placeholder,a)||(i.placeholder=a),Jy(a)}),ng(),$0(),wl(12,"po-input",9),pw("ngModelChange",function(a){return Qy(p),$x(i.errorPattern,a)||(i.errorPattern=a),Jy(a)}),ng(),$0(),wl(13,"po-select",10),pw("ngModelChange",function(a){return Qy(p),$x(i.icon,a)||(i.icon=a),Jy(a)}),ng(),$0(),wl(14,"po-number",11),pw("ngModelChange",function(a){return Qy(p),$x(i.min,a)||(i.min=a),Jy(a)}),ng(),$0(),wl(15,"po-number",12),pw("ngModelChange",function(a){return Qy(p),$x(i.max,a)||(i.max=a),Jy(a)}),ng(),$0(),wl(16,"po-select",13),pw("ngModelChange",function(a){return Qy(p),$x(i.locale,a)||(i.locale=a),Jy(a)}),ng(),$0(),wl(17,"po-number",14),pw("ngModelChange",function(a){return Qy(p),$x(i.decimalsLength,a)||(i.decimalsLength=a),Jy(a)}),ng(),$0(),wl(18,"po-number",15),pw("ngModelChange",function(a){return Qy(p),$x(i.thousandMaxlength,a)||(i.thousandMaxlength=a),Jy(a)}),ng(),$0(),wl(19,"po-checkbox-group",16),pw("ngModelChange",function(a){return Qy(p),$x(i.properties,a)||(i.properties=a),Jy(a)}),ng(),$0(),wl(20,"po-radio-group",17),pw("ngModelChange",function(a){return Qy(p),$x(i.size,a)||(i.size=a),Jy(a)}),ng(),$0(),wl(21,"div",2)(22,"po-button",18),ut("p-click",function(){return i.restore()}),ng()()();}r&2&&(hw("ngModel",i.decimal),YE("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-decimals-length",i.decimalsLength)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-error-pattern",i.errorPattern)("p-max",i.max)("p-min",i.min)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-thousand-maxlength",i.thousandMaxlength)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),G0(),Pp(3),YE("p-value",i.decimal),Pp(),YE("p-value",i.event),Pp(4),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.help),G0(),Pp(),hw("ngModel",i.helperText),G0(),Pp(),hw("ngModel",i.placeholder),G0(),Pp(),hw("ngModel",i.errorPattern),G0(),Pp(),hw("ngModel",i.icon),YE("p-options",i.iconOptions),G0(),Pp(),hw("ngModel",i.min),G0(),Pp(),hw("ngModel",i.max),G0(),Pp(),hw("ngModel",i.locale),YE("p-options",i.localeOptions),G0(),Pp(),hw("ngModel",i.decimalsLength),YE("p-max",i.maxDecimalsLength),G0(),Pp(),hw("ngModel",i.thousandMaxlength),YE("p-max",i.maxThousandMaxlength),G0(),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Ko,Yo,ha,ga,ya,Vp],encapsulation:2,changeDetection:1})}return l})();var ke=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Decimal Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-decimal-labs/sample-po-decimal-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-decimal
  class="po-md-12"
  name="decimal"
  [(ngModel)]="decimal"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-decimals-length]="decimalsLength"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-locale]="locale"
  [p-error-pattern]="errorPattern"
  [p-max]="max"
  [p-min]="min"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-thousand-maxlength]="thousandMaxlength"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
>
</po-decimal>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="decimal"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-select
    class="po-md-6 po-lg-3"
    name="locale"
    [(ngModel)]="locale"
    p-clean
    p-label="Locale"
    [p-options]="localeOptions"
  ></po-select>

  <po-number
    class="po-md-6 po-lg-3"
    name="decimalsLength"
    [(ngModel)]="decimalsLength"
    p-clean
    p-help="M\xE1ximo 15"
    p-label="Decimals max length"
    p-min="0"
    [p-max]="maxDecimalsLength"
  >
  </po-number>

  <po-number
    class="po-md-6 po-lg-3"
    name="thousandMaxlength"
    [(ngModel)]="thousandMaxlength"
    p-clean
    p-help="M\xE1ximo 13"
    p-label="Thousand max length"
    p-min="0"
    [p-max]="maxThousandMaxlength"
  >
  </po-number>

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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-decimal-labs/sample-po-decimal-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-decimal-labs',
  templateUrl: './sample-po-decimal-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalLabsComponent implements OnInit {
  helperText: string;
  decimal: number;
  decimalsLength: number;
  event: string;
  help: string;
  icon: string;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  thousandMaxlength: number;
  errorPattern: string;
  max: number;
  min: number;
  size: string;

  public readonly localeOptions: Array<PoSelectOption> = [
    { value: 'pt', label: 'Portuguese' },
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Russian' },
    { value: 'es', label: 'Spanish' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-shopping-cart-simple', label: 'an an-shopping-cart-simple' },
    { value: 'an an-currency-dollar-simple', label: 'an an-currency-dollar-simple' },
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

  get maxDecimalsLength() {
    return 16 - this.thousandMaxlength || 15;
  }

  get maxThousandMaxlength() {
    return 16 - this.decimalsLength || 13;
  }

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.decimal = undefined;
    this.decimalsLength = undefined;
    this.event = '';
    this.help = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = '';
    this.thousandMaxlength = undefined;
    this.errorPattern = undefined;
    this.max = undefined;
    this.min = undefined;
    this.size = 'medium';

    this.properties = [];
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-decimal-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ke,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,he],encapsulation:2})}return l})();var be=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let d=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/d;this.hourlyWage=r;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage"]],standalone:false,decls:16,vars:6,consts:[["f","ngForm"],[1,"po-font-title"],[1,"po-row"],["name","weekHours","p-label","Week Hours","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","workingDaysPerWeek","p-label","Working days per week","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantityDaysPerMonth","p-label","Quantity days per month","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=lx();wl(0,"form",null,0)(2,"div",1),Ux(3,"Calculate hourly wage"),ng(),Ul(4,"po-divider"),wl(5,"div",2)(6,"po-number",3),pw("ngModelChange",function(a){return Qy(p),$x(i.weekHours,a)||(i.weekHours=a),Jy(a)}),ng(),$0(),wl(7,"po-number",4),pw("ngModelChange",function(a){return Qy(p),$x(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),Jy(a)}),ng(),$0(),ng(),wl(8,"div",2)(9,"po-number",5),pw("ngModelChange",function(a){return Qy(p),$x(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),Jy(a)}),ng(),$0(),wl(10,"po-decimal",6),pw("ngModelChange",function(a){return Qy(p),$x(i.salary,a)||(i.salary=a),Jy(a)}),ut("p-change",function(){return i.calculate()}),ng(),$0(),ng(),wl(11,"div",2)(12,"po-decimal",7),pw("ngModelChange",function(a){return Qy(p),$x(i.hourlyWage,a)||(i.hourlyWage=a),Jy(a)}),ng(),$0(),ng(),wl(13,"div",2)(14,"po-button",8),ut("p-click",function(){Qy(p);let a=_x(1);return Jy(a.reset())}),ng(),wl(15,"po-button",9),ut("p-click",function(){return i.calculate()}),ng()()();}r&2&&(Pp(6),hw("ngModel",i.weekHours),G0(),Pp(),hw("ngModel",i.workingDaysPerWeek),G0(),Pp(2),hw("ngModel",i.quantityDaysPerMonth),G0(),Pp(),hw("ngModel",i.salary),G0(),Pp(2),hw("ngModel",i.hourlyWage),G0(),Pp(3),YE("p-disabled",!i.hourlyWage));},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,Ko,ha],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),xe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Decimal - Hourly Wage"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form #f="ngForm">
  <div class="po-font-title">Calculate hourly wage</div>

  <po-divider />

  <div class="po-row">
    <po-number class="po-md-6" name="weekHours" [(ngModel)]="weekHours" p-label="Week Hours" p-required> </po-number>

    <po-number
      class="po-md-6"
      name="workingDaysPerWeek"
      [(ngModel)]="workingDaysPerWeek"
      p-label="Working days per week"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-number
      class="po-md-6"
      name="quantityDaysPerMonth"
      [(ngModel)]="quantityDaysPerMonth"
      p-label="Quantity days per month"
      p-required
    >
    </po-number>

    <po-decimal
      class="po-md-6"
      name="salary"
      [(ngModel)]="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-required
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="hourlyWage"
      [(ngModel)]="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-required
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="f.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="!hourlyWage"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-hourly-wage',
  templateUrl: './sample-po-decimal-hourly-wage.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalHourlyWageComponent {
  hourlyWage: number;
  quantityDaysPerMonth: number;
  salary: number;
  weekHours: number;
  workingDaysPerWeek: number;

  calculate() {
    const hours = (this.weekHours / this.workingDaysPerWeek) * this.quantityDaysPerMonth;
    const salary = this.salary / hours;
    this.hourlyWage = salary;
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-decimal-hourly-wage"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Te,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,be],encapsulation:2})}return l})();var fe=(()=>{class l{formBuilder=f(uY);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,om.required],salary:[null,om.required],weekHours:[null,om.required],workingDaysPerWeek:[null,om.required]});}calculate(){let{weekHours:d,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:p}=this.formCalculateHourlyWage.value,s=d/r*i,a=p/s;this.formCalculateHourlyWage.patchValue({hourlyWage:a});}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form"]],standalone:false,decls:15,vars:2,consts:[[3,"formGroup"],[1,"po-font-title"],[1,"po-row"],["formControlName","weekHours","p-label","Week Hours",1,"po-md-6"],["formControlName","workingDaysPerWeek","p-label","Working days per week",1,"po-md-6"],["formControlName","quantityDaysPerMonth","p-label","Quantity days per month",1,"po-md-6"],["formControlName","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-thousand-maxlength","13",1,"po-md-6",3,"p-change"],["formControlName","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-thousand-maxlength","13",1,"po-md-6"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(wl(0,"form",0)(1,"div",1),Ux(2,"Calculate hourly wage"),ng(),Ul(3,"po-divider"),wl(4,"div",2),Ul(5,"po-number",3),$0(),Ul(6,"po-number",4),$0(),ng(),wl(7,"div",2),Ul(8,"po-number",5),$0(),wl(9,"po-decimal",6),ut("p-change",function(){return i.calculate()}),ng(),$0(),ng(),wl(10,"div",2),Ul(11,"po-decimal",7),$0(),ng(),wl(12,"div",2)(13,"po-button",8),ut("p-click",function(){return i.formCalculateHourlyWage.reset()}),ng(),wl(14,"po-button",9),ut("p-click",function(){return i.calculate()}),ng()()()),r&2&&(YE("formGroup",i.formCalculateHourlyWage),Pp(5),G0(),Pp(),G0(),Pp(2),G0(),Pp(),G0(),Pp(2),G0(),Pp(3),YE("p-disabled",i.formCalculateHourlyWage.invalid));},dependencies:[aY,iY,oY,vk,gk,Pe$1,di,Ko,ha],encapsulation:2,changeDetection:1})}return l})();var Fe=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Decimal - Hourly Wage Reactive Form"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form [formGroup]="formCalculateHourlyWage">
  <div class="po-font-title">Calculate hourly wage</div>

  <po-divider />

  <div class="po-row">
    <po-number class="po-md-6" formControlName="weekHours" p-label="Week Hours"> </po-number>

    <po-number class="po-md-6" formControlName="workingDaysPerWeek" p-label="Working days per week"> </po-number>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" formControlName="quantityDaysPerMonth" p-label="Quantity days per month"> </po-number>

    <po-decimal
      class="po-md-6"
      formControlName="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      formControlName="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="formCalculateHourlyWage.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="formCalculateHourlyWage.invalid"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sample-po-decimal-hourly-wage-reactive-form',
  templateUrl: './sample-po-decimal-hourly-wage-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalHourlyWageReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  formCalculateHourlyWage: UntypedFormGroup;

  ngOnInit() {
    this.formCalculateHourlyWage = this.formBuilder.group({
      hourlyWage: [null],
      quantityDaysPerMonth: [null, Validators.required],
      salary: [null, Validators.required],
      weekHours: [null, Validators.required],
      workingDaysPerWeek: [null, Validators.required]
    });
  }

  calculate() {
    const { weekHours, workingDaysPerWeek, quantityDaysPerMonth, salary } = this.formCalculateHourlyWage.value;

    const hours = (weekHours / workingDaysPerWeek) * quantityDaysPerMonth;
    const hourlyWage = salary / hours;

    this.formCalculateHourlyWage.patchValue({ hourlyWage });
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-decimal-hourly-wage-reactive-form"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Fe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,fe],encapsulation:2})}return l})();var ye=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-doc"]],standalone:false,decls:1516,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoDecimalComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ng(),wl(24,"p"),Ux(25,"Importante:"),ng(),wl(26,"ul")(27,"li"),Ux(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ng()(),wl(29,"h4"),Ux(30,"Tokens customiz\xE1veis"),ng(),wl(31,"p"),Ux(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Ul(33,"br"),Ux(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),wl(35,"code"),Ux(36,".po-input"),ng()(),wl(37,"blockquote")(38,"p"),Ux(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),wl(40,"a",6),Ux(41,"Grid System"),ng(),Ux(42,"."),ng()(),wl(43,"blockquote")(44,"p"),Ux(45,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(46,"a",7),Ux(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(48,"."),ng()(),wl(49,"table")(50,"thead")(51,"tr")(52,"th"),Ux(53,"Propriedade"),ng(),wl(54,"th"),Ux(55,"Descri\xE7\xE3o"),ng(),wl(56,"th"),Ux(57,"Valor Padr\xE3o"),ng()()(),wl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Ux(62,"Default Values"),ng()(),Ul(63,"td")(64,"td"),ng(),wl(65,"tr")(66,"td")(67,"code"),Ux(68,"--font-family"),ng()(),wl(69,"td"),Ux(70,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(71,"td")(72,"code"),Ux(73,"var(--font-family-theme)"),ng()()(),wl(74,"tr")(75,"td")(76,"code"),Ux(77,"--font-size"),ng()(),wl(78,"td"),Ux(79,"Tamanho da fonte"),ng(),wl(80,"td")(81,"code"),Ux(82,"var(--font-size-default)"),ng()()(),wl(83,"tr")(84,"td")(85,"code"),Ux(86,"--text-color-placeholder"),ng()(),wl(87,"td"),Ux(88,"Cor do texto placeholder"),ng(),wl(89,"td")(90,"code"),Ux(91,"var(--color-neutral-light-30)"),ng()()(),wl(92,"tr")(93,"td")(94,"code"),Ux(95,"--color"),ng()(),wl(96,"td"),Ux(97,"Cor pincipal do input"),ng(),wl(98,"td")(99,"code"),Ux(100,"var(--color-neutral-dark-70)"),ng()()(),wl(101,"tr")(102,"td")(103,"code"),Ux(104,"--background"),ng()(),wl(105,"td"),Ux(106,"Cor de background"),ng(),wl(107,"td")(108,"code"),Ux(109,"var(--color-neutral-light-05)"),ng()()(),wl(110,"tr")(111,"td")(112,"code"),Ux(113,"--padding"),ng()(),wl(114,"td"),Ux(115,"Preenchimento"),ng(),wl(116,"td")(117,"code"),Ux(118,"0 0.5rem"),ng()()(),wl(119,"tr")(120,"td")(121,"code"),Ux(122,"--text-color"),ng()(),wl(123,"td"),Ux(124,"Cor do texto"),ng(),wl(125,"td")(126,"code"),Ux(127,"var(--color-neutral-dark-90)"),ng()()(),wl(128,"tr")(129,"td")(130,"code"),Ux(131,"--field-container-title-justify"),ng()(),wl(132,"td"),Ux(133,"Alinhamento horizontal do t\xEDtulo ("),wl(134,"code"),Ux(135,"justify-content"),ng(),Ux(136,")"),ng(),wl(137,"td")(138,"code"),Ux(139,"space-between"),ng()()(),wl(140,"tr")(141,"td")(142,"code"),Ux(143,"--field-container-title-flex"),ng()(),wl(144,"td"),Ux(145,"Flex do t\xEDtulo ("),wl(146,"code"),Ux(147,"flex"),ng(),Ux(148,")"),ng(),wl(149,"td")(150,"code"),Ux(151,"1 auto"),ng()()(),wl(152,"tr")(153,"td")(154,"strong"),Ux(155,"Hover"),ng()(),Ul(156,"td")(157,"td"),ng(),wl(158,"tr")(159,"td")(160,"code"),Ux(161,"--color-hover"),ng()(),wl(162,"td"),Ux(163,"Cor principal no estado hover"),ng(),wl(164,"td")(165,"code"),Ux(166,"var(--color-brand-01-dark)"),ng()()(),wl(167,"tr")(168,"td")(169,"code"),Ux(170,"--background-hover"),ng()(),wl(171,"td"),Ux(172,"Cor de background no estado hover"),ng(),wl(173,"td")(174,"code"),Ux(175,"var(--color-brand-01-lightest)"),ng()()(),wl(176,"tr")(177,"td")(178,"strong"),Ux(179,"Focused"),ng()(),Ul(180,"td")(181,"td"),ng(),wl(182,"tr")(183,"td")(184,"code"),Ux(185,"--color-focused"),ng()(),wl(186,"td"),Ux(187,"Cor principal no estado de focus"),ng(),wl(188,"td")(189,"code"),Ux(190,"var(--color-action-default)"),ng()()(),wl(191,"tr")(192,"td")(193,"code"),Ux(194,"--outline-color-focused"),ng()(),wl(195,"td"),Ux(196,"Cor do outline do estado de focus"),ng(),wl(197,"td")(198,"code"),Ux(199,"var(--color-action-focus)"),ng()()(),wl(200,"tr")(201,"td")(202,"strong"),Ux(203,"Disabled"),ng()(),Ul(204,"td")(205,"td"),ng(),wl(206,"tr")(207,"td")(208,"code"),Ux(209,"--color-disabled"),ng()(),wl(210,"td"),Ux(211,"Cor principal no estado disabled"),ng(),wl(212,"td")(213,"code"),Ux(214,"var(--color-neutral-light-30)"),ng()()(),wl(215,"tr")(216,"td")(217,"code"),Ux(218,"--background-disabled"),ng()(),wl(219,"td"),Ux(220,"Cor de background no estado disabled"),ng(),wl(221,"td")(222,"code"),Ux(223,"var(--color-neutral-light-20)"),ng()()(),wl(224,"tr")(225,"td")(226,"code"),Ux(227,"--text-color-disabled"),ng()(),wl(228,"td"),Ux(229,"Cor do texto no estado disabled"),ng(),wl(230,"td")(231,"code"),Ux(232,"var(--color-neutral-dark-70)"),ng()()()()(),wl(233,"p"),Ul(234,"br"),Ux(235," - O "),wl(236,"code"),Ux(237,"po-decimal"),ng(),Ux(238," \xE9 um "),wl(239,"em"),Ux(240,"input"),ng(),Ux(241," espec\xEDfico para receber apenas n\xFAmeros decimais, por isso recebe as seguintes caracter\xEDsticas:"),ng(),wl(242,"ul")(243,"li"),Ux(244,"Aceita apenas n\xFAmeros;"),ng(),wl(245,"li"),Ux(246,"Utiliza ',' como separador de decimal;"),ng(),wl(247,"li"),Ux(248,"Utiliza '.' para separa\xE7\xE3o de milhar;"),ng(),wl(249,"li"),Ux(250,"\xC9 poss\xEDvel configurar a quantidade de casas decimais e a quantidade de digitos do campo."),ng()(),wl(251,"blockquote")(252,"p")(253,"strong"),Ux(254,"Importante:"),ng(),Ux(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),wl(256,"code"),Ux(257,"32 bits"),ng(),Ux(258,`, e para que os valores comportem-se devidamente,
o `),wl(259,"code"),Ux(260,"po-decimal"),ng(),Ux(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),wl(262,"code"),Ux(263,"p-decimals-length"),ng(),Ux(264," e "),wl(265,"code"),Ux(266,"p-thousand-maxlength"),ng(),Ux(267,"."),ng()()(),wl(268,"div",8)(269,"h4",9),Ux(270,"Seletor"),ng(),wl(271,"pre",10),Ux(272,`<po-decimal
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-decimals-length="number"
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
    p-locale="string"
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
    p-thousand-maxlength="number"
    p-upper-case="boolean" >
</po-decimal>
`),ng()(),wl(273,"h4",11),Ux(274,"Propriedades"),ng(),wl(275,"table",12)(276,"tr",13)(277,"th",14),Ux(278,"Nome"),ng(),wl(279,"th",14),Ux(280,"Tipo"),ng(),wl(281,"th",14),Ux(282,"Padr\xE3o"),ng(),wl(283,"th",14),Ux(284,"Descri\xE7\xE3o"),ng()(),wl(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),Ux(289," (p-additional-help)"),Ul(290,"br"),ng()(),wl(291,"div",19),Ux(292,"Deprecated"),ng()(),wl(293,"td",20)(294,"code",21),Ux(295,"EventEmitter"),ng()(),wl(296,"td",22),Ux(297,"-"),ng(),wl(298,"td",23)(299,"em")(300,"strong"),Ux(301,"(opcional)"),ng()(),wl(302,"p"),Ux(303,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(304,"blockquote")(305,"p"),Ux(306,"Essa propriedade est\xE1 "),wl(307,"strong"),Ux(308,"depreciada"),ng(),Ux(309," e ser\xE1 removida na vers\xE3o "),wl(310,"code"),Ux(311,"23.x.x"),ng(),Ux(312,". Recomendamos utilizar a propriedade "),wl(313,"code"),Ux(314,"p-helper"),ng(),Ux(315," que oferece mais recursos e flexibilidade."),ng()()()(),wl(316,"tr",15)(317,"td",16)(318,"div",24)(319,"span",25),Ux(320," p-additional-help-tooltip"),Ul(321,"br"),ng()(),wl(322,"div",19),Ux(323,"Deprecated"),ng()(),wl(324,"td",20)(325,"code",26),Ux(326,"string"),ng()(),wl(327,"td",22),Ux(328,"-"),ng(),wl(329,"td",23)(330,"em")(331,"strong"),Ux(332,"(opcional)"),ng()(),wl(333,"p"),Ux(334,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(335,"code"),Ux(336,"po-helper"),ng(),Ux(337,`.
`),wl(338,"strong"),Ux(339,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(340,"blockquote")(341,"p"),Ux(342,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(343,"blockquote")(344,"p"),Ux(345,"Essa propriedade est\xE1 "),wl(346,"strong"),Ux(347,"depreciada"),ng(),Ux(348," e ser\xE1 removida na vers\xE3o "),wl(349,"code"),Ux(350,"23.x.x"),ng(),Ux(351,". Recomendamos utilizar a propriedade "),wl(352,"code"),Ux(353,"p-helper"),ng(),Ux(354," que oferece mais recursos e flexibilidade."),ng()()()(),wl(355,"tr",15)(356,"td",16)(357,"div",24)(358,"span",25),Ux(359," p-append-in-body"),Ul(360,"br"),ng()()(),wl(361,"td",20)(362,"code",27),Ux(363,"boolean"),ng()(),wl(364,"td",22)(365,"p")(366,"code"),Ux(367,"false"),ng()()(),wl(368,"td",23)(369,"em")(370,"strong"),Ux(371,"(opcional)"),ng()(),wl(372,"p"),Ux(373,"Define que o popover ("),wl(374,"code"),Ux(375,"p-helper"),ng(),Ux(376," e/ou "),wl(377,"code"),Ux(378,"p-error-limit"),ng(),Ux(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ng(),wl(380,"blockquote")(381,"p"),Ux(382,"Quando utilizado com "),wl(383,"code"),Ux(384,"p-helper"),ng(),Ux(385,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(386,"tr",15)(387,"td",16)(388,"div",24)(389,"span",25),Ux(390," p-auto-focus"),Ul(391,"br"),ng()()(),wl(392,"td",20)(393,"code",27),Ux(394,"boolean"),ng()(),wl(395,"td",22)(396,"p")(397,"code"),Ux(398,"false"),ng()()(),wl(399,"td",23)(400,"em")(401,"strong"),Ux(402,"(opcional)"),ng()(),wl(403,"p"),Ux(404,"Aplica foco no elemento ao ser iniciado."),ng(),wl(405,"blockquote")(406,"p"),Ux(407,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),ng()()()(),wl(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),Ux(412," (p-blur)"),Ul(413,"br"),ng()()(),wl(414,"td",20)(415,"code",21),Ux(416,"EventEmitter"),ng()(),wl(417,"td",22),Ux(418,"-"),ng(),wl(419,"td",23)(420,"em")(421,"strong"),Ux(422,"(opcional)"),ng()(),wl(423,"p"),Ux(424,"Evento disparado ao sair do campo."),ng()()(),wl(425,"tr",15)(426,"td",16)(427,"div",17)(428,"span",18),Ux(429," (p-change)"),Ul(430,"br"),ng()()(),wl(431,"td",20)(432,"code",21),Ux(433,"EventEmitter"),ng()(),wl(434,"td",22),Ux(435,"-"),ng(),wl(436,"td",23)(437,"em")(438,"strong"),Ux(439,"(opcional)"),ng()(),wl(440,"p"),Ux(441,"Evento disparado ao alterar valor e deixar o campo."),ng()()(),wl(442,"tr",15)(443,"td",16)(444,"div",17)(445,"span",18),Ux(446," (p-change-model)"),Ul(447,"br"),ng()()(),wl(448,"td",20)(449,"code",21),Ux(450,"EventEmitter"),ng()(),wl(451,"td",22),Ux(452,"-"),ng(),wl(453,"td",23)(454,"em")(455,"strong"),Ux(456,"(opcional)"),ng()(),wl(457,"p"),Ux(458,"Evento disparado ao alterar valor do model."),ng()()(),wl(459,"tr",15)(460,"td",16)(461,"div",24)(462,"span",25),Ux(463,"p-clean"),Ul(464,"br"),ng()()(),wl(465,"td",20)(466,"code",27),Ux(467,"boolean"),ng()(),wl(468,"td",22),Ux(469,"-"),ng(),wl(470,"td",23)(471,"em")(472,"strong"),Ux(473,"(opcional)"),ng()(),wl(474,"p"),Ux(475,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),ng()()(),wl(476,"tr",15)(477,"td",16)(478,"div",24)(479,"span",25),Ux(480," p-compact-label"),Ul(481,"br"),ng()()(),wl(482,"td",20)(483,"code",27),Ux(484,"boolean"),ng()(),wl(485,"td",22)(486,"p")(487,"code"),Ux(488,"false"),ng()()(),wl(489,"td",23)(490,"em")(491,"strong"),Ux(492,"(opcional)"),ng()(),wl(493,"p"),Ux(494,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(495,"p"),Ux(496,"Quando habilitado ("),wl(497,"code"),Ux(498,"true"),ng(),Ux(499,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(500,"ul")(501,"li")(502,"code"),Ux(503,"po-label"),ng()(),wl(504,"li")(505,"code"),Ux(506,"p-requirement (showRequired)"),ng()(),wl(507,"li")(508,"code"),Ux(509,"po-helper"),ng()()(),wl(510,"p"),Ux(511,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(512,"p"),Ux(513,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(514,"ul")(515,"li")(516,"code"),Ux(517,"--field-container-title-justify"),ng()(),wl(518,"li")(519,"code"),Ux(520,"--field-container-title-flex"),ng()()(),wl(521,"p"),Ux(522,"Exemplo:"),ng(),wl(523,"pre")(524,"code"),Ux(525,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(526,"p"),Ux(527,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(528,"tr",15)(529,"td",16)(530,"div",24)(531,"span",25),Ux(532," p-decimals-length"),Ul(533,"br"),ng()()(),wl(534,"td",20)(535,"code",28),Ux(536,"number"),ng()(),wl(537,"td",22)(538,"p")(539,"code"),Ux(540,"2"),ng()()(),wl(541,"td",23)(542,"em")(543,"strong"),Ux(544,"(opcional)"),ng()(),wl(545,"p"),Ux(546,"Quantidade m\xE1xima de casas decimais."),ng(),wl(547,"blockquote")(548,"p")(549,"strong"),Ux(550,"Importante:"),ng()()(),wl(551,"ul")(552,"li"),Ux(553,"O valor m\xE1ximo permitido \xE9 15;"),ng(),wl(554,"li"),Ux(555,"A soma total de "),wl(556,"code"),Ux(557,"p-decimals-length"),ng(),Ux(558," com "),wl(559,"code"),Ux(560,"p-thousand-maxlength"),ng(),Ux(561," limita-se \xE0 16;"),ng(),wl(562,"li"),Ux(563,"Esta propriedade sobrep\xF5e apenas o valor "),wl(564,"strong"),Ux(565,"padr\xE3o"),ng(),Ux(566," de "),wl(567,"code"),Ux(568,"p-thousand-maxlength"),ng(),Ux(569,";"),ng(),wl(570,"li"),Ux(571,"Caso "),wl(572,"code"),Ux(573,"p-thousand-maxlength"),ng(),Ux(574," tenha um valor definido, esta propriedade poder\xE1 receber apenas o valor restante do limite total (16)."),ng()()()(),wl(575,"tr",15)(576,"td",16)(577,"div",24)(578,"span",25),Ux(579,"p-disabled"),Ul(580,"br"),ng()()(),wl(581,"td",20)(582,"code",27),Ux(583,"boolean"),ng()(),wl(584,"td",22)(585,"p")(586,"code"),Ux(587,"false"),ng()()(),wl(588,"td",23)(589,"em")(590,"strong"),Ux(591,"(opcional)"),ng()(),wl(592,"p"),Ux(593,"Se verdadeiro, desabilita o campo."),ng()()(),wl(594,"tr",15)(595,"td",16)(596,"div",24)(597,"span",25),Ux(598," p-emit-all-changes"),Ul(599,"br"),ng()()(),wl(600,"td",20)(601,"code",27),Ux(602,"boolean"),ng()(),wl(603,"td",22)(604,"p")(605,"code"),Ux(606,"false"),ng()()(),wl(607,"td",23)(608,"em")(609,"strong"),Ux(610,"(opcional)"),ng()(),wl(611,"p"),Ux(612,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),ng()()(),wl(613,"tr",15)(614,"td",16)(615,"div",17)(616,"span",18),Ux(617," (p-enter)"),Ul(618,"br"),ng()()(),wl(619,"td",20)(620,"code",21),Ux(621,"EventEmitter"),ng()(),wl(622,"td",22),Ux(623,"-"),ng(),wl(624,"td",23)(625,"em")(626,"strong"),Ux(627,"(opcional)"),ng()(),wl(628,"p"),Ux(629,"Evento disparado ao entrar do campo."),ng()()(),wl(630,"tr",15)(631,"td",16)(632,"div",24)(633,"span",25),Ux(634," p-error-async-properties"),Ul(635,"br"),ng()()(),wl(636,"td",20)(637,"code",29),Ux(638,"ErrorAsyncProperties"),ng()(),wl(639,"td",22),Ux(640,"-"),ng(),wl(641,"td",23)(642,"em")(643,"strong"),Ux(644,"(opcional)"),ng()(),wl(645,"p"),Ux(646,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),wl(647,"code"),Ux(648,"Reactive Forms"),ng(),Ux(649,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),wl(650,"code"),Ux(651,"asyncValidators"),ng(),Ux(652,"."),ng()()(),wl(653,"tr",15)(654,"td",16)(655,"div",24)(656,"span",25),Ux(657," p-error-limit"),Ul(658,"br"),ng()()(),wl(659,"td",20)(660,"code",27),Ux(661,"boolean"),ng()(),wl(662,"td",22)(663,"p")(664,"code"),Ux(665,"false"),ng()()(),wl(666,"td",23)(667,"em")(668,"strong"),Ux(669,"(opcional)"),ng()(),wl(670,"p"),Ux(671,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(672,"blockquote")(673,"p"),Ux(674,"Caso essa propriedade seja definida como "),wl(675,"code"),Ux(676,"true"),ng(),Ux(677,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()()()(),wl(678,"tr",15)(679,"td",16)(680,"div",24)(681,"span",25),Ux(682," p-error-pattern"),Ul(683,"br"),ng()()(),wl(684,"td",20)(685,"code",26),Ux(686,"string"),ng()(),wl(687,"td",22),Ux(688,"-"),ng(),wl(689,"td",23)(690,"em")(691,"strong"),Ux(692,"(opcional)"),ng()(),wl(693,"p"),Ux(694,"Mensagem que ser\xE1 apresentada quando o "),wl(695,"code"),Ux(696,"pattern"),ng(),Ux(697," ou a m\xE1scara n\xE3o for satisfeita."),ng(),wl(698,"blockquote")(699,"p"),Ux(700,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),wl(701,"code"),Ux(702,"p-required-field-error-message"),ng(),Ux(703," em conjunto."),ng()()()(),wl(704,"tr",15)(705,"td",16)(706,"div",24)(707,"span",25),Ux(708," p-help"),Ul(709,"br"),ng()()(),wl(710,"td",20)(711,"code",26),Ux(712,"string"),ng()(),wl(713,"td",22),Ux(714,"-"),ng(),wl(715,"td",23)(716,"em")(717,"strong"),Ux(718,"(opcional)"),ng()(),wl(719,"p"),Ux(720,"Texto de apoio do campo."),ng()()(),wl(721,"tr",15)(722,"td",16)(723,"div",24)(724,"span",25),Ux(725," p-icon"),Ul(726,"br"),ng()()(),wl(727,"td",20)(728,"code",26),Ux(729,"string "),ng(),wl(730,"code",30),Ux(731," TemplateRef<void>"),ng()(),wl(732,"td",22),Ux(733,"-"),ng(),wl(734,"td",23)(735,"em")(736,"strong"),Ux(737,"(opcional)"),ng()(),wl(738,"p"),Ux(739,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),ng(),wl(740,"p"),Ux(741,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),wl(742,"a",31),Ux(743,"Biblioteca de \xEDcones"),ng(),Ux(744,". conforme exemplo abaixo:"),ng(),wl(745,"pre")(746,"code"),Ux(747,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),ng()(),wl(748,"p"),Ux(749,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),wl(750,"em"),Ux(751,"Font Awesome"),ng(),Ux(752,", da seguinte forma:"),ng(),wl(753,"pre")(754,"code"),Ux(755,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),ng()(),wl(756,"p"),Ux(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),wl(758,"code"),Ux(759,"TemplateRef"),ng(),Ux(760,", conforme exemplo abaixo:"),ng(),wl(761,"pre")(762,"code"),Ux(763,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ng()(),wl(764,"blockquote")(765,"p"),Ux(766,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),wl(767,"code"),Ux(768,"font-size: inherit"),ng(),Ux(769," caso o \xEDcone utilizado n\xE3o aplique-o."),ng()()()(),wl(770,"tr",15)(771,"td",16)(772,"div",17)(773,"span",18),Ux(774," (p-keydown)"),Ul(775,"br"),ng()()(),wl(776,"td",20)(777,"code",21),Ux(778,"EventEmitter"),ng()(),wl(779,"td",22),Ux(780,"-"),ng(),wl(781,"td",23)(782,"em")(783,"strong"),Ux(784,"(opcional)"),ng()(),wl(785,"p"),Ux(786,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(787,"code"),Ux(788,"KeyboardEvent"),ng(),Ux(789," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(790,"tr",15)(791,"td",16)(792,"div",24)(793,"span",25),Ux(794," p-label"),Ul(795,"br"),ng()()(),wl(796,"td",20)(797,"code",26),Ux(798,"string"),ng()(),wl(799,"td",22),Ux(800,"-"),ng(),wl(801,"td",23)(802,"em")(803,"strong"),Ux(804,"(opcional)"),ng()(),wl(805,"p"),Ux(806,"R\xF3tulo do campo."),ng()()(),wl(807,"tr",15)(808,"td",16)(809,"div",24)(810,"span",25),Ux(811," p-label-text-wrap"),Ul(812,"br"),ng()()(),wl(813,"td",20)(814,"code",27),Ux(815,"boolean"),ng()(),wl(816,"td",22)(817,"p")(818,"code"),Ux(819,"false"),ng()()(),wl(820,"td",23)(821,"em")(822,"strong"),Ux(823,"(opcional)"),ng()(),wl(824,"p"),Ux(825,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(826,"code"),Ux(827,"p-label"),ng(),Ux(828,". Quando "),wl(829,"code"),Ux(830,"p-label-text-wrap"),ng(),Ux(831,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(832,"tr",15)(833,"td",16)(834,"div",24)(835,"span",25),Ux(836," p-loading"),Ul(837,"br"),ng()()(),wl(838,"td",20)(839,"code",27),Ux(840,"boolean"),ng()(),wl(841,"td",22)(842,"p")(843,"code"),Ux(844,"false"),ng()()(),wl(845,"td",23)(846,"em")(847,"strong"),Ux(848,"(opcional)"),ng()(),wl(849,"p"),Ux(850,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng()()(),wl(851,"tr",15)(852,"td",16)(853,"div",24)(854,"span",25),Ux(855," p-locale"),Ul(856,"br"),ng()()(),wl(857,"td",20)(858,"code",26),Ux(859,"string"),ng()(),wl(860,"td",22),Ux(861,"-"),ng(),wl(862,"td",23)(863,"em")(864,"strong"),Ux(865,"(opcional)"),ng()(),wl(866,"p"),Ux(867,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),wl(868,"a",32)(869,"code"),Ux(870,"I18n"),ng()()(),wl(871,"blockquote")(872,"p"),Ux(873,"Para ver quais linguagens suportadas acesse "),wl(874,"a",32)(875,"code"),Ux(876,"I18n"),ng()()()()()(),wl(877,"tr",15)(878,"td",16)(879,"div",24)(880,"span",25),Ux(881,"p-mask"),Ul(882,"br"),ng()()(),wl(883,"td",20)(884,"code",26),Ux(885,"string"),ng()(),wl(886,"td",22),Ux(887,"-"),ng(),wl(888,"td",23)(889,"em")(890,"strong"),Ux(891,"(opcional)"),ng()(),wl(892,"p"),Ux(893,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),ng()()(),wl(894,"tr",15)(895,"td",16)(896,"div",24)(897,"span",25),Ux(898,"p-mask-format-model"),Ul(899,"br"),ng()()(),wl(900,"td",20)(901,"code",27),Ux(902,"boolean"),ng()(),wl(903,"td",22)(904,"p")(905,"code"),Ux(906,"false"),ng()()(),wl(907,"td",23)(908,"em")(909,"strong"),Ux(910,"(opcional)"),ng()(),wl(911,"p"),Ux(912,"Indica se o "),wl(913,"code"),Ux(914,"model"),ng(),Ux(915," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),ng()()(),wl(916,"tr",15)(917,"td",16)(918,"div",24)(919,"span",25),Ux(920," p-mask-no-length-validation"),Ul(921,"br"),ng()()(),wl(922,"td",20)(923,"code",27),Ux(924,"boolean"),ng()(),wl(925,"td",22)(926,"p")(927,"code"),Ux(928,"false"),ng()()(),wl(929,"td",23)(930,"p"),Ux(931,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),wl(932,"code"),Ux(933,"minLength"),ng(),Ux(934,") e m\xE1ximo ("),wl(935,"code"),Ux(936,"maxLength"),ng(),Ux(937,") quando h\xE1 uma m\xE1scara ("),wl(938,"code"),Ux(939,"p-mask"),ng(),Ux(940,") definida."),ng(),wl(941,"ul")(942,"li"),Ux(943,"Quando "),wl(944,"code"),Ux(945,"true"),ng(),Ux(946,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),ng(),wl(947,"li"),Ux(948,"Quando "),wl(949,"code"),Ux(950,"false"),ng(),Ux(951,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),ng()(),wl(952,"blockquote")(953,"p"),Ux(954,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),wl(955,"code"),Ux(956,"p-mask-format-model"),ng(),Ux(957,"."),ng()(),wl(958,"p"),Ux(959,"Exemplo:"),ng(),wl(960,"pre")(961,"code"),Ux(962,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ng()(),wl(963,"ul")(964,"li"),Ux(965,"Entrada: "),wl(966,"code"),Ux(967,"123-456"),ng(),Ux(968," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),wl(969,"code"),Ux(970,"-"),ng(),Ux(971,"."),ng()()()(),wl(972,"tr",15)(973,"td",16)(974,"div",24)(975,"span",25),Ux(976," p-max"),Ul(977,"br"),ng()()(),wl(978,"td",20)(979,"code",28),Ux(980,"number"),ng()(),wl(981,"td",22),Ux(982,"-"),ng(),wl(983,"td",23)(984,"em")(985,"strong"),Ux(986,"(opcional)"),ng()(),wl(987,"p"),Ux(988,"Valor m\xE1ximo."),ng()()(),wl(989,"tr",15)(990,"td",16)(991,"div",24)(992,"span",25),Ux(993," p-maxlength"),Ul(994,"br"),ng()()(),wl(995,"td",20)(996,"code",28),Ux(997,"number"),ng()(),wl(998,"td",22),Ux(999,"-"),ng(),wl(1e3,"td",23)(1001,"em")(1002,"strong"),Ux(1003,"(opcional)"),ng()(),wl(1004,"p"),Ux(1005,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),ng()()(),wl(1006,"tr",15)(1007,"td",16)(1008,"div",24)(1009,"span",25),Ux(1010," p-min"),Ul(1011,"br"),ng()()(),wl(1012,"td",20)(1013,"code",28),Ux(1014,"number"),ng()(),wl(1015,"td",22),Ux(1016,"-"),ng(),wl(1017,"td",23)(1018,"em")(1019,"strong"),Ux(1020,"(opcional)"),ng()(),wl(1021,"p"),Ux(1022,"Valor m\xEDnimo."),ng()()(),wl(1023,"tr",15)(1024,"td",16)(1025,"div",24)(1026,"span",25),Ux(1027," p-minlength"),Ul(1028,"br"),ng()()(),wl(1029,"td",20)(1030,"code",28),Ux(1031,"number"),ng()(),wl(1032,"td",22),Ux(1033,"-"),ng(),wl(1034,"td",23)(1035,"em")(1036,"strong"),Ux(1037,"(opcional)"),ng()(),wl(1038,"p"),Ux(1039,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),ng()()(),wl(1040,"tr",15)(1041,"td",16)(1042,"div",24)(1043,"span",25),Ux(1044," name"),Ul(1045,"br"),ng()()(),wl(1046,"td",20)(1047,"code",26),Ux(1048,"string"),ng()(),wl(1049,"td",22),Ux(1050,"-"),ng(),wl(1051,"td",23)(1052,"p"),Ux(1053,"Nome e identificador do campo."),ng()()(),wl(1054,"tr",15)(1055,"td",16)(1056,"div",24)(1057,"span",25),Ux(1058," p-no-autocomplete"),Ul(1059,"br"),ng()()(),wl(1060,"td",20)(1061,"code",27),Ux(1062,"boolean"),ng()(),wl(1063,"td",22)(1064,"p")(1065,"code"),Ux(1066,"false"),ng()()(),wl(1067,"td",23)(1068,"em")(1069,"strong"),Ux(1070,"(opcional)"),ng()(),wl(1071,"p"),Ux(1072,"Define a propriedade nativa "),wl(1073,"code"),Ux(1074,"autocomplete"),ng(),Ux(1075," do campo como "),wl(1076,"code"),Ux(1077,"off"),ng(),Ux(1078,"."),ng(),wl(1079,"blockquote")(1080,"p"),Ux(1081,"No componente "),wl(1082,"code"),Ux(1083,"po-password"),ng(),Ux(1084," ser\xE1 definido como "),wl(1085,"code"),Ux(1086,"new-password"),ng(),Ux(1087,"."),ng()(),wl(1088,"p"),Ux(1089,"Nos componentes "),wl(1090,"code"),Ux(1091,"po-password"),ng(),Ux(1092," e "),wl(1093,"code"),Ux(1094,"po-login"),ng(),Ux(1095," o valor padr\xE3o ser\xE1 "),wl(1096,"code"),Ux(1097,"true"),ng(),Ux(1098,"."),ng()()(),wl(1099,"tr",15)(1100,"td",16)(1101,"div",24)(1102,"span",25),Ux(1103," p-optional"),Ul(1104,"br"),ng()()(),wl(1105,"td",20)(1106,"code",27),Ux(1107,"boolean"),ng()(),wl(1108,"td",22)(1109,"p")(1110,"code"),Ux(1111,"false"),ng()()(),wl(1112,"td",23)(1113,"em")(1114,"strong"),Ux(1115,"(opcional)"),ng()(),wl(1116,"p"),Ux(1117,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(1118,"blockquote")(1119,"p"),Ux(1120,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1121,"ul")(1122,"li"),Ux(1123,"O campo conter "),wl(1124,"code"),Ux(1125,"p-required"),ng(),Ux(1126,";"),ng(),wl(1127,"li"),Ux(1128,"N\xE3o possuir "),wl(1129,"code"),Ux(1130,"p-help"),ng(),Ux(1131," e/ou "),wl(1132,"code"),Ux(1133,"p-label"),ng(),Ux(1134,"."),ng()()()(),wl(1135,"tr",15)(1136,"td",16)(1137,"div",24)(1138,"span",25),Ux(1139,"p-pattern"),Ul(1140,"br"),ng()()(),wl(1141,"td",20)(1142,"code",26),Ux(1143,"string"),ng()(),wl(1144,"td",22),Ux(1145,"-"),ng(),wl(1146,"td",23)(1147,"em")(1148,"strong"),Ux(1149,"(opcional)"),ng()(),wl(1150,"p"),Ux(1151,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),wl(1152,"code"),Ux(1153,"(p-mask)"),ng(),Ux(1154,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ng()()(),wl(1155,"tr",15)(1156,"td",16)(1157,"div",24)(1158,"span",25),Ux(1159," p-placeholder"),Ul(1160,"br"),ng()()(),wl(1161,"td",20)(1162,"code",26),Ux(1163,"string"),ng()(),wl(1164,"td",22)(1165,"p"),Ux(1166,"''"),ng()(),wl(1167,"td",23)(1168,"em")(1169,"strong"),Ux(1170,"(opcional)"),ng()(),wl(1171,"p"),Ux(1172,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),ng()()(),wl(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),Ux(1177," p-helper"),Ul(1178,"br"),ng()()(),wl(1179,"td",20)(1180,"code",33),Ux(1181,"PoHelperOptions "),ng(),wl(1182,"code",26),Ux(1183," string"),ng()(),wl(1184,"td",22),Ux(1185,"-"),ng(),wl(1186,"td",23)(1187,"em")(1188,"strong"),Ux(1189,"(opcional)"),ng()(),wl(1190,"p"),Ux(1191,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(1192,"code"),Ux(1193,"p-label"),ng(),Ux(1194," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(1195,"code"),Ux(1196,"p-label"),ng(),Ux(1197,"."),ng(),wl(1198,"blockquote")(1199,"p"),Ux(1200,"Para mais informa\xE7\xF5es acesse: "),wl(1201,"a",34),Ux(1202,"https://po-ui.io/documentation/po-helper"),ng(),Ux(1203,"."),ng()(),wl(1204,"blockquote")(1205,"p"),Ux(1206,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(1207,"code"),Ux(1208,"p-additional-help-tooltip"),ng(),Ux(1209," e "),wl(1210,"code"),Ux(1211,"p-additional-help"),ng(),Ux(1212,") ser\xE1 ignorado."),ng()()()(),wl(1213,"tr",15)(1214,"td",16)(1215,"div",24)(1216,"span",25),Ux(1217,"p-readonly"),Ul(1218,"br"),ng()()(),wl(1219,"td",20)(1220,"code",27),Ux(1221,"boolean"),ng()(),wl(1222,"td",22),Ux(1223,"-"),ng(),wl(1224,"td",23)(1225,"em")(1226,"strong"),Ux(1227,"(opcional)"),ng()(),wl(1228,"p"),Ux(1229,"Indica que o campo ser\xE1 somente leitura."),ng()()(),wl(1230,"tr",15)(1231,"td",16)(1232,"div",24)(1233,"span",25),Ux(1234,"p-required"),Ul(1235,"br"),ng()()(),wl(1236,"td",20)(1237,"code",27),Ux(1238,"boolean"),ng()(),wl(1239,"td",22)(1240,"p")(1241,"code"),Ux(1242,"false"),ng()()(),wl(1243,"td",23)(1244,"em")(1245,"strong"),Ux(1246,"(opcional)"),ng()(),wl(1247,"p"),Ux(1248,"Define que o campo ser\xE1 obrigat\xF3rio."),ng(),wl(1249,"blockquote")(1250,"p"),Ux(1251,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),wl(1252,"code"),Ux(1253,"(p-disabled)"),ng(),Ux(1254,"."),ng()()()(),wl(1255,"tr",15)(1256,"td",16)(1257,"div",24)(1258,"span",25),Ux(1259," p-required-field-error-message"),Ul(1260,"br"),ng()()(),wl(1261,"td",20)(1262,"code",27),Ux(1263,"boolean"),ng()(),wl(1264,"td",22)(1265,"p")(1266,"code"),Ux(1267,"false"),ng()()(),wl(1268,"td",23)(1269,"em")(1270,"strong"),Ux(1271,"(opcional)"),ng()(),wl(1272,"p"),Ux(1273,"Exibe a mensagem setada na propriedade "),wl(1274,"code"),Ux(1275,"p-error-pattern"),ng(),Ux(1276," se o campo estiver vazio e for requerido."),ng(),wl(1277,"blockquote")(1278,"p"),Ux(1279,"Necess\xE1rio que a propriedade "),wl(1280,"code"),Ux(1281,"p-required"),ng(),Ux(1282," esteja habilitada."),ng()()()(),wl(1283,"tr",15)(1284,"td",16)(1285,"div",24)(1286,"span",25),Ux(1287," p-show-required"),Ul(1288,"br"),ng()()(),wl(1289,"td",20)(1290,"code",27),Ux(1291,"boolean"),ng()(),wl(1292,"td",22),Ux(1293,"-"),ng(),wl(1294,"td",23)(1295,"p"),Ux(1296,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(1297,"blockquote")(1298,"p"),Ux(1299,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1300,"ul")(1301,"li"),Ux(1302,"N\xE3o possuir "),wl(1303,"code"),Ux(1304,"p-help"),ng(),Ux(1305," e/ou "),wl(1306,"code"),Ux(1307,"p-label"),ng(),Ux(1308,"."),ng()()()(),wl(1309,"tr",15)(1310,"td",16)(1311,"div",24)(1312,"span",25),Ux(1313," p-size"),Ul(1314,"br"),ng()()(),wl(1315,"td",20)(1316,"code",26),Ux(1317,"string"),ng()(),wl(1318,"td",22)(1319,"p")(1320,"code"),Ux(1321,"medium"),ng()()(),wl(1322,"td",23)(1323,"em")(1324,"strong"),Ux(1325,"(opcional)"),ng()(),wl(1326,"p"),Ux(1327,"Define o tamanho do componente:"),ng(),wl(1328,"ul")(1329,"li")(1330,"code"),Ux(1331,"small"),ng(),Ux(1332,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(1333,"li")(1334,"code"),Ux(1335,"medium"),ng(),Ux(1336,": altura do input como 44px."),ng()(),wl(1337,"blockquote")(1338,"p"),Ux(1339,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(1340,"code"),Ux(1341,"medium"),ng(),Ux(1342,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(1343,"a",35),Ux(1344,"po-theme"),ng(),Ux(1345,"."),ng()()()(),wl(1346,"tr",15)(1347,"td",16)(1348,"div",24)(1349,"span",25),Ux(1350," p-thousand-maxlength"),Ul(1351,"br"),ng()()(),wl(1352,"td",20)(1353,"code",28),Ux(1354,"number"),ng()(),wl(1355,"td",22)(1356,"p")(1357,"code"),Ux(1358,"13"),ng()()(),wl(1359,"td",23)(1360,"em")(1361,"strong"),Ux(1362,"(opcional)"),ng()(),wl(1363,"p"),Ux(1364,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal."),ng(),wl(1365,"blockquote")(1366,"p")(1367,"strong"),Ux(1368,"Importante:"),ng()()(),wl(1369,"ul")(1370,"li"),Ux(1371,"O valor m\xE1ximo permitido \xE9 13;"),ng(),wl(1372,"li"),Ux(1373,"A soma total de "),wl(1374,"code"),Ux(1375,"p-decimals-length"),ng(),Ux(1376," com "),wl(1377,"code"),Ux(1378,"p-thousand-maxlength"),ng(),Ux(1379," limita-se \xE0 16;"),ng(),wl(1380,"li"),Ux(1381,"Esta propriedade sobrep\xF5e o valor definido em "),wl(1382,"code"),Ux(1383,"p-decimals-length"),ng(),Ux(1384,"."),ng()()()(),wl(1385,"tr",15)(1386,"td",16)(1387,"div",24)(1388,"span",25),Ux(1389," p-upper-case"),Ul(1390,"br"),ng()()(),wl(1391,"td",20)(1392,"code",27),Ux(1393,"boolean"),ng()(),wl(1394,"td",22),Ux(1395,"-"),ng(),wl(1396,"td",23)(1397,"p"),Ux(1398,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),ng()()()(),wl(1399,"h3",11),Ux(1400,"M\xE9todos"),ng(),wl(1401,"table",36)(1402,"tr",15)(1403,"th",37)(1404,"div",24)(1405,"h4")(1406,"span",25),Ux(1407," showAdditionalHelp "),ng()()()()(),wl(1408,"tr",23)(1409,"td",23)(1410,"p"),Ux(1411,"M\xE9todo que exibe "),wl(1412,"code"),Ux(1413,"p-helper"),ng(),Ux(1414," ou executa a a\xE7\xE3o definida em "),wl(1415,"code"),Ux(1416,"p-helper{eventOnClick}"),ng(),Ux(1417," ou em "),wl(1418,"code"),Ux(1419,"p-additionalHelp"),ng(),Ux(1420,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(1421,"code"),Ux(1422,"p-keydown"),ng(),Ux(1423,"."),ng(),wl(1424,"blockquote")(1425,"p"),Ux(1426,"Exibe ou oculta o conte\xFAdo do componente "),wl(1427,"code"),Ux(1428,"po-helper"),ng(),Ux(1429," quando o componente estiver com foco."),ng()(),wl(1430,"pre")(1431,"code"),Ux(1432,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ng()(),wl(1433,"pre")(1434,"code"),Ux(1435,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(1436,"br"),wl(1437,"table",36)(1438,"tr",15)(1439,"th",37)(1440,"div",24)(1441,"h4")(1442,"span",25),Ux(1443," focus "),ng()()()()(),wl(1444,"tr",23)(1445,"td",23)(1446,"p"),Ux(1447,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(1448,"p"),Ux(1449,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(1450,"pre")(1451,"code"),Ux(1452,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ng()()()()(),Ul(1453,"br"),wl(1454,"h3"),Ux(1455,"Interfaces"),ng(),wl(1456,"h4",38)(1457,"code",5),Ux(1458,"ErrorAsyncProperties"),ng()(),wl(1459,"div",2)(1460,"p"),Ux(1461,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),ng()(),wl(1462,"h4",11),Ux(1463,"Propriedades"),ng(),wl(1464,"table",12)(1465,"tr",13)(1466,"th",14),Ux(1467,"Nome"),ng(),wl(1468,"th",14),Ux(1469,"Tipo"),ng(),wl(1470,"th",14),Ux(1471,"Descri\xE7\xE3o"),ng()(),wl(1472,"tr",15)(1473,"td",16)(1474,"div",24)(1475,"span",25),Ux(1476," errorAsync"),Ul(1477,"br"),ng()()(),wl(1478,"td",20)(1479,"code",39),Ux(1480,"(value) => Observable<boolean>"),ng()(),wl(1481,"td",23)(1482,"p"),Ux(1483,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),wl(1484,"code"),Ux(1485,"change"),ng(),Ux(1486," ou "),wl(1487,"code"),Ux(1488,"change-model"),ng(),Ux(1489,", dependendo do valor da propriedade "),wl(1490,"code"),Ux(1491,"triggerMode"),ng(),Ux(1492,"."),ng()()(),wl(1493,"tr",15)(1494,"td",16)(1495,"div",24)(1496,"span",25),Ux(1497," triggerMode"),Ul(1498,"br"),ng()()(),wl(1499,"td",20)(1500,"code",40),Ux(1501,"'change' "),ng(),wl(1502,"code",41),Ux(1503," 'changeModel'"),ng()(),wl(1504,"td",23)(1505,"em")(1506,"strong"),Ux(1507,"(opcional)"),ng()(),wl(1508,"p"),Ux(1509,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),wl(1510,"code"),Ux(1511,"change"),ng(),Ux(1512," ou "),wl(1513,"code"),Ux(1514,"change-model"),ng(),Ux(1515,"."),ng()()()()());},dependencies:[fP],encapsulation:2})}return l})();var Ce=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Decimal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-decimal-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-decimal-basic-view")(6,"sample-po-decimal-labs-view")(7,"sample-po-decimal-hourly-wage-view")(8,"sample-po-decimal-hourly-wage-reactive-form-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,se,Se,xe,ve,ye],encapsulation:2})}return l})();var Be=[{path:"",component:Ce}],we=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[vL.forChild(Be),vL]})}return l})();var yt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[u5,we]})}return l})();export{yt as DocPoDecimalModule};