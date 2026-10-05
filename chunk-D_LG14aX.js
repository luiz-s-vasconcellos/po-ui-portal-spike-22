import{$i as pt,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bn as roe,br as Jv,ca as ue,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,gn as poe,i as _a,in as kte,k as D4,ki as he$1,nr as D9,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,wr as Kc,zi as kL}from"./main-BRRQVWD7.js";var te=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-number-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`number`,`p-label`,`PO Number`]],template:function(r,i){r&1&&Kc(0,`po-number`,0)},dependencies:[roe],encapsulation:2,changeDetection:1})}return l})();var ce=l=>({"docs-sample-code-tabs":l});var ie=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-number-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Number Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-number-basic/sample-po-number-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-number-basic/sample-po-number-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-number-basic`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ce,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,te],encapsulation:2,changeDetection:1})}return l})();var oe=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:`an an-currency-circle-dollar`,label:`an an-currency-circle-dollar`},{value:`an an-currency-btc`,label:`an an-currency-btc`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event=``,this.messageErrorPattern=``,this.label=void 0,this.placeholder=``,this.help=``,this.icon=``,this.size=`medium`,this.step=void 0,this.properties=[]}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-number-labs`]],standalone:!1,decls:23,vars:43,consts:[[`f`,`ngForm`],[`name`,`PO number`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-max`,`p-maxlength`,`p-min`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-step`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`messageErrorPattern`,`p-clean`,``,`p-label`,`Message error pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`min`,`p-clean`,``,`p-label`,`Min`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Minlength`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-clean`,``,`p-label`,`Max`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Maxlength`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`step`,`p-clean`,``,`p-label`,`Step`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let p=Bx();Ac(0,`po-number`,1),RE(`ngModelChange`,function(o){return Jv(p),DN(i.number,o)||(i.number=o),e_(o)}),pt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3)(4,`po-info`,4),ug(),Kc(5,`po-divider`),Ac(6,`form`,null,0)(8,`po-input`,5),RE(`ngModelChange`,function(o){return Jv(p),DN(i.label,o)||(i.label=o),e_(o)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(o){return Jv(p),DN(i.help,o)||(i.help=o),e_(o)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(o){return Jv(p),DN(i.helperText,o)||(i.helperText=o),e_(o)}),ug(),p0(),Ac(11,`po-input`,8),RE(`ngModelChange`,function(o){return Jv(p),DN(i.placeholder,o)||(i.placeholder=o),e_(o)}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(o){return Jv(p),DN(i.messageErrorPattern,o)||(i.messageErrorPattern=o),e_(o)}),ug(),p0(),Ac(13,`po-number`,10),RE(`ngModelChange`,function(o){return Jv(p),DN(i.min,o)||(i.min=o),e_(o)}),ug(),p0(),Ac(14,`po-number`,11),RE(`ngModelChange`,function(o){return Jv(p),DN(i.minlength,o)||(i.minlength=o),e_(o)}),ug(),p0(),Ac(15,`po-number`,12),RE(`ngModelChange`,function(o){return Jv(p),DN(i.max,o)||(i.max=o),e_(o)}),ug(),p0(),Ac(16,`po-number`,13),RE(`ngModelChange`,function(o){return Jv(p),DN(i.maxlength,o)||(i.maxlength=o),e_(o)}),ug(),p0(),Ac(17,`po-number`,14),RE(`ngModelChange`,function(o){return Jv(p),DN(i.step,o)||(i.step=o),e_(o)}),ug(),p0(),Ac(18,`po-select`,15),RE(`ngModelChange`,function(o){return Jv(p),DN(i.icon,o)||(i.icon=o),e_(o)}),ug(),p0(),Ac(19,`po-checkbox-group`,16),RE(`ngModelChange`,function(o){return Jv(p),DN(i.properties,o)||(i.properties=o),e_(o)}),ug(),p0(),Ac(20,`po-radio-group`,17),RE(`ngModelChange`,function(o){return Jv(p),DN(i.size,o)||(i.size=o),e_(o)}),ug(),p0(),Ac(21,`div`,2)(22,`po-button`,18),pt(`p-click`,function(){return i.restore()}),ug()()()}r&2&&(TE(`ngModel`,i.number),cE(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.messageErrorPattern)(`p-help`,i.help)(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-max`,i.max)(`p-maxlength`,i.maxlength)(`p-min`,i.min)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-step`,i.step)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),m0(),Hp(3),cE(`p-value`,i.number),Hp(),cE(`p-value`,i.event),Hp(4),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.helperText),m0(),Hp(),TE(`ngModel`,i.placeholder),m0(),Hp(),TE(`ngModel`,i.messageErrorPattern),m0(),Hp(),TE(`ngModel`,i.min),m0(),Hp(),TE(`ngModel`,i.minlength),m0(),Hp(),TE(`ngModel`,i.max),m0(),Hp(),TE(`ngModel`,i.maxlength),m0(),Hp(),TE(`ngModel`,i.step),m0(),Hp(),TE(`ngModel`,i.icon),cE(`p-options`,i.iconOptions),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,roe,kte,poe,hoe],encapsulation:2,changeDetection:1})}return l})();var ge=l=>({"docs-sample-code-tabs":l});var ae=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-number-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Number Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-number-labs/sample-po-number-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-number
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-number-labs/sample-po-number-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-number-labs`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ge,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,oe],encapsulation:2,changeDetection:1})}return l})();var le=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:`São Paulo`},{value:17,label:`Alagoas`},{value:15,label:`Ceará`}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100)}loadICMS(){this.icms=this.state}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-number-calculate`]],standalone:!1,decls:16,vars:9,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`price`,`p-label`,`Price`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantity`,`p-label`,`Quantity`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,`p-required`,``,`p-sort`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icms`,`p-label`,`ICMS %`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`liquid`,`p-label`,`Liquid`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`total`,`p-label`,`Total`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Calculate`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let p=Bx();Ac(0,`h3`),vN(1,`Calculate Tax`),ug(),Kc(2,`po-divider`),Ac(3,`form`,null,0)(5,`div`,1)(6,`po-number`,2),RE(`ngModelChange`,function(o){return Jv(p),DN(i.price,o)||(i.price=o),e_(o)}),ug(),p0(),Ac(7,`po-number`,3),RE(`ngModelChange`,function(o){return Jv(p),DN(i.quantity,o)||(i.quantity=o),e_(o)}),ug(),p0(),ug(),Ac(8,`div`)(9,`po-select`,4),RE(`ngModelChange`,function(o){return Jv(p),DN(i.state,o)||(i.state=o),e_(o)}),pt(`p-change`,function(){return i.loadICMS()}),ug(),p0(),Ac(10,`po-number`,5),RE(`ngModelChange`,function(o){return Jv(p),DN(i.icms,o)||(i.icms=o),e_(o)}),ug(),p0(),Ac(11,`po-number`,6),RE(`ngModelChange`,function(o){return Jv(p),DN(i.liquid,o)||(i.liquid=o),e_(o)}),ug(),p0(),Ac(12,`po-number`,7),RE(`ngModelChange`,function(o){return Jv(p),DN(i.total,o)||(i.total=o),e_(o)}),ug(),p0(),ug(),Ac(13,`div`,1)(14,`po-button`,8),pt(`p-click`,function(){return i.calculate()}),ug(),Ac(15,`po-button`,9),pt(`p-click`,function(){Jv(p);let o=Zx(4);return e_(o.reset())}),ug()()()}if(r&2){let p=Zx(4);Hp(6),TE(`ngModel`,i.price),m0(),Hp(),TE(`ngModel`,i.quantity),m0(),Hp(2),TE(`ngModel`,i.state),cE(`p-options`,i.statesOptions),m0(),Hp(),TE(`ngModel`,i.icms),m0(),Hp(),TE(`ngModel`,i.liquid),m0(),Hp(),TE(`ngModel`,i.total),m0(),Hp(2),cE(`p-disabled`,p.invalid),Hp(),cE(`p-disabled`,p.invalid)}},dependencies:[b9,D9,C9,BP,LP,ni,Ef,roe,poe],encapsulation:2,changeDetection:1})}return l})();var he=l=>({"docs-sample-code-tabs":l});var re=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-number-calculate-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Number - Calculate`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-number-calculate/sample-po-number-calculate.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<h3>Calculate Tax</h3>

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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-number-calculate/sample-po-number-calculate.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-number-calculate`),ug(),Kc(23,`hr`)),r&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,he,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,le],encapsulation:2,changeDetection:1})}return l})();var me=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Hn({type:l,selectors:[[`sample-po-number-doc`]],standalone:!1,decls:1434,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(r,i){r&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoNumberComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ug(),Ac(24,`p`),vN(25,`Importante:`),ug(),Ac(26,`ul`)(27,`li`),vN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ug()(),Ac(29,`h4`),vN(30,`Tokens customizáveis`),ug(),Ac(31,`p`),vN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Kc(33,`br`),vN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ac(35,`code`),vN(36,`.po-input`),ug()(),Ac(37,`blockquote`)(38,`p`),vN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Ac(40,`a`,6),vN(41,`Grid System`),ug(),vN(42,`.`),ug()(),Ac(43,`blockquote`)(44,`p`),vN(45,`Para maiores informações, acesse o guia `),Ac(46,`a`,7),vN(47,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(48,`.`),ug()(),Ac(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),vN(53,`Propriedade`),ug(),Ac(54,`th`),vN(55,`Descrição`),ug(),Ac(56,`th`),vN(57,`Valor Padrão`),ug()()(),Ac(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),vN(62,`Default Values`),ug()(),Kc(63,`td`)(64,`td`),ug(),Ac(65,`tr`)(66,`td`)(67,`code`),vN(68,`--font-family`),ug()(),Ac(69,`td`),vN(70,`Família tipográfica usada`),ug(),Ac(71,`td`)(72,`code`),vN(73,`var(--font-family-theme)`),ug()()(),Ac(74,`tr`)(75,`td`)(76,`code`),vN(77,`--font-size`),ug()(),Ac(78,`td`),vN(79,`Tamanho da fonte`),ug(),Ac(80,`td`)(81,`code`),vN(82,`var(--font-size-default)`),ug()()(),Ac(83,`tr`)(84,`td`)(85,`code`),vN(86,`--text-color-placeholder`),ug()(),Ac(87,`td`),vN(88,`Cor do texto placeholder`),ug(),Ac(89,`td`)(90,`code`),vN(91,`var(--color-neutral-light-30)`),ug()()(),Ac(92,`tr`)(93,`td`)(94,`code`),vN(95,`--color`),ug()(),Ac(96,`td`),vN(97,`Cor pincipal do input`),ug(),Ac(98,`td`)(99,`code`),vN(100,`var(--color-neutral-dark-70)`),ug()()(),Ac(101,`tr`)(102,`td`)(103,`code`),vN(104,`--background`),ug()(),Ac(105,`td`),vN(106,`Cor de background`),ug(),Ac(107,`td`)(108,`code`),vN(109,`var(--color-neutral-light-05)`),ug()()(),Ac(110,`tr`)(111,`td`)(112,`code`),vN(113,`--padding`),ug()(),Ac(114,`td`),vN(115,`Preenchimento`),ug(),Ac(116,`td`)(117,`code`),vN(118,`0 0.5rem`),ug()()(),Ac(119,`tr`)(120,`td`)(121,`code`),vN(122,`--text-color`),ug()(),Ac(123,`td`),vN(124,`Cor do texto`),ug(),Ac(125,`td`)(126,`code`),vN(127,`var(--color-neutral-dark-90)`),ug()()(),Ac(128,`tr`)(129,`td`)(130,`code`),vN(131,`--field-container-title-justify`),ug()(),Ac(132,`td`),vN(133,`Alinhamento horizontal do título (`),Ac(134,`code`),vN(135,`justify-content`),ug(),vN(136,`)`),ug(),Ac(137,`td`)(138,`code`),vN(139,`space-between`),ug()()(),Ac(140,`tr`)(141,`td`)(142,`code`),vN(143,`--field-container-title-flex`),ug()(),Ac(144,`td`),vN(145,`Flex do título (`),Ac(146,`code`),vN(147,`flex`),ug(),vN(148,`)`),ug(),Ac(149,`td`)(150,`code`),vN(151,`1 auto`),ug()()(),Ac(152,`tr`)(153,`td`)(154,`strong`),vN(155,`Hover`),ug()(),Kc(156,`td`)(157,`td`),ug(),Ac(158,`tr`)(159,`td`)(160,`code`),vN(161,`--color-hover`),ug()(),Ac(162,`td`),vN(163,`Cor principal no estado hover`),ug(),Ac(164,`td`)(165,`code`),vN(166,`var(--color-brand-01-dark)`),ug()()(),Ac(167,`tr`)(168,`td`)(169,`code`),vN(170,`--background-hover`),ug()(),Ac(171,`td`),vN(172,`Cor de background no estado hover`),ug(),Ac(173,`td`)(174,`code`),vN(175,`var(--color-brand-01-lightest)`),ug()()(),Ac(176,`tr`)(177,`td`)(178,`strong`),vN(179,`Focused`),ug()(),Kc(180,`td`)(181,`td`),ug(),Ac(182,`tr`)(183,`td`)(184,`code`),vN(185,`--color-focused`),ug()(),Ac(186,`td`),vN(187,`Cor principal no estado de focus`),ug(),Ac(188,`td`)(189,`code`),vN(190,`var(--color-action-default)`),ug()()(),Ac(191,`tr`)(192,`td`)(193,`code`),vN(194,`--outline-color-focused`),ug()(),Ac(195,`td`),vN(196,`Cor do outline do estado de focus`),ug(),Ac(197,`td`)(198,`code`),vN(199,`var(--color-action-focus)`),ug()()(),Ac(200,`tr`)(201,`td`)(202,`strong`),vN(203,`Disabled`),ug()(),Kc(204,`td`)(205,`td`),ug(),Ac(206,`tr`)(207,`td`)(208,`code`),vN(209,`--color-disabled`),ug()(),Ac(210,`td`),vN(211,`Cor principal no estado disabled`),ug(),Ac(212,`td`)(213,`code`),vN(214,`var(--color-neutral-light-30)`),ug()()(),Ac(215,`tr`)(216,`td`)(217,`code`),vN(218,`--background-disabled`),ug()(),Ac(219,`td`),vN(220,`Cor de background no estado disabled`),ug(),Ac(221,`td`)(222,`code`),vN(223,`var(--color-neutral-light-20)`),ug()()(),Ac(224,`tr`)(225,`td`)(226,`code`),vN(227,`--text-color-disabled`),ug()(),Ac(228,`td`),vN(229,`Cor do texto no estado disabled`),ug(),Ac(230,`td`)(231,`code`),vN(232,`var(--color-neutral-dark-70)`),ug()()()()(),Ac(233,`p`),Kc(234,`br`),vN(235,` O `),Ac(236,`code`),vN(237,`po-number`),ug(),vN(238,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),ug()(),Ac(239,`div`,8)(240,`h4`,9),vN(241,`Seletor`),ug(),Ac(242,`pre`,10),vN(243,`<po-number
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
`),ug()(),Ac(244,`h4`,11),vN(245,`Propriedades`),ug(),Ac(246,`table`,12)(247,`tr`,13)(248,`th`,14),vN(249,`Nome`),ug(),Ac(250,`th`,14),vN(251,`Tipo`),ug(),Ac(252,`th`,14),vN(253,`Padrão`),ug(),Ac(254,`th`,14),vN(255,`Descrição`),ug()(),Ac(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),vN(260,` (p-additional-help)`),Kc(261,`br`),ug()(),Ac(262,`div`,19),vN(263,`Deprecated`),ug()(),Ac(264,`td`,20)(265,`code`,21),vN(266,`EventEmitter`),ug()(),Ac(267,`td`,22),vN(268,`-`),ug(),Ac(269,`td`,23)(270,`em`)(271,`strong`),vN(272,`(opcional)`),ug()(),Ac(273,`p`),vN(274,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(275,`blockquote`)(276,`p`),vN(277,`Essa propriedade está `),Ac(278,`strong`),vN(279,`depreciada`),ug(),vN(280,` e será removida na versão `),Ac(281,`code`),vN(282,`23.x.x`),ug(),vN(283,`. Recomendamos utilizar a propriedade `),Ac(284,`code`),vN(285,`p-helper`),ug(),vN(286,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(287,`tr`,15)(288,`td`,16)(289,`div`,24)(290,`span`,25),vN(291,` p-additional-help-tooltip`),Kc(292,`br`),ug()(),Ac(293,`div`,19),vN(294,`Deprecated`),ug()(),Ac(295,`td`,20)(296,`code`,26),vN(297,`string`),ug()(),Ac(298,`td`,22),vN(299,`-`),ug(),Ac(300,`td`,23)(301,`em`)(302,`strong`),vN(303,`(opcional)`),ug()(),Ac(304,`p`),vN(305,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(306,`code`),vN(307,`po-helper`),ug(),vN(308,`.
`),Ac(309,`strong`),vN(310,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(311,`blockquote`)(312,`p`),vN(313,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(314,`blockquote`)(315,`p`),vN(316,`Essa propriedade está `),Ac(317,`strong`),vN(318,`depreciada`),ug(),vN(319,` e será removida na versão `),Ac(320,`code`),vN(321,`23.x.x`),ug(),vN(322,`. Recomendamos utilizar a propriedade `),Ac(323,`code`),vN(324,`p-helper`),ug(),vN(325,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(326,`tr`,15)(327,`td`,16)(328,`div`,24)(329,`span`,25),vN(330,` p-append-in-body`),Kc(331,`br`),ug()()(),Ac(332,`td`,20)(333,`code`,27),vN(334,`boolean`),ug()(),Ac(335,`td`,22)(336,`p`)(337,`code`),vN(338,`false`),ug()()(),Ac(339,`td`,23)(340,`em`)(341,`strong`),vN(342,`(opcional)`),ug()(),Ac(343,`p`),vN(344,`Define que o popover (`),Ac(345,`code`),vN(346,`p-helper`),ug(),vN(347,` e/ou `),Ac(348,`code`),vN(349,`p-error-limit`),ug(),vN(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ug(),Ac(351,`blockquote`)(352,`p`),vN(353,`Quando utilizado com `),Ac(354,`code`),vN(355,`p-helper`),ug(),vN(356,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(357,`tr`,15)(358,`td`,16)(359,`div`,24)(360,`span`,25),vN(361,` p-auto-focus`),Kc(362,`br`),ug()()(),Ac(363,`td`,20)(364,`code`,27),vN(365,`boolean`),ug()(),Ac(366,`td`,22)(367,`p`)(368,`code`),vN(369,`false`),ug()()(),Ac(370,`td`,23)(371,`em`)(372,`strong`),vN(373,`(opcional)`),ug()(),Ac(374,`p`),vN(375,`Aplica foco no elemento ao ser iniciado.`),ug(),Ac(376,`blockquote`)(377,`p`),vN(378,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ug()()()(),Ac(379,`tr`,15)(380,`td`,16)(381,`div`,17)(382,`span`,18),vN(383,` (p-blur)`),Kc(384,`br`),ug()()(),Ac(385,`td`,20)(386,`code`,21),vN(387,`EventEmitter`),ug()(),Ac(388,`td`,22),vN(389,`-`),ug(),Ac(390,`td`,23)(391,`em`)(392,`strong`),vN(393,`(opcional)`),ug()(),Ac(394,`p`),vN(395,`Evento disparado ao sair do campo.`),ug()()(),Ac(396,`tr`,15)(397,`td`,16)(398,`div`,17)(399,`span`,18),vN(400,` (p-change)`),Kc(401,`br`),ug()()(),Ac(402,`td`,20)(403,`code`,21),vN(404,`EventEmitter`),ug()(),Ac(405,`td`,22),vN(406,`-`),ug(),Ac(407,`td`,23)(408,`em`)(409,`strong`),vN(410,`(opcional)`),ug()(),Ac(411,`p`),vN(412,`Evento disparado ao alterar valor e deixar o campo.`),ug()()(),Ac(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),vN(417,` (p-change-model)`),Kc(418,`br`),ug()()(),Ac(419,`td`,20)(420,`code`,21),vN(421,`EventEmitter`),ug()(),Ac(422,`td`,22),vN(423,`-`),ug(),Ac(424,`td`,23)(425,`em`)(426,`strong`),vN(427,`(opcional)`),ug()(),Ac(428,`p`),vN(429,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(430,`code`),vN(431,`setValue`),ug(),vN(432,`, `),Ac(433,`code`),vN(434,`patchValue`),ug(),vN(435,`, carregamento assíncrono).`),ug(),Ac(436,`p`),vN(437,`Diferentemente do `),Ac(438,`code`),vN(439,`p-change`),ug(),vN(440,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(441,`code`),vN(442,`p-change-model`),ug(),vN(443,` cobre todos os cenários de alteração de valor.`),ug(),Ac(444,`p`),vN(445,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(446,`tr`,15)(447,`td`,16)(448,`div`,24)(449,`span`,25),vN(450,`p-clean`),Kc(451,`br`),ug()()(),Ac(452,`td`,20)(453,`code`,27),vN(454,`boolean`),ug()(),Ac(455,`td`,22),vN(456,`-`),ug(),Ac(457,`td`,23)(458,`em`)(459,`strong`),vN(460,`(opcional)`),ug()(),Ac(461,`p`),vN(462,`Se verdadeiro, o campo receberá um botão para ser limpo.`),ug()()(),Ac(463,`tr`,15)(464,`td`,16)(465,`div`,24)(466,`span`,25),vN(467,` p-compact-label`),Kc(468,`br`),ug()()(),Ac(469,`td`,20)(470,`code`,27),vN(471,`boolean`),ug()(),Ac(472,`td`,22)(473,`p`)(474,`code`),vN(475,`false`),ug()()(),Ac(476,`td`,23)(477,`em`)(478,`strong`),vN(479,`(opcional)`),ug()(),Ac(480,`p`),vN(481,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(482,`p`),vN(483,`Quando habilitado (`),Ac(484,`code`),vN(485,`true`),ug(),vN(486,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(487,`ul`)(488,`li`)(489,`code`),vN(490,`po-label`),ug()(),Ac(491,`li`)(492,`code`),vN(493,`p-requirement (showRequired)`),ug()(),Ac(494,`li`)(495,`code`),vN(496,`po-helper`),ug()()(),Ac(497,`p`),vN(498,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(499,`p`),vN(500,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(501,`ul`)(502,`li`)(503,`code`),vN(504,`--field-container-title-justify`),ug()(),Ac(505,`li`)(506,`code`),vN(507,`--field-container-title-flex`),ug()()(),Ac(508,`p`),vN(509,`Exemplo:`),ug(),Ac(510,`pre`)(511,`code`),vN(512,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(513,`p`),vN(514,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(515,`tr`,15)(516,`td`,16)(517,`div`,24)(518,`span`,25),vN(519,`p-disabled`),Kc(520,`br`),ug()()(),Ac(521,`td`,20)(522,`code`,27),vN(523,`boolean`),ug()(),Ac(524,`td`,22)(525,`p`)(526,`code`),vN(527,`false`),ug()()(),Ac(528,`td`,23)(529,`em`)(530,`strong`),vN(531,`(opcional)`),ug()(),Ac(532,`p`),vN(533,`Se verdadeiro, desabilita o campo.`),ug()()(),Ac(534,`tr`,15)(535,`td`,16)(536,`div`,24)(537,`span`,25),vN(538,` p-emit-all-changes`),Kc(539,`br`),ug()()(),Ac(540,`td`,20)(541,`code`,27),vN(542,`boolean`),ug()(),Ac(543,`td`,22)(544,`p`)(545,`code`),vN(546,`false`),ug()()(),Ac(547,`td`,23)(548,`em`)(549,`strong`),vN(550,`(opcional)`),ug()(),Ac(551,`p`),vN(552,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),ug()()(),Ac(553,`tr`,15)(554,`td`,16)(555,`div`,17)(556,`span`,18),vN(557,` (p-enter)`),Kc(558,`br`),ug()()(),Ac(559,`td`,20)(560,`code`,21),vN(561,`EventEmitter`),ug()(),Ac(562,`td`,22),vN(563,`-`),ug(),Ac(564,`td`,23)(565,`em`)(566,`strong`),vN(567,`(opcional)`),ug()(),Ac(568,`p`),vN(569,`Evento disparado ao entrar do campo.`),ug()()(),Ac(570,`tr`,15)(571,`td`,16)(572,`div`,24)(573,`span`,25),vN(574,` p-error-async-properties`),Kc(575,`br`),ug()()(),Ac(576,`td`,20)(577,`code`,28),vN(578,`ErrorAsyncProperties`),ug()(),Ac(579,`td`,22),vN(580,`-`),ug(),Ac(581,`td`,23)(582,`em`)(583,`strong`),vN(584,`(opcional)`),ug()(),Ac(585,`p`),vN(586,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Ac(587,`code`),vN(588,`Reactive Forms`),ug(),vN(589,`. Em formulários reativos, pode-se utilizar o próprio `),Ac(590,`code`),vN(591,`asyncValidators`),ug(),vN(592,`.`),ug()()(),Ac(593,`tr`,15)(594,`td`,16)(595,`div`,24)(596,`span`,25),vN(597,` p-error-limit`),Kc(598,`br`),ug()()(),Ac(599,`td`,20)(600,`code`,27),vN(601,`boolean`),ug()(),Ac(602,`td`,22)(603,`p`)(604,`code`),vN(605,`false`),ug()()(),Ac(606,`td`,23)(607,`em`)(608,`strong`),vN(609,`(opcional)`),ug()(),Ac(610,`p`),vN(611,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(612,`blockquote`)(613,`p`),vN(614,`Caso essa propriedade seja definida como `),Ac(615,`code`),vN(616,`true`),ug(),vN(617,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()()()(),Ac(618,`tr`,15)(619,`td`,16)(620,`div`,24)(621,`span`,25),vN(622,` p-error-pattern`),Kc(623,`br`),ug()()(),Ac(624,`td`,20)(625,`code`,26),vN(626,`string`),ug()(),Ac(627,`td`,22),vN(628,`-`),ug(),Ac(629,`td`,23)(630,`em`)(631,`strong`),vN(632,`(opcional)`),ug()(),Ac(633,`p`),vN(634,`Mensagem que será apresentada quando o `),Ac(635,`code`),vN(636,`pattern`),ug(),vN(637,` ou a máscara não for satisfeita.`),ug(),Ac(638,`blockquote`)(639,`p`),vN(640,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Ac(641,`code`),vN(642,`p-required-field-error-message`),ug(),vN(643,` em conjunto.`),ug()()()(),Ac(644,`tr`,15)(645,`td`,16)(646,`div`,24)(647,`span`,25),vN(648,` p-help`),Kc(649,`br`),ug()()(),Ac(650,`td`,20)(651,`code`,26),vN(652,`string`),ug()(),Ac(653,`td`,22),vN(654,`-`),ug(),Ac(655,`td`,23)(656,`em`)(657,`strong`),vN(658,`(opcional)`),ug()(),Ac(659,`p`),vN(660,`Texto de apoio do campo.`),ug()()(),Ac(661,`tr`,15)(662,`td`,16)(663,`div`,24)(664,`span`,25),vN(665,` p-icon`),Kc(666,`br`),ug()()(),Ac(667,`td`,20)(668,`code`,26),vN(669,`string `),ug(),Ac(670,`code`,29),vN(671,` TemplateRef<void>`),ug()(),Ac(672,`td`,22),vN(673,`-`),ug(),Ac(674,`td`,23)(675,`em`)(676,`strong`),vN(677,`(opcional)`),ug()(),Ac(678,`p`),vN(679,`Define o ícone que será exibido no início do campo.`),ug(),Ac(680,`p`),vN(681,`É possível usar qualquer um dos ícones da `),Ac(682,`a`,30),vN(683,`Biblioteca de ícones`),ug(),vN(684,`. conforme exemplo abaixo:`),ug(),Ac(685,`pre`)(686,`code`),vN(687,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),ug()(),Ac(688,`p`),vN(689,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(690,`em`),vN(691,`Font Awesome`),ug(),vN(692,`, da seguinte forma:`),ug(),Ac(693,`pre`)(694,`code`),vN(695,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),ug()(),Ac(696,`p`),vN(697,`Outra opção seria a customização do ícone através do `),Ac(698,`code`),vN(699,`TemplateRef`),ug(),vN(700,`, conforme exemplo abaixo:`),ug(),Ac(701,`pre`)(702,`code`),vN(703,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ug()(),Ac(704,`blockquote`)(705,`p`),vN(706,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ac(707,`code`),vN(708,`font-size: inherit`),ug(),vN(709,` caso o ícone utilizado não aplique-o.`),ug()()()(),Ac(710,`tr`,15)(711,`td`,16)(712,`div`,17)(713,`span`,18),vN(714,` (p-keydown)`),Kc(715,`br`),ug()()(),Ac(716,`td`,20)(717,`code`,21),vN(718,`EventEmitter`),ug()(),Ac(719,`td`,22),vN(720,`-`),ug(),Ac(721,`td`,23)(722,`em`)(723,`strong`),vN(724,`(opcional)`),ug()(),Ac(725,`p`),vN(726,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(727,`code`),vN(728,`KeyboardEvent`),ug(),vN(729,` com informações sobre a tecla.`),ug()()(),Ac(730,`tr`,15)(731,`td`,16)(732,`div`,24)(733,`span`,25),vN(734,` p-label`),Kc(735,`br`),ug()()(),Ac(736,`td`,20)(737,`code`,26),vN(738,`string`),ug()(),Ac(739,`td`,22),vN(740,`-`),ug(),Ac(741,`td`,23)(742,`em`)(743,`strong`),vN(744,`(opcional)`),ug()(),Ac(745,`p`),vN(746,`Rótulo do campo.`),ug()()(),Ac(747,`tr`,15)(748,`td`,16)(749,`div`,24)(750,`span`,25),vN(751,` p-label-text-wrap`),Kc(752,`br`),ug()()(),Ac(753,`td`,20)(754,`code`,27),vN(755,`boolean`),ug()(),Ac(756,`td`,22)(757,`p`)(758,`code`),vN(759,`false`),ug()()(),Ac(760,`td`,23)(761,`em`)(762,`strong`),vN(763,`(opcional)`),ug()(),Ac(764,`p`),vN(765,`Habilita a quebra automática do texto da propriedade `),Ac(766,`code`),vN(767,`p-label`),ug(),vN(768,`. Quando `),Ac(769,`code`),vN(770,`p-label-text-wrap`),ug(),vN(771,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(772,`tr`,15)(773,`td`,16)(774,`div`,24)(775,`span`,25),vN(776,` p-loading`),Kc(777,`br`),ug()()(),Ac(778,`td`,20)(779,`code`,27),vN(780,`boolean`),ug()(),Ac(781,`td`,22)(782,`p`)(783,`code`),vN(784,`false`),ug()()(),Ac(785,`td`,23)(786,`em`)(787,`strong`),vN(788,`(opcional)`),ug()(),Ac(789,`p`),vN(790,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug()()(),Ac(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),vN(795,`p-mask`),Kc(796,`br`),ug()()(),Ac(797,`td`,20)(798,`code`,26),vN(799,`string`),ug()(),Ac(800,`td`,22),vN(801,`-`),ug(),Ac(802,`td`,23)(803,`em`)(804,`strong`),vN(805,`(opcional)`),ug()(),Ac(806,`p`),vN(807,`Indica uma máscara para o campo, porém é incompatível com o `),Ac(808,`code`),vN(809,`po-number`),ug(),vN(810,`.`),ug(),Ac(811,`blockquote`)(812,`p`)(813,`strong`),vN(814,`Componentes compatíveis:`),ug(),Ac(815,`code`),vN(816,`po-input`),ug(),vN(817,`,`),Ac(818,`code`),vN(819,`po-decimal`),ug(),vN(820,`.`),ug()()()(),Ac(821,`tr`,15)(822,`td`,16)(823,`div`,24)(824,`span`,25),vN(825,`p-mask-format-model`),Kc(826,`br`),ug()()(),Ac(827,`td`,20)(828,`code`,27),vN(829,`boolean`),ug()(),Ac(830,`td`,22)(831,`p`)(832,`code`),vN(833,`false`),ug()()(),Ac(834,`td`,23)(835,`em`)(836,`strong`),vN(837,`(opcional)`),ug()(),Ac(838,`p`),vN(839,`Indica se o `),Ac(840,`code`),vN(841,`model`),ug(),vN(842,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),ug()()(),Ac(843,`tr`,15)(844,`td`,16)(845,`div`,24)(846,`span`,25),vN(847,` p-mask-no-length-validation`),Kc(848,`br`),ug()()(),Ac(849,`td`,20)(850,`code`,27),vN(851,`boolean`),ug()(),Ac(852,`td`,22)(853,`p`)(854,`code`),vN(855,`false`),ug()()(),Ac(856,`td`,23)(857,`p`),vN(858,`Controla como o componente aplica as validações de comprimento mínimo (`),Ac(859,`code`),vN(860,`minLength`),ug(),vN(861,`) e máximo (`),Ac(862,`code`),vN(863,`maxLength`),ug(),vN(864,`) quando há uma máscara (`),Ac(865,`code`),vN(866,`p-mask`),ug(),vN(867,`) definida.`),ug(),Ac(868,`ul`)(869,`li`),vN(870,`Quando `),Ac(871,`code`),vN(872,`true`),ug(),vN(873,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ug(),Ac(874,`li`),vN(875,`Quando `),Ac(876,`code`),vN(877,`false`),ug(),vN(878,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ug()(),Ac(879,`blockquote`)(880,`p`),vN(881,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ac(882,`code`),vN(883,`p-mask-format-model`),ug(),vN(884,`.`),ug()(),Ac(885,`p`),vN(886,`Exemplo:`),ug(),Ac(887,`pre`)(888,`code`),vN(889,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ug()(),Ac(890,`ul`)(891,`li`),vN(892,`Entrada: `),Ac(893,`code`),vN(894,`123-456`),ug(),vN(895,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Ac(896,`code`),vN(897,`-`),ug(),vN(898,`.`),ug()()()(),Ac(899,`tr`,15)(900,`td`,16)(901,`div`,24)(902,`span`,25),vN(903,`p-max`),Kc(904,`br`),ug()()(),Ac(905,`td`,20)(906,`code`,31),vN(907,`number`),ug()(),Ac(908,`td`,22),vN(909,`-`),ug(),Ac(910,`td`,23)(911,`em`)(912,`strong`),vN(913,`(opcional)`),ug()(),Ac(914,`p`),vN(915,`Valor máximo.`),ug(),Ac(916,`blockquote`)(917,`p`),vN(918,`Quando o valor máximo for um número com decimais aconselha-se utilizar junto da propriedade `),Ac(919,`code`),vN(920,`p-step`),ug(),vN(921,` também passando a ela um valor decimal.`),ug()()()(),Ac(922,`tr`,15)(923,`td`,16)(924,`div`,24)(925,`span`,25),vN(926,` p-maxlength`),Kc(927,`br`),ug()()(),Ac(928,`td`,20)(929,`code`,31),vN(930,`number`),ug()(),Ac(931,`td`,22),vN(932,`-`),ug(),Ac(933,`td`,23)(934,`em`)(935,`strong`),vN(936,`(opcional)`),ug()(),Ac(937,`p`),vN(938,`Indica a quantidade máxima de caracteres que o campo aceita.`),ug()()(),Ac(939,`tr`,15)(940,`td`,16)(941,`div`,24)(942,`span`,25),vN(943,`p-min`),Kc(944,`br`),ug()()(),Ac(945,`td`,20)(946,`code`,31),vN(947,`number`),ug()(),Ac(948,`td`,22),vN(949,`-`),ug(),Ac(950,`td`,23)(951,`em`)(952,`strong`),vN(953,`(opcional)`),ug()(),Ac(954,`p`),vN(955,`Valor mínimo.`),ug(),Ac(956,`blockquote`)(957,`p`),vN(958,`Quando o valor mínimo for um número com decimais aconselha-se utilizar junto da propriedade `),Ac(959,`code`),vN(960,`p-step`),ug(),vN(961,` também passando a ela um valor decimal.`),ug()()()(),Ac(962,`tr`,15)(963,`td`,16)(964,`div`,24)(965,`span`,25),vN(966,` p-minlength`),Kc(967,`br`),ug()()(),Ac(968,`td`,20)(969,`code`,31),vN(970,`number`),ug()(),Ac(971,`td`,22),vN(972,`-`),ug(),Ac(973,`td`,23)(974,`em`)(975,`strong`),vN(976,`(opcional)`),ug()(),Ac(977,`p`),vN(978,`Indica a quantidade mínima de caracteres que o campo aceita.`),ug()()(),Ac(979,`tr`,15)(980,`td`,16)(981,`div`,24)(982,`span`,25),vN(983,` name`),Kc(984,`br`),ug()()(),Ac(985,`td`,20)(986,`code`,26),vN(987,`string`),ug()(),Ac(988,`td`,22),vN(989,`-`),ug(),Ac(990,`td`,23)(991,`p`),vN(992,`Nome e identificador do campo.`),ug()()(),Ac(993,`tr`,15)(994,`td`,16)(995,`div`,24)(996,`span`,25),vN(997,` p-no-autocomplete`),Kc(998,`br`),ug()()(),Ac(999,`td`,20)(1e3,`code`,27),vN(1001,`boolean`),ug()(),Ac(1002,`td`,22)(1003,`p`)(1004,`code`),vN(1005,`false`),ug()()(),Ac(1006,`td`,23)(1007,`em`)(1008,`strong`),vN(1009,`(opcional)`),ug()(),Ac(1010,`p`),vN(1011,`Define a propriedade nativa `),Ac(1012,`code`),vN(1013,`autocomplete`),ug(),vN(1014,` do campo como `),Ac(1015,`code`),vN(1016,`off`),ug(),vN(1017,`.`),ug(),Ac(1018,`blockquote`)(1019,`p`),vN(1020,`No componente `),Ac(1021,`code`),vN(1022,`po-password`),ug(),vN(1023,` será definido como `),Ac(1024,`code`),vN(1025,`new-password`),ug(),vN(1026,`.`),ug()(),Ac(1027,`p`),vN(1028,`Nos componentes `),Ac(1029,`code`),vN(1030,`po-password`),ug(),vN(1031,` e `),Ac(1032,`code`),vN(1033,`po-login`),ug(),vN(1034,` o valor padrão será `),Ac(1035,`code`),vN(1036,`true`),ug(),vN(1037,`.`),ug()()(),Ac(1038,`tr`,15)(1039,`td`,16)(1040,`div`,24)(1041,`span`,25),vN(1042,` p-optional`),Kc(1043,`br`),ug()()(),Ac(1044,`td`,20)(1045,`code`,27),vN(1046,`boolean`),ug()(),Ac(1047,`td`,22)(1048,`p`)(1049,`code`),vN(1050,`false`),ug()()(),Ac(1051,`td`,23)(1052,`em`)(1053,`strong`),vN(1054,`(opcional)`),ug()(),Ac(1055,`p`),vN(1056,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(1057,`blockquote`)(1058,`p`),vN(1059,`Não será exibida a indicação se:`),ug()(),Ac(1060,`ul`)(1061,`li`),vN(1062,`O campo conter `),Ac(1063,`code`),vN(1064,`p-required`),ug(),vN(1065,`;`),ug(),Ac(1066,`li`),vN(1067,`Não possuir `),Ac(1068,`code`),vN(1069,`p-help`),ug(),vN(1070,` e/ou `),Ac(1071,`code`),vN(1072,`p-label`),ug(),vN(1073,`.`),ug()()()(),Ac(1074,`tr`,15)(1075,`td`,16)(1076,`div`,24)(1077,`span`,25),vN(1078,`p-pattern`),Kc(1079,`br`),ug()()(),Ac(1080,`td`,20)(1081,`code`,26),vN(1082,`string`),ug()(),Ac(1083,`td`,22),vN(1084,`-`),ug(),Ac(1085,`td`,23)(1086,`em`)(1087,`strong`),vN(1088,`(opcional)`),ug()(),Ac(1089,`p`),vN(1090,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Ac(1091,`code`),vN(1092,`(p-mask)`),ug(),vN(1093,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ug()()(),Ac(1094,`tr`,15)(1095,`td`,16)(1096,`div`,24)(1097,`span`,25),vN(1098,` p-placeholder`),Kc(1099,`br`),ug()()(),Ac(1100,`td`,20)(1101,`code`,26),vN(1102,`string`),ug()(),Ac(1103,`td`,22)(1104,`p`),vN(1105,`''`),ug()(),Ac(1106,`td`,23)(1107,`em`)(1108,`strong`),vN(1109,`(opcional)`),ug()(),Ac(1110,`p`),vN(1111,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ug()()(),Ac(1112,`tr`,15)(1113,`td`,16)(1114,`div`,24)(1115,`span`,25),vN(1116,` p-helper`),Kc(1117,`br`),ug()()(),Ac(1118,`td`,20)(1119,`code`,32),vN(1120,`PoHelperOptions `),ug(),Ac(1121,`code`,26),vN(1122,` string`),ug()(),Ac(1123,`td`,22),vN(1124,`-`),ug(),Ac(1125,`td`,23)(1126,`em`)(1127,`strong`),vN(1128,`(opcional)`),ug()(),Ac(1129,`p`),vN(1130,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(1131,`code`),vN(1132,`p-label`),ug(),vN(1133,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(1134,`code`),vN(1135,`p-label`),ug(),vN(1136,`.`),ug(),Ac(1137,`blockquote`)(1138,`p`),vN(1139,`Para mais informações acesse: `),Ac(1140,`a`,33),vN(1141,`https://po-ui.io/documentation/po-helper`),ug(),vN(1142,`.`),ug()(),Ac(1143,`blockquote`)(1144,`p`),vN(1145,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(1146,`code`),vN(1147,`p-additional-help-tooltip`),ug(),vN(1148,` e `),Ac(1149,`code`),vN(1150,`p-additional-help`),ug(),vN(1151,`) será ignorado.`),ug()()()(),Ac(1152,`tr`,15)(1153,`td`,16)(1154,`div`,24)(1155,`span`,25),vN(1156,`p-readonly`),Kc(1157,`br`),ug()()(),Ac(1158,`td`,20)(1159,`code`,27),vN(1160,`boolean`),ug()(),Ac(1161,`td`,22),vN(1162,`-`),ug(),Ac(1163,`td`,23)(1164,`em`)(1165,`strong`),vN(1166,`(opcional)`),ug()(),Ac(1167,`p`),vN(1168,`Indica que o campo será somente leitura.`),ug()()(),Ac(1169,`tr`,15)(1170,`td`,16)(1171,`div`,24)(1172,`span`,25),vN(1173,`p-required`),Kc(1174,`br`),ug()()(),Ac(1175,`td`,20)(1176,`code`,27),vN(1177,`boolean`),ug()(),Ac(1178,`td`,22)(1179,`p`)(1180,`code`),vN(1181,`false`),ug()()(),Ac(1182,`td`,23)(1183,`em`)(1184,`strong`),vN(1185,`(opcional)`),ug()(),Ac(1186,`p`),vN(1187,`Define que o campo será obrigatório.`),ug(),Ac(1188,`blockquote`)(1189,`p`),vN(1190,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ac(1191,`code`),vN(1192,`(p-disabled)`),ug(),vN(1193,`.`),ug()()()(),Ac(1194,`tr`,15)(1195,`td`,16)(1196,`div`,24)(1197,`span`,25),vN(1198,` p-required-field-error-message`),Kc(1199,`br`),ug()()(),Ac(1200,`td`,20)(1201,`code`,27),vN(1202,`boolean`),ug()(),Ac(1203,`td`,22)(1204,`p`)(1205,`code`),vN(1206,`false`),ug()()(),Ac(1207,`td`,23)(1208,`em`)(1209,`strong`),vN(1210,`(opcional)`),ug()(),Ac(1211,`p`),vN(1212,`Exibe a mensagem setada na propriedade `),Ac(1213,`code`),vN(1214,`p-error-pattern`),ug(),vN(1215,` se o campo estiver vazio e for requerido.`),ug(),Ac(1216,`blockquote`)(1217,`p`),vN(1218,`Necessário que a propriedade `),Ac(1219,`code`),vN(1220,`p-required`),ug(),vN(1221,` esteja habilitada.`),ug()()()(),Ac(1222,`tr`,15)(1223,`td`,16)(1224,`div`,24)(1225,`span`,25),vN(1226,` p-show-required`),Kc(1227,`br`),ug()()(),Ac(1228,`td`,20)(1229,`code`,27),vN(1230,`boolean`),ug()(),Ac(1231,`td`,22),vN(1232,`-`),ug(),Ac(1233,`td`,23)(1234,`p`),vN(1235,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(1236,`blockquote`)(1237,`p`),vN(1238,`Não será exibida a indicação se:`),ug()(),Ac(1239,`ul`)(1240,`li`),vN(1241,`Não possuir `),Ac(1242,`code`),vN(1243,`p-help`),ug(),vN(1244,` e/ou `),Ac(1245,`code`),vN(1246,`p-label`),ug(),vN(1247,`.`),ug()()()(),Ac(1248,`tr`,15)(1249,`td`,16)(1250,`div`,24)(1251,`span`,25),vN(1252,` p-size`),Kc(1253,`br`),ug()()(),Ac(1254,`td`,20)(1255,`code`,26),vN(1256,`string`),ug()(),Ac(1257,`td`,22)(1258,`p`)(1259,`code`),vN(1260,`medium`),ug()()(),Ac(1261,`td`,23)(1262,`em`)(1263,`strong`),vN(1264,`(opcional)`),ug()(),Ac(1265,`p`),vN(1266,`Define o tamanho do componente:`),ug(),Ac(1267,`ul`)(1268,`li`)(1269,`code`),vN(1270,`small`),ug(),vN(1271,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(1272,`li`)(1273,`code`),vN(1274,`medium`),ug(),vN(1275,`: altura do input como 44px.`),ug()(),Ac(1276,`blockquote`)(1277,`p`),vN(1278,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(1279,`code`),vN(1280,`medium`),ug(),vN(1281,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(1282,`a`,34),vN(1283,`po-theme`),ug(),vN(1284,`.`),ug()()()(),Ac(1285,`tr`,15)(1286,`td`,16)(1287,`div`,24)(1288,`span`,25),vN(1289,` p-step`),Kc(1290,`br`),ug()()(),Ac(1291,`td`,20)(1292,`code`,26),vN(1293,`string`),ug()(),Ac(1294,`td`,22)(1295,`p`),vN(1296,`1`),ug()(),Ac(1297,`td`,23)(1298,`em`)(1299,`strong`),vN(1300,`(opcional)`),ug()(),Ac(1301,`p`),vN(1302,`Intervalo.`),ug()()(),Ac(1303,`tr`,15)(1304,`td`,16)(1305,`div`,24)(1306,`span`,25),vN(1307,` p-upper-case`),Kc(1308,`br`),ug()()(),Ac(1309,`td`,20)(1310,`code`,27),vN(1311,`boolean`),ug()(),Ac(1312,`td`,22),vN(1313,`-`),ug(),Ac(1314,`td`,23)(1315,`p`),vN(1316,`Converte o conteúdo do campo em maiúsulo automaticamente.`),ug()()()(),Ac(1317,`h3`,11),vN(1318,`Métodos`),ug(),Ac(1319,`table`,35)(1320,`tr`,15)(1321,`th`,36)(1322,`div`,24)(1323,`h4`)(1324,`span`,25),vN(1325,` showAdditionalHelp `),ug()()()()(),Ac(1326,`tr`,23)(1327,`td`,23)(1328,`p`),vN(1329,`Método que exibe `),Ac(1330,`code`),vN(1331,`p-helper`),ug(),vN(1332,` ou executa a ação definida em `),Ac(1333,`code`),vN(1334,`p-helper{eventOnClick}`),ug(),vN(1335,` ou em `),Ac(1336,`code`),vN(1337,`p-additionalHelp`),ug(),vN(1338,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(1339,`code`),vN(1340,`p-keydown`),ug(),vN(1341,`.`),ug(),Ac(1342,`blockquote`)(1343,`p`),vN(1344,`Exibe ou oculta o conteúdo do componente `),Ac(1345,`code`),vN(1346,`po-helper`),ug(),vN(1347,` quando o componente estiver com foco.`),ug()(),Ac(1348,`pre`)(1349,`code`),vN(1350,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ug()(),Ac(1351,`pre`)(1352,`code`),vN(1353,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(1354,`br`),Ac(1355,`table`,35)(1356,`tr`,15)(1357,`th`,36)(1358,`div`,24)(1359,`h4`)(1360,`span`,25),vN(1361,` focus `),ug()()()()(),Ac(1362,`tr`,23)(1363,`td`,23)(1364,`p`),vN(1365,`Função que atribui foco ao componente.`),ug(),Ac(1366,`p`),vN(1367,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(1368,`pre`)(1369,`code`),vN(1370,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ug()()()()(),Kc(1371,`br`),Ac(1372,`h3`),vN(1373,`Interfaces`),ug(),Ac(1374,`h4`,37)(1375,`code`,5),vN(1376,`ErrorAsyncProperties`),ug()(),Ac(1377,`div`,2)(1378,`p`),vN(1379,`Interface para realizar uma validação assíncrona no componente.`),ug()(),Ac(1380,`h4`,11),vN(1381,`Propriedades`),ug(),Ac(1382,`table`,12)(1383,`tr`,13)(1384,`th`,14),vN(1385,`Nome`),ug(),Ac(1386,`th`,14),vN(1387,`Tipo`),ug(),Ac(1388,`th`,14),vN(1389,`Descrição`),ug()(),Ac(1390,`tr`,15)(1391,`td`,16)(1392,`div`,24)(1393,`span`,25),vN(1394,` errorAsync`),Kc(1395,`br`),ug()()(),Ac(1396,`td`,20)(1397,`code`,38),vN(1398,`(value) => Observable<boolean>`),ug()(),Ac(1399,`td`,23)(1400,`p`),vN(1401,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ac(1402,`code`),vN(1403,`change`),ug(),vN(1404,` ou `),Ac(1405,`code`),vN(1406,`change-model`),ug(),vN(1407,`, dependendo do valor da propriedade `),Ac(1408,`code`),vN(1409,`triggerMode`),ug(),vN(1410,`.`),ug()()(),Ac(1411,`tr`,15)(1412,`td`,16)(1413,`div`,24)(1414,`span`,25),vN(1415,` triggerMode`),Kc(1416,`br`),ug()()(),Ac(1417,`td`,20)(1418,`code`,39),vN(1419,`'change' `),ug(),Ac(1420,`code`,40),vN(1421,` 'changeModel'`),ug()(),Ac(1422,`td`,23)(1423,`em`)(1424,`strong`),vN(1425,`(opcional)`),ug()(),Ac(1426,`p`),vN(1427,`Controla se o método será executado no disparo do output `),Ac(1428,`code`),vN(1429,`change`),ug(),vN(1430,` ou `),Ac(1431,`code`),vN(1432,`change-model`),ug(),vN(1433,`.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return l})();var Ce=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(E(Qn),E(wn))};static ɵcmp=Hn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Number`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-number-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-number-basic-view`)(6,`sample-po-number-labs-view`)(7,`sample-po-number-calculate-view`),ug()()()),r&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,ie,ae,re,me],encapsulation:2,changeDetection:1})}return l})()}];var pe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[kL.forChild(Ce),kL]})}return l})();var Ge=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[Ta,pe]})}return l})();export{Ge as DocPoNumberModule};