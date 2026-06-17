import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d as f,c5 as zde,aW as Yp,cV as Iw,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,bD as Ade,b4 as F3,cp as Uhe,c8 as Pde,cW as xue,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,aJ as Ghe,bd as xx,av as ql,aw as lo,ax as uo,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-BY5NURRA.js';var se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","datetimepicker","p-label","PO Datetimepicker"]],template:function(r,i){r&1&&Wl(0,"po-datetimepicker",0);},dependencies:[Iw],encapsulation:2,changeDetection:1})}return l})();var ke=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Datetimepicker Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datetimepicker-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,ke,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,se],encapsulation:2})}return l})();var ge=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];formatDateOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];formatTimeOptions=[{label:"24h",value:"24"},{label:"12h (AM/PM)",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText="",this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-labs"]],standalone:false,decls:26,vars:54,consts:[["f","ngForm"],["name","datetimepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-compact-label","p-disabled","p-error-limit","p-error-pattern","p-format-date","p-format-time","p-help","p-helper","p-label","p-label-text-wrap","p-loading","p-locale","p-max-date","p-max-time","p-min-date","p-min-time","p-minute-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-second-interval","p-show-required","p-show-seconds","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min Date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max Date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatDate","p-columns","4","p-label","Format Date",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatTime","p-columns","4","p-label","Format Time",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=Ex();Sl(0,"po-datetimepicker",1),Ew("ngModelChange",function(o){return Xy(d),tN(i.datetimepicker,o)||(i.datetimepicker=o),Qy(o)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),sg(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(o){return Xy(d),tN(i.label,o)||(i.label=o),Qy(o)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(o){return Xy(d),tN(i.help,o)||(i.help=o),Qy(o)}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(o){return Xy(d),tN(i.helperText,o)||(i.helperText=o),Qy(o)}),sg(),JA(),Sl(11,"po-input",8),Ew("ngModelChange",function(o){return Xy(d),tN(i.placeholder,o)||(i.placeholder=o),Qy(o)}),sg(),JA(),Sl(12,"po-input",9),Ew("ngModelChange",function(o){return Xy(d),tN(i.errorPattern,o)||(i.errorPattern=o),Qy(o)}),sg(),JA(),Sl(13,"po-number",10),Ew("ngModelChange",function(o){return Xy(d),tN(i.minuteInterval,o)||(i.minuteInterval=o),Qy(o)}),sg(),JA(),Sl(14,"po-number",11),Ew("ngModelChange",function(o){return Xy(d),tN(i.secondInterval,o)||(i.secondInterval=o),Qy(o)}),sg(),JA(),Sl(15,"po-timepicker",12),Ew("ngModelChange",function(o){return Xy(d),tN(i.minTime,o)||(i.minTime=o),Qy(o)}),sg(),JA(),Sl(16,"po-timepicker",13),Ew("ngModelChange",function(o){return Xy(d),tN(i.maxTime,o)||(i.maxTime=o),Qy(o)}),sg(),JA(),Sl(17,"po-datepicker",14),Ew("ngModelChange",function(o){return Xy(d),tN(i.minDate,o)||(i.minDate=o),Qy(o)}),sg(),JA(),Sl(18,"po-datepicker",15),Ew("ngModelChange",function(o){return Xy(d),tN(i.maxDate,o)||(i.maxDate=o),Qy(o)}),sg(),JA(),Sl(19,"po-checkbox-group",16),Ew("ngModelChange",function(o){return Xy(d),tN(i.properties,o)||(i.properties=o),Qy(o)}),sg(),JA(),Sl(20,"po-radio-group",17),Ew("ngModelChange",function(o){return Xy(d),tN(i.locale,o)||(i.locale=o),Qy(o)}),sg(),JA(),Sl(21,"po-radio-group",18),Ew("ngModelChange",function(o){return Xy(d),tN(i.formatDate,o)||(i.formatDate=o),Qy(o)}),sg(),JA(),Sl(22,"po-radio-group",19),Ew("ngModelChange",function(o){return Xy(d),tN(i.formatTime,o)||(i.formatTime=o),Qy(o)}),sg(),JA(),Sl(23,"po-radio-group",20),Ew("ngModelChange",function(o){return Xy(d),tN(i.size,o)||(i.size=o),Qy(o)}),sg(),JA(),Sl(24,"div",2)(25,"po-button",21),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(Dw("ngModel",i.datetimepicker),tw("p-clean",i.properties.includes("clean"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-disabled",i.properties.includes("disabled"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-error-pattern",i.errorPattern)("p-format-date",i.formatDate)("p-format-time",i.formatTime)("p-help",i.help)("p-helper",i.helperText)("p-label",i.label)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-max-date",i.maxDate)("p-max-time",i.maxTime)("p-min-date",i.minDate)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-second-interval",i.secondInterval)("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-size",i.size),t0(),Vp(3),tw("p-value",i.datetimepicker),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.help),t0(),Vp(),Dw("ngModel",i.helperText),t0(),Vp(),Dw("ngModel",i.placeholder),t0(),Vp(),Dw("ngModel",i.errorPattern),t0(),Vp(),Dw("ngModel",i.minuteInterval),t0(),Vp(),Dw("ngModel",i.secondInterval),t0(),Vp(),Dw("ngModel",i.minTime),t0(),Vp(),Dw("ngModel",i.maxTime),t0(),Vp(),Dw("ngModel",i.minDate),tw("p-max-date",i.maxDate),t0(),Vp(),Dw("ngModel",i.maxDate),tw("p-min-date",i.minDate),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.locale),tw("p-options",i.localeOptions),t0(),Vp(),Dw("ngModel",i.formatDate),tw("p-options",i.formatDateOptions),t0(),Vp(),Dw("ngModel",i.formatTime),tw("p-options",i.formatTimeOptions),t0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,Ade,Iw,F3,Uhe,Pde,xue,Qhe],encapsulation:2,changeDetection:1})}return l})();var Me=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Datetimepicker Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-datetimepicker
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datetimepicker-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Me,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ge],encapsulation:2})}return l})();var Ee=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-12h-seconds"]],standalone:false,decls:1,vars:1,consts:[["name","datetimepicker12h","p-label","PO Datetimepicker - 12h with Seconds","p-show-seconds","true","p-format-time","12","p-format-date","mm/dd/yyyy",3,"ngModelChange","ngModel"]],template:function(r,i){r&1&&(Sl(0,"po-datetimepicker",0),Ew("ngModelChange",function(s){return tN(i.datetime,s)||(i.datetime=s),s}),sg(),JA()),r&2&&(Dw("ngModel",i.datetime),t0());},dependencies:[K9,Dk,Iw],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-12h-seconds-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Datetimepicker - 12h with Seconds"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datetimepicker-12h-seconds"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Te,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ee],encapsulation:2})}return l})();var Oe=["formScheduling"],be=(()=>{class l{poDialog=f(zde);poNotification=f(Yp);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:"general",label:"Cl\xEDnico Geral"},{value:"cardiology",label:"Cardiologia"},{value:"dermatology",label:"Dermatologia"},{value:"orthopedics",label:"Ortopedia"},{value:"neurology",label:"Neurologia"}];confirm(){let p=this.appointment?this.appointment.slice(0,16):"",r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:"Confirmar Agendamento",message:r,confirm:()=>{this.poNotification.success("Consulta agendada com sucesso!"),this.formScheduling.reset();},cancel:()=>{this.poNotification.warning("Agendamento cancelado.");}});}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:""}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&ql(Oe,7),r&2){let d;lo(d=uo())&&(i.formScheduling=d.first);}},standalone:false,decls:10,vars:6,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","patient","p-label","Paciente","p-placeholder","Nome do paciente","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","doctor","p-label","M\xE9dico","p-placeholder","Nome do m\xE9dico","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","specialty","p-label","Especialidade","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","appointment","p-clean","","p-label","Data e Hora da Consulta","p-min-time","08:00","p-max-time","18:00","p-minute-interval","15","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","confirmButton","p-label","Agendar Consulta",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=Ex();Sl(0,"form",null,0)(2,"div",1)(3,"po-input",2),Ew("ngModelChange",function(o){return Xy(d),tN(i.patient,o)||(i.patient=o),Qy(o)}),sg(),JA(),Sl(4,"po-input",3),Ew("ngModelChange",function(o){return Xy(d),tN(i.doctor,o)||(i.doctor=o),Qy(o)}),sg(),JA(),sg(),Sl(5,"div",1)(6,"po-select",4),Ew("ngModelChange",function(o){return Xy(d),tN(i.specialty,o)||(i.specialty=o),Qy(o)}),sg(),JA(),Sl(7,"po-datetimepicker",5),Ew("ngModelChange",function(o){return Xy(d),tN(i.appointment,o)||(i.appointment=o),Qy(o)}),sg(),JA(),sg(),Sl(8,"div",1)(9,"po-button",6),ht("p-click",function(){return i.confirm()}),sg()()();}if(r&2){let d=xx(1);Vp(3),Dw("ngModel",i.patient),t0(),Vp(),Dw("ngModel",i.doctor),t0(),Vp(2),Dw("ngModel",i.specialty),tw("p-options",i.specialtyOptions),t0(),Vp(),Dw("ngModel",i.appointment),t0(),Vp(2),tw("p-disabled",d.invalid);}},dependencies:[J9,K9,X9,Dk,vk,Qt,Iw,F3,Ghe],encapsulation:2,changeDetection:1})}return l})();var We=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-scheduling-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Datetimepicker - Scheduling"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<form #formScheduling="ngForm">
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { UntypedFormControl } from '@angular/forms';
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
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-datetimepicker-scheduling"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,We,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,be],encapsulation:2})}return l})();var xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-doc"]],standalone:false,decls:1169,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoDatetimepickerComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,"O "),Sl(24,"code"),Jx(25,"po-datetimepicker"),sg(),Jx(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),sg(),Sl(27,"p"),Jx(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),Sl(29,"code"),Jx(30,"p-format-date"),sg(),Jx(31,". O formato de hora pode ser 24h ou 12h (AM/PM), configur\xE1vel via "),Sl(32,"code"),Jx(33,"p-format-time"),sg(),Jx(34,"."),sg(),Sl(35,"p"),Jx(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Sl(37,"code"),Jx(38,"p-locale"),sg(),Jx(39,"."),sg(),Sl(40,"p"),Jx(41,"O componente aceita os seguintes formatos de entrada:"),sg(),Sl(42,"ul")(43,"li"),Jx(44,"ISO 8601 com timezone: "),Sl(45,"code"),Jx(46,"'2026-05-12T14:30:00-03:00'"),sg()(),Sl(47,"li"),Jx(48,"ISO 8601 UTC: "),Sl(49,"code"),Jx(50,"'2026-05-12T14:30:00Z'"),sg()(),Sl(51,"li"),Jx(52,"ISO 8601 sem timezone: "),Sl(53,"code"),Jx(54,"'2026-05-12T14:30:00'"),sg()(),Sl(55,"li"),Jx(56,"ISO 8601 apenas data: "),Sl(57,"code"),Jx(58,"'2026-05-12'"),sg()(),Sl(59,"li"),Jx(60,"JavaScript Date Object: "),Sl(61,"code"),Jx(62,"new Date(2026, 4, 12, 14, 30)"),sg()()(),Sl(63,"p"),Jx(64,"O formato de sa\xEDda do "),Sl(65,"em"),Jx(66,"model"),sg(),Jx(67," \xE9 sempre ISO 8601 com timezone local: "),Sl(68,"code"),Jx(69,"'yyyy-mm-ddTHH:mm+/-HH:mm'"),sg(),Jx(70,`
(ou `),Sl(71,"code"),Jx(72,"'yyyy-mm-ddTHH:mm:ss+/-HH:mm'"),sg(),Jx(73," quando "),Sl(74,"code"),Jx(75,"p-show-seconds"),sg(),Jx(76," est\xE1 ativo)."),sg(),Sl(77,"p")(78,"strong"),Jx(79,"Importante:"),sg()(),Sl(80,"ul")(81,"li"),Jx(82,"O valor emitido no model inclui o offset do timezone local do navegador."),sg(),Sl(83,"li"),Jx(84,"Ao receber um valor com timezone, o componente converte automaticamente para hor\xE1rio local."),sg(),Sl(85,"li"),Jx(86,"Caso a data/hora esteja inv\xE1lida, o "),Sl(87,"code"),Jx(88,"model"),sg(),Jx(89," receber\xE1 a mensagem de erro localizada."),sg(),Sl(90,"li"),Jx(91,"Caso o "),Sl(92,"code"),Jx(93,"input"),sg(),Jx(94," esteja passando um "),Sl(95,"code"),Jx(96,"[(ngModel)]"),sg(),Jx(97,", mas n\xE3o tenha um "),Sl(98,"code"),Jx(99,"name"),sg(),Jx(100,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Sl(101,"code"),Jx(102,'[ngModelOptions]="{standalone: true}"'),sg(),Jx(103,")."),sg()(),Sl(104,"p"),Jx(105,"Exemplo:"),sg(),Sl(106,"pre")(107,"code"),Jx(108,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),sg()(),Sl(109,"blockquote")(110,"p"),Jx(111,"N\xE3o esque\xE7a de importar o "),Sl(112,"code"),Jx(113,"FormsModule"),sg(),Jx(114," em seu m\xF3dulo, tal como para utilizar o "),Sl(115,"code"),Jx(116,"input default"),sg(),Jx(117,"."),sg()(),Sl(118,"h4"),Jx(119,"Tokens customiz\xE1veis"),sg(),Sl(120,"p"),Jx(121,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Wl(122,"br"),Jx(123,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(124,"code"),Jx(125,".po-input"),sg()(),Sl(126,"blockquote")(127,"p"),Jx(128,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(129,"a",6),Jx(130,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(131,"."),sg()(),Sl(132,"table")(133,"thead")(134,"tr")(135,"th"),Jx(136,"Propriedade"),sg(),Sl(137,"th"),Jx(138,"Descri\xE7\xE3o"),sg(),Sl(139,"th"),Jx(140,"Valor Padr\xE3o"),sg()()(),Sl(141,"tbody")(142,"tr")(143,"td")(144,"strong"),Jx(145,"Default Values"),sg()(),Wl(146,"td")(147,"td"),sg(),Sl(148,"tr")(149,"td")(150,"code"),Jx(151,"--font-family"),sg()(),Sl(152,"td"),Jx(153,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(154,"td")(155,"code"),Jx(156,"var(--font-family-theme)"),sg()()(),Sl(157,"tr")(158,"td")(159,"code"),Jx(160,"--font-size"),sg()(),Sl(161,"td"),Jx(162,"Tamanho da fonte"),sg(),Sl(163,"td")(164,"code"),Jx(165,"var(--font-size-default)"),sg()()(),Sl(166,"tr")(167,"td")(168,"code"),Jx(169,"--text-color-placeholder"),sg(),Jx(170," \xA0"),sg(),Sl(171,"td"),Jx(172,"Cor principal do texto do placeholder"),sg(),Sl(173,"td")(174,"code"),Jx(175,"var(--color-neutral-light-30)"),sg()()(),Sl(176,"tr")(177,"td")(178,"code"),Jx(179,"--color"),sg()(),Sl(180,"td"),Jx(181,"Cor principal do datetimepicker"),sg(),Sl(182,"td")(183,"code"),Jx(184,"var(--color-neutral-dark-70)"),sg()()(),Sl(185,"tr")(186,"td")(187,"code"),Jx(188,"--background"),sg()(),Sl(189,"td"),Jx(190,"Cor de background"),sg(),Sl(191,"td")(192,"code"),Jx(193,"var(--color-neutral-light-05)"),sg()()(),Sl(194,"tr")(195,"td")(196,"code"),Jx(197,"--padding"),sg()(),Sl(198,"td"),Jx(199,"Preenchimento"),sg(),Sl(200,"td")(201,"code"),Jx(202,"0 0.5rem"),sg()()(),Sl(203,"tr")(204,"td")(205,"code"),Jx(206,"--text-color"),sg()(),Sl(207,"td"),Jx(208,"Cor do texto"),sg(),Sl(209,"td")(210,"code"),Jx(211,"var(--color-neutral-dark-90)"),sg()()(),Sl(212,"tr")(213,"td")(214,"code"),Jx(215,"--field-container-title-justify"),sg()(),Sl(216,"td"),Jx(217,"Alinhamento horizontal do t\xEDtulo ("),Sl(218,"code"),Jx(219,"justify-content"),sg(),Jx(220,")"),sg(),Sl(221,"td")(222,"code"),Jx(223,"space-between"),sg()()(),Sl(224,"tr")(225,"td")(226,"code"),Jx(227,"--field-container-title-flex"),sg()(),Sl(228,"td"),Jx(229,"Flex do t\xEDtulo ("),Sl(230,"code"),Jx(231,"flex"),sg(),Jx(232,")"),sg(),Sl(233,"td")(234,"code"),Jx(235,"1 auto"),sg()()(),Sl(236,"tr")(237,"td")(238,"strong"),Jx(239,"Hover"),sg()(),Wl(240,"td")(241,"td"),sg(),Sl(242,"tr")(243,"td")(244,"code"),Jx(245,"--color-hover"),sg()(),Sl(246,"td"),Jx(247,"Cor principal no estado hover"),sg(),Sl(248,"td")(249,"code"),Jx(250,"var(--color-brand-01-dark)"),sg()()(),Sl(251,"tr")(252,"td")(253,"code"),Jx(254,"--background-hover"),sg()(),Sl(255,"td"),Jx(256,"Cor de background no estado hover"),sg(),Sl(257,"td")(258,"code"),Jx(259,"var(--color-brand-01-lightest)"),sg()()(),Sl(260,"tr")(261,"td")(262,"strong"),Jx(263,"Focused"),sg()(),Wl(264,"td")(265,"td"),sg(),Sl(266,"tr")(267,"td")(268,"code"),Jx(269,"--color-focused"),sg()(),Sl(270,"td"),Jx(271,"Cor principal no estado de focus"),sg(),Sl(272,"td")(273,"code"),Jx(274,"var(--color-action-default)"),sg()()(),Sl(275,"tr")(276,"td")(277,"code"),Jx(278,"--outline-color-focused"),sg()(),Sl(279,"td"),Jx(280,"Cor do outline do estado de focus"),sg(),Sl(281,"td")(282,"code"),Jx(283,"var(--color-action-focus)"),sg()()(),Sl(284,"tr")(285,"td")(286,"strong"),Jx(287,"Disabled"),sg()(),Wl(288,"td")(289,"td"),sg(),Sl(290,"tr")(291,"td")(292,"code"),Jx(293,"--color-disabled"),sg()(),Sl(294,"td"),Jx(295,"Cor principal no estado disabled"),sg(),Sl(296,"td")(297,"code"),Jx(298,"var(--color-neutral-light-30)"),sg()()(),Sl(299,"tr")(300,"td")(301,"code"),Jx(302,"--background-disabled"),sg()(),Sl(303,"td"),Jx(304,"Cor de background no estado disabled \xA0"),sg(),Sl(305,"td")(306,"code"),Jx(307,"var(--color-neutral-light-20)"),sg()()(),Sl(308,"tr")(309,"td")(310,"code"),Jx(311,"--text-color-disabled"),sg()(),Sl(312,"td"),Jx(313,"Cor do texto no estado disabled"),sg(),Sl(314,"td")(315,"code"),Jx(316,"var(--color-neutral-dark-70)"),sg()()()()()(),Sl(317,"div",7)(318,"h4",8),Jx(319,"Seletor"),sg(),Sl(320,"pre",9),Jx(321,`<po-datetimepicker
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
`),sg()(),Sl(322,"h4",10),Jx(323,"Propriedades"),sg(),Sl(324,"table",11)(325,"tr",12)(326,"th",13),Jx(327,"Nome"),sg(),Sl(328,"th",13),Jx(329,"Tipo"),sg(),Sl(330,"th",13),Jx(331,"Padr\xE3o"),sg(),Sl(332,"th",13),Jx(333,"Descri\xE7\xE3o"),sg()(),Sl(334,"tr",14)(335,"td",15)(336,"div",16)(337,"span",17),Jx(338," p-append-in-body"),Wl(339,"br"),sg()()(),Sl(340,"td",18)(341,"code",19),Jx(342,"boolean"),sg()(),Sl(343,"td",20)(344,"p")(345,"code"),Jx(346,"false"),sg()()(),Sl(347,"td",21)(348,"em")(349,"strong"),Jx(350,"(opcional)"),sg()(),Sl(351,"p"),Jx(352,"Define que o "),Sl(353,"code"),Jx(354,"calendar"),sg(),Jx(355," e/ou tooltip ser\xE3o inclu\xEDdos no body da p\xE1gina e n\xE3o dentro do componente."),sg()()(),Sl(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),Jx(360," p-auto-focus"),Wl(361,"br"),sg()()(),Sl(362,"td",18)(363,"code",19),Jx(364,"boolean"),sg()(),Sl(365,"td",20)(366,"p")(367,"code"),Jx(368,"false"),sg()()(),Sl(369,"td",21)(370,"em")(371,"strong"),Jx(372,"(opcional)"),sg()(),Sl(373,"p"),Jx(374,"Aplica foco no elemento ao ser iniciado."),sg()()(),Sl(375,"tr",14)(376,"td",15)(377,"div",16)(378,"span",17),Jx(379," p-clean"),Wl(380,"br"),sg()()(),Sl(381,"td",18)(382,"code",19),Jx(383,"boolean "),sg(),Sl(384,"code",22),Jx(385," string"),sg()(),Sl(386,"td",20)(387,"p")(388,"code"),Jx(389,"false"),sg()()(),Sl(390,"td",21)(391,"em")(392,"strong"),Jx(393,"(opcional)"),sg()(),Sl(394,"p"),Jx(395,"Habilita a\xE7\xE3o para limpar o campo."),sg()()(),Sl(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),Jx(400," p-compact-label"),Wl(401,"br"),sg()()(),Sl(402,"td",18)(403,"code",19),Jx(404,"boolean"),sg()(),Sl(405,"td",20)(406,"p")(407,"code"),Jx(408,"false"),sg()()(),Sl(409,"td",21)(410,"em")(411,"strong"),Jx(412,"(opcional)"),sg()(),Sl(413,"p"),Jx(414,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg()()(),Sl(415,"tr",14)(416,"td",15)(417,"div",16)(418,"span",17),Jx(419," p-format-date"),Wl(420,"br"),sg()()(),Sl(421,"td",18)(422,"code",22),Jx(423,"string"),sg()(),Sl(424,"td",20)(425,"p"),Jx(426,"Determinado pelo locale"),sg()(),Sl(427,"td",21)(428,"em")(429,"strong"),Jx(430,"(opcional)"),sg()(),Sl(431,"p"),Jx(432,"Define o formato de exibi\xE7\xE3o da data."),sg(),Sl(433,"p"),Jx(434,"Valores v\xE1lidos:"),sg(),Sl(435,"ul")(436,"li")(437,"code"),Jx(438,"dd/mm/yyyy"),sg()(),Sl(439,"li")(440,"code"),Jx(441,"mm/dd/yyyy"),sg()(),Sl(442,"li")(443,"code"),Jx(444,"yyyy/mm/dd"),sg()()(),Sl(445,"p"),Jx(446,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),sg(),Sl(447,"ul")(448,"li")(449,"code"),Jx(450,"en"),sg(),Jx(451," \u2192 "),Sl(452,"code"),Jx(453,"mm/dd/yyyy"),sg()(),Sl(454,"li")(455,"code"),Jx(456,"pt"),sg(),Jx(457,", "),Sl(458,"code"),Jx(459,"es"),sg(),Jx(460,", "),Sl(461,"code"),Jx(462,"ru"),sg(),Jx(463," \u2192 "),Sl(464,"code"),Jx(465,"dd/mm/yyyy"),sg()()()()(),Sl(466,"tr",14)(467,"td",15)(468,"div",16)(469,"span",17),Jx(470," p-disabled"),Wl(471,"br"),sg()()(),Sl(472,"td",18)(473,"code",19),Jx(474,"boolean "),sg(),Sl(475,"code",22),Jx(476," string"),sg()(),Sl(477,"td",20)(478,"p")(479,"code"),Jx(480,"false"),sg()()(),Sl(481,"td",21)(482,"em")(483,"strong"),Jx(484,"(opcional)"),sg()(),Sl(485,"p"),Jx(486,"Desabilita o campo."),sg()()(),Sl(487,"tr",14)(488,"td",15)(489,"div",16)(490,"span",17),Jx(491," p-error-limit"),Wl(492,"br"),sg()()(),Sl(493,"td",18)(494,"code",19),Jx(495,"boolean"),sg()(),Sl(496,"td",20)(497,"p")(498,"code"),Jx(499,"false"),sg()()(),Sl(500,"td",21)(501,"em")(502,"strong"),Jx(503,"(opcional)"),sg()(),Sl(504,"p"),Jx(505,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg()()(),Sl(506,"tr",14)(507,"td",15)(508,"div",16)(509,"span",17),Jx(510," p-error-pattern"),Wl(511,"br"),sg()()(),Sl(512,"td",18)(513,"code",22),Jx(514,"string"),sg()(),Sl(515,"td",20),Jx(516,"-"),sg(),Sl(517,"td",21)(518,"em")(519,"strong"),Jx(520,"(opcional)"),sg()(),Sl(521,"p"),Jx(522,"Mensagem apresentada quando a data/hora for inv\xE1lida ou fora do per\xEDodo."),sg()()(),Sl(523,"tr",14)(524,"td",15)(525,"div",16)(526,"span",17),Jx(527," p-help"),Wl(528,"br"),sg()()(),Sl(529,"td",18)(530,"code",22),Jx(531,"string"),sg()(),Sl(532,"td",20),Jx(533,"-"),sg(),Sl(534,"td",21)(535,"em")(536,"strong"),Jx(537,"(opcional)"),sg()(),Sl(538,"p"),Jx(539,"Texto de apoio do campo."),sg()()(),Sl(540,"tr",14)(541,"td",15)(542,"div",23)(543,"span",24),Jx(544," (p-keydown)"),Wl(545,"br"),sg()()(),Sl(546,"td",18)(547,"code",25),Jx(548,"EventEmitter"),sg()(),Sl(549,"td",20),Jx(550,"-"),sg(),Sl(551,"td",21)(552,"em")(553,"strong"),Jx(554,"(opcional)"),sg()(),Sl(555,"p"),Jx(556,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),sg()()(),Sl(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),Jx(561," p-label"),Wl(562,"br"),sg()()(),Sl(563,"td",18)(564,"code",22),Jx(565,"string"),sg()(),Sl(566,"td",20),Jx(567,"-"),sg(),Sl(568,"td",21)(569,"em")(570,"strong"),Jx(571,"(opcional)"),sg()(),Sl(572,"p"),Jx(573,"R\xF3tulo do campo."),sg()()(),Sl(574,"tr",14)(575,"td",15)(576,"div",16)(577,"span",17),Jx(578," p-label-text-wrap"),Wl(579,"br"),sg()()(),Sl(580,"td",18)(581,"code",19),Jx(582,"boolean"),sg()(),Sl(583,"td",20)(584,"p")(585,"code"),Jx(586,"false"),sg()()(),Sl(587,"td",21)(588,"em")(589,"strong"),Jx(590,"(opcional)"),sg()(),Sl(591,"p"),Jx(592,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(593,"code"),Jx(594,"p-label"),sg(),Jx(595,"."),sg()()(),Sl(596,"tr",14)(597,"td",15)(598,"div",16)(599,"span",17),Jx(600," p-loading"),Wl(601,"br"),sg()()(),Sl(602,"td",18)(603,"code",19),Jx(604,"boolean "),sg(),Sl(605,"code",22),Jx(606," string"),sg()(),Sl(607,"td",20)(608,"p")(609,"code"),Jx(610,"false"),sg()()(),Sl(611,"td",21)(612,"em")(613,"strong"),Jx(614,"(opcional)"),sg()(),Sl(615,"p"),Jx(616,"Exibe um \xEDcone de carregamento no lado direito do campo."),sg()()(),Sl(617,"tr",14)(618,"td",15)(619,"div",16)(620,"span",17),Jx(621," p-locale"),Wl(622,"br"),sg()()(),Sl(623,"td",18)(624,"code",22),Jx(625,"string"),sg()(),Sl(626,"td",20),Jx(627,"-"),sg(),Sl(628,"td",21)(629,"em")(630,"strong"),Jx(631,"(opcional)"),sg()(),Sl(632,"p"),Jx(633,"Idioma do componente."),sg(),Sl(634,"blockquote")(635,"p"),Jx(636,"O locale padr\xE3o ser\xE1 recuperado com base no "),Sl(637,"a",26)(638,"code"),Jx(639,"PoI18nService"),sg()(),Jx(640," ou "),Sl(641,"em"),Jx(642,"browser"),sg(),Jx(643,"."),sg()()()(),Sl(644,"tr",14)(645,"td",15)(646,"div",16)(647,"span",17),Jx(648," p-max-date"),Wl(649,"br"),sg()()(),Sl(650,"td",18)(651,"code",22),Jx(652,"string "),sg(),Sl(653,"code",27),Jx(654," Date"),sg()(),Sl(655,"td",20),Jx(656,"-"),sg(),Sl(657,"td",21)(658,"em")(659,"strong"),Jx(660,"(opcional)"),sg()(),Sl(661,"p"),Jx(662,"Define uma data m\xE1xima para o "),Sl(663,"code"),Jx(664,"po-datetimepicker"),sg(),Jx(665,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),sg(),Sl(666,"p"),Jx(667,"Aceita os formatos:"),sg(),Sl(668,"ul")(669,"li")(670,"code"),Jx(671,"Date"),sg(),Jx(672," object: "),Sl(673,"code"),Jx(674,"new Date(2026, 4, 31)"),sg()(),Sl(675,"li"),Jx(676,"ISO string: "),Sl(677,"code"),Jx(678,"'2026-05-31'"),sg()(),Sl(679,"li"),Jx(680,"ISO com hora: "),Sl(681,"code"),Jx(682,"'2026-05-31T23:59:59-03:00'"),sg()()()()(),Sl(683,"tr",14)(684,"td",15)(685,"div",16)(686,"span",17),Jx(687," p-max-time"),Wl(688,"br"),sg()()(),Sl(689,"td",18)(690,"code",22),Jx(691,"string"),sg()(),Sl(692,"td",20),Jx(693,"-"),sg(),Sl(694,"td",21)(695,"em")(696,"strong"),Jx(697,"(opcional)"),sg()(),Sl(698,"p"),Jx(699,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),sg(),Sl(700,"p"),Jx(701,"Formato aceito: "),Sl(702,"code"),Jx(703,"HH:mm"),sg(),Jx(704," ou "),Sl(705,"code"),Jx(706,"HH:mm:ss"),sg(),Jx(707,"."),sg()()(),Sl(708,"tr",14)(709,"td",15)(710,"div",16)(711,"span",17),Jx(712," p-min-date"),Wl(713,"br"),sg()()(),Sl(714,"td",18)(715,"code",22),Jx(716,"string "),sg(),Sl(717,"code",27),Jx(718," Date"),sg()(),Sl(719,"td",20),Jx(720,"-"),sg(),Sl(721,"td",21)(722,"em")(723,"strong"),Jx(724,"(opcional)"),sg()(),Sl(725,"p"),Jx(726,"Define uma data m\xEDnima para o "),Sl(727,"code"),Jx(728,"po-datetimepicker"),sg(),Jx(729,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),sg(),Sl(730,"p"),Jx(731,"Aceita os formatos:"),sg(),Sl(732,"ul")(733,"li")(734,"code"),Jx(735,"Date"),sg(),Jx(736," object: "),Sl(737,"code"),Jx(738,"new Date(2026, 0, 1)"),sg()(),Sl(739,"li"),Jx(740,"ISO string: "),Sl(741,"code"),Jx(742,"'2026-01-01'"),sg()(),Sl(743,"li"),Jx(744,"ISO com hora: "),Sl(745,"code"),Jx(746,"'2026-01-01T00:00:00-03:00'"),sg()()()()(),Sl(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),Jx(751," p-min-time"),Wl(752,"br"),sg()()(),Sl(753,"td",18)(754,"code",22),Jx(755,"string"),sg()(),Sl(756,"td",20),Jx(757,"-"),sg(),Sl(758,"td",21)(759,"em")(760,"strong"),Jx(761,"(opcional)"),sg()(),Sl(762,"p"),Jx(763,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),sg(),Sl(764,"p"),Jx(765,"Formato aceito: "),Sl(766,"code"),Jx(767,"HH:mm"),sg(),Jx(768," ou "),Sl(769,"code"),Jx(770,"HH:mm:ss"),sg(),Jx(771,"."),sg()()(),Sl(772,"tr",14)(773,"td",15)(774,"div",16)(775,"span",17),Jx(776," p-minute-interval"),Wl(777,"br"),sg()()(),Sl(778,"td",18)(779,"code",28),Jx(780,"number"),sg()(),Sl(781,"td",20)(782,"p")(783,"code"),Jx(784,"5"),sg()()(),Sl(785,"td",21)(786,"em")(787,"strong"),Jx(788,"(opcional)"),sg()(),Sl(789,"p"),Jx(790,"Define o intervalo entre os minutos exibidos no painel do timer."),sg()()(),Sl(791,"tr",14)(792,"td",15)(793,"div",16)(794,"span",17),Jx(795," name"),Wl(796,"br"),sg()()(),Sl(797,"td",18)(798,"code",22),Jx(799,"string"),sg()(),Sl(800,"td",20),Jx(801,"-"),sg(),Sl(802,"td",21)(803,"em")(804,"strong"),Jx(805,"(opcional)"),sg()(),Sl(806,"p"),Jx(807,"Nome do componente."),sg()()(),Sl(808,"tr",14)(809,"td",15)(810,"div",16)(811,"span",17),Jx(812," p-no-autocomplete"),Wl(813,"br"),sg()()(),Sl(814,"td",18)(815,"code",19),Jx(816,"boolean "),sg(),Sl(817,"code",22),Jx(818," string"),sg()(),Sl(819,"td",20)(820,"p")(821,"code"),Jx(822,"false"),sg()()(),Sl(823,"td",21)(824,"em")(825,"strong"),Jx(826,"(opcional)"),sg()(),Sl(827,"p"),Jx(828,"Define a propriedade nativa "),Sl(829,"code"),Jx(830,"autocomplete"),sg(),Jx(831," do campo como "),Sl(832,"code"),Jx(833,"off"),sg(),Jx(834,"."),sg()()(),Sl(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),Jx(839," (p-blur)"),Wl(840,"br"),sg()()(),Sl(841,"td",18)(842,"code",25),Jx(843,"EventEmitter"),sg()(),Sl(844,"td",20),Jx(845,"-"),sg(),Sl(846,"td",21)(847,"em")(848,"strong"),Jx(849,"(opcional)"),sg()(),Sl(850,"p"),Jx(851,"Evento disparado ao sair do campo (blur)."),sg()()(),Sl(852,"tr",14)(853,"td",15)(854,"div",23)(855,"span",24),Jx(856," (p-change)"),Wl(857,"br"),sg()()(),Sl(858,"td",18)(859,"code",25),Jx(860,"EventEmitter"),sg()(),Sl(861,"td",20),Jx(862,"-"),sg(),Sl(863,"td",21)(864,"em")(865,"strong"),Jx(866,"(opcional)"),sg()(),Sl(867,"p"),Jx(868,"Evento disparado ao alterar valor do campo."),sg()()(),Sl(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),Jx(873," p-optional"),Wl(874,"br"),sg()()(),Sl(875,"td",18)(876,"code",19),Jx(877,"boolean"),sg()(),Sl(878,"td",20)(879,"p")(880,"code"),Jx(881,"false"),sg()()(),Sl(882,"td",21)(883,"em")(884,"strong"),Jx(885,"(opcional)"),sg()(),Sl(886,"p"),Jx(887,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg()()(),Sl(888,"tr",14)(889,"td",15)(890,"div",16)(891,"span",17),Jx(892," p-placeholder"),Wl(893,"br"),sg()()(),Sl(894,"td",18)(895,"code",22),Jx(896,"string"),sg()(),Sl(897,"td",20),Jx(898,"-"),sg(),Sl(899,"td",21)(900,"em")(901,"strong"),Jx(902,"(opcional)"),sg()(),Sl(903,"p"),Jx(904,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Sl(905,"tr",14)(906,"td",15)(907,"div",16)(908,"span",17),Jx(909," p-helper"),Wl(910,"br"),sg()()(),Sl(911,"td",18)(912,"code",29),Jx(913,"PoHelperOptions "),sg(),Sl(914,"code",22),Jx(915," string"),sg()(),Sl(916,"td",20),Jx(917,"-"),sg(),Sl(918,"td",21)(919,"em")(920,"strong"),Jx(921,"(opcional)"),sg()(),Sl(922,"p"),Jx(923,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),sg(),Sl(924,"blockquote")(925,"p"),Jx(926,"Para mais informa\xE7\xF5es acesse: "),Sl(927,"a",30),Jx(928,"https://po-ui.io/documentation/po-helper"),sg(),Jx(929,"."),sg()()()(),Sl(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),Jx(934," p-readonly"),Wl(935,"br"),sg()()(),Sl(936,"td",18)(937,"code",19),Jx(938,"boolean "),sg(),Sl(939,"code",22),Jx(940," string"),sg()(),Sl(941,"td",20)(942,"p")(943,"code"),Jx(944,"false"),sg()()(),Sl(945,"td",21)(946,"em")(947,"strong"),Jx(948,"(opcional)"),sg()(),Sl(949,"p"),Jx(950,"Torna o componente somente leitura."),sg()()(),Sl(951,"tr",14)(952,"td",15)(953,"div",16)(954,"span",17),Jx(955," p-required"),Wl(956,"br"),sg()()(),Sl(957,"td",18)(958,"code",19),Jx(959,"boolean "),sg(),Sl(960,"code",22),Jx(961," string"),sg()(),Sl(962,"td",20)(963,"p")(964,"code"),Jx(965,"false"),sg()()(),Sl(966,"td",21)(967,"em")(968,"strong"),Jx(969,"(opcional)"),sg()(),Sl(970,"p"),Jx(971,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Sl(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),Jx(976," p-second-interval"),Wl(977,"br"),sg()()(),Sl(978,"td",18)(979,"code",28),Jx(980,"number"),sg()(),Sl(981,"td",20)(982,"p")(983,"code"),Jx(984,"1"),sg()()(),Sl(985,"td",21)(986,"em")(987,"strong"),Jx(988,"(opcional)"),sg()(),Sl(989,"p"),Jx(990,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),Sl(991,"code"),Jx(992,"p-show-seconds"),sg(),Jx(993," est\xE1 ativo."),sg()()(),Sl(994,"tr",14)(995,"td",15)(996,"div",16)(997,"span",17),Jx(998," p-required-field-error-message"),Wl(999,"br"),sg()()(),Sl(1e3,"td",18)(1001,"code",19),Jx(1002,"boolean"),sg()(),Sl(1003,"td",20)(1004,"p")(1005,"code"),Jx(1006,"false"),sg()()(),Sl(1007,"td",21)(1008,"em")(1009,"strong"),Jx(1010,"(opcional)"),sg()(),Sl(1011,"p"),Jx(1012,"Exibe a mensagem setada na propriedade "),Sl(1013,"code"),Jx(1014,"p-error-pattern"),sg(),Jx(1015," se o campo estiver vazio e for requerido."),sg(),Sl(1016,"blockquote")(1017,"p"),Jx(1018,"Necess\xE1rio que a propriedade "),Sl(1019,"code"),Jx(1020,"p-required"),sg(),Jx(1021," esteja habilitada."),sg()()()(),Sl(1022,"tr",14)(1023,"td",15)(1024,"div",16)(1025,"span",17),Jx(1026," p-show-required"),Wl(1027,"br"),sg()()(),Sl(1028,"td",18)(1029,"code",19),Jx(1030,"boolean"),sg()(),Sl(1031,"td",20)(1032,"p")(1033,"code"),Jx(1034,"false"),sg()()(),Sl(1035,"td",21)(1036,"em")(1037,"strong"),Jx(1038,"(opcional)"),sg()(),Sl(1039,"p"),Jx(1040,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg()()(),Sl(1041,"tr",14)(1042,"td",15)(1043,"div",16)(1044,"span",17),Jx(1045," p-show-seconds"),Wl(1046,"br"),sg()()(),Sl(1047,"td",18)(1048,"code",19),Jx(1049,"boolean"),sg()(),Sl(1050,"td",20)(1051,"p")(1052,"code"),Jx(1053,"false"),sg()()(),Sl(1054,"td",21)(1055,"em")(1056,"strong"),Jx(1057,"(opcional)"),sg()(),Sl(1058,"p"),Jx(1059,"Exibe a coluna de segundos no painel de sele\xE7\xE3o do timer."),sg()()(),Sl(1060,"tr",14)(1061,"td",15)(1062,"div",16)(1063,"span",17),Jx(1064," p-size"),Wl(1065,"br"),sg()()(),Sl(1066,"td",18)(1067,"code",22),Jx(1068,"string"),sg()(),Sl(1069,"td",20)(1070,"p")(1071,"code"),Jx(1072,"medium"),sg()()(),Sl(1073,"td",21)(1074,"em")(1075,"strong"),Jx(1076,"(opcional)"),sg()(),Sl(1077,"p"),Jx(1078,"Define o tamanho do componente:"),sg(),Sl(1079,"ul")(1080,"li")(1081,"code"),Jx(1082,"small"),sg(),Jx(1083,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(1084,"li")(1085,"code"),Jx(1086,"medium"),sg(),Jx(1087,": altura do input como 44px."),sg()()()(),Sl(1088,"tr",14)(1089,"td",15)(1090,"div",16)(1091,"span",17),Jx(1092," p-format-time"),Wl(1093,"br"),sg()()(),Sl(1094,"td",18)(1095,"code",31),Jx(1096,"PoTimerFormat"),sg()(),Sl(1097,"td",20)(1098,"p"),Jx(1099,"Determinado pelo locale"),sg()(),Sl(1100,"td",21)(1101,"em")(1102,"strong"),Jx(1103,"(opcional)"),sg()(),Sl(1104,"p"),Jx(1105,"Define o formato de exibi\xE7\xE3o do timer."),sg(),Sl(1106,"p"),Jx(1107,"Valores v\xE1lidos:"),sg(),Sl(1108,"ul")(1109,"li")(1110,"code"),Jx(1111,"24"),sg(),Jx(1112,": formato de 24 horas (padr\xE3o para pt, es, ru)"),sg(),Sl(1113,"li")(1114,"code"),Jx(1115,"12"),sg(),Jx(1116,": formato de 12 horas com indicador AM/PM (padr\xE3o para en)"),sg()(),Sl(1117,"p"),Jx(1118,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),sg(),Sl(1119,"ul")(1120,"li")(1121,"code"),Jx(1122,"en"),sg(),Jx(1123," \u2192 12h (AM/PM)"),sg(),Sl(1124,"li")(1125,"code"),Jx(1126,"pt"),sg(),Jx(1127,", "),Sl(1128,"code"),Jx(1129,"es"),sg(),Jx(1130,", "),Sl(1131,"code"),Jx(1132,"ru"),sg(),Jx(1133," \u2192 24h"),sg()()()()(),Sl(1134,"h3",10),Jx(1135,"M\xE9todos"),sg(),Sl(1136,"table",32)(1137,"tr",14)(1138,"th",33)(1139,"div",16)(1140,"h4")(1141,"span",17),Jx(1142," showAdditionalHelp "),sg()()()()(),Sl(1143,"tr",21)(1144,"td",21)(1145,"p"),Jx(1146,"M\xE9todo que exibe "),Sl(1147,"code"),Jx(1148,"p-helper"),sg(),Jx(1149," ou executa a a\xE7\xE3o definida em "),Sl(1150,"code"),Jx(1151,"p-helper{eventOnClick}"),sg(),Jx(1152,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Sl(1153,"code"),Jx(1154,"p-keydown"),sg(),Jx(1155,"."),sg(),Sl(1156,"blockquote")(1157,"p"),Jx(1158,"Exibe ou oculta o conte\xFAdo do componente "),Sl(1159,"code"),Jx(1160,"po-helper"),sg(),Jx(1161," quando o componente estiver com foco."),sg()(),Sl(1162,"pre")(1163,"code"),Jx(1164,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),sg()(),Sl(1165,"pre")(1166,"code"),Jx(1167,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Wl(1168,"br"),sg());},dependencies:[Ga],encapsulation:2})}return l})();var Ce=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(wn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Datetimepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-datetimepicker-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-datetimepicker-basic-view")(6,"sample-po-datetimepicker-labs-view")(7,"sample-po-datetimepicker-12h-seconds-view")(8,"sample-po-datetimepicker-scheduling-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ce,Se,he,fe,xe],encapsulation:2})}return l})();var Fe=[{path:"",component:Ce}],ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[pL.forChild(Fe),pL]})}return l})();var Et=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[ar,ve]})}return l})();export{Et as DocPoDatetimepickerModule};