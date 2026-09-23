import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Jt as e_e,Ki as lo,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he$1,Nt as Y0e,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,st as N_e,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wi as f,wt as Uy}from"./main-NT5YGKBQ.js";var se=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`timepicker`,`p-label`,`PO Timepicker`]],template:function(r,i){r&1&&ql(0,`po-timepicker`,0)},dependencies:[N_e],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l});var ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Timepicker Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-timepicker-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Te,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,se],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:`HourMinute`,value:Uy.HourMinute},{label:`HourMinuteSecond`,value:Uy.HourMinuteSecond}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`},{value:`appendInBody`,label:`Append In Body`}];formatOptions=[{label:`24`,value:`24`},{label:`12`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`timepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-format`,`p-helper`,`p-help`,`p-model-format`,`p-label`,`p-locale`,`p-max-time`,`p-min-time`,`p-minute-interval`,`p-second-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-show-seconds`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-append-in-body`,`p-error-limit`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helper`,`p-clean`,``,`p-label`,`Helper`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`format`,`p-columns`,`4`,`p-label`,`Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`modelFormat`,`p-columns`,`4`,`p-label`,`Model Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Vx();Ml(0,`po-timepicker`,1),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.timepicker,o)||(i.timepicker=o),Jy(o)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3)(4,`po-info`,4),lg(),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`po-input`,5),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.label,o)||(i.label=o),Jy(o)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.help,o)||(i.help=o),Jy(o)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.helper,o)||(i.helper=o),Jy(o)}),lg(),f0(),Ml(11,`po-input`,8),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.placeholder,o)||(i.placeholder=o),Jy(o)}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.errorPattern,o)||(i.errorPattern=o),Jy(o)}),lg(),f0(),Ml(13,`po-timepicker`,10),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.minTime,o)||(i.minTime=o),Jy(o)}),lg(),f0(),Ml(14,`po-timepicker`,11),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.maxTime,o)||(i.maxTime=o),Jy(o)}),lg(),f0(),Ml(15,`po-number`,12),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.minuteInterval,o)||(i.minuteInterval=o),Jy(o)}),lg(),f0(),Ml(16,`po-number`,13),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.secondInterval,o)||(i.secondInterval=o),Jy(o)}),lg(),f0(),Ml(17,`po-checkbox-group`,14),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.properties,o)||(i.properties=o),Jy(o)}),lg(),f0(),Ml(18,`po-radio-group`,15),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.locale,o)||(i.locale=o),Jy(o)}),lg(),f0(),Ml(19,`po-radio-group`,16),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.format,o)||(i.format=o),Jy(o)}),lg(),f0(),Ml(20,`po-radio-group`,17),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.modelFormat,o)||(i.modelFormat=o),Jy(o)}),lg(),f0(),Ml(21,`po-radio-group`,18),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.size,o)||(i.size=o),Jy(o)}),lg(),f0(),Ml(22,`div`,2)(23,`po-button`,19),ht(`p-click`,function(){return i.restore()}),lg()()()}r&2&&(Tw(`ngModel`,i.timepicker),cw(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-format`,i.format)(`p-helper`,i.helper)(`p-help`,i.help)(`p-model-format`,i.modelFormat)(`p-label`,i.label)(`p-locale`,i.locale)(`p-max-time`,i.maxTime)(`p-min-time`,i.minTime)(`p-minute-interval`,i.minuteInterval)(`p-second-interval`,i.secondInterval)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-seconds`,i.properties.includes(`showSeconds`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-append-in-body`,i.properties?.includes(`appendInBody`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-size`,i.size),p0(),Up(3),cw(`p-value`,i.timepicker),Up(),cw(`p-value`,i.event),Up(4),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.helper),p0(),Up(),Tw(`ngModel`,i.placeholder),p0(),Up(),Tw(`ngModel`,i.errorPattern),p0(),Up(),Tw(`ngModel`,i.minTime),p0(),Up(),Tw(`ngModel`,i.maxTime),p0(),Up(),Tw(`ngModel`,i.minuteInterval),p0(),Up(),Tw(`ngModel`,i.secondInterval),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.locale),cw(`p-options`,i.localeOptions),p0(),Up(),Tw(`ngModel`,i.format),cw(`p-options`,i.formatOptions),p0(),Up(),Tw(`ngModel`,i.modelFormat),cw(`p-options`,i.modelFormatOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,xbe,q0e,N_e,kbe],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Timepicker Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-timepicker
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-timepicker-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,_e,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ge],encapsulation:2,changeDetection:1})}return l})();var Pe=[`formScheduling`];var Se=(()=>{class l{poDialog=f(e_e);poNotification=f(Eu);formScheduling;title=``;date=new Date;startTime=``;endTime=``;room=``;roomOptions=[{value:`sala-a`,label:`Sala A`},{value:`sala-b`,label:`Sala B`},{value:`sala-c`,label:`Sala C`},{value:`auditorio`,label:`Auditório`}];schedule(){let d=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:d,confirm:()=>{this.poNotification.success(`Agendamento confirmado com sucesso!`),this.formScheduling.reset({date:``,room:``})},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getFormatedDate(d){return d&&d.slice(0,10)}getRoomLabel(){let d=this.roomOptions.find(r=>r.value===this.room);return d?d.label:this.room}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-scheduling`]],viewQuery:function(r,i){if(r&1&&Zl(Pe,7),r&2){let s;lo(s=uo())&&(i.formScheduling=s.first)}},standalone:!1,decls:11,vars:9,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`title`,`p-label`,`Título do agendamento`,`p-placeholder`,`Ex: Reunião de planejamento`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`date`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Data`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`startTime`,`p-label`,`Horário de início`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`endTime`,`p-label`,`Horário de término`,`p-placeholder`,`HH:mm`,`p-clean`,``,`p-required`,``,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-error-pattern`,`Horário fora do expediente (08:00 - 18:00)`,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-show-required`],[`name`,`room`,`p-label`,`Sala`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`scheduleButton`,`p-label`,`Agendar`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=Vx();Ml(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.title,o)||(i.title=o),Jy(o)}),lg(),f0(),Ml(4,`po-datepicker`,3),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.date,o)||(i.date=o),Jy(o)}),lg(),f0(),lg(),Ml(5,`div`,1)(6,`po-timepicker`,4),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.startTime,o)||(i.startTime=o),Jy(o)}),lg(),f0(),Ml(7,`po-timepicker`,5),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.endTime,o)||(i.endTime=o),Jy(o)}),lg(),f0(),Ml(8,`po-select`,6),Mw(`ngModelChange`,function(o){return Qy(s),yN(i.room,o)||(i.room=o),Jy(o)}),lg(),f0(),lg(),Ml(9,`div`,1)(10,`po-button`,7),ht(`p-click`,function(){return i.schedule()}),lg()()()}if(r&2){let s=Yx(1);Up(3),Tw(`ngModel`,i.title),p0(),Up(),Tw(`ngModel`,i.date),p0(),Up(2),Tw(`ngModel`,i.startTime),cw(`p-show-required`,!0),p0(),Up(),Tw(`ngModel`,i.endTime),cw(`p-show-required`,!0),p0(),Up(),Tw(`ngModel`,i.room),cw(`p-options`,i.roomOptions),p0(),Up(2),cw(`p-disabled`,s.invalid)}},dependencies:[IY,wY,CY,Vk,kk,Zt,Y0e,lU,Tbe,N_e],encapsulation:2,changeDetection:1})}return l})();var He=l=>({"docs-sample-code-tabs":l});var Ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-scheduling-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Timepicker - Scheduling`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form #formScheduling="ngForm">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-timepicker-scheduling`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,He,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Se],encapsulation:2,changeDetection:1})}return l})();var be=(()=>{class l{poNotification=f(Eu);openTime=`08:00`;closeTime=`18:00`;lunchStart=`12:00`;lunchEnd=`13:00`;save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-business-hours`]],standalone:!1,decls:8,vars:14,consts:[[1,`po-row`],[`name`,`openTime`,`p-label`,`Abertura`,`p-clean`,``,`p-min-time`,`06:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-time`,`p-minute-interval`],[`name`,`closeTime`,`p-label`,`Fechamento`,`p-clean`,``,`p-max-time`,`23:00`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-minute-interval`],[`name`,`lunchStart`,`p-label`,`Início do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`name`,`lunchEnd`,`p-label`,`Fim do almoço`,`p-clean`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-time`,`p-max-time`,`p-minute-interval`],[`p-label`,`Salvar`,`p-kind`,`primary`,1,`po-md-3`,`po-offset-md-9`,3,`p-click`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`po-timepicker`,1),Mw(`ngModelChange`,function(p){return yN(i.openTime,p)||(i.openTime=p),p}),lg(),f0(),Ml(2,`po-timepicker`,2),Mw(`ngModelChange`,function(p){return yN(i.closeTime,p)||(i.closeTime=p),p}),lg(),f0(),lg(),Ml(3,`div`,0)(4,`po-timepicker`,3),Mw(`ngModelChange`,function(p){return yN(i.lunchStart,p)||(i.lunchStart=p),p}),lg(),f0(),Ml(5,`po-timepicker`,4),Mw(`ngModelChange`,function(p){return yN(i.lunchEnd,p)||(i.lunchEnd=p),p}),lg(),f0(),lg(),Ml(6,`div`,0)(7,`po-button`,5),ht(`p-click`,function(){return i.save()}),lg()()),r&2&&(Up(),Tw(`ngModel`,i.openTime),cw(`p-max-time`,i.lunchStart)(`p-minute-interval`,30),p0(),Up(),Tw(`ngModel`,i.closeTime),cw(`p-min-time`,i.lunchEnd)(`p-minute-interval`,30),p0(),Up(2),Tw(`ngModel`,i.lunchStart),cw(`p-min-time`,i.openTime)(`p-max-time`,i.lunchEnd)(`p-minute-interval`,15),p0(),Up(),Tw(`ngModel`,i.lunchEnd),cw(`p-min-time`,i.lunchStart)(`p-max-time`,i.closeTime)(`p-minute-interval`,15),p0())},dependencies:[wY,Vk,Zt,N_e],encapsulation:2,changeDetection:1})}return l})();var Be=l=>({"docs-sample-code-tabs":l});var fe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-business-hours-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Timepicker - Business Hours`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-timepicker-business-hours`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Be,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,be],encapsulation:2,changeDetection:1})}return l})();var ve=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-timepicker-doc`]],standalone:!1,decls:1039,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoTimepickerModelFormat`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoTimepickerComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`O `),Ml(24,`code`),mN(25,`po-timepicker`),lg(),mN(26,` é um componente para seleção de horário que permite a digitação e/ou seleção via painel flutuante.`),lg(),Ml(27,`p`),mN(28,`O formato de exibição do horário pode ser de 24 horas (`),Ml(29,`code`),mN(30,`HH:mm`),lg(),mN(31,`) ou 12 horas (`),Ml(32,`code`),mN(33,`hh:mm AM/PM`),lg(),mN(34,`),
e opcionalmente incluir segundos (`),Ml(35,`code`),mN(36,`HH:mm:ss`),lg(),mN(37,`).`),lg(),Ml(38,`p`),mN(39,`O valor de saída segue o formato ISO 8601 para horários (`),Ml(40,`code`),mN(41,`HH:mm`),lg(),mN(42,` ou `),Ml(43,`code`),mN(44,`HH:mm:ss`),lg(),mN(45,`).`),lg(),Ml(46,`p`)(47,`strong`),mN(48,`Importante:`),lg()(),Ml(49,`ul`)(50,`li`),mN(51,`Caso o valor digitado seja inválido, o `),Ml(52,`code`),mN(53,`model`),lg(),mN(54,` receberá uma string vazia.`),lg(),Ml(55,`li`),mN(56,`Caso o `),Ml(57,`code`),mN(58,`input`),lg(),mN(59,` esteja passando um `),Ml(60,`code`),mN(61,`[(ngModel)]`),lg(),mN(62,`, mas não tenha um `),Ml(63,`code`),mN(64,`name`),lg(),mN(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Ml(66,`code`),mN(67,`[ngModelOptions]="{standalone: true}"`),lg(),mN(68,`).`),lg()(),Ml(69,`blockquote`)(70,`p`),mN(71,`Não esqueça de importar o `),Ml(72,`code`),mN(73,`FormsModule`),lg(),mN(74,` em seu módulo, tal como para utilizar o `),Ml(75,`code`),mN(76,`input default`),lg(),mN(77,`.`),lg()(),Ml(78,`h4`),mN(79,`Tokens customizáveis`),lg(),Ml(80,`p`),mN(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ml(82,`code`),mN(83,`.po-input`),lg()(),Ml(84,`blockquote`)(85,`p`),mN(86,`Para maiores informações, acesse o guia `),Ml(87,`a`,6),mN(88,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(89,`.`),lg()(),Ml(90,`table`)(91,`thead`)(92,`tr`)(93,`th`),mN(94,`Propriedade`),lg(),Ml(95,`th`),mN(96,`Descrição`),lg(),Ml(97,`th`),mN(98,`Valor Padrão`),lg()()(),Ml(99,`tbody`)(100,`tr`)(101,`td`)(102,`strong`),mN(103,`Default Values`),lg()(),ql(104,`td`)(105,`td`),lg(),Ml(106,`tr`)(107,`td`)(108,`code`),mN(109,`--font-family`),lg()(),Ml(110,`td`),mN(111,`Família tipográfica usada`),lg(),Ml(112,`td`)(113,`code`),mN(114,`var(--font-family-theme)`),lg()()(),Ml(115,`tr`)(116,`td`)(117,`code`),mN(118,`--font-size`),lg()(),Ml(119,`td`),mN(120,`Tamanho da fonte`),lg(),Ml(121,`td`)(122,`code`),mN(123,`var(--font-size-default)`),lg()()(),Ml(124,`tr`)(125,`td`)(126,`code`),mN(127,`--text-color-placeholder`),lg()(),Ml(128,`td`),mN(129,`Cor do texto placeholder`),lg(),Ml(130,`td`)(131,`code`),mN(132,`var(--color-neutral-light-30)`),lg()()(),Ml(133,`tr`)(134,`td`)(135,`code`),mN(136,`--color`),lg()(),Ml(137,`td`),mN(138,`Cor principal do timepicker`),lg(),Ml(139,`td`)(140,`code`),mN(141,`var(--color-neutral-dark-70)`),lg()()(),Ml(142,`tr`)(143,`td`)(144,`code`),mN(145,`--background`),lg()(),Ml(146,`td`),mN(147,`Cor de background`),lg(),Ml(148,`td`)(149,`code`),mN(150,`var(--color-neutral-light-05)`),lg()()(),Ml(151,`tr`)(152,`td`)(153,`code`),mN(154,`--padding`),lg()(),Ml(155,`td`),mN(156,`Preenchimento`),lg(),Ml(157,`td`)(158,`code`),mN(159,`0 0.5rem`),lg()()(),Ml(160,`tr`)(161,`td`)(162,`code`),mN(163,`--text-color`),lg()(),Ml(164,`td`),mN(165,`Cor do texto`),lg(),Ml(166,`td`)(167,`code`),mN(168,`var(--color-neutral-dark-90)`),lg()()(),Ml(169,`tr`)(170,`td`)(171,`code`),mN(172,`--field-container-title-justify`),lg()(),Ml(173,`td`),mN(174,`Alinhamento horizontal do título (`),Ml(175,`code`),mN(176,`justify-content`),lg(),mN(177,`)`),lg(),Ml(178,`td`)(179,`code`),mN(180,`space-between`),lg()()(),Ml(181,`tr`)(182,`td`)(183,`code`),mN(184,`--field-container-title-flex`),lg()(),Ml(185,`td`),mN(186,`Flex do título (`),Ml(187,`code`),mN(188,`flex`),lg(),mN(189,`)`),lg(),Ml(190,`td`)(191,`code`),mN(192,`1 auto`),lg()()(),Ml(193,`tr`)(194,`td`)(195,`strong`),mN(196,`Hover`),lg()(),ql(197,`td`)(198,`td`),lg(),Ml(199,`tr`)(200,`td`)(201,`code`),mN(202,`--color-hover`),lg()(),Ml(203,`td`),mN(204,`Cor principal no estado hover`),lg(),Ml(205,`td`)(206,`code`),mN(207,`var(--color-brand-01-dark)`),lg()()(),Ml(208,`tr`)(209,`td`)(210,`code`),mN(211,`--background-hover`),lg()(),Ml(212,`td`),mN(213,`Cor de background no estado hover`),lg(),Ml(214,`td`)(215,`code`),mN(216,`var(--color-brand-01-lightest)`),lg()()(),Ml(217,`tr`)(218,`td`)(219,`strong`),mN(220,`Focused`),lg()(),ql(221,`td`)(222,`td`),lg(),Ml(223,`tr`)(224,`td`)(225,`code`),mN(226,`--color-focused`),lg()(),Ml(227,`td`),mN(228,`Cor principal no estado de focus`),lg(),Ml(229,`td`)(230,`code`),mN(231,`var(--color-action-default)`),lg()()(),Ml(232,`tr`)(233,`td`)(234,`code`),mN(235,`--outline-color-focused`),lg()(),Ml(236,`td`),mN(237,`Cor do outline do estado de focus`),lg(),Ml(238,`td`)(239,`code`),mN(240,`var(--color-action-focus)`),lg()()(),Ml(241,`tr`)(242,`td`)(243,`strong`),mN(244,`Disabled`),lg()(),ql(245,`td`)(246,`td`),lg(),Ml(247,`tr`)(248,`td`)(249,`code`),mN(250,`--color-disabled`),lg()(),Ml(251,`td`),mN(252,`Cor principal no estado disabled`),lg(),Ml(253,`td`)(254,`code`),mN(255,`var(--color-neutral-light-30)`),lg()()(),Ml(256,`tr`)(257,`td`)(258,`code`),mN(259,`--background-disabled`),lg()(),Ml(260,`td`),mN(261,`Cor de background no estado disabled`),lg(),Ml(262,`td`)(263,`code`),mN(264,`var(--color-neutral-light-20)`),lg()()(),Ml(265,`tr`)(266,`td`)(267,`code`),mN(268,`--text-color-disabled`),lg()(),Ml(269,`td`),mN(270,`Cor do texto no estado disabled`),lg(),Ml(271,`td`)(272,`code`),mN(273,`var(--color-neutral-dark-70)`),lg()()()()()(),Ml(274,`div`,7)(275,`h4`,8),mN(276,`Seletor`),lg(),Ml(277,`pre`,9),mN(278,`<po-timepicker
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
`),lg()(),Ml(279,`h4`,10),mN(280,`Propriedades`),lg(),Ml(281,`table`,11)(282,`tr`,12)(283,`th`,13),mN(284,`Nome`),lg(),Ml(285,`th`,13),mN(286,`Tipo`),lg(),Ml(287,`th`,13),mN(288,`Padrão`),lg(),Ml(289,`th`,13),mN(290,`Descrição`),lg()(),Ml(291,`tr`,14)(292,`td`,15)(293,`div`,16)(294,`span`,17),mN(295,` p-append-in-body`),ql(296,`br`),lg()()(),Ml(297,`td`,18)(298,`code`,19),mN(299,`boolean`),lg()(),Ml(300,`td`,20)(301,`p`)(302,`code`),mN(303,`false`),lg()()(),Ml(304,`td`,21)(305,`em`)(306,`strong`),mN(307,`(opcional)`),lg()(),Ml(308,`p`),mN(309,`Define que o painel do timer será incluído no body da página.`),lg()()(),Ml(310,`tr`,14)(311,`td`,15)(312,`div`,16)(313,`span`,17),mN(314,` p-auto-focus`),ql(315,`br`),lg()()(),Ml(316,`td`,18)(317,`code`,19),mN(318,`boolean`),lg()(),Ml(319,`td`,20)(320,`p`)(321,`code`),mN(322,`false`),lg()()(),Ml(323,`td`,21)(324,`em`)(325,`strong`),mN(326,`(opcional)`),lg()(),Ml(327,`p`),mN(328,`Aplica foco no elemento ao ser iniciado.`),lg()()(),Ml(329,`tr`,14)(330,`td`,15)(331,`div`,22)(332,`span`,23),mN(333,` (p-change-model)`),ql(334,`br`),lg()()(),Ml(335,`td`,18)(336,`code`,24),mN(337,`EventEmitter`),lg()(),Ml(338,`td`,20),mN(339,`-`),lg(),Ml(340,`td`,21)(341,`em`)(342,`strong`),mN(343,`(opcional)`),lg()(),Ml(344,`p`),mN(345,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ml(346,`code`),mN(347,`setValue`),lg(),mN(348,`, `),Ml(349,`code`),mN(350,`patchValue`),lg(),mN(351,`, carregamento assíncrono).`),lg(),Ml(352,`p`),mN(353,`Diferentemente do `),Ml(354,`code`),mN(355,`p-change`),lg(),mN(356,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ml(357,`code`),mN(358,`p-change-model`),lg(),mN(359,` cobre todos os cenários de alteração de valor.`),lg(),Ml(360,`p`),mN(361,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),lg()()(),Ml(362,`tr`,14)(363,`td`,15)(364,`div`,16)(365,`span`,17),mN(366,`p-clean`),ql(367,`br`),lg()()(),Ml(368,`td`,18)(369,`code`,19),mN(370,`boolean`),lg()(),Ml(371,`td`,20),mN(372,`-`),lg(),Ml(373,`td`,21)(374,`em`)(375,`strong`),mN(376,`(opcional)`),lg()(),Ml(377,`p`),mN(378,`Habilita ação para limpar o campo.`),lg()()(),Ml(379,`tr`,14)(380,`td`,15)(381,`div`,16)(382,`span`,17),mN(383,` p-compact-label`),ql(384,`br`),lg()()(),Ml(385,`td`,18)(386,`code`,19),mN(387,`boolean`),lg()(),Ml(388,`td`,20)(389,`p`)(390,`code`),mN(391,`false`),lg()()(),Ml(392,`td`,21)(393,`em`)(394,`strong`),mN(395,`(opcional)`),lg()(),Ml(396,`p`),mN(397,`Define se o título do campo será exibido de forma compacta.`),lg()()(),Ml(398,`tr`,14)(399,`td`,15)(400,`div`,16)(401,`span`,17),mN(402,`p-disabled`),ql(403,`br`),lg()()(),Ml(404,`td`,18)(405,`code`,19),mN(406,`boolean`),lg()(),Ml(407,`td`,20),mN(408,`-`),lg(),Ml(409,`td`,21)(410,`em`)(411,`strong`),mN(412,`(opcional)`),lg()(),Ml(413,`p`),mN(414,`Desabilita o campo.`),lg()()(),Ml(415,`tr`,14)(416,`td`,15)(417,`div`,16)(418,`span`,17),mN(419,` p-error-limit`),ql(420,`br`),lg()()(),Ml(421,`td`,18)(422,`code`,19),mN(423,`boolean`),lg()(),Ml(424,`td`,20)(425,`p`)(426,`code`),mN(427,`false`),lg()()(),Ml(428,`td`,21)(429,`em`)(430,`strong`),mN(431,`(opcional)`),lg()(),Ml(432,`p`),mN(433,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg()()(),Ml(434,`tr`,14)(435,`td`,15)(436,`div`,16)(437,`span`,17),mN(438,` p-error-pattern`),ql(439,`br`),lg()()(),Ml(440,`td`,18)(441,`code`,25),mN(442,`string`),lg()(),Ml(443,`td`,20),mN(444,`-`),lg(),Ml(445,`td`,21)(446,`em`)(447,`strong`),mN(448,`(opcional)`),lg()(),Ml(449,`p`),mN(450,`Mensagem apresentada quando o horário for inválido ou fora do período.`),lg(),Ml(451,`blockquote`)(452,`p`),mN(453,`Por padrão, esta mensagem não é apresentada quando o campo estiver vazio, mesmo que ele seja requerido.`),lg()()()(),Ml(454,`tr`,14)(455,`td`,15)(456,`div`,16)(457,`span`,17),mN(458,` p-format`),ql(459,`br`),lg()()(),Ml(460,`td`,18)(461,`code`,26),mN(462,`PoTimerFormat`),lg()(),Ml(463,`td`,20)(464,`p`)(465,`code`),mN(466,`24`),lg()()(),Ml(467,`td`,21)(468,`em`)(469,`strong`),mN(470,`(opcional)`),lg()(),Ml(471,`p`),mN(472,`Define o formato de exibição do timer.`),lg(),Ml(473,`p`),mN(474,`Valores válidos:`),lg(),Ml(475,`ul`)(476,`li`)(477,`code`),mN(478,`24`),lg(),mN(479,`: formato de 24 horas (padrão)`),lg(),Ml(480,`li`)(481,`code`),mN(482,`12`),lg(),mN(483,`: formato de 12 horas com indicador AM/PM`),lg()()()(),Ml(484,`tr`,14)(485,`td`,15)(486,`div`,16)(487,`span`,17),mN(488,` p-help`),ql(489,`br`),lg()()(),Ml(490,`td`,18)(491,`code`,25),mN(492,`string`),lg()(),Ml(493,`td`,20),mN(494,`-`),lg(),Ml(495,`td`,21)(496,`em`)(497,`strong`),mN(498,`(opcional)`),lg()(),Ml(499,`p`),mN(500,`Texto de apoio do campo.`),lg()()(),Ml(501,`tr`,14)(502,`td`,15)(503,`div`,22)(504,`span`,23),mN(505,` (p-keydown)`),ql(506,`br`),lg()()(),Ml(507,`td`,18)(508,`code`,24),mN(509,`EventEmitter`),lg()(),Ml(510,`td`,20),mN(511,`-`),lg(),Ml(512,`td`,21)(513,`p`),mN(514,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),lg()()(),Ml(515,`tr`,14)(516,`td`,15)(517,`div`,16)(518,`span`,17),mN(519,` p-label`),ql(520,`br`),lg()()(),Ml(521,`td`,18)(522,`code`,25),mN(523,`string`),lg()(),Ml(524,`td`,20),mN(525,`-`),lg(),Ml(526,`td`,21)(527,`em`)(528,`strong`),mN(529,`(opcional)`),lg()(),Ml(530,`p`),mN(531,`Rótulo do campo.`),lg()()(),Ml(532,`tr`,14)(533,`td`,15)(534,`div`,16)(535,`span`,17),mN(536,` p-label-text-wrap`),ql(537,`br`),lg()()(),Ml(538,`td`,18)(539,`code`,19),mN(540,`boolean`),lg()(),Ml(541,`td`,20)(542,`p`)(543,`code`),mN(544,`false`),lg()()(),Ml(545,`td`,21)(546,`em`)(547,`strong`),mN(548,`(opcional)`),lg()(),Ml(549,`p`),mN(550,`Habilita a quebra automática do texto da propriedade `),Ml(551,`code`),mN(552,`p-label`),lg(),mN(553,`.`),lg()()(),Ml(554,`tr`,14)(555,`td`,15)(556,`div`,16)(557,`span`,17),mN(558,` p-loading`),ql(559,`br`),lg()()(),Ml(560,`td`,18)(561,`code`,19),mN(562,`boolean`),lg()(),Ml(563,`td`,20)(564,`p`)(565,`code`),mN(566,`false`),lg()()(),Ml(567,`td`,21)(568,`em`)(569,`strong`),mN(570,`(opcional)`),lg()(),Ml(571,`p`),mN(572,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),lg()()(),Ml(573,`tr`,14)(574,`td`,15)(575,`div`,16)(576,`span`,17),mN(577,` p-locale`),ql(578,`br`),lg()()(),Ml(579,`td`,18)(580,`code`,25),mN(581,`string`),lg()(),Ml(582,`td`,20),mN(583,`-`),lg(),Ml(584,`td`,21)(585,`em`)(586,`strong`),mN(587,`(opcional)`),lg()(),Ml(588,`p`),mN(589,`Idioma do componente.`),lg()()(),Ml(590,`tr`,14)(591,`td`,15)(592,`div`,16)(593,`span`,17),mN(594,` p-max-time`),ql(595,`br`),lg()()(),Ml(596,`td`,18)(597,`code`,25),mN(598,`string`),lg()(),Ml(599,`td`,20),mN(600,`-`),lg(),Ml(601,`td`,21)(602,`em`)(603,`strong`),mN(604,`(opcional)`),lg()(),Ml(605,`p`),mN(606,`Define o horário máximo permitido. Formato: `),Ml(607,`code`),mN(608,`HH:mm`),lg(),mN(609,` ou `),Ml(610,`code`),mN(611,`HH:mm:ss`),lg(),mN(612,`.`),lg()()(),Ml(613,`tr`,14)(614,`td`,15)(615,`div`,16)(616,`span`,17),mN(617,` p-min-time`),ql(618,`br`),lg()()(),Ml(619,`td`,18)(620,`code`,25),mN(621,`string`),lg()(),Ml(622,`td`,20),mN(623,`-`),lg(),Ml(624,`td`,21)(625,`em`)(626,`strong`),mN(627,`(opcional)`),lg()(),Ml(628,`p`),mN(629,`Define o horário mínimo permitido. Formato: `),Ml(630,`code`),mN(631,`HH:mm`),lg(),mN(632,` ou `),Ml(633,`code`),mN(634,`HH:mm:ss`),lg(),mN(635,`.`),lg()()(),Ml(636,`tr`,14)(637,`td`,15)(638,`div`,16)(639,`span`,17),mN(640,` p-minute-interval`),ql(641,`br`),lg()()(),Ml(642,`td`,18)(643,`code`,27),mN(644,`number`),lg()(),Ml(645,`td`,20)(646,`p`)(647,`code`),mN(648,`5`),lg()()(),Ml(649,`td`,21)(650,`em`)(651,`strong`),mN(652,`(opcional)`),lg()(),Ml(653,`p`),mN(654,`Define o intervalo entre os minutos exibidos no painel.`),lg()()(),Ml(655,`tr`,14)(656,`td`,15)(657,`div`,16)(658,`span`,17),mN(659,` p-model-format`),ql(660,`br`),lg()()(),Ml(661,`td`,18)(662,`code`,28),mN(663,`PoTimepickerModelFormat`),lg()(),Ml(664,`td`,20),mN(665,`-`),lg(),Ml(666,`td`,21)(667,`em`)(668,`strong`),mN(669,`(opcional)`),lg()(),Ml(670,`p`),mN(671,`Padrão de formatação para saída do `),Ml(672,`em`),mN(673,`model`),lg(),mN(674,`.`),lg(),Ml(675,`blockquote`)(676,`p`),mN(677,`Veja os valores válidos no `),Ml(678,`em`),mN(679,`enum`),lg(),Ml(680,`code`),mN(681,`PoTimepickerModelFormat`),lg(),mN(682,`.`),lg()()()(),Ml(683,`tr`,14)(684,`td`,15)(685,`div`,16)(686,`span`,17),mN(687,` name`),ql(688,`br`),lg()()(),Ml(689,`td`,18)(690,`code`,25),mN(691,`string`),lg()(),Ml(692,`td`,20),mN(693,`-`),lg(),Ml(694,`td`,21)(695,`p`),mN(696,`Nome do componente.`),lg()()(),Ml(697,`tr`,14)(698,`td`,15)(699,`div`,16)(700,`span`,17),mN(701,` p-no-autocomplete`),ql(702,`br`),lg()()(),Ml(703,`td`,18)(704,`code`,19),mN(705,`boolean`),lg()(),Ml(706,`td`,20)(707,`p`)(708,`code`),mN(709,`false`),lg()()(),Ml(710,`td`,21)(711,`em`)(712,`strong`),mN(713,`(opcional)`),lg()(),Ml(714,`p`),mN(715,`Define a propriedade nativa `),Ml(716,`code`),mN(717,`autocomplete`),lg(),mN(718,` do campo como `),Ml(719,`code`),mN(720,`off`),lg(),mN(721,`.`),lg()()(),Ml(722,`tr`,14)(723,`td`,15)(724,`div`,22)(725,`span`,23),mN(726,` (p-blur)`),ql(727,`br`),lg()()(),Ml(728,`td`,18)(729,`code`,24),mN(730,`EventEmitter`),lg()(),Ml(731,`td`,20),mN(732,`-`),lg(),Ml(733,`td`,21)(734,`p`),mN(735,`Evento disparado ao sair do campo.`),lg()()(),Ml(736,`tr`,14)(737,`td`,15)(738,`div`,22)(739,`span`,23),mN(740,` (p-change)`),ql(741,`br`),lg()()(),Ml(742,`td`,18)(743,`code`,24),mN(744,`EventEmitter`),lg()(),Ml(745,`td`,20),mN(746,`-`),lg(),Ml(747,`td`,21)(748,`p`),mN(749,`Evento disparado ao alterar valor do campo.`),lg()()(),Ml(750,`tr`,14)(751,`td`,15)(752,`div`,16)(753,`span`,17),mN(754,` p-optional`),ql(755,`br`),lg()()(),Ml(756,`td`,18)(757,`code`,19),mN(758,`boolean`),lg()(),Ml(759,`td`,20)(760,`p`)(761,`code`),mN(762,`false`),lg()()(),Ml(763,`td`,21)(764,`em`)(765,`strong`),mN(766,`(opcional)`),lg()(),Ml(767,`p`),mN(768,`Define se a indicação de campo opcional será exibida.`),lg()()(),Ml(769,`tr`,14)(770,`td`,15)(771,`div`,16)(772,`span`,17),mN(773,` p-placeholder`),ql(774,`br`),lg()()(),Ml(775,`td`,18)(776,`code`,25),mN(777,`string`),lg()(),Ml(778,`td`,20),mN(779,`-`),lg(),Ml(780,`td`,21)(781,`em`)(782,`strong`),mN(783,`(opcional)`),lg()(),Ml(784,`p`),mN(785,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),lg(),Ml(786,`p`),mN(787,`Para personalizar os segmentos, informe o valor no formato `),Ml(788,`code`),mN(789,`HH:mm`),lg(),mN(790,` ou `),Ml(791,`code`),mN(792,`HH:mm:ss`),lg(),mN(793,`.`),lg()()(),Ml(794,`tr`,14)(795,`td`,15)(796,`div`,16)(797,`span`,17),mN(798,` p-helper`),ql(799,`br`),lg()()(),Ml(800,`td`,18)(801,`code`,29),mN(802,`PoHelperOptions `),lg(),Ml(803,`code`,25),mN(804,` string`),lg()(),Ml(805,`td`,20),mN(806,`-`),lg(),Ml(807,`td`,21)(808,`em`)(809,`strong`),mN(810,`(opcional)`),lg()(),Ml(811,`p`),mN(812,`Define as opções do componente de ajuda (po-helper).`),lg()()(),Ml(813,`tr`,14)(814,`td`,15)(815,`div`,16)(816,`span`,17),mN(817,`p-readonly`),ql(818,`br`),lg()()(),Ml(819,`td`,18)(820,`code`,19),mN(821,`boolean`),lg()(),Ml(822,`td`,20),mN(823,`-`),lg(),Ml(824,`td`,21)(825,`em`)(826,`strong`),mN(827,`(opcional)`),lg()(),Ml(828,`p`),mN(829,`Torna o elemento somente leitura.`),lg()()(),Ml(830,`tr`,14)(831,`td`,15)(832,`div`,16)(833,`span`,17),mN(834,`p-required`),ql(835,`br`),lg()()(),Ml(836,`td`,18)(837,`code`,19),mN(838,`boolean`),lg()(),Ml(839,`td`,20)(840,`p`)(841,`code`),mN(842,`false`),lg()()(),Ml(843,`td`,21)(844,`em`)(845,`strong`),mN(846,`(opcional)`),lg()(),Ml(847,`p`),mN(848,`Define que o campo será obrigatório.`),lg()()(),Ml(849,`tr`,14)(850,`td`,15)(851,`div`,16)(852,`span`,17),mN(853,` p-second-interval`),ql(854,`br`),lg()()(),Ml(855,`td`,18)(856,`code`,27),mN(857,`number`),lg()(),Ml(858,`td`,20)(859,`p`)(860,`code`),mN(861,`1`),lg()()(),Ml(862,`td`,21)(863,`em`)(864,`strong`),mN(865,`(opcional)`),lg()(),Ml(866,`p`),mN(867,`Define o intervalo entre os segundos exibidos no painel.`),lg()()(),Ml(868,`tr`,14)(869,`td`,15)(870,`div`,16)(871,`span`,17),mN(872,` p-required-field-error-message`),ql(873,`br`),lg()()(),Ml(874,`td`,18)(875,`code`,19),mN(876,`boolean`),lg()(),Ml(877,`td`,20)(878,`p`)(879,`code`),mN(880,`false`),lg()()(),Ml(881,`td`,21)(882,`em`)(883,`strong`),mN(884,`(opcional)`),lg()(),Ml(885,`p`),mN(886,`Exibe a mensagem setada na propriedade `),Ml(887,`code`),mN(888,`p-error-pattern`),lg(),mN(889,` se o campo estiver vazio e for requerido.`),lg()()(),Ml(890,`tr`,14)(891,`td`,15)(892,`div`,16)(893,`span`,17),mN(894,` p-show-required`),ql(895,`br`),lg()()(),Ml(896,`td`,18)(897,`code`,19),mN(898,`boolean`),lg()(),Ml(899,`td`,20),mN(900,`-`),lg(),Ml(901,`td`,21)(902,`p`),mN(903,`Define se a indicação de campo obrigatório será exibida.`),lg()()(),Ml(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),mN(908,` p-show-seconds`),ql(909,`br`),lg()()(),Ml(910,`td`,18)(911,`code`,19),mN(912,`boolean`),lg()(),Ml(913,`td`,20)(914,`p`)(915,`code`),mN(916,`false`),lg()()(),Ml(917,`td`,21)(918,`em`)(919,`strong`),mN(920,`(opcional)`),lg()(),Ml(921,`p`),mN(922,`Exibe a coluna de segundos no painel.`),lg()()(),Ml(923,`tr`,14)(924,`td`,15)(925,`div`,16)(926,`span`,17),mN(927,` p-size`),ql(928,`br`),lg()()(),Ml(929,`td`,18)(930,`code`,25),mN(931,`string`),lg()(),Ml(932,`td`,20)(933,`p`)(934,`code`),mN(935,`medium`),lg()()(),Ml(936,`td`,21)(937,`em`)(938,`strong`),mN(939,`(opcional)`),lg()(),Ml(940,`p`),mN(941,`Define o tamanho do componente:`),lg(),Ml(942,`ul`)(943,`li`)(944,`code`),mN(945,`small`),lg(),mN(946,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(947,`li`)(948,`code`),mN(949,`medium`),lg(),mN(950,`: altura do input como 44px.`),lg()()()()(),Ml(951,`h3`,10),mN(952,`Métodos`),lg(),Ml(953,`table`,30)(954,`tr`,14)(955,`th`,31)(956,`div`,16)(957,`h4`)(958,`span`,17),mN(959,` focus `),lg()()()()(),Ml(960,`tr`,21)(961,`td`,21)(962,`p`),mN(963,`Função que atribui foco ao componente.`),lg(),Ml(964,`p`),mN(965,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(966,`pre`)(967,`code`),mN(968,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),lg()()()()(),ql(969,`br`),Ml(970,`table`,30)(971,`tr`,14)(972,`th`,31)(973,`div`,16)(974,`h4`)(975,`span`,17),mN(976,` showAdditionalHelp `),lg()()()()(),Ml(977,`tr`,21)(978,`td`,21)(979,`p`),mN(980,`Método que exibe `),Ml(981,`code`),mN(982,`p-helper`),lg(),mN(983,` ou executa a ação definida em `),Ml(984,`code`),mN(985,`p-helper{eventOnClick}`),lg(),mN(986,` ou em `),Ml(987,`code`),mN(988,`p-additionalHelp`),lg(),mN(989,`.`),lg()()()(),ql(990,`br`),Ml(991,`h3`),mN(992,`Enums`),lg(),Ml(993,`h4`,4)(994,`code`,5),mN(995,`PoTimepickerModelFormat`),lg()(),Ml(996,`div`,2)(997,`p`)(998,`em`),mN(999,`Enum`),lg(),mN(1e3,` que define o padrão de formatação do model de saída do timepicker.`),lg()(),Ml(1001,`h4`,10),mN(1002,`Propriedades`),lg(),Ml(1003,`table`,11)(1004,`tr`,12)(1005,`th`,13),mN(1006,`Nome`),lg(),Ml(1007,`th`,13),mN(1008,`Descrição`),lg()(),Ml(1009,`tr`,14)(1010,`td`,15)(1011,`div`,16)(1012,`span`,17),mN(1013,` HourMinute`),ql(1014,`br`),lg()()(),Ml(1015,`td`,21)(1016,`p`),mN(1017,`Formato básico `),Ml(1018,`code`),mN(1019,`HH:mm`),lg(),mN(1020,` (ex: `),Ml(1021,`code`),mN(1022,`14:30`),lg(),mN(1023,`).`),lg()()(),Ml(1024,`tr`,14)(1025,`td`,15)(1026,`div`,16)(1027,`span`,17),mN(1028,` HourMinuteSecond`),ql(1029,`br`),lg()()(),Ml(1030,`td`,21)(1031,`p`),mN(1032,`Formato com segundos `),Ml(1033,`code`),mN(1034,`HH:mm:ss`),lg(),mN(1035,` (ex: `),Ml(1036,`code`),mN(1037,`14:30:00`),lg(),mN(1038,`).`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var Ve=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(w(Xn),w(Cn))};static ɵcmp=Un({type:l,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Timepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-timepicker-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-timepicker-basic-view`)(6,`sample-po-timepicker-labs-view`)(7,`sample-po-timepicker-scheduling-view`)(8,`sample-po-timepicker-business-hours-view`),lg()()()),r&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ce,he,Ee,fe,ve],encapsulation:2,changeDetection:1})}return l})()}];var xe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[NL.forChild(Ve),NL]})}return l})();var Ct=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[ar,xe]})}return l})();export{Ct as DocPoTimepickerModule};