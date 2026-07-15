import {f as fe$1,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d6 as Z0,d as f,c5 as Vde,aW as Yp,cW as Cue,L as Gl,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as C3,b4 as O3,cp as Hhe,c8 as Dde,c9 as Yhe,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,bD as Ede,aJ as qhe,bd as Fx,av as Yl,aw as uo,ax as fo,a3 as lNe,aD as Ky,aT as sN,aE as Xy}from'./main-P7IRR5MZ.js';var se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","timepicker","p-label","PO Timepicker"]],template:function(r,i){r&1&&Gl(0,"po-timepicker",0);},dependencies:[Cue],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Timepicker Basic"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-timepicker-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Te,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,se],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:"HourMinute",value:Z0.HourMinute},{label:"HourMinuteSecond",value:Z0.HourMinuteSecond}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"},{value:"appendInBody",label:"Append In Body"}];formatOptions=[{label:"24",value:"24"},{label:"12",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-labs"]],standalone:false,decls:24,vars:49,consts:[["f","ngForm"],["name","timepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-disabled","p-error-pattern","p-format","p-helper","p-help","p-model-format","p-label","p-locale","p-max-time","p-min-time","p-minute-interval","p-second-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-show-seconds","p-label-text-wrap","p-loading","p-compact-label","p-append-in-body","p-error-limit","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helper","p-clean","","p-label","Helper",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","modelFormat","p-columns","4","p-label","Model Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=Sx();Tl(0,"po-timepicker",1),ww("ngModelChange",function(o){return Ky(s),sN(i.timepicker,o)||(i.timepicker=o),Xy(o)}),ht("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),r0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3)(4,"po-info",4),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(o){return Ky(s),sN(i.label,o)||(i.label=o),Xy(o)}),sg(),r0(),Tl(9,"po-input",6),ww("ngModelChange",function(o){return Ky(s),sN(i.help,o)||(i.help=o),Xy(o)}),sg(),r0(),Tl(10,"po-input",7),ww("ngModelChange",function(o){return Ky(s),sN(i.helper,o)||(i.helper=o),Xy(o)}),sg(),r0(),Tl(11,"po-input",8),ww("ngModelChange",function(o){return Ky(s),sN(i.placeholder,o)||(i.placeholder=o),Xy(o)}),sg(),r0(),Tl(12,"po-input",9),ww("ngModelChange",function(o){return Ky(s),sN(i.errorPattern,o)||(i.errorPattern=o),Xy(o)}),sg(),r0(),Tl(13,"po-timepicker",10),ww("ngModelChange",function(o){return Ky(s),sN(i.minTime,o)||(i.minTime=o),Xy(o)}),sg(),r0(),Tl(14,"po-timepicker",11),ww("ngModelChange",function(o){return Ky(s),sN(i.maxTime,o)||(i.maxTime=o),Xy(o)}),sg(),r0(),Tl(15,"po-number",12),ww("ngModelChange",function(o){return Ky(s),sN(i.minuteInterval,o)||(i.minuteInterval=o),Xy(o)}),sg(),r0(),Tl(16,"po-number",13),ww("ngModelChange",function(o){return Ky(s),sN(i.secondInterval,o)||(i.secondInterval=o),Xy(o)}),sg(),r0(),Tl(17,"po-checkbox-group",14),ww("ngModelChange",function(o){return Ky(s),sN(i.properties,o)||(i.properties=o),Xy(o)}),sg(),r0(),Tl(18,"po-radio-group",15),ww("ngModelChange",function(o){return Ky(s),sN(i.locale,o)||(i.locale=o),Xy(o)}),sg(),r0(),Tl(19,"po-radio-group",16),ww("ngModelChange",function(o){return Ky(s),sN(i.format,o)||(i.format=o),Xy(o)}),sg(),r0(),Tl(20,"po-radio-group",17),ww("ngModelChange",function(o){return Ky(s),sN(i.modelFormat,o)||(i.modelFormat=o),Xy(o)}),sg(),r0(),Tl(21,"po-radio-group",18),ww("ngModelChange",function(o){return Ky(s),sN(i.size,o)||(i.size=o),Xy(o)}),sg(),r0(),Tl(22,"div",2)(23,"po-button",19),ht("p-click",function(){return i.restore()}),sg()()();}r&2&&(Ew("ngModel",i.timepicker),nw("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-format",i.format)("p-helper",i.helper)("p-help",i.help)("p-model-format",i.modelFormat)("p-label",i.label)("p-locale",i.locale)("p-max-time",i.maxTime)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-second-interval",i.secondInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-append-in-body",i.properties==null?null:i.properties.includes("appendInBody"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-size",i.size),o0(),Vp(3),nw("p-value",i.timepicker),Vp(),nw("p-value",i.event),Vp(4),Ew("ngModel",i.label),o0(),Vp(),Ew("ngModel",i.help),o0(),Vp(),Ew("ngModel",i.helper),o0(),Vp(),Ew("ngModel",i.placeholder),o0(),Vp(),Ew("ngModel",i.errorPattern),o0(),Vp(),Ew("ngModel",i.minTime),o0(),Vp(),Ew("ngModel",i.maxTime),o0(),Vp(),Ew("ngModel",i.minuteInterval),o0(),Vp(),Ew("ngModel",i.secondInterval),o0(),Vp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),o0(),Vp(),Ew("ngModel",i.locale),nw("p-options",i.localeOptions),o0(),Vp(),Ew("ngModel",i.format),nw("p-options",i.formatOptions),o0(),Vp(),Ew("ngModel",i.modelFormat),nw("p-options",i.modelFormatOptions),o0(),Vp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,C3,O3,Hhe,Dde,Cue,Yhe],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Timepicker Labs"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-timepicker
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-timepicker-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,we,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ge],encapsulation:2,changeDetection:1})}return l})();var Pe=["formScheduling"],Se=(()=>{class l{poDialog=f(Vde);poNotification=f(Yp);formScheduling;title="";date=new Date;startTime="";endTime="";room="";roomOptions=[{value:"sala-a",label:"Sala A"},{value:"sala-b",label:"Sala B"},{value:"sala-c",label:"Sala C"},{value:"auditorio",label:"Audit\xF3rio"}];schedule(){let d=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:"Confirmar Agendamento",message:d,confirm:()=>{this.poNotification.success("Agendamento confirmado com sucesso!"),this.formScheduling.reset({date:"",room:""});},cancel:()=>{this.poNotification.warning("Agendamento cancelado.");}});}getFormatedDate(d){return d&&d.slice(0,10)}getRoomLabel(){let d=this.roomOptions.find(r=>r.value===this.room);return d?d.label:this.room}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&Yl(Pe,7),r&2){let s;uo(s=fo())&&(i.formScheduling=s.first);}},standalone:false,decls:11,vars:9,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","title","p-label","T\xEDtulo do agendamento","p-placeholder","Ex: Reuni\xE3o de planejamento","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","date","p-clean","","p-format","dd/mm/yyyy","p-label","Data","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","startTime","p-label","Hor\xE1rio de in\xEDcio","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","endTime","p-label","Hor\xE1rio de t\xE9rmino","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","room","p-label","Sala","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","scheduleButton","p-label","Agendar",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let s=Sx();Tl(0,"form",null,0)(2,"div",1)(3,"po-input",2),ww("ngModelChange",function(o){return Ky(s),sN(i.title,o)||(i.title=o),Xy(o)}),sg(),r0(),Tl(4,"po-datepicker",3),ww("ngModelChange",function(o){return Ky(s),sN(i.date,o)||(i.date=o),Xy(o)}),sg(),r0(),sg(),Tl(5,"div",1)(6,"po-timepicker",4),ww("ngModelChange",function(o){return Ky(s),sN(i.startTime,o)||(i.startTime=o),Xy(o)}),sg(),r0(),Tl(7,"po-timepicker",5),ww("ngModelChange",function(o){return Ky(s),sN(i.endTime,o)||(i.endTime=o),Xy(o)}),sg(),r0(),Tl(8,"po-select",6),ww("ngModelChange",function(o){return Ky(s),sN(i.room,o)||(i.room=o),Xy(o)}),sg(),r0(),sg(),Tl(9,"div",1)(10,"po-button",7),ht("p-click",function(){return i.schedule()}),sg()()();}if(r&2){let s=Fx(1);Vp(3),Ew("ngModel",i.title),o0(),Vp(),Ew("ngModel",i.date),o0(),Vp(2),Ew("ngModel",i.startTime),nw("p-show-required",true),o0(),Vp(),Ew("ngModel",i.endTime),nw("p-show-required",true),o0(),Vp(),Ew("ngModel",i.room),nw("p-options",i.roomOptions),o0(),Vp(2),nw("p-disabled",s.invalid);}},dependencies:[oY,nY,rY,Sk,Ck,Qt,Ede,O3,qhe,Cue],encapsulation:2,changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),be=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-scheduling-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Timepicker - Scheduling"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html"),sg(),Tl(13,"pre",7),iN(14,`<form #formScheduling="ngForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-timepicker-scheduling"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,He,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Se],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{poNotification=f(Yp);openTime="08:00";closeTime="18:00";lunchStart="12:00";lunchEnd="13:00";save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`);}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-business-hours"]],standalone:false,decls:8,vars:14,consts:[[1,"po-row"],["name","openTime","p-label","Abertura","p-clean","","p-min-time","06:00",1,"po-md-6",3,"ngModelChange","ngModel","p-max-time","p-minute-interval"],["name","closeTime","p-label","Fechamento","p-clean","","p-max-time","23:00",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-minute-interval"],["name","lunchStart","p-label","In\xEDcio do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["name","lunchEnd","p-label","Fim do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["p-label","Salvar","p-kind","primary",1,"po-md-3","po-offset-md-9",3,"p-click"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"po-timepicker",1),ww("ngModelChange",function(p){return sN(i.openTime,p)||(i.openTime=p),p}),sg(),r0(),Tl(2,"po-timepicker",2),ww("ngModelChange",function(p){return sN(i.closeTime,p)||(i.closeTime=p),p}),sg(),r0(),sg(),Tl(3,"div",0)(4,"po-timepicker",3),ww("ngModelChange",function(p){return sN(i.lunchStart,p)||(i.lunchStart=p),p}),sg(),r0(),Tl(5,"po-timepicker",4),ww("ngModelChange",function(p){return sN(i.lunchEnd,p)||(i.lunchEnd=p),p}),sg(),r0(),sg(),Tl(6,"div",0)(7,"po-button",5),ht("p-click",function(){return i.save()}),sg()()),r&2&&(Vp(),Ew("ngModel",i.openTime),nw("p-max-time",i.lunchStart)("p-minute-interval",30),o0(),Vp(),Ew("ngModel",i.closeTime),nw("p-min-time",i.lunchEnd)("p-minute-interval",30),o0(),Vp(2),Ew("ngModel",i.lunchStart),nw("p-min-time",i.openTime)("p-max-time",i.lunchEnd)("p-minute-interval",15),o0(),Vp(),Ew("ngModel",i.lunchEnd),nw("p-min-time",i.lunchStart)("p-max-time",i.closeTime)("p-minute-interval",15),o0());},dependencies:[nY,Sk,Qt,Cue],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-business-hours-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Timepicker - Business Hours"),sg(),Tl(4,"a",2),ht("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html"),sg(),Tl(13,"pre",7),iN(14,`<div class="po-row">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-timepicker-business-hours"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Be,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,Ee],encapsulation:2,changeDetection:1})}return l})();var ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-doc"]],standalone:false,decls:1006,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),iN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),iN(11,"FormsModule"),sg(),iN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),iN(14,"ReactiveFormsModule"),sg(),iN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),iN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),iN(20,"PoTimepickerComponent"),sg()(),Tl(21,"div",2)(22,"p"),iN(23,"O "),Tl(24,"code"),iN(25,"po-timepicker"),sg(),iN(26," \xE9 um componente para sele\xE7\xE3o de hor\xE1rio que permite a digita\xE7\xE3o e/ou sele\xE7\xE3o via painel flutuante."),sg(),Tl(27,"p"),iN(28,"O formato de exibi\xE7\xE3o do hor\xE1rio pode ser de 24 horas ("),Tl(29,"code"),iN(30,"HH:mm"),sg(),iN(31,") ou 12 horas ("),Tl(32,"code"),iN(33,"hh:mm AM/PM"),sg(),iN(34,`),
e opcionalmente incluir segundos (`),Tl(35,"code"),iN(36,"HH:mm:ss"),sg(),iN(37,")."),sg(),Tl(38,"p"),iN(39,"O valor de sa\xEDda segue o formato ISO 8601 para hor\xE1rios ("),Tl(40,"code"),iN(41,"HH:mm"),sg(),iN(42," ou "),Tl(43,"code"),iN(44,"HH:mm:ss"),sg(),iN(45,")."),sg(),Tl(46,"p")(47,"strong"),iN(48,"Importante:"),sg()(),Tl(49,"ul")(50,"li"),iN(51,"Caso o valor digitado seja inv\xE1lido, o "),Tl(52,"code"),iN(53,"model"),sg(),iN(54," receber\xE1 uma string vazia."),sg(),Tl(55,"li"),iN(56,"Caso o "),Tl(57,"code"),iN(58,"input"),sg(),iN(59," esteja passando um "),Tl(60,"code"),iN(61,"[(ngModel)]"),sg(),iN(62,", mas n\xE3o tenha um "),Tl(63,"code"),iN(64,"name"),sg(),iN(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Tl(66,"code"),iN(67,'[ngModelOptions]="{standalone: true}"'),sg(),iN(68,")."),sg()(),Tl(69,"blockquote")(70,"p"),iN(71,"N\xE3o esque\xE7a de importar o "),Tl(72,"code"),iN(73,"FormsModule"),sg(),iN(74," em seu m\xF3dulo, tal como para utilizar o "),Tl(75,"code"),iN(76,"input default"),sg(),iN(77,"."),sg()(),Tl(78,"h4"),iN(79,"Tokens customiz\xE1veis"),sg(),Tl(80,"p"),iN(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(82,"code"),iN(83,".po-input"),sg()(),Tl(84,"blockquote")(85,"p"),iN(86,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(87,"a",6),iN(88,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(89,"."),sg()(),Tl(90,"table")(91,"thead")(92,"tr")(93,"th"),iN(94,"Propriedade"),sg(),Tl(95,"th"),iN(96,"Descri\xE7\xE3o"),sg(),Tl(97,"th"),iN(98,"Valor Padr\xE3o"),sg()()(),Tl(99,"tbody")(100,"tr")(101,"td")(102,"strong"),iN(103,"Default Values"),sg()(),Gl(104,"td")(105,"td"),sg(),Tl(106,"tr")(107,"td")(108,"code"),iN(109,"--font-family"),sg()(),Tl(110,"td"),iN(111,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(112,"td")(113,"code"),iN(114,"var(--font-family-theme)"),sg()()(),Tl(115,"tr")(116,"td")(117,"code"),iN(118,"--font-size"),sg()(),Tl(119,"td"),iN(120,"Tamanho da fonte"),sg(),Tl(121,"td")(122,"code"),iN(123,"var(--font-size-default)"),sg()()(),Tl(124,"tr")(125,"td")(126,"code"),iN(127,"--text-color-placeholder"),sg()(),Tl(128,"td"),iN(129,"Cor do texto placeholder"),sg(),Tl(130,"td")(131,"code"),iN(132,"var(--color-neutral-light-30)"),sg()()(),Tl(133,"tr")(134,"td")(135,"code"),iN(136,"--color"),sg()(),Tl(137,"td"),iN(138,"Cor principal do timepicker"),sg(),Tl(139,"td")(140,"code"),iN(141,"var(--color-neutral-dark-70)"),sg()()(),Tl(142,"tr")(143,"td")(144,"code"),iN(145,"--background"),sg()(),Tl(146,"td"),iN(147,"Cor de background"),sg(),Tl(148,"td")(149,"code"),iN(150,"var(--color-neutral-light-05)"),sg()()(),Tl(151,"tr")(152,"td")(153,"code"),iN(154,"--padding"),sg()(),Tl(155,"td"),iN(156,"Preenchimento"),sg(),Tl(157,"td")(158,"code"),iN(159,"0 0.5rem"),sg()()(),Tl(160,"tr")(161,"td")(162,"code"),iN(163,"--text-color"),sg()(),Tl(164,"td"),iN(165,"Cor do texto"),sg(),Tl(166,"td")(167,"code"),iN(168,"var(--color-neutral-dark-90)"),sg()()(),Tl(169,"tr")(170,"td")(171,"code"),iN(172,"--field-container-title-justify"),sg()(),Tl(173,"td"),iN(174,"Alinhamento horizontal do t\xEDtulo ("),Tl(175,"code"),iN(176,"justify-content"),sg(),iN(177,")"),sg(),Tl(178,"td")(179,"code"),iN(180,"space-between"),sg()()(),Tl(181,"tr")(182,"td")(183,"code"),iN(184,"--field-container-title-flex"),sg()(),Tl(185,"td"),iN(186,"Flex do t\xEDtulo ("),Tl(187,"code"),iN(188,"flex"),sg(),iN(189,")"),sg(),Tl(190,"td")(191,"code"),iN(192,"1 auto"),sg()()(),Tl(193,"tr")(194,"td")(195,"strong"),iN(196,"Hover"),sg()(),Gl(197,"td")(198,"td"),sg(),Tl(199,"tr")(200,"td")(201,"code"),iN(202,"--color-hover"),sg()(),Tl(203,"td"),iN(204,"Cor principal no estado hover"),sg(),Tl(205,"td")(206,"code"),iN(207,"var(--color-brand-01-dark)"),sg()()(),Tl(208,"tr")(209,"td")(210,"code"),iN(211,"--background-hover"),sg()(),Tl(212,"td"),iN(213,"Cor de background no estado hover"),sg(),Tl(214,"td")(215,"code"),iN(216,"var(--color-brand-01-lightest)"),sg()()(),Tl(217,"tr")(218,"td")(219,"strong"),iN(220,"Focused"),sg()(),Gl(221,"td")(222,"td"),sg(),Tl(223,"tr")(224,"td")(225,"code"),iN(226,"--color-focused"),sg()(),Tl(227,"td"),iN(228,"Cor principal no estado de focus"),sg(),Tl(229,"td")(230,"code"),iN(231,"var(--color-action-default)"),sg()()(),Tl(232,"tr")(233,"td")(234,"code"),iN(235,"--outline-color-focused"),sg()(),Tl(236,"td"),iN(237,"Cor do outline do estado de focus"),sg(),Tl(238,"td")(239,"code"),iN(240,"var(--color-action-focus)"),sg()()(),Tl(241,"tr")(242,"td")(243,"strong"),iN(244,"Disabled"),sg()(),Gl(245,"td")(246,"td"),sg(),Tl(247,"tr")(248,"td")(249,"code"),iN(250,"--color-disabled"),sg()(),Tl(251,"td"),iN(252,"Cor principal no estado disabled"),sg(),Tl(253,"td")(254,"code"),iN(255,"var(--color-neutral-light-30)"),sg()()(),Tl(256,"tr")(257,"td")(258,"code"),iN(259,"--background-disabled"),sg()(),Tl(260,"td"),iN(261,"Cor de background no estado disabled"),sg(),Tl(262,"td")(263,"code"),iN(264,"var(--color-neutral-light-20)"),sg()()(),Tl(265,"tr")(266,"td")(267,"code"),iN(268,"--text-color-disabled"),sg()(),Tl(269,"td"),iN(270,"Cor do texto no estado disabled"),sg(),Tl(271,"td")(272,"code"),iN(273,"var(--color-neutral-dark-70)"),sg()()()()()(),Tl(274,"div",7)(275,"h4",8),iN(276,"Seletor"),sg(),Tl(277,"pre",9),iN(278,`<po-timepicker
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
`),sg()(),Tl(279,"h4",10),iN(280,"Propriedades"),sg(),Tl(281,"table",11)(282,"tr",12)(283,"th",13),iN(284,"Nome"),sg(),Tl(285,"th",13),iN(286,"Tipo"),sg(),Tl(287,"th",13),iN(288,"Padr\xE3o"),sg(),Tl(289,"th",13),iN(290,"Descri\xE7\xE3o"),sg()(),Tl(291,"tr",14)(292,"td",15)(293,"div",16)(294,"span",17),iN(295," p-append-in-body"),Gl(296,"br"),sg()()(),Tl(297,"td",18)(298,"code",19),iN(299,"boolean"),sg()(),Tl(300,"td",20)(301,"p")(302,"code"),iN(303,"false"),sg()()(),Tl(304,"td",21)(305,"em")(306,"strong"),iN(307,"(opcional)"),sg()(),Tl(308,"p"),iN(309,"Define que o painel do timer ser\xE1 inclu\xEDdo no body da p\xE1gina."),sg()()(),Tl(310,"tr",14)(311,"td",15)(312,"div",16)(313,"span",17),iN(314," p-auto-focus"),Gl(315,"br"),sg()()(),Tl(316,"td",18)(317,"code",19),iN(318,"boolean"),sg()(),Tl(319,"td",20)(320,"p")(321,"code"),iN(322,"false"),sg()()(),Tl(323,"td",21)(324,"em")(325,"strong"),iN(326,"(opcional)"),sg()(),Tl(327,"p"),iN(328,"Aplica foco no elemento ao ser iniciado."),sg()()(),Tl(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),iN(333,"p-clean"),Gl(334,"br"),sg()()(),Tl(335,"td",18)(336,"code",19),iN(337,"boolean"),sg()(),Tl(338,"td",20),iN(339,"-"),sg(),Tl(340,"td",21)(341,"em")(342,"strong"),iN(343,"(opcional)"),sg()(),Tl(344,"p"),iN(345,"Habilita a\xE7\xE3o para limpar o campo."),sg()()(),Tl(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),iN(350," p-compact-label"),Gl(351,"br"),sg()()(),Tl(352,"td",18)(353,"code",19),iN(354,"boolean"),sg()(),Tl(355,"td",20)(356,"p")(357,"code"),iN(358,"false"),sg()()(),Tl(359,"td",21)(360,"em")(361,"strong"),iN(362,"(opcional)"),sg()(),Tl(363,"p"),iN(364,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg()()(),Tl(365,"tr",14)(366,"td",15)(367,"div",16)(368,"span",17),iN(369,"p-disabled"),Gl(370,"br"),sg()()(),Tl(371,"td",18)(372,"code",19),iN(373,"boolean"),sg()(),Tl(374,"td",20),iN(375,"-"),sg(),Tl(376,"td",21)(377,"em")(378,"strong"),iN(379,"(opcional)"),sg()(),Tl(380,"p"),iN(381,"Desabilita o campo."),sg()()(),Tl(382,"tr",14)(383,"td",15)(384,"div",16)(385,"span",17),iN(386," p-error-limit"),Gl(387,"br"),sg()()(),Tl(388,"td",18)(389,"code",19),iN(390,"boolean"),sg()(),Tl(391,"td",20)(392,"p")(393,"code"),iN(394,"false"),sg()()(),Tl(395,"td",21)(396,"em")(397,"strong"),iN(398,"(opcional)"),sg()(),Tl(399,"p"),iN(400,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg()()(),Tl(401,"tr",14)(402,"td",15)(403,"div",16)(404,"span",17),iN(405," p-error-pattern"),Gl(406,"br"),sg()()(),Tl(407,"td",18)(408,"code",22),iN(409,"string"),sg()(),Tl(410,"td",20),iN(411,"-"),sg(),Tl(412,"td",21)(413,"em")(414,"strong"),iN(415,"(opcional)"),sg()(),Tl(416,"p"),iN(417,"Mensagem apresentada quando o hor\xE1rio for inv\xE1lido ou fora do per\xEDodo."),sg(),Tl(418,"blockquote")(419,"p"),iN(420,"Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido."),sg()()()(),Tl(421,"tr",14)(422,"td",15)(423,"div",16)(424,"span",17),iN(425," p-format"),Gl(426,"br"),sg()()(),Tl(427,"td",18)(428,"code",23),iN(429,"PoTimerFormat"),sg()(),Tl(430,"td",20)(431,"p")(432,"code"),iN(433,"24"),sg()()(),Tl(434,"td",21)(435,"em")(436,"strong"),iN(437,"(opcional)"),sg()(),Tl(438,"p"),iN(439,"Define o formato de exibi\xE7\xE3o do timer."),sg(),Tl(440,"p"),iN(441,"Valores v\xE1lidos:"),sg(),Tl(442,"ul")(443,"li")(444,"code"),iN(445,"24"),sg(),iN(446,": formato de 24 horas (padr\xE3o)"),sg(),Tl(447,"li")(448,"code"),iN(449,"12"),sg(),iN(450,": formato de 12 horas com indicador AM/PM"),sg()()()(),Tl(451,"tr",14)(452,"td",15)(453,"div",16)(454,"span",17),iN(455," p-help"),Gl(456,"br"),sg()()(),Tl(457,"td",18)(458,"code",22),iN(459,"string"),sg()(),Tl(460,"td",20),iN(461,"-"),sg(),Tl(462,"td",21)(463,"em")(464,"strong"),iN(465,"(opcional)"),sg()(),Tl(466,"p"),iN(467,"Texto de apoio do campo."),sg()()(),Tl(468,"tr",14)(469,"td",15)(470,"div",24)(471,"span",25),iN(472," (p-keydown)"),Gl(473,"br"),sg()()(),Tl(474,"td",18)(475,"code",26),iN(476,"EventEmitter"),sg()(),Tl(477,"td",20),iN(478,"-"),sg(),Tl(479,"td",21)(480,"p"),iN(481,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),sg()()(),Tl(482,"tr",14)(483,"td",15)(484,"div",16)(485,"span",17),iN(486," p-label"),Gl(487,"br"),sg()()(),Tl(488,"td",18)(489,"code",22),iN(490,"string"),sg()(),Tl(491,"td",20),iN(492,"-"),sg(),Tl(493,"td",21)(494,"em")(495,"strong"),iN(496,"(opcional)"),sg()(),Tl(497,"p"),iN(498,"R\xF3tulo do campo."),sg()()(),Tl(499,"tr",14)(500,"td",15)(501,"div",16)(502,"span",17),iN(503," p-label-text-wrap"),Gl(504,"br"),sg()()(),Tl(505,"td",18)(506,"code",19),iN(507,"boolean"),sg()(),Tl(508,"td",20)(509,"p")(510,"code"),iN(511,"false"),sg()()(),Tl(512,"td",21)(513,"em")(514,"strong"),iN(515,"(opcional)"),sg()(),Tl(516,"p"),iN(517,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(518,"code"),iN(519,"p-label"),sg(),iN(520,"."),sg()()(),Tl(521,"tr",14)(522,"td",15)(523,"div",16)(524,"span",17),iN(525," p-loading"),Gl(526,"br"),sg()()(),Tl(527,"td",18)(528,"code",19),iN(529,"boolean"),sg()(),Tl(530,"td",20)(531,"p")(532,"code"),iN(533,"false"),sg()()(),Tl(534,"td",21)(535,"em")(536,"strong"),iN(537,"(opcional)"),sg()(),Tl(538,"p"),iN(539,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),sg()()(),Tl(540,"tr",14)(541,"td",15)(542,"div",16)(543,"span",17),iN(544," p-locale"),Gl(545,"br"),sg()()(),Tl(546,"td",18)(547,"code",22),iN(548,"string"),sg()(),Tl(549,"td",20),iN(550,"-"),sg(),Tl(551,"td",21)(552,"em")(553,"strong"),iN(554,"(opcional)"),sg()(),Tl(555,"p"),iN(556,"Idioma do componente."),sg()()(),Tl(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),iN(561," p-max-time"),Gl(562,"br"),sg()()(),Tl(563,"td",18)(564,"code",22),iN(565,"string"),sg()(),Tl(566,"td",20),iN(567,"-"),sg(),Tl(568,"td",21)(569,"em")(570,"strong"),iN(571,"(opcional)"),sg()(),Tl(572,"p"),iN(573,"Define o hor\xE1rio m\xE1ximo permitido. Formato: "),Tl(574,"code"),iN(575,"HH:mm"),sg(),iN(576," ou "),Tl(577,"code"),iN(578,"HH:mm:ss"),sg(),iN(579,"."),sg()()(),Tl(580,"tr",14)(581,"td",15)(582,"div",16)(583,"span",17),iN(584," p-min-time"),Gl(585,"br"),sg()()(),Tl(586,"td",18)(587,"code",22),iN(588,"string"),sg()(),Tl(589,"td",20),iN(590,"-"),sg(),Tl(591,"td",21)(592,"em")(593,"strong"),iN(594,"(opcional)"),sg()(),Tl(595,"p"),iN(596,"Define o hor\xE1rio m\xEDnimo permitido. Formato: "),Tl(597,"code"),iN(598,"HH:mm"),sg(),iN(599," ou "),Tl(600,"code"),iN(601,"HH:mm:ss"),sg(),iN(602,"."),sg()()(),Tl(603,"tr",14)(604,"td",15)(605,"div",16)(606,"span",17),iN(607," p-minute-interval"),Gl(608,"br"),sg()()(),Tl(609,"td",18)(610,"code",27),iN(611,"number"),sg()(),Tl(612,"td",20)(613,"p")(614,"code"),iN(615,"5"),sg()()(),Tl(616,"td",21)(617,"em")(618,"strong"),iN(619,"(opcional)"),sg()(),Tl(620,"p"),iN(621,"Define o intervalo entre os minutos exibidos no painel."),sg()()(),Tl(622,"tr",14)(623,"td",15)(624,"div",16)(625,"span",17),iN(626," p-model-format"),Gl(627,"br"),sg()()(),Tl(628,"td",18)(629,"code",28),iN(630,"PoTimepickerModelFormat"),sg()(),Tl(631,"td",20),iN(632,"-"),sg(),Tl(633,"td",21)(634,"em")(635,"strong"),iN(636,"(opcional)"),sg()(),Tl(637,"p"),iN(638,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),Tl(639,"em"),iN(640,"model"),sg(),iN(641,"."),sg(),Tl(642,"blockquote")(643,"p"),iN(644,"Veja os valores v\xE1lidos no "),Tl(645,"em"),iN(646,"enum"),sg(),Tl(647,"code"),iN(648,"PoTimepickerModelFormat"),sg(),iN(649,"."),sg()()()(),Tl(650,"tr",14)(651,"td",15)(652,"div",16)(653,"span",17),iN(654," name"),Gl(655,"br"),sg()()(),Tl(656,"td",18)(657,"code",22),iN(658,"string"),sg()(),Tl(659,"td",20),iN(660,"-"),sg(),Tl(661,"td",21)(662,"p"),iN(663,"Nome do componente."),sg()()(),Tl(664,"tr",14)(665,"td",15)(666,"div",16)(667,"span",17),iN(668," p-no-autocomplete"),Gl(669,"br"),sg()()(),Tl(670,"td",18)(671,"code",19),iN(672,"boolean"),sg()(),Tl(673,"td",20)(674,"p")(675,"code"),iN(676,"false"),sg()()(),Tl(677,"td",21)(678,"em")(679,"strong"),iN(680,"(opcional)"),sg()(),Tl(681,"p"),iN(682,"Define a propriedade nativa "),Tl(683,"code"),iN(684,"autocomplete"),sg(),iN(685," do campo como "),Tl(686,"code"),iN(687,"off"),sg(),iN(688,"."),sg()()(),Tl(689,"tr",14)(690,"td",15)(691,"div",24)(692,"span",25),iN(693," (p-blur)"),Gl(694,"br"),sg()()(),Tl(695,"td",18)(696,"code",26),iN(697,"EventEmitter"),sg()(),Tl(698,"td",20),iN(699,"-"),sg(),Tl(700,"td",21)(701,"p"),iN(702,"Evento disparado ao sair do campo."),sg()()(),Tl(703,"tr",14)(704,"td",15)(705,"div",24)(706,"span",25),iN(707," (p-change)"),Gl(708,"br"),sg()()(),Tl(709,"td",18)(710,"code",26),iN(711,"EventEmitter"),sg()(),Tl(712,"td",20),iN(713,"-"),sg(),Tl(714,"td",21)(715,"p"),iN(716,"Evento disparado ao alterar valor do campo."),sg()()(),Tl(717,"tr",14)(718,"td",15)(719,"div",16)(720,"span",17),iN(721," p-optional"),Gl(722,"br"),sg()()(),Tl(723,"td",18)(724,"code",19),iN(725,"boolean"),sg()(),Tl(726,"td",20)(727,"p")(728,"code"),iN(729,"false"),sg()()(),Tl(730,"td",21)(731,"em")(732,"strong"),iN(733,"(opcional)"),sg()(),Tl(734,"p"),iN(735,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg()()(),Tl(736,"tr",14)(737,"td",15)(738,"div",16)(739,"span",17),iN(740," p-placeholder"),Gl(741,"br"),sg()()(),Tl(742,"td",18)(743,"code",22),iN(744,"string"),sg()(),Tl(745,"td",20),iN(746,"-"),sg(),Tl(747,"td",21)(748,"em")(749,"strong"),iN(750,"(opcional)"),sg()(),Tl(751,"p"),iN(752,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg(),Tl(753,"p"),iN(754,"Para personalizar os segmentos, informe o valor no formato "),Tl(755,"code"),iN(756,"HH:mm"),sg(),iN(757," ou "),Tl(758,"code"),iN(759,"HH:mm:ss"),sg(),iN(760,"."),sg()()(),Tl(761,"tr",14)(762,"td",15)(763,"div",16)(764,"span",17),iN(765," p-helper"),Gl(766,"br"),sg()()(),Tl(767,"td",18)(768,"code",29),iN(769,"PoHelperOptions "),sg(),Tl(770,"code",22),iN(771," string"),sg()(),Tl(772,"td",20),iN(773,"-"),sg(),Tl(774,"td",21)(775,"em")(776,"strong"),iN(777,"(opcional)"),sg()(),Tl(778,"p"),iN(779,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),sg()()(),Tl(780,"tr",14)(781,"td",15)(782,"div",16)(783,"span",17),iN(784,"p-readonly"),Gl(785,"br"),sg()()(),Tl(786,"td",18)(787,"code",19),iN(788,"boolean"),sg()(),Tl(789,"td",20),iN(790,"-"),sg(),Tl(791,"td",21)(792,"em")(793,"strong"),iN(794,"(opcional)"),sg()(),Tl(795,"p"),iN(796,"Torna o elemento somente leitura."),sg()()(),Tl(797,"tr",14)(798,"td",15)(799,"div",16)(800,"span",17),iN(801,"p-required"),Gl(802,"br"),sg()()(),Tl(803,"td",18)(804,"code",19),iN(805,"boolean"),sg()(),Tl(806,"td",20)(807,"p")(808,"code"),iN(809,"false"),sg()()(),Tl(810,"td",21)(811,"em")(812,"strong"),iN(813,"(opcional)"),sg()(),Tl(814,"p"),iN(815,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Tl(816,"tr",14)(817,"td",15)(818,"div",16)(819,"span",17),iN(820," p-second-interval"),Gl(821,"br"),sg()()(),Tl(822,"td",18)(823,"code",27),iN(824,"number"),sg()(),Tl(825,"td",20)(826,"p")(827,"code"),iN(828,"1"),sg()()(),Tl(829,"td",21)(830,"em")(831,"strong"),iN(832,"(opcional)"),sg()(),Tl(833,"p"),iN(834,"Define o intervalo entre os segundos exibidos no painel."),sg()()(),Tl(835,"tr",14)(836,"td",15)(837,"div",16)(838,"span",17),iN(839," p-required-field-error-message"),Gl(840,"br"),sg()()(),Tl(841,"td",18)(842,"code",19),iN(843,"boolean"),sg()(),Tl(844,"td",20)(845,"p")(846,"code"),iN(847,"false"),sg()()(),Tl(848,"td",21)(849,"em")(850,"strong"),iN(851,"(opcional)"),sg()(),Tl(852,"p"),iN(853,"Exibe a mensagem setada na propriedade "),Tl(854,"code"),iN(855,"p-error-pattern"),sg(),iN(856," se o campo estiver vazio e for requerido."),sg()()(),Tl(857,"tr",14)(858,"td",15)(859,"div",16)(860,"span",17),iN(861," p-show-required"),Gl(862,"br"),sg()()(),Tl(863,"td",18)(864,"code",19),iN(865,"boolean"),sg()(),Tl(866,"td",20),iN(867,"-"),sg(),Tl(868,"td",21)(869,"p"),iN(870,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg()()(),Tl(871,"tr",14)(872,"td",15)(873,"div",16)(874,"span",17),iN(875," p-show-seconds"),Gl(876,"br"),sg()()(),Tl(877,"td",18)(878,"code",19),iN(879,"boolean"),sg()(),Tl(880,"td",20)(881,"p")(882,"code"),iN(883,"false"),sg()()(),Tl(884,"td",21)(885,"em")(886,"strong"),iN(887,"(opcional)"),sg()(),Tl(888,"p"),iN(889,"Exibe a coluna de segundos no painel."),sg()()(),Tl(890,"tr",14)(891,"td",15)(892,"div",16)(893,"span",17),iN(894," p-size"),Gl(895,"br"),sg()()(),Tl(896,"td",18)(897,"code",22),iN(898,"string"),sg()(),Tl(899,"td",20)(900,"p")(901,"code"),iN(902,"medium"),sg()()(),Tl(903,"td",21)(904,"em")(905,"strong"),iN(906,"(opcional)"),sg()(),Tl(907,"p"),iN(908,"Define o tamanho do componente:"),sg(),Tl(909,"ul")(910,"li")(911,"code"),iN(912,"small"),sg(),iN(913,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(914,"li")(915,"code"),iN(916,"medium"),sg(),iN(917,": altura do input como 44px."),sg()()()()(),Tl(918,"h3",10),iN(919,"M\xE9todos"),sg(),Tl(920,"table",30)(921,"tr",14)(922,"th",31)(923,"div",16)(924,"h4")(925,"span",17),iN(926," focus "),sg()()()()(),Tl(927,"tr",21)(928,"td",21)(929,"p"),iN(930,"Fun\xE7\xE3o que atribui foco ao componente."),sg(),Tl(931,"p"),iN(932,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),sg(),Tl(933,"pre")(934,"code"),iN(935,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),sg()()()()(),Gl(936,"br"),Tl(937,"table",30)(938,"tr",14)(939,"th",31)(940,"div",16)(941,"h4")(942,"span",17),iN(943," showAdditionalHelp "),sg()()()()(),Tl(944,"tr",21)(945,"td",21)(946,"p"),iN(947,"M\xE9todo que exibe "),Tl(948,"code"),iN(949,"p-helper"),sg(),iN(950," ou executa a a\xE7\xE3o definida em "),Tl(951,"code"),iN(952,"p-helper{eventOnClick}"),sg(),iN(953," ou em "),Tl(954,"code"),iN(955,"p-additionalHelp"),sg(),iN(956,"."),sg()()()(),Gl(957,"br"),Tl(958,"h3"),iN(959,"Enums"),sg(),Tl(960,"h4",4)(961,"code",5),iN(962,"PoTimepickerModelFormat"),sg()(),Tl(963,"div",2)(964,"p")(965,"em"),iN(966,"Enum"),sg(),iN(967," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),sg()(),Tl(968,"h4",10),iN(969,"Propriedades"),sg(),Tl(970,"table",11)(971,"tr",12)(972,"th",13),iN(973,"Nome"),sg(),Tl(974,"th",13),iN(975,"Descri\xE7\xE3o"),sg()(),Tl(976,"tr",14)(977,"td",15)(978,"div",16)(979,"span",17),iN(980," HourMinute"),Gl(981,"br"),sg()()(),Tl(982,"td",21)(983,"p"),iN(984,"Formato b\xE1sico "),Tl(985,"code"),iN(986,"HH:mm"),sg(),iN(987," (ex: "),Tl(988,"code"),iN(989,"14:30"),sg(),iN(990,")."),sg()()(),Tl(991,"tr",14)(992,"td",15)(993,"div",16)(994,"span",17),iN(995," HourMinuteSecond"),Gl(996,"br"),sg()()(),Tl(997,"td",21)(998,"p"),iN(999,"Formato com segundos "),Tl(1e3,"code"),iN(1001,"HH:mm:ss"),sg(),iN(1002," (ex: "),Tl(1003,"code"),iN(1004,"14:30:00"),sg(),iN(1005,")."),sg()()()()());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var Ce=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(wn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Timepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-timepicker-doc"),sg(),Tl(4,"po-tab",3),ht("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-timepicker-basic-view")(6,"sample-po-timepicker-labs-view")(7,"sample-po-timepicker-scheduling-view")(8,"sample-po-timepicker-business-hours-view"),sg()()()),r&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[lNe,Wme,jme,ce,he,be,fe,ve],encapsulation:2,changeDetection:1})}return l})();var Ve=[{path:"",component:Ce}],xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[DL.forChild(Ve),DL]})}return l})();var Ct=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[ar,xe]})}return l})();export{Ct as DocPoTimepickerModule};