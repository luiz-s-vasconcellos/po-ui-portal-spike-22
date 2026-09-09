import{$r as Xy,$t as iU,At as _Ce,Bi as jp,D as E_e,Dt as YD,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nn as z0e,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,bt as W0e,ei as Yl,fi as ag,gi as bL,ha as ww,jn as ybe,k as Eu,l as ar,la as uo,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var se=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datetimepicker`,`p-label`,`PO Datetimepicker`]],template:function(r,i){r&1&&Gl(0,`po-datetimepicker`,0)},dependencies:[YD],encapsulation:2,changeDetection:1})}return l})();var De=l=>({"docs-sample-code-tabs":l});var ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Datetimepicker Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-datetimepicker-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,De,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,se],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatDateOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];formatTimeOptions=[{label:`24h`,value:`24`},{label:`12h (AM/PM)`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText=``,this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-labs`]],standalone:!1,decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`datetimepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-limit`,`p-error-pattern`,`p-format-date`,`p-format-time`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-locale`,`p-max-date`,`p-max-time`,`p-min-date`,`p-min-time`,`p-minute-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-second-interval`,`p-show-required`,`p-show-seconds`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatDate`,`p-columns`,`4`,`p-label`,`Format Date`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatTime`,`p-columns`,`4`,`p-label`,`Format Time`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let d=Ax();Tl(0,`po-datetimepicker`,1),ww(`ngModelChange`,function(o){return Ky(d),uN(i.datetimepicker,o)||(i.datetimepicker=o),Xy(o)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3)(4,`po-info`,4),ag(),Gl(5,`po-divider`),Tl(6,`form`,null,0)(8,`po-input`,5),ww(`ngModelChange`,function(o){return Ky(d),uN(i.label,o)||(i.label=o),Xy(o)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(o){return Ky(d),uN(i.help,o)||(i.help=o),Xy(o)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(o){return Ky(d),uN(i.helperText,o)||(i.helperText=o),Xy(o)}),ag(),a0(),Tl(11,`po-input`,8),ww(`ngModelChange`,function(o){return Ky(d),uN(i.placeholder,o)||(i.placeholder=o),Xy(o)}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(o){return Ky(d),uN(i.errorPattern,o)||(i.errorPattern=o),Xy(o)}),ag(),a0(),Tl(13,`po-number`,10),ww(`ngModelChange`,function(o){return Ky(d),uN(i.minuteInterval,o)||(i.minuteInterval=o),Xy(o)}),ag(),a0(),Tl(14,`po-number`,11),ww(`ngModelChange`,function(o){return Ky(d),uN(i.secondInterval,o)||(i.secondInterval=o),Xy(o)}),ag(),a0(),Tl(15,`po-timepicker`,12),ww(`ngModelChange`,function(o){return Ky(d),uN(i.minTime,o)||(i.minTime=o),Xy(o)}),ag(),a0(),Tl(16,`po-timepicker`,13),ww(`ngModelChange`,function(o){return Ky(d),uN(i.maxTime,o)||(i.maxTime=o),Xy(o)}),ag(),a0(),Tl(17,`po-datepicker`,14),ww(`ngModelChange`,function(o){return Ky(d),uN(i.minDate,o)||(i.minDate=o),Xy(o)}),ag(),a0(),Tl(18,`po-datepicker`,15),ww(`ngModelChange`,function(o){return Ky(d),uN(i.maxDate,o)||(i.maxDate=o),Xy(o)}),ag(),a0(),Tl(19,`po-checkbox-group`,16),ww(`ngModelChange`,function(o){return Ky(d),uN(i.properties,o)||(i.properties=o),Xy(o)}),ag(),a0(),Tl(20,`po-radio-group`,17),ww(`ngModelChange`,function(o){return Ky(d),uN(i.locale,o)||(i.locale=o),Xy(o)}),ag(),a0(),Tl(21,`po-radio-group`,18),ww(`ngModelChange`,function(o){return Ky(d),uN(i.formatDate,o)||(i.formatDate=o),Xy(o)}),ag(),a0(),Tl(22,`po-radio-group`,19),ww(`ngModelChange`,function(o){return Ky(d),uN(i.formatTime,o)||(i.formatTime=o),Xy(o)}),ag(),a0(),Tl(23,`po-radio-group`,20),ww(`ngModelChange`,function(o){return Ky(d),uN(i.size,o)||(i.size=o),Xy(o)}),ag(),a0(),Tl(24,`div`,2)(25,`po-button`,21),ht(`p-click`,function(){return i.restore()}),ag()()()}r&2&&(Ew(`ngModel`,i.datetimepicker),nw(`p-clean`,i.properties.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-error-pattern`,i.errorPattern)(`p-format-date`,i.formatDate)(`p-format-time`,i.formatTime)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-locale`,i.locale)(`p-max-date`,i.maxDate)(`p-max-time`,i.maxTime)(`p-min-date`,i.minDate)(`p-min-time`,i.minTime)(`p-minute-interval`,i.minuteInterval)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-second-interval`,i.secondInterval)(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-seconds`,i.properties.includes(`showSeconds`))(`p-size`,i.size),l0(),jp(3),nw(`p-value`,i.datetimepicker),jp(),nw(`p-value`,i.event),jp(4),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.helperText),l0(),jp(),Ew(`ngModel`,i.placeholder),l0(),jp(),Ew(`ngModel`,i.errorPattern),l0(),jp(),Ew(`ngModel`,i.minuteInterval),l0(),jp(),Ew(`ngModel`,i.secondInterval),l0(),jp(),Ew(`ngModel`,i.minTime),l0(),jp(),Ew(`ngModel`,i.maxTime),l0(),jp(),Ew(`ngModel`,i.minDate),nw(`p-max-date`,i.maxDate),l0(),jp(),Ew(`ngModel`,i.maxDate),nw(`p-min-date`,i.minDate),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.locale),nw(`p-options`,i.localeOptions),l0(),jp(),Ew(`ngModel`,i.formatDate),nw(`p-options`,i.formatDateOptions),l0(),jp(),Ew(`ngModel`,i.formatTime),nw(`p-options`,i.formatTimeOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,z0e,YD,iU,ube,L0e,E_e,ybe],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l});var Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Datetimepicker Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-datetimepicker
  class="po-sm-12"
  name="datetimepicker"
  [(ngModel)]="datetimepicker"
  [p-clean]="properties.includes('clean')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-error-pattern]="errorPattern"
  [p-format-date]="formatDate"
  [p-format-time]="formatTime"
  [p-help]="help"
  [p-helper]="helperText"
  [p-label]="label"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-loading]="properties.includes('loading')"
  [p-locale]="locale"
  [p-max-date]="maxDate"
  [p-max-time]="maxTime"
  [p-min-date]="minDate"
  [p-min-time]="minTime"
  [p-minute-interval]="minuteInterval"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
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
  (p-change-model)="changeEvent('p-change-model')"
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-datetimepicker-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,_e,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ge],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`datetimepicker12h`,`p-label`,`PO Datetimepicker - 12h with Seconds`,`p-show-seconds`,`true`,`p-format-time`,`12`,`p-format-date`,`mm/dd/yyyy`,3,`ngModelChange`,`ngModel`]],template:function(r,i){r&1&&(Tl(0,`po-datetimepicker`,0),ww(`ngModelChange`,function(s){return uN(i.datetime,s)||(i.datetime=s),s}),ag(),a0()),r&2&&(Ew(`ngModel`,i.datetime),l0())},dependencies:[gY,Ak,YD],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Datetimepicker - 12h with Seconds`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-datetimepicker-12h-seconds`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Te,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ee],encapsulation:2,changeDetection:1})}return l})();var Oe=[`formScheduling`];var be=(()=>{class l{poDialog=f(W0e);poNotification=f(Eu);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:`general`,label:`Clínico Geral`},{value:`cardiology`,label:`Cardiologia`},{value:`dermatology`,label:`Dermatologia`},{value:`orthopedics`,label:`Ortopedia`},{value:`neurology`,label:`Neurologia`}];confirm(){let p=this.appointment?this.appointment.slice(0,16):``,r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:r,confirm:()=>{this.poNotification.success(`Consulta agendada com sucesso!`),this.formScheduling.reset()},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:``}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-scheduling`]],viewQuery:function(r,i){if(r&1&&Yl(Oe,7),r&2){let d;lo(d=uo())&&(i.formScheduling=d.first)}},standalone:!1,decls:10,vars:6,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`patient`,`p-label`,`Paciente`,`p-placeholder`,`Nome do paciente`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`doctor`,`p-label`,`Médico`,`p-placeholder`,`Nome do médico`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`specialty`,`p-label`,`Especialidade`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`appointment`,`p-clean`,``,`p-label`,`Data e Hora da Consulta`,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-minute-interval`,`15`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`confirmButton`,`p-label`,`Agendar Consulta`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let d=Ax();Tl(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),ww(`ngModelChange`,function(o){return Ky(d),uN(i.patient,o)||(i.patient=o),Xy(o)}),ag(),a0(),Tl(4,`po-input`,3),ww(`ngModelChange`,function(o){return Ky(d),uN(i.doctor,o)||(i.doctor=o),Xy(o)}),ag(),a0(),ag(),Tl(5,`div`,1)(6,`po-select`,4),ww(`ngModelChange`,function(o){return Ky(d),uN(i.specialty,o)||(i.specialty=o),Xy(o)}),ag(),a0(),Tl(7,`po-datetimepicker`,5),ww(`ngModelChange`,function(o){return Ky(d),uN(i.appointment,o)||(i.appointment=o),Xy(o)}),ag(),a0(),ag(),Tl(8,`div`,1)(9,`po-button`,6),ht(`p-click`,function(){return i.confirm()}),ag()()()}if(r&2){let d=Bx(1);jp(3),Ew(`ngModel`,i.patient),l0(),jp(),Ew(`ngModel`,i.doctor),l0(),jp(2),Ew(`ngModel`,i.specialty),nw(`p-options`,i.specialtyOptions),l0(),jp(),Ew(`ngModel`,i.appointment),l0(),jp(2),nw(`p-disabled`,d.invalid)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,YD,iU,fbe],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l});var xe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-scheduling-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Datetimepicker - Scheduling`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form #formScheduling="ngForm">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { UntypedFormControl } from '@angular/forms';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-datetimepicker-scheduling`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ve,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,be],encapsulation:2,changeDetection:1})}return l})();var fe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-doc`]],standalone:!1,decls:1202,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoDatetimepickerComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`O `),Tl(24,`code`),cN(25,`po-datetimepicker`),ag(),cN(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),ag(),Tl(27,`p`),cN(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),Tl(29,`code`),cN(30,`p-format-date`),ag(),cN(31,`. O formato de hora pode ser 24h ou 12h (AM/PM), configurável via `),Tl(32,`code`),cN(33,`p-format-time`),ag(),cN(34,`.`),ag(),Tl(35,`p`),cN(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Tl(37,`code`),cN(38,`p-locale`),ag(),cN(39,`.`),ag(),Tl(40,`p`),cN(41,`O componente aceita os seguintes formatos de entrada:`),ag(),Tl(42,`ul`)(43,`li`),cN(44,`ISO 8601 com timezone: `),Tl(45,`code`),cN(46,`'2026-05-12T14:30:00-03:00'`),ag()(),Tl(47,`li`),cN(48,`ISO 8601 UTC: `),Tl(49,`code`),cN(50,`'2026-05-12T14:30:00Z'`),ag()(),Tl(51,`li`),cN(52,`ISO 8601 sem timezone: `),Tl(53,`code`),cN(54,`'2026-05-12T14:30:00'`),ag()(),Tl(55,`li`),cN(56,`ISO 8601 apenas data: `),Tl(57,`code`),cN(58,`'2026-05-12'`),ag()(),Tl(59,`li`),cN(60,`JavaScript Date Object: `),Tl(61,`code`),cN(62,`new Date(2026, 4, 12, 14, 30)`),ag()()(),Tl(63,`p`),cN(64,`O formato de saída do `),Tl(65,`em`),cN(66,`model`),ag(),cN(67,` é sempre ISO 8601 com timezone local: `),Tl(68,`code`),cN(69,`'yyyy-mm-ddTHH:mm+/-HH:mm'`),ag(),cN(70,`
(ou `),Tl(71,`code`),cN(72,`'yyyy-mm-ddTHH:mm:ss+/-HH:mm'`),ag(),cN(73,` quando `),Tl(74,`code`),cN(75,`p-show-seconds`),ag(),cN(76,` está ativo).`),ag(),Tl(77,`p`)(78,`strong`),cN(79,`Importante:`),ag()(),Tl(80,`ul`)(81,`li`),cN(82,`O valor emitido no model inclui o offset do timezone local do navegador.`),ag(),Tl(83,`li`),cN(84,`Ao receber um valor com timezone, o componente converte automaticamente para horário local.`),ag(),Tl(85,`li`),cN(86,`Caso a data/hora esteja inválida, o `),Tl(87,`code`),cN(88,`model`),ag(),cN(89,` receberá a mensagem de erro localizada.`),ag(),Tl(90,`li`),cN(91,`Caso o `),Tl(92,`code`),cN(93,`input`),ag(),cN(94,` esteja passando um `),Tl(95,`code`),cN(96,`[(ngModel)]`),ag(),cN(97,`, mas não tenha um `),Tl(98,`code`),cN(99,`name`),ag(),cN(100,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Tl(101,`code`),cN(102,`[ngModelOptions]="{standalone: true}"`),ag(),cN(103,`).`),ag()(),Tl(104,`p`),cN(105,`Exemplo:`),ag(),Tl(106,`pre`)(107,`code`),cN(108,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),ag()(),Tl(109,`blockquote`)(110,`p`),cN(111,`Não esqueça de importar o `),Tl(112,`code`),cN(113,`FormsModule`),ag(),cN(114,` em seu módulo, tal como para utilizar o `),Tl(115,`code`),cN(116,`input default`),ag(),cN(117,`.`),ag()(),Tl(118,`h4`),cN(119,`Tokens customizáveis`),ag(),Tl(120,`p`),cN(121,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Gl(122,`br`),cN(123,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(124,`code`),cN(125,`.po-input`),ag()(),Tl(126,`blockquote`)(127,`p`),cN(128,`Para maiores informações, acesse o guia `),Tl(129,`a`,6),cN(130,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(131,`.`),ag()(),Tl(132,`table`)(133,`thead`)(134,`tr`)(135,`th`),cN(136,`Propriedade`),ag(),Tl(137,`th`),cN(138,`Descrição`),ag(),Tl(139,`th`),cN(140,`Valor Padrão`),ag()()(),Tl(141,`tbody`)(142,`tr`)(143,`td`)(144,`strong`),cN(145,`Default Values`),ag()(),Gl(146,`td`)(147,`td`),ag(),Tl(148,`tr`)(149,`td`)(150,`code`),cN(151,`--font-family`),ag()(),Tl(152,`td`),cN(153,`Família tipográfica usada`),ag(),Tl(154,`td`)(155,`code`),cN(156,`var(--font-family-theme)`),ag()()(),Tl(157,`tr`)(158,`td`)(159,`code`),cN(160,`--font-size`),ag()(),Tl(161,`td`),cN(162,`Tamanho da fonte`),ag(),Tl(163,`td`)(164,`code`),cN(165,`var(--font-size-default)`),ag()()(),Tl(166,`tr`)(167,`td`)(168,`code`),cN(169,`--text-color-placeholder`),ag(),cN(170,` \xA0`),ag(),Tl(171,`td`),cN(172,`Cor principal do texto do placeholder`),ag(),Tl(173,`td`)(174,`code`),cN(175,`var(--color-neutral-light-30)`),ag()()(),Tl(176,`tr`)(177,`td`)(178,`code`),cN(179,`--color`),ag()(),Tl(180,`td`),cN(181,`Cor principal do datetimepicker`),ag(),Tl(182,`td`)(183,`code`),cN(184,`var(--color-neutral-dark-70)`),ag()()(),Tl(185,`tr`)(186,`td`)(187,`code`),cN(188,`--background`),ag()(),Tl(189,`td`),cN(190,`Cor de background`),ag(),Tl(191,`td`)(192,`code`),cN(193,`var(--color-neutral-light-05)`),ag()()(),Tl(194,`tr`)(195,`td`)(196,`code`),cN(197,`--padding`),ag()(),Tl(198,`td`),cN(199,`Preenchimento`),ag(),Tl(200,`td`)(201,`code`),cN(202,`0 0.5rem`),ag()()(),Tl(203,`tr`)(204,`td`)(205,`code`),cN(206,`--text-color`),ag()(),Tl(207,`td`),cN(208,`Cor do texto`),ag(),Tl(209,`td`)(210,`code`),cN(211,`var(--color-neutral-dark-90)`),ag()()(),Tl(212,`tr`)(213,`td`)(214,`code`),cN(215,`--field-container-title-justify`),ag()(),Tl(216,`td`),cN(217,`Alinhamento horizontal do título (`),Tl(218,`code`),cN(219,`justify-content`),ag(),cN(220,`)`),ag(),Tl(221,`td`)(222,`code`),cN(223,`space-between`),ag()()(),Tl(224,`tr`)(225,`td`)(226,`code`),cN(227,`--field-container-title-flex`),ag()(),Tl(228,`td`),cN(229,`Flex do título (`),Tl(230,`code`),cN(231,`flex`),ag(),cN(232,`)`),ag(),Tl(233,`td`)(234,`code`),cN(235,`1 auto`),ag()()(),Tl(236,`tr`)(237,`td`)(238,`strong`),cN(239,`Hover`),ag()(),Gl(240,`td`)(241,`td`),ag(),Tl(242,`tr`)(243,`td`)(244,`code`),cN(245,`--color-hover`),ag()(),Tl(246,`td`),cN(247,`Cor principal no estado hover`),ag(),Tl(248,`td`)(249,`code`),cN(250,`var(--color-brand-01-dark)`),ag()()(),Tl(251,`tr`)(252,`td`)(253,`code`),cN(254,`--background-hover`),ag()(),Tl(255,`td`),cN(256,`Cor de background no estado hover`),ag(),Tl(257,`td`)(258,`code`),cN(259,`var(--color-brand-01-lightest)`),ag()()(),Tl(260,`tr`)(261,`td`)(262,`strong`),cN(263,`Focused`),ag()(),Gl(264,`td`)(265,`td`),ag(),Tl(266,`tr`)(267,`td`)(268,`code`),cN(269,`--color-focused`),ag()(),Tl(270,`td`),cN(271,`Cor principal no estado de focus`),ag(),Tl(272,`td`)(273,`code`),cN(274,`var(--color-action-default)`),ag()()(),Tl(275,`tr`)(276,`td`)(277,`code`),cN(278,`--outline-color-focused`),ag()(),Tl(279,`td`),cN(280,`Cor do outline do estado de focus`),ag(),Tl(281,`td`)(282,`code`),cN(283,`var(--color-action-focus)`),ag()()(),Tl(284,`tr`)(285,`td`)(286,`strong`),cN(287,`Disabled`),ag()(),Gl(288,`td`)(289,`td`),ag(),Tl(290,`tr`)(291,`td`)(292,`code`),cN(293,`--color-disabled`),ag()(),Tl(294,`td`),cN(295,`Cor principal no estado disabled`),ag(),Tl(296,`td`)(297,`code`),cN(298,`var(--color-neutral-light-30)`),ag()()(),Tl(299,`tr`)(300,`td`)(301,`code`),cN(302,`--background-disabled`),ag()(),Tl(303,`td`),cN(304,`Cor de background no estado disabled \xA0`),ag(),Tl(305,`td`)(306,`code`),cN(307,`var(--color-neutral-light-20)`),ag()()(),Tl(308,`tr`)(309,`td`)(310,`code`),cN(311,`--text-color-disabled`),ag()(),Tl(312,`td`),cN(313,`Cor do texto no estado disabled`),ag(),Tl(314,`td`)(315,`code`),cN(316,`var(--color-neutral-dark-70)`),ag()()()()()(),Tl(317,`div`,7)(318,`h4`,8),cN(319,`Seletor`),ag(),Tl(320,`pre`,9),cN(321,`<po-datetimepicker
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change-model)="EventEmitter"
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
`),ag()(),Tl(322,`h4`,10),cN(323,`Propriedades`),ag(),Tl(324,`table`,11)(325,`tr`,12)(326,`th`,13),cN(327,`Nome`),ag(),Tl(328,`th`,13),cN(329,`Tipo`),ag(),Tl(330,`th`,13),cN(331,`Padrão`),ag(),Tl(332,`th`,13),cN(333,`Descrição`),ag()(),Tl(334,`tr`,14)(335,`td`,15)(336,`div`,16)(337,`span`,17),cN(338,` p-append-in-body`),Gl(339,`br`),ag()()(),Tl(340,`td`,18)(341,`code`,19),cN(342,`boolean`),ag()(),Tl(343,`td`,20)(344,`p`)(345,`code`),cN(346,`false`),ag()()(),Tl(347,`td`,21)(348,`em`)(349,`strong`),cN(350,`(opcional)`),ag()(),Tl(351,`p`),cN(352,`Define que o `),Tl(353,`code`),cN(354,`calendar`),ag(),cN(355,` e/ou tooltip serão incluídos no body da página e não dentro do componente.`),ag()()(),Tl(356,`tr`,14)(357,`td`,15)(358,`div`,16)(359,`span`,17),cN(360,` p-auto-focus`),Gl(361,`br`),ag()()(),Tl(362,`td`,18)(363,`code`,19),cN(364,`boolean`),ag()(),Tl(365,`td`,20)(366,`p`)(367,`code`),cN(368,`false`),ag()()(),Tl(369,`td`,21)(370,`em`)(371,`strong`),cN(372,`(opcional)`),ag()(),Tl(373,`p`),cN(374,`Aplica foco no elemento ao ser iniciado.`),ag()()(),Tl(375,`tr`,14)(376,`td`,15)(377,`div`,22)(378,`span`,23),cN(379,` (p-change-model)`),Gl(380,`br`),ag()()(),Tl(381,`td`,18)(382,`code`,24),cN(383,`EventEmitter`),ag()(),Tl(384,`td`,20),cN(385,`-`),ag(),Tl(386,`td`,21)(387,`em`)(388,`strong`),cN(389,`(opcional)`),ag()(),Tl(390,`p`),cN(391,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(392,`code`),cN(393,`setValue`),ag(),cN(394,`, `),Tl(395,`code`),cN(396,`patchValue`),ag(),cN(397,`, carregamento assíncrono).`),ag(),Tl(398,`p`),cN(399,`Diferentemente do `),Tl(400,`code`),cN(401,`p-change`),ag(),cN(402,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(403,`code`),cN(404,`p-change-model`),ag(),cN(405,` cobre todos os cenários de alteração de valor.`),ag(),Tl(406,`p`),cN(407,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(408,`tr`,14)(409,`td`,15)(410,`div`,16)(411,`span`,17),cN(412,` p-clean`),Gl(413,`br`),ag()()(),Tl(414,`td`,18)(415,`code`,19),cN(416,`boolean `),ag(),Tl(417,`code`,25),cN(418,` string`),ag()(),Tl(419,`td`,20)(420,`p`)(421,`code`),cN(422,`false`),ag()()(),Tl(423,`td`,21)(424,`em`)(425,`strong`),cN(426,`(opcional)`),ag()(),Tl(427,`p`),cN(428,`Habilita ação para limpar o campo.`),ag()()(),Tl(429,`tr`,14)(430,`td`,15)(431,`div`,16)(432,`span`,17),cN(433,` p-compact-label`),Gl(434,`br`),ag()()(),Tl(435,`td`,18)(436,`code`,19),cN(437,`boolean`),ag()(),Tl(438,`td`,20)(439,`p`)(440,`code`),cN(441,`false`),ag()()(),Tl(442,`td`,21)(443,`em`)(444,`strong`),cN(445,`(opcional)`),ag()(),Tl(446,`p`),cN(447,`Define se o título do campo será exibido de forma compacta.`),ag()()(),Tl(448,`tr`,14)(449,`td`,15)(450,`div`,16)(451,`span`,17),cN(452,` p-format-date`),Gl(453,`br`),ag()()(),Tl(454,`td`,18)(455,`code`,25),cN(456,`string`),ag()(),Tl(457,`td`,20)(458,`p`),cN(459,`Determinado pelo locale`),ag()(),Tl(460,`td`,21)(461,`em`)(462,`strong`),cN(463,`(opcional)`),ag()(),Tl(464,`p`),cN(465,`Define o formato de exibição da data.`),ag(),Tl(466,`p`),cN(467,`Valores válidos:`),ag(),Tl(468,`ul`)(469,`li`)(470,`code`),cN(471,`dd/mm/yyyy`),ag()(),Tl(472,`li`)(473,`code`),cN(474,`mm/dd/yyyy`),ag()(),Tl(475,`li`)(476,`code`),cN(477,`yyyy/mm/dd`),ag()()(),Tl(478,`p`),cN(479,`Quando não informado, o formato será determinado automaticamente pelo locale:`),ag(),Tl(480,`ul`)(481,`li`)(482,`code`),cN(483,`en`),ag(),cN(484,` → `),Tl(485,`code`),cN(486,`mm/dd/yyyy`),ag()(),Tl(487,`li`)(488,`code`),cN(489,`pt`),ag(),cN(490,`, `),Tl(491,`code`),cN(492,`es`),ag(),cN(493,`, `),Tl(494,`code`),cN(495,`ru`),ag(),cN(496,` → `),Tl(497,`code`),cN(498,`dd/mm/yyyy`),ag()()()()(),Tl(499,`tr`,14)(500,`td`,15)(501,`div`,16)(502,`span`,17),cN(503,` p-disabled`),Gl(504,`br`),ag()()(),Tl(505,`td`,18)(506,`code`,19),cN(507,`boolean `),ag(),Tl(508,`code`,25),cN(509,` string`),ag()(),Tl(510,`td`,20)(511,`p`)(512,`code`),cN(513,`false`),ag()()(),Tl(514,`td`,21)(515,`em`)(516,`strong`),cN(517,`(opcional)`),ag()(),Tl(518,`p`),cN(519,`Desabilita o campo.`),ag()()(),Tl(520,`tr`,14)(521,`td`,15)(522,`div`,16)(523,`span`,17),cN(524,` p-error-limit`),Gl(525,`br`),ag()()(),Tl(526,`td`,18)(527,`code`,19),cN(528,`boolean`),ag()(),Tl(529,`td`,20)(530,`p`)(531,`code`),cN(532,`false`),ag()()(),Tl(533,`td`,21)(534,`em`)(535,`strong`),cN(536,`(opcional)`),ag()(),Tl(537,`p`),cN(538,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag()()(),Tl(539,`tr`,14)(540,`td`,15)(541,`div`,16)(542,`span`,17),cN(543,` p-error-pattern`),Gl(544,`br`),ag()()(),Tl(545,`td`,18)(546,`code`,25),cN(547,`string`),ag()(),Tl(548,`td`,20),cN(549,`-`),ag(),Tl(550,`td`,21)(551,`em`)(552,`strong`),cN(553,`(opcional)`),ag()(),Tl(554,`p`),cN(555,`Mensagem apresentada quando a data/hora for inválida ou fora do período.`),ag()()(),Tl(556,`tr`,14)(557,`td`,15)(558,`div`,16)(559,`span`,17),cN(560,` p-help`),Gl(561,`br`),ag()()(),Tl(562,`td`,18)(563,`code`,25),cN(564,`string`),ag()(),Tl(565,`td`,20),cN(566,`-`),ag(),Tl(567,`td`,21)(568,`em`)(569,`strong`),cN(570,`(opcional)`),ag()(),Tl(571,`p`),cN(572,`Texto de apoio do campo.`),ag()()(),Tl(573,`tr`,14)(574,`td`,15)(575,`div`,22)(576,`span`,23),cN(577,` (p-keydown)`),Gl(578,`br`),ag()()(),Tl(579,`td`,18)(580,`code`,24),cN(581,`EventEmitter`),ag()(),Tl(582,`td`,20),cN(583,`-`),ag(),Tl(584,`td`,21)(585,`em`)(586,`strong`),cN(587,`(opcional)`),ag()(),Tl(588,`p`),cN(589,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),ag()()(),Tl(590,`tr`,14)(591,`td`,15)(592,`div`,16)(593,`span`,17),cN(594,` p-label`),Gl(595,`br`),ag()()(),Tl(596,`td`,18)(597,`code`,25),cN(598,`string`),ag()(),Tl(599,`td`,20),cN(600,`-`),ag(),Tl(601,`td`,21)(602,`em`)(603,`strong`),cN(604,`(opcional)`),ag()(),Tl(605,`p`),cN(606,`Rótulo do campo.`),ag()()(),Tl(607,`tr`,14)(608,`td`,15)(609,`div`,16)(610,`span`,17),cN(611,` p-label-text-wrap`),Gl(612,`br`),ag()()(),Tl(613,`td`,18)(614,`code`,19),cN(615,`boolean`),ag()(),Tl(616,`td`,20)(617,`p`)(618,`code`),cN(619,`false`),ag()()(),Tl(620,`td`,21)(621,`em`)(622,`strong`),cN(623,`(opcional)`),ag()(),Tl(624,`p`),cN(625,`Habilita a quebra automática do texto da propriedade `),Tl(626,`code`),cN(627,`p-label`),ag(),cN(628,`.`),ag()()(),Tl(629,`tr`,14)(630,`td`,15)(631,`div`,16)(632,`span`,17),cN(633,` p-loading`),Gl(634,`br`),ag()()(),Tl(635,`td`,18)(636,`code`,19),cN(637,`boolean `),ag(),Tl(638,`code`,25),cN(639,` string`),ag()(),Tl(640,`td`,20)(641,`p`)(642,`code`),cN(643,`false`),ag()()(),Tl(644,`td`,21)(645,`em`)(646,`strong`),cN(647,`(opcional)`),ag()(),Tl(648,`p`),cN(649,`Exibe um ícone de carregamento no lado direito do campo.`),ag()()(),Tl(650,`tr`,14)(651,`td`,15)(652,`div`,16)(653,`span`,17),cN(654,` p-locale`),Gl(655,`br`),ag()()(),Tl(656,`td`,18)(657,`code`,25),cN(658,`string`),ag()(),Tl(659,`td`,20),cN(660,`-`),ag(),Tl(661,`td`,21)(662,`em`)(663,`strong`),cN(664,`(opcional)`),ag()(),Tl(665,`p`),cN(666,`Idioma do componente.`),ag(),Tl(667,`blockquote`)(668,`p`),cN(669,`O locale padrão será recuperado com base no `),Tl(670,`a`,26)(671,`code`),cN(672,`PoI18nService`),ag()(),cN(673,` ou `),Tl(674,`em`),cN(675,`browser`),ag(),cN(676,`.`),ag()()()(),Tl(677,`tr`,14)(678,`td`,15)(679,`div`,16)(680,`span`,17),cN(681,` p-max-date`),Gl(682,`br`),ag()()(),Tl(683,`td`,18)(684,`code`,25),cN(685,`string `),ag(),Tl(686,`code`,27),cN(687,` Date`),ag()(),Tl(688,`td`,20),cN(689,`-`),ag(),Tl(690,`td`,21)(691,`em`)(692,`strong`),cN(693,`(opcional)`),ag()(),Tl(694,`p`),cN(695,`Define uma data máxima para o `),Tl(696,`code`),cN(697,`po-datetimepicker`),ag(),cN(698,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),ag(),Tl(699,`p`),cN(700,`Aceita os formatos:`),ag(),Tl(701,`ul`)(702,`li`)(703,`code`),cN(704,`Date`),ag(),cN(705,` object: `),Tl(706,`code`),cN(707,`new Date(2026, 4, 31)`),ag()(),Tl(708,`li`),cN(709,`ISO string: `),Tl(710,`code`),cN(711,`'2026-05-31'`),ag()(),Tl(712,`li`),cN(713,`ISO com hora: `),Tl(714,`code`),cN(715,`'2026-05-31T23:59:59-03:00'`),ag()()()()(),Tl(716,`tr`,14)(717,`td`,15)(718,`div`,16)(719,`span`,17),cN(720,` p-max-time`),Gl(721,`br`),ag()()(),Tl(722,`td`,18)(723,`code`,25),cN(724,`string`),ag()(),Tl(725,`td`,20),cN(726,`-`),ag(),Tl(727,`td`,21)(728,`em`)(729,`strong`),cN(730,`(opcional)`),ag()(),Tl(731,`p`),cN(732,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),ag(),Tl(733,`p`),cN(734,`Formato aceito: `),Tl(735,`code`),cN(736,`HH:mm`),ag(),cN(737,` ou `),Tl(738,`code`),cN(739,`HH:mm:ss`),ag(),cN(740,`.`),ag()()(),Tl(741,`tr`,14)(742,`td`,15)(743,`div`,16)(744,`span`,17),cN(745,` p-min-date`),Gl(746,`br`),ag()()(),Tl(747,`td`,18)(748,`code`,25),cN(749,`string `),ag(),Tl(750,`code`,27),cN(751,` Date`),ag()(),Tl(752,`td`,20),cN(753,`-`),ag(),Tl(754,`td`,21)(755,`em`)(756,`strong`),cN(757,`(opcional)`),ag()(),Tl(758,`p`),cN(759,`Define uma data mínima para o `),Tl(760,`code`),cN(761,`po-datetimepicker`),ag(),cN(762,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),ag(),Tl(763,`p`),cN(764,`Aceita os formatos:`),ag(),Tl(765,`ul`)(766,`li`)(767,`code`),cN(768,`Date`),ag(),cN(769,` object: `),Tl(770,`code`),cN(771,`new Date(2026, 0, 1)`),ag()(),Tl(772,`li`),cN(773,`ISO string: `),Tl(774,`code`),cN(775,`'2026-01-01'`),ag()(),Tl(776,`li`),cN(777,`ISO com hora: `),Tl(778,`code`),cN(779,`'2026-01-01T00:00:00-03:00'`),ag()()()()(),Tl(780,`tr`,14)(781,`td`,15)(782,`div`,16)(783,`span`,17),cN(784,` p-min-time`),Gl(785,`br`),ag()()(),Tl(786,`td`,18)(787,`code`,25),cN(788,`string`),ag()(),Tl(789,`td`,20),cN(790,`-`),ag(),Tl(791,`td`,21)(792,`em`)(793,`strong`),cN(794,`(opcional)`),ag()(),Tl(795,`p`),cN(796,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),ag(),Tl(797,`p`),cN(798,`Formato aceito: `),Tl(799,`code`),cN(800,`HH:mm`),ag(),cN(801,` ou `),Tl(802,`code`),cN(803,`HH:mm:ss`),ag(),cN(804,`.`),ag()()(),Tl(805,`tr`,14)(806,`td`,15)(807,`div`,16)(808,`span`,17),cN(809,` p-minute-interval`),Gl(810,`br`),ag()()(),Tl(811,`td`,18)(812,`code`,28),cN(813,`number`),ag()(),Tl(814,`td`,20)(815,`p`)(816,`code`),cN(817,`5`),ag()()(),Tl(818,`td`,21)(819,`em`)(820,`strong`),cN(821,`(opcional)`),ag()(),Tl(822,`p`),cN(823,`Define o intervalo entre os minutos exibidos no painel do timer.`),ag()()(),Tl(824,`tr`,14)(825,`td`,15)(826,`div`,16)(827,`span`,17),cN(828,` name`),Gl(829,`br`),ag()()(),Tl(830,`td`,18)(831,`code`,25),cN(832,`string`),ag()(),Tl(833,`td`,20),cN(834,`-`),ag(),Tl(835,`td`,21)(836,`em`)(837,`strong`),cN(838,`(opcional)`),ag()(),Tl(839,`p`),cN(840,`Nome do componente.`),ag()()(),Tl(841,`tr`,14)(842,`td`,15)(843,`div`,16)(844,`span`,17),cN(845,` p-no-autocomplete`),Gl(846,`br`),ag()()(),Tl(847,`td`,18)(848,`code`,19),cN(849,`boolean `),ag(),Tl(850,`code`,25),cN(851,` string`),ag()(),Tl(852,`td`,20)(853,`p`)(854,`code`),cN(855,`false`),ag()()(),Tl(856,`td`,21)(857,`em`)(858,`strong`),cN(859,`(opcional)`),ag()(),Tl(860,`p`),cN(861,`Define a propriedade nativa `),Tl(862,`code`),cN(863,`autocomplete`),ag(),cN(864,` do campo como `),Tl(865,`code`),cN(866,`off`),ag(),cN(867,`.`),ag()()(),Tl(868,`tr`,14)(869,`td`,15)(870,`div`,22)(871,`span`,23),cN(872,` (p-blur)`),Gl(873,`br`),ag()()(),Tl(874,`td`,18)(875,`code`,24),cN(876,`EventEmitter`),ag()(),Tl(877,`td`,20),cN(878,`-`),ag(),Tl(879,`td`,21)(880,`em`)(881,`strong`),cN(882,`(opcional)`),ag()(),Tl(883,`p`),cN(884,`Evento disparado ao sair do campo (blur).`),ag()()(),Tl(885,`tr`,14)(886,`td`,15)(887,`div`,22)(888,`span`,23),cN(889,` (p-change)`),Gl(890,`br`),ag()()(),Tl(891,`td`,18)(892,`code`,24),cN(893,`EventEmitter`),ag()(),Tl(894,`td`,20),cN(895,`-`),ag(),Tl(896,`td`,21)(897,`em`)(898,`strong`),cN(899,`(opcional)`),ag()(),Tl(900,`p`),cN(901,`Evento disparado ao alterar valor do campo.`),ag()()(),Tl(902,`tr`,14)(903,`td`,15)(904,`div`,16)(905,`span`,17),cN(906,` p-optional`),Gl(907,`br`),ag()()(),Tl(908,`td`,18)(909,`code`,19),cN(910,`boolean`),ag()(),Tl(911,`td`,20)(912,`p`)(913,`code`),cN(914,`false`),ag()()(),Tl(915,`td`,21)(916,`em`)(917,`strong`),cN(918,`(opcional)`),ag()(),Tl(919,`p`),cN(920,`Define se a indicação de campo opcional será exibida.`),ag()()(),Tl(921,`tr`,14)(922,`td`,15)(923,`div`,16)(924,`span`,17),cN(925,` p-placeholder`),Gl(926,`br`),ag()()(),Tl(927,`td`,18)(928,`code`,25),cN(929,`string`),ag()(),Tl(930,`td`,20),cN(931,`-`),ag(),Tl(932,`td`,21)(933,`em`)(934,`strong`),cN(935,`(opcional)`),ag()(),Tl(936,`p`),cN(937,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ag()()(),Tl(938,`tr`,14)(939,`td`,15)(940,`div`,16)(941,`span`,17),cN(942,` p-helper`),Gl(943,`br`),ag()()(),Tl(944,`td`,18)(945,`code`,29),cN(946,`PoHelperOptions `),ag(),Tl(947,`code`,25),cN(948,` string`),ag()(),Tl(949,`td`,20),cN(950,`-`),ag(),Tl(951,`td`,21)(952,`em`)(953,`strong`),cN(954,`(opcional)`),ag()(),Tl(955,`p`),cN(956,`Define as opções do componente de ajuda (po-helper).`),ag(),Tl(957,`blockquote`)(958,`p`),cN(959,`Para mais informações acesse: `),Tl(960,`a`,30),cN(961,`https://po-ui.io/documentation/po-helper`),ag(),cN(962,`.`),ag()()()(),Tl(963,`tr`,14)(964,`td`,15)(965,`div`,16)(966,`span`,17),cN(967,` p-readonly`),Gl(968,`br`),ag()()(),Tl(969,`td`,18)(970,`code`,19),cN(971,`boolean `),ag(),Tl(972,`code`,25),cN(973,` string`),ag()(),Tl(974,`td`,20)(975,`p`)(976,`code`),cN(977,`false`),ag()()(),Tl(978,`td`,21)(979,`em`)(980,`strong`),cN(981,`(opcional)`),ag()(),Tl(982,`p`),cN(983,`Torna o componente somente leitura.`),ag()()(),Tl(984,`tr`,14)(985,`td`,15)(986,`div`,16)(987,`span`,17),cN(988,` p-required`),Gl(989,`br`),ag()()(),Tl(990,`td`,18)(991,`code`,19),cN(992,`boolean `),ag(),Tl(993,`code`,25),cN(994,` string`),ag()(),Tl(995,`td`,20)(996,`p`)(997,`code`),cN(998,`false`),ag()()(),Tl(999,`td`,21)(1e3,`em`)(1001,`strong`),cN(1002,`(opcional)`),ag()(),Tl(1003,`p`),cN(1004,`Define que o campo será obrigatório.`),ag()()(),Tl(1005,`tr`,14)(1006,`td`,15)(1007,`div`,16)(1008,`span`,17),cN(1009,` p-second-interval`),Gl(1010,`br`),ag()()(),Tl(1011,`td`,18)(1012,`code`,28),cN(1013,`number`),ag()(),Tl(1014,`td`,20)(1015,`p`)(1016,`code`),cN(1017,`1`),ag()()(),Tl(1018,`td`,21)(1019,`em`)(1020,`strong`),cN(1021,`(opcional)`),ag()(),Tl(1022,`p`),cN(1023,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),Tl(1024,`code`),cN(1025,`p-show-seconds`),ag(),cN(1026,` está ativo.`),ag()()(),Tl(1027,`tr`,14)(1028,`td`,15)(1029,`div`,16)(1030,`span`,17),cN(1031,` p-required-field-error-message`),Gl(1032,`br`),ag()()(),Tl(1033,`td`,18)(1034,`code`,19),cN(1035,`boolean`),ag()(),Tl(1036,`td`,20)(1037,`p`)(1038,`code`),cN(1039,`false`),ag()()(),Tl(1040,`td`,21)(1041,`em`)(1042,`strong`),cN(1043,`(opcional)`),ag()(),Tl(1044,`p`),cN(1045,`Exibe a mensagem setada na propriedade `),Tl(1046,`code`),cN(1047,`p-error-pattern`),ag(),cN(1048,` se o campo estiver vazio e for requerido.`),ag(),Tl(1049,`blockquote`)(1050,`p`),cN(1051,`Necessário que a propriedade `),Tl(1052,`code`),cN(1053,`p-required`),ag(),cN(1054,` esteja habilitada.`),ag()()()(),Tl(1055,`tr`,14)(1056,`td`,15)(1057,`div`,16)(1058,`span`,17),cN(1059,` p-show-required`),Gl(1060,`br`),ag()()(),Tl(1061,`td`,18)(1062,`code`,19),cN(1063,`boolean`),ag()(),Tl(1064,`td`,20)(1065,`p`)(1066,`code`),cN(1067,`false`),ag()()(),Tl(1068,`td`,21)(1069,`em`)(1070,`strong`),cN(1071,`(opcional)`),ag()(),Tl(1072,`p`),cN(1073,`Define se a indicação de campo obrigatório será exibida.`),ag()()(),Tl(1074,`tr`,14)(1075,`td`,15)(1076,`div`,16)(1077,`span`,17),cN(1078,` p-show-seconds`),Gl(1079,`br`),ag()()(),Tl(1080,`td`,18)(1081,`code`,19),cN(1082,`boolean`),ag()(),Tl(1083,`td`,20)(1084,`p`)(1085,`code`),cN(1086,`false`),ag()()(),Tl(1087,`td`,21)(1088,`em`)(1089,`strong`),cN(1090,`(opcional)`),ag()(),Tl(1091,`p`),cN(1092,`Exibe a coluna de segundos no painel de seleção do timer.`),ag()()(),Tl(1093,`tr`,14)(1094,`td`,15)(1095,`div`,16)(1096,`span`,17),cN(1097,` p-size`),Gl(1098,`br`),ag()()(),Tl(1099,`td`,18)(1100,`code`,25),cN(1101,`string`),ag()(),Tl(1102,`td`,20)(1103,`p`)(1104,`code`),cN(1105,`medium`),ag()()(),Tl(1106,`td`,21)(1107,`em`)(1108,`strong`),cN(1109,`(opcional)`),ag()(),Tl(1110,`p`),cN(1111,`Define o tamanho do componente:`),ag(),Tl(1112,`ul`)(1113,`li`)(1114,`code`),cN(1115,`small`),ag(),cN(1116,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(1117,`li`)(1118,`code`),cN(1119,`medium`),ag(),cN(1120,`: altura do input como 44px.`),ag()()()(),Tl(1121,`tr`,14)(1122,`td`,15)(1123,`div`,16)(1124,`span`,17),cN(1125,` p-format-time`),Gl(1126,`br`),ag()()(),Tl(1127,`td`,18)(1128,`code`,31),cN(1129,`PoTimerFormat`),ag()(),Tl(1130,`td`,20)(1131,`p`),cN(1132,`Determinado pelo locale`),ag()(),Tl(1133,`td`,21)(1134,`em`)(1135,`strong`),cN(1136,`(opcional)`),ag()(),Tl(1137,`p`),cN(1138,`Define o formato de exibição do timer.`),ag(),Tl(1139,`p`),cN(1140,`Valores válidos:`),ag(),Tl(1141,`ul`)(1142,`li`)(1143,`code`),cN(1144,`24`),ag(),cN(1145,`: formato de 24 horas (padrão para pt, es, ru)`),ag(),Tl(1146,`li`)(1147,`code`),cN(1148,`12`),ag(),cN(1149,`: formato de 12 horas com indicador AM/PM (padrão para en)`),ag()(),Tl(1150,`p`),cN(1151,`Quando não informado, o formato será determinado automaticamente pelo locale:`),ag(),Tl(1152,`ul`)(1153,`li`)(1154,`code`),cN(1155,`en`),ag(),cN(1156,` → 12h (AM/PM)`),ag(),Tl(1157,`li`)(1158,`code`),cN(1159,`pt`),ag(),cN(1160,`, `),Tl(1161,`code`),cN(1162,`es`),ag(),cN(1163,`, `),Tl(1164,`code`),cN(1165,`ru`),ag(),cN(1166,` → 24h`),ag()()()()(),Tl(1167,`h3`,10),cN(1168,`Métodos`),ag(),Tl(1169,`table`,32)(1170,`tr`,14)(1171,`th`,33)(1172,`div`,16)(1173,`h4`)(1174,`span`,17),cN(1175,` showAdditionalHelp `),ag()()()()(),Tl(1176,`tr`,21)(1177,`td`,21)(1178,`p`),cN(1179,`Método que exibe `),Tl(1180,`code`),cN(1181,`p-helper`),ag(),cN(1182,` ou executa a ação definida em `),Tl(1183,`code`),cN(1184,`p-helper{eventOnClick}`),ag(),cN(1185,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1186,`code`),cN(1187,`p-keydown`),ag(),cN(1188,`.`),ag(),Tl(1189,`blockquote`)(1190,`p`),cN(1191,`Exibe ou oculta o conteúdo do componente `),Tl(1192,`code`),cN(1193,`po-helper`),ag(),cN(1194,` quando o componente estiver com foco.`),ag()(),Tl(1195,`pre`)(1196,`code`),cN(1197,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),ag()(),Tl(1198,`pre`)(1199,`code`),cN(1200,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(1201,`br`),ag())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var Fe=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(w(Xn),w(Cn))};static ɵcmp=Un({type:l,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Datetimepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-datetimepicker-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-datetimepicker-basic-view`)(6,`sample-po-datetimepicker-labs-view`)(7,`sample-po-datetimepicker-12h-seconds-view`)(8,`sample-po-datetimepicker-scheduling-view`),ag()()()),r&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ce,Se,he,xe,fe],encapsulation:2,changeDetection:1})}return l})()}];var ve=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[bL.forChild(Fe),bL]})}return l})();var Et=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[ar,ve]})}return l})();export{Et as DocPoDatetimepickerModule};