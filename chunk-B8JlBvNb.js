import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,db as tv,d as f,c9 as Qde,aV as Xp,c$ as Oue,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,b3 as q3,ct as Hhe,cc as Nde,cd as sme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,bH as Wde,aJ as nme,bc as Sx,av as zl,aw as uo,ax as fo,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","timepicker","p-label","PO Timepicker"]],template:function(r,i){r&1&&Hl(0,"po-timepicker",0);},dependencies:[Oue],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Timepicker Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-timepicker-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Te,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,se],encapsulation:2})}return l})();var ge=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:"HourMinute",value:tv.HourMinute},{label:"HourMinuteSecond",value:tv.HourMinuteSecond}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"},{value:"appendInBody",label:"Append In Body"}];formatOptions=[{label:"24",value:"24"},{label:"12",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(d){this.event=d;}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size="medium";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-labs"]],standalone:false,decls:24,vars:49,consts:[["f","ngForm"],["name","timepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-disabled","p-error-pattern","p-format","p-helper","p-help","p-model-format","p-label","p-locale","p-max-time","p-min-time","p-minute-interval","p-second-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-show-seconds","p-label-text-wrap","p-loading","p-compact-label","p-append-in-body","p-error-limit","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helper","p-clean","","p-label","Helper",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","modelFormat","p-columns","4","p-label","Model Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=gx();Cl(0,"po-timepicker",1),gw("ngModelChange",function(o){return Jy(s),Zx(i.timepicker,o)||(i.timepicker=o),e_(o)}),dt("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3)(4,"po-info",4),og(),Hl(5,"po-divider"),Cl(6,"form",null,0)(8,"po-input",5),gw("ngModelChange",function(o){return Jy(s),Zx(i.label,o)||(i.label=o),e_(o)}),og(),Z0(),Cl(9,"po-input",6),gw("ngModelChange",function(o){return Jy(s),Zx(i.help,o)||(i.help=o),e_(o)}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(o){return Jy(s),Zx(i.helper,o)||(i.helper=o),e_(o)}),og(),Z0(),Cl(11,"po-input",8),gw("ngModelChange",function(o){return Jy(s),Zx(i.placeholder,o)||(i.placeholder=o),e_(o)}),og(),Z0(),Cl(12,"po-input",9),gw("ngModelChange",function(o){return Jy(s),Zx(i.errorPattern,o)||(i.errorPattern=o),e_(o)}),og(),Z0(),Cl(13,"po-timepicker",10),gw("ngModelChange",function(o){return Jy(s),Zx(i.minTime,o)||(i.minTime=o),e_(o)}),og(),Z0(),Cl(14,"po-timepicker",11),gw("ngModelChange",function(o){return Jy(s),Zx(i.maxTime,o)||(i.maxTime=o),e_(o)}),og(),Z0(),Cl(15,"po-number",12),gw("ngModelChange",function(o){return Jy(s),Zx(i.minuteInterval,o)||(i.minuteInterval=o),e_(o)}),og(),Z0(),Cl(16,"po-number",13),gw("ngModelChange",function(o){return Jy(s),Zx(i.secondInterval,o)||(i.secondInterval=o),e_(o)}),og(),Z0(),Cl(17,"po-checkbox-group",14),gw("ngModelChange",function(o){return Jy(s),Zx(i.properties,o)||(i.properties=o),e_(o)}),og(),Z0(),Cl(18,"po-radio-group",15),gw("ngModelChange",function(o){return Jy(s),Zx(i.locale,o)||(i.locale=o),e_(o)}),og(),Z0(),Cl(19,"po-radio-group",16),gw("ngModelChange",function(o){return Jy(s),Zx(i.format,o)||(i.format=o),e_(o)}),og(),Z0(),Cl(20,"po-radio-group",17),gw("ngModelChange",function(o){return Jy(s),Zx(i.modelFormat,o)||(i.modelFormat=o),e_(o)}),og(),Z0(),Cl(21,"po-radio-group",18),gw("ngModelChange",function(o){return Jy(s),Zx(i.size,o)||(i.size=o),e_(o)}),og(),Z0(),Cl(22,"div",2)(23,"po-button",19),dt("p-click",function(){return i.restore()}),og()()();}r&2&&(pw("ngModel",i.timepicker),ZE("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-format",i.format)("p-helper",i.helper)("p-help",i.help)("p-model-format",i.modelFormat)("p-label",i.label)("p-locale",i.locale)("p-max-time",i.maxTime)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-second-interval",i.secondInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-append-in-body",i.properties==null?null:i.properties.includes("appendInBody"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-size",i.size),X0(),Lp(3),ZE("p-value",i.timepicker),Lp(),ZE("p-value",i.event),Lp(4),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.help),X0(),Lp(),pw("ngModel",i.helper),X0(),Lp(),pw("ngModel",i.placeholder),X0(),Lp(),pw("ngModel",i.errorPattern),X0(),Lp(),pw("ngModel",i.minTime),X0(),Lp(),pw("ngModel",i.maxTime),X0(),Lp(),pw("ngModel",i.minuteInterval),X0(),Lp(),pw("ngModel",i.secondInterval),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.locale),ZE("p-options",i.localeOptions),X0(),Lp(),pw("ngModel",i.format),ZE("p-options",i.formatOptions),X0(),Lp(),pw("ngModel",i.modelFormat),ZE("p-options",i.modelFormatOptions),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,q3,Hhe,Nde,Oue,sme],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Timepicker Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-timepicker
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-timepicker-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,we,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ge],encapsulation:2})}return l})();var Pe=["formScheduling"],Se=(()=>{class l{poDialog=f(Qde);poNotification=f(Xp);formScheduling;title="";date=new Date;startTime="";endTime="";room="";roomOptions=[{value:"sala-a",label:"Sala A"},{value:"sala-b",label:"Sala B"},{value:"sala-c",label:"Sala C"},{value:"auditorio",label:"Audit\xF3rio"}];schedule(){let d=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:"Confirmar Agendamento",message:d,confirm:()=>{this.poNotification.success("Agendamento confirmado com sucesso!"),this.formScheduling.reset({date:"",room:""});},cancel:()=>{this.poNotification.warning("Agendamento cancelado.");}});}getFormatedDate(d){return d&&d.slice(0,10)}getRoomLabel(){let d=this.roomOptions.find(r=>r.value===this.room);return d?d.label:this.room}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&zl(Pe,7),r&2){let s;uo(s=fo())&&(i.formScheduling=s.first);}},standalone:false,decls:11,vars:9,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","title","p-label","T\xEDtulo do agendamento","p-placeholder","Ex: Reuni\xE3o de planejamento","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","date","p-clean","","p-format","dd/mm/yyyy","p-label","Data","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","startTime","p-label","Hor\xE1rio de in\xEDcio","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","endTime","p-label","Hor\xE1rio de t\xE9rmino","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","room","p-label","Sala","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","scheduleButton","p-label","Agendar",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let s=gx();Cl(0,"form",null,0)(2,"div",1)(3,"po-input",2),gw("ngModelChange",function(o){return Jy(s),Zx(i.title,o)||(i.title=o),e_(o)}),og(),Z0(),Cl(4,"po-datepicker",3),gw("ngModelChange",function(o){return Jy(s),Zx(i.date,o)||(i.date=o),e_(o)}),og(),Z0(),og(),Cl(5,"div",1)(6,"po-timepicker",4),gw("ngModelChange",function(o){return Jy(s),Zx(i.startTime,o)||(i.startTime=o),e_(o)}),og(),Z0(),Cl(7,"po-timepicker",5),gw("ngModelChange",function(o){return Jy(s),Zx(i.endTime,o)||(i.endTime=o),e_(o)}),og(),Z0(),Cl(8,"po-select",6),gw("ngModelChange",function(o){return Jy(s),Zx(i.room,o)||(i.room=o),e_(o)}),og(),Z0(),og(),Cl(9,"div",1)(10,"po-button",7),dt("p-click",function(){return i.schedule()}),og()()();}if(r&2){let s=Sx(1);Lp(3),pw("ngModel",i.title),X0(),Lp(),pw("ngModel",i.date),X0(),Lp(2),pw("ngModel",i.startTime),ZE("p-show-required",true),X0(),Lp(),pw("ngModel",i.endTime),ZE("p-show-required",true),X0(),Lp(),pw("ngModel",i.room),ZE("p-options",i.roomOptions),X0(),Lp(2),ZE("p-disabled",s.invalid);}},dependencies:[lY,sY,aY,gk,fk,Qt,Wde,q3,nme,Oue],encapsulation:2,changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l}),be=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-scheduling-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Timepicker - Scheduling"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html"),og(),Cl(13,"pre",7),qx(14,`<form #formScheduling="ngForm">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-timepicker-scheduling"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,He,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Se],encapsulation:2})}return l})();var Ee=(()=>{class l{poNotification=f(Xp);openTime="08:00";closeTime="18:00";lunchStart="12:00";lunchEnd="13:00";save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`);}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-business-hours"]],standalone:false,decls:8,vars:14,consts:[[1,"po-row"],["name","openTime","p-label","Abertura","p-clean","","p-min-time","06:00",1,"po-md-6",3,"ngModelChange","ngModel","p-max-time","p-minute-interval"],["name","closeTime","p-label","Fechamento","p-clean","","p-max-time","23:00",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-minute-interval"],["name","lunchStart","p-label","In\xEDcio do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["name","lunchEnd","p-label","Fim do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["p-label","Salvar","p-kind","primary",1,"po-md-3","po-offset-md-9",3,"p-click"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"po-timepicker",1),gw("ngModelChange",function(p){return Zx(i.openTime,p)||(i.openTime=p),p}),og(),Z0(),Cl(2,"po-timepicker",2),gw("ngModelChange",function(p){return Zx(i.closeTime,p)||(i.closeTime=p),p}),og(),Z0(),og(),Cl(3,"div",0)(4,"po-timepicker",3),gw("ngModelChange",function(p){return Zx(i.lunchStart,p)||(i.lunchStart=p),p}),og(),Z0(),Cl(5,"po-timepicker",4),gw("ngModelChange",function(p){return Zx(i.lunchEnd,p)||(i.lunchEnd=p),p}),og(),Z0(),og(),Cl(6,"div",0)(7,"po-button",5),dt("p-click",function(){return i.save()}),og()()),r&2&&(Lp(),pw("ngModel",i.openTime),ZE("p-max-time",i.lunchStart)("p-minute-interval",30),X0(),Lp(),pw("ngModel",i.closeTime),ZE("p-min-time",i.lunchEnd)("p-minute-interval",30),X0(),Lp(2),pw("ngModel",i.lunchStart),ZE("p-min-time",i.openTime)("p-max-time",i.lunchEnd)("p-minute-interval",15),X0(),Lp(),pw("ngModel",i.lunchEnd),ZE("p-min-time",i.lunchStart)("p-max-time",i.closeTime)("p-minute-interval",15),X0());},dependencies:[sY,gk,Qt,Oue],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-business-hours-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Timepicker - Business Hours"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html"),og(),Cl(13,"pre",7),qx(14,`<div class="po-row">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-timepicker-business-hours"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Be,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ee],encapsulation:2})}return l})();var ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-timepicker-doc"]],standalone:false,decls:1006,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoTimepickerComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,"O "),Cl(24,"code"),qx(25,"po-timepicker"),og(),qx(26," \xE9 um componente para sele\xE7\xE3o de hor\xE1rio que permite a digita\xE7\xE3o e/ou sele\xE7\xE3o via painel flutuante."),og(),Cl(27,"p"),qx(28,"O formato de exibi\xE7\xE3o do hor\xE1rio pode ser de 24 horas ("),Cl(29,"code"),qx(30,"HH:mm"),og(),qx(31,") ou 12 horas ("),Cl(32,"code"),qx(33,"hh:mm AM/PM"),og(),qx(34,`),
e opcionalmente incluir segundos (`),Cl(35,"code"),qx(36,"HH:mm:ss"),og(),qx(37,")."),og(),Cl(38,"p"),qx(39,"O valor de sa\xEDda segue o formato ISO 8601 para hor\xE1rios ("),Cl(40,"code"),qx(41,"HH:mm"),og(),qx(42," ou "),Cl(43,"code"),qx(44,"HH:mm:ss"),og(),qx(45,")."),og(),Cl(46,"p")(47,"strong"),qx(48,"Importante:"),og()(),Cl(49,"ul")(50,"li"),qx(51,"Caso o valor digitado seja inv\xE1lido, o "),Cl(52,"code"),qx(53,"model"),og(),qx(54," receber\xE1 uma string vazia."),og(),Cl(55,"li"),qx(56,"Caso o "),Cl(57,"code"),qx(58,"input"),og(),qx(59," esteja passando um "),Cl(60,"code"),qx(61,"[(ngModel)]"),og(),qx(62,", mas n\xE3o tenha um "),Cl(63,"code"),qx(64,"name"),og(),qx(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Cl(66,"code"),qx(67,'[ngModelOptions]="{standalone: true}"'),og(),qx(68,")."),og()(),Cl(69,"blockquote")(70,"p"),qx(71,"N\xE3o esque\xE7a de importar o "),Cl(72,"code"),qx(73,"FormsModule"),og(),qx(74," em seu m\xF3dulo, tal como para utilizar o "),Cl(75,"code"),qx(76,"input default"),og(),qx(77,"."),og()(),Cl(78,"h4"),qx(79,"Tokens customiz\xE1veis"),og(),Cl(80,"p"),qx(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Cl(82,"code"),qx(83,".po-input"),og()(),Cl(84,"blockquote")(85,"p"),qx(86,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(87,"a",6),qx(88,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(89,"."),og()(),Cl(90,"table")(91,"thead")(92,"tr")(93,"th"),qx(94,"Propriedade"),og(),Cl(95,"th"),qx(96,"Descri\xE7\xE3o"),og(),Cl(97,"th"),qx(98,"Valor Padr\xE3o"),og()()(),Cl(99,"tbody")(100,"tr")(101,"td")(102,"strong"),qx(103,"Default Values"),og()(),Hl(104,"td")(105,"td"),og(),Cl(106,"tr")(107,"td")(108,"code"),qx(109,"--font-family"),og()(),Cl(110,"td"),qx(111,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(112,"td")(113,"code"),qx(114,"var(--font-family-theme)"),og()()(),Cl(115,"tr")(116,"td")(117,"code"),qx(118,"--font-size"),og()(),Cl(119,"td"),qx(120,"Tamanho da fonte"),og(),Cl(121,"td")(122,"code"),qx(123,"var(--font-size-default)"),og()()(),Cl(124,"tr")(125,"td")(126,"code"),qx(127,"--text-color-placeholder"),og()(),Cl(128,"td"),qx(129,"Cor do texto placeholder"),og(),Cl(130,"td")(131,"code"),qx(132,"var(--color-neutral-light-30)"),og()()(),Cl(133,"tr")(134,"td")(135,"code"),qx(136,"--color"),og()(),Cl(137,"td"),qx(138,"Cor principal do timepicker"),og(),Cl(139,"td")(140,"code"),qx(141,"var(--color-neutral-dark-70)"),og()()(),Cl(142,"tr")(143,"td")(144,"code"),qx(145,"--background"),og()(),Cl(146,"td"),qx(147,"Cor de background"),og(),Cl(148,"td")(149,"code"),qx(150,"var(--color-neutral-light-05)"),og()()(),Cl(151,"tr")(152,"td")(153,"code"),qx(154,"--padding"),og()(),Cl(155,"td"),qx(156,"Preenchimento"),og(),Cl(157,"td")(158,"code"),qx(159,"0 0.5rem"),og()()(),Cl(160,"tr")(161,"td")(162,"code"),qx(163,"--text-color"),og()(),Cl(164,"td"),qx(165,"Cor do texto"),og(),Cl(166,"td")(167,"code"),qx(168,"var(--color-neutral-dark-90)"),og()()(),Cl(169,"tr")(170,"td")(171,"code"),qx(172,"--field-container-title-justify"),og()(),Cl(173,"td"),qx(174,"Alinhamento horizontal do t\xEDtulo ("),Cl(175,"code"),qx(176,"justify-content"),og(),qx(177,")"),og(),Cl(178,"td")(179,"code"),qx(180,"space-between"),og()()(),Cl(181,"tr")(182,"td")(183,"code"),qx(184,"--field-container-title-flex"),og()(),Cl(185,"td"),qx(186,"Flex do t\xEDtulo ("),Cl(187,"code"),qx(188,"flex"),og(),qx(189,")"),og(),Cl(190,"td")(191,"code"),qx(192,"1 auto"),og()()(),Cl(193,"tr")(194,"td")(195,"strong"),qx(196,"Hover"),og()(),Hl(197,"td")(198,"td"),og(),Cl(199,"tr")(200,"td")(201,"code"),qx(202,"--color-hover"),og()(),Cl(203,"td"),qx(204,"Cor principal no estado hover"),og(),Cl(205,"td")(206,"code"),qx(207,"var(--color-brand-01-dark)"),og()()(),Cl(208,"tr")(209,"td")(210,"code"),qx(211,"--background-hover"),og()(),Cl(212,"td"),qx(213,"Cor de background no estado hover"),og(),Cl(214,"td")(215,"code"),qx(216,"var(--color-brand-01-lightest)"),og()()(),Cl(217,"tr")(218,"td")(219,"strong"),qx(220,"Focused"),og()(),Hl(221,"td")(222,"td"),og(),Cl(223,"tr")(224,"td")(225,"code"),qx(226,"--color-focused"),og()(),Cl(227,"td"),qx(228,"Cor principal no estado de focus"),og(),Cl(229,"td")(230,"code"),qx(231,"var(--color-action-default)"),og()()(),Cl(232,"tr")(233,"td")(234,"code"),qx(235,"--outline-color-focused"),og()(),Cl(236,"td"),qx(237,"Cor do outline do estado de focus"),og(),Cl(238,"td")(239,"code"),qx(240,"var(--color-action-focus)"),og()()(),Cl(241,"tr")(242,"td")(243,"strong"),qx(244,"Disabled"),og()(),Hl(245,"td")(246,"td"),og(),Cl(247,"tr")(248,"td")(249,"code"),qx(250,"--color-disabled"),og()(),Cl(251,"td"),qx(252,"Cor principal no estado disabled"),og(),Cl(253,"td")(254,"code"),qx(255,"var(--color-neutral-light-30)"),og()()(),Cl(256,"tr")(257,"td")(258,"code"),qx(259,"--background-disabled"),og()(),Cl(260,"td"),qx(261,"Cor de background no estado disabled"),og(),Cl(262,"td")(263,"code"),qx(264,"var(--color-neutral-light-20)"),og()()(),Cl(265,"tr")(266,"td")(267,"code"),qx(268,"--text-color-disabled"),og()(),Cl(269,"td"),qx(270,"Cor do texto no estado disabled"),og(),Cl(271,"td")(272,"code"),qx(273,"var(--color-neutral-dark-70)"),og()()()()()(),Cl(274,"div",7)(275,"h4",8),qx(276,"Seletor"),og(),Cl(277,"pre",9),qx(278,`<po-timepicker
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
`),og()(),Cl(279,"h4",10),qx(280,"Propriedades"),og(),Cl(281,"table",11)(282,"tr",12)(283,"th",13),qx(284,"Nome"),og(),Cl(285,"th",13),qx(286,"Tipo"),og(),Cl(287,"th",13),qx(288,"Padr\xE3o"),og(),Cl(289,"th",13),qx(290,"Descri\xE7\xE3o"),og()(),Cl(291,"tr",14)(292,"td",15)(293,"div",16)(294,"span",17),qx(295," p-append-in-body"),Hl(296,"br"),og()()(),Cl(297,"td",18)(298,"code",19),qx(299,"boolean"),og()(),Cl(300,"td",20)(301,"p")(302,"code"),qx(303,"false"),og()()(),Cl(304,"td",21)(305,"em")(306,"strong"),qx(307,"(opcional)"),og()(),Cl(308,"p"),qx(309,"Define que o painel do timer ser\xE1 inclu\xEDdo no body da p\xE1gina."),og()()(),Cl(310,"tr",14)(311,"td",15)(312,"div",16)(313,"span",17),qx(314," p-auto-focus"),Hl(315,"br"),og()()(),Cl(316,"td",18)(317,"code",19),qx(318,"boolean"),og()(),Cl(319,"td",20)(320,"p")(321,"code"),qx(322,"false"),og()()(),Cl(323,"td",21)(324,"em")(325,"strong"),qx(326,"(opcional)"),og()(),Cl(327,"p"),qx(328,"Aplica foco no elemento ao ser iniciado."),og()()(),Cl(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),qx(333,"p-clean"),Hl(334,"br"),og()()(),Cl(335,"td",18)(336,"code",19),qx(337,"boolean"),og()(),Cl(338,"td",20),qx(339,"-"),og(),Cl(340,"td",21)(341,"em")(342,"strong"),qx(343,"(opcional)"),og()(),Cl(344,"p"),qx(345,"Habilita a\xE7\xE3o para limpar o campo."),og()()(),Cl(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),qx(350," p-compact-label"),Hl(351,"br"),og()()(),Cl(352,"td",18)(353,"code",19),qx(354,"boolean"),og()(),Cl(355,"td",20)(356,"p")(357,"code"),qx(358,"false"),og()()(),Cl(359,"td",21)(360,"em")(361,"strong"),qx(362,"(opcional)"),og()(),Cl(363,"p"),qx(364,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og()()(),Cl(365,"tr",14)(366,"td",15)(367,"div",16)(368,"span",17),qx(369,"p-disabled"),Hl(370,"br"),og()()(),Cl(371,"td",18)(372,"code",19),qx(373,"boolean"),og()(),Cl(374,"td",20),qx(375,"-"),og(),Cl(376,"td",21)(377,"em")(378,"strong"),qx(379,"(opcional)"),og()(),Cl(380,"p"),qx(381,"Desabilita o campo."),og()()(),Cl(382,"tr",14)(383,"td",15)(384,"div",16)(385,"span",17),qx(386," p-error-limit"),Hl(387,"br"),og()()(),Cl(388,"td",18)(389,"code",19),qx(390,"boolean"),og()(),Cl(391,"td",20)(392,"p")(393,"code"),qx(394,"false"),og()()(),Cl(395,"td",21)(396,"em")(397,"strong"),qx(398,"(opcional)"),og()(),Cl(399,"p"),qx(400,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og()()(),Cl(401,"tr",14)(402,"td",15)(403,"div",16)(404,"span",17),qx(405," p-error-pattern"),Hl(406,"br"),og()()(),Cl(407,"td",18)(408,"code",22),qx(409,"string"),og()(),Cl(410,"td",20),qx(411,"-"),og(),Cl(412,"td",21)(413,"em")(414,"strong"),qx(415,"(opcional)"),og()(),Cl(416,"p"),qx(417,"Mensagem apresentada quando o hor\xE1rio for inv\xE1lido ou fora do per\xEDodo."),og(),Cl(418,"blockquote")(419,"p"),qx(420,"Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido."),og()()()(),Cl(421,"tr",14)(422,"td",15)(423,"div",16)(424,"span",17),qx(425," p-format"),Hl(426,"br"),og()()(),Cl(427,"td",18)(428,"code",23),qx(429,"PoTimerFormat"),og()(),Cl(430,"td",20)(431,"p")(432,"code"),qx(433,"24"),og()()(),Cl(434,"td",21)(435,"em")(436,"strong"),qx(437,"(opcional)"),og()(),Cl(438,"p"),qx(439,"Define o formato de exibi\xE7\xE3o do timer."),og(),Cl(440,"p"),qx(441,"Valores v\xE1lidos:"),og(),Cl(442,"ul")(443,"li")(444,"code"),qx(445,"24"),og(),qx(446,": formato de 24 horas (padr\xE3o)"),og(),Cl(447,"li")(448,"code"),qx(449,"12"),og(),qx(450,": formato de 12 horas com indicador AM/PM"),og()()()(),Cl(451,"tr",14)(452,"td",15)(453,"div",16)(454,"span",17),qx(455," p-help"),Hl(456,"br"),og()()(),Cl(457,"td",18)(458,"code",22),qx(459,"string"),og()(),Cl(460,"td",20),qx(461,"-"),og(),Cl(462,"td",21)(463,"em")(464,"strong"),qx(465,"(opcional)"),og()(),Cl(466,"p"),qx(467,"Texto de apoio do campo."),og()()(),Cl(468,"tr",14)(469,"td",15)(470,"div",24)(471,"span",25),qx(472," (p-keydown)"),Hl(473,"br"),og()()(),Cl(474,"td",18)(475,"code",26),qx(476,"EventEmitter"),og()(),Cl(477,"td",20),qx(478,"-"),og(),Cl(479,"td",21)(480,"p"),qx(481,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),og()()(),Cl(482,"tr",14)(483,"td",15)(484,"div",16)(485,"span",17),qx(486," p-label"),Hl(487,"br"),og()()(),Cl(488,"td",18)(489,"code",22),qx(490,"string"),og()(),Cl(491,"td",20),qx(492,"-"),og(),Cl(493,"td",21)(494,"em")(495,"strong"),qx(496,"(opcional)"),og()(),Cl(497,"p"),qx(498,"R\xF3tulo do campo."),og()()(),Cl(499,"tr",14)(500,"td",15)(501,"div",16)(502,"span",17),qx(503," p-label-text-wrap"),Hl(504,"br"),og()()(),Cl(505,"td",18)(506,"code",19),qx(507,"boolean"),og()(),Cl(508,"td",20)(509,"p")(510,"code"),qx(511,"false"),og()()(),Cl(512,"td",21)(513,"em")(514,"strong"),qx(515,"(opcional)"),og()(),Cl(516,"p"),qx(517,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(518,"code"),qx(519,"p-label"),og(),qx(520,"."),og()()(),Cl(521,"tr",14)(522,"td",15)(523,"div",16)(524,"span",17),qx(525," p-loading"),Hl(526,"br"),og()()(),Cl(527,"td",18)(528,"code",19),qx(529,"boolean"),og()(),Cl(530,"td",20)(531,"p")(532,"code"),qx(533,"false"),og()()(),Cl(534,"td",21)(535,"em")(536,"strong"),qx(537,"(opcional)"),og()(),Cl(538,"p"),qx(539,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),og()()(),Cl(540,"tr",14)(541,"td",15)(542,"div",16)(543,"span",17),qx(544," p-locale"),Hl(545,"br"),og()()(),Cl(546,"td",18)(547,"code",22),qx(548,"string"),og()(),Cl(549,"td",20),qx(550,"-"),og(),Cl(551,"td",21)(552,"em")(553,"strong"),qx(554,"(opcional)"),og()(),Cl(555,"p"),qx(556,"Idioma do componente."),og()()(),Cl(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),qx(561," p-max-time"),Hl(562,"br"),og()()(),Cl(563,"td",18)(564,"code",22),qx(565,"string"),og()(),Cl(566,"td",20),qx(567,"-"),og(),Cl(568,"td",21)(569,"em")(570,"strong"),qx(571,"(opcional)"),og()(),Cl(572,"p"),qx(573,"Define o hor\xE1rio m\xE1ximo permitido. Formato: "),Cl(574,"code"),qx(575,"HH:mm"),og(),qx(576," ou "),Cl(577,"code"),qx(578,"HH:mm:ss"),og(),qx(579,"."),og()()(),Cl(580,"tr",14)(581,"td",15)(582,"div",16)(583,"span",17),qx(584," p-min-time"),Hl(585,"br"),og()()(),Cl(586,"td",18)(587,"code",22),qx(588,"string"),og()(),Cl(589,"td",20),qx(590,"-"),og(),Cl(591,"td",21)(592,"em")(593,"strong"),qx(594,"(opcional)"),og()(),Cl(595,"p"),qx(596,"Define o hor\xE1rio m\xEDnimo permitido. Formato: "),Cl(597,"code"),qx(598,"HH:mm"),og(),qx(599," ou "),Cl(600,"code"),qx(601,"HH:mm:ss"),og(),qx(602,"."),og()()(),Cl(603,"tr",14)(604,"td",15)(605,"div",16)(606,"span",17),qx(607," p-minute-interval"),Hl(608,"br"),og()()(),Cl(609,"td",18)(610,"code",27),qx(611,"number"),og()(),Cl(612,"td",20)(613,"p")(614,"code"),qx(615,"5"),og()()(),Cl(616,"td",21)(617,"em")(618,"strong"),qx(619,"(opcional)"),og()(),Cl(620,"p"),qx(621,"Define o intervalo entre os minutos exibidos no painel."),og()()(),Cl(622,"tr",14)(623,"td",15)(624,"div",16)(625,"span",17),qx(626," p-model-format"),Hl(627,"br"),og()()(),Cl(628,"td",18)(629,"code",28),qx(630,"PoTimepickerModelFormat"),og()(),Cl(631,"td",20),qx(632,"-"),og(),Cl(633,"td",21)(634,"em")(635,"strong"),qx(636,"(opcional)"),og()(),Cl(637,"p"),qx(638,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),Cl(639,"em"),qx(640,"model"),og(),qx(641,"."),og(),Cl(642,"blockquote")(643,"p"),qx(644,"Veja os valores v\xE1lidos no "),Cl(645,"em"),qx(646,"enum"),og(),Cl(647,"code"),qx(648,"PoTimepickerModelFormat"),og(),qx(649,"."),og()()()(),Cl(650,"tr",14)(651,"td",15)(652,"div",16)(653,"span",17),qx(654," name"),Hl(655,"br"),og()()(),Cl(656,"td",18)(657,"code",22),qx(658,"string"),og()(),Cl(659,"td",20),qx(660,"-"),og(),Cl(661,"td",21)(662,"p"),qx(663,"Nome do componente."),og()()(),Cl(664,"tr",14)(665,"td",15)(666,"div",16)(667,"span",17),qx(668," p-no-autocomplete"),Hl(669,"br"),og()()(),Cl(670,"td",18)(671,"code",19),qx(672,"boolean"),og()(),Cl(673,"td",20)(674,"p")(675,"code"),qx(676,"false"),og()()(),Cl(677,"td",21)(678,"em")(679,"strong"),qx(680,"(opcional)"),og()(),Cl(681,"p"),qx(682,"Define a propriedade nativa "),Cl(683,"code"),qx(684,"autocomplete"),og(),qx(685," do campo como "),Cl(686,"code"),qx(687,"off"),og(),qx(688,"."),og()()(),Cl(689,"tr",14)(690,"td",15)(691,"div",24)(692,"span",25),qx(693," (p-blur)"),Hl(694,"br"),og()()(),Cl(695,"td",18)(696,"code",26),qx(697,"EventEmitter"),og()(),Cl(698,"td",20),qx(699,"-"),og(),Cl(700,"td",21)(701,"p"),qx(702,"Evento disparado ao sair do campo."),og()()(),Cl(703,"tr",14)(704,"td",15)(705,"div",24)(706,"span",25),qx(707," (p-change)"),Hl(708,"br"),og()()(),Cl(709,"td",18)(710,"code",26),qx(711,"EventEmitter"),og()(),Cl(712,"td",20),qx(713,"-"),og(),Cl(714,"td",21)(715,"p"),qx(716,"Evento disparado ao alterar valor do campo."),og()()(),Cl(717,"tr",14)(718,"td",15)(719,"div",16)(720,"span",17),qx(721," p-optional"),Hl(722,"br"),og()()(),Cl(723,"td",18)(724,"code",19),qx(725,"boolean"),og()(),Cl(726,"td",20)(727,"p")(728,"code"),qx(729,"false"),og()()(),Cl(730,"td",21)(731,"em")(732,"strong"),qx(733,"(opcional)"),og()(),Cl(734,"p"),qx(735,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og()()(),Cl(736,"tr",14)(737,"td",15)(738,"div",16)(739,"span",17),qx(740," p-placeholder"),Hl(741,"br"),og()()(),Cl(742,"td",18)(743,"code",22),qx(744,"string"),og()(),Cl(745,"td",20),qx(746,"-"),og(),Cl(747,"td",21)(748,"em")(749,"strong"),qx(750,"(opcional)"),og()(),Cl(751,"p"),qx(752,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og(),Cl(753,"p"),qx(754,"Para personalizar os segmentos, informe o valor no formato "),Cl(755,"code"),qx(756,"HH:mm"),og(),qx(757," ou "),Cl(758,"code"),qx(759,"HH:mm:ss"),og(),qx(760,"."),og()()(),Cl(761,"tr",14)(762,"td",15)(763,"div",16)(764,"span",17),qx(765," p-helper"),Hl(766,"br"),og()()(),Cl(767,"td",18)(768,"code",29),qx(769,"PoHelperOptions "),og(),Cl(770,"code",22),qx(771," string"),og()(),Cl(772,"td",20),qx(773,"-"),og(),Cl(774,"td",21)(775,"em")(776,"strong"),qx(777,"(opcional)"),og()(),Cl(778,"p"),qx(779,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),og()()(),Cl(780,"tr",14)(781,"td",15)(782,"div",16)(783,"span",17),qx(784,"p-readonly"),Hl(785,"br"),og()()(),Cl(786,"td",18)(787,"code",19),qx(788,"boolean"),og()(),Cl(789,"td",20),qx(790,"-"),og(),Cl(791,"td",21)(792,"em")(793,"strong"),qx(794,"(opcional)"),og()(),Cl(795,"p"),qx(796,"Torna o elemento somente leitura."),og()()(),Cl(797,"tr",14)(798,"td",15)(799,"div",16)(800,"span",17),qx(801,"p-required"),Hl(802,"br"),og()()(),Cl(803,"td",18)(804,"code",19),qx(805,"boolean"),og()(),Cl(806,"td",20)(807,"p")(808,"code"),qx(809,"false"),og()()(),Cl(810,"td",21)(811,"em")(812,"strong"),qx(813,"(opcional)"),og()(),Cl(814,"p"),qx(815,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Cl(816,"tr",14)(817,"td",15)(818,"div",16)(819,"span",17),qx(820," p-second-interval"),Hl(821,"br"),og()()(),Cl(822,"td",18)(823,"code",27),qx(824,"number"),og()(),Cl(825,"td",20)(826,"p")(827,"code"),qx(828,"1"),og()()(),Cl(829,"td",21)(830,"em")(831,"strong"),qx(832,"(opcional)"),og()(),Cl(833,"p"),qx(834,"Define o intervalo entre os segundos exibidos no painel."),og()()(),Cl(835,"tr",14)(836,"td",15)(837,"div",16)(838,"span",17),qx(839," p-required-field-error-message"),Hl(840,"br"),og()()(),Cl(841,"td",18)(842,"code",19),qx(843,"boolean"),og()(),Cl(844,"td",20)(845,"p")(846,"code"),qx(847,"false"),og()()(),Cl(848,"td",21)(849,"em")(850,"strong"),qx(851,"(opcional)"),og()(),Cl(852,"p"),qx(853,"Exibe a mensagem setada na propriedade "),Cl(854,"code"),qx(855,"p-error-pattern"),og(),qx(856," se o campo estiver vazio e for requerido."),og()()(),Cl(857,"tr",14)(858,"td",15)(859,"div",16)(860,"span",17),qx(861," p-show-required"),Hl(862,"br"),og()()(),Cl(863,"td",18)(864,"code",19),qx(865,"boolean"),og()(),Cl(866,"td",20),qx(867,"-"),og(),Cl(868,"td",21)(869,"p"),qx(870,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og()()(),Cl(871,"tr",14)(872,"td",15)(873,"div",16)(874,"span",17),qx(875," p-show-seconds"),Hl(876,"br"),og()()(),Cl(877,"td",18)(878,"code",19),qx(879,"boolean"),og()(),Cl(880,"td",20)(881,"p")(882,"code"),qx(883,"false"),og()()(),Cl(884,"td",21)(885,"em")(886,"strong"),qx(887,"(opcional)"),og()(),Cl(888,"p"),qx(889,"Exibe a coluna de segundos no painel."),og()()(),Cl(890,"tr",14)(891,"td",15)(892,"div",16)(893,"span",17),qx(894," p-size"),Hl(895,"br"),og()()(),Cl(896,"td",18)(897,"code",22),qx(898,"string"),og()(),Cl(899,"td",20)(900,"p")(901,"code"),qx(902,"medium"),og()()(),Cl(903,"td",21)(904,"em")(905,"strong"),qx(906,"(opcional)"),og()(),Cl(907,"p"),qx(908,"Define o tamanho do componente:"),og(),Cl(909,"ul")(910,"li")(911,"code"),qx(912,"small"),og(),qx(913,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(914,"li")(915,"code"),qx(916,"medium"),og(),qx(917,": altura do input como 44px."),og()()()()(),Cl(918,"h3",10),qx(919,"M\xE9todos"),og(),Cl(920,"table",30)(921,"tr",14)(922,"th",31)(923,"div",16)(924,"h4")(925,"span",17),qx(926," focus "),og()()()()(),Cl(927,"tr",21)(928,"td",21)(929,"p"),qx(930,"Fun\xE7\xE3o que atribui foco ao componente."),og(),Cl(931,"p"),qx(932,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),og(),Cl(933,"pre")(934,"code"),qx(935,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),og()()()()(),Hl(936,"br"),Cl(937,"table",30)(938,"tr",14)(939,"th",31)(940,"div",16)(941,"h4")(942,"span",17),qx(943," showAdditionalHelp "),og()()()()(),Cl(944,"tr",21)(945,"td",21)(946,"p"),qx(947,"M\xE9todo que exibe "),Cl(948,"code"),qx(949,"p-helper"),og(),qx(950," ou executa a a\xE7\xE3o definida em "),Cl(951,"code"),qx(952,"p-helper{eventOnClick}"),og(),qx(953," ou em "),Cl(954,"code"),qx(955,"p-additionalHelp"),og(),qx(956,"."),og()()()(),Hl(957,"br"),Cl(958,"h3"),qx(959,"Enums"),og(),Cl(960,"h4",4)(961,"code",5),qx(962,"PoTimepickerModelFormat"),og()(),Cl(963,"div",2)(964,"p")(965,"em"),qx(966,"Enum"),og(),qx(967," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),og()(),Cl(968,"h4",10),qx(969,"Propriedades"),og(),Cl(970,"table",11)(971,"tr",12)(972,"th",13),qx(973,"Nome"),og(),Cl(974,"th",13),qx(975,"Descri\xE7\xE3o"),og()(),Cl(976,"tr",14)(977,"td",15)(978,"div",16)(979,"span",17),qx(980," HourMinute"),Hl(981,"br"),og()()(),Cl(982,"td",21)(983,"p"),qx(984,"Formato b\xE1sico "),Cl(985,"code"),qx(986,"HH:mm"),og(),qx(987," (ex: "),Cl(988,"code"),qx(989,"14:30"),og(),qx(990,")."),og()()(),Cl(991,"tr",14)(992,"td",15)(993,"div",16)(994,"span",17),qx(995," HourMinuteSecond"),Hl(996,"br"),og()()(),Cl(997,"td",21)(998,"p"),qx(999,"Formato com segundos "),Cl(1e3,"code"),qx(1001,"HH:mm:ss"),og(),qx(1002," (ex: "),Cl(1003,"code"),qx(1004,"14:30:00"),og(),qx(1005,")."),og()()()()());},dependencies:[Zr],encapsulation:2})}return l})();var Ce=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Timepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-timepicker-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-timepicker-basic-view")(6,"sample-po-timepicker-labs-view")(7,"sample-po-timepicker-scheduling-view")(8,"sample-po-timepicker-business-hours-view"),og()()()),r&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ce,he,be,fe,ve],encapsulation:2})}return l})();var Ve=[{path:"",component:Ce}],xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[bL.forChild(Ve),bL]})}return l})();var Ct=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[ca,xe]})}return l})();export{Ct as DocPoTimepickerModule};