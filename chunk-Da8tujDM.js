import {f as fe,u as ue$1,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,g as f,cM as oY,cN as lm,cP as phe,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Nhe,c8 as Sde,aJ as Uhe,c9 as $he,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,cQ as Nk,cR as Ak,a3 as aNe,aD as Ky,aT as rN,aE as Xy,bd as Ox}from'./main-LUSFEIN7.js';var me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-basic"]],standalone:false,decls:1,vars:0,consts:[["name","decimal","p-label","PO Decimal"]],template:function(r,i){r&1&&Gl(0,"po-decimal",0);},dependencies:[phe],encapsulation:2,changeDetection:1})}return l})();var ve=l=>({"docs-sample-code-tabs":l}),de=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Decimal Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-decimal-basic/sample-po-decimal-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-decimal-basic/sample-po-decimal-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-decimal-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ve,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,me],encapsulation:2})}return l})();var se=(()=>{class l{helperText;decimal;decimalsLength;event;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:"pt",label:"Portuguese"},{value:"en",label:"English"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"}];iconOptions=[{value:"an an-shopping-cart-simple",label:"an an-shopping-cart-simple"},{value:"an an-currency-dollar-simple",label:"an an-currency-dollar-simple"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.decimal=void 0,this.decimalsLength=void 0,this.event="",this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder="",this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size="medium",this.properties=[];}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-labs"]],standalone:false,decls:23,vars:46,consts:[["f","ngForm"],["name","decimal",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-decimals-length","p-disabled","p-help","p-icon","p-label","p-loading","p-locale","p-error-pattern","p-max","p-min","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-thousand-maxlength","p-label-text-wrap","p-compact-label","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","locale","p-clean","","p-label","Locale",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","decimalsLength","p-clean","","p-help","M\xE1ximo 15","p-label","Decimals max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","thousandMaxlength","p-clean","","p-help","M\xE1ximo 13","p-label","Thousand max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=Cx();Tl(0,"po-decimal",1),Ew("ngModelChange",function(a){return Ky(p),rN(i.decimal,a)||(i.decimal=a),Xy(a)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),t0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3)(4,"po-info",4),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(a){return Ky(p),rN(i.label,a)||(i.label=a),Xy(a)}),sg(),t0(),Tl(9,"po-input",6),Ew("ngModelChange",function(a){return Ky(p),rN(i.help,a)||(i.help=a),Xy(a)}),sg(),t0(),Tl(10,"po-input",7),Ew("ngModelChange",function(a){return Ky(p),rN(i.helperText,a)||(i.helperText=a),Xy(a)}),sg(),t0(),Tl(11,"po-input",8),Ew("ngModelChange",function(a){return Ky(p),rN(i.placeholder,a)||(i.placeholder=a),Xy(a)}),sg(),t0(),Tl(12,"po-input",9),Ew("ngModelChange",function(a){return Ky(p),rN(i.errorPattern,a)||(i.errorPattern=a),Xy(a)}),sg(),t0(),Tl(13,"po-select",10),Ew("ngModelChange",function(a){return Ky(p),rN(i.icon,a)||(i.icon=a),Xy(a)}),sg(),t0(),Tl(14,"po-number",11),Ew("ngModelChange",function(a){return Ky(p),rN(i.min,a)||(i.min=a),Xy(a)}),sg(),t0(),Tl(15,"po-number",12),Ew("ngModelChange",function(a){return Ky(p),rN(i.max,a)||(i.max=a),Xy(a)}),sg(),t0(),Tl(16,"po-select",13),Ew("ngModelChange",function(a){return Ky(p),rN(i.locale,a)||(i.locale=a),Xy(a)}),sg(),t0(),Tl(17,"po-number",14),Ew("ngModelChange",function(a){return Ky(p),rN(i.decimalsLength,a)||(i.decimalsLength=a),Xy(a)}),sg(),t0(),Tl(18,"po-number",15),Ew("ngModelChange",function(a){return Ky(p),rN(i.thousandMaxlength,a)||(i.thousandMaxlength=a),Xy(a)}),sg(),t0(),Tl(19,"po-checkbox-group",16),Ew("ngModelChange",function(a){return Ky(p),rN(i.properties,a)||(i.properties=a),Xy(a)}),sg(),t0(),Tl(20,"po-radio-group",17),Ew("ngModelChange",function(a){return Ky(p),rN(i.size,a)||(i.size=a),Xy(a)}),sg(),t0(),Tl(21,"div",2)(22,"po-button",18),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(Dw("ngModel",i.decimal),tw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-decimals-length",i.decimalsLength)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-error-pattern",i.errorPattern)("p-max",i.max)("p-min",i.min)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-thousand-maxlength",i.thousandMaxlength)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),r0(),Vp(3),tw("p-value",i.decimal),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),r0(),Vp(),Dw("ngModel",i.help),r0(),Vp(),Dw("ngModel",i.helperText),r0(),Vp(),Dw("ngModel",i.placeholder),r0(),Vp(),Dw("ngModel",i.errorPattern),r0(),Vp(),Dw("ngModel",i.icon),tw("p-options",i.iconOptions),r0(),Vp(),Dw("ngModel",i.min),r0(),Vp(),Dw("ngModel",i.max),r0(),Vp(),Dw("ngModel",i.locale),tw("p-options",i.localeOptions),r0(),Vp(),Dw("ngModel",i.decimalsLength),tw("p-max",i.maxDecimalsLength),r0(),Vp(),Dw("ngModel",i.thousandMaxlength),tw("p-max",i.maxThousandMaxlength),r0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),r0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,phe,O3,Nhe,Sde,Uhe,$he],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Decimal Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-decimal-labs/sample-po-decimal-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-decimal
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-decimal-labs/sample-po-decimal-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-decimal-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,we,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,se],encapsulation:2})}return l})();var ue=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let d=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/d;this.hourlyWage=r;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage"]],standalone:false,decls:16,vars:6,consts:[["f","ngForm"],[1,"po-font-title"],[1,"po-row"],["name","weekHours","p-label","Week Hours","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","workingDaysPerWeek","p-label","Working days per week","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantityDaysPerMonth","p-label","Quantity days per month","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=Cx();Tl(0,"form",null,0)(2,"div",1),tN(3,"Calculate hourly wage"),sg(),Gl(4,"po-divider"),Tl(5,"div",2)(6,"po-number",3),Ew("ngModelChange",function(a){return Ky(p),rN(i.weekHours,a)||(i.weekHours=a),Xy(a)}),sg(),t0(),Tl(7,"po-number",4),Ew("ngModelChange",function(a){return Ky(p),rN(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),Xy(a)}),sg(),t0(),sg(),Tl(8,"div",2)(9,"po-number",5),Ew("ngModelChange",function(a){return Ky(p),rN(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),Xy(a)}),sg(),t0(),Tl(10,"po-decimal",6),Ew("ngModelChange",function(a){return Ky(p),rN(i.salary,a)||(i.salary=a),Xy(a)}),ht("p-change",function(){return i.calculate()}),sg(),t0(),sg(),Tl(11,"div",2)(12,"po-decimal",7),Ew("ngModelChange",function(a){return Ky(p),rN(i.hourlyWage,a)||(i.hourlyWage=a),Xy(a)}),sg(),t0(),sg(),Tl(13,"div",2)(14,"po-button",8),ht("p-click",function(){Ky(p);let a=Ox(1);return Xy(a.reset())}),sg(),Tl(15,"po-button",9),ht("p-click",function(){return i.calculate()}),sg()()();}r&2&&(Vp(6),Dw("ngModel",i.weekHours),r0(),Vp(),Dw("ngModel",i.workingDaysPerWeek),r0(),Vp(2),Dw("ngModel",i.quantityDaysPerMonth),r0(),Vp(),Dw("ngModel",i.salary),r0(),Vp(2),Dw("ngModel",i.hourlyWage),r0(),Vp(3),tw("p-disabled",!i.hourlyWage));},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,phe,Nhe],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Decimal - Hourly Wage"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html"),sg(),Tl(13,"pre",7),tN(14,`<form #f="ngForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-decimal-hourly-wage"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,_e,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ue],encapsulation:2})}return l})();var ge=(()=>{class l{formBuilder=f(oY);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,lm.required],salary:[null,lm.required],weekHours:[null,lm.required],workingDaysPerWeek:[null,lm.required]});}calculate(){let{weekHours:d,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:p}=this.formCalculateHourlyWage.value,s=d/r*i,a=p/s;this.formCalculateHourlyWage.patchValue({hourlyWage:a});}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form"]],standalone:false,decls:15,vars:2,consts:[[3,"formGroup"],[1,"po-font-title"],[1,"po-row"],["formControlName","weekHours","p-label","Week Hours",1,"po-md-6"],["formControlName","workingDaysPerWeek","p-label","Working days per week",1,"po-md-6"],["formControlName","quantityDaysPerMonth","p-label","Quantity days per month",1,"po-md-6"],["formControlName","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-thousand-maxlength","13",1,"po-md-6",3,"p-change"],["formControlName","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-thousand-maxlength","13",1,"po-md-6"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(Tl(0,"form",0)(1,"div",1),tN(2,"Calculate hourly wage"),sg(),Gl(3,"po-divider"),Tl(4,"div",2),Gl(5,"po-number",3),t0(),Gl(6,"po-number",4),t0(),sg(),Tl(7,"div",2),Gl(8,"po-number",5),t0(),Tl(9,"po-decimal",6),ht("p-change",function(){return i.calculate()}),sg(),t0(),sg(),Tl(10,"div",2),Gl(11,"po-decimal",7),t0(),sg(),Tl(12,"div",2)(13,"po-button",8),ht("p-click",function(){return i.formCalculateHourlyWage.reset()}),sg(),Tl(14,"po-button",9),ht("p-click",function(){return i.calculate()}),sg()()()),r&2&&(tw("formGroup",i.formCalculateHourlyWage),Vp(5),r0(),Vp(),r0(),Vp(2),r0(),Vp(),r0(),Vp(2),r0(),Vp(3),tw("p-disabled",i.formCalculateHourlyWage.invalid));},dependencies:[nY,J9,eY,Nk,Ak,Qt,mv,phe,Nhe],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Decimal - Hourly Wage Reactive Form"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html"),sg(),Tl(13,"pre",7),tN(14,`<form [formGroup]="formCalculateHourlyWage">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-decimal-hourly-wage-reactive-form"),sg(),Gl(23,"hr")),r&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,qe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ge],encapsulation:2})}return l})();var Se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-doc"]],standalone:false,decls:1516,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),tN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),tN(11,"FormsModule"),sg(),tN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),tN(14,"ReactiveFormsModule"),sg(),tN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),tN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),tN(20,"PoDecimalComponent"),sg()(),Tl(21,"div",2)(22,"p"),tN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),sg(),Tl(24,"p"),tN(25,"Importante:"),sg(),Tl(26,"ul")(27,"li"),tN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),sg()(),Tl(29,"h4"),tN(30,"Tokens customiz\xE1veis"),sg(),Tl(31,"p"),tN(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Gl(33,"br"),tN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(35,"code"),tN(36,".po-input"),sg()(),Tl(37,"blockquote")(38,"p"),tN(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Tl(40,"a",6),tN(41,"Grid System"),sg(),tN(42,"."),sg()(),Tl(43,"blockquote")(44,"p"),tN(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(46,"a",7),tN(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(48,"."),sg()(),Tl(49,"table")(50,"thead")(51,"tr")(52,"th"),tN(53,"Propriedade"),sg(),Tl(54,"th"),tN(55,"Descri\xE7\xE3o"),sg(),Tl(56,"th"),tN(57,"Valor Padr\xE3o"),sg()()(),Tl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),tN(62,"Default Values"),sg()(),Gl(63,"td")(64,"td"),sg(),Tl(65,"tr")(66,"td")(67,"code"),tN(68,"--font-family"),sg()(),Tl(69,"td"),tN(70,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(71,"td")(72,"code"),tN(73,"var(--font-family-theme)"),sg()()(),Tl(74,"tr")(75,"td")(76,"code"),tN(77,"--font-size"),sg()(),Tl(78,"td"),tN(79,"Tamanho da fonte"),sg(),Tl(80,"td")(81,"code"),tN(82,"var(--font-size-default)"),sg()()(),Tl(83,"tr")(84,"td")(85,"code"),tN(86,"--text-color-placeholder"),sg()(),Tl(87,"td"),tN(88,"Cor do texto placeholder"),sg(),Tl(89,"td")(90,"code"),tN(91,"var(--color-neutral-light-30)"),sg()()(),Tl(92,"tr")(93,"td")(94,"code"),tN(95,"--color"),sg()(),Tl(96,"td"),tN(97,"Cor pincipal do input"),sg(),Tl(98,"td")(99,"code"),tN(100,"var(--color-neutral-dark-70)"),sg()()(),Tl(101,"tr")(102,"td")(103,"code"),tN(104,"--background"),sg()(),Tl(105,"td"),tN(106,"Cor de background"),sg(),Tl(107,"td")(108,"code"),tN(109,"var(--color-neutral-light-05)"),sg()()(),Tl(110,"tr")(111,"td")(112,"code"),tN(113,"--padding"),sg()(),Tl(114,"td"),tN(115,"Preenchimento"),sg(),Tl(116,"td")(117,"code"),tN(118,"0 0.5rem"),sg()()(),Tl(119,"tr")(120,"td")(121,"code"),tN(122,"--text-color"),sg()(),Tl(123,"td"),tN(124,"Cor do texto"),sg(),Tl(125,"td")(126,"code"),tN(127,"var(--color-neutral-dark-90)"),sg()()(),Tl(128,"tr")(129,"td")(130,"code"),tN(131,"--field-container-title-justify"),sg()(),Tl(132,"td"),tN(133,"Alinhamento horizontal do t\xEDtulo ("),Tl(134,"code"),tN(135,"justify-content"),sg(),tN(136,")"),sg(),Tl(137,"td")(138,"code"),tN(139,"space-between"),sg()()(),Tl(140,"tr")(141,"td")(142,"code"),tN(143,"--field-container-title-flex"),sg()(),Tl(144,"td"),tN(145,"Flex do t\xEDtulo ("),Tl(146,"code"),tN(147,"flex"),sg(),tN(148,")"),sg(),Tl(149,"td")(150,"code"),tN(151,"1 auto"),sg()()(),Tl(152,"tr")(153,"td")(154,"strong"),tN(155,"Hover"),sg()(),Gl(156,"td")(157,"td"),sg(),Tl(158,"tr")(159,"td")(160,"code"),tN(161,"--color-hover"),sg()(),Tl(162,"td"),tN(163,"Cor principal no estado hover"),sg(),Tl(164,"td")(165,"code"),tN(166,"var(--color-brand-01-dark)"),sg()()(),Tl(167,"tr")(168,"td")(169,"code"),tN(170,"--background-hover"),sg()(),Tl(171,"td"),tN(172,"Cor de background no estado hover"),sg(),Tl(173,"td")(174,"code"),tN(175,"var(--color-brand-01-lightest)"),sg()()(),Tl(176,"tr")(177,"td")(178,"strong"),tN(179,"Focused"),sg()(),Gl(180,"td")(181,"td"),sg(),Tl(182,"tr")(183,"td")(184,"code"),tN(185,"--color-focused"),sg()(),Tl(186,"td"),tN(187,"Cor principal no estado de focus"),sg(),Tl(188,"td")(189,"code"),tN(190,"var(--color-action-default)"),sg()()(),Tl(191,"tr")(192,"td")(193,"code"),tN(194,"--outline-color-focused"),sg()(),Tl(195,"td"),tN(196,"Cor do outline do estado de focus"),sg(),Tl(197,"td")(198,"code"),tN(199,"var(--color-action-focus)"),sg()()(),Tl(200,"tr")(201,"td")(202,"strong"),tN(203,"Disabled"),sg()(),Gl(204,"td")(205,"td"),sg(),Tl(206,"tr")(207,"td")(208,"code"),tN(209,"--color-disabled"),sg()(),Tl(210,"td"),tN(211,"Cor principal no estado disabled"),sg(),Tl(212,"td")(213,"code"),tN(214,"var(--color-neutral-light-30)"),sg()()(),Tl(215,"tr")(216,"td")(217,"code"),tN(218,"--background-disabled"),sg()(),Tl(219,"td"),tN(220,"Cor de background no estado disabled"),sg(),Tl(221,"td")(222,"code"),tN(223,"var(--color-neutral-light-20)"),sg()()(),Tl(224,"tr")(225,"td")(226,"code"),tN(227,"--text-color-disabled"),sg()(),Tl(228,"td"),tN(229,"Cor do texto no estado disabled"),sg(),Tl(230,"td")(231,"code"),tN(232,"var(--color-neutral-dark-70)"),sg()()()()(),Tl(233,"p"),Gl(234,"br"),tN(235," - O "),Tl(236,"code"),tN(237,"po-decimal"),sg(),tN(238," \xE9 um "),Tl(239,"em"),tN(240,"input"),sg(),tN(241," espec\xEDfico para receber apenas n\xFAmeros decimais, por isso recebe as seguintes caracter\xEDsticas:"),sg(),Tl(242,"ul")(243,"li"),tN(244,"Aceita apenas n\xFAmeros;"),sg(),Tl(245,"li"),tN(246,"Utiliza ',' como separador de decimal;"),sg(),Tl(247,"li"),tN(248,"Utiliza '.' para separa\xE7\xE3o de milhar;"),sg(),Tl(249,"li"),tN(250,"\xC9 poss\xEDvel configurar a quantidade de casas decimais e a quantidade de digitos do campo."),sg()(),Tl(251,"blockquote")(252,"p")(253,"strong"),tN(254,"Importante:"),sg(),tN(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),Tl(256,"code"),tN(257,"32 bits"),sg(),tN(258,`, e para que os valores comportem-se devidamente,
o `),Tl(259,"code"),tN(260,"po-decimal"),sg(),tN(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),Tl(262,"code"),tN(263,"p-decimals-length"),sg(),tN(264," e "),Tl(265,"code"),tN(266,"p-thousand-maxlength"),sg(),tN(267,"."),sg()()(),Tl(268,"div",8)(269,"h4",9),tN(270,"Seletor"),sg(),Tl(271,"pre",10),tN(272,`<po-decimal
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
`),sg()(),Tl(273,"h4",11),tN(274,"Propriedades"),sg(),Tl(275,"table",12)(276,"tr",13)(277,"th",14),tN(278,"Nome"),sg(),Tl(279,"th",14),tN(280,"Tipo"),sg(),Tl(281,"th",14),tN(282,"Padr\xE3o"),sg(),Tl(283,"th",14),tN(284,"Descri\xE7\xE3o"),sg()(),Tl(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),tN(289," (p-additional-help)"),Gl(290,"br"),sg()(),Tl(291,"div",19),tN(292,"Deprecated"),sg()(),Tl(293,"td",20)(294,"code",21),tN(295,"EventEmitter"),sg()(),Tl(296,"td",22),tN(297,"-"),sg(),Tl(298,"td",23)(299,"em")(300,"strong"),tN(301,"(opcional)"),sg()(),Tl(302,"p"),tN(303,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(304,"blockquote")(305,"p"),tN(306,"Essa propriedade est\xE1 "),Tl(307,"strong"),tN(308,"depreciada"),sg(),tN(309," e ser\xE1 removida na vers\xE3o "),Tl(310,"code"),tN(311,"23.x.x"),sg(),tN(312,". Recomendamos utilizar a propriedade "),Tl(313,"code"),tN(314,"p-helper"),sg(),tN(315," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(316,"tr",15)(317,"td",16)(318,"div",24)(319,"span",25),tN(320," p-additional-help-tooltip"),Gl(321,"br"),sg()(),Tl(322,"div",19),tN(323,"Deprecated"),sg()(),Tl(324,"td",20)(325,"code",26),tN(326,"string"),sg()(),Tl(327,"td",22),tN(328,"-"),sg(),Tl(329,"td",23)(330,"em")(331,"strong"),tN(332,"(opcional)"),sg()(),Tl(333,"p"),tN(334,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(335,"code"),tN(336,"po-helper"),sg(),tN(337,`.
`),Tl(338,"strong"),tN(339,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(340,"blockquote")(341,"p"),tN(342,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(343,"blockquote")(344,"p"),tN(345,"Essa propriedade est\xE1 "),Tl(346,"strong"),tN(347,"depreciada"),sg(),tN(348," e ser\xE1 removida na vers\xE3o "),Tl(349,"code"),tN(350,"23.x.x"),sg(),tN(351,". Recomendamos utilizar a propriedade "),Tl(352,"code"),tN(353,"p-helper"),sg(),tN(354," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(355,"tr",15)(356,"td",16)(357,"div",24)(358,"span",25),tN(359," p-append-in-body"),Gl(360,"br"),sg()()(),Tl(361,"td",20)(362,"code",27),tN(363,"boolean"),sg()(),Tl(364,"td",22)(365,"p")(366,"code"),tN(367,"false"),sg()()(),Tl(368,"td",23)(369,"em")(370,"strong"),tN(371,"(opcional)"),sg()(),Tl(372,"p"),tN(373,"Define que o popover ("),Tl(374,"code"),tN(375,"p-helper"),sg(),tN(376," e/ou "),Tl(377,"code"),tN(378,"p-error-limit"),sg(),tN(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),sg(),Tl(380,"blockquote")(381,"p"),tN(382,"Quando utilizado com "),Tl(383,"code"),tN(384,"p-helper"),sg(),tN(385,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(386,"tr",15)(387,"td",16)(388,"div",24)(389,"span",25),tN(390," p-auto-focus"),Gl(391,"br"),sg()()(),Tl(392,"td",20)(393,"code",27),tN(394,"boolean"),sg()(),Tl(395,"td",22)(396,"p")(397,"code"),tN(398,"false"),sg()()(),Tl(399,"td",23)(400,"em")(401,"strong"),tN(402,"(opcional)"),sg()(),Tl(403,"p"),tN(404,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(405,"blockquote")(406,"p"),tN(407,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),tN(412," (p-blur)"),Gl(413,"br"),sg()()(),Tl(414,"td",20)(415,"code",21),tN(416,"EventEmitter"),sg()(),Tl(417,"td",22),tN(418,"-"),sg(),Tl(419,"td",23)(420,"em")(421,"strong"),tN(422,"(opcional)"),sg()(),Tl(423,"p"),tN(424,"Evento disparado ao sair do campo."),sg()()(),Tl(425,"tr",15)(426,"td",16)(427,"div",17)(428,"span",18),tN(429," (p-change)"),Gl(430,"br"),sg()()(),Tl(431,"td",20)(432,"code",21),tN(433,"EventEmitter"),sg()(),Tl(434,"td",22),tN(435,"-"),sg(),Tl(436,"td",23)(437,"em")(438,"strong"),tN(439,"(opcional)"),sg()(),Tl(440,"p"),tN(441,"Evento disparado ao alterar valor e deixar o campo."),sg()()(),Tl(442,"tr",15)(443,"td",16)(444,"div",17)(445,"span",18),tN(446," (p-change-model)"),Gl(447,"br"),sg()()(),Tl(448,"td",20)(449,"code",21),tN(450,"EventEmitter"),sg()(),Tl(451,"td",22),tN(452,"-"),sg(),Tl(453,"td",23)(454,"em")(455,"strong"),tN(456,"(opcional)"),sg()(),Tl(457,"p"),tN(458,"Evento disparado ao alterar valor do model."),sg()()(),Tl(459,"tr",15)(460,"td",16)(461,"div",24)(462,"span",25),tN(463,"p-clean"),Gl(464,"br"),sg()()(),Tl(465,"td",20)(466,"code",27),tN(467,"boolean"),sg()(),Tl(468,"td",22),tN(469,"-"),sg(),Tl(470,"td",23)(471,"em")(472,"strong"),tN(473,"(opcional)"),sg()(),Tl(474,"p"),tN(475,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),sg()()(),Tl(476,"tr",15)(477,"td",16)(478,"div",24)(479,"span",25),tN(480," p-compact-label"),Gl(481,"br"),sg()()(),Tl(482,"td",20)(483,"code",27),tN(484,"boolean"),sg()(),Tl(485,"td",22)(486,"p")(487,"code"),tN(488,"false"),sg()()(),Tl(489,"td",23)(490,"em")(491,"strong"),tN(492,"(opcional)"),sg()(),Tl(493,"p"),tN(494,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(495,"p"),tN(496,"Quando habilitado ("),Tl(497,"code"),tN(498,"true"),sg(),tN(499,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(500,"ul")(501,"li")(502,"code"),tN(503,"po-label"),sg()(),Tl(504,"li")(505,"code"),tN(506,"p-requirement (showRequired)"),sg()(),Tl(507,"li")(508,"code"),tN(509,"po-helper"),sg()()(),Tl(510,"p"),tN(511,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(512,"p"),tN(513,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(514,"ul")(515,"li")(516,"code"),tN(517,"--field-container-title-justify"),sg()(),Tl(518,"li")(519,"code"),tN(520,"--field-container-title-flex"),sg()()(),Tl(521,"p"),tN(522,"Exemplo:"),sg(),Tl(523,"pre")(524,"code"),tN(525,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(526,"p"),tN(527,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(528,"tr",15)(529,"td",16)(530,"div",24)(531,"span",25),tN(532," p-decimals-length"),Gl(533,"br"),sg()()(),Tl(534,"td",20)(535,"code",28),tN(536,"number"),sg()(),Tl(537,"td",22)(538,"p")(539,"code"),tN(540,"2"),sg()()(),Tl(541,"td",23)(542,"em")(543,"strong"),tN(544,"(opcional)"),sg()(),Tl(545,"p"),tN(546,"Quantidade m\xE1xima de casas decimais."),sg(),Tl(547,"blockquote")(548,"p")(549,"strong"),tN(550,"Importante:"),sg()()(),Tl(551,"ul")(552,"li"),tN(553,"O valor m\xE1ximo permitido \xE9 15;"),sg(),Tl(554,"li"),tN(555,"A soma total de "),Tl(556,"code"),tN(557,"p-decimals-length"),sg(),tN(558," com "),Tl(559,"code"),tN(560,"p-thousand-maxlength"),sg(),tN(561," limita-se \xE0 16;"),sg(),Tl(562,"li"),tN(563,"Esta propriedade sobrep\xF5e apenas o valor "),Tl(564,"strong"),tN(565,"padr\xE3o"),sg(),tN(566," de "),Tl(567,"code"),tN(568,"p-thousand-maxlength"),sg(),tN(569,";"),sg(),Tl(570,"li"),tN(571,"Caso "),Tl(572,"code"),tN(573,"p-thousand-maxlength"),sg(),tN(574," tenha um valor definido, esta propriedade poder\xE1 receber apenas o valor restante do limite total (16)."),sg()()()(),Tl(575,"tr",15)(576,"td",16)(577,"div",24)(578,"span",25),tN(579,"p-disabled"),Gl(580,"br"),sg()()(),Tl(581,"td",20)(582,"code",27),tN(583,"boolean"),sg()(),Tl(584,"td",22)(585,"p")(586,"code"),tN(587,"false"),sg()()(),Tl(588,"td",23)(589,"em")(590,"strong"),tN(591,"(opcional)"),sg()(),Tl(592,"p"),tN(593,"Se verdadeiro, desabilita o campo."),sg()()(),Tl(594,"tr",15)(595,"td",16)(596,"div",24)(597,"span",25),tN(598," p-emit-all-changes"),Gl(599,"br"),sg()()(),Tl(600,"td",20)(601,"code",27),tN(602,"boolean"),sg()(),Tl(603,"td",22)(604,"p")(605,"code"),tN(606,"false"),sg()()(),Tl(607,"td",23)(608,"em")(609,"strong"),tN(610,"(opcional)"),sg()(),Tl(611,"p"),tN(612,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),sg()()(),Tl(613,"tr",15)(614,"td",16)(615,"div",17)(616,"span",18),tN(617," (p-enter)"),Gl(618,"br"),sg()()(),Tl(619,"td",20)(620,"code",21),tN(621,"EventEmitter"),sg()(),Tl(622,"td",22),tN(623,"-"),sg(),Tl(624,"td",23)(625,"em")(626,"strong"),tN(627,"(opcional)"),sg()(),Tl(628,"p"),tN(629,"Evento disparado ao entrar do campo."),sg()()(),Tl(630,"tr",15)(631,"td",16)(632,"div",24)(633,"span",25),tN(634," p-error-async-properties"),Gl(635,"br"),sg()()(),Tl(636,"td",20)(637,"code",29),tN(638,"ErrorAsyncProperties"),sg()(),Tl(639,"td",22),tN(640,"-"),sg(),Tl(641,"td",23)(642,"em")(643,"strong"),tN(644,"(opcional)"),sg()(),Tl(645,"p"),tN(646,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Tl(647,"code"),tN(648,"Reactive Forms"),sg(),tN(649,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Tl(650,"code"),tN(651,"asyncValidators"),sg(),tN(652,"."),sg()()(),Tl(653,"tr",15)(654,"td",16)(655,"div",24)(656,"span",25),tN(657," p-error-limit"),Gl(658,"br"),sg()()(),Tl(659,"td",20)(660,"code",27),tN(661,"boolean"),sg()(),Tl(662,"td",22)(663,"p")(664,"code"),tN(665,"false"),sg()()(),Tl(666,"td",23)(667,"em")(668,"strong"),tN(669,"(opcional)"),sg()(),Tl(670,"p"),tN(671,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(672,"blockquote")(673,"p"),tN(674,"Caso essa propriedade seja definida como "),Tl(675,"code"),tN(676,"true"),sg(),tN(677,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(678,"tr",15)(679,"td",16)(680,"div",24)(681,"span",25),tN(682," p-error-pattern"),Gl(683,"br"),sg()()(),Tl(684,"td",20)(685,"code",26),tN(686,"string"),sg()(),Tl(687,"td",22),tN(688,"-"),sg(),Tl(689,"td",23)(690,"em")(691,"strong"),tN(692,"(opcional)"),sg()(),Tl(693,"p"),tN(694,"Mensagem que ser\xE1 apresentada quando o "),Tl(695,"code"),tN(696,"pattern"),sg(),tN(697," ou a m\xE1scara n\xE3o for satisfeita."),sg(),Tl(698,"blockquote")(699,"p"),tN(700,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Tl(701,"code"),tN(702,"p-required-field-error-message"),sg(),tN(703," em conjunto."),sg()()()(),Tl(704,"tr",15)(705,"td",16)(706,"div",24)(707,"span",25),tN(708," p-help"),Gl(709,"br"),sg()()(),Tl(710,"td",20)(711,"code",26),tN(712,"string"),sg()(),Tl(713,"td",22),tN(714,"-"),sg(),Tl(715,"td",23)(716,"em")(717,"strong"),tN(718,"(opcional)"),sg()(),Tl(719,"p"),tN(720,"Texto de apoio do campo."),sg()()(),Tl(721,"tr",15)(722,"td",16)(723,"div",24)(724,"span",25),tN(725," p-icon"),Gl(726,"br"),sg()()(),Tl(727,"td",20)(728,"code",26),tN(729,"string "),sg(),Tl(730,"code",30),tN(731," TemplateRef<void>"),sg()(),Tl(732,"td",22),tN(733,"-"),sg(),Tl(734,"td",23)(735,"em")(736,"strong"),tN(737,"(opcional)"),sg()(),Tl(738,"p"),tN(739,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),sg(),Tl(740,"p"),tN(741,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Tl(742,"a",31),tN(743,"Biblioteca de \xEDcones"),sg(),tN(744,". conforme exemplo abaixo:"),sg(),Tl(745,"pre")(746,"code"),tN(747,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),sg()(),Tl(748,"p"),tN(749,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Tl(750,"em"),tN(751,"Font Awesome"),sg(),tN(752,", da seguinte forma:"),sg(),Tl(753,"pre")(754,"code"),tN(755,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),sg()(),Tl(756,"p"),tN(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Tl(758,"code"),tN(759,"TemplateRef"),sg(),tN(760,", conforme exemplo abaixo:"),sg(),Tl(761,"pre")(762,"code"),tN(763,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),sg()(),Tl(764,"blockquote")(765,"p"),tN(766,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Tl(767,"code"),tN(768,"font-size: inherit"),sg(),tN(769," caso o \xEDcone utilizado n\xE3o aplique-o."),sg()()()(),Tl(770,"tr",15)(771,"td",16)(772,"div",17)(773,"span",18),tN(774," (p-keydown)"),Gl(775,"br"),sg()()(),Tl(776,"td",20)(777,"code",21),tN(778,"EventEmitter"),sg()(),Tl(779,"td",22),tN(780,"-"),sg(),Tl(781,"td",23)(782,"em")(783,"strong"),tN(784,"(opcional)"),sg()(),Tl(785,"p"),tN(786,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(787,"code"),tN(788,"KeyboardEvent"),sg(),tN(789," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(790,"tr",15)(791,"td",16)(792,"div",24)(793,"span",25),tN(794," p-label"),Gl(795,"br"),sg()()(),Tl(796,"td",20)(797,"code",26),tN(798,"string"),sg()(),Tl(799,"td",22),tN(800,"-"),sg(),Tl(801,"td",23)(802,"em")(803,"strong"),tN(804,"(opcional)"),sg()(),Tl(805,"p"),tN(806,"R\xF3tulo do campo."),sg()()(),Tl(807,"tr",15)(808,"td",16)(809,"div",24)(810,"span",25),tN(811," p-label-text-wrap"),Gl(812,"br"),sg()()(),Tl(813,"td",20)(814,"code",27),tN(815,"boolean"),sg()(),Tl(816,"td",22)(817,"p")(818,"code"),tN(819,"false"),sg()()(),Tl(820,"td",23)(821,"em")(822,"strong"),tN(823,"(opcional)"),sg()(),Tl(824,"p"),tN(825,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(826,"code"),tN(827,"p-label"),sg(),tN(828,". Quando "),Tl(829,"code"),tN(830,"p-label-text-wrap"),sg(),tN(831,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(832,"tr",15)(833,"td",16)(834,"div",24)(835,"span",25),tN(836," p-loading"),Gl(837,"br"),sg()()(),Tl(838,"td",20)(839,"code",27),tN(840,"boolean"),sg()(),Tl(841,"td",22)(842,"p")(843,"code"),tN(844,"false"),sg()()(),Tl(845,"td",23)(846,"em")(847,"strong"),tN(848,"(opcional)"),sg()(),Tl(849,"p"),tN(850,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(851,"tr",15)(852,"td",16)(853,"div",24)(854,"span",25),tN(855," p-locale"),Gl(856,"br"),sg()()(),Tl(857,"td",20)(858,"code",26),tN(859,"string"),sg()(),Tl(860,"td",22),tN(861,"-"),sg(),Tl(862,"td",23)(863,"em")(864,"strong"),tN(865,"(opcional)"),sg()(),Tl(866,"p"),tN(867,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),Tl(868,"a",32)(869,"code"),tN(870,"I18n"),sg()()(),Tl(871,"blockquote")(872,"p"),tN(873,"Para ver quais linguagens suportadas acesse "),Tl(874,"a",32)(875,"code"),tN(876,"I18n"),sg()()()()()(),Tl(877,"tr",15)(878,"td",16)(879,"div",24)(880,"span",25),tN(881,"p-mask"),Gl(882,"br"),sg()()(),Tl(883,"td",20)(884,"code",26),tN(885,"string"),sg()(),Tl(886,"td",22),tN(887,"-"),sg(),Tl(888,"td",23)(889,"em")(890,"strong"),tN(891,"(opcional)"),sg()(),Tl(892,"p"),tN(893,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),sg()()(),Tl(894,"tr",15)(895,"td",16)(896,"div",24)(897,"span",25),tN(898,"p-mask-format-model"),Gl(899,"br"),sg()()(),Tl(900,"td",20)(901,"code",27),tN(902,"boolean"),sg()(),Tl(903,"td",22)(904,"p")(905,"code"),tN(906,"false"),sg()()(),Tl(907,"td",23)(908,"em")(909,"strong"),tN(910,"(opcional)"),sg()(),Tl(911,"p"),tN(912,"Indica se o "),Tl(913,"code"),tN(914,"model"),sg(),tN(915," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),sg()()(),Tl(916,"tr",15)(917,"td",16)(918,"div",24)(919,"span",25),tN(920," p-mask-no-length-validation"),Gl(921,"br"),sg()()(),Tl(922,"td",20)(923,"code",27),tN(924,"boolean"),sg()(),Tl(925,"td",22)(926,"p")(927,"code"),tN(928,"false"),sg()()(),Tl(929,"td",23)(930,"p"),tN(931,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Tl(932,"code"),tN(933,"minLength"),sg(),tN(934,") e m\xE1ximo ("),Tl(935,"code"),tN(936,"maxLength"),sg(),tN(937,") quando h\xE1 uma m\xE1scara ("),Tl(938,"code"),tN(939,"p-mask"),sg(),tN(940,") definida."),sg(),Tl(941,"ul")(942,"li"),tN(943,"Quando "),Tl(944,"code"),tN(945,"true"),sg(),tN(946,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),sg(),Tl(947,"li"),tN(948,"Quando "),Tl(949,"code"),tN(950,"false"),sg(),tN(951,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),sg()(),Tl(952,"blockquote")(953,"p"),tN(954,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Tl(955,"code"),tN(956,"p-mask-format-model"),sg(),tN(957,"."),sg()(),Tl(958,"p"),tN(959,"Exemplo:"),sg(),Tl(960,"pre")(961,"code"),tN(962,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),sg()(),Tl(963,"ul")(964,"li"),tN(965,"Entrada: "),Tl(966,"code"),tN(967,"123-456"),sg(),tN(968," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Tl(969,"code"),tN(970,"-"),sg(),tN(971,"."),sg()()()(),Tl(972,"tr",15)(973,"td",16)(974,"div",24)(975,"span",25),tN(976," p-max"),Gl(977,"br"),sg()()(),Tl(978,"td",20)(979,"code",28),tN(980,"number"),sg()(),Tl(981,"td",22),tN(982,"-"),sg(),Tl(983,"td",23)(984,"em")(985,"strong"),tN(986,"(opcional)"),sg()(),Tl(987,"p"),tN(988,"Valor m\xE1ximo."),sg()()(),Tl(989,"tr",15)(990,"td",16)(991,"div",24)(992,"span",25),tN(993," p-maxlength"),Gl(994,"br"),sg()()(),Tl(995,"td",20)(996,"code",28),tN(997,"number"),sg()(),Tl(998,"td",22),tN(999,"-"),sg(),Tl(1e3,"td",23)(1001,"em")(1002,"strong"),tN(1003,"(opcional)"),sg()(),Tl(1004,"p"),tN(1005,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),sg()()(),Tl(1006,"tr",15)(1007,"td",16)(1008,"div",24)(1009,"span",25),tN(1010," p-min"),Gl(1011,"br"),sg()()(),Tl(1012,"td",20)(1013,"code",28),tN(1014,"number"),sg()(),Tl(1015,"td",22),tN(1016,"-"),sg(),Tl(1017,"td",23)(1018,"em")(1019,"strong"),tN(1020,"(opcional)"),sg()(),Tl(1021,"p"),tN(1022,"Valor m\xEDnimo."),sg()()(),Tl(1023,"tr",15)(1024,"td",16)(1025,"div",24)(1026,"span",25),tN(1027," p-minlength"),Gl(1028,"br"),sg()()(),Tl(1029,"td",20)(1030,"code",28),tN(1031,"number"),sg()(),Tl(1032,"td",22),tN(1033,"-"),sg(),Tl(1034,"td",23)(1035,"em")(1036,"strong"),tN(1037,"(opcional)"),sg()(),Tl(1038,"p"),tN(1039,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),sg()()(),Tl(1040,"tr",15)(1041,"td",16)(1042,"div",24)(1043,"span",25),tN(1044," name"),Gl(1045,"br"),sg()()(),Tl(1046,"td",20)(1047,"code",26),tN(1048,"string"),sg()(),Tl(1049,"td",22),tN(1050,"-"),sg(),Tl(1051,"td",23)(1052,"p"),tN(1053,"Nome e identificador do campo."),sg()()(),Tl(1054,"tr",15)(1055,"td",16)(1056,"div",24)(1057,"span",25),tN(1058," p-no-autocomplete"),Gl(1059,"br"),sg()()(),Tl(1060,"td",20)(1061,"code",27),tN(1062,"boolean"),sg()(),Tl(1063,"td",22)(1064,"p")(1065,"code"),tN(1066,"false"),sg()()(),Tl(1067,"td",23)(1068,"em")(1069,"strong"),tN(1070,"(opcional)"),sg()(),Tl(1071,"p"),tN(1072,"Define a propriedade nativa "),Tl(1073,"code"),tN(1074,"autocomplete"),sg(),tN(1075," do campo como "),Tl(1076,"code"),tN(1077,"off"),sg(),tN(1078,"."),sg(),Tl(1079,"blockquote")(1080,"p"),tN(1081,"No componente "),Tl(1082,"code"),tN(1083,"po-password"),sg(),tN(1084," ser\xE1 definido como "),Tl(1085,"code"),tN(1086,"new-password"),sg(),tN(1087,"."),sg()(),Tl(1088,"p"),tN(1089,"Nos componentes "),Tl(1090,"code"),tN(1091,"po-password"),sg(),tN(1092," e "),Tl(1093,"code"),tN(1094,"po-login"),sg(),tN(1095," o valor padr\xE3o ser\xE1 "),Tl(1096,"code"),tN(1097,"true"),sg(),tN(1098,"."),sg()()(),Tl(1099,"tr",15)(1100,"td",16)(1101,"div",24)(1102,"span",25),tN(1103," p-optional"),Gl(1104,"br"),sg()()(),Tl(1105,"td",20)(1106,"code",27),tN(1107,"boolean"),sg()(),Tl(1108,"td",22)(1109,"p")(1110,"code"),tN(1111,"false"),sg()()(),Tl(1112,"td",23)(1113,"em")(1114,"strong"),tN(1115,"(opcional)"),sg()(),Tl(1116,"p"),tN(1117,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(1118,"blockquote")(1119,"p"),tN(1120,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1121,"ul")(1122,"li"),tN(1123,"O campo conter "),Tl(1124,"code"),tN(1125,"p-required"),sg(),tN(1126,";"),sg(),Tl(1127,"li"),tN(1128,"N\xE3o possuir "),Tl(1129,"code"),tN(1130,"p-help"),sg(),tN(1131," e/ou "),Tl(1132,"code"),tN(1133,"p-label"),sg(),tN(1134,"."),sg()()()(),Tl(1135,"tr",15)(1136,"td",16)(1137,"div",24)(1138,"span",25),tN(1139,"p-pattern"),Gl(1140,"br"),sg()()(),Tl(1141,"td",20)(1142,"code",26),tN(1143,"string"),sg()(),Tl(1144,"td",22),tN(1145,"-"),sg(),Tl(1146,"td",23)(1147,"em")(1148,"strong"),tN(1149,"(opcional)"),sg()(),Tl(1150,"p"),tN(1151,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Tl(1152,"code"),tN(1153,"(p-mask)"),sg(),tN(1154,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),sg()()(),Tl(1155,"tr",15)(1156,"td",16)(1157,"div",24)(1158,"span",25),tN(1159," p-placeholder"),Gl(1160,"br"),sg()()(),Tl(1161,"td",20)(1162,"code",26),tN(1163,"string"),sg()(),Tl(1164,"td",22)(1165,"p"),tN(1166,"''"),sg()(),Tl(1167,"td",23)(1168,"em")(1169,"strong"),tN(1170,"(opcional)"),sg()(),Tl(1171,"p"),tN(1172,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Tl(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),tN(1177," p-helper"),Gl(1178,"br"),sg()()(),Tl(1179,"td",20)(1180,"code",33),tN(1181,"PoHelperOptions "),sg(),Tl(1182,"code",26),tN(1183," string"),sg()(),Tl(1184,"td",22),tN(1185,"-"),sg(),Tl(1186,"td",23)(1187,"em")(1188,"strong"),tN(1189,"(opcional)"),sg()(),Tl(1190,"p"),tN(1191,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(1192,"code"),tN(1193,"p-label"),sg(),tN(1194," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(1195,"code"),tN(1196,"p-label"),sg(),tN(1197,"."),sg(),Tl(1198,"blockquote")(1199,"p"),tN(1200,"Para mais informa\xE7\xF5es acesse: "),Tl(1201,"a",34),tN(1202,"https://po-ui.io/documentation/po-helper"),sg(),tN(1203,"."),sg()(),Tl(1204,"blockquote")(1205,"p"),tN(1206,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(1207,"code"),tN(1208,"p-additional-help-tooltip"),sg(),tN(1209," e "),Tl(1210,"code"),tN(1211,"p-additional-help"),sg(),tN(1212,") ser\xE1 ignorado."),sg()()()(),Tl(1213,"tr",15)(1214,"td",16)(1215,"div",24)(1216,"span",25),tN(1217,"p-readonly"),Gl(1218,"br"),sg()()(),Tl(1219,"td",20)(1220,"code",27),tN(1221,"boolean"),sg()(),Tl(1222,"td",22),tN(1223,"-"),sg(),Tl(1224,"td",23)(1225,"em")(1226,"strong"),tN(1227,"(opcional)"),sg()(),Tl(1228,"p"),tN(1229,"Indica que o campo ser\xE1 somente leitura."),sg()()(),Tl(1230,"tr",15)(1231,"td",16)(1232,"div",24)(1233,"span",25),tN(1234,"p-required"),Gl(1235,"br"),sg()()(),Tl(1236,"td",20)(1237,"code",27),tN(1238,"boolean"),sg()(),Tl(1239,"td",22)(1240,"p")(1241,"code"),tN(1242,"false"),sg()()(),Tl(1243,"td",23)(1244,"em")(1245,"strong"),tN(1246,"(opcional)"),sg()(),Tl(1247,"p"),tN(1248,"Define que o campo ser\xE1 obrigat\xF3rio."),sg(),Tl(1249,"blockquote")(1250,"p"),tN(1251,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Tl(1252,"code"),tN(1253,"(p-disabled)"),sg(),tN(1254,"."),sg()()()(),Tl(1255,"tr",15)(1256,"td",16)(1257,"div",24)(1258,"span",25),tN(1259," p-required-field-error-message"),Gl(1260,"br"),sg()()(),Tl(1261,"td",20)(1262,"code",27),tN(1263,"boolean"),sg()(),Tl(1264,"td",22)(1265,"p")(1266,"code"),tN(1267,"false"),sg()()(),Tl(1268,"td",23)(1269,"em")(1270,"strong"),tN(1271,"(opcional)"),sg()(),Tl(1272,"p"),tN(1273,"Exibe a mensagem setada na propriedade "),Tl(1274,"code"),tN(1275,"p-error-pattern"),sg(),tN(1276," se o campo estiver vazio e for requerido."),sg(),Tl(1277,"blockquote")(1278,"p"),tN(1279,"Necess\xE1rio que a propriedade "),Tl(1280,"code"),tN(1281,"p-required"),sg(),tN(1282," esteja habilitada."),sg()()()(),Tl(1283,"tr",15)(1284,"td",16)(1285,"div",24)(1286,"span",25),tN(1287," p-show-required"),Gl(1288,"br"),sg()()(),Tl(1289,"td",20)(1290,"code",27),tN(1291,"boolean"),sg()(),Tl(1292,"td",22),tN(1293,"-"),sg(),Tl(1294,"td",23)(1295,"p"),tN(1296,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(1297,"blockquote")(1298,"p"),tN(1299,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1300,"ul")(1301,"li"),tN(1302,"N\xE3o possuir "),Tl(1303,"code"),tN(1304,"p-help"),sg(),tN(1305," e/ou "),Tl(1306,"code"),tN(1307,"p-label"),sg(),tN(1308,"."),sg()()()(),Tl(1309,"tr",15)(1310,"td",16)(1311,"div",24)(1312,"span",25),tN(1313," p-size"),Gl(1314,"br"),sg()()(),Tl(1315,"td",20)(1316,"code",26),tN(1317,"string"),sg()(),Tl(1318,"td",22)(1319,"p")(1320,"code"),tN(1321,"medium"),sg()()(),Tl(1322,"td",23)(1323,"em")(1324,"strong"),tN(1325,"(opcional)"),sg()(),Tl(1326,"p"),tN(1327,"Define o tamanho do componente:"),sg(),Tl(1328,"ul")(1329,"li")(1330,"code"),tN(1331,"small"),sg(),tN(1332,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(1333,"li")(1334,"code"),tN(1335,"medium"),sg(),tN(1336,": altura do input como 44px."),sg()(),Tl(1337,"blockquote")(1338,"p"),tN(1339,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(1340,"code"),tN(1341,"medium"),sg(),tN(1342,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1343,"a",35),tN(1344,"po-theme"),sg(),tN(1345,"."),sg()()()(),Tl(1346,"tr",15)(1347,"td",16)(1348,"div",24)(1349,"span",25),tN(1350," p-thousand-maxlength"),Gl(1351,"br"),sg()()(),Tl(1352,"td",20)(1353,"code",28),tN(1354,"number"),sg()(),Tl(1355,"td",22)(1356,"p")(1357,"code"),tN(1358,"13"),sg()()(),Tl(1359,"td",23)(1360,"em")(1361,"strong"),tN(1362,"(opcional)"),sg()(),Tl(1363,"p"),tN(1364,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal."),sg(),Tl(1365,"blockquote")(1366,"p")(1367,"strong"),tN(1368,"Importante:"),sg()()(),Tl(1369,"ul")(1370,"li"),tN(1371,"O valor m\xE1ximo permitido \xE9 13;"),sg(),Tl(1372,"li"),tN(1373,"A soma total de "),Tl(1374,"code"),tN(1375,"p-decimals-length"),sg(),tN(1376," com "),Tl(1377,"code"),tN(1378,"p-thousand-maxlength"),sg(),tN(1379," limita-se \xE0 16;"),sg(),Tl(1380,"li"),tN(1381,"Esta propriedade sobrep\xF5e o valor definido em "),Tl(1382,"code"),tN(1383,"p-decimals-length"),sg(),tN(1384,"."),sg()()()(),Tl(1385,"tr",15)(1386,"td",16)(1387,"div",24)(1388,"span",25),tN(1389," p-upper-case"),Gl(1390,"br"),sg()()(),Tl(1391,"td",20)(1392,"code",27),tN(1393,"boolean"),sg()(),Tl(1394,"td",22),tN(1395,"-"),sg(),Tl(1396,"td",23)(1397,"p"),tN(1398,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),sg()()()(),Tl(1399,"h3",11),tN(1400,"M\xE9todos"),sg(),Tl(1401,"table",36)(1402,"tr",15)(1403,"th",37)(1404,"div",24)(1405,"h4")(1406,"span",25),tN(1407," showAdditionalHelp "),sg()()()()(),Tl(1408,"tr",23)(1409,"td",23)(1410,"p"),tN(1411,"M\xE9todo que exibe "),Tl(1412,"code"),tN(1413,"p-helper"),sg(),tN(1414," ou executa a a\xE7\xE3o definida em "),Tl(1415,"code"),tN(1416,"p-helper{eventOnClick}"),sg(),tN(1417," ou em "),Tl(1418,"code"),tN(1419,"p-additionalHelp"),sg(),tN(1420,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1421,"code"),tN(1422,"p-keydown"),sg(),tN(1423,"."),sg(),Tl(1424,"blockquote")(1425,"p"),tN(1426,"Exibe ou oculta o conte\xFAdo do componente "),Tl(1427,"code"),tN(1428,"po-helper"),sg(),tN(1429," quando o componente estiver com foco."),sg()(),Tl(1430,"pre")(1431,"code"),tN(1432,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),sg()(),Tl(1433,"pre")(1434,"code"),tN(1435,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(1436,"br"),Tl(1437,"table",36)(1438,"tr",15)(1439,"th",37)(1440,"div",24)(1441,"h4")(1442,"span",25),tN(1443," focus "),sg()()()()(),Tl(1444,"tr",23)(1445,"td",23)(1446,"p"),tN(1447,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(1448,"p"),tN(1449,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(1450,"pre")(1451,"code"),tN(1452,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),sg()()()()(),Gl(1453,"br"),Tl(1454,"h3"),tN(1455,"Interfaces"),sg(),Tl(1456,"h4",38)(1457,"code",5),tN(1458,"ErrorAsyncProperties"),sg()(),Tl(1459,"div",2)(1460,"p"),tN(1461,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),sg()(),Tl(1462,"h4",11),tN(1463,"Propriedades"),sg(),Tl(1464,"table",12)(1465,"tr",13)(1466,"th",14),tN(1467,"Nome"),sg(),Tl(1468,"th",14),tN(1469,"Tipo"),sg(),Tl(1470,"th",14),tN(1471,"Descri\xE7\xE3o"),sg()(),Tl(1472,"tr",15)(1473,"td",16)(1474,"div",24)(1475,"span",25),tN(1476," errorAsync"),Gl(1477,"br"),sg()()(),Tl(1478,"td",20)(1479,"code",39),tN(1480,"(value) => Observable<boolean>"),sg()(),Tl(1481,"td",23)(1482,"p"),tN(1483,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(1484,"code"),tN(1485,"change"),sg(),tN(1486," ou "),Tl(1487,"code"),tN(1488,"change-model"),sg(),tN(1489,", dependendo do valor da propriedade "),Tl(1490,"code"),tN(1491,"triggerMode"),sg(),tN(1492,"."),sg()()(),Tl(1493,"tr",15)(1494,"td",16)(1495,"div",24)(1496,"span",25),tN(1497," triggerMode"),Gl(1498,"br"),sg()()(),Tl(1499,"td",20)(1500,"code",40),tN(1501,"'change' "),sg(),Tl(1502,"code",41),tN(1503," 'changeModel'"),sg()(),Tl(1504,"td",23)(1505,"em")(1506,"strong"),tN(1507,"(opcional)"),sg()(),Tl(1508,"p"),tN(1509,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Tl(1510,"code"),tN(1511,"change"),sg(),tN(1512," ou "),Tl(1513,"code"),tN(1514,"change-model"),sg(),tN(1515,"."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return l})();var be=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(wn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Decimal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-decimal-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-decimal-basic-view")(6,"sample-po-decimal-labs-view")(7,"sample-po-decimal-hourly-wage-view")(8,"sample-po-decimal-hourly-wage-reactive-form-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,de,ce,Ee,he,Se],encapsulation:2})}return l})();var Le=[{path:"",component:be}],xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue$1({imports:[vL.forChild(Le),vL]})}return l})();var st=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue$1({imports:[ar,xe]})}return l})();export{st as DocPoDecimalModule};