import{$i as pt,Ai as hm,Br as Qn,Cr as KP,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Kr as S9,Lt as bae,M as Ef,N as Ene,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,bn as roe,br as Jv,ca as ue$1,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,gn as poe,i as _a,in as kte,k as D4,ki as he$1,na as qP,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,wr as Kc,zi as kL}from"./main-FUFQFMHQ.js";var de=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-decimal-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`decimal`,`p-label`,`PO Decimal`]],template:function(r,i){r&1&&Kc(0,`po-decimal`,0)},dependencies:[Ene],encapsulation:2,changeDetection:1})}return l})();var Ce=l=>({"docs-sample-code-tabs":l});var pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-decimal-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Decimal Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-decimal-basic/sample-po-decimal-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-decimal-basic/sample-po-decimal-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-decimal-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ce,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,de],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{helperText;decimal;decimalsLength;event;displayFormat;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:`pt`,label:`Portuguese`},{value:`en`,label:`English`},{value:`ru`,label:`Russian`},{value:`es`,label:`Spanish`}];iconOptions=[{value:`an an-shopping-cart-simple`,label:`an an-shopping-cart-simple`},{value:`an an-currency-dollar-simple`,label:`an an-currency-dollar-simple`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.decimal=void 0,this.decimalsLength=void 0,this.event=``,this.displayFormat=void 0,this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder=``,this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size=`medium`,this.properties=[]}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-decimal-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`decimal`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-decimals-length`,`p-disabled`,`p-display-format`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-locale`,`p-error-pattern`,`p-max`,`p-min`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-thousand-maxlength`,`p-label-text-wrap`,`p-compact-label`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`displayFormat`,`p-clean`,``,`p-label`,`Display Format`,`p-help`,`Ex: >>>,>>9.99 | ->>9.99 | 999.9 | >>9.9<<`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`min`,`p-clean`,``,`p-label`,`Min`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-clean`,``,`p-label`,`Max`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`locale`,`p-clean`,``,`p-label`,`Locale`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`decimalsLength`,`p-clean`,``,`p-help`,`Máximo 15`,`p-label`,`Decimals max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`thousandMaxlength`,`p-clean`,``,`p-help`,`Máximo 13`,`p-label`,`Thousand max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Bx();Ac(0,`po-decimal`,1),pt(`ngModelChange`,function(a){return i.decimal=a})(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3)(4,`po-info`,4),ug(),Kc(5,`po-divider`),Ac(6,`form`,null,0)(8,`po-input`,5),RE(`ngModelChange`,function(a){return Jv(s),DN(i.label,a)||(i.label=a),e_(a)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(a){return Jv(s),DN(i.help,a)||(i.help=a),e_(a)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(a){return Jv(s),DN(i.helperText,a)||(i.helperText=a),e_(a)}),ug(),p0(),Ac(11,`po-input`,8),RE(`ngModelChange`,function(a){return Jv(s),DN(i.placeholder,a)||(i.placeholder=a),e_(a)}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(a){return Jv(s),DN(i.errorPattern,a)||(i.errorPattern=a),e_(a)}),ug(),p0(),Ac(13,`po-input`,10),RE(`ngModelChange`,function(a){return Jv(s),DN(i.displayFormat,a)||(i.displayFormat=a),e_(a)}),ug(),p0(),Ac(14,`po-select`,11),RE(`ngModelChange`,function(a){return Jv(s),DN(i.icon,a)||(i.icon=a),e_(a)}),ug(),p0(),Ac(15,`po-number`,12),RE(`ngModelChange`,function(a){return Jv(s),DN(i.min,a)||(i.min=a),e_(a)}),ug(),p0(),Ac(16,`po-number`,13),RE(`ngModelChange`,function(a){return Jv(s),DN(i.max,a)||(i.max=a),e_(a)}),ug(),p0(),Ac(17,`po-select`,14),RE(`ngModelChange`,function(a){return Jv(s),DN(i.locale,a)||(i.locale=a),e_(a)}),ug(),p0(),Ac(18,`po-number`,15),RE(`ngModelChange`,function(a){return Jv(s),DN(i.decimalsLength,a)||(i.decimalsLength=a),e_(a)}),ug(),p0(),Ac(19,`po-number`,16),RE(`ngModelChange`,function(a){return Jv(s),DN(i.thousandMaxlength,a)||(i.thousandMaxlength=a),e_(a)}),ug(),p0(),Ac(20,`po-checkbox-group`,17),RE(`ngModelChange`,function(a){return Jv(s),DN(i.properties,a)||(i.properties=a),e_(a)}),ug(),p0(),Ac(21,`po-radio-group`,18),RE(`ngModelChange`,function(a){return Jv(s),DN(i.size,a)||(i.size=a),e_(a)}),ug(),p0(),Ac(22,`div`,2)(23,`po-button`,19),pt(`p-click`,function(){return i.restore()}),ug()()()}r&2&&(cE(`ngModel`,i.decimal)(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-decimals-length`,i.decimalsLength)(`p-disabled`,i.properties.includes(`disabled`))(`p-display-format`,i.displayFormat)(`p-help`,i.help)(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-locale`,i.locale)(`p-error-pattern`,i.errorPattern)(`p-max`,i.max)(`p-min`,i.min)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-thousand-maxlength`,i.thousandMaxlength)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-error-limit`,i.properties?.includes(`errorLimit`)),m0(),Hp(3),cE(`p-value`,i.decimal),Hp(),cE(`p-value`,i.event),Hp(4),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.helperText),m0(),Hp(),TE(`ngModel`,i.placeholder),m0(),Hp(),TE(`ngModel`,i.errorPattern),m0(),Hp(),TE(`ngModel`,i.displayFormat),m0(),Hp(),TE(`ngModel`,i.icon),cE(`p-options`,i.iconOptions),m0(),Hp(),TE(`ngModel`,i.min),m0(),Hp(),TE(`ngModel`,i.max),m0(),Hp(),TE(`ngModel`,i.locale),cE(`p-options`,i.localeOptions),m0(),Hp(),TE(`ngModel`,i.decimalsLength),cE(`p-max`,i.maxDecimalsLength),m0(),Hp(),TE(`ngModel`,i.thousandMaxlength),cE(`p-max`,i.maxThousandMaxlength),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-columns`,4)(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,Ene,D4,roe,kte,poe,hoe],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l});var ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-decimal-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Decimal Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-decimal-labs/sample-po-decimal-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-decimal
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-decimal-labs/sample-po-decimal-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-decimal-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,we,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,se],encapsulation:2,changeDetection:1})}return l})();var ue=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let p=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/p;this.hourlyWage=r}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-decimal-hourly-wage`]],standalone:!1,decls:16,vars:6,consts:[[`f`,`ngForm`],[1,`po-font-title`],[1,`po-row`],[`name`,`weekHours`,`p-label`,`Week Hours`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`workingDaysPerWeek`,`p-label`,`Working days per week`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=Bx();Ac(0,`form`,null,0)(2,`div`,1),vN(3,`Calculate hourly wage`),ug(),Kc(4,`po-divider`),Ac(5,`div`,2)(6,`po-number`,3),RE(`ngModelChange`,function(a){return Jv(s),DN(i.weekHours,a)||(i.weekHours=a),e_(a)}),ug(),p0(),Ac(7,`po-number`,4),RE(`ngModelChange`,function(a){return Jv(s),DN(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),e_(a)}),ug(),p0(),ug(),Ac(8,`div`,2)(9,`po-number`,5),RE(`ngModelChange`,function(a){return Jv(s),DN(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),e_(a)}),ug(),p0(),Ac(10,`po-decimal`,6),RE(`ngModelChange`,function(a){return Jv(s),DN(i.salary,a)||(i.salary=a),e_(a)}),pt(`p-change`,function(){return i.calculate()}),ug(),p0(),ug(),Ac(11,`div`,2)(12,`po-decimal`,7),RE(`ngModelChange`,function(a){return Jv(s),DN(i.hourlyWage,a)||(i.hourlyWage=a),e_(a)}),ug(),p0(),ug(),Ac(13,`div`,2)(14,`po-button`,8),pt(`p-click`,function(){Jv(s);let a=Zx(1);return e_(a.reset())}),ug(),Ac(15,`po-button`,9),pt(`p-click`,function(){return i.calculate()}),ug()()()}r&2&&(Hp(6),TE(`ngModel`,i.weekHours),m0(),Hp(),TE(`ngModel`,i.workingDaysPerWeek),m0(),Hp(2),TE(`ngModel`,i.quantityDaysPerMonth),m0(),Hp(),TE(`ngModel`,i.salary),m0(),Hp(2),TE(`ngModel`,i.hourlyWage),m0(),Hp(3),cE(`p-disabled`,!i.hourlyWage))},dependencies:[b9,D9,C9,BP,LP,ni,Ef,Ene,roe],encapsulation:2,changeDetection:1})}return l})();var ke=l=>({"docs-sample-code-tabs":l});var ge=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-decimal-hourly-wage-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Decimal - Hourly Wage`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form #f="ngForm">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-decimal-hourly-wage`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ke,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ue],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{formBuilder=f(S9);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,hm.required],salary:[null,hm.required],weekHours:[null,hm.required],workingDaysPerWeek:[null,hm.required]})}calculate(){let{weekHours:p,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:s}=this.formCalculateHourlyWage.value,a=s/(p/r*i);this.formCalculateHourlyWage.patchValue({hourlyWage:a})}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-decimal-hourly-wage-reactive-form`]],standalone:!1,decls:15,vars:2,consts:[[3,`formGroup`],[1,`po-font-title`],[1,`po-row`],[`formControlName`,`weekHours`,`p-label`,`Week Hours`,1,`po-md-6`],[`formControlName`,`workingDaysPerWeek`,`p-label`,`Working days per week`,1,`po-md-6`],[`formControlName`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,1,`po-md-6`],[`formControlName`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`p-change`],[`formControlName`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-thousand-maxlength`,`13`,1,`po-md-6`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){r&1&&(Ac(0,`form`,0)(1,`div`,1),vN(2,`Calculate hourly wage`),ug(),Kc(3,`po-divider`),Ac(4,`div`,2),Kc(5,`po-number`,3),p0(),Kc(6,`po-number`,4),p0(),ug(),Ac(7,`div`,2),Kc(8,`po-number`,5),p0(),Ac(9,`po-decimal`,6),pt(`p-change`,function(){return i.calculate()}),ug(),p0(),ug(),Ac(10,`div`,2),Kc(11,`po-decimal`,7),p0(),ug(),Ac(12,`div`,2)(13,`po-button`,8),pt(`p-click`,function(){return i.formCalculateHourlyWage.reset()}),ug(),Ac(14,`po-button`,9),pt(`p-click`,function(){return i.calculate()}),ug()()()),r&2&&(cE(`formGroup`,i.formCalculateHourlyWage),Hp(5),m0(),Hp(),m0(),Hp(2),m0(),Hp(),m0(),Hp(2),m0(),Hp(3),cE(`p-disabled`,i.formCalculateHourlyWage.invalid))},dependencies:[b9,D9,C9,KP,qP,ni,Ef,Ene,roe],encapsulation:2,changeDetection:1})}return l})();var We=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-decimal-hourly-wage-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Decimal - Hourly Wage Reactive Form`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form [formGroup]="formCalculateHourlyWage">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-decimal-hourly-wage-reactive-form`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,We,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Ee],encapsulation:2,changeDetection:1})}return l})();var Se=(()=>{class l{price=99.9;quantity=3;discount=-10.5;tax=8.5;shipping=15;subtotal;taxValue;totalOrder;calculate(){let p=(this.price??0)*(this.quantity??0)+(this.discount??0);this.subtotal=p,this.taxValue=p*((this.tax??0)/100),this.totalOrder=p+this.taxValue+(this.shipping??0)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-decimal-display-format`]],standalone:!1,decls:17,vars:14,consts:[[1,`po-font-title`],[1,`po-row`],[`name`,`price`,`p-label`,`Unit Price`,`p-help`,`Enter the product price`,`p-display-format`,`>>>>>>>>9.99`,`p-icon`,`an an-tag-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantity`,`p-label`,`Quantity`,`p-help`,`Enter the number of items`,`p-display-format`,`999`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`discount`,`p-label`,`Discount`,`p-help`,`Enter a discount (use negative for deduction)`,`p-display-format`,`->>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tax`,`p-label`,`Tax (%)`,`p-help`,`Tax percentage applied to the subtotal`,`p-display-format`,`>>9.9<<`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`shipping`,`p-label`,`Shipping`,`p-help`,`Shipping cost`,`p-display-format`,`>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-optional`,`ngModel`],[1,`po-lg-4`,`po-md-6`,`po-mt-4`],[`p-label`,`Calculate Total`,`p-icon`,`an an-calculator`,`p-kind`,`primary`,3,`p-click`],[`name`,`subtotal`,`p-label`,`Subtotal`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-equals`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`taxValue`,`p-label`,`Taxes`,`p-display-format`,`>>>,>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`totalOrder`,`p-label`,`Order Total`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-currency-dollar-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`]],template:function(r,i){r&1&&(Ac(0,`div`,0),vN(1,`Order Simulation`),ug(),Kc(2,`po-divider`),Ac(3,`div`,1)(4,`po-decimal`,2),pt(`ngModelChange`,function(d){return i.price=d}),ug(),p0(),Ac(5,`po-decimal`,3),pt(`ngModelChange`,function(d){return i.quantity=d}),ug(),p0(),Ac(6,`po-decimal`,4),pt(`ngModelChange`,function(d){return i.discount=d}),ug(),p0(),ug(),Ac(7,`div`,1)(8,`po-decimal`,5),pt(`ngModelChange`,function(d){return i.tax=d}),ug(),p0(),Ac(9,`po-decimal`,6),pt(`ngModelChange`,function(d){return i.shipping=d}),ug(),p0(),Ac(10,`div`,7)(11,`po-button`,8),pt(`p-click`,function(){return i.calculate()}),ug()()(),Kc(12,`po-divider`),Ac(13,`div`,1)(14,`po-decimal`,9),pt(`ngModelChange`,function(d){return i.subtotal=d}),ug(),p0(),Ac(15,`po-decimal`,10),pt(`ngModelChange`,function(d){return i.taxValue=d}),ug(),p0(),Ac(16,`po-decimal`,11),pt(`ngModelChange`,function(d){return i.totalOrder=d}),ug(),p0(),ug()),r&2&&(Hp(4),cE(`ngModel`,i.price),m0(),Hp(),cE(`p-decimals-length`,0)(`ngModel`,i.quantity),m0(),Hp(),cE(`ngModel`,i.discount),m0(),Hp(2),cE(`p-decimals-length`,3)(`ngModel`,i.tax),m0(),Hp(),cE(`p-optional`,!0)(`ngModel`,i.shipping),m0(),Hp(5),cE(`p-readonly`,!0)(`ngModel`,i.subtotal),m0(),Hp(),cE(`p-readonly`,!0)(`ngModel`,i.taxValue),m0(),Hp(),cE(`p-readonly`,!0)(`ngModel`,i.totalOrder),m0())},dependencies:[D9,BP,ni,Ef,Ene],encapsulation:2})}return l})();var He=l=>({"docs-sample-code-tabs":l});var be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-decimal-display-format-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Decimal - Display Format`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-font-title">Order Simulation</div>

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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-decimal-display-format`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,He,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,Se],encapsulation:2,changeDetection:1})}return l})();var xe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-decimal-doc`]],standalone:!1,decls:1655,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoDecimalComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ug(),Ac(24,`p`),vN(25,`Importante:`),ug(),Ac(26,`ul`)(27,`li`),vN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ug()(),Ac(29,`h4`),vN(30,`Tokens customizáveis`),ug(),Ac(31,`p`),vN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Kc(33,`br`),vN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ac(35,`code`),vN(36,`.po-input`),ug()(),Ac(37,`blockquote`)(38,`p`),vN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Ac(40,`a`,6),vN(41,`Grid System`),ug(),vN(42,`.`),ug()(),Ac(43,`blockquote`)(44,`p`),vN(45,`Para maiores informações, acesse o guia `),Ac(46,`a`,7),vN(47,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(48,`.`),ug()(),Ac(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),vN(53,`Propriedade`),ug(),Ac(54,`th`),vN(55,`Descrição`),ug(),Ac(56,`th`),vN(57,`Valor Padrão`),ug()()(),Ac(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),vN(62,`Default Values`),ug()(),Kc(63,`td`)(64,`td`),ug(),Ac(65,`tr`)(66,`td`)(67,`code`),vN(68,`--font-family`),ug()(),Ac(69,`td`),vN(70,`Família tipográfica usada`),ug(),Ac(71,`td`)(72,`code`),vN(73,`var(--font-family-theme)`),ug()()(),Ac(74,`tr`)(75,`td`)(76,`code`),vN(77,`--font-size`),ug()(),Ac(78,`td`),vN(79,`Tamanho da fonte`),ug(),Ac(80,`td`)(81,`code`),vN(82,`var(--font-size-default)`),ug()()(),Ac(83,`tr`)(84,`td`)(85,`code`),vN(86,`--text-color-placeholder`),ug()(),Ac(87,`td`),vN(88,`Cor do texto placeholder`),ug(),Ac(89,`td`)(90,`code`),vN(91,`var(--color-neutral-light-30)`),ug()()(),Ac(92,`tr`)(93,`td`)(94,`code`),vN(95,`--color`),ug()(),Ac(96,`td`),vN(97,`Cor pincipal do input`),ug(),Ac(98,`td`)(99,`code`),vN(100,`var(--color-neutral-dark-70)`),ug()()(),Ac(101,`tr`)(102,`td`)(103,`code`),vN(104,`--background`),ug()(),Ac(105,`td`),vN(106,`Cor de background`),ug(),Ac(107,`td`)(108,`code`),vN(109,`var(--color-neutral-light-05)`),ug()()(),Ac(110,`tr`)(111,`td`)(112,`code`),vN(113,`--padding`),ug()(),Ac(114,`td`),vN(115,`Preenchimento`),ug(),Ac(116,`td`)(117,`code`),vN(118,`0 0.5rem`),ug()()(),Ac(119,`tr`)(120,`td`)(121,`code`),vN(122,`--text-color`),ug()(),Ac(123,`td`),vN(124,`Cor do texto`),ug(),Ac(125,`td`)(126,`code`),vN(127,`var(--color-neutral-dark-90)`),ug()()(),Ac(128,`tr`)(129,`td`)(130,`code`),vN(131,`--field-container-title-justify`),ug()(),Ac(132,`td`),vN(133,`Alinhamento horizontal do título (`),Ac(134,`code`),vN(135,`justify-content`),ug(),vN(136,`)`),ug(),Ac(137,`td`)(138,`code`),vN(139,`space-between`),ug()()(),Ac(140,`tr`)(141,`td`)(142,`code`),vN(143,`--field-container-title-flex`),ug()(),Ac(144,`td`),vN(145,`Flex do título (`),Ac(146,`code`),vN(147,`flex`),ug(),vN(148,`)`),ug(),Ac(149,`td`)(150,`code`),vN(151,`1 auto`),ug()()(),Ac(152,`tr`)(153,`td`)(154,`strong`),vN(155,`Hover`),ug()(),Kc(156,`td`)(157,`td`),ug(),Ac(158,`tr`)(159,`td`)(160,`code`),vN(161,`--color-hover`),ug()(),Ac(162,`td`),vN(163,`Cor principal no estado hover`),ug(),Ac(164,`td`)(165,`code`),vN(166,`var(--color-brand-01-dark)`),ug()()(),Ac(167,`tr`)(168,`td`)(169,`code`),vN(170,`--background-hover`),ug()(),Ac(171,`td`),vN(172,`Cor de background no estado hover`),ug(),Ac(173,`td`)(174,`code`),vN(175,`var(--color-brand-01-lightest)`),ug()()(),Ac(176,`tr`)(177,`td`)(178,`strong`),vN(179,`Focused`),ug()(),Kc(180,`td`)(181,`td`),ug(),Ac(182,`tr`)(183,`td`)(184,`code`),vN(185,`--color-focused`),ug()(),Ac(186,`td`),vN(187,`Cor principal no estado de focus`),ug(),Ac(188,`td`)(189,`code`),vN(190,`var(--color-action-default)`),ug()()(),Ac(191,`tr`)(192,`td`)(193,`code`),vN(194,`--outline-color-focused`),ug()(),Ac(195,`td`),vN(196,`Cor do outline do estado de focus`),ug(),Ac(197,`td`)(198,`code`),vN(199,`var(--color-action-focus)`),ug()()(),Ac(200,`tr`)(201,`td`)(202,`strong`),vN(203,`Disabled`),ug()(),Kc(204,`td`)(205,`td`),ug(),Ac(206,`tr`)(207,`td`)(208,`code`),vN(209,`--color-disabled`),ug()(),Ac(210,`td`),vN(211,`Cor principal no estado disabled`),ug(),Ac(212,`td`)(213,`code`),vN(214,`var(--color-neutral-light-30)`),ug()()(),Ac(215,`tr`)(216,`td`)(217,`code`),vN(218,`--background-disabled`),ug()(),Ac(219,`td`),vN(220,`Cor de background no estado disabled`),ug(),Ac(221,`td`)(222,`code`),vN(223,`var(--color-neutral-light-20)`),ug()()(),Ac(224,`tr`)(225,`td`)(226,`code`),vN(227,`--text-color-disabled`),ug()(),Ac(228,`td`),vN(229,`Cor do texto no estado disabled`),ug(),Ac(230,`td`)(231,`code`),vN(232,`var(--color-neutral-dark-70)`),ug()()()()(),Ac(233,`p`),Kc(234,`br`),vN(235,` - O `),Ac(236,`code`),vN(237,`po-decimal`),ug(),vN(238,` é um `),Ac(239,`em`),vN(240,`input`),ug(),vN(241,` específico para receber apenas números decimais, por isso recebe as seguintes características:`),ug(),Ac(242,`ul`)(243,`li`),vN(244,`Aceita apenas números;`),ug(),Ac(245,`li`),vN(246,`Utiliza ',' como separador de decimal;`),ug(),Ac(247,`li`),vN(248,`Utiliza '.' para separação de milhar;`),ug(),Ac(249,`li`),vN(250,`É possível configurar a quantidade de casas decimais e a quantidade de digitos do campo.`),ug()(),Ac(251,`blockquote`)(252,`p`)(253,`strong`),vN(254,`Importante:`),ug(),vN(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),Ac(256,`code`),vN(257,`32 bits`),ug(),vN(258,`, e para que os valores comportem-se devidamente,
o `),Ac(259,`code`),vN(260,`po-decimal`),ug(),vN(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),Ac(262,`code`),vN(263,`p-decimals-length`),ug(),vN(264,` e `),Ac(265,`code`),vN(266,`p-thousand-maxlength`),ug(),vN(267,`.`),ug()()(),Ac(268,`div`,8)(269,`h4`,9),vN(270,`Seletor`),ug(),Ac(271,`pre`,10),vN(272,`<po-decimal
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
`),ug()(),Ac(273,`h4`,11),vN(274,`Propriedades`),ug(),Ac(275,`table`,12)(276,`tr`,13)(277,`th`,14),vN(278,`Nome`),ug(),Ac(279,`th`,14),vN(280,`Tipo`),ug(),Ac(281,`th`,14),vN(282,`Padrão`),ug(),Ac(283,`th`,14),vN(284,`Descrição`),ug()(),Ac(285,`tr`,15)(286,`td`,16)(287,`div`,17)(288,`span`,18),vN(289,` (p-additional-help)`),Kc(290,`br`),ug()(),Ac(291,`div`,19),vN(292,`Deprecated`),ug()(),Ac(293,`td`,20)(294,`code`,21),vN(295,`EventEmitter`),ug()(),Ac(296,`td`,22),vN(297,`-`),ug(),Ac(298,`td`,23)(299,`em`)(300,`strong`),vN(301,`(opcional)`),ug()(),Ac(302,`p`),vN(303,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(304,`blockquote`)(305,`p`),vN(306,`Essa propriedade está `),Ac(307,`strong`),vN(308,`depreciada`),ug(),vN(309,` e será removida na versão `),Ac(310,`code`),vN(311,`23.x.x`),ug(),vN(312,`. Recomendamos utilizar a propriedade `),Ac(313,`code`),vN(314,`p-helper`),ug(),vN(315,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(316,`tr`,15)(317,`td`,16)(318,`div`,24)(319,`span`,25),vN(320,` p-additional-help-tooltip`),Kc(321,`br`),ug()(),Ac(322,`div`,19),vN(323,`Deprecated`),ug()(),Ac(324,`td`,20)(325,`code`,26),vN(326,`string`),ug()(),Ac(327,`td`,22),vN(328,`-`),ug(),Ac(329,`td`,23)(330,`em`)(331,`strong`),vN(332,`(opcional)`),ug()(),Ac(333,`p`),vN(334,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(335,`code`),vN(336,`po-helper`),ug(),vN(337,`.
`),Ac(338,`strong`),vN(339,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(340,`blockquote`)(341,`p`),vN(342,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(343,`blockquote`)(344,`p`),vN(345,`Essa propriedade está `),Ac(346,`strong`),vN(347,`depreciada`),ug(),vN(348,` e será removida na versão `),Ac(349,`code`),vN(350,`23.x.x`),ug(),vN(351,`. Recomendamos utilizar a propriedade `),Ac(352,`code`),vN(353,`p-helper`),ug(),vN(354,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(355,`tr`,15)(356,`td`,16)(357,`div`,24)(358,`span`,25),vN(359,` p-append-in-body`),Kc(360,`br`),ug()()(),Ac(361,`td`,20)(362,`code`,27),vN(363,`boolean`),ug()(),Ac(364,`td`,22)(365,`p`)(366,`code`),vN(367,`false`),ug()()(),Ac(368,`td`,23)(369,`em`)(370,`strong`),vN(371,`(opcional)`),ug()(),Ac(372,`p`),vN(373,`Define que o popover (`),Ac(374,`code`),vN(375,`p-helper`),ug(),vN(376,` e/ou `),Ac(377,`code`),vN(378,`p-error-limit`),ug(),vN(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ug(),Ac(380,`blockquote`)(381,`p`),vN(382,`Quando utilizado com `),Ac(383,`code`),vN(384,`p-helper`),ug(),vN(385,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(386,`tr`,15)(387,`td`,16)(388,`div`,24)(389,`span`,25),vN(390,` p-auto-focus`),Kc(391,`br`),ug()()(),Ac(392,`td`,20)(393,`code`,27),vN(394,`boolean`),ug()(),Ac(395,`td`,22)(396,`p`)(397,`code`),vN(398,`false`),ug()()(),Ac(399,`td`,23)(400,`em`)(401,`strong`),vN(402,`(opcional)`),ug()(),Ac(403,`p`),vN(404,`Aplica foco no elemento ao ser iniciado.`),ug(),Ac(405,`blockquote`)(406,`p`),vN(407,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ug()()()(),Ac(408,`tr`,15)(409,`td`,16)(410,`div`,17)(411,`span`,18),vN(412,` (p-blur)`),Kc(413,`br`),ug()()(),Ac(414,`td`,20)(415,`code`,21),vN(416,`EventEmitter`),ug()(),Ac(417,`td`,22),vN(418,`-`),ug(),Ac(419,`td`,23)(420,`em`)(421,`strong`),vN(422,`(opcional)`),ug()(),Ac(423,`p`),vN(424,`Evento disparado ao sair do campo.`),ug()()(),Ac(425,`tr`,15)(426,`td`,16)(427,`div`,17)(428,`span`,18),vN(429,` (p-change)`),Kc(430,`br`),ug()()(),Ac(431,`td`,20)(432,`code`,21),vN(433,`EventEmitter`),ug()(),Ac(434,`td`,22),vN(435,`-`),ug(),Ac(436,`td`,23)(437,`em`)(438,`strong`),vN(439,`(opcional)`),ug()(),Ac(440,`p`),vN(441,`Evento disparado ao alterar valor e deixar o campo.`),ug()()(),Ac(442,`tr`,15)(443,`td`,16)(444,`div`,17)(445,`span`,18),vN(446,` (p-change-model)`),Kc(447,`br`),ug()()(),Ac(448,`td`,20)(449,`code`,21),vN(450,`EventEmitter`),ug()(),Ac(451,`td`,22),vN(452,`-`),ug(),Ac(453,`td`,23)(454,`em`)(455,`strong`),vN(456,`(opcional)`),ug()(),Ac(457,`p`),vN(458,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(459,`code`),vN(460,`setValue`),ug(),vN(461,`, `),Ac(462,`code`),vN(463,`patchValue`),ug(),vN(464,`, carregamento assíncrono).`),ug(),Ac(465,`p`),vN(466,`Diferentemente do `),Ac(467,`code`),vN(468,`p-change`),ug(),vN(469,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(470,`code`),vN(471,`p-change-model`),ug(),vN(472,` cobre todos os cenários de alteração de valor.`),ug(),Ac(473,`p`),vN(474,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(475,`tr`,15)(476,`td`,16)(477,`div`,24)(478,`span`,25),vN(479,`p-clean`),Kc(480,`br`),ug()()(),Ac(481,`td`,20)(482,`code`,27),vN(483,`boolean`),ug()(),Ac(484,`td`,22),vN(485,`-`),ug(),Ac(486,`td`,23)(487,`em`)(488,`strong`),vN(489,`(opcional)`),ug()(),Ac(490,`p`),vN(491,`Se verdadeiro, o campo receberá um botão para ser limpo.`),ug()()(),Ac(492,`tr`,15)(493,`td`,16)(494,`div`,24)(495,`span`,25),vN(496,` p-compact-label`),Kc(497,`br`),ug()()(),Ac(498,`td`,20)(499,`code`,27),vN(500,`boolean`),ug()(),Ac(501,`td`,22)(502,`p`)(503,`code`),vN(504,`false`),ug()()(),Ac(505,`td`,23)(506,`em`)(507,`strong`),vN(508,`(opcional)`),ug()(),Ac(509,`p`),vN(510,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(511,`p`),vN(512,`Quando habilitado (`),Ac(513,`code`),vN(514,`true`),ug(),vN(515,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(516,`ul`)(517,`li`)(518,`code`),vN(519,`po-label`),ug()(),Ac(520,`li`)(521,`code`),vN(522,`p-requirement (showRequired)`),ug()(),Ac(523,`li`)(524,`code`),vN(525,`po-helper`),ug()()(),Ac(526,`p`),vN(527,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(528,`p`),vN(529,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(530,`ul`)(531,`li`)(532,`code`),vN(533,`--field-container-title-justify`),ug()(),Ac(534,`li`)(535,`code`),vN(536,`--field-container-title-flex`),ug()()(),Ac(537,`p`),vN(538,`Exemplo:`),ug(),Ac(539,`pre`)(540,`code`),vN(541,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(542,`p`),vN(543,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(544,`tr`,15)(545,`td`,16)(546,`div`,24)(547,`span`,25),vN(548,` p-decimals-length`),Kc(549,`br`),ug()()(),Ac(550,`td`,20)(551,`code`,28),vN(552,`number`),ug()(),Ac(553,`td`,22)(554,`p`)(555,`code`),vN(556,`2`),ug()()(),Ac(557,`td`,23)(558,`em`)(559,`strong`),vN(560,`(opcional)`),ug()(),Ac(561,`p`),vN(562,`Quantidade máxima de casas decimais.`),ug(),Ac(563,`blockquote`)(564,`p`)(565,`strong`),vN(566,`Importante:`),ug()()(),Ac(567,`ul`)(568,`li`),vN(569,`O valor máximo permitido é 15;`),ug(),Ac(570,`li`),vN(571,`A soma total de `),Ac(572,`code`),vN(573,`p-decimals-length`),ug(),vN(574,` com `),Ac(575,`code`),vN(576,`p-thousand-maxlength`),ug(),vN(577,` limita-se à 16;`),ug(),Ac(578,`li`),vN(579,`Esta propriedade sobrepõe apenas o valor `),Ac(580,`strong`),vN(581,`padrão`),ug(),vN(582,` de `),Ac(583,`code`),vN(584,`p-thousand-maxlength`),ug(),vN(585,`;`),ug(),Ac(586,`li`),vN(587,`Caso `),Ac(588,`code`),vN(589,`p-thousand-maxlength`),ug(),vN(590,` tenha um valor definido, esta propriedade poderá receber apenas o valor restante do limite total (16).`),ug(),Ac(591,`li`),vN(592,`Quando utilizado com `),Ac(593,`code`),vN(594,`p-display-format`),ug(),vN(595,`, será respeitado o valor `),Ac(596,`strong`),vN(597,`mais restritivo`),ug(),vN(598,` entre esta propriedade e o número de casas decimais definido no formato.`),ug()()()(),Ac(599,`tr`,15)(600,`td`,16)(601,`div`,24)(602,`span`,25),vN(603,`p-disabled`),Kc(604,`br`),ug()()(),Ac(605,`td`,20)(606,`code`,27),vN(607,`boolean`),ug()(),Ac(608,`td`,22)(609,`p`)(610,`code`),vN(611,`false`),ug()()(),Ac(612,`td`,23)(613,`em`)(614,`strong`),vN(615,`(opcional)`),ug()(),Ac(616,`p`),vN(617,`Se verdadeiro, desabilita o campo.`),ug()()(),Ac(618,`tr`,15)(619,`td`,16)(620,`div`,24)(621,`span`,25),vN(622,` p-display-format`),Kc(623,`br`),ug()()(),Ac(624,`td`,20)(625,`code`,26),vN(626,`string `),ug(),Ac(627,`code`,29),vN(628,` undefined`),ug()(),Ac(629,`td`,22),vN(630,`-`),ug(),Ac(631,`td`,23)(632,`em`)(633,`strong`),vN(634,`(opcional)`),ug()(),Ac(635,`p`),vN(636,`Define uma máscara de formatação numérica avançada para o campo.`),ug(),Ac(637,`p`),vN(638,`Simbologia suportada:`),ug(),Ac(639,`ul`)(640,`li`)(641,`code`),vN(642,`9`),ug(),vN(643,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),ug(),Ac(644,`li`)(645,`code`),vN(646,`>`),ug(),vN(647,`: Supressão de zero à esquerda (dígito não obrigatório);`),ug(),Ac(648,`li`)(649,`code`),vN(650,`<`),ug(),vN(651,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),ug(),Ac(652,`li`)(653,`code`),vN(654,`,`),ug(),vN(655,` e `),Ac(656,`code`),vN(657,`.`),ug(),vN(658,`: Separadores de milhar/grupo e decimal (convertidos conforme `),Ac(659,`code`),vN(660,`p-locale`),ug(),vN(661,`);`),ug(),Ac(662,`li`)(663,`code`),vN(664,`-`),ug(),vN(665,`: Sinal negativo (deve ser o primeiro caractere do formato).`),ug()(),Ac(666,`blockquote`)(667,`p`)(668,`strong`),vN(669,`Importante:`),ug()()(),Ac(670,`ul`)(671,`li`),vN(672,`A formatação via `),Ac(673,`code`),vN(674,`p-display-format`),ug(),vN(675,` é apenas visual; o valor do model é sempre o número puro.`),ug(),Ac(676,`li`),vN(677,`Quando o valor pré-preenchido não atende ao formato (overflow ou negativo sem `),Ac(678,`code`),vN(679,`-`),ug(),vN(680,`), o campo exibe com a formatação padrão do `),Ac(681,`code`),vN(682,`po-decimal`),ug(),vN(683,` (separadores de milhar + `),Ac(684,`code`),vN(685,`p-decimals-length`),ug(),vN(686,` casas decimais).`),ug(),Ac(687,`li`),vN(688,`Quando `),Ac(689,`code`),vN(690,`p-decimals-length`),ug(),vN(691,` ou `),Ac(692,`code`),vN(693,`p-thousand-maxlength`),ug(),vN(694,` são definidos, será respeitado o valor `),Ac(695,`strong`),vN(696,`mais restritivo`),ug(),vN(697,` entre o formato e a propriedade.`),ug(),Ac(698,`li`),vN(699,`Incompatível com `),Ac(700,`code`),vN(701,`p-mask`),ug(),vN(702,`, `),Ac(703,`code`),vN(704,`p-mask-format-model`),ug(),vN(705,`, `),Ac(706,`code`),vN(707,`p-mask-no-length-validation`),ug(),vN(708,` e `),Ac(709,`code`),vN(710,`p-pattern`),ug(),vN(711,`.`),ug()(),Ac(712,`p`),vN(713,`Exemplos de formato: `),Ac(714,`code`),vN(715,`>>>,>>>,>>9.99`),ug(),vN(716,`, `),Ac(717,`code`),vN(718,`->>,>>9.99`),ug(),vN(719,`, `),Ac(720,`code`),vN(721,`999.9`),ug(),vN(722,`, `),Ac(723,`code`),vN(724,`>>>,>>9.9<<<<<<`),ug()()()(),Ac(725,`tr`,15)(726,`td`,16)(727,`div`,24)(728,`span`,25),vN(729,` p-emit-all-changes`),Kc(730,`br`),ug()()(),Ac(731,`td`,20)(732,`code`,27),vN(733,`boolean`),ug()(),Ac(734,`td`,22)(735,`p`)(736,`code`),vN(737,`false`),ug()()(),Ac(738,`td`,23)(739,`em`)(740,`strong`),vN(741,`(opcional)`),ug()(),Ac(742,`p`),vN(743,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),ug()()(),Ac(744,`tr`,15)(745,`td`,16)(746,`div`,17)(747,`span`,18),vN(748,` (p-enter)`),Kc(749,`br`),ug()()(),Ac(750,`td`,20)(751,`code`,21),vN(752,`EventEmitter`),ug()(),Ac(753,`td`,22),vN(754,`-`),ug(),Ac(755,`td`,23)(756,`em`)(757,`strong`),vN(758,`(opcional)`),ug()(),Ac(759,`p`),vN(760,`Evento disparado ao entrar do campo.`),ug()()(),Ac(761,`tr`,15)(762,`td`,16)(763,`div`,24)(764,`span`,25),vN(765,` p-error-async-properties`),Kc(766,`br`),ug()()(),Ac(767,`td`,20)(768,`code`,30),vN(769,`ErrorAsyncProperties`),ug()(),Ac(770,`td`,22),vN(771,`-`),ug(),Ac(772,`td`,23)(773,`em`)(774,`strong`),vN(775,`(opcional)`),ug()(),Ac(776,`p`),vN(777,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Ac(778,`code`),vN(779,`Reactive Forms`),ug(),vN(780,`. Em formulários reativos, pode-se utilizar o próprio `),Ac(781,`code`),vN(782,`asyncValidators`),ug(),vN(783,`.`),ug()()(),Ac(784,`tr`,15)(785,`td`,16)(786,`div`,24)(787,`span`,25),vN(788,` p-error-limit`),Kc(789,`br`),ug()()(),Ac(790,`td`,20)(791,`code`,27),vN(792,`boolean`),ug()(),Ac(793,`td`,22)(794,`p`)(795,`code`),vN(796,`false`),ug()()(),Ac(797,`td`,23)(798,`em`)(799,`strong`),vN(800,`(opcional)`),ug()(),Ac(801,`p`),vN(802,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(803,`blockquote`)(804,`p`),vN(805,`Caso essa propriedade seja definida como `),Ac(806,`code`),vN(807,`true`),ug(),vN(808,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()()()(),Ac(809,`tr`,15)(810,`td`,16)(811,`div`,24)(812,`span`,25),vN(813,` p-error-pattern`),Kc(814,`br`),ug()()(),Ac(815,`td`,20)(816,`code`,26),vN(817,`string`),ug()(),Ac(818,`td`,22),vN(819,`-`),ug(),Ac(820,`td`,23)(821,`em`)(822,`strong`),vN(823,`(opcional)`),ug()(),Ac(824,`p`),vN(825,`Mensagem que será apresentada quando o `),Ac(826,`code`),vN(827,`pattern`),ug(),vN(828,` ou a máscara não for satisfeita.`),ug(),Ac(829,`blockquote`)(830,`p`),vN(831,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Ac(832,`code`),vN(833,`p-required-field-error-message`),ug(),vN(834,` em conjunto.`),ug()()()(),Ac(835,`tr`,15)(836,`td`,16)(837,`div`,24)(838,`span`,25),vN(839,` p-help`),Kc(840,`br`),ug()()(),Ac(841,`td`,20)(842,`code`,26),vN(843,`string`),ug()(),Ac(844,`td`,22),vN(845,`-`),ug(),Ac(846,`td`,23)(847,`em`)(848,`strong`),vN(849,`(opcional)`),ug()(),Ac(850,`p`),vN(851,`Texto de apoio do campo.`),ug()()(),Ac(852,`tr`,15)(853,`td`,16)(854,`div`,24)(855,`span`,25),vN(856,` p-icon`),Kc(857,`br`),ug()()(),Ac(858,`td`,20)(859,`code`,26),vN(860,`string `),ug(),Ac(861,`code`,31),vN(862,` TemplateRef<void>`),ug()(),Ac(863,`td`,22),vN(864,`-`),ug(),Ac(865,`td`,23)(866,`em`)(867,`strong`),vN(868,`(opcional)`),ug()(),Ac(869,`p`),vN(870,`Define o ícone que será exibido no início do campo.`),ug(),Ac(871,`p`),vN(872,`É possível usar qualquer um dos ícones da `),Ac(873,`a`,32),vN(874,`Biblioteca de ícones`),ug(),vN(875,`. conforme exemplo abaixo:`),ug(),Ac(876,`pre`)(877,`code`),vN(878,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),ug()(),Ac(879,`p`),vN(880,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(881,`em`),vN(882,`Font Awesome`),ug(),vN(883,`, da seguinte forma:`),ug(),Ac(884,`pre`)(885,`code`),vN(886,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),ug()(),Ac(887,`p`),vN(888,`Outra opção seria a customização do ícone através do `),Ac(889,`code`),vN(890,`TemplateRef`),ug(),vN(891,`, conforme exemplo abaixo:`),ug(),Ac(892,`pre`)(893,`code`),vN(894,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ug()(),Ac(895,`blockquote`)(896,`p`),vN(897,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ac(898,`code`),vN(899,`font-size: inherit`),ug(),vN(900,` caso o ícone utilizado não aplique-o.`),ug()()()(),Ac(901,`tr`,15)(902,`td`,16)(903,`div`,17)(904,`span`,18),vN(905,` (p-keydown)`),Kc(906,`br`),ug()()(),Ac(907,`td`,20)(908,`code`,21),vN(909,`EventEmitter`),ug()(),Ac(910,`td`,22),vN(911,`-`),ug(),Ac(912,`td`,23)(913,`em`)(914,`strong`),vN(915,`(opcional)`),ug()(),Ac(916,`p`),vN(917,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(918,`code`),vN(919,`KeyboardEvent`),ug(),vN(920,` com informações sobre a tecla.`),ug()()(),Ac(921,`tr`,15)(922,`td`,16)(923,`div`,24)(924,`span`,25),vN(925,` p-label`),Kc(926,`br`),ug()()(),Ac(927,`td`,20)(928,`code`,26),vN(929,`string`),ug()(),Ac(930,`td`,22),vN(931,`-`),ug(),Ac(932,`td`,23)(933,`em`)(934,`strong`),vN(935,`(opcional)`),ug()(),Ac(936,`p`),vN(937,`Rótulo do campo.`),ug()()(),Ac(938,`tr`,15)(939,`td`,16)(940,`div`,24)(941,`span`,25),vN(942,` p-label-text-wrap`),Kc(943,`br`),ug()()(),Ac(944,`td`,20)(945,`code`,27),vN(946,`boolean`),ug()(),Ac(947,`td`,22)(948,`p`)(949,`code`),vN(950,`false`),ug()()(),Ac(951,`td`,23)(952,`em`)(953,`strong`),vN(954,`(opcional)`),ug()(),Ac(955,`p`),vN(956,`Habilita a quebra automática do texto da propriedade `),Ac(957,`code`),vN(958,`p-label`),ug(),vN(959,`. Quando `),Ac(960,`code`),vN(961,`p-label-text-wrap`),ug(),vN(962,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(963,`tr`,15)(964,`td`,16)(965,`div`,24)(966,`span`,25),vN(967,` p-loading`),Kc(968,`br`),ug()()(),Ac(969,`td`,20)(970,`code`,27),vN(971,`boolean`),ug()(),Ac(972,`td`,22)(973,`p`)(974,`code`),vN(975,`false`),ug()()(),Ac(976,`td`,23)(977,`em`)(978,`strong`),vN(979,`(opcional)`),ug()(),Ac(980,`p`),vN(981,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug()()(),Ac(982,`tr`,15)(983,`td`,16)(984,`div`,24)(985,`span`,25),vN(986,` p-locale`),Kc(987,`br`),ug()()(),Ac(988,`td`,20)(989,`code`,26),vN(990,`string`),ug()(),Ac(991,`td`,22),vN(992,`-`),ug(),Ac(993,`td`,23)(994,`em`)(995,`strong`),vN(996,`(opcional)`),ug()(),Ac(997,`p`),vN(998,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),Ac(999,`a`,33)(1e3,`code`),vN(1001,`I18n`),ug()()(),Ac(1002,`blockquote`)(1003,`p`),vN(1004,`Para ver quais linguagens suportadas acesse `),Ac(1005,`a`,33)(1006,`code`),vN(1007,`I18n`),ug()()()()()(),Ac(1008,`tr`,15)(1009,`td`,16)(1010,`div`,24)(1011,`span`,25),vN(1012,`p-mask`),Kc(1013,`br`),ug()()(),Ac(1014,`td`,20)(1015,`code`,26),vN(1016,`string`),ug()(),Ac(1017,`td`,22),vN(1018,`-`),ug(),Ac(1019,`td`,23)(1020,`em`)(1021,`strong`),vN(1022,`(opcional)`),ug()(),Ac(1023,`p`),vN(1024,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),ug()()(),Ac(1025,`tr`,15)(1026,`td`,16)(1027,`div`,24)(1028,`span`,25),vN(1029,`p-mask-format-model`),Kc(1030,`br`),ug()()(),Ac(1031,`td`,20)(1032,`code`,27),vN(1033,`boolean`),ug()(),Ac(1034,`td`,22)(1035,`p`)(1036,`code`),vN(1037,`false`),ug()()(),Ac(1038,`td`,23)(1039,`em`)(1040,`strong`),vN(1041,`(opcional)`),ug()(),Ac(1042,`p`),vN(1043,`Indica se o `),Ac(1044,`code`),vN(1045,`model`),ug(),vN(1046,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),ug()()(),Ac(1047,`tr`,15)(1048,`td`,16)(1049,`div`,24)(1050,`span`,25),vN(1051,` p-mask-no-length-validation`),Kc(1052,`br`),ug()()(),Ac(1053,`td`,20)(1054,`code`,27),vN(1055,`boolean`),ug()(),Ac(1056,`td`,22)(1057,`p`)(1058,`code`),vN(1059,`false`),ug()()(),Ac(1060,`td`,23)(1061,`p`),vN(1062,`Controla como o componente aplica as validações de comprimento mínimo (`),Ac(1063,`code`),vN(1064,`minLength`),ug(),vN(1065,`) e máximo (`),Ac(1066,`code`),vN(1067,`maxLength`),ug(),vN(1068,`) quando há uma máscara (`),Ac(1069,`code`),vN(1070,`p-mask`),ug(),vN(1071,`) definida.`),ug(),Ac(1072,`ul`)(1073,`li`),vN(1074,`Quando `),Ac(1075,`code`),vN(1076,`true`),ug(),vN(1077,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ug(),Ac(1078,`li`),vN(1079,`Quando `),Ac(1080,`code`),vN(1081,`false`),ug(),vN(1082,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ug()(),Ac(1083,`blockquote`)(1084,`p`),vN(1085,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ac(1086,`code`),vN(1087,`p-mask-format-model`),ug(),vN(1088,`.`),ug()(),Ac(1089,`p`),vN(1090,`Exemplo:`),ug(),Ac(1091,`pre`)(1092,`code`),vN(1093,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ug()(),Ac(1094,`ul`)(1095,`li`),vN(1096,`Entrada: `),Ac(1097,`code`),vN(1098,`123-456`),ug(),vN(1099,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Ac(1100,`code`),vN(1101,`-`),ug(),vN(1102,`.`),ug()()()(),Ac(1103,`tr`,15)(1104,`td`,16)(1105,`div`,24)(1106,`span`,25),vN(1107,` p-max`),Kc(1108,`br`),ug()()(),Ac(1109,`td`,20)(1110,`code`,28),vN(1111,`number`),ug()(),Ac(1112,`td`,22),vN(1113,`-`),ug(),Ac(1114,`td`,23)(1115,`em`)(1116,`strong`),vN(1117,`(opcional)`),ug()(),Ac(1118,`p`),vN(1119,`Valor máximo.`),ug()()(),Ac(1120,`tr`,15)(1121,`td`,16)(1122,`div`,24)(1123,`span`,25),vN(1124,` p-maxlength`),Kc(1125,`br`),ug()()(),Ac(1126,`td`,20)(1127,`code`,28),vN(1128,`number`),ug()(),Ac(1129,`td`,22),vN(1130,`-`),ug(),Ac(1131,`td`,23)(1132,`em`)(1133,`strong`),vN(1134,`(opcional)`),ug()(),Ac(1135,`p`),vN(1136,`Indica a quantidade máxima de caracteres que o campo aceita.`),ug()()(),Ac(1137,`tr`,15)(1138,`td`,16)(1139,`div`,24)(1140,`span`,25),vN(1141,` p-min`),Kc(1142,`br`),ug()()(),Ac(1143,`td`,20)(1144,`code`,28),vN(1145,`number`),ug()(),Ac(1146,`td`,22),vN(1147,`-`),ug(),Ac(1148,`td`,23)(1149,`em`)(1150,`strong`),vN(1151,`(opcional)`),ug()(),Ac(1152,`p`),vN(1153,`Valor mínimo.`),ug()()(),Ac(1154,`tr`,15)(1155,`td`,16)(1156,`div`,24)(1157,`span`,25),vN(1158,` p-minlength`),Kc(1159,`br`),ug()()(),Ac(1160,`td`,20)(1161,`code`,28),vN(1162,`number`),ug()(),Ac(1163,`td`,22),vN(1164,`-`),ug(),Ac(1165,`td`,23)(1166,`em`)(1167,`strong`),vN(1168,`(opcional)`),ug()(),Ac(1169,`p`),vN(1170,`Indica a quantidade mínima de caracteres que o campo aceita.`),ug()()(),Ac(1171,`tr`,15)(1172,`td`,16)(1173,`div`,24)(1174,`span`,25),vN(1175,` name`),Kc(1176,`br`),ug()()(),Ac(1177,`td`,20)(1178,`code`,26),vN(1179,`string`),ug()(),Ac(1180,`td`,22),vN(1181,`-`),ug(),Ac(1182,`td`,23)(1183,`p`),vN(1184,`Nome e identificador do campo.`),ug()()(),Ac(1185,`tr`,15)(1186,`td`,16)(1187,`div`,24)(1188,`span`,25),vN(1189,` p-no-autocomplete`),Kc(1190,`br`),ug()()(),Ac(1191,`td`,20)(1192,`code`,27),vN(1193,`boolean`),ug()(),Ac(1194,`td`,22)(1195,`p`)(1196,`code`),vN(1197,`false`),ug()()(),Ac(1198,`td`,23)(1199,`em`)(1200,`strong`),vN(1201,`(opcional)`),ug()(),Ac(1202,`p`),vN(1203,`Define a propriedade nativa `),Ac(1204,`code`),vN(1205,`autocomplete`),ug(),vN(1206,` do campo como `),Ac(1207,`code`),vN(1208,`off`),ug(),vN(1209,`.`),ug(),Ac(1210,`blockquote`)(1211,`p`),vN(1212,`No componente `),Ac(1213,`code`),vN(1214,`po-password`),ug(),vN(1215,` será definido como `),Ac(1216,`code`),vN(1217,`new-password`),ug(),vN(1218,`.`),ug()(),Ac(1219,`p`),vN(1220,`Nos componentes `),Ac(1221,`code`),vN(1222,`po-password`),ug(),vN(1223,` e `),Ac(1224,`code`),vN(1225,`po-login`),ug(),vN(1226,` o valor padrão será `),Ac(1227,`code`),vN(1228,`true`),ug(),vN(1229,`.`),ug()()(),Ac(1230,`tr`,15)(1231,`td`,16)(1232,`div`,24)(1233,`span`,25),vN(1234,` p-optional`),Kc(1235,`br`),ug()()(),Ac(1236,`td`,20)(1237,`code`,27),vN(1238,`boolean`),ug()(),Ac(1239,`td`,22)(1240,`p`)(1241,`code`),vN(1242,`false`),ug()()(),Ac(1243,`td`,23)(1244,`em`)(1245,`strong`),vN(1246,`(opcional)`),ug()(),Ac(1247,`p`),vN(1248,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(1249,`blockquote`)(1250,`p`),vN(1251,`Não será exibida a indicação se:`),ug()(),Ac(1252,`ul`)(1253,`li`),vN(1254,`O campo conter `),Ac(1255,`code`),vN(1256,`p-required`),ug(),vN(1257,`;`),ug(),Ac(1258,`li`),vN(1259,`Não possuir `),Ac(1260,`code`),vN(1261,`p-help`),ug(),vN(1262,` e/ou `),Ac(1263,`code`),vN(1264,`p-label`),ug(),vN(1265,`.`),ug()()()(),Ac(1266,`tr`,15)(1267,`td`,16)(1268,`div`,24)(1269,`span`,25),vN(1270,`p-pattern`),Kc(1271,`br`),ug()()(),Ac(1272,`td`,20)(1273,`code`,26),vN(1274,`string`),ug()(),Ac(1275,`td`,22),vN(1276,`-`),ug(),Ac(1277,`td`,23)(1278,`em`)(1279,`strong`),vN(1280,`(opcional)`),ug()(),Ac(1281,`p`),vN(1282,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Ac(1283,`code`),vN(1284,`(p-mask)`),ug(),vN(1285,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ug()()(),Ac(1286,`tr`,15)(1287,`td`,16)(1288,`div`,24)(1289,`span`,25),vN(1290,` p-placeholder`),Kc(1291,`br`),ug()()(),Ac(1292,`td`,20)(1293,`code`,26),vN(1294,`string`),ug()(),Ac(1295,`td`,22)(1296,`p`),vN(1297,`''`),ug()(),Ac(1298,`td`,23)(1299,`em`)(1300,`strong`),vN(1301,`(opcional)`),ug()(),Ac(1302,`p`),vN(1303,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ug()()(),Ac(1304,`tr`,15)(1305,`td`,16)(1306,`div`,24)(1307,`span`,25),vN(1308,` p-helper`),Kc(1309,`br`),ug()()(),Ac(1310,`td`,20)(1311,`code`,34),vN(1312,`PoHelperOptions `),ug(),Ac(1313,`code`,26),vN(1314,` string`),ug()(),Ac(1315,`td`,22),vN(1316,`-`),ug(),Ac(1317,`td`,23)(1318,`em`)(1319,`strong`),vN(1320,`(opcional)`),ug()(),Ac(1321,`p`),vN(1322,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(1323,`code`),vN(1324,`p-label`),ug(),vN(1325,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(1326,`code`),vN(1327,`p-label`),ug(),vN(1328,`.`),ug(),Ac(1329,`blockquote`)(1330,`p`),vN(1331,`Para mais informações acesse: `),Ac(1332,`a`,35),vN(1333,`https://po-ui.io/documentation/po-helper`),ug(),vN(1334,`.`),ug()(),Ac(1335,`blockquote`)(1336,`p`),vN(1337,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(1338,`code`),vN(1339,`p-additional-help-tooltip`),ug(),vN(1340,` e `),Ac(1341,`code`),vN(1342,`p-additional-help`),ug(),vN(1343,`) será ignorado.`),ug()()()(),Ac(1344,`tr`,15)(1345,`td`,16)(1346,`div`,24)(1347,`span`,25),vN(1348,`p-readonly`),Kc(1349,`br`),ug()()(),Ac(1350,`td`,20)(1351,`code`,27),vN(1352,`boolean`),ug()(),Ac(1353,`td`,22),vN(1354,`-`),ug(),Ac(1355,`td`,23)(1356,`em`)(1357,`strong`),vN(1358,`(opcional)`),ug()(),Ac(1359,`p`),vN(1360,`Indica que o campo será somente leitura.`),ug()()(),Ac(1361,`tr`,15)(1362,`td`,16)(1363,`div`,24)(1364,`span`,25),vN(1365,`p-required`),Kc(1366,`br`),ug()()(),Ac(1367,`td`,20)(1368,`code`,27),vN(1369,`boolean`),ug()(),Ac(1370,`td`,22)(1371,`p`)(1372,`code`),vN(1373,`false`),ug()()(),Ac(1374,`td`,23)(1375,`em`)(1376,`strong`),vN(1377,`(opcional)`),ug()(),Ac(1378,`p`),vN(1379,`Define que o campo será obrigatório.`),ug(),Ac(1380,`blockquote`)(1381,`p`),vN(1382,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ac(1383,`code`),vN(1384,`(p-disabled)`),ug(),vN(1385,`.`),ug()()()(),Ac(1386,`tr`,15)(1387,`td`,16)(1388,`div`,24)(1389,`span`,25),vN(1390,` p-required-field-error-message`),Kc(1391,`br`),ug()()(),Ac(1392,`td`,20)(1393,`code`,27),vN(1394,`boolean`),ug()(),Ac(1395,`td`,22)(1396,`p`)(1397,`code`),vN(1398,`false`),ug()()(),Ac(1399,`td`,23)(1400,`em`)(1401,`strong`),vN(1402,`(opcional)`),ug()(),Ac(1403,`p`),vN(1404,`Exibe a mensagem setada na propriedade `),Ac(1405,`code`),vN(1406,`p-error-pattern`),ug(),vN(1407,` se o campo estiver vazio e for requerido.`),ug(),Ac(1408,`blockquote`)(1409,`p`),vN(1410,`Necessário que a propriedade `),Ac(1411,`code`),vN(1412,`p-required`),ug(),vN(1413,` esteja habilitada.`),ug()()()(),Ac(1414,`tr`,15)(1415,`td`,16)(1416,`div`,24)(1417,`span`,25),vN(1418,` p-show-required`),Kc(1419,`br`),ug()()(),Ac(1420,`td`,20)(1421,`code`,27),vN(1422,`boolean`),ug()(),Ac(1423,`td`,22),vN(1424,`-`),ug(),Ac(1425,`td`,23)(1426,`p`),vN(1427,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(1428,`blockquote`)(1429,`p`),vN(1430,`Não será exibida a indicação se:`),ug()(),Ac(1431,`ul`)(1432,`li`),vN(1433,`Não possuir `),Ac(1434,`code`),vN(1435,`p-help`),ug(),vN(1436,` e/ou `),Ac(1437,`code`),vN(1438,`p-label`),ug(),vN(1439,`.`),ug()()()(),Ac(1440,`tr`,15)(1441,`td`,16)(1442,`div`,24)(1443,`span`,25),vN(1444,` p-size`),Kc(1445,`br`),ug()()(),Ac(1446,`td`,20)(1447,`code`,26),vN(1448,`string`),ug()(),Ac(1449,`td`,22)(1450,`p`)(1451,`code`),vN(1452,`medium`),ug()()(),Ac(1453,`td`,23)(1454,`em`)(1455,`strong`),vN(1456,`(opcional)`),ug()(),Ac(1457,`p`),vN(1458,`Define o tamanho do componente:`),ug(),Ac(1459,`ul`)(1460,`li`)(1461,`code`),vN(1462,`small`),ug(),vN(1463,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(1464,`li`)(1465,`code`),vN(1466,`medium`),ug(),vN(1467,`: altura do input como 44px.`),ug()(),Ac(1468,`blockquote`)(1469,`p`),vN(1470,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(1471,`code`),vN(1472,`medium`),ug(),vN(1473,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(1474,`a`,36),vN(1475,`po-theme`),ug(),vN(1476,`.`),ug()()()(),Ac(1477,`tr`,15)(1478,`td`,16)(1479,`div`,24)(1480,`span`,25),vN(1481,` p-thousand-maxlength`),Kc(1482,`br`),ug()()(),Ac(1483,`td`,20)(1484,`code`,28),vN(1485,`number`),ug()(),Ac(1486,`td`,22)(1487,`p`)(1488,`code`),vN(1489,`13`),ug()()(),Ac(1490,`td`,23)(1491,`em`)(1492,`strong`),vN(1493,`(opcional)`),ug()(),Ac(1494,`p`),vN(1495,`Quantidade máxima de dígitos antes do separador decimal.`),ug(),Ac(1496,`blockquote`)(1497,`p`)(1498,`strong`),vN(1499,`Importante:`),ug()()(),Ac(1500,`ul`)(1501,`li`),vN(1502,`O valor máximo permitido é 13;`),ug(),Ac(1503,`li`),vN(1504,`A soma total de `),Ac(1505,`code`),vN(1506,`p-decimals-length`),ug(),vN(1507,` com `),Ac(1508,`code`),vN(1509,`p-thousand-maxlength`),ug(),vN(1510,` limita-se à 16;`),ug(),Ac(1511,`li`),vN(1512,`Esta propriedade sobrepõe o valor definido em `),Ac(1513,`code`),vN(1514,`p-decimals-length`),ug(),vN(1515,`.`),ug(),Ac(1516,`li`),vN(1517,`Quando utilizado com `),Ac(1518,`code`),vN(1519,`p-display-format`),ug(),vN(1520,`, será respeitado o valor `),Ac(1521,`strong`),vN(1522,`mais restritivo`),ug(),vN(1523,` entre esta propriedade e o n\xFAmero de d\xEDgitos inteiros definido no
formato.`),ug()()()(),Ac(1524,`tr`,15)(1525,`td`,16)(1526,`div`,24)(1527,`span`,25),vN(1528,` p-upper-case`),Kc(1529,`br`),ug()()(),Ac(1530,`td`,20)(1531,`code`,27),vN(1532,`boolean`),ug()(),Ac(1533,`td`,22),vN(1534,`-`),ug(),Ac(1535,`td`,23)(1536,`p`),vN(1537,`Converte o conteúdo do campo em maiúsulo automaticamente.`),ug()()()(),Ac(1538,`h3`,11),vN(1539,`Métodos`),ug(),Ac(1540,`table`,37)(1541,`tr`,15)(1542,`th`,38)(1543,`div`,24)(1544,`h4`)(1545,`span`,25),vN(1546,` showAdditionalHelp `),ug()()()()(),Ac(1547,`tr`,23)(1548,`td`,23)(1549,`p`),vN(1550,`Método que exibe `),Ac(1551,`code`),vN(1552,`p-helper`),ug(),vN(1553,` ou executa a ação definida em `),Ac(1554,`code`),vN(1555,`p-helper{eventOnClick}`),ug(),vN(1556,` ou em `),Ac(1557,`code`),vN(1558,`p-additionalHelp`),ug(),vN(1559,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(1560,`code`),vN(1561,`p-keydown`),ug(),vN(1562,`.`),ug(),Ac(1563,`blockquote`)(1564,`p`),vN(1565,`Exibe ou oculta o conteúdo do componente `),Ac(1566,`code`),vN(1567,`po-helper`),ug(),vN(1568,` quando o componente estiver com foco.`),ug()(),Ac(1569,`pre`)(1570,`code`),vN(1571,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ug()(),Ac(1572,`pre`)(1573,`code`),vN(1574,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(1575,`br`),Ac(1576,`table`,37)(1577,`tr`,15)(1578,`th`,38)(1579,`div`,24)(1580,`h4`)(1581,`span`,25),vN(1582,` focus `),ug()()()()(),Ac(1583,`tr`,23)(1584,`td`,23)(1585,`p`),vN(1586,`Função que atribui foco ao componente.`),ug(),Ac(1587,`p`),vN(1588,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(1589,`pre`)(1590,`code`),vN(1591,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ug()()()()(),Kc(1592,`br`),Ac(1593,`h3`),vN(1594,`Interfaces`),ug(),Ac(1595,`h4`,39)(1596,`code`,5),vN(1597,`ErrorAsyncProperties`),ug()(),Ac(1598,`div`,2)(1599,`p`),vN(1600,`Interface para realizar uma validação assíncrona no componente.`),ug()(),Ac(1601,`h4`,11),vN(1602,`Propriedades`),ug(),Ac(1603,`table`,12)(1604,`tr`,13)(1605,`th`,14),vN(1606,`Nome`),ug(),Ac(1607,`th`,14),vN(1608,`Tipo`),ug(),Ac(1609,`th`,14),vN(1610,`Descrição`),ug()(),Ac(1611,`tr`,15)(1612,`td`,16)(1613,`div`,24)(1614,`span`,25),vN(1615,` errorAsync`),Kc(1616,`br`),ug()()(),Ac(1617,`td`,20)(1618,`code`,40),vN(1619,`(value) => Observable<boolean>`),ug()(),Ac(1620,`td`,23)(1621,`p`),vN(1622,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ac(1623,`code`),vN(1624,`change`),ug(),vN(1625,` ou `),Ac(1626,`code`),vN(1627,`change-model`),ug(),vN(1628,`, dependendo do valor da propriedade `),Ac(1629,`code`),vN(1630,`triggerMode`),ug(),vN(1631,`.`),ug()()(),Ac(1632,`tr`,15)(1633,`td`,16)(1634,`div`,24)(1635,`span`,25),vN(1636,` triggerMode`),Kc(1637,`br`),ug()()(),Ac(1638,`td`,20)(1639,`code`,41),vN(1640,`'change' `),ug(),Ac(1641,`code`,42),vN(1642,` 'changeModel'`),ug()(),Ac(1643,`td`,23)(1644,`em`)(1645,`strong`),vN(1646,`(opcional)`),ug()(),Ac(1647,`p`),vN(1648,`Controla se o método será executado no disparo do output `),Ac(1649,`code`),vN(1650,`change`),ug(),vN(1651,` ou `),Ac(1652,`code`),vN(1653,`change-model`),ug(),vN(1654,`.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return l})();var ze=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(E(Qn),E(wn))};static ɵcmp=Hn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Decimal`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-decimal-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-decimal-basic-view`)(6,`sample-po-decimal-labs-view`)(7,`sample-po-decimal-hourly-wage-view`)(8,`sample-po-decimal-hourly-wage-reactive-form-view`)(9,`sample-po-decimal-display-format-view`),ug()()()),r&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,pe,ce,ge,he,be,xe],encapsulation:2,changeDetection:1})}return l})()}];var ye=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue$1({imports:[kL.forChild(ze),kL]})}return l})();var ft=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue$1({imports:[Ta,ye]})}return l})();export{ft as DocPoDecimalModule};