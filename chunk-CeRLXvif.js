import {f as fe,u as ue$1,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,cR as fY,cS as am,cU as She,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,cc as Nde,aJ as nme,cd as sme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,cV as bk,cW as wk,a3 as SNe,aD as Jy,aT as Zx,aE as e_,bc as Sx}from'./main-OS7VVRJY.js';var me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-basic"]],standalone:false,decls:1,vars:0,consts:[["name","decimal","p-label","PO Decimal"]],template:function(r,i){r&1&&Hl(0,"po-decimal",0);},dependencies:[She],encapsulation:2,changeDetection:1})}return l})();var ve=l=>({"docs-sample-code-tabs":l}),de=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Decimal Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-decimal-basic/sample-po-decimal-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-decimal-basic/sample-po-decimal-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-decimal-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ve,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,me],encapsulation:2})}return l})();var se=(()=>{class l{helperText;decimal;decimalsLength;event;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:"pt",label:"Portuguese"},{value:"en",label:"English"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"}];iconOptions=[{value:"an an-shopping-cart-simple",label:"an an-shopping-cart-simple"},{value:"an an-currency-dollar-simple",label:"an an-currency-dollar-simple"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.helperText="",this.decimal=void 0,this.decimalsLength=void 0,this.event="",this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder="",this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size="medium",this.properties=[];}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-labs"]],standalone:false,decls:23,vars:46,consts:[["f","ngForm"],["name","decimal",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-decimals-length","p-disabled","p-help","p-icon","p-label","p-loading","p-locale","p-error-pattern","p-max","p-min","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-thousand-maxlength","p-label-text-wrap","p-compact-label","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","locale","p-clean","","p-label","Locale",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","decimalsLength","p-clean","","p-help","M\xE1ximo 15","p-label","Decimals max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","thousandMaxlength","p-clean","","p-help","M\xE1ximo 13","p-label","Thousand max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=gx();Cl(0,"po-decimal",1),gw("ngModelChange",function(a){return Jy(p),Zx(i.decimal,a)||(i.decimal=a),e_(a)}),dt("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3)(4,"po-info",4),og(),Hl(5,"po-divider"),Cl(6,"form",null,0)(8,"po-input",5),gw("ngModelChange",function(a){return Jy(p),Zx(i.label,a)||(i.label=a),e_(a)}),og(),Z0(),Cl(9,"po-input",6),gw("ngModelChange",function(a){return Jy(p),Zx(i.help,a)||(i.help=a),e_(a)}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(a){return Jy(p),Zx(i.helperText,a)||(i.helperText=a),e_(a)}),og(),Z0(),Cl(11,"po-input",8),gw("ngModelChange",function(a){return Jy(p),Zx(i.placeholder,a)||(i.placeholder=a),e_(a)}),og(),Z0(),Cl(12,"po-input",9),gw("ngModelChange",function(a){return Jy(p),Zx(i.errorPattern,a)||(i.errorPattern=a),e_(a)}),og(),Z0(),Cl(13,"po-select",10),gw("ngModelChange",function(a){return Jy(p),Zx(i.icon,a)||(i.icon=a),e_(a)}),og(),Z0(),Cl(14,"po-number",11),gw("ngModelChange",function(a){return Jy(p),Zx(i.min,a)||(i.min=a),e_(a)}),og(),Z0(),Cl(15,"po-number",12),gw("ngModelChange",function(a){return Jy(p),Zx(i.max,a)||(i.max=a),e_(a)}),og(),Z0(),Cl(16,"po-select",13),gw("ngModelChange",function(a){return Jy(p),Zx(i.locale,a)||(i.locale=a),e_(a)}),og(),Z0(),Cl(17,"po-number",14),gw("ngModelChange",function(a){return Jy(p),Zx(i.decimalsLength,a)||(i.decimalsLength=a),e_(a)}),og(),Z0(),Cl(18,"po-number",15),gw("ngModelChange",function(a){return Jy(p),Zx(i.thousandMaxlength,a)||(i.thousandMaxlength=a),e_(a)}),og(),Z0(),Cl(19,"po-checkbox-group",16),gw("ngModelChange",function(a){return Jy(p),Zx(i.properties,a)||(i.properties=a),e_(a)}),og(),Z0(),Cl(20,"po-radio-group",17),gw("ngModelChange",function(a){return Jy(p),Zx(i.size,a)||(i.size=a),e_(a)}),og(),Z0(),Cl(21,"div",2)(22,"po-button",18),dt("p-click",function(){return i.restore()}),og()()();}r&2&&(pw("ngModel",i.decimal),ZE("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-decimals-length",i.decimalsLength)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-error-pattern",i.errorPattern)("p-max",i.max)("p-min",i.min)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-thousand-maxlength",i.thousandMaxlength)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),X0(),Lp(3),ZE("p-value",i.decimal),Lp(),ZE("p-value",i.event),Lp(4),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.help),X0(),Lp(),pw("ngModel",i.helperText),X0(),Lp(),pw("ngModel",i.placeholder),X0(),Lp(),pw("ngModel",i.errorPattern),X0(),Lp(),pw("ngModel",i.icon),ZE("p-options",i.iconOptions),X0(),Lp(),pw("ngModel",i.min),X0(),Lp(),pw("ngModel",i.max),X0(),Lp(),pw("ngModel",i.locale),ZE("p-options",i.localeOptions),X0(),Lp(),pw("ngModel",i.decimalsLength),ZE("p-max",i.maxDecimalsLength),X0(),Lp(),pw("ngModel",i.thousandMaxlength),ZE("p-max",i.maxThousandMaxlength),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,She,q3,Hhe,Nde,nme,sme],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Decimal Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-decimal-labs/sample-po-decimal-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-decimal
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-decimal-labs/sample-po-decimal-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-decimal-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,we,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,se],encapsulation:2})}return l})();var ue=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let d=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/d;this.hourlyWage=r;}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage"]],standalone:false,decls:16,vars:6,consts:[["f","ngForm"],[1,"po-font-title"],[1,"po-row"],["name","weekHours","p-label","Week Hours","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","workingDaysPerWeek","p-label","Working days per week","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantityDaysPerMonth","p-label","Quantity days per month","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=gx();Cl(0,"form",null,0)(2,"div",1),qx(3,"Calculate hourly wage"),og(),Hl(4,"po-divider"),Cl(5,"div",2)(6,"po-number",3),gw("ngModelChange",function(a){return Jy(p),Zx(i.weekHours,a)||(i.weekHours=a),e_(a)}),og(),Z0(),Cl(7,"po-number",4),gw("ngModelChange",function(a){return Jy(p),Zx(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),e_(a)}),og(),Z0(),og(),Cl(8,"div",2)(9,"po-number",5),gw("ngModelChange",function(a){return Jy(p),Zx(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),e_(a)}),og(),Z0(),Cl(10,"po-decimal",6),gw("ngModelChange",function(a){return Jy(p),Zx(i.salary,a)||(i.salary=a),e_(a)}),dt("p-change",function(){return i.calculate()}),og(),Z0(),og(),Cl(11,"div",2)(12,"po-decimal",7),gw("ngModelChange",function(a){return Jy(p),Zx(i.hourlyWage,a)||(i.hourlyWage=a),e_(a)}),og(),Z0(),og(),Cl(13,"div",2)(14,"po-button",8),dt("p-click",function(){Jy(p);let a=Sx(1);return e_(a.reset())}),og(),Cl(15,"po-button",9),dt("p-click",function(){return i.calculate()}),og()()();}r&2&&(Lp(6),pw("ngModel",i.weekHours),X0(),Lp(),pw("ngModel",i.workingDaysPerWeek),X0(),Lp(2),pw("ngModel",i.quantityDaysPerMonth),X0(),Lp(),pw("ngModel",i.salary),X0(),Lp(2),pw("ngModel",i.hourlyWage),X0(),Lp(3),ZE("p-disabled",!i.hourlyWage));},dependencies:[lY,sY,aY,gk,fk,Qt,_v,She,Hhe],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Decimal - Hourly Wage"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html"),og(),Cl(13,"pre",7),qx(14,`<form #f="ngForm">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-decimal-hourly-wage"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,_e,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ue],encapsulation:2})}return l})();var ge=(()=>{class l{formBuilder=f(fY);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,am.required],salary:[null,am.required],weekHours:[null,am.required],workingDaysPerWeek:[null,am.required]});}calculate(){let{weekHours:d,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:p}=this.formCalculateHourlyWage.value,s=d/r*i,a=p/s;this.formCalculateHourlyWage.patchValue({hourlyWage:a});}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form"]],standalone:false,decls:15,vars:2,consts:[[3,"formGroup"],[1,"po-font-title"],[1,"po-row"],["formControlName","weekHours","p-label","Week Hours",1,"po-md-6"],["formControlName","workingDaysPerWeek","p-label","Working days per week",1,"po-md-6"],["formControlName","quantityDaysPerMonth","p-label","Quantity days per month",1,"po-md-6"],["formControlName","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-thousand-maxlength","13",1,"po-md-6",3,"p-change"],["formControlName","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-thousand-maxlength","13",1,"po-md-6"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(Cl(0,"form",0)(1,"div",1),qx(2,"Calculate hourly wage"),og(),Hl(3,"po-divider"),Cl(4,"div",2),Hl(5,"po-number",3),Z0(),Hl(6,"po-number",4),Z0(),og(),Cl(7,"div",2),Hl(8,"po-number",5),Z0(),Cl(9,"po-decimal",6),dt("p-change",function(){return i.calculate()}),og(),Z0(),og(),Cl(10,"div",2),Hl(11,"po-decimal",7),Z0(),og(),Cl(12,"div",2)(13,"po-button",8),dt("p-click",function(){return i.formCalculateHourlyWage.reset()}),og(),Cl(14,"po-button",9),dt("p-click",function(){return i.calculate()}),og()()()),r&2&&(ZE("formGroup",i.formCalculateHourlyWage),Lp(5),X0(),Lp(),X0(),Lp(2),X0(),Lp(),X0(),Lp(2),X0(),Lp(3),ZE("p-disabled",i.formCalculateHourlyWage.invalid));},dependencies:[lY,sY,aY,bk,wk,Qt,_v,She,Hhe],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Decimal - Hourly Wage Reactive Form"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html"),og(),Cl(13,"pre",7),qx(14,`<form [formGroup]="formCalculateHourlyWage">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-decimal-hourly-wage-reactive-form"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,qe,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ge],encapsulation:2})}return l})();var Se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-decimal-doc"]],standalone:false,decls:1516,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoDecimalComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),og(),Cl(24,"p"),qx(25,"Importante:"),og(),Cl(26,"ul")(27,"li"),qx(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),og()(),Cl(29,"h4"),qx(30,"Tokens customiz\xE1veis"),og(),Cl(31,"p"),qx(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Hl(33,"br"),qx(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Cl(35,"code"),qx(36,".po-input"),og()(),Cl(37,"blockquote")(38,"p"),qx(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),Cl(40,"a",6),qx(41,"Grid System"),og(),qx(42,"."),og()(),Cl(43,"blockquote")(44,"p"),qx(45,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(46,"a",7),qx(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(48,"."),og()(),Cl(49,"table")(50,"thead")(51,"tr")(52,"th"),qx(53,"Propriedade"),og(),Cl(54,"th"),qx(55,"Descri\xE7\xE3o"),og(),Cl(56,"th"),qx(57,"Valor Padr\xE3o"),og()()(),Cl(58,"tbody")(59,"tr")(60,"td")(61,"strong"),qx(62,"Default Values"),og()(),Hl(63,"td")(64,"td"),og(),Cl(65,"tr")(66,"td")(67,"code"),qx(68,"--font-family"),og()(),Cl(69,"td"),qx(70,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(71,"td")(72,"code"),qx(73,"var(--font-family-theme)"),og()()(),Cl(74,"tr")(75,"td")(76,"code"),qx(77,"--font-size"),og()(),Cl(78,"td"),qx(79,"Tamanho da fonte"),og(),Cl(80,"td")(81,"code"),qx(82,"var(--font-size-default)"),og()()(),Cl(83,"tr")(84,"td")(85,"code"),qx(86,"--text-color-placeholder"),og()(),Cl(87,"td"),qx(88,"Cor do texto placeholder"),og(),Cl(89,"td")(90,"code"),qx(91,"var(--color-neutral-light-30)"),og()()(),Cl(92,"tr")(93,"td")(94,"code"),qx(95,"--color"),og()(),Cl(96,"td"),qx(97,"Cor pincipal do input"),og(),Cl(98,"td")(99,"code"),qx(100,"var(--color-neutral-dark-70)"),og()()(),Cl(101,"tr")(102,"td")(103,"code"),qx(104,"--background"),og()(),Cl(105,"td"),qx(106,"Cor de background"),og(),Cl(107,"td")(108,"code"),qx(109,"var(--color-neutral-light-05)"),og()()(),Cl(110,"tr")(111,"td")(112,"code"),qx(113,"--padding"),og()(),Cl(114,"td"),qx(115,"Preenchimento"),og(),Cl(116,"td")(117,"code"),qx(118,"0 0.5rem"),og()()(),Cl(119,"tr")(120,"td")(121,"code"),qx(122,"--text-color"),og()(),Cl(123,"td"),qx(124,"Cor do texto"),og(),Cl(125,"td")(126,"code"),qx(127,"var(--color-neutral-dark-90)"),og()()(),Cl(128,"tr")(129,"td")(130,"code"),qx(131,"--field-container-title-justify"),og()(),Cl(132,"td"),qx(133,"Alinhamento horizontal do t\xEDtulo ("),Cl(134,"code"),qx(135,"justify-content"),og(),qx(136,")"),og(),Cl(137,"td")(138,"code"),qx(139,"space-between"),og()()(),Cl(140,"tr")(141,"td")(142,"code"),qx(143,"--field-container-title-flex"),og()(),Cl(144,"td"),qx(145,"Flex do t\xEDtulo ("),Cl(146,"code"),qx(147,"flex"),og(),qx(148,")"),og(),Cl(149,"td")(150,"code"),qx(151,"1 auto"),og()()(),Cl(152,"tr")(153,"td")(154,"strong"),qx(155,"Hover"),og()(),Hl(156,"td")(157,"td"),og(),Cl(158,"tr")(159,"td")(160,"code"),qx(161,"--color-hover"),og()(),Cl(162,"td"),qx(163,"Cor principal no estado hover"),og(),Cl(164,"td")(165,"code"),qx(166,"var(--color-brand-01-dark)"),og()()(),Cl(167,"tr")(168,"td")(169,"code"),qx(170,"--background-hover"),og()(),Cl(171,"td"),qx(172,"Cor de background no estado hover"),og(),Cl(173,"td")(174,"code"),qx(175,"var(--color-brand-01-lightest)"),og()()(),Cl(176,"tr")(177,"td")(178,"strong"),qx(179,"Focused"),og()(),Hl(180,"td")(181,"td"),og(),Cl(182,"tr")(183,"td")(184,"code"),qx(185,"--color-focused"),og()(),Cl(186,"td"),qx(187,"Cor principal no estado de focus"),og(),Cl(188,"td")(189,"code"),qx(190,"var(--color-action-default)"),og()()(),Cl(191,"tr")(192,"td")(193,"code"),qx(194,"--outline-color-focused"),og()(),Cl(195,"td"),qx(196,"Cor do outline do estado de focus"),og(),Cl(197,"td")(198,"code"),qx(199,"var(--color-action-focus)"),og()()(),Cl(200,"tr")(201,"td")(202,"strong"),qx(203,"Disabled"),og()(),Hl(204,"td")(205,"td"),og(),Cl(206,"tr")(207,"td")(208,"code"),qx(209,"--color-disabled"),og()(),Cl(210,"td"),qx(211,"Cor principal no estado disabled"),og(),Cl(212,"td")(213,"code"),qx(214,"var(--color-neutral-light-30)"),og()()(),Cl(215,"tr")(216,"td")(217,"code"),qx(218,"--background-disabled"),og()(),Cl(219,"td"),qx(220,"Cor de background no estado disabled"),og(),Cl(221,"td")(222,"code"),qx(223,"var(--color-neutral-light-20)"),og()()(),Cl(224,"tr")(225,"td")(226,"code"),qx(227,"--text-color-disabled"),og()(),Cl(228,"td"),qx(229,"Cor do texto no estado disabled"),og(),Cl(230,"td")(231,"code"),qx(232,"var(--color-neutral-dark-70)"),og()()()()(),Cl(233,"p"),Hl(234,"br"),qx(235," - O "),Cl(236,"code"),qx(237,"po-decimal"),og(),qx(238," \xE9 um "),Cl(239,"em"),qx(240,"input"),og(),qx(241," espec\xEDfico para receber apenas n\xFAmeros decimais, por isso recebe as seguintes caracter\xEDsticas:"),og(),Cl(242,"ul")(243,"li"),qx(244,"Aceita apenas n\xFAmeros;"),og(),Cl(245,"li"),qx(246,"Utiliza ',' como separador de decimal;"),og(),Cl(247,"li"),qx(248,"Utiliza '.' para separa\xE7\xE3o de milhar;"),og(),Cl(249,"li"),qx(250,"\xC9 poss\xEDvel configurar a quantidade de casas decimais e a quantidade de digitos do campo."),og()(),Cl(251,"blockquote")(252,"p")(253,"strong"),qx(254,"Importante:"),og(),qx(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),Cl(256,"code"),qx(257,"32 bits"),og(),qx(258,`, e para que os valores comportem-se devidamente,
o `),Cl(259,"code"),qx(260,"po-decimal"),og(),qx(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),Cl(262,"code"),qx(263,"p-decimals-length"),og(),qx(264," e "),Cl(265,"code"),qx(266,"p-thousand-maxlength"),og(),qx(267,"."),og()()(),Cl(268,"div",8)(269,"h4",9),qx(270,"Seletor"),og(),Cl(271,"pre",10),qx(272,`<po-decimal
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
`),og()(),Cl(273,"h4",11),qx(274,"Propriedades"),og(),Cl(275,"table",12)(276,"tr",13)(277,"th",14),qx(278,"Nome"),og(),Cl(279,"th",14),qx(280,"Tipo"),og(),Cl(281,"th",14),qx(282,"Padr\xE3o"),og(),Cl(283,"th",14),qx(284,"Descri\xE7\xE3o"),og()(),Cl(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),qx(289," (p-additional-help)"),Hl(290,"br"),og()(),Cl(291,"div",19),qx(292,"Deprecated"),og()(),Cl(293,"td",20)(294,"code",21),qx(295,"EventEmitter"),og()(),Cl(296,"td",22),qx(297,"-"),og(),Cl(298,"td",23)(299,"em")(300,"strong"),qx(301,"(opcional)"),og()(),Cl(302,"p"),qx(303,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),og(),Cl(304,"blockquote")(305,"p"),qx(306,"Essa propriedade est\xE1 "),Cl(307,"strong"),qx(308,"depreciada"),og(),qx(309," e ser\xE1 removida na vers\xE3o "),Cl(310,"code"),qx(311,"23.x.x"),og(),qx(312,". Recomendamos utilizar a propriedade "),Cl(313,"code"),qx(314,"p-helper"),og(),qx(315," que oferece mais recursos e flexibilidade."),og()()()(),Cl(316,"tr",15)(317,"td",16)(318,"div",24)(319,"span",25),qx(320," p-additional-help-tooltip"),Hl(321,"br"),og()(),Cl(322,"div",19),qx(323,"Deprecated"),og()(),Cl(324,"td",20)(325,"code",26),qx(326,"string"),og()(),Cl(327,"td",22),qx(328,"-"),og(),Cl(329,"td",23)(330,"em")(331,"strong"),qx(332,"(opcional)"),og()(),Cl(333,"p"),qx(334,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Cl(335,"code"),qx(336,"po-helper"),og(),qx(337,`.
`),Cl(338,"strong"),qx(339,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),og()(),Cl(340,"blockquote")(341,"p"),qx(342,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),og()(),Cl(343,"blockquote")(344,"p"),qx(345,"Essa propriedade est\xE1 "),Cl(346,"strong"),qx(347,"depreciada"),og(),qx(348," e ser\xE1 removida na vers\xE3o "),Cl(349,"code"),qx(350,"23.x.x"),og(),qx(351,". Recomendamos utilizar a propriedade "),Cl(352,"code"),qx(353,"p-helper"),og(),qx(354," que oferece mais recursos e flexibilidade."),og()()()(),Cl(355,"tr",15)(356,"td",16)(357,"div",24)(358,"span",25),qx(359," p-append-in-body"),Hl(360,"br"),og()()(),Cl(361,"td",20)(362,"code",27),qx(363,"boolean"),og()(),Cl(364,"td",22)(365,"p")(366,"code"),qx(367,"false"),og()()(),Cl(368,"td",23)(369,"em")(370,"strong"),qx(371,"(opcional)"),og()(),Cl(372,"p"),qx(373,"Define que o popover ("),Cl(374,"code"),qx(375,"p-helper"),og(),qx(376," e/ou "),Cl(377,"code"),qx(378,"p-error-limit"),og(),qx(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),og(),Cl(380,"blockquote")(381,"p"),qx(382,"Quando utilizado com "),Cl(383,"code"),qx(384,"p-helper"),og(),qx(385,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),og()()()(),Cl(386,"tr",15)(387,"td",16)(388,"div",24)(389,"span",25),qx(390," p-auto-focus"),Hl(391,"br"),og()()(),Cl(392,"td",20)(393,"code",27),qx(394,"boolean"),og()(),Cl(395,"td",22)(396,"p")(397,"code"),qx(398,"false"),og()()(),Cl(399,"td",23)(400,"em")(401,"strong"),qx(402,"(opcional)"),og()(),Cl(403,"p"),qx(404,"Aplica foco no elemento ao ser iniciado."),og(),Cl(405,"blockquote")(406,"p"),qx(407,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),og()()()(),Cl(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),qx(412," (p-blur)"),Hl(413,"br"),og()()(),Cl(414,"td",20)(415,"code",21),qx(416,"EventEmitter"),og()(),Cl(417,"td",22),qx(418,"-"),og(),Cl(419,"td",23)(420,"em")(421,"strong"),qx(422,"(opcional)"),og()(),Cl(423,"p"),qx(424,"Evento disparado ao sair do campo."),og()()(),Cl(425,"tr",15)(426,"td",16)(427,"div",17)(428,"span",18),qx(429," (p-change)"),Hl(430,"br"),og()()(),Cl(431,"td",20)(432,"code",21),qx(433,"EventEmitter"),og()(),Cl(434,"td",22),qx(435,"-"),og(),Cl(436,"td",23)(437,"em")(438,"strong"),qx(439,"(opcional)"),og()(),Cl(440,"p"),qx(441,"Evento disparado ao alterar valor e deixar o campo."),og()()(),Cl(442,"tr",15)(443,"td",16)(444,"div",17)(445,"span",18),qx(446," (p-change-model)"),Hl(447,"br"),og()()(),Cl(448,"td",20)(449,"code",21),qx(450,"EventEmitter"),og()(),Cl(451,"td",22),qx(452,"-"),og(),Cl(453,"td",23)(454,"em")(455,"strong"),qx(456,"(opcional)"),og()(),Cl(457,"p"),qx(458,"Evento disparado ao alterar valor do model."),og()()(),Cl(459,"tr",15)(460,"td",16)(461,"div",24)(462,"span",25),qx(463,"p-clean"),Hl(464,"br"),og()()(),Cl(465,"td",20)(466,"code",27),qx(467,"boolean"),og()(),Cl(468,"td",22),qx(469,"-"),og(),Cl(470,"td",23)(471,"em")(472,"strong"),qx(473,"(opcional)"),og()(),Cl(474,"p"),qx(475,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),og()()(),Cl(476,"tr",15)(477,"td",16)(478,"div",24)(479,"span",25),qx(480," p-compact-label"),Hl(481,"br"),og()()(),Cl(482,"td",20)(483,"code",27),qx(484,"boolean"),og()(),Cl(485,"td",22)(486,"p")(487,"code"),qx(488,"false"),og()()(),Cl(489,"td",23)(490,"em")(491,"strong"),qx(492,"(opcional)"),og()(),Cl(493,"p"),qx(494,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og(),Cl(495,"p"),qx(496,"Quando habilitado ("),Cl(497,"code"),qx(498,"true"),og(),qx(499,"), o modo compacto afeta o conjunto composto por:"),og(),Cl(500,"ul")(501,"li")(502,"code"),qx(503,"po-label"),og()(),Cl(504,"li")(505,"code"),qx(506,"p-requirement (showRequired)"),og()(),Cl(507,"li")(508,"code"),qx(509,"po-helper"),og()()(),Cl(510,"p"),qx(511,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),og(),Cl(512,"p"),qx(513,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),og(),Cl(514,"ul")(515,"li")(516,"code"),qx(517,"--field-container-title-justify"),og()(),Cl(518,"li")(519,"code"),qx(520,"--field-container-title-flex"),og()()(),Cl(521,"p"),qx(522,"Exemplo:"),og(),Cl(523,"pre")(524,"code"),qx(525,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),og()(),Cl(526,"p"),qx(527,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),og()()(),Cl(528,"tr",15)(529,"td",16)(530,"div",24)(531,"span",25),qx(532," p-decimals-length"),Hl(533,"br"),og()()(),Cl(534,"td",20)(535,"code",28),qx(536,"number"),og()(),Cl(537,"td",22)(538,"p")(539,"code"),qx(540,"2"),og()()(),Cl(541,"td",23)(542,"em")(543,"strong"),qx(544,"(opcional)"),og()(),Cl(545,"p"),qx(546,"Quantidade m\xE1xima de casas decimais."),og(),Cl(547,"blockquote")(548,"p")(549,"strong"),qx(550,"Importante:"),og()()(),Cl(551,"ul")(552,"li"),qx(553,"O valor m\xE1ximo permitido \xE9 15;"),og(),Cl(554,"li"),qx(555,"A soma total de "),Cl(556,"code"),qx(557,"p-decimals-length"),og(),qx(558," com "),Cl(559,"code"),qx(560,"p-thousand-maxlength"),og(),qx(561," limita-se \xE0 16;"),og(),Cl(562,"li"),qx(563,"Esta propriedade sobrep\xF5e apenas o valor "),Cl(564,"strong"),qx(565,"padr\xE3o"),og(),qx(566," de "),Cl(567,"code"),qx(568,"p-thousand-maxlength"),og(),qx(569,";"),og(),Cl(570,"li"),qx(571,"Caso "),Cl(572,"code"),qx(573,"p-thousand-maxlength"),og(),qx(574," tenha um valor definido, esta propriedade poder\xE1 receber apenas o valor restante do limite total (16)."),og()()()(),Cl(575,"tr",15)(576,"td",16)(577,"div",24)(578,"span",25),qx(579,"p-disabled"),Hl(580,"br"),og()()(),Cl(581,"td",20)(582,"code",27),qx(583,"boolean"),og()(),Cl(584,"td",22)(585,"p")(586,"code"),qx(587,"false"),og()()(),Cl(588,"td",23)(589,"em")(590,"strong"),qx(591,"(opcional)"),og()(),Cl(592,"p"),qx(593,"Se verdadeiro, desabilita o campo."),og()()(),Cl(594,"tr",15)(595,"td",16)(596,"div",24)(597,"span",25),qx(598," p-emit-all-changes"),Hl(599,"br"),og()()(),Cl(600,"td",20)(601,"code",27),qx(602,"boolean"),og()(),Cl(603,"td",22)(604,"p")(605,"code"),qx(606,"false"),og()()(),Cl(607,"td",23)(608,"em")(609,"strong"),qx(610,"(opcional)"),og()(),Cl(611,"p"),qx(612,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),og()()(),Cl(613,"tr",15)(614,"td",16)(615,"div",17)(616,"span",18),qx(617," (p-enter)"),Hl(618,"br"),og()()(),Cl(619,"td",20)(620,"code",21),qx(621,"EventEmitter"),og()(),Cl(622,"td",22),qx(623,"-"),og(),Cl(624,"td",23)(625,"em")(626,"strong"),qx(627,"(opcional)"),og()(),Cl(628,"p"),qx(629,"Evento disparado ao entrar do campo."),og()()(),Cl(630,"tr",15)(631,"td",16)(632,"div",24)(633,"span",25),qx(634," p-error-async-properties"),Hl(635,"br"),og()()(),Cl(636,"td",20)(637,"code",29),qx(638,"ErrorAsyncProperties"),og()(),Cl(639,"td",22),qx(640,"-"),og(),Cl(641,"td",23)(642,"em")(643,"strong"),qx(644,"(opcional)"),og()(),Cl(645,"p"),qx(646,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Cl(647,"code"),qx(648,"Reactive Forms"),og(),qx(649,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),Cl(650,"code"),qx(651,"asyncValidators"),og(),qx(652,"."),og()()(),Cl(653,"tr",15)(654,"td",16)(655,"div",24)(656,"span",25),qx(657," p-error-limit"),Hl(658,"br"),og()()(),Cl(659,"td",20)(660,"code",27),qx(661,"boolean"),og()(),Cl(662,"td",22)(663,"p")(664,"code"),qx(665,"false"),og()()(),Cl(666,"td",23)(667,"em")(668,"strong"),qx(669,"(opcional)"),og()(),Cl(670,"p"),qx(671,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og(),Cl(672,"blockquote")(673,"p"),qx(674,"Caso essa propriedade seja definida como "),Cl(675,"code"),qx(676,"true"),og(),qx(677,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),og()()()(),Cl(678,"tr",15)(679,"td",16)(680,"div",24)(681,"span",25),qx(682," p-error-pattern"),Hl(683,"br"),og()()(),Cl(684,"td",20)(685,"code",26),qx(686,"string"),og()(),Cl(687,"td",22),qx(688,"-"),og(),Cl(689,"td",23)(690,"em")(691,"strong"),qx(692,"(opcional)"),og()(),Cl(693,"p"),qx(694,"Mensagem que ser\xE1 apresentada quando o "),Cl(695,"code"),qx(696,"pattern"),og(),qx(697," ou a m\xE1scara n\xE3o for satisfeita."),og(),Cl(698,"blockquote")(699,"p"),qx(700,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Cl(701,"code"),qx(702,"p-required-field-error-message"),og(),qx(703," em conjunto."),og()()()(),Cl(704,"tr",15)(705,"td",16)(706,"div",24)(707,"span",25),qx(708," p-help"),Hl(709,"br"),og()()(),Cl(710,"td",20)(711,"code",26),qx(712,"string"),og()(),Cl(713,"td",22),qx(714,"-"),og(),Cl(715,"td",23)(716,"em")(717,"strong"),qx(718,"(opcional)"),og()(),Cl(719,"p"),qx(720,"Texto de apoio do campo."),og()()(),Cl(721,"tr",15)(722,"td",16)(723,"div",24)(724,"span",25),qx(725," p-icon"),Hl(726,"br"),og()()(),Cl(727,"td",20)(728,"code",26),qx(729,"string "),og(),Cl(730,"code",30),qx(731," TemplateRef<void>"),og()(),Cl(732,"td",22),qx(733,"-"),og(),Cl(734,"td",23)(735,"em")(736,"strong"),qx(737,"(opcional)"),og()(),Cl(738,"p"),qx(739,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),og(),Cl(740,"p"),qx(741,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),Cl(742,"a",31),qx(743,"Biblioteca de \xEDcones"),og(),qx(744,". conforme exemplo abaixo:"),og(),Cl(745,"pre")(746,"code"),qx(747,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),og()(),Cl(748,"p"),qx(749,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),Cl(750,"em"),qx(751,"Font Awesome"),og(),qx(752,", da seguinte forma:"),og(),Cl(753,"pre")(754,"code"),qx(755,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),og()(),Cl(756,"p"),qx(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),Cl(758,"code"),qx(759,"TemplateRef"),og(),qx(760,", conforme exemplo abaixo:"),og(),Cl(761,"pre")(762,"code"),qx(763,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),og()(),Cl(764,"blockquote")(765,"p"),qx(766,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),Cl(767,"code"),qx(768,"font-size: inherit"),og(),qx(769," caso o \xEDcone utilizado n\xE3o aplique-o."),og()()()(),Cl(770,"tr",15)(771,"td",16)(772,"div",17)(773,"span",18),qx(774," (p-keydown)"),Hl(775,"br"),og()()(),Cl(776,"td",20)(777,"code",21),qx(778,"EventEmitter"),og()(),Cl(779,"td",22),qx(780,"-"),og(),Cl(781,"td",23)(782,"em")(783,"strong"),qx(784,"(opcional)"),og()(),Cl(785,"p"),qx(786,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Cl(787,"code"),qx(788,"KeyboardEvent"),og(),qx(789," com informa\xE7\xF5es sobre a tecla."),og()()(),Cl(790,"tr",15)(791,"td",16)(792,"div",24)(793,"span",25),qx(794," p-label"),Hl(795,"br"),og()()(),Cl(796,"td",20)(797,"code",26),qx(798,"string"),og()(),Cl(799,"td",22),qx(800,"-"),og(),Cl(801,"td",23)(802,"em")(803,"strong"),qx(804,"(opcional)"),og()(),Cl(805,"p"),qx(806,"R\xF3tulo do campo."),og()()(),Cl(807,"tr",15)(808,"td",16)(809,"div",24)(810,"span",25),qx(811," p-label-text-wrap"),Hl(812,"br"),og()()(),Cl(813,"td",20)(814,"code",27),qx(815,"boolean"),og()(),Cl(816,"td",22)(817,"p")(818,"code"),qx(819,"false"),og()()(),Cl(820,"td",23)(821,"em")(822,"strong"),qx(823,"(opcional)"),og()(),Cl(824,"p"),qx(825,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(826,"code"),qx(827,"p-label"),og(),qx(828,". Quando "),Cl(829,"code"),qx(830,"p-label-text-wrap"),og(),qx(831,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),og()()(),Cl(832,"tr",15)(833,"td",16)(834,"div",24)(835,"span",25),qx(836," p-loading"),Hl(837,"br"),og()()(),Cl(838,"td",20)(839,"code",27),qx(840,"boolean"),og()(),Cl(841,"td",22)(842,"p")(843,"code"),qx(844,"false"),og()()(),Cl(845,"td",23)(846,"em")(847,"strong"),qx(848,"(opcional)"),og()(),Cl(849,"p"),qx(850,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Cl(851,"tr",15)(852,"td",16)(853,"div",24)(854,"span",25),qx(855," p-locale"),Hl(856,"br"),og()()(),Cl(857,"td",20)(858,"code",26),qx(859,"string"),og()(),Cl(860,"td",22),qx(861,"-"),og(),Cl(862,"td",23)(863,"em")(864,"strong"),qx(865,"(opcional)"),og()(),Cl(866,"p"),qx(867,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),Cl(868,"a",32)(869,"code"),qx(870,"I18n"),og()()(),Cl(871,"blockquote")(872,"p"),qx(873,"Para ver quais linguagens suportadas acesse "),Cl(874,"a",32)(875,"code"),qx(876,"I18n"),og()()()()()(),Cl(877,"tr",15)(878,"td",16)(879,"div",24)(880,"span",25),qx(881,"p-mask"),Hl(882,"br"),og()()(),Cl(883,"td",20)(884,"code",26),qx(885,"string"),og()(),Cl(886,"td",22),qx(887,"-"),og(),Cl(888,"td",23)(889,"em")(890,"strong"),qx(891,"(opcional)"),og()(),Cl(892,"p"),qx(893,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),og()()(),Cl(894,"tr",15)(895,"td",16)(896,"div",24)(897,"span",25),qx(898,"p-mask-format-model"),Hl(899,"br"),og()()(),Cl(900,"td",20)(901,"code",27),qx(902,"boolean"),og()(),Cl(903,"td",22)(904,"p")(905,"code"),qx(906,"false"),og()()(),Cl(907,"td",23)(908,"em")(909,"strong"),qx(910,"(opcional)"),og()(),Cl(911,"p"),qx(912,"Indica se o "),Cl(913,"code"),qx(914,"model"),og(),qx(915," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),og()()(),Cl(916,"tr",15)(917,"td",16)(918,"div",24)(919,"span",25),qx(920," p-mask-no-length-validation"),Hl(921,"br"),og()()(),Cl(922,"td",20)(923,"code",27),qx(924,"boolean"),og()(),Cl(925,"td",22)(926,"p")(927,"code"),qx(928,"false"),og()()(),Cl(929,"td",23)(930,"p"),qx(931,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),Cl(932,"code"),qx(933,"minLength"),og(),qx(934,") e m\xE1ximo ("),Cl(935,"code"),qx(936,"maxLength"),og(),qx(937,") quando h\xE1 uma m\xE1scara ("),Cl(938,"code"),qx(939,"p-mask"),og(),qx(940,") definida."),og(),Cl(941,"ul")(942,"li"),qx(943,"Quando "),Cl(944,"code"),qx(945,"true"),og(),qx(946,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),og(),Cl(947,"li"),qx(948,"Quando "),Cl(949,"code"),qx(950,"false"),og(),qx(951,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),og()(),Cl(952,"blockquote")(953,"p"),qx(954,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),Cl(955,"code"),qx(956,"p-mask-format-model"),og(),qx(957,"."),og()(),Cl(958,"p"),qx(959,"Exemplo:"),og(),Cl(960,"pre")(961,"code"),qx(962,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),og()(),Cl(963,"ul")(964,"li"),qx(965,"Entrada: "),Cl(966,"code"),qx(967,"123-456"),og(),qx(968," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),Cl(969,"code"),qx(970,"-"),og(),qx(971,"."),og()()()(),Cl(972,"tr",15)(973,"td",16)(974,"div",24)(975,"span",25),qx(976," p-max"),Hl(977,"br"),og()()(),Cl(978,"td",20)(979,"code",28),qx(980,"number"),og()(),Cl(981,"td",22),qx(982,"-"),og(),Cl(983,"td",23)(984,"em")(985,"strong"),qx(986,"(opcional)"),og()(),Cl(987,"p"),qx(988,"Valor m\xE1ximo."),og()()(),Cl(989,"tr",15)(990,"td",16)(991,"div",24)(992,"span",25),qx(993," p-maxlength"),Hl(994,"br"),og()()(),Cl(995,"td",20)(996,"code",28),qx(997,"number"),og()(),Cl(998,"td",22),qx(999,"-"),og(),Cl(1e3,"td",23)(1001,"em")(1002,"strong"),qx(1003,"(opcional)"),og()(),Cl(1004,"p"),qx(1005,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),og()()(),Cl(1006,"tr",15)(1007,"td",16)(1008,"div",24)(1009,"span",25),qx(1010," p-min"),Hl(1011,"br"),og()()(),Cl(1012,"td",20)(1013,"code",28),qx(1014,"number"),og()(),Cl(1015,"td",22),qx(1016,"-"),og(),Cl(1017,"td",23)(1018,"em")(1019,"strong"),qx(1020,"(opcional)"),og()(),Cl(1021,"p"),qx(1022,"Valor m\xEDnimo."),og()()(),Cl(1023,"tr",15)(1024,"td",16)(1025,"div",24)(1026,"span",25),qx(1027," p-minlength"),Hl(1028,"br"),og()()(),Cl(1029,"td",20)(1030,"code",28),qx(1031,"number"),og()(),Cl(1032,"td",22),qx(1033,"-"),og(),Cl(1034,"td",23)(1035,"em")(1036,"strong"),qx(1037,"(opcional)"),og()(),Cl(1038,"p"),qx(1039,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),og()()(),Cl(1040,"tr",15)(1041,"td",16)(1042,"div",24)(1043,"span",25),qx(1044," name"),Hl(1045,"br"),og()()(),Cl(1046,"td",20)(1047,"code",26),qx(1048,"string"),og()(),Cl(1049,"td",22),qx(1050,"-"),og(),Cl(1051,"td",23)(1052,"p"),qx(1053,"Nome e identificador do campo."),og()()(),Cl(1054,"tr",15)(1055,"td",16)(1056,"div",24)(1057,"span",25),qx(1058," p-no-autocomplete"),Hl(1059,"br"),og()()(),Cl(1060,"td",20)(1061,"code",27),qx(1062,"boolean"),og()(),Cl(1063,"td",22)(1064,"p")(1065,"code"),qx(1066,"false"),og()()(),Cl(1067,"td",23)(1068,"em")(1069,"strong"),qx(1070,"(opcional)"),og()(),Cl(1071,"p"),qx(1072,"Define a propriedade nativa "),Cl(1073,"code"),qx(1074,"autocomplete"),og(),qx(1075," do campo como "),Cl(1076,"code"),qx(1077,"off"),og(),qx(1078,"."),og(),Cl(1079,"blockquote")(1080,"p"),qx(1081,"No componente "),Cl(1082,"code"),qx(1083,"po-password"),og(),qx(1084," ser\xE1 definido como "),Cl(1085,"code"),qx(1086,"new-password"),og(),qx(1087,"."),og()(),Cl(1088,"p"),qx(1089,"Nos componentes "),Cl(1090,"code"),qx(1091,"po-password"),og(),qx(1092," e "),Cl(1093,"code"),qx(1094,"po-login"),og(),qx(1095," o valor padr\xE3o ser\xE1 "),Cl(1096,"code"),qx(1097,"true"),og(),qx(1098,"."),og()()(),Cl(1099,"tr",15)(1100,"td",16)(1101,"div",24)(1102,"span",25),qx(1103," p-optional"),Hl(1104,"br"),og()()(),Cl(1105,"td",20)(1106,"code",27),qx(1107,"boolean"),og()(),Cl(1108,"td",22)(1109,"p")(1110,"code"),qx(1111,"false"),og()()(),Cl(1112,"td",23)(1113,"em")(1114,"strong"),qx(1115,"(opcional)"),og()(),Cl(1116,"p"),qx(1117,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og(),Cl(1118,"blockquote")(1119,"p"),qx(1120,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1121,"ul")(1122,"li"),qx(1123,"O campo conter "),Cl(1124,"code"),qx(1125,"p-required"),og(),qx(1126,";"),og(),Cl(1127,"li"),qx(1128,"N\xE3o possuir "),Cl(1129,"code"),qx(1130,"p-help"),og(),qx(1131," e/ou "),Cl(1132,"code"),qx(1133,"p-label"),og(),qx(1134,"."),og()()()(),Cl(1135,"tr",15)(1136,"td",16)(1137,"div",24)(1138,"span",25),qx(1139,"p-pattern"),Hl(1140,"br"),og()()(),Cl(1141,"td",20)(1142,"code",26),qx(1143,"string"),og()(),Cl(1144,"td",22),qx(1145,"-"),og(),Cl(1146,"td",23)(1147,"em")(1148,"strong"),qx(1149,"(opcional)"),og()(),Cl(1150,"p"),qx(1151,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Cl(1152,"code"),qx(1153,"(p-mask)"),og(),qx(1154,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),og()()(),Cl(1155,"tr",15)(1156,"td",16)(1157,"div",24)(1158,"span",25),qx(1159," p-placeholder"),Hl(1160,"br"),og()()(),Cl(1161,"td",20)(1162,"code",26),qx(1163,"string"),og()(),Cl(1164,"td",22)(1165,"p"),qx(1166,"''"),og()(),Cl(1167,"td",23)(1168,"em")(1169,"strong"),qx(1170,"(opcional)"),og()(),Cl(1171,"p"),qx(1172,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Cl(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),qx(1177," p-helper"),Hl(1178,"br"),og()()(),Cl(1179,"td",20)(1180,"code",33),qx(1181,"PoHelperOptions "),og(),Cl(1182,"code",26),qx(1183," string"),og()(),Cl(1184,"td",22),qx(1185,"-"),og(),Cl(1186,"td",23)(1187,"em")(1188,"strong"),qx(1189,"(opcional)"),og()(),Cl(1190,"p"),qx(1191,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Cl(1192,"code"),qx(1193,"p-label"),og(),qx(1194," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Cl(1195,"code"),qx(1196,"p-label"),og(),qx(1197,"."),og(),Cl(1198,"blockquote")(1199,"p"),qx(1200,"Para mais informa\xE7\xF5es acesse: "),Cl(1201,"a",34),qx(1202,"https://po-ui.io/documentation/po-helper"),og(),qx(1203,"."),og()(),Cl(1204,"blockquote")(1205,"p"),qx(1206,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Cl(1207,"code"),qx(1208,"p-additional-help-tooltip"),og(),qx(1209," e "),Cl(1210,"code"),qx(1211,"p-additional-help"),og(),qx(1212,") ser\xE1 ignorado."),og()()()(),Cl(1213,"tr",15)(1214,"td",16)(1215,"div",24)(1216,"span",25),qx(1217,"p-readonly"),Hl(1218,"br"),og()()(),Cl(1219,"td",20)(1220,"code",27),qx(1221,"boolean"),og()(),Cl(1222,"td",22),qx(1223,"-"),og(),Cl(1224,"td",23)(1225,"em")(1226,"strong"),qx(1227,"(opcional)"),og()(),Cl(1228,"p"),qx(1229,"Indica que o campo ser\xE1 somente leitura."),og()()(),Cl(1230,"tr",15)(1231,"td",16)(1232,"div",24)(1233,"span",25),qx(1234,"p-required"),Hl(1235,"br"),og()()(),Cl(1236,"td",20)(1237,"code",27),qx(1238,"boolean"),og()(),Cl(1239,"td",22)(1240,"p")(1241,"code"),qx(1242,"false"),og()()(),Cl(1243,"td",23)(1244,"em")(1245,"strong"),qx(1246,"(opcional)"),og()(),Cl(1247,"p"),qx(1248,"Define que o campo ser\xE1 obrigat\xF3rio."),og(),Cl(1249,"blockquote")(1250,"p"),qx(1251,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),Cl(1252,"code"),qx(1253,"(p-disabled)"),og(),qx(1254,"."),og()()()(),Cl(1255,"tr",15)(1256,"td",16)(1257,"div",24)(1258,"span",25),qx(1259," p-required-field-error-message"),Hl(1260,"br"),og()()(),Cl(1261,"td",20)(1262,"code",27),qx(1263,"boolean"),og()(),Cl(1264,"td",22)(1265,"p")(1266,"code"),qx(1267,"false"),og()()(),Cl(1268,"td",23)(1269,"em")(1270,"strong"),qx(1271,"(opcional)"),og()(),Cl(1272,"p"),qx(1273,"Exibe a mensagem setada na propriedade "),Cl(1274,"code"),qx(1275,"p-error-pattern"),og(),qx(1276," se o campo estiver vazio e for requerido."),og(),Cl(1277,"blockquote")(1278,"p"),qx(1279,"Necess\xE1rio que a propriedade "),Cl(1280,"code"),qx(1281,"p-required"),og(),qx(1282," esteja habilitada."),og()()()(),Cl(1283,"tr",15)(1284,"td",16)(1285,"div",24)(1286,"span",25),qx(1287," p-show-required"),Hl(1288,"br"),og()()(),Cl(1289,"td",20)(1290,"code",27),qx(1291,"boolean"),og()(),Cl(1292,"td",22),qx(1293,"-"),og(),Cl(1294,"td",23)(1295,"p"),qx(1296,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og(),Cl(1297,"blockquote")(1298,"p"),qx(1299,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),og()(),Cl(1300,"ul")(1301,"li"),qx(1302,"N\xE3o possuir "),Cl(1303,"code"),qx(1304,"p-help"),og(),qx(1305," e/ou "),Cl(1306,"code"),qx(1307,"p-label"),og(),qx(1308,"."),og()()()(),Cl(1309,"tr",15)(1310,"td",16)(1311,"div",24)(1312,"span",25),qx(1313," p-size"),Hl(1314,"br"),og()()(),Cl(1315,"td",20)(1316,"code",26),qx(1317,"string"),og()(),Cl(1318,"td",22)(1319,"p")(1320,"code"),qx(1321,"medium"),og()()(),Cl(1322,"td",23)(1323,"em")(1324,"strong"),qx(1325,"(opcional)"),og()(),Cl(1326,"p"),qx(1327,"Define o tamanho do componente:"),og(),Cl(1328,"ul")(1329,"li")(1330,"code"),qx(1331,"small"),og(),qx(1332,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(1333,"li")(1334,"code"),qx(1335,"medium"),og(),qx(1336,": altura do input como 44px."),og()(),Cl(1337,"blockquote")(1338,"p"),qx(1339,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Cl(1340,"code"),qx(1341,"medium"),og(),qx(1342,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Cl(1343,"a",35),qx(1344,"po-theme"),og(),qx(1345,"."),og()()()(),Cl(1346,"tr",15)(1347,"td",16)(1348,"div",24)(1349,"span",25),qx(1350," p-thousand-maxlength"),Hl(1351,"br"),og()()(),Cl(1352,"td",20)(1353,"code",28),qx(1354,"number"),og()(),Cl(1355,"td",22)(1356,"p")(1357,"code"),qx(1358,"13"),og()()(),Cl(1359,"td",23)(1360,"em")(1361,"strong"),qx(1362,"(opcional)"),og()(),Cl(1363,"p"),qx(1364,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal."),og(),Cl(1365,"blockquote")(1366,"p")(1367,"strong"),qx(1368,"Importante:"),og()()(),Cl(1369,"ul")(1370,"li"),qx(1371,"O valor m\xE1ximo permitido \xE9 13;"),og(),Cl(1372,"li"),qx(1373,"A soma total de "),Cl(1374,"code"),qx(1375,"p-decimals-length"),og(),qx(1376," com "),Cl(1377,"code"),qx(1378,"p-thousand-maxlength"),og(),qx(1379," limita-se \xE0 16;"),og(),Cl(1380,"li"),qx(1381,"Esta propriedade sobrep\xF5e o valor definido em "),Cl(1382,"code"),qx(1383,"p-decimals-length"),og(),qx(1384,"."),og()()()(),Cl(1385,"tr",15)(1386,"td",16)(1387,"div",24)(1388,"span",25),qx(1389," p-upper-case"),Hl(1390,"br"),og()()(),Cl(1391,"td",20)(1392,"code",27),qx(1393,"boolean"),og()(),Cl(1394,"td",22),qx(1395,"-"),og(),Cl(1396,"td",23)(1397,"p"),qx(1398,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),og()()()(),Cl(1399,"h3",11),qx(1400,"M\xE9todos"),og(),Cl(1401,"table",36)(1402,"tr",15)(1403,"th",37)(1404,"div",24)(1405,"h4")(1406,"span",25),qx(1407," showAdditionalHelp "),og()()()()(),Cl(1408,"tr",23)(1409,"td",23)(1410,"p"),qx(1411,"M\xE9todo que exibe "),Cl(1412,"code"),qx(1413,"p-helper"),og(),qx(1414," ou executa a a\xE7\xE3o definida em "),Cl(1415,"code"),qx(1416,"p-helper{eventOnClick}"),og(),qx(1417," ou em "),Cl(1418,"code"),qx(1419,"p-additionalHelp"),og(),qx(1420,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(1421,"code"),qx(1422,"p-keydown"),og(),qx(1423,"."),og(),Cl(1424,"blockquote")(1425,"p"),qx(1426,"Exibe ou oculta o conte\xFAdo do componente "),Cl(1427,"code"),qx(1428,"po-helper"),og(),qx(1429," quando o componente estiver com foco."),og()(),Cl(1430,"pre")(1431,"code"),qx(1432,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),og()(),Cl(1433,"pre")(1434,"code"),qx(1435,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(1436,"br"),Cl(1437,"table",36)(1438,"tr",15)(1439,"th",37)(1440,"div",24)(1441,"h4")(1442,"span",25),qx(1443," focus "),og()()()()(),Cl(1444,"tr",23)(1445,"td",23)(1446,"p"),qx(1447,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(1448,"p"),qx(1449,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(1450,"pre")(1451,"code"),qx(1452,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),og()()()()(),Hl(1453,"br"),Cl(1454,"h3"),qx(1455,"Interfaces"),og(),Cl(1456,"h4",38)(1457,"code",5),qx(1458,"ErrorAsyncProperties"),og()(),Cl(1459,"div",2)(1460,"p"),qx(1461,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),og()(),Cl(1462,"h4",11),qx(1463,"Propriedades"),og(),Cl(1464,"table",12)(1465,"tr",13)(1466,"th",14),qx(1467,"Nome"),og(),Cl(1468,"th",14),qx(1469,"Tipo"),og(),Cl(1470,"th",14),qx(1471,"Descri\xE7\xE3o"),og()(),Cl(1472,"tr",15)(1473,"td",16)(1474,"div",24)(1475,"span",25),qx(1476," errorAsync"),Hl(1477,"br"),og()()(),Cl(1478,"td",20)(1479,"code",39),qx(1480,"(value) => Observable<boolean>"),og()(),Cl(1481,"td",23)(1482,"p"),qx(1483,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Cl(1484,"code"),qx(1485,"change"),og(),qx(1486," ou "),Cl(1487,"code"),qx(1488,"change-model"),og(),qx(1489,", dependendo do valor da propriedade "),Cl(1490,"code"),qx(1491,"triggerMode"),og(),qx(1492,"."),og()()(),Cl(1493,"tr",15)(1494,"td",16)(1495,"div",24)(1496,"span",25),qx(1497," triggerMode"),Hl(1498,"br"),og()()(),Cl(1499,"td",20)(1500,"code",40),qx(1501,"'change' "),og(),Cl(1502,"code",41),qx(1503," 'changeModel'"),og()(),Cl(1504,"td",23)(1505,"em")(1506,"strong"),qx(1507,"(opcional)"),og()(),Cl(1508,"p"),qx(1509,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),Cl(1510,"code"),qx(1511,"change"),og(),qx(1512," ou "),Cl(1513,"code"),qx(1514,"change-model"),og(),qx(1515,"."),og()()()()());},dependencies:[Zr],encapsulation:2})}return l})();var be=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Decimal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-decimal-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-decimal-basic-view")(6,"sample-po-decimal-labs-view")(7,"sample-po-decimal-hourly-wage-view")(8,"sample-po-decimal-hourly-wage-reactive-form-view"),og()()()),r&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,de,ce,Ee,he,Se],encapsulation:2})}return l})();var Le=[{path:"",component:be}],xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue$1({imports:[bL.forChild(Le),bL]})}return l})();var st=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe({type:l});static \u0275inj=ue$1({imports:[ca,xe]})}return l})();export{st as DocPoDecimalModule};