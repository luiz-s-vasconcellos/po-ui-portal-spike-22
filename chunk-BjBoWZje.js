import{$r as Zn,Bn as zu,Br as Sx,Ct as Wte,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,On as tb,Pi as mt,Ri as nu,Rt as _oe,Si as iu,Vi as p,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,i as _a,ir as EF,ji as mO,mn as ni,ni as _o,pa as wg,r as Ta,rt as Ote,sa as vo,sn as kie,ta as ue,ua as wK,un as m5,ur as Fx,ut as Rte,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var se=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`timepicker`,`p-label`,`PO Timepicker`]],template:function(r,i){r&1&&nu(0,`po-timepicker`,0)},dependencies:[kie],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l});var ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Timepicker Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-timepicker-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Te,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,se],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:`HourMinute`,value:tb.HourMinute},{label:`HourMinuteSecond`,value:tb.HourMinuteSecond}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`},{value:`appendInBody`,label:`Append In Body`}];formatOptions=[{label:`24`,value:`24`},{label:`12`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`timepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-format`,`p-helper`,`p-help`,`p-model-format`,`p-label`,`p-locale`,`p-max-time`,`p-min-time`,`p-minute-interval`,`p-second-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-show-seconds`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-append-in-body`,`p-error-limit`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helper`,`p-clean`,``,`p-label`,`Helper`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`format`,`p-columns`,`4`,`p-label`,`Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`modelFormat`,`p-columns`,`4`,`p-label`,`Model Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Sx();jc(0,`po-timepicker`,1),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.timepicker,o)||(i.timepicker=o),v_(o)}),mt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3)(4,`po-info`,4),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.label,o)||(i.label=o),v_(o)}),wg(),jc(9,`po-input`,6),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.help,o)||(i.help=o),v_(o)}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.helper,o)||(i.helper=o),v_(o)}),wg(),jc(11,`po-input`,8),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.placeholder,o)||(i.placeholder=o),v_(o)}),wg(),jc(12,`po-input`,9),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.errorPattern,o)||(i.errorPattern=o),v_(o)}),wg(),jc(13,`po-timepicker`,10),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.minTime,o)||(i.minTime=o),v_(o)}),wg(),jc(14,`po-timepicker`,11),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.maxTime,o)||(i.maxTime=o),v_(o)}),wg(),jc(15,`po-number`,12),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.minuteInterval,o)||(i.minuteInterval=o),v_(o)}),wg(),jc(16,`po-number`,13),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.secondInterval,o)||(i.secondInterval=o),v_(o)}),wg(),jc(17,`po-checkbox-group`,14),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.properties,o)||(i.properties=o),v_(o)}),wg(),jc(18,`po-radio-group`,15),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.locale,o)||(i.locale=o),v_(o)}),wg(),jc(19,`po-radio-group`,16),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.format,o)||(i.format=o),v_(o)}),wg(),jc(20,`po-radio-group`,17),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.modelFormat,o)||(i.modelFormat=o),v_(o)}),wg(),jc(21,`po-radio-group`,18),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.size,o)||(i.size=o),v_(o)}),wg(),jc(22,`div`,2)(23,`po-button`,19),mt(`p-click`,function(){return i.restore()}),wg()()()}r&2&&(ib(`ngModel`,i.timepicker),jE(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-format`,i.format)(`p-helper`,i.helper)(`p-help`,i.help)(`p-model-format`,i.modelFormat)(`p-label`,i.label)(`p-locale`,i.locale)(`p-max-time`,i.maxTime)(`p-min-time`,i.minTime)(`p-minute-interval`,i.minuteInterval)(`p-second-interval`,i.secondInterval)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-seconds`,i.properties.includes(`showSeconds`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-append-in-body`,i.properties?.includes(`appendInBody`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-size`,i.size),t0(),rg(3),jE(`p-value`,i.timepicker),rg(),jE(`p-value`,i.event),rg(4),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.help),t0(),rg(),ib(`ngModel`,i.helper),t0(),rg(),ib(`ngModel`,i.placeholder),t0(),rg(),ib(`ngModel`,i.errorPattern),t0(),rg(),ib(`ngModel`,i.minTime),t0(),rg(),ib(`ngModel`,i.maxTime),t0(),rg(),ib(`ngModel`,i.minuteInterval),t0(),rg(),ib(`ngModel`,i.secondInterval),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.locale),jE(`p-options`,i.localeOptions),t0(),rg(),ib(`ngModel`,i.format),jE(`p-options`,i.formatOptions),t0(),rg(),ib(`ngModel`,i.modelFormat),jE(`p-options`,i.modelFormatOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,doe,Ote,kie,_oe],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Timepicker Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-timepicker
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-timepicker-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,_e,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ge],encapsulation:2,changeDetection:1})}return l})();var Pe=[`formScheduling`];var Se=(()=>{class l{poDialog=p(Wte);poNotification=p(zu);formScheduling;title=``;date=new Date;startTime=``;endTime=``;room=``;roomOptions=[{value:`sala-a`,label:`Sala A`},{value:`sala-b`,label:`Sala B`},{value:`sala-c`,label:`Sala C`},{value:`auditorio`,label:`Auditório`}];schedule(){let d=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:d,confirm:()=>{this.poNotification.success(`Agendamento confirmado com sucesso!`),this.formScheduling.reset({date:``,room:``})},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getFormatedDate(d){return d&&d.slice(0,10)}getRoomLabel(){let d=this.roomOptions.find(r=>r.value===this.room);return d?d.label:this.room}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-scheduling`]],viewQuery:function(r,i){if(r&1&&iu(Pe,7),r&2){let s;vo(s=_o())&&(i.formScheduling=s.first)}},standalone:!1,decls:11,vars:9,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`title`,`p-label`,`Título do agendamento`,`p-placeholder`,`Ex: Reunião de planejamento`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`date`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Data`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`startTime`,`p-label`,`Horário de início`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`endTime`,`p-label`,`Horário de término`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`room`,`p-label`,`Sala`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`scheduleButton`,`p-label`,`Agendar`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=Sx();jc(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.title,o)||(i.title=o),v_(o)}),wg(),jc(4,`po-datepicker`,3),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.date,o)||(i.date=o),v_(o)}),wg()(),jc(5,`div`,1)(6,`po-timepicker`,4),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.startTime,o)||(i.startTime=o),v_(o)}),wg(),jc(7,`po-timepicker`,5),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.endTime,o)||(i.endTime=o),v_(o)}),wg(),jc(8,`po-select`,6),JN(),ob(`ngModelChange`,function(o){return y_(s),sO(i.room,o)||(i.room=o),v_(o)}),wg()(),jc(9,`div`,1)(10,`po-button`,7),mt(`p-click`,function(){return i.schedule()}),wg()()()}if(r&2){let s=Fx(1);rg(3),ib(`ngModel`,i.title),t0(),rg(),ib(`ngModel`,i.date),t0(),rg(2),ib(`ngModel`,i.startTime),jE(`p-show-required`,!0),t0(),rg(),ib(`ngModel`,i.endTime),jE(`p-show-required`,!0),t0(),rg(),ib(`ngModel`,i.room),jE(`p-options`,i.roomOptions),t0(),rg(2),jE(`p-disabled`,s.invalid)}},dependencies:[wK,CK,EK,TF,EF,ni,Rte,A5,moe,kie],encapsulation:2,changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l});var Ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-scheduling-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Timepicker - Scheduling`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form #formScheduling="ngForm">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-timepicker-scheduling`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,He,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Se],encapsulation:2,changeDetection:1})}return l})();var be=(()=>{class l{poNotification=p(zu);openTime=`08:00`;closeTime=`18:00`;lunchStart=`12:00`;lunchEnd=`13:00`;save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-business-hours`]],standalone:!1,decls:8,vars:14,consts:[[1,`po-row`],[`name`,`openTime`,`p-label`,`Abertura`,`p-clean`,``,`p-min-time`,`06:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-time`,`p-minute-interval`],[`name`,`closeTime`,`p-label`,`Fechamento`,`p-clean`,``,`p-max-time`,`23:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-minute-interval`],[`name`,`lunchStart`,`p-label`,`Início do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`name`,`lunchEnd`,`p-label`,`Fim do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`p-label`,`Salvar`,`p-kind`,`primary`,1,`po-md-3`,`po-offset-md-9`,3,`p-click`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`po-timepicker`,1),JN(),ob(`ngModelChange`,function(p){return sO(i.openTime,p)||(i.openTime=p),p}),wg(),jc(2,`po-timepicker`,2),JN(),ob(`ngModelChange`,function(p){return sO(i.closeTime,p)||(i.closeTime=p),p}),wg()(),jc(3,`div`,0)(4,`po-timepicker`,3),JN(),ob(`ngModelChange`,function(p){return sO(i.lunchStart,p)||(i.lunchStart=p),p}),wg(),jc(5,`po-timepicker`,4),JN(),ob(`ngModelChange`,function(p){return sO(i.lunchEnd,p)||(i.lunchEnd=p),p}),wg()(),jc(6,`div`,0)(7,`po-button`,5),mt(`p-click`,function(){return i.save()}),wg()()),r&2&&(rg(),ib(`ngModel`,i.openTime),jE(`p-max-time`,i.lunchStart)(`p-minute-interval`,30),t0(),rg(),ib(`ngModel`,i.closeTime),jE(`p-min-time`,i.lunchEnd)(`p-minute-interval`,30),t0(),rg(2),ib(`ngModel`,i.lunchStart),jE(`p-min-time`,i.openTime)(`p-max-time`,i.lunchEnd)(`p-minute-interval`,15),t0(),rg(),ib(`ngModel`,i.lunchEnd),jE(`p-min-time`,i.lunchStart)(`p-max-time`,i.closeTime)(`p-minute-interval`,15),t0())},dependencies:[CK,TF,ni,kie],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l});var fe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-business-hours-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Timepicker - Business Hours`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-timepicker-business-hours`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Be,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,be],encapsulation:2,changeDetection:1})}return l})();var ve=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-timepicker-doc`]],standalone:!1,decls:1039,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoTimepickerComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`O `),jc(24,`code`),iO(25,`po-timepicker`),wg(),iO(26,` é um componente para seleção de horário que permite a digitação e/ou seleção via painel flutuante.`),wg(),jc(27,`p`),iO(28,`O formato de exibição do horário pode ser de 24 horas (`),jc(29,`code`),iO(30,`HH:mm`),wg(),iO(31,`) ou 12 horas (`),jc(32,`code`),iO(33,`hh:mm AM/PM`),wg(),iO(34,`),
e opcionalmente incluir segundos (`),jc(35,`code`),iO(36,`HH:mm:ss`),wg(),iO(37,`).`),wg(),jc(38,`p`),iO(39,`O valor de saída segue o formato ISO 8601 para horários (`),jc(40,`code`),iO(41,`HH:mm`),wg(),iO(42,` ou `),jc(43,`code`),iO(44,`HH:mm:ss`),wg(),iO(45,`).`),wg(),jc(46,`p`)(47,`strong`),iO(48,`Importante:`),wg()(),jc(49,`ul`)(50,`li`),iO(51,`Caso o valor digitado seja inválido, o `),jc(52,`code`),iO(53,`model`),wg(),iO(54,` receberá uma string vazia.`),wg(),jc(55,`li`),iO(56,`Caso o `),jc(57,`code`),iO(58,`input`),wg(),iO(59,` esteja passando um `),jc(60,`code`),iO(61,`[(ngModel)]`),wg(),iO(62,`, mas não tenha um `),jc(63,`code`),iO(64,`name`),wg(),iO(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),jc(66,`code`),iO(67,`[ngModelOptions]="{standalone: true}"`),wg(),iO(68,`).`),wg()(),jc(69,`blockquote`)(70,`p`),iO(71,`Não esqueça de importar o `),jc(72,`code`),iO(73,`FormsModule`),wg(),iO(74,` em seu módulo, tal como para utilizar o `),jc(75,`code`),iO(76,`input default`),wg(),iO(77,`.`),wg()(),jc(78,`h4`),iO(79,`Tokens customizáveis`),wg(),jc(80,`p`),iO(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),jc(82,`code`),iO(83,`.po-input`),wg()(),jc(84,`blockquote`)(85,`p`),iO(86,`Para maiores informações, acesse o guia `),jc(87,`a`,6),iO(88,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(89,`.`),wg()(),jc(90,`table`)(91,`thead`)(92,`tr`)(93,`th`),iO(94,`Propriedade`),wg(),jc(95,`th`),iO(96,`Descrição`),wg(),jc(97,`th`),iO(98,`Valor Padrão`),wg()()(),jc(99,`tbody`)(100,`tr`)(101,`td`)(102,`strong`),iO(103,`Default Values`),wg()(),nu(104,`td`)(105,`td`),wg(),jc(106,`tr`)(107,`td`)(108,`code`),iO(109,`--font-family`),wg()(),jc(110,`td`),iO(111,`Família tipográfica usada`),wg(),jc(112,`td`)(113,`code`),iO(114,`var(--font-family-theme)`),wg()()(),jc(115,`tr`)(116,`td`)(117,`code`),iO(118,`--font-size`),wg()(),jc(119,`td`),iO(120,`Tamanho da fonte`),wg(),jc(121,`td`)(122,`code`),iO(123,`var(--font-size-default)`),wg()()(),jc(124,`tr`)(125,`td`)(126,`code`),iO(127,`--text-color-placeholder`),wg()(),jc(128,`td`),iO(129,`Cor do texto placeholder`),wg(),jc(130,`td`)(131,`code`),iO(132,`var(--color-neutral-light-30)`),wg()()(),jc(133,`tr`)(134,`td`)(135,`code`),iO(136,`--color`),wg()(),jc(137,`td`),iO(138,`Cor principal do timepicker`),wg(),jc(139,`td`)(140,`code`),iO(141,`var(--color-neutral-dark-70)`),wg()()(),jc(142,`tr`)(143,`td`)(144,`code`),iO(145,`--background`),wg()(),jc(146,`td`),iO(147,`Cor de background`),wg(),jc(148,`td`)(149,`code`),iO(150,`var(--color-neutral-light-05)`),wg()()(),jc(151,`tr`)(152,`td`)(153,`code`),iO(154,`--padding`),wg()(),jc(155,`td`),iO(156,`Preenchimento`),wg(),jc(157,`td`)(158,`code`),iO(159,`0 0.5rem`),wg()()(),jc(160,`tr`)(161,`td`)(162,`code`),iO(163,`--text-color`),wg()(),jc(164,`td`),iO(165,`Cor do texto`),wg(),jc(166,`td`)(167,`code`),iO(168,`var(--color-neutral-dark-90)`),wg()()(),jc(169,`tr`)(170,`td`)(171,`code`),iO(172,`--field-container-title-justify`),wg()(),jc(173,`td`),iO(174,`Alinhamento horizontal do título (`),jc(175,`code`),iO(176,`justify-content`),wg(),iO(177,`)`),wg(),jc(178,`td`)(179,`code`),iO(180,`space-between`),wg()()(),jc(181,`tr`)(182,`td`)(183,`code`),iO(184,`--field-container-title-flex`),wg()(),jc(185,`td`),iO(186,`Flex do título (`),jc(187,`code`),iO(188,`flex`),wg(),iO(189,`)`),wg(),jc(190,`td`)(191,`code`),iO(192,`1 auto`),wg()()(),jc(193,`tr`)(194,`td`)(195,`strong`),iO(196,`Hover`),wg()(),nu(197,`td`)(198,`td`),wg(),jc(199,`tr`)(200,`td`)(201,`code`),iO(202,`--color-hover`),wg()(),jc(203,`td`),iO(204,`Cor principal no estado hover`),wg(),jc(205,`td`)(206,`code`),iO(207,`var(--color-brand-01-dark)`),wg()()(),jc(208,`tr`)(209,`td`)(210,`code`),iO(211,`--background-hover`),wg()(),jc(212,`td`),iO(213,`Cor de background no estado hover`),wg(),jc(214,`td`)(215,`code`),iO(216,`var(--color-brand-01-lightest)`),wg()()(),jc(217,`tr`)(218,`td`)(219,`strong`),iO(220,`Focused`),wg()(),nu(221,`td`)(222,`td`),wg(),jc(223,`tr`)(224,`td`)(225,`code`),iO(226,`--color-focused`),wg()(),jc(227,`td`),iO(228,`Cor principal no estado de focus`),wg(),jc(229,`td`)(230,`code`),iO(231,`var(--color-action-default)`),wg()()(),jc(232,`tr`)(233,`td`)(234,`code`),iO(235,`--outline-color-focused`),wg()(),jc(236,`td`),iO(237,`Cor do outline do estado de focus`),wg(),jc(238,`td`)(239,`code`),iO(240,`var(--color-action-focus)`),wg()()(),jc(241,`tr`)(242,`td`)(243,`strong`),iO(244,`Disabled`),wg()(),nu(245,`td`)(246,`td`),wg(),jc(247,`tr`)(248,`td`)(249,`code`),iO(250,`--color-disabled`),wg()(),jc(251,`td`),iO(252,`Cor principal no estado disabled`),wg(),jc(253,`td`)(254,`code`),iO(255,`var(--color-neutral-light-30)`),wg()()(),jc(256,`tr`)(257,`td`)(258,`code`),iO(259,`--background-disabled`),wg()(),jc(260,`td`),iO(261,`Cor de background no estado disabled`),wg(),jc(262,`td`)(263,`code`),iO(264,`var(--color-neutral-light-20)`),wg()()(),jc(265,`tr`)(266,`td`)(267,`code`),iO(268,`--text-color-disabled`),wg()(),jc(269,`td`),iO(270,`Cor do texto no estado disabled`),wg(),jc(271,`td`)(272,`code`),iO(273,`var(--color-neutral-dark-70)`),wg()()()()()(),jc(274,`div`,7)(275,`h4`,8),iO(276,`Seletor`),wg(),jc(277,`pre`,9),iO(278,`<po-timepicker
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
`),wg()(),jc(279,`h4`,10),iO(280,`Propriedades`),wg(),jc(281,`table`,11)(282,`tr`,12)(283,`th`,13),iO(284,`Nome`),wg(),jc(285,`th`,13),iO(286,`Tipo`),wg(),jc(287,`th`,13),iO(288,`Padrão`),wg(),jc(289,`th`,13),iO(290,`Descrição`),wg()(),jc(291,`tr`,14)(292,`td`,15)(293,`div`,16)(294,`span`,17),iO(295,` p-append-in-body`),nu(296,`br`),wg()()(),jc(297,`td`,18)(298,`code`,19),iO(299,`boolean`),wg()(),jc(300,`td`,20)(301,`p`)(302,`code`),iO(303,`false`),wg()()(),jc(304,`td`,21)(305,`em`)(306,`strong`),iO(307,`(opcional)`),wg()(),jc(308,`p`),iO(309,`Define que o painel do timer será incluído no body da página.`),wg()()(),jc(310,`tr`,14)(311,`td`,15)(312,`div`,16)(313,`span`,17),iO(314,` p-auto-focus`),nu(315,`br`),wg()()(),jc(316,`td`,18)(317,`code`,19),iO(318,`boolean`),wg()(),jc(319,`td`,20)(320,`p`)(321,`code`),iO(322,`false`),wg()()(),jc(323,`td`,21)(324,`em`)(325,`strong`),iO(326,`(opcional)`),wg()(),jc(327,`p`),iO(328,`Aplica foco no elemento ao ser iniciado.`),wg()()(),jc(329,`tr`,14)(330,`td`,15)(331,`div`,22)(332,`span`,23),iO(333,` (p-change-model)`),nu(334,`br`),wg()()(),jc(335,`td`,18)(336,`code`,24),iO(337,`EventEmitter`),wg()(),jc(338,`td`,20),iO(339,`-`),wg(),jc(340,`td`,21)(341,`em`)(342,`strong`),iO(343,`(opcional)`),wg()(),jc(344,`p`),iO(345,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(346,`code`),iO(347,`setValue`),wg(),iO(348,`, `),jc(349,`code`),iO(350,`patchValue`),wg(),iO(351,`, carregamento assíncrono).`),wg(),jc(352,`p`),iO(353,`Diferentemente do `),jc(354,`code`),iO(355,`p-change`),wg(),iO(356,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(357,`code`),iO(358,`p-change-model`),wg(),iO(359,` cobre todos os cenários de alteração de valor.`),wg(),jc(360,`p`),iO(361,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(362,`tr`,14)(363,`td`,15)(364,`div`,16)(365,`span`,17),iO(366,`p-clean`),nu(367,`br`),wg()()(),jc(368,`td`,18)(369,`code`,19),iO(370,`boolean`),wg()(),jc(371,`td`,20),iO(372,`-`),wg(),jc(373,`td`,21)(374,`em`)(375,`strong`),iO(376,`(opcional)`),wg()(),jc(377,`p`),iO(378,`Habilita ação para limpar o campo.`),wg()()(),jc(379,`tr`,14)(380,`td`,15)(381,`div`,16)(382,`span`,17),iO(383,` p-compact-label`),nu(384,`br`),wg()()(),jc(385,`td`,18)(386,`code`,19),iO(387,`boolean`),wg()(),jc(388,`td`,20)(389,`p`)(390,`code`),iO(391,`false`),wg()()(),jc(392,`td`,21)(393,`em`)(394,`strong`),iO(395,`(opcional)`),wg()(),jc(396,`p`),iO(397,`Define se o título do campo será exibido de forma compacta.`),wg()()(),jc(398,`tr`,14)(399,`td`,15)(400,`div`,16)(401,`span`,17),iO(402,`p-disabled`),nu(403,`br`),wg()()(),jc(404,`td`,18)(405,`code`,19),iO(406,`boolean`),wg()(),jc(407,`td`,20),iO(408,`-`),wg(),jc(409,`td`,21)(410,`em`)(411,`strong`),iO(412,`(opcional)`),wg()(),jc(413,`p`),iO(414,`Desabilita o campo.`),wg()()(),jc(415,`tr`,14)(416,`td`,15)(417,`div`,16)(418,`span`,17),iO(419,` p-error-limit`),nu(420,`br`),wg()()(),jc(421,`td`,18)(422,`code`,19),iO(423,`boolean`),wg()(),jc(424,`td`,20)(425,`p`)(426,`code`),iO(427,`false`),wg()()(),jc(428,`td`,21)(429,`em`)(430,`strong`),iO(431,`(opcional)`),wg()(),jc(432,`p`),iO(433,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg()()(),jc(434,`tr`,14)(435,`td`,15)(436,`div`,16)(437,`span`,17),iO(438,` p-error-pattern`),nu(439,`br`),wg()()(),jc(440,`td`,18)(441,`code`,25),iO(442,`string`),wg()(),jc(443,`td`,20),iO(444,`-`),wg(),jc(445,`td`,21)(446,`em`)(447,`strong`),iO(448,`(opcional)`),wg()(),jc(449,`p`),iO(450,`Mensagem apresentada quando o horário for inválido ou fora do período.`),wg(),jc(451,`blockquote`)(452,`p`),iO(453,`Por padrão, esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja requerido.`),wg()()()(),jc(454,`tr`,14)(455,`td`,15)(456,`div`,16)(457,`span`,17),iO(458,` p-format`),nu(459,`br`),wg()()(),jc(460,`td`,18)(461,`code`,26),iO(462,`PoTimerFormat`),wg()(),jc(463,`td`,20)(464,`p`)(465,`code`),iO(466,`24`),wg()()(),jc(467,`td`,21)(468,`em`)(469,`strong`),iO(470,`(opcional)`),wg()(),jc(471,`p`),iO(472,`Define o formato de exibição do timer.`),wg(),jc(473,`p`),iO(474,`Valores válidos:`),wg(),jc(475,`ul`)(476,`li`)(477,`code`),iO(478,`24`),wg(),iO(479,`: formato de 24 horas (padrão)`),wg(),jc(480,`li`)(481,`code`),iO(482,`12`),wg(),iO(483,`: formato de 12 horas com indicador AM/PM`),wg()()()(),jc(484,`tr`,14)(485,`td`,15)(486,`div`,16)(487,`span`,17),iO(488,` p-help`),nu(489,`br`),wg()()(),jc(490,`td`,18)(491,`code`,25),iO(492,`string`),wg()(),jc(493,`td`,20),iO(494,`-`),wg(),jc(495,`td`,21)(496,`em`)(497,`strong`),iO(498,`(opcional)`),wg()(),jc(499,`p`),iO(500,`Texto de apoio do campo.`),wg()()(),jc(501,`tr`,14)(502,`td`,15)(503,`div`,22)(504,`span`,23),iO(505,` (p-keydown)`),nu(506,`br`),wg()()(),jc(507,`td`,18)(508,`code`,24),iO(509,`EventEmitter`),wg()(),jc(510,`td`,20),iO(511,`-`),wg(),jc(512,`td`,21)(513,`p`),iO(514,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),wg()()(),jc(515,`tr`,14)(516,`td`,15)(517,`div`,16)(518,`span`,17),iO(519,` p-label`),nu(520,`br`),wg()()(),jc(521,`td`,18)(522,`code`,25),iO(523,`string`),wg()(),jc(524,`td`,20),iO(525,`-`),wg(),jc(526,`td`,21)(527,`em`)(528,`strong`),iO(529,`(opcional)`),wg()(),jc(530,`p`),iO(531,`Rótulo do campo.`),wg()()(),jc(532,`tr`,14)(533,`td`,15)(534,`div`,16)(535,`span`,17),iO(536,` p-label-text-wrap`),nu(537,`br`),wg()()(),jc(538,`td`,18)(539,`code`,19),iO(540,`boolean`),wg()(),jc(541,`td`,20)(542,`p`)(543,`code`),iO(544,`false`),wg()()(),jc(545,`td`,21)(546,`em`)(547,`strong`),iO(548,`(opcional)`),wg()(),jc(549,`p`),iO(550,`Habilita a quebra automática do texto da propriedade `),jc(551,`code`),iO(552,`p-label`),wg(),iO(553,`.`),wg()()(),jc(554,`tr`,14)(555,`td`,15)(556,`div`,16)(557,`span`,17),iO(558,` p-loading`),nu(559,`br`),wg()()(),jc(560,`td`,18)(561,`code`,19),iO(562,`boolean`),wg()(),jc(563,`td`,20)(564,`p`)(565,`code`),iO(566,`false`),wg()()(),jc(567,`td`,21)(568,`em`)(569,`strong`),iO(570,`(opcional)`),wg()(),jc(571,`p`),iO(572,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(573,`tr`,14)(574,`td`,15)(575,`div`,16)(576,`span`,17),iO(577,` p-locale`),nu(578,`br`),wg()()(),jc(579,`td`,18)(580,`code`,25),iO(581,`string`),wg()(),jc(582,`td`,20),iO(583,`-`),wg(),jc(584,`td`,21)(585,`em`)(586,`strong`),iO(587,`(opcional)`),wg()(),jc(588,`p`),iO(589,`Idioma do componente.`),wg()()(),jc(590,`tr`,14)(591,`td`,15)(592,`div`,16)(593,`span`,17),iO(594,` p-max-time`),nu(595,`br`),wg()()(),jc(596,`td`,18)(597,`code`,25),iO(598,`string`),wg()(),jc(599,`td`,20),iO(600,`-`),wg(),jc(601,`td`,21)(602,`em`)(603,`strong`),iO(604,`(opcional)`),wg()(),jc(605,`p`),iO(606,`Define o horário máximo permitido. Formato: `),jc(607,`code`),iO(608,`HH:mm`),wg(),iO(609,` ou `),jc(610,`code`),iO(611,`HH:mm:ss`),wg(),iO(612,`.`),wg()()(),jc(613,`tr`,14)(614,`td`,15)(615,`div`,16)(616,`span`,17),iO(617,` p-min-time`),nu(618,`br`),wg()()(),jc(619,`td`,18)(620,`code`,25),iO(621,`string`),wg()(),jc(622,`td`,20),iO(623,`-`),wg(),jc(624,`td`,21)(625,`em`)(626,`strong`),iO(627,`(opcional)`),wg()(),jc(628,`p`),iO(629,`Define o horário mínimo permitido. Formato: `),jc(630,`code`),iO(631,`HH:mm`),wg(),iO(632,` ou `),jc(633,`code`),iO(634,`HH:mm:ss`),wg(),iO(635,`.`),wg()()(),jc(636,`tr`,14)(637,`td`,15)(638,`div`,16)(639,`span`,17),iO(640,` p-minute-interval`),nu(641,`br`),wg()()(),jc(642,`td`,18)(643,`code`,27),iO(644,`number`),wg()(),jc(645,`td`,20)(646,`p`)(647,`code`),iO(648,`5`),wg()()(),jc(649,`td`,21)(650,`em`)(651,`strong`),iO(652,`(opcional)`),wg()(),jc(653,`p`),iO(654,`Define o intervalo entre os minutos exibidos no painel.`),wg()()(),jc(655,`tr`,14)(656,`td`,15)(657,`div`,16)(658,`span`,17),iO(659,` p-model-format`),nu(660,`br`),wg()()(),jc(661,`td`,18)(662,`code`,28),iO(663,`PoTimepickerModelFormat`),wg()(),jc(664,`td`,20),iO(665,`-`),wg(),jc(666,`td`,21)(667,`em`)(668,`strong`),iO(669,`(opcional)`),wg()(),jc(670,`p`),iO(671,`Padrão de formatação para saída do `),jc(672,`em`),iO(673,`model`),wg(),iO(674,`.`),wg(),jc(675,`blockquote`)(676,`p`),iO(677,`Veja os valores válidos no `),jc(678,`em`),iO(679,`enum`),wg(),jc(680,`code`),iO(681,`PoTimepickerModelFormat`),wg(),iO(682,`.`),wg()()()(),jc(683,`tr`,14)(684,`td`,15)(685,`div`,16)(686,`span`,17),iO(687,` name`),nu(688,`br`),wg()()(),jc(689,`td`,18)(690,`code`,25),iO(691,`string`),wg()(),jc(692,`td`,20),iO(693,`-`),wg(),jc(694,`td`,21)(695,`p`),iO(696,`Nome do componente.`),wg()()(),jc(697,`tr`,14)(698,`td`,15)(699,`div`,16)(700,`span`,17),iO(701,` p-no-autocomplete`),nu(702,`br`),wg()()(),jc(703,`td`,18)(704,`code`,19),iO(705,`boolean`),wg()(),jc(706,`td`,20)(707,`p`)(708,`code`),iO(709,`false`),wg()()(),jc(710,`td`,21)(711,`em`)(712,`strong`),iO(713,`(opcional)`),wg()(),jc(714,`p`),iO(715,`Define a propriedade nativa `),jc(716,`code`),iO(717,`autocomplete`),wg(),iO(718,` do campo como `),jc(719,`code`),iO(720,`off`),wg(),iO(721,`.`),wg()()(),jc(722,`tr`,14)(723,`td`,15)(724,`div`,22)(725,`span`,23),iO(726,` (p-blur)`),nu(727,`br`),wg()()(),jc(728,`td`,18)(729,`code`,24),iO(730,`EventEmitter`),wg()(),jc(731,`td`,20),iO(732,`-`),wg(),jc(733,`td`,21)(734,`p`),iO(735,`Evento disparado ao sair do campo.`),wg()()(),jc(736,`tr`,14)(737,`td`,15)(738,`div`,22)(739,`span`,23),iO(740,` (p-change)`),nu(741,`br`),wg()()(),jc(742,`td`,18)(743,`code`,24),iO(744,`EventEmitter`),wg()(),jc(745,`td`,20),iO(746,`-`),wg(),jc(747,`td`,21)(748,`p`),iO(749,`Evento disparado ao alterar valor do campo.`),wg()()(),jc(750,`tr`,14)(751,`td`,15)(752,`div`,16)(753,`span`,17),iO(754,` p-optional`),nu(755,`br`),wg()()(),jc(756,`td`,18)(757,`code`,19),iO(758,`boolean`),wg()(),jc(759,`td`,20)(760,`p`)(761,`code`),iO(762,`false`),wg()()(),jc(763,`td`,21)(764,`em`)(765,`strong`),iO(766,`(opcional)`),wg()(),jc(767,`p`),iO(768,`Define se a indicação de campo opcional será exibida.`),wg()()(),jc(769,`tr`,14)(770,`td`,15)(771,`div`,16)(772,`span`,17),iO(773,` p-placeholder`),nu(774,`br`),wg()()(),jc(775,`td`,18)(776,`code`,25),iO(777,`string`),wg()(),jc(778,`td`,20),iO(779,`-`),wg(),jc(780,`td`,21)(781,`em`)(782,`strong`),iO(783,`(opcional)`),wg()(),jc(784,`p`),iO(785,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),wg(),jc(786,`p`),iO(787,`Para personalizar os segmentos, informe o valor no formato `),jc(788,`code`),iO(789,`HH:mm`),wg(),iO(790,` ou `),jc(791,`code`),iO(792,`HH:mm:ss`),wg(),iO(793,`.`),wg()()(),jc(794,`tr`,14)(795,`td`,15)(796,`div`,16)(797,`span`,17),iO(798,` p-helper`),nu(799,`br`),wg()()(),jc(800,`td`,18)(801,`code`,29),iO(802,`PoHelperOptions `),wg(),jc(803,`code`,25),iO(804,` string`),wg()(),jc(805,`td`,20),iO(806,`-`),wg(),jc(807,`td`,21)(808,`em`)(809,`strong`),iO(810,`(opcional)`),wg()(),jc(811,`p`),iO(812,`Define as opções do componente de ajuda (po-helper).`),wg()()(),jc(813,`tr`,14)(814,`td`,15)(815,`div`,16)(816,`span`,17),iO(817,`p-readonly`),nu(818,`br`),wg()()(),jc(819,`td`,18)(820,`code`,19),iO(821,`boolean`),wg()(),jc(822,`td`,20),iO(823,`-`),wg(),jc(824,`td`,21)(825,`em`)(826,`strong`),iO(827,`(opcional)`),wg()(),jc(828,`p`),iO(829,`Torna o elemento somente leitura.`),wg()()(),jc(830,`tr`,14)(831,`td`,15)(832,`div`,16)(833,`span`,17),iO(834,`p-required`),nu(835,`br`),wg()()(),jc(836,`td`,18)(837,`code`,19),iO(838,`boolean`),wg()(),jc(839,`td`,20)(840,`p`)(841,`code`),iO(842,`false`),wg()()(),jc(843,`td`,21)(844,`em`)(845,`strong`),iO(846,`(opcional)`),wg()(),jc(847,`p`),iO(848,`Define que o campo será obrigatório.`),wg()()(),jc(849,`tr`,14)(850,`td`,15)(851,`div`,16)(852,`span`,17),iO(853,` p-second-interval`),nu(854,`br`),wg()()(),jc(855,`td`,18)(856,`code`,27),iO(857,`number`),wg()(),jc(858,`td`,20)(859,`p`)(860,`code`),iO(861,`1`),wg()()(),jc(862,`td`,21)(863,`em`)(864,`strong`),iO(865,`(opcional)`),wg()(),jc(866,`p`),iO(867,`Define o intervalo entre os segundos exibidos no painel.`),wg()()(),jc(868,`tr`,14)(869,`td`,15)(870,`div`,16)(871,`span`,17),iO(872,` p-required-field-error-message`),nu(873,`br`),wg()()(),jc(874,`td`,18)(875,`code`,19),iO(876,`boolean`),wg()(),jc(877,`td`,20)(878,`p`)(879,`code`),iO(880,`false`),wg()()(),jc(881,`td`,21)(882,`em`)(883,`strong`),iO(884,`(opcional)`),wg()(),jc(885,`p`),iO(886,`Exibe a mensagem setada na propriedade `),jc(887,`code`),iO(888,`p-error-pattern`),wg(),iO(889,` se o campo estiver vazio e for requerido.`),wg()()(),jc(890,`tr`,14)(891,`td`,15)(892,`div`,16)(893,`span`,17),iO(894,` p-show-required`),nu(895,`br`),wg()()(),jc(896,`td`,18)(897,`code`,19),iO(898,`boolean`),wg()(),jc(899,`td`,20),iO(900,`-`),wg(),jc(901,`td`,21)(902,`p`),iO(903,`Define se a indicação de campo obrigatório será exibida.`),wg()()(),jc(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),iO(908,` p-show-seconds`),nu(909,`br`),wg()()(),jc(910,`td`,18)(911,`code`,19),iO(912,`boolean`),wg()(),jc(913,`td`,20)(914,`p`)(915,`code`),iO(916,`false`),wg()()(),jc(917,`td`,21)(918,`em`)(919,`strong`),iO(920,`(opcional)`),wg()(),jc(921,`p`),iO(922,`Exibe a coluna de segundos no painel.`),wg()()(),jc(923,`tr`,14)(924,`td`,15)(925,`div`,16)(926,`span`,17),iO(927,` p-size`),nu(928,`br`),wg()()(),jc(929,`td`,18)(930,`code`,25),iO(931,`string`),wg()(),jc(932,`td`,20)(933,`p`)(934,`code`),iO(935,`medium`),wg()()(),jc(936,`td`,21)(937,`em`)(938,`strong`),iO(939,`(opcional)`),wg()(),jc(940,`p`),iO(941,`Define o tamanho do componente:`),wg(),jc(942,`ul`)(943,`li`)(944,`code`),iO(945,`small`),wg(),iO(946,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(947,`li`)(948,`code`),iO(949,`medium`),wg(),iO(950,`: altura do input como 44px.`),wg()()()()(),jc(951,`h3`,10),iO(952,`Métodos`),wg(),jc(953,`table`,30)(954,`tr`,14)(955,`th`,31)(956,`div`,16)(957,`h4`)(958,`span`,17),iO(959,` focus `),wg()()()()(),jc(960,`tr`,21)(961,`td`,21)(962,`p`),iO(963,`Função que atribui foco ao componente.`),wg(),jc(964,`p`),iO(965,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(966,`pre`)(967,`code`),iO(968,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),wg()()()()(),nu(969,`br`),jc(970,`table`,30)(971,`tr`,14)(972,`th`,31)(973,`div`,16)(974,`h4`)(975,`span`,17),iO(976,` showAdditionalHelp `),wg()()()()(),jc(977,`tr`,21)(978,`td`,21)(979,`p`),iO(980,`Método que exibe `),jc(981,`code`),iO(982,`p-helper`),wg(),iO(983,` ou executa a ação definida em `),jc(984,`code`),iO(985,`p-helper{eventOnClick}`),wg(),iO(986,` ou em `),jc(987,`code`),iO(988,`p-additionalHelp`),wg(),iO(989,`.`),wg()()()(),nu(990,`br`),jc(991,`h3`),iO(992,`Enums`),wg(),jc(993,`h4`,4)(994,`code`,5),iO(995,`PoTimepickerModelFormat`),wg()(),jc(996,`div`,2)(997,`p`)(998,`em`),iO(999,`Enum`),wg(),iO(1e3,` que define o padrão de formatação do model de saída do timepicker.`),wg()(),jc(1001,`h4`,10),iO(1002,`Propriedades`),wg(),jc(1003,`table`,11)(1004,`tr`,12)(1005,`th`,13),iO(1006,`Nome`),wg(),jc(1007,`th`,13),iO(1008,`Descrição`),wg()(),jc(1009,`tr`,14)(1010,`td`,15)(1011,`div`,16)(1012,`span`,17),iO(1013,` HourMinute`),nu(1014,`br`),wg()()(),jc(1015,`td`,21)(1016,`p`),iO(1017,`Formato básico `),jc(1018,`code`),iO(1019,`HH:mm`),wg(),iO(1020,` (ex: `),jc(1021,`code`),iO(1022,`14:30`),wg(),iO(1023,`).`),wg()()(),jc(1024,`tr`,14)(1025,`td`,15)(1026,`div`,16)(1027,`span`,17),iO(1028,` HourMinuteSecond`),nu(1029,`br`),wg()()(),jc(1030,`td`,21)(1031,`p`),iO(1032,`Formato com segundos `),jc(1033,`code`),iO(1034,`HH:mm:ss`),wg(),iO(1035,` (ex: `),jc(1036,`code`),iO(1037,`14:30:00`),wg(),iO(1038,`).`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return l})();var Ve=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(b(ir),b(Sn))};static ɵcmp=Zn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Timepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-timepicker-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-timepicker-basic-view`)(6,`sample-po-timepicker-labs-view`)(7,`sample-po-timepicker-scheduling-view`)(8,`sample-po-timepicker-business-hours-view`),wg()()()),r&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ce,he,Ee,fe,ve],encapsulation:2,changeDetection:1})}return l})()}];var xe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe({type:l});static ɵinj=ue({imports:[C1.forChild(Ve),C1]})}return l})();var Ct=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe({type:l});static ɵinj=ue({imports:[Ta,xe]})}return l})();export{Ct as DocPoTimepickerModule};