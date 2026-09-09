import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,In as zye,Ji as mY,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,ca as um,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,tr as EY,ui as a0,ut as S8e,va as yY,xr as Lk,yi as cN,yn as ube,zi as jk}from"./main-3EWTGE7T.js";var de=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`decimal`,`p-label`,`PO Decimal`]],template:function(r,i){r&1&&Gl(0,`po-decimal`,0)},dependencies:[zye],encapsulation:2,changeDetection:1})}return l})();var Ce=l=>({"docs-sample-code-tabs":l});var pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Decimal Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-decimal-basic/sample-po-decimal-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-decimal-basic/sample-po-decimal-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-decimal-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ce,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,de],encapsulation:2,changeDetection:1})}return l})();var se=(()=>{class l{helperText;decimal;decimalsLength;event;displayFormat;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:`pt`,label:`Portuguese`},{value:`en`,label:`English`},{value:`ru`,label:`Russian`},{value:`es`,label:`Spanish`}];iconOptions=[{value:`an an-shopping-cart-simple`,label:`an an-shopping-cart-simple`},{value:`an an-currency-dollar-simple`,label:`an an-currency-dollar-simple`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.decimal=void 0,this.decimalsLength=void 0,this.event=``,this.displayFormat=void 0,this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder=``,this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size=`medium`,this.properties=[]}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-labs`]],standalone:!1,decls:24,vars:49,consts:[[`f`,`ngForm`],[`name`,`decimal`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-decimals-length`,`p-disabled`,`p-display-format`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-locale`,`p-error-pattern`,`p-max`,`p-min`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-thousand-maxlength`,`p-label-text-wrap`,`p-compact-label`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`displayFormat`,`p-clean`,``,`p-label`,`Display Format`,`p-help`,`Ex: >>>,>>9.99 | ->>9.99 | 999.9 | >>9.9<<`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`min`,`p-clean`,``,`p-label`,`Min`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-clean`,``,`p-label`,`Max`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`locale`,`p-clean`,``,`p-label`,`Locale`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`decimalsLength`,`p-clean`,``,`p-help`,`Máximo 15`,`p-label`,`Decimals max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`thousandMaxlength`,`p-clean`,``,`p-help`,`Máximo 13`,`p-label`,`Thousand max length`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-max`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-columns`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let s=Ax();Tl(0,`po-decimal`,1),ht(`ngModelChange`,function(a){return i.decimal=a})(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3)(4,`po-info`,4),ag(),Gl(5,`po-divider`),Tl(6,`form`,null,0)(8,`po-input`,5),ww(`ngModelChange`,function(a){return Ky(s),uN(i.label,a)||(i.label=a),Xy(a)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(a){return Ky(s),uN(i.help,a)||(i.help=a),Xy(a)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(a){return Ky(s),uN(i.helperText,a)||(i.helperText=a),Xy(a)}),ag(),a0(),Tl(11,`po-input`,8),ww(`ngModelChange`,function(a){return Ky(s),uN(i.placeholder,a)||(i.placeholder=a),Xy(a)}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(a){return Ky(s),uN(i.errorPattern,a)||(i.errorPattern=a),Xy(a)}),ag(),a0(),Tl(13,`po-input`,10),ww(`ngModelChange`,function(a){return Ky(s),uN(i.displayFormat,a)||(i.displayFormat=a),Xy(a)}),ag(),a0(),Tl(14,`po-select`,11),ww(`ngModelChange`,function(a){return Ky(s),uN(i.icon,a)||(i.icon=a),Xy(a)}),ag(),a0(),Tl(15,`po-number`,12),ww(`ngModelChange`,function(a){return Ky(s),uN(i.min,a)||(i.min=a),Xy(a)}),ag(),a0(),Tl(16,`po-number`,13),ww(`ngModelChange`,function(a){return Ky(s),uN(i.max,a)||(i.max=a),Xy(a)}),ag(),a0(),Tl(17,`po-select`,14),ww(`ngModelChange`,function(a){return Ky(s),uN(i.locale,a)||(i.locale=a),Xy(a)}),ag(),a0(),Tl(18,`po-number`,15),ww(`ngModelChange`,function(a){return Ky(s),uN(i.decimalsLength,a)||(i.decimalsLength=a),Xy(a)}),ag(),a0(),Tl(19,`po-number`,16),ww(`ngModelChange`,function(a){return Ky(s),uN(i.thousandMaxlength,a)||(i.thousandMaxlength=a),Xy(a)}),ag(),a0(),Tl(20,`po-checkbox-group`,17),ww(`ngModelChange`,function(a){return Ky(s),uN(i.properties,a)||(i.properties=a),Xy(a)}),ag(),a0(),Tl(21,`po-radio-group`,18),ww(`ngModelChange`,function(a){return Ky(s),uN(i.size,a)||(i.size=a),Xy(a)}),ag(),a0(),Tl(22,`div`,2)(23,`po-button`,19),ht(`p-click`,function(){return i.restore()}),ag()()()}r&2&&(nw(`ngModel`,i.decimal)(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-decimals-length`,i.decimalsLength)(`p-disabled`,i.properties.includes(`disabled`))(`p-display-format`,i.displayFormat)(`p-help`,i.help)(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-locale`,i.locale)(`p-error-pattern`,i.errorPattern)(`p-max`,i.max)(`p-min`,i.min)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-thousand-maxlength`,i.thousandMaxlength)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-error-limit`,i.properties?.includes(`errorLimit`)),l0(),jp(3),nw(`p-value`,i.decimal),jp(),nw(`p-value`,i.event),jp(4),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.helperText),l0(),jp(),Ew(`ngModel`,i.placeholder),l0(),jp(),Ew(`ngModel`,i.errorPattern),l0(),jp(),Ew(`ngModel`,i.displayFormat),l0(),jp(),Ew(`ngModel`,i.icon),nw(`p-options`,i.iconOptions),l0(),jp(),Ew(`ngModel`,i.min),l0(),jp(),Ew(`ngModel`,i.max),l0(),jp(),Ew(`ngModel`,i.locale),nw(`p-options`,i.localeOptions),l0(),jp(),Ew(`ngModel`,i.decimalsLength),nw(`p-max`,i.maxDecimalsLength),l0(),jp(),Ew(`ngModel`,i.thousandMaxlength),nw(`p-max`,i.maxThousandMaxlength),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-columns`,4)(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,zye,iU,ube,L0e,fbe,ybe],encapsulation:2,changeDetection:1})}return l})();var we=l=>({"docs-sample-code-tabs":l});var ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Decimal Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-decimal-labs/sample-po-decimal-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-decimal
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-decimal-labs/sample-po-decimal-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-decimal-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,we,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,se],encapsulation:2,changeDetection:1})}return l})();var ue=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let p=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/p;this.hourlyWage=r}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-hourly-wage`]],standalone:!1,decls:16,vars:6,consts:[[`f`,`ngForm`],[1,`po-font-title`],[1,`po-row`],[`name`,`weekHours`,`p-label`,`Week Hours`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`workingDaysPerWeek`,`p-label`,`Working days per week`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-required`,``,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=Ax();Tl(0,`form`,null,0)(2,`div`,1),cN(3,`Calculate hourly wage`),ag(),Gl(4,`po-divider`),Tl(5,`div`,2)(6,`po-number`,3),ww(`ngModelChange`,function(a){return Ky(s),uN(i.weekHours,a)||(i.weekHours=a),Xy(a)}),ag(),a0(),Tl(7,`po-number`,4),ww(`ngModelChange`,function(a){return Ky(s),uN(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),Xy(a)}),ag(),a0(),ag(),Tl(8,`div`,2)(9,`po-number`,5),ww(`ngModelChange`,function(a){return Ky(s),uN(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),Xy(a)}),ag(),a0(),Tl(10,`po-decimal`,6),ww(`ngModelChange`,function(a){return Ky(s),uN(i.salary,a)||(i.salary=a),Xy(a)}),ht(`p-change`,function(){return i.calculate()}),ag(),a0(),ag(),Tl(11,`div`,2)(12,`po-decimal`,7),ww(`ngModelChange`,function(a){return Ky(s),uN(i.hourlyWage,a)||(i.hourlyWage=a),Xy(a)}),ag(),a0(),ag(),Tl(13,`div`,2)(14,`po-button`,8),ht(`p-click`,function(){Ky(s);return Xy(Bx(1).reset())}),ag(),Tl(15,`po-button`,9),ht(`p-click`,function(){return i.calculate()}),ag()()()}r&2&&(jp(6),Ew(`ngModel`,i.weekHours),l0(),jp(),Ew(`ngModel`,i.workingDaysPerWeek),l0(),jp(2),Ew(`ngModel`,i.quantityDaysPerMonth),l0(),jp(),Ew(`ngModel`,i.salary),l0(),jp(2),Ew(`ngModel`,i.hourlyWage),l0(),jp(3),nw(`p-disabled`,!i.hourlyWage))},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,zye,ube],encapsulation:2,changeDetection:1})}return l})();var ke=l=>({"docs-sample-code-tabs":l});var ge=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-hourly-wage-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Decimal - Hourly Wage`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form #f="ngForm">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-decimal-hourly-wage`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ke,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ue],encapsulation:2,changeDetection:1})}return l})();var Ee=(()=>{class l{formBuilder=f(EY);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,um.required],salary:[null,um.required],weekHours:[null,um.required],workingDaysPerWeek:[null,um.required]})}calculate(){let{weekHours:p,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:s}=this.formCalculateHourlyWage.value,a=s/(p/r*i);this.formCalculateHourlyWage.patchValue({hourlyWage:a})}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-hourly-wage-reactive-form`]],standalone:!1,decls:15,vars:2,consts:[[3,`formGroup`],[1,`po-font-title`],[1,`po-row`],[`formControlName`,`weekHours`,`p-label`,`Week Hours`,1,`po-md-6`],[`formControlName`,`workingDaysPerWeek`,`p-label`,`Working days per week`,1,`po-md-6`],[`formControlName`,`quantityDaysPerMonth`,`p-label`,`Quantity days per month`,1,`po-md-6`],[`formControlName`,`salary`,`p-decimals-length`,`2`,`p-icon`,`an an-currency-circle-dollar`,`p-label`,`Salary`,`p-thousand-maxlength`,`13`,1,`po-md-6`,3,`p-change`],[`formControlName`,`hourlyWage`,`p-decimals-length`,`2`,`p-disabled`,``,`p-icon`,`an an-currency-dollar-simple`,`p-label`,`Hourly Wage`,`p-thousand-maxlength`,`13`,1,`po-md-6`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`],[`p-label`,`Recalculate`,`p-kind`,`primary`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){r&1&&(Tl(0,`form`,0)(1,`div`,1),cN(2,`Calculate hourly wage`),ag(),Gl(3,`po-divider`),Tl(4,`div`,2),Gl(5,`po-number`,3),a0(),Gl(6,`po-number`,4),a0(),ag(),Tl(7,`div`,2),Gl(8,`po-number`,5),a0(),Tl(9,`po-decimal`,6),ht(`p-change`,function(){return i.calculate()}),ag(),a0(),ag(),Tl(10,`div`,2),Gl(11,`po-decimal`,7),a0(),ag(),Tl(12,`div`,2)(13,`po-button`,8),ht(`p-click`,function(){return i.formCalculateHourlyWage.reset()}),ag(),Tl(14,`po-button`,9),ht(`p-click`,function(){return i.calculate()}),ag()()()),r&2&&(nw(`formGroup`,i.formCalculateHourlyWage),jp(5),l0(),jp(),l0(),jp(2),l0(),jp(),l0(),jp(2),l0(),jp(3),nw(`p-disabled`,i.formCalculateHourlyWage.invalid))},dependencies:[yY,gY,mY,jk,Lk,Zt,Xy$1,zye,ube],encapsulation:2,changeDetection:1})}return l})();var We=l=>({"docs-sample-code-tabs":l});var he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-hourly-wage-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Decimal - Hourly Wage Reactive Form`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form [formGroup]="formCalculateHourlyWage">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-decimal-hourly-wage-reactive-form`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,We,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Ee],encapsulation:2,changeDetection:1})}return l})();var Se=(()=>{class l{price=99.9;quantity=3;discount=-10.5;tax=8.5;shipping=15;subtotal;taxValue;totalOrder;calculate(){let p=(this.price??0)*(this.quantity??0)+(this.discount??0);this.subtotal=p,this.taxValue=p*((this.tax??0)/100),this.totalOrder=p+this.taxValue+(this.shipping??0)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-display-format`]],standalone:!1,decls:17,vars:14,consts:[[1,`po-font-title`],[1,`po-row`],[`name`,`price`,`p-label`,`Unit Price`,`p-help`,`Enter the product price`,`p-display-format`,`>>>>>>>>9.99`,`p-icon`,`an an-tag-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantity`,`p-label`,`Quantity`,`p-help`,`Enter the number of items`,`p-display-format`,`999`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`discount`,`p-label`,`Discount`,`p-help`,`Enter a discount (use negative for deduction)`,`p-display-format`,`->>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`tax`,`p-label`,`Tax (%)`,`p-help`,`Tax percentage applied to the subtotal`,`p-display-format`,`>>9.9<<`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-decimals-length`,`ngModel`],[`name`,`shipping`,`p-label`,`Shipping`,`p-help`,`Shipping cost`,`p-display-format`,`>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-optional`,`ngModel`],[1,`po-lg-4`,`po-md-6`,`po-mt-4`],[`p-label`,`Calculate Total`,`p-icon`,`an an-calculator`,`p-kind`,`primary`,3,`p-click`],[`name`,`subtotal`,`p-label`,`Subtotal`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-equals`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`taxValue`,`p-label`,`Taxes`,`p-display-format`,`>>>,>>>,>>9.99`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`],[`name`,`totalOrder`,`p-label`,`Order Total`,`p-display-format`,`>>>,>>>,>>9.99`,`p-icon`,`an an-currency-dollar-simple`,1,`po-lg-4`,`po-md-6`,3,`ngModelChange`,`p-readonly`,`ngModel`]],template:function(r,i){r&1&&(Tl(0,`div`,0),cN(1,`Order Simulation`),ag(),Gl(2,`po-divider`),Tl(3,`div`,1)(4,`po-decimal`,2),ht(`ngModelChange`,function(d){return i.price=d}),ag(),a0(),Tl(5,`po-decimal`,3),ht(`ngModelChange`,function(d){return i.quantity=d}),ag(),a0(),Tl(6,`po-decimal`,4),ht(`ngModelChange`,function(d){return i.discount=d}),ag(),a0(),ag(),Tl(7,`div`,1)(8,`po-decimal`,5),ht(`ngModelChange`,function(d){return i.tax=d}),ag(),a0(),Tl(9,`po-decimal`,6),ht(`ngModelChange`,function(d){return i.shipping=d}),ag(),a0(),Tl(10,`div`,7)(11,`po-button`,8),ht(`p-click`,function(){return i.calculate()}),ag()()(),Gl(12,`po-divider`),Tl(13,`div`,1)(14,`po-decimal`,9),ht(`ngModelChange`,function(d){return i.subtotal=d}),ag(),a0(),Tl(15,`po-decimal`,10),ht(`ngModelChange`,function(d){return i.taxValue=d}),ag(),a0(),Tl(16,`po-decimal`,11),ht(`ngModelChange`,function(d){return i.totalOrder=d}),ag(),a0(),ag()),r&2&&(jp(4),nw(`ngModel`,i.price),l0(),jp(),nw(`p-decimals-length`,0)(`ngModel`,i.quantity),l0(),jp(),nw(`ngModel`,i.discount),l0(),jp(2),nw(`p-decimals-length`,3)(`ngModel`,i.tax),l0(),jp(),nw(`p-optional`,!0)(`ngModel`,i.shipping),l0(),jp(5),nw(`p-readonly`,!0)(`ngModel`,i.subtotal),l0(),jp(),nw(`p-readonly`,!0)(`ngModel`,i.taxValue),l0(),jp(),nw(`p-readonly`,!0)(`ngModel`,i.totalOrder),l0())},dependencies:[gY,Ak,Zt,Xy$1,zye],encapsulation:2})}return l})();var He=l=>({"docs-sample-code-tabs":l});var be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-display-format-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Decimal - Display Format`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-font-title">Order Simulation</div>

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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-decimal-display-format/sample-po-decimal-display-format.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-decimal-display-format`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,He,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Se],encapsulation:2,changeDetection:1})}return l})();var xe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-decimal-doc`]],standalone:!1,decls:1655,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`undefined`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`href`,`documentation/po-i18n`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoDecimalComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ag(),Tl(24,`p`),cN(25,`Importante:`),ag(),Tl(26,`ul`)(27,`li`),cN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ag()(),Tl(29,`h4`),cN(30,`Tokens customizáveis`),ag(),Tl(31,`p`),cN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Gl(33,`br`),cN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(35,`code`),cN(36,`.po-input`),ag()(),Tl(37,`blockquote`)(38,`p`),cN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Tl(40,`a`,6),cN(41,`Grid System`),ag(),cN(42,`.`),ag()(),Tl(43,`blockquote`)(44,`p`),cN(45,`Para maiores informações, acesse o guia `),Tl(46,`a`,7),cN(47,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(48,`.`),ag()(),Tl(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),cN(53,`Propriedade`),ag(),Tl(54,`th`),cN(55,`Descrição`),ag(),Tl(56,`th`),cN(57,`Valor Padrão`),ag()()(),Tl(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),cN(62,`Default Values`),ag()(),Gl(63,`td`)(64,`td`),ag(),Tl(65,`tr`)(66,`td`)(67,`code`),cN(68,`--font-family`),ag()(),Tl(69,`td`),cN(70,`Família tipográfica usada`),ag(),Tl(71,`td`)(72,`code`),cN(73,`var(--font-family-theme)`),ag()()(),Tl(74,`tr`)(75,`td`)(76,`code`),cN(77,`--font-size`),ag()(),Tl(78,`td`),cN(79,`Tamanho da fonte`),ag(),Tl(80,`td`)(81,`code`),cN(82,`var(--font-size-default)`),ag()()(),Tl(83,`tr`)(84,`td`)(85,`code`),cN(86,`--text-color-placeholder`),ag()(),Tl(87,`td`),cN(88,`Cor do texto placeholder`),ag(),Tl(89,`td`)(90,`code`),cN(91,`var(--color-neutral-light-30)`),ag()()(),Tl(92,`tr`)(93,`td`)(94,`code`),cN(95,`--color`),ag()(),Tl(96,`td`),cN(97,`Cor pincipal do input`),ag(),Tl(98,`td`)(99,`code`),cN(100,`var(--color-neutral-dark-70)`),ag()()(),Tl(101,`tr`)(102,`td`)(103,`code`),cN(104,`--background`),ag()(),Tl(105,`td`),cN(106,`Cor de background`),ag(),Tl(107,`td`)(108,`code`),cN(109,`var(--color-neutral-light-05)`),ag()()(),Tl(110,`tr`)(111,`td`)(112,`code`),cN(113,`--padding`),ag()(),Tl(114,`td`),cN(115,`Preenchimento`),ag(),Tl(116,`td`)(117,`code`),cN(118,`0 0.5rem`),ag()()(),Tl(119,`tr`)(120,`td`)(121,`code`),cN(122,`--text-color`),ag()(),Tl(123,`td`),cN(124,`Cor do texto`),ag(),Tl(125,`td`)(126,`code`),cN(127,`var(--color-neutral-dark-90)`),ag()()(),Tl(128,`tr`)(129,`td`)(130,`code`),cN(131,`--field-container-title-justify`),ag()(),Tl(132,`td`),cN(133,`Alinhamento horizontal do título (`),Tl(134,`code`),cN(135,`justify-content`),ag(),cN(136,`)`),ag(),Tl(137,`td`)(138,`code`),cN(139,`space-between`),ag()()(),Tl(140,`tr`)(141,`td`)(142,`code`),cN(143,`--field-container-title-flex`),ag()(),Tl(144,`td`),cN(145,`Flex do título (`),Tl(146,`code`),cN(147,`flex`),ag(),cN(148,`)`),ag(),Tl(149,`td`)(150,`code`),cN(151,`1 auto`),ag()()(),Tl(152,`tr`)(153,`td`)(154,`strong`),cN(155,`Hover`),ag()(),Gl(156,`td`)(157,`td`),ag(),Tl(158,`tr`)(159,`td`)(160,`code`),cN(161,`--color-hover`),ag()(),Tl(162,`td`),cN(163,`Cor principal no estado hover`),ag(),Tl(164,`td`)(165,`code`),cN(166,`var(--color-brand-01-dark)`),ag()()(),Tl(167,`tr`)(168,`td`)(169,`code`),cN(170,`--background-hover`),ag()(),Tl(171,`td`),cN(172,`Cor de background no estado hover`),ag(),Tl(173,`td`)(174,`code`),cN(175,`var(--color-brand-01-lightest)`),ag()()(),Tl(176,`tr`)(177,`td`)(178,`strong`),cN(179,`Focused`),ag()(),Gl(180,`td`)(181,`td`),ag(),Tl(182,`tr`)(183,`td`)(184,`code`),cN(185,`--color-focused`),ag()(),Tl(186,`td`),cN(187,`Cor principal no estado de focus`),ag(),Tl(188,`td`)(189,`code`),cN(190,`var(--color-action-default)`),ag()()(),Tl(191,`tr`)(192,`td`)(193,`code`),cN(194,`--outline-color-focused`),ag()(),Tl(195,`td`),cN(196,`Cor do outline do estado de focus`),ag(),Tl(197,`td`)(198,`code`),cN(199,`var(--color-action-focus)`),ag()()(),Tl(200,`tr`)(201,`td`)(202,`strong`),cN(203,`Disabled`),ag()(),Gl(204,`td`)(205,`td`),ag(),Tl(206,`tr`)(207,`td`)(208,`code`),cN(209,`--color-disabled`),ag()(),Tl(210,`td`),cN(211,`Cor principal no estado disabled`),ag(),Tl(212,`td`)(213,`code`),cN(214,`var(--color-neutral-light-30)`),ag()()(),Tl(215,`tr`)(216,`td`)(217,`code`),cN(218,`--background-disabled`),ag()(),Tl(219,`td`),cN(220,`Cor de background no estado disabled`),ag(),Tl(221,`td`)(222,`code`),cN(223,`var(--color-neutral-light-20)`),ag()()(),Tl(224,`tr`)(225,`td`)(226,`code`),cN(227,`--text-color-disabled`),ag()(),Tl(228,`td`),cN(229,`Cor do texto no estado disabled`),ag(),Tl(230,`td`)(231,`code`),cN(232,`var(--color-neutral-dark-70)`),ag()()()()(),Tl(233,`p`),Gl(234,`br`),cN(235,` - O `),Tl(236,`code`),cN(237,`po-decimal`),ag(),cN(238,` é um `),Tl(239,`em`),cN(240,`input`),ag(),cN(241,` específico para receber apenas números decimais, por isso recebe as seguintes características:`),ag(),Tl(242,`ul`)(243,`li`),cN(244,`Aceita apenas números;`),ag(),Tl(245,`li`),cN(246,`Utiliza ',' como separador de decimal;`),ag(),Tl(247,`li`),cN(248,`Utiliza '.' para separação de milhar;`),ag(),Tl(249,`li`),cN(250,`É possível configurar a quantidade de casas decimais e a quantidade de digitos do campo.`),ag()(),Tl(251,`blockquote`)(252,`p`)(253,`strong`),cN(254,`Importante:`),ag(),cN(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),Tl(256,`code`),cN(257,`32 bits`),ag(),cN(258,`, e para que os valores comportem-se devidamente,
o `),Tl(259,`code`),cN(260,`po-decimal`),ag(),cN(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),Tl(262,`code`),cN(263,`p-decimals-length`),ag(),cN(264,` e `),Tl(265,`code`),cN(266,`p-thousand-maxlength`),ag(),cN(267,`.`),ag()()(),Tl(268,`div`,8)(269,`h4`,9),cN(270,`Seletor`),ag(),Tl(271,`pre`,10),cN(272,`<po-decimal
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
`),ag()(),Tl(273,`h4`,11),cN(274,`Propriedades`),ag(),Tl(275,`table`,12)(276,`tr`,13)(277,`th`,14),cN(278,`Nome`),ag(),Tl(279,`th`,14),cN(280,`Tipo`),ag(),Tl(281,`th`,14),cN(282,`Padrão`),ag(),Tl(283,`th`,14),cN(284,`Descrição`),ag()(),Tl(285,`tr`,15)(286,`td`,16)(287,`div`,17)(288,`span`,18),cN(289,` (p-additional-help)`),Gl(290,`br`),ag()(),Tl(291,`div`,19),cN(292,`Deprecated`),ag()(),Tl(293,`td`,20)(294,`code`,21),cN(295,`EventEmitter`),ag()(),Tl(296,`td`,22),cN(297,`-`),ag(),Tl(298,`td`,23)(299,`em`)(300,`strong`),cN(301,`(opcional)`),ag()(),Tl(302,`p`),cN(303,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(304,`blockquote`)(305,`p`),cN(306,`Essa propriedade está `),Tl(307,`strong`),cN(308,`depreciada`),ag(),cN(309,` e será removida na versão `),Tl(310,`code`),cN(311,`23.x.x`),ag(),cN(312,`. Recomendamos utilizar a propriedade `),Tl(313,`code`),cN(314,`p-helper`),ag(),cN(315,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(316,`tr`,15)(317,`td`,16)(318,`div`,24)(319,`span`,25),cN(320,` p-additional-help-tooltip`),Gl(321,`br`),ag()(),Tl(322,`div`,19),cN(323,`Deprecated`),ag()(),Tl(324,`td`,20)(325,`code`,26),cN(326,`string`),ag()(),Tl(327,`td`,22),cN(328,`-`),ag(),Tl(329,`td`,23)(330,`em`)(331,`strong`),cN(332,`(opcional)`),ag()(),Tl(333,`p`),cN(334,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(335,`code`),cN(336,`po-helper`),ag(),cN(337,`.
`),Tl(338,`strong`),cN(339,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(340,`blockquote`)(341,`p`),cN(342,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(343,`blockquote`)(344,`p`),cN(345,`Essa propriedade está `),Tl(346,`strong`),cN(347,`depreciada`),ag(),cN(348,` e será removida na versão `),Tl(349,`code`),cN(350,`23.x.x`),ag(),cN(351,`. Recomendamos utilizar a propriedade `),Tl(352,`code`),cN(353,`p-helper`),ag(),cN(354,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(355,`tr`,15)(356,`td`,16)(357,`div`,24)(358,`span`,25),cN(359,` p-append-in-body`),Gl(360,`br`),ag()()(),Tl(361,`td`,20)(362,`code`,27),cN(363,`boolean`),ag()(),Tl(364,`td`,22)(365,`p`)(366,`code`),cN(367,`false`),ag()()(),Tl(368,`td`,23)(369,`em`)(370,`strong`),cN(371,`(opcional)`),ag()(),Tl(372,`p`),cN(373,`Define que o popover (`),Tl(374,`code`),cN(375,`p-helper`),ag(),cN(376,` e/ou `),Tl(377,`code`),cN(378,`p-error-limit`),ag(),cN(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ag(),Tl(380,`blockquote`)(381,`p`),cN(382,`Quando utilizado com `),Tl(383,`code`),cN(384,`p-helper`),ag(),cN(385,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(386,`tr`,15)(387,`td`,16)(388,`div`,24)(389,`span`,25),cN(390,` p-auto-focus`),Gl(391,`br`),ag()()(),Tl(392,`td`,20)(393,`code`,27),cN(394,`boolean`),ag()(),Tl(395,`td`,22)(396,`p`)(397,`code`),cN(398,`false`),ag()()(),Tl(399,`td`,23)(400,`em`)(401,`strong`),cN(402,`(opcional)`),ag()(),Tl(403,`p`),cN(404,`Aplica foco no elemento ao ser iniciado.`),ag(),Tl(405,`blockquote`)(406,`p`),cN(407,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ag()()()(),Tl(408,`tr`,15)(409,`td`,16)(410,`div`,17)(411,`span`,18),cN(412,` (p-blur)`),Gl(413,`br`),ag()()(),Tl(414,`td`,20)(415,`code`,21),cN(416,`EventEmitter`),ag()(),Tl(417,`td`,22),cN(418,`-`),ag(),Tl(419,`td`,23)(420,`em`)(421,`strong`),cN(422,`(opcional)`),ag()(),Tl(423,`p`),cN(424,`Evento disparado ao sair do campo.`),ag()()(),Tl(425,`tr`,15)(426,`td`,16)(427,`div`,17)(428,`span`,18),cN(429,` (p-change)`),Gl(430,`br`),ag()()(),Tl(431,`td`,20)(432,`code`,21),cN(433,`EventEmitter`),ag()(),Tl(434,`td`,22),cN(435,`-`),ag(),Tl(436,`td`,23)(437,`em`)(438,`strong`),cN(439,`(opcional)`),ag()(),Tl(440,`p`),cN(441,`Evento disparado ao alterar valor e deixar o campo.`),ag()()(),Tl(442,`tr`,15)(443,`td`,16)(444,`div`,17)(445,`span`,18),cN(446,` (p-change-model)`),Gl(447,`br`),ag()()(),Tl(448,`td`,20)(449,`code`,21),cN(450,`EventEmitter`),ag()(),Tl(451,`td`,22),cN(452,`-`),ag(),Tl(453,`td`,23)(454,`em`)(455,`strong`),cN(456,`(opcional)`),ag()(),Tl(457,`p`),cN(458,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(459,`code`),cN(460,`setValue`),ag(),cN(461,`, `),Tl(462,`code`),cN(463,`patchValue`),ag(),cN(464,`, carregamento assíncrono).`),ag(),Tl(465,`p`),cN(466,`Diferentemente do `),Tl(467,`code`),cN(468,`p-change`),ag(),cN(469,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(470,`code`),cN(471,`p-change-model`),ag(),cN(472,` cobre todos os cenários de alteração de valor.`),ag(),Tl(473,`p`),cN(474,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(475,`tr`,15)(476,`td`,16)(477,`div`,24)(478,`span`,25),cN(479,`p-clean`),Gl(480,`br`),ag()()(),Tl(481,`td`,20)(482,`code`,27),cN(483,`boolean`),ag()(),Tl(484,`td`,22),cN(485,`-`),ag(),Tl(486,`td`,23)(487,`em`)(488,`strong`),cN(489,`(opcional)`),ag()(),Tl(490,`p`),cN(491,`Se verdadeiro, o campo receberá um botão para ser limpo.`),ag()()(),Tl(492,`tr`,15)(493,`td`,16)(494,`div`,24)(495,`span`,25),cN(496,` p-compact-label`),Gl(497,`br`),ag()()(),Tl(498,`td`,20)(499,`code`,27),cN(500,`boolean`),ag()(),Tl(501,`td`,22)(502,`p`)(503,`code`),cN(504,`false`),ag()()(),Tl(505,`td`,23)(506,`em`)(507,`strong`),cN(508,`(opcional)`),ag()(),Tl(509,`p`),cN(510,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(511,`p`),cN(512,`Quando habilitado (`),Tl(513,`code`),cN(514,`true`),ag(),cN(515,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(516,`ul`)(517,`li`)(518,`code`),cN(519,`po-label`),ag()(),Tl(520,`li`)(521,`code`),cN(522,`p-requirement (showRequired)`),ag()(),Tl(523,`li`)(524,`code`),cN(525,`po-helper`),ag()()(),Tl(526,`p`),cN(527,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(528,`p`),cN(529,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(530,`ul`)(531,`li`)(532,`code`),cN(533,`--field-container-title-justify`),ag()(),Tl(534,`li`)(535,`code`),cN(536,`--field-container-title-flex`),ag()()(),Tl(537,`p`),cN(538,`Exemplo:`),ag(),Tl(539,`pre`)(540,`code`),cN(541,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(542,`p`),cN(543,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(544,`tr`,15)(545,`td`,16)(546,`div`,24)(547,`span`,25),cN(548,` p-decimals-length`),Gl(549,`br`),ag()()(),Tl(550,`td`,20)(551,`code`,28),cN(552,`number`),ag()(),Tl(553,`td`,22)(554,`p`)(555,`code`),cN(556,`2`),ag()()(),Tl(557,`td`,23)(558,`em`)(559,`strong`),cN(560,`(opcional)`),ag()(),Tl(561,`p`),cN(562,`Quantidade máxima de casas decimais.`),ag(),Tl(563,`blockquote`)(564,`p`)(565,`strong`),cN(566,`Importante:`),ag()()(),Tl(567,`ul`)(568,`li`),cN(569,`O valor máximo permitido é 15;`),ag(),Tl(570,`li`),cN(571,`A soma total de `),Tl(572,`code`),cN(573,`p-decimals-length`),ag(),cN(574,` com `),Tl(575,`code`),cN(576,`p-thousand-maxlength`),ag(),cN(577,` limita-se à 16;`),ag(),Tl(578,`li`),cN(579,`Esta propriedade sobrepõe apenas o valor `),Tl(580,`strong`),cN(581,`padrão`),ag(),cN(582,` de `),Tl(583,`code`),cN(584,`p-thousand-maxlength`),ag(),cN(585,`;`),ag(),Tl(586,`li`),cN(587,`Caso `),Tl(588,`code`),cN(589,`p-thousand-maxlength`),ag(),cN(590,` tenha um valor definido, esta propriedade poderá receber apenas o valor restante do limite total (16).`),ag(),Tl(591,`li`),cN(592,`Quando utilizado com `),Tl(593,`code`),cN(594,`p-display-format`),ag(),cN(595,`, será respeitado o valor `),Tl(596,`strong`),cN(597,`mais restritivo`),ag(),cN(598,` entre esta propriedade e o número de casas decimais definido no formato.`),ag()()()(),Tl(599,`tr`,15)(600,`td`,16)(601,`div`,24)(602,`span`,25),cN(603,`p-disabled`),Gl(604,`br`),ag()()(),Tl(605,`td`,20)(606,`code`,27),cN(607,`boolean`),ag()(),Tl(608,`td`,22)(609,`p`)(610,`code`),cN(611,`false`),ag()()(),Tl(612,`td`,23)(613,`em`)(614,`strong`),cN(615,`(opcional)`),ag()(),Tl(616,`p`),cN(617,`Se verdadeiro, desabilita o campo.`),ag()()(),Tl(618,`tr`,15)(619,`td`,16)(620,`div`,24)(621,`span`,25),cN(622,` p-display-format`),Gl(623,`br`),ag()()(),Tl(624,`td`,20)(625,`code`,26),cN(626,`string `),ag(),Tl(627,`code`,29),cN(628,` undefined`),ag()(),Tl(629,`td`,22),cN(630,`-`),ag(),Tl(631,`td`,23)(632,`em`)(633,`strong`),cN(634,`(opcional)`),ag()(),Tl(635,`p`),cN(636,`Define uma máscara de formatação numérica avançada para o campo.`),ag(),Tl(637,`p`),cN(638,`Simbologia suportada:`),ag(),Tl(639,`ul`)(640,`li`)(641,`code`),cN(642,`9`),ag(),cN(643,`: Dígito obrigatório (preenche com zero à esquerda no blur);`),ag(),Tl(644,`li`)(645,`code`),cN(646,`>`),ag(),cN(647,`: Supressão de zero à esquerda (dígito não obrigatório);`),ag(),Tl(648,`li`)(649,`code`),cN(650,`<`),ag(),cN(651,`: Decimal flutuante, supressão de zeros à direita (dígito não obrigatório);`),ag(),Tl(652,`li`)(653,`code`),cN(654,`,`),ag(),cN(655,` e `),Tl(656,`code`),cN(657,`.`),ag(),cN(658,`: Separadores de milhar/grupo e decimal (convertidos conforme `),Tl(659,`code`),cN(660,`p-locale`),ag(),cN(661,`);`),ag(),Tl(662,`li`)(663,`code`),cN(664,`-`),ag(),cN(665,`: Sinal negativo (deve ser o primeiro caractere do formato).`),ag()(),Tl(666,`blockquote`)(667,`p`)(668,`strong`),cN(669,`Importante:`),ag()()(),Tl(670,`ul`)(671,`li`),cN(672,`A formatação via `),Tl(673,`code`),cN(674,`p-display-format`),ag(),cN(675,` é apenas visual; o valor do model é sempre o número puro.`),ag(),Tl(676,`li`),cN(677,`Quando o valor pré-preenchido não atende ao formato (overflow ou negativo sem `),Tl(678,`code`),cN(679,`-`),ag(),cN(680,`), o campo exibe com a formatação padrão do `),Tl(681,`code`),cN(682,`po-decimal`),ag(),cN(683,` (separadores de milhar + `),Tl(684,`code`),cN(685,`p-decimals-length`),ag(),cN(686,` casas decimais).`),ag(),Tl(687,`li`),cN(688,`Quando `),Tl(689,`code`),cN(690,`p-decimals-length`),ag(),cN(691,` ou `),Tl(692,`code`),cN(693,`p-thousand-maxlength`),ag(),cN(694,` são definidos, será respeitado o valor `),Tl(695,`strong`),cN(696,`mais restritivo`),ag(),cN(697,` entre o formato e a propriedade.`),ag(),Tl(698,`li`),cN(699,`Incompatível com `),Tl(700,`code`),cN(701,`p-mask`),ag(),cN(702,`, `),Tl(703,`code`),cN(704,`p-mask-format-model`),ag(),cN(705,`, `),Tl(706,`code`),cN(707,`p-mask-no-length-validation`),ag(),cN(708,` e `),Tl(709,`code`),cN(710,`p-pattern`),ag(),cN(711,`.`),ag()(),Tl(712,`p`),cN(713,`Exemplos de formato: `),Tl(714,`code`),cN(715,`>>>,>>>,>>9.99`),ag(),cN(716,`, `),Tl(717,`code`),cN(718,`->>,>>9.99`),ag(),cN(719,`, `),Tl(720,`code`),cN(721,`999.9`),ag(),cN(722,`, `),Tl(723,`code`),cN(724,`>>>,>>9.9<<<<<<`),ag()()()(),Tl(725,`tr`,15)(726,`td`,16)(727,`div`,24)(728,`span`,25),cN(729,` p-emit-all-changes`),Gl(730,`br`),ag()()(),Tl(731,`td`,20)(732,`code`,27),cN(733,`boolean`),ag()(),Tl(734,`td`,22)(735,`p`)(736,`code`),cN(737,`false`),ag()()(),Tl(738,`td`,23)(739,`em`)(740,`strong`),cN(741,`(opcional)`),ag()(),Tl(742,`p`),cN(743,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),ag()()(),Tl(744,`tr`,15)(745,`td`,16)(746,`div`,17)(747,`span`,18),cN(748,` (p-enter)`),Gl(749,`br`),ag()()(),Tl(750,`td`,20)(751,`code`,21),cN(752,`EventEmitter`),ag()(),Tl(753,`td`,22),cN(754,`-`),ag(),Tl(755,`td`,23)(756,`em`)(757,`strong`),cN(758,`(opcional)`),ag()(),Tl(759,`p`),cN(760,`Evento disparado ao entrar do campo.`),ag()()(),Tl(761,`tr`,15)(762,`td`,16)(763,`div`,24)(764,`span`,25),cN(765,` p-error-async-properties`),Gl(766,`br`),ag()()(),Tl(767,`td`,20)(768,`code`,30),cN(769,`ErrorAsyncProperties`),ag()(),Tl(770,`td`,22),cN(771,`-`),ag(),Tl(772,`td`,23)(773,`em`)(774,`strong`),cN(775,`(opcional)`),ag()(),Tl(776,`p`),cN(777,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Tl(778,`code`),cN(779,`Reactive Forms`),ag(),cN(780,`. Em formulários reativos, pode-se utilizar o próprio `),Tl(781,`code`),cN(782,`asyncValidators`),ag(),cN(783,`.`),ag()()(),Tl(784,`tr`,15)(785,`td`,16)(786,`div`,24)(787,`span`,25),cN(788,` p-error-limit`),Gl(789,`br`),ag()()(),Tl(790,`td`,20)(791,`code`,27),cN(792,`boolean`),ag()(),Tl(793,`td`,22)(794,`p`)(795,`code`),cN(796,`false`),ag()()(),Tl(797,`td`,23)(798,`em`)(799,`strong`),cN(800,`(opcional)`),ag()(),Tl(801,`p`),cN(802,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(803,`blockquote`)(804,`p`),cN(805,`Caso essa propriedade seja definida como `),Tl(806,`code`),cN(807,`true`),ag(),cN(808,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()()()(),Tl(809,`tr`,15)(810,`td`,16)(811,`div`,24)(812,`span`,25),cN(813,` p-error-pattern`),Gl(814,`br`),ag()()(),Tl(815,`td`,20)(816,`code`,26),cN(817,`string`),ag()(),Tl(818,`td`,22),cN(819,`-`),ag(),Tl(820,`td`,23)(821,`em`)(822,`strong`),cN(823,`(opcional)`),ag()(),Tl(824,`p`),cN(825,`Mensagem que será apresentada quando o `),Tl(826,`code`),cN(827,`pattern`),ag(),cN(828,` ou a máscara não for satisfeita.`),ag(),Tl(829,`blockquote`)(830,`p`),cN(831,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Tl(832,`code`),cN(833,`p-required-field-error-message`),ag(),cN(834,` em conjunto.`),ag()()()(),Tl(835,`tr`,15)(836,`td`,16)(837,`div`,24)(838,`span`,25),cN(839,` p-help`),Gl(840,`br`),ag()()(),Tl(841,`td`,20)(842,`code`,26),cN(843,`string`),ag()(),Tl(844,`td`,22),cN(845,`-`),ag(),Tl(846,`td`,23)(847,`em`)(848,`strong`),cN(849,`(opcional)`),ag()(),Tl(850,`p`),cN(851,`Texto de apoio do campo.`),ag()()(),Tl(852,`tr`,15)(853,`td`,16)(854,`div`,24)(855,`span`,25),cN(856,` p-icon`),Gl(857,`br`),ag()()(),Tl(858,`td`,20)(859,`code`,26),cN(860,`string `),ag(),Tl(861,`code`,31),cN(862,` TemplateRef<void>`),ag()(),Tl(863,`td`,22),cN(864,`-`),ag(),Tl(865,`td`,23)(866,`em`)(867,`strong`),cN(868,`(opcional)`),ag()(),Tl(869,`p`),cN(870,`Define o ícone que será exibido no início do campo.`),ag(),Tl(871,`p`),cN(872,`É possível usar qualquer um dos ícones da `),Tl(873,`a`,32),cN(874,`Biblioteca de ícones`),ag(),cN(875,`. conforme exemplo abaixo:`),ag(),Tl(876,`pre`)(877,`code`),cN(878,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),ag()(),Tl(879,`p`),cN(880,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(881,`em`),cN(882,`Font Awesome`),ag(),cN(883,`, da seguinte forma:`),ag(),Tl(884,`pre`)(885,`code`),cN(886,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),ag()(),Tl(887,`p`),cN(888,`Outra opção seria a customização do ícone através do `),Tl(889,`code`),cN(890,`TemplateRef`),ag(),cN(891,`, conforme exemplo abaixo:`),ag(),Tl(892,`pre`)(893,`code`),cN(894,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ag()(),Tl(895,`blockquote`)(896,`p`),cN(897,`Para o ícone enquadrar corretamente, deve-se utilizar `),Tl(898,`code`),cN(899,`font-size: inherit`),ag(),cN(900,` caso o ícone utilizado não aplique-o.`),ag()()()(),Tl(901,`tr`,15)(902,`td`,16)(903,`div`,17)(904,`span`,18),cN(905,` (p-keydown)`),Gl(906,`br`),ag()()(),Tl(907,`td`,20)(908,`code`,21),cN(909,`EventEmitter`),ag()(),Tl(910,`td`,22),cN(911,`-`),ag(),Tl(912,`td`,23)(913,`em`)(914,`strong`),cN(915,`(opcional)`),ag()(),Tl(916,`p`),cN(917,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(918,`code`),cN(919,`KeyboardEvent`),ag(),cN(920,` com informações sobre a tecla.`),ag()()(),Tl(921,`tr`,15)(922,`td`,16)(923,`div`,24)(924,`span`,25),cN(925,` p-label`),Gl(926,`br`),ag()()(),Tl(927,`td`,20)(928,`code`,26),cN(929,`string`),ag()(),Tl(930,`td`,22),cN(931,`-`),ag(),Tl(932,`td`,23)(933,`em`)(934,`strong`),cN(935,`(opcional)`),ag()(),Tl(936,`p`),cN(937,`Rótulo do campo.`),ag()()(),Tl(938,`tr`,15)(939,`td`,16)(940,`div`,24)(941,`span`,25),cN(942,` p-label-text-wrap`),Gl(943,`br`),ag()()(),Tl(944,`td`,20)(945,`code`,27),cN(946,`boolean`),ag()(),Tl(947,`td`,22)(948,`p`)(949,`code`),cN(950,`false`),ag()()(),Tl(951,`td`,23)(952,`em`)(953,`strong`),cN(954,`(opcional)`),ag()(),Tl(955,`p`),cN(956,`Habilita a quebra automática do texto da propriedade `),Tl(957,`code`),cN(958,`p-label`),ag(),cN(959,`. Quando `),Tl(960,`code`),cN(961,`p-label-text-wrap`),ag(),cN(962,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(963,`tr`,15)(964,`td`,16)(965,`div`,24)(966,`span`,25),cN(967,` p-loading`),Gl(968,`br`),ag()()(),Tl(969,`td`,20)(970,`code`,27),cN(971,`boolean`),ag()(),Tl(972,`td`,22)(973,`p`)(974,`code`),cN(975,`false`),ag()()(),Tl(976,`td`,23)(977,`em`)(978,`strong`),cN(979,`(opcional)`),ag()(),Tl(980,`p`),cN(981,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ag()()(),Tl(982,`tr`,15)(983,`td`,16)(984,`div`,24)(985,`span`,25),cN(986,` p-locale`),Gl(987,`br`),ag()()(),Tl(988,`td`,20)(989,`code`,26),cN(990,`string`),ag()(),Tl(991,`td`,22),cN(992,`-`),ag(),Tl(993,`td`,23)(994,`em`)(995,`strong`),cN(996,`(opcional)`),ag()(),Tl(997,`p`),cN(998,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),Tl(999,`a`,33)(1e3,`code`),cN(1001,`I18n`),ag()()(),Tl(1002,`blockquote`)(1003,`p`),cN(1004,`Para ver quais linguagens suportadas acesse `),Tl(1005,`a`,33)(1006,`code`),cN(1007,`I18n`),ag()()()()()(),Tl(1008,`tr`,15)(1009,`td`,16)(1010,`div`,24)(1011,`span`,25),cN(1012,`p-mask`),Gl(1013,`br`),ag()()(),Tl(1014,`td`,20)(1015,`code`,26),cN(1016,`string`),ag()(),Tl(1017,`td`,22),cN(1018,`-`),ag(),Tl(1019,`td`,23)(1020,`em`)(1021,`strong`),cN(1022,`(opcional)`),ag()(),Tl(1023,`p`),cN(1024,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),ag()()(),Tl(1025,`tr`,15)(1026,`td`,16)(1027,`div`,24)(1028,`span`,25),cN(1029,`p-mask-format-model`),Gl(1030,`br`),ag()()(),Tl(1031,`td`,20)(1032,`code`,27),cN(1033,`boolean`),ag()(),Tl(1034,`td`,22)(1035,`p`)(1036,`code`),cN(1037,`false`),ag()()(),Tl(1038,`td`,23)(1039,`em`)(1040,`strong`),cN(1041,`(opcional)`),ag()(),Tl(1042,`p`),cN(1043,`Indica se o `),Tl(1044,`code`),cN(1045,`model`),ag(),cN(1046,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),ag()()(),Tl(1047,`tr`,15)(1048,`td`,16)(1049,`div`,24)(1050,`span`,25),cN(1051,` p-mask-no-length-validation`),Gl(1052,`br`),ag()()(),Tl(1053,`td`,20)(1054,`code`,27),cN(1055,`boolean`),ag()(),Tl(1056,`td`,22)(1057,`p`)(1058,`code`),cN(1059,`false`),ag()()(),Tl(1060,`td`,23)(1061,`p`),cN(1062,`Controla como o componente aplica as validações de comprimento mínimo (`),Tl(1063,`code`),cN(1064,`minLength`),ag(),cN(1065,`) e máximo (`),Tl(1066,`code`),cN(1067,`maxLength`),ag(),cN(1068,`) quando há uma máscara (`),Tl(1069,`code`),cN(1070,`p-mask`),ag(),cN(1071,`) definida.`),ag(),Tl(1072,`ul`)(1073,`li`),cN(1074,`Quando `),Tl(1075,`code`),cN(1076,`true`),ag(),cN(1077,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ag(),Tl(1078,`li`),cN(1079,`Quando `),Tl(1080,`code`),cN(1081,`false`),ag(),cN(1082,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ag()(),Tl(1083,`blockquote`)(1084,`p`),cN(1085,`Esta propriedade é ignorada quando utilizada em conjunto com `),Tl(1086,`code`),cN(1087,`p-mask-format-model`),ag(),cN(1088,`.`),ag()(),Tl(1089,`p`),cN(1090,`Exemplo:`),ag(),Tl(1091,`pre`)(1092,`code`),cN(1093,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ag()(),Tl(1094,`ul`)(1095,`li`),cN(1096,`Entrada: `),Tl(1097,`code`),cN(1098,`123-456`),ag(),cN(1099,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Tl(1100,`code`),cN(1101,`-`),ag(),cN(1102,`.`),ag()()()(),Tl(1103,`tr`,15)(1104,`td`,16)(1105,`div`,24)(1106,`span`,25),cN(1107,` p-max`),Gl(1108,`br`),ag()()(),Tl(1109,`td`,20)(1110,`code`,28),cN(1111,`number`),ag()(),Tl(1112,`td`,22),cN(1113,`-`),ag(),Tl(1114,`td`,23)(1115,`em`)(1116,`strong`),cN(1117,`(opcional)`),ag()(),Tl(1118,`p`),cN(1119,`Valor máximo.`),ag()()(),Tl(1120,`tr`,15)(1121,`td`,16)(1122,`div`,24)(1123,`span`,25),cN(1124,` p-maxlength`),Gl(1125,`br`),ag()()(),Tl(1126,`td`,20)(1127,`code`,28),cN(1128,`number`),ag()(),Tl(1129,`td`,22),cN(1130,`-`),ag(),Tl(1131,`td`,23)(1132,`em`)(1133,`strong`),cN(1134,`(opcional)`),ag()(),Tl(1135,`p`),cN(1136,`Indica a quantidade máxima de caracteres que o campo aceita.`),ag()()(),Tl(1137,`tr`,15)(1138,`td`,16)(1139,`div`,24)(1140,`span`,25),cN(1141,` p-min`),Gl(1142,`br`),ag()()(),Tl(1143,`td`,20)(1144,`code`,28),cN(1145,`number`),ag()(),Tl(1146,`td`,22),cN(1147,`-`),ag(),Tl(1148,`td`,23)(1149,`em`)(1150,`strong`),cN(1151,`(opcional)`),ag()(),Tl(1152,`p`),cN(1153,`Valor mínimo.`),ag()()(),Tl(1154,`tr`,15)(1155,`td`,16)(1156,`div`,24)(1157,`span`,25),cN(1158,` p-minlength`),Gl(1159,`br`),ag()()(),Tl(1160,`td`,20)(1161,`code`,28),cN(1162,`number`),ag()(),Tl(1163,`td`,22),cN(1164,`-`),ag(),Tl(1165,`td`,23)(1166,`em`)(1167,`strong`),cN(1168,`(opcional)`),ag()(),Tl(1169,`p`),cN(1170,`Indica a quantidade mínima de caracteres que o campo aceita.`),ag()()(),Tl(1171,`tr`,15)(1172,`td`,16)(1173,`div`,24)(1174,`span`,25),cN(1175,` name`),Gl(1176,`br`),ag()()(),Tl(1177,`td`,20)(1178,`code`,26),cN(1179,`string`),ag()(),Tl(1180,`td`,22),cN(1181,`-`),ag(),Tl(1182,`td`,23)(1183,`p`),cN(1184,`Nome e identificador do campo.`),ag()()(),Tl(1185,`tr`,15)(1186,`td`,16)(1187,`div`,24)(1188,`span`,25),cN(1189,` p-no-autocomplete`),Gl(1190,`br`),ag()()(),Tl(1191,`td`,20)(1192,`code`,27),cN(1193,`boolean`),ag()(),Tl(1194,`td`,22)(1195,`p`)(1196,`code`),cN(1197,`false`),ag()()(),Tl(1198,`td`,23)(1199,`em`)(1200,`strong`),cN(1201,`(opcional)`),ag()(),Tl(1202,`p`),cN(1203,`Define a propriedade nativa `),Tl(1204,`code`),cN(1205,`autocomplete`),ag(),cN(1206,` do campo como `),Tl(1207,`code`),cN(1208,`off`),ag(),cN(1209,`.`),ag(),Tl(1210,`blockquote`)(1211,`p`),cN(1212,`No componente `),Tl(1213,`code`),cN(1214,`po-password`),ag(),cN(1215,` será definido como `),Tl(1216,`code`),cN(1217,`new-password`),ag(),cN(1218,`.`),ag()(),Tl(1219,`p`),cN(1220,`Nos componentes `),Tl(1221,`code`),cN(1222,`po-password`),ag(),cN(1223,` e `),Tl(1224,`code`),cN(1225,`po-login`),ag(),cN(1226,` o valor padrão será `),Tl(1227,`code`),cN(1228,`true`),ag(),cN(1229,`.`),ag()()(),Tl(1230,`tr`,15)(1231,`td`,16)(1232,`div`,24)(1233,`span`,25),cN(1234,` p-optional`),Gl(1235,`br`),ag()()(),Tl(1236,`td`,20)(1237,`code`,27),cN(1238,`boolean`),ag()(),Tl(1239,`td`,22)(1240,`p`)(1241,`code`),cN(1242,`false`),ag()()(),Tl(1243,`td`,23)(1244,`em`)(1245,`strong`),cN(1246,`(opcional)`),ag()(),Tl(1247,`p`),cN(1248,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(1249,`blockquote`)(1250,`p`),cN(1251,`Não será exibida a indicação se:`),ag()(),Tl(1252,`ul`)(1253,`li`),cN(1254,`O campo conter `),Tl(1255,`code`),cN(1256,`p-required`),ag(),cN(1257,`;`),ag(),Tl(1258,`li`),cN(1259,`Não possuir `),Tl(1260,`code`),cN(1261,`p-help`),ag(),cN(1262,` e/ou `),Tl(1263,`code`),cN(1264,`p-label`),ag(),cN(1265,`.`),ag()()()(),Tl(1266,`tr`,15)(1267,`td`,16)(1268,`div`,24)(1269,`span`,25),cN(1270,`p-pattern`),Gl(1271,`br`),ag()()(),Tl(1272,`td`,20)(1273,`code`,26),cN(1274,`string`),ag()(),Tl(1275,`td`,22),cN(1276,`-`),ag(),Tl(1277,`td`,23)(1278,`em`)(1279,`strong`),cN(1280,`(opcional)`),ag()(),Tl(1281,`p`),cN(1282,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Tl(1283,`code`),cN(1284,`(p-mask)`),ag(),cN(1285,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ag()()(),Tl(1286,`tr`,15)(1287,`td`,16)(1288,`div`,24)(1289,`span`,25),cN(1290,` p-placeholder`),Gl(1291,`br`),ag()()(),Tl(1292,`td`,20)(1293,`code`,26),cN(1294,`string`),ag()(),Tl(1295,`td`,22)(1296,`p`),cN(1297,`''`),ag()(),Tl(1298,`td`,23)(1299,`em`)(1300,`strong`),cN(1301,`(opcional)`),ag()(),Tl(1302,`p`),cN(1303,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ag()()(),Tl(1304,`tr`,15)(1305,`td`,16)(1306,`div`,24)(1307,`span`,25),cN(1308,` p-helper`),Gl(1309,`br`),ag()()(),Tl(1310,`td`,20)(1311,`code`,34),cN(1312,`PoHelperOptions `),ag(),Tl(1313,`code`,26),cN(1314,` string`),ag()(),Tl(1315,`td`,22),cN(1316,`-`),ag(),Tl(1317,`td`,23)(1318,`em`)(1319,`strong`),cN(1320,`(opcional)`),ag()(),Tl(1321,`p`),cN(1322,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(1323,`code`),cN(1324,`p-label`),ag(),cN(1325,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(1326,`code`),cN(1327,`p-label`),ag(),cN(1328,`.`),ag(),Tl(1329,`blockquote`)(1330,`p`),cN(1331,`Para mais informações acesse: `),Tl(1332,`a`,35),cN(1333,`https://po-ui.io/documentation/po-helper`),ag(),cN(1334,`.`),ag()(),Tl(1335,`blockquote`)(1336,`p`),cN(1337,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(1338,`code`),cN(1339,`p-additional-help-tooltip`),ag(),cN(1340,` e `),Tl(1341,`code`),cN(1342,`p-additional-help`),ag(),cN(1343,`) será ignorado.`),ag()()()(),Tl(1344,`tr`,15)(1345,`td`,16)(1346,`div`,24)(1347,`span`,25),cN(1348,`p-readonly`),Gl(1349,`br`),ag()()(),Tl(1350,`td`,20)(1351,`code`,27),cN(1352,`boolean`),ag()(),Tl(1353,`td`,22),cN(1354,`-`),ag(),Tl(1355,`td`,23)(1356,`em`)(1357,`strong`),cN(1358,`(opcional)`),ag()(),Tl(1359,`p`),cN(1360,`Indica que o campo será somente leitura.`),ag()()(),Tl(1361,`tr`,15)(1362,`td`,16)(1363,`div`,24)(1364,`span`,25),cN(1365,`p-required`),Gl(1366,`br`),ag()()(),Tl(1367,`td`,20)(1368,`code`,27),cN(1369,`boolean`),ag()(),Tl(1370,`td`,22)(1371,`p`)(1372,`code`),cN(1373,`false`),ag()()(),Tl(1374,`td`,23)(1375,`em`)(1376,`strong`),cN(1377,`(opcional)`),ag()(),Tl(1378,`p`),cN(1379,`Define que o campo será obrigatório.`),ag(),Tl(1380,`blockquote`)(1381,`p`),cN(1382,`Esta propriedade é desconsiderada quando o input está desabilitado `),Tl(1383,`code`),cN(1384,`(p-disabled)`),ag(),cN(1385,`.`),ag()()()(),Tl(1386,`tr`,15)(1387,`td`,16)(1388,`div`,24)(1389,`span`,25),cN(1390,` p-required-field-error-message`),Gl(1391,`br`),ag()()(),Tl(1392,`td`,20)(1393,`code`,27),cN(1394,`boolean`),ag()(),Tl(1395,`td`,22)(1396,`p`)(1397,`code`),cN(1398,`false`),ag()()(),Tl(1399,`td`,23)(1400,`em`)(1401,`strong`),cN(1402,`(opcional)`),ag()(),Tl(1403,`p`),cN(1404,`Exibe a mensagem setada na propriedade `),Tl(1405,`code`),cN(1406,`p-error-pattern`),ag(),cN(1407,` se o campo estiver vazio e for requerido.`),ag(),Tl(1408,`blockquote`)(1409,`p`),cN(1410,`Necessário que a propriedade `),Tl(1411,`code`),cN(1412,`p-required`),ag(),cN(1413,` esteja habilitada.`),ag()()()(),Tl(1414,`tr`,15)(1415,`td`,16)(1416,`div`,24)(1417,`span`,25),cN(1418,` p-show-required`),Gl(1419,`br`),ag()()(),Tl(1420,`td`,20)(1421,`code`,27),cN(1422,`boolean`),ag()(),Tl(1423,`td`,22),cN(1424,`-`),ag(),Tl(1425,`td`,23)(1426,`p`),cN(1427,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(1428,`blockquote`)(1429,`p`),cN(1430,`Não será exibida a indicação se:`),ag()(),Tl(1431,`ul`)(1432,`li`),cN(1433,`Não possuir `),Tl(1434,`code`),cN(1435,`p-help`),ag(),cN(1436,` e/ou `),Tl(1437,`code`),cN(1438,`p-label`),ag(),cN(1439,`.`),ag()()()(),Tl(1440,`tr`,15)(1441,`td`,16)(1442,`div`,24)(1443,`span`,25),cN(1444,` p-size`),Gl(1445,`br`),ag()()(),Tl(1446,`td`,20)(1447,`code`,26),cN(1448,`string`),ag()(),Tl(1449,`td`,22)(1450,`p`)(1451,`code`),cN(1452,`medium`),ag()()(),Tl(1453,`td`,23)(1454,`em`)(1455,`strong`),cN(1456,`(opcional)`),ag()(),Tl(1457,`p`),cN(1458,`Define o tamanho do componente:`),ag(),Tl(1459,`ul`)(1460,`li`)(1461,`code`),cN(1462,`small`),ag(),cN(1463,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(1464,`li`)(1465,`code`),cN(1466,`medium`),ag(),cN(1467,`: altura do input como 44px.`),ag()(),Tl(1468,`blockquote`)(1469,`p`),cN(1470,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(1471,`code`),cN(1472,`medium`),ag(),cN(1473,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1474,`a`,36),cN(1475,`po-theme`),ag(),cN(1476,`.`),ag()()()(),Tl(1477,`tr`,15)(1478,`td`,16)(1479,`div`,24)(1480,`span`,25),cN(1481,` p-thousand-maxlength`),Gl(1482,`br`),ag()()(),Tl(1483,`td`,20)(1484,`code`,28),cN(1485,`number`),ag()(),Tl(1486,`td`,22)(1487,`p`)(1488,`code`),cN(1489,`13`),ag()()(),Tl(1490,`td`,23)(1491,`em`)(1492,`strong`),cN(1493,`(opcional)`),ag()(),Tl(1494,`p`),cN(1495,`Quantidade máxima de dígitos antes do separador decimal.`),ag(),Tl(1496,`blockquote`)(1497,`p`)(1498,`strong`),cN(1499,`Importante:`),ag()()(),Tl(1500,`ul`)(1501,`li`),cN(1502,`O valor máximo permitido é 13;`),ag(),Tl(1503,`li`),cN(1504,`A soma total de `),Tl(1505,`code`),cN(1506,`p-decimals-length`),ag(),cN(1507,` com `),Tl(1508,`code`),cN(1509,`p-thousand-maxlength`),ag(),cN(1510,` limita-se à 16;`),ag(),Tl(1511,`li`),cN(1512,`Esta propriedade sobrepõe o valor definido em `),Tl(1513,`code`),cN(1514,`p-decimals-length`),ag(),cN(1515,`.`),ag(),Tl(1516,`li`),cN(1517,`Quando utilizado com `),Tl(1518,`code`),cN(1519,`p-display-format`),ag(),cN(1520,`, será respeitado o valor `),Tl(1521,`strong`),cN(1522,`mais restritivo`),ag(),cN(1523,` entre esta propriedade e o n\xFAmero de d\xEDgitos inteiros definido no
formato.`),ag()()()(),Tl(1524,`tr`,15)(1525,`td`,16)(1526,`div`,24)(1527,`span`,25),cN(1528,` p-upper-case`),Gl(1529,`br`),ag()()(),Tl(1530,`td`,20)(1531,`code`,27),cN(1532,`boolean`),ag()(),Tl(1533,`td`,22),cN(1534,`-`),ag(),Tl(1535,`td`,23)(1536,`p`),cN(1537,`Converte o conteúdo do campo em maiúsulo automaticamente.`),ag()()()(),Tl(1538,`h3`,11),cN(1539,`Métodos`),ag(),Tl(1540,`table`,37)(1541,`tr`,15)(1542,`th`,38)(1543,`div`,24)(1544,`h4`)(1545,`span`,25),cN(1546,` showAdditionalHelp `),ag()()()()(),Tl(1547,`tr`,23)(1548,`td`,23)(1549,`p`),cN(1550,`Método que exibe `),Tl(1551,`code`),cN(1552,`p-helper`),ag(),cN(1553,` ou executa a ação definida em `),Tl(1554,`code`),cN(1555,`p-helper{eventOnClick}`),ag(),cN(1556,` ou em `),Tl(1557,`code`),cN(1558,`p-additionalHelp`),ag(),cN(1559,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1560,`code`),cN(1561,`p-keydown`),ag(),cN(1562,`.`),ag(),Tl(1563,`blockquote`)(1564,`p`),cN(1565,`Exibe ou oculta o conteúdo do componente `),Tl(1566,`code`),cN(1567,`po-helper`),ag(),cN(1568,` quando o componente estiver com foco.`),ag()(),Tl(1569,`pre`)(1570,`code`),cN(1571,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ag()(),Tl(1572,`pre`)(1573,`code`),cN(1574,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(1575,`br`),Tl(1576,`table`,37)(1577,`tr`,15)(1578,`th`,38)(1579,`div`,24)(1580,`h4`)(1581,`span`,25),cN(1582,` focus `),ag()()()()(),Tl(1583,`tr`,23)(1584,`td`,23)(1585,`p`),cN(1586,`Função que atribui foco ao componente.`),ag(),Tl(1587,`p`),cN(1588,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(1589,`pre`)(1590,`code`),cN(1591,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ag()()()()(),Gl(1592,`br`),Tl(1593,`h3`),cN(1594,`Interfaces`),ag(),Tl(1595,`h4`,39)(1596,`code`,5),cN(1597,`ErrorAsyncProperties`),ag()(),Tl(1598,`div`,2)(1599,`p`),cN(1600,`Interface para realizar uma validação assíncrona no componente.`),ag()(),Tl(1601,`h4`,11),cN(1602,`Propriedades`),ag(),Tl(1603,`table`,12)(1604,`tr`,13)(1605,`th`,14),cN(1606,`Nome`),ag(),Tl(1607,`th`,14),cN(1608,`Tipo`),ag(),Tl(1609,`th`,14),cN(1610,`Descrição`),ag()(),Tl(1611,`tr`,15)(1612,`td`,16)(1613,`div`,24)(1614,`span`,25),cN(1615,` errorAsync`),Gl(1616,`br`),ag()()(),Tl(1617,`td`,20)(1618,`code`,40),cN(1619,`(value) => Observable<boolean>`),ag()(),Tl(1620,`td`,23)(1621,`p`),cN(1622,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(1623,`code`),cN(1624,`change`),ag(),cN(1625,` ou `),Tl(1626,`code`),cN(1627,`change-model`),ag(),cN(1628,`, dependendo do valor da propriedade `),Tl(1629,`code`),cN(1630,`triggerMode`),ag(),cN(1631,`.`),ag()()(),Tl(1632,`tr`,15)(1633,`td`,16)(1634,`div`,24)(1635,`span`,25),cN(1636,` triggerMode`),Gl(1637,`br`),ag()()(),Tl(1638,`td`,20)(1639,`code`,41),cN(1640,`'change' `),ag(),Tl(1641,`code`,42),cN(1642,` 'changeModel'`),ag()(),Tl(1643,`td`,23)(1644,`em`)(1645,`strong`),cN(1646,`(opcional)`),ag()(),Tl(1647,`p`),cN(1648,`Controla se o método será executado no disparo do output `),Tl(1649,`code`),cN(1650,`change`),ag(),cN(1651,` ou `),Tl(1652,`code`),cN(1653,`change-model`),ag(),cN(1654,`.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var ze=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(w(Xn),w(Cn))};static ɵcmp=Un({type:l,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Decimal`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-decimal-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-decimal-basic-view`)(6,`sample-po-decimal-labs-view`)(7,`sample-po-decimal-hourly-wage-view`)(8,`sample-po-decimal-hourly-wage-reactive-form-view`)(9,`sample-po-decimal-display-format-view`),ag()()()),r&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,pe,ce,ge,he,be,xe],encapsulation:2,changeDetection:1})}return l})()}];var ye=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue$1({imports:[bL.forChild(ze),bL]})}return l})();var ft=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue$1({imports:[ar,ye]})}return l})();export{ft as DocPoDecimalModule};