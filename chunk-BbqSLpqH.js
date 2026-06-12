import {f as fe$1,u as ue,c as ca,b as bL,w,c7 as Xn,a as Cn,U as Un,d as f,c9 as Qde,aV as Xp,c_ as Bw,R as Hl,an as yO,aH as Zr,b7 as ofe,b8 as lfe,Q as Cl,z as qx,T as og,a1 as dt,H as Lp,ar as Fx,au as dg,Z as ZE,bw as oN,aW as lY,aF as sY,aX as aY,aG as gk,aY as fk,a$ as Qt,b0 as _v,c8 as L3,bH as Wde,b3 as q3,ct as Hhe,cc as Nde,c$ as Oue,cd as sme,aB as gx,aM as gw,aN as Z0,aO as pw,aP as X0,aJ as nme,bc as Sx,av as zl,aw as uo,ax as fo,a3 as SNe,aD as Jy,aT as Zx,aE as e_}from'./main-OS7VVRJY.js';var se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","datetimepicker","p-label","PO Datetimepicker"]],template:function(r,i){r&1&&Hl(0,"po-datetimepicker",0);},dependencies:[Bw],encapsulation:2,changeDetection:1})}return l})();var ke=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Datetimepicker Basic"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-datetimepicker-basic"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,ke,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,se],encapsulation:2})}return l})();var ge=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];formatDateOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];formatTimeOptions=[{label:"24h",value:"24"},{label:"12h (AM/PM)",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText="",this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-labs"]],standalone:false,decls:26,vars:54,consts:[["f","ngForm"],["name","datetimepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-compact-label","p-disabled","p-error-limit","p-error-pattern","p-format-date","p-format-time","p-help","p-helper","p-label","p-label-text-wrap","p-loading","p-locale","p-max-date","p-max-time","p-min-date","p-min-time","p-minute-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-second-interval","p-show-required","p-show-seconds","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min Date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max Date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatDate","p-columns","4","p-label","Format Date",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatTime","p-columns","4","p-label","Format Time",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=gx();Cl(0,"po-datetimepicker",1),gw("ngModelChange",function(o){return Jy(d),Zx(i.datetimepicker,o)||(i.datetimepicker=o),e_(o)}),dt("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),og(),Z0(),Hl(1,"po-divider"),Cl(2,"div",2),Hl(3,"po-info",3)(4,"po-info",4),og(),Hl(5,"po-divider"),Cl(6,"form",null,0)(8,"po-input",5),gw("ngModelChange",function(o){return Jy(d),Zx(i.label,o)||(i.label=o),e_(o)}),og(),Z0(),Cl(9,"po-input",6),gw("ngModelChange",function(o){return Jy(d),Zx(i.help,o)||(i.help=o),e_(o)}),og(),Z0(),Cl(10,"po-input",7),gw("ngModelChange",function(o){return Jy(d),Zx(i.helperText,o)||(i.helperText=o),e_(o)}),og(),Z0(),Cl(11,"po-input",8),gw("ngModelChange",function(o){return Jy(d),Zx(i.placeholder,o)||(i.placeholder=o),e_(o)}),og(),Z0(),Cl(12,"po-input",9),gw("ngModelChange",function(o){return Jy(d),Zx(i.errorPattern,o)||(i.errorPattern=o),e_(o)}),og(),Z0(),Cl(13,"po-number",10),gw("ngModelChange",function(o){return Jy(d),Zx(i.minuteInterval,o)||(i.minuteInterval=o),e_(o)}),og(),Z0(),Cl(14,"po-number",11),gw("ngModelChange",function(o){return Jy(d),Zx(i.secondInterval,o)||(i.secondInterval=o),e_(o)}),og(),Z0(),Cl(15,"po-timepicker",12),gw("ngModelChange",function(o){return Jy(d),Zx(i.minTime,o)||(i.minTime=o),e_(o)}),og(),Z0(),Cl(16,"po-timepicker",13),gw("ngModelChange",function(o){return Jy(d),Zx(i.maxTime,o)||(i.maxTime=o),e_(o)}),og(),Z0(),Cl(17,"po-datepicker",14),gw("ngModelChange",function(o){return Jy(d),Zx(i.minDate,o)||(i.minDate=o),e_(o)}),og(),Z0(),Cl(18,"po-datepicker",15),gw("ngModelChange",function(o){return Jy(d),Zx(i.maxDate,o)||(i.maxDate=o),e_(o)}),og(),Z0(),Cl(19,"po-checkbox-group",16),gw("ngModelChange",function(o){return Jy(d),Zx(i.properties,o)||(i.properties=o),e_(o)}),og(),Z0(),Cl(20,"po-radio-group",17),gw("ngModelChange",function(o){return Jy(d),Zx(i.locale,o)||(i.locale=o),e_(o)}),og(),Z0(),Cl(21,"po-radio-group",18),gw("ngModelChange",function(o){return Jy(d),Zx(i.formatDate,o)||(i.formatDate=o),e_(o)}),og(),Z0(),Cl(22,"po-radio-group",19),gw("ngModelChange",function(o){return Jy(d),Zx(i.formatTime,o)||(i.formatTime=o),e_(o)}),og(),Z0(),Cl(23,"po-radio-group",20),gw("ngModelChange",function(o){return Jy(d),Zx(i.size,o)||(i.size=o),e_(o)}),og(),Z0(),Cl(24,"div",2)(25,"po-button",21),dt("p-click",function(){return i.restore()}),og()()();}r&2&&(pw("ngModel",i.datetimepicker),ZE("p-clean",i.properties.includes("clean"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-disabled",i.properties.includes("disabled"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-error-pattern",i.errorPattern)("p-format-date",i.formatDate)("p-format-time",i.formatTime)("p-help",i.help)("p-helper",i.helperText)("p-label",i.label)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-max-date",i.maxDate)("p-max-time",i.maxTime)("p-min-date",i.minDate)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-second-interval",i.secondInterval)("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-size",i.size),X0(),Lp(3),ZE("p-value",i.datetimepicker),Lp(),ZE("p-value",i.event),Lp(4),pw("ngModel",i.label),X0(),Lp(),pw("ngModel",i.help),X0(),Lp(),pw("ngModel",i.helperText),X0(),Lp(),pw("ngModel",i.placeholder),X0(),Lp(),pw("ngModel",i.errorPattern),X0(),Lp(),pw("ngModel",i.minuteInterval),X0(),Lp(),pw("ngModel",i.secondInterval),X0(),Lp(),pw("ngModel",i.minTime),X0(),Lp(),pw("ngModel",i.maxTime),X0(),Lp(),pw("ngModel",i.minDate),ZE("p-max-date",i.maxDate),X0(),Lp(),pw("ngModel",i.maxDate),ZE("p-min-date",i.minDate),X0(),Lp(),pw("ngModel",i.properties),ZE("p-options",i.propertiesOptions),X0(),Lp(),pw("ngModel",i.locale),ZE("p-options",i.localeOptions),X0(),Lp(),pw("ngModel",i.formatDate),ZE("p-options",i.formatDateOptions),X0(),Lp(),pw("ngModel",i.formatTime),ZE("p-options",i.formatTimeOptions),X0(),Lp(),pw("ngModel",i.size),ZE("p-options",i.sizeOptions),X0());},dependencies:[lY,sY,aY,gk,fk,Qt,_v,L3,Wde,Bw,q3,Hhe,Nde,Oue,sme],encapsulation:2,changeDetection:1})}return l})();var Me=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Datetimepicker Labs"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-datetimepicker
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-datetimepicker-labs"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Me,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,ge],encapsulation:2})}return l})();var Ee=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-12h-seconds"]],standalone:false,decls:1,vars:1,consts:[["name","datetimepicker12h","p-label","PO Datetimepicker - 12h with Seconds","p-show-seconds","true","p-format-time","12","p-format-date","mm/dd/yyyy",3,"ngModelChange","ngModel"]],template:function(r,i){r&1&&(Cl(0,"po-datetimepicker",0),gw("ngModelChange",function(s){return Zx(i.datetime,s)||(i.datetime=s),s}),og(),Z0()),r&2&&(pw("ngModel",i.datetime),X0());},dependencies:[sY,gk,Bw],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-12h-seconds-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Datetimepicker - 12h with Seconds"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html"),og(),Cl(13,"pre",7),qx(14,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-datetimepicker-12h-seconds"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,Te,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,Ee],encapsulation:2})}return l})();var Oe=["formScheduling"],be=(()=>{class l{poDialog=f(Qde);poNotification=f(Xp);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:"general",label:"Cl\xEDnico Geral"},{value:"cardiology",label:"Cardiologia"},{value:"dermatology",label:"Dermatologia"},{value:"orthopedics",label:"Ortopedia"},{value:"neurology",label:"Neurologia"}];confirm(){let p=this.appointment?this.appointment.slice(0,16):"",r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:"Confirmar Agendamento",message:r,confirm:()=>{this.poNotification.success("Consulta agendada com sucesso!"),this.formScheduling.reset();},cancel:()=>{this.poNotification.warning("Agendamento cancelado.");}});}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:""}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&zl(Oe,7),r&2){let d;uo(d=fo())&&(i.formScheduling=d.first);}},standalone:false,decls:10,vars:6,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","patient","p-label","Paciente","p-placeholder","Nome do paciente","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","doctor","p-label","M\xE9dico","p-placeholder","Nome do m\xE9dico","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","specialty","p-label","Especialidade","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","appointment","p-clean","","p-label","Data e Hora da Consulta","p-min-time","08:00","p-max-time","18:00","p-minute-interval","15","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","confirmButton","p-label","Agendar Consulta",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=gx();Cl(0,"form",null,0)(2,"div",1)(3,"po-input",2),gw("ngModelChange",function(o){return Jy(d),Zx(i.patient,o)||(i.patient=o),e_(o)}),og(),Z0(),Cl(4,"po-input",3),gw("ngModelChange",function(o){return Jy(d),Zx(i.doctor,o)||(i.doctor=o),e_(o)}),og(),Z0(),og(),Cl(5,"div",1)(6,"po-select",4),gw("ngModelChange",function(o){return Jy(d),Zx(i.specialty,o)||(i.specialty=o),e_(o)}),og(),Z0(),Cl(7,"po-datetimepicker",5),gw("ngModelChange",function(o){return Jy(d),Zx(i.appointment,o)||(i.appointment=o),e_(o)}),og(),Z0(),og(),Cl(8,"div",1)(9,"po-button",6),dt("p-click",function(){return i.confirm()}),og()()();}if(r&2){let d=Sx(1);Lp(3),pw("ngModel",i.patient),X0(),Lp(),pw("ngModel",i.doctor),X0(),Lp(2),pw("ngModel",i.specialty),ZE("p-options",i.specialtyOptions),X0(),Lp(),pw("ngModel",i.appointment),X0(),Lp(2),ZE("p-disabled",d.invalid);}},dependencies:[lY,sY,aY,gk,fk,Qt,Bw,q3,nme],encapsulation:2,changeDetection:1})}return l})();var We=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-scheduling-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Hl(0,"br"),Cl(1,"blockquote",0)(2,"label",1),qx(3,"PO Datetimepicker - Scheduling"),og(),Cl(4,"a",2),dt("click",function(){return i.toggleSampleCodeTabs()}),Hl(5,"span"),qx(6),og()(),Cl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),qx(12,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html"),og(),Cl(13,"pre",7),qx(14,`<form #formScheduling="ngForm">
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
`),og()()(),Cl(15,"po-tab",8)(16,"div")(17,"label",6),qx(18,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts"),og(),Cl(19,"pre",9),qx(20,`import { UntypedFormControl } from '@angular/forms';
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
`),og()()()()(),Cl(21,"div",10),Hl(22,"sample-po-datetimepicker-scheduling"),og(),Hl(23,"hr")),r&2&&(Lp(5),Fx("po-icon "+i.sampleCodeButtonIcon),Lp(),dg(" ",i.sampleCodeButtonLabel),Lp(),ZE("ngClass",oN(4,We,i.hideSampleCodeTabs)));},dependencies:[yO,Zr,ofe,lfe,be],encapsulation:2})}return l})();var xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-doc"]],standalone:false,decls:1169,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Cl(0,"div",0)(1,"p",1)(2,"code"),qx(3,"import { PoFieldModule } from '@po-ui/ng-components';"),og()(),Cl(4,"div",2)(5,"p"),qx(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),og(),Cl(7,"blockquote")(8,"p"),qx(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Cl(10,"code"),qx(11,"FormsModule"),og(),qx(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Cl(13,"code"),qx(14,"ReactiveFormsModule"),og(),qx(15,", ambos nativos do Angular."),og()()(),Cl(16,"h3",3),qx(17,"Componente"),og(),Cl(18,"h4",4)(19,"code",5),qx(20,"PoDatetimepickerComponent"),og()(),Cl(21,"div",2)(22,"p"),qx(23,"O "),Cl(24,"code"),qx(25,"po-datetimepicker"),og(),qx(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),og(),Cl(27,"p"),qx(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),Cl(29,"code"),qx(30,"p-format-date"),og(),qx(31,". O formato de hora pode ser 24h ou 12h (AM/PM), configur\xE1vel via "),Cl(32,"code"),qx(33,"p-format-time"),og(),qx(34,"."),og(),Cl(35,"p"),qx(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Cl(37,"code"),qx(38,"p-locale"),og(),qx(39,"."),og(),Cl(40,"p"),qx(41,"O componente aceita os seguintes formatos de entrada:"),og(),Cl(42,"ul")(43,"li"),qx(44,"ISO 8601 com timezone: "),Cl(45,"code"),qx(46,"'2026-05-12T14:30:00-03:00'"),og()(),Cl(47,"li"),qx(48,"ISO 8601 UTC: "),Cl(49,"code"),qx(50,"'2026-05-12T14:30:00Z'"),og()(),Cl(51,"li"),qx(52,"ISO 8601 sem timezone: "),Cl(53,"code"),qx(54,"'2026-05-12T14:30:00'"),og()(),Cl(55,"li"),qx(56,"ISO 8601 apenas data: "),Cl(57,"code"),qx(58,"'2026-05-12'"),og()(),Cl(59,"li"),qx(60,"JavaScript Date Object: "),Cl(61,"code"),qx(62,"new Date(2026, 4, 12, 14, 30)"),og()()(),Cl(63,"p"),qx(64,"O formato de sa\xEDda do "),Cl(65,"em"),qx(66,"model"),og(),qx(67," \xE9 sempre ISO 8601 com timezone local: "),Cl(68,"code"),qx(69,"'yyyy-mm-ddTHH:mm+/-HH:mm'"),og(),qx(70,`
(ou `),Cl(71,"code"),qx(72,"'yyyy-mm-ddTHH:mm:ss+/-HH:mm'"),og(),qx(73," quando "),Cl(74,"code"),qx(75,"p-show-seconds"),og(),qx(76," est\xE1 ativo)."),og(),Cl(77,"p")(78,"strong"),qx(79,"Importante:"),og()(),Cl(80,"ul")(81,"li"),qx(82,"O valor emitido no model inclui o offset do timezone local do navegador."),og(),Cl(83,"li"),qx(84,"Ao receber um valor com timezone, o componente converte automaticamente para hor\xE1rio local."),og(),Cl(85,"li"),qx(86,"Caso a data/hora esteja inv\xE1lida, o "),Cl(87,"code"),qx(88,"model"),og(),qx(89," receber\xE1 a mensagem de erro localizada."),og(),Cl(90,"li"),qx(91,"Caso o "),Cl(92,"code"),qx(93,"input"),og(),qx(94," esteja passando um "),Cl(95,"code"),qx(96,"[(ngModel)]"),og(),qx(97,", mas n\xE3o tenha um "),Cl(98,"code"),qx(99,"name"),og(),qx(100,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Cl(101,"code"),qx(102,'[ngModelOptions]="{standalone: true}"'),og(),qx(103,")."),og()(),Cl(104,"p"),qx(105,"Exemplo:"),og(),Cl(106,"pre")(107,"code"),qx(108,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),og()(),Cl(109,"blockquote")(110,"p"),qx(111,"N\xE3o esque\xE7a de importar o "),Cl(112,"code"),qx(113,"FormsModule"),og(),qx(114," em seu m\xF3dulo, tal como para utilizar o "),Cl(115,"code"),qx(116,"input default"),og(),qx(117,"."),og()(),Cl(118,"h4"),qx(119,"Tokens customiz\xE1veis"),og(),Cl(120,"p"),qx(121,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Hl(122,"br"),qx(123,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Cl(124,"code"),qx(125,".po-input"),og()(),Cl(126,"blockquote")(127,"p"),qx(128,"Para maiores informa\xE7\xF5es, acesse o guia "),Cl(129,"a",6),qx(130,"Personalizando o Tema Padr\xE3o com Tokens CSS"),og(),qx(131,"."),og()(),Cl(132,"table")(133,"thead")(134,"tr")(135,"th"),qx(136,"Propriedade"),og(),Cl(137,"th"),qx(138,"Descri\xE7\xE3o"),og(),Cl(139,"th"),qx(140,"Valor Padr\xE3o"),og()()(),Cl(141,"tbody")(142,"tr")(143,"td")(144,"strong"),qx(145,"Default Values"),og()(),Hl(146,"td")(147,"td"),og(),Cl(148,"tr")(149,"td")(150,"code"),qx(151,"--font-family"),og()(),Cl(152,"td"),qx(153,"Fam\xEDlia tipogr\xE1fica usada"),og(),Cl(154,"td")(155,"code"),qx(156,"var(--font-family-theme)"),og()()(),Cl(157,"tr")(158,"td")(159,"code"),qx(160,"--font-size"),og()(),Cl(161,"td"),qx(162,"Tamanho da fonte"),og(),Cl(163,"td")(164,"code"),qx(165,"var(--font-size-default)"),og()()(),Cl(166,"tr")(167,"td")(168,"code"),qx(169,"--text-color-placeholder"),og(),qx(170," \xA0"),og(),Cl(171,"td"),qx(172,"Cor principal do texto do placeholder"),og(),Cl(173,"td")(174,"code"),qx(175,"var(--color-neutral-light-30)"),og()()(),Cl(176,"tr")(177,"td")(178,"code"),qx(179,"--color"),og()(),Cl(180,"td"),qx(181,"Cor principal do datetimepicker"),og(),Cl(182,"td")(183,"code"),qx(184,"var(--color-neutral-dark-70)"),og()()(),Cl(185,"tr")(186,"td")(187,"code"),qx(188,"--background"),og()(),Cl(189,"td"),qx(190,"Cor de background"),og(),Cl(191,"td")(192,"code"),qx(193,"var(--color-neutral-light-05)"),og()()(),Cl(194,"tr")(195,"td")(196,"code"),qx(197,"--padding"),og()(),Cl(198,"td"),qx(199,"Preenchimento"),og(),Cl(200,"td")(201,"code"),qx(202,"0 0.5rem"),og()()(),Cl(203,"tr")(204,"td")(205,"code"),qx(206,"--text-color"),og()(),Cl(207,"td"),qx(208,"Cor do texto"),og(),Cl(209,"td")(210,"code"),qx(211,"var(--color-neutral-dark-90)"),og()()(),Cl(212,"tr")(213,"td")(214,"code"),qx(215,"--field-container-title-justify"),og()(),Cl(216,"td"),qx(217,"Alinhamento horizontal do t\xEDtulo ("),Cl(218,"code"),qx(219,"justify-content"),og(),qx(220,")"),og(),Cl(221,"td")(222,"code"),qx(223,"space-between"),og()()(),Cl(224,"tr")(225,"td")(226,"code"),qx(227,"--field-container-title-flex"),og()(),Cl(228,"td"),qx(229,"Flex do t\xEDtulo ("),Cl(230,"code"),qx(231,"flex"),og(),qx(232,")"),og(),Cl(233,"td")(234,"code"),qx(235,"1 auto"),og()()(),Cl(236,"tr")(237,"td")(238,"strong"),qx(239,"Hover"),og()(),Hl(240,"td")(241,"td"),og(),Cl(242,"tr")(243,"td")(244,"code"),qx(245,"--color-hover"),og()(),Cl(246,"td"),qx(247,"Cor principal no estado hover"),og(),Cl(248,"td")(249,"code"),qx(250,"var(--color-brand-01-dark)"),og()()(),Cl(251,"tr")(252,"td")(253,"code"),qx(254,"--background-hover"),og()(),Cl(255,"td"),qx(256,"Cor de background no estado hover"),og(),Cl(257,"td")(258,"code"),qx(259,"var(--color-brand-01-lightest)"),og()()(),Cl(260,"tr")(261,"td")(262,"strong"),qx(263,"Focused"),og()(),Hl(264,"td")(265,"td"),og(),Cl(266,"tr")(267,"td")(268,"code"),qx(269,"--color-focused"),og()(),Cl(270,"td"),qx(271,"Cor principal no estado de focus"),og(),Cl(272,"td")(273,"code"),qx(274,"var(--color-action-default)"),og()()(),Cl(275,"tr")(276,"td")(277,"code"),qx(278,"--outline-color-focused"),og()(),Cl(279,"td"),qx(280,"Cor do outline do estado de focus"),og(),Cl(281,"td")(282,"code"),qx(283,"var(--color-action-focus)"),og()()(),Cl(284,"tr")(285,"td")(286,"strong"),qx(287,"Disabled"),og()(),Hl(288,"td")(289,"td"),og(),Cl(290,"tr")(291,"td")(292,"code"),qx(293,"--color-disabled"),og()(),Cl(294,"td"),qx(295,"Cor principal no estado disabled"),og(),Cl(296,"td")(297,"code"),qx(298,"var(--color-neutral-light-30)"),og()()(),Cl(299,"tr")(300,"td")(301,"code"),qx(302,"--background-disabled"),og()(),Cl(303,"td"),qx(304,"Cor de background no estado disabled \xA0"),og(),Cl(305,"td")(306,"code"),qx(307,"var(--color-neutral-light-20)"),og()()(),Cl(308,"tr")(309,"td")(310,"code"),qx(311,"--text-color-disabled"),og()(),Cl(312,"td"),qx(313,"Cor do texto no estado disabled"),og(),Cl(314,"td")(315,"code"),qx(316,"var(--color-neutral-dark-70)"),og()()()()()(),Cl(317,"div",7)(318,"h4",8),qx(319,"Seletor"),og(),Cl(320,"pre",9),qx(321,`<po-datetimepicker
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
`),og()(),Cl(322,"h4",10),qx(323,"Propriedades"),og(),Cl(324,"table",11)(325,"tr",12)(326,"th",13),qx(327,"Nome"),og(),Cl(328,"th",13),qx(329,"Tipo"),og(),Cl(330,"th",13),qx(331,"Padr\xE3o"),og(),Cl(332,"th",13),qx(333,"Descri\xE7\xE3o"),og()(),Cl(334,"tr",14)(335,"td",15)(336,"div",16)(337,"span",17),qx(338," p-append-in-body"),Hl(339,"br"),og()()(),Cl(340,"td",18)(341,"code",19),qx(342,"boolean"),og()(),Cl(343,"td",20)(344,"p")(345,"code"),qx(346,"false"),og()()(),Cl(347,"td",21)(348,"em")(349,"strong"),qx(350,"(opcional)"),og()(),Cl(351,"p"),qx(352,"Define que o "),Cl(353,"code"),qx(354,"calendar"),og(),qx(355," e/ou tooltip ser\xE3o inclu\xEDdos no body da p\xE1gina e n\xE3o dentro do componente."),og()()(),Cl(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),qx(360," p-auto-focus"),Hl(361,"br"),og()()(),Cl(362,"td",18)(363,"code",19),qx(364,"boolean"),og()(),Cl(365,"td",20)(366,"p")(367,"code"),qx(368,"false"),og()()(),Cl(369,"td",21)(370,"em")(371,"strong"),qx(372,"(opcional)"),og()(),Cl(373,"p"),qx(374,"Aplica foco no elemento ao ser iniciado."),og()()(),Cl(375,"tr",14)(376,"td",15)(377,"div",16)(378,"span",17),qx(379," p-clean"),Hl(380,"br"),og()()(),Cl(381,"td",18)(382,"code",19),qx(383,"boolean "),og(),Cl(384,"code",22),qx(385," string"),og()(),Cl(386,"td",20)(387,"p")(388,"code"),qx(389,"false"),og()()(),Cl(390,"td",21)(391,"em")(392,"strong"),qx(393,"(opcional)"),og()(),Cl(394,"p"),qx(395,"Habilita a\xE7\xE3o para limpar o campo."),og()()(),Cl(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),qx(400," p-compact-label"),Hl(401,"br"),og()()(),Cl(402,"td",18)(403,"code",19),qx(404,"boolean"),og()(),Cl(405,"td",20)(406,"p")(407,"code"),qx(408,"false"),og()()(),Cl(409,"td",21)(410,"em")(411,"strong"),qx(412,"(opcional)"),og()(),Cl(413,"p"),qx(414,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),og()()(),Cl(415,"tr",14)(416,"td",15)(417,"div",16)(418,"span",17),qx(419," p-format-date"),Hl(420,"br"),og()()(),Cl(421,"td",18)(422,"code",22),qx(423,"string"),og()(),Cl(424,"td",20)(425,"p"),qx(426,"Determinado pelo locale"),og()(),Cl(427,"td",21)(428,"em")(429,"strong"),qx(430,"(opcional)"),og()(),Cl(431,"p"),qx(432,"Define o formato de exibi\xE7\xE3o da data."),og(),Cl(433,"p"),qx(434,"Valores v\xE1lidos:"),og(),Cl(435,"ul")(436,"li")(437,"code"),qx(438,"dd/mm/yyyy"),og()(),Cl(439,"li")(440,"code"),qx(441,"mm/dd/yyyy"),og()(),Cl(442,"li")(443,"code"),qx(444,"yyyy/mm/dd"),og()()(),Cl(445,"p"),qx(446,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),og(),Cl(447,"ul")(448,"li")(449,"code"),qx(450,"en"),og(),qx(451," \u2192 "),Cl(452,"code"),qx(453,"mm/dd/yyyy"),og()(),Cl(454,"li")(455,"code"),qx(456,"pt"),og(),qx(457,", "),Cl(458,"code"),qx(459,"es"),og(),qx(460,", "),Cl(461,"code"),qx(462,"ru"),og(),qx(463," \u2192 "),Cl(464,"code"),qx(465,"dd/mm/yyyy"),og()()()()(),Cl(466,"tr",14)(467,"td",15)(468,"div",16)(469,"span",17),qx(470," p-disabled"),Hl(471,"br"),og()()(),Cl(472,"td",18)(473,"code",19),qx(474,"boolean "),og(),Cl(475,"code",22),qx(476," string"),og()(),Cl(477,"td",20)(478,"p")(479,"code"),qx(480,"false"),og()()(),Cl(481,"td",21)(482,"em")(483,"strong"),qx(484,"(opcional)"),og()(),Cl(485,"p"),qx(486,"Desabilita o campo."),og()()(),Cl(487,"tr",14)(488,"td",15)(489,"div",16)(490,"span",17),qx(491," p-error-limit"),Hl(492,"br"),og()()(),Cl(493,"td",18)(494,"code",19),qx(495,"boolean"),og()(),Cl(496,"td",20)(497,"p")(498,"code"),qx(499,"false"),og()()(),Cl(500,"td",21)(501,"em")(502,"strong"),qx(503,"(opcional)"),og()(),Cl(504,"p"),qx(505,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),og()()(),Cl(506,"tr",14)(507,"td",15)(508,"div",16)(509,"span",17),qx(510," p-error-pattern"),Hl(511,"br"),og()()(),Cl(512,"td",18)(513,"code",22),qx(514,"string"),og()(),Cl(515,"td",20),qx(516,"-"),og(),Cl(517,"td",21)(518,"em")(519,"strong"),qx(520,"(opcional)"),og()(),Cl(521,"p"),qx(522,"Mensagem apresentada quando a data/hora for inv\xE1lida ou fora do per\xEDodo."),og()()(),Cl(523,"tr",14)(524,"td",15)(525,"div",16)(526,"span",17),qx(527," p-help"),Hl(528,"br"),og()()(),Cl(529,"td",18)(530,"code",22),qx(531,"string"),og()(),Cl(532,"td",20),qx(533,"-"),og(),Cl(534,"td",21)(535,"em")(536,"strong"),qx(537,"(opcional)"),og()(),Cl(538,"p"),qx(539,"Texto de apoio do campo."),og()()(),Cl(540,"tr",14)(541,"td",15)(542,"div",23)(543,"span",24),qx(544," (p-keydown)"),Hl(545,"br"),og()()(),Cl(546,"td",18)(547,"code",25),qx(548,"EventEmitter"),og()(),Cl(549,"td",20),qx(550,"-"),og(),Cl(551,"td",21)(552,"em")(553,"strong"),qx(554,"(opcional)"),og()(),Cl(555,"p"),qx(556,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),og()()(),Cl(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),qx(561," p-label"),Hl(562,"br"),og()()(),Cl(563,"td",18)(564,"code",22),qx(565,"string"),og()(),Cl(566,"td",20),qx(567,"-"),og(),Cl(568,"td",21)(569,"em")(570,"strong"),qx(571,"(opcional)"),og()(),Cl(572,"p"),qx(573,"R\xF3tulo do campo."),og()()(),Cl(574,"tr",14)(575,"td",15)(576,"div",16)(577,"span",17),qx(578," p-label-text-wrap"),Hl(579,"br"),og()()(),Cl(580,"td",18)(581,"code",19),qx(582,"boolean"),og()(),Cl(583,"td",20)(584,"p")(585,"code"),qx(586,"false"),og()()(),Cl(587,"td",21)(588,"em")(589,"strong"),qx(590,"(opcional)"),og()(),Cl(591,"p"),qx(592,"Habilita a quebra autom\xE1tica do texto da propriedade "),Cl(593,"code"),qx(594,"p-label"),og(),qx(595,"."),og()()(),Cl(596,"tr",14)(597,"td",15)(598,"div",16)(599,"span",17),qx(600," p-loading"),Hl(601,"br"),og()()(),Cl(602,"td",18)(603,"code",19),qx(604,"boolean "),og(),Cl(605,"code",22),qx(606," string"),og()(),Cl(607,"td",20)(608,"p")(609,"code"),qx(610,"false"),og()()(),Cl(611,"td",21)(612,"em")(613,"strong"),qx(614,"(opcional)"),og()(),Cl(615,"p"),qx(616,"Exibe um \xEDcone de carregamento no lado direito do campo."),og()()(),Cl(617,"tr",14)(618,"td",15)(619,"div",16)(620,"span",17),qx(621," p-locale"),Hl(622,"br"),og()()(),Cl(623,"td",18)(624,"code",22),qx(625,"string"),og()(),Cl(626,"td",20),qx(627,"-"),og(),Cl(628,"td",21)(629,"em")(630,"strong"),qx(631,"(opcional)"),og()(),Cl(632,"p"),qx(633,"Idioma do componente."),og(),Cl(634,"blockquote")(635,"p"),qx(636,"O locale padr\xE3o ser\xE1 recuperado com base no "),Cl(637,"a",26)(638,"code"),qx(639,"PoI18nService"),og()(),qx(640," ou "),Cl(641,"em"),qx(642,"browser"),og(),qx(643,"."),og()()()(),Cl(644,"tr",14)(645,"td",15)(646,"div",16)(647,"span",17),qx(648," p-max-date"),Hl(649,"br"),og()()(),Cl(650,"td",18)(651,"code",22),qx(652,"string "),og(),Cl(653,"code",27),qx(654," Date"),og()(),Cl(655,"td",20),qx(656,"-"),og(),Cl(657,"td",21)(658,"em")(659,"strong"),qx(660,"(opcional)"),og()(),Cl(661,"p"),qx(662,"Define uma data m\xE1xima para o "),Cl(663,"code"),qx(664,"po-datetimepicker"),og(),qx(665,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),og(),Cl(666,"p"),qx(667,"Aceita os formatos:"),og(),Cl(668,"ul")(669,"li")(670,"code"),qx(671,"Date"),og(),qx(672," object: "),Cl(673,"code"),qx(674,"new Date(2026, 4, 31)"),og()(),Cl(675,"li"),qx(676,"ISO string: "),Cl(677,"code"),qx(678,"'2026-05-31'"),og()(),Cl(679,"li"),qx(680,"ISO com hora: "),Cl(681,"code"),qx(682,"'2026-05-31T23:59:59-03:00'"),og()()()()(),Cl(683,"tr",14)(684,"td",15)(685,"div",16)(686,"span",17),qx(687," p-max-time"),Hl(688,"br"),og()()(),Cl(689,"td",18)(690,"code",22),qx(691,"string"),og()(),Cl(692,"td",20),qx(693,"-"),og(),Cl(694,"td",21)(695,"em")(696,"strong"),qx(697,"(opcional)"),og()(),Cl(698,"p"),qx(699,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),og(),Cl(700,"p"),qx(701,"Formato aceito: "),Cl(702,"code"),qx(703,"HH:mm"),og(),qx(704," ou "),Cl(705,"code"),qx(706,"HH:mm:ss"),og(),qx(707,"."),og()()(),Cl(708,"tr",14)(709,"td",15)(710,"div",16)(711,"span",17),qx(712," p-min-date"),Hl(713,"br"),og()()(),Cl(714,"td",18)(715,"code",22),qx(716,"string "),og(),Cl(717,"code",27),qx(718," Date"),og()(),Cl(719,"td",20),qx(720,"-"),og(),Cl(721,"td",21)(722,"em")(723,"strong"),qx(724,"(opcional)"),og()(),Cl(725,"p"),qx(726,"Define uma data m\xEDnima para o "),Cl(727,"code"),qx(728,"po-datetimepicker"),og(),qx(729,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),og(),Cl(730,"p"),qx(731,"Aceita os formatos:"),og(),Cl(732,"ul")(733,"li")(734,"code"),qx(735,"Date"),og(),qx(736," object: "),Cl(737,"code"),qx(738,"new Date(2026, 0, 1)"),og()(),Cl(739,"li"),qx(740,"ISO string: "),Cl(741,"code"),qx(742,"'2026-01-01'"),og()(),Cl(743,"li"),qx(744,"ISO com hora: "),Cl(745,"code"),qx(746,"'2026-01-01T00:00:00-03:00'"),og()()()()(),Cl(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),qx(751," p-min-time"),Hl(752,"br"),og()()(),Cl(753,"td",18)(754,"code",22),qx(755,"string"),og()(),Cl(756,"td",20),qx(757,"-"),og(),Cl(758,"td",21)(759,"em")(760,"strong"),qx(761,"(opcional)"),og()(),Cl(762,"p"),qx(763,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),og(),Cl(764,"p"),qx(765,"Formato aceito: "),Cl(766,"code"),qx(767,"HH:mm"),og(),qx(768," ou "),Cl(769,"code"),qx(770,"HH:mm:ss"),og(),qx(771,"."),og()()(),Cl(772,"tr",14)(773,"td",15)(774,"div",16)(775,"span",17),qx(776," p-minute-interval"),Hl(777,"br"),og()()(),Cl(778,"td",18)(779,"code",28),qx(780,"number"),og()(),Cl(781,"td",20)(782,"p")(783,"code"),qx(784,"5"),og()()(),Cl(785,"td",21)(786,"em")(787,"strong"),qx(788,"(opcional)"),og()(),Cl(789,"p"),qx(790,"Define o intervalo entre os minutos exibidos no painel do timer."),og()()(),Cl(791,"tr",14)(792,"td",15)(793,"div",16)(794,"span",17),qx(795," name"),Hl(796,"br"),og()()(),Cl(797,"td",18)(798,"code",22),qx(799,"string"),og()(),Cl(800,"td",20),qx(801,"-"),og(),Cl(802,"td",21)(803,"em")(804,"strong"),qx(805,"(opcional)"),og()(),Cl(806,"p"),qx(807,"Nome do componente."),og()()(),Cl(808,"tr",14)(809,"td",15)(810,"div",16)(811,"span",17),qx(812," p-no-autocomplete"),Hl(813,"br"),og()()(),Cl(814,"td",18)(815,"code",19),qx(816,"boolean "),og(),Cl(817,"code",22),qx(818," string"),og()(),Cl(819,"td",20)(820,"p")(821,"code"),qx(822,"false"),og()()(),Cl(823,"td",21)(824,"em")(825,"strong"),qx(826,"(opcional)"),og()(),Cl(827,"p"),qx(828,"Define a propriedade nativa "),Cl(829,"code"),qx(830,"autocomplete"),og(),qx(831," do campo como "),Cl(832,"code"),qx(833,"off"),og(),qx(834,"."),og()()(),Cl(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),qx(839," (p-blur)"),Hl(840,"br"),og()()(),Cl(841,"td",18)(842,"code",25),qx(843,"EventEmitter"),og()(),Cl(844,"td",20),qx(845,"-"),og(),Cl(846,"td",21)(847,"em")(848,"strong"),qx(849,"(opcional)"),og()(),Cl(850,"p"),qx(851,"Evento disparado ao sair do campo (blur)."),og()()(),Cl(852,"tr",14)(853,"td",15)(854,"div",23)(855,"span",24),qx(856," (p-change)"),Hl(857,"br"),og()()(),Cl(858,"td",18)(859,"code",25),qx(860,"EventEmitter"),og()(),Cl(861,"td",20),qx(862,"-"),og(),Cl(863,"td",21)(864,"em")(865,"strong"),qx(866,"(opcional)"),og()(),Cl(867,"p"),qx(868,"Evento disparado ao alterar valor do campo."),og()()(),Cl(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),qx(873," p-optional"),Hl(874,"br"),og()()(),Cl(875,"td",18)(876,"code",19),qx(877,"boolean"),og()(),Cl(878,"td",20)(879,"p")(880,"code"),qx(881,"false"),og()()(),Cl(882,"td",21)(883,"em")(884,"strong"),qx(885,"(opcional)"),og()(),Cl(886,"p"),qx(887,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),og()()(),Cl(888,"tr",14)(889,"td",15)(890,"div",16)(891,"span",17),qx(892," p-placeholder"),Hl(893,"br"),og()()(),Cl(894,"td",18)(895,"code",22),qx(896,"string"),og()(),Cl(897,"td",20),qx(898,"-"),og(),Cl(899,"td",21)(900,"em")(901,"strong"),qx(902,"(opcional)"),og()(),Cl(903,"p"),qx(904,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),og()()(),Cl(905,"tr",14)(906,"td",15)(907,"div",16)(908,"span",17),qx(909," p-helper"),Hl(910,"br"),og()()(),Cl(911,"td",18)(912,"code",29),qx(913,"PoHelperOptions "),og(),Cl(914,"code",22),qx(915," string"),og()(),Cl(916,"td",20),qx(917,"-"),og(),Cl(918,"td",21)(919,"em")(920,"strong"),qx(921,"(opcional)"),og()(),Cl(922,"p"),qx(923,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),og(),Cl(924,"blockquote")(925,"p"),qx(926,"Para mais informa\xE7\xF5es acesse: "),Cl(927,"a",30),qx(928,"https://po-ui.io/documentation/po-helper"),og(),qx(929,"."),og()()()(),Cl(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),qx(934," p-readonly"),Hl(935,"br"),og()()(),Cl(936,"td",18)(937,"code",19),qx(938,"boolean "),og(),Cl(939,"code",22),qx(940," string"),og()(),Cl(941,"td",20)(942,"p")(943,"code"),qx(944,"false"),og()()(),Cl(945,"td",21)(946,"em")(947,"strong"),qx(948,"(opcional)"),og()(),Cl(949,"p"),qx(950,"Torna o componente somente leitura."),og()()(),Cl(951,"tr",14)(952,"td",15)(953,"div",16)(954,"span",17),qx(955," p-required"),Hl(956,"br"),og()()(),Cl(957,"td",18)(958,"code",19),qx(959,"boolean "),og(),Cl(960,"code",22),qx(961," string"),og()(),Cl(962,"td",20)(963,"p")(964,"code"),qx(965,"false"),og()()(),Cl(966,"td",21)(967,"em")(968,"strong"),qx(969,"(opcional)"),og()(),Cl(970,"p"),qx(971,"Define que o campo ser\xE1 obrigat\xF3rio."),og()()(),Cl(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),qx(976," p-second-interval"),Hl(977,"br"),og()()(),Cl(978,"td",18)(979,"code",28),qx(980,"number"),og()(),Cl(981,"td",20)(982,"p")(983,"code"),qx(984,"1"),og()()(),Cl(985,"td",21)(986,"em")(987,"strong"),qx(988,"(opcional)"),og()(),Cl(989,"p"),qx(990,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),Cl(991,"code"),qx(992,"p-show-seconds"),og(),qx(993," est\xE1 ativo."),og()()(),Cl(994,"tr",14)(995,"td",15)(996,"div",16)(997,"span",17),qx(998," p-required-field-error-message"),Hl(999,"br"),og()()(),Cl(1e3,"td",18)(1001,"code",19),qx(1002,"boolean"),og()(),Cl(1003,"td",20)(1004,"p")(1005,"code"),qx(1006,"false"),og()()(),Cl(1007,"td",21)(1008,"em")(1009,"strong"),qx(1010,"(opcional)"),og()(),Cl(1011,"p"),qx(1012,"Exibe a mensagem setada na propriedade "),Cl(1013,"code"),qx(1014,"p-error-pattern"),og(),qx(1015," se o campo estiver vazio e for requerido."),og(),Cl(1016,"blockquote")(1017,"p"),qx(1018,"Necess\xE1rio que a propriedade "),Cl(1019,"code"),qx(1020,"p-required"),og(),qx(1021," esteja habilitada."),og()()()(),Cl(1022,"tr",14)(1023,"td",15)(1024,"div",16)(1025,"span",17),qx(1026," p-show-required"),Hl(1027,"br"),og()()(),Cl(1028,"td",18)(1029,"code",19),qx(1030,"boolean"),og()(),Cl(1031,"td",20)(1032,"p")(1033,"code"),qx(1034,"false"),og()()(),Cl(1035,"td",21)(1036,"em")(1037,"strong"),qx(1038,"(opcional)"),og()(),Cl(1039,"p"),qx(1040,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),og()()(),Cl(1041,"tr",14)(1042,"td",15)(1043,"div",16)(1044,"span",17),qx(1045," p-show-seconds"),Hl(1046,"br"),og()()(),Cl(1047,"td",18)(1048,"code",19),qx(1049,"boolean"),og()(),Cl(1050,"td",20)(1051,"p")(1052,"code"),qx(1053,"false"),og()()(),Cl(1054,"td",21)(1055,"em")(1056,"strong"),qx(1057,"(opcional)"),og()(),Cl(1058,"p"),qx(1059,"Exibe a coluna de segundos no painel de sele\xE7\xE3o do timer."),og()()(),Cl(1060,"tr",14)(1061,"td",15)(1062,"div",16)(1063,"span",17),qx(1064," p-size"),Hl(1065,"br"),og()()(),Cl(1066,"td",18)(1067,"code",22),qx(1068,"string"),og()(),Cl(1069,"td",20)(1070,"p")(1071,"code"),qx(1072,"medium"),og()()(),Cl(1073,"td",21)(1074,"em")(1075,"strong"),qx(1076,"(opcional)"),og()(),Cl(1077,"p"),qx(1078,"Define o tamanho do componente:"),og(),Cl(1079,"ul")(1080,"li")(1081,"code"),qx(1082,"small"),og(),qx(1083,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),og(),Cl(1084,"li")(1085,"code"),qx(1086,"medium"),og(),qx(1087,": altura do input como 44px."),og()()()(),Cl(1088,"tr",14)(1089,"td",15)(1090,"div",16)(1091,"span",17),qx(1092," p-format-time"),Hl(1093,"br"),og()()(),Cl(1094,"td",18)(1095,"code",31),qx(1096,"PoTimerFormat"),og()(),Cl(1097,"td",20)(1098,"p"),qx(1099,"Determinado pelo locale"),og()(),Cl(1100,"td",21)(1101,"em")(1102,"strong"),qx(1103,"(opcional)"),og()(),Cl(1104,"p"),qx(1105,"Define o formato de exibi\xE7\xE3o do timer."),og(),Cl(1106,"p"),qx(1107,"Valores v\xE1lidos:"),og(),Cl(1108,"ul")(1109,"li")(1110,"code"),qx(1111,"24"),og(),qx(1112,": formato de 24 horas (padr\xE3o para pt, es, ru)"),og(),Cl(1113,"li")(1114,"code"),qx(1115,"12"),og(),qx(1116,": formato de 12 horas com indicador AM/PM (padr\xE3o para en)"),og()(),Cl(1117,"p"),qx(1118,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),og(),Cl(1119,"ul")(1120,"li")(1121,"code"),qx(1122,"en"),og(),qx(1123," \u2192 12h (AM/PM)"),og(),Cl(1124,"li")(1125,"code"),qx(1126,"pt"),og(),qx(1127,", "),Cl(1128,"code"),qx(1129,"es"),og(),qx(1130,", "),Cl(1131,"code"),qx(1132,"ru"),og(),qx(1133," \u2192 24h"),og()()()()(),Cl(1134,"h3",10),qx(1135,"M\xE9todos"),og(),Cl(1136,"table",32)(1137,"tr",14)(1138,"th",33)(1139,"div",16)(1140,"h4")(1141,"span",17),qx(1142," showAdditionalHelp "),og()()()()(),Cl(1143,"tr",21)(1144,"td",21)(1145,"p"),qx(1146,"M\xE9todo que exibe "),Cl(1147,"code"),qx(1148,"p-helper"),og(),qx(1149," ou executa a a\xE7\xE3o definida em "),Cl(1150,"code"),qx(1151,"p-helper{eventOnClick}"),og(),qx(1152,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Cl(1153,"code"),qx(1154,"p-keydown"),og(),qx(1155,"."),og(),Cl(1156,"blockquote")(1157,"p"),qx(1158,"Exibe ou oculta o conte\xFAdo do componente "),Cl(1159,"code"),qx(1160,"po-helper"),og(),qx(1161," quando o componente estiver com foco."),og()(),Cl(1162,"pre")(1163,"code"),qx(1164,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),og()(),Cl(1165,"pre")(1166,"code"),qx(1167,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),og()()()()(),Hl(1168,"br"),og());},dependencies:[Zr],encapsulation:2})}return l})();var Ce=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(Cn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Datetimepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Cl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),dt("p-click",function(){return i.changeTab("doc")}),Hl(3,"sample-po-datetimepicker-doc"),og(),Cl(4,"po-tab",3),dt("p-click",function(){return i.changeTab("web")}),Hl(5,"sample-po-datetimepicker-basic-view")(6,"sample-po-datetimepicker-labs-view")(7,"sample-po-datetimepicker-12h-seconds-view")(8,"sample-po-datetimepicker-scheduling-view"),og()()()),r&2&&(ZE("p-actions",i.actions),Lp(2),ZE("p-active",i.activeTab==="doc"),Lp(2),ZE("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[SNe,ofe,lfe,ce,Se,he,fe,xe],encapsulation:2})}return l})();var Fe=[{path:"",component:Ce}],ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[bL.forChild(Fe),bL]})}return l})();var Et=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[ca,ve]})}return l})();export{Et as DocPoDatetimepickerModule};