import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nn as z0e,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,Z as ND,_r as Ky,aa as uN,bt as W0e,ca as um,ei as Yl,fi as ag,gi as bL,ha as ww,jn as ybe,k as Eu,l as ar,la as uo,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,tr as EY,ui as a0,ut as S8e,va as yY,xr as Lk,yi as cN,zi as jk}from"./main-3EWTGE7T.js";var Ee=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datepicker`,`p-label`,`PO Datepicker`]],template:function(r,i){r&1&&Gl(0,`po-datepicker`,0)},dependencies:[z0e],encapsulation:2,changeDetection:1})}return a})();var qe=a=>({"docs-sample-code-tabs":a});var ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Datepicker Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-datepicker-basic/sample-po-datepicker-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-datepicker-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,qe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ee],encapsulation:2,changeDetection:1})}return a})();var he=(()=>{class a{helperText;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:`Basic`,value:ND.Basic},{label:`Extended`,value:ND.Extended}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-labs`]],standalone:!1,decls:22,vars:47,consts:[[`f`,`ngForm`],[`name`,`datepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-max-date`,`p-error-pattern`,`p-format`,`p-help`,`p-iso-format`,`p-label`,`p-locale`,`p-min-date`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-size`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`,`p-format`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-format`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`format`,`p-columns`,`4`,`p-label`,`Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`isoFormat`,`p-columns`,`4`,`p-label`,`Iso Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Ax();Tl(0,`po-datepicker`,1),ww(`ngModelChange`,function(l){return Ky(s),uN(i.datepicker,l)||(i.datepicker=l),Xy(l)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3)(4,`po-info`,4),ag(),Gl(5,`po-divider`),Tl(6,`form`,null,0)(8,`po-input`,5),ww(`ngModelChange`,function(l){return Ky(s),uN(i.label,l)||(i.label=l),Xy(l)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(l){return Ky(s),uN(i.help,l)||(i.help=l),Xy(l)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(l){return Ky(s),uN(i.helperText,l)||(i.helperText=l),Xy(l)}),ag(),a0(),Tl(11,`po-input`,8),ww(`ngModelChange`,function(l){return Ky(s),uN(i.placeholder,l)||(i.placeholder=l),Xy(l)}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(l){return Ky(s),uN(i.errorPattern,l)||(i.errorPattern=l),Xy(l)}),ag(),a0(),Tl(13,`po-datepicker`,10),ww(`ngModelChange`,function(l){return Ky(s),uN(i.minDate,l)||(i.minDate=l),Xy(l)}),ag(),a0(),Tl(14,`po-datepicker`,11),ww(`ngModelChange`,function(l){return Ky(s),uN(i.maxDate,l)||(i.maxDate=l),Xy(l)}),ag(),a0(),Tl(15,`po-checkbox-group`,12),ww(`ngModelChange`,function(l){return Ky(s),uN(i.properties,l)||(i.properties=l),Xy(l)}),ag(),a0(),Tl(16,`po-radio-group`,13),ww(`ngModelChange`,function(l){return Ky(s),uN(i.locale,l)||(i.locale=l),Xy(l)}),ag(),a0(),Tl(17,`po-radio-group`,14),ww(`ngModelChange`,function(l){return Ky(s),uN(i.format,l)||(i.format=l),Xy(l)}),ag(),a0(),Tl(18,`po-radio-group`,15),ww(`ngModelChange`,function(l){return Ky(s),uN(i.isoFormat,l)||(i.isoFormat=l),Xy(l)}),ag(),a0(),Tl(19,`po-radio-group`,16),ww(`ngModelChange`,function(l){return Ky(s),uN(i.size,l)||(i.size=l),Xy(l)}),ag(),a0(),Tl(20,`div`,2)(21,`po-button`,17),ht(`p-click`,function(){return i.restore()}),ag()()()}r&2&&(Ew(`ngModel`,i.datepicker),nw(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-max-date`,i.maxDate)(`p-error-pattern`,i.errorPattern)(`p-format`,i.format)(`p-help`,i.help)(`p-iso-format`,i.isoFormat)(`p-label`,i.label)(`p-locale`,i.locale)(`p-min-date`,i.minDate)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`)),l0(),jp(3),nw(`p-value`,i.datepicker),jp(),nw(`p-value`,i.event),jp(4),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.helperText),l0(),jp(),Ew(`ngModel`,i.placeholder),l0(),jp(),Ew(`ngModel`,i.errorPattern),l0(),jp(),Ew(`ngModel`,i.minDate),nw(`p-max-date`,i.maxDate)(`p-format`,i.format),l0(),jp(),Ew(`ngModel`,i.maxDate),nw(`p-format`,i.format)(`p-min-date`,i.minDate),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.locale),nw(`p-options`,i.localeOptions),l0(),jp(),Ew(`ngModel`,i.format),nw(`p-options`,i.formatOptions),l0(),jp(),Ew(`ngModel`,i.isoFormat),nw(`p-options`,i.isoFormatOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,z0e,iU,L0e,ybe],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a});var Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Datepicker Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-datepicker-labs/sample-po-datepicker-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-datepicker
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-datepicker-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Le,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,he],encapsulation:2,changeDetection:1})}return a})();var fe=(()=>{class a{selectedYear=new Date(`2026-04-30`).getFullYear();event;changeEvent(m){this.event=m}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-year`]],standalone:!1,decls:5,vars:3,consts:[[`name`,`yearPicker`,`p-label`,`Year Picker`,`p-placeholder`,`Select a year`,`p-mode`,`year`,3,`ngModelChange`,`p-change`,`ngModel`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`]],template:function(r,i){r&1&&(Tl(0,`po-datepicker`,0),ww(`ngModelChange`,function(c){return uN(i.selectedYear,c)||(i.selectedYear=c),c}),ht(`p-change`,function(c){return i.changeEvent(c)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,1),Gl(3,`po-info`,2)(4,`po-info`,3),ag()),r&2&&(Ew(`ngModel`,i.selectedYear),l0(),jp(3),nw(`p-value`,i.selectedYear),jp(),nw(`p-value`,i.event))},dependencies:[gY,Ak,Xy$1,z0e,ybe],encapsulation:2,changeDetection:1})}return a})();var Ne=a=>({"docs-sample-code-tabs":a});var be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-year-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Datepicker Year`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-datepicker-year/sample-po-datepicker-year.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-datepicker
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-datepicker-year/sample-po-datepicker-year.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-datepicker-year`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ne,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,fe],encapsulation:2,changeDetection:1})}return a})();var ve=(()=>{class a{selectedMonthYear=new Date(`2026-12-02`);event;changeEvent(m){this.event=m}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-month-year`]],standalone:!1,decls:5,vars:3,consts:[[`name`,`monthYearPicker`,`p-label`,`Month/Year Picker`,`p-placeholder`,`Select month and year`,`p-mode`,`month-year`,3,`ngModelChange`,`p-change`,`ngModel`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`]],template:function(r,i){r&1&&(Tl(0,`po-datepicker`,0),ww(`ngModelChange`,function(c){return uN(i.selectedMonthYear,c)||(i.selectedMonthYear=c),c}),ht(`p-change`,function(c){return i.changeEvent(c)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,1),Gl(3,`po-info`,2)(4,`po-info`,3),ag()),r&2&&(Ew(`ngModel`,i.selectedMonthYear),l0(),jp(3),nw(`p-value`,i.selectedMonthYear),jp(),nw(`p-value`,i.event))},dependencies:[gY,Ak,Xy$1,z0e,ybe],encapsulation:2,changeDetection:1})}return a})();var Ie=a=>({"docs-sample-code-tabs":a});var xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-month-year-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Datepicker MonthYear`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-datepicker
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-datepicker-month-year`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ie,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ve],encapsulation:2,changeDetection:1})}return a})();var je=[`formAirfare`];var ye=(()=>{class a{poDialog=f(W0e);poNotification=f(Eu);formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass=`Economy`;accompanyNumber=[{value:0,label:`0`},{value:1,label:`1`},{value:2,label:`2`},{value:3,label:`3`},{value:4,label:`4`},{value:5,label:`5`},{value:6,label:`6`},{value:7,label:`7`},{value:8,label:`8`}];ticketClassOptions=[{value:`Economy`,label:`Economy`},{value:`Premium`,label:`Premium`},{value:`Business`,label:`Business`},{value:`First`,label:`First`}];apply(){let m=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:`Confirm`,message:m,confirm:()=>{this.poNotification.success(`Booking Confirmed`),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:`Economy`})},cancel:()=>{this.poNotification.warning(`Booking Canceled`)}})}getFormatedDate(m){return m&&m.slice(0,10)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-airfare`]],viewQuery:function(r,i){if(r&1&&Yl(je,7),r&2){let s;lo(s=uo())&&(i.formAirfare=s.first)}},standalone:!1,decls:13,vars:11,consts:[[`formAirfare`,`ngForm`],[1,`po-row`],[`name`,`startDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date start`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`endDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date end`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`origin`,`p-placeholder`,`Flight origin`,`p-label`,`Origin`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-placeholder`,`Flight destination`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`clas`,`po-row`],[`name`,`ticketClass`,`p-label`,`Class`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompany`,`p-label`,`Accompany`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`applyButton`,`p-label`,`Apply`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=Ax();Tl(0,`form`,null,0)(2,`div`,1)(3,`po-datepicker`,2),ww(`ngModelChange`,function(l){return Ky(s),uN(i.startDate,l)||(i.startDate=l),Xy(l)}),ag(),a0(),Tl(4,`po-datepicker`,3),ww(`ngModelChange`,function(l){return Ky(s),uN(i.endDate,l)||(i.endDate=l),Xy(l)}),ag(),a0(),ag(),Tl(5,`div`,1)(6,`po-input`,4),ww(`ngModelChange`,function(l){return Ky(s),uN(i.origin,l)||(i.origin=l),Xy(l)}),ag(),a0(),Tl(7,`po-input`,5),ww(`ngModelChange`,function(l){return Ky(s),uN(i.destination,l)||(i.destination=l),Xy(l)}),ag(),a0(),ag(),Tl(8,`div`,6)(9,`po-select`,7),ww(`ngModelChange`,function(l){return Ky(s),uN(i.ticketClass,l)||(i.ticketClass=l),Xy(l)}),ag(),a0(),Tl(10,`po-select`,8),ww(`ngModelChange`,function(l){return Ky(s),uN(i.accompany,l)||(i.accompany=l),Xy(l)}),ag(),a0(),ag(),Tl(11,`div`,1)(12,`po-button`,9),ht(`p-click`,function(){return i.apply()}),ag()()()}if(r&2){let s=Bx(1);jp(3),Ew(`ngModel`,i.startDate),nw(`p-max-date`,i.endDate),l0(),jp(),Ew(`ngModel`,i.endDate),nw(`p-min-date`,i.startDate),l0(),jp(2),Ew(`ngModel`,i.origin),l0(),jp(),Ew(`ngModel`,i.destination),l0(),jp(2),Ew(`ngModel`,i.ticketClass),nw(`p-options`,i.ticketClassOptions),l0(),jp(),Ew(`ngModel`,i.accompany),nw(`p-options`,i.accompanyNumber),l0(),jp(2),nw(`p-disabled`,s.invalid)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,z0e,iU,fbe],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-airfare-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Datepicker - Airfare`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form #formAirfare="ngForm">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-datepicker-airfare`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,He,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ye],encapsulation:2,changeDetection:1})}return a})();var ke=(()=>{class a{formBuilder=f(EY);poDialog=f(W0e);poNotification=f(Eu);formAirfare;accompanyNumber=[{value:0,label:`0`},{value:1,label:`1`},{value:2,label:`2`},{value:3,label:`3`},{value:4,label:`4`},{value:5,label:`5`},{value:6,label:`6`},{value:7,label:`7`},{value:8,label:`8`}];ticketClassOptions=[{value:`Economy`,label:`Economy`},{value:`Premium`,label:`Premium`},{value:`Business`,label:`Business`},{value:`First`,label:`First`}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,um.required],destination:[``,um.required],endDate:[new Date,um.required],origin:[``,um.required],startDate:[new Date,um.required],ticketClass:[`Economy`,um.required]})}apply(m){let{accompany:r,destination:i,endDate:s,origin:c,ticketClass:l,startDate:Me}=m.value,Te=`Would you like to confirm the ticket from ${c} to ${i} with departure date at
    ${this.getFormatedDate(Me)} and return at ${this.getFormatedDate(s)} with ${r} companions in
    ${l} class?`;this.poDialog.confirm({title:`Confirm`,message:Te,confirm:()=>{this.poNotification.success(`Booking Confirmed`),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:`Economy`})},cancel:()=>{this.poNotification.warning(`Booking Canceled`)}})}getFormatedDate(m){return m&&m.slice(0,10)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-airfare-reactive-form`]],standalone:!1,decls:12,vars:6,consts:[[3,`formGroup`],[1,`po-row`],[`formControlName`,`startDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date start`,1,`po-md-6`,3,`p-max-date`],[`formControlName`,`endDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date end`,1,`po-md-6`,3,`p-min-date`],[`formControlName`,`origin`,`p-placeholder`,`Flight origin`,`p-label`,`Origin`,1,`po-md-6`],[`formControlName`,`destination`,`p-label`,`Destination`,`p-placeholder`,`Flight destination`,1,`po-md-6`],[`clas`,`po-row`],[`formControlName`,`ticketClass`,`p-label`,`Class`,1,`po-md-6`,3,`p-options`],[`formControlName`,`accompany`,`p-label`,`Accompany`,1,`po-md-6`,3,`p-options`],[`name`,`applyButton`,`p-label`,`Apply`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){r&1&&(Tl(0,`form`,0)(1,`div`,1),Gl(2,`po-datepicker`,2),a0(),Gl(3,`po-datepicker`,3),a0(),ag(),Tl(4,`div`,1),Gl(5,`po-input`,4),a0(),Gl(6,`po-input`,5),a0(),ag(),Tl(7,`div`,6),Gl(8,`po-select`,7),a0(),Gl(9,`po-select`,8),a0(),ag(),Tl(10,`div`,1)(11,`po-button`,9),ht(`p-click`,function(){return i.apply(i.formAirfare)}),ag()()()),r&2&&(nw(`formGroup`,i.formAirfare),jp(2),nw(`p-max-date`,i.formAirfare.get(`endDate`).value),l0(),jp(),nw(`p-min-date`,i.formAirfare.get(`startDate`).value),l0(),jp(2),l0(),jp(),l0(),jp(2),nw(`p-options`,i.ticketClassOptions),l0(),jp(),nw(`p-options`,i.accompanyNumber),l0(),jp(2),nw(`p-disabled`,i.formAirfare.invalid))},dependencies:[yY,gY,mY,jk,Lk,Zt,z0e,iU,fbe],encapsulation:2,changeDetection:1})}return a})();var Qe=a=>({"docs-sample-code-tabs":a});var De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-airfare-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Datepicker - Airfare Reactive Form`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form [formGroup]="formAirfare">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-datepicker-airfare-reactive-form`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Qe,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ke],encapsulation:2,changeDetection:1})}return a})();var we=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-datepicker-doc`]],standalone:!1,decls:1324,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3schools.com/js/js_dates.asp`],[`href`,`https://www.w3schools.com/jsref/jsref_setfullyear.asp`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`/documentation/po-i18n`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoDatepickerComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`O `),Tl(24,`code`),cN(25,`po-datepicker`),ag(),cN(26,` é um componente específico para manipulação de datas permitindo a digitação e / ou seleção.`),ag(),Tl(27,`p`),cN(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),Tl(29,`code`),cN(30,`p-format`),ag(),cN(31,`).`),ag(),Tl(32,`p`),cN(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),Tl(34,`code`),cN(35,`p-locale`),ag(),cN(36,`.`),ag(),Tl(37,`p`),cN(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),ag(),Tl(39,`blockquote`)(40,`p`),cN(41,`Por padrão, o formato de saída do `),Tl(42,`em`),cN(43,`model`),ag(),cN(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),Tl(45,`code`),cN(46,`p-iso-format`),ag(),cN(47,` provê esse controle independentemente do formato de entrada. Veja abaixo os formatos disponíveis:`),ag()(),Tl(48,`ul`)(49,`li`)(50,`p`),cN(51,`Formato de entrada e saída (E8601DZw) - `),Tl(52,`code`),cN(53,`'2017-11-28T00:00:00-02:00'`),ag(),cN(54,`;`),ag()(),Tl(55,`li`)(56,`p`),cN(57,`Formato de entrada e saída (E8601DAw) - `),Tl(58,`code`),cN(59,`'2017-11-28'`),ag(),cN(60,`;`),ag()(),Tl(61,`li`)(62,`p`),cN(63,`Formato de entrada (Date) - `),Tl(64,`code`),cN(65,`new Date(2017, 10, 28)`),ag(),cN(66,` e saída (E8601DAw) - `),Tl(67,`code`),cN(68,`'2017-11-28'`),ag(),cN(69,`;`),ag()()(),Tl(70,`p`)(71,`strong`),cN(72,`Importante:`),ag()(),Tl(73,`ul`)(74,`li`),cN(75,`Para utilizar datas com ano inferior a 100, verificar o comportamento do `),Tl(76,`a`,6)(77,`code`),cN(78,`new Date`),ag()(),cN(79,`
e utilizar o m\xE9todo `),Tl(80,`a`,7)(81,`code`),cN(82,`setFullYear`),ag()(),cN(83,`.`),ag(),Tl(84,`li`),cN(85,`Caso a data esteja inválida, o `),Tl(86,`code`),cN(87,`model`),ag(),cN(88,` receberá `),Tl(89,`strong`),cN(90,`'Data inválida'`),ag(),cN(91,`.`),ag(),Tl(92,`li`),cN(93,`Caso o `),Tl(94,`code`),cN(95,`input`),ag(),cN(96,` esteja passando um `),Tl(97,`code`),cN(98,`[(ngModel)]`),ag(),cN(99,`, mas não tenha um `),Tl(100,`code`),cN(101,`name`),ag(),cN(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),Tl(103,`code`),cN(104,`[ngModelOptions]="{standalone: true}"`),ag(),cN(105,`).`),ag()(),Tl(106,`p`),cN(107,`Exemplo:`),ag(),Tl(108,`pre`)(109,`code`),cN(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),ag()(),Tl(111,`blockquote`)(112,`p`),cN(113,`Não esqueça de importar o `),Tl(114,`code`),cN(115,`FormsModule`),ag(),cN(116,` em seu módulo, tal como para utilizar o `),Tl(117,`code`),cN(118,`input default`),ag(),cN(119,`.`),ag()(),Tl(120,`h4`),cN(121,`Tokens customizáveis`),ag(),Tl(122,`p`),cN(123,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Gl(124,`br`),cN(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(126,`code`),cN(127,`.po-input`),ag()(),Tl(128,`blockquote`)(129,`p`),cN(130,`Para maiores informações, acesse o guia `),Tl(131,`a`,8),cN(132,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(133,`.`),ag()(),Tl(134,`table`)(135,`thead`)(136,`tr`)(137,`th`),cN(138,`Propriedade`),ag(),Tl(139,`th`),cN(140,`Descrição`),ag(),Tl(141,`th`),cN(142,`Valor Padrão`),ag()()(),Tl(143,`tbody`)(144,`tr`)(145,`td`)(146,`strong`),cN(147,`Default Values`),ag()(),Gl(148,`td`)(149,`td`),ag(),Tl(150,`tr`)(151,`td`)(152,`code`),cN(153,`--font-family`),ag()(),Tl(154,`td`),cN(155,`Família tipográfica usada`),ag(),Tl(156,`td`)(157,`code`),cN(158,`var(--font-family-theme)`),ag()()(),Tl(159,`tr`)(160,`td`)(161,`code`),cN(162,`--font-size`),ag()(),Tl(163,`td`),cN(164,`Tamanho da fonte`),ag(),Tl(165,`td`)(166,`code`),cN(167,`var(--font-size-default)`),ag()()(),Tl(168,`tr`)(169,`td`)(170,`code`),cN(171,`--text-color-placeholder`),ag(),cN(172,` \xA0`),ag(),Tl(173,`td`),cN(174,`Cor principal do texto do placeholder`),ag(),Tl(175,`td`)(176,`code`),cN(177,`var(--color-neutral-light-30)`),ag()()(),Tl(178,`tr`)(179,`td`)(180,`code`),cN(181,`--color`),ag()(),Tl(182,`td`),cN(183,`Cor principal do datepicker`),ag(),Tl(184,`td`)(185,`code`),cN(186,`var(--color-neutral-dark-70)`),ag()()(),Tl(187,`tr`)(188,`td`)(189,`code`),cN(190,`--background`),ag()(),Tl(191,`td`),cN(192,`Cor de background`),ag(),Tl(193,`td`)(194,`code`),cN(195,`var(--color-neutral-light-05)`),ag()()(),Tl(196,`tr`)(197,`td`)(198,`code`),cN(199,`--padding`),ag()(),Tl(200,`td`),cN(201,`Preenchimento`),ag(),Tl(202,`td`)(203,`code`),cN(204,`0 0.5rem`),ag()()(),Tl(205,`tr`)(206,`td`)(207,`code`),cN(208,`--text-color`),ag()(),Tl(209,`td`),cN(210,`Cor do texto`),ag(),Tl(211,`td`)(212,`code`),cN(213,`var(--color-neutral-dark-90)`),ag()()(),Tl(214,`tr`)(215,`td`)(216,`code`),cN(217,`--field-container-title-justify`),ag()(),Tl(218,`td`),cN(219,`Alinhamento horizontal do título (`),Tl(220,`code`),cN(221,`justify-content`),ag(),cN(222,`)`),ag(),Tl(223,`td`)(224,`code`),cN(225,`space-between`),ag()()(),Tl(226,`tr`)(227,`td`)(228,`code`),cN(229,`--field-container-title-flex`),ag()(),Tl(230,`td`),cN(231,`Flex do título (`),Tl(232,`code`),cN(233,`flex`),ag(),cN(234,`)`),ag(),Tl(235,`td`)(236,`code`),cN(237,`1 auto`),ag()()(),Tl(238,`tr`)(239,`td`)(240,`strong`),cN(241,`Hover`),ag()(),Gl(242,`td`)(243,`td`),ag(),Tl(244,`tr`)(245,`td`)(246,`code`),cN(247,`--color-hover`),ag()(),Tl(248,`td`),cN(249,`Cor principal no estado hover`),ag(),Tl(250,`td`)(251,`code`),cN(252,`var(--color-brand-01-dark)`),ag()()(),Tl(253,`tr`)(254,`td`)(255,`code`),cN(256,`--background-hover`),ag()(),Tl(257,`td`),cN(258,`Cor de background no estado hover`),ag(),Tl(259,`td`)(260,`code`),cN(261,`var(--color-brand-01-lightest)`),ag()()(),Tl(262,`tr`)(263,`td`)(264,`strong`),cN(265,`Focused`),ag()(),Gl(266,`td`)(267,`td`),ag(),Tl(268,`tr`)(269,`td`)(270,`code`),cN(271,`--color-focused`),ag()(),Tl(272,`td`),cN(273,`Cor principal no estado de focus`),ag(),Tl(274,`td`)(275,`code`),cN(276,`var(--color-action-default)`),ag()()(),Tl(277,`tr`)(278,`td`)(279,`code`),cN(280,`--outline-color-focused`),ag()(),Tl(281,`td`),cN(282,`Cor do outline do estado de focus`),ag(),Tl(283,`td`)(284,`code`),cN(285,`var(--color-action-focus)`),ag()()(),Tl(286,`tr`)(287,`td`)(288,`strong`),cN(289,`Disabled`),ag()(),Gl(290,`td`)(291,`td`),ag(),Tl(292,`tr`)(293,`td`)(294,`code`),cN(295,`--color-disabled`),ag()(),Tl(296,`td`),cN(297,`Cor principal no estado disabled`),ag(),Tl(298,`td`)(299,`code`),cN(300,`var(--color-neutral-light-30)`),ag()()(),Tl(301,`tr`)(302,`td`)(303,`code`),cN(304,`--background-disabled`),ag()(),Tl(305,`td`),cN(306,`Cor de background no estado disabled \xA0`),ag(),Tl(307,`td`)(308,`code`),cN(309,`var(--color-neutral-light-20)`),ag()()(),Tl(310,`tr`)(311,`td`)(312,`code`),cN(313,`--text-color-disabled`),ag()(),Tl(314,`td`),cN(315,`Cor do texto no estado disabled`),ag(),Tl(316,`td`)(317,`code`),cN(318,`var(--color-neutral-dark-70)`),ag()()()()()(),Tl(319,`div`,9)(320,`h4`,10),cN(321,`Seletor`),ag(),Tl(322,`pre`,11),cN(323,`<po-datepicker
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
`),ag()(),Tl(324,`h4`,12),cN(325,`Propriedades`),ag(),Tl(326,`table`,13)(327,`tr`,14)(328,`th`,15),cN(329,`Nome`),ag(),Tl(330,`th`,15),cN(331,`Tipo`),ag(),Tl(332,`th`,15),cN(333,`Padrão`),ag(),Tl(334,`th`,15),cN(335,`Descrição`),ag()(),Tl(336,`tr`,16)(337,`td`,17)(338,`div`,18)(339,`span`,19),cN(340,`p-locale`),Gl(341,`br`),ag()()(),Tl(342,`td`,20)(343,`code`,21),cN(344,`string`),ag()(),Tl(345,`td`,22),cN(346,`-`),ag(),Tl(347,`td`,23)(348,`em`)(349,`strong`),cN(350,`(opcional)`),ag()(),Tl(351,`p`),cN(352,`Idioma do Datepicker.`),ag(),Tl(353,`blockquote`)(354,`p`),cN(355,`O locale padrão sera recuperado com base no `),Tl(356,`a`,24)(357,`code`),cN(358,`PoI18nService`),ag()(),cN(359,` ou `),Tl(360,`em`),cN(361,`browser`),ag(),cN(362,`.`),ag()()()(),Tl(363,`tr`,16)(364,`td`,17)(365,`div`,25)(366,`span`,26),cN(367,` (p-additional-help)`),Gl(368,`br`),ag()(),Tl(369,`div`,27),cN(370,`Deprecated`),ag()(),Tl(371,`td`,20)(372,`code`,28),cN(373,`EventEmitter`),ag()(),Tl(374,`td`,22),cN(375,`-`),ag(),Tl(376,`td`,23)(377,`em`)(378,`strong`),cN(379,`(opcional)`),ag()(),Tl(380,`p`),cN(381,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(382,`blockquote`)(383,`p`),cN(384,`Essa propriedade está `),Tl(385,`strong`),cN(386,`depreciada`),ag(),cN(387,` e será removida na versão `),Tl(388,`code`),cN(389,`23.x.x`),ag(),cN(390,`. Recomendamos utilizar a propriedade `),Tl(391,`code`),cN(392,`p-helper`),ag(),cN(393,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(394,`tr`,16)(395,`td`,17)(396,`div`,18)(397,`span`,19),cN(398,` p-additional-help-tooltip`),Gl(399,`br`),ag()(),Tl(400,`div`,27),cN(401,`Deprecated`),ag()(),Tl(402,`td`,20)(403,`code`,21),cN(404,`string`),ag()(),Tl(405,`td`,22),cN(406,`-`),ag(),Tl(407,`td`,23)(408,`em`)(409,`strong`),cN(410,`(opcional)`),ag()(),Tl(411,`p`),cN(412,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(413,`code`),cN(414,`po-helper`),ag(),cN(415,`.
`),Tl(416,`strong`),cN(417,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(418,`blockquote`)(419,`p`),cN(420,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(421,`blockquote`)(422,`p`),cN(423,`Essa propriedade está `),Tl(424,`strong`),cN(425,`depreciada`),ag(),cN(426,` e será removida na versão `),Tl(427,`code`),cN(428,`23.x.x`),ag(),cN(429,`. Recomendamos utilizar a propriedade `),Tl(430,`code`),cN(431,`p-helper`),ag(),cN(432,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(433,`tr`,16)(434,`td`,17)(435,`div`,18)(436,`span`,19),cN(437,` p-append-in-body`),Gl(438,`br`),ag()()(),Tl(439,`td`,20)(440,`code`,29),cN(441,`boolean`),ag()(),Tl(442,`td`,22)(443,`p`)(444,`code`),cN(445,`false`),ag()()(),Tl(446,`td`,23)(447,`em`)(448,`strong`),cN(449,`(opcional)`),ag()(),Tl(450,`p`),cN(451,`Define que o `),Tl(452,`code`),cN(453,`calendar`),ag(),cN(454,` e/ou tooltip (`),Tl(455,`code`),cN(456,`p-additional-help-tooltip`),ag(),cN(457,` e/ou `),Tl(458,`code`),cN(459,`p-error-limit`),ag(),cN(460,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),ag(),Tl(461,`blockquote`)(462,`p`),cN(463,`Quando utilizado com `),Tl(464,`code`),cN(465,`p-helper`),ag(),cN(466,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(467,`tr`,16)(468,`td`,17)(469,`div`,18)(470,`span`,19),cN(471,` p-auto-focus`),Gl(472,`br`),ag()()(),Tl(473,`td`,20)(474,`code`,29),cN(475,`boolean`),ag()(),Tl(476,`td`,22)(477,`p`)(478,`code`),cN(479,`false`),ag()()(),Tl(480,`td`,23)(481,`em`)(482,`strong`),cN(483,`(opcional)`),ag()(),Tl(484,`p`),cN(485,`Aplica foco no elemento ao ser iniciado.`),ag(),Tl(486,`blockquote`)(487,`p`),cN(488,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ag()()()(),Tl(489,`tr`,16)(490,`td`,17)(491,`div`,25)(492,`span`,26),cN(493,` (p-change-model)`),Gl(494,`br`),ag()()(),Tl(495,`td`,20)(496,`code`,28),cN(497,`EventEmitter`),ag()(),Tl(498,`td`,22),cN(499,`-`),ag(),Tl(500,`td`,23)(501,`em`)(502,`strong`),cN(503,`(opcional)`),ag()(),Tl(504,`p`),cN(505,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(506,`code`),cN(507,`setValue`),ag(),cN(508,`, `),Tl(509,`code`),cN(510,`patchValue`),ag(),cN(511,`, carregamento assíncrono).`),ag(),Tl(512,`p`),cN(513,`Diferentemente do `),Tl(514,`code`),cN(515,`p-change`),ag(),cN(516,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(517,`code`),cN(518,`p-change-model`),ag(),cN(519,` cobre todos os cenários de alteração de valor.`),ag(),Tl(520,`p`),cN(521,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(522,`tr`,16)(523,`td`,17)(524,`div`,18)(525,`span`,19),cN(526,`p-clean`),Gl(527,`br`),ag()()(),Tl(528,`td`,20)(529,`code`,29),cN(530,`boolean`),ag()(),Tl(531,`td`,22),cN(532,`-`),ag(),Tl(533,`td`,23)(534,`em`)(535,`strong`),cN(536,`(opcional)`),ag()(),Tl(537,`p`),cN(538,`Habilita ação para limpar o campo.`),ag()()(),Tl(539,`tr`,16)(540,`td`,17)(541,`div`,18)(542,`span`,19),cN(543,` p-compact-label`),Gl(544,`br`),ag()()(),Tl(545,`td`,20)(546,`code`,29),cN(547,`boolean`),ag()(),Tl(548,`td`,22)(549,`p`)(550,`code`),cN(551,`false`),ag()()(),Tl(552,`td`,23)(553,`em`)(554,`strong`),cN(555,`(opcional)`),ag()(),Tl(556,`p`),cN(557,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(558,`p`),cN(559,`Quando habilitado (`),Tl(560,`code`),cN(561,`true`),ag(),cN(562,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(563,`ul`)(564,`li`)(565,`code`),cN(566,`po-label`),ag()(),Tl(567,`li`)(568,`code`),cN(569,`p-requirement (showRequired)`),ag()(),Tl(570,`li`)(571,`code`),cN(572,`po-helper`),ag()()(),Tl(573,`p`),cN(574,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(575,`p`),cN(576,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(577,`ul`)(578,`li`)(579,`code`),cN(580,`--field-container-title-justify`),ag()(),Tl(581,`li`)(582,`code`),cN(583,`--field-container-title-flex`),ag()()(),Tl(584,`p`),cN(585,`Exemplo:`),ag(),Tl(586,`pre`)(587,`code`),cN(588,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(589,`p`),cN(590,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(591,`tr`,16)(592,`td`,17)(593,`div`,18)(594,`span`,19),cN(595,`p-disabled`),Gl(596,`br`),ag()()(),Tl(597,`td`,20)(598,`code`,29),cN(599,`boolean`),ag()(),Tl(600,`td`,22),cN(601,`-`),ag(),Tl(602,`td`,23)(603,`em`)(604,`strong`),cN(605,`(opcional)`),ag()(),Tl(606,`p`),cN(607,`Desabilita o campo.`),ag()()(),Tl(608,`tr`,16)(609,`td`,17)(610,`div`,18)(611,`span`,19),cN(612,` p-error-async`),Gl(613,`br`),ag()()(),Tl(614,`td`,20)(615,`code`,30),cN(616,`(value) => Observable<boolean>`),ag()(),Tl(617,`td`,22),cN(618,`-`),ag(),Tl(619,`td`,23)(620,`em`)(621,`strong`),cN(622,`(opcional)`),ag()(),Tl(623,`p`),cN(624,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(625,`code`),cN(626,`change`),ag(),cN(627,`.`),ag()()(),Tl(628,`tr`,16)(629,`td`,17)(630,`div`,18)(631,`span`,19),cN(632,` p-error-limit`),Gl(633,`br`),ag()()(),Tl(634,`td`,20)(635,`code`,29),cN(636,`boolean`),ag()(),Tl(637,`td`,22)(638,`p`)(639,`code`),cN(640,`false`),ag()()(),Tl(641,`td`,23)(642,`em`)(643,`strong`),cN(644,`(opcional)`),ag()(),Tl(645,`p`),cN(646,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(647,`blockquote`)(648,`p`),cN(649,`Caso essa propriedade seja definida como `),Tl(650,`code`),cN(651,`true`),ag(),cN(652,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()()()(),Tl(653,`tr`,16)(654,`td`,17)(655,`div`,18)(656,`span`,19),cN(657,` p-error-pattern`),Gl(658,`br`),ag()()(),Tl(659,`td`,20)(660,`code`,21),cN(661,`string`),ag()(),Tl(662,`td`,22),cN(663,`-`),ag(),Tl(664,`td`,23)(665,`em`)(666,`strong`),cN(667,`(opcional)`),ag()(),Tl(668,`p`),cN(669,`Mensagem apresentada quando a data for inválida ou fora do período.`),ag(),Tl(670,`blockquote`)(671,`p`),cN(672,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Tl(673,`code`),cN(674,`p-required-field-error-message`),ag(),cN(675,` em conjunto.`),ag()()()(),Tl(676,`tr`,16)(677,`td`,17)(678,`div`,18)(679,`span`,19),cN(680,` p-format`),Gl(681,`br`),ag()()(),Tl(682,`td`,20)(683,`code`,21),cN(684,`string`),ag()(),Tl(685,`td`,22)(686,`p`)(687,`code`),cN(688,`dd/mm/yyyy`),ag()()(),Tl(689,`td`,23)(690,`em`)(691,`strong`),cN(692,`(opcional)`),ag()(),Tl(693,`p`),cN(694,`Formato de exibição da data.`),ag(),Tl(695,`p`),cN(696,`Valores válidos:`),ag(),Tl(697,`ul`)(698,`li`)(699,`code`),cN(700,`dd/mm/yyyy`),ag()(),Tl(701,`li`)(702,`code`),cN(703,`mm/dd/yyyy`),ag()(),Tl(704,`li`)(705,`code`),cN(706,`yyyy/mm/dd`),ag()()(),Tl(707,`p`),cN(708,`Propriedade incompatível com as variações month-year e year.`),ag()()(),Tl(709,`tr`,16)(710,`td`,17)(711,`div`,18)(712,`span`,19),cN(713,` p-help`),Gl(714,`br`),ag()()(),Tl(715,`td`,20)(716,`code`,21),cN(717,`string`),ag()(),Tl(718,`td`,22),cN(719,`-`),ag(),Tl(720,`td`,23)(721,`em`)(722,`strong`),cN(723,`(opcional)`),ag()(),Tl(724,`p`),cN(725,`Texto de apoio do campo.`),ag()()(),Tl(726,`tr`,16)(727,`td`,17)(728,`div`,18)(729,`span`,19),cN(730,` p-iso-format`),Gl(731,`br`),ag()()(),Tl(732,`td`,20)(733,`code`,31),cN(734,`PoDatepickerIsoFormat`),ag()(),Tl(735,`td`,22),cN(736,`-`),ag(),Tl(737,`td`,23)(738,`em`)(739,`strong`),cN(740,`(opcional)`),ag()(),Tl(741,`p`),cN(742,`Padrão de formatação para saída do `),Tl(743,`em`),cN(744,`model`),ag(),cN(745,`, independentemente do formato de entrada.`),ag(),Tl(746,`blockquote`)(747,`p`),cN(748,`Veja os valores válidos no `),Tl(749,`em`),cN(750,`enum`),ag(),Tl(751,`code`),cN(752,`PoDatepickerIsoFormat`),ag(),cN(753,`.`),ag()(),Tl(754,`p`),cN(755,`Propriedade incompatível com as variações month-year e year.`),ag()()(),Tl(756,`tr`,16)(757,`td`,17)(758,`div`,25)(759,`span`,26),cN(760,` (p-keydown)`),Gl(761,`br`),ag()()(),Tl(762,`td`,20)(763,`code`,28),cN(764,`EventEmitter`),ag()(),Tl(765,`td`,22),cN(766,`-`),ag(),Tl(767,`td`,23)(768,`em`)(769,`strong`),cN(770,`(opcional)`),ag()(),Tl(771,`p`),cN(772,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(773,`code`),cN(774,`KeyboardEvent`),ag(),cN(775,` com informações sobre a tecla.`),ag()()(),Tl(776,`tr`,16)(777,`td`,17)(778,`div`,18)(779,`span`,19),cN(780,` p-label`),Gl(781,`br`),ag()()(),Tl(782,`td`,20)(783,`code`,21),cN(784,`string`),ag()(),Tl(785,`td`,22),cN(786,`-`),ag(),Tl(787,`td`,23)(788,`em`)(789,`strong`),cN(790,`(opcional)`),ag()(),Tl(791,`p`),cN(792,`Rótulo do campo.`),ag()()(),Tl(793,`tr`,16)(794,`td`,17)(795,`div`,18)(796,`span`,19),cN(797,` p-label-text-wrap`),Gl(798,`br`),ag()()(),Tl(799,`td`,20)(800,`code`,29),cN(801,`boolean`),ag()(),Tl(802,`td`,22)(803,`p`)(804,`code`),cN(805,`false`),ag()()(),Tl(806,`td`,23)(807,`em`)(808,`strong`),cN(809,`(opcional)`),ag()(),Tl(810,`p`),cN(811,`Habilita a quebra automática do texto da propriedade `),Tl(812,`code`),cN(813,`p-label`),ag(),cN(814,`. Quando `),Tl(815,`code`),cN(816,`p-label-text-wrap`),ag(),cN(817,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(818,`tr`,16)(819,`td`,17)(820,`div`,18)(821,`span`,19),cN(822,` p-loading`),Gl(823,`br`),ag()()(),Tl(824,`td`,20)(825,`code`,29),cN(826,`boolean`),ag()(),Tl(827,`td`,22)(828,`p`)(829,`code`),cN(830,`false`),ag()()(),Tl(831,`td`,23)(832,`em`)(833,`strong`),cN(834,`(opcional)`),ag()(),Tl(835,`p`),cN(836,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ag()()(),Tl(837,`tr`,16)(838,`td`,17)(839,`div`,18)(840,`span`,19),cN(841,` p-max-date`),Gl(842,`br`),ag()()(),Tl(843,`td`,20)(844,`code`,21),cN(845,`string `),ag(),Tl(846,`code`,32),cN(847,` Date`),ag()(),Tl(848,`td`,22),cN(849,`-`),ag(),Tl(850,`td`,23)(851,`em`)(852,`strong`),cN(853,`(opcional)`),ag()(),Tl(854,`p`),cN(855,`Define uma data máxima para o `),Tl(856,`code`),cN(857,`po-datepicker`),ag(),cN(858,`.`),ag()()(),Tl(859,`tr`,16)(860,`td`,17)(861,`div`,18)(862,`span`,19),cN(863,` p-min-date`),Gl(864,`br`),ag()()(),Tl(865,`td`,20)(866,`code`,21),cN(867,`string `),ag(),Tl(868,`code`,32),cN(869,` Date`),ag()(),Tl(870,`td`,22),cN(871,`-`),ag(),Tl(872,`td`,23)(873,`em`)(874,`strong`),cN(875,`(opcional)`),ag()(),Tl(876,`p`),cN(877,`Define uma data mínima para o `),Tl(878,`code`),cN(879,`po-datepicker`),ag(),cN(880,`.`),ag()()(),Tl(881,`tr`,16)(882,`td`,17)(883,`div`,18)(884,`span`,19),cN(885,` p-mode`),Gl(886,`br`),ag()()(),Tl(887,`td`,20)(888,`code`,33),cN(889,`'month-year' `),ag(),Tl(890,`code`,34),cN(891,` 'year'`),ag()(),Tl(892,`td`,22),cN(893,`-`),ag(),Tl(894,`td`,23)(895,`em`)(896,`strong`),cN(897,`(opcional)`),ag()(),Tl(898,`p`),cN(899,`Define o modo de operação do datepicker.`),ag(),Tl(900,`p`),cN(901,`Permite configurar o componente para seleção de:`),ag(),Tl(902,`ul`)(903,`li`),cN(904,`Mês e ano (`),Tl(905,`code`),cN(906,`month-year`),ag(),cN(907,`);`),ag(),Tl(908,`li`),cN(909,`Apenas ano (`),Tl(910,`code`),cN(911,`year`),ag(),cN(912,`).`),ag()()()(),Tl(913,`tr`,16)(914,`td`,17)(915,`div`,18)(916,`span`,19),cN(917,` p-no-autocomplete`),Gl(918,`br`),ag()()(),Tl(919,`td`,20)(920,`code`,29),cN(921,`boolean`),ag()(),Tl(922,`td`,22)(923,`p`)(924,`code`),cN(925,`false`),ag()()(),Tl(926,`td`,23)(927,`em`)(928,`strong`),cN(929,`(opcional)`),ag()(),Tl(930,`p`),cN(931,`Define a propriedade nativa `),Tl(932,`code`),cN(933,`autocomplete`),ag(),cN(934,` do campo como `),Tl(935,`code`),cN(936,`off`),ag(),cN(937,`.`),ag()()(),Tl(938,`tr`,16)(939,`td`,17)(940,`div`,25)(941,`span`,26),cN(942,` (p-blur)`),Gl(943,`br`),ag()()(),Tl(944,`td`,20)(945,`code`,28),cN(946,`EventEmitter`),ag()(),Tl(947,`td`,22),cN(948,`-`),ag(),Tl(949,`td`,23)(950,`em`)(951,`strong`),cN(952,`(opcional)`),ag()(),Tl(953,`p`),cN(954,`Evento disparado ao sair do campo.`),ag()()(),Tl(955,`tr`,16)(956,`td`,17)(957,`div`,25)(958,`span`,26),cN(959,` (p-change)`),Gl(960,`br`),ag()()(),Tl(961,`td`,20)(962,`code`,28),cN(963,`EventEmitter`),ag()(),Tl(964,`td`,22),cN(965,`-`),ag(),Tl(966,`td`,23)(967,`em`)(968,`strong`),cN(969,`(opcional)`),ag()(),Tl(970,`p`),cN(971,`Evento disparado ao alterar valor do campo.`),ag()()(),Tl(972,`tr`,16)(973,`td`,17)(974,`div`,18)(975,`span`,19),cN(976,` p-optional`),Gl(977,`br`),ag()()(),Tl(978,`td`,20)(979,`code`,29),cN(980,`boolean`),ag()(),Tl(981,`td`,22)(982,`p`)(983,`code`),cN(984,`false`),ag()()(),Tl(985,`td`,23)(986,`em`)(987,`strong`),cN(988,`(opcional)`),ag()(),Tl(989,`p`),cN(990,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(991,`blockquote`)(992,`p`),cN(993,`Não será exibida a indicação se:`),ag()(),Tl(994,`ul`)(995,`li`),cN(996,`O campo conter `),Tl(997,`code`),cN(998,`p-required`),ag(),cN(999,`;`),ag(),Tl(1e3,`li`),cN(1001,`Não possuir `),Tl(1002,`code`),cN(1003,`p-help`),ag(),cN(1004,` e/ou `),Tl(1005,`code`),cN(1006,`p-label`),ag(),cN(1007,`.`),ag()()()(),Tl(1008,`tr`,16)(1009,`td`,17)(1010,`div`,18)(1011,`span`,19),cN(1012,` p-placeholder`),Gl(1013,`br`),ag()()(),Tl(1014,`td`,20)(1015,`code`,21),cN(1016,`string`),ag()(),Tl(1017,`td`,22),cN(1018,`-`),ag(),Tl(1019,`td`,23)(1020,`em`)(1021,`strong`),cN(1022,`(opcional)`),ag()(),Tl(1023,`p`),cN(1024,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ag()()(),Tl(1025,`tr`,16)(1026,`td`,17)(1027,`div`,18)(1028,`span`,19),cN(1029,` p-helper`),Gl(1030,`br`),ag()()(),Tl(1031,`td`,20)(1032,`code`,35),cN(1033,`PoHelperOptions `),ag(),Tl(1034,`code`,21),cN(1035,` string`),ag()(),Tl(1036,`td`,22),cN(1037,`-`),ag(),Tl(1038,`td`,23)(1039,`em`)(1040,`strong`),cN(1041,`(opcional)`),ag()(),Tl(1042,`p`),cN(1043,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(1044,`code`),cN(1045,`p-label`),ag(),cN(1046,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(1047,`code`),cN(1048,`p-label`),ag(),cN(1049,`.`),ag(),Tl(1050,`blockquote`)(1051,`p`),cN(1052,`Para mais informações acesse: `),Tl(1053,`a`,36),cN(1054,`https://po-ui.io/documentation/po-helper`),ag(),cN(1055,`.`),ag()(),Tl(1056,`blockquote`)(1057,`p`),cN(1058,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(1059,`code`),cN(1060,`p-additional-help-tooltip`),ag(),cN(1061,` e `),Tl(1062,`code`),cN(1063,`p-additional-help`),ag(),cN(1064,`) será ignorado.`),ag()()()(),Tl(1065,`tr`,16)(1066,`td`,17)(1067,`div`,18)(1068,`span`,19),cN(1069,`p-readonly`),Gl(1070,`br`),ag()()(),Tl(1071,`td`,20)(1072,`code`,29),cN(1073,`boolean`),ag()(),Tl(1074,`td`,22),cN(1075,`-`),ag(),Tl(1076,`td`,23)(1077,`em`)(1078,`strong`),cN(1079,`(opcional)`),ag()(),Tl(1080,`p`),cN(1081,`Torna o elemento somente leitura.`),ag()()(),Tl(1082,`tr`,16)(1083,`td`,17)(1084,`div`,18)(1085,`span`,19),cN(1086,`p-required`),Gl(1087,`br`),ag()()(),Tl(1088,`td`,20)(1089,`code`,29),cN(1090,`boolean`),ag()(),Tl(1091,`td`,22)(1092,`p`)(1093,`code`),cN(1094,`false`),ag()()(),Tl(1095,`td`,23)(1096,`em`)(1097,`strong`),cN(1098,`(opcional)`),ag()(),Tl(1099,`p`),cN(1100,`Define que o campo será obrigatório.`),ag()()(),Tl(1101,`tr`,16)(1102,`td`,17)(1103,`div`,18)(1104,`span`,19),cN(1105,` p-required-field-error-message`),Gl(1106,`br`),ag()()(),Tl(1107,`td`,20)(1108,`code`,29),cN(1109,`boolean`),ag()(),Tl(1110,`td`,22)(1111,`p`)(1112,`code`),cN(1113,`false`),ag()()(),Tl(1114,`td`,23)(1115,`em`)(1116,`strong`),cN(1117,`(opcional)`),ag()(),Tl(1118,`p`),cN(1119,`Exibe a mensagem setada na propriedade `),Tl(1120,`code`),cN(1121,`p-error-pattern`),ag(),cN(1122,` se o campo estiver vazio e for requerido.`),ag(),Tl(1123,`blockquote`)(1124,`p`),cN(1125,`Necessário que a propriedade `),Tl(1126,`code`),cN(1127,`p-required`),ag(),cN(1128,` esteja habilitada.`),ag()()()(),Tl(1129,`tr`,16)(1130,`td`,17)(1131,`div`,18)(1132,`span`,19),cN(1133,` p-show-required`),Gl(1134,`br`),ag()()(),Tl(1135,`td`,20)(1136,`code`,29),cN(1137,`boolean`),ag()(),Tl(1138,`td`,22),cN(1139,`-`),ag(),Tl(1140,`td`,23)(1141,`p`),cN(1142,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(1143,`blockquote`)(1144,`p`),cN(1145,`Não será exibida a indicação se:`),ag()(),Tl(1146,`ul`)(1147,`li`),cN(1148,`Não possuir `),Tl(1149,`code`),cN(1150,`p-help`),ag(),cN(1151,` e/ou `),Tl(1152,`code`),cN(1153,`p-label`),ag(),cN(1154,`.`),ag()()()(),Tl(1155,`tr`,16)(1156,`td`,17)(1157,`div`,18)(1158,`span`,19),cN(1159,` p-size`),Gl(1160,`br`),ag()()(),Tl(1161,`td`,20)(1162,`code`,21),cN(1163,`string`),ag()(),Tl(1164,`td`,22)(1165,`p`)(1166,`code`),cN(1167,`medium`),ag()()(),Tl(1168,`td`,23)(1169,`em`)(1170,`strong`),cN(1171,`(opcional)`),ag()(),Tl(1172,`p`),cN(1173,`Define o tamanho do componente:`),ag(),Tl(1174,`ul`)(1175,`li`)(1176,`code`),cN(1177,`small`),ag(),cN(1178,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(1179,`li`)(1180,`code`),cN(1181,`medium`),ag(),cN(1182,`: altura do input como 44px.`),ag()(),Tl(1183,`blockquote`)(1184,`p`),cN(1185,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(1186,`code`),cN(1187,`medium`),ag(),cN(1188,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1189,`a`,37),cN(1190,`po-theme`),ag(),cN(1191,`.`),ag()()()(),Tl(1192,`tr`,16)(1193,`td`,17)(1194,`div`,18)(1195,`span`,19),cN(1196,` p-year-range-limit`),Gl(1197,`br`),ag()()(),Tl(1198,`td`,20)(1199,`code`,38),cN(1200,`number`),ag()(),Tl(1201,`td`,22)(1202,`p`),cN(1203,`150`),ag()(),Tl(1204,`td`,23)(1205,`em`)(1206,`strong`),cN(1207,`(opcional)`),ag()(),Tl(1208,`p`),cN(1209,`Define o limite de anos exibidos nas variações `),Tl(1210,`code`),cN(1211,`month-year`),ag(),cN(1212,` e `),Tl(1213,`code`),cN(1214,`year`),ag(),cN(1215,`,
considerando a data atual como refer\xEAncia.`),ag(),Tl(1216,`p`),cN(1217,`O valor informado determina o intervalo de anos anterior e posterior
\xE0 data corrente que ser\xE1 disponibilizado para sele\xE7\xE3o.`),ag()()()(),Tl(1218,`h3`,12),cN(1219,`Métodos`),ag(),Tl(1220,`table`,39)(1221,`tr`,16)(1222,`th`,40)(1223,`div`,18)(1224,`h4`)(1225,`span`,19),cN(1226,` focus `),ag()()()()(),Tl(1227,`tr`,23)(1228,`td`,23)(1229,`p`),cN(1230,`Função que atribui foco ao componente.`),ag(),Tl(1231,`p`),cN(1232,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(1233,`pre`)(1234,`code`),cN(1235,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),ag()()()()(),Gl(1236,`br`),Tl(1237,`table`,39)(1238,`tr`,16)(1239,`th`,40)(1240,`div`,18)(1241,`h4`)(1242,`span`,19),cN(1243,` showAdditionalHelp `),ag()()()()(),Tl(1244,`tr`,23)(1245,`td`,23)(1246,`p`),cN(1247,`Método que exibe `),Tl(1248,`code`),cN(1249,`p-helper`),ag(),cN(1250,` ou executa a ação definida em `),Tl(1251,`code`),cN(1252,`p-helper{eventOnClick}`),ag(),cN(1253,` ou em `),Tl(1254,`code`),cN(1255,`p-additionalHelp`),ag(),cN(1256,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1257,`code`),cN(1258,`p-keydown`),ag(),cN(1259,`.`),ag(),Tl(1260,`blockquote`)(1261,`p`),cN(1262,`Exibe ou oculta o conteúdo do componente `),Tl(1263,`code`),cN(1264,`po-helper`),ag(),cN(1265,` quando o componente estiver com foco.`),ag()(),Tl(1266,`pre`)(1267,`code`),cN(1268,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),ag()(),Tl(1269,`pre`)(1270,`code`),cN(1271,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(1272,`br`),Tl(1273,`h3`),cN(1274,`Enums`),ag(),Tl(1275,`h4`,4)(1276,`code`,5),cN(1277,`PoDatepickerIsoFormat`),ag()(),Tl(1278,`div`,2)(1279,`p`)(1280,`em`),cN(1281,`Enum`),ag(),cN(1282,` que define o padrão de formatação das datas.`),ag(),Tl(1283,`blockquote`)(1284,`p`),cN(1285,`Caso um formato padrão seja definido, o mesmo não será mais alterado de acordo com o formato de entrada.`),ag()()(),Tl(1286,`h4`,12),cN(1287,`Propriedades`),ag(),Tl(1288,`table`,13)(1289,`tr`,14)(1290,`th`,15),cN(1291,`Nome`),ag(),Tl(1292,`th`,15),cN(1293,`Descrição`),ag()(),Tl(1294,`tr`,16)(1295,`td`,17)(1296,`div`,18)(1297,`span`,19),cN(1298,` Basic`),Gl(1299,`br`),ag()()(),Tl(1300,`td`,23)(1301,`p`),cN(1302,`Padrão `),Tl(1303,`strong`),cN(1304,`E8601DAw`),ag(),cN(1305,` (`),Tl(1306,`em`),cN(1307,`yyyy-mm-dd`),ag(),cN(1308,`).`),ag()()(),Tl(1309,`tr`,16)(1310,`td`,17)(1311,`div`,18)(1312,`span`,19),cN(1313,` Extended`),Gl(1314,`br`),ag()()(),Tl(1315,`td`,23)(1316,`p`),cN(1317,`Padrão `),Tl(1318,`strong`),cN(1319,`E8601DZw`),ag(),cN(1320,` (`),Tl(1321,`em`),cN(1322,`yyyy-mm-ddThh:mm:ss+|-hh:mm`),ag(),cN(1323,`).`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Je=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:11,vars:4,consts:[[`p-title`,`Datepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-datepicker-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-datepicker-basic-view`)(6,`sample-po-datepicker-labs-view`)(7,`sample-po-datepicker-year-view`)(8,`sample-po-datepicker-month-year-view`)(9,`sample-po-datepicker-airfare-view`)(10,`sample-po-datepicker-airfare-reactive-form-view`),ag()()()),r&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ge,Se,be,xe,Ce,De,we],encapsulation:2,changeDetection:1})}return a})()}];var _e=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[bL.forChild(Je),bL]})}return a})();var Rt=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=he$1({type:a});static ɵinj=ue({imports:[ar,_e]})}return a})();export{Rt as DocPoDatepickerModule};