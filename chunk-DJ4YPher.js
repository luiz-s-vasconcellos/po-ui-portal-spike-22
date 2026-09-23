import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Jt as e_e,Ki as lo,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he$1,Nt as Y0e,P as Eu,Qi as oN,Sa as yN,Ti as f0,Tn as tP,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,st as N_e,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var se=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datetimepicker`,`p-label`,`PO Datetimepicker`]],template:function(r,i){r&1&&ql(0,`po-datetimepicker`,0)},dependencies:[tP],encapsulation:2,changeDetection:1})}return l})();var De=l=>({"docs-sample-code-tabs":l});var ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Datetimepicker Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-datetimepicker name="datetimepicker" p-label="PO Datetimepicker"> </po-datetimepicker>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-datetimepicker-basic/sample-po-datetimepicker-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-basic',
  templateUrl: './sample-po-datetimepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepickerBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-datetimepicker-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,De,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,se],encapsulation:2,changeDetection:1})}return l})();var ge=(()=>{class l{datetimepicker;errorPattern;event;formatDate;formatTime;help;helperText;label;locale;maxDate;maxTime;minDate;minTime;minuteInterval;placeholder;properties;secondInterval;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`showSeconds`,label:`Show Seconds`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatDateOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];formatTimeOptions=[{label:`24h`,value:`24`},{label:`12h (AM/PM)`,value:`12`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.datetimepicker=void 0,this.errorPattern=void 0,this.event=void 0,this.formatDate=void 0,this.formatTime=void 0,this.help=void 0,this.helperText=``,this.label=void 0,this.locale=void 0,this.maxDate=void 0,this.maxTime=void 0,this.minDate=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.placeholder=void 0,this.properties=[],this.secondInterval=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-labs`]],standalone:!1,decls:26,vars:54,consts:[[`f`,`ngForm`],[`name`,`datetimepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-clean`,`p-compact-label`,`p-disabled`,`p-error-limit`,`p-error-pattern`,`p-format-date`,`p-format-time`,`p-help`,`p-helper`,`p-label`,`p-label-text-wrap`,`p-loading`,`p-locale`,`p-max-date`,`p-max-time`,`p-min-date`,`p-min-time`,`p-minute-interval`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-second-interval`,`p-show-required`,`p-show-seconds`,`p-size`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minuteInterval`,`p-clean`,``,`p-label`,`Minute Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`secondInterval`,`p-clean`,``,`p-label`,`Second Interval`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minTime`,`p-clean`,``,`p-label`,`Min Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`maxTime`,`p-clean`,``,`p-label`,`Max Time`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max Date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatDate`,`p-columns`,`4`,`p-label`,`Format Date`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`formatTime`,`p-columns`,`4`,`p-label`,`Format Time`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let d=Vx();Ml(0,`po-datetimepicker`,1),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.datetimepicker,o)||(i.datetimepicker=o),Jy(o)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3)(4,`po-info`,4),lg(),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`po-input`,5),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.label,o)||(i.label=o),Jy(o)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.help,o)||(i.help=o),Jy(o)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.helperText,o)||(i.helperText=o),Jy(o)}),lg(),f0(),Ml(11,`po-input`,8),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.placeholder,o)||(i.placeholder=o),Jy(o)}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.errorPattern,o)||(i.errorPattern=o),Jy(o)}),lg(),f0(),Ml(13,`po-number`,10),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.minuteInterval,o)||(i.minuteInterval=o),Jy(o)}),lg(),f0(),Ml(14,`po-number`,11),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.secondInterval,o)||(i.secondInterval=o),Jy(o)}),lg(),f0(),Ml(15,`po-timepicker`,12),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.minTime,o)||(i.minTime=o),Jy(o)}),lg(),f0(),Ml(16,`po-timepicker`,13),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.maxTime,o)||(i.maxTime=o),Jy(o)}),lg(),f0(),Ml(17,`po-datepicker`,14),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.minDate,o)||(i.minDate=o),Jy(o)}),lg(),f0(),Ml(18,`po-datepicker`,15),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.maxDate,o)||(i.maxDate=o),Jy(o)}),lg(),f0(),Ml(19,`po-checkbox-group`,16),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.properties,o)||(i.properties=o),Jy(o)}),lg(),f0(),Ml(20,`po-radio-group`,17),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.locale,o)||(i.locale=o),Jy(o)}),lg(),f0(),Ml(21,`po-radio-group`,18),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.formatDate,o)||(i.formatDate=o),Jy(o)}),lg(),f0(),Ml(22,`po-radio-group`,19),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.formatTime,o)||(i.formatTime=o),Jy(o)}),lg(),f0(),Ml(23,`po-radio-group`,20),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.size,o)||(i.size=o),Jy(o)}),lg(),f0(),Ml(24,`div`,2)(25,`po-button`,21),ht(`p-click`,function(){return i.restore()}),lg()()()}r&2&&(Tw(`ngModel`,i.datetimepicker),cw(`p-clean`,i.properties.includes(`clean`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-error-pattern`,i.errorPattern)(`p-format-date`,i.formatDate)(`p-format-time`,i.formatTime)(`p-help`,i.help)(`p-helper`,i.helperText)(`p-label`,i.label)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-locale`,i.locale)(`p-max-date`,i.maxDate)(`p-max-time`,i.maxTime)(`p-min-date`,i.minDate)(`p-min-time`,i.minTime)(`p-minute-interval`,i.minuteInterval)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-second-interval`,i.secondInterval)(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-seconds`,i.properties.includes(`showSeconds`))(`p-size`,i.size),p0(),Up(3),cw(`p-value`,i.datetimepicker),Up(),cw(`p-value`,i.event),Up(4),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.helperText),p0(),Up(),Tw(`ngModel`,i.placeholder),p0(),Up(),Tw(`ngModel`,i.errorPattern),p0(),Up(),Tw(`ngModel`,i.minuteInterval),p0(),Up(),Tw(`ngModel`,i.secondInterval),p0(),Up(),Tw(`ngModel`,i.minTime),p0(),Up(),Tw(`ngModel`,i.maxTime),p0(),Up(),Tw(`ngModel`,i.minDate),cw(`p-max-date`,i.maxDate),p0(),Up(),Tw(`ngModel`,i.maxDate),cw(`p-min-date`,i.minDate),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.locale),cw(`p-options`,i.localeOptions),p0(),Up(),Tw(`ngModel`,i.formatDate),cw(`p-options`,i.formatDateOptions),p0(),Up(),Tw(`ngModel`,i.formatTime),cw(`p-options`,i.formatTimeOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,Y0e,tP,lU,xbe,q0e,N_e,kbe],encapsulation:2,changeDetection:1})}return l})();var _e=l=>({"docs-sample-code-tabs":l});var Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Datetimepicker Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-datetimepicker
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-datetimepicker-labs/sample-po-datetimepicker-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-datetimepicker-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,_e,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ge],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{datetime=new Date(2026,4,20,15,30,45);static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds`]],standalone:!1,decls:1,vars:1,consts:[[`name`,`datetimepicker12h`,`p-label`,`PO Datetimepicker - 12h with Seconds`,`p-show-seconds`,`true`,`p-format-time`,`12`,`p-format-date`,`mm/dd/yyyy`,3,`ngModelChange`,`ngModel`]],template:function(r,i){r&1&&(Ml(0,`po-datetimepicker`,0),Mw(`ngModelChange`,function(s){return yN(i.datetime,s)||(i.datetime=s),s}),lg(),f0()),r&2&&(Tw(`ngModel`,i.datetime),p0())},dependencies:[wY,Vk,tP],encapsulation:2,changeDetection:1})}return l})();var Te=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-12h-seconds-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Datetimepicker - 12h with Seconds`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-datetimepicker
  name="datetimepicker12h"
  p-label="PO Datetimepicker - 12h with Seconds"
  [(ngModel)]="datetime"
  p-show-seconds="true"
  p-format-time="12"
  p-format-date="mm/dd/yyyy"
>
</po-datetimepicker>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-datetimepicker-12h-seconds/sample-po-datetimepicker-12h-seconds.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datetimepicker-12h-seconds',
  templateUrl: './sample-po-datetimepicker-12h-seconds.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatetimepicker12hSecondsComponent {
  datetime = new Date(2026, 4, 20, 15, 30, 45);
}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-datetimepicker-12h-seconds`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Te,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ee],encapsulation:2,changeDetection:1})}return l})();var Oe=[`formScheduling`];var be=(()=>{class l{poDialog=f(e_e);poNotification=f(Eu);formScheduling;appointment;doctor;patient;specialty;specialtyOptions=[{value:`general`,label:`Clínico Geral`},{value:`cardiology`,label:`Cardiologia`},{value:`dermatology`,label:`Dermatologia`},{value:`orthopedics`,label:`Ortopedia`},{value:`neurology`,label:`Neurologia`}];confirm(){let p=this.appointment?this.appointment.slice(0,16):``,r=`Confirmar agendamento de consulta?

Paciente: ${this.patient}
M\xE9dico: ${this.doctor}
Especialidade: ${this.getSpecialtyLabel()}
Data/Hora: ${p}`;this.poDialog.confirm({title:`Confirmar Agendamento`,message:r,confirm:()=>{this.poNotification.success(`Consulta agendada com sucesso!`),this.formScheduling.reset()},cancel:()=>{this.poNotification.warning(`Agendamento cancelado.`)}})}getSpecialtyLabel(){let p=this.specialtyOptions.find(r=>r.value===this.specialty);return p?p.label:``}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-scheduling`]],viewQuery:function(r,i){if(r&1&&Zl(Oe,7),r&2){let d;lo(d=uo())&&(i.formScheduling=d.first)}},standalone:!1,decls:10,vars:6,consts:[[`formScheduling`,`ngForm`],[1,`po-row`],[`name`,`patient`,`p-label`,`Paciente`,`p-placeholder`,`Nome do paciente`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`doctor`,`p-label`,`Médico`,`p-placeholder`,`Nome do médico`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`specialty`,`p-label`,`Especialidade`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`appointment`,`p-clean`,``,`p-label`,`Data e Hora da Consulta`,`p-min-time`,`08:00`,`p-max-time`,`18:00`,`p-minute-interval`,`15`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`confirmButton`,`p-label`,`Agendar Consulta`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let d=Vx();Ml(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.patient,o)||(i.patient=o),Jy(o)}),lg(),f0(),Ml(4,`po-input`,3),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.doctor,o)||(i.doctor=o),Jy(o)}),lg(),f0(),lg(),Ml(5,`div`,1)(6,`po-select`,4),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.specialty,o)||(i.specialty=o),Jy(o)}),lg(),f0(),Ml(7,`po-datetimepicker`,5),Mw(`ngModelChange`,function(o){return Qy(d),yN(i.appointment,o)||(i.appointment=o),Jy(o)}),lg(),f0(),lg(),Ml(8,`div`,1)(9,`po-button`,6),ht(`p-click`,function(){return i.confirm()}),lg()()()}if(r&2){let d=Yx(1);Up(3),Tw(`ngModel`,i.patient),p0(),Up(),Tw(`ngModel`,i.doctor),p0(),Up(2),Tw(`ngModel`,i.specialty),cw(`p-options`,i.specialtyOptions),p0(),Up(),Tw(`ngModel`,i.appointment),p0(),Up(2),cw(`p-disabled`,d.invalid)}},dependencies:[IY,wY,CY,Vk,kk,Zt,tP,lU,Tbe],encapsulation:2,changeDetection:1})}return l})();var Ve=l=>({"docs-sample-code-tabs":l});var xe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-scheduling-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Datetimepicker - Scheduling`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form #formScheduling="ngForm">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-datetimepicker-scheduling/sample-po-datetimepicker-scheduling.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { UntypedFormControl } from '@angular/forms';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-datetimepicker-scheduling`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ve,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,be],encapsulation:2,changeDetection:1})}return l})();var fe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-datetimepicker-doc`]],standalone:!1,decls:1202,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`/documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`pan`,``,1,`docs-api-property-type`,`PoTimerFormat`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoDatetimepickerComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`O `),Ml(24,`code`),mN(25,`po-datetimepicker`),lg(),mN(26,` \xE9 um componente para manipula\xE7\xE3o de data e hora, permitindo a digita\xE7\xE3o e/ou sele\xE7\xE3o
por meio de um calend\xE1rio integrado com um painel de hor\xE1rios.`),lg(),Ml(27,`p`),mN(28,`O formato de exibi\xE7\xE3o da data \xE9 determinado automaticamente pelo locale configurado, podendo ser alterado
pela propriedade `),Ml(29,`code`),mN(30,`p-format-date`),lg(),mN(31,`. O formato de hora pode ser 24h ou 12h (AM/PM), configurável via `),Ml(32,`code`),mN(33,`p-format-time`),lg(),mN(34,`.`),lg(),Ml(35,`p`),mN(36,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Ml(37,`code`),mN(38,`p-locale`),lg(),mN(39,`.`),lg(),Ml(40,`p`),mN(41,`O componente aceita os seguintes formatos de entrada:`),lg(),Ml(42,`ul`)(43,`li`),mN(44,`ISO 8601 com timezone: `),Ml(45,`code`),mN(46,`'2026-05-12T14:30:00-03:00'`),lg()(),Ml(47,`li`),mN(48,`ISO 8601 UTC: `),Ml(49,`code`),mN(50,`'2026-05-12T14:30:00Z'`),lg()(),Ml(51,`li`),mN(52,`ISO 8601 sem timezone: `),Ml(53,`code`),mN(54,`'2026-05-12T14:30:00'`),lg()(),Ml(55,`li`),mN(56,`ISO 8601 apenas data: `),Ml(57,`code`),mN(58,`'2026-05-12'`),lg()(),Ml(59,`li`),mN(60,`JavaScript Date Object: `),Ml(61,`code`),mN(62,`new Date(2026, 4, 12, 14, 30)`),lg()()(),Ml(63,`p`),mN(64,`O formato de saída do `),Ml(65,`em`),mN(66,`model`),lg(),mN(67,` é sempre ISO 8601 com timezone local: `),Ml(68,`code`),mN(69,`'yyyy-mm-ddTHH:mm+/-HH:mm'`),lg(),mN(70,`
(ou `),Ml(71,`code`),mN(72,`'yyyy-mm-ddTHH:mm:ss+/-HH:mm'`),lg(),mN(73,` quando `),Ml(74,`code`),mN(75,`p-show-seconds`),lg(),mN(76,` está ativo).`),lg(),Ml(77,`p`)(78,`strong`),mN(79,`Importante:`),lg()(),Ml(80,`ul`)(81,`li`),mN(82,`O valor emitido no model inclui o offset do timezone local do navegador.`),lg(),Ml(83,`li`),mN(84,`Ao receber um valor com timezone, o componente converte automaticamente para horário local.`),lg(),Ml(85,`li`),mN(86,`Caso a data/hora esteja inválida, o `),Ml(87,`code`),mN(88,`model`),lg(),mN(89,` receberá a mensagem de erro localizada.`),lg(),Ml(90,`li`),mN(91,`Caso o `),Ml(92,`code`),mN(93,`input`),lg(),mN(94,` esteja passando um `),Ml(95,`code`),mN(96,`[(ngModel)]`),lg(),mN(97,`, mas não tenha um `),Ml(98,`code`),mN(99,`name`),lg(),mN(100,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Ml(101,`code`),mN(102,`[ngModelOptions]="{standalone: true}"`),lg(),mN(103,`).`),lg()(),Ml(104,`p`),mN(105,`Exemplo:`),lg(),Ml(106,`pre`)(107,`code`),mN(108,`<po-datetimepicker
  [(ngModel)]="agendamento"
  [ngModelOptions]="{standalone: true}"
</po-datetimepicker>
`),lg()(),Ml(109,`blockquote`)(110,`p`),mN(111,`Não esqueça de importar o `),Ml(112,`code`),mN(113,`FormsModule`),lg(),mN(114,` em seu módulo, tal como para utilizar o `),Ml(115,`code`),mN(116,`input default`),lg(),mN(117,`.`),lg()(),Ml(118,`h4`),mN(119,`Tokens customizáveis`),lg(),Ml(120,`p`),mN(121,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),ql(122,`br`),mN(123,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ml(124,`code`),mN(125,`.po-input`),lg()(),Ml(126,`blockquote`)(127,`p`),mN(128,`Para maiores informações, acesse o guia `),Ml(129,`a`,6),mN(130,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(131,`.`),lg()(),Ml(132,`table`)(133,`thead`)(134,`tr`)(135,`th`),mN(136,`Propriedade`),lg(),Ml(137,`th`),mN(138,`Descrição`),lg(),Ml(139,`th`),mN(140,`Valor Padrão`),lg()()(),Ml(141,`tbody`)(142,`tr`)(143,`td`)(144,`strong`),mN(145,`Default Values`),lg()(),ql(146,`td`)(147,`td`),lg(),Ml(148,`tr`)(149,`td`)(150,`code`),mN(151,`--font-family`),lg()(),Ml(152,`td`),mN(153,`Família tipográfica usada`),lg(),Ml(154,`td`)(155,`code`),mN(156,`var(--font-family-theme)`),lg()()(),Ml(157,`tr`)(158,`td`)(159,`code`),mN(160,`--font-size`),lg()(),Ml(161,`td`),mN(162,`Tamanho da fonte`),lg(),Ml(163,`td`)(164,`code`),mN(165,`var(--font-size-default)`),lg()()(),Ml(166,`tr`)(167,`td`)(168,`code`),mN(169,`--text-color-placeholder`),lg(),mN(170,` \xA0`),lg(),Ml(171,`td`),mN(172,`Cor principal do texto do placeholder`),lg(),Ml(173,`td`)(174,`code`),mN(175,`var(--color-neutral-light-30)`),lg()()(),Ml(176,`tr`)(177,`td`)(178,`code`),mN(179,`--color`),lg()(),Ml(180,`td`),mN(181,`Cor principal do datetimepicker`),lg(),Ml(182,`td`)(183,`code`),mN(184,`var(--color-neutral-dark-70)`),lg()()(),Ml(185,`tr`)(186,`td`)(187,`code`),mN(188,`--background`),lg()(),Ml(189,`td`),mN(190,`Cor de background`),lg(),Ml(191,`td`)(192,`code`),mN(193,`var(--color-neutral-light-05)`),lg()()(),Ml(194,`tr`)(195,`td`)(196,`code`),mN(197,`--padding`),lg()(),Ml(198,`td`),mN(199,`Preenchimento`),lg(),Ml(200,`td`)(201,`code`),mN(202,`0 0.5rem`),lg()()(),Ml(203,`tr`)(204,`td`)(205,`code`),mN(206,`--text-color`),lg()(),Ml(207,`td`),mN(208,`Cor do texto`),lg(),Ml(209,`td`)(210,`code`),mN(211,`var(--color-neutral-dark-90)`),lg()()(),Ml(212,`tr`)(213,`td`)(214,`code`),mN(215,`--field-container-title-justify`),lg()(),Ml(216,`td`),mN(217,`Alinhamento horizontal do título (`),Ml(218,`code`),mN(219,`justify-content`),lg(),mN(220,`)`),lg(),Ml(221,`td`)(222,`code`),mN(223,`space-between`),lg()()(),Ml(224,`tr`)(225,`td`)(226,`code`),mN(227,`--field-container-title-flex`),lg()(),Ml(228,`td`),mN(229,`Flex do título (`),Ml(230,`code`),mN(231,`flex`),lg(),mN(232,`)`),lg(),Ml(233,`td`)(234,`code`),mN(235,`1 auto`),lg()()(),Ml(236,`tr`)(237,`td`)(238,`strong`),mN(239,`Hover`),lg()(),ql(240,`td`)(241,`td`),lg(),Ml(242,`tr`)(243,`td`)(244,`code`),mN(245,`--color-hover`),lg()(),Ml(246,`td`),mN(247,`Cor principal no estado hover`),lg(),Ml(248,`td`)(249,`code`),mN(250,`var(--color-brand-01-dark)`),lg()()(),Ml(251,`tr`)(252,`td`)(253,`code`),mN(254,`--background-hover`),lg()(),Ml(255,`td`),mN(256,`Cor de background no estado hover`),lg(),Ml(257,`td`)(258,`code`),mN(259,`var(--color-brand-01-lightest)`),lg()()(),Ml(260,`tr`)(261,`td`)(262,`strong`),mN(263,`Focused`),lg()(),ql(264,`td`)(265,`td`),lg(),Ml(266,`tr`)(267,`td`)(268,`code`),mN(269,`--color-focused`),lg()(),Ml(270,`td`),mN(271,`Cor principal no estado de focus`),lg(),Ml(272,`td`)(273,`code`),mN(274,`var(--color-action-default)`),lg()()(),Ml(275,`tr`)(276,`td`)(277,`code`),mN(278,`--outline-color-focused`),lg()(),Ml(279,`td`),mN(280,`Cor do outline do estado de focus`),lg(),Ml(281,`td`)(282,`code`),mN(283,`var(--color-action-focus)`),lg()()(),Ml(284,`tr`)(285,`td`)(286,`strong`),mN(287,`Disabled`),lg()(),ql(288,`td`)(289,`td`),lg(),Ml(290,`tr`)(291,`td`)(292,`code`),mN(293,`--color-disabled`),lg()(),Ml(294,`td`),mN(295,`Cor principal no estado disabled`),lg(),Ml(296,`td`)(297,`code`),mN(298,`var(--color-neutral-light-30)`),lg()()(),Ml(299,`tr`)(300,`td`)(301,`code`),mN(302,`--background-disabled`),lg()(),Ml(303,`td`),mN(304,`Cor de background no estado disabled \xA0`),lg(),Ml(305,`td`)(306,`code`),mN(307,`var(--color-neutral-light-20)`),lg()()(),Ml(308,`tr`)(309,`td`)(310,`code`),mN(311,`--text-color-disabled`),lg()(),Ml(312,`td`),mN(313,`Cor do texto no estado disabled`),lg(),Ml(314,`td`)(315,`code`),mN(316,`var(--color-neutral-dark-70)`),lg()()()()()(),Ml(317,`div`,7)(318,`h4`,8),mN(319,`Seletor`),lg(),Ml(320,`pre`,9),mN(321,`<po-datetimepicker
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
`),lg()(),Ml(322,`h4`,10),mN(323,`Propriedades`),lg(),Ml(324,`table`,11)(325,`tr`,12)(326,`th`,13),mN(327,`Nome`),lg(),Ml(328,`th`,13),mN(329,`Tipo`),lg(),Ml(330,`th`,13),mN(331,`Padrão`),lg(),Ml(332,`th`,13),mN(333,`Descrição`),lg()(),Ml(334,`tr`,14)(335,`td`,15)(336,`div`,16)(337,`span`,17),mN(338,` p-append-in-body`),ql(339,`br`),lg()()(),Ml(340,`td`,18)(341,`code`,19),mN(342,`boolean`),lg()(),Ml(343,`td`,20)(344,`p`)(345,`code`),mN(346,`false`),lg()()(),Ml(347,`td`,21)(348,`em`)(349,`strong`),mN(350,`(opcional)`),lg()(),Ml(351,`p`),mN(352,`Define que o `),Ml(353,`code`),mN(354,`calendar`),lg(),mN(355,` e/ou tooltip serão incluídos no body da página e não dentro do componente.`),lg()()(),Ml(356,`tr`,14)(357,`td`,15)(358,`div`,16)(359,`span`,17),mN(360,` p-auto-focus`),ql(361,`br`),lg()()(),Ml(362,`td`,18)(363,`code`,19),mN(364,`boolean`),lg()(),Ml(365,`td`,20)(366,`p`)(367,`code`),mN(368,`false`),lg()()(),Ml(369,`td`,21)(370,`em`)(371,`strong`),mN(372,`(opcional)`),lg()(),Ml(373,`p`),mN(374,`Aplica foco no elemento ao ser iniciado.`),lg()()(),Ml(375,`tr`,14)(376,`td`,15)(377,`div`,22)(378,`span`,23),mN(379,` (p-change-model)`),ql(380,`br`),lg()()(),Ml(381,`td`,18)(382,`code`,24),mN(383,`EventEmitter`),lg()(),Ml(384,`td`,20),mN(385,`-`),lg(),Ml(386,`td`,21)(387,`em`)(388,`strong`),mN(389,`(opcional)`),lg()(),Ml(390,`p`),mN(391,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ml(392,`code`),mN(393,`setValue`),lg(),mN(394,`, `),Ml(395,`code`),mN(396,`patchValue`),lg(),mN(397,`, carregamento assíncrono).`),lg(),Ml(398,`p`),mN(399,`Diferentemente do `),Ml(400,`code`),mN(401,`p-change`),lg(),mN(402,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ml(403,`code`),mN(404,`p-change-model`),lg(),mN(405,` cobre todos os cenários de alteração de valor.`),lg(),Ml(406,`p`),mN(407,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),lg()()(),Ml(408,`tr`,14)(409,`td`,15)(410,`div`,16)(411,`span`,17),mN(412,` p-clean`),ql(413,`br`),lg()()(),Ml(414,`td`,18)(415,`code`,19),mN(416,`boolean `),lg(),Ml(417,`code`,25),mN(418,` string`),lg()(),Ml(419,`td`,20)(420,`p`)(421,`code`),mN(422,`false`),lg()()(),Ml(423,`td`,21)(424,`em`)(425,`strong`),mN(426,`(opcional)`),lg()(),Ml(427,`p`),mN(428,`Habilita ação para limpar o campo.`),lg()()(),Ml(429,`tr`,14)(430,`td`,15)(431,`div`,16)(432,`span`,17),mN(433,` p-compact-label`),ql(434,`br`),lg()()(),Ml(435,`td`,18)(436,`code`,19),mN(437,`boolean`),lg()(),Ml(438,`td`,20)(439,`p`)(440,`code`),mN(441,`false`),lg()()(),Ml(442,`td`,21)(443,`em`)(444,`strong`),mN(445,`(opcional)`),lg()(),Ml(446,`p`),mN(447,`Define se o título do campo será exibido de forma compacta.`),lg()()(),Ml(448,`tr`,14)(449,`td`,15)(450,`div`,16)(451,`span`,17),mN(452,` p-format-date`),ql(453,`br`),lg()()(),Ml(454,`td`,18)(455,`code`,25),mN(456,`string`),lg()(),Ml(457,`td`,20)(458,`p`),mN(459,`Determinado pelo locale`),lg()(),Ml(460,`td`,21)(461,`em`)(462,`strong`),mN(463,`(opcional)`),lg()(),Ml(464,`p`),mN(465,`Define o formato de exibição da data.`),lg(),Ml(466,`p`),mN(467,`Valores válidos:`),lg(),Ml(468,`ul`)(469,`li`)(470,`code`),mN(471,`dd/mm/yyyy`),lg()(),Ml(472,`li`)(473,`code`),mN(474,`mm/dd/yyyy`),lg()(),Ml(475,`li`)(476,`code`),mN(477,`yyyy/mm/dd`),lg()()(),Ml(478,`p`),mN(479,`Quando não informado, o formato será determinado automaticamente pelo locale:`),lg(),Ml(480,`ul`)(481,`li`)(482,`code`),mN(483,`en`),lg(),mN(484,` → `),Ml(485,`code`),mN(486,`mm/dd/yyyy`),lg()(),Ml(487,`li`)(488,`code`),mN(489,`pt`),lg(),mN(490,`, `),Ml(491,`code`),mN(492,`es`),lg(),mN(493,`, `),Ml(494,`code`),mN(495,`ru`),lg(),mN(496,` → `),Ml(497,`code`),mN(498,`dd/mm/yyyy`),lg()()()()(),Ml(499,`tr`,14)(500,`td`,15)(501,`div`,16)(502,`span`,17),mN(503,` p-disabled`),ql(504,`br`),lg()()(),Ml(505,`td`,18)(506,`code`,19),mN(507,`boolean `),lg(),Ml(508,`code`,25),mN(509,` string`),lg()(),Ml(510,`td`,20)(511,`p`)(512,`code`),mN(513,`false`),lg()()(),Ml(514,`td`,21)(515,`em`)(516,`strong`),mN(517,`(opcional)`),lg()(),Ml(518,`p`),mN(519,`Desabilita o campo.`),lg()()(),Ml(520,`tr`,14)(521,`td`,15)(522,`div`,16)(523,`span`,17),mN(524,` p-error-limit`),ql(525,`br`),lg()()(),Ml(526,`td`,18)(527,`code`,19),mN(528,`boolean`),lg()(),Ml(529,`td`,20)(530,`p`)(531,`code`),mN(532,`false`),lg()()(),Ml(533,`td`,21)(534,`em`)(535,`strong`),mN(536,`(opcional)`),lg()(),Ml(537,`p`),mN(538,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg()()(),Ml(539,`tr`,14)(540,`td`,15)(541,`div`,16)(542,`span`,17),mN(543,` p-error-pattern`),ql(544,`br`),lg()()(),Ml(545,`td`,18)(546,`code`,25),mN(547,`string`),lg()(),Ml(548,`td`,20),mN(549,`-`),lg(),Ml(550,`td`,21)(551,`em`)(552,`strong`),mN(553,`(opcional)`),lg()(),Ml(554,`p`),mN(555,`Mensagem apresentada quando a data/hora for inválida ou fora do período.`),lg()()(),Ml(556,`tr`,14)(557,`td`,15)(558,`div`,16)(559,`span`,17),mN(560,` p-help`),ql(561,`br`),lg()()(),Ml(562,`td`,18)(563,`code`,25),mN(564,`string`),lg()(),Ml(565,`td`,20),mN(566,`-`),lg(),Ml(567,`td`,21)(568,`em`)(569,`strong`),mN(570,`(opcional)`),lg()(),Ml(571,`p`),mN(572,`Texto de apoio do campo.`),lg()()(),Ml(573,`tr`,14)(574,`td`,15)(575,`div`,22)(576,`span`,23),mN(577,` (p-keydown)`),ql(578,`br`),lg()()(),Ml(579,`td`,18)(580,`code`,24),mN(581,`EventEmitter`),lg()(),Ml(582,`td`,20),mN(583,`-`),lg(),Ml(584,`td`,21)(585,`em`)(586,`strong`),mN(587,`(opcional)`),lg()(),Ml(588,`p`),mN(589,`Evento disparado quando uma tecla é pressionada enquanto o foco está no componente.`),lg()()(),Ml(590,`tr`,14)(591,`td`,15)(592,`div`,16)(593,`span`,17),mN(594,` p-label`),ql(595,`br`),lg()()(),Ml(596,`td`,18)(597,`code`,25),mN(598,`string`),lg()(),Ml(599,`td`,20),mN(600,`-`),lg(),Ml(601,`td`,21)(602,`em`)(603,`strong`),mN(604,`(opcional)`),lg()(),Ml(605,`p`),mN(606,`Rótulo do campo.`),lg()()(),Ml(607,`tr`,14)(608,`td`,15)(609,`div`,16)(610,`span`,17),mN(611,` p-label-text-wrap`),ql(612,`br`),lg()()(),Ml(613,`td`,18)(614,`code`,19),mN(615,`boolean`),lg()(),Ml(616,`td`,20)(617,`p`)(618,`code`),mN(619,`false`),lg()()(),Ml(620,`td`,21)(621,`em`)(622,`strong`),mN(623,`(opcional)`),lg()(),Ml(624,`p`),mN(625,`Habilita a quebra automática do texto da propriedade `),Ml(626,`code`),mN(627,`p-label`),lg(),mN(628,`.`),lg()()(),Ml(629,`tr`,14)(630,`td`,15)(631,`div`,16)(632,`span`,17),mN(633,` p-loading`),ql(634,`br`),lg()()(),Ml(635,`td`,18)(636,`code`,19),mN(637,`boolean `),lg(),Ml(638,`code`,25),mN(639,` string`),lg()(),Ml(640,`td`,20)(641,`p`)(642,`code`),mN(643,`false`),lg()()(),Ml(644,`td`,21)(645,`em`)(646,`strong`),mN(647,`(opcional)`),lg()(),Ml(648,`p`),mN(649,`Exibe um ícone de carregamento no lado direito do campo.`),lg()()(),Ml(650,`tr`,14)(651,`td`,15)(652,`div`,16)(653,`span`,17),mN(654,` p-locale`),ql(655,`br`),lg()()(),Ml(656,`td`,18)(657,`code`,25),mN(658,`string`),lg()(),Ml(659,`td`,20),mN(660,`-`),lg(),Ml(661,`td`,21)(662,`em`)(663,`strong`),mN(664,`(opcional)`),lg()(),Ml(665,`p`),mN(666,`Idioma do componente.`),lg(),Ml(667,`blockquote`)(668,`p`),mN(669,`O locale padrão será recuperado com base no `),Ml(670,`a`,26)(671,`code`),mN(672,`PoI18nService`),lg()(),mN(673,` ou `),Ml(674,`em`),mN(675,`browser`),lg(),mN(676,`.`),lg()()()(),Ml(677,`tr`,14)(678,`td`,15)(679,`div`,16)(680,`span`,17),mN(681,` p-max-date`),ql(682,`br`),lg()()(),Ml(683,`td`,18)(684,`code`,25),mN(685,`string `),lg(),Ml(686,`code`,27),mN(687,` Date`),lg()(),Ml(688,`td`,20),mN(689,`-`),lg(),Ml(690,`td`,21)(691,`em`)(692,`strong`),mN(693,`(opcional)`),lg()(),Ml(694,`p`),mN(695,`Define uma data máxima para o `),Ml(696,`code`),mN(697,`po-datetimepicker`),lg(),mN(698,`.
Datas posteriores ao limite ficam desabilitadas no calend\xE1rio.`),lg(),Ml(699,`p`),mN(700,`Aceita os formatos:`),lg(),Ml(701,`ul`)(702,`li`)(703,`code`),mN(704,`Date`),lg(),mN(705,` object: `),Ml(706,`code`),mN(707,`new Date(2026, 4, 31)`),lg()(),Ml(708,`li`),mN(709,`ISO string: `),Ml(710,`code`),mN(711,`'2026-05-31'`),lg()(),Ml(712,`li`),mN(713,`ISO com hora: `),Ml(714,`code`),mN(715,`'2026-05-31T23:59:59-03:00'`),lg()()()()(),Ml(716,`tr`,14)(717,`td`,15)(718,`div`,16)(719,`span`,17),mN(720,` p-max-time`),ql(721,`br`),lg()()(),Ml(722,`td`,18)(723,`code`,25),mN(724,`string`),lg()(),Ml(725,`td`,20),mN(726,`-`),lg(),Ml(727,`td`,21)(728,`em`)(729,`strong`),mN(730,`(opcional)`),lg()(),Ml(731,`p`),mN(732,`Define o hor\xE1rio m\xE1ximo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios posteriores ao limite ficam desabilitados.`),lg(),Ml(733,`p`),mN(734,`Formato aceito: `),Ml(735,`code`),mN(736,`HH:mm`),lg(),mN(737,` ou `),Ml(738,`code`),mN(739,`HH:mm:ss`),lg(),mN(740,`.`),lg()()(),Ml(741,`tr`,14)(742,`td`,15)(743,`div`,16)(744,`span`,17),mN(745,` p-min-date`),ql(746,`br`),lg()()(),Ml(747,`td`,18)(748,`code`,25),mN(749,`string `),lg(),Ml(750,`code`,27),mN(751,` Date`),lg()(),Ml(752,`td`,20),mN(753,`-`),lg(),Ml(754,`td`,21)(755,`em`)(756,`strong`),mN(757,`(opcional)`),lg()(),Ml(758,`p`),mN(759,`Define uma data mínima para o `),Ml(760,`code`),mN(761,`po-datetimepicker`),lg(),mN(762,`.
Datas anteriores ao limite ficam desabilitadas no calend\xE1rio.`),lg(),Ml(763,`p`),mN(764,`Aceita os formatos:`),lg(),Ml(765,`ul`)(766,`li`)(767,`code`),mN(768,`Date`),lg(),mN(769,` object: `),Ml(770,`code`),mN(771,`new Date(2026, 0, 1)`),lg()(),Ml(772,`li`),mN(773,`ISO string: `),Ml(774,`code`),mN(775,`'2026-01-01'`),lg()(),Ml(776,`li`),mN(777,`ISO com hora: `),Ml(778,`code`),mN(779,`'2026-01-01T00:00:00-03:00'`),lg()()()()(),Ml(780,`tr`,14)(781,`td`,15)(782,`div`,16)(783,`span`,17),mN(784,` p-min-time`),ql(785,`br`),lg()()(),Ml(786,`td`,18)(787,`code`,25),mN(788,`string`),lg()(),Ml(789,`td`,20),mN(790,`-`),lg(),Ml(791,`td`,21)(792,`em`)(793,`strong`),mN(794,`(opcional)`),lg()(),Ml(795,`p`),mN(796,`Define o hor\xE1rio m\xEDnimo permitido para sele\xE7\xE3o no timer.
Hor\xE1rios anteriores ao limite ficam desabilitados.`),lg(),Ml(797,`p`),mN(798,`Formato aceito: `),Ml(799,`code`),mN(800,`HH:mm`),lg(),mN(801,` ou `),Ml(802,`code`),mN(803,`HH:mm:ss`),lg(),mN(804,`.`),lg()()(),Ml(805,`tr`,14)(806,`td`,15)(807,`div`,16)(808,`span`,17),mN(809,` p-minute-interval`),ql(810,`br`),lg()()(),Ml(811,`td`,18)(812,`code`,28),mN(813,`number`),lg()(),Ml(814,`td`,20)(815,`p`)(816,`code`),mN(817,`5`),lg()()(),Ml(818,`td`,21)(819,`em`)(820,`strong`),mN(821,`(opcional)`),lg()(),Ml(822,`p`),mN(823,`Define o intervalo entre os minutos exibidos no painel do timer.`),lg()()(),Ml(824,`tr`,14)(825,`td`,15)(826,`div`,16)(827,`span`,17),mN(828,` name`),ql(829,`br`),lg()()(),Ml(830,`td`,18)(831,`code`,25),mN(832,`string`),lg()(),Ml(833,`td`,20),mN(834,`-`),lg(),Ml(835,`td`,21)(836,`em`)(837,`strong`),mN(838,`(opcional)`),lg()(),Ml(839,`p`),mN(840,`Nome do componente.`),lg()()(),Ml(841,`tr`,14)(842,`td`,15)(843,`div`,16)(844,`span`,17),mN(845,` p-no-autocomplete`),ql(846,`br`),lg()()(),Ml(847,`td`,18)(848,`code`,19),mN(849,`boolean `),lg(),Ml(850,`code`,25),mN(851,` string`),lg()(),Ml(852,`td`,20)(853,`p`)(854,`code`),mN(855,`false`),lg()()(),Ml(856,`td`,21)(857,`em`)(858,`strong`),mN(859,`(opcional)`),lg()(),Ml(860,`p`),mN(861,`Define a propriedade nativa `),Ml(862,`code`),mN(863,`autocomplete`),lg(),mN(864,` do campo como `),Ml(865,`code`),mN(866,`off`),lg(),mN(867,`.`),lg()()(),Ml(868,`tr`,14)(869,`td`,15)(870,`div`,22)(871,`span`,23),mN(872,` (p-blur)`),ql(873,`br`),lg()()(),Ml(874,`td`,18)(875,`code`,24),mN(876,`EventEmitter`),lg()(),Ml(877,`td`,20),mN(878,`-`),lg(),Ml(879,`td`,21)(880,`em`)(881,`strong`),mN(882,`(opcional)`),lg()(),Ml(883,`p`),mN(884,`Evento disparado ao sair do campo (blur).`),lg()()(),Ml(885,`tr`,14)(886,`td`,15)(887,`div`,22)(888,`span`,23),mN(889,` (p-change)`),ql(890,`br`),lg()()(),Ml(891,`td`,18)(892,`code`,24),mN(893,`EventEmitter`),lg()(),Ml(894,`td`,20),mN(895,`-`),lg(),Ml(896,`td`,21)(897,`em`)(898,`strong`),mN(899,`(opcional)`),lg()(),Ml(900,`p`),mN(901,`Evento disparado ao alterar valor do campo.`),lg()()(),Ml(902,`tr`,14)(903,`td`,15)(904,`div`,16)(905,`span`,17),mN(906,` p-optional`),ql(907,`br`),lg()()(),Ml(908,`td`,18)(909,`code`,19),mN(910,`boolean`),lg()(),Ml(911,`td`,20)(912,`p`)(913,`code`),mN(914,`false`),lg()()(),Ml(915,`td`,21)(916,`em`)(917,`strong`),mN(918,`(opcional)`),lg()(),Ml(919,`p`),mN(920,`Define se a indicação de campo opcional será exibida.`),lg()()(),Ml(921,`tr`,14)(922,`td`,15)(923,`div`,16)(924,`span`,17),mN(925,` p-placeholder`),ql(926,`br`),lg()()(),Ml(927,`td`,18)(928,`code`,25),mN(929,`string`),lg()(),Ml(930,`td`,20),mN(931,`-`),lg(),Ml(932,`td`,21)(933,`em`)(934,`strong`),mN(935,`(opcional)`),lg()(),Ml(936,`p`),mN(937,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),lg()()(),Ml(938,`tr`,14)(939,`td`,15)(940,`div`,16)(941,`span`,17),mN(942,` p-helper`),ql(943,`br`),lg()()(),Ml(944,`td`,18)(945,`code`,29),mN(946,`PoHelperOptions `),lg(),Ml(947,`code`,25),mN(948,` string`),lg()(),Ml(949,`td`,20),mN(950,`-`),lg(),Ml(951,`td`,21)(952,`em`)(953,`strong`),mN(954,`(opcional)`),lg()(),Ml(955,`p`),mN(956,`Define as opções do componente de ajuda (po-helper).`),lg(),Ml(957,`blockquote`)(958,`p`),mN(959,`Para mais informações acesse: `),Ml(960,`a`,30),mN(961,`https://po-ui.io/documentation/po-helper`),lg(),mN(962,`.`),lg()()()(),Ml(963,`tr`,14)(964,`td`,15)(965,`div`,16)(966,`span`,17),mN(967,` p-readonly`),ql(968,`br`),lg()()(),Ml(969,`td`,18)(970,`code`,19),mN(971,`boolean `),lg(),Ml(972,`code`,25),mN(973,` string`),lg()(),Ml(974,`td`,20)(975,`p`)(976,`code`),mN(977,`false`),lg()()(),Ml(978,`td`,21)(979,`em`)(980,`strong`),mN(981,`(opcional)`),lg()(),Ml(982,`p`),mN(983,`Torna o componente somente leitura.`),lg()()(),Ml(984,`tr`,14)(985,`td`,15)(986,`div`,16)(987,`span`,17),mN(988,` p-required`),ql(989,`br`),lg()()(),Ml(990,`td`,18)(991,`code`,19),mN(992,`boolean `),lg(),Ml(993,`code`,25),mN(994,` string`),lg()(),Ml(995,`td`,20)(996,`p`)(997,`code`),mN(998,`false`),lg()()(),Ml(999,`td`,21)(1e3,`em`)(1001,`strong`),mN(1002,`(opcional)`),lg()(),Ml(1003,`p`),mN(1004,`Define que o campo será obrigatório.`),lg()()(),Ml(1005,`tr`,14)(1006,`td`,15)(1007,`div`,16)(1008,`span`,17),mN(1009,` p-second-interval`),ql(1010,`br`),lg()()(),Ml(1011,`td`,18)(1012,`code`,28),mN(1013,`number`),lg()(),Ml(1014,`td`,20)(1015,`p`)(1016,`code`),mN(1017,`1`),lg()()(),Ml(1018,`td`,21)(1019,`em`)(1020,`strong`),mN(1021,`(opcional)`),lg()(),Ml(1022,`p`),mN(1023,`Define o intervalo entre os segundos exibidos no painel do timer.
Utilizado apenas quando `),Ml(1024,`code`),mN(1025,`p-show-seconds`),lg(),mN(1026,` está ativo.`),lg()()(),Ml(1027,`tr`,14)(1028,`td`,15)(1029,`div`,16)(1030,`span`,17),mN(1031,` p-required-field-error-message`),ql(1032,`br`),lg()()(),Ml(1033,`td`,18)(1034,`code`,19),mN(1035,`boolean`),lg()(),Ml(1036,`td`,20)(1037,`p`)(1038,`code`),mN(1039,`false`),lg()()(),Ml(1040,`td`,21)(1041,`em`)(1042,`strong`),mN(1043,`(opcional)`),lg()(),Ml(1044,`p`),mN(1045,`Exibe a mensagem setada na propriedade `),Ml(1046,`code`),mN(1047,`p-error-pattern`),lg(),mN(1048,` se o campo estiver vazio e for requerido.`),lg(),Ml(1049,`blockquote`)(1050,`p`),mN(1051,`Necessário que a propriedade `),Ml(1052,`code`),mN(1053,`p-required`),lg(),mN(1054,` esteja habilitada.`),lg()()()(),Ml(1055,`tr`,14)(1056,`td`,15)(1057,`div`,16)(1058,`span`,17),mN(1059,` p-show-required`),ql(1060,`br`),lg()()(),Ml(1061,`td`,18)(1062,`code`,19),mN(1063,`boolean`),lg()(),Ml(1064,`td`,20)(1065,`p`)(1066,`code`),mN(1067,`false`),lg()()(),Ml(1068,`td`,21)(1069,`em`)(1070,`strong`),mN(1071,`(opcional)`),lg()(),Ml(1072,`p`),mN(1073,`Define se a indicação de campo obrigatório será exibida.`),lg()()(),Ml(1074,`tr`,14)(1075,`td`,15)(1076,`div`,16)(1077,`span`,17),mN(1078,` p-show-seconds`),ql(1079,`br`),lg()()(),Ml(1080,`td`,18)(1081,`code`,19),mN(1082,`boolean`),lg()(),Ml(1083,`td`,20)(1084,`p`)(1085,`code`),mN(1086,`false`),lg()()(),Ml(1087,`td`,21)(1088,`em`)(1089,`strong`),mN(1090,`(opcional)`),lg()(),Ml(1091,`p`),mN(1092,`Exibe a coluna de segundos no painel de seleção do timer.`),lg()()(),Ml(1093,`tr`,14)(1094,`td`,15)(1095,`div`,16)(1096,`span`,17),mN(1097,` p-size`),ql(1098,`br`),lg()()(),Ml(1099,`td`,18)(1100,`code`,25),mN(1101,`string`),lg()(),Ml(1102,`td`,20)(1103,`p`)(1104,`code`),mN(1105,`medium`),lg()()(),Ml(1106,`td`,21)(1107,`em`)(1108,`strong`),mN(1109,`(opcional)`),lg()(),Ml(1110,`p`),mN(1111,`Define o tamanho do componente:`),lg(),Ml(1112,`ul`)(1113,`li`)(1114,`code`),mN(1115,`small`),lg(),mN(1116,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(1117,`li`)(1118,`code`),mN(1119,`medium`),lg(),mN(1120,`: altura do input como 44px.`),lg()()()(),Ml(1121,`tr`,14)(1122,`td`,15)(1123,`div`,16)(1124,`span`,17),mN(1125,` p-format-time`),ql(1126,`br`),lg()()(),Ml(1127,`td`,18)(1128,`code`,31),mN(1129,`PoTimerFormat`),lg()(),Ml(1130,`td`,20)(1131,`p`),mN(1132,`Determinado pelo locale`),lg()(),Ml(1133,`td`,21)(1134,`em`)(1135,`strong`),mN(1136,`(opcional)`),lg()(),Ml(1137,`p`),mN(1138,`Define o formato de exibição do timer.`),lg(),Ml(1139,`p`),mN(1140,`Valores válidos:`),lg(),Ml(1141,`ul`)(1142,`li`)(1143,`code`),mN(1144,`24`),lg(),mN(1145,`: formato de 24 horas (padrão para pt, es, ru)`),lg(),Ml(1146,`li`)(1147,`code`),mN(1148,`12`),lg(),mN(1149,`: formato de 12 horas com indicador AM/PM (padrão para en)`),lg()(),Ml(1150,`p`),mN(1151,`Quando não informado, o formato será determinado automaticamente pelo locale:`),lg(),Ml(1152,`ul`)(1153,`li`)(1154,`code`),mN(1155,`en`),lg(),mN(1156,` → 12h (AM/PM)`),lg(),Ml(1157,`li`)(1158,`code`),mN(1159,`pt`),lg(),mN(1160,`, `),Ml(1161,`code`),mN(1162,`es`),lg(),mN(1163,`, `),Ml(1164,`code`),mN(1165,`ru`),lg(),mN(1166,` → 24h`),lg()()()()(),Ml(1167,`h3`,10),mN(1168,`Métodos`),lg(),Ml(1169,`table`,32)(1170,`tr`,14)(1171,`th`,33)(1172,`div`,16)(1173,`h4`)(1174,`span`,17),mN(1175,` showAdditionalHelp `),lg()()()()(),Ml(1176,`tr`,21)(1177,`td`,21)(1178,`p`),mN(1179,`Método que exibe `),Ml(1180,`code`),mN(1181,`p-helper`),lg(),mN(1182,` ou executa a ação definida em `),Ml(1183,`code`),mN(1184,`p-helper{eventOnClick}`),lg(),mN(1185,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(1186,`code`),mN(1187,`p-keydown`),lg(),mN(1188,`.`),lg(),Ml(1189,`blockquote`)(1190,`p`),mN(1191,`Exibe ou oculta o conteúdo do componente `),Ml(1192,`code`),mN(1193,`po-helper`),lg(),mN(1194,` quando o componente estiver com foco.`),lg()(),Ml(1195,`pre`)(1196,`code`),mN(1197,`// Exemplo com p-label e p-helper
<po-datetimepicker
 #datetimepicker
 ...
 p-label="Label"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datetimepicker)"
></po-datetimepicker>
`),lg()(),Ml(1198,`pre`)(1199,`code`),mN(1200,`onKeyDown(event: KeyboardEvent, inp: PoDatetimepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(1201,`br`),lg())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var Fe=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(w(Xn),w(Cn))};static ɵcmp=Un({type:l,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Datetimepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-datetimepicker-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-datetimepicker-basic-view`)(6,`sample-po-datetimepicker-labs-view`)(7,`sample-po-datetimepicker-12h-seconds-view`)(8,`sample-po-datetimepicker-scheduling-view`),lg()()()),r&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ce,Se,he,xe,fe],encapsulation:2,changeDetection:1})}return l})()}];var ve=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[NL.forChild(Fe),NL]})}return l})();var Et=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[ar,ve]})}return l})();export{Et as DocPoDatetimepickerModule};