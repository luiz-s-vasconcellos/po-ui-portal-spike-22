import{Br as RE,Di as he$1,Dt as aae,Hn as AN,Kn as BP,Li as kL,M as Ete,Qi as pt,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,U as Jne,Ui as m0,Un as Ac,Vt as gie,Wi as mg,Wt as ioe,Xn as C9,Yn as Bx,ai as aN,b as Au,dr as Hp,dt as Tte,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,i as _a,ii as Zx,ki as ho,la as ug,li as cE,lr as Hn,mn as t4,nn as ob,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,tr as DN,un as roe,v as $y,vi as f,vr as Jv,wt as _4,xi as fo}from"./main-TFA52GHY.js";var se=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-timepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`timepicker`,`p-label`,`PO Timepicker`]],template:function(r,i){r&1&&Kc(0,`po-timepicker`,0)},dependencies:[gie],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l});var ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-timepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Timepicker Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-timepicker-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Te,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,se],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:`HourMinute`,value:$y.HourMinute},{label:`HourMinuteSecond`,value:$y.HourMinuteSecond}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`},{value:`appendInBody`,label:`Append In Body`}];formatOptions=[{label:`24`,value:`24`},{label:`12`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-timepicker-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`timepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-format`,`p-helper`,`p-help`,`p-model-format`,`p-label`,`p-locale`,`p-max-time`,`p-min-time`,`p-minute-interval`,`p-second-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-show-seconds`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-append-in-body`,`p-error-limit`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helper`,`p-clean`,``,`p-label`,`Helper`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`format`,`p-columns`,`4`,`p-label`,`Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`modelFormat`,`p-columns`,`4`,`p-label`,`Model Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Bx();Ac(0,`po-timepicker`,1),RE(`ngModelChange`,function(o){return Jv(s),DN(i.timepicker,o)||(i.timepicker=o),e_(o)}),pt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3)(4,`po-info`,4),ug(),Kc(5,`po-divider`),Ac(6,`form`,null,0)(8,`po-input`,5),RE(`ngModelChange`,function(o){return Jv(s),DN(i.label,o)||(i.label=o),e_(o)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(o){return Jv(s),DN(i.help,o)||(i.help=o),e_(o)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(o){return Jv(s),DN(i.helper,o)||(i.helper=o),e_(o)}),ug(),p0(),Ac(11,`po-input`,8),RE(`ngModelChange`,function(o){return Jv(s),DN(i.placeholder,o)||(i.placeholder=o),e_(o)}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(o){return Jv(s),DN(i.errorPattern,o)||(i.errorPattern=o),e_(o)}),ug(),p0(),Ac(13,`po-timepicker`,10),RE(`ngModelChange`,function(o){return Jv(s),DN(i.minTime,o)||(i.minTime=o),e_(o)}),ug(),p0(),Ac(14,`po-timepicker`,11),RE(`ngModelChange`,function(o){return Jv(s),DN(i.maxTime,o)||(i.maxTime=o),e_(o)}),ug(),p0(),Ac(15,`po-number`,12),RE(`ngModelChange`,function(o){return Jv(s),DN(i.minuteInterval,o)||(i.minuteInterval=o),e_(o)}),ug(),p0(),Ac(16,`po-number`,13),RE(`ngModelChange`,function(o){return Jv(s),DN(i.secondInterval,o)||(i.secondInterval=o),e_(o)}),ug(),p0(),Ac(17,`po-checkbox-group`,14),RE(`ngModelChange`,function(o){return Jv(s),DN(i.properties,o)||(i.properties=o),e_(o)}),ug(),p0(),Ac(18,`po-radio-group`,15),RE(`ngModelChange`,function(o){return Jv(s),DN(i.locale,o)||(i.locale=o),e_(o)}),ug(),p0(),Ac(19,`po-radio-group`,16),RE(`ngModelChange`,function(o){return Jv(s),DN(i.format,o)||(i.format=o),e_(o)}),ug(),p0(),Ac(20,`po-radio-group`,17),RE(`ngModelChange`,function(o){return Jv(s),DN(i.modelFormat,o)||(i.modelFormat=o),e_(o)}),ug(),p0(),Ac(21,`po-radio-group`,18),RE(`ngModelChange`,function(o){return Jv(s),DN(i.size,o)||(i.size=o),e_(o)}),ug(),p0(),Ac(22,`div`,2)(23,`po-button`,19),pt(`p-click`,function(){return i.restore()}),ug()()()}r&2&&(TE(`ngModel`,i.timepicker),cE(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-format`,i.format)(`p-helper`,i.helper)(`p-help`,i.help)(`p-model-format`,i.modelFormat)(`p-label`,i.label)(`p-locale`,i.locale)(`p-max-time`,i.maxTime)(`p-min-time`,i.minTime)(`p-minute-interval`,i.minuteInterval)(`p-second-interval`,i.secondInterval)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-seconds`,i.properties.includes(`showSeconds`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-append-in-body`,i.properties?.includes(`appendInBody`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-size`,i.size),m0(),Hp(3),cE(`p-value`,i.timepicker),Hp(),cE(`p-value`,i.event),Hp(4),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.helper),m0(),Hp(),TE(`ngModel`,i.placeholder),m0(),Hp(),TE(`ngModel`,i.errorPattern),m0(),Hp(),TE(`ngModel`,i.minTime),m0(),Hp(),TE(`ngModel`,i.maxTime),m0(),Hp(),TE(`ngModel`,i.minuteInterval),m0(),Hp(),TE(`ngModel`,i.secondInterval),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.locale),cE(`p-options`,i.localeOptions),m0(),Hp(),TE(`ngModel`,i.format),cE(`p-options`,i.formatOptions),m0(),Hp(),TE(`ngModel`,i.modelFormat),cE(`p-options`,i.modelFormatOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,ob,t4,_4,Jne,Cte,gie,roe],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-timepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Timepicker Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-timepicker
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
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-show-seconds]="properties.includes('showSeconds')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-append-in-body]="properties?.includes('appendInBody')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-timepicker-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,_e,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ge],encapsulation:2,changeDetection:1})}return l})();var Pe=[`formScheduling`];var Se=(()=>{class l{poDialog=f(Ete);poNotification=f(Au);formScheduling;title=``;date=new Date;startTime=``;endTime=``;room=``;roomOptions=[{value:`sala-a`,label:`Sala A`},{value:`sala-b`,label:`Sala B`},{value:`sala-c`,label:`Sala C`},{value:`auditorio`,label:`Auditório`}];schedule(){let d=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:d,confirm:()=>{this.poNotification.success(`Agendamento confirmado com sucesso!`),this.formScheduling.reset({date:``,room:``})},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getFormatedDate(d){return d&&d.slice(0,10)}getRoomLabel(){let d=this.roomOptions.find(r=>r.value===this.room);return d?d.label:this.room}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-timepicker-scheduling`]],viewQuery:function(r,i){if(r&1&&Xc(Pe,7),r&2){let s;fo(s=ho())&&(i.formScheduling=s.first)}},standalone:!1,decls:11,vars:9,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`title`,`p-label`,`Título do agendamento`,`p-placeholder`,`Ex: Reunião de planejamento`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`date`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Data`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`startTime`,`p-label`,`Horário de início`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`endTime`,`p-label`,`Horário de término`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`room`,`p-label`,`Sala`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`scheduleButton`,`p-label`,`Agendar`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=Bx();Ac(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),RE(`ngModelChange`,function(o){return Jv(s),DN(i.title,o)||(i.title=o),e_(o)}),ug(),p0(),Ac(4,`po-datepicker`,3),RE(`ngModelChange`,function(o){return Jv(s),DN(i.date,o)||(i.date=o),e_(o)}),ug(),p0(),ug(),Ac(5,`div`,1)(6,`po-timepicker`,4),RE(`ngModelChange`,function(o){return Jv(s),DN(i.startTime,o)||(i.startTime=o),e_(o)}),ug(),p0(),Ac(7,`po-timepicker`,5),RE(`ngModelChange`,function(o){return Jv(s),DN(i.endTime,o)||(i.endTime=o),e_(o)}),ug(),p0(),Ac(8,`po-select`,6),RE(`ngModelChange`,function(o){return Jv(s),DN(i.room,o)||(i.room=o),e_(o)}),ug(),p0(),ug(),Ac(9,`div`,1)(10,`po-button`,7),pt(`p-click`,function(){return i.schedule()}),ug()()()}if(r&2){let s=Zx(1);Hp(3),TE(`ngModel`,i.title),m0(),Hp(),TE(`ngModel`,i.date),m0(),Hp(2),TE(`ngModel`,i.startTime),cE(`p-show-required`,!0),m0(),Hp(),TE(`ngModel`,i.endTime),cE(`p-show-required`,!0),m0(),Hp(),TE(`ngModel`,i.room),cE(`p-options`,i.roomOptions),m0(),Hp(2),cE(`p-disabled`,s.invalid)}},dependencies:[b9,D9,C9,BP,LP,ni,Tte,_4,ioe,gie],encapsulation:2,changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l});var Ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-timepicker-scheduling-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Timepicker - Scheduling`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form #formScheduling="ngForm">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-timepicker-scheduling`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,He,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Se],encapsulation:2,changeDetection:1})}return l})();var be=(()=>{class l{poNotification=f(Au);openTime=`08:00`;closeTime=`18:00`;lunchStart=`12:00`;lunchEnd=`13:00`;save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-timepicker-business-hours`]],standalone:!1,decls:8,vars:14,consts:[[1,`po-row`],[`name`,`openTime`,`p-label`,`Abertura`,`p-clean`,``,`p-min-time`,`06:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-time`,`p-minute-interval`],[`name`,`closeTime`,`p-label`,`Fechamento`,`p-clean`,``,`p-max-time`,`23:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-minute-interval`],[`name`,`lunchStart`,`p-label`,`Início do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`name`,`lunchEnd`,`p-label`,`Fim do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`p-label`,`Salvar`,`p-kind`,`primary`,1,`po-md-3`,`po-offset-md-9`,3,`p-click`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`po-timepicker`,1),RE(`ngModelChange`,function(p){return DN(i.openTime,p)||(i.openTime=p),p}),ug(),p0(),Ac(2,`po-timepicker`,2),RE(`ngModelChange`,function(p){return DN(i.closeTime,p)||(i.closeTime=p),p}),ug(),p0(),ug(),Ac(3,`div`,0)(4,`po-timepicker`,3),RE(`ngModelChange`,function(p){return DN(i.lunchStart,p)||(i.lunchStart=p),p}),ug(),p0(),Ac(5,`po-timepicker`,4),RE(`ngModelChange`,function(p){return DN(i.lunchEnd,p)||(i.lunchEnd=p),p}),ug(),p0(),ug(),Ac(6,`div`,0)(7,`po-button`,5),pt(`p-click`,function(){return i.save()}),ug()()),r&2&&(Hp(),TE(`ngModel`,i.openTime),cE(`p-max-time`,i.lunchStart)(`p-minute-interval`,30),m0(),Hp(),TE(`ngModel`,i.closeTime),cE(`p-min-time`,i.lunchEnd)(`p-minute-interval`,30),m0(),Hp(2),TE(`ngModel`,i.lunchStart),cE(`p-min-time`,i.openTime)(`p-max-time`,i.lunchEnd)(`p-minute-interval`,15),m0(),Hp(),TE(`ngModel`,i.lunchEnd),cE(`p-min-time`,i.lunchStart)(`p-max-time`,i.closeTime)(`p-minute-interval`,15),m0())},dependencies:[D9,BP,ni,gie],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l});var fe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-timepicker-business-hours-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Timepicker - Business Hours`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-timepicker-business-hours`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Be,i.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,be],encapsulation:2,changeDetection:1})}return l})();var ve=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-timepicker-doc`]],standalone:!1,decls:1039,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoTimepickerComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`O `),Ac(24,`code`),vN(25,`po-timepicker`),ug(),vN(26,` é um componente para seleção de horário que permite a digitação e/ou seleção via painel flutuante.`),ug(),Ac(27,`p`),vN(28,`O formato de exibição do horário pode ser de 24 horas (`),Ac(29,`code`),vN(30,`HH:mm`),ug(),vN(31,`) ou 12 horas (`),Ac(32,`code`),vN(33,`hh:mm AM/PM`),ug(),vN(34,`),
e opcionalmente incluir segundos (`),Ac(35,`code`),vN(36,`HH:mm:ss`),ug(),vN(37,`).`),ug(),Ac(38,`p`),vN(39,`O valor de saída segue o formato ISO 8601 para horários (`),Ac(40,`code`),vN(41,`HH:mm`),ug(),vN(42,` ou `),Ac(43,`code`),vN(44,`HH:mm:ss`),ug(),vN(45,`).`),ug(),Ac(46,`p`)(47,`strong`),vN(48,`Importante:`),ug()(),Ac(49,`ul`)(50,`li`),vN(51,`Caso o valor digitado seja inválido, o `),Ac(52,`code`),vN(53,`model`),ug(),vN(54,` receberá uma string vazia.`),ug(),Ac(55,`li`),vN(56,`Caso o `),Ac(57,`code`),vN(58,`input`),ug(),vN(59,` esteja passando um `),Ac(60,`code`),vN(61,`[(ngModel)]`),ug(),vN(62,`, mas não tenha um `),Ac(63,`code`),vN(64,`name`),ug(),vN(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Ac(66,`code`),vN(67,`[ngModelOptions]="{standalone: true}"`),ug(),vN(68,`).`),ug()(),Ac(69,`blockquote`)(70,`p`),vN(71,`Não esqueça de importar o `),Ac(72,`code`),vN(73,`FormsModule`),ug(),vN(74,` em seu módulo, tal como para utilizar o `),Ac(75,`code`),vN(76,`input default`),ug(),vN(77,`.`),ug()(),Ac(78,`h4`),vN(79,`Tokens customizáveis`),ug(),Ac(80,`p`),vN(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ac(82,`code`),vN(83,`.po-input`),ug()(),Ac(84,`blockquote`)(85,`p`),vN(86,`Para maiores informações, acesse o guia `),Ac(87,`a`,6),vN(88,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(89,`.`),ug()(),Ac(90,`table`)(91,`thead`)(92,`tr`)(93,`th`),vN(94,`Propriedade`),ug(),Ac(95,`th`),vN(96,`Descrição`),ug(),Ac(97,`th`),vN(98,`Valor Padrão`),ug()()(),Ac(99,`tbody`)(100,`tr`)(101,`td`)(102,`strong`),vN(103,`Default Values`),ug()(),Kc(104,`td`)(105,`td`),ug(),Ac(106,`tr`)(107,`td`)(108,`code`),vN(109,`--font-family`),ug()(),Ac(110,`td`),vN(111,`Família tipográfica usada`),ug(),Ac(112,`td`)(113,`code`),vN(114,`var(--font-family-theme)`),ug()()(),Ac(115,`tr`)(116,`td`)(117,`code`),vN(118,`--font-size`),ug()(),Ac(119,`td`),vN(120,`Tamanho da fonte`),ug(),Ac(121,`td`)(122,`code`),vN(123,`var(--font-size-default)`),ug()()(),Ac(124,`tr`)(125,`td`)(126,`code`),vN(127,`--text-color-placeholder`),ug()(),Ac(128,`td`),vN(129,`Cor do texto placeholder`),ug(),Ac(130,`td`)(131,`code`),vN(132,`var(--color-neutral-light-30)`),ug()()(),Ac(133,`tr`)(134,`td`)(135,`code`),vN(136,`--color`),ug()(),Ac(137,`td`),vN(138,`Cor principal do timepicker`),ug(),Ac(139,`td`)(140,`code`),vN(141,`var(--color-neutral-dark-70)`),ug()()(),Ac(142,`tr`)(143,`td`)(144,`code`),vN(145,`--background`),ug()(),Ac(146,`td`),vN(147,`Cor de background`),ug(),Ac(148,`td`)(149,`code`),vN(150,`var(--color-neutral-light-05)`),ug()()(),Ac(151,`tr`)(152,`td`)(153,`code`),vN(154,`--padding`),ug()(),Ac(155,`td`),vN(156,`Preenchimento`),ug(),Ac(157,`td`)(158,`code`),vN(159,`0 0.5rem`),ug()()(),Ac(160,`tr`)(161,`td`)(162,`code`),vN(163,`--text-color`),ug()(),Ac(164,`td`),vN(165,`Cor do texto`),ug(),Ac(166,`td`)(167,`code`),vN(168,`var(--color-neutral-dark-90)`),ug()()(),Ac(169,`tr`)(170,`td`)(171,`code`),vN(172,`--field-container-title-justify`),ug()(),Ac(173,`td`),vN(174,`Alinhamento horizontal do título (`),Ac(175,`code`),vN(176,`justify-content`),ug(),vN(177,`)`),ug(),Ac(178,`td`)(179,`code`),vN(180,`space-between`),ug()()(),Ac(181,`tr`)(182,`td`)(183,`code`),vN(184,`--field-container-title-flex`),ug()(),Ac(185,`td`),vN(186,`Flex do título (`),Ac(187,`code`),vN(188,`flex`),ug(),vN(189,`)`),ug(),Ac(190,`td`)(191,`code`),vN(192,`1 auto`),ug()()(),Ac(193,`tr`)(194,`td`)(195,`strong`),vN(196,`Hover`),ug()(),Kc(197,`td`)(198,`td`),ug(),Ac(199,`tr`)(200,`td`)(201,`code`),vN(202,`--color-hover`),ug()(),Ac(203,`td`),vN(204,`Cor principal no estado hover`),ug(),Ac(205,`td`)(206,`code`),vN(207,`var(--color-brand-01-dark)`),ug()()(),Ac(208,`tr`)(209,`td`)(210,`code`),vN(211,`--background-hover`),ug()(),Ac(212,`td`),vN(213,`Cor de background no estado hover`),ug(),Ac(214,`td`)(215,`code`),vN(216,`var(--color-brand-01-lightest)`),ug()()(),Ac(217,`tr`)(218,`td`)(219,`strong`),vN(220,`Focused`),ug()(),Kc(221,`td`)(222,`td`),ug(),Ac(223,`tr`)(224,`td`)(225,`code`),vN(226,`--color-focused`),ug()(),Ac(227,`td`),vN(228,`Cor principal no estado de focus`),ug(),Ac(229,`td`)(230,`code`),vN(231,`var(--color-action-default)`),ug()()(),Ac(232,`tr`)(233,`td`)(234,`code`),vN(235,`--outline-color-focused`),ug()(),Ac(236,`td`),vN(237,`Cor do outline do estado de focus`),ug(),Ac(238,`td`)(239,`code`),vN(240,`var(--color-action-focus)`),ug()()(),Ac(241,`tr`)(242,`td`)(243,`strong`),vN(244,`Disabled`),ug()(),Kc(245,`td`)(246,`td`),ug(),Ac(247,`tr`)(248,`td`)(249,`code`),vN(250,`--color-disabled`),ug()(),Ac(251,`td`),vN(252,`Cor principal no estado disabled`),ug(),Ac(253,`td`)(254,`code`),vN(255,`var(--color-neutral-light-30)`),ug()()(),Ac(256,`tr`)(257,`td`)(258,`code`),vN(259,`--background-disabled`),ug()(),Ac(260,`td`),vN(261,`Cor de background no estado disabled`),ug(),Ac(262,`td`)(263,`code`),vN(264,`var(--color-neutral-light-20)`),ug()()(),Ac(265,`tr`)(266,`td`)(267,`code`),vN(268,`--text-color-disabled`),ug()(),Ac(269,`td`),vN(270,`Cor do texto no estado disabled`),ug(),Ac(271,`td`)(272,`code`),vN(273,`var(--color-neutral-dark-70)`),ug()()()()()(),Ac(274,`div`,7)(275,`h4`,8),vN(276,`Seletor`),ug(),Ac(277,`pre`,9),vN(278,`<po-timepicker
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change-model)="EventEmitter"
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
`),ug()(),Ac(279,`h4`,10),vN(280,`Propriedades`),ug(),Ac(281,`table`,11)(282,`tr`,12)(283,`th`,13),vN(284,`Nome`),ug(),Ac(285,`th`,13),vN(286,`Tipo`),ug(),Ac(287,`th`,13),vN(288,`Padrão`),ug(),Ac(289,`th`,13),vN(290,`Descrição`),ug()(),Ac(291,`tr`,14)(292,`td`,15)(293,`div`,16)(294,`span`,17),vN(295,` p-append-in-body`),Kc(296,`br`),ug()()(),Ac(297,`td`,18)(298,`code`,19),vN(299,`boolean`),ug()(),Ac(300,`td`,20)(301,`p`)(302,`code`),vN(303,`false`),ug()()(),Ac(304,`td`,21)(305,`em`)(306,`strong`),vN(307,`(opcional)`),ug()(),Ac(308,`p`),vN(309,`Define que o painel do timer será incluído no body da página.`),ug()()(),Ac(310,`tr`,14)(311,`td`,15)(312,`div`,16)(313,`span`,17),vN(314,` p-auto-focus`),Kc(315,`br`),ug()()(),Ac(316,`td`,18)(317,`code`,19),vN(318,`boolean`),ug()(),Ac(319,`td`,20)(320,`p`)(321,`code`),vN(322,`false`),ug()()(),Ac(323,`td`,21)(324,`em`)(325,`strong`),vN(326,`(opcional)`),ug()(),Ac(327,`p`),vN(328,`Aplica foco no elemento ao ser iniciado.`),ug()()(),Ac(329,`tr`,14)(330,`td`,15)(331,`div`,22)(332,`span`,23),vN(333,` (p-change-model)`),Kc(334,`br`),ug()()(),Ac(335,`td`,18)(336,`code`,24),vN(337,`EventEmitter`),ug()(),Ac(338,`td`,20),vN(339,`-`),ug(),Ac(340,`td`,21)(341,`em`)(342,`strong`),vN(343,`(opcional)`),ug()(),Ac(344,`p`),vN(345,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(346,`code`),vN(347,`setValue`),ug(),vN(348,`, `),Ac(349,`code`),vN(350,`patchValue`),ug(),vN(351,`, carregamento assíncrono).`),ug(),Ac(352,`p`),vN(353,`Diferentemente do `),Ac(354,`code`),vN(355,`p-change`),ug(),vN(356,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(357,`code`),vN(358,`p-change-model`),ug(),vN(359,` cobre todos os cenários de alteração de valor.`),ug(),Ac(360,`p`),vN(361,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(362,`tr`,14)(363,`td`,15)(364,`div`,16)(365,`span`,17),vN(366,`p-clean`),Kc(367,`br`),ug()()(),Ac(368,`td`,18)(369,`code`,19),vN(370,`boolean`),ug()(),Ac(371,`td`,20),vN(372,`-`),ug(),Ac(373,`td`,21)(374,`em`)(375,`strong`),vN(376,`(opcional)`),ug()(),Ac(377,`p`),vN(378,`Habilita ação para limpar o campo.`),ug()()(),Ac(379,`tr`,14)(380,`td`,15)(381,`div`,16)(382,`span`,17),vN(383,` p-compact-label`),Kc(384,`br`),ug()()(),Ac(385,`td`,18)(386,`code`,19),vN(387,`boolean`),ug()(),Ac(388,`td`,20)(389,`p`)(390,`code`),vN(391,`false`),ug()()(),Ac(392,`td`,21)(393,`em`)(394,`strong`),vN(395,`(opcional)`),ug()(),Ac(396,`p`),vN(397,`Define se o título do campo será exibido de forma compacta.`),ug()()(),Ac(398,`tr`,14)(399,`td`,15)(400,`div`,16)(401,`span`,17),vN(402,`p-disabled`),Kc(403,`br`),ug()()(),Ac(404,`td`,18)(405,`code`,19),vN(406,`boolean`),ug()(),Ac(407,`td`,20),vN(408,`-`),ug(),Ac(409,`td`,21)(410,`em`)(411,`strong`),vN(412,`(opcional)`),ug()(),Ac(413,`p`),vN(414,`Desabilita o campo.`),ug()()(),Ac(415,`tr`,14)(416,`td`,15)(417,`div`,16)(418,`span`,17),vN(419,` p-error-limit`),Kc(420,`br`),ug()()(),Ac(421,`td`,18)(422,`code`,19),vN(423,`boolean`),ug()(),Ac(424,`td`,20)(425,`p`)(426,`code`),vN(427,`false`),ug()()(),Ac(428,`td`,21)(429,`em`)(430,`strong`),vN(431,`(opcional)`),ug()(),Ac(432,`p`),vN(433,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug()()(),Ac(434,`tr`,14)(435,`td`,15)(436,`div`,16)(437,`span`,17),vN(438,` p-error-pattern`),Kc(439,`br`),ug()()(),Ac(440,`td`,18)(441,`code`,25),vN(442,`string`),ug()(),Ac(443,`td`,20),vN(444,`-`),ug(),Ac(445,`td`,21)(446,`em`)(447,`strong`),vN(448,`(opcional)`),ug()(),Ac(449,`p`),vN(450,`Mensagem apresentada quando o horário for inválido ou fora do período.`),ug(),Ac(451,`blockquote`)(452,`p`),vN(453,`Por padrão, esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja requerido.`),ug()()()(),Ac(454,`tr`,14)(455,`td`,15)(456,`div`,16)(457,`span`,17),vN(458,` p-format`),Kc(459,`br`),ug()()(),Ac(460,`td`,18)(461,`code`,26),vN(462,`PoTimerFormat`),ug()(),Ac(463,`td`,20)(464,`p`)(465,`code`),vN(466,`24`),ug()()(),Ac(467,`td`,21)(468,`em`)(469,`strong`),vN(470,`(opcional)`),ug()(),Ac(471,`p`),vN(472,`Define o formato de exibição do timer.`),ug(),Ac(473,`p`),vN(474,`Valores válidos:`),ug(),Ac(475,`ul`)(476,`li`)(477,`code`),vN(478,`24`),ug(),vN(479,`: formato de 24 horas (padrão)`),ug(),Ac(480,`li`)(481,`code`),vN(482,`12`),ug(),vN(483,`: formato de 12 horas com indicador AM/PM`),ug()()()(),Ac(484,`tr`,14)(485,`td`,15)(486,`div`,16)(487,`span`,17),vN(488,` p-help`),Kc(489,`br`),ug()()(),Ac(490,`td`,18)(491,`code`,25),vN(492,`string`),ug()(),Ac(493,`td`,20),vN(494,`-`),ug(),Ac(495,`td`,21)(496,`em`)(497,`strong`),vN(498,`(opcional)`),ug()(),Ac(499,`p`),vN(500,`Texto de apoio do campo.`),ug()()(),Ac(501,`tr`,14)(502,`td`,15)(503,`div`,22)(504,`span`,23),vN(505,` (p-keydown)`),Kc(506,`br`),ug()()(),Ac(507,`td`,18)(508,`code`,24),vN(509,`EventEmitter`),ug()(),Ac(510,`td`,20),vN(511,`-`),ug(),Ac(512,`td`,21)(513,`p`),vN(514,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),ug()()(),Ac(515,`tr`,14)(516,`td`,15)(517,`div`,16)(518,`span`,17),vN(519,` p-label`),Kc(520,`br`),ug()()(),Ac(521,`td`,18)(522,`code`,25),vN(523,`string`),ug()(),Ac(524,`td`,20),vN(525,`-`),ug(),Ac(526,`td`,21)(527,`em`)(528,`strong`),vN(529,`(opcional)`),ug()(),Ac(530,`p`),vN(531,`Rótulo do campo.`),ug()()(),Ac(532,`tr`,14)(533,`td`,15)(534,`div`,16)(535,`span`,17),vN(536,` p-label-text-wrap`),Kc(537,`br`),ug()()(),Ac(538,`td`,18)(539,`code`,19),vN(540,`boolean`),ug()(),Ac(541,`td`,20)(542,`p`)(543,`code`),vN(544,`false`),ug()()(),Ac(545,`td`,21)(546,`em`)(547,`strong`),vN(548,`(opcional)`),ug()(),Ac(549,`p`),vN(550,`Habilita a quebra automática do texto da propriedade `),Ac(551,`code`),vN(552,`p-label`),ug(),vN(553,`.`),ug()()(),Ac(554,`tr`,14)(555,`td`,15)(556,`div`,16)(557,`span`,17),vN(558,` p-loading`),Kc(559,`br`),ug()()(),Ac(560,`td`,18)(561,`code`,19),vN(562,`boolean`),ug()(),Ac(563,`td`,20)(564,`p`)(565,`code`),vN(566,`false`),ug()()(),Ac(567,`td`,21)(568,`em`)(569,`strong`),vN(570,`(opcional)`),ug()(),Ac(571,`p`),vN(572,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug()()(),Ac(573,`tr`,14)(574,`td`,15)(575,`div`,16)(576,`span`,17),vN(577,` p-locale`),Kc(578,`br`),ug()()(),Ac(579,`td`,18)(580,`code`,25),vN(581,`string`),ug()(),Ac(582,`td`,20),vN(583,`-`),ug(),Ac(584,`td`,21)(585,`em`)(586,`strong`),vN(587,`(opcional)`),ug()(),Ac(588,`p`),vN(589,`Idioma do componente.`),ug()()(),Ac(590,`tr`,14)(591,`td`,15)(592,`div`,16)(593,`span`,17),vN(594,` p-max-time`),Kc(595,`br`),ug()()(),Ac(596,`td`,18)(597,`code`,25),vN(598,`string`),ug()(),Ac(599,`td`,20),vN(600,`-`),ug(),Ac(601,`td`,21)(602,`em`)(603,`strong`),vN(604,`(opcional)`),ug()(),Ac(605,`p`),vN(606,`Define o horário máximo permitido. Formato: `),Ac(607,`code`),vN(608,`HH:mm`),ug(),vN(609,` ou `),Ac(610,`code`),vN(611,`HH:mm:ss`),ug(),vN(612,`.`),ug()()(),Ac(613,`tr`,14)(614,`td`,15)(615,`div`,16)(616,`span`,17),vN(617,` p-min-time`),Kc(618,`br`),ug()()(),Ac(619,`td`,18)(620,`code`,25),vN(621,`string`),ug()(),Ac(622,`td`,20),vN(623,`-`),ug(),Ac(624,`td`,21)(625,`em`)(626,`strong`),vN(627,`(opcional)`),ug()(),Ac(628,`p`),vN(629,`Define o horário mínimo permitido. Formato: `),Ac(630,`code`),vN(631,`HH:mm`),ug(),vN(632,` ou `),Ac(633,`code`),vN(634,`HH:mm:ss`),ug(),vN(635,`.`),ug()()(),Ac(636,`tr`,14)(637,`td`,15)(638,`div`,16)(639,`span`,17),vN(640,` p-minute-interval`),Kc(641,`br`),ug()()(),Ac(642,`td`,18)(643,`code`,27),vN(644,`number`),ug()(),Ac(645,`td`,20)(646,`p`)(647,`code`),vN(648,`5`),ug()()(),Ac(649,`td`,21)(650,`em`)(651,`strong`),vN(652,`(opcional)`),ug()(),Ac(653,`p`),vN(654,`Define o intervalo entre os minutos exibidos no painel.`),ug()()(),Ac(655,`tr`,14)(656,`td`,15)(657,`div`,16)(658,`span`,17),vN(659,` p-model-format`),Kc(660,`br`),ug()()(),Ac(661,`td`,18)(662,`code`,28),vN(663,`PoTimepickerModelFormat`),ug()(),Ac(664,`td`,20),vN(665,`-`),ug(),Ac(666,`td`,21)(667,`em`)(668,`strong`),vN(669,`(opcional)`),ug()(),Ac(670,`p`),vN(671,`Padrão de formatação para saída do `),Ac(672,`em`),vN(673,`model`),ug(),vN(674,`.`),ug(),Ac(675,`blockquote`)(676,`p`),vN(677,`Veja os valores válidos no `),Ac(678,`em`),vN(679,`enum`),ug(),Ac(680,`code`),vN(681,`PoTimepickerModelFormat`),ug(),vN(682,`.`),ug()()()(),Ac(683,`tr`,14)(684,`td`,15)(685,`div`,16)(686,`span`,17),vN(687,` name`),Kc(688,`br`),ug()()(),Ac(689,`td`,18)(690,`code`,25),vN(691,`string`),ug()(),Ac(692,`td`,20),vN(693,`-`),ug(),Ac(694,`td`,21)(695,`p`),vN(696,`Nome do componente.`),ug()()(),Ac(697,`tr`,14)(698,`td`,15)(699,`div`,16)(700,`span`,17),vN(701,` p-no-autocomplete`),Kc(702,`br`),ug()()(),Ac(703,`td`,18)(704,`code`,19),vN(705,`boolean`),ug()(),Ac(706,`td`,20)(707,`p`)(708,`code`),vN(709,`false`),ug()()(),Ac(710,`td`,21)(711,`em`)(712,`strong`),vN(713,`(opcional)`),ug()(),Ac(714,`p`),vN(715,`Define a propriedade nativa `),Ac(716,`code`),vN(717,`autocomplete`),ug(),vN(718,` do campo como `),Ac(719,`code`),vN(720,`off`),ug(),vN(721,`.`),ug()()(),Ac(722,`tr`,14)(723,`td`,15)(724,`div`,22)(725,`span`,23),vN(726,` (p-blur)`),Kc(727,`br`),ug()()(),Ac(728,`td`,18)(729,`code`,24),vN(730,`EventEmitter`),ug()(),Ac(731,`td`,20),vN(732,`-`),ug(),Ac(733,`td`,21)(734,`p`),vN(735,`Evento disparado ao sair do campo.`),ug()()(),Ac(736,`tr`,14)(737,`td`,15)(738,`div`,22)(739,`span`,23),vN(740,` (p-change)`),Kc(741,`br`),ug()()(),Ac(742,`td`,18)(743,`code`,24),vN(744,`EventEmitter`),ug()(),Ac(745,`td`,20),vN(746,`-`),ug(),Ac(747,`td`,21)(748,`p`),vN(749,`Evento disparado ao alterar valor do campo.`),ug()()(),Ac(750,`tr`,14)(751,`td`,15)(752,`div`,16)(753,`span`,17),vN(754,` p-optional`),Kc(755,`br`),ug()()(),Ac(756,`td`,18)(757,`code`,19),vN(758,`boolean`),ug()(),Ac(759,`td`,20)(760,`p`)(761,`code`),vN(762,`false`),ug()()(),Ac(763,`td`,21)(764,`em`)(765,`strong`),vN(766,`(opcional)`),ug()(),Ac(767,`p`),vN(768,`Define se a indicação de campo opcional será exibida.`),ug()()(),Ac(769,`tr`,14)(770,`td`,15)(771,`div`,16)(772,`span`,17),vN(773,` p-placeholder`),Kc(774,`br`),ug()()(),Ac(775,`td`,18)(776,`code`,25),vN(777,`string`),ug()(),Ac(778,`td`,20),vN(779,`-`),ug(),Ac(780,`td`,21)(781,`em`)(782,`strong`),vN(783,`(opcional)`),ug()(),Ac(784,`p`),vN(785,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ug(),Ac(786,`p`),vN(787,`Para personalizar os segmentos, informe o valor no formato `),Ac(788,`code`),vN(789,`HH:mm`),ug(),vN(790,` ou `),Ac(791,`code`),vN(792,`HH:mm:ss`),ug(),vN(793,`.`),ug()()(),Ac(794,`tr`,14)(795,`td`,15)(796,`div`,16)(797,`span`,17),vN(798,` p-helper`),Kc(799,`br`),ug()()(),Ac(800,`td`,18)(801,`code`,29),vN(802,`PoHelperOptions `),ug(),Ac(803,`code`,25),vN(804,` string`),ug()(),Ac(805,`td`,20),vN(806,`-`),ug(),Ac(807,`td`,21)(808,`em`)(809,`strong`),vN(810,`(opcional)`),ug()(),Ac(811,`p`),vN(812,`Define as opções do componente de ajuda (po-helper).`),ug()()(),Ac(813,`tr`,14)(814,`td`,15)(815,`div`,16)(816,`span`,17),vN(817,`p-readonly`),Kc(818,`br`),ug()()(),Ac(819,`td`,18)(820,`code`,19),vN(821,`boolean`),ug()(),Ac(822,`td`,20),vN(823,`-`),ug(),Ac(824,`td`,21)(825,`em`)(826,`strong`),vN(827,`(opcional)`),ug()(),Ac(828,`p`),vN(829,`Torna o elemento somente leitura.`),ug()()(),Ac(830,`tr`,14)(831,`td`,15)(832,`div`,16)(833,`span`,17),vN(834,`p-required`),Kc(835,`br`),ug()()(),Ac(836,`td`,18)(837,`code`,19),vN(838,`boolean`),ug()(),Ac(839,`td`,20)(840,`p`)(841,`code`),vN(842,`false`),ug()()(),Ac(843,`td`,21)(844,`em`)(845,`strong`),vN(846,`(opcional)`),ug()(),Ac(847,`p`),vN(848,`Define que o campo será obrigatório.`),ug()()(),Ac(849,`tr`,14)(850,`td`,15)(851,`div`,16)(852,`span`,17),vN(853,` p-second-interval`),Kc(854,`br`),ug()()(),Ac(855,`td`,18)(856,`code`,27),vN(857,`number`),ug()(),Ac(858,`td`,20)(859,`p`)(860,`code`),vN(861,`1`),ug()()(),Ac(862,`td`,21)(863,`em`)(864,`strong`),vN(865,`(opcional)`),ug()(),Ac(866,`p`),vN(867,`Define o intervalo entre os segundos exibidos no painel.`),ug()()(),Ac(868,`tr`,14)(869,`td`,15)(870,`div`,16)(871,`span`,17),vN(872,` p-required-field-error-message`),Kc(873,`br`),ug()()(),Ac(874,`td`,18)(875,`code`,19),vN(876,`boolean`),ug()(),Ac(877,`td`,20)(878,`p`)(879,`code`),vN(880,`false`),ug()()(),Ac(881,`td`,21)(882,`em`)(883,`strong`),vN(884,`(opcional)`),ug()(),Ac(885,`p`),vN(886,`Exibe a mensagem setada na propriedade `),Ac(887,`code`),vN(888,`p-error-pattern`),ug(),vN(889,` se o campo estiver vazio e for requerido.`),ug()()(),Ac(890,`tr`,14)(891,`td`,15)(892,`div`,16)(893,`span`,17),vN(894,` p-show-required`),Kc(895,`br`),ug()()(),Ac(896,`td`,18)(897,`code`,19),vN(898,`boolean`),ug()(),Ac(899,`td`,20),vN(900,`-`),ug(),Ac(901,`td`,21)(902,`p`),vN(903,`Define se a indicação de campo obrigatório será exibida.`),ug()()(),Ac(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),vN(908,` p-show-seconds`),Kc(909,`br`),ug()()(),Ac(910,`td`,18)(911,`code`,19),vN(912,`boolean`),ug()(),Ac(913,`td`,20)(914,`p`)(915,`code`),vN(916,`false`),ug()()(),Ac(917,`td`,21)(918,`em`)(919,`strong`),vN(920,`(opcional)`),ug()(),Ac(921,`p`),vN(922,`Exibe a coluna de segundos no painel.`),ug()()(),Ac(923,`tr`,14)(924,`td`,15)(925,`div`,16)(926,`span`,17),vN(927,` p-size`),Kc(928,`br`),ug()()(),Ac(929,`td`,18)(930,`code`,25),vN(931,`string`),ug()(),Ac(932,`td`,20)(933,`p`)(934,`code`),vN(935,`medium`),ug()()(),Ac(936,`td`,21)(937,`em`)(938,`strong`),vN(939,`(opcional)`),ug()(),Ac(940,`p`),vN(941,`Define o tamanho do componente:`),ug(),Ac(942,`ul`)(943,`li`)(944,`code`),vN(945,`small`),ug(),vN(946,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(947,`li`)(948,`code`),vN(949,`medium`),ug(),vN(950,`: altura do input como 44px.`),ug()()()()(),Ac(951,`h3`,10),vN(952,`Métodos`),ug(),Ac(953,`table`,30)(954,`tr`,14)(955,`th`,31)(956,`div`,16)(957,`h4`)(958,`span`,17),vN(959,` focus `),ug()()()()(),Ac(960,`tr`,21)(961,`td`,21)(962,`p`),vN(963,`Função que atribui foco ao componente.`),ug(),Ac(964,`p`),vN(965,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(966,`pre`)(967,`code`),vN(968,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),ug()()()()(),Kc(969,`br`),Ac(970,`table`,30)(971,`tr`,14)(972,`th`,31)(973,`div`,16)(974,`h4`)(975,`span`,17),vN(976,` showAdditionalHelp `),ug()()()()(),Ac(977,`tr`,21)(978,`td`,21)(979,`p`),vN(980,`Método que exibe `),Ac(981,`code`),vN(982,`p-helper`),ug(),vN(983,` ou executa a ação definida em `),Ac(984,`code`),vN(985,`p-helper{eventOnClick}`),ug(),vN(986,` ou em `),Ac(987,`code`),vN(988,`p-additionalHelp`),ug(),vN(989,`.`),ug()()()(),Kc(990,`br`),Ac(991,`h3`),vN(992,`Enums`),ug(),Ac(993,`h4`,4)(994,`code`,5),vN(995,`PoTimepickerModelFormat`),ug()(),Ac(996,`div`,2)(997,`p`)(998,`em`),vN(999,`Enum`),ug(),vN(1e3,` que define o padrão de formatação do model de saída do timepicker.`),ug()(),Ac(1001,`h4`,10),vN(1002,`Propriedades`),ug(),Ac(1003,`table`,11)(1004,`tr`,12)(1005,`th`,13),vN(1006,`Nome`),ug(),Ac(1007,`th`,13),vN(1008,`Descrição`),ug()(),Ac(1009,`tr`,14)(1010,`td`,15)(1011,`div`,16)(1012,`span`,17),vN(1013,` HourMinute`),Kc(1014,`br`),ug()()(),Ac(1015,`td`,21)(1016,`p`),vN(1017,`Formato básico `),Ac(1018,`code`),vN(1019,`HH:mm`),ug(),vN(1020,` (ex: `),Ac(1021,`code`),vN(1022,`14:30`),ug(),vN(1023,`).`),ug()()(),Ac(1024,`tr`,14)(1025,`td`,15)(1026,`div`,16)(1027,`span`,17),vN(1028,` HourMinuteSecond`),Kc(1029,`br`),ug()()(),Ac(1030,`td`,21)(1031,`p`),vN(1032,`Formato com segundos `),Ac(1033,`code`),vN(1034,`HH:mm:ss`),ug(),vN(1035,` (ex: `),Ac(1036,`code`),vN(1037,`14:30:00`),ug(),vN(1038,`).`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return l})();var Ve=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(E(Qn),E(wn))};static ɵcmp=Hn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Timepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-timepicker-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-timepicker-basic-view`)(6,`sample-po-timepicker-labs-view`)(7,`sample-po-timepicker-scheduling-view`)(8,`sample-po-timepicker-business-hours-view`),ug()()()),r&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[vze,tae,aae,ce,he,Ee,fe,ve],encapsulation:2,changeDetection:1})}return l})()}];var xe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[kL.forChild(Ve),kL]})}return l})();var Ct=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[Ta,xe]})}return l})();export{Ct as DocPoTimepickerModule};