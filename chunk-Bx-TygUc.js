import {f as fe$1,u as ue,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,cm as ow,d as f,by as vle,aE as Bp,cg as uY,ch as om,b9 as Ro,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe$1,aL as di,bx as ia,aO as Yo,bB as ga,bC as Vp,al as lx,am as pw,an as $0,ap as hw,aq as G0,ai as ya,aX as _x,as as $l,at as uo,au as fo,ck as vk,cl as gk,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var fe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","datepicker","p-label","PO Datepicker"]],template:function(r,i){r&1&&Ul(0,"po-datepicker",0);},dependencies:[Ro],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Datepicker Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-datepicker-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ne,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,fe],encapsulation:2})}return a})();var ye=(()=>{class a{helperText;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:"Basic",value:ow.Basic},{label:"Extended",value:ow.Extended}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];formatOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(m){this.event=m;}restore(){this.helperText="",this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-labs"]],standalone:false,decls:22,vars:47,consts:[["f","ngForm"],["name","datepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-max-date","p-error-pattern","p-format","p-help","p-iso-format","p-label","p-locale","p-min-date","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-label-text-wrap","p-loading","p-compact-label","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date","p-format"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-format","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","isoFormat","p-columns","4","p-label","Iso Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=lx();wl(0,"po-datepicker",1),pw("ngModelChange",function(l){return Qy(s),$x(i.datepicker,l)||(i.datepicker=l),Jy(l)}),ut("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3)(4,"po-info",4),ng(),Ul(5,"po-divider"),wl(6,"form",null,0)(8,"po-input",5),pw("ngModelChange",function(l){return Qy(s),$x(i.label,l)||(i.label=l),Jy(l)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(l){return Qy(s),$x(i.help,l)||(i.help=l),Jy(l)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(l){return Qy(s),$x(i.helperText,l)||(i.helperText=l),Jy(l)}),ng(),$0(),wl(11,"po-input",8),pw("ngModelChange",function(l){return Qy(s),$x(i.placeholder,l)||(i.placeholder=l),Jy(l)}),ng(),$0(),wl(12,"po-input",9),pw("ngModelChange",function(l){return Qy(s),$x(i.errorPattern,l)||(i.errorPattern=l),Jy(l)}),ng(),$0(),wl(13,"po-datepicker",10),pw("ngModelChange",function(l){return Qy(s),$x(i.minDate,l)||(i.minDate=l),Jy(l)}),ng(),$0(),wl(14,"po-datepicker",11),pw("ngModelChange",function(l){return Qy(s),$x(i.maxDate,l)||(i.maxDate=l),Jy(l)}),ng(),$0(),wl(15,"po-checkbox-group",12),pw("ngModelChange",function(l){return Qy(s),$x(i.properties,l)||(i.properties=l),Jy(l)}),ng(),$0(),wl(16,"po-radio-group",13),pw("ngModelChange",function(l){return Qy(s),$x(i.locale,l)||(i.locale=l),Jy(l)}),ng(),$0(),wl(17,"po-radio-group",14),pw("ngModelChange",function(l){return Qy(s),$x(i.format,l)||(i.format=l),Jy(l)}),ng(),$0(),wl(18,"po-radio-group",15),pw("ngModelChange",function(l){return Qy(s),$x(i.isoFormat,l)||(i.isoFormat=l),Jy(l)}),ng(),$0(),wl(19,"po-radio-group",16),pw("ngModelChange",function(l){return Qy(s),$x(i.size,l)||(i.size=l),Jy(l)}),ng(),$0(),wl(20,"div",2)(21,"po-button",17),ut("p-click",function(){return i.restore()}),ng()()();}r&2&&(hw("ngModel",i.datepicker),YE("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-max-date",i.maxDate)("p-error-pattern",i.errorPattern)("p-format",i.format)("p-help",i.help)("p-iso-format",i.isoFormat)("p-label",i.label)("p-locale",i.locale)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),G0(),Pp(3),YE("p-value",i.datepicker),Pp(),YE("p-value",i.event),Pp(4),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.help),G0(),Pp(),hw("ngModel",i.helperText),G0(),Pp(),hw("ngModel",i.placeholder),G0(),Pp(),hw("ngModel",i.errorPattern),G0(),Pp(),hw("ngModel",i.minDate),YE("p-max-date",i.maxDate)("p-format",i.format),G0(),Pp(),hw("ngModel",i.maxDate),YE("p-format",i.format)("p-min-date",i.minDate),G0(),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.locale),YE("p-options",i.localeOptions),G0(),Pp(),hw("ngModel",i.format),YE("p-options",i.formatOptions),G0(),Pp(),hw("ngModel",i.isoFormat),YE("p-options",i.isoFormatOptions),G0(),Pp(),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe$1,di,ia,Ro,Yo,ga,Vp],encapsulation:2,changeDetection:1})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Datepicker Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-datepicker
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-datepicker-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,ze,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ye],encapsulation:2})}return a})();var ke=(()=>{class a{selectedYear=new Date("2026-04-30").getFullYear();event;changeEvent(m){this.event=m;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-year"]],standalone:false,decls:5,vars:3,consts:[["name","yearPicker","p-label","Year Picker","p-placeholder","Select a year","p-mode","year",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"]],template:function(r,i){r&1&&(wl(0,"po-datepicker",0),pw("ngModelChange",function(c){return $x(i.selectedYear,c)||(i.selectedYear=c),c}),ut("p-change",function(c){return i.changeEvent(c)}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",1),Ul(3,"po-info",2)(4,"po-info",3),ng()),r&2&&(hw("ngModel",i.selectedYear),G0(),Pp(3),YE("p-value",i.selectedYear),Pp(),YE("p-value",i.event));},dependencies:[iY,ck,di,Ro,Vp],encapsulation:2,changeDetection:1})}return a})();var Re=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-year-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Datepicker Year"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-datepicker-year/sample-po-datepicker-year.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-datepicker
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-datepicker-year/sample-po-datepicker-year.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-datepicker-year"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Re,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ke],encapsulation:2})}return a})();var we=(()=>{class a{selectedMonthYear=new Date("2026-12-02");event;changeEvent(m){this.event=m;}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-month-year"]],standalone:false,decls:5,vars:3,consts:[["name","monthYearPicker","p-label","Month/Year Picker","p-placeholder","Select month and year","p-mode","month-year",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"]],template:function(r,i){r&1&&(wl(0,"po-datepicker",0),pw("ngModelChange",function(c){return $x(i.selectedMonthYear,c)||(i.selectedMonthYear=c),c}),ut("p-change",function(c){return i.changeEvent(c)}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",1),Ul(3,"po-info",2)(4,"po-info",3),ng()),r&2&&(hw("ngModel",i.selectedMonthYear),G0(),Pp(3),YE("p-value",i.selectedMonthYear),Pp(),YE("p-value",i.event));},dependencies:[iY,ck,di,Ro,Vp],encapsulation:2,changeDetection:1})}return a})();var Ue=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-month-year-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Datepicker MonthYear"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-datepicker
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-datepicker-month-year"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ue,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,we],encapsulation:2})}return a})();var Ze=["formAirfare"],_e=(()=>{class a{poDialog=f(vle);poNotification=f(Bp);formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass="Economy";accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];apply(){let m=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:"Confirm",message:m,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"});},cancel:()=>{this.poNotification.warning("Booking Canceled");}});}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare"]],viewQuery:function(r,i){if(r&1&&$l(Ze,7),r&2){let s;uo(s=fo())&&(i.formAirfare=s.first);}},standalone:false,decls:13,vars:11,consts:[["formAirfare","ngForm"],[1,"po-row"],["name","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","origin","p-placeholder","Flight origin","p-label","Origin","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-placeholder","Flight destination","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["clas","po-row"],["name","ticketClass","p-label","Class","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","accompany","p-label","Accompany","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let s=lx();wl(0,"form",null,0)(2,"div",1)(3,"po-datepicker",2),pw("ngModelChange",function(l){return Qy(s),$x(i.startDate,l)||(i.startDate=l),Jy(l)}),ng(),$0(),wl(4,"po-datepicker",3),pw("ngModelChange",function(l){return Qy(s),$x(i.endDate,l)||(i.endDate=l),Jy(l)}),ng(),$0(),ng(),wl(5,"div",1)(6,"po-input",4),pw("ngModelChange",function(l){return Qy(s),$x(i.origin,l)||(i.origin=l),Jy(l)}),ng(),$0(),wl(7,"po-input",5),pw("ngModelChange",function(l){return Qy(s),$x(i.destination,l)||(i.destination=l),Jy(l)}),ng(),$0(),ng(),wl(8,"div",6)(9,"po-select",7),pw("ngModelChange",function(l){return Qy(s),$x(i.ticketClass,l)||(i.ticketClass=l),Jy(l)}),ng(),$0(),wl(10,"po-select",8),pw("ngModelChange",function(l){return Qy(s),$x(i.accompany,l)||(i.accompany=l),Jy(l)}),ng(),$0(),ng(),wl(11,"div",1)(12,"po-button",9),ut("p-click",function(){return i.apply()}),ng()()();}if(r&2){let s=_x(1);Pp(3),hw("ngModel",i.startDate),YE("p-max-date",i.endDate),G0(),Pp(),hw("ngModel",i.endDate),YE("p-min-date",i.startDate),G0(),Pp(2),hw("ngModel",i.origin),G0(),Pp(),hw("ngModel",i.destination),G0(),Pp(2),hw("ngModel",i.ticketClass),YE("p-options",i.ticketClassOptions),G0(),Pp(),hw("ngModel",i.accompany),YE("p-options",i.accompanyNumber),G0(),Pp(2),YE("p-disabled",s.invalid);}},dependencies:[aY,iY,oY,ck,ok,Pe$1,Ro,Yo,ya],encapsulation:2,changeDetection:1})}return a})();var Xe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Datepicker - Airfare"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form #formAirfare="ngForm">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-datepicker-airfare"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Xe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,_e],encapsulation:2})}return a})();var Te=(()=>{class a{formBuilder=f(uY);poDialog=f(vle);poNotification=f(Bp);formAirfare;accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,om.required],destination:["",om.required],endDate:[new Date,om.required],origin:["",om.required],startDate:[new Date,om.required],ticketClass:["Economy",om.required]});}apply(m){let{accompany:r,destination:i,endDate:s,origin:c,ticketClass:l,startDate:Le}=m.value,Oe=`Would you like to confirm the ticket from ${c} to ${i} with departure date at
    ${this.getFormatedDate(Le)} and return at ${this.getFormatedDate(s)} with ${r} companions in
    ${l} class?`;this.poDialog.confirm({title:"Confirm",message:Oe,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"});},cancel:()=>{this.poNotification.warning("Booking Canceled");}});}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form"]],standalone:false,decls:12,vars:6,consts:[[3,"formGroup"],[1,"po-row"],["formControlName","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start",1,"po-md-6",3,"p-max-date"],["formControlName","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end",1,"po-md-6",3,"p-min-date"],["formControlName","origin","p-placeholder","Flight origin","p-label","Origin",1,"po-md-6"],["formControlName","destination","p-label","Destination","p-placeholder","Flight destination",1,"po-md-6"],["clas","po-row"],["formControlName","ticketClass","p-label","Class",1,"po-md-6",3,"p-options"],["formControlName","accompany","p-label","Accompany",1,"po-md-6",3,"p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(wl(0,"form",0)(1,"div",1),Ul(2,"po-datepicker",2),$0(),Ul(3,"po-datepicker",3),$0(),ng(),wl(4,"div",1),Ul(5,"po-input",4),$0(),Ul(6,"po-input",5),$0(),ng(),wl(7,"div",6),Ul(8,"po-select",7),$0(),Ul(9,"po-select",8),$0(),ng(),wl(10,"div",1)(11,"po-button",9),ut("p-click",function(){return i.apply(i.formAirfare)}),ng()()()),r&2&&(YE("formGroup",i.formAirfare),Pp(2),YE("p-max-date",i.formAirfare.get("endDate").value),G0(),Pp(),YE("p-min-date",i.formAirfare.get("startDate").value),G0(),Pp(2),G0(),Pp(),G0(),Pp(2),YE("p-options",i.ticketClassOptions),G0(),Pp(),YE("p-options",i.accompanyNumber),G0(),Pp(2),YE("p-disabled",i.formAirfare.invalid));},dependencies:[aY,iY,oY,vk,gk,Pe$1,Ro,Yo,ya],encapsulation:2,changeDetection:1})}return a})();var tt=a=>({"docs-sample-code-tabs":a}),Fe=(()=>{class a{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Datepicker - Airfare Reactive Form"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form [formGroup]="formAirfare">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-datepicker-airfare-reactive-form"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,tt,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Te],encapsulation:2})}return a})();var qe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=Un({type:a,selectors:[["sample-po-datepicker-doc"]],standalone:false,decls:1291,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3schools.com/js/js_dates.asp"],["href","https://www.w3schools.com/jsref/jsref_setfullyear.asp"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoDatepickerComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,"O "),wl(24,"code"),Ux(25,"po-datepicker"),ng(),Ux(26," \xE9 um componente espec\xEDfico para manipula\xE7\xE3o de datas permitindo a digita\xE7\xE3o e / ou sele\xE7\xE3o."),ng(),wl(27,"p"),Ux(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),wl(29,"code"),Ux(30,"p-format"),ng(),Ux(31,")."),ng(),wl(32,"p"),Ux(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),wl(34,"code"),Ux(35,"p-locale"),ng(),Ux(36,"."),ng(),wl(37,"p"),Ux(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),ng(),wl(39,"blockquote")(40,"p"),Ux(41,"Por padr\xE3o, o formato de sa\xEDda do "),wl(42,"em"),Ux(43,"model"),ng(),Ux(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),wl(45,"code"),Ux(46,"p-iso-format"),ng(),Ux(47," prov\xEA esse controle independentemente do formato de entrada. Veja abaixo os formatos dispon\xEDveis:"),ng()(),wl(48,"ul")(49,"li")(50,"p"),Ux(51,"Formato de entrada e sa\xEDda (E8601DZw) - "),wl(52,"code"),Ux(53,"'2017-11-28T00:00:00-02:00'"),ng(),Ux(54,";"),ng()(),wl(55,"li")(56,"p"),Ux(57,"Formato de entrada e sa\xEDda (E8601DAw) - "),wl(58,"code"),Ux(59,"'2017-11-28'"),ng(),Ux(60,";"),ng()(),wl(61,"li")(62,"p"),Ux(63,"Formato de entrada (Date) - "),wl(64,"code"),Ux(65,"new Date(2017, 10, 28)"),ng(),Ux(66," e sa\xEDda (E8601DAw) - "),wl(67,"code"),Ux(68,"'2017-11-28'"),ng(),Ux(69,";"),ng()()(),wl(70,"p")(71,"strong"),Ux(72,"Importante:"),ng()(),wl(73,"ul")(74,"li"),Ux(75,"Para utilizar datas com ano inferior a 100, verificar o comportamento do "),wl(76,"a",6)(77,"code"),Ux(78,"new Date"),ng()(),Ux(79,`
e utilizar o m\xE9todo `),wl(80,"a",7)(81,"code"),Ux(82,"setFullYear"),ng()(),Ux(83,"."),ng(),wl(84,"li"),Ux(85,"Caso a data esteja inv\xE1lida, o "),wl(86,"code"),Ux(87,"model"),ng(),Ux(88," receber\xE1 "),wl(89,"strong"),Ux(90,"'Data inv\xE1lida'"),ng(),Ux(91,"."),ng(),wl(92,"li"),Ux(93,"Caso o "),wl(94,"code"),Ux(95,"input"),ng(),Ux(96," esteja passando um "),wl(97,"code"),Ux(98,"[(ngModel)]"),ng(),Ux(99,", mas n\xE3o tenha um "),wl(100,"code"),Ux(101,"name"),ng(),Ux(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),wl(103,"code"),Ux(104,'[ngModelOptions]="{standalone: true}"'),ng(),Ux(105,")."),ng()(),wl(106,"p"),Ux(107,"Exemplo:"),ng(),wl(108,"pre")(109,"code"),Ux(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),ng()(),wl(111,"blockquote")(112,"p"),Ux(113,"N\xE3o esque\xE7a de importar o "),wl(114,"code"),Ux(115,"FormsModule"),ng(),Ux(116," em seu m\xF3dulo, tal como para utilizar o "),wl(117,"code"),Ux(118,"input default"),ng(),Ux(119,"."),ng()(),wl(120,"h4"),Ux(121,"Tokens customiz\xE1veis"),ng(),wl(122,"p"),Ux(123,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Ul(124,"br"),Ux(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),wl(126,"code"),Ux(127,".po-input"),ng()(),wl(128,"blockquote")(129,"p"),Ux(130,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(131,"a",8),Ux(132,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(133,"."),ng()(),wl(134,"table")(135,"thead")(136,"tr")(137,"th"),Ux(138,"Propriedade"),ng(),wl(139,"th"),Ux(140,"Descri\xE7\xE3o"),ng(),wl(141,"th"),Ux(142,"Valor Padr\xE3o"),ng()()(),wl(143,"tbody")(144,"tr")(145,"td")(146,"strong"),Ux(147,"Default Values"),ng()(),Ul(148,"td")(149,"td"),ng(),wl(150,"tr")(151,"td")(152,"code"),Ux(153,"--font-family"),ng()(),wl(154,"td"),Ux(155,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(156,"td")(157,"code"),Ux(158,"var(--font-family-theme)"),ng()()(),wl(159,"tr")(160,"td")(161,"code"),Ux(162,"--font-size"),ng()(),wl(163,"td"),Ux(164,"Tamanho da fonte"),ng(),wl(165,"td")(166,"code"),Ux(167,"var(--font-size-default)"),ng()()(),wl(168,"tr")(169,"td")(170,"code"),Ux(171,"--text-color-placeholder"),ng(),Ux(172," \xA0"),ng(),wl(173,"td"),Ux(174,"Cor principal do texto do placeholder"),ng(),wl(175,"td")(176,"code"),Ux(177,"var(--color-neutral-light-30)"),ng()()(),wl(178,"tr")(179,"td")(180,"code"),Ux(181,"--color"),ng()(),wl(182,"td"),Ux(183,"Cor principal do datepicker"),ng(),wl(184,"td")(185,"code"),Ux(186,"var(--color-neutral-dark-70)"),ng()()(),wl(187,"tr")(188,"td")(189,"code"),Ux(190,"--background"),ng()(),wl(191,"td"),Ux(192,"Cor de background"),ng(),wl(193,"td")(194,"code"),Ux(195,"var(--color-neutral-light-05)"),ng()()(),wl(196,"tr")(197,"td")(198,"code"),Ux(199,"--padding"),ng()(),wl(200,"td"),Ux(201,"Preenchimento"),ng(),wl(202,"td")(203,"code"),Ux(204,"0 0.5rem"),ng()()(),wl(205,"tr")(206,"td")(207,"code"),Ux(208,"--text-color"),ng()(),wl(209,"td"),Ux(210,"Cor do texto"),ng(),wl(211,"td")(212,"code"),Ux(213,"var(--color-neutral-dark-90)"),ng()()(),wl(214,"tr")(215,"td")(216,"code"),Ux(217,"--field-container-title-justify"),ng()(),wl(218,"td"),Ux(219,"Alinhamento horizontal do t\xEDtulo ("),wl(220,"code"),Ux(221,"justify-content"),ng(),Ux(222,")"),ng(),wl(223,"td")(224,"code"),Ux(225,"space-between"),ng()()(),wl(226,"tr")(227,"td")(228,"code"),Ux(229,"--field-container-title-flex"),ng()(),wl(230,"td"),Ux(231,"Flex do t\xEDtulo ("),wl(232,"code"),Ux(233,"flex"),ng(),Ux(234,")"),ng(),wl(235,"td")(236,"code"),Ux(237,"1 auto"),ng()()(),wl(238,"tr")(239,"td")(240,"strong"),Ux(241,"Hover"),ng()(),Ul(242,"td")(243,"td"),ng(),wl(244,"tr")(245,"td")(246,"code"),Ux(247,"--color-hover"),ng()(),wl(248,"td"),Ux(249,"Cor principal no estado hover"),ng(),wl(250,"td")(251,"code"),Ux(252,"var(--color-brand-01-dark)"),ng()()(),wl(253,"tr")(254,"td")(255,"code"),Ux(256,"--background-hover"),ng()(),wl(257,"td"),Ux(258,"Cor de background no estado hover"),ng(),wl(259,"td")(260,"code"),Ux(261,"var(--color-brand-01-lightest)"),ng()()(),wl(262,"tr")(263,"td")(264,"strong"),Ux(265,"Focused"),ng()(),Ul(266,"td")(267,"td"),ng(),wl(268,"tr")(269,"td")(270,"code"),Ux(271,"--color-focused"),ng()(),wl(272,"td"),Ux(273,"Cor principal no estado de focus"),ng(),wl(274,"td")(275,"code"),Ux(276,"var(--color-action-default)"),ng()()(),wl(277,"tr")(278,"td")(279,"code"),Ux(280,"--outline-color-focused"),ng()(),wl(281,"td"),Ux(282,"Cor do outline do estado de focus"),ng(),wl(283,"td")(284,"code"),Ux(285,"var(--color-action-focus)"),ng()()(),wl(286,"tr")(287,"td")(288,"strong"),Ux(289,"Disabled"),ng()(),Ul(290,"td")(291,"td"),ng(),wl(292,"tr")(293,"td")(294,"code"),Ux(295,"--color-disabled"),ng()(),wl(296,"td"),Ux(297,"Cor principal no estado disabled"),ng(),wl(298,"td")(299,"code"),Ux(300,"var(--color-neutral-light-30)"),ng()()(),wl(301,"tr")(302,"td")(303,"code"),Ux(304,"--background-disabled"),ng()(),wl(305,"td"),Ux(306,"Cor de background no estado disabled \xA0"),ng(),wl(307,"td")(308,"code"),Ux(309,"var(--color-neutral-light-20)"),ng()()(),wl(310,"tr")(311,"td")(312,"code"),Ux(313,"--text-color-disabled"),ng()(),wl(314,"td"),Ux(315,"Cor do texto no estado disabled"),ng(),wl(316,"td")(317,"code"),Ux(318,"var(--color-neutral-dark-70)"),ng()()()()()(),wl(319,"div",9)(320,"h4",10),Ux(321,"Seletor"),ng(),wl(322,"pre",11),Ux(323,`<po-datepicker
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
`),ng()(),wl(324,"h4",12),Ux(325,"Propriedades"),ng(),wl(326,"table",13)(327,"tr",14)(328,"th",15),Ux(329,"Nome"),ng(),wl(330,"th",15),Ux(331,"Tipo"),ng(),wl(332,"th",15),Ux(333,"Padr\xE3o"),ng(),wl(334,"th",15),Ux(335,"Descri\xE7\xE3o"),ng()(),wl(336,"tr",16)(337,"td",17)(338,"div",18)(339,"span",19),Ux(340,"p-locale"),Ul(341,"br"),ng()()(),wl(342,"td",20)(343,"code",21),Ux(344,"string"),ng()(),wl(345,"td",22),Ux(346,"-"),ng(),wl(347,"td",23)(348,"em")(349,"strong"),Ux(350,"(opcional)"),ng()(),wl(351,"p"),Ux(352,"Idioma do Datepicker."),ng(),wl(353,"blockquote")(354,"p"),Ux(355,"O locale padr\xE3o sera recuperado com base no "),wl(356,"a",24)(357,"code"),Ux(358,"PoI18nService"),ng()(),Ux(359," ou "),wl(360,"em"),Ux(361,"browser"),ng(),Ux(362,"."),ng()()()(),wl(363,"tr",16)(364,"td",17)(365,"div",25)(366,"span",26),Ux(367," (p-additional-help)"),Ul(368,"br"),ng()(),wl(369,"div",27),Ux(370,"Deprecated"),ng()(),wl(371,"td",20)(372,"code",28),Ux(373,"EventEmitter"),ng()(),wl(374,"td",22),Ux(375,"-"),ng(),wl(376,"td",23)(377,"em")(378,"strong"),Ux(379,"(opcional)"),ng()(),wl(380,"p"),Ux(381,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),ng(),wl(382,"blockquote")(383,"p"),Ux(384,"Essa propriedade est\xE1 "),wl(385,"strong"),Ux(386,"depreciada"),ng(),Ux(387," e ser\xE1 removida na vers\xE3o "),wl(388,"code"),Ux(389,"23.x.x"),ng(),Ux(390,". Recomendamos utilizar a propriedade "),wl(391,"code"),Ux(392,"p-helper"),ng(),Ux(393," que oferece mais recursos e flexibilidade."),ng()()()(),wl(394,"tr",16)(395,"td",17)(396,"div",18)(397,"span",19),Ux(398," p-additional-help-tooltip"),Ul(399,"br"),ng()(),wl(400,"div",27),Ux(401,"Deprecated"),ng()(),wl(402,"td",20)(403,"code",21),Ux(404,"string"),ng()(),wl(405,"td",22),Ux(406,"-"),ng(),wl(407,"td",23)(408,"em")(409,"strong"),Ux(410,"(opcional)"),ng()(),wl(411,"p"),Ux(412,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),wl(413,"code"),Ux(414,"po-helper"),ng(),Ux(415,`.
`),wl(416,"strong"),Ux(417,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),ng()(),wl(418,"blockquote")(419,"p"),Ux(420,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),ng()(),wl(421,"blockquote")(422,"p"),Ux(423,"Essa propriedade est\xE1 "),wl(424,"strong"),Ux(425,"depreciada"),ng(),Ux(426," e ser\xE1 removida na vers\xE3o "),wl(427,"code"),Ux(428,"23.x.x"),ng(),Ux(429,". Recomendamos utilizar a propriedade "),wl(430,"code"),Ux(431,"p-helper"),ng(),Ux(432," que oferece mais recursos e flexibilidade."),ng()()()(),wl(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),Ux(437," p-append-in-body"),Ul(438,"br"),ng()()(),wl(439,"td",20)(440,"code",29),Ux(441,"boolean"),ng()(),wl(442,"td",22)(443,"p")(444,"code"),Ux(445,"false"),ng()()(),wl(446,"td",23)(447,"em")(448,"strong"),Ux(449,"(opcional)"),ng()(),wl(450,"p"),Ux(451,"Define que o "),wl(452,"code"),Ux(453,"calendar"),ng(),Ux(454," e/ou tooltip ("),wl(455,"code"),Ux(456,"p-additional-help-tooltip"),ng(),Ux(457," e/ou "),wl(458,"code"),Ux(459,"p-error-limit"),ng(),Ux(460,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ng(),wl(461,"blockquote")(462,"p"),Ux(463,"Quando utilizado com "),wl(464,"code"),Ux(465,"p-helper"),ng(),Ux(466,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),ng()()()(),wl(467,"tr",16)(468,"td",17)(469,"div",18)(470,"span",19),Ux(471," p-auto-focus"),Ul(472,"br"),ng()()(),wl(473,"td",20)(474,"code",29),Ux(475,"boolean"),ng()(),wl(476,"td",22)(477,"p")(478,"code"),Ux(479,"false"),ng()()(),wl(480,"td",23)(481,"em")(482,"strong"),Ux(483,"(opcional)"),ng()(),wl(484,"p"),Ux(485,"Aplica foco no elemento ao ser iniciado."),ng(),wl(486,"blockquote")(487,"p"),Ux(488,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),ng()()()(),wl(489,"tr",16)(490,"td",17)(491,"div",18)(492,"span",19),Ux(493,"p-clean"),Ul(494,"br"),ng()()(),wl(495,"td",20)(496,"code",29),Ux(497,"boolean"),ng()(),wl(498,"td",22),Ux(499,"-"),ng(),wl(500,"td",23)(501,"em")(502,"strong"),Ux(503,"(opcional)"),ng()(),wl(504,"p"),Ux(505,"Habilita a\xE7\xE3o para limpar o campo."),ng()()(),wl(506,"tr",16)(507,"td",17)(508,"div",18)(509,"span",19),Ux(510," p-compact-label"),Ul(511,"br"),ng()()(),wl(512,"td",20)(513,"code",29),Ux(514,"boolean"),ng()(),wl(515,"td",22)(516,"p")(517,"code"),Ux(518,"false"),ng()()(),wl(519,"td",23)(520,"em")(521,"strong"),Ux(522,"(opcional)"),ng()(),wl(523,"p"),Ux(524,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng(),wl(525,"p"),Ux(526,"Quando habilitado ("),wl(527,"code"),Ux(528,"true"),ng(),Ux(529,"), o modo compacto afeta o conjunto composto por:"),ng(),wl(530,"ul")(531,"li")(532,"code"),Ux(533,"po-label"),ng()(),wl(534,"li")(535,"code"),Ux(536,"p-requirement (showRequired)"),ng()(),wl(537,"li")(538,"code"),Ux(539,"po-helper"),ng()()(),wl(540,"p"),Ux(541,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ng(),wl(542,"p"),Ux(543,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ng(),wl(544,"ul")(545,"li")(546,"code"),Ux(547,"--field-container-title-justify"),ng()(),wl(548,"li")(549,"code"),Ux(550,"--field-container-title-flex"),ng()()(),wl(551,"p"),Ux(552,"Exemplo:"),ng(),wl(553,"pre")(554,"code"),Ux(555,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ng()(),wl(556,"p"),Ux(557,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ng()()(),wl(558,"tr",16)(559,"td",17)(560,"div",18)(561,"span",19),Ux(562,"p-disabled"),Ul(563,"br"),ng()()(),wl(564,"td",20)(565,"code",29),Ux(566,"boolean"),ng()(),wl(567,"td",22),Ux(568,"-"),ng(),wl(569,"td",23)(570,"em")(571,"strong"),Ux(572,"(opcional)"),ng()(),wl(573,"p"),Ux(574,"Desabilita o campo."),ng()()(),wl(575,"tr",16)(576,"td",17)(577,"div",18)(578,"span",19),Ux(579," p-error-async"),Ul(580,"br"),ng()()(),wl(581,"td",20)(582,"code",30),Ux(583,"(value) => Observable<boolean>"),ng()(),wl(584,"td",22),Ux(585,"-"),ng(),wl(586,"td",23)(587,"em")(588,"strong"),Ux(589,"(opcional)"),ng()(),wl(590,"p"),Ux(591,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),wl(592,"code"),Ux(593,"change"),ng(),Ux(594,"."),ng()()(),wl(595,"tr",16)(596,"td",17)(597,"div",18)(598,"span",19),Ux(599," p-error-limit"),Ul(600,"br"),ng()()(),wl(601,"td",20)(602,"code",29),Ux(603,"boolean"),ng()(),wl(604,"td",22)(605,"p")(606,"code"),Ux(607,"false"),ng()()(),wl(608,"td",23)(609,"em")(610,"strong"),Ux(611,"(opcional)"),ng()(),wl(612,"p"),Ux(613,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng(),wl(614,"blockquote")(615,"p"),Ux(616,"Caso essa propriedade seja definida como "),wl(617,"code"),Ux(618,"true"),ng(),Ux(619,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ng()()()(),wl(620,"tr",16)(621,"td",17)(622,"div",18)(623,"span",19),Ux(624," p-error-pattern"),Ul(625,"br"),ng()()(),wl(626,"td",20)(627,"code",21),Ux(628,"string"),ng()(),wl(629,"td",22),Ux(630,"-"),ng(),wl(631,"td",23)(632,"em")(633,"strong"),Ux(634,"(opcional)"),ng()(),wl(635,"p"),Ux(636,"Mensagem apresentada quando a data for inv\xE1lida ou fora do per\xEDodo."),ng(),wl(637,"blockquote")(638,"p"),Ux(639,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),wl(640,"code"),Ux(641,"p-required-field-error-message"),ng(),Ux(642," em conjunto."),ng()()()(),wl(643,"tr",16)(644,"td",17)(645,"div",18)(646,"span",19),Ux(647," p-format"),Ul(648,"br"),ng()()(),wl(649,"td",20)(650,"code",21),Ux(651,"string"),ng()(),wl(652,"td",22)(653,"p")(654,"code"),Ux(655,"dd/mm/yyyy"),ng()()(),wl(656,"td",23)(657,"em")(658,"strong"),Ux(659,"(opcional)"),ng()(),wl(660,"p"),Ux(661,"Formato de exibi\xE7\xE3o da data."),ng(),wl(662,"p"),Ux(663,"Valores v\xE1lidos:"),ng(),wl(664,"ul")(665,"li")(666,"code"),Ux(667,"dd/mm/yyyy"),ng()(),wl(668,"li")(669,"code"),Ux(670,"mm/dd/yyyy"),ng()(),wl(671,"li")(672,"code"),Ux(673,"yyyy/mm/dd"),ng()()(),wl(674,"p"),Ux(675,"Propriedade incompat\xEDvel com as varia\xE7\xF5es month-year e year."),ng()()(),wl(676,"tr",16)(677,"td",17)(678,"div",18)(679,"span",19),Ux(680," p-help"),Ul(681,"br"),ng()()(),wl(682,"td",20)(683,"code",21),Ux(684,"string"),ng()(),wl(685,"td",22),Ux(686,"-"),ng(),wl(687,"td",23)(688,"em")(689,"strong"),Ux(690,"(opcional)"),ng()(),wl(691,"p"),Ux(692,"Texto de apoio do campo."),ng()()(),wl(693,"tr",16)(694,"td",17)(695,"div",18)(696,"span",19),Ux(697," p-iso-format"),Ul(698,"br"),ng()()(),wl(699,"td",20)(700,"code",31),Ux(701,"PoDatepickerIsoFormat"),ng()(),wl(702,"td",22),Ux(703,"-"),ng(),wl(704,"td",23)(705,"em")(706,"strong"),Ux(707,"(opcional)"),ng()(),wl(708,"p"),Ux(709,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),wl(710,"em"),Ux(711,"model"),ng(),Ux(712,", independentemente do formato de entrada."),ng(),wl(713,"blockquote")(714,"p"),Ux(715,"Veja os valores v\xE1lidos no "),wl(716,"em"),Ux(717,"enum"),ng(),wl(718,"code"),Ux(719,"PoDatepickerIsoFormat"),ng(),Ux(720,"."),ng()(),wl(721,"p"),Ux(722,"Propriedade incompat\xEDvel com as varia\xE7\xF5es month-year e year."),ng()()(),wl(723,"tr",16)(724,"td",17)(725,"div",25)(726,"span",26),Ux(727," (p-keydown)"),Ul(728,"br"),ng()()(),wl(729,"td",20)(730,"code",28),Ux(731,"EventEmitter"),ng()(),wl(732,"td",22),Ux(733,"-"),ng(),wl(734,"td",23)(735,"em")(736,"strong"),Ux(737,"(opcional)"),ng()(),wl(738,"p"),Ux(739,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),wl(740,"code"),Ux(741,"KeyboardEvent"),ng(),Ux(742," com informa\xE7\xF5es sobre a tecla."),ng()()(),wl(743,"tr",16)(744,"td",17)(745,"div",18)(746,"span",19),Ux(747," p-label"),Ul(748,"br"),ng()()(),wl(749,"td",20)(750,"code",21),Ux(751,"string"),ng()(),wl(752,"td",22),Ux(753,"-"),ng(),wl(754,"td",23)(755,"em")(756,"strong"),Ux(757,"(opcional)"),ng()(),wl(758,"p"),Ux(759,"R\xF3tulo do campo."),ng()()(),wl(760,"tr",16)(761,"td",17)(762,"div",18)(763,"span",19),Ux(764," p-label-text-wrap"),Ul(765,"br"),ng()()(),wl(766,"td",20)(767,"code",29),Ux(768,"boolean"),ng()(),wl(769,"td",22)(770,"p")(771,"code"),Ux(772,"false"),ng()()(),wl(773,"td",23)(774,"em")(775,"strong"),Ux(776,"(opcional)"),ng()(),wl(777,"p"),Ux(778,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(779,"code"),Ux(780,"p-label"),ng(),Ux(781,". Quando "),wl(782,"code"),Ux(783,"p-label-text-wrap"),ng(),Ux(784,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ng()()(),wl(785,"tr",16)(786,"td",17)(787,"div",18)(788,"span",19),Ux(789," p-loading"),Ul(790,"br"),ng()()(),wl(791,"td",20)(792,"code",29),Ux(793,"boolean"),ng()(),wl(794,"td",22)(795,"p")(796,"code"),Ux(797,"false"),ng()()(),wl(798,"td",23)(799,"em")(800,"strong"),Ux(801,"(opcional)"),ng()(),wl(802,"p"),Ux(803,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng()()(),wl(804,"tr",16)(805,"td",17)(806,"div",18)(807,"span",19),Ux(808," p-max-date"),Ul(809,"br"),ng()()(),wl(810,"td",20)(811,"code",21),Ux(812,"string "),ng(),wl(813,"code",32),Ux(814," Date"),ng()(),wl(815,"td",22),Ux(816,"-"),ng(),wl(817,"td",23)(818,"em")(819,"strong"),Ux(820,"(opcional)"),ng()(),wl(821,"p"),Ux(822,"Define uma data m\xE1xima para o "),wl(823,"code"),Ux(824,"po-datepicker"),ng(),Ux(825,"."),ng()()(),wl(826,"tr",16)(827,"td",17)(828,"div",18)(829,"span",19),Ux(830," p-min-date"),Ul(831,"br"),ng()()(),wl(832,"td",20)(833,"code",21),Ux(834,"string "),ng(),wl(835,"code",32),Ux(836," Date"),ng()(),wl(837,"td",22),Ux(838,"-"),ng(),wl(839,"td",23)(840,"em")(841,"strong"),Ux(842,"(opcional)"),ng()(),wl(843,"p"),Ux(844,"Define uma data m\xEDnima para o "),wl(845,"code"),Ux(846,"po-datepicker"),ng(),Ux(847,"."),ng()()(),wl(848,"tr",16)(849,"td",17)(850,"div",18)(851,"span",19),Ux(852," p-mode"),Ul(853,"br"),ng()()(),wl(854,"td",20)(855,"code",33),Ux(856,"'month-year' "),ng(),wl(857,"code",34),Ux(858," 'year'"),ng()(),wl(859,"td",22),Ux(860,"-"),ng(),wl(861,"td",23)(862,"em")(863,"strong"),Ux(864,"(opcional)"),ng()(),wl(865,"p"),Ux(866,"Define o modo de opera\xE7\xE3o do datepicker."),ng(),wl(867,"p"),Ux(868,"Permite configurar o componente para sele\xE7\xE3o de:"),ng(),wl(869,"ul")(870,"li"),Ux(871,"M\xEAs e ano ("),wl(872,"code"),Ux(873,"month-year"),ng(),Ux(874,");"),ng(),wl(875,"li"),Ux(876,"Apenas ano ("),wl(877,"code"),Ux(878,"year"),ng(),Ux(879,")."),ng()()()(),wl(880,"tr",16)(881,"td",17)(882,"div",18)(883,"span",19),Ux(884," p-no-autocomplete"),Ul(885,"br"),ng()()(),wl(886,"td",20)(887,"code",29),Ux(888,"boolean"),ng()(),wl(889,"td",22)(890,"p")(891,"code"),Ux(892,"false"),ng()()(),wl(893,"td",23)(894,"em")(895,"strong"),Ux(896,"(opcional)"),ng()(),wl(897,"p"),Ux(898,"Define a propriedade nativa "),wl(899,"code"),Ux(900,"autocomplete"),ng(),Ux(901," do campo como "),wl(902,"code"),Ux(903,"off"),ng(),Ux(904,"."),ng()()(),wl(905,"tr",16)(906,"td",17)(907,"div",25)(908,"span",26),Ux(909," (p-blur)"),Ul(910,"br"),ng()()(),wl(911,"td",20)(912,"code",28),Ux(913,"EventEmitter"),ng()(),wl(914,"td",22),Ux(915,"-"),ng(),wl(916,"td",23)(917,"em")(918,"strong"),Ux(919,"(opcional)"),ng()(),wl(920,"p"),Ux(921,"Evento disparado ao sair do campo."),ng()()(),wl(922,"tr",16)(923,"td",17)(924,"div",25)(925,"span",26),Ux(926," (p-change)"),Ul(927,"br"),ng()()(),wl(928,"td",20)(929,"code",28),Ux(930,"EventEmitter"),ng()(),wl(931,"td",22),Ux(932,"-"),ng(),wl(933,"td",23)(934,"em")(935,"strong"),Ux(936,"(opcional)"),ng()(),wl(937,"p"),Ux(938,"Evento disparado ao alterar valor do campo."),ng()()(),wl(939,"tr",16)(940,"td",17)(941,"div",18)(942,"span",19),Ux(943," p-optional"),Ul(944,"br"),ng()()(),wl(945,"td",20)(946,"code",29),Ux(947,"boolean"),ng()(),wl(948,"td",22)(949,"p")(950,"code"),Ux(951,"false"),ng()()(),wl(952,"td",23)(953,"em")(954,"strong"),Ux(955,"(opcional)"),ng()(),wl(956,"p"),Ux(957,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng(),wl(958,"blockquote")(959,"p"),Ux(960,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(961,"ul")(962,"li"),Ux(963,"O campo conter "),wl(964,"code"),Ux(965,"p-required"),ng(),Ux(966,";"),ng(),wl(967,"li"),Ux(968,"N\xE3o possuir "),wl(969,"code"),Ux(970,"p-help"),ng(),Ux(971," e/ou "),wl(972,"code"),Ux(973,"p-label"),ng(),Ux(974,"."),ng()()()(),wl(975,"tr",16)(976,"td",17)(977,"div",18)(978,"span",19),Ux(979," p-placeholder"),Ul(980,"br"),ng()()(),wl(981,"td",20)(982,"code",21),Ux(983,"string"),ng()(),wl(984,"td",22),Ux(985,"-"),ng(),wl(986,"td",23)(987,"em")(988,"strong"),Ux(989,"(opcional)"),ng()(),wl(990,"p"),Ux(991,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),ng()()(),wl(992,"tr",16)(993,"td",17)(994,"div",18)(995,"span",19),Ux(996," p-helper"),Ul(997,"br"),ng()()(),wl(998,"td",20)(999,"code",35),Ux(1e3,"PoHelperOptions "),ng(),wl(1001,"code",21),Ux(1002," string"),ng()(),wl(1003,"td",22),Ux(1004,"-"),ng(),wl(1005,"td",23)(1006,"em")(1007,"strong"),Ux(1008,"(opcional)"),ng()(),wl(1009,"p"),Ux(1010,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),wl(1011,"code"),Ux(1012,"p-label"),ng(),Ux(1013," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),wl(1014,"code"),Ux(1015,"p-label"),ng(),Ux(1016,"."),ng(),wl(1017,"blockquote")(1018,"p"),Ux(1019,"Para mais informa\xE7\xF5es acesse: "),wl(1020,"a",36),Ux(1021,"https://po-ui.io/documentation/po-helper"),ng(),Ux(1022,"."),ng()(),wl(1023,"blockquote")(1024,"p"),Ux(1025,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),wl(1026,"code"),Ux(1027,"p-additional-help-tooltip"),ng(),Ux(1028," e "),wl(1029,"code"),Ux(1030,"p-additional-help"),ng(),Ux(1031,") ser\xE1 ignorado."),ng()()()(),wl(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),Ux(1036,"p-readonly"),Ul(1037,"br"),ng()()(),wl(1038,"td",20)(1039,"code",29),Ux(1040,"boolean"),ng()(),wl(1041,"td",22),Ux(1042,"-"),ng(),wl(1043,"td",23)(1044,"em")(1045,"strong"),Ux(1046,"(opcional)"),ng()(),wl(1047,"p"),Ux(1048,"Torna o elemento somente leitura."),ng()()(),wl(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),Ux(1053,"p-required"),Ul(1054,"br"),ng()()(),wl(1055,"td",20)(1056,"code",29),Ux(1057,"boolean"),ng()(),wl(1058,"td",22)(1059,"p")(1060,"code"),Ux(1061,"false"),ng()()(),wl(1062,"td",23)(1063,"em")(1064,"strong"),Ux(1065,"(opcional)"),ng()(),wl(1066,"p"),Ux(1067,"Define que o campo ser\xE1 obrigat\xF3rio."),ng()()(),wl(1068,"tr",16)(1069,"td",17)(1070,"div",18)(1071,"span",19),Ux(1072," p-required-field-error-message"),Ul(1073,"br"),ng()()(),wl(1074,"td",20)(1075,"code",29),Ux(1076,"boolean"),ng()(),wl(1077,"td",22)(1078,"p")(1079,"code"),Ux(1080,"false"),ng()()(),wl(1081,"td",23)(1082,"em")(1083,"strong"),Ux(1084,"(opcional)"),ng()(),wl(1085,"p"),Ux(1086,"Exibe a mensagem setada na propriedade "),wl(1087,"code"),Ux(1088,"p-error-pattern"),ng(),Ux(1089," se o campo estiver vazio e for requerido."),ng(),wl(1090,"blockquote")(1091,"p"),Ux(1092,"Necess\xE1rio que a propriedade "),wl(1093,"code"),Ux(1094,"p-required"),ng(),Ux(1095," esteja habilitada."),ng()()()(),wl(1096,"tr",16)(1097,"td",17)(1098,"div",18)(1099,"span",19),Ux(1100," p-show-required"),Ul(1101,"br"),ng()()(),wl(1102,"td",20)(1103,"code",29),Ux(1104,"boolean"),ng()(),wl(1105,"td",22),Ux(1106,"-"),ng(),wl(1107,"td",23)(1108,"p"),Ux(1109,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng(),wl(1110,"blockquote")(1111,"p"),Ux(1112,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),ng()(),wl(1113,"ul")(1114,"li"),Ux(1115,"N\xE3o possuir "),wl(1116,"code"),Ux(1117,"p-help"),ng(),Ux(1118," e/ou "),wl(1119,"code"),Ux(1120,"p-label"),ng(),Ux(1121,"."),ng()()()(),wl(1122,"tr",16)(1123,"td",17)(1124,"div",18)(1125,"span",19),Ux(1126," p-size"),Ul(1127,"br"),ng()()(),wl(1128,"td",20)(1129,"code",21),Ux(1130,"string"),ng()(),wl(1131,"td",22)(1132,"p")(1133,"code"),Ux(1134,"medium"),ng()()(),wl(1135,"td",23)(1136,"em")(1137,"strong"),Ux(1138,"(opcional)"),ng()(),wl(1139,"p"),Ux(1140,"Define o tamanho do componente:"),ng(),wl(1141,"ul")(1142,"li")(1143,"code"),Ux(1144,"small"),ng(),Ux(1145,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(1146,"li")(1147,"code"),Ux(1148,"medium"),ng(),Ux(1149,": altura do input como 44px."),ng()(),wl(1150,"blockquote")(1151,"p"),Ux(1152,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),wl(1153,"code"),Ux(1154,"medium"),ng(),Ux(1155,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),wl(1156,"a",37),Ux(1157,"po-theme"),ng(),Ux(1158,"."),ng()()()(),wl(1159,"tr",16)(1160,"td",17)(1161,"div",18)(1162,"span",19),Ux(1163," p-year-range-limit"),Ul(1164,"br"),ng()()(),wl(1165,"td",20)(1166,"code",38),Ux(1167,"number"),ng()(),wl(1168,"td",22)(1169,"p"),Ux(1170,"150"),ng()(),wl(1171,"td",23)(1172,"em")(1173,"strong"),Ux(1174,"(opcional)"),ng()(),wl(1175,"p"),Ux(1176,"Define o limite de anos exibidos nas varia\xE7\xF5es "),wl(1177,"code"),Ux(1178,"month-year"),ng(),Ux(1179," e "),wl(1180,"code"),Ux(1181,"year"),ng(),Ux(1182,`,
considerando a data atual como refer\xEAncia.`),ng(),wl(1183,"p"),Ux(1184,`O valor informado determina o intervalo de anos anterior e posterior
\xE0 data corrente que ser\xE1 disponibilizado para sele\xE7\xE3o.`),ng()()()(),wl(1185,"h3",12),Ux(1186,"M\xE9todos"),ng(),wl(1187,"table",39)(1188,"tr",16)(1189,"th",40)(1190,"div",18)(1191,"h4")(1192,"span",19),Ux(1193," focus "),ng()()()()(),wl(1194,"tr",23)(1195,"td",23)(1196,"p"),Ux(1197,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(1198,"p"),Ux(1199,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(1200,"pre")(1201,"code"),Ux(1202,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),ng()()()()(),Ul(1203,"br"),wl(1204,"table",39)(1205,"tr",16)(1206,"th",40)(1207,"div",18)(1208,"h4")(1209,"span",19),Ux(1210," showAdditionalHelp "),ng()()()()(),wl(1211,"tr",23)(1212,"td",23)(1213,"p"),Ux(1214,"M\xE9todo que exibe "),wl(1215,"code"),Ux(1216,"p-helper"),ng(),Ux(1217," ou executa a a\xE7\xE3o definida em "),wl(1218,"code"),Ux(1219,"p-helper{eventOnClick}"),ng(),Ux(1220," ou em "),wl(1221,"code"),Ux(1222,"p-additionalHelp"),ng(),Ux(1223,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(1224,"code"),Ux(1225,"p-keydown"),ng(),Ux(1226,"."),ng(),wl(1227,"blockquote")(1228,"p"),Ux(1229,"Exibe ou oculta o conte\xFAdo do componente "),wl(1230,"code"),Ux(1231,"po-helper"),ng(),Ux(1232," quando o componente estiver com foco."),ng()(),wl(1233,"pre")(1234,"code"),Ux(1235,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),ng()(),wl(1236,"pre")(1237,"code"),Ux(1238,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(1239,"br"),wl(1240,"h3"),Ux(1241,"Enums"),ng(),wl(1242,"h4",4)(1243,"code",5),Ux(1244,"PoDatepickerIsoFormat"),ng()(),wl(1245,"div",2)(1246,"p")(1247,"em"),Ux(1248,"Enum"),ng(),Ux(1249," que define o padr\xE3o de formata\xE7\xE3o das datas."),ng(),wl(1250,"blockquote")(1251,"p"),Ux(1252,"Caso um formato padr\xE3o seja definido, o mesmo n\xE3o ser\xE1 mais alterado de acordo com o formato de entrada."),ng()()(),wl(1253,"h4",12),Ux(1254,"Propriedades"),ng(),wl(1255,"table",13)(1256,"tr",14)(1257,"th",15),Ux(1258,"Nome"),ng(),wl(1259,"th",15),Ux(1260,"Descri\xE7\xE3o"),ng()(),wl(1261,"tr",16)(1262,"td",17)(1263,"div",18)(1264,"span",19),Ux(1265," Basic"),Ul(1266,"br"),ng()()(),wl(1267,"td",23)(1268,"p"),Ux(1269,"Padr\xE3o "),wl(1270,"strong"),Ux(1271,"E8601DAw"),ng(),Ux(1272," ("),wl(1273,"em"),Ux(1274,"yyyy-mm-dd"),ng(),Ux(1275,")."),ng()()(),wl(1276,"tr",16)(1277,"td",17)(1278,"div",18)(1279,"span",19),Ux(1280," Extended"),Ul(1281,"br"),ng()()(),wl(1282,"td",23)(1283,"p"),Ux(1284,"Padr\xE3o "),wl(1285,"strong"),Ux(1286,"E8601DZw"),ng(),Ux(1287," ("),wl(1288,"em"),Ux(1289,"yyyy-mm-ddThh:mm:ss+|-hh:mm"),ng(),Ux(1290,")."),ng()()()()());},dependencies:[fP],encapsulation:2})}return a})();var Ae=(()=>{class a{route;router;sub;hidePoWebSample=true;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||a)(C(Xn),C(Cn))};static \u0275cmp=Un({type:a,selectors:[["ng-component"]],standalone:false,decls:11,vars:4,consts:[["p-title","Datepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-datepicker-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-datepicker-basic-view")(6,"sample-po-datepicker-labs-view")(7,"sample-po-datepicker-year-view")(8,"sample-po-datepicker-month-year-view")(9,"sample-po-datepicker-airfare-view")(10,"sample-po-datepicker-airfare-reactive-form-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,be,Ce,De,Pe,Me,Fe,qe],encapsulation:2})}return a})();var ot=[{path:"",component:Ae}],Be=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[vL.forChild(ot),vL]})}return a})();var en=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=fe$1({type:a});static \u0275inj=ue({imports:[u5,Be]})}return a})();export{en as DocPoDatepickerModule};