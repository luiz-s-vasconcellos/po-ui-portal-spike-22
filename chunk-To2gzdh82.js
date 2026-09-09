import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Ki as lo,Kn as Bx,Li as ht,Ni as gY,Nr as PO,On as xp,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,Vt as fbe,Wn as Be,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,bi as ca,ca as um,ei as Yl,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,la as uo,lr as Gl,on as mCe,pa as w,pn as qH,r as Ga,rr as Ew,sa as ue,si as _o,tr as EY,ui as a0,ut as S8e,va as yY,vn as tU,wn as vr,xr as Lk,yi as cN,yn as ube,zi as jk}from"./main-3EWTGE7T.js";var fe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`input`,`p-label`,`PO Input`]],template:function(l,o){l&1&&Gl(0,`po-input`,0)},dependencies:[iU],encapsulation:2,changeDetection:1})}return a})();var Le=a=>({"docs-sample-code-tabs":a});var Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Input Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-input-basic/sample-po-input-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-input-basic/sample-po-input-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-input-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Le,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,fe],encapsulation:2,changeDetection:1})}return a})();var ke=(()=>{class a{helperText;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`fa fa-calculator`,label:`fa fa-calculator`}];propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`maskFormatModel`,label:`Formatted Model`},{value:`maskNoLengthValidation`,label:`Mask No Length Validation`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`uppercase`,label:`Upper Case`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}restore(){this.helperText=``,this.input=void 0,this.size=`medium`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-labs`]],standalone:!1,decls:22,vars:44,consts:[[`f`,`ngForm`],[`name`,`input`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-icon`,`p-label`,`p-loading`,`p-mask`,`p-mask-format-model`,`p-maxlength`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-pattern`,`p-placeholder`,`p-required`,`p-required-field-error-message`,`p-readonly`,`p-upper-case`,`p-show-required`,`p-mask-no-length-validation`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`mask`,`p-clean`,``,`p-help`,`Ex.: Zip code: '99999-999'; License plate: '@@@-9999'`,`p-label`,`Mask`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`pattern`,`p-clean`,``,`p-help`,`Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'`,`p-label`,`Pattern (Regex)`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`icon`,`p-clean`,``,`p-label`,`Icon`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let s=Ax();Tl(0,`po-input`,1),ww(`ngModelChange`,function(p){return Ky(s),uN(o.input,p)||(o.input=p),Xy(p)}),ht(`p-blur`,function(){return o.changeEvent(`p-blur`)})(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-enter`,function(){return o.changeEvent(`p-enter`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3)(4,`po-info`,4),ag(),Gl(5,`po-divider`),Tl(6,`form`,null,0)(8,`po-input`,5),ww(`ngModelChange`,function(p){return Ky(s),uN(o.label,p)||(o.label=p),Xy(p)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(p){return Ky(s),uN(o.help,p)||(o.help=p),Xy(p)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(p){return Ky(s),uN(o.helperText,p)||(o.helperText=p),Xy(p)}),ag(),a0(),Tl(11,`po-input`,8),ww(`ngModelChange`,function(p){return Ky(s),uN(o.placeholder,p)||(o.placeholder=p),Xy(p)}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(p){return Ky(s),uN(o.errorPattern,p)||(o.errorPattern=p),Xy(p)}),ag(),a0(),Tl(13,`po-input`,10),ww(`ngModelChange`,function(p){return Ky(s),uN(o.mask,p)||(o.mask=p),Xy(p)}),ag(),a0(),Tl(14,`po-input`,11),ww(`ngModelChange`,function(p){return Ky(s),uN(o.pattern,p)||(o.pattern=p),Xy(p)}),ag(),a0(),Tl(15,`po-number`,12),ww(`ngModelChange`,function(p){return Ky(s),uN(o.minlength,p)||(o.minlength=p),Xy(p)}),ag(),a0(),Tl(16,`po-number`,13),ww(`ngModelChange`,function(p){return Ky(s),uN(o.maxlength,p)||(o.maxlength=p),Xy(p)}),ag(),a0(),Tl(17,`po-select`,14),ww(`ngModelChange`,function(p){return Ky(s),uN(o.icon,p)||(o.icon=p),Xy(p)}),ag(),a0(),Tl(18,`po-checkbox-group`,15),ww(`ngModelChange`,function(p){return Ky(s),uN(o.properties,p)||(o.properties=p),Xy(p)}),ag(),a0(),Tl(19,`po-radio-group`,16),ww(`ngModelChange`,function(p){return Ky(s),uN(o.size,p)||(o.size=p),Xy(p)}),ag(),a0(),Tl(20,`div`,2)(21,`po-button`,17),ht(`p-click`,function(){return Ky(s),Bx(7).reset(),Xy(o.restore())}),ag()()()}l&2&&(Ew(`ngModel`,o.input),nw(`p-helper`,o.helperText)(`p-clean`,o.properties?.includes(`clean`))(`p-disabled`,o.properties?.includes(`disabled`))(`p-error-pattern`,o.errorPattern)(`p-help`,o.help)(`p-icon`,o.icon)(`p-label`,o.label)(`p-loading`,o.properties?.includes(`loading`))(`p-mask`,o.mask)(`p-mask-format-model`,o.properties?.includes(`maskFormatModel`))(`p-maxlength`,o.maxlength)(`p-minlength`,o.minlength)(`p-no-autocomplete`,o.properties?.includes(`noAutocomplete`))(`p-optional`,o.properties?.includes(`optional`))(`p-pattern`,o.pattern)(`p-placeholder`,o.placeholder)(`p-required`,o.properties?.includes(`required`))(`p-required-field-error-message`,o.properties?.includes(`requiredFieldErrorMessage`))(`p-readonly`,o.properties?.includes(`readonly`))(`p-upper-case`,o.properties?.includes(`uppercase`))(`p-show-required`,o.properties?.includes(`showRequired`))(`p-mask-no-length-validation`,o.properties?.includes(`maskNoLengthValidation`))(`p-size`,o.size)(`p-error-limit`,o.properties?.includes(`errorLimit`))(`p-label-text-wrap`,o.properties?.includes(`labelTextWrap`))(`p-compact-label`,o.properties?.includes(`compactLabel`)),l0(),jp(3),nw(`p-value`,o.input),jp(),nw(`p-value`,o.event),jp(4),Ew(`ngModel`,o.label),l0(),jp(),Ew(`ngModel`,o.help),l0(),jp(),Ew(`ngModel`,o.helperText),l0(),jp(),Ew(`ngModel`,o.placeholder),l0(),jp(),Ew(`ngModel`,o.errorPattern),l0(),jp(),Ew(`ngModel`,o.mask),l0(),jp(),Ew(`ngModel`,o.pattern),l0(),jp(),Ew(`ngModel`,o.minlength),l0(),jp(),Ew(`ngModel`,o.maxlength),l0(),jp(),Ew(`ngModel`,o.icon),nw(`p-options`,o.iconOptions),l0(),jp(),Ew(`ngModel`,o.properties),nw(`p-options`,o.propertiesOptions),l0(),jp(),Ew(`ngModel`,o.size),nw(`p-options`,o.sizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,ube,L0e,fbe,ybe],encapsulation:2,changeDetection:1})}return a})();var Ae=a=>({"docs-sample-code-tabs":a});var Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Input Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-input-labs/sample-po-input-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-input
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-input-labs/sample-po-input-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-input-labs`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ae,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ke],encapsulation:2,changeDetection:1})}return a})();var Re=[`reactiveFormData`];var Pe=(()=>{class a{fb=f(EY);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:`Close`};constructor(){this.createReactiveForm()}createReactiveForm(){this.reactiveForm=this.fb.group({name:[``,um.compose([um.required,um.minLength(5),um.maxLength(30)])],address:[``,um.compose([um.required,um.minLength(5),um.maxLength(50)])],number:[``,um.compose([um.required,um.min(1),um.max(99999)])],email:[``,um.required],website:[``,um.required]})}saveForm(){this.reactiveFormModal.open()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-reactive-form`]],viewQuery:function(l,o){if(l&1&&Yl(Re,7),l&2){let s;lo(s=uo())&&(o.reactiveFormModal=s.first)}},standalone:!1,decls:23,vars:8,consts:[[`reactiveFormData`,``],[3,`formGroup`],[1,`po-row`],[`formControlName`,`name`,`p-clean`,``,`p-icon`,`an an-user`,`p-label`,`Customer name`,1,`po-md-12`],[`formControlName`,`address`,`p-clean`,``,`p-icon`,`an an-map-pin`,`p-label`,`Address`,1,`po-lg-9`],[`formControlName`,`number`,`p-label`,`Number`,`p-clean`,``,1,`po-lg-3`],[`formControlName`,`email`,`p-label`,`Email`,`p-clean`,``,1,`po-lg-6`],[`formControlName`,`website`,`p-label`,`Website`,`p-clean`,``,1,`po-lg-6`],[`p-label`,`Save`,1,`po-md-3`,3,`p-click`,`p-disabled`],[`p-title`,`Save successful`,3,`p-primary-action`],[`p-label`,`Name`,1,`po-md-12`,3,`p-value`],[`p-label`,`Address`,1,`po-md-6`,3,`p-value`],[`p-label`,`Number`,1,`po-md-6`,3,`p-value`],[`p-label`,`Email`,1,`po-md-6`,3,`p-value`],[`p-label`,`Website`,1,`po-md-6`,3,`p-value`]],template:function(l,o){l&1&&(Tl(0,`form`,1)(1,`div`,2),Gl(2,`po-input`,3),a0(),ag(),Tl(3,`div`,2),Gl(4,`po-input`,4),a0(),Gl(5,`po-number`,5),a0(),ag(),Tl(6,`div`,2),Gl(7,`po-email`,6),a0(),Gl(8,`po-url`,7),a0(),ag(),Tl(9,`div`,2)(10,`po-button`,8),ht(`p-click`,function(){return o.saveForm()}),ag()()(),Tl(11,`po-modal`,9,0)(13,`div`,2),Gl(14,`po-info`,10),ag(),Gl(15,`po-divider`),Tl(16,`div`,2),Gl(17,`po-info`,11)(18,`po-info`,12),ag(),Gl(19,`po-divider`),Tl(20,`div`,2),Gl(21,`po-info`,13)(22,`po-info`,14),ag()()),l&2&&(nw(`formGroup`,o.reactiveForm),jp(2),l0(),jp(2),l0(),jp(),l0(),jp(2),l0(),jp(),l0(),jp(2),nw(`p-disabled`,!o.reactiveForm.valid),jp(),nw(`p-primary-action`,o.modalPrimaryAction),jp(3),nw(`p-value`,o.reactiveForm.controls.name.value),jp(3),nw(`p-value`,o.reactiveForm.controls.address.value),jp(),nw(`p-value`,o.reactiveForm.controls.number.value),jp(3),nw(`p-value`,o.reactiveForm.controls.email.value),jp(),nw(`p-value`,o.reactiveForm.controls.website.value))},dependencies:[yY,gY,mY,jk,Lk,Zt,Xy$1,qH,iU,ube,tU,ybe,vr],encapsulation:2,changeDetection:1})}return a})();var Oe=a=>({"docs-sample-code-tabs":a});var we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-reactive-form-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Input - Reactive Form`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-input-reactive-form/sample-po-input-reactive-form.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form [formGroup]="reactiveForm">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-input-reactive-form`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Oe,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,Pe],encapsulation:2,changeDetection:1})}return a})();var Z=`999.999.999-99`;var He=`99.999.999/9999-99`;function q(a){return(a||``).replace(/\D/g,``)}function z(a){return a>11?He:Z}var _e=(()=>{class a{cd;document=``;mask=Z;formMask=Z;form=new _o({document:new ca(``)});constructor(r){this.cd=r}handleKeydown(r){this.updateMask(this.predictMaskFromKeydown(r,this.mask))}handlePaste(r){this.updateMask(this.predictMaskFromPaste(r))}handleChangeModel(r){this.mask=z(q(r).length)}handleFormKeydown(r){this.updateFormMask(this.predictMaskFromKeydown(r,this.formMask))}handleFormPaste(r){this.updateFormMask(this.predictMaskFromPaste(r))}handleFormChangeModel(r){this.formMask=z(q(r).length)}predictMaskFromKeydown(r,l){if(r.ctrlKey||r.metaKey||r.altKey)return l;let o=r.target,s=o.value||``,d=o.selectionStart??s.length,p=o.selectionEnd??d,L=q(s).length-q(s.slice(d,p)).length;if(/^[0-9]$/.test(r.key))L++;else if(r.key===`Backspace`&&d===p&&d>0)L--;else if(r.key===`Delete`&&d===p&&d<s.length)L--;else return l;return z(L)}predictMaskFromPaste(r){let l=r.target,o=l.value||``,s=l.selectionStart??o.length,d=l.selectionEnd??s,p=q(r.clipboardData?.getData(`text`)||``);return z(q(o).length-q(o.slice(s,d)).length+p.length)}updateMask(r){r!==this.mask&&(this.mask=r,this.cd.detectChanges())}updateFormMask(r){r!==this.formMask&&(this.formMask=r,this.cd.detectChanges())}static ɵfac=function(l){return new(l||a)(w(Be))};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-mask-dynamic`]],standalone:!1,decls:7,vars:4,consts:[[1,`po-row`],[`p-title`,`CPF / CNPJ com ngModel`,1,`po-lg-6`,`po-md-12`],[`name`,`document`,`p-clean`,``,`p-label`,`CPF / CNPJ`,`p-placeholder`,`Informe o CPF ou o CNPJ`,1,`po-md-12`,3,`ngModelChange`,`p-keydown`,`paste`,`p-change-model`,`p-mask`,`ngModel`],[`p-title`,`CPF / CNPJ com Reactive Forms`,1,`po-lg-6`,`po-md-12`],[1,`po-row`,3,`formGroup`],[`formControlName`,`document`,`p-clean`,``,`p-label`,`CPF / CNPJ`,`p-placeholder`,`Informe o CPF ou o CNPJ`,1,`po-md-12`,3,`p-keydown`,`paste`,`p-change-model`,`p-mask`]],template:function(l,o){l&1&&(Tl(0,`div`,0)(1,`po-container`,1)(2,`div`,0)(3,`po-input`,2),ww(`ngModelChange`,function(d){return uN(o.document,d)||(o.document=d),d}),ht(`p-keydown`,function(d){return o.handleKeydown(d)})(`paste`,function(d){return o.handlePaste(d)})(`p-change-model`,function(d){return o.handleChangeModel(d)}),ag(),a0(),ag()(),Tl(4,`po-container`,3)(5,`div`,4)(6,`po-input`,5),ht(`p-keydown`,function(d){return o.handleFormKeydown(d)})(`paste`,function(d){return o.handleFormPaste(d)})(`p-change-model`,function(d){return o.handleFormChangeModel(d)}),ag(),a0(),ag()()()),l&2&&(jp(3),nw(`p-mask`,o.mask),Ew(`ngModel`,o.document),l0(),jp(2),nw(`formGroup`,o.form),jp(),nw(`p-mask`,o.formMask),l0())},dependencies:[gY,mY,Ak,jk,Lk,xp,iU],encapsulation:2})}return a})();var je=a=>({"docs-sample-code-tabs":a});var Fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-mask-dynamic-view`]],standalone:!1,decls:28,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Input - Dynamic Mask (CPF/CNPJ)`),ag(),Tl(4,`a`,2),ht(`click`,function(){return o.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-input-mask-dynamic/sample-po-input-mask-dynamic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-row">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-input-mask-dynamic/sample-po-input-mask-dynamic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { ChangeDetectorRef, Component } from '@angular/core';
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
`),ag(),Tl(21,`label`,6),cN(22,`sample-po-input-mask-dynamic/document-mask.ts`),ag(),Tl(23,`pre`,9),cN(24,`export const MASK_CPF = '999.999.999-99';
export const MASK_CNPJ = '99.999.999/9999-99';

const CPF_LENGTH = 11;

export function onlyDigits(value: string): string {
  return (value || '').replace(/\\D/g, '');
}

export function resolveMask(digitCount: number): string {
  return digitCount > CPF_LENGTH ? MASK_CNPJ : MASK_CPF;
}
`),ag()()()()(),Tl(25,`div`,10),Gl(26,`sample-po-input-mask-dynamic`),ag(),Gl(27,`hr`)),l&2&&(jp(5),Xx(`po-icon `+o.sampleCodeButtonIcon),jp(),hg(` `,o.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,je,o.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,_e],encapsulation:2,changeDetection:1})}return a})();var De=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-input-doc`]],standalone:!1,decls:1352,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(l,o){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoInputComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ag(),Tl(24,`p`),cN(25,`Importante:`),ag(),Tl(26,`ul`)(27,`li`),cN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ag()(),Tl(29,`h4`),cN(30,`Tokens customizáveis`),ag(),Tl(31,`p`),cN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Gl(33,`br`),cN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(35,`code`),cN(36,`.po-input`),ag()(),Tl(37,`blockquote`)(38,`p`),cN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Tl(40,`a`,6),cN(41,`Grid System`),ag(),cN(42,`.`),ag()(),Tl(43,`blockquote`)(44,`p`),cN(45,`Para maiores informações, acesse o guia `),Tl(46,`a`,7),cN(47,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(48,`.`),ag()(),Tl(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),cN(53,`Propriedade`),ag(),Tl(54,`th`),cN(55,`Descrição`),ag(),Tl(56,`th`),cN(57,`Valor Padrão`),ag()()(),Tl(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),cN(62,`Default Values`),ag()(),Gl(63,`td`)(64,`td`),ag(),Tl(65,`tr`)(66,`td`)(67,`code`),cN(68,`--font-family`),ag()(),Tl(69,`td`),cN(70,`Família tipográfica usada`),ag(),Tl(71,`td`)(72,`code`),cN(73,`var(--font-family-theme)`),ag()()(),Tl(74,`tr`)(75,`td`)(76,`code`),cN(77,`--font-size`),ag()(),Tl(78,`td`),cN(79,`Tamanho da fonte`),ag(),Tl(80,`td`)(81,`code`),cN(82,`var(--font-size-default)`),ag()()(),Tl(83,`tr`)(84,`td`)(85,`code`),cN(86,`--text-color-placeholder`),ag()(),Tl(87,`td`),cN(88,`Cor do texto placeholder`),ag(),Tl(89,`td`)(90,`code`),cN(91,`var(--color-neutral-light-30)`),ag()()(),Tl(92,`tr`)(93,`td`)(94,`code`),cN(95,`--color`),ag()(),Tl(96,`td`),cN(97,`Cor pincipal do input`),ag(),Tl(98,`td`)(99,`code`),cN(100,`var(--color-neutral-dark-70)`),ag()()(),Tl(101,`tr`)(102,`td`)(103,`code`),cN(104,`--background`),ag()(),Tl(105,`td`),cN(106,`Cor de background`),ag(),Tl(107,`td`)(108,`code`),cN(109,`var(--color-neutral-light-05)`),ag()()(),Tl(110,`tr`)(111,`td`)(112,`code`),cN(113,`--padding`),ag()(),Tl(114,`td`),cN(115,`Preenchimento`),ag(),Tl(116,`td`)(117,`code`),cN(118,`0 0.5rem`),ag()()(),Tl(119,`tr`)(120,`td`)(121,`code`),cN(122,`--text-color`),ag()(),Tl(123,`td`),cN(124,`Cor do texto`),ag(),Tl(125,`td`)(126,`code`),cN(127,`var(--color-neutral-dark-90)`),ag()()(),Tl(128,`tr`)(129,`td`)(130,`code`),cN(131,`--field-container-title-justify`),ag()(),Tl(132,`td`),cN(133,`Alinhamento horizontal do título (`),Tl(134,`code`),cN(135,`justify-content`),ag(),cN(136,`)`),ag(),Tl(137,`td`)(138,`code`),cN(139,`space-between`),ag()()(),Tl(140,`tr`)(141,`td`)(142,`code`),cN(143,`--field-container-title-flex`),ag()(),Tl(144,`td`),cN(145,`Flex do título (`),Tl(146,`code`),cN(147,`flex`),ag(),cN(148,`)`),ag(),Tl(149,`td`)(150,`code`),cN(151,`1 auto`),ag()()(),Tl(152,`tr`)(153,`td`)(154,`strong`),cN(155,`Hover`),ag()(),Gl(156,`td`)(157,`td`),ag(),Tl(158,`tr`)(159,`td`)(160,`code`),cN(161,`--color-hover`),ag()(),Tl(162,`td`),cN(163,`Cor principal no estado hover`),ag(),Tl(164,`td`)(165,`code`),cN(166,`var(--color-brand-01-dark)`),ag()()(),Tl(167,`tr`)(168,`td`)(169,`code`),cN(170,`--background-hover`),ag()(),Tl(171,`td`),cN(172,`Cor de background no estado hover`),ag(),Tl(173,`td`)(174,`code`),cN(175,`var(--color-brand-01-lightest)`),ag()()(),Tl(176,`tr`)(177,`td`)(178,`strong`),cN(179,`Focused`),ag()(),Gl(180,`td`)(181,`td`),ag(),Tl(182,`tr`)(183,`td`)(184,`code`),cN(185,`--color-focused`),ag()(),Tl(186,`td`),cN(187,`Cor principal no estado de focus`),ag(),Tl(188,`td`)(189,`code`),cN(190,`var(--color-action-default)`),ag()()(),Tl(191,`tr`)(192,`td`)(193,`code`),cN(194,`--outline-color-focused`),ag()(),Tl(195,`td`),cN(196,`Cor do outline do estado de focus`),ag(),Tl(197,`td`)(198,`code`),cN(199,`var(--color-action-focus)`),ag()()(),Tl(200,`tr`)(201,`td`)(202,`strong`),cN(203,`Disabled`),ag()(),Gl(204,`td`)(205,`td`),ag(),Tl(206,`tr`)(207,`td`)(208,`code`),cN(209,`--color-disabled`),ag()(),Tl(210,`td`),cN(211,`Cor principal no estado disabled`),ag(),Tl(212,`td`)(213,`code`),cN(214,`var(--color-neutral-light-30)`),ag()()(),Tl(215,`tr`)(216,`td`)(217,`code`),cN(218,`--background-disabled`),ag()(),Tl(219,`td`),cN(220,`Cor de background no estado disabled`),ag(),Tl(221,`td`)(222,`code`),cN(223,`var(--color-neutral-light-20)`),ag()()(),Tl(224,`tr`)(225,`td`)(226,`code`),cN(227,`--text-color-disabled`),ag()(),Tl(228,`td`),cN(229,`Cor do texto no estado disabled`),ag(),Tl(230,`td`)(231,`code`),cN(232,`var(--color-neutral-dark-70)`),ag()()()()(),Gl(233,`br`),ag(),Tl(234,`div`,8)(235,`h4`,9),cN(236,`Seletor`),ag(),Tl(237,`pre`,10),cN(238,`<po-input
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
`),ag()(),Tl(239,`h4`,11),cN(240,`Propriedades`),ag(),Tl(241,`table`,12)(242,`tr`,13)(243,`th`,14),cN(244,`Nome`),ag(),Tl(245,`th`,14),cN(246,`Tipo`),ag(),Tl(247,`th`,14),cN(248,`Padrão`),ag(),Tl(249,`th`,14),cN(250,`Descrição`),ag()(),Tl(251,`tr`,15)(252,`td`,16)(253,`div`,17)(254,`span`,18),cN(255,` (p-additional-help)`),Gl(256,`br`),ag()(),Tl(257,`div`,19),cN(258,`Deprecated`),ag()(),Tl(259,`td`,20)(260,`code`,21),cN(261,`EventEmitter`),ag()(),Tl(262,`td`,22),cN(263,`-`),ag(),Tl(264,`td`,23)(265,`em`)(266,`strong`),cN(267,`(opcional)`),ag()(),Tl(268,`p`),cN(269,`Evento disparado ao clicar no ícone de ajuda adicional.`),ag(),Tl(270,`blockquote`)(271,`p`),cN(272,`Essa propriedade está `),Tl(273,`strong`),cN(274,`depreciada`),ag(),cN(275,` e será removida na versão `),Tl(276,`code`),cN(277,`23.x.x`),ag(),cN(278,`. Recomendamos utilizar a propriedade `),Tl(279,`code`),cN(280,`p-helper`),ag(),cN(281,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(282,`tr`,15)(283,`td`,16)(284,`div`,24)(285,`span`,25),cN(286,` p-additional-help-tooltip`),Gl(287,`br`),ag()(),Tl(288,`div`,19),cN(289,`Deprecated`),ag()(),Tl(290,`td`,20)(291,`code`,26),cN(292,`string`),ag()(),Tl(293,`td`,22),cN(294,`-`),ag(),Tl(295,`td`,23)(296,`em`)(297,`strong`),cN(298,`(opcional)`),ag()(),Tl(299,`p`),cN(300,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Tl(301,`code`),cN(302,`po-helper`),ag(),cN(303,`.
`),Tl(304,`strong`),cN(305,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),ag()(),Tl(306,`blockquote`)(307,`p`),cN(308,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),ag()(),Tl(309,`blockquote`)(310,`p`),cN(311,`Essa propriedade está `),Tl(312,`strong`),cN(313,`depreciada`),ag(),cN(314,` e será removida na versão `),Tl(315,`code`),cN(316,`23.x.x`),ag(),cN(317,`. Recomendamos utilizar a propriedade `),Tl(318,`code`),cN(319,`p-helper`),ag(),cN(320,` que oferece mais recursos e flexibilidade.`),ag()()()(),Tl(321,`tr`,15)(322,`td`,16)(323,`div`,24)(324,`span`,25),cN(325,` p-append-in-body`),Gl(326,`br`),ag()()(),Tl(327,`td`,20)(328,`code`,27),cN(329,`boolean`),ag()(),Tl(330,`td`,22)(331,`p`)(332,`code`),cN(333,`false`),ag()()(),Tl(334,`td`,23)(335,`em`)(336,`strong`),cN(337,`(opcional)`),ag()(),Tl(338,`p`),cN(339,`Define que o popover (`),Tl(340,`code`),cN(341,`p-helper`),ag(),cN(342,` e/ou `),Tl(343,`code`),cN(344,`p-error-limit`),ag(),cN(345,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),ag(),Tl(346,`blockquote`)(347,`p`),cN(348,`Quando utilizado com `),Tl(349,`code`),cN(350,`p-helper`),ag(),cN(351,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),ag()()()(),Tl(352,`tr`,15)(353,`td`,16)(354,`div`,24)(355,`span`,25),cN(356,` p-auto-focus`),Gl(357,`br`),ag()()(),Tl(358,`td`,20)(359,`code`,27),cN(360,`boolean`),ag()(),Tl(361,`td`,22)(362,`p`)(363,`code`),cN(364,`false`),ag()()(),Tl(365,`td`,23)(366,`em`)(367,`strong`),cN(368,`(opcional)`),ag()(),Tl(369,`p`),cN(370,`Aplica foco no elemento ao ser iniciado.`),ag(),Tl(371,`blockquote`)(372,`p`),cN(373,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),ag()()()(),Tl(374,`tr`,15)(375,`td`,16)(376,`div`,17)(377,`span`,18),cN(378,` (p-blur)`),Gl(379,`br`),ag()()(),Tl(380,`td`,20)(381,`code`,21),cN(382,`EventEmitter`),ag()(),Tl(383,`td`,22),cN(384,`-`),ag(),Tl(385,`td`,23)(386,`em`)(387,`strong`),cN(388,`(opcional)`),ag()(),Tl(389,`p`),cN(390,`Evento disparado ao sair do campo.`),ag()()(),Tl(391,`tr`,15)(392,`td`,16)(393,`div`,17)(394,`span`,18),cN(395,` (p-change)`),Gl(396,`br`),ag()()(),Tl(397,`td`,20)(398,`code`,21),cN(399,`EventEmitter`),ag()(),Tl(400,`td`,22),cN(401,`-`),ag(),Tl(402,`td`,23)(403,`em`)(404,`strong`),cN(405,`(opcional)`),ag()(),Tl(406,`p`),cN(407,`Evento disparado ao alterar valor e deixar o campo.`),ag()()(),Tl(408,`tr`,15)(409,`td`,16)(410,`div`,17)(411,`span`,18),cN(412,` (p-change-model)`),Gl(413,`br`),ag()()(),Tl(414,`td`,20)(415,`code`,21),cN(416,`EventEmitter`),ag()(),Tl(417,`td`,22),cN(418,`-`),ag(),Tl(419,`td`,23)(420,`em`)(421,`strong`),cN(422,`(opcional)`),ag()(),Tl(423,`p`),cN(424,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Tl(425,`code`),cN(426,`setValue`),ag(),cN(427,`, `),Tl(428,`code`),cN(429,`patchValue`),ag(),cN(430,`, carregamento assíncrono).`),ag(),Tl(431,`p`),cN(432,`Diferentemente do `),Tl(433,`code`),cN(434,`p-change`),ag(),cN(435,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Tl(436,`code`),cN(437,`p-change-model`),ag(),cN(438,` cobre todos os cenários de alteração de valor.`),ag(),Tl(439,`p`),cN(440,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),ag()()(),Tl(441,`tr`,15)(442,`td`,16)(443,`div`,24)(444,`span`,25),cN(445,`p-clean`),Gl(446,`br`),ag()()(),Tl(447,`td`,20)(448,`code`,27),cN(449,`boolean`),ag()(),Tl(450,`td`,22),cN(451,`-`),ag(),Tl(452,`td`,23)(453,`em`)(454,`strong`),cN(455,`(opcional)`),ag()(),Tl(456,`p`),cN(457,`Se verdadeiro, o campo receberá um botão para ser limpo.`),ag()()(),Tl(458,`tr`,15)(459,`td`,16)(460,`div`,24)(461,`span`,25),cN(462,` p-compact-label`),Gl(463,`br`),ag()()(),Tl(464,`td`,20)(465,`code`,27),cN(466,`boolean`),ag()(),Tl(467,`td`,22)(468,`p`)(469,`code`),cN(470,`false`),ag()()(),Tl(471,`td`,23)(472,`em`)(473,`strong`),cN(474,`(opcional)`),ag()(),Tl(475,`p`),cN(476,`Define se o título do campo será exibido de forma compacta.`),ag(),Tl(477,`p`),cN(478,`Quando habilitado (`),Tl(479,`code`),cN(480,`true`),ag(),cN(481,`), o modo compacto afeta o conjunto composto por:`),ag(),Tl(482,`ul`)(483,`li`)(484,`code`),cN(485,`po-label`),ag()(),Tl(486,`li`)(487,`code`),cN(488,`p-requirement (showRequired)`),ag()(),Tl(489,`li`)(490,`code`),cN(491,`po-helper`),ag()()(),Tl(492,`p`),cN(493,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),ag(),Tl(494,`p`),cN(495,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),ag(),Tl(496,`ul`)(497,`li`)(498,`code`),cN(499,`--field-container-title-justify`),ag()(),Tl(500,`li`)(501,`code`),cN(502,`--field-container-title-flex`),ag()()(),Tl(503,`p`),cN(504,`Exemplo:`),ag(),Tl(505,`pre`)(506,`code`),cN(507,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),ag()(),Tl(508,`p`),cN(509,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),ag()()(),Tl(510,`tr`,15)(511,`td`,16)(512,`div`,24)(513,`span`,25),cN(514,`p-disabled`),Gl(515,`br`),ag()()(),Tl(516,`td`,20)(517,`code`,27),cN(518,`boolean`),ag()(),Tl(519,`td`,22)(520,`p`)(521,`code`),cN(522,`false`),ag()()(),Tl(523,`td`,23)(524,`em`)(525,`strong`),cN(526,`(opcional)`),ag()(),Tl(527,`p`),cN(528,`Se verdadeiro, desabilita o campo.`),ag()()(),Tl(529,`tr`,15)(530,`td`,16)(531,`div`,24)(532,`span`,25),cN(533,` p-emit-all-changes`),Gl(534,`br`),ag()()(),Tl(535,`td`,20)(536,`code`,27),cN(537,`boolean`),ag()(),Tl(538,`td`,22)(539,`p`)(540,`code`),cN(541,`false`),ag()()(),Tl(542,`td`,23)(543,`em`)(544,`strong`),cN(545,`(opcional)`),ag()(),Tl(546,`p`),cN(547,`Sempre emite as alterações do model mesmo quando o valor atual for igual ao valor anterior.`),ag()()(),Tl(548,`tr`,15)(549,`td`,16)(550,`div`,17)(551,`span`,18),cN(552,` (p-enter)`),Gl(553,`br`),ag()()(),Tl(554,`td`,20)(555,`code`,21),cN(556,`EventEmitter`),ag()(),Tl(557,`td`,22),cN(558,`-`),ag(),Tl(559,`td`,23)(560,`em`)(561,`strong`),cN(562,`(opcional)`),ag()(),Tl(563,`p`),cN(564,`Evento disparado ao entrar do campo.`),ag()()(),Tl(565,`tr`,15)(566,`td`,16)(567,`div`,24)(568,`span`,25),cN(569,` p-error-async-properties`),Gl(570,`br`),ag()()(),Tl(571,`td`,20)(572,`code`,28),cN(573,`ErrorAsyncProperties`),ag()(),Tl(574,`td`,22),cN(575,`-`),ag(),Tl(576,`td`,23)(577,`em`)(578,`strong`),cN(579,`(opcional)`),ag()(),Tl(580,`p`),cN(581,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),Tl(582,`code`),cN(583,`Reactive Forms`),ag(),cN(584,`. Em formulários reativos, pode-se utilizar o próprio `),Tl(585,`code`),cN(586,`asyncValidators`),ag(),cN(587,`.`),ag()()(),Tl(588,`tr`,15)(589,`td`,16)(590,`div`,24)(591,`span`,25),cN(592,` p-error-limit`),Gl(593,`br`),ag()()(),Tl(594,`td`,20)(595,`code`,27),cN(596,`boolean`),ag()(),Tl(597,`td`,22)(598,`p`)(599,`code`),cN(600,`false`),ag()()(),Tl(601,`td`,23)(602,`em`)(603,`strong`),cN(604,`(opcional)`),ag()(),Tl(605,`p`),cN(606,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),ag(),Tl(607,`blockquote`)(608,`p`),cN(609,`Caso essa propriedade seja definida como `),Tl(610,`code`),cN(611,`true`),ag(),cN(612,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),ag()()()(),Tl(613,`tr`,15)(614,`td`,16)(615,`div`,24)(616,`span`,25),cN(617,` p-error-pattern`),Gl(618,`br`),ag()()(),Tl(619,`td`,20)(620,`code`,26),cN(621,`string`),ag()(),Tl(622,`td`,22),cN(623,`-`),ag(),Tl(624,`td`,23)(625,`em`)(626,`strong`),cN(627,`(opcional)`),ag()(),Tl(628,`p`),cN(629,`Mensagem que será apresentada quando o `),Tl(630,`code`),cN(631,`pattern`),ag(),cN(632,` ou a máscara não for satisfeita.`),ag(),Tl(633,`blockquote`)(634,`p`),cN(635,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Tl(636,`code`),cN(637,`p-required-field-error-message`),ag(),cN(638,` em conjunto.`),ag()()()(),Tl(639,`tr`,15)(640,`td`,16)(641,`div`,24)(642,`span`,25),cN(643,` p-help`),Gl(644,`br`),ag()()(),Tl(645,`td`,20)(646,`code`,26),cN(647,`string`),ag()(),Tl(648,`td`,22),cN(649,`-`),ag(),Tl(650,`td`,23)(651,`em`)(652,`strong`),cN(653,`(opcional)`),ag()(),Tl(654,`p`),cN(655,`Texto de apoio do campo.`),ag()()(),Tl(656,`tr`,15)(657,`td`,16)(658,`div`,24)(659,`span`,25),cN(660,` p-icon`),Gl(661,`br`),ag()()(),Tl(662,`td`,20)(663,`code`,26),cN(664,`string `),ag(),Tl(665,`code`,29),cN(666,` TemplateRef<void>`),ag()(),Tl(667,`td`,22),cN(668,`-`),ag(),Tl(669,`td`,23)(670,`em`)(671,`strong`),cN(672,`(opcional)`),ag()(),Tl(673,`p`),cN(674,`Define o ícone que será exibido no início do campo.`),ag(),Tl(675,`p`),cN(676,`É possível usar qualquer um dos ícones da `),Tl(677,`a`,30),cN(678,`Biblioteca de ícones`),ag(),cN(679,`. conforme exemplo abaixo:`),ag(),Tl(680,`pre`)(681,`code`),cN(682,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),ag()(),Tl(683,`p`),cN(684,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(685,`em`),cN(686,`Font Awesome`),ag(),cN(687,`, da seguinte forma:`),ag(),Tl(688,`pre`)(689,`code`),cN(690,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),ag()(),Tl(691,`p`),cN(692,`Outra opção seria a customização do ícone através do `),Tl(693,`code`),cN(694,`TemplateRef`),ag(),cN(695,`, conforme exemplo abaixo:`),ag(),Tl(696,`pre`)(697,`code`),cN(698,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ag()(),Tl(699,`blockquote`)(700,`p`),cN(701,`Para o ícone enquadrar corretamente, deve-se utilizar `),Tl(702,`code`),cN(703,`font-size: inherit`),ag(),cN(704,` caso o ícone utilizado não aplique-o.`),ag()()()(),Tl(705,`tr`,15)(706,`td`,16)(707,`div`,17)(708,`span`,18),cN(709,` (p-keydown)`),Gl(710,`br`),ag()()(),Tl(711,`td`,20)(712,`code`,21),cN(713,`EventEmitter`),ag()(),Tl(714,`td`,22),cN(715,`-`),ag(),Tl(716,`td`,23)(717,`em`)(718,`strong`),cN(719,`(opcional)`),ag()(),Tl(720,`p`),cN(721,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(722,`code`),cN(723,`KeyboardEvent`),ag(),cN(724,` com informações sobre a tecla.`),ag()()(),Tl(725,`tr`,15)(726,`td`,16)(727,`div`,24)(728,`span`,25),cN(729,` p-label`),Gl(730,`br`),ag()()(),Tl(731,`td`,20)(732,`code`,26),cN(733,`string`),ag()(),Tl(734,`td`,22),cN(735,`-`),ag(),Tl(736,`td`,23)(737,`em`)(738,`strong`),cN(739,`(opcional)`),ag()(),Tl(740,`p`),cN(741,`Rótulo do campo.`),ag()()(),Tl(742,`tr`,15)(743,`td`,16)(744,`div`,24)(745,`span`,25),cN(746,` p-label-text-wrap`),Gl(747,`br`),ag()()(),Tl(748,`td`,20)(749,`code`,27),cN(750,`boolean`),ag()(),Tl(751,`td`,22)(752,`p`)(753,`code`),cN(754,`false`),ag()()(),Tl(755,`td`,23)(756,`em`)(757,`strong`),cN(758,`(opcional)`),ag()(),Tl(759,`p`),cN(760,`Habilita a quebra automática do texto da propriedade `),Tl(761,`code`),cN(762,`p-label`),ag(),cN(763,`. Quando `),Tl(764,`code`),cN(765,`p-label-text-wrap`),ag(),cN(766,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(767,`tr`,15)(768,`td`,16)(769,`div`,24)(770,`span`,25),cN(771,` p-loading`),Gl(772,`br`),ag()()(),Tl(773,`td`,20)(774,`code`,27),cN(775,`boolean`),ag()(),Tl(776,`td`,22)(777,`p`)(778,`code`),cN(779,`false`),ag()()(),Tl(780,`td`,23)(781,`em`)(782,`strong`),cN(783,`(opcional)`),ag()(),Tl(784,`p`),cN(785,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ag()()(),Tl(786,`tr`,15)(787,`td`,16)(788,`div`,24)(789,`span`,25),cN(790,`p-mask`),Gl(791,`br`),ag()()(),Tl(792,`td`,20)(793,`code`,26),cN(794,`string`),ag()(),Tl(795,`td`,22),cN(796,`-`),ag(),Tl(797,`td`,23)(798,`em`)(799,`strong`),cN(800,`(opcional)`),ag()(),Tl(801,`p`),cN(802,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),ag()()(),Tl(803,`tr`,15)(804,`td`,16)(805,`div`,24)(806,`span`,25),cN(807,`p-mask-format-model`),Gl(808,`br`),ag()()(),Tl(809,`td`,20)(810,`code`,27),cN(811,`boolean`),ag()(),Tl(812,`td`,22)(813,`p`)(814,`code`),cN(815,`false`),ag()()(),Tl(816,`td`,23)(817,`em`)(818,`strong`),cN(819,`(opcional)`),ag()(),Tl(820,`p`),cN(821,`Indica se o `),Tl(822,`code`),cN(823,`model`),ag(),cN(824,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),ag()()(),Tl(825,`tr`,15)(826,`td`,16)(827,`div`,24)(828,`span`,25),cN(829,` p-mask-no-length-validation`),Gl(830,`br`),ag()()(),Tl(831,`td`,20)(832,`code`,27),cN(833,`boolean`),ag()(),Tl(834,`td`,22)(835,`p`)(836,`code`),cN(837,`false`),ag()()(),Tl(838,`td`,23)(839,`p`),cN(840,`Controla como o componente aplica as validações de comprimento mínimo (`),Tl(841,`code`),cN(842,`minLength`),ag(),cN(843,`) e máximo (`),Tl(844,`code`),cN(845,`maxLength`),ag(),cN(846,`) quando há uma máscara (`),Tl(847,`code`),cN(848,`p-mask`),ag(),cN(849,`) definida.`),ag(),Tl(850,`ul`)(851,`li`),cN(852,`Quando `),Tl(853,`code`),cN(854,`true`),ag(),cN(855,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ag(),Tl(856,`li`),cN(857,`Quando `),Tl(858,`code`),cN(859,`false`),ag(),cN(860,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ag()(),Tl(861,`blockquote`)(862,`p`),cN(863,`Esta propriedade é ignorada quando utilizada em conjunto com `),Tl(864,`code`),cN(865,`p-mask-format-model`),ag(),cN(866,`.`),ag()(),Tl(867,`p`),cN(868,`Exemplo:`),ag(),Tl(869,`pre`)(870,`code`),cN(871,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ag()(),Tl(872,`ul`)(873,`li`),cN(874,`Entrada: `),Tl(875,`code`),cN(876,`123-456`),ag(),cN(877,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Tl(878,`code`),cN(879,`-`),ag(),cN(880,`.`),ag()()()(),Tl(881,`tr`,15)(882,`td`,16)(883,`div`,24)(884,`span`,25),cN(885,` p-maxlength`),Gl(886,`br`),ag()()(),Tl(887,`td`,20)(888,`code`,31),cN(889,`number`),ag()(),Tl(890,`td`,22),cN(891,`-`),ag(),Tl(892,`td`,23)(893,`em`)(894,`strong`),cN(895,`(opcional)`),ag()(),Tl(896,`p`),cN(897,`Indica a quantidade máxima de caracteres que o campo aceita.`),ag()()(),Tl(898,`tr`,15)(899,`td`,16)(900,`div`,24)(901,`span`,25),cN(902,` p-minlength`),Gl(903,`br`),ag()()(),Tl(904,`td`,20)(905,`code`,31),cN(906,`number`),ag()(),Tl(907,`td`,22),cN(908,`-`),ag(),Tl(909,`td`,23)(910,`em`)(911,`strong`),cN(912,`(opcional)`),ag()(),Tl(913,`p`),cN(914,`Indica a quantidade mínima de caracteres que o campo aceita.`),ag()()(),Tl(915,`tr`,15)(916,`td`,16)(917,`div`,24)(918,`span`,25),cN(919,` name`),Gl(920,`br`),ag()()(),Tl(921,`td`,20)(922,`code`,26),cN(923,`string`),ag()(),Tl(924,`td`,22),cN(925,`-`),ag(),Tl(926,`td`,23)(927,`p`),cN(928,`Nome e identificador do campo.`),ag()()(),Tl(929,`tr`,15)(930,`td`,16)(931,`div`,24)(932,`span`,25),cN(933,` p-no-autocomplete`),Gl(934,`br`),ag()()(),Tl(935,`td`,20)(936,`code`,27),cN(937,`boolean`),ag()(),Tl(938,`td`,22)(939,`p`)(940,`code`),cN(941,`false`),ag()()(),Tl(942,`td`,23)(943,`em`)(944,`strong`),cN(945,`(opcional)`),ag()(),Tl(946,`p`),cN(947,`Define a propriedade nativa `),Tl(948,`code`),cN(949,`autocomplete`),ag(),cN(950,` do campo como `),Tl(951,`code`),cN(952,`off`),ag(),cN(953,`.`),ag(),Tl(954,`blockquote`)(955,`p`),cN(956,`No componente `),Tl(957,`code`),cN(958,`po-password`),ag(),cN(959,` será definido como `),Tl(960,`code`),cN(961,`new-password`),ag(),cN(962,`.`),ag()(),Tl(963,`p`),cN(964,`Nos componentes `),Tl(965,`code`),cN(966,`po-password`),ag(),cN(967,` e `),Tl(968,`code`),cN(969,`po-login`),ag(),cN(970,` o valor padrão será `),Tl(971,`code`),cN(972,`true`),ag(),cN(973,`.`),ag()()(),Tl(974,`tr`,15)(975,`td`,16)(976,`div`,24)(977,`span`,25),cN(978,` p-optional`),Gl(979,`br`),ag()()(),Tl(980,`td`,20)(981,`code`,27),cN(982,`boolean`),ag()(),Tl(983,`td`,22)(984,`p`)(985,`code`),cN(986,`false`),ag()()(),Tl(987,`td`,23)(988,`em`)(989,`strong`),cN(990,`(opcional)`),ag()(),Tl(991,`p`),cN(992,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(993,`blockquote`)(994,`p`),cN(995,`Não será exibida a indicação se:`),ag()(),Tl(996,`ul`)(997,`li`),cN(998,`O campo conter `),Tl(999,`code`),cN(1e3,`p-required`),ag(),cN(1001,`;`),ag(),Tl(1002,`li`),cN(1003,`Não possuir `),Tl(1004,`code`),cN(1005,`p-help`),ag(),cN(1006,` e/ou `),Tl(1007,`code`),cN(1008,`p-label`),ag(),cN(1009,`.`),ag()()()(),Tl(1010,`tr`,15)(1011,`td`,16)(1012,`div`,24)(1013,`span`,25),cN(1014,`p-pattern`),Gl(1015,`br`),ag()()(),Tl(1016,`td`,20)(1017,`code`,26),cN(1018,`string`),ag()(),Tl(1019,`td`,22),cN(1020,`-`),ag(),Tl(1021,`td`,23)(1022,`em`)(1023,`strong`),cN(1024,`(opcional)`),ag()(),Tl(1025,`p`),cN(1026,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Tl(1027,`code`),cN(1028,`(p-mask)`),ag(),cN(1029,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ag()()(),Tl(1030,`tr`,15)(1031,`td`,16)(1032,`div`,24)(1033,`span`,25),cN(1034,` p-placeholder`),Gl(1035,`br`),ag()()(),Tl(1036,`td`,20)(1037,`code`,26),cN(1038,`string`),ag()(),Tl(1039,`td`,22)(1040,`p`),cN(1041,`''`),ag()(),Tl(1042,`td`,23)(1043,`em`)(1044,`strong`),cN(1045,`(opcional)`),ag()(),Tl(1046,`p`),cN(1047,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ag()()(),Tl(1048,`tr`,15)(1049,`td`,16)(1050,`div`,24)(1051,`span`,25),cN(1052,` p-helper`),Gl(1053,`br`),ag()()(),Tl(1054,`td`,20)(1055,`code`,32),cN(1056,`PoHelperOptions `),ag(),Tl(1057,`code`,26),cN(1058,` string`),ag()(),Tl(1059,`td`,22),cN(1060,`-`),ag(),Tl(1061,`td`,23)(1062,`em`)(1063,`strong`),cN(1064,`(opcional)`),ag()(),Tl(1065,`p`),cN(1066,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(1067,`code`),cN(1068,`p-label`),ag(),cN(1069,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(1070,`code`),cN(1071,`p-label`),ag(),cN(1072,`.`),ag(),Tl(1073,`blockquote`)(1074,`p`),cN(1075,`Para mais informações acesse: `),Tl(1076,`a`,33),cN(1077,`https://po-ui.io/documentation/po-helper`),ag(),cN(1078,`.`),ag()(),Tl(1079,`blockquote`)(1080,`p`),cN(1081,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(1082,`code`),cN(1083,`p-additional-help-tooltip`),ag(),cN(1084,` e `),Tl(1085,`code`),cN(1086,`p-additional-help`),ag(),cN(1087,`) será ignorado.`),ag()()()(),Tl(1088,`tr`,15)(1089,`td`,16)(1090,`div`,24)(1091,`span`,25),cN(1092,`p-readonly`),Gl(1093,`br`),ag()()(),Tl(1094,`td`,20)(1095,`code`,27),cN(1096,`boolean`),ag()(),Tl(1097,`td`,22),cN(1098,`-`),ag(),Tl(1099,`td`,23)(1100,`em`)(1101,`strong`),cN(1102,`(opcional)`),ag()(),Tl(1103,`p`),cN(1104,`Indica que o campo será somente leitura.`),ag()()(),Tl(1105,`tr`,15)(1106,`td`,16)(1107,`div`,24)(1108,`span`,25),cN(1109,`p-required`),Gl(1110,`br`),ag()()(),Tl(1111,`td`,20)(1112,`code`,27),cN(1113,`boolean`),ag()(),Tl(1114,`td`,22)(1115,`p`)(1116,`code`),cN(1117,`false`),ag()()(),Tl(1118,`td`,23)(1119,`em`)(1120,`strong`),cN(1121,`(opcional)`),ag()(),Tl(1122,`p`),cN(1123,`Define que o campo será obrigatório.`),ag(),Tl(1124,`blockquote`)(1125,`p`),cN(1126,`Esta propriedade é desconsiderada quando o input está desabilitado `),Tl(1127,`code`),cN(1128,`(p-disabled)`),ag(),cN(1129,`.`),ag()()()(),Tl(1130,`tr`,15)(1131,`td`,16)(1132,`div`,24)(1133,`span`,25),cN(1134,` p-required-field-error-message`),Gl(1135,`br`),ag()()(),Tl(1136,`td`,20)(1137,`code`,27),cN(1138,`boolean`),ag()(),Tl(1139,`td`,22)(1140,`p`)(1141,`code`),cN(1142,`false`),ag()()(),Tl(1143,`td`,23)(1144,`em`)(1145,`strong`),cN(1146,`(opcional)`),ag()(),Tl(1147,`p`),cN(1148,`Exibe a mensagem setada na propriedade `),Tl(1149,`code`),cN(1150,`p-error-pattern`),ag(),cN(1151,` se o campo estiver vazio e for requerido.`),ag(),Tl(1152,`blockquote`)(1153,`p`),cN(1154,`Necessário que a propriedade `),Tl(1155,`code`),cN(1156,`p-required`),ag(),cN(1157,` esteja habilitada.`),ag()()()(),Tl(1158,`tr`,15)(1159,`td`,16)(1160,`div`,24)(1161,`span`,25),cN(1162,` p-show-required`),Gl(1163,`br`),ag()()(),Tl(1164,`td`,20)(1165,`code`,27),cN(1166,`boolean`),ag()(),Tl(1167,`td`,22),cN(1168,`-`),ag(),Tl(1169,`td`,23)(1170,`p`),cN(1171,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(1172,`blockquote`)(1173,`p`),cN(1174,`Não será exibida a indicação se:`),ag()(),Tl(1175,`ul`)(1176,`li`),cN(1177,`Não possuir `),Tl(1178,`code`),cN(1179,`p-help`),ag(),cN(1180,` e/ou `),Tl(1181,`code`),cN(1182,`p-label`),ag(),cN(1183,`.`),ag()()()(),Tl(1184,`tr`,15)(1185,`td`,16)(1186,`div`,24)(1187,`span`,25),cN(1188,` p-size`),Gl(1189,`br`),ag()()(),Tl(1190,`td`,20)(1191,`code`,26),cN(1192,`string`),ag()(),Tl(1193,`td`,22)(1194,`p`)(1195,`code`),cN(1196,`medium`),ag()()(),Tl(1197,`td`,23)(1198,`em`)(1199,`strong`),cN(1200,`(opcional)`),ag()(),Tl(1201,`p`),cN(1202,`Define o tamanho do componente:`),ag(),Tl(1203,`ul`)(1204,`li`)(1205,`code`),cN(1206,`small`),ag(),cN(1207,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(1208,`li`)(1209,`code`),cN(1210,`medium`),ag(),cN(1211,`: altura do input como 44px.`),ag()(),Tl(1212,`blockquote`)(1213,`p`),cN(1214,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(1215,`code`),cN(1216,`medium`),ag(),cN(1217,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1218,`a`,34),cN(1219,`po-theme`),ag(),cN(1220,`.`),ag()()()(),Tl(1221,`tr`,15)(1222,`td`,16)(1223,`div`,24)(1224,`span`,25),cN(1225,` p-upper-case`),Gl(1226,`br`),ag()()(),Tl(1227,`td`,20)(1228,`code`,27),cN(1229,`boolean`),ag()(),Tl(1230,`td`,22),cN(1231,`-`),ag(),Tl(1232,`td`,23)(1233,`p`),cN(1234,`Converte o conteúdo do campo em maiúsulo automaticamente.`),ag()()()(),Tl(1235,`h3`,11),cN(1236,`Métodos`),ag(),Tl(1237,`table`,35)(1238,`tr`,15)(1239,`th`,36)(1240,`div`,24)(1241,`h4`)(1242,`span`,25),cN(1243,` showAdditionalHelp `),ag()()()()(),Tl(1244,`tr`,23)(1245,`td`,23)(1246,`p`),cN(1247,`Método que exibe `),Tl(1248,`code`),cN(1249,`p-helper`),ag(),cN(1250,` ou executa a ação definida em `),Tl(1251,`code`),cN(1252,`p-helper{eventOnClick}`),ag(),cN(1253,` ou em `),Tl(1254,`code`),cN(1255,`p-additionalHelp`),ag(),cN(1256,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1257,`code`),cN(1258,`p-keydown`),ag(),cN(1259,`.`),ag(),Tl(1260,`blockquote`)(1261,`p`),cN(1262,`Exibe ou oculta o conteúdo do componente `),Tl(1263,`code`),cN(1264,`po-helper`),ag(),cN(1265,` quando o componente estiver com foco.`),ag()(),Tl(1266,`pre`)(1267,`code`),cN(1268,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ag()(),Tl(1269,`pre`)(1270,`code`),cN(1271,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(1272,`br`),Tl(1273,`table`,35)(1274,`tr`,15)(1275,`th`,36)(1276,`div`,24)(1277,`h4`)(1278,`span`,25),cN(1279,` focus `),ag()()()()(),Tl(1280,`tr`,23)(1281,`td`,23)(1282,`p`),cN(1283,`Função que atribui foco ao componente.`),ag(),Tl(1284,`p`),cN(1285,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(1286,`pre`)(1287,`code`),cN(1288,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ag()()()()(),Gl(1289,`br`),Tl(1290,`h3`),cN(1291,`Interfaces`),ag(),Tl(1292,`h4`,37)(1293,`code`,5),cN(1294,`ErrorAsyncProperties`),ag()(),Tl(1295,`div`,2)(1296,`p`),cN(1297,`Interface para realizar uma validação assíncrona no componente.`),ag()(),Tl(1298,`h4`,11),cN(1299,`Propriedades`),ag(),Tl(1300,`table`,12)(1301,`tr`,13)(1302,`th`,14),cN(1303,`Nome`),ag(),Tl(1304,`th`,14),cN(1305,`Tipo`),ag(),Tl(1306,`th`,14),cN(1307,`Descrição`),ag()(),Tl(1308,`tr`,15)(1309,`td`,16)(1310,`div`,24)(1311,`span`,25),cN(1312,` errorAsync`),Gl(1313,`br`),ag()()(),Tl(1314,`td`,20)(1315,`code`,38),cN(1316,`(value) => Observable<boolean>`),ag()(),Tl(1317,`td`,23)(1318,`p`),cN(1319,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(1320,`code`),cN(1321,`change`),ag(),cN(1322,` ou `),Tl(1323,`code`),cN(1324,`change-model`),ag(),cN(1325,`, dependendo do valor da propriedade `),Tl(1326,`code`),cN(1327,`triggerMode`),ag(),cN(1328,`.`),ag()()(),Tl(1329,`tr`,15)(1330,`td`,16)(1331,`div`,24)(1332,`span`,25),cN(1333,` triggerMode`),Gl(1334,`br`),ag()()(),Tl(1335,`td`,20)(1336,`code`,39),cN(1337,`'change' `),ag(),Tl(1338,`code`,40),cN(1339,` 'changeModel'`),ag()(),Tl(1340,`td`,23)(1341,`em`)(1342,`strong`),cN(1343,`(opcional)`),ag()(),Tl(1344,`p`),cN(1345,`Controla se o método será executado no disparo do output `),Tl(1346,`code`),cN(1347,`change`),ag(),cN(1348,` ou `),Tl(1349,`code`),cN(1350,`change-model`),ag(),cN(1351,`.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var Ue=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:9,vars:4,consts:[[`p-title`,`Input`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,o){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return o.changeTab(`doc`)}),Gl(3,`sample-po-input-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return o.changeTab(`web`)}),Gl(5,`sample-po-input-basic-view`)(6,`sample-po-input-labs-view`)(7,`sample-po-input-reactive-form-view`)(8,`sample-po-input-mask-dynamic-view`),ag()()()),l&2&&(nw(`p-actions`,o.actions),jp(2),nw(`p-active`,o.activeTab===`doc`),jp(2),nw(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,Ce,Me,we,Fe,De],encapsulation:2,changeDetection:1})}return a})()}];var Ie=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[bL.forChild(Ue),bL]})}return a})();var Dt=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,Ie]})}return a})();export{Dt as DocPoInputModule};