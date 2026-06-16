import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,d as f,by as vle,aE as Bp,cp as on,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,b9 as Ro,aO as Yo,bT as ha,bB as ga,cq as xa,bC as Vp,al as lx,am as pw,an as $0,ap as hw,aq as G0,ai as ya,aX as _x,as as $l,at as uo,au as fo,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ue=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","datetimepicker","p-label","PO Datetimepicker"]],template:function(r,i){r&1&&Ul(0,"po-datetimepicker",0);},dependencies:[on],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l}),ge=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Datetimepicker Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-datetimepicker-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,we,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ue],encapsulation:2})}return l})();var Ee=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];formatDateOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];formatTimeOptions=[{label:"24h",value:"24"},{label:"12h (AM/PM)",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText="",this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-labs"]],standalone:false,decls:26,vars:54,consts:[["f","ngForm"],["name","datetimepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-compact-label","p-disabled","p-error-limit","p-error-pattern","p-format-date","p-format-time","p-help","p-helper","p-label","p-label-text-wrap","p-loading","p-locale","p-max-date","p-max-time","p-min-date","p-min-time","p-minute-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-second-interval","p-show-required","p-show-seconds","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min Date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max Date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatDate","p-columns","4","p-label","Format Date",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatTime","p-columns","4","p-label","Format Time",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=lx();wl(0,"po-datetimepicker",1),pw("ngModelChange",function(o){return Qy(d),$x(i.datetimepicker,o)||(i.datetimepicker=o),Jy(o)}),ut("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3)(4,"po-info",4),ng(),Ul(5,"po-divider"),wl(6,"form",null,0)(8,"po-input",5),pw("ngModelChange",function(o){return Qy(d),$x(i.label,o)||(i.label=o),Jy(o)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(o){return Qy(d),$x(i.help,o)||(i.help=o),Jy(o)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(o){return Qy(d),$x(i.helperText,o)||(i.helperText=o),Jy(o)}),ng(),$0(),wl(11,"po-input",8),pw("ngModelChange",function(o){return Qy(d),$x(i.placeholder,o)||(i.placeholder=o),Jy(o)}),ng(),$0(),wl(12,"po-input",9),pw("ngModelChange",function(o){return Qy(d),$x(i.errorPattern,o)||(i.errorPattern=o),Jy(o)}),ng(),$0(),wl(13,"po-number",10),pw("ngModelChange",function(o){return Qy(d),$x(i.minuteInterval,o)||(i.minuteInterval=o),Jy(o)}),ng(),$0(),wl(14,"po-number",11),pw("ngModelChange",function(o){return Qy(d),$x(i.secondInterval,o)||(i.secondInterval=o),Jy(o)}),ng(),$0(),wl(15,"po-timepicker",12),pw("ngModelChange",function(o){return Qy(d),$x(i.minTime,o)||(i.minTime=o),Jy(o)}),ng(),$0(),wl(16,"po-timepicker",13),pw("ngModelChange",function(o){return Qy(d),$x(i.maxTime,o)||(i.maxTime=o),Jy(o)}),ng(),$0(),wl(17,"po-datepicker",14),pw("ngModelChange",function(o){return Qy(d),$x(i.minDate,o)||(i.minDate=o),Jy(o)}),ng(),$0(),wl(18,"po-datepicker",15),pw("ngModelChange",function(o){return Qy(d),$x(i.maxDate,o)||(i.maxDate=o),Jy(o)}),ng(),$0(),wl(19,"po-checkbox-group",16),pw("ngModelChange",function(o){return Qy(d),$x(i.properties,o)||(i.properties=o),Jy(o)}),ng(),$0(),wl(20,"po-radio-group",17),pw("ngModelChange",function(o){return Qy(d),$x(i.locale,o)||(i.locale=o),Jy(o)}),ng(),$0(),wl(21,"po-radio-group",18),pw("ngModelChange",function(o){return Qy(d),$x(i.formatDate,o)||(i.formatDate=o),Jy(o)}),ng(),$0(),wl(22,"po-radio-group",19),pw("ngModelChange",function(o){return Qy(d),$x(i.formatTime,o)||(i.formatTime=o),Jy(o)}),ng(),$0(),wl(23,"po-radio-group",20),pw("ngModelChange",function(o){return Qy(d),$x(i.size,o)||(i.size=o),Jy(o)}),ng(),$0(),wl(24,"div",2)(25,"po-button",21),ut("p-click",function(){return i.restore()}),ng()()();}r&2&&(hw("ngModel",i.datetimepicker),YE("p-clean",i.properties.includes("clean"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-disabled",i.properties.includes("disabled"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-error-pattern",i.errorPattern)("p-format-date",i.formatDate)("p-format-time",i.formatTime)("p-help",i.help)("p-helper",i.helperText)("p-label",i.label)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-max-date",i.maxDate)("p-max-time",i.maxTime)("p-min-date",i.minDate)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-second-interval",i.secondInterval)("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-size",i.size),G0(),Pp(3),YE("p-value",i.datetimepicker),Pp(),YE("p-value",i.event),Pp(4),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.help),G0(),Pp(),hw("ngModel",i.helperText),G0(),Pp(),hw("ngModel",i.placeholder),G0(),Pp(),hw("ngModel",i.errorPattern),G0(),Pp(),hw("ngModel",i.minuteInterval),G0(),Pp(),hw("ngModel",i.secondInterval),G0(),Pp(),hw("ngModel",i.minTime),G0(),Pp(),hw("ngModel",i.maxTime),G0(),Pp(),hw("ngModel",i.minDate),YE("p-max-date",i.maxDate),G0(),Pp(),hw("ngModel",i.maxDate),YE("p-min-date",i.minDate),G0(),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.locale),YE("p-options",i.localeOptions),G0(),Pp(),hw("ngModel",i.formatDate),YE("p-options",i.formatDateOptions),G0(),Pp(),hw("ngModel",i.formatTime),YE("p-options",i.formatTimeOptions),G0(),Pp(),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Ro,on,Yo,ha,ga,xa,Vp],encapsulation:2,changeDetection:1})}return l})();var Le=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Datetimepicker Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-datetimepicker
  class="po-sm-12"
  name="datetimepicker"
  [(ngModel)]="datetimepicker"
  [p-clean]="properties.includes('clean')"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  [p-disabled]="properties.includes('disabled')"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-error-pattern]="errorPattern"
  [p-format-date]="formatDate"
  [p-format-time]="formatTime"
  [p-help]="help"
  [p-helper]="helperText"
  [p-label]="label"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-loading]="properties.includes('loading')"
  [p-locale]="locale"
  [p-max-date]="maxDate"
  [p-max-time]="maxTime"
  [p-min-date]="minDate"
  [p-min-time]="minTime"
  [p-minute-interval]="minuteInterval"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-second-interval]="secondInterval"
  [p-show-required]="properties.includes('showRequired')"
  [p-show-seconds]="properties.includes('showSeconds')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-datetimepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="datetimepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-number class="po-md-6" name="minuteInterval" [(ngModel)]="minuteInterval" p-clean p-label="Minute Interval">
  </po-number>

  <po-number class="po-md-6" name="secondInterval" [(ngModel)]="secondInterval" p-clean p-label="Second Interval">
  </po-number>

  <po-timepicker class="po-md-6" name="minTime" [(ngModel)]="minTime" p-clean p-label="Min Time"> </po-timepicker>

  <po-timepicker class="po-md-6" name="maxTime" [(ngModel)]="maxTime" p-clean p-label="Max Time"> </po-timepicker>

  <po-datepicker class="po-md-6" name="minDate" [(ngModel)]="minDate" p-clean p-label="Min Date" [p-max-date]="maxDate">
  </po-datepicker>

  <po-datepicker class="po-md-6" name="maxDate" [(ngModel)]="maxDate" p-clean p-label="Max Date" [p-min-date]="minDate">
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
    name="formatDate"
    [(ngModel)]="formatDate"
    p-columns="4"
    p-label="Format Date"
    [p-options]="formatDateOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="formatTime"
    [(ngModel)]="formatTime"
    p-columns="4"
    p-label="Format Time"
    [p-options]="formatTimeOptions"
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datetimepicker-labs',
  templateUrl: './sample-po-datetimepicker-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerLabsComponent implements OnInit {
  datetimepicker: string;
  errorPattern: string;
  event: string;
  formatDate: string;
  formatTime: string;
  help: string;
  helperText: string;
  label: string;
  locale: string;
  maxDate: string | Date;
  maxTime: string;
  minDate: string | Date;
  minTime: string;
  minuteInterval: number;
  placeholder: string;
  properties: Array<string>;
  secondInterval: number;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'showSeconds', label: 'Show Seconds' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly formatDateOptions: Array<PoRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
  ];

  public readonly formatTimeOptions: Array<PoRadioGroupOption> = [
    { label: '24h', value: '24' },
    { label: '12h (AM/PM)', value: '12' }
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
    this.datetimepicker = undefined;
    this.errorPattern = undefined;
    this.event = undefined;
    this.formatDate = undefined;
    this.formatTime = undefined;
    this.help = undefined;
    this.helperText = '';
    this.label = undefined;
    this.locale = undefined;
    this.maxDate = undefined;
    this.maxTime = undefined;
    this.minDate = undefined;
    this.minTime = undefined;
    this.minuteInterval = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.secondInterval = undefined;
    this.size = 'medium';
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-datetimepicker-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Le,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ee],encapsulation:2})}return l})();var be=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-12h-seconds"]],standalone:false,decls:1,vars:1,consts:[["name","datetimepicker12h","p-label","PO Datetimepicker - 12h with Seconds","p-show-seconds","true","p-format-time","12","p-format-date","mm/dd/yyyy",3,"ngModelChange","ngModel"]],template:function(r,i){r&1&&(wl(0,"po-datetimepicker",0),pw("ngModelChange",function(s){return $x(i.datetime,s)||(i.datetime=s),s}),ng(),$0()),r&2&&(hw("ngModel",i.datetime),G0());},dependencies:[iY,ck,on],encapsulation:2,changeDetection:1})}return l})();var We=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-12h-seconds-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Datetimepicker - 12h with Seconds"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-datetimepicker-12h-seconds"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,We,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,be],encapsulation:2})}return l})();var Ie=["formScheduling"],xe=(()=>{class l{poDialog=f(vle);poNotification=f(Bp);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:"general",label:"Cl\xEDnico Geral"},{value:"cardiology",label:"Cardiologia"},{value:"dermatology",label:"Dermatologia"},{value:"orthopedics",label:"Ortopedia"},{value:"neurology",label:"Neurologia"}];confirm(){let p=this.appointment?this.appointment.slice(0,16):"",r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:"Confirmar Agendamento",message:r,confirm:()=>{this.poNotification.success("Consulta agendada com sucesso!"),this.formScheduling.reset();},cancel:()=>{this.poNotification.warning("Agendamento cancelado.");}});}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:""}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&$l(Ie,7),r&2){let d;uo(d=fo())&&(i.formScheduling=d.first);}},standalone:false,decls:10,vars:6,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","patient","p-label","Paciente","p-placeholder","Nome do paciente","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","doctor","p-label","M\xE9dico","p-placeholder","Nome do m\xE9dico","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","specialty","p-label","Especialidade","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","appointment","p-clean","","p-label","Data e Hora da Consulta","p-min-time","08:00","p-max-time","18:00","p-minute-interval","15","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","confirmButton","p-label","Agendar Consulta",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=lx();wl(0,"form",null,0)(2,"div",1)(3,"po-input",2),pw("ngModelChange",function(o){return Qy(d),$x(i.patient,o)||(i.patient=o),Jy(o)}),ng(),$0(),wl(4,"po-input",3),pw("ngModelChange",function(o){return Qy(d),$x(i.doctor,o)||(i.doctor=o),Jy(o)}),ng(),$0(),ng(),wl(5,"div",1)(6,"po-select",4),pw("ngModelChange",function(o){return Qy(d),$x(i.specialty,o)||(i.specialty=o),Jy(o)}),ng(),$0(),wl(7,"po-datetimepicker",5),pw("ngModelChange",function(o){return Qy(d),$x(i.appointment,o)||(i.appointment=o),Jy(o)}),ng(),$0(),ng(),wl(8,"div",1)(9,"po-button",6),ut("p-click",function(){return i.confirm()}),ng()()();}if(r&2){let d=_x(1);Pp(3),hw("ngModel",i.patient),G0(),Pp(),hw("ngModel",i.doctor),G0(),Pp(2),hw("ngModel",i.specialty),YE("p-options",i.specialtyOptions),G0(),Pp(),hw("ngModel",i.appointment),G0(),Pp(2),YE("p-disabled",d.invalid);}},dependencies:[aY,iY,oY,ck,ok,Pe,on,Yo,ya],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l}),Ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-scheduling-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Datetimepicker - Scheduling"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form #formScheduling="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="patient"
      [(ngModel)]="patient"
      p-label="Paciente"
      p-placeholder="Nome do paciente"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="doctor"
      [(ngModel)]="doctor"
      p-label="M\xE9dico"
      p-placeholder="Nome do m\xE9dico"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="specialty"
      [(ngModel)]="specialty"
      p-label="Especialidade"
      p-required
      [p-options]="specialtyOptions"
    >
    </po-select>

    <po-datetimepicker
      class="po-md-6"
      name="appointment"
      [(ngModel)]="appointment"
      p-clean
      p-label="Data e Hora da Consulta"
      p-min-time="08:00"
      p-max-time="18:00"
      p-minute-interval="15"
      p-required
    >
    </po-datetimepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="confirmButton"
      p-label="Agendar Consulta"
      [p-disabled]="formScheduling.invalid"
      (p-click)="confirm()"
    >
    </po-button>
  </div>
</form>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { UntypedFormControl } from '@angular/forms';
import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datetimepicker-scheduling',
  templateUrl: './sample-po-datetimepicker-scheduling.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerSchedulingComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formScheduling', { static: true }) formScheduling: UntypedFormControl;

  appointment: string;
  doctor: string;
  patient: string;
  specialty: string;

  public readonly specialtyOptions: Array<PoSelectOption> = [
    { value: 'general', label: 'Cl\xEDnico Geral' },
    { value: 'cardiology', label: 'Cardiologia' },
    { value: 'dermatology', label: 'Dermatologia' },
    { value: 'orthopedics', label: 'Ortopedia' },
    { value: 'neurology', label: 'Neurologia' }
  ];

  confirm() {
    const dateFormatted = this.appointment ? this.appointment.slice(0, 16) : '';

    const message =
      \`Confirmar agendamento de consulta?\\n\\n\` +
      \`Paciente: \${this.patient}\\n\` +
      \`M\xE9dico: \${this.doctor}\\n\` +
      \`Especialidade: \${this.getSpecialtyLabel()}\\n\` +
      \`Data/Hora: \${dateFormatted}\`;

    this.poDialog.confirm({
      title: 'Confirmar Agendamento',
      message,
      confirm: () => {
        this.poNotification.success('Consulta agendada com sucesso!');
        this.formScheduling.reset();
      },
      cancel: () => {
        this.poNotification.warning('Agendamento cancelado.');
      }
    });
  }

  private getSpecialtyLabel(): string {
    const option = this.specialtyOptions.find(o => o.value === this.specialty);
    return option ? option.label : '';
  }
}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-datetimepicker-scheduling"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Be,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,xe],encapsulation:2})}return l})();var ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-doc"]],standalone:false,decls:1169,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoDatetimepickerComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,"O "),wl(24,"code"),Ux(25,"po-datetimepicker"),ng(),Ux(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),ng(),wl(27,"p"),Ux(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),wl(29,"code"),Ux(30,"p-format-date"),ng(),Ux(31,". O formato de hora pode ser 24h ou 12h (AM/PM), configur\xE1vel via "),wl(32,"code"),Ux(33,"p-format-time"),ng(),Ux(34,"."),ng(),wl(35,"p"),Ux(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),wl(37,"code"),Ux(38,"p-locale"),ng(),Ux(39,"."),ng(),wl(40,"p"),Ux(41,"O componente aceita os seguintes formatos de entrada:"),ng(),wl(42,"ul")(43,"li"),Ux(44,"ISO 8601 com timezone: "),wl(45,"code"),Ux(46,"'2026-05-12T14:30:00-03:00'"),ng()(),wl(47,"li"),Ux(48,"ISO 8601 UTC: "),wl(49,"code"),Ux(50,"'2026-05-12T14:30:00Z'"),ng()(),wl(51,"li"),Ux(52,"ISO 8601 sem timezone: "),wl(53,"code"),Ux(54,"'2026-05-12T14:30:00'"),ng()(),wl(55,"li"),Ux(56,"ISO 8601 apenas data: "),wl(57,"code"),Ux(58,"'2026-05-12'"),ng()(),wl(59,"li"),Ux(60,"JavaScript Date Object: "),wl(61,"code"),Ux(62,"new Date(2026, 4, 12, 14, 30)"),ng()()(),wl(63,"p"),Ux(64,"O formato de sa\xEDda do "),wl(65,"em"),Ux(66,"model"),ng(),Ux(67," \xE9 sempre ISO 8601 com timezone local: "),wl(68,"code"),Ux(69,"'yyyy-mm-ddTHH:mm+/-HH:mm'"),ng(),Ux(70,`
(ou `),wl(71,"code"),Ux(72,"'yyyy-mm-ddTHH:mm:ss+/-HH:mm'"),ng(),Ux(73," quando "),wl(74,"code"),Ux(75,"p-show-seconds"),ng(),Ux(76," est\xE1 ativo)."),ng(),wl(77,"p")(78,"strong"),Ux(79,"Importante:"),ng()(),wl(80,"ul")(81,"li"),Ux(82,"O valor emitido no model inclui o offset do timezone local do navegador."),ng(),wl(83,"li"),Ux(84,"Ao receber um valor com timezone, o componente converte automaticamente para hor\xE1rio local."),ng(),wl(85,"li"),Ux(86,"Caso a data/hora esteja inv\xE1lida, o "),wl(87,"code"),Ux(88,"model"),ng(),Ux(89," receber\xE1 a mensagem de erro localizada."),ng(),wl(90,"li"),Ux(91,"Caso o "),wl(92,"code"),Ux(93,"input"),ng(),Ux(94," esteja passando um "),wl(95,"code"),Ux(96,"[(ngModel)]"),ng(),Ux(97,", mas n\xE3o tenha um "),wl(98,"code"),Ux(99,"name"),ng(),Ux(100,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),wl(101,"code"),Ux(102,'[ngModelOptions]="{standalone: true}"'),ng(),Ux(103,")."),ng()(),wl(104,"p"),Ux(105,"Exemplo:"),ng(),wl(106,"pre")(107,"code"),Ux(108,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),ng()(),wl(109,"blockquote")(110,"p"),Ux(111,"N\xE3o esque\xE7a de importar o "),wl(112,"code"),Ux(113,"FormsModule"),ng(),Ux(114," em seu m\xF3dulo, tal como para utilizar o "),wl(115,"code"),Ux(116,"input default"),ng(),Ux(117,"."),ng()(),wl(118,"h4"),Ux(119,"Tokens customiz\xE1veis"),ng(),wl(120,"p"),Ux(121,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Ul(122,"br"),Ux(123,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),wl(124,"code"),Ux(125,".po-input"),ng()(),wl(126,"blockquote")(127,"p"),Ux(128,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(129,"a",6),Ux(130,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(131,"."),ng()(),wl(132,"table")(133,"thead")(134,"tr")(135,"th"),Ux(136,"Propriedade"),ng(),wl(137,"th"),Ux(138,"Descri\xE7\xE3o"),ng(),wl(139,"th"),Ux(140,"Valor Padr\xE3o"),ng()()(),wl(141,"tbody")(142,"tr")(143,"td")(144,"strong"),Ux(145,"Default Values"),ng()(),Ul(146,"td")(147,"td"),ng(),wl(148,"tr")(149,"td")(150,"code"),Ux(151,"--font-family"),ng()(),wl(152,"td"),Ux(153,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(154,"td")(155,"code"),Ux(156,"var(--font-family-theme)"),ng()()(),wl(157,"tr")(158,"td")(159,"code"),Ux(160,"--font-size"),ng()(),wl(161,"td"),Ux(162,"Tamanho da fonte"),ng(),wl(163,"td")(164,"code"),Ux(165,"var(--font-size-default)"),ng()()(),wl(166,"tr")(167,"td")(168,"code"),Ux(169,"--text-color-placeholder"),ng(),Ux(170," \xA0"),ng(),wl(171,"td"),Ux(172,"Cor principal do texto do placeholder"),ng(),wl(173,"td")(174,"code"),Ux(175,"var(--color-neutral-light-30)"),ng()()(),wl(176,"tr")(177,"td")(178,"code"),Ux(179,"--color"),ng()(),wl(180,"td"),Ux(181,"Cor principal do datetimepicker"),ng(),wl(182,"td")(183,"code"),Ux(184,"var(--color-neutral-dark-70)"),ng()()(),wl(185,"tr")(186,"td")(187,"code"),Ux(188,"--background"),ng()(),wl(189,"td"),Ux(190,"Cor de background"),ng(),wl(191,"td")(192,"code"),Ux(193,"var(--color-neutral-light-05)"),ng()()(),wl(194,"tr")(195,"td")(196,"code"),Ux(197,"--padding"),ng()(),wl(198,"td"),Ux(199,"Preenchimento"),ng(),wl(200,"td")(201,"code"),Ux(202,"0 0.5rem"),ng()()(),wl(203,"tr")(204,"td")(205,"code"),Ux(206,"--text-color"),ng()(),wl(207,"td"),Ux(208,"Cor do texto"),ng(),wl(209,"td")(210,"code"),Ux(211,"var(--color-neutral-dark-90)"),ng()()(),wl(212,"tr")(213,"td")(214,"code"),Ux(215,"--field-container-title-justify"),ng()(),wl(216,"td"),Ux(217,"Alinhamento horizontal do t\xEDtulo ("),wl(218,"code"),Ux(219,"justify-content"),ng(),Ux(220,")"),ng(),wl(221,"td")(222,"code"),Ux(223,"space-between"),ng()()(),wl(224,"tr")(225,"td")(226,"code"),Ux(227,"--field-container-title-flex"),ng()(),wl(228,"td"),Ux(229,"Flex do t\xEDtulo ("),wl(230,"code"),Ux(231,"flex"),ng(),Ux(232,")"),ng(),wl(233,"td")(234,"code"),Ux(235,"1 auto"),ng()()(),wl(236,"tr")(237,"td")(238,"strong"),Ux(239,"Hover"),ng()(),Ul(240,"td")(241,"td"),ng(),wl(242,"tr")(243,"td")(244,"code"),Ux(245,"--color-hover"),ng()(),wl(246,"td"),Ux(247,"Cor principal no estado hover"),ng(),wl(248,"td")(249,"code"),Ux(250,"var(--color-brand-01-dark)"),ng()()(),wl(251,"tr")(252,"td")(253,"code"),Ux(254,"--background-hover"),ng()(),wl(255,"td"),Ux(256,"Cor de background no estado hover"),ng(),wl(257,"td")(258,"code"),Ux(259,"var(--color-brand-01-lightest)"),ng()()(),wl(260,"tr")(261,"td")(262,"strong"),Ux(263,"Focused"),ng()(),Ul(264,"td")(265,"td"),ng(),wl(266,"tr")(267,"td")(268,"code"),Ux(269,"--color-focused"),ng()(),wl(270,"td"),Ux(271,"Cor principal no estado de focus"),ng(),wl(272,"td")(273,"code"),Ux(274,"var(--color-action-default)"),ng()()(),wl(275,"tr")(276,"td")(277,"code"),Ux(278,"--outline-color-focused"),ng()(),wl(279,"td"),Ux(280,"Cor do outline do estado de focus"),ng(),wl(281,"td")(282,"code"),Ux(283,"var(--color-action-focus)"),ng()()(),wl(284,"tr")(285,"td")(286,"strong"),Ux(287,"Disabled"),ng()(),Ul(288,"td")(289,"td"),ng(),wl(290,"tr")(291,"td")(292,"code"),Ux(293,"--color-disabled"),ng()(),wl(294,"td"),Ux(295,"Cor principal no estado disabled"),ng(),wl(296,"td")(297,"code"),Ux(298,"var(--color-neutral-light-30)"),ng()()(),wl(299,"tr")(300,"td")(301,"code"),Ux(302,"--background-disabled"),ng()(),wl(303,"td"),Ux(304,"Cor de background no estado disabled \xA0"),ng(),wl(305,"td")(306,"code"),Ux(307,"var(--color-neutral-light-20)"),ng()()(),wl(308,"tr")(309,"td")(310,"code"),Ux(311,"--text-color-disabled"),ng()(),wl(312,"td"),Ux(313,"Cor do texto no estado disabled"),ng(),wl(314,"td")(315,"code"),Ux(316,"var(--color-neutral-dark-70)"),ng()()()()()(),wl(317,"div",7)(318,"h4",8),Ux(319,"Seletor"),ng(),wl(320,"pre",9),Ux(321,`<po-datetimepicker
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean | string"
    p-compact-label="boolean"
    p-format-date="string"
    p-disabled="boolean | string"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean | string"
    p-locale="string"
    p-max-date="string | Date"
    p-max-time="string"
    p-min-date="string | Date"
    p-min-time="string"
    p-minute-interval="number"
    name="string"
    p-no-autocomplete="boolean | string"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean | string"
    p-required="boolean | string"
    p-second-interval="number"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-show-seconds="boolean"
    p-size="string"
    p-format-time="PoTimerFormat" >
</po-datetimepicker>
`),ng()(),wl(322,"h4",10),Ux(323,"Propriedades"),ng(),wl(324,"table",11)(325,"tr",12)(326,"th",13),Ux(327,"Nome"),ng(),wl(328,"th",13),Ux(329,"Tipo"),ng(),wl(330,"th",13),Ux(331,"Padr\xE3o"),ng(),wl(332,"th",13),Ux(333,"Descri\xE7\xE3o"),ng()(),wl(334,"tr",14)(335,"td",15)(336,"div",16)(337,"span",17),Ux(338," p-append-in-body"),Ul(339,"br"),ng()()(),wl(340,"td",18)(341,"code",19),Ux(342,"boolean"),ng()(),wl(343,"td",20)(344,"p")(345,"code"),Ux(346,"false"),ng()()(),wl(347,"td",21)(348,"em")(349,"strong"),Ux(350,"(opcional)"),ng()(),wl(351,"p"),Ux(352,"Define que o "),wl(353,"code"),Ux(354,"calendar"),ng(),Ux(355," e/ou tooltip ser\xE3o inclu\xEDdos no body da p\xE1gina e n\xE3o dentro do componente."),ng()()(),wl(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),Ux(360," p-auto-focus"),Ul(361,"br"),ng()()(),wl(362,"td",18)(363,"code",19),Ux(364,"boolean"),ng()(),wl(365,"td",20)(366,"p")(367,"code"),Ux(368,"false"),ng()()(),wl(369,"td",21)(370,"em")(371,"strong"),Ux(372,"(opcional)"),ng()(),wl(373,"p"),Ux(374,"Aplica foco no elemento ao ser iniciado."),ng()()(),wl(375,"tr",14)(376,"td",15)(377,"div",16)(378,"span",17),Ux(379," p-clean"),Ul(380,"br"),ng()()(),wl(381,"td",18)(382,"code",19),Ux(383,"boolean "),ng(),wl(384,"code",22),Ux(385," string"),ng()(),wl(386,"td",20)(387,"p")(388,"code"),Ux(389,"false"),ng()()(),wl(390,"td",21)(391,"em")(392,"strong"),Ux(393,"(opcional)"),ng()(),wl(394,"p"),Ux(395,"Habilita a\xE7\xE3o para limpar o campo."),ng()()(),wl(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),Ux(400," p-compact-label"),Ul(401,"br"),ng()()(),wl(402,"td",18)(403,"code",19),Ux(404,"boolean"),ng()(),wl(405,"td",20)(406,"p")(407,"code"),Ux(408,"false"),ng()()(),wl(409,"td",21)(410,"em")(411,"strong"),Ux(412,"(opcional)"),ng()(),wl(413,"p"),Ux(414,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng()()(),wl(415,"tr",14)(416,"td",15)(417,"div",16)(418,"span",17),Ux(419," p-format-date"),Ul(420,"br"),ng()()(),wl(421,"td",18)(422,"code",22),Ux(423,"string"),ng()(),wl(424,"td",20)(425,"p"),Ux(426,"Determinado pelo locale"),ng()(),wl(427,"td",21)(428,"em")(429,"strong"),Ux(430,"(opcional)"),ng()(),wl(431,"p"),Ux(432,"Define o formato de exibi\xE7\xE3o da data."),ng(),wl(433,"p"),Ux(434,"Valores v\xE1lidos:"),ng(),wl(435,"ul")(436,"li")(437,"code"),Ux(438,"dd/mm/yyyy"),ng()(),wl(439,"li")(440,"code"),Ux(441,"mm/dd/yyyy"),ng()(),wl(442,"li")(443,"code"),Ux(444,"yyyy/mm/dd"),ng()()(),wl(445,"p"),Ux(446,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),ng(),wl(447,"ul")(448,"li")(449,"code"),Ux(450,"en"),ng(),Ux(451," \u2192 "),wl(452,"code"),Ux(453,"mm/dd/yyyy"),ng()(),wl(454,"li")(455,"code"),Ux(456,"pt"),ng(),Ux(457,", "),wl(458,"code"),Ux(459,"es"),ng(),Ux(460,", "),wl(461,"code"),Ux(462,"ru"),ng(),Ux(463," \u2192 "),wl(464,"code"),Ux(465,"dd/mm/yyyy"),ng()()()()(),wl(466,"tr",14)(467,"td",15)(468,"div",16)(469,"span",17),Ux(470," p-disabled"),Ul(471,"br"),ng()()(),wl(472,"td",18)(473,"code",19),Ux(474,"boolean "),ng(),wl(475,"code",22),Ux(476," string"),ng()(),wl(477,"td",20)(478,"p")(479,"code"),Ux(480,"false"),ng()()(),wl(481,"td",21)(482,"em")(483,"strong"),Ux(484,"(opcional)"),ng()(),wl(485,"p"),Ux(486,"Desabilita o campo."),ng()()(),wl(487,"tr",14)(488,"td",15)(489,"div",16)(490,"span",17),Ux(491," p-error-limit"),Ul(492,"br"),ng()()(),wl(493,"td",18)(494,"code",19),Ux(495,"boolean"),ng()(),wl(496,"td",20)(497,"p")(498,"code"),Ux(499,"false"),ng()()(),wl(500,"td",21)(501,"em")(502,"strong"),Ux(503,"(opcional)"),ng()(),wl(504,"p"),Ux(505,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng()()(),wl(506,"tr",14)(507,"td",15)(508,"div",16)(509,"span",17),Ux(510," p-error-pattern"),Ul(511,"br"),ng()()(),wl(512,"td",18)(513,"code",22),Ux(514,"string"),ng()(),wl(515,"td",20),Ux(516,"-"),ng(),wl(517,"td",21)(518,"em")(519,"strong"),Ux(520,"(opcional)"),ng()(),wl(521,"p"),Ux(522,"Mensagem apresentada quando a data/hora for inv\xE1lida ou fora do per\xEDodo."),ng()()(),wl(523,"tr",14)(524,"td",15)(525,"div",16)(526,"span",17),Ux(527," p-help"),Ul(528,"br"),ng()()(),wl(529,"td",18)(530,"code",22),Ux(531,"string"),ng()(),wl(532,"td",20),Ux(533,"-"),ng(),wl(534,"td",21)(535,"em")(536,"strong"),Ux(537,"(opcional)"),ng()(),wl(538,"p"),Ux(539,"Texto de apoio do campo."),ng()()(),wl(540,"tr",14)(541,"td",15)(542,"div",23)(543,"span",24),Ux(544," (p-keydown)"),Ul(545,"br"),ng()()(),wl(546,"td",18)(547,"code",25),Ux(548,"EventEmitter"),ng()(),wl(549,"td",20),Ux(550,"-"),ng(),wl(551,"td",21)(552,"em")(553,"strong"),Ux(554,"(opcional)"),ng()(),wl(555,"p"),Ux(556,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),ng()()(),wl(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),Ux(561," p-label"),Ul(562,"br"),ng()()(),wl(563,"td",18)(564,"code",22),Ux(565,"string"),ng()(),wl(566,"td",20),Ux(567,"-"),ng(),wl(568,"td",21)(569,"em")(570,"strong"),Ux(571,"(opcional)"),ng()(),wl(572,"p"),Ux(573,"R\xF3tulo do campo."),ng()()(),wl(574,"tr",14)(575,"td",15)(576,"div",16)(577,"span",17),Ux(578," p-label-text-wrap"),Ul(579,"br"),ng()()(),wl(580,"td",18)(581,"code",19),Ux(582,"boolean"),ng()(),wl(583,"td",20)(584,"p")(585,"code"),Ux(586,"false"),ng()()(),wl(587,"td",21)(588,"em")(589,"strong"),Ux(590,"(opcional)"),ng()(),wl(591,"p"),Ux(592,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(593,"code"),Ux(594,"p-label"),ng(),Ux(595,"."),ng()()(),wl(596,"tr",14)(597,"td",15)(598,"div",16)(599,"span",17),Ux(600," p-loading"),Ul(601,"br"),ng()()(),wl(602,"td",18)(603,"code",19),Ux(604,"boolean "),ng(),wl(605,"code",22),Ux(606," string"),ng()(),wl(607,"td",20)(608,"p")(609,"code"),Ux(610,"false"),ng()()(),wl(611,"td",21)(612,"em")(613,"strong"),Ux(614,"(opcional)"),ng()(),wl(615,"p"),Ux(616,"Exibe um \xEDcone de carregamento no lado direito do campo."),ng()()(),wl(617,"tr",14)(618,"td",15)(619,"div",16)(620,"span",17),Ux(621," p-locale"),Ul(622,"br"),ng()()(),wl(623,"td",18)(624,"code",22),Ux(625,"string"),ng()(),wl(626,"td",20),Ux(627,"-"),ng(),wl(628,"td",21)(629,"em")(630,"strong"),Ux(631,"(opcional)"),ng()(),wl(632,"p"),Ux(633,"Idioma do componente."),ng(),wl(634,"blockquote")(635,"p"),Ux(636,"O locale padr\xE3o ser\xE1 recuperado com base no "),wl(637,"a",26)(638,"code"),Ux(639,"PoI18nService"),ng()(),Ux(640," ou "),wl(641,"em"),Ux(642,"browser"),ng(),Ux(643,"."),ng()()()(),wl(644,"tr",14)(645,"td",15)(646,"div",16)(647,"span",17),Ux(648," p-max-date"),Ul(649,"br"),ng()()(),wl(650,"td",18)(651,"code",22),Ux(652,"string "),ng(),wl(653,"code",27),Ux(654," Date"),ng()(),wl(655,"td",20),Ux(656,"-"),ng(),wl(657,"td",21)(658,"em")(659,"strong"),Ux(660,"(opcional)"),ng()(),wl(661,"p"),Ux(662,"Define uma data m\xE1xima para o "),wl(663,"code"),Ux(664,"po-datetimepicker"),ng(),Ux(665,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),ng(),wl(666,"p"),Ux(667,"Aceita os formatos:"),ng(),wl(668,"ul")(669,"li")(670,"code"),Ux(671,"Date"),ng(),Ux(672," object: "),wl(673,"code"),Ux(674,"new Date(2026, 4, 31)"),ng()(),wl(675,"li"),Ux(676,"ISO string: "),wl(677,"code"),Ux(678,"'2026-05-31'"),ng()(),wl(679,"li"),Ux(680,"ISO com hora: "),wl(681,"code"),Ux(682,"'2026-05-31T23:59:59-03:00'"),ng()()()()(),wl(683,"tr",14)(684,"td",15)(685,"div",16)(686,"span",17),Ux(687," p-max-time"),Ul(688,"br"),ng()()(),wl(689,"td",18)(690,"code",22),Ux(691,"string"),ng()(),wl(692,"td",20),Ux(693,"-"),ng(),wl(694,"td",21)(695,"em")(696,"strong"),Ux(697,"(opcional)"),ng()(),wl(698,"p"),Ux(699,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),ng(),wl(700,"p"),Ux(701,"Formato aceito: "),wl(702,"code"),Ux(703,"HH:mm"),ng(),Ux(704," ou "),wl(705,"code"),Ux(706,"HH:mm:ss"),ng(),Ux(707,"."),ng()()(),wl(708,"tr",14)(709,"td",15)(710,"div",16)(711,"span",17),Ux(712," p-min-date"),Ul(713,"br"),ng()()(),wl(714,"td",18)(715,"code",22),Ux(716,"string "),ng(),wl(717,"code",27),Ux(718," Date"),ng()(),wl(719,"td",20),Ux(720,"-"),ng(),wl(721,"td",21)(722,"em")(723,"strong"),Ux(724,"(opcional)"),ng()(),wl(725,"p"),Ux(726,"Define uma data m\xEDnima para o "),wl(727,"code"),Ux(728,"po-datetimepicker"),ng(),Ux(729,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),ng(),wl(730,"p"),Ux(731,"Aceita os formatos:"),ng(),wl(732,"ul")(733,"li")(734,"code"),Ux(735,"Date"),ng(),Ux(736," object: "),wl(737,"code"),Ux(738,"new Date(2026, 0, 1)"),ng()(),wl(739,"li"),Ux(740,"ISO string: "),wl(741,"code"),Ux(742,"'2026-01-01'"),ng()(),wl(743,"li"),Ux(744,"ISO com hora: "),wl(745,"code"),Ux(746,"'2026-01-01T00:00:00-03:00'"),ng()()()()(),wl(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),Ux(751," p-min-time"),Ul(752,"br"),ng()()(),wl(753,"td",18)(754,"code",22),Ux(755,"string"),ng()(),wl(756,"td",20),Ux(757,"-"),ng(),wl(758,"td",21)(759,"em")(760,"strong"),Ux(761,"(opcional)"),ng()(),wl(762,"p"),Ux(763,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),ng(),wl(764,"p"),Ux(765,"Formato aceito: "),wl(766,"code"),Ux(767,"HH:mm"),ng(),Ux(768," ou "),wl(769,"code"),Ux(770,"HH:mm:ss"),ng(),Ux(771,"."),ng()()(),wl(772,"tr",14)(773,"td",15)(774,"div",16)(775,"span",17),Ux(776," p-minute-interval"),Ul(777,"br"),ng()()(),wl(778,"td",18)(779,"code",28),Ux(780,"number"),ng()(),wl(781,"td",20)(782,"p")(783,"code"),Ux(784,"5"),ng()()(),wl(785,"td",21)(786,"em")(787,"strong"),Ux(788,"(opcional)"),ng()(),wl(789,"p"),Ux(790,"Define o intervalo entre os minutos exibidos no painel do timer."),ng()()(),wl(791,"tr",14)(792,"td",15)(793,"div",16)(794,"span",17),Ux(795," name"),Ul(796,"br"),ng()()(),wl(797,"td",18)(798,"code",22),Ux(799,"string"),ng()(),wl(800,"td",20),Ux(801,"-"),ng(),wl(802,"td",21)(803,"em")(804,"strong"),Ux(805,"(opcional)"),ng()(),wl(806,"p"),Ux(807,"Nome do componente."),ng()()(),wl(808,"tr",14)(809,"td",15)(810,"div",16)(811,"span",17),Ux(812," p-no-autocomplete"),Ul(813,"br"),ng()()(),wl(814,"td",18)(815,"code",19),Ux(816,"boolean "),ng(),wl(817,"code",22),Ux(818," string"),ng()(),wl(819,"td",20)(820,"p")(821,"code"),Ux(822,"false"),ng()()(),wl(823,"td",21)(824,"em")(825,"strong"),Ux(826,"(opcional)"),ng()(),wl(827,"p"),Ux(828,"Define a propriedade nativa "),wl(829,"code"),Ux(830,"autocomplete"),ng(),Ux(831," do campo como "),wl(832,"code"),Ux(833,"off"),ng(),Ux(834,"."),ng()()(),wl(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),Ux(839," (p-blur)"),Ul(840,"br"),ng()()(),wl(841,"td",18)(842,"code",25),Ux(843,"EventEmitter"),ng()(),wl(844,"td",20),Ux(845,"-"),ng(),wl(846,"td",21)(847,"em")(848,"strong"),Ux(849,"(opcional)"),ng()(),wl(850,"p"),Ux(851,"Evento disparado ao sair do campo (blur)."),ng()()(),wl(852,"tr",14)(853,"td",15)(854,"div",23)(855,"span",24),Ux(856," (p-change)"),Ul(857,"br"),ng()()(),wl(858,"td",18)(859,"code",25),Ux(860,"EventEmitter"),ng()(),wl(861,"td",20),Ux(862,"-"),ng(),wl(863,"td",21)(864,"em")(865,"strong"),Ux(866,"(opcional)"),ng()(),wl(867,"p"),Ux(868,"Evento disparado ao alterar valor do campo."),ng()()(),wl(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),Ux(873," p-optional"),Ul(874,"br"),ng()()(),wl(875,"td",18)(876,"code",19),Ux(877,"boolean"),ng()(),wl(878,"td",20)(879,"p")(880,"code"),Ux(881,"false"),ng()()(),wl(882,"td",21)(883,"em")(884,"strong"),Ux(885,"(opcional)"),ng()(),wl(886,"p"),Ux(887,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng()()(),wl(888,"tr",14)(889,"td",15)(890,"div",16)(891,"span",17),Ux(892," p-placeholder"),Ul(893,"br"),ng()()(),wl(894,"td",18)(895,"code",22),Ux(896,"string"),ng()(),wl(897,"td",20),Ux(898,"-"),ng(),wl(899,"td",21)(900,"em")(901,"strong"),Ux(902,"(opcional)"),ng()(),wl(903,"p"),Ux(904,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),ng()()(),wl(905,"tr",14)(906,"td",15)(907,"div",16)(908,"span",17),Ux(909," p-helper"),Ul(910,"br"),ng()()(),wl(911,"td",18)(912,"code",29),Ux(913,"PoHelperOptions "),ng(),wl(914,"code",22),Ux(915," string"),ng()(),wl(916,"td",20),Ux(917,"-"),ng(),wl(918,"td",21)(919,"em")(920,"strong"),Ux(921,"(opcional)"),ng()(),wl(922,"p"),Ux(923,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),ng(),wl(924,"blockquote")(925,"p"),Ux(926,"Para mais informa\xE7\xF5es acesse: "),wl(927,"a",30),Ux(928,"https://po-ui.io/documentation/po-helper"),ng(),Ux(929,"."),ng()()()(),wl(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),Ux(934," p-readonly"),Ul(935,"br"),ng()()(),wl(936,"td",18)(937,"code",19),Ux(938,"boolean "),ng(),wl(939,"code",22),Ux(940," string"),ng()(),wl(941,"td",20)(942,"p")(943,"code"),Ux(944,"false"),ng()()(),wl(945,"td",21)(946,"em")(947,"strong"),Ux(948,"(opcional)"),ng()(),wl(949,"p"),Ux(950,"Torna o componente somente leitura."),ng()()(),wl(951,"tr",14)(952,"td",15)(953,"div",16)(954,"span",17),Ux(955," p-required"),Ul(956,"br"),ng()()(),wl(957,"td",18)(958,"code",19),Ux(959,"boolean "),ng(),wl(960,"code",22),Ux(961," string"),ng()(),wl(962,"td",20)(963,"p")(964,"code"),Ux(965,"false"),ng()()(),wl(966,"td",21)(967,"em")(968,"strong"),Ux(969,"(opcional)"),ng()(),wl(970,"p"),Ux(971,"Define que o campo ser\xE1 obrigat\xF3rio."),ng()()(),wl(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),Ux(976," p-second-interval"),Ul(977,"br"),ng()()(),wl(978,"td",18)(979,"code",28),Ux(980,"number"),ng()(),wl(981,"td",20)(982,"p")(983,"code"),Ux(984,"1"),ng()()(),wl(985,"td",21)(986,"em")(987,"strong"),Ux(988,"(opcional)"),ng()(),wl(989,"p"),Ux(990,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),wl(991,"code"),Ux(992,"p-show-seconds"),ng(),Ux(993," est\xE1 ativo."),ng()()(),wl(994,"tr",14)(995,"td",15)(996,"div",16)(997,"span",17),Ux(998," p-required-field-error-message"),Ul(999,"br"),ng()()(),wl(1e3,"td",18)(1001,"code",19),Ux(1002,"boolean"),ng()(),wl(1003,"td",20)(1004,"p")(1005,"code"),Ux(1006,"false"),ng()()(),wl(1007,"td",21)(1008,"em")(1009,"strong"),Ux(1010,"(opcional)"),ng()(),wl(1011,"p"),Ux(1012,"Exibe a mensagem setada na propriedade "),wl(1013,"code"),Ux(1014,"p-error-pattern"),ng(),Ux(1015," se o campo estiver vazio e for requerido."),ng(),wl(1016,"blockquote")(1017,"p"),Ux(1018,"Necess\xE1rio que a propriedade "),wl(1019,"code"),Ux(1020,"p-required"),ng(),Ux(1021," esteja habilitada."),ng()()()(),wl(1022,"tr",14)(1023,"td",15)(1024,"div",16)(1025,"span",17),Ux(1026," p-show-required"),Ul(1027,"br"),ng()()(),wl(1028,"td",18)(1029,"code",19),Ux(1030,"boolean"),ng()(),wl(1031,"td",20)(1032,"p")(1033,"code"),Ux(1034,"false"),ng()()(),wl(1035,"td",21)(1036,"em")(1037,"strong"),Ux(1038,"(opcional)"),ng()(),wl(1039,"p"),Ux(1040,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng()()(),wl(1041,"tr",14)(1042,"td",15)(1043,"div",16)(1044,"span",17),Ux(1045," p-show-seconds"),Ul(1046,"br"),ng()()(),wl(1047,"td",18)(1048,"code",19),Ux(1049,"boolean"),ng()(),wl(1050,"td",20)(1051,"p")(1052,"code"),Ux(1053,"false"),ng()()(),wl(1054,"td",21)(1055,"em")(1056,"strong"),Ux(1057,"(opcional)"),ng()(),wl(1058,"p"),Ux(1059,"Exibe a coluna de segundos no painel de sele\xE7\xE3o do timer."),ng()()(),wl(1060,"tr",14)(1061,"td",15)(1062,"div",16)(1063,"span",17),Ux(1064," p-size"),Ul(1065,"br"),ng()()(),wl(1066,"td",18)(1067,"code",22),Ux(1068,"string"),ng()(),wl(1069,"td",20)(1070,"p")(1071,"code"),Ux(1072,"medium"),ng()()(),wl(1073,"td",21)(1074,"em")(1075,"strong"),Ux(1076,"(opcional)"),ng()(),wl(1077,"p"),Ux(1078,"Define o tamanho do componente:"),ng(),wl(1079,"ul")(1080,"li")(1081,"code"),Ux(1082,"small"),ng(),Ux(1083,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(1084,"li")(1085,"code"),Ux(1086,"medium"),ng(),Ux(1087,": altura do input como 44px."),ng()()()(),wl(1088,"tr",14)(1089,"td",15)(1090,"div",16)(1091,"span",17),Ux(1092," p-format-time"),Ul(1093,"br"),ng()()(),wl(1094,"td",18)(1095,"code",31),Ux(1096,"PoTimerFormat"),ng()(),wl(1097,"td",20)(1098,"p"),Ux(1099,"Determinado pelo locale"),ng()(),wl(1100,"td",21)(1101,"em")(1102,"strong"),Ux(1103,"(opcional)"),ng()(),wl(1104,"p"),Ux(1105,"Define o formato de exibi\xE7\xE3o do timer."),ng(),wl(1106,"p"),Ux(1107,"Valores v\xE1lidos:"),ng(),wl(1108,"ul")(1109,"li")(1110,"code"),Ux(1111,"24"),ng(),Ux(1112,": formato de 24 horas (padr\xE3o para pt, es, ru)"),ng(),wl(1113,"li")(1114,"code"),Ux(1115,"12"),ng(),Ux(1116,": formato de 12 horas com indicador AM/PM (padr\xE3o para en)"),ng()(),wl(1117,"p"),Ux(1118,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),ng(),wl(1119,"ul")(1120,"li")(1121,"code"),Ux(1122,"en"),ng(),Ux(1123," \u2192 12h (AM/PM)"),ng(),wl(1124,"li")(1125,"code"),Ux(1126,"pt"),ng(),Ux(1127,", "),wl(1128,"code"),Ux(1129,"es"),ng(),Ux(1130,", "),wl(1131,"code"),Ux(1132,"ru"),ng(),Ux(1133," \u2192 24h"),ng()()()()(),wl(1134,"h3",10),Ux(1135,"M\xE9todos"),ng(),wl(1136,"table",32)(1137,"tr",14)(1138,"th",33)(1139,"div",16)(1140,"h4")(1141,"span",17),Ux(1142," showAdditionalHelp "),ng()()()()(),wl(1143,"tr",21)(1144,"td",21)(1145,"p"),Ux(1146,"M\xE9todo que exibe "),wl(1147,"code"),Ux(1148,"p-helper"),ng(),Ux(1149," ou executa a a\xE7\xE3o definida em "),wl(1150,"code"),Ux(1151,"p-helper{eventOnClick}"),ng(),Ux(1152,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),wl(1153,"code"),Ux(1154,"p-keydown"),ng(),Ux(1155,"."),ng(),wl(1156,"blockquote")(1157,"p"),Ux(1158,"Exibe ou oculta o conte\xFAdo do componente "),wl(1159,"code"),Ux(1160,"po-helper"),ng(),Ux(1161," quando o componente estiver com foco."),ng()(),wl(1162,"pre")(1163,"code"),Ux(1164,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),ng()(),wl(1165,"pre")(1166,"code"),Ux(1167,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ng()()()()(),Ul(1168,"br"),ng());},dependencies:[fP],encapsulation:2})}return l})();var ye=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Datetimepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-datetimepicker-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-datetimepicker-basic-view")(6,"sample-po-datetimepicker-labs-view")(7,"sample-po-datetimepicker-12h-seconds-view")(8,"sample-po-datetimepicker-scheduling-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ge,he,fe,Ce,ve],encapsulation:2})}return l})();var ze=[{path:"",component:ye}],ke=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue$1({imports:[vL.forChild(ze),vL]})}return l})();var Pt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue$1({imports:[u5,ke]})}return l})();export{Pt as DocPoDatetimepickerModule};