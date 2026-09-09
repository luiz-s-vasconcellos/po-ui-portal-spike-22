import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Fi as he$1,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var te=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`number`,`p-label`,`PO Number`]],template:function(r,i){r&1&&Gl(0,`po-number`,0)},dependencies:[ube],encapsulation:2,changeDetection:1})}return l})();var ce=l=>({"docs-sample-code-tabs":l});var ie=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Number Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-number-basic/sample-po-number-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-number-basic/sample-po-number-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-number-basic`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ce,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,te],encapsulation:2,changeDetection:1})}return l})();var oe=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:`an an-currency-circle-dollar`,label:`an an-currency-circle-dollar`},{value:`an an-currency-btc`,label:`an an-currency-btc`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event=``,this.messageErrorPattern=``,this.label=void 0,this.placeholder=``,this.help=``,this.icon=``,this.size=`medium`,this.step=void 0,this.properties=[]}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-labs`]],standalone:!1,decls:23,vars:43,consts:[[`f`,`ngForm`],[`name`,`PO number`,1,`po-md-12`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-max`,`p-maxlength`,`p-min`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-step`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`messageErrorPattern`,`p-clean`,``,`p-label`,`Message error pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`min`,`p-clean`,``,`p-label`,`Min`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Minlength`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`max`,`p-clean`,``,`p-label`,`Max`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Maxlength`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`step`,`p-clean`,``,`p-label`,`Step`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let p=Ax();Tl(0,`po-number`,1),ww(`ngModelChange`,function(o){return Ky(p),uN(i.number,o)||(i.number=o),Xy(o)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3)(4,`po-info`,4),ag(),Gl(5,`po-divider`),Tl(6,`form`,null,0)(8,`po-input`,5),ww(`ngModelChange`,function(o){return Ky(p),uN(i.label,o)||(i.label=o),Xy(o)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(o){return Ky(p),uN(i.help,o)||(i.help=o),Xy(o)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(o){return Ky(p),uN(i.helperText,o)||(i.helperText=o),Xy(o)}),ag(),a0(),Tl(11,`po-input`,8),ww(`ngModelChange`,function(o){return Ky(p),uN(i.placeholder,o)||(i.placeholder=o),Xy(o)}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(o){return Ky(p),uN(i.messageErrorPattern,o)||(i.messageErrorPattern=o),Xy(o)}),ag(),a0(),Tl(13,`po-number`,10),ww(`ngModelChange`,function(o){return Ky(p),uN(i.min,o)||(i.min=o),Xy(o)}),ag(),a0(),Tl(14,`po-number`,11),ww(`ngModelChange`,function(o){return Ky(p),uN(i.minlength,o)||(i.minlength=o),Xy(o)}),ag(),a0(),Tl(15,`po-number`,12),ww(`ngModelChange`,function(o){return Ky(p),uN(i.max,o)||(i.max=o),Xy(o)}),ag(),a0(),Tl(16,`po-number`,13),ww(`ngModelChange`,function(o){return Ky(p),uN(i.maxlength,o)||(i.maxlength=o),Xy(o)}),ag(),a0(),Tl(17,`po-number`,14),ww(`ngModelChange`,function(o){return Ky(p),uN(i.step,o)||(i.step=o),Xy(o)}),ag(),a0(),Tl(18,`po-select`,15),ww(`ngModelChange`,function(o){return Ky(p),uN(i.icon,o)||(i.icon=o),Xy(o)}),ag(),a0(),Tl(19,`po-checkbox-group`,16),ww(`ngModelChange`,function(o){return Ky(p),uN(i.properties,o)||(i.properties=o),Xy(o)}),ag(),a0(),Tl(20,`po-radio-group`,17),ww(`ngModelChange`,function(o){return Ky(p),uN(i.size,o)||(i.size=o),Xy(o)}),ag(),a0(),Tl(21,`div`,2)(22,`po-button`,18),ht(`p-click`,function(){return i.restore()}),ag()()()}r&2&&(Ew(`ngModel`,i.number),nw(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.messageErrorPattern)(`p-help`,i.help)(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-max`,i.max)(`p-maxlength`,i.maxlength)(`p-min`,i.min)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-step`,i.step)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),l0(),jp(3),nw(`p-value`,i.number),jp(),nw(`p-value`,i.event),jp(4),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.helperText),l0(),jp(),Ew(`ngModel`,i.placeholder),l0(),jp(),Ew(`ngModel`,i.messageErrorPattern),l0(),jp(),Ew(`ngModel`,i.min),l0(),jp(),Ew(`ngModel`,i.minlength),l0(),jp(),Ew(`ngModel`,i.max),l0(),jp(),Ew(`ngModel`,i.maxlength),l0(),jp(),Ew(`ngModel`,i.step),l0(),jp(),Ew(`ngModel`,i.icon),nw(`p-options`,i.iconOptions),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,ube,L0e,fbe,ybe],encapsulation:2,changeDetection:1})}return l})();var ge=l=>({"docs-sample-code-tabs":l});var ae=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Number Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-number-labs/sample-po-number-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-number
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-number-labs/sample-po-number-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-number-labs`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ge,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,oe],encapsulation:2,changeDetection:1})}return l})();var le=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:`São Paulo`},{value:17,label:`Alagoas`},{value:15,label:`Ceará`}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100)}loadICMS(){this.icms=this.state}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-calculate`]],standalone:!1,decls:16,vars:9,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`price`,`p-label`,`Price`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`quantity`,`p-label`,`Quantity`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`state`,`p-label`,`State`,`p-required`,``,`p-sort`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icms`,`p-label`,`ICMS %`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`liquid`,`p-label`,`Liquid`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`total`,`p-label`,`Total`,`p-disabled`,``,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`p-label`,`Calculate`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-label`,`Clean`,1,`po-md-3`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let p=Ax();Tl(0,`h3`),cN(1,`Calculate Tax`),ag(),Gl(2,`po-divider`),Tl(3,`form`,null,0)(5,`div`,1)(6,`po-number`,2),ww(`ngModelChange`,function(o){return Ky(p),uN(i.price,o)||(i.price=o),Xy(o)}),ag(),a0(),Tl(7,`po-number`,3),ww(`ngModelChange`,function(o){return Ky(p),uN(i.quantity,o)||(i.quantity=o),Xy(o)}),ag(),a0(),ag(),Tl(8,`div`)(9,`po-select`,4),ww(`ngModelChange`,function(o){return Ky(p),uN(i.state,o)||(i.state=o),Xy(o)}),ht(`p-change`,function(){return i.loadICMS()}),ag(),a0(),Tl(10,`po-number`,5),ww(`ngModelChange`,function(o){return Ky(p),uN(i.icms,o)||(i.icms=o),Xy(o)}),ag(),a0(),Tl(11,`po-number`,6),ww(`ngModelChange`,function(o){return Ky(p),uN(i.liquid,o)||(i.liquid=o),Xy(o)}),ag(),a0(),Tl(12,`po-number`,7),ww(`ngModelChange`,function(o){return Ky(p),uN(i.total,o)||(i.total=o),Xy(o)}),ag(),a0(),ag(),Tl(13,`div`,1)(14,`po-button`,8),ht(`p-click`,function(){return i.calculate()}),ag(),Tl(15,`po-button`,9),ht(`p-click`,function(){Ky(p);return Xy(Bx(4).reset())}),ag()()()}if(r&2){let p=Bx(4);jp(6),Ew(`ngModel`,i.price),l0(),jp(),Ew(`ngModel`,i.quantity),l0(),jp(2),Ew(`ngModel`,i.state),nw(`p-options`,i.statesOptions),l0(),jp(),Ew(`ngModel`,i.icms),l0(),jp(),Ew(`ngModel`,i.liquid),l0(),jp(),Ew(`ngModel`,i.total),l0(),jp(2),nw(`p-disabled`,p.invalid),jp(),nw(`p-disabled`,p.invalid)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,ube,fbe],encapsulation:2,changeDetection:1})}return l})();var he=l=>({"docs-sample-code-tabs":l});var re=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-calculate-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Number - Calculate`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-number-calculate/sample-po-number-calculate.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<h3>Calculate Tax</h3>

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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-number-calculate/sample-po-number-calculate.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-number-calculate`),ag(),Gl(23,`hr`)),r&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,he,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,le],encapsulation:2,changeDetection:1})}return l})();var me=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Un({type:l,selectors:[[`sample-po-number-doc`]],standalone:!1,decls:1434,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(r,i){r&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoNumberComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ag(),Tl(24,`p`),cN(25,`Importante:`),ag(),Tl(26,`ul`)(27,`li`),cN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ag()(),Tl(29,`h4`),cN(30,`Tokens customizáveis`),ag(),Tl(31,`p`),cN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Gl(33,`br`),cN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(35,`code`),cN(36,`.po-input`),ag()(),Tl(37,`blockquote`)(38,`p`),cN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Tl(40,`a`,6),cN(41,`Grid System`),ag(),cN(42,`.`),ag()(),Tl(43,`blockquote`)(44,`p`),cN(45,`Para maiores informações, acesse o guia `),Tl(46,`a`,7),cN(47,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(48,`.`),ag()(),Tl(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),cN(53,`Propriedade`),ag(),Tl(54,`th`),cN(55,`Descrição`),ag(),Tl(56,`th`),cN(57,`Valor Padrão`),ag()()(),Tl(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),cN(62,`Default Values`),ag()(),Gl(63,`td`)(64,`td`),ag(),Tl(65,`tr`)(66,`td`)(67,`code`),cN(68,`--font-family`),ag()(),Tl(69,`td`),cN(70,`Família tipográfica usada`),ag(),Tl(71,`td`)(72,`code`),cN(73,`var(--font-family-theme)`),ag()()(),Tl(74,`tr`)(75,`td`)(76,`code`),cN(77,`--font-size`),ag()(),Tl(78,`td`),cN(79,`Tamanho da fonte`),ag(),Tl(80,`td`)(81,`code`),cN(82,`var(--font-size-default)`),ag()()(),Tl(83,`tr`)(84,`td`)(85,`code`),cN(86,`--text-color-placeholder`),ag()(),Tl(87,`td`),cN(88,`Cor do texto placeholder`),ag(),Tl(89,`td`)(90,`code`),cN(91,`var(--color-neutral-light-30)`),ag()()(),Tl(92,`tr`)(93,`td`)(94,`code`),cN(95,`--color`),ag()(),Tl(96,`td`),cN(97,`Cor pincipal do input`),ag(),Tl(98,`td`)(99,`code`),cN(100,`var(--color-neutral-dark-70)`),ag()()(),Tl(101,`tr`)(102,`td`)(103,`code`),cN(104,`--background`),ag()(),Tl(105,`td`),cN(106,`Cor de background`),ag(),Tl(107,`td`)(108,`code`),cN(109,`var(--color-neutral-light-05)`),ag()()(),Tl(110,`tr`)(111,`td`)(112,`code`),cN(113,`--padding`),ag()(),Tl(114,`td`),cN(115,`Preenchimento`),ag(),Tl(116,`td`)(117,`code`),cN(118,`0 0.5rem`),ag()()(),Tl(119,`tr`)(120,`td`)(121,`code`),cN(122,`--text-color`),ag()(),Tl(123,`td`),cN(124,`Cor do texto`),ag(),Tl(125,`td`)(126,`code`),cN(127,`var(--color-neutral-dark-90)`),ag()()(),Tl(128,`tr`)(129,`td`)(130,`code`),cN(131,`--field-container-title-justify`),ag()(),Tl(132,`td`),cN(133,`Alinhamento horizontal do título (`),Tl(134,`code`),cN(135,`justify-content`),ag(),cN(136,`)`),ag(),Tl(137,`td`)(138,`code`),cN(139,`space-between`),ag()()(),Tl(140,`tr`)(141,`td`)(142,`code`),cN(143,`--field-container-title-flex`),ag()(),Tl(144,`td`),cN(145,`Flex do título (`),Tl(146,`code`),cN(147,`flex`),ag(),cN(148,`)`),ag(),Tl(149,`td`)(150,`code`),cN(151,`1 auto`),ag()()(),Tl(152,`tr`)(153,`td`)(154,`strong`),cN(155,`Hover`),ag()(),Gl(156,`td`)(157,`td`),ag(),Tl(158,`tr`)(159,`td`)(160,`code`),cN(161,`--color-hover`),ag()(),Tl(162,`td`),cN(163,`Cor principal no estado hover`),ag(),Tl(164,`td`)(165,`code`),cN(166,`var(--color-brand-01-dark)`),ag()()(),Tl(167,`tr`)(168,`td`)(169,`code`),cN(170,`--background-hover`),ag()(),Tl(171,`td`),cN(172,`Cor de background no estado hover`),ag(),Tl(173,`td`)(174,`code`),cN(175,`var(--color-brand-01-lightest)`),ag()()(),Tl(176,`tr`)(177,`td`)(178,`strong`),cN(179,`Focused`),ag()(),Gl(180,`td`)(181,`td`),ag(),Tl(182,`tr`)(183,`td`)(184,`code`),cN(185,`--color-focused`),ag()(),Tl(186,`td`),cN(187,`Cor principal no estado de focus`),ag(),Tl(188,`td`)(189,`code`),cN(190,`var(--color-action-default)`),ag()()(),Tl(191,`tr`)(192,`td`)(193,`code`),cN(194,`--outline-color-focused`),ag()(),Tl(195,`td`),cN(196,`Cor do outline do estado de focus`),ag(),Tl(197,`td`)(198,`code`),cN(199,`var(--color-action-focus)`),ag()()(),Tl(200,`tr`)(201,`td`)(202,`strong`),cN(203,`Disabled`),ag()(),Gl(204,`td`)(205,`td`),ag(),Tl(206,`tr`)(207,`td`)(208,`code`),cN(209,`--color-disabled`),ag()(),Tl(210,`td`),cN(211,`Cor principal no estado disabled`),ag(),Tl(212,`td`)(213,`code`),cN(214,`var(--color-neutral-light-30)`),ag()()(),Tl(215,`tr`)(216,`td`)(217,`code`),cN(218,`--background-disabled`),ag()(),Tl(219,`td`),cN(220,`Cor de background no estado disabled`),ag(),Tl(221,`td`)(222,`code`),cN(223,`var(--color-neutral-light-20)`),ag()()(),Tl(224,`tr`)(225,`td`)(226,`code`),cN(227,`--text-color-disabled`),ag()(),Tl(228,`td`),cN(229,`Cor do texto no estado disabled`),ag(),Tl(230,`td`)(231,`code`),cN(232,`var(--color-neutral-dark-70)`),ag()()()()(),Tl(233,`p`),Gl(234,`br`),cN(235,` O `),Tl(236,`code`),cN(237,`po-number`),ag(),cN(238,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),ag()(),Tl(239,`div`,8)(240,`h4`,9),cN(241,`Seletor`),ag(),Tl(242,`pre`,10),cN(243,`<po-number
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
`),ag()(),Tl(244,`h4`,11),cN(245,`Propriedades`),ag(),Tl(246,`table`,12)(247,`tr`,13)(248,`th`,14),cN(249,`Nome`),ag(),Tl(250,`th`,14),cN(251,`Tipo`),ag(),Tl(252,`th`,14),cN(253,`Padrão`),ag(),Tl(254,`th`,14),cN(255,`Descrição`),ag()(),Tl(256,`tr`,15)(257,`td`,16)(258,`div`,17)(259,`span`,18),cN(260,` (p-additional-help)`),Gl(261,`br`),ag()(),Tl(262,`div`,19),cN(263,`Deprecated`),ag()(),Tl(264,`td`,20)(265,`code`,21),cN(266,`EventEmitter`),ag()(),Tl(267,`td`,22),cN(268,`-`),ag(),Tl(269,`td`,23)(270,`em`)(271,`strong`),cN(272,`(opcional)`),ag()(),Tl(273,`p`),cN(274,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(275,`blockquote`)(276,`p`),cN(277,`Essa propriedade está `),Tl(278,`strong`),cN(279,`depreciada`),ag(),cN(280,` e será removida na versão `),Tl(281,`code`),cN(282,`23.x.x`),ag(),cN(283,`. Recomendamos utilizar a propriedade `),Tl(284,`code`),cN(285,`p-helper`),ag(),cN(286,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(287,`tr`,15)(288,`td`,16)(289,`div`,24)(290,`span`,25),cN(291,` p-additional-help-tooltip`),Gl(292,`br`),ag()(),Tl(293,`div`,19),cN(294,`Deprecated`),ag()(),Tl(295,`td`,20)(296,`code`,26),cN(297,`string`),ag()(),Tl(298,`td`,22),cN(299,`-`),ag(),Tl(300,`td`,23)(301,`em`)(302,`strong`),cN(303,`(opcional)`),ag()(),Tl(304,`p`),cN(305,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(306,`code`),cN(307,`po-helper`),ag(),cN(308,`.
`),Tl(309,`strong`),cN(310,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(311,`blockquote`)(312,`p`),cN(313,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(314,`blockquote`)(315,`p`),cN(316,`Essa propriedade está `),Tl(317,`strong`),cN(318,`depreciada`),ag(),cN(319,` e será removida na versão `),Tl(320,`code`),cN(321,`23.x.x`),ag(),cN(322,`. Recomendamos utilizar a propriedade `),Tl(323,`code`),cN(324,`p-helper`),ag(),cN(325,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(326,`tr`,15)(327,`td`,16)(328,`div`,24)(329,`span`,25),cN(330,` p-append-in-body`),Gl(331,`br`),ag()()(),Tl(332,`td`,20)(333,`code`,27),cN(334,`boolean`),ag()(),Tl(335,`td`,22)(336,`p`)(337,`code`),cN(338,`false`),ag()()(),Tl(339,`td`,23)(340,`em`)(341,`strong`),cN(342,`(opcional)`),ag()(),Tl(343,`p`),cN(344,`Define que o popover (`),Tl(345,`code`),cN(346,`p-helper`),ag(),cN(347,` e/ou `),Tl(348,`code`),cN(349,`p-error-limit`),ag(),cN(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ag(),Tl(351,`blockquote`)(352,`p`),cN(353,`Quando utilizado com `),Tl(354,`code`),cN(355,`p-helper`),ag(),cN(356,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(357,`tr`,15)(358,`td`,16)(359,`div`,24)(360,`span`,25),cN(361,` p-auto-focus`),Gl(362,`br`),ag()()(),Tl(363,`td`,20)(364,`code`,27),cN(365,`boolean`),ag()(),Tl(366,`td`,22)(367,`p`)(368,`code`),cN(369,`false`),ag()()(),Tl(370,`td`,23)(371,`em`)(372,`strong`),cN(373,`(opcional)`),ag()(),Tl(374,`p`),cN(375,`Aplica foco no elemento ao ser iniciado.`),ag(),Tl(376,`blockquote`)(377,`p`),cN(378,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ag()()()(),Tl(379,`tr`,15)(380,`td`,16)(381,`div`,17)(382,`span`,18),cN(383,` (p-blur)`),Gl(384,`br`),ag()()(),Tl(385,`td`,20)(386,`code`,21),cN(387,`EventEmitter`),ag()(),Tl(388,`td`,22),cN(389,`-`),ag(),Tl(390,`td`,23)(391,`em`)(392,`strong`),cN(393,`(opcional)`),ag()(),Tl(394,`p`),cN(395,`Evento disparado ao sair do campo.`),ag()()(),Tl(396,`tr`,15)(397,`td`,16)(398,`div`,17)(399,`span`,18),cN(400,` (p-change)`),Gl(401,`br`),ag()()(),Tl(402,`td`,20)(403,`code`,21),cN(404,`EventEmitter`),ag()(),Tl(405,`td`,22),cN(406,`-`),ag(),Tl(407,`td`,23)(408,`em`)(409,`strong`),cN(410,`(opcional)`),ag()(),Tl(411,`p`),cN(412,`Evento disparado ao alterar valor e deixar o campo.`),ag()()(),Tl(413,`tr`,15)(414,`td`,16)(415,`div`,17)(416,`span`,18),cN(417,` (p-change-model)`),Gl(418,`br`),ag()()(),Tl(419,`td`,20)(420,`code`,21),cN(421,`EventEmitter`),ag()(),Tl(422,`td`,22),cN(423,`-`),ag(),Tl(424,`td`,23)(425,`em`)(426,`strong`),cN(427,`(opcional)`),ag()(),Tl(428,`p`),cN(429,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(430,`code`),cN(431,`setValue`),ag(),cN(432,`, `),Tl(433,`code`),cN(434,`patchValue`),ag(),cN(435,`, carregamento assíncrono).`),ag(),Tl(436,`p`),cN(437,`Diferentemente do `),Tl(438,`code`),cN(439,`p-change`),ag(),cN(440,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(441,`code`),cN(442,`p-change-model`),ag(),cN(443,` cobre todos os cenários de alteração de valor.`),ag(),Tl(444,`p`),cN(445,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(446,`tr`,15)(447,`td`,16)(448,`div`,24)(449,`span`,25),cN(450,`p-clean`),Gl(451,`br`),ag()()(),Tl(452,`td`,20)(453,`code`,27),cN(454,`boolean`),ag()(),Tl(455,`td`,22),cN(456,`-`),ag(),Tl(457,`td`,23)(458,`em`)(459,`strong`),cN(460,`(opcional)`),ag()(),Tl(461,`p`),cN(462,`Se verdadeiro, o campo receberá um botão para ser limpo.`),ag()()(),Tl(463,`tr`,15)(464,`td`,16)(465,`div`,24)(466,`span`,25),cN(467,` p-compact-label`),Gl(468,`br`),ag()()(),Tl(469,`td`,20)(470,`code`,27),cN(471,`boolean`),ag()(),Tl(472,`td`,22)(473,`p`)(474,`code`),cN(475,`false`),ag()()(),Tl(476,`td`,23)(477,`em`)(478,`strong`),cN(479,`(opcional)`),ag()(),Tl(480,`p`),cN(481,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(482,`p`),cN(483,`Quando habilitado (`),Tl(484,`code`),cN(485,`true`),ag(),cN(486,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(487,`ul`)(488,`li`)(489,`code`),cN(490,`po-label`),ag()(),Tl(491,`li`)(492,`code`),cN(493,`p-requirement (showRequired)`),ag()(),Tl(494,`li`)(495,`code`),cN(496,`po-helper`),ag()()(),Tl(497,`p`),cN(498,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(499,`p`),cN(500,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(501,`ul`)(502,`li`)(503,`code`),cN(504,`--field-container-title-justify`),ag()(),Tl(505,`li`)(506,`code`),cN(507,`--field-container-title-flex`),ag()()(),Tl(508,`p`),cN(509,`Exemplo:`),ag(),Tl(510,`pre`)(511,`code`),cN(512,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(513,`p`),cN(514,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(515,`tr`,15)(516,`td`,16)(517,`div`,24)(518,`span`,25),cN(519,`p-disabled`),Gl(520,`br`),ag()()(),Tl(521,`td`,20)(522,`code`,27),cN(523,`boolean`),ag()(),Tl(524,`td`,22)(525,`p`)(526,`code`),cN(527,`false`),ag()()(),Tl(528,`td`,23)(529,`em`)(530,`strong`),cN(531,`(opcional)`),ag()(),Tl(532,`p`),cN(533,`Se verdadeiro, desabilita o campo.`),ag()()(),Tl(534,`tr`,15)(535,`td`,16)(536,`div`,24)(537,`span`,25),cN(538,` p-emit-all-changes`),Gl(539,`br`),ag()()(),Tl(540,`td`,20)(541,`code`,27),cN(542,`boolean`),ag()(),Tl(543,`td`,22)(544,`p`)(545,`code`),cN(546,`false`),ag()()(),Tl(547,`td`,23)(548,`em`)(549,`strong`),cN(550,`(opcional)`),ag()(),Tl(551,`p`),cN(552,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),ag()()(),Tl(553,`tr`,15)(554,`td`,16)(555,`div`,17)(556,`span`,18),cN(557,` (p-enter)`),Gl(558,`br`),ag()()(),Tl(559,`td`,20)(560,`code`,21),cN(561,`EventEmitter`),ag()(),Tl(562,`td`,22),cN(563,`-`),ag(),Tl(564,`td`,23)(565,`em`)(566,`strong`),cN(567,`(opcional)`),ag()(),Tl(568,`p`),cN(569,`Evento disparado ao entrar do campo.`),ag()()(),Tl(570,`tr`,15)(571,`td`,16)(572,`div`,24)(573,`span`,25),cN(574,` p-error-async-properties`),Gl(575,`br`),ag()()(),Tl(576,`td`,20)(577,`code`,28),cN(578,`ErrorAsyncProperties`),ag()(),Tl(579,`td`,22),cN(580,`-`),ag(),Tl(581,`td`,23)(582,`em`)(583,`strong`),cN(584,`(opcional)`),ag()(),Tl(585,`p`),cN(586,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Tl(587,`code`),cN(588,`Reactive Forms`),ag(),cN(589,`. Em formulários reativos, pode-se utilizar o próprio `),Tl(590,`code`),cN(591,`asyncValidators`),ag(),cN(592,`.`),ag()()(),Tl(593,`tr`,15)(594,`td`,16)(595,`div`,24)(596,`span`,25),cN(597,` p-error-limit`),Gl(598,`br`),ag()()(),Tl(599,`td`,20)(600,`code`,27),cN(601,`boolean`),ag()(),Tl(602,`td`,22)(603,`p`)(604,`code`),cN(605,`false`),ag()()(),Tl(606,`td`,23)(607,`em`)(608,`strong`),cN(609,`(opcional)`),ag()(),Tl(610,`p`),cN(611,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(612,`blockquote`)(613,`p`),cN(614,`Caso essa propriedade seja definida como `),Tl(615,`code`),cN(616,`true`),ag(),cN(617,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()()()(),Tl(618,`tr`,15)(619,`td`,16)(620,`div`,24)(621,`span`,25),cN(622,` p-error-pattern`),Gl(623,`br`),ag()()(),Tl(624,`td`,20)(625,`code`,26),cN(626,`string`),ag()(),Tl(627,`td`,22),cN(628,`-`),ag(),Tl(629,`td`,23)(630,`em`)(631,`strong`),cN(632,`(opcional)`),ag()(),Tl(633,`p`),cN(634,`Mensagem que será apresentada quando o `),Tl(635,`code`),cN(636,`pattern`),ag(),cN(637,` ou a máscara não for satisfeita.`),ag(),Tl(638,`blockquote`)(639,`p`),cN(640,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Tl(641,`code`),cN(642,`p-required-field-error-message`),ag(),cN(643,` em conjunto.`),ag()()()(),Tl(644,`tr`,15)(645,`td`,16)(646,`div`,24)(647,`span`,25),cN(648,` p-help`),Gl(649,`br`),ag()()(),Tl(650,`td`,20)(651,`code`,26),cN(652,`string`),ag()(),Tl(653,`td`,22),cN(654,`-`),ag(),Tl(655,`td`,23)(656,`em`)(657,`strong`),cN(658,`(opcional)`),ag()(),Tl(659,`p`),cN(660,`Texto de apoio do campo.`),ag()()(),Tl(661,`tr`,15)(662,`td`,16)(663,`div`,24)(664,`span`,25),cN(665,` p-icon`),Gl(666,`br`),ag()()(),Tl(667,`td`,20)(668,`code`,26),cN(669,`string `),ag(),Tl(670,`code`,29),cN(671,` TemplateRef<void>`),ag()(),Tl(672,`td`,22),cN(673,`-`),ag(),Tl(674,`td`,23)(675,`em`)(676,`strong`),cN(677,`(opcional)`),ag()(),Tl(678,`p`),cN(679,`Define o ícone que será exibido no início do campo.`),ag(),Tl(680,`p`),cN(681,`É possível usar qualquer um dos ícones da `),Tl(682,`a`,30),cN(683,`Biblioteca de ícones`),ag(),cN(684,`. conforme exemplo abaixo:`),ag(),Tl(685,`pre`)(686,`code`),cN(687,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),ag()(),Tl(688,`p`),cN(689,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(690,`em`),cN(691,`Font Awesome`),ag(),cN(692,`, da seguinte forma:`),ag(),Tl(693,`pre`)(694,`code`),cN(695,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),ag()(),Tl(696,`p`),cN(697,`Outra opção seria a customização do ícone através do `),Tl(698,`code`),cN(699,`TemplateRef`),ag(),cN(700,`, conforme exemplo abaixo:`),ag(),Tl(701,`pre`)(702,`code`),cN(703,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ag()(),Tl(704,`blockquote`)(705,`p`),cN(706,`Para o ícone enquadrar corretamente, deve-se utilizar `),Tl(707,`code`),cN(708,`font-size: inherit`),ag(),cN(709,` caso o ícone utilizado não aplique-o.`),ag()()()(),Tl(710,`tr`,15)(711,`td`,16)(712,`div`,17)(713,`span`,18),cN(714,` (p-keydown)`),Gl(715,`br`),ag()()(),Tl(716,`td`,20)(717,`code`,21),cN(718,`EventEmitter`),ag()(),Tl(719,`td`,22),cN(720,`-`),ag(),Tl(721,`td`,23)(722,`em`)(723,`strong`),cN(724,`(opcional)`),ag()(),Tl(725,`p`),cN(726,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(727,`code`),cN(728,`KeyboardEvent`),ag(),cN(729,` com informações sobre a tecla.`),ag()()(),Tl(730,`tr`,15)(731,`td`,16)(732,`div`,24)(733,`span`,25),cN(734,` p-label`),Gl(735,`br`),ag()()(),Tl(736,`td`,20)(737,`code`,26),cN(738,`string`),ag()(),Tl(739,`td`,22),cN(740,`-`),ag(),Tl(741,`td`,23)(742,`em`)(743,`strong`),cN(744,`(opcional)`),ag()(),Tl(745,`p`),cN(746,`Rótulo do campo.`),ag()()(),Tl(747,`tr`,15)(748,`td`,16)(749,`div`,24)(750,`span`,25),cN(751,` p-label-text-wrap`),Gl(752,`br`),ag()()(),Tl(753,`td`,20)(754,`code`,27),cN(755,`boolean`),ag()(),Tl(756,`td`,22)(757,`p`)(758,`code`),cN(759,`false`),ag()()(),Tl(760,`td`,23)(761,`em`)(762,`strong`),cN(763,`(opcional)`),ag()(),Tl(764,`p`),cN(765,`Habilita a quebra automática do texto da propriedade `),Tl(766,`code`),cN(767,`p-label`),ag(),cN(768,`. Quando `),Tl(769,`code`),cN(770,`p-label-text-wrap`),ag(),cN(771,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(772,`tr`,15)(773,`td`,16)(774,`div`,24)(775,`span`,25),cN(776,` p-loading`),Gl(777,`br`),ag()()(),Tl(778,`td`,20)(779,`code`,27),cN(780,`boolean`),ag()(),Tl(781,`td`,22)(782,`p`)(783,`code`),cN(784,`false`),ag()()(),Tl(785,`td`,23)(786,`em`)(787,`strong`),cN(788,`(opcional)`),ag()(),Tl(789,`p`),cN(790,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ag()()(),Tl(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),cN(795,`p-mask`),Gl(796,`br`),ag()()(),Tl(797,`td`,20)(798,`code`,26),cN(799,`string`),ag()(),Tl(800,`td`,22),cN(801,`-`),ag(),Tl(802,`td`,23)(803,`em`)(804,`strong`),cN(805,`(opcional)`),ag()(),Tl(806,`p`),cN(807,`Indica uma máscara para o campo, porém é incompatível com o `),Tl(808,`code`),cN(809,`po-number`),ag(),cN(810,`.`),ag(),Tl(811,`blockquote`)(812,`p`)(813,`strong`),cN(814,`Componentes compatíveis:`),ag(),Tl(815,`code`),cN(816,`po-input`),ag(),cN(817,`,`),Tl(818,`code`),cN(819,`po-decimal`),ag(),cN(820,`.`),ag()()()(),Tl(821,`tr`,15)(822,`td`,16)(823,`div`,24)(824,`span`,25),cN(825,`p-mask-format-model`),Gl(826,`br`),ag()()(),Tl(827,`td`,20)(828,`code`,27),cN(829,`boolean`),ag()(),Tl(830,`td`,22)(831,`p`)(832,`code`),cN(833,`false`),ag()()(),Tl(834,`td`,23)(835,`em`)(836,`strong`),cN(837,`(opcional)`),ag()(),Tl(838,`p`),cN(839,`Indica se o `),Tl(840,`code`),cN(841,`model`),ag(),cN(842,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),ag()()(),Tl(843,`tr`,15)(844,`td`,16)(845,`div`,24)(846,`span`,25),cN(847,` p-mask-no-length-validation`),Gl(848,`br`),ag()()(),Tl(849,`td`,20)(850,`code`,27),cN(851,`boolean`),ag()(),Tl(852,`td`,22)(853,`p`)(854,`code`),cN(855,`false`),ag()()(),Tl(856,`td`,23)(857,`p`),cN(858,`Controla como o componente aplica as validações de comprimento mínimo (`),Tl(859,`code`),cN(860,`minLength`),ag(),cN(861,`) e máximo (`),Tl(862,`code`),cN(863,`maxLength`),ag(),cN(864,`) quando há uma máscara (`),Tl(865,`code`),cN(866,`p-mask`),ag(),cN(867,`) definida.`),ag(),Tl(868,`ul`)(869,`li`),cN(870,`Quando `),Tl(871,`code`),cN(872,`true`),ag(),cN(873,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ag(),Tl(874,`li`),cN(875,`Quando `),Tl(876,`code`),cN(877,`false`),ag(),cN(878,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ag()(),Tl(879,`blockquote`)(880,`p`),cN(881,`Esta propriedade é ignorada quando utilizada em conjunto com `),Tl(882,`code`),cN(883,`p-mask-format-model`),ag(),cN(884,`.`),ag()(),Tl(885,`p`),cN(886,`Exemplo:`),ag(),Tl(887,`pre`)(888,`code`),cN(889,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ag()(),Tl(890,`ul`)(891,`li`),cN(892,`Entrada: `),Tl(893,`code`),cN(894,`123-456`),ag(),cN(895,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Tl(896,`code`),cN(897,`-`),ag(),cN(898,`.`),ag()()()(),Tl(899,`tr`,15)(900,`td`,16)(901,`div`,24)(902,`span`,25),cN(903,`p-max`),Gl(904,`br`),ag()()(),Tl(905,`td`,20)(906,`code`,31),cN(907,`number`),ag()(),Tl(908,`td`,22),cN(909,`-`),ag(),Tl(910,`td`,23)(911,`em`)(912,`strong`),cN(913,`(opcional)`),ag()(),Tl(914,`p`),cN(915,`Valor máximo.`),ag(),Tl(916,`blockquote`)(917,`p`),cN(918,`Quando o valor máximo for um número com decimais aconselha-se utilizar junto da propriedade `),Tl(919,`code`),cN(920,`p-step`),ag(),cN(921,` também passando a ela um valor decimal.`),ag()()()(),Tl(922,`tr`,15)(923,`td`,16)(924,`div`,24)(925,`span`,25),cN(926,` p-maxlength`),Gl(927,`br`),ag()()(),Tl(928,`td`,20)(929,`code`,31),cN(930,`number`),ag()(),Tl(931,`td`,22),cN(932,`-`),ag(),Tl(933,`td`,23)(934,`em`)(935,`strong`),cN(936,`(opcional)`),ag()(),Tl(937,`p`),cN(938,`Indica a quantidade máxima de caracteres que o campo aceita.`),ag()()(),Tl(939,`tr`,15)(940,`td`,16)(941,`div`,24)(942,`span`,25),cN(943,`p-min`),Gl(944,`br`),ag()()(),Tl(945,`td`,20)(946,`code`,31),cN(947,`number`),ag()(),Tl(948,`td`,22),cN(949,`-`),ag(),Tl(950,`td`,23)(951,`em`)(952,`strong`),cN(953,`(opcional)`),ag()(),Tl(954,`p`),cN(955,`Valor mínimo.`),ag(),Tl(956,`blockquote`)(957,`p`),cN(958,`Quando o valor mínimo for um número com decimais aconselha-se utilizar junto da propriedade `),Tl(959,`code`),cN(960,`p-step`),ag(),cN(961,` também passando a ela um valor decimal.`),ag()()()(),Tl(962,`tr`,15)(963,`td`,16)(964,`div`,24)(965,`span`,25),cN(966,` p-minlength`),Gl(967,`br`),ag()()(),Tl(968,`td`,20)(969,`code`,31),cN(970,`number`),ag()(),Tl(971,`td`,22),cN(972,`-`),ag(),Tl(973,`td`,23)(974,`em`)(975,`strong`),cN(976,`(opcional)`),ag()(),Tl(977,`p`),cN(978,`Indica a quantidade mínima de caracteres que o campo aceita.`),ag()()(),Tl(979,`tr`,15)(980,`td`,16)(981,`div`,24)(982,`span`,25),cN(983,` name`),Gl(984,`br`),ag()()(),Tl(985,`td`,20)(986,`code`,26),cN(987,`string`),ag()(),Tl(988,`td`,22),cN(989,`-`),ag(),Tl(990,`td`,23)(991,`p`),cN(992,`Nome e identificador do campo.`),ag()()(),Tl(993,`tr`,15)(994,`td`,16)(995,`div`,24)(996,`span`,25),cN(997,` p-no-autocomplete`),Gl(998,`br`),ag()()(),Tl(999,`td`,20)(1e3,`code`,27),cN(1001,`boolean`),ag()(),Tl(1002,`td`,22)(1003,`p`)(1004,`code`),cN(1005,`false`),ag()()(),Tl(1006,`td`,23)(1007,`em`)(1008,`strong`),cN(1009,`(opcional)`),ag()(),Tl(1010,`p`),cN(1011,`Define a propriedade nativa `),Tl(1012,`code`),cN(1013,`autocomplete`),ag(),cN(1014,` do campo como `),Tl(1015,`code`),cN(1016,`off`),ag(),cN(1017,`.`),ag(),Tl(1018,`blockquote`)(1019,`p`),cN(1020,`No componente `),Tl(1021,`code`),cN(1022,`po-password`),ag(),cN(1023,` será definido como `),Tl(1024,`code`),cN(1025,`new-password`),ag(),cN(1026,`.`),ag()(),Tl(1027,`p`),cN(1028,`Nos componentes `),Tl(1029,`code`),cN(1030,`po-password`),ag(),cN(1031,` e `),Tl(1032,`code`),cN(1033,`po-login`),ag(),cN(1034,` o valor padrão será `),Tl(1035,`code`),cN(1036,`true`),ag(),cN(1037,`.`),ag()()(),Tl(1038,`tr`,15)(1039,`td`,16)(1040,`div`,24)(1041,`span`,25),cN(1042,` p-optional`),Gl(1043,`br`),ag()()(),Tl(1044,`td`,20)(1045,`code`,27),cN(1046,`boolean`),ag()(),Tl(1047,`td`,22)(1048,`p`)(1049,`code`),cN(1050,`false`),ag()()(),Tl(1051,`td`,23)(1052,`em`)(1053,`strong`),cN(1054,`(opcional)`),ag()(),Tl(1055,`p`),cN(1056,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(1057,`blockquote`)(1058,`p`),cN(1059,`Não será exibida a indicação se:`),ag()(),Tl(1060,`ul`)(1061,`li`),cN(1062,`O campo conter `),Tl(1063,`code`),cN(1064,`p-required`),ag(),cN(1065,`;`),ag(),Tl(1066,`li`),cN(1067,`Não possuir `),Tl(1068,`code`),cN(1069,`p-help`),ag(),cN(1070,` e/ou `),Tl(1071,`code`),cN(1072,`p-label`),ag(),cN(1073,`.`),ag()()()(),Tl(1074,`tr`,15)(1075,`td`,16)(1076,`div`,24)(1077,`span`,25),cN(1078,`p-pattern`),Gl(1079,`br`),ag()()(),Tl(1080,`td`,20)(1081,`code`,26),cN(1082,`string`),ag()(),Tl(1083,`td`,22),cN(1084,`-`),ag(),Tl(1085,`td`,23)(1086,`em`)(1087,`strong`),cN(1088,`(opcional)`),ag()(),Tl(1089,`p`),cN(1090,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Tl(1091,`code`),cN(1092,`(p-mask)`),ag(),cN(1093,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ag()()(),Tl(1094,`tr`,15)(1095,`td`,16)(1096,`div`,24)(1097,`span`,25),cN(1098,` p-placeholder`),Gl(1099,`br`),ag()()(),Tl(1100,`td`,20)(1101,`code`,26),cN(1102,`string`),ag()(),Tl(1103,`td`,22)(1104,`p`),cN(1105,`''`),ag()(),Tl(1106,`td`,23)(1107,`em`)(1108,`strong`),cN(1109,`(opcional)`),ag()(),Tl(1110,`p`),cN(1111,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ag()()(),Tl(1112,`tr`,15)(1113,`td`,16)(1114,`div`,24)(1115,`span`,25),cN(1116,` p-helper`),Gl(1117,`br`),ag()()(),Tl(1118,`td`,20)(1119,`code`,32),cN(1120,`PoHelperOptions `),ag(),Tl(1121,`code`,26),cN(1122,` string`),ag()(),Tl(1123,`td`,22),cN(1124,`-`),ag(),Tl(1125,`td`,23)(1126,`em`)(1127,`strong`),cN(1128,`(opcional)`),ag()(),Tl(1129,`p`),cN(1130,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(1131,`code`),cN(1132,`p-label`),ag(),cN(1133,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(1134,`code`),cN(1135,`p-label`),ag(),cN(1136,`.`),ag(),Tl(1137,`blockquote`)(1138,`p`),cN(1139,`Para mais informações acesse: `),Tl(1140,`a`,33),cN(1141,`https://po-ui.io/documentation/po-helper`),ag(),cN(1142,`.`),ag()(),Tl(1143,`blockquote`)(1144,`p`),cN(1145,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(1146,`code`),cN(1147,`p-additional-help-tooltip`),ag(),cN(1148,` e `),Tl(1149,`code`),cN(1150,`p-additional-help`),ag(),cN(1151,`) será ignorado.`),ag()()()(),Tl(1152,`tr`,15)(1153,`td`,16)(1154,`div`,24)(1155,`span`,25),cN(1156,`p-readonly`),Gl(1157,`br`),ag()()(),Tl(1158,`td`,20)(1159,`code`,27),cN(1160,`boolean`),ag()(),Tl(1161,`td`,22),cN(1162,`-`),ag(),Tl(1163,`td`,23)(1164,`em`)(1165,`strong`),cN(1166,`(opcional)`),ag()(),Tl(1167,`p`),cN(1168,`Indica que o campo será somente leitura.`),ag()()(),Tl(1169,`tr`,15)(1170,`td`,16)(1171,`div`,24)(1172,`span`,25),cN(1173,`p-required`),Gl(1174,`br`),ag()()(),Tl(1175,`td`,20)(1176,`code`,27),cN(1177,`boolean`),ag()(),Tl(1178,`td`,22)(1179,`p`)(1180,`code`),cN(1181,`false`),ag()()(),Tl(1182,`td`,23)(1183,`em`)(1184,`strong`),cN(1185,`(opcional)`),ag()(),Tl(1186,`p`),cN(1187,`Define que o campo será obrigatório.`),ag(),Tl(1188,`blockquote`)(1189,`p`),cN(1190,`Esta propriedade é desconsiderada quando o input está desabilitado `),Tl(1191,`code`),cN(1192,`(p-disabled)`),ag(),cN(1193,`.`),ag()()()(),Tl(1194,`tr`,15)(1195,`td`,16)(1196,`div`,24)(1197,`span`,25),cN(1198,` p-required-field-error-message`),Gl(1199,`br`),ag()()(),Tl(1200,`td`,20)(1201,`code`,27),cN(1202,`boolean`),ag()(),Tl(1203,`td`,22)(1204,`p`)(1205,`code`),cN(1206,`false`),ag()()(),Tl(1207,`td`,23)(1208,`em`)(1209,`strong`),cN(1210,`(opcional)`),ag()(),Tl(1211,`p`),cN(1212,`Exibe a mensagem setada na propriedade `),Tl(1213,`code`),cN(1214,`p-error-pattern`),ag(),cN(1215,` se o campo estiver vazio e for requerido.`),ag(),Tl(1216,`blockquote`)(1217,`p`),cN(1218,`Necessário que a propriedade `),Tl(1219,`code`),cN(1220,`p-required`),ag(),cN(1221,` esteja habilitada.`),ag()()()(),Tl(1222,`tr`,15)(1223,`td`,16)(1224,`div`,24)(1225,`span`,25),cN(1226,` p-show-required`),Gl(1227,`br`),ag()()(),Tl(1228,`td`,20)(1229,`code`,27),cN(1230,`boolean`),ag()(),Tl(1231,`td`,22),cN(1232,`-`),ag(),Tl(1233,`td`,23)(1234,`p`),cN(1235,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(1236,`blockquote`)(1237,`p`),cN(1238,`Não será exibida a indicação se:`),ag()(),Tl(1239,`ul`)(1240,`li`),cN(1241,`Não possuir `),Tl(1242,`code`),cN(1243,`p-help`),ag(),cN(1244,` e/ou `),Tl(1245,`code`),cN(1246,`p-label`),ag(),cN(1247,`.`),ag()()()(),Tl(1248,`tr`,15)(1249,`td`,16)(1250,`div`,24)(1251,`span`,25),cN(1252,` p-size`),Gl(1253,`br`),ag()()(),Tl(1254,`td`,20)(1255,`code`,26),cN(1256,`string`),ag()(),Tl(1257,`td`,22)(1258,`p`)(1259,`code`),cN(1260,`medium`),ag()()(),Tl(1261,`td`,23)(1262,`em`)(1263,`strong`),cN(1264,`(opcional)`),ag()(),Tl(1265,`p`),cN(1266,`Define o tamanho do componente:`),ag(),Tl(1267,`ul`)(1268,`li`)(1269,`code`),cN(1270,`small`),ag(),cN(1271,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(1272,`li`)(1273,`code`),cN(1274,`medium`),ag(),cN(1275,`: altura do input como 44px.`),ag()(),Tl(1276,`blockquote`)(1277,`p`),cN(1278,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(1279,`code`),cN(1280,`medium`),ag(),cN(1281,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1282,`a`,34),cN(1283,`po-theme`),ag(),cN(1284,`.`),ag()()()(),Tl(1285,`tr`,15)(1286,`td`,16)(1287,`div`,24)(1288,`span`,25),cN(1289,` p-step`),Gl(1290,`br`),ag()()(),Tl(1291,`td`,20)(1292,`code`,26),cN(1293,`string`),ag()(),Tl(1294,`td`,22)(1295,`p`),cN(1296,`1`),ag()(),Tl(1297,`td`,23)(1298,`em`)(1299,`strong`),cN(1300,`(opcional)`),ag()(),Tl(1301,`p`),cN(1302,`Intervalo.`),ag()()(),Tl(1303,`tr`,15)(1304,`td`,16)(1305,`div`,24)(1306,`span`,25),cN(1307,` p-upper-case`),Gl(1308,`br`),ag()()(),Tl(1309,`td`,20)(1310,`code`,27),cN(1311,`boolean`),ag()(),Tl(1312,`td`,22),cN(1313,`-`),ag(),Tl(1314,`td`,23)(1315,`p`),cN(1316,`Converte o conteúdo do campo em maiúsulo automaticamente.`),ag()()()(),Tl(1317,`h3`,11),cN(1318,`Métodos`),ag(),Tl(1319,`table`,35)(1320,`tr`,15)(1321,`th`,36)(1322,`div`,24)(1323,`h4`)(1324,`span`,25),cN(1325,` showAdditionalHelp `),ag()()()()(),Tl(1326,`tr`,23)(1327,`td`,23)(1328,`p`),cN(1329,`Método que exibe `),Tl(1330,`code`),cN(1331,`p-helper`),ag(),cN(1332,` ou executa a ação definida em `),Tl(1333,`code`),cN(1334,`p-helper{eventOnClick}`),ag(),cN(1335,` ou em `),Tl(1336,`code`),cN(1337,`p-additionalHelp`),ag(),cN(1338,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1339,`code`),cN(1340,`p-keydown`),ag(),cN(1341,`.`),ag(),Tl(1342,`blockquote`)(1343,`p`),cN(1344,`Exibe ou oculta o conteúdo do componente `),Tl(1345,`code`),cN(1346,`po-helper`),ag(),cN(1347,` quando o componente estiver com foco.`),ag()(),Tl(1348,`pre`)(1349,`code`),cN(1350,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ag()(),Tl(1351,`pre`)(1352,`code`),cN(1353,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(1354,`br`),Tl(1355,`table`,35)(1356,`tr`,15)(1357,`th`,36)(1358,`div`,24)(1359,`h4`)(1360,`span`,25),cN(1361,` focus `),ag()()()()(),Tl(1362,`tr`,23)(1363,`td`,23)(1364,`p`),cN(1365,`Função que atribui foco ao componente.`),ag(),Tl(1366,`p`),cN(1367,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(1368,`pre`)(1369,`code`),cN(1370,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ag()()()()(),Gl(1371,`br`),Tl(1372,`h3`),cN(1373,`Interfaces`),ag(),Tl(1374,`h4`,37)(1375,`code`,5),cN(1376,`ErrorAsyncProperties`),ag()(),Tl(1377,`div`,2)(1378,`p`),cN(1379,`Interface para realizar uma validação assíncrona no componente.`),ag()(),Tl(1380,`h4`,11),cN(1381,`Propriedades`),ag(),Tl(1382,`table`,12)(1383,`tr`,13)(1384,`th`,14),cN(1385,`Nome`),ag(),Tl(1386,`th`,14),cN(1387,`Tipo`),ag(),Tl(1388,`th`,14),cN(1389,`Descrição`),ag()(),Tl(1390,`tr`,15)(1391,`td`,16)(1392,`div`,24)(1393,`span`,25),cN(1394,` errorAsync`),Gl(1395,`br`),ag()()(),Tl(1396,`td`,20)(1397,`code`,38),cN(1398,`(value) => Observable<boolean>`),ag()(),Tl(1399,`td`,23)(1400,`p`),cN(1401,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(1402,`code`),cN(1403,`change`),ag(),cN(1404,` ou `),Tl(1405,`code`),cN(1406,`change-model`),ag(),cN(1407,`, dependendo do valor da propriedade `),Tl(1408,`code`),cN(1409,`triggerMode`),ag(),cN(1410,`.`),ag()()(),Tl(1411,`tr`,15)(1412,`td`,16)(1413,`div`,24)(1414,`span`,25),cN(1415,` triggerMode`),Gl(1416,`br`),ag()()(),Tl(1417,`td`,20)(1418,`code`,39),cN(1419,`'change' `),ag(),Tl(1420,`code`,40),cN(1421,` 'changeModel'`),ag()(),Tl(1422,`td`,23)(1423,`em`)(1424,`strong`),cN(1425,`(opcional)`),ag()(),Tl(1426,`p`),cN(1427,`Controla se o método será executado no disparo do output `),Tl(1428,`code`),cN(1429,`change`),ag(),cN(1430,` ou `),Tl(1431,`code`),cN(1432,`change-model`),ag(),cN(1433,`.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return l})();var Ce=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(w(Xn),w(Cn))};static ɵcmp=Un({type:l,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Number`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(r,i){r&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-number-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-number-basic-view`)(6,`sample-po-number-labs-view`)(7,`sample-po-number-calculate-view`),ag()()()),r&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ie,ae,re,me],encapsulation:2,changeDetection:1})}return l})()}];var pe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[bL.forChild(Ce),bL]})}return l})();var Ge=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=he$1({type:l});static ɵinj=ue({imports:[ar,pe]})}return l})();export{Ge as DocPoNumberModule};