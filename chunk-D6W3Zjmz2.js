import{$r as Xy,$t as iU,At as _Ce,Bi as jp,Ei as f,Fi as he,Gr as Un,Hn as Ax,Hr as Tl,Ii as hg,Ji as mY,Jn as Ce,Kn as Bx,Li as ht,Ni as gY,Nr as PO,Ot as Zt,Qn as DN,Qr as Xx,Tt as Xy$1,U as L0e,Ui as l0,Vn as Ak,Vr as Tk,X as N4,Xi as nw,Xr as Xn,Yn as Cn,Yt as hbe,_r as Ky,aa as uN,bt as W0e,fi as ag,gi as bL,ha as ww,jn as ybe,l as ar,lr as Gl,on as mCe,pa as w,r as Ga,rr as Ew,sa as ue$1,ui as a0,ut as S8e,va as yY,yi as cN,yn as ube}from"./main-3EWTGE7T.js";var oe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`password`,`p-label`,`PO Password`]],template:function(l,i){l&1&&Gl(0,`po-password`,0)},dependencies:[hbe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Password Basic`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-password-basic/sample-po-password-basic.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-password-basic/sample-po-password-basic.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-password-basic`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,Se,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,oe],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`hidepasswordpeek`,label:`Hide Password Peek`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern=``,this.placeholder=``,this.properties=[],this.size=`medium`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-labs`]],standalone:!1,decls:20,vars:37,consts:[[`f`,`ngForm`],[`name`,`password`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-hide-password-peek`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-pattern`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`pattern`,`p-clean`,``,`p-help`,`Ex.: '[a-zA]{5}[Z0-9]{3}'`,`p-label`,`Pattern (Regex)`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let m=Ax();Tl(0,`po-password`,1),ww(`ngModelChange`,function(r){return Ky(m),uN(i.password,r)||(i.password=r),Xy(r)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),ag(),a0(),Gl(1,`po-divider`),Tl(2,`div`,2),Gl(3,`po-info`,3)(4,`po-info`,4),ag(),Gl(5,`po-divider`),Tl(6,`form`,null,0)(8,`po-input`,5),ww(`ngModelChange`,function(r){return Ky(m),uN(i.label,r)||(i.label=r),Xy(r)}),ag(),a0(),Tl(9,`po-input`,6),ww(`ngModelChange`,function(r){return Ky(m),uN(i.help,r)||(i.help=r),Xy(r)}),ag(),a0(),Tl(10,`po-input`,7),ww(`ngModelChange`,function(r){return Ky(m),uN(i.helperText,r)||(i.helperText=r),Xy(r)}),ag(),a0(),Tl(11,`po-input`,8),ww(`ngModelChange`,function(r){return Ky(m),uN(i.placeholder,r)||(i.placeholder=r),Xy(r)}),ag(),a0(),Tl(12,`po-input`,9),ww(`ngModelChange`,function(r){return Ky(m),uN(i.errorPattern,r)||(i.errorPattern=r),Xy(r)}),ag(),a0(),Tl(13,`po-input`,10),ww(`ngModelChange`,function(r){return Ky(m),uN(i.pattern,r)||(i.pattern=r),Xy(r)}),ag(),a0(),Tl(14,`po-number`,11),ww(`ngModelChange`,function(r){return Ky(m),uN(i.minlength,r)||(i.minlength=r),Xy(r)}),ag(),a0(),Tl(15,`po-number`,12),ww(`ngModelChange`,function(r){return Ky(m),uN(i.maxlength,r)||(i.maxlength=r),Xy(r)}),ag(),a0(),Tl(16,`po-checkbox-group`,13),ww(`ngModelChange`,function(r){return Ky(m),uN(i.properties,r)||(i.properties=r),Xy(r)}),ag(),a0(),Tl(17,`po-radio-group`,14),ww(`ngModelChange`,function(r){return Ky(m),uN(i.size,r)||(i.size=r),Xy(r)}),ag(),a0(),Tl(18,`div`,2)(19,`po-button`,15),ht(`p-click`,function(){return i.restore()}),ag()()()}l&2&&(Ew(`ngModel`,i.password),nw(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-hide-password-peek`,i.properties.includes(`hidepasswordpeek`))(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-maxlength`,i.maxlength)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-pattern`,i.pattern)(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),l0(),jp(3),nw(`p-value`,i.password),jp(),nw(`p-value`,i.event),jp(4),Ew(`ngModel`,i.label),l0(),jp(),Ew(`ngModel`,i.help),l0(),jp(),Ew(`ngModel`,i.helperText),l0(),jp(),Ew(`ngModel`,i.placeholder),l0(),jp(),Ew(`ngModel`,i.errorPattern),l0(),jp(),Ew(`ngModel`,i.pattern),l0(),jp(),Ew(`ngModel`,i.minlength),l0(),jp(),Ew(`ngModel`,i.maxlength),l0(),jp(),Ew(`ngModel`,i.properties),nw(`p-options`,i.propertiesOptions),l0(),jp(),Ew(`ngModel`,i.size),nw(`p-options`,i.sizeOptions),l0())},dependencies:[yY,gY,mY,Ak,Tk,Zt,Xy$1,N4,iU,ube,hbe,L0e,ybe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Password Labs`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-password-labs/sample-po-password-labs.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<po-password
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-password-labs/sample-po-password-labs.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-password-labs`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,be,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,le],encapsulation:2,changeDetection:1})}return a})();var pe=(()=>{class a{poAlert=f(W0e);confirmNewPassword;currentPassword;errorPattern;help=`Initial password = 123456`;newPassword;password=`123456`;setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:`Password Reset`,message:`Password saved successfully`,ok:()=>this.reset()})):this.poAlert.alert({title:`Password Error`,message:`Your (new passsword) is different of (confirm new password)`,ok:()=>this.reset()})}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-reset`]],standalone:!1,features:[Ce([W0e])],decls:7,vars:7,consts:[[`passwordForm`,`ngForm`],[`name`,`currentPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`Current Password`,`p-mask`,`999999`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-help`],[`name`,`newPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`New password`,`p-mask`,`999999`,`p-minlength`,`6`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`confirmNewPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`Confirm New Password`,`p-mask`,`999999`,`p-minlength`,`6`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(l,i){if(l&1){let m=Ax();Tl(0,`form`,null,0)(2,`po-password`,1),ww(`ngModelChange`,function(r){return Ky(m),uN(i.currentPassword,r)||(i.currentPassword=r),Xy(r)}),ag(),a0(),Tl(3,`po-password`,2),ww(`ngModelChange`,function(r){return Ky(m),uN(i.newPassword,r)||(i.newPassword=r),Xy(r)}),ag(),a0(),Tl(4,`po-password`,3),ww(`ngModelChange`,function(r){return Ky(m),uN(i.confirmNewPassword,r)||(i.confirmNewPassword=r),Xy(r)}),ag(),a0(),Tl(5,`div`,4)(6,`po-button`,5),ht(`p-click`,function(){return i.setPassword()}),ag()()()}if(l&2){let m=Bx(1);jp(2),Ew(`ngModel`,i.currentPassword),nw(`p-help`,i.help),l0(),jp(),Ew(`ngModel`,i.newPassword),nw(`p-disabled`,i.currentPassword!==i.password),l0(),jp(),Ew(`ngModel`,i.confirmNewPassword),nw(`p-disabled`,i.currentPassword!==i.password),l0(),jp(2),nw(`p-disabled`,m.invalid)}},dependencies:[yY,gY,mY,Ak,Tk,Zt,hbe],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-reset-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(Gl(0,`br`),Tl(1,`blockquote`,0)(2,`label`,1),cN(3,`PO Password - Reset`),ag(),Tl(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),Gl(5,`span`),cN(6),ag()(),Tl(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),cN(12,`sample-po-password-reset/sample-po-password-reset.component.html`),ag(),Tl(13,`pre`,7),cN(14,`<form #passwordForm="ngForm">
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
`),ag()()(),Tl(15,`po-tab`,8)(16,`div`)(17,`label`,6),cN(18,`sample-po-password-reset/sample-po-password-reset.component.ts`),ag(),Tl(19,`pre`,9),cN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),ag()()()()(),Tl(21,`div`,10),Gl(22,`sample-po-password-reset`),ag(),Gl(23,`hr`)),l&2&&(jp(5),Xx(`po-icon `+i.sampleCodeButtonIcon),jp(),hg(` `,i.sampleCodeButtonLabel),jp(),nw(`ngClass`,DN(4,ve,i.hideSampleCodeTabs)))},dependencies:[PO,Ga,mCe,_Ce,pe],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-doc`]],standalone:!1,decls:1376,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(l,i){l&1&&(Tl(0,`div`,0)(1,`p`,1)(2,`code`),cN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),ag()(),Tl(4,`div`,2)(5,`p`),cN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),ag(),Tl(7,`blockquote`)(8,`p`),cN(9,`Não esqueça de importar o módulo `),Tl(10,`code`),cN(11,`FormsModule`),ag(),cN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Tl(13,`code`),cN(14,`ReactiveFormsModule`),ag(),cN(15,`, ambos nativos do Angular.`),ag()()(),Tl(16,`h3`,3),cN(17,`Componente`),ag(),Tl(18,`h4`,4)(19,`code`,5),cN(20,`PoPasswordComponent`),ag()(),Tl(21,`div`,2)(22,`p`),cN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),ag(),Tl(24,`p`),cN(25,`Importante:`),ag(),Tl(26,`ul`)(27,`li`),cN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),ag()(),Tl(29,`h4`),cN(30,`Tokens customizáveis`),ag(),Tl(31,`p`),cN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),Gl(33,`br`),cN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Tl(35,`code`),cN(36,`.po-input`),ag()(),Tl(37,`blockquote`)(38,`p`),cN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Tl(40,`a`,6),cN(41,`Grid System`),ag(),cN(42,`.`),ag()(),Tl(43,`blockquote`)(44,`p`),cN(45,`Para maiores informações, acesse o guia `),Tl(46,`a`,7),cN(47,`Personalizando o Tema Padrão com Tokens CSS`),ag(),cN(48,`.`),ag()(),Tl(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),cN(53,`Propriedade`),ag(),Tl(54,`th`),cN(55,`Descrição`),ag(),Tl(56,`th`),cN(57,`Valor Padrão`),ag()()(),Tl(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),cN(62,`Default Values`),ag()(),Gl(63,`td`)(64,`td`),ag(),Tl(65,`tr`)(66,`td`)(67,`code`),cN(68,`--font-family`),ag()(),Tl(69,`td`),cN(70,`Família tipográfica usada`),ag(),Tl(71,`td`)(72,`code`),cN(73,`var(--font-family-theme)`),ag()()(),Tl(74,`tr`)(75,`td`)(76,`code`),cN(77,`--font-size`),ag()(),Tl(78,`td`),cN(79,`Tamanho da fonte`),ag(),Tl(80,`td`)(81,`code`),cN(82,`var(--font-size-default)`),ag()()(),Tl(83,`tr`)(84,`td`)(85,`code`),cN(86,`--text-color-placeholder`),ag()(),Tl(87,`td`),cN(88,`Cor do texto placeholder`),ag(),Tl(89,`td`)(90,`code`),cN(91,`var(--color-neutral-light-30)`),ag()()(),Tl(92,`tr`)(93,`td`)(94,`code`),cN(95,`--color`),ag()(),Tl(96,`td`),cN(97,`Cor pincipal do input`),ag(),Tl(98,`td`)(99,`code`),cN(100,`var(--color-neutral-dark-70)`),ag()()(),Tl(101,`tr`)(102,`td`)(103,`code`),cN(104,`--background`),ag()(),Tl(105,`td`),cN(106,`Cor de background`),ag(),Tl(107,`td`)(108,`code`),cN(109,`var(--color-neutral-light-05)`),ag()()(),Tl(110,`tr`)(111,`td`)(112,`code`),cN(113,`--padding`),ag()(),Tl(114,`td`),cN(115,`Preenchimento`),ag(),Tl(116,`td`)(117,`code`),cN(118,`0 0.5rem`),ag()()(),Tl(119,`tr`)(120,`td`)(121,`code`),cN(122,`--text-color`),ag()(),Tl(123,`td`),cN(124,`Cor do texto`),ag(),Tl(125,`td`)(126,`code`),cN(127,`var(--color-neutral-dark-90)`),ag()()(),Tl(128,`tr`)(129,`td`)(130,`code`),cN(131,`--field-container-title-justify`),ag()(),Tl(132,`td`),cN(133,`Alinhamento horizontal do título (`),Tl(134,`code`),cN(135,`justify-content`),ag(),cN(136,`)`),ag(),Tl(137,`td`)(138,`code`),cN(139,`space-between`),ag()()(),Tl(140,`tr`)(141,`td`)(142,`code`),cN(143,`--field-container-title-flex`),ag()(),Tl(144,`td`),cN(145,`Flex do título (`),Tl(146,`code`),cN(147,`flex`),ag(),cN(148,`)`),ag(),Tl(149,`td`)(150,`code`),cN(151,`1 auto`),ag()()(),Tl(152,`tr`)(153,`td`)(154,`strong`),cN(155,`Hover`),ag()(),Gl(156,`td`)(157,`td`),ag(),Tl(158,`tr`)(159,`td`)(160,`code`),cN(161,`--color-hover`),ag()(),Tl(162,`td`),cN(163,`Cor principal no estado hover`),ag(),Tl(164,`td`)(165,`code`),cN(166,`var(--color-brand-01-dark)`),ag()()(),Tl(167,`tr`)(168,`td`)(169,`code`),cN(170,`--background-hover`),ag()(),Tl(171,`td`),cN(172,`Cor de background no estado hover`),ag(),Tl(173,`td`)(174,`code`),cN(175,`var(--color-brand-01-lightest)`),ag()()(),Tl(176,`tr`)(177,`td`)(178,`strong`),cN(179,`Focused`),ag()(),Gl(180,`td`)(181,`td`),ag(),Tl(182,`tr`)(183,`td`)(184,`code`),cN(185,`--color-focused`),ag()(),Tl(186,`td`),cN(187,`Cor principal no estado de focus`),ag(),Tl(188,`td`)(189,`code`),cN(190,`var(--color-action-default)`),ag()()(),Tl(191,`tr`)(192,`td`)(193,`code`),cN(194,`--outline-color-focused`),ag()(),Tl(195,`td`),cN(196,`Cor do outline do estado de focus`),ag(),Tl(197,`td`)(198,`code`),cN(199,`var(--color-action-focus)`),ag()()(),Tl(200,`tr`)(201,`td`)(202,`strong`),cN(203,`Disabled`),ag()(),Gl(204,`td`)(205,`td`),ag(),Tl(206,`tr`)(207,`td`)(208,`code`),cN(209,`--color-disabled`),ag()(),Tl(210,`td`),cN(211,`Cor principal no estado disabled`),ag(),Tl(212,`td`)(213,`code`),cN(214,`var(--color-neutral-light-30)`),ag()()(),Tl(215,`tr`)(216,`td`)(217,`code`),cN(218,`--background-disabled`),ag()(),Tl(219,`td`),cN(220,`Cor de background no estado disabled`),ag(),Tl(221,`td`)(222,`code`),cN(223,`var(--color-neutral-light-20)`),ag()()(),Tl(224,`tr`)(225,`td`)(226,`code`),cN(227,`--text-color-disabled`),ag()(),Tl(228,`td`),cN(229,`Cor do texto no estado disabled`),ag(),Tl(230,`td`)(231,`code`),cN(232,`var(--color-neutral-dark-70)`),ag()()()()(),Tl(233,`p`),Gl(234,`br`),cN(235,` O `),Tl(236,`code`),cN(237,`po-password`),ag(),cN(238,` é um input específico para senhas. Já possui tipo, estilo e ícone predefinidos.`),ag()(),Tl(239,`div`,8)(240,`h4`,9),cN(241,`Seletor`),ag(),Tl(242,`pre`,10),cN(243,`<po-password
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
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Tl(641,`code`),cN(642,`p-required-field-error-message`),ag(),cN(643,` em conjunto.`),ag()()()(),Tl(644,`tr`,15)(645,`td`,16)(646,`div`,24)(647,`span`,25),cN(648,` p-help`),Gl(649,`br`),ag()()(),Tl(650,`td`,20)(651,`code`,26),cN(652,`string`),ag()(),Tl(653,`td`,22),cN(654,`-`),ag(),Tl(655,`td`,23)(656,`em`)(657,`strong`),cN(658,`(opcional)`),ag()(),Tl(659,`p`),cN(660,`Texto de apoio do campo.`),ag()()(),Tl(661,`tr`,15)(662,`td`,16)(663,`div`,24)(664,`span`,25),cN(665,` p-hide-password-peek`),Gl(666,`br`),ag()()(),Tl(667,`td`,20)(668,`code`,27),cN(669,`boolean`),ag()(),Tl(670,`td`,22)(671,`p`)(672,`code`),cN(673,`false`),ag()()(),Tl(674,`td`,23)(675,`em`)(676,`strong`),cN(677,`(opcional)`),ag()(),Tl(678,`p`),cN(679,`Permite esconder a função de espiar a senha digitada.`),ag()()(),Tl(680,`tr`,15)(681,`td`,16)(682,`div`,24)(683,`span`,25),cN(684,` p-icon`),Gl(685,`br`),ag()()(),Tl(686,`td`,20)(687,`code`,26),cN(688,`string `),ag(),Tl(689,`code`,29),cN(690,` TemplateRef<void>`),ag()(),Tl(691,`td`,22),cN(692,`-`),ag(),Tl(693,`td`,23)(694,`em`)(695,`strong`),cN(696,`(opcional)`),ag()(),Tl(697,`p`),cN(698,`Define o ícone que será exibido no início do campo.`),ag(),Tl(699,`p`),cN(700,`É possível usar qualquer um dos ícones da `),Tl(701,`a`,30),cN(702,`Biblioteca de ícones`),ag(),cN(703,`. conforme exemplo abaixo:`),ag(),Tl(704,`pre`)(705,`code`),cN(706,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),ag()(),Tl(707,`p`),cN(708,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Tl(709,`em`),cN(710,`Font Awesome`),ag(),cN(711,`, da seguinte forma:`),ag(),Tl(712,`pre`)(713,`code`),cN(714,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),ag()(),Tl(715,`p`),cN(716,`Outra opção seria a customização do ícone através do `),Tl(717,`code`),cN(718,`TemplateRef`),ag(),cN(719,`, conforme exemplo abaixo:`),ag(),Tl(720,`pre`)(721,`code`),cN(722,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),ag()(),Tl(723,`blockquote`)(724,`p`),cN(725,`Para o ícone enquadrar corretamente, deve-se utilizar `),Tl(726,`code`),cN(727,`font-size: inherit`),ag(),cN(728,` caso o ícone utilizado não aplique-o.`),ag()()()(),Tl(729,`tr`,15)(730,`td`,16)(731,`div`,17)(732,`span`,18),cN(733,` (p-keydown)`),Gl(734,`br`),ag()()(),Tl(735,`td`,20)(736,`code`,21),cN(737,`EventEmitter`),ag()(),Tl(738,`td`,22),cN(739,`-`),ag(),Tl(740,`td`,23)(741,`em`)(742,`strong`),cN(743,`(opcional)`),ag()(),Tl(744,`p`),cN(745,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Tl(746,`code`),cN(747,`KeyboardEvent`),ag(),cN(748,` com informações sobre a tecla.`),ag()()(),Tl(749,`tr`,15)(750,`td`,16)(751,`div`,24)(752,`span`,25),cN(753,` p-label`),Gl(754,`br`),ag()()(),Tl(755,`td`,20)(756,`code`,26),cN(757,`string`),ag()(),Tl(758,`td`,22),cN(759,`-`),ag(),Tl(760,`td`,23)(761,`em`)(762,`strong`),cN(763,`(opcional)`),ag()(),Tl(764,`p`),cN(765,`Rótulo do campo.`),ag()()(),Tl(766,`tr`,15)(767,`td`,16)(768,`div`,24)(769,`span`,25),cN(770,` p-label-text-wrap`),Gl(771,`br`),ag()()(),Tl(772,`td`,20)(773,`code`,27),cN(774,`boolean`),ag()(),Tl(775,`td`,22)(776,`p`)(777,`code`),cN(778,`false`),ag()()(),Tl(779,`td`,23)(780,`em`)(781,`strong`),cN(782,`(opcional)`),ag()(),Tl(783,`p`),cN(784,`Habilita a quebra automática do texto da propriedade `),Tl(785,`code`),cN(786,`p-label`),ag(),cN(787,`. Quando `),Tl(788,`code`),cN(789,`p-label-text-wrap`),ag(),cN(790,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),ag()()(),Tl(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),cN(795,` p-loading`),Gl(796,`br`),ag()()(),Tl(797,`td`,20)(798,`code`,27),cN(799,`boolean`),ag()(),Tl(800,`td`,22)(801,`p`)(802,`code`),cN(803,`false`),ag()()(),Tl(804,`td`,23)(805,`em`)(806,`strong`),cN(807,`(opcional)`),ag()(),Tl(808,`p`),cN(809,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),ag()()(),Tl(810,`tr`,15)(811,`td`,16)(812,`div`,24)(813,`span`,25),cN(814,`p-mask`),Gl(815,`br`),ag()()(),Tl(816,`td`,20)(817,`code`,26),cN(818,`string`),ag()(),Tl(819,`td`,22),cN(820,`-`),ag(),Tl(821,`td`,23)(822,`em`)(823,`strong`),cN(824,`(opcional)`),ag()(),Tl(825,`p`),cN(826,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),ag()()(),Tl(827,`tr`,15)(828,`td`,16)(829,`div`,24)(830,`span`,25),cN(831,`p-mask-format-model`),Gl(832,`br`),ag()()(),Tl(833,`td`,20)(834,`code`,27),cN(835,`boolean`),ag()(),Tl(836,`td`,22)(837,`p`)(838,`code`),cN(839,`false`),ag()()(),Tl(840,`td`,23)(841,`em`)(842,`strong`),cN(843,`(opcional)`),ag()(),Tl(844,`p`),cN(845,`Indica se o `),Tl(846,`code`),cN(847,`model`),ag(),cN(848,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),ag()()(),Tl(849,`tr`,15)(850,`td`,16)(851,`div`,24)(852,`span`,25),cN(853,` p-mask-no-length-validation`),Gl(854,`br`),ag()()(),Tl(855,`td`,20)(856,`code`,27),cN(857,`boolean`),ag()(),Tl(858,`td`,22)(859,`p`)(860,`code`),cN(861,`false`),ag()()(),Tl(862,`td`,23)(863,`p`),cN(864,`Controla como o componente aplica as validações de comprimento mínimo (`),Tl(865,`code`),cN(866,`minLength`),ag(),cN(867,`) e máximo (`),Tl(868,`code`),cN(869,`maxLength`),ag(),cN(870,`) quando há uma máscara (`),Tl(871,`code`),cN(872,`p-mask`),ag(),cN(873,`) definida.`),ag(),Tl(874,`ul`)(875,`li`),cN(876,`Quando `),Tl(877,`code`),cN(878,`true`),ag(),cN(879,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),ag(),Tl(880,`li`),cN(881,`Quando `),Tl(882,`code`),cN(883,`false`),ag(),cN(884,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),ag()(),Tl(885,`blockquote`)(886,`p`),cN(887,`Esta propriedade é ignorada quando utilizada em conjunto com `),Tl(888,`code`),cN(889,`p-mask-format-model`),ag(),cN(890,`.`),ag()(),Tl(891,`p`),cN(892,`Exemplo:`),ag(),Tl(893,`pre`)(894,`code`),cN(895,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),ag()(),Tl(896,`ul`)(897,`li`),cN(898,`Entrada: `),Tl(899,`code`),cN(900,`123-456`),ag(),cN(901,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Tl(902,`code`),cN(903,`-`),ag(),cN(904,`.`),ag()()()(),Tl(905,`tr`,15)(906,`td`,16)(907,`div`,24)(908,`span`,25),cN(909,` p-maxlength`),Gl(910,`br`),ag()()(),Tl(911,`td`,20)(912,`code`,31),cN(913,`number`),ag()(),Tl(914,`td`,22),cN(915,`-`),ag(),Tl(916,`td`,23)(917,`em`)(918,`strong`),cN(919,`(opcional)`),ag()(),Tl(920,`p`),cN(921,`Indica a quantidade máxima de caracteres que o campo aceita.`),ag()()(),Tl(922,`tr`,15)(923,`td`,16)(924,`div`,24)(925,`span`,25),cN(926,` p-minlength`),Gl(927,`br`),ag()()(),Tl(928,`td`,20)(929,`code`,31),cN(930,`number`),ag()(),Tl(931,`td`,22),cN(932,`-`),ag(),Tl(933,`td`,23)(934,`em`)(935,`strong`),cN(936,`(opcional)`),ag()(),Tl(937,`p`),cN(938,`Indica a quantidade mínima de caracteres que o campo aceita.`),ag()()(),Tl(939,`tr`,15)(940,`td`,16)(941,`div`,24)(942,`span`,25),cN(943,` name`),Gl(944,`br`),ag()()(),Tl(945,`td`,20)(946,`code`,26),cN(947,`string`),ag()(),Tl(948,`td`,22),cN(949,`-`),ag(),Tl(950,`td`,23)(951,`p`),cN(952,`Nome e identificador do campo.`),ag()()(),Tl(953,`tr`,15)(954,`td`,16)(955,`div`,24)(956,`span`,25),cN(957,` p-no-autocomplete`),Gl(958,`br`),ag()()(),Tl(959,`td`,20)(960,`code`,27),cN(961,`boolean`),ag()(),Tl(962,`td`,22)(963,`p`)(964,`code`),cN(965,`false`),ag()()(),Tl(966,`td`,23)(967,`em`)(968,`strong`),cN(969,`(opcional)`),ag()(),Tl(970,`p`),cN(971,`Define a propriedade nativa `),Tl(972,`code`),cN(973,`autocomplete`),ag(),cN(974,` do campo como `),Tl(975,`code`),cN(976,`off`),ag(),cN(977,`.`),ag(),Tl(978,`blockquote`)(979,`p`),cN(980,`No componente `),Tl(981,`code`),cN(982,`po-password`),ag(),cN(983,` será definido como `),Tl(984,`code`),cN(985,`new-password`),ag(),cN(986,`.`),ag()(),Tl(987,`p`),cN(988,`Nos componentes `),Tl(989,`code`),cN(990,`po-password`),ag(),cN(991,` e `),Tl(992,`code`),cN(993,`po-login`),ag(),cN(994,` o valor padrão será `),Tl(995,`code`),cN(996,`true`),ag(),cN(997,`.`),ag()()(),Tl(998,`tr`,15)(999,`td`,16)(1e3,`div`,24)(1001,`span`,25),cN(1002,` p-optional`),Gl(1003,`br`),ag()()(),Tl(1004,`td`,20)(1005,`code`,27),cN(1006,`boolean`),ag()(),Tl(1007,`td`,22)(1008,`p`)(1009,`code`),cN(1010,`false`),ag()()(),Tl(1011,`td`,23)(1012,`em`)(1013,`strong`),cN(1014,`(opcional)`),ag()(),Tl(1015,`p`),cN(1016,`Define se a indicação de campo opcional será exibida.`),ag(),Tl(1017,`blockquote`)(1018,`p`),cN(1019,`Não será exibida a indicação se:`),ag()(),Tl(1020,`ul`)(1021,`li`),cN(1022,`O campo conter `),Tl(1023,`code`),cN(1024,`p-required`),ag(),cN(1025,`;`),ag(),Tl(1026,`li`),cN(1027,`Não possuir `),Tl(1028,`code`),cN(1029,`p-help`),ag(),cN(1030,` e/ou `),Tl(1031,`code`),cN(1032,`p-label`),ag(),cN(1033,`.`),ag()()()(),Tl(1034,`tr`,15)(1035,`td`,16)(1036,`div`,24)(1037,`span`,25),cN(1038,`p-pattern`),Gl(1039,`br`),ag()()(),Tl(1040,`td`,20)(1041,`code`,26),cN(1042,`string`),ag()(),Tl(1043,`td`,22),cN(1044,`-`),ag(),Tl(1045,`td`,23)(1046,`em`)(1047,`strong`),cN(1048,`(opcional)`),ag()(),Tl(1049,`p`),cN(1050,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Tl(1051,`code`),cN(1052,`(p-mask)`),ag(),cN(1053,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),ag()()(),Tl(1054,`tr`,15)(1055,`td`,16)(1056,`div`,24)(1057,`span`,25),cN(1058,` p-placeholder`),Gl(1059,`br`),ag()()(),Tl(1060,`td`,20)(1061,`code`,26),cN(1062,`string`),ag()(),Tl(1063,`td`,22)(1064,`p`),cN(1065,`''`),ag()(),Tl(1066,`td`,23)(1067,`em`)(1068,`strong`),cN(1069,`(opcional)`),ag()(),Tl(1070,`p`),cN(1071,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),ag()()(),Tl(1072,`tr`,15)(1073,`td`,16)(1074,`div`,24)(1075,`span`,25),cN(1076,` p-helper`),Gl(1077,`br`),ag()()(),Tl(1078,`td`,20)(1079,`code`,32),cN(1080,`PoHelperOptions `),ag(),Tl(1081,`code`,26),cN(1082,` string`),ag()(),Tl(1083,`td`,22),cN(1084,`-`),ag(),Tl(1085,`td`,23)(1086,`em`)(1087,`strong`),cN(1088,`(opcional)`),ag()(),Tl(1089,`p`),cN(1090,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Tl(1091,`code`),cN(1092,`p-label`),ag(),cN(1093,` for definida, ou, ao lado do componente na ausência da propriedade `),Tl(1094,`code`),cN(1095,`p-label`),ag(),cN(1096,`.`),ag(),Tl(1097,`blockquote`)(1098,`p`),cN(1099,`Para mais informações acesse: `),Tl(1100,`a`,33),cN(1101,`https://po-ui.io/documentation/po-helper`),ag(),cN(1102,`.`),ag()(),Tl(1103,`blockquote`)(1104,`p`),cN(1105,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Tl(1106,`code`),cN(1107,`p-additional-help-tooltip`),ag(),cN(1108,` e `),Tl(1109,`code`),cN(1110,`p-additional-help`),ag(),cN(1111,`) será ignorado.`),ag()()()(),Tl(1112,`tr`,15)(1113,`td`,16)(1114,`div`,24)(1115,`span`,25),cN(1116,`p-readonly`),Gl(1117,`br`),ag()()(),Tl(1118,`td`,20)(1119,`code`,27),cN(1120,`boolean`),ag()(),Tl(1121,`td`,22),cN(1122,`-`),ag(),Tl(1123,`td`,23)(1124,`em`)(1125,`strong`),cN(1126,`(opcional)`),ag()(),Tl(1127,`p`),cN(1128,`Indica que o campo será somente leitura.`),ag()()(),Tl(1129,`tr`,15)(1130,`td`,16)(1131,`div`,24)(1132,`span`,25),cN(1133,`p-required`),Gl(1134,`br`),ag()()(),Tl(1135,`td`,20)(1136,`code`,27),cN(1137,`boolean`),ag()(),Tl(1138,`td`,22)(1139,`p`)(1140,`code`),cN(1141,`false`),ag()()(),Tl(1142,`td`,23)(1143,`em`)(1144,`strong`),cN(1145,`(opcional)`),ag()(),Tl(1146,`p`),cN(1147,`Define que o campo será obrigatório.`),ag(),Tl(1148,`blockquote`)(1149,`p`),cN(1150,`Esta propriedade é desconsiderada quando o input está desabilitado `),Tl(1151,`code`),cN(1152,`(p-disabled)`),ag(),cN(1153,`.`),ag()()()(),Tl(1154,`tr`,15)(1155,`td`,16)(1156,`div`,24)(1157,`span`,25),cN(1158,` p-required-field-error-message`),Gl(1159,`br`),ag()()(),Tl(1160,`td`,20)(1161,`code`,27),cN(1162,`boolean`),ag()(),Tl(1163,`td`,22)(1164,`p`)(1165,`code`),cN(1166,`false`),ag()()(),Tl(1167,`td`,23)(1168,`em`)(1169,`strong`),cN(1170,`(opcional)`),ag()(),Tl(1171,`p`),cN(1172,`Exibe a mensagem setada na propriedade `),Tl(1173,`code`),cN(1174,`p-error-pattern`),ag(),cN(1175,` se o campo estiver vazio e for requerido.`),ag(),Tl(1176,`blockquote`)(1177,`p`),cN(1178,`Necessário que a propriedade `),Tl(1179,`code`),cN(1180,`p-required`),ag(),cN(1181,` esteja habilitada.`),ag()()()(),Tl(1182,`tr`,15)(1183,`td`,16)(1184,`div`,24)(1185,`span`,25),cN(1186,` p-show-required`),Gl(1187,`br`),ag()()(),Tl(1188,`td`,20)(1189,`code`,27),cN(1190,`boolean`),ag()(),Tl(1191,`td`,22),cN(1192,`-`),ag(),Tl(1193,`td`,23)(1194,`p`),cN(1195,`Define se a indicação de campo obrigatório será exibida.`),ag(),Tl(1196,`blockquote`)(1197,`p`),cN(1198,`Não será exibida a indicação se:`),ag()(),Tl(1199,`ul`)(1200,`li`),cN(1201,`Não possuir `),Tl(1202,`code`),cN(1203,`p-help`),ag(),cN(1204,` e/ou `),Tl(1205,`code`),cN(1206,`p-label`),ag(),cN(1207,`.`),ag()()()(),Tl(1208,`tr`,15)(1209,`td`,16)(1210,`div`,24)(1211,`span`,25),cN(1212,` p-size`),Gl(1213,`br`),ag()()(),Tl(1214,`td`,20)(1215,`code`,26),cN(1216,`string`),ag()(),Tl(1217,`td`,22)(1218,`p`)(1219,`code`),cN(1220,`medium`),ag()()(),Tl(1221,`td`,23)(1222,`em`)(1223,`strong`),cN(1224,`(opcional)`),ag()(),Tl(1225,`p`),cN(1226,`Define o tamanho do componente:`),ag(),Tl(1227,`ul`)(1228,`li`)(1229,`code`),cN(1230,`small`),ag(),cN(1231,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),ag(),Tl(1232,`li`)(1233,`code`),cN(1234,`medium`),ag(),cN(1235,`: altura do input como 44px.`),ag()(),Tl(1236,`blockquote`)(1237,`p`),cN(1238,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Tl(1239,`code`),cN(1240,`medium`),ag(),cN(1241,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Tl(1242,`a`,34),cN(1243,`po-theme`),ag(),cN(1244,`.`),ag()()()(),Tl(1245,`tr`,15)(1246,`td`,16)(1247,`div`,24)(1248,`span`,25),cN(1249,` p-upper-case`),Gl(1250,`br`),ag()()(),Tl(1251,`td`,20)(1252,`code`,27),cN(1253,`boolean`),ag()(),Tl(1254,`td`,22),cN(1255,`-`),ag(),Tl(1256,`td`,23)(1257,`p`),cN(1258,`Converte o conteúdo do campo em maiúsulo automaticamente.`),ag()()()(),Tl(1259,`h3`,11),cN(1260,`Métodos`),ag(),Tl(1261,`table`,35)(1262,`tr`,15)(1263,`th`,36)(1264,`div`,24)(1265,`h4`)(1266,`span`,25),cN(1267,` showAdditionalHelp `),ag()()()()(),Tl(1268,`tr`,23)(1269,`td`,23)(1270,`p`),cN(1271,`Método que exibe `),Tl(1272,`code`),cN(1273,`p-helper`),ag(),cN(1274,` ou executa a ação definida em `),Tl(1275,`code`),cN(1276,`p-helper{eventOnClick}`),ag(),cN(1277,` ou em `),Tl(1278,`code`),cN(1279,`p-additionalHelp`),ag(),cN(1280,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Tl(1281,`code`),cN(1282,`p-keydown`),ag(),cN(1283,`.`),ag(),Tl(1284,`blockquote`)(1285,`p`),cN(1286,`Exibe ou oculta o conteúdo do componente `),Tl(1287,`code`),cN(1288,`po-helper`),ag(),cN(1289,` quando o componente estiver com foco.`),ag()(),Tl(1290,`pre`)(1291,`code`),cN(1292,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),ag()(),Tl(1293,`pre`)(1294,`code`),cN(1295,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),ag()()()()(),Gl(1296,`br`),Tl(1297,`table`,35)(1298,`tr`,15)(1299,`th`,36)(1300,`div`,24)(1301,`h4`)(1302,`span`,25),cN(1303,` focus `),ag()()()()(),Tl(1304,`tr`,23)(1305,`td`,23)(1306,`p`),cN(1307,`Função que atribui foco ao componente.`),ag(),Tl(1308,`p`),cN(1309,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),ag(),Tl(1310,`pre`)(1311,`code`),cN(1312,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),ag()()()()(),Gl(1313,`br`),Tl(1314,`h3`),cN(1315,`Interfaces`),ag(),Tl(1316,`h4`,37)(1317,`code`,5),cN(1318,`ErrorAsyncProperties`),ag()(),Tl(1319,`div`,2)(1320,`p`),cN(1321,`Interface para realizar uma validação assíncrona no componente.`),ag()(),Tl(1322,`h4`,11),cN(1323,`Propriedades`),ag(),Tl(1324,`table`,12)(1325,`tr`,13)(1326,`th`,14),cN(1327,`Nome`),ag(),Tl(1328,`th`,14),cN(1329,`Tipo`),ag(),Tl(1330,`th`,14),cN(1331,`Descrição`),ag()(),Tl(1332,`tr`,15)(1333,`td`,16)(1334,`div`,24)(1335,`span`,25),cN(1336,` errorAsync`),Gl(1337,`br`),ag()()(),Tl(1338,`td`,20)(1339,`code`,38),cN(1340,`(value) => Observable<boolean>`),ag()(),Tl(1341,`td`,23)(1342,`p`),cN(1343,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Tl(1344,`code`),cN(1345,`change`),ag(),cN(1346,` ou `),Tl(1347,`code`),cN(1348,`change-model`),ag(),cN(1349,`, dependendo do valor da propriedade `),Tl(1350,`code`),cN(1351,`triggerMode`),ag(),cN(1352,`.`),ag()()(),Tl(1353,`tr`,15)(1354,`td`,16)(1355,`div`,24)(1356,`span`,25),cN(1357,` triggerMode`),Gl(1358,`br`),ag()()(),Tl(1359,`td`,20)(1360,`code`,39),cN(1361,`'change' `),ag(),Tl(1362,`code`,40),cN(1363,` 'changeModel'`),ag()(),Tl(1364,`td`,23)(1365,`em`)(1366,`strong`),cN(1367,`(opcional)`),ag()(),Tl(1368,`p`),cN(1369,`Controla se o método será executado no disparo do output `),Tl(1370,`code`),cN(1371,`change`),ag(),cN(1372,` ou `),Tl(1373,`code`),cN(1374,`change-model`),ag(),cN(1375,`.`),ag()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var ye=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Password`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Tl(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),Gl(3,`sample-po-password-doc`),ag(),Tl(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),Gl(5,`sample-po-password-basic-view`)(6,`sample-po-password-labs-view`)(7,`sample-po-password-reset-view`),ag()()()),l&2&&(nw(`p-actions`,i.actions),jp(2),nw(`p-active`,i.activeTab===`doc`),jp(2),nw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[S8e,mCe,_Ce,re,de,me,se],encapsulation:2,changeDetection:1})}return a})()}];var ue=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[bL.forChild(ye),bL]})}return a})();var $e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[ar,ue]})}return a})();export{$e as DocPoPasswordModule};