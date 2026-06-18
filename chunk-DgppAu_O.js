import {f as fe$1,u as ue,a as ar,p as pL,C,c3 as Xn,b as wn,U as Un,d6 as Z0,d as f,c5 as zde,aW as Yp,cW as xue,M as Wl,an as bO,aH as Ga,b8 as Gme,b9 as Qme,H as Sl,J as Jx,O as sg,a1 as ht,z as Vp,ar as Hx,au as fg,T as tw,bs as dN,aX as J9,aF as K9,aY as X9,aG as Dk,aZ as vk,b0 as Qt,b1 as mv,c4 as x3,b4 as F3,cp as Uhe,c8 as Pde,c9 as Qhe,aB as Ex,aM as Ew,aN as JA,aO as Dw,aP as t0,bD as Ade,aJ as Ghe,bd as xx,av as ql,aw as lo,ax as uo,a3 as pNe,aD as Xy,aT as tN,aE as Qy}from'./main-QNYCBKHQ.js';var se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","timepicker","p-label","PO Timepicker"]],template:function(r,i){r&1&&Wl(0,"po-timepicker",0);},dependencies:[xue],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Timepicker Basic"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-timepicker-basic"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Te,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,se],encapsulation:2})}return l})();var ge=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:"HourMinute",value:Z0.HourMinute},{label:"HourMinuteSecond",value:Z0.HourMinuteSecond}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"},{value:"appendInBody",label:"Append In Body"}];formatOptions=[{label:"24",value:"24"},{label:"12",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-labs"]],standalone:false,decls:24,vars:49,consts:[["f","ngForm"],["name","timepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-disabled","p-error-pattern","p-format","p-helper","p-help","p-model-format","p-label","p-locale","p-max-time","p-min-time","p-minute-interval","p-second-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-show-seconds","p-label-text-wrap","p-loading","p-compact-label","p-append-in-body","p-error-limit","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helper","p-clean","","p-label","Helper",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","modelFormat","p-columns","4","p-label","Model Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=Ex();Sl(0,"po-timepicker",1),Ew("ngModelChange",function(o){return Xy(s),tN(i.timepicker,o)||(i.timepicker=o),Qy(o)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),JA(),Wl(1,"po-divider"),Sl(2,"div",2),Wl(3,"po-info",3)(4,"po-info",4),sg(),Wl(5,"po-divider"),Sl(6,"form",null,0)(8,"po-input",5),Ew("ngModelChange",function(o){return Xy(s),tN(i.label,o)||(i.label=o),Qy(o)}),sg(),JA(),Sl(9,"po-input",6),Ew("ngModelChange",function(o){return Xy(s),tN(i.help,o)||(i.help=o),Qy(o)}),sg(),JA(),Sl(10,"po-input",7),Ew("ngModelChange",function(o){return Xy(s),tN(i.helper,o)||(i.helper=o),Qy(o)}),sg(),JA(),Sl(11,"po-input",8),Ew("ngModelChange",function(o){return Xy(s),tN(i.placeholder,o)||(i.placeholder=o),Qy(o)}),sg(),JA(),Sl(12,"po-input",9),Ew("ngModelChange",function(o){return Xy(s),tN(i.errorPattern,o)||(i.errorPattern=o),Qy(o)}),sg(),JA(),Sl(13,"po-timepicker",10),Ew("ngModelChange",function(o){return Xy(s),tN(i.minTime,o)||(i.minTime=o),Qy(o)}),sg(),JA(),Sl(14,"po-timepicker",11),Ew("ngModelChange",function(o){return Xy(s),tN(i.maxTime,o)||(i.maxTime=o),Qy(o)}),sg(),JA(),Sl(15,"po-number",12),Ew("ngModelChange",function(o){return Xy(s),tN(i.minuteInterval,o)||(i.minuteInterval=o),Qy(o)}),sg(),JA(),Sl(16,"po-number",13),Ew("ngModelChange",function(o){return Xy(s),tN(i.secondInterval,o)||(i.secondInterval=o),Qy(o)}),sg(),JA(),Sl(17,"po-checkbox-group",14),Ew("ngModelChange",function(o){return Xy(s),tN(i.properties,o)||(i.properties=o),Qy(o)}),sg(),JA(),Sl(18,"po-radio-group",15),Ew("ngModelChange",function(o){return Xy(s),tN(i.locale,o)||(i.locale=o),Qy(o)}),sg(),JA(),Sl(19,"po-radio-group",16),Ew("ngModelChange",function(o){return Xy(s),tN(i.format,o)||(i.format=o),Qy(o)}),sg(),JA(),Sl(20,"po-radio-group",17),Ew("ngModelChange",function(o){return Xy(s),tN(i.modelFormat,o)||(i.modelFormat=o),Qy(o)}),sg(),JA(),Sl(21,"po-radio-group",18),Ew("ngModelChange",function(o){return Xy(s),tN(i.size,o)||(i.size=o),Qy(o)}),sg(),JA(),Sl(22,"div",2)(23,"po-button",19),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(Dw("ngModel",i.timepicker),tw("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-format",i.format)("p-helper",i.helper)("p-help",i.help)("p-model-format",i.modelFormat)("p-label",i.label)("p-locale",i.locale)("p-max-time",i.maxTime)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-second-interval",i.secondInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-append-in-body",i.properties==null?null:i.properties.includes("appendInBody"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-size",i.size),t0(),Vp(3),tw("p-value",i.timepicker),Vp(),tw("p-value",i.event),Vp(4),Dw("ngModel",i.label),t0(),Vp(),Dw("ngModel",i.help),t0(),Vp(),Dw("ngModel",i.helper),t0(),Vp(),Dw("ngModel",i.placeholder),t0(),Vp(),Dw("ngModel",i.errorPattern),t0(),Vp(),Dw("ngModel",i.minTime),t0(),Vp(),Dw("ngModel",i.maxTime),t0(),Vp(),Dw("ngModel",i.minuteInterval),t0(),Vp(),Dw("ngModel",i.secondInterval),t0(),Vp(),Dw("ngModel",i.properties),tw("p-options",i.propertiesOptions),t0(),Vp(),Dw("ngModel",i.locale),tw("p-options",i.localeOptions),t0(),Vp(),Dw("ngModel",i.format),tw("p-options",i.formatOptions),t0(),Vp(),Dw("ngModel",i.modelFormat),tw("p-options",i.modelFormatOptions),t0(),Vp(),Dw("ngModel",i.size),tw("p-options",i.sizeOptions),t0());},dependencies:[J9,K9,X9,Dk,vk,Qt,mv,x3,F3,Uhe,Pde,xue,Qhe],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Timepicker Labs"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<po-timepicker
  class="po-sm-12"
  name="timepicker"
  [(ngModel)]="timepicker"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-format]="format"
  [p-helper]="helper"
  [p-help]="help"
  [p-model-format]="modelFormat"
  [p-label]="label"
  [p-locale]="locale"
  [p-max-time]="maxTime"
  [p-min-time]="minTime"
  [p-minute-interval]="minuteInterval"
  [p-second-interval]="secondInterval"
  [p-no-autocomplete]="$safeNavigationMigration(properties?.includes('noAutocomplete'))"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-show-seconds]="properties.includes('showSeconds')"
  [p-label-text-wrap]="$safeNavigationMigration(properties?.includes('labelTextWrap'))"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="$safeNavigationMigration(properties?.includes('compactLabel'))"
  [p-append-in-body]="$safeNavigationMigration(properties?.includes('appendInBody'))"
  [p-error-limit]="$safeNavigationMigration(properties?.includes('errorLimit'))"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-timepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="timepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helper" [(ngModel)]="helper" p-clean p-label="Helper"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-timepicker class="po-md-6" name="minTime" [(ngModel)]="minTime" p-clean p-label="Min Time"> </po-timepicker>

  <po-timepicker class="po-md-6" name="maxTime" [(ngModel)]="maxTime" p-clean p-label="Max Time"> </po-timepicker>

  <po-number class="po-md-6" name="minuteInterval" [(ngModel)]="minuteInterval" p-clean p-label="Minute Interval">
  </po-number>

  <po-number class="po-md-6" name="secondInterval" [(ngModel)]="secondInterval" p-clean p-label="Second Interval">
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
    name="modelFormat"
    [(ngModel)]="modelFormat"
    p-columns="4"
    p-label="Model Format"
    [p-options]="modelFormatOptions"
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
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoTimepickerModelFormat } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-timepicker-labs',
  templateUrl: './sample-po-timepicker-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerLabsComponent implements OnInit {
  timepicker: string;
  event: string;
  errorPattern: string;
  format: string;
  help: string;
  helper: string;
  modelFormat: string;
  label: string;
  locale: string;
  maxTime: string;
  minTime: string;
  minuteInterval: number;
  secondInterval: number;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly modelFormatOptions: Array<PoRadioGroupOption> = [
    { label: 'HourMinute', value: PoTimepickerModelFormat.HourMinute },
    { label: 'HourMinuteSecond', value: PoTimepickerModelFormat.HourMinuteSecond }
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
    { value: 'showSeconds', label: 'Show Seconds' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'appendInBody', label: 'Append In Body' }
  ];

  public readonly formatOptions: Array<PoRadioGroupOption> = [
    { label: '24', value: '24' },
    { label: '12', value: '12' }
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
    this.timepicker = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.helper = undefined;
    this.modelFormat = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.maxTime = undefined;
    this.minTime = undefined;
    this.minuteInterval = undefined;
    this.secondInterval = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.size = 'medium';
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-timepicker-labs"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,we,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,ge],encapsulation:2})}return l})();var Pe=["formScheduling"],Se=(()=>{class l{poDialog=f(zde);poNotification=f(Yp);formScheduling;title="";date=new Date;startTime="";endTime="";room="";roomOptions=[{value:"sala-a",label:"Sala A"},{value:"sala-b",label:"Sala B"},{value:"sala-c",label:"Sala C"},{value:"auditorio",label:"Audit\xF3rio"}];schedule(){let d=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:"Confirmar Agendamento",message:d,confirm:()=>{this.poNotification.success("Agendamento confirmado com sucesso!"),this.formScheduling.reset({date:"",room:""});},cancel:()=>{this.poNotification.warning("Agendamento cancelado.");}});}getFormatedDate(d){return d&&d.slice(0,10)}getRoomLabel(){let d=this.roomOptions.find(r=>r.value===this.room);return d?d.label:this.room}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&ql(Pe,7),r&2){let s;lo(s=uo())&&(i.formScheduling=s.first);}},standalone:false,decls:11,vars:9,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","title","p-label","T\xEDtulo do agendamento","p-placeholder","Ex: Reuni\xE3o de planejamento","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","date","p-clean","","p-format","dd/mm/yyyy","p-label","Data","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","startTime","p-label","Hor\xE1rio de in\xEDcio","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","endTime","p-label","Hor\xE1rio de t\xE9rmino","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","room","p-label","Sala","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","scheduleButton","p-label","Agendar",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let s=Ex();Sl(0,"form",null,0)(2,"div",1)(3,"po-input",2),Ew("ngModelChange",function(o){return Xy(s),tN(i.title,o)||(i.title=o),Qy(o)}),sg(),JA(),Sl(4,"po-datepicker",3),Ew("ngModelChange",function(o){return Xy(s),tN(i.date,o)||(i.date=o),Qy(o)}),sg(),JA(),sg(),Sl(5,"div",1)(6,"po-timepicker",4),Ew("ngModelChange",function(o){return Xy(s),tN(i.startTime,o)||(i.startTime=o),Qy(o)}),sg(),JA(),Sl(7,"po-timepicker",5),Ew("ngModelChange",function(o){return Xy(s),tN(i.endTime,o)||(i.endTime=o),Qy(o)}),sg(),JA(),Sl(8,"po-select",6),Ew("ngModelChange",function(o){return Xy(s),tN(i.room,o)||(i.room=o),Qy(o)}),sg(),JA(),sg(),Sl(9,"div",1)(10,"po-button",7),ht("p-click",function(){return i.schedule()}),sg()()();}if(r&2){let s=xx(1);Vp(3),Dw("ngModel",i.title),t0(),Vp(),Dw("ngModel",i.date),t0(),Vp(2),Dw("ngModel",i.startTime),tw("p-show-required",true),t0(),Vp(),Dw("ngModel",i.endTime),tw("p-show-required",true),t0(),Vp(),Dw("ngModel",i.room),tw("p-options",i.roomOptions),t0(),Vp(2),tw("p-disabled",s.invalid);}},dependencies:[J9,K9,X9,Dk,vk,Qt,Ade,F3,Ghe,xue],encapsulation:2,changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),be=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-scheduling-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Timepicker - Scheduling"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<form #formScheduling="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="title"
      [(ngModel)]="title"
      p-label="T\xEDtulo do agendamento"
      p-placeholder="Ex: Reuni\xE3o de planejamento"
      p-required
    >
    </po-input>

    <po-datepicker
      class="po-md-6"
      name="date"
      [(ngModel)]="date"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Data"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-timepicker
      class="po-md-4"
      name="startTime"
      [(ngModel)]="startTime"
      p-label="Hor\xE1rio de in\xEDcio"
      p-placeholder="HH:mm"
      p-clean
      p-required
      p-min-time="08:00"
      p-max-time="18:00"
      p-error-pattern="Hor\xE1rio fora do expediente (08:00 - 18:00)"
      [p-show-required]="true"
    >
    </po-timepicker>

    <po-timepicker
      class="po-md-4"
      name="endTime"
      [(ngModel)]="endTime"
      p-label="Hor\xE1rio de t\xE9rmino"
      p-placeholder="HH:mm"
      p-clean
      p-required
      p-min-time="08:00"
      p-max-time="18:00"
      p-error-pattern="Hor\xE1rio fora do expediente (08:00 - 18:00)"
      [p-show-required]="true"
    >
    </po-timepicker>

    <po-select class="po-md-4" name="room" [(ngModel)]="room" p-label="Sala" p-required [p-options]="roomOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="scheduleButton"
      p-label="Agendar"
      [p-disabled]="formScheduling.invalid"
      (p-click)="schedule()"
    >
    </po-button>
  </div>
</form>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-timepicker-scheduling',
  templateUrl: './sample-po-timepicker-scheduling.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerSchedulingComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formScheduling', { static: true }) formScheduling: UntypedFormControl;

  title: string = '';
  date: string = <any>new Date();
  startTime: string = '';
  endTime: string = '';
  room: string = '';

  public readonly roomOptions: Array<PoSelectOption> = [
    { value: 'sala-a', label: 'Sala A' },
    { value: 'sala-b', label: 'Sala B' },
    { value: 'sala-c', label: 'Sala C' },
    { value: 'auditorio', label: 'Audit\xF3rio' }
  ];

  schedule() {
    const message = \`Deseja confirmar o agendamento "\${this.title}" no dia \${this.getFormatedDate(this.date)} das \${this.startTime} \xE0s \${this.endTime} na \${this.getRoomLabel()}?\`;

    this.poDialog.confirm({
      title: 'Confirmar Agendamento',
      message,
      confirm: () => {
        this.poNotification.success('Agendamento confirmado com sucesso!');

        this.formScheduling.reset({
          date: '',
          room: ''
        });
      },
      cancel: () => {
        this.poNotification.warning('Agendamento cancelado.');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }

  private getRoomLabel(): string {
    const option = this.roomOptions.find(o => o.value === this.room);
    return option ? option.label : this.room;
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-timepicker-scheduling"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,He,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Se],encapsulation:2})}return l})();var Ee=(()=>{class l{poNotification=f(Yp);openTime="08:00";closeTime="18:00";lunchStart="12:00";lunchEnd="13:00";save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`);}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-business-hours"]],standalone:false,decls:8,vars:14,consts:[[1,"po-row"],["name","openTime","p-label","Abertura","p-clean","","p-min-time","06:00",1,"po-md-6",3,"ngModelChange","ngModel","p-max-time","p-minute-interval"],["name","closeTime","p-label","Fechamento","p-clean","","p-max-time","23:00",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-minute-interval"],["name","lunchStart","p-label","In\xEDcio do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["name","lunchEnd","p-label","Fim do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["p-label","Salvar","p-kind","primary",1,"po-md-3","po-offset-md-9",3,"p-click"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"po-timepicker",1),Ew("ngModelChange",function(p){return tN(i.openTime,p)||(i.openTime=p),p}),sg(),JA(),Sl(2,"po-timepicker",2),Ew("ngModelChange",function(p){return tN(i.closeTime,p)||(i.closeTime=p),p}),sg(),JA(),sg(),Sl(3,"div",0)(4,"po-timepicker",3),Ew("ngModelChange",function(p){return tN(i.lunchStart,p)||(i.lunchStart=p),p}),sg(),JA(),Sl(5,"po-timepicker",4),Ew("ngModelChange",function(p){return tN(i.lunchEnd,p)||(i.lunchEnd=p),p}),sg(),JA(),sg(),Sl(6,"div",0)(7,"po-button",5),ht("p-click",function(){return i.save()}),sg()()),r&2&&(Vp(),Dw("ngModel",i.openTime),tw("p-max-time",i.lunchStart)("p-minute-interval",30),t0(),Vp(),Dw("ngModel",i.closeTime),tw("p-min-time",i.lunchEnd)("p-minute-interval",30),t0(),Vp(2),Dw("ngModel",i.lunchStart),tw("p-min-time",i.openTime)("p-max-time",i.lunchEnd)("p-minute-interval",15),t0(),Vp(),Dw("ngModel",i.lunchEnd),tw("p-min-time",i.lunchStart)("p-max-time",i.closeTime)("p-minute-interval",15),t0());},dependencies:[K9,Dk,Qt,xue],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-business-hours-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Wl(0,"br"),Sl(1,"blockquote",0)(2,"label",1),Jx(3,"PO Timepicker - Business Hours"),sg(),Sl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Wl(5,"span"),Jx(6),sg()(),Sl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Jx(12,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html"),sg(),Sl(13,"pre",7),Jx(14,`<div class="po-row">
  <po-timepicker
    class="po-md-6"
    name="openTime"
    [(ngModel)]="openTime"
    p-label="Abertura"
    p-clean
    p-min-time="06:00"
    [p-max-time]="lunchStart"
    [p-minute-interval]="30"
  >
  </po-timepicker>

  <po-timepicker
    class="po-md-6"
    name="closeTime"
    [(ngModel)]="closeTime"
    p-label="Fechamento"
    p-clean
    [p-min-time]="lunchEnd"
    p-max-time="23:00"
    [p-minute-interval]="30"
  >
  </po-timepicker>
</div>

<div class="po-row">
  <po-timepicker
    class="po-md-6"
    name="lunchStart"
    [(ngModel)]="lunchStart"
    p-label="In\xEDcio do almo\xE7o"
    p-clean
    [p-min-time]="openTime"
    [p-max-time]="lunchEnd"
    [p-minute-interval]="15"
  >
  </po-timepicker>

  <po-timepicker
    class="po-md-6"
    name="lunchEnd"
    [(ngModel)]="lunchEnd"
    p-label="Fim do almo\xE7o"
    p-clean
    [p-min-time]="lunchStart"
    [p-max-time]="closeTime"
    [p-minute-interval]="15"
  >
  </po-timepicker>
</div>

<div class="po-row">
  <po-button class="po-md-3 po-offset-md-9" p-label="Salvar" p-kind="primary" (p-click)="save()"> </po-button>
</div>
`),sg()()(),Sl(15,"po-tab",8)(16,"div")(17,"label",6),Jx(18,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts"),sg(),Sl(19,"pre",9),Jx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-timepicker-business-hours',
  templateUrl: './sample-po-timepicker-business-hours.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBusinessHoursComponent {
  private poNotification = inject(PoNotificationService);

  openTime: string = '08:00';
  closeTime: string = '18:00';
  lunchStart: string = '12:00';
  lunchEnd: string = '13:00';

  save() {
    this.poNotification.success(
      \`Hor\xE1rio comercial salvo: \${this.openTime} - \${this.closeTime} (Almo\xE7o: \${this.lunchStart} - \${this.lunchEnd})\`
    );
  }
}
`),sg()()()()(),Sl(21,"div",10),Wl(22,"sample-po-timepicker-business-hours"),sg(),Wl(23,"hr")),r&2&&(Vp(5),Hx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),tw("ngClass",dN(4,Be,i.hideSampleCodeTabs)));},dependencies:[bO,Ga,Gme,Qme,Ee],encapsulation:2})}return l})();var ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-doc"]],standalone:false,decls:1006,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Sl(0,"div",0)(1,"p",1)(2,"code"),Jx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Sl(4,"div",2)(5,"p"),Jx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Sl(7,"blockquote")(8,"p"),Jx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Sl(10,"code"),Jx(11,"FormsModule"),sg(),Jx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Sl(13,"code"),Jx(14,"ReactiveFormsModule"),sg(),Jx(15,", ambos nativos do Angular."),sg()()(),Sl(16,"h3",3),Jx(17,"Componente"),sg(),Sl(18,"h4",4)(19,"code",5),Jx(20,"PoTimepickerComponent"),sg()(),Sl(21,"div",2)(22,"p"),Jx(23,"O "),Sl(24,"code"),Jx(25,"po-timepicker"),sg(),Jx(26," \xE9 um componente para sele\xE7\xE3o de hor\xE1rio que permite a digita\xE7\xE3o e/ou sele\xE7\xE3o via painel flutuante."),sg(),Sl(27,"p"),Jx(28,"O formato de exibi\xE7\xE3o do hor\xE1rio pode ser de 24 horas ("),Sl(29,"code"),Jx(30,"HH:mm"),sg(),Jx(31,") ou 12 horas ("),Sl(32,"code"),Jx(33,"hh:mm AM/PM"),sg(),Jx(34,`),
e opcionalmente incluir segundos (`),Sl(35,"code"),Jx(36,"HH:mm:ss"),sg(),Jx(37,")."),sg(),Sl(38,"p"),Jx(39,"O valor de sa\xEDda segue o formato ISO 8601 para hor\xE1rios ("),Sl(40,"code"),Jx(41,"HH:mm"),sg(),Jx(42," ou "),Sl(43,"code"),Jx(44,"HH:mm:ss"),sg(),Jx(45,")."),sg(),Sl(46,"p")(47,"strong"),Jx(48,"Importante:"),sg()(),Sl(49,"ul")(50,"li"),Jx(51,"Caso o valor digitado seja inv\xE1lido, o "),Sl(52,"code"),Jx(53,"model"),sg(),Jx(54," receber\xE1 uma string vazia."),sg(),Sl(55,"li"),Jx(56,"Caso o "),Sl(57,"code"),Jx(58,"input"),sg(),Jx(59," esteja passando um "),Sl(60,"code"),Jx(61,"[(ngModel)]"),sg(),Jx(62,", mas n\xE3o tenha um "),Sl(63,"code"),Jx(64,"name"),sg(),Jx(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Sl(66,"code"),Jx(67,'[ngModelOptions]="{standalone: true}"'),sg(),Jx(68,")."),sg()(),Sl(69,"blockquote")(70,"p"),Jx(71,"N\xE3o esque\xE7a de importar o "),Sl(72,"code"),Jx(73,"FormsModule"),sg(),Jx(74," em seu m\xF3dulo, tal como para utilizar o "),Sl(75,"code"),Jx(76,"input default"),sg(),Jx(77,"."),sg()(),Sl(78,"h4"),Jx(79,"Tokens customiz\xE1veis"),sg(),Sl(80,"p"),Jx(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Sl(82,"code"),Jx(83,".po-input"),sg()(),Sl(84,"blockquote")(85,"p"),Jx(86,"Para maiores informa\xE7\xF5es, acesse o guia "),Sl(87,"a",6),Jx(88,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),Jx(89,"."),sg()(),Sl(90,"table")(91,"thead")(92,"tr")(93,"th"),Jx(94,"Propriedade"),sg(),Sl(95,"th"),Jx(96,"Descri\xE7\xE3o"),sg(),Sl(97,"th"),Jx(98,"Valor Padr\xE3o"),sg()()(),Sl(99,"tbody")(100,"tr")(101,"td")(102,"strong"),Jx(103,"Default Values"),sg()(),Wl(104,"td")(105,"td"),sg(),Sl(106,"tr")(107,"td")(108,"code"),Jx(109,"--font-family"),sg()(),Sl(110,"td"),Jx(111,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Sl(112,"td")(113,"code"),Jx(114,"var(--font-family-theme)"),sg()()(),Sl(115,"tr")(116,"td")(117,"code"),Jx(118,"--font-size"),sg()(),Sl(119,"td"),Jx(120,"Tamanho da fonte"),sg(),Sl(121,"td")(122,"code"),Jx(123,"var(--font-size-default)"),sg()()(),Sl(124,"tr")(125,"td")(126,"code"),Jx(127,"--text-color-placeholder"),sg()(),Sl(128,"td"),Jx(129,"Cor do texto placeholder"),sg(),Sl(130,"td")(131,"code"),Jx(132,"var(--color-neutral-light-30)"),sg()()(),Sl(133,"tr")(134,"td")(135,"code"),Jx(136,"--color"),sg()(),Sl(137,"td"),Jx(138,"Cor principal do timepicker"),sg(),Sl(139,"td")(140,"code"),Jx(141,"var(--color-neutral-dark-70)"),sg()()(),Sl(142,"tr")(143,"td")(144,"code"),Jx(145,"--background"),sg()(),Sl(146,"td"),Jx(147,"Cor de background"),sg(),Sl(148,"td")(149,"code"),Jx(150,"var(--color-neutral-light-05)"),sg()()(),Sl(151,"tr")(152,"td")(153,"code"),Jx(154,"--padding"),sg()(),Sl(155,"td"),Jx(156,"Preenchimento"),sg(),Sl(157,"td")(158,"code"),Jx(159,"0 0.5rem"),sg()()(),Sl(160,"tr")(161,"td")(162,"code"),Jx(163,"--text-color"),sg()(),Sl(164,"td"),Jx(165,"Cor do texto"),sg(),Sl(166,"td")(167,"code"),Jx(168,"var(--color-neutral-dark-90)"),sg()()(),Sl(169,"tr")(170,"td")(171,"code"),Jx(172,"--field-container-title-justify"),sg()(),Sl(173,"td"),Jx(174,"Alinhamento horizontal do t\xEDtulo ("),Sl(175,"code"),Jx(176,"justify-content"),sg(),Jx(177,")"),sg(),Sl(178,"td")(179,"code"),Jx(180,"space-between"),sg()()(),Sl(181,"tr")(182,"td")(183,"code"),Jx(184,"--field-container-title-flex"),sg()(),Sl(185,"td"),Jx(186,"Flex do t\xEDtulo ("),Sl(187,"code"),Jx(188,"flex"),sg(),Jx(189,")"),sg(),Sl(190,"td")(191,"code"),Jx(192,"1 auto"),sg()()(),Sl(193,"tr")(194,"td")(195,"strong"),Jx(196,"Hover"),sg()(),Wl(197,"td")(198,"td"),sg(),Sl(199,"tr")(200,"td")(201,"code"),Jx(202,"--color-hover"),sg()(),Sl(203,"td"),Jx(204,"Cor principal no estado hover"),sg(),Sl(205,"td")(206,"code"),Jx(207,"var(--color-brand-01-dark)"),sg()()(),Sl(208,"tr")(209,"td")(210,"code"),Jx(211,"--background-hover"),sg()(),Sl(212,"td"),Jx(213,"Cor de background no estado hover"),sg(),Sl(214,"td")(215,"code"),Jx(216,"var(--color-brand-01-lightest)"),sg()()(),Sl(217,"tr")(218,"td")(219,"strong"),Jx(220,"Focused"),sg()(),Wl(221,"td")(222,"td"),sg(),Sl(223,"tr")(224,"td")(225,"code"),Jx(226,"--color-focused"),sg()(),Sl(227,"td"),Jx(228,"Cor principal no estado de focus"),sg(),Sl(229,"td")(230,"code"),Jx(231,"var(--color-action-default)"),sg()()(),Sl(232,"tr")(233,"td")(234,"code"),Jx(235,"--outline-color-focused"),sg()(),Sl(236,"td"),Jx(237,"Cor do outline do estado de focus"),sg(),Sl(238,"td")(239,"code"),Jx(240,"var(--color-action-focus)"),sg()()(),Sl(241,"tr")(242,"td")(243,"strong"),Jx(244,"Disabled"),sg()(),Wl(245,"td")(246,"td"),sg(),Sl(247,"tr")(248,"td")(249,"code"),Jx(250,"--color-disabled"),sg()(),Sl(251,"td"),Jx(252,"Cor principal no estado disabled"),sg(),Sl(253,"td")(254,"code"),Jx(255,"var(--color-neutral-light-30)"),sg()()(),Sl(256,"tr")(257,"td")(258,"code"),Jx(259,"--background-disabled"),sg()(),Sl(260,"td"),Jx(261,"Cor de background no estado disabled"),sg(),Sl(262,"td")(263,"code"),Jx(264,"var(--color-neutral-light-20)"),sg()()(),Sl(265,"tr")(266,"td")(267,"code"),Jx(268,"--text-color-disabled"),sg()(),Sl(269,"td"),Jx(270,"Cor do texto no estado disabled"),sg(),Sl(271,"td")(272,"code"),Jx(273,"var(--color-neutral-dark-70)"),sg()()()()()(),Sl(274,"div",7)(275,"h4",8),Jx(276,"Seletor"),sg(),Sl(277,"pre",9),Jx(278,`<po-timepicker
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-format="PoTimerFormat"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-locale="string"
    p-max-time="string"
    p-min-time="string"
    p-minute-interval="number"
    p-model-format="PoTimepickerModelFormat"
    name="string"
    p-no-autocomplete="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-second-interval="number"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-show-seconds="boolean"
    p-size="string" >
</po-timepicker>
`),sg()(),Sl(279,"h4",10),Jx(280,"Propriedades"),sg(),Sl(281,"table",11)(282,"tr",12)(283,"th",13),Jx(284,"Nome"),sg(),Sl(285,"th",13),Jx(286,"Tipo"),sg(),Sl(287,"th",13),Jx(288,"Padr\xE3o"),sg(),Sl(289,"th",13),Jx(290,"Descri\xE7\xE3o"),sg()(),Sl(291,"tr",14)(292,"td",15)(293,"div",16)(294,"span",17),Jx(295," p-append-in-body"),Wl(296,"br"),sg()()(),Sl(297,"td",18)(298,"code",19),Jx(299,"boolean"),sg()(),Sl(300,"td",20)(301,"p")(302,"code"),Jx(303,"false"),sg()()(),Sl(304,"td",21)(305,"em")(306,"strong"),Jx(307,"(opcional)"),sg()(),Sl(308,"p"),Jx(309,"Define que o painel do timer ser\xE1 inclu\xEDdo no body da p\xE1gina."),sg()()(),Sl(310,"tr",14)(311,"td",15)(312,"div",16)(313,"span",17),Jx(314," p-auto-focus"),Wl(315,"br"),sg()()(),Sl(316,"td",18)(317,"code",19),Jx(318,"boolean"),sg()(),Sl(319,"td",20)(320,"p")(321,"code"),Jx(322,"false"),sg()()(),Sl(323,"td",21)(324,"em")(325,"strong"),Jx(326,"(opcional)"),sg()(),Sl(327,"p"),Jx(328,"Aplica foco no elemento ao ser iniciado."),sg()()(),Sl(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),Jx(333,"p-clean"),Wl(334,"br"),sg()()(),Sl(335,"td",18)(336,"code",19),Jx(337,"boolean"),sg()(),Sl(338,"td",20),Jx(339,"-"),sg(),Sl(340,"td",21)(341,"em")(342,"strong"),Jx(343,"(opcional)"),sg()(),Sl(344,"p"),Jx(345,"Habilita a\xE7\xE3o para limpar o campo."),sg()()(),Sl(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),Jx(350," p-compact-label"),Wl(351,"br"),sg()()(),Sl(352,"td",18)(353,"code",19),Jx(354,"boolean"),sg()(),Sl(355,"td",20)(356,"p")(357,"code"),Jx(358,"false"),sg()()(),Sl(359,"td",21)(360,"em")(361,"strong"),Jx(362,"(opcional)"),sg()(),Sl(363,"p"),Jx(364,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg()()(),Sl(365,"tr",14)(366,"td",15)(367,"div",16)(368,"span",17),Jx(369,"p-disabled"),Wl(370,"br"),sg()()(),Sl(371,"td",18)(372,"code",19),Jx(373,"boolean"),sg()(),Sl(374,"td",20),Jx(375,"-"),sg(),Sl(376,"td",21)(377,"em")(378,"strong"),Jx(379,"(opcional)"),sg()(),Sl(380,"p"),Jx(381,"Desabilita o campo."),sg()()(),Sl(382,"tr",14)(383,"td",15)(384,"div",16)(385,"span",17),Jx(386," p-error-limit"),Wl(387,"br"),sg()()(),Sl(388,"td",18)(389,"code",19),Jx(390,"boolean"),sg()(),Sl(391,"td",20)(392,"p")(393,"code"),Jx(394,"false"),sg()()(),Sl(395,"td",21)(396,"em")(397,"strong"),Jx(398,"(opcional)"),sg()(),Sl(399,"p"),Jx(400,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg()()(),Sl(401,"tr",14)(402,"td",15)(403,"div",16)(404,"span",17),Jx(405," p-error-pattern"),Wl(406,"br"),sg()()(),Sl(407,"td",18)(408,"code",22),Jx(409,"string"),sg()(),Sl(410,"td",20),Jx(411,"-"),sg(),Sl(412,"td",21)(413,"em")(414,"strong"),Jx(415,"(opcional)"),sg()(),Sl(416,"p"),Jx(417,"Mensagem apresentada quando o hor\xE1rio for inv\xE1lido ou fora do per\xEDodo."),sg(),Sl(418,"blockquote")(419,"p"),Jx(420,"Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido."),sg()()()(),Sl(421,"tr",14)(422,"td",15)(423,"div",16)(424,"span",17),Jx(425," p-format"),Wl(426,"br"),sg()()(),Sl(427,"td",18)(428,"code",23),Jx(429,"PoTimerFormat"),sg()(),Sl(430,"td",20)(431,"p")(432,"code"),Jx(433,"24"),sg()()(),Sl(434,"td",21)(435,"em")(436,"strong"),Jx(437,"(opcional)"),sg()(),Sl(438,"p"),Jx(439,"Define o formato de exibi\xE7\xE3o do timer."),sg(),Sl(440,"p"),Jx(441,"Valores v\xE1lidos:"),sg(),Sl(442,"ul")(443,"li")(444,"code"),Jx(445,"24"),sg(),Jx(446,": formato de 24 horas (padr\xE3o)"),sg(),Sl(447,"li")(448,"code"),Jx(449,"12"),sg(),Jx(450,": formato de 12 horas com indicador AM/PM"),sg()()()(),Sl(451,"tr",14)(452,"td",15)(453,"div",16)(454,"span",17),Jx(455," p-help"),Wl(456,"br"),sg()()(),Sl(457,"td",18)(458,"code",22),Jx(459,"string"),sg()(),Sl(460,"td",20),Jx(461,"-"),sg(),Sl(462,"td",21)(463,"em")(464,"strong"),Jx(465,"(opcional)"),sg()(),Sl(466,"p"),Jx(467,"Texto de apoio do campo."),sg()()(),Sl(468,"tr",14)(469,"td",15)(470,"div",24)(471,"span",25),Jx(472," (p-keydown)"),Wl(473,"br"),sg()()(),Sl(474,"td",18)(475,"code",26),Jx(476,"EventEmitter"),sg()(),Sl(477,"td",20),Jx(478,"-"),sg(),Sl(479,"td",21)(480,"p"),Jx(481,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),sg()()(),Sl(482,"tr",14)(483,"td",15)(484,"div",16)(485,"span",17),Jx(486," p-label"),Wl(487,"br"),sg()()(),Sl(488,"td",18)(489,"code",22),Jx(490,"string"),sg()(),Sl(491,"td",20),Jx(492,"-"),sg(),Sl(493,"td",21)(494,"em")(495,"strong"),Jx(496,"(opcional)"),sg()(),Sl(497,"p"),Jx(498,"R\xF3tulo do campo."),sg()()(),Sl(499,"tr",14)(500,"td",15)(501,"div",16)(502,"span",17),Jx(503," p-label-text-wrap"),Wl(504,"br"),sg()()(),Sl(505,"td",18)(506,"code",19),Jx(507,"boolean"),sg()(),Sl(508,"td",20)(509,"p")(510,"code"),Jx(511,"false"),sg()()(),Sl(512,"td",21)(513,"em")(514,"strong"),Jx(515,"(opcional)"),sg()(),Sl(516,"p"),Jx(517,"Habilita a quebra autom\xE1tica do texto da propriedade "),Sl(518,"code"),Jx(519,"p-label"),sg(),Jx(520,"."),sg()()(),Sl(521,"tr",14)(522,"td",15)(523,"div",16)(524,"span",17),Jx(525," p-loading"),Wl(526,"br"),sg()()(),Sl(527,"td",18)(528,"code",19),Jx(529,"boolean"),sg()(),Sl(530,"td",20)(531,"p")(532,"code"),Jx(533,"false"),sg()()(),Sl(534,"td",21)(535,"em")(536,"strong"),Jx(537,"(opcional)"),sg()(),Sl(538,"p"),Jx(539,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Sl(540,"tr",14)(541,"td",15)(542,"div",16)(543,"span",17),Jx(544," p-locale"),Wl(545,"br"),sg()()(),Sl(546,"td",18)(547,"code",22),Jx(548,"string"),sg()(),Sl(549,"td",20),Jx(550,"-"),sg(),Sl(551,"td",21)(552,"em")(553,"strong"),Jx(554,"(opcional)"),sg()(),Sl(555,"p"),Jx(556,"Idioma do componente."),sg()()(),Sl(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),Jx(561," p-max-time"),Wl(562,"br"),sg()()(),Sl(563,"td",18)(564,"code",22),Jx(565,"string"),sg()(),Sl(566,"td",20),Jx(567,"-"),sg(),Sl(568,"td",21)(569,"em")(570,"strong"),Jx(571,"(opcional)"),sg()(),Sl(572,"p"),Jx(573,"Define o hor\xE1rio m\xE1ximo permitido. Formato: "),Sl(574,"code"),Jx(575,"HH:mm"),sg(),Jx(576," ou "),Sl(577,"code"),Jx(578,"HH:mm:ss"),sg(),Jx(579,"."),sg()()(),Sl(580,"tr",14)(581,"td",15)(582,"div",16)(583,"span",17),Jx(584," p-min-time"),Wl(585,"br"),sg()()(),Sl(586,"td",18)(587,"code",22),Jx(588,"string"),sg()(),Sl(589,"td",20),Jx(590,"-"),sg(),Sl(591,"td",21)(592,"em")(593,"strong"),Jx(594,"(opcional)"),sg()(),Sl(595,"p"),Jx(596,"Define o hor\xE1rio m\xEDnimo permitido. Formato: "),Sl(597,"code"),Jx(598,"HH:mm"),sg(),Jx(599," ou "),Sl(600,"code"),Jx(601,"HH:mm:ss"),sg(),Jx(602,"."),sg()()(),Sl(603,"tr",14)(604,"td",15)(605,"div",16)(606,"span",17),Jx(607," p-minute-interval"),Wl(608,"br"),sg()()(),Sl(609,"td",18)(610,"code",27),Jx(611,"number"),sg()(),Sl(612,"td",20)(613,"p")(614,"code"),Jx(615,"5"),sg()()(),Sl(616,"td",21)(617,"em")(618,"strong"),Jx(619,"(opcional)"),sg()(),Sl(620,"p"),Jx(621,"Define o intervalo entre os minutos exibidos no painel."),sg()()(),Sl(622,"tr",14)(623,"td",15)(624,"div",16)(625,"span",17),Jx(626," p-model-format"),Wl(627,"br"),sg()()(),Sl(628,"td",18)(629,"code",28),Jx(630,"PoTimepickerModelFormat"),sg()(),Sl(631,"td",20),Jx(632,"-"),sg(),Sl(633,"td",21)(634,"em")(635,"strong"),Jx(636,"(opcional)"),sg()(),Sl(637,"p"),Jx(638,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),Sl(639,"em"),Jx(640,"model"),sg(),Jx(641,"."),sg(),Sl(642,"blockquote")(643,"p"),Jx(644,"Veja os valores v\xE1lidos no "),Sl(645,"em"),Jx(646,"enum"),sg(),Sl(647,"code"),Jx(648,"PoTimepickerModelFormat"),sg(),Jx(649,"."),sg()()()(),Sl(650,"tr",14)(651,"td",15)(652,"div",16)(653,"span",17),Jx(654," name"),Wl(655,"br"),sg()()(),Sl(656,"td",18)(657,"code",22),Jx(658,"string"),sg()(),Sl(659,"td",20),Jx(660,"-"),sg(),Sl(661,"td",21)(662,"p"),Jx(663,"Nome do componente."),sg()()(),Sl(664,"tr",14)(665,"td",15)(666,"div",16)(667,"span",17),Jx(668," p-no-autocomplete"),Wl(669,"br"),sg()()(),Sl(670,"td",18)(671,"code",19),Jx(672,"boolean"),sg()(),Sl(673,"td",20)(674,"p")(675,"code"),Jx(676,"false"),sg()()(),Sl(677,"td",21)(678,"em")(679,"strong"),Jx(680,"(opcional)"),sg()(),Sl(681,"p"),Jx(682,"Define a propriedade nativa "),Sl(683,"code"),Jx(684,"autocomplete"),sg(),Jx(685," do campo como "),Sl(686,"code"),Jx(687,"off"),sg(),Jx(688,"."),sg()()(),Sl(689,"tr",14)(690,"td",15)(691,"div",24)(692,"span",25),Jx(693," (p-blur)"),Wl(694,"br"),sg()()(),Sl(695,"td",18)(696,"code",26),Jx(697,"EventEmitter"),sg()(),Sl(698,"td",20),Jx(699,"-"),sg(),Sl(700,"td",21)(701,"p"),Jx(702,"Evento disparado ao sair do campo."),sg()()(),Sl(703,"tr",14)(704,"td",15)(705,"div",24)(706,"span",25),Jx(707," (p-change)"),Wl(708,"br"),sg()()(),Sl(709,"td",18)(710,"code",26),Jx(711,"EventEmitter"),sg()(),Sl(712,"td",20),Jx(713,"-"),sg(),Sl(714,"td",21)(715,"p"),Jx(716,"Evento disparado ao alterar valor do campo."),sg()()(),Sl(717,"tr",14)(718,"td",15)(719,"div",16)(720,"span",17),Jx(721," p-optional"),Wl(722,"br"),sg()()(),Sl(723,"td",18)(724,"code",19),Jx(725,"boolean"),sg()(),Sl(726,"td",20)(727,"p")(728,"code"),Jx(729,"false"),sg()()(),Sl(730,"td",21)(731,"em")(732,"strong"),Jx(733,"(opcional)"),sg()(),Sl(734,"p"),Jx(735,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg()()(),Sl(736,"tr",14)(737,"td",15)(738,"div",16)(739,"span",17),Jx(740," p-placeholder"),Wl(741,"br"),sg()()(),Sl(742,"td",18)(743,"code",22),Jx(744,"string"),sg()(),Sl(745,"td",20),Jx(746,"-"),sg(),Sl(747,"td",21)(748,"em")(749,"strong"),Jx(750,"(opcional)"),sg()(),Sl(751,"p"),Jx(752,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg(),Sl(753,"p"),Jx(754,"Para personalizar os segmentos, informe o valor no formato "),Sl(755,"code"),Jx(756,"HH:mm"),sg(),Jx(757," ou "),Sl(758,"code"),Jx(759,"HH:mm:ss"),sg(),Jx(760,"."),sg()()(),Sl(761,"tr",14)(762,"td",15)(763,"div",16)(764,"span",17),Jx(765," p-helper"),Wl(766,"br"),sg()()(),Sl(767,"td",18)(768,"code",29),Jx(769,"PoHelperOptions "),sg(),Sl(770,"code",22),Jx(771," string"),sg()(),Sl(772,"td",20),Jx(773,"-"),sg(),Sl(774,"td",21)(775,"em")(776,"strong"),Jx(777,"(opcional)"),sg()(),Sl(778,"p"),Jx(779,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),sg()()(),Sl(780,"tr",14)(781,"td",15)(782,"div",16)(783,"span",17),Jx(784,"p-readonly"),Wl(785,"br"),sg()()(),Sl(786,"td",18)(787,"code",19),Jx(788,"boolean"),sg()(),Sl(789,"td",20),Jx(790,"-"),sg(),Sl(791,"td",21)(792,"em")(793,"strong"),Jx(794,"(opcional)"),sg()(),Sl(795,"p"),Jx(796,"Torna o elemento somente leitura."),sg()()(),Sl(797,"tr",14)(798,"td",15)(799,"div",16)(800,"span",17),Jx(801,"p-required"),Wl(802,"br"),sg()()(),Sl(803,"td",18)(804,"code",19),Jx(805,"boolean"),sg()(),Sl(806,"td",20)(807,"p")(808,"code"),Jx(809,"false"),sg()()(),Sl(810,"td",21)(811,"em")(812,"strong"),Jx(813,"(opcional)"),sg()(),Sl(814,"p"),Jx(815,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Sl(816,"tr",14)(817,"td",15)(818,"div",16)(819,"span",17),Jx(820," p-second-interval"),Wl(821,"br"),sg()()(),Sl(822,"td",18)(823,"code",27),Jx(824,"number"),sg()(),Sl(825,"td",20)(826,"p")(827,"code"),Jx(828,"1"),sg()()(),Sl(829,"td",21)(830,"em")(831,"strong"),Jx(832,"(opcional)"),sg()(),Sl(833,"p"),Jx(834,"Define o intervalo entre os segundos exibidos no painel."),sg()()(),Sl(835,"tr",14)(836,"td",15)(837,"div",16)(838,"span",17),Jx(839," p-required-field-error-message"),Wl(840,"br"),sg()()(),Sl(841,"td",18)(842,"code",19),Jx(843,"boolean"),sg()(),Sl(844,"td",20)(845,"p")(846,"code"),Jx(847,"false"),sg()()(),Sl(848,"td",21)(849,"em")(850,"strong"),Jx(851,"(opcional)"),sg()(),Sl(852,"p"),Jx(853,"Exibe a mensagem setada na propriedade "),Sl(854,"code"),Jx(855,"p-error-pattern"),sg(),Jx(856," se o campo estiver vazio e for requerido."),sg()()(),Sl(857,"tr",14)(858,"td",15)(859,"div",16)(860,"span",17),Jx(861," p-show-required"),Wl(862,"br"),sg()()(),Sl(863,"td",18)(864,"code",19),Jx(865,"boolean"),sg()(),Sl(866,"td",20),Jx(867,"-"),sg(),Sl(868,"td",21)(869,"p"),Jx(870,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg()()(),Sl(871,"tr",14)(872,"td",15)(873,"div",16)(874,"span",17),Jx(875," p-show-seconds"),Wl(876,"br"),sg()()(),Sl(877,"td",18)(878,"code",19),Jx(879,"boolean"),sg()(),Sl(880,"td",20)(881,"p")(882,"code"),Jx(883,"false"),sg()()(),Sl(884,"td",21)(885,"em")(886,"strong"),Jx(887,"(opcional)"),sg()(),Sl(888,"p"),Jx(889,"Exibe a coluna de segundos no painel."),sg()()(),Sl(890,"tr",14)(891,"td",15)(892,"div",16)(893,"span",17),Jx(894," p-size"),Wl(895,"br"),sg()()(),Sl(896,"td",18)(897,"code",22),Jx(898,"string"),sg()(),Sl(899,"td",20)(900,"p")(901,"code"),Jx(902,"medium"),sg()()(),Sl(903,"td",21)(904,"em")(905,"strong"),Jx(906,"(opcional)"),sg()(),Sl(907,"p"),Jx(908,"Define o tamanho do componente:"),sg(),Sl(909,"ul")(910,"li")(911,"code"),Jx(912,"small"),sg(),Jx(913,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Sl(914,"li")(915,"code"),Jx(916,"medium"),sg(),Jx(917,": altura do input como 44px."),sg()()()()(),Sl(918,"h3",10),Jx(919,"M\xE9todos"),sg(),Sl(920,"table",30)(921,"tr",14)(922,"th",31)(923,"div",16)(924,"h4")(925,"span",17),Jx(926," focus "),sg()()()()(),Sl(927,"tr",21)(928,"td",21)(929,"p"),Jx(930,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Sl(931,"p"),Jx(932,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Sl(933,"pre")(934,"code"),Jx(935,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),sg()()()()(),Wl(936,"br"),Sl(937,"table",30)(938,"tr",14)(939,"th",31)(940,"div",16)(941,"h4")(942,"span",17),Jx(943," showAdditionalHelp "),sg()()()()(),Sl(944,"tr",21)(945,"td",21)(946,"p"),Jx(947,"M\xE9todo que exibe "),Sl(948,"code"),Jx(949,"p-helper"),sg(),Jx(950," ou executa a a\xE7\xE3o definida em "),Sl(951,"code"),Jx(952,"p-helper{eventOnClick}"),sg(),Jx(953," ou em "),Sl(954,"code"),Jx(955,"p-additionalHelp"),sg(),Jx(956,"."),sg()()()(),Wl(957,"br"),Sl(958,"h3"),Jx(959,"Enums"),sg(),Sl(960,"h4",4)(961,"code",5),Jx(962,"PoTimepickerModelFormat"),sg()(),Sl(963,"div",2)(964,"p")(965,"em"),Jx(966,"Enum"),sg(),Jx(967," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),sg()(),Sl(968,"h4",10),Jx(969,"Propriedades"),sg(),Sl(970,"table",11)(971,"tr",12)(972,"th",13),Jx(973,"Nome"),sg(),Sl(974,"th",13),Jx(975,"Descri\xE7\xE3o"),sg()(),Sl(976,"tr",14)(977,"td",15)(978,"div",16)(979,"span",17),Jx(980," HourMinute"),Wl(981,"br"),sg()()(),Sl(982,"td",21)(983,"p"),Jx(984,"Formato b\xE1sico "),Sl(985,"code"),Jx(986,"HH:mm"),sg(),Jx(987," (ex: "),Sl(988,"code"),Jx(989,"14:30"),sg(),Jx(990,")."),sg()()(),Sl(991,"tr",14)(992,"td",15)(993,"div",16)(994,"span",17),Jx(995," HourMinuteSecond"),Wl(996,"br"),sg()()(),Sl(997,"td",21)(998,"p"),Jx(999,"Formato com segundos "),Sl(1e3,"code"),Jx(1001,"HH:mm:ss"),sg(),Jx(1002," (ex: "),Sl(1003,"code"),Jx(1004,"14:30:00"),sg(),Jx(1005,")."),sg()()()()());},dependencies:[Ga],encapsulation:2})}return l})();var Ce=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(wn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Timepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Sl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Wl(3,"sample-po-timepicker-doc"),sg(),Sl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Wl(5,"sample-po-timepicker-basic-view")(6,"sample-po-timepicker-labs-view")(7,"sample-po-timepicker-scheduling-view")(8,"sample-po-timepicker-business-hours-view"),sg()()()),r&2&&(tw("p-actions",i.actions),Vp(2),tw("p-active",i.activeTab==="doc"),Vp(2),tw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[pNe,Gme,Qme,ce,he,be,fe,ve],encapsulation:2})}return l})();var Ve=[{path:"",component:Ce}],xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[pL.forChild(Ve),pL]})}return l})();var Ct=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[ar,xe]})}return l})();export{Ct as DocPoTimepickerModule};