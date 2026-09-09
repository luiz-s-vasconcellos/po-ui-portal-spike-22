import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xr as Xn,Yn as Cn,_r as Ky,aa as uN,bt as W0e,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,lr as Gl,on as mCe,pa as w,pn as qH,r as Ga,rr as Ew,sa as ue,ui as a0,ut as S8e,va as yY,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var ie=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`email`,`p-label`,`PO Email`]],template:function(l,i){l&1&&Gl(0,`po-email`,0)},dependencies:[qH],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a});var ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Email Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-email-basic/sample-po-email-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-email name="email" p-label="PO Email"> </po-email>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-email-basic/sample-po-email-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-email-basic',
  templateUrl: './sample-po-email-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoEmailBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-email-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Ee,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,ie],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{helperText;email;errorPattern;event;help;label;maxlength;minlength;placeholder;properties;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}restore(){this.helperText=``,this.properties=[],this.label=void 0,this.help=void 0,this.errorPattern=``,this.placeholder=``,this.minlength=void 0,this.maxlength=void 0,this.email=``,this.event=``,this.size=`medium`}changeEvent(d){this.event=d}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-labs`]],standalone:!1,decls:19,vars:34,consts:[[`f`,`ngForm`],[`name`,`email`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-label-text-wrap`,`p-compact-label`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let p=Ax();Tl(0,`po-email`,1),ww(`ngModelChange`,function(r){return Ky(p),uN(i.email,r)||(i.email=r),Xy(r)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3)(4,`po-info`,4),ag(),Gl(5,`po-divider`),Tl(6,`form`,null,0)(8,`po-input`,5),ww(`ngModelChange`,function(r){return Ky(p),uN(i.label,r)||(i.label=r),Xy(r)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(r){return Ky(p),uN(i.help,r)||(i.help=r),Xy(r)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(r){return Ky(p),uN(i.helperText,r)||(i.helperText=r),Xy(r)}),ag(),a0(),Tl(11,`po-input`,8),ww(`ngModelChange`,function(r){return Ky(p),uN(i.placeholder,r)||(i.placeholder=r),Xy(r)}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(r){return Ky(p),uN(i.errorPattern,r)||(i.errorPattern=r),Xy(r)}),ag(),a0(),Tl(13,`po-number`,10),ww(`ngModelChange`,function(r){return Ky(p),uN(i.minlength,r)||(i.minlength=r),Xy(r)}),ag(),a0(),Tl(14,`po-number`,11),ww(`ngModelChange`,function(r){return Ky(p),uN(i.maxlength,r)||(i.maxlength=r),Xy(r)}),ag(),a0(),Tl(15,`po-checkbox-group`,12),ww(`ngModelChange`,function(r){return Ky(p),uN(i.properties,r)||(i.properties=r),Xy(r)}),ag(),a0(),Tl(16,`po-radio-group`,13),ww(`ngModelChange`,function(r){return Ky(p),uN(i.size,r)||(i.size=r),Xy(r)}),ag(),a0(),Tl(17,`div`,2)(18,`po-button`,14),ht(`p-click`,function(){return i.restore()}),ag()()()}l&2&&(Ew(`ngModel`,i.email),nw(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-maxlength`,i.maxlength)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-error-limit`,i.properties?.includes(`errorLimit`)),l0(),jp(3),nw(`p-value`,i.email),jp(),nw(`p-value`,i.event),jp(4),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.helperText),l0(),jp(),Ew(`ngModel`,i.placeholder),l0(),jp(),Ew(`ngModel`,i.errorPattern),l0(),jp(),Ew(`ngModel`,i.minlength),l0(),jp(),Ew(`ngModel`,i.maxlength),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,qH,iU,ube,L0e,ybe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a});var re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Email Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-email-labs/sample-po-email-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-email
  name="email"
  [(ngModel)]="email"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties?.includes('loading')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-email>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="email"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-email-labs/sample-po-email-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-email-labs',
  templateUrl: './sample-po-email-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoEmailLabsComponent implements OnInit {
  helperText: string;
  email: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  size: string;

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
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.helperText = '';
    this.properties = [];

    this.label = undefined;
    this.help = undefined;
    this.errorPattern = '';
    this.placeholder = '';

    this.minlength = undefined;
    this.maxlength = undefined;

    this.email = '';
    this.event = '';

    this.size = 'medium';
  }

  changeEvent(event: string) {
    this.event = event;
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-email-labs`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,be,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,le],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{poAlert=f(W0e);email=``;openDialog(){this.poAlert.alert({title:`Sent with success!`,message:`Ready Mr(s). ${this.getNameEmail()}, now you will get all the news from PO!`})}getNameEmail(){let d=this.email.indexOf(`@`);return this.email.substr(0,d).toLocaleUpperCase()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-newsletter`]],standalone:!1,decls:8,vars:2,consts:[[`f`,`ngForm`],[1,`po-lg-12`,`po-text-center`,`po-font-subtitle`],[1,`po-row`],[`name`,`email`,`p-clean`,``,`p-error-pattern`,`Invalid e-mail`,`p-label`,`Email`,`p-placeholder`,`Enter your e-mail`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Send`,`p-kind`,`primary`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(l,i){if(l&1){let p=Ax();Tl(0,`div`,1),cN(1,`Enter your email to receive PO news, be sure to participate.`),ag(),Tl(2,`form`,null,0)(4,`div`,2)(5,`po-email`,3),ww(`ngModelChange`,function(r){return Ky(p),uN(i.email,r)||(i.email=r),Xy(r)}),ag(),a0(),ag(),Tl(6,`div`,2)(7,`po-button`,4),ht(`p-click`,function(){return i.openDialog()}),ag()()()}if(l&2){let p=Bx(3);jp(5),Ew(`ngModel`,i.email),l0(),jp(2),nw(`p-disabled`,p.form.invalid)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,qH],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-newsletter-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Email - Newsletter`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-email-newsletter/sample-po-email-newsletter.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<div class="po-lg-12 po-text-center po-font-subtitle">Enter your email to receive PO news, be sure to participate.</div>

<form #f="ngForm">
  <div class="po-row">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-error-pattern="Invalid e-mail"
      p-label="Email"
      p-placeholder="Enter your e-mail"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Send" p-kind="primary" [p-disabled]="f.form.invalid" (p-click)="openDialog()">
    </po-button>
  </div>
</form>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-email-newsletter/sample-po-email-newsletter.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-email-newsletter',
  templateUrl: './sample-po-email-newsletter.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoEmailNewsletterComponent {
  private poAlert = inject(PoDialogService);

  email: string = '';

  openDialog() {
    this.poAlert.alert({
      title: 'Sent with success!',
      message: \`Ready Mr(s). \${this.getNameEmail()}, now you will get all the news from PO!\`
    });
  }

  private getNameEmail() {
    const index = this.email.indexOf('@');

    return this.email.substr(0, index).toLocaleUpperCase();
  }
}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-email-newsletter`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ve,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,me],encapsulation:2,changeDetection:1})}return a})();var pe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-doc`]],standalone:!1,decls:1357,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(l,i){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoEmailComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ag(),Tl(24,`p`),cN(25,`Importante:`),ag(),Tl(26,`ul`)(27,`li`),cN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ag()(),Tl(29,`h4`),cN(30,`Tokens customizáveis`),ag(),Tl(31,`p`),cN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Gl(33,`br`),cN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(35,`code`),cN(36,`.po-input`),ag()(),Tl(37,`blockquote`)(38,`p`),cN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Tl(40,`a`,6),cN(41,`Grid System`),ag(),cN(42,`.`),ag()(),Tl(43,`blockquote`)(44,`p`),cN(45,`Para maiores informações, acesse o guia `),Tl(46,`a`,7),cN(47,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(48,`.`),ag()(),Tl(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),cN(53,`Propriedade`),ag(),Tl(54,`th`),cN(55,`Descrição`),ag(),Tl(56,`th`),cN(57,`Valor Padrão`),ag()()(),Tl(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),cN(62,`Default Values`),ag()(),Gl(63,`td`)(64,`td`),ag(),Tl(65,`tr`)(66,`td`)(67,`code`),cN(68,`--font-family`),ag()(),Tl(69,`td`),cN(70,`Família tipográfica usada`),ag(),Tl(71,`td`)(72,`code`),cN(73,`var(--font-family-theme)`),ag()()(),Tl(74,`tr`)(75,`td`)(76,`code`),cN(77,`--font-size`),ag()(),Tl(78,`td`),cN(79,`Tamanho da fonte`),ag(),Tl(80,`td`)(81,`code`),cN(82,`var(--font-size-default)`),ag()()(),Tl(83,`tr`)(84,`td`)(85,`code`),cN(86,`--text-color-placeholder`),ag()(),Tl(87,`td`),cN(88,`Cor do texto placeholder`),ag(),Tl(89,`td`)(90,`code`),cN(91,`var(--color-neutral-light-30)`),ag()()(),Tl(92,`tr`)(93,`td`)(94,`code`),cN(95,`--color`),ag()(),Tl(96,`td`),cN(97,`Cor pincipal do input`),ag(),Tl(98,`td`)(99,`code`),cN(100,`var(--color-neutral-dark-70)`),ag()()(),Tl(101,`tr`)(102,`td`)(103,`code`),cN(104,`--background`),ag()(),Tl(105,`td`),cN(106,`Cor de background`),ag(),Tl(107,`td`)(108,`code`),cN(109,`var(--color-neutral-light-05)`),ag()()(),Tl(110,`tr`)(111,`td`)(112,`code`),cN(113,`--padding`),ag()(),Tl(114,`td`),cN(115,`Preenchimento`),ag(),Tl(116,`td`)(117,`code`),cN(118,`0 0.5rem`),ag()()(),Tl(119,`tr`)(120,`td`)(121,`code`),cN(122,`--text-color`),ag()(),Tl(123,`td`),cN(124,`Cor do texto`),ag(),Tl(125,`td`)(126,`code`),cN(127,`var(--color-neutral-dark-90)`),ag()()(),Tl(128,`tr`)(129,`td`)(130,`code`),cN(131,`--field-container-title-justify`),ag()(),Tl(132,`td`),cN(133,`Alinhamento horizontal do título (`),Tl(134,`code`),cN(135,`justify-content`),ag(),cN(136,`)`),ag(),Tl(137,`td`)(138,`code`),cN(139,`space-between`),ag()()(),Tl(140,`tr`)(141,`td`)(142,`code`),cN(143,`--field-container-title-flex`),ag()(),Tl(144,`td`),cN(145,`Flex do título (`),Tl(146,`code`),cN(147,`flex`),ag(),cN(148,`)`),ag(),Tl(149,`td`)(150,`code`),cN(151,`1 auto`),ag()()(),Tl(152,`tr`)(153,`td`)(154,`strong`),cN(155,`Hover`),ag()(),Gl(156,`td`)(157,`td`),ag(),Tl(158,`tr`)(159,`td`)(160,`code`),cN(161,`--color-hover`),ag()(),Tl(162,`td`),cN(163,`Cor principal no estado hover`),ag(),Tl(164,`td`)(165,`code`),cN(166,`var(--color-brand-01-dark)`),ag()()(),Tl(167,`tr`)(168,`td`)(169,`code`),cN(170,`--background-hover`),ag()(),Tl(171,`td`),cN(172,`Cor de background no estado hover`),ag(),Tl(173,`td`)(174,`code`),cN(175,`var(--color-brand-01-lightest)`),ag()()(),Tl(176,`tr`)(177,`td`)(178,`strong`),cN(179,`Focused`),ag()(),Gl(180,`td`)(181,`td`),ag(),Tl(182,`tr`)(183,`td`)(184,`code`),cN(185,`--color-focused`),ag()(),Tl(186,`td`),cN(187,`Cor principal no estado de focus`),ag(),Tl(188,`td`)(189,`code`),cN(190,`var(--color-action-default)`),ag()()(),Tl(191,`tr`)(192,`td`)(193,`code`),cN(194,`--outline-color-focused`),ag()(),Tl(195,`td`),cN(196,`Cor do outline do estado de focus`),ag(),Tl(197,`td`)(198,`code`),cN(199,`var(--color-action-focus)`),ag()()(),Tl(200,`tr`)(201,`td`)(202,`strong`),cN(203,`Disabled`),ag()(),Gl(204,`td`)(205,`td`),ag(),Tl(206,`tr`)(207,`td`)(208,`code`),cN(209,`--color-disabled`),ag()(),Tl(210,`td`),cN(211,`Cor principal no estado disabled`),ag(),Tl(212,`td`)(213,`code`),cN(214,`var(--color-neutral-light-30)`),ag()()(),Tl(215,`tr`)(216,`td`)(217,`code`),cN(218,`--background-disabled`),ag()(),Tl(219,`td`),cN(220,`Cor de background no estado disabled`),ag(),Tl(221,`td`)(222,`code`),cN(223,`var(--color-neutral-light-20)`),ag()()(),Tl(224,`tr`)(225,`td`)(226,`code`),cN(227,`--text-color-disabled`),ag()(),Tl(228,`td`),cN(229,`Cor do texto no estado disabled`),ag(),Tl(230,`td`)(231,`code`),cN(232,`var(--color-neutral-dark-70)`),ag()()()()(),Tl(233,`p`),Gl(234,`br`),cN(235,` O `),Tl(236,`code`),cN(237,`po-email`),ag(),cN(238,` é um input específico para receber E-mail, com o pattern já configurado.`),ag()(),Tl(239,`div`,8)(240,`h4`,9),cN(241,`Seletor`),ag(),Tl(242,`pre`,10),cN(243,`<po-email
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
</po-email>
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
leitura clara.`),ag()()(),Tl(772,`tr`,15)(773,`td`,16)(774,`div`,24)(775,`span`,25),cN(776,` p-loading`),Gl(777,`br`),ag()()(),Tl(778,`td`,20)(779,`code`,27),cN(780,`boolean`),ag()(),Tl(781,`td`,22)(782,`p`)(783,`code`),cN(784,`false`),ag()()(),Tl(785,`td`,23)(786,`em`)(787,`strong`),cN(788,`(opcional)`),ag()(),Tl(789,`p`),cN(790,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ag()()(),Tl(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),cN(795,`p-mask`),Gl(796,`br`),ag()()(),Tl(797,`td`,20)(798,`code`,26),cN(799,`string`),ag()(),Tl(800,`td`,22),cN(801,`-`),ag(),Tl(802,`td`,23)(803,`em`)(804,`strong`),cN(805,`(opcional)`),ag()(),Tl(806,`p`),cN(807,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),ag()()(),Tl(808,`tr`,15)(809,`td`,16)(810,`div`,24)(811,`span`,25),cN(812,`p-mask-format-model`),Gl(813,`br`),ag()()(),Tl(814,`td`,20)(815,`code`,27),cN(816,`boolean`),ag()(),Tl(817,`td`,22)(818,`p`)(819,`code`),cN(820,`false`),ag()()(),Tl(821,`td`,23)(822,`em`)(823,`strong`),cN(824,`(opcional)`),ag()(),Tl(825,`p`),cN(826,`Indica se o `),Tl(827,`code`),cN(828,`model`),ag(),cN(829,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),ag()()(),Tl(830,`tr`,15)(831,`td`,16)(832,`div`,24)(833,`span`,25),cN(834,` p-mask-no-length-validation`),Gl(835,`br`),ag()()(),Tl(836,`td`,20)(837,`code`,27),cN(838,`boolean`),ag()(),Tl(839,`td`,22)(840,`p`)(841,`code`),cN(842,`false`),ag()()(),Tl(843,`td`,23)(844,`p`),cN(845,`Controla como o componente aplica as validações de comprimento mínimo (`),Tl(846,`code`),cN(847,`minLength`),ag(),cN(848,`) e máximo (`),Tl(849,`code`),cN(850,`maxLength`),ag(),cN(851,`) quando há uma máscara (`),Tl(852,`code`),cN(853,`p-mask`),ag(),cN(854,`) definida.`),ag(),Tl(855,`ul`)(856,`li`),cN(857,`Quando `),Tl(858,`code`),cN(859,`true`),ag(),cN(860,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ag(),Tl(861,`li`),cN(862,`Quando `),Tl(863,`code`),cN(864,`false`),ag(),cN(865,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ag()(),Tl(866,`blockquote`)(867,`p`),cN(868,`Esta propriedade é ignorada quando utilizada em conjunto com `),Tl(869,`code`),cN(870,`p-mask-format-model`),ag(),cN(871,`.`),ag()(),Tl(872,`p`),cN(873,`Exemplo:`),ag(),Tl(874,`pre`)(875,`code`),cN(876,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ag()(),Tl(877,`ul`)(878,`li`),cN(879,`Entrada: `),Tl(880,`code`),cN(881,`123-456`),ag(),cN(882,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Tl(883,`code`),cN(884,`-`),ag(),cN(885,`.`),ag()()()(),Tl(886,`tr`,15)(887,`td`,16)(888,`div`,24)(889,`span`,25),cN(890,` p-maxlength`),Gl(891,`br`),ag()()(),Tl(892,`td`,20)(893,`code`,31),cN(894,`number`),ag()(),Tl(895,`td`,22),cN(896,`-`),ag(),Tl(897,`td`,23)(898,`em`)(899,`strong`),cN(900,`(opcional)`),ag()(),Tl(901,`p`),cN(902,`Indica a quantidade máxima de caracteres que o campo aceita.`),ag()()(),Tl(903,`tr`,15)(904,`td`,16)(905,`div`,24)(906,`span`,25),cN(907,` p-minlength`),Gl(908,`br`),ag()()(),Tl(909,`td`,20)(910,`code`,31),cN(911,`number`),ag()(),Tl(912,`td`,22),cN(913,`-`),ag(),Tl(914,`td`,23)(915,`em`)(916,`strong`),cN(917,`(opcional)`),ag()(),Tl(918,`p`),cN(919,`Indica a quantidade mínima de caracteres que o campo aceita.`),ag()()(),Tl(920,`tr`,15)(921,`td`,16)(922,`div`,24)(923,`span`,25),cN(924,` name`),Gl(925,`br`),ag()()(),Tl(926,`td`,20)(927,`code`,26),cN(928,`string`),ag()(),Tl(929,`td`,22),cN(930,`-`),ag(),Tl(931,`td`,23)(932,`p`),cN(933,`Nome e identificador do campo.`),ag()()(),Tl(934,`tr`,15)(935,`td`,16)(936,`div`,24)(937,`span`,25),cN(938,` p-no-autocomplete`),Gl(939,`br`),ag()()(),Tl(940,`td`,20)(941,`code`,27),cN(942,`boolean`),ag()(),Tl(943,`td`,22)(944,`p`)(945,`code`),cN(946,`false`),ag()()(),Tl(947,`td`,23)(948,`em`)(949,`strong`),cN(950,`(opcional)`),ag()(),Tl(951,`p`),cN(952,`Define a propriedade nativa `),Tl(953,`code`),cN(954,`autocomplete`),ag(),cN(955,` do campo como `),Tl(956,`code`),cN(957,`off`),ag(),cN(958,`.`),ag(),Tl(959,`blockquote`)(960,`p`),cN(961,`No componente `),Tl(962,`code`),cN(963,`po-password`),ag(),cN(964,` será definido como `),Tl(965,`code`),cN(966,`new-password`),ag(),cN(967,`.`),ag()(),Tl(968,`p`),cN(969,`Nos componentes `),Tl(970,`code`),cN(971,`po-password`),ag(),cN(972,` e `),Tl(973,`code`),cN(974,`po-login`),ag(),cN(975,` o valor padrão será `),Tl(976,`code`),cN(977,`true`),ag(),cN(978,`.`),ag()()(),Tl(979,`tr`,15)(980,`td`,16)(981,`div`,24)(982,`span`,25),cN(983,` p-optional`),Gl(984,`br`),ag()()(),Tl(985,`td`,20)(986,`code`,27),cN(987,`boolean`),ag()(),Tl(988,`td`,22)(989,`p`)(990,`code`),cN(991,`false`),ag()()(),Tl(992,`td`,23)(993,`em`)(994,`strong`),cN(995,`(opcional)`),ag()(),Tl(996,`p`),cN(997,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(998,`blockquote`)(999,`p`),cN(1e3,`Não será exibida a indicação se:`),ag()(),Tl(1001,`ul`)(1002,`li`),cN(1003,`O campo conter `),Tl(1004,`code`),cN(1005,`p-required`),ag(),cN(1006,`;`),ag(),Tl(1007,`li`),cN(1008,`Não possuir `),Tl(1009,`code`),cN(1010,`p-help`),ag(),cN(1011,` e/ou `),Tl(1012,`code`),cN(1013,`p-label`),ag(),cN(1014,`.`),ag()()()(),Tl(1015,`tr`,15)(1016,`td`,16)(1017,`div`,24)(1018,`span`,25),cN(1019,`p-pattern`),Gl(1020,`br`),ag()()(),Tl(1021,`td`,20)(1022,`code`,26),cN(1023,`string`),ag()(),Tl(1024,`td`,22),cN(1025,`-`),ag(),Tl(1026,`td`,23)(1027,`em`)(1028,`strong`),cN(1029,`(opcional)`),ag()(),Tl(1030,`p`),cN(1031,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Tl(1032,`code`),cN(1033,`(p-mask)`),ag(),cN(1034,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ag()()(),Tl(1035,`tr`,15)(1036,`td`,16)(1037,`div`,24)(1038,`span`,25),cN(1039,` p-placeholder`),Gl(1040,`br`),ag()()(),Tl(1041,`td`,20)(1042,`code`,26),cN(1043,`string`),ag()(),Tl(1044,`td`,22)(1045,`p`),cN(1046,`''`),ag()(),Tl(1047,`td`,23)(1048,`em`)(1049,`strong`),cN(1050,`(opcional)`),ag()(),Tl(1051,`p`),cN(1052,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ag()()(),Tl(1053,`tr`,15)(1054,`td`,16)(1055,`div`,24)(1056,`span`,25),cN(1057,` p-helper`),Gl(1058,`br`),ag()()(),Tl(1059,`td`,20)(1060,`code`,32),cN(1061,`PoHelperOptions `),ag(),Tl(1062,`code`,26),cN(1063,` string`),ag()(),Tl(1064,`td`,22),cN(1065,`-`),ag(),Tl(1066,`td`,23)(1067,`em`)(1068,`strong`),cN(1069,`(opcional)`),ag()(),Tl(1070,`p`),cN(1071,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(1072,`code`),cN(1073,`p-label`),ag(),cN(1074,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(1075,`code`),cN(1076,`p-label`),ag(),cN(1077,`.`),ag(),Tl(1078,`blockquote`)(1079,`p`),cN(1080,`Para mais informações acesse: `),Tl(1081,`a`,33),cN(1082,`https://po-ui.io/documentation/po-helper`),ag(),cN(1083,`.`),ag()(),Tl(1084,`blockquote`)(1085,`p`),cN(1086,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(1087,`code`),cN(1088,`p-additional-help-tooltip`),ag(),cN(1089,` e `),Tl(1090,`code`),cN(1091,`p-additional-help`),ag(),cN(1092,`) será ignorado.`),ag()()()(),Tl(1093,`tr`,15)(1094,`td`,16)(1095,`div`,24)(1096,`span`,25),cN(1097,`p-readonly`),Gl(1098,`br`),ag()()(),Tl(1099,`td`,20)(1100,`code`,27),cN(1101,`boolean`),ag()(),Tl(1102,`td`,22),cN(1103,`-`),ag(),Tl(1104,`td`,23)(1105,`em`)(1106,`strong`),cN(1107,`(opcional)`),ag()(),Tl(1108,`p`),cN(1109,`Indica que o campo será somente leitura.`),ag()()(),Tl(1110,`tr`,15)(1111,`td`,16)(1112,`div`,24)(1113,`span`,25),cN(1114,`p-required`),Gl(1115,`br`),ag()()(),Tl(1116,`td`,20)(1117,`code`,27),cN(1118,`boolean`),ag()(),Tl(1119,`td`,22)(1120,`p`)(1121,`code`),cN(1122,`false`),ag()()(),Tl(1123,`td`,23)(1124,`em`)(1125,`strong`),cN(1126,`(opcional)`),ag()(),Tl(1127,`p`),cN(1128,`Define que o campo será obrigatório.`),ag(),Tl(1129,`blockquote`)(1130,`p`),cN(1131,`Esta propriedade é desconsiderada quando o input está desabilitado `),Tl(1132,`code`),cN(1133,`(p-disabled)`),ag(),cN(1134,`.`),ag()()()(),Tl(1135,`tr`,15)(1136,`td`,16)(1137,`div`,24)(1138,`span`,25),cN(1139,` p-required-field-error-message`),Gl(1140,`br`),ag()()(),Tl(1141,`td`,20)(1142,`code`,27),cN(1143,`boolean`),ag()(),Tl(1144,`td`,22)(1145,`p`)(1146,`code`),cN(1147,`false`),ag()()(),Tl(1148,`td`,23)(1149,`em`)(1150,`strong`),cN(1151,`(opcional)`),ag()(),Tl(1152,`p`),cN(1153,`Exibe a mensagem setada na propriedade `),Tl(1154,`code`),cN(1155,`p-error-pattern`),ag(),cN(1156,` se o campo estiver vazio e for requerido.`),ag(),Tl(1157,`blockquote`)(1158,`p`),cN(1159,`Necessário que a propriedade `),Tl(1160,`code`),cN(1161,`p-required`),ag(),cN(1162,` esteja habilitada.`),ag()()()(),Tl(1163,`tr`,15)(1164,`td`,16)(1165,`div`,24)(1166,`span`,25),cN(1167,` p-show-required`),Gl(1168,`br`),ag()()(),Tl(1169,`td`,20)(1170,`code`,27),cN(1171,`boolean`),ag()(),Tl(1172,`td`,22),cN(1173,`-`),ag(),Tl(1174,`td`,23)(1175,`p`),cN(1176,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(1177,`blockquote`)(1178,`p`),cN(1179,`Não será exibida a indicação se:`),ag()(),Tl(1180,`ul`)(1181,`li`),cN(1182,`Não possuir `),Tl(1183,`code`),cN(1184,`p-help`),ag(),cN(1185,` e/ou `),Tl(1186,`code`),cN(1187,`p-label`),ag(),cN(1188,`.`),ag()()()(),Tl(1189,`tr`,15)(1190,`td`,16)(1191,`div`,24)(1192,`span`,25),cN(1193,` p-size`),Gl(1194,`br`),ag()()(),Tl(1195,`td`,20)(1196,`code`,26),cN(1197,`string`),ag()(),Tl(1198,`td`,22)(1199,`p`)(1200,`code`),cN(1201,`medium`),ag()()(),Tl(1202,`td`,23)(1203,`em`)(1204,`strong`),cN(1205,`(opcional)`),ag()(),Tl(1206,`p`),cN(1207,`Define o tamanho do componente:`),ag(),Tl(1208,`ul`)(1209,`li`)(1210,`code`),cN(1211,`small`),ag(),cN(1212,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(1213,`li`)(1214,`code`),cN(1215,`medium`),ag(),cN(1216,`: altura do input como 44px.`),ag()(),Tl(1217,`blockquote`)(1218,`p`),cN(1219,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(1220,`code`),cN(1221,`medium`),ag(),cN(1222,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1223,`a`,34),cN(1224,`po-theme`),ag(),cN(1225,`.`),ag()()()(),Tl(1226,`tr`,15)(1227,`td`,16)(1228,`div`,24)(1229,`span`,25),cN(1230,` p-upper-case`),Gl(1231,`br`),ag()()(),Tl(1232,`td`,20)(1233,`code`,27),cN(1234,`boolean`),ag()(),Tl(1235,`td`,22),cN(1236,`-`),ag(),Tl(1237,`td`,23)(1238,`p`),cN(1239,`Converte o conteúdo do campo em maiúsulo automaticamente.`),ag()()()(),Tl(1240,`h3`,11),cN(1241,`Métodos`),ag(),Tl(1242,`table`,35)(1243,`tr`,15)(1244,`th`,36)(1245,`div`,24)(1246,`h4`)(1247,`span`,25),cN(1248,` showAdditionalHelp `),ag()()()()(),Tl(1249,`tr`,23)(1250,`td`,23)(1251,`p`),cN(1252,`Método que exibe `),Tl(1253,`code`),cN(1254,`p-helper`),ag(),cN(1255,` ou executa a ação definida em `),Tl(1256,`code`),cN(1257,`p-helper{eventOnClick}`),ag(),cN(1258,` ou em `),Tl(1259,`code`),cN(1260,`p-additionalHelp`),ag(),cN(1261,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1262,`code`),cN(1263,`p-keydown`),ag(),cN(1264,`.`),ag(),Tl(1265,`blockquote`)(1266,`p`),cN(1267,`Exibe ou oculta o conteúdo do componente `),Tl(1268,`code`),cN(1269,`po-helper`),ag(),cN(1270,` quando o componente estiver com foco.`),ag()(),Tl(1271,`pre`)(1272,`code`),cN(1273,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ag()(),Tl(1274,`pre`)(1275,`code`),cN(1276,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(1277,`br`),Tl(1278,`table`,35)(1279,`tr`,15)(1280,`th`,36)(1281,`div`,24)(1282,`h4`)(1283,`span`,25),cN(1284,` focus `),ag()()()()(),Tl(1285,`tr`,23)(1286,`td`,23)(1287,`p`),cN(1288,`Função que atribui foco ao componente.`),ag(),Tl(1289,`p`),cN(1290,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(1291,`pre`)(1292,`code`),cN(1293,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ag()()()()(),Gl(1294,`br`),Tl(1295,`h3`),cN(1296,`Interfaces`),ag(),Tl(1297,`h4`,37)(1298,`code`,5),cN(1299,`ErrorAsyncProperties`),ag()(),Tl(1300,`div`,2)(1301,`p`),cN(1302,`Interface para realizar uma validação assíncrona no componente.`),ag()(),Tl(1303,`h4`,11),cN(1304,`Propriedades`),ag(),Tl(1305,`table`,12)(1306,`tr`,13)(1307,`th`,14),cN(1308,`Nome`),ag(),Tl(1309,`th`,14),cN(1310,`Tipo`),ag(),Tl(1311,`th`,14),cN(1312,`Descrição`),ag()(),Tl(1313,`tr`,15)(1314,`td`,16)(1315,`div`,24)(1316,`span`,25),cN(1317,` errorAsync`),Gl(1318,`br`),ag()()(),Tl(1319,`td`,20)(1320,`code`,38),cN(1321,`(value) => Observable<boolean>`),ag()(),Tl(1322,`td`,23)(1323,`p`),cN(1324,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(1325,`code`),cN(1326,`change`),ag(),cN(1327,` ou `),Tl(1328,`code`),cN(1329,`change-model`),ag(),cN(1330,`, dependendo do valor da propriedade `),Tl(1331,`code`),cN(1332,`triggerMode`),ag(),cN(1333,`.`),ag()()(),Tl(1334,`tr`,15)(1335,`td`,16)(1336,`div`,24)(1337,`span`,25),cN(1338,` triggerMode`),Gl(1339,`br`),ag()()(),Tl(1340,`td`,20)(1341,`code`,39),cN(1342,`'change' `),ag(),Tl(1343,`code`,40),cN(1344,` 'changeModel'`),ag()(),Tl(1345,`td`,23)(1346,`em`)(1347,`strong`),cN(1348,`(opcional)`),ag()(),Tl(1349,`p`),cN(1350,`Controla se o método será executado no disparo do output `),Tl(1351,`code`),cN(1352,`change`),ag(),cN(1353,` ou `),Tl(1354,`code`),cN(1355,`change-model`),ag(),cN(1356,`.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var we=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Email`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-email-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-email-basic-view`)(6,`sample-po-email-labs-view`)(7,`sample-po-email-newsletter-view`),ag()()()),l&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,ae,re,de,pe],encapsulation:2,changeDetection:1})}return a})()}];var ce=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[bL.forChild(we),bL]})}return a})();var Ze=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,ce]})}return a})();export{Ze as DocPoEmailModule};