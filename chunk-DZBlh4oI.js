import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he$1,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe}from"./main-NT5YGKBQ.js";var te=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`number`,`p-label`,`PO Number`]],template:function(r,i){r&1&&ql(0,`po-number`,0)},dependencies:[xbe],encapsulation:2,changeDetection:1})}return l})();var ce=l=>({"docs-sample-code-tabs":l});var ie=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Number Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-number-basic/sample-po-number-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-number-basic/sample-po-number-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-number-basic`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ce,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,te],encapsulation:2,changeDetection:1})}return l})();var oe=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:`an an-currency-circle-dollar`,label:`an an-currency-circle-dollar`},{value:`an an-currency-btc`,label:`an an-currency-btc`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event=``,this.messageErrorPattern=``,this.label=void 0,this.placeholder=``,this.help=``,this.icon=``,this.size=`medium`,this.step=void 0,this.properties=[]}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-labs`]],standalone:!1,decls:23,vars:43,consts:[[`f`,`ngForm`],[`name`,`PO number`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-max`,`p-maxlength`,`p-min`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-step`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`messageErrorPattern`,`p-clean`,``,`p-label`,`Message error pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`min`,`p-clean`,``,`p-label`,`Min`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Minlength`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-clean`,``,`p-label`,`Max`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Maxlength`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`step`,`p-clean`,``,`p-label`,`Step`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let p=Vx();Ml(0,`po-number`,1),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.number,o)||(i.number=o),Jy(o)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3)(4,`po-info`,4),lg(),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`po-input`,5),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.label,o)||(i.label=o),Jy(o)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.help,o)||(i.help=o),Jy(o)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.helperText,o)||(i.helperText=o),Jy(o)}),lg(),f0(),Ml(11,`po-input`,8),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.placeholder,o)||(i.placeholder=o),Jy(o)}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.messageErrorPattern,o)||(i.messageErrorPattern=o),Jy(o)}),lg(),f0(),Ml(13,`po-number`,10),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.min,o)||(i.min=o),Jy(o)}),lg(),f0(),Ml(14,`po-number`,11),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.minlength,o)||(i.minlength=o),Jy(o)}),lg(),f0(),Ml(15,`po-number`,12),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.max,o)||(i.max=o),Jy(o)}),lg(),f0(),Ml(16,`po-number`,13),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.maxlength,o)||(i.maxlength=o),Jy(o)}),lg(),f0(),Ml(17,`po-number`,14),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.step,o)||(i.step=o),Jy(o)}),lg(),f0(),Ml(18,`po-select`,15),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.icon,o)||(i.icon=o),Jy(o)}),lg(),f0(),Ml(19,`po-checkbox-group`,16),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.properties,o)||(i.properties=o),Jy(o)}),lg(),f0(),Ml(20,`po-radio-group`,17),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.size,o)||(i.size=o),Jy(o)}),lg(),f0(),Ml(21,`div`,2)(22,`po-button`,18),ht(`p-click`,function(){return i.restore()}),lg()()()}r&2&&(Tw(`ngModel`,i.number),cw(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.messageErrorPattern)(`p-help`,i.help)(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-max`,i.max)(`p-maxlength`,i.maxlength)(`p-min`,i.min)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-step`,i.step)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),p0(),Up(3),cw(`p-value`,i.number),Up(),cw(`p-value`,i.event),Up(4),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.helperText),p0(),Up(),Tw(`ngModel`,i.placeholder),p0(),Up(),Tw(`ngModel`,i.messageErrorPattern),p0(),Up(),Tw(`ngModel`,i.min),p0(),Up(),Tw(`ngModel`,i.minlength),p0(),Up(),Tw(`ngModel`,i.max),p0(),Up(),Tw(`ngModel`,i.maxlength),p0(),Up(),Tw(`ngModel`,i.step),p0(),Up(),Tw(`ngModel`,i.icon),cw(`p-options`,i.iconOptions),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,xbe,q0e,Tbe,kbe],encapsulation:2,changeDetection:1})}return l})();var ge=l=>({"docs-sample-code-tabs":l});var ae=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Number Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-number-labs/sample-po-number-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-number
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-number-labs/sample-po-number-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-number-labs`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ge,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,oe],encapsulation:2,changeDetection:1})}return l})();var le=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:`São Paulo`},{value:17,label:`Alagoas`},{value:15,label:`Ceará`}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100)}loadICMS(){this.icms=this.state}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-calculate`]],standalone:!1,decls:16,vars:9,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`price`,`p-label`,`Price`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantity`,`p-label`,`Quantity`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,`p-required`,``,`p-sort`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icms`,`p-label`,`ICMS %`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`liquid`,`p-label`,`Liquid`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`total`,`p-label`,`Total`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Calculate`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let p=Vx();Ml(0,`h3`),mN(1,`Calculate Tax`),lg(),ql(2,`po-divider`),Ml(3,`form`,null,0)(5,`div`,1)(6,`po-number`,2),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.price,o)||(i.price=o),Jy(o)}),lg(),f0(),Ml(7,`po-number`,3),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.quantity,o)||(i.quantity=o),Jy(o)}),lg(),f0(),lg(),Ml(8,`div`)(9,`po-select`,4),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.state,o)||(i.state=o),Jy(o)}),ht(`p-change`,function(){return i.loadICMS()}),lg(),f0(),Ml(10,`po-number`,5),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.icms,o)||(i.icms=o),Jy(o)}),lg(),f0(),Ml(11,`po-number`,6),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.liquid,o)||(i.liquid=o),Jy(o)}),lg(),f0(),Ml(12,`po-number`,7),Mw(`ngModelChange`,function(o){return Qy(p),yN(i.total,o)||(i.total=o),Jy(o)}),lg(),f0(),lg(),Ml(13,`div`,1)(14,`po-button`,8),ht(`p-click`,function(){return i.calculate()}),lg(),Ml(15,`po-button`,9),ht(`p-click`,function(){Qy(p);return Jy(Yx(4).reset())}),lg()()()}if(r&2){let p=Yx(4);Up(6),Tw(`ngModel`,i.price),p0(),Up(),Tw(`ngModel`,i.quantity),p0(),Up(2),Tw(`ngModel`,i.state),cw(`p-options`,i.statesOptions),p0(),Up(),Tw(`ngModel`,i.icms),p0(),Up(),Tw(`ngModel`,i.liquid),p0(),Up(),Tw(`ngModel`,i.total),p0(),Up(2),cw(`p-disabled`,p.invalid),Up(),cw(`p-disabled`,p.invalid)}},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,xbe,Tbe],encapsulation:2,changeDetection:1})}return l})();var he=l=>({"docs-sample-code-tabs":l});var re=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-calculate-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Number - Calculate`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-number-calculate/sample-po-number-calculate.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<h3>Calculate Tax</h3>

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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-number-calculate/sample-po-number-calculate.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-number-calculate`),lg(),ql(23,`hr`)),r&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,he,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,le],encapsulation:2,changeDetection:1})}return l})();var me=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-doc`]],standalone:!1,decls:1434,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(r,i){r&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoNumberComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),lg(),Ml(24,`p`),mN(25,`Importante:`),lg(),Ml(26,`ul`)(27,`li`),mN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),lg()(),Ml(29,`h4`),mN(30,`Tokens customizáveis`),lg(),Ml(31,`p`),mN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),ql(33,`br`),mN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ml(35,`code`),mN(36,`.po-input`),lg()(),Ml(37,`blockquote`)(38,`p`),mN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Ml(40,`a`,6),mN(41,`Grid System`),lg(),mN(42,`.`),lg()(),Ml(43,`blockquote`)(44,`p`),mN(45,`Para maiores informações, acesse o guia `),Ml(46,`a`,7),mN(47,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(48,`.`),lg()(),Ml(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),mN(53,`Propriedade`),lg(),Ml(54,`th`),mN(55,`Descrição`),lg(),Ml(56,`th`),mN(57,`Valor Padrão`),lg()()(),Ml(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),mN(62,`Default Values`),lg()(),ql(63,`td`)(64,`td`),lg(),Ml(65,`tr`)(66,`td`)(67,`code`),mN(68,`--font-family`),lg()(),Ml(69,`td`),mN(70,`Família tipográfica usada`),lg(),Ml(71,`td`)(72,`code`),mN(73,`var(--font-family-theme)`),lg()()(),Ml(74,`tr`)(75,`td`)(76,`code`),mN(77,`--font-size`),lg()(),Ml(78,`td`),mN(79,`Tamanho da fonte`),lg(),Ml(80,`td`)(81,`code`),mN(82,`var(--font-size-default)`),lg()()(),Ml(83,`tr`)(84,`td`)(85,`code`),mN(86,`--text-color-placeholder`),lg()(),Ml(87,`td`),mN(88,`Cor do texto placeholder`),lg(),Ml(89,`td`)(90,`code`),mN(91,`var(--color-neutral-light-30)`),lg()()(),Ml(92,`tr`)(93,`td`)(94,`code`),mN(95,`--color`),lg()(),Ml(96,`td`),mN(97,`Cor pincipal do input`),lg(),Ml(98,`td`)(99,`code`),mN(100,`var(--color-neutral-dark-70)`),lg()()(),Ml(101,`tr`)(102,`td`)(103,`code`),mN(104,`--background`),lg()(),Ml(105,`td`),mN(106,`Cor de background`),lg(),Ml(107,`td`)(108,`code`),mN(109,`var(--color-neutral-light-05)`),lg()()(),Ml(110,`tr`)(111,`td`)(112,`code`),mN(113,`--padding`),lg()(),Ml(114,`td`),mN(115,`Preenchimento`),lg(),Ml(116,`td`)(117,`code`),mN(118,`0 0.5rem`),lg()()(),Ml(119,`tr`)(120,`td`)(121,`code`),mN(122,`--text-color`),lg()(),Ml(123,`td`),mN(124,`Cor do texto`),lg(),Ml(125,`td`)(126,`code`),mN(127,`var(--color-neutral-dark-90)`),lg()()(),Ml(128,`tr`)(129,`td`)(130,`code`),mN(131,`--field-container-title-justify`),lg()(),Ml(132,`td`),mN(133,`Alinhamento horizontal do título (`),Ml(134,`code`),mN(135,`justify-content`),lg(),mN(136,`)`),lg(),Ml(137,`td`)(138,`code`),mN(139,`space-between`),lg()()(),Ml(140,`tr`)(141,`td`)(142,`code`),mN(143,`--field-container-title-flex`),lg()(),Ml(144,`td`),mN(145,`Flex do título (`),Ml(146,`code`),mN(147,`flex`),lg(),mN(148,`)`),lg(),Ml(149,`td`)(150,`code`),mN(151,`1 auto`),lg()()(),Ml(152,`tr`)(153,`td`)(154,`strong`),mN(155,`Hover`),lg()(),ql(156,`td`)(157,`td`),lg(),Ml(158,`tr`)(159,`td`)(160,`code`),mN(161,`--color-hover`),lg()(),Ml(162,`td`),mN(163,`Cor principal no estado hover`),lg(),Ml(164,`td`)(165,`code`),mN(166,`var(--color-brand-01-dark)`),lg()()(),Ml(167,`tr`)(168,`td`)(169,`code`),mN(170,`--background-hover`),lg()(),Ml(171,`td`),mN(172,`Cor de background no estado hover`),lg(),Ml(173,`td`)(174,`code`),mN(175,`var(--color-brand-01-lightest)`),lg()()(),Ml(176,`tr`)(177,`td`)(178,`strong`),mN(179,`Focused`),lg()(),ql(180,`td`)(181,`td`),lg(),Ml(182,`tr`)(183,`td`)(184,`code`),mN(185,`--color-focused`),lg()(),Ml(186,`td`),mN(187,`Cor principal no estado de focus`),lg(),Ml(188,`td`)(189,`code`),mN(190,`var(--color-action-default)`),lg()()(),Ml(191,`tr`)(192,`td`)(193,`code`),mN(194,`--outline-color-focused`),lg()(),Ml(195,`td`),mN(196,`Cor do outline do estado de focus`),lg(),Ml(197,`td`)(198,`code`),mN(199,`var(--color-action-focus)`),lg()()(),Ml(200,`tr`)(201,`td`)(202,`strong`),mN(203,`Disabled`),lg()(),ql(204,`td`)(205,`td`),lg(),Ml(206,`tr`)(207,`td`)(208,`code`),mN(209,`--color-disabled`),lg()(),Ml(210,`td`),mN(211,`Cor principal no estado disabled`),lg(),Ml(212,`td`)(213,`code`),mN(214,`var(--color-neutral-light-30)`),lg()()(),Ml(215,`tr`)(216,`td`)(217,`code`),mN(218,`--background-disabled`),lg()(),Ml(219,`td`),mN(220,`Cor de background no estado disabled`),lg(),Ml(221,`td`)(222,`code`),mN(223,`var(--color-neutral-light-20)`),lg()()(),Ml(224,`tr`)(225,`td`)(226,`code`),mN(227,`--text-color-disabled`),lg()(),Ml(228,`td`),mN(229,`Cor do texto no estado disabled`),lg(),Ml(230,`td`)(231,`code`),mN(232,`var(--color-neutral-dark-70)`),lg()()()()(),Ml(233,`p`),ql(234,`br`),mN(235,` O `),Ml(236,`code`),mN(237,`po-number`),lg(),mN(238,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),lg()(),Ml(239,`div`,8)(240,`h4`,9),mN(241,`Seletor`),lg(),Ml(242,`pre`,10),mN(243,`<po-number
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
`),lg()(),Ml(244,`h4`,11),mN(245,`Propriedades`),lg(),Ml(246,`table`,12)(247,`tr`,13)(248,`th`,14),mN(249,`Nome`),lg(),Ml(250,`th`,14),mN(251,`Tipo`),lg(),Ml(252,`th`,14),mN(253,`Padrão`),lg(),Ml(254,`th`,14),mN(255,`Descrição`),lg()(),Ml(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),mN(260,` (p-additional-help)`),ql(261,`br`),lg()(),Ml(262,`div`,19),mN(263,`Deprecated`),lg()(),Ml(264,`td`,20)(265,`code`,21),mN(266,`EventEmitter`),lg()(),Ml(267,`td`,22),mN(268,`-`),lg(),Ml(269,`td`,23)(270,`em`)(271,`strong`),mN(272,`(opcional)`),lg()(),Ml(273,`p`),mN(274,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(275,`blockquote`)(276,`p`),mN(277,`Essa propriedade está `),Ml(278,`strong`),mN(279,`depreciada`),lg(),mN(280,` e será removida na versão `),Ml(281,`code`),mN(282,`23.x.x`),lg(),mN(283,`. Recomendamos utilizar a propriedade `),Ml(284,`code`),mN(285,`p-helper`),lg(),mN(286,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(287,`tr`,15)(288,`td`,16)(289,`div`,24)(290,`span`,25),mN(291,` p-additional-help-tooltip`),ql(292,`br`),lg()(),Ml(293,`div`,19),mN(294,`Deprecated`),lg()(),Ml(295,`td`,20)(296,`code`,26),mN(297,`string`),lg()(),Ml(298,`td`,22),mN(299,`-`),lg(),Ml(300,`td`,23)(301,`em`)(302,`strong`),mN(303,`(opcional)`),lg()(),Ml(304,`p`),mN(305,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(306,`code`),mN(307,`po-helper`),lg(),mN(308,`.
`),Ml(309,`strong`),mN(310,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(311,`blockquote`)(312,`p`),mN(313,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),lg()(),Ml(314,`blockquote`)(315,`p`),mN(316,`Essa propriedade está `),Ml(317,`strong`),mN(318,`depreciada`),lg(),mN(319,` e será removida na versão `),Ml(320,`code`),mN(321,`23.x.x`),lg(),mN(322,`. Recomendamos utilizar a propriedade `),Ml(323,`code`),mN(324,`p-helper`),lg(),mN(325,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(326,`tr`,15)(327,`td`,16)(328,`div`,24)(329,`span`,25),mN(330,` p-append-in-body`),ql(331,`br`),lg()()(),Ml(332,`td`,20)(333,`code`,27),mN(334,`boolean`),lg()(),Ml(335,`td`,22)(336,`p`)(337,`code`),mN(338,`false`),lg()()(),Ml(339,`td`,23)(340,`em`)(341,`strong`),mN(342,`(opcional)`),lg()(),Ml(343,`p`),mN(344,`Define que o popover (`),Ml(345,`code`),mN(346,`p-helper`),lg(),mN(347,` e/ou `),Ml(348,`code`),mN(349,`p-error-limit`),lg(),mN(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),lg(),Ml(351,`blockquote`)(352,`p`),mN(353,`Quando utilizado com `),Ml(354,`code`),mN(355,`p-helper`),lg(),mN(356,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(357,`tr`,15)(358,`td`,16)(359,`div`,24)(360,`span`,25),mN(361,` p-auto-focus`),ql(362,`br`),lg()()(),Ml(363,`td`,20)(364,`code`,27),mN(365,`boolean`),lg()(),Ml(366,`td`,22)(367,`p`)(368,`code`),mN(369,`false`),lg()()(),Ml(370,`td`,23)(371,`em`)(372,`strong`),mN(373,`(opcional)`),lg()(),Ml(374,`p`),mN(375,`Aplica foco no elemento ao ser iniciado.`),lg(),Ml(376,`blockquote`)(377,`p`),mN(378,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),lg()()()(),Ml(379,`tr`,15)(380,`td`,16)(381,`div`,17)(382,`span`,18),mN(383,` (p-blur)`),ql(384,`br`),lg()()(),Ml(385,`td`,20)(386,`code`,21),mN(387,`EventEmitter`),lg()(),Ml(388,`td`,22),mN(389,`-`),lg(),Ml(390,`td`,23)(391,`em`)(392,`strong`),mN(393,`(opcional)`),lg()(),Ml(394,`p`),mN(395,`Evento disparado ao sair do campo.`),lg()()(),Ml(396,`tr`,15)(397,`td`,16)(398,`div`,17)(399,`span`,18),mN(400,` (p-change)`),ql(401,`br`),lg()()(),Ml(402,`td`,20)(403,`code`,21),mN(404,`EventEmitter`),lg()(),Ml(405,`td`,22),mN(406,`-`),lg(),Ml(407,`td`,23)(408,`em`)(409,`strong`),mN(410,`(opcional)`),lg()(),Ml(411,`p`),mN(412,`Evento disparado ao alterar valor e deixar o campo.`),lg()()(),Ml(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),mN(417,` (p-change-model)`),ql(418,`br`),lg()()(),Ml(419,`td`,20)(420,`code`,21),mN(421,`EventEmitter`),lg()(),Ml(422,`td`,22),mN(423,`-`),lg(),Ml(424,`td`,23)(425,`em`)(426,`strong`),mN(427,`(opcional)`),lg()(),Ml(428,`p`),mN(429,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ml(430,`code`),mN(431,`setValue`),lg(),mN(432,`, `),Ml(433,`code`),mN(434,`patchValue`),lg(),mN(435,`, carregamento assíncrono).`),lg(),Ml(436,`p`),mN(437,`Diferentemente do `),Ml(438,`code`),mN(439,`p-change`),lg(),mN(440,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ml(441,`code`),mN(442,`p-change-model`),lg(),mN(443,` cobre todos os cenários de alteração de valor.`),lg(),Ml(444,`p`),mN(445,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),lg()()(),Ml(446,`tr`,15)(447,`td`,16)(448,`div`,24)(449,`span`,25),mN(450,`p-clean`),ql(451,`br`),lg()()(),Ml(452,`td`,20)(453,`code`,27),mN(454,`boolean`),lg()(),Ml(455,`td`,22),mN(456,`-`),lg(),Ml(457,`td`,23)(458,`em`)(459,`strong`),mN(460,`(opcional)`),lg()(),Ml(461,`p`),mN(462,`Se verdadeiro, o campo receberá um botão para ser limpo.`),lg()()(),Ml(463,`tr`,15)(464,`td`,16)(465,`div`,24)(466,`span`,25),mN(467,` p-compact-label`),ql(468,`br`),lg()()(),Ml(469,`td`,20)(470,`code`,27),mN(471,`boolean`),lg()(),Ml(472,`td`,22)(473,`p`)(474,`code`),mN(475,`false`),lg()()(),Ml(476,`td`,23)(477,`em`)(478,`strong`),mN(479,`(opcional)`),lg()(),Ml(480,`p`),mN(481,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(482,`p`),mN(483,`Quando habilitado (`),Ml(484,`code`),mN(485,`true`),lg(),mN(486,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(487,`ul`)(488,`li`)(489,`code`),mN(490,`po-label`),lg()(),Ml(491,`li`)(492,`code`),mN(493,`p-requirement (showRequired)`),lg()(),Ml(494,`li`)(495,`code`),mN(496,`po-helper`),lg()()(),Ml(497,`p`),mN(498,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(499,`p`),mN(500,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(501,`ul`)(502,`li`)(503,`code`),mN(504,`--field-container-title-justify`),lg()(),Ml(505,`li`)(506,`code`),mN(507,`--field-container-title-flex`),lg()()(),Ml(508,`p`),mN(509,`Exemplo:`),lg(),Ml(510,`pre`)(511,`code`),mN(512,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(513,`p`),mN(514,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(515,`tr`,15)(516,`td`,16)(517,`div`,24)(518,`span`,25),mN(519,`p-disabled`),ql(520,`br`),lg()()(),Ml(521,`td`,20)(522,`code`,27),mN(523,`boolean`),lg()(),Ml(524,`td`,22)(525,`p`)(526,`code`),mN(527,`false`),lg()()(),Ml(528,`td`,23)(529,`em`)(530,`strong`),mN(531,`(opcional)`),lg()(),Ml(532,`p`),mN(533,`Se verdadeiro, desabilita o campo.`),lg()()(),Ml(534,`tr`,15)(535,`td`,16)(536,`div`,24)(537,`span`,25),mN(538,` p-emit-all-changes`),ql(539,`br`),lg()()(),Ml(540,`td`,20)(541,`code`,27),mN(542,`boolean`),lg()(),Ml(543,`td`,22)(544,`p`)(545,`code`),mN(546,`false`),lg()()(),Ml(547,`td`,23)(548,`em`)(549,`strong`),mN(550,`(opcional)`),lg()(),Ml(551,`p`),mN(552,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),lg()()(),Ml(553,`tr`,15)(554,`td`,16)(555,`div`,17)(556,`span`,18),mN(557,` (p-enter)`),ql(558,`br`),lg()()(),Ml(559,`td`,20)(560,`code`,21),mN(561,`EventEmitter`),lg()(),Ml(562,`td`,22),mN(563,`-`),lg(),Ml(564,`td`,23)(565,`em`)(566,`strong`),mN(567,`(opcional)`),lg()(),Ml(568,`p`),mN(569,`Evento disparado ao entrar do campo.`),lg()()(),Ml(570,`tr`,15)(571,`td`,16)(572,`div`,24)(573,`span`,25),mN(574,` p-error-async-properties`),ql(575,`br`),lg()()(),Ml(576,`td`,20)(577,`code`,28),mN(578,`ErrorAsyncProperties`),lg()(),Ml(579,`td`,22),mN(580,`-`),lg(),Ml(581,`td`,23)(582,`em`)(583,`strong`),mN(584,`(opcional)`),lg()(),Ml(585,`p`),mN(586,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Ml(587,`code`),mN(588,`Reactive Forms`),lg(),mN(589,`. Em formulários reativos, pode-se utilizar o próprio `),Ml(590,`code`),mN(591,`asyncValidators`),lg(),mN(592,`.`),lg()()(),Ml(593,`tr`,15)(594,`td`,16)(595,`div`,24)(596,`span`,25),mN(597,` p-error-limit`),ql(598,`br`),lg()()(),Ml(599,`td`,20)(600,`code`,27),mN(601,`boolean`),lg()(),Ml(602,`td`,22)(603,`p`)(604,`code`),mN(605,`false`),lg()()(),Ml(606,`td`,23)(607,`em`)(608,`strong`),mN(609,`(opcional)`),lg()(),Ml(610,`p`),mN(611,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg(),Ml(612,`blockquote`)(613,`p`),mN(614,`Caso essa propriedade seja definida como `),Ml(615,`code`),mN(616,`true`),lg(),mN(617,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),lg()()()(),Ml(618,`tr`,15)(619,`td`,16)(620,`div`,24)(621,`span`,25),mN(622,` p-error-pattern`),ql(623,`br`),lg()()(),Ml(624,`td`,20)(625,`code`,26),mN(626,`string`),lg()(),Ml(627,`td`,22),mN(628,`-`),lg(),Ml(629,`td`,23)(630,`em`)(631,`strong`),mN(632,`(opcional)`),lg()(),Ml(633,`p`),mN(634,`Mensagem que será apresentada quando o `),Ml(635,`code`),mN(636,`pattern`),lg(),mN(637,` ou a máscara não for satisfeita.`),lg(),Ml(638,`blockquote`)(639,`p`),mN(640,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Ml(641,`code`),mN(642,`p-required-field-error-message`),lg(),mN(643,` em conjunto.`),lg()()()(),Ml(644,`tr`,15)(645,`td`,16)(646,`div`,24)(647,`span`,25),mN(648,` p-help`),ql(649,`br`),lg()()(),Ml(650,`td`,20)(651,`code`,26),mN(652,`string`),lg()(),Ml(653,`td`,22),mN(654,`-`),lg(),Ml(655,`td`,23)(656,`em`)(657,`strong`),mN(658,`(opcional)`),lg()(),Ml(659,`p`),mN(660,`Texto de apoio do campo.`),lg()()(),Ml(661,`tr`,15)(662,`td`,16)(663,`div`,24)(664,`span`,25),mN(665,` p-icon`),ql(666,`br`),lg()()(),Ml(667,`td`,20)(668,`code`,26),mN(669,`string `),lg(),Ml(670,`code`,29),mN(671,` TemplateRef<void>`),lg()(),Ml(672,`td`,22),mN(673,`-`),lg(),Ml(674,`td`,23)(675,`em`)(676,`strong`),mN(677,`(opcional)`),lg()(),Ml(678,`p`),mN(679,`Define o ícone que será exibido no início do campo.`),lg(),Ml(680,`p`),mN(681,`É possível usar qualquer um dos ícones da `),Ml(682,`a`,30),mN(683,`Biblioteca de ícones`),lg(),mN(684,`. conforme exemplo abaixo:`),lg(),Ml(685,`pre`)(686,`code`),mN(687,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),lg()(),Ml(688,`p`),mN(689,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(690,`em`),mN(691,`Font Awesome`),lg(),mN(692,`, da seguinte forma:`),lg(),Ml(693,`pre`)(694,`code`),mN(695,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),lg()(),Ml(696,`p`),mN(697,`Outra opção seria a customização do ícone através do `),Ml(698,`code`),mN(699,`TemplateRef`),lg(),mN(700,`, conforme exemplo abaixo:`),lg(),Ml(701,`pre`)(702,`code`),mN(703,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),lg()(),Ml(704,`blockquote`)(705,`p`),mN(706,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ml(707,`code`),mN(708,`font-size: inherit`),lg(),mN(709,` caso o ícone utilizado não aplique-o.`),lg()()()(),Ml(710,`tr`,15)(711,`td`,16)(712,`div`,17)(713,`span`,18),mN(714,` (p-keydown)`),ql(715,`br`),lg()()(),Ml(716,`td`,20)(717,`code`,21),mN(718,`EventEmitter`),lg()(),Ml(719,`td`,22),mN(720,`-`),lg(),Ml(721,`td`,23)(722,`em`)(723,`strong`),mN(724,`(opcional)`),lg()(),Ml(725,`p`),mN(726,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(727,`code`),mN(728,`KeyboardEvent`),lg(),mN(729,` com informações sobre a tecla.`),lg()()(),Ml(730,`tr`,15)(731,`td`,16)(732,`div`,24)(733,`span`,25),mN(734,` p-label`),ql(735,`br`),lg()()(),Ml(736,`td`,20)(737,`code`,26),mN(738,`string`),lg()(),Ml(739,`td`,22),mN(740,`-`),lg(),Ml(741,`td`,23)(742,`em`)(743,`strong`),mN(744,`(opcional)`),lg()(),Ml(745,`p`),mN(746,`Rótulo do campo.`),lg()()(),Ml(747,`tr`,15)(748,`td`,16)(749,`div`,24)(750,`span`,25),mN(751,` p-label-text-wrap`),ql(752,`br`),lg()()(),Ml(753,`td`,20)(754,`code`,27),mN(755,`boolean`),lg()(),Ml(756,`td`,22)(757,`p`)(758,`code`),mN(759,`false`),lg()()(),Ml(760,`td`,23)(761,`em`)(762,`strong`),mN(763,`(opcional)`),lg()(),Ml(764,`p`),mN(765,`Habilita a quebra automática do texto da propriedade `),Ml(766,`code`),mN(767,`p-label`),lg(),mN(768,`. Quando `),Ml(769,`code`),mN(770,`p-label-text-wrap`),lg(),mN(771,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(772,`tr`,15)(773,`td`,16)(774,`div`,24)(775,`span`,25),mN(776,` p-loading`),ql(777,`br`),lg()()(),Ml(778,`td`,20)(779,`code`,27),mN(780,`boolean`),lg()(),Ml(781,`td`,22)(782,`p`)(783,`code`),mN(784,`false`),lg()()(),Ml(785,`td`,23)(786,`em`)(787,`strong`),mN(788,`(opcional)`),lg()(),Ml(789,`p`),mN(790,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),lg()()(),Ml(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),mN(795,`p-mask`),ql(796,`br`),lg()()(),Ml(797,`td`,20)(798,`code`,26),mN(799,`string`),lg()(),Ml(800,`td`,22),mN(801,`-`),lg(),Ml(802,`td`,23)(803,`em`)(804,`strong`),mN(805,`(opcional)`),lg()(),Ml(806,`p`),mN(807,`Indica uma máscara para o campo, porém é incompatível com o `),Ml(808,`code`),mN(809,`po-number`),lg(),mN(810,`.`),lg(),Ml(811,`blockquote`)(812,`p`)(813,`strong`),mN(814,`Componentes compatíveis:`),lg(),Ml(815,`code`),mN(816,`po-input`),lg(),mN(817,`,`),Ml(818,`code`),mN(819,`po-decimal`),lg(),mN(820,`.`),lg()()()(),Ml(821,`tr`,15)(822,`td`,16)(823,`div`,24)(824,`span`,25),mN(825,`p-mask-format-model`),ql(826,`br`),lg()()(),Ml(827,`td`,20)(828,`code`,27),mN(829,`boolean`),lg()(),Ml(830,`td`,22)(831,`p`)(832,`code`),mN(833,`false`),lg()()(),Ml(834,`td`,23)(835,`em`)(836,`strong`),mN(837,`(opcional)`),lg()(),Ml(838,`p`),mN(839,`Indica se o `),Ml(840,`code`),mN(841,`model`),lg(),mN(842,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),lg()()(),Ml(843,`tr`,15)(844,`td`,16)(845,`div`,24)(846,`span`,25),mN(847,` p-mask-no-length-validation`),ql(848,`br`),lg()()(),Ml(849,`td`,20)(850,`code`,27),mN(851,`boolean`),lg()(),Ml(852,`td`,22)(853,`p`)(854,`code`),mN(855,`false`),lg()()(),Ml(856,`td`,23)(857,`p`),mN(858,`Controla como o componente aplica as validações de comprimento mínimo (`),Ml(859,`code`),mN(860,`minLength`),lg(),mN(861,`) e máximo (`),Ml(862,`code`),mN(863,`maxLength`),lg(),mN(864,`) quando há uma máscara (`),Ml(865,`code`),mN(866,`p-mask`),lg(),mN(867,`) definida.`),lg(),Ml(868,`ul`)(869,`li`),mN(870,`Quando `),Ml(871,`code`),mN(872,`true`),lg(),mN(873,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),lg(),Ml(874,`li`),mN(875,`Quando `),Ml(876,`code`),mN(877,`false`),lg(),mN(878,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),lg()(),Ml(879,`blockquote`)(880,`p`),mN(881,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ml(882,`code`),mN(883,`p-mask-format-model`),lg(),mN(884,`.`),lg()(),Ml(885,`p`),mN(886,`Exemplo:`),lg(),Ml(887,`pre`)(888,`code`),mN(889,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),lg()(),Ml(890,`ul`)(891,`li`),mN(892,`Entrada: `),Ml(893,`code`),mN(894,`123-456`),lg(),mN(895,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Ml(896,`code`),mN(897,`-`),lg(),mN(898,`.`),lg()()()(),Ml(899,`tr`,15)(900,`td`,16)(901,`div`,24)(902,`span`,25),mN(903,`p-max`),ql(904,`br`),lg()()(),Ml(905,`td`,20)(906,`code`,31),mN(907,`number`),lg()(),Ml(908,`td`,22),mN(909,`-`),lg(),Ml(910,`td`,23)(911,`em`)(912,`strong`),mN(913,`(opcional)`),lg()(),Ml(914,`p`),mN(915,`Valor máximo.`),lg(),Ml(916,`blockquote`)(917,`p`),mN(918,`Quando o valor máximo for um número com decimais aconselha-se utilizar junto da propriedade `),Ml(919,`code`),mN(920,`p-step`),lg(),mN(921,` também passando a ela um valor decimal.`),lg()()()(),Ml(922,`tr`,15)(923,`td`,16)(924,`div`,24)(925,`span`,25),mN(926,` p-maxlength`),ql(927,`br`),lg()()(),Ml(928,`td`,20)(929,`code`,31),mN(930,`number`),lg()(),Ml(931,`td`,22),mN(932,`-`),lg(),Ml(933,`td`,23)(934,`em`)(935,`strong`),mN(936,`(opcional)`),lg()(),Ml(937,`p`),mN(938,`Indica a quantidade máxima de caracteres que o campo aceita.`),lg()()(),Ml(939,`tr`,15)(940,`td`,16)(941,`div`,24)(942,`span`,25),mN(943,`p-min`),ql(944,`br`),lg()()(),Ml(945,`td`,20)(946,`code`,31),mN(947,`number`),lg()(),Ml(948,`td`,22),mN(949,`-`),lg(),Ml(950,`td`,23)(951,`em`)(952,`strong`),mN(953,`(opcional)`),lg()(),Ml(954,`p`),mN(955,`Valor mínimo.`),lg(),Ml(956,`blockquote`)(957,`p`),mN(958,`Quando o valor mínimo for um número com decimais aconselha-se utilizar junto da propriedade `),Ml(959,`code`),mN(960,`p-step`),lg(),mN(961,` também passando a ela um valor decimal.`),lg()()()(),Ml(962,`tr`,15)(963,`td`,16)(964,`div`,24)(965,`span`,25),mN(966,` p-minlength`),ql(967,`br`),lg()()(),Ml(968,`td`,20)(969,`code`,31),mN(970,`number`),lg()(),Ml(971,`td`,22),mN(972,`-`),lg(),Ml(973,`td`,23)(974,`em`)(975,`strong`),mN(976,`(opcional)`),lg()(),Ml(977,`p`),mN(978,`Indica a quantidade mínima de caracteres que o campo aceita.`),lg()()(),Ml(979,`tr`,15)(980,`td`,16)(981,`div`,24)(982,`span`,25),mN(983,` name`),ql(984,`br`),lg()()(),Ml(985,`td`,20)(986,`code`,26),mN(987,`string`),lg()(),Ml(988,`td`,22),mN(989,`-`),lg(),Ml(990,`td`,23)(991,`p`),mN(992,`Nome e identificador do campo.`),lg()()(),Ml(993,`tr`,15)(994,`td`,16)(995,`div`,24)(996,`span`,25),mN(997,` p-no-autocomplete`),ql(998,`br`),lg()()(),Ml(999,`td`,20)(1e3,`code`,27),mN(1001,`boolean`),lg()(),Ml(1002,`td`,22)(1003,`p`)(1004,`code`),mN(1005,`false`),lg()()(),Ml(1006,`td`,23)(1007,`em`)(1008,`strong`),mN(1009,`(opcional)`),lg()(),Ml(1010,`p`),mN(1011,`Define a propriedade nativa `),Ml(1012,`code`),mN(1013,`autocomplete`),lg(),mN(1014,` do campo como `),Ml(1015,`code`),mN(1016,`off`),lg(),mN(1017,`.`),lg(),Ml(1018,`blockquote`)(1019,`p`),mN(1020,`No componente `),Ml(1021,`code`),mN(1022,`po-password`),lg(),mN(1023,` será definido como `),Ml(1024,`code`),mN(1025,`new-password`),lg(),mN(1026,`.`),lg()(),Ml(1027,`p`),mN(1028,`Nos componentes `),Ml(1029,`code`),mN(1030,`po-password`),lg(),mN(1031,` e `),Ml(1032,`code`),mN(1033,`po-login`),lg(),mN(1034,` o valor padrão será `),Ml(1035,`code`),mN(1036,`true`),lg(),mN(1037,`.`),lg()()(),Ml(1038,`tr`,15)(1039,`td`,16)(1040,`div`,24)(1041,`span`,25),mN(1042,` p-optional`),ql(1043,`br`),lg()()(),Ml(1044,`td`,20)(1045,`code`,27),mN(1046,`boolean`),lg()(),Ml(1047,`td`,22)(1048,`p`)(1049,`code`),mN(1050,`false`),lg()()(),Ml(1051,`td`,23)(1052,`em`)(1053,`strong`),mN(1054,`(opcional)`),lg()(),Ml(1055,`p`),mN(1056,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(1057,`blockquote`)(1058,`p`),mN(1059,`Não será exibida a indicação se:`),lg()(),Ml(1060,`ul`)(1061,`li`),mN(1062,`O campo conter `),Ml(1063,`code`),mN(1064,`p-required`),lg(),mN(1065,`;`),lg(),Ml(1066,`li`),mN(1067,`Não possuir `),Ml(1068,`code`),mN(1069,`p-help`),lg(),mN(1070,` e/ou `),Ml(1071,`code`),mN(1072,`p-label`),lg(),mN(1073,`.`),lg()()()(),Ml(1074,`tr`,15)(1075,`td`,16)(1076,`div`,24)(1077,`span`,25),mN(1078,`p-pattern`),ql(1079,`br`),lg()()(),Ml(1080,`td`,20)(1081,`code`,26),mN(1082,`string`),lg()(),Ml(1083,`td`,22),mN(1084,`-`),lg(),Ml(1085,`td`,23)(1086,`em`)(1087,`strong`),mN(1088,`(opcional)`),lg()(),Ml(1089,`p`),mN(1090,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Ml(1091,`code`),mN(1092,`(p-mask)`),lg(),mN(1093,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),lg()()(),Ml(1094,`tr`,15)(1095,`td`,16)(1096,`div`,24)(1097,`span`,25),mN(1098,` p-placeholder`),ql(1099,`br`),lg()()(),Ml(1100,`td`,20)(1101,`code`,26),mN(1102,`string`),lg()(),Ml(1103,`td`,22)(1104,`p`),mN(1105,`''`),lg()(),Ml(1106,`td`,23)(1107,`em`)(1108,`strong`),mN(1109,`(opcional)`),lg()(),Ml(1110,`p`),mN(1111,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),lg()()(),Ml(1112,`tr`,15)(1113,`td`,16)(1114,`div`,24)(1115,`span`,25),mN(1116,` p-helper`),ql(1117,`br`),lg()()(),Ml(1118,`td`,20)(1119,`code`,32),mN(1120,`PoHelperOptions `),lg(),Ml(1121,`code`,26),mN(1122,` string`),lg()(),Ml(1123,`td`,22),mN(1124,`-`),lg(),Ml(1125,`td`,23)(1126,`em`)(1127,`strong`),mN(1128,`(opcional)`),lg()(),Ml(1129,`p`),mN(1130,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(1131,`code`),mN(1132,`p-label`),lg(),mN(1133,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(1134,`code`),mN(1135,`p-label`),lg(),mN(1136,`.`),lg(),Ml(1137,`blockquote`)(1138,`p`),mN(1139,`Para mais informações acesse: `),Ml(1140,`a`,33),mN(1141,`https://po-ui.io/documentation/po-helper`),lg(),mN(1142,`.`),lg()(),Ml(1143,`blockquote`)(1144,`p`),mN(1145,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(1146,`code`),mN(1147,`p-additional-help-tooltip`),lg(),mN(1148,` e `),Ml(1149,`code`),mN(1150,`p-additional-help`),lg(),mN(1151,`) será ignorado.`),lg()()()(),Ml(1152,`tr`,15)(1153,`td`,16)(1154,`div`,24)(1155,`span`,25),mN(1156,`p-readonly`),ql(1157,`br`),lg()()(),Ml(1158,`td`,20)(1159,`code`,27),mN(1160,`boolean`),lg()(),Ml(1161,`td`,22),mN(1162,`-`),lg(),Ml(1163,`td`,23)(1164,`em`)(1165,`strong`),mN(1166,`(opcional)`),lg()(),Ml(1167,`p`),mN(1168,`Indica que o campo será somente leitura.`),lg()()(),Ml(1169,`tr`,15)(1170,`td`,16)(1171,`div`,24)(1172,`span`,25),mN(1173,`p-required`),ql(1174,`br`),lg()()(),Ml(1175,`td`,20)(1176,`code`,27),mN(1177,`boolean`),lg()(),Ml(1178,`td`,22)(1179,`p`)(1180,`code`),mN(1181,`false`),lg()()(),Ml(1182,`td`,23)(1183,`em`)(1184,`strong`),mN(1185,`(opcional)`),lg()(),Ml(1186,`p`),mN(1187,`Define que o campo será obrigatório.`),lg(),Ml(1188,`blockquote`)(1189,`p`),mN(1190,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ml(1191,`code`),mN(1192,`(p-disabled)`),lg(),mN(1193,`.`),lg()()()(),Ml(1194,`tr`,15)(1195,`td`,16)(1196,`div`,24)(1197,`span`,25),mN(1198,` p-required-field-error-message`),ql(1199,`br`),lg()()(),Ml(1200,`td`,20)(1201,`code`,27),mN(1202,`boolean`),lg()(),Ml(1203,`td`,22)(1204,`p`)(1205,`code`),mN(1206,`false`),lg()()(),Ml(1207,`td`,23)(1208,`em`)(1209,`strong`),mN(1210,`(opcional)`),lg()(),Ml(1211,`p`),mN(1212,`Exibe a mensagem setada na propriedade `),Ml(1213,`code`),mN(1214,`p-error-pattern`),lg(),mN(1215,` se o campo estiver vazio e for requerido.`),lg(),Ml(1216,`blockquote`)(1217,`p`),mN(1218,`Necessário que a propriedade `),Ml(1219,`code`),mN(1220,`p-required`),lg(),mN(1221,` esteja habilitada.`),lg()()()(),Ml(1222,`tr`,15)(1223,`td`,16)(1224,`div`,24)(1225,`span`,25),mN(1226,` p-show-required`),ql(1227,`br`),lg()()(),Ml(1228,`td`,20)(1229,`code`,27),mN(1230,`boolean`),lg()(),Ml(1231,`td`,22),mN(1232,`-`),lg(),Ml(1233,`td`,23)(1234,`p`),mN(1235,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(1236,`blockquote`)(1237,`p`),mN(1238,`Não será exibida a indicação se:`),lg()(),Ml(1239,`ul`)(1240,`li`),mN(1241,`Não possuir `),Ml(1242,`code`),mN(1243,`p-help`),lg(),mN(1244,` e/ou `),Ml(1245,`code`),mN(1246,`p-label`),lg(),mN(1247,`.`),lg()()()(),Ml(1248,`tr`,15)(1249,`td`,16)(1250,`div`,24)(1251,`span`,25),mN(1252,` p-size`),ql(1253,`br`),lg()()(),Ml(1254,`td`,20)(1255,`code`,26),mN(1256,`string`),lg()(),Ml(1257,`td`,22)(1258,`p`)(1259,`code`),mN(1260,`medium`),lg()()(),Ml(1261,`td`,23)(1262,`em`)(1263,`strong`),mN(1264,`(opcional)`),lg()(),Ml(1265,`p`),mN(1266,`Define o tamanho do componente:`),lg(),Ml(1267,`ul`)(1268,`li`)(1269,`code`),mN(1270,`small`),lg(),mN(1271,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(1272,`li`)(1273,`code`),mN(1274,`medium`),lg(),mN(1275,`: altura do input como 44px.`),lg()(),Ml(1276,`blockquote`)(1277,`p`),mN(1278,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(1279,`code`),mN(1280,`medium`),lg(),mN(1281,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(1282,`a`,34),mN(1283,`po-theme`),lg(),mN(1284,`.`),lg()()()(),Ml(1285,`tr`,15)(1286,`td`,16)(1287,`div`,24)(1288,`span`,25),mN(1289,` p-step`),ql(1290,`br`),lg()()(),Ml(1291,`td`,20)(1292,`code`,26),mN(1293,`string`),lg()(),Ml(1294,`td`,22)(1295,`p`),mN(1296,`1`),lg()(),Ml(1297,`td`,23)(1298,`em`)(1299,`strong`),mN(1300,`(opcional)`),lg()(),Ml(1301,`p`),mN(1302,`Intervalo.`),lg()()(),Ml(1303,`tr`,15)(1304,`td`,16)(1305,`div`,24)(1306,`span`,25),mN(1307,` p-upper-case`),ql(1308,`br`),lg()()(),Ml(1309,`td`,20)(1310,`code`,27),mN(1311,`boolean`),lg()(),Ml(1312,`td`,22),mN(1313,`-`),lg(),Ml(1314,`td`,23)(1315,`p`),mN(1316,`Converte o conteúdo do campo em maiúsulo automaticamente.`),lg()()()(),Ml(1317,`h3`,11),mN(1318,`Métodos`),lg(),Ml(1319,`table`,35)(1320,`tr`,15)(1321,`th`,36)(1322,`div`,24)(1323,`h4`)(1324,`span`,25),mN(1325,` showAdditionalHelp `),lg()()()()(),Ml(1326,`tr`,23)(1327,`td`,23)(1328,`p`),mN(1329,`Método que exibe `),Ml(1330,`code`),mN(1331,`p-helper`),lg(),mN(1332,` ou executa a ação definida em `),Ml(1333,`code`),mN(1334,`p-helper{eventOnClick}`),lg(),mN(1335,` ou em `),Ml(1336,`code`),mN(1337,`p-additionalHelp`),lg(),mN(1338,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(1339,`code`),mN(1340,`p-keydown`),lg(),mN(1341,`.`),lg(),Ml(1342,`blockquote`)(1343,`p`),mN(1344,`Exibe ou oculta o conteúdo do componente `),Ml(1345,`code`),mN(1346,`po-helper`),lg(),mN(1347,` quando o componente estiver com foco.`),lg()(),Ml(1348,`pre`)(1349,`code`),mN(1350,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),lg()(),Ml(1351,`pre`)(1352,`code`),mN(1353,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(1354,`br`),Ml(1355,`table`,35)(1356,`tr`,15)(1357,`th`,36)(1358,`div`,24)(1359,`h4`)(1360,`span`,25),mN(1361,` focus `),lg()()()()(),Ml(1362,`tr`,23)(1363,`td`,23)(1364,`p`),mN(1365,`Função que atribui foco ao componente.`),lg(),Ml(1366,`p`),mN(1367,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(1368,`pre`)(1369,`code`),mN(1370,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),lg()()()()(),ql(1371,`br`),Ml(1372,`h3`),mN(1373,`Interfaces`),lg(),Ml(1374,`h4`,37)(1375,`code`,5),mN(1376,`ErrorAsyncProperties`),lg()(),Ml(1377,`div`,2)(1378,`p`),mN(1379,`Interface para realizar uma validação assíncrona no componente.`),lg()(),Ml(1380,`h4`,11),mN(1381,`Propriedades`),lg(),Ml(1382,`table`,12)(1383,`tr`,13)(1384,`th`,14),mN(1385,`Nome`),lg(),Ml(1386,`th`,14),mN(1387,`Tipo`),lg(),Ml(1388,`th`,14),mN(1389,`Descrição`),lg()(),Ml(1390,`tr`,15)(1391,`td`,16)(1392,`div`,24)(1393,`span`,25),mN(1394,` errorAsync`),ql(1395,`br`),lg()()(),Ml(1396,`td`,20)(1397,`code`,38),mN(1398,`(value) => Observable<boolean>`),lg()(),Ml(1399,`td`,23)(1400,`p`),mN(1401,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ml(1402,`code`),mN(1403,`change`),lg(),mN(1404,` ou `),Ml(1405,`code`),mN(1406,`change-model`),lg(),mN(1407,`, dependendo do valor da propriedade `),Ml(1408,`code`),mN(1409,`triggerMode`),lg(),mN(1410,`.`),lg()()(),Ml(1411,`tr`,15)(1412,`td`,16)(1413,`div`,24)(1414,`span`,25),mN(1415,` triggerMode`),ql(1416,`br`),lg()()(),Ml(1417,`td`,20)(1418,`code`,39),mN(1419,`'change' `),lg(),Ml(1420,`code`,40),mN(1421,` 'changeModel'`),lg()(),Ml(1422,`td`,23)(1423,`em`)(1424,`strong`),mN(1425,`(opcional)`),lg()(),Ml(1426,`p`),mN(1427,`Controla se o método será executado no disparo do output `),Ml(1428,`code`),mN(1429,`change`),lg(),mN(1430,` ou `),Ml(1431,`code`),mN(1432,`change-model`),lg(),mN(1433,`.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var Ce=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(w(Xn),w(Cn))};static ɵcmp=Un({type:l,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Number`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-number-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-number-basic-view`)(6,`sample-po-number-labs-view`)(7,`sample-po-number-calculate-view`),lg()()()),r&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ie,ae,re,me],encapsulation:2,changeDetection:1})}return l})()}];var pe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[NL.forChild(Ce),NL]})}return l})();var Ge=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[ar,pe]})}return l})();export{Ge as DocPoNumberModule};