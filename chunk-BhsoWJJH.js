import{$i as pt,Br as Qn,Dr as LP,Gi as mg,Gn as Ac,Hr as RE,Ji as p0,Jn as BP,Jt as gae,Lt as bae,M as Ef,Qn as C9,Sa as zO,Tn as soe,Wi as m0,Wn as AN,Yr as TE,Zn as Bx,_a as wn,_i as e_,an as l4,ar as E,b as $ze,bi as f,bn as roe,br as Jv,ca as ue$1,ci as b9,di as cE,dr as Hn,en as hoe,fn as ni,i as _a,in as kte,k as D4,ki as he,nr as D9,nt as Nte,oi as Zx,pa as vN,pr as Hp,r as Ta,rr as DN,si as aN,ua as ug,ui as be$1,wr as Kc,zi as kL}from"./main-BRRQVWD7.js";var oe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-password-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`password`,`p-label`,`PO Password`]],template:function(l,i){l&1&&Kc(0,`po-password`,0)},dependencies:[soe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-password-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Password Basic`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-password-basic/sample-po-password-basic.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-password-basic/sample-po-password-basic.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-password-basic`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,Se,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,oe],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`hidepasswordpeek`,label:`Hide Password Peek`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern=``,this.placeholder=``,this.properties=[],this.size=`medium`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-password-labs`]],standalone:!1,decls:20,vars:37,consts:[[`f`,`ngForm`],[`name`,`password`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-hide-password-peek`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-pattern`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`pattern`,`p-clean`,``,`p-help`,`Ex.: '[a-zA]{5}[Z0-9]{3}'`,`p-label`,`Pattern (Regex)`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let m=Bx();Ac(0,`po-password`,1),RE(`ngModelChange`,function(r){return Jv(m),DN(i.password,r)||(i.password=r),e_(r)}),pt(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ug(),p0(),Kc(1,`po-divider`),Ac(2,`div`,2),Kc(3,`po-info`,3)(4,`po-info`,4),ug(),Kc(5,`po-divider`),Ac(6,`form`,null,0)(8,`po-input`,5),RE(`ngModelChange`,function(r){return Jv(m),DN(i.label,r)||(i.label=r),e_(r)}),ug(),p0(),Ac(9,`po-input`,6),RE(`ngModelChange`,function(r){return Jv(m),DN(i.help,r)||(i.help=r),e_(r)}),ug(),p0(),Ac(10,`po-input`,7),RE(`ngModelChange`,function(r){return Jv(m),DN(i.helperText,r)||(i.helperText=r),e_(r)}),ug(),p0(),Ac(11,`po-input`,8),RE(`ngModelChange`,function(r){return Jv(m),DN(i.placeholder,r)||(i.placeholder=r),e_(r)}),ug(),p0(),Ac(12,`po-input`,9),RE(`ngModelChange`,function(r){return Jv(m),DN(i.errorPattern,r)||(i.errorPattern=r),e_(r)}),ug(),p0(),Ac(13,`po-input`,10),RE(`ngModelChange`,function(r){return Jv(m),DN(i.pattern,r)||(i.pattern=r),e_(r)}),ug(),p0(),Ac(14,`po-number`,11),RE(`ngModelChange`,function(r){return Jv(m),DN(i.minlength,r)||(i.minlength=r),e_(r)}),ug(),p0(),Ac(15,`po-number`,12),RE(`ngModelChange`,function(r){return Jv(m),DN(i.maxlength,r)||(i.maxlength=r),e_(r)}),ug(),p0(),Ac(16,`po-checkbox-group`,13),RE(`ngModelChange`,function(r){return Jv(m),DN(i.properties,r)||(i.properties=r),e_(r)}),ug(),p0(),Ac(17,`po-radio-group`,14),RE(`ngModelChange`,function(r){return Jv(m),DN(i.size,r)||(i.size=r),e_(r)}),ug(),p0(),Ac(18,`div`,2)(19,`po-button`,15),pt(`p-click`,function(){return i.restore()}),ug()()()}l&2&&(TE(`ngModel`,i.password),cE(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-hide-password-peek`,i.properties.includes(`hidepasswordpeek`))(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-maxlength`,i.maxlength)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-pattern`,i.pattern)(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),m0(),Hp(3),cE(`p-value`,i.password),Hp(),cE(`p-value`,i.event),Hp(4),TE(`ngModel`,i.label),m0(),Hp(),TE(`ngModel`,i.help),m0(),Hp(),TE(`ngModel`,i.helperText),m0(),Hp(),TE(`ngModel`,i.placeholder),m0(),Hp(),TE(`ngModel`,i.errorPattern),m0(),Hp(),TE(`ngModel`,i.pattern),m0(),Hp(),TE(`ngModel`,i.minlength),m0(),Hp(),TE(`ngModel`,i.maxlength),m0(),Hp(),TE(`ngModel`,i.properties),cE(`p-options`,i.propertiesOptions),m0(),Hp(),TE(`ngModel`,i.size),cE(`p-options`,i.sizeOptions),m0())},dependencies:[b9,D9,C9,BP,LP,ni,Ef,l4,D4,roe,soe,kte,hoe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-password-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Password Labs`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-password-labs/sample-po-password-labs.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<po-password
  name="password"
  [(ngModel)]="password"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-hide-password-peek]="properties.includes('hidepasswordpeek')"
  [p-label]="label"
  [p-loading]="properties?.includes('loading')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
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
</po-password>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="password"> </po-info>

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
    class="po-md-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

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
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-password-labs/sample-po-password-labs.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-labs',
  templateUrl: './sample-po-password-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordLabsComponent implements OnInit {
  helperText: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  password: string;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'hidepasswordpeek', label: 'Hide Password Peek' },
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
    this.errorPattern = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.password = undefined;
    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-password-labs`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,be,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,le],encapsulation:2,changeDetection:1})}return a})();var pe=(()=>{class a{poAlert=f(Nte);confirmNewPassword;currentPassword;errorPattern;help=`Initial password = 123456`;newPassword;password=`123456`;setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:`Password Reset`,message:`Password saved successfully`,ok:()=>this.reset()})):this.poAlert.alert({title:`Password Error`,message:`Your (new passsword) is different of (confirm new password)`,ok:()=>this.reset()})}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-password-reset`]],standalone:!1,features:[be$1([Nte])],decls:7,vars:7,consts:[[`passwordForm`,`ngForm`],[`name`,`currentPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`Current Password`,`p-mask`,`999999`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-help`],[`name`,`newPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`New password`,`p-mask`,`999999`,`p-minlength`,`6`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`confirmNewPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`Confirm New Password`,`p-mask`,`999999`,`p-minlength`,`6`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(l,i){if(l&1){let m=Bx();Ac(0,`form`,null,0)(2,`po-password`,1),RE(`ngModelChange`,function(r){return Jv(m),DN(i.currentPassword,r)||(i.currentPassword=r),e_(r)}),ug(),p0(),Ac(3,`po-password`,2),RE(`ngModelChange`,function(r){return Jv(m),DN(i.newPassword,r)||(i.newPassword=r),e_(r)}),ug(),p0(),Ac(4,`po-password`,3),RE(`ngModelChange`,function(r){return Jv(m),DN(i.confirmNewPassword,r)||(i.confirmNewPassword=r),e_(r)}),ug(),p0(),Ac(5,`div`,4)(6,`po-button`,5),pt(`p-click`,function(){return i.setPassword()}),ug()()()}if(l&2){let m=Zx(1);Hp(2),TE(`ngModel`,i.currentPassword),cE(`p-help`,i.help),m0(),Hp(),TE(`ngModel`,i.newPassword),cE(`p-disabled`,i.currentPassword!==i.password),m0(),Hp(),TE(`ngModel`,i.confirmNewPassword),cE(`p-disabled`,i.currentPassword!==i.password),m0(),Hp(2),cE(`p-disabled`,m.invalid)}},dependencies:[b9,D9,C9,BP,LP,ni,soe],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-password-reset-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Kc(0,`br`),Ac(1,`blockquote`,0)(2,`label`,1),vN(3,`PO Password - Reset`),ug(),Ac(4,`a`,2),pt(`click`,function(){return i.toggleSampleCodeTabs()}),Kc(5,`span`),vN(6),ug()(),Ac(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),vN(12,`sample-po-password-reset/sample-po-password-reset.component.html`),ug(),Ac(13,`pre`,7),vN(14,`<form #passwordForm="ngForm">
  <po-password
    class="po-sm-12"
    name="currentPassword"
    [(ngModel)]="currentPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Current Password"
    p-mask="999999"
    p-required
    [p-help]="help"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="newPassword"
    [(ngModel)]="newPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="New password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="confirmNewPassword"
    [(ngModel)]="confirmNewPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Confirm New Password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Save" [p-disabled]="passwordForm.invalid" (p-click)="setPassword()">
    </po-button>
  </div>
</form>
`),ug()()(),Ac(15,`po-tab`,8)(16,`div`)(17,`label`,6),vN(18,`sample-po-password-reset/sample-po-password-reset.component.ts`),ug(),Ac(19,`pre`,9),vN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-reset',
  templateUrl: './sample-po-password-reset.component.html',
  providers: [PoDialogService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordResetComponent {
  private poAlert = inject(PoDialogService);

  confirmNewPassword: string;
  currentPassword: string;
  errorPattern: string;
  help: string = 'Initial password = 123456';
  newPassword: string;
  password: string = '123456';

  setPassword() {
    if (this.confirmNewPassword === this.newPassword) {
      this.password = this.newPassword;
      this.help = \`Actual password = \${this.password}\`;
      this.currentPassword = undefined;
      this.newPassword = undefined;
      this.confirmNewPassword = undefined;

      this.poAlert.alert({
        title: 'Password Reset',
        message: 'Password saved successfully',
        ok: () => this.reset()
      });
    } else {
      this.poAlert.alert({
        title: 'Password Error',
        message: 'Your (new passsword) is different of (confirm new password)',
        ok: () => this.reset()
      });
    }
  }

  reset() {
    this.newPassword = undefined;
    this.confirmNewPassword = undefined;
  }
}
`),ug()()()()(),Ac(21,`div`,10),Kc(22,`sample-po-password-reset`),ug(),Kc(23,`hr`)),l&2&&(Hp(5),aN(`po-icon `+i.sampleCodeButtonIcon),Hp(),mg(` `,i.sampleCodeButtonLabel),Hp(),cE(`ngClass`,AN(4,ve,i.hideSampleCodeTabs)))},dependencies:[zO,_a,gae,bae,pe],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Hn({type:a,selectors:[[`sample-po-password-doc`]],standalone:!1,decls:1376,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(l,i){l&1&&(Ac(0,`div`,0)(1,`p`,1)(2,`code`),vN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ug()(),Ac(4,`div`,2)(5,`p`),vN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ug(),Ac(7,`blockquote`)(8,`p`),vN(9,`Não esqueça de importar o módulo `),Ac(10,`code`),vN(11,`FormsModule`),ug(),vN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ac(13,`code`),vN(14,`ReactiveFormsModule`),ug(),vN(15,`, ambos nativos do Angular.`),ug()()(),Ac(16,`h3`,3),vN(17,`Componente`),ug(),Ac(18,`h4`,4)(19,`code`,5),vN(20,`PoPasswordComponent`),ug()(),Ac(21,`div`,2)(22,`p`),vN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ug(),Ac(24,`p`),vN(25,`Importante:`),ug(),Ac(26,`ul`)(27,`li`),vN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ug()(),Ac(29,`h4`),vN(30,`Tokens customizáveis`),ug(),Ac(31,`p`),vN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Kc(33,`br`),vN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ac(35,`code`),vN(36,`.po-input`),ug()(),Ac(37,`blockquote`)(38,`p`),vN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Ac(40,`a`,6),vN(41,`Grid System`),ug(),vN(42,`.`),ug()(),Ac(43,`blockquote`)(44,`p`),vN(45,`Para maiores informações, acesse o guia `),Ac(46,`a`,7),vN(47,`Personalizando o Tema Padrão com Tokens CSS`),ug(),vN(48,`.`),ug()(),Ac(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),vN(53,`Propriedade`),ug(),Ac(54,`th`),vN(55,`Descrição`),ug(),Ac(56,`th`),vN(57,`Valor Padrão`),ug()()(),Ac(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),vN(62,`Default Values`),ug()(),Kc(63,`td`)(64,`td`),ug(),Ac(65,`tr`)(66,`td`)(67,`code`),vN(68,`--font-family`),ug()(),Ac(69,`td`),vN(70,`Família tipográfica usada`),ug(),Ac(71,`td`)(72,`code`),vN(73,`var(--font-family-theme)`),ug()()(),Ac(74,`tr`)(75,`td`)(76,`code`),vN(77,`--font-size`),ug()(),Ac(78,`td`),vN(79,`Tamanho da fonte`),ug(),Ac(80,`td`)(81,`code`),vN(82,`var(--font-size-default)`),ug()()(),Ac(83,`tr`)(84,`td`)(85,`code`),vN(86,`--text-color-placeholder`),ug()(),Ac(87,`td`),vN(88,`Cor do texto placeholder`),ug(),Ac(89,`td`)(90,`code`),vN(91,`var(--color-neutral-light-30)`),ug()()(),Ac(92,`tr`)(93,`td`)(94,`code`),vN(95,`--color`),ug()(),Ac(96,`td`),vN(97,`Cor pincipal do input`),ug(),Ac(98,`td`)(99,`code`),vN(100,`var(--color-neutral-dark-70)`),ug()()(),Ac(101,`tr`)(102,`td`)(103,`code`),vN(104,`--background`),ug()(),Ac(105,`td`),vN(106,`Cor de background`),ug(),Ac(107,`td`)(108,`code`),vN(109,`var(--color-neutral-light-05)`),ug()()(),Ac(110,`tr`)(111,`td`)(112,`code`),vN(113,`--padding`),ug()(),Ac(114,`td`),vN(115,`Preenchimento`),ug(),Ac(116,`td`)(117,`code`),vN(118,`0 0.5rem`),ug()()(),Ac(119,`tr`)(120,`td`)(121,`code`),vN(122,`--text-color`),ug()(),Ac(123,`td`),vN(124,`Cor do texto`),ug(),Ac(125,`td`)(126,`code`),vN(127,`var(--color-neutral-dark-90)`),ug()()(),Ac(128,`tr`)(129,`td`)(130,`code`),vN(131,`--field-container-title-justify`),ug()(),Ac(132,`td`),vN(133,`Alinhamento horizontal do título (`),Ac(134,`code`),vN(135,`justify-content`),ug(),vN(136,`)`),ug(),Ac(137,`td`)(138,`code`),vN(139,`space-between`),ug()()(),Ac(140,`tr`)(141,`td`)(142,`code`),vN(143,`--field-container-title-flex`),ug()(),Ac(144,`td`),vN(145,`Flex do título (`),Ac(146,`code`),vN(147,`flex`),ug(),vN(148,`)`),ug(),Ac(149,`td`)(150,`code`),vN(151,`1 auto`),ug()()(),Ac(152,`tr`)(153,`td`)(154,`strong`),vN(155,`Hover`),ug()(),Kc(156,`td`)(157,`td`),ug(),Ac(158,`tr`)(159,`td`)(160,`code`),vN(161,`--color-hover`),ug()(),Ac(162,`td`),vN(163,`Cor principal no estado hover`),ug(),Ac(164,`td`)(165,`code`),vN(166,`var(--color-brand-01-dark)`),ug()()(),Ac(167,`tr`)(168,`td`)(169,`code`),vN(170,`--background-hover`),ug()(),Ac(171,`td`),vN(172,`Cor de background no estado hover`),ug(),Ac(173,`td`)(174,`code`),vN(175,`var(--color-brand-01-lightest)`),ug()()(),Ac(176,`tr`)(177,`td`)(178,`strong`),vN(179,`Focused`),ug()(),Kc(180,`td`)(181,`td`),ug(),Ac(182,`tr`)(183,`td`)(184,`code`),vN(185,`--color-focused`),ug()(),Ac(186,`td`),vN(187,`Cor principal no estado de focus`),ug(),Ac(188,`td`)(189,`code`),vN(190,`var(--color-action-default)`),ug()()(),Ac(191,`tr`)(192,`td`)(193,`code`),vN(194,`--outline-color-focused`),ug()(),Ac(195,`td`),vN(196,`Cor do outline do estado de focus`),ug(),Ac(197,`td`)(198,`code`),vN(199,`var(--color-action-focus)`),ug()()(),Ac(200,`tr`)(201,`td`)(202,`strong`),vN(203,`Disabled`),ug()(),Kc(204,`td`)(205,`td`),ug(),Ac(206,`tr`)(207,`td`)(208,`code`),vN(209,`--color-disabled`),ug()(),Ac(210,`td`),vN(211,`Cor principal no estado disabled`),ug(),Ac(212,`td`)(213,`code`),vN(214,`var(--color-neutral-light-30)`),ug()()(),Ac(215,`tr`)(216,`td`)(217,`code`),vN(218,`--background-disabled`),ug()(),Ac(219,`td`),vN(220,`Cor de background no estado disabled`),ug(),Ac(221,`td`)(222,`code`),vN(223,`var(--color-neutral-light-20)`),ug()()(),Ac(224,`tr`)(225,`td`)(226,`code`),vN(227,`--text-color-disabled`),ug()(),Ac(228,`td`),vN(229,`Cor do texto no estado disabled`),ug(),Ac(230,`td`)(231,`code`),vN(232,`var(--color-neutral-dark-70)`),ug()()()()(),Ac(233,`p`),Kc(234,`br`),vN(235,` O `),Ac(236,`code`),vN(237,`po-password`),ug(),vN(238,` é um input específico para senhas. Já possui tipo, estilo e ícone predefinidos.`),ug()(),Ac(239,`div`,8)(240,`h4`,9),vN(241,`Seletor`),ug(),Ac(242,`pre`,10),vN(243,`<po-password
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
    p-hide-password-peek="boolean"
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
</po-password>
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
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Ac(641,`code`),vN(642,`p-required-field-error-message`),ug(),vN(643,` em conjunto.`),ug()()()(),Ac(644,`tr`,15)(645,`td`,16)(646,`div`,24)(647,`span`,25),vN(648,` p-help`),Kc(649,`br`),ug()()(),Ac(650,`td`,20)(651,`code`,26),vN(652,`string`),ug()(),Ac(653,`td`,22),vN(654,`-`),ug(),Ac(655,`td`,23)(656,`em`)(657,`strong`),vN(658,`(opcional)`),ug()(),Ac(659,`p`),vN(660,`Texto de apoio do campo.`),ug()()(),Ac(661,`tr`,15)(662,`td`,16)(663,`div`,24)(664,`span`,25),vN(665,` p-hide-password-peek`),Kc(666,`br`),ug()()(),Ac(667,`td`,20)(668,`code`,27),vN(669,`boolean`),ug()(),Ac(670,`td`,22)(671,`p`)(672,`code`),vN(673,`false`),ug()()(),Ac(674,`td`,23)(675,`em`)(676,`strong`),vN(677,`(opcional)`),ug()(),Ac(678,`p`),vN(679,`Permite esconder a função de espiar a senha digitada.`),ug()()(),Ac(680,`tr`,15)(681,`td`,16)(682,`div`,24)(683,`span`,25),vN(684,` p-icon`),Kc(685,`br`),ug()()(),Ac(686,`td`,20)(687,`code`,26),vN(688,`string `),ug(),Ac(689,`code`,29),vN(690,` TemplateRef<void>`),ug()(),Ac(691,`td`,22),vN(692,`-`),ug(),Ac(693,`td`,23)(694,`em`)(695,`strong`),vN(696,`(opcional)`),ug()(),Ac(697,`p`),vN(698,`Define o ícone que será exibido no início do campo.`),ug(),Ac(699,`p`),vN(700,`É possível usar qualquer um dos ícones da `),Ac(701,`a`,30),vN(702,`Biblioteca de ícones`),ug(),vN(703,`. conforme exemplo abaixo:`),ug(),Ac(704,`pre`)(705,`code`),vN(706,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),ug()(),Ac(707,`p`),vN(708,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ac(709,`em`),vN(710,`Font Awesome`),ug(),vN(711,`, da seguinte forma:`),ug(),Ac(712,`pre`)(713,`code`),vN(714,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),ug()(),Ac(715,`p`),vN(716,`Outra opção seria a customização do ícone através do `),Ac(717,`code`),vN(718,`TemplateRef`),ug(),vN(719,`, conforme exemplo abaixo:`),ug(),Ac(720,`pre`)(721,`code`),vN(722,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ug()(),Ac(723,`blockquote`)(724,`p`),vN(725,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ac(726,`code`),vN(727,`font-size: inherit`),ug(),vN(728,` caso o ícone utilizado não aplique-o.`),ug()()()(),Ac(729,`tr`,15)(730,`td`,16)(731,`div`,17)(732,`span`,18),vN(733,` (p-keydown)`),Kc(734,`br`),ug()()(),Ac(735,`td`,20)(736,`code`,21),vN(737,`EventEmitter`),ug()(),Ac(738,`td`,22),vN(739,`-`),ug(),Ac(740,`td`,23)(741,`em`)(742,`strong`),vN(743,`(opcional)`),ug()(),Ac(744,`p`),vN(745,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ac(746,`code`),vN(747,`KeyboardEvent`),ug(),vN(748,` com informações sobre a tecla.`),ug()()(),Ac(749,`tr`,15)(750,`td`,16)(751,`div`,24)(752,`span`,25),vN(753,` p-label`),Kc(754,`br`),ug()()(),Ac(755,`td`,20)(756,`code`,26),vN(757,`string`),ug()(),Ac(758,`td`,22),vN(759,`-`),ug(),Ac(760,`td`,23)(761,`em`)(762,`strong`),vN(763,`(opcional)`),ug()(),Ac(764,`p`),vN(765,`Rótulo do campo.`),ug()()(),Ac(766,`tr`,15)(767,`td`,16)(768,`div`,24)(769,`span`,25),vN(770,` p-label-text-wrap`),Kc(771,`br`),ug()()(),Ac(772,`td`,20)(773,`code`,27),vN(774,`boolean`),ug()(),Ac(775,`td`,22)(776,`p`)(777,`code`),vN(778,`false`),ug()()(),Ac(779,`td`,23)(780,`em`)(781,`strong`),vN(782,`(opcional)`),ug()(),Ac(783,`p`),vN(784,`Habilita a quebra automática do texto da propriedade `),Ac(785,`code`),vN(786,`p-label`),ug(),vN(787,`. Quando `),Ac(788,`code`),vN(789,`p-label-text-wrap`),ug(),vN(790,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ug()()(),Ac(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),vN(795,` p-loading`),Kc(796,`br`),ug()()(),Ac(797,`td`,20)(798,`code`,27),vN(799,`boolean`),ug()(),Ac(800,`td`,22)(801,`p`)(802,`code`),vN(803,`false`),ug()()(),Ac(804,`td`,23)(805,`em`)(806,`strong`),vN(807,`(opcional)`),ug()(),Ac(808,`p`),vN(809,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ug()()(),Ac(810,`tr`,15)(811,`td`,16)(812,`div`,24)(813,`span`,25),vN(814,`p-mask`),Kc(815,`br`),ug()()(),Ac(816,`td`,20)(817,`code`,26),vN(818,`string`),ug()(),Ac(819,`td`,22),vN(820,`-`),ug(),Ac(821,`td`,23)(822,`em`)(823,`strong`),vN(824,`(opcional)`),ug()(),Ac(825,`p`),vN(826,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),ug()()(),Ac(827,`tr`,15)(828,`td`,16)(829,`div`,24)(830,`span`,25),vN(831,`p-mask-format-model`),Kc(832,`br`),ug()()(),Ac(833,`td`,20)(834,`code`,27),vN(835,`boolean`),ug()(),Ac(836,`td`,22)(837,`p`)(838,`code`),vN(839,`false`),ug()()(),Ac(840,`td`,23)(841,`em`)(842,`strong`),vN(843,`(opcional)`),ug()(),Ac(844,`p`),vN(845,`Indica se o `),Ac(846,`code`),vN(847,`model`),ug(),vN(848,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),ug()()(),Ac(849,`tr`,15)(850,`td`,16)(851,`div`,24)(852,`span`,25),vN(853,` p-mask-no-length-validation`),Kc(854,`br`),ug()()(),Ac(855,`td`,20)(856,`code`,27),vN(857,`boolean`),ug()(),Ac(858,`td`,22)(859,`p`)(860,`code`),vN(861,`false`),ug()()(),Ac(862,`td`,23)(863,`p`),vN(864,`Controla como o componente aplica as validações de comprimento mínimo (`),Ac(865,`code`),vN(866,`minLength`),ug(),vN(867,`) e máximo (`),Ac(868,`code`),vN(869,`maxLength`),ug(),vN(870,`) quando há uma máscara (`),Ac(871,`code`),vN(872,`p-mask`),ug(),vN(873,`) definida.`),ug(),Ac(874,`ul`)(875,`li`),vN(876,`Quando `),Ac(877,`code`),vN(878,`true`),ug(),vN(879,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ug(),Ac(880,`li`),vN(881,`Quando `),Ac(882,`code`),vN(883,`false`),ug(),vN(884,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ug()(),Ac(885,`blockquote`)(886,`p`),vN(887,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ac(888,`code`),vN(889,`p-mask-format-model`),ug(),vN(890,`.`),ug()(),Ac(891,`p`),vN(892,`Exemplo:`),ug(),Ac(893,`pre`)(894,`code`),vN(895,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ug()(),Ac(896,`ul`)(897,`li`),vN(898,`Entrada: `),Ac(899,`code`),vN(900,`123-456`),ug(),vN(901,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Ac(902,`code`),vN(903,`-`),ug(),vN(904,`.`),ug()()()(),Ac(905,`tr`,15)(906,`td`,16)(907,`div`,24)(908,`span`,25),vN(909,` p-maxlength`),Kc(910,`br`),ug()()(),Ac(911,`td`,20)(912,`code`,31),vN(913,`number`),ug()(),Ac(914,`td`,22),vN(915,`-`),ug(),Ac(916,`td`,23)(917,`em`)(918,`strong`),vN(919,`(opcional)`),ug()(),Ac(920,`p`),vN(921,`Indica a quantidade máxima de caracteres que o campo aceita.`),ug()()(),Ac(922,`tr`,15)(923,`td`,16)(924,`div`,24)(925,`span`,25),vN(926,` p-minlength`),Kc(927,`br`),ug()()(),Ac(928,`td`,20)(929,`code`,31),vN(930,`number`),ug()(),Ac(931,`td`,22),vN(932,`-`),ug(),Ac(933,`td`,23)(934,`em`)(935,`strong`),vN(936,`(opcional)`),ug()(),Ac(937,`p`),vN(938,`Indica a quantidade mínima de caracteres que o campo aceita.`),ug()()(),Ac(939,`tr`,15)(940,`td`,16)(941,`div`,24)(942,`span`,25),vN(943,` name`),Kc(944,`br`),ug()()(),Ac(945,`td`,20)(946,`code`,26),vN(947,`string`),ug()(),Ac(948,`td`,22),vN(949,`-`),ug(),Ac(950,`td`,23)(951,`p`),vN(952,`Nome e identificador do campo.`),ug()()(),Ac(953,`tr`,15)(954,`td`,16)(955,`div`,24)(956,`span`,25),vN(957,` p-no-autocomplete`),Kc(958,`br`),ug()()(),Ac(959,`td`,20)(960,`code`,27),vN(961,`boolean`),ug()(),Ac(962,`td`,22)(963,`p`)(964,`code`),vN(965,`false`),ug()()(),Ac(966,`td`,23)(967,`em`)(968,`strong`),vN(969,`(opcional)`),ug()(),Ac(970,`p`),vN(971,`Define a propriedade nativa `),Ac(972,`code`),vN(973,`autocomplete`),ug(),vN(974,` do campo como `),Ac(975,`code`),vN(976,`off`),ug(),vN(977,`.`),ug(),Ac(978,`blockquote`)(979,`p`),vN(980,`No componente `),Ac(981,`code`),vN(982,`po-password`),ug(),vN(983,` será definido como `),Ac(984,`code`),vN(985,`new-password`),ug(),vN(986,`.`),ug()(),Ac(987,`p`),vN(988,`Nos componentes `),Ac(989,`code`),vN(990,`po-password`),ug(),vN(991,` e `),Ac(992,`code`),vN(993,`po-login`),ug(),vN(994,` o valor padrão será `),Ac(995,`code`),vN(996,`true`),ug(),vN(997,`.`),ug()()(),Ac(998,`tr`,15)(999,`td`,16)(1e3,`div`,24)(1001,`span`,25),vN(1002,` p-optional`),Kc(1003,`br`),ug()()(),Ac(1004,`td`,20)(1005,`code`,27),vN(1006,`boolean`),ug()(),Ac(1007,`td`,22)(1008,`p`)(1009,`code`),vN(1010,`false`),ug()()(),Ac(1011,`td`,23)(1012,`em`)(1013,`strong`),vN(1014,`(opcional)`),ug()(),Ac(1015,`p`),vN(1016,`Define se a indicação de campo opcional será exibida.`),ug(),Ac(1017,`blockquote`)(1018,`p`),vN(1019,`Não será exibida a indicação se:`),ug()(),Ac(1020,`ul`)(1021,`li`),vN(1022,`O campo conter `),Ac(1023,`code`),vN(1024,`p-required`),ug(),vN(1025,`;`),ug(),Ac(1026,`li`),vN(1027,`Não possuir `),Ac(1028,`code`),vN(1029,`p-help`),ug(),vN(1030,` e/ou `),Ac(1031,`code`),vN(1032,`p-label`),ug(),vN(1033,`.`),ug()()()(),Ac(1034,`tr`,15)(1035,`td`,16)(1036,`div`,24)(1037,`span`,25),vN(1038,`p-pattern`),Kc(1039,`br`),ug()()(),Ac(1040,`td`,20)(1041,`code`,26),vN(1042,`string`),ug()(),Ac(1043,`td`,22),vN(1044,`-`),ug(),Ac(1045,`td`,23)(1046,`em`)(1047,`strong`),vN(1048,`(opcional)`),ug()(),Ac(1049,`p`),vN(1050,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Ac(1051,`code`),vN(1052,`(p-mask)`),ug(),vN(1053,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ug()()(),Ac(1054,`tr`,15)(1055,`td`,16)(1056,`div`,24)(1057,`span`,25),vN(1058,` p-placeholder`),Kc(1059,`br`),ug()()(),Ac(1060,`td`,20)(1061,`code`,26),vN(1062,`string`),ug()(),Ac(1063,`td`,22)(1064,`p`),vN(1065,`''`),ug()(),Ac(1066,`td`,23)(1067,`em`)(1068,`strong`),vN(1069,`(opcional)`),ug()(),Ac(1070,`p`),vN(1071,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ug()()(),Ac(1072,`tr`,15)(1073,`td`,16)(1074,`div`,24)(1075,`span`,25),vN(1076,` p-helper`),Kc(1077,`br`),ug()()(),Ac(1078,`td`,20)(1079,`code`,32),vN(1080,`PoHelperOptions `),ug(),Ac(1081,`code`,26),vN(1082,` string`),ug()(),Ac(1083,`td`,22),vN(1084,`-`),ug(),Ac(1085,`td`,23)(1086,`em`)(1087,`strong`),vN(1088,`(opcional)`),ug()(),Ac(1089,`p`),vN(1090,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ac(1091,`code`),vN(1092,`p-label`),ug(),vN(1093,` for definida, ou, ao lado do componente na ausência da propriedade `),Ac(1094,`code`),vN(1095,`p-label`),ug(),vN(1096,`.`),ug(),Ac(1097,`blockquote`)(1098,`p`),vN(1099,`Para mais informações acesse: `),Ac(1100,`a`,33),vN(1101,`https://po-ui.io/documentation/po-helper`),ug(),vN(1102,`.`),ug()(),Ac(1103,`blockquote`)(1104,`p`),vN(1105,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ac(1106,`code`),vN(1107,`p-additional-help-tooltip`),ug(),vN(1108,` e `),Ac(1109,`code`),vN(1110,`p-additional-help`),ug(),vN(1111,`) será ignorado.`),ug()()()(),Ac(1112,`tr`,15)(1113,`td`,16)(1114,`div`,24)(1115,`span`,25),vN(1116,`p-readonly`),Kc(1117,`br`),ug()()(),Ac(1118,`td`,20)(1119,`code`,27),vN(1120,`boolean`),ug()(),Ac(1121,`td`,22),vN(1122,`-`),ug(),Ac(1123,`td`,23)(1124,`em`)(1125,`strong`),vN(1126,`(opcional)`),ug()(),Ac(1127,`p`),vN(1128,`Indica que o campo será somente leitura.`),ug()()(),Ac(1129,`tr`,15)(1130,`td`,16)(1131,`div`,24)(1132,`span`,25),vN(1133,`p-required`),Kc(1134,`br`),ug()()(),Ac(1135,`td`,20)(1136,`code`,27),vN(1137,`boolean`),ug()(),Ac(1138,`td`,22)(1139,`p`)(1140,`code`),vN(1141,`false`),ug()()(),Ac(1142,`td`,23)(1143,`em`)(1144,`strong`),vN(1145,`(opcional)`),ug()(),Ac(1146,`p`),vN(1147,`Define que o campo será obrigatório.`),ug(),Ac(1148,`blockquote`)(1149,`p`),vN(1150,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ac(1151,`code`),vN(1152,`(p-disabled)`),ug(),vN(1153,`.`),ug()()()(),Ac(1154,`tr`,15)(1155,`td`,16)(1156,`div`,24)(1157,`span`,25),vN(1158,` p-required-field-error-message`),Kc(1159,`br`),ug()()(),Ac(1160,`td`,20)(1161,`code`,27),vN(1162,`boolean`),ug()(),Ac(1163,`td`,22)(1164,`p`)(1165,`code`),vN(1166,`false`),ug()()(),Ac(1167,`td`,23)(1168,`em`)(1169,`strong`),vN(1170,`(opcional)`),ug()(),Ac(1171,`p`),vN(1172,`Exibe a mensagem setada na propriedade `),Ac(1173,`code`),vN(1174,`p-error-pattern`),ug(),vN(1175,` se o campo estiver vazio e for requerido.`),ug(),Ac(1176,`blockquote`)(1177,`p`),vN(1178,`Necessário que a propriedade `),Ac(1179,`code`),vN(1180,`p-required`),ug(),vN(1181,` esteja habilitada.`),ug()()()(),Ac(1182,`tr`,15)(1183,`td`,16)(1184,`div`,24)(1185,`span`,25),vN(1186,` p-show-required`),Kc(1187,`br`),ug()()(),Ac(1188,`td`,20)(1189,`code`,27),vN(1190,`boolean`),ug()(),Ac(1191,`td`,22),vN(1192,`-`),ug(),Ac(1193,`td`,23)(1194,`p`),vN(1195,`Define se a indicação de campo obrigatório será exibida.`),ug(),Ac(1196,`blockquote`)(1197,`p`),vN(1198,`Não será exibida a indicação se:`),ug()(),Ac(1199,`ul`)(1200,`li`),vN(1201,`Não possuir `),Ac(1202,`code`),vN(1203,`p-help`),ug(),vN(1204,` e/ou `),Ac(1205,`code`),vN(1206,`p-label`),ug(),vN(1207,`.`),ug()()()(),Ac(1208,`tr`,15)(1209,`td`,16)(1210,`div`,24)(1211,`span`,25),vN(1212,` p-size`),Kc(1213,`br`),ug()()(),Ac(1214,`td`,20)(1215,`code`,26),vN(1216,`string`),ug()(),Ac(1217,`td`,22)(1218,`p`)(1219,`code`),vN(1220,`medium`),ug()()(),Ac(1221,`td`,23)(1222,`em`)(1223,`strong`),vN(1224,`(opcional)`),ug()(),Ac(1225,`p`),vN(1226,`Define o tamanho do componente:`),ug(),Ac(1227,`ul`)(1228,`li`)(1229,`code`),vN(1230,`small`),ug(),vN(1231,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ug(),Ac(1232,`li`)(1233,`code`),vN(1234,`medium`),ug(),vN(1235,`: altura do input como 44px.`),ug()(),Ac(1236,`blockquote`)(1237,`p`),vN(1238,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ac(1239,`code`),vN(1240,`medium`),ug(),vN(1241,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ac(1242,`a`,34),vN(1243,`po-theme`),ug(),vN(1244,`.`),ug()()()(),Ac(1245,`tr`,15)(1246,`td`,16)(1247,`div`,24)(1248,`span`,25),vN(1249,` p-upper-case`),Kc(1250,`br`),ug()()(),Ac(1251,`td`,20)(1252,`code`,27),vN(1253,`boolean`),ug()(),Ac(1254,`td`,22),vN(1255,`-`),ug(),Ac(1256,`td`,23)(1257,`p`),vN(1258,`Converte o conteúdo do campo em maiúsulo automaticamente.`),ug()()()(),Ac(1259,`h3`,11),vN(1260,`Métodos`),ug(),Ac(1261,`table`,35)(1262,`tr`,15)(1263,`th`,36)(1264,`div`,24)(1265,`h4`)(1266,`span`,25),vN(1267,` showAdditionalHelp `),ug()()()()(),Ac(1268,`tr`,23)(1269,`td`,23)(1270,`p`),vN(1271,`Método que exibe `),Ac(1272,`code`),vN(1273,`p-helper`),ug(),vN(1274,` ou executa a ação definida em `),Ac(1275,`code`),vN(1276,`p-helper{eventOnClick}`),ug(),vN(1277,` ou em `),Ac(1278,`code`),vN(1279,`p-additionalHelp`),ug(),vN(1280,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ac(1281,`code`),vN(1282,`p-keydown`),ug(),vN(1283,`.`),ug(),Ac(1284,`blockquote`)(1285,`p`),vN(1286,`Exibe ou oculta o conteúdo do componente `),Ac(1287,`code`),vN(1288,`po-helper`),ug(),vN(1289,` quando o componente estiver com foco.`),ug()(),Ac(1290,`pre`)(1291,`code`),vN(1292,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ug()(),Ac(1293,`pre`)(1294,`code`),vN(1295,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ug()()()()(),Kc(1296,`br`),Ac(1297,`table`,35)(1298,`tr`,15)(1299,`th`,36)(1300,`div`,24)(1301,`h4`)(1302,`span`,25),vN(1303,` focus `),ug()()()()(),Ac(1304,`tr`,23)(1305,`td`,23)(1306,`p`),vN(1307,`Função que atribui foco ao componente.`),ug(),Ac(1308,`p`),vN(1309,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ug(),Ac(1310,`pre`)(1311,`code`),vN(1312,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ug()()()()(),Kc(1313,`br`),Ac(1314,`h3`),vN(1315,`Interfaces`),ug(),Ac(1316,`h4`,37)(1317,`code`,5),vN(1318,`ErrorAsyncProperties`),ug()(),Ac(1319,`div`,2)(1320,`p`),vN(1321,`Interface para realizar uma validação assíncrona no componente.`),ug()(),Ac(1322,`h4`,11),vN(1323,`Propriedades`),ug(),Ac(1324,`table`,12)(1325,`tr`,13)(1326,`th`,14),vN(1327,`Nome`),ug(),Ac(1328,`th`,14),vN(1329,`Tipo`),ug(),Ac(1330,`th`,14),vN(1331,`Descrição`),ug()(),Ac(1332,`tr`,15)(1333,`td`,16)(1334,`div`,24)(1335,`span`,25),vN(1336,` errorAsync`),Kc(1337,`br`),ug()()(),Ac(1338,`td`,20)(1339,`code`,38),vN(1340,`(value) => Observable<boolean>`),ug()(),Ac(1341,`td`,23)(1342,`p`),vN(1343,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ac(1344,`code`),vN(1345,`change`),ug(),vN(1346,` ou `),Ac(1347,`code`),vN(1348,`change-model`),ug(),vN(1349,`, dependendo do valor da propriedade `),Ac(1350,`code`),vN(1351,`triggerMode`),ug(),vN(1352,`.`),ug()()(),Ac(1353,`tr`,15)(1354,`td`,16)(1355,`div`,24)(1356,`span`,25),vN(1357,` triggerMode`),Kc(1358,`br`),ug()()(),Ac(1359,`td`,20)(1360,`code`,39),vN(1361,`'change' `),ug(),Ac(1362,`code`,40),vN(1363,` 'changeModel'`),ug()(),Ac(1364,`td`,23)(1365,`em`)(1366,`strong`),vN(1367,`(opcional)`),ug()(),Ac(1368,`p`),vN(1369,`Controla se o método será executado no disparo do output `),Ac(1370,`code`),vN(1371,`change`),ug(),vN(1372,` ou `),Ac(1373,`code`),vN(1374,`change-model`),ug(),vN(1375,`.`),ug()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return a})();var ye=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(E(Qn),E(wn))};static ɵcmp=Hn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Password`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ac(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),pt(`p-click`,function(){return i.changeTab(`doc`)}),Kc(3,`sample-po-password-doc`),ug(),Ac(4,`po-tab`,3),pt(`p-click`,function(){return i.changeTab(`web`)}),Kc(5,`sample-po-password-basic-view`)(6,`sample-po-password-labs-view`)(7,`sample-po-password-reset-view`),ug()()()),l&2&&(cE(`p-actions`,i.actions),Hp(2),cE(`p-active`,i.activeTab===`doc`),Hp(2),cE(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[$ze,gae,bae,re,de,me,se],encapsulation:2,changeDetection:1})}return a})()}];var ue=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[kL.forChild(ye),kL]})}return a})();var $e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[Ta,ue]})}return a})();export{$e as DocPoPasswordModule};