import{$i as pt,Ai as hm,Br as Qn,Ci as fo,Cr as KP,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,K as JD,Kr as S9,Lt as bae,M as Ef,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Z as Lte,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,br as Jv,ca as ue,ci as b9,ct as Ou,di as cE,dr as Hn,en as hoe,fn as ni,gn as poe,i as _a,in as kte,ji as ho,k as D4,ki as he$1,na as qP,ni as Xc,nr as D9,nt as Nte,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,wr as Kc,zi as kL}from"./main-EZZF3RMT.js";var Ee=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-datepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datepicker`,`p-label`,`PO Datepicker`]],template:function(r,i){r&1&&Kc(0,`po-datepicker`,0)},dependencies:[Lte],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-datepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Datepicker Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-datepicker-basic/sample-po-datepicker-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-datepicker-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,qe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ee],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{helperText;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:`Basic`,value:JD.Basic},{label:`Extended`,value:JD.Extended}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-datepicker-labs`]],standalone:!1,decls:22,vars:47,consts:[[`f`,`ngForm`],[`name`,`datepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-max-date`,`p-error-pattern`,`p-format`,`p-help`,`p-iso-format`,`p-label`,`p-locale`,`p-min-date`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-size`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`,`p-format`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-format`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`format`,`p-columns`,`4`,`p-label`,`Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`isoFormat`,`p-columns`,`4`,`p-label`,`Iso Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Bx();Ac(0,`po-datepicker`,1),RE(`ngModelChange`,function(l){return Jv(s),DN(i.datepicker,l)||(i.datepicker=l),e_(l)}),pt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3)(4,`po-info`,4),ug(),Kc(5,`po-divider`),Ac(6,`form`,null,0)(8,`po-input`,5),RE(`ngModelChange`,function(l){return Jv(s),DN(i.label,l)||(i.label=l),e_(l)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(l){return Jv(s),DN(i.help,l)||(i.help=l),e_(l)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(l){return Jv(s),DN(i.helperText,l)||(i.helperText=l),e_(l)}),ug(),p0(),Ac(11,`po-input`,8),RE(`ngModelChange`,function(l){return Jv(s),DN(i.placeholder,l)||(i.placeholder=l),e_(l)}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(l){return Jv(s),DN(i.errorPattern,l)||(i.errorPattern=l),e_(l)}),ug(),p0(),Ac(13,`po-datepicker`,10),RE(`ngModelChange`,function(l){return Jv(s),DN(i.minDate,l)||(i.minDate=l),e_(l)}),ug(),p0(),Ac(14,`po-datepicker`,11),RE(`ngModelChange`,function(l){return Jv(s),DN(i.maxDate,l)||(i.maxDate=l),e_(l)}),ug(),p0(),Ac(15,`po-checkbox-group`,12),RE(`ngModelChange`,function(l){return Jv(s),DN(i.properties,l)||(i.properties=l),e_(l)}),ug(),p0(),Ac(16,`po-radio-group`,13),RE(`ngModelChange`,function(l){return Jv(s),DN(i.locale,l)||(i.locale=l),e_(l)}),ug(),p0(),Ac(17,`po-radio-group`,14),RE(`ngModelChange`,function(l){return Jv(s),DN(i.format,l)||(i.format=l),e_(l)}),ug(),p0(),Ac(18,`po-radio-group`,15),RE(`ngModelChange`,function(l){return Jv(s),DN(i.isoFormat,l)||(i.isoFormat=l),e_(l)}),ug(),p0(),Ac(19,`po-radio-group`,16),RE(`ngModelChange`,function(l){return Jv(s),DN(i.size,l)||(i.size=l),e_(l)}),ug(),p0(),Ac(20,`div`,2)(21,`po-button`,17),pt(`p-click`,function(){return i.restore()}),ug()()()}r&2&&(TE(`ngModel`,i.datepicker),cE(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-max-date`,i.maxDate)(`p-error-pattern`,i.errorPattern)(`p-format`,i.format)(`p-help`,i.help)(`p-iso-format`,i.isoFormat)(`p-label`,i.label)(`p-locale`,i.locale)(`p-min-date`,i.minDate)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`)),m0(),Hp(3),cE(`p-value`,i.datepicker),Hp(),cE(`p-value`,i.event),Hp(4),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.helperText),m0(),Hp(),TE(`ngModel`,i.placeholder),m0(),Hp(),TE(`ngModel`,i.errorPattern),m0(),Hp(),TE(`ngModel`,i.minDate),cE(`p-max-date`,i.maxDate)(`p-format`,i.format),m0(),Hp(),TE(`ngModel`,i.maxDate),cE(`p-format`,i.format)(`p-min-date`,i.minDate),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.locale),cE(`p-options`,i.localeOptions),m0(),Hp(),TE(`ngModel`,i.format),cE(`p-options`,i.formatOptions),m0(),Hp(),TE(`ngModel`,i.isoFormat),cE(`p-options`,i.isoFormatOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,Lte,D4,kte,hoe],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a});var fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-datepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Datepicker Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-datepicker-labs/sample-po-datepicker-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-datepicker
  class="po-sm-12"
  name="datepicker"
  [(ngModel)]="datepicker"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-max-date]="maxDate"
  [p-error-pattern]="errorPattern"
  [p-format]="format"
  [p-help]="help"
  [p-iso-format]="isoFormat"
  [p-label]="label"
  [p-locale]="locale"
  [p-min-date]="minDate"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="datepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-datepicker
    class="po-md-6"
    name="minDate"
    [(ngModel)]="minDate"
    p-clean
    p-label="Min date"
    [p-max-date]="maxDate"
    [p-format]="format"
  >
  </po-datepicker>

  <po-datepicker
    class="po-md-6"
    name="maxDate"
    [(ngModel)]="maxDate"
    p-clean
    p-label="Max date"
    [p-format]="format"
    [p-min-date]="minDate"
  >
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
    name="format"
    [(ngModel)]="format"
    p-columns="4"
    p-label="Format"
    [p-options]="formatOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="isoFormat"
    [(ngModel)]="isoFormat"
    p-columns="4"
    p-label="Iso Format"
    [p-options]="isoFormatOptions"
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoDatepickerIsoFormat, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-labs',
  templateUrl: './sample-po-datepicker-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerLabsComponent implements OnInit {
  helperText: string;
  datepicker: string | Date;
  maxDate: string | Date;
  errorPattern: string;
  event: string;
  format: string;
  help: string;
  isoFormat: PoDatepickerIsoFormat;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  minDate: string | Date;
  size: string;

  public readonly isoFormatOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: PoDatepickerIsoFormat.Basic },
    { label: 'Extended', value: PoDatepickerIsoFormat.Extended }
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
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly formatOptions: Array<PoRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
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
    this.helperText = '';
    this.datepicker = undefined;
    this.maxDate = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.isoFormat = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.minDate = undefined;
    this.size = 'medium';
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-datepicker-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Le,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,he],encapsulation:2,changeDetection:1})}return a})();var Se=(()=>{class a{selectedYear=new Date(`2026-04-30`).getFullYear();event;changeEvent(m){this.event=m}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-datepicker-year`]],standalone:!1,decls:5,vars:3,consts:[[`name`,`yearPicker`,`p-label`,`Year Picker`,`p-placeholder`,`Select a year`,`p-mode`,`year`,3,`ngModelChange`,`p-change`,`ngModel`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`]],template:function(r,i){r&1&&(Ac(0,`po-datepicker`,0),RE(`ngModelChange`,function(c){return DN(i.selectedYear,c)||(i.selectedYear=c),c}),pt(`p-change`,function(c){return i.changeEvent(c)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,1),Kc(3,`po-info`,2)(4,`po-info`,3),ug()),r&2&&(TE(`ngModel`,i.selectedYear),m0(),Hp(3),cE(`p-value`,i.selectedYear),Hp(),cE(`p-value`,i.event))},dependencies:[D9,BP,Ef,Lte,hoe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-datepicker-year-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Datepicker Year`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-datepicker-year/sample-po-datepicker-year.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-datepicker
  name="yearPicker"
  [(ngModel)]="selectedYear"
  p-label="Year Picker"
  p-placeholder="Select a year"
  p-mode="year"
  (p-change)="changeEvent($event)"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="selectedYear"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-datepicker-year/sample-po-datepicker-year.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-year',
  templateUrl: './sample-po-datepicker-year.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerYearComponent {
  selectedYear = new Date('2026-04-30').getFullYear();
  event: string;

  changeEvent(event: string) {
    this.event = event;
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-datepicker-year`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ne,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Se],encapsulation:2,changeDetection:1})}return a})();var ve=(()=>{class a{selectedMonthYear=new Date(`2026-12-02`);event;changeEvent(m){this.event=m}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-datepicker-month-year`]],standalone:!1,decls:5,vars:3,consts:[[`name`,`monthYearPicker`,`p-label`,`Month/Year Picker`,`p-placeholder`,`Select month and year`,`p-mode`,`month-year`,3,`ngModelChange`,`p-change`,`ngModel`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`]],template:function(r,i){r&1&&(Ac(0,`po-datepicker`,0),RE(`ngModelChange`,function(c){return DN(i.selectedMonthYear,c)||(i.selectedMonthYear=c),c}),pt(`p-change`,function(c){return i.changeEvent(c)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,1),Kc(3,`po-info`,2)(4,`po-info`,3),ug()),r&2&&(TE(`ngModel`,i.selectedMonthYear),m0(),Hp(3),cE(`p-value`,i.selectedMonthYear),Hp(),cE(`p-value`,i.event))},dependencies:[D9,BP,Ef,Lte,hoe],encapsulation:2,changeDetection:1})}return a})();var Ie=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-datepicker-month-year-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Datepicker MonthYear`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-datepicker
  name="monthYearPicker"
  [(ngModel)]="selectedMonthYear"
  p-label="Month/Year Picker"
  p-placeholder="Select month and year"
  p-mode="month-year"
  (p-change)="changeEvent($event)"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="selectedMonthYear"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-month-year',
  templateUrl: './sample-po-datepicker-month-year.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerMonthYearComponent {
  selectedMonthYear = new Date('2026-12-02');
  event: string;

  changeEvent(event: string) {
    this.event = event;
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-datepicker-month-year`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ie,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ve],encapsulation:2,changeDetection:1})}return a})();var je=[`formAirfare`];var ye=(()=>{class a{poDialog=f(Nte);poNotification=f(Ou);formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass=`Economy`;accompanyNumber=[{value:0,label:`0`},{value:1,label:`1`},{value:2,label:`2`},{value:3,label:`3`},{value:4,label:`4`},{value:5,label:`5`},{value:6,label:`6`},{value:7,label:`7`},{value:8,label:`8`}];ticketClassOptions=[{value:`Economy`,label:`Economy`},{value:`Premium`,label:`Premium`},{value:`Business`,label:`Business`},{value:`First`,label:`First`}];apply(){let m=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:`Confirm`,message:m,confirm:()=>{this.poNotification.success(`Booking Confirmed`),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:`Economy`})},cancel:()=>{this.poNotification.warning(`Booking Canceled`)}})}getFormatedDate(m){return m&&m.slice(0,10)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-datepicker-airfare`]],viewQuery:function(r,i){if(r&1&&Xc(je,7),r&2){let s;fo(s=ho())&&(i.formAirfare=s.first)}},standalone:!1,decls:13,vars:11,consts:[[`formAirfare`,`ngForm`],[1,`po-row`],[`name`,`startDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date start`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`endDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date end`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`origin`,`p-placeholder`,`Flight origin`,`p-label`,`Origin`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-placeholder`,`Flight destination`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`clas`,`po-row`],[`name`,`ticketClass`,`p-label`,`Class`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompany`,`p-label`,`Accompany`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`applyButton`,`p-label`,`Apply`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=Bx();Ac(0,`form`,null,0)(2,`div`,1)(3,`po-datepicker`,2),RE(`ngModelChange`,function(l){return Jv(s),DN(i.startDate,l)||(i.startDate=l),e_(l)}),ug(),p0(),Ac(4,`po-datepicker`,3),RE(`ngModelChange`,function(l){return Jv(s),DN(i.endDate,l)||(i.endDate=l),e_(l)}),ug(),p0(),ug(),Ac(5,`div`,1)(6,`po-input`,4),RE(`ngModelChange`,function(l){return Jv(s),DN(i.origin,l)||(i.origin=l),e_(l)}),ug(),p0(),Ac(7,`po-input`,5),RE(`ngModelChange`,function(l){return Jv(s),DN(i.destination,l)||(i.destination=l),e_(l)}),ug(),p0(),ug(),Ac(8,`div`,6)(9,`po-select`,7),RE(`ngModelChange`,function(l){return Jv(s),DN(i.ticketClass,l)||(i.ticketClass=l),e_(l)}),ug(),p0(),Ac(10,`po-select`,8),RE(`ngModelChange`,function(l){return Jv(s),DN(i.accompany,l)||(i.accompany=l),e_(l)}),ug(),p0(),ug(),Ac(11,`div`,1)(12,`po-button`,9),pt(`p-click`,function(){return i.apply()}),ug()()()}if(r&2){let s=Zx(1);Hp(3),TE(`ngModel`,i.startDate),cE(`p-max-date`,i.endDate),m0(),Hp(),TE(`ngModel`,i.endDate),cE(`p-min-date`,i.startDate),m0(),Hp(2),TE(`ngModel`,i.origin),m0(),Hp(),TE(`ngModel`,i.destination),m0(),Hp(2),TE(`ngModel`,i.ticketClass),cE(`p-options`,i.ticketClassOptions),m0(),Hp(),TE(`ngModel`,i.accompany),cE(`p-options`,i.accompanyNumber),m0(),Hp(2),cE(`p-disabled`,s.invalid)}},dependencies:[b9,D9,C9,BP,LP,ni,Lte,D4,poe],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-datepicker-airfare-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Datepicker - Airfare`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form #formAirfare="ngForm">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="startDate"
      [(ngModel)]="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      p-required
      [p-max-date]="endDate"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="endDate"
      [(ngModel)]="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      p-required
      [p-min-date]="startDate"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="origin"
      [(ngModel)]="origin"
      p-placeholder="Flight origin"
      p-label="Origin"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="destination"
      [(ngModel)]="destination"
      p-label="Destination"
      p-placeholder="Flight destination"
      p-required
    >
    </po-input>
  </div>

  <div clas="po-row">
    <po-select
      class="po-md-6"
      name="ticketClass"
      [(ngModel)]="ticketClass"
      p-label="Class"
      p-required
      [p-options]="ticketClassOptions"
    >
    </po-select>

    <po-select
      class="po-md-6"
      name="accompany"
      [(ngModel)]="accompany"
      p-label="Accompany"
      p-required
      [p-options]="accompanyNumber"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare',
  templateUrl: './sample-po-datepicker-airfare.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerAirfareComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formAirfare', { static: true }) formAirfare: UntypedFormControl;

  accompany: number = 0;
  destination: string;
  endDate: string = <any>new Date();
  origin: string;
  startDate: string = <any>new Date();
  ticketClass: string = 'Economy';

  public readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  public readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  apply() {
    const message = \`Would you like to confirm the ticket from \${this.origin} to \${
      this.destination
    } with departure date at
    \${this.getFormatedDate(this.startDate)} and return at \${this.getFormatedDate(this.endDate)} with \${
      this.accompany
    } companions in
    \${this.ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-datepicker-airfare`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,He,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ye],encapsulation:2,changeDetection:1})}return a})();var ke=(()=>{class a{formBuilder=f(S9);poDialog=f(Nte);poNotification=f(Ou);formAirfare;accompanyNumber=[{value:0,label:`0`},{value:1,label:`1`},{value:2,label:`2`},{value:3,label:`3`},{value:4,label:`4`},{value:5,label:`5`},{value:6,label:`6`},{value:7,label:`7`},{value:8,label:`8`}];ticketClassOptions=[{value:`Economy`,label:`Economy`},{value:`Premium`,label:`Premium`},{value:`Business`,label:`Business`},{value:`First`,label:`First`}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,hm.required],destination:[``,hm.required],endDate:[new Date,hm.required],origin:[``,hm.required],startDate:[new Date,hm.required],ticketClass:[`Economy`,hm.required]})}apply(m){let{accompany:r,destination:i,endDate:s,origin:c,ticketClass:l,startDate:Me}=m.value,Te=`Would you like to confirm the ticket from ${c} to ${i} with departure date at
    ${this.getFormatedDate(Me)} and return at ${this.getFormatedDate(s)} with ${r} companions in
    ${l} class?`;this.poDialog.confirm({title:`Confirm`,message:Te,confirm:()=>{this.poNotification.success(`Booking Confirmed`),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:`Economy`})},cancel:()=>{this.poNotification.warning(`Booking Canceled`)}})}getFormatedDate(m){return m&&m.slice(0,10)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-datepicker-airfare-reactive-form`]],standalone:!1,decls:12,vars:6,consts:[[3,`formGroup`],[1,`po-row`],[`formControlName`,`startDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date start`,1,`po-md-6`,3,`p-max-date`],[`formControlName`,`endDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date end`,1,`po-md-6`,3,`p-min-date`],[`formControlName`,`origin`,`p-placeholder`,`Flight origin`,`p-label`,`Origin`,1,`po-md-6`],[`formControlName`,`destination`,`p-label`,`Destination`,`p-placeholder`,`Flight destination`,1,`po-md-6`],[`clas`,`po-row`],[`formControlName`,`ticketClass`,`p-label`,`Class`,1,`po-md-6`,3,`p-options`],[`formControlName`,`accompany`,`p-label`,`Accompany`,1,`po-md-6`,3,`p-options`],[`name`,`applyButton`,`p-label`,`Apply`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){r&1&&(Ac(0,`form`,0)(1,`div`,1),Kc(2,`po-datepicker`,2),p0(),Kc(3,`po-datepicker`,3),p0(),ug(),Ac(4,`div`,1),Kc(5,`po-input`,4),p0(),Kc(6,`po-input`,5),p0(),ug(),Ac(7,`div`,6),Kc(8,`po-select`,7),p0(),Kc(9,`po-select`,8),p0(),ug(),Ac(10,`div`,1)(11,`po-button`,9),pt(`p-click`,function(){return i.apply(i.formAirfare)}),ug()()()),r&2&&(cE(`formGroup`,i.formAirfare),Hp(2),cE(`p-max-date`,i.formAirfare.get(`endDate`).value),m0(),Hp(),cE(`p-min-date`,i.formAirfare.get(`startDate`).value),m0(),Hp(2),m0(),Hp(),m0(),Hp(2),cE(`p-options`,i.ticketClassOptions),m0(),Hp(),cE(`p-options`,i.accompanyNumber),m0(),Hp(2),cE(`p-disabled`,i.formAirfare.invalid))},dependencies:[b9,D9,C9,KP,qP,ni,Lte,D4,poe],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a});var De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-datepicker-airfare-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Datepicker - Airfare Reactive Form`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form [formGroup]="formAirfare">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      formControlName="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      [p-max-date]="formAirfare.get('endDate').value"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      formControlName="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      [p-min-date]="formAirfare.get('startDate').value"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" formControlName="origin" p-placeholder="Flight origin" p-label="Origin"> </po-input>

    <po-input class="po-md-6" formControlName="destination" p-label="Destination" p-placeholder="Flight destination">
    </po-input>
  </div>

  <div clas="po-row">
    <po-select class="po-md-6" formControlName="ticketClass" p-label="Class" [p-options]="ticketClassOptions">
    </po-select>

    <po-select class="po-md-6" formControlName="accompany" p-label="Accompany" [p-options]="accompanyNumber">
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply(formAirfare)"
    >
    </po-button>
  </div>
</form>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare-reactive-form',
  templateUrl: './sample-po-datepicker-airfare-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerAirfareReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  formAirfare: UntypedFormGroup;

  readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  ngOnInit() {
    this.formAirfare = this.formBuilder.group({
      accompany: [0, Validators.required],
      destination: ['', Validators.required],
      endDate: [new Date(), Validators.required],
      origin: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      ticketClass: ['Economy', Validators.required]
    });
  }

  apply(formAirfare: UntypedFormGroup) {
    const { accompany, destination, endDate, origin, ticketClass, startDate } = formAirfare.value;

    const message = \`Would you like to confirm the ticket from \${origin} to \${destination} with departure date at
    \${this.getFormatedDate(startDate)} and return at \${this.getFormatedDate(endDate)} with \${accompany} companions in
    \${ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-datepicker-airfare-reactive-form`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Qe,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ke],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-datepicker-doc`]],standalone:!1,decls:1321,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3schools.com/js/js_dates.asp`],[`href`,`https://www.w3schools.com/jsref/jsref_setfullyear.asp`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`/documentation/po-i18n`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoDatepickerComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`O `),Ac(24,`code`),vN(25,`po-datepicker`),ug(),vN(26,` é um componente específico para manipulação de datas permitindo a digitação e / ou seleção.`),ug(),Ac(27,`p`),vN(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),Ac(29,`code`),vN(30,`p-format`),ug(),vN(31,`).`),ug(),Ac(32,`p`),vN(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Ac(34,`code`),vN(35,`p-locale`),ug(),vN(36,`.`),ug(),Ac(37,`p`),vN(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),ug(),Ac(39,`blockquote`)(40,`p`),vN(41,`Por padrão, o formato de saída do `),Ac(42,`em`),vN(43,`model`),ug(),vN(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),Ac(45,`code`),vN(46,`p-iso-format`),ug(),vN(47,` provê esse controle independentemente do formato de entrada. Veja abaixo os formatos disponíveis:`),ug()(),Ac(48,`ul`)(49,`li`)(50,`p`),vN(51,`Formato de entrada e saída (E8601DZw) - `),Ac(52,`code`),vN(53,`'2017-11-28T00:00:00-02:00'`),ug(),vN(54,`;`),ug()(),Ac(55,`li`)(56,`p`),vN(57,`Formato de entrada e saída (E8601DAw) - `),Ac(58,`code`),vN(59,`'2017-11-28'`),ug(),vN(60,`;`),ug()(),Ac(61,`li`)(62,`p`),vN(63,`Formato de entrada (Date) - `),Ac(64,`code`),vN(65,`new Date(2017, 10, 28)`),ug(),vN(66,` e saída (E8601DAw) - `),Ac(67,`code`),vN(68,`'2017-11-28'`),ug(),vN(69,`;`),ug()()(),Ac(70,`p`)(71,`strong`),vN(72,`Importante:`),ug()(),Ac(73,`ul`)(74,`li`),vN(75,`Para utilizar datas com ano inferior a 100, verificar o comportamento do `),Ac(76,`a`,6)(77,`code`),vN(78,`new Date`),ug()(),vN(79,`
e utilizar o m\xE9todo `),Ac(80,`a`,7)(81,`code`),vN(82,`setFullYear`),ug()(),vN(83,`.`),ug(),Ac(84,`li`),vN(85,`Caso a data esteja inválida, o `),Ac(86,`code`),vN(87,`model`),ug(),vN(88,` receberá `),Ac(89,`strong`),vN(90,`'Data inválida'`),ug(),vN(91,`.`),ug(),Ac(92,`li`),vN(93,`Caso o `),Ac(94,`code`),vN(95,`input`),ug(),vN(96,` esteja passando um `),Ac(97,`code`),vN(98,`[(ngModel)]`),ug(),vN(99,`, mas não tenha um `),Ac(100,`code`),vN(101,`name`),ug(),vN(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Ac(103,`code`),vN(104,`[ngModelOptions]="{standalone: true}"`),ug(),vN(105,`).`),ug()(),Ac(106,`p`),vN(107,`Exemplo:`),ug(),Ac(108,`pre`)(109,`code`),vN(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),ug()(),Ac(111,`blockquote`)(112,`p`),vN(113,`Não esqueça de importar o `),Ac(114,`code`),vN(115,`FormsModule`),ug(),vN(116,` em seu módulo, tal como para utilizar o `),Ac(117,`code`),vN(118,`input default`),ug(),vN(119,`.`),ug()(),Ac(120,`h4`),vN(121,`Tokens customizáveis`),ug(),Ac(122,`p`),vN(123,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Kc(124,`br`),vN(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ac(126,`code`),vN(127,`.po-input`),ug()(),Ac(128,`blockquote`)(129,`p`),vN(130,`Para maiores informações, acesse o guia `),Ac(131,`a`,8),vN(132,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(133,`.`),ug()(),Ac(134,`table`)(135,`thead`)(136,`tr`)(137,`th`),vN(138,`Propriedade`),ug(),Ac(139,`th`),vN(140,`Descrição`),ug(),Ac(141,`th`),vN(142,`Valor Padrão`),ug()()(),Ac(143,`tbody`)(144,`tr`)(145,`td`)(146,`strong`),vN(147,`Default Values`),ug()(),Kc(148,`td`)(149,`td`),ug(),Ac(150,`tr`)(151,`td`)(152,`code`),vN(153,`--font-family`),ug()(),Ac(154,`td`),vN(155,`Família tipográfica usada`),ug(),Ac(156,`td`)(157,`code`),vN(158,`var(--font-family-theme)`),ug()()(),Ac(159,`tr`)(160,`td`)(161,`code`),vN(162,`--font-size`),ug()(),Ac(163,`td`),vN(164,`Tamanho da fonte`),ug(),Ac(165,`td`)(166,`code`),vN(167,`var(--font-size-default)`),ug()()(),Ac(168,`tr`)(169,`td`)(170,`code`),vN(171,`--text-color-placeholder`),ug(),vN(172,` \xA0`),ug(),Ac(173,`td`),vN(174,`Cor principal do texto do placeholder`),ug(),Ac(175,`td`)(176,`code`),vN(177,`var(--color-neutral-light-30)`),ug()()(),Ac(178,`tr`)(179,`td`)(180,`code`),vN(181,`--color`),ug()(),Ac(182,`td`),vN(183,`Cor principal do datepicker`),ug(),Ac(184,`td`)(185,`code`),vN(186,`var(--color-neutral-dark-70)`),ug()()(),Ac(187,`tr`)(188,`td`)(189,`code`),vN(190,`--background`),ug()(),Ac(191,`td`),vN(192,`Cor de background`),ug(),Ac(193,`td`)(194,`code`),vN(195,`var(--color-neutral-light-05)`),ug()()(),Ac(196,`tr`)(197,`td`)(198,`code`),vN(199,`--padding`),ug()(),Ac(200,`td`),vN(201,`Preenchimento`),ug(),Ac(202,`td`)(203,`code`),vN(204,`0 0.5rem`),ug()()(),Ac(205,`tr`)(206,`td`)(207,`code`),vN(208,`--text-color`),ug()(),Ac(209,`td`),vN(210,`Cor do texto`),ug(),Ac(211,`td`)(212,`code`),vN(213,`var(--color-neutral-dark-90)`),ug()()(),Ac(214,`tr`)(215,`td`)(216,`code`),vN(217,`--field-container-title-justify`),ug()(),Ac(218,`td`),vN(219,`Alinhamento horizontal do título (`),Ac(220,`code`),vN(221,`justify-content`),ug(),vN(222,`)`),ug(),Ac(223,`td`)(224,`code`),vN(225,`space-between`),ug()()(),Ac(226,`tr`)(227,`td`)(228,`code`),vN(229,`--field-container-title-flex`),ug()(),Ac(230,`td`),vN(231,`Flex do título (`),Ac(232,`code`),vN(233,`flex`),ug(),vN(234,`)`),ug(),Ac(235,`td`)(236,`code`),vN(237,`1 auto`),ug()()(),Ac(238,`tr`)(239,`td`)(240,`strong`),vN(241,`Hover`),ug()(),Kc(242,`td`)(243,`td`),ug(),Ac(244,`tr`)(245,`td`)(246,`code`),vN(247,`--color-hover`),ug()(),Ac(248,`td`),vN(249,`Cor principal no estado hover`),ug(),Ac(250,`td`)(251,`code`),vN(252,`var(--color-brand-01-dark)`),ug()()(),Ac(253,`tr`)(254,`td`)(255,`code`),vN(256,`--background-hover`),ug()(),Ac(257,`td`),vN(258,`Cor de background no estado hover`),ug(),Ac(259,`td`)(260,`code`),vN(261,`var(--color-brand-01-lightest)`),ug()()(),Ac(262,`tr`)(263,`td`)(264,`strong`),vN(265,`Focused`),ug()(),Kc(266,`td`)(267,`td`),ug(),Ac(268,`tr`)(269,`td`)(270,`code`),vN(271,`--color-focused`),ug()(),Ac(272,`td`),vN(273,`Cor principal no estado de focus`),ug(),Ac(274,`td`)(275,`code`),vN(276,`var(--color-action-default)`),ug()()(),Ac(277,`tr`)(278,`td`)(279,`code`),vN(280,`--outline-color-focused`),ug()(),Ac(281,`td`),vN(282,`Cor do outline do estado de focus`),ug(),Ac(283,`td`)(284,`code`),vN(285,`var(--color-action-focus)`),ug()()(),Ac(286,`tr`)(287,`td`)(288,`strong`),vN(289,`Disabled`),ug()(),Kc(290,`td`)(291,`td`),ug(),Ac(292,`tr`)(293,`td`)(294,`code`),vN(295,`--color-disabled`),ug()(),Ac(296,`td`),vN(297,`Cor principal no estado disabled`),ug(),Ac(298,`td`)(299,`code`),vN(300,`var(--color-neutral-light-30)`),ug()()(),Ac(301,`tr`)(302,`td`)(303,`code`),vN(304,`--background-disabled`),ug()(),Ac(305,`td`),vN(306,`Cor de background no estado disabled \xA0`),ug(),Ac(307,`td`)(308,`code`),vN(309,`var(--color-neutral-light-20)`),ug()()(),Ac(310,`tr`)(311,`td`)(312,`code`),vN(313,`--text-color-disabled`),ug()(),Ac(314,`td`),vN(315,`Cor do texto no estado disabled`),ug(),Ac(316,`td`)(317,`code`),vN(318,`var(--color-neutral-dark-70)`),ug()()()()()(),Ac(319,`div`,9)(320,`h4`,10),vN(321,`Seletor`),ug(),Ac(322,`pre`,11),vN(323,`<po-datepicker
    p-locale="string"
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-async="(value) => Observable<boolean>"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-format="string"
    p-help="string"
    p-iso-format="PoDatepickerIsoFormat"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-mode="'month-year' | 'year'"
    p-no-autocomplete="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-year-range-limit="number" >
</po-datepicker>
`),ug()(),Ac(324,`h4`,12),vN(325,`Propriedades`),ug(),Ac(326,`table`,13)(327,`tr`,14)(328,`th`,15),vN(329,`Nome`),ug(),Ac(330,`th`,15),vN(331,`Tipo`),ug(),Ac(332,`th`,15),vN(333,`Padrão`),ug(),Ac(334,`th`,15),vN(335,`Descrição`),ug()(),Ac(336,`tr`,16)(337,`td`,17)(338,`div`,18)(339,`span`,19),vN(340,`p-locale`),Kc(341,`br`),ug()()(),Ac(342,`td`,20)(343,`code`,21),vN(344,`string`),ug()(),Ac(345,`td`,22),vN(346,`-`),ug(),Ac(347,`td`,23)(348,`em`)(349,`strong`),vN(350,`(opcional)`),ug()(),Ac(351,`p`),vN(352,`Idioma do Datepicker.`),ug(),Ac(353,`blockquote`)(354,`p`),vN(355,`O locale padrão sera recuperado com base no `),Ac(356,`a`,24)(357,`code`),vN(358,`PoI18nService`),ug()(),vN(359,` ou `),Ac(360,`em`),vN(361,`browser`),ug(),vN(362,`.`),ug()()()(),Ac(363,`tr`,16)(364,`td`,17)(365,`div`,25)(366,`span`,26),vN(367,` (p-additional-help)`),Kc(368,`br`),ug()(),Ac(369,`div`,27),vN(370,`Deprecated`),ug()(),Ac(371,`td`,20)(372,`code`,28),vN(373,`EventEmitter`),ug()(),Ac(374,`td`,22),vN(375,`-`),ug(),Ac(376,`td`,23)(377,`em`)(378,`strong`),vN(379,`(opcional)`),ug()(),Ac(380,`p`),vN(381,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(382,`blockquote`)(383,`p`),vN(384,`Essa propriedade está `),Ac(385,`strong`),vN(386,`depreciada`),ug(),vN(387,` e será removida na versão `),Ac(388,`code`),vN(389,`23.x.x`),ug(),vN(390,`. Recomendamos utilizar a propriedade `),Ac(391,`code`),vN(392,`p-helper`),ug(),vN(393,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(394,`tr`,16)(395,`td`,17)(396,`div`,18)(397,`span`,19),vN(398,` p-additional-help-tooltip`),Kc(399,`br`),ug()(),Ac(400,`div`,27),vN(401,`Deprecated`),ug()(),Ac(402,`td`,20)(403,`code`,21),vN(404,`string`),ug()(),Ac(405,`td`,22),vN(406,`-`),ug(),Ac(407,`td`,23)(408,`em`)(409,`strong`),vN(410,`(opcional)`),ug()(),Ac(411,`p`),vN(412,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(413,`code`),vN(414,`po-helper`),ug(),vN(415,`.
`),Ac(416,`strong`),vN(417,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(418,`blockquote`)(419,`p`),vN(420,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(421,`blockquote`)(422,`p`),vN(423,`Essa propriedade está `),Ac(424,`strong`),vN(425,`depreciada`),ug(),vN(426,` e será removida na versão `),Ac(427,`code`),vN(428,`23.x.x`),ug(),vN(429,`. Recomendamos utilizar a propriedade `),Ac(430,`code`),vN(431,`p-helper`),ug(),vN(432,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(433,`tr`,16)(434,`td`,17)(435,`div`,18)(436,`span`,19),vN(437,` p-append-in-body`),Kc(438,`br`),ug()()(),Ac(439,`td`,20)(440,`code`,29),vN(441,`boolean`),ug()(),Ac(442,`td`,22)(443,`p`)(444,`code`),vN(445,`false`),ug()()(),Ac(446,`td`,23)(447,`em`)(448,`strong`),vN(449,`(opcional)`),ug()(),Ac(450,`p`),vN(451,`Define que o `),Ac(452,`code`),vN(453,`calendar`),ug(),vN(454,` e/ou tooltip (`),Ac(455,`code`),vN(456,`p-additional-help-tooltip`),ug(),vN(457,` e/ou `),Ac(458,`code`),vN(459,`p-error-limit`),ug(),vN(460,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ug(),Ac(461,`blockquote`)(462,`p`),vN(463,`Quando utilizado com `),Ac(464,`code`),vN(465,`p-helper`),ug(),vN(466,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(467,`tr`,16)(468,`td`,17)(469,`div`,18)(470,`span`,19),vN(471,` p-auto-focus`),Kc(472,`br`),ug()()(),Ac(473,`td`,20)(474,`code`,29),vN(475,`boolean`),ug()(),Ac(476,`td`,22)(477,`p`)(478,`code`),vN(479,`false`),ug()()(),Ac(480,`td`,23)(481,`em`)(482,`strong`),vN(483,`(opcional)`),ug()(),Ac(484,`p`),vN(485,`Aplica foco no elemento ao ser iniciado.`),ug(),Ac(486,`blockquote`)(487,`p`),vN(488,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ug()()()(),Ac(489,`tr`,16)(490,`td`,17)(491,`div`,25)(492,`span`,26),vN(493,` (p-change-model)`),Kc(494,`br`),ug()()(),Ac(495,`td`,20)(496,`code`,28),vN(497,`EventEmitter`),ug()(),Ac(498,`td`,22),vN(499,`-`),ug(),Ac(500,`td`,23)(501,`em`)(502,`strong`),vN(503,`(opcional)`),ug()(),Ac(504,`p`),vN(505,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(506,`code`),vN(507,`setValue`),ug(),vN(508,`, `),Ac(509,`code`),vN(510,`patchValue`),ug(),vN(511,`, carregamento assíncrono).`),ug(),Ac(512,`p`),vN(513,`Diferentemente do `),Ac(514,`code`),vN(515,`p-change`),ug(),vN(516,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(517,`code`),vN(518,`p-change-model`),ug(),vN(519,` cobre todos os cenários de alteração de valor.`),ug(),Ac(520,`p`),vN(521,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(522,`tr`,16)(523,`td`,17)(524,`div`,18)(525,`span`,19),vN(526,`p-clean`),Kc(527,`br`),ug()()(),Ac(528,`td`,20)(529,`code`,29),vN(530,`boolean`),ug()(),Ac(531,`td`,22),vN(532,`-`),ug(),Ac(533,`td`,23)(534,`em`)(535,`strong`),vN(536,`(opcional)`),ug()(),Ac(537,`p`),vN(538,`Habilita ação para limpar o campo.`),ug()()(),Ac(539,`tr`,16)(540,`td`,17)(541,`div`,18)(542,`span`,19),vN(543,` p-compact-label`),Kc(544,`br`),ug()()(),Ac(545,`td`,20)(546,`code`,29),vN(547,`boolean`),ug()(),Ac(548,`td`,22)(549,`p`)(550,`code`),vN(551,`false`),ug()()(),Ac(552,`td`,23)(553,`em`)(554,`strong`),vN(555,`(opcional)`),ug()(),Ac(556,`p`),vN(557,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(558,`p`),vN(559,`Quando habilitado (`),Ac(560,`code`),vN(561,`true`),ug(),vN(562,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(563,`ul`)(564,`li`)(565,`code`),vN(566,`po-label`),ug()(),Ac(567,`li`)(568,`code`),vN(569,`p-requirement (showRequired)`),ug()(),Ac(570,`li`)(571,`code`),vN(572,`po-helper`),ug()()(),Ac(573,`p`),vN(574,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(575,`p`),vN(576,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(577,`ul`)(578,`li`)(579,`code`),vN(580,`--field-container-title-justify`),ug()(),Ac(581,`li`)(582,`code`),vN(583,`--field-container-title-flex`),ug()()(),Ac(584,`p`),vN(585,`Exemplo:`),ug(),Ac(586,`pre`)(587,`code`),vN(588,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(589,`p`),vN(590,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(591,`tr`,16)(592,`td`,17)(593,`div`,18)(594,`span`,19),vN(595,`p-disabled`),Kc(596,`br`),ug()()(),Ac(597,`td`,20)(598,`code`,29),vN(599,`boolean`),ug()(),Ac(600,`td`,22),vN(601,`-`),ug(),Ac(602,`td`,23)(603,`em`)(604,`strong`),vN(605,`(opcional)`),ug()(),Ac(606,`p`),vN(607,`Desabilita o campo.`),ug()()(),Ac(608,`tr`,16)(609,`td`,17)(610,`div`,18)(611,`span`,19),vN(612,` p-error-async`),Kc(613,`br`),ug()()(),Ac(614,`td`,20)(615,`code`,30),vN(616,`(value) => Observable<boolean>`),ug()(),Ac(617,`td`,22),vN(618,`-`),ug(),Ac(619,`td`,23)(620,`em`)(621,`strong`),vN(622,`(opcional)`),ug()(),Ac(623,`p`),vN(624,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ac(625,`code`),vN(626,`change`),ug(),vN(627,`.`),ug()()(),Ac(628,`tr`,16)(629,`td`,17)(630,`div`,18)(631,`span`,19),vN(632,` p-error-limit`),Kc(633,`br`),ug()()(),Ac(634,`td`,20)(635,`code`,29),vN(636,`boolean`),ug()(),Ac(637,`td`,22)(638,`p`)(639,`code`),vN(640,`false`),ug()()(),Ac(641,`td`,23)(642,`em`)(643,`strong`),vN(644,`(opcional)`),ug()(),Ac(645,`p`),vN(646,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(647,`blockquote`)(648,`p`),vN(649,`Caso essa propriedade seja definida como `),Ac(650,`code`),vN(651,`true`),ug(),vN(652,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()()()(),Ac(653,`tr`,16)(654,`td`,17)(655,`div`,18)(656,`span`,19),vN(657,` p-error-pattern`),Kc(658,`br`),ug()()(),Ac(659,`td`,20)(660,`code`,21),vN(661,`string`),ug()(),Ac(662,`td`,22),vN(663,`-`),ug(),Ac(664,`td`,23)(665,`em`)(666,`strong`),vN(667,`(opcional)`),ug()(),Ac(668,`p`),vN(669,`Mensagem apresentada quando a data for inválida ou fora do período.`),ug(),Ac(670,`blockquote`)(671,`p`),vN(672,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Ac(673,`code`),vN(674,`p-required-field-error-message`),ug(),vN(675,` em conjunto.`),ug()()()(),Ac(676,`tr`,16)(677,`td`,17)(678,`div`,18)(679,`span`,19),vN(680,` p-format`),Kc(681,`br`),ug()()(),Ac(682,`td`,20)(683,`code`,21),vN(684,`string`),ug()(),Ac(685,`td`,22)(686,`p`)(687,`code`),vN(688,`dd/mm/yyyy`),ug()()(),Ac(689,`td`,23)(690,`em`)(691,`strong`),vN(692,`(opcional)`),ug()(),Ac(693,`p`),vN(694,`Formato de exibição da data.`),ug(),Ac(695,`p`),vN(696,`Valores válidos:`),ug(),Ac(697,`ul`)(698,`li`)(699,`code`),vN(700,`dd/mm/yyyy`),ug()(),Ac(701,`li`)(702,`code`),vN(703,`mm/dd/yyyy`),ug()(),Ac(704,`li`)(705,`code`),vN(706,`yyyy/mm/dd`),ug()()(),Ac(707,`p`),vN(708,`Propriedade incompatível com as variações month-year e year.`),ug()()(),Ac(709,`tr`,16)(710,`td`,17)(711,`div`,18)(712,`span`,19),vN(713,` p-help`),Kc(714,`br`),ug()()(),Ac(715,`td`,20)(716,`code`,21),vN(717,`string`),ug()(),Ac(718,`td`,22),vN(719,`-`),ug(),Ac(720,`td`,23)(721,`em`)(722,`strong`),vN(723,`(opcional)`),ug()(),Ac(724,`p`),vN(725,`Texto de apoio do campo.`),ug()()(),Ac(726,`tr`,16)(727,`td`,17)(728,`div`,18)(729,`span`,19),vN(730,` p-iso-format`),Kc(731,`br`),ug()()(),Ac(732,`td`,20)(733,`code`,31),vN(734,`PoDatepickerIsoFormat`),ug()(),Ac(735,`td`,22),vN(736,`-`),ug(),Ac(737,`td`,23)(738,`em`)(739,`strong`),vN(740,`(opcional)`),ug()(),Ac(741,`p`),vN(742,`Padrão de formatação para saída do `),Ac(743,`em`),vN(744,`model`),ug(),vN(745,`, independentemente do formato de entrada.`),ug(),Ac(746,`blockquote`)(747,`p`),vN(748,`Veja os valores válidos no `),Ac(749,`em`),vN(750,`enum`),ug(),Ac(751,`code`),vN(752,`PoDatepickerIsoFormat`),ug(),vN(753,`.`),ug()(),Ac(754,`p`),vN(755,`Propriedade incompatível com as variações month-year e year.`),ug()()(),Ac(756,`tr`,16)(757,`td`,17)(758,`div`,25)(759,`span`,26),vN(760,` (p-keydown)`),Kc(761,`br`),ug()()(),Ac(762,`td`,20)(763,`code`,28),vN(764,`EventEmitter`),ug()(),Ac(765,`td`,22),vN(766,`-`),ug(),Ac(767,`td`,23)(768,`em`)(769,`strong`),vN(770,`(opcional)`),ug()(),Ac(771,`p`),vN(772,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(773,`code`),vN(774,`KeyboardEvent`),ug(),vN(775,` com informações sobre a tecla.`),ug()()(),Ac(776,`tr`,16)(777,`td`,17)(778,`div`,18)(779,`span`,19),vN(780,` p-label`),Kc(781,`br`),ug()()(),Ac(782,`td`,20)(783,`code`,21),vN(784,`string`),ug()(),Ac(785,`td`,22),vN(786,`-`),ug(),Ac(787,`td`,23)(788,`em`)(789,`strong`),vN(790,`(opcional)`),ug()(),Ac(791,`p`),vN(792,`Rótulo do campo.`),ug()()(),Ac(793,`tr`,16)(794,`td`,17)(795,`div`,18)(796,`span`,19),vN(797,` p-label-text-wrap`),Kc(798,`br`),ug()()(),Ac(799,`td`,20)(800,`code`,29),vN(801,`boolean`),ug()(),Ac(802,`td`,22)(803,`p`)(804,`code`),vN(805,`false`),ug()()(),Ac(806,`td`,23)(807,`em`)(808,`strong`),vN(809,`(opcional)`),ug()(),Ac(810,`p`),vN(811,`Habilita a quebra automática do texto da propriedade `),Ac(812,`code`),vN(813,`p-label`),ug(),vN(814,`. Quando `),Ac(815,`code`),vN(816,`p-label-text-wrap`),ug(),vN(817,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(818,`tr`,16)(819,`td`,17)(820,`div`,18)(821,`span`,19),vN(822,` p-loading`),Kc(823,`br`),ug()()(),Ac(824,`td`,20)(825,`code`,29),vN(826,`boolean`),ug()(),Ac(827,`td`,22)(828,`p`)(829,`code`),vN(830,`false`),ug()()(),Ac(831,`td`,23)(832,`em`)(833,`strong`),vN(834,`(opcional)`),ug()(),Ac(835,`p`),vN(836,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug()()(),Ac(837,`tr`,16)(838,`td`,17)(839,`div`,18)(840,`span`,19),vN(841,` p-max-date`),Kc(842,`br`),ug()()(),Ac(843,`td`,20)(844,`code`,21),vN(845,`string `),ug(),Ac(846,`code`,32),vN(847,` Date`),ug()(),Ac(848,`td`,22),vN(849,`-`),ug(),Ac(850,`td`,23)(851,`em`)(852,`strong`),vN(853,`(opcional)`),ug()(),Ac(854,`p`),vN(855,`Define uma data máxima para o `),Ac(856,`code`),vN(857,`po-datepicker`),ug(),vN(858,`.`),ug()()(),Ac(859,`tr`,16)(860,`td`,17)(861,`div`,18)(862,`span`,19),vN(863,` p-min-date`),Kc(864,`br`),ug()()(),Ac(865,`td`,20)(866,`code`,21),vN(867,`string `),ug(),Ac(868,`code`,32),vN(869,` Date`),ug()(),Ac(870,`td`,22),vN(871,`-`),ug(),Ac(872,`td`,23)(873,`em`)(874,`strong`),vN(875,`(opcional)`),ug()(),Ac(876,`p`),vN(877,`Define uma data mínima para o `),Ac(878,`code`),vN(879,`po-datepicker`),ug(),vN(880,`.`),ug()()(),Ac(881,`tr`,16)(882,`td`,17)(883,`div`,18)(884,`span`,19),vN(885,` p-mode`),Kc(886,`br`),ug()()(),Ac(887,`td`,20)(888,`code`,33),vN(889,`'month-year' `),ug(),Ac(890,`code`,34),vN(891,` 'year'`),ug()(),Ac(892,`td`,22),vN(893,`-`),ug(),Ac(894,`td`,23)(895,`em`)(896,`strong`),vN(897,`(opcional)`),ug()(),Ac(898,`p`),vN(899,`Define o modo de operação do datepicker.`),ug(),Ac(900,`p`),vN(901,`Permite configurar o componente para seleção de:`),ug(),Ac(902,`ul`)(903,`li`),vN(904,`Mês e ano (`),Ac(905,`code`),vN(906,`month-year`),ug(),vN(907,`);`),ug(),Ac(908,`li`),vN(909,`Apenas ano (`),Ac(910,`code`),vN(911,`year`),ug(),vN(912,`).`),ug()()()(),Ac(913,`tr`,16)(914,`td`,17)(915,`div`,18)(916,`span`,19),vN(917,` p-no-autocomplete`),Kc(918,`br`),ug()()(),Ac(919,`td`,20)(920,`code`,29),vN(921,`boolean`),ug()(),Ac(922,`td`,22)(923,`p`)(924,`code`),vN(925,`false`),ug()()(),Ac(926,`td`,23)(927,`em`)(928,`strong`),vN(929,`(opcional)`),ug()(),Ac(930,`p`),vN(931,`Define a propriedade nativa `),Ac(932,`code`),vN(933,`autocomplete`),ug(),vN(934,` do campo como `),Ac(935,`code`),vN(936,`off`),ug(),vN(937,`.`),ug()()(),Ac(938,`tr`,16)(939,`td`,17)(940,`div`,25)(941,`span`,26),vN(942,` (p-blur)`),Kc(943,`br`),ug()()(),Ac(944,`td`,20)(945,`code`,28),vN(946,`EventEmitter`),ug()(),Ac(947,`td`,22),vN(948,`-`),ug(),Ac(949,`td`,23)(950,`em`)(951,`strong`),vN(952,`(opcional)`),ug()(),Ac(953,`p`),vN(954,`Evento disparado ao sair do campo.`),ug()()(),Ac(955,`tr`,16)(956,`td`,17)(957,`div`,25)(958,`span`,26),vN(959,` (p-change)`),Kc(960,`br`),ug()()(),Ac(961,`td`,20)(962,`code`,28),vN(963,`EventEmitter`),ug()(),Ac(964,`td`,22),vN(965,`-`),ug(),Ac(966,`td`,23)(967,`em`)(968,`strong`),vN(969,`(opcional)`),ug()(),Ac(970,`p`),vN(971,`Evento disparado ao alterar valor do campo.`),ug()()(),Ac(972,`tr`,16)(973,`td`,17)(974,`div`,18)(975,`span`,19),vN(976,` p-optional`),Kc(977,`br`),ug()()(),Ac(978,`td`,20)(979,`code`,29),vN(980,`boolean`),ug()(),Ac(981,`td`,22)(982,`p`)(983,`code`),vN(984,`false`),ug()()(),Ac(985,`td`,23)(986,`em`)(987,`strong`),vN(988,`(opcional)`),ug()(),Ac(989,`p`),vN(990,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(991,`blockquote`)(992,`p`),vN(993,`Não será exibida a indicação se:`),ug()(),Ac(994,`ul`)(995,`li`),vN(996,`O campo conter `),Ac(997,`code`),vN(998,`p-required`),ug(),vN(999,`;`),ug(),Ac(1e3,`li`),vN(1001,`Não possuir `),Ac(1002,`code`),vN(1003,`p-help`),ug(),vN(1004,` e/ou `),Ac(1005,`code`),vN(1006,`p-label`),ug(),vN(1007,`.`),ug()()()(),Ac(1008,`tr`,16)(1009,`td`,17)(1010,`div`,18)(1011,`span`,19),vN(1012,` p-placeholder`),Kc(1013,`br`),ug()()(),Ac(1014,`td`,20)(1015,`code`,21),vN(1016,`string`),ug()(),Ac(1017,`td`,22),vN(1018,`-`),ug(),Ac(1019,`td`,23)(1020,`em`)(1021,`strong`),vN(1022,`(opcional)`),ug()(),Ac(1023,`p`),vN(1024,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ug()()(),Ac(1025,`tr`,16)(1026,`td`,17)(1027,`div`,18)(1028,`span`,19),vN(1029,` p-helper`),Kc(1030,`br`),ug()()(),Ac(1031,`td`,20)(1032,`code`,35),vN(1033,`PoHelperOptions `),ug(),Ac(1034,`code`,21),vN(1035,` string`),ug()(),Ac(1036,`td`,22),vN(1037,`-`),ug(),Ac(1038,`td`,23)(1039,`em`)(1040,`strong`),vN(1041,`(opcional)`),ug()(),Ac(1042,`p`),vN(1043,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(1044,`code`),vN(1045,`p-label`),ug(),vN(1046,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(1047,`code`),vN(1048,`p-label`),ug(),vN(1049,`.`),ug(),Ac(1050,`blockquote`)(1051,`p`),vN(1052,`Para mais informações acesse: `),Ac(1053,`a`,36),vN(1054,`https://po-ui.io/documentation/po-helper`),ug(),vN(1055,`.`),ug()(),Ac(1056,`blockquote`)(1057,`p`),vN(1058,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(1059,`code`),vN(1060,`p-additional-help-tooltip`),ug(),vN(1061,` e `),Ac(1062,`code`),vN(1063,`p-additional-help`),ug(),vN(1064,`) será ignorado.`),ug()()()(),Ac(1065,`tr`,16)(1066,`td`,17)(1067,`div`,18)(1068,`span`,19),vN(1069,`p-readonly`),Kc(1070,`br`),ug()()(),Ac(1071,`td`,20)(1072,`code`,29),vN(1073,`boolean`),ug()(),Ac(1074,`td`,22),vN(1075,`-`),ug(),Ac(1076,`td`,23)(1077,`em`)(1078,`strong`),vN(1079,`(opcional)`),ug()(),Ac(1080,`p`),vN(1081,`Torna o elemento somente leitura.`),ug()()(),Ac(1082,`tr`,16)(1083,`td`,17)(1084,`div`,18)(1085,`span`,19),vN(1086,`p-required`),Kc(1087,`br`),ug()()(),Ac(1088,`td`,20)(1089,`code`,29),vN(1090,`boolean`),ug()(),Ac(1091,`td`,22)(1092,`p`)(1093,`code`),vN(1094,`false`),ug()()(),Ac(1095,`td`,23)(1096,`em`)(1097,`strong`),vN(1098,`(opcional)`),ug()(),Ac(1099,`p`),vN(1100,`Define que o campo será obrigatório.`),ug()()(),Ac(1101,`tr`,16)(1102,`td`,17)(1103,`div`,18)(1104,`span`,19),vN(1105,` p-required-field-error-message`),Kc(1106,`br`),ug()()(),Ac(1107,`td`,20)(1108,`code`,29),vN(1109,`boolean`),ug()(),Ac(1110,`td`,22)(1111,`p`)(1112,`code`),vN(1113,`false`),ug()()(),Ac(1114,`td`,23)(1115,`em`)(1116,`strong`),vN(1117,`(opcional)`),ug()(),Ac(1118,`p`),vN(1119,`Exibe a mensagem setada na propriedade `),Ac(1120,`code`),vN(1121,`p-error-pattern`),ug(),vN(1122,` se o campo estiver vazio e for requerido.`),ug(),Ac(1123,`blockquote`)(1124,`p`),vN(1125,`Necessário que a propriedade `),Ac(1126,`code`),vN(1127,`p-required`),ug(),vN(1128,` esteja habilitada.`),ug()()()(),Ac(1129,`tr`,16)(1130,`td`,17)(1131,`div`,18)(1132,`span`,19),vN(1133,` p-show-required`),Kc(1134,`br`),ug()()(),Ac(1135,`td`,20)(1136,`code`,29),vN(1137,`boolean`),ug()(),Ac(1138,`td`,22),vN(1139,`-`),ug(),Ac(1140,`td`,23)(1141,`p`),vN(1142,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(1143,`blockquote`)(1144,`p`),vN(1145,`Não será exibida a indicação se:`),ug()(),Ac(1146,`ul`)(1147,`li`),vN(1148,`Não possuir `),Ac(1149,`code`),vN(1150,`p-help`),ug(),vN(1151,` e/ou `),Ac(1152,`code`),vN(1153,`p-label`),ug(),vN(1154,`.`),ug()()()(),Ac(1155,`tr`,16)(1156,`td`,17)(1157,`div`,18)(1158,`span`,19),vN(1159,` p-size`),Kc(1160,`br`),ug()()(),Ac(1161,`td`,20)(1162,`code`,21),vN(1163,`string`),ug()(),Ac(1164,`td`,22)(1165,`p`)(1166,`code`),vN(1167,`medium`),ug()()(),Ac(1168,`td`,23)(1169,`em`)(1170,`strong`),vN(1171,`(opcional)`),ug()(),Ac(1172,`p`),vN(1173,`Define o tamanho do componente:`),ug(),Ac(1174,`ul`)(1175,`li`)(1176,`code`),vN(1177,`small`),ug(),vN(1178,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(1179,`li`)(1180,`code`),vN(1181,`medium`),ug(),vN(1182,`: altura do input como 44px.`),ug()(),Ac(1183,`blockquote`)(1184,`p`),vN(1185,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(1186,`code`),vN(1187,`medium`),ug(),vN(1188,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(1189,`a`,37),vN(1190,`po-theme`),ug(),vN(1191,`.`),ug()()()(),Ac(1192,`tr`,16)(1193,`td`,17)(1194,`div`,18)(1195,`span`,19),vN(1196,` p-year-range-limit`),Kc(1197,`br`),ug()()(),Ac(1198,`td`,20)(1199,`code`,38),vN(1200,`number`),ug()(),Ac(1201,`td`,22)(1202,`p`),vN(1203,`150`),ug()(),Ac(1204,`td`,23)(1205,`p`),vN(1206,`Define o limite de anos exibidos nas variações `),Ac(1207,`code`),vN(1208,`month-year`),ug(),vN(1209,` e `),Ac(1210,`code`),vN(1211,`year`),ug(),vN(1212,`,
considerando a data atual como refer\xEAncia.`),ug(),Ac(1213,`p`),vN(1214,`O valor informado determina o intervalo de anos anterior e posterior
\xE0 data corrente que ser\xE1 disponibilizado para sele\xE7\xE3o.`),ug()()()(),Ac(1215,`h3`,12),vN(1216,`Métodos`),ug(),Ac(1217,`table`,39)(1218,`tr`,16)(1219,`th`,40)(1220,`div`,18)(1221,`h4`)(1222,`span`,19),vN(1223,` focus `),ug()()()()(),Ac(1224,`tr`,23)(1225,`td`,23)(1226,`p`),vN(1227,`Função que atribui foco ao componente.`),ug(),Ac(1228,`p`),vN(1229,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(1230,`pre`)(1231,`code`),vN(1232,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),ug()()()()(),Kc(1233,`br`),Ac(1234,`table`,39)(1235,`tr`,16)(1236,`th`,40)(1237,`div`,18)(1238,`h4`)(1239,`span`,19),vN(1240,` showAdditionalHelp `),ug()()()()(),Ac(1241,`tr`,23)(1242,`td`,23)(1243,`p`),vN(1244,`Método que exibe `),Ac(1245,`code`),vN(1246,`p-helper`),ug(),vN(1247,` ou executa a ação definida em `),Ac(1248,`code`),vN(1249,`p-helper{eventOnClick}`),ug(),vN(1250,` ou em `),Ac(1251,`code`),vN(1252,`p-additionalHelp`),ug(),vN(1253,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(1254,`code`),vN(1255,`p-keydown`),ug(),vN(1256,`.`),ug(),Ac(1257,`blockquote`)(1258,`p`),vN(1259,`Exibe ou oculta o conteúdo do componente `),Ac(1260,`code`),vN(1261,`po-helper`),ug(),vN(1262,` quando o componente estiver com foco.`),ug()(),Ac(1263,`pre`)(1264,`code`),vN(1265,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),ug()(),Ac(1266,`pre`)(1267,`code`),vN(1268,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(1269,`br`),Ac(1270,`h3`),vN(1271,`Enums`),ug(),Ac(1272,`h4`,4)(1273,`code`,5),vN(1274,`PoDatepickerIsoFormat`),ug()(),Ac(1275,`div`,2)(1276,`p`)(1277,`em`),vN(1278,`Enum`),ug(),vN(1279,` que define o padrão de formatação das datas.`),ug(),Ac(1280,`blockquote`)(1281,`p`),vN(1282,`Caso um formato padrão seja definido, o mesmo não será mais alterado de acordo com o formato de entrada.`),ug()()(),Ac(1283,`h4`,12),vN(1284,`Propriedades`),ug(),Ac(1285,`table`,13)(1286,`tr`,14)(1287,`th`,15),vN(1288,`Nome`),ug(),Ac(1289,`th`,15),vN(1290,`Descrição`),ug()(),Ac(1291,`tr`,16)(1292,`td`,17)(1293,`div`,18)(1294,`span`,19),vN(1295,` Basic`),Kc(1296,`br`),ug()()(),Ac(1297,`td`,23)(1298,`p`),vN(1299,`Padrão `),Ac(1300,`strong`),vN(1301,`E8601DAw`),ug(),vN(1302,` (`),Ac(1303,`em`),vN(1304,`yyyy-mm-dd`),ug(),vN(1305,`).`),ug()()(),Ac(1306,`tr`,16)(1307,`td`,17)(1308,`div`,18)(1309,`span`,19),vN(1310,` Extended`),Kc(1311,`br`),ug()()(),Ac(1312,`td`,23)(1313,`p`),vN(1314,`Padrão `),Ac(1315,`strong`),vN(1316,`E8601DZw`),ug(),vN(1317,` (`),Ac(1318,`em`),vN(1319,`yyyy-mm-ddThh:mm:ss+|-hh:mm`),ug(),vN(1320,`).`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Je=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:11,vars:4,consts:[[`p-title`,`Datepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-datepicker-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-datepicker-basic-view`)(6,`sample-po-datepicker-labs-view`)(7,`sample-po-datepicker-year-view`)(8,`sample-po-datepicker-month-year-view`)(9,`sample-po-datepicker-airfare-view`)(10,`sample-po-datepicker-airfare-reactive-form-view`),ug()()()),r&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,ge,fe,be,xe,Ce,De,we],encapsulation:2,changeDetection:1})}return a})()}];var _e=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[kL.forChild(Je),kL]})}return a})();var Rt=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[Ta,_e]})}return a})();export{Rt as DocPoDatepickerModule};