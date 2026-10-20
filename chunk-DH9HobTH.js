import{$r as Zn,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Lr as SF,N as Fne,Pi as mt,Ri as nu,Rt as _oe,Sr as Mm,Vi as p,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,i as _a,ir as EF,ji as mO,ki as kF,mn as ni,pa as wg,r as Ta,rt as Ote,ta as ue$1,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,xr as MK,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var de=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-decimal-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`decimal`,`p-label`,`PO Decimal`]],template:function(r,i){r&1&&nu(0,`po-decimal`,0)},dependencies:[Fne],encapsulation:2,changeDetection:1})}return l})();var Ce=l=>({"docs-sample-code-tabs":l});var pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-decimal-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Decimal Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-decimal-basic/sample-po-decimal-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-decimal-basic/sample-po-decimal-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-decimal-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ce,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,de],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{helperText;decimal;decimalsLength;event;displayFormat;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:`pt`,label:`Portuguese`},{value:`en`,label:`English`},{value:`ru`,label:`Russian`},{value:`es`,label:`Spanish`}];iconOptions=[{value:`an an-shopping-cart-simple`,label:`an an-shopping-cart-simple`},{value:`an an-currency-dollar-simple`,label:`an an-currency-dollar-simple`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.decimal=void 0,this.decimalsLength=void 0,this.event=``,this.displayFormat=void 0,this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder=``,this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size=`medium`,this.properties=[]}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-decimal-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`decimal`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-decimals-length`,`p-disabled`,`p-display-format`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-locale`,`p-error-pattern`,`p-max`,`p-min`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-thousand-maxlength`,`p-label-text-wrap`,`p-compact-label`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`displayFormat`,`p-clean`,``,`p-label`,`Display Format`,`p-help`,`Ex: >>>,>>9.99 | ->>9.99 | 999.9 | >>9.9<<`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`min`,`p-clean`,``,`p-label`,`Min`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-clean`,``,`p-label`,`Max`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`locale`,`p-clean`,``,`p-label`,`Locale`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`decimalsLength`,`p-clean`,``,`p-help`,`Máximo 15`,`p-label`,`Decimals max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`thousandMaxlength`,`p-clean`,``,`p-help`,`Máximo 13`,`p-label`,`Thousand max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Sx();jc(0,`po-decimal`,1),JN(),mt(`ngModelChange`,function(a){return i.decimal=a})(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3)(4,`po-info`,4),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.label,a)||(i.label=a),v_(a)}),wg(),jc(9,`po-input`,6),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.help,a)||(i.help=a),v_(a)}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.helperText,a)||(i.helperText=a),v_(a)}),wg(),jc(11,`po-input`,8),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.placeholder,a)||(i.placeholder=a),v_(a)}),wg(),jc(12,`po-input`,9),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.errorPattern,a)||(i.errorPattern=a),v_(a)}),wg(),jc(13,`po-input`,10),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.displayFormat,a)||(i.displayFormat=a),v_(a)}),wg(),jc(14,`po-select`,11),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.icon,a)||(i.icon=a),v_(a)}),wg(),jc(15,`po-number`,12),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.min,a)||(i.min=a),v_(a)}),wg(),jc(16,`po-number`,13),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.max,a)||(i.max=a),v_(a)}),wg(),jc(17,`po-select`,14),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.locale,a)||(i.locale=a),v_(a)}),wg(),jc(18,`po-number`,15),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.decimalsLength,a)||(i.decimalsLength=a),v_(a)}),wg(),jc(19,`po-number`,16),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.thousandMaxlength,a)||(i.thousandMaxlength=a),v_(a)}),wg(),jc(20,`po-checkbox-group`,17),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.properties,a)||(i.properties=a),v_(a)}),wg(),jc(21,`po-radio-group`,18),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.size,a)||(i.size=a),v_(a)}),wg(),jc(22,`div`,2)(23,`po-button`,19),mt(`p-click`,function(){return i.restore()}),wg()()()}r&2&&(jE(`ngModel`,i.decimal)(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-decimals-length`,i.decimalsLength)(`p-disabled`,i.properties.includes(`disabled`))(`p-display-format`,i.displayFormat)(`p-help`,i.help)(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-locale`,i.locale)(`p-error-pattern`,i.errorPattern)(`p-max`,i.max)(`p-min`,i.min)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-thousand-maxlength`,i.thousandMaxlength)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-error-limit`,i.properties?.includes(`errorLimit`)),t0(),rg(3),jE(`p-value`,i.decimal),rg(),jE(`p-value`,i.event),rg(4),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.help),t0(),rg(),ib(`ngModel`,i.helperText),t0(),rg(),ib(`ngModel`,i.placeholder),t0(),rg(),ib(`ngModel`,i.errorPattern),t0(),rg(),ib(`ngModel`,i.displayFormat),t0(),rg(),ib(`ngModel`,i.icon),jE(`p-options`,i.iconOptions),t0(),rg(),ib(`ngModel`,i.min),t0(),rg(),ib(`ngModel`,i.max),t0(),rg(),ib(`ngModel`,i.locale),jE(`p-options`,i.localeOptions),t0(),rg(),ib(`ngModel`,i.decimalsLength),jE(`p-max`,i.maxDecimalsLength),t0(),rg(),ib(`ngModel`,i.thousandMaxlength),jE(`p-max`,i.maxThousandMaxlength),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-columns`,4)(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,Fne,A5,doe,Ote,moe,_oe],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l});var ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-decimal-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Decimal Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-decimal-labs/sample-po-decimal-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-decimal
  class="po-md-12"
  name="decimal"
  [ngModel]="decimal"
  (ngModelChange)="decimal = $event"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-decimals-length]="decimalsLength"
  [p-disabled]="properties.includes('disabled')"
  [p-display-format]="displayFormat"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-locale]="locale"
  [p-error-pattern]="errorPattern"
  [p-max]="max"
  [p-min]="min"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-thousand-maxlength]="thousandMaxlength"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-decimal>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="decimal"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-input
    class="po-md-6"
    name="displayFormat"
    [(ngModel)]="displayFormat"
    p-clean
    p-label="Display Format"
    p-help="Ex: >>>,>>9.99 | ->>9.99 | 999.9 | >>9.9<<"
  >
  </po-input>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-select
    class="po-md-6 po-lg-3"
    name="locale"
    [(ngModel)]="locale"
    p-clean
    p-label="Locale"
    [p-options]="localeOptions"
  ></po-select>

  <po-number
    class="po-md-6 po-lg-3"
    name="decimalsLength"
    [(ngModel)]="decimalsLength"
    p-clean
    p-help="M\xE1ximo 15"
    p-label="Decimals max length"
    p-min="0"
    [p-max]="maxDecimalsLength"
  >
  </po-number>

  <po-number
    class="po-md-6 po-lg-3"
    name="thousandMaxlength"
    [(ngModel)]="thousandMaxlength"
    p-clean
    p-help="M\xE1ximo 13"
    p-label="Thousand max length"
    p-min="0"
    [p-max]="maxThousandMaxlength"
  >
  </po-number>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    [p-columns]="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-decimal-labs/sample-po-decimal-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-decimal-labs',
  templateUrl: './sample-po-decimal-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalLabsComponent implements OnInit {
  helperText: string;
  decimal: number;
  decimalsLength: number;
  event: string;
  displayFormat: string;
  help: string;
  icon: string;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  thousandMaxlength: number;
  errorPattern: string;
  max: number;
  min: number;
  size: string;

  public readonly localeOptions: Array<PoSelectOption> = [
    { value: 'pt', label: 'Portuguese' },
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Russian' },
    { value: 'es', label: 'Spanish' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-shopping-cart-simple', label: 'an an-shopping-cart-simple' },
    { value: 'an an-currency-dollar-simple', label: 'an an-currency-dollar-simple' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  get maxDecimalsLength() {
    return 16 - this.thousandMaxlength || 15;
  }

  get maxThousandMaxlength() {
    return 16 - this.decimalsLength || 13;
  }

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.decimal = undefined;
    this.decimalsLength = undefined;
    this.event = '';
    this.displayFormat = undefined;
    this.help = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = '';
    this.thousandMaxlength = undefined;
    this.errorPattern = undefined;
    this.max = undefined;
    this.min = undefined;
    this.size = 'medium';

    this.properties = [];
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-decimal-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,we,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,se],encapsulation:2,changeDetection:1})}return l})();var ue=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let p=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/p;this.hourlyWage=r}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-decimal-hourly-wage`]],standalone:!1,decls:16,vars:6,consts:[[`f`,`ngForm`],[1,`po-font-title`],[1,`po-row`],[`name`,`weekHours`,`p-label`,`Week Hours`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`workingDaysPerWeek`,`p-label`,`Working days per week`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=Sx();jc(0,`form`,null,0)(2,`div`,1),iO(3,`Calculate hourly wage`),wg(),nu(4,`po-divider`),jc(5,`div`,2)(6,`po-number`,3),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.weekHours,a)||(i.weekHours=a),v_(a)}),wg(),jc(7,`po-number`,4),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),v_(a)}),wg()(),jc(8,`div`,2)(9,`po-number`,5),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),v_(a)}),wg(),jc(10,`po-decimal`,6),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.salary,a)||(i.salary=a),v_(a)}),mt(`p-change`,function(){return i.calculate()}),wg()(),jc(11,`div`,2)(12,`po-decimal`,7),JN(),ob(`ngModelChange`,function(a){return y_(s),sO(i.hourlyWage,a)||(i.hourlyWage=a),v_(a)}),wg()(),jc(13,`div`,2)(14,`po-button`,8),mt(`p-click`,function(){y_(s);let a=Fx(1);return v_(a.reset())}),wg(),jc(15,`po-button`,9),mt(`p-click`,function(){return i.calculate()}),wg()()()}r&2&&(rg(6),ib(`ngModel`,i.weekHours),t0(),rg(),ib(`ngModel`,i.workingDaysPerWeek),t0(),rg(2),ib(`ngModel`,i.quantityDaysPerMonth),t0(),rg(),ib(`ngModel`,i.salary),t0(),rg(2),ib(`ngModel`,i.hourlyWage),t0(),rg(3),jE(`p-disabled`,!i.hourlyWage))},dependencies:[wK,CK,EK,TF,EF,ni,Lf,Fne,doe],encapsulation:2,changeDetection:1})}return l})();var ke=l=>({"docs-sample-code-tabs":l});var ge=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-decimal-hourly-wage-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Decimal - Hourly Wage`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form #f="ngForm">
  <div class="po-font-title">Calculate hourly wage</div>

  <po-divider />

  <div class="po-row">
    <po-number class="po-md-6" name="weekHours" [(ngModel)]="weekHours" p-label="Week Hours" p-required> </po-number>

    <po-number
      class="po-md-6"
      name="workingDaysPerWeek"
      [(ngModel)]="workingDaysPerWeek"
      p-label="Working days per week"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-number
      class="po-md-6"
      name="quantityDaysPerMonth"
      [(ngModel)]="quantityDaysPerMonth"
      p-label="Quantity days per month"
      p-required
    >
    </po-number>

    <po-decimal
      class="po-md-6"
      name="salary"
      [(ngModel)]="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-required
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="hourlyWage"
      [(ngModel)]="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-required
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="f.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="!hourlyWage"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-hourly-wage',
  templateUrl: './sample-po-decimal-hourly-wage.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalHourlyWageComponent {
  hourlyWage: number;
  quantityDaysPerMonth: number;
  salary: number;
  weekHours: number;
  workingDaysPerWeek: number;

  calculate() {
    const hours = (this.weekHours / this.workingDaysPerWeek) * this.quantityDaysPerMonth;
    const salary = this.salary / hours;
    this.hourlyWage = salary;
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-decimal-hourly-wage`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ke,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ue],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{formBuilder=p(MK);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,Mm.required],salary:[null,Mm.required],weekHours:[null,Mm.required],workingDaysPerWeek:[null,Mm.required]})}calculate(){let{weekHours:p,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:s}=this.formCalculateHourlyWage.value,a=s/(p/r*i);this.formCalculateHourlyWage.patchValue({hourlyWage:a})}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-decimal-hourly-wage-reactive-form`]],standalone:!1,decls:15,vars:2,consts:[[3,`formGroup`],[1,`po-font-title`],[1,`po-row`],[`formControlName`,`weekHours`,`p-label`,`Week Hours`,1,`po-md-6`],[`formControlName`,`workingDaysPerWeek`,`p-label`,`Working days per week`,1,`po-md-6`],[`formControlName`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,1,`po-md-6`],[`formControlName`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`p-change`],[`formControlName`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-thousand-maxlength`,`13`,1,`po-md-6`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){r&1&&(jc(0,`form`,0)(1,`div`,1),iO(2,`Calculate hourly wage`),wg(),nu(3,`po-divider`),jc(4,`div`,2)(5,`po-number`,3),JN(),wg(),jc(6,`po-number`,4),JN(),wg()(),jc(7,`div`,2)(8,`po-number`,5),JN(),wg(),jc(9,`po-decimal`,6),JN(),mt(`p-change`,function(){return i.calculate()}),wg()(),jc(10,`div`,2)(11,`po-decimal`,7),JN(),wg()(),jc(12,`div`,2)(13,`po-button`,8),mt(`p-click`,function(){return i.formCalculateHourlyWage.reset()}),wg(),jc(14,`po-button`,9),mt(`p-click`,function(){return i.calculate()}),wg()()()),r&2&&(jE(`formGroup`,i.formCalculateHourlyWage),rg(5),t0(),rg(),t0(),rg(2),t0(),rg(),t0(),rg(2),t0(),rg(3),jE(`p-disabled`,i.formCalculateHourlyWage.invalid))},dependencies:[wK,CK,EK,SF,kF,ni,Lf,Fne,doe],encapsulation:2,changeDetection:1})}return l})();var We=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-decimal-hourly-wage-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Decimal - Hourly Wage Reactive Form`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form [formGroup]="formCalculateHourlyWage">
  <div class="po-font-title">Calculate hourly wage</div>

  <po-divider />

  <div class="po-row">
    <po-number class="po-md-6" formControlName="weekHours" p-label="Week Hours"> </po-number>

    <po-number class="po-md-6" formControlName="workingDaysPerWeek" p-label="Working days per week"> </po-number>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" formControlName="quantityDaysPerMonth" p-label="Quantity days per month"> </po-number>

    <po-decimal
      class="po-md-6"
      formControlName="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      formControlName="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="formCalculateHourlyWage.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="formCalculateHourlyWage.invalid"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sample-po-decimal-hourly-wage-reactive-form',
  templateUrl: './sample-po-decimal-hourly-wage-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalHourlyWageReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  formCalculateHourlyWage: UntypedFormGroup;

  ngOnInit() {
    this.formCalculateHourlyWage = this.formBuilder.group({
      hourlyWage: [null],
      quantityDaysPerMonth: [null, Validators.required],
      salary: [null, Validators.required],
      weekHours: [null, Validators.required],
      workingDaysPerWeek: [null, Validators.required]
    });
  }

  calculate() {
    const { weekHours, workingDaysPerWeek, quantityDaysPerMonth, salary } = this.formCalculateHourlyWage.value;

    const hours = (weekHours / workingDaysPerWeek) * quantityDaysPerMonth;
    const hourlyWage = salary / hours;

    this.formCalculateHourlyWage.patchValue({ hourlyWage });
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-decimal-hourly-wage-reactive-form`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,We,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ee],encapsulation:2,changeDetection:1})}return l})();var Se=(()=>{class l{price=99.9;quantity=3;discount=-10.5;tax=8.5;shipping=15;subtotal;taxValue;totalOrder;calculate(){let p=(this.price??0)*(this.quantity??0)+(this.discount??0);this.subtotal=p,this.taxValue=p*((this.tax??0)/100),this.totalOrder=p+this.taxValue+(this.shipping??0)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-decimal-display-format`]],standalone:!1,decls:17,vars:14,consts:[[1,`po-font-title`],[1,`po-row`],[`name`,`price`,`p-label`,`Unit Price`,`p-help`,`Enter the product price`,`p-display-format`,`>>>>>>>>9.99`,`p-icon`,`an an-tag-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantity`,`p-label`,`Quantity`,`p-help`,`Enter the number of items`,`p-display-format`,`999`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`discount`,`p-label`,`Discount`,`p-help`,`Enter a discount (use negative for deduction)`,`p-display-format`,`->>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tax`,`p-label`,`Tax (%)`,`p-help`,`Tax percentage applied to the subtotal`,`p-display-format`,`>>9.9<<`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`shipping`,`p-label`,`Shipping`,`p-help`,`Shipping cost`,`p-display-format`,`>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-optional`,`ngModel`],[1,`po-lg-4`,`po-md-6`,`po-mt-4`],[`p-label`,`Calculate Total`,`p-icon`,`an an-calculator`,`p-kind`,`primary`,3,`p-click`],[`name`,`subtotal`,`p-label`,`Subtotal`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-equals`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`taxValue`,`p-label`,`Taxes`,`p-display-format`,`>>>,>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`totalOrder`,`p-label`,`Order Total`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-currency-dollar-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`]],template:function(r,i){r&1&&(jc(0,`div`,0),iO(1,`Order Simulation`),wg(),nu(2,`po-divider`),jc(3,`div`,1)(4,`po-decimal`,2),JN(),mt(`ngModelChange`,function(d){return i.price=d}),wg(),jc(5,`po-decimal`,3),JN(),mt(`ngModelChange`,function(d){return i.quantity=d}),wg(),jc(6,`po-decimal`,4),JN(),mt(`ngModelChange`,function(d){return i.discount=d}),wg()(),jc(7,`div`,1)(8,`po-decimal`,5),JN(),mt(`ngModelChange`,function(d){return i.tax=d}),wg(),jc(9,`po-decimal`,6),JN(),mt(`ngModelChange`,function(d){return i.shipping=d}),wg(),jc(10,`div`,7)(11,`po-button`,8),mt(`p-click`,function(){return i.calculate()}),wg()()(),nu(12,`po-divider`),jc(13,`div`,1)(14,`po-decimal`,9),JN(),mt(`ngModelChange`,function(d){return i.subtotal=d}),wg(),jc(15,`po-decimal`,10),JN(),mt(`ngModelChange`,function(d){return i.taxValue=d}),wg(),jc(16,`po-decimal`,11),JN(),mt(`ngModelChange`,function(d){return i.totalOrder=d}),wg()()),r&2&&(rg(4),jE(`ngModel`,i.price),t0(),rg(),jE(`p-decimals-length`,0)(`ngModel`,i.quantity),t0(),rg(),jE(`ngModel`,i.discount),t0(),rg(2),jE(`p-decimals-length`,3)(`ngModel`,i.tax),t0(),rg(),jE(`p-optional`,!0)(`ngModel`,i.shipping),t0(),rg(5),jE(`p-readonly`,!0)(`ngModel`,i.subtotal),t0(),rg(),jE(`p-readonly`,!0)(`ngModel`,i.taxValue),t0(),rg(),jE(`p-readonly`,!0)(`ngModel`,i.totalOrder),t0())},dependencies:[CK,TF,ni,Lf,Fne],encapsulation:2})}return l})();var He=l=>({"docs-sample-code-tabs":l});var be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-decimal-display-format-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Decimal - Display Format`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-font-title">Order Simulation</div>

<po-divider />

<div class="po-row">
  <po-decimal
    class="po-lg-4 po-md-6"
    name="price"
    p-label="Unit Price"
    p-help="Enter the product price"
    p-display-format=">>>>>>>>9.99"
    p-icon="an an-tag-simple"
    [ngModel]="price"
    (ngModelChange)="price = $event"
  >
  </po-decimal>

  <po-decimal
    class="po-lg-4 po-md-6"
    name="quantity"
    p-label="Quantity"
    p-help="Enter the number of items"
    p-display-format="999"
    [p-decimals-length]="0"
    [ngModel]="quantity"
    (ngModelChange)="quantity = $event"
  >
  </po-decimal>

  <po-decimal
    class="po-lg-4 po-md-6"
    name="discount"
    p-label="Discount"
    p-help="Enter a discount (use negative for deduction)"
    p-display-format="->>9.99"
    [ngModel]="discount"
    (ngModelChange)="discount = $event"
  >
  </po-decimal>
</div>

<div class="po-row">
  <po-decimal
    class="po-lg-4 po-md-6"
    name="tax"
    p-label="Tax (%)"
    p-help="Tax percentage applied to the subtotal"
    p-display-format=">>9.9<<"
    [p-decimals-length]="3"
    [ngModel]="tax"
    (ngModelChange)="tax = $event"
  >
  </po-decimal>

  <po-decimal
    class="po-lg-4 po-md-6"
    name="shipping"
    p-label="Shipping"
    p-help="Shipping cost"
    p-display-format=">>>,>>9.99"
    [p-optional]="true"
    [ngModel]="shipping"
    (ngModelChange)="shipping = $event"
  >
  </po-decimal>

  <div class="po-lg-4 po-md-6 po-mt-4">
    <po-button p-label="Calculate Total" p-icon="an an-calculator" p-kind="primary" (p-click)="calculate()">
    </po-button>
  </div>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-decimal
    class="po-lg-4 po-md-6"
    name="subtotal"
    p-label="Subtotal"
    p-display-format=">>>,>>>,>>9.99"
    p-icon="an an-equals"
    [p-readonly]="true"
    [ngModel]="subtotal"
    (ngModelChange)="subtotal = $event"
  >
  </po-decimal>

  <po-decimal
    class="po-lg-4 po-md-6"
    name="taxValue"
    p-label="Taxes"
    p-display-format=">>>,>>>,>>9.99"
    [p-readonly]="true"
    [ngModel]="taxValue"
    (ngModelChange)="taxValue = $event"
  >
  </po-decimal>

  <po-decimal
    class="po-lg-4 po-md-6"
    name="totalOrder"
    p-label="Order Total"
    p-display-format=">>>,>>>,>>9.99"
    p-icon="an an-currency-dollar-simple"
    [p-readonly]="true"
    [ngModel]="totalOrder"
    (ngModelChange)="totalOrder = $event"
  >
  </po-decimal>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-display-format',
  templateUrl: './sample-po-decimal-display-format.component.html',
  standalone: false
})
export class SamplePoDecimalDisplayFormatComponent {
  price: number = 99.9;
  quantity: number = 3;
  discount: number = -10.5;
  tax: number = 8.5;
  shipping: number = 15.0;
  subtotal: number | undefined;
  taxValue: number | undefined;
  totalOrder: number | undefined;

  calculate(): void {
    const sub = (this.price ?? 0) * (this.quantity ?? 0) + (this.discount ?? 0);
    this.subtotal = sub;
    this.taxValue = sub * ((this.tax ?? 0) / 100);
    this.totalOrder = sub + this.taxValue + (this.shipping ?? 0);
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-decimal-display-format`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,He,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Se],encapsulation:2,changeDetection:1})}return l})();var xe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-decimal-doc`]],standalone:!1,decls:1655,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoDecimalComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),wg(),jc(24,`p`),iO(25,`Importante:`),wg(),jc(26,`ul`)(27,`li`),iO(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),wg()(),jc(29,`h4`),iO(30,`Tokens customizáveis`),wg(),jc(31,`p`),iO(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),nu(33,`br`),iO(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),jc(35,`code`),iO(36,`.po-input`),wg()(),jc(37,`blockquote`)(38,`p`),iO(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),jc(40,`a`,6),iO(41,`Grid System`),wg(),iO(42,`.`),wg()(),jc(43,`blockquote`)(44,`p`),iO(45,`Para maiores informações, acesse o guia `),jc(46,`a`,7),iO(47,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(48,`.`),wg()(),jc(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),iO(53,`Propriedade`),wg(),jc(54,`th`),iO(55,`Descrição`),wg(),jc(56,`th`),iO(57,`Valor Padrão`),wg()()(),jc(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),iO(62,`Default Values`),wg()(),nu(63,`td`)(64,`td`),wg(),jc(65,`tr`)(66,`td`)(67,`code`),iO(68,`--font-family`),wg()(),jc(69,`td`),iO(70,`Família tipográfica usada`),wg(),jc(71,`td`)(72,`code`),iO(73,`var(--font-family-theme)`),wg()()(),jc(74,`tr`)(75,`td`)(76,`code`),iO(77,`--font-size`),wg()(),jc(78,`td`),iO(79,`Tamanho da fonte`),wg(),jc(80,`td`)(81,`code`),iO(82,`var(--font-size-default)`),wg()()(),jc(83,`tr`)(84,`td`)(85,`code`),iO(86,`--text-color-placeholder`),wg()(),jc(87,`td`),iO(88,`Cor do texto placeholder`),wg(),jc(89,`td`)(90,`code`),iO(91,`var(--color-neutral-light-30)`),wg()()(),jc(92,`tr`)(93,`td`)(94,`code`),iO(95,`--color`),wg()(),jc(96,`td`),iO(97,`Cor pincipal do input`),wg(),jc(98,`td`)(99,`code`),iO(100,`var(--color-neutral-dark-70)`),wg()()(),jc(101,`tr`)(102,`td`)(103,`code`),iO(104,`--background`),wg()(),jc(105,`td`),iO(106,`Cor de background`),wg(),jc(107,`td`)(108,`code`),iO(109,`var(--color-neutral-light-05)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`code`),iO(113,`--padding`),wg()(),jc(114,`td`),iO(115,`Preenchimento`),wg(),jc(116,`td`)(117,`code`),iO(118,`0 0.5rem`),wg()()(),jc(119,`tr`)(120,`td`)(121,`code`),iO(122,`--text-color`),wg()(),jc(123,`td`),iO(124,`Cor do texto`),wg(),jc(125,`td`)(126,`code`),iO(127,`var(--color-neutral-dark-90)`),wg()()(),jc(128,`tr`)(129,`td`)(130,`code`),iO(131,`--field-container-title-justify`),wg()(),jc(132,`td`),iO(133,`Alinhamento horizontal do título (`),jc(134,`code`),iO(135,`justify-content`),wg(),iO(136,`)`),wg(),jc(137,`td`)(138,`code`),iO(139,`space-between`),wg()()(),jc(140,`tr`)(141,`td`)(142,`code`),iO(143,`--field-container-title-flex`),wg()(),jc(144,`td`),iO(145,`Flex do título (`),jc(146,`code`),iO(147,`flex`),wg(),iO(148,`)`),wg(),jc(149,`td`)(150,`code`),iO(151,`1 auto`),wg()()(),jc(152,`tr`)(153,`td`)(154,`strong`),iO(155,`Hover`),wg()(),nu(156,`td`)(157,`td`),wg(),jc(158,`tr`)(159,`td`)(160,`code`),iO(161,`--color-hover`),wg()(),jc(162,`td`),iO(163,`Cor principal no estado hover`),wg(),jc(164,`td`)(165,`code`),iO(166,`var(--color-brand-01-dark)`),wg()()(),jc(167,`tr`)(168,`td`)(169,`code`),iO(170,`--background-hover`),wg()(),jc(171,`td`),iO(172,`Cor de background no estado hover`),wg(),jc(173,`td`)(174,`code`),iO(175,`var(--color-brand-01-lightest)`),wg()()(),jc(176,`tr`)(177,`td`)(178,`strong`),iO(179,`Focused`),wg()(),nu(180,`td`)(181,`td`),wg(),jc(182,`tr`)(183,`td`)(184,`code`),iO(185,`--color-focused`),wg()(),jc(186,`td`),iO(187,`Cor principal no estado de focus`),wg(),jc(188,`td`)(189,`code`),iO(190,`var(--color-action-default)`),wg()()(),jc(191,`tr`)(192,`td`)(193,`code`),iO(194,`--outline-color-focused`),wg()(),jc(195,`td`),iO(196,`Cor do outline do estado de focus`),wg(),jc(197,`td`)(198,`code`),iO(199,`var(--color-action-focus)`),wg()()(),jc(200,`tr`)(201,`td`)(202,`strong`),iO(203,`Disabled`),wg()(),nu(204,`td`)(205,`td`),wg(),jc(206,`tr`)(207,`td`)(208,`code`),iO(209,`--color-disabled`),wg()(),jc(210,`td`),iO(211,`Cor principal no estado disabled`),wg(),jc(212,`td`)(213,`code`),iO(214,`var(--color-neutral-light-30)`),wg()()(),jc(215,`tr`)(216,`td`)(217,`code`),iO(218,`--background-disabled`),wg()(),jc(219,`td`),iO(220,`Cor de background no estado disabled`),wg(),jc(221,`td`)(222,`code`),iO(223,`var(--color-neutral-light-20)`),wg()()(),jc(224,`tr`)(225,`td`)(226,`code`),iO(227,`--text-color-disabled`),wg()(),jc(228,`td`),iO(229,`Cor do texto no estado disabled`),wg(),jc(230,`td`)(231,`code`),iO(232,`var(--color-neutral-dark-70)`),wg()()()()(),jc(233,`p`),nu(234,`br`),iO(235,` - O `),jc(236,`code`),iO(237,`po-decimal`),wg(),iO(238,` é um `),jc(239,`em`),iO(240,`input`),wg(),iO(241,` específico para receber apenas números decimais, por isso recebe as seguintes características:`),wg(),jc(242,`ul`)(243,`li`),iO(244,`Aceita apenas números;`),wg(),jc(245,`li`),iO(246,`Utiliza ',' como separador de decimal;`),wg(),jc(247,`li`),iO(248,`Utiliza '.' para separação de milhar;`),wg(),jc(249,`li`),iO(250,`É possível configurar a quantidade de casas decimais e a quantidade de digitos do campo.`),wg()(),jc(251,`blockquote`)(252,`p`)(253,`strong`),iO(254,`Importante:`),wg(),iO(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),jc(256,`code`),iO(257,`32 bits`),wg(),iO(258,`, e para que os valores comportem-se devidamente,
o `),jc(259,`code`),iO(260,`po-decimal`),wg(),iO(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),jc(262,`code`),iO(263,`p-decimals-length`),wg(),iO(264,` e `),jc(265,`code`),iO(266,`p-thousand-maxlength`),wg(),iO(267,`.`),wg()()(),jc(268,`div`,8)(269,`h4`,9),iO(270,`Seletor`),wg(),jc(271,`pre`,10),iO(272,`<po-decimal
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-decimals-length="number"
    p-disabled="boolean"
    p-display-format="string | undefined"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-locale="string"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-max="number"
    p-maxlength="number"
    p-min="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-thousand-maxlength="number"
    p-upper-case="boolean" >
</po-decimal>
`),wg()(),jc(273,`h4`,11),iO(274,`Propriedades`),wg(),jc(275,`table`,12)(276,`tr`,13)(277,`th`,14),iO(278,`Nome`),wg(),jc(279,`th`,14),iO(280,`Tipo`),wg(),jc(281,`th`,14),iO(282,`Padrão`),wg(),jc(283,`th`,14),iO(284,`Descrição`),wg()(),jc(285,`tr`,15)(286,`td`,16)(287,`div`,17)(288,`span`,18),iO(289,` (p-additional-help)`),nu(290,`br`),wg()(),jc(291,`div`,19),iO(292,`Deprecated`),wg()(),jc(293,`td`,20)(294,`code`,21),iO(295,`EventEmitter`),wg()(),jc(296,`td`,22),iO(297,`-`),wg(),jc(298,`td`,23)(299,`em`)(300,`strong`),iO(301,`(opcional)`),wg()(),jc(302,`p`),iO(303,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(304,`blockquote`)(305,`p`),iO(306,`Essa propriedade está `),jc(307,`strong`),iO(308,`depreciada`),wg(),iO(309,` e será removida na versão `),jc(310,`code`),iO(311,`23.x.x`),wg(),iO(312,`. Recomendamos utilizar a propriedade `),jc(313,`code`),iO(314,`p-helper`),wg(),iO(315,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(316,`tr`,15)(317,`td`,16)(318,`div`,24)(319,`span`,25),iO(320,` p-additional-help-tooltip`),nu(321,`br`),wg()(),jc(322,`div`,19),iO(323,`Deprecated`),wg()(),jc(324,`td`,20)(325,`code`,26),iO(326,`string`),wg()(),jc(327,`td`,22),iO(328,`-`),wg(),jc(329,`td`,23)(330,`em`)(331,`strong`),iO(332,`(opcional)`),wg()(),jc(333,`p`),iO(334,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(335,`code`),iO(336,`po-helper`),wg(),iO(337,`.
`),jc(338,`strong`),iO(339,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(340,`blockquote`)(341,`p`),iO(342,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(343,`blockquote`)(344,`p`),iO(345,`Essa propriedade está `),jc(346,`strong`),iO(347,`depreciada`),wg(),iO(348,` e será removida na versão `),jc(349,`code`),iO(350,`23.x.x`),wg(),iO(351,`. Recomendamos utilizar a propriedade `),jc(352,`code`),iO(353,`p-helper`),wg(),iO(354,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(355,`tr`,15)(356,`td`,16)(357,`div`,24)(358,`span`,25),iO(359,` p-append-in-body`),nu(360,`br`),wg()()(),jc(361,`td`,20)(362,`code`,27),iO(363,`boolean`),wg()(),jc(364,`td`,22)(365,`p`)(366,`code`),iO(367,`false`),wg()()(),jc(368,`td`,23)(369,`em`)(370,`strong`),iO(371,`(opcional)`),wg()(),jc(372,`p`),iO(373,`Define que o popover (`),jc(374,`code`),iO(375,`p-helper`),wg(),iO(376,` e/ou `),jc(377,`code`),iO(378,`p-error-limit`),wg(),iO(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(380,`blockquote`)(381,`p`),iO(382,`Quando utilizado com `),jc(383,`code`),iO(384,`p-helper`),wg(),iO(385,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(386,`tr`,15)(387,`td`,16)(388,`div`,24)(389,`span`,25),iO(390,` p-auto-focus`),nu(391,`br`),wg()()(),jc(392,`td`,20)(393,`code`,27),iO(394,`boolean`),wg()(),jc(395,`td`,22)(396,`p`)(397,`code`),iO(398,`false`),wg()()(),jc(399,`td`,23)(400,`em`)(401,`strong`),iO(402,`(opcional)`),wg()(),jc(403,`p`),iO(404,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(405,`blockquote`)(406,`p`),iO(407,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(408,`tr`,15)(409,`td`,16)(410,`div`,17)(411,`span`,18),iO(412,` (p-blur)`),nu(413,`br`),wg()()(),jc(414,`td`,20)(415,`code`,21),iO(416,`EventEmitter`),wg()(),jc(417,`td`,22),iO(418,`-`),wg(),jc(419,`td`,23)(420,`em`)(421,`strong`),iO(422,`(opcional)`),wg()(),jc(423,`p`),iO(424,`Evento disparado ao sair do campo.`),wg()()(),jc(425,`tr`,15)(426,`td`,16)(427,`div`,17)(428,`span`,18),iO(429,` (p-change)`),nu(430,`br`),wg()()(),jc(431,`td`,20)(432,`code`,21),iO(433,`EventEmitter`),wg()(),jc(434,`td`,22),iO(435,`-`),wg(),jc(436,`td`,23)(437,`em`)(438,`strong`),iO(439,`(opcional)`),wg()(),jc(440,`p`),iO(441,`Evento disparado ao alterar valor e deixar o campo.`),wg()()(),jc(442,`tr`,15)(443,`td`,16)(444,`div`,17)(445,`span`,18),iO(446,` (p-change-model)`),nu(447,`br`),wg()()(),jc(448,`td`,20)(449,`code`,21),iO(450,`EventEmitter`),wg()(),jc(451,`td`,22),iO(452,`-`),wg(),jc(453,`td`,23)(454,`em`)(455,`strong`),iO(456,`(opcional)`),wg()(),jc(457,`p`),iO(458,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(459,`code`),iO(460,`setValue`),wg(),iO(461,`, `),jc(462,`code`),iO(463,`patchValue`),wg(),iO(464,`, carregamento assíncrono).`),wg(),jc(465,`p`),iO(466,`Diferentemente do `),jc(467,`code`),iO(468,`p-change`),wg(),iO(469,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(470,`code`),iO(471,`p-change-model`),wg(),iO(472,` cobre todos os cenários de alteração de valor.`),wg(),jc(473,`p`),iO(474,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(475,`tr`,15)(476,`td`,16)(477,`div`,24)(478,`span`,25),iO(479,`p-clean`),nu(480,`br`),wg()()(),jc(481,`td`,20)(482,`code`,27),iO(483,`boolean`),wg()(),jc(484,`td`,22),iO(485,`-`),wg(),jc(486,`td`,23)(487,`em`)(488,`strong`),iO(489,`(opcional)`),wg()(),jc(490,`p`),iO(491,`Se verdadeiro, o campo receberá um botão para ser limpo.`),wg()()(),jc(492,`tr`,15)(493,`td`,16)(494,`div`,24)(495,`span`,25),iO(496,` p-compact-label`),nu(497,`br`),wg()()(),jc(498,`td`,20)(499,`code`,27),iO(500,`boolean`),wg()(),jc(501,`td`,22)(502,`p`)(503,`code`),iO(504,`false`),wg()()(),jc(505,`td`,23)(506,`em`)(507,`strong`),iO(508,`(opcional)`),wg()(),jc(509,`p`),iO(510,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(511,`p`),iO(512,`Quando habilitado (`),jc(513,`code`),iO(514,`true`),wg(),iO(515,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(516,`ul`)(517,`li`)(518,`code`),iO(519,`po-label`),wg()(),jc(520,`li`)(521,`code`),iO(522,`p-requirement (showRequired)`),wg()(),jc(523,`li`)(524,`code`),iO(525,`po-helper`),wg()()(),jc(526,`p`),iO(527,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(528,`p`),iO(529,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(530,`ul`)(531,`li`)(532,`code`),iO(533,`--field-container-title-justify`),wg()(),jc(534,`li`)(535,`code`),iO(536,`--field-container-title-flex`),wg()()(),jc(537,`p`),iO(538,`Exemplo:`),wg(),jc(539,`pre`)(540,`code`),iO(541,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(542,`p`),iO(543,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(544,`tr`,15)(545,`td`,16)(546,`div`,24)(547,`span`,25),iO(548,` p-decimals-length`),nu(549,`br`),wg()()(),jc(550,`td`,20)(551,`code`,28),iO(552,`number`),wg()(),jc(553,`td`,22)(554,`p`)(555,`code`),iO(556,`2`),wg()()(),jc(557,`td`,23)(558,`em`)(559,`strong`),iO(560,`(opcional)`),wg()(),jc(561,`p`),iO(562,`Quantidade máxima de casas decimais.`),wg(),jc(563,`blockquote`)(564,`p`)(565,`strong`),iO(566,`Importante:`),wg()()(),jc(567,`ul`)(568,`li`),iO(569,`O valor máximo permitido é 15;`),wg(),jc(570,`li`),iO(571,`A soma total de `),jc(572,`code`),iO(573,`p-decimals-length`),wg(),iO(574,` com `),jc(575,`code`),iO(576,`p-thousand-maxlength`),wg(),iO(577,` limita-se à 16;`),wg(),jc(578,`li`),iO(579,`Esta propriedade sobrepõe apenas o valor `),jc(580,`strong`),iO(581,`padrão`),wg(),iO(582,` de `),jc(583,`code`),iO(584,`p-thousand-maxlength`),wg(),iO(585,`;`),wg(),jc(586,`li`),iO(587,`Caso `),jc(588,`code`),iO(589,`p-thousand-maxlength`),wg(),iO(590,` tenha um valor definido, esta propriedade poderá receber apenas o valor restante do limite total (16).`),wg(),jc(591,`li`),iO(592,`Quando utilizado com `),jc(593,`code`),iO(594,`p-display-format`),wg(),iO(595,`, será respeitado o valor `),jc(596,`strong`),iO(597,`mais restritivo`),wg(),iO(598,` entre esta propriedade e o número de casas decimais definido no formato.`),wg()()()(),jc(599,`tr`,15)(600,`td`,16)(601,`div`,24)(602,`span`,25),iO(603,`p-disabled`),nu(604,`br`),wg()()(),jc(605,`td`,20)(606,`code`,27),iO(607,`boolean`),wg()(),jc(608,`td`,22)(609,`p`)(610,`code`),iO(611,`false`),wg()()(),jc(612,`td`,23)(613,`em`)(614,`strong`),iO(615,`(opcional)`),wg()(),jc(616,`p`),iO(617,`Se verdadeiro, desabilita o campo.`),wg()()(),jc(618,`tr`,15)(619,`td`,16)(620,`div`,24)(621,`span`,25),iO(622,` p-display-format`),nu(623,`br`),wg()()(),jc(624,`td`,20)(625,`code`,26),iO(626,`string `),wg(),jc(627,`code`,29),iO(628,` undefined`),wg()(),jc(629,`td`,22),iO(630,`-`),wg(),jc(631,`td`,23)(632,`em`)(633,`strong`),iO(634,`(opcional)`),wg()(),jc(635,`p`),iO(636,`Define uma máscara de formatação numérica avançada para o campo.`),wg(),jc(637,`p`),iO(638,`Simbologia suportada:`),wg(),jc(639,`ul`)(640,`li`)(641,`code`),iO(642,`9`),wg(),iO(643,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),wg(),jc(644,`li`)(645,`code`),iO(646,`>`),wg(),iO(647,`: Supressão de zero à esquerda (dígito não obrigatório);`),wg(),jc(648,`li`)(649,`code`),iO(650,`<`),wg(),iO(651,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),wg(),jc(652,`li`)(653,`code`),iO(654,`,`),wg(),iO(655,` e `),jc(656,`code`),iO(657,`.`),wg(),iO(658,`: Separadores de milhar/grupo e decimal (convertidos conforme `),jc(659,`code`),iO(660,`p-locale`),wg(),iO(661,`);`),wg(),jc(662,`li`)(663,`code`),iO(664,`-`),wg(),iO(665,`: Sinal negativo (deve ser o primeiro caractere do formato).`),wg()(),jc(666,`blockquote`)(667,`p`)(668,`strong`),iO(669,`Importante:`),wg()()(),jc(670,`ul`)(671,`li`),iO(672,`A formatação via `),jc(673,`code`),iO(674,`p-display-format`),wg(),iO(675,` é apenas visual; o valor do model é sempre o número puro.`),wg(),jc(676,`li`),iO(677,`Quando o valor pré-preenchido não atende ao formato (overflow ou negativo sem `),jc(678,`code`),iO(679,`-`),wg(),iO(680,`), o campo exibe com a formatação padrão do `),jc(681,`code`),iO(682,`po-decimal`),wg(),iO(683,` (separadores de milhar + `),jc(684,`code`),iO(685,`p-decimals-length`),wg(),iO(686,` casas decimais).`),wg(),jc(687,`li`),iO(688,`Quando `),jc(689,`code`),iO(690,`p-decimals-length`),wg(),iO(691,` ou `),jc(692,`code`),iO(693,`p-thousand-maxlength`),wg(),iO(694,` são definidos, será respeitado o valor `),jc(695,`strong`),iO(696,`mais restritivo`),wg(),iO(697,` entre o formato e a propriedade.`),wg(),jc(698,`li`),iO(699,`Incompatível com `),jc(700,`code`),iO(701,`p-mask`),wg(),iO(702,`, `),jc(703,`code`),iO(704,`p-mask-format-model`),wg(),iO(705,`, `),jc(706,`code`),iO(707,`p-mask-no-length-validation`),wg(),iO(708,` e `),jc(709,`code`),iO(710,`p-pattern`),wg(),iO(711,`.`),wg()(),jc(712,`p`),iO(713,`Exemplos de formato: `),jc(714,`code`),iO(715,`>>>,>>>,>>9.99`),wg(),iO(716,`, `),jc(717,`code`),iO(718,`->>,>>9.99`),wg(),iO(719,`, `),jc(720,`code`),iO(721,`999.9`),wg(),iO(722,`, `),jc(723,`code`),iO(724,`>>>,>>9.9<<<<<<`),wg()()()(),jc(725,`tr`,15)(726,`td`,16)(727,`div`,24)(728,`span`,25),iO(729,` p-emit-all-changes`),nu(730,`br`),wg()()(),jc(731,`td`,20)(732,`code`,27),iO(733,`boolean`),wg()(),jc(734,`td`,22)(735,`p`)(736,`code`),iO(737,`false`),wg()()(),jc(738,`td`,23)(739,`em`)(740,`strong`),iO(741,`(opcional)`),wg()(),jc(742,`p`),iO(743,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),wg()()(),jc(744,`tr`,15)(745,`td`,16)(746,`div`,17)(747,`span`,18),iO(748,` (p-enter)`),nu(749,`br`),wg()()(),jc(750,`td`,20)(751,`code`,21),iO(752,`EventEmitter`),wg()(),jc(753,`td`,22),iO(754,`-`),wg(),jc(755,`td`,23)(756,`em`)(757,`strong`),iO(758,`(opcional)`),wg()(),jc(759,`p`),iO(760,`Evento disparado ao entrar do campo.`),wg()()(),jc(761,`tr`,15)(762,`td`,16)(763,`div`,24)(764,`span`,25),iO(765,` p-error-async-properties`),nu(766,`br`),wg()()(),jc(767,`td`,20)(768,`code`,30),iO(769,`ErrorAsyncProperties`),wg()(),jc(770,`td`,22),iO(771,`-`),wg(),jc(772,`td`,23)(773,`em`)(774,`strong`),iO(775,`(opcional)`),wg()(),jc(776,`p`),iO(777,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),jc(778,`code`),iO(779,`Reactive Forms`),wg(),iO(780,`. Em formulários reativos, pode-se utilizar o próprio `),jc(781,`code`),iO(782,`asyncValidators`),wg(),iO(783,`.`),wg()()(),jc(784,`tr`,15)(785,`td`,16)(786,`div`,24)(787,`span`,25),iO(788,` p-error-limit`),nu(789,`br`),wg()()(),jc(790,`td`,20)(791,`code`,27),iO(792,`boolean`),wg()(),jc(793,`td`,22)(794,`p`)(795,`code`),iO(796,`false`),wg()()(),jc(797,`td`,23)(798,`em`)(799,`strong`),iO(800,`(opcional)`),wg()(),jc(801,`p`),iO(802,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(803,`blockquote`)(804,`p`),iO(805,`Caso essa propriedade seja definida como `),jc(806,`code`),iO(807,`true`),wg(),iO(808,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(809,`tr`,15)(810,`td`,16)(811,`div`,24)(812,`span`,25),iO(813,` p-error-pattern`),nu(814,`br`),wg()()(),jc(815,`td`,20)(816,`code`,26),iO(817,`string`),wg()(),jc(818,`td`,22),iO(819,`-`),wg(),jc(820,`td`,23)(821,`em`)(822,`strong`),iO(823,`(opcional)`),wg()(),jc(824,`p`),iO(825,`Mensagem que será apresentada quando o `),jc(826,`code`),iO(827,`pattern`),wg(),iO(828,` ou a máscara não for satisfeita.`),wg(),jc(829,`blockquote`)(830,`p`),iO(831,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),jc(832,`code`),iO(833,`p-required-field-error-message`),wg(),iO(834,` em conjunto.`),wg()()()(),jc(835,`tr`,15)(836,`td`,16)(837,`div`,24)(838,`span`,25),iO(839,` p-help`),nu(840,`br`),wg()()(),jc(841,`td`,20)(842,`code`,26),iO(843,`string`),wg()(),jc(844,`td`,22),iO(845,`-`),wg(),jc(846,`td`,23)(847,`em`)(848,`strong`),iO(849,`(opcional)`),wg()(),jc(850,`p`),iO(851,`Texto de apoio do campo.`),wg()()(),jc(852,`tr`,15)(853,`td`,16)(854,`div`,24)(855,`span`,25),iO(856,` p-icon`),nu(857,`br`),wg()()(),jc(858,`td`,20)(859,`code`,26),iO(860,`string `),wg(),jc(861,`code`,31),iO(862,` TemplateRef<void>`),wg()(),jc(863,`td`,22),iO(864,`-`),wg(),jc(865,`td`,23)(866,`em`)(867,`strong`),iO(868,`(opcional)`),wg()(),jc(869,`p`),iO(870,`Define o ícone que será exibido no início do campo.`),wg(),jc(871,`p`),iO(872,`É possível usar qualquer um dos ícones da `),jc(873,`a`,32),iO(874,`Biblioteca de ícones`),wg(),iO(875,`. conforme exemplo abaixo:`),wg(),jc(876,`pre`)(877,`code`),iO(878,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),wg()(),jc(879,`p`),iO(880,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(881,`em`),iO(882,`Font Awesome`),wg(),iO(883,`, da seguinte forma:`),wg(),jc(884,`pre`)(885,`code`),iO(886,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),wg()(),jc(887,`p`),iO(888,`Outra opção seria a customização do ícone através do `),jc(889,`code`),iO(890,`TemplateRef`),wg(),iO(891,`, conforme exemplo abaixo:`),wg(),jc(892,`pre`)(893,`code`),iO(894,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(895,`blockquote`)(896,`p`),iO(897,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(898,`code`),iO(899,`font-size: inherit`),wg(),iO(900,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(901,`tr`,15)(902,`td`,16)(903,`div`,17)(904,`span`,18),iO(905,` (p-keydown)`),nu(906,`br`),wg()()(),jc(907,`td`,20)(908,`code`,21),iO(909,`EventEmitter`),wg()(),jc(910,`td`,22),iO(911,`-`),wg(),jc(912,`td`,23)(913,`em`)(914,`strong`),iO(915,`(opcional)`),wg()(),jc(916,`p`),iO(917,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(918,`code`),iO(919,`KeyboardEvent`),wg(),iO(920,` com informações sobre a tecla.`),wg()()(),jc(921,`tr`,15)(922,`td`,16)(923,`div`,24)(924,`span`,25),iO(925,` p-label`),nu(926,`br`),wg()()(),jc(927,`td`,20)(928,`code`,26),iO(929,`string`),wg()(),jc(930,`td`,22),iO(931,`-`),wg(),jc(932,`td`,23)(933,`em`)(934,`strong`),iO(935,`(opcional)`),wg()(),jc(936,`p`),iO(937,`Rótulo do campo.`),wg()()(),jc(938,`tr`,15)(939,`td`,16)(940,`div`,24)(941,`span`,25),iO(942,` p-label-text-wrap`),nu(943,`br`),wg()()(),jc(944,`td`,20)(945,`code`,27),iO(946,`boolean`),wg()(),jc(947,`td`,22)(948,`p`)(949,`code`),iO(950,`false`),wg()()(),jc(951,`td`,23)(952,`em`)(953,`strong`),iO(954,`(opcional)`),wg()(),jc(955,`p`),iO(956,`Habilita a quebra automática do texto da propriedade `),jc(957,`code`),iO(958,`p-label`),wg(),iO(959,`. Quando `),jc(960,`code`),iO(961,`p-label-text-wrap`),wg(),iO(962,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(963,`tr`,15)(964,`td`,16)(965,`div`,24)(966,`span`,25),iO(967,` p-loading`),nu(968,`br`),wg()()(),jc(969,`td`,20)(970,`code`,27),iO(971,`boolean`),wg()(),jc(972,`td`,22)(973,`p`)(974,`code`),iO(975,`false`),wg()()(),jc(976,`td`,23)(977,`em`)(978,`strong`),iO(979,`(opcional)`),wg()(),jc(980,`p`),iO(981,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(982,`tr`,15)(983,`td`,16)(984,`div`,24)(985,`span`,25),iO(986,` p-locale`),nu(987,`br`),wg()()(),jc(988,`td`,20)(989,`code`,26),iO(990,`string`),wg()(),jc(991,`td`,22),iO(992,`-`),wg(),jc(993,`td`,23)(994,`em`)(995,`strong`),iO(996,`(opcional)`),wg()(),jc(997,`p`),iO(998,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),jc(999,`a`,33)(1e3,`code`),iO(1001,`I18n`),wg()()(),jc(1002,`blockquote`)(1003,`p`),iO(1004,`Para ver quais linguagens suportadas acesse `),jc(1005,`a`,33)(1006,`code`),iO(1007,`I18n`),wg()()()()()(),jc(1008,`tr`,15)(1009,`td`,16)(1010,`div`,24)(1011,`span`,25),iO(1012,`p-mask`),nu(1013,`br`),wg()()(),jc(1014,`td`,20)(1015,`code`,26),iO(1016,`string`),wg()(),jc(1017,`td`,22),iO(1018,`-`),wg(),jc(1019,`td`,23)(1020,`em`)(1021,`strong`),iO(1022,`(opcional)`),wg()(),jc(1023,`p`),iO(1024,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),wg()()(),jc(1025,`tr`,15)(1026,`td`,16)(1027,`div`,24)(1028,`span`,25),iO(1029,`p-mask-format-model`),nu(1030,`br`),wg()()(),jc(1031,`td`,20)(1032,`code`,27),iO(1033,`boolean`),wg()(),jc(1034,`td`,22)(1035,`p`)(1036,`code`),iO(1037,`false`),wg()()(),jc(1038,`td`,23)(1039,`em`)(1040,`strong`),iO(1041,`(opcional)`),wg()(),jc(1042,`p`),iO(1043,`Indica se o `),jc(1044,`code`),iO(1045,`model`),wg(),iO(1046,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),wg()()(),jc(1047,`tr`,15)(1048,`td`,16)(1049,`div`,24)(1050,`span`,25),iO(1051,` p-mask-no-length-validation`),nu(1052,`br`),wg()()(),jc(1053,`td`,20)(1054,`code`,27),iO(1055,`boolean`),wg()(),jc(1056,`td`,22)(1057,`p`)(1058,`code`),iO(1059,`false`),wg()()(),jc(1060,`td`,23)(1061,`p`),iO(1062,`Controla como o componente aplica as validações de comprimento mínimo (`),jc(1063,`code`),iO(1064,`minLength`),wg(),iO(1065,`) e máximo (`),jc(1066,`code`),iO(1067,`maxLength`),wg(),iO(1068,`) quando há uma máscara (`),jc(1069,`code`),iO(1070,`p-mask`),wg(),iO(1071,`) definida.`),wg(),jc(1072,`ul`)(1073,`li`),iO(1074,`Quando `),jc(1075,`code`),iO(1076,`true`),wg(),iO(1077,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),wg(),jc(1078,`li`),iO(1079,`Quando `),jc(1080,`code`),iO(1081,`false`),wg(),iO(1082,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),wg()(),jc(1083,`blockquote`)(1084,`p`),iO(1085,`Esta propriedade é ignorada quando utilizada em conjunto com `),jc(1086,`code`),iO(1087,`p-mask-format-model`),wg(),iO(1088,`.`),wg()(),jc(1089,`p`),iO(1090,`Exemplo:`),wg(),jc(1091,`pre`)(1092,`code`),iO(1093,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),wg()(),jc(1094,`ul`)(1095,`li`),iO(1096,`Entrada: `),jc(1097,`code`),iO(1098,`123-456`),wg(),iO(1099,` → Validação será aplicada somente aos números, ignorando o caractere especial `),jc(1100,`code`),iO(1101,`-`),wg(),iO(1102,`.`),wg()()()(),jc(1103,`tr`,15)(1104,`td`,16)(1105,`div`,24)(1106,`span`,25),iO(1107,` p-max`),nu(1108,`br`),wg()()(),jc(1109,`td`,20)(1110,`code`,28),iO(1111,`number`),wg()(),jc(1112,`td`,22),iO(1113,`-`),wg(),jc(1114,`td`,23)(1115,`em`)(1116,`strong`),iO(1117,`(opcional)`),wg()(),jc(1118,`p`),iO(1119,`Valor máximo.`),wg()()(),jc(1120,`tr`,15)(1121,`td`,16)(1122,`div`,24)(1123,`span`,25),iO(1124,` p-maxlength`),nu(1125,`br`),wg()()(),jc(1126,`td`,20)(1127,`code`,28),iO(1128,`number`),wg()(),jc(1129,`td`,22),iO(1130,`-`),wg(),jc(1131,`td`,23)(1132,`em`)(1133,`strong`),iO(1134,`(opcional)`),wg()(),jc(1135,`p`),iO(1136,`Indica a quantidade máxima de caracteres que o campo aceita.`),wg()()(),jc(1137,`tr`,15)(1138,`td`,16)(1139,`div`,24)(1140,`span`,25),iO(1141,` p-min`),nu(1142,`br`),wg()()(),jc(1143,`td`,20)(1144,`code`,28),iO(1145,`number`),wg()(),jc(1146,`td`,22),iO(1147,`-`),wg(),jc(1148,`td`,23)(1149,`em`)(1150,`strong`),iO(1151,`(opcional)`),wg()(),jc(1152,`p`),iO(1153,`Valor mínimo.`),wg()()(),jc(1154,`tr`,15)(1155,`td`,16)(1156,`div`,24)(1157,`span`,25),iO(1158,` p-minlength`),nu(1159,`br`),wg()()(),jc(1160,`td`,20)(1161,`code`,28),iO(1162,`number`),wg()(),jc(1163,`td`,22),iO(1164,`-`),wg(),jc(1165,`td`,23)(1166,`em`)(1167,`strong`),iO(1168,`(opcional)`),wg()(),jc(1169,`p`),iO(1170,`Indica a quantidade mínima de caracteres que o campo aceita.`),wg()()(),jc(1171,`tr`,15)(1172,`td`,16)(1173,`div`,24)(1174,`span`,25),iO(1175,` name`),nu(1176,`br`),wg()()(),jc(1177,`td`,20)(1178,`code`,26),iO(1179,`string`),wg()(),jc(1180,`td`,22),iO(1181,`-`),wg(),jc(1182,`td`,23)(1183,`p`),iO(1184,`Nome e identificador do campo.`),wg()()(),jc(1185,`tr`,15)(1186,`td`,16)(1187,`div`,24)(1188,`span`,25),iO(1189,` p-no-autocomplete`),nu(1190,`br`),wg()()(),jc(1191,`td`,20)(1192,`code`,27),iO(1193,`boolean`),wg()(),jc(1194,`td`,22)(1195,`p`)(1196,`code`),iO(1197,`false`),wg()()(),jc(1198,`td`,23)(1199,`em`)(1200,`strong`),iO(1201,`(opcional)`),wg()(),jc(1202,`p`),iO(1203,`Define a propriedade nativa `),jc(1204,`code`),iO(1205,`autocomplete`),wg(),iO(1206,` do campo como `),jc(1207,`code`),iO(1208,`off`),wg(),iO(1209,`.`),wg(),jc(1210,`blockquote`)(1211,`p`),iO(1212,`No componente `),jc(1213,`code`),iO(1214,`po-password`),wg(),iO(1215,` será definido como `),jc(1216,`code`),iO(1217,`new-password`),wg(),iO(1218,`.`),wg()(),jc(1219,`p`),iO(1220,`Nos componentes `),jc(1221,`code`),iO(1222,`po-password`),wg(),iO(1223,` e `),jc(1224,`code`),iO(1225,`po-login`),wg(),iO(1226,` o valor padrão será `),jc(1227,`code`),iO(1228,`true`),wg(),iO(1229,`.`),wg()()(),jc(1230,`tr`,15)(1231,`td`,16)(1232,`div`,24)(1233,`span`,25),iO(1234,` p-optional`),nu(1235,`br`),wg()()(),jc(1236,`td`,20)(1237,`code`,27),iO(1238,`boolean`),wg()(),jc(1239,`td`,22)(1240,`p`)(1241,`code`),iO(1242,`false`),wg()()(),jc(1243,`td`,23)(1244,`em`)(1245,`strong`),iO(1246,`(opcional)`),wg()(),jc(1247,`p`),iO(1248,`Define se a indicação de campo opcional será exibida.`),wg(),jc(1249,`blockquote`)(1250,`p`),iO(1251,`Não será exibida a indicação se:`),wg()(),jc(1252,`ul`)(1253,`li`),iO(1254,`O campo conter `),jc(1255,`code`),iO(1256,`p-required`),wg(),iO(1257,`;`),wg(),jc(1258,`li`),iO(1259,`Não possuir `),jc(1260,`code`),iO(1261,`p-help`),wg(),iO(1262,` e/ou `),jc(1263,`code`),iO(1264,`p-label`),wg(),iO(1265,`.`),wg()()()(),jc(1266,`tr`,15)(1267,`td`,16)(1268,`div`,24)(1269,`span`,25),iO(1270,`p-pattern`),nu(1271,`br`),wg()()(),jc(1272,`td`,20)(1273,`code`,26),iO(1274,`string`),wg()(),jc(1275,`td`,22),iO(1276,`-`),wg(),jc(1277,`td`,23)(1278,`em`)(1279,`strong`),iO(1280,`(opcional)`),wg()(),jc(1281,`p`),iO(1282,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),jc(1283,`code`),iO(1284,`(p-mask)`),wg(),iO(1285,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),wg()()(),jc(1286,`tr`,15)(1287,`td`,16)(1288,`div`,24)(1289,`span`,25),iO(1290,` p-placeholder`),nu(1291,`br`),wg()()(),jc(1292,`td`,20)(1293,`code`,26),iO(1294,`string`),wg()(),jc(1295,`td`,22)(1296,`p`),iO(1297,`''`),wg()(),jc(1298,`td`,23)(1299,`em`)(1300,`strong`),iO(1301,`(opcional)`),wg()(),jc(1302,`p`),iO(1303,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),wg()()(),jc(1304,`tr`,15)(1305,`td`,16)(1306,`div`,24)(1307,`span`,25),iO(1308,` p-helper`),nu(1309,`br`),wg()()(),jc(1310,`td`,20)(1311,`code`,34),iO(1312,`PoHelperOptions `),wg(),jc(1313,`code`,26),iO(1314,` string`),wg()(),jc(1315,`td`,22),iO(1316,`-`),wg(),jc(1317,`td`,23)(1318,`em`)(1319,`strong`),iO(1320,`(opcional)`),wg()(),jc(1321,`p`),iO(1322,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(1323,`code`),iO(1324,`p-label`),wg(),iO(1325,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(1326,`code`),iO(1327,`p-label`),wg(),iO(1328,`.`),wg(),jc(1329,`blockquote`)(1330,`p`),iO(1331,`Para mais informações acesse: `),jc(1332,`a`,35),iO(1333,`https://po-ui.io/documentation/po-helper`),wg(),iO(1334,`.`),wg()(),jc(1335,`blockquote`)(1336,`p`),iO(1337,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(1338,`code`),iO(1339,`p-additional-help-tooltip`),wg(),iO(1340,` e `),jc(1341,`code`),iO(1342,`p-additional-help`),wg(),iO(1343,`) será ignorado.`),wg()()()(),jc(1344,`tr`,15)(1345,`td`,16)(1346,`div`,24)(1347,`span`,25),iO(1348,`p-readonly`),nu(1349,`br`),wg()()(),jc(1350,`td`,20)(1351,`code`,27),iO(1352,`boolean`),wg()(),jc(1353,`td`,22),iO(1354,`-`),wg(),jc(1355,`td`,23)(1356,`em`)(1357,`strong`),iO(1358,`(opcional)`),wg()(),jc(1359,`p`),iO(1360,`Indica que o campo será somente leitura.`),wg()()(),jc(1361,`tr`,15)(1362,`td`,16)(1363,`div`,24)(1364,`span`,25),iO(1365,`p-required`),nu(1366,`br`),wg()()(),jc(1367,`td`,20)(1368,`code`,27),iO(1369,`boolean`),wg()(),jc(1370,`td`,22)(1371,`p`)(1372,`code`),iO(1373,`false`),wg()()(),jc(1374,`td`,23)(1375,`em`)(1376,`strong`),iO(1377,`(opcional)`),wg()(),jc(1378,`p`),iO(1379,`Define que o campo será obrigatório.`),wg(),jc(1380,`blockquote`)(1381,`p`),iO(1382,`Esta propriedade é desconsiderada quando o input está desabilitado `),jc(1383,`code`),iO(1384,`(p-disabled)`),wg(),iO(1385,`.`),wg()()()(),jc(1386,`tr`,15)(1387,`td`,16)(1388,`div`,24)(1389,`span`,25),iO(1390,` p-required-field-error-message`),nu(1391,`br`),wg()()(),jc(1392,`td`,20)(1393,`code`,27),iO(1394,`boolean`),wg()(),jc(1395,`td`,22)(1396,`p`)(1397,`code`),iO(1398,`false`),wg()()(),jc(1399,`td`,23)(1400,`em`)(1401,`strong`),iO(1402,`(opcional)`),wg()(),jc(1403,`p`),iO(1404,`Exibe a mensagem setada na propriedade `),jc(1405,`code`),iO(1406,`p-error-pattern`),wg(),iO(1407,` se o campo estiver vazio e for requerido.`),wg(),jc(1408,`blockquote`)(1409,`p`),iO(1410,`Necessário que a propriedade `),jc(1411,`code`),iO(1412,`p-required`),wg(),iO(1413,` esteja habilitada.`),wg()()()(),jc(1414,`tr`,15)(1415,`td`,16)(1416,`div`,24)(1417,`span`,25),iO(1418,` p-show-required`),nu(1419,`br`),wg()()(),jc(1420,`td`,20)(1421,`code`,27),iO(1422,`boolean`),wg()(),jc(1423,`td`,22),iO(1424,`-`),wg(),jc(1425,`td`,23)(1426,`p`),iO(1427,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(1428,`blockquote`)(1429,`p`),iO(1430,`Não será exibida a indicação se:`),wg()(),jc(1431,`ul`)(1432,`li`),iO(1433,`Não possuir `),jc(1434,`code`),iO(1435,`p-help`),wg(),iO(1436,` e/ou `),jc(1437,`code`),iO(1438,`p-label`),wg(),iO(1439,`.`),wg()()()(),jc(1440,`tr`,15)(1441,`td`,16)(1442,`div`,24)(1443,`span`,25),iO(1444,` p-size`),nu(1445,`br`),wg()()(),jc(1446,`td`,20)(1447,`code`,26),iO(1448,`string`),wg()(),jc(1449,`td`,22)(1450,`p`)(1451,`code`),iO(1452,`medium`),wg()()(),jc(1453,`td`,23)(1454,`em`)(1455,`strong`),iO(1456,`(opcional)`),wg()(),jc(1457,`p`),iO(1458,`Define o tamanho do componente:`),wg(),jc(1459,`ul`)(1460,`li`)(1461,`code`),iO(1462,`small`),wg(),iO(1463,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(1464,`li`)(1465,`code`),iO(1466,`medium`),wg(),iO(1467,`: altura do input como 44px.`),wg()(),jc(1468,`blockquote`)(1469,`p`),iO(1470,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(1471,`code`),iO(1472,`medium`),wg(),iO(1473,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(1474,`a`,36),iO(1475,`po-theme`),wg(),iO(1476,`.`),wg()()()(),jc(1477,`tr`,15)(1478,`td`,16)(1479,`div`,24)(1480,`span`,25),iO(1481,` p-thousand-maxlength`),nu(1482,`br`),wg()()(),jc(1483,`td`,20)(1484,`code`,28),iO(1485,`number`),wg()(),jc(1486,`td`,22)(1487,`p`)(1488,`code`),iO(1489,`13`),wg()()(),jc(1490,`td`,23)(1491,`em`)(1492,`strong`),iO(1493,`(opcional)`),wg()(),jc(1494,`p`),iO(1495,`Quantidade máxima de dígitos antes do separador decimal.`),wg(),jc(1496,`blockquote`)(1497,`p`)(1498,`strong`),iO(1499,`Importante:`),wg()()(),jc(1500,`ul`)(1501,`li`),iO(1502,`O valor máximo permitido é 13;`),wg(),jc(1503,`li`),iO(1504,`A soma total de `),jc(1505,`code`),iO(1506,`p-decimals-length`),wg(),iO(1507,` com `),jc(1508,`code`),iO(1509,`p-thousand-maxlength`),wg(),iO(1510,` limita-se à 16;`),wg(),jc(1511,`li`),iO(1512,`Esta propriedade sobrepõe o valor definido em `),jc(1513,`code`),iO(1514,`p-decimals-length`),wg(),iO(1515,`.`),wg(),jc(1516,`li`),iO(1517,`Quando utilizado com `),jc(1518,`code`),iO(1519,`p-display-format`),wg(),iO(1520,`, será respeitado o valor `),jc(1521,`strong`),iO(1522,`mais restritivo`),wg(),iO(1523,` entre esta propriedade e o n\xFAmero de d\xEDgitos inteiros definido no
formato.`),wg()()()(),jc(1524,`tr`,15)(1525,`td`,16)(1526,`div`,24)(1527,`span`,25),iO(1528,` p-upper-case`),nu(1529,`br`),wg()()(),jc(1530,`td`,20)(1531,`code`,27),iO(1532,`boolean`),wg()(),jc(1533,`td`,22),iO(1534,`-`),wg(),jc(1535,`td`,23)(1536,`p`),iO(1537,`Converte o conteúdo do campo em maiúsulo automaticamente.`),wg()()()(),jc(1538,`h3`,11),iO(1539,`Métodos`),wg(),jc(1540,`table`,37)(1541,`tr`,15)(1542,`th`,38)(1543,`div`,24)(1544,`h4`)(1545,`span`,25),iO(1546,` showAdditionalHelp `),wg()()()()(),jc(1547,`tr`,23)(1548,`td`,23)(1549,`p`),iO(1550,`Método que exibe `),jc(1551,`code`),iO(1552,`p-helper`),wg(),iO(1553,` ou executa a ação definida em `),jc(1554,`code`),iO(1555,`p-helper{eventOnClick}`),wg(),iO(1556,` ou em `),jc(1557,`code`),iO(1558,`p-additionalHelp`),wg(),iO(1559,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(1560,`code`),iO(1561,`p-keydown`),wg(),iO(1562,`.`),wg(),jc(1563,`blockquote`)(1564,`p`),iO(1565,`Exibe ou oculta o conteúdo do componente `),jc(1566,`code`),iO(1567,`po-helper`),wg(),iO(1568,` quando o componente estiver com foco.`),wg()(),jc(1569,`pre`)(1570,`code`),iO(1571,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),wg()(),jc(1572,`pre`)(1573,`code`),iO(1574,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1575,`br`),jc(1576,`table`,37)(1577,`tr`,15)(1578,`th`,38)(1579,`div`,24)(1580,`h4`)(1581,`span`,25),iO(1582,` focus `),wg()()()()(),jc(1583,`tr`,23)(1584,`td`,23)(1585,`p`),iO(1586,`Função que atribui foco ao componente.`),wg(),jc(1587,`p`),iO(1588,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(1589,`pre`)(1590,`code`),iO(1591,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),wg()()()()(),nu(1592,`br`),jc(1593,`h3`),iO(1594,`Interfaces`),wg(),jc(1595,`h4`,39)(1596,`code`,5),iO(1597,`ErrorAsyncProperties`),wg()(),jc(1598,`div`,2)(1599,`p`),iO(1600,`Interface para realizar uma validação assíncrona no componente.`),wg()(),jc(1601,`h4`,11),iO(1602,`Propriedades`),wg(),jc(1603,`table`,12)(1604,`tr`,13)(1605,`th`,14),iO(1606,`Nome`),wg(),jc(1607,`th`,14),iO(1608,`Tipo`),wg(),jc(1609,`th`,14),iO(1610,`Descrição`),wg()(),jc(1611,`tr`,15)(1612,`td`,16)(1613,`div`,24)(1614,`span`,25),iO(1615,` errorAsync`),nu(1616,`br`),wg()()(),jc(1617,`td`,20)(1618,`code`,40),iO(1619,`(value) => Observable<boolean>`),wg()(),jc(1620,`td`,23)(1621,`p`),iO(1622,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),jc(1623,`code`),iO(1624,`change`),wg(),iO(1625,` ou `),jc(1626,`code`),iO(1627,`change-model`),wg(),iO(1628,`, dependendo do valor da propriedade `),jc(1629,`code`),iO(1630,`triggerMode`),wg(),iO(1631,`.`),wg()()(),jc(1632,`tr`,15)(1633,`td`,16)(1634,`div`,24)(1635,`span`,25),iO(1636,` triggerMode`),nu(1637,`br`),wg()()(),jc(1638,`td`,20)(1639,`code`,41),iO(1640,`'change' `),wg(),jc(1641,`code`,42),iO(1642,` 'changeModel'`),wg()(),jc(1643,`td`,23)(1644,`em`)(1645,`strong`),iO(1646,`(opcional)`),wg()(),jc(1647,`p`),iO(1648,`Controla se o método será executado no disparo do output `),jc(1649,`code`),iO(1650,`change`),wg(),iO(1651,` ou `),jc(1652,`code`),iO(1653,`change-model`),wg(),iO(1654,`.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return l})();var ze=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(b(ir),b(Sn))};static ɵcmp=Zn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Decimal`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-decimal-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-decimal-basic-view`)(6,`sample-po-decimal-labs-view`)(7,`sample-po-decimal-hourly-wage-view`)(8,`sample-po-decimal-hourly-wage-reactive-form-view`)(9,`sample-po-decimal-display-format-view`),wg()()()),r&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,pe,ce,ge,he,be,xe],encapsulation:2,changeDetection:1})}return l})()}];var ye=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe$1({type:l});static ɵinj=ue$1({imports:[C1.forChild(ze),C1]})}return l})();var ft=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe$1({type:l});static ɵinj=ue$1({imports:[Ta,ye]})}return l})();export{ft as DocPoDecimalModule};