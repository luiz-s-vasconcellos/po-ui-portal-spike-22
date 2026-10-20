import{$r as Zn,Bn as zu,Br as Sx,Ct as Wte,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Ri as nu,Rt as _oe,Si as iu,Vi as p,Vr as TF,Wt as cP,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,i as _a,ir as EF,ji as mO,mn as ni,ni as _o,pa as wg,r as Ta,rt as Ote,sa as vo,sn as kie,ta as ue,ua as wK,un as m5,ur as Fx,ut as Rte,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var se=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-datetimepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datetimepicker`,`p-label`,`PO Datetimepicker`]],template:function(r,i){r&1&&nu(0,`po-datetimepicker`,0)},dependencies:[cP],encapsulation:2,changeDetection:1})}return l})();var De=l=>({"docs-sample-code-tabs":l});var ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-datetimepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Datetimepicker Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-datetimepicker-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,De,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,se],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatDateOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];formatTimeOptions=[{label:`24h`,value:`24`},{label:`12h (AM/PM)`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText=``,this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-datetimepicker-labs`]],standalone:!1,decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`datetimepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-limit`,`p-error-pattern`,`p-format-date`,`p-format-time`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-locale`,`p-max-date`,`p-max-time`,`p-min-date`,`p-min-time`,`p-minute-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-second-interval`,`p-show-required`,`p-show-seconds`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatDate`,`p-columns`,`4`,`p-label`,`Format Date`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatTime`,`p-columns`,`4`,`p-label`,`Format Time`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let d=Sx();jc(0,`po-datetimepicker`,1),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.datetimepicker,o)||(i.datetimepicker=o),v_(o)}),mt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3)(4,`po-info`,4),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.label,o)||(i.label=o),v_(o)}),wg(),jc(9,`po-input`,6),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.help,o)||(i.help=o),v_(o)}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.helperText,o)||(i.helperText=o),v_(o)}),wg(),jc(11,`po-input`,8),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.placeholder,o)||(i.placeholder=o),v_(o)}),wg(),jc(12,`po-input`,9),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.errorPattern,o)||(i.errorPattern=o),v_(o)}),wg(),jc(13,`po-number`,10),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.minuteInterval,o)||(i.minuteInterval=o),v_(o)}),wg(),jc(14,`po-number`,11),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.secondInterval,o)||(i.secondInterval=o),v_(o)}),wg(),jc(15,`po-timepicker`,12),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.minTime,o)||(i.minTime=o),v_(o)}),wg(),jc(16,`po-timepicker`,13),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.maxTime,o)||(i.maxTime=o),v_(o)}),wg(),jc(17,`po-datepicker`,14),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.minDate,o)||(i.minDate=o),v_(o)}),wg(),jc(18,`po-datepicker`,15),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.maxDate,o)||(i.maxDate=o),v_(o)}),wg(),jc(19,`po-checkbox-group`,16),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.properties,o)||(i.properties=o),v_(o)}),wg(),jc(20,`po-radio-group`,17),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.locale,o)||(i.locale=o),v_(o)}),wg(),jc(21,`po-radio-group`,18),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.formatDate,o)||(i.formatDate=o),v_(o)}),wg(),jc(22,`po-radio-group`,19),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.formatTime,o)||(i.formatTime=o),v_(o)}),wg(),jc(23,`po-radio-group`,20),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.size,o)||(i.size=o),v_(o)}),wg(),jc(24,`div`,2)(25,`po-button`,21),mt(`p-click`,function(){return i.restore()}),wg()()()}r&2&&(ib(`ngModel`,i.datetimepicker),jE(`p-clean`,i.properties.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-error-pattern`,i.errorPattern)(`p-format-date`,i.formatDate)(`p-format-time`,i.formatTime)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-locale`,i.locale)(`p-max-date`,i.maxDate)(`p-max-time`,i.maxTime)(`p-min-date`,i.minDate)(`p-min-time`,i.minTime)(`p-minute-interval`,i.minuteInterval)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-second-interval`,i.secondInterval)(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-seconds`,i.properties.includes(`showSeconds`))(`p-size`,i.size),t0(),rg(3),jE(`p-value`,i.datetimepicker),rg(),jE(`p-value`,i.event),rg(4),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.help),t0(),rg(),ib(`ngModel`,i.helperText),t0(),rg(),ib(`ngModel`,i.placeholder),t0(),rg(),ib(`ngModel`,i.errorPattern),t0(),rg(),ib(`ngModel`,i.minuteInterval),t0(),rg(),ib(`ngModel`,i.secondInterval),t0(),rg(),ib(`ngModel`,i.minTime),t0(),rg(),ib(`ngModel`,i.maxTime),t0(),rg(),ib(`ngModel`,i.minDate),jE(`p-max-date`,i.maxDate),t0(),rg(),ib(`ngModel`,i.maxDate),jE(`p-min-date`,i.minDate),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.locale),jE(`p-options`,i.localeOptions),t0(),rg(),ib(`ngModel`,i.formatDate),jE(`p-options`,i.formatDateOptions),t0(),rg(),ib(`ngModel`,i.formatTime),jE(`p-options`,i.formatTimeOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,Rte,cP,A5,doe,Ote,kie,_oe],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l});var Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-datetimepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Datetimepicker Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-datetimepicker
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-datetimepicker-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,_e,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ge],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`datetimepicker12h`,`p-label`,`PO Datetimepicker - 12h with Seconds`,`p-show-seconds`,`true`,`p-format-time`,`12`,`p-format-date`,`mm/dd/yyyy`,3,`ngModelChange`,`ngModel`]],template:function(r,i){r&1&&(jc(0,`po-datetimepicker`,0),JN(),ob(`ngModelChange`,function(s){return sO(i.datetime,s)||(i.datetime=s),s}),wg()),r&2&&(ib(`ngModel`,i.datetime),t0())},dependencies:[CK,TF,cP],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Datetimepicker - 12h with Seconds`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-datetimepicker-12h-seconds`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Te,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ee],encapsulation:2,changeDetection:1})}return l})();var Oe=[`formScheduling`];var be=(()=>{class l{poDialog=p(Wte);poNotification=p(zu);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:`general`,label:`Clínico Geral`},{value:`cardiology`,label:`Cardiologia`},{value:`dermatology`,label:`Dermatologia`},{value:`orthopedics`,label:`Ortopedia`},{value:`neurology`,label:`Neurologia`}];confirm(){let p=this.appointment?this.appointment.slice(0,16):``,r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:r,confirm:()=>{this.poNotification.success(`Consulta agendada com sucesso!`),this.formScheduling.reset()},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:``}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-datetimepicker-scheduling`]],viewQuery:function(r,i){if(r&1&&iu(Oe,7),r&2){let d;vo(d=_o())&&(i.formScheduling=d.first)}},standalone:!1,decls:10,vars:6,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`patient`,`p-label`,`Paciente`,`p-placeholder`,`Nome do paciente`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`doctor`,`p-label`,`Médico`,`p-placeholder`,`Nome do médico`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`specialty`,`p-label`,`Especialidade`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`appointment`,`p-clean`,``,`p-label`,`Data e Hora da Consulta`,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-minute-interval`,`15`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`confirmButton`,`p-label`,`Agendar Consulta`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let d=Sx();jc(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.patient,o)||(i.patient=o),v_(o)}),wg(),jc(4,`po-input`,3),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.doctor,o)||(i.doctor=o),v_(o)}),wg()(),jc(5,`div`,1)(6,`po-select`,4),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.specialty,o)||(i.specialty=o),v_(o)}),wg(),jc(7,`po-datetimepicker`,5),JN(),ob(`ngModelChange`,function(o){return y_(d),sO(i.appointment,o)||(i.appointment=o),v_(o)}),wg()(),jc(8,`div`,1)(9,`po-button`,6),mt(`p-click`,function(){return i.confirm()}),wg()()()}if(r&2){let d=Fx(1);rg(3),ib(`ngModel`,i.patient),t0(),rg(),ib(`ngModel`,i.doctor),t0(),rg(2),ib(`ngModel`,i.specialty),jE(`p-options`,i.specialtyOptions),t0(),rg(),ib(`ngModel`,i.appointment),t0(),rg(2),jE(`p-disabled`,d.invalid)}},dependencies:[wK,CK,EK,TF,EF,ni,cP,A5,moe],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l});var xe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-datetimepicker-scheduling-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Datetimepicker - Scheduling`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form #formScheduling="ngForm">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { UntypedFormControl } from '@angular/forms';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-datetimepicker-scheduling`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ve,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,be],encapsulation:2,changeDetection:1})}return l})();var fe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-datetimepicker-doc`]],standalone:!1,decls:1202,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoDatetimepickerComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`O `),jc(24,`code`),iO(25,`po-datetimepicker`),wg(),iO(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),wg(),jc(27,`p`),iO(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),jc(29,`code`),iO(30,`p-format-date`),wg(),iO(31,`. O formato de hora pode ser 24h ou 12h (AM/PM), configurável via `),jc(32,`code`),iO(33,`p-format-time`),wg(),iO(34,`.`),wg(),jc(35,`p`),iO(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),jc(37,`code`),iO(38,`p-locale`),wg(),iO(39,`.`),wg(),jc(40,`p`),iO(41,`O componente aceita os seguintes formatos de entrada:`),wg(),jc(42,`ul`)(43,`li`),iO(44,`ISO 8601 com timezone: `),jc(45,`code`),iO(46,`'2026-05-12T14:30:00-03:00'`),wg()(),jc(47,`li`),iO(48,`ISO 8601 UTC: `),jc(49,`code`),iO(50,`'2026-05-12T14:30:00Z'`),wg()(),jc(51,`li`),iO(52,`ISO 8601 sem timezone: `),jc(53,`code`),iO(54,`'2026-05-12T14:30:00'`),wg()(),jc(55,`li`),iO(56,`ISO 8601 apenas data: `),jc(57,`code`),iO(58,`'2026-05-12'`),wg()(),jc(59,`li`),iO(60,`JavaScript Date Object: `),jc(61,`code`),iO(62,`new Date(2026, 4, 12, 14, 30)`),wg()()(),jc(63,`p`),iO(64,`O formato de saída do `),jc(65,`em`),iO(66,`model`),wg(),iO(67,` é sempre ISO 8601 com timezone local: `),jc(68,`code`),iO(69,`'yyyy-mm-ddTHH:mm+/-HH:mm'`),wg(),iO(70,`
(ou `),jc(71,`code`),iO(72,`'yyyy-mm-ddTHH:mm:ss+/-HH:mm'`),wg(),iO(73,` quando `),jc(74,`code`),iO(75,`p-show-seconds`),wg(),iO(76,` está ativo).`),wg(),jc(77,`p`)(78,`strong`),iO(79,`Importante:`),wg()(),jc(80,`ul`)(81,`li`),iO(82,`O valor emitido no model inclui o offset do timezone local do navegador.`),wg(),jc(83,`li`),iO(84,`Ao receber um valor com timezone, o componente converte automaticamente para horário local.`),wg(),jc(85,`li`),iO(86,`Caso a data/hora esteja inválida, o `),jc(87,`code`),iO(88,`model`),wg(),iO(89,` receberá a mensagem de erro localizada.`),wg(),jc(90,`li`),iO(91,`Caso o `),jc(92,`code`),iO(93,`input`),wg(),iO(94,` esteja passando um `),jc(95,`code`),iO(96,`[(ngModel)]`),wg(),iO(97,`, mas não tenha um `),jc(98,`code`),iO(99,`name`),wg(),iO(100,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),jc(101,`code`),iO(102,`[ngModelOptions]="{standalone: true}"`),wg(),iO(103,`).`),wg()(),jc(104,`p`),iO(105,`Exemplo:`),wg(),jc(106,`pre`)(107,`code`),iO(108,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),wg()(),jc(109,`blockquote`)(110,`p`),iO(111,`Não esqueça de importar o `),jc(112,`code`),iO(113,`FormsModule`),wg(),iO(114,` em seu módulo, tal como para utilizar o `),jc(115,`code`),iO(116,`input default`),wg(),iO(117,`.`),wg()(),jc(118,`h4`),iO(119,`Tokens customizáveis`),wg(),jc(120,`p`),iO(121,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),nu(122,`br`),iO(123,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),jc(124,`code`),iO(125,`.po-input`),wg()(),jc(126,`blockquote`)(127,`p`),iO(128,`Para maiores informações, acesse o guia `),jc(129,`a`,6),iO(130,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(131,`.`),wg()(),jc(132,`table`)(133,`thead`)(134,`tr`)(135,`th`),iO(136,`Propriedade`),wg(),jc(137,`th`),iO(138,`Descrição`),wg(),jc(139,`th`),iO(140,`Valor Padrão`),wg()()(),jc(141,`tbody`)(142,`tr`)(143,`td`)(144,`strong`),iO(145,`Default Values`),wg()(),nu(146,`td`)(147,`td`),wg(),jc(148,`tr`)(149,`td`)(150,`code`),iO(151,`--font-family`),wg()(),jc(152,`td`),iO(153,`Família tipográfica usada`),wg(),jc(154,`td`)(155,`code`),iO(156,`var(--font-family-theme)`),wg()()(),jc(157,`tr`)(158,`td`)(159,`code`),iO(160,`--font-size`),wg()(),jc(161,`td`),iO(162,`Tamanho da fonte`),wg(),jc(163,`td`)(164,`code`),iO(165,`var(--font-size-default)`),wg()()(),jc(166,`tr`)(167,`td`)(168,`code`),iO(169,`--text-color-placeholder`),wg(),iO(170,` \xA0`),wg(),jc(171,`td`),iO(172,`Cor principal do texto do placeholder`),wg(),jc(173,`td`)(174,`code`),iO(175,`var(--color-neutral-light-30)`),wg()()(),jc(176,`tr`)(177,`td`)(178,`code`),iO(179,`--color`),wg()(),jc(180,`td`),iO(181,`Cor principal do datetimepicker`),wg(),jc(182,`td`)(183,`code`),iO(184,`var(--color-neutral-dark-70)`),wg()()(),jc(185,`tr`)(186,`td`)(187,`code`),iO(188,`--background`),wg()(),jc(189,`td`),iO(190,`Cor de background`),wg(),jc(191,`td`)(192,`code`),iO(193,`var(--color-neutral-light-05)`),wg()()(),jc(194,`tr`)(195,`td`)(196,`code`),iO(197,`--padding`),wg()(),jc(198,`td`),iO(199,`Preenchimento`),wg(),jc(200,`td`)(201,`code`),iO(202,`0 0.5rem`),wg()()(),jc(203,`tr`)(204,`td`)(205,`code`),iO(206,`--text-color`),wg()(),jc(207,`td`),iO(208,`Cor do texto`),wg(),jc(209,`td`)(210,`code`),iO(211,`var(--color-neutral-dark-90)`),wg()()(),jc(212,`tr`)(213,`td`)(214,`code`),iO(215,`--field-container-title-justify`),wg()(),jc(216,`td`),iO(217,`Alinhamento horizontal do título (`),jc(218,`code`),iO(219,`justify-content`),wg(),iO(220,`)`),wg(),jc(221,`td`)(222,`code`),iO(223,`space-between`),wg()()(),jc(224,`tr`)(225,`td`)(226,`code`),iO(227,`--field-container-title-flex`),wg()(),jc(228,`td`),iO(229,`Flex do título (`),jc(230,`code`),iO(231,`flex`),wg(),iO(232,`)`),wg(),jc(233,`td`)(234,`code`),iO(235,`1 auto`),wg()()(),jc(236,`tr`)(237,`td`)(238,`strong`),iO(239,`Hover`),wg()(),nu(240,`td`)(241,`td`),wg(),jc(242,`tr`)(243,`td`)(244,`code`),iO(245,`--color-hover`),wg()(),jc(246,`td`),iO(247,`Cor principal no estado hover`),wg(),jc(248,`td`)(249,`code`),iO(250,`var(--color-brand-01-dark)`),wg()()(),jc(251,`tr`)(252,`td`)(253,`code`),iO(254,`--background-hover`),wg()(),jc(255,`td`),iO(256,`Cor de background no estado hover`),wg(),jc(257,`td`)(258,`code`),iO(259,`var(--color-brand-01-lightest)`),wg()()(),jc(260,`tr`)(261,`td`)(262,`strong`),iO(263,`Focused`),wg()(),nu(264,`td`)(265,`td`),wg(),jc(266,`tr`)(267,`td`)(268,`code`),iO(269,`--color-focused`),wg()(),jc(270,`td`),iO(271,`Cor principal no estado de focus`),wg(),jc(272,`td`)(273,`code`),iO(274,`var(--color-action-default)`),wg()()(),jc(275,`tr`)(276,`td`)(277,`code`),iO(278,`--outline-color-focused`),wg()(),jc(279,`td`),iO(280,`Cor do outline do estado de focus`),wg(),jc(281,`td`)(282,`code`),iO(283,`var(--color-action-focus)`),wg()()(),jc(284,`tr`)(285,`td`)(286,`strong`),iO(287,`Disabled`),wg()(),nu(288,`td`)(289,`td`),wg(),jc(290,`tr`)(291,`td`)(292,`code`),iO(293,`--color-disabled`),wg()(),jc(294,`td`),iO(295,`Cor principal no estado disabled`),wg(),jc(296,`td`)(297,`code`),iO(298,`var(--color-neutral-light-30)`),wg()()(),jc(299,`tr`)(300,`td`)(301,`code`),iO(302,`--background-disabled`),wg()(),jc(303,`td`),iO(304,`Cor de background no estado disabled \xA0`),wg(),jc(305,`td`)(306,`code`),iO(307,`var(--color-neutral-light-20)`),wg()()(),jc(308,`tr`)(309,`td`)(310,`code`),iO(311,`--text-color-disabled`),wg()(),jc(312,`td`),iO(313,`Cor do texto no estado disabled`),wg(),jc(314,`td`)(315,`code`),iO(316,`var(--color-neutral-dark-70)`),wg()()()()()(),jc(317,`div`,7)(318,`h4`,8),iO(319,`Seletor`),wg(),jc(320,`pre`,9),iO(321,`<po-datetimepicker
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
`),wg()(),jc(322,`h4`,10),iO(323,`Propriedades`),wg(),jc(324,`table`,11)(325,`tr`,12)(326,`th`,13),iO(327,`Nome`),wg(),jc(328,`th`,13),iO(329,`Tipo`),wg(),jc(330,`th`,13),iO(331,`Padrão`),wg(),jc(332,`th`,13),iO(333,`Descrição`),wg()(),jc(334,`tr`,14)(335,`td`,15)(336,`div`,16)(337,`span`,17),iO(338,` p-append-in-body`),nu(339,`br`),wg()()(),jc(340,`td`,18)(341,`code`,19),iO(342,`boolean`),wg()(),jc(343,`td`,20)(344,`p`)(345,`code`),iO(346,`false`),wg()()(),jc(347,`td`,21)(348,`em`)(349,`strong`),iO(350,`(opcional)`),wg()(),jc(351,`p`),iO(352,`Define que o `),jc(353,`code`),iO(354,`calendar`),wg(),iO(355,` e/ou tooltip serão incluídos no body da página e não dentro do componente.`),wg()()(),jc(356,`tr`,14)(357,`td`,15)(358,`div`,16)(359,`span`,17),iO(360,` p-auto-focus`),nu(361,`br`),wg()()(),jc(362,`td`,18)(363,`code`,19),iO(364,`boolean`),wg()(),jc(365,`td`,20)(366,`p`)(367,`code`),iO(368,`false`),wg()()(),jc(369,`td`,21)(370,`em`)(371,`strong`),iO(372,`(opcional)`),wg()(),jc(373,`p`),iO(374,`Aplica foco no elemento ao ser iniciado.`),wg()()(),jc(375,`tr`,14)(376,`td`,15)(377,`div`,22)(378,`span`,23),iO(379,` (p-change-model)`),nu(380,`br`),wg()()(),jc(381,`td`,18)(382,`code`,24),iO(383,`EventEmitter`),wg()(),jc(384,`td`,20),iO(385,`-`),wg(),jc(386,`td`,21)(387,`em`)(388,`strong`),iO(389,`(opcional)`),wg()(),jc(390,`p`),iO(391,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(392,`code`),iO(393,`setValue`),wg(),iO(394,`, `),jc(395,`code`),iO(396,`patchValue`),wg(),iO(397,`, carregamento assíncrono).`),wg(),jc(398,`p`),iO(399,`Diferentemente do `),jc(400,`code`),iO(401,`p-change`),wg(),iO(402,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(403,`code`),iO(404,`p-change-model`),wg(),iO(405,` cobre todos os cenários de alteração de valor.`),wg(),jc(406,`p`),iO(407,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(408,`tr`,14)(409,`td`,15)(410,`div`,16)(411,`span`,17),iO(412,` p-clean`),nu(413,`br`),wg()()(),jc(414,`td`,18)(415,`code`,19),iO(416,`boolean `),wg(),jc(417,`code`,25),iO(418,` string`),wg()(),jc(419,`td`,20)(420,`p`)(421,`code`),iO(422,`false`),wg()()(),jc(423,`td`,21)(424,`em`)(425,`strong`),iO(426,`(opcional)`),wg()(),jc(427,`p`),iO(428,`Habilita ação para limpar o campo.`),wg()()(),jc(429,`tr`,14)(430,`td`,15)(431,`div`,16)(432,`span`,17),iO(433,` p-compact-label`),nu(434,`br`),wg()()(),jc(435,`td`,18)(436,`code`,19),iO(437,`boolean`),wg()(),jc(438,`td`,20)(439,`p`)(440,`code`),iO(441,`false`),wg()()(),jc(442,`td`,21)(443,`em`)(444,`strong`),iO(445,`(opcional)`),wg()(),jc(446,`p`),iO(447,`Define se o título do campo será exibido de forma compacta.`),wg()()(),jc(448,`tr`,14)(449,`td`,15)(450,`div`,16)(451,`span`,17),iO(452,` p-format-date`),nu(453,`br`),wg()()(),jc(454,`td`,18)(455,`code`,25),iO(456,`string`),wg()(),jc(457,`td`,20)(458,`p`),iO(459,`Determinado pelo locale`),wg()(),jc(460,`td`,21)(461,`em`)(462,`strong`),iO(463,`(opcional)`),wg()(),jc(464,`p`),iO(465,`Define o formato de exibição da data.`),wg(),jc(466,`p`),iO(467,`Valores válidos:`),wg(),jc(468,`ul`)(469,`li`)(470,`code`),iO(471,`dd/mm/yyyy`),wg()(),jc(472,`li`)(473,`code`),iO(474,`mm/dd/yyyy`),wg()(),jc(475,`li`)(476,`code`),iO(477,`yyyy/mm/dd`),wg()()(),jc(478,`p`),iO(479,`Quando não informado, o formato será determinado automaticamente pelo locale:`),wg(),jc(480,`ul`)(481,`li`)(482,`code`),iO(483,`en`),wg(),iO(484,` → `),jc(485,`code`),iO(486,`mm/dd/yyyy`),wg()(),jc(487,`li`)(488,`code`),iO(489,`pt`),wg(),iO(490,`, `),jc(491,`code`),iO(492,`es`),wg(),iO(493,`, `),jc(494,`code`),iO(495,`ru`),wg(),iO(496,` → `),jc(497,`code`),iO(498,`dd/mm/yyyy`),wg()()()()(),jc(499,`tr`,14)(500,`td`,15)(501,`div`,16)(502,`span`,17),iO(503,` p-disabled`),nu(504,`br`),wg()()(),jc(505,`td`,18)(506,`code`,19),iO(507,`boolean `),wg(),jc(508,`code`,25),iO(509,` string`),wg()(),jc(510,`td`,20)(511,`p`)(512,`code`),iO(513,`false`),wg()()(),jc(514,`td`,21)(515,`em`)(516,`strong`),iO(517,`(opcional)`),wg()(),jc(518,`p`),iO(519,`Desabilita o campo.`),wg()()(),jc(520,`tr`,14)(521,`td`,15)(522,`div`,16)(523,`span`,17),iO(524,` p-error-limit`),nu(525,`br`),wg()()(),jc(526,`td`,18)(527,`code`,19),iO(528,`boolean`),wg()(),jc(529,`td`,20)(530,`p`)(531,`code`),iO(532,`false`),wg()()(),jc(533,`td`,21)(534,`em`)(535,`strong`),iO(536,`(opcional)`),wg()(),jc(537,`p`),iO(538,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg()()(),jc(539,`tr`,14)(540,`td`,15)(541,`div`,16)(542,`span`,17),iO(543,` p-error-pattern`),nu(544,`br`),wg()()(),jc(545,`td`,18)(546,`code`,25),iO(547,`string`),wg()(),jc(548,`td`,20),iO(549,`-`),wg(),jc(550,`td`,21)(551,`em`)(552,`strong`),iO(553,`(opcional)`),wg()(),jc(554,`p`),iO(555,`Mensagem apresentada quando a data/hora for inválida ou fora do período.`),wg()()(),jc(556,`tr`,14)(557,`td`,15)(558,`div`,16)(559,`span`,17),iO(560,` p-help`),nu(561,`br`),wg()()(),jc(562,`td`,18)(563,`code`,25),iO(564,`string`),wg()(),jc(565,`td`,20),iO(566,`-`),wg(),jc(567,`td`,21)(568,`em`)(569,`strong`),iO(570,`(opcional)`),wg()(),jc(571,`p`),iO(572,`Texto de apoio do campo.`),wg()()(),jc(573,`tr`,14)(574,`td`,15)(575,`div`,22)(576,`span`,23),iO(577,` (p-keydown)`),nu(578,`br`),wg()()(),jc(579,`td`,18)(580,`code`,24),iO(581,`EventEmitter`),wg()(),jc(582,`td`,20),iO(583,`-`),wg(),jc(584,`td`,21)(585,`em`)(586,`strong`),iO(587,`(opcional)`),wg()(),jc(588,`p`),iO(589,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),wg()()(),jc(590,`tr`,14)(591,`td`,15)(592,`div`,16)(593,`span`,17),iO(594,` p-label`),nu(595,`br`),wg()()(),jc(596,`td`,18)(597,`code`,25),iO(598,`string`),wg()(),jc(599,`td`,20),iO(600,`-`),wg(),jc(601,`td`,21)(602,`em`)(603,`strong`),iO(604,`(opcional)`),wg()(),jc(605,`p`),iO(606,`Rótulo do campo.`),wg()()(),jc(607,`tr`,14)(608,`td`,15)(609,`div`,16)(610,`span`,17),iO(611,` p-label-text-wrap`),nu(612,`br`),wg()()(),jc(613,`td`,18)(614,`code`,19),iO(615,`boolean`),wg()(),jc(616,`td`,20)(617,`p`)(618,`code`),iO(619,`false`),wg()()(),jc(620,`td`,21)(621,`em`)(622,`strong`),iO(623,`(opcional)`),wg()(),jc(624,`p`),iO(625,`Habilita a quebra automática do texto da propriedade `),jc(626,`code`),iO(627,`p-label`),wg(),iO(628,`.`),wg()()(),jc(629,`tr`,14)(630,`td`,15)(631,`div`,16)(632,`span`,17),iO(633,` p-loading`),nu(634,`br`),wg()()(),jc(635,`td`,18)(636,`code`,19),iO(637,`boolean `),wg(),jc(638,`code`,25),iO(639,` string`),wg()(),jc(640,`td`,20)(641,`p`)(642,`code`),iO(643,`false`),wg()()(),jc(644,`td`,21)(645,`em`)(646,`strong`),iO(647,`(opcional)`),wg()(),jc(648,`p`),iO(649,`Exibe um ícone de carregamento no lado direito do campo.`),wg()()(),jc(650,`tr`,14)(651,`td`,15)(652,`div`,16)(653,`span`,17),iO(654,` p-locale`),nu(655,`br`),wg()()(),jc(656,`td`,18)(657,`code`,25),iO(658,`string`),wg()(),jc(659,`td`,20),iO(660,`-`),wg(),jc(661,`td`,21)(662,`em`)(663,`strong`),iO(664,`(opcional)`),wg()(),jc(665,`p`),iO(666,`Idioma do componente.`),wg(),jc(667,`blockquote`)(668,`p`),iO(669,`O locale padrão será recuperado com base no `),jc(670,`a`,26)(671,`code`),iO(672,`PoI18nService`),wg()(),iO(673,` ou `),jc(674,`em`),iO(675,`browser`),wg(),iO(676,`.`),wg()()()(),jc(677,`tr`,14)(678,`td`,15)(679,`div`,16)(680,`span`,17),iO(681,` p-max-date`),nu(682,`br`),wg()()(),jc(683,`td`,18)(684,`code`,25),iO(685,`string `),wg(),jc(686,`code`,27),iO(687,` Date`),wg()(),jc(688,`td`,20),iO(689,`-`),wg(),jc(690,`td`,21)(691,`em`)(692,`strong`),iO(693,`(opcional)`),wg()(),jc(694,`p`),iO(695,`Define uma data máxima para o `),jc(696,`code`),iO(697,`po-datetimepicker`),wg(),iO(698,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),wg(),jc(699,`p`),iO(700,`Aceita os formatos:`),wg(),jc(701,`ul`)(702,`li`)(703,`code`),iO(704,`Date`),wg(),iO(705,` object: `),jc(706,`code`),iO(707,`new Date(2026, 4, 31)`),wg()(),jc(708,`li`),iO(709,`ISO string: `),jc(710,`code`),iO(711,`'2026-05-31'`),wg()(),jc(712,`li`),iO(713,`ISO com hora: `),jc(714,`code`),iO(715,`'2026-05-31T23:59:59-03:00'`),wg()()()()(),jc(716,`tr`,14)(717,`td`,15)(718,`div`,16)(719,`span`,17),iO(720,` p-max-time`),nu(721,`br`),wg()()(),jc(722,`td`,18)(723,`code`,25),iO(724,`string`),wg()(),jc(725,`td`,20),iO(726,`-`),wg(),jc(727,`td`,21)(728,`em`)(729,`strong`),iO(730,`(opcional)`),wg()(),jc(731,`p`),iO(732,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),wg(),jc(733,`p`),iO(734,`Formato aceito: `),jc(735,`code`),iO(736,`HH:mm`),wg(),iO(737,` ou `),jc(738,`code`),iO(739,`HH:mm:ss`),wg(),iO(740,`.`),wg()()(),jc(741,`tr`,14)(742,`td`,15)(743,`div`,16)(744,`span`,17),iO(745,` p-min-date`),nu(746,`br`),wg()()(),jc(747,`td`,18)(748,`code`,25),iO(749,`string `),wg(),jc(750,`code`,27),iO(751,` Date`),wg()(),jc(752,`td`,20),iO(753,`-`),wg(),jc(754,`td`,21)(755,`em`)(756,`strong`),iO(757,`(opcional)`),wg()(),jc(758,`p`),iO(759,`Define uma data mínima para o `),jc(760,`code`),iO(761,`po-datetimepicker`),wg(),iO(762,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),wg(),jc(763,`p`),iO(764,`Aceita os formatos:`),wg(),jc(765,`ul`)(766,`li`)(767,`code`),iO(768,`Date`),wg(),iO(769,` object: `),jc(770,`code`),iO(771,`new Date(2026, 0, 1)`),wg()(),jc(772,`li`),iO(773,`ISO string: `),jc(774,`code`),iO(775,`'2026-01-01'`),wg()(),jc(776,`li`),iO(777,`ISO com hora: `),jc(778,`code`),iO(779,`'2026-01-01T00:00:00-03:00'`),wg()()()()(),jc(780,`tr`,14)(781,`td`,15)(782,`div`,16)(783,`span`,17),iO(784,` p-min-time`),nu(785,`br`),wg()()(),jc(786,`td`,18)(787,`code`,25),iO(788,`string`),wg()(),jc(789,`td`,20),iO(790,`-`),wg(),jc(791,`td`,21)(792,`em`)(793,`strong`),iO(794,`(opcional)`),wg()(),jc(795,`p`),iO(796,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),wg(),jc(797,`p`),iO(798,`Formato aceito: `),jc(799,`code`),iO(800,`HH:mm`),wg(),iO(801,` ou `),jc(802,`code`),iO(803,`HH:mm:ss`),wg(),iO(804,`.`),wg()()(),jc(805,`tr`,14)(806,`td`,15)(807,`div`,16)(808,`span`,17),iO(809,` p-minute-interval`),nu(810,`br`),wg()()(),jc(811,`td`,18)(812,`code`,28),iO(813,`number`),wg()(),jc(814,`td`,20)(815,`p`)(816,`code`),iO(817,`5`),wg()()(),jc(818,`td`,21)(819,`em`)(820,`strong`),iO(821,`(opcional)`),wg()(),jc(822,`p`),iO(823,`Define o intervalo entre os minutos exibidos no painel do timer.`),wg()()(),jc(824,`tr`,14)(825,`td`,15)(826,`div`,16)(827,`span`,17),iO(828,` name`),nu(829,`br`),wg()()(),jc(830,`td`,18)(831,`code`,25),iO(832,`string`),wg()(),jc(833,`td`,20),iO(834,`-`),wg(),jc(835,`td`,21)(836,`em`)(837,`strong`),iO(838,`(opcional)`),wg()(),jc(839,`p`),iO(840,`Nome do componente.`),wg()()(),jc(841,`tr`,14)(842,`td`,15)(843,`div`,16)(844,`span`,17),iO(845,` p-no-autocomplete`),nu(846,`br`),wg()()(),jc(847,`td`,18)(848,`code`,19),iO(849,`boolean `),wg(),jc(850,`code`,25),iO(851,` string`),wg()(),jc(852,`td`,20)(853,`p`)(854,`code`),iO(855,`false`),wg()()(),jc(856,`td`,21)(857,`em`)(858,`strong`),iO(859,`(opcional)`),wg()(),jc(860,`p`),iO(861,`Define a propriedade nativa `),jc(862,`code`),iO(863,`autocomplete`),wg(),iO(864,` do campo como `),jc(865,`code`),iO(866,`off`),wg(),iO(867,`.`),wg()()(),jc(868,`tr`,14)(869,`td`,15)(870,`div`,22)(871,`span`,23),iO(872,` (p-blur)`),nu(873,`br`),wg()()(),jc(874,`td`,18)(875,`code`,24),iO(876,`EventEmitter`),wg()(),jc(877,`td`,20),iO(878,`-`),wg(),jc(879,`td`,21)(880,`em`)(881,`strong`),iO(882,`(opcional)`),wg()(),jc(883,`p`),iO(884,`Evento disparado ao sair do campo (blur).`),wg()()(),jc(885,`tr`,14)(886,`td`,15)(887,`div`,22)(888,`span`,23),iO(889,` (p-change)`),nu(890,`br`),wg()()(),jc(891,`td`,18)(892,`code`,24),iO(893,`EventEmitter`),wg()(),jc(894,`td`,20),iO(895,`-`),wg(),jc(896,`td`,21)(897,`em`)(898,`strong`),iO(899,`(opcional)`),wg()(),jc(900,`p`),iO(901,`Evento disparado ao alterar valor do campo.`),wg()()(),jc(902,`tr`,14)(903,`td`,15)(904,`div`,16)(905,`span`,17),iO(906,` p-optional`),nu(907,`br`),wg()()(),jc(908,`td`,18)(909,`code`,19),iO(910,`boolean`),wg()(),jc(911,`td`,20)(912,`p`)(913,`code`),iO(914,`false`),wg()()(),jc(915,`td`,21)(916,`em`)(917,`strong`),iO(918,`(opcional)`),wg()(),jc(919,`p`),iO(920,`Define se a indicação de campo opcional será exibida.`),wg()()(),jc(921,`tr`,14)(922,`td`,15)(923,`div`,16)(924,`span`,17),iO(925,` p-placeholder`),nu(926,`br`),wg()()(),jc(927,`td`,18)(928,`code`,25),iO(929,`string`),wg()(),jc(930,`td`,20),iO(931,`-`),wg(),jc(932,`td`,21)(933,`em`)(934,`strong`),iO(935,`(opcional)`),wg()(),jc(936,`p`),iO(937,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),wg()()(),jc(938,`tr`,14)(939,`td`,15)(940,`div`,16)(941,`span`,17),iO(942,` p-helper`),nu(943,`br`),wg()()(),jc(944,`td`,18)(945,`code`,29),iO(946,`PoHelperOptions `),wg(),jc(947,`code`,25),iO(948,` string`),wg()(),jc(949,`td`,20),iO(950,`-`),wg(),jc(951,`td`,21)(952,`em`)(953,`strong`),iO(954,`(opcional)`),wg()(),jc(955,`p`),iO(956,`Define as opções do componente de ajuda (po-helper).`),wg(),jc(957,`blockquote`)(958,`p`),iO(959,`Para mais informações acesse: `),jc(960,`a`,30),iO(961,`https://po-ui.io/documentation/po-helper`),wg(),iO(962,`.`),wg()()()(),jc(963,`tr`,14)(964,`td`,15)(965,`div`,16)(966,`span`,17),iO(967,` p-readonly`),nu(968,`br`),wg()()(),jc(969,`td`,18)(970,`code`,19),iO(971,`boolean `),wg(),jc(972,`code`,25),iO(973,` string`),wg()(),jc(974,`td`,20)(975,`p`)(976,`code`),iO(977,`false`),wg()()(),jc(978,`td`,21)(979,`em`)(980,`strong`),iO(981,`(opcional)`),wg()(),jc(982,`p`),iO(983,`Torna o componente somente leitura.`),wg()()(),jc(984,`tr`,14)(985,`td`,15)(986,`div`,16)(987,`span`,17),iO(988,` p-required`),nu(989,`br`),wg()()(),jc(990,`td`,18)(991,`code`,19),iO(992,`boolean `),wg(),jc(993,`code`,25),iO(994,` string`),wg()(),jc(995,`td`,20)(996,`p`)(997,`code`),iO(998,`false`),wg()()(),jc(999,`td`,21)(1e3,`em`)(1001,`strong`),iO(1002,`(opcional)`),wg()(),jc(1003,`p`),iO(1004,`Define que o campo será obrigatório.`),wg()()(),jc(1005,`tr`,14)(1006,`td`,15)(1007,`div`,16)(1008,`span`,17),iO(1009,` p-second-interval`),nu(1010,`br`),wg()()(),jc(1011,`td`,18)(1012,`code`,28),iO(1013,`number`),wg()(),jc(1014,`td`,20)(1015,`p`)(1016,`code`),iO(1017,`1`),wg()()(),jc(1018,`td`,21)(1019,`em`)(1020,`strong`),iO(1021,`(opcional)`),wg()(),jc(1022,`p`),iO(1023,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),jc(1024,`code`),iO(1025,`p-show-seconds`),wg(),iO(1026,` está ativo.`),wg()()(),jc(1027,`tr`,14)(1028,`td`,15)(1029,`div`,16)(1030,`span`,17),iO(1031,` p-required-field-error-message`),nu(1032,`br`),wg()()(),jc(1033,`td`,18)(1034,`code`,19),iO(1035,`boolean`),wg()(),jc(1036,`td`,20)(1037,`p`)(1038,`code`),iO(1039,`false`),wg()()(),jc(1040,`td`,21)(1041,`em`)(1042,`strong`),iO(1043,`(opcional)`),wg()(),jc(1044,`p`),iO(1045,`Exibe a mensagem setada na propriedade `),jc(1046,`code`),iO(1047,`p-error-pattern`),wg(),iO(1048,` se o campo estiver vazio e for requerido.`),wg(),jc(1049,`blockquote`)(1050,`p`),iO(1051,`Necessário que a propriedade `),jc(1052,`code`),iO(1053,`p-required`),wg(),iO(1054,` esteja habilitada.`),wg()()()(),jc(1055,`tr`,14)(1056,`td`,15)(1057,`div`,16)(1058,`span`,17),iO(1059,` p-show-required`),nu(1060,`br`),wg()()(),jc(1061,`td`,18)(1062,`code`,19),iO(1063,`boolean`),wg()(),jc(1064,`td`,20)(1065,`p`)(1066,`code`),iO(1067,`false`),wg()()(),jc(1068,`td`,21)(1069,`em`)(1070,`strong`),iO(1071,`(opcional)`),wg()(),jc(1072,`p`),iO(1073,`Define se a indicação de campo obrigatório será exibida.`),wg()()(),jc(1074,`tr`,14)(1075,`td`,15)(1076,`div`,16)(1077,`span`,17),iO(1078,` p-show-seconds`),nu(1079,`br`),wg()()(),jc(1080,`td`,18)(1081,`code`,19),iO(1082,`boolean`),wg()(),jc(1083,`td`,20)(1084,`p`)(1085,`code`),iO(1086,`false`),wg()()(),jc(1087,`td`,21)(1088,`em`)(1089,`strong`),iO(1090,`(opcional)`),wg()(),jc(1091,`p`),iO(1092,`Exibe a coluna de segundos no painel de seleção do timer.`),wg()()(),jc(1093,`tr`,14)(1094,`td`,15)(1095,`div`,16)(1096,`span`,17),iO(1097,` p-size`),nu(1098,`br`),wg()()(),jc(1099,`td`,18)(1100,`code`,25),iO(1101,`string`),wg()(),jc(1102,`td`,20)(1103,`p`)(1104,`code`),iO(1105,`medium`),wg()()(),jc(1106,`td`,21)(1107,`em`)(1108,`strong`),iO(1109,`(opcional)`),wg()(),jc(1110,`p`),iO(1111,`Define o tamanho do componente:`),wg(),jc(1112,`ul`)(1113,`li`)(1114,`code`),iO(1115,`small`),wg(),iO(1116,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(1117,`li`)(1118,`code`),iO(1119,`medium`),wg(),iO(1120,`: altura do input como 44px.`),wg()()()(),jc(1121,`tr`,14)(1122,`td`,15)(1123,`div`,16)(1124,`span`,17),iO(1125,` p-format-time`),nu(1126,`br`),wg()()(),jc(1127,`td`,18)(1128,`code`,31),iO(1129,`PoTimerFormat`),wg()(),jc(1130,`td`,20)(1131,`p`),iO(1132,`Determinado pelo locale`),wg()(),jc(1133,`td`,21)(1134,`em`)(1135,`strong`),iO(1136,`(opcional)`),wg()(),jc(1137,`p`),iO(1138,`Define o formato de exibição do timer.`),wg(),jc(1139,`p`),iO(1140,`Valores válidos:`),wg(),jc(1141,`ul`)(1142,`li`)(1143,`code`),iO(1144,`24`),wg(),iO(1145,`: formato de 24 horas (padrão para pt, es, ru)`),wg(),jc(1146,`li`)(1147,`code`),iO(1148,`12`),wg(),iO(1149,`: formato de 12 horas com indicador AM/PM (padrão para en)`),wg()(),jc(1150,`p`),iO(1151,`Quando não informado, o formato será determinado automaticamente pelo locale:`),wg(),jc(1152,`ul`)(1153,`li`)(1154,`code`),iO(1155,`en`),wg(),iO(1156,` → 12h (AM/PM)`),wg(),jc(1157,`li`)(1158,`code`),iO(1159,`pt`),wg(),iO(1160,`, `),jc(1161,`code`),iO(1162,`es`),wg(),iO(1163,`, `),jc(1164,`code`),iO(1165,`ru`),wg(),iO(1166,` → 24h`),wg()()()()(),jc(1167,`h3`,10),iO(1168,`Métodos`),wg(),jc(1169,`table`,32)(1170,`tr`,14)(1171,`th`,33)(1172,`div`,16)(1173,`h4`)(1174,`span`,17),iO(1175,` showAdditionalHelp `),wg()()()()(),jc(1176,`tr`,21)(1177,`td`,21)(1178,`p`),iO(1179,`Método que exibe `),jc(1180,`code`),iO(1181,`p-helper`),wg(),iO(1182,` ou executa a ação definida em `),jc(1183,`code`),iO(1184,`p-helper{eventOnClick}`),wg(),iO(1185,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(1186,`code`),iO(1187,`p-keydown`),wg(),iO(1188,`.`),wg(),jc(1189,`blockquote`)(1190,`p`),iO(1191,`Exibe ou oculta o conteúdo do componente `),jc(1192,`code`),iO(1193,`po-helper`),wg(),iO(1194,` quando o componente estiver com foco.`),wg()(),jc(1195,`pre`)(1196,`code`),iO(1197,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),wg()(),jc(1198,`pre`)(1199,`code`),iO(1200,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1201,`br`),wg())},dependencies:[_a],encapsulation:2,changeDetection:1})}return l})();var Fe=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(b(ir),b(Sn))};static ɵcmp=Zn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Datetimepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-datetimepicker-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-datetimepicker-basic-view`)(6,`sample-po-datetimepicker-labs-view`)(7,`sample-po-datetimepicker-12h-seconds-view`)(8,`sample-po-datetimepicker-scheduling-view`),wg()()()),r&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ce,Se,he,xe,fe],encapsulation:2,changeDetection:1})}return l})()}];var ve=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe({type:l});static ɵinj=ue({imports:[C1.forChild(Fe),C1]})}return l})();var Et=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe({type:l});static ɵinj=ue({imports:[Ta,ve]})}return l})();export{Et as DocPoDatetimepickerModule};