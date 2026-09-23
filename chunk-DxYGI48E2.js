import{$r as Vx,An as wbe,Et as V8e,F as G4,Hr as Tw,Ii as ht,Ir as Qy,It as Zt,Jn as CY,Jt as e_e,Kr as Un,M as ECe,Mi as gg,Mn as xbe,Ni as he,Qi as oN,Sa as yN,Ti as f0,Ui as lg,Vi as kk,Xn as Cn,Yi as mN,Yn as Ce,Zr as Vk,_r as Ml,ar as IY,bi as cw,br as NL,ci as Yx,cn as lU,ea as p0,ga as w,l as ar,mn as q0e,mr as MN,nr as HO,oa as ql,on as kbe,qr as Up,r as Ga,ri as Xn,sr as Jy,ua as ue$1,un as nb,va as wY,vr as Mw,vt as SCe,wi as f}from"./main-NT5YGKBQ.js";var oe=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`password`,`p-label`,`PO Password`]],template:function(l,i){l&1&&ql(0,`po-password`,0)},dependencies:[wbe],encapsulation:2,changeDetection:1})}return a})();var Se=a=>({"docs-sample-code-tabs":a});var re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Password Basic`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-password-basic/sample-po-password-basic.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-password-basic/sample-po-password-basic.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-password-basic`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,Se,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,oe],encapsulation:2,changeDetection:1})}return a})();var le=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:`clean`,label:`Clean`},{value:`disabled`,label:`Disabled`},{value:`errorLimit`,label:`Limit Error Message`},{value:`hidepasswordpeek`,label:`Hide Password Peek`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`loading`,label:`Loading`},{value:`noAutocomplete`,label:`No Autocomplete`},{value:`optional`,label:`Optional`},{value:`readonly`,label:`Read Only`},{value:`required`,label:`Required`},{value:`requiredFieldErrorMessage`,label:`Required Field Error Message`},{value:`showRequired`,label:`Show Required`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern=``,this.placeholder=``,this.properties=[],this.size=`medium`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-labs`]],standalone:!1,decls:20,vars:37,consts:[[`f`,`ngForm`],[`name`,`password`,3,`ngModelChange`,`p-blur`,`p-change`,`p-change-model`,`p-enter`,`p-keydown`,`ngModel`,`p-helper`,`p-clean`,`p-disabled`,`p-error-pattern`,`p-help`,`p-hide-password-peek`,`p-label`,`p-loading`,`p-maxlength`,`p-minlength`,`p-no-autocomplete`,`p-optional`,`p-pattern`,`p-placeholder`,`p-readonly`,`p-required`,`p-required-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`placeholder`,`p-clean`,``,`p-label`,`Placeholder`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`errorPattern`,`p-clean`,``,`p-label`,`Error Pattern`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`pattern`,`p-clean`,``,`p-help`,`Ex.: '[a-zA]{5}[Z0-9]{3}'`,`p-label`,`Pattern (Regex)`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`minlength`,`p-clean`,``,`p-label`,`Min Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`maxlength`,`p-clean`,``,`p-label`,`Max Length`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,i){if(l&1){let m=Vx();Ml(0,`po-password`,1),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.password,r)||(i.password=r),Jy(r)}),ht(`p-blur`,function(){return i.changeEvent(`p-blur`)})(`p-change`,function(){return i.changeEvent(`p-change`)})(`p-change-model`,function(){return i.changeEvent(`p-change-model`)})(`p-enter`,function(){return i.changeEvent(`p-enter`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)}),lg(),f0(),ql(1,`po-divider`),Ml(2,`div`,2),ql(3,`po-info`,3)(4,`po-info`,4),lg(),ql(5,`po-divider`),Ml(6,`form`,null,0)(8,`po-input`,5),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.label,r)||(i.label=r),Jy(r)}),lg(),f0(),Ml(9,`po-input`,6),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.help,r)||(i.help=r),Jy(r)}),lg(),f0(),Ml(10,`po-input`,7),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.helperText,r)||(i.helperText=r),Jy(r)}),lg(),f0(),Ml(11,`po-input`,8),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.placeholder,r)||(i.placeholder=r),Jy(r)}),lg(),f0(),Ml(12,`po-input`,9),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.errorPattern,r)||(i.errorPattern=r),Jy(r)}),lg(),f0(),Ml(13,`po-input`,10),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.pattern,r)||(i.pattern=r),Jy(r)}),lg(),f0(),Ml(14,`po-number`,11),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.minlength,r)||(i.minlength=r),Jy(r)}),lg(),f0(),Ml(15,`po-number`,12),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.maxlength,r)||(i.maxlength=r),Jy(r)}),lg(),f0(),Ml(16,`po-checkbox-group`,13),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.properties,r)||(i.properties=r),Jy(r)}),lg(),f0(),Ml(17,`po-radio-group`,14),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.size,r)||(i.size=r),Jy(r)}),lg(),f0(),Ml(18,`div`,2)(19,`po-button`,15),ht(`p-click`,function(){return i.restore()}),lg()()()}l&2&&(Tw(`ngModel`,i.password),cw(`p-helper`,i.helperText)(`p-clean`,i.properties.includes(`clean`))(`p-disabled`,i.properties.includes(`disabled`))(`p-error-pattern`,i.errorPattern)(`p-help`,i.help)(`p-hide-password-peek`,i.properties.includes(`hidepasswordpeek`))(`p-label`,i.label)(`p-loading`,i.properties?.includes(`loading`))(`p-maxlength`,i.maxlength)(`p-minlength`,i.minlength)(`p-no-autocomplete`,i.properties?.includes(`noAutocomplete`))(`p-optional`,i.properties.includes(`optional`))(`p-pattern`,i.pattern)(`p-placeholder`,i.placeholder)(`p-readonly`,i.properties.includes(`readonly`))(`p-required`,i.properties.includes(`required`))(`p-required-field-error-message`,i.properties.includes(`requiredFieldErrorMessage`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-size`,i.size)(`p-error-limit`,i.properties?.includes(`errorLimit`))(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`)),p0(),Up(3),cw(`p-value`,i.password),Up(),cw(`p-value`,i.event),Up(4),Tw(`ngModel`,i.label),p0(),Up(),Tw(`ngModel`,i.help),p0(),Up(),Tw(`ngModel`,i.helperText),p0(),Up(),Tw(`ngModel`,i.placeholder),p0(),Up(),Tw(`ngModel`,i.errorPattern),p0(),Up(),Tw(`ngModel`,i.pattern),p0(),Up(),Tw(`ngModel`,i.minlength),p0(),Up(),Tw(`ngModel`,i.maxlength),p0(),Up(),Tw(`ngModel`,i.properties),cw(`p-options`,i.propertiesOptions),p0(),Up(),Tw(`ngModel`,i.size),cw(`p-options`,i.sizeOptions),p0())},dependencies:[IY,wY,CY,Vk,kk,Zt,nb,G4,lU,xbe,wbe,q0e,kbe],encapsulation:2,changeDetection:1})}return a})();var be=a=>({"docs-sample-code-tabs":a});var de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Password Labs`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-password-labs/sample-po-password-labs.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<po-password
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-password-labs/sample-po-password-labs.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-password-labs`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,be,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,le],encapsulation:2,changeDetection:1})}return a})();var pe=(()=>{class a{poAlert=f(e_e);confirmNewPassword;currentPassword;errorPattern;help=`Initial password = 123456`;newPassword;password=`123456`;setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:`Password Reset`,message:`Password saved successfully`,ok:()=>this.reset()})):this.poAlert.alert({title:`Password Error`,message:`Your (new passsword) is different of (confirm new password)`,ok:()=>this.reset()})}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-reset`]],standalone:!1,features:[Ce([e_e])],decls:7,vars:7,consts:[[`passwordForm`,`ngForm`],[`name`,`currentPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`Current Password`,`p-mask`,`999999`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-help`],[`name`,`newPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`New password`,`p-mask`,`999999`,`p-minlength`,`6`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`confirmNewPassword`,`p-clean`,``,`p-error-pattern`,`invalid password`,`p-label`,`Confirm New Password`,`p-mask`,`999999`,`p-minlength`,`6`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[1,`po-row`],[`p-label`,`Save`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(l,i){if(l&1){let m=Vx();Ml(0,`form`,null,0)(2,`po-password`,1),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.currentPassword,r)||(i.currentPassword=r),Jy(r)}),lg(),f0(),Ml(3,`po-password`,2),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.newPassword,r)||(i.newPassword=r),Jy(r)}),lg(),f0(),Ml(4,`po-password`,3),Mw(`ngModelChange`,function(r){return Qy(m),yN(i.confirmNewPassword,r)||(i.confirmNewPassword=r),Jy(r)}),lg(),f0(),Ml(5,`div`,4)(6,`po-button`,5),ht(`p-click`,function(){return i.setPassword()}),lg()()()}if(l&2){let m=Yx(1);Up(2),Tw(`ngModel`,i.currentPassword),cw(`p-help`,i.help),p0(),Up(),Tw(`ngModel`,i.newPassword),cw(`p-disabled`,i.currentPassword!==i.password),p0(),Up(),Tw(`ngModel`,i.confirmNewPassword),cw(`p-disabled`,i.currentPassword!==i.password),p0(),Up(2),cw(`p-disabled`,m.invalid)}},dependencies:[IY,wY,CY,Vk,kk,Zt,wbe],encapsulation:2,changeDetection:1})}return a})();var ve=a=>({"docs-sample-code-tabs":a});var me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-reset-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(ql(0,`br`),Ml(1,`blockquote`,0)(2,`label`,1),mN(3,`PO Password - Reset`),lg(),Ml(4,`a`,2),ht(`click`,function(){return i.toggleSampleCodeTabs()}),ql(5,`span`),mN(6),lg()(),Ml(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),mN(12,`sample-po-password-reset/sample-po-password-reset.component.html`),lg(),Ml(13,`pre`,7),mN(14,`<form #passwordForm="ngForm">
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
`),lg()()(),Ml(15,`po-tab`,8)(16,`div`)(17,`label`,6),mN(18,`sample-po-password-reset/sample-po-password-reset.component.ts`),lg(),Ml(19,`pre`,9),mN(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),lg()()()()(),Ml(21,`div`,10),ql(22,`sample-po-password-reset`),lg(),ql(23,`hr`)),l&2&&(Up(5),oN(`po-icon `+i.sampleCodeButtonIcon),Up(),gg(` `,i.sampleCodeButtonLabel),Up(),cw(`ngClass`,MN(4,ve,i.hideSampleCodeTabs)))},dependencies:[HO,Ga,SCe,ECe,pe],encapsulation:2,changeDetection:1})}return a})();var se=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵcmp=Un({type:a,selectors:[[`sample-po-password-doc`]],standalone:!1,decls:1376,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/grid-system`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`ErrorAsyncProperties`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`(value)`,`=>`,`Observable<boolean>`],[`pan`,``,1,`docs-api-property-type`,`'change'`],[`pan`,``,1,`docs-api-property-type`,`'changeModel'`]],template:function(l,i){l&1&&(Ml(0,`div`,0)(1,`p`,1)(2,`code`),mN(3,`import { PoFieldModule } from '@po-ui/ng-components';`),lg()(),Ml(4,`div`,2)(5,`p`),mN(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),lg(),Ml(7,`blockquote`)(8,`p`),mN(9,`Não esqueça de importar o módulo `),Ml(10,`code`),mN(11,`FormsModule`),lg(),mN(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Ml(13,`code`),mN(14,`ReactiveFormsModule`),lg(),mN(15,`, ambos nativos do Angular.`),lg()()(),Ml(16,`h3`,3),mN(17,`Componente`),lg(),Ml(18,`h4`,4)(19,`code`,5),mN(20,`PoPasswordComponent`),lg()(),Ml(21,`div`,2)(22,`p`),mN(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),lg(),Ml(24,`p`),mN(25,`Importante:`),lg(),Ml(26,`ul`)(27,`li`),mN(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),lg()(),Ml(29,`h4`),mN(30,`Tokens customizáveis`),lg(),Ml(31,`p`),mN(32,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),ql(33,`br`),mN(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Ml(35,`code`),mN(36,`.po-input`),lg()(),Ml(37,`blockquote`)(38,`p`),mN(39,`Para correto alinhamento é recomendado o uso das classes de espaçamento do `),Ml(40,`a`,6),mN(41,`Grid System`),lg(),mN(42,`.`),lg()(),Ml(43,`blockquote`)(44,`p`),mN(45,`Para maiores informações, acesse o guia `),Ml(46,`a`,7),mN(47,`Personalizando o Tema Padrão com Tokens CSS`),lg(),mN(48,`.`),lg()(),Ml(49,`table`)(50,`thead`)(51,`tr`)(52,`th`),mN(53,`Propriedade`),lg(),Ml(54,`th`),mN(55,`Descrição`),lg(),Ml(56,`th`),mN(57,`Valor Padrão`),lg()()(),Ml(58,`tbody`)(59,`tr`)(60,`td`)(61,`strong`),mN(62,`Default Values`),lg()(),ql(63,`td`)(64,`td`),lg(),Ml(65,`tr`)(66,`td`)(67,`code`),mN(68,`--font-family`),lg()(),Ml(69,`td`),mN(70,`Família tipográfica usada`),lg(),Ml(71,`td`)(72,`code`),mN(73,`var(--font-family-theme)`),lg()()(),Ml(74,`tr`)(75,`td`)(76,`code`),mN(77,`--font-size`),lg()(),Ml(78,`td`),mN(79,`Tamanho da fonte`),lg(),Ml(80,`td`)(81,`code`),mN(82,`var(--font-size-default)`),lg()()(),Ml(83,`tr`)(84,`td`)(85,`code`),mN(86,`--text-color-placeholder`),lg()(),Ml(87,`td`),mN(88,`Cor do texto placeholder`),lg(),Ml(89,`td`)(90,`code`),mN(91,`var(--color-neutral-light-30)`),lg()()(),Ml(92,`tr`)(93,`td`)(94,`code`),mN(95,`--color`),lg()(),Ml(96,`td`),mN(97,`Cor pincipal do input`),lg(),Ml(98,`td`)(99,`code`),mN(100,`var(--color-neutral-dark-70)`),lg()()(),Ml(101,`tr`)(102,`td`)(103,`code`),mN(104,`--background`),lg()(),Ml(105,`td`),mN(106,`Cor de background`),lg(),Ml(107,`td`)(108,`code`),mN(109,`var(--color-neutral-light-05)`),lg()()(),Ml(110,`tr`)(111,`td`)(112,`code`),mN(113,`--padding`),lg()(),Ml(114,`td`),mN(115,`Preenchimento`),lg(),Ml(116,`td`)(117,`code`),mN(118,`0 0.5rem`),lg()()(),Ml(119,`tr`)(120,`td`)(121,`code`),mN(122,`--text-color`),lg()(),Ml(123,`td`),mN(124,`Cor do texto`),lg(),Ml(125,`td`)(126,`code`),mN(127,`var(--color-neutral-dark-90)`),lg()()(),Ml(128,`tr`)(129,`td`)(130,`code`),mN(131,`--field-container-title-justify`),lg()(),Ml(132,`td`),mN(133,`Alinhamento horizontal do título (`),Ml(134,`code`),mN(135,`justify-content`),lg(),mN(136,`)`),lg(),Ml(137,`td`)(138,`code`),mN(139,`space-between`),lg()()(),Ml(140,`tr`)(141,`td`)(142,`code`),mN(143,`--field-container-title-flex`),lg()(),Ml(144,`td`),mN(145,`Flex do título (`),Ml(146,`code`),mN(147,`flex`),lg(),mN(148,`)`),lg(),Ml(149,`td`)(150,`code`),mN(151,`1 auto`),lg()()(),Ml(152,`tr`)(153,`td`)(154,`strong`),mN(155,`Hover`),lg()(),ql(156,`td`)(157,`td`),lg(),Ml(158,`tr`)(159,`td`)(160,`code`),mN(161,`--color-hover`),lg()(),Ml(162,`td`),mN(163,`Cor principal no estado hover`),lg(),Ml(164,`td`)(165,`code`),mN(166,`var(--color-brand-01-dark)`),lg()()(),Ml(167,`tr`)(168,`td`)(169,`code`),mN(170,`--background-hover`),lg()(),Ml(171,`td`),mN(172,`Cor de background no estado hover`),lg(),Ml(173,`td`)(174,`code`),mN(175,`var(--color-brand-01-lightest)`),lg()()(),Ml(176,`tr`)(177,`td`)(178,`strong`),mN(179,`Focused`),lg()(),ql(180,`td`)(181,`td`),lg(),Ml(182,`tr`)(183,`td`)(184,`code`),mN(185,`--color-focused`),lg()(),Ml(186,`td`),mN(187,`Cor principal no estado de focus`),lg(),Ml(188,`td`)(189,`code`),mN(190,`var(--color-action-default)`),lg()()(),Ml(191,`tr`)(192,`td`)(193,`code`),mN(194,`--outline-color-focused`),lg()(),Ml(195,`td`),mN(196,`Cor do outline do estado de focus`),lg(),Ml(197,`td`)(198,`code`),mN(199,`var(--color-action-focus)`),lg()()(),Ml(200,`tr`)(201,`td`)(202,`strong`),mN(203,`Disabled`),lg()(),ql(204,`td`)(205,`td`),lg(),Ml(206,`tr`)(207,`td`)(208,`code`),mN(209,`--color-disabled`),lg()(),Ml(210,`td`),mN(211,`Cor principal no estado disabled`),lg(),Ml(212,`td`)(213,`code`),mN(214,`var(--color-neutral-light-30)`),lg()()(),Ml(215,`tr`)(216,`td`)(217,`code`),mN(218,`--background-disabled`),lg()(),Ml(219,`td`),mN(220,`Cor de background no estado disabled`),lg(),Ml(221,`td`)(222,`code`),mN(223,`var(--color-neutral-light-20)`),lg()()(),Ml(224,`tr`)(225,`td`)(226,`code`),mN(227,`--text-color-disabled`),lg()(),Ml(228,`td`),mN(229,`Cor do texto no estado disabled`),lg(),Ml(230,`td`)(231,`code`),mN(232,`var(--color-neutral-dark-70)`),lg()()()()(),Ml(233,`p`),ql(234,`br`),mN(235,` O `),Ml(236,`code`),mN(237,`po-password`),lg(),mN(238,` é um input específico para senhas. Já possui tipo, estilo e ícone predefinidos.`),lg()(),Ml(239,`div`,8)(240,`h4`,9),mN(241,`Seletor`),lg(),Ml(242,`pre`,10),mN(243,`<po-password
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
Para exibir a mensagem com o campo vazio, utilize a propriedade `),Ml(641,`code`),mN(642,`p-required-field-error-message`),lg(),mN(643,` em conjunto.`),lg()()()(),Ml(644,`tr`,15)(645,`td`,16)(646,`div`,24)(647,`span`,25),mN(648,` p-help`),ql(649,`br`),lg()()(),Ml(650,`td`,20)(651,`code`,26),mN(652,`string`),lg()(),Ml(653,`td`,22),mN(654,`-`),lg(),Ml(655,`td`,23)(656,`em`)(657,`strong`),mN(658,`(opcional)`),lg()(),Ml(659,`p`),mN(660,`Texto de apoio do campo.`),lg()()(),Ml(661,`tr`,15)(662,`td`,16)(663,`div`,24)(664,`span`,25),mN(665,` p-hide-password-peek`),ql(666,`br`),lg()()(),Ml(667,`td`,20)(668,`code`,27),mN(669,`boolean`),lg()(),Ml(670,`td`,22)(671,`p`)(672,`code`),mN(673,`false`),lg()()(),Ml(674,`td`,23)(675,`em`)(676,`strong`),mN(677,`(opcional)`),lg()(),Ml(678,`p`),mN(679,`Permite esconder a função de espiar a senha digitada.`),lg()()(),Ml(680,`tr`,15)(681,`td`,16)(682,`div`,24)(683,`span`,25),mN(684,` p-icon`),ql(685,`br`),lg()()(),Ml(686,`td`,20)(687,`code`,26),mN(688,`string `),lg(),Ml(689,`code`,29),mN(690,` TemplateRef<void>`),lg()(),Ml(691,`td`,22),mN(692,`-`),lg(),Ml(693,`td`,23)(694,`em`)(695,`strong`),mN(696,`(opcional)`),lg()(),Ml(697,`p`),mN(698,`Define o ícone que será exibido no início do campo.`),lg(),Ml(699,`p`),mN(700,`É possível usar qualquer um dos ícones da `),Ml(701,`a`,30),mN(702,`Biblioteca de ícones`),lg(),mN(703,`. conforme exemplo abaixo:`),lg(),Ml(704,`pre`)(705,`code`),mN(706,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),lg()(),Ml(707,`p`),mN(708,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Ml(709,`em`),mN(710,`Font Awesome`),lg(),mN(711,`, da seguinte forma:`),lg(),Ml(712,`pre`)(713,`code`),mN(714,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),lg()(),Ml(715,`p`),mN(716,`Outra opção seria a customização do ícone através do `),Ml(717,`code`),mN(718,`TemplateRef`),lg(),mN(719,`, conforme exemplo abaixo:`),lg(),Ml(720,`pre`)(721,`code`),mN(722,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),lg()(),Ml(723,`blockquote`)(724,`p`),mN(725,`Para o ícone enquadrar corretamente, deve-se utilizar `),Ml(726,`code`),mN(727,`font-size: inherit`),lg(),mN(728,` caso o ícone utilizado não aplique-o.`),lg()()()(),Ml(729,`tr`,15)(730,`td`,16)(731,`div`,17)(732,`span`,18),mN(733,` (p-keydown)`),ql(734,`br`),lg()()(),Ml(735,`td`,20)(736,`code`,21),mN(737,`EventEmitter`),lg()(),Ml(738,`td`,22),mN(739,`-`),lg(),Ml(740,`td`,23)(741,`em`)(742,`strong`),mN(743,`(opcional)`),lg()(),Ml(744,`p`),mN(745,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Ml(746,`code`),mN(747,`KeyboardEvent`),lg(),mN(748,` com informações sobre a tecla.`),lg()()(),Ml(749,`tr`,15)(750,`td`,16)(751,`div`,24)(752,`span`,25),mN(753,` p-label`),ql(754,`br`),lg()()(),Ml(755,`td`,20)(756,`code`,26),mN(757,`string`),lg()(),Ml(758,`td`,22),mN(759,`-`),lg(),Ml(760,`td`,23)(761,`em`)(762,`strong`),mN(763,`(opcional)`),lg()(),Ml(764,`p`),mN(765,`Rótulo do campo.`),lg()()(),Ml(766,`tr`,15)(767,`td`,16)(768,`div`,24)(769,`span`,25),mN(770,` p-label-text-wrap`),ql(771,`br`),lg()()(),Ml(772,`td`,20)(773,`code`,27),mN(774,`boolean`),lg()(),Ml(775,`td`,22)(776,`p`)(777,`code`),mN(778,`false`),lg()()(),Ml(779,`td`,23)(780,`em`)(781,`strong`),mN(782,`(opcional)`),lg()(),Ml(783,`p`),mN(784,`Habilita a quebra automática do texto da propriedade `),Ml(785,`code`),mN(786,`p-label`),lg(),mN(787,`. Quando `),Ml(788,`code`),mN(789,`p-label-text-wrap`),lg(),mN(790,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),lg()()(),Ml(791,`tr`,15)(792,`td`,16)(793,`div`,24)(794,`span`,25),mN(795,` p-loading`),ql(796,`br`),lg()()(),Ml(797,`td`,20)(798,`code`,27),mN(799,`boolean`),lg()(),Ml(800,`td`,22)(801,`p`)(802,`code`),mN(803,`false`),lg()()(),Ml(804,`td`,23)(805,`em`)(806,`strong`),mN(807,`(opcional)`),lg()(),Ml(808,`p`),mN(809,`Exibe um ícone de carregamento no lado direito do campo para sinalizar que uma operação está em andamento.`),lg()()(),Ml(810,`tr`,15)(811,`td`,16)(812,`div`,24)(813,`span`,25),mN(814,`p-mask`),ql(815,`br`),lg()()(),Ml(816,`td`,20)(817,`code`,26),mN(818,`string`),lg()(),Ml(819,`td`,22),mN(820,`-`),lg(),Ml(821,`td`,23)(822,`em`)(823,`strong`),mN(824,`(opcional)`),lg()(),Ml(825,`p`),mN(826,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),lg()()(),Ml(827,`tr`,15)(828,`td`,16)(829,`div`,24)(830,`span`,25),mN(831,`p-mask-format-model`),ql(832,`br`),lg()()(),Ml(833,`td`,20)(834,`code`,27),mN(835,`boolean`),lg()(),Ml(836,`td`,22)(837,`p`)(838,`code`),mN(839,`false`),lg()()(),Ml(840,`td`,23)(841,`em`)(842,`strong`),mN(843,`(opcional)`),lg()(),Ml(844,`p`),mN(845,`Indica se o `),Ml(846,`code`),mN(847,`model`),lg(),mN(848,` receberá o valor formatado pela máscara ou apenas o valor puro (sem formatação).`),lg()()(),Ml(849,`tr`,15)(850,`td`,16)(851,`div`,24)(852,`span`,25),mN(853,` p-mask-no-length-validation`),ql(854,`br`),lg()()(),Ml(855,`td`,20)(856,`code`,27),mN(857,`boolean`),lg()(),Ml(858,`td`,22)(859,`p`)(860,`code`),mN(861,`false`),lg()()(),Ml(862,`td`,23)(863,`p`),mN(864,`Controla como o componente aplica as validações de comprimento mínimo (`),Ml(865,`code`),mN(866,`minLength`),lg(),mN(867,`) e máximo (`),Ml(868,`code`),mN(869,`maxLength`),lg(),mN(870,`) quando há uma máscara (`),Ml(871,`code`),mN(872,`p-mask`),lg(),mN(873,`) definida.`),lg(),Ml(874,`ul`)(875,`li`),mN(876,`Quando `),Ml(877,`code`),mN(878,`true`),lg(),mN(879,`, apenas os caracteres alfanuméricos serão contabilizados para a validação dos comprimentos.`),lg(),Ml(880,`li`),mN(881,`Quando `),Ml(882,`code`),mN(883,`false`),lg(),mN(884,`, todos os caracteres, incluindo os especiais da máscara, serão considerados na validação.`),lg()(),Ml(885,`blockquote`)(886,`p`),mN(887,`Esta propriedade é ignorada quando utilizada em conjunto com `),Ml(888,`code`),mN(889,`p-mask-format-model`),lg(),mN(890,`.`),lg()(),Ml(891,`p`),mN(892,`Exemplo:`),lg(),Ml(893,`pre`)(894,`code`),mN(895,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),lg()(),Ml(896,`ul`)(897,`li`),mN(898,`Entrada: `),Ml(899,`code`),mN(900,`123-456`),lg(),mN(901,` → Validação será aplicada somente aos números, ignorando o caractere especial `),Ml(902,`code`),mN(903,`-`),lg(),mN(904,`.`),lg()()()(),Ml(905,`tr`,15)(906,`td`,16)(907,`div`,24)(908,`span`,25),mN(909,` p-maxlength`),ql(910,`br`),lg()()(),Ml(911,`td`,20)(912,`code`,31),mN(913,`number`),lg()(),Ml(914,`td`,22),mN(915,`-`),lg(),Ml(916,`td`,23)(917,`em`)(918,`strong`),mN(919,`(opcional)`),lg()(),Ml(920,`p`),mN(921,`Indica a quantidade máxima de caracteres que o campo aceita.`),lg()()(),Ml(922,`tr`,15)(923,`td`,16)(924,`div`,24)(925,`span`,25),mN(926,` p-minlength`),ql(927,`br`),lg()()(),Ml(928,`td`,20)(929,`code`,31),mN(930,`number`),lg()(),Ml(931,`td`,22),mN(932,`-`),lg(),Ml(933,`td`,23)(934,`em`)(935,`strong`),mN(936,`(opcional)`),lg()(),Ml(937,`p`),mN(938,`Indica a quantidade mínima de caracteres que o campo aceita.`),lg()()(),Ml(939,`tr`,15)(940,`td`,16)(941,`div`,24)(942,`span`,25),mN(943,` name`),ql(944,`br`),lg()()(),Ml(945,`td`,20)(946,`code`,26),mN(947,`string`),lg()(),Ml(948,`td`,22),mN(949,`-`),lg(),Ml(950,`td`,23)(951,`p`),mN(952,`Nome e identificador do campo.`),lg()()(),Ml(953,`tr`,15)(954,`td`,16)(955,`div`,24)(956,`span`,25),mN(957,` p-no-autocomplete`),ql(958,`br`),lg()()(),Ml(959,`td`,20)(960,`code`,27),mN(961,`boolean`),lg()(),Ml(962,`td`,22)(963,`p`)(964,`code`),mN(965,`false`),lg()()(),Ml(966,`td`,23)(967,`em`)(968,`strong`),mN(969,`(opcional)`),lg()(),Ml(970,`p`),mN(971,`Define a propriedade nativa `),Ml(972,`code`),mN(973,`autocomplete`),lg(),mN(974,` do campo como `),Ml(975,`code`),mN(976,`off`),lg(),mN(977,`.`),lg(),Ml(978,`blockquote`)(979,`p`),mN(980,`No componente `),Ml(981,`code`),mN(982,`po-password`),lg(),mN(983,` será definido como `),Ml(984,`code`),mN(985,`new-password`),lg(),mN(986,`.`),lg()(),Ml(987,`p`),mN(988,`Nos componentes `),Ml(989,`code`),mN(990,`po-password`),lg(),mN(991,` e `),Ml(992,`code`),mN(993,`po-login`),lg(),mN(994,` o valor padrão será `),Ml(995,`code`),mN(996,`true`),lg(),mN(997,`.`),lg()()(),Ml(998,`tr`,15)(999,`td`,16)(1e3,`div`,24)(1001,`span`,25),mN(1002,` p-optional`),ql(1003,`br`),lg()()(),Ml(1004,`td`,20)(1005,`code`,27),mN(1006,`boolean`),lg()(),Ml(1007,`td`,22)(1008,`p`)(1009,`code`),mN(1010,`false`),lg()()(),Ml(1011,`td`,23)(1012,`em`)(1013,`strong`),mN(1014,`(opcional)`),lg()(),Ml(1015,`p`),mN(1016,`Define se a indicação de campo opcional será exibida.`),lg(),Ml(1017,`blockquote`)(1018,`p`),mN(1019,`Não será exibida a indicação se:`),lg()(),Ml(1020,`ul`)(1021,`li`),mN(1022,`O campo conter `),Ml(1023,`code`),mN(1024,`p-required`),lg(),mN(1025,`;`),lg(),Ml(1026,`li`),mN(1027,`Não possuir `),Ml(1028,`code`),mN(1029,`p-help`),lg(),mN(1030,` e/ou `),Ml(1031,`code`),mN(1032,`p-label`),lg(),mN(1033,`.`),lg()()()(),Ml(1034,`tr`,15)(1035,`td`,16)(1036,`div`,24)(1037,`span`,25),mN(1038,`p-pattern`),ql(1039,`br`),lg()()(),Ml(1040,`td`,20)(1041,`code`,26),mN(1042,`string`),lg()(),Ml(1043,`td`,22),mN(1044,`-`),lg(),Ml(1045,`td`,23)(1046,`em`)(1047,`strong`),mN(1048,`(opcional)`),lg()(),Ml(1049,`p`),mN(1050,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),Ml(1051,`code`),mN(1052,`(p-mask)`),lg(),mN(1053,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),lg()()(),Ml(1054,`tr`,15)(1055,`td`,16)(1056,`div`,24)(1057,`span`,25),mN(1058,` p-placeholder`),ql(1059,`br`),lg()()(),Ml(1060,`td`,20)(1061,`code`,26),mN(1062,`string`),lg()(),Ml(1063,`td`,22)(1064,`p`),mN(1065,`''`),lg()(),Ml(1066,`td`,23)(1067,`em`)(1068,`strong`),mN(1069,`(opcional)`),lg()(),Ml(1070,`p`),mN(1071,`Mensagem que aparecerá enquanto o campo não estiver preenchido.`),lg()()(),Ml(1072,`tr`,15)(1073,`td`,16)(1074,`div`,24)(1075,`span`,25),mN(1076,` p-helper`),ql(1077,`br`),lg()()(),Ml(1078,`td`,20)(1079,`code`,32),mN(1080,`PoHelperOptions `),lg(),Ml(1081,`code`,26),mN(1082,` string`),lg()(),Ml(1083,`td`,22),mN(1084,`-`),lg(),Ml(1085,`td`,23)(1086,`em`)(1087,`strong`),mN(1088,`(opcional)`),lg()(),Ml(1089,`p`),mN(1090,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Ml(1091,`code`),mN(1092,`p-label`),lg(),mN(1093,` for definida, ou, ao lado do componente na ausência da propriedade `),Ml(1094,`code`),mN(1095,`p-label`),lg(),mN(1096,`.`),lg(),Ml(1097,`blockquote`)(1098,`p`),mN(1099,`Para mais informações acesse: `),Ml(1100,`a`,33),mN(1101,`https://po-ui.io/documentation/po-helper`),lg(),mN(1102,`.`),lg()(),Ml(1103,`blockquote`)(1104,`p`),mN(1105,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Ml(1106,`code`),mN(1107,`p-additional-help-tooltip`),lg(),mN(1108,` e `),Ml(1109,`code`),mN(1110,`p-additional-help`),lg(),mN(1111,`) será ignorado.`),lg()()()(),Ml(1112,`tr`,15)(1113,`td`,16)(1114,`div`,24)(1115,`span`,25),mN(1116,`p-readonly`),ql(1117,`br`),lg()()(),Ml(1118,`td`,20)(1119,`code`,27),mN(1120,`boolean`),lg()(),Ml(1121,`td`,22),mN(1122,`-`),lg(),Ml(1123,`td`,23)(1124,`em`)(1125,`strong`),mN(1126,`(opcional)`),lg()(),Ml(1127,`p`),mN(1128,`Indica que o campo será somente leitura.`),lg()()(),Ml(1129,`tr`,15)(1130,`td`,16)(1131,`div`,24)(1132,`span`,25),mN(1133,`p-required`),ql(1134,`br`),lg()()(),Ml(1135,`td`,20)(1136,`code`,27),mN(1137,`boolean`),lg()(),Ml(1138,`td`,22)(1139,`p`)(1140,`code`),mN(1141,`false`),lg()()(),Ml(1142,`td`,23)(1143,`em`)(1144,`strong`),mN(1145,`(opcional)`),lg()(),Ml(1146,`p`),mN(1147,`Define que o campo será obrigatório.`),lg(),Ml(1148,`blockquote`)(1149,`p`),mN(1150,`Esta propriedade é desconsiderada quando o input está desabilitado `),Ml(1151,`code`),mN(1152,`(p-disabled)`),lg(),mN(1153,`.`),lg()()()(),Ml(1154,`tr`,15)(1155,`td`,16)(1156,`div`,24)(1157,`span`,25),mN(1158,` p-required-field-error-message`),ql(1159,`br`),lg()()(),Ml(1160,`td`,20)(1161,`code`,27),mN(1162,`boolean`),lg()(),Ml(1163,`td`,22)(1164,`p`)(1165,`code`),mN(1166,`false`),lg()()(),Ml(1167,`td`,23)(1168,`em`)(1169,`strong`),mN(1170,`(opcional)`),lg()(),Ml(1171,`p`),mN(1172,`Exibe a mensagem setada na propriedade `),Ml(1173,`code`),mN(1174,`p-error-pattern`),lg(),mN(1175,` se o campo estiver vazio e for requerido.`),lg(),Ml(1176,`blockquote`)(1177,`p`),mN(1178,`Necessário que a propriedade `),Ml(1179,`code`),mN(1180,`p-required`),lg(),mN(1181,` esteja habilitada.`),lg()()()(),Ml(1182,`tr`,15)(1183,`td`,16)(1184,`div`,24)(1185,`span`,25),mN(1186,` p-show-required`),ql(1187,`br`),lg()()(),Ml(1188,`td`,20)(1189,`code`,27),mN(1190,`boolean`),lg()(),Ml(1191,`td`,22),mN(1192,`-`),lg(),Ml(1193,`td`,23)(1194,`p`),mN(1195,`Define se a indicação de campo obrigatório será exibida.`),lg(),Ml(1196,`blockquote`)(1197,`p`),mN(1198,`Não será exibida a indicação se:`),lg()(),Ml(1199,`ul`)(1200,`li`),mN(1201,`Não possuir `),Ml(1202,`code`),mN(1203,`p-help`),lg(),mN(1204,` e/ou `),Ml(1205,`code`),mN(1206,`p-label`),lg(),mN(1207,`.`),lg()()()(),Ml(1208,`tr`,15)(1209,`td`,16)(1210,`div`,24)(1211,`span`,25),mN(1212,` p-size`),ql(1213,`br`),lg()()(),Ml(1214,`td`,20)(1215,`code`,26),mN(1216,`string`),lg()(),Ml(1217,`td`,22)(1218,`p`)(1219,`code`),mN(1220,`medium`),lg()()(),Ml(1221,`td`,23)(1222,`em`)(1223,`strong`),mN(1224,`(opcional)`),lg()(),Ml(1225,`p`),mN(1226,`Define o tamanho do componente:`),lg(),Ml(1227,`ul`)(1228,`li`)(1229,`code`),mN(1230,`small`),lg(),mN(1231,`: altura do input como 32px (disponível apenas para acessibilidade AA).`),lg(),Ml(1232,`li`)(1233,`code`),mN(1234,`medium`),lg(),mN(1235,`: altura do input como 44px.`),lg()(),Ml(1236,`blockquote`)(1237,`p`),mN(1238,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Ml(1239,`code`),mN(1240,`medium`),lg(),mN(1241,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Ml(1242,`a`,34),mN(1243,`po-theme`),lg(),mN(1244,`.`),lg()()()(),Ml(1245,`tr`,15)(1246,`td`,16)(1247,`div`,24)(1248,`span`,25),mN(1249,` p-upper-case`),ql(1250,`br`),lg()()(),Ml(1251,`td`,20)(1252,`code`,27),mN(1253,`boolean`),lg()(),Ml(1254,`td`,22),mN(1255,`-`),lg(),Ml(1256,`td`,23)(1257,`p`),mN(1258,`Converte o conteúdo do campo em maiúsulo automaticamente.`),lg()()()(),Ml(1259,`h3`,11),mN(1260,`Métodos`),lg(),Ml(1261,`table`,35)(1262,`tr`,15)(1263,`th`,36)(1264,`div`,24)(1265,`h4`)(1266,`span`,25),mN(1267,` showAdditionalHelp `),lg()()()()(),Ml(1268,`tr`,23)(1269,`td`,23)(1270,`p`),mN(1271,`Método que exibe `),Ml(1272,`code`),mN(1273,`p-helper`),lg(),mN(1274,` ou executa a ação definida em `),Ml(1275,`code`),mN(1276,`p-helper{eventOnClick}`),lg(),mN(1277,` ou em `),Ml(1278,`code`),mN(1279,`p-additionalHelp`),lg(),mN(1280,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Ml(1281,`code`),mN(1282,`p-keydown`),lg(),mN(1283,`.`),lg(),Ml(1284,`blockquote`)(1285,`p`),mN(1286,`Exibe ou oculta o conteúdo do componente `),Ml(1287,`code`),mN(1288,`po-helper`),lg(),mN(1289,` quando o componente estiver com foco.`),lg()(),Ml(1290,`pre`)(1291,`code`),mN(1292,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),lg()(),Ml(1293,`pre`)(1294,`code`),mN(1295,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),lg()()()()(),ql(1296,`br`),Ml(1297,`table`,35)(1298,`tr`,15)(1299,`th`,36)(1300,`div`,24)(1301,`h4`)(1302,`span`,25),mN(1303,` focus `),lg()()()()(),Ml(1304,`tr`,23)(1305,`td`,23)(1306,`p`),mN(1307,`Função que atribui foco ao componente.`),lg(),Ml(1308,`p`),mN(1309,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),lg(),Ml(1310,`pre`)(1311,`code`),mN(1312,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),lg()()()()(),ql(1313,`br`),Ml(1314,`h3`),mN(1315,`Interfaces`),lg(),Ml(1316,`h4`,37)(1317,`code`,5),mN(1318,`ErrorAsyncProperties`),lg()(),Ml(1319,`div`,2)(1320,`p`),mN(1321,`Interface para realizar uma validação assíncrona no componente.`),lg()(),Ml(1322,`h4`,11),mN(1323,`Propriedades`),lg(),Ml(1324,`table`,12)(1325,`tr`,13)(1326,`th`,14),mN(1327,`Nome`),lg(),Ml(1328,`th`,14),mN(1329,`Tipo`),lg(),Ml(1330,`th`,14),mN(1331,`Descrição`),lg()(),Ml(1332,`tr`,15)(1333,`td`,16)(1334,`div`,24)(1335,`span`,25),mN(1336,` errorAsync`),ql(1337,`br`),lg()()(),Ml(1338,`td`,20)(1339,`code`,38),mN(1340,`(value) => Observable<boolean>`),lg()(),Ml(1341,`td`,23)(1342,`p`),mN(1343,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),Ml(1344,`code`),mN(1345,`change`),lg(),mN(1346,` ou `),Ml(1347,`code`),mN(1348,`change-model`),lg(),mN(1349,`, dependendo do valor da propriedade `),Ml(1350,`code`),mN(1351,`triggerMode`),lg(),mN(1352,`.`),lg()()(),Ml(1353,`tr`,15)(1354,`td`,16)(1355,`div`,24)(1356,`span`,25),mN(1357,` triggerMode`),ql(1358,`br`),lg()()(),Ml(1359,`td`,20)(1360,`code`,39),mN(1361,`'change' `),lg(),Ml(1362,`code`,40),mN(1363,` 'changeModel'`),lg()(),Ml(1364,`td`,23)(1365,`em`)(1366,`strong`),mN(1367,`(opcional)`),lg()(),Ml(1368,`p`),mN(1369,`Controla se o método será executado no disparo do output `),Ml(1370,`code`),mN(1371,`change`),lg(),mN(1372,` ou `),Ml(1373,`code`),mN(1374,`change-model`),lg(),mN(1375,`.`),lg()()()()())},dependencies:[Ga],encapsulation:2,changeDetection:1})}return a})();var ye=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||a)(w(Xn),w(Cn))};static ɵcmp=Un({type:a,selectors:[[`ng-component`]],standalone:!1,decls:8,vars:4,consts:[[`p-title`,`Password`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(l,i){l&1&&(Ml(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),ht(`p-click`,function(){return i.changeTab(`doc`)}),ql(3,`sample-po-password-doc`),lg(),Ml(4,`po-tab`,3),ht(`p-click`,function(){return i.changeTab(`web`)}),ql(5,`sample-po-password-basic-view`)(6,`sample-po-password-labs-view`)(7,`sample-po-password-reset-view`),lg()()()),l&2&&(cw(`p-actions`,i.actions),Up(2),cw(`p-active`,i.activeTab===`doc`),Up(2),cw(`p-hide`,i.hidePoWebSample)(`p-active`,i.activeTab===`web`))},dependencies:[V8e,SCe,ECe,re,de,me,se],encapsulation:2,changeDetection:1})}return a})()}];var ue=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[NL.forChild(ye),NL]})}return a})();var $e=(()=>{class a{static ɵfac=function(l){return new(l||a)};static ɵmod=he({type:a});static ɵinj=ue$1({imports:[ar,ue]})}return a})();export{$e as DocPoPasswordModule};