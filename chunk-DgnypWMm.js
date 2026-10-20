import{$r as Zn,Br as Sx,Ei as jc,Hi as pe$1,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Kn as Ag,Pi as mt,Ri as nu,Rt as _oe,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,i as _a,ir as EF,ji as mO,mn as ni,pa as wg,r as Ta,rt as Ote,ta as ue,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var te=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`number`,`p-label`,`PO Number`]],template:function(r,i){r&1&&nu(0,`po-number`,0)},dependencies:[doe],encapsulation:2,changeDetection:1})}return l})();var ce=l=>({"docs-sample-code-tabs":l});var ie=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Number Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-number-basic/sample-po-number-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-number-basic/sample-po-number-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-number-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ce,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,te],encapsulation:2,changeDetection:1})}return l})();var oe=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:`an an-currency-circle-dollar`,label:`an an-currency-circle-dollar`},{value:`an an-currency-btc`,label:`an an-currency-btc`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event=``,this.messageErrorPattern=``,this.label=void 0,this.placeholder=``,this.help=``,this.icon=``,this.size=`medium`,this.step=void 0,this.properties=[]}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-labs`]],standalone:!1,decls:23,vars:43,consts:[[`f`,`ngForm`],[`name`,`PO number`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-max`,`p-maxlength`,`p-min`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-step`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`messageErrorPattern`,`p-clean`,``,`p-label`,`Message error pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`min`,`p-clean`,``,`p-label`,`Min`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Minlength`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-clean`,``,`p-label`,`Max`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Maxlength`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`step`,`p-clean`,``,`p-label`,`Step`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let p=Sx();jc(0,`po-number`,1),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.number,o)||(i.number=o),v_(o)}),mt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3)(4,`po-info`,4),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.label,o)||(i.label=o),v_(o)}),wg(),jc(9,`po-input`,6),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.help,o)||(i.help=o),v_(o)}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.helperText,o)||(i.helperText=o),v_(o)}),wg(),jc(11,`po-input`,8),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.placeholder,o)||(i.placeholder=o),v_(o)}),wg(),jc(12,`po-input`,9),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.messageErrorPattern,o)||(i.messageErrorPattern=o),v_(o)}),wg(),jc(13,`po-number`,10),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.min,o)||(i.min=o),v_(o)}),wg(),jc(14,`po-number`,11),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.minlength,o)||(i.minlength=o),v_(o)}),wg(),jc(15,`po-number`,12),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.max,o)||(i.max=o),v_(o)}),wg(),jc(16,`po-number`,13),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.maxlength,o)||(i.maxlength=o),v_(o)}),wg(),jc(17,`po-number`,14),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.step,o)||(i.step=o),v_(o)}),wg(),jc(18,`po-select`,15),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.icon,o)||(i.icon=o),v_(o)}),wg(),jc(19,`po-checkbox-group`,16),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.properties,o)||(i.properties=o),v_(o)}),wg(),jc(20,`po-radio-group`,17),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.size,o)||(i.size=o),v_(o)}),wg(),jc(21,`div`,2)(22,`po-button`,18),mt(`p-click`,function(){return i.restore()}),wg()()()}r&2&&(ib(`ngModel`,i.number),jE(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.messageErrorPattern)(`p-help`,i.help)(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-max`,i.max)(`p-maxlength`,i.maxlength)(`p-min`,i.min)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-step`,i.step)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),t0(),rg(3),jE(`p-value`,i.number),rg(),jE(`p-value`,i.event),rg(4),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.help),t0(),rg(),ib(`ngModel`,i.helperText),t0(),rg(),ib(`ngModel`,i.placeholder),t0(),rg(),ib(`ngModel`,i.messageErrorPattern),t0(),rg(),ib(`ngModel`,i.min),t0(),rg(),ib(`ngModel`,i.minlength),t0(),rg(),ib(`ngModel`,i.max),t0(),rg(),ib(`ngModel`,i.maxlength),t0(),rg(),ib(`ngModel`,i.step),t0(),rg(),ib(`ngModel`,i.icon),jE(`p-options`,i.iconOptions),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizeOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,doe,Ote,moe,_oe],encapsulation:2,changeDetection:1})}return l})();var ge=l=>({"docs-sample-code-tabs":l});var ae=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Number Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-number-labs/sample-po-number-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-number
  class="po-md-12"
  name="PO number"
  [(ngModel)]="number"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="messageErrorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="properties?.includes('loading')"
  [p-max]="max"
  [p-maxlength]="maxlength"
  [p-min]="min"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-step]="step"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-number>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="number"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="messageErrorPattern"
    [(ngModel)]="messageErrorPattern"
    p-clean
    p-label="Message error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Minlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Maxlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="step" [(ngModel)]="step" p-clean p-label="Step"> </po-number>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-number-labs/sample-po-number-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-labs',
  templateUrl: './sample-po-number-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberLabsComponent implements OnInit {
  helperText: string;
  event: string;
  messageErrorPattern: string;
  help: string;
  icon: string;
  label: string;
  max: number;
  maxlength: number;
  min: number;
  minlength: number;
  number: number;
  placeholder: string;
  properties: Array<string>;
  size: string;
  step: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-currency-circle-dollar', label: 'an an-currency-circle-dollar' },
    { value: 'an an-currency-btc', label: 'an an-currency-btc' },
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

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.number = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.event = '';
    this.messageErrorPattern = '';
    this.label = undefined;
    this.placeholder = '';
    this.help = '';
    this.icon = '';
    this.size = 'medium';
    this.step = undefined;
    this.properties = [];
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-number-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ge,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,oe],encapsulation:2,changeDetection:1})}return l})();var le=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:`São Paulo`},{value:17,label:`Alagoas`},{value:15,label:`Ceará`}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100)}loadICMS(){this.icms=this.state}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-calculate`]],standalone:!1,decls:16,vars:9,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`price`,`p-label`,`Price`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantity`,`p-label`,`Quantity`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,`p-required`,``,`p-sort`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icms`,`p-label`,`ICMS %`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`liquid`,`p-label`,`Liquid`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`total`,`p-label`,`Total`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Calculate`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let p=Sx();jc(0,`h3`),iO(1,`Calculate Tax`),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,1)(6,`po-number`,2),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.price,o)||(i.price=o),v_(o)}),wg(),jc(7,`po-number`,3),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.quantity,o)||(i.quantity=o),v_(o)}),wg()(),jc(8,`div`)(9,`po-select`,4),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.state,o)||(i.state=o),v_(o)}),mt(`p-change`,function(){return i.loadICMS()}),wg(),jc(10,`po-number`,5),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.icms,o)||(i.icms=o),v_(o)}),wg(),jc(11,`po-number`,6),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.liquid,o)||(i.liquid=o),v_(o)}),wg(),jc(12,`po-number`,7),JN(),ob(`ngModelChange`,function(o){return y_(p),sO(i.total,o)||(i.total=o),v_(o)}),wg()(),jc(13,`div`,1)(14,`po-button`,8),mt(`p-click`,function(){return i.calculate()}),wg(),jc(15,`po-button`,9),mt(`p-click`,function(){y_(p);let o=Fx(4);return v_(o.reset())}),wg()()()}if(r&2){let p=Fx(4);rg(6),ib(`ngModel`,i.price),t0(),rg(),ib(`ngModel`,i.quantity),t0(),rg(2),ib(`ngModel`,i.state),jE(`p-options`,i.statesOptions),t0(),rg(),ib(`ngModel`,i.icms),t0(),rg(),ib(`ngModel`,i.liquid),t0(),rg(),ib(`ngModel`,i.total),t0(),rg(2),jE(`p-disabled`,p.invalid),rg(),jE(`p-disabled`,p.invalid)}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,doe,moe],encapsulation:2,changeDetection:1})}return l})();var he=l=>({"docs-sample-code-tabs":l});var re=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-calculate-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Number - Calculate`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-number-calculate/sample-po-number-calculate.component.html`),wg(),jc(13,`pre`,7),iO(14,`<h3>Calculate Tax</h3>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-6" name="price" [(ngModel)]="price" p-label="Price" p-required> </po-number>

    <po-number class="po-md-6" name="quantity" [(ngModel)]="quantity" p-label="Quantity" p-required> </po-number>
  </div>

  <div>
    <po-select
      class="po-md-6 po-lg-3"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      p-required
      p-sort
      [p-options]="statesOptions"
      (p-change)="loadICMS()"
    >
    </po-select>

    <po-number class="po-md-6 po-lg-3" name="icms" [(ngModel)]="icms" p-label="ICMS %" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="liquid" [(ngModel)]="liquid" p-label="Liquid" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="total" [(ngModel)]="total" p-label="Total" p-disabled> </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Calculate" [p-disabled]="f.invalid" (p-click)="calculate()"> </po-button>

    <po-button class="po-md-3" p-label="Clean" [p-disabled]="f.invalid" (p-click)="f.reset()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-number-calculate/sample-po-number-calculate.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-calculate',
  templateUrl: './sample-po-number-calculate.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberCalculateComponent {
  icms: number;
  liquid: number;
  price: number;
  quantity: number;
  state: number;
  total: number;

  public readonly statesOptions: Array<PoSelectOption> = [
    { value: 18, label: 'S\xE3o Paulo' },
    { value: 17, label: 'Alagoas' },
    { value: 15, label: 'Cear\xE1' }
  ];

  calculate() {
    const realPrice = this.price * this.quantity;
    this.liquid = realPrice;
    this.total = realPrice + realPrice * (this.state / 100);
  }

  loadICMS() {
    this.icms = this.state;
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-number-calculate`),wg(),nu(23,`hr`)),r&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,he,i.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,le],encapsulation:2,changeDetection:1})}return l})();var me=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Zn({type:l,selectors:[[`sample-po-number-doc`]],standalone:!1,decls:1434,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoNumberComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),wg(),jc(24,`p`),iO(25,`Importante:`),wg(),jc(26,`ul`)(27,`li`),iO(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),wg()(),jc(29,`h4`),iO(30,`Tokens customizáveis`),wg(),jc(31,`p`),iO(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),nu(33,`br`),iO(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),jc(35,`code`),iO(36,`.po-input`),wg()(),jc(37,`blockquote`)(38,`p`),iO(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),jc(40,`a`,6),iO(41,`Grid System`),wg(),iO(42,`.`),wg()(),jc(43,`blockquote`)(44,`p`),iO(45,`Para maiores informações, acesse o guia `),jc(46,`a`,7),iO(47,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(48,`.`),wg()(),jc(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),iO(53,`Propriedade`),wg(),jc(54,`th`),iO(55,`Descrição`),wg(),jc(56,`th`),iO(57,`Valor Padrão`),wg()()(),jc(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),iO(62,`Default Values`),wg()(),nu(63,`td`)(64,`td`),wg(),jc(65,`tr`)(66,`td`)(67,`code`),iO(68,`--font-family`),wg()(),jc(69,`td`),iO(70,`Família tipográfica usada`),wg(),jc(71,`td`)(72,`code`),iO(73,`var(--font-family-theme)`),wg()()(),jc(74,`tr`)(75,`td`)(76,`code`),iO(77,`--font-size`),wg()(),jc(78,`td`),iO(79,`Tamanho da fonte`),wg(),jc(80,`td`)(81,`code`),iO(82,`var(--font-size-default)`),wg()()(),jc(83,`tr`)(84,`td`)(85,`code`),iO(86,`--text-color-placeholder`),wg()(),jc(87,`td`),iO(88,`Cor do texto placeholder`),wg(),jc(89,`td`)(90,`code`),iO(91,`var(--color-neutral-light-30)`),wg()()(),jc(92,`tr`)(93,`td`)(94,`code`),iO(95,`--color`),wg()(),jc(96,`td`),iO(97,`Cor pincipal do input`),wg(),jc(98,`td`)(99,`code`),iO(100,`var(--color-neutral-dark-70)`),wg()()(),jc(101,`tr`)(102,`td`)(103,`code`),iO(104,`--background`),wg()(),jc(105,`td`),iO(106,`Cor de background`),wg(),jc(107,`td`)(108,`code`),iO(109,`var(--color-neutral-light-05)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`code`),iO(113,`--padding`),wg()(),jc(114,`td`),iO(115,`Preenchimento`),wg(),jc(116,`td`)(117,`code`),iO(118,`0 0.5rem`),wg()()(),jc(119,`tr`)(120,`td`)(121,`code`),iO(122,`--text-color`),wg()(),jc(123,`td`),iO(124,`Cor do texto`),wg(),jc(125,`td`)(126,`code`),iO(127,`var(--color-neutral-dark-90)`),wg()()(),jc(128,`tr`)(129,`td`)(130,`code`),iO(131,`--field-container-title-justify`),wg()(),jc(132,`td`),iO(133,`Alinhamento horizontal do título (`),jc(134,`code`),iO(135,`justify-content`),wg(),iO(136,`)`),wg(),jc(137,`td`)(138,`code`),iO(139,`space-between`),wg()()(),jc(140,`tr`)(141,`td`)(142,`code`),iO(143,`--field-container-title-flex`),wg()(),jc(144,`td`),iO(145,`Flex do título (`),jc(146,`code`),iO(147,`flex`),wg(),iO(148,`)`),wg(),jc(149,`td`)(150,`code`),iO(151,`1 auto`),wg()()(),jc(152,`tr`)(153,`td`)(154,`strong`),iO(155,`Hover`),wg()(),nu(156,`td`)(157,`td`),wg(),jc(158,`tr`)(159,`td`)(160,`code`),iO(161,`--color-hover`),wg()(),jc(162,`td`),iO(163,`Cor principal no estado hover`),wg(),jc(164,`td`)(165,`code`),iO(166,`var(--color-brand-01-dark)`),wg()()(),jc(167,`tr`)(168,`td`)(169,`code`),iO(170,`--background-hover`),wg()(),jc(171,`td`),iO(172,`Cor de background no estado hover`),wg(),jc(173,`td`)(174,`code`),iO(175,`var(--color-brand-01-lightest)`),wg()()(),jc(176,`tr`)(177,`td`)(178,`strong`),iO(179,`Focused`),wg()(),nu(180,`td`)(181,`td`),wg(),jc(182,`tr`)(183,`td`)(184,`code`),iO(185,`--color-focused`),wg()(),jc(186,`td`),iO(187,`Cor principal no estado de focus`),wg(),jc(188,`td`)(189,`code`),iO(190,`var(--color-action-default)`),wg()()(),jc(191,`tr`)(192,`td`)(193,`code`),iO(194,`--outline-color-focused`),wg()(),jc(195,`td`),iO(196,`Cor do outline do estado de focus`),wg(),jc(197,`td`)(198,`code`),iO(199,`var(--color-action-focus)`),wg()()(),jc(200,`tr`)(201,`td`)(202,`strong`),iO(203,`Disabled`),wg()(),nu(204,`td`)(205,`td`),wg(),jc(206,`tr`)(207,`td`)(208,`code`),iO(209,`--color-disabled`),wg()(),jc(210,`td`),iO(211,`Cor principal no estado disabled`),wg(),jc(212,`td`)(213,`code`),iO(214,`var(--color-neutral-light-30)`),wg()()(),jc(215,`tr`)(216,`td`)(217,`code`),iO(218,`--background-disabled`),wg()(),jc(219,`td`),iO(220,`Cor de background no estado disabled`),wg(),jc(221,`td`)(222,`code`),iO(223,`var(--color-neutral-light-20)`),wg()()(),jc(224,`tr`)(225,`td`)(226,`code`),iO(227,`--text-color-disabled`),wg()(),jc(228,`td`),iO(229,`Cor do texto no estado disabled`),wg(),jc(230,`td`)(231,`code`),iO(232,`var(--color-neutral-dark-70)`),wg()()()()(),jc(233,`p`),nu(234,`br`),iO(235,` O `),jc(236,`code`),iO(237,`po-number`),wg(),iO(238,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),wg()(),jc(239,`div`,8)(240,`h4`,9),iO(241,`Seletor`),wg(),jc(242,`pre`,10),iO(243,`<po-number
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
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
    p-step="string"
    p-upper-case="boolean" >
</po-number>
`),wg()(),jc(244,`h4`,11),iO(245,`Propriedades`),wg(),jc(246,`table`,12)(247,`tr`,13)(248,`th`,14),iO(249,`Nome`),wg(),jc(250,`th`,14),iO(251,`Tipo`),wg(),jc(252,`th`,14),iO(253,`Padrão`),wg(),jc(254,`th`,14),iO(255,`Descrição`),wg()(),jc(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),iO(260,` (p-additional-help)`),nu(261,`br`),wg()(),jc(262,`div`,19),iO(263,`Deprecated`),wg()(),jc(264,`td`,20)(265,`code`,21),iO(266,`EventEmitter`),wg()(),jc(267,`td`,22),iO(268,`-`),wg(),jc(269,`td`,23)(270,`em`)(271,`strong`),iO(272,`(opcional)`),wg()(),jc(273,`p`),iO(274,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(275,`blockquote`)(276,`p`),iO(277,`Essa propriedade está `),jc(278,`strong`),iO(279,`depreciada`),wg(),iO(280,` e será removida na versão `),jc(281,`code`),iO(282,`23.x.x`),wg(),iO(283,`. Recomendamos utilizar a propriedade `),jc(284,`code`),iO(285,`p-helper`),wg(),iO(286,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(287,`tr`,15)(288,`td`,16)(289,`div`,24)(290,`span`,25),iO(291,` p-additional-help-tooltip`),nu(292,`br`),wg()(),jc(293,`div`,19),iO(294,`Deprecated`),wg()(),jc(295,`td`,20)(296,`code`,26),iO(297,`string`),wg()(),jc(298,`td`,22),iO(299,`-`),wg(),jc(300,`td`,23)(301,`em`)(302,`strong`),iO(303,`(opcional)`),wg()(),jc(304,`p`),iO(305,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(306,`code`),iO(307,`po-helper`),wg(),iO(308,`.
`),jc(309,`strong`),iO(310,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(311,`blockquote`)(312,`p`),iO(313,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(314,`blockquote`)(315,`p`),iO(316,`Essa propriedade está `),jc(317,`strong`),iO(318,`depreciada`),wg(),iO(319,` e será removida na versão `),jc(320,`code`),iO(321,`23.x.x`),wg(),iO(322,`. Recomendamos utilizar a propriedade `),jc(323,`code`),iO(324,`p-helper`),wg(),iO(325,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(326,`tr`,15)(327,`td`,16)(328,`div`,24)(329,`span`,25),iO(330,` p-append-in-body`),nu(331,`br`),wg()()(),jc(332,`td`,20)(333,`code`,27),iO(334,`boolean`),wg()(),jc(335,`td`,22)(336,`p`)(337,`code`),iO(338,`false`),wg()()(),jc(339,`td`,23)(340,`em`)(341,`strong`),iO(342,`(opcional)`),wg()(),jc(343,`p`),iO(344,`Define que o popover (`),jc(345,`code`),iO(346,`p-helper`),wg(),iO(347,` e/ou `),jc(348,`code`),iO(349,`p-error-limit`),wg(),iO(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(351,`blockquote`)(352,`p`),iO(353,`Quando utilizado com `),jc(354,`code`),iO(355,`p-helper`),wg(),iO(356,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(357,`tr`,15)(358,`td`,16)(359,`div`,24)(360,`span`,25),iO(361,` p-auto-focus`),nu(362,`br`),wg()()(),jc(363,`td`,20)(364,`code`,27),iO(365,`boolean`),wg()(),jc(366,`td`,22)(367,`p`)(368,`code`),iO(369,`false`),wg()()(),jc(370,`td`,23)(371,`em`)(372,`strong`),iO(373,`(opcional)`),wg()(),jc(374,`p`),iO(375,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(376,`blockquote`)(377,`p`),iO(378,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(379,`tr`,15)(380,`td`,16)(381,`div`,17)(382,`span`,18),iO(383,` (p-blur)`),nu(384,`br`),wg()()(),jc(385,`td`,20)(386,`code`,21),iO(387,`EventEmitter`),wg()(),jc(388,`td`,22),iO(389,`-`),wg(),jc(390,`td`,23)(391,`em`)(392,`strong`),iO(393,`(opcional)`),wg()(),jc(394,`p`),iO(395,`Evento disparado ao sair do campo.`),wg()()(),jc(396,`tr`,15)(397,`td`,16)(398,`div`,17)(399,`span`,18),iO(400,` (p-change)`),nu(401,`br`),wg()()(),jc(402,`td`,20)(403,`code`,21),iO(404,`EventEmitter`),wg()(),jc(405,`td`,22),iO(406,`-`),wg(),jc(407,`td`,23)(408,`em`)(409,`strong`),iO(410,`(opcional)`),wg()(),jc(411,`p`),iO(412,`Evento disparado ao alterar valor e deixar o campo.`),wg()()(),jc(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),iO(417,` (p-change-model)`),nu(418,`br`),wg()()(),jc(419,`td`,20)(420,`code`,21),iO(421,`EventEmitter`),wg()(),jc(422,`td`,22),iO(423,`-`),wg(),jc(424,`td`,23)(425,`em`)(426,`strong`),iO(427,`(opcional)`),wg()(),jc(428,`p`),iO(429,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(430,`code`),iO(431,`setValue`),wg(),iO(432,`, `),jc(433,`code`),iO(434,`patchValue`),wg(),iO(435,`, carregamento assíncrono).`),wg(),jc(436,`p`),iO(437,`Diferentemente do `),jc(438,`code`),iO(439,`p-change`),wg(),iO(440,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(441,`code`),iO(442,`p-change-model`),wg(),iO(443,` cobre todos os cenários de alteração de valor.`),wg(),jc(444,`p`),iO(445,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(446,`tr`,15)(447,`td`,16)(448,`div`,24)(449,`span`,25),iO(450,`p-clean`),nu(451,`br`),wg()()(),jc(452,`td`,20)(453,`code`,27),iO(454,`boolean`),wg()(),jc(455,`td`,22),iO(456,`-`),wg(),jc(457,`td`,23)(458,`em`)(459,`strong`),iO(460,`(opcional)`),wg()(),jc(461,`p`),iO(462,`Se verdadeiro, o campo receberá um botão para ser limpo.`),wg()()(),jc(463,`tr`,15)(464,`td`,16)(465,`div`,24)(466,`span`,25),iO(467,` p-compact-label`),nu(468,`br`),wg()()(),jc(469,`td`,20)(470,`code`,27),iO(471,`boolean`),wg()(),jc(472,`td`,22)(473,`p`)(474,`code`),iO(475,`false`),wg()()(),jc(476,`td`,23)(477,`em`)(478,`strong`),iO(479,`(opcional)`),wg()(),jc(480,`p`),iO(481,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(482,`p`),iO(483,`Quando habilitado (`),jc(484,`code`),iO(485,`true`),wg(),iO(486,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(487,`ul`)(488,`li`)(489,`code`),iO(490,`po-label`),wg()(),jc(491,`li`)(492,`code`),iO(493,`p-requirement (showRequired)`),wg()(),jc(494,`li`)(495,`code`),iO(496,`po-helper`),wg()()(),jc(497,`p`),iO(498,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(499,`p`),iO(500,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(501,`ul`)(502,`li`)(503,`code`),iO(504,`--field-container-title-justify`),wg()(),jc(505,`li`)(506,`code`),iO(507,`--field-container-title-flex`),wg()()(),jc(508,`p`),iO(509,`Exemplo:`),wg(),jc(510,`pre`)(511,`code`),iO(512,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(513,`p`),iO(514,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(515,`tr`,15)(516,`td`,16)(517,`div`,24)(518,`span`,25),iO(519,`p-disabled`),nu(520,`br`),wg()()(),jc(521,`td`,20)(522,`code`,27),iO(523,`boolean`),wg()(),jc(524,`td`,22)(525,`p`)(526,`code`),iO(527,`false`),wg()()(),jc(528,`td`,23)(529,`em`)(530,`strong`),iO(531,`(opcional)`),wg()(),jc(532,`p`),iO(533,`Se verdadeiro, desabilita o campo.`),wg()()(),jc(534,`tr`,15)(535,`td`,16)(536,`div`,24)(537,`span`,25),iO(538,` p-emit-all-changes`),nu(539,`br`),wg()()(),jc(540,`td`,20)(541,`code`,27),iO(542,`boolean`),wg()(),jc(543,`td`,22)(544,`p`)(545,`code`),iO(546,`false`),wg()()(),jc(547,`td`,23)(548,`em`)(549,`strong`),iO(550,`(opcional)`),wg()(),jc(551,`p`),iO(552,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),wg()()(),jc(553,`tr`,15)(554,`td`,16)(555,`div`,17)(556,`span`,18),iO(557,` (p-enter)`),nu(558,`br`),wg()()(),jc(559,`td`,20)(560,`code`,21),iO(561,`EventEmitter`),wg()(),jc(562,`td`,22),iO(563,`-`),wg(),jc(564,`td`,23)(565,`em`)(566,`strong`),iO(567,`(opcional)`),wg()(),jc(568,`p`),iO(569,`Evento disparado ao entrar do campo.`),wg()()(),jc(570,`tr`,15)(571,`td`,16)(572,`div`,24)(573,`span`,25),iO(574,` p-error-async-properties`),nu(575,`br`),wg()()(),jc(576,`td`,20)(577,`code`,28),iO(578,`ErrorAsyncProperties`),wg()(),jc(579,`td`,22),iO(580,`-`),wg(),jc(581,`td`,23)(582,`em`)(583,`strong`),iO(584,`(opcional)`),wg()(),jc(585,`p`),iO(586,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),jc(587,`code`),iO(588,`Reactive Forms`),wg(),iO(589,`. Em formulários reativos, pode-se utilizar o próprio `),jc(590,`code`),iO(591,`asyncValidators`),wg(),iO(592,`.`),wg()()(),jc(593,`tr`,15)(594,`td`,16)(595,`div`,24)(596,`span`,25),iO(597,` p-error-limit`),nu(598,`br`),wg()()(),jc(599,`td`,20)(600,`code`,27),iO(601,`boolean`),wg()(),jc(602,`td`,22)(603,`p`)(604,`code`),iO(605,`false`),wg()()(),jc(606,`td`,23)(607,`em`)(608,`strong`),iO(609,`(opcional)`),wg()(),jc(610,`p`),iO(611,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(612,`blockquote`)(613,`p`),iO(614,`Caso essa propriedade seja definida como `),jc(615,`code`),iO(616,`true`),wg(),iO(617,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(618,`tr`,15)(619,`td`,16)(620,`div`,24)(621,`span`,25),iO(622,` p-error-pattern`),nu(623,`br`),wg()()(),jc(624,`td`,20)(625,`code`,26),iO(626,`string`),wg()(),jc(627,`td`,22),iO(628,`-`),wg(),jc(629,`td`,23)(630,`em`)(631,`strong`),iO(632,`(opcional)`),wg()(),jc(633,`p`),iO(634,`Mensagem que será apresentada quando o `),jc(635,`code`),iO(636,`pattern`),wg(),iO(637,` ou a máscara não for satisfeita.`),wg(),jc(638,`blockquote`)(639,`p`),iO(640,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),jc(641,`code`),iO(642,`p-required-field-error-message`),wg(),iO(643,` em conjunto.`),wg()()()(),jc(644,`tr`,15)(645,`td`,16)(646,`div`,24)(647,`span`,25),iO(648,` p-help`),nu(649,`br`),wg()()(),jc(650,`td`,20)(651,`code`,26),iO(652,`string`),wg()(),jc(653,`td`,22),iO(654,`-`),wg(),jc(655,`td`,23)(656,`em`)(657,`strong`),iO(658,`(opcional)`),wg()(),jc(659,`p`),iO(660,`Texto de apoio do campo.`),wg()()(),jc(661,`tr`,15)(662,`td`,16)(663,`div`,24)(664,`span`,25),iO(665,` p-icon`),nu(666,`br`),wg()()(),jc(667,`td`,20)(668,`code`,26),iO(669,`string `),wg(),jc(670,`code`,29),iO(671,` TemplateRef<void>`),wg()(),jc(672,`td`,22),iO(673,`-`),wg(),jc(674,`td`,23)(675,`em`)(676,`strong`),iO(677,`(opcional)`),wg()(),jc(678,`p`),iO(679,`Define o ícone que será exibido no início do campo.`),wg(),jc(680,`p`),iO(681,`É possível usar qualquer um dos ícones da `),jc(682,`a`,30),iO(683,`Biblioteca de ícones`),wg(),iO(684,`. conforme exemplo abaixo:`),wg(),jc(685,`pre`)(686,`code`),iO(687,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),wg()(),jc(688,`p`),iO(689,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(690,`em`),iO(691,`Font Awesome`),wg(),iO(692,`, da seguinte forma:`),wg(),jc(693,`pre`)(694,`code`),iO(695,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),wg()(),jc(696,`p`),iO(697,`Outra opção seria a customização do ícone através do `),jc(698,`code`),iO(699,`TemplateRef`),wg(),iO(700,`, conforme exemplo abaixo:`),wg(),jc(701,`pre`)(702,`code`),iO(703,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(704,`blockquote`)(705,`p`),iO(706,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(707,`code`),iO(708,`font-size: inherit`),wg(),iO(709,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(710,`tr`,15)(711,`td`,16)(712,`div`,17)(713,`span`,18),iO(714,` (p-keydown)`),nu(715,`br`),wg()()(),jc(716,`td`,20)(717,`code`,21),iO(718,`EventEmitter`),wg()(),jc(719,`td`,22),iO(720,`-`),wg(),jc(721,`td`,23)(722,`em`)(723,`strong`),iO(724,`(opcional)`),wg()(),jc(725,`p`),iO(726,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(727,`code`),iO(728,`KeyboardEvent`),wg(),iO(729,` com informações sobre a tecla.`),wg()()(),jc(730,`tr`,15)(731,`td`,16)(732,`div`,24)(733,`span`,25),iO(734,` p-label`),nu(735,`br`),wg()()(),jc(736,`td`,20)(737,`code`,26),iO(738,`string`),wg()(),jc(739,`td`,22),iO(740,`-`),wg(),jc(741,`td`,23)(742,`em`)(743,`strong`),iO(744,`(opcional)`),wg()(),jc(745,`p`),iO(746,`Rótulo do campo.`),wg()()(),jc(747,`tr`,15)(748,`td`,16)(749,`div`,24)(750,`span`,25),iO(751,` p-label-text-wrap`),nu(752,`br`),wg()()(),jc(753,`td`,20)(754,`code`,27),iO(755,`boolean`),wg()(),jc(756,`td`,22)(757,`p`)(758,`code`),iO(759,`false`),wg()()(),jc(760,`td`,23)(761,`em`)(762,`strong`),iO(763,`(opcional)`),wg()(),jc(764,`p`),iO(765,`Habilita a quebra automática do texto da propriedade `),jc(766,`code`),iO(767,`p-label`),wg(),iO(768,`. Quando `),jc(769,`code`),iO(770,`p-label-text-wrap`),wg(),iO(771,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(772,`tr`,15)(773,`td`,16)(774,`div`,24)(775,`span`,25),iO(776,` p-loading`),nu(777,`br`),wg()()(),jc(778,`td`,20)(779,`code`,27),iO(780,`boolean`),wg()(),jc(781,`td`,22)(782,`p`)(783,`code`),iO(784,`false`),wg()()(),jc(785,`td`,23)(786,`em`)(787,`strong`),iO(788,`(opcional)`),wg()(),jc(789,`p`),iO(790,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),iO(795,`p-mask`),nu(796,`br`),wg()()(),jc(797,`td`,20)(798,`code`,26),iO(799,`string`),wg()(),jc(800,`td`,22),iO(801,`-`),wg(),jc(802,`td`,23)(803,`em`)(804,`strong`),iO(805,`(opcional)`),wg()(),jc(806,`p`),iO(807,`Indica uma máscara para o campo, porém é incompatível com o `),jc(808,`code`),iO(809,`po-number`),wg(),iO(810,`.`),wg(),jc(811,`blockquote`)(812,`p`)(813,`strong`),iO(814,`Componentes compatíveis:`),wg(),jc(815,`code`),iO(816,`po-input`),wg(),iO(817,`,`),jc(818,`code`),iO(819,`po-decimal`),wg(),iO(820,`.`),wg()()()(),jc(821,`tr`,15)(822,`td`,16)(823,`div`,24)(824,`span`,25),iO(825,`p-mask-format-model`),nu(826,`br`),wg()()(),jc(827,`td`,20)(828,`code`,27),iO(829,`boolean`),wg()(),jc(830,`td`,22)(831,`p`)(832,`code`),iO(833,`false`),wg()()(),jc(834,`td`,23)(835,`em`)(836,`strong`),iO(837,`(opcional)`),wg()(),jc(838,`p`),iO(839,`Indica se o `),jc(840,`code`),iO(841,`model`),wg(),iO(842,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),wg()()(),jc(843,`tr`,15)(844,`td`,16)(845,`div`,24)(846,`span`,25),iO(847,` p-mask-no-length-validation`),nu(848,`br`),wg()()(),jc(849,`td`,20)(850,`code`,27),iO(851,`boolean`),wg()(),jc(852,`td`,22)(853,`p`)(854,`code`),iO(855,`false`),wg()()(),jc(856,`td`,23)(857,`p`),iO(858,`Controla como o componente aplica as validações de comprimento mínimo (`),jc(859,`code`),iO(860,`minLength`),wg(),iO(861,`) e máximo (`),jc(862,`code`),iO(863,`maxLength`),wg(),iO(864,`) quando há uma máscara (`),jc(865,`code`),iO(866,`p-mask`),wg(),iO(867,`) definida.`),wg(),jc(868,`ul`)(869,`li`),iO(870,`Quando `),jc(871,`code`),iO(872,`true`),wg(),iO(873,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),wg(),jc(874,`li`),iO(875,`Quando `),jc(876,`code`),iO(877,`false`),wg(),iO(878,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),wg()(),jc(879,`blockquote`)(880,`p`),iO(881,`Esta propriedade é ignorada quando utilizada em conjunto com `),jc(882,`code`),iO(883,`p-mask-format-model`),wg(),iO(884,`.`),wg()(),jc(885,`p`),iO(886,`Exemplo:`),wg(),jc(887,`pre`)(888,`code`),iO(889,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),wg()(),jc(890,`ul`)(891,`li`),iO(892,`Entrada: `),jc(893,`code`),iO(894,`123-456`),wg(),iO(895,` → Validação será aplicada somente aos números, ignorando o caractere especial `),jc(896,`code`),iO(897,`-`),wg(),iO(898,`.`),wg()()()(),jc(899,`tr`,15)(900,`td`,16)(901,`div`,24)(902,`span`,25),iO(903,`p-max`),nu(904,`br`),wg()()(),jc(905,`td`,20)(906,`code`,31),iO(907,`number`),wg()(),jc(908,`td`,22),iO(909,`-`),wg(),jc(910,`td`,23)(911,`em`)(912,`strong`),iO(913,`(opcional)`),wg()(),jc(914,`p`),iO(915,`Valor máximo.`),wg(),jc(916,`blockquote`)(917,`p`),iO(918,`Quando o valor máximo for um número com decimais aconselha-se utilizar junto da propriedade `),jc(919,`code`),iO(920,`p-step`),wg(),iO(921,` também passando a ela um valor decimal.`),wg()()()(),jc(922,`tr`,15)(923,`td`,16)(924,`div`,24)(925,`span`,25),iO(926,` p-maxlength`),nu(927,`br`),wg()()(),jc(928,`td`,20)(929,`code`,31),iO(930,`number`),wg()(),jc(931,`td`,22),iO(932,`-`),wg(),jc(933,`td`,23)(934,`em`)(935,`strong`),iO(936,`(opcional)`),wg()(),jc(937,`p`),iO(938,`Indica a quantidade máxima de caracteres que o campo aceita.`),wg()()(),jc(939,`tr`,15)(940,`td`,16)(941,`div`,24)(942,`span`,25),iO(943,`p-min`),nu(944,`br`),wg()()(),jc(945,`td`,20)(946,`code`,31),iO(947,`number`),wg()(),jc(948,`td`,22),iO(949,`-`),wg(),jc(950,`td`,23)(951,`em`)(952,`strong`),iO(953,`(opcional)`),wg()(),jc(954,`p`),iO(955,`Valor mínimo.`),wg(),jc(956,`blockquote`)(957,`p`),iO(958,`Quando o valor mínimo for um número com decimais aconselha-se utilizar junto da propriedade `),jc(959,`code`),iO(960,`p-step`),wg(),iO(961,` também passando a ela um valor decimal.`),wg()()()(),jc(962,`tr`,15)(963,`td`,16)(964,`div`,24)(965,`span`,25),iO(966,` p-minlength`),nu(967,`br`),wg()()(),jc(968,`td`,20)(969,`code`,31),iO(970,`number`),wg()(),jc(971,`td`,22),iO(972,`-`),wg(),jc(973,`td`,23)(974,`em`)(975,`strong`),iO(976,`(opcional)`),wg()(),jc(977,`p`),iO(978,`Indica a quantidade mínima de caracteres que o campo aceita.`),wg()()(),jc(979,`tr`,15)(980,`td`,16)(981,`div`,24)(982,`span`,25),iO(983,` name`),nu(984,`br`),wg()()(),jc(985,`td`,20)(986,`code`,26),iO(987,`string`),wg()(),jc(988,`td`,22),iO(989,`-`),wg(),jc(990,`td`,23)(991,`p`),iO(992,`Nome e identificador do campo.`),wg()()(),jc(993,`tr`,15)(994,`td`,16)(995,`div`,24)(996,`span`,25),iO(997,` p-no-autocomplete`),nu(998,`br`),wg()()(),jc(999,`td`,20)(1e3,`code`,27),iO(1001,`boolean`),wg()(),jc(1002,`td`,22)(1003,`p`)(1004,`code`),iO(1005,`false`),wg()()(),jc(1006,`td`,23)(1007,`em`)(1008,`strong`),iO(1009,`(opcional)`),wg()(),jc(1010,`p`),iO(1011,`Define a propriedade nativa `),jc(1012,`code`),iO(1013,`autocomplete`),wg(),iO(1014,` do campo como `),jc(1015,`code`),iO(1016,`off`),wg(),iO(1017,`.`),wg(),jc(1018,`blockquote`)(1019,`p`),iO(1020,`No componente `),jc(1021,`code`),iO(1022,`po-password`),wg(),iO(1023,` será definido como `),jc(1024,`code`),iO(1025,`new-password`),wg(),iO(1026,`.`),wg()(),jc(1027,`p`),iO(1028,`Nos componentes `),jc(1029,`code`),iO(1030,`po-password`),wg(),iO(1031,` e `),jc(1032,`code`),iO(1033,`po-login`),wg(),iO(1034,` o valor padrão será `),jc(1035,`code`),iO(1036,`true`),wg(),iO(1037,`.`),wg()()(),jc(1038,`tr`,15)(1039,`td`,16)(1040,`div`,24)(1041,`span`,25),iO(1042,` p-optional`),nu(1043,`br`),wg()()(),jc(1044,`td`,20)(1045,`code`,27),iO(1046,`boolean`),wg()(),jc(1047,`td`,22)(1048,`p`)(1049,`code`),iO(1050,`false`),wg()()(),jc(1051,`td`,23)(1052,`em`)(1053,`strong`),iO(1054,`(opcional)`),wg()(),jc(1055,`p`),iO(1056,`Define se a indicação de campo opcional será exibida.`),wg(),jc(1057,`blockquote`)(1058,`p`),iO(1059,`Não será exibida a indicação se:`),wg()(),jc(1060,`ul`)(1061,`li`),iO(1062,`O campo conter `),jc(1063,`code`),iO(1064,`p-required`),wg(),iO(1065,`;`),wg(),jc(1066,`li`),iO(1067,`Não possuir `),jc(1068,`code`),iO(1069,`p-help`),wg(),iO(1070,` e/ou `),jc(1071,`code`),iO(1072,`p-label`),wg(),iO(1073,`.`),wg()()()(),jc(1074,`tr`,15)(1075,`td`,16)(1076,`div`,24)(1077,`span`,25),iO(1078,`p-pattern`),nu(1079,`br`),wg()()(),jc(1080,`td`,20)(1081,`code`,26),iO(1082,`string`),wg()(),jc(1083,`td`,22),iO(1084,`-`),wg(),jc(1085,`td`,23)(1086,`em`)(1087,`strong`),iO(1088,`(opcional)`),wg()(),jc(1089,`p`),iO(1090,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),jc(1091,`code`),iO(1092,`(p-mask)`),wg(),iO(1093,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),wg()()(),jc(1094,`tr`,15)(1095,`td`,16)(1096,`div`,24)(1097,`span`,25),iO(1098,` p-placeholder`),nu(1099,`br`),wg()()(),jc(1100,`td`,20)(1101,`code`,26),iO(1102,`string`),wg()(),jc(1103,`td`,22)(1104,`p`),iO(1105,`''`),wg()(),jc(1106,`td`,23)(1107,`em`)(1108,`strong`),iO(1109,`(opcional)`),wg()(),jc(1110,`p`),iO(1111,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),wg()()(),jc(1112,`tr`,15)(1113,`td`,16)(1114,`div`,24)(1115,`span`,25),iO(1116,` p-helper`),nu(1117,`br`),wg()()(),jc(1118,`td`,20)(1119,`code`,32),iO(1120,`PoHelperOptions `),wg(),jc(1121,`code`,26),iO(1122,` string`),wg()(),jc(1123,`td`,22),iO(1124,`-`),wg(),jc(1125,`td`,23)(1126,`em`)(1127,`strong`),iO(1128,`(opcional)`),wg()(),jc(1129,`p`),iO(1130,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(1131,`code`),iO(1132,`p-label`),wg(),iO(1133,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(1134,`code`),iO(1135,`p-label`),wg(),iO(1136,`.`),wg(),jc(1137,`blockquote`)(1138,`p`),iO(1139,`Para mais informações acesse: `),jc(1140,`a`,33),iO(1141,`https://po-ui.io/documentation/po-helper`),wg(),iO(1142,`.`),wg()(),jc(1143,`blockquote`)(1144,`p`),iO(1145,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(1146,`code`),iO(1147,`p-additional-help-tooltip`),wg(),iO(1148,` e `),jc(1149,`code`),iO(1150,`p-additional-help`),wg(),iO(1151,`) será ignorado.`),wg()()()(),jc(1152,`tr`,15)(1153,`td`,16)(1154,`div`,24)(1155,`span`,25),iO(1156,`p-readonly`),nu(1157,`br`),wg()()(),jc(1158,`td`,20)(1159,`code`,27),iO(1160,`boolean`),wg()(),jc(1161,`td`,22),iO(1162,`-`),wg(),jc(1163,`td`,23)(1164,`em`)(1165,`strong`),iO(1166,`(opcional)`),wg()(),jc(1167,`p`),iO(1168,`Indica que o campo será somente leitura.`),wg()()(),jc(1169,`tr`,15)(1170,`td`,16)(1171,`div`,24)(1172,`span`,25),iO(1173,`p-required`),nu(1174,`br`),wg()()(),jc(1175,`td`,20)(1176,`code`,27),iO(1177,`boolean`),wg()(),jc(1178,`td`,22)(1179,`p`)(1180,`code`),iO(1181,`false`),wg()()(),jc(1182,`td`,23)(1183,`em`)(1184,`strong`),iO(1185,`(opcional)`),wg()(),jc(1186,`p`),iO(1187,`Define que o campo será obrigatório.`),wg(),jc(1188,`blockquote`)(1189,`p`),iO(1190,`Esta propriedade é desconsiderada quando o input está desabilitado `),jc(1191,`code`),iO(1192,`(p-disabled)`),wg(),iO(1193,`.`),wg()()()(),jc(1194,`tr`,15)(1195,`td`,16)(1196,`div`,24)(1197,`span`,25),iO(1198,` p-required-field-error-message`),nu(1199,`br`),wg()()(),jc(1200,`td`,20)(1201,`code`,27),iO(1202,`boolean`),wg()(),jc(1203,`td`,22)(1204,`p`)(1205,`code`),iO(1206,`false`),wg()()(),jc(1207,`td`,23)(1208,`em`)(1209,`strong`),iO(1210,`(opcional)`),wg()(),jc(1211,`p`),iO(1212,`Exibe a mensagem setada na propriedade `),jc(1213,`code`),iO(1214,`p-error-pattern`),wg(),iO(1215,` se o campo estiver vazio e for requerido.`),wg(),jc(1216,`blockquote`)(1217,`p`),iO(1218,`Necessário que a propriedade `),jc(1219,`code`),iO(1220,`p-required`),wg(),iO(1221,` esteja habilitada.`),wg()()()(),jc(1222,`tr`,15)(1223,`td`,16)(1224,`div`,24)(1225,`span`,25),iO(1226,` p-show-required`),nu(1227,`br`),wg()()(),jc(1228,`td`,20)(1229,`code`,27),iO(1230,`boolean`),wg()(),jc(1231,`td`,22),iO(1232,`-`),wg(),jc(1233,`td`,23)(1234,`p`),iO(1235,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(1236,`blockquote`)(1237,`p`),iO(1238,`Não será exibida a indicação se:`),wg()(),jc(1239,`ul`)(1240,`li`),iO(1241,`Não possuir `),jc(1242,`code`),iO(1243,`p-help`),wg(),iO(1244,` e/ou `),jc(1245,`code`),iO(1246,`p-label`),wg(),iO(1247,`.`),wg()()()(),jc(1248,`tr`,15)(1249,`td`,16)(1250,`div`,24)(1251,`span`,25),iO(1252,` p-size`),nu(1253,`br`),wg()()(),jc(1254,`td`,20)(1255,`code`,26),iO(1256,`string`),wg()(),jc(1257,`td`,22)(1258,`p`)(1259,`code`),iO(1260,`medium`),wg()()(),jc(1261,`td`,23)(1262,`em`)(1263,`strong`),iO(1264,`(opcional)`),wg()(),jc(1265,`p`),iO(1266,`Define o tamanho do componente:`),wg(),jc(1267,`ul`)(1268,`li`)(1269,`code`),iO(1270,`small`),wg(),iO(1271,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(1272,`li`)(1273,`code`),iO(1274,`medium`),wg(),iO(1275,`: altura do input como 44px.`),wg()(),jc(1276,`blockquote`)(1277,`p`),iO(1278,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(1279,`code`),iO(1280,`medium`),wg(),iO(1281,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(1282,`a`,34),iO(1283,`po-theme`),wg(),iO(1284,`.`),wg()()()(),jc(1285,`tr`,15)(1286,`td`,16)(1287,`div`,24)(1288,`span`,25),iO(1289,` p-step`),nu(1290,`br`),wg()()(),jc(1291,`td`,20)(1292,`code`,26),iO(1293,`string`),wg()(),jc(1294,`td`,22)(1295,`p`),iO(1296,`1`),wg()(),jc(1297,`td`,23)(1298,`em`)(1299,`strong`),iO(1300,`(opcional)`),wg()(),jc(1301,`p`),iO(1302,`Intervalo.`),wg()()(),jc(1303,`tr`,15)(1304,`td`,16)(1305,`div`,24)(1306,`span`,25),iO(1307,` p-upper-case`),nu(1308,`br`),wg()()(),jc(1309,`td`,20)(1310,`code`,27),iO(1311,`boolean`),wg()(),jc(1312,`td`,22),iO(1313,`-`),wg(),jc(1314,`td`,23)(1315,`p`),iO(1316,`Converte o conteúdo do campo em maiúsulo automaticamente.`),wg()()()(),jc(1317,`h3`,11),iO(1318,`Métodos`),wg(),jc(1319,`table`,35)(1320,`tr`,15)(1321,`th`,36)(1322,`div`,24)(1323,`h4`)(1324,`span`,25),iO(1325,` showAdditionalHelp `),wg()()()()(),jc(1326,`tr`,23)(1327,`td`,23)(1328,`p`),iO(1329,`Método que exibe `),jc(1330,`code`),iO(1331,`p-helper`),wg(),iO(1332,` ou executa a ação definida em `),jc(1333,`code`),iO(1334,`p-helper{eventOnClick}`),wg(),iO(1335,` ou em `),jc(1336,`code`),iO(1337,`p-additionalHelp`),wg(),iO(1338,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(1339,`code`),iO(1340,`p-keydown`),wg(),iO(1341,`.`),wg(),jc(1342,`blockquote`)(1343,`p`),iO(1344,`Exibe ou oculta o conteúdo do componente `),jc(1345,`code`),iO(1346,`po-helper`),wg(),iO(1347,` quando o componente estiver com foco.`),wg()(),jc(1348,`pre`)(1349,`code`),iO(1350,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),wg()(),jc(1351,`pre`)(1352,`code`),iO(1353,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1354,`br`),jc(1355,`table`,35)(1356,`tr`,15)(1357,`th`,36)(1358,`div`,24)(1359,`h4`)(1360,`span`,25),iO(1361,` focus `),wg()()()()(),jc(1362,`tr`,23)(1363,`td`,23)(1364,`p`),iO(1365,`Função que atribui foco ao componente.`),wg(),jc(1366,`p`),iO(1367,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(1368,`pre`)(1369,`code`),iO(1370,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),wg()()()()(),nu(1371,`br`),jc(1372,`h3`),iO(1373,`Interfaces`),wg(),jc(1374,`h4`,37)(1375,`code`,5),iO(1376,`ErrorAsyncProperties`),wg()(),jc(1377,`div`,2)(1378,`p`),iO(1379,`Interface para realizar uma validação assíncrona no componente.`),wg()(),jc(1380,`h4`,11),iO(1381,`Propriedades`),wg(),jc(1382,`table`,12)(1383,`tr`,13)(1384,`th`,14),iO(1385,`Nome`),wg(),jc(1386,`th`,14),iO(1387,`Tipo`),wg(),jc(1388,`th`,14),iO(1389,`Descrição`),wg()(),jc(1390,`tr`,15)(1391,`td`,16)(1392,`div`,24)(1393,`span`,25),iO(1394,` errorAsync`),nu(1395,`br`),wg()()(),jc(1396,`td`,20)(1397,`code`,38),iO(1398,`(value) => Observable<boolean>`),wg()(),jc(1399,`td`,23)(1400,`p`),iO(1401,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),jc(1402,`code`),iO(1403,`change`),wg(),iO(1404,` ou `),jc(1405,`code`),iO(1406,`change-model`),wg(),iO(1407,`, dependendo do valor da propriedade `),jc(1408,`code`),iO(1409,`triggerMode`),wg(),iO(1410,`.`),wg()()(),jc(1411,`tr`,15)(1412,`td`,16)(1413,`div`,24)(1414,`span`,25),iO(1415,` triggerMode`),nu(1416,`br`),wg()()(),jc(1417,`td`,20)(1418,`code`,39),iO(1419,`'change' `),wg(),jc(1420,`code`,40),iO(1421,` 'changeModel'`),wg()(),jc(1422,`td`,23)(1423,`em`)(1424,`strong`),iO(1425,`(opcional)`),wg()(),jc(1426,`p`),iO(1427,`Controla se o método será executado no disparo do output `),jc(1428,`code`),iO(1429,`change`),wg(),iO(1430,` ou `),jc(1431,`code`),iO(1432,`change-model`),wg(),iO(1433,`.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return l})();var Ce=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(b(ir),b(Sn))};static ɵcmp=Zn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Number`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(3,`sample-po-number-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`web`)}),nu(5,`sample-po-number-basic-view`)(6,`sample-po-number-labs-view`)(7,`sample-po-number-calculate-view`),wg()()()),r&2&&(jE(`p-actions`,i.actions),rg(2),jE(`p-active`,i.activeTab===`doc`),rg(2),jE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[Kze,bae,Sae,ie,ae,re,me],encapsulation:2,changeDetection:1})}return l})()}];var pe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe$1({type:l});static ɵinj=ue({imports:[C1.forChild(Ce),C1]})}return l})();var Ge=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=pe$1({type:l});static ɵinj=ue({imports:[Ta,pe]})}return l})();export{Ge as DocPoNumberModule};