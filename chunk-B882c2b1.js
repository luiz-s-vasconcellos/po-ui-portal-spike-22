import{$r as Vx,Et as V8e,F as G4,Gr as Ue$1,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Ki as lo,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he,Qi as oN,Sa as yN,Sn as sU,Ti as f0,Ui as lg,Vi as kk,X as KH,Xn as Cn,Yi as mN,Zr as Vk,_i as ca,_r as Ml,aa as qk,ar as IY,bi as cw,br as NL,bt as Tbe,ci as Yx,cn as lU,da as uo,ea as p0,fi as _o,ga as w,hr as MY,jn as wp,ki as fm,kn as vr,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ti as Wk,ua as ue,ui as Zl,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var fe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`input`,`p-label`,`PO Input`]],template:function(l,o){l&1&&ql(0,`po-input`,0)},dependencies:[lU],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Input Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-input-basic/sample-po-input-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-input-basic/sample-po-input-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-input-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Le,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,fe],encapsulation:2,changeDetection:1})}return a})();var ke=(()=>{class a{helperText;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`maskFormatModel`,label:`Formatted Model`},{value:`maskNoLengthValidation`,label:`Mask No Length Validation`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`uppercase`,label:`Upper Case`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}restore(){this.helperText=``,this.input=void 0,this.size=`medium`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-labs`]],standalone:!1,decls:22,vars:44,consts:[[`f`,`ngForm`],[`name`,`input`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-mask`,`p-mask-format-model`,`p-maxlength`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-pattern`,`p-placeholder`,`p-required`,`p-required-field-error-message`,`p-readonly`,`p-upper-case`,`p-show-required`,`p-mask-no-length-validation`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`mask`,`p-clean`,``,`p-help`,`Ex.: Zip code: '99999-999'; License plate: '@@@-9999'`,`p-label`,`Mask`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`pattern`,`p-clean`,``,`p-help`,`Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'`,`p-label`,`Pattern (Regex)`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let s=Vx();Ml(0,`po-input`,1),Mw(`ngModelChange`,function(p){return Qy(s),yN(o.input,p)||(o.input=p),Jy(p)}),ht(`p-blur`,function(){return o.changeEvent(`p-blur`)})(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-enter`,function(){return o.changeEvent(`p-enter`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3)(4,`po-info`,4),lg(),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`po-input`,5),Mw(`ngModelChange`,function(p){return Qy(s),yN(o.label,p)||(o.label=p),Jy(p)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(p){return Qy(s),yN(o.help,p)||(o.help=p),Jy(p)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(p){return Qy(s),yN(o.helperText,p)||(o.helperText=p),Jy(p)}),lg(),f0(),Ml(11,`po-input`,8),Mw(`ngModelChange`,function(p){return Qy(s),yN(o.placeholder,p)||(o.placeholder=p),Jy(p)}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(p){return Qy(s),yN(o.errorPattern,p)||(o.errorPattern=p),Jy(p)}),lg(),f0(),Ml(13,`po-input`,10),Mw(`ngModelChange`,function(p){return Qy(s),yN(o.mask,p)||(o.mask=p),Jy(p)}),lg(),f0(),Ml(14,`po-input`,11),Mw(`ngModelChange`,function(p){return Qy(s),yN(o.pattern,p)||(o.pattern=p),Jy(p)}),lg(),f0(),Ml(15,`po-number`,12),Mw(`ngModelChange`,function(p){return Qy(s),yN(o.minlength,p)||(o.minlength=p),Jy(p)}),lg(),f0(),Ml(16,`po-number`,13),Mw(`ngModelChange`,function(p){return Qy(s),yN(o.maxlength,p)||(o.maxlength=p),Jy(p)}),lg(),f0(),Ml(17,`po-select`,14),Mw(`ngModelChange`,function(p){return Qy(s),yN(o.icon,p)||(o.icon=p),Jy(p)}),lg(),f0(),Ml(18,`po-checkbox-group`,15),Mw(`ngModelChange`,function(p){return Qy(s),yN(o.properties,p)||(o.properties=p),Jy(p)}),lg(),f0(),Ml(19,`po-radio-group`,16),Mw(`ngModelChange`,function(p){return Qy(s),yN(o.size,p)||(o.size=p),Jy(p)}),lg(),f0(),Ml(20,`div`,2)(21,`po-button`,17),ht(`p-click`,function(){return Qy(s),Yx(7).reset(),Jy(o.restore())}),lg()()()}l&2&&(Tw(`ngModel`,o.input),cw(`p-helper`,o.helperText)(`p-clean`,o.properties?.includes(`clean`))(`p-disabled`,o.properties?.includes(`disabled`))(`p-error-pattern`,o.errorPattern)(`p-help`,o.help)(`p-icon`,o.icon)(`p-label`,o.label)(`p-loading`,o.properties?.includes(`loading`))(`p-mask`,o.mask)(`p-mask-format-model`,o.properties?.includes(`maskFormatModel`))(`p-maxlength`,o.maxlength)(`p-minlength`,o.minlength)(`p-no-autocomplete`,o.properties?.includes(`noAutocomplete`))(`p-optional`,o.properties?.includes(`optional`))(`p-pattern`,o.pattern)(`p-placeholder`,o.placeholder)(`p-required`,o.properties?.includes(`required`))(`p-required-field-error-message`,o.properties?.includes(`requiredFieldErrorMessage`))(`p-readonly`,o.properties?.includes(`readonly`))(`p-upper-case`,o.properties?.includes(`uppercase`))(`p-show-required`,o.properties?.includes(`showRequired`))(`p-mask-no-length-validation`,o.properties?.includes(`maskNoLengthValidation`))(`p-size`,o.size)(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),p0(),Up(3),cw(`p-value`,o.input),Up(),cw(`p-value`,o.event),Up(4),Tw(`ngModel`,o.label),p0(),Up(),Tw(`ngModel`,o.help),p0(),Up(),Tw(`ngModel`,o.helperText),p0(),Up(),Tw(`ngModel`,o.placeholder),p0(),Up(),Tw(`ngModel`,o.errorPattern),p0(),Up(),Tw(`ngModel`,o.mask),p0(),Up(),Tw(`ngModel`,o.pattern),p0(),Up(),Tw(`ngModel`,o.minlength),p0(),Up(),Tw(`ngModel`,o.maxlength),p0(),Up(),Tw(`ngModel`,o.icon),cw(`p-options`,o.iconOptions),p0(),Up(),Tw(`ngModel`,o.properties),cw(`p-options`,o.propertiesOptions),p0(),Up(),Tw(`ngModel`,o.size),cw(`p-options`,o.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,xbe,q0e,Tbe,kbe],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a});var Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Input Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-input-labs/sample-po-input-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-input
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-input-labs/sample-po-input-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-input-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ae,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ke],encapsulation:2,changeDetection:1})}return a})();var Re=[`reactiveFormData`];var Pe=(()=>{class a{fb=f(MY);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:`Close`};constructor(){this.createReactiveForm()}createReactiveForm(){this.reactiveForm=this.fb.group({name:[``,fm.compose([fm.required,fm.minLength(5),fm.maxLength(30)])],address:[``,fm.compose([fm.required,fm.minLength(5),fm.maxLength(50)])],number:[``,fm.compose([fm.required,fm.min(1),fm.max(99999)])],email:[``,fm.required],website:[``,fm.required]})}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-reactive-form`]],viewQuery:function(l,o){if(l&1&&Zl(Re,7),l&2){let s;lo(s=uo())&&(o.reactiveFormModal=s.first)}},standalone:!1,decls:23,vars:8,consts:[[`reactiveFormData`,``],[3,`formGroup`],[1,`po-row`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-md-12`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-9`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-md-12`,3,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`Number`,1,`po-md-6`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,3,`p-value`],[`p-label`,`Website`,1,`po-md-6`,3,`p-value`]],template:function(l,o){l&1&&(Ml(0,`form`,1)(1,`div`,2),ql(2,`po-input`,3),f0(),lg(),Ml(3,`div`,2),ql(4,`po-input`,4),f0(),ql(5,`po-number`,5),f0(),lg(),Ml(6,`div`,2),ql(7,`po-email`,6),f0(),ql(8,`po-url`,7),f0(),lg(),Ml(9,`div`,2)(10,`po-button`,8),ht(`p-click`,function(){return o.saveForm()}),lg()()(),Ml(11,`po-modal`,9,0)(13,`div`,2),ql(14,`po-info`,10),lg(),ql(15,`po-divider`),Ml(16,`div`,2),ql(17,`po-info`,11)(18,`po-info`,12),lg(),ql(19,`po-divider`),Ml(20,`div`,2),ql(21,`po-info`,13)(22,`po-info`,14),lg()()),l&2&&(cw(`formGroup`,o.reactiveForm),Up(2),p0(),Up(2),p0(),Up(),p0(),Up(2),p0(),Up(),p0(),Up(2),cw(`p-disabled`,!o.reactiveForm.valid),Up(),cw(`p-primary-action`,o.modalPrimaryAction),Up(3),cw(`p-value`,o.reactiveForm.controls.name.value),Up(3),cw(`p-value`,o.reactiveForm.controls.address.value),Up(),cw(`p-value`,o.reactiveForm.controls.number.value),Up(3),cw(`p-value`,o.reactiveForm.controls.email.value),Up(),cw(`p-value`,o.reactiveForm.controls.website.value))},dependencies:[IY,wY,CY,qk,Wk,Zt,nb,KH,lU,xbe,sU,kbe,vr],encapsulation:2,changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Input - Reactive Form`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-input-reactive-form/sample-po-input-reactive-form.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form [formGroup]="reactiveForm">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-input-reactive-form`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Oe,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,Pe],encapsulation:2,changeDetection:1})}return a})();var Z=`999.999.999-99`;var He=`99.999.999/9999-99`;function q(a){return(a||``).replace(/\D/g,``)}function z(a){return a>11?He:Z}var _e=(()=>{class a{cd;document=``;mask=Z;formMask=Z;form=new _o({document:new ca(``)});constructor(r){this.cd=r}handleKeydown(r){this.updateMask(this.predictMaskFromKeydown(r,this.mask))}handlePaste(r){this.updateMask(this.predictMaskFromPaste(r))}handleChangeModel(r){this.mask=z(q(r).length)}handleFormKeydown(r){this.updateFormMask(this.predictMaskFromKeydown(r,this.formMask))}handleFormPaste(r){this.updateFormMask(this.predictMaskFromPaste(r))}handleFormChangeModel(r){this.formMask=z(q(r).length)}predictMaskFromKeydown(r,l){if(r.ctrlKey||r.metaKey||r.altKey)return l;let o=r.target,s=o.value||``,d=o.selectionStart??s.length,p=o.selectionEnd??d,L=q(s).length-q(s.slice(d,p)).length;if(/^[0-9]$/.test(r.key))L++;else if(r.key===`Backspace`&&d===p&&d>0)L--;else if(r.key===`Delete`&&d===p&&d<s.length)L--;else return l;return z(L)}predictMaskFromPaste(r){let l=r.target,o=l.value||``,s=l.selectionStart??o.length,d=l.selectionEnd??s,p=q(r.clipboardData?.getData(`text`)||``);return z(q(o).length-q(o.slice(s,d)).length+p.length)}updateMask(r){r!==this.mask&&(this.mask=r,this.cd.detectChanges())}updateFormMask(r){r!==this.formMask&&(this.formMask=r,this.cd.detectChanges())}static ɵfac=function(l){return new(l||a)(w(Ue$1))};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-mask-dynamic`]],standalone:!1,decls:7,vars:4,consts:[[1,`po-row`],[`p-title`,`CPF / CNPJ com ngModel`,1,`po-lg-6`,`po-md-12`],[`name`,`document`,`p-clean`,``,`p-label`,`CPF / CNPJ`,`p-placeholder`,`Informe o CPF ou o CNPJ`,1,`po-md-12`,3,`ngModelChange`,`p-keydown`,`paste`,`p-change-model`,`p-mask`,`ngModel`],[`p-title`,`CPF / CNPJ com Reactive Forms`,1,`po-lg-6`,`po-md-12`],[1,`po-row`,3,`formGroup`],[`formControlName`,`document`,`p-clean`,``,`p-label`,`CPF / CNPJ`,`p-placeholder`,`Informe o CPF ou o CNPJ`,1,`po-md-12`,3,`p-keydown`,`paste`,`p-change-model`,`p-mask`]],template:function(l,o){l&1&&(Ml(0,`div`,0)(1,`po-container`,1)(2,`div`,0)(3,`po-input`,2),Mw(`ngModelChange`,function(d){return yN(o.document,d)||(o.document=d),d}),ht(`p-keydown`,function(d){return o.handleKeydown(d)})(`paste`,function(d){return o.handlePaste(d)})(`p-change-model`,function(d){return o.handleChangeModel(d)}),lg(),f0(),lg()(),Ml(4,`po-container`,3)(5,`div`,4)(6,`po-input`,5),ht(`p-keydown`,function(d){return o.handleFormKeydown(d)})(`paste`,function(d){return o.handleFormPaste(d)})(`p-change-model`,function(d){return o.handleFormChangeModel(d)}),lg(),f0(),lg()()()),l&2&&(Up(3),cw(`p-mask`,o.mask),Tw(`ngModel`,o.document),p0(),Up(2),cw(`formGroup`,o.form),Up(),cw(`p-mask`,o.formMask),p0())},dependencies:[wY,CY,Vk,qk,Wk,wp,lU],encapsulation:2})}return a})();var je=a=>({"docs-sample-code-tabs":a});var Fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-mask-dynamic-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Input - Dynamic Mask (CPF/CNPJ)`),lg(),Ml(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-input-mask-dynamic/sample-po-input-mask-dynamic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-row">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-input-mask-dynamic/sample-po-input-mask-dynamic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { ChangeDetectorRef, Component } from '@angular/core';
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
`),lg(),Ml(21,`label`,6),mN(22,`sample-po-input-mask-dynamic/document-mask.ts`),lg(),Ml(23,`pre`,9),mN(24,`export const MASK_CPF = '999.999.999-99';
export const MASK_CNPJ = '99.999.999/9999-99';

const CPF_LENGTH = 11;

export function onlyDigits(value: string): string {
  return (value || '').replace(/\\D/g, '');
}

export function resolveMask(digitCount: number): string {
  return digitCount > CPF_LENGTH ? MASK_CNPJ : MASK_CPF;
}
`),lg()()()()(),Ml(25,`div`,10),ql(26,`sample-po-input-mask-dynamic`),lg(),ql(27,`hr`)),l&2&&(Up(5),oN(`po-icon `+o.sampleCodeButtonIcon),Up(),gg(` `,o.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,je,o.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,_e],encapsulation:2,changeDetection:1})}return a})();var De=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-doc`]],standalone:!1,decls:1352,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(l,o){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoInputComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),lg(),Ml(24,`p`),mN(25,`Importante:`),lg(),Ml(26,`ul`)(27,`li`),mN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),lg()(),Ml(29,`h4`),mN(30,`Tokens customizáveis`),lg(),Ml(31,`p`),mN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),ql(33,`br`),mN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ml(35,`code`),mN(36,`.po-input`),lg()(),Ml(37,`blockquote`)(38,`p`),mN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Ml(40,`a`,6),mN(41,`Grid System`),lg(),mN(42,`.`),lg()(),Ml(43,`blockquote`)(44,`p`),mN(45,`Para maiores informações, acesse o guia `),Ml(46,`a`,7),mN(47,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(48,`.`),lg()(),Ml(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),mN(53,`Propriedade`),lg(),Ml(54,`th`),mN(55,`Descrição`),lg(),Ml(56,`th`),mN(57,`Valor Padrão`),lg()()(),Ml(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),mN(62,`Default Values`),lg()(),ql(63,`td`)(64,`td`),lg(),Ml(65,`tr`)(66,`td`)(67,`code`),mN(68,`--font-family`),lg()(),Ml(69,`td`),mN(70,`Família tipográfica usada`),lg(),Ml(71,`td`)(72,`code`),mN(73,`var(--font-family-theme)`),lg()()(),Ml(74,`tr`)(75,`td`)(76,`code`),mN(77,`--font-size`),lg()(),Ml(78,`td`),mN(79,`Tamanho da fonte`),lg(),Ml(80,`td`)(81,`code`),mN(82,`var(--font-size-default)`),lg()()(),Ml(83,`tr`)(84,`td`)(85,`code`),mN(86,`--text-color-placeholder`),lg()(),Ml(87,`td`),mN(88,`Cor do texto placeholder`),lg(),Ml(89,`td`)(90,`code`),mN(91,`var(--color-neutral-light-30)`),lg()()(),Ml(92,`tr`)(93,`td`)(94,`code`),mN(95,`--color`),lg()(),Ml(96,`td`),mN(97,`Cor pincipal do input`),lg(),Ml(98,`td`)(99,`code`),mN(100,`var(--color-neutral-dark-70)`),lg()()(),Ml(101,`tr`)(102,`td`)(103,`code`),mN(104,`--background`),lg()(),Ml(105,`td`),mN(106,`Cor de background`),lg(),Ml(107,`td`)(108,`code`),mN(109,`var(--color-neutral-light-05)`),lg()()(),Ml(110,`tr`)(111,`td`)(112,`code`),mN(113,`--padding`),lg()(),Ml(114,`td`),mN(115,`Preenchimento`),lg(),Ml(116,`td`)(117,`code`),mN(118,`0 0.5rem`),lg()()(),Ml(119,`tr`)(120,`td`)(121,`code`),mN(122,`--text-color`),lg()(),Ml(123,`td`),mN(124,`Cor do texto`),lg(),Ml(125,`td`)(126,`code`),mN(127,`var(--color-neutral-dark-90)`),lg()()(),Ml(128,`tr`)(129,`td`)(130,`code`),mN(131,`--field-container-title-justify`),lg()(),Ml(132,`td`),mN(133,`Alinhamento horizontal do título (`),Ml(134,`code`),mN(135,`justify-content`),lg(),mN(136,`)`),lg(),Ml(137,`td`)(138,`code`),mN(139,`space-between`),lg()()(),Ml(140,`tr`)(141,`td`)(142,`code`),mN(143,`--field-container-title-flex`),lg()(),Ml(144,`td`),mN(145,`Flex do título (`),Ml(146,`code`),mN(147,`flex`),lg(),mN(148,`)`),lg(),Ml(149,`td`)(150,`code`),mN(151,`1 auto`),lg()()(),Ml(152,`tr`)(153,`td`)(154,`strong`),mN(155,`Hover`),lg()(),ql(156,`td`)(157,`td`),lg(),Ml(158,`tr`)(159,`td`)(160,`code`),mN(161,`--color-hover`),lg()(),Ml(162,`td`),mN(163,`Cor principal no estado hover`),lg(),Ml(164,`td`)(165,`code`),mN(166,`var(--color-brand-01-dark)`),lg()()(),Ml(167,`tr`)(168,`td`)(169,`code`),mN(170,`--background-hover`),lg()(),Ml(171,`td`),mN(172,`Cor de background no estado hover`),lg(),Ml(173,`td`)(174,`code`),mN(175,`var(--color-brand-01-lightest)`),lg()()(),Ml(176,`tr`)(177,`td`)(178,`strong`),mN(179,`Focused`),lg()(),ql(180,`td`)(181,`td`),lg(),Ml(182,`tr`)(183,`td`)(184,`code`),mN(185,`--color-focused`),lg()(),Ml(186,`td`),mN(187,`Cor principal no estado de focus`),lg(),Ml(188,`td`)(189,`code`),mN(190,`var(--color-action-default)`),lg()()(),Ml(191,`tr`)(192,`td`)(193,`code`),mN(194,`--outline-color-focused`),lg()(),Ml(195,`td`),mN(196,`Cor do outline do estado de focus`),lg(),Ml(197,`td`)(198,`code`),mN(199,`var(--color-action-focus)`),lg()()(),Ml(200,`tr`)(201,`td`)(202,`strong`),mN(203,`Disabled`),lg()(),ql(204,`td`)(205,`td`),lg(),Ml(206,`tr`)(207,`td`)(208,`code`),mN(209,`--color-disabled`),lg()(),Ml(210,`td`),mN(211,`Cor principal no estado disabled`),lg(),Ml(212,`td`)(213,`code`),mN(214,`var(--color-neutral-light-30)`),lg()()(),Ml(215,`tr`)(216,`td`)(217,`code`),mN(218,`--background-disabled`),lg()(),Ml(219,`td`),mN(220,`Cor de background no estado disabled`),lg(),Ml(221,`td`)(222,`code`),mN(223,`var(--color-neutral-light-20)`),lg()()(),Ml(224,`tr`)(225,`td`)(226,`code`),mN(227,`--text-color-disabled`),lg()(),Ml(228,`td`),mN(229,`Cor do texto no estado disabled`),lg(),Ml(230,`td`)(231,`code`),mN(232,`var(--color-neutral-dark-70)`),lg()()()()(),ql(233,`br`),lg(),Ml(234,`div`,8)(235,`h4`,9),mN(236,`Seletor`),lg(),Ml(237,`pre`,10),mN(238,`<po-input
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
`),lg()(),Ml(239,`h4`,11),mN(240,`Propriedades`),lg(),Ml(241,`table`,12)(242,`tr`,13)(243,`th`,14),mN(244,`Nome`),lg(),Ml(245,`th`,14),mN(246,`Tipo`),lg(),Ml(247,`th`,14),mN(248,`Padrão`),lg(),Ml(249,`th`,14),mN(250,`Descrição`),lg()(),Ml(251,`tr`,15)(252,`td`,16)(253,`div`,17)(254,`span`,18),mN(255,` (p-additional-help)`),ql(256,`br`),lg()(),Ml(257,`div`,19),mN(258,`Deprecated`),lg()(),Ml(259,`td`,20)(260,`code`,21),mN(261,`EventEmitter`),lg()(),Ml(262,`td`,22),mN(263,`-`),lg(),Ml(264,`td`,23)(265,`em`)(266,`strong`),mN(267,`(opcional)`),lg()(),Ml(268,`p`),mN(269,`Evento disparado ao clicar no ícone de ajuda adicional.`),lg(),Ml(270,`blockquote`)(271,`p`),mN(272,`Essa propriedade está `),Ml(273,`strong`),mN(274,`depreciada`),lg(),mN(275,` e será removida na versão `),Ml(276,`code`),mN(277,`23.x.x`),lg(),mN(278,`. Recomendamos utilizar a propriedade `),Ml(279,`code`),mN(280,`p-helper`),lg(),mN(281,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(282,`tr`,15)(283,`td`,16)(284,`div`,24)(285,`span`,25),mN(286,` p-additional-help-tooltip`),ql(287,`br`),lg()(),Ml(288,`div`,19),mN(289,`Deprecated`),lg()(),Ml(290,`td`,20)(291,`code`,26),mN(292,`string`),lg()(),Ml(293,`td`,22),mN(294,`-`),lg(),Ml(295,`td`,23)(296,`em`)(297,`strong`),mN(298,`(opcional)`),lg()(),Ml(299,`p`),mN(300,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ml(301,`code`),mN(302,`po-helper`),lg(),mN(303,`.
`),Ml(304,`strong`),mN(305,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),lg()(),Ml(306,`blockquote`)(307,`p`),mN(308,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),lg()(),Ml(309,`blockquote`)(310,`p`),mN(311,`Essa propriedade está `),Ml(312,`strong`),mN(313,`depreciada`),lg(),mN(314,` e será removida na versão `),Ml(315,`code`),mN(316,`23.x.x`),lg(),mN(317,`. Recomendamos utilizar a propriedade `),Ml(318,`code`),mN(319,`p-helper`),lg(),mN(320,` que oferece mais recursos e flexibilidade.`),lg()()()(),Ml(321,`tr`,15)(322,`td`,16)(323,`div`,24)(324,`span`,25),mN(325,` p-append-in-body`),ql(326,`br`),lg()()(),Ml(327,`td`,20)(328,`code`,27),mN(329,`boolean`),lg()(),Ml(330,`td`,22)(331,`p`)(332,`code`),mN(333,`false`),lg()()(),Ml(334,`td`,23)(335,`em`)(336,`strong`),mN(337,`(opcional)`),lg()(),Ml(338,`p`),mN(339,`Define que o popover (`),Ml(340,`code`),mN(341,`p-helper`),lg(),mN(342,` e/ou `),Ml(343,`code`),mN(344,`p-error-limit`),lg(),mN(345,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),lg(),Ml(346,`blockquote`)(347,`p`),mN(348,`Quando utilizado com `),Ml(349,`code`),mN(350,`p-helper`),lg(),mN(351,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),lg()()()(),Ml(352,`tr`,15)(353,`td`,16)(354,`div`,24)(355,`span`,25),mN(356,` p-auto-focus`),ql(357,`br`),lg()()(),Ml(358,`td`,20)(359,`code`,27),mN(360,`boolean`),lg()(),Ml(361,`td`,22)(362,`p`)(363,`code`),mN(364,`false`),lg()()(),Ml(365,`td`,23)(366,`em`)(367,`strong`),mN(368,`(opcional)`),lg()(),Ml(369,`p`),mN(370,`Aplica foco no elemento ao ser iniciado.`),lg(),Ml(371,`blockquote`)(372,`p`),mN(373,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),lg()()()(),Ml(374,`tr`,15)(375,`td`,16)(376,`div`,17)(377,`span`,18),mN(378,` (p-blur)`),ql(379,`br`),lg()()(),Ml(380,`td`,20)(381,`code`,21),mN(382,`EventEmitter`),lg()(),Ml(383,`td`,22),mN(384,`-`),lg(),Ml(385,`td`,23)(386,`em`)(387,`strong`),mN(388,`(opcional)`),lg()(),Ml(389,`p`),mN(390,`Evento disparado ao sair do campo.`),lg()()(),Ml(391,`tr`,15)(392,`td`,16)(393,`div`,17)(394,`span`,18),mN(395,` (p-change)`),ql(396,`br`),lg()()(),Ml(397,`td`,20)(398,`code`,21),mN(399,`EventEmitter`),lg()(),Ml(400,`td`,22),mN(401,`-`),lg(),Ml(402,`td`,23)(403,`em`)(404,`strong`),mN(405,`(opcional)`),lg()(),Ml(406,`p`),mN(407,`Evento disparado ao alterar valor e deixar o campo.`),lg()()(),Ml(408,`tr`,15)(409,`td`,16)(410,`div`,17)(411,`span`,18),mN(412,` (p-change-model)`),ql(413,`br`),lg()()(),Ml(414,`td`,20)(415,`code`,21),mN(416,`EventEmitter`),lg()(),Ml(417,`td`,22),mN(418,`-`),lg(),Ml(419,`td`,23)(420,`em`)(421,`strong`),mN(422,`(opcional)`),lg()(),Ml(423,`p`),mN(424,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ml(425,`code`),mN(426,`setValue`),lg(),mN(427,`, `),Ml(428,`code`),mN(429,`patchValue`),lg(),mN(430,`, carregamento assíncrono).`),lg(),Ml(431,`p`),mN(432,`Diferentemente do `),Ml(433,`code`),mN(434,`p-change`),lg(),mN(435,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ml(436,`code`),mN(437,`p-change-model`),lg(),mN(438,` cobre todos os cenários de alteração de valor.`),lg(),Ml(439,`p`),mN(440,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),lg()()(),Ml(441,`tr`,15)(442,`td`,16)(443,`div`,24)(444,`span`,25),mN(445,`p-clean`),ql(446,`br`),lg()()(),Ml(447,`td`,20)(448,`code`,27),mN(449,`boolean`),lg()(),Ml(450,`td`,22),mN(451,`-`),lg(),Ml(452,`td`,23)(453,`em`)(454,`strong`),mN(455,`(opcional)`),lg()(),Ml(456,`p`),mN(457,`Se verdadeiro, o campo receberá um botão para ser limpo.`),lg()()(),Ml(458,`tr`,15)(459,`td`,16)(460,`div`,24)(461,`span`,25),mN(462,` p-compact-label`),ql(463,`br`),lg()()(),Ml(464,`td`,20)(465,`code`,27),mN(466,`boolean`),lg()(),Ml(467,`td`,22)(468,`p`)(469,`code`),mN(470,`false`),lg()()(),Ml(471,`td`,23)(472,`em`)(473,`strong`),mN(474,`(opcional)`),lg()(),Ml(475,`p`),mN(476,`Define se o título do campo será exibido de forma compacta.`),lg(),Ml(477,`p`),mN(478,`Quando habilitado (`),Ml(479,`code`),mN(480,`true`),lg(),mN(481,`), o modo compacto afeta o conjunto composto por:`),lg(),Ml(482,`ul`)(483,`li`)(484,`code`),mN(485,`po-label`),lg()(),Ml(486,`li`)(487,`code`),mN(488,`p-requirement (showRequired)`),lg()(),Ml(489,`li`)(490,`code`),mN(491,`po-helper`),lg()()(),Ml(492,`p`),mN(493,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),lg(),Ml(494,`p`),mN(495,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),lg(),Ml(496,`ul`)(497,`li`)(498,`code`),mN(499,`--field-container-title-justify`),lg()(),Ml(500,`li`)(501,`code`),mN(502,`--field-container-title-flex`),lg()()(),Ml(503,`p`),mN(504,`Exemplo:`),lg(),Ml(505,`pre`)(506,`code`),mN(507,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),lg()(),Ml(508,`p`),mN(509,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),lg()()(),Ml(510,`tr`,15)(511,`td`,16)(512,`div`,24)(513,`span`,25),mN(514,`p-disabled`),ql(515,`br`),lg()()(),Ml(516,`td`,20)(517,`code`,27),mN(518,`boolean`),lg()(),Ml(519,`td`,22)(520,`p`)(521,`code`),mN(522,`false`),lg()()(),Ml(523,`td`,23)(524,`em`)(525,`strong`),mN(526,`(opcional)`),lg()(),Ml(527,`p`),mN(528,`Se verdadeiro, desabilita o campo.`),lg()()(),Ml(529,`tr`,15)(530,`td`,16)(531,`div`,24)(532,`span`,25),mN(533,` p-emit-all-changes`),ql(534,`br`),lg()()(),Ml(535,`td`,20)(536,`code`,27),mN(537,`boolean`),lg()(),Ml(538,`td`,22)(539,`p`)(540,`code`),mN(541,`false`),lg()()(),Ml(542,`td`,23)(543,`em`)(544,`strong`),mN(545,`(opcional)`),lg()(),Ml(546,`p`),mN(547,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),lg()()(),Ml(548,`tr`,15)(549,`td`,16)(550,`div`,17)(551,`span`,18),mN(552,` (p-enter)`),ql(553,`br`),lg()()(),Ml(554,`td`,20)(555,`code`,21),mN(556,`EventEmitter`),lg()(),Ml(557,`td`,22),mN(558,`-`),lg(),Ml(559,`td`,23)(560,`em`)(561,`strong`),mN(562,`(opcional)`),lg()(),Ml(563,`p`),mN(564,`Evento disparado ao entrar do campo.`),lg()()(),Ml(565,`tr`,15)(566,`td`,16)(567,`div`,24)(568,`span`,25),mN(569,` p-error-async-properties`),ql(570,`br`),lg()()(),Ml(571,`td`,20)(572,`code`,28),mN(573,`ErrorAsyncProperties`),lg()(),Ml(574,`td`,22),mN(575,`-`),lg(),Ml(576,`td`,23)(577,`em`)(578,`strong`),mN(579,`(opcional)`),lg()(),Ml(580,`p`),mN(581,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Ml(582,`code`),mN(583,`Reactive Forms`),lg(),mN(584,`. Em formulários reativos, pode-se utilizar o próprio `),Ml(585,`code`),mN(586,`asyncValidators`),lg(),mN(587,`.`),lg()()(),Ml(588,`tr`,15)(589,`td`,16)(590,`div`,24)(591,`span`,25),mN(592,` p-error-limit`),ql(593,`br`),lg()()(),Ml(594,`td`,20)(595,`code`,27),mN(596,`boolean`),lg()(),Ml(597,`td`,22)(598,`p`)(599,`code`),mN(600,`false`),lg()()(),Ml(601,`td`,23)(602,`em`)(603,`strong`),mN(604,`(opcional)`),lg()(),Ml(605,`p`),mN(606,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),lg(),Ml(607,`blockquote`)(608,`p`),mN(609,`Caso essa propriedade seja definida como `),Ml(610,`code`),mN(611,`true`),lg(),mN(612,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),lg()()()(),Ml(613,`tr`,15)(614,`td`,16)(615,`div`,24)(616,`span`,25),mN(617,` p-error-pattern`),ql(618,`br`),lg()()(),Ml(619,`td`,20)(620,`code`,26),mN(621,`string`),lg()(),Ml(622,`td`,22),mN(623,`-`),lg(),Ml(624,`td`,23)(625,`em`)(626,`strong`),mN(627,`(opcional)`),lg()(),Ml(628,`p`),mN(629,`Mensagem que será apresentada quando o `),Ml(630,`code`),mN(631,`pattern`),lg(),mN(632,` ou a máscara não for satisfeita.`),lg(),Ml(633,`blockquote`)(634,`p`),mN(635,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Ml(636,`code`),mN(637,`p-required-field-error-message`),lg(),mN(638,` em conjunto.`),lg()()()(),Ml(639,`tr`,15)(640,`td`,16)(641,`div`,24)(642,`span`,25),mN(643,` p-help`),ql(644,`br`),lg()()(),Ml(645,`td`,20)(646,`code`,26),mN(647,`string`),lg()(),Ml(648,`td`,22),mN(649,`-`),lg(),Ml(650,`td`,23)(651,`em`)(652,`strong`),mN(653,`(opcional)`),lg()(),Ml(654,`p`),mN(655,`Texto de apoio do campo.`),lg()()(),Ml(656,`tr`,15)(657,`td`,16)(658,`div`,24)(659,`span`,25),mN(660,` p-icon`),ql(661,`br`),lg()()(),Ml(662,`td`,20)(663,`code`,26),mN(664,`string `),lg(),Ml(665,`code`,29),mN(666,` TemplateRef<void>`),lg()(),Ml(667,`td`,22),mN(668,`-`),lg(),Ml(669,`td`,23)(670,`em`)(671,`strong`),mN(672,`(opcional)`),lg()(),Ml(673,`p`),mN(674,`Define o ícone que será exibido no início do campo.`),lg(),Ml(675,`p`),mN(676,`É possível usar qualquer um dos ícones da `),Ml(677,`a`,30),mN(678,`Biblioteca de ícones`),lg(),mN(679,`. conforme exemplo abaixo:`),lg(),Ml(680,`pre`)(681,`code`),mN(682,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),lg()(),Ml(683,`p`),mN(684,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(685,`em`),mN(686,`Font Awesome`),lg(),mN(687,`, da seguinte forma:`),lg(),Ml(688,`pre`)(689,`code`),mN(690,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),lg()(),Ml(691,`p`),mN(692,`Outra opção seria a customização do ícone através do `),Ml(693,`code`),mN(694,`TemplateRef`),lg(),mN(695,`, conforme exemplo abaixo:`),lg(),Ml(696,`pre`)(697,`code`),mN(698,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),lg()(),Ml(699,`blockquote`)(700,`p`),mN(701,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ml(702,`code`),mN(703,`font-size: inherit`),lg(),mN(704,` caso o ícone utilizado não aplique-o.`),lg()()()(),Ml(705,`tr`,15)(706,`td`,16)(707,`div`,17)(708,`span`,18),mN(709,` (p-keydown)`),ql(710,`br`),lg()()(),Ml(711,`td`,20)(712,`code`,21),mN(713,`EventEmitter`),lg()(),Ml(714,`td`,22),mN(715,`-`),lg(),Ml(716,`td`,23)(717,`em`)(718,`strong`),mN(719,`(opcional)`),lg()(),Ml(720,`p`),mN(721,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(722,`code`),mN(723,`KeyboardEvent`),lg(),mN(724,` com informações sobre a tecla.`),lg()()(),Ml(725,`tr`,15)(726,`td`,16)(727,`div`,24)(728,`span`,25),mN(729,` p-label`),ql(730,`br`),lg()()(),Ml(731,`td`,20)(732,`code`,26),mN(733,`string`),lg()(),Ml(734,`td`,22),mN(735,`-`),lg(),Ml(736,`td`,23)(737,`em`)(738,`strong`),mN(739,`(opcional)`),lg()(),Ml(740,`p`),mN(741,`Rótulo do campo.`),lg()()(),Ml(742,`tr`,15)(743,`td`,16)(744,`div`,24)(745,`span`,25),mN(746,` p-label-text-wrap`),ql(747,`br`),lg()()(),Ml(748,`td`,20)(749,`code`,27),mN(750,`boolean`),lg()(),Ml(751,`td`,22)(752,`p`)(753,`code`),mN(754,`false`),lg()()(),Ml(755,`td`,23)(756,`em`)(757,`strong`),mN(758,`(opcional)`),lg()(),Ml(759,`p`),mN(760,`Habilita a quebra automática do texto da propriedade `),Ml(761,`code`),mN(762,`p-label`),lg(),mN(763,`. Quando `),Ml(764,`code`),mN(765,`p-label-text-wrap`),lg(),mN(766,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(767,`tr`,15)(768,`td`,16)(769,`div`,24)(770,`span`,25),mN(771,` p-loading`),ql(772,`br`),lg()()(),Ml(773,`td`,20)(774,`code`,27),mN(775,`boolean`),lg()(),Ml(776,`td`,22)(777,`p`)(778,`code`),mN(779,`false`),lg()()(),Ml(780,`td`,23)(781,`em`)(782,`strong`),mN(783,`(opcional)`),lg()(),Ml(784,`p`),mN(785,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),lg()()(),Ml(786,`tr`,15)(787,`td`,16)(788,`div`,24)(789,`span`,25),mN(790,`p-mask`),ql(791,`br`),lg()()(),Ml(792,`td`,20)(793,`code`,26),mN(794,`string`),lg()(),Ml(795,`td`,22),mN(796,`-`),lg(),Ml(797,`td`,23)(798,`em`)(799,`strong`),mN(800,`(opcional)`),lg()(),Ml(801,`p`),mN(802,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),lg()()(),Ml(803,`tr`,15)(804,`td`,16)(805,`div`,24)(806,`span`,25),mN(807,`p-mask-format-model`),ql(808,`br`),lg()()(),Ml(809,`td`,20)(810,`code`,27),mN(811,`boolean`),lg()(),Ml(812,`td`,22)(813,`p`)(814,`code`),mN(815,`false`),lg()()(),Ml(816,`td`,23)(817,`em`)(818,`strong`),mN(819,`(opcional)`),lg()(),Ml(820,`p`),mN(821,`Indica se o `),Ml(822,`code`),mN(823,`model`),lg(),mN(824,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),lg()()(),Ml(825,`tr`,15)(826,`td`,16)(827,`div`,24)(828,`span`,25),mN(829,` p-mask-no-length-validation`),ql(830,`br`),lg()()(),Ml(831,`td`,20)(832,`code`,27),mN(833,`boolean`),lg()(),Ml(834,`td`,22)(835,`p`)(836,`code`),mN(837,`false`),lg()()(),Ml(838,`td`,23)(839,`p`),mN(840,`Controla como o componente aplica as validações de comprimento mínimo (`),Ml(841,`code`),mN(842,`minLength`),lg(),mN(843,`) e máximo (`),Ml(844,`code`),mN(845,`maxLength`),lg(),mN(846,`) quando há uma máscara (`),Ml(847,`code`),mN(848,`p-mask`),lg(),mN(849,`) definida.`),lg(),Ml(850,`ul`)(851,`li`),mN(852,`Quando `),Ml(853,`code`),mN(854,`true`),lg(),mN(855,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),lg(),Ml(856,`li`),mN(857,`Quando `),Ml(858,`code`),mN(859,`false`),lg(),mN(860,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),lg()(),Ml(861,`blockquote`)(862,`p`),mN(863,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ml(864,`code`),mN(865,`p-mask-format-model`),lg(),mN(866,`.`),lg()(),Ml(867,`p`),mN(868,`Exemplo:`),lg(),Ml(869,`pre`)(870,`code`),mN(871,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),lg()(),Ml(872,`ul`)(873,`li`),mN(874,`Entrada: `),Ml(875,`code`),mN(876,`123-456`),lg(),mN(877,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Ml(878,`code`),mN(879,`-`),lg(),mN(880,`.`),lg()()()(),Ml(881,`tr`,15)(882,`td`,16)(883,`div`,24)(884,`span`,25),mN(885,` p-maxlength`),ql(886,`br`),lg()()(),Ml(887,`td`,20)(888,`code`,31),mN(889,`number`),lg()(),Ml(890,`td`,22),mN(891,`-`),lg(),Ml(892,`td`,23)(893,`em`)(894,`strong`),mN(895,`(opcional)`),lg()(),Ml(896,`p`),mN(897,`Indica a quantidade máxima de caracteres que o campo aceita.`),lg()()(),Ml(898,`tr`,15)(899,`td`,16)(900,`div`,24)(901,`span`,25),mN(902,` p-minlength`),ql(903,`br`),lg()()(),Ml(904,`td`,20)(905,`code`,31),mN(906,`number`),lg()(),Ml(907,`td`,22),mN(908,`-`),lg(),Ml(909,`td`,23)(910,`em`)(911,`strong`),mN(912,`(opcional)`),lg()(),Ml(913,`p`),mN(914,`Indica a quantidade mínima de caracteres que o campo aceita.`),lg()()(),Ml(915,`tr`,15)(916,`td`,16)(917,`div`,24)(918,`span`,25),mN(919,` name`),ql(920,`br`),lg()()(),Ml(921,`td`,20)(922,`code`,26),mN(923,`string`),lg()(),Ml(924,`td`,22),mN(925,`-`),lg(),Ml(926,`td`,23)(927,`p`),mN(928,`Nome e identificador do campo.`),lg()()(),Ml(929,`tr`,15)(930,`td`,16)(931,`div`,24)(932,`span`,25),mN(933,` p-no-autocomplete`),ql(934,`br`),lg()()(),Ml(935,`td`,20)(936,`code`,27),mN(937,`boolean`),lg()(),Ml(938,`td`,22)(939,`p`)(940,`code`),mN(941,`false`),lg()()(),Ml(942,`td`,23)(943,`em`)(944,`strong`),mN(945,`(opcional)`),lg()(),Ml(946,`p`),mN(947,`Define a propriedade nativa `),Ml(948,`code`),mN(949,`autocomplete`),lg(),mN(950,` do campo como `),Ml(951,`code`),mN(952,`off`),lg(),mN(953,`.`),lg(),Ml(954,`blockquote`)(955,`p`),mN(956,`No componente `),Ml(957,`code`),mN(958,`po-password`),lg(),mN(959,` será definido como `),Ml(960,`code`),mN(961,`new-password`),lg(),mN(962,`.`),lg()(),Ml(963,`p`),mN(964,`Nos componentes `),Ml(965,`code`),mN(966,`po-password`),lg(),mN(967,` e `),Ml(968,`code`),mN(969,`po-login`),lg(),mN(970,` o valor padrão será `),Ml(971,`code`),mN(972,`true`),lg(),mN(973,`.`),lg()()(),Ml(974,`tr`,15)(975,`td`,16)(976,`div`,24)(977,`span`,25),mN(978,` p-optional`),ql(979,`br`),lg()()(),Ml(980,`td`,20)(981,`code`,27),mN(982,`boolean`),lg()(),Ml(983,`td`,22)(984,`p`)(985,`code`),mN(986,`false`),lg()()(),Ml(987,`td`,23)(988,`em`)(989,`strong`),mN(990,`(opcional)`),lg()(),Ml(991,`p`),mN(992,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(993,`blockquote`)(994,`p`),mN(995,`Não será exibida a indicação se:`),lg()(),Ml(996,`ul`)(997,`li`),mN(998,`O campo conter `),Ml(999,`code`),mN(1e3,`p-required`),lg(),mN(1001,`;`),lg(),Ml(1002,`li`),mN(1003,`Não possuir `),Ml(1004,`code`),mN(1005,`p-help`),lg(),mN(1006,` e/ou `),Ml(1007,`code`),mN(1008,`p-label`),lg(),mN(1009,`.`),lg()()()(),Ml(1010,`tr`,15)(1011,`td`,16)(1012,`div`,24)(1013,`span`,25),mN(1014,`p-pattern`),ql(1015,`br`),lg()()(),Ml(1016,`td`,20)(1017,`code`,26),mN(1018,`string`),lg()(),Ml(1019,`td`,22),mN(1020,`-`),lg(),Ml(1021,`td`,23)(1022,`em`)(1023,`strong`),mN(1024,`(opcional)`),lg()(),Ml(1025,`p`),mN(1026,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Ml(1027,`code`),mN(1028,`(p-mask)`),lg(),mN(1029,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),lg()()(),Ml(1030,`tr`,15)(1031,`td`,16)(1032,`div`,24)(1033,`span`,25),mN(1034,` p-placeholder`),ql(1035,`br`),lg()()(),Ml(1036,`td`,20)(1037,`code`,26),mN(1038,`string`),lg()(),Ml(1039,`td`,22)(1040,`p`),mN(1041,`''`),lg()(),Ml(1042,`td`,23)(1043,`em`)(1044,`strong`),mN(1045,`(opcional)`),lg()(),Ml(1046,`p`),mN(1047,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),lg()()(),Ml(1048,`tr`,15)(1049,`td`,16)(1050,`div`,24)(1051,`span`,25),mN(1052,` p-helper`),ql(1053,`br`),lg()()(),Ml(1054,`td`,20)(1055,`code`,32),mN(1056,`PoHelperOptions `),lg(),Ml(1057,`code`,26),mN(1058,` string`),lg()(),Ml(1059,`td`,22),mN(1060,`-`),lg(),Ml(1061,`td`,23)(1062,`em`)(1063,`strong`),mN(1064,`(opcional)`),lg()(),Ml(1065,`p`),mN(1066,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(1067,`code`),mN(1068,`p-label`),lg(),mN(1069,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(1070,`code`),mN(1071,`p-label`),lg(),mN(1072,`.`),lg(),Ml(1073,`blockquote`)(1074,`p`),mN(1075,`Para mais informações acesse: `),Ml(1076,`a`,33),mN(1077,`https://po-ui.io/documentation/po-helper`),lg(),mN(1078,`.`),lg()(),Ml(1079,`blockquote`)(1080,`p`),mN(1081,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(1082,`code`),mN(1083,`p-additional-help-tooltip`),lg(),mN(1084,` e `),Ml(1085,`code`),mN(1086,`p-additional-help`),lg(),mN(1087,`) será ignorado.`),lg()()()(),Ml(1088,`tr`,15)(1089,`td`,16)(1090,`div`,24)(1091,`span`,25),mN(1092,`p-readonly`),ql(1093,`br`),lg()()(),Ml(1094,`td`,20)(1095,`code`,27),mN(1096,`boolean`),lg()(),Ml(1097,`td`,22),mN(1098,`-`),lg(),Ml(1099,`td`,23)(1100,`em`)(1101,`strong`),mN(1102,`(opcional)`),lg()(),Ml(1103,`p`),mN(1104,`Indica que o campo será somente leitura.`),lg()()(),Ml(1105,`tr`,15)(1106,`td`,16)(1107,`div`,24)(1108,`span`,25),mN(1109,`p-required`),ql(1110,`br`),lg()()(),Ml(1111,`td`,20)(1112,`code`,27),mN(1113,`boolean`),lg()(),Ml(1114,`td`,22)(1115,`p`)(1116,`code`),mN(1117,`false`),lg()()(),Ml(1118,`td`,23)(1119,`em`)(1120,`strong`),mN(1121,`(opcional)`),lg()(),Ml(1122,`p`),mN(1123,`Define que o campo será obrigatório.`),lg(),Ml(1124,`blockquote`)(1125,`p`),mN(1126,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ml(1127,`code`),mN(1128,`(p-disabled)`),lg(),mN(1129,`.`),lg()()()(),Ml(1130,`tr`,15)(1131,`td`,16)(1132,`div`,24)(1133,`span`,25),mN(1134,` p-required-field-error-message`),ql(1135,`br`),lg()()(),Ml(1136,`td`,20)(1137,`code`,27),mN(1138,`boolean`),lg()(),Ml(1139,`td`,22)(1140,`p`)(1141,`code`),mN(1142,`false`),lg()()(),Ml(1143,`td`,23)(1144,`em`)(1145,`strong`),mN(1146,`(opcional)`),lg()(),Ml(1147,`p`),mN(1148,`Exibe a mensagem setada na propriedade `),Ml(1149,`code`),mN(1150,`p-error-pattern`),lg(),mN(1151,` se o campo estiver vazio e for requerido.`),lg(),Ml(1152,`blockquote`)(1153,`p`),mN(1154,`Necessário que a propriedade `),Ml(1155,`code`),mN(1156,`p-required`),lg(),mN(1157,` esteja habilitada.`),lg()()()(),Ml(1158,`tr`,15)(1159,`td`,16)(1160,`div`,24)(1161,`span`,25),mN(1162,` p-show-required`),ql(1163,`br`),lg()()(),Ml(1164,`td`,20)(1165,`code`,27),mN(1166,`boolean`),lg()(),Ml(1167,`td`,22),mN(1168,`-`),lg(),Ml(1169,`td`,23)(1170,`p`),mN(1171,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(1172,`blockquote`)(1173,`p`),mN(1174,`Não será exibida a indicação se:`),lg()(),Ml(1175,`ul`)(1176,`li`),mN(1177,`Não possuir `),Ml(1178,`code`),mN(1179,`p-help`),lg(),mN(1180,` e/ou `),Ml(1181,`code`),mN(1182,`p-label`),lg(),mN(1183,`.`),lg()()()(),Ml(1184,`tr`,15)(1185,`td`,16)(1186,`div`,24)(1187,`span`,25),mN(1188,` p-size`),ql(1189,`br`),lg()()(),Ml(1190,`td`,20)(1191,`code`,26),mN(1192,`string`),lg()(),Ml(1193,`td`,22)(1194,`p`)(1195,`code`),mN(1196,`medium`),lg()()(),Ml(1197,`td`,23)(1198,`em`)(1199,`strong`),mN(1200,`(opcional)`),lg()(),Ml(1201,`p`),mN(1202,`Define o tamanho do componente:`),lg(),Ml(1203,`ul`)(1204,`li`)(1205,`code`),mN(1206,`small`),lg(),mN(1207,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(1208,`li`)(1209,`code`),mN(1210,`medium`),lg(),mN(1211,`: altura do input como 44px.`),lg()(),Ml(1212,`blockquote`)(1213,`p`),mN(1214,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(1215,`code`),mN(1216,`medium`),lg(),mN(1217,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(1218,`a`,34),mN(1219,`po-theme`),lg(),mN(1220,`.`),lg()()()(),Ml(1221,`tr`,15)(1222,`td`,16)(1223,`div`,24)(1224,`span`,25),mN(1225,` p-upper-case`),ql(1226,`br`),lg()()(),Ml(1227,`td`,20)(1228,`code`,27),mN(1229,`boolean`),lg()(),Ml(1230,`td`,22),mN(1231,`-`),lg(),Ml(1232,`td`,23)(1233,`p`),mN(1234,`Converte o conteúdo do campo em maiúsulo automaticamente.`),lg()()()(),Ml(1235,`h3`,11),mN(1236,`Métodos`),lg(),Ml(1237,`table`,35)(1238,`tr`,15)(1239,`th`,36)(1240,`div`,24)(1241,`h4`)(1242,`span`,25),mN(1243,` showAdditionalHelp `),lg()()()()(),Ml(1244,`tr`,23)(1245,`td`,23)(1246,`p`),mN(1247,`Método que exibe `),Ml(1248,`code`),mN(1249,`p-helper`),lg(),mN(1250,` ou executa a ação definida em `),Ml(1251,`code`),mN(1252,`p-helper{eventOnClick}`),lg(),mN(1253,` ou em `),Ml(1254,`code`),mN(1255,`p-additionalHelp`),lg(),mN(1256,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(1257,`code`),mN(1258,`p-keydown`),lg(),mN(1259,`.`),lg(),Ml(1260,`blockquote`)(1261,`p`),mN(1262,`Exibe ou oculta o conteúdo do componente `),Ml(1263,`code`),mN(1264,`po-helper`),lg(),mN(1265,` quando o componente estiver com foco.`),lg()(),Ml(1266,`pre`)(1267,`code`),mN(1268,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),lg()(),Ml(1269,`pre`)(1270,`code`),mN(1271,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(1272,`br`),Ml(1273,`table`,35)(1274,`tr`,15)(1275,`th`,36)(1276,`div`,24)(1277,`h4`)(1278,`span`,25),mN(1279,` focus `),lg()()()()(),Ml(1280,`tr`,23)(1281,`td`,23)(1282,`p`),mN(1283,`Função que atribui foco ao componente.`),lg(),Ml(1284,`p`),mN(1285,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(1286,`pre`)(1287,`code`),mN(1288,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),lg()()()()(),ql(1289,`br`),Ml(1290,`h3`),mN(1291,`Interfaces`),lg(),Ml(1292,`h4`,37)(1293,`code`,5),mN(1294,`ErrorAsyncProperties`),lg()(),Ml(1295,`div`,2)(1296,`p`),mN(1297,`Interface para realizar uma validação assíncrona no componente.`),lg()(),Ml(1298,`h4`,11),mN(1299,`Propriedades`),lg(),Ml(1300,`table`,12)(1301,`tr`,13)(1302,`th`,14),mN(1303,`Nome`),lg(),Ml(1304,`th`,14),mN(1305,`Tipo`),lg(),Ml(1306,`th`,14),mN(1307,`Descrição`),lg()(),Ml(1308,`tr`,15)(1309,`td`,16)(1310,`div`,24)(1311,`span`,25),mN(1312,` errorAsync`),ql(1313,`br`),lg()()(),Ml(1314,`td`,20)(1315,`code`,38),mN(1316,`(value) => Observable<boolean>`),lg()(),Ml(1317,`td`,23)(1318,`p`),mN(1319,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ml(1320,`code`),mN(1321,`change`),lg(),mN(1322,` ou `),Ml(1323,`code`),mN(1324,`change-model`),lg(),mN(1325,`, dependendo do valor da propriedade `),Ml(1326,`code`),mN(1327,`triggerMode`),lg(),mN(1328,`.`),lg()()(),Ml(1329,`tr`,15)(1330,`td`,16)(1331,`div`,24)(1332,`span`,25),mN(1333,` triggerMode`),ql(1334,`br`),lg()()(),Ml(1335,`td`,20)(1336,`code`,39),mN(1337,`'change' `),lg(),Ml(1338,`code`,40),mN(1339,` 'changeModel'`),lg()(),Ml(1340,`td`,23)(1341,`em`)(1342,`strong`),mN(1343,`(opcional)`),lg()(),Ml(1344,`p`),mN(1345,`Controla se o método será executado no disparo do output `),Ml(1346,`code`),mN(1347,`change`),lg(),mN(1348,` ou `),Ml(1349,`code`),mN(1350,`change-model`),lg(),mN(1351,`.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Ue=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Input`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),ql(3,`sample-po-input-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),ql(5,`sample-po-input-basic-view`)(6,`sample-po-input-labs-view`)(7,`sample-po-input-reactive-form-view`)(8,`sample-po-input-mask-dynamic-view`),lg()()()),l&2&&(cw(`p-actions`,o.actions),Up(2),cw(`p-active`,o.activeTab===`doc`),Up(2),cw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[V8e,SCe,ECe,Ce,Me,we,Fe,De],encapsulation:2,changeDetection:1})}return a})()}];var Ie=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(Ue),NL]})}return a})();var Dt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,Ie]})}return a})();export{Dt as DocPoInputModule};