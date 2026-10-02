import{Br as RE,Di as he,Dt as aae,En as wa,Hn as AN,Kn as BP,Li as kL,Oi as hm,Qi as pt,Qn as Co,R as Ic,Rr as Qn,Sa as zO,Sr as Kc,T as Cte,Tn as vze,Tr as LP,U as Jne,Ui as m0,Un as Ac,Wi as mg,Wr as S9,Wt as ioe,Xn as C9,Xr as Ue$1,Yn as Bx,ai as aN,dr as Hp,ei as Xc,en as ni,er as D9,fa as vN,ga as wn,gn as tae,hi as e_,ht as V3,i as _a,ii as Zx,ki as ho,la as ug,li as cE,lr as Hn,mn as t4,nn as ob,oa as ua,oi as b9,qi as p0,qr as TE,r as Ta,rr as E,sa as ue,ta as qP,tr as DN,un as roe,vi as f,vr as Jv,wt as _4,xi as fo,xn as v4,xr as KP}from"./main-TFA52GHY.js";var fe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-input-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`input`,`p-label`,`PO Input`]],template:function(l,o){l&1&&Kc(0,`po-input`,0)},dependencies:[_4],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-input-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Input Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-input-basic/sample-po-input-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-input-basic/sample-po-input-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-input-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Le,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,fe],encapsulation:2,changeDetection:1})}return a})();var ke=(()=>{class a{helperText;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`maskFormatModel`,label:`Formatted Model`},{value:`maskNoLengthValidation`,label:`Mask No Length Validation`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`uppercase`,label:`Upper Case`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}restore(){this.helperText=``,this.input=void 0,this.size=`medium`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-input-labs`]],standalone:!1,decls:22,vars:44,consts:[[`f`,`ngForm`],[`name`,`input`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-mask`,`p-mask-format-model`,`p-maxlength`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-pattern`,`p-placeholder`,`p-required`,`p-required-field-error-message`,`p-readonly`,`p-upper-case`,`p-show-required`,`p-mask-no-length-validation`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`mask`,`p-clean`,``,`p-help`,`Ex.: Zip code: '99999-999'; License plate: '@@@-9999'`,`p-label`,`Mask`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`pattern`,`p-clean`,``,`p-help`,`Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'`,`p-label`,`Pattern (Regex)`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let s=Bx();Ac(0,`po-input`,1),RE(`ngModelChange`,function(p){return Jv(s),DN(o.input,p)||(o.input=p),e_(p)}),pt(`p-blur`,function(){return o.changeEvent(`p-blur`)})(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-enter`,function(){return o.changeEvent(`p-enter`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3)(4,`po-info`,4),ug(),Kc(5,`po-divider`),Ac(6,`form`,null,0)(8,`po-input`,5),RE(`ngModelChange`,function(p){return Jv(s),DN(o.label,p)||(o.label=p),e_(p)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(p){return Jv(s),DN(o.help,p)||(o.help=p),e_(p)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(p){return Jv(s),DN(o.helperText,p)||(o.helperText=p),e_(p)}),ug(),p0(),Ac(11,`po-input`,8),RE(`ngModelChange`,function(p){return Jv(s),DN(o.placeholder,p)||(o.placeholder=p),e_(p)}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(p){return Jv(s),DN(o.errorPattern,p)||(o.errorPattern=p),e_(p)}),ug(),p0(),Ac(13,`po-input`,10),RE(`ngModelChange`,function(p){return Jv(s),DN(o.mask,p)||(o.mask=p),e_(p)}),ug(),p0(),Ac(14,`po-input`,11),RE(`ngModelChange`,function(p){return Jv(s),DN(o.pattern,p)||(o.pattern=p),e_(p)}),ug(),p0(),Ac(15,`po-number`,12),RE(`ngModelChange`,function(p){return Jv(s),DN(o.minlength,p)||(o.minlength=p),e_(p)}),ug(),p0(),Ac(16,`po-number`,13),RE(`ngModelChange`,function(p){return Jv(s),DN(o.maxlength,p)||(o.maxlength=p),e_(p)}),ug(),p0(),Ac(17,`po-select`,14),RE(`ngModelChange`,function(p){return Jv(s),DN(o.icon,p)||(o.icon=p),e_(p)}),ug(),p0(),Ac(18,`po-checkbox-group`,15),RE(`ngModelChange`,function(p){return Jv(s),DN(o.properties,p)||(o.properties=p),e_(p)}),ug(),p0(),Ac(19,`po-radio-group`,16),RE(`ngModelChange`,function(p){return Jv(s),DN(o.size,p)||(o.size=p),e_(p)}),ug(),p0(),Ac(20,`div`,2)(21,`po-button`,17),pt(`p-click`,function(){return Jv(s),Zx(7).reset(),e_(o.restore())}),ug()()()}l&2&&(TE(`ngModel`,o.input),cE(`p-helper`,o.helperText)(`p-clean`,o.properties?.includes(`clean`))(`p-disabled`,o.properties?.includes(`disabled`))(`p-error-pattern`,o.errorPattern)(`p-help`,o.help)(`p-icon`,o.icon)(`p-label`,o.label)(`p-loading`,o.properties?.includes(`loading`))(`p-mask`,o.mask)(`p-mask-format-model`,o.properties?.includes(`maskFormatModel`))(`p-maxlength`,o.maxlength)(`p-minlength`,o.minlength)(`p-no-autocomplete`,o.properties?.includes(`noAutocomplete`))(`p-optional`,o.properties?.includes(`optional`))(`p-pattern`,o.pattern)(`p-placeholder`,o.placeholder)(`p-required`,o.properties?.includes(`required`))(`p-required-field-error-message`,o.properties?.includes(`requiredFieldErrorMessage`))(`p-readonly`,o.properties?.includes(`readonly`))(`p-upper-case`,o.properties?.includes(`uppercase`))(`p-show-required`,o.properties?.includes(`showRequired`))(`p-mask-no-length-validation`,o.properties?.includes(`maskNoLengthValidation`))(`p-size`,o.size)(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),m0(),Hp(3),cE(`p-value`,o.input),Hp(),cE(`p-value`,o.event),Hp(4),TE(`ngModel`,o.label),m0(),Hp(),TE(`ngModel`,o.help),m0(),Hp(),TE(`ngModel`,o.helperText),m0(),Hp(),TE(`ngModel`,o.placeholder),m0(),Hp(),TE(`ngModel`,o.errorPattern),m0(),Hp(),TE(`ngModel`,o.mask),m0(),Hp(),TE(`ngModel`,o.pattern),m0(),Hp(),TE(`ngModel`,o.minlength),m0(),Hp(),TE(`ngModel`,o.maxlength),m0(),Hp(),TE(`ngModel`,o.icon),cE(`p-options`,o.iconOptions),m0(),Hp(),TE(`ngModel`,o.properties),cE(`p-options`,o.propertiesOptions),m0(),Hp(),TE(`ngModel`,o.size),cE(`p-options`,o.sizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,ob,t4,_4,Jne,Cte,ioe,roe],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a});var Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-input-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Input Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-input-labs/sample-po-input-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-input
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-input-labs/sample-po-input-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-input-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ae,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,ke],encapsulation:2,changeDetection:1})}return a})();var Re=[`reactiveFormData`];var Pe=(()=>{class a{fb=f(S9);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:`Close`};constructor(){this.createReactiveForm()}createReactiveForm(){this.reactiveForm=this.fb.group({name:[``,hm.compose([hm.required,hm.minLength(5),hm.maxLength(30)])],address:[``,hm.compose([hm.required,hm.minLength(5),hm.maxLength(50)])],number:[``,hm.compose([hm.required,hm.min(1),hm.max(99999)])],email:[``,hm.required],website:[``,hm.required]})}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-input-reactive-form`]],viewQuery:function(l,o){if(l&1&&Xc(Re,7),l&2){let s;fo(s=ho())&&(o.reactiveFormModal=s.first)}},standalone:!1,decls:23,vars:8,consts:[[`reactiveFormData`,``],[3,`formGroup`],[1,`po-row`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-md-12`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-9`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-md-12`,3,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`Number`,1,`po-md-6`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,3,`p-value`],[`p-label`,`Website`,1,`po-md-6`,3,`p-value`]],template:function(l,o){l&1&&(Ac(0,`form`,1)(1,`div`,2),Kc(2,`po-input`,3),p0(),ug(),Ac(3,`div`,2),Kc(4,`po-input`,4),p0(),Kc(5,`po-number`,5),p0(),ug(),Ac(6,`div`,2),Kc(7,`po-email`,6),p0(),Kc(8,`po-url`,7),p0(),ug(),Ac(9,`div`,2)(10,`po-button`,8),pt(`p-click`,function(){return o.saveForm()}),ug()()(),Ac(11,`po-modal`,9,0)(13,`div`,2),Kc(14,`po-info`,10),ug(),Kc(15,`po-divider`),Ac(16,`div`,2),Kc(17,`po-info`,11)(18,`po-info`,12),ug(),Kc(19,`po-divider`),Ac(20,`div`,2),Kc(21,`po-info`,13)(22,`po-info`,14),ug()()),l&2&&(cE(`formGroup`,o.reactiveForm),Hp(2),m0(),Hp(2),m0(),Hp(),m0(),Hp(2),m0(),Hp(),m0(),Hp(2),cE(`p-disabled`,!o.reactiveForm.valid),Hp(),cE(`p-primary-action`,o.modalPrimaryAction),Hp(3),cE(`p-value`,o.reactiveForm.controls.name.value),Hp(3),cE(`p-value`,o.reactiveForm.controls.address.value),Hp(),cE(`p-value`,o.reactiveForm.controls.number.value),Hp(3),cE(`p-value`,o.reactiveForm.controls.email.value),Hp(),cE(`p-value`,o.reactiveForm.controls.website.value))},dependencies:[b9,D9,C9,KP,qP,ni,ob,V3,_4,Jne,v4,roe,wa],encapsulation:2,changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-input-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Input - Reactive Form`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-input-reactive-form/sample-po-input-reactive-form.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form [formGroup]="reactiveForm">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-input-reactive-form`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Oe,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,Pe],encapsulation:2,changeDetection:1})}return a})();var Z=`999.999.999-99`;var He=`99.999.999/9999-99`;function q(a){return(a||``).replace(/\D/g,``)}function z(a){return a>11?He:Z}var _e=(()=>{class a{cd;document=``;mask=Z;formMask=Z;form=new Co({document:new ua(``)});constructor(r){this.cd=r}handleKeydown(r){this.updateMask(this.predictMaskFromKeydown(r,this.mask))}handlePaste(r){this.updateMask(this.predictMaskFromPaste(r))}handleChangeModel(r){this.mask=z(q(r).length)}handleFormKeydown(r){this.updateFormMask(this.predictMaskFromKeydown(r,this.formMask))}handleFormPaste(r){this.updateFormMask(this.predictMaskFromPaste(r))}handleFormChangeModel(r){this.formMask=z(q(r).length)}predictMaskFromKeydown(r,l){if(r.ctrlKey||r.metaKey||r.altKey)return l;let o=r.target,s=o.value||``,d=o.selectionStart??s.length,p=o.selectionEnd??d,L=q(s).length-q(s.slice(d,p)).length;if(/^[0-9]$/.test(r.key))L++;else if(r.key===`Backspace`&&d===p&&d>0)L--;else if(r.key===`Delete`&&d===p&&d<s.length)L--;else return l;return z(L)}predictMaskFromPaste(r){let l=r.target,o=l.value||``,s=l.selectionStart??o.length,d=l.selectionEnd??s,p=q(r.clipboardData?.getData(`text`)||``);return z(q(o).length-q(o.slice(s,d)).length+p.length)}updateMask(r){r!==this.mask&&(this.mask=r,this.cd.detectChanges())}updateFormMask(r){r!==this.formMask&&(this.formMask=r,this.cd.detectChanges())}static ɵfac=function(l){return new(l||a)(E(Ue$1))};static ɵcmp=Hn({type:a,selectors:[[`sample-po-input-mask-dynamic`]],standalone:!1,decls:7,vars:4,consts:[[1,`po-row`],[`p-title`,`CPF / CNPJ com ngModel`,1,`po-lg-6`,`po-md-12`],[`name`,`document`,`p-clean`,``,`p-label`,`CPF / CNPJ`,`p-placeholder`,`Informe o CPF ou o CNPJ`,1,`po-md-12`,3,`ngModelChange`,`p-keydown`,`paste`,`p-change-model`,`p-mask`,`ngModel`],[`p-title`,`CPF / CNPJ com Reactive Forms`,1,`po-lg-6`,`po-md-12`],[1,`po-row`,3,`formGroup`],[`formControlName`,`document`,`p-clean`,``,`p-label`,`CPF / CNPJ`,`p-placeholder`,`Informe o CPF ou o CNPJ`,1,`po-md-12`,3,`p-keydown`,`paste`,`p-change-model`,`p-mask`]],template:function(l,o){l&1&&(Ac(0,`div`,0)(1,`po-container`,1)(2,`div`,0)(3,`po-input`,2),RE(`ngModelChange`,function(d){return DN(o.document,d)||(o.document=d),d}),pt(`p-keydown`,function(d){return o.handleKeydown(d)})(`paste`,function(d){return o.handlePaste(d)})(`p-change-model`,function(d){return o.handleChangeModel(d)}),ug(),p0(),ug()(),Ac(4,`po-container`,3)(5,`div`,4)(6,`po-input`,5),pt(`p-keydown`,function(d){return o.handleFormKeydown(d)})(`paste`,function(d){return o.handleFormPaste(d)})(`p-change-model`,function(d){return o.handleFormChangeModel(d)}),ug(),p0(),ug()()()),l&2&&(Hp(3),cE(`p-mask`,o.mask),TE(`ngModel`,o.document),m0(),Hp(2),cE(`formGroup`,o.form),Hp(),cE(`p-mask`,o.formMask),m0())},dependencies:[D9,C9,BP,KP,qP,Ic,_4],encapsulation:2})}return a})();var je=a=>({"docs-sample-code-tabs":a});var Fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-input-mask-dynamic-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Input - Dynamic Mask (CPF/CNPJ)`),ug(),Ac(4,`a`,2),pt(`click`,function(){return o.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-input-mask-dynamic/sample-po-input-mask-dynamic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-row">
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-input-mask-dynamic/sample-po-input-mask-dynamic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { ChangeDetectorRef, Component } from '@angular/core';
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
`),ug(),Ac(21,`label`,6),vN(22,`sample-po-input-mask-dynamic/document-mask.ts`),ug(),Ac(23,`pre`,9),vN(24,`export const MASK_CPF = '999.999.999-99';
export const MASK_CNPJ = '99.999.999/9999-99';

const CPF_LENGTH = 11;

export function onlyDigits(value: string): string {
  return (value || '').replace(/\\D/g, '');
}

export function resolveMask(digitCount: number): string {
  return digitCount > CPF_LENGTH ? MASK_CNPJ : MASK_CPF;
}
`),ug()()()()(),Ac(25,`div`,10),Kc(26,`sample-po-input-mask-dynamic`),ug(),Kc(27,`hr`)),l&2&&(Hp(5),aN(`po-icon `+o.sampleCodeButtonIcon),Hp(),mg(` `,o.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,je,o.hideSampleCodeTabs)))},dependencies:[zO,_a,tae,aae,_e],encapsulation:2,changeDetection:1})}return a})();var De=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-input-doc`]],standalone:!1,decls:1352,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(l,o){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoInputComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ug(),Ac(24,`p`),vN(25,`Importante:`),ug(),Ac(26,`ul`)(27,`li`),vN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ug()(),Ac(29,`h4`),vN(30,`Tokens customizáveis`),ug(),Ac(31,`p`),vN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Kc(33,`br`),vN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ac(35,`code`),vN(36,`.po-input`),ug()(),Ac(37,`blockquote`)(38,`p`),vN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Ac(40,`a`,6),vN(41,`Grid System`),ug(),vN(42,`.`),ug()(),Ac(43,`blockquote`)(44,`p`),vN(45,`Para maiores informações, acesse o guia `),Ac(46,`a`,7),vN(47,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(48,`.`),ug()(),Ac(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),vN(53,`Propriedade`),ug(),Ac(54,`th`),vN(55,`Descrição`),ug(),Ac(56,`th`),vN(57,`Valor Padrão`),ug()()(),Ac(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),vN(62,`Default Values`),ug()(),Kc(63,`td`)(64,`td`),ug(),Ac(65,`tr`)(66,`td`)(67,`code`),vN(68,`--font-family`),ug()(),Ac(69,`td`),vN(70,`Família tipográfica usada`),ug(),Ac(71,`td`)(72,`code`),vN(73,`var(--font-family-theme)`),ug()()(),Ac(74,`tr`)(75,`td`)(76,`code`),vN(77,`--font-size`),ug()(),Ac(78,`td`),vN(79,`Tamanho da fonte`),ug(),Ac(80,`td`)(81,`code`),vN(82,`var(--font-size-default)`),ug()()(),Ac(83,`tr`)(84,`td`)(85,`code`),vN(86,`--text-color-placeholder`),ug()(),Ac(87,`td`),vN(88,`Cor do texto placeholder`),ug(),Ac(89,`td`)(90,`code`),vN(91,`var(--color-neutral-light-30)`),ug()()(),Ac(92,`tr`)(93,`td`)(94,`code`),vN(95,`--color`),ug()(),Ac(96,`td`),vN(97,`Cor pincipal do input`),ug(),Ac(98,`td`)(99,`code`),vN(100,`var(--color-neutral-dark-70)`),ug()()(),Ac(101,`tr`)(102,`td`)(103,`code`),vN(104,`--background`),ug()(),Ac(105,`td`),vN(106,`Cor de background`),ug(),Ac(107,`td`)(108,`code`),vN(109,`var(--color-neutral-light-05)`),ug()()(),Ac(110,`tr`)(111,`td`)(112,`code`),vN(113,`--padding`),ug()(),Ac(114,`td`),vN(115,`Preenchimento`),ug(),Ac(116,`td`)(117,`code`),vN(118,`0 0.5rem`),ug()()(),Ac(119,`tr`)(120,`td`)(121,`code`),vN(122,`--text-color`),ug()(),Ac(123,`td`),vN(124,`Cor do texto`),ug(),Ac(125,`td`)(126,`code`),vN(127,`var(--color-neutral-dark-90)`),ug()()(),Ac(128,`tr`)(129,`td`)(130,`code`),vN(131,`--field-container-title-justify`),ug()(),Ac(132,`td`),vN(133,`Alinhamento horizontal do título (`),Ac(134,`code`),vN(135,`justify-content`),ug(),vN(136,`)`),ug(),Ac(137,`td`)(138,`code`),vN(139,`space-between`),ug()()(),Ac(140,`tr`)(141,`td`)(142,`code`),vN(143,`--field-container-title-flex`),ug()(),Ac(144,`td`),vN(145,`Flex do título (`),Ac(146,`code`),vN(147,`flex`),ug(),vN(148,`)`),ug(),Ac(149,`td`)(150,`code`),vN(151,`1 auto`),ug()()(),Ac(152,`tr`)(153,`td`)(154,`strong`),vN(155,`Hover`),ug()(),Kc(156,`td`)(157,`td`),ug(),Ac(158,`tr`)(159,`td`)(160,`code`),vN(161,`--color-hover`),ug()(),Ac(162,`td`),vN(163,`Cor principal no estado hover`),ug(),Ac(164,`td`)(165,`code`),vN(166,`var(--color-brand-01-dark)`),ug()()(),Ac(167,`tr`)(168,`td`)(169,`code`),vN(170,`--background-hover`),ug()(),Ac(171,`td`),vN(172,`Cor de background no estado hover`),ug(),Ac(173,`td`)(174,`code`),vN(175,`var(--color-brand-01-lightest)`),ug()()(),Ac(176,`tr`)(177,`td`)(178,`strong`),vN(179,`Focused`),ug()(),Kc(180,`td`)(181,`td`),ug(),Ac(182,`tr`)(183,`td`)(184,`code`),vN(185,`--color-focused`),ug()(),Ac(186,`td`),vN(187,`Cor principal no estado de focus`),ug(),Ac(188,`td`)(189,`code`),vN(190,`var(--color-action-default)`),ug()()(),Ac(191,`tr`)(192,`td`)(193,`code`),vN(194,`--outline-color-focused`),ug()(),Ac(195,`td`),vN(196,`Cor do outline do estado de focus`),ug(),Ac(197,`td`)(198,`code`),vN(199,`var(--color-action-focus)`),ug()()(),Ac(200,`tr`)(201,`td`)(202,`strong`),vN(203,`Disabled`),ug()(),Kc(204,`td`)(205,`td`),ug(),Ac(206,`tr`)(207,`td`)(208,`code`),vN(209,`--color-disabled`),ug()(),Ac(210,`td`),vN(211,`Cor principal no estado disabled`),ug(),Ac(212,`td`)(213,`code`),vN(214,`var(--color-neutral-light-30)`),ug()()(),Ac(215,`tr`)(216,`td`)(217,`code`),vN(218,`--background-disabled`),ug()(),Ac(219,`td`),vN(220,`Cor de background no estado disabled`),ug(),Ac(221,`td`)(222,`code`),vN(223,`var(--color-neutral-light-20)`),ug()()(),Ac(224,`tr`)(225,`td`)(226,`code`),vN(227,`--text-color-disabled`),ug()(),Ac(228,`td`),vN(229,`Cor do texto no estado disabled`),ug(),Ac(230,`td`)(231,`code`),vN(232,`var(--color-neutral-dark-70)`),ug()()()()(),Kc(233,`br`),ug(),Ac(234,`div`,8)(235,`h4`,9),vN(236,`Seletor`),ug(),Ac(237,`pre`,10),vN(238,`<po-input
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
`),ug()(),Ac(239,`h4`,11),vN(240,`Propriedades`),ug(),Ac(241,`table`,12)(242,`tr`,13)(243,`th`,14),vN(244,`Nome`),ug(),Ac(245,`th`,14),vN(246,`Tipo`),ug(),Ac(247,`th`,14),vN(248,`Padrão`),ug(),Ac(249,`th`,14),vN(250,`Descrição`),ug()(),Ac(251,`tr`,15)(252,`td`,16)(253,`div`,17)(254,`span`,18),vN(255,` (p-additional-help)`),Kc(256,`br`),ug()(),Ac(257,`div`,19),vN(258,`Deprecated`),ug()(),Ac(259,`td`,20)(260,`code`,21),vN(261,`EventEmitter`),ug()(),Ac(262,`td`,22),vN(263,`-`),ug(),Ac(264,`td`,23)(265,`em`)(266,`strong`),vN(267,`(opcional)`),ug()(),Ac(268,`p`),vN(269,`Evento disparado ao clicar no ícone de ajuda adicional.`),ug(),Ac(270,`blockquote`)(271,`p`),vN(272,`Essa propriedade está `),Ac(273,`strong`),vN(274,`depreciada`),ug(),vN(275,` e será removida na versão `),Ac(276,`code`),vN(277,`23.x.x`),ug(),vN(278,`. Recomendamos utilizar a propriedade `),Ac(279,`code`),vN(280,`p-helper`),ug(),vN(281,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(282,`tr`,15)(283,`td`,16)(284,`div`,24)(285,`span`,25),vN(286,` p-additional-help-tooltip`),Kc(287,`br`),ug()(),Ac(288,`div`,19),vN(289,`Deprecated`),ug()(),Ac(290,`td`,20)(291,`code`,26),vN(292,`string`),ug()(),Ac(293,`td`,22),vN(294,`-`),ug(),Ac(295,`td`,23)(296,`em`)(297,`strong`),vN(298,`(opcional)`),ug()(),Ac(299,`p`),vN(300,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Ac(301,`code`),vN(302,`po-helper`),ug(),vN(303,`.
`),Ac(304,`strong`),vN(305,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ug()(),Ac(306,`blockquote`)(307,`p`),vN(308,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ug()(),Ac(309,`blockquote`)(310,`p`),vN(311,`Essa propriedade está `),Ac(312,`strong`),vN(313,`depreciada`),ug(),vN(314,` e será removida na versão `),Ac(315,`code`),vN(316,`23.x.x`),ug(),vN(317,`. Recomendamos utilizar a propriedade `),Ac(318,`code`),vN(319,`p-helper`),ug(),vN(320,` que oferece mais recursos e flexibilidade.`),ug()()()(),Ac(321,`tr`,15)(322,`td`,16)(323,`div`,24)(324,`span`,25),vN(325,` p-append-in-body`),Kc(326,`br`),ug()()(),Ac(327,`td`,20)(328,`code`,27),vN(329,`boolean`),ug()(),Ac(330,`td`,22)(331,`p`)(332,`code`),vN(333,`false`),ug()()(),Ac(334,`td`,23)(335,`em`)(336,`strong`),vN(337,`(opcional)`),ug()(),Ac(338,`p`),vN(339,`Define que o popover (`),Ac(340,`code`),vN(341,`p-helper`),ug(),vN(342,` e/ou `),Ac(343,`code`),vN(344,`p-error-limit`),ug(),vN(345,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ug(),Ac(346,`blockquote`)(347,`p`),vN(348,`Quando utilizado com `),Ac(349,`code`),vN(350,`p-helper`),ug(),vN(351,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ug()()()(),Ac(352,`tr`,15)(353,`td`,16)(354,`div`,24)(355,`span`,25),vN(356,` p-auto-focus`),Kc(357,`br`),ug()()(),Ac(358,`td`,20)(359,`code`,27),vN(360,`boolean`),ug()(),Ac(361,`td`,22)(362,`p`)(363,`code`),vN(364,`false`),ug()()(),Ac(365,`td`,23)(366,`em`)(367,`strong`),vN(368,`(opcional)`),ug()(),Ac(369,`p`),vN(370,`Aplica foco no elemento ao ser iniciado.`),ug(),Ac(371,`blockquote`)(372,`p`),vN(373,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ug()()()(),Ac(374,`tr`,15)(375,`td`,16)(376,`div`,17)(377,`span`,18),vN(378,` (p-blur)`),Kc(379,`br`),ug()()(),Ac(380,`td`,20)(381,`code`,21),vN(382,`EventEmitter`),ug()(),Ac(383,`td`,22),vN(384,`-`),ug(),Ac(385,`td`,23)(386,`em`)(387,`strong`),vN(388,`(opcional)`),ug()(),Ac(389,`p`),vN(390,`Evento disparado ao sair do campo.`),ug()()(),Ac(391,`tr`,15)(392,`td`,16)(393,`div`,17)(394,`span`,18),vN(395,` (p-change)`),Kc(396,`br`),ug()()(),Ac(397,`td`,20)(398,`code`,21),vN(399,`EventEmitter`),ug()(),Ac(400,`td`,22),vN(401,`-`),ug(),Ac(402,`td`,23)(403,`em`)(404,`strong`),vN(405,`(opcional)`),ug()(),Ac(406,`p`),vN(407,`Evento disparado ao alterar valor e deixar o campo.`),ug()()(),Ac(408,`tr`,15)(409,`td`,16)(410,`div`,17)(411,`span`,18),vN(412,` (p-change-model)`),Kc(413,`br`),ug()()(),Ac(414,`td`,20)(415,`code`,21),vN(416,`EventEmitter`),ug()(),Ac(417,`td`,22),vN(418,`-`),ug(),Ac(419,`td`,23)(420,`em`)(421,`strong`),vN(422,`(opcional)`),ug()(),Ac(423,`p`),vN(424,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Ac(425,`code`),vN(426,`setValue`),ug(),vN(427,`, `),Ac(428,`code`),vN(429,`patchValue`),ug(),vN(430,`, carregamento assíncrono).`),ug(),Ac(431,`p`),vN(432,`Diferentemente do `),Ac(433,`code`),vN(434,`p-change`),ug(),vN(435,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Ac(436,`code`),vN(437,`p-change-model`),ug(),vN(438,` cobre todos os cenários de alteração de valor.`),ug(),Ac(439,`p`),vN(440,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ug()()(),Ac(441,`tr`,15)(442,`td`,16)(443,`div`,24)(444,`span`,25),vN(445,`p-clean`),Kc(446,`br`),ug()()(),Ac(447,`td`,20)(448,`code`,27),vN(449,`boolean`),ug()(),Ac(450,`td`,22),vN(451,`-`),ug(),Ac(452,`td`,23)(453,`em`)(454,`strong`),vN(455,`(opcional)`),ug()(),Ac(456,`p`),vN(457,`Se verdadeiro, o campo receberá um botão para ser limpo.`),ug()()(),Ac(458,`tr`,15)(459,`td`,16)(460,`div`,24)(461,`span`,25),vN(462,` p-compact-label`),Kc(463,`br`),ug()()(),Ac(464,`td`,20)(465,`code`,27),vN(466,`boolean`),ug()(),Ac(467,`td`,22)(468,`p`)(469,`code`),vN(470,`false`),ug()()(),Ac(471,`td`,23)(472,`em`)(473,`strong`),vN(474,`(opcional)`),ug()(),Ac(475,`p`),vN(476,`Define se o título do campo será exibido de forma compacta.`),ug(),Ac(477,`p`),vN(478,`Quando habilitado (`),Ac(479,`code`),vN(480,`true`),ug(),vN(481,`), o modo compacto afeta o conjunto composto por:`),ug(),Ac(482,`ul`)(483,`li`)(484,`code`),vN(485,`po-label`),ug()(),Ac(486,`li`)(487,`code`),vN(488,`p-requirement (showRequired)`),ug()(),Ac(489,`li`)(490,`code`),vN(491,`po-helper`),ug()()(),Ac(492,`p`),vN(493,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ug(),Ac(494,`p`),vN(495,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ug(),Ac(496,`ul`)(497,`li`)(498,`code`),vN(499,`--field-container-title-justify`),ug()(),Ac(500,`li`)(501,`code`),vN(502,`--field-container-title-flex`),ug()()(),Ac(503,`p`),vN(504,`Exemplo:`),ug(),Ac(505,`pre`)(506,`code`),vN(507,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ug()(),Ac(508,`p`),vN(509,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ug()()(),Ac(510,`tr`,15)(511,`td`,16)(512,`div`,24)(513,`span`,25),vN(514,`p-disabled`),Kc(515,`br`),ug()()(),Ac(516,`td`,20)(517,`code`,27),vN(518,`boolean`),ug()(),Ac(519,`td`,22)(520,`p`)(521,`code`),vN(522,`false`),ug()()(),Ac(523,`td`,23)(524,`em`)(525,`strong`),vN(526,`(opcional)`),ug()(),Ac(527,`p`),vN(528,`Se verdadeiro, desabilita o campo.`),ug()()(),Ac(529,`tr`,15)(530,`td`,16)(531,`div`,24)(532,`span`,25),vN(533,` p-emit-all-changes`),Kc(534,`br`),ug()()(),Ac(535,`td`,20)(536,`code`,27),vN(537,`boolean`),ug()(),Ac(538,`td`,22)(539,`p`)(540,`code`),vN(541,`false`),ug()()(),Ac(542,`td`,23)(543,`em`)(544,`strong`),vN(545,`(opcional)`),ug()(),Ac(546,`p`),vN(547,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),ug()()(),Ac(548,`tr`,15)(549,`td`,16)(550,`div`,17)(551,`span`,18),vN(552,` (p-enter)`),Kc(553,`br`),ug()()(),Ac(554,`td`,20)(555,`code`,21),vN(556,`EventEmitter`),ug()(),Ac(557,`td`,22),vN(558,`-`),ug(),Ac(559,`td`,23)(560,`em`)(561,`strong`),vN(562,`(opcional)`),ug()(),Ac(563,`p`),vN(564,`Evento disparado ao entrar do campo.`),ug()()(),Ac(565,`tr`,15)(566,`td`,16)(567,`div`,24)(568,`span`,25),vN(569,` p-error-async-properties`),Kc(570,`br`),ug()()(),Ac(571,`td`,20)(572,`code`,28),vN(573,`ErrorAsyncProperties`),ug()(),Ac(574,`td`,22),vN(575,`-`),ug(),Ac(576,`td`,23)(577,`em`)(578,`strong`),vN(579,`(opcional)`),ug()(),Ac(580,`p`),vN(581,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Ac(582,`code`),vN(583,`Reactive Forms`),ug(),vN(584,`. Em formulários reativos, pode-se utilizar o próprio `),Ac(585,`code`),vN(586,`asyncValidators`),ug(),vN(587,`.`),ug()()(),Ac(588,`tr`,15)(589,`td`,16)(590,`div`,24)(591,`span`,25),vN(592,` p-error-limit`),Kc(593,`br`),ug()()(),Ac(594,`td`,20)(595,`code`,27),vN(596,`boolean`),ug()(),Ac(597,`td`,22)(598,`p`)(599,`code`),vN(600,`false`),ug()()(),Ac(601,`td`,23)(602,`em`)(603,`strong`),vN(604,`(opcional)`),ug()(),Ac(605,`p`),vN(606,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ug(),Ac(607,`blockquote`)(608,`p`),vN(609,`Caso essa propriedade seja definida como `),Ac(610,`code`),vN(611,`true`),ug(),vN(612,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ug()()()(),Ac(613,`tr`,15)(614,`td`,16)(615,`div`,24)(616,`span`,25),vN(617,` p-error-pattern`),Kc(618,`br`),ug()()(),Ac(619,`td`,20)(620,`code`,26),vN(621,`string`),ug()(),Ac(622,`td`,22),vN(623,`-`),ug(),Ac(624,`td`,23)(625,`em`)(626,`strong`),vN(627,`(opcional)`),ug()(),Ac(628,`p`),vN(629,`Mensagem que será apresentada quando o `),Ac(630,`code`),vN(631,`pattern`),ug(),vN(632,` ou a máscara não for satisfeita.`),ug(),Ac(633,`blockquote`)(634,`p`),vN(635,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Ac(636,`code`),vN(637,`p-required-field-error-message`),ug(),vN(638,` em conjunto.`),ug()()()(),Ac(639,`tr`,15)(640,`td`,16)(641,`div`,24)(642,`span`,25),vN(643,` p-help`),Kc(644,`br`),ug()()(),Ac(645,`td`,20)(646,`code`,26),vN(647,`string`),ug()(),Ac(648,`td`,22),vN(649,`-`),ug(),Ac(650,`td`,23)(651,`em`)(652,`strong`),vN(653,`(opcional)`),ug()(),Ac(654,`p`),vN(655,`Texto de apoio do campo.`),ug()()(),Ac(656,`tr`,15)(657,`td`,16)(658,`div`,24)(659,`span`,25),vN(660,` p-icon`),Kc(661,`br`),ug()()(),Ac(662,`td`,20)(663,`code`,26),vN(664,`string `),ug(),Ac(665,`code`,29),vN(666,` TemplateRef<void>`),ug()(),Ac(667,`td`,22),vN(668,`-`),ug(),Ac(669,`td`,23)(670,`em`)(671,`strong`),vN(672,`(opcional)`),ug()(),Ac(673,`p`),vN(674,`Define o ícone que será exibido no início do campo.`),ug(),Ac(675,`p`),vN(676,`É possível usar qualquer um dos ícones da `),Ac(677,`a`,30),vN(678,`Biblioteca de ícones`),ug(),vN(679,`. conforme exemplo abaixo:`),ug(),Ac(680,`pre`)(681,`code`),vN(682,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),ug()(),Ac(683,`p`),vN(684,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(685,`em`),vN(686,`Font Awesome`),ug(),vN(687,`, da seguinte forma:`),ug(),Ac(688,`pre`)(689,`code`),vN(690,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),ug()(),Ac(691,`p`),vN(692,`Outra opção seria a customização do ícone através do `),Ac(693,`code`),vN(694,`TemplateRef`),ug(),vN(695,`, conforme exemplo abaixo:`),ug(),Ac(696,`pre`)(697,`code`),vN(698,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ug()(),Ac(699,`blockquote`)(700,`p`),vN(701,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ac(702,`code`),vN(703,`font-size: inherit`),ug(),vN(704,` caso o ícone utilizado não aplique-o.`),ug()()()(),Ac(705,`tr`,15)(706,`td`,16)(707,`div`,17)(708,`span`,18),vN(709,` (p-keydown)`),Kc(710,`br`),ug()()(),Ac(711,`td`,20)(712,`code`,21),vN(713,`EventEmitter`),ug()(),Ac(714,`td`,22),vN(715,`-`),ug(),Ac(716,`td`,23)(717,`em`)(718,`strong`),vN(719,`(opcional)`),ug()(),Ac(720,`p`),vN(721,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(722,`code`),vN(723,`KeyboardEvent`),ug(),vN(724,` com informações sobre a tecla.`),ug()()(),Ac(725,`tr`,15)(726,`td`,16)(727,`div`,24)(728,`span`,25),vN(729,` p-label`),Kc(730,`br`),ug()()(),Ac(731,`td`,20)(732,`code`,26),vN(733,`string`),ug()(),Ac(734,`td`,22),vN(735,`-`),ug(),Ac(736,`td`,23)(737,`em`)(738,`strong`),vN(739,`(opcional)`),ug()(),Ac(740,`p`),vN(741,`Rótulo do campo.`),ug()()(),Ac(742,`tr`,15)(743,`td`,16)(744,`div`,24)(745,`span`,25),vN(746,` p-label-text-wrap`),Kc(747,`br`),ug()()(),Ac(748,`td`,20)(749,`code`,27),vN(750,`boolean`),ug()(),Ac(751,`td`,22)(752,`p`)(753,`code`),vN(754,`false`),ug()()(),Ac(755,`td`,23)(756,`em`)(757,`strong`),vN(758,`(opcional)`),ug()(),Ac(759,`p`),vN(760,`Habilita a quebra automática do texto da propriedade `),Ac(761,`code`),vN(762,`p-label`),ug(),vN(763,`. Quando `),Ac(764,`code`),vN(765,`p-label-text-wrap`),ug(),vN(766,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(767,`tr`,15)(768,`td`,16)(769,`div`,24)(770,`span`,25),vN(771,` p-loading`),Kc(772,`br`),ug()()(),Ac(773,`td`,20)(774,`code`,27),vN(775,`boolean`),ug()(),Ac(776,`td`,22)(777,`p`)(778,`code`),vN(779,`false`),ug()()(),Ac(780,`td`,23)(781,`em`)(782,`strong`),vN(783,`(opcional)`),ug()(),Ac(784,`p`),vN(785,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug()()(),Ac(786,`tr`,15)(787,`td`,16)(788,`div`,24)(789,`span`,25),vN(790,`p-mask`),Kc(791,`br`),ug()()(),Ac(792,`td`,20)(793,`code`,26),vN(794,`string`),ug()(),Ac(795,`td`,22),vN(796,`-`),ug(),Ac(797,`td`,23)(798,`em`)(799,`strong`),vN(800,`(opcional)`),ug()(),Ac(801,`p`),vN(802,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),ug()()(),Ac(803,`tr`,15)(804,`td`,16)(805,`div`,24)(806,`span`,25),vN(807,`p-mask-format-model`),Kc(808,`br`),ug()()(),Ac(809,`td`,20)(810,`code`,27),vN(811,`boolean`),ug()(),Ac(812,`td`,22)(813,`p`)(814,`code`),vN(815,`false`),ug()()(),Ac(816,`td`,23)(817,`em`)(818,`strong`),vN(819,`(opcional)`),ug()(),Ac(820,`p`),vN(821,`Indica se o `),Ac(822,`code`),vN(823,`model`),ug(),vN(824,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),ug()()(),Ac(825,`tr`,15)(826,`td`,16)(827,`div`,24)(828,`span`,25),vN(829,` p-mask-no-length-validation`),Kc(830,`br`),ug()()(),Ac(831,`td`,20)(832,`code`,27),vN(833,`boolean`),ug()(),Ac(834,`td`,22)(835,`p`)(836,`code`),vN(837,`false`),ug()()(),Ac(838,`td`,23)(839,`p`),vN(840,`Controla como o componente aplica as validações de comprimento mínimo (`),Ac(841,`code`),vN(842,`minLength`),ug(),vN(843,`) e máximo (`),Ac(844,`code`),vN(845,`maxLength`),ug(),vN(846,`) quando há uma máscara (`),Ac(847,`code`),vN(848,`p-mask`),ug(),vN(849,`) definida.`),ug(),Ac(850,`ul`)(851,`li`),vN(852,`Quando `),Ac(853,`code`),vN(854,`true`),ug(),vN(855,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ug(),Ac(856,`li`),vN(857,`Quando `),Ac(858,`code`),vN(859,`false`),ug(),vN(860,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ug()(),Ac(861,`blockquote`)(862,`p`),vN(863,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ac(864,`code`),vN(865,`p-mask-format-model`),ug(),vN(866,`.`),ug()(),Ac(867,`p`),vN(868,`Exemplo:`),ug(),Ac(869,`pre`)(870,`code`),vN(871,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ug()(),Ac(872,`ul`)(873,`li`),vN(874,`Entrada: `),Ac(875,`code`),vN(876,`123-456`),ug(),vN(877,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Ac(878,`code`),vN(879,`-`),ug(),vN(880,`.`),ug()()()(),Ac(881,`tr`,15)(882,`td`,16)(883,`div`,24)(884,`span`,25),vN(885,` p-maxlength`),Kc(886,`br`),ug()()(),Ac(887,`td`,20)(888,`code`,31),vN(889,`number`),ug()(),Ac(890,`td`,22),vN(891,`-`),ug(),Ac(892,`td`,23)(893,`em`)(894,`strong`),vN(895,`(opcional)`),ug()(),Ac(896,`p`),vN(897,`Indica a quantidade máxima de caracteres que o campo aceita.`),ug()()(),Ac(898,`tr`,15)(899,`td`,16)(900,`div`,24)(901,`span`,25),vN(902,` p-minlength`),Kc(903,`br`),ug()()(),Ac(904,`td`,20)(905,`code`,31),vN(906,`number`),ug()(),Ac(907,`td`,22),vN(908,`-`),ug(),Ac(909,`td`,23)(910,`em`)(911,`strong`),vN(912,`(opcional)`),ug()(),Ac(913,`p`),vN(914,`Indica a quantidade mínima de caracteres que o campo aceita.`),ug()()(),Ac(915,`tr`,15)(916,`td`,16)(917,`div`,24)(918,`span`,25),vN(919,` name`),Kc(920,`br`),ug()()(),Ac(921,`td`,20)(922,`code`,26),vN(923,`string`),ug()(),Ac(924,`td`,22),vN(925,`-`),ug(),Ac(926,`td`,23)(927,`p`),vN(928,`Nome e identificador do campo.`),ug()()(),Ac(929,`tr`,15)(930,`td`,16)(931,`div`,24)(932,`span`,25),vN(933,` p-no-autocomplete`),Kc(934,`br`),ug()()(),Ac(935,`td`,20)(936,`code`,27),vN(937,`boolean`),ug()(),Ac(938,`td`,22)(939,`p`)(940,`code`),vN(941,`false`),ug()()(),Ac(942,`td`,23)(943,`em`)(944,`strong`),vN(945,`(opcional)`),ug()(),Ac(946,`p`),vN(947,`Define a propriedade nativa `),Ac(948,`code`),vN(949,`autocomplete`),ug(),vN(950,` do campo como `),Ac(951,`code`),vN(952,`off`),ug(),vN(953,`.`),ug(),Ac(954,`blockquote`)(955,`p`),vN(956,`No componente `),Ac(957,`code`),vN(958,`po-password`),ug(),vN(959,` será definido como `),Ac(960,`code`),vN(961,`new-password`),ug(),vN(962,`.`),ug()(),Ac(963,`p`),vN(964,`Nos componentes `),Ac(965,`code`),vN(966,`po-password`),ug(),vN(967,` e `),Ac(968,`code`),vN(969,`po-login`),ug(),vN(970,` o valor padrão será `),Ac(971,`code`),vN(972,`true`),ug(),vN(973,`.`),ug()()(),Ac(974,`tr`,15)(975,`td`,16)(976,`div`,24)(977,`span`,25),vN(978,` p-optional`),Kc(979,`br`),ug()()(),Ac(980,`td`,20)(981,`code`,27),vN(982,`boolean`),ug()(),Ac(983,`td`,22)(984,`p`)(985,`code`),vN(986,`false`),ug()()(),Ac(987,`td`,23)(988,`em`)(989,`strong`),vN(990,`(opcional)`),ug()(),Ac(991,`p`),vN(992,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(993,`blockquote`)(994,`p`),vN(995,`Não será exibida a indicação se:`),ug()(),Ac(996,`ul`)(997,`li`),vN(998,`O campo conter `),Ac(999,`code`),vN(1e3,`p-required`),ug(),vN(1001,`;`),ug(),Ac(1002,`li`),vN(1003,`Não possuir `),Ac(1004,`code`),vN(1005,`p-help`),ug(),vN(1006,` e/ou `),Ac(1007,`code`),vN(1008,`p-label`),ug(),vN(1009,`.`),ug()()()(),Ac(1010,`tr`,15)(1011,`td`,16)(1012,`div`,24)(1013,`span`,25),vN(1014,`p-pattern`),Kc(1015,`br`),ug()()(),Ac(1016,`td`,20)(1017,`code`,26),vN(1018,`string`),ug()(),Ac(1019,`td`,22),vN(1020,`-`),ug(),Ac(1021,`td`,23)(1022,`em`)(1023,`strong`),vN(1024,`(opcional)`),ug()(),Ac(1025,`p`),vN(1026,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Ac(1027,`code`),vN(1028,`(p-mask)`),ug(),vN(1029,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ug()()(),Ac(1030,`tr`,15)(1031,`td`,16)(1032,`div`,24)(1033,`span`,25),vN(1034,` p-placeholder`),Kc(1035,`br`),ug()()(),Ac(1036,`td`,20)(1037,`code`,26),vN(1038,`string`),ug()(),Ac(1039,`td`,22)(1040,`p`),vN(1041,`''`),ug()(),Ac(1042,`td`,23)(1043,`em`)(1044,`strong`),vN(1045,`(opcional)`),ug()(),Ac(1046,`p`),vN(1047,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ug()()(),Ac(1048,`tr`,15)(1049,`td`,16)(1050,`div`,24)(1051,`span`,25),vN(1052,` p-helper`),Kc(1053,`br`),ug()()(),Ac(1054,`td`,20)(1055,`code`,32),vN(1056,`PoHelperOptions `),ug(),Ac(1057,`code`,26),vN(1058,` string`),ug()(),Ac(1059,`td`,22),vN(1060,`-`),ug(),Ac(1061,`td`,23)(1062,`em`)(1063,`strong`),vN(1064,`(opcional)`),ug()(),Ac(1065,`p`),vN(1066,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(1067,`code`),vN(1068,`p-label`),ug(),vN(1069,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(1070,`code`),vN(1071,`p-label`),ug(),vN(1072,`.`),ug(),Ac(1073,`blockquote`)(1074,`p`),vN(1075,`Para mais informações acesse: `),Ac(1076,`a`,33),vN(1077,`https://po-ui.io/documentation/po-helper`),ug(),vN(1078,`.`),ug()(),Ac(1079,`blockquote`)(1080,`p`),vN(1081,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(1082,`code`),vN(1083,`p-additional-help-tooltip`),ug(),vN(1084,` e `),Ac(1085,`code`),vN(1086,`p-additional-help`),ug(),vN(1087,`) será ignorado.`),ug()()()(),Ac(1088,`tr`,15)(1089,`td`,16)(1090,`div`,24)(1091,`span`,25),vN(1092,`p-readonly`),Kc(1093,`br`),ug()()(),Ac(1094,`td`,20)(1095,`code`,27),vN(1096,`boolean`),ug()(),Ac(1097,`td`,22),vN(1098,`-`),ug(),Ac(1099,`td`,23)(1100,`em`)(1101,`strong`),vN(1102,`(opcional)`),ug()(),Ac(1103,`p`),vN(1104,`Indica que o campo será somente leitura.`),ug()()(),Ac(1105,`tr`,15)(1106,`td`,16)(1107,`div`,24)(1108,`span`,25),vN(1109,`p-required`),Kc(1110,`br`),ug()()(),Ac(1111,`td`,20)(1112,`code`,27),vN(1113,`boolean`),ug()(),Ac(1114,`td`,22)(1115,`p`)(1116,`code`),vN(1117,`false`),ug()()(),Ac(1118,`td`,23)(1119,`em`)(1120,`strong`),vN(1121,`(opcional)`),ug()(),Ac(1122,`p`),vN(1123,`Define que o campo será obrigatório.`),ug(),Ac(1124,`blockquote`)(1125,`p`),vN(1126,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ac(1127,`code`),vN(1128,`(p-disabled)`),ug(),vN(1129,`.`),ug()()()(),Ac(1130,`tr`,15)(1131,`td`,16)(1132,`div`,24)(1133,`span`,25),vN(1134,` p-required-field-error-message`),Kc(1135,`br`),ug()()(),Ac(1136,`td`,20)(1137,`code`,27),vN(1138,`boolean`),ug()(),Ac(1139,`td`,22)(1140,`p`)(1141,`code`),vN(1142,`false`),ug()()(),Ac(1143,`td`,23)(1144,`em`)(1145,`strong`),vN(1146,`(opcional)`),ug()(),Ac(1147,`p`),vN(1148,`Exibe a mensagem setada na propriedade `),Ac(1149,`code`),vN(1150,`p-error-pattern`),ug(),vN(1151,` se o campo estiver vazio e for requerido.`),ug(),Ac(1152,`blockquote`)(1153,`p`),vN(1154,`Necessário que a propriedade `),Ac(1155,`code`),vN(1156,`p-required`),ug(),vN(1157,` esteja habilitada.`),ug()()()(),Ac(1158,`tr`,15)(1159,`td`,16)(1160,`div`,24)(1161,`span`,25),vN(1162,` p-show-required`),Kc(1163,`br`),ug()()(),Ac(1164,`td`,20)(1165,`code`,27),vN(1166,`boolean`),ug()(),Ac(1167,`td`,22),vN(1168,`-`),ug(),Ac(1169,`td`,23)(1170,`p`),vN(1171,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(1172,`blockquote`)(1173,`p`),vN(1174,`Não será exibida a indicação se:`),ug()(),Ac(1175,`ul`)(1176,`li`),vN(1177,`Não possuir `),Ac(1178,`code`),vN(1179,`p-help`),ug(),vN(1180,` e/ou `),Ac(1181,`code`),vN(1182,`p-label`),ug(),vN(1183,`.`),ug()()()(),Ac(1184,`tr`,15)(1185,`td`,16)(1186,`div`,24)(1187,`span`,25),vN(1188,` p-size`),Kc(1189,`br`),ug()()(),Ac(1190,`td`,20)(1191,`code`,26),vN(1192,`string`),ug()(),Ac(1193,`td`,22)(1194,`p`)(1195,`code`),vN(1196,`medium`),ug()()(),Ac(1197,`td`,23)(1198,`em`)(1199,`strong`),vN(1200,`(opcional)`),ug()(),Ac(1201,`p`),vN(1202,`Define o tamanho do componente:`),ug(),Ac(1203,`ul`)(1204,`li`)(1205,`code`),vN(1206,`small`),ug(),vN(1207,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(1208,`li`)(1209,`code`),vN(1210,`medium`),ug(),vN(1211,`: altura do input como 44px.`),ug()(),Ac(1212,`blockquote`)(1213,`p`),vN(1214,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(1215,`code`),vN(1216,`medium`),ug(),vN(1217,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(1218,`a`,34),vN(1219,`po-theme`),ug(),vN(1220,`.`),ug()()()(),Ac(1221,`tr`,15)(1222,`td`,16)(1223,`div`,24)(1224,`span`,25),vN(1225,` p-upper-case`),Kc(1226,`br`),ug()()(),Ac(1227,`td`,20)(1228,`code`,27),vN(1229,`boolean`),ug()(),Ac(1230,`td`,22),vN(1231,`-`),ug(),Ac(1232,`td`,23)(1233,`p`),vN(1234,`Converte o conteúdo do campo em maiúsulo automaticamente.`),ug()()()(),Ac(1235,`h3`,11),vN(1236,`Métodos`),ug(),Ac(1237,`table`,35)(1238,`tr`,15)(1239,`th`,36)(1240,`div`,24)(1241,`h4`)(1242,`span`,25),vN(1243,` showAdditionalHelp `),ug()()()()(),Ac(1244,`tr`,23)(1245,`td`,23)(1246,`p`),vN(1247,`Método que exibe `),Ac(1248,`code`),vN(1249,`p-helper`),ug(),vN(1250,` ou executa a ação definida em `),Ac(1251,`code`),vN(1252,`p-helper{eventOnClick}`),ug(),vN(1253,` ou em `),Ac(1254,`code`),vN(1255,`p-additionalHelp`),ug(),vN(1256,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(1257,`code`),vN(1258,`p-keydown`),ug(),vN(1259,`.`),ug(),Ac(1260,`blockquote`)(1261,`p`),vN(1262,`Exibe ou oculta o conteúdo do componente `),Ac(1263,`code`),vN(1264,`po-helper`),ug(),vN(1265,` quando o componente estiver com foco.`),ug()(),Ac(1266,`pre`)(1267,`code`),vN(1268,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ug()(),Ac(1269,`pre`)(1270,`code`),vN(1271,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(1272,`br`),Ac(1273,`table`,35)(1274,`tr`,15)(1275,`th`,36)(1276,`div`,24)(1277,`h4`)(1278,`span`,25),vN(1279,` focus `),ug()()()()(),Ac(1280,`tr`,23)(1281,`td`,23)(1282,`p`),vN(1283,`Função que atribui foco ao componente.`),ug(),Ac(1284,`p`),vN(1285,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(1286,`pre`)(1287,`code`),vN(1288,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ug()()()()(),Kc(1289,`br`),Ac(1290,`h3`),vN(1291,`Interfaces`),ug(),Ac(1292,`h4`,37)(1293,`code`,5),vN(1294,`ErrorAsyncProperties`),ug()(),Ac(1295,`div`,2)(1296,`p`),vN(1297,`Interface para realizar uma validação assíncrona no componente.`),ug()(),Ac(1298,`h4`,11),vN(1299,`Propriedades`),ug(),Ac(1300,`table`,12)(1301,`tr`,13)(1302,`th`,14),vN(1303,`Nome`),ug(),Ac(1304,`th`,14),vN(1305,`Tipo`),ug(),Ac(1306,`th`,14),vN(1307,`Descrição`),ug()(),Ac(1308,`tr`,15)(1309,`td`,16)(1310,`div`,24)(1311,`span`,25),vN(1312,` errorAsync`),Kc(1313,`br`),ug()()(),Ac(1314,`td`,20)(1315,`code`,38),vN(1316,`(value) => Observable<boolean>`),ug()(),Ac(1317,`td`,23)(1318,`p`),vN(1319,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ac(1320,`code`),vN(1321,`change`),ug(),vN(1322,` ou `),Ac(1323,`code`),vN(1324,`change-model`),ug(),vN(1325,`, dependendo do valor da propriedade `),Ac(1326,`code`),vN(1327,`triggerMode`),ug(),vN(1328,`.`),ug()()(),Ac(1329,`tr`,15)(1330,`td`,16)(1331,`div`,24)(1332,`span`,25),vN(1333,` triggerMode`),Kc(1334,`br`),ug()()(),Ac(1335,`td`,20)(1336,`code`,39),vN(1337,`'change' `),ug(),Ac(1338,`code`,40),vN(1339,` 'changeModel'`),ug()(),Ac(1340,`td`,23)(1341,`em`)(1342,`strong`),vN(1343,`(opcional)`),ug()(),Ac(1344,`p`),vN(1345,`Controla se o método será executado no disparo do output `),Ac(1346,`code`),vN(1347,`change`),ug(),vN(1348,` ou `),Ac(1349,`code`),vN(1350,`change-model`),ug(),vN(1351,`.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var Ue=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Input`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return o.changeTab(`doc`)}),Kc(3,`sample-po-input-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return o.changeTab(`web`)}),Kc(5,`sample-po-input-basic-view`)(6,`sample-po-input-labs-view`)(7,`sample-po-input-reactive-form-view`)(8,`sample-po-input-mask-dynamic-view`),ug()()()),l&2&&(cE(`p-actions`,o.actions),Hp(2),cE(`p-active`,o.activeTab===`doc`),Hp(2),cE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[vze,tae,aae,Ce,Me,we,Fe,De],encapsulation:2,changeDetection:1})}return a})()}];var Ie=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(Ue),kL]})}return a})();var Dt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,Ie]})}return a})();export{Dt as DocPoInputModule};