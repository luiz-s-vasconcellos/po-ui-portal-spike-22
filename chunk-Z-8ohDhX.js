import {f as fe$1,u as ue,a as ar,D as DL,w,c3 as Xn,c as wn,U as Un,d as f,c5 as Vde,aW as Yp,cV as Iw,L as Gl,an as AO,aH as Ga,b8 as Wme,b9 as jme,T as Tl,C as iN,M as sg,a1 as ht$1,H as Vp,ar as qx,au as fg,O as nw,bs as mN,aX as oY,aF as nY,aY as rY,aG as Sk,aZ as Ck,b0 as Qt,b1 as mv,c4 as C3,bD as Ede,b4 as O3,cp as Hhe,c8 as Dde,cW as Cue,c9 as Yhe,aB as Sx,aM as ww,aN as r0,aO as Ew,aP as o0,aJ as qhe,bd as Fx,av as Yl,aw as uo,ax as fo,a3 as lNe,aD as Ky,aT as sN,aE as Xy}from'./main-56B5DD5U.js';var se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-basic"]],standalone:false,decls:1,vars:0,consts:[["name","datetimepicker","p-label","PO Datetimepicker"]],template:function(r,i){r&1&&Gl(0,"po-datetimepicker",0);},dependencies:[Iw],encapsulation:2,changeDetection:1})}return l})();var De=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-basic-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Datetimepicker Basic"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-datetimepicker-basic"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,De,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,se],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];formatDateOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];formatTimeOptions=[{label:"24h",value:"24"},{label:"12h (AM/PM)",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore();}changeEvent(p){this.event=p;}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText="",this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size="medium";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-labs"]],standalone:false,decls:26,vars:54,consts:[["f","ngForm"],["name","datetimepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-compact-label","p-disabled","p-error-limit","p-error-pattern","p-format-date","p-format-time","p-help","p-helper","p-label","p-label-text-wrap","p-loading","p-locale","p-max-date","p-max-time","p-min-date","p-min-time","p-minute-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-second-interval","p-show-required","p-show-seconds","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min Date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max Date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatDate","p-columns","4","p-label","Format Date",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","formatTime","p-columns","4","p-label","Format Time",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=Sx();Tl(0,"po-datetimepicker",1),ww("ngModelChange",function(o){return Ky(d),sN(i.datetimepicker,o)||(i.datetimepicker=o),Xy(o)}),ht$1("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),sg(),r0(),Gl(1,"po-divider"),Tl(2,"div",2),Gl(3,"po-info",3)(4,"po-info",4),sg(),Gl(5,"po-divider"),Tl(6,"form",null,0)(8,"po-input",5),ww("ngModelChange",function(o){return Ky(d),sN(i.label,o)||(i.label=o),Xy(o)}),sg(),r0(),Tl(9,"po-input",6),ww("ngModelChange",function(o){return Ky(d),sN(i.help,o)||(i.help=o),Xy(o)}),sg(),r0(),Tl(10,"po-input",7),ww("ngModelChange",function(o){return Ky(d),sN(i.helperText,o)||(i.helperText=o),Xy(o)}),sg(),r0(),Tl(11,"po-input",8),ww("ngModelChange",function(o){return Ky(d),sN(i.placeholder,o)||(i.placeholder=o),Xy(o)}),sg(),r0(),Tl(12,"po-input",9),ww("ngModelChange",function(o){return Ky(d),sN(i.errorPattern,o)||(i.errorPattern=o),Xy(o)}),sg(),r0(),Tl(13,"po-number",10),ww("ngModelChange",function(o){return Ky(d),sN(i.minuteInterval,o)||(i.minuteInterval=o),Xy(o)}),sg(),r0(),Tl(14,"po-number",11),ww("ngModelChange",function(o){return Ky(d),sN(i.secondInterval,o)||(i.secondInterval=o),Xy(o)}),sg(),r0(),Tl(15,"po-timepicker",12),ww("ngModelChange",function(o){return Ky(d),sN(i.minTime,o)||(i.minTime=o),Xy(o)}),sg(),r0(),Tl(16,"po-timepicker",13),ww("ngModelChange",function(o){return Ky(d),sN(i.maxTime,o)||(i.maxTime=o),Xy(o)}),sg(),r0(),Tl(17,"po-datepicker",14),ww("ngModelChange",function(o){return Ky(d),sN(i.minDate,o)||(i.minDate=o),Xy(o)}),sg(),r0(),Tl(18,"po-datepicker",15),ww("ngModelChange",function(o){return Ky(d),sN(i.maxDate,o)||(i.maxDate=o),Xy(o)}),sg(),r0(),Tl(19,"po-checkbox-group",16),ww("ngModelChange",function(o){return Ky(d),sN(i.properties,o)||(i.properties=o),Xy(o)}),sg(),r0(),Tl(20,"po-radio-group",17),ww("ngModelChange",function(o){return Ky(d),sN(i.locale,o)||(i.locale=o),Xy(o)}),sg(),r0(),Tl(21,"po-radio-group",18),ww("ngModelChange",function(o){return Ky(d),sN(i.formatDate,o)||(i.formatDate=o),Xy(o)}),sg(),r0(),Tl(22,"po-radio-group",19),ww("ngModelChange",function(o){return Ky(d),sN(i.formatTime,o)||(i.formatTime=o),Xy(o)}),sg(),r0(),Tl(23,"po-radio-group",20),ww("ngModelChange",function(o){return Ky(d),sN(i.size,o)||(i.size=o),Xy(o)}),sg(),r0(),Tl(24,"div",2)(25,"po-button",21),ht$1("p-click",function(){return i.restore()}),sg()()();}r&2&&(Ew("ngModel",i.datetimepicker),nw("p-clean",i.properties.includes("clean"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-disabled",i.properties.includes("disabled"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-error-pattern",i.errorPattern)("p-format-date",i.formatDate)("p-format-time",i.formatTime)("p-help",i.help)("p-helper",i.helperText)("p-label",i.label)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-max-date",i.maxDate)("p-max-time",i.maxTime)("p-min-date",i.minDate)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-second-interval",i.secondInterval)("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-size",i.size),o0(),Vp(3),nw("p-value",i.datetimepicker),Vp(),nw("p-value",i.event),Vp(4),Ew("ngModel",i.label),o0(),Vp(),Ew("ngModel",i.help),o0(),Vp(),Ew("ngModel",i.helperText),o0(),Vp(),Ew("ngModel",i.placeholder),o0(),Vp(),Ew("ngModel",i.errorPattern),o0(),Vp(),Ew("ngModel",i.minuteInterval),o0(),Vp(),Ew("ngModel",i.secondInterval),o0(),Vp(),Ew("ngModel",i.minTime),o0(),Vp(),Ew("ngModel",i.maxTime),o0(),Vp(),Ew("ngModel",i.minDate),nw("p-max-date",i.maxDate),o0(),Vp(),Ew("ngModel",i.maxDate),nw("p-min-date",i.minDate),o0(),Vp(),Ew("ngModel",i.properties),nw("p-options",i.propertiesOptions),o0(),Vp(),Ew("ngModel",i.locale),nw("p-options",i.localeOptions),o0(),Vp(),Ew("ngModel",i.formatDate),nw("p-options",i.formatDateOptions),o0(),Vp(),Ew("ngModel",i.formatTime),nw("p-options",i.formatTimeOptions),o0(),Vp(),Ew("ngModel",i.size),nw("p-options",i.sizeOptions),o0());},dependencies:[oY,nY,rY,Sk,Ck,Qt,mv,C3,Ede,Iw,O3,Hhe,Dde,Cue,Yhe],encapsulation:2,changeDetection:1})}return l})();var Me=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-labs-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Datetimepicker Labs"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-datetimepicker
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-datetimepicker-labs"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Me,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,ge],encapsulation:2,changeDetection:1})}return l})();var he=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-12h-seconds"]],standalone:false,decls:1,vars:1,consts:[["name","datetimepicker12h","p-label","PO Datetimepicker - 12h with Seconds","p-show-seconds","true","p-format-time","12","p-format-date","mm/dd/yyyy",3,"ngModelChange","ngModel"]],template:function(r,i){r&1&&(Tl(0,"po-datetimepicker",0),ww("ngModelChange",function(s){return sN(i.datetime,s)||(i.datetime=s),s}),sg(),r0()),r&2&&(Ew("ngModel",i.datetime),o0());},dependencies:[nY,Sk,Iw],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-12h-seconds-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Datetimepicker - 12h with Seconds"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html"),sg(),Tl(13,"pre",7),iN(14,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-datetimepicker-12h-seconds"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,Te,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,he],encapsulation:2,changeDetection:1})}return l})();var Oe=["formScheduling"],be=(()=>{class l{poDialog=f(Vde);poNotification=f(Yp);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:"general",label:"Cl\xEDnico Geral"},{value:"cardiology",label:"Cardiologia"},{value:"dermatology",label:"Dermatologia"},{value:"orthopedics",label:"Ortopedia"},{value:"neurology",label:"Neurologia"}];confirm(){let p=this.appointment?this.appointment.slice(0,16):"",r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:"Confirmar Agendamento",message:r,confirm:()=>{this.poNotification.success("Consulta agendada com sucesso!"),this.formScheduling.reset();},cancel:()=>{this.poNotification.warning("Agendamento cancelado.");}});}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:""}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&Yl(Oe,7),r&2){let d;uo(d=fo())&&(i.formScheduling=d.first);}},standalone:false,decls:10,vars:6,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","patient","p-label","Paciente","p-placeholder","Nome do paciente","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","doctor","p-label","M\xE9dico","p-placeholder","Nome do m\xE9dico","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","specialty","p-label","Especialidade","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","appointment","p-clean","","p-label","Data e Hora da Consulta","p-min-time","08:00","p-max-time","18:00","p-minute-interval","15","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","confirmButton","p-label","Agendar Consulta",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=Sx();Tl(0,"form",null,0)(2,"div",1)(3,"po-input",2),ww("ngModelChange",function(o){return Ky(d),sN(i.patient,o)||(i.patient=o),Xy(o)}),sg(),r0(),Tl(4,"po-input",3),ww("ngModelChange",function(o){return Ky(d),sN(i.doctor,o)||(i.doctor=o),Xy(o)}),sg(),r0(),sg(),Tl(5,"div",1)(6,"po-select",4),ww("ngModelChange",function(o){return Ky(d),sN(i.specialty,o)||(i.specialty=o),Xy(o)}),sg(),r0(),Tl(7,"po-datetimepicker",5),ww("ngModelChange",function(o){return Ky(d),sN(i.appointment,o)||(i.appointment=o),Xy(o)}),sg(),r0(),sg(),Tl(8,"div",1)(9,"po-button",6),ht$1("p-click",function(){return i.confirm()}),sg()()();}if(r&2){let d=Fx(1);Vp(3),Ew("ngModel",i.patient),o0(),Vp(),Ew("ngModel",i.doctor),o0(),Vp(2),Ew("ngModel",i.specialty),nw("p-options",i.specialtyOptions),o0(),Vp(),Ew("ngModel",i.appointment),o0(),Vp(2),nw("p-disabled",d.invalid);}},dependencies:[oY,nY,rY,Sk,Ck,Qt,Iw,O3,qhe],encapsulation:2,changeDetection:1})}return l})();var We=l=>({"docs-sample-code-tabs":l}),fe=(()=>{class l{hideSampleCodeTabs=true;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus";}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-scheduling-view"]],standalone:false,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(Gl(0,"br"),Tl(1,"blockquote",0)(2,"label",1),iN(3,"PO Datetimepicker - Scheduling"),sg(),Tl(4,"a",2),ht$1("click",function(){return i.toggleSampleCodeTabs()}),Gl(5,"span"),iN(6),sg()(),Tl(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),iN(12,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html"),sg(),Tl(13,"pre",7),iN(14,`<form #formScheduling="ngForm">
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
`),sg()()(),Tl(15,"po-tab",8)(16,"div")(17,"label",6),iN(18,"sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts"),sg(),Tl(19,"pre",9),iN(20,`import { UntypedFormControl } from '@angular/forms';
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
`),sg()()()()(),Tl(21,"div",10),Gl(22,"sample-po-datetimepicker-scheduling"),sg(),Gl(23,"hr")),r&2&&(Vp(5),qx("po-icon "+i.sampleCodeButtonIcon),Vp(),fg(" ",i.sampleCodeButtonLabel),Vp(),nw("ngClass",mN(4,We,i.hideSampleCodeTabs)));},dependencies:[AO,Ga,Wme,jme,be],encapsulation:2,changeDetection:1})}return l})();var xe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=Un({type:l,selectors:[["sample-po-datetimepicker-doc"]],standalone:false,decls:1169,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(Tl(0,"div",0)(1,"p",1)(2,"code"),iN(3,"import { PoFieldModule } from '@po-ui/ng-components';"),sg()(),Tl(4,"div",2)(5,"p"),iN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),sg(),Tl(7,"blockquote")(8,"p"),iN(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),Tl(10,"code"),iN(11,"FormsModule"),sg(),iN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,"code"),iN(14,"ReactiveFormsModule"),sg(),iN(15,", ambos nativos do Angular."),sg()()(),Tl(16,"h3",3),iN(17,"Componente"),sg(),Tl(18,"h4",4)(19,"code",5),iN(20,"PoDatetimepickerComponent"),sg()(),Tl(21,"div",2)(22,"p"),iN(23,"O "),Tl(24,"code"),iN(25,"po-datetimepicker"),sg(),iN(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),sg(),Tl(27,"p"),iN(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),Tl(29,"code"),iN(30,"p-format-date"),sg(),iN(31,". O formato de hora pode ser 24h ou 12h (AM/PM), configur\xE1vel via "),Tl(32,"code"),iN(33,"p-format-time"),sg(),iN(34,"."),sg(),Tl(35,"p"),iN(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Tl(37,"code"),iN(38,"p-locale"),sg(),iN(39,"."),sg(),Tl(40,"p"),iN(41,"O componente aceita os seguintes formatos de entrada:"),sg(),Tl(42,"ul")(43,"li"),iN(44,"ISO 8601 com timezone: "),Tl(45,"code"),iN(46,"'2026-05-12T14:30:00-03:00'"),sg()(),Tl(47,"li"),iN(48,"ISO 8601 UTC: "),Tl(49,"code"),iN(50,"'2026-05-12T14:30:00Z'"),sg()(),Tl(51,"li"),iN(52,"ISO 8601 sem timezone: "),Tl(53,"code"),iN(54,"'2026-05-12T14:30:00'"),sg()(),Tl(55,"li"),iN(56,"ISO 8601 apenas data: "),Tl(57,"code"),iN(58,"'2026-05-12'"),sg()(),Tl(59,"li"),iN(60,"JavaScript Date Object: "),Tl(61,"code"),iN(62,"new Date(2026, 4, 12, 14, 30)"),sg()()(),Tl(63,"p"),iN(64,"O formato de sa\xEDda do "),Tl(65,"em"),iN(66,"model"),sg(),iN(67," \xE9 sempre ISO 8601 com timezone local: "),Tl(68,"code"),iN(69,"'yyyy-mm-ddTHH:mm+/-HH:mm'"),sg(),iN(70,`
(ou `),Tl(71,"code"),iN(72,"'yyyy-mm-ddTHH:mm:ss+/-HH:mm'"),sg(),iN(73," quando "),Tl(74,"code"),iN(75,"p-show-seconds"),sg(),iN(76," est\xE1 ativo)."),sg(),Tl(77,"p")(78,"strong"),iN(79,"Importante:"),sg()(),Tl(80,"ul")(81,"li"),iN(82,"O valor emitido no model inclui o offset do timezone local do navegador."),sg(),Tl(83,"li"),iN(84,"Ao receber um valor com timezone, o componente converte automaticamente para hor\xE1rio local."),sg(),Tl(85,"li"),iN(86,"Caso a data/hora esteja inv\xE1lida, o "),Tl(87,"code"),iN(88,"model"),sg(),iN(89," receber\xE1 a mensagem de erro localizada."),sg(),Tl(90,"li"),iN(91,"Caso o "),Tl(92,"code"),iN(93,"input"),sg(),iN(94," esteja passando um "),Tl(95,"code"),iN(96,"[(ngModel)]"),sg(),iN(97,", mas n\xE3o tenha um "),Tl(98,"code"),iN(99,"name"),sg(),iN(100,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Tl(101,"code"),iN(102,'[ngModelOptions]="{standalone: true}"'),sg(),iN(103,")."),sg()(),Tl(104,"p"),iN(105,"Exemplo:"),sg(),Tl(106,"pre")(107,"code"),iN(108,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),sg()(),Tl(109,"blockquote")(110,"p"),iN(111,"N\xE3o esque\xE7a de importar o "),Tl(112,"code"),iN(113,"FormsModule"),sg(),iN(114," em seu m\xF3dulo, tal como para utilizar o "),Tl(115,"code"),iN(116,"input default"),sg(),iN(117,"."),sg()(),Tl(118,"h4"),iN(119,"Tokens customiz\xE1veis"),sg(),Tl(120,"p"),iN(121,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),Gl(122,"br"),iN(123,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(124,"code"),iN(125,".po-input"),sg()(),Tl(126,"blockquote")(127,"p"),iN(128,"Para maiores informa\xE7\xF5es, acesse o guia "),Tl(129,"a",6),iN(130,"Personalizando o Tema Padr\xE3o com Tokens CSS"),sg(),iN(131,"."),sg()(),Tl(132,"table")(133,"thead")(134,"tr")(135,"th"),iN(136,"Propriedade"),sg(),Tl(137,"th"),iN(138,"Descri\xE7\xE3o"),sg(),Tl(139,"th"),iN(140,"Valor Padr\xE3o"),sg()()(),Tl(141,"tbody")(142,"tr")(143,"td")(144,"strong"),iN(145,"Default Values"),sg()(),Gl(146,"td")(147,"td"),sg(),Tl(148,"tr")(149,"td")(150,"code"),iN(151,"--font-family"),sg()(),Tl(152,"td"),iN(153,"Fam\xEDlia tipogr\xE1fica usada"),sg(),Tl(154,"td")(155,"code"),iN(156,"var(--font-family-theme)"),sg()()(),Tl(157,"tr")(158,"td")(159,"code"),iN(160,"--font-size"),sg()(),Tl(161,"td"),iN(162,"Tamanho da fonte"),sg(),Tl(163,"td")(164,"code"),iN(165,"var(--font-size-default)"),sg()()(),Tl(166,"tr")(167,"td")(168,"code"),iN(169,"--text-color-placeholder"),sg(),iN(170," \xA0"),sg(),Tl(171,"td"),iN(172,"Cor principal do texto do placeholder"),sg(),Tl(173,"td")(174,"code"),iN(175,"var(--color-neutral-light-30)"),sg()()(),Tl(176,"tr")(177,"td")(178,"code"),iN(179,"--color"),sg()(),Tl(180,"td"),iN(181,"Cor principal do datetimepicker"),sg(),Tl(182,"td")(183,"code"),iN(184,"var(--color-neutral-dark-70)"),sg()()(),Tl(185,"tr")(186,"td")(187,"code"),iN(188,"--background"),sg()(),Tl(189,"td"),iN(190,"Cor de background"),sg(),Tl(191,"td")(192,"code"),iN(193,"var(--color-neutral-light-05)"),sg()()(),Tl(194,"tr")(195,"td")(196,"code"),iN(197,"--padding"),sg()(),Tl(198,"td"),iN(199,"Preenchimento"),sg(),Tl(200,"td")(201,"code"),iN(202,"0 0.5rem"),sg()()(),Tl(203,"tr")(204,"td")(205,"code"),iN(206,"--text-color"),sg()(),Tl(207,"td"),iN(208,"Cor do texto"),sg(),Tl(209,"td")(210,"code"),iN(211,"var(--color-neutral-dark-90)"),sg()()(),Tl(212,"tr")(213,"td")(214,"code"),iN(215,"--field-container-title-justify"),sg()(),Tl(216,"td"),iN(217,"Alinhamento horizontal do t\xEDtulo ("),Tl(218,"code"),iN(219,"justify-content"),sg(),iN(220,")"),sg(),Tl(221,"td")(222,"code"),iN(223,"space-between"),sg()()(),Tl(224,"tr")(225,"td")(226,"code"),iN(227,"--field-container-title-flex"),sg()(),Tl(228,"td"),iN(229,"Flex do t\xEDtulo ("),Tl(230,"code"),iN(231,"flex"),sg(),iN(232,")"),sg(),Tl(233,"td")(234,"code"),iN(235,"1 auto"),sg()()(),Tl(236,"tr")(237,"td")(238,"strong"),iN(239,"Hover"),sg()(),Gl(240,"td")(241,"td"),sg(),Tl(242,"tr")(243,"td")(244,"code"),iN(245,"--color-hover"),sg()(),Tl(246,"td"),iN(247,"Cor principal no estado hover"),sg(),Tl(248,"td")(249,"code"),iN(250,"var(--color-brand-01-dark)"),sg()()(),Tl(251,"tr")(252,"td")(253,"code"),iN(254,"--background-hover"),sg()(),Tl(255,"td"),iN(256,"Cor de background no estado hover"),sg(),Tl(257,"td")(258,"code"),iN(259,"var(--color-brand-01-lightest)"),sg()()(),Tl(260,"tr")(261,"td")(262,"strong"),iN(263,"Focused"),sg()(),Gl(264,"td")(265,"td"),sg(),Tl(266,"tr")(267,"td")(268,"code"),iN(269,"--color-focused"),sg()(),Tl(270,"td"),iN(271,"Cor principal no estado de focus"),sg(),Tl(272,"td")(273,"code"),iN(274,"var(--color-action-default)"),sg()()(),Tl(275,"tr")(276,"td")(277,"code"),iN(278,"--outline-color-focused"),sg()(),Tl(279,"td"),iN(280,"Cor do outline do estado de focus"),sg(),Tl(281,"td")(282,"code"),iN(283,"var(--color-action-focus)"),sg()()(),Tl(284,"tr")(285,"td")(286,"strong"),iN(287,"Disabled"),sg()(),Gl(288,"td")(289,"td"),sg(),Tl(290,"tr")(291,"td")(292,"code"),iN(293,"--color-disabled"),sg()(),Tl(294,"td"),iN(295,"Cor principal no estado disabled"),sg(),Tl(296,"td")(297,"code"),iN(298,"var(--color-neutral-light-30)"),sg()()(),Tl(299,"tr")(300,"td")(301,"code"),iN(302,"--background-disabled"),sg()(),Tl(303,"td"),iN(304,"Cor de background no estado disabled \xA0"),sg(),Tl(305,"td")(306,"code"),iN(307,"var(--color-neutral-light-20)"),sg()()(),Tl(308,"tr")(309,"td")(310,"code"),iN(311,"--text-color-disabled"),sg()(),Tl(312,"td"),iN(313,"Cor do texto no estado disabled"),sg(),Tl(314,"td")(315,"code"),iN(316,"var(--color-neutral-dark-70)"),sg()()()()()(),Tl(317,"div",7)(318,"h4",8),iN(319,"Seletor"),sg(),Tl(320,"pre",9),iN(321,`<po-datetimepicker
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
`),sg()(),Tl(322,"h4",10),iN(323,"Propriedades"),sg(),Tl(324,"table",11)(325,"tr",12)(326,"th",13),iN(327,"Nome"),sg(),Tl(328,"th",13),iN(329,"Tipo"),sg(),Tl(330,"th",13),iN(331,"Padr\xE3o"),sg(),Tl(332,"th",13),iN(333,"Descri\xE7\xE3o"),sg()(),Tl(334,"tr",14)(335,"td",15)(336,"div",16)(337,"span",17),iN(338," p-append-in-body"),Gl(339,"br"),sg()()(),Tl(340,"td",18)(341,"code",19),iN(342,"boolean"),sg()(),Tl(343,"td",20)(344,"p")(345,"code"),iN(346,"false"),sg()()(),Tl(347,"td",21)(348,"em")(349,"strong"),iN(350,"(opcional)"),sg()(),Tl(351,"p"),iN(352,"Define que o "),Tl(353,"code"),iN(354,"calendar"),sg(),iN(355," e/ou tooltip ser\xE3o inclu\xEDdos no body da p\xE1gina e n\xE3o dentro do componente."),sg()()(),Tl(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),iN(360," p-auto-focus"),Gl(361,"br"),sg()()(),Tl(362,"td",18)(363,"code",19),iN(364,"boolean"),sg()(),Tl(365,"td",20)(366,"p")(367,"code"),iN(368,"false"),sg()()(),Tl(369,"td",21)(370,"em")(371,"strong"),iN(372,"(opcional)"),sg()(),Tl(373,"p"),iN(374,"Aplica foco no elemento ao ser iniciado."),sg()()(),Tl(375,"tr",14)(376,"td",15)(377,"div",16)(378,"span",17),iN(379," p-clean"),Gl(380,"br"),sg()()(),Tl(381,"td",18)(382,"code",19),iN(383,"boolean "),sg(),Tl(384,"code",22),iN(385," string"),sg()(),Tl(386,"td",20)(387,"p")(388,"code"),iN(389,"false"),sg()()(),Tl(390,"td",21)(391,"em")(392,"strong"),iN(393,"(opcional)"),sg()(),Tl(394,"p"),iN(395,"Habilita a\xE7\xE3o para limpar o campo."),sg()()(),Tl(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),iN(400," p-compact-label"),Gl(401,"br"),sg()()(),Tl(402,"td",18)(403,"code",19),iN(404,"boolean"),sg()(),Tl(405,"td",20)(406,"p")(407,"code"),iN(408,"false"),sg()()(),Tl(409,"td",21)(410,"em")(411,"strong"),iN(412,"(opcional)"),sg()(),Tl(413,"p"),iN(414,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),sg()()(),Tl(415,"tr",14)(416,"td",15)(417,"div",16)(418,"span",17),iN(419," p-format-date"),Gl(420,"br"),sg()()(),Tl(421,"td",18)(422,"code",22),iN(423,"string"),sg()(),Tl(424,"td",20)(425,"p"),iN(426,"Determinado pelo locale"),sg()(),Tl(427,"td",21)(428,"em")(429,"strong"),iN(430,"(opcional)"),sg()(),Tl(431,"p"),iN(432,"Define o formato de exibi\xE7\xE3o da data."),sg(),Tl(433,"p"),iN(434,"Valores v\xE1lidos:"),sg(),Tl(435,"ul")(436,"li")(437,"code"),iN(438,"dd/mm/yyyy"),sg()(),Tl(439,"li")(440,"code"),iN(441,"mm/dd/yyyy"),sg()(),Tl(442,"li")(443,"code"),iN(444,"yyyy/mm/dd"),sg()()(),Tl(445,"p"),iN(446,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),sg(),Tl(447,"ul")(448,"li")(449,"code"),iN(450,"en"),sg(),iN(451," \u2192 "),Tl(452,"code"),iN(453,"mm/dd/yyyy"),sg()(),Tl(454,"li")(455,"code"),iN(456,"pt"),sg(),iN(457,", "),Tl(458,"code"),iN(459,"es"),sg(),iN(460,", "),Tl(461,"code"),iN(462,"ru"),sg(),iN(463," \u2192 "),Tl(464,"code"),iN(465,"dd/mm/yyyy"),sg()()()()(),Tl(466,"tr",14)(467,"td",15)(468,"div",16)(469,"span",17),iN(470," p-disabled"),Gl(471,"br"),sg()()(),Tl(472,"td",18)(473,"code",19),iN(474,"boolean "),sg(),Tl(475,"code",22),iN(476," string"),sg()(),Tl(477,"td",20)(478,"p")(479,"code"),iN(480,"false"),sg()()(),Tl(481,"td",21)(482,"em")(483,"strong"),iN(484,"(opcional)"),sg()(),Tl(485,"p"),iN(486,"Desabilita o campo."),sg()()(),Tl(487,"tr",14)(488,"td",15)(489,"div",16)(490,"span",17),iN(491," p-error-limit"),Gl(492,"br"),sg()()(),Tl(493,"td",18)(494,"code",19),iN(495,"boolean"),sg()(),Tl(496,"td",20)(497,"p")(498,"code"),iN(499,"false"),sg()()(),Tl(500,"td",21)(501,"em")(502,"strong"),iN(503,"(opcional)"),sg()(),Tl(504,"p"),iN(505,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),sg()()(),Tl(506,"tr",14)(507,"td",15)(508,"div",16)(509,"span",17),iN(510," p-error-pattern"),Gl(511,"br"),sg()()(),Tl(512,"td",18)(513,"code",22),iN(514,"string"),sg()(),Tl(515,"td",20),iN(516,"-"),sg(),Tl(517,"td",21)(518,"em")(519,"strong"),iN(520,"(opcional)"),sg()(),Tl(521,"p"),iN(522,"Mensagem apresentada quando a data/hora for inv\xE1lida ou fora do per\xEDodo."),sg()()(),Tl(523,"tr",14)(524,"td",15)(525,"div",16)(526,"span",17),iN(527," p-help"),Gl(528,"br"),sg()()(),Tl(529,"td",18)(530,"code",22),iN(531,"string"),sg()(),Tl(532,"td",20),iN(533,"-"),sg(),Tl(534,"td",21)(535,"em")(536,"strong"),iN(537,"(opcional)"),sg()(),Tl(538,"p"),iN(539,"Texto de apoio do campo."),sg()()(),Tl(540,"tr",14)(541,"td",15)(542,"div",23)(543,"span",24),iN(544," (p-keydown)"),Gl(545,"br"),sg()()(),Tl(546,"td",18)(547,"code",25),iN(548,"EventEmitter"),sg()(),Tl(549,"td",20),iN(550,"-"),sg(),Tl(551,"td",21)(552,"em")(553,"strong"),iN(554,"(opcional)"),sg()(),Tl(555,"p"),iN(556,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),sg()()(),Tl(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),iN(561," p-label"),Gl(562,"br"),sg()()(),Tl(563,"td",18)(564,"code",22),iN(565,"string"),sg()(),Tl(566,"td",20),iN(567,"-"),sg(),Tl(568,"td",21)(569,"em")(570,"strong"),iN(571,"(opcional)"),sg()(),Tl(572,"p"),iN(573,"R\xF3tulo do campo."),sg()()(),Tl(574,"tr",14)(575,"td",15)(576,"div",16)(577,"span",17),iN(578," p-label-text-wrap"),Gl(579,"br"),sg()()(),Tl(580,"td",18)(581,"code",19),iN(582,"boolean"),sg()(),Tl(583,"td",20)(584,"p")(585,"code"),iN(586,"false"),sg()()(),Tl(587,"td",21)(588,"em")(589,"strong"),iN(590,"(opcional)"),sg()(),Tl(591,"p"),iN(592,"Habilita a quebra autom\xE1tica do texto da propriedade "),Tl(593,"code"),iN(594,"p-label"),sg(),iN(595,"."),sg()()(),Tl(596,"tr",14)(597,"td",15)(598,"div",16)(599,"span",17),iN(600," p-loading"),Gl(601,"br"),sg()()(),Tl(602,"td",18)(603,"code",19),iN(604,"boolean "),sg(),Tl(605,"code",22),iN(606," string"),sg()(),Tl(607,"td",20)(608,"p")(609,"code"),iN(610,"false"),sg()()(),Tl(611,"td",21)(612,"em")(613,"strong"),iN(614,"(opcional)"),sg()(),Tl(615,"p"),iN(616,"Exibe um \xEDcone de carregamento no lado direito do campo."),sg()()(),Tl(617,"tr",14)(618,"td",15)(619,"div",16)(620,"span",17),iN(621," p-locale"),Gl(622,"br"),sg()()(),Tl(623,"td",18)(624,"code",22),iN(625,"string"),sg()(),Tl(626,"td",20),iN(627,"-"),sg(),Tl(628,"td",21)(629,"em")(630,"strong"),iN(631,"(opcional)"),sg()(),Tl(632,"p"),iN(633,"Idioma do componente."),sg(),Tl(634,"blockquote")(635,"p"),iN(636,"O locale padr\xE3o ser\xE1 recuperado com base no "),Tl(637,"a",26)(638,"code"),iN(639,"PoI18nService"),sg()(),iN(640," ou "),Tl(641,"em"),iN(642,"browser"),sg(),iN(643,"."),sg()()()(),Tl(644,"tr",14)(645,"td",15)(646,"div",16)(647,"span",17),iN(648," p-max-date"),Gl(649,"br"),sg()()(),Tl(650,"td",18)(651,"code",22),iN(652,"string "),sg(),Tl(653,"code",27),iN(654," Date"),sg()(),Tl(655,"td",20),iN(656,"-"),sg(),Tl(657,"td",21)(658,"em")(659,"strong"),iN(660,"(opcional)"),sg()(),Tl(661,"p"),iN(662,"Define uma data m\xE1xima para o "),Tl(663,"code"),iN(664,"po-datetimepicker"),sg(),iN(665,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),sg(),Tl(666,"p"),iN(667,"Aceita os formatos:"),sg(),Tl(668,"ul")(669,"li")(670,"code"),iN(671,"Date"),sg(),iN(672," object: "),Tl(673,"code"),iN(674,"new Date(2026, 4, 31)"),sg()(),Tl(675,"li"),iN(676,"ISO string: "),Tl(677,"code"),iN(678,"'2026-05-31'"),sg()(),Tl(679,"li"),iN(680,"ISO com hora: "),Tl(681,"code"),iN(682,"'2026-05-31T23:59:59-03:00'"),sg()()()()(),Tl(683,"tr",14)(684,"td",15)(685,"div",16)(686,"span",17),iN(687," p-max-time"),Gl(688,"br"),sg()()(),Tl(689,"td",18)(690,"code",22),iN(691,"string"),sg()(),Tl(692,"td",20),iN(693,"-"),sg(),Tl(694,"td",21)(695,"em")(696,"strong"),iN(697,"(opcional)"),sg()(),Tl(698,"p"),iN(699,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),sg(),Tl(700,"p"),iN(701,"Formato aceito: "),Tl(702,"code"),iN(703,"HH:mm"),sg(),iN(704," ou "),Tl(705,"code"),iN(706,"HH:mm:ss"),sg(),iN(707,"."),sg()()(),Tl(708,"tr",14)(709,"td",15)(710,"div",16)(711,"span",17),iN(712," p-min-date"),Gl(713,"br"),sg()()(),Tl(714,"td",18)(715,"code",22),iN(716,"string "),sg(),Tl(717,"code",27),iN(718," Date"),sg()(),Tl(719,"td",20),iN(720,"-"),sg(),Tl(721,"td",21)(722,"em")(723,"strong"),iN(724,"(opcional)"),sg()(),Tl(725,"p"),iN(726,"Define uma data m\xEDnima para o "),Tl(727,"code"),iN(728,"po-datetimepicker"),sg(),iN(729,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),sg(),Tl(730,"p"),iN(731,"Aceita os formatos:"),sg(),Tl(732,"ul")(733,"li")(734,"code"),iN(735,"Date"),sg(),iN(736," object: "),Tl(737,"code"),iN(738,"new Date(2026, 0, 1)"),sg()(),Tl(739,"li"),iN(740,"ISO string: "),Tl(741,"code"),iN(742,"'2026-01-01'"),sg()(),Tl(743,"li"),iN(744,"ISO com hora: "),Tl(745,"code"),iN(746,"'2026-01-01T00:00:00-03:00'"),sg()()()()(),Tl(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),iN(751," p-min-time"),Gl(752,"br"),sg()()(),Tl(753,"td",18)(754,"code",22),iN(755,"string"),sg()(),Tl(756,"td",20),iN(757,"-"),sg(),Tl(758,"td",21)(759,"em")(760,"strong"),iN(761,"(opcional)"),sg()(),Tl(762,"p"),iN(763,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),sg(),Tl(764,"p"),iN(765,"Formato aceito: "),Tl(766,"code"),iN(767,"HH:mm"),sg(),iN(768," ou "),Tl(769,"code"),iN(770,"HH:mm:ss"),sg(),iN(771,"."),sg()()(),Tl(772,"tr",14)(773,"td",15)(774,"div",16)(775,"span",17),iN(776," p-minute-interval"),Gl(777,"br"),sg()()(),Tl(778,"td",18)(779,"code",28),iN(780,"number"),sg()(),Tl(781,"td",20)(782,"p")(783,"code"),iN(784,"5"),sg()()(),Tl(785,"td",21)(786,"em")(787,"strong"),iN(788,"(opcional)"),sg()(),Tl(789,"p"),iN(790,"Define o intervalo entre os minutos exibidos no painel do timer."),sg()()(),Tl(791,"tr",14)(792,"td",15)(793,"div",16)(794,"span",17),iN(795," name"),Gl(796,"br"),sg()()(),Tl(797,"td",18)(798,"code",22),iN(799,"string"),sg()(),Tl(800,"td",20),iN(801,"-"),sg(),Tl(802,"td",21)(803,"em")(804,"strong"),iN(805,"(opcional)"),sg()(),Tl(806,"p"),iN(807,"Nome do componente."),sg()()(),Tl(808,"tr",14)(809,"td",15)(810,"div",16)(811,"span",17),iN(812," p-no-autocomplete"),Gl(813,"br"),sg()()(),Tl(814,"td",18)(815,"code",19),iN(816,"boolean "),sg(),Tl(817,"code",22),iN(818," string"),sg()(),Tl(819,"td",20)(820,"p")(821,"code"),iN(822,"false"),sg()()(),Tl(823,"td",21)(824,"em")(825,"strong"),iN(826,"(opcional)"),sg()(),Tl(827,"p"),iN(828,"Define a propriedade nativa "),Tl(829,"code"),iN(830,"autocomplete"),sg(),iN(831," do campo como "),Tl(832,"code"),iN(833,"off"),sg(),iN(834,"."),sg()()(),Tl(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),iN(839," (p-blur)"),Gl(840,"br"),sg()()(),Tl(841,"td",18)(842,"code",25),iN(843,"EventEmitter"),sg()(),Tl(844,"td",20),iN(845,"-"),sg(),Tl(846,"td",21)(847,"em")(848,"strong"),iN(849,"(opcional)"),sg()(),Tl(850,"p"),iN(851,"Evento disparado ao sair do campo (blur)."),sg()()(),Tl(852,"tr",14)(853,"td",15)(854,"div",23)(855,"span",24),iN(856," (p-change)"),Gl(857,"br"),sg()()(),Tl(858,"td",18)(859,"code",25),iN(860,"EventEmitter"),sg()(),Tl(861,"td",20),iN(862,"-"),sg(),Tl(863,"td",21)(864,"em")(865,"strong"),iN(866,"(opcional)"),sg()(),Tl(867,"p"),iN(868,"Evento disparado ao alterar valor do campo."),sg()()(),Tl(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),iN(873," p-optional"),Gl(874,"br"),sg()()(),Tl(875,"td",18)(876,"code",19),iN(877,"boolean"),sg()(),Tl(878,"td",20)(879,"p")(880,"code"),iN(881,"false"),sg()()(),Tl(882,"td",21)(883,"em")(884,"strong"),iN(885,"(opcional)"),sg()(),Tl(886,"p"),iN(887,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),sg()()(),Tl(888,"tr",14)(889,"td",15)(890,"div",16)(891,"span",17),iN(892," p-placeholder"),Gl(893,"br"),sg()()(),Tl(894,"td",18)(895,"code",22),iN(896,"string"),sg()(),Tl(897,"td",20),iN(898,"-"),sg(),Tl(899,"td",21)(900,"em")(901,"strong"),iN(902,"(opcional)"),sg()(),Tl(903,"p"),iN(904,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),sg()()(),Tl(905,"tr",14)(906,"td",15)(907,"div",16)(908,"span",17),iN(909," p-helper"),Gl(910,"br"),sg()()(),Tl(911,"td",18)(912,"code",29),iN(913,"PoHelperOptions "),sg(),Tl(914,"code",22),iN(915," string"),sg()(),Tl(916,"td",20),iN(917,"-"),sg(),Tl(918,"td",21)(919,"em")(920,"strong"),iN(921,"(opcional)"),sg()(),Tl(922,"p"),iN(923,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),sg(),Tl(924,"blockquote")(925,"p"),iN(926,"Para mais informa\xE7\xF5es acesse: "),Tl(927,"a",30),iN(928,"https://po-ui.io/documentation/po-helper"),sg(),iN(929,"."),sg()()()(),Tl(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),iN(934," p-readonly"),Gl(935,"br"),sg()()(),Tl(936,"td",18)(937,"code",19),iN(938,"boolean "),sg(),Tl(939,"code",22),iN(940," string"),sg()(),Tl(941,"td",20)(942,"p")(943,"code"),iN(944,"false"),sg()()(),Tl(945,"td",21)(946,"em")(947,"strong"),iN(948,"(opcional)"),sg()(),Tl(949,"p"),iN(950,"Torna o componente somente leitura."),sg()()(),Tl(951,"tr",14)(952,"td",15)(953,"div",16)(954,"span",17),iN(955," p-required"),Gl(956,"br"),sg()()(),Tl(957,"td",18)(958,"code",19),iN(959,"boolean "),sg(),Tl(960,"code",22),iN(961," string"),sg()(),Tl(962,"td",20)(963,"p")(964,"code"),iN(965,"false"),sg()()(),Tl(966,"td",21)(967,"em")(968,"strong"),iN(969,"(opcional)"),sg()(),Tl(970,"p"),iN(971,"Define que o campo ser\xE1 obrigat\xF3rio."),sg()()(),Tl(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),iN(976," p-second-interval"),Gl(977,"br"),sg()()(),Tl(978,"td",18)(979,"code",28),iN(980,"number"),sg()(),Tl(981,"td",20)(982,"p")(983,"code"),iN(984,"1"),sg()()(),Tl(985,"td",21)(986,"em")(987,"strong"),iN(988,"(opcional)"),sg()(),Tl(989,"p"),iN(990,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),Tl(991,"code"),iN(992,"p-show-seconds"),sg(),iN(993," est\xE1 ativo."),sg()()(),Tl(994,"tr",14)(995,"td",15)(996,"div",16)(997,"span",17),iN(998," p-required-field-error-message"),Gl(999,"br"),sg()()(),Tl(1e3,"td",18)(1001,"code",19),iN(1002,"boolean"),sg()(),Tl(1003,"td",20)(1004,"p")(1005,"code"),iN(1006,"false"),sg()()(),Tl(1007,"td",21)(1008,"em")(1009,"strong"),iN(1010,"(opcional)"),sg()(),Tl(1011,"p"),iN(1012,"Exibe a mensagem setada na propriedade "),Tl(1013,"code"),iN(1014,"p-error-pattern"),sg(),iN(1015," se o campo estiver vazio e for requerido."),sg(),Tl(1016,"blockquote")(1017,"p"),iN(1018,"Necess\xE1rio que a propriedade "),Tl(1019,"code"),iN(1020,"p-required"),sg(),iN(1021," esteja habilitada."),sg()()()(),Tl(1022,"tr",14)(1023,"td",15)(1024,"div",16)(1025,"span",17),iN(1026," p-show-required"),Gl(1027,"br"),sg()()(),Tl(1028,"td",18)(1029,"code",19),iN(1030,"boolean"),sg()(),Tl(1031,"td",20)(1032,"p")(1033,"code"),iN(1034,"false"),sg()()(),Tl(1035,"td",21)(1036,"em")(1037,"strong"),iN(1038,"(opcional)"),sg()(),Tl(1039,"p"),iN(1040,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),sg()()(),Tl(1041,"tr",14)(1042,"td",15)(1043,"div",16)(1044,"span",17),iN(1045," p-show-seconds"),Gl(1046,"br"),sg()()(),Tl(1047,"td",18)(1048,"code",19),iN(1049,"boolean"),sg()(),Tl(1050,"td",20)(1051,"p")(1052,"code"),iN(1053,"false"),sg()()(),Tl(1054,"td",21)(1055,"em")(1056,"strong"),iN(1057,"(opcional)"),sg()(),Tl(1058,"p"),iN(1059,"Exibe a coluna de segundos no painel de sele\xE7\xE3o do timer."),sg()()(),Tl(1060,"tr",14)(1061,"td",15)(1062,"div",16)(1063,"span",17),iN(1064," p-size"),Gl(1065,"br"),sg()()(),Tl(1066,"td",18)(1067,"code",22),iN(1068,"string"),sg()(),Tl(1069,"td",20)(1070,"p")(1071,"code"),iN(1072,"medium"),sg()()(),Tl(1073,"td",21)(1074,"em")(1075,"strong"),iN(1076,"(opcional)"),sg()(),Tl(1077,"p"),iN(1078,"Define o tamanho do componente:"),sg(),Tl(1079,"ul")(1080,"li")(1081,"code"),iN(1082,"small"),sg(),iN(1083,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),sg(),Tl(1084,"li")(1085,"code"),iN(1086,"medium"),sg(),iN(1087,": altura do input como 44px."),sg()()()(),Tl(1088,"tr",14)(1089,"td",15)(1090,"div",16)(1091,"span",17),iN(1092," p-format-time"),Gl(1093,"br"),sg()()(),Tl(1094,"td",18)(1095,"code",31),iN(1096,"PoTimerFormat"),sg()(),Tl(1097,"td",20)(1098,"p"),iN(1099,"Determinado pelo locale"),sg()(),Tl(1100,"td",21)(1101,"em")(1102,"strong"),iN(1103,"(opcional)"),sg()(),Tl(1104,"p"),iN(1105,"Define o formato de exibi\xE7\xE3o do timer."),sg(),Tl(1106,"p"),iN(1107,"Valores v\xE1lidos:"),sg(),Tl(1108,"ul")(1109,"li")(1110,"code"),iN(1111,"24"),sg(),iN(1112,": formato de 24 horas (padr\xE3o para pt, es, ru)"),sg(),Tl(1113,"li")(1114,"code"),iN(1115,"12"),sg(),iN(1116,": formato de 12 horas com indicador AM/PM (padr\xE3o para en)"),sg()(),Tl(1117,"p"),iN(1118,"Quando n\xE3o informado, o formato ser\xE1 determinado automaticamente pelo locale:"),sg(),Tl(1119,"ul")(1120,"li")(1121,"code"),iN(1122,"en"),sg(),iN(1123," \u2192 12h (AM/PM)"),sg(),Tl(1124,"li")(1125,"code"),iN(1126,"pt"),sg(),iN(1127,", "),Tl(1128,"code"),iN(1129,"es"),sg(),iN(1130,", "),Tl(1131,"code"),iN(1132,"ru"),sg(),iN(1133," \u2192 24h"),sg()()()()(),Tl(1134,"h3",10),iN(1135,"M\xE9todos"),sg(),Tl(1136,"table",32)(1137,"tr",14)(1138,"th",33)(1139,"div",16)(1140,"h4")(1141,"span",17),iN(1142," showAdditionalHelp "),sg()()()()(),Tl(1143,"tr",21)(1144,"td",21)(1145,"p"),iN(1146,"M\xE9todo que exibe "),Tl(1147,"code"),iN(1148,"p-helper"),sg(),iN(1149," ou executa a a\xE7\xE3o definida em "),Tl(1150,"code"),iN(1151,"p-helper{eventOnClick}"),sg(),iN(1152,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1153,"code"),iN(1154,"p-keydown"),sg(),iN(1155,"."),sg(),Tl(1156,"blockquote")(1157,"p"),iN(1158,"Exibe ou oculta o conte\xFAdo do componente "),Tl(1159,"code"),iN(1160,"po-helper"),sg(),iN(1161," quando o componente estiver com foco."),sg()(),Tl(1162,"pre")(1163,"code"),iN(1164,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),sg()(),Tl(1165,"pre")(1166,"code"),iN(1167,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),sg()()()()(),Gl(1168,"br"),sg());},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var Ce=(()=>{class l{route;router;sub;hidePoWebSample=true;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r;}goBack(){this.router.navigate(["documentation"]);}improveDocs(){this.router.navigate(["guides/development-flow"]);}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0;});}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p;}ngOnDestroy(){this.sub.unsubscribe();}static \u0275fac=function(r){return new(r||l)(w(Xn),w(wn))};static \u0275cmp=Un({type:l,selectors:[["ng-component"]],standalone:false,decls:9,vars:4,consts:[["p-title","Datetimepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(Tl(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),ht$1("p-click",function(){return i.changeTab("doc")}),Gl(3,"sample-po-datetimepicker-doc"),sg(),Tl(4,"po-tab",3),ht$1("p-click",function(){return i.changeTab("web")}),Gl(5,"sample-po-datetimepicker-basic-view")(6,"sample-po-datetimepicker-labs-view")(7,"sample-po-datetimepicker-12h-seconds-view")(8,"sample-po-datetimepicker-scheduling-view"),sg()()()),r&2&&(nw("p-actions",i.actions),Vp(2),nw("p-active",i.activeTab==="doc"),Vp(2),nw("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"));},dependencies:[lNe,Wme,jme,ce,Se,Ee,fe,xe],encapsulation:2,changeDetection:1})}return l})();var Fe=[{path:"",component:Ce}],ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[DL.forChild(Fe),DL]})}return l})();var ht=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=fe$1({type:l});static \u0275inj=ue({imports:[ar,ve]})}return l})();export{ht as DocPoDatetimepickerModule};