import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Jt as e_e,Ki as lo,Kr as Un,M as ECe,Mi as gg,Ni as he$1,Nt as Y0e,P as Eu,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,aa as qk,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,ea as p0,ga as w,hr as MY,ki as fm,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ti as Wk,ua as ue,ui as Zl,un as nb,v as $D,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var Ee=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datepicker`,`p-label`,`PO Datepicker`]],template:function(r,i){r&1&&ql(0,`po-datepicker`,0)},dependencies:[Y0e],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Datepicker Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-datepicker-basic/sample-po-datepicker-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-datepicker-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,qe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ee],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{helperText;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:`Basic`,value:$D.Basic},{label:`Extended`,value:$D.Extended}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-labs`]],standalone:!1,decls:22,vars:47,consts:[[`f`,`ngForm`],[`name`,`datepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-max-date`,`p-error-pattern`,`p-format`,`p-help`,`p-iso-format`,`p-label`,`p-locale`,`p-min-date`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-size`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`,`p-format`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-format`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`format`,`p-columns`,`4`,`p-label`,`Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`isoFormat`,`p-columns`,`4`,`p-label`,`Iso Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Vx();Ml(0,`po-datepicker`,1),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.datepicker,l)||(i.datepicker=l),Jy(l)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3)(4,`po-info`,4),lg(),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`po-input`,5),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.label,l)||(i.label=l),Jy(l)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.help,l)||(i.help=l),Jy(l)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.helperText,l)||(i.helperText=l),Jy(l)}),lg(),f0(),Ml(11,`po-input`,8),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.placeholder,l)||(i.placeholder=l),Jy(l)}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.errorPattern,l)||(i.errorPattern=l),Jy(l)}),lg(),f0(),Ml(13,`po-datepicker`,10),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.minDate,l)||(i.minDate=l),Jy(l)}),lg(),f0(),Ml(14,`po-datepicker`,11),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.maxDate,l)||(i.maxDate=l),Jy(l)}),lg(),f0(),Ml(15,`po-checkbox-group`,12),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.properties,l)||(i.properties=l),Jy(l)}),lg(),f0(),Ml(16,`po-radio-group`,13),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.locale,l)||(i.locale=l),Jy(l)}),lg(),f0(),Ml(17,`po-radio-group`,14),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.format,l)||(i.format=l),Jy(l)}),lg(),f0(),Ml(18,`po-radio-group`,15),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.isoFormat,l)||(i.isoFormat=l),Jy(l)}),lg(),f0(),Ml(19,`po-radio-group`,16),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.size,l)||(i.size=l),Jy(l)}),lg(),f0(),Ml(20,`div`,2)(21,`po-button`,17),ht(`p-click`,function(){return i.restore()}),lg()()()}r&2&&(Tw(`ngModel`,i.datepicker),cw(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-max-date`,i.maxDate)(`p-error-pattern`,i.errorPattern)(`p-format`,i.format)(`p-help`,i.help)(`p-iso-format`,i.isoFormat)(`p-label`,i.label)(`p-locale`,i.locale)(`p-min-date`,i.minDate)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`)),p0(),Up(3),cw(`p-value`,i.datepicker),Up(),cw(`p-value`,i.event),Up(4),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.helperText),p0(),Up(),Tw(`ngModel`,i.placeholder),p0(),Up(),Tw(`ngModel`,i.errorPattern),p0(),Up(),Tw(`ngModel`,i.minDate),cw(`p-max-date`,i.maxDate)(`p-format`,i.format),p0(),Up(),Tw(`ngModel`,i.maxDate),cw(`p-format`,i.format)(`p-min-date`,i.minDate),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.locale),cw(`p-options`,i.localeOptions),p0(),Up(),Tw(`ngModel`,i.format),cw(`p-options`,i.formatOptions),p0(),Up(),Tw(`ngModel`,i.isoFormat),cw(`p-options`,i.isoFormatOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,Y0e,lU,q0e,kbe],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a});var Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Datepicker Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-datepicker-labs/sample-po-datepicker-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-datepicker
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-datepicker-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Le,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,he],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{selectedYear=new Date(`2026-04-30`).getFullYear();event;changeEvent(m){this.event=m}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-year`]],standalone:!1,decls:5,vars:3,consts:[[`name`,`yearPicker`,`p-label`,`Year Picker`,`p-placeholder`,`Select a year`,`p-mode`,`year`,3,`ngModelChange`,`p-change`,`ngModel`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`]],template:function(r,i){r&1&&(Ml(0,`po-datepicker`,0),Mw(`ngModelChange`,function(c){return yN(i.selectedYear,c)||(i.selectedYear=c),c}),ht(`p-change`,function(c){return i.changeEvent(c)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,1),ql(3,`po-info`,2)(4,`po-info`,3),lg()),r&2&&(Tw(`ngModel`,i.selectedYear),p0(),Up(3),cw(`p-value`,i.selectedYear),Up(),cw(`p-value`,i.event))},dependencies:[wY,Vk,nb,Y0e,kbe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-year-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Datepicker Year`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-datepicker-year/sample-po-datepicker-year.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-datepicker
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-datepicker-year/sample-po-datepicker-year.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-datepicker-year`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ne,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,fe],encapsulation:2,changeDetection:1})}return a})();var ve=(()=>{class a{selectedMonthYear=new Date(`2026-12-02`);event;changeEvent(m){this.event=m}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-month-year`]],standalone:!1,decls:5,vars:3,consts:[[`name`,`monthYearPicker`,`p-label`,`Month/Year Picker`,`p-placeholder`,`Select month and year`,`p-mode`,`month-year`,3,`ngModelChange`,`p-change`,`ngModel`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`]],template:function(r,i){r&1&&(Ml(0,`po-datepicker`,0),Mw(`ngModelChange`,function(c){return yN(i.selectedMonthYear,c)||(i.selectedMonthYear=c),c}),ht(`p-change`,function(c){return i.changeEvent(c)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,1),ql(3,`po-info`,2)(4,`po-info`,3),lg()),r&2&&(Tw(`ngModel`,i.selectedMonthYear),p0(),Up(3),cw(`p-value`,i.selectedMonthYear),Up(),cw(`p-value`,i.event))},dependencies:[wY,Vk,nb,Y0e,kbe],encapsulation:2,changeDetection:1})}return a})();var Ie=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-month-year-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Datepicker MonthYear`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-datepicker
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-datepicker-month-year`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ie,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ve],encapsulation:2,changeDetection:1})}return a})();var je=[`formAirfare`];var ye=(()=>{class a{poDialog=f(e_e);poNotification=f(Eu);formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass=`Economy`;accompanyNumber=[{value:0,label:`0`},{value:1,label:`1`},{value:2,label:`2`},{value:3,label:`3`},{value:4,label:`4`},{value:5,label:`5`},{value:6,label:`6`},{value:7,label:`7`},{value:8,label:`8`}];ticketClassOptions=[{value:`Economy`,label:`Economy`},{value:`Premium`,label:`Premium`},{value:`Business`,label:`Business`},{value:`First`,label:`First`}];apply(){let m=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:`Confirm`,message:m,confirm:()=>{this.poNotification.success(`Booking Confirmed`),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:`Economy`})},cancel:()=>{this.poNotification.warning(`Booking Canceled`)}})}getFormatedDate(m){return m&&m.slice(0,10)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-airfare`]],viewQuery:function(r,i){if(r&1&&Zl(je,7),r&2){let s;lo(s=uo())&&(i.formAirfare=s.first)}},standalone:!1,decls:13,vars:11,consts:[[`formAirfare`,`ngForm`],[1,`po-row`],[`name`,`startDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date start`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`endDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date end`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`origin`,`p-placeholder`,`Flight origin`,`p-label`,`Origin`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-placeholder`,`Flight destination`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`clas`,`po-row`],[`name`,`ticketClass`,`p-label`,`Class`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompany`,`p-label`,`Accompany`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`applyButton`,`p-label`,`Apply`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=Vx();Ml(0,`form`,null,0)(2,`div`,1)(3,`po-datepicker`,2),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.startDate,l)||(i.startDate=l),Jy(l)}),lg(),f0(),Ml(4,`po-datepicker`,3),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.endDate,l)||(i.endDate=l),Jy(l)}),lg(),f0(),lg(),Ml(5,`div`,1)(6,`po-input`,4),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.origin,l)||(i.origin=l),Jy(l)}),lg(),f0(),Ml(7,`po-input`,5),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.destination,l)||(i.destination=l),Jy(l)}),lg(),f0(),lg(),Ml(8,`div`,6)(9,`po-select`,7),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.ticketClass,l)||(i.ticketClass=l),Jy(l)}),lg(),f0(),Ml(10,`po-select`,8),Mw(`ngModelChange`,function(l){return Qy(s),yN(i.accompany,l)||(i.accompany=l),Jy(l)}),lg(),f0(),lg(),Ml(11,`div`,1)(12,`po-button`,9),ht(`p-click`,function(){return i.apply()}),lg()()()}if(r&2){let s=Yx(1);Up(3),Tw(`ngModel`,i.startDate),cw(`p-max-date`,i.endDate),p0(),Up(),Tw(`ngModel`,i.endDate),cw(`p-min-date`,i.startDate),p0(),Up(2),Tw(`ngModel`,i.origin),p0(),Up(),Tw(`ngModel`,i.destination),p0(),Up(2),Tw(`ngModel`,i.ticketClass),cw(`p-options`,i.ticketClassOptions),p0(),Up(),Tw(`ngModel`,i.accompany),cw(`p-options`,i.accompanyNumber),p0(),Up(2),cw(`p-disabled`,s.invalid)}},dependencies:[IY,wY,CY,Vk,kk,Zt,Y0e,lU,Tbe],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-airfare-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Datepicker - Airfare`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form #formAirfare="ngForm">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-datepicker-airfare`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,He,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ye],encapsulation:2,changeDetection:1})}return a})();var ke=(()=>{class a{formBuilder=f(MY);poDialog=f(e_e);poNotification=f(Eu);formAirfare;accompanyNumber=[{value:0,label:`0`},{value:1,label:`1`},{value:2,label:`2`},{value:3,label:`3`},{value:4,label:`4`},{value:5,label:`5`},{value:6,label:`6`},{value:7,label:`7`},{value:8,label:`8`}];ticketClassOptions=[{value:`Economy`,label:`Economy`},{value:`Premium`,label:`Premium`},{value:`Business`,label:`Business`},{value:`First`,label:`First`}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,fm.required],destination:[``,fm.required],endDate:[new Date,fm.required],origin:[``,fm.required],startDate:[new Date,fm.required],ticketClass:[`Economy`,fm.required]})}apply(m){let{accompany:r,destination:i,endDate:s,origin:c,ticketClass:l,startDate:Me}=m.value,Te=`Would you like to confirm the ticket from ${c} to ${i} with departure date at
    ${this.getFormatedDate(Me)} and return at ${this.getFormatedDate(s)} with ${r} companions in
    ${l} class?`;this.poDialog.confirm({title:`Confirm`,message:Te,confirm:()=>{this.poNotification.success(`Booking Confirmed`),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:`Economy`})},cancel:()=>{this.poNotification.warning(`Booking Canceled`)}})}getFormatedDate(m){return m&&m.slice(0,10)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-airfare-reactive-form`]],standalone:!1,decls:12,vars:6,consts:[[3,`formGroup`],[1,`po-row`],[`formControlName`,`startDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date start`,1,`po-md-6`,3,`p-max-date`],[`formControlName`,`endDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date end`,1,`po-md-6`,3,`p-min-date`],[`formControlName`,`origin`,`p-placeholder`,`Flight origin`,`p-label`,`Origin`,1,`po-md-6`],[`formControlName`,`destination`,`p-label`,`Destination`,`p-placeholder`,`Flight destination`,1,`po-md-6`],[`clas`,`po-row`],[`formControlName`,`ticketClass`,`p-label`,`Class`,1,`po-md-6`,3,`p-options`],[`formControlName`,`accompany`,`p-label`,`Accompany`,1,`po-md-6`,3,`p-options`],[`name`,`applyButton`,`p-label`,`Apply`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){r&1&&(Ml(0,`form`,0)(1,`div`,1),ql(2,`po-datepicker`,2),f0(),ql(3,`po-datepicker`,3),f0(),lg(),Ml(4,`div`,1),ql(5,`po-input`,4),f0(),ql(6,`po-input`,5),f0(),lg(),Ml(7,`div`,6),ql(8,`po-select`,7),f0(),ql(9,`po-select`,8),f0(),lg(),Ml(10,`div`,1)(11,`po-button`,9),ht(`p-click`,function(){return i.apply(i.formAirfare)}),lg()()()),r&2&&(cw(`formGroup`,i.formAirfare),Up(2),cw(`p-max-date`,i.formAirfare.get(`endDate`).value),p0(),Up(),cw(`p-min-date`,i.formAirfare.get(`startDate`).value),p0(),Up(2),p0(),Up(),p0(),Up(2),cw(`p-options`,i.ticketClassOptions),p0(),Up(),cw(`p-options`,i.accompanyNumber),p0(),Up(2),cw(`p-disabled`,i.formAirfare.invalid))},dependencies:[IY,wY,CY,qk,Wk,Zt,Y0e,lU,Tbe],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a});var De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-airfare-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Datepicker - Airfare Reactive Form`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form [formGroup]="formAirfare">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-datepicker-airfare-reactive-form`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Qe,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ke],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-doc`]],standalone:!1,decls:1324,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3schools.com/js/js_dates.asp`],[`href`,`https://www.w3schools.com/jsref/jsref_setfullyear.asp`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`/documentation/po-i18n`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoDatepickerComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`O `),Ml(24,`code`),mN(25,`po-datepicker`),lg(),mN(26,` é um componente específico para manipulação de datas permitindo a digitação e / ou seleção.`),lg(),Ml(27,`p`),mN(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),Ml(29,`code`),mN(30,`p-format`),lg(),mN(31,`).`),lg(),Ml(32,`p`),mN(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Ml(34,`code`),mN(35,`p-locale`),lg(),mN(36,`.`),lg(),Ml(37,`p`),mN(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),lg(),Ml(39,`blockquote`)(40,`p`),mN(41,`Por padrão, o formato de saída do `),Ml(42,`em`),mN(43,`model`),lg(),mN(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),Ml(45,`code`),mN(46,`p-iso-format`),lg(),mN(47,` provê esse controle independentemente do formato de entrada. Veja abaixo os formatos disponíveis:`),lg()(),Ml(48,`ul`)(49,`li`)(50,`p`),mN(51,`Formato de entrada e saída (E8601DZw) - `),Ml(52,`code`),mN(53,`'2017-11-28T00:00:00-02:00'`),lg(),mN(54,`;`),lg()(),Ml(55,`li`)(56,`p`),mN(57,`Formato de entrada e saída (E8601DAw) - `),Ml(58,`code`),mN(59,`'2017-11-28'`),lg(),mN(60,`;`),lg()(),Ml(61,`li`)(62,`p`),mN(63,`Formato de entrada (Date) - `),Ml(64,`code`),mN(65,`new Date(2017, 10, 28)`),lg(),mN(66,` e saída (E8601DAw) - `),Ml(67,`code`),mN(68,`'2017-11-28'`),lg(),mN(69,`;`),lg()()(),Ml(70,`p`)(71,`strong`),mN(72,`Importante:`),lg()(),Ml(73,`ul`)(74,`li`),mN(75,`Para utilizar datas com ano inferior a 100, verificar o comportamento do `),Ml(76,`a`,6)(77,`code`),mN(78,`new Date`),lg()(),mN(79,`
e utilizar o m\xE9todo `),Ml(80,`a`,7)(81,`code`),mN(82,`setFullYear`),lg()(),mN(83,`.`),lg(),Ml(84,`li`),mN(85,`Caso a data esteja inválida, o `),Ml(86,`code`),mN(87,`model`),lg(),mN(88,` receberá `),Ml(89,`strong`),mN(90,`'Data inválida'`),lg(),mN(91,`.`),lg(),Ml(92,`li`),mN(93,`Caso o `),Ml(94,`code`),mN(95,`input`),lg(),mN(96,` esteja passando um `),Ml(97,`code`),mN(98,`[(ngModel)]`),lg(),mN(99,`, mas não tenha um `),Ml(100,`code`),mN(101,`name`),lg(),mN(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Ml(103,`code`),mN(104,`[ngModelOptions]="{standalone: true}"`),lg(),mN(105,`).`),lg()(),Ml(106,`p`),mN(107,`Exemplo:`),lg(),Ml(108,`pre`)(109,`code`),mN(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),lg()(),Ml(111,`blockquote`)(112,`p`),mN(113,`Não esqueça de importar o `),Ml(114,`code`),mN(115,`FormsModule`),lg(),mN(116,` em seu módulo, tal como para utilizar o `),Ml(117,`code`),mN(118,`input default`),lg(),mN(119,`.`),lg()(),Ml(120,`h4`),mN(121,`Tokens customizáveis`),lg(),Ml(122,`p`),mN(123,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),ql(124,`br`),mN(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ml(126,`code`),mN(127,`.po-input`),lg()(),Ml(128,`blockquote`)(129,`p`),mN(130,`Para maiores informações, acesse o guia `),Ml(131,`a`,8),mN(132,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(133,`.`),lg()(),Ml(134,`table`)(135,`thead`)(136,`tr`)(137,`th`),mN(138,`Propriedade`),lg(),Ml(139,`th`),mN(140,`Descrição`),lg(),Ml(141,`th`),mN(142,`Valor Padrão`),lg()()(),Ml(143,`tbody`)(144,`tr`)(145,`td`)(146,`strong`),mN(147,`Default Values`),lg()(),ql(148,`td`)(149,`td`),lg(),Ml(150,`tr`)(151,`td`)(152,`code`),mN(153,`--font-family`),lg()(),Ml(154,`td`),mN(155,`Família tipográfica usada`),lg(),Ml(156,`td`)(157,`code`),mN(158,`var(--font-family-theme)`),lg()()(),Ml(159,`tr`)(160,`td`)(161,`code`),mN(162,`--font-size`),lg()(),Ml(163,`td`),mN(164,`Tamanho da fonte`),lg(),Ml(165,`td`)(166,`code`),mN(167,`var(--font-size-default)`),lg()()(),Ml(168,`tr`)(169,`td`)(170,`code`),mN(171,`--text-color-placeholder`),lg(),mN(172,` \xA0`),lg(),Ml(173,`td`),mN(174,`Cor principal do texto do placeholder`),lg(),Ml(175,`td`)(176,`code`),mN(177,`var(--color-neutral-light-30)`),lg()()(),Ml(178,`tr`)(179,`td`)(180,`code`),mN(181,`--color`),lg()(),Ml(182,`td`),mN(183,`Cor principal do datepicker`),lg(),Ml(184,`td`)(185,`code`),mN(186,`var(--color-neutral-dark-70)`),lg()()(),Ml(187,`tr`)(188,`td`)(189,`code`),mN(190,`--background`),lg()(),Ml(191,`td`),mN(192,`Cor de background`),lg(),Ml(193,`td`)(194,`code`),mN(195,`var(--color-neutral-light-05)`),lg()()(),Ml(196,`tr`)(197,`td`)(198,`code`),mN(199,`--padding`),lg()(),Ml(200,`td`),mN(201,`Preenchimento`),lg(),Ml(202,`td`)(203,`code`),mN(204,`0 0.5rem`),lg()()(),Ml(205,`tr`)(206,`td`)(207,`code`),mN(208,`--text-color`),lg()(),Ml(209,`td`),mN(210,`Cor do texto`),lg(),Ml(211,`td`)(212,`code`),mN(213,`var(--color-neutral-dark-90)`),lg()()(),Ml(214,`tr`)(215,`td`)(216,`code`),mN(217,`--field-container-title-justify`),lg()(),Ml(218,`td`),mN(219,`Alinhamento horizontal do título (`),Ml(220,`code`),mN(221,`justify-content`),lg(),mN(222,`)`),lg(),Ml(223,`td`)(224,`code`),mN(225,`space-between`),lg()()(),Ml(226,`tr`)(227,`td`)(228,`code`),mN(229,`--field-container-title-flex`),lg()(),Ml(230,`td`),mN(231,`Flex do título (`),Ml(232,`code`),mN(233,`flex`),lg(),mN(234,`)`),lg(),Ml(235,`td`)(236,`code`),mN(237,`1 auto`),lg()()(),Ml(238,`tr`)(239,`td`)(240,`strong`),mN(241,`Hover`),lg()(),ql(242,`td`)(243,`td`),lg(),Ml(244,`tr`)(245,`td`)(246,`code`),mN(247,`--color-hover`),lg()(),Ml(248,`td`),mN(249,`Cor principal no estado hover`),lg(),Ml(250,`td`)(251,`code`),mN(252,`var(--color-brand-01-dark)`),lg()()(),Ml(253,`tr`)(254,`td`)(255,`code`),mN(256,`--background-hover`),lg()(),Ml(257,`td`),mN(258,`Cor de background no estado hover`),lg(),Ml(259,`td`)(260,`code`),mN(261,`var(--color-brand-01-lightest)`),lg()()(),Ml(262,`tr`)(263,`td`)(264,`strong`),mN(265,`Focused`),lg()(),ql(266,`td`)(267,`td`),lg(),Ml(268,`tr`)(269,`td`)(270,`code`),mN(271,`--color-focused`),lg()(),Ml(272,`td`),mN(273,`Cor principal no estado de focus`),lg(),Ml(274,`td`)(275,`code`),mN(276,`var(--color-action-default)`),lg()()(),Ml(277,`tr`)(278,`td`)(279,`code`),mN(280,`--outline-color-focused`),lg()(),Ml(281,`td`),mN(282,`Cor do outline do estado de focus`),lg(),Ml(283,`td`)(284,`code`),mN(285,`var(--color-action-focus)`),lg()()(),Ml(286,`tr`)(287,`td`)(288,`strong`),mN(289,`Disabled`),lg()(),ql(290,`td`)(291,`td`),lg(),Ml(292,`tr`)(293,`td`)(294,`code`),mN(295,`--color-disabled`),lg()(),Ml(296,`td`),mN(297,`Cor principal no estado disabled`),lg(),Ml(298,`td`)(299,`code`),mN(300,`var(--color-neutral-light-30)`),lg()()(),Ml(301,`tr`)(302,`td`)(303,`code`),mN(304,`--background-disabled`),lg()(),Ml(305,`td`),mN(306,`Cor de background no estado disabled \xA0`),lg(),Ml(307,`td`)(308,`code`),mN(309,`var(--color-neutral-light-20)`),lg()()(),Ml(310,`tr`)(311,`td`)(312,`code`),mN(313,`--text-color-disabled`),lg()(),Ml(314,`td`),mN(315,`Cor do texto no estado disabled`),lg(),Ml(316,`td`)(317,`code`),mN(318,`var(--color-neutral-dark-70)`),lg()()()()()(),Ml(319,`div`,9)(320,`h4`,10),mN(321,`Seletor`),lg(),Ml(322,`pre`,11),mN(323,`<po-datepicker
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
`),lg()(),Ml(324,`h4`,12),mN(325,`Propriedades`),lg(),Ml(326,`table`,13)(327,`tr`,14)(328,`th`,15),mN(329,`Nome`),lg(),Ml(330,`th`,15),mN(331,`Tipo`),lg(),Ml(332,`th`,15),mN(333,`Padrão`),lg(),Ml(334,`th`,15),mN(335,`Descrição`),lg()(),Ml(336,`tr`,16)(337,`td`,17)(338,`div`,18)(339,`span`,19),mN(340,`p-locale`),ql(341,`br`),lg()()(),Ml(342,`td`,20)(343,`code`,21),mN(344,`string`),lg()(),Ml(345,`td`,22),mN(346,`-`),lg(),Ml(347,`td`,23)(348,`em`)(349,`strong`),mN(350,`(opcional)`),lg()(),Ml(351,`p`),mN(352,`Idioma do Datepicker.`),lg(),Ml(353,`blockquote`)(354,`p`),mN(355,`O locale padrão sera recuperado com base no `),Ml(356,`a`,24)(357,`code`),mN(358,`PoI18nService`),lg()(),mN(359,` ou `),Ml(360,`em`),mN(361,`browser`),lg(),mN(362,`.`),lg()()()(),Ml(363,`tr`,16)(364,`td`,17)(365,`div`,25)(366,`span`,26),mN(367,` (p-additional-help)`),ql(368,`br`),lg()(),Ml(369,`div`,27),mN(370,`Deprecated`),lg()(),Ml(371,`td`,20)(372,`code`,28),mN(373,`EventEmitter`),lg()(),Ml(374,`td`,22),mN(375,`-`),lg(),Ml(376,`td`,23)(377,`em`)(378,`strong`),mN(379,`(opcional)`),lg()(),Ml(380,`p`),mN(381,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(382,`blockquote`)(383,`p`),mN(384,`Essa propriedade está `),Ml(385,`strong`),mN(386,`depreciada`),lg(),mN(387,` e será removida na versão `),Ml(388,`code`),mN(389,`23.x.x`),lg(),mN(390,`. Recomendamos utilizar a propriedade `),Ml(391,`code`),mN(392,`p-helper`),lg(),mN(393,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(394,`tr`,16)(395,`td`,17)(396,`div`,18)(397,`span`,19),mN(398,` p-additional-help-tooltip`),ql(399,`br`),lg()(),Ml(400,`div`,27),mN(401,`Deprecated`),lg()(),Ml(402,`td`,20)(403,`code`,21),mN(404,`string`),lg()(),Ml(405,`td`,22),mN(406,`-`),lg(),Ml(407,`td`,23)(408,`em`)(409,`strong`),mN(410,`(opcional)`),lg()(),Ml(411,`p`),mN(412,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(413,`code`),mN(414,`po-helper`),lg(),mN(415,`.
`),Ml(416,`strong`),mN(417,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(418,`blockquote`)(419,`p`),mN(420,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),lg()(),Ml(421,`blockquote`)(422,`p`),mN(423,`Essa propriedade está `),Ml(424,`strong`),mN(425,`depreciada`),lg(),mN(426,` e será removida na versão `),Ml(427,`code`),mN(428,`23.x.x`),lg(),mN(429,`. Recomendamos utilizar a propriedade `),Ml(430,`code`),mN(431,`p-helper`),lg(),mN(432,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(433,`tr`,16)(434,`td`,17)(435,`div`,18)(436,`span`,19),mN(437,` p-append-in-body`),ql(438,`br`),lg()()(),Ml(439,`td`,20)(440,`code`,29),mN(441,`boolean`),lg()(),Ml(442,`td`,22)(443,`p`)(444,`code`),mN(445,`false`),lg()()(),Ml(446,`td`,23)(447,`em`)(448,`strong`),mN(449,`(opcional)`),lg()(),Ml(450,`p`),mN(451,`Define que o `),Ml(452,`code`),mN(453,`calendar`),lg(),mN(454,` e/ou tooltip (`),Ml(455,`code`),mN(456,`p-additional-help-tooltip`),lg(),mN(457,` e/ou `),Ml(458,`code`),mN(459,`p-error-limit`),lg(),mN(460,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),lg(),Ml(461,`blockquote`)(462,`p`),mN(463,`Quando utilizado com `),Ml(464,`code`),mN(465,`p-helper`),lg(),mN(466,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(467,`tr`,16)(468,`td`,17)(469,`div`,18)(470,`span`,19),mN(471,` p-auto-focus`),ql(472,`br`),lg()()(),Ml(473,`td`,20)(474,`code`,29),mN(475,`boolean`),lg()(),Ml(476,`td`,22)(477,`p`)(478,`code`),mN(479,`false`),lg()()(),Ml(480,`td`,23)(481,`em`)(482,`strong`),mN(483,`(opcional)`),lg()(),Ml(484,`p`),mN(485,`Aplica foco no elemento ao ser iniciado.`),lg(),Ml(486,`blockquote`)(487,`p`),mN(488,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),lg()()()(),Ml(489,`tr`,16)(490,`td`,17)(491,`div`,25)(492,`span`,26),mN(493,` (p-change-model)`),ql(494,`br`),lg()()(),Ml(495,`td`,20)(496,`code`,28),mN(497,`EventEmitter`),lg()(),Ml(498,`td`,22),mN(499,`-`),lg(),Ml(500,`td`,23)(501,`em`)(502,`strong`),mN(503,`(opcional)`),lg()(),Ml(504,`p`),mN(505,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ml(506,`code`),mN(507,`setValue`),lg(),mN(508,`, `),Ml(509,`code`),mN(510,`patchValue`),lg(),mN(511,`, carregamento assíncrono).`),lg(),Ml(512,`p`),mN(513,`Diferentemente do `),Ml(514,`code`),mN(515,`p-change`),lg(),mN(516,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ml(517,`code`),mN(518,`p-change-model`),lg(),mN(519,` cobre todos os cenários de alteração de valor.`),lg(),Ml(520,`p`),mN(521,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),lg()()(),Ml(522,`tr`,16)(523,`td`,17)(524,`div`,18)(525,`span`,19),mN(526,`p-clean`),ql(527,`br`),lg()()(),Ml(528,`td`,20)(529,`code`,29),mN(530,`boolean`),lg()(),Ml(531,`td`,22),mN(532,`-`),lg(),Ml(533,`td`,23)(534,`em`)(535,`strong`),mN(536,`(opcional)`),lg()(),Ml(537,`p`),mN(538,`Habilita ação para limpar o campo.`),lg()()(),Ml(539,`tr`,16)(540,`td`,17)(541,`div`,18)(542,`span`,19),mN(543,` p-compact-label`),ql(544,`br`),lg()()(),Ml(545,`td`,20)(546,`code`,29),mN(547,`boolean`),lg()(),Ml(548,`td`,22)(549,`p`)(550,`code`),mN(551,`false`),lg()()(),Ml(552,`td`,23)(553,`em`)(554,`strong`),mN(555,`(opcional)`),lg()(),Ml(556,`p`),mN(557,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(558,`p`),mN(559,`Quando habilitado (`),Ml(560,`code`),mN(561,`true`),lg(),mN(562,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(563,`ul`)(564,`li`)(565,`code`),mN(566,`po-label`),lg()(),Ml(567,`li`)(568,`code`),mN(569,`p-requirement (showRequired)`),lg()(),Ml(570,`li`)(571,`code`),mN(572,`po-helper`),lg()()(),Ml(573,`p`),mN(574,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(575,`p`),mN(576,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(577,`ul`)(578,`li`)(579,`code`),mN(580,`--field-container-title-justify`),lg()(),Ml(581,`li`)(582,`code`),mN(583,`--field-container-title-flex`),lg()()(),Ml(584,`p`),mN(585,`Exemplo:`),lg(),Ml(586,`pre`)(587,`code`),mN(588,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(589,`p`),mN(590,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(591,`tr`,16)(592,`td`,17)(593,`div`,18)(594,`span`,19),mN(595,`p-disabled`),ql(596,`br`),lg()()(),Ml(597,`td`,20)(598,`code`,29),mN(599,`boolean`),lg()(),Ml(600,`td`,22),mN(601,`-`),lg(),Ml(602,`td`,23)(603,`em`)(604,`strong`),mN(605,`(opcional)`),lg()(),Ml(606,`p`),mN(607,`Desabilita o campo.`),lg()()(),Ml(608,`tr`,16)(609,`td`,17)(610,`div`,18)(611,`span`,19),mN(612,` p-error-async`),ql(613,`br`),lg()()(),Ml(614,`td`,20)(615,`code`,30),mN(616,`(value) => Observable<boolean>`),lg()(),Ml(617,`td`,22),mN(618,`-`),lg(),Ml(619,`td`,23)(620,`em`)(621,`strong`),mN(622,`(opcional)`),lg()(),Ml(623,`p`),mN(624,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ml(625,`code`),mN(626,`change`),lg(),mN(627,`.`),lg()()(),Ml(628,`tr`,16)(629,`td`,17)(630,`div`,18)(631,`span`,19),mN(632,` p-error-limit`),ql(633,`br`),lg()()(),Ml(634,`td`,20)(635,`code`,29),mN(636,`boolean`),lg()(),Ml(637,`td`,22)(638,`p`)(639,`code`),mN(640,`false`),lg()()(),Ml(641,`td`,23)(642,`em`)(643,`strong`),mN(644,`(opcional)`),lg()(),Ml(645,`p`),mN(646,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg(),Ml(647,`blockquote`)(648,`p`),mN(649,`Caso essa propriedade seja definida como `),Ml(650,`code`),mN(651,`true`),lg(),mN(652,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),lg()()()(),Ml(653,`tr`,16)(654,`td`,17)(655,`div`,18)(656,`span`,19),mN(657,` p-error-pattern`),ql(658,`br`),lg()()(),Ml(659,`td`,20)(660,`code`,21),mN(661,`string`),lg()(),Ml(662,`td`,22),mN(663,`-`),lg(),Ml(664,`td`,23)(665,`em`)(666,`strong`),mN(667,`(opcional)`),lg()(),Ml(668,`p`),mN(669,`Mensagem apresentada quando a data for inválida ou fora do período.`),lg(),Ml(670,`blockquote`)(671,`p`),mN(672,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Ml(673,`code`),mN(674,`p-required-field-error-message`),lg(),mN(675,` em conjunto.`),lg()()()(),Ml(676,`tr`,16)(677,`td`,17)(678,`div`,18)(679,`span`,19),mN(680,` p-format`),ql(681,`br`),lg()()(),Ml(682,`td`,20)(683,`code`,21),mN(684,`string`),lg()(),Ml(685,`td`,22)(686,`p`)(687,`code`),mN(688,`dd/mm/yyyy`),lg()()(),Ml(689,`td`,23)(690,`em`)(691,`strong`),mN(692,`(opcional)`),lg()(),Ml(693,`p`),mN(694,`Formato de exibição da data.`),lg(),Ml(695,`p`),mN(696,`Valores válidos:`),lg(),Ml(697,`ul`)(698,`li`)(699,`code`),mN(700,`dd/mm/yyyy`),lg()(),Ml(701,`li`)(702,`code`),mN(703,`mm/dd/yyyy`),lg()(),Ml(704,`li`)(705,`code`),mN(706,`yyyy/mm/dd`),lg()()(),Ml(707,`p`),mN(708,`Propriedade incompatível com as variações month-year e year.`),lg()()(),Ml(709,`tr`,16)(710,`td`,17)(711,`div`,18)(712,`span`,19),mN(713,` p-help`),ql(714,`br`),lg()()(),Ml(715,`td`,20)(716,`code`,21),mN(717,`string`),lg()(),Ml(718,`td`,22),mN(719,`-`),lg(),Ml(720,`td`,23)(721,`em`)(722,`strong`),mN(723,`(opcional)`),lg()(),Ml(724,`p`),mN(725,`Texto de apoio do campo.`),lg()()(),Ml(726,`tr`,16)(727,`td`,17)(728,`div`,18)(729,`span`,19),mN(730,` p-iso-format`),ql(731,`br`),lg()()(),Ml(732,`td`,20)(733,`code`,31),mN(734,`PoDatepickerIsoFormat`),lg()(),Ml(735,`td`,22),mN(736,`-`),lg(),Ml(737,`td`,23)(738,`em`)(739,`strong`),mN(740,`(opcional)`),lg()(),Ml(741,`p`),mN(742,`Padrão de formatação para saída do `),Ml(743,`em`),mN(744,`model`),lg(),mN(745,`, independentemente do formato de entrada.`),lg(),Ml(746,`blockquote`)(747,`p`),mN(748,`Veja os valores válidos no `),Ml(749,`em`),mN(750,`enum`),lg(),Ml(751,`code`),mN(752,`PoDatepickerIsoFormat`),lg(),mN(753,`.`),lg()(),Ml(754,`p`),mN(755,`Propriedade incompatível com as variações month-year e year.`),lg()()(),Ml(756,`tr`,16)(757,`td`,17)(758,`div`,25)(759,`span`,26),mN(760,` (p-keydown)`),ql(761,`br`),lg()()(),Ml(762,`td`,20)(763,`code`,28),mN(764,`EventEmitter`),lg()(),Ml(765,`td`,22),mN(766,`-`),lg(),Ml(767,`td`,23)(768,`em`)(769,`strong`),mN(770,`(opcional)`),lg()(),Ml(771,`p`),mN(772,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(773,`code`),mN(774,`KeyboardEvent`),lg(),mN(775,` com informações sobre a tecla.`),lg()()(),Ml(776,`tr`,16)(777,`td`,17)(778,`div`,18)(779,`span`,19),mN(780,` p-label`),ql(781,`br`),lg()()(),Ml(782,`td`,20)(783,`code`,21),mN(784,`string`),lg()(),Ml(785,`td`,22),mN(786,`-`),lg(),Ml(787,`td`,23)(788,`em`)(789,`strong`),mN(790,`(opcional)`),lg()(),Ml(791,`p`),mN(792,`Rótulo do campo.`),lg()()(),Ml(793,`tr`,16)(794,`td`,17)(795,`div`,18)(796,`span`,19),mN(797,` p-label-text-wrap`),ql(798,`br`),lg()()(),Ml(799,`td`,20)(800,`code`,29),mN(801,`boolean`),lg()(),Ml(802,`td`,22)(803,`p`)(804,`code`),mN(805,`false`),lg()()(),Ml(806,`td`,23)(807,`em`)(808,`strong`),mN(809,`(opcional)`),lg()(),Ml(810,`p`),mN(811,`Habilita a quebra automática do texto da propriedade `),Ml(812,`code`),mN(813,`p-label`),lg(),mN(814,`. Quando `),Ml(815,`code`),mN(816,`p-label-text-wrap`),lg(),mN(817,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(818,`tr`,16)(819,`td`,17)(820,`div`,18)(821,`span`,19),mN(822,` p-loading`),ql(823,`br`),lg()()(),Ml(824,`td`,20)(825,`code`,29),mN(826,`boolean`),lg()(),Ml(827,`td`,22)(828,`p`)(829,`code`),mN(830,`false`),lg()()(),Ml(831,`td`,23)(832,`em`)(833,`strong`),mN(834,`(opcional)`),lg()(),Ml(835,`p`),mN(836,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),lg()()(),Ml(837,`tr`,16)(838,`td`,17)(839,`div`,18)(840,`span`,19),mN(841,` p-max-date`),ql(842,`br`),lg()()(),Ml(843,`td`,20)(844,`code`,21),mN(845,`string `),lg(),Ml(846,`code`,32),mN(847,` Date`),lg()(),Ml(848,`td`,22),mN(849,`-`),lg(),Ml(850,`td`,23)(851,`em`)(852,`strong`),mN(853,`(opcional)`),lg()(),Ml(854,`p`),mN(855,`Define uma data máxima para o `),Ml(856,`code`),mN(857,`po-datepicker`),lg(),mN(858,`.`),lg()()(),Ml(859,`tr`,16)(860,`td`,17)(861,`div`,18)(862,`span`,19),mN(863,` p-min-date`),ql(864,`br`),lg()()(),Ml(865,`td`,20)(866,`code`,21),mN(867,`string `),lg(),Ml(868,`code`,32),mN(869,` Date`),lg()(),Ml(870,`td`,22),mN(871,`-`),lg(),Ml(872,`td`,23)(873,`em`)(874,`strong`),mN(875,`(opcional)`),lg()(),Ml(876,`p`),mN(877,`Define uma data mínima para o `),Ml(878,`code`),mN(879,`po-datepicker`),lg(),mN(880,`.`),lg()()(),Ml(881,`tr`,16)(882,`td`,17)(883,`div`,18)(884,`span`,19),mN(885,` p-mode`),ql(886,`br`),lg()()(),Ml(887,`td`,20)(888,`code`,33),mN(889,`'month-year' `),lg(),Ml(890,`code`,34),mN(891,` 'year'`),lg()(),Ml(892,`td`,22),mN(893,`-`),lg(),Ml(894,`td`,23)(895,`em`)(896,`strong`),mN(897,`(opcional)`),lg()(),Ml(898,`p`),mN(899,`Define o modo de operação do datepicker.`),lg(),Ml(900,`p`),mN(901,`Permite configurar o componente para seleção de:`),lg(),Ml(902,`ul`)(903,`li`),mN(904,`Mês e ano (`),Ml(905,`code`),mN(906,`month-year`),lg(),mN(907,`);`),lg(),Ml(908,`li`),mN(909,`Apenas ano (`),Ml(910,`code`),mN(911,`year`),lg(),mN(912,`).`),lg()()()(),Ml(913,`tr`,16)(914,`td`,17)(915,`div`,18)(916,`span`,19),mN(917,` p-no-autocomplete`),ql(918,`br`),lg()()(),Ml(919,`td`,20)(920,`code`,29),mN(921,`boolean`),lg()(),Ml(922,`td`,22)(923,`p`)(924,`code`),mN(925,`false`),lg()()(),Ml(926,`td`,23)(927,`em`)(928,`strong`),mN(929,`(opcional)`),lg()(),Ml(930,`p`),mN(931,`Define a propriedade nativa `),Ml(932,`code`),mN(933,`autocomplete`),lg(),mN(934,` do campo como `),Ml(935,`code`),mN(936,`off`),lg(),mN(937,`.`),lg()()(),Ml(938,`tr`,16)(939,`td`,17)(940,`div`,25)(941,`span`,26),mN(942,` (p-blur)`),ql(943,`br`),lg()()(),Ml(944,`td`,20)(945,`code`,28),mN(946,`EventEmitter`),lg()(),Ml(947,`td`,22),mN(948,`-`),lg(),Ml(949,`td`,23)(950,`em`)(951,`strong`),mN(952,`(opcional)`),lg()(),Ml(953,`p`),mN(954,`Evento disparado ao sair do campo.`),lg()()(),Ml(955,`tr`,16)(956,`td`,17)(957,`div`,25)(958,`span`,26),mN(959,` (p-change)`),ql(960,`br`),lg()()(),Ml(961,`td`,20)(962,`code`,28),mN(963,`EventEmitter`),lg()(),Ml(964,`td`,22),mN(965,`-`),lg(),Ml(966,`td`,23)(967,`em`)(968,`strong`),mN(969,`(opcional)`),lg()(),Ml(970,`p`),mN(971,`Evento disparado ao alterar valor do campo.`),lg()()(),Ml(972,`tr`,16)(973,`td`,17)(974,`div`,18)(975,`span`,19),mN(976,` p-optional`),ql(977,`br`),lg()()(),Ml(978,`td`,20)(979,`code`,29),mN(980,`boolean`),lg()(),Ml(981,`td`,22)(982,`p`)(983,`code`),mN(984,`false`),lg()()(),Ml(985,`td`,23)(986,`em`)(987,`strong`),mN(988,`(opcional)`),lg()(),Ml(989,`p`),mN(990,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(991,`blockquote`)(992,`p`),mN(993,`Não será exibida a indicação se:`),lg()(),Ml(994,`ul`)(995,`li`),mN(996,`O campo conter `),Ml(997,`code`),mN(998,`p-required`),lg(),mN(999,`;`),lg(),Ml(1e3,`li`),mN(1001,`Não possuir `),Ml(1002,`code`),mN(1003,`p-help`),lg(),mN(1004,` e/ou `),Ml(1005,`code`),mN(1006,`p-label`),lg(),mN(1007,`.`),lg()()()(),Ml(1008,`tr`,16)(1009,`td`,17)(1010,`div`,18)(1011,`span`,19),mN(1012,` p-placeholder`),ql(1013,`br`),lg()()(),Ml(1014,`td`,20)(1015,`code`,21),mN(1016,`string`),lg()(),Ml(1017,`td`,22),mN(1018,`-`),lg(),Ml(1019,`td`,23)(1020,`em`)(1021,`strong`),mN(1022,`(opcional)`),lg()(),Ml(1023,`p`),mN(1024,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),lg()()(),Ml(1025,`tr`,16)(1026,`td`,17)(1027,`div`,18)(1028,`span`,19),mN(1029,` p-helper`),ql(1030,`br`),lg()()(),Ml(1031,`td`,20)(1032,`code`,35),mN(1033,`PoHelperOptions `),lg(),Ml(1034,`code`,21),mN(1035,` string`),lg()(),Ml(1036,`td`,22),mN(1037,`-`),lg(),Ml(1038,`td`,23)(1039,`em`)(1040,`strong`),mN(1041,`(opcional)`),lg()(),Ml(1042,`p`),mN(1043,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(1044,`code`),mN(1045,`p-label`),lg(),mN(1046,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(1047,`code`),mN(1048,`p-label`),lg(),mN(1049,`.`),lg(),Ml(1050,`blockquote`)(1051,`p`),mN(1052,`Para mais informações acesse: `),Ml(1053,`a`,36),mN(1054,`https://po-ui.io/documentation/po-helper`),lg(),mN(1055,`.`),lg()(),Ml(1056,`blockquote`)(1057,`p`),mN(1058,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(1059,`code`),mN(1060,`p-additional-help-tooltip`),lg(),mN(1061,` e `),Ml(1062,`code`),mN(1063,`p-additional-help`),lg(),mN(1064,`) será ignorado.`),lg()()()(),Ml(1065,`tr`,16)(1066,`td`,17)(1067,`div`,18)(1068,`span`,19),mN(1069,`p-readonly`),ql(1070,`br`),lg()()(),Ml(1071,`td`,20)(1072,`code`,29),mN(1073,`boolean`),lg()(),Ml(1074,`td`,22),mN(1075,`-`),lg(),Ml(1076,`td`,23)(1077,`em`)(1078,`strong`),mN(1079,`(opcional)`),lg()(),Ml(1080,`p`),mN(1081,`Torna o elemento somente leitura.`),lg()()(),Ml(1082,`tr`,16)(1083,`td`,17)(1084,`div`,18)(1085,`span`,19),mN(1086,`p-required`),ql(1087,`br`),lg()()(),Ml(1088,`td`,20)(1089,`code`,29),mN(1090,`boolean`),lg()(),Ml(1091,`td`,22)(1092,`p`)(1093,`code`),mN(1094,`false`),lg()()(),Ml(1095,`td`,23)(1096,`em`)(1097,`strong`),mN(1098,`(opcional)`),lg()(),Ml(1099,`p`),mN(1100,`Define que o campo será obrigatório.`),lg()()(),Ml(1101,`tr`,16)(1102,`td`,17)(1103,`div`,18)(1104,`span`,19),mN(1105,` p-required-field-error-message`),ql(1106,`br`),lg()()(),Ml(1107,`td`,20)(1108,`code`,29),mN(1109,`boolean`),lg()(),Ml(1110,`td`,22)(1111,`p`)(1112,`code`),mN(1113,`false`),lg()()(),Ml(1114,`td`,23)(1115,`em`)(1116,`strong`),mN(1117,`(opcional)`),lg()(),Ml(1118,`p`),mN(1119,`Exibe a mensagem setada na propriedade `),Ml(1120,`code`),mN(1121,`p-error-pattern`),lg(),mN(1122,` se o campo estiver vazio e for requerido.`),lg(),Ml(1123,`blockquote`)(1124,`p`),mN(1125,`Necessário que a propriedade `),Ml(1126,`code`),mN(1127,`p-required`),lg(),mN(1128,` esteja habilitada.`),lg()()()(),Ml(1129,`tr`,16)(1130,`td`,17)(1131,`div`,18)(1132,`span`,19),mN(1133,` p-show-required`),ql(1134,`br`),lg()()(),Ml(1135,`td`,20)(1136,`code`,29),mN(1137,`boolean`),lg()(),Ml(1138,`td`,22),mN(1139,`-`),lg(),Ml(1140,`td`,23)(1141,`p`),mN(1142,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(1143,`blockquote`)(1144,`p`),mN(1145,`Não será exibida a indicação se:`),lg()(),Ml(1146,`ul`)(1147,`li`),mN(1148,`Não possuir `),Ml(1149,`code`),mN(1150,`p-help`),lg(),mN(1151,` e/ou `),Ml(1152,`code`),mN(1153,`p-label`),lg(),mN(1154,`.`),lg()()()(),Ml(1155,`tr`,16)(1156,`td`,17)(1157,`div`,18)(1158,`span`,19),mN(1159,` p-size`),ql(1160,`br`),lg()()(),Ml(1161,`td`,20)(1162,`code`,21),mN(1163,`string`),lg()(),Ml(1164,`td`,22)(1165,`p`)(1166,`code`),mN(1167,`medium`),lg()()(),Ml(1168,`td`,23)(1169,`em`)(1170,`strong`),mN(1171,`(opcional)`),lg()(),Ml(1172,`p`),mN(1173,`Define o tamanho do componente:`),lg(),Ml(1174,`ul`)(1175,`li`)(1176,`code`),mN(1177,`small`),lg(),mN(1178,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(1179,`li`)(1180,`code`),mN(1181,`medium`),lg(),mN(1182,`: altura do input como 44px.`),lg()(),Ml(1183,`blockquote`)(1184,`p`),mN(1185,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(1186,`code`),mN(1187,`medium`),lg(),mN(1188,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(1189,`a`,37),mN(1190,`po-theme`),lg(),mN(1191,`.`),lg()()()(),Ml(1192,`tr`,16)(1193,`td`,17)(1194,`div`,18)(1195,`span`,19),mN(1196,` p-year-range-limit`),ql(1197,`br`),lg()()(),Ml(1198,`td`,20)(1199,`code`,38),mN(1200,`number`),lg()(),Ml(1201,`td`,22)(1202,`p`),mN(1203,`150`),lg()(),Ml(1204,`td`,23)(1205,`em`)(1206,`strong`),mN(1207,`(opcional)`),lg()(),Ml(1208,`p`),mN(1209,`Define o limite de anos exibidos nas variações `),Ml(1210,`code`),mN(1211,`month-year`),lg(),mN(1212,` e `),Ml(1213,`code`),mN(1214,`year`),lg(),mN(1215,`,
considerando a data atual como refer\xEAncia.`),lg(),Ml(1216,`p`),mN(1217,`O valor informado determina o intervalo de anos anterior e posterior
\xE0 data corrente que ser\xE1 disponibilizado para sele\xE7\xE3o.`),lg()()()(),Ml(1218,`h3`,12),mN(1219,`Métodos`),lg(),Ml(1220,`table`,39)(1221,`tr`,16)(1222,`th`,40)(1223,`div`,18)(1224,`h4`)(1225,`span`,19),mN(1226,` focus `),lg()()()()(),Ml(1227,`tr`,23)(1228,`td`,23)(1229,`p`),mN(1230,`Função que atribui foco ao componente.`),lg(),Ml(1231,`p`),mN(1232,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(1233,`pre`)(1234,`code`),mN(1235,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),lg()()()()(),ql(1236,`br`),Ml(1237,`table`,39)(1238,`tr`,16)(1239,`th`,40)(1240,`div`,18)(1241,`h4`)(1242,`span`,19),mN(1243,` showAdditionalHelp `),lg()()()()(),Ml(1244,`tr`,23)(1245,`td`,23)(1246,`p`),mN(1247,`Método que exibe `),Ml(1248,`code`),mN(1249,`p-helper`),lg(),mN(1250,` ou executa a ação definida em `),Ml(1251,`code`),mN(1252,`p-helper{eventOnClick}`),lg(),mN(1253,` ou em `),Ml(1254,`code`),mN(1255,`p-additionalHelp`),lg(),mN(1256,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(1257,`code`),mN(1258,`p-keydown`),lg(),mN(1259,`.`),lg(),Ml(1260,`blockquote`)(1261,`p`),mN(1262,`Exibe ou oculta o conteúdo do componente `),Ml(1263,`code`),mN(1264,`po-helper`),lg(),mN(1265,` quando o componente estiver com foco.`),lg()(),Ml(1266,`pre`)(1267,`code`),mN(1268,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),lg()(),Ml(1269,`pre`)(1270,`code`),mN(1271,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(1272,`br`),Ml(1273,`h3`),mN(1274,`Enums`),lg(),Ml(1275,`h4`,4)(1276,`code`,5),mN(1277,`PoDatepickerIsoFormat`),lg()(),Ml(1278,`div`,2)(1279,`p`)(1280,`em`),mN(1281,`Enum`),lg(),mN(1282,` que define o padrão de formatação das datas.`),lg(),Ml(1283,`blockquote`)(1284,`p`),mN(1285,`Caso um formato padrão seja definido, o mesmo não será mais alterado de acordo com o formato de entrada.`),lg()()(),Ml(1286,`h4`,12),mN(1287,`Propriedades`),lg(),Ml(1288,`table`,13)(1289,`tr`,14)(1290,`th`,15),mN(1291,`Nome`),lg(),Ml(1292,`th`,15),mN(1293,`Descrição`),lg()(),Ml(1294,`tr`,16)(1295,`td`,17)(1296,`div`,18)(1297,`span`,19),mN(1298,` Basic`),ql(1299,`br`),lg()()(),Ml(1300,`td`,23)(1301,`p`),mN(1302,`Padrão `),Ml(1303,`strong`),mN(1304,`E8601DAw`),lg(),mN(1305,` (`),Ml(1306,`em`),mN(1307,`yyyy-mm-dd`),lg(),mN(1308,`).`),lg()()(),Ml(1309,`tr`,16)(1310,`td`,17)(1311,`div`,18)(1312,`span`,19),mN(1313,` Extended`),ql(1314,`br`),lg()()(),Ml(1315,`td`,23)(1316,`p`),mN(1317,`Padrão `),Ml(1318,`strong`),mN(1319,`E8601DZw`),lg(),mN(1320,` (`),Ml(1321,`em`),mN(1322,`yyyy-mm-ddThh:mm:ss+|-hh:mm`),lg(),mN(1323,`).`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Je=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:11,vars:4,consts:[[`p-title`,`Datepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-datepicker-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-datepicker-basic-view`)(6,`sample-po-datepicker-labs-view`)(7,`sample-po-datepicker-year-view`)(8,`sample-po-datepicker-month-year-view`)(9,`sample-po-datepicker-airfare-view`)(10,`sample-po-datepicker-airfare-reactive-form-view`),lg()()()),r&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ge,Se,be,xe,Ce,De,we],encapsulation:2,changeDetection:1})}return a})()}];var _e=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[NL.forChild(Je),NL]})}return a})();var Rt=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[ar,_e]})}return a})();export{Rt as DocPoDatepickerModule};