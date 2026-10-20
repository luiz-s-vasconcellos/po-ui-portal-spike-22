import{$r as Zn,Bn as zu,Br as Sx,Ct as Wte,Dn as tP,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Lr as SF,Pi as mt,Ri as nu,Rt as _oe,Si as iu,Sr as Mm,Vi as p,Vr as TF,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,i as _a,ir as EF,ji as mO,ki as kF,mn as ni,ni as _o,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ua as wK,un as m5,ur as Fx,ut as Rte,va as y_,wi as jE,xi as ir,xr as MK,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Ee=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-datepicker-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`datepicker`,`p-label`,`PO Datepicker`]],template:function(r,i){r&1&&nu(0,`po-datepicker`,0)},dependencies:[Rte],encapsulation:2,changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-datepicker-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Datepicker Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-datepicker-basic/sample-po-datepicker-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-datepicker-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,qe,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ee],encapsulation:2,changeDetection:1})}return o})();var he=(()=>{class o{helperText;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:`Basic`,value:tP.Basic},{label:`Extended`,value:tP.Extended}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`loading`,label:`Loading`},{value:`compactLabel`,label:`Compact Label`}];formatOptions=[{label:`dd/mm/yyyy`,value:`dd/mm/yyyy`},{label:`mm/dd/yyyy`,value:`mm/dd/yyyy`},{label:`yyyy/mm/dd`,value:`yyyy/mm/dd`}];localeOptions=[{label:`pt`,value:`pt`},{label:`en`,value:`en`},{label:`es`,value:`es`},{label:`ru`,value:`ru`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size=`medium`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-datepicker-labs`]],standalone:!1,decls:22,vars:47,consts:[[`f`,`ngForm`],[`name`,`datepicker`,1,`po-sm-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-max-date`,`p-error-pattern`,`p-format`,`p-help`,`p-iso-format`,`p-label`,`p-locale`,`p-min-date`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-label-text-wrap`,`p-loading`,`p-compact-label`,`p-size`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minDate`,`p-clean`,``,`p-label`,`Min date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`,`p-format`],[`name`,`maxDate`,`p-clean`,``,`p-label`,`Max date`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-format`,`p-min-date`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`locale`,`p-columns`,`4`,`p-label`,`Locale`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`format`,`p-columns`,`4`,`p-label`,`Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`isoFormat`,`p-columns`,`4`,`p-label`,`Iso Format`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`restore`,`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Sx();jc(0,`po-datepicker`,1),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.datepicker,l)||(i.datepicker=l),v_(l)}),mt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3)(4,`po-info`,4),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.label,l)||(i.label=l),v_(l)}),wg(),jc(9,`po-input`,6),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.help,l)||(i.help=l),v_(l)}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.helperText,l)||(i.helperText=l),v_(l)}),wg(),jc(11,`po-input`,8),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.placeholder,l)||(i.placeholder=l),v_(l)}),wg(),jc(12,`po-input`,9),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.errorPattern,l)||(i.errorPattern=l),v_(l)}),wg(),jc(13,`po-datepicker`,10),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.minDate,l)||(i.minDate=l),v_(l)}),wg(),jc(14,`po-datepicker`,11),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.maxDate,l)||(i.maxDate=l),v_(l)}),wg(),jc(15,`po-checkbox-group`,12),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.properties,l)||(i.properties=l),v_(l)}),wg(),jc(16,`po-radio-group`,13),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.locale,l)||(i.locale=l),v_(l)}),wg(),jc(17,`po-radio-group`,14),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.format,l)||(i.format=l),v_(l)}),wg(),jc(18,`po-radio-group`,15),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.isoFormat,l)||(i.isoFormat=l),v_(l)}),wg(),jc(19,`po-radio-group`,16),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.size,l)||(i.size=l),v_(l)}),wg(),jc(20,`div`,2)(21,`po-button`,17),mt(`p-click`,function(){return i.restore()}),wg()()()}r&2&&(ib(`ngModel`,i.datepicker),jE(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-max-date`,i.maxDate)(`p-error-pattern`,i.errorPattern)(`p-format`,i.format)(`p-help`,i.help)(`p-iso-format`,i.isoFormat)(`p-label`,i.label)(`p-locale`,i.locale)(`p-min-date`,i.minDate)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-loading`,i.properties.includes(`loading`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`)),t0(),rg(3),jE(`p-value`,i.datepicker),rg(),jE(`p-value`,i.event),rg(4),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.help),t0(),rg(),ib(`ngModel`,i.helperText),t0(),rg(),ib(`ngModel`,i.placeholder),t0(),rg(),ib(`ngModel`,i.errorPattern),t0(),rg(),ib(`ngModel`,i.minDate),jE(`p-max-date`,i.maxDate)(`p-format`,i.format),t0(),rg(),ib(`ngModel`,i.maxDate),jE(`p-format`,i.format)(`p-min-date`,i.minDate),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.locale),jE(`p-options`,i.localeOptions),t0(),rg(),ib(`ngModel`,i.format),jE(`p-options`,i.formatOptions),t0(),rg(),ib(`ngModel`,i.isoFormat),jE(`p-options`,i.isoFormatOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,Rte,A5,Ote,_oe],encapsulation:2,changeDetection:1})}return o})();var Le=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-datepicker-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Datepicker Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-datepicker-labs/sample-po-datepicker-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-datepicker
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-datepicker-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Le,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,he],encapsulation:2,changeDetection:1})}return o})();var fe=(()=>{class o{selectedYear=new Date(`2026-04-30`).getFullYear();event;changeEvent(m){this.event=m}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-datepicker-year`]],standalone:!1,decls:5,vars:3,consts:[[`name`,`yearPicker`,`p-label`,`Year Picker`,`p-placeholder`,`Select a year`,`p-mode`,`year`,3,`ngModelChange`,`p-change`,`ngModel`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`]],template:function(r,i){r&1&&(jc(0,`po-datepicker`,0),JN(),ob(`ngModelChange`,function(c){return sO(i.selectedYear,c)||(i.selectedYear=c),c}),mt(`p-change`,function(c){return i.changeEvent(c)}),wg(),nu(1,`po-divider`),jc(2,`div`,1),nu(3,`po-info`,2)(4,`po-info`,3),wg()),r&2&&(ib(`ngModel`,i.selectedYear),t0(),rg(3),jE(`p-value`,i.selectedYear),rg(),jE(`p-value`,i.event))},dependencies:[CK,TF,Lf,Rte,_oe],encapsulation:2,changeDetection:1})}return o})();var Ne=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-datepicker-year-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Datepicker Year`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-datepicker-year/sample-po-datepicker-year.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-datepicker
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-datepicker-year/sample-po-datepicker-year.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-datepicker-year`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ne,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,fe],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{selectedMonthYear=new Date(`2026-12-02`);event;changeEvent(m){this.event=m}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-datepicker-month-year`]],standalone:!1,decls:5,vars:3,consts:[[`name`,`monthYearPicker`,`p-label`,`Month/Year Picker`,`p-placeholder`,`Select month and year`,`p-mode`,`month-year`,3,`ngModelChange`,`p-change`,`ngModel`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`]],template:function(r,i){r&1&&(jc(0,`po-datepicker`,0),JN(),ob(`ngModelChange`,function(c){return sO(i.selectedMonthYear,c)||(i.selectedMonthYear=c),c}),mt(`p-change`,function(c){return i.changeEvent(c)}),wg(),nu(1,`po-divider`),jc(2,`div`,1),nu(3,`po-info`,2)(4,`po-info`,3),wg()),r&2&&(ib(`ngModel`,i.selectedMonthYear),t0(),rg(3),jE(`p-value`,i.selectedMonthYear),rg(),jE(`p-value`,i.event))},dependencies:[CK,TF,Lf,Rte,_oe],encapsulation:2,changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-datepicker-month-year-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Datepicker MonthYear`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-datepicker
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-datepicker-month-year`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ie,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ve],encapsulation:2,changeDetection:1})}return o})();var je=[`formAirfare`];var ye=(()=>{class o{poDialog=p(Wte);poNotification=p(zu);formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass=`Economy`;accompanyNumber=[{value:0,label:`0`},{value:1,label:`1`},{value:2,label:`2`},{value:3,label:`3`},{value:4,label:`4`},{value:5,label:`5`},{value:6,label:`6`},{value:7,label:`7`},{value:8,label:`8`}];ticketClassOptions=[{value:`Economy`,label:`Economy`},{value:`Premium`,label:`Premium`},{value:`Business`,label:`Business`},{value:`First`,label:`First`}];apply(){let m=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:`Confirm`,message:m,confirm:()=>{this.poNotification.success(`Booking Confirmed`),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:`Economy`})},cancel:()=>{this.poNotification.warning(`Booking Canceled`)}})}getFormatedDate(m){return m&&m.slice(0,10)}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-datepicker-airfare`]],viewQuery:function(r,i){if(r&1&&iu(je,7),r&2){let s;vo(s=_o())&&(i.formAirfare=s.first)}},standalone:!1,decls:13,vars:11,consts:[[`formAirfare`,`ngForm`],[1,`po-row`],[`name`,`startDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date start`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-max-date`],[`name`,`endDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date end`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-min-date`],[`name`,`origin`,`p-placeholder`,`Flight origin`,`p-label`,`Origin`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`destination`,`p-label`,`Destination`,`p-placeholder`,`Flight destination`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`clas`,`po-row`],[`name`,`ticketClass`,`p-label`,`Class`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`accompany`,`p-label`,`Accompany`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`applyButton`,`p-label`,`Apply`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=Sx();jc(0,`form`,null,0)(2,`div`,1)(3,`po-datepicker`,2),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.startDate,l)||(i.startDate=l),v_(l)}),wg(),jc(4,`po-datepicker`,3),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.endDate,l)||(i.endDate=l),v_(l)}),wg()(),jc(5,`div`,1)(6,`po-input`,4),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.origin,l)||(i.origin=l),v_(l)}),wg(),jc(7,`po-input`,5),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.destination,l)||(i.destination=l),v_(l)}),wg()(),jc(8,`div`,6)(9,`po-select`,7),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.ticketClass,l)||(i.ticketClass=l),v_(l)}),wg(),jc(10,`po-select`,8),JN(),ob(`ngModelChange`,function(l){return y_(s),sO(i.accompany,l)||(i.accompany=l),v_(l)}),wg()(),jc(11,`div`,1)(12,`po-button`,9),mt(`p-click`,function(){return i.apply()}),wg()()()}if(r&2){let s=Fx(1);rg(3),ib(`ngModel`,i.startDate),jE(`p-max-date`,i.endDate),t0(),rg(),ib(`ngModel`,i.endDate),jE(`p-min-date`,i.startDate),t0(),rg(2),ib(`ngModel`,i.origin),t0(),rg(),ib(`ngModel`,i.destination),t0(),rg(2),ib(`ngModel`,i.ticketClass),jE(`p-options`,i.ticketClassOptions),t0(),rg(),ib(`ngModel`,i.accompany),jE(`p-options`,i.accompanyNumber),t0(),rg(2),jE(`p-disabled`,s.invalid)}},dependencies:[wK,CK,EK,TF,EF,ni,Rte,A5,moe],encapsulation:2,changeDetection:1})}return o})();var He=o=>({"docs-sample-code-tabs":o});var Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-datepicker-airfare-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Datepicker - Airfare`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form #formAirfare="ngForm">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-datepicker-airfare`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,He,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ye],encapsulation:2,changeDetection:1})}return o})();var ke=(()=>{class o{formBuilder=p(MK);poDialog=p(Wte);poNotification=p(zu);formAirfare;accompanyNumber=[{value:0,label:`0`},{value:1,label:`1`},{value:2,label:`2`},{value:3,label:`3`},{value:4,label:`4`},{value:5,label:`5`},{value:6,label:`6`},{value:7,label:`7`},{value:8,label:`8`}];ticketClassOptions=[{value:`Economy`,label:`Economy`},{value:`Premium`,label:`Premium`},{value:`Business`,label:`Business`},{value:`First`,label:`First`}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,Mm.required],destination:[``,Mm.required],endDate:[new Date,Mm.required],origin:[``,Mm.required],startDate:[new Date,Mm.required],ticketClass:[`Economy`,Mm.required]})}apply(m){let{accompany:r,destination:i,endDate:s,origin:c,ticketClass:l,startDate:Me}=m.value,Te=`Would you like to confirm the ticket from ${c} to ${i} with departure date at
    ${this.getFormatedDate(Me)} and return at ${this.getFormatedDate(s)} with ${r} companions in
    ${l} class?`;this.poDialog.confirm({title:`Confirm`,message:Te,confirm:()=>{this.poNotification.success(`Booking Confirmed`),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:`Economy`})},cancel:()=>{this.poNotification.warning(`Booking Canceled`)}})}getFormatedDate(m){return m&&m.slice(0,10)}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-datepicker-airfare-reactive-form`]],standalone:!1,decls:12,vars:6,consts:[[3,`formGroup`],[1,`po-row`],[`formControlName`,`startDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date start`,1,`po-md-6`,3,`p-max-date`],[`formControlName`,`endDate`,`p-clean`,``,`p-format`,`dd/mm/yyyy`,`p-label`,`Date end`,1,`po-md-6`,3,`p-min-date`],[`formControlName`,`origin`,`p-placeholder`,`Flight origin`,`p-label`,`Origin`,1,`po-md-6`],[`formControlName`,`destination`,`p-label`,`Destination`,`p-placeholder`,`Flight destination`,1,`po-md-6`],[`clas`,`po-row`],[`formControlName`,`ticketClass`,`p-label`,`Class`,1,`po-md-6`,3,`p-options`],[`formControlName`,`accompany`,`p-label`,`Accompany`,1,`po-md-6`,3,`p-options`],[`name`,`applyButton`,`p-label`,`Apply`,1,`po-md-3`,`po-offset-md-9`,`po-offset-lg-9`,3,`p-click`,`p-disabled`]],template:function(r,i){r&1&&(jc(0,`form`,0)(1,`div`,1)(2,`po-datepicker`,2),JN(),wg(),jc(3,`po-datepicker`,3),JN(),wg()(),jc(4,`div`,1)(5,`po-input`,4),JN(),wg(),jc(6,`po-input`,5),JN(),wg()(),jc(7,`div`,6)(8,`po-select`,7),JN(),wg(),jc(9,`po-select`,8),JN(),wg()(),jc(10,`div`,1)(11,`po-button`,9),mt(`p-click`,function(){return i.apply(i.formAirfare)}),wg()()()),r&2&&(jE(`formGroup`,i.formAirfare),rg(2),jE(`p-max-date`,i.formAirfare.get(`endDate`).value),t0(),rg(),jE(`p-min-date`,i.formAirfare.get(`startDate`).value),t0(),rg(2),t0(),rg(),t0(),rg(2),jE(`p-options`,i.ticketClassOptions),t0(),rg(),jE(`p-options`,i.accompanyNumber),t0(),rg(2),jE(`p-disabled`,i.formAirfare.invalid))},dependencies:[wK,CK,EK,SF,kF,ni,Rte,A5,moe],encapsulation:2,changeDetection:1})}return o})();var Qe=o=>({"docs-sample-code-tabs":o});var De=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-datepicker-airfare-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Datepicker - Airfare Reactive Form`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form [formGroup]="formAirfare">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-datepicker-airfare-reactive-form`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Qe,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ke],encapsulation:2,changeDetection:1})}return o})();var we=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-datepicker-doc`]],standalone:!1,decls:1321,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3schools.com/js/js_dates.asp`],[`href`,`https://www.w3schools.com/jsref/jsref_setfullyear.asp`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`href`,`/documentation/po-i18n`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`PoDatepickerIsoFormat`],[`pan`,``,1,`docs-api-property-type`,`Date`],[`pan`,``,1,`docs-api-property-type`,`'month-year'`],[`pan`,``,1,`docs-api-property-type`,`'year'`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoDatepickerComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`O `),jc(24,`code`),iO(25,`po-datepicker`),wg(),iO(26,` é um componente específico para manipulação de datas permitindo a digitação e / ou seleção.`),wg(),jc(27,`p`),iO(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),jc(29,`code`),iO(30,`p-format`),wg(),iO(31,`).`),wg(),jc(32,`p`),iO(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),jc(34,`code`),iO(35,`p-locale`),wg(),iO(36,`.`),wg(),jc(37,`p`),iO(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),wg(),jc(39,`blockquote`)(40,`p`),iO(41,`Por padrão, o formato de saída do `),jc(42,`em`),iO(43,`model`),wg(),iO(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),jc(45,`code`),iO(46,`p-iso-format`),wg(),iO(47,` provê esse controle independentemente do formato de entrada. Veja abaixo os formatos disponíveis:`),wg()(),jc(48,`ul`)(49,`li`)(50,`p`),iO(51,`Formato de entrada e saída (E8601DZw) - `),jc(52,`code`),iO(53,`'2017-11-28T00:00:00-02:00'`),wg(),iO(54,`;`),wg()(),jc(55,`li`)(56,`p`),iO(57,`Formato de entrada e saída (E8601DAw) - `),jc(58,`code`),iO(59,`'2017-11-28'`),wg(),iO(60,`;`),wg()(),jc(61,`li`)(62,`p`),iO(63,`Formato de entrada (Date) - `),jc(64,`code`),iO(65,`new Date(2017, 10, 28)`),wg(),iO(66,` e saída (E8601DAw) - `),jc(67,`code`),iO(68,`'2017-11-28'`),wg(),iO(69,`;`),wg()()(),jc(70,`p`)(71,`strong`),iO(72,`Importante:`),wg()(),jc(73,`ul`)(74,`li`),iO(75,`Para utilizar datas com ano inferior a 100, verificar o comportamento do `),jc(76,`a`,6)(77,`code`),iO(78,`new Date`),wg()(),iO(79,`
e utilizar o m\xE9todo `),jc(80,`a`,7)(81,`code`),iO(82,`setFullYear`),wg()(),iO(83,`.`),wg(),jc(84,`li`),iO(85,`Caso a data esteja inválida, o `),jc(86,`code`),iO(87,`model`),wg(),iO(88,` receberá `),jc(89,`strong`),iO(90,`'Data inválida'`),wg(),iO(91,`.`),wg(),jc(92,`li`),iO(93,`Caso o `),jc(94,`code`),iO(95,`input`),wg(),iO(96,` esteja passando um `),jc(97,`code`),iO(98,`[(ngModel)]`),wg(),iO(99,`, mas não tenha um `),jc(100,`code`),iO(101,`name`),wg(),iO(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),jc(103,`code`),iO(104,`[ngModelOptions]="{standalone: true}"`),wg(),iO(105,`).`),wg()(),jc(106,`p`),iO(107,`Exemplo:`),wg(),jc(108,`pre`)(109,`code`),iO(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),wg()(),jc(111,`blockquote`)(112,`p`),iO(113,`Não esqueça de importar o `),jc(114,`code`),iO(115,`FormsModule`),wg(),iO(116,` em seu módulo, tal como para utilizar o `),jc(117,`code`),iO(118,`input default`),wg(),iO(119,`.`),wg()(),jc(120,`h4`),iO(121,`Tokens customizáveis`),wg(),jc(122,`p`),iO(123,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),nu(124,`br`),iO(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),jc(126,`code`),iO(127,`.po-input`),wg()(),jc(128,`blockquote`)(129,`p`),iO(130,`Para maiores informações, acesse o guia `),jc(131,`a`,8),iO(132,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(133,`.`),wg()(),jc(134,`table`)(135,`thead`)(136,`tr`)(137,`th`),iO(138,`Propriedade`),wg(),jc(139,`th`),iO(140,`Descrição`),wg(),jc(141,`th`),iO(142,`Valor Padrão`),wg()()(),jc(143,`tbody`)(144,`tr`)(145,`td`)(146,`strong`),iO(147,`Default Values`),wg()(),nu(148,`td`)(149,`td`),wg(),jc(150,`tr`)(151,`td`)(152,`code`),iO(153,`--font-family`),wg()(),jc(154,`td`),iO(155,`Família tipográfica usada`),wg(),jc(156,`td`)(157,`code`),iO(158,`var(--font-family-theme)`),wg()()(),jc(159,`tr`)(160,`td`)(161,`code`),iO(162,`--font-size`),wg()(),jc(163,`td`),iO(164,`Tamanho da fonte`),wg(),jc(165,`td`)(166,`code`),iO(167,`var(--font-size-default)`),wg()()(),jc(168,`tr`)(169,`td`)(170,`code`),iO(171,`--text-color-placeholder`),wg(),iO(172,` \xA0`),wg(),jc(173,`td`),iO(174,`Cor principal do texto do placeholder`),wg(),jc(175,`td`)(176,`code`),iO(177,`var(--color-neutral-light-30)`),wg()()(),jc(178,`tr`)(179,`td`)(180,`code`),iO(181,`--color`),wg()(),jc(182,`td`),iO(183,`Cor principal do datepicker`),wg(),jc(184,`td`)(185,`code`),iO(186,`var(--color-neutral-dark-70)`),wg()()(),jc(187,`tr`)(188,`td`)(189,`code`),iO(190,`--background`),wg()(),jc(191,`td`),iO(192,`Cor de background`),wg(),jc(193,`td`)(194,`code`),iO(195,`var(--color-neutral-light-05)`),wg()()(),jc(196,`tr`)(197,`td`)(198,`code`),iO(199,`--padding`),wg()(),jc(200,`td`),iO(201,`Preenchimento`),wg(),jc(202,`td`)(203,`code`),iO(204,`0 0.5rem`),wg()()(),jc(205,`tr`)(206,`td`)(207,`code`),iO(208,`--text-color`),wg()(),jc(209,`td`),iO(210,`Cor do texto`),wg(),jc(211,`td`)(212,`code`),iO(213,`var(--color-neutral-dark-90)`),wg()()(),jc(214,`tr`)(215,`td`)(216,`code`),iO(217,`--field-container-title-justify`),wg()(),jc(218,`td`),iO(219,`Alinhamento horizontal do título (`),jc(220,`code`),iO(221,`justify-content`),wg(),iO(222,`)`),wg(),jc(223,`td`)(224,`code`),iO(225,`space-between`),wg()()(),jc(226,`tr`)(227,`td`)(228,`code`),iO(229,`--field-container-title-flex`),wg()(),jc(230,`td`),iO(231,`Flex do título (`),jc(232,`code`),iO(233,`flex`),wg(),iO(234,`)`),wg(),jc(235,`td`)(236,`code`),iO(237,`1 auto`),wg()()(),jc(238,`tr`)(239,`td`)(240,`strong`),iO(241,`Hover`),wg()(),nu(242,`td`)(243,`td`),wg(),jc(244,`tr`)(245,`td`)(246,`code`),iO(247,`--color-hover`),wg()(),jc(248,`td`),iO(249,`Cor principal no estado hover`),wg(),jc(250,`td`)(251,`code`),iO(252,`var(--color-brand-01-dark)`),wg()()(),jc(253,`tr`)(254,`td`)(255,`code`),iO(256,`--background-hover`),wg()(),jc(257,`td`),iO(258,`Cor de background no estado hover`),wg(),jc(259,`td`)(260,`code`),iO(261,`var(--color-brand-01-lightest)`),wg()()(),jc(262,`tr`)(263,`td`)(264,`strong`),iO(265,`Focused`),wg()(),nu(266,`td`)(267,`td`),wg(),jc(268,`tr`)(269,`td`)(270,`code`),iO(271,`--color-focused`),wg()(),jc(272,`td`),iO(273,`Cor principal no estado de focus`),wg(),jc(274,`td`)(275,`code`),iO(276,`var(--color-action-default)`),wg()()(),jc(277,`tr`)(278,`td`)(279,`code`),iO(280,`--outline-color-focused`),wg()(),jc(281,`td`),iO(282,`Cor do outline do estado de focus`),wg(),jc(283,`td`)(284,`code`),iO(285,`var(--color-action-focus)`),wg()()(),jc(286,`tr`)(287,`td`)(288,`strong`),iO(289,`Disabled`),wg()(),nu(290,`td`)(291,`td`),wg(),jc(292,`tr`)(293,`td`)(294,`code`),iO(295,`--color-disabled`),wg()(),jc(296,`td`),iO(297,`Cor principal no estado disabled`),wg(),jc(298,`td`)(299,`code`),iO(300,`var(--color-neutral-light-30)`),wg()()(),jc(301,`tr`)(302,`td`)(303,`code`),iO(304,`--background-disabled`),wg()(),jc(305,`td`),iO(306,`Cor de background no estado disabled \xA0`),wg(),jc(307,`td`)(308,`code`),iO(309,`var(--color-neutral-light-20)`),wg()()(),jc(310,`tr`)(311,`td`)(312,`code`),iO(313,`--text-color-disabled`),wg()(),jc(314,`td`),iO(315,`Cor do texto no estado disabled`),wg(),jc(316,`td`)(317,`code`),iO(318,`var(--color-neutral-dark-70)`),wg()()()()()(),jc(319,`div`,9)(320,`h4`,10),iO(321,`Seletor`),wg(),jc(322,`pre`,11),iO(323,`<po-datepicker
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
`),wg()(),jc(324,`h4`,12),iO(325,`Propriedades`),wg(),jc(326,`table`,13)(327,`tr`,14)(328,`th`,15),iO(329,`Nome`),wg(),jc(330,`th`,15),iO(331,`Tipo`),wg(),jc(332,`th`,15),iO(333,`Padrão`),wg(),jc(334,`th`,15),iO(335,`Descrição`),wg()(),jc(336,`tr`,16)(337,`td`,17)(338,`div`,18)(339,`span`,19),iO(340,`p-locale`),nu(341,`br`),wg()()(),jc(342,`td`,20)(343,`code`,21),iO(344,`string`),wg()(),jc(345,`td`,22),iO(346,`-`),wg(),jc(347,`td`,23)(348,`em`)(349,`strong`),iO(350,`(opcional)`),wg()(),jc(351,`p`),iO(352,`Idioma do Datepicker.`),wg(),jc(353,`blockquote`)(354,`p`),iO(355,`O locale padrão sera recuperado com base no `),jc(356,`a`,24)(357,`code`),iO(358,`PoI18nService`),wg()(),iO(359,` ou `),jc(360,`em`),iO(361,`browser`),wg(),iO(362,`.`),wg()()()(),jc(363,`tr`,16)(364,`td`,17)(365,`div`,25)(366,`span`,26),iO(367,` (p-additional-help)`),nu(368,`br`),wg()(),jc(369,`div`,27),iO(370,`Deprecated`),wg()(),jc(371,`td`,20)(372,`code`,28),iO(373,`EventEmitter`),wg()(),jc(374,`td`,22),iO(375,`-`),wg(),jc(376,`td`,23)(377,`em`)(378,`strong`),iO(379,`(opcional)`),wg()(),jc(380,`p`),iO(381,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(382,`blockquote`)(383,`p`),iO(384,`Essa propriedade está `),jc(385,`strong`),iO(386,`depreciada`),wg(),iO(387,` e será removida na versão `),jc(388,`code`),iO(389,`23.x.x`),wg(),iO(390,`. Recomendamos utilizar a propriedade `),jc(391,`code`),iO(392,`p-helper`),wg(),iO(393,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(394,`tr`,16)(395,`td`,17)(396,`div`,18)(397,`span`,19),iO(398,` p-additional-help-tooltip`),nu(399,`br`),wg()(),jc(400,`div`,27),iO(401,`Deprecated`),wg()(),jc(402,`td`,20)(403,`code`,21),iO(404,`string`),wg()(),jc(405,`td`,22),iO(406,`-`),wg(),jc(407,`td`,23)(408,`em`)(409,`strong`),iO(410,`(opcional)`),wg()(),jc(411,`p`),iO(412,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(413,`code`),iO(414,`po-helper`),wg(),iO(415,`.
`),jc(416,`strong`),iO(417,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(418,`blockquote`)(419,`p`),iO(420,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(421,`blockquote`)(422,`p`),iO(423,`Essa propriedade está `),jc(424,`strong`),iO(425,`depreciada`),wg(),iO(426,` e será removida na versão `),jc(427,`code`),iO(428,`23.x.x`),wg(),iO(429,`. Recomendamos utilizar a propriedade `),jc(430,`code`),iO(431,`p-helper`),wg(),iO(432,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(433,`tr`,16)(434,`td`,17)(435,`div`,18)(436,`span`,19),iO(437,` p-append-in-body`),nu(438,`br`),wg()()(),jc(439,`td`,20)(440,`code`,29),iO(441,`boolean`),wg()(),jc(442,`td`,22)(443,`p`)(444,`code`),iO(445,`false`),wg()()(),jc(446,`td`,23)(447,`em`)(448,`strong`),iO(449,`(opcional)`),wg()(),jc(450,`p`),iO(451,`Define que o `),jc(452,`code`),iO(453,`calendar`),wg(),iO(454,` e/ou tooltip (`),jc(455,`code`),iO(456,`p-additional-help-tooltip`),wg(),iO(457,` e/ou `),jc(458,`code`),iO(459,`p-error-limit`),wg(),iO(460,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),wg(),jc(461,`blockquote`)(462,`p`),iO(463,`Quando utilizado com `),jc(464,`code`),iO(465,`p-helper`),wg(),iO(466,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(467,`tr`,16)(468,`td`,17)(469,`div`,18)(470,`span`,19),iO(471,` p-auto-focus`),nu(472,`br`),wg()()(),jc(473,`td`,20)(474,`code`,29),iO(475,`boolean`),wg()(),jc(476,`td`,22)(477,`p`)(478,`code`),iO(479,`false`),wg()()(),jc(480,`td`,23)(481,`em`)(482,`strong`),iO(483,`(opcional)`),wg()(),jc(484,`p`),iO(485,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(486,`blockquote`)(487,`p`),iO(488,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(489,`tr`,16)(490,`td`,17)(491,`div`,25)(492,`span`,26),iO(493,` (p-change-model)`),nu(494,`br`),wg()()(),jc(495,`td`,20)(496,`code`,28),iO(497,`EventEmitter`),wg()(),jc(498,`td`,22),iO(499,`-`),wg(),jc(500,`td`,23)(501,`em`)(502,`strong`),iO(503,`(opcional)`),wg()(),jc(504,`p`),iO(505,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(506,`code`),iO(507,`setValue`),wg(),iO(508,`, `),jc(509,`code`),iO(510,`patchValue`),wg(),iO(511,`, carregamento assíncrono).`),wg(),jc(512,`p`),iO(513,`Diferentemente do `),jc(514,`code`),iO(515,`p-change`),wg(),iO(516,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(517,`code`),iO(518,`p-change-model`),wg(),iO(519,` cobre todos os cenários de alteração de valor.`),wg(),jc(520,`p`),iO(521,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(522,`tr`,16)(523,`td`,17)(524,`div`,18)(525,`span`,19),iO(526,`p-clean`),nu(527,`br`),wg()()(),jc(528,`td`,20)(529,`code`,29),iO(530,`boolean`),wg()(),jc(531,`td`,22),iO(532,`-`),wg(),jc(533,`td`,23)(534,`em`)(535,`strong`),iO(536,`(opcional)`),wg()(),jc(537,`p`),iO(538,`Habilita ação para limpar o campo.`),wg()()(),jc(539,`tr`,16)(540,`td`,17)(541,`div`,18)(542,`span`,19),iO(543,` p-compact-label`),nu(544,`br`),wg()()(),jc(545,`td`,20)(546,`code`,29),iO(547,`boolean`),wg()(),jc(548,`td`,22)(549,`p`)(550,`code`),iO(551,`false`),wg()()(),jc(552,`td`,23)(553,`em`)(554,`strong`),iO(555,`(opcional)`),wg()(),jc(556,`p`),iO(557,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(558,`p`),iO(559,`Quando habilitado (`),jc(560,`code`),iO(561,`true`),wg(),iO(562,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(563,`ul`)(564,`li`)(565,`code`),iO(566,`po-label`),wg()(),jc(567,`li`)(568,`code`),iO(569,`p-requirement (showRequired)`),wg()(),jc(570,`li`)(571,`code`),iO(572,`po-helper`),wg()()(),jc(573,`p`),iO(574,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(575,`p`),iO(576,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(577,`ul`)(578,`li`)(579,`code`),iO(580,`--field-container-title-justify`),wg()(),jc(581,`li`)(582,`code`),iO(583,`--field-container-title-flex`),wg()()(),jc(584,`p`),iO(585,`Exemplo:`),wg(),jc(586,`pre`)(587,`code`),iO(588,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(589,`p`),iO(590,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(591,`tr`,16)(592,`td`,17)(593,`div`,18)(594,`span`,19),iO(595,`p-disabled`),nu(596,`br`),wg()()(),jc(597,`td`,20)(598,`code`,29),iO(599,`boolean`),wg()(),jc(600,`td`,22),iO(601,`-`),wg(),jc(602,`td`,23)(603,`em`)(604,`strong`),iO(605,`(opcional)`),wg()(),jc(606,`p`),iO(607,`Desabilita o campo.`),wg()()(),jc(608,`tr`,16)(609,`td`,17)(610,`div`,18)(611,`span`,19),iO(612,` p-error-async`),nu(613,`br`),wg()()(),jc(614,`td`,20)(615,`code`,30),iO(616,`(value) => Observable<boolean>`),wg()(),jc(617,`td`,22),iO(618,`-`),wg(),jc(619,`td`,23)(620,`em`)(621,`strong`),iO(622,`(opcional)`),wg()(),jc(623,`p`),iO(624,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),jc(625,`code`),iO(626,`change`),wg(),iO(627,`.`),wg()()(),jc(628,`tr`,16)(629,`td`,17)(630,`div`,18)(631,`span`,19),iO(632,` p-error-limit`),nu(633,`br`),wg()()(),jc(634,`td`,20)(635,`code`,29),iO(636,`boolean`),wg()(),jc(637,`td`,22)(638,`p`)(639,`code`),iO(640,`false`),wg()()(),jc(641,`td`,23)(642,`em`)(643,`strong`),iO(644,`(opcional)`),wg()(),jc(645,`p`),iO(646,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(647,`blockquote`)(648,`p`),iO(649,`Caso essa propriedade seja definida como `),jc(650,`code`),iO(651,`true`),wg(),iO(652,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(653,`tr`,16)(654,`td`,17)(655,`div`,18)(656,`span`,19),iO(657,` p-error-pattern`),nu(658,`br`),wg()()(),jc(659,`td`,20)(660,`code`,21),iO(661,`string`),wg()(),jc(662,`td`,22),iO(663,`-`),wg(),jc(664,`td`,23)(665,`em`)(666,`strong`),iO(667,`(opcional)`),wg()(),jc(668,`p`),iO(669,`Mensagem apresentada quando a data for inválida ou fora do período.`),wg(),jc(670,`blockquote`)(671,`p`),iO(672,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),jc(673,`code`),iO(674,`p-required-field-error-message`),wg(),iO(675,` em conjunto.`),wg()()()(),jc(676,`tr`,16)(677,`td`,17)(678,`div`,18)(679,`span`,19),iO(680,` p-format`),nu(681,`br`),wg()()(),jc(682,`td`,20)(683,`code`,21),iO(684,`string`),wg()(),jc(685,`td`,22)(686,`p`)(687,`code`),iO(688,`dd/mm/yyyy`),wg()()(),jc(689,`td`,23)(690,`em`)(691,`strong`),iO(692,`(opcional)`),wg()(),jc(693,`p`),iO(694,`Formato de exibição da data.`),wg(),jc(695,`p`),iO(696,`Valores válidos:`),wg(),jc(697,`ul`)(698,`li`)(699,`code`),iO(700,`dd/mm/yyyy`),wg()(),jc(701,`li`)(702,`code`),iO(703,`mm/dd/yyyy`),wg()(),jc(704,`li`)(705,`code`),iO(706,`yyyy/mm/dd`),wg()()(),jc(707,`p`),iO(708,`Propriedade incompatível com as variações month-year e year.`),wg()()(),jc(709,`tr`,16)(710,`td`,17)(711,`div`,18)(712,`span`,19),iO(713,` p-help`),nu(714,`br`),wg()()(),jc(715,`td`,20)(716,`code`,21),iO(717,`string`),wg()(),jc(718,`td`,22),iO(719,`-`),wg(),jc(720,`td`,23)(721,`em`)(722,`strong`),iO(723,`(opcional)`),wg()(),jc(724,`p`),iO(725,`Texto de apoio do campo.`),wg()()(),jc(726,`tr`,16)(727,`td`,17)(728,`div`,18)(729,`span`,19),iO(730,` p-iso-format`),nu(731,`br`),wg()()(),jc(732,`td`,20)(733,`code`,31),iO(734,`PoDatepickerIsoFormat`),wg()(),jc(735,`td`,22),iO(736,`-`),wg(),jc(737,`td`,23)(738,`em`)(739,`strong`),iO(740,`(opcional)`),wg()(),jc(741,`p`),iO(742,`Padrão de formatação para saída do `),jc(743,`em`),iO(744,`model`),wg(),iO(745,`, independentemente do formato de entrada.`),wg(),jc(746,`blockquote`)(747,`p`),iO(748,`Veja os valores válidos no `),jc(749,`em`),iO(750,`enum`),wg(),jc(751,`code`),iO(752,`PoDatepickerIsoFormat`),wg(),iO(753,`.`),wg()(),jc(754,`p`),iO(755,`Propriedade incompatível com as variações month-year e year.`),wg()()(),jc(756,`tr`,16)(757,`td`,17)(758,`div`,25)(759,`span`,26),iO(760,` (p-keydown)`),nu(761,`br`),wg()()(),jc(762,`td`,20)(763,`code`,28),iO(764,`EventEmitter`),wg()(),jc(765,`td`,22),iO(766,`-`),wg(),jc(767,`td`,23)(768,`em`)(769,`strong`),iO(770,`(opcional)`),wg()(),jc(771,`p`),iO(772,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(773,`code`),iO(774,`KeyboardEvent`),wg(),iO(775,` com informações sobre a tecla.`),wg()()(),jc(776,`tr`,16)(777,`td`,17)(778,`div`,18)(779,`span`,19),iO(780,` p-label`),nu(781,`br`),wg()()(),jc(782,`td`,20)(783,`code`,21),iO(784,`string`),wg()(),jc(785,`td`,22),iO(786,`-`),wg(),jc(787,`td`,23)(788,`em`)(789,`strong`),iO(790,`(opcional)`),wg()(),jc(791,`p`),iO(792,`Rótulo do campo.`),wg()()(),jc(793,`tr`,16)(794,`td`,17)(795,`div`,18)(796,`span`,19),iO(797,` p-label-text-wrap`),nu(798,`br`),wg()()(),jc(799,`td`,20)(800,`code`,29),iO(801,`boolean`),wg()(),jc(802,`td`,22)(803,`p`)(804,`code`),iO(805,`false`),wg()()(),jc(806,`td`,23)(807,`em`)(808,`strong`),iO(809,`(opcional)`),wg()(),jc(810,`p`),iO(811,`Habilita a quebra automática do texto da propriedade `),jc(812,`code`),iO(813,`p-label`),wg(),iO(814,`. Quando `),jc(815,`code`),iO(816,`p-label-text-wrap`),wg(),iO(817,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(818,`tr`,16)(819,`td`,17)(820,`div`,18)(821,`span`,19),iO(822,` p-loading`),nu(823,`br`),wg()()(),jc(824,`td`,20)(825,`code`,29),iO(826,`boolean`),wg()(),jc(827,`td`,22)(828,`p`)(829,`code`),iO(830,`false`),wg()()(),jc(831,`td`,23)(832,`em`)(833,`strong`),iO(834,`(opcional)`),wg()(),jc(835,`p`),iO(836,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(837,`tr`,16)(838,`td`,17)(839,`div`,18)(840,`span`,19),iO(841,` p-max-date`),nu(842,`br`),wg()()(),jc(843,`td`,20)(844,`code`,21),iO(845,`string `),wg(),jc(846,`code`,32),iO(847,` Date`),wg()(),jc(848,`td`,22),iO(849,`-`),wg(),jc(850,`td`,23)(851,`em`)(852,`strong`),iO(853,`(opcional)`),wg()(),jc(854,`p`),iO(855,`Define uma data máxima para o `),jc(856,`code`),iO(857,`po-datepicker`),wg(),iO(858,`.`),wg()()(),jc(859,`tr`,16)(860,`td`,17)(861,`div`,18)(862,`span`,19),iO(863,` p-min-date`),nu(864,`br`),wg()()(),jc(865,`td`,20)(866,`code`,21),iO(867,`string `),wg(),jc(868,`code`,32),iO(869,` Date`),wg()(),jc(870,`td`,22),iO(871,`-`),wg(),jc(872,`td`,23)(873,`em`)(874,`strong`),iO(875,`(opcional)`),wg()(),jc(876,`p`),iO(877,`Define uma data mínima para o `),jc(878,`code`),iO(879,`po-datepicker`),wg(),iO(880,`.`),wg()()(),jc(881,`tr`,16)(882,`td`,17)(883,`div`,18)(884,`span`,19),iO(885,` p-mode`),nu(886,`br`),wg()()(),jc(887,`td`,20)(888,`code`,33),iO(889,`'month-year' `),wg(),jc(890,`code`,34),iO(891,` 'year'`),wg()(),jc(892,`td`,22),iO(893,`-`),wg(),jc(894,`td`,23)(895,`em`)(896,`strong`),iO(897,`(opcional)`),wg()(),jc(898,`p`),iO(899,`Define o modo de operação do datepicker.`),wg(),jc(900,`p`),iO(901,`Permite configurar o componente para seleção de:`),wg(),jc(902,`ul`)(903,`li`),iO(904,`Mês e ano (`),jc(905,`code`),iO(906,`month-year`),wg(),iO(907,`);`),wg(),jc(908,`li`),iO(909,`Apenas ano (`),jc(910,`code`),iO(911,`year`),wg(),iO(912,`).`),wg()()()(),jc(913,`tr`,16)(914,`td`,17)(915,`div`,18)(916,`span`,19),iO(917,` p-no-autocomplete`),nu(918,`br`),wg()()(),jc(919,`td`,20)(920,`code`,29),iO(921,`boolean`),wg()(),jc(922,`td`,22)(923,`p`)(924,`code`),iO(925,`false`),wg()()(),jc(926,`td`,23)(927,`em`)(928,`strong`),iO(929,`(opcional)`),wg()(),jc(930,`p`),iO(931,`Define a propriedade nativa `),jc(932,`code`),iO(933,`autocomplete`),wg(),iO(934,` do campo como `),jc(935,`code`),iO(936,`off`),wg(),iO(937,`.`),wg()()(),jc(938,`tr`,16)(939,`td`,17)(940,`div`,25)(941,`span`,26),iO(942,` (p-blur)`),nu(943,`br`),wg()()(),jc(944,`td`,20)(945,`code`,28),iO(946,`EventEmitter`),wg()(),jc(947,`td`,22),iO(948,`-`),wg(),jc(949,`td`,23)(950,`em`)(951,`strong`),iO(952,`(opcional)`),wg()(),jc(953,`p`),iO(954,`Evento disparado ao sair do campo.`),wg()()(),jc(955,`tr`,16)(956,`td`,17)(957,`div`,25)(958,`span`,26),iO(959,` (p-change)`),nu(960,`br`),wg()()(),jc(961,`td`,20)(962,`code`,28),iO(963,`EventEmitter`),wg()(),jc(964,`td`,22),iO(965,`-`),wg(),jc(966,`td`,23)(967,`em`)(968,`strong`),iO(969,`(opcional)`),wg()(),jc(970,`p`),iO(971,`Evento disparado ao alterar valor do campo.`),wg()()(),jc(972,`tr`,16)(973,`td`,17)(974,`div`,18)(975,`span`,19),iO(976,` p-optional`),nu(977,`br`),wg()()(),jc(978,`td`,20)(979,`code`,29),iO(980,`boolean`),wg()(),jc(981,`td`,22)(982,`p`)(983,`code`),iO(984,`false`),wg()()(),jc(985,`td`,23)(986,`em`)(987,`strong`),iO(988,`(opcional)`),wg()(),jc(989,`p`),iO(990,`Define se a indicação de campo opcional será exibida.`),wg(),jc(991,`blockquote`)(992,`p`),iO(993,`Não será exibida a indicação se:`),wg()(),jc(994,`ul`)(995,`li`),iO(996,`O campo conter `),jc(997,`code`),iO(998,`p-required`),wg(),iO(999,`;`),wg(),jc(1e3,`li`),iO(1001,`Não possuir `),jc(1002,`code`),iO(1003,`p-help`),wg(),iO(1004,` e/ou `),jc(1005,`code`),iO(1006,`p-label`),wg(),iO(1007,`.`),wg()()()(),jc(1008,`tr`,16)(1009,`td`,17)(1010,`div`,18)(1011,`span`,19),iO(1012,` p-placeholder`),nu(1013,`br`),wg()()(),jc(1014,`td`,20)(1015,`code`,21),iO(1016,`string`),wg()(),jc(1017,`td`,22),iO(1018,`-`),wg(),jc(1019,`td`,23)(1020,`em`)(1021,`strong`),iO(1022,`(opcional)`),wg()(),jc(1023,`p`),iO(1024,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),wg()()(),jc(1025,`tr`,16)(1026,`td`,17)(1027,`div`,18)(1028,`span`,19),iO(1029,` p-helper`),nu(1030,`br`),wg()()(),jc(1031,`td`,20)(1032,`code`,35),iO(1033,`PoHelperOptions `),wg(),jc(1034,`code`,21),iO(1035,` string`),wg()(),jc(1036,`td`,22),iO(1037,`-`),wg(),jc(1038,`td`,23)(1039,`em`)(1040,`strong`),iO(1041,`(opcional)`),wg()(),jc(1042,`p`),iO(1043,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(1044,`code`),iO(1045,`p-label`),wg(),iO(1046,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(1047,`code`),iO(1048,`p-label`),wg(),iO(1049,`.`),wg(),jc(1050,`blockquote`)(1051,`p`),iO(1052,`Para mais informações acesse: `),jc(1053,`a`,36),iO(1054,`https://po-ui.io/documentation/po-helper`),wg(),iO(1055,`.`),wg()(),jc(1056,`blockquote`)(1057,`p`),iO(1058,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(1059,`code`),iO(1060,`p-additional-help-tooltip`),wg(),iO(1061,` e `),jc(1062,`code`),iO(1063,`p-additional-help`),wg(),iO(1064,`) será ignorado.`),wg()()()(),jc(1065,`tr`,16)(1066,`td`,17)(1067,`div`,18)(1068,`span`,19),iO(1069,`p-readonly`),nu(1070,`br`),wg()()(),jc(1071,`td`,20)(1072,`code`,29),iO(1073,`boolean`),wg()(),jc(1074,`td`,22),iO(1075,`-`),wg(),jc(1076,`td`,23)(1077,`em`)(1078,`strong`),iO(1079,`(opcional)`),wg()(),jc(1080,`p`),iO(1081,`Torna o elemento somente leitura.`),wg()()(),jc(1082,`tr`,16)(1083,`td`,17)(1084,`div`,18)(1085,`span`,19),iO(1086,`p-required`),nu(1087,`br`),wg()()(),jc(1088,`td`,20)(1089,`code`,29),iO(1090,`boolean`),wg()(),jc(1091,`td`,22)(1092,`p`)(1093,`code`),iO(1094,`false`),wg()()(),jc(1095,`td`,23)(1096,`em`)(1097,`strong`),iO(1098,`(opcional)`),wg()(),jc(1099,`p`),iO(1100,`Define que o campo será obrigatório.`),wg()()(),jc(1101,`tr`,16)(1102,`td`,17)(1103,`div`,18)(1104,`span`,19),iO(1105,` p-required-field-error-message`),nu(1106,`br`),wg()()(),jc(1107,`td`,20)(1108,`code`,29),iO(1109,`boolean`),wg()(),jc(1110,`td`,22)(1111,`p`)(1112,`code`),iO(1113,`false`),wg()()(),jc(1114,`td`,23)(1115,`em`)(1116,`strong`),iO(1117,`(opcional)`),wg()(),jc(1118,`p`),iO(1119,`Exibe a mensagem setada na propriedade `),jc(1120,`code`),iO(1121,`p-error-pattern`),wg(),iO(1122,` se o campo estiver vazio e for requerido.`),wg(),jc(1123,`blockquote`)(1124,`p`),iO(1125,`Necessário que a propriedade `),jc(1126,`code`),iO(1127,`p-required`),wg(),iO(1128,` esteja habilitada.`),wg()()()(),jc(1129,`tr`,16)(1130,`td`,17)(1131,`div`,18)(1132,`span`,19),iO(1133,` p-show-required`),nu(1134,`br`),wg()()(),jc(1135,`td`,20)(1136,`code`,29),iO(1137,`boolean`),wg()(),jc(1138,`td`,22),iO(1139,`-`),wg(),jc(1140,`td`,23)(1141,`p`),iO(1142,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(1143,`blockquote`)(1144,`p`),iO(1145,`Não será exibida a indicação se:`),wg()(),jc(1146,`ul`)(1147,`li`),iO(1148,`Não possuir `),jc(1149,`code`),iO(1150,`p-help`),wg(),iO(1151,` e/ou `),jc(1152,`code`),iO(1153,`p-label`),wg(),iO(1154,`.`),wg()()()(),jc(1155,`tr`,16)(1156,`td`,17)(1157,`div`,18)(1158,`span`,19),iO(1159,` p-size`),nu(1160,`br`),wg()()(),jc(1161,`td`,20)(1162,`code`,21),iO(1163,`string`),wg()(),jc(1164,`td`,22)(1165,`p`)(1166,`code`),iO(1167,`medium`),wg()()(),jc(1168,`td`,23)(1169,`em`)(1170,`strong`),iO(1171,`(opcional)`),wg()(),jc(1172,`p`),iO(1173,`Define o tamanho do componente:`),wg(),jc(1174,`ul`)(1175,`li`)(1176,`code`),iO(1177,`small`),wg(),iO(1178,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(1179,`li`)(1180,`code`),iO(1181,`medium`),wg(),iO(1182,`: altura do input como 44px.`),wg()(),jc(1183,`blockquote`)(1184,`p`),iO(1185,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(1186,`code`),iO(1187,`medium`),wg(),iO(1188,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(1189,`a`,37),iO(1190,`po-theme`),wg(),iO(1191,`.`),wg()()()(),jc(1192,`tr`,16)(1193,`td`,17)(1194,`div`,18)(1195,`span`,19),iO(1196,` p-year-range-limit`),nu(1197,`br`),wg()()(),jc(1198,`td`,20)(1199,`code`,38),iO(1200,`number`),wg()(),jc(1201,`td`,22)(1202,`p`),iO(1203,`150`),wg()(),jc(1204,`td`,23)(1205,`p`),iO(1206,`Define o limite de anos exibidos nas variações `),jc(1207,`code`),iO(1208,`month-year`),wg(),iO(1209,` e `),jc(1210,`code`),iO(1211,`year`),wg(),iO(1212,`,
considerando a data atual como refer\xEAncia.`),wg(),jc(1213,`p`),iO(1214,`O valor informado determina o intervalo de anos anterior e posterior
\xE0 data corrente que ser\xE1 disponibilizado para sele\xE7\xE3o.`),wg()()()(),jc(1215,`h3`,12),iO(1216,`Métodos`),wg(),jc(1217,`table`,39)(1218,`tr`,16)(1219,`th`,40)(1220,`div`,18)(1221,`h4`)(1222,`span`,19),iO(1223,` focus `),wg()()()()(),jc(1224,`tr`,23)(1225,`td`,23)(1226,`p`),iO(1227,`Função que atribui foco ao componente.`),wg(),jc(1228,`p`),iO(1229,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(1230,`pre`)(1231,`code`),iO(1232,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),wg()()()()(),nu(1233,`br`),jc(1234,`table`,39)(1235,`tr`,16)(1236,`th`,40)(1237,`div`,18)(1238,`h4`)(1239,`span`,19),iO(1240,` showAdditionalHelp `),wg()()()()(),jc(1241,`tr`,23)(1242,`td`,23)(1243,`p`),iO(1244,`Método que exibe `),jc(1245,`code`),iO(1246,`p-helper`),wg(),iO(1247,` ou executa a ação definida em `),jc(1248,`code`),iO(1249,`p-helper{eventOnClick}`),wg(),iO(1250,` ou em `),jc(1251,`code`),iO(1252,`p-additionalHelp`),wg(),iO(1253,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(1254,`code`),iO(1255,`p-keydown`),wg(),iO(1256,`.`),wg(),jc(1257,`blockquote`)(1258,`p`),iO(1259,`Exibe ou oculta o conteúdo do componente `),jc(1260,`code`),iO(1261,`po-helper`),wg(),iO(1262,` quando o componente estiver com foco.`),wg()(),jc(1263,`pre`)(1264,`code`),iO(1265,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),wg()(),jc(1266,`pre`)(1267,`code`),iO(1268,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1269,`br`),jc(1270,`h3`),iO(1271,`Enums`),wg(),jc(1272,`h4`,4)(1273,`code`,5),iO(1274,`PoDatepickerIsoFormat`),wg()(),jc(1275,`div`,2)(1276,`p`)(1277,`em`),iO(1278,`Enum`),wg(),iO(1279,` que define o padrão de formatação das datas.`),wg(),jc(1280,`blockquote`)(1281,`p`),iO(1282,`Caso um formato padrão seja definido, o mesmo não será mais alterado de acordo com o formato de entrada.`),wg()()(),jc(1283,`h4`,12),iO(1284,`Propriedades`),wg(),jc(1285,`table`,13)(1286,`tr`,14)(1287,`th`,15),iO(1288,`Nome`),wg(),jc(1289,`th`,15),iO(1290,`Descrição`),wg()(),jc(1291,`tr`,16)(1292,`td`,17)(1293,`div`,18)(1294,`span`,19),iO(1295,` Basic`),nu(1296,`br`),wg()()(),jc(1297,`td`,23)(1298,`p`),iO(1299,`Padrão `),jc(1300,`strong`),iO(1301,`E8601DAw`),wg(),iO(1302,` (`),jc(1303,`em`),iO(1304,`yyyy-mm-dd`),wg(),iO(1305,`).`),wg()()(),jc(1306,`tr`,16)(1307,`td`,17)(1308,`div`,18)(1309,`span`,19),iO(1310,` Extended`),nu(1311,`br`),wg()()(),jc(1312,`td`,23)(1313,`p`),iO(1314,`Padrão `),jc(1315,`strong`),iO(1316,`E8601DZw`),wg(),iO(1317,` (`),jc(1318,`em`),iO(1319,`yyyy-mm-ddThh:mm:ss+|-hh:mm`),wg(),iO(1320,`).`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return o})();var Je=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:11,vars:4,consts:[[`p-title`,`Datepicker`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-datepicker-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-datepicker-basic-view`)(6,`sample-po-datepicker-labs-view`)(7,`sample-po-datepicker-year-view`)(8,`sample-po-datepicker-month-year-view`)(9,`sample-po-datepicker-airfare-view`)(10,`sample-po-datepicker-airfare-reactive-form-view`),wg()()()),r&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ge,Se,be,xe,Ce,De,we],encapsulation:2,changeDetection:1})}return o})()}];var _e=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[C1.forChild(Je),C1]})}return o})();var Rt=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[Ta,_e]})}return o})();export{Rt as DocPoDatepickerModule};