import {f as fe$1,u as ue,a as ar,b as vL,w,c3 as Xn,d as wn,U as Un,cS as xw,g as f,c5 as Ode,aW as Yp,cM as oY,cN as lm,bD as Mde,J as Gl,an as TO,aH as Ga,b8 as Hme,b9 as Gme,T as Tl,z as tN,L as sg,a1 as ht,F as Vp,ar as zx,au as fg,M as tw,bs as hN,aX as nY,aF as J9,aY as eY,aG as Ck,aZ as Dk,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,c8 as Sde,c9 as $he,aB as Cx,aM as Ew,aN as t0,aO as Dw,aP as r0,aJ as Uhe,bd as Ox,av as Yl,aw as uo,ax as fo,cQ as Nk,cR as Ak,a3 as aNe,aD as Ky,aT as rN,aE as Xy}from'./main-LUSFEIN7.js';var Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","datepicker","p-label","PO Datepicker"]],template:function(l,i){l&1&&Gl(0,"po-datepicker",0);},dependencies:[Mde],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Datepicker Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-datepicker-basic"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,qe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,Ee],encapsulation:2})}return a})();var fe=(()=>{class a{helperText;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:"Basic",value:xw.Basic},{label:"Extended",value:xw.Extended}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];formatOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size="medium";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-labs"]],standalone:false,decls:22,vars:47,consts:[["f","ngForm"],["name","datepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-max-date","p-error-pattern","p-format","p-help","p-iso-format","p-label","p-locale","p-min-date","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-label-text-wrap","p-loading","p-compact-label","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date","p-format"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-format","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","isoFormat","p-columns","4","p-label","Iso Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let s=Cx();Tl(0,"po-datepicker",1),Ew("ngModelChange",function(r){return Ky(s),rN(i.datepicker,r)||(i.datepicker=r),Xy(r)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),t0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3)(4,"po-info",4),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(r){return Ky(s),rN(i.label,r)||(i.label=r),Xy(r)}),sg(),t0(),Tl(9,"po-input",6),Ew("ngModelChange",function(r){return Ky(s),rN(i.help,r)||(i.help=r),Xy(r)}),sg(),t0(),Tl(10,"po-input",7),Ew("ngModelChange",function(r){return Ky(s),rN(i.helperText,r)||(i.helperText=r),Xy(r)}),sg(),t0(),Tl(11,"po-input",8),Ew("ngModelChange",function(r){return Ky(s),rN(i.placeholder,r)||(i.placeholder=r),Xy(r)}),sg(),t0(),Tl(12,"po-input",9),Ew("ngModelChange",function(r){return Ky(s),rN(i.errorPattern,r)||(i.errorPattern=r),Xy(r)}),sg(),t0(),Tl(13,"po-datepicker",10),Ew("ngModelChange",function(r){return Ky(s),rN(i.minDate,r)||(i.minDate=r),Xy(r)}),sg(),t0(),Tl(14,"po-datepicker",11),Ew("ngModelChange",function(r){return Ky(s),rN(i.maxDate,r)||(i.maxDate=r),Xy(r)}),sg(),t0(),Tl(15,"po-checkbox-group",12),Ew("ngModelChange",function(r){return Ky(s),rN(i.properties,r)||(i.properties=r),Xy(r)}),sg(),t0(),Tl(16,"po-radio-group",13),Ew("ngModelChange",function(r){return Ky(s),rN(i.locale,r)||(i.locale=r),Xy(r)}),sg(),t0(),Tl(17,"po-radio-group",14),Ew("ngModelChange",function(r){return Ky(s),rN(i.format,r)||(i.format=r),Xy(r)}),sg(),t0(),Tl(18,"po-radio-group",15),Ew("ngModelChange",function(r){return Ky(s),rN(i.isoFormat,r)||(i.isoFormat=r),Xy(r)}),sg(),t0(),Tl(19,"po-radio-group",16),Ew("ngModelChange",function(r){return Ky(s),rN(i.size,r)||(i.size=r),Xy(r)}),sg(),t0(),Tl(20,"div",2)(21,"po-button",17),ht("p-click",function(){return i.restore()}),sg()()();}l&2&&(Dw("ngModel",i.datepicker),tw("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-max-date",i.maxDate)("p-error-pattern",i.errorPattern)("p-format",i.format)("p-help",i.help)("p-iso-format",i.isoFormat)("p-label",i.label)("p-locale",i.locale)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),r0(),Vp(3),tw("p-value",i.datepicker),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),r0(),Vp(),Dw("ngModel",i.help),r0(),Vp(),Dw("ngModel",i.helperText),r0(),Vp(),Dw("ngModel",i.placeholder),r0(),Vp(),Dw("ngModel",i.errorPattern),r0(),Vp(),Dw("ngModel",i.minDate),tw("p-max-date",i.maxDate)("p-format",i.format),r0(),Vp(),Dw("ngModel",i.maxDate),tw("p-format",i.format)("p-min-date",i.minDate),r0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),r0(),Vp(),Dw("ngModel",i.locale),tw("p-options",i.localeOptions),r0(),Vp(),Dw("ngModel",i.format),tw("p-options",i.formatOptions),r0(),Vp(),Dw("ngModel",i.isoFormat),tw("p-options",i.isoFormatOptions),r0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),r0());},dependencies:[nY,J9,eY,Ck,Dk,Qt,mv,C3,Mde,O3,Sde,$he],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Datepicker Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-datepicker
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-datepicker-labs"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Le,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,fe],encapsulation:2})}return a})();var he=(()=>{class a{selectedYear=new Date("2026-04-30").getFullYear();event;changeEvent(m){this.event=m;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-year"]],standalone:false,decls:5,vars:3,consts:[["name","yearPicker","p-label","Year Picker","p-placeholder","Select a year","p-mode","year",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"]],template:function(l,i){l&1&&(Tl(0,"po-datepicker",0),Ew("ngModelChange",function(c){return rN(i.selectedYear,c)||(i.selectedYear=c),c}),ht("p-change",function(c){return i.changeEvent(c)}),sg(),t0(),Gl(1,"po-divider"),Tl(2,"div",1),Gl(3,"po-info",2)(4,"po-info",3),sg()),l&2&&(Dw("ngModel",i.selectedYear),r0(),Vp(3),tw("p-value",i.selectedYear),Vp(),tw("p-value",i.event));},dependencies:[J9,Ck,mv,Mde,$he],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-year-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Datepicker Year"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-datepicker-year/sample-po-datepicker-year.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-datepicker
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-datepicker-year/sample-po-datepicker-year.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-datepicker-year"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Ne,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,he],encapsulation:2})}return a})();var ve=(()=>{class a{selectedMonthYear=new Date("2026-12-02");event;changeEvent(m){this.event=m;}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-month-year"]],standalone:false,decls:5,vars:3,consts:[["name","monthYearPicker","p-label","Month/Year Picker","p-placeholder","Select month and year","p-mode","month-year",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"]],template:function(l,i){l&1&&(Tl(0,"po-datepicker",0),Ew("ngModelChange",function(c){return rN(i.selectedMonthYear,c)||(i.selectedMonthYear=c),c}),ht("p-change",function(c){return i.changeEvent(c)}),sg(),t0(),Gl(1,"po-divider"),Tl(2,"div",1),Gl(3,"po-info",2)(4,"po-info",3),sg()),l&2&&(Dw("ngModel",i.selectedMonthYear),r0(),Vp(3),tw("p-value",i.selectedMonthYear),Vp(),tw("p-value",i.event));},dependencies:[J9,Ck,mv,Mde,$he],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-month-year-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Datepicker MonthYear"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.html"),sg(),Tl(13,"pre",7),tN(14,`<po-datepicker
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-datepicker-month-year"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,ze,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ve],encapsulation:2})}return a})();var je=["formAirfare"],ye=(()=>{class a{poDialog=f(Ode);poNotification=f(Yp);formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass="Economy";accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];apply(){let m=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:"Confirm",message:m,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"});},cancel:()=>{this.poNotification.warning("Booking Canceled");}});}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare"]],viewQuery:function(l,i){if(l&1&&Yl(je,7),l&2){let s;uo(s=fo())&&(i.formAirfare=s.first);}},standalone:false,decls:13,vars:11,consts:[["formAirfare","ngForm"],[1,"po-row"],["name","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","origin","p-placeholder","Flight origin","p-label","Origin","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-placeholder","Flight destination","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["clas","po-row"],["name","ticketClass","p-label","Class","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","accompany","p-label","Accompany","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let s=Cx();Tl(0,"form",null,0)(2,"div",1)(3,"po-datepicker",2),Ew("ngModelChange",function(r){return Ky(s),rN(i.startDate,r)||(i.startDate=r),Xy(r)}),sg(),t0(),Tl(4,"po-datepicker",3),Ew("ngModelChange",function(r){return Ky(s),rN(i.endDate,r)||(i.endDate=r),Xy(r)}),sg(),t0(),sg(),Tl(5,"div",1)(6,"po-input",4),Ew("ngModelChange",function(r){return Ky(s),rN(i.origin,r)||(i.origin=r),Xy(r)}),sg(),t0(),Tl(7,"po-input",5),Ew("ngModelChange",function(r){return Ky(s),rN(i.destination,r)||(i.destination=r),Xy(r)}),sg(),t0(),sg(),Tl(8,"div",6)(9,"po-select",7),Ew("ngModelChange",function(r){return Ky(s),rN(i.ticketClass,r)||(i.ticketClass=r),Xy(r)}),sg(),t0(),Tl(10,"po-select",8),Ew("ngModelChange",function(r){return Ky(s),rN(i.accompany,r)||(i.accompany=r),Xy(r)}),sg(),t0(),sg(),Tl(11,"div",1)(12,"po-button",9),ht("p-click",function(){return i.apply()}),sg()()();}if(l&2){let s=Ox(1);Vp(3),Dw("ngModel",i.startDate),tw("p-max-date",i.endDate),r0(),Vp(),Dw("ngModel",i.endDate),tw("p-min-date",i.startDate),r0(),Vp(2),Dw("ngModel",i.origin),r0(),Vp(),Dw("ngModel",i.destination),r0(),Vp(2),Dw("ngModel",i.ticketClass),tw("p-options",i.ticketClassOptions),r0(),Vp(),Dw("ngModel",i.accompany),tw("p-options",i.accompanyNumber),r0(),Vp(2),tw("p-disabled",s.invalid);}},dependencies:[nY,J9,eY,Ck,Dk,Qt,Mde,O3,Uhe],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Datepicker - Airfare"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html"),sg(),Tl(13,"pre",7),tN(14,`<form #formAirfare="ngForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-datepicker-airfare"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,He,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ye],encapsulation:2})}return a})();var ke=(()=>{class a{formBuilder=f(oY);poDialog=f(Ode);poNotification=f(Yp);formAirfare;accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,lm.required],destination:["",lm.required],endDate:[new Date,lm.required],origin:["",lm.required],startDate:[new Date,lm.required],ticketClass:["Economy",lm.required]});}apply(m){let{accompany:l,destination:i,endDate:s,origin:c,ticketClass:r,startDate:Me}=m.value,Te=`Would you like to confirm the ticket from ${c} to ${i} with departure date at
    ${this.getFormatedDate(Me)} and return at ${this.getFormatedDate(s)} with ${l} companions in
    ${r} class?`;this.poDialog.confirm({title:"Confirm",message:Te,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"});},cancel:()=>{this.poNotification.warning("Booking Canceled");}});}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form"]],standalone:false,decls:12,vars:6,consts:[[3,"formGroup"],[1,"po-row"],["formControlName","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start",1,"po-md-6",3,"p-max-date"],["formControlName","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end",1,"po-md-6",3,"p-min-date"],["formControlName","origin","p-placeholder","Flight origin","p-label","Origin",1,"po-md-6"],["formControlName","destination","p-label","Destination","p-placeholder","Flight destination",1,"po-md-6"],["clas","po-row"],["formControlName","ticketClass","p-label","Class",1,"po-md-6",3,"p-options"],["formControlName","accompany","p-label","Accompany",1,"po-md-6",3,"p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(Tl(0,"form",0)(1,"div",1),Gl(2,"po-datepicker",2),t0(),Gl(3,"po-datepicker",3),t0(),sg(),Tl(4,"div",1),Gl(5,"po-input",4),t0(),Gl(6,"po-input",5),t0(),sg(),Tl(7,"div",6),Gl(8,"po-select",7),t0(),Gl(9,"po-select",8),t0(),sg(),Tl(10,"div",1)(11,"po-button",9),ht("p-click",function(){return i.apply(i.formAirfare)}),sg()()()),l&2&&(tw("formGroup",i.formAirfare),Vp(2),tw("p-max-date",i.formAirfare.get("endDate").value),r0(),Vp(),tw("p-min-date",i.formAirfare.get("startDate").value),r0(),Vp(2),r0(),Vp(),r0(),Vp(2),tw("p-options",i.ticketClassOptions),r0(),Vp(),tw("p-options",i.accompanyNumber),r0(),Vp(2),tw("p-disabled",i.formAirfare.invalid));},dependencies:[nY,J9,eY,Nk,Ak,Qt,Mde,O3,Uhe],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),tN(3,"PO Datepicker - Airfare Reactive Form"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),tN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),tN(12,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html"),sg(),Tl(13,"pre",7),tN(14,`<form [formGroup]="formAirfare">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),tN(18,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts"),sg(),Tl(19,"pre",9),tN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-datepicker-airfare-reactive-form"),sg(),Gl(23,"hr")),l&2&&(Vp(5),zx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",hN(4,Qe,i.hideSampleCodeTabs)));},dependencies:[TO,Ga,Hme,Gme,ke],encapsulation:2})}return a})();var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-doc"]],standalone:false,decls:1291,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3schools.com/js/js_dates.asp"],["href","https://www.w3schools.com/jsref/jsref_setfullyear.asp"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,i){l&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),tN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),tN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),tN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),tN(11,"FormsModule"),sg(),tN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),tN(14,"ReactiveFormsModule"),sg(),tN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),tN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),tN(20,"PoDatepickerComponent"),sg()(),Tl(21,"div",2)(22,"p"),tN(23,"O "),Tl(24,"code"),tN(25,"po-datepicker"),sg(),tN(26," \xE9 um componente espec\xEDfico para manipula\xE7\xE3o de datas permitindo a digita\xE7\xE3o e / ou sele\xE7\xE3o."),sg(),Tl(27,"p"),tN(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),Tl(29,"code"),tN(30,"p-format"),sg(),tN(31,")."),sg(),Tl(32,"p"),tN(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Tl(34,"code"),tN(35,"p-locale"),sg(),tN(36,"."),sg(),Tl(37,"p"),tN(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),sg(),Tl(39,"blockquote")(40,"p"),tN(41,"Por padr\xE3o, o formato de sa\xEDda do "),Tl(42,"em"),tN(43,"model"),sg(),tN(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),Tl(45,"code"),tN(46,"p-iso-format"),sg(),tN(47," prov\xEA esse controle independentemente do formato de entrada. Veja abaixo os formatos dispon\xEDveis:"),sg()(),Tl(48,"ul")(49,"li")(50,"p"),tN(51,"Formato de entrada e sa\xEDda (E8601DZw) - "),Tl(52,"code"),tN(53,"'2017-11-28T00:00:00-02:00'"),sg(),tN(54,";"),sg()(),Tl(55,"li")(56,"p"),tN(57,"Formato de entrada e sa\xEDda (E8601DAw) - "),Tl(58,"code"),tN(59,"'2017-11-28'"),sg(),tN(60,";"),sg()(),Tl(61,"li")(62,"p"),tN(63,"Formato de entrada (Date) - "),Tl(64,"code"),tN(65,"new Date(2017, 10, 28)"),sg(),tN(66," e sa\xEDda (E8601DAw) - "),Tl(67,"code"),tN(68,"'2017-11-28'"),sg(),tN(69,";"),sg()()(),Tl(70,"p")(71,"strong"),tN(72,"Importante:"),sg()(),Tl(73,"ul")(74,"li"),tN(75,"Para utilizar datas com ano inferior a 100, verificar o comportamento do "),Tl(76,"a",6)(77,"code"),tN(78,"new Date"),sg()(),tN(79,`
e utilizar o m\xE9todo `),Tl(80,"a",7)(81,"code"),tN(82,"setFullYear"),sg()(),tN(83,"."),sg(),Tl(84,"li"),tN(85,"Caso a data esteja inv\xE1lida, o "),Tl(86,"code"),tN(87,"model"),sg(),tN(88," receber\xE1 "),Tl(89,"strong"),tN(90,"'Data inv\xE1lida'"),sg(),tN(91,"."),sg(),Tl(92,"li"),tN(93,"Caso o "),Tl(94,"code"),tN(95,"input"),sg(),tN(96," esteja passando um "),Tl(97,"code"),tN(98,"[(ngModel)]"),sg(),tN(99,", mas n\xE3o tenha um "),Tl(100,"code"),tN(101,"name"),sg(),tN(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Tl(103,"code"),tN(104,'[ngModelOptions]="{standalone: true}"'),sg(),tN(105,")."),sg()(),Tl(106,"p"),tN(107,"Exemplo:"),sg(),Tl(108,"pre")(109,"code"),tN(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),sg()(),Tl(111,"blockquote")(112,"p"),tN(113,"N\xE3o esque\xE7a de importar o "),Tl(114,"code"),tN(115,"FormsModule"),sg(),tN(116," em seu m\xF3dulo, tal como para utilizar o "),Tl(117,"code"),tN(118,"input default"),sg(),tN(119,"."),sg()(),Tl(120,"h4"),tN(121,"Tokens customiz\xE1veis"),sg(),Tl(122,"p"),tN(123,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Gl(124,"br"),tN(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(126,"code"),tN(127,".po-input"),sg()(),Tl(128,"blockquote")(129,"p"),tN(130,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(131,"a",8),tN(132,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),tN(133,"."),sg()(),Tl(134,"table")(135,"thead")(136,"tr")(137,"th"),tN(138,"Propriedade"),sg(),Tl(139,"th"),tN(140,"Descri\xE7\xE3o"),sg(),Tl(141,"th"),tN(142,"Valor Padr\xE3o"),sg()()(),Tl(143,"tbody")(144,"tr")(145,"td")(146,"strong"),tN(147,"Default Values"),sg()(),Gl(148,"td")(149,"td"),sg(),Tl(150,"tr")(151,"td")(152,"code"),tN(153,"--font-family"),sg()(),Tl(154,"td"),tN(155,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(156,"td")(157,"code"),tN(158,"var(--font-family-theme)"),sg()()(),Tl(159,"tr")(160,"td")(161,"code"),tN(162,"--font-size"),sg()(),Tl(163,"td"),tN(164,"Tamanho da fonte"),sg(),Tl(165,"td")(166,"code"),tN(167,"var(--font-size-default)"),sg()()(),Tl(168,"tr")(169,"td")(170,"code"),tN(171,"--text-color-placeholder"),sg(),tN(172," \xA0"),sg(),Tl(173,"td"),tN(174,"Cor principal do texto do placeholder"),sg(),Tl(175,"td")(176,"code"),tN(177,"var(--color-neutral-light-30)"),sg()()(),Tl(178,"tr")(179,"td")(180,"code"),tN(181,"--color"),sg()(),Tl(182,"td"),tN(183,"Cor principal do datepicker"),sg(),Tl(184,"td")(185,"code"),tN(186,"var(--color-neutral-dark-70)"),sg()()(),Tl(187,"tr")(188,"td")(189,"code"),tN(190,"--background"),sg()(),Tl(191,"td"),tN(192,"Cor de background"),sg(),Tl(193,"td")(194,"code"),tN(195,"var(--color-neutral-light-05)"),sg()()(),Tl(196,"tr")(197,"td")(198,"code"),tN(199,"--padding"),sg()(),Tl(200,"td"),tN(201,"Preenchimento"),sg(),Tl(202,"td")(203,"code"),tN(204,"0 0.5rem"),sg()()(),Tl(205,"tr")(206,"td")(207,"code"),tN(208,"--text-color"),sg()(),Tl(209,"td"),tN(210,"Cor do texto"),sg(),Tl(211,"td")(212,"code"),tN(213,"var(--color-neutral-dark-90)"),sg()()(),Tl(214,"tr")(215,"td")(216,"code"),tN(217,"--field-container-title-justify"),sg()(),Tl(218,"td"),tN(219,"Alinhamento horizontal do t\xEDtulo ("),Tl(220,"code"),tN(221,"justify-content"),sg(),tN(222,")"),sg(),Tl(223,"td")(224,"code"),tN(225,"space-between"),sg()()(),Tl(226,"tr")(227,"td")(228,"code"),tN(229,"--field-container-title-flex"),sg()(),Tl(230,"td"),tN(231,"Flex do t\xEDtulo ("),Tl(232,"code"),tN(233,"flex"),sg(),tN(234,")"),sg(),Tl(235,"td")(236,"code"),tN(237,"1 auto"),sg()()(),Tl(238,"tr")(239,"td")(240,"strong"),tN(241,"Hover"),sg()(),Gl(242,"td")(243,"td"),sg(),Tl(244,"tr")(245,"td")(246,"code"),tN(247,"--color-hover"),sg()(),Tl(248,"td"),tN(249,"Cor principal no estado hover"),sg(),Tl(250,"td")(251,"code"),tN(252,"var(--color-brand-01-dark)"),sg()()(),Tl(253,"tr")(254,"td")(255,"code"),tN(256,"--background-hover"),sg()(),Tl(257,"td"),tN(258,"Cor de background no estado hover"),sg(),Tl(259,"td")(260,"code"),tN(261,"var(--color-brand-01-lightest)"),sg()()(),Tl(262,"tr")(263,"td")(264,"strong"),tN(265,"Focused"),sg()(),Gl(266,"td")(267,"td"),sg(),Tl(268,"tr")(269,"td")(270,"code"),tN(271,"--color-focused"),sg()(),Tl(272,"td"),tN(273,"Cor principal no estado de focus"),sg(),Tl(274,"td")(275,"code"),tN(276,"var(--color-action-default)"),sg()()(),Tl(277,"tr")(278,"td")(279,"code"),tN(280,"--outline-color-focused"),sg()(),Tl(281,"td"),tN(282,"Cor do outline do estado de focus"),sg(),Tl(283,"td")(284,"code"),tN(285,"var(--color-action-focus)"),sg()()(),Tl(286,"tr")(287,"td")(288,"strong"),tN(289,"Disabled"),sg()(),Gl(290,"td")(291,"td"),sg(),Tl(292,"tr")(293,"td")(294,"code"),tN(295,"--color-disabled"),sg()(),Tl(296,"td"),tN(297,"Cor principal no estado disabled"),sg(),Tl(298,"td")(299,"code"),tN(300,"var(--color-neutral-light-30)"),sg()()(),Tl(301,"tr")(302,"td")(303,"code"),tN(304,"--background-disabled"),sg()(),Tl(305,"td"),tN(306,"Cor de background no estado disabled \xA0"),sg(),Tl(307,"td")(308,"code"),tN(309,"var(--color-neutral-light-20)"),sg()()(),Tl(310,"tr")(311,"td")(312,"code"),tN(313,"--text-color-disabled"),sg()(),Tl(314,"td"),tN(315,"Cor do texto no estado disabled"),sg(),Tl(316,"td")(317,"code"),tN(318,"var(--color-neutral-dark-70)"),sg()()()()()(),Tl(319,"div",9)(320,"h4",10),tN(321,"Seletor"),sg(),Tl(322,"pre",11),tN(323,`<po-datepicker
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
`),sg()(),Tl(324,"h4",12),tN(325,"Propriedades"),sg(),Tl(326,"table",13)(327,"tr",14)(328,"th",15),tN(329,"Nome"),sg(),Tl(330,"th",15),tN(331,"Tipo"),sg(),Tl(332,"th",15),tN(333,"Padr\xE3o"),sg(),Tl(334,"th",15),tN(335,"Descri\xE7\xE3o"),sg()(),Tl(336,"tr",16)(337,"td",17)(338,"div",18)(339,"span",19),tN(340,"p-locale"),Gl(341,"br"),sg()()(),Tl(342,"td",20)(343,"code",21),tN(344,"string"),sg()(),Tl(345,"td",22),tN(346,"-"),sg(),Tl(347,"td",23)(348,"em")(349,"strong"),tN(350,"(opcional)"),sg()(),Tl(351,"p"),tN(352,"Idioma do Datepicker."),sg(),Tl(353,"blockquote")(354,"p"),tN(355,"O locale padr\xE3o sera recuperado com base no "),Tl(356,"a",24)(357,"code"),tN(358,"PoI18nService"),sg()(),tN(359," ou "),Tl(360,"em"),tN(361,"browser"),sg(),tN(362,"."),sg()()()(),Tl(363,"tr",16)(364,"td",17)(365,"div",25)(366,"span",26),tN(367," (p-additional-help)"),Gl(368,"br"),sg()(),Tl(369,"div",27),tN(370,"Deprecated"),sg()(),Tl(371,"td",20)(372,"code",28),tN(373,"EventEmitter"),sg()(),Tl(374,"td",22),tN(375,"-"),sg(),Tl(376,"td",23)(377,"em")(378,"strong"),tN(379,"(opcional)"),sg()(),Tl(380,"p"),tN(381,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),sg(),Tl(382,"blockquote")(383,"p"),tN(384,"Essa propriedade est\xE1 "),Tl(385,"strong"),tN(386,"depreciada"),sg(),tN(387," e ser\xE1 removida na vers\xE3o "),Tl(388,"code"),tN(389,"23.x.x"),sg(),tN(390,". Recomendamos utilizar a propriedade "),Tl(391,"code"),tN(392,"p-helper"),sg(),tN(393," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(394,"tr",16)(395,"td",17)(396,"div",18)(397,"span",19),tN(398," p-additional-help-tooltip"),Gl(399,"br"),sg()(),Tl(400,"div",27),tN(401,"Deprecated"),sg()(),Tl(402,"td",20)(403,"code",21),tN(404,"string"),sg()(),Tl(405,"td",22),tN(406,"-"),sg(),Tl(407,"td",23)(408,"em")(409,"strong"),tN(410,"(opcional)"),sg()(),Tl(411,"p"),tN(412,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),Tl(413,"code"),tN(414,"po-helper"),sg(),tN(415,`.
`),Tl(416,"strong"),tN(417,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),sg()(),Tl(418,"blockquote")(419,"p"),tN(420,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),sg()(),Tl(421,"blockquote")(422,"p"),tN(423,"Essa propriedade est\xE1 "),Tl(424,"strong"),tN(425,"depreciada"),sg(),tN(426," e ser\xE1 removida na vers\xE3o "),Tl(427,"code"),tN(428,"23.x.x"),sg(),tN(429,". Recomendamos utilizar a propriedade "),Tl(430,"code"),tN(431,"p-helper"),sg(),tN(432," que oferece mais recursos e flexibilidade."),sg()()()(),Tl(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),tN(437," p-append-in-body"),Gl(438,"br"),sg()()(),Tl(439,"td",20)(440,"code",29),tN(441,"boolean"),sg()(),Tl(442,"td",22)(443,"p")(444,"code"),tN(445,"false"),sg()()(),Tl(446,"td",23)(447,"em")(448,"strong"),tN(449,"(opcional)"),sg()(),Tl(450,"p"),tN(451,"Define que o "),Tl(452,"code"),tN(453,"calendar"),sg(),tN(454," e/ou tooltip ("),Tl(455,"code"),tN(456,"p-additional-help-tooltip"),sg(),tN(457," e/ou "),Tl(458,"code"),tN(459,"p-error-limit"),sg(),tN(460,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),sg(),Tl(461,"blockquote")(462,"p"),tN(463,"Quando utilizado com "),Tl(464,"code"),tN(465,"p-helper"),sg(),tN(466,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),sg()()()(),Tl(467,"tr",16)(468,"td",17)(469,"div",18)(470,"span",19),tN(471," p-auto-focus"),Gl(472,"br"),sg()()(),Tl(473,"td",20)(474,"code",29),tN(475,"boolean"),sg()(),Tl(476,"td",22)(477,"p")(478,"code"),tN(479,"false"),sg()()(),Tl(480,"td",23)(481,"em")(482,"strong"),tN(483,"(opcional)"),sg()(),Tl(484,"p"),tN(485,"Aplica foco no elemento ao ser iniciado."),sg(),Tl(486,"blockquote")(487,"p"),tN(488,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),sg()()()(),Tl(489,"tr",16)(490,"td",17)(491,"div",18)(492,"span",19),tN(493,"p-clean"),Gl(494,"br"),sg()()(),Tl(495,"td",20)(496,"code",29),tN(497,"boolean"),sg()(),Tl(498,"td",22),tN(499,"-"),sg(),Tl(500,"td",23)(501,"em")(502,"strong"),tN(503,"(opcional)"),sg()(),Tl(504,"p"),tN(505,"Habilita a\xE7\xE3o para limpar o campo."),sg()()(),Tl(506,"tr",16)(507,"td",17)(508,"div",18)(509,"span",19),tN(510," p-compact-label"),Gl(511,"br"),sg()()(),Tl(512,"td",20)(513,"code",29),tN(514,"boolean"),sg()(),Tl(515,"td",22)(516,"p")(517,"code"),tN(518,"false"),sg()()(),Tl(519,"td",23)(520,"em")(521,"strong"),tN(522,"(opcional)"),sg()(),Tl(523,"p"),tN(524,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg(),Tl(525,"p"),tN(526,"Quando habilitado ("),Tl(527,"code"),tN(528,"true"),sg(),tN(529,"), o modo compacto afeta o conjunto composto por:"),sg(),Tl(530,"ul")(531,"li")(532,"code"),tN(533,"po-label"),sg()(),Tl(534,"li")(535,"code"),tN(536,"p-requirement (showRequired)"),sg()(),Tl(537,"li")(538,"code"),tN(539,"po-helper"),sg()()(),Tl(540,"p"),tN(541,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),sg(),Tl(542,"p"),tN(543,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),sg(),Tl(544,"ul")(545,"li")(546,"code"),tN(547,"--field-container-title-justify"),sg()(),Tl(548,"li")(549,"code"),tN(550,"--field-container-title-flex"),sg()()(),Tl(551,"p"),tN(552,"Exemplo:"),sg(),Tl(553,"pre")(554,"code"),tN(555,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),sg()(),Tl(556,"p"),tN(557,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),sg()()(),Tl(558,"tr",16)(559,"td",17)(560,"div",18)(561,"span",19),tN(562,"p-disabled"),Gl(563,"br"),sg()()(),Tl(564,"td",20)(565,"code",29),tN(566,"boolean"),sg()(),Tl(567,"td",22),tN(568,"-"),sg(),Tl(569,"td",23)(570,"em")(571,"strong"),tN(572,"(opcional)"),sg()(),Tl(573,"p"),tN(574,"Desabilita o campo."),sg()()(),Tl(575,"tr",16)(576,"td",17)(577,"div",18)(578,"span",19),tN(579," p-error-async"),Gl(580,"br"),sg()()(),Tl(581,"td",20)(582,"code",30),tN(583,"(value) => Observable<boolean>"),sg()(),Tl(584,"td",22),tN(585,"-"),sg(),Tl(586,"td",23)(587,"em")(588,"strong"),tN(589,"(opcional)"),sg()(),Tl(590,"p"),tN(591,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(592,"code"),tN(593,"change"),sg(),tN(594,"."),sg()()(),Tl(595,"tr",16)(596,"td",17)(597,"div",18)(598,"span",19),tN(599," p-error-limit"),Gl(600,"br"),sg()()(),Tl(601,"td",20)(602,"code",29),tN(603,"boolean"),sg()(),Tl(604,"td",22)(605,"p")(606,"code"),tN(607,"false"),sg()()(),Tl(608,"td",23)(609,"em")(610,"strong"),tN(611,"(opcional)"),sg()(),Tl(612,"p"),tN(613,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg(),Tl(614,"blockquote")(615,"p"),tN(616,"Caso essa propriedade seja definida como "),Tl(617,"code"),tN(618,"true"),sg(),tN(619,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),sg()()()(),Tl(620,"tr",16)(621,"td",17)(622,"div",18)(623,"span",19),tN(624," p-error-pattern"),Gl(625,"br"),sg()()(),Tl(626,"td",20)(627,"code",21),tN(628,"string"),sg()(),Tl(629,"td",22),tN(630,"-"),sg(),Tl(631,"td",23)(632,"em")(633,"strong"),tN(634,"(opcional)"),sg()(),Tl(635,"p"),tN(636,"Mensagem apresentada quando a data for inv\xE1lida ou fora do per\xEDodo."),sg(),Tl(637,"blockquote")(638,"p"),tN(639,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Tl(640,"code"),tN(641,"p-required-field-error-message"),sg(),tN(642," em conjunto."),sg()()()(),Tl(643,"tr",16)(644,"td",17)(645,"div",18)(646,"span",19),tN(647," p-format"),Gl(648,"br"),sg()()(),Tl(649,"td",20)(650,"code",21),tN(651,"string"),sg()(),Tl(652,"td",22)(653,"p")(654,"code"),tN(655,"dd/mm/yyyy"),sg()()(),Tl(656,"td",23)(657,"em")(658,"strong"),tN(659,"(opcional)"),sg()(),Tl(660,"p"),tN(661,"Formato de exibi\xE7\xE3o da data."),sg(),Tl(662,"p"),tN(663,"Valores v\xE1lidos:"),sg(),Tl(664,"ul")(665,"li")(666,"code"),tN(667,"dd/mm/yyyy"),sg()(),Tl(668,"li")(669,"code"),tN(670,"mm/dd/yyyy"),sg()(),Tl(671,"li")(672,"code"),tN(673,"yyyy/mm/dd"),sg()()(),Tl(674,"p"),tN(675,"Propriedade incompat\xEDvel com as varia\xE7\xF5es month-year e year."),sg()()(),Tl(676,"tr",16)(677,"td",17)(678,"div",18)(679,"span",19),tN(680," p-help"),Gl(681,"br"),sg()()(),Tl(682,"td",20)(683,"code",21),tN(684,"string"),sg()(),Tl(685,"td",22),tN(686,"-"),sg(),Tl(687,"td",23)(688,"em")(689,"strong"),tN(690,"(opcional)"),sg()(),Tl(691,"p"),tN(692,"Texto de apoio do campo."),sg()()(),Tl(693,"tr",16)(694,"td",17)(695,"div",18)(696,"span",19),tN(697," p-iso-format"),Gl(698,"br"),sg()()(),Tl(699,"td",20)(700,"code",31),tN(701,"PoDatepickerIsoFormat"),sg()(),Tl(702,"td",22),tN(703,"-"),sg(),Tl(704,"td",23)(705,"em")(706,"strong"),tN(707,"(opcional)"),sg()(),Tl(708,"p"),tN(709,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),Tl(710,"em"),tN(711,"model"),sg(),tN(712,", independentemente do formato de entrada."),sg(),Tl(713,"blockquote")(714,"p"),tN(715,"Veja os valores v\xE1lidos no "),Tl(716,"em"),tN(717,"enum"),sg(),Tl(718,"code"),tN(719,"PoDatepickerIsoFormat"),sg(),tN(720,"."),sg()(),Tl(721,"p"),tN(722,"Propriedade incompat\xEDvel com as varia\xE7\xF5es month-year e year."),sg()()(),Tl(723,"tr",16)(724,"td",17)(725,"div",25)(726,"span",26),tN(727," (p-keydown)"),Gl(728,"br"),sg()()(),Tl(729,"td",20)(730,"code",28),tN(731,"EventEmitter"),sg()(),Tl(732,"td",22),tN(733,"-"),sg(),Tl(734,"td",23)(735,"em")(736,"strong"),tN(737,"(opcional)"),sg()(),Tl(738,"p"),tN(739,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(740,"code"),tN(741,"KeyboardEvent"),sg(),tN(742," com informa\xE7\xF5es sobre a tecla."),sg()()(),Tl(743,"tr",16)(744,"td",17)(745,"div",18)(746,"span",19),tN(747," p-label"),Gl(748,"br"),sg()()(),Tl(749,"td",20)(750,"code",21),tN(751,"string"),sg()(),Tl(752,"td",22),tN(753,"-"),sg(),Tl(754,"td",23)(755,"em")(756,"strong"),tN(757,"(opcional)"),sg()(),Tl(758,"p"),tN(759,"R\xF3tulo do campo."),sg()()(),Tl(760,"tr",16)(761,"td",17)(762,"div",18)(763,"span",19),tN(764," p-label-text-wrap"),Gl(765,"br"),sg()()(),Tl(766,"td",20)(767,"code",29),tN(768,"boolean"),sg()(),Tl(769,"td",22)(770,"p")(771,"code"),tN(772,"false"),sg()()(),Tl(773,"td",23)(774,"em")(775,"strong"),tN(776,"(opcional)"),sg()(),Tl(777,"p"),tN(778,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(779,"code"),tN(780,"p-label"),sg(),tN(781,". Quando "),Tl(782,"code"),tN(783,"p-label-text-wrap"),sg(),tN(784,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),sg()()(),Tl(785,"tr",16)(786,"td",17)(787,"div",18)(788,"span",19),tN(789," p-loading"),Gl(790,"br"),sg()()(),Tl(791,"td",20)(792,"code",29),tN(793,"boolean"),sg()(),Tl(794,"td",22)(795,"p")(796,"code"),tN(797,"false"),sg()()(),Tl(798,"td",23)(799,"em")(800,"strong"),tN(801,"(opcional)"),sg()(),Tl(802,"p"),tN(803,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(804,"tr",16)(805,"td",17)(806,"div",18)(807,"span",19),tN(808," p-max-date"),Gl(809,"br"),sg()()(),Tl(810,"td",20)(811,"code",21),tN(812,"string "),sg(),Tl(813,"code",32),tN(814," Date"),sg()(),Tl(815,"td",22),tN(816,"-"),sg(),Tl(817,"td",23)(818,"em")(819,"strong"),tN(820,"(opcional)"),sg()(),Tl(821,"p"),tN(822,"Define uma data m\xE1xima para o "),Tl(823,"code"),tN(824,"po-datepicker"),sg(),tN(825,"."),sg()()(),Tl(826,"tr",16)(827,"td",17)(828,"div",18)(829,"span",19),tN(830," p-min-date"),Gl(831,"br"),sg()()(),Tl(832,"td",20)(833,"code",21),tN(834,"string "),sg(),Tl(835,"code",32),tN(836," Date"),sg()(),Tl(837,"td",22),tN(838,"-"),sg(),Tl(839,"td",23)(840,"em")(841,"strong"),tN(842,"(opcional)"),sg()(),Tl(843,"p"),tN(844,"Define uma data m\xEDnima para o "),Tl(845,"code"),tN(846,"po-datepicker"),sg(),tN(847,"."),sg()()(),Tl(848,"tr",16)(849,"td",17)(850,"div",18)(851,"span",19),tN(852," p-mode"),Gl(853,"br"),sg()()(),Tl(854,"td",20)(855,"code",33),tN(856,"'month-year' "),sg(),Tl(857,"code",34),tN(858," 'year'"),sg()(),Tl(859,"td",22),tN(860,"-"),sg(),Tl(861,"td",23)(862,"em")(863,"strong"),tN(864,"(opcional)"),sg()(),Tl(865,"p"),tN(866,"Define o modo de opera\xE7\xE3o do datepicker."),sg(),Tl(867,"p"),tN(868,"Permite configurar o componente para sele\xE7\xE3o de:"),sg(),Tl(869,"ul")(870,"li"),tN(871,"M\xEAs e ano ("),Tl(872,"code"),tN(873,"month-year"),sg(),tN(874,");"),sg(),Tl(875,"li"),tN(876,"Apenas ano ("),Tl(877,"code"),tN(878,"year"),sg(),tN(879,")."),sg()()()(),Tl(880,"tr",16)(881,"td",17)(882,"div",18)(883,"span",19),tN(884," p-no-autocomplete"),Gl(885,"br"),sg()()(),Tl(886,"td",20)(887,"code",29),tN(888,"boolean"),sg()(),Tl(889,"td",22)(890,"p")(891,"code"),tN(892,"false"),sg()()(),Tl(893,"td",23)(894,"em")(895,"strong"),tN(896,"(opcional)"),sg()(),Tl(897,"p"),tN(898,"Define a propriedade nativa "),Tl(899,"code"),tN(900,"autocomplete"),sg(),tN(901," do campo como "),Tl(902,"code"),tN(903,"off"),sg(),tN(904,"."),sg()()(),Tl(905,"tr",16)(906,"td",17)(907,"div",25)(908,"span",26),tN(909," (p-blur)"),Gl(910,"br"),sg()()(),Tl(911,"td",20)(912,"code",28),tN(913,"EventEmitter"),sg()(),Tl(914,"td",22),tN(915,"-"),sg(),Tl(916,"td",23)(917,"em")(918,"strong"),tN(919,"(opcional)"),sg()(),Tl(920,"p"),tN(921,"Evento disparado ao sair do campo."),sg()()(),Tl(922,"tr",16)(923,"td",17)(924,"div",25)(925,"span",26),tN(926," (p-change)"),Gl(927,"br"),sg()()(),Tl(928,"td",20)(929,"code",28),tN(930,"EventEmitter"),sg()(),Tl(931,"td",22),tN(932,"-"),sg(),Tl(933,"td",23)(934,"em")(935,"strong"),tN(936,"(opcional)"),sg()(),Tl(937,"p"),tN(938,"Evento disparado ao alterar valor do campo."),sg()()(),Tl(939,"tr",16)(940,"td",17)(941,"div",18)(942,"span",19),tN(943," p-optional"),Gl(944,"br"),sg()()(),Tl(945,"td",20)(946,"code",29),tN(947,"boolean"),sg()(),Tl(948,"td",22)(949,"p")(950,"code"),tN(951,"false"),sg()()(),Tl(952,"td",23)(953,"em")(954,"strong"),tN(955,"(opcional)"),sg()(),Tl(956,"p"),tN(957,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg(),Tl(958,"blockquote")(959,"p"),tN(960,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(961,"ul")(962,"li"),tN(963,"O campo conter "),Tl(964,"code"),tN(965,"p-required"),sg(),tN(966,";"),sg(),Tl(967,"li"),tN(968,"N\xE3o possuir "),Tl(969,"code"),tN(970,"p-help"),sg(),tN(971," e/ou "),Tl(972,"code"),tN(973,"p-label"),sg(),tN(974,"."),sg()()()(),Tl(975,"tr",16)(976,"td",17)(977,"div",18)(978,"span",19),tN(979," p-placeholder"),Gl(980,"br"),sg()()(),Tl(981,"td",20)(982,"code",21),tN(983,"string"),sg()(),Tl(984,"td",22),tN(985,"-"),sg(),Tl(986,"td",23)(987,"em")(988,"strong"),tN(989,"(opcional)"),sg()(),Tl(990,"p"),tN(991,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Tl(992,"tr",16)(993,"td",17)(994,"div",18)(995,"span",19),tN(996," p-helper"),Gl(997,"br"),sg()()(),Tl(998,"td",20)(999,"code",35),tN(1e3,"PoHelperOptions "),sg(),Tl(1001,"code",21),tN(1002," string"),sg()(),Tl(1003,"td",22),tN(1004,"-"),sg(),Tl(1005,"td",23)(1006,"em")(1007,"strong"),tN(1008,"(opcional)"),sg()(),Tl(1009,"p"),tN(1010,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),Tl(1011,"code"),tN(1012,"p-label"),sg(),tN(1013," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),Tl(1014,"code"),tN(1015,"p-label"),sg(),tN(1016,"."),sg(),Tl(1017,"blockquote")(1018,"p"),tN(1019,"Para mais informa\xE7\xF5es acesse: "),Tl(1020,"a",36),tN(1021,"https://po-ui.io/documentation/po-helper"),sg(),tN(1022,"."),sg()(),Tl(1023,"blockquote")(1024,"p"),tN(1025,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),Tl(1026,"code"),tN(1027,"p-additional-help-tooltip"),sg(),tN(1028," e "),Tl(1029,"code"),tN(1030,"p-additional-help"),sg(),tN(1031,") ser\xE1 ignorado."),sg()()()(),Tl(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),tN(1036,"p-readonly"),Gl(1037,"br"),sg()()(),Tl(1038,"td",20)(1039,"code",29),tN(1040,"boolean"),sg()(),Tl(1041,"td",22),tN(1042,"-"),sg(),Tl(1043,"td",23)(1044,"em")(1045,"strong"),tN(1046,"(opcional)"),sg()(),Tl(1047,"p"),tN(1048,"Torna o elemento somente leitura."),sg()()(),Tl(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),tN(1053,"p-required"),Gl(1054,"br"),sg()()(),Tl(1055,"td",20)(1056,"code",29),tN(1057,"boolean"),sg()(),Tl(1058,"td",22)(1059,"p")(1060,"code"),tN(1061,"false"),sg()()(),Tl(1062,"td",23)(1063,"em")(1064,"strong"),tN(1065,"(opcional)"),sg()(),Tl(1066,"p"),tN(1067,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Tl(1068,"tr",16)(1069,"td",17)(1070,"div",18)(1071,"span",19),tN(1072," p-required-field-error-message"),Gl(1073,"br"),sg()()(),Tl(1074,"td",20)(1075,"code",29),tN(1076,"boolean"),sg()(),Tl(1077,"td",22)(1078,"p")(1079,"code"),tN(1080,"false"),sg()()(),Tl(1081,"td",23)(1082,"em")(1083,"strong"),tN(1084,"(opcional)"),sg()(),Tl(1085,"p"),tN(1086,"Exibe a mensagem setada na propriedade "),Tl(1087,"code"),tN(1088,"p-error-pattern"),sg(),tN(1089," se o campo estiver vazio e for requerido."),sg(),Tl(1090,"blockquote")(1091,"p"),tN(1092,"Necess\xE1rio que a propriedade "),Tl(1093,"code"),tN(1094,"p-required"),sg(),tN(1095," esteja habilitada."),sg()()()(),Tl(1096,"tr",16)(1097,"td",17)(1098,"div",18)(1099,"span",19),tN(1100," p-show-required"),Gl(1101,"br"),sg()()(),Tl(1102,"td",20)(1103,"code",29),tN(1104,"boolean"),sg()(),Tl(1105,"td",22),tN(1106,"-"),sg(),Tl(1107,"td",23)(1108,"p"),tN(1109,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg(),Tl(1110,"blockquote")(1111,"p"),tN(1112,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),sg()(),Tl(1113,"ul")(1114,"li"),tN(1115,"N\xE3o possuir "),Tl(1116,"code"),tN(1117,"p-help"),sg(),tN(1118," e/ou "),Tl(1119,"code"),tN(1120,"p-label"),sg(),tN(1121,"."),sg()()()(),Tl(1122,"tr",16)(1123,"td",17)(1124,"div",18)(1125,"span",19),tN(1126," p-size"),Gl(1127,"br"),sg()()(),Tl(1128,"td",20)(1129,"code",21),tN(1130,"string"),sg()(),Tl(1131,"td",22)(1132,"p")(1133,"code"),tN(1134,"medium"),sg()()(),Tl(1135,"td",23)(1136,"em")(1137,"strong"),tN(1138,"(opcional)"),sg()(),Tl(1139,"p"),tN(1140,"Define o tamanho do componente:"),sg(),Tl(1141,"ul")(1142,"li")(1143,"code"),tN(1144,"small"),sg(),tN(1145,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(1146,"li")(1147,"code"),tN(1148,"medium"),sg(),tN(1149,": altura do input como 44px."),sg()(),Tl(1150,"blockquote")(1151,"p"),tN(1152,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),Tl(1153,"code"),tN(1154,"medium"),sg(),tN(1155,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1156,"a",37),tN(1157,"po-theme"),sg(),tN(1158,"."),sg()()()(),Tl(1159,"tr",16)(1160,"td",17)(1161,"div",18)(1162,"span",19),tN(1163," p-year-range-limit"),Gl(1164,"br"),sg()()(),Tl(1165,"td",20)(1166,"code",38),tN(1167,"number"),sg()(),Tl(1168,"td",22)(1169,"p"),tN(1170,"150"),sg()(),Tl(1171,"td",23)(1172,"em")(1173,"strong"),tN(1174,"(opcional)"),sg()(),Tl(1175,"p"),tN(1176,"Define o limite de anos exibidos nas varia\xE7\xF5es "),Tl(1177,"code"),tN(1178,"month-year"),sg(),tN(1179," e "),Tl(1180,"code"),tN(1181,"year"),sg(),tN(1182,`,
considerando a data atual como refer\xEAncia.`),sg(),Tl(1183,"p"),tN(1184,`O valor informado determina o intervalo de anos anterior e posterior
\xE0 data corrente que ser\xE1 disponibilizado para sele\xE7\xE3o.`),sg()()()(),Tl(1185,"h3",12),tN(1186,"M\xE9todos"),sg(),Tl(1187,"table",39)(1188,"tr",16)(1189,"th",40)(1190,"div",18)(1191,"h4")(1192,"span",19),tN(1193," focus "),sg()()()()(),Tl(1194,"tr",23)(1195,"td",23)(1196,"p"),tN(1197,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(1198,"p"),tN(1199,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(1200,"pre")(1201,"code"),tN(1202,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),sg()()()()(),Gl(1203,"br"),Tl(1204,"table",39)(1205,"tr",16)(1206,"th",40)(1207,"div",18)(1208,"h4")(1209,"span",19),tN(1210," showAdditionalHelp "),sg()()()()(),Tl(1211,"tr",23)(1212,"td",23)(1213,"p"),tN(1214,"M\xE9todo que exibe "),Tl(1215,"code"),tN(1216,"p-helper"),sg(),tN(1217," ou executa a a\xE7\xE3o definida em "),Tl(1218,"code"),tN(1219,"p-helper{eventOnClick}"),sg(),tN(1220," ou em "),Tl(1221,"code"),tN(1222,"p-additionalHelp"),sg(),tN(1223,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1224,"code"),tN(1225,"p-keydown"),sg(),tN(1226,"."),sg(),Tl(1227,"blockquote")(1228,"p"),tN(1229,"Exibe ou oculta o conte\xFAdo do componente "),Tl(1230,"code"),tN(1231,"po-helper"),sg(),tN(1232," quando o componente estiver com foco."),sg()(),Tl(1233,"pre")(1234,"code"),tN(1235,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),sg()(),Tl(1236,"pre")(1237,"code"),tN(1238,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(1239,"br"),Tl(1240,"h3"),tN(1241,"Enums"),sg(),Tl(1242,"h4",4)(1243,"code",5),tN(1244,"PoDatepickerIsoFormat"),sg()(),Tl(1245,"div",2)(1246,"p")(1247,"em"),tN(1248,"Enum"),sg(),tN(1249," que define o padr\xE3o de formata\xE7\xE3o das datas."),sg(),Tl(1250,"blockquote")(1251,"p"),tN(1252,"Caso um formato padr\xE3o seja definido, o mesmo n\xE3o ser\xE1 mais alterado de acordo com o formato de entrada."),sg()()(),Tl(1253,"h4",12),tN(1254,"Propriedades"),sg(),Tl(1255,"table",13)(1256,"tr",14)(1257,"th",15),tN(1258,"Nome"),sg(),Tl(1259,"th",15),tN(1260,"Descri\xE7\xE3o"),sg()(),Tl(1261,"tr",16)(1262,"td",17)(1263,"div",18)(1264,"span",19),tN(1265," Basic"),Gl(1266,"br"),sg()()(),Tl(1267,"td",23)(1268,"p"),tN(1269,"Padr\xE3o "),Tl(1270,"strong"),tN(1271,"E8601DAw"),sg(),tN(1272," ("),Tl(1273,"em"),tN(1274,"yyyy-mm-dd"),sg(),tN(1275,")."),sg()()(),Tl(1276,"tr",16)(1277,"td",17)(1278,"div",18)(1279,"span",19),tN(1280," Extended"),Gl(1281,"br"),sg()()(),Tl(1282,"td",23)(1283,"p"),tN(1284,"Padr\xE3o "),Tl(1285,"strong"),tN(1286,"E8601DZw"),sg(),tN(1287," ("),Tl(1288,"em"),tN(1289,"yyyy-mm-ddThh:mm:ss+|-hh:mm"),sg(),tN(1290,")."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return a})();var Pe=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(l){return new(l||a)(w(Xn),w(wn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Datepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-datepicker-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-datepicker-basic-view")(6,"sample-po-datepicker-labs-view")(7,"sample-po-datepicker-year-view")(8,"sample-po-datepicker-month-year-view")(9,"sample-po-datepicker-airfare-view")(10,"sample-po-datepicker-airfare-reactive-form-view"),sg()()()),l&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[aNe,Hme,Gme,ge,be,Se,xe,Ce,De,we],encapsulation:2})}return a})();var Je=[{path:"",component:Pe}],_e=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(Je),vL]})}return a})();var Rt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[ar,_e]})}return a})();export{Rt as DocPoDatepickerModule};