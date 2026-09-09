import{$r as Xy,$t as iU,At as _Ce,Bi as jp,D as E_e,Ei as f,Fi as he$1,Fn as zy,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nn as z0e,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,bt as W0e,ei as Yl,fi as ag,gi as bL,ha as ww,jn as ybe,k as Eu,l as ar,la as uo,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var se=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`timepicker`,`p-label`,`PO Timepicker`]],template:function(r,i){r&1&&Gl(0,`po-timepicker`,0)},dependencies:[E_e],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l});var ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Timepicker Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-timepicker-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Te,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,se],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:`HourMinute`,value:zy.HourMinute},{label:`HourMinuteSecond`,value:zy.HourMinuteSecond}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`},{value:`appendInBody`,label:`Append In Body`}];formatOptions=[{label:`24`,value:`24`},{label:`12`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`timepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-format`,`p-helper`,`p-help`,`p-model-format`,`p-label`,`p-locale`,`p-max-time`,`p-min-time`,`p-minute-interval`,`p-second-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-show-seconds`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-append-in-body`,`p-error-limit`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helper`,`p-clean`,``,`p-label`,`Helper`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`format`,`p-columns`,`4`,`p-label`,`Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`modelFormat`,`p-columns`,`4`,`p-label`,`Model Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Ax();Tl(0,`po-timepicker`,1),ww(`ngModelChange`,function(o){return Ky(s),uN(i.timepicker,o)||(i.timepicker=o),Xy(o)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3)(4,`po-info`,4),ag(),Gl(5,`po-divider`),Tl(6,`form`,null,0)(8,`po-input`,5),ww(`ngModelChange`,function(o){return Ky(s),uN(i.label,o)||(i.label=o),Xy(o)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(o){return Ky(s),uN(i.help,o)||(i.help=o),Xy(o)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(o){return Ky(s),uN(i.helper,o)||(i.helper=o),Xy(o)}),ag(),a0(),Tl(11,`po-input`,8),ww(`ngModelChange`,function(o){return Ky(s),uN(i.placeholder,o)||(i.placeholder=o),Xy(o)}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(o){return Ky(s),uN(i.errorPattern,o)||(i.errorPattern=o),Xy(o)}),ag(),a0(),Tl(13,`po-timepicker`,10),ww(`ngModelChange`,function(o){return Ky(s),uN(i.minTime,o)||(i.minTime=o),Xy(o)}),ag(),a0(),Tl(14,`po-timepicker`,11),ww(`ngModelChange`,function(o){return Ky(s),uN(i.maxTime,o)||(i.maxTime=o),Xy(o)}),ag(),a0(),Tl(15,`po-number`,12),ww(`ngModelChange`,function(o){return Ky(s),uN(i.minuteInterval,o)||(i.minuteInterval=o),Xy(o)}),ag(),a0(),Tl(16,`po-number`,13),ww(`ngModelChange`,function(o){return Ky(s),uN(i.secondInterval,o)||(i.secondInterval=o),Xy(o)}),ag(),a0(),Tl(17,`po-checkbox-group`,14),ww(`ngModelChange`,function(o){return Ky(s),uN(i.properties,o)||(i.properties=o),Xy(o)}),ag(),a0(),Tl(18,`po-radio-group`,15),ww(`ngModelChange`,function(o){return Ky(s),uN(i.locale,o)||(i.locale=o),Xy(o)}),ag(),a0(),Tl(19,`po-radio-group`,16),ww(`ngModelChange`,function(o){return Ky(s),uN(i.format,o)||(i.format=o),Xy(o)}),ag(),a0(),Tl(20,`po-radio-group`,17),ww(`ngModelChange`,function(o){return Ky(s),uN(i.modelFormat,o)||(i.modelFormat=o),Xy(o)}),ag(),a0(),Tl(21,`po-radio-group`,18),ww(`ngModelChange`,function(o){return Ky(s),uN(i.size,o)||(i.size=o),Xy(o)}),ag(),a0(),Tl(22,`div`,2)(23,`po-button`,19),ht(`p-click`,function(){return i.restore()}),ag()()()}r&2&&(Ew(`ngModel`,i.timepicker),nw(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-format`,i.format)(`p-helper`,i.helper)(`p-help`,i.help)(`p-model-format`,i.modelFormat)(`p-label`,i.label)(`p-locale`,i.locale)(`p-max-time`,i.maxTime)(`p-min-time`,i.minTime)(`p-minute-interval`,i.minuteInterval)(`p-second-interval`,i.secondInterval)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-seconds`,i.properties.includes(`showSeconds`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-append-in-body`,i.properties?.includes(`appendInBody`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-size`,i.size),l0(),jp(3),nw(`p-value`,i.timepicker),jp(),nw(`p-value`,i.event),jp(4),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.helper),l0(),jp(),Ew(`ngModel`,i.placeholder),l0(),jp(),Ew(`ngModel`,i.errorPattern),l0(),jp(),Ew(`ngModel`,i.minTime),l0(),jp(),Ew(`ngModel`,i.maxTime),l0(),jp(),Ew(`ngModel`,i.minuteInterval),l0(),jp(),Ew(`ngModel`,i.secondInterval),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.locale),nw(`p-options`,i.localeOptions),l0(),jp(),Ew(`ngModel`,i.format),nw(`p-options`,i.formatOptions),l0(),jp(),Ew(`ngModel`,i.modelFormat),nw(`p-options`,i.modelFormatOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,ube,L0e,E_e,ybe],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Timepicker Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-timepicker
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-timepicker-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,_e,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ge],encapsulation:2,changeDetection:1})}return l})();var Pe=[`formScheduling`];var Se=(()=>{class l{poDialog=f(W0e);poNotification=f(Eu);formScheduling;title=``;date=new Date;startTime=``;endTime=``;room=``;roomOptions=[{value:`sala-a`,label:`Sala A`},{value:`sala-b`,label:`Sala B`},{value:`sala-c`,label:`Sala C`},{value:`auditorio`,label:`Auditório`}];schedule(){let d=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:d,confirm:()=>{this.poNotification.success(`Agendamento confirmado com sucesso!`),this.formScheduling.reset({date:``,room:``})},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getFormatedDate(d){return d&&d.slice(0,10)}getRoomLabel(){let d=this.roomOptions.find(r=>r.value===this.room);return d?d.label:this.room}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-scheduling`]],viewQuery:function(r,i){if(r&1&&Yl(Pe,7),r&2){let s;lo(s=uo())&&(i.formScheduling=s.first)}},standalone:!1,decls:11,vars:9,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`title`,`p-label`,`Título do agendamento`,`p-placeholder`,`Ex: Reunião de planejamento`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`date`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Data`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`startTime`,`p-label`,`Horário de início`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`endTime`,`p-label`,`Horário de término`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`room`,`p-label`,`Sala`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`scheduleButton`,`p-label`,`Agendar`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=Ax();Tl(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),ww(`ngModelChange`,function(o){return Ky(s),uN(i.title,o)||(i.title=o),Xy(o)}),ag(),a0(),Tl(4,`po-datepicker`,3),ww(`ngModelChange`,function(o){return Ky(s),uN(i.date,o)||(i.date=o),Xy(o)}),ag(),a0(),ag(),Tl(5,`div`,1)(6,`po-timepicker`,4),ww(`ngModelChange`,function(o){return Ky(s),uN(i.startTime,o)||(i.startTime=o),Xy(o)}),ag(),a0(),Tl(7,`po-timepicker`,5),ww(`ngModelChange`,function(o){return Ky(s),uN(i.endTime,o)||(i.endTime=o),Xy(o)}),ag(),a0(),Tl(8,`po-select`,6),ww(`ngModelChange`,function(o){return Ky(s),uN(i.room,o)||(i.room=o),Xy(o)}),ag(),a0(),ag(),Tl(9,`div`,1)(10,`po-button`,7),ht(`p-click`,function(){return i.schedule()}),ag()()()}if(r&2){let s=Bx(1);jp(3),Ew(`ngModel`,i.title),l0(),jp(),Ew(`ngModel`,i.date),l0(),jp(2),Ew(`ngModel`,i.startTime),nw(`p-show-required`,!0),l0(),jp(),Ew(`ngModel`,i.endTime),nw(`p-show-required`,!0),l0(),jp(),Ew(`ngModel`,i.room),nw(`p-options`,i.roomOptions),l0(),jp(2),nw(`p-disabled`,s.invalid)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,z0e,iU,fbe,E_e],encapsulation:2,changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l});var Ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-scheduling-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Timepicker - Scheduling`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form #formScheduling="ngForm">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-timepicker-scheduling`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,He,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Se],encapsulation:2,changeDetection:1})}return l})();var be=(()=>{class l{poNotification=f(Eu);openTime=`08:00`;closeTime=`18:00`;lunchStart=`12:00`;lunchEnd=`13:00`;save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-business-hours`]],standalone:!1,decls:8,vars:14,consts:[[1,`po-row`],[`name`,`openTime`,`p-label`,`Abertura`,`p-clean`,``,`p-min-time`,`06:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-time`,`p-minute-interval`],[`name`,`closeTime`,`p-label`,`Fechamento`,`p-clean`,``,`p-max-time`,`23:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-minute-interval`],[`name`,`lunchStart`,`p-label`,`Início do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`name`,`lunchEnd`,`p-label`,`Fim do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`p-label`,`Salvar`,`p-kind`,`primary`,1,`po-md-3`,`po-offset-md-9`,3,`p-click`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`po-timepicker`,1),ww(`ngModelChange`,function(p){return uN(i.openTime,p)||(i.openTime=p),p}),ag(),a0(),Tl(2,`po-timepicker`,2),ww(`ngModelChange`,function(p){return uN(i.closeTime,p)||(i.closeTime=p),p}),ag(),a0(),ag(),Tl(3,`div`,0)(4,`po-timepicker`,3),ww(`ngModelChange`,function(p){return uN(i.lunchStart,p)||(i.lunchStart=p),p}),ag(),a0(),Tl(5,`po-timepicker`,4),ww(`ngModelChange`,function(p){return uN(i.lunchEnd,p)||(i.lunchEnd=p),p}),ag(),a0(),ag(),Tl(6,`div`,0)(7,`po-button`,5),ht(`p-click`,function(){return i.save()}),ag()()),r&2&&(jp(),Ew(`ngModel`,i.openTime),nw(`p-max-time`,i.lunchStart)(`p-minute-interval`,30),l0(),jp(),Ew(`ngModel`,i.closeTime),nw(`p-min-time`,i.lunchEnd)(`p-minute-interval`,30),l0(),jp(2),Ew(`ngModel`,i.lunchStart),nw(`p-min-time`,i.openTime)(`p-max-time`,i.lunchEnd)(`p-minute-interval`,15),l0(),jp(),Ew(`ngModel`,i.lunchEnd),nw(`p-min-time`,i.lunchStart)(`p-max-time`,i.closeTime)(`p-minute-interval`,15),l0())},dependencies:[gY,Ak,Zt,E_e],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l});var fe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-business-hours-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Timepicker - Business Hours`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-timepicker-business-hours`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Be,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,be],encapsulation:2,changeDetection:1})}return l})();var ve=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-doc`]],standalone:!1,decls:1039,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoTimepickerComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`O `),Tl(24,`code`),cN(25,`po-timepicker`),ag(),cN(26,` é um componente para seleção de horário que permite a digitação e/ou seleção via painel flutuante.`),ag(),Tl(27,`p`),cN(28,`O formato de exibição do horário pode ser de 24 horas (`),Tl(29,`code`),cN(30,`HH:mm`),ag(),cN(31,`) ou 12 horas (`),Tl(32,`code`),cN(33,`hh:mm AM/PM`),ag(),cN(34,`),
e opcionalmente incluir segundos (`),Tl(35,`code`),cN(36,`HH:mm:ss`),ag(),cN(37,`).`),ag(),Tl(38,`p`),cN(39,`O valor de saída segue o formato ISO 8601 para horários (`),Tl(40,`code`),cN(41,`HH:mm`),ag(),cN(42,` ou `),Tl(43,`code`),cN(44,`HH:mm:ss`),ag(),cN(45,`).`),ag(),Tl(46,`p`)(47,`strong`),cN(48,`Importante:`),ag()(),Tl(49,`ul`)(50,`li`),cN(51,`Caso o valor digitado seja inválido, o `),Tl(52,`code`),cN(53,`model`),ag(),cN(54,` receberá uma string vazia.`),ag(),Tl(55,`li`),cN(56,`Caso o `),Tl(57,`code`),cN(58,`input`),ag(),cN(59,` esteja passando um `),Tl(60,`code`),cN(61,`[(ngModel)]`),ag(),cN(62,`, mas não tenha um `),Tl(63,`code`),cN(64,`name`),ag(),cN(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Tl(66,`code`),cN(67,`[ngModelOptions]="{standalone: true}"`),ag(),cN(68,`).`),ag()(),Tl(69,`blockquote`)(70,`p`),cN(71,`Não esqueça de importar o `),Tl(72,`code`),cN(73,`FormsModule`),ag(),cN(74,` em seu módulo, tal como para utilizar o `),Tl(75,`code`),cN(76,`input default`),ag(),cN(77,`.`),ag()(),Tl(78,`h4`),cN(79,`Tokens customizáveis`),ag(),Tl(80,`p`),cN(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(82,`code`),cN(83,`.po-input`),ag()(),Tl(84,`blockquote`)(85,`p`),cN(86,`Para maiores informações, acesse o guia `),Tl(87,`a`,6),cN(88,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(89,`.`),ag()(),Tl(90,`table`)(91,`thead`)(92,`tr`)(93,`th`),cN(94,`Propriedade`),ag(),Tl(95,`th`),cN(96,`Descrição`),ag(),Tl(97,`th`),cN(98,`Valor Padrão`),ag()()(),Tl(99,`tbody`)(100,`tr`)(101,`td`)(102,`strong`),cN(103,`Default Values`),ag()(),Gl(104,`td`)(105,`td`),ag(),Tl(106,`tr`)(107,`td`)(108,`code`),cN(109,`--font-family`),ag()(),Tl(110,`td`),cN(111,`Família tipográfica usada`),ag(),Tl(112,`td`)(113,`code`),cN(114,`var(--font-family-theme)`),ag()()(),Tl(115,`tr`)(116,`td`)(117,`code`),cN(118,`--font-size`),ag()(),Tl(119,`td`),cN(120,`Tamanho da fonte`),ag(),Tl(121,`td`)(122,`code`),cN(123,`var(--font-size-default)`),ag()()(),Tl(124,`tr`)(125,`td`)(126,`code`),cN(127,`--text-color-placeholder`),ag()(),Tl(128,`td`),cN(129,`Cor do texto placeholder`),ag(),Tl(130,`td`)(131,`code`),cN(132,`var(--color-neutral-light-30)`),ag()()(),Tl(133,`tr`)(134,`td`)(135,`code`),cN(136,`--color`),ag()(),Tl(137,`td`),cN(138,`Cor principal do timepicker`),ag(),Tl(139,`td`)(140,`code`),cN(141,`var(--color-neutral-dark-70)`),ag()()(),Tl(142,`tr`)(143,`td`)(144,`code`),cN(145,`--background`),ag()(),Tl(146,`td`),cN(147,`Cor de background`),ag(),Tl(148,`td`)(149,`code`),cN(150,`var(--color-neutral-light-05)`),ag()()(),Tl(151,`tr`)(152,`td`)(153,`code`),cN(154,`--padding`),ag()(),Tl(155,`td`),cN(156,`Preenchimento`),ag(),Tl(157,`td`)(158,`code`),cN(159,`0 0.5rem`),ag()()(),Tl(160,`tr`)(161,`td`)(162,`code`),cN(163,`--text-color`),ag()(),Tl(164,`td`),cN(165,`Cor do texto`),ag(),Tl(166,`td`)(167,`code`),cN(168,`var(--color-neutral-dark-90)`),ag()()(),Tl(169,`tr`)(170,`td`)(171,`code`),cN(172,`--field-container-title-justify`),ag()(),Tl(173,`td`),cN(174,`Alinhamento horizontal do título (`),Tl(175,`code`),cN(176,`justify-content`),ag(),cN(177,`)`),ag(),Tl(178,`td`)(179,`code`),cN(180,`space-between`),ag()()(),Tl(181,`tr`)(182,`td`)(183,`code`),cN(184,`--field-container-title-flex`),ag()(),Tl(185,`td`),cN(186,`Flex do título (`),Tl(187,`code`),cN(188,`flex`),ag(),cN(189,`)`),ag(),Tl(190,`td`)(191,`code`),cN(192,`1 auto`),ag()()(),Tl(193,`tr`)(194,`td`)(195,`strong`),cN(196,`Hover`),ag()(),Gl(197,`td`)(198,`td`),ag(),Tl(199,`tr`)(200,`td`)(201,`code`),cN(202,`--color-hover`),ag()(),Tl(203,`td`),cN(204,`Cor principal no estado hover`),ag(),Tl(205,`td`)(206,`code`),cN(207,`var(--color-brand-01-dark)`),ag()()(),Tl(208,`tr`)(209,`td`)(210,`code`),cN(211,`--background-hover`),ag()(),Tl(212,`td`),cN(213,`Cor de background no estado hover`),ag(),Tl(214,`td`)(215,`code`),cN(216,`var(--color-brand-01-lightest)`),ag()()(),Tl(217,`tr`)(218,`td`)(219,`strong`),cN(220,`Focused`),ag()(),Gl(221,`td`)(222,`td`),ag(),Tl(223,`tr`)(224,`td`)(225,`code`),cN(226,`--color-focused`),ag()(),Tl(227,`td`),cN(228,`Cor principal no estado de focus`),ag(),Tl(229,`td`)(230,`code`),cN(231,`var(--color-action-default)`),ag()()(),Tl(232,`tr`)(233,`td`)(234,`code`),cN(235,`--outline-color-focused`),ag()(),Tl(236,`td`),cN(237,`Cor do outline do estado de focus`),ag(),Tl(238,`td`)(239,`code`),cN(240,`var(--color-action-focus)`),ag()()(),Tl(241,`tr`)(242,`td`)(243,`strong`),cN(244,`Disabled`),ag()(),Gl(245,`td`)(246,`td`),ag(),Tl(247,`tr`)(248,`td`)(249,`code`),cN(250,`--color-disabled`),ag()(),Tl(251,`td`),cN(252,`Cor principal no estado disabled`),ag(),Tl(253,`td`)(254,`code`),cN(255,`var(--color-neutral-light-30)`),ag()()(),Tl(256,`tr`)(257,`td`)(258,`code`),cN(259,`--background-disabled`),ag()(),Tl(260,`td`),cN(261,`Cor de background no estado disabled`),ag(),Tl(262,`td`)(263,`code`),cN(264,`var(--color-neutral-light-20)`),ag()()(),Tl(265,`tr`)(266,`td`)(267,`code`),cN(268,`--text-color-disabled`),ag()(),Tl(269,`td`),cN(270,`Cor do texto no estado disabled`),ag(),Tl(271,`td`)(272,`code`),cN(273,`var(--color-neutral-dark-70)`),ag()()()()()(),Tl(274,`div`,7)(275,`h4`,8),cN(276,`Seletor`),ag(),Tl(277,`pre`,9),cN(278,`<po-timepicker
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
`),ag()(),Tl(279,`h4`,10),cN(280,`Propriedades`),ag(),Tl(281,`table`,11)(282,`tr`,12)(283,`th`,13),cN(284,`Nome`),ag(),Tl(285,`th`,13),cN(286,`Tipo`),ag(),Tl(287,`th`,13),cN(288,`Padrão`),ag(),Tl(289,`th`,13),cN(290,`Descrição`),ag()(),Tl(291,`tr`,14)(292,`td`,15)(293,`div`,16)(294,`span`,17),cN(295,` p-append-in-body`),Gl(296,`br`),ag()()(),Tl(297,`td`,18)(298,`code`,19),cN(299,`boolean`),ag()(),Tl(300,`td`,20)(301,`p`)(302,`code`),cN(303,`false`),ag()()(),Tl(304,`td`,21)(305,`em`)(306,`strong`),cN(307,`(opcional)`),ag()(),Tl(308,`p`),cN(309,`Define que o painel do timer será incluído no body da página.`),ag()()(),Tl(310,`tr`,14)(311,`td`,15)(312,`div`,16)(313,`span`,17),cN(314,` p-auto-focus`),Gl(315,`br`),ag()()(),Tl(316,`td`,18)(317,`code`,19),cN(318,`boolean`),ag()(),Tl(319,`td`,20)(320,`p`)(321,`code`),cN(322,`false`),ag()()(),Tl(323,`td`,21)(324,`em`)(325,`strong`),cN(326,`(opcional)`),ag()(),Tl(327,`p`),cN(328,`Aplica foco no elemento ao ser iniciado.`),ag()()(),Tl(329,`tr`,14)(330,`td`,15)(331,`div`,22)(332,`span`,23),cN(333,` (p-change-model)`),Gl(334,`br`),ag()()(),Tl(335,`td`,18)(336,`code`,24),cN(337,`EventEmitter`),ag()(),Tl(338,`td`,20),cN(339,`-`),ag(),Tl(340,`td`,21)(341,`em`)(342,`strong`),cN(343,`(opcional)`),ag()(),Tl(344,`p`),cN(345,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(346,`code`),cN(347,`setValue`),ag(),cN(348,`, `),Tl(349,`code`),cN(350,`patchValue`),ag(),cN(351,`, carregamento assíncrono).`),ag(),Tl(352,`p`),cN(353,`Diferentemente do `),Tl(354,`code`),cN(355,`p-change`),ag(),cN(356,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(357,`code`),cN(358,`p-change-model`),ag(),cN(359,` cobre todos os cenários de alteração de valor.`),ag(),Tl(360,`p`),cN(361,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(362,`tr`,14)(363,`td`,15)(364,`div`,16)(365,`span`,17),cN(366,`p-clean`),Gl(367,`br`),ag()()(),Tl(368,`td`,18)(369,`code`,19),cN(370,`boolean`),ag()(),Tl(371,`td`,20),cN(372,`-`),ag(),Tl(373,`td`,21)(374,`em`)(375,`strong`),cN(376,`(opcional)`),ag()(),Tl(377,`p`),cN(378,`Habilita ação para limpar o campo.`),ag()()(),Tl(379,`tr`,14)(380,`td`,15)(381,`div`,16)(382,`span`,17),cN(383,` p-compact-label`),Gl(384,`br`),ag()()(),Tl(385,`td`,18)(386,`code`,19),cN(387,`boolean`),ag()(),Tl(388,`td`,20)(389,`p`)(390,`code`),cN(391,`false`),ag()()(),Tl(392,`td`,21)(393,`em`)(394,`strong`),cN(395,`(opcional)`),ag()(),Tl(396,`p`),cN(397,`Define se o título do campo será exibido de forma compacta.`),ag()()(),Tl(398,`tr`,14)(399,`td`,15)(400,`div`,16)(401,`span`,17),cN(402,`p-disabled`),Gl(403,`br`),ag()()(),Tl(404,`td`,18)(405,`code`,19),cN(406,`boolean`),ag()(),Tl(407,`td`,20),cN(408,`-`),ag(),Tl(409,`td`,21)(410,`em`)(411,`strong`),cN(412,`(opcional)`),ag()(),Tl(413,`p`),cN(414,`Desabilita o campo.`),ag()()(),Tl(415,`tr`,14)(416,`td`,15)(417,`div`,16)(418,`span`,17),cN(419,` p-error-limit`),Gl(420,`br`),ag()()(),Tl(421,`td`,18)(422,`code`,19),cN(423,`boolean`),ag()(),Tl(424,`td`,20)(425,`p`)(426,`code`),cN(427,`false`),ag()()(),Tl(428,`td`,21)(429,`em`)(430,`strong`),cN(431,`(opcional)`),ag()(),Tl(432,`p`),cN(433,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag()()(),Tl(434,`tr`,14)(435,`td`,15)(436,`div`,16)(437,`span`,17),cN(438,` p-error-pattern`),Gl(439,`br`),ag()()(),Tl(440,`td`,18)(441,`code`,25),cN(442,`string`),ag()(),Tl(443,`td`,20),cN(444,`-`),ag(),Tl(445,`td`,21)(446,`em`)(447,`strong`),cN(448,`(opcional)`),ag()(),Tl(449,`p`),cN(450,`Mensagem apresentada quando o horário for inválido ou fora do período.`),ag(),Tl(451,`blockquote`)(452,`p`),cN(453,`Por padrão, esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja requerido.`),ag()()()(),Tl(454,`tr`,14)(455,`td`,15)(456,`div`,16)(457,`span`,17),cN(458,` p-format`),Gl(459,`br`),ag()()(),Tl(460,`td`,18)(461,`code`,26),cN(462,`PoTimerFormat`),ag()(),Tl(463,`td`,20)(464,`p`)(465,`code`),cN(466,`24`),ag()()(),Tl(467,`td`,21)(468,`em`)(469,`strong`),cN(470,`(opcional)`),ag()(),Tl(471,`p`),cN(472,`Define o formato de exibição do timer.`),ag(),Tl(473,`p`),cN(474,`Valores válidos:`),ag(),Tl(475,`ul`)(476,`li`)(477,`code`),cN(478,`24`),ag(),cN(479,`: formato de 24 horas (padrão)`),ag(),Tl(480,`li`)(481,`code`),cN(482,`12`),ag(),cN(483,`: formato de 12 horas com indicador AM/PM`),ag()()()(),Tl(484,`tr`,14)(485,`td`,15)(486,`div`,16)(487,`span`,17),cN(488,` p-help`),Gl(489,`br`),ag()()(),Tl(490,`td`,18)(491,`code`,25),cN(492,`string`),ag()(),Tl(493,`td`,20),cN(494,`-`),ag(),Tl(495,`td`,21)(496,`em`)(497,`strong`),cN(498,`(opcional)`),ag()(),Tl(499,`p`),cN(500,`Texto de apoio do campo.`),ag()()(),Tl(501,`tr`,14)(502,`td`,15)(503,`div`,22)(504,`span`,23),cN(505,` (p-keydown)`),Gl(506,`br`),ag()()(),Tl(507,`td`,18)(508,`code`,24),cN(509,`EventEmitter`),ag()(),Tl(510,`td`,20),cN(511,`-`),ag(),Tl(512,`td`,21)(513,`p`),cN(514,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),ag()()(),Tl(515,`tr`,14)(516,`td`,15)(517,`div`,16)(518,`span`,17),cN(519,` p-label`),Gl(520,`br`),ag()()(),Tl(521,`td`,18)(522,`code`,25),cN(523,`string`),ag()(),Tl(524,`td`,20),cN(525,`-`),ag(),Tl(526,`td`,21)(527,`em`)(528,`strong`),cN(529,`(opcional)`),ag()(),Tl(530,`p`),cN(531,`Rótulo do campo.`),ag()()(),Tl(532,`tr`,14)(533,`td`,15)(534,`div`,16)(535,`span`,17),cN(536,` p-label-text-wrap`),Gl(537,`br`),ag()()(),Tl(538,`td`,18)(539,`code`,19),cN(540,`boolean`),ag()(),Tl(541,`td`,20)(542,`p`)(543,`code`),cN(544,`false`),ag()()(),Tl(545,`td`,21)(546,`em`)(547,`strong`),cN(548,`(opcional)`),ag()(),Tl(549,`p`),cN(550,`Habilita a quebra automática do texto da propriedade `),Tl(551,`code`),cN(552,`p-label`),ag(),cN(553,`.`),ag()()(),Tl(554,`tr`,14)(555,`td`,15)(556,`div`,16)(557,`span`,17),cN(558,` p-loading`),Gl(559,`br`),ag()()(),Tl(560,`td`,18)(561,`code`,19),cN(562,`boolean`),ag()(),Tl(563,`td`,20)(564,`p`)(565,`code`),cN(566,`false`),ag()()(),Tl(567,`td`,21)(568,`em`)(569,`strong`),cN(570,`(opcional)`),ag()(),Tl(571,`p`),cN(572,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ag()()(),Tl(573,`tr`,14)(574,`td`,15)(575,`div`,16)(576,`span`,17),cN(577,` p-locale`),Gl(578,`br`),ag()()(),Tl(579,`td`,18)(580,`code`,25),cN(581,`string`),ag()(),Tl(582,`td`,20),cN(583,`-`),ag(),Tl(584,`td`,21)(585,`em`)(586,`strong`),cN(587,`(opcional)`),ag()(),Tl(588,`p`),cN(589,`Idioma do componente.`),ag()()(),Tl(590,`tr`,14)(591,`td`,15)(592,`div`,16)(593,`span`,17),cN(594,` p-max-time`),Gl(595,`br`),ag()()(),Tl(596,`td`,18)(597,`code`,25),cN(598,`string`),ag()(),Tl(599,`td`,20),cN(600,`-`),ag(),Tl(601,`td`,21)(602,`em`)(603,`strong`),cN(604,`(opcional)`),ag()(),Tl(605,`p`),cN(606,`Define o horário máximo permitido. Formato: `),Tl(607,`code`),cN(608,`HH:mm`),ag(),cN(609,` ou `),Tl(610,`code`),cN(611,`HH:mm:ss`),ag(),cN(612,`.`),ag()()(),Tl(613,`tr`,14)(614,`td`,15)(615,`div`,16)(616,`span`,17),cN(617,` p-min-time`),Gl(618,`br`),ag()()(),Tl(619,`td`,18)(620,`code`,25),cN(621,`string`),ag()(),Tl(622,`td`,20),cN(623,`-`),ag(),Tl(624,`td`,21)(625,`em`)(626,`strong`),cN(627,`(opcional)`),ag()(),Tl(628,`p`),cN(629,`Define o horário mínimo permitido. Formato: `),Tl(630,`code`),cN(631,`HH:mm`),ag(),cN(632,` ou `),Tl(633,`code`),cN(634,`HH:mm:ss`),ag(),cN(635,`.`),ag()()(),Tl(636,`tr`,14)(637,`td`,15)(638,`div`,16)(639,`span`,17),cN(640,` p-minute-interval`),Gl(641,`br`),ag()()(),Tl(642,`td`,18)(643,`code`,27),cN(644,`number`),ag()(),Tl(645,`td`,20)(646,`p`)(647,`code`),cN(648,`5`),ag()()(),Tl(649,`td`,21)(650,`em`)(651,`strong`),cN(652,`(opcional)`),ag()(),Tl(653,`p`),cN(654,`Define o intervalo entre os minutos exibidos no painel.`),ag()()(),Tl(655,`tr`,14)(656,`td`,15)(657,`div`,16)(658,`span`,17),cN(659,` p-model-format`),Gl(660,`br`),ag()()(),Tl(661,`td`,18)(662,`code`,28),cN(663,`PoTimepickerModelFormat`),ag()(),Tl(664,`td`,20),cN(665,`-`),ag(),Tl(666,`td`,21)(667,`em`)(668,`strong`),cN(669,`(opcional)`),ag()(),Tl(670,`p`),cN(671,`Padrão de formatação para saída do `),Tl(672,`em`),cN(673,`model`),ag(),cN(674,`.`),ag(),Tl(675,`blockquote`)(676,`p`),cN(677,`Veja os valores válidos no `),Tl(678,`em`),cN(679,`enum`),ag(),Tl(680,`code`),cN(681,`PoTimepickerModelFormat`),ag(),cN(682,`.`),ag()()()(),Tl(683,`tr`,14)(684,`td`,15)(685,`div`,16)(686,`span`,17),cN(687,` name`),Gl(688,`br`),ag()()(),Tl(689,`td`,18)(690,`code`,25),cN(691,`string`),ag()(),Tl(692,`td`,20),cN(693,`-`),ag(),Tl(694,`td`,21)(695,`p`),cN(696,`Nome do componente.`),ag()()(),Tl(697,`tr`,14)(698,`td`,15)(699,`div`,16)(700,`span`,17),cN(701,` p-no-autocomplete`),Gl(702,`br`),ag()()(),Tl(703,`td`,18)(704,`code`,19),cN(705,`boolean`),ag()(),Tl(706,`td`,20)(707,`p`)(708,`code`),cN(709,`false`),ag()()(),Tl(710,`td`,21)(711,`em`)(712,`strong`),cN(713,`(opcional)`),ag()(),Tl(714,`p`),cN(715,`Define a propriedade nativa `),Tl(716,`code`),cN(717,`autocomplete`),ag(),cN(718,` do campo como `),Tl(719,`code`),cN(720,`off`),ag(),cN(721,`.`),ag()()(),Tl(722,`tr`,14)(723,`td`,15)(724,`div`,22)(725,`span`,23),cN(726,` (p-blur)`),Gl(727,`br`),ag()()(),Tl(728,`td`,18)(729,`code`,24),cN(730,`EventEmitter`),ag()(),Tl(731,`td`,20),cN(732,`-`),ag(),Tl(733,`td`,21)(734,`p`),cN(735,`Evento disparado ao sair do campo.`),ag()()(),Tl(736,`tr`,14)(737,`td`,15)(738,`div`,22)(739,`span`,23),cN(740,` (p-change)`),Gl(741,`br`),ag()()(),Tl(742,`td`,18)(743,`code`,24),cN(744,`EventEmitter`),ag()(),Tl(745,`td`,20),cN(746,`-`),ag(),Tl(747,`td`,21)(748,`p`),cN(749,`Evento disparado ao alterar valor do campo.`),ag()()(),Tl(750,`tr`,14)(751,`td`,15)(752,`div`,16)(753,`span`,17),cN(754,` p-optional`),Gl(755,`br`),ag()()(),Tl(756,`td`,18)(757,`code`,19),cN(758,`boolean`),ag()(),Tl(759,`td`,20)(760,`p`)(761,`code`),cN(762,`false`),ag()()(),Tl(763,`td`,21)(764,`em`)(765,`strong`),cN(766,`(opcional)`),ag()(),Tl(767,`p`),cN(768,`Define se a indicação de campo opcional será exibida.`),ag()()(),Tl(769,`tr`,14)(770,`td`,15)(771,`div`,16)(772,`span`,17),cN(773,` p-placeholder`),Gl(774,`br`),ag()()(),Tl(775,`td`,18)(776,`code`,25),cN(777,`string`),ag()(),Tl(778,`td`,20),cN(779,`-`),ag(),Tl(780,`td`,21)(781,`em`)(782,`strong`),cN(783,`(opcional)`),ag()(),Tl(784,`p`),cN(785,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ag(),Tl(786,`p`),cN(787,`Para personalizar os segmentos, informe o valor no formato `),Tl(788,`code`),cN(789,`HH:mm`),ag(),cN(790,` ou `),Tl(791,`code`),cN(792,`HH:mm:ss`),ag(),cN(793,`.`),ag()()(),Tl(794,`tr`,14)(795,`td`,15)(796,`div`,16)(797,`span`,17),cN(798,` p-helper`),Gl(799,`br`),ag()()(),Tl(800,`td`,18)(801,`code`,29),cN(802,`PoHelperOptions `),ag(),Tl(803,`code`,25),cN(804,` string`),ag()(),Tl(805,`td`,20),cN(806,`-`),ag(),Tl(807,`td`,21)(808,`em`)(809,`strong`),cN(810,`(opcional)`),ag()(),Tl(811,`p`),cN(812,`Define as opções do componente de ajuda (po-helper).`),ag()()(),Tl(813,`tr`,14)(814,`td`,15)(815,`div`,16)(816,`span`,17),cN(817,`p-readonly`),Gl(818,`br`),ag()()(),Tl(819,`td`,18)(820,`code`,19),cN(821,`boolean`),ag()(),Tl(822,`td`,20),cN(823,`-`),ag(),Tl(824,`td`,21)(825,`em`)(826,`strong`),cN(827,`(opcional)`),ag()(),Tl(828,`p`),cN(829,`Torna o elemento somente leitura.`),ag()()(),Tl(830,`tr`,14)(831,`td`,15)(832,`div`,16)(833,`span`,17),cN(834,`p-required`),Gl(835,`br`),ag()()(),Tl(836,`td`,18)(837,`code`,19),cN(838,`boolean`),ag()(),Tl(839,`td`,20)(840,`p`)(841,`code`),cN(842,`false`),ag()()(),Tl(843,`td`,21)(844,`em`)(845,`strong`),cN(846,`(opcional)`),ag()(),Tl(847,`p`),cN(848,`Define que o campo será obrigatório.`),ag()()(),Tl(849,`tr`,14)(850,`td`,15)(851,`div`,16)(852,`span`,17),cN(853,` p-second-interval`),Gl(854,`br`),ag()()(),Tl(855,`td`,18)(856,`code`,27),cN(857,`number`),ag()(),Tl(858,`td`,20)(859,`p`)(860,`code`),cN(861,`1`),ag()()(),Tl(862,`td`,21)(863,`em`)(864,`strong`),cN(865,`(opcional)`),ag()(),Tl(866,`p`),cN(867,`Define o intervalo entre os segundos exibidos no painel.`),ag()()(),Tl(868,`tr`,14)(869,`td`,15)(870,`div`,16)(871,`span`,17),cN(872,` p-required-field-error-message`),Gl(873,`br`),ag()()(),Tl(874,`td`,18)(875,`code`,19),cN(876,`boolean`),ag()(),Tl(877,`td`,20)(878,`p`)(879,`code`),cN(880,`false`),ag()()(),Tl(881,`td`,21)(882,`em`)(883,`strong`),cN(884,`(opcional)`),ag()(),Tl(885,`p`),cN(886,`Exibe a mensagem setada na propriedade `),Tl(887,`code`),cN(888,`p-error-pattern`),ag(),cN(889,` se o campo estiver vazio e for requerido.`),ag()()(),Tl(890,`tr`,14)(891,`td`,15)(892,`div`,16)(893,`span`,17),cN(894,` p-show-required`),Gl(895,`br`),ag()()(),Tl(896,`td`,18)(897,`code`,19),cN(898,`boolean`),ag()(),Tl(899,`td`,20),cN(900,`-`),ag(),Tl(901,`td`,21)(902,`p`),cN(903,`Define se a indicação de campo obrigatório será exibida.`),ag()()(),Tl(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),cN(908,` p-show-seconds`),Gl(909,`br`),ag()()(),Tl(910,`td`,18)(911,`code`,19),cN(912,`boolean`),ag()(),Tl(913,`td`,20)(914,`p`)(915,`code`),cN(916,`false`),ag()()(),Tl(917,`td`,21)(918,`em`)(919,`strong`),cN(920,`(opcional)`),ag()(),Tl(921,`p`),cN(922,`Exibe a coluna de segundos no painel.`),ag()()(),Tl(923,`tr`,14)(924,`td`,15)(925,`div`,16)(926,`span`,17),cN(927,` p-size`),Gl(928,`br`),ag()()(),Tl(929,`td`,18)(930,`code`,25),cN(931,`string`),ag()(),Tl(932,`td`,20)(933,`p`)(934,`code`),cN(935,`medium`),ag()()(),Tl(936,`td`,21)(937,`em`)(938,`strong`),cN(939,`(opcional)`),ag()(),Tl(940,`p`),cN(941,`Define o tamanho do componente:`),ag(),Tl(942,`ul`)(943,`li`)(944,`code`),cN(945,`small`),ag(),cN(946,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(947,`li`)(948,`code`),cN(949,`medium`),ag(),cN(950,`: altura do input como 44px.`),ag()()()()(),Tl(951,`h3`,10),cN(952,`Métodos`),ag(),Tl(953,`table`,30)(954,`tr`,14)(955,`th`,31)(956,`div`,16)(957,`h4`)(958,`span`,17),cN(959,` focus `),ag()()()()(),Tl(960,`tr`,21)(961,`td`,21)(962,`p`),cN(963,`Função que atribui foco ao componente.`),ag(),Tl(964,`p`),cN(965,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(966,`pre`)(967,`code`),cN(968,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),ag()()()()(),Gl(969,`br`),Tl(970,`table`,30)(971,`tr`,14)(972,`th`,31)(973,`div`,16)(974,`h4`)(975,`span`,17),cN(976,` showAdditionalHelp `),ag()()()()(),Tl(977,`tr`,21)(978,`td`,21)(979,`p`),cN(980,`Método que exibe `),Tl(981,`code`),cN(982,`p-helper`),ag(),cN(983,` ou executa a ação definida em `),Tl(984,`code`),cN(985,`p-helper{eventOnClick}`),ag(),cN(986,` ou em `),Tl(987,`code`),cN(988,`p-additionalHelp`),ag(),cN(989,`.`),ag()()()(),Gl(990,`br`),Tl(991,`h3`),cN(992,`Enums`),ag(),Tl(993,`h4`,4)(994,`code`,5),cN(995,`PoTimepickerModelFormat`),ag()(),Tl(996,`div`,2)(997,`p`)(998,`em`),cN(999,`Enum`),ag(),cN(1e3,` que define o padrão de formatação do model de saída do timepicker.`),ag()(),Tl(1001,`h4`,10),cN(1002,`Propriedades`),ag(),Tl(1003,`table`,11)(1004,`tr`,12)(1005,`th`,13),cN(1006,`Nome`),ag(),Tl(1007,`th`,13),cN(1008,`Descrição`),ag()(),Tl(1009,`tr`,14)(1010,`td`,15)(1011,`div`,16)(1012,`span`,17),cN(1013,` HourMinute`),Gl(1014,`br`),ag()()(),Tl(1015,`td`,21)(1016,`p`),cN(1017,`Formato básico `),Tl(1018,`code`),cN(1019,`HH:mm`),ag(),cN(1020,` (ex: `),Tl(1021,`code`),cN(1022,`14:30`),ag(),cN(1023,`).`),ag()()(),Tl(1024,`tr`,14)(1025,`td`,15)(1026,`div`,16)(1027,`span`,17),cN(1028,` HourMinuteSecond`),Gl(1029,`br`),ag()()(),Tl(1030,`td`,21)(1031,`p`),cN(1032,`Formato com segundos `),Tl(1033,`code`),cN(1034,`HH:mm:ss`),ag(),cN(1035,` (ex: `),Tl(1036,`code`),cN(1037,`14:30:00`),ag(),cN(1038,`).`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var Ve=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(w(Xn),w(Cn))};static ɵcmp=Un({type:l,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Timepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-timepicker-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-timepicker-basic-view`)(6,`sample-po-timepicker-labs-view`)(7,`sample-po-timepicker-scheduling-view`)(8,`sample-po-timepicker-business-hours-view`),ag()()()),r&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ce,he,Ee,fe,ve],encapsulation:2,changeDetection:1})}return l})()}];var xe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[bL.forChild(Ve),bL]})}return l})();var Ct=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[ar,xe]})}return l})();export{Ct as DocPoTimepickerModule};