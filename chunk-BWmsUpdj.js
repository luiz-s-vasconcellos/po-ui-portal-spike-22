import {f as fe,u as ue$1,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,cM as nY,cN as lm,cP as hhe,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,cp as Uhe,c8 as Pde,aJ as Ghe,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,cQ as Rk,cR as Tk,a3 as pNe,aD as Xy,aT as tN,aE as Qy,bd as xx}from'./main-UTR4MKMU.js';var me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-basic"]],standalone:false,decls:1,vars:0,consts:[["name","decimal","p-label","PO Decimal"]],template:function(r,i){r&1&&Wl(0,"po-decimal",0);},dependencies:[hhe],encapsulation:2,changeDetection:1})}return l})();var ve=l=>({"docs-sample-code-tabs":l}),de=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Decimal Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-decimal-basic/sample-po-decimal-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-decimal-basic/sample-po-decimal-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-decimal-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ve,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,me],encapsulation:2})}return l})();var se=(()=>{class l{helperText;decimal;decimalsLength;event;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:"pt",label:"Portuguese"},{value:"en",label:"English"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"}];iconOptions=[{value:"an an-shopping-cart-simple",label:"an an-shopping-cart-simple"},{value:"an an-currency-dollar-simple",label:"an an-currency-dollar-simple"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.decimal=void 0,this.decimalsLength=void 0,this.event="",this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder="",this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size="medium",this.properties=[];}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-labs"]],standalone:false,decls:23,vars:46,consts:[["f","ngForm"],["name","decimal",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-decimals-length","p-disabled","p-help","p-icon","p-label","p-loading","p-locale","p-error-pattern","p-max","p-min","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-thousand-maxlength","p-label-text-wrap","p-compact-label","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","locale","p-clean","","p-label","Locale",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","decimalsLength","p-clean","","p-help","M\xE1ximo 15","p-label","Decimals max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","thousandMaxlength","p-clean","","p-help","M\xE1ximo 13","p-label","Thousand max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=Ex();Sl(0,"po-decimal",1),Ew("ngModelChange",function(a){return Xy(p),tN(i.decimal,a)||(i.decimal=a),Qy(a)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),sg(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(a){return Xy(p),tN(i.label,a)||(i.label=a),Qy(a)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(a){return Xy(p),tN(i.help,a)||(i.help=a),Qy(a)}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(a){return Xy(p),tN(i.helperText,a)||(i.helperText=a),Qy(a)}),sg(),JA(),Sl(11,"po-input",8),Ew("ngModelChange",function(a){return Xy(p),tN(i.placeholder,a)||(i.placeholder=a),Qy(a)}),sg(),JA(),Sl(12,"po-input",9),Ew("ngModelChange",function(a){return Xy(p),tN(i.errorPattern,a)||(i.errorPattern=a),Qy(a)}),sg(),JA(),Sl(13,"po-select",10),Ew("ngModelChange",function(a){return Xy(p),tN(i.icon,a)||(i.icon=a),Qy(a)}),sg(),JA(),Sl(14,"po-number",11),Ew("ngModelChange",function(a){return Xy(p),tN(i.min,a)||(i.min=a),Qy(a)}),sg(),JA(),Sl(15,"po-number",12),Ew("ngModelChange",function(a){return Xy(p),tN(i.max,a)||(i.max=a),Qy(a)}),sg(),JA(),Sl(16,"po-select",13),Ew("ngModelChange",function(a){return Xy(p),tN(i.locale,a)||(i.locale=a),Qy(a)}),sg(),JA(),Sl(17,"po-number",14),Ew("ngModelChange",function(a){return Xy(p),tN(i.decimalsLength,a)||(i.decimalsLength=a),Qy(a)}),sg(),JA(),Sl(18,"po-number",15),Ew("ngModelChange",function(a){return Xy(p),tN(i.thousandMaxlength,a)||(i.thousandMaxlength=a),Qy(a)}),sg(),JA(),Sl(19,"po-checkbox-group",16),Ew("ngModelChange",function(a){return Xy(p),tN(i.properties,a)||(i.properties=a),Qy(a)}),sg(),JA(),Sl(20,"po-radio-group",17),Ew("ngModelChange",function(a){return Xy(p),tN(i.size,a)||(i.size=a),Qy(a)}),sg(),JA(),Sl(21,"div",2)(22,"po-button",18),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(Dw("ngModel",i.decimal),tw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-decimals-length",i.decimalsLength)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-error-pattern",i.errorPattern)("p-max",i.max)("p-min",i.min)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-thousand-maxlength",i.thousandMaxlength)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),t0(),Vp(3),tw("p-value",i.decimal),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.help),t0(),Vp(),Dw("ngModel",i.helperText),t0(),Vp(),Dw("ngModel",i.placeholder),t0(),Vp(),Dw("ngModel",i.errorPattern),t0(),Vp(),Dw("ngModel",i.icon),tw("p-options",i.iconOptions),t0(),Vp(),Dw("ngModel",i.min),t0(),Vp(),Dw("ngModel",i.max),t0(),Vp(),Dw("ngModel",i.locale),tw("p-options",i.localeOptions),t0(),Vp(),Dw("ngModel",i.decimalsLength),tw("p-max",i.maxDecimalsLength),t0(),Vp(),Dw("ngModel",i.thousandMaxlength),tw("p-max",i.maxThousandMaxlength),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,hhe,F3,Uhe,Pde,Ghe,Qhe],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Decimal Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-decimal-labs/sample-po-decimal-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-decimal
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-decimal-labs/sample-po-decimal-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-decimal-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,we,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,se],encapsulation:2})}return l})();var ue=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let d=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/d;this.hourlyWage=r;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage"]],standalone:false,decls:16,vars:6,consts:[["f","ngForm"],[1,"po-font-title"],[1,"po-row"],["name","weekHours","p-label","Week Hours","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","workingDaysPerWeek","p-label","Working days per week","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantityDaysPerMonth","p-label","Quantity days per month","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=Ex();Sl(0,"form",null,0)(2,"div",1),Jx(3,"Calculate hourly wage"),sg(),Wl(4,"po-divider"),Sl(5,"div",2)(6,"po-number",3),Ew("ngModelChange",function(a){return Xy(p),tN(i.weekHours,a)||(i.weekHours=a),Qy(a)}),sg(),JA(),Sl(7,"po-number",4),Ew("ngModelChange",function(a){return Xy(p),tN(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),Qy(a)}),sg(),JA(),sg(),Sl(8,"div",2)(9,"po-number",5),Ew("ngModelChange",function(a){return Xy(p),tN(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),Qy(a)}),sg(),JA(),Sl(10,"po-decimal",6),Ew("ngModelChange",function(a){return Xy(p),tN(i.salary,a)||(i.salary=a),Qy(a)}),ht("p-change",function(){return i.calculate()}),sg(),JA(),sg(),Sl(11,"div",2)(12,"po-decimal",7),Ew("ngModelChange",function(a){return Xy(p),tN(i.hourlyWage,a)||(i.hourlyWage=a),Qy(a)}),sg(),JA(),sg(),Sl(13,"div",2)(14,"po-button",8),ht("p-click",function(){Xy(p);let a=xx(1);return Qy(a.reset())}),sg(),Sl(15,"po-button",9),ht("p-click",function(){return i.calculate()}),sg()()();}r&2&&(Vp(6),Dw("ngModel",i.weekHours),t0(),Vp(),Dw("ngModel",i.workingDaysPerWeek),t0(),Vp(2),Dw("ngModel",i.quantityDaysPerMonth),t0(),Vp(),Dw("ngModel",i.salary),t0(),Vp(2),Dw("ngModel",i.hourlyWage),t0(),Vp(3),tw("p-disabled",!i.hourlyWage));},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,hhe,Uhe],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Decimal - Hourly Wage"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<form #f="ngForm">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-decimal-hourly-wage"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,_e,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ue],encapsulation:2})}return l})();var ge=(()=>{class l{formBuilder=f(nY);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,lm.required],salary:[null,lm.required],weekHours:[null,lm.required],workingDaysPerWeek:[null,lm.required]});}calculate(){let{weekHours:d,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:p}=this.formCalculateHourlyWage.value,s=d/r*i,a=p/s;this.formCalculateHourlyWage.patchValue({hourlyWage:a});}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form"]],standalone:false,decls:15,vars:2,consts:[[3,"formGroup"],[1,"po-font-title"],[1,"po-row"],["formControlName","weekHours","p-label","Week Hours",1,"po-md-6"],["formControlName","workingDaysPerWeek","p-label","Working days per week",1,"po-md-6"],["formControlName","quantityDaysPerMonth","p-label","Quantity days per month",1,"po-md-6"],["formControlName","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-thousand-maxlength","13",1,"po-md-6",3,"p-change"],["formControlName","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-thousand-maxlength","13",1,"po-md-6"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(Sl(0,"form",0)(1,"div",1),Jx(2,"Calculate hourly wage"),sg(),Wl(3,"po-divider"),Sl(4,"div",2),Wl(5,"po-number",3),JA(),Wl(6,"po-number",4),JA(),sg(),Sl(7,"div",2),Wl(8,"po-number",5),JA(),Sl(9,"po-decimal",6),ht("p-change",function(){return i.calculate()}),sg(),JA(),sg(),Sl(10,"div",2),Wl(11,"po-decimal",7),JA(),sg(),Sl(12,"div",2)(13,"po-button",8),ht("p-click",function(){return i.formCalculateHourlyWage.reset()}),sg(),Sl(14,"po-button",9),ht("p-click",function(){return i.calculate()}),sg()()()),r&2&&(tw("formGroup",i.formCalculateHourlyWage),Vp(5),t0(),Vp(),t0(),Vp(2),t0(),Vp(),t0(),Vp(2),t0(),Vp(3),tw("p-disabled",i.formCalculateHourlyWage.invalid));},dependencies:[J9,K9,X9,Rk,Tk,Qt,mv,hhe,Uhe],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Decimal - Hourly Wage Reactive Form"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<form [formGroup]="formCalculateHourlyWage">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-decimal-hourly-wage-reactive-form"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,qe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ge],encapsulation:2})}return l})();var Se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-doc"]],standalone:false,decls:1516,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoDecimalComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),sg(),Sl(24,"p"),Jx(25,"Importante:"),sg(),Sl(26,"ul")(27,"li"),Jx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),sg()(),Sl(29,"h4"),Jx(30,"Tokens customiz\xE1veis"),sg(),Sl(31,"p"),Jx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(33,"br"),Jx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(35,"code"),Jx(36,".po-input"),sg()(),Sl(37,"blockquote")(38,"p"),Jx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Sl(40,"a",6),Jx(41,"Grid System"),sg(),Jx(42,"."),sg()(),Sl(43,"blockquote")(44,"p"),Jx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(46,"a",7),Jx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(48,"."),sg()(),Sl(49,"table")(50,"thead")(51,"tr")(52,"th"),Jx(53,"Propriedade"),sg(),Sl(54,"th"),Jx(55,"Descri\xE7\xE3o"),sg(),Sl(56,"th"),Jx(57,"Valor Padr\xE3o"),sg()()(),Sl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),Jx(62,"Default Values"),sg()(),Wl(63,"td")(64,"td"),sg(),Sl(65,"tr")(66,"td")(67,"code"),Jx(68,"--font-family"),sg()(),Sl(69,"td"),Jx(70,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(71,"td")(72,"code"),Jx(73,"var(--font-family-theme)"),sg()()(),Sl(74,"tr")(75,"td")(76,"code"),Jx(77,"--font-size"),sg()(),Sl(78,"td"),Jx(79,"Tamanho da fonte"),sg(),Sl(80,"td")(81,"code"),Jx(82,"var(--font-size-default)"),sg()()(),Sl(83,"tr")(84,"td")(85,"code"),Jx(86,"--text-color-placeholder"),sg()(),Sl(87,"td"),Jx(88,"Cor do texto placeholder"),sg(),Sl(89,"td")(90,"code"),Jx(91,"var(--color-neutral-light-30)"),sg()()(),Sl(92,"tr")(93,"td")(94,"code"),Jx(95,"--color"),sg()(),Sl(96,"td"),Jx(97,"Cor pincipal do input"),sg(),Sl(98,"td")(99,"code"),Jx(100,"var(--color-neutral-dark-70)"),sg()()(),Sl(101,"tr")(102,"td")(103,"code"),Jx(104,"--background"),sg()(),Sl(105,"td"),Jx(106,"Cor de background"),sg(),Sl(107,"td")(108,"code"),Jx(109,"var(--color-neutral-light-05)"),sg()()(),Sl(110,"tr")(111,"td")(112,"code"),Jx(113,"--padding"),sg()(),Sl(114,"td"),Jx(115,"Preenchimento"),sg(),Sl(116,"td")(117,"code"),Jx(118,"0 0.5rem"),sg()()(),Sl(119,"tr")(120,"td")(121,"code"),Jx(122,"--text-color"),sg()(),Sl(123,"td"),Jx(124,"Cor do texto"),sg(),Sl(125,"td")(126,"code"),Jx(127,"var(--color-neutral-dark-90)"),sg()()(),Sl(128,"tr")(129,"td")(130,"code"),Jx(131,"--field-container-title-justify"),sg()(),Sl(132,"td"),Jx(133,"Alinhamento horizontal do t\xEDtulo ("),Sl(134,"code"),Jx(135,"justify-content"),sg(),Jx(136,")"),sg(),Sl(137,"td")(138,"code"),Jx(139,"space-between"),sg()()(),Sl(140,"tr")(141,"td")(142,"code"),Jx(143,"--field-container-title-flex"),sg()(),Sl(144,"td"),Jx(145,"Flex do t\xEDtulo ("),Sl(146,"code"),Jx(147,"flex"),sg(),Jx(148,")"),sg(),Sl(149,"td")(150,"code"),Jx(151,"1 auto"),sg()()(),Sl(152,"tr")(153,"td")(154,"strong"),Jx(155,"Hover"),sg()(),Wl(156,"td")(157,"td"),sg(),Sl(158,"tr")(159,"td")(160,"code"),Jx(161,"--color-hover"),sg()(),Sl(162,"td"),Jx(163,"Cor principal no estado hover"),sg(),Sl(164,"td")(165,"code"),Jx(166,"var(--color-brand-01-dark)"),sg()()(),Sl(167,"tr")(168,"td")(169,"code"),Jx(170,"--background-hover"),sg()(),Sl(171,"td"),Jx(172,"Cor de background no estado hover"),sg(),Sl(173,"td")(174,"code"),Jx(175,"var(--color-brand-01-lightest)"),sg()()(),Sl(176,"tr")(177,"td")(178,"strong"),Jx(179,"Focused"),sg()(),Wl(180,"td")(181,"td"),sg(),Sl(182,"tr")(183,"td")(184,"code"),Jx(185,"--color-focused"),sg()(),Sl(186,"td"),Jx(187,"Cor principal no estado de focus"),sg(),Sl(188,"td")(189,"code"),Jx(190,"var(--color-action-default)"),sg()()(),Sl(191,"tr")(192,"td")(193,"code"),Jx(194,"--outline-color-focused"),sg()(),Sl(195,"td"),Jx(196,"Cor do outline do estado de focus"),sg(),Sl(197,"td")(198,"code"),Jx(199,"var(--color-action-focus)"),sg()()(),Sl(200,"tr")(201,"td")(202,"strong"),Jx(203,"Disabled"),sg()(),Wl(204,"td")(205,"td"),sg(),Sl(206,"tr")(207,"td")(208,"code"),Jx(209,"--color-disabled"),sg()(),Sl(210,"td"),Jx(211,"Cor principal no estado disabled"),sg(),Sl(212,"td")(213,"code"),Jx(214,"var(--color-neutral-light-30)"),sg()()(),Sl(215,"tr")(216,"td")(217,"code"),Jx(218,"--background-disabled"),sg()(),Sl(219,"td"),Jx(220,"Cor de background no estado disabled"),sg(),Sl(221,"td")(222,"code"),Jx(223,"var(--color-neutral-light-20)"),sg()()(),Sl(224,"tr")(225,"td")(226,"code"),Jx(227,"--text-color-disabled"),sg()(),Sl(228,"td"),Jx(229,"Cor do texto no estado disabled"),sg(),Sl(230,"td")(231,"code"),Jx(232,"var(--color-neutral-dark-70)"),sg()()()()(),Sl(233,"p"),Wl(234,"br"),Jx(235," - O "),Sl(236,"code"),Jx(237,"po-decimal"),sg(),Jx(238," \xE9 um "),Sl(239,"em"),Jx(240,"input"),sg(),Jx(241," espec\xEDfico para receber apenas n\xFAmeros decimais, por isso recebe as seguintes caracter\xEDsticas:"),sg(),Sl(242,"ul")(243,"li"),Jx(244,"Aceita apenas n\xFAmeros;"),sg(),Sl(245,"li"),Jx(246,"Utiliza ',' como separador de decimal;"),sg(),Sl(247,"li"),Jx(248,"Utiliza '.' para separa\xE7\xE3o de milhar;"),sg(),Sl(249,"li"),Jx(250,"\xC9 poss\xEDvel configurar a quantidade de casas decimais e a quantidade de digitos do campo."),sg()(),Sl(251,"blockquote")(252,"p")(253,"strong"),Jx(254,"Importante:"),sg(),Jx(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),Sl(256,"code"),Jx(257,"32 bits"),sg(),Jx(258,`, e para que os valores comportem-se devidamente,
o `),Sl(259,"code"),Jx(260,"po-decimal"),sg(),Jx(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),Sl(262,"code"),Jx(263,"p-decimals-length"),sg(),Jx(264," e "),Sl(265,"code"),Jx(266,"p-thousand-maxlength"),sg(),Jx(267,"."),sg()()(),Sl(268,"div",8)(269,"h4",9),Jx(270,"Seletor"),sg(),Sl(271,"pre",10),Jx(272,`<po-decimal
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
`),sg()(),Sl(273,"h4",11),Jx(274,"Propriedades"),sg(),Sl(275,"table",12)(276,"tr",13)(277,"th",14),Jx(278,"Nome"),sg(),Sl(279,"th",14),Jx(280,"Tipo"),sg(),Sl(281,"th",14),Jx(282,"Padr\xE3o"),sg(),Sl(283,"th",14),Jx(284,"Descri\xE7\xE3o"),sg()(),Sl(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),Jx(289," (p-additional-help)"),Wl(290,"br"),sg()(),Sl(291,"div",19),Jx(292,"Deprecated"),sg()(),Sl(293,"td",20)(294,"code",21),Jx(295,"EventEmitter"),sg()(),Sl(296,"td",22),Jx(297,"-"),sg(),Sl(298,"td",23)(299,"em")(300,"strong"),Jx(301,"(opcional)"),sg()(),Sl(302,"p"),Jx(303,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(304,"blockquote")(305,"p"),Jx(306,"Essa propriedade est\xE1 "),Sl(307,"strong"),Jx(308,"depreciada"),sg(),Jx(309," e ser\xE1 removida na vers\xE3o "),Sl(310,"code"),Jx(311,"23.x.x"),sg(),Jx(312,". Recomendamos utilizar a propriedade "),Sl(313,"code"),Jx(314,"p-helper"),sg(),Jx(315," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(316,"tr",15)(317,"td",16)(318,"div",24)(319,"span",25),Jx(320," p-additional-help-tooltip"),Wl(321,"br"),sg()(),Sl(322,"div",19),Jx(323,"Deprecated"),sg()(),Sl(324,"td",20)(325,"code",26),Jx(326,"string"),sg()(),Sl(327,"td",22),Jx(328,"-"),sg(),Sl(329,"td",23)(330,"em")(331,"strong"),Jx(332,"(opcional)"),sg()(),Sl(333,"p"),Jx(334,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(335,"code"),Jx(336,"po-helper"),sg(),Jx(337,`.
`),Sl(338,"strong"),Jx(339,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(340,"blockquote")(341,"p"),Jx(342,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Sl(343,"blockquote")(344,"p"),Jx(345,"Essa propriedade est\xE1 "),Sl(346,"strong"),Jx(347,"depreciada"),sg(),Jx(348," e ser\xE1 removida na vers\xE3o "),Sl(349,"code"),Jx(350,"23.x.x"),sg(),Jx(351,". Recomendamos utilizar a propriedade "),Sl(352,"code"),Jx(353,"p-helper"),sg(),Jx(354," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(355,"tr",15)(356,"td",16)(357,"div",24)(358,"span",25),Jx(359," p-append-in-body"),Wl(360,"br"),sg()()(),Sl(361,"td",20)(362,"code",27),Jx(363,"boolean"),sg()(),Sl(364,"td",22)(365,"p")(366,"code"),Jx(367,"false"),sg()()(),Sl(368,"td",23)(369,"em")(370,"strong"),Jx(371,"(opcional)"),sg()(),Sl(372,"p"),Jx(373,"Define que o popover ("),Sl(374,"code"),Jx(375,"p-helper"),sg(),Jx(376," e/ou "),Sl(377,"code"),Jx(378,"p-error-limit"),sg(),Jx(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Sl(380,"blockquote")(381,"p"),Jx(382,"Quando utilizado com "),Sl(383,"code"),Jx(384,"p-helper"),sg(),Jx(385,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(386,"tr",15)(387,"td",16)(388,"div",24)(389,"span",25),Jx(390," p-auto-focus"),Wl(391,"br"),sg()()(),Sl(392,"td",20)(393,"code",27),Jx(394,"boolean"),sg()(),Sl(395,"td",22)(396,"p")(397,"code"),Jx(398,"false"),sg()()(),Sl(399,"td",23)(400,"em")(401,"strong"),Jx(402,"(opcional)"),sg()(),Sl(403,"p"),Jx(404,"Aplica foco no elemento ao ser iniciado."),sg(),Sl(405,"blockquote")(406,"p"),Jx(407,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Sl(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),Jx(412," (p-blur)"),Wl(413,"br"),sg()()(),Sl(414,"td",20)(415,"code",21),Jx(416,"EventEmitter"),sg()(),Sl(417,"td",22),Jx(418,"-"),sg(),Sl(419,"td",23)(420,"em")(421,"strong"),Jx(422,"(opcional)"),sg()(),Sl(423,"p"),Jx(424,"Evento disparado ao sair do campo."),sg()()(),Sl(425,"tr",15)(426,"td",16)(427,"div",17)(428,"span",18),Jx(429," (p-change)"),Wl(430,"br"),sg()()(),Sl(431,"td",20)(432,"code",21),Jx(433,"EventEmitter"),sg()(),Sl(434,"td",22),Jx(435,"-"),sg(),Sl(436,"td",23)(437,"em")(438,"strong"),Jx(439,"(opcional)"),sg()(),Sl(440,"p"),Jx(441,"Evento disparado ao alterar valor e deixar o campo."),sg()()(),Sl(442,"tr",15)(443,"td",16)(444,"div",17)(445,"span",18),Jx(446," (p-change-model)"),Wl(447,"br"),sg()()(),Sl(448,"td",20)(449,"code",21),Jx(450,"EventEmitter"),sg()(),Sl(451,"td",22),Jx(452,"-"),sg(),Sl(453,"td",23)(454,"em")(455,"strong"),Jx(456,"(opcional)"),sg()(),Sl(457,"p"),Jx(458,"Evento disparado ao alterar valor do model."),sg()()(),Sl(459,"tr",15)(460,"td",16)(461,"div",24)(462,"span",25),Jx(463,"p-clean"),Wl(464,"br"),sg()()(),Sl(465,"td",20)(466,"code",27),Jx(467,"boolean"),sg()(),Sl(468,"td",22),Jx(469,"-"),sg(),Sl(470,"td",23)(471,"em")(472,"strong"),Jx(473,"(opcional)"),sg()(),Sl(474,"p"),Jx(475,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg()()(),Sl(476,"tr",15)(477,"td",16)(478,"div",24)(479,"span",25),Jx(480," p-compact-label"),Wl(481,"br"),sg()()(),Sl(482,"td",20)(483,"code",27),Jx(484,"boolean"),sg()(),Sl(485,"td",22)(486,"p")(487,"code"),Jx(488,"false"),sg()()(),Sl(489,"td",23)(490,"em")(491,"strong"),Jx(492,"(opcional)"),sg()(),Sl(493,"p"),Jx(494,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(495,"p"),Jx(496,"Quando habilitado ("),Sl(497,"code"),Jx(498,"true"),sg(),Jx(499,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(500,"ul")(501,"li")(502,"code"),Jx(503,"po-label"),sg()(),Sl(504,"li")(505,"code"),Jx(506,"p-requirement (showRequired)"),sg()(),Sl(507,"li")(508,"code"),Jx(509,"po-helper"),sg()()(),Sl(510,"p"),Jx(511,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(512,"p"),Jx(513,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(514,"ul")(515,"li")(516,"code"),Jx(517,"--field-container-title-justify"),sg()(),Sl(518,"li")(519,"code"),Jx(520,"--field-container-title-flex"),sg()()(),Sl(521,"p"),Jx(522,"Exemplo:"),sg(),Sl(523,"pre")(524,"code"),Jx(525,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(526,"p"),Jx(527,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(528,"tr",15)(529,"td",16)(530,"div",24)(531,"span",25),Jx(532," p-decimals-length"),Wl(533,"br"),sg()()(),Sl(534,"td",20)(535,"code",28),Jx(536,"number"),sg()(),Sl(537,"td",22)(538,"p")(539,"code"),Jx(540,"2"),sg()()(),Sl(541,"td",23)(542,"em")(543,"strong"),Jx(544,"(opcional)"),sg()(),Sl(545,"p"),Jx(546,"Quantidade m\xE1xima de casas decimais."),sg(),Sl(547,"blockquote")(548,"p")(549,"strong"),Jx(550,"Importante:"),sg()()(),Sl(551,"ul")(552,"li"),Jx(553,"O valor m\xE1ximo permitido \xE9 15;"),sg(),Sl(554,"li"),Jx(555,"A soma total de "),Sl(556,"code"),Jx(557,"p-decimals-length"),sg(),Jx(558," com "),Sl(559,"code"),Jx(560,"p-thousand-maxlength"),sg(),Jx(561," limita-se \xE0 16;"),sg(),Sl(562,"li"),Jx(563,"Esta propriedade sobrep\xF5e apenas o valor "),Sl(564,"strong"),Jx(565,"padr\xE3o"),sg(),Jx(566," de "),Sl(567,"code"),Jx(568,"p-thousand-maxlength"),sg(),Jx(569,";"),sg(),Sl(570,"li"),Jx(571,"Caso "),Sl(572,"code"),Jx(573,"p-thousand-maxlength"),sg(),Jx(574," tenha um valor definido, esta propriedade poder\xE1 receber apenas o valor restante do limite total (16)."),sg()()()(),Sl(575,"tr",15)(576,"td",16)(577,"div",24)(578,"span",25),Jx(579,"p-disabled"),Wl(580,"br"),sg()()(),Sl(581,"td",20)(582,"code",27),Jx(583,"boolean"),sg()(),Sl(584,"td",22)(585,"p")(586,"code"),Jx(587,"false"),sg()()(),Sl(588,"td",23)(589,"em")(590,"strong"),Jx(591,"(opcional)"),sg()(),Sl(592,"p"),Jx(593,"Se verdadeiro, desabilita o campo."),sg()()(),Sl(594,"tr",15)(595,"td",16)(596,"div",24)(597,"span",25),Jx(598," p-emit-all-changes"),Wl(599,"br"),sg()()(),Sl(600,"td",20)(601,"code",27),Jx(602,"boolean"),sg()(),Sl(603,"td",22)(604,"p")(605,"code"),Jx(606,"false"),sg()()(),Sl(607,"td",23)(608,"em")(609,"strong"),Jx(610,"(opcional)"),sg()(),Sl(611,"p"),Jx(612,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),sg()()(),Sl(613,"tr",15)(614,"td",16)(615,"div",17)(616,"span",18),Jx(617," (p-enter)"),Wl(618,"br"),sg()()(),Sl(619,"td",20)(620,"code",21),Jx(621,"EventEmitter"),sg()(),Sl(622,"td",22),Jx(623,"-"),sg(),Sl(624,"td",23)(625,"em")(626,"strong"),Jx(627,"(opcional)"),sg()(),Sl(628,"p"),Jx(629,"Evento disparado ao entrar do campo."),sg()()(),Sl(630,"tr",15)(631,"td",16)(632,"div",24)(633,"span",25),Jx(634," p-error-async-properties"),Wl(635,"br"),sg()()(),Sl(636,"td",20)(637,"code",29),Jx(638,"ErrorAsyncProperties"),sg()(),Sl(639,"td",22),Jx(640,"-"),sg(),Sl(641,"td",23)(642,"em")(643,"strong"),Jx(644,"(opcional)"),sg()(),Sl(645,"p"),Jx(646,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Sl(647,"code"),Jx(648,"Reactive Forms"),sg(),Jx(649,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Sl(650,"code"),Jx(651,"asyncValidators"),sg(),Jx(652,"."),sg()()(),Sl(653,"tr",15)(654,"td",16)(655,"div",24)(656,"span",25),Jx(657," p-error-limit"),Wl(658,"br"),sg()()(),Sl(659,"td",20)(660,"code",27),Jx(661,"boolean"),sg()(),Sl(662,"td",22)(663,"p")(664,"code"),Jx(665,"false"),sg()()(),Sl(666,"td",23)(667,"em")(668,"strong"),Jx(669,"(opcional)"),sg()(),Sl(670,"p"),Jx(671,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Sl(672,"blockquote")(673,"p"),Jx(674,"Caso essa propriedade seja definida como "),Sl(675,"code"),Jx(676,"true"),sg(),Jx(677,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Sl(678,"tr",15)(679,"td",16)(680,"div",24)(681,"span",25),Jx(682," p-error-pattern"),Wl(683,"br"),sg()()(),Sl(684,"td",20)(685,"code",26),Jx(686,"string"),sg()(),Sl(687,"td",22),Jx(688,"-"),sg(),Sl(689,"td",23)(690,"em")(691,"strong"),Jx(692,"(opcional)"),sg()(),Sl(693,"p"),Jx(694,"Mensagem que ser\xE1 apresentada quando o "),Sl(695,"code"),Jx(696,"pattern"),sg(),Jx(697," ou a m\xE1scara n\xE3o for satisfeita."),sg(),Sl(698,"blockquote")(699,"p"),Jx(700,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Sl(701,"code"),Jx(702,"p-required-field-error-message"),sg(),Jx(703," em conjunto."),sg()()()(),Sl(704,"tr",15)(705,"td",16)(706,"div",24)(707,"span",25),Jx(708," p-help"),Wl(709,"br"),sg()()(),Sl(710,"td",20)(711,"code",26),Jx(712,"string"),sg()(),Sl(713,"td",22),Jx(714,"-"),sg(),Sl(715,"td",23)(716,"em")(717,"strong"),Jx(718,"(opcional)"),sg()(),Sl(719,"p"),Jx(720,"Texto de apoio do campo."),sg()()(),Sl(721,"tr",15)(722,"td",16)(723,"div",24)(724,"span",25),Jx(725," p-icon"),Wl(726,"br"),sg()()(),Sl(727,"td",20)(728,"code",26),Jx(729,"string "),sg(),Sl(730,"code",30),Jx(731," TemplateRef<void>"),sg()(),Sl(732,"td",22),Jx(733,"-"),sg(),Sl(734,"td",23)(735,"em")(736,"strong"),Jx(737,"(opcional)"),sg()(),Sl(738,"p"),Jx(739,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Sl(740,"p"),Jx(741,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Sl(742,"a",31),Jx(743,"Biblioteca de \xEDcones"),sg(),Jx(744,". conforme exemplo abaixo:"),sg(),Sl(745,"pre")(746,"code"),Jx(747,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),sg()(),Sl(748,"p"),Jx(749,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Sl(750,"em"),Jx(751,"Font Awesome"),sg(),Jx(752,", da seguinte forma:"),sg(),Sl(753,"pre")(754,"code"),Jx(755,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),sg()(),Sl(756,"p"),Jx(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Sl(758,"code"),Jx(759,"TemplateRef"),sg(),Jx(760,", conforme exemplo abaixo:"),sg(),Sl(761,"pre")(762,"code"),Jx(763,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Sl(764,"blockquote")(765,"p"),Jx(766,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Sl(767,"code"),Jx(768,"font-size: inherit"),sg(),Jx(769," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Sl(770,"tr",15)(771,"td",16)(772,"div",17)(773,"span",18),Jx(774," (p-keydown)"),Wl(775,"br"),sg()()(),Sl(776,"td",20)(777,"code",21),Jx(778,"EventEmitter"),sg()(),Sl(779,"td",22),Jx(780,"-"),sg(),Sl(781,"td",23)(782,"em")(783,"strong"),Jx(784,"(opcional)"),sg()(),Sl(785,"p"),Jx(786,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(787,"code"),Jx(788,"KeyboardEvent"),sg(),Jx(789," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(790,"tr",15)(791,"td",16)(792,"div",24)(793,"span",25),Jx(794," p-label"),Wl(795,"br"),sg()()(),Sl(796,"td",20)(797,"code",26),Jx(798,"string"),sg()(),Sl(799,"td",22),Jx(800,"-"),sg(),Sl(801,"td",23)(802,"em")(803,"strong"),Jx(804,"(opcional)"),sg()(),Sl(805,"p"),Jx(806,"R\xF3tulo do campo."),sg()()(),Sl(807,"tr",15)(808,"td",16)(809,"div",24)(810,"span",25),Jx(811," p-label-text-wrap"),Wl(812,"br"),sg()()(),Sl(813,"td",20)(814,"code",27),Jx(815,"boolean"),sg()(),Sl(816,"td",22)(817,"p")(818,"code"),Jx(819,"false"),sg()()(),Sl(820,"td",23)(821,"em")(822,"strong"),Jx(823,"(opcional)"),sg()(),Sl(824,"p"),Jx(825,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(826,"code"),Jx(827,"p-label"),sg(),Jx(828,". Quando "),Sl(829,"code"),Jx(830,"p-label-text-wrap"),sg(),Jx(831,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Sl(832,"tr",15)(833,"td",16)(834,"div",24)(835,"span",25),Jx(836," p-loading"),Wl(837,"br"),sg()()(),Sl(838,"td",20)(839,"code",27),Jx(840,"boolean"),sg()(),Sl(841,"td",22)(842,"p")(843,"code"),Jx(844,"false"),sg()()(),Sl(845,"td",23)(846,"em")(847,"strong"),Jx(848,"(opcional)"),sg()(),Sl(849,"p"),Jx(850,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Sl(851,"tr",15)(852,"td",16)(853,"div",24)(854,"span",25),Jx(855," p-locale"),Wl(856,"br"),sg()()(),Sl(857,"td",20)(858,"code",26),Jx(859,"string"),sg()(),Sl(860,"td",22),Jx(861,"-"),sg(),Sl(862,"td",23)(863,"em")(864,"strong"),Jx(865,"(opcional)"),sg()(),Sl(866,"p"),Jx(867,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),Sl(868,"a",32)(869,"code"),Jx(870,"I18n"),sg()()(),Sl(871,"blockquote")(872,"p"),Jx(873,"Para ver quais linguagens suportadas acesse "),Sl(874,"a",32)(875,"code"),Jx(876,"I18n"),sg()()()()()(),Sl(877,"tr",15)(878,"td",16)(879,"div",24)(880,"span",25),Jx(881,"p-mask"),Wl(882,"br"),sg()()(),Sl(883,"td",20)(884,"code",26),Jx(885,"string"),sg()(),Sl(886,"td",22),Jx(887,"-"),sg(),Sl(888,"td",23)(889,"em")(890,"strong"),Jx(891,"(opcional)"),sg()(),Sl(892,"p"),Jx(893,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),sg()()(),Sl(894,"tr",15)(895,"td",16)(896,"div",24)(897,"span",25),Jx(898,"p-mask-format-model"),Wl(899,"br"),sg()()(),Sl(900,"td",20)(901,"code",27),Jx(902,"boolean"),sg()(),Sl(903,"td",22)(904,"p")(905,"code"),Jx(906,"false"),sg()()(),Sl(907,"td",23)(908,"em")(909,"strong"),Jx(910,"(opcional)"),sg()(),Sl(911,"p"),Jx(912,"Indica se o "),Sl(913,"code"),Jx(914,"model"),sg(),Jx(915," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),sg()()(),Sl(916,"tr",15)(917,"td",16)(918,"div",24)(919,"span",25),Jx(920," p-mask-no-length-validation"),Wl(921,"br"),sg()()(),Sl(922,"td",20)(923,"code",27),Jx(924,"boolean"),sg()(),Sl(925,"td",22)(926,"p")(927,"code"),Jx(928,"false"),sg()()(),Sl(929,"td",23)(930,"p"),Jx(931,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Sl(932,"code"),Jx(933,"minLength"),sg(),Jx(934,") e m\xE1ximo ("),Sl(935,"code"),Jx(936,"maxLength"),sg(),Jx(937,") quando h\xE1 uma m\xE1scara ("),Sl(938,"code"),Jx(939,"p-mask"),sg(),Jx(940,") definida."),sg(),Sl(941,"ul")(942,"li"),Jx(943,"Quando "),Sl(944,"code"),Jx(945,"true"),sg(),Jx(946,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Sl(947,"li"),Jx(948,"Quando "),Sl(949,"code"),Jx(950,"false"),sg(),Jx(951,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Sl(952,"blockquote")(953,"p"),Jx(954,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Sl(955,"code"),Jx(956,"p-mask-format-model"),sg(),Jx(957,"."),sg()(),Sl(958,"p"),Jx(959,"Exemplo:"),sg(),Sl(960,"pre")(961,"code"),Jx(962,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),sg()(),Sl(963,"ul")(964,"li"),Jx(965,"Entrada: "),Sl(966,"code"),Jx(967,"123-456"),sg(),Jx(968," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Sl(969,"code"),Jx(970,"-"),sg(),Jx(971,"."),sg()()()(),Sl(972,"tr",15)(973,"td",16)(974,"div",24)(975,"span",25),Jx(976," p-max"),Wl(977,"br"),sg()()(),Sl(978,"td",20)(979,"code",28),Jx(980,"number"),sg()(),Sl(981,"td",22),Jx(982,"-"),sg(),Sl(983,"td",23)(984,"em")(985,"strong"),Jx(986,"(opcional)"),sg()(),Sl(987,"p"),Jx(988,"Valor m\xE1ximo."),sg()()(),Sl(989,"tr",15)(990,"td",16)(991,"div",24)(992,"span",25),Jx(993," p-maxlength"),Wl(994,"br"),sg()()(),Sl(995,"td",20)(996,"code",28),Jx(997,"number"),sg()(),Sl(998,"td",22),Jx(999,"-"),sg(),Sl(1e3,"td",23)(1001,"em")(1002,"strong"),Jx(1003,"(opcional)"),sg()(),Sl(1004,"p"),Jx(1005,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),sg()()(),Sl(1006,"tr",15)(1007,"td",16)(1008,"div",24)(1009,"span",25),Jx(1010," p-min"),Wl(1011,"br"),sg()()(),Sl(1012,"td",20)(1013,"code",28),Jx(1014,"number"),sg()(),Sl(1015,"td",22),Jx(1016,"-"),sg(),Sl(1017,"td",23)(1018,"em")(1019,"strong"),Jx(1020,"(opcional)"),sg()(),Sl(1021,"p"),Jx(1022,"Valor m\xEDnimo."),sg()()(),Sl(1023,"tr",15)(1024,"td",16)(1025,"div",24)(1026,"span",25),Jx(1027," p-minlength"),Wl(1028,"br"),sg()()(),Sl(1029,"td",20)(1030,"code",28),Jx(1031,"number"),sg()(),Sl(1032,"td",22),Jx(1033,"-"),sg(),Sl(1034,"td",23)(1035,"em")(1036,"strong"),Jx(1037,"(opcional)"),sg()(),Sl(1038,"p"),Jx(1039,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),sg()()(),Sl(1040,"tr",15)(1041,"td",16)(1042,"div",24)(1043,"span",25),Jx(1044," name"),Wl(1045,"br"),sg()()(),Sl(1046,"td",20)(1047,"code",26),Jx(1048,"string"),sg()(),Sl(1049,"td",22),Jx(1050,"-"),sg(),Sl(1051,"td",23)(1052,"p"),Jx(1053,"Nome e identificador do campo."),sg()()(),Sl(1054,"tr",15)(1055,"td",16)(1056,"div",24)(1057,"span",25),Jx(1058," p-no-autocomplete"),Wl(1059,"br"),sg()()(),Sl(1060,"td",20)(1061,"code",27),Jx(1062,"boolean"),sg()(),Sl(1063,"td",22)(1064,"p")(1065,"code"),Jx(1066,"false"),sg()()(),Sl(1067,"td",23)(1068,"em")(1069,"strong"),Jx(1070,"(opcional)"),sg()(),Sl(1071,"p"),Jx(1072,"Define a propriedade nativa "),Sl(1073,"code"),Jx(1074,"autocomplete"),sg(),Jx(1075," do campo como "),Sl(1076,"code"),Jx(1077,"off"),sg(),Jx(1078,"."),sg(),Sl(1079,"blockquote")(1080,"p"),Jx(1081,"No componente "),Sl(1082,"code"),Jx(1083,"po-password"),sg(),Jx(1084," ser\xE1 definido como "),Sl(1085,"code"),Jx(1086,"new-password"),sg(),Jx(1087,"."),sg()(),Sl(1088,"p"),Jx(1089,"Nos componentes "),Sl(1090,"code"),Jx(1091,"po-password"),sg(),Jx(1092," e "),Sl(1093,"code"),Jx(1094,"po-login"),sg(),Jx(1095," o valor padr\xE3o ser\xE1 "),Sl(1096,"code"),Jx(1097,"true"),sg(),Jx(1098,"."),sg()()(),Sl(1099,"tr",15)(1100,"td",16)(1101,"div",24)(1102,"span",25),Jx(1103," p-optional"),Wl(1104,"br"),sg()()(),Sl(1105,"td",20)(1106,"code",27),Jx(1107,"boolean"),sg()(),Sl(1108,"td",22)(1109,"p")(1110,"code"),Jx(1111,"false"),sg()()(),Sl(1112,"td",23)(1113,"em")(1114,"strong"),Jx(1115,"(opcional)"),sg()(),Sl(1116,"p"),Jx(1117,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Sl(1118,"blockquote")(1119,"p"),Jx(1120,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(1121,"ul")(1122,"li"),Jx(1123,"O campo conter "),Sl(1124,"code"),Jx(1125,"p-required"),sg(),Jx(1126,";"),sg(),Sl(1127,"li"),Jx(1128,"N\xE3o possuir "),Sl(1129,"code"),Jx(1130,"p-help"),sg(),Jx(1131," e/ou "),Sl(1132,"code"),Jx(1133,"p-label"),sg(),Jx(1134,"."),sg()()()(),Sl(1135,"tr",15)(1136,"td",16)(1137,"div",24)(1138,"span",25),Jx(1139,"p-pattern"),Wl(1140,"br"),sg()()(),Sl(1141,"td",20)(1142,"code",26),Jx(1143,"string"),sg()(),Sl(1144,"td",22),Jx(1145,"-"),sg(),Sl(1146,"td",23)(1147,"em")(1148,"strong"),Jx(1149,"(opcional)"),sg()(),Sl(1150,"p"),Jx(1151,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Sl(1152,"code"),Jx(1153,"(p-mask)"),sg(),Jx(1154,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),sg()()(),Sl(1155,"tr",15)(1156,"td",16)(1157,"div",24)(1158,"span",25),Jx(1159," p-placeholder"),Wl(1160,"br"),sg()()(),Sl(1161,"td",20)(1162,"code",26),Jx(1163,"string"),sg()(),Sl(1164,"td",22)(1165,"p"),Jx(1166,"''"),sg()(),Sl(1167,"td",23)(1168,"em")(1169,"strong"),Jx(1170,"(opcional)"),sg()(),Sl(1171,"p"),Jx(1172,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Sl(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),Jx(1177," p-helper"),Wl(1178,"br"),sg()()(),Sl(1179,"td",20)(1180,"code",33),Jx(1181,"PoHelperOptions "),sg(),Sl(1182,"code",26),Jx(1183," string"),sg()(),Sl(1184,"td",22),Jx(1185,"-"),sg(),Sl(1186,"td",23)(1187,"em")(1188,"strong"),Jx(1189,"(opcional)"),sg()(),Sl(1190,"p"),Jx(1191,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1192,"code"),Jx(1193,"p-label"),sg(),Jx(1194," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1195,"code"),Jx(1196,"p-label"),sg(),Jx(1197,"."),sg(),Sl(1198,"blockquote")(1199,"p"),Jx(1200,"Para mais informa\xE7\xF5es acesse: "),Sl(1201,"a",34),Jx(1202,"https://po-ui.io/documentation/po-helper"),sg(),Jx(1203,"."),sg()(),Sl(1204,"blockquote")(1205,"p"),Jx(1206,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1207,"code"),Jx(1208,"p-additional-help-tooltip"),sg(),Jx(1209," e "),Sl(1210,"code"),Jx(1211,"p-additional-help"),sg(),Jx(1212,") ser\xE1 ignorado."),sg()()()(),Sl(1213,"tr",15)(1214,"td",16)(1215,"div",24)(1216,"span",25),Jx(1217,"p-readonly"),Wl(1218,"br"),sg()()(),Sl(1219,"td",20)(1220,"code",27),Jx(1221,"boolean"),sg()(),Sl(1222,"td",22),Jx(1223,"-"),sg(),Sl(1224,"td",23)(1225,"em")(1226,"strong"),Jx(1227,"(opcional)"),sg()(),Sl(1228,"p"),Jx(1229,"Indica que o campo ser\xE1 somente leitura."),sg()()(),Sl(1230,"tr",15)(1231,"td",16)(1232,"div",24)(1233,"span",25),Jx(1234,"p-required"),Wl(1235,"br"),sg()()(),Sl(1236,"td",20)(1237,"code",27),Jx(1238,"boolean"),sg()(),Sl(1239,"td",22)(1240,"p")(1241,"code"),Jx(1242,"false"),sg()()(),Sl(1243,"td",23)(1244,"em")(1245,"strong"),Jx(1246,"(opcional)"),sg()(),Sl(1247,"p"),Jx(1248,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Sl(1249,"blockquote")(1250,"p"),Jx(1251,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Sl(1252,"code"),Jx(1253,"(p-disabled)"),sg(),Jx(1254,"."),sg()()()(),Sl(1255,"tr",15)(1256,"td",16)(1257,"div",24)(1258,"span",25),Jx(1259," p-required-field-error-message"),Wl(1260,"br"),sg()()(),Sl(1261,"td",20)(1262,"code",27),Jx(1263,"boolean"),sg()(),Sl(1264,"td",22)(1265,"p")(1266,"code"),Jx(1267,"false"),sg()()(),Sl(1268,"td",23)(1269,"em")(1270,"strong"),Jx(1271,"(opcional)"),sg()(),Sl(1272,"p"),Jx(1273,"Exibe a mensagem setada na propriedade "),Sl(1274,"code"),Jx(1275,"p-error-pattern"),sg(),Jx(1276," se o campo estiver vazio e for requerido."),sg(),Sl(1277,"blockquote")(1278,"p"),Jx(1279,"Necess\xE1rio que a propriedade "),Sl(1280,"code"),Jx(1281,"p-required"),sg(),Jx(1282," esteja habilitada."),sg()()()(),Sl(1283,"tr",15)(1284,"td",16)(1285,"div",24)(1286,"span",25),Jx(1287," p-show-required"),Wl(1288,"br"),sg()()(),Sl(1289,"td",20)(1290,"code",27),Jx(1291,"boolean"),sg()(),Sl(1292,"td",22),Jx(1293,"-"),sg(),Sl(1294,"td",23)(1295,"p"),Jx(1296,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Sl(1297,"blockquote")(1298,"p"),Jx(1299,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(1300,"ul")(1301,"li"),Jx(1302,"N\xE3o possuir "),Sl(1303,"code"),Jx(1304,"p-help"),sg(),Jx(1305," e/ou "),Sl(1306,"code"),Jx(1307,"p-label"),sg(),Jx(1308,"."),sg()()()(),Sl(1309,"tr",15)(1310,"td",16)(1311,"div",24)(1312,"span",25),Jx(1313," p-size"),Wl(1314,"br"),sg()()(),Sl(1315,"td",20)(1316,"code",26),Jx(1317,"string"),sg()(),Sl(1318,"td",22)(1319,"p")(1320,"code"),Jx(1321,"medium"),sg()()(),Sl(1322,"td",23)(1323,"em")(1324,"strong"),Jx(1325,"(opcional)"),sg()(),Sl(1326,"p"),Jx(1327,"Define o tamanho do componente:"),sg(),Sl(1328,"ul")(1329,"li")(1330,"code"),Jx(1331,"small"),sg(),Jx(1332,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(1333,"li")(1334,"code"),Jx(1335,"medium"),sg(),Jx(1336,": altura do input como 44px."),sg()(),Sl(1337,"blockquote")(1338,"p"),Jx(1339,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1340,"code"),Jx(1341,"medium"),sg(),Jx(1342,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1343,"a",35),Jx(1344,"po-theme"),sg(),Jx(1345,"."),sg()()()(),Sl(1346,"tr",15)(1347,"td",16)(1348,"div",24)(1349,"span",25),Jx(1350," p-thousand-maxlength"),Wl(1351,"br"),sg()()(),Sl(1352,"td",20)(1353,"code",28),Jx(1354,"number"),sg()(),Sl(1355,"td",22)(1356,"p")(1357,"code"),Jx(1358,"13"),sg()()(),Sl(1359,"td",23)(1360,"em")(1361,"strong"),Jx(1362,"(opcional)"),sg()(),Sl(1363,"p"),Jx(1364,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal."),sg(),Sl(1365,"blockquote")(1366,"p")(1367,"strong"),Jx(1368,"Importante:"),sg()()(),Sl(1369,"ul")(1370,"li"),Jx(1371,"O valor m\xE1ximo permitido \xE9 13;"),sg(),Sl(1372,"li"),Jx(1373,"A soma total de "),Sl(1374,"code"),Jx(1375,"p-decimals-length"),sg(),Jx(1376," com "),Sl(1377,"code"),Jx(1378,"p-thousand-maxlength"),sg(),Jx(1379," limita-se \xE0 16;"),sg(),Sl(1380,"li"),Jx(1381,"Esta propriedade sobrep\xF5e o valor definido em "),Sl(1382,"code"),Jx(1383,"p-decimals-length"),sg(),Jx(1384,"."),sg()()()(),Sl(1385,"tr",15)(1386,"td",16)(1387,"div",24)(1388,"span",25),Jx(1389," p-upper-case"),Wl(1390,"br"),sg()()(),Sl(1391,"td",20)(1392,"code",27),Jx(1393,"boolean"),sg()(),Sl(1394,"td",22),Jx(1395,"-"),sg(),Sl(1396,"td",23)(1397,"p"),Jx(1398,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),sg()()()(),Sl(1399,"h3",11),Jx(1400,"M\xE9todos"),sg(),Sl(1401,"table",36)(1402,"tr",15)(1403,"th",37)(1404,"div",24)(1405,"h4")(1406,"span",25),Jx(1407," showAdditionalHelp "),sg()()()()(),Sl(1408,"tr",23)(1409,"td",23)(1410,"p"),Jx(1411,"M\xE9todo que exibe "),Sl(1412,"code"),Jx(1413,"p-helper"),sg(),Jx(1414," ou executa a a\xE7\xE3o definida em "),Sl(1415,"code"),Jx(1416,"p-helper{eventOnClick}"),sg(),Jx(1417," ou em "),Sl(1418,"code"),Jx(1419,"p-additionalHelp"),sg(),Jx(1420,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1421,"code"),Jx(1422,"p-keydown"),sg(),Jx(1423,"."),sg(),Sl(1424,"blockquote")(1425,"p"),Jx(1426,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1427,"code"),Jx(1428,"po-helper"),sg(),Jx(1429," quando o componente estiver com foco."),sg()(),Sl(1430,"pre")(1431,"code"),Jx(1432,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),sg()(),Sl(1433,"pre")(1434,"code"),Jx(1435,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(1436,"br"),Sl(1437,"table",36)(1438,"tr",15)(1439,"th",37)(1440,"div",24)(1441,"h4")(1442,"span",25),Jx(1443," focus "),sg()()()()(),Sl(1444,"tr",23)(1445,"td",23)(1446,"p"),Jx(1447,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(1448,"p"),Jx(1449,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(1450,"pre")(1451,"code"),Jx(1452,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),sg()()()()(),Wl(1453,"br"),Sl(1454,"h3"),Jx(1455,"Interfaces"),sg(),Sl(1456,"h4",38)(1457,"code",5),Jx(1458,"ErrorAsyncProperties"),sg()(),Sl(1459,"div",2)(1460,"p"),Jx(1461,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),sg()(),Sl(1462,"h4",11),Jx(1463,"Propriedades"),sg(),Sl(1464,"table",12)(1465,"tr",13)(1466,"th",14),Jx(1467,"Nome"),sg(),Sl(1468,"th",14),Jx(1469,"Tipo"),sg(),Sl(1470,"th",14),Jx(1471,"Descri\xE7\xE3o"),sg()(),Sl(1472,"tr",15)(1473,"td",16)(1474,"div",24)(1475,"span",25),Jx(1476," errorAsync"),Wl(1477,"br"),sg()()(),Sl(1478,"td",20)(1479,"code",39),Jx(1480,"(value) => Observable<boolean>"),sg()(),Sl(1481,"td",23)(1482,"p"),Jx(1483,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(1484,"code"),Jx(1485,"change"),sg(),Jx(1486," ou "),Sl(1487,"code"),Jx(1488,"change-model"),sg(),Jx(1489,", dependendo do valor da propriedade "),Sl(1490,"code"),Jx(1491,"triggerMode"),sg(),Jx(1492,"."),sg()()(),Sl(1493,"tr",15)(1494,"td",16)(1495,"div",24)(1496,"span",25),Jx(1497," triggerMode"),Wl(1498,"br"),sg()()(),Sl(1499,"td",20)(1500,"code",40),Jx(1501,"'change' "),sg(),Sl(1502,"code",41),Jx(1503," 'changeModel'"),sg()(),Sl(1504,"td",23)(1505,"em")(1506,"strong"),Jx(1507,"(opcional)"),sg()(),Sl(1508,"p"),Jx(1509,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Sl(1510,"code"),Jx(1511,"change"),sg(),Jx(1512," ou "),Sl(1513,"code"),Jx(1514,"change-model"),sg(),Jx(1515,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return l})();var be=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(wn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Decimal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-decimal-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-decimal-basic-view")(6,"sample-po-decimal-labs-view")(7,"sample-po-decimal-hourly-wage-view")(8,"sample-po-decimal-hourly-wage-reactive-form-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,de,ce,Ee,he,Se],encapsulation:2})}return l})();var Le=[{path:"",component:be}],xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue$1({imports:[pL.forChild(Le),pL]})}return l})();var st=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue$1({imports:[ar,xe]})}return l})();export{st as DocPoDecimalModule};