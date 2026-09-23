import{$r as Vx,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Jt as e_e,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,X as KH,Xn as Cn,Yi as mN,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var ie=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`email`,`p-label`,`PO Email`]],template:function(l,i){l&1&&ql(0,`po-email`,0)},dependencies:[KH],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a});var ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Email Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-email-basic/sample-po-email-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-email name="email" p-label="PO Email"> </po-email>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-email-basic/sample-po-email-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-email-basic',
  templateUrl: './sample-po-email-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoEmailBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-email-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Ee,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,ie],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{helperText;email;errorPattern;event;help;label;maxlength;minlength;placeholder;properties;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}restore(){this.helperText=``,this.properties=[],this.label=void 0,this.help=void 0,this.errorPattern=``,this.placeholder=``,this.minlength=void 0,this.maxlength=void 0,this.email=``,this.event=``,this.size=`medium`}changeEvent(d){this.event=d}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-labs`]],standalone:!1,decls:19,vars:34,consts:[[`f`,`ngForm`],[`name`,`email`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-label-text-wrap`,`p-compact-label`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let p=Vx();Ml(0,`po-email`,1),Mw(`ngModelChange`,function(r){return Qy(p),yN(i.email,r)||(i.email=r),Jy(r)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3)(4,`po-info`,4),lg(),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`po-input`,5),Mw(`ngModelChange`,function(r){return Qy(p),yN(i.label,r)||(i.label=r),Jy(r)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(r){return Qy(p),yN(i.help,r)||(i.help=r),Jy(r)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(r){return Qy(p),yN(i.helperText,r)||(i.helperText=r),Jy(r)}),lg(),f0(),Ml(11,`po-input`,8),Mw(`ngModelChange`,function(r){return Qy(p),yN(i.placeholder,r)||(i.placeholder=r),Jy(r)}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(r){return Qy(p),yN(i.errorPattern,r)||(i.errorPattern=r),Jy(r)}),lg(),f0(),Ml(13,`po-number`,10),Mw(`ngModelChange`,function(r){return Qy(p),yN(i.minlength,r)||(i.minlength=r),Jy(r)}),lg(),f0(),Ml(14,`po-number`,11),Mw(`ngModelChange`,function(r){return Qy(p),yN(i.maxlength,r)||(i.maxlength=r),Jy(r)}),lg(),f0(),Ml(15,`po-checkbox-group`,12),Mw(`ngModelChange`,function(r){return Qy(p),yN(i.properties,r)||(i.properties=r),Jy(r)}),lg(),f0(),Ml(16,`po-radio-group`,13),Mw(`ngModelChange`,function(r){return Qy(p),yN(i.size,r)||(i.size=r),Jy(r)}),lg(),f0(),Ml(17,`div`,2)(18,`po-button`,14),ht(`p-click`,function(){return i.restore()}),lg()()()}l&2&&(Tw(`ngModel`,i.email),cw(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-maxlength`,i.maxlength)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-error-limit`,i.properties?.includes(`errorLimit`)),p0(),Up(3),cw(`p-value`,i.email),Up(),cw(`p-value`,i.event),Up(4),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.helperText),p0(),Up(),Tw(`ngModel`,i.placeholder),p0(),Up(),Tw(`ngModel`,i.errorPattern),p0(),Up(),Tw(`ngModel`,i.minlength),p0(),Up(),Tw(`ngModel`,i.maxlength),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,KH,lU,xbe,q0e,kbe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a});var re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Email Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-email-labs/sample-po-email-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-email
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-email-labs/sample-po-email-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-email-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,be,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,le],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{poAlert=f(e_e);email=``;openDialog(){this.poAlert.alert({title:`Sent with success!`,message:`Ready Mr(s). ${this.getNameEmail()}, now you will get all the news from PO!`})}getNameEmail(){let d=this.email.indexOf(`@`);return this.email.substr(0,d).toLocaleUpperCase()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-newsletter`]],standalone:!1,decls:8,vars:2,consts:[[`f`,`ngForm`],[1,`po-lg-12`,`po-text-center`,`po-font-subtitle`],[1,`po-row`],[`name`,`email`,`p-clean`,``,`p-error-pattern`,`Invalid e-mail`,`p-label`,`Email`,`p-placeholder`,`Enter your e-mail`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Send`,`p-kind`,`primary`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(l,i){if(l&1){let p=Vx();Ml(0,`div`,1),mN(1,`Enter your email to receive PO news, be sure to participate.`),lg(),Ml(2,`form`,null,0)(4,`div`,2)(5,`po-email`,3),Mw(`ngModelChange`,function(r){return Qy(p),yN(i.email,r)||(i.email=r),Jy(r)}),lg(),f0(),lg(),Ml(6,`div`,2)(7,`po-button`,4),ht(`p-click`,function(){return i.openDialog()}),lg()()()}if(l&2){let p=Yx(3);Up(5),Tw(`ngModel`,i.email),p0(),Up(2),cw(`p-disabled`,p.form.invalid)}},dependencies:[IY,wY,CY,Vk,kk,Zt,KH],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-newsletter-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Email - Newsletter`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-email-newsletter/sample-po-email-newsletter.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<div class="po-lg-12 po-text-center po-font-subtitle">Enter your email to receive PO news, be sure to participate.</div>

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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-email-newsletter/sample-po-email-newsletter.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-email-newsletter`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ve,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,me],encapsulation:2,changeDetection:1})}return a})();var pe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-email-doc`]],standalone:!1,decls:1357,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(l,i){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoEmailComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),lg(),Ml(24,`p`),mN(25,`Importante:`),lg(),Ml(26,`ul`)(27,`li`),mN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),lg()(),Ml(29,`h4`),mN(30,`Tokens customizáveis`),lg(),Ml(31,`p`),mN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),ql(33,`br`),mN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ml(35,`code`),mN(36,`.po-input`),lg()(),Ml(37,`blockquote`)(38,`p`),mN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Ml(40,`a`,6),mN(41,`Grid System`),lg(),mN(42,`.`),lg()(),Ml(43,`blockquote`)(44,`p`),mN(45,`Para maiores informações, acesse o guia `),Ml(46,`a`,7),mN(47,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(48,`.`),lg()(),Ml(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),mN(53,`Propriedade`),lg(),Ml(54,`th`),mN(55,`Descrição`),lg(),Ml(56,`th`),mN(57,`Valor Padrão`),lg()()(),Ml(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),mN(62,`Default Values`),lg()(),ql(63,`td`)(64,`td`),lg(),Ml(65,`tr`)(66,`td`)(67,`code`),mN(68,`--font-family`),lg()(),Ml(69,`td`),mN(70,`Família tipográfica usada`),lg(),Ml(71,`td`)(72,`code`),mN(73,`var(--font-family-theme)`),lg()()(),Ml(74,`tr`)(75,`td`)(76,`code`),mN(77,`--font-size`),lg()(),Ml(78,`td`),mN(79,`Tamanho da fonte`),lg(),Ml(80,`td`)(81,`code`),mN(82,`var(--font-size-default)`),lg()()(),Ml(83,`tr`)(84,`td`)(85,`code`),mN(86,`--text-color-placeholder`),lg()(),Ml(87,`td`),mN(88,`Cor do texto placeholder`),lg(),Ml(89,`td`)(90,`code`),mN(91,`var(--color-neutral-light-30)`),lg()()(),Ml(92,`tr`)(93,`td`)(94,`code`),mN(95,`--color`),lg()(),Ml(96,`td`),mN(97,`Cor pincipal do input`),lg(),Ml(98,`td`)(99,`code`),mN(100,`var(--color-neutral-dark-70)`),lg()()(),Ml(101,`tr`)(102,`td`)(103,`code`),mN(104,`--background`),lg()(),Ml(105,`td`),mN(106,`Cor de background`),lg(),Ml(107,`td`)(108,`code`),mN(109,`var(--color-neutral-light-05)`),lg()()(),Ml(110,`tr`)(111,`td`)(112,`code`),mN(113,`--padding`),lg()(),Ml(114,`td`),mN(115,`Preenchimento`),lg(),Ml(116,`td`)(117,`code`),mN(118,`0 0.5rem`),lg()()(),Ml(119,`tr`)(120,`td`)(121,`code`),mN(122,`--text-color`),lg()(),Ml(123,`td`),mN(124,`Cor do texto`),lg(),Ml(125,`td`)(126,`code`),mN(127,`var(--color-neutral-dark-90)`),lg()()(),Ml(128,`tr`)(129,`td`)(130,`code`),mN(131,`--field-container-title-justify`),lg()(),Ml(132,`td`),mN(133,`Alinhamento horizontal do título (`),Ml(134,`code`),mN(135,`justify-content`),lg(),mN(136,`)`),lg(),Ml(137,`td`)(138,`code`),mN(139,`space-between`),lg()()(),Ml(140,`tr`)(141,`td`)(142,`code`),mN(143,`--field-container-title-flex`),lg()(),Ml(144,`td`),mN(145,`Flex do título (`),Ml(146,`code`),mN(147,`flex`),lg(),mN(148,`)`),lg(),Ml(149,`td`)(150,`code`),mN(151,`1 auto`),lg()()(),Ml(152,`tr`)(153,`td`)(154,`strong`),mN(155,`Hover`),lg()(),ql(156,`td`)(157,`td`),lg(),Ml(158,`tr`)(159,`td`)(160,`code`),mN(161,`--color-hover`),lg()(),Ml(162,`td`),mN(163,`Cor principal no estado hover`),lg(),Ml(164,`td`)(165,`code`),mN(166,`var(--color-brand-01-dark)`),lg()()(),Ml(167,`tr`)(168,`td`)(169,`code`),mN(170,`--background-hover`),lg()(),Ml(171,`td`),mN(172,`Cor de background no estado hover`),lg(),Ml(173,`td`)(174,`code`),mN(175,`var(--color-brand-01-lightest)`),lg()()(),Ml(176,`tr`)(177,`td`)(178,`strong`),mN(179,`Focused`),lg()(),ql(180,`td`)(181,`td`),lg(),Ml(182,`tr`)(183,`td`)(184,`code`),mN(185,`--color-focused`),lg()(),Ml(186,`td`),mN(187,`Cor principal no estado de focus`),lg(),Ml(188,`td`)(189,`code`),mN(190,`var(--color-action-default)`),lg()()(),Ml(191,`tr`)(192,`td`)(193,`code`),mN(194,`--outline-color-focused`),lg()(),Ml(195,`td`),mN(196,`Cor do outline do estado de focus`),lg(),Ml(197,`td`)(198,`code`),mN(199,`var(--color-action-focus)`),lg()()(),Ml(200,`tr`)(201,`td`)(202,`strong`),mN(203,`Disabled`),lg()(),ql(204,`td`)(205,`td`),lg(),Ml(206,`tr`)(207,`td`)(208,`code`),mN(209,`--color-disabled`),lg()(),Ml(210,`td`),mN(211,`Cor principal no estado disabled`),lg(),Ml(212,`td`)(213,`code`),mN(214,`var(--color-neutral-light-30)`),lg()()(),Ml(215,`tr`)(216,`td`)(217,`code`),mN(218,`--background-disabled`),lg()(),Ml(219,`td`),mN(220,`Cor de background no estado disabled`),lg(),Ml(221,`td`)(222,`code`),mN(223,`var(--color-neutral-light-20)`),lg()()(),Ml(224,`tr`)(225,`td`)(226,`code`),mN(227,`--text-color-disabled`),lg()(),Ml(228,`td`),mN(229,`Cor do texto no estado disabled`),lg(),Ml(230,`td`)(231,`code`),mN(232,`var(--color-neutral-dark-70)`),lg()()()()(),Ml(233,`p`),ql(234,`br`),mN(235,` O `),Ml(236,`code`),mN(237,`po-email`),lg(),mN(238,` é um input específico para receber E-mail, com o pattern já configurado.`),lg()(),Ml(239,`div`,8)(240,`h4`,9),mN(241,`Seletor`),lg(),Ml(242,`pre`,10),mN(243,`<po-email
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
leitura clara.`),lg()()(),Ml(772,`tr`,15)(773,`td`,16)(774,`div`,24)(775,`span`,25),mN(776,` p-loading`),ql(777,`br`),lg()()(),Ml(778,`td`,20)(779,`code`,27),mN(780,`boolean`),lg()(),Ml(781,`td`,22)(782,`p`)(783,`code`),mN(784,`false`),lg()()(),Ml(785,`td`,23)(786,`em`)(787,`strong`),mN(788,`(opcional)`),lg()(),Ml(789,`p`),mN(790,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),lg()()(),Ml(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),mN(795,`p-mask`),ql(796,`br`),lg()()(),Ml(797,`td`,20)(798,`code`,26),mN(799,`string`),lg()(),Ml(800,`td`,22),mN(801,`-`),lg(),Ml(802,`td`,23)(803,`em`)(804,`strong`),mN(805,`(opcional)`),lg()(),Ml(806,`p`),mN(807,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),lg()()(),Ml(808,`tr`,15)(809,`td`,16)(810,`div`,24)(811,`span`,25),mN(812,`p-mask-format-model`),ql(813,`br`),lg()()(),Ml(814,`td`,20)(815,`code`,27),mN(816,`boolean`),lg()(),Ml(817,`td`,22)(818,`p`)(819,`code`),mN(820,`false`),lg()()(),Ml(821,`td`,23)(822,`em`)(823,`strong`),mN(824,`(opcional)`),lg()(),Ml(825,`p`),mN(826,`Indica se o `),Ml(827,`code`),mN(828,`model`),lg(),mN(829,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),lg()()(),Ml(830,`tr`,15)(831,`td`,16)(832,`div`,24)(833,`span`,25),mN(834,` p-mask-no-length-validation`),ql(835,`br`),lg()()(),Ml(836,`td`,20)(837,`code`,27),mN(838,`boolean`),lg()(),Ml(839,`td`,22)(840,`p`)(841,`code`),mN(842,`false`),lg()()(),Ml(843,`td`,23)(844,`p`),mN(845,`Controla como o componente aplica as validações de comprimento mínimo (`),Ml(846,`code`),mN(847,`minLength`),lg(),mN(848,`) e máximo (`),Ml(849,`code`),mN(850,`maxLength`),lg(),mN(851,`) quando há uma máscara (`),Ml(852,`code`),mN(853,`p-mask`),lg(),mN(854,`) definida.`),lg(),Ml(855,`ul`)(856,`li`),mN(857,`Quando `),Ml(858,`code`),mN(859,`true`),lg(),mN(860,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),lg(),Ml(861,`li`),mN(862,`Quando `),Ml(863,`code`),mN(864,`false`),lg(),mN(865,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),lg()(),Ml(866,`blockquote`)(867,`p`),mN(868,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ml(869,`code`),mN(870,`p-mask-format-model`),lg(),mN(871,`.`),lg()(),Ml(872,`p`),mN(873,`Exemplo:`),lg(),Ml(874,`pre`)(875,`code`),mN(876,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),lg()(),Ml(877,`ul`)(878,`li`),mN(879,`Entrada: `),Ml(880,`code`),mN(881,`123-456`),lg(),mN(882,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Ml(883,`code`),mN(884,`-`),lg(),mN(885,`.`),lg()()()(),Ml(886,`tr`,15)(887,`td`,16)(888,`div`,24)(889,`span`,25),mN(890,` p-maxlength`),ql(891,`br`),lg()()(),Ml(892,`td`,20)(893,`code`,31),mN(894,`number`),lg()(),Ml(895,`td`,22),mN(896,`-`),lg(),Ml(897,`td`,23)(898,`em`)(899,`strong`),mN(900,`(opcional)`),lg()(),Ml(901,`p`),mN(902,`Indica a quantidade máxima de caracteres que o campo aceita.`),lg()()(),Ml(903,`tr`,15)(904,`td`,16)(905,`div`,24)(906,`span`,25),mN(907,` p-minlength`),ql(908,`br`),lg()()(),Ml(909,`td`,20)(910,`code`,31),mN(911,`number`),lg()(),Ml(912,`td`,22),mN(913,`-`),lg(),Ml(914,`td`,23)(915,`em`)(916,`strong`),mN(917,`(opcional)`),lg()(),Ml(918,`p`),mN(919,`Indica a quantidade mínima de caracteres que o campo aceita.`),lg()()(),Ml(920,`tr`,15)(921,`td`,16)(922,`div`,24)(923,`span`,25),mN(924,` name`),ql(925,`br`),lg()()(),Ml(926,`td`,20)(927,`code`,26),mN(928,`string`),lg()(),Ml(929,`td`,22),mN(930,`-`),lg(),Ml(931,`td`,23)(932,`p`),mN(933,`Nome e identificador do campo.`),lg()()(),Ml(934,`tr`,15)(935,`td`,16)(936,`div`,24)(937,`span`,25),mN(938,` p-no-autocomplete`),ql(939,`br`),lg()()(),Ml(940,`td`,20)(941,`code`,27),mN(942,`boolean`),lg()(),Ml(943,`td`,22)(944,`p`)(945,`code`),mN(946,`false`),lg()()(),Ml(947,`td`,23)(948,`em`)(949,`strong`),mN(950,`(opcional)`),lg()(),Ml(951,`p`),mN(952,`Define a propriedade nativa `),Ml(953,`code`),mN(954,`autocomplete`),lg(),mN(955,` do campo como `),Ml(956,`code`),mN(957,`off`),lg(),mN(958,`.`),lg(),Ml(959,`blockquote`)(960,`p`),mN(961,`No componente `),Ml(962,`code`),mN(963,`po-password`),lg(),mN(964,` será definido como `),Ml(965,`code`),mN(966,`new-password`),lg(),mN(967,`.`),lg()(),Ml(968,`p`),mN(969,`Nos componentes `),Ml(970,`code`),mN(971,`po-password`),lg(),mN(972,` e `),Ml(973,`code`),mN(974,`po-login`),lg(),mN(975,` o valor padrão será `),Ml(976,`code`),mN(977,`true`),lg(),mN(978,`.`),lg()()(),Ml(979,`tr`,15)(980,`td`,16)(981,`div`,24)(982,`span`,25),mN(983,` p-optional`),ql(984,`br`),lg()()(),Ml(985,`td`,20)(986,`code`,27),mN(987,`boolean`),lg()(),Ml(988,`td`,22)(989,`p`)(990,`code`),mN(991,`false`),lg()()(),Ml(992,`td`,23)(993,`em`)(994,`strong`),mN(995,`(opcional)`),lg()(),Ml(996,`p`),mN(997,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(998,`blockquote`)(999,`p`),mN(1e3,`Não será exibida a indicação se:`),lg()(),Ml(1001,`ul`)(1002,`li`),mN(1003,`O campo conter `),Ml(1004,`code`),mN(1005,`p-required`),lg(),mN(1006,`;`),lg(),Ml(1007,`li`),mN(1008,`Não possuir `),Ml(1009,`code`),mN(1010,`p-help`),lg(),mN(1011,` e/ou `),Ml(1012,`code`),mN(1013,`p-label`),lg(),mN(1014,`.`),lg()()()(),Ml(1015,`tr`,15)(1016,`td`,16)(1017,`div`,24)(1018,`span`,25),mN(1019,`p-pattern`),ql(1020,`br`),lg()()(),Ml(1021,`td`,20)(1022,`code`,26),mN(1023,`string`),lg()(),Ml(1024,`td`,22),mN(1025,`-`),lg(),Ml(1026,`td`,23)(1027,`em`)(1028,`strong`),mN(1029,`(opcional)`),lg()(),Ml(1030,`p`),mN(1031,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Ml(1032,`code`),mN(1033,`(p-mask)`),lg(),mN(1034,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),lg()()(),Ml(1035,`tr`,15)(1036,`td`,16)(1037,`div`,24)(1038,`span`,25),mN(1039,` p-placeholder`),ql(1040,`br`),lg()()(),Ml(1041,`td`,20)(1042,`code`,26),mN(1043,`string`),lg()(),Ml(1044,`td`,22)(1045,`p`),mN(1046,`''`),lg()(),Ml(1047,`td`,23)(1048,`em`)(1049,`strong`),mN(1050,`(opcional)`),lg()(),Ml(1051,`p`),mN(1052,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),lg()()(),Ml(1053,`tr`,15)(1054,`td`,16)(1055,`div`,24)(1056,`span`,25),mN(1057,` p-helper`),ql(1058,`br`),lg()()(),Ml(1059,`td`,20)(1060,`code`,32),mN(1061,`PoHelperOptions `),lg(),Ml(1062,`code`,26),mN(1063,` string`),lg()(),Ml(1064,`td`,22),mN(1065,`-`),lg(),Ml(1066,`td`,23)(1067,`em`)(1068,`strong`),mN(1069,`(opcional)`),lg()(),Ml(1070,`p`),mN(1071,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(1072,`code`),mN(1073,`p-label`),lg(),mN(1074,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(1075,`code`),mN(1076,`p-label`),lg(),mN(1077,`.`),lg(),Ml(1078,`blockquote`)(1079,`p`),mN(1080,`Para mais informações acesse: `),Ml(1081,`a`,33),mN(1082,`https://po-ui.io/documentation/po-helper`),lg(),mN(1083,`.`),lg()(),Ml(1084,`blockquote`)(1085,`p`),mN(1086,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(1087,`code`),mN(1088,`p-additional-help-tooltip`),lg(),mN(1089,` e `),Ml(1090,`code`),mN(1091,`p-additional-help`),lg(),mN(1092,`) será ignorado.`),lg()()()(),Ml(1093,`tr`,15)(1094,`td`,16)(1095,`div`,24)(1096,`span`,25),mN(1097,`p-readonly`),ql(1098,`br`),lg()()(),Ml(1099,`td`,20)(1100,`code`,27),mN(1101,`boolean`),lg()(),Ml(1102,`td`,22),mN(1103,`-`),lg(),Ml(1104,`td`,23)(1105,`em`)(1106,`strong`),mN(1107,`(opcional)`),lg()(),Ml(1108,`p`),mN(1109,`Indica que o campo será somente leitura.`),lg()()(),Ml(1110,`tr`,15)(1111,`td`,16)(1112,`div`,24)(1113,`span`,25),mN(1114,`p-required`),ql(1115,`br`),lg()()(),Ml(1116,`td`,20)(1117,`code`,27),mN(1118,`boolean`),lg()(),Ml(1119,`td`,22)(1120,`p`)(1121,`code`),mN(1122,`false`),lg()()(),Ml(1123,`td`,23)(1124,`em`)(1125,`strong`),mN(1126,`(opcional)`),lg()(),Ml(1127,`p`),mN(1128,`Define que o campo será obrigatório.`),lg(),Ml(1129,`blockquote`)(1130,`p`),mN(1131,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ml(1132,`code`),mN(1133,`(p-disabled)`),lg(),mN(1134,`.`),lg()()()(),Ml(1135,`tr`,15)(1136,`td`,16)(1137,`div`,24)(1138,`span`,25),mN(1139,` p-required-field-error-message`),ql(1140,`br`),lg()()(),Ml(1141,`td`,20)(1142,`code`,27),mN(1143,`boolean`),lg()(),Ml(1144,`td`,22)(1145,`p`)(1146,`code`),mN(1147,`false`),lg()()(),Ml(1148,`td`,23)(1149,`em`)(1150,`strong`),mN(1151,`(opcional)`),lg()(),Ml(1152,`p`),mN(1153,`Exibe a mensagem setada na propriedade `),Ml(1154,`code`),mN(1155,`p-error-pattern`),lg(),mN(1156,` se o campo estiver vazio e for requerido.`),lg(),Ml(1157,`blockquote`)(1158,`p`),mN(1159,`Necessário que a propriedade `),Ml(1160,`code`),mN(1161,`p-required`),lg(),mN(1162,` esteja habilitada.`),lg()()()(),Ml(1163,`tr`,15)(1164,`td`,16)(1165,`div`,24)(1166,`span`,25),mN(1167,` p-show-required`),ql(1168,`br`),lg()()(),Ml(1169,`td`,20)(1170,`code`,27),mN(1171,`boolean`),lg()(),Ml(1172,`td`,22),mN(1173,`-`),lg(),Ml(1174,`td`,23)(1175,`p`),mN(1176,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(1177,`blockquote`)(1178,`p`),mN(1179,`Não será exibida a indicação se:`),lg()(),Ml(1180,`ul`)(1181,`li`),mN(1182,`Não possuir `),Ml(1183,`code`),mN(1184,`p-help`),lg(),mN(1185,` e/ou `),Ml(1186,`code`),mN(1187,`p-label`),lg(),mN(1188,`.`),lg()()()(),Ml(1189,`tr`,15)(1190,`td`,16)(1191,`div`,24)(1192,`span`,25),mN(1193,` p-size`),ql(1194,`br`),lg()()(),Ml(1195,`td`,20)(1196,`code`,26),mN(1197,`string`),lg()(),Ml(1198,`td`,22)(1199,`p`)(1200,`code`),mN(1201,`medium`),lg()()(),Ml(1202,`td`,23)(1203,`em`)(1204,`strong`),mN(1205,`(opcional)`),lg()(),Ml(1206,`p`),mN(1207,`Define o tamanho do componente:`),lg(),Ml(1208,`ul`)(1209,`li`)(1210,`code`),mN(1211,`small`),lg(),mN(1212,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(1213,`li`)(1214,`code`),mN(1215,`medium`),lg(),mN(1216,`: altura do input como 44px.`),lg()(),Ml(1217,`blockquote`)(1218,`p`),mN(1219,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(1220,`code`),mN(1221,`medium`),lg(),mN(1222,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(1223,`a`,34),mN(1224,`po-theme`),lg(),mN(1225,`.`),lg()()()(),Ml(1226,`tr`,15)(1227,`td`,16)(1228,`div`,24)(1229,`span`,25),mN(1230,` p-upper-case`),ql(1231,`br`),lg()()(),Ml(1232,`td`,20)(1233,`code`,27),mN(1234,`boolean`),lg()(),Ml(1235,`td`,22),mN(1236,`-`),lg(),Ml(1237,`td`,23)(1238,`p`),mN(1239,`Converte o conteúdo do campo em maiúsulo automaticamente.`),lg()()()(),Ml(1240,`h3`,11),mN(1241,`Métodos`),lg(),Ml(1242,`table`,35)(1243,`tr`,15)(1244,`th`,36)(1245,`div`,24)(1246,`h4`)(1247,`span`,25),mN(1248,` showAdditionalHelp `),lg()()()()(),Ml(1249,`tr`,23)(1250,`td`,23)(1251,`p`),mN(1252,`Método que exibe `),Ml(1253,`code`),mN(1254,`p-helper`),lg(),mN(1255,` ou executa a ação definida em `),Ml(1256,`code`),mN(1257,`p-helper{eventOnClick}`),lg(),mN(1258,` ou em `),Ml(1259,`code`),mN(1260,`p-additionalHelp`),lg(),mN(1261,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(1262,`code`),mN(1263,`p-keydown`),lg(),mN(1264,`.`),lg(),Ml(1265,`blockquote`)(1266,`p`),mN(1267,`Exibe ou oculta o conteúdo do componente `),Ml(1268,`code`),mN(1269,`po-helper`),lg(),mN(1270,` quando o componente estiver com foco.`),lg()(),Ml(1271,`pre`)(1272,`code`),mN(1273,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),lg()(),Ml(1274,`pre`)(1275,`code`),mN(1276,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(1277,`br`),Ml(1278,`table`,35)(1279,`tr`,15)(1280,`th`,36)(1281,`div`,24)(1282,`h4`)(1283,`span`,25),mN(1284,` focus `),lg()()()()(),Ml(1285,`tr`,23)(1286,`td`,23)(1287,`p`),mN(1288,`Função que atribui foco ao componente.`),lg(),Ml(1289,`p`),mN(1290,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(1291,`pre`)(1292,`code`),mN(1293,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),lg()()()()(),ql(1294,`br`),Ml(1295,`h3`),mN(1296,`Interfaces`),lg(),Ml(1297,`h4`,37)(1298,`code`,5),mN(1299,`ErrorAsyncProperties`),lg()(),Ml(1300,`div`,2)(1301,`p`),mN(1302,`Interface para realizar uma validação assíncrona no componente.`),lg()(),Ml(1303,`h4`,11),mN(1304,`Propriedades`),lg(),Ml(1305,`table`,12)(1306,`tr`,13)(1307,`th`,14),mN(1308,`Nome`),lg(),Ml(1309,`th`,14),mN(1310,`Tipo`),lg(),Ml(1311,`th`,14),mN(1312,`Descrição`),lg()(),Ml(1313,`tr`,15)(1314,`td`,16)(1315,`div`,24)(1316,`span`,25),mN(1317,` errorAsync`),ql(1318,`br`),lg()()(),Ml(1319,`td`,20)(1320,`code`,38),mN(1321,`(value) => Observable<boolean>`),lg()(),Ml(1322,`td`,23)(1323,`p`),mN(1324,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ml(1325,`code`),mN(1326,`change`),lg(),mN(1327,` ou `),Ml(1328,`code`),mN(1329,`change-model`),lg(),mN(1330,`, dependendo do valor da propriedade `),Ml(1331,`code`),mN(1332,`triggerMode`),lg(),mN(1333,`.`),lg()()(),Ml(1334,`tr`,15)(1335,`td`,16)(1336,`div`,24)(1337,`span`,25),mN(1338,` triggerMode`),ql(1339,`br`),lg()()(),Ml(1340,`td`,20)(1341,`code`,39),mN(1342,`'change' `),lg(),Ml(1343,`code`,40),mN(1344,` 'changeModel'`),lg()(),Ml(1345,`td`,23)(1346,`em`)(1347,`strong`),mN(1348,`(opcional)`),lg()(),Ml(1349,`p`),mN(1350,`Controla se o método será executado no disparo do output `),Ml(1351,`code`),mN(1352,`change`),lg(),mN(1353,` ou `),Ml(1354,`code`),mN(1355,`change-model`),lg(),mN(1356,`.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var we=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Email`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-email-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-email-basic-view`)(6,`sample-po-email-labs-view`)(7,`sample-po-email-newsletter-view`),lg()()()),l&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,ae,re,de,pe],encapsulation:2,changeDetection:1})}return a})()}];var ce=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[NL.forChild(we),NL]})}return a})();var Ze=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[ar,ce]})}return a})();export{Ze as DocPoEmailModule};