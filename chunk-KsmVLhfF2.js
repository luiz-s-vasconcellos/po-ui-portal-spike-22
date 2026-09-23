import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he$1,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,aa as qk,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,ea as p0,ga as w,hr as MY,in as jye,ki as fm,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ti as Wk,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var de=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`decimal`,`p-label`,`PO Decimal`]],template:function(r,i){r&1&&ql(0,`po-decimal`,0)},dependencies:[jye],encapsulation:2,changeDetection:1})}return l})();var Ce=l=>({"docs-sample-code-tabs":l});var pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Decimal Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-decimal-basic/sample-po-decimal-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-decimal-basic/sample-po-decimal-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-decimal-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ce,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,de],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{helperText;decimal;decimalsLength;event;displayFormat;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:`pt`,label:`Portuguese`},{value:`en`,label:`English`},{value:`ru`,label:`Russian`},{value:`es`,label:`Spanish`}];iconOptions=[{value:`an an-shopping-cart-simple`,label:`an an-shopping-cart-simple`},{value:`an an-currency-dollar-simple`,label:`an an-currency-dollar-simple`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.decimal=void 0,this.decimalsLength=void 0,this.event=``,this.displayFormat=void 0,this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder=``,this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size=`medium`,this.properties=[]}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`decimal`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-decimals-length`,`p-disabled`,`p-display-format`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-locale`,`p-error-pattern`,`p-max`,`p-min`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-thousand-maxlength`,`p-label-text-wrap`,`p-compact-label`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`displayFormat`,`p-clean`,``,`p-label`,`Display Format`,`p-help`,`Ex: >>>,>>9.99 | ->>9.99 | 999.9 | >>9.9<<`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`min`,`p-clean`,``,`p-label`,`Min`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-clean`,``,`p-label`,`Max`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`locale`,`p-clean`,``,`p-label`,`Locale`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`decimalsLength`,`p-clean`,``,`p-help`,`Máximo 15`,`p-label`,`Decimals max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`thousandMaxlength`,`p-clean`,``,`p-help`,`Máximo 13`,`p-label`,`Thousand max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Vx();Ml(0,`po-decimal`,1),ht(`ngModelChange`,function(a){return i.decimal=a})(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3)(4,`po-info`,4),lg(),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`po-input`,5),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.label,a)||(i.label=a),Jy(a)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.help,a)||(i.help=a),Jy(a)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.helperText,a)||(i.helperText=a),Jy(a)}),lg(),f0(),Ml(11,`po-input`,8),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.placeholder,a)||(i.placeholder=a),Jy(a)}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.errorPattern,a)||(i.errorPattern=a),Jy(a)}),lg(),f0(),Ml(13,`po-input`,10),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.displayFormat,a)||(i.displayFormat=a),Jy(a)}),lg(),f0(),Ml(14,`po-select`,11),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.icon,a)||(i.icon=a),Jy(a)}),lg(),f0(),Ml(15,`po-number`,12),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.min,a)||(i.min=a),Jy(a)}),lg(),f0(),Ml(16,`po-number`,13),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.max,a)||(i.max=a),Jy(a)}),lg(),f0(),Ml(17,`po-select`,14),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.locale,a)||(i.locale=a),Jy(a)}),lg(),f0(),Ml(18,`po-number`,15),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.decimalsLength,a)||(i.decimalsLength=a),Jy(a)}),lg(),f0(),Ml(19,`po-number`,16),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.thousandMaxlength,a)||(i.thousandMaxlength=a),Jy(a)}),lg(),f0(),Ml(20,`po-checkbox-group`,17),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.properties,a)||(i.properties=a),Jy(a)}),lg(),f0(),Ml(21,`po-radio-group`,18),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.size,a)||(i.size=a),Jy(a)}),lg(),f0(),Ml(22,`div`,2)(23,`po-button`,19),ht(`p-click`,function(){return i.restore()}),lg()()()}r&2&&(cw(`ngModel`,i.decimal)(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-decimals-length`,i.decimalsLength)(`p-disabled`,i.properties.includes(`disabled`))(`p-display-format`,i.displayFormat)(`p-help`,i.help)(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-locale`,i.locale)(`p-error-pattern`,i.errorPattern)(`p-max`,i.max)(`p-min`,i.min)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-thousand-maxlength`,i.thousandMaxlength)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-error-limit`,i.properties?.includes(`errorLimit`)),p0(),Up(3),cw(`p-value`,i.decimal),Up(),cw(`p-value`,i.event),Up(4),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.helperText),p0(),Up(),Tw(`ngModel`,i.placeholder),p0(),Up(),Tw(`ngModel`,i.errorPattern),p0(),Up(),Tw(`ngModel`,i.displayFormat),p0(),Up(),Tw(`ngModel`,i.icon),cw(`p-options`,i.iconOptions),p0(),Up(),Tw(`ngModel`,i.min),p0(),Up(),Tw(`ngModel`,i.max),p0(),Up(),Tw(`ngModel`,i.locale),cw(`p-options`,i.localeOptions),p0(),Up(),Tw(`ngModel`,i.decimalsLength),cw(`p-max`,i.maxDecimalsLength),p0(),Up(),Tw(`ngModel`,i.thousandMaxlength),cw(`p-max`,i.maxThousandMaxlength),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-columns`,4)(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,jye,lU,xbe,q0e,Tbe,kbe],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l});var ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Decimal Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-decimal-labs/sample-po-decimal-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-decimal
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-decimal-labs/sample-po-decimal-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-decimal-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,we,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,se],encapsulation:2,changeDetection:1})}return l})();var ue=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let p=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/p;this.hourlyWage=r}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-hourly-wage`]],standalone:!1,decls:16,vars:6,consts:[[`f`,`ngForm`],[1,`po-font-title`],[1,`po-row`],[`name`,`weekHours`,`p-label`,`Week Hours`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`workingDaysPerWeek`,`p-label`,`Working days per week`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=Vx();Ml(0,`form`,null,0)(2,`div`,1),mN(3,`Calculate hourly wage`),lg(),ql(4,`po-divider`),Ml(5,`div`,2)(6,`po-number`,3),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.weekHours,a)||(i.weekHours=a),Jy(a)}),lg(),f0(),Ml(7,`po-number`,4),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),Jy(a)}),lg(),f0(),lg(),Ml(8,`div`,2)(9,`po-number`,5),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),Jy(a)}),lg(),f0(),Ml(10,`po-decimal`,6),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.salary,a)||(i.salary=a),Jy(a)}),ht(`p-change`,function(){return i.calculate()}),lg(),f0(),lg(),Ml(11,`div`,2)(12,`po-decimal`,7),Mw(`ngModelChange`,function(a){return Qy(s),yN(i.hourlyWage,a)||(i.hourlyWage=a),Jy(a)}),lg(),f0(),lg(),Ml(13,`div`,2)(14,`po-button`,8),ht(`p-click`,function(){Qy(s);return Jy(Yx(1).reset())}),lg(),Ml(15,`po-button`,9),ht(`p-click`,function(){return i.calculate()}),lg()()()}r&2&&(Up(6),Tw(`ngModel`,i.weekHours),p0(),Up(),Tw(`ngModel`,i.workingDaysPerWeek),p0(),Up(2),Tw(`ngModel`,i.quantityDaysPerMonth),p0(),Up(),Tw(`ngModel`,i.salary),p0(),Up(2),Tw(`ngModel`,i.hourlyWage),p0(),Up(3),cw(`p-disabled`,!i.hourlyWage))},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,jye,xbe],encapsulation:2,changeDetection:1})}return l})();var ke=l=>({"docs-sample-code-tabs":l});var ge=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-hourly-wage-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Decimal - Hourly Wage`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form #f="ngForm">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-decimal-hourly-wage`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ke,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ue],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{formBuilder=f(MY);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,fm.required],salary:[null,fm.required],weekHours:[null,fm.required],workingDaysPerWeek:[null,fm.required]})}calculate(){let{weekHours:p,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:s}=this.formCalculateHourlyWage.value,a=s/(p/r*i);this.formCalculateHourlyWage.patchValue({hourlyWage:a})}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-hourly-wage-reactive-form`]],standalone:!1,decls:15,vars:2,consts:[[3,`formGroup`],[1,`po-font-title`],[1,`po-row`],[`formControlName`,`weekHours`,`p-label`,`Week Hours`,1,`po-md-6`],[`formControlName`,`workingDaysPerWeek`,`p-label`,`Working days per week`,1,`po-md-6`],[`formControlName`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,1,`po-md-6`],[`formControlName`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`p-change`],[`formControlName`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-thousand-maxlength`,`13`,1,`po-md-6`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){r&1&&(Ml(0,`form`,0)(1,`div`,1),mN(2,`Calculate hourly wage`),lg(),ql(3,`po-divider`),Ml(4,`div`,2),ql(5,`po-number`,3),f0(),ql(6,`po-number`,4),f0(),lg(),Ml(7,`div`,2),ql(8,`po-number`,5),f0(),Ml(9,`po-decimal`,6),ht(`p-change`,function(){return i.calculate()}),lg(),f0(),lg(),Ml(10,`div`,2),ql(11,`po-decimal`,7),f0(),lg(),Ml(12,`div`,2)(13,`po-button`,8),ht(`p-click`,function(){return i.formCalculateHourlyWage.reset()}),lg(),Ml(14,`po-button`,9),ht(`p-click`,function(){return i.calculate()}),lg()()()),r&2&&(cw(`formGroup`,i.formCalculateHourlyWage),Up(5),p0(),Up(),p0(),Up(2),p0(),Up(),p0(),Up(2),p0(),Up(3),cw(`p-disabled`,i.formCalculateHourlyWage.invalid))},dependencies:[IY,wY,CY,qk,Wk,Zt,nb,jye,xbe],encapsulation:2,changeDetection:1})}return l})();var We=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-hourly-wage-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Decimal - Hourly Wage Reactive Form`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form [formGroup]="formCalculateHourlyWage">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-decimal-hourly-wage-reactive-form`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,We,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Ee],encapsulation:2,changeDetection:1})}return l})();var Se=(()=>{class l{price=99.9;quantity=3;discount=-10.5;tax=8.5;shipping=15;subtotal;taxValue;totalOrder;calculate(){let p=(this.price??0)*(this.quantity??0)+(this.discount??0);this.subtotal=p,this.taxValue=p*((this.tax??0)/100),this.totalOrder=p+this.taxValue+(this.shipping??0)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-display-format`]],standalone:!1,decls:17,vars:14,consts:[[1,`po-font-title`],[1,`po-row`],[`name`,`price`,`p-label`,`Unit Price`,`p-help`,`Enter the product price`,`p-display-format`,`>>>>>>>>9.99`,`p-icon`,`an an-tag-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantity`,`p-label`,`Quantity`,`p-help`,`Enter the number of items`,`p-display-format`,`999`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`discount`,`p-label`,`Discount`,`p-help`,`Enter a discount (use negative for deduction)`,`p-display-format`,`->>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tax`,`p-label`,`Tax (%)`,`p-help`,`Tax percentage applied to the subtotal`,`p-display-format`,`>>9.9<<`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`shipping`,`p-label`,`Shipping`,`p-help`,`Shipping cost`,`p-display-format`,`>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-optional`,`ngModel`],[1,`po-lg-4`,`po-md-6`,`po-mt-4`],[`p-label`,`Calculate Total`,`p-icon`,`an an-calculator`,`p-kind`,`primary`,3,`p-click`],[`name`,`subtotal`,`p-label`,`Subtotal`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-equals`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`taxValue`,`p-label`,`Taxes`,`p-display-format`,`>>>,>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`totalOrder`,`p-label`,`Order Total`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-currency-dollar-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`]],template:function(r,i){r&1&&(Ml(0,`div`,0),mN(1,`Order Simulation`),lg(),ql(2,`po-divider`),Ml(3,`div`,1)(4,`po-decimal`,2),ht(`ngModelChange`,function(d){return i.price=d}),lg(),f0(),Ml(5,`po-decimal`,3),ht(`ngModelChange`,function(d){return i.quantity=d}),lg(),f0(),Ml(6,`po-decimal`,4),ht(`ngModelChange`,function(d){return i.discount=d}),lg(),f0(),lg(),Ml(7,`div`,1)(8,`po-decimal`,5),ht(`ngModelChange`,function(d){return i.tax=d}),lg(),f0(),Ml(9,`po-decimal`,6),ht(`ngModelChange`,function(d){return i.shipping=d}),lg(),f0(),Ml(10,`div`,7)(11,`po-button`,8),ht(`p-click`,function(){return i.calculate()}),lg()()(),ql(12,`po-divider`),Ml(13,`div`,1)(14,`po-decimal`,9),ht(`ngModelChange`,function(d){return i.subtotal=d}),lg(),f0(),Ml(15,`po-decimal`,10),ht(`ngModelChange`,function(d){return i.taxValue=d}),lg(),f0(),Ml(16,`po-decimal`,11),ht(`ngModelChange`,function(d){return i.totalOrder=d}),lg(),f0(),lg()),r&2&&(Up(4),cw(`ngModel`,i.price),p0(),Up(),cw(`p-decimals-length`,0)(`ngModel`,i.quantity),p0(),Up(),cw(`ngModel`,i.discount),p0(),Up(2),cw(`p-decimals-length`,3)(`ngModel`,i.tax),p0(),Up(),cw(`p-optional`,!0)(`ngModel`,i.shipping),p0(),Up(5),cw(`p-readonly`,!0)(`ngModel`,i.subtotal),p0(),Up(),cw(`p-readonly`,!0)(`ngModel`,i.taxValue),p0(),Up(),cw(`p-readonly`,!0)(`ngModel`,i.totalOrder),p0())},dependencies:[wY,Vk,Zt,nb,jye],encapsulation:2})}return l})();var He=l=>({"docs-sample-code-tabs":l});var be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-display-format-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Decimal - Display Format`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-font-title">Order Simulation</div>

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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-decimal-display-format`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,He,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Se],encapsulation:2,changeDetection:1})}return l})();var xe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-doc`]],standalone:!1,decls:1655,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoDecimalComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),lg(),Ml(24,`p`),mN(25,`Importante:`),lg(),Ml(26,`ul`)(27,`li`),mN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),lg()(),Ml(29,`h4`),mN(30,`Tokens customizáveis`),lg(),Ml(31,`p`),mN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),ql(33,`br`),mN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ml(35,`code`),mN(36,`.po-input`),lg()(),Ml(37,`blockquote`)(38,`p`),mN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Ml(40,`a`,6),mN(41,`Grid System`),lg(),mN(42,`.`),lg()(),Ml(43,`blockquote`)(44,`p`),mN(45,`Para maiores informações, acesse o guia `),Ml(46,`a`,7),mN(47,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(48,`.`),lg()(),Ml(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),mN(53,`Propriedade`),lg(),Ml(54,`th`),mN(55,`Descrição`),lg(),Ml(56,`th`),mN(57,`Valor Padrão`),lg()()(),Ml(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),mN(62,`Default Values`),lg()(),ql(63,`td`)(64,`td`),lg(),Ml(65,`tr`)(66,`td`)(67,`code`),mN(68,`--font-family`),lg()(),Ml(69,`td`),mN(70,`Família tipográfica usada`),lg(),Ml(71,`td`)(72,`code`),mN(73,`var(--font-family-theme)`),lg()()(),Ml(74,`tr`)(75,`td`)(76,`code`),mN(77,`--font-size`),lg()(),Ml(78,`td`),mN(79,`Tamanho da fonte`),lg(),Ml(80,`td`)(81,`code`),mN(82,`var(--font-size-default)`),lg()()(),Ml(83,`tr`)(84,`td`)(85,`code`),mN(86,`--text-color-placeholder`),lg()(),Ml(87,`td`),mN(88,`Cor do texto placeholder`),lg(),Ml(89,`td`)(90,`code`),mN(91,`var(--color-neutral-light-30)`),lg()()(),Ml(92,`tr`)(93,`td`)(94,`code`),mN(95,`--color`),lg()(),Ml(96,`td`),mN(97,`Cor pincipal do input`),lg(),Ml(98,`td`)(99,`code`),mN(100,`var(--color-neutral-dark-70)`),lg()()(),Ml(101,`tr`)(102,`td`)(103,`code`),mN(104,`--background`),lg()(),Ml(105,`td`),mN(106,`Cor de background`),lg(),Ml(107,`td`)(108,`code`),mN(109,`var(--color-neutral-light-05)`),lg()()(),Ml(110,`tr`)(111,`td`)(112,`code`),mN(113,`--padding`),lg()(),Ml(114,`td`),mN(115,`Preenchimento`),lg(),Ml(116,`td`)(117,`code`),mN(118,`0 0.5rem`),lg()()(),Ml(119,`tr`)(120,`td`)(121,`code`),mN(122,`--text-color`),lg()(),Ml(123,`td`),mN(124,`Cor do texto`),lg(),Ml(125,`td`)(126,`code`),mN(127,`var(--color-neutral-dark-90)`),lg()()(),Ml(128,`tr`)(129,`td`)(130,`code`),mN(131,`--field-container-title-justify`),lg()(),Ml(132,`td`),mN(133,`Alinhamento horizontal do título (`),Ml(134,`code`),mN(135,`justify-content`),lg(),mN(136,`)`),lg(),Ml(137,`td`)(138,`code`),mN(139,`space-between`),lg()()(),Ml(140,`tr`)(141,`td`)(142,`code`),mN(143,`--field-container-title-flex`),lg()(),Ml(144,`td`),mN(145,`Flex do título (`),Ml(146,`code`),mN(147,`flex`),lg(),mN(148,`)`),lg(),Ml(149,`td`)(150,`code`),mN(151,`1 auto`),lg()()(),Ml(152,`tr`)(153,`td`)(154,`strong`),mN(155,`Hover`),lg()(),ql(156,`td`)(157,`td`),lg(),Ml(158,`tr`)(159,`td`)(160,`code`),mN(161,`--color-hover`),lg()(),Ml(162,`td`),mN(163,`Cor principal no estado hover`),lg(),Ml(164,`td`)(165,`code`),mN(166,`var(--color-brand-01-dark)`),lg()()(),Ml(167,`tr`)(168,`td`)(169,`code`),mN(170,`--background-hover`),lg()(),Ml(171,`td`),mN(172,`Cor de background no estado hover`),lg(),Ml(173,`td`)(174,`code`),mN(175,`var(--color-brand-01-lightest)`),lg()()(),Ml(176,`tr`)(177,`td`)(178,`strong`),mN(179,`Focused`),lg()(),ql(180,`td`)(181,`td`),lg(),Ml(182,`tr`)(183,`td`)(184,`code`),mN(185,`--color-focused`),lg()(),Ml(186,`td`),mN(187,`Cor principal no estado de focus`),lg(),Ml(188,`td`)(189,`code`),mN(190,`var(--color-action-default)`),lg()()(),Ml(191,`tr`)(192,`td`)(193,`code`),mN(194,`--outline-color-focused`),lg()(),Ml(195,`td`),mN(196,`Cor do outline do estado de focus`),lg(),Ml(197,`td`)(198,`code`),mN(199,`var(--color-action-focus)`),lg()()(),Ml(200,`tr`)(201,`td`)(202,`strong`),mN(203,`Disabled`),lg()(),ql(204,`td`)(205,`td`),lg(),Ml(206,`tr`)(207,`td`)(208,`code`),mN(209,`--color-disabled`),lg()(),Ml(210,`td`),mN(211,`Cor principal no estado disabled`),lg(),Ml(212,`td`)(213,`code`),mN(214,`var(--color-neutral-light-30)`),lg()()(),Ml(215,`tr`)(216,`td`)(217,`code`),mN(218,`--background-disabled`),lg()(),Ml(219,`td`),mN(220,`Cor de background no estado disabled`),lg(),Ml(221,`td`)(222,`code`),mN(223,`var(--color-neutral-light-20)`),lg()()(),Ml(224,`tr`)(225,`td`)(226,`code`),mN(227,`--text-color-disabled`),lg()(),Ml(228,`td`),mN(229,`Cor do texto no estado disabled`),lg(),Ml(230,`td`)(231,`code`),mN(232,`var(--color-neutral-dark-70)`),lg()()()()(),Ml(233,`p`),ql(234,`br`),mN(235,` - O `),Ml(236,`code`),mN(237,`po-decimal`),lg(),mN(238,` é um `),Ml(239,`em`),mN(240,`input`),lg(),mN(241,` específico para receber apenas números decimais, por isso recebe as seguintes características:`),lg(),Ml(242,`ul`)(243,`li`),mN(244,`Aceita apenas números;`),lg(),Ml(245,`li`),mN(246,`Utiliza ',' como separador de decimal;`),lg(),Ml(247,`li`),mN(248,`Utiliza '.' para separação de milhar;`),lg(),Ml(249,`li`),mN(250,`É possível configurar a quantidade de casas decimais e a quantidade de digitos do campo.`),lg()(),Ml(251,`blockquote`)(252,`p`)(253,`strong`),mN(254,`Importante:`),lg(),mN(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),Ml(256,`code`),mN(257,`32 bits`),lg(),mN(258,`, e para que os valores comportem-se devidamente,
o `),Ml(259,`code`),mN(260,`po-decimal`),lg(),mN(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),Ml(262,`code`),mN(263,`p-decimals-length`),lg(),mN(264,` e `),Ml(265,`code`),mN(266,`p-thousand-maxlength`),lg(),mN(267,`.`),lg()()(),Ml(268,`div`,8)(269,`h4`,9),mN(270,`Seletor`),lg(),Ml(271,`pre`,10),mN(272,`<po-decimal
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
`),lg()(),Ml(273,`h4`,11),mN(274,`Propriedades`),lg(),Ml(275,`table`,12)(276,`tr`,13)(277,`th`,14),mN(278,`Nome`),lg(),Ml(279,`th`,14),mN(280,`Tipo`),lg(),Ml(281,`th`,14),mN(282,`Padrão`),lg(),Ml(283,`th`,14),mN(284,`Descrição`),lg()(),Ml(285,`tr`,15)(286,`td`,16)(287,`div`,17)(288,`span`,18),mN(289,` (p-additional-help)`),ql(290,`br`),lg()(),Ml(291,`div`,19),mN(292,`Deprecated`),lg()(),Ml(293,`td`,20)(294,`code`,21),mN(295,`EventEmitter`),lg()(),Ml(296,`td`,22),mN(297,`-`),lg(),Ml(298,`td`,23)(299,`em`)(300,`strong`),mN(301,`(opcional)`),lg()(),Ml(302,`p`),mN(303,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(304,`blockquote`)(305,`p`),mN(306,`Essa propriedade está `),Ml(307,`strong`),mN(308,`depreciada`),lg(),mN(309,` e será removida na versão `),Ml(310,`code`),mN(311,`23.x.x`),lg(),mN(312,`. Recomendamos utilizar a propriedade `),Ml(313,`code`),mN(314,`p-helper`),lg(),mN(315,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(316,`tr`,15)(317,`td`,16)(318,`div`,24)(319,`span`,25),mN(320,` p-additional-help-tooltip`),ql(321,`br`),lg()(),Ml(322,`div`,19),mN(323,`Deprecated`),lg()(),Ml(324,`td`,20)(325,`code`,26),mN(326,`string`),lg()(),Ml(327,`td`,22),mN(328,`-`),lg(),Ml(329,`td`,23)(330,`em`)(331,`strong`),mN(332,`(opcional)`),lg()(),Ml(333,`p`),mN(334,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(335,`code`),mN(336,`po-helper`),lg(),mN(337,`.
`),Ml(338,`strong`),mN(339,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(340,`blockquote`)(341,`p`),mN(342,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),lg()(),Ml(343,`blockquote`)(344,`p`),mN(345,`Essa propriedade está `),Ml(346,`strong`),mN(347,`depreciada`),lg(),mN(348,` e será removida na versão `),Ml(349,`code`),mN(350,`23.x.x`),lg(),mN(351,`. Recomendamos utilizar a propriedade `),Ml(352,`code`),mN(353,`p-helper`),lg(),mN(354,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(355,`tr`,15)(356,`td`,16)(357,`div`,24)(358,`span`,25),mN(359,` p-append-in-body`),ql(360,`br`),lg()()(),Ml(361,`td`,20)(362,`code`,27),mN(363,`boolean`),lg()(),Ml(364,`td`,22)(365,`p`)(366,`code`),mN(367,`false`),lg()()(),Ml(368,`td`,23)(369,`em`)(370,`strong`),mN(371,`(opcional)`),lg()(),Ml(372,`p`),mN(373,`Define que o popover (`),Ml(374,`code`),mN(375,`p-helper`),lg(),mN(376,` e/ou `),Ml(377,`code`),mN(378,`p-error-limit`),lg(),mN(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),lg(),Ml(380,`blockquote`)(381,`p`),mN(382,`Quando utilizado com `),Ml(383,`code`),mN(384,`p-helper`),lg(),mN(385,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(386,`tr`,15)(387,`td`,16)(388,`div`,24)(389,`span`,25),mN(390,` p-auto-focus`),ql(391,`br`),lg()()(),Ml(392,`td`,20)(393,`code`,27),mN(394,`boolean`),lg()(),Ml(395,`td`,22)(396,`p`)(397,`code`),mN(398,`false`),lg()()(),Ml(399,`td`,23)(400,`em`)(401,`strong`),mN(402,`(opcional)`),lg()(),Ml(403,`p`),mN(404,`Aplica foco no elemento ao ser iniciado.`),lg(),Ml(405,`blockquote`)(406,`p`),mN(407,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),lg()()()(),Ml(408,`tr`,15)(409,`td`,16)(410,`div`,17)(411,`span`,18),mN(412,` (p-blur)`),ql(413,`br`),lg()()(),Ml(414,`td`,20)(415,`code`,21),mN(416,`EventEmitter`),lg()(),Ml(417,`td`,22),mN(418,`-`),lg(),Ml(419,`td`,23)(420,`em`)(421,`strong`),mN(422,`(opcional)`),lg()(),Ml(423,`p`),mN(424,`Evento disparado ao sair do campo.`),lg()()(),Ml(425,`tr`,15)(426,`td`,16)(427,`div`,17)(428,`span`,18),mN(429,` (p-change)`),ql(430,`br`),lg()()(),Ml(431,`td`,20)(432,`code`,21),mN(433,`EventEmitter`),lg()(),Ml(434,`td`,22),mN(435,`-`),lg(),Ml(436,`td`,23)(437,`em`)(438,`strong`),mN(439,`(opcional)`),lg()(),Ml(440,`p`),mN(441,`Evento disparado ao alterar valor e deixar o campo.`),lg()()(),Ml(442,`tr`,15)(443,`td`,16)(444,`div`,17)(445,`span`,18),mN(446,` (p-change-model)`),ql(447,`br`),lg()()(),Ml(448,`td`,20)(449,`code`,21),mN(450,`EventEmitter`),lg()(),Ml(451,`td`,22),mN(452,`-`),lg(),Ml(453,`td`,23)(454,`em`)(455,`strong`),mN(456,`(opcional)`),lg()(),Ml(457,`p`),mN(458,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ml(459,`code`),mN(460,`setValue`),lg(),mN(461,`, `),Ml(462,`code`),mN(463,`patchValue`),lg(),mN(464,`, carregamento assíncrono).`),lg(),Ml(465,`p`),mN(466,`Diferentemente do `),Ml(467,`code`),mN(468,`p-change`),lg(),mN(469,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ml(470,`code`),mN(471,`p-change-model`),lg(),mN(472,` cobre todos os cenários de alteração de valor.`),lg(),Ml(473,`p`),mN(474,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),lg()()(),Ml(475,`tr`,15)(476,`td`,16)(477,`div`,24)(478,`span`,25),mN(479,`p-clean`),ql(480,`br`),lg()()(),Ml(481,`td`,20)(482,`code`,27),mN(483,`boolean`),lg()(),Ml(484,`td`,22),mN(485,`-`),lg(),Ml(486,`td`,23)(487,`em`)(488,`strong`),mN(489,`(opcional)`),lg()(),Ml(490,`p`),mN(491,`Se verdadeiro, o campo receberá um botão para ser limpo.`),lg()()(),Ml(492,`tr`,15)(493,`td`,16)(494,`div`,24)(495,`span`,25),mN(496,` p-compact-label`),ql(497,`br`),lg()()(),Ml(498,`td`,20)(499,`code`,27),mN(500,`boolean`),lg()(),Ml(501,`td`,22)(502,`p`)(503,`code`),mN(504,`false`),lg()()(),Ml(505,`td`,23)(506,`em`)(507,`strong`),mN(508,`(opcional)`),lg()(),Ml(509,`p`),mN(510,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(511,`p`),mN(512,`Quando habilitado (`),Ml(513,`code`),mN(514,`true`),lg(),mN(515,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(516,`ul`)(517,`li`)(518,`code`),mN(519,`po-label`),lg()(),Ml(520,`li`)(521,`code`),mN(522,`p-requirement (showRequired)`),lg()(),Ml(523,`li`)(524,`code`),mN(525,`po-helper`),lg()()(),Ml(526,`p`),mN(527,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(528,`p`),mN(529,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(530,`ul`)(531,`li`)(532,`code`),mN(533,`--field-container-title-justify`),lg()(),Ml(534,`li`)(535,`code`),mN(536,`--field-container-title-flex`),lg()()(),Ml(537,`p`),mN(538,`Exemplo:`),lg(),Ml(539,`pre`)(540,`code`),mN(541,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(542,`p`),mN(543,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(544,`tr`,15)(545,`td`,16)(546,`div`,24)(547,`span`,25),mN(548,` p-decimals-length`),ql(549,`br`),lg()()(),Ml(550,`td`,20)(551,`code`,28),mN(552,`number`),lg()(),Ml(553,`td`,22)(554,`p`)(555,`code`),mN(556,`2`),lg()()(),Ml(557,`td`,23)(558,`em`)(559,`strong`),mN(560,`(opcional)`),lg()(),Ml(561,`p`),mN(562,`Quantidade máxima de casas decimais.`),lg(),Ml(563,`blockquote`)(564,`p`)(565,`strong`),mN(566,`Importante:`),lg()()(),Ml(567,`ul`)(568,`li`),mN(569,`O valor máximo permitido é 15;`),lg(),Ml(570,`li`),mN(571,`A soma total de `),Ml(572,`code`),mN(573,`p-decimals-length`),lg(),mN(574,` com `),Ml(575,`code`),mN(576,`p-thousand-maxlength`),lg(),mN(577,` limita-se à 16;`),lg(),Ml(578,`li`),mN(579,`Esta propriedade sobrepõe apenas o valor `),Ml(580,`strong`),mN(581,`padrão`),lg(),mN(582,` de `),Ml(583,`code`),mN(584,`p-thousand-maxlength`),lg(),mN(585,`;`),lg(),Ml(586,`li`),mN(587,`Caso `),Ml(588,`code`),mN(589,`p-thousand-maxlength`),lg(),mN(590,` tenha um valor definido, esta propriedade poderá receber apenas o valor restante do limite total (16).`),lg(),Ml(591,`li`),mN(592,`Quando utilizado com `),Ml(593,`code`),mN(594,`p-display-format`),lg(),mN(595,`, será respeitado o valor `),Ml(596,`strong`),mN(597,`mais restritivo`),lg(),mN(598,` entre esta propriedade e o número de casas decimais definido no formato.`),lg()()()(),Ml(599,`tr`,15)(600,`td`,16)(601,`div`,24)(602,`span`,25),mN(603,`p-disabled`),ql(604,`br`),lg()()(),Ml(605,`td`,20)(606,`code`,27),mN(607,`boolean`),lg()(),Ml(608,`td`,22)(609,`p`)(610,`code`),mN(611,`false`),lg()()(),Ml(612,`td`,23)(613,`em`)(614,`strong`),mN(615,`(opcional)`),lg()(),Ml(616,`p`),mN(617,`Se verdadeiro, desabilita o campo.`),lg()()(),Ml(618,`tr`,15)(619,`td`,16)(620,`div`,24)(621,`span`,25),mN(622,` p-display-format`),ql(623,`br`),lg()()(),Ml(624,`td`,20)(625,`code`,26),mN(626,`string `),lg(),Ml(627,`code`,29),mN(628,` undefined`),lg()(),Ml(629,`td`,22),mN(630,`-`),lg(),Ml(631,`td`,23)(632,`em`)(633,`strong`),mN(634,`(opcional)`),lg()(),Ml(635,`p`),mN(636,`Define uma máscara de formatação numérica avançada para o campo.`),lg(),Ml(637,`p`),mN(638,`Simbologia suportada:`),lg(),Ml(639,`ul`)(640,`li`)(641,`code`),mN(642,`9`),lg(),mN(643,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),lg(),Ml(644,`li`)(645,`code`),mN(646,`>`),lg(),mN(647,`: Supressão de zero à esquerda (dígito não obrigatório);`),lg(),Ml(648,`li`)(649,`code`),mN(650,`<`),lg(),mN(651,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),lg(),Ml(652,`li`)(653,`code`),mN(654,`,`),lg(),mN(655,` e `),Ml(656,`code`),mN(657,`.`),lg(),mN(658,`: Separadores de milhar/grupo e decimal (convertidos conforme `),Ml(659,`code`),mN(660,`p-locale`),lg(),mN(661,`);`),lg(),Ml(662,`li`)(663,`code`),mN(664,`-`),lg(),mN(665,`: Sinal negativo (deve ser o primeiro caractere do formato).`),lg()(),Ml(666,`blockquote`)(667,`p`)(668,`strong`),mN(669,`Importante:`),lg()()(),Ml(670,`ul`)(671,`li`),mN(672,`A formatação via `),Ml(673,`code`),mN(674,`p-display-format`),lg(),mN(675,` é apenas visual; o valor do model é sempre o número puro.`),lg(),Ml(676,`li`),mN(677,`Quando o valor pré-preenchido não atende ao formato (overflow ou negativo sem `),Ml(678,`code`),mN(679,`-`),lg(),mN(680,`), o campo exibe com a formatação padrão do `),Ml(681,`code`),mN(682,`po-decimal`),lg(),mN(683,` (separadores de milhar + `),Ml(684,`code`),mN(685,`p-decimals-length`),lg(),mN(686,` casas decimais).`),lg(),Ml(687,`li`),mN(688,`Quando `),Ml(689,`code`),mN(690,`p-decimals-length`),lg(),mN(691,` ou `),Ml(692,`code`),mN(693,`p-thousand-maxlength`),lg(),mN(694,` são definidos, será respeitado o valor `),Ml(695,`strong`),mN(696,`mais restritivo`),lg(),mN(697,` entre o formato e a propriedade.`),lg(),Ml(698,`li`),mN(699,`Incompatível com `),Ml(700,`code`),mN(701,`p-mask`),lg(),mN(702,`, `),Ml(703,`code`),mN(704,`p-mask-format-model`),lg(),mN(705,`, `),Ml(706,`code`),mN(707,`p-mask-no-length-validation`),lg(),mN(708,` e `),Ml(709,`code`),mN(710,`p-pattern`),lg(),mN(711,`.`),lg()(),Ml(712,`p`),mN(713,`Exemplos de formato: `),Ml(714,`code`),mN(715,`>>>,>>>,>>9.99`),lg(),mN(716,`, `),Ml(717,`code`),mN(718,`->>,>>9.99`),lg(),mN(719,`, `),Ml(720,`code`),mN(721,`999.9`),lg(),mN(722,`, `),Ml(723,`code`),mN(724,`>>>,>>9.9<<<<<<`),lg()()()(),Ml(725,`tr`,15)(726,`td`,16)(727,`div`,24)(728,`span`,25),mN(729,` p-emit-all-changes`),ql(730,`br`),lg()()(),Ml(731,`td`,20)(732,`code`,27),mN(733,`boolean`),lg()(),Ml(734,`td`,22)(735,`p`)(736,`code`),mN(737,`false`),lg()()(),Ml(738,`td`,23)(739,`em`)(740,`strong`),mN(741,`(opcional)`),lg()(),Ml(742,`p`),mN(743,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),lg()()(),Ml(744,`tr`,15)(745,`td`,16)(746,`div`,17)(747,`span`,18),mN(748,` (p-enter)`),ql(749,`br`),lg()()(),Ml(750,`td`,20)(751,`code`,21),mN(752,`EventEmitter`),lg()(),Ml(753,`td`,22),mN(754,`-`),lg(),Ml(755,`td`,23)(756,`em`)(757,`strong`),mN(758,`(opcional)`),lg()(),Ml(759,`p`),mN(760,`Evento disparado ao entrar do campo.`),lg()()(),Ml(761,`tr`,15)(762,`td`,16)(763,`div`,24)(764,`span`,25),mN(765,` p-error-async-properties`),ql(766,`br`),lg()()(),Ml(767,`td`,20)(768,`code`,30),mN(769,`ErrorAsyncProperties`),lg()(),Ml(770,`td`,22),mN(771,`-`),lg(),Ml(772,`td`,23)(773,`em`)(774,`strong`),mN(775,`(opcional)`),lg()(),Ml(776,`p`),mN(777,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Ml(778,`code`),mN(779,`Reactive Forms`),lg(),mN(780,`. Em formulários reativos, pode-se utilizar o próprio `),Ml(781,`code`),mN(782,`asyncValidators`),lg(),mN(783,`.`),lg()()(),Ml(784,`tr`,15)(785,`td`,16)(786,`div`,24)(787,`span`,25),mN(788,` p-error-limit`),ql(789,`br`),lg()()(),Ml(790,`td`,20)(791,`code`,27),mN(792,`boolean`),lg()(),Ml(793,`td`,22)(794,`p`)(795,`code`),mN(796,`false`),lg()()(),Ml(797,`td`,23)(798,`em`)(799,`strong`),mN(800,`(opcional)`),lg()(),Ml(801,`p`),mN(802,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg(),Ml(803,`blockquote`)(804,`p`),mN(805,`Caso essa propriedade seja definida como `),Ml(806,`code`),mN(807,`true`),lg(),mN(808,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),lg()()()(),Ml(809,`tr`,15)(810,`td`,16)(811,`div`,24)(812,`span`,25),mN(813,` p-error-pattern`),ql(814,`br`),lg()()(),Ml(815,`td`,20)(816,`code`,26),mN(817,`string`),lg()(),Ml(818,`td`,22),mN(819,`-`),lg(),Ml(820,`td`,23)(821,`em`)(822,`strong`),mN(823,`(opcional)`),lg()(),Ml(824,`p`),mN(825,`Mensagem que será apresentada quando o `),Ml(826,`code`),mN(827,`pattern`),lg(),mN(828,` ou a máscara não for satisfeita.`),lg(),Ml(829,`blockquote`)(830,`p`),mN(831,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Ml(832,`code`),mN(833,`p-required-field-error-message`),lg(),mN(834,` em conjunto.`),lg()()()(),Ml(835,`tr`,15)(836,`td`,16)(837,`div`,24)(838,`span`,25),mN(839,` p-help`),ql(840,`br`),lg()()(),Ml(841,`td`,20)(842,`code`,26),mN(843,`string`),lg()(),Ml(844,`td`,22),mN(845,`-`),lg(),Ml(846,`td`,23)(847,`em`)(848,`strong`),mN(849,`(opcional)`),lg()(),Ml(850,`p`),mN(851,`Texto de apoio do campo.`),lg()()(),Ml(852,`tr`,15)(853,`td`,16)(854,`div`,24)(855,`span`,25),mN(856,` p-icon`),ql(857,`br`),lg()()(),Ml(858,`td`,20)(859,`code`,26),mN(860,`string `),lg(),Ml(861,`code`,31),mN(862,` TemplateRef<void>`),lg()(),Ml(863,`td`,22),mN(864,`-`),lg(),Ml(865,`td`,23)(866,`em`)(867,`strong`),mN(868,`(opcional)`),lg()(),Ml(869,`p`),mN(870,`Define o ícone que será exibido no início do campo.`),lg(),Ml(871,`p`),mN(872,`É possível usar qualquer um dos ícones da `),Ml(873,`a`,32),mN(874,`Biblioteca de ícones`),lg(),mN(875,`. conforme exemplo abaixo:`),lg(),Ml(876,`pre`)(877,`code`),mN(878,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),lg()(),Ml(879,`p`),mN(880,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(881,`em`),mN(882,`Font Awesome`),lg(),mN(883,`, da seguinte forma:`),lg(),Ml(884,`pre`)(885,`code`),mN(886,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),lg()(),Ml(887,`p`),mN(888,`Outra opção seria a customização do ícone através do `),Ml(889,`code`),mN(890,`TemplateRef`),lg(),mN(891,`, conforme exemplo abaixo:`),lg(),Ml(892,`pre`)(893,`code`),mN(894,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),lg()(),Ml(895,`blockquote`)(896,`p`),mN(897,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ml(898,`code`),mN(899,`font-size: inherit`),lg(),mN(900,` caso o ícone utilizado não aplique-o.`),lg()()()(),Ml(901,`tr`,15)(902,`td`,16)(903,`div`,17)(904,`span`,18),mN(905,` (p-keydown)`),ql(906,`br`),lg()()(),Ml(907,`td`,20)(908,`code`,21),mN(909,`EventEmitter`),lg()(),Ml(910,`td`,22),mN(911,`-`),lg(),Ml(912,`td`,23)(913,`em`)(914,`strong`),mN(915,`(opcional)`),lg()(),Ml(916,`p`),mN(917,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(918,`code`),mN(919,`KeyboardEvent`),lg(),mN(920,` com informações sobre a tecla.`),lg()()(),Ml(921,`tr`,15)(922,`td`,16)(923,`div`,24)(924,`span`,25),mN(925,` p-label`),ql(926,`br`),lg()()(),Ml(927,`td`,20)(928,`code`,26),mN(929,`string`),lg()(),Ml(930,`td`,22),mN(931,`-`),lg(),Ml(932,`td`,23)(933,`em`)(934,`strong`),mN(935,`(opcional)`),lg()(),Ml(936,`p`),mN(937,`Rótulo do campo.`),lg()()(),Ml(938,`tr`,15)(939,`td`,16)(940,`div`,24)(941,`span`,25),mN(942,` p-label-text-wrap`),ql(943,`br`),lg()()(),Ml(944,`td`,20)(945,`code`,27),mN(946,`boolean`),lg()(),Ml(947,`td`,22)(948,`p`)(949,`code`),mN(950,`false`),lg()()(),Ml(951,`td`,23)(952,`em`)(953,`strong`),mN(954,`(opcional)`),lg()(),Ml(955,`p`),mN(956,`Habilita a quebra automática do texto da propriedade `),Ml(957,`code`),mN(958,`p-label`),lg(),mN(959,`. Quando `),Ml(960,`code`),mN(961,`p-label-text-wrap`),lg(),mN(962,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(963,`tr`,15)(964,`td`,16)(965,`div`,24)(966,`span`,25),mN(967,` p-loading`),ql(968,`br`),lg()()(),Ml(969,`td`,20)(970,`code`,27),mN(971,`boolean`),lg()(),Ml(972,`td`,22)(973,`p`)(974,`code`),mN(975,`false`),lg()()(),Ml(976,`td`,23)(977,`em`)(978,`strong`),mN(979,`(opcional)`),lg()(),Ml(980,`p`),mN(981,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),lg()()(),Ml(982,`tr`,15)(983,`td`,16)(984,`div`,24)(985,`span`,25),mN(986,` p-locale`),ql(987,`br`),lg()()(),Ml(988,`td`,20)(989,`code`,26),mN(990,`string`),lg()(),Ml(991,`td`,22),mN(992,`-`),lg(),Ml(993,`td`,23)(994,`em`)(995,`strong`),mN(996,`(opcional)`),lg()(),Ml(997,`p`),mN(998,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),Ml(999,`a`,33)(1e3,`code`),mN(1001,`I18n`),lg()()(),Ml(1002,`blockquote`)(1003,`p`),mN(1004,`Para ver quais linguagens suportadas acesse `),Ml(1005,`a`,33)(1006,`code`),mN(1007,`I18n`),lg()()()()()(),Ml(1008,`tr`,15)(1009,`td`,16)(1010,`div`,24)(1011,`span`,25),mN(1012,`p-mask`),ql(1013,`br`),lg()()(),Ml(1014,`td`,20)(1015,`code`,26),mN(1016,`string`),lg()(),Ml(1017,`td`,22),mN(1018,`-`),lg(),Ml(1019,`td`,23)(1020,`em`)(1021,`strong`),mN(1022,`(opcional)`),lg()(),Ml(1023,`p`),mN(1024,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),lg()()(),Ml(1025,`tr`,15)(1026,`td`,16)(1027,`div`,24)(1028,`span`,25),mN(1029,`p-mask-format-model`),ql(1030,`br`),lg()()(),Ml(1031,`td`,20)(1032,`code`,27),mN(1033,`boolean`),lg()(),Ml(1034,`td`,22)(1035,`p`)(1036,`code`),mN(1037,`false`),lg()()(),Ml(1038,`td`,23)(1039,`em`)(1040,`strong`),mN(1041,`(opcional)`),lg()(),Ml(1042,`p`),mN(1043,`Indica se o `),Ml(1044,`code`),mN(1045,`model`),lg(),mN(1046,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),lg()()(),Ml(1047,`tr`,15)(1048,`td`,16)(1049,`div`,24)(1050,`span`,25),mN(1051,` p-mask-no-length-validation`),ql(1052,`br`),lg()()(),Ml(1053,`td`,20)(1054,`code`,27),mN(1055,`boolean`),lg()(),Ml(1056,`td`,22)(1057,`p`)(1058,`code`),mN(1059,`false`),lg()()(),Ml(1060,`td`,23)(1061,`p`),mN(1062,`Controla como o componente aplica as validações de comprimento mínimo (`),Ml(1063,`code`),mN(1064,`minLength`),lg(),mN(1065,`) e máximo (`),Ml(1066,`code`),mN(1067,`maxLength`),lg(),mN(1068,`) quando há uma máscara (`),Ml(1069,`code`),mN(1070,`p-mask`),lg(),mN(1071,`) definida.`),lg(),Ml(1072,`ul`)(1073,`li`),mN(1074,`Quando `),Ml(1075,`code`),mN(1076,`true`),lg(),mN(1077,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),lg(),Ml(1078,`li`),mN(1079,`Quando `),Ml(1080,`code`),mN(1081,`false`),lg(),mN(1082,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),lg()(),Ml(1083,`blockquote`)(1084,`p`),mN(1085,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ml(1086,`code`),mN(1087,`p-mask-format-model`),lg(),mN(1088,`.`),lg()(),Ml(1089,`p`),mN(1090,`Exemplo:`),lg(),Ml(1091,`pre`)(1092,`code`),mN(1093,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),lg()(),Ml(1094,`ul`)(1095,`li`),mN(1096,`Entrada: `),Ml(1097,`code`),mN(1098,`123-456`),lg(),mN(1099,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Ml(1100,`code`),mN(1101,`-`),lg(),mN(1102,`.`),lg()()()(),Ml(1103,`tr`,15)(1104,`td`,16)(1105,`div`,24)(1106,`span`,25),mN(1107,` p-max`),ql(1108,`br`),lg()()(),Ml(1109,`td`,20)(1110,`code`,28),mN(1111,`number`),lg()(),Ml(1112,`td`,22),mN(1113,`-`),lg(),Ml(1114,`td`,23)(1115,`em`)(1116,`strong`),mN(1117,`(opcional)`),lg()(),Ml(1118,`p`),mN(1119,`Valor máximo.`),lg()()(),Ml(1120,`tr`,15)(1121,`td`,16)(1122,`div`,24)(1123,`span`,25),mN(1124,` p-maxlength`),ql(1125,`br`),lg()()(),Ml(1126,`td`,20)(1127,`code`,28),mN(1128,`number`),lg()(),Ml(1129,`td`,22),mN(1130,`-`),lg(),Ml(1131,`td`,23)(1132,`em`)(1133,`strong`),mN(1134,`(opcional)`),lg()(),Ml(1135,`p`),mN(1136,`Indica a quantidade máxima de caracteres que o campo aceita.`),lg()()(),Ml(1137,`tr`,15)(1138,`td`,16)(1139,`div`,24)(1140,`span`,25),mN(1141,` p-min`),ql(1142,`br`),lg()()(),Ml(1143,`td`,20)(1144,`code`,28),mN(1145,`number`),lg()(),Ml(1146,`td`,22),mN(1147,`-`),lg(),Ml(1148,`td`,23)(1149,`em`)(1150,`strong`),mN(1151,`(opcional)`),lg()(),Ml(1152,`p`),mN(1153,`Valor mínimo.`),lg()()(),Ml(1154,`tr`,15)(1155,`td`,16)(1156,`div`,24)(1157,`span`,25),mN(1158,` p-minlength`),ql(1159,`br`),lg()()(),Ml(1160,`td`,20)(1161,`code`,28),mN(1162,`number`),lg()(),Ml(1163,`td`,22),mN(1164,`-`),lg(),Ml(1165,`td`,23)(1166,`em`)(1167,`strong`),mN(1168,`(opcional)`),lg()(),Ml(1169,`p`),mN(1170,`Indica a quantidade mínima de caracteres que o campo aceita.`),lg()()(),Ml(1171,`tr`,15)(1172,`td`,16)(1173,`div`,24)(1174,`span`,25),mN(1175,` name`),ql(1176,`br`),lg()()(),Ml(1177,`td`,20)(1178,`code`,26),mN(1179,`string`),lg()(),Ml(1180,`td`,22),mN(1181,`-`),lg(),Ml(1182,`td`,23)(1183,`p`),mN(1184,`Nome e identificador do campo.`),lg()()(),Ml(1185,`tr`,15)(1186,`td`,16)(1187,`div`,24)(1188,`span`,25),mN(1189,` p-no-autocomplete`),ql(1190,`br`),lg()()(),Ml(1191,`td`,20)(1192,`code`,27),mN(1193,`boolean`),lg()(),Ml(1194,`td`,22)(1195,`p`)(1196,`code`),mN(1197,`false`),lg()()(),Ml(1198,`td`,23)(1199,`em`)(1200,`strong`),mN(1201,`(opcional)`),lg()(),Ml(1202,`p`),mN(1203,`Define a propriedade nativa `),Ml(1204,`code`),mN(1205,`autocomplete`),lg(),mN(1206,` do campo como `),Ml(1207,`code`),mN(1208,`off`),lg(),mN(1209,`.`),lg(),Ml(1210,`blockquote`)(1211,`p`),mN(1212,`No componente `),Ml(1213,`code`),mN(1214,`po-password`),lg(),mN(1215,` será definido como `),Ml(1216,`code`),mN(1217,`new-password`),lg(),mN(1218,`.`),lg()(),Ml(1219,`p`),mN(1220,`Nos componentes `),Ml(1221,`code`),mN(1222,`po-password`),lg(),mN(1223,` e `),Ml(1224,`code`),mN(1225,`po-login`),lg(),mN(1226,` o valor padrão será `),Ml(1227,`code`),mN(1228,`true`),lg(),mN(1229,`.`),lg()()(),Ml(1230,`tr`,15)(1231,`td`,16)(1232,`div`,24)(1233,`span`,25),mN(1234,` p-optional`),ql(1235,`br`),lg()()(),Ml(1236,`td`,20)(1237,`code`,27),mN(1238,`boolean`),lg()(),Ml(1239,`td`,22)(1240,`p`)(1241,`code`),mN(1242,`false`),lg()()(),Ml(1243,`td`,23)(1244,`em`)(1245,`strong`),mN(1246,`(opcional)`),lg()(),Ml(1247,`p`),mN(1248,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(1249,`blockquote`)(1250,`p`),mN(1251,`Não será exibida a indicação se:`),lg()(),Ml(1252,`ul`)(1253,`li`),mN(1254,`O campo conter `),Ml(1255,`code`),mN(1256,`p-required`),lg(),mN(1257,`;`),lg(),Ml(1258,`li`),mN(1259,`Não possuir `),Ml(1260,`code`),mN(1261,`p-help`),lg(),mN(1262,` e/ou `),Ml(1263,`code`),mN(1264,`p-label`),lg(),mN(1265,`.`),lg()()()(),Ml(1266,`tr`,15)(1267,`td`,16)(1268,`div`,24)(1269,`span`,25),mN(1270,`p-pattern`),ql(1271,`br`),lg()()(),Ml(1272,`td`,20)(1273,`code`,26),mN(1274,`string`),lg()(),Ml(1275,`td`,22),mN(1276,`-`),lg(),Ml(1277,`td`,23)(1278,`em`)(1279,`strong`),mN(1280,`(opcional)`),lg()(),Ml(1281,`p`),mN(1282,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Ml(1283,`code`),mN(1284,`(p-mask)`),lg(),mN(1285,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),lg()()(),Ml(1286,`tr`,15)(1287,`td`,16)(1288,`div`,24)(1289,`span`,25),mN(1290,` p-placeholder`),ql(1291,`br`),lg()()(),Ml(1292,`td`,20)(1293,`code`,26),mN(1294,`string`),lg()(),Ml(1295,`td`,22)(1296,`p`),mN(1297,`''`),lg()(),Ml(1298,`td`,23)(1299,`em`)(1300,`strong`),mN(1301,`(opcional)`),lg()(),Ml(1302,`p`),mN(1303,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),lg()()(),Ml(1304,`tr`,15)(1305,`td`,16)(1306,`div`,24)(1307,`span`,25),mN(1308,` p-helper`),ql(1309,`br`),lg()()(),Ml(1310,`td`,20)(1311,`code`,34),mN(1312,`PoHelperOptions `),lg(),Ml(1313,`code`,26),mN(1314,` string`),lg()(),Ml(1315,`td`,22),mN(1316,`-`),lg(),Ml(1317,`td`,23)(1318,`em`)(1319,`strong`),mN(1320,`(opcional)`),lg()(),Ml(1321,`p`),mN(1322,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(1323,`code`),mN(1324,`p-label`),lg(),mN(1325,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(1326,`code`),mN(1327,`p-label`),lg(),mN(1328,`.`),lg(),Ml(1329,`blockquote`)(1330,`p`),mN(1331,`Para mais informações acesse: `),Ml(1332,`a`,35),mN(1333,`https://po-ui.io/documentation/po-helper`),lg(),mN(1334,`.`),lg()(),Ml(1335,`blockquote`)(1336,`p`),mN(1337,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(1338,`code`),mN(1339,`p-additional-help-tooltip`),lg(),mN(1340,` e `),Ml(1341,`code`),mN(1342,`p-additional-help`),lg(),mN(1343,`) será ignorado.`),lg()()()(),Ml(1344,`tr`,15)(1345,`td`,16)(1346,`div`,24)(1347,`span`,25),mN(1348,`p-readonly`),ql(1349,`br`),lg()()(),Ml(1350,`td`,20)(1351,`code`,27),mN(1352,`boolean`),lg()(),Ml(1353,`td`,22),mN(1354,`-`),lg(),Ml(1355,`td`,23)(1356,`em`)(1357,`strong`),mN(1358,`(opcional)`),lg()(),Ml(1359,`p`),mN(1360,`Indica que o campo será somente leitura.`),lg()()(),Ml(1361,`tr`,15)(1362,`td`,16)(1363,`div`,24)(1364,`span`,25),mN(1365,`p-required`),ql(1366,`br`),lg()()(),Ml(1367,`td`,20)(1368,`code`,27),mN(1369,`boolean`),lg()(),Ml(1370,`td`,22)(1371,`p`)(1372,`code`),mN(1373,`false`),lg()()(),Ml(1374,`td`,23)(1375,`em`)(1376,`strong`),mN(1377,`(opcional)`),lg()(),Ml(1378,`p`),mN(1379,`Define que o campo será obrigatório.`),lg(),Ml(1380,`blockquote`)(1381,`p`),mN(1382,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ml(1383,`code`),mN(1384,`(p-disabled)`),lg(),mN(1385,`.`),lg()()()(),Ml(1386,`tr`,15)(1387,`td`,16)(1388,`div`,24)(1389,`span`,25),mN(1390,` p-required-field-error-message`),ql(1391,`br`),lg()()(),Ml(1392,`td`,20)(1393,`code`,27),mN(1394,`boolean`),lg()(),Ml(1395,`td`,22)(1396,`p`)(1397,`code`),mN(1398,`false`),lg()()(),Ml(1399,`td`,23)(1400,`em`)(1401,`strong`),mN(1402,`(opcional)`),lg()(),Ml(1403,`p`),mN(1404,`Exibe a mensagem setada na propriedade `),Ml(1405,`code`),mN(1406,`p-error-pattern`),lg(),mN(1407,` se o campo estiver vazio e for requerido.`),lg(),Ml(1408,`blockquote`)(1409,`p`),mN(1410,`Necessário que a propriedade `),Ml(1411,`code`),mN(1412,`p-required`),lg(),mN(1413,` esteja habilitada.`),lg()()()(),Ml(1414,`tr`,15)(1415,`td`,16)(1416,`div`,24)(1417,`span`,25),mN(1418,` p-show-required`),ql(1419,`br`),lg()()(),Ml(1420,`td`,20)(1421,`code`,27),mN(1422,`boolean`),lg()(),Ml(1423,`td`,22),mN(1424,`-`),lg(),Ml(1425,`td`,23)(1426,`p`),mN(1427,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(1428,`blockquote`)(1429,`p`),mN(1430,`Não será exibida a indicação se:`),lg()(),Ml(1431,`ul`)(1432,`li`),mN(1433,`Não possuir `),Ml(1434,`code`),mN(1435,`p-help`),lg(),mN(1436,` e/ou `),Ml(1437,`code`),mN(1438,`p-label`),lg(),mN(1439,`.`),lg()()()(),Ml(1440,`tr`,15)(1441,`td`,16)(1442,`div`,24)(1443,`span`,25),mN(1444,` p-size`),ql(1445,`br`),lg()()(),Ml(1446,`td`,20)(1447,`code`,26),mN(1448,`string`),lg()(),Ml(1449,`td`,22)(1450,`p`)(1451,`code`),mN(1452,`medium`),lg()()(),Ml(1453,`td`,23)(1454,`em`)(1455,`strong`),mN(1456,`(opcional)`),lg()(),Ml(1457,`p`),mN(1458,`Define o tamanho do componente:`),lg(),Ml(1459,`ul`)(1460,`li`)(1461,`code`),mN(1462,`small`),lg(),mN(1463,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(1464,`li`)(1465,`code`),mN(1466,`medium`),lg(),mN(1467,`: altura do input como 44px.`),lg()(),Ml(1468,`blockquote`)(1469,`p`),mN(1470,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(1471,`code`),mN(1472,`medium`),lg(),mN(1473,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(1474,`a`,36),mN(1475,`po-theme`),lg(),mN(1476,`.`),lg()()()(),Ml(1477,`tr`,15)(1478,`td`,16)(1479,`div`,24)(1480,`span`,25),mN(1481,` p-thousand-maxlength`),ql(1482,`br`),lg()()(),Ml(1483,`td`,20)(1484,`code`,28),mN(1485,`number`),lg()(),Ml(1486,`td`,22)(1487,`p`)(1488,`code`),mN(1489,`13`),lg()()(),Ml(1490,`td`,23)(1491,`em`)(1492,`strong`),mN(1493,`(opcional)`),lg()(),Ml(1494,`p`),mN(1495,`Quantidade máxima de dígitos antes do separador decimal.`),lg(),Ml(1496,`blockquote`)(1497,`p`)(1498,`strong`),mN(1499,`Importante:`),lg()()(),Ml(1500,`ul`)(1501,`li`),mN(1502,`O valor máximo permitido é 13;`),lg(),Ml(1503,`li`),mN(1504,`A soma total de `),Ml(1505,`code`),mN(1506,`p-decimals-length`),lg(),mN(1507,` com `),Ml(1508,`code`),mN(1509,`p-thousand-maxlength`),lg(),mN(1510,` limita-se à 16;`),lg(),Ml(1511,`li`),mN(1512,`Esta propriedade sobrepõe o valor definido em `),Ml(1513,`code`),mN(1514,`p-decimals-length`),lg(),mN(1515,`.`),lg(),Ml(1516,`li`),mN(1517,`Quando utilizado com `),Ml(1518,`code`),mN(1519,`p-display-format`),lg(),mN(1520,`, será respeitado o valor `),Ml(1521,`strong`),mN(1522,`mais restritivo`),lg(),mN(1523,` entre esta propriedade e o n\xFAmero de d\xEDgitos inteiros definido no
formato.`),lg()()()(),Ml(1524,`tr`,15)(1525,`td`,16)(1526,`div`,24)(1527,`span`,25),mN(1528,` p-upper-case`),ql(1529,`br`),lg()()(),Ml(1530,`td`,20)(1531,`code`,27),mN(1532,`boolean`),lg()(),Ml(1533,`td`,22),mN(1534,`-`),lg(),Ml(1535,`td`,23)(1536,`p`),mN(1537,`Converte o conteúdo do campo em maiúsulo automaticamente.`),lg()()()(),Ml(1538,`h3`,11),mN(1539,`Métodos`),lg(),Ml(1540,`table`,37)(1541,`tr`,15)(1542,`th`,38)(1543,`div`,24)(1544,`h4`)(1545,`span`,25),mN(1546,` showAdditionalHelp `),lg()()()()(),Ml(1547,`tr`,23)(1548,`td`,23)(1549,`p`),mN(1550,`Método que exibe `),Ml(1551,`code`),mN(1552,`p-helper`),lg(),mN(1553,` ou executa a ação definida em `),Ml(1554,`code`),mN(1555,`p-helper{eventOnClick}`),lg(),mN(1556,` ou em `),Ml(1557,`code`),mN(1558,`p-additionalHelp`),lg(),mN(1559,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(1560,`code`),mN(1561,`p-keydown`),lg(),mN(1562,`.`),lg(),Ml(1563,`blockquote`)(1564,`p`),mN(1565,`Exibe ou oculta o conteúdo do componente `),Ml(1566,`code`),mN(1567,`po-helper`),lg(),mN(1568,` quando o componente estiver com foco.`),lg()(),Ml(1569,`pre`)(1570,`code`),mN(1571,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),lg()(),Ml(1572,`pre`)(1573,`code`),mN(1574,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(1575,`br`),Ml(1576,`table`,37)(1577,`tr`,15)(1578,`th`,38)(1579,`div`,24)(1580,`h4`)(1581,`span`,25),mN(1582,` focus `),lg()()()()(),Ml(1583,`tr`,23)(1584,`td`,23)(1585,`p`),mN(1586,`Função que atribui foco ao componente.`),lg(),Ml(1587,`p`),mN(1588,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(1589,`pre`)(1590,`code`),mN(1591,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),lg()()()()(),ql(1592,`br`),Ml(1593,`h3`),mN(1594,`Interfaces`),lg(),Ml(1595,`h4`,39)(1596,`code`,5),mN(1597,`ErrorAsyncProperties`),lg()(),Ml(1598,`div`,2)(1599,`p`),mN(1600,`Interface para realizar uma validação assíncrona no componente.`),lg()(),Ml(1601,`h4`,11),mN(1602,`Propriedades`),lg(),Ml(1603,`table`,12)(1604,`tr`,13)(1605,`th`,14),mN(1606,`Nome`),lg(),Ml(1607,`th`,14),mN(1608,`Tipo`),lg(),Ml(1609,`th`,14),mN(1610,`Descrição`),lg()(),Ml(1611,`tr`,15)(1612,`td`,16)(1613,`div`,24)(1614,`span`,25),mN(1615,` errorAsync`),ql(1616,`br`),lg()()(),Ml(1617,`td`,20)(1618,`code`,40),mN(1619,`(value) => Observable<boolean>`),lg()(),Ml(1620,`td`,23)(1621,`p`),mN(1622,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ml(1623,`code`),mN(1624,`change`),lg(),mN(1625,` ou `),Ml(1626,`code`),mN(1627,`change-model`),lg(),mN(1628,`, dependendo do valor da propriedade `),Ml(1629,`code`),mN(1630,`triggerMode`),lg(),mN(1631,`.`),lg()()(),Ml(1632,`tr`,15)(1633,`td`,16)(1634,`div`,24)(1635,`span`,25),mN(1636,` triggerMode`),ql(1637,`br`),lg()()(),Ml(1638,`td`,20)(1639,`code`,41),mN(1640,`'change' `),lg(),Ml(1641,`code`,42),mN(1642,` 'changeModel'`),lg()(),Ml(1643,`td`,23)(1644,`em`)(1645,`strong`),mN(1646,`(opcional)`),lg()(),Ml(1647,`p`),mN(1648,`Controla se o método será executado no disparo do output `),Ml(1649,`code`),mN(1650,`change`),lg(),mN(1651,` ou `),Ml(1652,`code`),mN(1653,`change-model`),lg(),mN(1654,`.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var ze=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(w(Xn),w(Cn))};static ɵcmp=Un({type:l,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Decimal`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-decimal-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-decimal-basic-view`)(6,`sample-po-decimal-labs-view`)(7,`sample-po-decimal-hourly-wage-view`)(8,`sample-po-decimal-hourly-wage-reactive-form-view`)(9,`sample-po-decimal-display-format-view`),lg()()()),r&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,pe,ce,ge,he,be,xe],encapsulation:2,changeDetection:1})}return l})()}];var ye=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue$1({imports:[NL.forChild(ze),NL]})}return l})();var ft=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue$1({imports:[ar,ye]})}return l})();export{ft as DocPoDecimalModule};