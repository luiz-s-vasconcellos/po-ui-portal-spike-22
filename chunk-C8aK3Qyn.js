import{$r as Zn,Br as Sx,Cr as Mo,Ei as jc,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,K as K3,Kn as Ag,Lr as SF,O as E5,Pi as mt,Qt as ea,Ri as nu,Rt as _oe,Si as iu,Sr as Mm,Vi as p,Vr as TF,X as Lf,Xi as sO,Xt as doe,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,i as _a,ir as EF,ji as mO,k as Ec,ki as kF,mn as ni,mr as He$1,ni as _o,pa as wg,r as Ta,rt as Ote,sa as vo,ta as ue,ti as _a$1,ua as wK,un as m5,ur as Fx,va as y_,wi as jE,xi as ir,xr as MK,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var fe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-input-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`input`,`p-label`,`PO Input`]],template:function(l,o){l&1&&nu(0,`po-input`,0)},dependencies:[A5],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-input-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Input Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-input-basic/sample-po-input-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-input-basic/sample-po-input-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-input-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Le,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,fe],encapsulation:2,changeDetection:1})}return a})();var ke=(()=>{class a{helperText;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`maskFormatModel`,label:`Formatted Model`},{value:`maskNoLengthValidation`,label:`Mask No Length Validation`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`uppercase`,label:`Upper Case`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}restore(){this.helperText=``,this.input=void 0,this.size=`medium`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-input-labs`]],standalone:!1,decls:22,vars:44,consts:[[`f`,`ngForm`],[`name`,`input`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-mask`,`p-mask-format-model`,`p-maxlength`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-pattern`,`p-placeholder`,`p-required`,`p-required-field-error-message`,`p-readonly`,`p-upper-case`,`p-show-required`,`p-mask-no-length-validation`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`mask`,`p-clean`,``,`p-help`,`Ex.: Zip code: '99999-999'; License plate: '@@@-9999'`,`p-label`,`Mask`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`pattern`,`p-clean`,``,`p-help`,`Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'`,`p-label`,`Pattern (Regex)`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let s=Sx();jc(0,`po-input`,1),JN(),ob(`ngModelChange`,function(p){return y_(s),sO(o.input,p)||(o.input=p),v_(p)}),mt(`p-blur`,function(){return o.changeEvent(`p-blur`)})(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-enter`,function(){return o.changeEvent(`p-enter`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3)(4,`po-info`,4),wg(),nu(5,`po-divider`),jc(6,`form`,null,0)(8,`po-input`,5),JN(),ob(`ngModelChange`,function(p){return y_(s),sO(o.label,p)||(o.label=p),v_(p)}),wg(),jc(9,`po-input`,6),JN(),ob(`ngModelChange`,function(p){return y_(s),sO(o.help,p)||(o.help=p),v_(p)}),wg(),jc(10,`po-input`,7),JN(),ob(`ngModelChange`,function(p){return y_(s),sO(o.helperText,p)||(o.helperText=p),v_(p)}),wg(),jc(11,`po-input`,8),JN(),ob(`ngModelChange`,function(p){return y_(s),sO(o.placeholder,p)||(o.placeholder=p),v_(p)}),wg(),jc(12,`po-input`,9),JN(),ob(`ngModelChange`,function(p){return y_(s),sO(o.errorPattern,p)||(o.errorPattern=p),v_(p)}),wg(),jc(13,`po-input`,10),JN(),ob(`ngModelChange`,function(p){return y_(s),sO(o.mask,p)||(o.mask=p),v_(p)}),wg(),jc(14,`po-input`,11),JN(),ob(`ngModelChange`,function(p){return y_(s),sO(o.pattern,p)||(o.pattern=p),v_(p)}),wg(),jc(15,`po-number`,12),JN(),ob(`ngModelChange`,function(p){return y_(s),sO(o.minlength,p)||(o.minlength=p),v_(p)}),wg(),jc(16,`po-number`,13),JN(),ob(`ngModelChange`,function(p){return y_(s),sO(o.maxlength,p)||(o.maxlength=p),v_(p)}),wg(),jc(17,`po-select`,14),JN(),ob(`ngModelChange`,function(p){return y_(s),sO(o.icon,p)||(o.icon=p),v_(p)}),wg(),jc(18,`po-checkbox-group`,15),JN(),ob(`ngModelChange`,function(p){return y_(s),sO(o.properties,p)||(o.properties=p),v_(p)}),wg(),jc(19,`po-radio-group`,16),JN(),ob(`ngModelChange`,function(p){return y_(s),sO(o.size,p)||(o.size=p),v_(p)}),wg(),jc(20,`div`,2)(21,`po-button`,17),mt(`p-click`,function(){return y_(s),Fx(7).reset(),v_(o.restore())}),wg()()()}l&2&&(ib(`ngModel`,o.input),jE(`p-helper`,o.helperText)(`p-clean`,o.properties?.includes(`clean`))(`p-disabled`,o.properties?.includes(`disabled`))(`p-error-pattern`,o.errorPattern)(`p-help`,o.help)(`p-icon`,o.icon)(`p-label`,o.label)(`p-loading`,o.properties?.includes(`loading`))(`p-mask`,o.mask)(`p-mask-format-model`,o.properties?.includes(`maskFormatModel`))(`p-maxlength`,o.maxlength)(`p-minlength`,o.minlength)(`p-no-autocomplete`,o.properties?.includes(`noAutocomplete`))(`p-optional`,o.properties?.includes(`optional`))(`p-pattern`,o.pattern)(`p-placeholder`,o.placeholder)(`p-required`,o.properties?.includes(`required`))(`p-required-field-error-message`,o.properties?.includes(`requiredFieldErrorMessage`))(`p-readonly`,o.properties?.includes(`readonly`))(`p-upper-case`,o.properties?.includes(`uppercase`))(`p-show-required`,o.properties?.includes(`showRequired`))(`p-mask-no-length-validation`,o.properties?.includes(`maskNoLengthValidation`))(`p-size`,o.size)(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),t0(),rg(3),jE(`p-value`,o.input),rg(),jE(`p-value`,o.event),rg(4),ib(`ngModel`,o.label),t0(),rg(),ib(`ngModel`,o.help),t0(),rg(),ib(`ngModel`,o.helperText),t0(),rg(),ib(`ngModel`,o.placeholder),t0(),rg(),ib(`ngModel`,o.errorPattern),t0(),rg(),ib(`ngModel`,o.mask),t0(),rg(),ib(`ngModel`,o.pattern),t0(),rg(),ib(`ngModel`,o.minlength),t0(),rg(),ib(`ngModel`,o.maxlength),t0(),rg(),ib(`ngModel`,o.icon),jE(`p-options`,o.iconOptions),t0(),rg(),ib(`ngModel`,o.properties),jE(`p-options`,o.propertiesOptions),t0(),rg(),ib(`ngModel`,o.size),jE(`p-options`,o.sizeOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ni,Lf,m5,A5,doe,Ote,moe,_oe],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a});var Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-input-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Input Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-input-labs/sample-po-input-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-input
  name="input"
  [(ngModel)]="input"
  [p-helper]="helperText"
  [p-clean]="properties?.includes('clean')"
  [p-disabled]="properties?.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="properties?.includes('loading')"
  [p-mask]="mask"
  [p-mask-format-model]="properties?.includes('maskFormatModel')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties?.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-required]="properties?.includes('required')"
  [p-required-field-error-message]="properties?.includes('requiredFieldErrorMessage')"
  [p-readonly]="properties?.includes('readonly')"
  [p-upper-case]="properties?.includes('uppercase')"
  [p-show-required]="properties?.includes('showRequired')"
  [p-mask-no-length-validation]="properties?.includes('maskNoLengthValidation')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-input>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="input"> </po-info>

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
    class="po-md-12 po-lg-6"
    name="mask"
    [(ngModel)]="mask"
    p-clean
    p-help="Ex.: Zip code: '99999-999'; License plate: '@@@-9999'"
    p-label="Mask"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

  <po-select class="po-md-6" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-input-labs/sample-po-input-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-labs',
  templateUrl: './sample-po-input-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputLabsComponent implements OnInit {
  helperText: string;
  input: string;
  errorPattern: string;
  event: string;
  help: string;
  icon: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' },
    { value: 'maskFormatModel', label: 'Formatted Model' },
    { value: 'maskNoLengthValidation', label: 'Mask No Length Validation' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'uppercase', label: 'Upper Case' },
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
    this.input = undefined;
    this.size = 'medium';
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-input-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ae,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ke],encapsulation:2,changeDetection:1})}return a})();var Re=[`reactiveFormData`];var Pe=(()=>{class a{fb=p(MK);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:`Close`};constructor(){this.createReactiveForm()}createReactiveForm(){this.reactiveForm=this.fb.group({name:[``,Mm.compose([Mm.required,Mm.minLength(5),Mm.maxLength(30)])],address:[``,Mm.compose([Mm.required,Mm.minLength(5),Mm.maxLength(50)])],number:[``,Mm.compose([Mm.required,Mm.min(1),Mm.max(99999)])],email:[``,Mm.required],website:[``,Mm.required]})}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-input-reactive-form`]],viewQuery:function(l,o){if(l&1&&iu(Re,7),l&2){let s;vo(s=_o())&&(o.reactiveFormModal=s.first)}},standalone:!1,decls:23,vars:8,consts:[[`reactiveFormData`,``],[3,`formGroup`],[1,`po-row`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-md-12`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-9`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-md-12`,3,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`Number`,1,`po-md-6`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,3,`p-value`],[`p-label`,`Website`,1,`po-md-6`,3,`p-value`]],template:function(l,o){l&1&&(jc(0,`form`,1)(1,`div`,2)(2,`po-input`,3),JN(),wg()(),jc(3,`div`,2)(4,`po-input`,4),JN(),wg(),jc(5,`po-number`,5),JN(),wg()(),jc(6,`div`,2)(7,`po-email`,6),JN(),wg(),jc(8,`po-url`,7),JN(),wg()(),jc(9,`div`,2)(10,`po-button`,8),mt(`p-click`,function(){return o.saveForm()}),wg()()(),jc(11,`po-modal`,9,0)(13,`div`,2),nu(14,`po-info`,10),wg(),nu(15,`po-divider`),jc(16,`div`,2),nu(17,`po-info`,11)(18,`po-info`,12),wg(),nu(19,`po-divider`),jc(20,`div`,2),nu(21,`po-info`,13)(22,`po-info`,14),wg()()),l&2&&(jE(`formGroup`,o.reactiveForm),rg(2),t0(),rg(2),t0(),rg(),t0(),rg(2),t0(),rg(),t0(),rg(2),jE(`p-disabled`,!o.reactiveForm.valid),rg(),jE(`p-primary-action`,o.modalPrimaryAction),rg(3),jE(`p-value`,o.reactiveForm.controls.name.value),rg(3),jE(`p-value`,o.reactiveForm.controls.address.value),rg(),jE(`p-value`,o.reactiveForm.controls.number.value),rg(3),jE(`p-value`,o.reactiveForm.controls.email.value),rg(),jE(`p-value`,o.reactiveForm.controls.website.value))},dependencies:[wK,CK,EK,SF,kF,ni,Lf,K3,A5,doe,E5,_oe,ea],encapsulation:2,changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-input-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Input - Reactive Form`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-input-reactive-form/sample-po-input-reactive-form.component.html`),wg(),jc(13,`pre`,7),iO(14,`<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input class="po-md-12" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address"> </po-input>

    <po-number class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-reactive-form',
  templateUrl: './sample-po-input-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputReactiveFormComponent {
  private fb = inject(UntypedFormBuilder);

  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  reactiveForm: UntypedFormGroup;

  public readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  constructor() {
    this.createReactiveForm();
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-input-reactive-form`),wg(),nu(23,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Oe,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Pe],encapsulation:2,changeDetection:1})}return a})();var Z=`999.999.999-99`;var He=`99.999.999/9999-99`;function q(a){return(a||``).replace(/\D/g,``)}function z(a){return a>11?He:Z}var _e=(()=>{class a{cd;document=``;mask=Z;formMask=Z;form=new Mo({document:new _a$1(``)});constructor(r){this.cd=r}handleKeydown(r){this.updateMask(this.predictMaskFromKeydown(r,this.mask))}handlePaste(r){this.updateMask(this.predictMaskFromPaste(r))}handleChangeModel(r){this.mask=z(q(r).length)}handleFormKeydown(r){this.updateFormMask(this.predictMaskFromKeydown(r,this.formMask))}handleFormPaste(r){this.updateFormMask(this.predictMaskFromPaste(r))}handleFormChangeModel(r){this.formMask=z(q(r).length)}predictMaskFromKeydown(r,l){if(r.ctrlKey||r.metaKey||r.altKey)return l;let o=r.target,s=o.value||``,d=o.selectionStart??s.length,p=o.selectionEnd??d,L=q(s).length-q(s.slice(d,p)).length;if(/^[0-9]$/.test(r.key))L++;else if(r.key===`Backspace`&&d===p&&d>0)L--;else if(r.key===`Delete`&&d===p&&d<s.length)L--;else return l;return z(L)}predictMaskFromPaste(r){let l=r.target,o=l.value||``,s=l.selectionStart??o.length,d=l.selectionEnd??s,p=q(r.clipboardData?.getData(`text`)||``);return z(q(o).length-q(o.slice(s,d)).length+p.length)}updateMask(r){r!==this.mask&&(this.mask=r,this.cd.detectChanges())}updateFormMask(r){r!==this.formMask&&(this.formMask=r,this.cd.detectChanges())}static ɵfac=function(l){return new(l||a)(b(He$1))};static ɵcmp=Zn({type:a,selectors:[[`sample-po-input-mask-dynamic`]],standalone:!1,decls:7,vars:4,consts:[[1,`po-row`],[`p-title`,`CPF / CNPJ com ngModel`,1,`po-lg-6`,`po-md-12`],[`name`,`document`,`p-clean`,``,`p-label`,`CPF / CNPJ`,`p-placeholder`,`Informe o CPF ou o CNPJ`,1,`po-md-12`,3,`ngModelChange`,`p-keydown`,`paste`,`p-change-model`,`p-mask`,`ngModel`],[`p-title`,`CPF / CNPJ com Reactive Forms`,1,`po-lg-6`,`po-md-12`],[1,`po-row`,3,`formGroup`],[`formControlName`,`document`,`p-clean`,``,`p-label`,`CPF / CNPJ`,`p-placeholder`,`Informe o CPF ou o CNPJ`,1,`po-md-12`,3,`p-keydown`,`paste`,`p-change-model`,`p-mask`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`po-container`,1)(2,`div`,0)(3,`po-input`,2),JN(),ob(`ngModelChange`,function(d){return sO(o.document,d)||(o.document=d),d}),mt(`p-keydown`,function(d){return o.handleKeydown(d)})(`paste`,function(d){return o.handlePaste(d)})(`p-change-model`,function(d){return o.handleChangeModel(d)}),wg()()(),jc(4,`po-container`,3)(5,`div`,4)(6,`po-input`,5),JN(),mt(`p-keydown`,function(d){return o.handleFormKeydown(d)})(`paste`,function(d){return o.handleFormPaste(d)})(`p-change-model`,function(d){return o.handleFormChangeModel(d)}),wg()()()()),l&2&&(rg(3),jE(`p-mask`,o.mask),ib(`ngModel`,o.document),t0(),rg(2),jE(`formGroup`,o.form),rg(),jE(`p-mask`,o.formMask),t0())},dependencies:[CK,EK,TF,SF,kF,Ec,A5],encapsulation:2})}return a})();var je=a=>({"docs-sample-code-tabs":a});var Fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-input-mask-dynamic-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Input - Dynamic Mask (CPF/CNPJ)`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-input-mask-dynamic/sample-po-input-mask-dynamic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-container class="po-lg-6 po-md-12" p-title="CPF / CNPJ com ngModel">
    <div class="po-row">
      <po-input
        class="po-md-12"
        name="document"
        p-clean
        p-label="CPF / CNPJ"
        p-placeholder="Informe o CPF ou o CNPJ"
        [p-mask]="mask"
        [(ngModel)]="document"
        (p-keydown)="handleKeydown($event)"
        (paste)="handlePaste($event)"
        (p-change-model)="handleChangeModel($event)"
      >
      </po-input>
    </div>
  </po-container>

  <po-container class="po-lg-6 po-md-12" p-title="CPF / CNPJ com Reactive Forms">
    <div class="po-row" [formGroup]="form">
      <po-input
        class="po-md-12"
        formControlName="document"
        p-clean
        p-label="CPF / CNPJ"
        p-placeholder="Informe o CPF ou o CNPJ"
        [p-mask]="formMask"
        (p-keydown)="handleFormKeydown($event)"
        (paste)="handleFormPaste($event)"
        (p-change-model)="handleFormChangeModel($event)"
      >
      </po-input>
    </div>
  </po-container>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-input-mask-dynamic/sample-po-input-mask-dynamic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MASK_CPF, onlyDigits, resolveMask } from './document-mask';

@Component({
  selector: 'sample-po-input-mask-dynamic',
  templateUrl: './sample-po-input-mask-dynamic.component.html',
  standalone: false
})
export class SamplePoInputMaskDynamicComponent {
  // NgModel
  document: string = '';
  mask: string = MASK_CPF;

  // Reactive Forms
  formMask: string = MASK_CPF;
  form = new FormGroup({
    document: new FormControl('')
  });

  constructor(private cd: ChangeDetectorRef) {}

  // --- NgModel ---

  handleKeydown(event: KeyboardEvent): void {
    this.updateMask(this.predictMaskFromKeydown(event, this.mask));
  }

  handlePaste(event: ClipboardEvent): void {
    this.updateMask(this.predictMaskFromPaste(event));
  }

  handleChangeModel(value: string): void {
    this.mask = resolveMask(onlyDigits(value).length);
  }

  // --- Reactive Forms ---

  handleFormKeydown(event: KeyboardEvent): void {
    this.updateFormMask(this.predictMaskFromKeydown(event, this.formMask));
  }

  handleFormPaste(event: ClipboardEvent): void {
    this.updateFormMask(this.predictMaskFromPaste(event));
  }

  handleFormChangeModel(value: string): void {
    this.formMask = resolveMask(onlyDigits(value).length);
  }

  /**
   * Calcula quantos d\xEDgitos o campo ter\xE1 ap\xF3s a tecla ser processada e retorna a m\xE1scara
   * correspondente. A troca precisa acontecer ANTES do po-input consumir a tecla.
   */
  private predictMaskFromKeydown(event: KeyboardEvent, currentMask: string): string {
    if (event.ctrlKey || event.metaKey || event.altKey) {
      return currentMask;
    }

    const input = event.target as HTMLInputElement;
    const value = input.value || '';
    const start = input.selectionStart ?? value.length;
    const end = input.selectionEnd ?? start;

    let length = onlyDigits(value).length - onlyDigits(value.slice(start, end)).length;

    if (/^[0-9]$/.test(event.key)) {
      length++;
    } else if (event.key === 'Backspace' && start === end && start > 0) {
      length--;
    } else if (event.key === 'Delete' && start === end && start < value.length) {
      length--;
    } else {
      return currentMask;
    }

    return resolveMask(length);
  }

  /** Calcula a quantidade de d\xEDgitos resultante de um paste e retorna a m\xE1scara correspondente. */
  private predictMaskFromPaste(event: ClipboardEvent): string {
    const input = event.target as HTMLInputElement;
    const value = input.value || '';
    const start = input.selectionStart ?? value.length;
    const end = input.selectionEnd ?? start;

    const pasted = onlyDigits(event.clipboardData?.getData('text') || '');
    const kept = onlyDigits(value).length - onlyDigits(value.slice(start, end)).length;

    return resolveMask(kept + pasted.length);
  }

  /**
   * Atualiza \`this.mask\` e propaga o binding imediatamente via detectChanges.
   * O detectChanges \xE9 necess\xE1rio porque o po-input consome a m\xE1scara ainda dentro
   * do mesmo evento de teclado, antes do pr\xF3ximo ciclo de detec\xE7\xE3o de mudan\xE7as.
   */
  private updateMask(newMask: string): void {
    if (newMask !== this.mask) {
      this.mask = newMask;
      this.cd.detectChanges();
    }
  }

  /** Mesmo que \`updateMask\`, mas para o campo do Reactive Forms. */
  private updateFormMask(newMask: string): void {
    if (newMask !== this.formMask) {
      this.formMask = newMask;
      this.cd.detectChanges();
    }
  }
}
`),wg(),jc(21,`label`,6),iO(22,`sample-po-input-mask-dynamic/document-mask.ts`),wg(),jc(23,`pre`,9),iO(24,`export const MASK_CPF = '999.999.999-99';
export const MASK_CNPJ = '99.999.999/9999-99';

const CPF_LENGTH = 11;

export function onlyDigits(value: string): string {
  return (value || '').replace(/\\D/g, '');
}

export function resolveMask(digitCount: number): string {
  return digitCount > CPF_LENGTH ? MASK_CNPJ : MASK_CPF;
}
`),wg()()()()(),jc(25,`div`,10),nu(26,`sample-po-input-mask-dynamic`),wg(),nu(27,`hr`)),l&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,je,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,_e],encapsulation:2,changeDetection:1})}return a})();var De=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Zn({type:a,selectors:[[`sample-po-input-doc`]],standalone:!1,decls:1352,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),iO(9,`Não esqueça de importar o módulo `),jc(10,`code`),iO(11,`FormsModule`),wg(),iO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),iO(14,`ReactiveFormsModule`),wg(),iO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),iO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),iO(20,`PoInputComponent`),wg()(),jc(21,`div`,2)(22,`p`),iO(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),wg(),jc(24,`p`),iO(25,`Importante:`),wg(),jc(26,`ul`)(27,`li`),iO(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),wg()(),jc(29,`h4`),iO(30,`Tokens customizáveis`),wg(),jc(31,`p`),iO(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),nu(33,`br`),iO(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),jc(35,`code`),iO(36,`.po-input`),wg()(),jc(37,`blockquote`)(38,`p`),iO(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),jc(40,`a`,6),iO(41,`Grid System`),wg(),iO(42,`.`),wg()(),jc(43,`blockquote`)(44,`p`),iO(45,`Para maiores informações, acesse o guia `),jc(46,`a`,7),iO(47,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(48,`.`),wg()(),jc(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),iO(53,`Propriedade`),wg(),jc(54,`th`),iO(55,`Descrição`),wg(),jc(56,`th`),iO(57,`Valor Padrão`),wg()()(),jc(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),iO(62,`Default Values`),wg()(),nu(63,`td`)(64,`td`),wg(),jc(65,`tr`)(66,`td`)(67,`code`),iO(68,`--font-family`),wg()(),jc(69,`td`),iO(70,`Família tipográfica usada`),wg(),jc(71,`td`)(72,`code`),iO(73,`var(--font-family-theme)`),wg()()(),jc(74,`tr`)(75,`td`)(76,`code`),iO(77,`--font-size`),wg()(),jc(78,`td`),iO(79,`Tamanho da fonte`),wg(),jc(80,`td`)(81,`code`),iO(82,`var(--font-size-default)`),wg()()(),jc(83,`tr`)(84,`td`)(85,`code`),iO(86,`--text-color-placeholder`),wg()(),jc(87,`td`),iO(88,`Cor do texto placeholder`),wg(),jc(89,`td`)(90,`code`),iO(91,`var(--color-neutral-light-30)`),wg()()(),jc(92,`tr`)(93,`td`)(94,`code`),iO(95,`--color`),wg()(),jc(96,`td`),iO(97,`Cor pincipal do input`),wg(),jc(98,`td`)(99,`code`),iO(100,`var(--color-neutral-dark-70)`),wg()()(),jc(101,`tr`)(102,`td`)(103,`code`),iO(104,`--background`),wg()(),jc(105,`td`),iO(106,`Cor de background`),wg(),jc(107,`td`)(108,`code`),iO(109,`var(--color-neutral-light-05)`),wg()()(),jc(110,`tr`)(111,`td`)(112,`code`),iO(113,`--padding`),wg()(),jc(114,`td`),iO(115,`Preenchimento`),wg(),jc(116,`td`)(117,`code`),iO(118,`0 0.5rem`),wg()()(),jc(119,`tr`)(120,`td`)(121,`code`),iO(122,`--text-color`),wg()(),jc(123,`td`),iO(124,`Cor do texto`),wg(),jc(125,`td`)(126,`code`),iO(127,`var(--color-neutral-dark-90)`),wg()()(),jc(128,`tr`)(129,`td`)(130,`code`),iO(131,`--field-container-title-justify`),wg()(),jc(132,`td`),iO(133,`Alinhamento horizontal do título (`),jc(134,`code`),iO(135,`justify-content`),wg(),iO(136,`)`),wg(),jc(137,`td`)(138,`code`),iO(139,`space-between`),wg()()(),jc(140,`tr`)(141,`td`)(142,`code`),iO(143,`--field-container-title-flex`),wg()(),jc(144,`td`),iO(145,`Flex do título (`),jc(146,`code`),iO(147,`flex`),wg(),iO(148,`)`),wg(),jc(149,`td`)(150,`code`),iO(151,`1 auto`),wg()()(),jc(152,`tr`)(153,`td`)(154,`strong`),iO(155,`Hover`),wg()(),nu(156,`td`)(157,`td`),wg(),jc(158,`tr`)(159,`td`)(160,`code`),iO(161,`--color-hover`),wg()(),jc(162,`td`),iO(163,`Cor principal no estado hover`),wg(),jc(164,`td`)(165,`code`),iO(166,`var(--color-brand-01-dark)`),wg()()(),jc(167,`tr`)(168,`td`)(169,`code`),iO(170,`--background-hover`),wg()(),jc(171,`td`),iO(172,`Cor de background no estado hover`),wg(),jc(173,`td`)(174,`code`),iO(175,`var(--color-brand-01-lightest)`),wg()()(),jc(176,`tr`)(177,`td`)(178,`strong`),iO(179,`Focused`),wg()(),nu(180,`td`)(181,`td`),wg(),jc(182,`tr`)(183,`td`)(184,`code`),iO(185,`--color-focused`),wg()(),jc(186,`td`),iO(187,`Cor principal no estado de focus`),wg(),jc(188,`td`)(189,`code`),iO(190,`var(--color-action-default)`),wg()()(),jc(191,`tr`)(192,`td`)(193,`code`),iO(194,`--outline-color-focused`),wg()(),jc(195,`td`),iO(196,`Cor do outline do estado de focus`),wg(),jc(197,`td`)(198,`code`),iO(199,`var(--color-action-focus)`),wg()()(),jc(200,`tr`)(201,`td`)(202,`strong`),iO(203,`Disabled`),wg()(),nu(204,`td`)(205,`td`),wg(),jc(206,`tr`)(207,`td`)(208,`code`),iO(209,`--color-disabled`),wg()(),jc(210,`td`),iO(211,`Cor principal no estado disabled`),wg(),jc(212,`td`)(213,`code`),iO(214,`var(--color-neutral-light-30)`),wg()()(),jc(215,`tr`)(216,`td`)(217,`code`),iO(218,`--background-disabled`),wg()(),jc(219,`td`),iO(220,`Cor de background no estado disabled`),wg(),jc(221,`td`)(222,`code`),iO(223,`var(--color-neutral-light-20)`),wg()()(),jc(224,`tr`)(225,`td`)(226,`code`),iO(227,`--text-color-disabled`),wg()(),jc(228,`td`),iO(229,`Cor do texto no estado disabled`),wg(),jc(230,`td`)(231,`code`),iO(232,`var(--color-neutral-dark-70)`),wg()()()()(),nu(233,`br`),wg(),jc(234,`div`,8)(235,`h4`,9),iO(236,`Seletor`),wg(),jc(237,`pre`,10),iO(238,`<po-input
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
    p-maxlength="number"
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
    p-upper-case="boolean" >
</po-input>
`),wg()(),jc(239,`h4`,11),iO(240,`Propriedades`),wg(),jc(241,`table`,12)(242,`tr`,13)(243,`th`,14),iO(244,`Nome`),wg(),jc(245,`th`,14),iO(246,`Tipo`),wg(),jc(247,`th`,14),iO(248,`Padrão`),wg(),jc(249,`th`,14),iO(250,`Descrição`),wg()(),jc(251,`tr`,15)(252,`td`,16)(253,`div`,17)(254,`span`,18),iO(255,` (p-additional-help)`),nu(256,`br`),wg()(),jc(257,`div`,19),iO(258,`Deprecated`),wg()(),jc(259,`td`,20)(260,`code`,21),iO(261,`EventEmitter`),wg()(),jc(262,`td`,22),iO(263,`-`),wg(),jc(264,`td`,23)(265,`em`)(266,`strong`),iO(267,`(opcional)`),wg()(),jc(268,`p`),iO(269,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(270,`blockquote`)(271,`p`),iO(272,`Essa propriedade está `),jc(273,`strong`),iO(274,`depreciada`),wg(),iO(275,` e será removida na versão `),jc(276,`code`),iO(277,`23.x.x`),wg(),iO(278,`. Recomendamos utilizar a propriedade `),jc(279,`code`),iO(280,`p-helper`),wg(),iO(281,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(282,`tr`,15)(283,`td`,16)(284,`div`,24)(285,`span`,25),iO(286,` p-additional-help-tooltip`),nu(287,`br`),wg()(),jc(288,`div`,19),iO(289,`Deprecated`),wg()(),jc(290,`td`,20)(291,`code`,26),iO(292,`string`),wg()(),jc(293,`td`,22),iO(294,`-`),wg(),jc(295,`td`,23)(296,`em`)(297,`strong`),iO(298,`(opcional)`),wg()(),jc(299,`p`),iO(300,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(301,`code`),iO(302,`po-helper`),wg(),iO(303,`.
`),jc(304,`strong`),iO(305,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(306,`blockquote`)(307,`p`),iO(308,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(309,`blockquote`)(310,`p`),iO(311,`Essa propriedade está `),jc(312,`strong`),iO(313,`depreciada`),wg(),iO(314,` e será removida na versão `),jc(315,`code`),iO(316,`23.x.x`),wg(),iO(317,`. Recomendamos utilizar a propriedade `),jc(318,`code`),iO(319,`p-helper`),wg(),iO(320,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(321,`tr`,15)(322,`td`,16)(323,`div`,24)(324,`span`,25),iO(325,` p-append-in-body`),nu(326,`br`),wg()()(),jc(327,`td`,20)(328,`code`,27),iO(329,`boolean`),wg()(),jc(330,`td`,22)(331,`p`)(332,`code`),iO(333,`false`),wg()()(),jc(334,`td`,23)(335,`em`)(336,`strong`),iO(337,`(opcional)`),wg()(),jc(338,`p`),iO(339,`Define que o popover (`),jc(340,`code`),iO(341,`p-helper`),wg(),iO(342,` e/ou `),jc(343,`code`),iO(344,`p-error-limit`),wg(),iO(345,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(346,`blockquote`)(347,`p`),iO(348,`Quando utilizado com `),jc(349,`code`),iO(350,`p-helper`),wg(),iO(351,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(352,`tr`,15)(353,`td`,16)(354,`div`,24)(355,`span`,25),iO(356,` p-auto-focus`),nu(357,`br`),wg()()(),jc(358,`td`,20)(359,`code`,27),iO(360,`boolean`),wg()(),jc(361,`td`,22)(362,`p`)(363,`code`),iO(364,`false`),wg()()(),jc(365,`td`,23)(366,`em`)(367,`strong`),iO(368,`(opcional)`),wg()(),jc(369,`p`),iO(370,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(371,`blockquote`)(372,`p`),iO(373,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(374,`tr`,15)(375,`td`,16)(376,`div`,17)(377,`span`,18),iO(378,` (p-blur)`),nu(379,`br`),wg()()(),jc(380,`td`,20)(381,`code`,21),iO(382,`EventEmitter`),wg()(),jc(383,`td`,22),iO(384,`-`),wg(),jc(385,`td`,23)(386,`em`)(387,`strong`),iO(388,`(opcional)`),wg()(),jc(389,`p`),iO(390,`Evento disparado ao sair do campo.`),wg()()(),jc(391,`tr`,15)(392,`td`,16)(393,`div`,17)(394,`span`,18),iO(395,` (p-change)`),nu(396,`br`),wg()()(),jc(397,`td`,20)(398,`code`,21),iO(399,`EventEmitter`),wg()(),jc(400,`td`,22),iO(401,`-`),wg(),jc(402,`td`,23)(403,`em`)(404,`strong`),iO(405,`(opcional)`),wg()(),jc(406,`p`),iO(407,`Evento disparado ao alterar valor e deixar o campo.`),wg()()(),jc(408,`tr`,15)(409,`td`,16)(410,`div`,17)(411,`span`,18),iO(412,` (p-change-model)`),nu(413,`br`),wg()()(),jc(414,`td`,20)(415,`code`,21),iO(416,`EventEmitter`),wg()(),jc(417,`td`,22),iO(418,`-`),wg(),jc(419,`td`,23)(420,`em`)(421,`strong`),iO(422,`(opcional)`),wg()(),jc(423,`p`),iO(424,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(425,`code`),iO(426,`setValue`),wg(),iO(427,`, `),jc(428,`code`),iO(429,`patchValue`),wg(),iO(430,`, carregamento assíncrono).`),wg(),jc(431,`p`),iO(432,`Diferentemente do `),jc(433,`code`),iO(434,`p-change`),wg(),iO(435,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(436,`code`),iO(437,`p-change-model`),wg(),iO(438,` cobre todos os cenários de alteração de valor.`),wg(),jc(439,`p`),iO(440,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(441,`tr`,15)(442,`td`,16)(443,`div`,24)(444,`span`,25),iO(445,`p-clean`),nu(446,`br`),wg()()(),jc(447,`td`,20)(448,`code`,27),iO(449,`boolean`),wg()(),jc(450,`td`,22),iO(451,`-`),wg(),jc(452,`td`,23)(453,`em`)(454,`strong`),iO(455,`(opcional)`),wg()(),jc(456,`p`),iO(457,`Se verdadeiro, o campo receberá um botão para ser limpo.`),wg()()(),jc(458,`tr`,15)(459,`td`,16)(460,`div`,24)(461,`span`,25),iO(462,` p-compact-label`),nu(463,`br`),wg()()(),jc(464,`td`,20)(465,`code`,27),iO(466,`boolean`),wg()(),jc(467,`td`,22)(468,`p`)(469,`code`),iO(470,`false`),wg()()(),jc(471,`td`,23)(472,`em`)(473,`strong`),iO(474,`(opcional)`),wg()(),jc(475,`p`),iO(476,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(477,`p`),iO(478,`Quando habilitado (`),jc(479,`code`),iO(480,`true`),wg(),iO(481,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(482,`ul`)(483,`li`)(484,`code`),iO(485,`po-label`),wg()(),jc(486,`li`)(487,`code`),iO(488,`p-requirement (showRequired)`),wg()(),jc(489,`li`)(490,`code`),iO(491,`po-helper`),wg()()(),jc(492,`p`),iO(493,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(494,`p`),iO(495,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(496,`ul`)(497,`li`)(498,`code`),iO(499,`--field-container-title-justify`),wg()(),jc(500,`li`)(501,`code`),iO(502,`--field-container-title-flex`),wg()()(),jc(503,`p`),iO(504,`Exemplo:`),wg(),jc(505,`pre`)(506,`code`),iO(507,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(508,`p`),iO(509,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(510,`tr`,15)(511,`td`,16)(512,`div`,24)(513,`span`,25),iO(514,`p-disabled`),nu(515,`br`),wg()()(),jc(516,`td`,20)(517,`code`,27),iO(518,`boolean`),wg()(),jc(519,`td`,22)(520,`p`)(521,`code`),iO(522,`false`),wg()()(),jc(523,`td`,23)(524,`em`)(525,`strong`),iO(526,`(opcional)`),wg()(),jc(527,`p`),iO(528,`Se verdadeiro, desabilita o campo.`),wg()()(),jc(529,`tr`,15)(530,`td`,16)(531,`div`,24)(532,`span`,25),iO(533,` p-emit-all-changes`),nu(534,`br`),wg()()(),jc(535,`td`,20)(536,`code`,27),iO(537,`boolean`),wg()(),jc(538,`td`,22)(539,`p`)(540,`code`),iO(541,`false`),wg()()(),jc(542,`td`,23)(543,`em`)(544,`strong`),iO(545,`(opcional)`),wg()(),jc(546,`p`),iO(547,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),wg()()(),jc(548,`tr`,15)(549,`td`,16)(550,`div`,17)(551,`span`,18),iO(552,` (p-enter)`),nu(553,`br`),wg()()(),jc(554,`td`,20)(555,`code`,21),iO(556,`EventEmitter`),wg()(),jc(557,`td`,22),iO(558,`-`),wg(),jc(559,`td`,23)(560,`em`)(561,`strong`),iO(562,`(opcional)`),wg()(),jc(563,`p`),iO(564,`Evento disparado ao entrar do campo.`),wg()()(),jc(565,`tr`,15)(566,`td`,16)(567,`div`,24)(568,`span`,25),iO(569,` p-error-async-properties`),nu(570,`br`),wg()()(),jc(571,`td`,20)(572,`code`,28),iO(573,`ErrorAsyncProperties`),wg()(),jc(574,`td`,22),iO(575,`-`),wg(),jc(576,`td`,23)(577,`em`)(578,`strong`),iO(579,`(opcional)`),wg()(),jc(580,`p`),iO(581,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),jc(582,`code`),iO(583,`Reactive Forms`),wg(),iO(584,`. Em formulários reativos, pode-se utilizar o próprio `),jc(585,`code`),iO(586,`asyncValidators`),wg(),iO(587,`.`),wg()()(),jc(588,`tr`,15)(589,`td`,16)(590,`div`,24)(591,`span`,25),iO(592,` p-error-limit`),nu(593,`br`),wg()()(),jc(594,`td`,20)(595,`code`,27),iO(596,`boolean`),wg()(),jc(597,`td`,22)(598,`p`)(599,`code`),iO(600,`false`),wg()()(),jc(601,`td`,23)(602,`em`)(603,`strong`),iO(604,`(opcional)`),wg()(),jc(605,`p`),iO(606,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),wg(),jc(607,`blockquote`)(608,`p`),iO(609,`Caso essa propriedade seja definida como `),jc(610,`code`),iO(611,`true`),wg(),iO(612,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),wg()()()(),jc(613,`tr`,15)(614,`td`,16)(615,`div`,24)(616,`span`,25),iO(617,` p-error-pattern`),nu(618,`br`),wg()()(),jc(619,`td`,20)(620,`code`,26),iO(621,`string`),wg()(),jc(622,`td`,22),iO(623,`-`),wg(),jc(624,`td`,23)(625,`em`)(626,`strong`),iO(627,`(opcional)`),wg()(),jc(628,`p`),iO(629,`Mensagem que será apresentada quando o `),jc(630,`code`),iO(631,`pattern`),wg(),iO(632,` ou a máscara não for satisfeita.`),wg(),jc(633,`blockquote`)(634,`p`),iO(635,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),jc(636,`code`),iO(637,`p-required-field-error-message`),wg(),iO(638,` em conjunto.`),wg()()()(),jc(639,`tr`,15)(640,`td`,16)(641,`div`,24)(642,`span`,25),iO(643,` p-help`),nu(644,`br`),wg()()(),jc(645,`td`,20)(646,`code`,26),iO(647,`string`),wg()(),jc(648,`td`,22),iO(649,`-`),wg(),jc(650,`td`,23)(651,`em`)(652,`strong`),iO(653,`(opcional)`),wg()(),jc(654,`p`),iO(655,`Texto de apoio do campo.`),wg()()(),jc(656,`tr`,15)(657,`td`,16)(658,`div`,24)(659,`span`,25),iO(660,` p-icon`),nu(661,`br`),wg()()(),jc(662,`td`,20)(663,`code`,26),iO(664,`string `),wg(),jc(665,`code`,29),iO(666,` TemplateRef<void>`),wg()(),jc(667,`td`,22),iO(668,`-`),wg(),jc(669,`td`,23)(670,`em`)(671,`strong`),iO(672,`(opcional)`),wg()(),jc(673,`p`),iO(674,`Define o ícone que será exibido no início do campo.`),wg(),jc(675,`p`),iO(676,`É possível usar qualquer um dos ícones da `),jc(677,`a`,30),iO(678,`Biblioteca de ícones`),wg(),iO(679,`. conforme exemplo abaixo:`),wg(),jc(680,`pre`)(681,`code`),iO(682,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),wg()(),jc(683,`p`),iO(684,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(685,`em`),iO(686,`Font Awesome`),wg(),iO(687,`, da seguinte forma:`),wg(),jc(688,`pre`)(689,`code`),iO(690,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),wg()(),jc(691,`p`),iO(692,`Outra opção seria a customização do ícone através do `),jc(693,`code`),iO(694,`TemplateRef`),wg(),iO(695,`, conforme exemplo abaixo:`),wg(),jc(696,`pre`)(697,`code`),iO(698,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(699,`blockquote`)(700,`p`),iO(701,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(702,`code`),iO(703,`font-size: inherit`),wg(),iO(704,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(705,`tr`,15)(706,`td`,16)(707,`div`,17)(708,`span`,18),iO(709,` (p-keydown)`),nu(710,`br`),wg()()(),jc(711,`td`,20)(712,`code`,21),iO(713,`EventEmitter`),wg()(),jc(714,`td`,22),iO(715,`-`),wg(),jc(716,`td`,23)(717,`em`)(718,`strong`),iO(719,`(opcional)`),wg()(),jc(720,`p`),iO(721,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(722,`code`),iO(723,`KeyboardEvent`),wg(),iO(724,` com informações sobre a tecla.`),wg()()(),jc(725,`tr`,15)(726,`td`,16)(727,`div`,24)(728,`span`,25),iO(729,` p-label`),nu(730,`br`),wg()()(),jc(731,`td`,20)(732,`code`,26),iO(733,`string`),wg()(),jc(734,`td`,22),iO(735,`-`),wg(),jc(736,`td`,23)(737,`em`)(738,`strong`),iO(739,`(opcional)`),wg()(),jc(740,`p`),iO(741,`Rótulo do campo.`),wg()()(),jc(742,`tr`,15)(743,`td`,16)(744,`div`,24)(745,`span`,25),iO(746,` p-label-text-wrap`),nu(747,`br`),wg()()(),jc(748,`td`,20)(749,`code`,27),iO(750,`boolean`),wg()(),jc(751,`td`,22)(752,`p`)(753,`code`),iO(754,`false`),wg()()(),jc(755,`td`,23)(756,`em`)(757,`strong`),iO(758,`(opcional)`),wg()(),jc(759,`p`),iO(760,`Habilita a quebra automática do texto da propriedade `),jc(761,`code`),iO(762,`p-label`),wg(),iO(763,`. Quando `),jc(764,`code`),iO(765,`p-label-text-wrap`),wg(),iO(766,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(767,`tr`,15)(768,`td`,16)(769,`div`,24)(770,`span`,25),iO(771,` p-loading`),nu(772,`br`),wg()()(),jc(773,`td`,20)(774,`code`,27),iO(775,`boolean`),wg()(),jc(776,`td`,22)(777,`p`)(778,`code`),iO(779,`false`),wg()()(),jc(780,`td`,23)(781,`em`)(782,`strong`),iO(783,`(opcional)`),wg()(),jc(784,`p`),iO(785,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),wg()()(),jc(786,`tr`,15)(787,`td`,16)(788,`div`,24)(789,`span`,25),iO(790,`p-mask`),nu(791,`br`),wg()()(),jc(792,`td`,20)(793,`code`,26),iO(794,`string`),wg()(),jc(795,`td`,22),iO(796,`-`),wg(),jc(797,`td`,23)(798,`em`)(799,`strong`),iO(800,`(opcional)`),wg()(),jc(801,`p`),iO(802,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),wg()()(),jc(803,`tr`,15)(804,`td`,16)(805,`div`,24)(806,`span`,25),iO(807,`p-mask-format-model`),nu(808,`br`),wg()()(),jc(809,`td`,20)(810,`code`,27),iO(811,`boolean`),wg()(),jc(812,`td`,22)(813,`p`)(814,`code`),iO(815,`false`),wg()()(),jc(816,`td`,23)(817,`em`)(818,`strong`),iO(819,`(opcional)`),wg()(),jc(820,`p`),iO(821,`Indica se o `),jc(822,`code`),iO(823,`model`),wg(),iO(824,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),wg()()(),jc(825,`tr`,15)(826,`td`,16)(827,`div`,24)(828,`span`,25),iO(829,` p-mask-no-length-validation`),nu(830,`br`),wg()()(),jc(831,`td`,20)(832,`code`,27),iO(833,`boolean`),wg()(),jc(834,`td`,22)(835,`p`)(836,`code`),iO(837,`false`),wg()()(),jc(838,`td`,23)(839,`p`),iO(840,`Controla como o componente aplica as validações de comprimento mínimo (`),jc(841,`code`),iO(842,`minLength`),wg(),iO(843,`) e máximo (`),jc(844,`code`),iO(845,`maxLength`),wg(),iO(846,`) quando há uma máscara (`),jc(847,`code`),iO(848,`p-mask`),wg(),iO(849,`) definida.`),wg(),jc(850,`ul`)(851,`li`),iO(852,`Quando `),jc(853,`code`),iO(854,`true`),wg(),iO(855,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),wg(),jc(856,`li`),iO(857,`Quando `),jc(858,`code`),iO(859,`false`),wg(),iO(860,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),wg()(),jc(861,`blockquote`)(862,`p`),iO(863,`Esta propriedade é ignorada quando utilizada em conjunto com `),jc(864,`code`),iO(865,`p-mask-format-model`),wg(),iO(866,`.`),wg()(),jc(867,`p`),iO(868,`Exemplo:`),wg(),jc(869,`pre`)(870,`code`),iO(871,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),wg()(),jc(872,`ul`)(873,`li`),iO(874,`Entrada: `),jc(875,`code`),iO(876,`123-456`),wg(),iO(877,` → Validação será aplicada somente aos números, ignorando o caractere especial `),jc(878,`code`),iO(879,`-`),wg(),iO(880,`.`),wg()()()(),jc(881,`tr`,15)(882,`td`,16)(883,`div`,24)(884,`span`,25),iO(885,` p-maxlength`),nu(886,`br`),wg()()(),jc(887,`td`,20)(888,`code`,31),iO(889,`number`),wg()(),jc(890,`td`,22),iO(891,`-`),wg(),jc(892,`td`,23)(893,`em`)(894,`strong`),iO(895,`(opcional)`),wg()(),jc(896,`p`),iO(897,`Indica a quantidade máxima de caracteres que o campo aceita.`),wg()()(),jc(898,`tr`,15)(899,`td`,16)(900,`div`,24)(901,`span`,25),iO(902,` p-minlength`),nu(903,`br`),wg()()(),jc(904,`td`,20)(905,`code`,31),iO(906,`number`),wg()(),jc(907,`td`,22),iO(908,`-`),wg(),jc(909,`td`,23)(910,`em`)(911,`strong`),iO(912,`(opcional)`),wg()(),jc(913,`p`),iO(914,`Indica a quantidade mínima de caracteres que o campo aceita.`),wg()()(),jc(915,`tr`,15)(916,`td`,16)(917,`div`,24)(918,`span`,25),iO(919,` name`),nu(920,`br`),wg()()(),jc(921,`td`,20)(922,`code`,26),iO(923,`string`),wg()(),jc(924,`td`,22),iO(925,`-`),wg(),jc(926,`td`,23)(927,`p`),iO(928,`Nome e identificador do campo.`),wg()()(),jc(929,`tr`,15)(930,`td`,16)(931,`div`,24)(932,`span`,25),iO(933,` p-no-autocomplete`),nu(934,`br`),wg()()(),jc(935,`td`,20)(936,`code`,27),iO(937,`boolean`),wg()(),jc(938,`td`,22)(939,`p`)(940,`code`),iO(941,`false`),wg()()(),jc(942,`td`,23)(943,`em`)(944,`strong`),iO(945,`(opcional)`),wg()(),jc(946,`p`),iO(947,`Define a propriedade nativa `),jc(948,`code`),iO(949,`autocomplete`),wg(),iO(950,` do campo como `),jc(951,`code`),iO(952,`off`),wg(),iO(953,`.`),wg(),jc(954,`blockquote`)(955,`p`),iO(956,`No componente `),jc(957,`code`),iO(958,`po-password`),wg(),iO(959,` será definido como `),jc(960,`code`),iO(961,`new-password`),wg(),iO(962,`.`),wg()(),jc(963,`p`),iO(964,`Nos componentes `),jc(965,`code`),iO(966,`po-password`),wg(),iO(967,` e `),jc(968,`code`),iO(969,`po-login`),wg(),iO(970,` o valor padrão será `),jc(971,`code`),iO(972,`true`),wg(),iO(973,`.`),wg()()(),jc(974,`tr`,15)(975,`td`,16)(976,`div`,24)(977,`span`,25),iO(978,` p-optional`),nu(979,`br`),wg()()(),jc(980,`td`,20)(981,`code`,27),iO(982,`boolean`),wg()(),jc(983,`td`,22)(984,`p`)(985,`code`),iO(986,`false`),wg()()(),jc(987,`td`,23)(988,`em`)(989,`strong`),iO(990,`(opcional)`),wg()(),jc(991,`p`),iO(992,`Define se a indicação de campo opcional será exibida.`),wg(),jc(993,`blockquote`)(994,`p`),iO(995,`Não será exibida a indicação se:`),wg()(),jc(996,`ul`)(997,`li`),iO(998,`O campo conter `),jc(999,`code`),iO(1e3,`p-required`),wg(),iO(1001,`;`),wg(),jc(1002,`li`),iO(1003,`Não possuir `),jc(1004,`code`),iO(1005,`p-help`),wg(),iO(1006,` e/ou `),jc(1007,`code`),iO(1008,`p-label`),wg(),iO(1009,`.`),wg()()()(),jc(1010,`tr`,15)(1011,`td`,16)(1012,`div`,24)(1013,`span`,25),iO(1014,`p-pattern`),nu(1015,`br`),wg()()(),jc(1016,`td`,20)(1017,`code`,26),iO(1018,`string`),wg()(),jc(1019,`td`,22),iO(1020,`-`),wg(),jc(1021,`td`,23)(1022,`em`)(1023,`strong`),iO(1024,`(opcional)`),wg()(),jc(1025,`p`),iO(1026,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),jc(1027,`code`),iO(1028,`(p-mask)`),wg(),iO(1029,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),wg()()(),jc(1030,`tr`,15)(1031,`td`,16)(1032,`div`,24)(1033,`span`,25),iO(1034,` p-placeholder`),nu(1035,`br`),wg()()(),jc(1036,`td`,20)(1037,`code`,26),iO(1038,`string`),wg()(),jc(1039,`td`,22)(1040,`p`),iO(1041,`''`),wg()(),jc(1042,`td`,23)(1043,`em`)(1044,`strong`),iO(1045,`(opcional)`),wg()(),jc(1046,`p`),iO(1047,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),wg()()(),jc(1048,`tr`,15)(1049,`td`,16)(1050,`div`,24)(1051,`span`,25),iO(1052,` p-helper`),nu(1053,`br`),wg()()(),jc(1054,`td`,20)(1055,`code`,32),iO(1056,`PoHelperOptions `),wg(),jc(1057,`code`,26),iO(1058,` string`),wg()(),jc(1059,`td`,22),iO(1060,`-`),wg(),jc(1061,`td`,23)(1062,`em`)(1063,`strong`),iO(1064,`(opcional)`),wg()(),jc(1065,`p`),iO(1066,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(1067,`code`),iO(1068,`p-label`),wg(),iO(1069,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(1070,`code`),iO(1071,`p-label`),wg(),iO(1072,`.`),wg(),jc(1073,`blockquote`)(1074,`p`),iO(1075,`Para mais informações acesse: `),jc(1076,`a`,33),iO(1077,`https://po-ui.io/documentation/po-helper`),wg(),iO(1078,`.`),wg()(),jc(1079,`blockquote`)(1080,`p`),iO(1081,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(1082,`code`),iO(1083,`p-additional-help-tooltip`),wg(),iO(1084,` e `),jc(1085,`code`),iO(1086,`p-additional-help`),wg(),iO(1087,`) será ignorado.`),wg()()()(),jc(1088,`tr`,15)(1089,`td`,16)(1090,`div`,24)(1091,`span`,25),iO(1092,`p-readonly`),nu(1093,`br`),wg()()(),jc(1094,`td`,20)(1095,`code`,27),iO(1096,`boolean`),wg()(),jc(1097,`td`,22),iO(1098,`-`),wg(),jc(1099,`td`,23)(1100,`em`)(1101,`strong`),iO(1102,`(opcional)`),wg()(),jc(1103,`p`),iO(1104,`Indica que o campo será somente leitura.`),wg()()(),jc(1105,`tr`,15)(1106,`td`,16)(1107,`div`,24)(1108,`span`,25),iO(1109,`p-required`),nu(1110,`br`),wg()()(),jc(1111,`td`,20)(1112,`code`,27),iO(1113,`boolean`),wg()(),jc(1114,`td`,22)(1115,`p`)(1116,`code`),iO(1117,`false`),wg()()(),jc(1118,`td`,23)(1119,`em`)(1120,`strong`),iO(1121,`(opcional)`),wg()(),jc(1122,`p`),iO(1123,`Define que o campo será obrigatório.`),wg(),jc(1124,`blockquote`)(1125,`p`),iO(1126,`Esta propriedade é desconsiderada quando o input está desabilitado `),jc(1127,`code`),iO(1128,`(p-disabled)`),wg(),iO(1129,`.`),wg()()()(),jc(1130,`tr`,15)(1131,`td`,16)(1132,`div`,24)(1133,`span`,25),iO(1134,` p-required-field-error-message`),nu(1135,`br`),wg()()(),jc(1136,`td`,20)(1137,`code`,27),iO(1138,`boolean`),wg()(),jc(1139,`td`,22)(1140,`p`)(1141,`code`),iO(1142,`false`),wg()()(),jc(1143,`td`,23)(1144,`em`)(1145,`strong`),iO(1146,`(opcional)`),wg()(),jc(1147,`p`),iO(1148,`Exibe a mensagem setada na propriedade `),jc(1149,`code`),iO(1150,`p-error-pattern`),wg(),iO(1151,` se o campo estiver vazio e for requerido.`),wg(),jc(1152,`blockquote`)(1153,`p`),iO(1154,`Necessário que a propriedade `),jc(1155,`code`),iO(1156,`p-required`),wg(),iO(1157,` esteja habilitada.`),wg()()()(),jc(1158,`tr`,15)(1159,`td`,16)(1160,`div`,24)(1161,`span`,25),iO(1162,` p-show-required`),nu(1163,`br`),wg()()(),jc(1164,`td`,20)(1165,`code`,27),iO(1166,`boolean`),wg()(),jc(1167,`td`,22),iO(1168,`-`),wg(),jc(1169,`td`,23)(1170,`p`),iO(1171,`Define se a indicação de campo obrigatório será exibida.`),wg(),jc(1172,`blockquote`)(1173,`p`),iO(1174,`Não será exibida a indicação se:`),wg()(),jc(1175,`ul`)(1176,`li`),iO(1177,`Não possuir `),jc(1178,`code`),iO(1179,`p-help`),wg(),iO(1180,` e/ou `),jc(1181,`code`),iO(1182,`p-label`),wg(),iO(1183,`.`),wg()()()(),jc(1184,`tr`,15)(1185,`td`,16)(1186,`div`,24)(1187,`span`,25),iO(1188,` p-size`),nu(1189,`br`),wg()()(),jc(1190,`td`,20)(1191,`code`,26),iO(1192,`string`),wg()(),jc(1193,`td`,22)(1194,`p`)(1195,`code`),iO(1196,`medium`),wg()()(),jc(1197,`td`,23)(1198,`em`)(1199,`strong`),iO(1200,`(opcional)`),wg()(),jc(1201,`p`),iO(1202,`Define o tamanho do componente:`),wg(),jc(1203,`ul`)(1204,`li`)(1205,`code`),iO(1206,`small`),wg(),iO(1207,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(1208,`li`)(1209,`code`),iO(1210,`medium`),wg(),iO(1211,`: altura do input como 44px.`),wg()(),jc(1212,`blockquote`)(1213,`p`),iO(1214,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(1215,`code`),iO(1216,`medium`),wg(),iO(1217,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(1218,`a`,34),iO(1219,`po-theme`),wg(),iO(1220,`.`),wg()()()(),jc(1221,`tr`,15)(1222,`td`,16)(1223,`div`,24)(1224,`span`,25),iO(1225,` p-upper-case`),nu(1226,`br`),wg()()(),jc(1227,`td`,20)(1228,`code`,27),iO(1229,`boolean`),wg()(),jc(1230,`td`,22),iO(1231,`-`),wg(),jc(1232,`td`,23)(1233,`p`),iO(1234,`Converte o conteúdo do campo em maiúsulo automaticamente.`),wg()()()(),jc(1235,`h3`,11),iO(1236,`Métodos`),wg(),jc(1237,`table`,35)(1238,`tr`,15)(1239,`th`,36)(1240,`div`,24)(1241,`h4`)(1242,`span`,25),iO(1243,` showAdditionalHelp `),wg()()()()(),jc(1244,`tr`,23)(1245,`td`,23)(1246,`p`),iO(1247,`Método que exibe `),jc(1248,`code`),iO(1249,`p-helper`),wg(),iO(1250,` ou executa a ação definida em `),jc(1251,`code`),iO(1252,`p-helper{eventOnClick}`),wg(),iO(1253,` ou em `),jc(1254,`code`),iO(1255,`p-additionalHelp`),wg(),iO(1256,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(1257,`code`),iO(1258,`p-keydown`),wg(),iO(1259,`.`),wg(),jc(1260,`blockquote`)(1261,`p`),iO(1262,`Exibe ou oculta o conteúdo do componente `),jc(1263,`code`),iO(1264,`po-helper`),wg(),iO(1265,` quando o componente estiver com foco.`),wg()(),jc(1266,`pre`)(1267,`code`),iO(1268,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),wg()(),jc(1269,`pre`)(1270,`code`),iO(1271,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(1272,`br`),jc(1273,`table`,35)(1274,`tr`,15)(1275,`th`,36)(1276,`div`,24)(1277,`h4`)(1278,`span`,25),iO(1279,` focus `),wg()()()()(),jc(1280,`tr`,23)(1281,`td`,23)(1282,`p`),iO(1283,`Função que atribui foco ao componente.`),wg(),jc(1284,`p`),iO(1285,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(1286,`pre`)(1287,`code`),iO(1288,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),wg()()()()(),nu(1289,`br`),jc(1290,`h3`),iO(1291,`Interfaces`),wg(),jc(1292,`h4`,37)(1293,`code`,5),iO(1294,`ErrorAsyncProperties`),wg()(),jc(1295,`div`,2)(1296,`p`),iO(1297,`Interface para realizar uma validação assíncrona no componente.`),wg()(),jc(1298,`h4`,11),iO(1299,`Propriedades`),wg(),jc(1300,`table`,12)(1301,`tr`,13)(1302,`th`,14),iO(1303,`Nome`),wg(),jc(1304,`th`,14),iO(1305,`Tipo`),wg(),jc(1306,`th`,14),iO(1307,`Descrição`),wg()(),jc(1308,`tr`,15)(1309,`td`,16)(1310,`div`,24)(1311,`span`,25),iO(1312,` errorAsync`),nu(1313,`br`),wg()()(),jc(1314,`td`,20)(1315,`code`,38),iO(1316,`(value) => Observable<boolean>`),wg()(),jc(1317,`td`,23)(1318,`p`),iO(1319,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),jc(1320,`code`),iO(1321,`change`),wg(),iO(1322,` ou `),jc(1323,`code`),iO(1324,`change-model`),wg(),iO(1325,`, dependendo do valor da propriedade `),jc(1326,`code`),iO(1327,`triggerMode`),wg(),iO(1328,`.`),wg()()(),jc(1329,`tr`,15)(1330,`td`,16)(1331,`div`,24)(1332,`span`,25),iO(1333,` triggerMode`),nu(1334,`br`),wg()()(),jc(1335,`td`,20)(1336,`code`,39),iO(1337,`'change' `),wg(),jc(1338,`code`,40),iO(1339,` 'changeModel'`),wg()(),jc(1340,`td`,23)(1341,`em`)(1342,`strong`),iO(1343,`(opcional)`),wg()(),jc(1344,`p`),iO(1345,`Controla se o método será executado no disparo do output `),jc(1346,`code`),iO(1347,`change`),wg(),iO(1348,` ou `),jc(1349,`code`),iO(1350,`change-model`),wg(),iO(1351,`.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Ue=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(b(ir),b(Sn))};static ɵcmp=Zn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Input`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(3,`sample-po-input-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`web`)}),nu(5,`sample-po-input-basic-view`)(6,`sample-po-input-labs-view`)(7,`sample-po-input-reactive-form-view`)(8,`sample-po-input-mask-dynamic-view`),wg()()()),l&2&&(jE(`p-actions`,o.actions),rg(2),jE(`p-active`,o.activeTab===`doc`),rg(2),jE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Kze,bae,Sae,Ce,Me,we,Fe,De],encapsulation:2,changeDetection:1})}return a})()}];var Ie=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[C1.forChild(Ue),C1]})}return a})();var Dt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=pe({type:a});static ɵinj=ue({imports:[Ta,Ie]})}return a})();export{Dt as DocPoInputModule};