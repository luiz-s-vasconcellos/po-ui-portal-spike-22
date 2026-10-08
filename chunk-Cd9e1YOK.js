import{$i as pt,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Qn as C9,Sa as zO,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_ as $3,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,bn as roe,br as Jv,ca as ue,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,i as _a,in as kte,k as D4,ki as he,nr as D9,nt as Nte,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,wr as Kc,zi as kL}from"./main-FUFQFMHQ.js";var ie=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-email-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`email`,`p-label`,`PO Email`]],template:function(l,i){l&1&&Kc(0,`po-email`,0)},dependencies:[$3],encapsulation:2,changeDetection:1})}return a})();var Ee=a=>({"docs-sample-code-tabs":a});var ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-email-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Email Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-email-basic/sample-po-email-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-email name="email" p-label="PO Email"> </po-email>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-email-basic/sample-po-email-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-email-basic',
  templateUrl: './sample-po-email-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoEmailBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-email-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Ee,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,ie],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{helperText;email;errorPattern;event;help;label;maxlength;minlength;placeholder;properties;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}restore(){this.helperText=``,this.properties=[],this.label=void 0,this.help=void 0,this.errorPattern=``,this.placeholder=``,this.minlength=void 0,this.maxlength=void 0,this.email=``,this.event=``,this.size=`medium`}changeEvent(d){this.event=d}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-email-labs`]],standalone:!1,decls:19,vars:34,consts:[[`f`,`ngForm`],[`name`,`email`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-label-text-wrap`,`p-compact-label`,`p-error-limit`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let p=Bx();Ac(0,`po-email`,1),RE(`ngModelChange`,function(r){return Jv(p),DN(i.email,r)||(i.email=r),e_(r)}),pt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3)(4,`po-info`,4),ug(),Kc(5,`po-divider`),Ac(6,`form`,null,0)(8,`po-input`,5),RE(`ngModelChange`,function(r){return Jv(p),DN(i.label,r)||(i.label=r),e_(r)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(r){return Jv(p),DN(i.help,r)||(i.help=r),e_(r)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(r){return Jv(p),DN(i.helperText,r)||(i.helperText=r),e_(r)}),ug(),p0(),Ac(11,`po-input`,8),RE(`ngModelChange`,function(r){return Jv(p),DN(i.placeholder,r)||(i.placeholder=r),e_(r)}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(r){return Jv(p),DN(i.errorPattern,r)||(i.errorPattern=r),e_(r)}),ug(),p0(),Ac(13,`po-number`,10),RE(`ngModelChange`,function(r){return Jv(p),DN(i.minlength,r)||(i.minlength=r),e_(r)}),ug(),p0(),Ac(14,`po-number`,11),RE(`ngModelChange`,function(r){return Jv(p),DN(i.maxlength,r)||(i.maxlength=r),e_(r)}),ug(),p0(),Ac(15,`po-checkbox-group`,12),RE(`ngModelChange`,function(r){return Jv(p),DN(i.properties,r)||(i.properties=r),e_(r)}),ug(),p0(),Ac(16,`po-radio-group`,13),RE(`ngModelChange`,function(r){return Jv(p),DN(i.size,r)||(i.size=r),e_(r)}),ug(),p0(),Ac(17,`div`,2)(18,`po-button`,14),pt(`p-click`,function(){return i.restore()}),ug()()()}l&2&&(TE(`ngModel`,i.email),cE(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-maxlength`,i.maxlength)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-error-limit`,i.properties?.includes(`errorLimit`)),m0(),Hp(3),cE(`p-value`,i.email),Hp(),cE(`p-value`,i.event),Hp(4),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.helperText),m0(),Hp(),TE(`ngModel`,i.placeholder),m0(),Hp(),TE(`ngModel`,i.errorPattern),m0(),Hp(),TE(`ngModel`,i.minlength),m0(),Hp(),TE(`ngModel`,i.maxlength),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,$3,D4,roe,kte,hoe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a});var re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-email-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Email Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-email-labs/sample-po-email-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-email
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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-email-labs/sample-po-email-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-email-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,be,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,le],encapsulation:2,changeDetection:1})}return a})();var me=(()=>{class a{poAlert=f(Nte);email=``;openDialog(){this.poAlert.alert({title:`Sent with success!`,message:`Ready Mr(s). ${this.getNameEmail()}, now you will get all the news from PO!`})}getNameEmail(){let d=this.email.indexOf(`@`);return this.email.substr(0,d).toLocaleUpperCase()}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-email-newsletter`]],standalone:!1,decls:8,vars:2,consts:[[`f`,`ngForm`],[1,`po-lg-12`,`po-text-center`,`po-font-subtitle`],[1,`po-row`],[`name`,`email`,`p-clean`,``,`p-error-pattern`,`Invalid e-mail`,`p-label`,`Email`,`p-placeholder`,`Enter your e-mail`,`p-required`,``,1,`po-lg-12`,3,`ngModelChange`,`ngModel`],[`p-label`,`Send`,`p-kind`,`primary`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(l,i){if(l&1){let p=Bx();Ac(0,`div`,1),vN(1,`Enter your email to receive PO news, be sure to participate.`),ug(),Ac(2,`form`,null,0)(4,`div`,2)(5,`po-email`,3),RE(`ngModelChange`,function(r){return Jv(p),DN(i.email,r)||(i.email=r),e_(r)}),ug(),p0(),ug(),Ac(6,`div`,2)(7,`po-button`,4),pt(`p-click`,function(){return i.openDialog()}),ug()()()}if(l&2){let p=Zx(3);Hp(5),TE(`ngModel`,i.email),m0(),Hp(2),cE(`p-disabled`,p.form.invalid)}},dependencies:[b9,D9,C9,BP,LP,ni,$3],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-email-newsletter-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Email - Newsletter`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-email-newsletter/sample-po-email-newsletter.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<div class="po-lg-12 po-text-center po-font-subtitle">Enter your email to receive PO news, be sure to participate.</div>

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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-email-newsletter/sample-po-email-newsletter.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-email-newsletter`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ve,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,me],encapsulation:2,changeDetection:1})}return a})();var pe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-email-doc`]],standalone:!1,decls:1357,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(l,i){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoEmailComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ug(),Ac(24,`p`),vN(25,`Importante:`),ug(),Ac(26,`ul`)(27,`li`),vN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ug()(),Ac(29,`h4`),vN(30,`Tokens customizáveis`),ug(),Ac(31,`p`),vN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Kc(33,`br`),vN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ac(35,`code`),vN(36,`.po-input`),ug()(),Ac(37,`blockquote`)(38,`p`),vN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Ac(40,`a`,6),vN(41,`Grid System`),ug(),vN(42,`.`),ug()(),Ac(43,`blockquote`)(44,`p`),vN(45,`Para maiores informações, acesse o guia `),Ac(46,`a`,7),vN(47,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(48,`.`),ug()(),Ac(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),vN(53,`Propriedade`),ug(),Ac(54,`th`),vN(55,`Descrição`),ug(),Ac(56,`th`),vN(57,`Valor Padrão`),ug()()(),Ac(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),vN(62,`Default Values`),ug()(),Kc(63,`td`)(64,`td`),ug(),Ac(65,`tr`)(66,`td`)(67,`code`),vN(68,`--font-family`),ug()(),Ac(69,`td`),vN(70,`Família tipográfica usada`),ug(),Ac(71,`td`)(72,`code`),vN(73,`var(--font-family-theme)`),ug()()(),Ac(74,`tr`)(75,`td`)(76,`code`),vN(77,`--font-size`),ug()(),Ac(78,`td`),vN(79,`Tamanho da fonte`),ug(),Ac(80,`td`)(81,`code`),vN(82,`var(--font-size-default)`),ug()()(),Ac(83,`tr`)(84,`td`)(85,`code`),vN(86,`--text-color-placeholder`),ug()(),Ac(87,`td`),vN(88,`Cor do texto placeholder`),ug(),Ac(89,`td`)(90,`code`),vN(91,`var(--color-neutral-light-30)`),ug()()(),Ac(92,`tr`)(93,`td`)(94,`code`),vN(95,`--color`),ug()(),Ac(96,`td`),vN(97,`Cor pincipal do input`),ug(),Ac(98,`td`)(99,`code`),vN(100,`var(--color-neutral-dark-70)`),ug()()(),Ac(101,`tr`)(102,`td`)(103,`code`),vN(104,`--background`),ug()(),Ac(105,`td`),vN(106,`Cor de background`),ug(),Ac(107,`td`)(108,`code`),vN(109,`var(--color-neutral-light-05)`),ug()()(),Ac(110,`tr`)(111,`td`)(112,`code`),vN(113,`--padding`),ug()(),Ac(114,`td`),vN(115,`Preenchimento`),ug(),Ac(116,`td`)(117,`code`),vN(118,`0 0.5rem`),ug()()(),Ac(119,`tr`)(120,`td`)(121,`code`),vN(122,`--text-color`),ug()(),Ac(123,`td`),vN(124,`Cor do texto`),ug(),Ac(125,`td`)(126,`code`),vN(127,`var(--color-neutral-dark-90)`),ug()()(),Ac(128,`tr`)(129,`td`)(130,`code`),vN(131,`--field-container-title-justify`),ug()(),Ac(132,`td`),vN(133,`Alinhamento horizontal do título (`),Ac(134,`code`),vN(135,`justify-content`),ug(),vN(136,`)`),ug(),Ac(137,`td`)(138,`code`),vN(139,`space-between`),ug()()(),Ac(140,`tr`)(141,`td`)(142,`code`),vN(143,`--field-container-title-flex`),ug()(),Ac(144,`td`),vN(145,`Flex do título (`),Ac(146,`code`),vN(147,`flex`),ug(),vN(148,`)`),ug(),Ac(149,`td`)(150,`code`),vN(151,`1 auto`),ug()()(),Ac(152,`tr`)(153,`td`)(154,`strong`),vN(155,`Hover`),ug()(),Kc(156,`td`)(157,`td`),ug(),Ac(158,`tr`)(159,`td`)(160,`code`),vN(161,`--color-hover`),ug()(),Ac(162,`td`),vN(163,`Cor principal no estado hover`),ug(),Ac(164,`td`)(165,`code`),vN(166,`var(--color-brand-01-dark)`),ug()()(),Ac(167,`tr`)(168,`td`)(169,`code`),vN(170,`--background-hover`),ug()(),Ac(171,`td`),vN(172,`Cor de background no estado hover`),ug(),Ac(173,`td`)(174,`code`),vN(175,`var(--color-brand-01-lightest)`),ug()()(),Ac(176,`tr`)(177,`td`)(178,`strong`),vN(179,`Focused`),ug()(),Kc(180,`td`)(181,`td`),ug(),Ac(182,`tr`)(183,`td`)(184,`code`),vN(185,`--color-focused`),ug()(),Ac(186,`td`),vN(187,`Cor principal no estado de focus`),ug(),Ac(188,`td`)(189,`code`),vN(190,`var(--color-action-default)`),ug()()(),Ac(191,`tr`)(192,`td`)(193,`code`),vN(194,`--outline-color-focused`),ug()(),Ac(195,`td`),vN(196,`Cor do outline do estado de focus`),ug(),Ac(197,`td`)(198,`code`),vN(199,`var(--color-action-focus)`),ug()()(),Ac(200,`tr`)(201,`td`)(202,`strong`),vN(203,`Disabled`),ug()(),Kc(204,`td`)(205,`td`),ug(),Ac(206,`tr`)(207,`td`)(208,`code`),vN(209,`--color-disabled`),ug()(),Ac(210,`td`),vN(211,`Cor principal no estado disabled`),ug(),Ac(212,`td`)(213,`code`),vN(214,`var(--color-neutral-light-30)`),ug()()(),Ac(215,`tr`)(216,`td`)(217,`code`),vN(218,`--background-disabled`),ug()(),Ac(219,`td`),vN(220,`Cor de background no estado disabled`),ug(),Ac(221,`td`)(222,`code`),vN(223,`var(--color-neutral-light-20)`),ug()()(),Ac(224,`tr`)(225,`td`)(226,`code`),vN(227,`--text-color-disabled`),ug()(),Ac(228,`td`),vN(229,`Cor do texto no estado disabled`),ug(),Ac(230,`td`)(231,`code`),vN(232,`var(--color-neutral-dark-70)`),ug()()()()(),Ac(233,`p`),Kc(234,`br`),vN(235,` O `),Ac(236,`code`),vN(237,`po-email`),ug(),vN(238,` é um input específico para receber E-mail, com o pattern já configurado.`),ug()(),Ac(239,`div`,8)(240,`h4`,9),vN(241,`Seletor`),ug(),Ac(242,`pre`,10),vN(243,`<po-email
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
leitura clara.`),ug()()(),Ac(772,`tr`,15)(773,`td`,16)(774,`div`,24)(775,`span`,25),vN(776,` p-loading`),Kc(777,`br`),ug()()(),Ac(778,`td`,20)(779,`code`,27),vN(780,`boolean`),ug()(),Ac(781,`td`,22)(782,`p`)(783,`code`),vN(784,`false`),ug()()(),Ac(785,`td`,23)(786,`em`)(787,`strong`),vN(788,`(opcional)`),ug()(),Ac(789,`p`),vN(790,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug()()(),Ac(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),vN(795,`p-mask`),Kc(796,`br`),ug()()(),Ac(797,`td`,20)(798,`code`,26),vN(799,`string`),ug()(),Ac(800,`td`,22),vN(801,`-`),ug(),Ac(802,`td`,23)(803,`em`)(804,`strong`),vN(805,`(opcional)`),ug()(),Ac(806,`p`),vN(807,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),ug()()(),Ac(808,`tr`,15)(809,`td`,16)(810,`div`,24)(811,`span`,25),vN(812,`p-mask-format-model`),Kc(813,`br`),ug()()(),Ac(814,`td`,20)(815,`code`,27),vN(816,`boolean`),ug()(),Ac(817,`td`,22)(818,`p`)(819,`code`),vN(820,`false`),ug()()(),Ac(821,`td`,23)(822,`em`)(823,`strong`),vN(824,`(opcional)`),ug()(),Ac(825,`p`),vN(826,`Indica se o `),Ac(827,`code`),vN(828,`model`),ug(),vN(829,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),ug()()(),Ac(830,`tr`,15)(831,`td`,16)(832,`div`,24)(833,`span`,25),vN(834,` p-mask-no-length-validation`),Kc(835,`br`),ug()()(),Ac(836,`td`,20)(837,`code`,27),vN(838,`boolean`),ug()(),Ac(839,`td`,22)(840,`p`)(841,`code`),vN(842,`false`),ug()()(),Ac(843,`td`,23)(844,`p`),vN(845,`Controla como o componente aplica as validações de comprimento mínimo (`),Ac(846,`code`),vN(847,`minLength`),ug(),vN(848,`) e máximo (`),Ac(849,`code`),vN(850,`maxLength`),ug(),vN(851,`) quando há uma máscara (`),Ac(852,`code`),vN(853,`p-mask`),ug(),vN(854,`) definida.`),ug(),Ac(855,`ul`)(856,`li`),vN(857,`Quando `),Ac(858,`code`),vN(859,`true`),ug(),vN(860,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ug(),Ac(861,`li`),vN(862,`Quando `),Ac(863,`code`),vN(864,`false`),ug(),vN(865,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ug()(),Ac(866,`blockquote`)(867,`p`),vN(868,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ac(869,`code`),vN(870,`p-mask-format-model`),ug(),vN(871,`.`),ug()(),Ac(872,`p`),vN(873,`Exemplo:`),ug(),Ac(874,`pre`)(875,`code`),vN(876,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ug()(),Ac(877,`ul`)(878,`li`),vN(879,`Entrada: `),Ac(880,`code`),vN(881,`123-456`),ug(),vN(882,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Ac(883,`code`),vN(884,`-`),ug(),vN(885,`.`),ug()()()(),Ac(886,`tr`,15)(887,`td`,16)(888,`div`,24)(889,`span`,25),vN(890,` p-maxlength`),Kc(891,`br`),ug()()(),Ac(892,`td`,20)(893,`code`,31),vN(894,`number`),ug()(),Ac(895,`td`,22),vN(896,`-`),ug(),Ac(897,`td`,23)(898,`em`)(899,`strong`),vN(900,`(opcional)`),ug()(),Ac(901,`p`),vN(902,`Indica a quantidade máxima de caracteres que o campo aceita.`),ug()()(),Ac(903,`tr`,15)(904,`td`,16)(905,`div`,24)(906,`span`,25),vN(907,` p-minlength`),Kc(908,`br`),ug()()(),Ac(909,`td`,20)(910,`code`,31),vN(911,`number`),ug()(),Ac(912,`td`,22),vN(913,`-`),ug(),Ac(914,`td`,23)(915,`em`)(916,`strong`),vN(917,`(opcional)`),ug()(),Ac(918,`p`),vN(919,`Indica a quantidade mínima de caracteres que o campo aceita.`),ug()()(),Ac(920,`tr`,15)(921,`td`,16)(922,`div`,24)(923,`span`,25),vN(924,` name`),Kc(925,`br`),ug()()(),Ac(926,`td`,20)(927,`code`,26),vN(928,`string`),ug()(),Ac(929,`td`,22),vN(930,`-`),ug(),Ac(931,`td`,23)(932,`p`),vN(933,`Nome e identificador do campo.`),ug()()(),Ac(934,`tr`,15)(935,`td`,16)(936,`div`,24)(937,`span`,25),vN(938,` p-no-autocomplete`),Kc(939,`br`),ug()()(),Ac(940,`td`,20)(941,`code`,27),vN(942,`boolean`),ug()(),Ac(943,`td`,22)(944,`p`)(945,`code`),vN(946,`false`),ug()()(),Ac(947,`td`,23)(948,`em`)(949,`strong`),vN(950,`(opcional)`),ug()(),Ac(951,`p`),vN(952,`Define a propriedade nativa `),Ac(953,`code`),vN(954,`autocomplete`),ug(),vN(955,` do campo como `),Ac(956,`code`),vN(957,`off`),ug(),vN(958,`.`),ug(),Ac(959,`blockquote`)(960,`p`),vN(961,`No componente `),Ac(962,`code`),vN(963,`po-password`),ug(),vN(964,` será definido como `),Ac(965,`code`),vN(966,`new-password`),ug(),vN(967,`.`),ug()(),Ac(968,`p`),vN(969,`Nos componentes `),Ac(970,`code`),vN(971,`po-password`),ug(),vN(972,` e `),Ac(973,`code`),vN(974,`po-login`),ug(),vN(975,` o valor padrão será `),Ac(976,`code`),vN(977,`true`),ug(),vN(978,`.`),ug()()(),Ac(979,`tr`,15)(980,`td`,16)(981,`div`,24)(982,`span`,25),vN(983,` p-optional`),Kc(984,`br`),ug()()(),Ac(985,`td`,20)(986,`code`,27),vN(987,`boolean`),ug()(),Ac(988,`td`,22)(989,`p`)(990,`code`),vN(991,`false`),ug()()(),Ac(992,`td`,23)(993,`em`)(994,`strong`),vN(995,`(opcional)`),ug()(),Ac(996,`p`),vN(997,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(998,`blockquote`)(999,`p`),vN(1e3,`Não será exibida a indicação se:`),ug()(),Ac(1001,`ul`)(1002,`li`),vN(1003,`O campo conter `),Ac(1004,`code`),vN(1005,`p-required`),ug(),vN(1006,`;`),ug(),Ac(1007,`li`),vN(1008,`Não possuir `),Ac(1009,`code`),vN(1010,`p-help`),ug(),vN(1011,` e/ou `),Ac(1012,`code`),vN(1013,`p-label`),ug(),vN(1014,`.`),ug()()()(),Ac(1015,`tr`,15)(1016,`td`,16)(1017,`div`,24)(1018,`span`,25),vN(1019,`p-pattern`),Kc(1020,`br`),ug()()(),Ac(1021,`td`,20)(1022,`code`,26),vN(1023,`string`),ug()(),Ac(1024,`td`,22),vN(1025,`-`),ug(),Ac(1026,`td`,23)(1027,`em`)(1028,`strong`),vN(1029,`(opcional)`),ug()(),Ac(1030,`p`),vN(1031,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Ac(1032,`code`),vN(1033,`(p-mask)`),ug(),vN(1034,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ug()()(),Ac(1035,`tr`,15)(1036,`td`,16)(1037,`div`,24)(1038,`span`,25),vN(1039,` p-placeholder`),Kc(1040,`br`),ug()()(),Ac(1041,`td`,20)(1042,`code`,26),vN(1043,`string`),ug()(),Ac(1044,`td`,22)(1045,`p`),vN(1046,`''`),ug()(),Ac(1047,`td`,23)(1048,`em`)(1049,`strong`),vN(1050,`(opcional)`),ug()(),Ac(1051,`p`),vN(1052,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ug()()(),Ac(1053,`tr`,15)(1054,`td`,16)(1055,`div`,24)(1056,`span`,25),vN(1057,` p-helper`),Kc(1058,`br`),ug()()(),Ac(1059,`td`,20)(1060,`code`,32),vN(1061,`PoHelperOptions `),ug(),Ac(1062,`code`,26),vN(1063,` string`),ug()(),Ac(1064,`td`,22),vN(1065,`-`),ug(),Ac(1066,`td`,23)(1067,`em`)(1068,`strong`),vN(1069,`(opcional)`),ug()(),Ac(1070,`p`),vN(1071,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(1072,`code`),vN(1073,`p-label`),ug(),vN(1074,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(1075,`code`),vN(1076,`p-label`),ug(),vN(1077,`.`),ug(),Ac(1078,`blockquote`)(1079,`p`),vN(1080,`Para mais informações acesse: `),Ac(1081,`a`,33),vN(1082,`https://po-ui.io/documentation/po-helper`),ug(),vN(1083,`.`),ug()(),Ac(1084,`blockquote`)(1085,`p`),vN(1086,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(1087,`code`),vN(1088,`p-additional-help-tooltip`),ug(),vN(1089,` e `),Ac(1090,`code`),vN(1091,`p-additional-help`),ug(),vN(1092,`) será ignorado.`),ug()()()(),Ac(1093,`tr`,15)(1094,`td`,16)(1095,`div`,24)(1096,`span`,25),vN(1097,`p-readonly`),Kc(1098,`br`),ug()()(),Ac(1099,`td`,20)(1100,`code`,27),vN(1101,`boolean`),ug()(),Ac(1102,`td`,22),vN(1103,`-`),ug(),Ac(1104,`td`,23)(1105,`em`)(1106,`strong`),vN(1107,`(opcional)`),ug()(),Ac(1108,`p`),vN(1109,`Indica que o campo será somente leitura.`),ug()()(),Ac(1110,`tr`,15)(1111,`td`,16)(1112,`div`,24)(1113,`span`,25),vN(1114,`p-required`),Kc(1115,`br`),ug()()(),Ac(1116,`td`,20)(1117,`code`,27),vN(1118,`boolean`),ug()(),Ac(1119,`td`,22)(1120,`p`)(1121,`code`),vN(1122,`false`),ug()()(),Ac(1123,`td`,23)(1124,`em`)(1125,`strong`),vN(1126,`(opcional)`),ug()(),Ac(1127,`p`),vN(1128,`Define que o campo será obrigatório.`),ug(),Ac(1129,`blockquote`)(1130,`p`),vN(1131,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ac(1132,`code`),vN(1133,`(p-disabled)`),ug(),vN(1134,`.`),ug()()()(),Ac(1135,`tr`,15)(1136,`td`,16)(1137,`div`,24)(1138,`span`,25),vN(1139,` p-required-field-error-message`),Kc(1140,`br`),ug()()(),Ac(1141,`td`,20)(1142,`code`,27),vN(1143,`boolean`),ug()(),Ac(1144,`td`,22)(1145,`p`)(1146,`code`),vN(1147,`false`),ug()()(),Ac(1148,`td`,23)(1149,`em`)(1150,`strong`),vN(1151,`(opcional)`),ug()(),Ac(1152,`p`),vN(1153,`Exibe a mensagem setada na propriedade `),Ac(1154,`code`),vN(1155,`p-error-pattern`),ug(),vN(1156,` se o campo estiver vazio e for requerido.`),ug(),Ac(1157,`blockquote`)(1158,`p`),vN(1159,`Necessário que a propriedade `),Ac(1160,`code`),vN(1161,`p-required`),ug(),vN(1162,` esteja habilitada.`),ug()()()(),Ac(1163,`tr`,15)(1164,`td`,16)(1165,`div`,24)(1166,`span`,25),vN(1167,` p-show-required`),Kc(1168,`br`),ug()()(),Ac(1169,`td`,20)(1170,`code`,27),vN(1171,`boolean`),ug()(),Ac(1172,`td`,22),vN(1173,`-`),ug(),Ac(1174,`td`,23)(1175,`p`),vN(1176,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(1177,`blockquote`)(1178,`p`),vN(1179,`Não será exibida a indicação se:`),ug()(),Ac(1180,`ul`)(1181,`li`),vN(1182,`Não possuir `),Ac(1183,`code`),vN(1184,`p-help`),ug(),vN(1185,` e/ou `),Ac(1186,`code`),vN(1187,`p-label`),ug(),vN(1188,`.`),ug()()()(),Ac(1189,`tr`,15)(1190,`td`,16)(1191,`div`,24)(1192,`span`,25),vN(1193,` p-size`),Kc(1194,`br`),ug()()(),Ac(1195,`td`,20)(1196,`code`,26),vN(1197,`string`),ug()(),Ac(1198,`td`,22)(1199,`p`)(1200,`code`),vN(1201,`medium`),ug()()(),Ac(1202,`td`,23)(1203,`em`)(1204,`strong`),vN(1205,`(opcional)`),ug()(),Ac(1206,`p`),vN(1207,`Define o tamanho do componente:`),ug(),Ac(1208,`ul`)(1209,`li`)(1210,`code`),vN(1211,`small`),ug(),vN(1212,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(1213,`li`)(1214,`code`),vN(1215,`medium`),ug(),vN(1216,`: altura do input como 44px.`),ug()(),Ac(1217,`blockquote`)(1218,`p`),vN(1219,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(1220,`code`),vN(1221,`medium`),ug(),vN(1222,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(1223,`a`,34),vN(1224,`po-theme`),ug(),vN(1225,`.`),ug()()()(),Ac(1226,`tr`,15)(1227,`td`,16)(1228,`div`,24)(1229,`span`,25),vN(1230,` p-upper-case`),Kc(1231,`br`),ug()()(),Ac(1232,`td`,20)(1233,`code`,27),vN(1234,`boolean`),ug()(),Ac(1235,`td`,22),vN(1236,`-`),ug(),Ac(1237,`td`,23)(1238,`p`),vN(1239,`Converte o conteúdo do campo em maiúsulo automaticamente.`),ug()()()(),Ac(1240,`h3`,11),vN(1241,`Métodos`),ug(),Ac(1242,`table`,35)(1243,`tr`,15)(1244,`th`,36)(1245,`div`,24)(1246,`h4`)(1247,`span`,25),vN(1248,` showAdditionalHelp `),ug()()()()(),Ac(1249,`tr`,23)(1250,`td`,23)(1251,`p`),vN(1252,`Método que exibe `),Ac(1253,`code`),vN(1254,`p-helper`),ug(),vN(1255,` ou executa a ação definida em `),Ac(1256,`code`),vN(1257,`p-helper{eventOnClick}`),ug(),vN(1258,` ou em `),Ac(1259,`code`),vN(1260,`p-additionalHelp`),ug(),vN(1261,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(1262,`code`),vN(1263,`p-keydown`),ug(),vN(1264,`.`),ug(),Ac(1265,`blockquote`)(1266,`p`),vN(1267,`Exibe ou oculta o conteúdo do componente `),Ac(1268,`code`),vN(1269,`po-helper`),ug(),vN(1270,` quando o componente estiver com foco.`),ug()(),Ac(1271,`pre`)(1272,`code`),vN(1273,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ug()(),Ac(1274,`pre`)(1275,`code`),vN(1276,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(1277,`br`),Ac(1278,`table`,35)(1279,`tr`,15)(1280,`th`,36)(1281,`div`,24)(1282,`h4`)(1283,`span`,25),vN(1284,` focus `),ug()()()()(),Ac(1285,`tr`,23)(1286,`td`,23)(1287,`p`),vN(1288,`Função que atribui foco ao componente.`),ug(),Ac(1289,`p`),vN(1290,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(1291,`pre`)(1292,`code`),vN(1293,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ug()()()()(),Kc(1294,`br`),Ac(1295,`h3`),vN(1296,`Interfaces`),ug(),Ac(1297,`h4`,37)(1298,`code`,5),vN(1299,`ErrorAsyncProperties`),ug()(),Ac(1300,`div`,2)(1301,`p`),vN(1302,`Interface para realizar uma validação assíncrona no componente.`),ug()(),Ac(1303,`h4`,11),vN(1304,`Propriedades`),ug(),Ac(1305,`table`,12)(1306,`tr`,13)(1307,`th`,14),vN(1308,`Nome`),ug(),Ac(1309,`th`,14),vN(1310,`Tipo`),ug(),Ac(1311,`th`,14),vN(1312,`Descrição`),ug()(),Ac(1313,`tr`,15)(1314,`td`,16)(1315,`div`,24)(1316,`span`,25),vN(1317,` errorAsync`),Kc(1318,`br`),ug()()(),Ac(1319,`td`,20)(1320,`code`,38),vN(1321,`(value) => Observable<boolean>`),ug()(),Ac(1322,`td`,23)(1323,`p`),vN(1324,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ac(1325,`code`),vN(1326,`change`),ug(),vN(1327,` ou `),Ac(1328,`code`),vN(1329,`change-model`),ug(),vN(1330,`, dependendo do valor da propriedade `),Ac(1331,`code`),vN(1332,`triggerMode`),ug(),vN(1333,`.`),ug()()(),Ac(1334,`tr`,15)(1335,`td`,16)(1336,`div`,24)(1337,`span`,25),vN(1338,` triggerMode`),Kc(1339,`br`),ug()()(),Ac(1340,`td`,20)(1341,`code`,39),vN(1342,`'change' `),ug(),Ac(1343,`code`,40),vN(1344,` 'changeModel'`),ug()(),Ac(1345,`td`,23)(1346,`em`)(1347,`strong`),vN(1348,`(opcional)`),ug()(),Ac(1349,`p`),vN(1350,`Controla se o método será executado no disparo do output `),Ac(1351,`code`),vN(1352,`change`),ug(),vN(1353,` ou `),Ac(1354,`code`),vN(1355,`change-model`),ug(),vN(1356,`.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var we=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Email`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-email-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-email-basic-view`)(6,`sample-po-email-labs-view`)(7,`sample-po-email-newsletter-view`),ug()()()),l&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,ae,re,de,pe],encapsulation:2,changeDetection:1})}return a})()}];var ce=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[kL.forChild(we),kL]})}return a})();var Ze=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue({imports:[Ta,ce]})}return a})();export{Ze as DocPoEmailModule};