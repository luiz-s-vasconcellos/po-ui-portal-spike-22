import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,cS as ww,d as f,c5 as zde,aW as Yp,cM as nY,cN as lm,bD as Ade,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,c8 as Pde,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,aJ as Ghe,bd as xx,av as ql,aw as lo,ax as uo,cQ as Rk,cR as Tk,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-UTR4MKMU.js';var Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","datepicker","p-label","PO Datepicker"]],template:function(l,i){l&1&&Wl(0,"po-datepicker",0);},dependencies:[Ade],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Datepicker Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datepicker-basic"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,qe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ee],encapsulation:2})}return a})();var fe=(()=>{class a{helperText;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:"Basic",value:ww.Basic},{label:"Extended",value:ww.Extended}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];formatOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size="medium";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-labs"]],standalone:false,decls:22,vars:47,consts:[["f","ngForm"],["name","datepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-max-date","p-error-pattern","p-format","p-help","p-iso-format","p-label","p-locale","p-min-date","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-label-text-wrap","p-loading","p-compact-label","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date","p-format"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-format","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","isoFormat","p-columns","4","p-label","Iso Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let s=Ex();Sl(0,"po-datepicker",1),Ew("ngModelChange",function(r){return Xy(s),tN(i.datepicker,r)||(i.datepicker=r),Qy(r)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),sg(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(r){return Xy(s),tN(i.label,r)||(i.label=r),Qy(r)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(r){return Xy(s),tN(i.help,r)||(i.help=r),Qy(r)}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(r){return Xy(s),tN(i.helperText,r)||(i.helperText=r),Qy(r)}),sg(),JA(),Sl(11,"po-input",8),Ew("ngModelChange",function(r){return Xy(s),tN(i.placeholder,r)||(i.placeholder=r),Qy(r)}),sg(),JA(),Sl(12,"po-input",9),Ew("ngModelChange",function(r){return Xy(s),tN(i.errorPattern,r)||(i.errorPattern=r),Qy(r)}),sg(),JA(),Sl(13,"po-datepicker",10),Ew("ngModelChange",function(r){return Xy(s),tN(i.minDate,r)||(i.minDate=r),Qy(r)}),sg(),JA(),Sl(14,"po-datepicker",11),Ew("ngModelChange",function(r){return Xy(s),tN(i.maxDate,r)||(i.maxDate=r),Qy(r)}),sg(),JA(),Sl(15,"po-checkbox-group",12),Ew("ngModelChange",function(r){return Xy(s),tN(i.properties,r)||(i.properties=r),Qy(r)}),sg(),JA(),Sl(16,"po-radio-group",13),Ew("ngModelChange",function(r){return Xy(s),tN(i.locale,r)||(i.locale=r),Qy(r)}),sg(),JA(),Sl(17,"po-radio-group",14),Ew("ngModelChange",function(r){return Xy(s),tN(i.format,r)||(i.format=r),Qy(r)}),sg(),JA(),Sl(18,"po-radio-group",15),Ew("ngModelChange",function(r){return Xy(s),tN(i.isoFormat,r)||(i.isoFormat=r),Qy(r)}),sg(),JA(),Sl(19,"po-radio-group",16),Ew("ngModelChange",function(r){return Xy(s),tN(i.size,r)||(i.size=r),Qy(r)}),sg(),JA(),Sl(20,"div",2)(21,"po-button",17),ht("p-click",function(){return i.restore()}),sg()()();}l&2&&(Dw("ngModel",i.datepicker),tw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-max-date",i.maxDate)("p-error-pattern",i.errorPattern)("p-format",i.format)("p-help",i.help)("p-iso-format",i.isoFormat)("p-label",i.label)("p-locale",i.locale)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),t0(),Vp(3),tw("p-value",i.datepicker),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.help),t0(),Vp(),Dw("ngModel",i.helperText),t0(),Vp(),Dw("ngModel",i.placeholder),t0(),Vp(),Dw("ngModel",i.errorPattern),t0(),Vp(),Dw("ngModel",i.minDate),tw("p-max-date",i.maxDate)("p-format",i.format),t0(),Vp(),Dw("ngModel",i.maxDate),tw("p-format",i.format)("p-min-date",i.minDate),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.locale),tw("p-options",i.localeOptions),t0(),Vp(),Dw("ngModel",i.format),tw("p-options",i.formatOptions),t0(),Vp(),Dw("ngModel",i.isoFormat),tw("p-options",i.isoFormatOptions),t0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,Ade,F3,Pde,Qhe],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Datepicker Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-datepicker
  class="po-sm-12"
  name="datepicker"
  [(ngModel)]="datepicker"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-max-date]="maxDate"
  [p-error-pattern]="errorPattern"
  [p-format]="format"
  [p-help]="help"
  [p-iso-format]="isoFormat"
  [p-label]="label"
  [p-locale]="locale"
  [p-min-date]="minDate"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="datepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-datepicker
    class="po-md-6"
    name="minDate"
    [(ngModel)]="minDate"
    p-clean
    p-label="Min date"
    [p-max-date]="maxDate"
    [p-format]="format"
  >
  </po-datepicker>

  <po-datepicker
    class="po-md-6"
    name="maxDate"
    [(ngModel)]="maxDate"
    p-clean
    p-label="Max date"
    [p-format]="format"
    [p-min-date]="minDate"
  >
  </po-datepicker>

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
    name="locale"
    [(ngModel)]="locale"
    p-columns="4"
    p-label="Locale"
    [p-options]="localeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="format"
    [(ngModel)]="format"
    p-columns="4"
    p-label="Format"
    [p-options]="formatOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="isoFormat"
    [(ngModel)]="isoFormat"
    p-columns="4"
    p-label="Iso Format"
    [p-options]="isoFormatOptions"
  >
  </po-radio-group>

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
    <po-button class="po-lg-3 po-md-6" name="restore" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoDatepickerIsoFormat, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-labs',
  templateUrl: './sample-po-datepicker-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerLabsComponent implements OnInit {
  helperText: string;
  datepicker: string | Date;
  maxDate: string | Date;
  errorPattern: string;
  event: string;
  format: string;
  help: string;
  isoFormat: PoDatepickerIsoFormat;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  minDate: string | Date;
  size: string;

  public readonly isoFormatOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: PoDatepickerIsoFormat.Basic },
    { label: 'Extended', value: PoDatepickerIsoFormat.Extended }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly formatOptions: Array<PoRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
  ];

  public readonly localeOptions: Array<PoRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'en', value: 'en' },
    { label: 'es', value: 'es' },
    { label: 'ru', value: 'ru' }
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
    this.datepicker = undefined;
    this.maxDate = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.isoFormat = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.minDate = undefined;
    this.size = 'medium';
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datepicker-labs"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Le,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,fe],encapsulation:2})}return a})();var he=(()=>{class a{selectedYear=new Date("2026-04-30").getFullYear();event;changeEvent(m){this.event=m;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-year"]],standalone:false,decls:5,vars:3,consts:[["name","yearPicker","p-label","Year Picker","p-placeholder","Select a year","p-mode","year",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"]],template:function(l,i){l&1&&(Sl(0,"po-datepicker",0),Ew("ngModelChange",function(c){return tN(i.selectedYear,c)||(i.selectedYear=c),c}),ht("p-change",function(c){return i.changeEvent(c)}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",1),Wl(3,"po-info",2)(4,"po-info",3),sg()),l&2&&(Dw("ngModel",i.selectedYear),t0(),Vp(3),tw("p-value",i.selectedYear),Vp(),tw("p-value",i.event));},dependencies:[K9,Dk,mv,Ade,Qhe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-year-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Datepicker Year"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-datepicker-year/sample-po-datepicker-year.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-datepicker
  name="yearPicker"
  [(ngModel)]="selectedYear"
  p-label="Year Picker"
  p-placeholder="Select a year"
  p-mode="year"
  (p-change)="changeEvent($event)"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="selectedYear"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-datepicker-year/sample-po-datepicker-year.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-year',
  templateUrl: './sample-po-datepicker-year.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerYearComponent {
  selectedYear = new Date('2026-04-30').getFullYear();
  event: string;

  changeEvent(event: string) {
    this.event = event;
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datepicker-year"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,he],encapsulation:2})}return a})();var ve=(()=>{class a{selectedMonthYear=new Date("2026-12-02");event;changeEvent(m){this.event=m;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-month-year"]],standalone:false,decls:5,vars:3,consts:[["name","monthYearPicker","p-label","Month/Year Picker","p-placeholder","Select month and year","p-mode","month-year",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"]],template:function(l,i){l&1&&(Sl(0,"po-datepicker",0),Ew("ngModelChange",function(c){return tN(i.selectedMonthYear,c)||(i.selectedMonthYear=c),c}),ht("p-change",function(c){return i.changeEvent(c)}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",1),Wl(3,"po-info",2)(4,"po-info",3),sg()),l&2&&(Dw("ngModel",i.selectedMonthYear),t0(),Vp(3),tw("p-value",i.selectedMonthYear),Vp(),tw("p-value",i.event));},dependencies:[K9,Dk,mv,Ade,Qhe],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-month-year-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Datepicker MonthYear"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-datepicker
  name="monthYearPicker"
  [(ngModel)]="selectedMonthYear"
  p-label="Month/Year Picker"
  p-placeholder="Select month and year"
  p-mode="month-year"
  (p-change)="changeEvent($event)"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="selectedMonthYear"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-month-year',
  templateUrl: './sample-po-datepicker-month-year.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerMonthYearComponent {
  selectedMonthYear = new Date('2026-12-02');
  event: string;

  changeEvent(event: string) {
    this.event = event;
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datepicker-month-year"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ze,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ve],encapsulation:2})}return a})();var je=["formAirfare"],ye=(()=>{class a{poDialog=f(zde);poNotification=f(Yp);formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass="Economy";accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];apply(){let m=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:"Confirm",message:m,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"});},cancel:()=>{this.poNotification.warning("Booking Canceled");}});}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare"]],viewQuery:function(l,i){if(l&1&&ql(je,7),l&2){let s;lo(s=uo())&&(i.formAirfare=s.first);}},standalone:false,decls:13,vars:11,consts:[["formAirfare","ngForm"],[1,"po-row"],["name","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","origin","p-placeholder","Flight origin","p-label","Origin","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-placeholder","Flight destination","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["clas","po-row"],["name","ticketClass","p-label","Class","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","accompany","p-label","Accompany","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let s=Ex();Sl(0,"form",null,0)(2,"div",1)(3,"po-datepicker",2),Ew("ngModelChange",function(r){return Xy(s),tN(i.startDate,r)||(i.startDate=r),Qy(r)}),sg(),JA(),Sl(4,"po-datepicker",3),Ew("ngModelChange",function(r){return Xy(s),tN(i.endDate,r)||(i.endDate=r),Qy(r)}),sg(),JA(),sg(),Sl(5,"div",1)(6,"po-input",4),Ew("ngModelChange",function(r){return Xy(s),tN(i.origin,r)||(i.origin=r),Qy(r)}),sg(),JA(),Sl(7,"po-input",5),Ew("ngModelChange",function(r){return Xy(s),tN(i.destination,r)||(i.destination=r),Qy(r)}),sg(),JA(),sg(),Sl(8,"div",6)(9,"po-select",7),Ew("ngModelChange",function(r){return Xy(s),tN(i.ticketClass,r)||(i.ticketClass=r),Qy(r)}),sg(),JA(),Sl(10,"po-select",8),Ew("ngModelChange",function(r){return Xy(s),tN(i.accompany,r)||(i.accompany=r),Qy(r)}),sg(),JA(),sg(),Sl(11,"div",1)(12,"po-button",9),ht("p-click",function(){return i.apply()}),sg()()();}if(l&2){let s=xx(1);Vp(3),Dw("ngModel",i.startDate),tw("p-max-date",i.endDate),t0(),Vp(),Dw("ngModel",i.endDate),tw("p-min-date",i.startDate),t0(),Vp(2),Dw("ngModel",i.origin),t0(),Vp(),Dw("ngModel",i.destination),t0(),Vp(2),Dw("ngModel",i.ticketClass),tw("p-options",i.ticketClassOptions),t0(),Vp(),Dw("ngModel",i.accompany),tw("p-options",i.accompanyNumber),t0(),Vp(2),tw("p-disabled",s.invalid);}},dependencies:[J9,K9,X9,Dk,vk,Qt,Ade,F3,Ghe],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Datepicker - Airfare"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<form #formAirfare="ngForm">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="startDate"
      [(ngModel)]="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      p-required
      [p-max-date]="endDate"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="endDate"
      [(ngModel)]="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      p-required
      [p-min-date]="startDate"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="origin"
      [(ngModel)]="origin"
      p-placeholder="Flight origin"
      p-label="Origin"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="destination"
      [(ngModel)]="destination"
      p-label="Destination"
      p-placeholder="Flight destination"
      p-required
    >
    </po-input>
  </div>

  <div clas="po-row">
    <po-select
      class="po-md-6"
      name="ticketClass"
      [(ngModel)]="ticketClass"
      p-label="Class"
      p-required
      [p-options]="ticketClassOptions"
    >
    </po-select>

    <po-select
      class="po-md-6"
      name="accompany"
      [(ngModel)]="accompany"
      p-label="Accompany"
      p-required
      [p-options]="accompanyNumber"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare',
  templateUrl: './sample-po-datepicker-airfare.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerAirfareComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formAirfare', { static: true }) formAirfare: UntypedFormControl;

  accompany: number = 0;
  destination: string;
  endDate: string = <any>new Date();
  origin: string;
  startDate: string = <any>new Date();
  ticketClass: string = 'Economy';

  public readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  public readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  apply() {
    const message = \`Would you like to confirm the ticket from \${this.origin} to \${
      this.destination
    } with departure date at
    \${this.getFormatedDate(this.startDate)} and return at \${this.getFormatedDate(this.endDate)} with \${
      this.accompany
    } companions in
    \${this.ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datepicker-airfare"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,He,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ye],encapsulation:2})}return a})();var ke=(()=>{class a{formBuilder=f(nY);poDialog=f(zde);poNotification=f(Yp);formAirfare;accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,lm.required],destination:["",lm.required],endDate:[new Date,lm.required],origin:["",lm.required],startDate:[new Date,lm.required],ticketClass:["Economy",lm.required]});}apply(m){let{accompany:l,destination:i,endDate:s,origin:c,ticketClass:r,startDate:Me}=m.value,Te=`Would you like to confirm the ticket from ${c} to ${i} with departure date at
    ${this.getFormatedDate(Me)} and return at ${this.getFormatedDate(s)} with ${l} companions in
    ${r} class?`;this.poDialog.confirm({title:"Confirm",message:Te,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"});},cancel:()=>{this.poNotification.warning("Booking Canceled");}});}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form"]],standalone:false,decls:12,vars:6,consts:[[3,"formGroup"],[1,"po-row"],["formControlName","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start",1,"po-md-6",3,"p-max-date"],["formControlName","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end",1,"po-md-6",3,"p-min-date"],["formControlName","origin","p-placeholder","Flight origin","p-label","Origin",1,"po-md-6"],["formControlName","destination","p-label","Destination","p-placeholder","Flight destination",1,"po-md-6"],["clas","po-row"],["formControlName","ticketClass","p-label","Class",1,"po-md-6",3,"p-options"],["formControlName","accompany","p-label","Accompany",1,"po-md-6",3,"p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(Sl(0,"form",0)(1,"div",1),Wl(2,"po-datepicker",2),JA(),Wl(3,"po-datepicker",3),JA(),sg(),Sl(4,"div",1),Wl(5,"po-input",4),JA(),Wl(6,"po-input",5),JA(),sg(),Sl(7,"div",6),Wl(8,"po-select",7),JA(),Wl(9,"po-select",8),JA(),sg(),Sl(10,"div",1)(11,"po-button",9),ht("p-click",function(){return i.apply(i.formAirfare)}),sg()()()),l&2&&(tw("formGroup",i.formAirfare),Vp(2),tw("p-max-date",i.formAirfare.get("endDate").value),t0(),Vp(),tw("p-min-date",i.formAirfare.get("startDate").value),t0(),Vp(2),t0(),Vp(),t0(),Vp(2),tw("p-options",i.ticketClassOptions),t0(),Vp(),tw("p-options",i.accompanyNumber),t0(),Vp(2),tw("p-disabled",i.formAirfare.invalid));},dependencies:[J9,K9,X9,Rk,Tk,Qt,Ade,F3,Ghe],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Datepicker - Airfare Reactive Form"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<form [formGroup]="formAirfare">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      formControlName="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      [p-max-date]="formAirfare.get('endDate').value"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      formControlName="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      [p-min-date]="formAirfare.get('startDate').value"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" formControlName="origin" p-placeholder="Flight origin" p-label="Origin"> </po-input>

    <po-input class="po-md-6" formControlName="destination" p-label="Destination" p-placeholder="Flight destination">
    </po-input>
  </div>

  <div clas="po-row">
    <po-select class="po-md-6" formControlName="ticketClass" p-label="Class" [p-options]="ticketClassOptions">
    </po-select>

    <po-select class="po-md-6" formControlName="accompany" p-label="Accompany" [p-options]="accompanyNumber">
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply(formAirfare)"
    >
    </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare-reactive-form',
  templateUrl: './sample-po-datepicker-airfare-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerAirfareReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  formAirfare: UntypedFormGroup;

  readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  ngOnInit() {
    this.formAirfare = this.formBuilder.group({
      accompany: [0, Validators.required],
      destination: ['', Validators.required],
      endDate: [new Date(), Validators.required],
      origin: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      ticketClass: ['Economy', Validators.required]
    });
  }

  apply(formAirfare: UntypedFormGroup) {
    const { accompany, destination, endDate, origin, ticketClass, startDate } = formAirfare.value;

    const message = \`Would you like to confirm the ticket from \${origin} to \${destination} with departure date at
    \${this.getFormatedDate(startDate)} and return at \${this.getFormatedDate(endDate)} with \${accompany} companions in
    \${ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datepicker-airfare-reactive-form"),sg(),Wl(23,"hr")),l&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Qe,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ke],encapsulation:2})}return a})();var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-doc"]],standalone:false,decls:1291,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3schools.com/js/js_dates.asp"],["href","https://www.w3schools.com/jsref/jsref_setfullyear.asp"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,i){l&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoDatepickerComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,"O "),Sl(24,"code"),Jx(25,"po-datepicker"),sg(),Jx(26," \xE9 um componente espec\xEDfico para manipula\xE7\xE3o de datas permitindo a digita\xE7\xE3o e / ou sele\xE7\xE3o."),sg(),Sl(27,"p"),Jx(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),Sl(29,"code"),Jx(30,"p-format"),sg(),Jx(31,")."),sg(),Sl(32,"p"),Jx(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Sl(34,"code"),Jx(35,"p-locale"),sg(),Jx(36,"."),sg(),Sl(37,"p"),Jx(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),sg(),Sl(39,"blockquote")(40,"p"),Jx(41,"Por padr\xE3o, o formato de sa\xEDda do "),Sl(42,"em"),Jx(43,"model"),sg(),Jx(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),Sl(45,"code"),Jx(46,"p-iso-format"),sg(),Jx(47," prov\xEA esse controle independentemente do formato de entrada. Veja abaixo os formatos dispon\xEDveis:"),sg()(),Sl(48,"ul")(49,"li")(50,"p"),Jx(51,"Formato de entrada e sa\xEDda (E8601DZw) - "),Sl(52,"code"),Jx(53,"'2017-11-28T00:00:00-02:00'"),sg(),Jx(54,";"),sg()(),Sl(55,"li")(56,"p"),Jx(57,"Formato de entrada e sa\xEDda (E8601DAw) - "),Sl(58,"code"),Jx(59,"'2017-11-28'"),sg(),Jx(60,";"),sg()(),Sl(61,"li")(62,"p"),Jx(63,"Formato de entrada (Date) - "),Sl(64,"code"),Jx(65,"new Date(2017, 10, 28)"),sg(),Jx(66," e sa\xEDda (E8601DAw) - "),Sl(67,"code"),Jx(68,"'2017-11-28'"),sg(),Jx(69,";"),sg()()(),Sl(70,"p")(71,"strong"),Jx(72,"Importante:"),sg()(),Sl(73,"ul")(74,"li"),Jx(75,"Para utilizar datas com ano inferior a 100, verificar o comportamento do "),Sl(76,"a",6)(77,"code"),Jx(78,"new Date"),sg()(),Jx(79,`
e utilizar o m\xE9todo `),Sl(80,"a",7)(81,"code"),Jx(82,"setFullYear"),sg()(),Jx(83,"."),sg(),Sl(84,"li"),Jx(85,"Caso a data esteja inv\xE1lida, o "),Sl(86,"code"),Jx(87,"model"),sg(),Jx(88," receber\xE1 "),Sl(89,"strong"),Jx(90,"'Data inv\xE1lida'"),sg(),Jx(91,"."),sg(),Sl(92,"li"),Jx(93,"Caso o "),Sl(94,"code"),Jx(95,"input"),sg(),Jx(96," esteja passando um "),Sl(97,"code"),Jx(98,"[(ngModel)]"),sg(),Jx(99,", mas n\xE3o tenha um "),Sl(100,"code"),Jx(101,"name"),sg(),Jx(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Sl(103,"code"),Jx(104,'[ngModelOptions]="{standalone: true}"'),sg(),Jx(105,")."),sg()(),Sl(106,"p"),Jx(107,"Exemplo:"),sg(),Sl(108,"pre")(109,"code"),Jx(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),sg()(),Sl(111,"blockquote")(112,"p"),Jx(113,"N\xE3o esque\xE7a de importar o "),Sl(114,"code"),Jx(115,"FormsModule"),sg(),Jx(116," em seu m\xF3dulo, tal como para utilizar o "),Sl(117,"code"),Jx(118,"input default"),sg(),Jx(119,"."),sg()(),Sl(120,"h4"),Jx(121,"Tokens customiz\xE1veis"),sg(),Sl(122,"p"),Jx(123,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(124,"br"),Jx(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(126,"code"),Jx(127,".po-input"),sg()(),Sl(128,"blockquote")(129,"p"),Jx(130,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(131,"a",8),Jx(132,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(133,"."),sg()(),Sl(134,"table")(135,"thead")(136,"tr")(137,"th"),Jx(138,"Propriedade"),sg(),Sl(139,"th"),Jx(140,"Descri\xE7\xE3o"),sg(),Sl(141,"th"),Jx(142,"Valor Padr\xE3o"),sg()()(),Sl(143,"tbody")(144,"tr")(145,"td")(146,"strong"),Jx(147,"Default Values"),sg()(),Wl(148,"td")(149,"td"),sg(),Sl(150,"tr")(151,"td")(152,"code"),Jx(153,"--font-family"),sg()(),Sl(154,"td"),Jx(155,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(156,"td")(157,"code"),Jx(158,"var(--font-family-theme)"),sg()()(),Sl(159,"tr")(160,"td")(161,"code"),Jx(162,"--font-size"),sg()(),Sl(163,"td"),Jx(164,"Tamanho da fonte"),sg(),Sl(165,"td")(166,"code"),Jx(167,"var(--font-size-default)"),sg()()(),Sl(168,"tr")(169,"td")(170,"code"),Jx(171,"--text-color-placeholder"),sg(),Jx(172," \xA0"),sg(),Sl(173,"td"),Jx(174,"Cor principal do texto do placeholder"),sg(),Sl(175,"td")(176,"code"),Jx(177,"var(--color-neutral-light-30)"),sg()()(),Sl(178,"tr")(179,"td")(180,"code"),Jx(181,"--color"),sg()(),Sl(182,"td"),Jx(183,"Cor principal do datepicker"),sg(),Sl(184,"td")(185,"code"),Jx(186,"var(--color-neutral-dark-70)"),sg()()(),Sl(187,"tr")(188,"td")(189,"code"),Jx(190,"--background"),sg()(),Sl(191,"td"),Jx(192,"Cor de background"),sg(),Sl(193,"td")(194,"code"),Jx(195,"var(--color-neutral-light-05)"),sg()()(),Sl(196,"tr")(197,"td")(198,"code"),Jx(199,"--padding"),sg()(),Sl(200,"td"),Jx(201,"Preenchimento"),sg(),Sl(202,"td")(203,"code"),Jx(204,"0 0.5rem"),sg()()(),Sl(205,"tr")(206,"td")(207,"code"),Jx(208,"--text-color"),sg()(),Sl(209,"td"),Jx(210,"Cor do texto"),sg(),Sl(211,"td")(212,"code"),Jx(213,"var(--color-neutral-dark-90)"),sg()()(),Sl(214,"tr")(215,"td")(216,"code"),Jx(217,"--field-container-title-justify"),sg()(),Sl(218,"td"),Jx(219,"Alinhamento horizontal do t\xEDtulo ("),Sl(220,"code"),Jx(221,"justify-content"),sg(),Jx(222,")"),sg(),Sl(223,"td")(224,"code"),Jx(225,"space-between"),sg()()(),Sl(226,"tr")(227,"td")(228,"code"),Jx(229,"--field-container-title-flex"),sg()(),Sl(230,"td"),Jx(231,"Flex do t\xEDtulo ("),Sl(232,"code"),Jx(233,"flex"),sg(),Jx(234,")"),sg(),Sl(235,"td")(236,"code"),Jx(237,"1 auto"),sg()()(),Sl(238,"tr")(239,"td")(240,"strong"),Jx(241,"Hover"),sg()(),Wl(242,"td")(243,"td"),sg(),Sl(244,"tr")(245,"td")(246,"code"),Jx(247,"--color-hover"),sg()(),Sl(248,"td"),Jx(249,"Cor principal no estado hover"),sg(),Sl(250,"td")(251,"code"),Jx(252,"var(--color-brand-01-dark)"),sg()()(),Sl(253,"tr")(254,"td")(255,"code"),Jx(256,"--background-hover"),sg()(),Sl(257,"td"),Jx(258,"Cor de background no estado hover"),sg(),Sl(259,"td")(260,"code"),Jx(261,"var(--color-brand-01-lightest)"),sg()()(),Sl(262,"tr")(263,"td")(264,"strong"),Jx(265,"Focused"),sg()(),Wl(266,"td")(267,"td"),sg(),Sl(268,"tr")(269,"td")(270,"code"),Jx(271,"--color-focused"),sg()(),Sl(272,"td"),Jx(273,"Cor principal no estado de focus"),sg(),Sl(274,"td")(275,"code"),Jx(276,"var(--color-action-default)"),sg()()(),Sl(277,"tr")(278,"td")(279,"code"),Jx(280,"--outline-color-focused"),sg()(),Sl(281,"td"),Jx(282,"Cor do outline do estado de focus"),sg(),Sl(283,"td")(284,"code"),Jx(285,"var(--color-action-focus)"),sg()()(),Sl(286,"tr")(287,"td")(288,"strong"),Jx(289,"Disabled"),sg()(),Wl(290,"td")(291,"td"),sg(),Sl(292,"tr")(293,"td")(294,"code"),Jx(295,"--color-disabled"),sg()(),Sl(296,"td"),Jx(297,"Cor principal no estado disabled"),sg(),Sl(298,"td")(299,"code"),Jx(300,"var(--color-neutral-light-30)"),sg()()(),Sl(301,"tr")(302,"td")(303,"code"),Jx(304,"--background-disabled"),sg()(),Sl(305,"td"),Jx(306,"Cor de background no estado disabled \xA0"),sg(),Sl(307,"td")(308,"code"),Jx(309,"var(--color-neutral-light-20)"),sg()()(),Sl(310,"tr")(311,"td")(312,"code"),Jx(313,"--text-color-disabled"),sg()(),Sl(314,"td"),Jx(315,"Cor do texto no estado disabled"),sg(),Sl(316,"td")(317,"code"),Jx(318,"var(--color-neutral-dark-70)"),sg()()()()()(),Sl(319,"div",9)(320,"h4",10),Jx(321,"Seletor"),sg(),Sl(322,"pre",11),Jx(323,`<po-datepicker
    p-locale="string"
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-async="(value) => Observable<boolean>"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-format="string"
    p-help="string"
    p-iso-format="PoDatepickerIsoFormat"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-mode="'month-year' | 'year'"
    p-no-autocomplete="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-year-range-limit="number" >
</po-datepicker>
`),sg()(),Sl(324,"h4",12),Jx(325,"Propriedades"),sg(),Sl(326,"table",13)(327,"tr",14)(328,"th",15),Jx(329,"Nome"),sg(),Sl(330,"th",15),Jx(331,"Tipo"),sg(),Sl(332,"th",15),Jx(333,"Padr\xE3o"),sg(),Sl(334,"th",15),Jx(335,"Descri\xE7\xE3o"),sg()(),Sl(336,"tr",16)(337,"td",17)(338,"div",18)(339,"span",19),Jx(340,"p-locale"),Wl(341,"br"),sg()()(),Sl(342,"td",20)(343,"code",21),Jx(344,"string"),sg()(),Sl(345,"td",22),Jx(346,"-"),sg(),Sl(347,"td",23)(348,"em")(349,"strong"),Jx(350,"(opcional)"),sg()(),Sl(351,"p"),Jx(352,"Idioma do Datepicker."),sg(),Sl(353,"blockquote")(354,"p"),Jx(355,"O locale padr\xE3o sera recuperado com base no "),Sl(356,"a",24)(357,"code"),Jx(358,"PoI18nService"),sg()(),Jx(359," ou "),Sl(360,"em"),Jx(361,"browser"),sg(),Jx(362,"."),sg()()()(),Sl(363,"tr",16)(364,"td",17)(365,"div",25)(366,"span",26),Jx(367," (p-additional-help)"),Wl(368,"br"),sg()(),Sl(369,"div",27),Jx(370,"Deprecated"),sg()(),Sl(371,"td",20)(372,"code",28),Jx(373,"EventEmitter"),sg()(),Sl(374,"td",22),Jx(375,"-"),sg(),Sl(376,"td",23)(377,"em")(378,"strong"),Jx(379,"(opcional)"),sg()(),Sl(380,"p"),Jx(381,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Sl(382,"blockquote")(383,"p"),Jx(384,"Essa propriedade est\xE1 "),Sl(385,"strong"),Jx(386,"depreciada"),sg(),Jx(387," e ser\xE1 removida na vers\xE3o "),Sl(388,"code"),Jx(389,"23.x.x"),sg(),Jx(390,". Recomendamos utilizar a propriedade "),Sl(391,"code"),Jx(392,"p-helper"),sg(),Jx(393," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(394,"tr",16)(395,"td",17)(396,"div",18)(397,"span",19),Jx(398," p-additional-help-tooltip"),Wl(399,"br"),sg()(),Sl(400,"div",27),Jx(401,"Deprecated"),sg()(),Sl(402,"td",20)(403,"code",21),Jx(404,"string"),sg()(),Sl(405,"td",22),Jx(406,"-"),sg(),Sl(407,"td",23)(408,"em")(409,"strong"),Jx(410,"(opcional)"),sg()(),Sl(411,"p"),Jx(412,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Sl(413,"code"),Jx(414,"po-helper"),sg(),Jx(415,`.
`),Sl(416,"strong"),Jx(417,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Sl(418,"blockquote")(419,"p"),Jx(420,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Sl(421,"blockquote")(422,"p"),Jx(423,"Essa propriedade est\xE1 "),Sl(424,"strong"),Jx(425,"depreciada"),sg(),Jx(426," e ser\xE1 removida na vers\xE3o "),Sl(427,"code"),Jx(428,"23.x.x"),sg(),Jx(429,". Recomendamos utilizar a propriedade "),Sl(430,"code"),Jx(431,"p-helper"),sg(),Jx(432," que oferece mais recursos e flexibilidade."),sg()()()(),Sl(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),Jx(437," p-append-in-body"),Wl(438,"br"),sg()()(),Sl(439,"td",20)(440,"code",29),Jx(441,"boolean"),sg()(),Sl(442,"td",22)(443,"p")(444,"code"),Jx(445,"false"),sg()()(),Sl(446,"td",23)(447,"em")(448,"strong"),Jx(449,"(opcional)"),sg()(),Sl(450,"p"),Jx(451,"Define que o "),Sl(452,"code"),Jx(453,"calendar"),sg(),Jx(454," e/ou tooltip ("),Sl(455,"code"),Jx(456,"p-additional-help-tooltip"),sg(),Jx(457," e/ou "),Sl(458,"code"),Jx(459,"p-error-limit"),sg(),Jx(460,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),sg(),Sl(461,"blockquote")(462,"p"),Jx(463,"Quando utilizado com "),Sl(464,"code"),Jx(465,"p-helper"),sg(),Jx(466,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Sl(467,"tr",16)(468,"td",17)(469,"div",18)(470,"span",19),Jx(471," p-auto-focus"),Wl(472,"br"),sg()()(),Sl(473,"td",20)(474,"code",29),Jx(475,"boolean"),sg()(),Sl(476,"td",22)(477,"p")(478,"code"),Jx(479,"false"),sg()()(),Sl(480,"td",23)(481,"em")(482,"strong"),Jx(483,"(opcional)"),sg()(),Sl(484,"p"),Jx(485,"Aplica foco no elemento ao ser iniciado."),sg(),Sl(486,"blockquote")(487,"p"),Jx(488,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Sl(489,"tr",16)(490,"td",17)(491,"div",18)(492,"span",19),Jx(493,"p-clean"),Wl(494,"br"),sg()()(),Sl(495,"td",20)(496,"code",29),Jx(497,"boolean"),sg()(),Sl(498,"td",22),Jx(499,"-"),sg(),Sl(500,"td",23)(501,"em")(502,"strong"),Jx(503,"(opcional)"),sg()(),Sl(504,"p"),Jx(505,"Habilita a\xE7\xE3o para limpar o campo."),sg()()(),Sl(506,"tr",16)(507,"td",17)(508,"div",18)(509,"span",19),Jx(510," p-compact-label"),Wl(511,"br"),sg()()(),Sl(512,"td",20)(513,"code",29),Jx(514,"boolean"),sg()(),Sl(515,"td",22)(516,"p")(517,"code"),Jx(518,"false"),sg()()(),Sl(519,"td",23)(520,"em")(521,"strong"),Jx(522,"(opcional)"),sg()(),Sl(523,"p"),Jx(524,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Sl(525,"p"),Jx(526,"Quando habilitado ("),Sl(527,"code"),Jx(528,"true"),sg(),Jx(529,"), o modo compacto afeta o conjunto composto por:"),sg(),Sl(530,"ul")(531,"li")(532,"code"),Jx(533,"po-label"),sg()(),Sl(534,"li")(535,"code"),Jx(536,"p-requirement (showRequired)"),sg()(),Sl(537,"li")(538,"code"),Jx(539,"po-helper"),sg()()(),Sl(540,"p"),Jx(541,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Sl(542,"p"),Jx(543,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Sl(544,"ul")(545,"li")(546,"code"),Jx(547,"--field-container-title-justify"),sg()(),Sl(548,"li")(549,"code"),Jx(550,"--field-container-title-flex"),sg()()(),Sl(551,"p"),Jx(552,"Exemplo:"),sg(),Sl(553,"pre")(554,"code"),Jx(555,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Sl(556,"p"),Jx(557,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Sl(558,"tr",16)(559,"td",17)(560,"div",18)(561,"span",19),Jx(562,"p-disabled"),Wl(563,"br"),sg()()(),Sl(564,"td",20)(565,"code",29),Jx(566,"boolean"),sg()(),Sl(567,"td",22),Jx(568,"-"),sg(),Sl(569,"td",23)(570,"em")(571,"strong"),Jx(572,"(opcional)"),sg()(),Sl(573,"p"),Jx(574,"Desabilita o campo."),sg()()(),Sl(575,"tr",16)(576,"td",17)(577,"div",18)(578,"span",19),Jx(579," p-error-async"),Wl(580,"br"),sg()()(),Sl(581,"td",20)(582,"code",30),Jx(583,"(value) => Observable<boolean>"),sg()(),Sl(584,"td",22),Jx(585,"-"),sg(),Sl(586,"td",23)(587,"em")(588,"strong"),Jx(589,"(opcional)"),sg()(),Sl(590,"p"),Jx(591,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Sl(592,"code"),Jx(593,"change"),sg(),Jx(594,"."),sg()()(),Sl(595,"tr",16)(596,"td",17)(597,"div",18)(598,"span",19),Jx(599," p-error-limit"),Wl(600,"br"),sg()()(),Sl(601,"td",20)(602,"code",29),Jx(603,"boolean"),sg()(),Sl(604,"td",22)(605,"p")(606,"code"),Jx(607,"false"),sg()()(),Sl(608,"td",23)(609,"em")(610,"strong"),Jx(611,"(opcional)"),sg()(),Sl(612,"p"),Jx(613,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Sl(614,"blockquote")(615,"p"),Jx(616,"Caso essa propriedade seja definida como "),Sl(617,"code"),Jx(618,"true"),sg(),Jx(619,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Sl(620,"tr",16)(621,"td",17)(622,"div",18)(623,"span",19),Jx(624," p-error-pattern"),Wl(625,"br"),sg()()(),Sl(626,"td",20)(627,"code",21),Jx(628,"string"),sg()(),Sl(629,"td",22),Jx(630,"-"),sg(),Sl(631,"td",23)(632,"em")(633,"strong"),Jx(634,"(opcional)"),sg()(),Sl(635,"p"),Jx(636,"Mensagem apresentada quando a data for inv\xE1lida ou fora do per\xEDodo."),sg(),Sl(637,"blockquote")(638,"p"),Jx(639,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Sl(640,"code"),Jx(641,"p-required-field-error-message"),sg(),Jx(642," em conjunto."),sg()()()(),Sl(643,"tr",16)(644,"td",17)(645,"div",18)(646,"span",19),Jx(647," p-format"),Wl(648,"br"),sg()()(),Sl(649,"td",20)(650,"code",21),Jx(651,"string"),sg()(),Sl(652,"td",22)(653,"p")(654,"code"),Jx(655,"dd/mm/yyyy"),sg()()(),Sl(656,"td",23)(657,"em")(658,"strong"),Jx(659,"(opcional)"),sg()(),Sl(660,"p"),Jx(661,"Formato de exibi\xE7\xE3o da data."),sg(),Sl(662,"p"),Jx(663,"Valores v\xE1lidos:"),sg(),Sl(664,"ul")(665,"li")(666,"code"),Jx(667,"dd/mm/yyyy"),sg()(),Sl(668,"li")(669,"code"),Jx(670,"mm/dd/yyyy"),sg()(),Sl(671,"li")(672,"code"),Jx(673,"yyyy/mm/dd"),sg()()(),Sl(674,"p"),Jx(675,"Propriedade incompat\xEDvel com as varia\xE7\xF5es month-year e year."),sg()()(),Sl(676,"tr",16)(677,"td",17)(678,"div",18)(679,"span",19),Jx(680," p-help"),Wl(681,"br"),sg()()(),Sl(682,"td",20)(683,"code",21),Jx(684,"string"),sg()(),Sl(685,"td",22),Jx(686,"-"),sg(),Sl(687,"td",23)(688,"em")(689,"strong"),Jx(690,"(opcional)"),sg()(),Sl(691,"p"),Jx(692,"Texto de apoio do campo."),sg()()(),Sl(693,"tr",16)(694,"td",17)(695,"div",18)(696,"span",19),Jx(697," p-iso-format"),Wl(698,"br"),sg()()(),Sl(699,"td",20)(700,"code",31),Jx(701,"PoDatepickerIsoFormat"),sg()(),Sl(702,"td",22),Jx(703,"-"),sg(),Sl(704,"td",23)(705,"em")(706,"strong"),Jx(707,"(opcional)"),sg()(),Sl(708,"p"),Jx(709,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),Sl(710,"em"),Jx(711,"model"),sg(),Jx(712,", independentemente do formato de entrada."),sg(),Sl(713,"blockquote")(714,"p"),Jx(715,"Veja os valores v\xE1lidos no "),Sl(716,"em"),Jx(717,"enum"),sg(),Sl(718,"code"),Jx(719,"PoDatepickerIsoFormat"),sg(),Jx(720,"."),sg()(),Sl(721,"p"),Jx(722,"Propriedade incompat\xEDvel com as varia\xE7\xF5es month-year e year."),sg()()(),Sl(723,"tr",16)(724,"td",17)(725,"div",25)(726,"span",26),Jx(727," (p-keydown)"),Wl(728,"br"),sg()()(),Sl(729,"td",20)(730,"code",28),Jx(731,"EventEmitter"),sg()(),Sl(732,"td",22),Jx(733,"-"),sg(),Sl(734,"td",23)(735,"em")(736,"strong"),Jx(737,"(opcional)"),sg()(),Sl(738,"p"),Jx(739,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Sl(740,"code"),Jx(741,"KeyboardEvent"),sg(),Jx(742," com informa\xE7\xF5es sobre a tecla."),sg()()(),Sl(743,"tr",16)(744,"td",17)(745,"div",18)(746,"span",19),Jx(747," p-label"),Wl(748,"br"),sg()()(),Sl(749,"td",20)(750,"code",21),Jx(751,"string"),sg()(),Sl(752,"td",22),Jx(753,"-"),sg(),Sl(754,"td",23)(755,"em")(756,"strong"),Jx(757,"(opcional)"),sg()(),Sl(758,"p"),Jx(759,"R\xF3tulo do campo."),sg()()(),Sl(760,"tr",16)(761,"td",17)(762,"div",18)(763,"span",19),Jx(764," p-label-text-wrap"),Wl(765,"br"),sg()()(),Sl(766,"td",20)(767,"code",29),Jx(768,"boolean"),sg()(),Sl(769,"td",22)(770,"p")(771,"code"),Jx(772,"false"),sg()()(),Sl(773,"td",23)(774,"em")(775,"strong"),Jx(776,"(opcional)"),sg()(),Sl(777,"p"),Jx(778,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(779,"code"),Jx(780,"p-label"),sg(),Jx(781,". Quando "),Sl(782,"code"),Jx(783,"p-label-text-wrap"),sg(),Jx(784,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Sl(785,"tr",16)(786,"td",17)(787,"div",18)(788,"span",19),Jx(789," p-loading"),Wl(790,"br"),sg()()(),Sl(791,"td",20)(792,"code",29),Jx(793,"boolean"),sg()(),Sl(794,"td",22)(795,"p")(796,"code"),Jx(797,"false"),sg()()(),Sl(798,"td",23)(799,"em")(800,"strong"),Jx(801,"(opcional)"),sg()(),Sl(802,"p"),Jx(803,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Sl(804,"tr",16)(805,"td",17)(806,"div",18)(807,"span",19),Jx(808," p-max-date"),Wl(809,"br"),sg()()(),Sl(810,"td",20)(811,"code",21),Jx(812,"string "),sg(),Sl(813,"code",32),Jx(814," Date"),sg()(),Sl(815,"td",22),Jx(816,"-"),sg(),Sl(817,"td",23)(818,"em")(819,"strong"),Jx(820,"(opcional)"),sg()(),Sl(821,"p"),Jx(822,"Define uma data m\xE1xima para o "),Sl(823,"code"),Jx(824,"po-datepicker"),sg(),Jx(825,"."),sg()()(),Sl(826,"tr",16)(827,"td",17)(828,"div",18)(829,"span",19),Jx(830," p-min-date"),Wl(831,"br"),sg()()(),Sl(832,"td",20)(833,"code",21),Jx(834,"string "),sg(),Sl(835,"code",32),Jx(836," Date"),sg()(),Sl(837,"td",22),Jx(838,"-"),sg(),Sl(839,"td",23)(840,"em")(841,"strong"),Jx(842,"(opcional)"),sg()(),Sl(843,"p"),Jx(844,"Define uma data m\xEDnima para o "),Sl(845,"code"),Jx(846,"po-datepicker"),sg(),Jx(847,"."),sg()()(),Sl(848,"tr",16)(849,"td",17)(850,"div",18)(851,"span",19),Jx(852," p-mode"),Wl(853,"br"),sg()()(),Sl(854,"td",20)(855,"code",33),Jx(856,"'month-year' "),sg(),Sl(857,"code",34),Jx(858," 'year'"),sg()(),Sl(859,"td",22),Jx(860,"-"),sg(),Sl(861,"td",23)(862,"em")(863,"strong"),Jx(864,"(opcional)"),sg()(),Sl(865,"p"),Jx(866,"Define o modo de opera\xE7\xE3o do datepicker."),sg(),Sl(867,"p"),Jx(868,"Permite configurar o componente para sele\xE7\xE3o de:"),sg(),Sl(869,"ul")(870,"li"),Jx(871,"M\xEAs e ano ("),Sl(872,"code"),Jx(873,"month-year"),sg(),Jx(874,");"),sg(),Sl(875,"li"),Jx(876,"Apenas ano ("),Sl(877,"code"),Jx(878,"year"),sg(),Jx(879,")."),sg()()()(),Sl(880,"tr",16)(881,"td",17)(882,"div",18)(883,"span",19),Jx(884," p-no-autocomplete"),Wl(885,"br"),sg()()(),Sl(886,"td",20)(887,"code",29),Jx(888,"boolean"),sg()(),Sl(889,"td",22)(890,"p")(891,"code"),Jx(892,"false"),sg()()(),Sl(893,"td",23)(894,"em")(895,"strong"),Jx(896,"(opcional)"),sg()(),Sl(897,"p"),Jx(898,"Define a propriedade nativa "),Sl(899,"code"),Jx(900,"autocomplete"),sg(),Jx(901," do campo como "),Sl(902,"code"),Jx(903,"off"),sg(),Jx(904,"."),sg()()(),Sl(905,"tr",16)(906,"td",17)(907,"div",25)(908,"span",26),Jx(909," (p-blur)"),Wl(910,"br"),sg()()(),Sl(911,"td",20)(912,"code",28),Jx(913,"EventEmitter"),sg()(),Sl(914,"td",22),Jx(915,"-"),sg(),Sl(916,"td",23)(917,"em")(918,"strong"),Jx(919,"(opcional)"),sg()(),Sl(920,"p"),Jx(921,"Evento disparado ao sair do campo."),sg()()(),Sl(922,"tr",16)(923,"td",17)(924,"div",25)(925,"span",26),Jx(926," (p-change)"),Wl(927,"br"),sg()()(),Sl(928,"td",20)(929,"code",28),Jx(930,"EventEmitter"),sg()(),Sl(931,"td",22),Jx(932,"-"),sg(),Sl(933,"td",23)(934,"em")(935,"strong"),Jx(936,"(opcional)"),sg()(),Sl(937,"p"),Jx(938,"Evento disparado ao alterar valor do campo."),sg()()(),Sl(939,"tr",16)(940,"td",17)(941,"div",18)(942,"span",19),Jx(943," p-optional"),Wl(944,"br"),sg()()(),Sl(945,"td",20)(946,"code",29),Jx(947,"boolean"),sg()(),Sl(948,"td",22)(949,"p")(950,"code"),Jx(951,"false"),sg()()(),Sl(952,"td",23)(953,"em")(954,"strong"),Jx(955,"(opcional)"),sg()(),Sl(956,"p"),Jx(957,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Sl(958,"blockquote")(959,"p"),Jx(960,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(961,"ul")(962,"li"),Jx(963,"O campo conter "),Sl(964,"code"),Jx(965,"p-required"),sg(),Jx(966,";"),sg(),Sl(967,"li"),Jx(968,"N\xE3o possuir "),Sl(969,"code"),Jx(970,"p-help"),sg(),Jx(971," e/ou "),Sl(972,"code"),Jx(973,"p-label"),sg(),Jx(974,"."),sg()()()(),Sl(975,"tr",16)(976,"td",17)(977,"div",18)(978,"span",19),Jx(979," p-placeholder"),Wl(980,"br"),sg()()(),Sl(981,"td",20)(982,"code",21),Jx(983,"string"),sg()(),Sl(984,"td",22),Jx(985,"-"),sg(),Sl(986,"td",23)(987,"em")(988,"strong"),Jx(989,"(opcional)"),sg()(),Sl(990,"p"),Jx(991,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Sl(992,"tr",16)(993,"td",17)(994,"div",18)(995,"span",19),Jx(996," p-helper"),Wl(997,"br"),sg()()(),Sl(998,"td",20)(999,"code",35),Jx(1e3,"PoHelperOptions "),sg(),Sl(1001,"code",21),Jx(1002," string"),sg()(),Sl(1003,"td",22),Jx(1004,"-"),sg(),Sl(1005,"td",23)(1006,"em")(1007,"strong"),Jx(1008,"(opcional)"),sg()(),Sl(1009,"p"),Jx(1010,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Sl(1011,"code"),Jx(1012,"p-label"),sg(),Jx(1013," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Sl(1014,"code"),Jx(1015,"p-label"),sg(),Jx(1016,"."),sg(),Sl(1017,"blockquote")(1018,"p"),Jx(1019,"Para mais informa\xE7\xF5es acesse: "),Sl(1020,"a",36),Jx(1021,"https://po-ui.io/documentation/po-helper"),sg(),Jx(1022,"."),sg()(),Sl(1023,"blockquote")(1024,"p"),Jx(1025,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Sl(1026,"code"),Jx(1027,"p-additional-help-tooltip"),sg(),Jx(1028," e "),Sl(1029,"code"),Jx(1030,"p-additional-help"),sg(),Jx(1031,") ser\xE1 ignorado."),sg()()()(),Sl(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),Jx(1036,"p-readonly"),Wl(1037,"br"),sg()()(),Sl(1038,"td",20)(1039,"code",29),Jx(1040,"boolean"),sg()(),Sl(1041,"td",22),Jx(1042,"-"),sg(),Sl(1043,"td",23)(1044,"em")(1045,"strong"),Jx(1046,"(opcional)"),sg()(),Sl(1047,"p"),Jx(1048,"Torna o elemento somente leitura."),sg()()(),Sl(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),Jx(1053,"p-required"),Wl(1054,"br"),sg()()(),Sl(1055,"td",20)(1056,"code",29),Jx(1057,"boolean"),sg()(),Sl(1058,"td",22)(1059,"p")(1060,"code"),Jx(1061,"false"),sg()()(),Sl(1062,"td",23)(1063,"em")(1064,"strong"),Jx(1065,"(opcional)"),sg()(),Sl(1066,"p"),Jx(1067,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Sl(1068,"tr",16)(1069,"td",17)(1070,"div",18)(1071,"span",19),Jx(1072," p-required-field-error-message"),Wl(1073,"br"),sg()()(),Sl(1074,"td",20)(1075,"code",29),Jx(1076,"boolean"),sg()(),Sl(1077,"td",22)(1078,"p")(1079,"code"),Jx(1080,"false"),sg()()(),Sl(1081,"td",23)(1082,"em")(1083,"strong"),Jx(1084,"(opcional)"),sg()(),Sl(1085,"p"),Jx(1086,"Exibe a mensagem setada na propriedade "),Sl(1087,"code"),Jx(1088,"p-error-pattern"),sg(),Jx(1089," se o campo estiver vazio e for requerido."),sg(),Sl(1090,"blockquote")(1091,"p"),Jx(1092,"Necess\xE1rio que a propriedade "),Sl(1093,"code"),Jx(1094,"p-required"),sg(),Jx(1095," esteja habilitada."),sg()()()(),Sl(1096,"tr",16)(1097,"td",17)(1098,"div",18)(1099,"span",19),Jx(1100," p-show-required"),Wl(1101,"br"),sg()()(),Sl(1102,"td",20)(1103,"code",29),Jx(1104,"boolean"),sg()(),Sl(1105,"td",22),Jx(1106,"-"),sg(),Sl(1107,"td",23)(1108,"p"),Jx(1109,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Sl(1110,"blockquote")(1111,"p"),Jx(1112,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Sl(1113,"ul")(1114,"li"),Jx(1115,"N\xE3o possuir "),Sl(1116,"code"),Jx(1117,"p-help"),sg(),Jx(1118," e/ou "),Sl(1119,"code"),Jx(1120,"p-label"),sg(),Jx(1121,"."),sg()()()(),Sl(1122,"tr",16)(1123,"td",17)(1124,"div",18)(1125,"span",19),Jx(1126," p-size"),Wl(1127,"br"),sg()()(),Sl(1128,"td",20)(1129,"code",21),Jx(1130,"string"),sg()(),Sl(1131,"td",22)(1132,"p")(1133,"code"),Jx(1134,"medium"),sg()()(),Sl(1135,"td",23)(1136,"em")(1137,"strong"),Jx(1138,"(opcional)"),sg()(),Sl(1139,"p"),Jx(1140,"Define o tamanho do componente:"),sg(),Sl(1141,"ul")(1142,"li")(1143,"code"),Jx(1144,"small"),sg(),Jx(1145,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(1146,"li")(1147,"code"),Jx(1148,"medium"),sg(),Jx(1149,": altura do input como 44px."),sg()(),Sl(1150,"blockquote")(1151,"p"),Jx(1152,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Sl(1153,"code"),Jx(1154,"medium"),sg(),Jx(1155,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Sl(1156,"a",37),Jx(1157,"po-theme"),sg(),Jx(1158,"."),sg()()()(),Sl(1159,"tr",16)(1160,"td",17)(1161,"div",18)(1162,"span",19),Jx(1163," p-year-range-limit"),Wl(1164,"br"),sg()()(),Sl(1165,"td",20)(1166,"code",38),Jx(1167,"number"),sg()(),Sl(1168,"td",22)(1169,"p"),Jx(1170,"150"),sg()(),Sl(1171,"td",23)(1172,"em")(1173,"strong"),Jx(1174,"(opcional)"),sg()(),Sl(1175,"p"),Jx(1176,"Define o limite de anos exibidos nas varia\xE7\xF5es "),Sl(1177,"code"),Jx(1178,"month-year"),sg(),Jx(1179," e "),Sl(1180,"code"),Jx(1181,"year"),sg(),Jx(1182,`,
considerando a data atual como refer\xEAncia.`),sg(),Sl(1183,"p"),Jx(1184,`O valor informado determina o intervalo de anos anterior e posterior
\xE0 data corrente que ser\xE1 disponibilizado para sele\xE7\xE3o.`),sg()()()(),Sl(1185,"h3",12),Jx(1186,"M\xE9todos"),sg(),Sl(1187,"table",39)(1188,"tr",16)(1189,"th",40)(1190,"div",18)(1191,"h4")(1192,"span",19),Jx(1193," focus "),sg()()()()(),Sl(1194,"tr",23)(1195,"td",23)(1196,"p"),Jx(1197,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(1198,"p"),Jx(1199,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(1200,"pre")(1201,"code"),Jx(1202,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),sg()()()()(),Wl(1203,"br"),Sl(1204,"table",39)(1205,"tr",16)(1206,"th",40)(1207,"div",18)(1208,"h4")(1209,"span",19),Jx(1210," showAdditionalHelp "),sg()()()()(),Sl(1211,"tr",23)(1212,"td",23)(1213,"p"),Jx(1214,"M\xE9todo que exibe "),Sl(1215,"code"),Jx(1216,"p-helper"),sg(),Jx(1217," ou executa a a\xE7\xE3o definida em "),Sl(1218,"code"),Jx(1219,"p-helper{eventOnClick}"),sg(),Jx(1220," ou em "),Sl(1221,"code"),Jx(1222,"p-additionalHelp"),sg(),Jx(1223,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1224,"code"),Jx(1225,"p-keydown"),sg(),Jx(1226,"."),sg(),Sl(1227,"blockquote")(1228,"p"),Jx(1229,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1230,"code"),Jx(1231,"po-helper"),sg(),Jx(1232," quando o componente estiver com foco."),sg()(),Sl(1233,"pre")(1234,"code"),Jx(1235,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),sg()(),Sl(1236,"pre")(1237,"code"),Jx(1238,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(1239,"br"),Sl(1240,"h3"),Jx(1241,"Enums"),sg(),Sl(1242,"h4",4)(1243,"code",5),Jx(1244,"PoDatepickerIsoFormat"),sg()(),Sl(1245,"div",2)(1246,"p")(1247,"em"),Jx(1248,"Enum"),sg(),Jx(1249," que define o padr\xE3o de formata\xE7\xE3o das datas."),sg(),Sl(1250,"blockquote")(1251,"p"),Jx(1252,"Caso um formato padr\xE3o seja definido, o mesmo n\xE3o ser\xE1 mais alterado de acordo com o formato de entrada."),sg()()(),Sl(1253,"h4",12),Jx(1254,"Propriedades"),sg(),Sl(1255,"table",13)(1256,"tr",14)(1257,"th",15),Jx(1258,"Nome"),sg(),Sl(1259,"th",15),Jx(1260,"Descri\xE7\xE3o"),sg()(),Sl(1261,"tr",16)(1262,"td",17)(1263,"div",18)(1264,"span",19),Jx(1265," Basic"),Wl(1266,"br"),sg()()(),Sl(1267,"td",23)(1268,"p"),Jx(1269,"Padr\xE3o "),Sl(1270,"strong"),Jx(1271,"E8601DAw"),sg(),Jx(1272," ("),Sl(1273,"em"),Jx(1274,"yyyy-mm-dd"),sg(),Jx(1275,")."),sg()()(),Sl(1276,"tr",16)(1277,"td",17)(1278,"div",18)(1279,"span",19),Jx(1280," Extended"),Wl(1281,"br"),sg()()(),Sl(1282,"td",23)(1283,"p"),Jx(1284,"Padr\xE3o "),Sl(1285,"strong"),Jx(1286,"E8601DZw"),sg(),Jx(1287," ("),Sl(1288,"em"),Jx(1289,"yyyy-mm-ddThh:mm:ss+|-hh:mm"),sg(),Jx(1290,")."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var Pe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(C(Xn),C(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Datepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-datepicker-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-datepicker-basic-view")(6,"sample-po-datepicker-labs-view")(7,"sample-po-datepicker-year-view")(8,"sample-po-datepicker-month-year-view")(9,"sample-po-datepicker-airfare-view")(10,"sample-po-datepicker-airfare-reactive-form-view"),sg()()()),l&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ge,be,Se,xe,Ce,De,we],encapsulation:2})}return a})();var Je=[{path:"",component:Pe}],_e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[pL.forChild(Je),pL]})}return a})();var Rt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,_e]})}return a})();export{Rt as DocPoDatepickerModule};