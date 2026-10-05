import{$i as pt,Ai as ho,C as C4,Ca as zO,Cr as Kc,Dt as _ie,Er as LP,Gi as mg,Gt as eoe,J as Lte,Ji as p0,Jr as TE,Oi as he$1,Ri as kL,Rt as cae,Si as fo,T as Cze,Un as AN,Vr as RE,Wi as m0,Wn as Ac,Xn as Bx,Y as Lu,Zn as C9,_a as wn,ai as Zx,ca as ue,cn as noe,fr as Hp,gi as e_,gn as soe,i as _a,in as mae,ir as E,jn as wte,ln as oP,mn as rb,nr as DN,oi as aN,on as n4,ot as Pte,pa as vN,qn as BP,r as Ta,si as b9,ti as Xc,tr as D9,ua as ug,ui as cE,un as oi,ur as Hn,yi as f,yr as Jv,zr as Qn}from"./main-DRZDQSOK.js";var se=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-datetimepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datetimepicker`,`p-label`,`PO Datetimepicker`]],template:function(r,i){r&1&&Kc(0,`po-datetimepicker`,0)},dependencies:[oP],encapsulation:2,changeDetection:1})}return l})();var De=l=>({"docs-sample-code-tabs":l});var ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-datetimepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Datetimepicker Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-datetimepicker-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,De,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,se],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatDateOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];formatTimeOptions=[{label:`24h`,value:`24`},{label:`12h (AM/PM)`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText=``,this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-datetimepicker-labs`]],standalone:!1,decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`datetimepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-limit`,`p-error-pattern`,`p-format-date`,`p-format-time`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-locale`,`p-max-date`,`p-max-time`,`p-min-date`,`p-min-time`,`p-minute-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-second-interval`,`p-show-required`,`p-show-seconds`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatDate`,`p-columns`,`4`,`p-label`,`Format Date`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatTime`,`p-columns`,`4`,`p-label`,`Format Time`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let d=Bx();Ac(0,`po-datetimepicker`,1),RE(`ngModelChange`,function(o){return Jv(d),DN(i.datetimepicker,o)||(i.datetimepicker=o),e_(o)}),pt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3)(4,`po-info`,4),ug(),Kc(5,`po-divider`),Ac(6,`form`,null,0)(8,`po-input`,5),RE(`ngModelChange`,function(o){return Jv(d),DN(i.label,o)||(i.label=o),e_(o)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(o){return Jv(d),DN(i.help,o)||(i.help=o),e_(o)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(o){return Jv(d),DN(i.helperText,o)||(i.helperText=o),e_(o)}),ug(),p0(),Ac(11,`po-input`,8),RE(`ngModelChange`,function(o){return Jv(d),DN(i.placeholder,o)||(i.placeholder=o),e_(o)}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(o){return Jv(d),DN(i.errorPattern,o)||(i.errorPattern=o),e_(o)}),ug(),p0(),Ac(13,`po-number`,10),RE(`ngModelChange`,function(o){return Jv(d),DN(i.minuteInterval,o)||(i.minuteInterval=o),e_(o)}),ug(),p0(),Ac(14,`po-number`,11),RE(`ngModelChange`,function(o){return Jv(d),DN(i.secondInterval,o)||(i.secondInterval=o),e_(o)}),ug(),p0(),Ac(15,`po-timepicker`,12),RE(`ngModelChange`,function(o){return Jv(d),DN(i.minTime,o)||(i.minTime=o),e_(o)}),ug(),p0(),Ac(16,`po-timepicker`,13),RE(`ngModelChange`,function(o){return Jv(d),DN(i.maxTime,o)||(i.maxTime=o),e_(o)}),ug(),p0(),Ac(17,`po-datepicker`,14),RE(`ngModelChange`,function(o){return Jv(d),DN(i.minDate,o)||(i.minDate=o),e_(o)}),ug(),p0(),Ac(18,`po-datepicker`,15),RE(`ngModelChange`,function(o){return Jv(d),DN(i.maxDate,o)||(i.maxDate=o),e_(o)}),ug(),p0(),Ac(19,`po-checkbox-group`,16),RE(`ngModelChange`,function(o){return Jv(d),DN(i.properties,o)||(i.properties=o),e_(o)}),ug(),p0(),Ac(20,`po-radio-group`,17),RE(`ngModelChange`,function(o){return Jv(d),DN(i.locale,o)||(i.locale=o),e_(o)}),ug(),p0(),Ac(21,`po-radio-group`,18),RE(`ngModelChange`,function(o){return Jv(d),DN(i.formatDate,o)||(i.formatDate=o),e_(o)}),ug(),p0(),Ac(22,`po-radio-group`,19),RE(`ngModelChange`,function(o){return Jv(d),DN(i.formatTime,o)||(i.formatTime=o),e_(o)}),ug(),p0(),Ac(23,`po-radio-group`,20),RE(`ngModelChange`,function(o){return Jv(d),DN(i.size,o)||(i.size=o),e_(o)}),ug(),p0(),Ac(24,`div`,2)(25,`po-button`,21),pt(`p-click`,function(){return i.restore()}),ug()()()}r&2&&(TE(`ngModel`,i.datetimepicker),cE(`p-clean`,i.properties.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-error-pattern`,i.errorPattern)(`p-format-date`,i.formatDate)(`p-format-time`,i.formatTime)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-locale`,i.locale)(`p-max-date`,i.maxDate)(`p-max-time`,i.maxTime)(`p-min-date`,i.minDate)(`p-min-time`,i.minTime)(`p-minute-interval`,i.minuteInterval)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-second-interval`,i.secondInterval)(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-seconds`,i.properties.includes(`showSeconds`))(`p-size`,i.size),m0(),Hp(3),cE(`p-value`,i.datetimepicker),Hp(),cE(`p-value`,i.event),Hp(4),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.helperText),m0(),Hp(),TE(`ngModel`,i.placeholder),m0(),Hp(),TE(`ngModel`,i.errorPattern),m0(),Hp(),TE(`ngModel`,i.minuteInterval),m0(),Hp(),TE(`ngModel`,i.secondInterval),m0(),Hp(),TE(`ngModel`,i.minTime),m0(),Hp(),TE(`ngModel`,i.maxTime),m0(),Hp(),TE(`ngModel`,i.minDate),cE(`p-max-date`,i.maxDate),m0(),Hp(),TE(`ngModel`,i.maxDate),cE(`p-min-date`,i.minDate),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.locale),cE(`p-options`,i.localeOptions),m0(),Hp(),TE(`ngModel`,i.formatDate),cE(`p-options`,i.formatDateOptions),m0(),Hp(),TE(`ngModel`,i.formatTime),cE(`p-options`,i.formatTimeOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,oi,rb,n4,Pte,oP,C4,eoe,wte,_ie,soe],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l});var Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-datetimepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Datetimepicker Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-datetimepicker
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-datetimepicker-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,_e,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,ge],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`datetimepicker12h`,`p-label`,`PO Datetimepicker - 12h with Seconds`,`p-show-seconds`,`true`,`p-format-time`,`12`,`p-format-date`,`mm/dd/yyyy`,3,`ngModelChange`,`ngModel`]],template:function(r,i){r&1&&(Ac(0,`po-datetimepicker`,0),RE(`ngModelChange`,function(s){return DN(i.datetime,s)||(i.datetime=s),s}),ug(),p0()),r&2&&(TE(`ngModel`,i.datetime),m0())},dependencies:[D9,BP,oP],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Datetimepicker - 12h with Seconds`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-datetimepicker-12h-seconds`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Te,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,Ee],encapsulation:2,changeDetection:1})}return l})();var Oe=[`formScheduling`];var be=(()=>{class l{poDialog=f(Lte);poNotification=f(Lu);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:`general`,label:`Clínico Geral`},{value:`cardiology`,label:`Cardiologia`},{value:`dermatology`,label:`Dermatologia`},{value:`orthopedics`,label:`Ortopedia`},{value:`neurology`,label:`Neurologia`}];confirm(){let p=this.appointment?this.appointment.slice(0,16):``,r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:r,confirm:()=>{this.poNotification.success(`Consulta agendada com sucesso!`),this.formScheduling.reset()},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:``}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-datetimepicker-scheduling`]],viewQuery:function(r,i){if(r&1&&Xc(Oe,7),r&2){let d;fo(d=ho())&&(i.formScheduling=d.first)}},standalone:!1,decls:10,vars:6,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`patient`,`p-label`,`Paciente`,`p-placeholder`,`Nome do paciente`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`doctor`,`p-label`,`Médico`,`p-placeholder`,`Nome do médico`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`specialty`,`p-label`,`Especialidade`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`appointment`,`p-clean`,``,`p-label`,`Data e Hora da Consulta`,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-minute-interval`,`15`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`confirmButton`,`p-label`,`Agendar Consulta`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let d=Bx();Ac(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),RE(`ngModelChange`,function(o){return Jv(d),DN(i.patient,o)||(i.patient=o),e_(o)}),ug(),p0(),Ac(4,`po-input`,3),RE(`ngModelChange`,function(o){return Jv(d),DN(i.doctor,o)||(i.doctor=o),e_(o)}),ug(),p0(),ug(),Ac(5,`div`,1)(6,`po-select`,4),RE(`ngModelChange`,function(o){return Jv(d),DN(i.specialty,o)||(i.specialty=o),e_(o)}),ug(),p0(),Ac(7,`po-datetimepicker`,5),RE(`ngModelChange`,function(o){return Jv(d),DN(i.appointment,o)||(i.appointment=o),e_(o)}),ug(),p0(),ug(),Ac(8,`div`,1)(9,`po-button`,6),pt(`p-click`,function(){return i.confirm()}),ug()()()}if(r&2){let d=Zx(1);Hp(3),TE(`ngModel`,i.patient),m0(),Hp(),TE(`ngModel`,i.doctor),m0(),Hp(2),TE(`ngModel`,i.specialty),cE(`p-options`,i.specialtyOptions),m0(),Hp(),TE(`ngModel`,i.appointment),m0(),Hp(2),cE(`p-disabled`,d.invalid)}},dependencies:[b9,D9,C9,BP,LP,oi,oP,C4,noe],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l});var xe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-datetimepicker-scheduling-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Datetimepicker - Scheduling`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form #formScheduling="ngForm">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { UntypedFormControl } from '@angular/forms';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-datetimepicker-scheduling`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ve,i.hideSampleCodeTabs)))},dependencies:[zO,_a,cae,mae,be],encapsulation:2,changeDetection:1})}return l})();var fe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-datetimepicker-doc`]],standalone:!1,decls:1202,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoDatetimepickerComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`O `),Ac(24,`code`),vN(25,`po-datetimepicker`),ug(),vN(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),ug(),Ac(27,`p`),vN(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),Ac(29,`code`),vN(30,`p-format-date`),ug(),vN(31,`. O formato de hora pode ser 24h ou 12h (AM/PM), configurável via `),Ac(32,`code`),vN(33,`p-format-time`),ug(),vN(34,`.`),ug(),Ac(35,`p`),vN(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Ac(37,`code`),vN(38,`p-locale`),ug(),vN(39,`.`),ug(),Ac(40,`p`),vN(41,`O componente aceita os seguintes formatos de entrada:`),ug(),Ac(42,`ul`)(43,`li`),vN(44,`ISO 8601 com timezone: `),Ac(45,`code`),vN(46,`'2026-05-12T14:30:00-03:00'`),ug()(),Ac(47,`li`),vN(48,`ISO 8601 UTC: `),Ac(49,`code`),vN(50,`'2026-05-12T14:30:00Z'`),ug()(),Ac(51,`li`),vN(52,`ISO 8601 sem timezone: `),Ac(53,`code`),vN(54,`'2026-05-12T14:30:00'`),ug()(),Ac(55,`li`),vN(56,`ISO 8601 apenas data: `),Ac(57,`code`),vN(58,`'2026-05-12'`),ug()(),Ac(59,`li`),vN(60,`JavaScript Date Object: `),Ac(61,`code`),vN(62,`new Date(2026, 4, 12, 14, 30)`),ug()()(),Ac(63,`p`),vN(64,`O formato de saída do `),Ac(65,`em`),vN(66,`model`),ug(),vN(67,` é sempre ISO 8601 com timezone local: `),Ac(68,`code`),vN(69,`'yyyy-mm-ddTHH:mm+/-HH:mm'`),ug(),vN(70,`
(ou `),Ac(71,`code`),vN(72,`'yyyy-mm-ddTHH:mm:ss+/-HH:mm'`),ug(),vN(73,` quando `),Ac(74,`code`),vN(75,`p-show-seconds`),ug(),vN(76,` está ativo).`),ug(),Ac(77,`p`)(78,`strong`),vN(79,`Importante:`),ug()(),Ac(80,`ul`)(81,`li`),vN(82,`O valor emitido no model inclui o offset do timezone local do navegador.`),ug(),Ac(83,`li`),vN(84,`Ao receber um valor com timezone, o componente converte automaticamente para horário local.`),ug(),Ac(85,`li`),vN(86,`Caso a data/hora esteja inválida, o `),Ac(87,`code`),vN(88,`model`),ug(),vN(89,` receberá a mensagem de erro localizada.`),ug(),Ac(90,`li`),vN(91,`Caso o `),Ac(92,`code`),vN(93,`input`),ug(),vN(94,` esteja passando um `),Ac(95,`code`),vN(96,`[(ngModel)]`),ug(),vN(97,`, mas não tenha um `),Ac(98,`code`),vN(99,`name`),ug(),vN(100,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Ac(101,`code`),vN(102,`[ngModelOptions]="{standalone: true}"`),ug(),vN(103,`).`),ug()(),Ac(104,`p`),vN(105,`Exemplo:`),ug(),Ac(106,`pre`)(107,`code`),vN(108,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),ug()(),Ac(109,`blockquote`)(110,`p`),vN(111,`Não esqueça de importar o `),Ac(112,`code`),vN(113,`FormsModule`),ug(),vN(114,` em seu módulo, tal como para utilizar o `),Ac(115,`code`),vN(116,`input default`),ug(),vN(117,`.`),ug()(),Ac(118,`h4`),vN(119,`Tokens customizáveis`),ug(),Ac(120,`p`),vN(121,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Kc(122,`br`),vN(123,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ac(124,`code`),vN(125,`.po-input`),ug()(),Ac(126,`blockquote`)(127,`p`),vN(128,`Para maiores informações, acesse o guia `),Ac(129,`a`,6),vN(130,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(131,`.`),ug()(),Ac(132,`table`)(133,`thead`)(134,`tr`)(135,`th`),vN(136,`Propriedade`),ug(),Ac(137,`th`),vN(138,`Descrição`),ug(),Ac(139,`th`),vN(140,`Valor Padrão`),ug()()(),Ac(141,`tbody`)(142,`tr`)(143,`td`)(144,`strong`),vN(145,`Default Values`),ug()(),Kc(146,`td`)(147,`td`),ug(),Ac(148,`tr`)(149,`td`)(150,`code`),vN(151,`--font-family`),ug()(),Ac(152,`td`),vN(153,`Família tipográfica usada`),ug(),Ac(154,`td`)(155,`code`),vN(156,`var(--font-family-theme)`),ug()()(),Ac(157,`tr`)(158,`td`)(159,`code`),vN(160,`--font-size`),ug()(),Ac(161,`td`),vN(162,`Tamanho da fonte`),ug(),Ac(163,`td`)(164,`code`),vN(165,`var(--font-size-default)`),ug()()(),Ac(166,`tr`)(167,`td`)(168,`code`),vN(169,`--text-color-placeholder`),ug(),vN(170,` \xA0`),ug(),Ac(171,`td`),vN(172,`Cor principal do texto do placeholder`),ug(),Ac(173,`td`)(174,`code`),vN(175,`var(--color-neutral-light-30)`),ug()()(),Ac(176,`tr`)(177,`td`)(178,`code`),vN(179,`--color`),ug()(),Ac(180,`td`),vN(181,`Cor principal do datetimepicker`),ug(),Ac(182,`td`)(183,`code`),vN(184,`var(--color-neutral-dark-70)`),ug()()(),Ac(185,`tr`)(186,`td`)(187,`code`),vN(188,`--background`),ug()(),Ac(189,`td`),vN(190,`Cor de background`),ug(),Ac(191,`td`)(192,`code`),vN(193,`var(--color-neutral-light-05)`),ug()()(),Ac(194,`tr`)(195,`td`)(196,`code`),vN(197,`--padding`),ug()(),Ac(198,`td`),vN(199,`Preenchimento`),ug(),Ac(200,`td`)(201,`code`),vN(202,`0 0.5rem`),ug()()(),Ac(203,`tr`)(204,`td`)(205,`code`),vN(206,`--text-color`),ug()(),Ac(207,`td`),vN(208,`Cor do texto`),ug(),Ac(209,`td`)(210,`code`),vN(211,`var(--color-neutral-dark-90)`),ug()()(),Ac(212,`tr`)(213,`td`)(214,`code`),vN(215,`--field-container-title-justify`),ug()(),Ac(216,`td`),vN(217,`Alinhamento horizontal do título (`),Ac(218,`code`),vN(219,`justify-content`),ug(),vN(220,`)`),ug(),Ac(221,`td`)(222,`code`),vN(223,`space-between`),ug()()(),Ac(224,`tr`)(225,`td`)(226,`code`),vN(227,`--field-container-title-flex`),ug()(),Ac(228,`td`),vN(229,`Flex do título (`),Ac(230,`code`),vN(231,`flex`),ug(),vN(232,`)`),ug(),Ac(233,`td`)(234,`code`),vN(235,`1 auto`),ug()()(),Ac(236,`tr`)(237,`td`)(238,`strong`),vN(239,`Hover`),ug()(),Kc(240,`td`)(241,`td`),ug(),Ac(242,`tr`)(243,`td`)(244,`code`),vN(245,`--color-hover`),ug()(),Ac(246,`td`),vN(247,`Cor principal no estado hover`),ug(),Ac(248,`td`)(249,`code`),vN(250,`var(--color-brand-01-dark)`),ug()()(),Ac(251,`tr`)(252,`td`)(253,`code`),vN(254,`--background-hover`),ug()(),Ac(255,`td`),vN(256,`Cor de background no estado hover`),ug(),Ac(257,`td`)(258,`code`),vN(259,`var(--color-brand-01-lightest)`),ug()()(),Ac(260,`tr`)(261,`td`)(262,`strong`),vN(263,`Focused`),ug()(),Kc(264,`td`)(265,`td`),ug(),Ac(266,`tr`)(267,`td`)(268,`code`),vN(269,`--color-focused`),ug()(),Ac(270,`td`),vN(271,`Cor principal no estado de focus`),ug(),Ac(272,`td`)(273,`code`),vN(274,`var(--color-action-default)`),ug()()(),Ac(275,`tr`)(276,`td`)(277,`code`),vN(278,`--outline-color-focused`),ug()(),Ac(279,`td`),vN(280,`Cor do outline do estado de focus`),ug(),Ac(281,`td`)(282,`code`),vN(283,`var(--color-action-focus)`),ug()()(),Ac(284,`tr`)(285,`td`)(286,`strong`),vN(287,`Disabled`),ug()(),Kc(288,`td`)(289,`td`),ug(),Ac(290,`tr`)(291,`td`)(292,`code`),vN(293,`--color-disabled`),ug()(),Ac(294,`td`),vN(295,`Cor principal no estado disabled`),ug(),Ac(296,`td`)(297,`code`),vN(298,`var(--color-neutral-light-30)`),ug()()(),Ac(299,`tr`)(300,`td`)(301,`code`),vN(302,`--background-disabled`),ug()(),Ac(303,`td`),vN(304,`Cor de background no estado disabled \xA0`),ug(),Ac(305,`td`)(306,`code`),vN(307,`var(--color-neutral-light-20)`),ug()()(),Ac(308,`tr`)(309,`td`)(310,`code`),vN(311,`--text-color-disabled`),ug()(),Ac(312,`td`),vN(313,`Cor do texto no estado disabled`),ug(),Ac(314,`td`)(315,`code`),vN(316,`var(--color-neutral-dark-70)`),ug()()()()()(),Ac(317,`div`,7)(318,`h4`,8),vN(319,`Seletor`),ug(),Ac(320,`pre`,9),vN(321,`<po-datetimepicker
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
`),ug()(),Ac(322,`h4`,10),vN(323,`Propriedades`),ug(),Ac(324,`table`,11)(325,`tr`,12)(326,`th`,13),vN(327,`Nome`),ug(),Ac(328,`th`,13),vN(329,`Tipo`),ug(),Ac(330,`th`,13),vN(331,`Padrão`),ug(),Ac(332,`th`,13),vN(333,`Descrição`),ug()(),Ac(334,`tr`,14)(335,`td`,15)(336,`div`,16)(337,`span`,17),vN(338,` p-append-in-body`),Kc(339,`br`),ug()()(),Ac(340,`td`,18)(341,`code`,19),vN(342,`boolean`),ug()(),Ac(343,`td`,20)(344,`p`)(345,`code`),vN(346,`false`),ug()()(),Ac(347,`td`,21)(348,`em`)(349,`strong`),vN(350,`(opcional)`),ug()(),Ac(351,`p`),vN(352,`Define que o `),Ac(353,`code`),vN(354,`calendar`),ug(),vN(355,` e/ou tooltip serão incluídos no body da página e não dentro do componente.`),ug()()(),Ac(356,`tr`,14)(357,`td`,15)(358,`div`,16)(359,`span`,17),vN(360,` p-auto-focus`),Kc(361,`br`),ug()()(),Ac(362,`td`,18)(363,`code`,19),vN(364,`boolean`),ug()(),Ac(365,`td`,20)(366,`p`)(367,`code`),vN(368,`false`),ug()()(),Ac(369,`td`,21)(370,`em`)(371,`strong`),vN(372,`(opcional)`),ug()(),Ac(373,`p`),vN(374,`Aplica foco no elemento ao ser iniciado.`),ug()()(),Ac(375,`tr`,14)(376,`td`,15)(377,`div`,22)(378,`span`,23),vN(379,` (p-change-model)`),Kc(380,`br`),ug()()(),Ac(381,`td`,18)(382,`code`,24),vN(383,`EventEmitter`),ug()(),Ac(384,`td`,20),vN(385,`-`),ug(),Ac(386,`td`,21)(387,`em`)(388,`strong`),vN(389,`(opcional)`),ug()(),Ac(390,`p`),vN(391,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(392,`code`),vN(393,`setValue`),ug(),vN(394,`, `),Ac(395,`code`),vN(396,`patchValue`),ug(),vN(397,`, carregamento assíncrono).`),ug(),Ac(398,`p`),vN(399,`Diferentemente do `),Ac(400,`code`),vN(401,`p-change`),ug(),vN(402,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(403,`code`),vN(404,`p-change-model`),ug(),vN(405,` cobre todos os cenários de alteração de valor.`),ug(),Ac(406,`p`),vN(407,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(408,`tr`,14)(409,`td`,15)(410,`div`,16)(411,`span`,17),vN(412,` p-clean`),Kc(413,`br`),ug()()(),Ac(414,`td`,18)(415,`code`,19),vN(416,`boolean `),ug(),Ac(417,`code`,25),vN(418,` string`),ug()(),Ac(419,`td`,20)(420,`p`)(421,`code`),vN(422,`false`),ug()()(),Ac(423,`td`,21)(424,`em`)(425,`strong`),vN(426,`(opcional)`),ug()(),Ac(427,`p`),vN(428,`Habilita ação para limpar o campo.`),ug()()(),Ac(429,`tr`,14)(430,`td`,15)(431,`div`,16)(432,`span`,17),vN(433,` p-compact-label`),Kc(434,`br`),ug()()(),Ac(435,`td`,18)(436,`code`,19),vN(437,`boolean`),ug()(),Ac(438,`td`,20)(439,`p`)(440,`code`),vN(441,`false`),ug()()(),Ac(442,`td`,21)(443,`em`)(444,`strong`),vN(445,`(opcional)`),ug()(),Ac(446,`p`),vN(447,`Define se o título do campo será exibido de forma compacta.`),ug()()(),Ac(448,`tr`,14)(449,`td`,15)(450,`div`,16)(451,`span`,17),vN(452,` p-format-date`),Kc(453,`br`),ug()()(),Ac(454,`td`,18)(455,`code`,25),vN(456,`string`),ug()(),Ac(457,`td`,20)(458,`p`),vN(459,`Determinado pelo locale`),ug()(),Ac(460,`td`,21)(461,`em`)(462,`strong`),vN(463,`(opcional)`),ug()(),Ac(464,`p`),vN(465,`Define o formato de exibição da data.`),ug(),Ac(466,`p`),vN(467,`Valores válidos:`),ug(),Ac(468,`ul`)(469,`li`)(470,`code`),vN(471,`dd/mm/yyyy`),ug()(),Ac(472,`li`)(473,`code`),vN(474,`mm/dd/yyyy`),ug()(),Ac(475,`li`)(476,`code`),vN(477,`yyyy/mm/dd`),ug()()(),Ac(478,`p`),vN(479,`Quando não informado, o formato será determinado automaticamente pelo locale:`),ug(),Ac(480,`ul`)(481,`li`)(482,`code`),vN(483,`en`),ug(),vN(484,` → `),Ac(485,`code`),vN(486,`mm/dd/yyyy`),ug()(),Ac(487,`li`)(488,`code`),vN(489,`pt`),ug(),vN(490,`, `),Ac(491,`code`),vN(492,`es`),ug(),vN(493,`, `),Ac(494,`code`),vN(495,`ru`),ug(),vN(496,` → `),Ac(497,`code`),vN(498,`dd/mm/yyyy`),ug()()()()(),Ac(499,`tr`,14)(500,`td`,15)(501,`div`,16)(502,`span`,17),vN(503,` p-disabled`),Kc(504,`br`),ug()()(),Ac(505,`td`,18)(506,`code`,19),vN(507,`boolean `),ug(),Ac(508,`code`,25),vN(509,` string`),ug()(),Ac(510,`td`,20)(511,`p`)(512,`code`),vN(513,`false`),ug()()(),Ac(514,`td`,21)(515,`em`)(516,`strong`),vN(517,`(opcional)`),ug()(),Ac(518,`p`),vN(519,`Desabilita o campo.`),ug()()(),Ac(520,`tr`,14)(521,`td`,15)(522,`div`,16)(523,`span`,17),vN(524,` p-error-limit`),Kc(525,`br`),ug()()(),Ac(526,`td`,18)(527,`code`,19),vN(528,`boolean`),ug()(),Ac(529,`td`,20)(530,`p`)(531,`code`),vN(532,`false`),ug()()(),Ac(533,`td`,21)(534,`em`)(535,`strong`),vN(536,`(opcional)`),ug()(),Ac(537,`p`),vN(538,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug()()(),Ac(539,`tr`,14)(540,`td`,15)(541,`div`,16)(542,`span`,17),vN(543,` p-error-pattern`),Kc(544,`br`),ug()()(),Ac(545,`td`,18)(546,`code`,25),vN(547,`string`),ug()(),Ac(548,`td`,20),vN(549,`-`),ug(),Ac(550,`td`,21)(551,`em`)(552,`strong`),vN(553,`(opcional)`),ug()(),Ac(554,`p`),vN(555,`Mensagem apresentada quando a data/hora for inválida ou fora do período.`),ug()()(),Ac(556,`tr`,14)(557,`td`,15)(558,`div`,16)(559,`span`,17),vN(560,` p-help`),Kc(561,`br`),ug()()(),Ac(562,`td`,18)(563,`code`,25),vN(564,`string`),ug()(),Ac(565,`td`,20),vN(566,`-`),ug(),Ac(567,`td`,21)(568,`em`)(569,`strong`),vN(570,`(opcional)`),ug()(),Ac(571,`p`),vN(572,`Texto de apoio do campo.`),ug()()(),Ac(573,`tr`,14)(574,`td`,15)(575,`div`,22)(576,`span`,23),vN(577,` (p-keydown)`),Kc(578,`br`),ug()()(),Ac(579,`td`,18)(580,`code`,24),vN(581,`EventEmitter`),ug()(),Ac(582,`td`,20),vN(583,`-`),ug(),Ac(584,`td`,21)(585,`em`)(586,`strong`),vN(587,`(opcional)`),ug()(),Ac(588,`p`),vN(589,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),ug()()(),Ac(590,`tr`,14)(591,`td`,15)(592,`div`,16)(593,`span`,17),vN(594,` p-label`),Kc(595,`br`),ug()()(),Ac(596,`td`,18)(597,`code`,25),vN(598,`string`),ug()(),Ac(599,`td`,20),vN(600,`-`),ug(),Ac(601,`td`,21)(602,`em`)(603,`strong`),vN(604,`(opcional)`),ug()(),Ac(605,`p`),vN(606,`Rótulo do campo.`),ug()()(),Ac(607,`tr`,14)(608,`td`,15)(609,`div`,16)(610,`span`,17),vN(611,` p-label-text-wrap`),Kc(612,`br`),ug()()(),Ac(613,`td`,18)(614,`code`,19),vN(615,`boolean`),ug()(),Ac(616,`td`,20)(617,`p`)(618,`code`),vN(619,`false`),ug()()(),Ac(620,`td`,21)(621,`em`)(622,`strong`),vN(623,`(opcional)`),ug()(),Ac(624,`p`),vN(625,`Habilita a quebra automática do texto da propriedade `),Ac(626,`code`),vN(627,`p-label`),ug(),vN(628,`.`),ug()()(),Ac(629,`tr`,14)(630,`td`,15)(631,`div`,16)(632,`span`,17),vN(633,` p-loading`),Kc(634,`br`),ug()()(),Ac(635,`td`,18)(636,`code`,19),vN(637,`boolean `),ug(),Ac(638,`code`,25),vN(639,` string`),ug()(),Ac(640,`td`,20)(641,`p`)(642,`code`),vN(643,`false`),ug()()(),Ac(644,`td`,21)(645,`em`)(646,`strong`),vN(647,`(opcional)`),ug()(),Ac(648,`p`),vN(649,`Exibe um ícone de carregamento no lado direito do campo.`),ug()()(),Ac(650,`tr`,14)(651,`td`,15)(652,`div`,16)(653,`span`,17),vN(654,` p-locale`),Kc(655,`br`),ug()()(),Ac(656,`td`,18)(657,`code`,25),vN(658,`string`),ug()(),Ac(659,`td`,20),vN(660,`-`),ug(),Ac(661,`td`,21)(662,`em`)(663,`strong`),vN(664,`(opcional)`),ug()(),Ac(665,`p`),vN(666,`Idioma do componente.`),ug(),Ac(667,`blockquote`)(668,`p`),vN(669,`O locale padrão será recuperado com base no `),Ac(670,`a`,26)(671,`code`),vN(672,`PoI18nService`),ug()(),vN(673,` ou `),Ac(674,`em`),vN(675,`browser`),ug(),vN(676,`.`),ug()()()(),Ac(677,`tr`,14)(678,`td`,15)(679,`div`,16)(680,`span`,17),vN(681,` p-max-date`),Kc(682,`br`),ug()()(),Ac(683,`td`,18)(684,`code`,25),vN(685,`string `),ug(),Ac(686,`code`,27),vN(687,` Date`),ug()(),Ac(688,`td`,20),vN(689,`-`),ug(),Ac(690,`td`,21)(691,`em`)(692,`strong`),vN(693,`(opcional)`),ug()(),Ac(694,`p`),vN(695,`Define uma data máxima para o `),Ac(696,`code`),vN(697,`po-datetimepicker`),ug(),vN(698,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),ug(),Ac(699,`p`),vN(700,`Aceita os formatos:`),ug(),Ac(701,`ul`)(702,`li`)(703,`code`),vN(704,`Date`),ug(),vN(705,` object: `),Ac(706,`code`),vN(707,`new Date(2026, 4, 31)`),ug()(),Ac(708,`li`),vN(709,`ISO string: `),Ac(710,`code`),vN(711,`'2026-05-31'`),ug()(),Ac(712,`li`),vN(713,`ISO com hora: `),Ac(714,`code`),vN(715,`'2026-05-31T23:59:59-03:00'`),ug()()()()(),Ac(716,`tr`,14)(717,`td`,15)(718,`div`,16)(719,`span`,17),vN(720,` p-max-time`),Kc(721,`br`),ug()()(),Ac(722,`td`,18)(723,`code`,25),vN(724,`string`),ug()(),Ac(725,`td`,20),vN(726,`-`),ug(),Ac(727,`td`,21)(728,`em`)(729,`strong`),vN(730,`(opcional)`),ug()(),Ac(731,`p`),vN(732,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),ug(),Ac(733,`p`),vN(734,`Formato aceito: `),Ac(735,`code`),vN(736,`HH:mm`),ug(),vN(737,` ou `),Ac(738,`code`),vN(739,`HH:mm:ss`),ug(),vN(740,`.`),ug()()(),Ac(741,`tr`,14)(742,`td`,15)(743,`div`,16)(744,`span`,17),vN(745,` p-min-date`),Kc(746,`br`),ug()()(),Ac(747,`td`,18)(748,`code`,25),vN(749,`string `),ug(),Ac(750,`code`,27),vN(751,` Date`),ug()(),Ac(752,`td`,20),vN(753,`-`),ug(),Ac(754,`td`,21)(755,`em`)(756,`strong`),vN(757,`(opcional)`),ug()(),Ac(758,`p`),vN(759,`Define uma data mínima para o `),Ac(760,`code`),vN(761,`po-datetimepicker`),ug(),vN(762,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),ug(),Ac(763,`p`),vN(764,`Aceita os formatos:`),ug(),Ac(765,`ul`)(766,`li`)(767,`code`),vN(768,`Date`),ug(),vN(769,` object: `),Ac(770,`code`),vN(771,`new Date(2026, 0, 1)`),ug()(),Ac(772,`li`),vN(773,`ISO string: `),Ac(774,`code`),vN(775,`'2026-01-01'`),ug()(),Ac(776,`li`),vN(777,`ISO com hora: `),Ac(778,`code`),vN(779,`'2026-01-01T00:00:00-03:00'`),ug()()()()(),Ac(780,`tr`,14)(781,`td`,15)(782,`div`,16)(783,`span`,17),vN(784,` p-min-time`),Kc(785,`br`),ug()()(),Ac(786,`td`,18)(787,`code`,25),vN(788,`string`),ug()(),Ac(789,`td`,20),vN(790,`-`),ug(),Ac(791,`td`,21)(792,`em`)(793,`strong`),vN(794,`(opcional)`),ug()(),Ac(795,`p`),vN(796,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),ug(),Ac(797,`p`),vN(798,`Formato aceito: `),Ac(799,`code`),vN(800,`HH:mm`),ug(),vN(801,` ou `),Ac(802,`code`),vN(803,`HH:mm:ss`),ug(),vN(804,`.`),ug()()(),Ac(805,`tr`,14)(806,`td`,15)(807,`div`,16)(808,`span`,17),vN(809,` p-minute-interval`),Kc(810,`br`),ug()()(),Ac(811,`td`,18)(812,`code`,28),vN(813,`number`),ug()(),Ac(814,`td`,20)(815,`p`)(816,`code`),vN(817,`5`),ug()()(),Ac(818,`td`,21)(819,`em`)(820,`strong`),vN(821,`(opcional)`),ug()(),Ac(822,`p`),vN(823,`Define o intervalo entre os minutos exibidos no painel do timer.`),ug()()(),Ac(824,`tr`,14)(825,`td`,15)(826,`div`,16)(827,`span`,17),vN(828,` name`),Kc(829,`br`),ug()()(),Ac(830,`td`,18)(831,`code`,25),vN(832,`string`),ug()(),Ac(833,`td`,20),vN(834,`-`),ug(),Ac(835,`td`,21)(836,`em`)(837,`strong`),vN(838,`(opcional)`),ug()(),Ac(839,`p`),vN(840,`Nome do componente.`),ug()()(),Ac(841,`tr`,14)(842,`td`,15)(843,`div`,16)(844,`span`,17),vN(845,` p-no-autocomplete`),Kc(846,`br`),ug()()(),Ac(847,`td`,18)(848,`code`,19),vN(849,`boolean `),ug(),Ac(850,`code`,25),vN(851,` string`),ug()(),Ac(852,`td`,20)(853,`p`)(854,`code`),vN(855,`false`),ug()()(),Ac(856,`td`,21)(857,`em`)(858,`strong`),vN(859,`(opcional)`),ug()(),Ac(860,`p`),vN(861,`Define a propriedade nativa `),Ac(862,`code`),vN(863,`autocomplete`),ug(),vN(864,` do campo como `),Ac(865,`code`),vN(866,`off`),ug(),vN(867,`.`),ug()()(),Ac(868,`tr`,14)(869,`td`,15)(870,`div`,22)(871,`span`,23),vN(872,` (p-blur)`),Kc(873,`br`),ug()()(),Ac(874,`td`,18)(875,`code`,24),vN(876,`EventEmitter`),ug()(),Ac(877,`td`,20),vN(878,`-`),ug(),Ac(879,`td`,21)(880,`em`)(881,`strong`),vN(882,`(opcional)`),ug()(),Ac(883,`p`),vN(884,`Evento disparado ao sair do campo (blur).`),ug()()(),Ac(885,`tr`,14)(886,`td`,15)(887,`div`,22)(888,`span`,23),vN(889,` (p-change)`),Kc(890,`br`),ug()()(),Ac(891,`td`,18)(892,`code`,24),vN(893,`EventEmitter`),ug()(),Ac(894,`td`,20),vN(895,`-`),ug(),Ac(896,`td`,21)(897,`em`)(898,`strong`),vN(899,`(opcional)`),ug()(),Ac(900,`p`),vN(901,`Evento disparado ao alterar valor do campo.`),ug()()(),Ac(902,`tr`,14)(903,`td`,15)(904,`div`,16)(905,`span`,17),vN(906,` p-optional`),Kc(907,`br`),ug()()(),Ac(908,`td`,18)(909,`code`,19),vN(910,`boolean`),ug()(),Ac(911,`td`,20)(912,`p`)(913,`code`),vN(914,`false`),ug()()(),Ac(915,`td`,21)(916,`em`)(917,`strong`),vN(918,`(opcional)`),ug()(),Ac(919,`p`),vN(920,`Define se a indicação de campo opcional será exibida.`),ug()()(),Ac(921,`tr`,14)(922,`td`,15)(923,`div`,16)(924,`span`,17),vN(925,` p-placeholder`),Kc(926,`br`),ug()()(),Ac(927,`td`,18)(928,`code`,25),vN(929,`string`),ug()(),Ac(930,`td`,20),vN(931,`-`),ug(),Ac(932,`td`,21)(933,`em`)(934,`strong`),vN(935,`(opcional)`),ug()(),Ac(936,`p`),vN(937,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ug()()(),Ac(938,`tr`,14)(939,`td`,15)(940,`div`,16)(941,`span`,17),vN(942,` p-helper`),Kc(943,`br`),ug()()(),Ac(944,`td`,18)(945,`code`,29),vN(946,`PoHelperOptions `),ug(),Ac(947,`code`,25),vN(948,` string`),ug()(),Ac(949,`td`,20),vN(950,`-`),ug(),Ac(951,`td`,21)(952,`em`)(953,`strong`),vN(954,`(opcional)`),ug()(),Ac(955,`p`),vN(956,`Define as opções do componente de ajuda (po-helper).`),ug(),Ac(957,`blockquote`)(958,`p`),vN(959,`Para mais informações acesse: `),Ac(960,`a`,30),vN(961,`https://po-ui.io/documentation/po-helper`),ug(),vN(962,`.`),ug()()()(),Ac(963,`tr`,14)(964,`td`,15)(965,`div`,16)(966,`span`,17),vN(967,` p-readonly`),Kc(968,`br`),ug()()(),Ac(969,`td`,18)(970,`code`,19),vN(971,`boolean `),ug(),Ac(972,`code`,25),vN(973,` string`),ug()(),Ac(974,`td`,20)(975,`p`)(976,`code`),vN(977,`false`),ug()()(),Ac(978,`td`,21)(979,`em`)(980,`strong`),vN(981,`(opcional)`),ug()(),Ac(982,`p`),vN(983,`Torna o componente somente leitura.`),ug()()(),Ac(984,`tr`,14)(985,`td`,15)(986,`div`,16)(987,`span`,17),vN(988,` p-required`),Kc(989,`br`),ug()()(),Ac(990,`td`,18)(991,`code`,19),vN(992,`boolean `),ug(),Ac(993,`code`,25),vN(994,` string`),ug()(),Ac(995,`td`,20)(996,`p`)(997,`code`),vN(998,`false`),ug()()(),Ac(999,`td`,21)(1e3,`em`)(1001,`strong`),vN(1002,`(opcional)`),ug()(),Ac(1003,`p`),vN(1004,`Define que o campo será obrigatório.`),ug()()(),Ac(1005,`tr`,14)(1006,`td`,15)(1007,`div`,16)(1008,`span`,17),vN(1009,` p-second-interval`),Kc(1010,`br`),ug()()(),Ac(1011,`td`,18)(1012,`code`,28),vN(1013,`number`),ug()(),Ac(1014,`td`,20)(1015,`p`)(1016,`code`),vN(1017,`1`),ug()()(),Ac(1018,`td`,21)(1019,`em`)(1020,`strong`),vN(1021,`(opcional)`),ug()(),Ac(1022,`p`),vN(1023,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),Ac(1024,`code`),vN(1025,`p-show-seconds`),ug(),vN(1026,` está ativo.`),ug()()(),Ac(1027,`tr`,14)(1028,`td`,15)(1029,`div`,16)(1030,`span`,17),vN(1031,` p-required-field-error-message`),Kc(1032,`br`),ug()()(),Ac(1033,`td`,18)(1034,`code`,19),vN(1035,`boolean`),ug()(),Ac(1036,`td`,20)(1037,`p`)(1038,`code`),vN(1039,`false`),ug()()(),Ac(1040,`td`,21)(1041,`em`)(1042,`strong`),vN(1043,`(opcional)`),ug()(),Ac(1044,`p`),vN(1045,`Exibe a mensagem setada na propriedade `),Ac(1046,`code`),vN(1047,`p-error-pattern`),ug(),vN(1048,` se o campo estiver vazio e for requerido.`),ug(),Ac(1049,`blockquote`)(1050,`p`),vN(1051,`Necessário que a propriedade `),Ac(1052,`code`),vN(1053,`p-required`),ug(),vN(1054,` esteja habilitada.`),ug()()()(),Ac(1055,`tr`,14)(1056,`td`,15)(1057,`div`,16)(1058,`span`,17),vN(1059,` p-show-required`),Kc(1060,`br`),ug()()(),Ac(1061,`td`,18)(1062,`code`,19),vN(1063,`boolean`),ug()(),Ac(1064,`td`,20)(1065,`p`)(1066,`code`),vN(1067,`false`),ug()()(),Ac(1068,`td`,21)(1069,`em`)(1070,`strong`),vN(1071,`(opcional)`),ug()(),Ac(1072,`p`),vN(1073,`Define se a indicação de campo obrigatório será exibida.`),ug()()(),Ac(1074,`tr`,14)(1075,`td`,15)(1076,`div`,16)(1077,`span`,17),vN(1078,` p-show-seconds`),Kc(1079,`br`),ug()()(),Ac(1080,`td`,18)(1081,`code`,19),vN(1082,`boolean`),ug()(),Ac(1083,`td`,20)(1084,`p`)(1085,`code`),vN(1086,`false`),ug()()(),Ac(1087,`td`,21)(1088,`em`)(1089,`strong`),vN(1090,`(opcional)`),ug()(),Ac(1091,`p`),vN(1092,`Exibe a coluna de segundos no painel de seleção do timer.`),ug()()(),Ac(1093,`tr`,14)(1094,`td`,15)(1095,`div`,16)(1096,`span`,17),vN(1097,` p-size`),Kc(1098,`br`),ug()()(),Ac(1099,`td`,18)(1100,`code`,25),vN(1101,`string`),ug()(),Ac(1102,`td`,20)(1103,`p`)(1104,`code`),vN(1105,`medium`),ug()()(),Ac(1106,`td`,21)(1107,`em`)(1108,`strong`),vN(1109,`(opcional)`),ug()(),Ac(1110,`p`),vN(1111,`Define o tamanho do componente:`),ug(),Ac(1112,`ul`)(1113,`li`)(1114,`code`),vN(1115,`small`),ug(),vN(1116,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(1117,`li`)(1118,`code`),vN(1119,`medium`),ug(),vN(1120,`: altura do input como 44px.`),ug()()()(),Ac(1121,`tr`,14)(1122,`td`,15)(1123,`div`,16)(1124,`span`,17),vN(1125,` p-format-time`),Kc(1126,`br`),ug()()(),Ac(1127,`td`,18)(1128,`code`,31),vN(1129,`PoTimerFormat`),ug()(),Ac(1130,`td`,20)(1131,`p`),vN(1132,`Determinado pelo locale`),ug()(),Ac(1133,`td`,21)(1134,`em`)(1135,`strong`),vN(1136,`(opcional)`),ug()(),Ac(1137,`p`),vN(1138,`Define o formato de exibição do timer.`),ug(),Ac(1139,`p`),vN(1140,`Valores válidos:`),ug(),Ac(1141,`ul`)(1142,`li`)(1143,`code`),vN(1144,`24`),ug(),vN(1145,`: formato de 24 horas (padrão para pt, es, ru)`),ug(),Ac(1146,`li`)(1147,`code`),vN(1148,`12`),ug(),vN(1149,`: formato de 12 horas com indicador AM/PM (padrão para en)`),ug()(),Ac(1150,`p`),vN(1151,`Quando não informado, o formato será determinado automaticamente pelo locale:`),ug(),Ac(1152,`ul`)(1153,`li`)(1154,`code`),vN(1155,`en`),ug(),vN(1156,` → 12h (AM/PM)`),ug(),Ac(1157,`li`)(1158,`code`),vN(1159,`pt`),ug(),vN(1160,`, `),Ac(1161,`code`),vN(1162,`es`),ug(),vN(1163,`, `),Ac(1164,`code`),vN(1165,`ru`),ug(),vN(1166,` → 24h`),ug()()()()(),Ac(1167,`h3`,10),vN(1168,`Métodos`),ug(),Ac(1169,`table`,32)(1170,`tr`,14)(1171,`th`,33)(1172,`div`,16)(1173,`h4`)(1174,`span`,17),vN(1175,` showAdditionalHelp `),ug()()()()(),Ac(1176,`tr`,21)(1177,`td`,21)(1178,`p`),vN(1179,`Método que exibe `),Ac(1180,`code`),vN(1181,`p-helper`),ug(),vN(1182,` ou executa a ação definida em `),Ac(1183,`code`),vN(1184,`p-helper{eventOnClick}`),ug(),vN(1185,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(1186,`code`),vN(1187,`p-keydown`),ug(),vN(1188,`.`),ug(),Ac(1189,`blockquote`)(1190,`p`),vN(1191,`Exibe ou oculta o conteúdo do componente `),Ac(1192,`code`),vN(1193,`po-helper`),ug(),vN(1194,` quando o componente estiver com foco.`),ug()(),Ac(1195,`pre`)(1196,`code`),vN(1197,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),ug()(),Ac(1198,`pre`)(1199,`code`),vN(1200,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(1201,`br`),ug())},dependencies:[_a],encapsulation:2,changeDetection:1})}return l})();var Fe=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(E(Qn),E(wn))};static ɵcmp=Hn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Datetimepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-datetimepicker-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-datetimepicker-basic-view`)(6,`sample-po-datetimepicker-labs-view`)(7,`sample-po-datetimepicker-12h-seconds-view`)(8,`sample-po-datetimepicker-scheduling-view`),ug()()()),r&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Cze,cae,mae,ce,Se,he,xe,fe],encapsulation:2,changeDetection:1})}return l})()}];var ve=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[kL.forChild(Fe),kL]})}return l})();var Et=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[Ta,ve]})}return l})();export{Et as DocPoDatetimepickerModule};