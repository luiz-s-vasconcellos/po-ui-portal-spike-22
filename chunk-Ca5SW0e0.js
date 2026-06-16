import {f as fe$1,u as ue$1,a as u5,v as vL,C,bv as Xn,c as Cn,U as Un,cC as L0,d as f,by as vle,aE as Bp,cq as xa,N as Ul,a$ as fO,ag as fP,aS as Vd,aT as Rd,J as wl,z as Ux,R as ng,a1 as ut,P as Pp,bw as Ax,aY as cg,S as YE,bi as Jx,aF as aY,ae as iY,aG as oY,af as ck,aH as ok,aK as Pe,aL as di,bx as ia,aO as Yo,bT as ha,bB as ga,bC as Vp,al as lx,am as pw,an as $0,ap as hw,aq as G0,b9 as Ro,ai as ya,aX as _x,as as $l,at as uo,au as fo,a3 as D3,az as Qy,aB as $x,aA as Jy}from'./main-6SPFG3VI.js';var ue=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","timepicker","p-label","PO Timepicker"]],template:function(r,i){r&1&&Ul(0,"po-timepicker",0);},dependencies:[xa],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l}),ge=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Timepicker Basic"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-timepicker-basic"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,we,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,ue],encapsulation:2})}return l})();var be=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:"HourMinute",value:L0.HourMinute},{label:"HourMinuteSecond",value:L0.HourMinuteSecond}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"},{value:"appendInBody",label:"Append In Body"}];formatOptions=[{label:"24",value:"24"},{label:"12",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-labs"]],standalone:false,decls:24,vars:49,consts:[["f","ngForm"],["name","timepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-disabled","p-error-pattern","p-format","p-helper","p-help","p-model-format","p-label","p-locale","p-max-time","p-min-time","p-minute-interval","p-second-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-show-seconds","p-label-text-wrap","p-loading","p-compact-label","p-append-in-body","p-error-limit","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helper","p-clean","","p-label","Helper",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","modelFormat","p-columns","4","p-label","Model Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=lx();wl(0,"po-timepicker",1),pw("ngModelChange",function(o){return Qy(s),$x(i.timepicker,o)||(i.timepicker=o),Jy(o)}),ut("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),ng(),$0(),Ul(1,"po-divider"),wl(2,"div",2),Ul(3,"po-info",3)(4,"po-info",4),ng(),Ul(5,"po-divider"),wl(6,"form",null,0)(8,"po-input",5),pw("ngModelChange",function(o){return Qy(s),$x(i.label,o)||(i.label=o),Jy(o)}),ng(),$0(),wl(9,"po-input",6),pw("ngModelChange",function(o){return Qy(s),$x(i.help,o)||(i.help=o),Jy(o)}),ng(),$0(),wl(10,"po-input",7),pw("ngModelChange",function(o){return Qy(s),$x(i.helper,o)||(i.helper=o),Jy(o)}),ng(),$0(),wl(11,"po-input",8),pw("ngModelChange",function(o){return Qy(s),$x(i.placeholder,o)||(i.placeholder=o),Jy(o)}),ng(),$0(),wl(12,"po-input",9),pw("ngModelChange",function(o){return Qy(s),$x(i.errorPattern,o)||(i.errorPattern=o),Jy(o)}),ng(),$0(),wl(13,"po-timepicker",10),pw("ngModelChange",function(o){return Qy(s),$x(i.minTime,o)||(i.minTime=o),Jy(o)}),ng(),$0(),wl(14,"po-timepicker",11),pw("ngModelChange",function(o){return Qy(s),$x(i.maxTime,o)||(i.maxTime=o),Jy(o)}),ng(),$0(),wl(15,"po-number",12),pw("ngModelChange",function(o){return Qy(s),$x(i.minuteInterval,o)||(i.minuteInterval=o),Jy(o)}),ng(),$0(),wl(16,"po-number",13),pw("ngModelChange",function(o){return Qy(s),$x(i.secondInterval,o)||(i.secondInterval=o),Jy(o)}),ng(),$0(),wl(17,"po-checkbox-group",14),pw("ngModelChange",function(o){return Qy(s),$x(i.properties,o)||(i.properties=o),Jy(o)}),ng(),$0(),wl(18,"po-radio-group",15),pw("ngModelChange",function(o){return Qy(s),$x(i.locale,o)||(i.locale=o),Jy(o)}),ng(),$0(),wl(19,"po-radio-group",16),pw("ngModelChange",function(o){return Qy(s),$x(i.format,o)||(i.format=o),Jy(o)}),ng(),$0(),wl(20,"po-radio-group",17),pw("ngModelChange",function(o){return Qy(s),$x(i.modelFormat,o)||(i.modelFormat=o),Jy(o)}),ng(),$0(),wl(21,"po-radio-group",18),pw("ngModelChange",function(o){return Qy(s),$x(i.size,o)||(i.size=o),Jy(o)}),ng(),$0(),wl(22,"div",2)(23,"po-button",19),ut("p-click",function(){return i.restore()}),ng()()();}r&2&&(hw("ngModel",i.timepicker),YE("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-format",i.format)("p-helper",i.helper)("p-help",i.help)("p-model-format",i.modelFormat)("p-label",i.label)("p-locale",i.locale)("p-max-time",i.maxTime)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-second-interval",i.secondInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-append-in-body",i.properties==null?null:i.properties.includes("appendInBody"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-size",i.size),G0(),Pp(3),YE("p-value",i.timepicker),Pp(),YE("p-value",i.event),Pp(4),hw("ngModel",i.label),G0(),Pp(),hw("ngModel",i.help),G0(),Pp(),hw("ngModel",i.helper),G0(),Pp(),hw("ngModel",i.placeholder),G0(),Pp(),hw("ngModel",i.errorPattern),G0(),Pp(),hw("ngModel",i.minTime),G0(),Pp(),hw("ngModel",i.maxTime),G0(),Pp(),hw("ngModel",i.minuteInterval),G0(),Pp(),hw("ngModel",i.secondInterval),G0(),Pp(),hw("ngModel",i.properties),YE("p-options",i.propertiesOptions),G0(),Pp(),hw("ngModel",i.locale),YE("p-options",i.localeOptions),G0(),Pp(),hw("ngModel",i.format),YE("p-options",i.formatOptions),G0(),Pp(),hw("ngModel",i.modelFormat),YE("p-options",i.modelFormatOptions),G0(),Pp(),hw("ngModel",i.size),YE("p-options",i.sizeOptions),G0());},dependencies:[aY,iY,oY,ck,ok,Pe,di,ia,Yo,ha,ga,xa,Vp],encapsulation:2,changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Timepicker Labs"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.html"),ng(),wl(13,"pre",7),Ux(14,`<po-timepicker
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-timepicker-labs"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,He,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,be],encapsulation:2})}return l})();var Fe=["formScheduling"],fe=(()=>{class l{poDialog=f(vle);poNotification=f(Bp);formScheduling;title="";date=new Date;startTime="";endTime="";room="";roomOptions=[{value:"sala-a",label:"Sala A"},{value:"sala-b",label:"Sala B"},{value:"sala-c",label:"Sala C"},{value:"auditorio",label:"Audit\xF3rio"}];schedule(){let d=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:"Confirmar Agendamento",message:d,confirm:()=>{this.poNotification.success("Agendamento confirmado com sucesso!"),this.formScheduling.reset({date:"",room:""});},cancel:()=>{this.poNotification.warning("Agendamento cancelado.");}});}getFormatedDate(d){return d&&d.slice(0,10)}getRoomLabel(){let d=this.roomOptions.find(r=>r.value===this.room);return d?d.label:this.room}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&$l(Fe,7),r&2){let s;uo(s=fo())&&(i.formScheduling=s.first);}},standalone:false,decls:11,vars:9,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","title","p-label","T\xEDtulo do agendamento","p-placeholder","Ex: Reuni\xE3o de planejamento","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","date","p-clean","","p-format","dd/mm/yyyy","p-label","Data","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","startTime","p-label","Hor\xE1rio de in\xEDcio","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","endTime","p-label","Hor\xE1rio de t\xE9rmino","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","room","p-label","Sala","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","scheduleButton","p-label","Agendar",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let s=lx();wl(0,"form",null,0)(2,"div",1)(3,"po-input",2),pw("ngModelChange",function(o){return Qy(s),$x(i.title,o)||(i.title=o),Jy(o)}),ng(),$0(),wl(4,"po-datepicker",3),pw("ngModelChange",function(o){return Qy(s),$x(i.date,o)||(i.date=o),Jy(o)}),ng(),$0(),ng(),wl(5,"div",1)(6,"po-timepicker",4),pw("ngModelChange",function(o){return Qy(s),$x(i.startTime,o)||(i.startTime=o),Jy(o)}),ng(),$0(),wl(7,"po-timepicker",5),pw("ngModelChange",function(o){return Qy(s),$x(i.endTime,o)||(i.endTime=o),Jy(o)}),ng(),$0(),wl(8,"po-select",6),pw("ngModelChange",function(o){return Qy(s),$x(i.room,o)||(i.room=o),Jy(o)}),ng(),$0(),ng(),wl(9,"div",1)(10,"po-button",7),ut("p-click",function(){return i.schedule()}),ng()()();}if(r&2){let s=_x(1);Pp(3),hw("ngModel",i.title),G0(),Pp(),hw("ngModel",i.date),G0(),Pp(2),hw("ngModel",i.startTime),YE("p-show-required",true),G0(),Pp(),hw("ngModel",i.endTime),YE("p-show-required",true),G0(),Pp(),hw("ngModel",i.room),YE("p-options",i.roomOptions),G0(),Pp(2),YE("p-disabled",s.invalid);}},dependencies:[aY,iY,oY,ck,ok,Pe,Ro,Yo,ya,xa],encapsulation:2,changeDetection:1})}return l})();var qe=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-scheduling-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Timepicker - Scheduling"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html"),ng(),wl(13,"pre",7),Ux(14,`<form #formScheduling="ngForm">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-timepicker-scheduling"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,qe,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,fe],encapsulation:2})}return l})();var Ce=(()=>{class l{poNotification=f(Bp);openTime="08:00";closeTime="18:00";lunchStart="12:00";lunchEnd="13:00";save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`);}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-business-hours"]],standalone:false,decls:8,vars:14,consts:[[1,"po-row"],["name","openTime","p-label","Abertura","p-clean","","p-min-time","06:00",1,"po-md-6",3,"ngModelChange","ngModel","p-max-time","p-minute-interval"],["name","closeTime","p-label","Fechamento","p-clean","","p-max-time","23:00",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-minute-interval"],["name","lunchStart","p-label","In\xEDcio do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["name","lunchEnd","p-label","Fim do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["p-label","Salvar","p-kind","primary",1,"po-md-3","po-offset-md-9",3,"p-click"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"po-timepicker",1),pw("ngModelChange",function(p){return $x(i.openTime,p)||(i.openTime=p),p}),ng(),$0(),wl(2,"po-timepicker",2),pw("ngModelChange",function(p){return $x(i.closeTime,p)||(i.closeTime=p),p}),ng(),$0(),ng(),wl(3,"div",0)(4,"po-timepicker",3),pw("ngModelChange",function(p){return $x(i.lunchStart,p)||(i.lunchStart=p),p}),ng(),$0(),wl(5,"po-timepicker",4),pw("ngModelChange",function(p){return $x(i.lunchEnd,p)||(i.lunchEnd=p),p}),ng(),$0(),ng(),wl(6,"div",0)(7,"po-button",5),ut("p-click",function(){return i.save()}),ng()()),r&2&&(Pp(),hw("ngModel",i.openTime),YE("p-max-time",i.lunchStart)("p-minute-interval",30),G0(),Pp(),hw("ngModel",i.closeTime),YE("p-min-time",i.lunchEnd)("p-minute-interval",30),G0(),Pp(2),hw("ngModel",i.lunchStart),YE("p-min-time",i.openTime)("p-max-time",i.lunchEnd)("p-minute-interval",15),G0(),Pp(),hw("ngModel",i.lunchEnd),YE("p-min-time",i.lunchStart)("p-max-time",i.closeTime)("p-minute-interval",15),G0());},dependencies:[iY,ck,Pe,xa],encapsulation:2,changeDetection:1})}return l})();var Ie=l=>({"docs-sample-code-tabs":l}),xe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-business-hours-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Ul(0,"br"),wl(1,"blockquote",0)(2,"label",1),Ux(3,"PO Timepicker - Business Hours"),ng(),wl(4,"a",2),ut("click",function(){return i.toggleSampleCodeTabs()}),Ul(5,"span"),Ux(6),ng()(),wl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),Ux(12,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html"),ng(),wl(13,"pre",7),Ux(14,`<div class="po-row">
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
`),ng()()(),wl(15,"po-tab",8)(16,"div")(17,"label",6),Ux(18,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts"),ng(),wl(19,"pre",9),Ux(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ng()()()()(),wl(21,"div",10),Ul(22,"sample-po-timepicker-business-hours"),ng(),Ul(23,"hr")),r&2&&(Pp(5),Ax("po-icon "+i.sampleCodeButtonIcon),Pp(),cg(" ",i.sampleCodeButtonLabel),Pp(),YE("ngClass",Jx(4,Ie,i.hideSampleCodeTabs)));},dependencies:[fO,fP,Vd,Rd,Ce],encapsulation:2})}return l})();var ke=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-doc"]],standalone:false,decls:1006,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(wl(0,"div",0)(1,"p",1)(2,"code"),Ux(3,"import { PoFieldModule } from '@po-ui/ng-components';"),ng()(),wl(4,"div",2)(5,"p"),Ux(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),ng(),wl(7,"blockquote")(8,"p"),Ux(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),wl(10,"code"),Ux(11,"FormsModule"),ng(),Ux(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),wl(13,"code"),Ux(14,"ReactiveFormsModule"),ng(),Ux(15,", ambos nativos do Angular."),ng()()(),wl(16,"h3",3),Ux(17,"Componente"),ng(),wl(18,"h4",4)(19,"code",5),Ux(20,"PoTimepickerComponent"),ng()(),wl(21,"div",2)(22,"p"),Ux(23,"O "),wl(24,"code"),Ux(25,"po-timepicker"),ng(),Ux(26," \xE9 um componente para sele\xE7\xE3o de hor\xE1rio que permite a digita\xE7\xE3o e/ou sele\xE7\xE3o via painel flutuante."),ng(),wl(27,"p"),Ux(28,"O formato de exibi\xE7\xE3o do hor\xE1rio pode ser de 24 horas ("),wl(29,"code"),Ux(30,"HH:mm"),ng(),Ux(31,") ou 12 horas ("),wl(32,"code"),Ux(33,"hh:mm AM/PM"),ng(),Ux(34,`),
e opcionalmente incluir segundos (`),wl(35,"code"),Ux(36,"HH:mm:ss"),ng(),Ux(37,")."),ng(),wl(38,"p"),Ux(39,"O valor de sa\xEDda segue o formato ISO 8601 para hor\xE1rios ("),wl(40,"code"),Ux(41,"HH:mm"),ng(),Ux(42," ou "),wl(43,"code"),Ux(44,"HH:mm:ss"),ng(),Ux(45,")."),ng(),wl(46,"p")(47,"strong"),Ux(48,"Importante:"),ng()(),wl(49,"ul")(50,"li"),Ux(51,"Caso o valor digitado seja inv\xE1lido, o "),wl(52,"code"),Ux(53,"model"),ng(),Ux(54," receber\xE1 uma string vazia."),ng(),wl(55,"li"),Ux(56,"Caso o "),wl(57,"code"),Ux(58,"input"),ng(),Ux(59," esteja passando um "),wl(60,"code"),Ux(61,"[(ngModel)]"),ng(),Ux(62,", mas n\xE3o tenha um "),wl(63,"code"),Ux(64,"name"),ng(),Ux(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),wl(66,"code"),Ux(67,'[ngModelOptions]="{standalone: true}"'),ng(),Ux(68,")."),ng()(),wl(69,"blockquote")(70,"p"),Ux(71,"N\xE3o esque\xE7a de importar o "),wl(72,"code"),Ux(73,"FormsModule"),ng(),Ux(74," em seu m\xF3dulo, tal como para utilizar o "),wl(75,"code"),Ux(76,"input default"),ng(),Ux(77,"."),ng()(),wl(78,"h4"),Ux(79,"Tokens customiz\xE1veis"),ng(),wl(80,"p"),Ux(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),wl(82,"code"),Ux(83,".po-input"),ng()(),wl(84,"blockquote")(85,"p"),Ux(86,"Para maiores informa\xE7\xF5es, acesse o guia "),wl(87,"a",6),Ux(88,"Personalizando o Tema Padr\xE3o com Tokens CSS"),ng(),Ux(89,"."),ng()(),wl(90,"table")(91,"thead")(92,"tr")(93,"th"),Ux(94,"Propriedade"),ng(),wl(95,"th"),Ux(96,"Descri\xE7\xE3o"),ng(),wl(97,"th"),Ux(98,"Valor Padr\xE3o"),ng()()(),wl(99,"tbody")(100,"tr")(101,"td")(102,"strong"),Ux(103,"Default Values"),ng()(),Ul(104,"td")(105,"td"),ng(),wl(106,"tr")(107,"td")(108,"code"),Ux(109,"--font-family"),ng()(),wl(110,"td"),Ux(111,"Fam\xEDlia tipogr\xE1fica usada"),ng(),wl(112,"td")(113,"code"),Ux(114,"var(--font-family-theme)"),ng()()(),wl(115,"tr")(116,"td")(117,"code"),Ux(118,"--font-size"),ng()(),wl(119,"td"),Ux(120,"Tamanho da fonte"),ng(),wl(121,"td")(122,"code"),Ux(123,"var(--font-size-default)"),ng()()(),wl(124,"tr")(125,"td")(126,"code"),Ux(127,"--text-color-placeholder"),ng()(),wl(128,"td"),Ux(129,"Cor do texto placeholder"),ng(),wl(130,"td")(131,"code"),Ux(132,"var(--color-neutral-light-30)"),ng()()(),wl(133,"tr")(134,"td")(135,"code"),Ux(136,"--color"),ng()(),wl(137,"td"),Ux(138,"Cor principal do timepicker"),ng(),wl(139,"td")(140,"code"),Ux(141,"var(--color-neutral-dark-70)"),ng()()(),wl(142,"tr")(143,"td")(144,"code"),Ux(145,"--background"),ng()(),wl(146,"td"),Ux(147,"Cor de background"),ng(),wl(148,"td")(149,"code"),Ux(150,"var(--color-neutral-light-05)"),ng()()(),wl(151,"tr")(152,"td")(153,"code"),Ux(154,"--padding"),ng()(),wl(155,"td"),Ux(156,"Preenchimento"),ng(),wl(157,"td")(158,"code"),Ux(159,"0 0.5rem"),ng()()(),wl(160,"tr")(161,"td")(162,"code"),Ux(163,"--text-color"),ng()(),wl(164,"td"),Ux(165,"Cor do texto"),ng(),wl(166,"td")(167,"code"),Ux(168,"var(--color-neutral-dark-90)"),ng()()(),wl(169,"tr")(170,"td")(171,"code"),Ux(172,"--field-container-title-justify"),ng()(),wl(173,"td"),Ux(174,"Alinhamento horizontal do t\xEDtulo ("),wl(175,"code"),Ux(176,"justify-content"),ng(),Ux(177,")"),ng(),wl(178,"td")(179,"code"),Ux(180,"space-between"),ng()()(),wl(181,"tr")(182,"td")(183,"code"),Ux(184,"--field-container-title-flex"),ng()(),wl(185,"td"),Ux(186,"Flex do t\xEDtulo ("),wl(187,"code"),Ux(188,"flex"),ng(),Ux(189,")"),ng(),wl(190,"td")(191,"code"),Ux(192,"1 auto"),ng()()(),wl(193,"tr")(194,"td")(195,"strong"),Ux(196,"Hover"),ng()(),Ul(197,"td")(198,"td"),ng(),wl(199,"tr")(200,"td")(201,"code"),Ux(202,"--color-hover"),ng()(),wl(203,"td"),Ux(204,"Cor principal no estado hover"),ng(),wl(205,"td")(206,"code"),Ux(207,"var(--color-brand-01-dark)"),ng()()(),wl(208,"tr")(209,"td")(210,"code"),Ux(211,"--background-hover"),ng()(),wl(212,"td"),Ux(213,"Cor de background no estado hover"),ng(),wl(214,"td")(215,"code"),Ux(216,"var(--color-brand-01-lightest)"),ng()()(),wl(217,"tr")(218,"td")(219,"strong"),Ux(220,"Focused"),ng()(),Ul(221,"td")(222,"td"),ng(),wl(223,"tr")(224,"td")(225,"code"),Ux(226,"--color-focused"),ng()(),wl(227,"td"),Ux(228,"Cor principal no estado de focus"),ng(),wl(229,"td")(230,"code"),Ux(231,"var(--color-action-default)"),ng()()(),wl(232,"tr")(233,"td")(234,"code"),Ux(235,"--outline-color-focused"),ng()(),wl(236,"td"),Ux(237,"Cor do outline do estado de focus"),ng(),wl(238,"td")(239,"code"),Ux(240,"var(--color-action-focus)"),ng()()(),wl(241,"tr")(242,"td")(243,"strong"),Ux(244,"Disabled"),ng()(),Ul(245,"td")(246,"td"),ng(),wl(247,"tr")(248,"td")(249,"code"),Ux(250,"--color-disabled"),ng()(),wl(251,"td"),Ux(252,"Cor principal no estado disabled"),ng(),wl(253,"td")(254,"code"),Ux(255,"var(--color-neutral-light-30)"),ng()()(),wl(256,"tr")(257,"td")(258,"code"),Ux(259,"--background-disabled"),ng()(),wl(260,"td"),Ux(261,"Cor de background no estado disabled"),ng(),wl(262,"td")(263,"code"),Ux(264,"var(--color-neutral-light-20)"),ng()()(),wl(265,"tr")(266,"td")(267,"code"),Ux(268,"--text-color-disabled"),ng()(),wl(269,"td"),Ux(270,"Cor do texto no estado disabled"),ng(),wl(271,"td")(272,"code"),Ux(273,"var(--color-neutral-dark-70)"),ng()()()()()(),wl(274,"div",7)(275,"h4",8),Ux(276,"Seletor"),ng(),wl(277,"pre",9),Ux(278,`<po-timepicker
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
`),ng()(),wl(279,"h4",10),Ux(280,"Propriedades"),ng(),wl(281,"table",11)(282,"tr",12)(283,"th",13),Ux(284,"Nome"),ng(),wl(285,"th",13),Ux(286,"Tipo"),ng(),wl(287,"th",13),Ux(288,"Padr\xE3o"),ng(),wl(289,"th",13),Ux(290,"Descri\xE7\xE3o"),ng()(),wl(291,"tr",14)(292,"td",15)(293,"div",16)(294,"span",17),Ux(295," p-append-in-body"),Ul(296,"br"),ng()()(),wl(297,"td",18)(298,"code",19),Ux(299,"boolean"),ng()(),wl(300,"td",20)(301,"p")(302,"code"),Ux(303,"false"),ng()()(),wl(304,"td",21)(305,"em")(306,"strong"),Ux(307,"(opcional)"),ng()(),wl(308,"p"),Ux(309,"Define que o painel do timer ser\xE1 inclu\xEDdo no body da p\xE1gina."),ng()()(),wl(310,"tr",14)(311,"td",15)(312,"div",16)(313,"span",17),Ux(314," p-auto-focus"),Ul(315,"br"),ng()()(),wl(316,"td",18)(317,"code",19),Ux(318,"boolean"),ng()(),wl(319,"td",20)(320,"p")(321,"code"),Ux(322,"false"),ng()()(),wl(323,"td",21)(324,"em")(325,"strong"),Ux(326,"(opcional)"),ng()(),wl(327,"p"),Ux(328,"Aplica foco no elemento ao ser iniciado."),ng()()(),wl(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),Ux(333,"p-clean"),Ul(334,"br"),ng()()(),wl(335,"td",18)(336,"code",19),Ux(337,"boolean"),ng()(),wl(338,"td",20),Ux(339,"-"),ng(),wl(340,"td",21)(341,"em")(342,"strong"),Ux(343,"(opcional)"),ng()(),wl(344,"p"),Ux(345,"Habilita a\xE7\xE3o para limpar o campo."),ng()()(),wl(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),Ux(350," p-compact-label"),Ul(351,"br"),ng()()(),wl(352,"td",18)(353,"code",19),Ux(354,"boolean"),ng()(),wl(355,"td",20)(356,"p")(357,"code"),Ux(358,"false"),ng()()(),wl(359,"td",21)(360,"em")(361,"strong"),Ux(362,"(opcional)"),ng()(),wl(363,"p"),Ux(364,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),ng()()(),wl(365,"tr",14)(366,"td",15)(367,"div",16)(368,"span",17),Ux(369,"p-disabled"),Ul(370,"br"),ng()()(),wl(371,"td",18)(372,"code",19),Ux(373,"boolean"),ng()(),wl(374,"td",20),Ux(375,"-"),ng(),wl(376,"td",21)(377,"em")(378,"strong"),Ux(379,"(opcional)"),ng()(),wl(380,"p"),Ux(381,"Desabilita o campo."),ng()()(),wl(382,"tr",14)(383,"td",15)(384,"div",16)(385,"span",17),Ux(386," p-error-limit"),Ul(387,"br"),ng()()(),wl(388,"td",18)(389,"code",19),Ux(390,"boolean"),ng()(),wl(391,"td",20)(392,"p")(393,"code"),Ux(394,"false"),ng()()(),wl(395,"td",21)(396,"em")(397,"strong"),Ux(398,"(opcional)"),ng()(),wl(399,"p"),Ux(400,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),ng()()(),wl(401,"tr",14)(402,"td",15)(403,"div",16)(404,"span",17),Ux(405," p-error-pattern"),Ul(406,"br"),ng()()(),wl(407,"td",18)(408,"code",22),Ux(409,"string"),ng()(),wl(410,"td",20),Ux(411,"-"),ng(),wl(412,"td",21)(413,"em")(414,"strong"),Ux(415,"(opcional)"),ng()(),wl(416,"p"),Ux(417,"Mensagem apresentada quando o hor\xE1rio for inv\xE1lido ou fora do per\xEDodo."),ng(),wl(418,"blockquote")(419,"p"),Ux(420,"Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido."),ng()()()(),wl(421,"tr",14)(422,"td",15)(423,"div",16)(424,"span",17),Ux(425," p-format"),Ul(426,"br"),ng()()(),wl(427,"td",18)(428,"code",23),Ux(429,"PoTimerFormat"),ng()(),wl(430,"td",20)(431,"p")(432,"code"),Ux(433,"24"),ng()()(),wl(434,"td",21)(435,"em")(436,"strong"),Ux(437,"(opcional)"),ng()(),wl(438,"p"),Ux(439,"Define o formato de exibi\xE7\xE3o do timer."),ng(),wl(440,"p"),Ux(441,"Valores v\xE1lidos:"),ng(),wl(442,"ul")(443,"li")(444,"code"),Ux(445,"24"),ng(),Ux(446,": formato de 24 horas (padr\xE3o)"),ng(),wl(447,"li")(448,"code"),Ux(449,"12"),ng(),Ux(450,": formato de 12 horas com indicador AM/PM"),ng()()()(),wl(451,"tr",14)(452,"td",15)(453,"div",16)(454,"span",17),Ux(455," p-help"),Ul(456,"br"),ng()()(),wl(457,"td",18)(458,"code",22),Ux(459,"string"),ng()(),wl(460,"td",20),Ux(461,"-"),ng(),wl(462,"td",21)(463,"em")(464,"strong"),Ux(465,"(opcional)"),ng()(),wl(466,"p"),Ux(467,"Texto de apoio do campo."),ng()()(),wl(468,"tr",14)(469,"td",15)(470,"div",24)(471,"span",25),Ux(472," (p-keydown)"),Ul(473,"br"),ng()()(),wl(474,"td",18)(475,"code",26),Ux(476,"EventEmitter"),ng()(),wl(477,"td",20),Ux(478,"-"),ng(),wl(479,"td",21)(480,"p"),Ux(481,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),ng()()(),wl(482,"tr",14)(483,"td",15)(484,"div",16)(485,"span",17),Ux(486," p-label"),Ul(487,"br"),ng()()(),wl(488,"td",18)(489,"code",22),Ux(490,"string"),ng()(),wl(491,"td",20),Ux(492,"-"),ng(),wl(493,"td",21)(494,"em")(495,"strong"),Ux(496,"(opcional)"),ng()(),wl(497,"p"),Ux(498,"R\xF3tulo do campo."),ng()()(),wl(499,"tr",14)(500,"td",15)(501,"div",16)(502,"span",17),Ux(503," p-label-text-wrap"),Ul(504,"br"),ng()()(),wl(505,"td",18)(506,"code",19),Ux(507,"boolean"),ng()(),wl(508,"td",20)(509,"p")(510,"code"),Ux(511,"false"),ng()()(),wl(512,"td",21)(513,"em")(514,"strong"),Ux(515,"(opcional)"),ng()(),wl(516,"p"),Ux(517,"Habilita a quebra autom\xE1tica do texto da propriedade "),wl(518,"code"),Ux(519,"p-label"),ng(),Ux(520,"."),ng()()(),wl(521,"tr",14)(522,"td",15)(523,"div",16)(524,"span",17),Ux(525," p-loading"),Ul(526,"br"),ng()()(),wl(527,"td",18)(528,"code",19),Ux(529,"boolean"),ng()(),wl(530,"td",20)(531,"p")(532,"code"),Ux(533,"false"),ng()()(),wl(534,"td",21)(535,"em")(536,"strong"),Ux(537,"(opcional)"),ng()(),wl(538,"p"),Ux(539,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),ng()()(),wl(540,"tr",14)(541,"td",15)(542,"div",16)(543,"span",17),Ux(544," p-locale"),Ul(545,"br"),ng()()(),wl(546,"td",18)(547,"code",22),Ux(548,"string"),ng()(),wl(549,"td",20),Ux(550,"-"),ng(),wl(551,"td",21)(552,"em")(553,"strong"),Ux(554,"(opcional)"),ng()(),wl(555,"p"),Ux(556,"Idioma do componente."),ng()()(),wl(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),Ux(561," p-max-time"),Ul(562,"br"),ng()()(),wl(563,"td",18)(564,"code",22),Ux(565,"string"),ng()(),wl(566,"td",20),Ux(567,"-"),ng(),wl(568,"td",21)(569,"em")(570,"strong"),Ux(571,"(opcional)"),ng()(),wl(572,"p"),Ux(573,"Define o hor\xE1rio m\xE1ximo permitido. Formato: "),wl(574,"code"),Ux(575,"HH:mm"),ng(),Ux(576," ou "),wl(577,"code"),Ux(578,"HH:mm:ss"),ng(),Ux(579,"."),ng()()(),wl(580,"tr",14)(581,"td",15)(582,"div",16)(583,"span",17),Ux(584," p-min-time"),Ul(585,"br"),ng()()(),wl(586,"td",18)(587,"code",22),Ux(588,"string"),ng()(),wl(589,"td",20),Ux(590,"-"),ng(),wl(591,"td",21)(592,"em")(593,"strong"),Ux(594,"(opcional)"),ng()(),wl(595,"p"),Ux(596,"Define o hor\xE1rio m\xEDnimo permitido. Formato: "),wl(597,"code"),Ux(598,"HH:mm"),ng(),Ux(599," ou "),wl(600,"code"),Ux(601,"HH:mm:ss"),ng(),Ux(602,"."),ng()()(),wl(603,"tr",14)(604,"td",15)(605,"div",16)(606,"span",17),Ux(607," p-minute-interval"),Ul(608,"br"),ng()()(),wl(609,"td",18)(610,"code",27),Ux(611,"number"),ng()(),wl(612,"td",20)(613,"p")(614,"code"),Ux(615,"5"),ng()()(),wl(616,"td",21)(617,"em")(618,"strong"),Ux(619,"(opcional)"),ng()(),wl(620,"p"),Ux(621,"Define o intervalo entre os minutos exibidos no painel."),ng()()(),wl(622,"tr",14)(623,"td",15)(624,"div",16)(625,"span",17),Ux(626," p-model-format"),Ul(627,"br"),ng()()(),wl(628,"td",18)(629,"code",28),Ux(630,"PoTimepickerModelFormat"),ng()(),wl(631,"td",20),Ux(632,"-"),ng(),wl(633,"td",21)(634,"em")(635,"strong"),Ux(636,"(opcional)"),ng()(),wl(637,"p"),Ux(638,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),wl(639,"em"),Ux(640,"model"),ng(),Ux(641,"."),ng(),wl(642,"blockquote")(643,"p"),Ux(644,"Veja os valores v\xE1lidos no "),wl(645,"em"),Ux(646,"enum"),ng(),wl(647,"code"),Ux(648,"PoTimepickerModelFormat"),ng(),Ux(649,"."),ng()()()(),wl(650,"tr",14)(651,"td",15)(652,"div",16)(653,"span",17),Ux(654," name"),Ul(655,"br"),ng()()(),wl(656,"td",18)(657,"code",22),Ux(658,"string"),ng()(),wl(659,"td",20),Ux(660,"-"),ng(),wl(661,"td",21)(662,"p"),Ux(663,"Nome do componente."),ng()()(),wl(664,"tr",14)(665,"td",15)(666,"div",16)(667,"span",17),Ux(668," p-no-autocomplete"),Ul(669,"br"),ng()()(),wl(670,"td",18)(671,"code",19),Ux(672,"boolean"),ng()(),wl(673,"td",20)(674,"p")(675,"code"),Ux(676,"false"),ng()()(),wl(677,"td",21)(678,"em")(679,"strong"),Ux(680,"(opcional)"),ng()(),wl(681,"p"),Ux(682,"Define a propriedade nativa "),wl(683,"code"),Ux(684,"autocomplete"),ng(),Ux(685," do campo como "),wl(686,"code"),Ux(687,"off"),ng(),Ux(688,"."),ng()()(),wl(689,"tr",14)(690,"td",15)(691,"div",24)(692,"span",25),Ux(693," (p-blur)"),Ul(694,"br"),ng()()(),wl(695,"td",18)(696,"code",26),Ux(697,"EventEmitter"),ng()(),wl(698,"td",20),Ux(699,"-"),ng(),wl(700,"td",21)(701,"p"),Ux(702,"Evento disparado ao sair do campo."),ng()()(),wl(703,"tr",14)(704,"td",15)(705,"div",24)(706,"span",25),Ux(707," (p-change)"),Ul(708,"br"),ng()()(),wl(709,"td",18)(710,"code",26),Ux(711,"EventEmitter"),ng()(),wl(712,"td",20),Ux(713,"-"),ng(),wl(714,"td",21)(715,"p"),Ux(716,"Evento disparado ao alterar valor do campo."),ng()()(),wl(717,"tr",14)(718,"td",15)(719,"div",16)(720,"span",17),Ux(721," p-optional"),Ul(722,"br"),ng()()(),wl(723,"td",18)(724,"code",19),Ux(725,"boolean"),ng()(),wl(726,"td",20)(727,"p")(728,"code"),Ux(729,"false"),ng()()(),wl(730,"td",21)(731,"em")(732,"strong"),Ux(733,"(opcional)"),ng()(),wl(734,"p"),Ux(735,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),ng()()(),wl(736,"tr",14)(737,"td",15)(738,"div",16)(739,"span",17),Ux(740," p-placeholder"),Ul(741,"br"),ng()()(),wl(742,"td",18)(743,"code",22),Ux(744,"string"),ng()(),wl(745,"td",20),Ux(746,"-"),ng(),wl(747,"td",21)(748,"em")(749,"strong"),Ux(750,"(opcional)"),ng()(),wl(751,"p"),Ux(752,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),ng(),wl(753,"p"),Ux(754,"Para personalizar os segmentos, informe o valor no formato "),wl(755,"code"),Ux(756,"HH:mm"),ng(),Ux(757," ou "),wl(758,"code"),Ux(759,"HH:mm:ss"),ng(),Ux(760,"."),ng()()(),wl(761,"tr",14)(762,"td",15)(763,"div",16)(764,"span",17),Ux(765," p-helper"),Ul(766,"br"),ng()()(),wl(767,"td",18)(768,"code",29),Ux(769,"PoHelperOptions "),ng(),wl(770,"code",22),Ux(771," string"),ng()(),wl(772,"td",20),Ux(773,"-"),ng(),wl(774,"td",21)(775,"em")(776,"strong"),Ux(777,"(opcional)"),ng()(),wl(778,"p"),Ux(779,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),ng()()(),wl(780,"tr",14)(781,"td",15)(782,"div",16)(783,"span",17),Ux(784,"p-readonly"),Ul(785,"br"),ng()()(),wl(786,"td",18)(787,"code",19),Ux(788,"boolean"),ng()(),wl(789,"td",20),Ux(790,"-"),ng(),wl(791,"td",21)(792,"em")(793,"strong"),Ux(794,"(opcional)"),ng()(),wl(795,"p"),Ux(796,"Torna o elemento somente leitura."),ng()()(),wl(797,"tr",14)(798,"td",15)(799,"div",16)(800,"span",17),Ux(801,"p-required"),Ul(802,"br"),ng()()(),wl(803,"td",18)(804,"code",19),Ux(805,"boolean"),ng()(),wl(806,"td",20)(807,"p")(808,"code"),Ux(809,"false"),ng()()(),wl(810,"td",21)(811,"em")(812,"strong"),Ux(813,"(opcional)"),ng()(),wl(814,"p"),Ux(815,"Define que o campo ser\xE1 obrigat\xF3rio."),ng()()(),wl(816,"tr",14)(817,"td",15)(818,"div",16)(819,"span",17),Ux(820," p-second-interval"),Ul(821,"br"),ng()()(),wl(822,"td",18)(823,"code",27),Ux(824,"number"),ng()(),wl(825,"td",20)(826,"p")(827,"code"),Ux(828,"1"),ng()()(),wl(829,"td",21)(830,"em")(831,"strong"),Ux(832,"(opcional)"),ng()(),wl(833,"p"),Ux(834,"Define o intervalo entre os segundos exibidos no painel."),ng()()(),wl(835,"tr",14)(836,"td",15)(837,"div",16)(838,"span",17),Ux(839," p-required-field-error-message"),Ul(840,"br"),ng()()(),wl(841,"td",18)(842,"code",19),Ux(843,"boolean"),ng()(),wl(844,"td",20)(845,"p")(846,"code"),Ux(847,"false"),ng()()(),wl(848,"td",21)(849,"em")(850,"strong"),Ux(851,"(opcional)"),ng()(),wl(852,"p"),Ux(853,"Exibe a mensagem setada na propriedade "),wl(854,"code"),Ux(855,"p-error-pattern"),ng(),Ux(856," se o campo estiver vazio e for requerido."),ng()()(),wl(857,"tr",14)(858,"td",15)(859,"div",16)(860,"span",17),Ux(861," p-show-required"),Ul(862,"br"),ng()()(),wl(863,"td",18)(864,"code",19),Ux(865,"boolean"),ng()(),wl(866,"td",20),Ux(867,"-"),ng(),wl(868,"td",21)(869,"p"),Ux(870,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),ng()()(),wl(871,"tr",14)(872,"td",15)(873,"div",16)(874,"span",17),Ux(875," p-show-seconds"),Ul(876,"br"),ng()()(),wl(877,"td",18)(878,"code",19),Ux(879,"boolean"),ng()(),wl(880,"td",20)(881,"p")(882,"code"),Ux(883,"false"),ng()()(),wl(884,"td",21)(885,"em")(886,"strong"),Ux(887,"(opcional)"),ng()(),wl(888,"p"),Ux(889,"Exibe a coluna de segundos no painel."),ng()()(),wl(890,"tr",14)(891,"td",15)(892,"div",16)(893,"span",17),Ux(894," p-size"),Ul(895,"br"),ng()()(),wl(896,"td",18)(897,"code",22),Ux(898,"string"),ng()(),wl(899,"td",20)(900,"p")(901,"code"),Ux(902,"medium"),ng()()(),wl(903,"td",21)(904,"em")(905,"strong"),Ux(906,"(opcional)"),ng()(),wl(907,"p"),Ux(908,"Define o tamanho do componente:"),ng(),wl(909,"ul")(910,"li")(911,"code"),Ux(912,"small"),ng(),Ux(913,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),ng(),wl(914,"li")(915,"code"),Ux(916,"medium"),ng(),Ux(917,": altura do input como 44px."),ng()()()()(),wl(918,"h3",10),Ux(919,"M\xE9todos"),ng(),wl(920,"table",30)(921,"tr",14)(922,"th",31)(923,"div",16)(924,"h4")(925,"span",17),Ux(926," focus "),ng()()()()(),wl(927,"tr",21)(928,"td",21)(929,"p"),Ux(930,"Fun\xE7\xE3o que atribui foco ao componente."),ng(),wl(931,"p"),Ux(932,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),ng(),wl(933,"pre")(934,"code"),Ux(935,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),ng()()()()(),Ul(936,"br"),wl(937,"table",30)(938,"tr",14)(939,"th",31)(940,"div",16)(941,"h4")(942,"span",17),Ux(943," showAdditionalHelp "),ng()()()()(),wl(944,"tr",21)(945,"td",21)(946,"p"),Ux(947,"M\xE9todo que exibe "),wl(948,"code"),Ux(949,"p-helper"),ng(),Ux(950," ou executa a a\xE7\xE3o definida em "),wl(951,"code"),Ux(952,"p-helper{eventOnClick}"),ng(),Ux(953," ou em "),wl(954,"code"),Ux(955,"p-additionalHelp"),ng(),Ux(956,"."),ng()()()(),Ul(957,"br"),wl(958,"h3"),Ux(959,"Enums"),ng(),wl(960,"h4",4)(961,"code",5),Ux(962,"PoTimepickerModelFormat"),ng()(),wl(963,"div",2)(964,"p")(965,"em"),Ux(966,"Enum"),ng(),Ux(967," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),ng()(),wl(968,"h4",10),Ux(969,"Propriedades"),ng(),wl(970,"table",11)(971,"tr",12)(972,"th",13),Ux(973,"Nome"),ng(),wl(974,"th",13),Ux(975,"Descri\xE7\xE3o"),ng()(),wl(976,"tr",14)(977,"td",15)(978,"div",16)(979,"span",17),Ux(980," HourMinute"),Ul(981,"br"),ng()()(),wl(982,"td",21)(983,"p"),Ux(984,"Formato b\xE1sico "),wl(985,"code"),Ux(986,"HH:mm"),ng(),Ux(987," (ex: "),wl(988,"code"),Ux(989,"14:30"),ng(),Ux(990,")."),ng()()(),wl(991,"tr",14)(992,"td",15)(993,"div",16)(994,"span",17),Ux(995," HourMinuteSecond"),Ul(996,"br"),ng()()(),wl(997,"td",21)(998,"p"),Ux(999,"Formato com segundos "),wl(1e3,"code"),Ux(1001,"HH:mm:ss"),ng(),Ux(1002," (ex: "),wl(1003,"code"),Ux(1004,"14:30:00"),ng(),Ux(1005,")."),ng()()()()());},dependencies:[fP],encapsulation:2})}return l})();var Te=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(C(Xn),C(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Timepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(wl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ut("p-click",function(){return i.changeTab("doc")}),Ul(3,"sample-po-timepicker-doc"),ng(),wl(4,"po-tab",3),ut("p-click",function(){return i.changeTab("web")}),Ul(5,"sample-po-timepicker-basic-view")(6,"sample-po-timepicker-labs-view")(7,"sample-po-timepicker-scheduling-view")(8,"sample-po-timepicker-business-hours-view"),ng()()()),r&2&&(YE("p-actions",i.actions),Pp(2),YE("p-active",i.activeTab==="doc"),Pp(2),YE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[D3,Vd,Rd,ge,Ee,ve,xe,ke],encapsulation:2})}return l})();var Ae=[{path:"",component:Te}],ye=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue$1({imports:[vL.forChild(Ae),vL]})}return l})();var Ft=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue$1({imports:[u5,ye]})}return l})();export{Ft as DocPoTimepickerModule};